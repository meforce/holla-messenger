"use strict";(self.webpackChunkion_holla_messenger=self.webpackChunkion_holla_messenger||[]).push([[4574],{4452:(m,g,e)=>{e.d(g,{T:()=>h});var s=e(8384),c=e(4553);class b extends s.Uw{write(t){var n=this;return(0,c.Z)(function*(){if("undefined"==typeof navigator||!navigator.clipboard)throw n.unavailable("Clipboard API not available in this browser");if(void 0!==t.string)yield n.writeText(t.string);else if(t.url)yield n.writeText(t.url);else{if(!t.image)throw new Error("Nothing to write");if("undefined"==typeof ClipboardItem)throw n.unavailable("Writing images to the clipboard is not supported in this browser");try{const i=yield(yield fetch(t.image)).blob(),r=new ClipboardItem({[i.type]:i});yield navigator.clipboard.write([r])}catch(i){throw new Error("Failed to write image")}}})()}read(){var t=this;return(0,c.Z)(function*(){if("undefined"==typeof navigator||!navigator.clipboard)throw t.unavailable("Clipboard API not available in this browser");if("undefined"==typeof ClipboardItem)return t.readText();try{const n=yield navigator.clipboard.read(),i=n[0].types[0],r=yield n[0].getType(i);return{value:yield t._getBlobData(r,i),type:i}}catch(n){return t.readText()}})()}readText(){var t=this;return(0,c.Z)(function*(){if("undefined"==typeof navigator||!navigator.clipboard||!navigator.clipboard.readText)throw t.unavailable("Reading from clipboard not supported in this browser");return{value:yield navigator.clipboard.readText(),type:"text/plain"}})()}writeText(t){var n=this;return(0,c.Z)(function*(){if("undefined"==typeof navigator||!navigator.clipboard||!navigator.clipboard.writeText)throw n.unavailable("Writting to clipboard not supported in this browser");yield navigator.clipboard.writeText(t)})()}_getBlobData(t,n){return new Promise((i,r)=>{const o=new FileReader;n.includes("image")?o.readAsDataURL(t):o.readAsText(t),o.onloadend=()=>{i(o.result)},o.onerror=v=>{r(v)}})}}const h=(0,s.fo)("Clipboard",{web:()=>new b})},6251:(m,g,e)=>{e.r(g),e.d(g,{CreategroupPageModule:()=>i});var s=e(8583),c=e(6378),b=e(9517),h=e(3018);const d=[{path:"",component:b.ns}];let t=(()=>{class r{}return r.\u0275fac=function(v){return new(v||r)},r.\u0275mod=h.oAB({type:r}),r.\u0275inj=h.cJS({imports:[[c.Bz.forChild(d)],c.Bz]}),r})();var n=e(4466);let i=(()=>{class r{}return r.\u0275fac=function(v){return new(v||r)},r.\u0275mod=h.oAB({type:r}),r.\u0275inj=h.cJS({imports:[[s.ez,t,n.m]]}),r})()},887:(m,g,e)=>{e.d(g,{f:()=>r});var s=e(4762);const b=(0,e(8384).fo)("App",{web:()=>e.e(6141).then(e.bind(e,6141)).then(o=>new o.AppWeb)});var h=e(4452),d=e(3018),t=e(4490),n=e(4540),i=e(8583);let r=(()=>{class o{constructor(a,l,u,p,f,y){this.toastController=a,this.alertController=l,this.translate=u,this.navCtrl=p,this.modalController=f,this.location=y}createWindow(a){return(0,s.mG)(this,void 0,void 0,function*(){window.open(a,"_blank","nodeIntegration=no")})}EC_exitApp(){return(0,s.mG)(this,void 0,void 0,function*(){b.exitApp()})}ToastShowModal(a,l,u){return(0,s.mG)(this,void 0,void 0,function*(){(yield this.toastController.create({message:a,duration:l,position:u})).present()})}presentAlert(a,l,u,p,f){return(0,s.mG)(this,void 0,void 0,function*(){yield(yield this.alertController.create({cssClass:l,header:u,subHeader:p,message:a,buttons:[f]})).present()})}copyText(a,l,u){return(0,s.mG)(this,void 0,void 0,function*(){h.T.write({string:a}),this.ToastShowModal(l+" "+u,"1000","bottom")})}xtranslate(a){return this.translate.get(a).subscribe(l=>{this.nval=l}),this.nval}uumakeid(a){for(var l="",u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",p=u.length,f=0;f<a;f++)l+=u.charAt(Math.floor(Math.random()*p));return l}navCtrlNF(a){return this.navCtrl.navigateForward(a)}navCtrlNB(a){return this.navCtrl.navigateBack(a)}navCtrlNR(a){return this.navCtrl.navigateRoot(a)}navCtrlBack(){return this.navCtrl.back()}goBack(){return this.location.back()}}return o.\u0275fac=function(a){return new(a||o)(d.LFG(t.yF),d.LFG(t.Br),d.LFG(n.sK),d.LFG(t.SH),d.LFG(t.IN),d.LFG(i.Ye))},o.\u0275prov=d.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})()}}]);