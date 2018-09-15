/**
 * skylark-bootstrap3 - The skylark standard widget tookit
 * @author Hudaokeji, Inc.
 * @version v0.9.2
 * @link https://github.com/skylarkui/skylark-bootstrap3/
 * @license MIT
 */
define(["skylark-utils/langx","skylark-utils/browser","skylark-utils/eventer","skylark-utils/noder","skylark-utils/geom","skylark-utils/velm","skylark-utils/query","./bs3"],function(t,e,i,s,n,r,a,l){"use strict";function o(e){return this.each(function(){var i=a(this),s=i.data("bs.carousel"),n=t.mixin({},h.DEFAULTS,i.data(),"object"==typeof e&&e),r="string"==typeof e?e:n.slide;s||i.data("bs.carousel",s=new h(this,n)),"number"==typeof e?s.to(e):r?s[r]():n.interval&&s.pause().cycle()})}var h=l.Carousel=l.WidgetBase.inherit({klassName:"Carousel",init:function(e,i){this.$element=a(e),this.$indicators=this.$element.find(".carousel-indicators"),this.options=i,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",t.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",t.proxy(this.pause,this)).on("mouseleave.bs.carousel",t.proxy(this.cycle,this)),this.$element.on("click.bs.carousel.data-api","[data-slide],[data-slide-to]",function(e){var i,s=a(this),n=a(s.attr("data-target")||(i=s.attr("href"))&&i.replace(/.*(?=#[^\s]+$)/,""));if(n.hasClass("carousel")){var r=t.mixin({},n.data(),s.data()),l=s.attr("data-slide-to");l&&(r.interval=!1),o.call(n,r),l&&n.data("bs.carousel").to(l),e.preventDefault()}})}});h.VERSION="3.3.7",h.TRANSITION_DURATION=600,h.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},h.prototype.keydown=function(t){if(!/input|textarea/i.test(t.target.tagName)){switch(t.which){case 37:this.prev();break;case 39:this.next();break;default:return}t.preventDefault()}},h.prototype.cycle=function(e){return e||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(t.proxy(this.next,this),this.options.interval)),this},h.prototype.getItemIndex=function(t){return this.$items=t.parent().children(".item"),this.$items.index(t||this.$active)},h.prototype.getItemForDirection=function(t,e){var i=this.getItemIndex(e),s="prev"==t&&0===i||"next"==t&&i==this.$items.length-1;if(s&&!this.options.wrap)return e;var n="prev"==t?-1:1,r=(i+n)%this.$items.length;return this.$items.eq(r)},h.prototype.to=function(t){var e=this,i=this.getItemIndex(this.$active=this.$element.find(".item.active"));if(!(t>this.$items.length-1||t<0))return this.sliding?this.$element.one("slid.bs.carousel",function(){e.to(t)}):i==t?this.pause().cycle():this.slide(t>i?"next":"prev",this.$items.eq(t))},h.prototype.pause=function(t){return t||(this.paused=!0),this.$element.find(".next, .prev").length&&e.support.transition&&(this.$element.trigger(e.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},h.prototype.next=function(){if(!this.sliding)return this.slide("next")},h.prototype.prev=function(){if(!this.sliding)return this.slide("prev")},h.prototype.slide=function(t,s){var n=this.$element.find(".item.active"),r=s||this.getItemForDirection(t,n),l=this.interval,o="next"==t?"left":"right",u=this;if(r.hasClass("active"))return this.sliding=!1;var c=r[0],d=i.create("slide.bs.carousel",{relatedTarget:c,direction:o});if(this.$element.trigger(d),!d.isDefaultPrevented()){if(this.sliding=!0,l&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var p=a(this.$indicators.children()[this.getItemIndex(r)]);p&&p.addClass("active")}var v=i.create("slid.bs.carousel",{relatedTarget:c,direction:o});return e.support.transition&&this.$element.hasClass("slide")?(r.addClass(t),r[0].offsetWidth,n.addClass(o),r.addClass(o),n.one("bsTransitionEnd",function(){r.removeClass([t,o].join(" ")).addClass("active"),n.removeClass(["active",o].join(" ")),u.sliding=!1,setTimeout(function(){u.$element.trigger(v)},0)}).emulateTransitionEnd(h.TRANSITION_DURATION)):(n.removeClass("active"),r.addClass("active"),this.sliding=!1,this.$element.trigger(v)),l&&this.cycle(),this}};var u=a.fn.carousel;return a.fn.carousel=o,a.fn.carousel.Constructor=h,a.fn.carousel.noConflict=function(){return a.fn.carousel=u,this},a.fn.carousel});
//# sourceMappingURL=sourcemaps/carousel.js.map
