var Rt=Object.defineProperty,Mt=Object.defineProperties;var At=Object.getOwnPropertyDescriptors;var Se=Object.getOwnPropertySymbols;var Je=Object.prototype.hasOwnProperty,et=Object.prototype.propertyIsEnumerable;var Ze=(e,t,n)=>t in e?Rt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,q=(e,t)=>{for(var n in t||(t={}))Je.call(t,n)&&Ze(e,n,t[n]);if(Se)for(var n of Se(t))et.call(t,n)&&Ze(e,n,t[n]);return e},ee=(e,t)=>Mt(e,At(t));var tt=(e,t)=>{var n={};for(var r in e)Je.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&Se)for(var r of Se(e))t.indexOf(r)<0&&et.call(e,r)&&(n[r]=e[r]);return n};import"./Check.b717936f.js";import{F as He}from"./FormField.e4f52c7a.js";import{I as Et,a as Vt}from"./Input.69c23bd8.js";import"./InputField.d5f4c248.js";import"./PeekableInputField.c6357cbd.js";import"./Radio.638ae4ce.js";import"./Select.6543b4f4.js";import"./SelectField.008b7972.js";import"./TextArea.39002fcc.js";import"./TextAreaField.76346a90.js";import{P as u}from"./index.65f1d40b.js";import{r as l,R as at}from"./index.be79fcbf.js";import"./index.26df3b55.js";import{B as Tt}from"./index.esm.fef7ef21.js";import{j as S,a as lt}from"./jsx-runtime.b789c2e1.js";function fe(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},y.apply(this,arguments)}function nt(e){return typeof e=="object"&&e!=null&&e.nodeType===1}function rt(e,t){return(!t||e!=="hidden")&&e!=="visible"&&e!=="clip"}function ke(e,t){if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){var n=getComputedStyle(e,null);return rt(n.overflowY,t)||rt(n.overflowX,t)||function(r){var i=function(o){if(!o.ownerDocument||!o.ownerDocument.defaultView)return null;try{return o.ownerDocument.defaultView.frameElement}catch{return null}}(r);return!!i&&(i.clientHeight<r.scrollHeight||i.clientWidth<r.scrollWidth)}(e)}return!1}function Re(e,t,n,r,i,o,a,s){return o<e&&a>t||o>e&&a<t?0:o<=e&&s<=n||a>=t&&s>=n?o-e-r:a>t&&s<n||o<e&&s>n?a-t+i:0}function Ft(e,t){var n=window,r=t.scrollMode,i=t.block,o=t.inline,a=t.boundary,s=t.skipOverflowHiddenElements,T=typeof a=="function"?a:function(c){return c!==a};if(!nt(e))throw new TypeError("Invalid target");for(var A=document.scrollingElement||document.documentElement,R=[],v=e;nt(v)&&T(v);){if((v=v.parentElement)===A){R.push(v);break}v!=null&&v===document.body&&ke(v)&&!ke(document.documentElement)||v!=null&&ke(v,s)&&R.push(v)}for(var h=n.visualViewport?n.visualViewport.width:innerWidth,d=n.visualViewport?n.visualViewport.height:innerHeight,w=window.scrollX||pageXOffset,D=window.scrollY||pageYOffset,B=e.getBoundingClientRect(),k=B.height,C=B.width,K=B.top,M=B.right,Z=B.bottom,Y=B.left,x=i==="start"||i==="nearest"?K:i==="end"?Z:K+k/2,g=o==="center"?Y+C/2:o==="end"?M:Y,G=[],b=0;b<R.length;b++){var I=R[b],F=I.getBoundingClientRect(),H=F.height,E=F.width,N=F.top,O=F.right,V=F.bottom,ne=F.left;if(r==="if-needed"&&K>=0&&Y>=0&&Z<=d&&M<=h&&K>=N&&Z<=V&&Y>=ne&&M<=O)return G;var J=getComputedStyle(I),ue=parseInt(J.borderLeftWidth,10),ae=parseInt(J.borderTopWidth,10),le=parseInt(J.borderRightWidth,10),se=parseInt(J.borderBottomWidth,10),z=0,X=0,de="offsetWidth"in I?I.offsetWidth-I.clientWidth-ue-le:0,ce="offsetHeight"in I?I.offsetHeight-I.clientHeight-ae-se:0;if(A===I)z=i==="start"?x:i==="end"?x-d:i==="nearest"?Re(D,D+d,d,ae,se,D+x,D+x+k,k):x-d/2,X=o==="start"?g:o==="center"?g-h/2:o==="end"?g-h:Re(w,w+h,h,ue,le,w+g,w+g+C,C),z=Math.max(0,z+D),X=Math.max(0,X+w);else{z=i==="start"?x-N-ae:i==="end"?x-V+se+ce:i==="nearest"?Re(N,V,H,ae,se+ce,x,x+k,k):x-(N+H/2)+ce/2,X=o==="start"?g-ne-ue:o==="center"?g-(ne+E/2)+de/2:o==="end"?g-O+le+de:Re(ne,O,E,ue,le+de,g,g+C,C);var xe=I.scrollLeft,p=I.scrollTop;x+=p-(z=Math.max(0,Math.min(p+z,I.scrollHeight-H+ce))),g+=xe-(X=Math.max(0,Math.min(xe+X,I.scrollWidth-E+de)))}G.push({el:I,top:z,left:X})}return G}var Ee=function(){return Ee=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},Ee.apply(this,arguments)},Dt=0;function Ne(){}function Lt(e,t){if(!!e){var n=Ft(e,{boundary:t,block:"nearest",scrollMode:"if-needed"});n.forEach(function(r){var i=r.el,o=r.top,a=r.left;i.scrollTop=o,i.scrollLeft=a})}}function it(e,t,n){var r=e===t||t instanceof n.Node&&e.contains&&e.contains(t);return r}function st(e,t){var n;function r(){n&&clearTimeout(n)}function i(){for(var o=arguments.length,a=new Array(o),s=0;s<o;s++)a[s]=arguments[s];r(),n=setTimeout(function(){n=null,e.apply(void 0,a)},t)}return i.cancel=r,i}function oe(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){for(var i=arguments.length,o=new Array(i>1?i-1:0),a=1;a<i;a++)o[a-1]=arguments[a];return t.some(function(s){return s&&s.apply(void 0,[r].concat(o)),r.preventDownshiftDefault||r.hasOwnProperty("nativeEvent")&&r.nativeEvent.preventDownshiftDefault})}}function me(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){t.forEach(function(i){typeof i=="function"?i(r):i&&(i.current=r)})}}function kt(){return String(Dt++)}function Bt(e){var t=e.isOpen,n=e.resultCount,r=e.previousResultCount;return t?n?n!==r?n+" result"+(n===1?" is":"s are")+" available, use up and down arrow keys to navigate. Press Enter key to select.":"":"No results are available.":""}function Be(e,t){return Object.keys(e).reduce(function(n,r){return n[r]=dt(t,r)?t[r]:e[r],n},{})}function dt(e,t){return e[t]!==void 0}function Kt(e){var t=e.key,n=e.keyCode;return n>=37&&n<=40&&t.indexOf("Arrow")!==0?"Arrow"+t:t}function Ke(e,t,n,r,i){if(i===void 0&&(i=!0),n===0)return-1;var o=n-1;(typeof t!="number"||t<0||t>=n)&&(t=e>0?-1:o+1);var a=t+e;a<0?a=i?o:0:a>o&&(a=i?0:o);var s=Ie(e,a,n,r,i);return s===-1?t>=n?-1:t:s}function Ie(e,t,n,r,i){var o=r(t);if(!o||!o.hasAttribute("disabled"))return t;if(e>0){for(var a=t+1;a<n;a++)if(!r(a).hasAttribute("disabled"))return a}else for(var s=t-1;s>=0;s--)if(!r(s).hasAttribute("disabled"))return s;return i?e>0?Ie(1,0,n,r,!1):Ie(-1,n-1,n,r,!1):-1}function ot(e,t,n,r){return r===void 0&&(r=!0),t.some(function(i){return i&&(it(i,e,n)||r&&it(i,n.document.activeElement,n))})}var Ht=st(function(e){ct(e).textContent=""},500);function Nt(e,t){var n=ct(t);!e||(n.textContent=e,Ht(t))}function ct(e){e===void 0&&(e=document);var t=e.getElementById("a11y-status-message");return t||(t=e.createElement("div"),t.setAttribute("id","a11y-status-message"),t.setAttribute("role","status"),t.setAttribute("aria-live","polite"),t.setAttribute("aria-relevant","additions text"),Object.assign(t.style,{border:"0",clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:"0",position:"absolute",width:"1px"}),e.body.appendChild(t),t)}var Pt=["isInitialMount","highlightedIndex","items","environment"],pt={highlightedIndex:-1,isOpen:!1,selectedItem:null,inputValue:""};function _t(e,t,n){var r=e.props,i=e.type,o={};Object.keys(t).forEach(function(a){Wt(a,e,t,n),n[a]!==t[a]&&(o[a]=n[a])}),r.onStateChange&&Object.keys(o).length&&r.onStateChange(y({type:i},o))}function Wt(e,t,n,r){var i=t.props,o=t.type,a="on"+Pe(e)+"Change";i[a]&&r[e]!==void 0&&r[e]!==n[e]&&i[a](y({type:o},r))}function $t(e,t){return t.changes}function jt(e){var t=e.selectedItem,n=e.itemToString;return t?n(t)+" has been selected.":""}var qt=st(function(e,t){Nt(e(),t)},200),Ut=typeof window!="undefined"&&typeof window.document!="undefined"&&typeof window.document.createElement!="undefined"?l.exports.useLayoutEffect:l.exports.useEffect;function Yt(e){var t=e.id,n=t===void 0?"downshift-"+kt():t,r=e.labelId,i=e.menuId,o=e.getItemId,a=e.toggleButtonId,s=e.inputId,T=l.exports.useRef({labelId:r||n+"-label",menuId:i||n+"-menu",getItemId:o||function(A){return n+"-item-"+A},toggleButtonId:a||n+"-toggle-button",inputId:s||n+"-input"});return T.current}function Gt(e,t,n){return e!==void 0?e:n.length===0?-1:n.indexOf(t)}function zt(e){return e?String(e):""}function Pe(e){return""+e.slice(0,1).toUpperCase()+e.slice(1)}function ft(e){var t=l.exports.useRef(e);return t.current=e,t}function Xt(e,t,n){var r=l.exports.useRef(),i=l.exports.useRef(),o=l.exports.useCallback(function(h,d){i.current=d,h=Be(h,d.props);var w=e(h,d),D=d.props.stateReducer(h,y({},d,{changes:w}));return D},[e]),a=l.exports.useReducer(o,t),s=a[0],T=a[1],A=ft(n),R=l.exports.useCallback(function(h){return T(y({props:A.current},h))},[A]),v=i.current;return l.exports.useEffect(function(){v&&r.current&&r.current!==s&&_t(v,Be(r.current,v.props),s),r.current=s},[s,n,v]),[s,R]}var ve={itemToString:zt,stateReducer:$t,getA11ySelectionMessage:jt,scrollIntoView:Lt,circularNavigation:!1,environment:typeof window=="undefined"?{}:window};function U(e,t,n){n===void 0&&(n=pt);var r="default"+Pe(t);return r in e?e[r]:n[t]}function Me(e,t,n){if(n===void 0&&(n=pt),t in e)return e[t];var r="initial"+Pe(t);return r in e?e[r]:U(e,t,n)}function Qt(e){var t=Me(e,"selectedItem"),n=Me(e,"isOpen"),r=Me(e,"highlightedIndex"),i=Me(e,"inputValue");return{highlightedIndex:r<0&&t&&n?e.items.indexOf(t):r,isOpen:n,selectedItem:t,inputValue:i}}function Ve(e,t,n,r){var i=e.items,o=e.initialHighlightedIndex,a=e.defaultHighlightedIndex,s=t.selectedItem,T=t.highlightedIndex;return i.length===0?-1:o!==void 0&&T===o?o:a!==void 0?a:s?n===0?i.indexOf(s):Ke(n,i.indexOf(s),i.length,r,!1):n===0?-1:n<0?i.length-1:0}function Zt(e,t,n,r){var i=l.exports.useRef({isMouseDown:!1,isTouchMove:!1});return l.exports.useEffect(function(){var o=function(){i.current.isMouseDown=!0},a=function(v){i.current.isMouseDown=!1,e&&!ot(v.target,t.map(function(h){return h.current}),n)&&r()},s=function(){i.current.isTouchMove=!1},T=function(){i.current.isTouchMove=!0},A=function(v){e&&!i.current.isTouchMove&&!ot(v.target,t.map(function(h){return h.current}),n,!1)&&r()};return n.addEventListener("mousedown",o),n.addEventListener("mouseup",a),n.addEventListener("touchstart",s),n.addEventListener("touchmove",T),n.addEventListener("touchend",A),function(){n.removeEventListener("mousedown",o),n.removeEventListener("mouseup",a),n.removeEventListener("touchstart",s),n.removeEventListener("touchmove",T),n.removeEventListener("touchend",A)}},[e,n]),i}var Jt=function(){return Ne};function ut(e,t,n){var r=n.isInitialMount,i=n.highlightedIndex,o=n.items,a=n.environment,s=fe(n,Pt);l.exports.useEffect(function(){r||qt(function(){return e(y({highlightedIndex:i,highlightedItem:o[i],resultCount:o.length},s))},a.document)},t)}function en(e){var t=e.highlightedIndex,n=e.isOpen,r=e.itemRefs,i=e.getItemNodeFromIndex,o=e.menuElement,a=e.scrollIntoView,s=l.exports.useRef(!0);return Ut(function(){t<0||!n||!Object.keys(r.current).length||(s.current===!1?s.current=!0:a(i(t),o))},[t]),s}var tn=Ne;function nn(e,t,n){var r=t.type,i=t.props,o;switch(r){case n.ItemMouseMove:o={highlightedIndex:t.index};break;case n.MenuMouseLeave:o={highlightedIndex:-1};break;case n.ToggleButtonClick:case n.FunctionToggleMenu:o={isOpen:!e.isOpen,highlightedIndex:e.isOpen?-1:Ve(i,e,0)};break;case n.FunctionOpenMenu:o={isOpen:!0,highlightedIndex:Ve(i,e,0)};break;case n.FunctionCloseMenu:o={isOpen:!1};break;case n.FunctionSetHighlightedIndex:o={highlightedIndex:t.highlightedIndex};break;case n.FunctionSetInputValue:o={inputValue:t.inputValue};break;case n.FunctionReset:o={highlightedIndex:U(i,"highlightedIndex"),isOpen:U(i,"isOpen"),selectedItem:U(i,"selectedItem"),inputValue:U(i,"inputValue")};break;default:throw new Error("Reducer called without proper action type.")}return y({},e,o)}u.array.isRequired,u.func,u.func,u.func,u.bool,u.number,u.number,u.number,u.bool,u.bool,u.bool,u.any,u.any,u.any,u.string,u.string,u.string,u.func,u.string,u.func,u.func,u.func,u.func,u.func,u.shape({addEventListener:u.func,removeEventListener:u.func,document:u.shape({getElementById:u.func,activeElement:u.any,body:u.any})});function rn(e){var t=e.isOpen,n=e.resultCount,r=e.previousResultCount;return t?n?n!==r?n+" result"+(n===1?" is":"s are")+" available, use up and down arrow keys to navigate. Press Enter or Space Bar keys to select.":"":"No results are available.":""}Ee(Ee({},ve),{getA11yStatusMessage:rn});var _e=0,We=1,$e=2,je=3,qe=4,Ue=5,Ye=6,Te=7,gt=8,ht=9,Ge=10,mt=11,vt=12,It=13,yt=14,xt=15,ze=16,bt=17,Ot=18,Xe=19,wt=Object.freeze({__proto__:null,InputKeyDownArrowDown:_e,InputKeyDownArrowUp:We,InputKeyDownEscape:$e,InputKeyDownHome:je,InputKeyDownEnd:qe,InputKeyDownEnter:Ue,InputChange:Ye,InputBlur:Te,MenuMouseLeave:gt,ItemMouseMove:ht,ItemClick:Ge,ToggleButtonClick:mt,FunctionToggleMenu:vt,FunctionOpenMenu:It,FunctionCloseMenu:yt,FunctionSetHighlightedIndex:xt,FunctionSelectItem:ze,FunctionSetInputValue:bt,FunctionReset:Ot,ControlledPropUpdatedSelectedItem:Xe});function on(e){var t=Qt(e),n=t.selectedItem,r=t.inputValue;return r===""&&n&&e.defaultInputValue===void 0&&e.initialInputValue===void 0&&e.inputValue===void 0&&(r=e.itemToString(n)),y({},t,{inputValue:r})}u.array.isRequired,u.func,u.func,u.func,u.bool,u.number,u.number,u.number,u.bool,u.bool,u.bool,u.any,u.any,u.any,u.string,u.string,u.string,u.string,u.string,u.string,u.func,u.string,u.string,u.func,u.func,u.func,u.func,u.func,u.func,u.shape({addEventListener:u.func,removeEventListener:u.func,document:u.shape({getElementById:u.func,activeElement:u.any,body:u.any})});function un(e,t,n){var r=l.exports.useRef(),i=Xt(e,t,n),o=i[0],a=i[1];return l.exports.useEffect(function(){dt(n,"selectedItem")&&(r.current!==n.selectedItem&&a({type:Xe,inputValue:n.itemToString(n.selectedItem)}),r.current=o.selectedItem===r.current?n.selectedItem:o.selectedItem)}),[Be(o,n),a]}var an=Ne,ln=y({},ve,{getA11yStatusMessage:Bt,circularNavigation:!0});function sn(e,t){var n=t.type,r=t.props,i=t.shiftKey,o;switch(n){case Ge:o={isOpen:U(r,"isOpen"),highlightedIndex:U(r,"highlightedIndex"),selectedItem:r.items[t.index],inputValue:r.itemToString(r.items[t.index])};break;case _e:e.isOpen?o={highlightedIndex:Ke(i?5:1,e.highlightedIndex,r.items.length,t.getItemNodeFromIndex,r.circularNavigation)}:o={highlightedIndex:Ve(r,e,1,t.getItemNodeFromIndex),isOpen:r.items.length>=0};break;case We:e.isOpen?o={highlightedIndex:Ke(i?-5:-1,e.highlightedIndex,r.items.length,t.getItemNodeFromIndex,r.circularNavigation)}:o={highlightedIndex:Ve(r,e,-1,t.getItemNodeFromIndex),isOpen:r.items.length>=0};break;case Ue:o=y({},e.isOpen&&e.highlightedIndex>=0&&{selectedItem:r.items[e.highlightedIndex],isOpen:U(r,"isOpen"),highlightedIndex:U(r,"highlightedIndex"),inputValue:r.itemToString(r.items[e.highlightedIndex])});break;case $e:o=y({isOpen:!1,highlightedIndex:-1},!e.isOpen&&{selectedItem:null,inputValue:""});break;case je:o={highlightedIndex:Ie(1,0,r.items.length,t.getItemNodeFromIndex,!1)};break;case qe:o={highlightedIndex:Ie(-1,r.items.length-1,r.items.length,t.getItemNodeFromIndex,!1)};break;case Te:o=y({isOpen:!1,highlightedIndex:-1},e.highlightedIndex>=0&&t.selectItem&&{selectedItem:r.items[e.highlightedIndex],inputValue:r.itemToString(r.items[e.highlightedIndex])});break;case Ye:o={isOpen:!0,highlightedIndex:U(r,"highlightedIndex"),inputValue:t.inputValue};break;case ze:o={selectedItem:t.selectedItem,inputValue:r.itemToString(t.selectedItem)};break;case Xe:o={inputValue:t.inputValue};break;default:return nn(e,t,wt)}return y({},e,o)}var dn=["onMouseLeave","refKey","ref"],cn=["item","index","refKey","ref","onMouseMove","onClick","onPress"],pn=["onClick","onPress","refKey","ref"],fn=["onKeyDown","onChange","onInput","onBlur","onChangeText","refKey","ref"],gn=["refKey","ref"];Ct.stateChangeTypes=wt;function Ct(e){e===void 0&&(e={}),an();var t=y({},ln,e),n=t.initialIsOpen,r=t.defaultIsOpen,i=t.items,o=t.scrollIntoView,a=t.environment,s=t.getA11yStatusMessage,T=t.getA11ySelectionMessage,A=t.itemToString,R=on(t),v=un(sn,R,t),h=v[0],d=v[1],w=h.isOpen,D=h.highlightedIndex,B=h.selectedItem,k=h.inputValue,C=l.exports.useRef(null),K=l.exports.useRef({}),M=l.exports.useRef(null),Z=l.exports.useRef(null),Y=l.exports.useRef(null),x=l.exports.useRef(!0),g=Yt(t),G=l.exports.useRef(),b=ft({state:h,props:t}),I=l.exports.useCallback(function(p){return K.current[g.getItemId(p)]},[g]);ut(s,[w,D,k,i],y({isInitialMount:x.current,previousResultCount:G.current,items:i,environment:a,itemToString:A},h)),ut(T,[B],y({isInitialMount:x.current,previousResultCount:G.current,items:i,environment:a,itemToString:A},h));var F=en({menuElement:C.current,highlightedIndex:D,isOpen:w,itemRefs:K,scrollIntoView:o,getItemNodeFromIndex:I});tn({isInitialMount:x.current,props:t,state:h}),l.exports.useEffect(function(){var p=n||r||w;p&&M.current&&M.current.focus()},[]),l.exports.useEffect(function(){x.current||(G.current=i.length)});var H=Zt(w,[Y,C,Z],a,function(){d({type:Te,selectItem:!1})}),E=Jt();l.exports.useEffect(function(){x.current=!1},[]),l.exports.useEffect(function(){w||(K.current={})},[w]);var N=l.exports.useMemo(function(){return{ArrowDown:function(c){c.preventDefault(),d({type:_e,shiftKey:c.shiftKey,getItemNodeFromIndex:I})},ArrowUp:function(c){c.preventDefault(),d({type:We,shiftKey:c.shiftKey,getItemNodeFromIndex:I})},Home:function(c){!b.current.state.isOpen||(c.preventDefault(),d({type:je,getItemNodeFromIndex:I}))},End:function(c){!b.current.state.isOpen||(c.preventDefault(),d({type:qe,getItemNodeFromIndex:I}))},Escape:function(){var c=b.current.state;(c.isOpen||c.inputValue||c.selectedItem||c.highlightedIndex>-1)&&d({type:$e})},Enter:function(c){var f=b.current.state;!f.isOpen||f.highlightedIndex<0||c.which===229||(c.preventDefault(),d({type:Ue,getItemNodeFromIndex:I}))}}},[d,b,I]),O=l.exports.useCallback(function(p){return y({id:g.labelId,htmlFor:g.inputId},p)},[g]),V=l.exports.useCallback(function(p,c){var f,m=p===void 0?{}:p,P=m.onMouseLeave,L=m.refKey,_=L===void 0?"ref":L,W=m.ref,$=fe(m,dn),j=c===void 0?{}:c;return j.suppressRefError,y((f={},f[_]=me(W,function(ge){C.current=ge}),f.id=g.menuId,f.role="listbox",f["aria-labelledby"]=g.labelId,f.onMouseLeave=oe(P,function(){d({type:gt})}),f),$)},[d,E,g]),ne=l.exports.useCallback(function(p){var c,f,m=p===void 0?{}:p,P=m.item,L=m.index,_=m.refKey,W=_===void 0?"ref":_,$=m.ref,j=m.onMouseMove,ge=m.onClick;m.onPress;var he=fe(m,cn),be=b.current,re=be.props,Oe=be.state,pe=Gt(L,P,re.items);if(pe<0)throw new Error("Pass either item or item index in getItemProps!");var Fe="onClick",De=ge,we=function(){L!==Oe.highlightedIndex&&(F.current=!1,d({type:ht,index:L}))},ie=function(){d({type:Ge,index:L}),M.current&&M.current.focus()};return y((c={},c[W]=me($,function(Q){Q&&(K.current[g.getItemId(pe)]=Q)}),c.role="option",c["aria-selected"]=""+(pe===Oe.highlightedIndex),c.id=g.getItemId(pe),c),!he.disabled&&(f={onMouseMove:oe(j,we)},f[Fe]=oe(De,ie),f),he)},[d,b,F,g]),J=l.exports.useCallback(function(p){var c,f=p===void 0?{}:p,m=f.onClick;f.onPress;var P=f.refKey,L=P===void 0?"ref":P,_=f.ref,W=fe(f,pn),$=function(){d({type:mt}),!b.current.state.isOpen&&M.current&&M.current.focus()};return y((c={},c[L]=me(_,function(j){Z.current=j}),c.id=g.toggleButtonId,c.tabIndex=-1,c),!W.disabled&&y({},{onClick:oe(m,$)}),W)},[d,b,g]),ue=l.exports.useCallback(function(p,c){var f,m=p===void 0?{}:p,P=m.onKeyDown,L=m.onChange,_=m.onInput,W=m.onBlur;m.onChangeText;var $=m.refKey,j=$===void 0?"ref":$,ge=m.ref,he=fe(m,fn),be=c===void 0?{}:c;be.suppressRefError;var re=b.current.state,Oe=function(Ce){var Le=Kt(Ce);Le&&N[Le]&&N[Le](Ce)},pe=function(Ce){d({type:Ye,inputValue:Ce.target.value})},Fe=function(){re.isOpen&&!H.current.isMouseDown&&d({type:Te,selectItem:!0})},De="onChange",we={};if(!he.disabled){var ie;we=(ie={},ie[De]=oe(L,_,pe),ie.onKeyDown=oe(P,Oe),ie.onBlur=oe(W,Fe),ie)}return y((f={},f[j]=me(ge,function(Q){M.current=Q}),f.id=g.inputId,f["aria-autocomplete"]="list",f["aria-controls"]=g.menuId,f),re.isOpen&&re.highlightedIndex>-1&&{"aria-activedescendant":g.getItemId(re.highlightedIndex)},{"aria-labelledby":g.labelId,autoComplete:"off",value:re.inputValue},we,he)},[d,N,b,H,E,g]),ae=l.exports.useCallback(function(p,c){var f,m=p===void 0?{}:p,P=m.refKey,L=P===void 0?"ref":P,_=m.ref,W=fe(m,gn),$=c===void 0?{}:c;return $.suppressRefError,y((f={},f[L]=me(_,function(j){Y.current=j}),f.role="combobox",f["aria-haspopup"]="listbox",f["aria-owns"]=g.menuId,f["aria-expanded"]=b.current.state.isOpen,f),W)},[b,E,g]),le=l.exports.useCallback(function(){d({type:vt})},[d]),se=l.exports.useCallback(function(){d({type:yt})},[d]),z=l.exports.useCallback(function(){d({type:It})},[d]),X=l.exports.useCallback(function(p){d({type:xt,highlightedIndex:p})},[d]),de=l.exports.useCallback(function(p){d({type:ze,selectedItem:p})},[d]),ce=l.exports.useCallback(function(p){d({type:bt,inputValue:p})},[d]),xe=l.exports.useCallback(function(){d({type:Ot})},[d]);return{getItemProps:ne,getLabelProps:O,getMenuProps:V,getInputProps:ue,getComboboxProps:ae,getToggleButtonProps:J,toggleMenu:le,openMenu:z,closeMenu:se,setHighlightedIndex:X,setInputValue:ce,selectItem:de,reset:xe,highlightedIndex:D,isOpen:w,selectedItem:B,inputValue:k}}function hn(e){var t=e.removedSelectedItem,n=e.itemToString;return n(t)+" has been removed."}u.array,u.array,u.array,u.func,u.func,u.func,u.number,u.number,u.number,u.func,u.func,u.string,u.string,u.shape({addEventListener:u.func,removeEventListener:u.func,document:u.shape({getElementById:u.func,activeElement:u.any,body:u.any})});ve.itemToString,ve.stateReducer,ve.environment;function mn(e,t,n){let r=l.exports.useRef(e),i=St(t,n);l.exports.useEffect(()=>{r.current=e},[e]),l.exports.useEffect(()=>{if(r.current)return r.current(i)},[i])}function Pn(e,t,n){let r=l.exports.useRef(e),i=l.exports.useRef(!0),o=St(t,n);l.exports.useEffect(()=>{r.current=e},[e]),l.exports.useEffect(()=>{if(r.current&&!i.current)return r.current(o);i.current&&(i.current=!1)},[o])}function St(e,t){const[n,r]=l.exports.useState(e);return l.exports.useEffect(()=>{const i=setTimeout(()=>{r(e)},t);return()=>{clearTimeout(i)}},[e,t]),n}const vn={debounce:0,dropdownHeight:"250px",getOptionsOnMount:!0};function te(v){var h=v,{initialValue:e="",getValue:t=d=>JSON.stringify(d),onChange:n,getKey:r,id:i,getOptions:o,config:a,validationStatus:s,inputRef:T,maxLength:A=null}=h,R=tt(h,["initialValue","getValue","onChange","getKey","id","getOptions","config","validationStatus","inputRef","maxLength"]);const{dropdownHeight:d,debounce:w,getOptionsOnMount:D}=q(q({},vn),a),B=R.renderOption||(O=>S(Ae,ee(q({},O),{children:t(O.option)}))),k=l.exports.useRef(!0),[C,K]=l.exports.useState([]),M=l.exports.useRef(null),{isOpen:Z,getToggleButtonProps:Y,getMenuProps:x,getInputProps:g,getComboboxProps:G,highlightedIndex:b,getItemProps:I,inputValue:F}=Ct({initialInputValue:e,items:C,itemToString:t,id:i}),H=l.exports.useRef(n),E=l.exports.useRef(o),N=l.exports.useRef(t);return l.exports.useEffect(()=>{E.current=o,H.current=n,N.current=t}),l.exports.useEffect(()=>{var O;M.current=C.find(V=>N.current(V)===F)||null,(O=H.current)==null||O.call(H,F,M.current)},[F,C,e]),mn(O=>{let V=!0;return!(k.current&&!D)&&(E==null?void 0:E.current)&&(async()=>{const J=await(E==null?void 0:E.current(O,M.current));V&&K(J)})(),k.current&&(k.current=!1),()=>{V=!1}},F,w),lt("div",{className:"autocomplete position-relative",children:[S("div",ee(q({},G()),{className:"",children:S(Et,ee(q({},g({ref:T})),{maxLength:A,validationStatus:s,id:i,"aria-labelledby":null,suffix:!!(C!=null&&C.length)&&S(Vt,ee(q({},Y()),{"aria-label":"toggle menu",children:S(Tt,{className:"text-body",style:{top:"2px"}})}))}))})),S("div",ee(q({},x()),{"aria-labelledby":null,className:"autocomplete-menu shadow position-absolute w-100 rounded overflow-auto",style:{maxHeight:d,zIndex:1e3},children:Z&&C.map((O,V)=>S(at.Fragment,{children:B({option:O,index:V,highlighted:b===V,selected:M.current===O,props:I({item:O,index:V})})},(r==null?void 0:r(O))||(t==null?void 0:t(O))||V))}))]})}const Ae=at.forwardRef(function({highlighted:t=!1,selected:n=!1,children:r,className:i="",props:o},a){const s=[i,"px-2 py-1",t?"bg-primary bg-opacity-25":"bg-white",n?"fw-bold":"fw-normal"].filter(Boolean).join(" ");return S("div",{className:"bg-white",children:S("div",ee(q({className:s,ref:a},o),{children:r}))})});try{te.displayName="Autocomplete",te.__docgenInfo={description:"",displayName:"Autocomplete",props:{getOptions:{defaultValue:null,description:"Function that provides the available options based on the provided input value.",name:"getOptions",required:!0,type:{name:"(inputValue: string, selectedOption?: OptionType) => OptionType[] | Promise<OptionType[]>"}},initialValue:{defaultValue:{value:""},description:"The initial value of the input",name:"initialValue",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"On change provides both the raw input value and the selected option",name:"onChange",required:!1,type:{name:"(inputValue: string, selectedOption?: OptionType) => void"}},renderOption:{defaultValue:null,description:"What should each option look like?",name:"renderOption",required:!1,type:{name:"(data: RenderOptionData<OptionType>) => ReactNode"}},getValue:{defaultValue:{value:"(item) => JSON.stringify(item)"},description:"What should display in the input when an option is selected?",name:"getValue",required:!1,type:{name:"(option: OptionType) => string"}},getKey:{defaultValue:null,description:"What should be used for the React key? If not provided, getValue will be used.",name:"getKey",required:!1,type:{name:"(option: OptionType) => string"}},id:{defaultValue:null,description:"Used to identify the form control",name:"id",required:!1,type:{name:"string"}},config:{defaultValue:null,description:"Additional autocomplete configuration",name:"config",required:!1,type:{name:"AutocompleteConfig"}},validationStatus:{defaultValue:null,description:"Used to display status-based styling",name:"validationStatus",required:!1,type:{name:"ValidationStatus"}},inputRef:{defaultValue:null,description:"Pass control reference to child input element",name:"inputRef",required:!1,type:{name:"ForwardedRef<HTMLInputElement>"}},maxLength:{defaultValue:{value:"null"},description:"Maximum number of characters the textbox will allow",name:"maxLength",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/ui-toolkit/components/Autocomplete/Autocomplete.tsx#Autocomplete"]={docgenInfo:te.__docgenInfo,name:"Autocomplete",path:"src/ui-toolkit/components/Autocomplete/Autocomplete.tsx#Autocomplete"})}catch{}try{Ae.displayName="AutocompleteOption",Ae.__docgenInfo={description:"",displayName:"AutocompleteOption",props:{option:{defaultValue:null,description:"",name:"option",required:!1,type:{name:"any"}},index:{defaultValue:null,description:"",name:"index",required:!1,type:{name:"number"}},selected:{defaultValue:{value:"false"},description:"",name:"selected",required:!1,type:{name:"boolean"}},highlighted:{defaultValue:{value:"false"},description:"",name:"highlighted",required:!1,type:{name:"boolean"}},props:{defaultValue:null,description:"",name:"props",required:!1,type:{name:"any"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/ui-toolkit/components/Autocomplete/Autocomplete.tsx#AutocompleteOption"]={docgenInfo:Ae.__docgenInfo,name:"AutocompleteOption",path:"src/ui-toolkit/components/Autocomplete/Autocomplete.tsx#AutocompleteOption"})}catch{}var In={parameters:{storySource:{source:`import React from "react";
import { FormField } from "../forms";
import { Autocomplete } from "./Autocomplete";

export default {
  title: "Forms & Inputs/Autocomplete",
  component: Autocomplete,
};

const getFruitOptions = (inputValue: string, selectedOption: Fruit): Fruit[] => {
  // if no filter or a selection was made return everything
  if (!inputValue || selectedOption) return fruits;

  return fruits.filter((f) => f.title.toLowerCase().includes(inputValue.toLowerCase()));
};

export const Basic = () => {
  const getFruitOptions = (inputValue: string, selectedOption: Fruit): Fruit[] => {
    // if no filter or a selection was made return everything
    if (!inputValue || selectedOption) return fruits;

    return fruits.filter((f) => f.title.toLowerCase().includes(inputValue.toLowerCase()));
  };

  return (
    <div style={{ maxWidth: "300px" }}>
      <Autocomplete
        getOptions={getFruitOptions}
        getValue={(option: Fruit) => option?.title || ""}
      />
    </div>
  );
};

export const RenderOption = () => {
  return (
    <FormField
      hint="You can render the option however you want"
      name="autocomplete-demo-debounced"
      style={{ maxWidth: "400px" }}
    >
      <Autocomplete
        getOptions={getFruitOptions}
        getValue={(option: Fruit) => option?.title || ""}
        renderOption={({ option, index, highlighted, selected, props }) => (
          <div
            {...props}
            style={{
              padding: "20px",
              textAlign: "center",
              background: highlighted ? "steelblue" : "white",
              textTransform: selected ? "uppercase" : "lowercase",
            }}
          >
            {index + 1}: {option.title}
          </div>
        )}
      />
    </FormField>
  );
};

// export const Basic = createStory({
//   getOptions: getFruitOptions,
//   getValue: (option: Fruit) => option?.title || "",
//   renderOption: (data) => <AutocompleteOption {...data}>{data.option.title}</AutocompleteOption>,
// });

export const Debounced = () => {
  return (
    <FormField
      hint="Wait for the user to stop typing before getting options"
      name="autocomplete-demo-debounced"
      style={{ maxWidth: "400px" }}
    >
      <Autocomplete
        getOptions={getFruitOptions}
        getValue={(option: Fruit) => option?.title || ""}
        config={{
          debounce: 650,
        }}
      />
    </FormField>
  );
};

export const DelayGetOptions = () => {
  return (
    <FormField
      hint="Don't load any options until the user has typed"
      name="autocomplete-demo-delayed-load"
      style={{ maxWidth: "400px" }}
    >
      <Autocomplete
        getOptions={getFruitOptions}
        getValue={(option: Fruit) => option?.title || ""}
        config={{
          getOptionsOnMount: false,
        }}
      />
    </FormField>
  );
};
// export const Debounced = createStory({
//   getOptions: getFruitOptions,
//   getValue: (option: Fruit) => option?.title || "",
//   config: {
//     debounce: 750,
//   },
//   // eslint-disable-next-line react/display-name
//   renderOption: (data) => <AutocompleteOption {...data}>{data.option.title}</AutocompleteOption>,
// });

// export const CustomDropdownHeight = createStory({
//   getOptions: getFruitOptions,
//   getInputValue: (option: Fruit) => option?.title || "",
//   config: {
//     dropdownHeight: "120px",
//   },
//   // eslint-disable-next-line react/display-name
//   renderOption: (data) => <AutocompleteOption {...data}>{data.option.title}</AutocompleteOption>,
// });

// export const CustomRenderOption = createStory({
//   getOptions: getFruitOptions,
//   getInputValue: (option: Fruit) => option?.title || "",
//   config: {
//     dropdownHeight: "120px",
//   },
//   // eslint-disable-next-line react/display-name
// renderOption: ({ option, index, highlighted, selected, props }) => (
//   <div
//     {...props}
//     style={{
//       background: highlighted ? "steelblue" : "white",
//       textTransform: selected ? "uppercase" : "lowercase",
//     }}
//   >
//     {index + 1}: {option.title}
//   </div>
// ),
// });

// export const DelayGetOptions = createStory({
//   getOptions: getFruitOptions,
//   getInputValue: (option: Fruit) => option?.title || "",
//   config: {
//     getOptionsOnMount: false,
//   },
//   // eslint-disable-next-line react/display-name
//   renderOption: (data) => <AutocompleteOption {...data}>{data.option.title}</AutocompleteOption>,
// });

interface Fruit {
  title: string;
}
export const fruits: Fruit[] = [
  {
    title: "Apple",
  },
  {
    title: "Bananna",
  },
  {
    title: "Kiwi",
  },
  {
    title: "Watermelon",
  },
  {
    title: "Grapes",
  },
  {
    title: "Tangerine",
  },
  {
    title: "Lemon",
  },
  {
    title: "Lime",
  },
  {
    title: "Cranberry",
  },
  {
    title: "Strawberry",
  },
  {
    title: "Raspberry",
  },
  {
    title: "Cherry",
  },
  {
    title: "Blueberry",
  },
  {
    title: "Orange",
  },
].sort((a, b) => (a.title < b.title ? -1 : 1));
`,locationsMap:{basic:{startLoc:{col:21,line:17},endLoc:{col:1,line:33},startBody:{col:21,line:17},endBody:{col:1,line:33}},"render-option":{startLoc:{col:28,line:35},endLoc:{col:1,line:61},startBody:{col:28,line:35},endBody:{col:1,line:61}},debounced:{startLoc:{col:25,line:69},endLoc:{col:1,line:85},startBody:{col:25,line:69},endBody:{col:1,line:85}},"delay-get-options":{startLoc:{col:31,line:87},endLoc:{col:1,line:103},startBody:{col:31,line:87},endBody:{col:1,line:103}},fruits:{startLoc:{col:31,line:157},endLoc:{col:46,line:200},startBody:{col:31,line:157},endBody:{col:46,line:200}}}}},title:"Forms & Inputs/Autocomplete",component:te};const Qe=(e,t)=>!e||t?ye:ye.filter(n=>n.title.toLowerCase().includes(e.toLowerCase())),yn=()=>S("div",{style:{maxWidth:"300px"},children:S(te,{getOptions:(t,n)=>!t||n?ye:ye.filter(r=>r.title.toLowerCase().includes(t.toLowerCase())),getValue:t=>(t==null?void 0:t.title)||""})}),xn=()=>S(He,{hint:"You can render the option however you want",name:"autocomplete-demo-debounced",style:{maxWidth:"400px"},children:S(te,{getOptions:Qe,getValue:e=>(e==null?void 0:e.title)||"",renderOption:({option:e,index:t,highlighted:n,selected:r,props:i})=>lt("div",ee(q({},i),{style:{padding:"20px",textAlign:"center",background:n?"steelblue":"white",textTransform:r?"uppercase":"lowercase"},children:[t+1,": ",e.title]}))})}),bn=()=>S(He,{hint:"Wait for the user to stop typing before getting options",name:"autocomplete-demo-debounced",style:{maxWidth:"400px"},children:S(te,{getOptions:Qe,getValue:e=>(e==null?void 0:e.title)||"",config:{debounce:650}})}),On=()=>S(He,{hint:"Don't load any options until the user has typed",name:"autocomplete-demo-delayed-load",style:{maxWidth:"400px"},children:S(te,{getOptions:Qe,getValue:e=>(e==null?void 0:e.title)||"",config:{getOptionsOnMount:!1}})}),ye=[{title:"Apple"},{title:"Bananna"},{title:"Kiwi"},{title:"Watermelon"},{title:"Grapes"},{title:"Tangerine"},{title:"Lemon"},{title:"Lime"},{title:"Cranberry"},{title:"Strawberry"},{title:"Raspberry"},{title:"Cherry"},{title:"Blueberry"},{title:"Orange"}].sort((e,t)=>e.title<t.title?-1:1),wn=["Basic","RenderOption","Debounced","DelayGetOptions","fruits"];var _n=Object.freeze(Object.defineProperty({__proto__:null,default:In,Basic:yn,RenderOption:xn,Debounced:bn,DelayGetOptions:On,fruits:ye,__namedExportsOrder:wn},Symbol.toStringTag,{value:"Module"}));export{_n as A,Pn as a,ye as f,mn as u};
//# sourceMappingURL=Autocomplete.stories.a3b3c10c.js.map
