/**
 * Framework7 1.4.2
 * Full Featured Mobile HTML Framework For Building iOS & Android Apps
 * 
 * http://www.idangero.us/framework7
 * 
 * Copyright 2016, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 * 
 * Licensed under MIT
 * 
 * Released on: February 27, 2016
 */
! function() {
    "use strict";
    window.Framework7 = function(a) {
        function t(e) {
            var a = e.replace(/^./, function(e) {
                return e.toUpperCase()
            });
            i["onPage" + a] = function(a, t) {
                return i.onPage(e, a, t)
            }
        }

        function n() {
            var e, a = o(this),
                t = a[0].scrollTop,
                n = a[0].scrollHeight,
                r = a[0].offsetHeight,
                i = a[0].getAttribute("data-distance"),
                s = a.find(".virtual-list"),
                l = a.hasClass("infinite-scroll-top");
            if (i || (i = 50), "string" == typeof i && i.indexOf("%") >= 0 && (i = parseInt(i, 10) / 100 * r), i > r && (i = r), l) i > t && a.trigger("infinite");
            else if (t + r >= n - i) {
                if (s.length > 0 && (e = s[0].f7VirtualList, e && !e.reachEnd)) return;
                a.trigger("infinite")
            }
        }

        function r() {
            i.device.ipad && (document.body.scrollLeft = 0, setTimeout(function() {
                document.body.scrollLeft = 0
            }, 0))
        }
        var i = this;
        i.version = "1.4.2", i.params = {
            cache: !0,
            cacheIgnore: [],
            cacheIgnoreGetParameters: !1,
            cacheDuration: 6e5,
            preloadPreviousPage: !0,
            uniqueHistory: !1,
            uniqueHistoryIgnoreGetParameters: !1,
            dynamicPageUrl: "content-{{index}}",
            allowDuplicateUrls: !1,
            router: !0,
            pushState: !1,
            pushStateRoot: void 0,
            pushStateNoAnimation: !1,
            pushStateSeparator: "#!/",
            pushStateOnLoad: !0,
            fastClicks: !0,
            fastClicksDistanceThreshold: 10,
            fastClicksDelayBetweenClicks: 50,
            tapHold: !1,
            tapHoldDelay: 750,
            tapHoldPreventClicks: !0,
            activeState: !0,
            activeStateElements: "a, button, label, span",
            animateNavBackIcon: !1,
            swipeBackPage: !0,
            swipeBackPageThreshold: 0,
            swipeBackPageActiveArea: 30,
            swipeBackPageAnimateShadow: !0,
            swipeBackPageAnimateOpacity: !0,
            ajaxLinks: void 0,
            externalLinks: ".external",
            sortable: !0,
            hideNavbarOnPageScroll: !1,
            hideToolbarOnPageScroll: !1,
            hideTabbarOnPageScroll: !1,
            showBarsOnPageScrollEnd: !0,
            showBarsOnPageScrollTop: !0,
            swipeout: !0,
            swipeoutActionsNoFold: !1,
            swipeoutNoFollow: !1,
            smartSelectOpenIn: "page",
            smartSelectBackText: "Back",
            smartSelectPopupCloseText: "Close",
            smartSelectPickerCloseText: "Done",
            smartSelectSearchbar: !1,
            smartSelectBackOnSelect: !1,
            scrollTopOnNavbarClick: !1,
            scrollTopOnStatusbarClick: !1,
            swipePanel: !1,
            swipePanelActiveArea: 0,
            swipePanelCloseOpposite: !0,
            swipePanelOnlyClose: !1,
            swipePanelNoFollow: !1,
            swipePanelThreshold: 0,
            panelsCloseByOutside: !0,
            modalButtonOk: "OK",
            modalButtonCancel: "Cancel",
            modalUsernamePlaceholder: "Username",
            modalPasswordPlaceholder: "Password",
            modalTitle: "Framework7",
            modalCloseByOutside: !1,
            actionsCloseByOutside: !0,
            popupCloseByOutside: !0,
            modalPreloaderTitle: "Loading... ",
            modalStack: !0,
            imagesLazyLoadThreshold: 0,
            imagesLazyLoadSequential: !0,
            viewClass: "view",
            viewMainClass: "view-main",
            viewsClass: "views",
            notificationCloseOnClick: !1,
            notificationCloseIcon: !0,
            notificationCloseButtonText: "Close",
            animatePages: !0,
            templates: {},
            template7Data: {},
            template7Pages: !1,
            precompileTemplates: !1,
            material: !1,
            materialPageLoadDelay: 0,
            materialPreloaderSvg: '<svg xmlns="http://www.w3.org/2000/svg" height="75" width="75" viewbox="0 0 75 75"><circle cx="37.5" cy="37.5" r="33.5" stroke-width="8"/></svg>',
            materialPreloaderHtml: '<span class="preloader-inner"><span class="preloader-inner-gap"></span><span class="preloader-inner-left"><span class="preloader-inner-half-circle"></span></span><span class="preloader-inner-right"><span class="preloader-inner-half-circle"></span></span></span>',
            materialRipple: !0,
            materialRippleElements: ".ripple, a.link, a.item-link, .button, .modal-button, .tab-link, .label-radio, .label-checkbox, .actions-modal-button, a.searchbar-clear, a.floating-button, .floating-button > a, .speed-dial-buttons a",
            init: !0
        };
        for (var s in a) i.params[s] = a[s];
        var o = e,
            l = Template7;
        i._compiledTemplates = {}, i.touchEvents = {
            start: i.support.touch ? "touchstart" : "mousedown",
            move: i.support.touch ? "touchmove" : "mousemove",
            end: i.support.touch ? "touchend" : "mouseup"
        }, i.ls = window.localStorage, i.rtl = "rtl" === o("body").css("direction"), i.rtl && o("html").attr("dir", "rtl"), "undefined" != typeof i.params.statusbarOverlay && (i.params.statusbarOverlay ? o("html").addClass("with-statusbar-overlay") : o("html").removeClass("with-statusbar-overlay")), i.views = [];
        var p = function(e, a) {
            var t, n = {
                dynamicNavbar: !1,
                domCache: !1,
                linksView: void 0,
                reloadPages: !1,
                uniqueHistory: i.params.uniqueHistory,
                uniqueHistoryIgnoreGetParameters: i.params.uniqueHistoryIgnoreGetParameters,
                allowDuplicateUrls: i.params.allowDuplicateUrls,
                swipeBackPage: i.params.swipeBackPage,
                swipeBackPageAnimateShadow: i.params.swipeBackPageAnimateShadow,
                swipeBackPageAnimateOpacity: i.params.swipeBackPageAnimateOpacity,
                swipeBackPageActiveArea: i.params.swipeBackPageActiveArea,
                swipeBackPageThreshold: i.params.swipeBackPageThreshold,
                animatePages: i.params.animatePages,
                preloadPreviousPage: i.params.preloadPreviousPage
            };
            a = a || {}, a.dynamicNavbar && i.params.material && (a.dynamicNavbar = !1);
            for (var r in n) "undefined" == typeof a[r] && (a[r] = n[r]);
            var s = this;
            s.params = a, s.selector = e;
            var l = o(e);
            if (s.container = l[0], "string" != typeof e && (e = (l.attr("id") ? "#" + l.attr("id") : "") + (l.attr("class") ? "." + l.attr("class").replace(/ /g, ".").replace(".active", "") : ""), s.selector = e), s.main = l.hasClass(i.params.viewMainClass), s.contentCache = {}, s.pagesCache = {}, l[0].f7View = s, s.pagesContainer = l.find(".pages")[0], s.initialPages = [], s.initialPagesUrl = [], s.initialNavbars = [], s.params.domCache) {
                var p = l.find(".page");
                for (t = 0; t < p.length; t++) s.initialPages.push(p[t]), s.initialPagesUrl.push("#" + p.eq(t).attr("data-page"));
                if (s.params.dynamicNavbar) {
                    var d = l.find(".navbar-inner");
                    for (t = 0; t < d.length; t++) s.initialNavbars.push(d[t])
                }
            }
            s.allowPageChange = !0;
            var c = document.location.href;
            s.history = [];
            var u = c,
                m = i.params.pushStateSeparator,
                f = i.params.pushStateRoot;
            i.params.pushState && s.main && (f ? u = f : u.indexOf(m) >= 0 && u.indexOf(m + "#") < 0 && (u = u.split(m)[0]));
            var h, g;
            s.activePage || (h = o(s.pagesContainer).find(".page-on-center"), 0 === h.length && (h = o(s.pagesContainer).find(".page:not(.cached)"), h = h.eq(h.length - 1)), h.length > 0 && (g = h[0].f7PageData)), s.params.domCache && h ? (s.url = l.attr("data-url") || s.params.url || "#" + h.attr("data-page"), s.pagesCache[s.url] = h.attr("data-page")) : s.url = l.attr("data-url") || s.params.url || u, g && (g.view = s, g.url = s.url, s.params.domCache && s.params.dynamicNavbar && !g.navbarInnerContainer && (g.navbarInnerContainer = s.initialNavbars[s.initialPages.indexOf(g.container)]), s.activePage = g, h[0].f7PageData = g), s.url && s.history.push(s.url);
            var v, b, w, C, y, x, T, k, P, S, M, I = !1,
                O = !1,
                E = {},
                D = [],
                L = [],
                B = !0,
                z = [],
                N = [];
            if (s.handleTouchStart = function(e) {
                    B && s.params.swipeBackPage && !I && !i.swipeoutOpenedEl && s.allowPageChange && (O = !1, I = !0, v = void 0, E.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, E.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY, C = (new Date).getTime(), P = s.params.dynamicNavbar && l.find(".navbar-inner").length > 1)
                }, s.handleTouchMove = function(e) {
                    if (I) {
                        var a = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX,
                            t = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY;
                        if ("undefined" == typeof v && (v = !!(v || Math.abs(t - E.y) > Math.abs(a - E.x))), v || e.f7PreventSwipeBack || i.preventSwipeBack) return void(I = !1);
                        if (!O) {
                            var n = !1;
                            b = l.width();
                            var r = o(e.target),
                                p = r.hasClass("swipeout") ? r : r.parents(".swipeout");
                            p.length > 0 && (!i.rtl && p.find(".swipeout-actions-left").length > 0 && (n = !0), i.rtl && p.find(".swipeout-actions-right").length > 0 && (n = !0)), D = r.is(".page") ? r : r.parents(".page"), D.hasClass("no-swipeback") && (n = !0), L = l.find(".page-on-left:not(.cached)");
                            var d = E.x - l.offset().left > s.params.swipeBackPageActiveArea;
                            if (d = i.rtl ? E.x < l.offset().left - l[0].scrollLeft + b - s.params.swipeBackPageActiveArea : E.x - l.offset().left > s.params.swipeBackPageActiveArea, d && (n = !0), (0 === L.length || 0 === D.length) && (n = !0), n) return void(I = !1);
                            s.params.swipeBackPageAnimateShadow && !i.device.android && (S = D.find(".swipeback-page-shadow"), 0 === S.length && (S = o('<div class="swipeback-page-shadow"></div>'), D.append(S))), P && (z = l.find(".navbar-on-center:not(.cached)"), N = l.find(".navbar-on-left:not(.cached)"), y = z.find(".left, .center, .right, .subnavbar, .fading"), x = N.find(".left, .center, .right, .subnavbar, .fading"), i.params.animateNavBackIcon && (T = z.find(".left.sliding .back .icon"), k = N.find(".left.sliding .back .icon"))), o(".picker-modal.modal-in").length > 0 && i.closeModal(o(".picker-modal.modal-in"))
                        }
                        e.f7PreventPanelSwipe = !0, O = !0, e.preventDefault();
                        var c = i.rtl ? -1 : 1;
                        w = (a - E.x - s.params.swipeBackPageThreshold) * c, 0 > w && (w = 0);
                        var u = w / b,
                            m = {
                                percentage: u,
                                activePage: D[0],
                                previousPage: L[0],
                                activeNavbar: z[0],
                                previousNavbar: N[0]
                            };
                        s.params.onSwipeBackMove && s.params.onSwipeBackMove(m), l.trigger("swipeBackMove", m);
                        var f = w * c,
                            h = (w / 5 - b / 5) * c;
                        if (1 === i.device.pixelRatio && (f = Math.round(f), h = Math.round(h)), D.transform("translate3d(" + f + "px,0,0)"), s.params.swipeBackPageAnimateShadow && !i.device.android && (S[0].style.opacity = 1 - 1 * u), L.transform("translate3d(" + h + "px,0,0)"), s.params.swipeBackPageAnimateOpacity && (L[0].style.opacity = .9 + .1 * u), P) {
                            var g;
                            for (g = 0; g < y.length; g++)
                                if (M = o(y[g]), M.is(".subnavbar.sliding") || (M[0].style.opacity = 1 - 1.3 * u), M[0].className.indexOf("sliding") >= 0) {
                                    var C = u * M[0].f7NavbarRightOffset;
                                    1 === i.device.pixelRatio && (C = Math.round(C)), M.transform("translate3d(" + C + "px,0,0)"), i.params.animateNavBackIcon && M[0].className.indexOf("left") >= 0 && T.length > 0 && T.transform("translate3d(" + -C + "px,0,0)")
                                } for (g = 0; g < x.length; g++)
                                if (M = o(x[g]), M.is(".subnavbar.sliding") || (M[0].style.opacity = 1.3 * u - .3), M[0].className.indexOf("sliding") >= 0) {
                                    var B = M[0].f7NavbarLeftOffset * (1 - u);
                                    1 === i.device.pixelRatio && (B = Math.round(B)), M.transform("translate3d(" + B + "px,0,0)"), i.params.animateNavBackIcon && M[0].className.indexOf("left") >= 0 && k.length > 0 && k.transform("translate3d(" + -B + "px,0,0)")
                                }
                        }
                    }
                }, s.handleTouchEnd = function(e) {
                    if (!I || !O) return I = !1, void(O = !1);
                    if (I = !1, O = !1, 0 === w) return o([D[0], L[0]]).transform("").css({
                        opacity: "",
                        boxShadow: ""
                    }), void(P && (y.transform("").css({
                        opacity: ""
                    }), x.transform("").css({
                        opacity: ""
                    }), T && T.length > 0 && T.transform(""), k && T.length > 0 && k.transform("")));
                    var a = (new Date).getTime() - C,
                        t = !1;
                    (300 > a && w > 10 || a >= 300 && w > b / 2) && (D.removeClass("page-on-center").addClass("page-on-right"), L.removeClass("page-on-left").addClass("page-on-center"), P && (z.removeClass("navbar-on-center").addClass("navbar-on-right"), N.removeClass("navbar-on-left").addClass("navbar-on-center")), t = !0), o([D[0], L[0]]).transform("").css({
                        opacity: "",
                        boxShadow: ""
                    }).addClass("page-transitioning"), P && (y.css({
                        opacity: ""
                    }).each(function() {
                        var e = t ? this.f7NavbarRightOffset : 0,
                            a = o(this);
                        a.transform("translate3d(" + e + "px,0,0)"), i.params.animateNavBackIcon && a.hasClass("left") && T.length > 0 && T.addClass("page-transitioning").transform("translate3d(" + -e + "px,0,0)")
                    }).addClass("page-transitioning"), x.transform("").css({
                        opacity: ""
                    }).each(function() {
                        var e = t ? 0 : this.f7NavbarLeftOffset,
                            a = o(this);
                        a.transform("translate3d(" + e + "px,0,0)"), i.params.animateNavBackIcon && a.hasClass("left") && k.length > 0 && k.addClass("page-transitioning").transform("translate3d(" + -e + "px,0,0)")
                    }).addClass("page-transitioning")), B = !1, s.allowPageChange = !1;
                    var n = {
                        activePage: D[0],
                        previousPage: L[0],
                        activeNavbar: z[0],
                        previousNavbar: N[0]
                    };
                    if (t) {
                        var r = s.history[s.history.length - 2];
                        s.url = r, i.pageBackCallback("before", s, {
                            pageContainer: D[0],
                            url: r,
                            position: "center",
                            newPage: L,
                            oldPage: D,
                            swipeBack: !0
                        }), i.pageAnimCallback("before", s, {
                            pageContainer: L[0],
                            url: r,
                            position: "left",
                            newPage: L,
                            oldPage: D,
                            swipeBack: !0
                        }), s.params.onSwipeBackBeforeChange && s.params.onSwipeBackBeforeChange(n), l.trigger("swipeBackBeforeChange", n)
                    } else s.params.onSwipeBackBeforeReset && s.params.onSwipeBackBeforeReset(n), l.trigger("swipeBackBeforeReset", n);
                    D.transitionEnd(function() {
                        o([D[0], L[0]]).removeClass("page-transitioning"), P && (y.removeClass("page-transitioning").css({
                            opacity: ""
                        }), x.removeClass("page-transitioning").css({
                            opacity: ""
                        }), T && T.length > 0 && T.removeClass("page-transitioning"), k && k.length > 0 && k.removeClass("page-transitioning")), B = !0, s.allowPageChange = !0, t ? (i.params.pushState && s.main && history.back(), i.pageBackCallback("after", s, {
                            pageContainer: D[0],
                            url: r,
                            position: "center",
                            newPage: L,
                            oldPage: D,
                            swipeBack: !0
                        }), i.pageAnimCallback("after", s, {
                            pageContainer: L[0],
                            url: r,
                            position: "left",
                            newPage: L,
                            oldPage: D,
                            swipeBack: !0
                        }), i.router.afterBack(s, D, L), s.params.onSwipeBackAfterChange && s.params.onSwipeBackAfterChange(n), l.trigger("swipeBackAfterChange", n)) : (s.params.onSwipeBackAfterReset && s.params.onSwipeBackAfterReset(n), l.trigger("swipeBackAfterReset", n)), S && S.length > 0 && S.remove()
                    })
                }, s.attachEvents = function(e) {
                    var a = e ? "off" : "on";
                    l[a](i.touchEvents.start, s.handleTouchStart), l[a](i.touchEvents.move, s.handleTouchMove), l[a](i.touchEvents.end, s.handleTouchEnd)
                }, s.detachEvents = function() {
                    s.attachEvents(!0)
                }, s.params.swipeBackPage && !i.params.material && s.attachEvents(), i.views.push(s), s.main && (i.mainView = s), s.router = {
                    load: function(e) {
                        return i.router.load(s, e)
                    },
                    back: function(e) {
                        return i.router.back(s, e)
                    },
                    loadPage: function(e) {
                        if (e = e || {}, "string" == typeof e) {
                            var a = e;
                            e = {}, a && 0 === a.indexOf("#") && s.params.domCache ? e.pageName = a.split("#")[1] : e.url = a
                        }
                        return i.router.load(s, e)
                    },
                    loadContent: function(e) {
                        return i.router.load(s, {
                            content: e
                        })
                    },
                    reloadPage: function(e) {
                        return i.router.load(s, {
                            url: e,
                            reload: !0
                        })
                    },
                    reloadContent: function(e) {
                        return i.router.load(s, {
                            content: e,
                            reload: !0
                        })
                    },
                    reloadPreviousPage: function(e) {
                        return i.router.load(s, {
                            url: e,
                            reloadPrevious: !0,
                            reload: !0
                        })
                    },
                    reloadPreviousContent: function(e) {
                        return i.router.load(s, {
                            content: e,
                            reloadPrevious: !0,
                            reload: !0
                        })
                    },
                    refreshPage: function() {
                        var e = {
                            url: s.url,
                            reload: !0,
                            ignoreCache: !0
                        };
                        return e.url && 0 === e.url.indexOf("#") && (s.params.domCache && s.pagesCache[e.url] ? (e.pageName = s.pagesCache[e.url], e.url = void 0, delete e.url) : s.contentCache[e.url] && (e.content = s.contentCache[e.url], e.url = void 0, delete e.url)), i.router.load(s, e)
                    },
                    refreshPreviousPage: function() {
                        var e = {
                            url: s.history[s.history.length - 2],
                            reload: !0,
                            reloadPrevious: !0,
                            ignoreCache: !0
                        };
                        return e.url && 0 === e.url.indexOf("#") && s.params.domCache && s.pagesCache[e.url] && (e.pageName = s.pagesCache[e.url], e.url = void 0, delete e.url), i.router.load(s, e)
                    }
                }, s.loadPage = s.router.loadPage, s.loadContent = s.router.loadContent, s.reloadPage = s.router.reloadPage, s.reloadContent = s.router.reloadContent, s.reloadPreviousPage = s.router.reloadPreviousPage, s.reloadPreviousContent = s.router.reloadPreviousContent, s.refreshPage = s.router.refreshPage, s.refreshPreviousPage = s.router.refreshPreviousPage, s.back = s.router.back, s.hideNavbar = function() {
                    return i.hideNavbar(l.find(".navbar"))
                }, s.showNavbar = function() {
                    return i.showNavbar(l.find(".navbar"))
                }, s.hideToolbar = function() {
                    return i.hideToolbar(l.find(".toolbar"))
                }, s.showToolbar = function() {
                    return i.showToolbar(l.find(".toolbar"))
                }, i.params.pushState && i.params.pushStateOnLoad && s.main) {
                var H, A = c.split(m)[1];
                f ? H = c.split(i.params.pushStateRoot + m)[1] : m && c.indexOf(m) >= 0 && c.indexOf(m + "#") < 0 && (H = A);
                var R = i.params.pushStateNoAnimation ? !1 : void 0,
                    V = history.state;
                H ? H.indexOf("#") >= 0 && s.params.domCache && V && V.pageName && "viewIndex" in V ? i.router.load(s, {
                    pageName: V.pageName,
                    url: V.url,
                    animatePages: R,
                    pushState: !1
                }) : H.indexOf("#") >= 0 && s.params.domCache && s.initialPagesUrl.indexOf(H) >= 0 ? i.router.load(s, {
                    pageName: H.replace("#", ""),
                    animatePages: R,
                    pushState: !1
                }) : i.router.load(s, {
                    url: H,
                    animatePages: R,
                    pushState: !1
                }) : s.params.domCache && c.indexOf(m + "#") >= 0 && (V && V.pageName && "viewIndex" in V ? i.router.load(s, {
                    pageName: V.pageName,
                    url: V.url,
                    animatePages: R,
                    pushState: !1
                }) : m && 0 === A.indexOf("#") && s.initialPagesUrl.indexOf(A) && i.router.load(s, {
                    pageName: A.replace("#", ""),
                    animatePages: R,
                    pushState: !1
                }))
            }
            return s.destroy = function() {
                s.detachEvents(), s = void 0
            }, i.pluginHook("addView", s), s
        };
        i.addView = function(e, a) {
            return new p(e, a)
        }, i.getCurrentView = function(e) {
            var a = o(".popover.modal-in .view"),
                t = o(".popup.modal-in .view"),
                n = o(".panel.active .view"),
                r = o(".views"),
                i = r.children(".view");
            if (i.length > 1 && i.hasClass("tab") && (i = r.children(".view.active")), a.length > 0 && a[0].f7View) return a[0].f7View;
            if (t.length > 0 && t[0].f7View) return t[0].f7View;
            if (n.length > 0 && n[0].f7View) return n[0].f7View;
            if (i.length > 0) {
                if (1 === i.length && i[0].f7View) return i[0].f7View;
                if (i.length > 1) {
                    for (var s = [], l = 0; l < i.length; l++) i[l].f7View && s.push(i[l].f7View);
                    if (s.length > 0 && "undefined" != typeof e) return s[e];
                    if (s.length > 1) return s;
                    if (1 === s.length) return s[0];
                    return
                }
            }
        }, i.navbarInitCallback = function(e, a, t, n) {
            if (!t && n && (t = o(n).parent(".navbar")[0]), !n.f7NavbarInitialized || !e || e.params.domCache) {
                var r = {
                        container: t,
                        innerContainer: n
                    },
                    s = a && a.f7PageData,
                    l = {
                        page: s,
                        navbar: r
                    };
                if (n.f7NavbarInitialized && (e && e.params.domCache || !e && o(t).parents(".popup, .popover, .login-screen, .modal, .actions-modal, .picker-modal").length > 0)) return i.reinitNavbar(t, n), i.pluginHook("navbarReinit", l), void o(n).trigger("navbarReinit", l);
                n.f7NavbarInitialized = !0, i.pluginHook("navbarBeforeInit", r, s), o(n).trigger("navbarBeforeInit", l), i.initNavbar(t, n), i.pluginHook("navbarInit", r, s), o(n).trigger("navbarInit", l)
            }
        }, i.navbarRemoveCallback = function(e, a, t, n) {
            !t && n && (t = o(n).parent(".navbar")[0]);
            var r = {
                    container: t,
                    innerContainer: n
                },
                s = a.f7PageData,
                l = {
                    page: s,
                    navbar: r
                };
            i.pluginHook("navbarBeforeRemove", r, s), o(n).trigger("navbarBeforeRemove", l)
        }, i.initNavbar = function(e, a) {
            i.initSearchbar && i.initSearchbar(a)
        }, i.reinitNavbar = function(e, a) {}, i.initNavbarWithCallback = function(e) {
            e = o(e);
            var a, t = e.parents("." + i.params.viewClass);
            0 !== t.length && (0 !== e.parents(".navbar-through").length || 0 !== t.find(".navbar-through").length) && (a = t[0].f7View || void 0, e.find(".navbar-inner").each(function() {
                var n, r = this;
                if (o(r).attr("data-page") && (n = t.find('.page[data-page="' + o(r).attr("data-page") + '"]')[0]), !n) {
                    var s = t.find(".page");
                    1 === s.length ? n = s[0] : t.find(".page").each(function() {
                        this.f7PageData && this.f7PageData.navbarInnerContainer === r && (n = this)
                    })
                }
                i.navbarInitCallback(a, n, e[0], r)
            }))
        }, i.sizeNavbars = function(e) {
            if (!i.params.material) {
                var a = e ? o(e).find(".navbar .navbar-inner:not(.cached)") : o(".navbar .navbar-inner:not(.cached)");
                a.each(function() {
                    var e = o(this);
                    if (!e.hasClass("cached")) {
                        var a, t, n = i.rtl ? e.find(".right") : e.find(".left"),
                            r = i.rtl ? e.find(".left") : e.find(".right"),
                            s = e.find(".center"),
                            l = e.find(".subnavbar"),
                            p = 0 === n.length,
                            d = 0 === r.length,
                            c = p ? 0 : n.outerWidth(!0),
                            u = d ? 0 : r.outerWidth(!0),
                            m = s.outerWidth(!0),
                            f = e.styles(),
                            h = e[0].offsetWidth - parseInt(f.paddingLeft, 10) - parseInt(f.paddingRight, 10),
                            g = e.hasClass("navbar-on-left");
                        d && (a = h - m), p && (a = 0), p || d || (a = (h - u - m + c) / 2);
                        var v = (h - m) / 2;
                        h - c - u > m ? (c > v && (v = c), v + m > h - u && (v = h - u - m), t = v - a) : t = 0;
                        var b = i.rtl ? -1 : 1;
                        if (s.hasClass("sliding") && (s[0].f7NavbarLeftOffset = -(a + t) * b, s[0].f7NavbarRightOffset = (h - a - t - m) * b, g)) {
                            if (i.params.animateNavBackIcon) {
                                var w = e.parent().find(".navbar-on-center").find(".left.sliding .back .icon ~ span");
                                w.length > 0 && (s[0].f7NavbarLeftOffset += w[0].offsetLeft)
                            }
                            s.transform("translate3d(" + s[0].f7NavbarLeftOffset + "px, 0, 0)")
                        }!p && n.hasClass("sliding") && (i.rtl ? (n[0].f7NavbarLeftOffset = -(h - n[0].offsetWidth) / 2 * b, n[0].f7NavbarRightOffset = c * b) : (n[0].f7NavbarLeftOffset = -c, n[0].f7NavbarRightOffset = (h - n[0].offsetWidth) / 2, i.params.animateNavBackIcon && n.find(".back .icon").length > 0 && (n[0].f7NavbarRightOffset -= n.find(".back .icon")[0].offsetWidth)), g && n.transform("translate3d(" + n[0].f7NavbarLeftOffset + "px, 0, 0)")), !d && r.hasClass("sliding") && (i.rtl ? (r[0].f7NavbarLeftOffset = -u * b, r[0].f7NavbarRightOffset = (h - r[0].offsetWidth) / 2 * b) : (r[0].f7NavbarLeftOffset = -(h - r[0].offsetWidth) / 2, r[0].f7NavbarRightOffset = u), g && r.transform("translate3d(" + r[0].f7NavbarLeftOffset + "px, 0, 0)")), l.length && l.hasClass("sliding") && (l[0].f7NavbarLeftOffset = i.rtl ? l[0].offsetWidth : -l[0].offsetWidth, l[0].f7NavbarRightOffset = -l[0].f7NavbarLeftOffset);
                        var C = t;
                        i.rtl && p && d && s.length > 0 && (C = -C), s.css({
                            left: C + "px"
                        })
                    }
                })
            }
        }, i.hideNavbar = function(e) {
            return o(e).addClass("navbar-hidden"), !0
        }, i.showNavbar = function(e) {
            var a = o(e);
            return a.addClass("navbar-hiding").removeClass("navbar-hidden").transitionEnd(function() {
                a.removeClass("navbar-hiding")
            }), !0
        }, i.hideToolbar = function(e) {
            return o(e).addClass("toolbar-hidden"), !0
        }, i.showToolbar = function(e) {
            var a = o(e);
            a.addClass("toolbar-hiding").removeClass("toolbar-hidden").transitionEnd(function() {
                a.removeClass("toolbar-hiding")
            })
        };
        var d = function(e, a) {
            function t(e) {
                return e.replace(/[^\u0000-\u007E]/g, function(e) {
                    return d[e] || e
                })
            }

            function n(e) {
                e.preventDefault()
            }
            var r = {
                input: null,
                clearButton: null,
                cancelButton: null,
                searchList: null,
                searchIn: ".item-title",
                searchBy: "",
                found: null,
                notFound: null,
                overlay: null,
                ignore: ".searchbar-ignore",
                customSearch: !1,
                removeDiacritics: !1,
                hideDividers: !0,
                hideGroups: !0
            };
            a = a || {};
            for (var s in r)("undefined" == typeof a[s] || null === a[s]) && (a[s] = r[s]);
            var l = this;
            l.material = i.params.material, l.params = a, e = o(e), l.container = e, l.active = !1, l.input = l.params.input ? o(l.params.input) : l.container.find('input[type="search"]'), l.clearButton = l.params.clearButton ? o(l.params.clearButton) : l.container.find(".searchbar-clear"), l.cancelButton = l.params.cancelButton ? o(l.params.cancelButton) : l.container.find(".searchbar-cancel"), l.searchList = o(l.params.searchList), l.isVirtualList = l.searchList.hasClass("virtual-list"), l.pageContainer = l.container.parents(".page").eq(0), l.params.overlay ? l.overlay = o(l.params.overlay) : l.overlay = l.pageContainer.length > 0 ? l.pageContainer.find(".searchbar-overlay") : o(".searchbar-overlay"), l.params.found ? l.found = o(l.params.found) : l.found = l.pageContainer.length > 0 ? l.pageContainer.find(".searchbar-found") : o(".searchbar-found"), l.params.notFound ? l.notFound = o(l.params.notFound) : l.notFound = l.pageContainer.length > 0 ? l.pageContainer.find(".searchbar-not-found") : o(".searchbar-not-found");
            for (var p = [{
                    base: "A",
                    letters: "AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"
                }, {
                    base: "AA",
                    letters: "Ꜳ"
                }, {
                    base: "AE",
                    letters: "ÆǼǢ"
                }, {
                    base: "AO",
                    letters: "Ꜵ"
                }, {
                    base: "AU",
                    letters: "Ꜷ"
                }, {
                    base: "AV",
                    letters: "ꜸꜺ"
                }, {
                    base: "AY",
                    letters: "Ꜽ"
                }, {
                    base: "B",
                    letters: "BⒷＢḂḄḆɃƂƁ"
                }, {
                    base: "C",
                    letters: "CⒸＣĆĈĊČÇḈƇȻꜾ"
                }, {
                    base: "D",
                    letters: "DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"
                }, {
                    base: "DZ",
                    letters: "ǱǄ"
                }, {
                    base: "Dz",
                    letters: "ǲǅ"
                }, {
                    base: "E",
                    letters: "EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"
                }, {
                    base: "F",
                    letters: "FⒻＦḞƑꝻ"
                }, {
                    base: "G",
                    letters: "GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"
                }, {
                    base: "H",
                    letters: "HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"
                }, {
                    base: "I",
                    letters: "IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"
                }, {
                    base: "J",
                    letters: "JⒿＪĴɈ"
                }, {
                    base: "K",
                    letters: "KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"
                }, {
                    base: "L",
                    letters: "LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"
                }, {
                    base: "LJ",
                    letters: "Ǉ"
                }, {
                    base: "Lj",
                    letters: "ǈ"
                }, {
                    base: "M",
                    letters: "MⓂＭḾṀṂⱮƜ"
                }, {
                    base: "N",
                    letters: "NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"
                }, {
                    base: "NJ",
                    letters: "Ǌ"
                }, {
                    base: "Nj",
                    letters: "ǋ"
                }, {
                    base: "O",
                    letters: "OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"
                }, {
                    base: "OI",
                    letters: "Ƣ"
                }, {
                    base: "OO",
                    letters: "Ꝏ"
                }, {
                    base: "OU",
                    letters: "Ȣ"
                }, {
                    base: "OE",
                    letters: "Œ"
                }, {
                    base: "oe",
                    letters: "œ"
                }, {
                    base: "P",
                    letters: "PⓅＰṔṖƤⱣꝐꝒꝔ"
                }, {
                    base: "Q",
                    letters: "QⓆＱꝖꝘɊ"
                }, {
                    base: "R",
                    letters: "RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"
                }, {
                    base: "S",
                    letters: "SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"
                }, {
                    base: "T",
                    letters: "TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"
                }, {
                    base: "TZ",
                    letters: "Ꜩ"
                }, {
                    base: "U",
                    letters: "UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"
                }, {
                    base: "V",
                    letters: "VⓋＶṼṾƲꝞɅ"
                }, {
                    base: "VY",
                    letters: "Ꝡ"
                }, {
                    base: "W",
                    letters: "WⓌＷẀẂŴẆẄẈⱲ"
                }, {
                    base: "X",
                    letters: "XⓍＸẊẌ"
                }, {
                    base: "Y",
                    letters: "YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"
                }, {
                    base: "Z",
                    letters: "ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"
                }, {
                    base: "a",
                    letters: "aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"
                }, {
                    base: "aa",
                    letters: "ꜳ"
                }, {
                    base: "ae",
                    letters: "æǽǣ"
                }, {
                    base: "ao",
                    letters: "ꜵ"
                }, {
                    base: "au",
                    letters: "ꜷ"
                }, {
                    base: "av",
                    letters: "ꜹꜻ"
                }, {
                    base: "ay",
                    letters: "ꜽ"
                }, {
                    base: "b",
                    letters: "bⓑｂḃḅḇƀƃɓ"
                }, {
                    base: "c",
                    letters: "cⓒｃćĉċčçḉƈȼꜿↄ"
                }, {
                    base: "d",
                    letters: "dⓓｄḋďḍḑḓḏđƌɖɗꝺ"
                }, {
                    base: "dz",
                    letters: "ǳǆ"
                }, {
                    base: "e",
                    letters: "eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"
                }, {
                    base: "f",
                    letters: "fⓕｆḟƒꝼ"
                }, {
                    base: "g",
                    letters: "gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"
                }, {
                    base: "h",
                    letters: "hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"
                }, {
                    base: "hv",
                    letters: "ƕ"
                }, {
                    base: "i",
                    letters: "iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"
                }, {
                    base: "j",
                    letters: "jⓙｊĵǰɉ"
                }, {
                    base: "k",
                    letters: "kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"
                }, {
                    base: "l",
                    letters: "lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"
                }, {
                    base: "lj",
                    letters: "ǉ"
                }, {
                    base: "m",
                    letters: "mⓜｍḿṁṃɱɯ"
                }, {
                    base: "n",
                    letters: "nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"
                }, {
                    base: "nj",
                    letters: "ǌ"
                }, {
                    base: "o",
                    letters: "oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"
                }, {
                    base: "oi",
                    letters: "ƣ"
                }, {
                    base: "ou",
                    letters: "ȣ"
                }, {
                    base: "oo",
                    letters: "ꝏ"
                }, {
                    base: "p",
                    letters: "pⓟｐṕṗƥᵽꝑꝓꝕ"
                }, {
                    base: "q",
                    letters: "qⓠｑɋꝗꝙ"
                }, {
                    base: "r",
                    letters: "rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"
                }, {
                    base: "s",
                    letters: "sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"
                }, {
                    base: "t",
                    letters: "tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"
                }, {
                    base: "tz",
                    letters: "ꜩ"
                }, {
                    base: "u",
                    letters: "uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"
                }, {
                    base: "v",
                    letters: "vⓥｖṽṿʋꝟʌ"
                }, {
                    base: "vy",
                    letters: "ꝡ"
                }, {
                    base: "w",
                    letters: "wⓦｗẁẃŵẇẅẘẉⱳ"
                }, {
                    base: "x",
                    letters: "xⓧｘẋẍ"
                }, {
                    base: "y",
                    letters: "yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"
                }, {
                    base: "z",
                    letters: "zⓩｚźẑżžẓẕƶȥɀⱬꝣ"
                }], d = {}, c = 0; c < p.length; c++)
                for (var u = p[c].letters, m = 0; m < u.length; m++) d[u[m]] = p[c].base;
            var f = i.rtl ? "margin-left" : "margin-right",
                h = !1;
            l.setCancelButtonMargin = function() {
                l.cancelButton.transition(0).show(), l.cancelButton.css(f, -l.cancelButton[0].offsetWidth + "px");
                l.cancelButton[0].clientLeft;
                l.cancelButton.transition(""), h = !0
            }, l.triggerEvent = function(e, a, t) {
                l.container.trigger(e, t), l.searchList.length > 0 && l.searchList.trigger(e, t), a && l.params[a] && l.params[a](l, t)
            }, l.enable = function(e) {
                function a() {
                    !l.searchList.length && !l.params.customSearch || l.container.hasClass("searchbar-active") || l.query || l.overlay.addClass("searchbar-overlay-active"), l.container.addClass("searchbar-active"), l.cancelButton.length > 0 && !l.material && (h || l.setCancelButtonMargin(), l.cancelButton.css(f, "0px")), l.triggerEvent("enableSearch", "onEnable"), l.active = !0
                }
                i.device.ios && !i.params.material && e && "focus" === e.type ? setTimeout(function() {
                    a()
                }, 400) : a()
            }, l.disable = function() {
                function e() {
                    l.input.blur()
                }
                l.input.val("").trigger("change"), l.container.removeClass("searchbar-active searchbar-not-empty"), l.cancelButton.length > 0 && !l.material && l.cancelButton.css(f, -l.cancelButton[0].offsetWidth + "px"), (l.searchList.length || l.params.customSearch) && l.overlay.removeClass("searchbar-overlay-active"), l.active = !1, i.device.ios ? setTimeout(function() {
                    e()
                }, 400) : e(), l.triggerEvent("disableSearch", "onDisable")
            }, l.clear = function(e) {
                return !l.query && e && o(e.target).hasClass("searchbar-clear") ? void l.disable() : (l.input.val("").trigger("change").focus(), void l.triggerEvent("clearSearch", "onClear"))
            }, l.handleInput = function() {
                setTimeout(function() {
                    var e = l.input.val().trim();
                    (l.searchList.length > 0 || l.params.customSearch) && (l.params.searchIn || l.isVirtualList) && l.search(e, !0)
                }, 0)
            };
            var g, v = "";
            return l.search = function(e, a) {
                if (e.trim() !== v) {
                    if (v = e.trim(), a || (l.active || l.enable(), l.input.val(e)), l.query = l.value = e, 0 === e.length ? (l.container.removeClass("searchbar-not-empty"), l.searchList.length && l.container.hasClass("searchbar-active") && l.overlay.addClass("searchbar-overlay-active")) : (l.container.addClass("searchbar-not-empty"), l.searchList.length && l.container.hasClass("searchbar-active") && l.overlay.removeClass("searchbar-overlay-active")), l.params.customSearch) return void l.triggerEvent("search", "onSearch", {
                        query: e
                    });
                    var n = [];
                    if (l.isVirtualList) {
                        if (g = l.searchList[0].f7VirtualList, "" === e.trim()) return g.resetFilter(), l.notFound.hide(), void l.found.show();
                        if (g.params.searchAll) n = g.params.searchAll(e, g.items) || [];
                        else if (g.params.searchByItem)
                            for (var r = 0; r < g.items.length; r++) g.params.searchByItem(e, r, g.params.items[r]) && n.push(r)
                    } else {
                        var i;
                        i = l.params.removeDiacritics ? t(e.trim().toLowerCase()).split(" ") : e.trim().toLowerCase().split(" "), l.searchList.find("li").removeClass("hidden-by-searchbar").each(function(e, a) {
                            a = o(a);
                            var r = [];
                            a.find(l.params.searchIn).each(function() {
                                var e = o(this).text().trim().toLowerCase();
                                l.params.removeDiacritics && (e = t(e)), r.push(e)
                            }), r = r.join(" ");
                            for (var s = 0, p = 0; p < i.length; p++) r.indexOf(i[p]) >= 0 && s++;
                            s === i.length || l.params.ignore && a.is(l.params.ignore) ? n.push(a[0]) : a.addClass("hidden-by-searchbar")
                        }), l.params.hideDividers && l.searchList.find(".item-divider, .list-group-title").each(function() {
                            for (var e = o(this), a = e.nextAll("li"), t = !0, n = 0; n < a.length; n++) {
                                var r = o(a[n]);
                                if (r.hasClass("list-group-title") || r.hasClass("item-divider")) break;
                                r.hasClass("hidden-by-searchbar") || (t = !1)
                            }
                            var i = l.params.ignore && e.is(l.params.ignore);
                            t && !i ? e.addClass("hidden-by-searchbar") : e.removeClass("hidden-by-searchbar")
                        }), l.params.hideGroups && l.searchList.find(".list-group").each(function() {
                            var e = o(this),
                                a = l.params.ignore && e.is(l.params.ignore),
                                t = e.find("li:not(.hidden-by-searchbar)");
                            0 !== t.length || a ? e.removeClass("hidden-by-searchbar") : e.addClass("hidden-by-searchbar")
                        })
                    }
                    l.triggerEvent("search", "onSearch", {
                        query: e,
                        foundItems: n
                    }), 0 === n.length ? (l.notFound.show(), l.found.hide()) : (l.notFound.hide(), l.found.show()), l.isVirtualList && g.filterItems(n)
                }
            }, l.attachEvents = function(e) {
                var a = e ? "off" : "on";
                l.container[a]("submit", n), l.material || l.cancelButton[a]("click", l.disable), l.overlay[a]("click", l.disable), l.input[a]("focus", l.enable), l.input[a]("change keydown keypress keyup", l.handleInput), l.clearButton[a]("click", l.clear)
            }, l.detachEvents = function() {
                l.attachEvents(!0)
            }, l.init = function() {
                l.attachEvents()
            }, l.destroy = function() {
                l && (l.detachEvents(), l = null)
            }, l.init(), l.container[0].f7Searchbar = l, l
        };
        i.searchbar = function(e, a) {
            return new d(e, a)
        }, i.initSearchbar = function(e) {
            function a() {
                n && n.destroy()
            }
            e = o(e);
            var t = e.hasClass("searchbar") ? e : e.find(".searchbar");
            if (0 !== t.length && t.hasClass("searchbar-init")) {
                var n = i.searchbar(t, t.dataset());
                e.hasClass("page") ? e.once("pageBeforeRemove", a) : e.hasClass("navbar-inner") && e.once("navbarBeforeRemove", a)
            }
        };
        var c = function(e, a) {
            function t(e) {
                e.preventDefault()
            }
            var n = {
                textarea: null,
                maxHeight: null
            };
            a = a || {};
            for (var r in n)("undefined" == typeof a[r] || null === a[r]) && (a[r] = n[r]);
            var i = this;
            return i.params = a, i.container = o(e), 0 !== i.container.length ? (i.textarea = i.params.textarea ? o(i.params.textarea) : i.container.find("textarea"), i.pageContainer = i.container.parents(".page").eq(0), i.pageContent = i.pageContainer.find(".page-content"), i.pageContentPadding = parseInt(i.pageContent.css("padding-bottom")), i.initialBarHeight = i.container[0].offsetHeight, i.initialAreaHeight = i.textarea[0].offsetHeight, i.sizeTextarea = function() {
                i.textarea.css({
                    height: ""
                });
                var e = i.textarea[0].offsetHeight,
                    a = e - i.textarea[0].clientHeight,
                    t = i.textarea[0].scrollHeight;
                if (t + a > e) {
                    var n = t + a,
                        r = i.initialBarHeight + (n - i.initialAreaHeight),
                        s = i.params.maxHeight || i.container.parents(".view")[0].offsetHeight - 88;
                    r > s && (r = parseInt(s, 10), n = r - i.initialBarHeight + i.initialAreaHeight), i.textarea.css("height", n + "px"), i.container.css("height", r + "px");
                    var o = i.pageContent[0].scrollTop === i.pageContent[0].scrollHeight - i.pageContent[0].offsetHeight;
                    i.pageContent.length > 0 && (i.pageContent.css("padding-bottom", r + "px"), 0 === i.pageContent.find(".messages-new-first").length && o && i.pageContent.scrollTop(i.pageContent[0].scrollHeight - i.pageContent[0].offsetHeight))
                } else i.pageContent.length > 0 && (i.container.css({
                    height: "",
                    bottom: ""
                }), i.pageContent.css({
                    "padding-bottom": ""
                }))
            }, i.clear = function() {
                i.textarea.val("").trigger("change")
            }, i.value = function(e) {
                return "undefined" == typeof e ? i.textarea.val() : void i.textarea.val(e).trigger("change")
            }, i.textareaTimeout = void 0, i.handleTextarea = function(e) {
                clearTimeout(i.textareaTimeout), i.textareaTimeout = setTimeout(function() {
                    i.sizeTextarea()
                }, 0)
            }, i.attachEvents = function(e) {
                var a = e ? "off" : "on";
                i.container[a]("submit", t), i.textarea[a]("change keydown keypress keyup paste cut", i.handleTextarea)
            }, i.detachEvents = function() {
                i.attachEvents(!0)
            }, i.init = function() {
                i.attachEvents()
            }, i.destroy = function() {
                i.detachEvents(), i = null
            }, i.init(), i.container[0].f7Messagebar = i, i) : void 0
        };
        i.messagebar = function(e, a) {
            return new c(e, a)
        }, i.initPageMessagebar = function(e) {
            function a() {
                n.destroy(), e.off("pageBeforeRemove", a)
            }
            e = o(e);
            var t = e.hasClass("messagebar") ? e : e.find(".messagebar");
            if (0 !== t.length && t.hasClass("messagebar-init")) {
                var n = i.messagebar(t, t.dataset());
                e.hasClass("page") && e.on("pageBeforeRemove", a)
            }
        }, i.cache = [], i.removeFromCache = function(e) {
            for (var a = !1, t = 0; t < i.cache.length; t++) i.cache[t].url === e && (a = t);
            a !== !1 && i.cache.splice(a, 1)
        }, i.xhr = !1, i.get = function(e, a, t, n) {
            var r = e;
            if (i.params.cacheIgnoreGetParameters && e.indexOf("?") >= 0 && (r = e.split("?")[0]), i.params.cache && !t && e.indexOf("nocache") < 0 && i.params.cacheIgnore.indexOf(r) < 0)
                for (var s = 0; s < i.cache.length; s++)
                    if (i.cache[s].url === r && (new Date).getTime() - i.cache[s].time < i.params.cacheDuration) return n(i.cache[s].content), !1;
            return i.xhr = o.ajax({
                url: e,
                method: "GET",
                beforeSend: i.params.onAjaxStart,
                complete: function(e) {
                    e.status >= 200 && e.status < 300 || 0 === e.status ? (i.params.cache && (i.removeFromCache(r), i.cache.push({
                        url: r,
                        time: (new Date).getTime(),
                        content: e.responseText
                    })), n(e.responseText, !1)) : n(e.responseText, !0), i.params.onAjaxComplete && i.params.onAjaxComplete(e)
                },
                error: function(e) {
                    n(e.responseText, !0), i.params.onAjaxError && i.params.onAjaxError(e)
                }
            }), a && (a.xhr = i.xhr), i.xhr
        }, i.pageCallbacks = {}, i.onPage = function(e, a, t) {
            if (a && a.split(" ").length > 1) {
                for (var n = a.split(" "), r = [], s = 0; s < n.length; s++) r.push(i.onPage(e, n[s], t));
                return r.remove = function() {
                    for (var e = 0; e < r.length; e++) r[e].remove()
                }, r.trigger = function() {
                    for (var e = 0; e < r.length; e++) r[e].trigger()
                }, r
            }
            var o = i.pageCallbacks[e][a];
            return o || (o = i.pageCallbacks[e][a] = []), i.pageCallbacks[e][a].push(t), {
                remove: function() {
                    for (var e, a = 0; a < o.length; a++) o[a].toString() === t.toString() && (e = a);
                    "undefined" != typeof e && o.splice(e, 1)
                },
                trigger: t
            }
        };
        for (var u = "beforeInit init reinit beforeAnimation afterAnimation back afterBack beforeRemove".split(" "), m = 0; m < u.length; m++) i.pageCallbacks[u[m]] = {}, t(u[m]);
        i.triggerPageCallbacks = function(e, a, t) {
            var n = i.pageCallbacks[e]["*"];
            if (n)
                for (var r = 0; r < n.length; r++) n[r](t);
            var s = i.pageCallbacks[e][a];
            if (s && 0 !== s.length)
                for (var o = 0; o < s.length; o++) s[o](t)
        }, i.pageInitCallback = function(e, a) {
            var t = a.pageContainer;
            if (!t.f7PageInitialized || !e || e.params.domCache) {
                var n = a.query;
                n || (n = a.url && a.url.indexOf("?") > 0 ? o.parseUrlQuery(a.url || "") : t.f7PageData && t.f7PageData.query ? t.f7PageData.query : {});
                var r = {
                    container: t,
                    url: a.url,
                    query: n,
                    name: o(t).attr("data-page"),
                    view: e,
                    from: a.position,
                    context: a.context,
                    navbarInnerContainer: a.navbarInnerContainer,
                    fromPage: a.fromPage
                };
                if (a.fromPage && !a.fromPage.navbarInnerContainer && a.oldNavbarInnerContainer && (a.fromPage.navbarInnerContainer = a.oldNavbarInnerContainer), t.f7PageInitialized && (e && e.params.domCache || !e && o(t).parents(".popup, .popover, .login-screen, .modal, .actions-modal, .picker-modal").length > 0)) return i.reinitPage(t), i.pluginHook("pageReinit", r), i.params.onPageReinit && i.params.onPageReinit(i, r), i.triggerPageCallbacks("reinit", r.name, r), void o(r.container).trigger("pageReinit", {
                    page: r
                });
                t.f7PageInitialized = !0, t.f7PageData = r, !e || a.preloadOnly || a.reloadPrevious || (o(e.container).attr("data-page", r.name), e.activePage = r), i.pluginHook("pageBeforeInit", r), i.params.onPageBeforeInit && i.params.onPageBeforeInit(i, r), i.triggerPageCallbacks("beforeInit", r.name, r), o(r.container).trigger("pageBeforeInit", {
                    page: r
                }), i.initPage(t), i.pluginHook("pageInit", r), i.params.onPageInit && i.params.onPageInit(i, r), i.triggerPageCallbacks("init", r.name, r), o(r.container).trigger("pageInit", {
                    page: r
                })
            }
        }, i.pageRemoveCallback = function(e, a, t) {
            var n;
            a.f7PageData && (n = a.f7PageData.context);
            var r = {
                container: a,
                name: o(a).attr("data-page"),
                view: e,
                url: a.f7PageData && a.f7PageData.url,
                query: a.f7PageData && a.f7PageData.query,
                navbarInnerContainer: a.f7PageData && a.f7PageData.navbarInnerContainer,
                from: t,
                context: n
            };
            i.pluginHook("pageBeforeRemove", r), i.params.onPageBeforeRemove && i.params.onPageBeforeRemove(i, r), i.triggerPageCallbacks("beforeRemove", r.name, r), o(r.container).trigger("pageBeforeRemove", {
                page: r
            })
        }, i.pageBackCallback = function(e, a, t) {
            var n, r = t.pageContainer;
            r.f7PageData && (n = r.f7PageData.context);
            var s = {
                container: r,
                name: o(r).attr("data-page"),
                url: r.f7PageData && r.f7PageData.url,
                query: r.f7PageData && r.f7PageData.query,
                view: a,
                from: t.position,
                context: n,
                navbarInnerContainer: r.f7PageData && r.f7PageData.navbarInnerContainer,
                swipeBack: t.swipeBack
            };
            "after" === e && (i.pluginHook("pageAfterBack", s), i.params.onPageAfterBack && i.params.onPageAfterBack(i, s), i.triggerPageCallbacks("afterBack", s.name, s), o(r).trigger("pageAfterBack", {
                page: s
            })), "before" === e && (i.pluginHook("pageBack", s), i.params.onPageBack && i.params.onPageBack(i, s), i.triggerPageCallbacks("back", s.name, s), o(s.container).trigger("pageBack", {
                page: s
            }))
        }, i.pageAnimCallback = function(e, a, t) {
            var n, r = t.pageContainer;
            r.f7PageData && (n = r.f7PageData.context);
            var s = t.query;
            s || (s = t.url && t.url.indexOf("?") > 0 ? o.parseUrlQuery(t.url || "") : r.f7PageData && r.f7PageData.query ? r.f7PageData.query : {});
            var l = {
                    container: r,
                    url: t.url,
                    query: s,
                    name: o(r).attr("data-page"),
                    view: a,
                    from: t.position,
                    context: n,
                    swipeBack: t.swipeBack,
                    navbarInnerContainer: r.f7PageData && r.f7PageData.navbarInnerContainer,
                    fromPage: t.fromPage
                },
                p = t.oldPage,
                d = t.newPage;
            if (r.f7PageData = l, "after" === e && (i.pluginHook("pageAfterAnimation", l), i.params.onPageAfterAnimation && i.params.onPageAfterAnimation(i, l), i.triggerPageCallbacks("afterAnimation", l.name, l), o(l.container).trigger("pageAfterAnimation", {
                    page: l
                })), "before" === e) {
                o(a.container).attr("data-page", l.name), a && (a.activePage = l), d.hasClass("no-navbar") && !p.hasClass("no-navbar") && a.hideNavbar(), d.hasClass("no-navbar") || !p.hasClass("no-navbar") && !p.hasClass("no-navbar-by-scroll") || a.showNavbar(), d.hasClass("no-toolbar") && !p.hasClass("no-toolbar") && a.hideToolbar(), d.hasClass("no-toolbar") || !p.hasClass("no-toolbar") && !p.hasClass("no-toolbar-by-scroll") || a.showToolbar();
                var c;
                d.hasClass("no-tabbar") && !p.hasClass("no-tabbar") && (c = o(a.container).find(".tabbar"), 0 === c.length && (c = o(a.container).parents("." + i.params.viewsClass).find(".tabbar")), i.hideToolbar(c)), d.hasClass("no-tabbar") || !p.hasClass("no-tabbar") && !p.hasClass("no-tabbar-by-scroll") || (c = o(a.container).find(".tabbar"), 0 === c.length && (c = o(a.container).parents("." + i.params.viewsClass).find(".tabbar")), i.showToolbar(c)), p.removeClass("no-navbar-by-scroll no-toolbar-by-scroll"), i.pluginHook("pageBeforeAnimation", l), i.params.onPageBeforeAnimation && i.params.onPageBeforeAnimation(i, l), i.triggerPageCallbacks("beforeAnimation", l.name, l), o(l.container).trigger("pageBeforeAnimation", {
                    page: l
                })
            }
        }, i.initPage = function(e) {
            e = o(e), 0 !== e.length && (i.sizeNavbars && i.sizeNavbars(e.parents("." + i.params.viewClass)[0]), i.initPageMessages && i.initPageMessages(e), i.initFormsStorage && i.initFormsStorage(e), i.initSmartSelects && i.initSmartSelects(e), i.initPageSwiper && i.initPageSwiper(e), i.initPullToRefresh && i.initPullToRefresh(e), i.initPageInfiniteScroll && i.initPageInfiniteScroll(e), i.initSearchbar && i.initSearchbar(e), i.initPageMessagebar && i.initPageMessagebar(e), i.initPageScrollToolbars && i.initPageScrollToolbars(e), i.initImagesLazyLoad && i.initImagesLazyLoad(e), i.initPageProgressbar && i.initPageProgressbar(e), i.initPageResizableTextarea && i.initPageResizableTextarea(e), i.params.material && i.initPageMaterialPreloader && i.initPageMaterialPreloader(e), i.params.material && i.initPageMaterialInputs && i.initPageMaterialInputs(e), i.params.material && i.initPageMaterialTabbar && i.initPageMaterialTabbar(e))
        }, i.reinitPage = function(e) {
            e = o(e), 0 !== e.length && (i.sizeNavbars && i.sizeNavbars(e.parents("." + i.params.viewClass)[0]), i.reinitPageSwiper && i.reinitPageSwiper(e), i.reinitLazyLoad && i.reinitLazyLoad(e))
        }, i.initPageWithCallback = function(e) {
            e = o(e);
            var a = e.parents("." + i.params.viewClass);
            if (0 !== a.length) {
                var t = a[0].f7View || void 0,
                    n = t && t.url ? t.url : void 0;
                a && e.attr("data-page") && a.attr("data-page", e.attr("data-page")), i.pageInitCallback(t, {
                    pageContainer: e[0],
                    url: n,
                    position: "center"
                })
            }
        }, i.router = {
            temporaryDom: document.createElement("div"),
            findElement: function(e, a, t, n) {
                a = o(a), n && (e += ":not(.cached)");
                var r = a.find(e);
                return r.length > 1 && ("string" == typeof t.selector && (r = a.find(t.selector + " " + e)), r.length > 1 && (r = a.find("." + i.params.viewMainClass + " " + e))), 1 === r.length ? r : (n || (r = i.router.findElement(e, a, t, !0)), r && 1 === r.length ? r : void 0)
            },
            animatePages: function(e, a, t, n) {
                var r = "page-on-center page-on-right page-on-left";
                "to-left" === t && (e.removeClass(r).addClass("page-from-center-to-left"), a.removeClass(r).addClass("page-from-right-to-center")), "to-right" === t && (e.removeClass(r).addClass("page-from-left-to-center"), a.removeClass(r).addClass("page-from-center-to-right"))
            },
            prepareNavbar: function(e, a, t) {
                o(e).find(".sliding").each(function() {
                    var e = o(this),
                        a = "right" === t ? this.f7NavbarRightOffset : this.f7NavbarLeftOffset;
                    i.params.animateNavBackIcon && e.hasClass("left") && e.find(".back .icon").length > 0 && e.find(".back .icon").transform("translate3d(" + -a + "px,0,0)"), e.transform("translate3d(" + a + "px,0,0)")
                })
            },
            animateNavbars: function(e, a, t, n) {
                var r = "navbar-on-right navbar-on-center navbar-on-left";
                "to-left" === t && (a.removeClass(r).addClass("navbar-from-right-to-center"), a.find(".sliding").each(function() {
                    var e = o(this);
                    e.transform("translate3d(0px,0,0)"), i.params.animateNavBackIcon && e.hasClass("left") && e.find(".back .icon").length > 0 && e.find(".back .icon").transform("translate3d(0px,0,0)")
                }), e.removeClass(r).addClass("navbar-from-center-to-left"), e.find(".sliding").each(function() {
                    var e, t = o(this);
                    i.params.animateNavBackIcon && (t.hasClass("center") && a.find(".sliding.left .back .icon").length > 0 && (e = a.find(".sliding.left .back span"), e.length > 0 && (this.f7NavbarLeftOffset += e[0].offsetLeft)), t.hasClass("left") && t.find(".back .icon").length > 0 && t.find(".back .icon").transform("translate3d(" + -this.f7NavbarLeftOffset + "px,0,0)")), t.transform("translate3d(" + this.f7NavbarLeftOffset + "px,0,0)")
                })), "to-right" === t && (e.removeClass(r).addClass("navbar-from-left-to-center"), e.find(".sliding").each(function() {
                    var e = o(this);
                    e.transform("translate3d(0px,0,0)"), i.params.animateNavBackIcon && e.hasClass("left") && e.find(".back .icon").length > 0 && e.find(".back .icon").transform("translate3d(0px,0,0)")
                }), a.removeClass(r).addClass("navbar-from-center-to-right"), a.find(".sliding").each(function() {
                    var e = o(this);
                    i.params.animateNavBackIcon && e.hasClass("left") && e.find(".back .icon").length > 0 && e.find(".back .icon").transform("translate3d(" + -this.f7NavbarRightOffset + "px,0,0)"), e.transform("translate3d(" + this.f7NavbarRightOffset + "px,0,0)")
                }))
            },
            preprocess: function(e, a, t, n) {
                i.pluginHook("routerPreprocess", e, a, t, n), a = i.pluginProcess("preprocess", a), e && e.params && e.params.preprocess ? (a = e.params.preprocess(a, t, n), "undefined" != typeof a && n(a)) : i.params.preprocess ? (a = i.params.preprocess(a, t, n), "undefined" != typeof a && n(a)) : n(a)
            },
            preroute: function(e, a) {
                return i.pluginHook("routerPreroute", e, a), i.params.preroute && i.params.preroute(e, a) === !1 || e && e.params.preroute && e.params.preroute(e, a) === !1 ? !0 : !1
            },
            template7Render: function(e, a) {
                var t, n, r = a.url,
                    s = a.content,
                    p = a.content,
                    d = a.context,
                    c = a.contextName,
                    u = a.template;
                a.pageName;
                if ("string" == typeof s ? r ? i.template7Cache[r] && !a.ignoreCache ? n = l.cache[r] : (n = l.compile(s), l.cache[r] = n) : n = l.compile(s) : u && (n = u), d) t = d;
                else {
                    if (c)
                        if (c.indexOf(".") >= 0) {
                            for (var m = c.split("."), f = l.data[m[0]], h = 1; h < m.length; h++) m[h] && (f = f[m[h]]);
                            t = f
                        } else t = l.data[c];
                    if (!t && r && (t = l.data["url:" + r]), !t && "string" == typeof s && !u) {
                        var g = s.match(/(data-page=["'][^"^']*["'])/);
                        if (g) {
                            var v = g[0].split("data-page=")[1].replace(/['"]/g, "");
                            v && (t = l.data["page:" + v])
                        }
                    }
                    if (!t && u && l.templates)
                        for (var b in l.templates) l.templates[b] === u && (t = l.data[b]);
                    t || (t = {})
                }
                if (n && t) {
                    if ("function" == typeof t && (t = t()), r) {
                        var w = o.parseUrlQuery(r);
                        t.url_query = {};
                        for (var C in w) t.url_query[C] = w[C]
                    }
                    p = n(t)
                }
                return {
                    content: p,
                    context: t
                }
            }
        }, i.router._load = function(e, a) {
            function t() {
                e.allowPageChange = !0, n.removeClass("page-from-right-to-center page-on-right page-on-left").addClass("page-on-center"), r.removeClass("page-from-center-to-left page-on-center page-on-right").addClass("page-on-left"), u && (d.removeClass("navbar-from-right-to-center navbar-on-left navbar-on-right").addClass("navbar-on-center"), p.removeClass("navbar-from-center-to-left navbar-on-center navbar-on-right").addClass("navbar-on-left")), i.pageAnimCallback("after", e, {
                    pageContainer: n[0],
                    url: f,
                    position: "right",
                    oldPage: r,
                    newPage: n,
                    query: a.query,
                    fromPage: r && r.length && r[0].f7PageData
                }), i.params.pushState && e.main && i.pushStateClearQueue(), e.params.swipeBackPage || e.params.preloadPreviousPage || (e.params.domCache ? (r.addClass("cached"), u && p.addClass("cached")) : (0 !== f.indexOf("#") || 0 !== n.attr("data-page").indexOf("smart-select-")) && (i.pageRemoveCallback(e, r[0], "left"), u && i.navbarRemoveCallback(e, r[0], c[0], p[0]), r.remove(), u && p.remove())), e.params.uniqueHistory && O && e.refreshPreviousPage()
            }
            a = a || {};
            var n, r, s, l, p, d, c, u, m, f = a.url,
                h = a.content,
                g = {
                    content: a.content
                },
                v = a.template,
                b = a.pageName,
                w = o(e.container),
                C = o(e.pagesContainer),
                y = a.animatePages,
                x = "undefined" == typeof f && h || v,
                T = a.pushState;
            if ("undefined" == typeof y && (y = e.params.animatePages), i.pluginHook("routerLoad", e, a), (i.params.template7Pages && "string" == typeof h || v) && (g = i.router.template7Render(e, a), g.content && !h && (h = g.content)), i.router.temporaryDom.innerHTML = "", !b)
                if ("string" == typeof h || f && "string" == typeof h) i.router.temporaryDom.innerHTML = g.content;
                else if ("length" in h && h.length > 1)
                for (var k = 0; k < h.length; k++) o(i.router.temporaryDom).append(h[k]);
            else o(i.router.temporaryDom).append(h);
            if (m = a.reload && (a.reloadPrevious ? "left" : "center"), n = b ? C.find('.page[data-page="' + b + '"]') : i.router.findElement(".page", i.router.temporaryDom, e), !n || 0 === n.length || b && e.activePage && e.activePage.name === b) return void(e.allowPageChange = !0);
            if (n.addClass(a.reload ? "page-on-" + m : "page-on-right"), s = C.children(".page:not(.cached)"), a.reload && a.reloadPrevious && 1 === s.length) return void(e.allowPageChange = !0);
            if (a.reload) r = s.eq(s.length - 1);
            else {
                if (s.length > 1) {
                    for (l = 0; l < s.length - 2; l++) e.params.domCache ? o(s[l]).addClass("cached") : (i.pageRemoveCallback(e, s[l], "left"), o(s[l]).remove());
                    e.params.domCache ? o(s[l]).addClass("cached") : (i.pageRemoveCallback(e, s[l], "left"), o(s[l]).remove())
                }
                r = C.children(".page:not(.cached)")
            }
            if (e.params.domCache && n.removeClass("cached"), e.params.dynamicNavbar)
                if (u = !0, d = b ? w.find('.navbar-inner[data-page="' + b + '"]') : i.router.findElement(".navbar-inner", i.router.temporaryDom, e), d && 0 !== d.length || (u = !1), c = w.find(".navbar"), a.reload) p = c.find(".navbar-inner:not(.cached):last-child");
                else if (p = c.find(".navbar-inner:not(.cached)"), p.length > 0) {
                for (l = 0; l < p.length - 1; l++) e.params.domCache ? o(p[l]).addClass("cached") : (i.navbarRemoveCallback(e, s[l], c[0], p[l]), o(p[l]).remove());
                d || 1 !== p.length || (e.params.domCache ? o(p[0]).addClass("cached") : (i.navbarRemoveCallback(e, s[0], c[0], p[0]), o(p[0]).remove())), p = c.find(".navbar-inner:not(.cached)")
            }
            if (u && (d.addClass(a.reload ? "navbar-on-" + m : "navbar-on-right"), e.params.domCache && d.removeClass("cached"), n[0].f7RelatedNavbar = d[0], d[0].f7RelatedPage = n[0]), !f) {
                var P = b || n.attr("data-page");
                f = x ? "#" + i.params.dynamicPageUrl.replace(/{{name}}/g, P).replace(/{{index}}/g, e.history.length - (a.reload ? 1 : 0)) : "#" + P, e.params.domCache || (e.contentCache[f] = h), e.params.domCache && b && (e.pagesCache[f] = b)
            }
            if (i.params.pushState && !a.reloadPrevious && e.main) {
                "undefined" == typeof T && (T = !0);
                var S = i.params.pushStateRoot || "",
                    M = a.reload ? "replaceState" : "pushState";
                T && (x || b ? x && h ? history[M]({
                    content: "string" == typeof h ? h : "",
                    url: f,
                    viewIndex: i.views.indexOf(e)
                }, "", S + i.params.pushStateSeparator + f) : b && history[M]({
                    pageName: b,
                    url: f,
                    viewIndex: i.views.indexOf(e)
                }, "", S + i.params.pushStateSeparator + f) : history[M]({
                    url: f,
                    viewIndex: i.views.indexOf(e)
                }, "", S + i.params.pushStateSeparator + f))
            }
            if (e.url = f, a.reload) {
                var I = e.history[e.history.length - (a.reloadPrevious ? 2 : 1)];
                I && 0 === I.indexOf("#") && I in e.contentCache && I !== f && -1 === e.history.indexOf(I) && (e.contentCache[I] = null, delete e.contentCache[I]), e.history[e.history.length - (a.reloadPrevious ? 2 : 1)] = f
            } else e.history.push(f);
            var O = !1;
            if (e.params.uniqueHistory) {
                var E = e.history,
                    D = f;
                if (e.params.uniqueHistoryIgnoreGetParameters)
                    for (E = [], D = f.split("?")[0], l = 0; l < e.history.length; l++) E.push(e.history[l].split("?")[0]);
                E.indexOf(D) !== E.lastIndexOf(D) && (e.history = e.history.slice(0, E.indexOf(D)), e.history.push(f), O = !0)
            }
            if (a.reloadPrevious ? (r = r.prev(".page"), n.insertBefore(r), u && (p = p.prev(".navbar-inner"), d.insertAfter(p))) : (C.append(n[0]), u && c.append(d[0])), a.reload && (e.params.domCache && e.initialPages.indexOf(r[0]) >= 0 ? (r.addClass("cached"), u && p.addClass("cached")) : (i.pageRemoveCallback(e, r[0], m), u && i.navbarRemoveCallback(e, r[0], c[0], p[0]), r.remove(), u && p.remove())), i.pageInitCallback(e, {
                    pageContainer: n[0],
                    url: f,
                    position: a.reload ? m : "right",
                    navbarInnerContainer: u ? d && d[0] : void 0,
                    oldNavbarInnerContainer: u ? p && p[0] : void 0,
                    context: g.context,
                    query: a.query,
                    fromPage: r && r.length && r[0].f7PageData,
                    reload: a.reload,
                    reloadPrevious: a.reloadPrevious
                }), u && i.navbarInitCallback(e, n[0], c[0], d[0], f, a.reload ? m : "right"), a.reload) return e.allowPageChange = !0, void(O && e.refreshPreviousPage());
            u && y && i.router.prepareNavbar(d, p, "right");
            n[0].clientLeft;
            i.pageAnimCallback("before", e, {
                pageContainer: n[0],
                url: f,
                position: "right",
                oldPage: r,
                newPage: n,
                query: a.query,
                fromPage: r && r.length && r[0].f7PageData
            }), y ? (i.params.material && i.params.materialPageLoadDelay ? setTimeout(function() {
                i.router.animatePages(r, n, "to-left", e)
            }, i.params.materialPageLoadDelay) : i.router.animatePages(r, n, "to-left", e), u && setTimeout(function() {
                i.router.animateNavbars(p, d, "to-left", e)
            }, 0), n.animationEnd(function(e) {
                t()
            })) : (u && d.find(".sliding, .sliding .back .icon").transform(""), t())
        }, i.router.load = function(e, a) {
            function t(t) {
                i.router.preprocess(e, t, n, function(t) {
                    a.content = t, i.router._load(e, a)
                })
            }
            if (i.router.preroute(e, a)) return !1;
            a = a || {};
            var n = a.url,
                r = a.content,
                s = a.pageName;
            s && s.indexOf("?") > 0 && (a.query = o.parseUrlQuery(s), a.pageName = s = s.split("?")[0]);
            var l = a.template;
            return e.params.reloadPages === !0 && (a.reload = !0), e.allowPageChange && (!n || e.url !== n || a.reload || e.params.allowDuplicateUrls) ? (e.allowPageChange = !1, i.xhr && e.xhr && e.xhr === i.xhr && (i.xhr.abort(), i.xhr = !1), r || s ? void t(r) : l ? void i.router._load(e, a) : a.url && "#" !== a.url ? void i.get(a.url, e, a.ignoreCache, function(a, n) {
                return n ? void(e.allowPageChange = !0) : void t(a)
            }) : void(e.allowPageChange = !0)) : !1
        }, i.router._back = function(e, a) {
            function t() {
                i.pageBackCallback("after", e, {
                    pageContainer: l[0],
                    url: h,
                    position: "center",
                    oldPage: l,
                    newPage: p
                }), i.pageAnimCallback("after", e, {
                    pageContainer: p[0],
                    url: h,
                    position: "left",
                    oldPage: l,
                    newPage: p,
                    query: a.query,
                    fromPage: l && l.length && l[0].f7PageData
                }), i.router.afterBack(e, l[0], p[0])
            }

            function n() {
                i.pageBackCallback("before", e, {
                    pageContainer: l[0],
                    url: h,
                    position: "center",
                    oldPage: l,
                    newPage: p
                }), i.pageAnimCallback("before", e, {
                    pageContainer: p[0],
                    url: h,
                    position: "left",
                    oldPage: l,
                    newPage: p,
                    query: a.query,
                    fromPage: l && l.length && l[0].f7PageData
                }), w ? (i.router.animatePages(p, l, "to-right", e), f && setTimeout(function() {
                    i.router.animateNavbars(c, d, "to-right", e)
                }, 0), p.animationEnd(function() {
                    t()
                })) : (f && c.find(".sliding, .sliding .back .icon").transform(""), t())
            }

            function r() {
                if (i.router.temporaryDom.innerHTML = "", "string" == typeof g || h && "string" == typeof g) i.router.temporaryDom.innerHTML = v.content;
                else if ("length" in g && g.length > 1)
                    for (var a = 0; a < g.length; a++) o(i.router.temporaryDom).append(g[a]);
                else o(i.router.temporaryDom).append(g);
                p = i.router.findElement(".page", i.router.temporaryDom, e), e.params.dynamicNavbar && (c = i.router.findElement(".navbar-inner", i.router.temporaryDom, e))
            }

            function s() {
                if (!p || 0 === p.length) return void(e.allowPageChange = !0);
                if (e.params.dynamicNavbar && "undefined" == typeof f && (f = c && 0 !== c.length ? !0 : !1), p.addClass("page-on-left").removeClass("cached"), f && (u = k.find(".navbar"), m = k.find(".navbar-inner:not(.cached)"), c.addClass("navbar-on-left").removeClass("cached")), x) {
                    var t, r;
                    if (t = o(S[S.length - 2]), f && (r = o(t[0] && t[0].f7RelatedNavbar || m[m.length - 2])), e.params.domCache && e.initialPages.indexOf(t[0]) >= 0) t.length && t[0] !== p[0] && t.addClass("cached"), f && r.length && r[0] !== c[0] && r.addClass("cached");
                    else {
                        var s = f && r.length;
                        t.length ? (i.pageRemoveCallback(e, t[0], "right"), s && i.navbarRemoveCallback(e, t[0], u[0], r[0]), t.remove(), s && r.remove()) : s && (i.navbarRemoveCallback(e, t[0], u[0], r[0]), r.remove())
                    }
                    S = P.children(".page:not(.cached)"), f && (m = k.find(".navbar-inner:not(.cached)")), e.history.indexOf(h) >= 0 ? e.history = e.history.slice(0, e.history.indexOf(h) + 2) : e.history[[e.history.length - 2]] ? e.history[e.history.length - 2] = h : e.history.unshift(h)
                }
                if (l = o(S[S.length - 1]), e.params.domCache && l[0] === p[0] && (l = P.children(".page.page-on-center"), 0 === l.length && e.activePage && (l = o(e.activePage.container))), f && !d && (d = o(m[m.length - 1]), e.params.domCache && (d[0] === c[0] && (d = u.children(".navbar-inner.navbar-on-center:not(.cached)")), 0 === d.length && (d = u.children('.navbar-inner[data-page="' + l.attr("data-page") + '"]'))), (0 === d.length || c[0] === d[0]) && (f = !1)), f && (M && c.insertBefore(d), c[0].f7RelatedPage = p[0], p[0].f7RelatedNavbar = c[0]), M && p.insertBefore(l), i.pageInitCallback(e, {
                        pageContainer: p[0],
                        url: h,
                        position: "left",
                        navbarInnerContainer: f ? c[0] : void 0,
                        oldNavbarInnerContainer: f ? d && d[0] : void 0,
                        context: v.context,
                        query: a.query,
                        fromPage: l && l.length && l[0].f7PageData,
                        preloadOnly: C
                    }), f && i.navbarInitCallback(e, p[0], u[0], c[0], h, "right"), f && c.hasClass("navbar-on-left") && w && i.router.prepareNavbar(c, d, "left"), C) return void(e.allowPageChange = !0);
                e.url = h;
                p[0].clientLeft;
                n(), i.params.pushState && e.main && ("undefined" == typeof y && (y = !0), !C && history.state && y && history.back())
            }
            a = a || {};
            var l, p, d, c, u, m, f, h = a.url,
                g = a.content,
                v = {
                    content: a.content
                },
                b = a.template,
                w = a.animatePages,
                C = a.preloadOnly,
                y = a.pushState,
                x = (a.ignoreCache, a.force),
                T = a.pageName,
                k = o(e.container),
                P = o(e.pagesContainer),
                S = P.children(".page:not(.cached)"),
                M = !0;
            return "undefined" == typeof w && (w = e.params.animatePages), i.pluginHook("routerBack", e, a), (i.params.template7Pages && "string" == typeof g || b) && (v = i.router.template7Render(e, a), v.content && !g && (g = v.content)), S.length > 1 && !x ? C ? void(e.allowPageChange = !0) : (e.url = e.history[e.history.length - 2], h = e.url, p = o(S[S.length - 2]), l = o(S[S.length - 1]), e.params.dynamicNavbar && (f = !0, m = k.find(".navbar-inner:not(.cached)"), c = o(m[0]), d = o(m[1]), (0 === c.length || 0 === d.length || d[0] === c[0]) && (f = !1)), M = !1, void s()) : x ? h && h === e.url || T && e.activePage && e.activePage.name === T ? void(e.allowPageChange = !0) : g ? (r(), void s()) : T && e.params.domCache ? (T && (h = "#" + T), p = o(k).find('.page[data-page="' + T + '"]'), p[0].f7PageData && p[0].f7PageData.url && (h = p[0].f7PageData.url), e.params.dynamicNavbar && (c = o(k).find('.navbar-inner[data-page="' + T + '"]'), 0 === c.length && p[0].f7RelatedNavbar && (c = o(p[0].f7RelatedNavbar)), 0 === c.length && p[0].f7PageData && (c = o(p[0].f7PageData.navbarInnerContainer))), void s()) : void(e.allowPageChange = !0) : (C || (e.url = e.history[e.history.length - 2], h = e.url), g ? (r(), void s()) : T ? (p = o(k).find('.page[data-page="' + T + '"]'), e.params.dynamicNavbar && (c = o(k).find('.navbar-inner[data-page="' + T + '"]'), 0 === c.length && p[0].f7RelatedNavbar && (c = o(p[0].f7RelatedNavbar)), 0 === c.length && p[0].f7PageData && (c = o(p[0].f7PageData.navbarInnerContainer))), void s()) : void(e.allowPageChange = !0))
        }, i.router.back = function(e, a) {
            function t(t) {
                i.router.preprocess(e, t, n, function(t) {
                    a.content = t, i.router._back(e, a)
                })
            }
            if (i.router.preroute(e, a)) return !1;
            a = a || {};
            var n = a.url,
                r = a.content,
                s = a.pageName;
            s && s.indexOf("?") > 0 && (a.query = o.parseUrlQuery(s), a.pageName = s = s.split("?")[0]);
            var l = a.force;
            if (!e.allowPageChange) return !1;
            e.allowPageChange = !1, i.xhr && e.xhr && e.xhr === i.xhr && (i.xhr.abort(), i.xhr = !1);
            var p = o(e.pagesContainer).find(".page:not(.cached)");
            if (p.length > 1 && !l) return void i.router._back(e, a);
            if (l) {
                if (!n && r) return void t(r);
                if (!n && s) return s && (n = "#" + s), void t();
                if (n) return void i.get(a.url, e, a.ignoreCache, function(a, n) {
                    return n ? void(e.allowPageChange = !0) : void t(a)
                })
            } else {
                if (n = a.url = e.history[e.history.length - 2], !n) return void(e.allowPageChange = !0);
                if (0 === n.indexOf("#") && e.contentCache[n]) return void t(e.contentCache[n]);
                if (0 === n.indexOf("#") && e.params.domCache) return s || (a.pageName = n.split("#")[1]), void t();
                if (0 !== n.indexOf("#")) return void i.get(a.url, e, a.ignoreCache, function(a, n) {
                    return n ? void(e.allowPageChange = !0) : void t(a)
                })
            }
            e.allowPageChange = !0
        }, i.router.afterBack = function(e, a, t) {
            a = o(a), t = o(t), e.params.domCache && e.initialPages.indexOf(a[0]) >= 0 ? a.removeClass("page-from-center-to-right").addClass("cached") : (i.pageRemoveCallback(e, a[0], "right"), a.remove()), t.removeClass("page-from-left-to-center page-on-left").addClass("page-on-center"), e.allowPageChange = !0;
            var n, r = e.history.pop();
            if (e.params.dynamicNavbar) {
                var s = o(e.container).find(".navbar-inner:not(.cached)"),
                    l = o(a[0].f7RelatedNavbar || s[1]);
                e.params.domCache && e.initialNavbars.indexOf(l[0]) >= 0 ? l.removeClass("navbar-from-center-to-right").addClass("cached") : (i.navbarRemoveCallback(e, a[0], void 0, l[0]), l.remove()), n = o(s[0]).removeClass("navbar-on-left navbar-from-left-to-center").addClass("navbar-on-center")
            }
            if (e.params.domCache && o(e.container).find(".page.cached").each(function() {
                    var a = o(this),
                        t = (a.index(), a[0].f7PageData && a[0].f7PageData.url);
                    t && e.history.indexOf(t) < 0 && e.initialPages.indexOf(this) < 0 && (i.pageRemoveCallback(e, a[0], "right"), a[0].f7RelatedNavbar && e.params.dynamicNavbar && i.navbarRemoveCallback(e, a[0], void 0, a[0].f7RelatedNavbar), a.remove(), a[0].f7RelatedNavbar && e.params.dynamicNavbar && o(a[0].f7RelatedNavbar).remove())
                }), !e.params.domCache && r && r.indexOf("#") > -1 && r in e.contentCache && -1 === e.history.indexOf(r) && (e.contentCache[r] = null, delete e.contentCache[r]), i.params.pushState && e.main && i.pushStateClearQueue(), e.params.preloadPreviousPage)
                if (e.params.domCache && e.history.length > 1) {
                    var p, d, c = e.history[e.history.length - 2];
                    c && e.pagesCache[c] ? (p = o(e.container).find('.page[data-page="' + e.pagesCache[c] + '"]'), p.next(".page")[0] !== t[0] && p.insertBefore(t), n && (d = o(e.container).find('.navbar-inner[data-page="' + e.pagesCache[c] + '"]'), d && 0 !== d.length || (d = n.prev(".navbar-inner.cached")), d.next(".navbar-inner")[0] !== n[0] && d.insertBefore(n))) : (p = t.prev(".page.cached"), n && (d = n.prev(".navbar-inner.cached"))), p && p.length > 0 && p.removeClass("cached page-on-right page-on-center").addClass("page-on-left"), d && d.length > 0 && d.removeClass("cached navbar-on-right navbar-on-center").addClass("navbar-on-left")
                } else i.router.back(e, {
                    preloadOnly: !0
                })
        };
        var f = document.createElement("div");
        i.modalStack = [], i.modalStackClearQueue = function() {
            i.modalStack.length && i.modalStack.shift()()
        }, i.modal = function(e) {
            e = e || {};
            var a = "";
            if (i.params.modalTemplate) i._compiledTemplates.modal || (i._compiledTemplates.modal = l.compile(i.params.modalTemplate)), a = i._compiledTemplates.modal(e);
            else {
                var t = "";
                if (e.buttons && e.buttons.length > 0)
                    for (var n = 0; n < e.buttons.length; n++) t += '<span class="modal-button' + (e.buttons[n].bold ? " modal-button-bold" : "") + '">' + e.buttons[n].text + "</span>";
                var r = e.title ? '<div class="modal-title">' + e.title + "</div>" : "",
                    s = e.text ? '<div class="modal-text">' + e.text + "</div>" : "",
                    p = e.afterText ? e.afterText : "",
                    d = e.buttons && 0 !== e.buttons.length ? "" : "modal-no-buttons",
                    c = e.verticalButtons ? "modal-buttons-vertical" : "",
                    u = e.buttons && e.buttons.length > 0 ? '<div class="modal-buttons modal-buttons-' + e.buttons.length + " " + c + '">' + t + "</div>" : "";
                a = '<div class="modal ' + d + " " + (e.cssClass || "") + '"><div class="modal-inner">' + (r + s + p) + "</div>" + u + "</div>"
            }
            f.innerHTML = a;
            var m = o(f).children();
            return o("body").append(m[0]), m.find(".modal-button").each(function(a, t) {
                o(t).on("click", function(t) {
                    e.buttons[a].close !== !1 && i.closeModal(m), e.buttons[a].onClick && e.buttons[a].onClick(m, t), e.onClick && e.onClick(m, a)
                })
            }), i.openModal(m), m[0]
        }, i.alert = function(e, a, t) {
            return "function" == typeof a && (t = arguments[1], a = void 0), i.modal({
                text: e || "",
                title: "undefined" == typeof a ? i.params.modalTitle : a,
                buttons: [{
                    text: i.params.modalButtonOk,
                    bold: !0,
                    onClick: t
                }]
            })
        }, i.confirm = function(e, a, t, n) {
            return "function" == typeof a && (n = arguments[2], t = arguments[1], a = void 0), i.modal({
                text: e || "",
                title: "undefined" == typeof a ? i.params.modalTitle : a,
                buttons: [{
                    text: i.params.modalButtonCancel,
                    onClick: n
                }, {
                    text: i.params.modalButtonOk,
                    bold: !0,
                    onClick: t
                }]
            })
        }, i.prompt = function(e, a, t, n) {
            return "function" == typeof a && (n = arguments[2], t = arguments[1], a = void 0), i.modal({
                text: e || "",
                title: "undefined" == typeof a ? i.params.modalTitle : a,
                afterText: '<div class="input-field"><input type="text" class="modal-text-input"></div>',
                buttons: [{
                    text: i.params.modalButtonCancel
                }, {
                    text: i.params.modalButtonOk,
                    bold: !0
                }],
                onClick: function(e, a) {
                    0 === a && n && n(o(e).find(".modal-text-input").val()), 1 === a && t && t(o(e).find(".modal-text-input").val())
                }
            })
        }, i.modalLogin = function(e, a, t, n) {
            return "function" == typeof a && (n = arguments[2], t = arguments[1], a = void 0), i.modal({
                text: e || "",
                title: "undefined" == typeof a ? i.params.modalTitle : a,
                afterText: '<div class="input-field modal-input-double"><input type="text" name="modal-username" placeholder="' + i.params.modalUsernamePlaceholder + '" class="modal-text-input"></div><div class="input-field modal-input-double"><input type="password" name="modal-password" placeholder="' + i.params.modalPasswordPlaceholder + '" class="modal-text-input"></div>',
                buttons: [{
                    text: i.params.modalButtonCancel
                }, {
                    text: i.params.modalButtonOk,
                    bold: !0
                }],
                onClick: function(e, a) {
                    var r = o(e).find('.modal-text-input[name="modal-username"]').val(),
                        i = o(e).find('.modal-text-input[name="modal-password"]').val();
                    0 === a && n && n(r, i), 1 === a && t && t(r, i)
                }
            })
        }, i.modalPassword = function(e, a, t, n) {
            return "function" == typeof a && (n = arguments[2], t = arguments[1], a = void 0), i.modal({
                text: e || "",
                title: "undefined" == typeof a ? i.params.modalTitle : a,
                afterText: '<div class="input-field"><input type="password" name="modal-password" placeholder="' + i.params.modalPasswordPlaceholder + '" class="modal-text-input"></div>',
                buttons: [{
                    text: i.params.modalButtonCancel
                }, {
                    text: i.params.modalButtonOk,
                    bold: !0
                }],
                onClick: function(e, a) {
                    var r = o(e).find('.modal-text-input[name="modal-password"]').val();
                    0 === a && n && n(r), 1 === a && t && t(r)
                }
            })
        }, i.showPreloader = function(e) {
            return i.modal({
                title: e || i.params.modalPreloaderTitle,
                text: '<div class="preloader">' + (i.params.material ? i.params.materialPreloaderHtml : "") + "</div>",
                cssClass: "modal-preloader"
            })
        }, i.hidePreloader = function() {
            i.closeModal(".modal.modal-in")
        }, i.showIndicator = function() {
            o("body").append('<div class="preloader-indicator-overlay"></div><div class="preloader-indicator-modal"><span class="preloader preloader-white">' + (i.params.material ? i.params.materialPreloaderHtml : "") + "</span></div>")
        }, i.hideIndicator = function() {
            o(".preloader-indicator-overlay, .preloader-indicator-modal").remove()
        }, i.actions = function(e, a) {
            var t, n, r, s = !1;
            1 === arguments.length ? a = e : i.device.ios ? i.device.ipad && (s = !0) : o(window).width() >= 768 && (s = !0), a = a || [], a.length > 0 && !o.isArray(a[0]) && (a = [a]);
            var p;
            if (s) {
                var d = i.params.modalActionsToPopoverTemplate || '<div class="popover actions-popover"><div class="popover-inner">{{#each this}}<div class="list-block"><ul>{{#each this}}{{#if label}}<li class="actions-popover-label {{#if color}}color-{{color}}{{/if}} {{#if bold}}actions-popover-bold{{/if}}">{{text}}</li>{{else}}<li><a href="#" class="item-link list-button {{#if color}}color-{{color}}{{/if}} {{#if bg}}bg-{{bg}}{{/if}} {{#if bold}}actions-popover-bold{{/if}} {{#if disabled}}disabled{{/if}}">{{text}}</a></li>{{/if}}{{/each}}</ul></div>{{/each}}</div></div>';
                i._compiledTemplates.actionsToPopover || (i._compiledTemplates.actionsToPopover = l.compile(d));
                var c = i._compiledTemplates.actionsToPopover(a);
                t = o(i.popover(c, e, !0)), n = ".list-block ul", r = ".list-button"
            } else {
                if (i.params.modalActionsTemplate) i._compiledTemplates.actions || (i._compiledTemplates.actions = l.compile(i.params.modalActionsTemplate)), p = i._compiledTemplates.actions(a);
                else {
                    for (var u = "", m = 0; m < a.length; m++)
                        for (var h = 0; h < a[m].length; h++) {
                            0 === h && (u += '<div class="actions-modal-group">');
                            var g = a[m][h],
                                v = g.label ? "actions-modal-label" : "actions-modal-button";
                            g.bold && (v += " actions-modal-button-bold"), g.color && (v += " color-" + g.color), g.bg && (v += " bg-" + g.bg), g.disabled && (v += " disabled"), u += '<div class="' + v + '">' + g.text + "</div>", h === a[m].length - 1 && (u += "</div>")
                        }
                    p = '<div class="actions-modal">' + u + "</div>"
                }
                f.innerHTML = p, t = o(f).children(), o("body").append(t[0]), n = ".actions-modal-group", r = ".actions-modal-button"
            }
            var b = t.find(n);
            return b.each(function(e, n) {
                var l = e;
                o(n).children().each(function(e, n) {
                    var p, d = e,
                        c = a[l][d];
                    !s && o(n).is(r) && (p = o(n)), s && o(n).find(r).length > 0 && (p = o(n).find(r)), p && p.on("click", function(e) {
                        c.close !== !1 && i.closeModal(t), c.onClick && c.onClick(t, e)
                    })
                })
            }), s || i.openModal(t), t[0]
        }, i.popover = function(e, a, t) {
            function n() {
                e.css({
                    left: "",
                    top: ""
                });
                var t, n, r, i = e.width(),
                    l = e.height(),
                    p = 0;
                s ? e.removeClass("popover-on-left popover-on-right popover-on-top popover-on-bottom").css({
                    left: "",
                    top: ""
                }) : (t = e.find(".popover-angle"), p = t.width() / 2, t.removeClass("on-left on-right on-top on-bottom").css({
                    left: "",
                    top: ""
                }));
                var d = a.outerWidth(),
                    c = a.outerHeight(),
                    u = a.offset(),
                    m = a.parents(".page");
                m.length > 0 && (u.top = u.top - m[0].scrollTop);
                var f = o(window).height(),
                    h = o(window).width(),
                    g = 0,
                    v = 0,
                    b = 0,
                    w = s ? "bottom" : "top";
                if (s) {
                    if (l < f - u.top - c ? (w = "bottom", g = u.top) : l < u.top ? (g = u.top - l + c, w = "top") : (w = "bottom", g = u.top), 0 >= g ? g = 8 : g + l >= f && (g = f - l - 8), v = u.left, v + i >= h - 8 && (v = u.left + d - i - 8), 8 > v && (v = 8), "top" === w && e.addClass("popover-on-top"), "bottom" === w && e.addClass("popover-on-bottom"), a.hasClass("floating-button-to-popover") && !e.hasClass("modal-in")) {
                        e.addClass("popover-floating-button");
                        var C = v + i / 2 - (u.left + d / 2),
                            y = g + l / 2 - (u.top + c / 2);
                        a.addClass("floating-button-to-popover-in").transform("translate3d(" + C + "px, " + y + "px,0)").transitionEnd(function(e) {
                            a.hasClass("floating-button-to-popover-in") && a.addClass("floating-button-to-popover-scale").transform("translate3d(" + C + "px, " + y + "px,0) scale(" + i / d + ", " + l / c + ")")
                        }), e.once("close", function() {
                            a.removeClass("floating-button-to-popover-in floating-button-to-popover-scale").addClass("floating-button-to-popover-out").transform("").transitionEnd(function(e) {
                                a.removeClass("floating-button-to-popover-out")
                            })
                        }), e.once("closed", function() {
                            e.removeClass("popover-floating-button");
                        })
                    }
                } else l + p < u.top ? g = u.top - l - p : l + p < f - u.top - c ? (w = "bottom", g = u.top + c + p) : (w = "middle", g = c / 2 + u.top - l / 2, b = g, 0 >= g ? g = 5 : g + l >= f && (g = f - l - 5), b -= g), "top" === w || "bottom" === w ? (v = d / 2 + u.left - i / 2, b = v, 5 > v && (v = 5), v + i > h && (v = h - i - 5), "top" === w && t.addClass("on-bottom"), "bottom" === w && t.addClass("on-top"), b -= v, n = i / 2 - p + b, n = Math.max(Math.min(n, i - 2 * p - 13), 13), t.css({
                    left: n + "px"
                })) : "middle" === w && (v = u.left - i - p, t.addClass("on-right"), (5 > v || v + i > h) && (5 > v && (v = u.left + d + p), v + i > h && (v = h - i - 5), t.removeClass("on-right").addClass("on-left")), r = l / 2 - p + b, r = Math.max(Math.min(r, l - 2 * p - 13), 13), t.css({
                    top: r + "px"
                }));
                e.css({
                    top: g + "px",
                    left: v + "px"
                })
            }
            if ("undefined" == typeof t && (t = !0), "string" == typeof e && e.indexOf("<") >= 0) {
                var r = document.createElement("div");
                if (r.innerHTML = e.trim(), !(r.childNodes.length > 0)) return !1;
                e = r.childNodes[0], t && e.classList.add("remove-on-close"), o("body").append(e)
            }
            if (e = o(e), a = o(a), 0 === e.length || 0 === a.length) return !1;
            0 === e.parents("body").length && (t && e.addClass("remove-on-close"), o("body").append(e[0])), 0 !== e.find(".popover-angle").length || i.params.material || e.append('<div class="popover-angle"></div>'), e.show();
            var s = i.params.material;
            return n(), o(window).on("resize", n), e.on("close", function() {
                o(window).off("resize", n)
            }), i.openModal(e), e[0]
        }, i.popup = function(e, a) {
            if ("undefined" == typeof a && (a = !0), "string" == typeof e && e.indexOf("<") >= 0) {
                var t = document.createElement("div");
                if (t.innerHTML = e.trim(), !(t.childNodes.length > 0)) return !1;
                e = t.childNodes[0], a && e.classList.add("remove-on-close"), o("body").append(e)
            }
            return e = o(e), 0 === e.length ? !1 : (0 === e.parents("body").length && (a && e.addClass("remove-on-close"), o("body").append(e[0])), e.show(), i.openModal(e), e[0])
        }, i.pickerModal = function(e, a) {
            if ("undefined" == typeof a && (a = !0), "string" == typeof e && e.indexOf("<") >= 0) {
                if (e = o(e), !(e.length > 0)) return !1;
                a && e.addClass("remove-on-close"), o("body").append(e[0])
            }
            return e = o(e), 0 === e.length ? !1 : (0 === e.parents("body").length && (a && e.addClass("remove-on-close"), o("body").append(e[0])), o(".picker-modal.modal-in:not(.modal-out)").length > 0 && !e.hasClass("modal-in") && i.closeModal(".picker-modal.modal-in:not(.modal-out)"), e.show(), i.openModal(e), e[0])
        }, i.loginScreen = function(e) {
            return e || (e = ".login-screen"), e = o(e), 0 === e.length ? !1 : (o(".login-screen.modal-in:not(.modal-out)").length > 0 && !e.hasClass("modal-in") && i.closeModal(".login-screen.modal-in:not(.modal-out)"), e.show(), i.openModal(e), e[0])
        }, i.openModal = function(e) {
            e = o(e);
            var a = e.hasClass("modal");
            if (o(".modal.modal-in:not(.modal-out)").length && i.params.modalStack && a) return void i.modalStack.push(function() {
                i.openModal(e)
            });
            if (!0 !== e.data("f7-modal-shown")) {
                e.data("f7-modal-shown", !0), e.once("close", function() {
                    e.removeData("f7-modal-shown")
                });
                var t = (e.hasClass("popover"), e.hasClass("popup")),
                    n = e.hasClass("login-screen"),
                    r = e.hasClass("picker-modal");
                a && (e.show(), e.css({
                    marginTop: -Math.round(e.outerHeight() / 2) + "px"
                }));
                var s;
                n || r || (0 !== o(".modal-overlay").length || t || o("body").append('<div class="modal-overlay"></div>'), 0 === o(".popup-overlay").length && t && o("body").append('<div class="popup-overlay"></div>'), s = o(t ? ".popup-overlay" : ".modal-overlay")), i.params.material && r && e.hasClass("picker-calendar") && (0 !== o(".picker-modal-overlay").length || t || o("body").append('<div class="picker-modal-overlay"></div>'), s = o(".picker-modal-overlay"));
                e[0].clientLeft;
                return e.trigger("open"), r && o("body").addClass("with-picker-modal"), e.find("." + i.params.viewClass).length > 0 && (e.find(".page").each(function() {
                    i.initPageWithCallback(this)
                }), e.find(".navbar").each(function() {
                    i.initNavbarWithCallback(this)
                })), n || r || s.addClass("modal-overlay-visible"), i.params.material && r && s && s.addClass("modal-overlay-visible"), e.removeClass("modal-out").addClass("modal-in").transitionEnd(function(a) {
                    e.hasClass("modal-out") ? e.trigger("closed") : e.trigger("opened")
                }), !0
            }
        }, i.closeModal = function(e) {
            if (e = o(e || ".modal-in"), "undefined" == typeof e || 0 !== e.length) {
                var a, t = e.hasClass("modal"),
                    n = e.hasClass("popover"),
                    r = e.hasClass("popup"),
                    s = e.hasClass("login-screen"),
                    l = e.hasClass("picker-modal"),
                    p = e.hasClass("remove-on-close");
                return r ? a = o(".popup-overlay") : l && i.params.material ? a = o(".picker-modal-overlay") : l || (a = o(".modal-overlay")), r ? e.length === o(".popup.modal-in").length && a.removeClass("modal-overlay-visible") : a && a.length > 0 && a.removeClass("modal-overlay-visible"), e.trigger("close"), l && (o("body").removeClass("with-picker-modal"), o("body").addClass("picker-modal-closing")), !n || i.params.material ? (e.removeClass("modal-in").addClass("modal-out").transitionEnd(function(a) {
                    if (e.hasClass("modal-out")) e.trigger("closed");
                    else if (e.trigger("opened"), n) return;
                    l && o("body").removeClass("picker-modal-closing"), r || s || l || n ? (e.removeClass("modal-out").hide(), p && e.length > 0 && e.remove()) : e.remove()
                }), t && i.params.modalStack && i.modalStackClearQueue()) : (e.removeClass("modal-in modal-out").trigger("closed").hide(), p && e.remove()), !0
            }
        }, i.setProgressbar = function(e, a, t) {
            if (e = o(e || "body"), 0 !== e.length) {
                a && (a = Math.min(Math.max(a, 0), 100));
                var n;
                if (n = e.hasClass("progressbar") ? e : e.children(".progressbar"), 0 !== n.length && !n.hasClass("progressbar-infinite")) {
                    n[0].clientLeft;
                    return n.children("span").transform("translate3d(" + (-100 + a) + "%,0,0)"), "undefined" != typeof t ? n.children("span").transition(t) : n.children("span").transition(""), n[0]
                }
            }
        }, i.showProgressbar = function(e, a, t) {
            if ("number" == typeof e && (e = "body", a = arguments[0], t = arguments[1]), a && "string" == typeof a && parseFloat(a) !== 1 * a && (t = a, a = void 0), e = o(e || "body"), 0 !== e.length) {
                var n;
                return e.hasClass("progressbar") ? n = e : (n = e.children(".progressbar:not(.progressbar-out), .progressbar-infinite:not(.progressbar-out)"), 0 === n.length && (n = o("undefined" != typeof a ? '<span class="progressbar progressbar-in' + (t ? " color-" + t : "") + '"><span></span></span>' : '<span class="progressbar-infinite progressbar-in' + (t ? " color-" + t : "") + '"></span>'), e.append(n))), a && i.setProgressbar(e, a), n[0]
            }
        }, i.hideProgressbar = function(e) {
            if (e = o(e || "body"), 0 !== e.length) {
                var a;
                a = e.hasClass("progressbar") ? e : e.children(".progressbar, .progressbar-infinite"), 0 !== a.length && a.hasClass("progressbar-in") && !a.hasClass("progressbar-out") && a.removeClass("progressbar-in").addClass("progressbar-out").animationEnd(function() {
                    a.remove(), a = null
                })
            }
        }, i.initPageProgressbar = function(e) {
            e = o(e), e.find(".progressbar").each(function() {
                var e = o(this);
                0 === e.children("span").length && e.append("<span></span>"), e.attr("data-progress") && i.setProgressbar(e, e.attr("data-progress"))
            })
        }, i.allowPanelOpen = !0, i.openPanel = function(e) {
            function a() {
                r.transitionEnd(function(e) {
                    o(e.target).is(r) ? (t.hasClass("active") ? t.trigger("opened") : t.trigger("closed"), i.params.material && o(".panel-overlay").css({
                        display: ""
                    }), i.allowPanelOpen = !0) : a()
                })
            }
            if (!i.allowPanelOpen) return !1;
            var t = o(".panel-" + e);
            if (0 === t.length || t.hasClass("active")) return !1;
            i.closePanel(), i.allowPanelOpen = !1;
            var n = t.hasClass("panel-reveal") ? "reveal" : "cover";
            t.css({
                display: "block"
            }).addClass("active"), t.trigger("open"), i.params.material && o(".panel-overlay").show(), t.find("." + i.params.viewClass).length > 0 && i.sizeNavbars && i.sizeNavbars(t.find("." + i.params.viewClass)[0]);
            var r = (t[0].clientLeft, "reveal" === n ? o("." + i.params.viewsClass) : t);
            return a(), o("body").addClass("with-panel-" + e + "-" + n), !0
        }, i.closePanel = function() {
            var e = o(".panel.active");
            if (0 === e.length) return !1;
            var a = e.hasClass("panel-reveal") ? "reveal" : "cover",
                t = e.hasClass("panel-left") ? "left" : "right";
            e.removeClass("active");
            var n = "reveal" === a ? o("." + i.params.viewsClass) : e;
            e.trigger("close"), i.allowPanelOpen = !1, n.transitionEnd(function() {
                e.hasClass("active") || (e.css({
                    display: ""
                }), e.trigger("closed"), o("body").removeClass("panel-closing"), i.allowPanelOpen = !0)
            }), o("body").addClass("panel-closing").removeClass("with-panel-" + t + "-" + a)
        }, i.initSwipePanels = function() {
            function e(e) {
                if (i.allowPanelOpen && (i.params.swipePanel || i.params.swipePanelOnlyClose) && !s && !(o(".modal-in, .photo-browser-in").length > 0) && (i.params.swipePanelCloseOpposite || i.params.swipePanelOnlyClose || !(o(".panel.active").length > 0) || n.hasClass("active"))) {
                    if (w.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, w.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY, i.params.swipePanelCloseOpposite || i.params.swipePanelOnlyClose) {
                        if (o(".panel.active").length > 0) r = o(".panel.active").hasClass("panel-left") ? "left" : "right";
                        else {
                            if (i.params.swipePanelOnlyClose) return;
                            r = i.params.swipePanel
                        }
                        if (!r) return
                    }
                    if (n = o(".panel.panel-" + r), f = n.hasClass("active"), i.params.swipePanelActiveArea && !f) {
                        if ("left" === r && w.x > i.params.swipePanelActiveArea) return;
                        if ("right" === r && w.x < window.innerWidth - i.params.swipePanelActiveArea) return
                    }
                    l = !1, s = !0, p = void 0, d = (new Date).getTime(), v = void 0
                }
            }

            function a(e) {
                if (s && !e.f7PreventPanelSwipe) {
                    var a = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX,
                        t = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY;
                    if ("undefined" == typeof p && (p = !!(p || Math.abs(t - w.y) > Math.abs(a - w.x))), p) return void(s = !1);
                    if (!v && (v = a > w.x ? "to-right" : "to-left", "left" === r && "to-left" === v && !n.hasClass("active") || "right" === r && "to-right" === v && !n.hasClass("active"))) return void(s = !1);
                    if (i.params.swipePanelNoFollow) {
                        var o = (new Date).getTime() - d;
                        return 300 > o && ("to-left" === v && ("right" === r && i.openPanel(r), "left" === r && n.hasClass("active") && i.closePanel()), "to-right" === v && ("left" === r && i.openPanel(r), "right" === r && n.hasClass("active") && i.closePanel())), s = !1, void(l = !1)
                    }
                    l || (g = n.hasClass("panel-cover") ? "cover" : "reveal", f || (n.show(), b.show()), h = n[0].offsetWidth, n.transition(0), n.find("." + i.params.viewClass).length > 0 && i.sizeNavbars && i.sizeNavbars(n.find("." + i.params.viewClass)[0])), l = !0, e.preventDefault();
                    var y = f ? 0 : -i.params.swipePanelThreshold;
                    "right" === r && (y = -y), c = a - w.x + y, "right" === r ? (u = c - (f ? h : 0), u > 0 && (u = 0), -h > u && (u = -h)) : (u = c + (f ? h : 0), 0 > u && (u = 0), u > h && (u = h)), "reveal" === g ? (C.transform("translate3d(" + u + "px,0,0)").transition(0), b.transform("translate3d(" + u + "px,0,0)").transition(0), i.pluginHook("swipePanelSetTransform", C[0], n[0], Math.abs(u / h))) : (n.transform("translate3d(" + u + "px,0,0)").transition(0), i.params.material && (b.transition(0), m = Math.abs(u / h), b.css({
                        opacity: m
                    })), i.pluginHook("swipePanelSetTransform", C[0], n[0], Math.abs(u / h)))
                }
            }

            function t(e) {
                if (!s || !l) return s = !1, void(l = !1);
                s = !1, l = !1;
                var a, t = (new Date).getTime() - d,
                    p = 0 === u || Math.abs(u) === h;
                if (a = f ? u === -h ? "reset" : 300 > t && Math.abs(u) >= 0 || t >= 300 && Math.abs(u) <= h / 2 ? "left" === r && u === h ? "reset" : "swap" : "reset" : 0 === u ? "reset" : 300 > t && Math.abs(u) > 0 || t >= 300 && Math.abs(u) >= h / 2 ? "swap" : "reset", "swap" === a && (i.allowPanelOpen = !0, f ? (i.closePanel(), p && (n.css({
                        display: ""
                    }), o("body").removeClass("panel-closing"))) : i.openPanel(r), p && (i.allowPanelOpen = !0)), "reset" === a)
                    if (f) i.allowPanelOpen = !0, i.openPanel(r);
                    else if (i.closePanel(), p) i.allowPanelOpen = !0, n.css({
                    display: ""
                });
                else {
                    var c = "reveal" === g ? C : n;
                    n.trigger("close"), o("body").addClass("panel-closing"), c.transitionEnd(function() {
                        n.trigger("closed"), n.css({
                            display: ""
                        }), o("body").removeClass("panel-closing"), i.allowPanelOpen = !0
                    })
                }
                "reveal" === g && (C.transition(""), C.transform("")), n.transition("").transform(""), b.css({
                    display: ""
                }).transform("").transition("").css("opacity", "")
            }
            var n, r;
            if (i.params.swipePanel) {
                if (n = o(".panel.panel-" + i.params.swipePanel), r = i.params.swipePanel, 0 === n.length) return
            } else {
                if (!i.params.swipePanelOnlyClose) return;
                if (0 === o(".panel").length) return
            }
            var s, l, p, d, c, u, m, f, h, g, v, b = o(".panel-overlay"),
                w = {},
                C = o("." + i.params.viewsClass);
            o(document).on(i.touchEvents.start, e), o(document).on(i.touchEvents.move, a), o(document).on(i.touchEvents.end, t)
        }, i.initImagesLazyLoad = function(e) {
            function a(e) {
                function t() {
                    e.removeClass("lazy").addClass("lazy-loaded"), n ? e.css("background-image", "url(" + r + ")") : e.attr("src", r), i.params.imagesLazyLoadSequential && (u = !1, c.length > 0 && a(c.shift()))
                }
                e = o(e);
                var n = e.attr("data-background"),
                    r = n ? n : e.attr("data-src");
                if (r) {
                    if (i.params.imagesLazyLoadSequential && u) return void(c.indexOf(e[0]) < 0 && c.push(e[0]));
                    u = !0;
                    var s = new Image;
                    s.onload = t, s.onerror = t, s.src = r
                }
            }

            function t() {
                l = e.find(".lazy"), l.each(function(e, t) {
                    t = o(t), t.parents(".tab:not(.active)").length > 0 || n(t[0]) && a(t)
                })
            }

            function n(e) {
                var a = e.getBoundingClientRect(),
                    t = i.params.imagesLazyLoadThreshold || 0;
                return a.top >= 0 - t && a.left >= 0 - t && a.top <= window.innerHeight + t && a.left <= window.innerWidth + t
            }

            function r(a) {
                var n = a ? "off" : "on";
                l[n]("lazy", t), l.parents(".tab")[n]("show", t), e[n]("lazy", t), p[n]("lazy", t), p[n]("scroll", t), o(window)[n]("resize", t)
            }

            function s() {
                r(!0)
            }
            e = o(e);
            var l;
            if (e.hasClass("lazy") ? (l = e, e = l.parents(".page")) : l = e.find(".lazy"), 0 !== l.length) {
                var p;
                if (e.hasClass("page-content") ? (p = e, e = e.parents(".page")) : p = e.find(".page-content"), 0 !== p.length) {
                    var d = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEXCwsK592mkAAAACklEQVQI12NgAAAAAgAB4iG8MwAAAABJRU5ErkJggg==";
                    "string" == typeof i.params.imagesLazyLoadPlaceholder && (d = i.params.imagesLazyLoadPlaceholder), i.params.imagesLazyLoadPlaceholder !== !1 && l.each(function() {
                        o(this).attr("data-src") && o(this).attr("src", d)
                    });
                    var c = [],
                        u = !1;
                    e[0].f7DestroyImagesLazyLoad = s, r(), e.hasClass("page") && e.once("pageBeforeRemove", s), t(), e.once("pageAfterAnimation", t)
                }
            }
        }, i.destroyImagesLazyLoad = function(e) {
            e = o(e), e.length > 0 && e[0].f7DestroyImagesLazyLoad && e[0].f7DestroyImagesLazyLoad()
        }, i.reinitImagesLazyLoad = function(e) {
            e = o(e), e.length > 0 && e.trigger("lazy")
        }, i.initPageMaterialPreloader = function(e) {
            o(e).find(".preloader").each(function() {
                0 === o(this).children().length && o(this).html(i.params.materialPreloaderHtml)
            })
        };
        var h = function(e, a) {
            var t = {
                autoLayout: !0,
                newMessagesFirst: !1,
                messageTemplate: '{{#if day}}<div class="messages-date">{{day}} {{#if time}}, <span>{{time}}</span>{{/if}}</div>{{/if}}<div class="message message-{{type}} {{#if hasImage}}message-pic{{/if}} {{#if avatar}}message-with-avatar{{/if}} {{#if position}}message-appear-from-{{position}}{{/if}}">{{#if name}}<div class="message-name">{{name}}</div>{{/if}}<div class="message-text">{{text}}{{#if date}}<div class="message-date">{{date}}</div>{{/if}}</div>{{#if avatar}}<div class="message-avatar" style="background-image:url({{avatar}})"></div>{{/if}}{{#if label}}<div class="message-label">{{label}}</div>{{/if}}</div>'
            };
            a = a || {};
            for (var n in t)("undefined" == typeof a[n] || null === a[n]) && (a[n] = t[n]);
            var r = this;
            return r.params = a, r.container = o(e), 0 !== r.container.length ? (r.params.autoLayout && r.container.addClass("messages-auto-layout"), r.params.newMessagesFirst && r.container.addClass("messages-new-first"), r.pageContainer = r.container.parents(".page").eq(0), r.pageContent = r.pageContainer.find(".page-content"), r.template = Template7.compile(r.params.messageTemplate), r.layout = function() {
                r.container.hasClass("messages-auto-layout") || r.container.addClass("messages-auto-layout"), r.container.find(".message").each(function() {
                    var e = o(this);
                    e.find(".message-text img").length > 0 && e.addClass("message-pic"), e.find(".message-avatar").length > 0 && e.addClass("message-with-avatar")
                }), r.container.find(".message").each(function() {
                    var e = o(this),
                        a = e.hasClass("message-sent"),
                        t = e.next(".message-" + (a ? "sent" : "received")),
                        n = e.prev(".message-" + (a ? "sent" : "received"));
                    0 === t.length ? e.addClass("message-last message-with-tail") : e.removeClass("message-last message-with-tail"), 0 === n.length ? e.addClass("message-first") : e.removeClass("message-first"), n.length > 0 && n.find(".message-name").length > 0 && e.find(".message-name").length > 0 && n.find(".message-name").text() !== e.find(".message-name").text() && (n.addClass("message-last message-with-tail"), e.addClass("message-first"))
                })
            }, r.appendMessage = function(e, a) {
                return r.addMessage(e, "append", a)
            }, r.prependMessage = function(e, a) {
                return r.addMessage(e, "prepend", a)
            }, r.addMessage = function(e, a, t) {
                return r.addMessages([e], a, t)
            }, r.addMessages = function(e, a, t) {
                "undefined" == typeof t && (t = !0), "undefined" == typeof a && (a = r.params.newMessagesFirst ? "prepend" : "append");
                var n, i = "";
                for (n = 0; n < e.length; n++) {
                    var s = e[n] || {};
                    s.type = s.type || "sent", s.text && (s.hasImage = s.text.indexOf("<img") >= 0, t && (s.position = "append" === a ? "bottom" : "top"), i += r.template(s))
                }
                var o, l;
                "prepend" === a && (o = r.pageContent[0].scrollHeight, l = r.pageContent[0].scrollTop), r.container[a](i), r.params.autoLayout && r.layout(), "prepend" === a && (r.pageContent[0].scrollTop = l + (r.pageContent[0].scrollHeight - o)), ("append" === a && !r.params.newMessagesFirst || "prepend" === a && r.params.newMessagesFirst) && r.scrollMessages(t ? void 0 : 0);
                var p = r.container.find(".message");
                if (1 === e.length) return "append" === a ? p[p.length - 1] : p[0];
                var d = [];
                if ("append" === a)
                    for (n = p.length - e.length; n < p.length; n++) d.push(p[n]);
                else
                    for (n = 0; n < e.length; n++) d.push(p[n]);
                return d
            }, r.removeMessage = function(e) {
                return e = o(e), 0 === e.length ? !1 : (e.remove(), r.params.autoLayout && r.layout(), !0)
            }, r.removeMessages = function(e) {
                r.removeMessage(e)
            }, r.clean = function() {
                r.container.html("")
            }, r.scrollMessages = function(e, a) {
                "undefined" == typeof e && (e = 400);
                var t, n = r.pageContent[0].scrollTop;
                if ("undefined" != typeof a) t = a;
                else if (t = r.params.newMessagesFirst ? 0 : r.pageContent[0].scrollHeight - r.pageContent[0].offsetHeight, t === n) return;
                r.pageContent.scrollTop(t, e)
            }, r.init = function() {
                r.params.messages ? r.addMessages(r.params.messages, void 0, !1) : (r.params.autoLayout && r.layout(), r.scrollMessages(0))
            }, r.destroy = function() {
                r = null
            }, r.init(), r.container[0].f7Messages = r, r) : void 0
        };
        i.messages = function(e, a) {
            return new h(e, a)
        }, i.initPageMessages = function(e) {
            function a() {
                n.destroy(), e.off("pageBeforeRemove", a)
            }
            e = o(e);
            var t = e.find(".messages");
            if (0 !== t.length && t.hasClass("messages-init")) {
                var n = i.messages(t, t.dataset());
                e.hasClass("page") && e.on("pageBeforeRemove", a)
            }
        }, i.swipeoutOpenedEl = void 0, i.allowSwipeout = !0, i.initSwipeout = function(e) {
            function a(e) {
                i.allowSwipeout && (s = !1, r = !0, l = void 0, O.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, O.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY, p = (new Date).getTime())
            }

            function t(e) {
                if (r) {
                    var a = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX,
                        t = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY;
                    if ("undefined" == typeof l && (l = !!(l || Math.abs(t - O.y) > Math.abs(a - O.x))), l) return void(r = !1);
                    if (!s) {
                        if (o(".list-block.sortable-opened").length > 0) return;
                        c = o(this), u = c.find(".swipeout-content"), m = c.find(".swipeout-actions-right"), f = c.find(".swipeout-actions-left"), h = g = C = y = k = T = null, M = f.hasClass("swipeout-actions-no-fold") || i.params.swipeoutActionsNoFold, I = m.hasClass("swipeout-actions-no-fold") || i.params.swipeoutActionsNoFold, f.length > 0 && (h = f.outerWidth(), C = f.children("button"), T = f.find(".swipeout-overswipe")), m.length > 0 && (g = m.outerWidth(), y = m.children("button"), k = m.find(".swipeout-overswipe")), b = c.hasClass("swipeout-opened"), b && (w = c.find(".swipeout-actions-left.swipeout-actions-opened").length > 0 ? "left" : "right"), c.removeClass("transitioning"), i.params.swipeoutNoFollow || (c.find(".swipeout-actions-opened").removeClass("swipeout-actions-opened"), c.removeClass("swipeout-opened"))
                    }
                    if (s = !0, e.preventDefault(), d = a - O.x, v = d, b && ("right" === w ? v -= g : v += h), v > 0 && 0 === f.length || 0 > v && 0 === m.length) {
                        if (!b) return r = s = !1, u.transform(""), y && y.length > 0 && y.transform(""), void(C && C.length > 0 && C.transform(""));
                        v = 0
                    }
                    x = 0 > v ? "to-left" : v > 0 ? "to-right" : x ? x : "to-left";
                    var n, p, E;
                    if (e.f7PreventPanelSwipe = !0, i.params.swipeoutNoFollow) return b ? ("right" === w && d > 0 && i.swipeoutClose(c), "left" === w && 0 > d && i.swipeoutClose(c)) : (0 > d && m.length > 0 && i.swipeoutOpen(c, "right"), d > 0 && f.length > 0 && i.swipeoutOpen(c, "left")), r = !1, void(s = !1);
                    P = !1, S = !1;
                    var D;
                    if (m.length > 0)
                        for (E = v / g, -g > v && (v = -g - Math.pow(-v - g, .8), k.length > 0 && (S = !0)), n = 0; n < y.length; n++) "undefined" == typeof y[n]._buttonOffset && (y[n]._buttonOffset = y[n].offsetLeft), p = y[n]._buttonOffset, D = o(y[n]), k.length > 0 && D.hasClass("swipeout-overswipe") && (D.css({
                            left: (S ? -p : 0) + "px"
                        }), S ? D.addClass("swipeout-overswipe-active") : D.removeClass("swipeout-overswipe-active")), D.transform("translate3d(" + (v - p * (1 + Math.max(E, -1))) + "px,0,0)");
                    if (f.length > 0)
                        for (E = v / h, v > h && (v = h + Math.pow(v - h, .8), T.length > 0 && (P = !0)), n = 0; n < C.length; n++) "undefined" == typeof C[n]._buttonOffset && (C[n]._buttonOffset = h - C[n].offsetLeft - C[n].offsetWidth), p = C[n]._buttonOffset, D = o(C[n]), T.length > 0 && D.hasClass("swipeout-overswipe") && (D.css({
                            left: (P ? p : 0) + "px"
                        }), P ? D.addClass("swipeout-overswipe-active") : D.removeClass("swipeout-overswipe-active")), C.length > 1 && D.css("z-index", C.length - n), D.transform("translate3d(" + (v + p * (1 - Math.min(E, 1))) + "px,0,0)");
                    u.transform("translate3d(" + v + "px,0,0)")
                }
            }

            function n(e) {
                if (!r || !s) return r = !1, void(s = !1);
                r = !1, s = !1;
                var a, t, n, l, w, T, k = (new Date).getTime() - p;
                if (T = "to-left" === x ? I : M, n = "to-left" === x ? m : f, t = "to-left" === x ? g : h, a = 300 > k && (-10 > d && "to-left" === x || d > 10 && "to-right" === x) || k >= 300 && Math.abs(v) > t / 2 ? "open" : "close", 300 > k && (0 === Math.abs(v) && (a = "close"), Math.abs(v) === t && (a = "open")), "open" === a) {
                    i.swipeoutOpenedEl = c, c.trigger("open"), c.addClass("swipeout-opened transitioning");
                    var O = "to-left" === x ? -t : t;
                    if (u.transform("translate3d(" + O + "px,0,0)"), n.addClass("swipeout-actions-opened"), l = "to-left" === x ? y : C)
                        for (w = 0; w < l.length; w++) o(l[w]).transform("translate3d(" + O + "px,0,0)");
                    S && m.find(".swipeout-overswipe")[0].click(), P && f.find(".swipeout-overswipe")[0].click()
                } else c.trigger("close"), i.swipeoutOpenedEl = void 0, c.addClass("transitioning").removeClass("swipeout-opened"), u.transform(""), n.removeClass("swipeout-actions-opened");
                var E;
                if (C && C.length > 0 && C !== l)
                    for (w = 0; w < C.length; w++) E = C[w]._buttonOffset, "undefined" == typeof E && (C[w]._buttonOffset = h - C[w].offsetLeft - C[w].offsetWidth), o(C[w]).transform("translate3d(" + E + "px,0,0)");
                if (y && y.length > 0 && y !== l)
                    for (w = 0; w < y.length; w++) E = y[w]._buttonOffset, "undefined" == typeof E && (y[w]._buttonOffset = y[w].offsetLeft), o(y[w]).transform("translate3d(" + -E + "px,0,0)");
                u.transitionEnd(function(e) {
                    b && "open" === a || closed && "close" === a || (c.trigger("open" === a ? "opened" : "closed"), b && "close" === a && (m.length > 0 && y.transform(""), f.length > 0 && C.transform("")))
                })
            }
            var r, s, l, p, d, c, u, m, f, h, g, v, b, w, C, y, x, T, k, P, S, M, I, O = {};
            o(document).on(i.touchEvents.start, function(e) {
                if (i.swipeoutOpenedEl) {
                    var a = o(e.target);
                    i.swipeoutOpenedEl.is(a[0]) || a.parents(".swipeout").is(i.swipeoutOpenedEl) || a.hasClass("modal-in") || a.hasClass("modal-overlay") || a.hasClass("actions-modal") || a.parents(".actions-modal.modal-in, .modal.modal-in").length > 0 || i.swipeoutClose(i.swipeoutOpenedEl)
                }
            }), e ? (o(e).on(i.touchEvents.start, a), o(e).on(i.touchEvents.move, t), o(e).on(i.touchEvents.end, n)) : (o(document).on(i.touchEvents.start, ".list-block .swipeout", a), o(document).on(i.touchEvents.move, ".list-block .swipeout", t), o(document).on(i.touchEvents.end, ".list-block .swipeout", n))
        }, i.swipeoutOpen = function(e, a, t) {
            if (e = o(e), 2 === arguments.length && "function" == typeof arguments[1] && (t = a), 0 !== e.length && (e.length > 1 && (e = o(e[0])), e.hasClass("swipeout") && !e.hasClass("swipeout-opened"))) {
                a || (a = e.find(".swipeout-actions-right").length > 0 ? "right" : "left");
                var n = e.find(".swipeout-actions-" + a);
                if (0 !== n.length) {
                    n.hasClass("swipeout-actions-no-fold") || i.params.swipeoutActionsNoFold;
                    e.trigger("open").addClass("swipeout-opened").removeClass("transitioning"), n.addClass("swipeout-actions-opened");
                    var r, s = n.children("a"),
                        l = n.outerWidth(),
                        p = "right" === a ? -l : l;
                    if (s.length > 1) {
                        for (r = 0; r < s.length; r++) "right" === a ? o(s[r]).transform("translate3d(" + -s[r].offsetLeft + "px,0,0)") : o(s[r]).css("z-index", s.length - r).transform("translate3d(" + (l - s[r].offsetWidth - s[r].offsetLeft) + "px,0,0)");
                        s[1].clientLeft
                    }
                    for (e.addClass("transitioning"), r = 0; r < s.length; r++) o(s[r]).transform("translate3d(" + p + "px,0,0)");
                    e.find(".swipeout-content").transform("translate3d(" + p + "px,0,0)").transitionEnd(function() {
                        e.trigger("opened"), t && t.call(e[0])
                    }), i.swipeoutOpenedEl = e
                }
            }
        }, i.swipeoutClose = function(e, a) {
            function t() {
                i.allowSwipeout = !0, e.hasClass("swipeout-opened") || (e.removeClass("transitioning"), s.transform(""), e.trigger("closed"), a && a.call(e[0]), p && clearTimeout(p))
            }
            if (e = o(e), 0 !== e.length && e.hasClass("swipeout-opened")) {
                var n = e.find(".swipeout-actions-opened").hasClass("swipeout-actions-right") ? "right" : "left",
                    r = e.find(".swipeout-actions-opened").removeClass("swipeout-actions-opened"),
                    s = (r.hasClass("swipeout-actions-no-fold") || i.params.swipeoutActionsNoFold, r.children("a")),
                    l = r.outerWidth();
                i.allowSwipeout = !1, e.trigger("close"), e.removeClass("swipeout-opened").addClass("transitioning");
                var p;
                e.find(".swipeout-content").transform("").transitionEnd(t), p = setTimeout(t, 500);
                for (var d = 0; d < s.length; d++) "right" === n ? o(s[d]).transform("translate3d(" + -s[d].offsetLeft + "px,0,0)") : o(s[d]).transform("translate3d(" + (l - s[d].offsetWidth - s[d].offsetLeft) + "px,0,0)"), o(s[d]).css({
                    left: "0px"
                }).removeClass("swipeout-overswipe-active");
                i.swipeoutOpenedEl && i.swipeoutOpenedEl[0] === e[0] && (i.swipeoutOpenedEl = void 0)
            }
        }, i.swipeoutDelete = function(e, a) {
            if (e = o(e), 0 !== e.length) {
                e.length > 1 && (e = o(e[0])), i.swipeoutOpenedEl = void 0, e.trigger("delete"), e.css({
                    height: e.outerHeight() + "px"
                });
                e[0].clientLeft;
                e.css({
                    height: "0px"
                }).addClass("deleting transitioning").transitionEnd(function() {
                    if (e.trigger("deleted"), a && a.call(e[0]), e.parents(".virtual-list").length > 0) {
                        var t = e.parents(".virtual-list")[0].f7VirtualList,
                            n = e[0].f7VirtualListIndex;
                        t && "undefined" != typeof n && t.deleteItem(n)
                    } else e.remove()
                });
                var t = "-100%";
                e.find(".swipeout-content").transform("translate3d(" + t + ",0,0)")
            }
        }, i.sortableToggle = function(e) {
            return e = o(e), 0 === e.length && (e = o(".list-block.sortable")), e.toggleClass("sortable-opened"), e.hasClass("sortable-opened") ? e.trigger("open") : e.trigger("close"), e
        }, i.sortableOpen = function(e) {
            return e = o(e), 0 === e.length && (e = o(".list-block.sortable")), e.addClass("sortable-opened"), e.trigger("open"), e
        }, i.sortableClose = function(e) {
            return e = o(e), 0 === e.length && (e = o(".list-block.sortable")), e.removeClass("sortable-opened"), e.trigger("close"), e
        }, i.initSortable = function() {
            function e(e) {
                r = !1, n = !0, s = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY, p = o(this).parent(), c = p.parent().find("li"), g = p.parents(".sortable"), e.preventDefault(), i.allowPanelOpen = i.allowSwipeout = !1
            }

            function a(e) {
                if (n && p) {
                    var a = ("touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY);
                    r || (p.addClass("sorting"), g.addClass("sortable-sorting"), u = p[0].offsetTop, m = p.parent().height() - p[0].offsetTop - p.height(), d = p[0].offsetHeight), r = !0, e.preventDefault(), e.f7PreventPanelSwipe = !0, l = a - s;
                    var t = l; - u > t && (t = -u), t > m && (t = m), p.transform("translate3d(0," + t + "px,0)"), h = f = void 0, c.each(function() {
                        var e = o(this);
                        if (e[0] !== p[0]) {
                            var a = e[0].offsetTop,
                                n = e.height(),
                                r = p[0].offsetTop + t;
                            r >= a - n / 2 && p.index() < e.index() ? (e.transform("translate3d(0, " + -d + "px,0)"), f = e, h = void 0) : a + n / 2 >= r && p.index() > e.index() ? (e.transform("translate3d(0, " + d + "px,0)"), f = void 0, h || (h = e)) : o(this).transform("translate3d(0, 0%,0)")
                        }
                    })
                }
            }

            function t(e) {
                if (i.allowPanelOpen = i.allowSwipeout = !0, !n || !r) return n = !1, void(r = !1);
                e.preventDefault(), c.transform(""), p.removeClass("sorting"), g.removeClass("sortable-sorting");
                var a, t, s;
                f && (p.insertAfter(f), p.trigger("sort")), h && (p.insertBefore(h), p.trigger("sort")), (f || h) && g.hasClass("virtual-list") && (a = g[0].f7VirtualList, t = p[0].f7VirtualListIndex, s = h ? h[0].f7VirtualListIndex : f[0].f7VirtualListIndex, a && a.moveItem(t, s)), f = h = void 0, n = !1, r = !1
            }
            var n, r, s, l, p, d, c, u, m, f, h, g;
            o(document).on(i.touchEvents.start, ".list-block.sortable .sortable-handler", e), i.support.touch ? (o(document).on(i.touchEvents.move, ".list-block.sortable .sortable-handler", a), o(document).on(i.touchEvents.end, ".list-block.sortable .sortable-handler", t)) : (o(document).on(i.touchEvents.move, a), o(document).on(i.touchEvents.end, t))
        }, i.initSmartSelects = function(e) {
            e = o(e);
            var a;
            a = e.is(".smart-select") ? e : e.find(".smart-select"), 0 !== a.length && a.each(function() {
                var e = o(this),
                    a = e.find("select");
                if (0 !== a.length) {
                    var t = a[0];
                    if (0 !== t.length) {
                        for (var n = [], r = 0; r < t.length; r++) t[r].selected && n.push(t[r].textContent.trim());
                        var i = e.find(".item-after");
                        if (0 === i.length) e.find(".item-inner").append('<div class="item-after">' + n.join(", ") + "</div>");
                        else {
                            var s = i.text();
                            if (i.hasClass("smart-select-value"))
                                for (r = 0; r < t.length; r++) t[r].selected = t[r].textContent.trim() === s.trim();
                            else i.text(n.join(", "))
                        }
                    }
                }
            })
        }, i.smartSelectAddOption = function(e, a, t) {
            e = o(e);
            var n = e.parents(".smart-select");
            "undefined" == typeof t ? e.append(a) : o(a).insertBefore(e.find("option").eq(t)), i.initSmartSelects(n);
            var r = n.find("select").attr("name"),
                s = o('.page.smart-select-page[data-select-name="' + r + '"]').length > 0;
            s && i.smartSelectOpen(n, !0)
        }, i.smartSelectOpen = function(e, a) {
            function t() {
                var a = e.parents(".page-content");
                if (0 !== a.length) {
                    var t, n = parseInt(a.css("padding-top"), 10),
                        r = parseInt(a.css("padding-bottom"), 10),
                        i = a[0].offsetHeight - n - ie.height(),
                        s = a[0].scrollHeight - n - ie.height(),
                        o = e.offset().top - n + e[0].offsetHeight;
                    if (o > i) {
                        var l = a.scrollTop() + o - i;
                        l + i > s && (t = l + i - s + r, i === s && (t = ie.height()), a.css({
                            "padding-bottom": t + "px"
                        })), a.scrollTop(l, 300)
                    }
                }
            }

            function n(a) {
                var t = !0;
                (a.target === e[0] || o(a.target).parents(e[0]).length > 0) && (t = !1), o(a.target).parents(".picker-modal").length > 0 && (t = !1), t && i.closeModal(".smart-select-picker.modal-in")
            }

            function r(e) {
                k.selectedOptions.length >= Y ? e.find('input[type="checkbox"]').each(function() {
                    this.checked ? o(this).parents("li").removeClass("disabled") : o(this).parents("li").addClass("disabled")
                }) : e.find(".disabled").removeClass("disabled")
            }

            function s(a) {
                if (a = o(a), C) {
                    var t = i.virtualList(a.find(".virtual-list"), {
                        items: R,
                        template: W,
                        height: y || void 0,
                        searchByItem: function(e, a, t) {
                            return t.text.toLowerCase().indexOf(e.trim().toLowerCase()) >= 0 ? !0 : !1
                        }
                    });
                    a.once("popup" === c || "picker" === c ? "closed" : "pageBeforeRemove", function() {
                        t && t.destroy && t.destroy()
                    })
                }
                Y && r(a), a.on("change", 'input[name="' + F + '"]', function() {
                    var t = this,
                        n = t.value,
                        s = [];
                    if ("checkbox" === t.type) {
                        for (var o = 0; o < k.options.length; o++) {
                            var l = k.options[o];
                            l.value === n && (l.selected = t.checked), l.selected && s.push(l.textContent.trim())
                        }
                        Y && r(a)
                    } else s = [e.find('option[value="' + n + '"]').text()], k.value = n;
                    P.trigger("change"), e.find(".item-after").text(s.join(", ")), g && "radio" === q && ("popup" === c ? i.closeModal(re) : "picker" === c ? i.closeModal(ie) : d.router.back())
                })
            }

            function p(e) {
                var a = e.detail.page;
                a.name === te && s(a.container)
            }
            if (e = o(e), 0 !== e.length) {
                var d = e.parents("." + i.params.viewClass);
                if (0 !== d.length) {
                    d = d[0].f7View;
                    var c = e.attr("data-open-in") || i.params.smartSelectOpenIn;
                    if ("popup" === c) {
                        if (o(".popup.smart-select-popup").length > 0) return
                    } else if ("picker" === c) {
                        if (o(".picker-modal.modal-in").length > 0 && !a) {
                            if (e[0].f7SmartSelectPicker === o(".picker-modal.modal-in:not(.modal-out)")[0]) return;
                            i.closeModal(o(".picker-modal.modal-in:not(.modal-out)"))
                        }
                    } else if (!d) return;
                    var u, m = e.dataset(),
                        f = m.pageTitle || e.find(".item-title").text(),
                        h = m.backText || i.params.smartSelectBackText;
                    u = "picker" === c ? m.pickerCloseText || m.backText || i.params.smartSelectPickerCloseText : m.popupCloseText || m.backText || i.params.smartSelectPopupCloseText;
                    var g = void 0 !== m.backOnSelect ? m.backOnSelect : i.params.smartSelectBackOnSelect,
                        v = m.formTheme || i.params.smartSelectFormTheme,
                        b = m.navbarTheme || i.params.smartSelectNavbarTheme,
                        w = m.toolbarTheme || i.params.smartSelectToolbarTheme,
                        C = m.virtualList,
                        y = m.virtualListHeight,
                        x = i.params.material,
                        T = m.pickerHeight || i.params.smartSelectPickerHeight,
                        k = e.find("select")[0],
                        P = o(k),
                        S = P.dataset();
                    if (!(k.disabled || e.hasClass("disabled") || P.hasClass("disabled"))) {
                        for (var M, I, O, E, D, L, B, z, N, H, A, R = [], V = (new Date).getTime(), q = k.multiple ? "checkbox" : "radio", F = q + "-" + V, Y = P.attr("maxlength"), G = k.name, j = 0; j < k.length; j++) M = o(k[j]), A = M.dataset(), O = A.optionImage || S.optionImage || m.optionImage, E = A.optionIcon || S.optionIcon || m.optionIcon, I = O || E || "checkbox" === q, x && (I = O || E), N = A.optionColor, H = A.optionClass, M[0].disabled && (H += " disabled"), D = M.parent("optgroup")[0], L = D && D.label, B = !1, D && D !== z && (B = !0, z = D, R.push({
                            groupLabel: L,
                            isLabel: B
                        })), R.push({
                            value: M[0].value,
                            text: M[0].textContent.trim(),
                            selected: M[0].selected,
                            group: D,
                            groupLabel: L,
                            image: O,
                            icon: E,
                            color: N,
                            className: H,
                            disabled: M[0].disabled,
                            inputType: q,
                            id: V,
                            hasMedia: I,
                            checkbox: "checkbox" === q,
                            inputName: F,
                            material: i.params.material
                        });
                        i._compiledTemplates.smartSelectItem || (i._compiledTemplates.smartSelectItem = l.compile(i.params.smartSelectItemTemplate || '{{#if isLabel}}<li class="item-divider">{{groupLabel}}</li>{{else}}<li{{#if className}} class="{{className}}"{{/if}}><label class="label-{{inputType}} item-content"><input type="{{inputType}}" name="{{inputName}}" value="{{value}}" {{#if selected}}checked{{/if}}>{{#if material}}{{#if hasMedia}}<div class="item-media">{{#if icon}}<i class="icon {{icon}}"></i>{{/if}}{{#if image}}<img src="{{image}}">{{/if}}</div><div class="item-inner"><div class="item-title{{#if color}} color-{{color}}{{/if}}">{{text}}</div></div><div class="item-after"><i class="icon icon-form-{{inputType}}"></i></div>{{else}}<div class="item-media"><i class="icon icon-form-{{inputType}}"></i></div><div class="item-inner"><div class="item-title{{#if color}} color-{{color}}{{/if}}">{{text}}</div></div>{{/if}}{{else}}{{#if hasMedia}}<div class="item-media">{{#if checkbox}}<i class="icon icon-form-checkbox"></i>{{/if}}{{#if icon}}<i class="icon {{icon}}"></i>{{/if}}{{#if image}}<img src="{{image}}">{{/if}}</div>{{/if}}<div class="item-inner"><div class="item-title{{#if color}} color-{{color}}{{/if}}">{{text}}</div></div>{{/if}}</label></li>{{/if}}'));
                        var W = i._compiledTemplates.smartSelectItem,
                            X = "";
                        if (!C)
                            for (var _ = 0; _ < R.length; _++) X += W(R[_]);
                        var U, J, Q = "",
                            K = "",
                            Z = "",
                            $ = "";
                        "picker" === c ? (i._compiledTemplates.smartSelectToolbar || (i._compiledTemplates.smartSelectToolbar = l.compile(i.params.smartSelectToolbarTemplate || '<div class="toolbar {{#if toolbarTheme}}theme-{{toolbarTheme}}{{/if}}"><div class="toolbar-inner"><div class="left"></div><div class="right"><a href="#" class="link close-picker"><span>{{closeText}}</span></a></div></div></div>')), Q = i._compiledTemplates.smartSelectToolbar({
                            pageTitle: f,
                            closeText: u,
                            openIn: c,
                            toolbarTheme: w,
                            inPicker: "picker" === c
                        })) : (i._compiledTemplates.smartSelectNavbar || (i._compiledTemplates.smartSelectNavbar = l.compile(i.params.smartSelectNavbarTemplate || '<div class="navbar {{#if navbarTheme}}theme-{{navbarTheme}}{{/if}}"><div class="navbar-inner">{{leftTemplate}}<div class="center sliding">{{pageTitle}}</div></div></div>')), U = i._compiledTemplates.smartSelectNavbar({
                            pageTitle: f,
                            backText: h,
                            closeText: u,
                            openIn: c,
                            navbarTheme: b,
                            inPopup: "popup" === c,
                            inPage: "page" === c,
                            leftTemplate: "popup" === c ? (i.params.smartSelectPopupCloseTemplate || (x ? '<div class="left"><a href="#" class="link close-popup icon-only"><i class="icon icon-back"></i></a></div>' : '<div class="left"><a href="#" class="link close-popup"><i class="icon icon-back"></i><span>{{closeText}}</span></a></div>')).replace(/{{closeText}}/g, u) : (i.params.smartSelectBackTemplate || (x ? '<div class="left"><a href="#" class="back link icon-only"><i class="icon icon-back"></i></a></div>' : '<div class="left sliding"><a href="#" class="back link"><i class="icon icon-back"></i><span>{{backText}}</span></a></div>')).replace(/{{backText}}/g, h)
                        }), "page" === c ? (J = "static", e.parents(".navbar-through").length > 0 && (J = "through"), e.parents(".navbar-fixed").length > 0 && (J = "fixed"), Z = e.parents(".page").hasClass("no-toolbar") ? "no-toolbar" : "", K = e.parents(".page").hasClass("no-navbar") ? "no-navbar" : "navbar-" + J, $ = e.parents(".page").hasClass("no-tabbar") ? "no-tabbar" : "") : J = "fixed");
                        var ee, ae, te = "smart-select-" + F,
                            ne = "undefined" == typeof e.data("searchbar") ? i.params.smartSelectSearchbar : "true" === e.data("searchbar") ? !0 : !1;
                        ne && (ee = e.data("searchbar-placeholder") || "Search", ae = e.data("searchbar-cancel") || "Cancel");
                        var re, ie, se = '<form class="searchbar searchbar-init" data-search-list=".smart-select-list-' + V + '" data-search-in=".item-title"><div class="searchbar-input"><input type="search" placeholder="' + ee + '"><a href="#" class="searchbar-clear"></a></div>' + (x ? "" : '<a href="#" class="searchbar-cancel">' + ae + "</a>") + '</form><div class="searchbar-overlay"></div>',
                            oe = ("picker" !== c && "through" === J ? U : "") + '<div class="pages">  <div data-page="' + te + '" data-select-name="' + G + '" class="page smart-select-page ' + K + " " + Z + " " + $ + '">' + ("picker" !== c && "fixed" === J ? U : "") + (ne ? se : "") + '    <div class="page-content">' + ("picker" !== c && "static" === J ? U : "") + '      <div class="list-block ' + (C ? "virtual-list" : "") + " smart-select-list-" + V + " " + (v ? "theme-" + v : "") + '">        <ul>' + (C ? "" : X) + "        </ul>      </div>    </div>  </div></div>";
                        "popup" === c ? (a ? (re = o(".popup.smart-select-popup .view"), re.html(oe)) : (re = i.popup('<div class="popup smart-select-popup smart-select-popup-' + F + '"><div class="view navbar-fixed">' + oe + "</div></div>"), re = o(re)), i.initPage(re.find(".page")), s(re)) : "picker" === c ? (a ? (ie = o(".picker-modal.smart-select-picker .view"), ie.html(oe)) : (ie = i.pickerModal('<div class="picker-modal smart-select-picker smart-select-picker-' + F + '"' + (T ? ' style="height:' + T + '"' : "") + ">" + Q + '<div class="picker-modal-inner"><div class="view">' + oe + "</div></div></div>"), ie = o(ie), t(), o("html").on("click", n), ie.once("close", function() {
                            e[0].f7SmartSelectPicker = void 0, o("html").off("click", n), e.parents(".page-content").css({
                                paddingBottom: ""
                            })
                        }), e[0].f7SmartSelectPicker = ie[0]), i.initPage(ie.find(".page")), s(ie)) : (o(document).once("pageInit", ".smart-select-page", p), d.router.load({
                            content: oe,
                            reload: a ? !0 : void 0
                        }))
                    }
                }
            }
        };
        var g = function(e, a) {
            var t = {
                cols: 1,
                height: i.params.material ? 48 : 44,
                cache: !0,
                dynamicHeightBufferSize: 1,
                showFilteredItemsOnly: !1
            };
            a = a || {};
            for (var n in t) "undefined" == typeof a[n] && (a[n] = t[n]);
            var r = this;
            r.listBlock = o(e), r.params = a, r.items = r.params.items, r.params.showFilteredItemsOnly && (r.filteredItems = []), r.params.template && ("string" == typeof r.params.template ? r.template = l.compile(r.params.template) : "function" == typeof r.params.template && (r.template = r.params.template)), r.pageContent = r.listBlock.parents(".page-content");
            var s;
            "undefined" != typeof r.params.updatableScroll ? s = r.params.updatableScroll : (s = !0, i.device.ios && i.device.osVersion.split(".")[0] < 8 && (s = !1)), r.ul = r.params.ul ? o(r.params.ul) : r.listBlock.children("ul"), 0 === r.ul.length && (r.listBlock.append("<ul></ul>"), r.ul = r.listBlock.children("ul")), r.domCache = {}, r.displayDomCache = {}, r.tempDomElement = document.createElement("ul"), r.lastRepaintY = null, r.fragment = document.createDocumentFragment(), r.filterItems = function(e, a) {
                r.filteredItems = [];
                for (var t = (e[0], e[e.length - 1], 0); t < e.length; t++) r.filteredItems.push(r.items[e[t]]);
                "undefined" == typeof a && (a = !0), a && (r.pageContent[0].scrollTop = 0), r.update()
            }, r.resetFilter = function() {
                r.params.showFilteredItemsOnly ? r.filteredItems = [] : (r.filteredItems = null, delete r.filteredItems), r.update()
            };
            var p, d, c, u, m, f, h = 0,
                g = "function" == typeof r.params.height;
            return r.setListSize = function() {
                var e = r.filteredItems || r.items;
                if (p = r.pageContent[0].offsetHeight, g) {
                    f = 0, r.heights = [];
                    for (var a = 0; a < e.length; a++) {
                        var t = r.params.height(e[a]);
                        f += t, r.heights.push(t)
                    }
                } else f = e.length * r.params.height / r.params.cols, d = Math.ceil(p / r.params.height), c = r.params.rowsBefore || 2 * d, u = r.params.rowsAfter || d, m = d + c + u, h = c / 2 * r.params.height;
                s && r.ul.css({
                    height: f + "px"
                })
            }, r.render = function(e, a) {
                e && (r.lastRepaintY = null);
                var t = -(r.listBlock[0].getBoundingClientRect().top - r.pageContent[0].getBoundingClientRect().top);
                if ("undefined" != typeof a && (t = a), null === r.lastRepaintY || Math.abs(t - r.lastRepaintY) > h || !s && r.pageContent[0].scrollTop + p >= r.pageContent[0].scrollHeight) {
                    r.lastRepaintY = t;
                    var n, i, o = r.filteredItems || r.items,
                        l = 0,
                        d = 0;
                    if (g) {
                        var u, f, v = 0;
                        for (h = p, u = 0; u < r.heights.length; u++) f = r.heights[u], "undefined" == typeof n && (v + f >= t - 2 * p * r.params.dynamicHeightBufferSize ? n = u : l += f), "undefined" == typeof i && ((v + f >= t + 2 * p * r.params.dynamicHeightBufferSize || u === r.heights.length - 1) && (i = u + 1), d += f), v += f;
                        i = Math.min(i, o.length)
                    } else n = (parseInt(t / r.params.height) - c) * r.params.cols, 0 > n && (n = 0), i = Math.min(n + m * r.params.cols, o.length);
                    var b;
                    r.reachEnd = !1;
                    for (var w = n; i > w; w++) {
                        var C, y;
                        y = r.items.indexOf(o[w]), w === n && (r.currentFromIndex = y), w === i - 1 && (r.currentToIndex = y), y === r.items.length - 1 && (r.reachEnd = !0), r.domCache[y] ? C = r.domCache[y] : (r.template ? r.tempDomElement.innerHTML = r.template(o[w], {
                            index: y
                        }).trim() : r.params.renderItem ? r.tempDomElement.innerHTML = r.params.renderItem(y, o[w]).trim() : r.tempDomElement.innerHTML = o[w].trim(), C = r.tempDomElement.childNodes[0], r.params.cache && (r.domCache[y] = C)), C.f7VirtualListIndex = y, w === n && (b = g ? l : w * r.params.height / r.params.cols), C.style.top = b + "px", r.params.onItemBeforeInsert && r.params.onItemBeforeInsert(r, C), r.fragment.appendChild(C)
                    }
                    s || (g ? r.ul[0].style.height = d + "px" : r.ul[0].style.height = w * r.params.height / r.params.cols + "px"), r.params.onBeforeClear && r.params.onBeforeClear(r, r.fragment), r.ul[0].innerHTML = "", r.params.onItemsBeforeInsert && r.params.onItemsBeforeInsert(r, r.fragment), r.ul[0].appendChild(r.fragment), r.params.onItemsAfterInsert && r.params.onItemsAfterInsert(r, r.fragment), "undefined" != typeof a && e && r.pageContent.scrollTop(a, 0)
                }
            }, r.scrollToItem = function(e) {
                if (e > r.items.length) return !1;
                var a, t = 0;
                if (g)
                    for (var n = 0; e > n; n++) t += r.heights[n];
                else t = e * r.params.height;
                return a = r.listBlock[0].offsetTop, r.render(!0, a + t - parseInt(r.pageContent.css("padding-top"), 10)), !0
            }, r.handleScroll = function(e) {
                r.render()
            }, r.handleResize = function(e) {
                r.setListSize(), r.render(!0)
            }, r.attachEvents = function(e) {
                var a = e ? "off" : "on";
                r.pageContent[a]("scroll", r.handleScroll), r.listBlock.parents(".tab").eq(0)[a]("show", r.handleResize), o(window)[a]("resize", r.handleResize)
            }, r.init = function() {
                r.attachEvents(), r.setListSize(), r.render()
            }, r.appendItems = function(e) {
                for (var a = 0; a < e.length; a++) r.items.push(e[a]);
                r.update()
            }, r.appendItem = function(e) {
                r.appendItems([e])
            }, r.replaceAllItems = function(e) {
                r.items = e, delete r.filteredItems, r.domCache = {}, r.update()
            }, r.replaceItem = function(e, a) {
                r.items[e] = a, r.params.cache && delete r.domCache[e], r.update()
            }, r.prependItems = function(e) {
                for (var a = e.length - 1; a >= 0; a--) r.items.unshift(e[a]);
                if (r.params.cache) {
                    var t = {};
                    for (var n in r.domCache) t[parseInt(n, 10) + e.length] = r.domCache[n];
                    r.domCache = t
                }
                r.update()
            }, r.prependItem = function(e) {
                r.prependItems([e])
            }, r.moveItem = function(e, a) {
                if (e !== a) {
                    var t = r.items.splice(e, 1)[0];
                    if (a >= r.items.length ? (r.items.push(t), a = r.items.length - 1) : r.items.splice(a, 0, t), r.params.cache) {
                        var n = {};
                        for (var i in r.domCache) {
                            var s = parseInt(i, 10),
                                o = a > e ? e : a,
                                l = a > e ? a : e,
                                p = a > e ? -1 : 1;
                            (o > s || s > l) && (n[s] = r.domCache[s]), s === o && (n[l] = r.domCache[s]), s > o && l >= s && (n[s + p] = r.domCache[s])
                        }
                        r.domCache = n
                    }
                    r.update()
                }
            }, r.insertItemBefore = function(e, a) {
                if (0 === e) return void r.prependItem(a);
                if (e >= r.items.length) return void r.appendItem(a);
                if (r.items.splice(e, 0, a), r.params.cache) {
                    var t = {};
                    for (var n in r.domCache) {
                        var i = parseInt(n, 10);
                        i >= e && (t[i + 1] = r.domCache[i])
                    }
                    r.domCache = t
                }
                r.update()
            }, r.deleteItems = function(e) {
                for (var a, t = 0, n = 0; n < e.length; n++) {
                    var i = e[n];
                    "undefined" != typeof a && i > a && (t = -n), i += t, a = e[n];
                    var s = r.items.splice(i, 1)[0];
                    if (r.filteredItems && r.filteredItems.indexOf(s) >= 0 && r.filteredItems.splice(r.filteredItems.indexOf(s), 1), r.params.cache) {
                        var o = {};
                        for (var l in r.domCache) {
                            var p = parseInt(l, 10);
                            p === i ? delete r.domCache[i] : parseInt(l, 10) > i ? o[p - 1] = r.domCache[l] : o[p] = r.domCache[l]
                        }
                        r.domCache = o
                    }
                }
                r.update()
            }, r.deleteAllItems = function() {
                r.items = [], delete r.filteredItems, r.params.cache && (r.domCache = {}), r.update()
            }, r.deleteItem = function(e) {
                r.deleteItems([e])
            }, r.clearCache = function() {
                r.domCache = {}
            }, r.update = function() {
                r.setListSize(), r.render(!0)
            }, r.destroy = function() {
                r.attachEvents(!0), delete r.items, delete r.domCache
            }, r.init(), r.listBlock[0].f7VirtualList = r, r
        };
        i.virtualList = function(e, a) {
            return new g(e, a)
        }, i.reinitVirtualList = function(e) {
            var a = o(e),
                t = a.find(".virtual-list");
            if (0 !== t.length)
                for (var n = 0; n < t.length; n++) {
                    var r = t[n].f7VirtualList;
                    r && r.update()
                }
        }, i.initPullToRefresh = function(e) {
            function a(e) {
                if (d) {
                    if ("android" !== i.device.os) return;
                    if ("targetTouches" in e && e.targetTouches.length > 1) return
                }
                h = o(this), h.hasClass("refreshing") || (c = !1, y = !1, d = !0, u = void 0, b = void 0, "touchstart" === e.type && (p = e.targetTouches[0].identifier), x.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, x.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY, f = (new Date).getTime())
            }

            function t(e) {
                if (d) {
                    var a, t, n;
                    if ("touchmove" === e.type) {
                        if (p && e.touches)
                            for (var r = 0; r < e.touches.length; r++) e.touches[r].identifier === p && (n = e.touches[r]);
                        n || (n = e.targetTouches[0]), a = n.pageX, t = n.pageY
                    } else a = e.pageX, t = e.pageY;
                    if (a && t) {
                        if ("undefined" == typeof u && (u = !!(u || Math.abs(t - x.y) > Math.abs(a - x.x))), !u) return void(d = !1);
                        if (v = h[0].scrollTop, "undefined" == typeof b && 0 !== v && (b = !0), !c) {
                            if (h.removeClass("transitioning"), v > h[0].offsetHeight) return void(d = !1);
                            C && (w = h.attr("data-ptr-distance"), w.indexOf("%") >= 0 && (w = h[0].offsetHeight * parseInt(w, 10) / 100)), P = h.hasClass("refreshing") ? w : 0, k = h[0].scrollHeight === h[0].offsetHeight || "ios" !== i.device.os ? !0 : !1
                        }
                        return c = !0, m = t - x.y, m > 0 && 0 >= v || 0 > v ? ("ios" === i.device.os && parseInt(i.device.osVersion.split(".")[0], 10) > 7 && 0 === v && !b && (k = !0), k && (e.preventDefault(), g = Math.pow(m, .85) + P, h.transform("translate3d(0," + g + "px,0)")), k && Math.pow(m, .85) > w || !k && m >= 2 * w ? (T = !0, h.addClass("pull-up").removeClass("pull-down")) : (T = !1, h.removeClass("pull-up").addClass("pull-down")), y || (h.trigger("pullstart"), y = !0), h.trigger("pullmove", {
                            event: e,
                            scrollTop: v,
                            translate: g,
                            touchesDiff: m
                        }), void 0) : (y = !1, h.removeClass("pull-up pull-down"), void(T = !1))
                    }
                }
            }

            function n(e) {
                if (!("touchend" === e.type && e.changedTouches && e.changedTouches.length > 0 && p && e.changedTouches[0].identifier !== p)) {
                    if (!d || !c) return d = !1, void(c = !1);
                    g && (h.addClass("transitioning"), g = 0), h.transform(""), T ? (h.addClass("refreshing"), h.trigger("refresh", {
                        done: function() {
                            i.pullToRefreshDone(h)
                        }
                    })) : h.removeClass("pull-down"), d = !1, c = !1, y && h.trigger("pullend")
                }
            }

            function r() {
                l.off(i.touchEvents.start, a), l.off(i.touchEvents.move, t), l.off(i.touchEvents.end, n)
            }

            function s() {
                r(), S.off("pageBeforeRemove", s)
            }
            var l = o(e);
            if (l.hasClass("pull-to-refresh-content") || (l = l.find(".pull-to-refresh-content")), l && 0 !== l.length) {
                var p, d, c, u, m, f, h, g, v, b, w, C, y, x = {},
                    T = !1,
                    k = !1,
                    P = 0,
                    S = l.hasClass("page") ? l : l.parents(".page"),
                    M = !1;
                (S.find(".navbar").length > 0 || S.parents(".navbar-fixed, .navbar-through").length > 0 || S.hasClass("navbar-fixed") || S.hasClass("navbar-through")) && (M = !0), S.hasClass("no-navbar") && (M = !1), M || l.addClass("pull-to-refresh-no-navbar"), h = l, h.attr("data-ptr-distance") ? C = !0 : w = 44, l.on(i.touchEvents.start, a), l.on(i.touchEvents.move, t), l.on(i.touchEvents.end, n), 0 !== S.length && (l[0].f7DestroyPullToRefresh = r, S.on("pageBeforeRemove", s))
            }
        }, i.pullToRefreshDone = function(e) {
            e = o(e), 0 === e.length && (e = o(".pull-to-refresh-content.refreshing")), e.removeClass("refreshing").addClass("transitioning"), e.transitionEnd(function() {
                e.removeClass("transitioning pull-up pull-down"), e.trigger("refreshdone")
            })
        }, i.pullToRefreshTrigger = function(e) {
            e = o(e), 0 === e.length && (e = o(".pull-to-refresh-content")), e.hasClass("refreshing") || (e.addClass("transitioning refreshing"), e.trigger("refresh", {
                done: function() {
                    i.pullToRefreshDone(e)
                }
            }))
        }, i.destroyPullToRefresh = function(e) {
            e = o(e);
            var a = e.hasClass("pull-to-refresh-content") ? e : e.find(".pull-to-refresh-content");
            0 !== a.length && a[0].f7DestroyPullToRefresh && a[0].f7DestroyPullToRefresh()
        }, i.attachInfiniteScroll = function(e) {
            o(e).on("scroll", n)
        }, i.detachInfiniteScroll = function(e) {
            o(e).off("scroll", n)
        }, i.initPageInfiniteScroll = function(e) {
            function a() {
                i.detachInfiniteScroll(t), e.off("pageBeforeRemove", a)
            }
            e = o(e);
            var t = e.find(".infinite-scroll");
            0 !== t.length && (i.attachInfiniteScroll(t), e.on("pageBeforeRemove", a))
        }, i.initPageScrollToolbars = function(e) {
            function a(a) {
                e.hasClass("page-on-left") || (m = t[0].scrollTop, v = t[0].scrollHeight, b = t[0].offsetHeight, w = m + b >= v - S, y = d.hasClass("navbar-hidden"), x = c.hasClass("toolbar-hidden"), T = p && p.hasClass("toolbar-hidden"), w ? i.params.showBarsOnPageScrollEnd && (C = "show") : C = u > m ? i.params.showBarsOnPageScrollTop || 44 >= m ? "show" : "hide" : m > 44 ? "hide" : "show", "show" === C ? (f && n && y && (i.showNavbar(d), e.removeClass("no-navbar-by-scroll"), y = !1), h && r && x && (i.showToolbar(c), e.removeClass("no-toolbar-by-scroll"), x = !1), g && s && T && (i.showToolbar(p), e.removeClass("no-tabbar-by-scroll"), T = !1)) : (f && n && !y && (i.hideNavbar(d), e.addClass("no-navbar-by-scroll"), y = !0), h && r && !x && (i.hideToolbar(c), e.addClass("no-toolbar-by-scroll"), x = !0), g && s && !T && (i.hideToolbar(p), e.addClass("no-tabbar-by-scroll"), T = !0)), u = m)
            }
            e = o(e);
            var t = e.find(".page-content");
            if (0 !== t.length) {
                var n = (i.params.hideNavbarOnPageScroll || t.hasClass("hide-navbar-on-scroll") || t.hasClass("hide-bars-on-scroll")) && !(t.hasClass("keep-navbar-on-scroll") || t.hasClass("keep-bars-on-scroll")),
                    r = (i.params.hideToolbarOnPageScroll || t.hasClass("hide-toolbar-on-scroll") || t.hasClass("hide-bars-on-scroll")) && !(t.hasClass("keep-toolbar-on-scroll") || t.hasClass("keep-bars-on-scroll")),
                    s = (i.params.hideTabbarOnPageScroll || t.hasClass("hide-tabbar-on-scroll")) && !t.hasClass("keep-tabbar-on-scroll");
                if (n || r || s) {
                    var l = t.parents("." + i.params.viewClass);
                    if (0 !== l.length) {
                        var p, d = l.find(".navbar"),
                            c = l.find(".toolbar");
                        s && (p = l.find(".tabbar"), 0 === p.length && (p = l.parents("." + i.params.viewsClass).find(".tabbar")));
                        var u, m, f = d.length > 0,
                            h = c.length > 0,
                            g = p && p.length > 0;
                        u = m = t[0].scrollTop;
                        var v, b, w, C, y, x, T, k = h && r ? c[0].offsetHeight : 0,
                            P = g && s ? p[0].offsetHeight : 0,
                            S = P || k;
                        t.on("scroll", a), t[0].f7ScrollToolbarsHandler = a
                    }
                }
            }
        }, i.destroyScrollToolbars = function(e) {
            e = o(e);
            var a = e.find(".page-content");
            if (0 !== a.length) {
                var t = a[0].f7ScrollToolbarsHandler;
                t && a.off("scroll", a[0].f7ScrollToolbarsHandler)
            }
        }, i.materialTabbarSetHighlight = function(e, a) {
            e = o(e), a = a || e.find(".tab-link.active");
            var t, n;
            e.hasClass("tabbar-scrollable") ? (t = a[0].offsetWidth + "px", n = (i.rtl ? -a[0].offsetLeft : a[0].offsetLeft) + "px") : (t = 1 / e.find(".tab-link").length * 100 + "%", n = 100 * (i.rtl ? -a.index() : a.index()) + "%"), e.find(".tab-link-highlight").css({
                width: t
            }).transform("translate3d(" + n + ",0,0)")
        }, i.initPageMaterialTabbar = function(e) {
            function a() {
                i.materialTabbarSetHighlight(t)
            }
            e = o(e);
            var t = o(e).find(".tabbar");
            t.length > 0 && (0 === t.find(".tab-link-highlight").length && t.find(".toolbar-inner").append('<span class="tab-link-highlight"></span>'), a(), o(window).on("resize", a), e.once("pageBeforeRemove", function() {
                o(window).off("resize", a)
            }))
        }, i.showTab = function(e, a, t) {
            var n = o(e);
            if (2 === arguments.length && "boolean" == typeof a && (t = a), 0 === n.length) return !1;
            if (n.hasClass("active")) return t && n.trigger("show"), !1;
            var r = n.parent(".tabs");
            if (0 === r.length) return !1;
            i.allowSwipeout = !0;
            var s = r.parent().hasClass("tabs-animated-wrap");
            if (s) {
                var l = 100 * (i.rtl ? n.index() : -n.index());
                r.transform("translate3d(" + l + "%,0,0)")
            }
            var p, d = r.parent().hasClass("tabs-swipeable-wrap");
            d && (p = r.parent()[0].swiper, p.activeIndex !== n.index() && p.slideTo(n.index(), void 0, !1));
            var c = r.children(".tab.active").removeClass("active");
            if (n.addClass("active"), n.trigger("show"), !s && !d && n.find(".navbar").length > 0) {
                var u;
                u = n.hasClass(i.params.viewClass) ? n[0] : n.parents("." + i.params.viewClass)[0], i.sizeNavbars(u)
            }
            if (a ? a = o(a) : (a = o("string" == typeof e ? '.tab-link[href="' + e + '"]' : '.tab-link[href="#' + n.attr("id") + '"]'), (!a || a && 0 === a.length) && o("[data-tab]").each(function() {
                    n.is(o(this).attr("data-tab")) && (a = o(this))
                })), 0 !== a.length) {
                var m;
                if (c && c.length > 0) {
                    var f = c.attr("id");
                    f && (m = o('.tab-link[href="#' + f + '"]')), (!m || m && 0 === m.length) && o("[data-tab]").each(function() {
                        c.is(o(this).attr("data-tab")) && (m = o(this))
                    })
                }
                if (a && a.length > 0 && (a.addClass("active"), i.params.material)) {
                    var h = a.parents(".tabbar");
                    h.length > 0 && (0 === h.find(".tab-link-highlight").length && h.find(".toolbar-inner").append('<span class="tab-link-highlight"></span>'), i.materialTabbarSetHighlight(h, a))
                }
                return m && m.length > 0 && m.removeClass("active"), !0
            }
        }, i.accordionToggle = function(e) {
            e = o(e), 0 !== e.length && (e.hasClass("accordion-item-expanded") ? i.accordionClose(e) : i.accordionOpen(e))
        }, i.accordionOpen = function(e) {
            e = o(e);
            var a = e.parents(".accordion-list").eq(0),
                t = e.children(".accordion-item-content");
            0 === t.length && (t = e.find(".accordion-item-content"));
            var n = a.length > 0 && e.parent().children(".accordion-item-expanded");
            n.length > 0 && i.accordionClose(n), t.css("height", t[0].scrollHeight + "px").transitionEnd(function() {
                if (e.hasClass("accordion-item-expanded")) {
                    t.transition(0), t.css("height", "auto");
                    t[0].clientLeft;
                    t.transition(""), e.trigger("opened")
                } else t.css("height", ""), e.trigger("closed")
            }), e.trigger("open"), e.addClass("accordion-item-expanded")
        }, i.accordionClose = function(e) {
            e = o(e);
            var a = e.children(".accordion-item-content");
            0 === a.length && (a = e.find(".accordion-item-content")), e.removeClass("accordion-item-expanded"), a.transition(0), a.css("height", a[0].scrollHeight + "px");
            a[0].clientLeft;
            a.transition(""), a.css("height", "").transitionEnd(function() {
                if (e.hasClass("accordion-item-expanded")) {
                    a.transition(0), a.css("height", "auto");
                    a[0].clientLeft;
                    a.transition(""), e.trigger("opened")
                } else a.css("height", ""), e.trigger("closed")
            }), e.trigger("close")
        }, i.initFastClicks = function() {
            function e(e) {
                var a, t = o(e),
                    n = t.parents(i.params.activeStateElements);
                return t.is(i.params.activeStateElements) && (a = t), n.length > 0 && (a = a ? a.add(n) : n), a ? a : t
            }

            function a(e) {
                var a = e.parents(".page-content, .panel");
                return 0 === a.length ? !1 : ("yes" !== a.prop("scrollHandlerSet") && (a.on("scroll", function() {
                    clearTimeout(R), clearTimeout(j)
                }), a.prop("scrollHandlerSet", "yes")), !0)
            }

            function t() {
                A && A.addClass("active-state")
            }

            function n(e) {
                A && (A.removeClass("active-state"), A = null)
            }

            function r(e) {
                var a = "input select textarea label".split(" ");
                return e.nodeName && a.indexOf(e.nodeName.toLowerCase()) >= 0 ? !0 : !1
            }

            function s(e) {
                var a = "button input textarea select".split(" ");
                return document.activeElement && e !== document.activeElement && document.activeElement !== document.body ? a.indexOf(e.nodeName.toLowerCase()) >= 0 ? !1 : !0 : !1
            }

            function l(e) {
                var a = o(e);
                return "input" === e.nodeName.toLowerCase() && "file" === e.type ? !1 : a.hasClass("no-fastclick") || a.parents(".no-fastclick").length > 0 ? !1 : !0
            }

            function p(e) {
                if (document.activeElement === e) return !1;
                var a = e.nodeName.toLowerCase(),
                    t = "button checkbox file image radio submit".split(" ");
                return e.disabled || e.readOnly ? !1 : "textarea" === a ? !0 : "select" === a ? i.device.android ? !1 : !0 : "input" === a && t.indexOf(e.type) < 0 ? !0 : void 0
            }

            function d(e) {
                e = o(e);
                var a = !0;
                return (e.is("label") || e.parents("label").length > 0) && (a = i.device.android ? !1 : i.device.ios && e.is("input") ? !0 : !1), a
            }

            function c(a) {
                e(a.target).addClass("active-state"), "which" in a && 3 === a.which && setTimeout(function() {
                    o(".active-state").removeClass("active-state")
                }, 0), i.params.material && i.params.materialRipple && (S = a.pageX, M = a.pageY, v(a.target, a.pageX, a.pageY))
            }

            function u(e) {
                o(".active-state").removeClass("active-state"), i.params.material && i.params.materialRipple && b()
            }

            function m(e) {
                o(".active-state").removeClass("active-state"), i.params.material && i.params.materialRipple && w()
            }

            function f(e) {
                var a = i.params.materialRippleElements,
                    t = o(e);
                if (t.is(a)) return t.hasClass("no-ripple") ? !1 : t;
                if (t.parents(a).length > 0) {
                    var n = t.parents(a).eq(0);
                    return n.hasClass("no-ripple") ? !1 : n
                }
                return !1
            }

            function h(e, a, t) {
                var n = t[0].getBoundingClientRect(),
                    r = {
                        x: e - n.left,
                        y: a - n.top
                    },
                    i = n.height,
                    s = n.width,
                    l = Math.max(Math.pow(Math.pow(i, 2) + Math.pow(s, 2), .5), 48);
                F = o('<div class="ripple-wave" style="width: ' + l + "px; height: " + l + "px; margin-top:-" + l / 2 + "px; margin-left:-" + l / 2 + "px; left:" + r.x + "px; top:" + r.y + 'px;"></div>'), t.prepend(F);
                F[0].clientLeft;
                G = "translate3d(" + (-r.x + s / 2) + "px, " + (-r.y + i / 2) + "px, 0) scale(1)", F.transform(G)
            }

            function g() {
                if (F) {
                    var e = F,
                        a = setTimeout(function() {
                            e.remove()
                        }, 400);
                    F.addClass("ripple-wave-fill").transform(G.replace("scale(1)", "scale(1.01)")).transitionEnd(function() {
                        clearTimeout(a);
                        var e = o(this).addClass("ripple-wave-out").transform(G.replace("scale(1)", "scale(1.01)"));
                        a = setTimeout(function() {
                            e.remove()
                        }, 700), setTimeout(function() {
                            e.transitionEnd(function() {
                                clearTimeout(a), o(this).remove()
                            })
                        }, 0)
                    }), F = Y = void 0
                }
            }

            function v(e, t, n) {
                return Y = f(e), Y && 0 !== Y.length ? void(a(Y) ? j = setTimeout(function() {
                    h(S, M, Y)
                }, 80) : h(S, M, Y)) : void(Y = void 0)
            }

            function b() {
                clearTimeout(j), g()
            }

            function w() {
                F ? g() : Y && !z ? (clearTimeout(j), h(S, M, Y), setTimeout(g, 0)) : g()
            }

            function C(e) {
                var a = e.changedTouches[0],
                    t = document.createEvent("MouseEvents"),
                    n = "click";
                i.device.android && "select" === O.nodeName.toLowerCase() && (n = "mousedown"), t.initMouseEvent(n, !0, !0, window, 1, a.screenX, a.screenY, a.clientX, a.clientY, !1, !1, !1, !1, 0, null), t.forwardedTouchEvent = !0, O.dispatchEvent(t)
            }

            function y(r) {
                if (z = !1, N = !1, r.targetTouches.length > 1) return A && n(), !0;
                if (r.touches.length > 1 && A && n(), i.params.tapHold && (H && clearTimeout(H), H = setTimeout(function() {
                        r && r.touches && r.touches.length > 1 || (N = !0, r.preventDefault(), o(r.target).trigger("taphold"))
                    }, i.params.tapHoldDelay)), q && clearTimeout(q), V = l(r.target), !V) return E = !1, !0;
                if (i.device.ios) {
                    var p = window.getSelection();
                    if (p.rangeCount && p.focusNode !== document.body && (!p.isCollapsed || document.activeElement === p.focusNode)) return D = !0, !0;
                    D = !1
                }
                i.device.android && s(r.target) && document.activeElement.blur(), E = !0, O = r.target, I = (new Date).getTime(), S = r.targetTouches[0].pageX, M = r.targetTouches[0].pageY, i.device.ios && (L = void 0, o(O).parents().each(function() {
                    var e = this;
                    e.scrollHeight > e.offsetHeight && !L && (L = e, L.f7ScrollTop = L.scrollTop)
                })), r.timeStamp - B < i.params.fastClicksDelayBetweenClicks && r.preventDefault(), i.params.activeState && (A = e(O), a(A) ? R = setTimeout(t, 80) : t()), i.params.material && i.params.materialRipple && v(O, S, M)
            }

            function x(e) {
                if (E) {
                    var a = !1,
                        t = i.params.fastClicksDistanceThreshold;
                    if (t) {
                        var r = e.targetTouches[0].pageX,
                            s = e.targetTouches[0].pageY;
                        (Math.abs(r - S) > t || Math.abs(s - M) > t) && (a = !0)
                    } else a = !0;
                    a && (E = !1, O = null, z = !0, i.params.tapHold && clearTimeout(H), i.params.activeState && (clearTimeout(R), n()), i.params.material && i.params.materialRipple && b())
                }
            }

            function T(e) {
                if (clearTimeout(R), clearTimeout(H), !E) return !D && V && (!i.device.android || e.cancelable) && e.preventDefault(), !0;
                if (document.activeElement === e.target) return i.params.activeState && n(), i.params.material && i.params.materialRipple && w(), !0;
                if (D || e.preventDefault(), e.timeStamp - B < i.params.fastClicksDelayBetweenClicks) return setTimeout(n, 0), !0;
                if (B = e.timeStamp, E = !1, i.device.ios && L && L.scrollTop !== L.f7ScrollTop) return !1;
                if (i.params.activeState && (t(), setTimeout(n, 0)), i.params.material && i.params.materialRipple && w(), p(O)) {
                    if (i.device.ios && i.device.webView) return event.timeStamp - I > 159 ? (O = null, !1) : (O.focus(), !1);
                    O.focus()
                }
                return document.activeElement && O !== document.activeElement && document.activeElement !== document.body && "label" !== O.nodeName.toLowerCase() && document.activeElement.blur(), e.preventDefault(), C(e), !1
            }

            function k(e) {
                E = !1, O = null, clearTimeout(R), clearTimeout(H), i.params.activeState && n(), i.params.material && i.params.materialRipple && w()
            }

            function P(e) {
                var a = !1;
                return E ? (O = null, E = !1, !0) : "submit" === e.target.type && 0 === e.detail ? !0 : (O || r(e.target) || (a = !0), V || (a = !0), document.activeElement === O && (a = !0), e.forwardedTouchEvent && (a = !0), e.cancelable || (a = !0), i.params.tapHold && i.params.tapHoldPreventClicks && N && (a = !1), a || (e.stopImmediatePropagation(), e.stopPropagation(), O ? (d(O) || z) && e.preventDefault() : e.preventDefault(), O = null), q = setTimeout(function() {
                    V = !1
                }, i.device.ios || i.device.androidChrome ? 100 : 400), i.params.tapHold && (H = setTimeout(function() {
                    N = !1
                }, i.device.ios || i.device.androidChrome ? 100 : 400)), a)
            }
            i.params.activeState && o("html").addClass("watch-active-state"), i.device.ios && i.device.webView && window.addEventListener("touchstart", function() {});
            var S, M, I, O, E, D, L, B, z, N, H, A, R, V, q, F, Y, G, j;
            i.support.touch ? (document.addEventListener("click", P, !0), document.addEventListener("touchstart", y), document.addEventListener("touchmove", x), document.addEventListener("touchend", T), document.addEventListener("touchcancel", k)) : i.params.activeState && (document.addEventListener("mousedown", c), document.addEventListener("mousemove", u), document.addEventListener("mouseup", m)), i.params.material && i.params.materialRipple && document.addEventListener("contextmenu", function(e) {
                A && n(), w()
            })
        }, i.initClickEvents = function() {
            function e(e) {
                var a = o(this),
                    t = o(e.target),
                    n = "a" === a[0].nodeName.toLowerCase() || a.parents("a").length > 0 || "a" === t[0].nodeName.toLowerCase() || t.parents("a").length > 0;
                if (!n) {
                    var r;
                    if (i.params.scrollTopOnNavbarClick && a.is(".navbar .center")) {
                        var s = a.parents(".navbar");
                        r = s.parents(".page-content"), 0 === r.length && (s.parents(".page").length > 0 && (r = s.parents(".page").find(".page-content")), 0 === r.length && s.nextAll(".pages").length > 0 && (r = s.nextAll(".pages").find(".page:not(.page-on-left):not(.page-on-right):not(.cached)").find(".page-content")))
                    }
                    i.params.scrollTopOnStatusbarClick && a.is(".statusbar-overlay") && (r = o(".popup.modal-in").length > 0 ? o(".popup.modal-in").find(".page:not(.page-on-left):not(.page-on-right):not(.cached)").find(".page-content") : o(".panel.active").length > 0 ? o(".panel.active").find(".page:not(.page-on-left):not(.page-on-right):not(.cached)").find(".page-content") : o(".views > .view.active").length > 0 ? o(".views > .view.active").find(".page:not(.page-on-left):not(.page-on-right):not(.cached)").find(".page-content") : o(".views").find(".page:not(.page-on-left):not(.page-on-right):not(.cached)").find(".page-content")), r && r.length > 0 && (r.hasClass("tab") && (r = r.parent(".tabs").children(".page-content.active")), r.length > 0 && r.scrollTop(0, 300))
                }
            }

            function a(e) {
                var a = o(this),
                    t = a.attr("href"),
                    n = "a" === a[0].nodeName.toLowerCase();
                if (n && (a.is(i.params.externalLinks) || t && t.indexOf("javascript:") >= 0)) return void(t && "_system" === a.attr("target") && (e.preventDefault(), window.open(t, "_system")));
                var r = a.dataset();
                if (a.hasClass("smart-select") && i.smartSelectOpen && i.smartSelectOpen(a), a.hasClass("open-panel") && (1 === o(".panel").length ? o(".panel").hasClass("panel-left") ? i.openPanel("left") : i.openPanel("right") : "right" === r.panel ? i.openPanel("right") : i.openPanel("left")), a.hasClass("close-panel") && i.closePanel(), a.hasClass("panel-overlay") && i.params.panelsCloseByOutside && i.closePanel(), a.hasClass("open-popover")) {
                    var s;
                    s = r.popover ? r.popover : ".popover", i.popover(s, a)
                }
                a.hasClass("close-popover") && i.closeModal(".popover.modal-in");
                var d;
                a.hasClass("open-popup") && (d = r.popup ? r.popup : ".popup", i.popup(d)), a.hasClass("close-popup") && (d = r.popup ? r.popup : ".popup.modal-in", i.closeModal(d));
                var c;
                if (a.hasClass("open-login-screen") && (c = r.loginScreen ? r.loginScreen : ".login-screen", i.loginScreen(c)), a.hasClass("close-login-screen") && i.closeModal(".login-screen.modal-in"), a.hasClass("modal-overlay") && (o(".modal.modal-in").length > 0 && i.params.modalCloseByOutside && i.closeModal(".modal.modal-in"), o(".actions-modal.modal-in").length > 0 && i.params.actionsCloseByOutside && i.closeModal(".actions-modal.modal-in"), o(".popover.modal-in").length > 0 && i.closeModal(".popover.modal-in")), a.hasClass("popup-overlay") && o(".popup.modal-in").length > 0 && i.params.popupCloseByOutside && i.closeModal(".popup.modal-in"), a.hasClass("picker-modal-overlay") && o(".picker-modal.modal-in").length > 0 && i.closeModal(".picker-modal.modal-in"), a.hasClass("close-picker")) {
                    var u = o(".picker-modal.modal-in");
                    u.length > 0 ? i.closeModal(u) : (u = o(".popover.modal-in .picker-modal"), u.length > 0 && i.closeModal(u.parents(".popover")))
                }
                if (a.hasClass("open-picker")) {
                    var m;
                    m = r.picker ? r.picker : ".picker-modal", i.pickerModal(m, a)
                }
                var f;
                if (a.hasClass("tab-link") && (f = !0, i.showTab(r.tab || a.attr("href"), a)), a.hasClass("swipeout-close") && i.swipeoutClose(a.parents(".swipeout-opened")), a.hasClass("swipeout-delete"))
                    if (r.confirm) {
                        var h = r.confirm,
                            g = r.confirmTitle;
                        g ? i.confirm(h, g, function() {
                            i.swipeoutDelete(a.parents(".swipeout"))
                        }, function() {
                            r.closeOnCancel && i.swipeoutClose(a.parents(".swipeout"))
                        }) : i.confirm(h, function() {
                            i.swipeoutDelete(a.parents(".swipeout"))
                        }, function() {
                            r.closeOnCancel && i.swipeoutClose(a.parents(".swipeout"))
                        })
                    } else i.swipeoutDelete(a.parents(".swipeout"));
                if (a.hasClass("toggle-sortable") && i.sortableToggle(r.sortable), a.hasClass("open-sortable") && i.sortableOpen(r.sortable), a.hasClass("close-sortable") && i.sortableClose(r.sortable), a.hasClass("accordion-item-toggle") || a.hasClass("item-link") && a.parent().hasClass("accordion-item")) {
                    var v = a.parent(".accordion-item");
                    0 === v.length && (v = a.parents(".accordion-item")), 0 === v.length && (v = a.parents("li")), i.accordionToggle(v)
                }
                if (i.params.material && (a.hasClass("floating-button") && a.parent().hasClass("speed-dial") && a.parent().toggleClass("speed-dial-opened"), a.hasClass("close-speed-dial") && o(".speed-dial-opened").removeClass("speed-dial-opened")), (!i.params.ajaxLinks || a.is(i.params.ajaxLinks)) && n && i.params.router) {
                    n && e.preventDefault();
                    var b = t && t.length > 0 && "#" !== t && !f,
                        w = r.template;
                    if (b || a.hasClass("back") || w) {
                        var C;
                        if (r.view ? C = o(r.view)[0].f7View : (C = a.parents("." + i.params.viewClass)[0] && a.parents("." + i.params.viewClass)[0].f7View, C && C.params.linksView && ("string" == typeof C.params.linksView ? C = o(C.params.linksView)[0].f7View : C.params.linksView instanceof p && (C = C.params.linksView))), C || i.mainView && (C = i.mainView), !C) return;
                        var y;
                        if (w) t = void 0;
                        else {
                            if (0 === t.indexOf("#") && "#" !== t) {
                                if (!C.params.domCache) return;
                                y = t.split("#")[1]
                            }
                            if ("#" === t && !a.hasClass("back")) return
                        }
                        var x;
                        "undefined" != typeof r.animatePages ? x = r.animatePages : (a.hasClass("with-animation") && (x = !0), a.hasClass("no-animation") && (x = !1));
                        var T = {
                            animatePages: x,
                            ignoreCache: r.ignoreCache,
                            force: r.force,
                            reload: r.reload,
                            reloadPrevious: r.reloadPrevious,
                            pageName: y,
                            pushState: r.pushState,
                            url: t
                        };
                        if (i.params.template7Pages) {
                            T.contextName = r.contextName;
                            var k = r.context;
                            k && (T.context = JSON.parse(k))
                        }
                        w && w in l.templates && (T.template = l.templates[w]), a.hasClass("back") ? C.router.back(T) : C.router.load(T)
                    }
                }
            }

            function t(e) {
                e.preventDefault()
            }
            o(document).on("click", "a, .open-panel, .close-panel, .panel-overlay, .modal-overlay, .popup-overlay, .swipeout-delete, .swipeout-close, .close-popup, .open-popup, .open-popover, .open-login-screen, .close-login-screen .smart-select, .toggle-sortable, .open-sortable, .close-sortable, .accordion-item-toggle, .close-picker, .picker-modal-overlay", a), (i.params.scrollTopOnNavbarClick || i.params.scrollTopOnStatusbarClick) && o(document).on("click", ".statusbar-overlay, .navbar .center", e),
                i.support.touch && !i.device.android && o(document).on(i.params.fastClicks ? "touchstart" : "touchmove", ".panel-overlay, .modal-overlay, .preloader-indicator-overlay, .popup-overlay, .searchbar-overlay", t)
        }, i.initResize = function() {
            o(window).on("resize", i.resize), o(window).on("orientationchange", i.orientationchange)
        }, i.resize = function() {
            i.sizeNavbars && i.sizeNavbars(), r()
        }, i.orientationchange = function() {
            i.device && i.device.minimalUi && (90 === window.orientation || -90 === window.orientation) && (document.body.scrollTop = 0), r()
        }, i.formsData = {}, i.formStoreData = function(e, a) {
            i.formsData[e] = a, i.ls["f7form-" + e] = JSON.stringify(a)
        }, i.formDeleteData = function(e) {
            i.formsData[e] && (i.formsData[e] = "", delete i.formsData[e]), i.ls["f7form-" + e] && (i.ls["f7form-" + e] = "", i.ls.removeItem("f7form-" + e))
        }, i.formGetData = function(e) {
            return i.ls["f7form-" + e] ? JSON.parse(i.ls["f7form-" + e]) : i.formsData[e] ? i.formsData[e] : void 0
        }, i.formToJSON = function(e) {
            if (e = o(e), 1 !== e.length) return !1;
            var a = {},
                t = ["submit", "image", "button", "file"],
                n = [];
            return e.find("input, select, textarea").each(function() {
                var r = o(this),
                    i = r.attr("name"),
                    s = r.attr("type"),
                    l = this.nodeName.toLowerCase();
                if (!(t.indexOf(s) >= 0) && !(n.indexOf(i) >= 0) && i)
                    if ("select" === l && r.prop("multiple")) n.push(i), a[i] = [], e.find('select[name="' + i + '"] option').each(function() {
                        this.selected && a[i].push(this.value)
                    });
                    else switch (s) {
                        case "checkbox":
                            n.push(i), a[i] = [], e.find('input[name="' + i + '"]').each(function() {
                                this.checked && a[i].push(this.value)
                            });
                            break;
                        case "radio":
                            n.push(i), e.find('input[name="' + i + '"]').each(function() {
                                this.checked && (a[i] = this.value)
                            });
                            break;
                        default:
                            a[i] = r.val()
                    }
            }), e.trigger("formToJSON", {
                formData: a
            }), a
        }, i.formFromJSON = function(e, a) {
            if (e = o(e), 1 !== e.length) return !1;
            var t = ["submit", "image", "button", "file"],
                n = [];
            e.find("input, select, textarea").each(function() {
                var r = o(this),
                    i = r.attr("name"),
                    s = r.attr("type"),
                    l = this.nodeName.toLowerCase();
                if (a[i] && !(t.indexOf(s) >= 0) && !(n.indexOf(i) >= 0) && i)
                    if ("select" === l && r.prop("multiple")) n.push(i), e.find('select[name="' + i + '"] option').each(function() {
                        a[i].indexOf(this.value) >= 0 ? this.selected = !0 : this.selected = !1
                    });
                    else switch (s) {
                        case "checkbox":
                            n.push(i), e.find('input[name="' + i + '"]').each(function() {
                                a[i].indexOf(this.value) >= 0 ? this.checked = !0 : this.checked = !1
                            });
                            break;
                        case "radio":
                            n.push(i), e.find('input[name="' + i + '"]').each(function() {
                                a[i] === this.value ? this.checked = !0 : this.checked = !1
                            });
                            break;
                        default:
                            r.val(a[i])
                    }
            }), e.trigger("formFromJSON", {
                formData: a
            })
        }, i.initFormsStorage = function(e) {
            function a() {
                var e = o(this),
                    a = e[0].id;
                if (a) {
                    var t = i.formToJSON(e);
                    t && (i.formStoreData(a, t), e.trigger("store", {
                        data: t
                    }))
                }
            }

            function t() {
                n.off("change submit", a), e.off("pageBeforeRemove", t)
            }
            e = o(e);
            var n = e.find("form.store-data");
            0 !== n.length && (n.each(function() {
                var e = this.getAttribute("id");
                if (e) {
                    var a = i.formGetData(e);
                    a && i.formFromJSON(this, a)
                }
            }), n.on("change submit", a), e.on("pageBeforeRemove", t))
        }, o(document).on("submit change", "form.ajax-submit, form.ajax-submit-onchange", function(e) {
            var a = o(this);
            if ("change" !== e.type || a.hasClass("ajax-submit-onchange")) {
                "submit" === e.type && e.preventDefault();
                var t = a.attr("method") || "GET",
                    n = a.prop("enctype") || a.attr("enctype"),
                    r = a.attr("action");
                if (r) {
                    var s;
                    s = "POST" === t ? new FormData(a[0]) : o.serializeObject(i.formToJSON(a[0]));
                    var l = o.ajax({
                        method: t,
                        url: r,
                        contentType: n,
                        data: s,
                        beforeSend: function(e) {
                            a.trigger("beforeSubmit", {
                                data: s,
                                xhr: e
                            })
                        },
                        error: function(e) {
                            a.trigger("submitError", {
                                data: s,
                                xhr: e
                            })
                        },
                        success: function(e) {
                            a.trigger("submitted", {
                                data: e,
                                xhr: l
                            })
                        }
                    })
                }
            }
        }), i.resizeTextarea = function(e) {
            if (e = o(e), e.hasClass("resizable")) {
                e.css({
                    height: ""
                });
                var a = e[0].offsetHeight,
                    t = a - e[0].clientHeight,
                    n = e[0].scrollHeight;
                if (n + t > a) {
                    var r = n + t;
                    e.css("height", r + "px")
                }
            }
        }, i.resizableTextarea = function(e) {
            function a() {
                clearTimeout(t), t = setTimeout(function() {
                    i.resizeTextarea(e)
                }, 0)
            }
            if (e = o(e), 0 !== e.length) {
                var t;
                return e[0].f7DestroyResizableTextarea = function() {
                    e.off("change keydown keypress keyup paste cut", a)
                }, e.on("change keydown keypress keyup paste cut", a)
            }
        }, i.destroyResizableTextarea = function(e) {
            e = o(e), e.length > 0 && e.is("textarea") && e[0].f7DestroyResizableTextarea ? e[0].f7DestroyResizableTextarea() : e.length > 0 && e.find("textarea.resiable").each(function() {
                var e = this;
                e.f7DestroyResizableTextarea && e.f7DestroyResizableTextarea()
            })
        }, i.initPageResizableTextarea = function(e) {
            e = o(e);
            var a = e.find("textarea.resizable");
            a.each(function() {
                i.resizableTextarea(this)
            })
        }, i.initPageMaterialInputs = function(e) {
            e = o(e);
            e.find("textarea.resizable");
            e.find(".item-input").each(function() {
                var e = o(this),
                    a = ["checkbox", "button", "submit", "range", "radio", "image"];
                e.find("input, select, textarea").each(function() {
                    var t = o(this);
                    a.indexOf(t.attr("type")) < 0 && (e.addClass("item-input-field"), "" !== t.val().trim() && t.parents(".item-input, .input-field").add(t.parents(".item-inner")).addClass("not-empty-state"))
                }), e.parents(".input-item, .inputs-list").length > 0 || e.parents(".list-block").eq(0).addClass("inputs-list")
            })
        }, i.initMaterialWatchInputs = function() {
            function e(e) {
                var a = o(this),
                    t = a.attr("type");
                if (!(n.indexOf(t) >= 0)) {
                    var r = a.add(a.parents(".item-input, .input-field")).add(a.parents(".item-inner").eq(0));
                    r.addClass("focus-state")
                }
            }

            function a(e) {
                var a = o(this),
                    t = a.val(),
                    r = a.attr("type");
                if (!(n.indexOf(r) >= 0)) {
                    var i = a.add(a.parents(".item-input, .input-field")).add(a.parents(".item-inner").eq(0));
                    i.removeClass("focus-state"), t && "" !== t.trim() ? i.addClass("not-empty-state") : i.removeClass("not-empty-state")
                }
            }

            function t(e) {
                var a = o(this),
                    t = a.val(),
                    r = a.attr("type");
                if (!(n.indexOf(r) >= 0)) {
                    var i = a.add(a.parents(".item-input, .input-field")).add(a.parents(".item-inner").eq(0));
                    t && "" !== t.trim() ? i.addClass("not-empty-state") : i.removeClass("not-empty-state")
                }
            }
            var n = ["checkbox", "button", "submit", "range", "radio", "image"];
            o(document).on("change", ".item-input input, .item-input select, .item-input textarea, input, textarea, select", t, !0), o(document).on("focus", ".item-input input, .item-input select, .item-input textarea, input, textarea, select", e, !0), o(document).on("blur", ".item-input input, .item-input select, .item-input textarea, input, textarea, select", a, !0)
        }, i.pushStateQueue = [], i.pushStateClearQueue = function() {
            if (0 !== i.pushStateQueue.length) {
                var e, a = i.pushStateQueue.pop();
                i.params.pushStateNoAnimation === !0 && (e = !1), "back" === a.action && i.router.back(a.view, {
                    animatePages: e
                }), "loadPage" === a.action && i.router.load(a.view, {
                    url: a.stateUrl,
                    animatePages: e,
                    pushState: !1
                }), "loadContent" === a.action && i.router.load(a.view, {
                    content: a.stateContent,
                    animatePages: e,
                    pushState: !1
                }), "loadPageName" === a.action && i.router.load(a.view, {
                    pageName: a.statePageName,
                    url: a.stateUrl,
                    animatePages: e,
                    pushState: !1
                })
            }
        }, i.initPushState = function() {
            function e(e) {
                if (!a) {
                    var t = i.mainView;
                    if (t) {
                        var n = e.state;
                        if (n || (n = {
                                viewIndex: i.views.indexOf(t),
                                url: t.history[0]
                            }), !(n.viewIndex < 0)) {
                            var r, s = i.views[n.viewIndex],
                                o = n && n.url || void 0,
                                l = n && n.content || void 0,
                                p = n && n.pageName || void 0;
                            i.params.pushStateNoAnimation === !0 && (r = !1), o !== s.url && (s.history.indexOf(o) >= 0 ? s.allowPageChange ? i.router.back(s, {
                                url: void 0,
                                animatePages: r,
                                pushState: !1,
                                preloadOnly: !1
                            }) : i.pushStateQueue.push({
                                action: "back",
                                view: s
                            }) : l ? s.allowPageChange ? i.router.load(s, {
                                content: l,
                                animatePages: r,
                                pushState: !1
                            }) : i.pushStateQueue.unshift({
                                action: "loadContent",
                                stateContent: l,
                                view: s
                            }) : p ? s.allowPageChange ? i.router.load(s, {
                                pageName: p,
                                url: o,
                                animatePages: r,
                                pushState: !1
                            }) : i.pushStateQueue.unshift({
                                action: "loadPageName",
                                statePageName: p,
                                view: s
                            }) : s.allowPageChange ? i.router.load(s, {
                                url: o,
                                animatePages: r,
                                pushState: !1
                            }) : i.pushStateQueue.unshift({
                                action: "loadPage",
                                stateUrl: o,
                                view: s
                            }))
                        }
                    }
                }
            }
            var a = !0;
            o(window).on("load", function() {
                setTimeout(function() {
                    a = !1
                }, 0)
            }), document.readyState && "complete" === document.readyState && (a = !1), o(window).on("popstate", e)
        }, i.swiper = function(e, a) {
            return new Swiper(e, a)
        }, i.initPageSwiper = function(e) {
            function a(a) {
                function t() {
                    a.destroy(), e.off("pageBeforeRemove", t)
                }
                e.on("pageBeforeRemove", t)
            }
            e = o(e);
            var t = e.find(".swiper-init, .tabs-swipeable-wrap");
            0 !== t.length && t.each(function() {
                var e = o(this);
                e.hasClass("tabs-swipeable-wrap") && e.addClass("swiper-container").children(".tabs").addClass("swiper-wrapper").children(".tab").addClass("swiper-slide");
                var t;
                t = e.data("swiper") ? JSON.parse(e.data("swiper")) : e.dataset(), e.hasClass("tabs-swipeable-wrap") && (t.onSlideChangeStart = function(e) {
                    i.showTab(e.slides.eq(e.activeIndex))
                });
                var n = i.swiper(e[0], t);
                a(n)
            })
        }, i.reinitPageSwiper = function(e) {
            e = o(e);
            var a = e.find(".swiper-init, .tabs-swipeable-wrap");
            if (0 !== a.length)
                for (var t = 0; t < a.length; t++) {
                    var n = a[0].swiper;
                    n && n.update(!0)
                }
        };
        var v = function(e) {
            var a = this,
                t = {
                    photos: [],
                    initialSlide: 0,
                    spaceBetween: 20,
                    speed: 300,
                    zoom: !0,
                    maxZoom: 3,
                    minZoom: 1,
                    exposition: !0,
                    expositionHideCaptions: !1,
                    type: "standalone",
                    navbar: !0,
                    toolbar: !0,
                    theme: "light",
                    swipeToClose: !0,
                    backLinkText: "Close",
                    ofText: "of",
                    loop: !1,
                    lazyLoading: !1,
                    lazyLoadingInPrevNext: !1,
                    lazyLoadingOnTransitionStart: !1,
                    material: i.params.material,
                    materialPreloaderSvg: i.params.materialPreloaderSvg,
                    materialPreloaderHtml: i.params.materialPreloaderHtml
                };
            e = e || {}, !e.backLinkText && i.params.material && (t.backLinkText = "");
            for (var n in t) "undefined" == typeof e[n] && (e[n] = t[n]);
            a.params = e, a.params.iconsColorClass = a.params.iconsColor ? "color-" + a.params.iconsColor : "dark" === a.params.theme ? "color-white" : "", a.params.preloaderColorClass = "dark" === a.params.theme ? "preloader-white" : "";
            var r = a.params.photoTemplate || '<div class="photo-browser-slide swiper-slide"><span class="photo-browser-zoom-container"><img src="{{js "this.url || this"}}"></span></div>',
                s = a.params.lazyPhotoTemplate || '<div class="photo-browser-slide photo-browser-slide-lazy swiper-slide"><div class="preloader {{@root.preloaderColorClass}}">{{#if @root.material}}{{@root.materialPreloaderHtml}}{{/if}}</div><span class="photo-browser-zoom-container"><img data-src="{{js "this.url || this"}}" class="swiper-lazy"></span></div>',
                p = a.params.objectTemplate || '<div class="photo-browser-slide photo-browser-object-slide swiper-slide">{{js "this.html || this"}}</div>',
                d = a.params.captionTemplate || '<div class="photo-browser-caption" data-caption-index="{{@index}}">{{caption}}</div>',
                c = a.params.navbarTemplate || '<div class="navbar"><div class="navbar-inner"><div class="left sliding"><a href="#" class="link close-popup photo-browser-close-link {{#unless backLinkText}}icon-only{{/unless}} {{js "this.type === \'page\' ? \'back\' : \'\'"}}"><i class="icon icon-back {{iconsColorClass}}"></i>{{#if backLinkText}}<span>{{backLinkText}}</span>{{/if}}</a></div><div class="center sliding"><span class="photo-browser-current"></span> <span class="photo-browser-of">{{ofText}}</span> <span class="photo-browser-total"></span></div><div class="right"></div></div></div>',
                u = a.params.toolbarTemplate || '<div class="toolbar tabbar"><div class="toolbar-inner"><a href="#" class="link photo-browser-prev"><i class="icon icon-prev {{iconsColorClass}}"></i></a><a href="#" class="link photo-browser-next"><i class="icon icon-next {{iconsColorClass}}"></i></a></div></div>',
                m = l.compile('<div class="photo-browser photo-browser-{{theme}}"><div class="view navbar-fixed toolbar-fixed">{{#unless material}}{{#if navbar}}' + c + '{{/if}}{{/unless}}<div class="page no-toolbar {{#unless navbar}}no-navbar{{/unless}} toolbar-fixed navbar-fixed" data-page="photo-browser-slides">{{#if material}}{{#if navbar}}' + c + "{{/if}}{{/if}}{{#if toolbar}}" + u + '{{/if}}<div class="photo-browser-captions photo-browser-captions-{{js "this.captionsTheme || this.theme"}}">{{#each photos}}{{#if caption}}' + d + "{{/if}}{{/each}}</div><div class=\"photo-browser-swiper-container swiper-container\"><div class=\"photo-browser-swiper-wrapper swiper-wrapper\">{{#each photos}}{{#js_compare \"this.html || ((typeof this === 'string' || this instanceof String) && (this.indexOf('<') >= 0 || this.indexOf('>') >= 0))\"}}" + p + "{{else}}{{#if @root.lazyLoading}}" + s + "{{else}}" + r + "{{/if}}{{/js_compare}}{{/each}}</div></div></div></div></div>")(a.params);
            a.activeIndex = a.params.initialSlide, a.openIndex = a.activeIndex, a.opened = !1, a.open = function(e) {
                return "undefined" == typeof e && (e = a.activeIndex), e = parseInt(e, 10), a.opened && a.swiper ? void a.swiper.slideTo(e) : (a.opened = !0, a.openIndex = e, "standalone" === a.params.type && o("body").append(m), "popup" === a.params.type && (a.popup = i.popup('<div class="popup photo-browser-popup">' + m + "</div>"), o(a.popup).on("closed", a.onPopupClose)), "page" === a.params.type ? (o(document).on("pageBeforeInit", a.onPageBeforeInit), o(document).on("pageBeforeRemove", a.onPageBeforeRemove), a.params.view || (a.params.view = i.mainView), void a.params.view.loadContent(m)) : (a.layout(a.openIndex), void(a.params.onOpen && a.params.onOpen(a))))
            }, a.close = function() {
                a.opened = !1, a.swiperContainer && 0 !== a.swiperContainer.length && (a.params.onClose && a.params.onClose(a), a.attachEvents(!0), "standalone" === a.params.type && a.container.removeClass("photo-browser-in").addClass("photo-browser-out").animationEnd(function() {
                    a.container.remove()
                }), a.swiper.destroy(), a.swiper = a.swiperContainer = a.swiperWrapper = a.slides = f = h = g = void 0)
            }, a.onPopupClose = function(e) {
                a.close(), o(a.popup).off("pageBeforeInit", a.onPopupClose)
            }, a.onPageBeforeInit = function(e) {
                "photo-browser-slides" === e.detail.page.name && a.layout(a.openIndex), o(document).off("pageBeforeInit", a.onPageBeforeInit)
            }, a.onPageBeforeRemove = function(e) {
                "photo-browser-slides" === e.detail.page.name && a.close(), o(document).off("pageBeforeRemove", a.onPageBeforeRemove)
            }, a.onSliderTransitionStart = function(e) {
                a.activeIndex = e.activeIndex;
                var t = e.activeIndex + 1,
                    n = e.slides.length;
                if (a.params.loop && (n -= 2, t -= e.loopedSlides, 1 > t && (t = n + t), t > n && (t -= n)), a.container.find(".photo-browser-current").text(t), a.container.find(".photo-browser-total").text(n), o(".photo-browser-prev, .photo-browser-next").removeClass("photo-browser-link-inactive"), e.isBeginning && !a.params.loop && o(".photo-browser-prev").addClass("photo-browser-link-inactive"), e.isEnd && !a.params.loop && o(".photo-browser-next").addClass("photo-browser-link-inactive"), a.captions.length > 0) {
                    a.captionsContainer.find(".photo-browser-caption-active").removeClass("photo-browser-caption-active");
                    var r = a.params.loop ? e.slides.eq(e.activeIndex).attr("data-swiper-slide-index") : a.activeIndex;
                    a.captionsContainer.find('[data-caption-index="' + r + '"]').addClass("photo-browser-caption-active")
                }
                var i = e.slides.eq(e.previousIndex).find("video");
                i.length > 0 && "pause" in i[0] && i[0].pause(), a.params.onTransitionStart && a.params.onTransitionStart(e)
            }, a.onSliderTransitionEnd = function(e) {
                a.params.zoom && f && e.previousIndex !== e.activeIndex && (h.transform("translate3d(0,0,0) scale(1)"), g.transform("translate3d(0,0,0)"), f = h = g = void 0, v = b = 1), a.params.onTransitionEnd && a.params.onTransitionEnd(e)
            }, a.layout = function(e) {
                "page" === a.params.type ? a.container = o(".photo-browser-swiper-container").parents(".view") : a.container = o(".photo-browser"), "standalone" === a.params.type && (a.container.addClass("photo-browser-in"), i.sizeNavbars(a.container)), a.swiperContainer = a.container.find(".photo-browser-swiper-container"), a.swiperWrapper = a.container.find(".photo-browser-swiper-wrapper"), a.slides = a.container.find(".photo-browser-slide"), a.captionsContainer = a.container.find(".photo-browser-captions"), a.captions = a.container.find(".photo-browser-caption");
                var t = {
                    nextButton: a.params.nextButton || ".photo-browser-next",
                    prevButton: a.params.prevButton || ".photo-browser-prev",
                    indexButton: a.params.indexButton,
                    initialSlide: e,
                    spaceBetween: a.params.spaceBetween,
                    speed: a.params.speed,
                    loop: a.params.loop,
                    lazyLoading: a.params.lazyLoading,
                    lazyLoadingInPrevNext: a.params.lazyLoadingInPrevNext,
                    lazyLoadingOnTransitionStart: a.params.lazyLoadingOnTransitionStart,
                    preloadImages: a.params.lazyLoading ? !1 : !0,
                    onTap: function(e, t) {
                        a.params.onTap && a.params.onTap(e, t)
                    },
                    onClick: function(e, t) {
                        a.params.exposition && a.toggleExposition(), a.params.onClick && a.params.onClick(e, t)
                    },
                    onDoubleTap: function(e, t) {
                        a.toggleZoom(t), a.params.onDoubleTap && a.params.onDoubleTap(e, t)
                    },
                    onTransitionStart: function(e) {
                        a.onSliderTransitionStart(e)
                    },
                    onTransitionEnd: function(e) {
                        a.onSliderTransitionEnd(e)
                    },
                    onSlideChangeStart: a.params.onSlideChangeStart,
                    onSlideChangeEnd: a.params.onSlideChangeEnd,
                    onLazyImageLoad: function(e, t, n) {
                        a.params.onLazyImageLoad && a.params.onLazyImageLoad(a, t, n)
                    },
                    onLazyImageReady: function(e, t, n) {
                        o(t).removeClass("photo-browser-slide-lazy"), a.params.onLazyImageReady && a.params.onLazyImageReady(a, t, n)
                    }
                };
                a.params.swipeToClose && "page" !== a.params.type && (t.onTouchStart = a.swipeCloseTouchStart, t.onTouchMoveOpposite = a.swipeCloseTouchMove, t.onTouchEnd = a.swipeCloseTouchEnd), a.swiper = i.swiper(a.swiperContainer, t), 0 === e && a.onSliderTransitionStart(a.swiper), a.attachEvents()
            }, a.attachEvents = function(e) {
                var t = e ? "off" : "on";
                if (a.params.zoom) {
                    var n = a.params.loop ? a.swiper.slides : a.slides;
                    n[t]("gesturestart", a.onSlideGestureStart), n[t]("gesturechange", a.onSlideGestureChange), n[t]("gestureend", a.onSlideGestureEnd), n[t](i.touchEvents.start, a.onSlideTouchStart), n[t](i.touchEvents.move, a.onSlideTouchMove), n[t](i.touchEvents.end, a.onSlideTouchEnd)
                }
                a.container.find(".photo-browser-close-link")[t]("click", a.close)
            };
            a.exposed = !1, a.toggleExposition = function() {
                a.container && a.container.toggleClass("photo-browser-exposed"), a.params.expositionHideCaptions && a.captionsContainer.toggleClass("photo-browser-captions-exposed"), a.exposed = !a.exposed
            }, a.enableExposition = function() {
                a.container && a.container.addClass("photo-browser-exposed"), a.params.expositionHideCaptions && a.captionsContainer.addClass("photo-browser-captions-exposed"), a.exposed = !0
            }, a.disableExposition = function() {
                a.container && a.container.removeClass("photo-browser-exposed"), a.params.expositionHideCaptions && a.captionsContainer.removeClass("photo-browser-captions-exposed"), a.exposed = !1
            };
            var f, h, g, v = 1,
                b = 1,
                w = !1;
            a.onSlideGestureStart = function(e) {
                return f && f.length || (f = o(this), 0 === f.length && (f = a.swiper.slides.eq(a.swiper.activeIndex)), h = f.find("img, svg, canvas"), g = h.parent(".photo-browser-zoom-container"), 0 !== g.length) ? (h.transition(0), void(w = !0)) : void(h = void 0)
            }, a.onSlideGestureChange = function(e) {
                h && 0 !== h.length && (v = e.scale * b, v > a.params.maxZoom && (v = a.params.maxZoom - 1 + Math.pow(v - a.params.maxZoom + 1, .5)), v < a.params.minZoom && (v = a.params.minZoom + 1 - Math.pow(a.params.minZoom - v + 1, .5)), h.transform("translate3d(0,0,0) scale(" + v + ")"))
            }, a.onSlideGestureEnd = function(e) {
                h && 0 !== h.length && (v = Math.max(Math.min(v, a.params.maxZoom), a.params.minZoom), h.transition(a.params.speed).transform("translate3d(0,0,0) scale(" + v + ")"), b = v, w = !1, 1 === v && (f = void 0))
            }, a.toggleZoom = function(e) {
                if (f || (f = a.swiper.slides.eq(a.swiper.activeIndex), h = f.find("img, svg, canvas"), g = h.parent(".photo-browser-zoom-container")), h && 0 !== h.length) {
                    var t, n, r, i, s, o, l, p, d, c, u, m, w, C, y, x;
                    "undefined" == typeof A.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, n = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = A.x, n = A.y), v && 1 !== v ? (v = b = 1, g.transition(300).transform("translate3d(0,0,0)"), h.transition(300).transform("translate3d(0,0,0) scale(1)"), f = void 0) : (v = b = a.params.maxZoom, e ? (r = a.container.offset().left, i = a.container.offset().top, s = r + a.container[0].offsetWidth / 2 - t, o = i + a.container[0].offsetHeight / 2 - n, d = h[0].offsetWidth, c = h[0].offsetHeight, u = d * v, m = c * v, w = Math.min(a.swiper.width / 2 - u / 2, 0), C = Math.min(a.swiper.height / 2 - m / 2, 0), y = -w, x = -C, l = s * v, p = o * v, w > l && (l = w), l > y && (l = y), C > p && (p = C), p > x && (p = x)) : (l = 0, p = 0), g.transition(300).transform("translate3d(" + l + "px, " + p + "px,0)"), h.transition(300).transform("translate3d(0,0,0) scale(" + v + ")"))
                }
            };
            var C, y, x, T, k, P, S, M, I, O, E, D, L, B, z, N, H, A = {},
                R = {};
            a.onSlideTouchStart = function(e) {
                h && 0 !== h.length && (C || ("android" === i.device.os && e.preventDefault(), C = !0, A.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, A.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
            }, a.onSlideTouchMove = function(e) {
                if (h && 0 !== h.length && (a.swiper.allowClick = !1, C && f)) {
                    y || (I = h[0].offsetWidth, O = h[0].offsetHeight, E = o.getTranslate(g[0], "x") || 0, D = o.getTranslate(g[0], "y") || 0, g.transition(0));
                    var t = I * v,
                        n = O * v;
                    if (!(t < a.swiper.width && n < a.swiper.height)) {
                        if (k = Math.min(a.swiper.width / 2 - t / 2, 0), S = -k, P = Math.min(a.swiper.height / 2 - n / 2, 0), M = -P, R.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, R.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !y && !w && (Math.floor(k) === Math.floor(E) && R.x < A.x || Math.floor(S) === Math.floor(E) && R.x > A.x)) return void(C = !1);
                        e.preventDefault(), e.stopPropagation(), y = !0, x = R.x - A.x + E, T = R.y - A.y + D, k > x && (x = k + 1 - Math.pow(k - x + 1, .8)), x > S && (x = S - 1 + Math.pow(x - S + 1, .8)), P > T && (T = P + 1 - Math.pow(P - T + 1, .8)), T > M && (T = M - 1 + Math.pow(T - M + 1, .8)), L || (L = R.x), N || (N = R.y), B || (B = Date.now()), z = (R.x - L) / (Date.now() - B) / 2, H = (R.y - N) / (Date.now() - B) / 2, Math.abs(R.x - L) < 2 && (z = 0), Math.abs(R.y - N) < 2 && (H = 0), L = R.x, N = R.y, B = Date.now(), g.transform("translate3d(" + x + "px, " + T + "px,0)")
                    }
                }
            }, a.onSlideTouchEnd = function(e) {
                if (h && 0 !== h.length) {
                    if (!C || !y) return C = !1, void(y = !1);
                    C = !1, y = !1;
                    var t = 300,
                        n = 300,
                        r = z * t,
                        i = x + r,
                        s = H * n,
                        o = T + s;
                    0 !== z && (t = Math.abs((i - x) / z)), 0 !== H && (n = Math.abs((o - T) / H));
                    var l = Math.max(t, n);
                    x = i, T = o;
                    var p = I * v,
                        d = O * v;
                    k = Math.min(a.swiper.width / 2 - p / 2, 0), S = -k, P = Math.min(a.swiper.height / 2 - d / 2, 0), M = -P, x = Math.max(Math.min(x, S), k), T = Math.max(Math.min(T, M), P), g.transition(l).transform("translate3d(" + x + "px, " + T + "px,0)")
                }
            };
            var V, q, F, Y, G, j = !1,
                W = !0,
                X = !1;
            return a.swipeCloseTouchStart = function(e, a) {
                W && (j = !0)
            }, a.swipeCloseTouchMove = function(e, t) {
                if (j) {
                    X || (X = !0, q = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY, Y = a.swiper.slides.eq(a.swiper.activeIndex), G = (new Date).getTime()), t.preventDefault(), F = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY, V = q - F;
                    var n = 1 - Math.abs(V) / 300;
                    Y.transform("translate3d(0," + -V + "px,0)"), a.swiper.container.css("opacity", n).transition(0)
                }
            }, a.swipeCloseTouchEnd = function(e, t) {
                if (j = !1, !X) return void(X = !1);
                X = !1, W = !1;
                var n = Math.abs(V),
                    r = (new Date).getTime() - G;
                return 300 > r && n > 20 || r >= 300 && n > 100 ? void setTimeout(function() {
                    "standalone" === a.params.type && a.close(), "popup" === a.params.type && i.closeModal(a.popup), a.params.onSwipeToClose && a.params.onSwipeToClose(a), W = !0
                }, 0) : (0 !== n ? Y.addClass("transitioning").transitionEnd(function() {
                    W = !0, Y.removeClass("transitioning")
                }) : W = !0, a.swiper.container.css("opacity", "").transition(""), void Y.transform(""))
            }, a
        };
        i.photoBrowser = function(e) {
            return new v(e)
        };
        var b = function(e) {
            function a(e) {
                var a = r.input.val();
                r.params.source && r.params.source(r, a, function(e) {
                    var t = "",
                        n = r.params.limit ? Math.min(r.params.limit, e.length) : e.length;
                    r.items = e;
                    var i, s = new RegExp("(" + a + ")", "i");
                    for (i = 0; n > i; i++) {
                        var o = "object" == typeof e[i] ? e[i][r.params.valueProperty] : e[i];
                        t += r.dropdownItemTemplate({
                            value: o,
                            text: ("object" != typeof e[i] ? e[i] : e[i][r.params.textProperty]).replace(s, "<b>$1</b>")
                        })
                    }
                    "" === t && "" === a && r.params.dropdownPlaceholderText && (t += r.dropdownPlaceholderTemplate({
                        text: r.params.dropdownPlaceholderText
                    })), r.dropdown.find("ul").html(t)
                })
            }

            function t(e) {
                for (var a, t = o(this), n = 0; n < r.items.length; n++) {
                    var i = "object" == typeof r.items[n] ? r.items[n][r.params.valueProperty] : r.items[n],
                        s = t.attr("data-value");
                    (i === s || 1 * i === 1 * s) && (a = r.items[n])
                }
                r.params.updateInputValueOnSelect && (r.input.val("object" == typeof a ? a[r.params.textProperty] : a), r.input.trigger("input change")), r.params.onChange && r.params.onChange(r, a), r.close()
            }

            function n(e) {
                var a = o(e.target);
                a.is(r.input[0]) || r.dropdown && a.parents(r.dropdown[0]).length > 0 || r.close()
            }
            var r = this,
                s = {
                    popupCloseText: "Close",
                    backText: "Back",
                    searchbarPlaceholderText: "Search...",
                    searchbarCancelText: "Cancel",
                    openIn: "page",
                    backOnSelect: !1,
                    notFoundText: "Nothing found",
                    valueProperty: "id",
                    textProperty: "text",
                    updateInputValueOnSelect: !0,
                    expandInput: !1,
                    preloaderColor: !1,
                    preloader: !1
                };
            e = e || {};
            for (var p in s) "undefined" == typeof e[p] && (e[p] = s[p]);
            r.params = e, r.params.opener && (r.opener = o(r.params.opener));
            var d = r.params.view;
            if (!r.params.view && r.opener && r.opener.length) {
                if (d = r.opener.parents("." + i.params.viewClass), 0 === d.length) return;
                d = d[0].f7View
            }
            if (!r.params.input || (r.input = o(r.params.input), 0 !== r.input.length || "dropdown" !== r.params.openIn)) {
                r.value = r.params.value || [], r.id = (new Date).getTime(), r.inputType = r.params.multiple ? "checkbox" : "radio", r.inputName = r.inputType + "-" + r.id;
                var c = i.params.material,
                    u = r.params.backOnSelect;
                if ("dropdown" !== r.params.openIn) {
                    r.itemTemplate = l.compile(r.params.itemTemplate || '<li><label class="label-{{inputType}} item-content"><input type="{{inputType}}" name="{{inputName}}" value="{{value}}" {{#if selected}}checked{{/if}}>{{#if material}}<div class="item-media"><i class="icon icon-form-{{inputType}}"></i></div><div class="item-inner"><div class="item-title">{{text}}</div></div>{{else}}{{#if checkbox}}<div class="item-media"><i class="icon icon-form-checkbox"></i></div>{{/if}}<div class="item-inner"><div class="item-title">{{text}}</div></div>{{/if}}</label></li>');
                    var m = r.params.pageTitle || "";
                    !m && r.opener && r.opener.length && (m = r.opener.find(".item-title").text());
                    var f, h, g = "autocomplete-" + r.inputName,
                        v = r.params.navbarTheme,
                        b = r.params.formTheme,
                        w = "",
                        C = "";
                    r.navbarTemplate = l.compile(r.params.navbarTemplate || '<div class="navbar {{#if navbarTheme}}theme-{{navbarTheme}}{{/if}}"><div class="navbar-inner"><div class="left sliding">{{#if material}}<a href="#" class="link {{#if inPopup}}close-popup{{else}}back{{/if}} icon-only"><i class="icon icon-back"></i></a>{{else}}<a href="#" class="link {{#if inPopup}}close-popup{{else}}back{{/if}}"><i class="icon icon-back"></i>{{#if inPopup}}<span>{{popupCloseText}}</span>{{else}}<span>{{backText}}</span>{{/if}}</a>{{/if}}</div><div class="center sliding">{{pageTitle}}</div>{{#if preloader}}<div class="right"><div class="autocomplete-preloader preloader {{#if preloaderColor}}preloader-{{preloaderColor}}{{/if}}"></div></div>{{/if}}</div></div>'), f = r.navbarTemplate({
                        pageTitle: m,
                        backText: r.params.backText,
                        popupCloseText: r.params.popupCloseText,
                        openIn: r.params.openIn,
                        navbarTheme: v,
                        inPopup: "popup" === r.params.openIn,
                        inPage: "page" === r.params.openIn,
                        material: c,
                        preloader: r.params.preloader,
                        preloaderColor: r.params.preloaderColor
                    }), "page" === r.params.openIn ? (h = "static", r.opener ? (r.opener.parents(".navbar-through").length > 0 && (h = "through"), r.opener.parents(".navbar-fixed").length > 0 && (h = "fixed"), C = r.opener.parents(".page").hasClass("no-toolbar") ? "no-toolbar" : "", w = r.opener.parents(".page").hasClass("no-navbar") ? "no-navbar" : "navbar-" + h) : d.container && ((o(d.container).hasClass("navbar-through") || o(d.container).find(".navbar-through").length > 0) && (h = "through"), (o(d.container).hasClass("navbar-fixed") || o(d.container).find(".navbar-fixed").length > 0) && (h = "fixed"), C = o(d.activePage.container).hasClass("no-toolbar") ? "no-toolbar" : "", w = o(d.activePage.container).hasClass("no-navbar") ? "no-navbar" : "navbar-" + h)) : h = "fixed";
                    var y = '<form class="searchbar"><div class="searchbar-input"><input type="search" placeholder="' + r.params.searchbarPlaceholderText + '"><a href="#" class="searchbar-clear"></a></div>' + (c ? "" : '<a href="#" class="searchbar-cancel">' + r.params.searchbarCancelText + "</a>") + '</form><div class="searchbar-overlay"></div>',
                        x = ("through" === h ? f : "") + '<div class="pages"><div data-page="' + g + '" class="page autocomplete-page ' + w + " " + C + '">' + ("fixed" === h ? f : "") + y + '<div class="page-content">' + ("static" === h ? f : "") + '<div class="list-block autocomplete-found autocomplete-list-' + r.id + " " + (b ? "theme-" + b : "") + '"><ul></ul></div><div class="list-block autocomplete-not-found"><ul><li class="item-content"><div class="item-inner"><div class="item-title">' + r.params.notFoundText + '</div></div></li></ul></div><div class="list-block autocomplete-values"><ul></ul></div></div></div></div>'
                } else r.dropdownItemTemplate = l.compile(r.params.dropdownItemTemplate || '<li><label class="{{#unless placeholder}}label-radio{{/unless}} item-content" data-value="{{value}}"><div class="item-inner"><div class="item-title">{{text}}</div></div></label></li>'), r.dropdownPlaceholderTemplate = l.compile(r.params.dropdownPlaceholderTemplate || '<li class="autocomplete-dropdown-placeholder"><div class="item-content"><div class="item-inner"><div class="item-title">{{text}}</div></div></label></li>'), r.dropdownTemplate = l.compile(r.params.dropdownTemplate || '<div class="autocomplete-dropdown"><div class="autocomplete-dropdown-inner"><div class="list-block"><ul></ul></div></div>{{#if preloader}}<div class="autocomplete-preloader preloader {{#if preloaderColor}}preloader-{{preloaderColor}}{{/if}}">{{#if material}}{{materialPreloaderHtml}}{{/if}}</div>{{/if}}</div>');
                return r.popup = void 0, r.dropdown = void 0, r.positionDropDown = function() {
                    var e = r.input.parents(".list-block"),
                        a = r.input.parents(".page-content"),
                        t = (parseInt(a.css("padding-top"), 10), parseInt(a.css("padding-top"), 10)),
                        n = r.input.offset(),
                        i = e.length > 0 ? e.offset() : 0,
                        s = a[0].scrollHeight - t - (n.top + a[0].scrollTop) - r.input[0].offsetHeight;
                    r.dropdown.css({
                        left: (e.length > 0 ? i.left : n.left) + "px",
                        top: n.top + a[0].scrollTop + r.input[0].offsetHeight + "px",
                        width: (e.length > 0 ? e[0].offsetWidth : r.input[0].offsetWidth) + "px"
                    }), r.dropdown.children(".autocomplete-dropdown-inner").css({
                        maxHeight: s + "px",
                        paddingLeft: e.length > 0 && !r.params.expandInput ? n.left - (c ? 16 : 15) + "px" : ""
                    })
                }, r.pageInit = function(e) {
                    function a() {
                        var e, a = "";
                        for (e = 0; e < r.value.length; e++) a += r.itemTemplate({
                            value: "object" == typeof r.value[e] ? r.value[e][r.params.valueProperty] : r.value[e],
                            text: "object" == typeof r.value[e] ? r.value[e][r.params.textProperty] : r.value[e],
                            inputType: r.inputType,
                            id: r.id,
                            inputName: r.inputName + "-checked",
                            checkbox: "checkbox" === r.inputType,
                            material: c,
                            selected: !0
                        });
                        n.find(".autocomplete-values ul").html(a)
                    }
                    var t = e.detail.page;
                    if (r.page = o(t.container), r.pageData = t, t.name === g) {
                        var n = o(t.container),
                            s = i.searchbar(n.find(".searchbar"), {
                                customSearch: !0,
                                onSearch: function(e, a) {
                                    0 === a.query.length && e.active ? e.overlay.addClass("searchbar-overlay-active") : e.overlay.removeClass("searchbar-overlay-active");
                                    var t, i;
                                    r.params.source && r.params.source(r, a.query, function(e) {
                                        var s = "",
                                            o = r.params.limit ? Math.min(r.params.limit, e.length) : e.length;
                                        for (r.items = e, t = 0; o > t; t++) {
                                            var l = !1,
                                                p = "object" == typeof e[t] ? e[t][r.params.valueProperty] : e[t];
                                            for (i = 0; i < r.value.length; i++) {
                                                var d = "object" == typeof r.value[i] ? r.value[i][r.params.valueProperty] : r.value[i];
                                                (d === p || 1 * d === 1 * p) && (l = !0)
                                            }
                                            s += r.itemTemplate({
                                                value: p,
                                                text: "object" != typeof e[t] ? e[t] : e[t][r.params.textProperty],
                                                inputType: r.inputType,
                                                id: r.id,
                                                inputName: r.inputName,
                                                selected: l,
                                                checkbox: "checkbox" === r.inputType,
                                                material: c
                                            })
                                        }
                                        n.find(".autocomplete-found ul").html(s), 0 === e.length ? 0 !== a.query.length ? (n.find(".autocomplete-not-found").show(), n.find(".autocomplete-found, .autocomplete-values").hide()) : (n.find(".autocomplete-values").show(), n.find(".autocomplete-found, .autocomplete-not-found").hide()) : (n.find(".autocomplete-found").show(), n.find(".autocomplete-not-found, .autocomplete-values").hide())
                                    })
                                }
                            });
                        r.searchbar = s, n.on("change", 'input[type="radio"], input[type="checkbox"]', function() {
                            var e, t, n, s, l = this,
                                p = l.value,
                                c = (o(l).parents("li").find(".item-title").text(), o(l).parents(".autocomplete-values").length > 0);
                            if (c) {
                                if ("checkbox" === r.inputType && !l.checked) {
                                    for (e = 0; e < r.value.length; e++) s = "string" == typeof r.value[e] ? r.value[e] : r.value[e][r.params.valueProperty], (s === p || 1 * s === 1 * p) && r.value.splice(e, 1);
                                    a(), r.params.onChange && r.params.onChange(r, r.value)
                                }
                            } else {
                                for (e = 0; e < r.items.length; e++) n = "string" == typeof r.items[e] ? r.items[e] : r.items[e][r.params.valueProperty], (n === p || 1 * n === 1 * p) && (t = r.items[e]);
                                if ("radio" === r.inputType) r.value = [t];
                                else if (l.checked) r.value.push(t);
                                else
                                    for (e = 0; e < r.value.length; e++) s = "string" == typeof r.value[e] ? r.value[e] : r.value[e][r.params.valueProperty], (s === p || 1 * s === 1 * p) && r.value.splice(e, 1);
                                a(), ("radio" === r.inputType && l.checked || "checkbox" === r.inputType) && r.params.onChange && r.params.onChange(r, r.value), u && "radio" === r.inputType && ("popup" === r.params.openIn ? i.closeModal(r.popup) : d.router.back())
                            }
                        }), a(), r.params.onOpen && r.params.onOpen(r)
                    }
                }, r.showPreloader = function() {
                    "dropdown" === r.params.openIn ? r.dropdown && r.dropdown.find(".autocomplete-preloader").addClass("autocomplete-preloader-visible") : o(".autocomplete-preloader").addClass("autocomplete-preloader-visible")
                }, r.hidePreloader = function() {
                    "dropdown" === r.params.openIn ? r.dropdown && r.dropdown.find(".autocomplete-preloader").removeClass("autocomplete-preloader-visible") : o(".autocomplete-preloader").removeClass("autocomplete-preloader-visible")
                }, r.open = function() {
                    if (!r.opened)
                        if (r.opened = !0, "dropdown" === r.params.openIn) {
                            r.dropdown || (r.dropdown = o(r.dropdownTemplate({
                                preloader: r.params.preloader,
                                preloaderColor: r.params.preloaderColor,
                                material: c,
                                materialPreloaderHtml: i.params.materialPreloaderHtml
                            })), r.dropdown.on("click", "label", t));
                            var e = r.input.parents(".list-block");
                            e.length && r.input.parents(".item-content").length > 0 && r.params.expandInput && r.input.parents(".item-content").addClass("item-content-dropdown-expand"), r.positionDropDown(), r.input.parents(".page-content").append(r.dropdown), r.dropdown.addClass("autocomplete-dropdown-in"), r.input.trigger("input"), o(window).on("resize", r.positionDropDown), r.params.onOpen && r.params.onOpen(r)
                        } else o(document).once("pageInit", ".autocomplete-page", r.pageInit), "popup" === r.params.openIn ? (r.popup = i.popup('<div class="popup autocomplete-popup autocomplete-popup-' + r.inputName + '"><div class="view navbar-fixed">' + x + "</div></div>"), r.popup = o(r.popup), r.popup.once("closed", function() {
                            r.popup = void 0, r.opened = !1, r.params.onClose && r.params.onClose(r)
                        })) : (d.router.load({
                            content: x
                        }), o(document).once("pageBack", ".autocomplete-page", function() {
                            r.opened = !1, r.params.onClose && r.params.onClose(r)
                        }))
                }, r.close = function(e) {
                    if (r.opened) {
                        if ("dropdown" === r.params.openIn) {
                            if (e && "blur" === e.type && r.dropdown.find("label.active-state").length > 0) return;
                            r.dropdown.removeClass("autocomplete-dropdown-in").remove(), r.input.parents(".item-content-dropdown-expand").removeClass("item-content-dropdown-expand"), r.opened = !1, o(window).off("resize", r.positionDropDown), r.params.onClose && r.params.onClose(r)
                        }
                        "popup" === r.params.openIn && r.popup && i.closeModal(r.popup)
                    }
                }, r.initEvents = function(e) {
                    var t = e ? "off" : "on";
                    "dropdown" !== r.params.openIn && r.opener && r.opener[t]("click", r.open), "dropdown" === r.params.openIn && r.input && (r.input[t]("focus", r.open), r.input[t]("input", a), i.device.android ? o("html")[t]("click", n) : r.input[t]("blur", r.close)), e && r.dropdown && (r.dropdown = null)
                }, r.init = function() {
                    r.initEvents()
                }, r.destroy = function() {
                    r.initEvents(!0), r = null
                }, r.init(), r
            }
        };
        i.autocomplete = function(e) {
            return new b(e)
        };
        var w = function(e) {
            function a() {
                var e = !1;
                return p.params.convertToPopover || p.params.onlyInPopover ? (!p.inline && p.params.input && (p.params.onlyInPopover ? e = !0 : i.device.ios ? e = i.device.ipad ? !0 : !1 : o(window).width() >= 768 && (e = !0)), e) : e
            }

            function t() {
                return p.opened && p.container && p.container.length > 0 && p.container.parents(".popover").length > 0 ? !0 : !1
            }

            function n() {
                if (p.opened)
                    for (var e = 0; e < p.cols.length; e++) p.cols[e].divider || (p.cols[e].calcSize(), p.cols[e].setValue(p.cols[e].value, 0, !1))
            }

            function r(e) {
                if (e.preventDefault(), !p.opened && (p.open(), p.params.scrollToInput && !a())) {
                    var t = p.input.parents(".page-content");
                    if (0 === t.length) return;
                    var n, r = parseInt(t.css("padding-top"), 10),
                        i = parseInt(t.css("padding-bottom"), 10),
                        s = t[0].offsetHeight - r - p.container.height(),
                        o = t[0].scrollHeight - r - p.container.height(),
                        l = p.input.offset().top - r + p.input[0].offsetHeight;
                    if (l > s) {
                        var d = t.scrollTop() + l - s;
                        d + s > o && (n = d + s - o + i, s === o && (n = p.container.height()), t.css({
                            "padding-bottom": n + "px"
                        })), t.scrollTop(d, 300)
                    }
                }
            }

            function s(e) {
                t() || (p.input && p.input.length > 0 ? e.target !== p.input[0] && 0 === o(e.target).parents(".picker-modal").length && p.close() : 0 === o(e.target).parents(".picker-modal").length && p.close())
            }

            function l() {
                p.opened = !1, p.input && p.input.length > 0 && (p.input.parents(".page-content").css({
                    "padding-bottom": ""
                }), i.params.material && p.input.trigger("blur")), p.params.onClose && p.params.onClose(p), p.container.find(".picker-items-col").each(function() {
                    p.destroyPickerCol(this)
                })
            }
            var p = this,
                d = {
                    updateValuesOnMomentum: !1,
                    updateValuesOnTouchmove: !0,
                    rotateEffect: !1,
                    momentumRatio: 7,
                    freeMode: !1,
                    closeByOutsideClick: !0,
                    scrollToInput: !0,
                    inputReadOnly: !0,
                    convertToPopover: !0,
                    onlyInPopover: !1,
                    toolbar: !0,
                    toolbarCloseText: "Done",
                    toolbarTemplate: '<div class="toolbar"><div class="toolbar-inner"><div class="left"></div><div class="right"><a href="#" class="link close-picker">{{closeText}}</a></div></div></div>'
                };
            e = e || {};
            for (var c in d) "undefined" == typeof e[c] && (e[c] = d[c]);
            p.params = e, p.cols = [], p.initialized = !1, p.inline = p.params.container ? !0 : !1;
            var u = i.device.ios || navigator.userAgent.toLowerCase().indexOf("safari") >= 0 && navigator.userAgent.toLowerCase().indexOf("chrome") < 0 && !i.device.android;
            return p.setValue = function(e, a) {
                var t = 0;
                if (0 === p.cols.length) return p.value = e, void p.updateValue(e);
                for (var n = 0; n < p.cols.length; n++) p.cols[n] && !p.cols[n].divider && (p.cols[n].setValue(e[t], a), t++)
            }, p.updateValue = function(e) {
                for (var a = e || [], t = [], n = 0; n < p.cols.length; n++) p.cols[n].divider || (a.push(p.cols[n].value), t.push(p.cols[n].displayValue));
                a.indexOf(void 0) >= 0 || (p.value = a, p.displayValue = t, p.params.onChange && p.params.onChange(p, p.value, p.displayValue), p.input && p.input.length > 0 && (o(p.input).val(p.params.formatValue ? p.params.formatValue(p, p.value, p.displayValue) : p.value.join(" ")), o(p.input).trigger("change")))
            }, p.initPickerCol = function(e, a) {
                function t() {
                    w = o.requestAnimationFrame(function() {
                        m.updateItems(void 0, void 0, 0), t()
                    })
                }

                function n(e) {
                    y || C || (e.preventDefault(), C = !0, x = T = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY, k = (new Date).getTime(), L = !0, S = I = o.getTranslate(m.wrapper[0], "y"))
                }

                function r(e) {
                    if (C) {
                        e.preventDefault(), L = !1, T = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, y || (o.cancelAnimationFrame(w), y = !0, S = I = o.getTranslate(m.wrapper[0], "y"), m.wrapper.transition(0)), e.preventDefault();
                        var a = T - x;
                        I = S + a, M = void 0, v > I && (I = v - Math.pow(v - I, .8), M = "min"), I > b && (I = b + Math.pow(I - b, .8), M = "max"), m.wrapper.transform("translate3d(0," + I + "px,0)"), m.updateItems(void 0, I, 0, p.params.updateValuesOnTouchmove), E = I - O || I, D = (new Date).getTime(), O = I
                    }
                }

                function s(e) {
                    if (!C || !y) return void(C = y = !1);
                    C = y = !1, m.wrapper.transition(""), M && ("min" === M ? m.wrapper.transform("translate3d(0," + v + "px,0)") : m.wrapper.transform("translate3d(0," + b + "px,0)")), P = (new Date).getTime();
                    var a, n;
                    P - k > 300 ? n = I : (a = Math.abs(E / (P - D)), n = I + E * p.params.momentumRatio), n = Math.max(Math.min(n, b), v);
                    var r = -Math.floor((n - b) / h);
                    p.params.freeMode || (n = -r * h + b), m.wrapper.transform("translate3d(0," + parseInt(n, 10) + "px,0)"), m.updateItems(r, n, "", !0), p.params.updateValuesOnMomentum && (t(), m.wrapper.transitionEnd(function() {
                        o.cancelAnimationFrame(w)
                    })), setTimeout(function() {
                        L = !0
                    }, 100)
                }

                function l(e) {
                    if (L) {
                        o.cancelAnimationFrame(w);
                        var a = o(this).attr("data-picker-value");
                        m.setValue(a)
                    }
                }
                var d = o(e),
                    c = d.index(),
                    m = p.cols[c];
                if (!m.divider) {
                    m.container = d, m.wrapper = m.container.find(".picker-items-col-wrapper"), m.items = m.wrapper.find(".picker-item");
                    var f, h, g, v, b;
                    m.replaceValues = function(e, a) {
                        m.destroyEvents(), m.values = e, m.displayValues = a;
                        var t = p.columnHTML(m, !0);
                        m.wrapper.html(t), m.items = m.wrapper.find(".picker-item"), m.calcSize(), m.setValue(m.values[0], 0, !0), m.initEvents()
                    }, m.calcSize = function() {
                        p.params.rotateEffect && (m.container.removeClass("picker-items-col-absolute"), m.width || m.container.css({
                            width: ""
                        }));
                        var e, a;
                        e = 0, a = m.container[0].offsetHeight, f = m.wrapper[0].offsetHeight, h = m.items[0].offsetHeight, g = h * m.items.length, v = a / 2 - g + h / 2, b = a / 2 - h / 2, m.width && (e = m.width, parseInt(e, 10) === e && (e += "px"), m.container.css({
                            width: e
                        })), p.params.rotateEffect && (m.width || (m.items.each(function() {
                            var a = o(this);
                            a.css({
                                width: "auto"
                            }), e = Math.max(e, a[0].offsetWidth), a.css({
                                width: ""
                            })
                        }), m.container.css({
                            width: e + 2 + "px"
                        })), m.container.addClass("picker-items-col-absolute"))
                    }, m.calcSize(), m.wrapper.transform("translate3d(0," + b + "px,0)").transition(0);
                    var w;
                    m.setValue = function(e, a, n) {
                        "undefined" == typeof a && (a = "");
                        var r = m.wrapper.find('.picker-item[data-picker-value="' + e + '"]').index();
                        if ("undefined" != typeof r && -1 !== r) {
                            var i = -r * h + b;
                            m.wrapper.transition(a), m.wrapper.transform("translate3d(0," + i + "px,0)"), p.params.updateValuesOnMomentum && m.activeIndex && m.activeIndex !== r && (o.cancelAnimationFrame(w), m.wrapper.transitionEnd(function() {
                                o.cancelAnimationFrame(w)
                            }), t()), m.updateItems(r, i, a, n)
                        }
                    }, m.updateItems = function(e, a, t, n) {
                        "undefined" == typeof a && (a = o.getTranslate(m.wrapper[0], "y")), "undefined" == typeof e && (e = -Math.round((a - b) / h)), 0 > e && (e = 0), e >= m.items.length && (e = m.items.length - 1);
                        var r = m.activeIndex;
                        m.activeIndex = e, m.wrapper.find(".picker-selected").removeClass("picker-selected"), m.items.transition(t);
                        var i = m.items.eq(e).addClass("picker-selected").transform("");
                        if (p.params.rotateEffect) {
                            (a - (Math.floor((a - b) / h) * h + b)) / h;
                            m.items.each(function() {
                                var e = o(this),
                                    t = e.index() * h,
                                    n = b - a,
                                    r = t - n,
                                    i = r / h,
                                    s = Math.ceil(m.height / h / 2) + 1,
                                    l = -18 * i;
                                l > 180 && (l = 180), -180 > l && (l = -180), Math.abs(i) > s ? e.addClass("picker-item-far") : e.removeClass("picker-item-far"), e.transform("translate3d(0, " + (-a + b) + "px, " + (u ? -110 : 0) + "px) rotateX(" + l + "deg)")
                            })
                        }(n || "undefined" == typeof n) && (m.value = i.attr("data-picker-value"), m.displayValue = m.displayValues ? m.displayValues[e] : m.value, r !== e && (m.onChange && m.onChange(p, m.value, m.displayValue), p.updateValue()))
                    }, a && m.updateItems(0, b, 0);
                    var C, y, x, T, k, P, S, M, I, O, E, D, L = !0;
                    m.initEvents = function(e) {
                        var a = e ? "off" : "on";
                        m.container[a](i.touchEvents.start, n), m.container[a](i.touchEvents.move, r), m.container[a](i.touchEvents.end, s), m.items[a]("click", l)
                    }, m.destroyEvents = function() {
                        m.initEvents(!0)
                    }, m.container[0].f7DestroyPickerCol = function() {
                        m.destroyEvents()
                    }, m.initEvents()
                }
            }, p.destroyPickerCol = function(e) {
                e = o(e), "f7DestroyPickerCol" in e[0] && e[0].f7DestroyPickerCol()
            }, o(window).on("resize", n), p.columnHTML = function(e, a) {
                var t = "",
                    n = "";
                if (e.divider) n += '<div class="picker-items-col picker-items-col-divider ' + (e.textAlign ? "picker-items-col-" + e.textAlign : "") + " " + (e.cssClass || "") + '">' + e.content + "</div>";
                else {
                    for (var r = 0; r < e.values.length; r++) t += '<div class="picker-item" data-picker-value="' + e.values[r] + '">' + (e.displayValues ? e.displayValues[r] : e.values[r]) + "</div>";
                    n += '<div class="picker-items-col ' + (e.textAlign ? "picker-items-col-" + e.textAlign : "") + " " + (e.cssClass || "") + '"><div class="picker-items-col-wrapper">' + t + "</div></div>"
                }
                return a ? t : n
            }, p.layout = function() {
                var e, a = "",
                    t = "";
                p.cols = [];
                var n = "";
                for (e = 0; e < p.params.cols.length; e++) {
                    var r = p.params.cols[e];
                    n += p.columnHTML(p.params.cols[e]), p.cols.push(r)
                }
                t = "picker-modal picker-columns " + (p.params.cssClass || "") + (p.params.rotateEffect ? " picker-3d" : ""), a = '<div class="' + t + '">' + (p.params.toolbar ? p.params.toolbarTemplate.replace(/{{closeText}}/g, p.params.toolbarCloseText) : "") + '<div class="picker-modal-inner picker-items">' + n + '<div class="picker-center-highlight"></div></div></div>', p.pickerHTML = a
            }, p.params.input && (p.input = o(p.params.input), p.input.length > 0 && (p.params.inputReadOnly && p.input.prop("readOnly", !0), p.inline || p.input.on("click", r), p.params.inputReadOnly && p.input.on("focus mousedown", function(e) {
                e.preventDefault()
            }))), !p.inline && p.params.closeByOutsideClick && o("html").on("click", s), p.opened = !1, p.open = function() {
                var e = a();
                p.opened || (p.layout(), e ? (p.pickerHTML = '<div class="popover popover-picker-columns"><div class="popover-inner">' + p.pickerHTML + "</div></div>", p.popover = i.popover(p.pickerHTML, p.params.input, !0), p.container = o(p.popover).find(".picker-modal"), o(p.popover).on("close", function() {
                    l()
                })) : p.inline ? (p.container = o(p.pickerHTML), p.container.addClass("picker-modal-inline"), o(p.params.container).append(p.container)) : (p.container = o(i.pickerModal(p.pickerHTML)), o(p.container).on("close", function() {
                    l()
                })), p.container[0].f7Picker = p, p.container.find(".picker-items-col").each(function() {
                    var e = !0;
                    (!p.initialized && p.params.value || p.initialized && p.value) && (e = !1), p.initPickerCol(this, e)
                }), p.initialized ? p.value && p.setValue(p.value, 0) : p.value ? p.setValue(p.value, 0) : p.params.value && p.setValue(p.params.value, 0), p.input && p.input.length > 0 && i.params.material && p.input.trigger("focus")), p.opened = !0, p.initialized = !0, p.params.onOpen && p.params.onOpen(p)
            }, p.close = function() {
                return p.opened && !p.inline ? t() ? void i.closeModal(p.popover) : void i.closeModal(p.container) : void 0
            }, p.destroy = function() {
                p.close(), p.params.input && p.input.length > 0 && p.input.off("click focus", r), o("html").off("click", s), o(window).off("resize", n)
            }, p.inline ? p.open() : !p.initialized && p.params.value && p.setValue(p.params.value), p
        };
        i.picker = function(e) {
            return new w(e)
        };
        var C = function(e) {
            function a() {
                var e = !1;
                return p.params.convertToPopover || p.params.onlyInPopover ? (!p.inline && p.params.input && (p.params.onlyInPopover ? e = !0 : i.device.ios ? e = i.device.ipad ? !0 : !1 : o(window).width() >= 768 && (e = !0)), e) : e
            }

            function t() {
                return p.opened && p.container && p.container.length > 0 && p.container.parents(".popover").length > 0 ? !0 : !1
            }

            function n(e) {
                e = new Date(e);
                var a = e.getFullYear(),
                    t = e.getMonth(),
                    n = t + 1,
                    r = e.getDate(),
                    i = e.getDay();
                return p.params.dateFormat.replace(/yyyy/g, a).replace(/yy/g, (a + "").substring(2)).replace(/mm/g, 10 > n ? "0" + n : n).replace(/m(\W+)/g, n + "$1").replace(/MM/g, p.params.monthNames[t]).replace(/M(\W+)/g, p.params.monthNamesShort[t] + "$1").replace(/dd/g, 10 > r ? "0" + r : r).replace(/d(\W+)/g, r + "$1").replace(/DD/g, p.params.dayNames[i]).replace(/D(\W+)/g, p.params.dayNamesShort[i] + "$1")
            }

            function r(e) {
                if (e.preventDefault(), !p.opened && (p.open(), p.params.scrollToInput && !a() && !i.params.material)) {
                    var t = p.input.parents(".page-content");
                    if (0 === t.length) return;
                    var n, r = parseInt(t.css("padding-top"), 10),
                        s = parseInt(t.css("padding-bottom"), 10),
                        o = t[0].offsetHeight - r - p.container.height(),
                        l = t[0].scrollHeight - r - p.container.height(),
                        d = p.input.offset().top - r + p.input[0].offsetHeight;
                    if (d > o) {
                        var c = t.scrollTop() + d - o;
                        c + o > l && (n = c + o - l + s, o === l && (n = p.container.height()), t.css({
                            "padding-bottom": n + "px"
                        })), t.scrollTop(c, 300)
                    }
                }
            }

            function s(e) {
                t() || (p.input && p.input.length > 0 ? e.target !== p.input[0] && 0 === o(e.target).parents(".picker-modal").length && p.close() : 0 === o(e.target).parents(".picker-modal").length && p.close())
            }

            function l() {
                p.opened = !1, p.input && p.input.length > 0 && (p.input.parents(".page-content").css({
                    "padding-bottom": ""
                }), i.params.material && p.input.trigger("blur")), p.params.onClose && p.params.onClose(p), p.destroyCalendarEvents()
            }
            var p = this,
                d = {
                    monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    firstDay: 1,
                    weekendDays: [0, 6],
                    multiple: !1,
                    rangePicker: !1,
                    dateFormat: "yyyy-mm-dd",
                    direction: "horizontal",
                    minDate: null,
                    maxDate: null,
                    disabled: null,
                    events: null,
                    rangesClasses: null,
                    touchMove: !0,
                    animate: !0,
                    closeOnSelect: !1,
                    monthPicker: !0,
                    monthPickerTemplate: '<div class="picker-calendar-month-picker"><a href="#" class="link icon-only picker-calendar-prev-month"><i class="icon icon-prev"></i></a><span class="current-month-value"></span><a href="#" class="link icon-only picker-calendar-next-month"><i class="icon icon-next"></i></a></div>',
                    yearPicker: !0,
                    yearPickerTemplate: '<div class="picker-calendar-year-picker"><a href="#" class="link icon-only picker-calendar-prev-year"><i class="icon icon-prev"></i></a><span class="current-year-value"></span><a href="#" class="link icon-only picker-calendar-next-year"><i class="icon icon-next"></i></a></div>',
                    weekHeader: !0,
                    closeByOutsideClick: !0,
                    scrollToInput: !0,
                    inputReadOnly: !0,
                    convertToPopover: !0,
                    onlyInPopover: !1,
                    toolbar: !0,
                    toolbarCloseText: "Done",
                    headerPlaceholder: "Select date",
                    header: i.params.material,
                    footer: i.params.material,
                    toolbarTemplate: '<div class="toolbar"><div class="toolbar-inner">{{monthPicker}}{{yearPicker}}</div></div>',
                    headerTemplate: '<div class="picker-header"><div class="picker-calendar-selected-date">{{placeholder}}</div></div>',
                    footerTemplate: '<div class="picker-footer"><a href="#" class="button close-picker">{{closeText}}</a></div>'
                };
            e = e || {};
            for (var c in d) "undefined" == typeof e[c] && (e[c] = d[c]);
            p.params = e, p.initialized = !1, p.inline = p.params.container ? !0 : !1, p.isH = "horizontal" === p.params.direction;
            var u = p.isH && i.rtl ? -1 : 1;
            return p.animating = !1, p.addValue = function(e) {
                if (p.params.multiple) {
                    p.value || (p.value = []);
                    for (var a, t = 0; t < p.value.length; t++) new Date(e).getTime() === new Date(p.value[t]).getTime() && (a = t);
                    "undefined" == typeof a ? p.value.push(e) : p.value.splice(a, 1), p.updateValue()
                } else p.params.rangePicker ? (p.value || (p.value = []), (2 === p.value.length || 0 === p.value.length) && (p.value = []), p.value[0] !== e ? p.value.push(e) : p.value = [], p.value.sort(function(e, a) {
                    return e - a
                }), p.updateValue()) : (p.value = [e], p.updateValue())
            }, p.setValue = function(e) {
                p.value = e, p.updateValue()
            }, p.updateValue = function(e) {
                var a, t;
                if (p.container && p.container.length > 0) {
                    p.wrapper.find(".picker-calendar-day-selected").removeClass("picker-calendar-day-selected");
                    var r;
                    if (p.params.rangePicker && 2 === p.value.length)
                        for (a = p.value[0]; a <= p.value[1]; a += 864e5) r = new Date(a), p.wrapper.find('.picker-calendar-day[data-date="' + r.getFullYear() + "-" + r.getMonth() + "-" + r.getDate() + '"]').addClass("picker-calendar-day-selected");
                    else
                        for (a = 0; a < p.value.length; a++) r = new Date(p.value[a]), p.wrapper.find('.picker-calendar-day[data-date="' + r.getFullYear() + "-" + r.getMonth() + "-" + r.getDate() + '"]').addClass("picker-calendar-day-selected")
                }
                if (p.params.onChange && p.params.onChange(p, p.value), p.input && p.input.length > 0 || i.params.material && p.params.header) {
                    if (p.params.formatValue) t = p.params.formatValue(p, p.value);
                    else {
                        for (t = [], a = 0; a < p.value.length; a++) t.push(n(p.value[a]));
                        t = t.join(p.params.rangePicker ? " - " : ", ")
                    }
                    i.params.material && p.params.header && p.container && p.container.length > 0 && p.container.find(".picker-calendar-selected-date").text(t), p.input && p.input.length > 0 && !e && (o(p.input).val(t), o(p.input).trigger("change"))
                }
            }, p.initCalendarEvents = function() {
                function e(e) {
                    s || r || (r = !0, l = m = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, d = m = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY, f = (new Date).getTime(), C = 0, T = !0, x = void 0, g = v = p.monthsTranslate)
                }

                function a(e) {
                    if (r) {
                        if (c = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, m = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, "undefined" == typeof x && (x = !!(x || Math.abs(m - d) > Math.abs(c - l))), p.isH && x) return void(r = !1);
                        if (e.preventDefault(), p.animating) return void(r = !1);
                        T = !1, s || (s = !0, b = p.wrapper[0].offsetWidth, w = p.wrapper[0].offsetHeight, p.wrapper.transition(0)), e.preventDefault(), y = p.isH ? c - l : m - d, C = y / (p.isH ? b : w), v = 100 * (p.monthsTranslate * u + C), p.wrapper.transform("translate3d(" + (p.isH ? v : 0) + "%, " + (p.isH ? 0 : v) + "%, 0)")
                    }
                }

                function t(e) {
                    return r && s ? (r = s = !1, h = (new Date).getTime(), 300 > h - f ? Math.abs(y) < 10 ? p.resetMonth() : y >= 10 ? i.rtl ? p.nextMonth() : p.prevMonth() : i.rtl ? p.prevMonth() : p.nextMonth() : -.5 >= C ? i.rtl ? p.prevMonth() : p.nextMonth() : C >= .5 ? i.rtl ? p.nextMonth() : p.prevMonth() : p.resetMonth(), void setTimeout(function() {
                        T = !0
                    }, 100)) : void(r = s = !1)
                }

                function n(e) {
                    if (T) {
                        var a = o(e.target).parents(".picker-calendar-day");
                        if (0 === a.length && o(e.target).hasClass("picker-calendar-day") && (a = o(e.target)), 0 !== a.length && (!a.hasClass("picker-calendar-day-selected") || p.params.multiple || p.params.rangePicker) && !a.hasClass("picker-calendar-day-disabled")) {
                            p.params.rangePicker || (a.hasClass("picker-calendar-day-next") && p.nextMonth(), a.hasClass("picker-calendar-day-prev") && p.prevMonth());
                            var t = a.attr("data-year"),
                                n = a.attr("data-month"),
                                r = a.attr("data-day");
                            p.params.onDayClick && p.params.onDayClick(p, a[0], t, n, r), p.addValue(new Date(t, n, r).getTime()), p.params.closeOnSelect && (p.params.rangePicker && 2 === p.value.length || !p.params.rangePicker) && p.close()
                        }
                    }
                }
                var r, s, l, d, c, m, f, h, g, v, b, w, C, y, x, T = !0;
                p.container.find(".picker-calendar-prev-month").on("click", p.prevMonth), p.container.find(".picker-calendar-next-month").on("click", p.nextMonth), p.container.find(".picker-calendar-prev-year").on("click", p.prevYear), p.container.find(".picker-calendar-next-year").on("click", p.nextYear), p.wrapper.on("click", n), p.params.touchMove && (p.wrapper.on(i.touchEvents.start, e), p.wrapper.on(i.touchEvents.move, a), p.wrapper.on(i.touchEvents.end, t)), p.container[0].f7DestroyCalendarEvents = function() {
                    p.container.find(".picker-calendar-prev-month").off("click", p.prevMonth), p.container.find(".picker-calendar-next-month").off("click", p.nextMonth), p.container.find(".picker-calendar-prev-year").off("click", p.prevYear), p.container.find(".picker-calendar-next-year").off("click", p.nextYear), p.wrapper.off("click", n), p.params.touchMove && (p.wrapper.off(i.touchEvents.start, e), p.wrapper.off(i.touchEvents.move, a), p.wrapper.off(i.touchEvents.end, t))
                }
            }, p.destroyCalendarEvents = function(e) {
                "f7DestroyCalendarEvents" in p.container[0] && p.container[0].f7DestroyCalendarEvents()
            }, p.dateInRange = function(e, a) {
                var t, n = !1;
                if (!a) return !1;
                if (o.isArray(a))
                    for (t = 0; t < a.length; t++) a[t].from || a[t].to ? a[t].from && a[t].to ? e <= new Date(a[t].to).getTime() && e >= new Date(a[t].from).getTime() && (n = !0) : a[t].from ? e >= new Date(a[t].from).getTime() && (n = !0) : a[t].to && e <= new Date(a[t].to).getTime() && (n = !0) : e === new Date(a[t]).getTime() && (n = !0);
                else a.from || a.to ? a.from && a.to ? e <= new Date(a.to).getTime() && e >= new Date(a.from).getTime() && (n = !0) : a.from ? e >= new Date(a.from).getTime() && (n = !0) : a.to && e <= new Date(a.to).getTime() && (n = !0) : "function" == typeof a && (n = a(new Date(e)));
                return n
            }, p.daysInMonth = function(e) {
                var a = new Date(e);
                return new Date(a.getFullYear(), a.getMonth() + 1, 0).getDate()
            }, p.monthHTML = function(e, a) {
                e = new Date(e);
                var t = e.getFullYear(),
                    n = e.getMonth();
                e.getDate();
                "next" === a && (e = 11 === n ? new Date(t + 1, 0) : new Date(t, n + 1, 1)), "prev" === a && (e = 0 === n ? new Date(t - 1, 11) : new Date(t, n - 1, 1)), ("next" === a || "prev" === a) && (n = e.getMonth(), t = e.getFullYear());
                var r = p.daysInMonth(new Date(e.getFullYear(), e.getMonth()).getTime() - 864e6),
                    i = p.daysInMonth(e),
                    s = new Date(e.getFullYear(), e.getMonth()).getDay();
                0 === s && (s = 7);
                var o, l, d, c, u, m, f = [],
                    h = 6,
                    g = 7,
                    v = "",
                    b = 0 + (p.params.firstDay - 1),
                    w = (new Date).setHours(0, 0, 0, 0),
                    C = p.params.minDate ? new Date(p.params.minDate).getTime() : null,
                    y = p.params.maxDate ? new Date(p.params.maxDate).getTime() : null;
                if (p.value && p.value.length)
                    for (l = 0; l < p.value.length; l++) f.push(new Date(p.value[l]).setHours(0, 0, 0, 0));
                for (l = 1; h >= l; l++) {
                    var x = "";
                    for (d = 1; g >= d; d++) {
                        var T = d;
                        b++;
                        var k = b - s,
                            P = T - 1 + p.params.firstDay > 6 ? T - 1 - 7 + p.params.firstDay : T - 1 + p.params.firstDay,
                            S = "";
                        if (0 > k ? (k = r + k + 1, S += " picker-calendar-day-prev", o = new Date(0 > n - 1 ? t - 1 : t, 0 > n - 1 ? 11 : n - 1, k).getTime()) : (k += 1, k > i ? (k -= i, S += " picker-calendar-day-next", o = new Date(n + 1 > 11 ? t + 1 : t, n + 1 > 11 ? 0 : n + 1, k).getTime()) : o = new Date(t, n, k).getTime()), o === w && (S += " picker-calendar-day-today"), p.params.rangePicker && 2 === f.length ? o >= f[0] && o <= f[1] && (S += " picker-calendar-day-selected") : f.indexOf(o) >= 0 && (S += " picker-calendar-day-selected"), p.params.weekendDays.indexOf(P) >= 0 && (S += " picker-calendar-day-weekend"), m = !1, p.params.events && p.dateInRange(o, p.params.events) && (m = !0), m && (S += " picker-calendar-day-has-events"), p.params.rangesClasses)
                            for (c = 0; c < p.params.rangesClasses.length; c++) p.dateInRange(o, p.params.rangesClasses[c].range) && (S += " " + p.params.rangesClasses[c].cssClass);
                        u = !1, (C && C > o || y && o > y) && (u = !0), p.params.disabled && p.dateInRange(o, p.params.disabled) && (u = !0), u && (S += " picker-calendar-day-disabled"), o = new Date(o);
                        var M = o.getFullYear(),
                            I = o.getMonth();
                        x += '<div data-year="' + M + '" data-month="' + I + '" data-day="' + k + '" class="picker-calendar-day' + S + '" data-date="' + (M + "-" + I + "-" + k) + '"><span>' + k + "</span></div>"
                    }
                    v += '<div class="picker-calendar-row">' + x + "</div>"
                }
                return v = '<div class="picker-calendar-month" data-year="' + t + '" data-month="' + n + '">' + v + "</div>"
            }, p.animating = !1, p.updateCurrentMonthYear = function(e) {
                "undefined" == typeof e ? (p.currentMonth = parseInt(p.months.eq(1).attr("data-month"), 10), p.currentYear = parseInt(p.months.eq(1).attr("data-year"), 10)) : (p.currentMonth = parseInt(p.months.eq("next" === e ? p.months.length - 1 : 0).attr("data-month"), 10), p.currentYear = parseInt(p.months.eq("next" === e ? p.months.length - 1 : 0).attr("data-year"), 10)), p.container.find(".current-month-value").text(p.params.monthNames[p.currentMonth]), p.container.find(".current-year-value").text(p.currentYear)
            }, p.onMonthChangeStart = function(e) {
                p.updateCurrentMonthYear(e), p.months.removeClass("picker-calendar-month-current picker-calendar-month-prev picker-calendar-month-next");
                var a = "next" === e ? p.months.length - 1 : 0;
                p.months.eq(a).addClass("picker-calendar-month-current"), p.months.eq("next" === e ? a - 1 : a + 1).addClass("next" === e ? "picker-calendar-month-prev" : "picker-calendar-month-next"), p.params.onMonthYearChangeStart && p.params.onMonthYearChangeStart(p, p.currentYear, p.currentMonth)
            }, p.onMonthChangeEnd = function(e, a) {
                p.animating = !1;
                var t, n, r;
                p.wrapper.find(".picker-calendar-month:not(.picker-calendar-month-prev):not(.picker-calendar-month-current):not(.picker-calendar-month-next)").remove(), "undefined" == typeof e && (e = "next", a = !0), a ? (p.wrapper.find(".picker-calendar-month-next, .picker-calendar-month-prev").remove(), n = p.monthHTML(new Date(p.currentYear, p.currentMonth), "prev"), t = p.monthHTML(new Date(p.currentYear, p.currentMonth), "next")) : r = p.monthHTML(new Date(p.currentYear, p.currentMonth), e), ("next" === e || a) && p.wrapper.append(r || t), ("prev" === e || a) && p.wrapper.prepend(r || n), p.months = p.wrapper.find(".picker-calendar-month"), p.setMonthsTranslate(p.monthsTranslate), p.params.onMonthAdd && p.params.onMonthAdd(p, "next" === e ? p.months.eq(p.months.length - 1)[0] : p.months.eq(0)[0]), p.params.onMonthYearChangeEnd && p.params.onMonthYearChangeEnd(p, p.currentYear, p.currentMonth)
            }, p.setMonthsTranslate = function(e) {
                e = e || p.monthsTranslate || 0, "undefined" == typeof p.monthsTranslate && (p.monthsTranslate = e), p.months.removeClass("picker-calendar-month-current picker-calendar-month-prev picker-calendar-month-next");
                var a = 100 * -(e + 1) * u,
                    t = 100 * -e * u,
                    n = 100 * -(e - 1) * u;
                p.months.eq(0).transform("translate3d(" + (p.isH ? a : 0) + "%, " + (p.isH ? 0 : a) + "%, 0)").addClass("picker-calendar-month-prev"), p.months.eq(1).transform("translate3d(" + (p.isH ? t : 0) + "%, " + (p.isH ? 0 : t) + "%, 0)").addClass("picker-calendar-month-current"), p.months.eq(2).transform("translate3d(" + (p.isH ? n : 0) + "%, " + (p.isH ? 0 : n) + "%, 0)").addClass("picker-calendar-month-next")
            }, p.nextMonth = function(e) {
                ("undefined" == typeof e || "object" == typeof e) && (e = "", p.params.animate || (e = 0));
                var a = parseInt(p.months.eq(p.months.length - 1).attr("data-month"), 10),
                    t = parseInt(p.months.eq(p.months.length - 1).attr("data-year"), 10),
                    n = new Date(t, a),
                    r = n.getTime(),
                    i = p.animating ? !1 : !0;
                if (p.params.maxDate && r > new Date(p.params.maxDate).getTime()) return p.resetMonth();
                if (p.monthsTranslate--, a === p.currentMonth) {
                    var s = 100 * -p.monthsTranslate * u,
                        l = o(p.monthHTML(r, "next")).transform("translate3d(" + (p.isH ? s : 0) + "%, " + (p.isH ? 0 : s) + "%, 0)").addClass("picker-calendar-month-next");
                    p.wrapper.append(l[0]), p.months = p.wrapper.find(".picker-calendar-month"), p.params.onMonthAdd && p.params.onMonthAdd(p, p.months.eq(p.months.length - 1)[0])
                }
                p.animating = !0, p.onMonthChangeStart("next");
                var d = 100 * p.monthsTranslate * u;
                p.wrapper.transition(e).transform("translate3d(" + (p.isH ? d : 0) + "%, " + (p.isH ? 0 : d) + "%, 0)"), i && p.wrapper.transitionEnd(function() {
                    p.onMonthChangeEnd("next")
                }), p.params.animate || p.onMonthChangeEnd("next")
            }, p.prevMonth = function(e) {
                ("undefined" == typeof e || "object" == typeof e) && (e = "", p.params.animate || (e = 0));
                var a = parseInt(p.months.eq(0).attr("data-month"), 10),
                    t = parseInt(p.months.eq(0).attr("data-year"), 10),
                    n = new Date(t, a + 1, -1),
                    r = n.getTime(),
                    i = p.animating ? !1 : !0;
                if (p.params.minDate && r < new Date(p.params.minDate).getTime()) return p.resetMonth();
                if (p.monthsTranslate++, a === p.currentMonth) {
                    var s = 100 * -p.monthsTranslate * u,
                        l = o(p.monthHTML(r, "prev")).transform("translate3d(" + (p.isH ? s : 0) + "%, " + (p.isH ? 0 : s) + "%, 0)").addClass("picker-calendar-month-prev");
                    p.wrapper.prepend(l[0]), p.months = p.wrapper.find(".picker-calendar-month"), p.params.onMonthAdd && p.params.onMonthAdd(p, p.months.eq(0)[0])
                }
                p.animating = !0, p.onMonthChangeStart("prev");
                var d = 100 * p.monthsTranslate * u;
                p.wrapper.transition(e).transform("translate3d(" + (p.isH ? d : 0) + "%, " + (p.isH ? 0 : d) + "%, 0)"), i && p.wrapper.transitionEnd(function() {
                    p.onMonthChangeEnd("prev")
                }), p.params.animate || p.onMonthChangeEnd("prev")
            }, p.resetMonth = function(e) {
                "undefined" == typeof e && (e = "");
                var a = 100 * p.monthsTranslate * u;
                p.wrapper.transition(e).transform("translate3d(" + (p.isH ? a : 0) + "%, " + (p.isH ? 0 : a) + "%, 0)")
            }, p.setYearMonth = function(e, a, t) {
                "undefined" == typeof e && (e = p.currentYear), "undefined" == typeof a && (a = p.currentMonth), ("undefined" == typeof t || "object" == typeof t) && (t = "", p.params.animate || (t = 0));
                var n;
                if (n = e < p.currentYear ? new Date(e, a + 1, -1).getTime() : new Date(e, a).getTime(), p.params.maxDate && n > new Date(p.params.maxDate).getTime()) return !1;
                if (p.params.minDate && n < new Date(p.params.minDate).getTime()) return !1;
                var r = new Date(p.currentYear, p.currentMonth).getTime(),
                    i = n > r ? "next" : "prev",
                    s = p.monthHTML(new Date(e, a));
                p.monthsTranslate = p.monthsTranslate || 0;
                var o, l, d = p.monthsTranslate,
                    c = p.animating ? !1 : !0;
                n > r ? (p.monthsTranslate--, p.animating || p.months.eq(p.months.length - 1).remove(), p.wrapper.append(s), p.months = p.wrapper.find(".picker-calendar-month"), o = 100 * -(d - 1) * u, p.months.eq(p.months.length - 1).transform("translate3d(" + (p.isH ? o : 0) + "%, " + (p.isH ? 0 : o) + "%, 0)").addClass("picker-calendar-month-next")) : (p.monthsTranslate++, p.animating || p.months.eq(0).remove(), p.wrapper.prepend(s), p.months = p.wrapper.find(".picker-calendar-month"), o = 100 * -(d + 1) * u, p.months.eq(0).transform("translate3d(" + (p.isH ? o : 0) + "%, " + (p.isH ? 0 : o) + "%, 0)").addClass("picker-calendar-month-prev")), p.params.onMonthAdd && p.params.onMonthAdd(p, "next" === i ? p.months.eq(p.months.length - 1)[0] : p.months.eq(0)[0]), p.animating = !0, p.onMonthChangeStart(i), l = 100 * p.monthsTranslate * u, p.wrapper.transition(t).transform("translate3d(" + (p.isH ? l : 0) + "%, " + (p.isH ? 0 : l) + "%, 0)"), c && p.wrapper.transitionEnd(function() {
                    p.onMonthChangeEnd(i, !0)
                }), p.params.animate || p.onMonthChangeEnd(i)
            }, p.nextYear = function() {
                p.setYearMonth(p.currentYear + 1)
            }, p.prevYear = function() {
                p.setYearMonth(p.currentYear - 1)
            }, p.layout = function() {
                var e, a = "",
                    t = "",
                    n = p.value && p.value.length ? p.value[0] : (new Date).setHours(0, 0, 0, 0),
                    r = p.monthHTML(n, "prev"),
                    i = p.monthHTML(n),
                    s = p.monthHTML(n, "next"),
                    o = '<div class="picker-calendar-months"><div class="picker-calendar-months-wrapper">' + (r + i + s) + "</div></div>",
                    l = "";
                if (p.params.weekHeader) {
                    for (e = 0; 7 > e; e++) {
                        var d = e + p.params.firstDay > 6 ? e - 7 + p.params.firstDay : e + p.params.firstDay,
                            c = p.params.dayNamesShort[d];
                        l += '<div class="picker-calendar-week-day ' + (p.params.weekendDays.indexOf(d) >= 0 ? "picker-calendar-week-day-weekend" : "") + '"> ' + c + "</div>"
                    }
                    l = '<div class="picker-calendar-week-days">' + l + "</div>"
                }
                t = "picker-modal picker-calendar" + (p.params.rangePicker ? " picker-calendar-range" : "") + (p.params.cssClass ? " " + p.params.cssClass : "");
                var u = p.params.toolbar ? p.params.toolbarTemplate.replace(/{{closeText}}/g, p.params.toolbarCloseText) : "";
                p.params.toolbar && (u = p.params.toolbarTemplate.replace(/{{closeText}}/g, p.params.toolbarCloseText).replace(/{{monthPicker}}/g, p.params.monthPicker ? p.params.monthPickerTemplate : "").replace(/{{yearPicker}}/g, p.params.yearPicker ? p.params.yearPickerTemplate : ""));
                var m = p.params.header ? p.params.headerTemplate.replace(/{{closeText}}/g, p.params.toolbarCloseText).replace(/{{placeholder}}/g, p.params.headerPlaceholder) : "",
                    f = p.params.footer ? p.params.footerTemplate.replace(/{{closeText}}/g, p.params.toolbarCloseText) : "";
                a = '<div class="' + t + '">' + m + f + u + '<div class="picker-modal-inner">' + l + o + "</div></div>", p.pickerHTML = a
            }, p.params.input && (p.input = o(p.params.input), p.input.length > 0 && (p.params.inputReadOnly && p.input.prop("readOnly", !0), p.inline || p.input.on("click", r), p.params.inputReadOnly && p.input.on("focus mousedown", function(e) {
                e.preventDefault()
            }))), !p.inline && p.params.closeByOutsideClick && o("html").on("click", s), p.opened = !1, p.open = function() {
                var e = a(),
                    t = !1;
                p.opened || (p.value || p.params.value && (p.value = p.params.value, t = !0), p.layout(), e ? (p.pickerHTML = '<div class="popover popover-picker-calendar"><div class="popover-inner">' + p.pickerHTML + "</div></div>", p.popover = i.popover(p.pickerHTML, p.params.input, !0), p.container = o(p.popover).find(".picker-modal"), o(p.popover).on("close", function() {
                    l()
                })) : p.inline ? (p.container = o(p.pickerHTML), p.container.addClass("picker-modal-inline"), o(p.params.container).append(p.container)) : (p.container = o(i.pickerModal(p.pickerHTML)), o(p.container).on("close", function() {
                    l()
                })), p.container[0].f7Calendar = p, p.wrapper = p.container.find(".picker-calendar-months-wrapper"), p.months = p.wrapper.find(".picker-calendar-month"), p.updateCurrentMonthYear(), p.monthsTranslate = 0, p.setMonthsTranslate(), p.initCalendarEvents(), t ? p.updateValue() : i.params.material && p.value && p.updateValue(!0), p.input && p.input.length > 0 && i.params.material && p.input.trigger("focus")), p.opened = !0, p.initialized = !0, p.params.onMonthAdd && p.months.each(function() {
                    p.params.onMonthAdd(p, this)
                }), p.params.onOpen && p.params.onOpen(p)
            }, p.close = function() {
                return p.opened && !p.inline ? t() ? void i.closeModal(p.popover) : void i.closeModal(p.container) : void 0
            }, p.destroy = function() {
                p.close(), p.params.input && p.input.length > 0 && p.input.off("click focus", r), o("html").off("click", s)
            }, p.inline ? p.open() : !p.initialized && p.params.value && p.setValue(p.params.value), p
        };
        i.calendar = function(e) {
            return new C(e)
        };
        var y;
        i.addNotification = function(e) {
            if (e) {
                "undefined" == typeof e.media && (e.media = i.params.notificationMedia), "undefined" == typeof e.title && (e.title = i.params.notificationTitle), "undefined" == typeof e.subtitle && (e.subtitle = i.params.notificationSubtitle), "undefined" == typeof e.closeIcon && (e.closeIcon = i.params.notificationCloseIcon), "undefined" == typeof e.hold && (e.hold = i.params.notificationHold), "undefined" == typeof e.closeOnClick && (e.closeOnClick = i.params.notificationCloseOnClick), "undefined" == typeof e.button && (e.button = i.params.notificationCloseButtonText && {
                    text: i.params.notificationCloseButtonText,
                    close: !0
                }), y || (y = document.createElement("div")), e.material = i.params.material;
                var a = o(".notifications");
                0 === a.length && (o("body").append('<div class="notifications list-block' + (e.material ? "" : " media-list") + '"><ul></ul></div>'), a = o(".notifications"));
                var t = a.children("ul"),
                    n = i.params.notificationTemplate || '{{#if custom}}<li>{{custom}}</li>{{else}}<li class="notification-item notification-hidden"><div class="item-content">{{#if material}}<div class="item-inner"><div class="item-title">{{js "this.message || this.title || this.subtitle"}}</div>{{#if ../button}}{{#button}}<div class="item-after"><a href="#" class="button {{#if color}}color-{{color}}{{/if}} {{#js_compare "this.close !== false"}}close-notification{{/js_compare}}">{{text}}</a></div>{{/button}}{{/if}}</div>{{else}}{{#if media}}<div class="item-media">{{media}}</div>{{/if}}<div class="item-inner"><div class="item-title-row">{{#if title}}<div class="item-title">{{title}}</div>{{/if}}{{#if closeIcon}}<div class="item-after"><a href="#" class="close-notification"><span></span></a></div>{{/if}}</div>{{#if subtitle}}<div class="item-subtitle">{{subtitle}}</div>{{/if}}{{#if message}}<div class="item-text">{{message}}</div></div>{{/if}}{{/if}}</div></li>{{/if}}';
                i._compiledTemplates.notification || (i._compiledTemplates.notification = l.compile(n)), y.innerHTML = i._compiledTemplates.notification(e);
                var r = o(y).children();
                r.on("click", function(a) {
                    var t = !1,
                        n = o(a.target);
                    e.material && n.hasClass("button") && e.button && e.button.onClick && e.button.onClick.call(n[0], a, r[0]), n.is(".close-notification") || o(a.target).parents(".close-notification").length > 0 ? t = !0 : (e.onClick && e.onClick(a, r[0]), e.closeOnClick && (t = !0)), t && i.closeNotification(r[0])
                }), e.onClose && r.data("f7NotificationOnClose", function() {
                    e.onClose(r[0])
                }), e.additionalClass && r.addClass(e.additionalClass), e.hold && setTimeout(function() {
                    r.length > 0 && i.closeNotification(r[0])
                }, e.hold), t[e.material ? "append" : "prepend"](r[0]), a.show();
                var s, p = r.outerHeight();
                return e.material ? (a.transform("translate3d(0, " + p + "px, 0)"), a.transition(0), s = r[0].clientLeft, a.transform("translate3d(0, 0, 0)"), a.transition("")) : (r.css("marginTop", -p + "px"), r.transition(0), s = r[0].clientLeft, r.transition(""), r.css("marginTop", "0px")), a.transform("translate3d(0, 0,0)"), r.removeClass("notification-hidden"), r[0]
            }
        }, i.closeNotification = function(e) {
            if (e = o(e), 0 !== e.length && !e.hasClass("notification-item-removing")) {
                var a = o(".notifications"),
                    t = e.outerHeight();
                e.css("height", t + "px").transition(0).addClass("notification-item-removing");
                e[0].clientLeft;
                e.css("height", "0px").transition(""), e.data("f7NotificationOnClose") && e.data("f7NotificationOnClose")(), 0 === a.find(".notification-item:not(.notification-item-removing)").length && a.transform(""), e.addClass("notification-hidden").transitionEnd(function() {
                    e.remove(), 0 === a.find(".notification-item").length && a.hide()
                })
            }
        }, i.initTemplate7Templates = function() {
            window.Template7 && (Template7.templates = Template7.templates || i.params.templates || {}, Template7.data = Template7.data || i.params.template7Data || {}, Template7.cache = Template7.cache || {}, i.templates = Template7.templates, i.template7Data = Template7.data, i.template7Cache = Template7.cache, i.params.precompileTemplates && o('script[type="text/template7"]').each(function() {
                var e = o(this).attr("id");
                e && (Template7.templates[e] = Template7.compile(o(this).html()))
            }))
        };
        var x = [];
        return i.initPlugins = function() {
            for (var e in i.plugins) {
                var a = i.plugins[e](i, i.params[e]);
                a && x.push(a)
            }
        }, i.pluginHook = function(e) {
            for (var a = 0; a < x.length; a++) x[a].hooks && e in x[a].hooks && x[a].hooks[e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
        }, i.pluginPrevent = function(e) {
            for (var a = !1, t = 0; t < x.length; t++) x[t].prevents && e in x[t].prevents && x[t].prevents[e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]) && (a = !0);
            return a
        }, i.pluginProcess = function(e, a) {
            for (var t = a, n = 0; n < x.length; n++) x[n].preprocess && e in x[n].preprocess && (t = x[n].preprocess[e](a, arguments[2], arguments[3], arguments[4], arguments[5], arguments[6]));
            return t
        }, i.init = function() {
            i.initTemplate7Templates && i.initTemplate7Templates(), i.initPlugins && i.initPlugins(), i.getDeviceInfo && i.getDeviceInfo(), i.initFastClicks && i.params.fastClicks && i.initFastClicks(), i.initClickEvents && i.initClickEvents(), o(".page:not(.cached)").each(function() {
                i.initPageWithCallback(this)
            }), o(".navbar:not(.cached)").each(function() {
                i.initNavbarWithCallback(this)
            }), i.initResize && i.initResize(), i.initPushState && i.params.pushState && i.initPushState(), i.initSwipeout && i.params.swipeout && i.initSwipeout(), i.initSortable && i.params.sortable && i.initSortable(), i.initSwipePanels && (i.params.swipePanel || i.params.swipePanelOnlyClose) && i.initSwipePanels(), i.params.material && i.initMaterialWatchInputs && i.initMaterialWatchInputs(), i.params.onAppInit && i.params.onAppInit(), i.pluginHook("appInit")
        }, i.params.init && i.init(), i
    };
    var e = function() {
        var e = function(e) {
                var a = this,
                    t = 0;
                for (t = 0; t < e.length; t++) a[t] = e[t];
                return a.length = e.length, this
            },
            a = function(a, t) {
                var n = [],
                    r = 0;
                if (a && !t && a instanceof e) return a;
                if (a)
                    if ("string" == typeof a) {
                        var i, s, o;
                        if (a = o = a.trim(), o.indexOf("<") >= 0 && o.indexOf(">") >= 0) {
                            var l = "div";
                            for (0 === o.indexOf("<li") && (l = "ul"), 0 === o.indexOf("<tr") && (l = "tbody"), (0 === o.indexOf("<td") || 0 === o.indexOf("<th")) && (l = "tr"), 0 === o.indexOf("<tbody") && (l = "table"), 0 === o.indexOf("<option") && (l = "select"), s = document.createElement(l), s.innerHTML = o, r = 0; r < s.childNodes.length; r++) n.push(s.childNodes[r])
                        } else
                            for (i = t || "#" !== a[0] || a.match(/[ .<>:~]/) ? (t || document).querySelectorAll(a) : [document.getElementById(a.split("#")[1])], r = 0; r < i.length; r++) i[r] && n.push(i[r])
                    } else if (a.nodeType || a === window || a === document) n.push(a);
                else if (a.length > 0 && a[0].nodeType)
                    for (r = 0; r < a.length; r++) n.push(a[r]);
                return new e(n)
            };
        e.prototype = {
                addClass: function(e) {
                    if ("undefined" == typeof e) return this;
                    for (var a = e.split(" "), t = 0; t < a.length; t++)
                        for (var n = 0; n < this.length; n++) "undefined" != typeof this[n].classList && this[n].classList.add(a[t]);
                    return this
                },
                removeClass: function(e) {
                    for (var a = e.split(" "), t = 0; t < a.length; t++)
                        for (var n = 0; n < this.length; n++) "undefined" != typeof this[n].classList && this[n].classList.remove(a[t]);
                    return this
                },
                hasClass: function(e) {
                    return this[0] ? this[0].classList.contains(e) : !1
                },
                toggleClass: function(e) {
                    for (var a = e.split(" "), t = 0; t < a.length; t++)
                        for (var n = 0; n < this.length; n++) "undefined" != typeof this[n].classList && this[n].classList.toggle(a[t]);
                    return this
                },
                attr: function(e, a) {
                    if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
                    for (var t = 0; t < this.length; t++)
                        if (2 === arguments.length) this[t].setAttribute(e, a);
                        else
                            for (var n in e) this[t][n] = e[n], this[t].setAttribute(n, e[n]);
                    return this
                },
                removeAttr: function(e) {
                    for (var a = 0; a < this.length; a++) this[a].removeAttribute(e);
                    return this
                },
                prop: function(e, a) {
                    if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0][e] : void 0;
                    for (var t = 0; t < this.length; t++)
                        if (2 === arguments.length) this[t][e] = a;
                        else
                            for (var n in e) this[t][n] = e[n];
                    return this
                },
                data: function(e, a) {
                    if ("undefined" != typeof a) {
                        for (var t = 0; t < this.length; t++) {
                            var n = this[t];
                            n.dom7ElementDataStorage || (n.dom7ElementDataStorage = {}), n.dom7ElementDataStorage[e] = a
                        }
                        return this
                    }
                    if (this[0]) {
                        if (this[0].dom7ElementDataStorage && e in this[0].dom7ElementDataStorage) return this[0].dom7ElementDataStorage[e];
                        var r = this[0].getAttribute("data-" + e);
                        return r ? r : void 0
                    }
                },
                removeData: function(e) {
                    for (var a = 0; a < this.length; a++) {
                        var t = this[a];
                        t.dom7ElementDataStorage && t.dom7ElementDataStorage[e] && (t.dom7ElementDataStorage[e] = null, delete t.dom7ElementDataStorage[e])
                    }
                },
                dataset: function() {
                    var e = this[0];
                    if (e) {
                        var t = {};
                        if (e.dataset)
                            for (var n in e.dataset) t[n] = e.dataset[n];
                        else
                            for (var r = 0; r < e.attributes.length; r++) {
                                var i = e.attributes[r];
                                i.name.indexOf("data-") >= 0 && (t[a.toCamelCase(i.name.split("data-")[1])] = i.value)
                            }
                        for (var s in t) "false" === t[s] ? t[s] = !1 : "true" === t[s] ? t[s] = !0 : parseFloat(t[s]) === 1 * t[s] && (t[s] = 1 * t[s]);
                        return t
                    }
                },
                val: function(e) {
                    if ("undefined" == typeof e) return this[0] ? this[0].value : void 0;
                    for (var a = 0; a < this.length; a++) this[a].value = e;
                    return this
                },
                transform: function(e) {
                    for (var a = 0; a < this.length; a++) {
                        var t = this[a].style;
                        t.webkitTransform = t.MsTransform = t.msTransform = t.MozTransform = t.OTransform = t.transform = e
                    }
                    return this
                },
                transition: function(e) {
                    "string" != typeof e && (e += "ms");
                    for (var a = 0; a < this.length; a++) {
                        var t = this[a].style;
                        t.webkitTransitionDuration = t.MsTransitionDuration = t.msTransitionDuration = t.MozTransitionDuration = t.OTransitionDuration = t.transitionDuration = e
                    }
                    return this
                },
                on: function(e, t, n, r) {
                    function i(e) {
                        var r = e.target;
                        if (a(r).is(t)) n.call(r, e);
                        else
                            for (var i = a(r).parents(), s = 0; s < i.length; s++) a(i[s]).is(t) && n.call(i[s], e)
                    }
                    var s, o, l = e.split(" ");
                    for (s = 0; s < this.length; s++)
                        if ("function" == typeof t || t === !1)
                            for ("function" == typeof t && (n = arguments[1], r = arguments[2] || !1), o = 0; o < l.length; o++) this[s].addEventListener(l[o], n, r);
                        else
                            for (o = 0; o < l.length; o++) this[s].dom7LiveListeners || (this[s].dom7LiveListeners = []), this[s].dom7LiveListeners.push({
                                listener: n,
                                liveListener: i
                            }), this[s].addEventListener(l[o], i, r);
                    return this
                },
                off: function(e, a, t, n) {
                    for (var r = e.split(" "), i = 0; i < r.length; i++)
                        for (var s = 0; s < this.length; s++)
                            if ("function" == typeof a || a === !1) "function" == typeof a && (t = arguments[1], n = arguments[2] || !1), this[s].removeEventListener(r[i], t, n);
                            else if (this[s].dom7LiveListeners)
                        for (var o = 0; o < this[s].dom7LiveListeners.length; o++) this[s].dom7LiveListeners[o].listener === t && this[s].removeEventListener(r[i], this[s].dom7LiveListeners[o].liveListener, n);
                    return this
                },
                once: function(e, a, t, n) {
                    function r(s) {
                        t.call(s.target, s), i.off(e, a, r, n)
                    }
                    var i = this;
                    return "function" == typeof a && (t = arguments[1], n = arguments[2], a = !1), i.on(e, a, r, n)
                },
                trigger: function(e, a) {
                    for (var t = e.split(" "), n = 0; n < t.length; n++)
                        for (var r = 0; r < this.length; r++) {
                            var i;
                            try {
                                i = new CustomEvent(t[n], {
                                    detail: a,
                                    bubbles: !0,
                                    cancelable: !0
                                })
                            } catch (s) {
                                i = document.createEvent("Event"), i.initEvent(t[n], !0, !0), i.detail = a
                            }
                            this[r].dispatchEvent(i)
                        }
                    return this
                },
                transitionEnd: function(e) {
                    function a(i) {
                        if (i.target === this)
                            for (e.call(this, i), t = 0; t < n.length; t++) r.off(n[t], a)
                    }
                    var t, n = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
                        r = this;
                    if (e)
                        for (t = 0; t < n.length; t++) r.on(n[t], a);
                    return this
                },
                animationEnd: function(e) {
                    function a(i) {
                        for (e(i), t = 0; t < n.length; t++) r.off(n[t], a)
                    }
                    var t, n = ["webkitAnimationEnd", "OAnimationEnd", "MSAnimationEnd", "animationend"],
                        r = this;
                    if (e)
                        for (t = 0; t < n.length; t++) r.on(n[t], a);
                    return this
                },
                width: function() {
                    return this[0] === window ? window.innerWidth : this.length > 0 ? parseFloat(this.css("width")) : null
                },
                outerWidth: function(e) {
                    if (this.length > 0) {
                        if (e) {
                            var a = this.styles();
                            return this[0].offsetWidth + parseFloat(a.getPropertyValue("margin-right")) + parseFloat(a.getPropertyValue("margin-left"))
                        }
                        return this[0].offsetWidth
                    }
                    return null
                },
                height: function() {
                    return this[0] === window ? window.innerHeight : this.length > 0 ? parseFloat(this.css("height")) : null
                },
                outerHeight: function(e) {
                    if (this.length > 0) {
                        if (e) {
                            var a = this.styles();
                            return this[0].offsetHeight + parseFloat(a.getPropertyValue("margin-top")) + parseFloat(a.getPropertyValue("margin-bottom"))
                        }
                        return this[0].offsetHeight
                    }
                    return null
                },
                offset: function() {
                    if (this.length > 0) {
                        var e = this[0],
                            a = e.getBoundingClientRect(),
                            t = document.body,
                            n = e.clientTop || t.clientTop || 0,
                            r = e.clientLeft || t.clientLeft || 0,
                            i = window.pageYOffset || e.scrollTop,
                            s = window.pageXOffset || e.scrollLeft;
                        return {
                            top: a.top + i - n,
                            left: a.left + s - r
                        }
                    }
                    return null
                },
                hide: function() {
                    for (var e = 0; e < this.length; e++) this[e].style.display = "none";
                    return this
                },
                show: function() {
                    for (var e = 0; e < this.length; e++) this[e].style.display = "block";
                    return this
                },
                styles: function() {
                    return this[0] ? window.getComputedStyle(this[0], null) : void 0
                },
                css: function(e, a) {
                    var t;
                    if (1 === arguments.length) {
                        if ("string" != typeof e) {
                            for (t = 0; t < this.length; t++)
                                for (var n in e) this[t].style[n] = e[n];
                            return this
                        }
                        if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(e)
                    }
                    if (2 === arguments.length && "string" == typeof e) {
                        for (t = 0; t < this.length; t++) this[t].style[e] = a;
                        return this
                    }
                    return this
                },
                each: function(e) {
                    for (var a = 0; a < this.length; a++) e.call(this[a], a, this[a]);
                    return this
                },
                filter: function(a) {
                    for (var t = [], n = this, r = 0; r < n.length; r++) a.call(n[r], r, n[r]) && t.push(n[r]);
                    return new e(t)
                },
                html: function(e) {
                    if ("undefined" == typeof e) return this[0] ? this[0].innerHTML : void 0;
                    for (var a = 0; a < this.length; a++) this[a].innerHTML = e;
                    return this
                },
                text: function(e) {
                    if ("undefined" == typeof e) return this[0] ? this[0].textContent.trim() : null;
                    for (var a = 0; a < this.length; a++) this[a].textContent = e;
                    return this
                },
                is: function(t) {
                    if (!this[0] || "undefined" == typeof t) return !1;
                    var n, r;
                    if ("string" == typeof t) {
                        var i = this[0];
                        if (i === document) return t === document;
                        if (i === window) return t === window;
                        if (i.matches) return i.matches(t);
                        if (i.webkitMatchesSelector) return i.webkitMatchesSelector(t);
                        if (i.mozMatchesSelector) return i.mozMatchesSelector(t);
                        if (i.msMatchesSelector) return i.msMatchesSelector(t);
                        for (n = a(t), r = 0; r < n.length; r++)
                            if (n[r] === this[0]) return !0;
                        return !1
                    }
                    if (t === document) return this[0] === document;
                    if (t === window) return this[0] === window;
                    if (t.nodeType || t instanceof e) {
                        for (n = t.nodeType ? [t] : t, r = 0; r < n.length; r++)
                            if (n[r] === this[0]) return !0;
                        return !1
                    }
                    return !1
                },
                indexOf: function(e) {
                    for (var a = 0; a < this.length; a++)
                        if (this[a] === e) return a
                },
                index: function() {
                    if (this[0]) {
                        for (var e = this[0], a = 0; null !== (e = e.previousSibling);) 1 === e.nodeType && a++;
                        return a
                    }
                },
                eq: function(a) {
                    if ("undefined" == typeof a) return this;
                    var t, n = this.length;
                    return a > n - 1 ? new e([]) : 0 > a ? (t = n + a, new e(0 > t ? [] : [this[t]])) : new e([this[a]])
                },
                append: function(a) {
                    var t, n;
                    for (t = 0; t < this.length; t++)
                        if ("string" == typeof a) {
                            var r = document.createElement("div");
                            for (r.innerHTML = a; r.firstChild;) this[t].appendChild(r.firstChild)
                        } else if (a instanceof e)
                        for (n = 0; n < a.length; n++) this[t].appendChild(a[n]);
                    else this[t].appendChild(a);
                    return this
                },
                appendTo: function(e) {
                    return a(e).append(this), this
                },
                prepend: function(a) {
                    var t, n;
                    for (t = 0; t < this.length; t++)
                        if ("string" == typeof a) {
                            var r = document.createElement("div");
                            for (r.innerHTML = a, n = r.childNodes.length - 1; n >= 0; n--) this[t].insertBefore(r.childNodes[n], this[t].childNodes[0])
                        } else if (a instanceof e)
                        for (n = 0; n < a.length; n++) this[t].insertBefore(a[n], this[t].childNodes[0]);
                    else this[t].insertBefore(a, this[t].childNodes[0]);
                    return this
                },
                prependTo: function(e) {
                    return a(e).prepend(this), this
                },
                insertBefore: function(e) {
                    for (var t = a(e), n = 0; n < this.length; n++)
                        if (1 === t.length) t[0].parentNode.insertBefore(this[n], t[0]);
                        else if (t.length > 1)
                        for (var r = 0; r < t.length; r++) t[r].parentNode.insertBefore(this[n].cloneNode(!0), t[r])
                },
                insertAfter: function(e) {
                    for (var t = a(e), n = 0; n < this.length; n++)
                        if (1 === t.length) t[0].parentNode.insertBefore(this[n], t[0].nextSibling);
                        else if (t.length > 1)
                        for (var r = 0; r < t.length; r++) t[r].parentNode.insertBefore(this[n].cloneNode(!0), t[r].nextSibling)
                },
                next: function(t) {
                    return new e(this.length > 0 ? t ? this[0].nextElementSibling && a(this[0].nextElementSibling).is(t) ? [this[0].nextElementSibling] : [] : this[0].nextElementSibling ? [this[0].nextElementSibling] : [] : [])
                },
                nextAll: function(t) {
                    var n = [],
                        r = this[0];
                    if (!r) return new e([]);
                    for (; r.nextElementSibling;) {
                        var i = r.nextElementSibling;
                        t ? a(i).is(t) && n.push(i) : n.push(i), r = i
                    }
                    return new e(n)
                },
                prev: function(t) {
                    return new e(this.length > 0 ? t ? this[0].previousElementSibling && a(this[0].previousElementSibling).is(t) ? [this[0].previousElementSibling] : [] : this[0].previousElementSibling ? [this[0].previousElementSibling] : [] : [])
                },
                prevAll: function(t) {
                    var n = [],
                        r = this[0];
                    if (!r) return new e([]);
                    for (; r.previousElementSibling;) {
                        var i = r.previousElementSibling;
                        t ? a(i).is(t) && n.push(i) : n.push(i), r = i
                    }
                    return new e(n)
                },
                parent: function(e) {
                    for (var t = [], n = 0; n < this.length; n++) null !== this[n].parentNode && (e ? a(this[n].parentNode).is(e) && t.push(this[n].parentNode) : t.push(this[n].parentNode));
                    return a(a.unique(t))
                },
                parents: function(e) {
                    for (var t = [], n = 0; n < this.length; n++)
                        for (var r = this[n].parentNode; r;) e ? a(r).is(e) && t.push(r) : t.push(r), r = r.parentNode;
                    return a(a.unique(t))
                },
                closest: function(a) {
                    var t = this;
                    return "undefined" == typeof a ? new e([]) : (t.is(a) || (t = t.parents(a).eq(0)), t)
                },
                find: function(a) {
                    for (var t = [], n = 0; n < this.length; n++)
                        for (var r = this[n].querySelectorAll(a), i = 0; i < r.length; i++) t.push(r[i]);
                    return new e(t)
                },
                children: function(t) {
                    for (var n = [], r = 0; r < this.length; r++)
                        for (var i = this[r].childNodes, s = 0; s < i.length; s++) t ? 1 === i[s].nodeType && a(i[s]).is(t) && n.push(i[s]) : 1 === i[s].nodeType && n.push(i[s]);
                    return new e(a.unique(n))
                },
                remove: function() {
                    for (var e = 0; e < this.length; e++) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
                    return this
                },
                detach: function() {
                    return this.remove()
                },
                add: function() {
                    var e, t, n = this;
                    for (e = 0; e < arguments.length; e++) {
                        var r = a(arguments[e]);
                        for (t = 0; t < r.length; t++) n[n.length] = r[t], n.length++
                    }
                    return n
                }
            },
            function() {
                function t(t) {
                    e.prototype[t] = function(e, n, i) {
                        var s;
                        if ("undefined" == typeof e) {
                            for (s = 0; s < this.length; s++) r.indexOf(t) < 0 && (t in this[s] ? this[s][t]() : a(this[s]).trigger(t));
                            return this
                        }
                        return this.on(t, e, n, i)
                    }
                }
                for (var n = "click blur focus focusin focusout keyup keydown keypress submit change mousedown mousemove mouseup mouseenter mouseleave mouseout mouseover touchstart touchend touchmove resize scroll".split(" "), r = "resize scroll".split(" "), i = 0; i < n.length; i++) t(n[i])
            }();
        var t = {};
        a.ajaxSetup = function(e) {
            e.type && (e.method = e.type), a.each(e, function(e, a) {
                t[e] = a
            })
        };
        var n = 0;
        return a.ajax = function(e) {
                function r(n, r, i) {
                    var s = arguments;
                    n && a(document).trigger(n, r), i && (i in t && t[i](s[3], s[4], s[5], s[6]), e[i] && e[i](s[3], s[4], s[5], s[6]))
                }
                var i = {
                        method: "GET",
                        data: !1,
                        async: !0,
                        cache: !0,
                        user: "",
                        password: "",
                        headers: {},
                        xhrFields: {},
                        statusCode: {},
                        processData: !0,
                        dataType: "text",
                        contentType: "application/x-www-form-urlencoded",
                        timeout: 0
                    },
                    s = ["beforeSend", "error", "complete", "success", "statusCode"];
                e.type && (e.method = e.type), a.each(t, function(e, a) {
                    s.indexOf(e) < 0 && (i[e] = a)
                }), a.each(i, function(a, t) {
                    a in e || (e[a] = t)
                }), e.url || (e.url = window.location.toString());
                var o = e.url.indexOf("?") >= 0 ? "&" : "?",
                    l = e.method.toUpperCase();
                if (("GET" === l || "HEAD" === l || "OPTIONS" === l || "DELETE" === l) && e.data) {
                    var p;
                    p = "string" == typeof e.data ? e.data.indexOf("?") >= 0 ? e.data.split("?")[1] : e.data : a.serializeObject(e.data), p.length && (e.url += o + p, "?" === o && (o = "&"))
                }
                if ("json" === e.dataType && e.url.indexOf("callback=") >= 0) {
                    var d, c = "f7jsonp_" + Date.now() + n++,
                        u = e.url.split("callback="),
                        m = u[0] + "callback=" + c;
                    if (u[1].indexOf("&") >= 0) {
                        var f = u[1].split("&").filter(function(e) {
                            return e.indexOf("=") > 0
                        }).join("&");
                        f.length > 0 && (m += "&" + f)
                    }
                    var h = document.createElement("script");
                    return h.type = "text/javascript", h.onerror = function() {
                        clearTimeout(d), r(void 0, void 0, "error", null, "scripterror")
                    }, h.src = m, window[c] = function(e) {
                        clearTimeout(d), r(void 0, void 0, "success", e), h.parentNode.removeChild(h), h = null, delete window[c]
                    }, document.querySelector("head").appendChild(h), void(e.timeout > 0 && (d = setTimeout(function() {
                        h.parentNode.removeChild(h), h = null, r(void 0, void 0, "error", null, "timeout")
                    }, e.timeout)))
                }("GET" === l || "HEAD" === l || "OPTIONS" === l || "DELETE" === l) && e.cache === !1 && (e.url += o + "_nocache=" + Date.now());
                var g = new XMLHttpRequest;
                g.requestUrl = e.url, g.requestParameters = e, g.open(l, e.url, e.async, e.user, e.password);
                var v = null;
                if (("POST" === l || "PUT" === l || "PATCH" === l) && e.data)
                    if (e.processData) {
                        var b = [ArrayBuffer, Blob, Document, FormData];
                        if (b.indexOf(e.data.constructor) >= 0) v = e.data;
                        else {
                            var w = "---------------------------" + Date.now().toString(16);
                            "multipart/form-data" === e.contentType ? g.setRequestHeader("Content-Type", "multipart/form-data; boundary=" + w) : g.setRequestHeader("Content-Type", e.contentType), v = "";
                            var C = a.serializeObject(e.data);
                            if ("multipart/form-data" === e.contentType) {
                                w = "---------------------------" + Date.now().toString(16), C = C.split("&");
                                for (var y = [], x = 0; x < C.length; x++) y.push('Content-Disposition: form-data; name="' + C[x].split("=")[0] + '"\r\n\r\n' + C[x].split("=")[1] + "\r\n");
                                v = "--" + w + "\r\n" + y.join("--" + w + "\r\n") + "--" + w + "--\r\n"
                            } else v = "application/x-www-form-urlencoded" === e.contentType ? C : C.replace(/&/g, "\r\n")
                        }
                    } else v = e.data;
                e.headers && a.each(e.headers, function(e, a) {
                    g.setRequestHeader(e, a)
                }), "undefined" == typeof e.crossDomain && (e.crossDomain = /^([\w-]+:)?\/\/([^\/]+)/.test(e.url) && RegExp.$2 !== window.location.host), e.crossDomain || g.setRequestHeader("X-Requested-With", "XMLHttpRequest"), e.xhrFields && a.each(e.xhrFields, function(e, a) {
                    g[e] = a
                });
                var T;
                return g.onload = function(a) {
                    if (T && clearTimeout(T), g.status >= 200 && g.status < 300 || 0 === g.status) {
                        var n;
                        if ("json" === e.dataType) try {
                            n = JSON.parse(g.responseText), r("ajaxSuccess", {
                                xhr: g
                            }, "success", n, g.status, g)
                        } catch (i) {
                            r("ajaxError", {
                                xhr: g,
                                parseerror: !0
                            }, "error", g, "parseerror")
                        } else n = "text" === g.responseType || "" === g.responseType ? g.responseText : g.response, r("ajaxSuccess", {
                            xhr: g
                        }, "success", n, g.status, g)
                    } else r("ajaxError", {
                        xhr: g
                    }, "error", g, g.status);
                    e.statusCode && (t.statusCode && t.statusCode[g.status] && t.statusCode[g.status](g), e.statusCode[g.status] && e.statusCode[g.status](g)), r("ajaxComplete", {
                        xhr: g
                    }, "complete", g, g.status)
                }, g.onerror = function(e) {
                    T && clearTimeout(T), r("ajaxError", {
                        xhr: g
                    }, "error", g, g.status)
                }, r("ajaxStart", {
                    xhr: g
                }, "start", g), r(void 0, void 0, "beforeSend", g), g.send(v), e.timeout > 0 && (g.onabort = function() {
                    T && clearTimeout(T)
                }, T = setTimeout(function() {
                    g.abort(), r("ajaxError", {
                        xhr: g,
                        timeout: !0
                    }, "error", g, "timeout"), r("ajaxComplete", {
                        xhr: g,
                        timeout: !0
                    }, "complete", g, "timeout")
                }, e.timeout)), g
            },
            function() {
                function e(e) {
                    a[e] = function(t, n, r) {
                        return a.ajax({
                            url: t,
                            method: "post" === e ? "POST" : "GET",
                            data: "function" == typeof n ? void 0 : n,
                            success: "function" == typeof n ? n : r,
                            dataType: "getJSON" === e ? "json" : void 0
                        })
                    }
                }
                for (var t = "get post getJSON".split(" "), n = 0; n < t.length; n++) e(t[n])
            }(), a.parseUrlQuery = function(e) {
                var a, t, n, r = {};
                if (!(e.indexOf("?") >= 0)) return r;
                for (e = e.split("?")[1], t = e.split("&"), a = 0; a < t.length; a++) n = t[a].split("="), r[n[0]] = n[1];
                return r
            }, a.isArray = function(e) {
                return "[object Array]" === Object.prototype.toString.apply(e) ? !0 : !1
            }, a.each = function(t, n) {
                if ("object" == typeof t && n) {
                    var r, i;
                    if (a.isArray(t) || t instanceof e)
                        for (r = 0; r < t.length; r++) n(r, t[r]);
                    else
                        for (i in t) t.hasOwnProperty(i) && n(i, t[i])
                }
            }, a.unique = function(e) {
                for (var a = [], t = 0; t < e.length; t++) - 1 === a.indexOf(e[t]) && a.push(e[t]);
                return a
            }, a.serializeObject = a.param = function(e, t) {
                function n(e) {
                    if (t.length > 0) {
                        for (var a = "", n = 0; n < t.length; n++) a += 0 === n ? t[n] : "[" + encodeURIComponent(t[n]) + "]";
                        return a + "[" + encodeURIComponent(e) + "]"
                    }
                    return encodeURIComponent(e)
                }

                function r(e) {
                    return encodeURIComponent(e)
                }
                if ("string" == typeof e) return e;
                var i = [],
                    s = "&";
                t = t || [];
                var o;
                for (var l in e)
                    if (e.hasOwnProperty(l)) {
                        var p;
                        if (a.isArray(e[l])) {
                            p = [];
                            for (var d = 0; d < e[l].length; d++) a.isArray(e[l][d]) || "object" != typeof e[l][d] ? p.push(n(l) + "[]=" + r(e[l][d])) : (o = t.slice(), o.push(l), o.push(d + ""), p.push(a.serializeObject(e[l][d], o)));
                            p.length > 0 && i.push(p.join(s))
                        } else "object" == typeof e[l] ? (o = t.slice(), o.push(l), p = a.serializeObject(e[l], o), "" !== p && i.push(p)) : "undefined" != typeof e[l] && "" !== e[l] && i.push(n(l) + "=" + r(e[l]))
                    } return i.join(s)
            }, a.toCamelCase = function(e) {
                return e.toLowerCase().replace(/-(.)/g, function(e, a) {
                    return a.toUpperCase()
                })
            }, a.dataset = function(e) {
                return a(e).dataset()
            }, a.getTranslate = function(e, a) {
                var t, n, r, i;
                return "undefined" == typeof a && (a = "x"), r = window.getComputedStyle(e, null), window.WebKitCSSMatrix ? (n = r.transform || r.webkitTransform, n.split(",").length > 6 && (n = n.split(", ").map(function(e) {
                    return e.replace(",", ".")
                }).join(", ")), i = new WebKitCSSMatrix("none" === n ? "" : n)) : (i = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), t = i.toString().split(",")), "x" === a && (n = window.WebKitCSSMatrix ? i.m41 : 16 === t.length ? parseFloat(t[12]) : parseFloat(t[4])), "y" === a && (n = window.WebKitCSSMatrix ? i.m42 : 16 === t.length ? parseFloat(t[13]) : parseFloat(t[5])), n || 0
            }, a.requestAnimationFrame = function(e) {
                return window.requestAnimationFrame ? window.requestAnimationFrame(e) : window.webkitRequestAnimationFrame ? window.webkitRequestAnimationFrame(e) : window.mozRequestAnimationFrame ? window.mozRequestAnimationFrame(e) : window.setTimeout(e, 1e3 / 60)
            }, a.cancelAnimationFrame = function(e) {
                return window.cancelAnimationFrame ? window.cancelAnimationFrame(e) : window.webkitCancelAnimationFrame ? window.webkitCancelAnimationFrame(e) : window.mozCancelAnimationFrame ? window.mozCancelAnimationFrame(e) : window.clearTimeout(e)
            }, a.supportTouch = !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch), a.fn = e.prototype, a.fn.scrollTo = function(e, t, n, r, i) {
                return 4 === arguments.length && "function" == typeof r && (i = r, r = void 0), this.each(function() {
                    function s(e) {
                        void 0 === e && (e = (new Date).getTime()), null === b && (b = e);
                        var t, p = Math.max(Math.min((e - b) / n, 1), 0),
                            d = "linear" === r ? p : .5 - Math.cos(p * Math.PI) / 2;
                        return g && (m = o + d * (c - o)), v && (f = l + d * (u - l)), g && c > o && m >= c && (h.scrollTop = c, t = !0), g && o > c && c >= m && (h.scrollTop = c, t = !0), v && u > l && f >= u && (h.scrollLeft = u, t = !0), v && l > u && u >= f && (h.scrollLeft = u, t = !0), t ? void(i && i()) : (g && (h.scrollTop = m), v && (h.scrollLeft = f), void a.requestAnimationFrame(s))
                    }
                    var o, l, p, d, c, u, m, f, h = this,
                        g = t > 0 || 0 === t,
                        v = e > 0 || 0 === e;
                    if ("undefined" == typeof r && (r = "swing"), g && (o = h.scrollTop, n || (h.scrollTop = t)), v && (l = h.scrollLeft, n || (h.scrollLeft = e)), n) {
                        g && (p = h.scrollHeight - h.offsetHeight, c = Math.max(Math.min(t, p), 0)), v && (d = h.scrollWidth - h.offsetWidth, u = Math.max(Math.min(e, d), 0));
                        var b = null;
                        g && c === o && (g = !1), v && u === l && (v = !1), a.requestAnimationFrame(s)
                    }
                })
            }, a.fn.scrollTop = function(e, a, t, n) {
                3 === arguments.length && "function" == typeof t && (n = t, t = void 0);
                var r = this;
                return "undefined" == typeof e ? r.length > 0 ? r[0].scrollTop : null : r.scrollTo(void 0, e, a, t, n)
            }, a.fn.scrollLeft = function(e, a, t, n) {
                3 === arguments.length && "function" == typeof t && (n = t, t = void 0);
                var r = this;
                return "undefined" == typeof e ? r.length > 0 ? r[0].scrollLeft : null : r.scrollTo(e, void 0, a, t, n)
            }, a
    }();
    Framework7.$ = e;
    var a = e;
    window.Dom7 = e, Framework7.prototype.support = function() {
        var e = {
            touch: !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch)
        };
        return e
    }(), Framework7.prototype.device = function() {
        var a = {},
            t = navigator.userAgent,
            n = e,
            r = t.match(/(Android);?[\s\/]+([\d.]+)?/),
            i = t.match(/(iPad).*OS\s([\d_]+)/),
            s = t.match(/(iPod)(.*OS\s([\d_]+))?/),
            o = !i && t.match(/(iPhone\sOS)\s([\d_]+)/);
        if (a.ios = a.android = a.iphone = a.ipad = a.androidChrome = !1, r && (a.os = "android", a.osVersion = r[2], a.android = !0, a.androidChrome = t.toLowerCase().indexOf("chrome") >= 0), (i || o || s) && (a.os = "ios", a.ios = !0), o && !s && (a.osVersion = o[2].replace(/_/g, "."), a.iphone = !0), i && (a.osVersion = i[2].replace(/_/g, "."), a.ipad = !0), s && (a.osVersion = s[3] ? s[3].replace(/_/g, ".") : null, a.iphone = !0), a.ios && a.osVersion && t.indexOf("Version/") >= 0 && "10" === a.osVersion.split(".")[0] && (a.osVersion = t.toLowerCase().split("version/")[1].split(" ")[0]), a.webView = (o || i || s) && t.match(/.*AppleWebKit(?!.*Safari)/i), a.os && "ios" === a.os) {
            var l = a.osVersion.split(".");
            a.minimalUi = !a.webView && (s || o) && (1 * l[0] === 7 ? 1 * l[1] >= 1 : 1 * l[0] > 7) && n('meta[name="viewport"]').length > 0 && n('meta[name="viewport"]').attr("content").indexOf("minimal-ui") >= 0
        }
        var p = n(window).width(),
            d = n(window).height();
        a.statusBar = !1, a.webView && p * d === screen.width * screen.height ? a.statusBar = !0 : a.statusBar = !1;
        var c = [];
        if (a.pixelRatio = window.devicePixelRatio || 1, c.push("pixel-ratio-" + Math.floor(a.pixelRatio)), a.pixelRatio >= 2 && c.push("retina"), a.os && (c.push(a.os, a.os + "-" + a.osVersion.split(".")[0], a.os + "-" + a.osVersion.replace(/\./g, "-")), "ios" === a.os))
            for (var u = parseInt(a.osVersion.split(".")[0], 10), m = u - 1; m >= 6; m--) c.push("ios-gt-" + m);
        return a.statusBar ? c.push("with-statusbar-overlay") : n("html").removeClass("with-statusbar-overlay"), c.length > 0 && n("html").addClass(c.join(" ")), a
    }(), Framework7.prototype.plugins = {}, window.Template7 = function() {
        function e(e) {
            return "[object Array]" === Object.prototype.toString.apply(e)
        }

        function a(e) {
            return "function" == typeof e
        }

        function t(e) {
            var a, t, n, r = e.replace(/[{}#}]/g, "").split(" "),
                i = [];
            for (t = 0; t < r.length; t++) {
                var s = r[t];
                if (0 === t) i.push(s);
                else if (0 === s.indexOf('"'))
                    if (2 === s.match(/"/g).length) i.push(s);
                    else {
                        for (a = 0, n = t + 1; n < r.length; n++)
                            if (s += " " + r[n], r[n].indexOf('"') >= 0) {
                                a = n, i.push(s);
                                break
                            } a && (t = a)
                    }
                else if (s.indexOf("=") > 0) {
                    var o = s.split("="),
                        l = o[0],
                        p = o[1];
                    if (2 !== p.match(/"/g).length) {
                        for (a = 0, n = t + 1; n < r.length; n++)
                            if (p += " " + r[n], r[n].indexOf('"') >= 0) {
                                a = n;
                                break
                            } a && (t = a)
                    }
                    var d = [l, p.replace(/"/g, "")];
                    i.push(d)
                } else i.push(s)
            }
            return i
        }

        function n(a) {
            var n, r, i = [];
            if (!a) return [];
            var s = a.split(/({{[^{^}]*}})/);
            for (n = 0; n < s.length; n++) {
                var o = s[n];
                if ("" !== o)
                    if (o.indexOf("{{") < 0) i.push({
                        type: "plain",
                        content: o
                    });
                    else {
                        if (o.indexOf("{/") >= 0) continue;
                        if (o.indexOf("{#") < 0 && o.indexOf(" ") < 0 && o.indexOf("else") < 0) {
                            i.push({
                                type: "variable",
                                contextName: o.replace(/[{}]/g, "")
                            });
                            continue
                        }
                        var l = t(o),
                            p = l[0],
                            d = ">" === p,
                            c = [],
                            u = {};
                        for (r = 1; r < l.length; r++) {
                            var m = l[r];
                            e(m) ? u[m[0]] = "false" === m[1] ? !1 : m[1] : c.push(m)
                        }
                        if (o.indexOf("{#") >= 0) {
                            var f, h = "",
                                g = "",
                                v = 0,
                                b = !1,
                                w = !1,
                                C = 0;
                            for (r = n + 1; r < s.length; r++)
                                if (s[r].indexOf("{{#") >= 0 && C++, s[r].indexOf("{{/") >= 0 && C--, s[r].indexOf("{{#" + p) >= 0) h += s[r], w && (g += s[r]), v++;
                                else if (s[r].indexOf("{{/" + p) >= 0) {
                                if (!(v > 0)) {
                                    f = r, b = !0;
                                    break
                                }
                                v--, h += s[r], w && (g += s[r])
                            } else s[r].indexOf("else") >= 0 && 0 === C ? w = !0 : (w || (h += s[r]), w && (g += s[r]));
                            b && (f && (n = f), i.push({
                                type: "helper",
                                helperName: p,
                                contextName: c,
                                content: h,
                                inverseContent: g,
                                hash: u
                            }))
                        } else o.indexOf(" ") > 0 && (d && (p = "_partial", c[0] && (c[0] = '"' + c[0].replace(/"|'/g, "") + '"')), i.push({
                            type: "helper",
                            helperName: p,
                            contextName: c,
                            hash: u
                        }))
                    }
            }
            return i
        }
        var r = function(e) {
            function a(e, a) {
                return e.content ? s(e.content, a) : function() {
                    return ""
                }
            }

            function t(e, a) {
                return e.inverseContent ? s(e.inverseContent, a) : function() {
                    return ""
                }
            }

            function r(e, a) {
                var t, n, r = 0;
                if (0 === e.indexOf("../")) {
                    r = e.split("../").length - 1;
                    var i = a.split("_")[1] - r;
                    a = "ctx_" + (i >= 1 ? i : 1), n = e.split("../")[r].split(".")
                } else 0 === e.indexOf("@global") ? (a = "Template7.global", n = e.split("@global.")[1].split(".")) : 0 === e.indexOf("@root") ? (a = "root", n = e.split("@root.")[1].split(".")) : n = e.split(".");
                t = a;
                for (var s = 0; s < n.length; s++) {
                    var o = n[s];
                    0 === o.indexOf("@") ? s > 0 ? t += "[(data && data." + o.replace("@", "") + ")]" : t = "(data && data." + e.replace("@", "") + ")" : isFinite(o) ? t += "[" + o + "]" : 0 === o.indexOf("this") ? t = o.replace("this", a) : t += "." + o
                }
                return t
            }

            function i(e, a) {
                for (var t = [], n = 0; n < e.length; n++) 0 === e[n].indexOf('"') ? t.push(e[n]) : t.push(r(e[n], a));
                return t.join(", ")
            }

            function s(e, s) {
                if (s = s || 1, e = e || o.template, "string" != typeof e) throw new Error("Template7: Template must be a string");
                var l = n(e);
                if (0 === l.length) return function() {
                    return ""
                };
                var p = "ctx_" + s,
                    d = "";
                d += 1 === s ? "(function (" + p + ", data, root) {\n" : "(function (" + p + ", data) {\n", 1 === s && (d += "function isArray(arr){return Object.prototype.toString.apply(arr) === '[object Array]';}\n", d += "function isFunction(func){return (typeof func === 'function');}\n", d += 'function c(val, ctx) {if (typeof val !== "undefined" && val !== null) {if (isFunction(val)) {return val.call(ctx);} else return val;} else return "";}\n', d += "root = root || ctx_1 || {};\n"), d += "var r = '';\n";
                var c;
                for (c = 0; c < l.length; c++) {
                    var u = l[c];
                    if ("plain" !== u.type) {
                        var m, f;
                        if ("variable" === u.type && (m = r(u.contextName, p), d += "r += c(" + m + ", " + p + ");"), "helper" === u.type)
                            if (u.helperName in o.helpers) f = i(u.contextName, p), d += "r += (Template7.helpers." + u.helperName + ").call(" + p + ", " + (f && f + ", ") + "{hash:" + JSON.stringify(u.hash) + ", data: data || {}, fn: " + a(u, s + 1) + ", inverse: " + t(u, s + 1) + ", root: root});";
                            else {
                                if (u.contextName.length > 0) throw new Error('Template7: Missing helper: "' + u.helperName + '"');
                                m = r(u.helperName, p), d += "if (" + m + ") {", d += "if (isArray(" + m + ")) {", d += "r += (Template7.helpers.each).call(" + p + ", " + m + ", {hash:" + JSON.stringify(u.hash) + ", data: data || {}, fn: " + a(u, s + 1) + ", inverse: " + t(u, s + 1) + ", root: root});", d += "}else {",
                                    d += "r += (Template7.helpers.with).call(" + p + ", " + m + ", {hash:" + JSON.stringify(u.hash) + ", data: data || {}, fn: " + a(u, s + 1) + ", inverse: " + t(u, s + 1) + ", root: root});", d += "}}"
                            }
                    } else d += "r +='" + u.content.replace(/\r/g, "\\r").replace(/\n/g, "\\n").replace(/'/g, "\\'") + "';"
                }
                return d += "\nreturn r;})", eval.call(window, d)
            }
            var o = this;
            o.template = e, o.compile = function(e) {
                return o.compiled || (o.compiled = s(e)), o.compiled
            }
        };
        r.prototype = {
            options: {},
            partials: {},
            helpers: {
                _partial: function(e, a) {
                    var t = r.prototype.partials[e];
                    if (!t || t && !t.template) return "";
                    t.compiled || (t.compiled = i.compile(t.template));
                    var n = this;
                    for (var s in a.hash) n[s] = a.hash[s];
                    return t.compiled(n, a.data, a.root)
                },
                escape: function(e, a) {
                    if ("string" != typeof e) throw new Error('Template7: Passed context to "escape" helper should be a string');
                    return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                },
                "if": function(e, t) {
                    return a(e) && (e = e.call(this)), e ? t.fn(this, t.data) : t.inverse(this, t.data)
                },
                unless: function(e, t) {
                    return a(e) && (e = e.call(this)), e ? t.inverse(this, t.data) : t.fn(this, t.data)
                },
                each: function(t, n) {
                    var r = "",
                        i = 0;
                    if (a(t) && (t = t.call(this)), e(t)) {
                        for (n.hash.reverse && (t = t.reverse()), i = 0; i < t.length; i++) r += n.fn(t[i], {
                            first: 0 === i,
                            last: i === t.length - 1,
                            index: i
                        });
                        n.hash.reverse && (t = t.reverse())
                    } else
                        for (var s in t) i++, r += n.fn(t[s], {
                            key: s
                        });
                    return i > 0 ? r : n.inverse(this)
                },
                "with": function(e, t) {
                    return a(e) && (e = e.call(this)), t.fn(e)
                },
                join: function(e, t) {
                    return a(e) && (e = e.call(this)), e.join(t.hash.delimiter || t.hash.delimeter)
                },
                js: function(e, a) {
                    var t;
                    return t = e.indexOf("return") >= 0 ? "(function(){" + e + "})" : "(function(){return (" + e + ")})", eval.call(this, t).call(this)
                },
                js_compare: function(e, a) {
                    var t;
                    t = e.indexOf("return") >= 0 ? "(function(){" + e + "})" : "(function(){return (" + e + ")})";
                    var n = eval.call(this, t).call(this);
                    return n ? a.fn(this, a.data) : a.inverse(this, a.data)
                }
            }
        };
        var i = function(e, a) {
            if (2 === arguments.length) {
                var t = new r(e),
                    n = t.compile()(a);
                return t = null, n
            }
            return new r(e)
        };
        return i.registerHelper = function(e, a) {
            r.prototype.helpers[e] = a
        }, i.unregisterHelper = function(e) {
            r.prototype.helpers[e] = void 0, delete r.prototype.helpers[e]
        }, i.registerPartial = function(e, a) {
            r.prototype.partials[e] = {
                template: a
            }
        }, i.unregisterPartial = function(e, a) {
            r.prototype.partials[e] && (r.prototype.partials[e] = void 0, delete r.prototype.partials[e])
        }, i.compile = function(e, a) {
            var t = new r(e, a);
            return t.compile()
        }, i.options = r.prototype.options, i.helpers = r.prototype.helpers, i.partials = r.prototype.partials, i
    }(), window.Swiper = function(t, n) {
        function r(e) {
            return Math.floor(e)
        }

        function i() {
            v.autoplayTimeoutId = setTimeout(function() {
                v.params.loop ? (v.fixLoop(), v._slideNext(), v.emit("onAutoplay", v)) : v.isEnd ? n.autoplayStopOnLast ? v.stopAutoplay() : (v._slideTo(0), v.emit("onAutoplay", v)) : (v._slideNext(), v.emit("onAutoplay", v))
            }, v.params.autoplay)
        }

        function s(e, t) {
            var n = a(e.target);
            if (!n.is(t))
                if ("string" == typeof t) n = n.parents(t);
                else if (t.nodeType) {
                var r;
                return n.parents().each(function(e, a) {
                    a === t && (r = t)
                }), r ? t : void 0
            }
            if (0 !== n.length) return n[0]
        }

        function o(e, a) {
            a = a || {};
            var t = window.MutationObserver || window.WebkitMutationObserver,
                n = new t(function(e) {
                    e.forEach(function(e) {
                        v.onResize(!0), v.emit("onObserverUpdate", v, e)
                    })
                });
            n.observe(e, {
                attributes: "undefined" == typeof a.attributes ? !0 : a.attributes,
                childList: "undefined" == typeof a.childList ? !0 : a.childList,
                characterData: "undefined" == typeof a.characterData ? !0 : a.characterData
            }), v.observers.push(n)
        }

        function l(e, t) {
            e = a(e);
            var n, r, i, s = v.rtl ? -1 : 1;
            n = e.attr("data-swiper-parallax") || "0", r = e.attr("data-swiper-parallax-x"), i = e.attr("data-swiper-parallax-y"), r || i ? (r = r || "0", i = i || "0") : v.isHorizontal() ? (r = n, i = "0") : (i = n, r = "0"), r = r.indexOf("%") >= 0 ? parseInt(r, 10) * t * s + "%" : r * t * s + "px", i = i.indexOf("%") >= 0 ? parseInt(i, 10) * t + "%" : i * t + "px", e.transform("translate3d(" + r + ", " + i + ",0px)")
        }

        function p(e) {
            return 0 !== e.indexOf("on") && (e = e[0] !== e[0].toUpperCase() ? "on" + e[0].toUpperCase() + e.substring(1) : "on" + e), e
        }
        if (!(this instanceof Swiper)) return new Swiper(t, n);
        var d = {
                direction: "horizontal",
                touchEventsTarget: "container",
                initialSlide: 0,
                speed: 300,
                autoplay: !1,
                autoplayDisableOnInteraction: !0,
                autoplayStopOnLast: !1,
                iOSEdgeSwipeDetection: !1,
                iOSEdgeSwipeThreshold: 20,
                freeMode: !1,
                freeModeMomentum: !0,
                freeModeMomentumRatio: 1,
                freeModeMomentumBounce: !0,
                freeModeMomentumBounceRatio: 1,
                freeModeSticky: !1,
                freeModeMinimumVelocity: .02,
                autoHeight: !1,
                setWrapperSize: !1,
                virtualTranslate: !1,
                effect: "slide",
                coverflow: {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: !0
                },
                flip: {
                    slideShadows: !0,
                    limitRotation: !0
                },
                cube: {
                    slideShadows: !0,
                    shadow: !0,
                    shadowOffset: 20,
                    shadowScale: .94
                },
                fade: {
                    crossFade: !1
                },
                parallax: !1,
                scrollbar: null,
                scrollbarHide: !0,
                scrollbarDraggable: !1,
                scrollbarSnapOnRelease: !1,
                keyboardControl: !1,
                mousewheelControl: !1,
                mousewheelReleaseOnEdges: !1,
                mousewheelInvert: !1,
                mousewheelForceToAxis: !1,
                mousewheelSensitivity: 1,
                hashnav: !1,
                breakpoints: void 0,
                spaceBetween: 0,
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerColumnFill: "column",
                slidesPerGroup: 1,
                centeredSlides: !1,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
                roundLengths: !1,
                touchRatio: 1,
                touchAngle: 45,
                simulateTouch: !0,
                shortSwipes: !0,
                longSwipes: !0,
                longSwipesRatio: .5,
                longSwipesMs: 300,
                followFinger: !0,
                onlyExternal: !1,
                threshold: 0,
                touchMoveStopPropagation: !0,
                uniqueNavElements: !0,
                pagination: null,
                paginationElement: "span",
                paginationClickable: !1,
                paginationHide: !1,
                paginationBulletRender: null,
                paginationProgressRender: null,
                paginationFractionRender: null,
                paginationCustomRender: null,
                paginationType: "bullets",
                resistance: !0,
                resistanceRatio: .85,
                nextButton: null,
                prevButton: null,
                watchSlidesProgress: !1,
                watchSlidesVisibility: !1,
                grabCursor: !1,
                preventClicks: !0,
                preventClicksPropagation: !0,
                slideToClickedSlide: !1,
                lazyLoading: !1,
                lazyLoadingInPrevNext: !1,
                lazyLoadingInPrevNextAmount: 1,
                lazyLoadingOnTransitionStart: !1,
                preloadImages: !0,
                updateOnImagesReady: !0,
                loop: !1,
                loopAdditionalSlides: 0,
                loopedSlides: null,
                control: void 0,
                controlInverse: !1,
                controlBy: "slide",
                allowSwipeToPrev: !0,
                allowSwipeToNext: !0,
                swipeHandler: null,
                noSwiping: !0,
                noSwipingClass: "swiper-no-swiping",
                slideClass: "swiper-slide",
                slideActiveClass: "swiper-slide-active",
                slideVisibleClass: "swiper-slide-visible",
                slideDuplicateClass: "swiper-slide-duplicate",
                slideNextClass: "swiper-slide-next",
                slidePrevClass: "swiper-slide-prev",
                wrapperClass: "swiper-wrapper",
                bulletClass: "swiper-pagination-bullet",
                bulletActiveClass: "swiper-pagination-bullet-active",
                buttonDisabledClass: "swiper-button-disabled",
                paginationCurrentClass: "swiper-pagination-current",
                paginationTotalClass: "swiper-pagination-total",
                paginationHiddenClass: "swiper-pagination-hidden",
                paginationProgressbarClass: "swiper-pagination-progressbar",
                observer: !1,
                observeParents: !1,
                a11y: !1,
                prevSlideMessage: "Previous slide",
                nextSlideMessage: "Next slide",
                firstSlideMessage: "This is the first slide",
                lastSlideMessage: "This is the last slide",
                paginationBulletMessage: "Go to slide {{index}}",
                runCallbacksOnInit: !0
            },
            c = n && n.virtualTranslate;
        n = n || {};
        var u = {};
        for (var m in n)
            if ("object" != typeof n[m] || null === n[m] || (n[m].nodeType || n[m] === window || n[m] === document || "undefined" != typeof e && n[m] instanceof e || "undefined" != typeof jQuery && n[m] instanceof jQuery)) u[m] = n[m];
            else {
                u[m] = {};
                for (var f in n[m]) u[m][f] = n[m][f]
            } for (var h in d)
            if ("undefined" == typeof n[h]) n[h] = d[h];
            else if ("object" == typeof n[h])
            for (var g in d[h]) "undefined" == typeof n[h][g] && (n[h][g] = d[h][g]);
        var v = this;
        if (v.params = n, v.originalParams = u, v.classNames = [], "undefined" != typeof a && "undefined" != typeof e && (a = e), ("undefined" != typeof a || (a = "undefined" == typeof e ? window.Dom7 || window.Zepto || window.jQuery : e)) && (v.$ = a, v.currentBreakpoint = void 0, v.getActiveBreakpoint = function() {
                if (!v.params.breakpoints) return !1;
                var e, a = !1,
                    t = [];
                for (e in v.params.breakpoints) v.params.breakpoints.hasOwnProperty(e) && t.push(e);
                t.sort(function(e, a) {
                    return parseInt(e, 10) > parseInt(a, 10)
                });
                for (var n = 0; n < t.length; n++) e = t[n], e >= window.innerWidth && !a && (a = e);
                return a || "max"
            }, v.setBreakpoint = function() {
                var e = v.getActiveBreakpoint();
                if (e && v.currentBreakpoint !== e) {
                    var a = e in v.params.breakpoints ? v.params.breakpoints[e] : v.originalParams,
                        t = v.params.loop && a.slidesPerView !== v.params.slidesPerView;
                    for (var n in a) v.params[n] = a[n];
                    v.currentBreakpoint = e, t && v.destroyLoop && v.reLoop(!0)
                }
            }, v.params.breakpoints && v.setBreakpoint(), v.container = a(t), 0 !== v.container.length)) {
            if (v.container.length > 1) {
                var b = [];
                return v.container.each(function() {
                    b.push(new Swiper(this, n))
                }), b
            }
            v.container[0].swiper = v, v.container.data("swiper", v), v.classNames.push("swiper-container-" + v.params.direction), v.params.freeMode && v.classNames.push("swiper-container-free-mode"), v.support.flexbox || (v.classNames.push("swiper-container-no-flexbox"), v.params.slidesPerColumn = 1), v.params.autoHeight && v.classNames.push("swiper-container-autoheight"), (v.params.parallax || v.params.watchSlidesVisibility) && (v.params.watchSlidesProgress = !0), ["cube", "coverflow", "flip"].indexOf(v.params.effect) >= 0 && (v.support.transforms3d ? (v.params.watchSlidesProgress = !0, v.classNames.push("swiper-container-3d")) : v.params.effect = "slide"), "slide" !== v.params.effect && v.classNames.push("swiper-container-" + v.params.effect), "cube" === v.params.effect && (v.params.resistanceRatio = 0, v.params.slidesPerView = 1, v.params.slidesPerColumn = 1, v.params.slidesPerGroup = 1, v.params.centeredSlides = !1, v.params.spaceBetween = 0, v.params.virtualTranslate = !0, v.params.setWrapperSize = !1), ("fade" === v.params.effect || "flip" === v.params.effect) && (v.params.slidesPerView = 1, v.params.slidesPerColumn = 1, v.params.slidesPerGroup = 1, v.params.watchSlidesProgress = !0, v.params.spaceBetween = 0, v.params.setWrapperSize = !1, "undefined" == typeof c && (v.params.virtualTranslate = !0)), v.params.grabCursor && v.support.touch && (v.params.grabCursor = !1), v.wrapper = v.container.children("." + v.params.wrapperClass), v.params.pagination && (v.paginationContainer = a(v.params.pagination), v.params.uniqueNavElements && "string" == typeof v.params.pagination && v.paginationContainer.length > 1 && 1 === v.container.find(v.params.pagination).length && (v.paginationContainer = v.container.find(v.params.pagination)), "bullets" === v.params.paginationType && v.params.paginationClickable ? v.paginationContainer.addClass("swiper-pagination-clickable") : v.params.paginationClickable = !1, v.paginationContainer.addClass("swiper-pagination-" + v.params.paginationType)), (v.params.nextButton || v.params.prevButton) && (v.params.nextButton && (v.nextButton = a(v.params.nextButton), v.params.uniqueNavElements && "string" == typeof v.params.nextButton && v.nextButton.length > 1 && 1 === v.container.find(v.params.nextButton).length && (v.nextButton = v.container.find(v.params.nextButton))), v.params.prevButton && (v.prevButton = a(v.params.prevButton), v.params.uniqueNavElements && "string" == typeof v.params.prevButton && v.prevButton.length > 1 && 1 === v.container.find(v.params.prevButton).length && (v.prevButton = v.container.find(v.params.prevButton)))), v.isHorizontal = function() {
                return "horizontal" === v.params.direction
            }, v.rtl = v.isHorizontal() && ("rtl" === v.container[0].dir.toLowerCase() || "rtl" === v.container.css("direction")), v.rtl && v.classNames.push("swiper-container-rtl"), v.rtl && (v.wrongRTL = "-webkit-box" === v.wrapper.css("display")), v.params.slidesPerColumn > 1 && v.classNames.push("swiper-container-multirow"), v.device.android && v.classNames.push("swiper-container-android"), v.container.addClass(v.classNames.join(" ")), v.translate = 0, v.progress = 0, v.velocity = 0, v.lockSwipeToNext = function() {
                v.params.allowSwipeToNext = !1
            }, v.lockSwipeToPrev = function() {
                v.params.allowSwipeToPrev = !1
            }, v.lockSwipes = function() {
                v.params.allowSwipeToNext = v.params.allowSwipeToPrev = !1
            }, v.unlockSwipeToNext = function() {
                v.params.allowSwipeToNext = !0
            }, v.unlockSwipeToPrev = function() {
                v.params.allowSwipeToPrev = !0
            }, v.unlockSwipes = function() {
                v.params.allowSwipeToNext = v.params.allowSwipeToPrev = !0
            }, v.params.grabCursor && (v.container[0].style.cursor = "move", v.container[0].style.cursor = "-webkit-grab", v.container[0].style.cursor = "-moz-grab", v.container[0].style.cursor = "grab"), v.imagesToLoad = [], v.imagesLoaded = 0, v.loadImage = function(e, a, t, n, r) {
                function i() {
                    r && r()
                }
                var s;
                e.complete && n ? i() : a ? (s = new window.Image, s.onload = i, s.onerror = i, t && (s.srcset = t), a && (s.src = a)) : i()
            }, v.preloadImages = function() {
                function e() {
                    "undefined" != typeof v && null !== v && (void 0 !== v.imagesLoaded && v.imagesLoaded++, v.imagesLoaded === v.imagesToLoad.length && (v.params.updateOnImagesReady && v.update(), v.emit("onImagesReady", v)))
                }
                v.imagesToLoad = v.container.find("img");
                for (var a = 0; a < v.imagesToLoad.length; a++) v.loadImage(v.imagesToLoad[a], v.imagesToLoad[a].currentSrc || v.imagesToLoad[a].getAttribute("src"), v.imagesToLoad[a].srcset || v.imagesToLoad[a].getAttribute("srcset"), !0, e)
            }, v.autoplayTimeoutId = void 0, v.autoplaying = !1, v.autoplayPaused = !1, v.startAutoplay = function() {
                return "undefined" != typeof v.autoplayTimeoutId ? !1 : v.params.autoplay ? v.autoplaying ? !1 : (v.autoplaying = !0, v.emit("onAutoplayStart", v), void i()) : !1
            }, v.stopAutoplay = function(e) {
                v.autoplayTimeoutId && (v.autoplayTimeoutId && clearTimeout(v.autoplayTimeoutId), v.autoplaying = !1, v.autoplayTimeoutId = void 0, v.emit("onAutoplayStop", v))
            }, v.pauseAutoplay = function(e) {
                v.autoplayPaused || (v.autoplayTimeoutId && clearTimeout(v.autoplayTimeoutId), v.autoplayPaused = !0, 0 === e ? (v.autoplayPaused = !1, i()) : v.wrapper.transitionEnd(function() {
                    v && (v.autoplayPaused = !1, v.autoplaying ? i() : v.stopAutoplay())
                }))
            }, v.minTranslate = function() {
                return -v.snapGrid[0]
            }, v.maxTranslate = function() {
                return -v.snapGrid[v.snapGrid.length - 1]
            }, v.updateAutoHeight = function() {
                var e = v.slides.eq(v.activeIndex)[0];
                if ("undefined" != typeof e) {
                    var a = e.offsetHeight;
                    a && v.wrapper.css("height", a + "px")
                }
            }, v.updateContainerSize = function() {
                var e, a;
                e = "undefined" != typeof v.params.width ? v.params.width : v.container[0].clientWidth, a = "undefined" != typeof v.params.height ? v.params.height : v.container[0].clientHeight, 0 === e && v.isHorizontal() || 0 === a && !v.isHorizontal() || (e = e - parseInt(v.container.css("padding-left"), 10) - parseInt(v.container.css("padding-right"), 10), a = a - parseInt(v.container.css("padding-top"), 10) - parseInt(v.container.css("padding-bottom"), 10), v.width = e, v.height = a, v.size = v.isHorizontal() ? v.width : v.height)
            }, v.updateSlidesSize = function() {
                v.slides = v.wrapper.children("." + v.params.slideClass), v.snapGrid = [], v.slidesGrid = [], v.slidesSizesGrid = [];
                var e, a = v.params.spaceBetween,
                    t = -v.params.slidesOffsetBefore,
                    n = 0,
                    i = 0;
                if ("undefined" != typeof v.size) {
                    "string" == typeof a && a.indexOf("%") >= 0 && (a = parseFloat(a.replace("%", "")) / 100 * v.size), v.virtualSize = -a, v.rtl ? v.slides.css({
                        marginLeft: "",
                        marginTop: ""
                    }) : v.slides.css({
                        marginRight: "",
                        marginBottom: ""
                    });
                    var s;
                    v.params.slidesPerColumn > 1 && (s = Math.floor(v.slides.length / v.params.slidesPerColumn) === v.slides.length / v.params.slidesPerColumn ? v.slides.length : Math.ceil(v.slides.length / v.params.slidesPerColumn) * v.params.slidesPerColumn, "auto" !== v.params.slidesPerView && "row" === v.params.slidesPerColumnFill && (s = Math.max(s, v.params.slidesPerView * v.params.slidesPerColumn)));
                    var o, l = v.params.slidesPerColumn,
                        p = s / l,
                        d = p - (v.params.slidesPerColumn * p - v.slides.length);
                    for (e = 0; e < v.slides.length; e++) {
                        o = 0;
                        var c = v.slides.eq(e);
                        if (v.params.slidesPerColumn > 1) {
                            var u, m, f;
                            "column" === v.params.slidesPerColumnFill ? (m = Math.floor(e / l), f = e - m * l, (m > d || m === d && f === l - 1) && ++f >= l && (f = 0, m++), u = m + f * s / l, c.css({
                                "-webkit-box-ordinal-group": u,
                                "-moz-box-ordinal-group": u,
                                "-ms-flex-order": u,
                                "-webkit-order": u,
                                order: u
                            })) : (f = Math.floor(e / p), m = e - f * p), c.css({
                                "margin-top": 0 !== f && v.params.spaceBetween && v.params.spaceBetween + "px"
                            }).attr("data-swiper-column", m).attr("data-swiper-row", f)
                        }
                        "none" !== c.css("display") && ("auto" === v.params.slidesPerView ? (o = v.isHorizontal() ? c.outerWidth(!0) : c.outerHeight(!0), v.params.roundLengths && (o = r(o))) : (o = (v.size - (v.params.slidesPerView - 1) * a) / v.params.slidesPerView, v.params.roundLengths && (o = r(o)), v.isHorizontal() ? v.slides[e].style.width = o + "px" : v.slides[e].style.height = o + "px"), v.slides[e].swiperSlideSize = o, v.slidesSizesGrid.push(o), v.params.centeredSlides ? (t = t + o / 2 + n / 2 + a, 0 === e && (t = t - v.size / 2 - a), Math.abs(t) < .001 && (t = 0), i % v.params.slidesPerGroup === 0 && v.snapGrid.push(t), v.slidesGrid.push(t)) : (i % v.params.slidesPerGroup === 0 && v.snapGrid.push(t), v.slidesGrid.push(t), t = t + o + a), v.virtualSize += o + a, n = o, i++)
                    }
                    v.virtualSize = Math.max(v.virtualSize, v.size) + v.params.slidesOffsetAfter;
                    var h;
                    if (v.rtl && v.wrongRTL && ("slide" === v.params.effect || "coverflow" === v.params.effect) && v.wrapper.css({
                            width: v.virtualSize + v.params.spaceBetween + "px"
                        }), (!v.support.flexbox || v.params.setWrapperSize) && (v.isHorizontal() ? v.wrapper.css({
                            width: v.virtualSize + v.params.spaceBetween + "px"
                        }) : v.wrapper.css({
                            height: v.virtualSize + v.params.spaceBetween + "px"
                        })), v.params.slidesPerColumn > 1 && (v.virtualSize = (o + v.params.spaceBetween) * s, v.virtualSize = Math.ceil(v.virtualSize / v.params.slidesPerColumn) - v.params.spaceBetween, v.wrapper.css({
                            width: v.virtualSize + v.params.spaceBetween + "px"
                        }), v.params.centeredSlides)) {
                        for (h = [], e = 0; e < v.snapGrid.length; e++) v.snapGrid[e] < v.virtualSize + v.snapGrid[0] && h.push(v.snapGrid[e]);
                        v.snapGrid = h
                    }
                    if (!v.params.centeredSlides) {
                        for (h = [], e = 0; e < v.snapGrid.length; e++) v.snapGrid[e] <= v.virtualSize - v.size && h.push(v.snapGrid[e]);
                        v.snapGrid = h, Math.floor(v.virtualSize - v.size) - Math.floor(v.snapGrid[v.snapGrid.length - 1]) > 1 && v.snapGrid.push(v.virtualSize - v.size)
                    }
                    0 === v.snapGrid.length && (v.snapGrid = [0]), 0 !== v.params.spaceBetween && (v.isHorizontal() ? v.rtl ? v.slides.css({
                        marginLeft: a + "px"
                    }) : v.slides.css({
                        marginRight: a + "px"
                    }) : v.slides.css({
                        marginBottom: a + "px"
                    })), v.params.watchSlidesProgress && v.updateSlidesOffset()
                }
            }, v.updateSlidesOffset = function() {
                for (var e = 0; e < v.slides.length; e++) v.slides[e].swiperSlideOffset = v.isHorizontal() ? v.slides[e].offsetLeft : v.slides[e].offsetTop
            }, v.updateSlidesProgress = function(e) {
                if ("undefined" == typeof e && (e = v.translate || 0), 0 !== v.slides.length) {
                    "undefined" == typeof v.slides[0].swiperSlideOffset && v.updateSlidesOffset();
                    var a = -e;
                    v.rtl && (a = e), v.slides.removeClass(v.params.slideVisibleClass);
                    for (var t = 0; t < v.slides.length; t++) {
                        var n = v.slides[t],
                            r = (a - n.swiperSlideOffset) / (n.swiperSlideSize + v.params.spaceBetween);
                        if (v.params.watchSlidesVisibility) {
                            var i = -(a - n.swiperSlideOffset),
                                s = i + v.slidesSizesGrid[t],
                                o = i >= 0 && i < v.size || s > 0 && s <= v.size || 0 >= i && s >= v.size;
                            o && v.slides.eq(t).addClass(v.params.slideVisibleClass)
                        }
                        n.progress = v.rtl ? -r : r
                    }
                }
            }, v.updateProgress = function(e) {
                "undefined" == typeof e && (e = v.translate || 0);
                var a = v.maxTranslate() - v.minTranslate(),
                    t = v.isBeginning,
                    n = v.isEnd;
                0 === a ? (v.progress = 0, v.isBeginning = v.isEnd = !0) : (v.progress = (e - v.minTranslate()) / a, v.isBeginning = v.progress <= 0, v.isEnd = v.progress >= 1), v.isBeginning && !t && v.emit("onReachBeginning", v), v.isEnd && !n && v.emit("onReachEnd", v), v.params.watchSlidesProgress && v.updateSlidesProgress(e), v.emit("onProgress", v, v.progress)
            }, v.updateActiveIndex = function() {
                var e, a, t, n = v.rtl ? v.translate : -v.translate;
                for (a = 0; a < v.slidesGrid.length; a++) "undefined" != typeof v.slidesGrid[a + 1] ? n >= v.slidesGrid[a] && n < v.slidesGrid[a + 1] - (v.slidesGrid[a + 1] - v.slidesGrid[a]) / 2 ? e = a : n >= v.slidesGrid[a] && n < v.slidesGrid[a + 1] && (e = a + 1) : n >= v.slidesGrid[a] && (e = a);
                (0 > e || "undefined" == typeof e) && (e = 0), t = Math.floor(e / v.params.slidesPerGroup), t >= v.snapGrid.length && (t = v.snapGrid.length - 1), e !== v.activeIndex && (v.snapIndex = t, v.previousIndex = v.activeIndex, v.activeIndex = e, v.updateClasses())
            }, v.updateClasses = function() {
                v.slides.removeClass(v.params.slideActiveClass + " " + v.params.slideNextClass + " " + v.params.slidePrevClass);
                var e = v.slides.eq(v.activeIndex);
                e.addClass(v.params.slideActiveClass);
                var t = e.next("." + v.params.slideClass).addClass(v.params.slideNextClass);
                v.params.loop && 0 === t.length && v.slides.eq(0).addClass(v.params.slideNextClass);
                var n = e.prev("." + v.params.slideClass).addClass(v.params.slidePrevClass);
                if (v.params.loop && 0 === n.length && v.slides.eq(-1).addClass(v.params.slidePrevClass), v.paginationContainer && v.paginationContainer.length > 0) {
                    var r, i = v.params.loop ? Math.ceil((v.slides.length - 2 * v.loopedSlides) / v.params.slidesPerGroup) : v.snapGrid.length;
                    if (v.params.loop ? (r = Math.ceil((v.activeIndex - v.loopedSlides) / v.params.slidesPerGroup), r > v.slides.length - 1 - 2 * v.loopedSlides && (r -= v.slides.length - 2 * v.loopedSlides), r > i - 1 && (r -= i), 0 > r && "bullets" !== v.params.paginationType && (r = i + r)) : r = "undefined" != typeof v.snapIndex ? v.snapIndex : v.activeIndex || 0, "bullets" === v.params.paginationType && v.bullets && v.bullets.length > 0 && (v.bullets.removeClass(v.params.bulletActiveClass), v.paginationContainer.length > 1 ? v.bullets.each(function() {
                            a(this).index() === r && a(this).addClass(v.params.bulletActiveClass)
                        }) : v.bullets.eq(r).addClass(v.params.bulletActiveClass)), "fraction" === v.params.paginationType && (v.paginationContainer.find("." + v.params.paginationCurrentClass).text(r + 1), v.paginationContainer.find("." + v.params.paginationTotalClass).text(i)), "progress" === v.params.paginationType) {
                        var s = (r + 1) / i,
                            o = s,
                            l = 1;
                        v.isHorizontal() || (l = s, o = 1), v.paginationContainer.find("." + v.params.paginationProgressbarClass).transform("translate3d(0,0,0) scaleX(" + o + ") scaleY(" + l + ")").transition(v.params.speed)
                    }
                    "custom" === v.params.paginationType && v.params.paginationCustomRender && (v.paginationContainer.html(v.params.paginationCustomRender(v, r + 1, i)), v.emit("onPaginationRendered", v, v.paginationContainer[0]))
                }
                v.params.loop || (v.params.prevButton && v.prevButton && v.prevButton.length > 0 && (v.isBeginning ? (v.prevButton.addClass(v.params.buttonDisabledClass), v.params.a11y && v.a11y && v.a11y.disable(v.prevButton)) : (v.prevButton.removeClass(v.params.buttonDisabledClass), v.params.a11y && v.a11y && v.a11y.enable(v.prevButton))), v.params.nextButton && v.nextButton && v.nextButton.length > 0 && (v.isEnd ? (v.nextButton.addClass(v.params.buttonDisabledClass), v.params.a11y && v.a11y && v.a11y.disable(v.nextButton)) : (v.nextButton.removeClass(v.params.buttonDisabledClass), v.params.a11y && v.a11y && v.a11y.enable(v.nextButton))))
            }, v.updatePagination = function() {
                if (v.params.pagination && v.paginationContainer && v.paginationContainer.length > 0) {
                    var e = "";
                    if ("bullets" === v.params.paginationType) {
                        for (var a = v.params.loop ? Math.ceil((v.slides.length - 2 * v.loopedSlides) / v.params.slidesPerGroup) : v.snapGrid.length, t = 0; a > t; t++) e += v.params.paginationBulletRender ? v.params.paginationBulletRender(t, v.params.bulletClass) : "<" + v.params.paginationElement + ' class="' + v.params.bulletClass + '"></' + v.params.paginationElement + ">";
                        v.paginationContainer.html(e), v.bullets = v.paginationContainer.find("." + v.params.bulletClass), v.params.paginationClickable && v.params.a11y && v.a11y && v.a11y.initPagination()
                    }
                    "fraction" === v.params.paginationType && (e = v.params.paginationFractionRender ? v.params.paginationFractionRender(v, v.params.paginationCurrentClass, v.params.paginationTotalClass) : '<span class="' + v.params.paginationCurrentClass + '"></span> / <span class="' + v.params.paginationTotalClass + '"></span>', v.paginationContainer.html(e)), "progress" === v.params.paginationType && (e = v.params.paginationProgressRender ? v.params.paginationProgressRender(v, v.params.paginationProgressbarClass) : '<span class="' + v.params.paginationProgressbarClass + '"></span>', v.paginationContainer.html(e)), "custom" !== v.params.paginationType && v.emit("onPaginationRendered", v, v.paginationContainer[0])
                }
            }, v.update = function(e) {
                function a() {
                    n = Math.min(Math.max(v.translate, v.maxTranslate()), v.minTranslate()), v.setWrapperTranslate(n), v.updateActiveIndex(), v.updateClasses()
                }
                if (v.updateContainerSize(), v.updateSlidesSize(), v.updateProgress(), v.updatePagination(), v.updateClasses(), v.params.scrollbar && v.scrollbar && v.scrollbar.set(), e) {
                    var t, n;
                    v.controller && v.controller.spline && (v.controller.spline = void 0), v.params.freeMode ? (a(), v.params.autoHeight && v.updateAutoHeight()) : (t = ("auto" === v.params.slidesPerView || v.params.slidesPerView > 1) && v.isEnd && !v.params.centeredSlides ? v.slideTo(v.slides.length - 1, 0, !1, !0) : v.slideTo(v.activeIndex, 0, !1, !0), t || a())
                } else v.params.autoHeight && v.updateAutoHeight()
            }, v.onResize = function(e) {
                v.params.breakpoints && v.setBreakpoint();
                var a = v.params.allowSwipeToPrev,
                    t = v.params.allowSwipeToNext;
                v.params.allowSwipeToPrev = v.params.allowSwipeToNext = !0, v.updateContainerSize(), v.updateSlidesSize(), ("auto" === v.params.slidesPerView || v.params.freeMode || e) && v.updatePagination(), v.params.scrollbar && v.scrollbar && v.scrollbar.set(), v.controller && v.controller.spline && (v.controller.spline = void 0);
                var n = !1;
                if (v.params.freeMode) {
                    var r = Math.min(Math.max(v.translate, v.maxTranslate()), v.minTranslate());
                    v.setWrapperTranslate(r), v.updateActiveIndex(), v.updateClasses(), v.params.autoHeight && v.updateAutoHeight()
                } else v.updateClasses(), n = ("auto" === v.params.slidesPerView || v.params.slidesPerView > 1) && v.isEnd && !v.params.centeredSlides ? v.slideTo(v.slides.length - 1, 0, !1, !0) : v.slideTo(v.activeIndex, 0, !1, !0);
                v.params.lazyLoading && !n && v.lazy && v.lazy.load(), v.params.allowSwipeToPrev = a, v.params.allowSwipeToNext = t
            };
            var w = ["mousedown", "mousemove", "mouseup"];
            window.navigator.pointerEnabled ? w = ["pointerdown", "pointermove", "pointerup"] : window.navigator.msPointerEnabled && (w = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), v.touchEvents = {
                start: v.support.touch || !v.params.simulateTouch ? "touchstart" : w[0],
                move: v.support.touch || !v.params.simulateTouch ? "touchmove" : w[1],
                end: v.support.touch || !v.params.simulateTouch ? "touchend" : w[2]
            }, (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && ("container" === v.params.touchEventsTarget ? v.container : v.wrapper).addClass("swiper-wp8-" + v.params.direction), v.initEvents = function(e) {
                var a = e ? "off" : "on",
                    t = e ? "removeEventListener" : "addEventListener",
                    r = "container" === v.params.touchEventsTarget ? v.container[0] : v.wrapper[0],
                    i = v.support.touch ? r : document,
                    s = v.params.nested ? !0 : !1;
                v.browser.ie ? (r[t](v.touchEvents.start, v.onTouchStart, !1), i[t](v.touchEvents.move, v.onTouchMove, s), i[t](v.touchEvents.end, v.onTouchEnd, !1)) : (v.support.touch && (r[t](v.touchEvents.start, v.onTouchStart, !1), r[t](v.touchEvents.move, v.onTouchMove, s), r[t](v.touchEvents.end, v.onTouchEnd, !1)), !n.simulateTouch || v.device.ios || v.device.android || (r[t]("mousedown", v.onTouchStart, !1), document[t]("mousemove", v.onTouchMove, s), document[t]("mouseup", v.onTouchEnd, !1))), window[t]("resize", v.onResize), v.params.nextButton && v.nextButton && v.nextButton.length > 0 && (v.nextButton[a]("click", v.onClickNext), v.params.a11y && v.a11y && v.nextButton[a]("keydown", v.a11y.onEnterKey)), v.params.prevButton && v.prevButton && v.prevButton.length > 0 && (v.prevButton[a]("click", v.onClickPrev), v.params.a11y && v.a11y && v.prevButton[a]("keydown", v.a11y.onEnterKey)), v.params.pagination && v.params.paginationClickable && (v.paginationContainer[a]("click", "." + v.params.bulletClass, v.onClickIndex), v.params.a11y && v.a11y && v.paginationContainer[a]("keydown", "." + v.params.bulletClass, v.a11y.onEnterKey)), (v.params.preventClicks || v.params.preventClicksPropagation) && r[t]("click", v.preventClicks, !0)
            }, v.attachEvents = function() {
                v.initEvents()
            }, v.detachEvents = function() {
                v.initEvents(!0)
            }, v.allowClick = !0, v.preventClicks = function(e) {
                v.allowClick || (v.params.preventClicks && e.preventDefault(), v.params.preventClicksPropagation && v.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
            }, v.onClickNext = function(e) {
                e.preventDefault(), (!v.isEnd || v.params.loop) && v.slideNext()
            }, v.onClickPrev = function(e) {
                e.preventDefault(), (!v.isBeginning || v.params.loop) && v.slidePrev()
            }, v.onClickIndex = function(e) {
                e.preventDefault();
                var t = a(this).index() * v.params.slidesPerGroup;
                v.params.loop && (t += v.loopedSlides), v.slideTo(t)
            }, v.updateClickedSlide = function(e) {
                var t = s(e, "." + v.params.slideClass),
                    n = !1;
                if (t)
                    for (var r = 0; r < v.slides.length; r++) v.slides[r] === t && (n = !0);
                if (!t || !n) return v.clickedSlide = void 0, void(v.clickedIndex = void 0);
                if (v.clickedSlide = t, v.clickedIndex = a(t).index(), v.params.slideToClickedSlide && void 0 !== v.clickedIndex && v.clickedIndex !== v.activeIndex) {
                    var i, o = v.clickedIndex;
                    if (v.params.loop) {
                        if (v.animating) return;
                        i = a(v.clickedSlide).attr("data-swiper-slide-index"), v.params.centeredSlides ? o < v.loopedSlides - v.params.slidesPerView / 2 || o > v.slides.length - v.loopedSlides + v.params.slidesPerView / 2 ? (v.fixLoop(), o = v.wrapper.children("." + v.params.slideClass + '[data-swiper-slide-index="' + i + '"]:not(.swiper-slide-duplicate)').eq(0).index(), setTimeout(function() {
                            v.slideTo(o)
                        }, 0)) : v.slideTo(o) : o > v.slides.length - v.params.slidesPerView ? (v.fixLoop(), o = v.wrapper.children("." + v.params.slideClass + '[data-swiper-slide-index="' + i + '"]:not(.swiper-slide-duplicate)').eq(0).index(), setTimeout(function() {
                            v.slideTo(o)
                        }, 0)) : v.slideTo(o)
                    } else v.slideTo(o)
                }
            };
            var C, y, x, T, k, P, S, M, I, O, E = "input, select, textarea, button",
                D = Date.now(),
                L = [];
            v.animating = !1, v.touches = {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0
            };
            var B, z;
            v.onTouchStart = function(e) {
                if (e.originalEvent && (e = e.originalEvent), B = "touchstart" === e.type, B || !("which" in e) || 3 !== e.which) {
                    if (v.params.noSwiping && s(e, "." + v.params.noSwipingClass)) return void(v.allowClick = !0);
                    if (!v.params.swipeHandler || s(e, v.params.swipeHandler)) {
                        var t = v.touches.currentX = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX,
                            n = v.touches.currentY = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY;
                        if (!(v.device.ios && v.params.iOSEdgeSwipeDetection && t <= v.params.iOSEdgeSwipeThreshold)) {
                            if (C = !0, y = !1, x = !0, k = void 0, z = void 0, v.touches.startX = t, v.touches.startY = n, T = Date.now(), v.allowClick = !0, v.updateContainerSize(), v.swipeDirection = void 0, v.params.threshold > 0 && (M = !1), "touchstart" !== e.type) {
                                var r = !0;
                                a(e.target).is(E) && (r = !1), document.activeElement && a(document.activeElement).is(E) && document.activeElement.blur(), r && e.preventDefault()
                            }
                            v.emit("onTouchStart", v, e)
                        }
                    }
                }
            }, v.onTouchMove = function(e) {
                if (e.originalEvent && (e = e.originalEvent), !B || "mousemove" !== e.type) {
                    if (e.preventedByNestedSwiper) return v.touches.startX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, void(v.touches.startY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY);
                    if (v.params.onlyExternal) return v.allowClick = !1, void(C && (v.touches.startX = v.touches.currentX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, v.touches.startY = v.touches.currentY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, T = Date.now()));
                    if (B && document.activeElement && e.target === document.activeElement && a(e.target).is(E)) return y = !0, void(v.allowClick = !1);
                    if (x && v.emit("onTouchMove", v, e), !(e.targetTouches && e.targetTouches.length > 1)) {
                        if (v.touches.currentX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, v.touches.currentY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, "undefined" == typeof k) {
                            var t = 180 * Math.atan2(Math.abs(v.touches.currentY - v.touches.startY), Math.abs(v.touches.currentX - v.touches.startX)) / Math.PI;
                            k = v.isHorizontal() ? t > v.params.touchAngle : 90 - t > v.params.touchAngle
                        }
                        if (k && v.emit("onTouchMoveOpposite", v, e), "undefined" == typeof z && v.browser.ieTouch && (v.touches.currentX !== v.touches.startX || v.touches.currentY !== v.touches.startY) && (z = !0), C) {
                            if (k) return void(C = !1);
                            if (z || !v.browser.ieTouch) {
                                v.allowClick = !1, v.emit("onSliderMove", v, e), e.preventDefault(), v.params.touchMoveStopPropagation && !v.params.nested && e.stopPropagation(), y || (n.loop && v.fixLoop(), S = v.getWrapperTranslate(), v.setWrapperTransition(0), v.animating && v.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"), v.params.autoplay && v.autoplaying && (v.params.autoplayDisableOnInteraction ? v.stopAutoplay() : v.pauseAutoplay()), O = !1, v.params.grabCursor && (v.container[0].style.cursor = "move", v.container[0].style.cursor = "-webkit-grabbing", v.container[0].style.cursor = "-moz-grabbin", v.container[0].style.cursor = "grabbing")), y = !0;
                                var r = v.touches.diff = v.isHorizontal() ? v.touches.currentX - v.touches.startX : v.touches.currentY - v.touches.startY;
                                r *= v.params.touchRatio, v.rtl && (r = -r), v.swipeDirection = r > 0 ? "prev" : "next", P = r + S;
                                var i = !0;
                                if (r > 0 && P > v.minTranslate() ? (i = !1, v.params.resistance && (P = v.minTranslate() - 1 + Math.pow(-v.minTranslate() + S + r, v.params.resistanceRatio))) : 0 > r && P < v.maxTranslate() && (i = !1, v.params.resistance && (P = v.maxTranslate() + 1 - Math.pow(v.maxTranslate() - S - r, v.params.resistanceRatio))), i && (e.preventedByNestedSwiper = !0), !v.params.allowSwipeToNext && "next" === v.swipeDirection && S > P && (P = S), !v.params.allowSwipeToPrev && "prev" === v.swipeDirection && P > S && (P = S), v.params.followFinger) {
                                    if (v.params.threshold > 0) {
                                        if (!(Math.abs(r) > v.params.threshold || M)) return void(P = S);
                                        if (!M) return M = !0, v.touches.startX = v.touches.currentX, v.touches.startY = v.touches.currentY, P = S, void(v.touches.diff = v.isHorizontal() ? v.touches.currentX - v.touches.startX : v.touches.currentY - v.touches.startY)
                                    }(v.params.freeMode || v.params.watchSlidesProgress) && v.updateActiveIndex(), v.params.freeMode && (0 === L.length && L.push({
                                        position: v.touches[v.isHorizontal() ? "startX" : "startY"],
                                        time: T
                                    }), L.push({
                                        position: v.touches[v.isHorizontal() ? "currentX" : "currentY"],
                                        time: (new window.Date).getTime()
                                    })), v.updateProgress(P), v.setWrapperTranslate(P)
                                }
                            }
                        }
                    }
                }
            }, v.onTouchEnd = function(e) {
                if (e.originalEvent && (e = e.originalEvent), x && v.emit("onTouchEnd", v, e), x = !1, C) {
                    v.params.grabCursor && y && C && (v.container[0].style.cursor = "move", v.container[0].style.cursor = "-webkit-grab", v.container[0].style.cursor = "-moz-grab", v.container[0].style.cursor = "grab");
                    var t = Date.now(),
                        n = t - T;
                    if (v.allowClick && (v.updateClickedSlide(e), v.emit("onTap", v, e), 300 > n && t - D > 300 && (I && clearTimeout(I), I = setTimeout(function() {
                            v && (v.params.paginationHide && v.paginationContainer.length > 0 && !a(e.target).hasClass(v.params.bulletClass) && v.paginationContainer.toggleClass(v.params.paginationHiddenClass), v.emit("onClick", v, e))
                        }, 300)), 300 > n && 300 > t - D && (I && clearTimeout(I), v.emit("onDoubleTap", v, e))), D = Date.now(), setTimeout(function() {
                            v && (v.allowClick = !0)
                        }, 0), !C || !y || !v.swipeDirection || 0 === v.touches.diff || P === S) return void(C = y = !1);
                    C = y = !1;
                    var r;
                    if (r = v.params.followFinger ? v.rtl ? v.translate : -v.translate : -P, v.params.freeMode) {
                        if (r < -v.minTranslate()) return void v.slideTo(v.activeIndex);
                        if (r > -v.maxTranslate()) return void(v.slides.length < v.snapGrid.length ? v.slideTo(v.snapGrid.length - 1) : v.slideTo(v.slides.length - 1));
                        if (v.params.freeModeMomentum) {
                            if (L.length > 1) {
                                var i = L.pop(),
                                    s = L.pop(),
                                    o = i.position - s.position,
                                    l = i.time - s.time;
                                v.velocity = o / l, v.velocity = v.velocity / 2, Math.abs(v.velocity) < v.params.freeModeMinimumVelocity && (v.velocity = 0), (l > 150 || (new window.Date).getTime() - i.time > 300) && (v.velocity = 0)
                            } else v.velocity = 0;
                            L.length = 0;
                            var p = 1e3 * v.params.freeModeMomentumRatio,
                                d = v.velocity * p,
                                c = v.translate + d;
                            v.rtl && (c = -c);
                            var u, m = !1,
                                f = 20 * Math.abs(v.velocity) * v.params.freeModeMomentumBounceRatio;
                            if (c < v.maxTranslate()) v.params.freeModeMomentumBounce ? (c + v.maxTranslate() < -f && (c = v.maxTranslate() - f), u = v.maxTranslate(), m = !0, O = !0) : c = v.maxTranslate();
                            else if (c > v.minTranslate()) v.params.freeModeMomentumBounce ? (c - v.minTranslate() > f && (c = v.minTranslate() + f), u = v.minTranslate(), m = !0, O = !0) : c = v.minTranslate();
                            else if (v.params.freeModeSticky) {
                                var h, g = 0;
                                for (g = 0; g < v.snapGrid.length; g += 1)
                                    if (v.snapGrid[g] > -c) {
                                        h = g;
                                        break
                                    } c = Math.abs(v.snapGrid[h] - c) < Math.abs(v.snapGrid[h - 1] - c) || "next" === v.swipeDirection ? v.snapGrid[h] : v.snapGrid[h - 1], v.rtl || (c = -c)
                            }
                            if (0 !== v.velocity) p = v.rtl ? Math.abs((-c - v.translate) / v.velocity) : Math.abs((c - v.translate) / v.velocity);
                            else if (v.params.freeModeSticky) return void v.slideReset();
                            v.params.freeModeMomentumBounce && m ? (v.updateProgress(u), v.setWrapperTransition(p), v.setWrapperTranslate(c), v.onTransitionStart(), v.animating = !0, v.wrapper.transitionEnd(function() {
                                v && O && (v.emit("onMomentumBounce", v), v.setWrapperTransition(v.params.speed), v.setWrapperTranslate(u), v.wrapper.transitionEnd(function() {
                                    v && v.onTransitionEnd()
                                }))
                            })) : v.velocity ? (v.updateProgress(c), v.setWrapperTransition(p), v.setWrapperTranslate(c), v.onTransitionStart(), v.animating || (v.animating = !0, v.wrapper.transitionEnd(function() {
                                v && v.onTransitionEnd()
                            }))) : v.updateProgress(c), v.updateActiveIndex()
                        }
                        return void((!v.params.freeModeMomentum || n >= v.params.longSwipesMs) && (v.updateProgress(), v.updateActiveIndex()))
                    }
                    var b, w = 0,
                        k = v.slidesSizesGrid[0];
                    for (b = 0; b < v.slidesGrid.length; b += v.params.slidesPerGroup) "undefined" != typeof v.slidesGrid[b + v.params.slidesPerGroup] ? r >= v.slidesGrid[b] && r < v.slidesGrid[b + v.params.slidesPerGroup] && (w = b, k = v.slidesGrid[b + v.params.slidesPerGroup] - v.slidesGrid[b]) : r >= v.slidesGrid[b] && (w = b, k = v.slidesGrid[v.slidesGrid.length - 1] - v.slidesGrid[v.slidesGrid.length - 2]);
                    var M = (r - v.slidesGrid[w]) / k;
                    if (n > v.params.longSwipesMs) {
                        if (!v.params.longSwipes) return void v.slideTo(v.activeIndex);
                        "next" === v.swipeDirection && (M >= v.params.longSwipesRatio ? v.slideTo(w + v.params.slidesPerGroup) : v.slideTo(w)), "prev" === v.swipeDirection && (M > 1 - v.params.longSwipesRatio ? v.slideTo(w + v.params.slidesPerGroup) : v.slideTo(w))
                    } else {
                        if (!v.params.shortSwipes) return void v.slideTo(v.activeIndex);
                        "next" === v.swipeDirection && v.slideTo(w + v.params.slidesPerGroup), "prev" === v.swipeDirection && v.slideTo(w)
                    }
                }
            }, v._slideTo = function(e, a) {
                return v.slideTo(e, a, !0, !0)
            }, v.slideTo = function(e, a, t, n) {
                "undefined" == typeof t && (t = !0), "undefined" == typeof e && (e = 0), 0 > e && (e = 0), v.snapIndex = Math.floor(e / v.params.slidesPerGroup), v.snapIndex >= v.snapGrid.length && (v.snapIndex = v.snapGrid.length - 1);
                var r = -v.snapGrid[v.snapIndex];
                v.params.autoplay && v.autoplaying && (n || !v.params.autoplayDisableOnInteraction ? v.pauseAutoplay(a) : v.stopAutoplay()), v.updateProgress(r);
                for (var i = 0; i < v.slidesGrid.length; i++) - Math.floor(100 * r) >= Math.floor(100 * v.slidesGrid[i]) && (e = i);
                return !v.params.allowSwipeToNext && r < v.translate && r < v.minTranslate() ? !1 : !v.params.allowSwipeToPrev && r > v.translate && r > v.maxTranslate() && (v.activeIndex || 0) !== e ? !1 : ("undefined" == typeof a && (a = v.params.speed), v.previousIndex = v.activeIndex || 0, v.activeIndex = e, v.rtl && -r === v.translate || !v.rtl && r === v.translate ? (v.params.autoHeight && v.updateAutoHeight(), v.updateClasses(), "slide" !== v.params.effect && v.setWrapperTranslate(r), !1) : (v.updateClasses(), v.onTransitionStart(t), 0 === a ? (v.setWrapperTranslate(r), v.setWrapperTransition(0), v.onTransitionEnd(t)) : (v.setWrapperTranslate(r), v.setWrapperTransition(a), v.animating || (v.animating = !0, v.wrapper.transitionEnd(function() {
                    v && v.onTransitionEnd(t)
                }))), !0))
            }, v.onTransitionStart = function(e) {
                "undefined" == typeof e && (e = !0), v.params.autoHeight && v.updateAutoHeight(), v.lazy && v.lazy.onTransitionStart(), e && (v.emit("onTransitionStart", v), v.activeIndex !== v.previousIndex && (v.emit("onSlideChangeStart", v), v.activeIndex > v.previousIndex ? v.emit("onSlideNextStart", v) : v.emit("onSlidePrevStart", v)))
            }, v.onTransitionEnd = function(e) {
                v.animating = !1, v.setWrapperTransition(0), "undefined" == typeof e && (e = !0), v.lazy && v.lazy.onTransitionEnd(), e && (v.emit("onTransitionEnd", v), v.activeIndex !== v.previousIndex && (v.emit("onSlideChangeEnd", v), v.activeIndex > v.previousIndex ? v.emit("onSlideNextEnd", v) : v.emit("onSlidePrevEnd", v))), v.params.hashnav && v.hashnav && v.hashnav.setHash()
            }, v.slideNext = function(e, a, t) {
                if (v.params.loop) {
                    if (v.animating) return !1;
                    v.fixLoop();
                    v.container[0].clientLeft;
                    return v.slideTo(v.activeIndex + v.params.slidesPerGroup, a, e, t)
                }
                return v.slideTo(v.activeIndex + v.params.slidesPerGroup, a, e, t)
            }, v._slideNext = function(e) {
                return v.slideNext(!0, e, !0)
            }, v.slidePrev = function(e, a, t) {
                if (v.params.loop) {
                    if (v.animating) return !1;
                    v.fixLoop();
                    v.container[0].clientLeft;
                    return v.slideTo(v.activeIndex - 1, a, e, t)
                }
                return v.slideTo(v.activeIndex - 1, a, e, t)
            }, v._slidePrev = function(e) {
                return v.slidePrev(!0, e, !0)
            }, v.slideReset = function(e, a, t) {
                return v.slideTo(v.activeIndex, a, e)
            }, v.setWrapperTransition = function(e, a) {
                v.wrapper.transition(e), "slide" !== v.params.effect && v.effects[v.params.effect] && v.effects[v.params.effect].setTransition(e), v.params.parallax && v.parallax && v.parallax.setTransition(e), v.params.scrollbar && v.scrollbar && v.scrollbar.setTransition(e), v.params.control && v.controller && v.controller.setTransition(e, a), v.emit("onSetTransition", v, e)
            }, v.setWrapperTranslate = function(e, a, t) {
                var n = 0,
                    i = 0,
                    s = 0;
                v.isHorizontal() ? n = v.rtl ? -e : e : i = e, v.params.roundLengths && (n = r(n), i = r(i)), v.params.virtualTranslate || (v.support.transforms3d ? v.wrapper.transform("translate3d(" + n + "px, " + i + "px, " + s + "px)") : v.wrapper.transform("translate(" + n + "px, " + i + "px)")), v.translate = v.isHorizontal() ? n : i;
                var o, l = v.maxTranslate() - v.minTranslate();
                o = 0 === l ? 0 : (e - v.minTranslate()) / l, o !== v.progress && v.updateProgress(e), a && v.updateActiveIndex(), "slide" !== v.params.effect && v.effects[v.params.effect] && v.effects[v.params.effect].setTranslate(v.translate), v.params.parallax && v.parallax && v.parallax.setTranslate(v.translate), v.params.scrollbar && v.scrollbar && v.scrollbar.setTranslate(v.translate), v.params.control && v.controller && v.controller.setTranslate(v.translate, t), v.emit("onSetTranslate", v, v.translate)
            }, v.getTranslate = function(e, a) {
                var t, n, r, i;
                return "undefined" == typeof a && (a = "x"), v.params.virtualTranslate ? v.rtl ? -v.translate : v.translate : (r = window.getComputedStyle(e, null), window.WebKitCSSMatrix ? (n = r.transform || r.webkitTransform, n.split(",").length > 6 && (n = n.split(", ").map(function(e) {
                    return e.replace(",", ".")
                }).join(", ")), i = new window.WebKitCSSMatrix("none" === n ? "" : n)) : (i = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), t = i.toString().split(",")), "x" === a && (n = window.WebKitCSSMatrix ? i.m41 : 16 === t.length ? parseFloat(t[12]) : parseFloat(t[4])), "y" === a && (n = window.WebKitCSSMatrix ? i.m42 : 16 === t.length ? parseFloat(t[13]) : parseFloat(t[5])), v.rtl && n && (n = -n), n || 0)
            }, v.getWrapperTranslate = function(e) {
                return "undefined" == typeof e && (e = v.isHorizontal() ? "x" : "y"), v.getTranslate(v.wrapper[0], e)
            }, v.observers = [], v.initObservers = function() {
                if (v.params.observeParents)
                    for (var e = v.container.parents(), a = 0; a < e.length; a++) o(e[a]);
                o(v.container[0], {
                    childList: !1
                }), o(v.wrapper[0], {
                    attributes: !1
                })
            }, v.disconnectObservers = function() {
                for (var e = 0; e < v.observers.length; e++) v.observers[e].disconnect();
                v.observers = []
            }, v.createLoop = function() {
                v.wrapper.children("." + v.params.slideClass + "." + v.params.slideDuplicateClass).remove();
                var e = v.wrapper.children("." + v.params.slideClass);
                "auto" !== v.params.slidesPerView || v.params.loopedSlides || (v.params.loopedSlides = e.length), v.loopedSlides = parseInt(v.params.loopedSlides || v.params.slidesPerView, 10), v.loopedSlides = v.loopedSlides + v.params.loopAdditionalSlides, v.loopedSlides > e.length && (v.loopedSlides = e.length);
                var t, n = [],
                    r = [];
                for (e.each(function(t, i) {
                        var s = a(this);
                        t < v.loopedSlides && r.push(i), t < e.length && t >= e.length - v.loopedSlides && n.push(i), s.attr("data-swiper-slide-index", t)
                    }), t = 0; t < r.length; t++) v.wrapper.append(a(r[t].cloneNode(!0)).addClass(v.params.slideDuplicateClass));
                for (t = n.length - 1; t >= 0; t--) v.wrapper.prepend(a(n[t].cloneNode(!0)).addClass(v.params.slideDuplicateClass))
            }, v.destroyLoop = function() {
                v.wrapper.children("." + v.params.slideClass + "." + v.params.slideDuplicateClass).remove(), v.slides.removeAttr("data-swiper-slide-index")
            }, v.reLoop = function(e) {
                var a = v.activeIndex - v.loopedSlides;
                v.destroyLoop(), v.createLoop(), v.updateSlidesSize(), e && v.slideTo(a + v.loopedSlides, 0, !1)
            }, v.fixLoop = function() {
                var e;
                v.activeIndex < v.loopedSlides ? (e = v.slides.length - 3 * v.loopedSlides + v.activeIndex, e += v.loopedSlides, v.slideTo(e, 0, !1, !0)) : ("auto" === v.params.slidesPerView && v.activeIndex >= 2 * v.loopedSlides || v.activeIndex > v.slides.length - 2 * v.params.slidesPerView) && (e = -v.slides.length + v.activeIndex + v.loopedSlides, e += v.loopedSlides, v.slideTo(e, 0, !1, !0))
            }, v.appendSlide = function(e) {
                if (v.params.loop && v.destroyLoop(), "object" == typeof e && e.length)
                    for (var a = 0; a < e.length; a++) e[a] && v.wrapper.append(e[a]);
                else v.wrapper.append(e);
                v.params.loop && v.createLoop(), v.params.observer && v.support.observer || v.update(!0)
            }, v.prependSlide = function(e) {
                v.params.loop && v.destroyLoop();
                var a = v.activeIndex + 1;
                if ("object" == typeof e && e.length) {
                    for (var t = 0; t < e.length; t++) e[t] && v.wrapper.prepend(e[t]);
                    a = v.activeIndex + e.length
                } else v.wrapper.prepend(e);
                v.params.loop && v.createLoop(), v.params.observer && v.support.observer || v.update(!0), v.slideTo(a, 0, !1)
            }, v.removeSlide = function(e) {
                v.params.loop && (v.destroyLoop(), v.slides = v.wrapper.children("." + v.params.slideClass));
                var a, t = v.activeIndex;
                if ("object" == typeof e && e.length) {
                    for (var n = 0; n < e.length; n++) a = e[n], v.slides[a] && v.slides.eq(a).remove(), t > a && t--;
                    t = Math.max(t, 0)
                } else a = e, v.slides[a] && v.slides.eq(a).remove(), t > a && t--, t = Math.max(t, 0);
                v.params.loop && v.createLoop(), v.params.observer && v.support.observer || v.update(!0), v.params.loop ? v.slideTo(t + v.loopedSlides, 0, !1) : v.slideTo(t, 0, !1)
            }, v.removeAllSlides = function() {
                for (var e = [], a = 0; a < v.slides.length; a++) e.push(a);
                v.removeSlide(e)
            }, v.effects = {
                fade: {
                    setTranslate: function() {
                        for (var e = 0; e < v.slides.length; e++) {
                            var a = v.slides.eq(e),
                                t = a[0].swiperSlideOffset,
                                n = -t;
                            v.params.virtualTranslate || (n -= v.translate);
                            var r = 0;
                            v.isHorizontal() || (r = n, n = 0);
                            var i = v.params.fade.crossFade ? Math.max(1 - Math.abs(a[0].progress), 0) : 1 + Math.min(Math.max(a[0].progress, -1), 0);
                            a.css({
                                opacity: i
                            }).transform("translate3d(" + n + "px, " + r + "px, 0px)")
                        }
                    },
                    setTransition: function(e) {
                        if (v.slides.transition(e), v.params.virtualTranslate && 0 !== e) {
                            var a = !1;
                            v.slides.transitionEnd(function() {
                                if (!a && v) {
                                    a = !0, v.animating = !1;
                                    for (var e = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], t = 0; t < e.length; t++) v.wrapper.trigger(e[t])
                                }
                            })
                        }
                    }
                },
                flip: {
                    setTranslate: function() {
                        for (var e = 0; e < v.slides.length; e++) {
                            var t = v.slides.eq(e),
                                n = t[0].progress;
                            v.params.flip.limitRotation && (n = Math.max(Math.min(t[0].progress, 1), -1));
                            var r = t[0].swiperSlideOffset,
                                i = -180 * n,
                                s = i,
                                o = 0,
                                l = -r,
                                p = 0;
                            if (v.isHorizontal() ? v.rtl && (s = -s) : (p = l, l = 0, o = -s, s = 0), t[0].style.zIndex = -Math.abs(Math.round(n)) + v.slides.length, v.params.flip.slideShadows) {
                                var d = v.isHorizontal() ? t.find(".swiper-slide-shadow-left") : t.find(".swiper-slide-shadow-top"),
                                    c = v.isHorizontal() ? t.find(".swiper-slide-shadow-right") : t.find(".swiper-slide-shadow-bottom");
                                0 === d.length && (d = a('<div class="swiper-slide-shadow-' + (v.isHorizontal() ? "left" : "top") + '"></div>'), t.append(d)), 0 === c.length && (c = a('<div class="swiper-slide-shadow-' + (v.isHorizontal() ? "right" : "bottom") + '"></div>'), t.append(c)), d.length && (d[0].style.opacity = Math.max(-n, 0)), c.length && (c[0].style.opacity = Math.max(n, 0))
                            }
                            t.transform("translate3d(" + l + "px, " + p + "px, 0px) rotateX(" + o + "deg) rotateY(" + s + "deg)")
                        }
                    },
                    setTransition: function(e) {
                        if (v.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), v.params.virtualTranslate && 0 !== e) {
                            var t = !1;
                            v.slides.eq(v.activeIndex).transitionEnd(function() {
                                if (!t && v && a(this).hasClass(v.params.slideActiveClass)) {
                                    t = !0, v.animating = !1;
                                    for (var e = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], n = 0; n < e.length; n++) v.wrapper.trigger(e[n])
                                }
                            })
                        }
                    }
                },
                cube: {
                    setTranslate: function() {
                        var e, t = 0;
                        v.params.cube.shadow && (v.isHorizontal() ? (e = v.wrapper.find(".swiper-cube-shadow"), 0 === e.length && (e = a('<div class="swiper-cube-shadow"></div>'), v.wrapper.append(e)), e.css({
                            height: v.width + "px"
                        })) : (e = v.container.find(".swiper-cube-shadow"), 0 === e.length && (e = a('<div class="swiper-cube-shadow"></div>'), v.container.append(e))));
                        for (var n = 0; n < v.slides.length; n++) {
                            var r = v.slides.eq(n),
                                i = 90 * n,
                                s = Math.floor(i / 360);
                            v.rtl && (i = -i, s = Math.floor(-i / 360));
                            var o = Math.max(Math.min(r[0].progress, 1), -1),
                                l = 0,
                                p = 0,
                                d = 0;
                            n % 4 === 0 ? (l = 4 * -s * v.size, d = 0) : (n - 1) % 4 === 0 ? (l = 0, d = 4 * -s * v.size) : (n - 2) % 4 === 0 ? (l = v.size + 4 * s * v.size, d = v.size) : (n - 3) % 4 === 0 && (l = -v.size, d = 3 * v.size + 4 * v.size * s), v.rtl && (l = -l), v.isHorizontal() || (p = l, l = 0);
                            var c = "rotateX(" + (v.isHorizontal() ? 0 : -i) + "deg) rotateY(" + (v.isHorizontal() ? i : 0) + "deg) translate3d(" + l + "px, " + p + "px, " + d + "px)";
                            if (1 >= o && o > -1 && (t = 90 * n + 90 * o, v.rtl && (t = 90 * -n - 90 * o)), r.transform(c), v.params.cube.slideShadows) {
                                var u = v.isHorizontal() ? r.find(".swiper-slide-shadow-left") : r.find(".swiper-slide-shadow-top"),
                                    m = v.isHorizontal() ? r.find(".swiper-slide-shadow-right") : r.find(".swiper-slide-shadow-bottom");
                                0 === u.length && (u = a('<div class="swiper-slide-shadow-' + (v.isHorizontal() ? "left" : "top") + '"></div>'), r.append(u)), 0 === m.length && (m = a('<div class="swiper-slide-shadow-' + (v.isHorizontal() ? "right" : "bottom") + '"></div>'), r.append(m)), u.length && (u[0].style.opacity = Math.max(-o, 0)), m.length && (m[0].style.opacity = Math.max(o, 0))
                            }
                        }
                        if (v.wrapper.css({
                                "-webkit-transform-origin": "50% 50% -" + v.size / 2 + "px",
                                "-moz-transform-origin": "50% 50% -" + v.size / 2 + "px",
                                "-ms-transform-origin": "50% 50% -" + v.size / 2 + "px",
                                "transform-origin": "50% 50% -" + v.size / 2 + "px"
                            }), v.params.cube.shadow)
                            if (v.isHorizontal()) e.transform("translate3d(0px, " + (v.width / 2 + v.params.cube.shadowOffset) + "px, " + -v.width / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + v.params.cube.shadowScale + ")");
                            else {
                                var f = Math.abs(t) - 90 * Math.floor(Math.abs(t) / 90),
                                    h = 1.5 - (Math.sin(2 * f * Math.PI / 360) / 2 + Math.cos(2 * f * Math.PI / 360) / 2),
                                    g = v.params.cube.shadowScale,
                                    b = v.params.cube.shadowScale / h,
                                    w = v.params.cube.shadowOffset;
                                e.transform("scale3d(" + g + ", 1, " + b + ") translate3d(0px, " + (v.height / 2 + w) + "px, " + -v.height / 2 / b + "px) rotateX(-90deg)")
                            } var C = v.isSafari || v.isUiWebView ? -v.size / 2 : 0;
                        v.wrapper.transform("translate3d(0px,0," + C + "px) rotateX(" + (v.isHorizontal() ? 0 : t) + "deg) rotateY(" + (v.isHorizontal() ? -t : 0) + "deg)")
                    },
                    setTransition: function(e) {
                        v.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), v.params.cube.shadow && !v.isHorizontal() && v.container.find(".swiper-cube-shadow").transition(e)
                    }
                },
                coverflow: {
                    setTranslate: function() {
                        for (var e = v.translate, t = v.isHorizontal() ? -e + v.width / 2 : -e + v.height / 2, n = v.isHorizontal() ? v.params.coverflow.rotate : -v.params.coverflow.rotate, r = v.params.coverflow.depth, i = 0, s = v.slides.length; s > i; i++) {
                            var o = v.slides.eq(i),
                                l = v.slidesSizesGrid[i],
                                p = o[0].swiperSlideOffset,
                                d = (t - p - l / 2) / l * v.params.coverflow.modifier,
                                c = v.isHorizontal() ? n * d : 0,
                                u = v.isHorizontal() ? 0 : n * d,
                                m = -r * Math.abs(d),
                                f = v.isHorizontal() ? 0 : v.params.coverflow.stretch * d,
                                h = v.isHorizontal() ? v.params.coverflow.stretch * d : 0;
                            Math.abs(h) < .001 && (h = 0), Math.abs(f) < .001 && (f = 0), Math.abs(m) < .001 && (m = 0), Math.abs(c) < .001 && (c = 0), Math.abs(u) < .001 && (u = 0);
                            var g = "translate3d(" + h + "px," + f + "px," + m + "px)  rotateX(" + u + "deg) rotateY(" + c + "deg)";
                            if (o.transform(g), o[0].style.zIndex = -Math.abs(Math.round(d)) + 1, v.params.coverflow.slideShadows) {
                                var b = v.isHorizontal() ? o.find(".swiper-slide-shadow-left") : o.find(".swiper-slide-shadow-top"),
                                    w = v.isHorizontal() ? o.find(".swiper-slide-shadow-right") : o.find(".swiper-slide-shadow-bottom");
                                0 === b.length && (b = a('<div class="swiper-slide-shadow-' + (v.isHorizontal() ? "left" : "top") + '"></div>'), o.append(b)), 0 === w.length && (w = a('<div class="swiper-slide-shadow-' + (v.isHorizontal() ? "right" : "bottom") + '"></div>'), o.append(w)), b.length && (b[0].style.opacity = d > 0 ? d : 0), w.length && (w[0].style.opacity = -d > 0 ? -d : 0)
                            }
                        }
                        if (v.browser.ie) {
                            var C = v.wrapper[0].style;
                            C.perspectiveOrigin = t + "px 50%"
                        }
                    },
                    setTransition: function(e) {
                        v.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
                    }
                }
            }, v.lazy = {
                initialImageLoaded: !1,
                loadImageInSlide: function(e, t) {
                    if ("undefined" != typeof e && ("undefined" == typeof t && (t = !0), 0 !== v.slides.length)) {
                        var n = v.slides.eq(e),
                            r = n.find(".swiper-lazy:not(.swiper-lazy-loaded):not(.swiper-lazy-loading)");
                        !n.hasClass("swiper-lazy") || n.hasClass("swiper-lazy-loaded") || n.hasClass("swiper-lazy-loading") || (r = r.add(n[0])), 0 !== r.length && r.each(function() {
                            var e = a(this);
                            e.addClass("swiper-lazy-loading");
                            var r = e.attr("data-background"),
                                i = e.attr("data-src"),
                                s = e.attr("data-srcset");
                            v.loadImage(e[0], i || r, s, !1, function() {
                                if (r ? (e.css("background-image", 'url("' + r + '")'), e.removeAttr("data-background")) : (s && (e.attr("srcset", s), e.removeAttr("data-srcset")), i && (e.attr("src", i), e.removeAttr("data-src"))), e.addClass("swiper-lazy-loaded").removeClass("swiper-lazy-loading"), n.find(".swiper-lazy-preloader, .preloader").remove(), v.params.loop && t) {
                                    var a = n.attr("data-swiper-slide-index");
                                    if (n.hasClass(v.params.slideDuplicateClass)) {
                                        var o = v.wrapper.children('[data-swiper-slide-index="' + a + '"]:not(.' + v.params.slideDuplicateClass + ")");
                                        v.lazy.loadImageInSlide(o.index(), !1)
                                    } else {
                                        var l = v.wrapper.children("." + v.params.slideDuplicateClass + '[data-swiper-slide-index="' + a + '"]');
                                        v.lazy.loadImageInSlide(l.index(), !1)
                                    }
                                }
                                v.emit("onLazyImageReady", v, n[0], e[0])
                            }), v.emit("onLazyImageLoad", v, n[0], e[0])
                        })
                    }
                },
                load: function() {
                    var e;
                    if (v.params.watchSlidesVisibility) v.wrapper.children("." + v.params.slideVisibleClass).each(function() {
                        v.lazy.loadImageInSlide(a(this).index())
                    });
                    else if (v.params.slidesPerView > 1)
                        for (e = v.activeIndex; e < v.activeIndex + v.params.slidesPerView; e++) v.slides[e] && v.lazy.loadImageInSlide(e);
                    else v.lazy.loadImageInSlide(v.activeIndex);
                    if (v.params.lazyLoadingInPrevNext)
                        if (v.params.slidesPerView > 1 || v.params.lazyLoadingInPrevNextAmount && v.params.lazyLoadingInPrevNextAmount > 1) {
                            var t = v.params.lazyLoadingInPrevNextAmount,
                                n = v.params.slidesPerView,
                                r = Math.min(v.activeIndex + n + Math.max(t, n), v.slides.length),
                                i = Math.max(v.activeIndex - Math.max(n, t), 0);
                            for (e = v.activeIndex + v.params.slidesPerView; r > e; e++) v.slides[e] && v.lazy.loadImageInSlide(e);
                            for (e = i; e < v.activeIndex; e++) v.slides[e] && v.lazy.loadImageInSlide(e)
                        } else {
                            var s = v.wrapper.children("." + v.params.slideNextClass);
                            s.length > 0 && v.lazy.loadImageInSlide(s.index());
                            var o = v.wrapper.children("." + v.params.slidePrevClass);
                            o.length > 0 && v.lazy.loadImageInSlide(o.index())
                        }
                },
                onTransitionStart: function() {
                    v.params.lazyLoading && (v.params.lazyLoadingOnTransitionStart || !v.params.lazyLoadingOnTransitionStart && !v.lazy.initialImageLoaded) && v.lazy.load()
                },
                onTransitionEnd: function() {
                    v.params.lazyLoading && !v.params.lazyLoadingOnTransitionStart && v.lazy.load()
                }
            }, v.scrollbar = {
                isTouched: !1,
                setDragPosition: function(e) {
                    var a = v.scrollbar,
                        t = v.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY,
                        n = t - a.track.offset()[v.isHorizontal() ? "left" : "top"] - a.dragSize / 2,
                        r = -v.minTranslate() * a.moveDivider,
                        i = -v.maxTranslate() * a.moveDivider;
                    r > n ? n = r : n > i && (n = i), n = -n / a.moveDivider, v.updateProgress(n), v.setWrapperTranslate(n, !0)
                },
                dragStart: function(e) {
                    var a = v.scrollbar;
                    a.isTouched = !0, e.preventDefault(), e.stopPropagation(), a.setDragPosition(e), clearTimeout(a.dragTimeout), a.track.transition(0), v.params.scrollbarHide && a.track.css("opacity", 1), v.wrapper.transition(100), a.drag.transition(100), v.emit("onScrollbarDragStart", v)
                },
                dragMove: function(e) {
                    var a = v.scrollbar;
                    a.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, a.setDragPosition(e), v.wrapper.transition(0), a.track.transition(0), a.drag.transition(0), v.emit("onScrollbarDragMove", v))
                },
                dragEnd: function(e) {
                    var a = v.scrollbar;
                    a.isTouched && (a.isTouched = !1, v.params.scrollbarHide && (clearTimeout(a.dragTimeout), a.dragTimeout = setTimeout(function() {
                        a.track.css("opacity", 0), a.track.transition(400)
                    }, 1e3)), v.emit("onScrollbarDragEnd", v), v.params.scrollbarSnapOnRelease && v.slideReset())
                },
                enableDraggable: function() {
                    var e = v.scrollbar,
                        t = v.support.touch ? e.track : document;
                    a(e.track).on(v.touchEvents.start, e.dragStart), a(t).on(v.touchEvents.move, e.dragMove), a(t).on(v.touchEvents.end, e.dragEnd)
                },
                disableDraggable: function() {
                    var e = v.scrollbar,
                        t = v.support.touch ? e.track : document;
                    a(e.track).off(v.touchEvents.start, e.dragStart), a(t).off(v.touchEvents.move, e.dragMove), a(t).off(v.touchEvents.end, e.dragEnd)
                },
                set: function() {
                    if (v.params.scrollbar) {
                        var e = v.scrollbar;
                        e.track = a(v.params.scrollbar), v.params.uniqueNavElements && "string" == typeof v.params.scrollbar && e.track.length > 1 && 1 === v.container.find(v.params.scrollbar).length && (e.track = v.container.find(v.params.scrollbar)), e.drag = e.track.find(".swiper-scrollbar-drag"), 0 === e.drag.length && (e.drag = a('<div class="swiper-scrollbar-drag"></div>'), e.track.append(e.drag)), e.drag[0].style.width = "", e.drag[0].style.height = "", e.trackSize = v.isHorizontal() ? e.track[0].offsetWidth : e.track[0].offsetHeight, e.divider = v.size / v.virtualSize, e.moveDivider = e.divider * (e.trackSize / v.size), e.dragSize = e.trackSize * e.divider, v.isHorizontal() ? e.drag[0].style.width = e.dragSize + "px" : e.drag[0].style.height = e.dragSize + "px", e.divider >= 1 ? e.track[0].style.display = "none" : e.track[0].style.display = "", v.params.scrollbarHide && (e.track[0].style.opacity = 0)
                    }
                },
                setTranslate: function() {
                    if (v.params.scrollbar) {
                        var e, a = v.scrollbar,
                            t = (v.translate || 0, a.dragSize);
                        e = (a.trackSize - a.dragSize) * v.progress, v.rtl && v.isHorizontal() ? (e = -e, e > 0 ? (t = a.dragSize - e, e = 0) : -e + a.dragSize > a.trackSize && (t = a.trackSize + e)) : 0 > e ? (t = a.dragSize + e, e = 0) : e + a.dragSize > a.trackSize && (t = a.trackSize - e), v.isHorizontal() ? (v.support.transforms3d ? a.drag.transform("translate3d(" + e + "px, 0, 0)") : a.drag.transform("translateX(" + e + "px)"), a.drag[0].style.width = t + "px") : (v.support.transforms3d ? a.drag.transform("translate3d(0px, " + e + "px, 0)") : a.drag.transform("translateY(" + e + "px)"), a.drag[0].style.height = t + "px"), v.params.scrollbarHide && (clearTimeout(a.timeout), a.track[0].style.opacity = 1, a.timeout = setTimeout(function() {
                            a.track[0].style.opacity = 0, a.track.transition(400)
                        }, 1e3))
                    }
                },
                setTransition: function(e) {
                    v.params.scrollbar && v.scrollbar.drag.transition(e)
                }
            }, v.controller = {
                LinearSpline: function(e, a) {
                    this.x = e, this.y = a, this.lastIndex = e.length - 1;
                    var t, n;
                    this.x.length;
                    this.interpolate = function(e) {
                        return e ? (n = r(this.x, e), t = n - 1, (e - this.x[t]) * (this.y[n] - this.y[t]) / (this.x[n] - this.x[t]) + this.y[t]) : 0
                    };
                    var r = function() {
                        var e, a, t;
                        return function(n, r) {
                            for (a = -1, e = n.length; e - a > 1;) n[t = e + a >> 1] <= r ? a = t : e = t;
                            return e
                        }
                    }()
                },
                getInterpolateFunction: function(e) {
                    v.controller.spline || (v.controller.spline = v.params.loop ? new v.controller.LinearSpline(v.slidesGrid, e.slidesGrid) : new v.controller.LinearSpline(v.snapGrid, e.snapGrid))
                },
                setTranslate: function(e, a) {
                    function t(a) {
                        e = a.rtl && "horizontal" === a.params.direction ? -v.translate : v.translate, "slide" === v.params.controlBy && (v.controller.getInterpolateFunction(a), r = -v.controller.spline.interpolate(-e)), r && "container" !== v.params.controlBy || (n = (a.maxTranslate() - a.minTranslate()) / (v.maxTranslate() - v.minTranslate()), r = (e - v.minTranslate()) * n + a.minTranslate()), v.params.controlInverse && (r = a.maxTranslate() - r), a.updateProgress(r), a.setWrapperTranslate(r, !1, v), a.updateActiveIndex()
                    }
                    var n, r, i = v.params.control;
                    if (v.isArray(i))
                        for (var s = 0; s < i.length; s++) i[s] !== a && i[s] instanceof Swiper && t(i[s]);
                    else i instanceof Swiper && a !== i && t(i)
                },
                setTransition: function(e, a) {
                    function t(a) {
                        a.setWrapperTransition(e, v), 0 !== e && (a.onTransitionStart(), a.wrapper.transitionEnd(function() {
                            r && (a.params.loop && "slide" === v.params.controlBy && a.fixLoop(), a.onTransitionEnd())
                        }))
                    }
                    var n, r = v.params.control;
                    if (v.isArray(r))
                        for (n = 0; n < r.length; n++) r[n] !== a && r[n] instanceof Swiper && t(r[n]);
                    else r instanceof Swiper && a !== r && t(r)
                }
            }, v.parallax = {
                setTranslate: function() {
                    v.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                        l(this, v.progress)
                    }), v.slides.each(function() {
                        var e = a(this);
                        e.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                            var a = Math.min(Math.max(e[0].progress, -1), 1);
                            l(this, a)
                        })
                    })
                },
                setTransition: function(e) {
                    "undefined" == typeof e && (e = v.params.speed), v.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                        var t = a(this),
                            n = parseInt(t.attr("data-swiper-parallax-duration"), 10) || e;
                        0 === e && (n = 0), t.transition(n)
                    })
                }
            }, v._plugins = [];
            for (var N in v.plugins) {
                var H = v.plugins[N](v, v.params[N]);
                H && v._plugins.push(H)
            }
            return v.callPlugins = function(e) {
                for (var a = 0; a < v._plugins.length; a++) e in v._plugins[a] && v._plugins[a][e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
            }, v.emitterEventListeners = {}, v.emit = function(e) {
                v.params[e] && v.params[e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                var a;
                if (v.emitterEventListeners[e])
                    for (a = 0; a < v.emitterEventListeners[e].length; a++) v.emitterEventListeners[e][a](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                v.callPlugins && v.callPlugins(e, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
            }, v.on = function(e, a) {
                return e = p(e), v.emitterEventListeners[e] || (v.emitterEventListeners[e] = []), v.emitterEventListeners[e].push(a), v
            }, v.off = function(e, a) {
                var t;
                if (e = p(e), "undefined" == typeof a) return v.emitterEventListeners[e] = [], v;
                if (v.emitterEventListeners[e] && 0 !== v.emitterEventListeners[e].length) {
                    for (t = 0; t < v.emitterEventListeners[e].length; t++) v.emitterEventListeners[e][t] === a && v.emitterEventListeners[e].splice(t, 1);
                    return v
                }
            }, v.once = function(e, a) {
                e = p(e);
                var t = function() {
                    a(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]), v.off(e, t)
                };
                return v.on(e, t), v
            }, v.a11y = {
                makeFocusable: function(e) {
                    return e.attr("tabIndex", "0"), e
                },
                addRole: function(e, a) {
                    return e.attr("role", a), e
                },
                addLabel: function(e, a) {
                    return e.attr("aria-label", a), e
                },
                disable: function(e) {
                    return e.attr("aria-disabled", !0), e
                },
                enable: function(e) {
                    return e.attr("aria-disabled", !1), e
                },
                onEnterKey: function(e) {
                    13 === e.keyCode && (a(e.target).is(v.params.nextButton) ? (v.onClickNext(e), v.isEnd ? v.a11y.notify(v.params.lastSlideMessage) : v.a11y.notify(v.params.nextSlideMessage)) : a(e.target).is(v.params.prevButton) && (v.onClickPrev(e), v.isBeginning ? v.a11y.notify(v.params.firstSlideMessage) : v.a11y.notify(v.params.prevSlideMessage)), a(e.target).is("." + v.params.bulletClass) && a(e.target)[0].click())
                },
                liveRegion: a('<span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>'),
                notify: function(e) {
                    var a = v.a11y.liveRegion;
                    0 !== a.length && (a.html(""), a.html(e))
                },
                init: function() {
                    v.params.nextButton && v.nextButton && v.nextButton.length > 0 && (v.a11y.makeFocusable(v.nextButton), v.a11y.addRole(v.nextButton, "button"), v.a11y.addLabel(v.nextButton, v.params.nextSlideMessage)), v.params.prevButton && v.prevButton && v.prevButton.length > 0 && (v.a11y.makeFocusable(v.prevButton), v.a11y.addRole(v.prevButton, "button"), v.a11y.addLabel(v.prevButton, v.params.prevSlideMessage)), a(v.container).append(v.a11y.liveRegion)
                },
                initPagination: function() {
                    v.params.pagination && v.params.paginationClickable && v.bullets && v.bullets.length && v.bullets.each(function() {
                        var e = a(this);
                        v.a11y.makeFocusable(e), v.a11y.addRole(e, "button"), v.a11y.addLabel(e, v.params.paginationBulletMessage.replace(/{{index}}/, e.index() + 1))
                    })
                },
                destroy: function() {
                    v.a11y.liveRegion && v.a11y.liveRegion.length > 0 && v.a11y.liveRegion.remove()
                }
            }, v.init = function() {
                v.params.loop && v.createLoop(), v.updateContainerSize(), v.updateSlidesSize(), v.updatePagination(), v.params.scrollbar && v.scrollbar && (v.scrollbar.set(), v.params.scrollbarDraggable && v.scrollbar.enableDraggable()), "slide" !== v.params.effect && v.effects[v.params.effect] && (v.params.loop || v.updateProgress(), v.effects[v.params.effect].setTranslate()), v.params.loop ? v.slideTo(v.params.initialSlide + v.loopedSlides, 0, v.params.runCallbacksOnInit) : (v.slideTo(v.params.initialSlide, 0, v.params.runCallbacksOnInit), 0 === v.params.initialSlide && (v.parallax && v.params.parallax && v.parallax.setTranslate(), v.lazy && v.params.lazyLoading && (v.lazy.load(), v.lazy.initialImageLoaded = !0))), v.attachEvents(), v.params.observer && v.support.observer && v.initObservers(), v.params.preloadImages && !v.params.lazyLoading && v.preloadImages(), v.params.autoplay && v.startAutoplay(), v.params.keyboardControl && v.enableKeyboardControl && v.enableKeyboardControl(), v.params.mousewheelControl && v.enableMousewheelControl && v.enableMousewheelControl(), v.params.hashnav && v.hashnav && v.hashnav.init(), v.params.a11y && v.a11y && v.a11y.init(), v.emit("onInit", v)
            }, v.cleanupStyles = function() {
                v.container.removeClass(v.classNames.join(" ")).removeAttr("style"), v.wrapper.removeAttr("style"), v.slides && v.slides.length && v.slides.removeClass([v.params.slideVisibleClass, v.params.slideActiveClass, v.params.slideNextClass, v.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"), v.paginationContainer && v.paginationContainer.length && v.paginationContainer.removeClass(v.params.paginationHiddenClass), v.bullets && v.bullets.length && v.bullets.removeClass(v.params.bulletActiveClass), v.params.prevButton && a(v.params.prevButton).removeClass(v.params.buttonDisabledClass), v.params.nextButton && a(v.params.nextButton).removeClass(v.params.buttonDisabledClass), v.params.scrollbar && v.scrollbar && (v.scrollbar.track && v.scrollbar.track.length && v.scrollbar.track.removeAttr("style"), v.scrollbar.drag && v.scrollbar.drag.length && v.scrollbar.drag.removeAttr("style"))
            }, v.destroy = function(e, a) {
                v.detachEvents(), v.stopAutoplay(), v.params.scrollbar && v.scrollbar && v.params.scrollbarDraggable && v.scrollbar.disableDraggable(), v.params.loop && v.destroyLoop(), a && v.cleanupStyles(), v.disconnectObservers(), v.params.keyboardControl && v.disableKeyboardControl && v.disableKeyboardControl(), v.params.mousewheelControl && v.disableMousewheelControl && v.disableMousewheelControl(), v.params.a11y && v.a11y && v.a11y.destroy(), v.emit("onDestroy"), e !== !1 && (v = null)
            }, v.init(), v
        }
    }, Swiper.prototype = {
        isSafari: function() {
            var e = navigator.userAgent.toLowerCase();
            return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
        }(),
        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),
        isArray: function(e) {
            return "[object Array]" === Object.prototype.toString.apply(e)
        },
        browser: {
            ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
            ieTouch: window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1
        },
        device: function() {
            var e = navigator.userAgent,
                a = e.match(/(Android);?[\s\/]+([\d.]+)?/),
                t = e.match(/(iPad).*OS\s([\d_]+)/),
                n = e.match(/(iPod)(.*OS\s([\d_]+))?/),
                r = !t && e.match(/(iPhone\sOS)\s([\d_]+)/);
            return {
                ios: t || r || n,
                android: a
            }
        }(),
        support: {
            touch: window.Modernizr && Modernizr.touch === !0 || function() {
                return !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch)
            }(),
            transforms3d: window.Modernizr && Modernizr.csstransforms3d === !0 || function() {
                var e = document.createElement("div").style;
                return "webkitPerspective" in e || "MozPerspective" in e || "OPerspective" in e || "MsPerspective" in e || "perspective" in e
            }(),
            flexbox: function() {
                for (var e = document.createElement("div").style, a = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), t = 0; t < a.length; t++)
                    if (a[t] in e) return !0
            }(),
            observer: function() {
                return "MutationObserver" in window || "WebkitMutationObserver" in window
            }()
        },
        plugins: {}
    }
}();
//# sourceMappingURL=framework7.min.js.map