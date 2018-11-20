/**
 * skylark-bootstrap3 - The skylark standard widget tookit
 * @author Hudaokeji, Inc.
 * @version v0.9.2
 * @link https://github.com/skylarkui/skylark-bootstrap3/
 * @license MIT
 */
define(["skylark-langx/langx","skylark-utils-dom/browser","skylark-utils-dom/eventer","skylark-utils-dom/noder","skylark-utils-dom/geom","skylark-utils-dom/query","./bs3"],function(t,i,e,s,o,n,a){"use strict";function r(i,e){return this.each(function(){var s=n(this),o=s.data("bs.modal"),a=t.mixin({},d.DEFAULTS,s.data(),"object"==typeof i&&i);o||s.data("bs.modal",o=new d(this,a)),"string"==typeof i?o[i](e):a.show&&o.show(e)})}var d=a.Modal=a.WidgetBase.inherit({klassName:"Modal",init:function(i,e){this.options=e,this.$container=n(e.container||document.body),this.$element=n(i),this.$dialog=this.$element.find(".modal-dialog"),this.$container.is("body")||this.$element.css("position","absolute"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,t.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))},toggle:function(t){return this.isShown?this.hide():this.show(t)},show:function(o){var a=this,r=e.create("show.bs.modal",{relatedTarget:o});this.$element.trigger(r),this.isShown||r.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$container.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',t.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){a.$element.one("mouseup.dismiss.bs.modal",function(t){n(t.target).is(a.$element)&&(a.ignoreBackdropClick=!0)})}),this.backdrop(function(){var t=i.support.transition&&a.$element.hasClass("fade");s.isChildOf(a.$element[0],a.$container[0])||a.$element.appendTo(a.$container),a.$element.show().scrollTop(0),a.adjustDialog(),t&&a.$element[0].offsetWidth,a.$element.addClass("in"),a.enforceFocus();var n=e.create("shown.bs.modal",{relatedTarget:o});t?a.$dialog.one("transitionEnd",function(){a.$element.trigger("focus").trigger(n)}).emulateTransitionEnd(d.TRANSITION_DURATION):a.$element.trigger("focus").trigger(n)}))},hide:function(s){s&&s.preventDefault(),s=e.create("hide.bs.modal"),this.$element.trigger(s),this.isShown&&!s.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),n(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),i.support.transition&&this.$element.hasClass("fade")?this.$element.one("transitionEnd",t.proxy(this.hideModal,this)).emulateTransitionEnd(d.TRANSITION_DURATION):this.hideModal())},enforceFocus:function(){n(document).off("focusin.bs.modal").on("focusin.bs.modal",t.proxy(function(t){document===t.target||this.$element[0]===t.target||this.$element.has(t.target).length||this.$element.trigger("focus")},this))},escape:function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",t.proxy(function(t){27==t.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},resize:function(){this.isShown?n(window).on("resize.bs.modal",t.proxy(this.handleUpdate,this)):n(window).off("resize.bs.modal")},hideModal:function(){var t=this;this.$element.hide(),this.backdrop(function(){t.$container.removeClass("modal-open"),t.resetAdjustments(),t.resetScrollbar(),t.$element.trigger("hidden.bs.modal")})},removeBackdrop:function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},backdrop:function(e){var s=this,o=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var a=i.support.transition&&o;if(this.$backdrop=n(document.createElement("div")).addClass("modal-backdrop "+o).appendTo(this.$container),this.$container.is("body")||this.$backdrop.css("position","absolute"),this.$element.on("click.dismiss.bs.modal",t.proxy(function(t){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(t.target===t.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),a&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!e)return;a?this.$backdrop.one("transitionEnd",e).emulateTransitionEnd(d.BACKDROP_TRANSITION_DURATION):e()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var r=function(){s.removeBackdrop(),e&&e()};i.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("transitionEnd",r).emulateTransitionEnd(d.BACKDROP_TRANSITION_DURATION):r()}else e&&e()},handleUpdate:function(){this.adjustDialog()},adjustDialog:function(){var t=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&t?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!t?this.scrollbarWidth:""})},resetAdjustments:function(){this.$element.css({paddingLeft:"",paddingRight:""})},checkScrollbar:function(){var t=window.innerWidth;if(!t){var i=document.documentElement.getBoundingClientRect();t=i.right-Math.abs(i.left)}this.bodyIsOverflowing=document.body.clientWidth<t,this.scrollbarWidth=this.measureScrollbar()},setScrollbar:function(){var t=parseInt(this.$container.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$container.css("padding-right",t+this.scrollbarWidth)},resetScrollbar:function(){this.$container.css("padding-right",this.originalBodyPad)},measureScrollbar:function(){var t=document.createElement("div");t.className="modal-scrollbar-measure",this.$container.append(t);var i=t.offsetWidth-t.clientWidth;return this.$container[0].removeChild(t),i}});d.VERSION="3.3.7",d.TRANSITION_DURATION=300,d.BACKDROP_TRANSITION_DURATION=150,d.DEFAULTS={backdrop:!0,keyboard:!0,show:!0};var l=n.fn.modal;return n.fn.modal=r,n.fn.modal.Constructor=d,n.fn.modal.noConflict=function(){return n.fn.modal=l,this},n.fn.modal});
//# sourceMappingURL=sourcemaps/modal.js.map