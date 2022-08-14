import"./jsx-runtime.3b72f269.js";import{c as f,A as ca,M as da,C as oe,S as ie}from"./Props.fcc682c8.js";import"./iframe.c2dca790.js";import{j as pa,f as V,r as h,u as fa,a as P,o as ha,w as U,k as F,b as se,d as C,F as ga,e as ya,n as re,i as Ae,l as He,g as ve,m as Le,p as ge,q as ye,t as W,v as H}from"./vue.esm-bundler.ea0bdb70.js";import"./string.666dc169.js";import"./es.map.constructor.4b8759ad.js";import"./es.number.to-fixed.a944b154.js";function Xe(a){return typeof a=="function"||Object.prototype.toString.call(a)==="[object Function]"}function j(a,l,e,u=1){const[m,G]=typeof u=="number"?[u,u]:u,R=Math.round(l/m/a[0])*a[0],M=Math.round(e/G/a[1])*a[1];return[R,M]}function me(a,l,e){return a-l-e}function ce(a,l,e){return a-l-e}function D(a,l,e){return l!==null&&a<l?l:e!==null&&e<a?e:a}function $e(a,l,e){let u=a;const m=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"].find(G=>Xe(u[G]));if(!Xe(u[m]))return!1;do{if(u[m](l))return!0;if(u===e)return!1;u=u.parentNode}while(u);return!1}function xa(a){const l=window.getComputedStyle(a);return[parseFloat(l.getPropertyValue("width"),10),parseFloat(l.getPropertyValue("height"),10)]}function k(a,l,e){!a||(a.attachEvent?a.attachEvent("on"+l,e):a.addEventListener?a.addEventListener(l,e,!0):a["on"+l]=e)}function Ce(a,l,e){!a||(a.detachEvent?a.detachEvent("on"+l,e):a.removeEventListener?a.removeEventListener(l,e,!0):a["on"+l]=null)}const ba=["onMousedown","onTouchstart"],Y={__name:"DraggableResizableVue3",props:{className:{type:String,default:"drv"},classNameDraggable:{type:String,default:"drv-draggable"},classNameResizable:{type:String,default:"drv-resizable"},classNameDragging:{type:String,default:"drv-dragging"},classNameResizing:{type:String,default:"drv-resizing"},classNameActive:{type:String,default:"drv-active"},classNameHandle:{type:String,default:"drv-handle"},disableUserSelect:{type:Boolean,default:!0},enableNativeDrag:{type:Boolean,default:!1},preventDeactivation:{type:Boolean,default:!1},active:{type:Boolean,default:!1},activeOnHover:{type:Boolean,default:!1},draggable:{type:Boolean,default:!0},resizable:{type:Boolean,default:!0},lockAspectRatio:{type:Boolean,default:!1},w:{type:[Number,String],validator:a=>typeof a=="number"?a>0:a==="auto"},h:{type:[Number,String],validator:a=>typeof a=="number"?a>0:a==="auto"},minWidth:{type:Number,default:0,validator:a=>a>=0},minHeight:{type:Number,default:0,validator:a=>a>=0},maxWidth:{type:Number,default:null,validator:a=>a>=0},maxHeight:{type:Number,default:null,validator:a=>a>=0},x:{type:Number,default:0},y:{type:Number,default:0},z:{type:[String,Number],default:"auto",validator:a=>typeof a=="string"?a==="auto":a>=0},handlesType:{type:String,default:"handles",validator:a=>["handles","borders","custom"].includes(a)},handles:{type:Array,default:()=>["tl","tm","tr","mr","br","bm","bl","ml"],validator:a=>{const l=new Set(["tl","tm","tr","mr","br","bm","bl","ml"]);return new Set(a.filter(e=>l.has(e))).size===a.length}},handlesSize:{type:Number,default:10},dragHandle:{type:String,default:null},dragCancel:{type:String,default:null},axis:{type:String,default:"both",validator:a=>["x","y","both"].includes(a)},grid:{type:Array,default:()=>[1,1]},showGrid:{type:[Boolean,String],default:!1,validator:a=>[!0,!1,"x","y","both"].includes(a)},gridColor:{type:String,default:"rgba(0, 0, 0, 0.1)"},parent:{type:[Boolean,String],default:!1},scale:{type:[Number,Array],default:1,validator:a=>typeof a=="number"?a>0:a.length===2&&a[0]>0&&a[1]>0},onDragStart:{type:Function,default:()=>!0},onDrag:{type:Function,default:()=>!0},onResizeStart:{type:Function,default:()=>!0},onResize:{type:Function,default:()=>!0}},emits:["update:x","update:y","update:w","update:h","update:active","resizing","resizestop","dragging","dragstop","activated","deactivated"],setup(a,{emit:l}){const e=a;pa(t=>({"1a20c8a4":V(Fe),"3fb0e001":V(Ge)}));const u={mouse:{start:"mousedown",move:"mousemove",stop:"mouseup"},touch:{start:"touchstart",move:"touchmove",stop:"touchend"}},m={userSelect:"none",MozUserSelect:"none",WebkitUserSelect:"none",MsUserSelect:"none"},G={userSelect:"auto",MozUserSelect:"auto",WebkitUserSelect:"auto",MsUserSelect:"auto"};let R=u.mouse;const M=h(null),K=h(null),A=h({h:200,w:200,active:!1,x:0,y:0}),Me=fa(),g=P({get(){return e.w||A.value.w},set(t){l("update:w",t),A.value.w=t}}),y=P({get(){return e.h||A.value.h},set(t){l("update:h",t),A.value.h=t}}),i=P({get(){return e.x||A.value.x},set(t){l("update:x",t),A.value.x=t}}),s=P({get(){return e.y||A.value.y},set(t){l("update:y",t),A.value.y=t}}),c=h(null),d=h(null),L=P({get(){return e.active||A.value.active},set(t){l("update:active",t),A.value.active=t}}),Fe=P(()=>e.handlesSize+"px"),Ge=P(()=>e.handlesSize/2+"px"),ee=h(!1),ae=h(!1),x=h(null),z=h(null),B=h(null),N=h(null),X=h(!1),T=h(!1),te=h(!1),Ne=h(!1),Ie=h(e.z),p=h(null),r=h(null),Ke=P(()=>({transform:`translate(${i.value}px, ${s.value}px)`,width:Qe.value,height:Ze.value,zIndex:Ie.value,...T.value&&e.disableUserSelect?m:G})),qe=P(()=>{const t={x:`linear-gradient(-90deg, ${e.gridColor} 1px, transparent 1px) 0px 0px / ${e.grid[0]}px ${e.grid[0]}px`,y:`linear-gradient(0deg, ${e.gridColor} 1px, transparent 1px) 0px 0px / ${e.grid[1]}px ${e.grid[1]}px`};return e.showGrid==="x"||e.showGrid==="y"?t[e.showGrid]:e.showGrid?`${t.x}, ${t.y}`:null}),Je=P(()=>e.resizable?e.handles:[]),Qe=P(()=>g.value==="auto"&&!ee.value?"auto":g.value+"px"),Ze=P(()=>y.value==="auto"&&!ae.value?"auto":y.value+"px"),_=h(e.minWidth),O=h(e.minHeight),b=h(e.maxWidth),w=h(e.maxHeight),Se=P(()=>Boolean(N.value)&&(N.value.includes("l")||N.value.includes("r"))),Pe=P(()=>Boolean(N.value)&&(N.value.includes("t")||N.value.includes("b"))),le=()=>{p.value={mouseX:0,mouseY:0,x:0,y:0,w:0,h:0},r.value={minLeft:null,maxLeft:null,minRight:null,maxRight:null,minTop:null,maxTop:null,minBottom:null,maxBottom:null}},ea=()=>{if(e.parent){const[t,o]=ze();z.value=t,B.value=o,c.value=z.value-g.value-i.value,d.value=B.value-y.value-s.value}},ze=()=>{if(e.parent){const t=typeof e.parent=="string"?M.value.closest(e.parent):M.value.parentNode;K.value=t;const o=window.getComputedStyle(t,null);return[parseInt(o.getPropertyValue("width"),10),parseInt(o.getPropertyValue("height"),10)]}return[null,null]},Be=()=>{if(e.parent&&e.showGrid){if(!K.value){const t=typeof e.parent=="string"?M.value.closest(e.parent):M.value.parentNode;K.value=t}K.value.style.background=qe.value}},aa=t=>{R=u.touch,De(t)},ta=t=>{R=u.mouse,De(t)},De=t=>{if(t instanceof MouseEvent&&t.which!==1)return;const o=t.target||t.srcElement;if(M.value.contains(o)){if(e.onDragStart(t)===!1)return;if(e.dragHandle&&!$e(o,e.dragHandle,M.value)||e.dragCancel&&$e(o,e.dragCancel,M.value)){T.value=!1;return}L.value||(L.value=!0,l("activated")),e.draggable&&(te.value=!0),p.value.mouseX=t.touches?t.touches[0].pageX:t.pageX,p.value.mouseY=t.touches?t.touches[0].pageY:t.pageY,p.value.left=i.value,p.value.right=c.value,p.value.top=s.value,p.value.bottom=d.value,e.parent&&(r.value=ne()),k(document.documentElement,R.move,na),k(document.documentElement,R.stop,Ve)}},ne=()=>({minLeft:i.value%e.grid[0],maxLeft:Math.floor((z.value-g.value-i.value)/e.grid[0])*e.grid[0]+i.value,minRight:c.value%e.grid[0],maxRight:Math.floor((z.value-g.value-c.value)/e.grid[0])*e.grid[0]+c.value,minTop:s.value%e.grid[1],maxTop:Math.floor((B.value-y.value-s.value)/e.grid[1])*e.grid[1]+s.value,minBottom:d.value%e.grid[1],maxBottom:Math.floor((B.value-y.value-d.value)/e.grid[1])*e.grid[1]+d.value}),Re=t=>{const o=t.target||t.srcElement,n=new RegExp(e.className+"-([trmbl]{2})","");(!M.value||!M.value.contains(o)&&!n.test(o.className))&&(L.value&&!e.preventDeactivation&&(L.value=!1,l("deactivated")),Ce(document.documentElement,R.move,q)),le()},la=(t,o)=>{R=u.touch,Te(t,o)},Te=(t,o)=>{o instanceof MouseEvent&&o.which!==1||e.onResizeStart(t,o)!==!1&&(o.stopPropagation&&o.stopPropagation(),e.lockAspectRatio&&!t.includes("m")?N.value="m"+t.substring(1):N.value=t,Ne.value=!0,p.value.mouseX=o.touches?o.touches[0].pageX:o.pageX,p.value.mouseY=o.touches?o.touches[0].pageY:o.pageY,p.value.left=i.value,p.value.right=c.value,p.value.top=s.value,p.value.bottom=d.value,r.value=ue(),k(document.documentElement,R.move,q),k(document.documentElement,R.stop,Ve))},ue=()=>{const[t,o]=e.grid;e.lockAspectRatio&&(_.value/O.value>x.value?O.value=_.value/x.value:_.value=x.value*O.value,b.value&&w.value?(b.value=Math.min(b.value,x.value*w.value),w.value=Math.min(w.value,b.value/x.value)):b.value?w.value=b.value/x.value:w.value&&(b.value=x.value*w.value)),b.value=b.value-b.value%t,w.value=w.value-w.value%o;const n={minLeft:null,maxLeft:null,minTop:null,maxTop:null,minRight:null,maxRight:null,minBottom:null,maxBottom:null};return e.parent?(n.minLeft=i.value%t,n.maxLeft=i.value+Math.floor((g.value-_.value)/t)*t,n.minTop=s.value%o,n.maxTop=s.value+Math.floor((y.value-O.value)/o)*o,n.minRight=c.value%t,n.maxRight=c.value+Math.floor((g.value-_.value)/t)*t,n.minBottom=d.value%o,n.maxBottom=d.value+Math.floor((y.value-O.value)/o)*o,b.value&&(n.minLeft=Math.max(n.minLeft,z.value-c.value-b.value),n.minRight=Math.max(n.minRight,z.value-i.value-b.value)),w.value&&(n.minTop=Math.max(n.minTop,B.value-d.value-w.value),n.minBottom=Math.max(n.minBottom,B.value-s.value-w.value)),e.lockAspectRatio&&(n.minLeft=Math.max(n.minLeft,i.value-s.value*x.value),n.minTop=Math.max(n.minTop,s.value-i.value/x.value),n.minRight=Math.max(n.minRight,c.value-d.value*x.value),n.minBottom=Math.max(n.minBottom,d.value-c.value/x.value))):(n.minLeft=null,n.maxLeft=i.value+Math.floor((g.value-_.value)/t)*t,n.minTop=null,n.maxTop=s.value+Math.floor((y.value-O.value)/o)*o,n.minRight=null,n.maxRight=c.value+Math.floor((g.value-_.value)/t)*t,n.minBottom=null,n.maxBottom=d.value+Math.floor((y.value-O.value)/o)*o,b.value&&(n.minLeft=-(c.value+b.value),n.minRight=-(i.value+b.value)),w.value&&(n.minTop=-(d.value+w.value),n.minBottom=-(s.value+w.value)),e.lockAspectRatio&&b.value&&w.value&&(n.minLeft=Math.min(n.minLeft,-(c.value+b.value)),n.minTop=Math.min(n.minTop,-(w.value+d.value)),n.minRight=Math.min(n.minRight,-i.value-b.value),n.minBottom=Math.min(n.minBottom,-s.value-w.value))),n},na=t=>{X.value?q(t):te.value&&ua(t)},ua=t=>{const o=e.grid,n=e.axis&&e.axis!=="y"?p.value.mouseX-(t.touches?t.touches[0].pageX:t.pageX):0,v=e.axis&&e.axis!=="x"?p.value.mouseY-(t.touches?t.touches[0].pageY:t.pageY):0,[S,$]=j(o,n,v,e.scale),E=D(p.value.left-S,r.value.minLeft,r.value.maxLeft),J=D(p.value.top-$,r.value.minTop,r.value.maxTop);if(e.onDrag(i,s)===!1)return;const Q=D(p.value.right+S,r.value.minRight,r.value.maxRight),Z=D(p.value.bottom+$,r.value.minBottom,r.value.maxBottom);i.value=E,s.value=J,c.value=Q,d.value=Z,l("dragging",i.value,s.value),T.value=!0},oa=t=>{const[o,n]=j(e.grid,t,s.value,1),v=D(o,r.value.minLeft,r.value.maxLeft);i.value=v,c.value=z.value-g.value-v},ia=t=>{const[o,n]=j(e.grid,i.value,t,1),v=D(n,r.value.minTop,r.value.maxTop);s.value=v,d.value=B.value-y.value-v},q=t=>{let o=i.value,n=s.value,v=c.value,S=d.value;const $=p.value.mouseX-(t.touches?t.touches[0].pageX:t.pageX),E=p.value.mouseY-(t.touches?t.touches[0].pageY:t.pageY);!ee.value&&$&&(ee.value=!0),!ae.value&&E&&(ae.value=!0);const[J,Q]=j(e.grid,$,E,e.scale);N.value.includes("b")?(S=D(p.value.bottom+Q,r.value.minBottom,r.value.maxBottom),e.lockAspectRatio&&Pe&&(v=c.value-(d.value-S)*x.value)):N.value.includes("t")&&(n=D(p.value.top-Q,r.value.minTop,r.value.maxTop),e.lockAspectRatio&&Pe&&(o=i.value-(s.value-n)*x.value)),N.value.includes("r")?(v=D(p.value.right+J,r.value.minRight,r.value.maxRight),e.lockAspectRatio&&Se&&(S=d.value-(c.value-v)/x.value)):N.value.includes("l")&&(o=D(p.value.left-J,r.value.minLeft,r.value.maxLeft),e.lockAspectRatio&&Se&&(n=s.value-(i.value-o)/x.value));const Z=me(z.value,o,v),We=ce(B.value,n,S);e.onResize(N.value,o,n,Z,We)!==!1&&(i.value=o,s.value=n,c.value=v,d.value=S,g.value=Z,y.value=We,l("resizing",i.value,s.value,g.value,y.value),X.value=!0)},sa=t=>{const[o]=j(e.grid,t,0,1);let n=D(z.value-o-i.value,r.value.minRight,r.value.maxRight),v=d.value;e.lockAspectRatio&&(v=d.value-(c.value-n)/x.value);const S=me(z.value,i.value,n),$=ce(B.value,s.value,v);c.value=n,d.value=v,g.value=S,y.value=$},ra=t=>{const[o,n]=j(e.grid,0,t,1);let v=D(B.value-n-s.value,r.value.minBottom,r.value.maxBottom),S=c.value;e.lockAspectRatio&&(S=c.value-(d.value-v)*x.value);const $=me(z.value,i.value,S),E=ce(B.value,s.value,v);c.value=S,d.value=v,g.value=$,y.value=E},Ve=t=>{N.value=null,le(),te.value=!1,Ne.value=!1,X.value&&(X.value=!1,l("resizestop",i.value,s.value,g.value,y.value)),T.value&&(T.value=!1,l("dragstop",i.value,s.value)),Ce(document.documentElement,R.move,q)},va=()=>{e.activeOnHover&&(L.value=!0)},ma=()=>{e.activeOnHover&&!T.value&&(L.value=!1)};return ha(()=>{le(),e.enableNativeDrag||(M.value.ondragstart=()=>!1);const[t,o]=ze();z.value=t,B.value=o;const[n,v]=xa(M.value);x.value=(g.value!=="auto"?g.value:n)/(y.value!=="auto"?y.value:v),g.value=g.value!=="auto"?g.value:n,y.value=y.value!=="auto"?y.value:v,c.value=z.value-g.value-i.value,d.value=B.value-y.value-s.value,L.value&&l("activated"),e.showGrid&&Be(),k(document.documentElement,"mousedown",Re),k(document.documentElement,"touchend touchcancel",Re),k(window,"resize",ea)}),U(()=>e.x,t=>{X.value||T.value||(e.parent&&(r.value=ne()),oa(t))}),U(()=>e.y,t=>{X.value||T.value||(e.parent&&(r.value=ne()),ia(t))}),U(()=>e.lockAspectRatio,t=>{t?x.value=g.value/y.value:x.value=void 0}),U(()=>e.w,t=>{X.value||T.value||(e.parent&&(r.value=ue()),sa(t))}),U(()=>e.h,t=>{X.value||T.value||(e.parent&&(r.value=ue()),ra(t))}),U(()=>e.showGrid,()=>{Be()}),(t,o)=>(F(),se("div",{ref_key:"el",ref:M,style:Ae(V(Ke)),class:re([{[a.classNameActive]:V(L),[a.classNameDragging]:T.value,[a.classNameResizing]:X.value,[a.classNameDraggable]:a.draggable,[a.classNameResizable]:a.resizable},a.className]),onMousedown:ta,onTouchstart:aa,onMouseover:va,onMouseleave:ma},[C("div",{class:re("drv-"+a.handlesType)},[(F(!0),se(ga,null,ya(V(Je),n=>(F(),se("div",{key:n,class:re([a.classNameHandle,a.classNameHandle+"-"+n,a.classNameHandle!=="drv-handle"?"drv-handle":"",a.classNameHandle!=="drv-handle"?"drv-handle-"+n:""]),style:Ae({display:V(L)?"block":"none"}),onMousedown:He(v=>Te(n,v),["stop","prevent"]),onTouchstart:He(v=>la(n,v),["stop","prevent"])},[V(Me)["handle-"+n]?ve(t.$slots,"handle-"+n,{key:0}):Le("",!0),V(Me)["handle-"+n]?Le("",!0):ve(t.$slots,"handle",{key:1})],46,ba))),128))],2),ve(t.$slots,"default")],38))}};Y.__docgenInfo={exportName:"default",displayName:"DraggableResizableVue3",description:"",tags:{},props:[{name:"className",type:{name:"string"},defaultValue:{func:!1,value:"'drv'"}},{name:"classNameDraggable",type:{name:"string"},defaultValue:{func:!1,value:"'drv-draggable'"}},{name:"classNameResizable",type:{name:"string"},defaultValue:{func:!1,value:"'drv-resizable'"}},{name:"classNameDragging",type:{name:"string"},defaultValue:{func:!1,value:"'drv-dragging'"}},{name:"classNameResizing",type:{name:"string"},defaultValue:{func:!1,value:"'drv-resizing'"}},{name:"classNameActive",type:{name:"string"},defaultValue:{func:!1,value:"'drv-active'"}},{name:"classNameHandle",type:{name:"string"},defaultValue:{func:!1,value:"'drv-handle'"}},{name:"disableUserSelect",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"enableNativeDrag",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"preventDeactivation",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"active",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"activeOnHover",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"draggable",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"resizable",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"lockAspectRatio",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"w",type:{name:"number|string"}},{name:"h",type:{name:"number|string"}},{name:"minWidth",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"minHeight",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"maxWidth",type:{name:"number"},defaultValue:{func:!1,value:"null"}},{name:"maxHeight",type:{name:"number"},defaultValue:{func:!1,value:"null"}},{name:"x",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"y",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"z",type:{name:"string|number"},defaultValue:{func:!1,value:"'auto'"}},{name:"handlesType",type:{name:"string"},defaultValue:{func:!1,value:"'handles'"},values:["handles","borders","custom"]},{name:"handles",type:{name:"array"},defaultValue:{func:!1,value:"['tl', 'tm', 'tr', 'mr', 'br', 'bm', 'bl', 'ml']"}},{name:"handlesSize",type:{name:"number"},defaultValue:{func:!1,value:"10"}},{name:"dragHandle",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"dragCancel",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"axis",type:{name:"string"},defaultValue:{func:!1,value:"'both'"},values:["x","y","both"]},{name:"grid",type:{name:"array"},defaultValue:{func:!1,value:"[1, 1]"}},{name:"showGrid",type:{name:"boolean|string"},defaultValue:{func:!1,value:"false"},values:[!0,"x","y","both"]},{name:"gridColor",type:{name:"string"},defaultValue:{func:!1,value:"'rgba(0, 0, 0, 0.1)'"}},{name:"parent",type:{name:"boolean|string"},defaultValue:{func:!1,value:"false"}},{name:"scale",type:{name:"number|array"},defaultValue:{func:!1,value:"1"}},{name:"onDragStart",type:{name:"func"},defaultValue:{func:!0,value:"() => true"}},{name:"onDrag",type:{name:"func"},defaultValue:{func:!0,value:"() => true"}},{name:"onResizeStart",type:{name:"func"},defaultValue:{func:!0,value:"() => true"}},{name:"onResize",type:{name:"func"},defaultValue:{func:!0,value:"() => true"}}],events:[{name:"update:x"},{name:"update:y"},{name:"update:w"},{name:"update:h"},{name:"update:active"},{name:"resizing"},{name:"resizestop"},{name:"dragging"},{name:"dragstop"},{name:"activated"},{name:"deactivated"}],slots:[{name:"default",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"handle"}]};Y.install=a=>(a.component(Y.name,Y),a);const wa=W(" Draggable and resizable element "),xe={__name:"1-NoProps",setup(a){return(l,e)=>(F(),ge(V(Y),null,{default:ye(()=>[wa]),_:1}))}};xe.__docgenInfo={exportName:"default",displayName:"1-NoProps",description:"",tags:{}};const Ma=C("br",null,null,-1),Na=C("br",null,null,-1),Sa=C("br",null,null,-1),Pa=C("br",null,null,-1),be={__name:"2-WithBasicProps",setup(a){const l=h({x:20,y:20,width:200,height:200,isActive:!1});return(e,u)=>(F(),ge(V(Y),{x:l.value.x,"onUpdate:x":u[0]||(u[0]=m=>l.value.x=m),y:l.value.y,"onUpdate:y":u[1]||(u[1]=m=>l.value.y=m),h:l.value.height,"onUpdate:h":u[2]||(u[2]=m=>l.value.height=m),w:l.value.width,"onUpdate:w":u[3]||(u[3]=m=>l.value.width=m),active:l.value.isActive,"onUpdate:active":u[4]||(u[4]=m=>l.value.isActive=m)},{default:ye(()=>[W(" x="+H(l.value.x),1),Ma,W(" y="+H(l.value.y),1),Na,W(" height="+H(l.value.height),1),Sa,W(" width="+H(l.value.width),1),Pa,W(" isActive="+H(l.value.isActive),1)]),_:1},8,["x","y","h","w","active"]))}};be.__docgenInfo={exportName:"default",displayName:"2-WithBasicProps",description:"",tags:{}};const za=C("br",null,null,-1),Ba=C("br",null,null,-1),Da=C("br",null,null,-1),Ra=C("br",null,null,-1),we={__name:"3-WithMinMax",setup(a){const l=h({x:20,y:20,width:200,height:200,isActive:!1});return(e,u)=>(F(),ge(V(Y),{x:l.value.x,"onUpdate:x":u[0]||(u[0]=m=>l.value.x=m),y:l.value.y,"onUpdate:y":u[1]||(u[1]=m=>l.value.y=m),h:l.value.height,"onUpdate:h":u[2]||(u[2]=m=>l.value.height=m),w:l.value.width,"onUpdate:w":u[3]||(u[3]=m=>l.value.width=m),active:l.value.isActive,"onUpdate:active":u[4]||(u[4]=m=>l.value.isActive=m),"min-width":150,"min-height":150,"max-width":300,"max-height":300},{default:ye(()=>[W(" x="+H(l.value.x),1),za,W(" y="+H(l.value.y),1),Ba,W(" height="+H(l.value.height),1),Da,W(" width="+H(l.value.width),1),Ra,W(" isActive="+H(l.value.isActive),1)]),_:1},8,["x","y","h","w","active"]))}};we.__docgenInfo={exportName:"default",displayName:"3-WithMinMax",description:"",tags:{}};function de(){return de=Object.assign?Object.assign.bind():function(a){for(var l=1;l<arguments.length;l++){var e=arguments[l];for(var u in e)Object.prototype.hasOwnProperty.call(e,u)&&(a[u]=e[u])}return a},de.apply(this,arguments)}const Ta={},Va="wrapper";function _e({components:a,...l}){return f(Va,de({},Ta,l,{components:a,mdxType:"MDXLayout"}),f("pre",null,f("code",{parentName:"pre",className:"language-html"},`<template>
  <draggable-resizable-vue>
    Draggable and resizable element
  </draggable-resizable-vue>
</template>

<script setup>
import DraggableResizableVue from "draggable-resizable-vue3";
<\/script>
`)))}_e.isMDXComponent=!0;function pe(){return pe=Object.assign?Object.assign.bind():function(a){for(var l=1;l<arguments.length;l++){var e=arguments[l];for(var u in e)Object.prototype.hasOwnProperty.call(e,u)&&(a[u]=e[u])}return a},pe.apply(this,arguments)}const Wa={},Aa="wrapper";function Oe({components:a,...l}){return f(Aa,pe({},Wa,l,{components:a,mdxType:"MDXLayout"}),f("pre",null,f("code",{parentName:"pre",className:"language-html"},`<template>
  <draggable-resizable-vue
    v-model:x="element.x"
    v-model:y="element.y"
    v-model:h="element.height"
    v-model:w="element.width"
    v-model:active="element.isActive"
  >
    x={{ element.x }}<br />
    y={{ element.y }}<br />
    height={{ element.height }}<br />
    width={{ element.width }}<br />
    isActive={{ element.isActive }}
  </draggable-resizable-vue>
</template>

<script setup>
import { ref } from 'vue'
import DraggableResizableVue from 'draggable-resizable-vue3'

const element = ref({
  x: 20,
  y: 20,
  width: 200,
  height: 200,
  isActive: false,
})
<\/script>

`)))}Oe.isMDXComponent=!0;function fe(){return fe=Object.assign?Object.assign.bind():function(a){for(var l=1;l<arguments.length;l++){var e=arguments[l];for(var u in e)Object.prototype.hasOwnProperty.call(e,u)&&(a[u]=e[u])}return a},fe.apply(this,arguments)}const Ha={},La="wrapper";function ke({components:a,...l}){return f(La,fe({},Ha,l,{components:a,mdxType:"MDXLayout"}),f("pre",null,f("code",{parentName:"pre",className:"language-html"},`<template>
  <draggable-resizable-vue
    v-model:x="element.x"
    v-model:y="element.y"
    v-model:h="element.height"
    v-model:w="element.width"
    v-model:active="element.isActive"
    :min-width="150"
    :min-height="150"
    :max-width="300"
    :max-height="300"
  >
    x={{ element.x }}<br />
    y={{ element.y }}<br />
    height={{ element.height }}<br />
    width={{ element.width }}<br />
    isActive={{ element.isActive }}
  </draggable-resizable-vue>
</template>

<script setup>
import { ref } from 'vue'
import DraggableResizableVue from 'draggable-resizable-vue3'

const element = ref({
  x: 20,
  y: 20,
  width: 200,
  height: 200,
  isActive: false,
})
<\/script>

`)))}ke.isMDXComponent=!0;function he(){return he=Object.assign?Object.assign.bind():function(a){for(var l=1;l<arguments.length;l++){var e=arguments[l];for(var u in e)Object.prototype.hasOwnProperty.call(e,u)&&(a[u]=e[u])}return a},he.apply(this,arguments)}const Xa={},$a="wrapper";function Ye({components:a,...l}){return f($a,he({},Xa,l,{components:a,mdxType:"MDXLayout"}),f(da,{title:"Basic",mdxType:"Meta"}),f("h1",null,"No props"),f(oe,{mdxType:"Canvas"},f(ie,{name:"No props",height:"300px",mdxType:"Story"},{components:{NoProps:xe},template:"<NoProps />"})),f(_e,{mdxType:"NoPropsDocs"}),f("h1",null,"With basic props"),f(oe,{mdxType:"Canvas"},f(ie,{name:"With basic props",height:"300px",mdxType:"Story"},{components:{WithBasicProps:be},template:"<WithBasicProps />"})),f(Oe,{mdxType:"WithBasicPropsDocs"}),f("h1",null,"With min-width, min-height, max-width, max-height"),f(oe,{mdxType:"Canvas"},f(ie,{name:"With min-width, min-height, max-width, max-height",height:"300px",mdxType:"Story"},{components:{WithMinMax:we},template:"<WithMinMax />"})),f(ke,{mdxType:"WithMinMaxDocs"}))}Ye.isMDXComponent=!0;const Ee=()=>({components:{NoProps:xe},template:"<NoProps />"});Ee.storyName="No props";Ee.parameters={storySource:{source:`{
  components: {
    NoProps
  },
  template: "<NoProps />"
}`}};const Ue=()=>({components:{WithBasicProps:be},template:"<WithBasicProps />"});Ue.storyName="With basic props";Ue.parameters={storySource:{source:`{
  components: {
    WithBasicProps
  },
  template: "<WithBasicProps />"
}`}};const je=()=>({components:{WithMinMax:we},template:"<WithMinMax />"});je.storyName="With min-width, min-height, max-width, max-height";je.parameters={storySource:{source:`{
  components: {
    WithMinMax
  },
  template: "<WithMinMax />"
}`}};const I={title:"Basic",includeStories:["noProps","withBasicProps","withMinWidthMinHeightMaxWidthMaxHeight"]},Ca={"No props":"noProps","With basic props":"withBasicProps","With min-width, min-height, max-width, max-height":"withMinWidthMinHeightMaxWidthMaxHeight"};I.parameters=I.parameters||{};I.parameters.docs={...I.parameters.docs||{},page:()=>f(ca,{mdxStoryNameToKey:Ca,mdxComponentAnnotations:I},f(Ye,null))};const Fa=["noProps","withBasicProps","withMinWidthMinHeightMaxWidthMaxHeight"];export{Fa as __namedExportsOrder,I as default,Ee as noProps,Ue as withBasicProps,je as withMinWidthMinHeightMaxWidthMaxHeight};
//# sourceMappingURL=basic.stories.12673360.js.map