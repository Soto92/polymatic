(this.webpackJsonpPolymatic=this.webpackJsonpPolymatic||[]).push([[0],{102:function(e,t,a){},117:function(e,t,a){"use strict";a.r(t),t.default=function(e){var t=25,a=null;e.onmessage=function(e){"interval"===e.data&&(t=e.data.interval),"start"===e.data&&(a=setInterval((function(){postMessage("tick")}),t)),"stop"===e.data&&(clearInterval(a),a=null)}}},122:function(e,t,a){},123:function(e,t,a){},124:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(28),r=a.n(i),o=(a(102),a(13)),c=a(32),l=a(30),u=a(62);var m=function(){return s.a.createElement("div",{className:"about"},s.a.createElement("div",{className:"col-8 offset-2"},s.a.createElement("h3",null,"Polymatic!"),s.a.createElement("p",null,"projeto idealizado por Gil Amancio e Guilherme Guerra"),s.a.createElement("p",null,"O Polymatic \xe9 um aplicativo para fazer m\xfasica ou dar aula de m\xfasica a partir de outros paradigmas que orientam a cria\xe7\xe3o musical. Ele \xe9 inspirado nos modos de produ\xe7\xe3o da m\xfasica africana e da di\xe1spora. N\xe3o \xe9 um software para fazer m\xfasica no computador, mas sim, um aplicativo para fazer m\xfasica assistida por computador, ou seja, o computador \xe9 uma ferramenta para instigar a cria\xe7\xe3o e a execu\xe7\xe3o musical coletiva que acontece junto com o computador."),s.a.createElement("p",null,"O Polymatic \xe9 um aplicativo que gera padr\xf5es r\xedtmicos m\xednimos. Esses padr\xf5es t\xeam v\xe1rios nomes em diferentes lugares, clave em Cuba, timeline nos Estados Unidos e Europa, e no Brasil resolvi cham\xe1-los de Guia."),s.a.createElement("p",null,"A escolha do nome Guia veio da associa\xe7\xe3o dos registros desses padr\xf5es r\xedtmicos de forma circular, feito pelo m\xfasico Safi-alDin em Bagd\xe1 no ano de 1280, com as Guias usadas pelo povo dos terreiros."),s.a.createElement("p",null,"Do ponto de vista musical a guia \xe9 um ostinato, que se repete sem varia\xe7\xe3o, ao longo de uma pe\xe7a musical. Ela atua como um dispositivo estruturador da cria\xe7\xe3o musical, d\xe1 o tempero da levada e atua tamb\xe9m como um cron\xf4metro."),s.a.createElement("p",null,"Nos terreiros, a palavra guia tamb\xe9m tem v\xe1rios significados, ela pode se referir tanto ao colar utilizado pelas pessoas que frequentam o terreiro, como tamb\xe9m as entidades que s\xe3o chamadas de guias."),s.a.createElement("p",null,"Acredito que chamar de guia os padr\xf5es r\xedtmicos gerados pelo Polymatic, vai nos aproximar do pensamento das culturas dos povos africanos e das di\xe1sporas e de suas experi\xeancias coletivas de fazer m\xfasica. Uma m\xfasica que n\xe3o se separa da dan\xe7a e da vida."),s.a.createElement("p",null,"Esperamos que o Polymatic possa possibilitar que voc\xea re\xfana a fam\xedlia, as/os amigos/as e se for professor as/os estudantes para juntos fazerem m\xfasica a partir do pensamento musical africano e da di\xe1spora."),s.a.createElement("p",null,"Mas como isso acontece? Leia o nosso manual."),s.a.createElement("p",null,s.a.createElement("a",{href:"".concat("","/manual.pdf"),target:"_blank",rel:"noopener noreferrer"},"Baixar manual"))))},p=a(57),d=a.n(p),h=(a(105),a(11)),f=a.n(h),v=a(26),b=a(27),g=a(129),y=a(67),E=a(94),w=a(9),j={previewPattern:"",previewVisibility:!1,polymetric:!1,claves:[],isPlaying:!1,instruments:null,context:null},k=Object(n.createContext)(j),x=function(e){var t=e.children,a=k.Provider,i=s.a.useCallback((function(e,t){switch(t.type){case"load.app":return Object(w.a)(Object(w.a)({},e),{},{instruments:t.instruments,context:t.context});case"previewPattern.update":return Object(w.a)(Object(w.a)({},e),{},{previewPattern:t.pattern});case"preview.visibility":return Object(w.a)(Object(w.a)({},e),{},{previewVisibility:t.visible});case"claves.add":return Object(w.a)(Object(w.a)({},e),{},{claves:[].concat(Object(E.a)(e.claves),[t.clave])});case"claves.remove":var a=e.claves.filter((function(e){return e.id!==t.id}));return Object(w.a)(Object(w.a)({},e),{},{claves:a,polymetric:a.length>0&&e.polymetric});case"claves.removeAll":return Object(w.a)(Object(w.a)({},e),{},{claves:[],polymetric:!1});case"toggle.polymetric":return Object(w.a)(Object(w.a)({},e),{},{polymetric:!e.polymetric});case"start.all":return Object(w.a)(Object(w.a)({},e),{},{isPlaying:!0});case"stop.all":return Object(w.a)(Object(w.a)({},e),{},{isPlaying:!1});default:throw new Error("C\xeas\xe1siessionibuspassnasavassi?")}}),[]),r=Object(n.useReducer)(i,j),c=Object(o.a)(r,2),l=c[0],u=c[1];return s.a.createElement(a,{value:{state:l,dispatch:u}},t)};k.Consumer;function O(e){var t=e.clave,a=Object(n.useRef)(),i=Object(n.useState)(100),r=Object(o.a)(i,2),c=r[0],l=r[1],u=t.pattern.sequence,m=t.tempo,p=t.clavis,h=t.instrument,E=Object(n.useState)(0),w=Object(o.a)(E,2),j=w[0],x=w[1],O=Object(n.useContext)(k).dispatch,_=Object(n.useContext)(k).state;Object(n.useEffect)((function(){p.configure(a.current,u,m),p.draw(),_.isPlaying&&t.start()}),[_.isPlaying,t,p,u,m]);return s.a.createElement("div",{className:"layer"},s.a.createElement("canvas",{id:f.a.generate(),ref:a,width:640,height:425}),s.a.createElement("div",{className:"mt-2 volume"},s.a.createElement("span",{className:"mr-2"},"Rota\xe7\xe3o"),s.a.createElement(d.a,{value:j,min:1,max:u.join("").length,onChange:function(e){return a=Number(e.target.value),x(a),void t.shift(a);var a},tooltip:"off"})),s.a.createElement("ul",null,s.a.createElement("li",null,"padr\xe3o: ",u.join("")),s.a.createElement("li",null,"tempo: ",m),s.a.createElement("li",null,"instrumento: ",h)),s.a.createElement("div",{className:"controls"},s.a.createElement(g.a,{"aria-label":"Basic example"},s.a.createElement(y.a,{onClick:function(){t.start()}},s.a.createElement(v.a,{icon:b.a})),s.a.createElement(y.a,{onClick:function(){t.stop()}},s.a.createElement(v.a,{icon:b.c})),s.a.createElement(y.a,{onClick:function(){return t.remove(),void O({type:"claves.remove",id:t.id})}},s.a.createElement(v.a,{icon:b.e})))),s.a.createElement("div",{className:"mt-2 volume"},s.a.createElement("span",{className:"mr-2"},"Vol."),s.a.createElement(d.a,{value:c,min:0,max:100,tooltipLabel:function(e){return"".concat(e,"%")},onChange:function(e){return function(e){var a=function(e,t,a,n,s){return n+(s-n)*(e-t)/(a-t)}(e,0,100,0,1);l(e),t.setVolume(a)}(Number(e.target.value))}})))}var _=a(20),P=a(21),q=function(){function e(){Object(_.a)(this,e),this.canvas=null,this.context=null,this.pattern=null,this.tempo=0,this.animate=!1,this.lastRender=Date.now(),this.draw=this.draw.bind(this),this.currentStep=1,this.patternPos={}}return Object(P.a)(e,[{key:"configure",value:function(e,t,a){this.canvas=e,this.context=e.getContext("2d"),this.pattern=t,this.tempo=a}},{key:"setCurrentStep",value:function(e){this.currentStep=e}},{key:"play",value:function(){this.animate=!0,window.requestAnimationFrame(this.draw)}},{key:"pause",value:function(){this.currentStep=1,this.animate=!1}},{key:"draw",value:function(){var e=this.canvas,t=this.context,a=this.pattern,n="20px",s=2,i="#fff",r="#cc2c11",c=4,l="#cc2c11",u="#cc2c11",m=2,p="#fff",d="#fff",h=8,f="#cc2c11",v="#cc2c11",b=[200,200],g=b[0],y=b[1],E=80,w=2*Math.PI/a.length,j=-.5*Math.PI;function k(e,a,n){var s=n.radius,i=n.stroke,r=n.fill;t.strokeStyle=i,t.fillStyle=r,t.beginPath(),t.arc(e,a,s,0,2*Math.PI),t.fill(),t.stroke()}function x(e,t){k(e,t,{radius:c,stroke:l,fill:u})}function O(e,t){k(e,t,{radius:m,stroke:p,fill:d})}e.style.padding=n,e.width=g,e.height=y,t.clearRect(0,0,g,y),t.lineWidth=s,t.strokeStyle=i,t.beginPath(),t.arc(g/2,y/2,E,0,2*Math.PI),t.stroke();var _=[];function P(e,t){return[Math.cos(e)*t+g/2,Math.sin(e)*t+y/2]}for(var q=0;q<a.length;q++){var C=P(j+w*q,E),S=Object(o.a)(C,2),N=S[0],A=S[1];"1"===a[q]?(x(N,A),_.push([N,A])):O(N,A),this.patternPos[q]={x:N,y:A}}_.length>=1&&function(e){t.strokeStyle=r,t.beginPath(),t.moveTo(e[0][0],e[0][1]);for(var a=1;a<e.length;a++)t.lineTo(e[a][0],e[a][1]);t.closePath(),t.stroke()}(_),function(e,t){k(e,t,{radius:h,stroke:f,fill:v})}(this.patternPos[this.currentStep-1].x,this.patternPos[this.currentStep-1].y),this.animate&&window.requestAnimationFrame(this.draw)}}]),e}();function C(){var e=new q,t=Object(n.useRef)(),a=Object(n.useContext)(k).state;return Object(n.useEffect)((function(){t.current&&(e.configure(t.current,a.previewPattern,120),e.draw())}),[a.previewPattern,e]),a.previewPattern&&0!==a.previewPattern.length?s.a.createElement("div",{className:"layer"},s.a.createElement("canvas",{id:f.a.generate(),ref:t,width:640,height:425}),s.a.createElement("p",{className:"Preview"},"Pr\xe9-visualiza\xe7\xe3o")):null}var S,N=a(59),A=a(48),T=a.n(A),M=a(68),R=a.n(M),B=a(69),I=a.n(B),z=a(70),L=a.n(z),G=a(71),V=a.n(G),D=a(72),F=a.n(D),H=a(73),J=a.n(H),U=a(74),W=a.n(U),$=a(75),X=a.n($),K=a(76),Q=a.n(K),Y=a(77),Z=a.n(Y),ee=a(78),te=a.n(ee),ae=a(79),ne=a.n(ae),se=a(80),ie=a.n(se),re=a(81),oe=a.n(re),ce=a(82),le=a.n(ce),ue=a(83),me=a.n(ue),pe=a(84),de=a.n(pe),he=a(85),fe=a.n(he),ve=a(86),be=a.n(ve),ge={agogo1:R.a,agogo2:I.a,bass:L.a,block:V.a,bumbo:F.a,claves:J.a,conga1:W.a,conga2:X.a,cymbal:Q.a,djembe1:Z.a,djembe2:te.a,djembe3:ne.a,hit:ie.a,hithat:oe.a,kick1:le.a,kick2:me.a,kicklow:de.a,snare:fe.a,tamborim:be.a},ye=a(33),Ee=(S={},Object(ye.a)(S,f.a.generate(),{name:"Toque Ignbin",instruments:[{sequence:"101101011010",tempo:120,sample:"conga1"}]}),Object(ye.a)(S,f.a.generate(),{name:"Son cubano",instruments:[{sequence:"1001001000101000",tempo:92,sample:"claves"}]}),Object(ye.a)(S,f.a.generate(),{name:"Rumba",instruments:[{sequence:"1001000100101000",tempo:110,sample:"claves"}]}),Object(ye.a)(S,f.a.generate(),{name:"Samba",instruments:[{sequence:"1011010101101010",tempo:60,sample:"tamborim"}]}),S),we=function(){function e(t,a){Object(_.a)(this,e),this.pulses=t,this.steps=a,this.sequence="",this.createSequence(t,a),this.offset=0}return Object(P.a)(e,[{key:"update",value:function(e,t){this.createSequence(e,t)}},{key:"shift",value:function(e){if(this.offset<e){for(var t=this.sequence.splice(this.sequence.length-1,1),a=0;a<t.length;a++)this.sequence.unshift(t[a]);this.pulses=this.sequence.join(""),this.steps=this.sequence.length}else{for(var n=this.sequence.splice(0,1),s=0;s<n.length;s++)this.sequence.push(n[s]);this.pulses=this.sequence.join(""),this.steps=this.sequence.length}return this.offset=e,this}},{key:"createSequence",value:function(e,t){var a=typeof e;"number"===a?(this.steps=t,this.sequence=T.a.getPattern(e,t),this.pulses=this.sequence.join("")):"string"===a&&(this.steps=e.length,this.sequence=e.split(""))}}]),e}(),je=a(87),ke=a.n(je);function xe(e,t){var a=this;if(!e)throw new Error("Context is mandatory");if(!t)throw new Error("Callback is mandatory");this.context=e,this.steps=16,this.tempo=120,this.callback=t,this.look_ahead=1,this._step=1,this._scheduler_interval=20,this._next_event_time=0,this._first=!0,this._is_running=!1,this._worker=ke()(117),this._worker.onmessage=function(e){"tick"===e.data&&a._is_running&&a._scheduler()},this._worker.postMessage({interval:a._scheduler_interval})}xe.prototype.start=function(e){this._is_running?console.log("already started"):(this._is_running=!0,this._worker.postMessage("start"))},xe.prototype.pause=function(){this._is_running=!1,this._worker.postMessage("stop")},xe.prototype.stop=function(){this._first=!0,this._step=1,this._is_running=!1,this._worker.postMessage("stop")},xe.prototype._scheduler=function(){for(1===this._step&&this._first&&(this._next_event_time=this.context.currentTime);this._next_event_time<this.context.currentTime+this.look_ahead;){var e=this._next_event_time-this.context.currentTime;this.callback(this._next_event_time,this._step,e),this._next()}},xe.prototype._next=function(){this._step++,this._first&&(this._next_event_time=this.context.currentTime,this._first=!1),this._step>this.steps&&(this._step=1),this._next_event_time+=60/this.tempo*4/this.steps};var Oe=xe,_e=function(){function e(t,a,n,s,i,r){var o=this;Object(_.a)(this,e),this.id=t,this.on=r,this.tempo=n,this.clavis=s,this.context=a,this.pattern=i,this.metro=new Oe(a,(function(e,t,a){o.metro.steps!==o.pattern.sequence.length&&(o.metro.steps=o.pattern.sequence.length),"1"===o.pattern.sequence[t-1]?(o.on(e,t,a),setTimeout((function(){s.setCurrentStep(t)}),1e3)):setTimeout((function(){s.setCurrentStep(t)}),1e3)})),this.metro.steps=this.pattern.sequence.length,this.metro.tempo=this.tempo}return Object(P.a)(e,[{key:"start",value:function(){this.metro.start()}},{key:"pause",value:function(){this.metro.pause()}},{key:"stop",value:function(){this.metro.stop()}},{key:"watch",value:function(e){this.metro.tempo=e}}]),e}(),Pe=function(){function e(t,a,n,s,i,r){var o=this;if(Object(_.a)(this,e),this.callbackOn=function(e,t){var a=o.context.createGain();a.gain.value=o.volume,a.connect(o.context.destination);var n=o.context.createBufferSource();n.buffer=o.sample,n.connect(a),n.start(e)},this.id=f.a.generate(),this.context=t,this.baseTempo=a,this.pattern=new we(n),this.tempo=s,this.instrument=i.name,this.sample=i.sample,this.polymetric=r,this.clavis=new q,this.volume=1,this.player=null,this.polymetric){var c=this.baseTempo.length,l=this.pattern.sequence.length;if(l!==c)if(c>l){var u=c/l;this.tempo=(this.tempo*u).toFixed(2)}else{var m=l/c;this.tempo=(this.tempo/m).toFixed(2)}}this.player=new _e(f.a.generate(),this.context,this.tempo,this.clavis,this.pattern,this.callbackOn)}return Object(P.a)(e,[{key:"setVolume",value:function(e){this.volume=e}},{key:"pattern",value:function(e,t){return new we(e,t)}},{key:"shift",value:function(e){this.pattern=this.pattern.shift(e)}},{key:"remove",value:function(){this.player.stop(),this.clavis.pause()}},{key:"start",value:function(){this.player.start(),this.clavis.play()}},{key:"pause",value:function(){this.player.pause(),this.clavis.pause()}},{key:"stop",value:function(){this.player.stop(),this.clavis.pause()}}]),e}(),qe=a(132);function Ce(e){return s.a.createElement(qe.a,Object.assign({},e,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),s.a.createElement(qe.a.Header,{closeButton:!0},s.a.createElement(qe.a.Title,{id:"contained-modal-title-vcenter"},"Remover todas as guias?")),s.a.createElement(qe.a.Body,null,s.a.createElement("h4",null,"Aten\xe7\xe3o!"),s.a.createElement("p",null,"Voc\xea confirma que deseja apagar todas as guias?")),s.a.createElement(qe.a.Footer,null,s.a.createElement(y.a,{variant:"secondary",onClick:e.onHide},"Fechar"),s.a.createElement(y.a,{onClick:e.onConfirm},"Remover")))}var Se=a(130),Ne=a(91),Ae=a(133),Te=a(134);var Me=function(){var e=Object(l.e)(),t=Object(n.useState)(!1),a=Object(o.a)(t,2),i=a[0],r=a[1],c=Object(n.useState)("agogo1"),u=Object(o.a)(c,2),m=u[0],p=u[1],d=Object(n.useState)(120),h=Object(o.a)(d,2),E=h[0],w=h[1],j=Object(n.useContext)(k).dispatch,x=Object(n.useContext)(k).state,O=x.claves,_=x.instruments,P=x.context,q=x.previewPattern,C=x.polymetric,S=x.previewVisibility,A=Object(n.useState)(!1),M=Object(o.a)(A,2),R=M[0],B=M[1],I=O.length>0,z=Object(n.useRef)(null),L="";O.length>0&&(L=O[0].pattern.sequence.join(""));var G=function(){var e,t=Object(N.a)(O);try{for(t.s();!(e=t.n()).done;){e.value.stop()}}catch(a){t.e(a)}finally{t.f()}j({type:"stop.all",isPlaying:!0})};return s.a.createElement("div",{className:"toolbar"},s.a.createElement(Ce,{show:R,onHide:function(){return B(!1)},onConfirm:function(){return G(),j({type:"claves.removeAll"}),void B(!1)}}),s.a.createElement("div",{className:"toolbar-controls"},s.a.createElement(g.a,{"aria-label":"Basic example"},s.a.createElement(y.a,{onClick:function(){return function(){var e,t=Object(N.a)(O);try{for(t.s();!(e=t.n()).done;){e.value.start()}}catch(a){t.e(a)}finally{t.f()}}()}},s.a.createElement(v.a,{icon:b.a})),s.a.createElement(y.a,{onClick:function(){return G()}},s.a.createElement(v.a,{icon:b.c})),s.a.createElement(y.a,{onClick:function(){return B(!0)},disabled:!I},s.a.createElement(v.a,{icon:b.d})))),s.a.createElement("div",{className:"toolbar-form"},s.a.createElement(Se.a,null,s.a.createElement(Se.a.Prepend,null,s.a.createElement(Se.a.Text,{id:"basic-addon3"},"Padr\xe3o")),s.a.createElement(Ne.a,{placeholder:"1010101 ou 3,4",ref:z,onChange:function(e){return function(e){var t=new RegExp("^(\\d+),(\\d+)$"),a=new RegExp("^[0-1]{1,}$");if(t.test(e)){var n=e.split(",").map((function(e){return parseInt(e)})).sort((function(e,t){return e-t})),s=Object(o.a)(n,2),i=s[0],c=s[1],l=T.a.getPattern(i,c).join("");j({type:"previewPattern.update",pattern:l}),r(!1)}else a.test(e)?(j({type:"previewPattern.update",pattern:e}),r(!1)):r(!0);""===e&&(j({type:"previewPattern.update",pattern:e}),r(!1)),S||j({type:"preview.visibility",visible:!0})}(e.target.value)},isInvalid:i})),s.a.createElement(Se.a,null,s.a.createElement(Se.a.Prepend,null,s.a.createElement(Se.a.Text,{id:"basic-addon3"},"Tempo")),s.a.createElement(Ne.a,{placeholder:"tempo",value:E,onChange:function(e){return w(e.target.value)}})),s.a.createElement(Ae.a.Control,{as:"select",onChange:function(e){return p(e.target.value)}},s.a.createElement("option",null,"Instrumentos"),Object.keys(ge).map((function(e,t){return s.a.createElement("option",{key:t,value:e},e)}))),s.a.createElement(Ae.a.Check,{inline:!0,className:"ml-2 polymetric",type:"checkbox",label:"Polimetria",checked:C,onChange:function(){return j({type:"toggle.polymetric"})},disabled:!I}),s.a.createElement(y.a,{className:"ml-2",onClick:function(){return function(){var e=new Pe(P,L,q,E,{name:m,sample:_[m]},C);j({type:"claves.add",id:f.a.generate(),clave:e}),j({type:"previewPattern.update",pattern:q}),j({type:"preview.visibility",visible:!1}),j({type:"start.all"})}()},disabled:i||0===q.length},"Adicionar"),s.a.createElement(Te.a,{className:"ml-2"},s.a.createElement(Te.a.Toggle,{variant:"info",id:"dropdown-basic"},"presets"),s.a.createElement(Te.a.Menu,null,Object.keys(Ee).map((function(e,t){return s.a.createElement(Te.a.Item,{key:t,onClick:function(){return Ee[e].instruments.forEach((function(e){var t=e.sequence,a=e.tempo,n=e.sample,s=new Pe(P,L,t,a,{name:n,sample:_[n]});j({type:"claves.add",id:f.a.generate(),clave:s})})),void j({type:"start.all"})}},Ee[e].name)})))),s.a.createElement(y.a,{onClick:function(){return function(){G(),j({type:"claves.removeAll"});var t=O.map((function(e){return{sequence:e.pattern.sequence.join(""),tempo:e.tempo,sample:e.instrument}}));e.push("/guias?guias=".concat(JSON.stringify(t)))}()},disabled:!I},s.a.createElement(v.a,{icon:b.b}))))};var Re=function(e){e.context,e.instruments;var t=s.a.useContext(k).state,a=Object(n.useContext)(k).dispatch,i=new URLSearchParams(Object(l.f)().search);return Object(n.useEffect)((function(){var e=JSON.parse(i.get("guias"));e&&function(e){e.forEach((function(e){var n=e.sequence,s=e.tempo,i=e.sample,r=new Pe(t.context,120,n,s,{name:i,sample:t.instruments[i]});a({type:"claves.add",id:f.a.generate(),clave:r})}))}(e)}),[]),s.a.createElement("div",{className:"App"},s.a.createElement(Me,null),s.a.createElement("div",{className:"wrapper"},t.claves.map((function(e){return s.a.createElement(O,{key:e.id,clave:e})})),t.previewVisibility&&s.a.createElement(C,null)))},Be=a(92),Ie=a(136),ze=a(135);var Le=function(){return s.a.createElement(Ie.a,{collapseOnSelect:!0,bg:"black",expand:"lg",variant:"black"},s.a.createElement(Ie.a.Brand,null,s.a.createElement("h3",null,s.a.createElement(c.b,{to:"/"},"Polymatic ",s.a.createElement("small",null,Be.version)))),s.a.createElement(ze.a,{className:"mr-auto"},s.a.createElement(ze.a,null,s.a.createElement(c.b,{to:"/sobre"},"sobre"))))},Ge=function(){function e(t,a,n){Object(_.a)(this,e),this.context=t,this.instruments=a,this.onload=n,this.bufferList={},this.loadCount=0}return Object(P.a)(e,[{key:"loadBuffer",value:function(e,t){var a=this,n=new XMLHttpRequest;n.open("GET",this.instruments[e],!0),n.responseType="arraybuffer",n.onload=function(){a.context.decodeAudioData(n.response,(function(t){t?(a.bufferList[e]=t,++a.loadCount===Object.keys(a.instruments).length&&a.onload(a.bufferList)):alert("error decoding file data: "+e)}),(function(e){console.error("decodeAudioData error",e)}))},n.onerror=function(){alert("BufferLoader: XHR error")},n.send()}},{key:"load",value:function(){var e=this;Object.keys(this.instruments).forEach((function(t){e.loadBuffer(t)}))}}]),e}(),Ve=(a(122),a(123),a(131)),De=new(window.AudioContext||window.webkitAudioContext);var Fe=function(){var e=Object(n.useState)(!0),t=Object(o.a)(e,2),a=t[0],i=t[1];u.a.initialize("UA-160360260-2"),u.a.pageview(window.location.pathname+window.location.search);var r=Object(n.useContext)(k).dispatch;return Object(n.useEffect)((function(){new Ge(De,ge,(function(e){r({type:"load.app",instruments:e,context:De}),i(!1)})).load()}),[]),a?s.a.createElement(Ve.a,{animation:"border",role:"status"},s.a.createElement("span",{className:"sr-only"},"Loading...")):s.a.createElement(c.a,{basename:"/"},s.a.createElement(Le,null),s.a.createElement(l.a,{exact:!0,path:"/sobre"},s.a.createElement(m,null)),s.a.createElement(l.a,{exact:!0,path:"/"},s.a.createElement(Re,null)),s.a.createElement(l.a,{exact:!0,path:"/guias"},s.a.createElement(Re,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(x,null,s.a.createElement(Fe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},68:function(e,t,a){e.exports=a.p+"static/media/agogo1.b8f6e210.wav"},69:function(e,t,a){e.exports=a.p+"static/media/agogo2.5844966c.wav"},70:function(e,t,a){e.exports=a.p+"static/media/bass.b2419d4f.wav"},71:function(e,t,a){e.exports=a.p+"static/media/block.3753c44b.wav"},72:function(e,t,a){e.exports=a.p+"static/media/bum.4c11d5fa.wav"},73:function(e,t,a){e.exports=a.p+"static/media/claves.400c9ef3.wav"},74:function(e,t,a){e.exports=a.p+"static/media/conga1.41b2f57f.wav"},75:function(e,t,a){e.exports=a.p+"static/media/conga2.887c0c16.wav"},76:function(e,t,a){e.exports=a.p+"static/media/cymbal.950d832b.wav"},77:function(e,t,a){e.exports=a.p+"static/media/djembe1.f3e648cb.wav"},78:function(e,t,a){e.exports=a.p+"static/media/djembe3.acef368f.wav"},79:function(e,t,a){e.exports=a.p+"static/media/djembe2.d38ab3d2.wav"},80:function(e,t,a){e.exports=a.p+"static/media/hit.a315148b.wav"},81:function(e,t,a){e.exports=a.p+"static/media/hithat.950d832b.wav"},82:function(e,t,a){e.exports=a.p+"static/media/kick1.e63d68a9.wav"},83:function(e,t,a){e.exports=a.p+"static/media/kick2.18445a5e.wav"},84:function(e,t,a){e.exports=a.p+"static/media/kicklow.c09eab14.wav"},85:function(e,t,a){e.exports=a.p+"static/media/snare.96dbe59f.wav"},86:function(e,t,a){e.exports=a.p+"static/media/tamborim.a6cbfb58.wav"},92:function(e){e.exports=JSON.parse('{"name":"Polymatic","version":"5.0.0","private":true,"homepage":"https://polymatic.ciberterreiro.org","dependencies":{"@fortawesome/fontawesome-svg-core":"^1.2.27","@fortawesome/free-solid-svg-icons":"^5.12.1","@fortawesome/react-fontawesome":"^0.1.9","@testing-library/jest-dom":"^4.2.4","@testing-library/react":"^9.3.2","@testing-library/user-event":"^7.1.2","beet.js":"^1.7.0","bootstrap":"^4.4.1","euclidean-rhythms":"^2.0.1","gh-pages":"^2.2.0","melanke-watchjs":"^1.5.2","node-sass":"^4.13.1","react":"^16.13.0","react-bootstrap":"^1.0.0-beta.17","react-bootstrap-range-slider":"^0.3.1","react-dom":"^16.13.0","react-ga":"^2.7.0","react-router-dom":"^5.1.2","react-scripts":"3.4.0","shortid":"^2.2.15","watchjs":"^0.0.0","webworkify-webpack":"^2.1.5"},"scripts":{"start":"react-scripts start","build":"react-scripts build","test":"react-scripts test","eject":"react-scripts eject","predeploy":"npm run build && cp CNAME build/CNAME","deploy":"gh-pages -b gh-pages -d build"},"eslintConfig":{"extends":"react-app"},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"devDependencies":{"semantic-release":"^17.0.7"}}')},97:function(e,t,a){e.exports=a(124)}},[[97,1,2]]]);
//# sourceMappingURL=main.791a5243.chunk.js.map