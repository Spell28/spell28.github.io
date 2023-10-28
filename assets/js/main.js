document.addEventListener("DOMContentLoaded",function(){document.querySelector(".splide")&&new Splide(".splide",{height:"calc(100vh)",perPage:1,direction:"ttb",paginationDirection:"ttb",gap:"1000px",arrows:!1,wheel:!0,wheelSleep:1e3,releaseWheel:!0,keyboard:"global"}).mount()});
function r(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function Jt(t,n,e){n&&r(t.prototype,n),e&&r(t,e),Object.defineProperty(t,"prototype",{writable:!1})}var n=this,t=function(){"use strict";var p="(prefers-reduced-motion: reduce)",R=4,et=5,e={CREATED:1,MOUNTED:2,IDLE:3,MOVING:R,SCROLLING:et,DRAGGING:6,DESTROYED:7};function M(t){t.length=0}function o(t,n,e){return Array.prototype.slice.call(t,n,e)}function I(t){return t.bind.apply(t,[null].concat(o(arguments,1)))}function it(){}var g=setTimeout;function h(t){return requestAnimationFrame(t)}function i(t,n){return typeof n===t}function ot(t){return!u(t)&&i("object",t)}var r=Array.isArray,S=I(i,"function"),T=I(i,"string"),rt=I(i,"undefined");function u(t){return null===t}function m(t){try{return t instanceof(t.ownerDocument.defaultView||window).HTMLElement}catch(t){return!1}}function y(t){return r(t)?t:[t]}function v(t,n){y(t).forEach(n)}function b(t,n){return-1<t.indexOf(n)}function x(t,n){return t.push.apply(t,y(n)),t}function C(n,t,e){n&&v(t,function(t){t&&n.classList[e?"add":"remove"](t)})}function z(t,n){C(t,T(n)?n.split(" "):n,!0)}function k(t,n){v(n,t.appendChild.bind(t))}function L(t,e){v(t,function(t){var n=(e||t).parentNode;n&&n.insertBefore(t,e)})}function ut(t,n){return m(t)&&(t.msMatchesSelector||t.matches).call(t,n)}function P(t,n){return t=t?o(t.children):[],n?t.filter(function(t){return ut(t,n)}):t}function st(t,n){return n?P(t,n)[0]:t.firstElementChild}var ct=Object.keys;function w(n,e,t){n&&(t?ct(n).reverse():ct(n)).forEach(function(t){"__proto__"!==t&&e(n[t],t)})}function at(i){return o(arguments,1).forEach(function(e){w(e,function(t,n){i[n]=e[n]})}),i}function d(e){return o(arguments,1).forEach(function(t){w(t,function(t,n){r(t)?e[n]=t.slice():ot(t)?e[n]=d({},ot(e[n])?e[n]:{},t):e[n]=t})}),e}function lt(n,t){v(t||ct(n),function(t){delete n[t]})}function N(t,e){v(t,function(n){v(e,function(t){n&&n.removeAttribute(t)})})}function O(e,n,i){ot(n)?w(n,function(t,n){O(e,n,t)}):v(e,function(t){u(i)||""===i?N(t,n):t.setAttribute(n,String(i))})}function F(t,n,e){return t=document.createElement(t),n&&(T(n)?z:O)(t,n),e&&k(e,t),t}function A(t,n,e){if(rt(e))return getComputedStyle(t)[n];u(e)||(t.style[n]=""+e)}function ft(t,n){A(t,"display",n)}function dt(t){t.setActive&&t.setActive()||t.focus({preventScroll:!0})}function D(t,n){return t.getAttribute(n)}function pt(t,n){return t&&t.classList.contains(n)}function _(t){return t.getBoundingClientRect()}function j(t){v(t,function(t){t&&t.parentNode&&t.parentNode.removeChild(t)})}function ht(t){return st((new DOMParser).parseFromString(t,"text/html").body)}function W(t,n){t.preventDefault(),n&&(t.stopPropagation(),t.stopImmediatePropagation())}function gt(t,n){return t&&t.querySelector(n)}function vt(t,n){return n?o(t.querySelectorAll(n)):[]}function X(t,n){C(t,n,!1)}function mt(t){return t.timeStamp}function G(t){return T(t)?t:t?t+"px":""}var E="splide",s="data-"+E;function yt(t,n){if(!t)throw new Error("["+E+"] "+(n||""))}var B=Math.min,bt=Math.max,wt=Math.floor,Et=Math.ceil,H=Math.abs;function St(t,n,e){return H(t-n)<e}function xt(t,n,e,i){var o=B(n,e),n=bt(n,e);return i?o<t&&t<n:o<=t&&t<=n}function Y(t,n,e){var i=B(n,e),n=bt(n,e);return B(bt(i,t),n)}function Pt(t){return(0<t)-(t<0)}function kt(n,t){return v(t,function(t){n=n.replace("%s",""+t)}),n}function Lt(t){return t<10?"0"+t:""+t}var Ct={};function At(){var s=[];function e(t,e,i){v(t,function(n){n&&v(e,function(t){t.split(" ").forEach(function(t){t=t.split("."),i(n,t[0],t[1])})})})}return{bind:function(t,n,r,u){e(t,n,function(t,n,e){var i="addEventListener"in t,o=i?t.removeEventListener.bind(t,n,r,u):t.removeListener.bind(t,r);i?t.addEventListener(n,r,u):t.addListener(r),s.push([t,n,e,r,o])})},unbind:function(t,n,o){e(t,n,function(n,e,i){s=s.filter(function(t){return!!(t[0]!==n||t[1]!==e||t[2]!==i||o&&t[3]!==o)||(t[4](),!1)})})},dispatch:function(t,n,e){var i;return"function"==typeof CustomEvent?i=new CustomEvent(n,{bubbles:!0,detail:e}):(i=document.createEvent("CustomEvent")).initCustomEvent(n,!0,!1,e),t.dispatchEvent(i),i},destroy:function(){s.forEach(function(t){t[4]()}),M(s)}}}var q="mounted",J="move",Dt="moved",Mt="click",zt="active",Nt="inactive",Ot="visible",It="hidden",U="refresh",K="updated",Tt="resize",Ft="resized",_t="scroll",V="scrolled",c="destroy",jt="navigation:mounted",Rt="autoplay:play",Wt="autoplay:pause",Xt="lazyload:loaded",Gt="sk",Bt="sh";function Q(t){var e=t?t.event.bus:document.createDocumentFragment(),i=At();return t&&t.event.on(c,i.destroy),at(i,{bus:e,on:function(t,n){i.bind(e,y(t).join(" "),function(t){n.apply(n,r(t.detail)?t.detail:[])})},off:I(i.unbind,e),emit:function(t){i.dispatch(e,t,o(arguments,1))}})}function Ht(n,t,e,i){var o,r,u=Date.now,s=0,c=!0,a=0;function l(){if(!c){if(s=n?B((u()-o)/n,1):1,e&&e(s),1<=s&&(t(),o=u(),i)&&++a>=i)return f();r=h(l)}}function f(){c=!0}function d(){r&&cancelAnimationFrame(r),c=!(r=s=0)}return{start:function(t){t||d(),o=u()-(t?s*n:0),c=!1,r=h(l)},rewind:function(){o=u(),s=0,e&&e(s)},pause:f,cancel:d,set:function(t){n=t},isPaused:function(){return c}}}var t="Arrow",Yt=t+"Left",qt=t+"Right",a=t+"Up",Ut="ttb",l={width:["height"],left:["top","right"],right:["bottom","left"],x:["y"],X:["Y"],Y:["X"],ArrowLeft:[a,qt],ArrowRight:[t=t+"Down",Yt]},Z="role",$="tabindex",n="aria-",Kt=n+"controls",Vt=n+"current",Qt=n+"selected",tt=n+"label",Zt=n+"labelledby",$t=n+"hidden",tn=n+"orientation",nn=n+"roledescription",f=n+"live",en=n+"busy",on=n+"atomic",rn=[Z,$,"disabled",Kt,Vt,tt,Zt,$t,tn,nn],un=E,sn=(n=E+"__")+"track",cn=n+"list",an=n+"slide",ln=an+"--clone",fn=an+"__container",dn=n+"arrows",pn=n+"arrow",hn=pn+"--prev",gn=pn+"--next",vn=n+"pagination",mn=vn+"__page",yn=n+"progress__bar",bn=n+"toggle",wn=n+"sr",nt="is-active",En="is-prev",Sn="is-next",xn="is-visible",Pn="is-loading",kn="is-focus-in",Ln="is-overflow",Cn=[nt,xn,En,Sn,Pn,kn,Ln],An="touchstart mousedown",Dn="touchmove mousemove",Mn="touchend touchcancel mouseup click",zn="slide",Nn="loop",On="fade";function In(u,s,n,c){var a,t=Q(u),e=t.on,l=t.emit,i=t.bind,f=u.Components,o=u.root,d=u.options,p=d.isNavigation,r=d.updateOnMove,h=d.i18n,g=d.pagination,v=d.slideFocus,m=f.Direction.resolve,y=D(c,"style"),b=D(c,tt),w=-1<n,E=st(c,"."+fn);function S(){var t=u.splides.map(function(t){return(t=t.splide.Components.Slides.getAt(s))?t.slide.id:""}).join(" ");O(c,tt,kt(h.slideX,(w?n:s)+1)),O(c,Kt,t),O(c,Z,v?"button":""),v&&N(c,nn)}function x(){a||P()}function P(){var t,n,e,i,o,r;a||(t=u.index,(n=k())!==pt(c,nt)&&(C(c,nt,n),O(c,Vt,p&&n||""),l(n?zt:Nt,L)),o=!(n=u.is(On)?k():(e=_(f.Elements.track),i=_(c),o=m("left",!0),r=m("right",!0),wt(e[o])<=Et(i[o])&&wt(i[r])<=Et(e[r])))&&(!k()||w),u.state.is([R,et])||O(c,$t,o||""),O(vt(c,d.focusableNodes||""),$,o?-1:""),v&&O(c,$,o?-1:0),n!==pt(c,xn)&&(C(c,xn,n),l(n?Ot:It,L)),n||document.activeElement!==c||(o=f.Slides.getAt(u.index))&&dt(o.slide),C(c,En,s===t-1),C(c,Sn,s===t+1))}function k(){var t=u.index;return t===s||d.cloneStatus&&t===n}var L={index:s,slideIndex:n,slide:c,container:E,isClone:w,mount:function(){w||(c.id=o.id+"-slide"+Lt(s+1),O(c,Z,g?"tabpanel":"group"),O(c,nn,h.slide),O(c,tt,b||kt(h.slideLabel,[s+1,u.length]))),i(c,"click",I(l,Mt,L)),i(c,"keydown",I(l,Gt,L)),e([Dt,Bt,V],P),e(jt,S),r&&e(J,x)},destroy:function(){a=!0,t.destroy(),X(c,Cn),N(c,rn),O(c,"style",y),O(c,tt,b||"")},update:P,style:function(t,n,e){A(e&&E||c,t,n)},isWithin:function(t,n){return t=H(t-s),(t=w||!d.rewind&&!u.is(Nn)?t:B(t,u.length-t))<=n}};return L}var Tn=s+"-interval",Fn={passive:!1,capture:!0},_n={Spacebar:" ",Right:qt,Left:Yt,Up:a,Down:t};function jn(t){return t=T(t)?t:t.key,_n[t]||t}var Rn="keydown",Wn=s+"-lazy",Xn=Wn+"-srcset",Gn="["+Wn+"], ["+Xn+"]",Bn=[" ","Enter"],Hn=Object.freeze({__proto__:null,Media:function(i,t,o){var r=i.state,n=o.breakpoints||{},u=o.reducedMotion||{},e=At(),s=[];function c(t){t&&e.destroy()}function a(t,n){n=matchMedia(n),e.bind(n,"change",l),s.push([t,n])}function l(){var t=r.is(7),n=o.direction,e=s.reduce(function(t,n){return d(t,n[1].matches?n[0]:{})},{});lt(o),f(e),o.destroy?i.destroy("completely"===o.destroy):t?(c(!0),i.mount()):n!==o.direction&&i.refresh()}function f(t,n,e){d(o,t),n&&d(Object.getPrototypeOf(o),t),!e&&r.is(1)||i.emit(K,o)}return{setup:function(){var e="min"===o.mediaQuery;ct(n).sort(function(t,n){return e?+t-+n:+n-+t}).forEach(function(t){a(n[t],"("+(e?"min":"max")+"-width:"+t+"px)")}),a(u,p),l()},destroy:c,reduce:function(t){matchMedia(p).matches&&(t?d(o,u):lt(o,ct(u)))},set:f}},Direction:function(t,n,o){return{resolve:function(t,n,e){var i="rtl"!==(e=e||o.direction)||n?e===Ut?0:-1:1;return l[t]&&l[t][i]||t.replace(/width|left|right/i,function(t,n){return t=l[t.toLowerCase()][i]||t,0<n?t.charAt(0).toUpperCase()+t.slice(1):t})},orient:function(t){return t*("rtl"===o.direction?1:-1)}}},Elements:function(t,n,e){var i,o,r,u=Q(t),s=u.on,c=u.bind,a=t.root,l=e.i18n,f={},d=[],p=[],h=[];function g(){i=y("."+sn),o=st(i,"."+cn),yt(i&&o,"A track/list element is missing."),x(d,P(o,"."+an+":not(."+ln+")")),w({arrows:dn,pagination:vn,prev:hn,next:gn,bar:yn,toggle:bn},function(t,n){f[n]=y("."+t)}),at(f,{root:a,track:i,list:o,slides:d});var t=a.id||""+E+Lt(Ct[E]=(Ct[E]||0)+1),n=e.role;a.id=t,i.id=i.id||t+"-track",o.id=o.id||t+"-list",!D(a,Z)&&"SECTION"!==a.tagName&&n&&O(a,Z,n),O(a,nn,l.carousel),O(o,Z,"presentation"),m()}function v(t){var n=rn.concat("style");M(d),X(a,p),X(i,h),N([i,o],n),N(a,t?n:["style",nn])}function m(){X(a,p),X(i,h),p=b(un),h=b(sn),z(a,p),z(i,h),O(a,tt,e.label),O(a,Zt,e.labelledby)}function y(t){return(t=gt(a,t))&&function(t,n){if(S(t.closest))return t.closest(n);for(var e=t;e&&1===e.nodeType&&!ut(e,n);)e=e.parentElement;return e}(t,"."+un)===a?t:void 0}function b(t){return[t+"--"+e.type,t+"--"+e.direction,e.drag&&t+"--draggable",e.isNavigation&&t+"--nav",t===un&&nt]}return at(f,{setup:g,mount:function(){s(U,v),s(U,g),s(K,m),c(document,An+" keydown",function(t){r="keydown"===t.type},{capture:!0}),c(a,"focusin",function(){C(a,kn,!!r)})},destroy:v})},Slides:function(i,o,r){var t=Q(i),n=t.on,u=t.emit,s=t.bind,c=(t=o.Elements).slides,a=t.list,l=[];function e(){c.forEach(function(t,n){d(t,n,-1)})}function f(){h(function(t){t.destroy()}),M(l)}function d(t,n,e){(n=In(i,n,e,t)).mount(),l.push(n),l.sort(function(t,n){return t.index-n.index})}function p(t){return t?g(function(t){return!t.isClone}):l}function h(t,n){p(n).forEach(t)}function g(n){return l.filter(S(n)?n:function(t){return T(n)?ut(t.slide,n):b(y(n),t.index)})}return{mount:function(){e(),n(U,f),n(U,e)},destroy:f,update:function(){h(function(t){t.update()})},register:d,get:p,getIn:function(t){var n=o.Controller,e=n.toIndex(t),i=n.hasFocus()?1:r.perPage;return g(function(t){return xt(t.index,e,e+i-1)})},getAt:function(t){return g(t)[0]},add:function(t,o){v(t,function(t){var n,e,i;m(t=T(t)?ht(t):t)&&((n=c[o])?L(t,n):k(a,t),z(t,r.classes.slide),n=t,e=I(u,Tt),n=vt(n,"img"),(i=n.length)?n.forEach(function(t){s(t,"load error",function(){--i||e()})}):e())}),u(U)},remove:function(t){j(g(t).map(function(t){return t.slide})),u(U)},forEach:h,filter:g,style:function(n,e,i){h(function(t){t.style(n,e,i)})},getLength:function(t){return(t?c:l).length},isEnough:function(){return l.length>r.perPage}}},Layout:function(n,t,e){var i,o,r,u=(a=Q(n)).on,s=a.bind,c=a.emit,a=t.Slides,l=t.Direction.resolve,f=(t=t.Elements).root,d=t.track,p=t.list,h=a.getAt,g=a.style;function v(){i=e.direction===Ut,A(f,"maxWidth",G(e.width)),A(d,l("paddingLeft"),y(!1)),A(d,l("paddingRight"),y(!0)),m(!0)}function m(t){var n=_(f);!t&&o.width===n.width&&o.height===n.height||(A(d,"height",(t="",i&&(yt(t=b(),"height or heightRatio is missing."),t="calc("+t+" - "+y(!1)+" - "+y(!0)+")"),t)),g(l("marginRight"),G(e.gap)),g("width",e.autoWidth?null:G(e.fixedWidth)||(i?"":w())),g("height",G(e.fixedHeight)||(i?e.autoHeight?null:w():b()),!0),o=n,c(Ft),r!==(r=L())&&(C(f,Ln,r),c("overflow",r)))}function y(t){var n=e.padding,t=l(t?"right":"left");return n&&G(n[t]||(ot(n)?0:n))||"0px"}function b(){return G(e.height||_(p).width*e.heightRatio)}function w(){var t=G(e.gap);return"calc((100%"+(t&&" + "+t)+")/"+(e.perPage||1)+(t&&" - "+t)+")"}function E(){return _(p)[l("width")]}function S(t,n){return(t=h(t||0))?_(t.slide)[l("width")]+(n?0:k()):0}function x(t,n){var e;return(t=h(t))?(t=_(t.slide)[l("right")],e=_(p)[l("left")],H(t-e)+(n?0:k())):0}function P(t){return x(n.length-1)-x(0)+S(0,t)}function k(){var t=h(0);return t&&parseFloat(A(t.slide,l("marginRight")))||0}function L(){return n.is(On)||P(!0)>E()}return{mount:function(){var t,n;v(),s(window,"resize load",(t=I(c,Tt),n=Ht(0,t,null,1),function(){n.isPaused()&&n.start()})),u([K,U],v),u(Tt,m)},resize:m,listSize:E,slideSize:S,sliderSize:P,totalSize:x,getPadding:function(t){return parseFloat(A(d,l("padding"+(t?"Right":"Left"))))||0},isOverflow:L}},Clones:function(c,e,a){var n,i=Q(c),t=i.on,l=e.Elements,f=e.Slides,o=e.Direction.resolve,d=[];function r(){if(t(U,p),t([K,Tt],h),n=g()){var r=n,u=f.get().slice(),s=u.length;if(s){for(;u.length<r;)x(u,u);x(u.slice(-r),u.slice(0,r)).forEach(function(t,n){var e,i=n<r,o=(e=t.slide,o=n,z(e=e.cloneNode(!0),a.classes.clone),e.id=c.root.id+"-clone"+Lt(o+1),e);i?L(o,u[0].slide):k(l.list,o),x(d,o),f.register(o,n-r+(i?0:s),t.index)})}e.Layout.resize(!0)}}function p(){u(),r()}function u(){j(d),M(d),i.destroy()}function h(){var t=g();n!==t&&(n<t||!t)&&i.emit(U)}function g(){var t,n=a.clones;return c.is(Nn)?rt(n)&&(n=(t=a[o("fixedWidth")]&&e.Layout.slideSize(0))&&Et(_(l.track)[o("width")]/t)||a[o("autoWidth")]&&c.length||2*a.perPage):n=0,n}return{mount:r,destroy:u}},Move:function(r,s,i){var u,t=Q(r),n=t.on,c=t.emit,a=r.state.set,o=(t=s.Layout).slideSize,e=t.getPadding,l=t.totalSize,f=t.listSize,d=t.sliderSize,p=(t=s.Direction).resolve,h=t.orient,g=(t=s.Elements).list,v=t.track;function m(){s.Controller.isBusy()||(s.Scroll.cancel(),y(r.index),s.Slides.update())}function y(t){b(x(t,!0))}function b(t,n){var e,i,o;r.is(On)||(n=n?t:(e=t,e=r.is(Nn)&&(o=(i=S(e))>s.Controller.getEnd(),i<0||o)?w(e,o):e),A(g,"transform","translate"+p("X")+"("+n+"px)"),t!==n&&c(Bt))}function w(t,n){var e=t-k(n),i=d();return t-h(i*(Et(H(e)/i)||1))*(n?1:-1)}function E(){b(P(),!0),u.cancel()}function S(t){for(var n=s.Slides.get(),e=0,i=1/0,o=0;o<n.length;o++){var r=n[o].index,u=H(x(r,!0)-t);if(!(u<=i))break;i=u,e=r}return e}function x(t,n){var e=h(l(t-1)-("center"===(e=i.focus)?(f()-o(t,!0))/2:+e*o(t)||0));return n?(t=e,i.trimSpace&&r.is(zn)?Y(t,0,h(d(!0)-f())):t):e}function P(){var t=p("left");return _(g)[t]-_(v)[t]+h(e(!1))}function k(t){return x(t?s.Controller.getEnd():0,!!i.trimSpace)}return{mount:function(){u=s.Transition,n([q,Ft,K,U],m)},move:function(t,n,e,i){var o,r;t!==n&&(o=e<t,r=h(w(P(),o)),o?0<=r:r<=g[p("scrollWidth")]-_(v)[p("width")])&&(E(),b(w(P(),e<t),!0)),a(R),c(J,n,e,t),u.start(n,function(){a(3),c(Dt,n,e,t),i&&i()})},jump:y,translate:b,shift:w,cancel:E,toIndex:S,toPosition:x,getPosition:P,getLimit:k,exceededLimit:function(t,n){n=rt(n)?P():n;var e=!0!==t&&h(n)<h(k(!1)),t=!1!==t&&h(n)>h(k(!0));return e||t},reposition:m}},Controller:function(o,r,u){var s,c,a,l,t=Q(o),n=t.on,e=t.emit,f=r.Move,d=f.getPosition,i=f.getLimit,p=f.toPosition,h=(t=r.Slides).isEnough,g=t.getLength,v=u.omitEnd,m=o.is(Nn),y=o.is(zn),b=I(k,!1),w=I(k,!0),E=u.start||0,S=E;function x(){c=g(!0),a=u.perMove,l=u.perPage,s=A();var t=Y(E,0,v?s:c-1);t!==E&&(E=t,f.reposition())}function P(){s!==A()&&e("ei")}function k(t,n){var e=a||(N()?1:l);return-1===(e=L(E+e*(t?-1:1),E,!(a||N())))&&y&&!St(d(),i(!t),1)?t?0:s:n?e:C(e)}function L(t,n,e){var i;return h()||N()?((i=function(t){if(y&&"move"===u.trimSpace&&t!==E)for(var n=d();n===p(t,!0)&&xt(t,0,o.length-1,!u.rewind);)t<E?--t:++t;return t}(t))!==t&&(n=t,t=i,e=!1),t<0||s<t?t=a||!xt(0,t,n,!0)&&!xt(s,n,t,!0)?m?e?t<0?-(c%l||l):c:t:u.rewind?t<0?s:0:-1:D(M(t)):e&&t!==n&&(t=D(M(n)+(t<n?-1:1)))):t=-1,t}function C(t){return m?(t+c)%c||0:t}function A(){for(var t=c-(N()||m&&a?1:l);v&&0<t--;)if(p(c-1,!0)!==p(t,!0)){t++;break}return Y(t,0,c-1)}function D(t){return Y(N()?t:l*t,0,s)}function M(t){return N()?B(t,s):wt((s<=t?c-1:t)/l)}function z(t){t!==E&&(S=E,E=t)}function N(){return!rt(u.focus)||u.isNavigation}function O(){return o.state.is([R,et])&&!!u.waitForTransition}return{mount:function(){x(),n([K,U,"ei"],x),n(Ft,P)},go:function(t,n,e){var i,o,r,u;O()||-1<(r=C((u=E,T(i=t)?(o=(r=i.match(/([+\-<>])(\d+)?/)||[])[1],r=r[2],"+"===o||"-"===o?u=L(E+ +(""+o+(+r||1)),E):">"===o?u=r?D(+r):b(!0):"<"===o&&(u=w(!0))):u=m?i:Y(i,0,s),t=u)))&&(n||r!==E)&&(z(r),f.move(t,r,S,e))},scroll:function(t,n,e,i){r.Scroll.scroll(t,n,e,function(){var t=C(f.toIndex(d()));z(v?B(t,s):t),i&&i()})},getNext:b,getPrev:w,getAdjacent:k,getEnd:A,setIndex:z,getIndex:function(t){return t?S:E},toIndex:D,toPage:M,toDest:function(t){return t=f.toIndex(t),y?Y(t,0,s):t},hasFocus:N,isBusy:O}},Arrows:function(o,t,n){var e,i,r=Q(o),u=r.on,s=r.bind,c=r.emit,a=n.classes,l=n.i18n,f=t.Elements,d=t.Controller,p=f.arrows,h=f.track,g=p,v=f.prev,m=f.next,y={};function b(){var t=n.arrows;!t||v&&m||(g=p||F("div",a.arrows),v=x(!0),m=x(!1),e=!0,k(g,[v,m]),p)||L(g,h),v&&m&&(at(y,{prev:v,next:m}),ft(g,t?"":"none"),z(g,i=dn+"--"+n.direction),t)&&(u([q,Dt,U,V,"ei"],P),s(m,"click",I(S,">")),s(v,"click",I(S,"<")),P(),O([v,m],Kt,h.id),c("arrows:mounted",v,m)),u(K,w)}function w(){E(),b()}function E(){r.destroy(),X(g,i),e?(j(p?[v,m]:g),v=m=null):N([v,m],rn)}function S(t){d.go(t,!0)}function x(t){return ht('<button class="'+a.arrow+" "+(t?a.prev:a.next)+'" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40" focusable="false"><path d="'+(n.arrowPath||"m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z")+'" />')}function P(){var t,n,e,i;v&&m&&(i=o.index,t=d.getPrev(),n=d.getNext(),e=-1<t&&i<t?l.last:l.prev,i=-1<n&&n<i?l.first:l.next,v.disabled=t<0,m.disabled=n<0,O(v,tt,e),O(m,tt,i),c("arrows:updated",v,m,t,n))}return{arrows:y,mount:b,destroy:E,update:P}},Autoplay:function(t,n,e){var i,o,r=Q(t),u=r.on,s=r.bind,c=r.emit,a=Ht(e.interval,t.go.bind(t,">"),function(t){var n=f.bar;n&&A(n,"width",100*t+"%"),c("autoplay:playing",t)}),l=a.isPaused,f=n.Elements,d=(r=n.Elements).root,p=r.toggle,h=e.autoplay,g="pause"===h;function v(){l()&&n.Slides.isEnough()&&(a.start(!e.resetProgress),o=i=g=!1,b(),c(Rt))}function m(t){g=!!(t=void 0===t||t),b(),l()||(a.pause(),c(Wt))}function y(){g||(i||o?m(!1):v())}function b(){p&&(C(p,nt,!g),O(p,tt,e.i18n[g?"play":"pause"]))}function w(t){t=n.Slides.getAt(t),a.set(t&&+D(t.slide,Tn)||e.interval)}return{mount:function(){h&&(e.pauseOnHover&&s(d,"mouseenter mouseleave",function(t){i="mouseenter"===t.type,y()}),e.pauseOnFocus&&s(d,"focusin focusout",function(t){o="focusin"===t.type,y()}),p&&s(p,"click",function(){g?v():m(!0)}),u([J,_t,U],a.rewind),u(J,w),p&&O(p,Kt,f.track.id),g||v(),b())},destroy:a.cancel,play:v,pause:m,isPaused:l}},Cover:function(t,n,e){var i=Q(t).on;function o(e){n.Slides.forEach(function(t){var n=st(t.container||t.slide,"img");n&&n.src&&r(e,n,t)})}function r(t,n,e){e.style("background",t?'center/cover no-repeat url("'+n.src+'")':"",!0),ft(n,t?"none":"")}return{mount:function(){e.cover&&(i(Xt,I(r,!0)),i([q,K,U],I(o,!0)))},destroy:I(o,!1)}},Scroll:function(t,s,r){var c,a,n=Q(t),e=n.on,l=n.emit,f=t.state.set,d=s.Move,p=d.getPosition,u=d.getLimit,h=d.exceededLimit,g=d.translate,v=t.is(zn),m=1;function y(t,n,e,i,o){var r,u=p(),e=(E(),!e||v&&h()||(e=s.Layout.sliderSize(),r=Pt(t)*e*wt(H(t)/e)||0,t=d.toPosition(s.Controller.toDest(t%e))+r),St(u,t,1));m=1,n=e?0:n||bt(H(t-u)/1.5,800),a=i,c=Ht(n,b,I(w,u,t,o),1),f(et),l(_t),c.start()}function b(){f(3),a&&a(),l(V)}function w(t,n,e,i){var o=p(),i=(t+(n-t)*(n=i,(t=r.easingFunc)?t(n):1-Math.pow(1-n,4))-o)*m;g(o+i),v&&!e&&h()&&(m*=.6,H(i)<10)&&y(u(h(!0)),600,!1,a,!0)}function E(){c&&c.cancel()}function i(){c&&!c.isPaused()&&(E(),b())}return{mount:function(){e(J,E),e([K,U],i)},destroy:E,scroll:y,cancel:i}},Drag:function(r,o,u){var s,n,c,a,l,f,d,p,t=Q(r),e=t.on,h=t.emit,g=t.bind,v=t.unbind,m=r.state,y=o.Move,b=o.Scroll,w=o.Controller,E=o.Elements.track,S=o.Media.reduce,i=(t=o.Direction).resolve,x=t.orient,P=y.getPosition,k=y.exceededLimit,L=!1;function F(){var t=u.drag;T(!t),a="free"===t}function _(t){var n,e,i;f=!1,d||(n=I(t),e=t.target,i=u.noDrag,ut(e,"."+mn+", ."+pn))||i&&ut(e,i)||!n&&t.button||(w.isBusy()?W(t,!0):(p=n?E:window,l=m.is([R,et]),c=null,g(p,Dn,C,Fn),g(p,Mn,A,Fn),y.cancel(),b.cancel(),D(t)))}function C(t){var n,e,i,o;m.is(6)||(m.set(6),h("drag")),t.cancelable&&(l?(y.translate(s+M(t)/(L&&r.is(zn)?5:1)),o=200<z(t),n=L!==(L=k()),(o||n)&&D(t),f=!0,h("dragging"),W(t)):H(M(o=t))>H(M(o,!0))&&(i=(e=ot(o=u.dragMinThreshold))&&o.mouse||0,e=(e?o.touch:+o)||10,l=H(M(n=t))>(I(n)?e:i),W(t)))}function A(t){var n,e,i;m.is(6)&&(m.set(3),h("dragged")),l&&(i=n=function(t){if(r.is(Nn)||!L){var n=z(t);if(n&&n<200)return M(t)/n}return 0}(t),i=P()+Pt(i)*B(H(i)*(u.flickPower||600),a?1/0:o.Layout.listSize()*(u.flickMaxPages||1)),e=u.rewind&&u.rewindByDrag,S(!1),a?w.scroll(i,0,u.snap):r.is(On)?w.go(x(Pt(n))<0?e?"<":"-":e?">":"+"):r.is(zn)&&L&&e?w.go(k(!0)?">":"<"):w.go(w.toDest(i),!0),S(!0),W(t)),v(p,Dn,C),v(p,Mn,A),l=!1}function j(t){!d&&f&&W(t,!0)}function D(t){c=n,n=t,s=P()}function M(t,n){return O(t,n)-O(N(t),n)}function z(t){return mt(t)-mt(N(t))}function N(t){return n===t&&c||n}function O(t,n){return(I(t)?t.changedTouches[0]:t)["page"+i(n?"Y":"X")]}function I(t){return"undefined"!=typeof TouchEvent&&t instanceof TouchEvent}function T(t){d=t}return{mount:function(){g(E,Dn,it,Fn),g(E,Mn,it,Fn),g(E,An,_,Fn),g(E,"click",j,{capture:!0}),g(E,"dragstart",W),e([q,K],F)},disable:T,isDragging:function(){return l}}},Keyboard:function(n,t,e){var i,o,r=Q(n),u=r.on,s=r.bind,c=r.unbind,a=n.root,l=t.Direction.resolve;function f(){var t=e.keyboard;t&&(i="global"===t?window:a,s(i,Rn,h))}function d(){c(i,Rn)}function p(){var t=o;o=!0,g(function(){o=t})}function h(t){o||((t=jn(t))===l(Yt)?n.go("<"):t===l(qt)&&n.go(">"))}return{mount:function(){f(),u(K,d),u(K,f),u(J,p)},destroy:d,disable:function(t){o=t}}},LazyLoad:function(e,t,o){var n=Q(e),i=n.on,r=n.off,u=n.bind,s=n.emit,c="sequential"===o.lazyLoad,a=[Dt,V],l=[];function f(){M(l),t.Slides.forEach(function(i){vt(i.slide,Gn).forEach(function(t){var n=D(t,Wn),e=D(t,Xn);n===t.src&&e===t.srcset||(n=o.classes.spinner,n=st(e=t.parentElement,"."+n)||F("span",n,e),l.push([t,i,n]),t.src)||ft(t,"none")})}),(c?g:(r(a),i(a,d),d))()}function d(){(l=l.filter(function(t){var n=o.perPage*((o.preloadPages||1)+1)-1;return!t[1].isWithin(e.index,n)||p(t)})).length||r(a)}function p(t){var n=t[0];z(t[1].slide,Pn),u(n,"load error",I(h,t)),O(n,"src",D(n,Wn)),O(n,"srcset",D(n,Xn)),N(n,Wn),N(n,Xn)}function h(t,n){var e=t[0],i=t[1];X(i.slide,Pn),"error"!==n.type&&(j(t[2]),ft(e,""),s(Xt,e,i),s(Tt)),c&&g()}function g(){l.length&&p(l.shift())}return{mount:function(){o.lazyLoad&&(f(),i(U,f))},destroy:I(M,l),check:d}},Pagination:function(f,t,d){var p,h,n=Q(f),g=n.on,v=n.emit,m=n.bind,y=t.Slides,b=t.Elements,w=t.Controller,E=w.hasFocus,i=w.getIndex,u=w.go,s=t.Direction.resolve,S=b.pagination,x=[];function P(){p&&(j(S?o(p.children):p),X(p,h),M(x),p=null),n.destroy()}function k(t){u(">"+t,!0)}function L(t,n){var e=x.length,i=jn(n),o=C(),r=-1;i===s(qt,!1,o)?r=++t%e:i===s(Yt,!1,o)?r=(--t+e)%e:"Home"===i?r=0:"End"===i&&(r=e-1),(o=x[r])&&(dt(o.button),u(">"+r),W(n,!0))}function C(){return d.paginationDirection||d.direction}function A(t){return x[w.toPage(t)]}function D(){var t,n=A(i(!0)),e=A(i());n&&(X(t=n.button,nt),N(t,Qt),O(t,$,-1)),e&&(z(t=e.button,nt),O(t,Qt,!0),O(t,$,"")),v("pagination:updated",{list:p,items:x},n,e)}return{items:x,mount:function t(){P(),g([K,U,"ei"],t);var n=d.pagination;if(S&&ft(S,n?"":"none"),n){g([J,_t,V],D);var n=f.length,e=d.classes,i=d.i18n,o=d.perPage,r=E()?w.getEnd()+1:Et(n/o);z(p=S||F("ul",e.pagination,b.track.parentElement),h=vn+"--"+C()),O(p,Z,"tablist"),O(p,tt,i.select),O(p,tn,C()===Ut?"vertical":"");for(var u=0;u<r;u++){var s=F("li",null,p),c=F("button",{class:e.page,type:"button"},s),a=y.getIn(u).map(function(t){return t.slide.id}),l=!E()&&1<o?i.pageX:i.slideX;m(c,"click",I(k,u)),d.paginationKeyboard&&m(c,"keydown",I(L,u)),O(s,Z,"presentation"),O(c,Z,"tab"),O(c,Kt,a.join(" ")),O(c,tt,kt(l,u+1)),O(c,$,-1),x.push({li:s,button:c,page:u})}D(),v("pagination:mounted",{list:p,items:x},A(f.index))}},destroy:P,getAt:A,update:D}},Sync:function(e,t,n){var i=n.isNavigation,o=n.slideFocus,r=[];function u(){var t,n;e.splides.forEach(function(t){t.isParent||(c(e,t.splide),c(t.splide,e))}),i&&((n=(t=Q(e)).on)(Mt,l),n(Gt,f),n([q,K],a),r.push(t),t.emit(jt,e.splides))}function s(){r.forEach(function(t){t.destroy()}),M(r)}function c(t,i){(t=Q(t)).on(J,function(t,n,e){i.go(i.is(Nn)?e:t)}),r.push(t)}function a(){O(t.Elements.list,tn,n.direction===Ut?"vertical":"")}function l(t){e.go(t.index)}function f(t,n){b(Bn,jn(n))&&(l(t),W(n))}return{setup:I(t.Media.set,{slideFocus:rt(o)?i:o},!0),mount:u,destroy:s,remount:function(){s(),u()}}},Wheel:function(u,s,c){var t=Q(u).bind,a=0;function n(t){var n,e,i,o,r;t.cancelable&&(n=(r=t.deltaY)<0,e=mt(t),i=c.wheelMinThreshold||0,o=c.wheelSleep||0,H(r)>i&&o<e-a&&(u.go(n?"<":">"),a=e),r=n,c.releaseWheel&&!u.state.is(R)&&-1===s.Controller.getAdjacent(r)||W(t))}return{mount:function(){c.wheel&&t(s.Elements.track,"wheel",n,Fn)}}},Live:function(t,n,e){var i=Q(t).on,o=n.Elements.track,r=e.live&&!e.isNavigation,u=F("span",wn),s=Ht(90,I(c,!1));function c(t){O(o,en,t),t?(k(o,u),s.start()):(j(u),s.cancel())}function a(t){r&&O(o,f,t?"off":"polite")}return{mount:function(){r&&(a(!n.Autoplay.isPaused()),O(o,on,!0),u.textContent="…",i(Rt,I(a,!0)),i(Wt,I(a,!1)),i([Dt,V],I(c,!0)))},disable:a,destroy:function(){N(o,[f,on,en]),j(u)}}}}),Yn={type:"slide",role:"region",speed:400,perPage:1,cloneStatus:!0,arrows:!0,pagination:!0,paginationKeyboard:!0,interval:5e3,pauseOnHover:!0,pauseOnFocus:!0,resetProgress:!0,easing:"cubic-bezier(0.25, 1, 0.5, 1)",drag:!0,direction:"ltr",trimSpace:!0,focusableNodes:"a, button, textarea, input, select, iframe",live:!0,classes:{slide:an,clone:ln,arrows:dn,arrow:pn,prev:hn,next:gn,pagination:vn,page:mn,spinner:n+"spinner"},i18n:{prev:"Previous slide",next:"Next slide",first:"Go to first slide",last:"Go to last slide",slideX:"Go to slide %s",pageX:"Go to page %s",play:"Start autoplay",pause:"Pause autoplay",carousel:"carousel",slide:"slide",select:"Select a slide to show",slideLabel:"%s of %s"},reducedMotion:{speed:0,rewindSpeed:0,autoplay:"pause"}};function qn(t,n,e){var i=n.Slides;function o(){i.forEach(function(t){t.style("transform","translateX(-"+100*t.index+"%)")})}return{mount:function(){Q(t).on([q,U],o)},start:function(t,n){i.style("transition","opacity "+e.speed+"ms "+e.easing),g(n)},cancel:it}}function Jn(r,t,u){var s,c=t.Move,a=t.Controller,l=t.Scroll,n=t.Elements.list,f=I(A,n,"transition");function e(){f(""),l.cancel()}return{mount:function(){Q(r).bind(n,"transitionend",function(t){t.target===n&&s&&(e(),s())})},start:function(t,n){var e=c.toPosition(t,!0),i=c.getPosition(),o=function(t){var n=u.rewindSpeed;if(r.is(zn)&&n){var e=a.getIndex(!0),i=a.getEnd();if(0===e&&i<=t||i<=e&&0===t)return n}return u.speed}(t);1<=H(e-i)&&1<=o?u.useScroll?l.scroll(e,o,!1,n):(f("transform "+o+"ms "+u.easing),c.translate(e,!0),s=n):(c.jump(t),n())},cancel:e}}function Un(t,n){var e;this.event=Q(),this.Components={},this.state=(e=1,{set:function(t){e=t},is:function(t){return b(y(t),e)}}),this.splides=[],this.n={},this.t={},yt(t=T(t)?gt(document,t):t,t+" is invalid."),n=d({label:D(this.root=t,tt)||"",labelledby:D(t,Zt)||""},Yn,Un.defaults,n||{});try{d(n,JSON.parse(D(t,s)))}catch(t){yt(!1,"Invalid JSON")}this.n=Object.create(d({},n))}return(t=Un.prototype).mount=function(t,n){var e=this,i=this.state,o=this.Components;return yt(i.is([1,7]),"Already mounted!"),i.set(1),this.i=o,this.r=n||this.r||(this.is(On)?qn:Jn),this.t=t||this.t,w(at({},Hn,this.t,{Transition:this.r}),function(t,n){t=t(e,o,e.n),(o[n]=t).setup&&t.setup()}),w(o,function(t){t.mount&&t.mount()}),this.emit(q),z(this.root,"is-initialized"),i.set(3),this.emit("ready"),this},t.sync=function(t){return this.splides.push({splide:t}),t.splides.push({splide:this,isParent:!0}),this.state.is(3)&&(this.i.Sync.remount(),t.Components.Sync.remount()),this},t.go=function(t){return this.i.Controller.go(t),this},t.on=function(t,n){return this.event.on(t,n),this},t.off=function(t){return this.event.off(t),this},t.emit=function(t){var n;return(n=this.event).emit.apply(n,[t].concat(o(arguments,1))),this},t.add=function(t,n){return this.i.Slides.add(t,n),this},t.remove=function(t){return this.i.Slides.remove(t),this},t.is=function(t){return this.n.type===t},t.refresh=function(){return this.emit(U),this},t.destroy=function(n){void 0===n&&(n=!0);var t=this.event,e=this.state;return e.is(1)?Q(this).on("ready",this.destroy.bind(this,n)):(w(this.i,function(t){t.destroy&&t.destroy(n)},!0),t.emit(c),t.destroy(),n&&M(this.splides),e.set(7)),this},Jt(Un,[{key:"options",get:function(){return this.n},set:function(t){this.i.Media.set(t,!0,!0)}},{key:"length",get:function(){return this.i.Slides.getLength(!0)}},{key:"index",get:function(){return this.i.Controller.getIndex()}}]),(a=Un).defaults={},a.STATES=e,a};"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(n="undefined"!=typeof globalThis?globalThis:n||self).Splide=t();