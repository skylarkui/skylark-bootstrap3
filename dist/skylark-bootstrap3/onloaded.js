/**
 * skylark-bootstrap3 - The skylark standard widget tookit
 * @author Hudaokeji, Inc.
 * @version v0.9.2
 * @link https://github.com/skylarkui/skylark-bootstrap3/
 * @license MIT
 */
define(["skylark-utils-dom/query","./affix","./alert","./button","./carousel","./collapse","./dropdown","./modal","./popover","./scrollspy","./tab","./tooltip","./transition"],function(t){var a=function(){t(window).on("load",function(){t('[data-spy="affix"]').each(function(){var a=t(this),o=a.data();o.offset=o.offset||{},null!=o.offsetBottom&&(o.offset.bottom=o.offsetBottom),null!=o.offsetTop&&(o.offset.top=o.offsetTop),a.affix(o)}),t(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(a){var o=t(a.target).closest(".btn");o.button("toggle"),t(a.target).is('input[type="radio"], input[type="checkbox"]')||(a.preventDefault(),o.is("input,button")?o.trigger("focus"):o.find("input:visible,button:visible").first().trigger("focus"))}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(a){t(a.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(a.type))}),t('[data-ride="carousel"]').each(function(){$this=t(this),$this.carousel($this.data())}),t('[data-ride="dropdown"]').each(function(){$this=t(this),$this.dropdown($this.data())}),t(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(a){var o=t(this),e=o.attr("href"),i=t(o.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),n=i.data("bs.modal")?"toggle":langx.mixin({remote:!/#/.test(e)&&e},i.data(),o.data());o.is("a")&&a.preventDefault(),i.one("show.bs.modal",function(t){t.isDefaultPrevented()||i.one("hidden.bs.modal",function(){o.is(":visible")&&o.trigger("focus")})}),i.modal(n,this)}),t('[data-spy="scroll"]').each(function(){var a=t(this);a.scrollspy(a.data())});var a=function(a){a.preventDefault(),t(this).tab("show")};t(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',a).on("click.bs.tab.data-api",'[data-toggle="pill"]',a)})};return a});
//# sourceMappingURL=sourcemaps/onloaded.js.map
