/**
 * skylark-bootstrap3 - The skylark standard widget tookit
 * @author Hudaokeji, Inc.
 * @version v0.9.2
 * @link https://github.com/skylarkui/skylark-bootstrap3/
 * @license MIT
 */
define(["skylark-langx/langx","skylark-domx-browser","skylark-domx-eventer","skylark-domx-noder","skylark-domx-geom","skylark-domx-query","skylark-domx-plugins-base","./bs3","./transition"],function(t,e,i,s,n,r,a,o){"use strict";var l=o.Carousel=a.Plugin.inherit({klassName:"Carousel",pluginName:"bs3.carousel",options:{interval:5e3,pause:"hover",wrap:!0,keyboard:!0,selectors:{controls:{toggle:".toggle",prev:".prev",next:".next",close:".close",playPause:".play-pause"},indicators:{container:".carousel-indicators"},slides:{container:"",item:".item"}}},_construct:function(e,i){i=t.mixin({},r(e).data(),i),this.overrided(e,i),this.$element=r(e),this.$indicators=this.$element.find(this.options.selectors.indicators.container),this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null;var s=this;this.options.embeded||(this.options.keyboard&&this.$element.on("keydown.bs.carousel",t.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs3.carousel",t.proxy(this.pause,this)).on("mouseleave.bs3.carousel",t.proxy(this.cycle,this)),this.$element.on("click.bs3.carousel.data-api","[data-slide],[data-slide-to]",function(t){var e=r(this),i=e.attr("data-slide"),n=e.attr("data-slide-to");"prev"==i?s.prev():"next"==i?s.next():n&&s.to(n),t.preventDefault()}))},keydown:function(t){if(!/input|textarea/i.test(t.target.tagName)){switch(t.which){case 37:this.prev();break;case 39:this.next();break;default:return}t.preventDefault()}},cycle:function(e){return e||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(t.proxy(this.next,this),this.options.interval)),this},getItemIndex:function(t){return this.$items=t.parent().children(this.options.selectors.slides.item),this.$items.index(t||this.$active)},getItemForDirection:function(t,e){var i=this.getItemIndex(e);if(("prev"==t&&0===i||"next"==t&&i==this.$items.length-1)&&!this.options.wrap)return e;var s=(i+("prev"==t?-1:1))%this.$items.length;return this.$items.eq(s)},to:function(t){var e=this,i=this.getItemIndex(this.$active=this.$element.find(this.options.selectors.slides.item+".active"));if(!(t>this.$items.length-1||t<0))return this.sliding?this.$element.one("slid.bs.carousel",function(){e.to(t)}):i==t?this.pause().cycle():this.slide(t>i?"next":"prev",this.$items.eq(t))},pause:function(t){return t||(this.paused=!0),this.$element.find(this.options.selectors.controls.next+","+this.options.selectors.controls.prev).length&&e.support.transition&&(this.$element.trigger(e.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},next:function(){if(!this.sliding)return this.slide("next")},prev:function(){if(!this.sliding)return this.slide("prev")},slide:function(t,s){var n=this.$element.find(this.options.selectors.slides.item+".active"),a=s||this.getItemForDirection(t,n),o=this.interval,l="next"==t?"left":"right",h=this;if(a.hasClass("active"))return this.sliding=!1;var c=a[0],d=i.create("slide.bs.carousel",{relatedTarget:c,direction:l});if(this.$element.trigger(d),!d.isDefaultPrevented()){if(this.sliding=!0,o&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var u=r(this.$indicators.children()[this.getItemIndex(a)]);u&&u.addClass("active")}var v=i.create("slid.bs.carousel",{relatedTarget:c,direction:l});return e.support.transition&&this.$element.hasClass("slide")?(a.addClass(t),a[0].offsetWidth,n.addClass(l),a.addClass(l),n.one("transitionEnd",function(){a.removeClass([t,l].join(" ")).addClass("active"),n.removeClass(["active",l].join(" ")),h.sliding=!1,setTimeout(function(){h.$element.trigger(v)},0)}).emulateTransitionEnd()):(n.removeClass("active"),a.addClass("active"),this.sliding=!1,this.$element.trigger(v)),o&&this.cycle(),this}}});return l.VERSION="3.3.7",l.TRANSITION_DURATION=600,a.register(l,"carousel",function(t){var e="string"==typeof t?t:t.slide;"number"==typeof t?this.to(t):e?this[e]():t.interval&&this.pause().cycle()}),l});
//# sourceMappingURL=sourcemaps/carousel.js.map
