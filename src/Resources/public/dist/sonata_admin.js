(window.webpackJsonp=window.webpackJsonp||[]).push([["sonata_admin"],{"+bVH":function(e,t,s){(function(e){!function(e,t,s,n){var o="treeView",i={togglersAttribute:"[data-treeview-toggler]",toggledState:"is-toggled",activeState:"is-active",defaultToggled:"[data-treeview-toggled]",instanceAttribute:"data-treeview-instance"};function a(t,s){this.element=t,this.options=e.extend({},i,s),this._defaults=i,this._name=o,this.init()}a.prototype={init:function(){this.setElements(),this.setEvents(),this.setAttributes(),this.showActiveElement(),this.showToggledElements()},setElements:function(){this.$element=e(this.element),this.$togglers=this.$element.find(this.options.togglersAttribute),this.$defaultToggled=this.$element.find(this.options.defaultToggled)},setAttributes:function(){this.$element.attr(this.options.instanceAttribute,!0)},setEvents:function(){this.$togglers.on("click",e.proxy(this.toggle,this))},toggle:function(t){var s=e(t.currentTarget).parent();s.toggleClass(this.options.toggledState),s.next("ul").slideToggle()},showActiveElement:function(){var e="["+this.options.instanceAttribute+"] ul, ["+this.options.instanceAttribute+"]",t=this.$element.find("."+this.options.activeState).parents(e);t.show(),t.prev().addClass(this.options.toggledState)},showToggledElements:function(){this.$defaultToggled.addClass(this.options.toggledState),this.$defaultToggled.next("ul").show()}},e.fn[o]=function(t){return this.each(function(){e.data(this,"plugin_"+o)||e.data(this,"plugin_"+o,new a(this,t))})}}(e,window,document)}).call(this,s("EVdn"))},ABVY:function(e,t,s){var n={"./af":"7u2o","./af.js":"7u2o","./ar":"FWQc","./ar-ma":"RLBd","./ar-ma.js":"RLBd","./ar-sa":"7K/G","./ar-sa.js":"7K/G","./ar.js":"FWQc","./az":"o82s","./az.js":"o82s","./be":"W94Y","./be.js":"W94Y","./bg":"WMAa","./bg.js":"WMAa","./bn":"71Z+","./bn.js":"71Z+","./bo":"rn+3","./bo.js":"rn+3","./br":"MXWb","./br.js":"MXWb","./bs":"e3J9","./bs.js":"e3J9","./ca":"H1gI","./ca.js":"H1gI","./cs":"CiKa","./cs.js":"CiKa","./cv":"gDG+","./cv.js":"gDG+","./cy":"zbMW","./cy.js":"zbMW","./da":"zScd","./da.js":"zScd","./de":"nNCx","./de-at":"HF8u","./de-at.js":"HF8u","./de.js":"nNCx","./el":"/Lnv","./el.js":"/Lnv","./en-au":"xwH2","./en-au.js":"xwH2","./en-ca":"4o4B","./en-ca.js":"4o4B","./en-gb":"odVV","./en-gb.js":"odVV","./eo":"ASin","./eo.js":"ASin","./es":"muuN","./es.js":"muuN","./et":"HGVV","./et.js":"HGVV","./eu":"OHIq","./eu.js":"OHIq","./fa":"IGK/","./fa.js":"IGK/","./fi":"TwrC","./fi.js":"TwrC","./fo":"La4M","./fo.js":"La4M","./fr":"IZ9p","./fr-ca":"bsch","./fr-ca.js":"bsch","./fr.js":"IZ9p","./gl":"ykaU","./gl.js":"ykaU","./he":"zziG","./he.js":"zziG","./hi":"D8if","./hi.js":"D8if","./hr":"9Sfd","./hr.js":"9Sfd","./hu":"XNuN","./hu.js":"XNuN","./hy-am":"yoxN","./hy-am.js":"yoxN","./id":"+SVc","./id.js":"+SVc","./is":"s8+N","./is.js":"s8+N","./it":"6aBR","./it.js":"6aBR","./ja":"qWfF","./ja.js":"qWfF","./ka":"Y2/6","./ka.js":"Y2/6","./km":"2c8W","./km.js":"2c8W","./ko":"7rWf","./ko.js":"7rWf","./lb":"wQhd","./lb.js":"wQhd","./lt":"kYux","./lt.js":"kYux","./lv":"3CVf","./lv.js":"3CVf","./mk":"VoaS","./mk.js":"VoaS","./ml":"qk7l","./ml.js":"qk7l","./mr":"9M5W","./mr.js":"9M5W","./ms-my":"FX88","./ms-my.js":"FX88","./my":"Aizw","./my.js":"Aizw","./nb":"t8V1","./nb.js":"t8V1","./ne":"Y+vC","./ne.js":"Y+vC","./nl":"qy5r","./nl.js":"qy5r","./nn":"XJ7K","./nn.js":"XJ7K","./pl":"MY+f","./pl.js":"MY+f","./pt":"dDff","./pt-br":"SePE","./pt-br.js":"SePE","./pt.js":"dDff","./ro":"sJo/","./ro.js":"sJo/","./ru":"Uv+z","./ru.js":"Uv+z","./sk":"6IAR","./sk.js":"6IAR","./sl":"uxlR","./sl.js":"uxlR","./sq":"hKHF","./sq.js":"hKHF","./sr":"9bBz","./sr-cyrl":"STHY","./sr-cyrl.js":"STHY","./sr.js":"9bBz","./sv":"lobY","./sv.js":"lobY","./ta":"CdYs","./ta.js":"CdYs","./th":"YK9c","./th.js":"YK9c","./tl-ph":"E9cy","./tl-ph.js":"E9cy","./tr":"llmG","./tr.js":"llmG","./tzm":"jkzC","./tzm-latn":"w3CH","./tzm-latn.js":"w3CH","./tzm.js":"jkzC","./uk":"Luw3","./uk.js":"Luw3","./uz":"jWxr","./uz.js":"jWxr","./vi":"T3YS","./vi.js":"T3YS","./zh-cn":"BZn8","./zh-cn.js":"BZn8","./zh-tw":"9GSt","./zh-tw.js":"9GSt"};function o(e){var t=i(e);return s(t)}function i(e){var t=n[e];if(!(t+1)){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}return t}o.keys=function(){return Object.keys(n)},o.resolve=i,e.exports=o,o.id="ABVY"},BYbX:function(e,t,s){"use strict";s.r(t),function(e){var t=s("EVdn"),n=s.n(t);s("ucoa"),s("lgBF"),s("G1gL"),s("w5g4"),s("MIQu"),s("1uyb"),s("Onkx"),s("dKg1"),s("UE1g"),s("VOtm"),s("usaW"),s("BkE+"),s("KGuw"),s("hNNL"),s("76gO"),s("eR9f"),s("O68L"),s("Ul+L"),s("gZf4"),s("+bVH");e.jQuery=n.a;var o=window.navigator.userLanguage||window.navigator.language;o=o.split("-")[0],s("mwm7")("./select2_locale_"+o+".js").catch("failed to import locale component for select2"),Promise.all([s.e(0),s.e(1)]).then(s.t.bind(null,"wd/R",7)).then(function(e){e.locale(o)}).catch("failed to configure momentJS locale"),s("Bk91")("./"+o+".js").catch("failed to load language component for momentJS")}.call(this,s("yLpj"))},Bk91:function(e,t,s){var n={"./af.js":["K/tc",0,1],"./ar-dz.js":["o1bE",0,1],"./ar-kw.js":["Qj4J",0,1],"./ar-ly.js":["HP3h",0,1],"./ar-ma.js":["CoRJ",0,1],"./ar-sa.js":["gjCT",0,1],"./ar-tn.js":["bYM6",0,1],"./ar.js":["jnO4",0,1],"./az.js":["SFxW",0,1],"./be.js":["H8ED",0,1],"./bg.js":["hKrs",0,1],"./bm.js":["p/rL",0,1],"./bn.js":["kEOa",0,1],"./bo.js":["0mo+",0,1],"./br.js":["aIdf",0,1],"./bs.js":["JVSJ",0,1],"./ca.js":["1xZ4",0,1],"./cs.js":["PA2r",0,1],"./cv.js":["A+xa",0,1],"./cy.js":["l5ep",0,1],"./da.js":["DxQv",0,1],"./de-at.js":["s+uk",0,1],"./de-ch.js":["u3GI",0,1],"./de.js":["tGlX",0,1],"./dv.js":["WYrj",0,1],"./el.js":["jUeY",0,1],"./en-SG.js":["zavE",0,1],"./en-au.js":["Dmvi",0,1],"./en-ca.js":["OIYi",0,1],"./en-gb.js":["Oaa7",0,1],"./en-ie.js":["4dOw",0,1],"./en-il.js":["czMo",0,1],"./en-nz.js":["b1Dy",0,1],"./eo.js":["Zduo",0,1],"./es-do.js":["CjzT",0,1],"./es-us.js":["Vclq",0,1],"./es.js":["iYuL",0,1],"./et.js":["7BjC",0,1],"./eu.js":["D/JM",0,1],"./fa.js":["jfSC",0,1],"./fi.js":["gekB",0,1],"./fo.js":["ByF4",0,1],"./fr-ca.js":["2fjn",0,1],"./fr-ch.js":["Dkky",0,1],"./fr.js":["nyYc",0,1],"./fy.js":["cRix",0,1],"./ga.js":["USCx",0,1],"./gd.js":["9rRi",0,1],"./gl.js":["iEDd",0,1],"./gom-latn.js":["DKr+",0,1],"./gu.js":["4MV3",0,1],"./he.js":["x6pH",0,1],"./hi.js":["3E1r",0,1],"./hr.js":["S6ln",0,1],"./hu.js":["WxRl",0,1],"./hy-am.js":["1rYy",0,1],"./id.js":["UDhR",0,1],"./is.js":["BVg3",0,1],"./it-ch.js":["bxKX",0,1],"./it.js":["bpih",0,1],"./ja.js":["B55N",0,1],"./jv.js":["tUCv",0,1],"./ka.js":["IBtZ",0,1],"./kk.js":["bXm7",0,1],"./km.js":["6B0Y",0,1],"./kn.js":["PpIw",0,1],"./ko.js":["Ivi+",0,1],"./ku.js":["JCF/",0,1],"./ky.js":["lgnt",0,1],"./lb.js":["RAwQ",0,1],"./lo.js":["sp3z",0,1],"./lt.js":["JvlW",0,1],"./lv.js":["uXwI",0,1],"./me.js":["KTz0",0,1],"./mi.js":["aIsn",0,1],"./mk.js":["aQkU",0,1],"./ml.js":["AvvY",0,1],"./mn.js":["lYtQ",0,1],"./mr.js":["Ob0Z",0,1],"./ms-my.js":["ZAMP",0,1],"./ms.js":["6+QB",0,1],"./mt.js":["G0Uy",0,1],"./my.js":["honF",0,1],"./nb.js":["bOMt",0,1],"./ne.js":["OjkT",0,1],"./nl-be.js":["2ykv",0,1],"./nl.js":["+s0g",0,1],"./nn.js":["uEye",0,1],"./pa-in.js":["8/+R",0,1],"./pl.js":["jVdC",0,1],"./pt-br.js":["0tRk",0,1],"./pt.js":["8mBD",0,1],"./ro.js":["lyxo",0,1],"./ru.js":["lXzo",0,1],"./sd.js":["Z4QM",0,1],"./se.js":["//9w",0,1],"./si.js":["7aV9",0,1],"./sk.js":["e+ae",0,1],"./sl.js":["gVVK",0,1],"./sq.js":["yPMs",0,1],"./sr-cyrl.js":["E+lV",0,1],"./sr.js":["zx6S",0,1],"./ss.js":["Ur1D",0,1],"./sv.js":["X709",0,1],"./sw.js":["dNwA",0,1],"./ta.js":["PeUW",0,1],"./te.js":["XLvN",0,1],"./tet.js":["V2x9",0,1],"./tg.js":["Oxv6",0,1],"./th.js":["EOgW",0,1],"./tl-ph.js":["Dzi0",0,1],"./tlh.js":["z3Vd",0,1],"./tr.js":["DoHr",0,1],"./tzl.js":["z1FC",0,1],"./tzm-latn.js":["tT3J",0,1],"./tzm.js":["wQk9",0,1],"./ug-cn.js":["YRex",0,1],"./uk.js":["raLr",0,1],"./ur.js":["UpQW",0,1],"./uz-latn.js":["AQ68",0,1],"./uz.js":["Loxo",0,1],"./vi.js":["KSF8",0,1],"./x-pseudo.js":["/X5v",0,1],"./yo.js":["fzPg",0,1],"./zh-cn.js":["XDpg",0,1],"./zh-hk.js":["SatO",0,1],"./zh-tw.js":["kOpN",0,1]};function o(e){var t=n[e];return t?Promise.all(t.slice(1).map(s.e)).then(function(){var e=t[0];return s.t(e,7)}):Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}o.keys=function(){return Object.keys(n)},o.id="Bk91",e.exports=o},O68L:function(e,t,s){(function(e,t){var s={collectionCounters:[],config:null,translations:null,shared_setup:function(e){s.read_config(),s.log("[core|shared_setup] Register services on",e),s.setup_ie10_polyfill(),s.set_object_field_value(e),s.add_filters(e),s.setup_select2(e),s.setup_icheck(e),s.setup_checkbox_range_selection(e),s.setup_xeditable(e),s.setup_form_tabs_for_errors(e),s.setup_inline_form_errors(e),s.setup_tree_view(e),s.setup_collection_counter(e),s.setup_sticky_elements(e),s.setup_readmore_elements(e),s.setup_form_submit(e)},setup_ie10_polyfill:function(){if(navigator.userAgent.match(/IEMobile\/10\.0/)){var e=document.createElement("style");e.appendChild(document.createTextNode("@-ms-viewport{width:auto!important}")),document.querySelector("head").appendChild(e)}},read_config:function(){var t=e("[data-sonata-admin]").data("sonata-admin");this.config=t.config,this.translations=t.translations},get_config:function(e){return null==this.config&&this.read_config(),this.config[e]},get_translations:function(e){return null==this.translations&&this.read_config(),this.translations[e]},setup_list_modal:function(e){s.log("[core|setup_list_modal] configure modal on",e),t("div.modal-dialog",e).css({width:"90%",height:"85%",padding:0}),t("div.modal-content",e).css({"border-radius":"0",height:"100%",padding:0}),t(".modal-body",e).css({width:"auto",height:"90%",padding:15,overflow:"auto"}),t(e).trigger("sonata-admin-setup-list-modal")},setup_select2:function(e){s.get_config("USE_SELECT2")&&(s.log("[core|setup_select2] configure Select2 on",e),t('select:not([data-sonata-select2="false"])',e).each(function(){var e=t(this),n=!1,o=e.data("popover");e.removeClass("form-control"),e.find('option[value=""]').length||"true"===e.attr("data-sonata-select2-allow-clear")?n=!0:"false"===e.attr("data-sonata-select2-allow-clear")&&(n=!1),e.select2({width:function(){return s.get_select2_width(window.Select2?this.element:e)},dropdownAutoWidth:!0,minimumResultsForSearch:10,allowClear:n}),void 0!==o&&e.select2("container").popover(o.options)}))},setup_icheck:function(n){s.get_config("USE_ICHECK")&&(s.log("[core|setup_icheck] configure iCheck on",n),t('input[type="checkbox"]:not(label.btn > input, [data-sonata-icheck="false"]), input[type="radio"]:not(label.btn > input, [data-sonata-icheck="false"])',n).iCheck({checkboxClass:"icheckbox_square-blue",radioClass:"iradio_square-blue"}).on("ifToggled",function(t){e(t.target).trigger("change")}))},setup_checkbox_range_selection:function(e){s.log("[core|setup_checkbox_range_selection] configure checkbox range selection on",e);var n,o=s.get_config("USE_ICHECK");t('tbody input[type="checkbox"], tbody .iCheck-helper',e).click(function(s){var i;if((i=o?t(this).prev('input[type="checkbox"]'):t(this)).length){var a=i.closest("tr").index();if(s.shiftKey&&n>=0){var r=t('tbody input[type="checkbox"]:nth('+a+")",e).prop("checked");t('tbody input[type="checkbox"]',e).each(function(e,s){if(e>n&&e<a||e>a&&e<n){if(o)return void t(s).iCheck(r?"check":"uncheck");t(s).prop("checked",r)}})}n=a}})},setup_xeditable:function(e){s.log("[core|setup_xeditable] configure xeditable on",e),t(".x-editable",e).editable({emptyclass:"editable-empty btn btn-sm btn-default",emptytext:'<i class="fa fa-pencil"></i>',container:"body",placement:"auto",success:function(e){var n=t(e);s.setup_xeditable(n),t(this).closest("td").replaceWith(n)},error:function(e,t,s){return e.responseText}})},log:function(){if(s.get_config("DEBUG")){var e="[Sonata.Admin] "+Array.prototype.join.call(arguments,", ");window.console&&window.console.log?window.console.log(e):window.opera&&window.opera.postError&&window.opera.postError(e)}},add_pretty_errors:function(){console.warn("Admin.add_pretty_errors() was deprecated in version 3.0")},stopEvent:function(e){return e.preventDefault(),e.target},add_filters:function(e){function n(){var s=t("a.sonata-toggle-filter .fa-check-square-o",e).length;t(".sonata-filter-count",e).text(s)}s.log("[core|add_filters] configure filters on",e),t("a.sonata-toggle-filter",e).on("click",function(e){if(e.preventDefault(),e.stopPropagation(),"false"!=t(e.target).attr("sonata-filter")){s.log("[core|add_filters] handle filter container: ",t(e.target).attr("filter-container"));var o=t("#"+t(e.currentTarget).attr("filter-container"));0==t('div[sonata-filter="true"]:visible',o).length&&t(o).slideDown();var i=t(e.currentTarget).attr("filter-target"),a=t('div[id="'+i+'"]',o),r=t("i",'.sonata-toggle-filter[filter-target="'+i+'"]');t(a).is(":visible")?(r.filter(":not(.fa-minus-circle)").removeClass("fa-check-square-o").addClass("fa-square-o"),a.hide()):(r.filter(":not(.fa-minus-circle)").removeClass("fa-square-o").addClass("fa-check-square-o"),a.show()),t('div[sonata-filter="true"]:visible',o).length>0?t(o).slideDown():t(o).slideUp(),n()}}),t(".sonata-filter-form",e).on("submit",function(){t(this).find('[sonata-filter="true"]:hidden :input').val("")}),0===t(".advanced-filter :input:visible",e).filter(function(){return t(this).val()}).length&&t(".advanced-filter").hide(),t('[data-toggle="advanced-filter"]',e).click(function(){t(".advanced-filter").toggle()}),n()},set_object_field_value:function(e){s.log("[core|set_object_field_value] set value field on",e),this.log(t("a.sonata-ba-edit-inline",e)),t("a.sonata-ba-edit-inline",e).click(function(e){s.stopEvent(e);var n=t(this);t.ajax({url:n.attr("href"),type:"POST",success:function(e){var o=t(n).parent();o.children().remove(),o.html(t(e.replace(/<!--[\s\S]*?-->/g,"")).html()),o.effect("highlight",{color:"#57A957"},2e3),s.set_object_field_value(o)},error:function(e,s,o){t(n).parent().effect("highlight",{color:"#C43C35"},2e3)}})})},setup_collection_counter:function(e){s.log("[core|setup_collection_counter] setup collection counter",e);var n=new RegExp("_([0-9]+)[^0-9]*$");t(e).find("[data-prototype]").each(function(){var e=t(this),o=0;e.children().each(function(){var e=n.exec(t('[id^="sonata-ba-field-container"]',this).attr("id"));e&&e[1]&&e[1]>o&&(o=parseInt(e[1],10))}),s.collectionCounters[e.attr("id")]=o})},setup_collection_buttons:function(e){t(e).on("click",".sonata-collection-add",function(e){s.stopEvent(e);var n=t(this).closest("[data-prototype]"),o=++s.collectionCounters[n.attr("id")],i=n.attr("data-prototype"),a=n.attr("data-prototype-name")||"__name__",r=new RegExp(n.attr("id")+"_"+a,"g");i=i.replace(r,n.attr("id")+"_"+o);var l=n.attr("id").split("_"),c=new RegExp(l[l.length-1]+"\\]\\["+a,"g");i=i.replace(c,l[l.length-1]+"]["+o),t(i).insertBefore(t(this).parent()).trigger("sonata-admin-append-form-element"),t(this).trigger("sonata-collection-item-added")}),t(e).on("click",".sonata-collection-delete",function(e){s.stopEvent(e),t(this).trigger("sonata-collection-item-deleted"),t(this).closest(".sonata-collection-row").remove(),t(document).trigger("sonata-collection-item-deleted-successful")})},setup_per_page_switcher:function(e){s.log("[core|setup_per_page_switcher] setup page switcher",e),t("select.per-page").change(function(e){t("input[type=submit]").hide(),window.top.location.href=this.options[this.selectedIndex].value})},setup_form_tabs_for_errors:function(e){s.log("[core|setup_form_tabs_for_errors] setup form tab's errors",e),t("form",e).each(function(){s.show_form_first_tab_with_errors(t(this),".sonata-ba-field-error")}),t(e).on("click",'form [type="submit"]',function(){s.show_form_first_tab_with_errors(t(this).closest("form"),":invalid")}).on("keypress",'form [type="text"]',function(e){13===e.which&&s.show_form_first_tab_with_errors(t(this),":invalid")})},show_form_first_tab_with_errors:function(e,n){var o;s.log("[core|show_form_first_tab_with_errors] show first tab with errors",e),e.find(".nav-tabs a").each(function(){var e=t(this).attr("href"),s=t(this),i=s.find(".has-errors");t(e).find(n).length>0?(o||(s.tab("show"),o=s),i.removeClass("hide")):i.addClass("hide")})},setup_inline_form_errors:function(e){s.log("[core|setup_inline_form_errors] show first tab with errors",e);t('.sonata-ba-field-inline-table [id$="_delete"][type="checkbox"]',e).each(function(){s.switch_inline_form_errors(t(this))}),t(e).on("change",'.sonata-ba-field-inline-table [id$="_delete"][type="checkbox"]',function(){s.switch_inline_form_errors(t(this))})},switch_inline_form_errors:function(e){s.log("[core|switch_inline_form_errors] switch_inline_form_errors",e);var t=e.closest(".sonata-ba-field-inline-table"),n=t.find(".sonata-ba-field-error-messages");e.is(":checked")?(t.find("[required]").removeAttr("required").attr("data-required","required"),n.hide()):(t.find("[data-required]").attr("required","required"),n.show())},setup_tree_view:function(e){s.log("[core|setup_tree_view] setup tree view",e),t("ul.js-treeview",e).treeView()},get_select2_width:function(e){var t=/width:(auto|(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc)))/i,s=e.attr("style");if(void 0!==s)for(var n=s.split(";"),o=0,i=n.length;o<i;o+=1){var a=n[o].replace(/\s/g,"").match(t);if(null!==a&&a.length>=1)return a[1]}return(s=e.css("width")).indexOf("%")>0?s:"100%"},setup_sortable_select2:function(e,n){for(var o=[],i=0;i<n.length;i++)o[i]={id:n[i].data,text:n[i].label};e.select2({width:function(){return s.get_select2_width(window.Select2?this.element:e)},dropdownAutoWidth:!0,data:o,multiple:!0}),e.select2("container").find("ul.select2-choices").sortable({containment:"parent",start:function(){e.select2("onSortStart")},update:function(){e.select2("onSortEnd")}}),e.parents("form:first").submit(function(s){var n=e.val().trim();if(""!==n){var o=e.attr("name");n=n.split(","),o=o.substring(0,o.length-1);for(var i=0;i<n.length;i++)t("<input>").attr("type","hidden").attr("name",o+i+"]").val(n[i]).appendTo(e.parents("form:first"))}e.remove()})},setup_sticky_elements:function(e){if(s.get_config("USE_STICKYFORMS")){s.log("[core|setup_sticky_elements] setup sticky elements on",e);var n=t(e).find(".navbar-static-top"),o=t(e).find(".content-wrapper"),i=t(o).find("nav.navbar"),a=t(o).find(".sonata-ba-form-actions");i.length&&new Waypoint.Sticky({element:i[0],offset:function(){return s.refreshNavbarStuckClass(n),t(n).outerHeight()},handler:function(e){"up"==e?t(i).width("auto"):t(i).width(t(o).outerWidth()),s.refreshNavbarStuckClass(n)}}),a.length&&new Waypoint({element:o[0],offset:"bottom-in-view",handler:function(e){t(".sonata-ba-form form > .row").outerHeight()+t(a).outerHeight()-2<t(a).offset().top&&t(a).removeClass("stuck"),"up"==e&&t(a).addClass("stuck")}}),s.handleScroll(a,i,o)}},handleScroll:function(e,n,o){e.length&&t(window).scrollTop()+t(window).height()!=t(document).height()&&t(e).addClass("stuck"),t(window).scroll(s.debounce(function(){e.length&&t(window).scrollTop()+t(window).height()==t(document).height()&&t(e).removeClass("stuck"),n.length&&0===t(window).scrollTop()&&t(n).removeClass("stuck")},250)),t("body").on("expanded.pushMenu collapsed.pushMenu",function(){setTimeout(function(){s.handleResize(e,n,o)},350)}),t(window).resize(s.debounce(function(){s.handleResize(e,n,o)},250))},handleResize:function(e,s,n){s.length&&t(s).hasClass("stuck")&&t(s).width(t(n).outerWidth()),e.length&&t(e).hasClass("stuck")&&t(e).width(t(n).outerWidth())},refreshNavbarStuckClass:function(e){var s=t("#navbar-stuck");s.length||(s=t('<style id="navbar-stuck">').prop("type","text/css").appendTo("head")),s.html("body.fixed .content-header .navbar.stuck { top: "+t(e).outerHeight()+"px; }")},debounce:function(e,t,s){var n;return function(){var o=this,i=arguments,a=s&&!n;clearTimeout(n),n=setTimeout(function(){n=null,s||e.apply(o,i)},t),a&&e.apply(o,i)}},setup_readmore_elements:function(e){s.log("[core|setup_readmore_elements] setup readmore elements on",e),t(e).find(".sonata-readmore").each(function(e,s){t(this).readmore({collapsedHeight:parseInt(t(this).data("readmore-height")),moreLink:'<a href="#">'+t(this).data("readmore-more")+"</a>",lessLink:'<a href="#">'+t(this).data("readmore-less")+"</a>"})})},handle_top_navbar_height:function(){t("body.fixed .content-wrapper").css("padding-top",t(".navbar-static-top").outerHeight())},setup_form_submit:function(e){s.log("[core|setup_form_submit] setup form submit on",e),t(e).find("form").on("submit",function(){var e=t(this);setTimeout(function(){e.find("button").prop("disabled",!0)},1)})},setup_view_tabs_changer:function(){t(".changer-tab").on("click",function(){var e=t(this).attr("aria-controls"),s=location.search.substring(1),n=decodeURIComponent(s).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"'),o="{}";n.length&&(o='{"'+n+'"}');var i=JSON.parse(o);i._tab=e;var a=window.location.origin+window.location.pathname+"?"+t.param(i,!0);window.history.pushState({path:a},"",a)})}};window.Admin=s,t(document).ready(function(){s.handle_top_navbar_height()}),t(window).resize(function(){s.handle_top_navbar_height()}),t(document).ready(function(){t("html").removeClass("no-js"),s.get_config("CONFIRM_EXIT")&&t(".sonata-ba-form form").each(function(){t(this).confirmExit()}),s.setup_per_page_switcher(document),s.setup_collection_buttons(document),s.setup_view_tabs_changer(),s.shared_setup(document)}),t(document).on("sonata-admin-append-form-element",function(e){s.setup_select2(e.target),s.setup_icheck(e.target),s.setup_collection_counter(e.target)})}).call(this,s("EVdn"),s("EVdn"))},"Ul+L":function(e,t,s){(function(e,t){e(document).ready(function(){t(".sidebar-toggle").click(function(){if(~document.cookie.indexOf("sonata_sidebar_hide=1"))return document.cookie="sonata_sidebar_hide=0;path=/";document.cookie="sonata_sidebar_hide=1;path=/"})})}).call(this,s("EVdn"),s("EVdn"))},gZf4:function(e,t,s){(function(e){
/*!
* jQuery confirmExit plugin
* https://github.com/dunglas/jquery.confirmExit
*
* Copyright 2012 Kévin Dunglas <dunglas@gmail.com>
* Released under the MIT license
* http://www.opensource.org/licenses/mit-license.php
*/
var t;(t=e).fn.confirmExit=function(){return t(this).attr("data-original",t(this).serialize()),t(this).on("submit",function(){t(this).removeAttr("data-original")}),t(this)},t(window).on("beforeunload",function(e){var s=e||window.event,n=Admin.get_translations("CONFIRM_EXIT"),o=!1;if(t("form[data-original]").each(function(){t(this).attr("data-original")===t(this).serialize()||(o=!0)}),o)return s&&(s.returnValue=n),n})}).call(this,s("EVdn"))},mwm7:function(e,t,s){var n={"./select2_locale_ar.js":["UVM/",3],"./select2_locale_az.js":["8aYY",4],"./select2_locale_bg.js":["stcr",5],"./select2_locale_ca.js":["nF/G",6],"./select2_locale_cs.js":["i15N",7],"./select2_locale_da.js":["IqkM",8],"./select2_locale_de.js":["+bOa",9],"./select2_locale_el.js":["HwTZ",10],"./select2_locale_es.js":["ywVl",11],"./select2_locale_et.js":["F3AE",12],"./select2_locale_eu.js":["+cC8",13],"./select2_locale_fa.js":["7aFb",14],"./select2_locale_fi.js":["y+f9",15],"./select2_locale_fr.js":["5tM5",16],"./select2_locale_gl.js":["ncr5",17],"./select2_locale_he.js":["cz2L",18],"./select2_locale_hr.js":["owjf",19],"./select2_locale_hu.js":["8Q8H",20],"./select2_locale_id.js":["Vgwe",21],"./select2_locale_is.js":["ZBna",22],"./select2_locale_it.js":["t6yc",23],"./select2_locale_ja.js":["0E8v",24],"./select2_locale_ka.js":["Vc8W",25],"./select2_locale_ko.js":["nDI+",26],"./select2_locale_lt.js":["WJwo",27],"./select2_locale_lv.js":["z6NA",28],"./select2_locale_mk.js":["A6vj",29],"./select2_locale_ms.js":["Yp2V",30],"./select2_locale_nl.js":["FEB3",31],"./select2_locale_no.js":["O2Bo",32],"./select2_locale_pl.js":["xvcm",33],"./select2_locale_pt-BR.js":["uqbh",34],"./select2_locale_pt-PT.js":["7h8d",35],"./select2_locale_ro.js":["Xw/w",36],"./select2_locale_rs.js":["AJzE",37],"./select2_locale_ru.js":["xuiK",38],"./select2_locale_sk.js":["+yZX",39],"./select2_locale_sv.js":["SXZq",40],"./select2_locale_th.js":["IjeV",41],"./select2_locale_tr.js":["93T5",42],"./select2_locale_ug-CN.js":["xL6e",43],"./select2_locale_uk.js":["k5+k",44],"./select2_locale_vi.js":["dK2M",45],"./select2_locale_zh-CN.js":["++0R",46],"./select2_locale_zh-TW.js":["0f7M",47]};function o(e){var t=n[e];return t?s.e(t[1]).then(function(){var e=t[0];return s.t(e,7)}):Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}o.keys=function(){return Object.keys(n)},o.id="mwm7",e.exports=o},ucoa:function(e,t,s){}},[["BYbX","runtime",2]]]);