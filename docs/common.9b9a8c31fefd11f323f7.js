"use strict";(self.webpackChunkion_holla_messenger=self.webpackChunkion_holla_messenger||[]).push([[8592],{3993:(D,A,c)=>{c.d(A,{D:()=>t,a:()=>m,c:()=>p,d:()=>f,g:()=>v,p:()=>n,s:()=>d});const t={dragThreshold:20,allowElementScroll:!1,maxDragAngle:40,sideMenuThreshold:50,transitionDuration:150,shortSwipeDuration:300,debug:!1,avoidElements:!1};function n(i){if(i){const s=i.changedTouches;if(s&&s.length>0){const o=s[0];return{x:o.clientX,y:o.clientY}}if(void 0!==i.pageX)return{x:i.pageX,y:i.pageY}}return{x:0,y:0}}const e="scrollBehavior"in document.documentElement.style;let r;r=window.performance&&window.performance.now?window.performance.now.bind(window.performance):Date.now.bind(Date);const m=r;function a(i,s,o,_,g,T){const P=m(),Z=s===o?o:function(i,s,o,_,g){const P=(i=>i<.5?4*i*i*i:(i-1)*(2*i-2)*(2*i-2)+1)(Math.min(1,(_-o)/g));return Math.ceil(P*(s-i)+i)}(s,o,g,P,T);i.scrollTo(Z,_),!(P-g>=T)&&requestAnimationFrame(()=>{a(i,s,o,_,g,T)})}const d=(i,s,o=0,_=!1,g=300)=>{g<=0?requestAnimationFrame(()=>{i.scrollTo(s,o)}):_&&e?i.scrollTo({left:s,top:o,behavior:"smooth"}):requestAnimationFrame(()=>{a(i,i.scrollLeft,s,o,m(),g)})};function p(i,s,o){if(!s)return!1;const _=o.maxDragAngle*(Math.PI/180),g=Math.cos(_),T=i.x-s.x,P=i.y-s.y;if(Math.sqrt(T*T+P*P)>=o.dragThreshold){const M=Math.atan2(P,T),x=Math.cos(M);return Math.abs(x)>g}return!1}function v(i,s,o=0){return Math.max(0,Math.min(i.scrollWidth-s,i.scrollLeft+o))}function f(i,s,o){!i||!i.debug||console.log("%csuper-tabs %c%s","background: linear-gradient(135deg,#4150b2,#f71947); border: 1px solid #9a9a9a; color: #ffffff; border-bottom-left-radius: 2px; border-top-left-radius: 2px; padding: 2px 0 2px 4px;","background: #252b3e; border: 1px solid #9a9a9a; border-top-right-radius: 2px; border-bottom-right-radius: 2px; margin-left: -2px; padding: 2px 4px; color: white;"," ".repeat(10-s.length)+s,...o)}},2592:(D,A,c)=>{c.d(A,{c:()=>r});var t=c(3150),n=c(2954),e=c(9461);const r=(m,h)=>{let l,a;const d=(u,E,f)=>{if("undefined"==typeof document)return;const i=document.elementFromPoint(u,E);i&&h(i)?i!==l&&(v(),p(i,f)):v()},p=(u,E)=>{l=u,a||(a=l);const f=l;(0,t.c)(()=>f.classList.add("ion-activated")),E()},v=(u=!1)=>{if(!l)return;const E=l;(0,t.c)(()=>E.classList.remove("ion-activated")),u&&a!==l&&l.click(),l=void 0};return(0,e.createGesture)({el:m,gestureName:"buttonActiveDrag",threshold:0,onStart:u=>d(u.currentX,u.currentY,n.a),onMove:u=>d(u.currentX,u.currentY,n.b),onEnd:()=>{v(!0),(0,n.h)(),a=void 0}})}},7330:(D,A,c)=>{c.d(A,{a:()=>e,d:()=>r});var t=c(4553),n=c(2377);const e=function(){var m=(0,t.Z)(function*(h,l,a,d,p){if(h)return h.attachViewToDom(l,a,p,d);if("string"!=typeof a&&!(a instanceof HTMLElement))throw new Error("framework delegate is missing");const v="string"==typeof a?l.ownerDocument&&l.ownerDocument.createElement(a):a;return d&&d.forEach(u=>v.classList.add(u)),p&&Object.assign(v,p),l.appendChild(v),yield new Promise(u=>(0,n.c)(v,u)),v});return function(l,a,d,p,v){return m.apply(this,arguments)}}(),r=(m,h)=>{if(h){if(m)return m.removeViewFromDom(h.parentElement,h);h.remove()}return Promise.resolve()}},2954:(D,A,c)=>{c.d(A,{a:()=>e,b:()=>r,c:()=>n,d:()=>h,h:()=>m});const t={getEngine(){const l=window;return l.TapticEngine||l.Capacitor&&l.Capacitor.isPluginAvailable("Haptics")&&l.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(l){const a=this.getEngine();if(!a)return;const d=this.isCapacitor()?l.style.toUpperCase():l.style;a.impact({style:d})},notification(l){const a=this.getEngine();if(!a)return;const d=this.isCapacitor()?l.style.toUpperCase():l.style;a.notification({style:d})},selection(){this.impact({style:"light"})},selectionStart(){const l=this.getEngine();!l||(this.isCapacitor()?l.selectionStart():l.gestureSelectionStart())},selectionChanged(){const l=this.getEngine();!l||(this.isCapacitor()?l.selectionChanged():l.gestureSelectionChanged())},selectionEnd(){const l=this.getEngine();!l||(this.isCapacitor()?l.selectionEnd():l.gestureSelectionEnd())}},n=()=>{t.selection()},e=()=>{t.selectionStart()},r=()=>{t.selectionChanged()},m=()=>{t.selectionEnd()},h=l=>{t.impact(l)}},6575:(D,A,c)=>{c.d(A,{s:()=>t});const t=a=>{try{if(a instanceof class{constructor(d){this.value=d}})return a.value;if(!r()||"string"!=typeof a||""===a)return a;const d=document.createDocumentFragment(),p=document.createElement("div");d.appendChild(p),p.innerHTML=a,h.forEach(f=>{const i=d.querySelectorAll(f);for(let s=i.length-1;s>=0;s--){const o=i[s];o.parentNode?o.parentNode.removeChild(o):d.removeChild(o);const _=e(o);for(let g=0;g<_.length;g++)n(_[g])}});const v=e(d);for(let f=0;f<v.length;f++)n(v[f]);const u=document.createElement("div");u.appendChild(d);const E=u.querySelector("div");return null!==E?E.innerHTML:u.innerHTML}catch(d){return console.error(d),""}},n=a=>{if(a.nodeType&&1!==a.nodeType)return;for(let p=a.attributes.length-1;p>=0;p--){const v=a.attributes.item(p),u=v.name;if(!m.includes(u.toLowerCase())){a.removeAttribute(u);continue}const E=v.value;null!=E&&E.toLowerCase().includes("javascript:")&&a.removeAttribute(u)}const d=e(a);for(let p=0;p<d.length;p++)n(d[p])},e=a=>null!=a.children?a.children:a.childNodes,r=()=>{const a=window,d=a&&a.Ionic&&a.Ionic.config;return!d||(d.get?d.get("sanitizerEnabled",!0):!0===d.sanitizerEnabled||void 0===d.sanitizerEnabled)},m=["class","id","href","src","name","slot"],h=["script","style","iframe","meta","link","object","embed"]},408:(D,A,c)=>{c.d(A,{S:()=>n});const n={bubbles:{dur:1e3,circles:9,fn:(e,r,m)=>{const h=e*r/m-e+"ms",l=2*Math.PI*r/m;return{r:5,style:{top:9*Math.sin(l)+"px",left:9*Math.cos(l)+"px","animation-delay":h}}}},circles:{dur:1e3,circles:8,fn:(e,r,m)=>{const h=r/m,l=e*h-e+"ms",a=2*Math.PI*h;return{r:5,style:{top:9*Math.sin(a)+"px",left:9*Math.cos(a)+"px","animation-delay":l}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(e,r)=>({r:6,style:{left:9-9*r+"px","animation-delay":-110*r+"ms"}})},lines:{dur:1e3,lines:12,fn:(e,r,m)=>({y1:17,y2:29,style:{transform:`rotate(${30*r+(r<6?180:-180)}deg)`,"animation-delay":e*r/m-e+"ms"}})},"lines-small":{dur:1e3,lines:12,fn:(e,r,m)=>({y1:12,y2:20,style:{transform:`rotate(${30*r+(r<6?180:-180)}deg)`,"animation-delay":e*r/m-e+"ms"}})}}},1269:(D,A,c)=>{c.d(A,{c:()=>e,g:()=>m,h:()=>n,o:()=>l});var t=c(4553);const n=(a,d)=>null!==d.closest(a),e=(a,d)=>"string"==typeof a&&a.length>0?Object.assign({"ion-color":!0,[`ion-color-${a}`]:!0},d):d,m=a=>{const d={};return(a=>void 0!==a?(Array.isArray(a)?a:a.split(" ")).filter(p=>null!=p).map(p=>p.trim()).filter(p=>""!==p):[])(a).forEach(p=>d[p]=!0),d},h=/^[a-z][a-z0-9+\-.]*:/,l=function(){var a=(0,t.Z)(function*(d,p,v,u){if(null!=d&&"#"!==d[0]&&!h.test(d)){const E=document.querySelector("ion-router");if(E)return null!=p&&p.preventDefault(),E.push(d,v,u)}return!1});return function(p,v,u,E){return a.apply(this,arguments)}}()},6316:(D,A,c)=>{c.d(A,{T:()=>f});var t=c(3018),n=c(4490),e=c(7635),r=c(887),m=c(4540),h=c(8583);function l(i,s){1&i&&(t.TgZ(0,"div",8),t._UZ(1,"ion-spinner",9),t.qZA())}function a(i,s){1&i&&t._UZ(0,"ion-icon",17)}function d(i,s){1&i&&t._UZ(0,"ion-icon",18)}function p(i,s){1&i&&t._UZ(0,"ion-icon",19)}function v(i,s){1&i&&t._UZ(0,"ion-spinner",20)}function u(i,s){if(1&i){const o=t.EpF();t.TgZ(0,"ion-item",10),t.NdJ("click",function(){const T=t.CHM(o).$implicit;return t.oxw().langChange(T)}),t._UZ(1,"ion-icon",11),t.TgZ(2,"ion-label"),t.TgZ(3,"h2"),t._uU(4),t.qZA(),t.TgZ(5,"p"),t._uU(6),t.qZA(),t.qZA(),t.TgZ(7,"ion-button",12),t.YNc(8,a,1,0,"ion-icon",13),t.YNc(9,d,1,0,"ion-icon",14),t.YNc(10,p,1,0,"ion-icon",15),t.YNc(11,v,1,0,"ion-spinner",16),t.qZA(),t.qZA()}if(2&i){const o=s.$implicit,_=t.oxw();t.xp6(4),t.Oqu(o.orgintitle),t.xp6(2),t.Oqu(o.title),t.xp6(2),t.Q6J("ngIf",_.settings.language!=o.code&&!o.lock&&!o.loder),t.xp6(1),t.Q6J("ngIf",_.settings.language==o.code&&!o.lock&&!o.loder),t.xp6(1),t.Q6J("ngIf",o.lock&&!o.loder),t.xp6(1),t.Q6J("ngIf",o.loder)}}const E="SETTINGS";let f=(()=>{class i{constructor(o,_,g,T,P){this.alertController=o,this.localStorageService=_,this.generalFunctions=g,this.modalCtrl=T,this.translate=P}langChange(o){!o.lock&&!o.loder&&(o.loder=!0,setTimeout(()=>{this.translate.setDefaultLang(o.code),this.settings.language=o.code,this.localStorageService.setItem(E,this.settings),o.loder=!1},1e3))}closeModal(){this.modalCtrl.dismiss()}ionViewDidEnter(){this.settings=this.localStorageService.getItem(E),this.langdata=[{id:"1",orgintitle:"English",title:"English",code:"en",lock:!1},{id:"2",orgintitle:"P\u0443\u0441\u0441\u043a\u0438\u0439",title:"Russian",code:"ru",lock:!1},{id:"3",orgintitle:"T\xfcrk\xe7e",title:"Turkish",code:"tr",lock:!1},{id:"4",orgintitle:"Az\u0259rbaycan",title:"Azerbaijan",code:"az",lock:!0},{id:"5",orgintitle:"Deutsche",title:"German",code:"de",lock:!0},{id:"6",orgintitle:"Portugu\xeas",title:"Portuguese",code:"pt",lock:!0},{id:"7",orgintitle:"\u7b80\u4f53\u4e2d\u6587",title:"Chinese Simplified",code:"zh",lock:!0},{id:"8",orgintitle:"\u65e5\u672c\u8a9e",title:"Japanese",code:"ja",lock:!0}]}ngOnInit(){}}return i.\u0275fac=function(o){return new(o||i)(t.Y36(n.Br),t.Y36(e.n),t.Y36(r.f),t.Y36(n.IN),t.Y36(m.sK))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-language"]],decls:15,vars:7,consts:[[1,"ion-no-border",3,"translucent"],["color","dark","name","remove-outline",3,"click"],[3,"fullscreen"],[1,"ion-padding","ion-text-center"],[1,"avatar-lg"],["name","language-outline"],["class","center_loc margintop50",4,"ngIf"],["button","","detail","false",3,"click",4,"ngFor","ngForOf"],[1,"center_loc","margintop50"],["name","dots"],["button","","detail","false",3,"click"],["name","caret-forward-outline","color","success","slot","start"],["slot","end","fill","clear",1,"xion-no-margin","xion-no-padding"],["slot","icon-only","name","radio-button-off-outline","color","dark",4,"ngIf"],["slot","icon-only","name","radio-button-on-outline","color","success",4,"ngIf"],["slot","icon-only","name","lock-closed-outline","color","success",4,"ngIf"],["slot","icon-only","name","crescent","color","primary",4,"ngIf"],["slot","icon-only","name","radio-button-off-outline","color","dark"],["slot","icon-only","name","radio-button-on-outline","color","success"],["slot","icon-only","name","lock-closed-outline","color","success"],["slot","icon-only","name","crescent","color","primary"]],template:function(o,_){1&o&&(t.TgZ(0,"ion-header",0),t.TgZ(1,"ion-toolbar"),t.TgZ(2,"ion-title"),t.TgZ(3,"ion-icon",1),t.NdJ("click",function(){return _.closeModal()}),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(4,"ion-content",2),t.TgZ(5,"div",3),t.TgZ(6,"ion-avatar",4),t._UZ(7,"ion-icon",5),t.qZA(),t.TgZ(8,"h4"),t.TgZ(9,"strong"),t._uU(10),t.ALo(11,"translate"),t.qZA(),t.qZA(),t.qZA(),t.YNc(12,l,2,0,"div",6),t.TgZ(13,"ion-list"),t.YNc(14,u,12,6,"ion-item",7),t.qZA(),t.qZA()),2&o&&(t.Q6J("translucent",!0),t.xp6(4),t.Q6J("fullscreen",!0),t.xp6(6),t.Oqu(t.lcZ(11,5,"auth.changelanguage")),t.xp6(2),t.Q6J("ngIf",!_.langdata),t.xp6(2),t.Q6J("ngForOf",_.langdata))},directives:[n.Gu,n.sr,n.wd,n.gu,n.W2,n.BJ,h.O5,n.q_,h.sg,n.PQ,n.Ie,n.Q$,n.YG],pipes:[m.X$],styles:["ion-item[_ngcontent-%COMP%]{--border-color: rgb(255 255 255 / 0%);padding:4px 0;border-bottom:solid 1px rgba(239,239,239,.56)}ion-avatar.avatar-lg[_ngcontent-%COMP%], .avatar-lg[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{display:inline-block;width:60px;height:60px}ion-title[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{width:110px;height:47px}"]}),i})()},9285:(D,A,c)=>{c.d(A,{nW:()=>p});var t=c(3018),n=c(4490),e=c(7635),r=c(887),m=c(4540);let p=(()=>{class v{constructor(E,f,i,s,o){this.alertController=E,this.localStorageService=f,this.generalFunctions=i,this.modalCtrl=s,this.navParams=o,this.form_post_pross=!1,this.cmessageData=[],this.connection=this.navParams.get("connection"),this.userid=this.localStorageService.getItem("SESSION")[0].userid}closeModal(){this.modalCtrl.dismiss({data:!0})}ngOnDestroy(){}ionViewDidEnter(){}ionViewDidLeave(){}ngOnInit(){}}return v.\u0275fac=function(E){return new(E||v)(t.Y36(n.Br),t.Y36(e.n),t.Y36(r.f),t.Y36(n.IN),t.Y36(n.X1))},v.\u0275cmp=t.Xpm({type:v,selectors:[["app-backgrounmodes"]],decls:19,vars:11,consts:[[1,"ion-no-border",3,"translucent"],["color","dark","name","remove-outline",3,"click"],[3,"fullscreen"],[1,"ion-padding","ion-text-center"],[1,"avatar-lg"],["name","pause-outline"],[2,"margin-bottom","0","margin-top","0"],["color","dark","expand","block","type","button",1,"ion-margin-start","ion-margin-end","ion-margin-bottom",3,"click"]],template:function(E,f){1&E&&(t.TgZ(0,"ion-header",0),t.TgZ(1,"ion-toolbar"),t.TgZ(2,"ion-title"),t.TgZ(3,"ion-icon",1),t.NdJ("click",function(){return f.closeModal()}),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(4,"ion-content",2),t.TgZ(5,"div",3),t.TgZ(6,"ion-avatar",4),t._UZ(7,"ion-icon",5),t.qZA(),t.TgZ(8,"h4"),t.TgZ(9,"strong"),t._uU(10),t.ALo(11,"translate"),t.qZA(),t.qZA(),t.TgZ(12,"p",6),t._uU(13),t.ALo(14,"translate"),t.qZA(),t.qZA(),t.TgZ(15,"ion-list"),t.TgZ(16,"ion-button",7),t.NdJ("click",function(){return f.closeModal()}),t._uU(17),t.ALo(18,"translate"),t.qZA(),t.qZA(),t.qZA()),2&E&&(t.Q6J("translucent",!1),t.xp6(4),t.Q6J("fullscreen",!0),t.xp6(6),t.Oqu(t.lcZ(11,5,"messenger.backgroundavibles")),t.xp6(3),t.Oqu(t.lcZ(14,7,"messenger.backgroundaviblesinfo")),t.xp6(4),t.hij("\n",t.lcZ(18,9,"messenger.backgrounokeys"),"\n"))},directives:[n.Gu,n.sr,n.wd,n.gu,n.W2,n.BJ,n.q_,n.YG],pipes:[m.X$],styles:["ion-item[_ngcontent-%COMP%]{--border-color: rgb(255 255 255 / 0%);padding:12px 0}ion-avatar.avatar-lg[_ngcontent-%COMP%], .avatar-lg[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{display:inline-block;width:50px;height:50px}ion-title[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{width:110px;height:47px}"]}),v})()},9517:(D,A,c)=>{c.d(A,{ns:()=>E});var t=c(4762),n=c(4452),e=c(3018),r=c(4490),m=c(7635),h=c(887),l=c(8583),a=c(4540);function d(f,i){1&f&&e._UZ(0,"ion-spinner",17)}const p="SESSION",u="PEOPLE_DATA_";let E=(()=>{class f{constructor(s,o,_,g,T){this.alertController=s,this.localStorageService=o,this.generalFunctions=_,this.modalCtrl=g,this.navParams=T,this.form_post_pross=!1,this.cmessageData=[],this.userData=[],this.connection=this.navParams.get("connection")}finds(){if("pwa"==this.userData.logintype)var s="pwa";else s="mobile";this.setdata=!1;var _=document.getElementById("userkeyid");if(_.value&&_.value!=this.userid&&(this.form_post_pross=!0,this.connection)){var g=this.connection.getExtraData(_.value);setTimeout(()=>{if(null==g?void 0:g.userid)if(this.setdata={fullName:g.fullName,photo:g.photo,userid:g.userid,desc_status:g.desc_status,isOnly:g.status},this.cmessageData=this.localStorageService.getItem(u+this.userid),this.cmessageData.length){var P=this.cmessageData.findIndex(Z=>Z.userid==g.userid);setTimeout(()=>{this.cmessageData[P]?(this.form_post_pross=!1,this.generalFunctions.ToastShowModal(this.generalFunctions.xtranslate("messenger.avibleacconts"),"1100","bottom")):(this.cmessageData.push(this.setdata),this.localStorageService.setItem(u+this.userid,this.cmessageData),this.connection.send({token:this.userid,g_type:"addpeople",local:s,indata:this.setdata}),this.generalFunctions.ToastShowModal(this.generalFunctions.xtranslate("messenger.addpersonwell"),"1100","bottom"),this.closeModal(),this.form_post_pross=!1)},800)}else this.cmessageData.push(this.setdata),this.localStorageService.setItem(u+this.userid,this.cmessageData),this.connection.send({token:this.userid,g_type:"addpeople",local:s,indata:this.setdata}),this.form_post_pross=!1,this.generalFunctions.ToastShowModal(this.generalFunctions.xtranslate("messenger.addpersonwell"),"1100","bottom"),this.closeModal();else this.generalFunctions.ToastShowModal(this.generalFunctions.xtranslate("messenger.nopeoplefind"),"1100","bottom"),this.form_post_pross=!1},500)}}checkClipboard(){return(0,t.mG)(this,void 0,void 0,function*(){const{value:o}=yield n.T.read();document.getElementById("userkeyid").value=o})}writeToClipboard(){return(0,t.mG)(this,void 0,void 0,function*(){var s=document.getElementById("amuserkeyid");this.generalFunctions.ToastShowModal(this.generalFunctions.xtranslate("messenger.copy")+": "+s.value,"1100","bottom"),yield n.T.write({string:s.value})})}closeModal(){this.modalCtrl.dismiss({data:!0})}ionViewDidEnter(){}ionViewDidLeave(){}ngOnInit(){this.userid=this.localStorageService.getItem(p)[0].userid,this.userData=this.localStorageService.getItem(p)[0],this.localStorageService.getItem(u+this.userid)||this.localStorageService.setItem(u+this.userid,[])}}return f.\u0275fac=function(s){return new(s||f)(e.Y36(r.Br),e.Y36(m.n),e.Y36(h.f),e.Y36(r.IN),e.Y36(r.X1))},f.\u0275cmp=e.Xpm({type:f,selectors:[["app-creategroup"]],decls:32,vars:24,consts:[[1,"ion-no-border",2,"background","transparent","--background","transparent",3,"translucent"],[2,"background","transparent","--background","transparent"],["color","dark","name","remove-outline",3,"click"],[3,"fullscreen"],[1,"ion-padding","ion-text-center",2,"background","transparent","--background","transparent"],[1,"avatar-lg"],["name","person-add-outline"],[2,"margin-bottom","0","margin-top","0"],["button","","detail","false","lines","none","color","light",2,"padding-right","15px","padding-left","15px","--border-radius","10px",3,"click"],["id","userkeyid","type","text","maxlength","250",3,"placeholder","disabled"],[2,"padding-right","15px","padding-left","15px","text-align","left","margin-top","10px","margin-bottom","25px","font-size","13px"],["color","dark","expand","block","type","button",1,"ion-margin-start","ion-margin-end","ion-margin-bottom",3,"disabled","click"],["name","dots","style","margin-left: 10px;",4,"ngIf"],[2,"padding-right","15px","padding-left","15px","text-align","left","margin-top","20px","margin-bottom","0","font-size","14px","font-weight","600"],[2,"position","fixed","left","0","right","0","height","90px","z-index","99",3,"click"],["button","","detail","false","lines","none","color","light",2,"padding-right","15px","padding-left","15px","--border-radius","10px"],["disabled","","id","amuserkeyid","type","text","maxlength","250",3,"value"],["name","dots",2,"margin-left","10px"]],template:function(s,o){1&s&&(e.TgZ(0,"ion-header",0),e.TgZ(1,"ion-toolbar",1),e.TgZ(2,"ion-title",1),e.TgZ(3,"ion-icon",2),e.NdJ("click",function(){return o.closeModal()}),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(4,"ion-content",3),e.TgZ(5,"div",4),e.TgZ(6,"ion-avatar",5),e._UZ(7,"ion-icon",6),e.qZA(),e.TgZ(8,"h4"),e.TgZ(9,"strong"),e._uU(10),e.ALo(11,"translate"),e.qZA(),e.qZA(),e.TgZ(12,"p",7),e._uU(13),e.ALo(14,"translate"),e.qZA(),e.qZA(),e.TgZ(15,"ion-list",1),e.TgZ(16,"ion-item",8),e.NdJ("click",function(){return o.checkClipboard()}),e._UZ(17,"ion-input",9),e.ALo(18,"translate"),e.qZA(),e.TgZ(19,"p",10),e._uU(20),e.ALo(21,"translate"),e.qZA(),e.TgZ(22,"ion-button",11),e.NdJ("click",function(){return o.finds()}),e._uU(23),e.ALo(24,"translate"),e.YNc(25,d,1,0,"ion-spinner",12),e.qZA(),e.TgZ(26,"p",13),e._uU(27),e.ALo(28,"translate"),e.qZA(),e.TgZ(29,"div",14),e.NdJ("click",function(){return o.writeToClipboard()}),e.qZA(),e.TgZ(30,"ion-item",15),e._UZ(31,"ion-input",16),e.qZA(),e.qZA(),e.qZA()),2&s&&(e.Q6J("translucent",!1),e.xp6(4),e.Q6J("fullscreen",!0),e.xp6(6),e.Oqu(e.lcZ(11,12,"messenger.findpeople")),e.xp6(3),e.Oqu(e.lcZ(14,14,"messenger.findpeopleinfo")),e.xp6(4),e.s9C("placeholder",e.lcZ(18,16,"messenger.userid")),e.Q6J("disabled",o.form_post_pross),e.xp6(3),e.Oqu(e.lcZ(21,18,"messenger.findpeopleinfos")),e.xp6(2),e.Q6J("disabled",o.form_post_pross),e.xp6(1),e.hij("\n",e.lcZ(24,20,"messenger.find"),"\n"),e.xp6(2),e.Q6J("ngIf",o.form_post_pross),e.xp6(2),e.Oqu(e.lcZ(28,22,"messenger.amfindkeycode")),e.xp6(4),e.s9C("value",o.userid))},directives:[r.Gu,r.sr,r.wd,r.gu,r.W2,r.BJ,r.q_,r.Ie,r.pK,r.j9,r.YG,l.O5,r.PQ],pipes:[a.X$],styles:["ion-item[_ngcontent-%COMP%]{--border-color: rgb(255 255 255 / 0%);padding:12px 0}ion-avatar.avatar-lg[_ngcontent-%COMP%], .avatar-lg[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{display:inline-block;width:50px;height:50px}ion-title[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{width:110px;height:47px}"]}),f})()},6185:(D,A,c)=>{c.d(A,{EL:()=>E});var t=c(4762),n=c(4452),e=c(3018),r=c(4490),m=c(7635),h=c(887),l=c(8583),a=c(4540);function d(f,i){1&f&&e._UZ(0,"ion-spinner",17)}const p="SESSION",u="PEOPLE_DATA_";let E=(()=>{class f{constructor(s,o,_,g,T){this.alertController=s,this.localStorageService=o,this.generalFunctions=_,this.modalCtrl=g,this.navParams=T,this.form_post_pross=!1,this.cmessageData=[],this.userData=[],this.connection=this.navParams.get("connection")}finds(){if("pwa"==this.userData.logintype)var s="pwa";else s="mobile";this.setdata=!1;var _=document.getElementById("userkeyid");if(_.value&&_.value!=this.userid&&(this.form_post_pross=!0,this.connection)){var g=this.connection.getExtraData(_.value);setTimeout(()=>{if(null==g?void 0:g.userid)if(this.setdata={fullName:g.fullName,photo:g.photo,userid:g.userid,desc_status:g.desc_status,isOnly:g.status},this.cmessageData=this.localStorageService.getItem(u+this.userid),this.cmessageData.length){var P=this.cmessageData.findIndex(Z=>Z.userid==g.userid);setTimeout(()=>{this.cmessageData[P]?(this.form_post_pross=!1,this.generalFunctions.ToastShowModal(this.generalFunctions.xtranslate("messenger.avibleacconts"),"1100","bottom")):(this.cmessageData.push(this.setdata),this.localStorageService.setItem(u+this.userid,this.cmessageData),this.connection.send({token:this.userid,g_type:"addpeople",local:s,indata:this.setdata}),this.generalFunctions.ToastShowModal(this.generalFunctions.xtranslate("messenger.addpersonwell"),"1100","bottom"),this.closeModal(),this.form_post_pross=!1)},800)}else this.cmessageData.push(this.setdata),this.localStorageService.setItem(u+this.userid,this.cmessageData),this.connection.send({token:this.userid,g_type:"addpeople",local:s,indata:this.setdata}),this.form_post_pross=!1,this.generalFunctions.ToastShowModal(this.generalFunctions.xtranslate("messenger.addpersonwell"),"1100","bottom"),this.closeModal();else this.generalFunctions.ToastShowModal(this.generalFunctions.xtranslate("messenger.nopeoplefind"),"1100","bottom"),this.form_post_pross=!1},500)}}checkClipboard(){return(0,t.mG)(this,void 0,void 0,function*(){const{value:o}=yield n.T.read();document.getElementById("userkeyid").value=o})}writeToClipboard(){return(0,t.mG)(this,void 0,void 0,function*(){var s=document.getElementById("amuserkeyid");this.generalFunctions.ToastShowModal(this.generalFunctions.xtranslate("messenger.copy")+": "+s.value,"1100","bottom"),yield n.T.write({string:s.value})})}closeModal(){this.modalCtrl.dismiss({data:!0})}ionViewDidEnter(){}ionViewDidLeave(){}ngOnInit(){this.userid=this.localStorageService.getItem(p)[0].userid,this.userData=this.localStorageService.getItem(p)[0],this.localStorageService.getItem(u+this.userid)||this.localStorageService.setItem(u+this.userid,[])}}return f.\u0275fac=function(s){return new(s||f)(e.Y36(r.Br),e.Y36(m.n),e.Y36(h.f),e.Y36(r.IN),e.Y36(r.X1))},f.\u0275cmp=e.Xpm({type:f,selectors:[["app-findpeople"]],decls:32,vars:24,consts:[[1,"ion-no-border",2,"background","transparent","--background","transparent",3,"translucent"],[2,"background","transparent","--background","transparent"],["color","dark","name","remove-outline",3,"click"],[3,"fullscreen"],[1,"ion-padding","ion-text-center",2,"background","transparent","--background","transparent"],[1,"avatar-lg"],["name","person-add-outline"],[2,"margin-bottom","0","margin-top","0"],["button","","detail","false","lines","none","color","light",2,"padding-right","15px","padding-left","15px","--border-radius","10px",3,"click"],["id","userkeyid","type","text","maxlength","250",3,"placeholder","disabled"],[2,"padding-right","15px","padding-left","15px","text-align","left","margin-top","10px","margin-bottom","25px","font-size","13px"],["color","dark","expand","block","type","button",1,"ion-margin-start","ion-margin-end","ion-margin-bottom",3,"disabled","click"],["name","dots","style","margin-left: 10px;",4,"ngIf"],[2,"padding-right","15px","padding-left","15px","text-align","left","margin-top","20px","margin-bottom","0","font-size","14px","font-weight","600"],[2,"position","fixed","left","0","right","0","height","90px","z-index","99",3,"click"],["button","","detail","false","lines","none","color","light",2,"padding-right","15px","padding-left","15px","--border-radius","10px"],["disabled","","id","amuserkeyid","type","text","maxlength","250",3,"value"],["name","dots",2,"margin-left","10px"]],template:function(s,o){1&s&&(e.TgZ(0,"ion-header",0),e.TgZ(1,"ion-toolbar",1),e.TgZ(2,"ion-title",1),e.TgZ(3,"ion-icon",2),e.NdJ("click",function(){return o.closeModal()}),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(4,"ion-content",3),e.TgZ(5,"div",4),e.TgZ(6,"ion-avatar",5),e._UZ(7,"ion-icon",6),e.qZA(),e.TgZ(8,"h4"),e.TgZ(9,"strong"),e._uU(10),e.ALo(11,"translate"),e.qZA(),e.qZA(),e.TgZ(12,"p",7),e._uU(13),e.ALo(14,"translate"),e.qZA(),e.qZA(),e.TgZ(15,"ion-list",1),e.TgZ(16,"ion-item",8),e.NdJ("click",function(){return o.checkClipboard()}),e._UZ(17,"ion-input",9),e.ALo(18,"translate"),e.qZA(),e.TgZ(19,"p",10),e._uU(20),e.ALo(21,"translate"),e.qZA(),e.TgZ(22,"ion-button",11),e.NdJ("click",function(){return o.finds()}),e._uU(23),e.ALo(24,"translate"),e.YNc(25,d,1,0,"ion-spinner",12),e.qZA(),e.TgZ(26,"p",13),e._uU(27),e.ALo(28,"translate"),e.qZA(),e.TgZ(29,"div",14),e.NdJ("click",function(){return o.writeToClipboard()}),e.qZA(),e.TgZ(30,"ion-item",15),e._UZ(31,"ion-input",16),e.qZA(),e.qZA(),e.qZA()),2&s&&(e.Q6J("translucent",!1),e.xp6(4),e.Q6J("fullscreen",!0),e.xp6(6),e.Oqu(e.lcZ(11,12,"messenger.findpeople")),e.xp6(3),e.Oqu(e.lcZ(14,14,"messenger.findpeopleinfo")),e.xp6(4),e.s9C("placeholder",e.lcZ(18,16,"messenger.userid")),e.Q6J("disabled",o.form_post_pross),e.xp6(3),e.Oqu(e.lcZ(21,18,"messenger.findpeopleinfos")),e.xp6(2),e.Q6J("disabled",o.form_post_pross),e.xp6(1),e.hij("\n",e.lcZ(24,20,"messenger.find"),"\n"),e.xp6(2),e.Q6J("ngIf",o.form_post_pross),e.xp6(2),e.Oqu(e.lcZ(28,22,"messenger.amfindkeycode")),e.xp6(4),e.s9C("value",o.userid))},directives:[r.Gu,r.sr,r.wd,r.gu,r.W2,r.BJ,r.q_,r.Ie,r.pK,r.j9,r.YG,l.O5,r.PQ],pipes:[a.X$],styles:["ion-item[_ngcontent-%COMP%]{--border-color: rgb(255 255 255 / 0%);padding:12px 0}ion-avatar.avatar-lg[_ngcontent-%COMP%], .avatar-lg[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{display:inline-block;width:50px;height:50px}ion-title[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{width:110px;height:47px}"]}),f})()},4080:(D,A,c)=>{c.d(A,{MH:()=>s});var t=c(4762),n=c(3018),e=c(4490),r=c(7635),m=c(887),h=c(8583),l=c(4540);function a(o,_){1&o&&n._UZ(0,"ion-spinner",10)}const d="SESSION",E="PEOPLE_DATA_";let s=(()=>{class o{constructor(g,T,P,Z,M){this.alertController=g,this.localStorageService=T,this.generalFunctions=P,this.modalCtrl=Z,this.navParams=M,this.form_post_pross=!1,this.cmessageData=[],this.data=this.navParams.get("data"),this.connection=this.navParams.get("connection"),this.userid=this.localStorageService.getItem(d)[0].userid}finds(){return(0,t.mG)(this,void 0,void 0,function*(){this.form_post_pross=!0,this.connection.send({userid:this.data.userid,token:this.data.token,g_type:"pwa_login_session_already"}),yield setTimeout(()=>{var T=[];for(let x of this.localStorageService.getItem(E+this.userid)){var P=this.localStorageService.getItem("MESSAGE_DETAIL_DATA_"+x.userid);P&&T.push({userid:x.userid,data:P})}var M={userid:this.data.userid,token:this.data.token,g_type:"pwa_login_session",inuserdata:this.localStorageService.getItem(d)[0],inpeopledata:this.localStorageService.getItem(E+this.userid),allmessage:T};this.connection.send(M),this.prossoke=!0,this.closeModal()},500)})}closeModal(){this.modalCtrl.dismiss({data:!0})}ngOnDestroy(){this.prossoke||this.connection.send({userid:this.data.userid,token:this.data.token,g_type:"pwa_login_session_cancel"})}ionViewDidEnter(){}ionViewDidLeave(){}ngOnInit(){}}return o.\u0275fac=function(g){return new(g||o)(n.Y36(e.Br),n.Y36(r.n),n.Y36(m.f),n.Y36(e.IN),n.Y36(e.X1))},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-pwasessioncheck"]],decls:23,vars:16,consts:[[1,"ion-no-border",3,"translucent"],["color","dark","name","remove-outline",3,"click"],[3,"fullscreen"],[1,"ion-padding","ion-text-center"],[1,"avatar-lg"],["name","qr-code-outline"],[2,"margin-bottom","0","margin-top","0"],[2,"padding-right","15px","padding-left","15px","text-align","left","margin-top","10px","margin-bottom","25px","font-size","15px","text-align","center"],["color","dark","expand","block","type","button",1,"ion-margin-start","ion-margin-end","ion-margin-bottom",3,"disabled","click"],["name","dots","style","margin-left: 10px;",4,"ngIf"],["name","dots",2,"margin-left","10px"]],template:function(g,T){1&g&&(n.TgZ(0,"ion-header",0),n.TgZ(1,"ion-toolbar"),n.TgZ(2,"ion-title"),n.TgZ(3,"ion-icon",1),n.NdJ("click",function(){return T.closeModal()}),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(4,"ion-content",2),n.TgZ(5,"div",3),n.TgZ(6,"ion-avatar",4),n._UZ(7,"ion-icon",5),n.qZA(),n.TgZ(8,"h4"),n.TgZ(9,"strong"),n._uU(10),n.ALo(11,"translate"),n.qZA(),n.qZA(),n.TgZ(12,"p",6),n._uU(13),n.ALo(14,"translate"),n.qZA(),n.qZA(),n.TgZ(15,"ion-list"),n.TgZ(16,"p",7),n._uU(17),n.ALo(18,"translate"),n.qZA(),n.TgZ(19,"ion-button",8),n.NdJ("click",function(){return T.finds()}),n._uU(20),n.ALo(21,"translate"),n.YNc(22,a,1,0,"ion-spinner",9),n.qZA(),n.qZA(),n.qZA()),2&g&&(n.Q6J("translucent",!1),n.xp6(4),n.Q6J("fullscreen",!0),n.xp6(6),n.Oqu(n.lcZ(11,8,"messenger.sessionname")),n.xp6(3),n.Oqu(n.lcZ(14,10,"messenger.sessiondesc")),n.xp6(4),n.Oqu(n.lcZ(18,12,"messenger.qrscanreq")),n.xp6(2),n.Q6J("disabled",T.form_post_pross),n.xp6(1),n.hij("\n",n.lcZ(21,14,"messenger.confentry"),"\n"),n.xp6(2),n.Q6J("ngIf",T.form_post_pross))},directives:[e.Gu,e.sr,e.wd,e.gu,e.W2,e.BJ,e.q_,e.YG,h.O5,e.PQ],pipes:[l.X$],styles:["ion-item[_ngcontent-%COMP%]{--border-color: rgb(255 255 255 / 0%);padding:12px 0}ion-avatar.avatar-lg[_ngcontent-%COMP%], .avatar-lg[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{display:inline-block;width:50px;height:50px}ion-title[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{width:110px;height:47px}"]}),o})()}}]);