(this.webpackJsonpPolymatic=this.webpackJsonpPolymatic||[]).push([[0],Array(24).concat([function(t,e,a){t.exports=a.p+"static/media/agogo1.b8f6e210.wav"},function(t,e,a){t.exports=a.p+"static/media/agogo2.5844966c.wav"},function(t,e,a){t.exports=a.p+"static/media/bass.b2419d4f.wav"},function(t,e,a){t.exports=a.p+"static/media/block.3753c44b.wav"},function(t,e,a){t.exports=a.p+"static/media/bum.4c11d5fa.wav"},function(t,e,a){t.exports=a.p+"static/media/claves.400c9ef3.wav"},function(t,e,a){t.exports=a.p+"static/media/conga1.41b2f57f.wav"},function(t,e,a){t.exports=a.p+"static/media/conga2.887c0c16.wav"},function(t,e,a){t.exports=a.p+"static/media/cymbal.950d832b.wav"},function(t,e,a){t.exports=a.p+"static/media/djembe1.f3e648cb.wav"},function(t,e,a){t.exports=a.p+"static/media/djembe3.acef368f.wav"},function(t,e,a){t.exports=a.p+"static/media/djembe2.d38ab3d2.wav"},function(t,e,a){t.exports=a.p+"static/media/hit.a315148b.wav"},function(t,e,a){t.exports=a.p+"static/media/hithat.950d832b.wav"},function(t,e,a){t.exports=a.p+"static/media/kick1.e63d68a9.wav"},function(t,e,a){t.exports=a.p+"static/media/kick2.18445a5e.wav"},function(t,e,a){t.exports=a.p+"static/media/kicklow.c09eab14.wav"},function(t,e,a){t.exports=a.p+"static/media/snare.96dbe59f.wav"},function(t,e,a){t.exports=a.p+"static/media/tamborim.a6cbfb58.wav"},,,,function(t,e,a){t.exports=a(72)},,,,,function(t,e,a){},,,,,,,,,,,function(t,e,a){"use strict";a.r(e),e.default=function(t){var e=25,a=null;t.onmessage=function(t){"interval"===t.data&&(e=t.data.interval),"start"===t.data&&(a=setInterval((function(){postMessage("tick")}),e)),"stop"===t.data&&(clearInterval(a),a=null)}}},,,,,,,,,function(t,e,a){},function(t,e,a){"use strict";a.r(e);var n=a(0),i=a.n(n),r=a(21),s=a.n(r),o=(a(51),a(45)),c=a(7),l=a(14),u=a(15),h=a(10),p=a.n(h),m=a(22),f=a.n(m),d=a(16),v=a.n(d),y=v.a.watch;function w(t,e){var a=this;return a._createSequence(t,e),y(this,["pulses","steps"],(function(){a.update(this.pulses,this.steps)})),this}w.prototype.update=function(t,e){return this._createSequence(t,e),this},w.prototype.shift=function(t){var e=t>this.seq.length?t-=this.seq.length:t;if(e===this.seq.length)return this;for(var a=this.seq.splice(this.seq.length-e,e),n=0;n<a.length;n++)this.seq.unshift(a[n]);return this},w.prototype._createSequence=function(t,e){var a=typeof t;return"number"===a?(this.pulses=t,this.steps=e||t,this.seq=f()(this.pulses,this.steps).split("")):"string"===a&&(this.steps=t.length,this.seq=t.split("")),this};var b=w,g=a(23),k=a.n(g);function _(t,e){var a=this;if(!t)throw new Error("Context is mandatory");if(!e)throw new Error("Callback is mandatory");this.context=t,this.steps=16,this.tempo=120,this.callback=e,this.look_ahead=1,this._step=1,this._scheduler_interval=20,this._next_event_time=0,this._first=!0,this._is_running=!1,this._worker=k()(62),this._worker.onmessage=function(t){"tick"===t.data&&a._is_running&&a._scheduler()},this._worker.postMessage({interval:a._scheduler_interval})}_.prototype.start=function(t){this._is_running?console.log("already started"):(this._is_running=!0,this._worker.postMessage("start"))},_.prototype.pause=function(){this._is_running=!1,this._worker.postMessage("stop")},_.prototype.stop=function(){this._first=!0,this._step=1,this._is_running=!1,this._worker.postMessage("stop")},_.prototype._scheduler=function(){for(1===this._step&&this._first&&(this._next_event_time=this.context.currentTime);this._next_event_time<this.context.currentTime+this.look_ahead;){var t=this._next_event_time-this.context.currentTime;this.callback(this._next_event_time,this._step,t),this._next()}},_.prototype._next=function(){this._step++,this._first&&(this._next_event_time=this.context.currentTime,this._first=!1),this._step>this.steps&&(this._step=1),this._next_event_time+=60/this.tempo*4/this.steps};var x=_,E=v.a.watch;function j(t,e,a,n,i,r,s){s||(s=function(){});var o=this;this.id=t,this.on=r,this.off=s,this.tempo=a,this.clavis=n,o.metro=new x(e,(function(t,e,a){o.metro.steps!==i.seq.length&&(o.metro.steps=i.seq.length),"1"===i.seq[e-1]?(o.on(t,e,a),setTimeout((function(){n.setCurrentStep(e)}),1e3)):(o.off(t,e,a),setTimeout((function(){n.setCurrentStep(e)}),1e3))})),this.metro.steps=i.seq.length,this.metro.tempo=this.tempo,E(o,["tempo"],(function(){o.metro.tempo=o.tempo}))}j.prototype.start=function(){return this.metro.start(),this},j.prototype.pause=function(){return this.metro.pause(),this},j.prototype.stop=function(){return this.metro.stop(),this};var S=j,T=function(){function t(e){var a=e.context,n=e.tempo;Object(l.a)(this,t),this.context=a,this.tempo=n||120,this.layers=[]}return Object(u.a)(t,[{key:"layer",value:function(t,e,a,n){return new S(p.a.generate(),this.context,this.tempo,e,t,a,n)}},{key:"pattern",value:function(t,e){return new b(t,e)}},{key:"add",value:function(t){this.layers.push(t)}},{key:"remove",value:function(t){t.metro.stop(),this.layers=this.layers.filter((function(e){return e.id!==t.id}))}},{key:"start",value:function(){this.layers.forEach((function(t){t.start()}))}},{key:"pause",value:function(){this.layers.forEach((function(t){t.pause()}))}},{key:"load",value:function(t,e,a,n){var i=new XMLHttpRequest;i.open("GET",e,!0),i.responseType="arraybuffer",i.onload=function(){t.decodeAudioData(i.response,a,n)},i.onerror=n,i.send()}},{key:"envelope",value:function(t,e,a){a||(a={});var n=a.peak||t.defaultValue;0===a.start&&(a.start=1e-6);var i=a.start||t.value,r=a.attack||.1,s=a.decay||0,o=a.sustain||n,c=a.release||.5;t.setValueAtTime(i,e),t.linearRampToValueAtTime(n,e+r),t.linearRampToValueAtTime(o,e+r+s),t.linearRampToValueAtTime(0,e+r+s+c)}},{key:"changeTempo",value:function(t){var e=!0,a=!1,n=void 0;try{for(var i,r=this.layers[Symbol.iterator]();!(e=(i=r.next()).done);e=!0){i.value.metro.tempo=t}}catch(s){a=!0,n=s}finally{try{e||null==r.return||r.return()}finally{if(a)throw n}}}}]),t}(),P=function(){function t(){Object(l.a)(this,t),this.canvas=null,this.context=null,this.pattern=null,this.tempo=0,this.animate=!1,this.lastRender=Date.now(),this.draw=this.draw.bind(this),this.currentStep=1,this.patternPos={}}return Object(u.a)(t,[{key:"configure",value:function(t,e,a){this.canvas=t,this.context=t.getContext("2d"),this.pattern=e,this.tempo=a}},{key:"setCurrentStep",value:function(t){this.currentStep=t}},{key:"play",value:function(){this.animate=!0,window.requestAnimationFrame(this.draw)}},{key:"pause",value:function(){this.animate=!1}},{key:"draw",value:function(){var t=this.canvas,e=this.context,a=this.pattern,n="20px",i=2,r="#ccc",s="#000",o=4,l="#000",u="#000",h=2,p="#ccc",m="#ccc",f=5,d="#fc0",v="#fc0",y=[200,200],w=y[0],b=y[1],g=80,k=2*Math.PI/a.length,_=-.5*Math.PI;function x(t,a,n){var i=n.radius,r=n.stroke,s=n.fill;e.strokeStyle=r,e.fillStyle=s,e.beginPath(),e.arc(t,a,i,0,2*Math.PI),e.fill(),e.stroke()}function E(t,e){x(t,e,{radius:o,stroke:l,fill:u})}function j(t,e){x(t,e,{radius:h,stroke:p,fill:m})}t.style.padding=n,t.width=w,t.height=b,e.clearRect(0,0,w,b),e.lineWidth=i,e.strokeStyle=r,e.beginPath(),e.arc(w/2,b/2,g,0,2*Math.PI),e.stroke();var S=[];function T(t,e){return[Math.cos(t)*e+w/2,Math.sin(t)*e+b/2]}for(var P=0;P<a.length;P++){var q=T(_+k*P,g),C=Object(c.a)(q,2),O=C[0],A=C[1];"1"===a[P]?(E(O,A),S.push([O,A])):j(O,A),this.patternPos[P]={x:O,y:A}}!function(t){e.strokeStyle=s,e.beginPath(),e.moveTo(t[0][0],t[0][1]);for(var a=1;a<t.length;a++)e.lineTo(t[a][0],t[a][1]);e.closePath(),e.stroke()}(S),function(t,e){x(t,e,{radius:f,stroke:d,fill:v})}(this.patternPos[this.currentStep-1].x,this.patternPos[this.currentStep-1].y),this.animate&&window.requestAnimationFrame(this.draw)}}]),t}(),q=a(24),C=a.n(q),O=a(25),A=a.n(O),M=a(26),N=a.n(M),I=a(27),R=a.n(I),L=a(28),V=a.n(L),B=a(29),W=a.n(B),D=a(30),F=a.n(D),J=a(31),z=a.n(J),G=a(32),H=a.n(G),X=a(33),$=a.n(X),K=a(34),Q=a.n(K),U=a(35),Y=a.n(U),Z=a(36),tt=a.n(Z),et=a(37),at=a.n(et),nt=a(38),it=a.n(nt),rt=a(39),st=a.n(rt),ot=a(40),ct=a.n(ot),lt=a(41),ut=a.n(lt),ht=a(42),pt=a.n(ht),mt={agogo1:C.a,agogo2:A.a,bass:N.a,block:R.a,bum:V.a,claves:W.a,conga1:F.a,conga2:z.a,cymbal:H.a,djembe1:$.a,djembe2:Q.a,djembe3:Y.a,hit:tt.a,hithat:at.a,kick1:it.a,kick2:st.a,kicklow:ct.a,snare:ut.a,tamborim:pt.a},ft=a(8),dt=a(9);function vt(t){var e=t.guia,a=t.removeLayer,r=t.preview,s=Object(n.useRef)(),o=e.sequence,c=e.tempo,l=e.layer,u=e.clavis;Object(n.useEffect)((function(){u.configure(s.current,o,c),u.play()}));return i.a.createElement("div",{className:"layer"},i.a.createElement("canvas",{id:p.a.generate(),ref:s,width:640,height:425}),r&&i.a.createElement("p",{className:"Preview"},"Pr\xe9-visualiza\xe7\xe3o"),a&&i.a.createElement("div",{className:"controls"},i.a.createElement("button",{onClick:function(){return l.start(),void u.play()}},i.a.createElement(ft.a,{icon:dt.a})),i.a.createElement("button",{onClick:function(){return l.stop(),void u.pause()}},i.a.createElement(ft.a,{icon:dt.b})),i.a.createElement("button",{onClick:function(){return a(e)}},i.a.createElement(ft.a,{icon:dt.c}))))}var yt=a(74),wt=a(77),bt=a(75),gt=a(44),kt=a(76);var _t=function(t){var e=t.layers,a=t.pattern,n=t.handlePattern,r=t.setSample,s=(t.beet,t.tempo),o=t.setTempo,c=t.addLayer;return i.a.createElement("div",{className:"header"},i.a.createElement("div",null,i.a.createElement("h1",{className:"header-logo"},"Polymatic ",i.a.createElement("small",null,"v3.3"))),i.a.createElement("div",{className:"header-controls"},i.a.createElement(yt.a,{"aria-label":"Basic example"},i.a.createElement(wt.a,{variant:"secondary",onClick:function(){return function(){var t=!0,a=!1,n=void 0;try{for(var i,r=e[Symbol.iterator]();!(t=(i=r.next()).done);t=!0){var s=i.value;s.layer.start(),s.clavis.play()}}catch(o){a=!0,n=o}finally{try{t||null==r.return||r.return()}finally{if(a)throw n}}}()}},i.a.createElement(ft.a,{icon:dt.a})),i.a.createElement(wt.a,{variant:"secondary",onClick:function(){return function(){var t=!0,a=!1,n=void 0;try{for(var i,r=e[Symbol.iterator]();!(t=(i=r.next()).done);t=!0){var s=i.value;s.layer.stop(),s.clavis.pause()}}catch(o){a=!0,n=o}finally{try{t||null==r.return||r.return()}finally{if(a)throw n}}}()}},i.a.createElement(ft.a,{icon:dt.b})))),i.a.createElement("div",{className:"header-form"},i.a.createElement(bt.a,null,i.a.createElement(bt.a.Prepend,null,i.a.createElement(bt.a.Text,{id:"basic-addon3"},"Padr\xe3o")),i.a.createElement(gt.a,{placeholder:"padr\xe3o",value:a,onChange:function(t){return n(t.target.value)}})),i.a.createElement(bt.a,null,i.a.createElement(bt.a.Prepend,null,i.a.createElement(bt.a.Text,{id:"basic-addon3"},"Tempo")),i.a.createElement(gt.a,{placeholder:"tempo",value:s,onChange:function(t){return o(t.target.value)}})),i.a.createElement(kt.a.Control,{as:"select",onChange:function(t){return r(t.target.value)}},Object.keys(mt).map((function(t,e){return i.a.createElement("option",{key:e,value:t},t)}))),i.a.createElement(wt.a,{className:"ml-3",onClick:function(){return c()}},"Adicionar")))};a(70),a(71);var xt=function(){var t=Object(n.useState)("1000101000101000"),e=Object(c.a)(t,2),a=e[0],r=e[1],s=Object(n.useState)(120),l=Object(c.a)(s,2),u=l[0],h=l[1],m=Object(n.useState)([]),f=Object(c.a)(m,2),d=f[0],v=f[1],y=Object(n.useState)("agogo1"),w=Object(c.a)(y,2),b=w[0],g=w[1],k=Object(n.useState)(!0),_=Object(c.a)(k,2),x=_[0],E=_[1];window.AudioContext=window.AudioContext||window.webkitAudioContext;var j=new AudioContext,S=new T({context:j,tempo:u}),q=function(t){S.remove(t.layer),t.clavis.pause(),v(d.filter((function(e){return e.id!==t.id})))};function C(t,e){var a=j.createBufferSource();S.load(S.context,mt[b],(function(e){a.buffer=e,a.connect(j.destination),a.start(t)}))}var O={layers:d,pattern:a,handlePattern:function(t){E(!0),r(t)},setSample:g,beet:S,tempo:u,setTempo:h,addLayer:function(){E(!1);var t=S.pattern(a),e=new P,n={layer:S.layer(t,e,C)};n.layer.tempo=u,S.add(n.layer),S.start(),v([].concat(Object(o.a)(d),[{id:p.a.generate(),sequence:a,tempo:u,layer:n.layer,clavis:e}]))}};return i.a.createElement("div",{className:"App"},i.a.createElement(_t,O),i.a.createElement("div",{className:"wrapper"},d.map((function(t){return i.a.createElement(vt,{key:t.id,guia:t,removeLayer:q})})),x&&a.length>1&&i.a.createElement(vt,{guia:{sequence:a,clavis:new P,tempo:u},preview:!0})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(xt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}]),[[46,1,2]]]);
//# sourceMappingURL=main.cedf6b2f.chunk.js.map