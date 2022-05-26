/*!
 * froala_editor v2.8.1 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2018 Froala Labs
 */
! function(r) {
    "function" == typeof define && define.amd ? define(["jquery"], r) : "object" == typeof module && module.exports ? module.exports = function(o, e) {
        return e === undefined && (e = "undefined" != typeof window ? require("jquery") : require("jquery")(o)), r(e)
    } : r(window.jQuery)
}(function(C) {
    C.extend(C.FE.POPUP_TEMPLATES, {
        "colors.picker": "[_BUTTONS_][_TEXT_COLORS_][_BACKGROUND_COLORS_][_CUSTOM_COLOR_]"
    }), C.extend(C.FE.DEFAULTS, {
        colorsText: ["#54ACD2", "#2C82C9", "#9365B8", "#475577", "#000000", "REMOVE"],
        colorsBackground: ["#61BD6D", "#1ABC9C", "#54ACD2", "#2C82C9", "#9365B8", "REMOVE"],
        colorsStep: 7,
        colorsHEXInput: !0,
        colorsDefaultTab: "text",
        colorsButtons: ["colorsBack", "|", "-"]
    }), C.FE.PLUGINS.colors = function(E) {
        function e() {
            E.popups.hide("colors.picker")
        }

        function s(o) {
            for (var e = "text" == o ? E.opts.colorsText : E.opts.colorsBackground, r = '<div class="fr-color-set fr-' + o + "-color" + (E.opts.colorsDefaultTab == o || "text" != E.opts.colorsDefaultTab && "background" != E.opts.colorsDefaultTab && "text" == o ? " fr-selected-set" : "") + '">', t = 0; t < e.length; t++) 0 !== t && t % E.opts.colorsStep == 0 && (r += "<br>"), "REMOVE" != e[t] ? r += '<span class="fr-command fr-select-color" style="background: ' + e[t] + ';" tabIndex="-1" aria-selected="false" role="button" data-cmd="' + o + 'Color" data-param1="' + e[t] + '"><span class="fr-sr-only">' + E.language.translate("Color") + " " + e[t] + "&nbsp;&nbsp;&nbsp;</span></span>" : r += '<span class="fr-command fr-select-color" data-cmd="' + o + 'Color" tabIndex="-1" role="button" data-param1="REMOVE" title="' + E.language.translate("Clear Formatting") + '">' + E.icon.create("remove") + '<span class="fr-sr-only">' + E.language.translate("Clear Formatting") + "</span></span>";
            return r + "</div>"
        }

        function a(o) {
            var e, r = E.popups.get("colors.picker"),
                t = C(E.selection.element());
            e = "background" == o ? "background-color" : "color";
            var a = r.find(".fr-" + o + "-color .fr-select-color");
            for (a.find(".fr-selected-color").remove(), a.removeClass("fr-active-item"), a.not('[data-param1="REMOVE"]').attr("aria-selected", !1); t.get(0) != E.el;) {
                if ("transparent" != t.css(e) && "rgba(0, 0, 0, 0)" != t.css(e)) {
                    var s = r.find(".fr-" + o + '-color .fr-select-color[data-param1="' + E.helpers.RGBToHex(t.css(e)) + '"]');
                    s.append('<span class="fr-selected-color" aria-hidden="true">\uf00c</span>'), s.addClass("fr-active-item").attr("aria-selected", !0);
                    break
                }
                t = t.parent()
            }
            var l = r.find(".fr-color-hex-layer input");
            l.length && l.val(E.helpers.RGBToHex(t.css(e))).trigger("change")
        }

        function t(o) {
            "REMOVE" != o ? E.format.applyStyle("background-color", E.helpers.HEXtoRGB(o)) : E.format.removeStyle("background-color"), e()
        }

        function l(o) {
            "REMOVE" != o ? E.format.applyStyle("color", E.helpers.HEXtoRGB(o)) : E.format.removeStyle("color"), e()
        }
        return {
            showColorsPopup: function() {
                var o = E.$tb.find('.fr-command[data-cmd="color"]'),
                    e = E.popups.get("colors.picker");
                if (e || (e = function() {
                        var o, e = '<div class="fr-buttons fr-colors-buttons">';
                        E.opts.toolbarInline && 0 < E.opts.colorsButtons.length && (e += E.button.buildList(E.opts.colorsButtons)), e += (o = '<div class="fr-colors-tabs fr-group">', o += '<span class="fr-colors-tab ' + ("background" == E.opts.colorsDefaultTab ? "" : "fr-selected-tab ") + 'fr-command" tabIndex="-1" role="button" aria-pressed="' + ("background" != E.opts.colorsDefaultTab) + '" data-param1="text" data-cmd="colorChangeSet" title="' + E.language.translate("Text") + '">' + E.language.translate("Text") + "</span>", (o += '<span class="fr-colors-tab ' + ("background" == E.opts.colorsDefaultTab ? "fr-selected-tab " : "") + 'fr-command" tabIndex="-1" role="button" aria-pressed="' + ("background" == E.opts.colorsDefaultTab) + '" data-param1="background" data-cmd="colorChangeSet" title="' + E.language.translate("Background") + '">' + E.language.translate("Background") + "</span>") + "</div></div>");
                        var r = "";
                        E.opts.colorsHEXInput && (r = '<div class="fr-color-hex-layer fr-active fr-layer" id="fr-color-hex-layer-' + E.id + '"><div class="fr-input-line"><input maxlength="7" class="__spectrum_color" id="fr-color-hex-layer-text-' + E.id + '" type="text" placeholder="' + E.language.translate("HEX Color") + '" tabIndex="1" aria-required="true"></div><div class="fr-action-buttons"><button type="button" class="fr-command fr-submit" data-cmd="customColor" tabIndex="2" role="button">' + E.language.translate("OK") + "</button></div></div>");
                        var b, t = {
                                buttons: e,
                                text_colors: s("text"),
                                background_colors: s("background"),
                                custom_color: r
                            },
                            a = E.popups.create("colors.picker", t);
                        return b = a, E.events.on("popup.tab", function(o) {
                            var e = C(o.currentTarget);
                            if (!E.popups.isVisible("colors.picker") || !e.is("span")) return !0;
                            var r = o.which,
                                t = !0;
                            if (C.FE.KEYCODE.TAB == r) {
                                var a = b.find(".fr-buttons");
                                t = !E.accessibility.focusToolbar(a, !!o.shiftKey)
                            } else if (C.FE.KEYCODE.ARROW_UP == r || C.FE.KEYCODE.ARROW_DOWN == r || C.FE.KEYCODE.ARROW_LEFT == r || C.FE.KEYCODE.ARROW_RIGHT == r) {
                                if (e.is("span.fr-select-color")) {
                                    var s = e.parent().find("span.fr-select-color"),
                                        l = s.index(e),
                                        c = E.opts.colorsStep,
                                        n = Math.floor(s.length / c),
                                        i = l % c,
                                        p = Math.floor(l / c),
                                        u = p * c + i,
                                        d = n * c;
                                    C.FE.KEYCODE.ARROW_UP == r ? u = ((u - c) % d + d) % d : C.FE.KEYCODE.ARROW_DOWN == r ? u = (u + c) % d : C.FE.KEYCODE.ARROW_LEFT == r ? u = ((u - 1) % d + d) % d : C.FE.KEYCODE.ARROW_RIGHT == r && (u = (u + 1) % d);
                                    var f = C(s.get(u));
                                    E.events.disableBlur(), f.focus(), t = !1
                                }
                            } else C.FE.KEYCODE.ENTER == r && (E.button.exec(e), t = !1);
                            return !1 === t && (o.preventDefault(), o.stopPropagation()), t
                        }, !0), a
                    }()), !e.hasClass("fr-active"))
                    if (E.popups.setContainer("colors.picker", E.$tb), a(e.find(".fr-selected-tab").attr("data-param1")), o.is(":visible")) {
                        var r = o.offset().left + o.outerWidth() / 2,
                            t = o.offset().top + (E.opts.toolbarBottom ? 10 : o.outerHeight() - 10);
                        E.popups.show("colors.picker", r, t, o.outerHeight())
                    } else E.position.forSelection(e), E.popups.show("colors.picker")
                    
                    /* added by ITX Developer */
                    $('.spectrum_color_picker').trigger('click');
            },
            hideColorsPopup: e,
            changeSet: function(o, e) {
                o.hasClass("fr-selected-tab") || (o.siblings().removeClass("fr-selected-tab").attr("aria-pressed", !1), o.addClass("fr-selected-tab").attr("aria-pressed", !0), o.parents(".fr-popup").find(".fr-color-set").removeClass("fr-selected-set"), o.parents(".fr-popup").find(".fr-color-set.fr-" + e + "-color").addClass("fr-selected-set"), a(e)), E.accessibility.focusPopup(o.parents(".fr-popup"))
            },
            background: t,
            customColor: function() {
                var o = E.popups.get("colors.picker"),
                    e = o.find(".fr-color-hex-layer input");
                if (e.length) {
                    var r = e.val();
                    "background" == o.find(".fr-selected-tab").attr("data-param1") ? t(r) : l(r)
                }
            },
            text: l,
            back: function() {
                E.popups.hide("colors.picker"), E.toolbar.showInline()
            }
        }
    }, C.FE.DefineIcon("colors", {
        NAME: "tint"
    }), C.FE.RegisterCommand("color", {
        title: "Colors",
        undo: !1,
        focus: !0,
        refreshOnCallback: !1,
        popup: !0,
        callback: function() {
            this.popups.isVisible("colors.picker") ? (this.$el.find(".fr-marker").length && (this.events.disableBlur(), this.selection.restore()), this.popups.hide("colors.picker")) : this.colors.showColorsPopup()
        },
        plugin: "colors"
    }), C.FE.RegisterCommand("textColor", {
        undo: !0,
        callback: function(o, e) {
            this.colors.text(e)
        }
    }), C.FE.RegisterCommand("backgroundColor", {
        undo: !0,
        callback: function(o, e) {
            this.colors.background(e)
        }
    }), C.FE.RegisterCommand("colorChangeSet", {
        undo: !1,
        focus: !1,
        callback: function(o, e) {
            var r = this.popups.get("colors.picker").find('.fr-command[data-cmd="' + o + '"][data-param1="' + e + '"]');
            this.colors.changeSet(r, e)
        }
    }), C.FE.DefineIcon("colorsBack", {
        NAME: "arrow-left"
    }), C.FE.RegisterCommand("colorsBack", {
        title: "Back",
        undo: !1,
        focus: !1,
        back: !0,
        refreshAfterCallback: !1,
        callback: function() {
            this.colors.back()
        }
    }), C.FE.RegisterCommand("customColor", {
        title: "OK",
        undo: !0,
        callback: function() {
            this.colors.customColor()
        }
    }), C.FE.DefineIcon("remove", {
        NAME: "eraser"
    })
});