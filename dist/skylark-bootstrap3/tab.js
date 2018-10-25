/**
 * skylark-bootstrap3 - The skylark standard widget tookit
 * @author Hudaokeji, Inc.
 * @version v0.9.2
 * @link https://github.com/skylarkui/skylark-bootstrap3/
 * @license MIT
 */
define(["skylark-langx/langx","skylark-utils-dom/browser","skylark-utils-dom/eventer","skylark-utils-dom/noder","skylark-utils-dom/geom","skylark-utils-dom/velm","skylark-utils-dom/query","./bs3"],function(t,a,e,n,i,s,r,d){"use strict";function l(t){return this.each(function(){var a=r(this),e=a.data("bs.tab");e||a.data("bs.tab",e=new o(this)),"string"==typeof t&&e[t]()})}var o=d.Tab=d.WidgetBase.inherit({klassName:"Tab",init:function(a,e){this.element=r(a),this.element.on("click.bs.tab.data-api",t.proxy(function(t){t.preventDefault(),this.show()},this))},show:function(){var t=this.element,a=t.closest("ul:not(.dropdown-menu)"),n=t.data("target");if(n||(n=t.attr("href"),n=n&&n.replace(/.*(?=#[^\s]*$)/,"")),!t.parent("li").hasClass("active")){var i=a.find(".active:last a"),s=e.create("hide.bs.tab",{relatedTarget:t[0]}),d=e.create("show.bs.tab",{relatedTarget:i[0]});if(i.trigger(s),t.trigger(d),!d.isDefaultPrevented()&&!s.isDefaultPrevented()){var l=r(n);this.activate(t.closest("li"),a),this.activate(l,l.parent(),function(){i.trigger({type:"hidden.bs.tab",relatedTarget:t[0]}),t.trigger({type:"shown.bs.tab",relatedTarget:i[0]})})}}},activate:function(t,e,n){function i(){s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),t.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),r?(t[0].offsetWidth,t.addClass("in")):t.removeClass("fade"),t.parent(".dropdown-menu").length&&t.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),n&&n()}var s=e.find("> .active"),r=n&&a.support.transition&&(s.length&&s.hasClass("fade")||!!e.find("> .fade").length);s.length&&r?s.one("bsTransitionEnd",i).emulateTransitionEnd(o.TRANSITION_DURATION):i(),s.removeClass("in")}});o.VERSION="3.3.7",o.TRANSITION_DURATION=150;var f=r.fn.tab;return r.fn.tab=l,r.fn.tab.Constructor=o,r.fn.tab.noConflict=function(){return r.fn.tab=f,this},r.fn.tab});
//# sourceMappingURL=sourcemaps/tab.js.map
