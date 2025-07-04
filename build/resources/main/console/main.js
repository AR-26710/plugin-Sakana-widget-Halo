this.SakanaWidget=function($,a,Z){"use strict";var B={};(function _(h,m,k,N){var A=!!(h.Worker&&h.Blob&&h.Promise&&h.OffscreenCanvas&&h.OffscreenCanvasRenderingContext2D&&h.HTMLCanvasElement&&h.HTMLCanvasElement.prototype.transferControlToOffscreen&&h.URL&&h.URL.createObjectURL),L=typeof Path2D=="function"&&typeof DOMMatrix=="function",Ee=function(){if(!h.OffscreenCanvas)return!1;var r=new OffscreenCanvas(1,1),e=r.getContext("2d");e.fillRect(0,0,1,1);var n=r.transferToImageBitmap();try{e.createPattern(n,"no-repeat")}catch{return!1}return!0}();function O(){}function T(r){var e=m.exports.Promise,n=e!==void 0?e:h.Promise;return typeof n=="function"?new n(r):(r(O,O),null)}var I=function(r,e){return{transform:function(n){if(r)return n;if(e.has(n))return e.get(n);var o=new OffscreenCanvas(n.width,n.height),l=o.getContext("2d");return l.drawImage(n,0,0),e.set(n,o),o},clear:function(){e.clear()}}}(Ee,new Map),P=function(){var r=Math.floor(16.666666666666668),e,n,o={},l=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(e=function(s){var i=Math.random();return o[i]=requestAnimationFrame(function t(c){l===c||l+r-1<c?(l=c,delete o[i],s()):o[i]=requestAnimationFrame(t)}),i},n=function(s){o[s]&&cancelAnimationFrame(o[s])}):(e=function(s){return setTimeout(s,r)},n=function(s){return clearTimeout(s)}),{frame:e,cancel:n}}(),Ce=function(){var r,e,n={};function o(l){function s(i,t){l.postMessage({options:i||{},callback:t})}l.init=function(t){var c=t.transferControlToOffscreen();l.postMessage({canvas:c},[c])},l.fire=function(t,c,u){if(e)return s(t,null),e;var g=Math.random().toString(36).slice(2);return e=T(function(f){function p(b){b.data.callback===g&&(delete n[g],l.removeEventListener("message",p),e=null,I.clear(),u(),f())}l.addEventListener("message",p),s(t,g),n[g]=p.bind(null,{data:{callback:g}})}),e},l.reset=function(){l.postMessage({reset:!0});for(var t in n)n[t](),delete n[t]}}return function(){if(r)return r;if(!k&&A){var l=["var CONFETTI, SIZE = {}, module = {};","("+_.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{r=new Worker(URL.createObjectURL(new Blob([l])))}catch(s){return typeof console!==void 0&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",s),null}o(r)}return r}}(),Ne={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function Ve(r,e){return e?e(r):r}function ke(r){return r!=null}function v(r,e,n){return Ve(r&&ke(r[e])?r[e]:Ne[e],n)}function Be(r){return r<0?0:Math.floor(r)}function Te(r,e){return Math.floor(Math.random()*(e-r))+r}function R(r){return parseInt(r,16)}function Ie(r){return r.map(Pe)}function Pe(r){var e=String(r).replace(/[^0-9a-f]/gi,"");return e.length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),{r:R(e.substring(0,2)),g:R(e.substring(2,4)),b:R(e.substring(4,6))}}function Re(r){var e=v(r,"origin",Object);return e.x=v(e,"x",Number),e.y=v(e,"y",Number),e}function Fe(r){r.width=document.documentElement.clientWidth,r.height=document.documentElement.clientHeight}function Se(r){var e=r.getBoundingClientRect();r.width=e.width,r.height=e.height}function Ae(r){var e=document.createElement("canvas");return e.style.position="fixed",e.style.top="0px",e.style.left="0px",e.style.pointerEvents="none",e.style.zIndex=r,e}function Le(r,e,n,o,l,s,i,t,c){r.save(),r.translate(e,n),r.rotate(s),r.scale(o,l),r.arc(0,0,1,i,t,c),r.restore()}function Oe(r){var e=r.angle*(Math.PI/180),n=r.spread*(Math.PI/180);return{x:r.x,y:r.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:r.startVelocity*.5+Math.random()*r.startVelocity,angle2D:-e+(.5*n-Math.random()*n),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:r.color,shape:r.shape,tick:0,totalTicks:r.ticks,decay:r.decay,drift:r.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:r.gravity*3,ovalScalar:.6,scalar:r.scalar,flat:r.flat}}function ze(r,e){e.x+=Math.cos(e.angle2D)*e.velocity+e.drift,e.y+=Math.sin(e.angle2D)*e.velocity+e.gravity,e.velocity*=e.decay,e.flat?(e.wobble=0,e.wobbleX=e.x+10*e.scalar,e.wobbleY=e.y+10*e.scalar,e.tiltSin=0,e.tiltCos=0,e.random=1):(e.wobble+=e.wobbleSpeed,e.wobbleX=e.x+10*e.scalar*Math.cos(e.wobble),e.wobbleY=e.y+10*e.scalar*Math.sin(e.wobble),e.tiltAngle+=.1,e.tiltSin=Math.sin(e.tiltAngle),e.tiltCos=Math.cos(e.tiltAngle),e.random=Math.random()+2);var n=e.tick++/e.totalTicks,o=e.x+e.random*e.tiltCos,l=e.y+e.random*e.tiltSin,s=e.wobbleX+e.random*e.tiltCos,i=e.wobbleY+e.random*e.tiltSin;if(r.fillStyle="rgba("+e.color.r+", "+e.color.g+", "+e.color.b+", "+(1-n)+")",r.beginPath(),L&&e.shape.type==="path"&&typeof e.shape.path=="string"&&Array.isArray(e.shape.matrix))r.fill(We(e.shape.path,e.shape.matrix,e.x,e.y,Math.abs(s-o)*.1,Math.abs(i-l)*.1,Math.PI/10*e.wobble));else if(e.shape.type==="bitmap"){var t=Math.PI/10*e.wobble,c=Math.abs(s-o)*.1,u=Math.abs(i-l)*.1,g=e.shape.bitmap.width*e.scalar,f=e.shape.bitmap.height*e.scalar,p=new DOMMatrix([Math.cos(t)*c,Math.sin(t)*c,-Math.sin(t)*u,Math.cos(t)*u,e.x,e.y]);p.multiplySelf(new DOMMatrix(e.shape.matrix));var b=r.createPattern(I.transform(e.shape.bitmap),"no-repeat");b.setTransform(p),r.globalAlpha=1-n,r.fillStyle=b,r.fillRect(e.x-g/2,e.y-f/2,g,f),r.globalAlpha=1}else if(e.shape==="circle")r.ellipse?r.ellipse(e.x,e.y,Math.abs(s-o)*e.ovalScalar,Math.abs(i-l)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI):Le(r,e.x,e.y,Math.abs(s-o)*e.ovalScalar,Math.abs(i-l)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI);else if(e.shape==="star")for(var d=Math.PI/2*3,M=4*e.scalar,w=8*e.scalar,y=e.x,E=e.y,C=5,x=Math.PI/C;C--;)y=e.x+Math.cos(d)*w,E=e.y+Math.sin(d)*w,r.lineTo(y,E),d+=x,y=e.x+Math.cos(d)*M,E=e.y+Math.sin(d)*M,r.lineTo(y,E),d+=x;else r.moveTo(Math.floor(e.x),Math.floor(e.y)),r.lineTo(Math.floor(e.wobbleX),Math.floor(l)),r.lineTo(Math.floor(s),Math.floor(i)),r.lineTo(Math.floor(o),Math.floor(e.wobbleY));return r.closePath(),r.fill(),e.tick<e.totalTicks}function He(r,e,n,o,l){var s=e.slice(),i=r.getContext("2d"),t,c,u=T(function(g){function f(){t=c=null,i.clearRect(0,0,o.width,o.height),I.clear(),l(),g()}function p(){k&&!(o.width===N.width&&o.height===N.height)&&(o.width=r.width=N.width,o.height=r.height=N.height),!o.width&&!o.height&&(n(r),o.width=r.width,o.height=r.height),i.clearRect(0,0,o.width,o.height),s=s.filter(function(b){return ze(i,b)}),s.length?t=P.frame(p):f()}t=P.frame(p),c=f});return{addFettis:function(g){return s=s.concat(g),u},canvas:r,promise:u,reset:function(){t&&P.cancel(t),c&&c()}}}function z(r,e){var n=!r,o=!!v(e||{},"resize"),l=!1,s=v(e,"disableForReducedMotion",Boolean),i=A&&!!v(e||{},"useWorker"),t=i?Ce():null,c=n?Fe:Se,u=r&&t?!!r.__confetti_initialized:!1,g=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,f;function p(d,M,w){for(var y=v(d,"particleCount",Be),E=v(d,"angle",Number),C=v(d,"spread",Number),x=v(d,"startVelocity",Number),Ue=v(d,"decay",Number),$e=v(d,"gravity",Number),Ze=v(d,"drift",Number),W=v(d,"colors",Ie),qe=v(d,"ticks",Number),j=v(d,"shapes"),Ge=v(d,"scalar"),Je=!!v(d,"flat"),D=Re(d),U=y,S=[],Ke=r.width*D.x,Qe=r.height*D.y;U--;)S.push(Oe({x:Ke,y:Qe,angle:E,spread:C,startVelocity:x,color:W[U%W.length],shape:j[Te(0,j.length)],ticks:qe,decay:Ue,gravity:$e,drift:Ze,scalar:Ge,flat:Je}));return f?f.addFettis(S):(f=He(r,S,c,M,w),f.promise)}function b(d){var M=s||v(d,"disableForReducedMotion",Boolean),w=v(d,"zIndex",Number);if(M&&g)return T(function(x){x()});n&&f?r=f.canvas:n&&!r&&(r=Ae(w),document.body.appendChild(r)),o&&!u&&c(r);var y={width:r.width,height:r.height};t&&!u&&t.init(r),u=!0,t&&(r.__confetti_initialized=!0);function E(){if(t){var x={getBoundingClientRect:function(){if(!n)return r.getBoundingClientRect()}};c(x),t.postMessage({resize:{width:x.width,height:x.height}});return}y.width=y.height=null}function C(){f=null,o&&(l=!1,h.removeEventListener("resize",E)),n&&r&&(document.body.contains(r)&&document.body.removeChild(r),r=null,u=!1)}return o&&!l&&(l=!0,h.addEventListener("resize",E,!1)),t?t.fire(d,y,C):p(d,y,C)}return b.reset=function(){t&&t.reset(),f&&f.reset()},b}var F;function H(){return F||(F=z(null,{useWorker:!0,resize:!0})),F}function We(r,e,n,o,l,s,i){var t=new Path2D(r),c=new Path2D;c.addPath(t,new DOMMatrix(e));var u=new Path2D;return u.addPath(c,new DOMMatrix([Math.cos(i)*l,Math.sin(i)*l,-Math.sin(i)*s,Math.cos(i)*s,n,o])),u}function je(r){if(!L)throw new Error("path confetti are not supported in this browser");var e,n;typeof r=="string"?e=r:(e=r.path,n=r.matrix);var o=new Path2D(e),l=document.createElement("canvas"),s=l.getContext("2d");if(!n){for(var i=1e3,t=i,c=i,u=0,g=0,f,p,b=0;b<i;b+=2)for(var d=0;d<i;d+=2)s.isPointInPath(o,b,d,"nonzero")&&(t=Math.min(t,b),c=Math.min(c,d),u=Math.max(u,b),g=Math.max(g,d));f=u-t,p=g-c;var M=10,w=Math.min(M/f,M/p);n=[w,0,0,w,-Math.round(f/2+t)*w,-Math.round(p/2+c)*w]}return{type:"path",path:e,matrix:n}}function De(r){var e,n=1,o="#000000",l='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof r=="string"?e=r:(e=r.text,n="scalar"in r?r.scalar:n,l="fontFamily"in r?r.fontFamily:l,o="color"in r?r.color:o);var s=10*n,i=""+s+"px "+l,t=new OffscreenCanvas(s,s),c=t.getContext("2d");c.font=i;var u=c.measureText(e),g=Math.ceil(u.actualBoundingBoxRight+u.actualBoundingBoxLeft),f=Math.ceil(u.actualBoundingBoxAscent+u.actualBoundingBoxDescent),p=2,b=u.actualBoundingBoxLeft+p,d=u.actualBoundingBoxAscent+p;g+=p+p,f+=p+p,t=new OffscreenCanvas(g,f),c=t.getContext("2d"),c.font=i,c.fillStyle=o,c.fillText(e,b,d);var M=1/n;return{type:"bitmap",bitmap:t.transferToImageBitmap(),matrix:[M,0,0,M,-g*M/2,-f*M/2]}}m.exports=function(){return H().apply(this,arguments)},m.exports.reset=function(){H().reset()},m.exports.create=z,m.exports.shapeFromPath=je,m.exports.shapeFromText=De})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),B,!1);const q=B.exports;B.exports.create;const G={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"};function J(_,h){return a.openBlock(),a.createElementBlock("svg",G,h[0]||(h[0]=[a.createElementVNode("path",{fill:"currentColor",d:"M11 2.05v2.012A8.001 8.001 0 0 0 12 20a8 8 0 0 0 7.938-7h2.013c-.502 5.053-4.766 9-9.951 9c-5.523 0-10-4.477-10-10c0-5.185 3.947-9.449 9-9.95m9 3.364l-8 8L10.586 12l8-8H14V2h8v8h-2z"},null,-1)]))}const K=a.markRaw({name:"ri-share-circle-line",render:J}),Q={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"};function X(_,h){return a.openBlock(),a.createElementBlock("svg",Q,h[0]||(h[0]=[a.createElementVNode("path",{fill:"currentColor",d:"M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m1 2v14h16V5zm16 7l-3.535 3.536l-1.415-1.415L17.172 12L15.05 9.879l1.415-1.415zM6.828 12l2.122 2.121l-1.414 1.415L4 12l3.536-3.536L8.95 9.88zm4.416 5H9.116l3.64-10h2.128z"},null,-1)]))}const Y=a.markRaw({name:"ri-code-box-line",render:X}),ee={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"};function re(_,h){return a.openBlock(),a.createElementBlock("svg",ee,h[0]||(h[0]=[a.createElementVNode("path",{fill:"currentColor",d:"M2 3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007zM11 5H4v14h7zm2 0v14h7V5zm1 2h5v2h-5zm0 3h5v2h-5z"},null,-1)]))}const ae=a.markRaw({name:"ri-book-read-line",render:re}),ne={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"};function te(_,h){return a.openBlock(),a.createElementBlock("svg",ne,h[0]||(h[0]=[a.createElementVNode("path",{fill:"currentColor",d:"M4 16h16V5H4zm9 2v2h4v2H7v-2h4v-2H2.992A1 1 0 0 1 2 16.992V4.008C2 3.451 2.455 3 2.992 3h18.016c.548 0 .992.449.992 1.007v12.985c0 .557-.455 1.008-.992 1.008z"},null,-1)]))}const oe=a.markRaw({name:"ri-computer-line",render:te}),le={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"};function se(_,h){return a.openBlock(),a.createElementBlock("svg",le,h[0]||(h[0]=[a.createElementVNode("path",{fill:"currentColor",d:"m13.172 12l-4.95-4.95l1.414-1.413L16 12l-6.364 6.364l-1.414-1.415z"},null,-1)]))}const V=a.markRaw({name:"ri-arrow-right-s-line",render:se}),ie={id:"plugin-starter"},ce={class:"wrapper"},de={class:"docs"},he={href:"https://docs.halo.run/developer-guide/plugin/publish",class:"docs__box",target:"_blank"},me={class:"docs__box-title"},ue={class:"docs__box-arrow"},fe={href:"https://docs.halo.run/category/%E5%9F%BA%E7%A1%80",class:"docs__box",target:"_blank"},ge={class:"docs__box-title"},pe={class:"docs__box-arrow"},ve={href:"https://docs.halo.run/developer-guide/plugin/examples/todolist",class:"docs__box group",target:"_blank"},be={class:"docs__box-title"},Me={class:"docs__box-arrow"},we={href:"https://docs.halo.run/category/api-%E5%8F%82%E8%80%83",class:"docs__box",target:"_blank"},ye={class:"docs__box-title"},_e={class:"docs__box-arrow"},xe=((_,h)=>{const m=_.__vccOpts||_;for(const[k,N]of h)m[k]=N;return m})(a.defineComponent({__name:"HomeView",setup(_){return a.onMounted(()=>{q({particleCount:100,spread:70,origin:{y:.6,x:.58}})}),(h,m)=>(a.openBlock(),a.createElementBlock("section",ie,[a.createElementVNode("div",ce,[m[8]||(m[8]=a.createElementVNode("span",{class:"title"}," 你已经成功运行起了插件！ ",-1)),m[9]||(m[9]=a.createElementVNode("span",{class:"message"},"你可以点击下方文档继续下一步",-1)),a.createElementVNode("div",de,[a.createElementVNode("a",he,[a.createElementVNode("h2",me,[a.createVNode(a.unref(K)),m[0]||(m[0]=a.createTextVNode("发布一个插件"))]),m[1]||(m[1]=a.createElementVNode("span",{class:"docs__box-message"}," 了解如何与我们的社区分享您的扩展。 ",-1)),a.createElementVNode("span",ue,[a.createVNode(a.unref(V))])]),a.createElementVNode("a",fe,[a.createElementVNode("h2",ge,[a.createVNode(a.unref(oe)),m[2]||(m[2]=a.createTextVNode("基础概览"))]),m[3]||(m[3]=a.createElementVNode("span",{class:"docs__box-message"}," 了解插件的项目结构、生命周期、资源配置等。 ",-1)),a.createElementVNode("span",pe,[a.createVNode(a.unref(V))])]),a.createElementVNode("a",ve,[a.createElementVNode("h2",be,[a.createVNode(a.unref(ae)),m[4]||(m[4]=a.createTextVNode("示例插件"))]),m[5]||(m[5]=a.createElementVNode("span",{class:"docs__box-message"},"帮助你从 0 到 1 完成一个插件。",-1)),a.createElementVNode("span",Me,[a.createVNode(a.unref(V))])]),a.createElementVNode("a",we,[a.createElementVNode("h2",ye,[a.createVNode(a.unref(Y)),m[6]||(m[6]=a.createTextVNode("API 参考"))]),m[7]||(m[7]=a.createElementVNode("span",{class:"docs__box-message"},"插件中的 API 列表。",-1)),a.createElementVNode("span",_e,[a.createVNode(a.unref(V))])])])])]))}}),[["__scopeId","data-v-f2493231"]]);return $.definePlugin({components:{},routes:[{parentName:"Root",route:{path:"/example",name:"Example",component:xe,meta:{title:"示例页面",searchable:!0,menu:{name:"示例页面",group:"示例分组",icon:a.markRaw(Z.IconPlug),priority:0}}}}],extensionPoints:{}})}(HaloConsoleShared,Vue,HaloComponents);
