"use strict";(self.webpackChunkion_holla_messenger=self.webpackChunkion_holla_messenger||[]).push([[6591],{6591:(Ao,An,r)=>{r.r(An),r.d(An,{LoginPageModule:()=>_o});var fn=r(8583),vn=r(6378),xn=r(4762),a=r(3679),T=r(3065),Zn=r(7461),w=r(1815),yn=r(5257),Ln=r(4353),Tn=r.n(Ln),wn=r(663),y=r.n(wn),bn=r(2810),n=r(3018),In=r(7635),kn=r(393),g=r(4490),Cn=r(887),Nn=r(5795),Sn=r(4540);function Pn(i,s){1&i&&n._UZ(0,"ion-icon",14)}function Un(i,s){1&i&&n._UZ(0,"ion-icon",15)}function Jn(i,s){if(1&i&&(n.TgZ(0,"div"),n._UZ(1,"ion-spinner",16),n.TgZ(2,"p",17),n._uU(3),n.ALo(4,"translate"),n.qZA(),n.qZA()),2&i){const o=n.oxw();n.Udp("display","conneting"==o.serverstatus?"":"none"),n.xp6(3),n.Oqu(n.lcZ(4,3,"messenger.serverconnecting"))}}function qn(i,s){if(1&i&&(n.TgZ(0,"div"),n._UZ(1,"ion-icon",18),n.TgZ(2,"p",17),n._uU(3),n.ALo(4,"translate"),n.qZA(),n.qZA()),2&i){const o=n.oxw();n.Udp("display","connecterror"==o.serverstatus?"":"none"),n.xp6(3),n.Oqu(n.lcZ(4,3,"messenger.serverconnecterror"))}}function Yn(i,s){1&i&&n._UZ(0,"ion-icon",42)}function En(i,s){1&i&&n._UZ(0,"ion-spinner",43)}function Dn(i,s){1&i&&n._UZ(0,"ion-icon",44)}function Qn(i,s){1&i&&n._UZ(0,"ion-icon",45)}function Mn(i,s){1&i&&n._UZ(0,"ion-spinner",46)}function Gn(i,s){1&i&&n._UZ(0,"ion-icon",47)}function Rn(i,s){1&i&&(n.TgZ(0,"p",48),n._uU(1),n.ALo(2,"translate"),n._UZ(3,"ion-progress-bar",49),n.qZA()),2&i&&(n.xp6(1),n.hij("\n",n.lcZ(2,1,"auth.lagcallwait"),"\n"))}function Bn(i,s){1&i&&(n.TgZ(0,"p",48),n._uU(1),n.ALo(2,"translate"),n._UZ(3,"ion-progress-bar",49),n.qZA()),2&i&&(n.xp6(1),n.hij("\n",n.lcZ(2,1,"auth.logconnteinfos"),"\n"))}function jn(i,s){1&i&&(n.TgZ(0,"p",48),n._UZ(1,"ion-icon",50),n._uU(2),n.ALo(3,"translate"),n.qZA()),2&i&&(n.xp6(2),n.hij("\n",n.lcZ(3,1,"messenger.sesioncncsel"),"\n"))}function On(i,s){1&i&&n._UZ(0,"ion-spinner",51)}function Fn(i,s){if(1&i){const o=n.EpF();n.TgZ(0,"form",19),n.NdJ("ngSubmit",function(){return n.CHM(o),n.oxw().onLoginPwa()}),n.TgZ(1,"div",20),n._UZ(2,"img",21),n.qZA(),n.TgZ(3,"p",22),n._uU(4),n.ALo(5,"translate"),n.qZA(),n.TgZ(6,"p",23),n._uU(7),n.ALo(8,"translate"),n.qZA(),n.TgZ(9,"p",24),n.NdJ("click",function(){return n.CHM(o),n.oxw().pwanormal()}),n._uU(10),n.ALo(11,"translate"),n.qZA(),n.TgZ(12,"ion-card",25),n.TgZ(13,"ion-item",26),n.TgZ(14,"ion-input",27),n.NdJ("ionChange",function(e){return n.CHM(o),n.oxw().ionChange(e,"email")}),n.ALo(15,"translate"),n.qZA(),n.TgZ(16,"ion-button",28),n.YNc(17,Yn,1,0,"ion-icon",29),n.YNc(18,En,1,0,"ion-spinner",30),n.YNc(19,Dn,1,0,"ion-icon",31),n.qZA(),n.qZA(),n.TgZ(20,"ion-item",32),n.TgZ(21,"ion-input",33),n.NdJ("ionChange",function(e){return n.CHM(o),n.oxw().ionChange(e,"password")}),n.ALo(22,"translate"),n.qZA(),n.TgZ(23,"ion-button",34),n.NdJ("click",function(){return n.CHM(o),n.oxw().passsvibled("passvisibleLog")}),n._UZ(24,"ion-icon",35),n.YNc(25,Qn,1,0,"ion-icon",36),n.YNc(26,Mn,1,0,"ion-spinner",37),n.YNc(27,Gn,1,0,"ion-icon",38),n.qZA(),n.qZA(),n.qZA(),n.YNc(28,Rn,4,3,"p",39),n.YNc(29,Bn,4,3,"p",39),n.YNc(30,jn,4,3,"p",39),n.TgZ(31,"ion-button",40),n._uU(32),n.ALo(33,"translate"),n.YNc(34,On,1,0,"ion-spinner",41),n.qZA(),n.qZA()}if(2&i){const o=n.oxw();n.Udp("display","conneting"==o.serverstatus||"connecterror"==o.serverstatus?"none":""),n.Q6J("formGroup",o.login),n.xp6(4),n.Oqu(n.lcZ(5,23,"login_app_name")),n.xp6(3),n.Oqu(n.lcZ(8,25,"login_qr_info")),n.xp6(3),n.Oqu(n.lcZ(11,27,"login_qr_info_cont")),n.xp6(3),n.Q6J("disabled",o.form_post_pross),n.xp6(1),n.s9C("placeholder",n.lcZ(15,29,"auth.email")),n.xp6(3),n.Q6J("ngIf","minlength"==o.validators_email),n.xp6(1),n.Q6J("ngIf","pross"==o.validators_email),n.xp6(1),n.Q6J("ngIf","okey"==o.validators_email),n.xp6(1),n.Q6J("disabled",o.form_post_pross),n.xp6(1),n.s9C("placeholder",n.lcZ(22,31,"auth.password")),n.xp6(3),n.s9C("name",o.inputpasseye),n.xp6(1),n.Q6J("ngIf","minlength"==o.validators_password),n.xp6(1),n.Q6J("ngIf","pross"==o.validators_password),n.xp6(1),n.Q6J("ngIf","okey"==o.validators_password),n.xp6(1),n.Q6J("ngIf","getinforcalwait"==o.svprinfos),n.xp6(1),n.Q6J("ngIf","getinfor"==o.svprinfos),n.xp6(1),n.Q6J("ngIf","getinforred"==o.svprinfos),n.xp6(1),n.Q6J("disabled",!o.login.valid||o.form_post_pross),n.xp6(1),n.hij("\n",n.lcZ(33,33,"auth.log_in"),"\n"),n.xp6(2),n.Q6J("ngIf",o.form_post_pross)}}function Vn(i,s){1&i&&n._UZ(0,"ion-spinner",51)}function zn(i,s){if(1&i){const o=n.EpF();n.TgZ(0,"ion-button",65),n.NdJ("click",function(){return n.CHM(o),n.oxw(2).register()}),n._uU(1),n.ALo(2,"translate"),n.ALo(3,"translate"),n.YNc(4,Vn,1,0,"ion-spinner",41),n.qZA()}if(2&i){const o=n.oxw(2);n.Q6J("disabled",!o.login.valid||o.form_post_pross),n.xp6(1),n.hij("\n",o.mailsatusu?n.lcZ(3,5,"auth.sendinmail"):n.lcZ(2,3,"auth.verifcations"),"\n"),n.xp6(3),n.Q6J("ngIf",o.form_post_pross)}}function Xn(i,s){1&i&&n._UZ(0,"ion-icon",42)}function Kn(i,s){1&i&&n._UZ(0,"ion-spinner",43)}function Hn(i,s){1&i&&n._UZ(0,"ion-icon",44)}function Wn(i,s){1&i&&n._UZ(0,"ion-icon",45)}function $n(i,s){1&i&&n._UZ(0,"ion-spinner",46)}function no(i,s){1&i&&n._UZ(0,"ion-icon",47)}function oo(i,s){1&i&&n._UZ(0,"ion-spinner",46)}function io(i,s){1&i&&n._UZ(0,"ion-icon",45)}function eo(i,s){1&i&&n._UZ(0,"ion-icon",47)}function to(i,s){1&i&&n._UZ(0,"ion-spinner",51)}function so(i,s){if(1&i&&(n.TgZ(0,"ion-button",40),n._uU(1),n.ALo(2,"translate"),n.YNc(3,to,1,0,"ion-spinner",41),n.qZA()),2&i){const o=n.oxw(2);n.Q6J("disabled",!o.login.valid||o.form_post_pross),n.xp6(1),n.hij("\n",n.lcZ(2,3,"auth.log_in"),"\n"),n.xp6(2),n.Q6J("ngIf",o.form_post_pross)}}function ao(i,s){if(1&i){const o=n.EpF();n.TgZ(0,"form",19),n.NdJ("ngSubmit",function(){return n.CHM(o),n.oxw().onLogin()}),n.TgZ(1,"div",20),n._UZ(2,"img",21),n.qZA(),n.TgZ(3,"p",22),n._uU(4),n.ALo(5,"translate"),n.qZA(),n.TgZ(6,"ion-card",25),n.TgZ(7,"ion-item",26),n._UZ(8,"ion-input",52),n.ALo(9,"translate"),n.TgZ(10,"ion-button",34),n.NdJ("click",function(){return n.CHM(o),n.oxw().sendEmail()}),n._UZ(11,"ion-icon",53),n.qZA(),n.qZA(),n.qZA(),n.YNc(12,zn,5,7,"ion-button",54),n.TgZ(13,"ion-card",25),n.TgZ(14,"ion-item",26),n.TgZ(15,"ion-input",27),n.NdJ("ionChange",function(e){return n.CHM(o),n.oxw().ionChange(e,"email")}),n.ALo(16,"translate"),n.qZA(),n.TgZ(17,"ion-button",28),n.YNc(18,Xn,1,0,"ion-icon",29),n.YNc(19,Kn,1,0,"ion-spinner",30),n.YNc(20,Hn,1,0,"ion-icon",31),n.qZA(),n.qZA(),n.TgZ(21,"ion-item",55),n.TgZ(22,"ion-input",33),n.NdJ("ionChange",function(e){return n.CHM(o),n.oxw().ionChange(e,"password")}),n.ALo(23,"translate"),n.qZA(),n.TgZ(24,"ion-button",34),n.NdJ("click",function(){return n.CHM(o),n.oxw().passsvibled("passvisibleLog")}),n._UZ(25,"ion-icon",35),n.YNc(26,Wn,1,0,"ion-icon",36),n.YNc(27,$n,1,0,"ion-spinner",37),n.YNc(28,no,1,0,"ion-icon",38),n.qZA(),n.qZA(),n.TgZ(29,"ion-item",55),n.TgZ(30,"ion-input",56),n.NdJ("ionChange",function(e){return n.CHM(o),n.oxw().ionChange(e,"passwordtry")}),n.ALo(31,"translate"),n.qZA(),n.TgZ(32,"ion-button",34),n.NdJ("click",function(){return n.CHM(o),n.oxw().passsvibled("passvisibleLog")}),n.YNc(33,oo,1,0,"ion-spinner",37),n.YNc(34,io,1,0,"ion-icon",36),n.YNc(35,eo,1,0,"ion-icon",38),n.qZA(),n.qZA(),n.TgZ(36,"p",57),n._uU(37),n.ALo(38,"translate"),n.qZA(),n.TgZ(39,"ion-item",58),n._UZ(40,"ion-input",59),n.ALo(41,"translate"),n.qZA(),n.TgZ(42,"p",60),n._uU(43),n.ALo(44,"translate"),n.qZA(),n.TgZ(45,"p",57),n._uU(46),n.ALo(47,"translate"),n.qZA(),n.TgZ(48,"ion-item",61),n._UZ(49,"ion-input",62),n.qZA(),n.TgZ(50,"p",63),n._uU(51),n.ALo(52,"translate"),n.qZA(),n.qZA(),n.YNc(53,so,4,5,"ion-button",64),n.qZA()}if(2&i){const o=n.oxw();n.Q6J("formGroup",o.login),n.xp6(4),n.Oqu(n.lcZ(5,30,"login_app_name")),n.xp6(2),n.Udp("display",o.emailcode?"":"none"),n.xp6(1),n.Q6J("disabled",o.form_post_pross),n.xp6(1),n.s9C("placeholder",n.lcZ(9,32,"auth.emailcode")),n.xp6(4),n.Q6J("ngIf",o.emailcode),n.xp6(1),n.Udp("display",o.emailcode?"none":""),n.xp6(1),n.Q6J("disabled",o.form_post_pross),n.xp6(1),n.s9C("placeholder",n.lcZ(16,34,"auth.email")),n.xp6(3),n.Q6J("ngIf","minlength"==o.validators_email),n.xp6(1),n.Q6J("ngIf","pross"==o.validators_email),n.xp6(1),n.Q6J("ngIf","okey"==o.validators_email),n.xp6(2),n.s9C("placeholder",n.lcZ(23,36,"auth.password")),n.xp6(3),n.s9C("name",o.inputpasseye),n.xp6(1),n.Q6J("ngIf","minlength"==o.validators_password),n.xp6(1),n.Q6J("ngIf","pross"==o.validators_password),n.xp6(1),n.Q6J("ngIf","okey"==o.validators_password),n.xp6(2),n.s9C("placeholder",n.lcZ(31,38,"auth.password_confirm")),n.xp6(3),n.Q6J("ngIf","pross"==o.validators_passwordtry),n.xp6(1),n.Q6J("ngIf","minlength"==o.validators_passwordtry),n.xp6(1),n.Q6J("ngIf","okey"==o.validators_passwordtry),n.xp6(2),n.Oqu(n.lcZ(38,40,"auth.name")),n.xp6(3),n.s9C("placeholder",n.lcZ(41,42,"auth.name")),n.xp6(3),n.Oqu(n.lcZ(44,44,"auth.nameinfo")),n.xp6(3),n.Oqu(n.lcZ(47,46,"auth.userid")),n.xp6(3),n.Q6J("disabled",!0),n.xp6(2),n.Oqu(n.lcZ(52,48,"auth.useridinfo")),n.xp6(2),n.Q6J("ngIf",!o.emailcode)}}const b="SESSION",po=[{path:"",component:(()=>{class i{constructor(o,t,e,l,m,p,d,h){this.fb=o,this.localStorageService=t,this.dataConfig=e,this.config=l,this.generalFunctions=m,this.store=p,this.statusBarSettings=d,this.platform=h,this.inputpasseye="eye-outline",this.userData={userid:"",fname:"",username:"",password:"",email:"",language:"",version:"",platform:"",cordova:"",model:"",dplatform:"",uuid:"",dversion:"",manufacturer:"",disvirtual:!1,serial:"",device_uid_token:""},this.themewave="wave",this.serverstatus="conneting",this.device_uid=this.localStorageService.getItem("DEVECI_UID"),this.userData.device_uid_token=this.device_uid,this.dataConfig.getConf().then(A=>{this.getConfig=A,this.userData.version=this.getConfig.version,this.socketurl=this.getConfig.socketurl,this.serverid=this.getConfig.server_id,this.serverpassword=this.getConfig.server_password,this.pwamobile_encryption_token=this.getConfig.pwamobile_encryption_token,this.mail_securetoken=this.getConfig.mail_securetoken,this.mail_host=this.getConfig.mail_host,this.mail_username=this.getConfig.mail_username,this.mail_password=this.getConfig.mail_password,this.mail_from=this.getConfig.mail_from,this.userData.platform=this.config.get("mode"),bn.A.getInfo().then(c=>{this.userData.cordova=c.webViewVersion,this.userData.model=c.model,this.userData.dplatform=c.platform,this.userData.uuid=this.localStorageService.getItem("_capuid"),this.userData.dversion=c.osVersion,this.userData.manufacturer=c.manufacturer,this.userData.disvirtual=c.isVirtual,this.userData.serial="operatingSystem: "+c.operatingSystem,this.getdevicedetail=c.operatingSystem+" - "+c.osVersion+" - "+c.platform})}),this.userData.language=window.navigator.language,this.theme$=this.store.pipe((0,T.Ys)(w.Pu)),this.defaultThemeModes()}defaultThemeModes(){return(0,xn.mG)(this,void 0,void 0,function*(){(yield this.store.pipe((0,T.Ys)(w.Pu),(0,yn.q)(1)).toPromise())?(this.themewave="wave",this.thememode=" active"):(this.themewave="waveclosed",this.thememode="")})}changeThemeModes(o){return(0,xn.mG)(this,void 0,void 0,function*(){const t=yield this.store.pipe((0,T.Ys)(w.Pu),(0,yn.q)(1)).toPromise();1==o&&(setTimeout(()=>{this.store.dispatch((0,Zn.q)({isDark:!t}))},300),this.platform.is("cordova")&&this.statusBarSettings.changeStatusBar("styleLightContent","#000000")),2==o&&(this.store.dispatch((0,Zn.q)({isDark:!t})),this.platform.is("cordova")&&this.statusBarSettings.changeStatusBar("","#ffffff"))})}themeMode(){this.thememode?(this.themewave="waveclosed",this.thememode="",this.changeThemeModes(2)):(this.themewave="wave",this.thememode=" active",this.changeThemeModes(1))}onLoginPwa(){if("connect"==this.serverstatus&&(this.login.valid||!this.form_post_pross)){this.form_post_pross=!0,this.svprinfos="getinforcalwait";var o=this.login.value.email,t=this.login.value.password,e=y()(this.pwamobile_encryption_token),l=this.encryptionLi(e,t,"encrypting"),m=this.encryptionLi(e,o,"encrypting"),p=this.encryptionLi(e,l+m,"encrypting");this.connection.send({remail:o,email:m,passcrpyt:l,token:p,g_type:"pwa_login_control",devices:this.getdevicedetail})}}onLogin(){(this.login.valid||!this.form_post_pross)&&(this.form_post_pross=!0,this.userData.email=this.login.value.email,this.userData.password=this.login.value.password,this.userData.fname=this.login.value.fname,this.userData.userid=this.login.value.userid,"test@market.com"==this.userData.email&&"123456789"==this.userData.password&&"MarketTest"==this.userData.fname?this.loginIn():this.sendEmail())}register(){this.emailcode==this.login.value.emailcode?this.loginIn():console.log("hata")}sendEmail(){var t=this.encryptionLi(this.pwamobile_encryption_token,this.GenerateSerialNumber("000-0000-000-00-00"),"encrypting");this.emailcode=t,this.form_post_pross=!0,this.mailsatusu=!0,Email.send({SecureToken:this.mail_securetoken,Host:this.mail_host,Username:this.mail_username,Password:this.mail_password,To:this.login.value.email,From:this.mail_from,Subject:this.generalFunctions.xtranslate("auth.mailverifcationssub"),Body:this.generalFunctions.xtranslate("auth.mailverifcationscode")+": <pre><code>"+this.emailcode+"</code></pre>"}).then(e=>{this.form_post_pross=!1,this.mailsatusu=!1,console.log(e)})}loginIn(){var o=y()(this.pwamobile_encryption_token),t=this.encryptionLi(o,this.login.value.password,"encrypting"),m=[{logintype:"mobile",email:this.login.value.email,password:t,name:this.login.value.fname,userid:this.login.value.userid,photo:"none",desc_status:this.generalFunctions.xtranslate("messenger.heyhollause"),chatDizayn:{name:"chat_wall_2",image:"assets/images/chatbanner/2.png",visebled:!0},chatDizaynColor:{name:"chat_color_1",color:"#e5ddd5"}}];this.localStorageService.setItem(b,m),this.generalFunctions.navCtrlNR("/")}encryptionLi(o,t,e){if("encrypting"==e)return((d,h)=>{const A=_=>_.split("").map(f=>f.charCodeAt(0));return h.split("").map(A).map(_=>A(d).reduce((f,L)=>f^L,_)).map(_=>("0"+Number(_).toString(16)).substr(-2)).join("")})(o,btoa(unescape(encodeURIComponent(t))));if("decrypting"==e){const d=((d,h)=>h.match(/.{1,2}/g).map(u=>parseInt(u,16)).map(u=>(u=>u.split("").map(_=>_.charCodeAt(0)))(d).reduce((_,f)=>_^f,u)).map(u=>String.fromCharCode(u)).join(""))(o,t);return decodeURIComponent(escape(window.atob(d)))}}ionViewDidEnter(){this.login&&this.login.get("userid")&&this.login.get("userid").setValue(this.createUserID())}createUserID(){var o=y()("token_crpty_id_"+new Date),t=this.encryptionLi(o,this.login.value.email.length,"encrypting");return this.device_uid+t+"-"+this.GenerateSerialNumber("000-0000-000-00-00")}GenerateRandomNumber(o,t){return Math.floor(Math.random()*(t-o+1))+o}GenerateRandomChar(){var o="1234567890AaBbCcDdEeFfGgIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";return o[this.GenerateRandomNumber(0,o.length-1)]}GenerateSerialNumber(o){var t="";if(null!=o)for(var e=0;e<o.length;e++){var l=o[e];t+="0"==l?this.GenerateRandomChar():l}return t}ionChange(o,t){var e,l,m,p,d,h,A,c,u,_,f,L,I,k,C,N,S,P,U,J,q,Y,E,D,Q,M,G,R,B,j,O,F,V,z,X,K,H,W,$,nn,on,en,tn,sn,an,rn,ln,cn,gn,dn,pn,mn,un,_n,hn;if("email"==t){this.validators_email="pross";var v=null===(m=null===(l=null===(e=this.login)||void 0===e?void 0:e.controls)||void 0===l?void 0:l.email)||void 0===m?void 0:m.status;(x=null===(c=null===(A=null===(h=null===(d=null===(p=this.login)||void 0===p?void 0:p.controls)||void 0===d?void 0:d.email)||void 0===h?void 0:h.errors)||void 0===A?void 0:A.minlength)||void 0===c?void 0:c.actualLength)<(Z=null===(I=null===(L=null===(f=null===(_=null===(u=this.login)||void 0===u?void 0:u.controls)||void 0===_?void 0:_.email)||void 0===f?void 0:f.errors)||void 0===L?void 0:L.minlength)||void 0===I?void 0:I.requiredLength)||"INVALID"==v?this.validators_email="minlength":(this.validators_email="pross",this.validators_email="okey")}if("username"==t){this.validators_username="pross",this.login.get("username").setValue(this.toSeoUrl(this.login.get("username").value));var ho=/^[0-9a-zA-Z_.]+$/.test(null===(N=null===(C=null===(k=this.login)||void 0===k?void 0:k.controls)||void 0===C?void 0:C.username)||void 0===N?void 0:N.value);v=null===(U=null===(P=null===(S=this.login)||void 0===S?void 0:S.controls)||void 0===P?void 0:P.username)||void 0===U?void 0:U.status,(x=null===(D=null===(E=null===(Y=null===(q=null===(J=this.login)||void 0===J?void 0:J.controls)||void 0===q?void 0:q.username)||void 0===Y?void 0:Y.errors)||void 0===E?void 0:E.minlength)||void 0===D?void 0:D.actualLength)<(Z=null===(B=null===(R=null===(G=null===(M=null===(Q=this.login)||void 0===Q?void 0:Q.controls)||void 0===M?void 0:M.username)||void 0===G?void 0:G.errors)||void 0===R?void 0:R.minlength)||void 0===B?void 0:B.requiredLength)||"INVALID"==v||!ho?this.validators_username="minlength":(this.validators_username="okey",this.login.get("userid")&&this.login.get("userid").setValue(this.createUserID()))}if("password"==t){this.validators_password="pross",v=null===(F=null===(O=null===(j=this.login)||void 0===j?void 0:j.controls)||void 0===O?void 0:O.password)||void 0===F?void 0:F.status;var x=null===(H=null===(K=null===(X=null===(z=null===(V=this.login)||void 0===V?void 0:V.controls)||void 0===z?void 0:z.password)||void 0===X?void 0:X.errors)||void 0===K?void 0:K.minlength)||void 0===H?void 0:H.actualLength,Z=null===(en=null===(on=null===(nn=null===($=null===(W=this.login)||void 0===W?void 0:W.controls)||void 0===$?void 0:$.password)||void 0===nn?void 0:nn.errors)||void 0===on?void 0:on.minlength)||void 0===en?void 0:en.requiredLength;this.validators_password=x<Z||"INVALID"==v?"minlength":"okey"}"passwordtry"==t&&(this.validators_passwordtry="pross",v=null===(an=null===(sn=null===(tn=this.login)||void 0===tn?void 0:tn.controls)||void 0===sn?void 0:sn.password)||void 0===an?void 0:an.status,x=null===(dn=null===(gn=null===(cn=null===(ln=null===(rn=this.login)||void 0===rn?void 0:rn.controls)||void 0===ln?void 0:ln.password)||void 0===cn?void 0:cn.errors)||void 0===gn?void 0:gn.minlength)||void 0===dn?void 0:dn.actualLength,Z=null===(hn=null===(_n=null===(un=null===(mn=null===(pn=this.login)||void 0===pn?void 0:pn.controls)||void 0===mn?void 0:mn.password)||void 0===un?void 0:un.errors)||void 0===_n?void 0:_n.minlength)||void 0===hn?void 0:hn.requiredLength,this.validators_passwordtry=x<Z||"INVALID"==v?"minlength":this.login.value.password==this.login.value.passwordtry?"okey":"minlength")}passsvibled(o){var t=document.getElementById(o),e=document.getElementById(o+"try");"password"===t.type?(t.type="text",this.inputpasseye="eye-off-outline"):(t.type="password",this.inputpasseye="eye-outline"),e&&("password"===e.type?(e.type="text",this.inputpasseye="eye-off-outline"):(e.type="password",this.inputpasseye="eye-outline"))}toSeoUrl(o){return o.toString().replace(/[|&;$%@"<>()+,-]/g,"_").normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/\s+/g,"_").toLowerCase().replace(/&/g,"_").replace(/[^a-z0-9\_]/g,"_").replace(/-+/g,"_").replace(/^-*/,"").replace(/-*$/,"").replace(/%20/g,"").replace(/ /g,"").toLowerCase().trim()}webRtcConnet(){this.serverstatus="conneting",this.connection=new(Tn()),this.connection.enableLogs=!1,this.connection.enableFileSharing=!0,this.connection.socketURL=this.socketurl,this.connection.session={data:!0},this.connection.autoSaveToDisk=!1;var o="holla-idmessenger-sx54d5sa-AcDea54ds-xSdr532-as4ds0457";this.connection.extra={userid:o,fullName:"Holla",email:"messenger@holla.ueserver",logintype:"pwa",photo:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCACWAJYDASIAAhEBAxEB/8QAGwABAAEFAQAAAAAAAAAAAAAAAAEDBAUGBwL/xAAyEAACAgECAwcCBQQDAAAAAAAAAQIDBAUREiExBhMiQVFhcYGRFDJCU8EjJFKxg5Kh/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AMKAAAAAAEdAJAAAAAAQSAAAAAAAR0JAq0X20ScqbJQk1s3F7ApAAAABBIAIAAAAAAAAAAAAAAAAgkAAAA6AEdAJAAFxg4rzcuGPGahKfKLl039Cpn6Vm6c/7mmUY9FNc4v6lDE4nl1KFiqnxrhm+kXvyZ1Cnjsx4rJriptbTj1QHKgb9qPZfAzE5Up49vrDo/lGsah2b1DBTmq+/qX6q+f/AJ1AxADTT2a2YAAAAAAAAAAAAAAAAAdAB0AHSdCtut0umV04WeFcNkX+Ze/uc2Np7F5LVtmM8nZPxKmS6+6e/UDcQABYZ2j4OoJ9/RHi/wA48pL6mqa12Ylp2NPKpv7yqG28ZLaS3exvRbajjrL07Io/craXztyA5cBs4txa2a5NAAAAAAAAAAAgAAAAAAD3RZ3N9djTfBJPwy2f0fkeAB0vStTxNQoj+Hu4pxXihJ+NfJfnONG1rI0u1Rr4JVSfijPp87rodAxcmvJohZXZXLiW/glxICuAAOf9qdLeBqMr4L+he+JP0l5r+TCnU8vFpzceVGRBTrl5Py9zTtQ7I5dM5Sw5K+vyTe0kBgaaZ3yca1u1Fy29kt2UzOaFjZOBrdEsrGtrg24tyg9ua26k9pNClp90snHjvizfRfofp8AYIAAAAAQAAEEgAAAABc42HZl+GiUJWftt7N/G/UC2LzTNTu0u920wrm31U1v9vQucfR3xd3nQycV+U+644/XbobHgdn6uCLutx8urybp2l/2T/wBgVtN7TYeVVBZFsa8iT27uMJP+OZm091uixq0XTaZcUMKndebjv/svopRSUUkl0SAkAtdSzYafg25VnNQXJer8kBcSlGK3k0l7niyFWTROuXDZXNbNdUzmefqWXqVztyLZbfpgntGK9kRhZ2TgXq3GulFrqt+T9mgPGZT+GzL6N9+7m47/AAykVMq95WXdkSWztm5NLy3KYAAAAAAAAAAAAABm9P7UZ+ElC1rJqXlN+L7mxYvazTb0u9lOiXpOPL7o0IbAdOq1XT7lvXm0P/kR6nqOFWt55lEV72I5dwocKA6fianhZt06sXIhbOC3aj6GJ7bqb0evh/KrlxfGz/k07By7sDKhkY8uGcfs16M3KvXNL1rCni5c1RKxbOM3tz9U+gGikmS1HRMnA4ppxvoXS2tp8vdeRjQAAAdACOgEoAAAAAAAAAAAAAAAAbbgARwokAAGAAQAAAAAAAAIJAAAAAAAAAAAAAQBIAAAAAgABVyaZY+ROmbTlB7NroUgAAAAAAAAAAAAAAAAAAAAAADLaLoy1OE7LLXCuPJKPVsAAf/Z",desc_status:"Service Notifications"},this.connection.onopen=e=>{},this.connection.onmessage=e=>{if("pwa_login_session"==e.data.g_type&&e.data.remail==this.login.value.email||"pwa_login_session_cancel"==e.data.g_type&&e.data.remail==this.login.value.email||"pwa_login_session_already"==e.data.g_type&&e.data.remail==this.login.value.email){var l=this.login.value.email,m=this.login.value.password,p=y()(this.pwamobile_encryption_token),d=this.encryptionLi(p,m,"encrypting"),h=this.encryptionLi(p,l,"encrypting"),A=this.encryptionLi(p,d+h,"encrypting");if(e.data.token==A){if("pwa_login_session"==e.data.g_type){console.log("login");var c=e.data.inuserdata.userid,_=e.data.allmessage;this.localStorageService.setItem("PEOPLE_DATA_"+c,e.data.inpeopledata);for(let f of _)this.localStorageService.setItem("MESSAGE_DETAIL_DATA_"+f.userid,f.data);e.data.inuserdata.logintype="pwa",this.localStorageService.setItem(b,[e.data.inuserdata]),setTimeout(()=>{this.localStorageService.setItem("loginsycndisable"+c,"disabled"),this.connection.closeSocket(),this.connection=null},400),setTimeout(()=>{this.generalFunctions.navCtrlNR("/")},950)}"pwa_login_session_cancel"==e.data.g_type&&(console.log("cancel"),this.svprinfos="getinforred",this.form_post_pross=!1),"pwa_login_session_already"==e.data.g_type&&(console.log("ba\u011flant\u0131 kuruldu"),this.svprinfos="getinfor")}}},this.connection.password=y()(this.serverpassword);let t=y()(this.serverid);this.connection.userid=this.GenerateSerialNumber("000-0000-000-00-00")+o,this.connection.openOrJoin(t,(e,l,m,p)=>{p&&(console.log(p),this.serverstatus="connecterror"),!0===e&&(this.serverstatus="connect")})}ngOnInit(){this.desktopwebs=this.platform.is("mobile")?"mobilesall":"desktopwebs",this.localStorageService.getItem("nodevicespwa")&&(this.desktopwebs="mobilesall",this.localStorageService.setItem("nodevicespwa",!1)),"desktopwebs"==this.desktopwebs?(setTimeout(()=>{this.webRtcConnet()},250),this.login=this.fb.group({email:this.fb.control("",[a.kI.required,a.kI.minLength(5),a.kI.maxLength(70),a.kI.email]),password:this.fb.control("",[a.kI.required,a.kI.minLength(6),a.kI.maxLength(70)])})):this.login=this.fb.group({email:this.fb.control("",[a.kI.required,a.kI.minLength(5),a.kI.maxLength(70),a.kI.email]),emailcode:this.fb.control("",[a.kI.minLength(5),a.kI.maxLength(100)]),password:this.fb.control("",[a.kI.required,a.kI.minLength(6),a.kI.maxLength(70)]),passwordtry:this.fb.control("",[a.kI.required,a.kI.minLength(6),a.kI.maxLength(70)]),fname:this.fb.control("",[a.kI.required,a.kI.minLength(3),a.kI.maxLength(50)]),userid:this.fb.control("",[a.kI.required,a.kI.minLength(6),a.kI.maxLength(70)])},{validators:this.passwordConfirmMatchValidator})}passwordConfirmMatchValidator(o){const t=o.get("password"),e=o.get("passwordtry");e.hasError("required")||e.hasError("minlength")||e.setErrors(t.value!==e.value?{mismatch:!0}:null)}ionViewWillEnter(){this.sessionChecks()}pwanormal(){this.connection.closeSocket(),this.connection=null,this.desktopwebs="mobilesall",this.localStorageService.setItem("nodevicespwa",!0),this.generalFunctions.navCtrlNR("/")}sessionChecks(){this.localStorageService.getItem("FIRST_START")?this.localStorageService.getItem(b)?this.generalFunctions.navCtrlNR("/message"):this.generalFunctions.navCtrlNR("/auth/login"):this.generalFunctions.navCtrlNR("/starter")}}return i.\u0275fac=function(o){return new(o||i)(n.Y36(a.qu),n.Y36(In.n),n.Y36(kn.V),n.Y36(g.De),n.Y36(Cn.f),n.Y36(T.yh),n.Y36(Nn.B),n.Y36(g.t4))},i.\u0275cmp=n.Xpm({type:i,selectors:[["app-login"]],decls:17,vars:12,consts:[[1,"ion-no-border",2,"position","fixed",3,"translucent"],[2,"--background-color","transparent","--background","transparent"],["slot","start"],["mode","md","text",""],["slot","end"],[3,"click"],["slot","icon-only","name","sunny-outline",4,"ngIf"],["slot","icon-only","name","moon-outline",4,"ngIf"],[1,"auth-page",3,"fullscreen"],[1,"center_loc"],["size-md","6","size-lg","4","size-xs","12",1,"ion-text-center"],[3,"display",4,"ngIf"],[3,"display","formGroup","ngSubmit",4,"ngIf"],[3,"formGroup","ngSubmit",4,"ngIf"],["slot","icon-only","name","sunny-outline"],["slot","icon-only","name","moon-outline"],["name","crescent",2,"width","70px","height","70px"],[2,"margin","40px 20px","font-size","18px","margin-bottom","0"],["name","alert-circle-outline",2,"width","70px","height","70px"],[3,"formGroup","ngSubmit"],[1,"logo"],["src","assets/logo/favicon.png",1,"scale-up-center","logos"],[1,"ion-text-center",2,"margin","10px 0 20px 0"],[1,"ion-text-center",2,"font-size","13px","max-width","407px","margin","0 auto"],[1,"ion-text-center",2,"margin","10px 0 20px 0","font-size","13px","color","#4381c7","font-weight","600","cursor","pointer",3,"click"],["color","light",1,"auth-card","ion-margin"],["lines","none","color","light",3,"disabled"],["maxlength","60","type","email","formControlName","email",3,"placeholder","ionChange"],["slot","end","fill","clear",1,"ion-no-margin","ion-no-padding"],["slot","icon-only","class","ion-no-margin ion-no-padding","color","warning","name","alert-circle-outline",4,"ngIf"],["name","dots",4,"ngIf"],["slot","icon-only","class","ion-no-margin ion-no-padding","color","success","name","checkmark-circle-outline",4,"ngIf"],["lines","none","color","light",1,"ion-no-inner-padding-end",3,"disabled"],["id","passvisibleLog","type","password","maxlength","70","formControlName","password",3,"placeholder","ionChange"],["slot","end","fill","clear",1,"ion-no-margin","ion-no-padding",3,"click"],["slot","icon-only","color","tertiary",1,"ion-no-margin","ion-no-padding",3,"name"],["style","padding-left: 7px;","slot","icon-only","class","ion-no-margin ion-no-padding","color","warning","name","alert-circle-outline",4,"ngIf"],["style","padding-left: 7px;","name","dots",4,"ngIf"],["style","padding-left: 7px;","slot","icon-only","class","ion-no-margin ion-no-padding","color","success","name","checkmark-circle-outline",4,"ngIf"],["style","margin: 30px 0;margin-top: 25px;",4,"ngIf"],["color","dark","expand","block","type","submit",1,"ion-margin-start","ion-margin-end","ion-margin-bottom",3,"disabled"],["name","dots","style","margin-left: 10px;",4,"ngIf"],["slot","icon-only","color","warning","name","alert-circle-outline",1,"ion-no-margin","ion-no-padding"],["name","dots"],["slot","icon-only","color","success","name","checkmark-circle-outline",1,"ion-no-margin","ion-no-padding"],["slot","icon-only","color","warning","name","alert-circle-outline",1,"ion-no-margin","ion-no-padding",2,"padding-left","7px"],["name","dots",2,"padding-left","7px"],["slot","icon-only","color","success","name","checkmark-circle-outline",1,"ion-no-margin","ion-no-padding",2,"padding-left","7px"],[2,"margin","30px 0","margin-top","25px"],["type","indeterminate",2,"width","90%","margin","0 auto","margin-top","10px"],["name","bag-outline"],["name","dots",2,"margin-left","10px"],["maxlength","100","type","text","formControlName","emailcode",3,"placeholder"],["slot","icon-only","color","success","name","sync-outline",1,"ion-no-margin","ion-no-padding"],["color","dark","expand","block","class","ion-margin-start ion-margin-end ion-margin-bottom","type","button",3,"disabled","click",4,"ngIf"],["lines","none","color","light",1,"ion-no-inner-padding-end"],["id","passvisibleLogtry","type","password","maxlength","70","formControlName","passwordtry",3,"placeholder","ionChange"],[2,"display","none","text-align","left","margin-bottom","10px"],["lines","none","color","light"],["type","text","maxlength","50","formControlName","fname",3,"placeholder"],[2,"text-align","left","margin-top","10px","margin-bottom","9px","font-size","13px"],["lines","none","color","light",1,"ion-no-inner-padding-end",2,"display","none"],["id","passvisibleLog","type","text","maxlength","70","formControlName","userid",3,"disabled"],[2,"display","none","text-align","left","margin-top","10px","margin-bottom","10px","font-size","13px"],["color","dark","expand","block","class","ion-margin-start ion-margin-end ion-margin-bottom","type","submit",3,"disabled",4,"ngIf"],["color","dark","expand","block","type","button",1,"ion-margin-start","ion-margin-end","ion-margin-bottom",3,"disabled","click"]],template:function(o,t){1&o&&(n.TgZ(0,"ion-header",0),n.TgZ(1,"ion-toolbar",1),n.TgZ(2,"ion-buttons",2),n._UZ(3,"ion-back-button",3),n.qZA(),n.TgZ(4,"ion-buttons",4),n.TgZ(5,"ion-button",5),n.NdJ("click",function(){return t.themeMode()}),n.YNc(6,Pn,1,0,"ion-icon",6),n.YNc(7,Un,1,0,"ion-icon",7),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(8,"ion-content",8),n._UZ(9,"span"),n.TgZ(10,"ion-grid",9),n.TgZ(11,"ion-row"),n.TgZ(12,"ion-col",10),n.YNc(13,Jn,5,5,"div",11),n.YNc(14,qn,5,5,"div",11),n.YNc(15,Fn,35,35,"form",12),n.YNc(16,ao,54,50,"form",13),n.qZA(),n.qZA(),n.qZA(),n.qZA()),2&o&&(n.Q6J("translucent",!0),n.xp6(6),n.Q6J("ngIf",!t.thememode),n.xp6(1),n.Q6J("ngIf",t.thememode),n.xp6(1),n.Q6J("fullscreen",!0),n.xp6(1),n.MT6("",t.themewave,"",t.thememode,""),n.xp6(4),n.Q6J("ngIf","desktopwebs"==t.desktopwebs),n.xp6(1),n.Q6J("ngIf","desktopwebs"==t.desktopwebs),n.xp6(1),n.Q6J("ngIf","desktopwebs"==t.desktopwebs),n.xp6(1),n.Q6J("ngIf","mobilesall"==t.desktopwebs))},directives:[g.Gu,g.sr,g.Sm,g.oU,g.cs,g.YG,fn.O5,g.W2,g.jY,g.Nd,g.wI,g.gu,g.PQ,a._Y,a.JL,a.sg,g.PM,g.Ie,g.pK,g.j9,a.nD,a.JJ,a.u,g.X7],pipes:[Sn.X$],styles:[""]}),i})()}];let mo=(()=>{class i{}return i.\u0275fac=function(o){return new(o||i)},i.\u0275mod=n.oAB({type:i}),i.\u0275inj=n.cJS({imports:[[vn.Bz.forChild(po)],vn.Bz]}),i})();var uo=r(4466);let _o=(()=>{class i{}return i.\u0275fac=function(o){return new(o||i)},i.\u0275mod=n.oAB({type:i}),i.\u0275inj=n.cJS({imports:[[fn.ez,mo,uo.m]]}),i})()}}]);