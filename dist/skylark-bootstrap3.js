/**
 * skylark-bootstrap3 - The skylark standard widget tookit
 * @author Hudaokeji, Inc.
 * @version v0.9.2
 * @link https://github.com/skylarkui/skylark-bootstrap3/
 * @license MIT
 */
!function(t,e){var i=e.define,s=e.require,n="function"==typeof i&&i.amd,o=!n&&"undefined"!=typeof exports;if(!n&&!i){var r={};i=e.define=function(t,e,i){"function"==typeof i?(r[t]={factory:i,deps:e.map(function(e){return function(t,e){if("."!==t[0])return t;var i=e.split("/"),s=t.split("/");i.pop();for(var n=0;n<s.length;n++)"."!=s[n]&&(".."==s[n]?i.pop():i.push(s[n]));return i.join("/")}(e,t)}),resolved:!1,exports:null},s(t)):r[t]={factory:null,resolved:!0,exports:i}},s=e.require=function(t){if(!r.hasOwnProperty(t))throw new Error("Module "+t+" has not been defined");var i=r[t];if(!i.resolved){var n=[];i.deps.forEach(function(t){n.push(s(t))}),i.exports=i.factory.apply(e,n)||null,i.resolved=!0}return i.exports}}if(!i)throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");if(function(t,e){t("skylark-bootstrap3/bs3",["skylark-utils-dom/skylark","skylark-langx/langx","skylark-utils-dom/browser","skylark-utils-dom/eventer","skylark-utils-dom/noder","skylark-utils-dom/geom","skylark-utils-dom/query"],function(t,e,i,s,n,o,r){var a=t.ui=t.ui||{},l=a.bs3={},h={BACKSPACE_KEYCODE:8,COMMA_KEYCODE:188,DELETE_KEYCODE:46,DOWN_ARROW_KEYCODE:40,ENTER_KEYCODE:13,TAB_KEYCODE:9,UP_ARROW_KEYCODE:38},d=function(t){return function(e){return e.keyCode===t}},c=d(h.BACKSPACE_KEYCODE),u=d(h.DELETE_KEYCODE),p=d(h.TAB_KEYCODE),f=d(h.UP_ARROW_KEYCODE),m=d(h.DOWN_ARROW_KEYCODE),g=/&[^\s]*;/;return e.mixin(l,{CONST:h,cleanInput:function(t){for(;g.test(t);)t=r("<i>").html(t).text();return r("<i>").text(t).html()},isBackspaceKey:c,isDeleteKey:u,isShiftHeld:function(t){return!0===t.shiftKey},isTabKey:p,isUpArrow:f,isDownArrow:m}),l}),t("skylark-bootstrap3/affix",["skylark-langx/langx","skylark-utils-dom/browser","skylark-utils-dom/eventer","skylark-utils-dom/noder","skylark-utils-dom/geom","skylark-utils-dom/query","skylark-utils-dom/plugins","./bs3"],function(t,e,i,s,n,o,r,a){"use strict";var l=a.Affix=r.Plugin.inherit({klassName:"Affix",pluginName:"bs3.affix",_construct:function(e,i){this.options=t.mixin({},l.DEFAULTS,i),this.$target=o(this.options.target).on("scroll.bs.affix.data-api",t.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",t.proxy(this.checkPositionWithEventLoop,this)),this.$element=o(e),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()},getState:function(t,e,i,s){var n=this.$target.scrollTop(),o=this.$element.offset(),r=this.$target.height();if(null!=i&&"top"==this.affixed)return n<i&&"top";if("bottom"==this.affixed)return null!=i?!(n+this.unpin<=o.top)&&"bottom":!(n+r<=t-s)&&"bottom";var a=null==this.affixed,l=a?n:o.top,h=a?r:e;return null!=i&&n<=i?"top":null!=s&&l+h>=t-s&&"bottom"},getPinnedOffset:function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(l.RESET).addClass("affix");var t=this.$target.scrollTop(),e=this.$element.offset();return this.pinnedOffset=e.top-t},checkPositionWithEventLoop:function(){setTimeout(t.proxy(this.checkPosition,this),1)},checkPosition:function(){if(this.$element.is(":visible")){var t=this.$element.height(),e=this.options.offset,s=e.top,n=e.bottom,r=Math.max(o(document).height(),o(document.body).height());"object"!=typeof e&&(n=s=e),"function"==typeof s&&(s=e.top(this.$element)),"function"==typeof n&&(n=e.bottom(this.$element));var a=this.getState(r,t,s,n);if(this.affixed!=a){null!=this.unpin&&this.$element.css("top","");var h="affix"+(a?"-"+a:""),d=i.create(h+".bs.affix");if(this.$element.trigger(d),d.isDefaultPrevented())return;this.affixed=a,this.unpin="bottom"==a?this.getPinnedOffset():null,this.$element.removeClass(l.RESET).addClass(h).trigger(h.replace("affix","affixed")+".bs.affix")}"bottom"==a&&this.$element.offset({top:r-t-n})}}});return l.VERSION="3.3.7",l.RESET="affix affix-top affix-bottom",l.DEFAULTS={offset:0,target:window},r.register(l,"affix"),l}),t("skylark-bootstrap3/alert",["skylark-langx/langx","skylark-utils-dom/browser","skylark-utils-dom/eventer","skylark-utils-dom/noder","skylark-utils-dom/geom","skylark-utils-dom/query","skylark-utils-dom/plugins","./bs3"],function(t,e,i,s,n,o,r,a){"use strict";var l=a.Alert=r.Plugin.inherit({klassName:"Alert",pluginName:"bs3.alert",_construct:function(t,e){o(t).on("click",'[data-dismiss="alert"]',this.close)},close:function(t){var s=o(this),n=s.attr("data-target");n||(n=(n=s.attr("href"))&&n.replace(/.*(?=#[^\s]*$)/,""));var r=o("#"===n?[]:n);function a(){r.detach().trigger("closed.bs.alert").remove()}t&&t.preventDefault(),r.length||(r=s.closest(".alert")),r.trigger(t=i.create("close.bs.alert")),t.isDefaultPrevented()||(r.removeClass("in"),e.support.transition&&(r.hasClass("fade")?r.one("transitionEnd",a).emulateTransitionEnd(l.TRANSITION_DURATION):a()))}});return l.VERSION="3.3.7",l.TRANSITION_DURATION=150,r.register(l,"alert"),l}),t("skylark-bootstrap3/button",["skylark-langx/langx","skylark-utils-dom/browser","skylark-utils-dom/eventer","skylark-utils-dom/noder","skylark-utils-dom/geom","skylark-utils-dom/query","skylark-utils-dom/plugins","./bs3"],function(t,e,i,s,n,o,r,a){"use strict";var l=a.Button=r.Plugin.inherit({klassName:"Button",pluginName:"bs3.button",_construct:function(e,i){var s=this.$element=o(e);this.options=t.mixin({},l.DEFAULTS,i),this.isLoading=!1,s.closest('[data-toggle^="button"]')&&s.on("click.bs.button.data-api",t.proxy(function(t){if(this.toggle(),!o(t.target).is('input[type="radio"], input[type="checkbox"]')){t.preventDefault();var e=this.$element;e.is("input,button")?e.trigger("focus"):e.find("input:visible,button:visible").first().trigger("focus")}},this))},setState:function(e){var i="disabled",s=this.$element,n=s.is("input")?"val":"html",o=s.data();e+="Text",null==o.resetText&&s.data("resetText",s[n]()),setTimeout(t.proxy(function(){s[n](null==o[e]?this.options[e]:o[e]),"loadingText"==e?(this.isLoading=!0,s.addClass(i).attr(i,i).prop(i,!0)):this.isLoading&&(this.isLoading=!1,s.removeClass(i).removeAttr(i).prop(i,!1))},this),0)},toggle:function(){var t=!0,e=this.$element.closest('[data-toggle="buttons"]');if(e.length){var i=this.$element.find("input");"radio"==i.prop("type")?(i.prop("checked")&&(t=!1),e.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==i.prop("type")&&(i.prop("checked")!==this.$element.hasClass("active")&&(t=!1),this.$element.toggleClass("active")),i.prop("checked",this.$element.hasClass("active")),t&&i.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")}});return l.VERSION="3.3.7",l.DEFAULTS={loadingText:"loading..."},r.register(l,"button",function(t,e){"toggle"==e?t.toggle():e&&t.setState(e)}),l}),t("skylark-bootstrap3/transition",["skylark-langx/langx","skylark-utils-dom/browser","skylark-utils-dom/eventer","skylark-utils-dom/noder","skylark-utils-dom/geom","skylark-utils-dom/query","./bs3"],function(t,e,i,s,n,o,r){"use strict";i.special.bsTransitionEnd=i.special.transitionEnd}),t("skylark-bootstrap3/carousel",["skylark-langx/langx","skylark-utils-dom/browser","skylark-utils-dom/eventer","skylark-utils-dom/noder","skylark-utils-dom/geom","skylark-utils-dom/query","skylark-utils-dom/plugins","./bs3","./transition"],function(t,e,i,s,n,o,r,a){"use strict";var l=a.Carousel=r.Plugin.inherit({klassName:"Carousel",pluginName:"bs3.carousel",_construct:function(e,i){i=t.mixin({},l.DEFAULTS,o(e).data(),i),this.overrided(e,i),this.$element=o(e),this.$indicators=this.$element.find(".carousel-indicators"),this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null;var s=this;this.options.embeded||(this.options.keyboard&&this.$element.on("keydown.bs.carousel",t.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs3.carousel",t.proxy(this.pause,this)).on("mouseleave.bs3.carousel",t.proxy(this.cycle,this)),this.$element.on("click.bs3.carousel.data-api","[data-slide],[data-slide-to]",function(t){var e=o(this),i=e.attr("data-slide"),n=e.attr("data-slide-to");"prev"==i?s.prev():"next"==i?s.next():n&&s.to(n),t.preventDefault()}))}});return l.VERSION="3.3.7",l.TRANSITION_DURATION=600,l.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},l.prototype.keydown=function(t){if(!/input|textarea/i.test(t.target.tagName)){switch(t.which){case 37:this.prev();break;case 39:this.next();break;default:return}t.preventDefault()}},l.prototype.cycle=function(e){return e||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(t.proxy(this.next,this),this.options.interval)),this},l.prototype.getItemIndex=function(t){return this.$items=t.parent().children(".item"),this.$items.index(t||this.$active)},l.prototype.getItemForDirection=function(t,e){var i=this.getItemIndex(e),s="prev"==t&&0===i||"next"==t&&i==this.$items.length-1;if(s&&!this.options.wrap)return e;var n="prev"==t?-1:1,o=(i+n)%this.$items.length;return this.$items.eq(o)},l.prototype.to=function(t){var e=this,i=this.getItemIndex(this.$active=this.$element.find(".item.active"));if(!(t>this.$items.length-1||t<0))return this.sliding?this.$element.one("slid.bs.carousel",function(){e.to(t)}):i==t?this.pause().cycle():this.slide(t>i?"next":"prev",this.$items.eq(t))},l.prototype.pause=function(t){return t||(this.paused=!0),this.$element.find(".next, .prev").length&&e.support.transition&&(this.$element.trigger(e.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},l.prototype.next=function(){if(!this.sliding)return this.slide("next")},l.prototype.prev=function(){if(!this.sliding)return this.slide("prev")},l.prototype.slide=function(t,s){var n=this.$element.find(".item.active"),r=s||this.getItemForDirection(t,n),a=this.interval,l="next"==t?"left":"right",h=this;if(r.hasClass("active"))return this.sliding=!1;var d=r[0],c=i.create("slide.bs.carousel",{relatedTarget:d,direction:l});if(this.$element.trigger(c),!c.isDefaultPrevented()){if(this.sliding=!0,a&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var u=o(this.$indicators.children()[this.getItemIndex(r)]);u&&u.addClass("active")}var p=i.create("slid.bs.carousel",{relatedTarget:d,direction:l});return e.support.transition&&this.$element.hasClass("slide")?(r.addClass(t),r[0].offsetWidth,n.addClass(l),r.addClass(l),n.one("transitionEnd",function(){r.removeClass([t,l].join(" ")).addClass("active"),n.removeClass(["active",l].join(" ")),h.sliding=!1,setTimeout(function(){h.$element.trigger(p)},0)}).emulateTransitionEnd()):(n.removeClass("active"),r.addClass("active"),this.sliding=!1,this.$element.trigger(p)),a&&this.cycle(),this}},r.register(l,"carousel",function(t){var e="string"==typeof t?t:t.slide;"number"==typeof t?this.to(t):e?this[e]():t.interval&&this.pause().cycle()}),l}),t("skylark-bootstrap3/collapse",["skylark-langx/langx","skylark-utils-dom/browser","skylark-utils-dom/eventer","skylark-utils-dom/noder","skylark-utils-dom/geom","skylark-utils-dom/query","skylark-utils-dom/plugins","./bs3","./transition"],function(t,e,i,s,n,o,r,a){"use strict";var l=a.Collapse=r.Plugin.inherit({klassName:"Collapse",pluginName:"bs3.collapse",_construct:function(e,i){i=t.mixin({},l.DEFAULTS,o(e).data(),i),this.overrided(e,i),this.$element=o(e),this.$trigger=o('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()},dimension:function(){var t=this.$element.hasClass("width");return t?"width":"height"},show:function(){if(!this.transitioning&&!this.$element.hasClass("in")){var s,n=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(n&&n.length&&(s=n.data("bs.collapse"))&&s.transitioning)){var o=i.create("show.bs.collapse");if(this.$element.trigger(o),!o.isDefaultPrevented()){n&&n.length&&(n.collapse("hide"),s||n.data("bs.collapse",null));var r=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[r](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var a=function(){this.$element.removeClass("collapsing").addClass("collapse in")[r](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!e.support.transition)return a.call(this);var h=t.camelCase(["scroll",r].join("-"));this.$element.one("transitionEnd",t.proxy(a,this)).emulateTransitionEnd(l.TRANSITION_DURATION)[r](this.$element[0][h])}}}},hide:function(){if(!this.transitioning&&this.$element.hasClass("in")){var s=i.create("hide.bs.collapse");if(this.$element.trigger(s),!s.isDefaultPrevented()){var n=this.dimension();this.$element[n](this.$element[n]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var o=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};if(!e.support.transition)return o.call(this);this.$element[n](0).one("transitionEnd",t.proxy(o,this)).emulateTransitionEnd(l.TRANSITION_DURATION)}}},toggle:function(){this[this.$element.hasClass("in")?"hide":"show"]()},getParent:function(){return o(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(t.proxy(function(t,e){var i,s,n,r=o(e);this.addAriaAndCollapsedClass((n=(i=r).attr("data-target")||(s=i.attr("href"))&&s.replace(/.*(?=#[^\s]+$)/,""),o(n)),r)},this)).end()},addAriaAndCollapsedClass:function(t,e){var i=t.hasClass("in");t.attr("aria-expanded",i),e.toggleClass("collapsed",!i).attr("aria-expanded",i)}});return l.VERSION="3.3.7",l.TRANSITION_DURATION=350,l.DEFAULTS={toggle:!0},r.register(l,"collapse"),l}),t("skylark-bootstrap3/dropdown",["skylark-langx/langx","skylark-utils-dom/browser","skylark-utils-dom/eventer","skylark-utils-dom/noder","skylark-utils-dom/geom","skylark-utils-dom/query","skylark-utils-dom/plugins","./bs3"],function(t,e,i,s,n,o,r,a){"use strict";var l=".dropdown-backdrop",h='[data-toggle="dropdown"]',d=a.Dropdown=r.Plugin.inherit({klassName:"Dropdown",pluginName:"bs3.dropdown",_construct:function(t,e){var i=this.$element=o(t);i.on("click.bs.dropdown",this.toggle),i.on("keydown.bs.dropdown",'[data-toggle="dropdown"],.dropdown-menu',this.keydown)},toggle:function(t){var e=o(this);if(!e.is(".disabled, :disabled")){var s=c(e),n=s.hasClass("open");if(u(),!n){"ontouchstart"in document.documentElement&&!s.closest(".navbar-nav").length&&o(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(o(this)).on("click",u);var r={relatedTarget:this};if(s.trigger(t=i.create("show.bs.dropdown",r)),t.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),s.toggleClass("open").trigger(i.create("shown.bs.dropdown",r))}return!1}},keydown:function(t){if(/(38|40|27|32)/.test(t.which)&&!/input|textarea/i.test(t.target.tagName)){var e=o(this);if(t.preventDefault(),t.stopPropagation(),!e.is(".disabled, :disabled")){var i=c(e),s=i.hasClass("open");if(!s&&27!=t.which||s&&27==t.which)return 27==t.which&&i.find(h).trigger("focus"),e.trigger("click");var n=i.find(".dropdown-menu li:not(.disabled):visible a");if(n.length){var r=n.index(t.target);38==t.which&&r>0&&r--,40==t.which&&r<n.length-1&&r++,~r||(r=0),n.eq(r).trigger("focus")}}}}});function c(t){var e=t.attr("data-target");e||(e=(e=t.attr("href"))&&/#[A-Za-z]/.test(e)&&e.replace(/.*(?=#[^\s]*$)/,""));var i=e&&o(e);return i&&i.length?i:t.parent()}function u(t){t&&3===t.which||(o(l).remove(),o(h).each(function(){var e=o(this),n=c(e),r={relatedTarget:this};n.hasClass("open")&&(t&&"click"==t.type&&/input|textarea/i.test(t.target.tagName)&&s.contains(n[0],t.target)||(n.trigger(t=i.create("hide.bs.dropdown",r)),t.isDefaultPrevented()||(e.attr("aria-expanded","false"),n.removeClass("open").trigger(i.create("hidden.bs.dropdown",r)))))}))}return d.VERSION="3.3.7",o(document).on("click.bs.dropdown.data-api",u).on("click.bs.dropdown.data-api",".dropdown form",function(t){t.stopPropagation()}),r.register(d,"dropdown"),d}),t("skylark-bootstrap3/modal",["skylark-langx/langx","skylark-utils-dom/browser","skylark-utils-dom/eventer","skylark-utils-dom/noder","skylark-utils-dom/geom","skylark-utils-dom/query","skylark-utils-dom/plugins","./bs3"],function(t,e,i,s,n,o,r,a){"use strict";var l=a.Modal=r.Plugin.inherit({klassName:"Modal",pluginName:"bs3.modal",_construct:function(e,i){i=t.mixin({},l.DEFAULTS,o(e).data(),i),this.overrided(e,i),this.$container=o(i.container||document.body),this.$element=o(e),this.$dialog=this.$element.find(".modal-dialog"),this.$container.is("body")||this.$element.css("position","absolute"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,t.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))},toggle:function(t){return this.isShown?this.hide():this.show(t)},show:function(n){var r=this,a=i.create("show.bs.modal",{relatedTarget:n});this.$element.trigger(a),this.isShown||a.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$container.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',t.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){r.$element.one("mouseup.dismiss.bs.modal",function(t){o(t.target).is(r.$element)&&(r.ignoreBackdropClick=!0)})}),this.backdrop(function(){var t=e.support.transition&&r.$element.hasClass("fade");s.isChildOf(r.$element[0],r.$container[0])||r.$element.appendTo(r.$container),r.$element.show().scrollTop(0),r.adjustDialog(),t&&r.$element[0].offsetWidth,r.$element.addClass("in"),r.enforceFocus();var o=i.create("shown.bs.modal",{relatedTarget:n});t?r.$dialog.one("transitionEnd",function(){r.$element.trigger("focus").trigger(o)}).emulateTransitionEnd(l.TRANSITION_DURATION):r.$element.trigger("focus").trigger(o)}))},hide:function(s){s&&s.preventDefault(),s=i.create("hide.bs.modal"),this.$element.trigger(s),this.isShown&&!s.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),o(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),e.support.transition&&this.$element.hasClass("fade")?this.$element.one("transitionEnd",t.proxy(this.hideModal,this)).emulateTransitionEnd(l.TRANSITION_DURATION):this.hideModal())},enforceFocus:function(){o(document).off("focusin.bs.modal").on("focusin.bs.modal",t.proxy(function(t){document===t.target||this.$element[0]===t.target||this.$element.has(t.target).length||this.$element.trigger("focus")},this))},escape:function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",t.proxy(function(t){27==t.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},resize:function(){this.isShown?o(window).on("resize.bs.modal",t.proxy(this.handleUpdate,this)):o(window).off("resize.bs.modal")},hideModal:function(){var t=this;this.$element.hide(),this.backdrop(function(){t.$container.removeClass("modal-open"),t.resetAdjustments(),t.resetScrollbar(),t.$element.trigger("hidden.bs.modal")})},removeBackdrop:function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},backdrop:function(i){var s=this,n=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var r=e.support.transition&&n;if(this.$backdrop=o(document.createElement("div")).addClass("modal-backdrop "+n).appendTo(this.$container),this.$container.is("body")||this.$backdrop.css("position","absolute"),this.$element.on("click.dismiss.bs.modal",t.proxy(function(t){this.ignoreBackdropClick?this.ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide())},this)),r&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!i)return;r?this.$backdrop.one("transitionEnd",i).emulateTransitionEnd(l.BACKDROP_TRANSITION_DURATION):i()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var a=function(){s.removeBackdrop(),i&&i()};e.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("transitionEnd",a).emulateTransitionEnd(l.BACKDROP_TRANSITION_DURATION):a()}else i&&i()},handleUpdate:function(){this.adjustDialog()},adjustDialog:function(){var t=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&t?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!t?this.scrollbarWidth:""})},resetAdjustments:function(){this.$element.css({paddingLeft:"",paddingRight:""})},checkScrollbar:function(){var t=window.innerWidth;if(!t){var e=document.documentElement.getBoundingClientRect();t=e.right-Math.abs(e.left)}this.bodyIsOverflowing=document.body.clientWidth<t,this.scrollbarWidth=this.measureScrollbar()},setScrollbar:function(){var t=parseInt(this.$container.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$container.css("padding-right",t+this.scrollbarWidth)},resetScrollbar:function(){this.$container.css("padding-right",this.originalBodyPad)},measureScrollbar:function(){var t=document.createElement("div");t.className="modal-scrollbar-measure",this.$container.append(t);var e=t.offsetWidth-t.clientWidth;return this.$container[0].removeChild(t),e}});return l.VERSION="3.3.7",l.TRANSITION_DURATION=300,l.BACKDROP_TRANSITION_DURATION=150,l.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},r.register(l,"modal",function(t,e){"string"==typeof t?this[t](e):this.options.show&&this.show(e)}),l}),t("skylark-bootstrap3/tooltip",["skylark-langx/langx","skylark-utils-dom/browser","skylark-utils-dom/eventer","skylark-utils-dom/noder","skylark-utils-dom/geom","skylark-utils-dom/query","skylark-utils-dom/plugins","./bs3"],function(t,e,i,s,n,o,r,a){"use strict";var l=a.Tooltip=r.Plugin.inherit({klassName:"Tooltip",pluginName:"bs3.tooltip",_construct:function(e,i){if(this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.enabled=!0,this.type="tooltip",this.$element=o(e),this.options=this.getOptions(i),this.$viewport=this.options.viewport&&o(t.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var s=this.options.trigger.split(" "),n=s.length;n--;){var r=s[n];if("click"==r)this.$element.on("click."+this.type,this.options.selector,t.proxy(this.toggle,this));else if("manual"!=r){var a="hover"==r?"mouseenter":"focusin",l="hover"==r?"mouseleave":"focusout";this.$element.on(a+"."+this.type,this.options.selector,t.proxy(this.enter,this)),this.$element.on(l+"."+this.type,this.options.selector,t.proxy(this.leave,this))}}this.options.selector?this._options=t.mixin({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},getDefaults:function(){return l.DEFAULTS},getOptions:function(e){return(e=t.mixin({},this.getDefaults(),this.$element.data(),e)).delay&&"number"==typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),e},getDelegateOptions:function(){var e={},i=this.getDefaults();return this._options&&t.each(this._options,function(t,s){i[t]!=s&&(e[t]=s)}),e},enter:function(t){var e=t instanceof this.constructor?t:o(t.currentTarget).plugin(this.pluginName);if(e||(e=o(t.currentTarget).plugin(this.pluginName,this.getDelegateOptions())),t instanceof i.create&&(e.inState["focusin"==t.type?"focus":"hover"]=!0),e.tip().hasClass("in")||"in"==e.hoverState)e.hoverState="in";else{if(clearTimeout(e.timeout),e.hoverState="in",!e.options.delay||!e.options.delay.show)return e.show();e.timeout=setTimeout(function(){"in"==e.hoverState&&e.show()},e.options.delay.show)}},isInStateTrue:function(){for(var t in this.inState)if(this.inState[t])return!0;return!1},leave:function(t){var e=t instanceof this.constructor?t:o(t.currentTarget).plugin(this.pluginName);if(e||(e=o(t.currentTarget).plugin(this.pluginName,this.getDelegateOptions())),t instanceof i.create&&(e.inState["focusout"==t.type?"focus":"hover"]=!1),!e.isInStateTrue()){if(clearTimeout(e.timeout),e.hoverState="out",!e.options.delay||!e.options.delay.hide)return e.hide();e.timeout=setTimeout(function(){"out"==e.hoverState&&e.hide()},e.options.delay.hide)}},show:function(){var t=i.create("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(t);var n=s.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(t.isDefaultPrevented()||!n)return;var o=this,r=this.tip(),a=this.getUID(this.type);this.setContent(),r.attr("id",a),this.$element.attr("aria-describedby",a),this.options.animation&&r.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,r[0],this.$element[0]):this.options.placement,d=/\s?auto?\s?/i,c=d.test(h);c&&(h=h.replace(d,"")||"top"),r.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs3."+this.type,this),this.options.container?r.appendTo(this.options.container):r.insertAfter(this.$element),this.$element.trigger("inserted.bs3."+this.type);var u=this.getPosition(),p=r[0].offsetWidth,f=r[0].offsetHeight;if(c){var m=h,g=this.getPosition(this.$viewport);h="bottom"==h&&u.bottom+f>g.bottom?"top":"top"==h&&u.top-f<g.top?"bottom":"right"==h&&u.right+p>g.width?"left":"left"==h&&u.left-p<g.left?"right":h,r.removeClass(m).addClass(h)}var v=this.getCalculatedOffset(h,u,p,f);this.applyPlacement(v,h);var k=function(){var t=o.hoverState;o.$element.trigger("shown.bs3."+o.type),o.hoverState=null,"out"==t&&o.leave(o)};e.support.transition&&this.$tip.hasClass("fade")?r.one("transitionEnd",k).emulateTransitionEnd(l.TRANSITION_DURATION):k()}},applyPlacement:function(t,e){var i=this.tip(),s=i[0].offsetWidth,o=i[0].offsetHeight,r=parseInt(i.css("margin-top"),10),a=parseInt(i.css("margin-left"),10);isNaN(r)&&(r=0),isNaN(a)&&(a=0),t.top+=r,t.left+=a,n.pagePosition(i[0],t),i.addClass("in");var l=i[0].offsetWidth,h=i[0].offsetHeight;"top"==e&&h!=o&&(t.top=t.top+o-h);var d=this.getViewportAdjustedDelta(e,t,l,h);d.left?t.left+=d.left:t.top+=d.top;var c=/top|bottom/.test(e),u=c?2*d.left-s+l:2*d.top-o+h,p=c?"offsetWidth":"offsetHeight";i.offset(t),this.replaceArrow(u,i[0][p],c)},replaceArrow:function(t,e,i){this.arrow().css(i?"left":"top",50*(1-t/e)+"%").css(i?"top":"left","")},setContent:function(){var t=this.tip(),e=this.getTitle();t.find(".tooltip-inner")[this.options.html?"html":"text"](e),t.removeClass("fade in top bottom left right")},hide:function(t){var s=this,n=o(this.$tip),r=i.create("hide.bs3."+this.type);function a(){"in"!=s.hoverState&&n.detach(),s.$element&&s.$element.removeAttr("aria-describedby").trigger("hidden.bs3."+s.type),t&&t()}if(this.$element.trigger(r),!r.isDefaultPrevented())return n.removeClass("in"),e.support.transition&&n.hasClass("fade")?n.one("transitionEnd",a).emulateTransitionEnd(l.TRANSITION_DURATION):a(),this.hoverState=null,this},fixTitle:function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("data-original-title"))&&t.attr("data-original-title",t.attr("title")||"").attr("title","")},hasContent:function(){return this.getTitle()},getPosition:function(e){var i=(e=e||this.$element)[0],s="BODY"==i.tagName,n=i.getBoundingClientRect();null==n.width&&(n=t.mixin({},n,{width:n.right-n.left,height:n.bottom-n.top}));var r=window.SVGElement&&i instanceof window.SVGElement,a=s?{top:0,left:0}:r?null:e.offset(),l={scroll:s?document.documentElement.scrollTop||document.body.scrollTop:e.scrollTop()},h=s?{width:o(window).width(),height:o(window).height()}:null;return t.mixin({},n,l,h,a)},getCalculatedOffset:function(t,e,i,s){return"bottom"==t?{top:e.top+e.height,left:e.left+e.width/2-i/2}:"top"==t?{top:e.top-s,left:e.left+e.width/2-i/2}:"left"==t?{top:e.top+e.height/2-s/2,left:e.left-i}:{top:e.top+e.height/2-s/2,left:e.left+e.width}},getViewportAdjustedDelta:function(t,e,i,s){var n={top:0,left:0};if(!this.$viewport)return n;var o=this.options.viewport&&this.options.viewport.padding||0,r=this.getPosition(this.$viewport);if(/right|left/.test(t)){var a=e.top-o-r.scroll,l=e.top+o-r.scroll+s;a<r.top?n.top=r.top-a:l>r.top+r.height&&(n.top=r.top+r.height-l)}else{var h=e.left-o,d=e.left+o+i;h<r.left?n.left=r.left-h:d>r.right&&(n.left=r.left+r.width-d)}return n},getTitle:function(){var t=this.$element,e=this.options;return t.attr("data-original-title")||("function"==typeof e.title?e.title.call(t[0]):e.title)},getUID:function(t){do{t+=~~(1e6*Math.random())}while(document.getElementById(t));return t},tip:function(){if(!this.$tip&&(this.$tip=o(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},arrow:function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},enable:function(){this.enabled=!0},disable:function(){this.enabled=!1},toggleEnabled:function(){this.enabled=!this.enabled},toggle:function(t){var e=this;t&&((e=o(t.currentTarget).plugin(this.pluginName))||(e=o(t.currentTarget).plugin(this.pluginName,this.getDelegateOptions()))),t?(e.inState.click=!e.inState.click,e.isInStateTrue()?e.enter(e):e.leave(e)):e.tip().hasClass("in")?e.leave(e):e.enter(e)},destroy:function(){var t=this;clearTimeout(this.timeout),this.hide(function(){t.$element.off("."+t.type).removeData("bs3."+t.type),t.$tip&&t.$tip.detach(),t.$tip=null,t.$arrow=null,t.$viewport=null,t.$element=null})}});return l.VERSION="3.3.7",l.TRANSITION_DURATION=150,l.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},r.register(l,"tooltip"),l}),t("skylark-bootstrap3/popover",["skylark-utils-dom/browser","skylark-langx/langx","skylark-utils-dom/eventer","skylark-utils-dom/query","skylark-utils-dom/plugins","./bs3","./tooltip"],function(t,e,i,s,n,o,r){"use strict";var a=o.Popover=r.inherit({klassName:"Popover",pluginName:"bs3.popover",_construct:function(t,e){this.overrided(t,e),this.type="popover"},getDefaults:function(){return a.DEFAULTS},setContent:function(){var t=this.tip(),e=this.getTitle(),i=this.getContent();t.find(".popover-title")[this.options.html?"html":"text"](e),t.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof i?"html":"append":"text"](i),t.removeClass("fade top bottom left right in"),t.find(".popover-title").html()||t.find(".popover-title").hide()},hasContent:function(){return this.getTitle()||this.getContent()},getContent:function(){var t=this.$element,e=this.options;return t.attr("data-content")||("function"==typeof e.content?e.content.call(t[0]):e.content)},arrow:function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")}});return a.VERSION="3.3.7",a.DEFAULTS=e.mixin({},r.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),n.register(a,"popover"),a}),t("skylark-bootstrap3/scrollspy",["skylark-langx/langx","skylark-utils-dom/browser","skylark-utils-dom/eventer","skylark-utils-dom/noder","skylark-utils-dom/geom","skylark-utils-dom/query","skylark-utils-dom/plugins","./bs3"],function(t,e,i,s,n,o,r,a){"use strict";var l=a.ScrollSpy=r.Plugin.inherit({klassName:"ScrollSpy",pluginName:"bs3.scrollspy",_construct:function(e,i){this.$body=o(document.body),this.$scrollElement=o(e).is(document.body)?o(window):o(e),this.options=t.mixin({},l.DEFAULTS,i),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",t.proxy(this.process,this)),this.refresh(),this.process()},getScrollHeight:function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},refresh:function(){var e=this,i="offset",s=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),t.isWindow(this.$scrollElement[0])||(i="position",s=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var t=o(this),e=t.data("target")||t.attr("href"),n=/^#./.test(e)&&o(e);return n&&n.length&&n.is(":visible")&&[[n[i]().top+s,e]]||null}).sort(function(t,e){return t[0]-e[0]}).each(function(){e.offsets.push(this[0]),e.targets.push(this[1])})},process:function(){var t,e=this.$scrollElement.scrollTop()+this.options.offset,i=this.getScrollHeight(),s=this.options.offset+i-this.$scrollElement.height(),n=this.offsets,o=this.targets,r=this.activeTarget;if(this.scrollHeight!=i&&this.refresh(),e>=s)return r!=(t=o[o.length-1])&&this.activate(t);if(r&&e<n[0])return this.activeTarget=null,this.clear();for(t=n.length;t--;)r!=o[t]&&e>=n[t]&&(void 0===n[t+1]||e<n[t+1])&&this.activate(o[t])},activate:function(t){this.activeTarget=t,this.clear();var e=this.selector+'[data-target="'+t+'"],'+this.selector+'[href="'+t+'"]',i=o(e).parents("li").addClass("active");i.parent(".dropdown-menu").length&&(i=i.closest("li.dropdown").addClass("active")),i.trigger("activate.bs.scrollspy")},clear:function(){o(this.selector).parentsUntil(this.options.target,".active").removeClass("active")}});return l.VERSION="3.3.7",l.DEFAULTS={offset:10},r.register(l,"scrollspy"),l}),t("skylark-bootstrap3/tab",["skylark-langx/langx","skylark-utils-dom/browser","skylark-utils-dom/eventer","skylark-utils-dom/noder","skylark-utils-dom/geom","skylark-utils-dom/query","skylark-utils-dom/plugins","./bs3"],function(t,e,i,s,n,o,r,a){"use strict";var l=a.Tab=r.Plugin.inherit({klassName:"Tab",pluginName:"bs3.tab",_construct:function(e,i){this.element=o(e),this.target=i&&i.target,this.element.on("click.bs.tab.data-api",t.proxy(function(t){t.preventDefault(),this.show()},this))},show:function(){var t=this.element,e=t.closest("ul:not(.dropdown-menu)"),s=this.target||t.data("target");if(s||(s=(s=t.attr("href"))&&s.replace(/.*(?=#[^\s]*$)/,"")),!t.parent("li").hasClass("active")){var n=e.find(".active:last a"),r=i.create("hide.bs.tab",{relatedTarget:t[0]}),a=i.create("show.bs.tab",{relatedTarget:n[0]});if(n.trigger(r),t.trigger(a),!a.isDefaultPrevented()&&!r.isDefaultPrevented()){var l=o(s);this.activate(t.closest("li"),e),this.activate(l,l.parent(),function(){n.trigger({type:"hidden.bs.tab",relatedTarget:t[0]}),t.trigger({type:"shown.bs.tab",relatedTarget:n[0]})})}}},activate:function(t,i,s){var n=i.find("> .active"),o=s&&e.support.transition&&(n.length&&n.hasClass("fade")||!!i.find("> .fade").length);function r(){n.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),t.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),o?(t[0].offsetWidth,t.addClass("in")):t.removeClass("fade"),t.parent(".dropdown-menu").length&&t.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),s&&s()}n.length&&o?n.one("transitionEnd",r).emulateTransitionEnd(l.TRANSITION_DURATION):r(),n.removeClass("in")}});return l.VERSION="3.3.7",l.TRANSITION_DURATION=150,r.register(l,"tab"),l}),t("skylark-bootstrap3/main",["skylark-utils-dom/query","./affix","./alert","./button","./carousel","./collapse","./dropdown","./modal","./popover","./scrollspy","./tab","./tooltip","./transition"],function(t){return t}),t("skylark-bootstrap3",["skylark-bootstrap3/main"],function(t){return t})}(i),!n){var a=s("skylark-langx/skylark");o?module.exports=a:e.skylarkjs=a}}(0,this);
//# sourceMappingURL=sourcemaps/skylark-bootstrap3.js.map
