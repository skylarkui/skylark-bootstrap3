/**
 * skylark-bootstrap3 - The skylark standard widget tookit
 * @author Hudaokeji, Inc.
 * @version v0.9.2
 * @link https://github.com/skylarkui/skylark-bootstrap3/
 * @license MIT
 */
define(["skylark-langx/langx","skylark-utils-dom/browser","skylark-utils-dom/eventer","skylark-utils-dom/noder","skylark-utils-dom/geom","skylark-utils-dom/query","skylark-utils-dom/plugins","./bs3"],function(t,i,e,s,o,n,f,l){"use strict";var a=l.Affix=f.Plugin.inherit({klassName:"Affix",pluginName:"bs3.affix",_construct:function(i,e){this.options=t.mixin({},a.DEFAULTS,e),this.$target=n(this.options.target).on("scroll.bs.affix.data-api",t.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",t.proxy(this.checkPositionWithEventLoop,this)),this.$element=n(i),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()},getState:function(t,i,e,s){var o=this.$target.scrollTop(),n=this.$element.offset(),f=this.$target.height();if(null!=e&&"top"==this.affixed)return o<e&&"top";if("bottom"==this.affixed)return null!=e?!(o+this.unpin<=n.top)&&"bottom":!(o+f<=t-s)&&"bottom";var l=null==this.affixed,a=l?o:n.top;return null!=e&&o<=e?"top":null!=s&&a+(l?f:i)>=t-s&&"bottom"},getPinnedOffset:function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(a.RESET).addClass("affix");var t=this.$target.scrollTop(),i=this.$element.offset();return this.pinnedOffset=i.top-t},checkPositionWithEventLoop:function(){setTimeout(t.proxy(this.checkPosition,this),1)},checkPosition:function(){if(this.$element.is(":visible")){var t=this.$element.height(),i=this.options.offset,s=i.top,o=i.bottom,f=Math.max(n(document).height(),n(document.body).height());"object"!=typeof i&&(o=s=i),"function"==typeof s&&(s=i.top(this.$element)),"function"==typeof o&&(o=i.bottom(this.$element));var l=this.getState(f,t,s,o);if(this.affixed!=l){null!=this.unpin&&this.$element.css("top","");var h="affix"+(l?"-"+l:""),r=e.create(h+".bs.affix");if(this.$element.trigger(r),r.isDefaultPrevented())return;this.affixed=l,this.unpin="bottom"==l?this.getPinnedOffset():null,this.$element.removeClass(a.RESET).addClass(h).trigger(h.replace("affix","affixed")+".bs.affix")}"bottom"==l&&this.$element.offset({top:f-t-o})}}});return a.VERSION="3.3.7",a.RESET="affix affix-top affix-bottom",a.DEFAULTS={offset:0,target:window},f.register(a,"affix"),a});
//# sourceMappingURL=sourcemaps/affix.js.map
