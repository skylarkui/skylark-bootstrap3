/**
 * skylark-bootstrap3 - The skylark standard widget tookit
 * @author Hudaokeji, Inc.
 * @version v0.9.2
 * @link https://github.com/skylarkui/skylark-bootstrap3/
 * @license MIT
 */
define(["skylark-langx/langx","skylark-utils-dom/browser","skylark-utils-dom/eventer","skylark-utils-dom/noder","skylark-utils-dom/geom","skylark-utils-dom/velm","skylark-utils-dom/query","./bs3"],function(t,s,e,i,l,r,o,n){"use strict";var c=n.ScrollSpy=n.WidgetBase.inherit({klassName:"ScrollSpy",init:function(s,e){this.$body=o(document.body),this.$scrollElement=o(o(s).is(document.body)?window:s),this.options=t.mixin({},c.DEFAULTS,e),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",t.proxy(this.process,this)),this.refresh(),this.process()},getScrollHeight:function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},refresh:function(){var s=this,e="offset",i=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),t.isWindow(this.$scrollElement[0])||(e="position",i=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var t=o(this),s=t.data("target")||t.attr("href"),l=/^#./.test(s)&&o(s);return l&&l.length&&l.is(":visible")&&[[l[e]().top+i,s]]||null}).sort(function(t,s){return t[0]-s[0]}).each(function(){s.offsets.push(this[0]),s.targets.push(this[1])})},process:function(){var t,s=this.$scrollElement.scrollTop()+this.options.offset,e=this.getScrollHeight(),i=this.options.offset+e-this.$scrollElement.height(),l=this.offsets,r=this.targets,o=this.activeTarget;if(this.scrollHeight!=e&&this.refresh(),s>=i)return o!=(t=r[r.length-1])&&this.activate(t);if(o&&s<l[0])return this.activeTarget=null,this.clear();for(t=l.length;t--;)o!=r[t]&&s>=l[t]&&(void 0===l[t+1]||s<l[t+1])&&this.activate(r[t])},activate:function(t){this.activeTarget=t,this.clear();var s=this.selector+'[data-target="'+t+'"],'+this.selector+'[href="'+t+'"]',e=o(s).parents("li").addClass("active");e.parent(".dropdown-menu").length&&(e=e.closest("li.dropdown").addClass("active")),e.trigger("activate.bs.scrollspy")},clear:function(){o(this.selector).parentsUntil(this.options.target,".active").removeClass("active")}});c.VERSION="3.3.7",c.DEFAULTS={offset:10};var h=o.fn.scrollspy;return o.fn.scrollspy=function(t){return this.each(function(){var s=o(this),e=s.data("bs.scrollspy"),i="object"==typeof t&&t;e||s.data("bs.scrollspy",e=new c(this,i)),"string"==typeof t&&e[t]()})},o.fn.scrollspy.Constructor=c,o.fn.scrollspy.noConflict=function(){return o.fn.scrollspy=h,this},o.fn.scrollspy});
//# sourceMappingURL=sourcemaps/scrollspy.js.map
