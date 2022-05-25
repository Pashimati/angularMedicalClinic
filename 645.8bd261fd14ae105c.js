"use strict";(self.webpackChunkclinic=self.webpackChunkclinic||[]).push([[645],{2645:(x,l,r)=>{r.r(l),r.d(l,{DoctorModule:()=>U});var a=r(9808),p=r(325),e=r(5e3),g=r(3900),h=r(1271),v=r(1673),C=r(9576),c=r(9224),m=r(7423),d=r(2382);let b=(()=>{class t{constructor(){this.OnRemove=new e.vpe}remove(n){this.OnRemove.emit(n)}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-entry-card"]],inputs:{user:"user"},outputs:{OnRemove:"OnRemove"},features:[e._Bn([])],decls:23,vars:12,consts:[[1,"card"],["mat-button","","color","warn",1,"btn-close",3,"click"],["type","hidden",3,"ngModel","ngModelChange"],[1,"date-bold"],["mat-button","",3,"href"]],template:function(n,s){1&n&&(e.TgZ(0,"mat-card",0)(1,"button",1),e.NdJ("click",function(){return s.remove(s.user.id)}),e._uU(2,"\u0443\u0434\u0430\u043b\u0438\u0442\u044c"),e.qZA(),e.TgZ(3,"input",2),e.NdJ("ngModelChange",function(i){return s.user.id=i}),e.qZA(),e.TgZ(4,"mat-card-title"),e._uU(5),e.qZA(),e.TgZ(6,"mat-card-subtitle"),e._uU(7),e.qZA(),e.TgZ(8,"mat-card-content")(9,"p",3),e._uU(10),e.ALo(11,"date"),e.qZA(),e.TgZ(12,"p"),e._uU(13),e.qZA(),e.TgZ(14,"p"),e._uU(15),e.qZA(),e.TgZ(16,"p"),e._uU(17),e.qZA()(),e.TgZ(18,"mat-card-actions")(19,"a",4),e._uU(20,"\u041d\u0430\u043f\u0438\u0441\u0430\u0442\u044c"),e.qZA(),e.TgZ(21,"a",4),e._uU(22,"\u041f\u043e\u0437\u0432\u043e\u043d\u0438\u0442\u044c"),e.qZA()()()),2&n&&(e.xp6(3),e.Q6J("ngModel",s.user.id),e.xp6(2),e.Oqu(s.user.name+" "+s.user.surname),e.xp6(2),e.hij("\u041f\u043e\u043b: ",s.user.sex,""),e.xp6(3),e.Oqu(e.xi3(11,9,s.user.date,"d MMM, y, h:mm")),e.xp6(3),e.Oqu(s.user.address),e.xp6(2),e.hij("phone: ",s.user.phone,""),e.xp6(2),e.hij("Email: ",s.user.email,""),e.xp6(2),e.MGl("href","mailto:",s.user.email,"",e.LSH),e.xp6(2),e.MGl("href","tel:",s.user.phone,"",e.LSH))},directives:[c.a8,m.lW,d.Fj,d.JJ,d.On,c.n5,c.$j,c.dn,c.hq,m.zs],pipes:[a.uU],styles:["[_nghost-%COMP%]{width:100%}.card[_ngcontent-%COMP%]{position:relative}.btn-close[_ngcontent-%COMP%]{position:absolute;left:90%}.date-bold[_ngcontent-%COMP%]{font-weight:700}"]}),t})();function y(t,o){if(1&t){const n=e.EpF();e.TgZ(0,"app-entry-card",3),e.NdJ("OnRemove",function(u){return e.CHM(n),e.oxw().removeSubscription(u)}),e.qZA()}2&t&&e.Q6J("user",o.$implicit)}let O=(()=>{class t{constructor(n,s,u,i){this._snackBar=n,this.subscribeService=s,this.userService=u,this.route=i,this.idDoctor="",this.users=[]}ngOnInit(){this.route.paramMap.pipe((0,g.w)(n=>n.getAll("id"))).subscribe(n=>{this.idDoctor=n,this.getSubscribeUsers(n)})}getSubscribeUsers(n){this.subscribeService.getAllSubscriptionsById(n).subscribe({next:s=>{s.success&&s.subscriptionsById.map(i=>{const A=i.id,E=i.data.email;let D=i.data.date;this.userService.getUser(i.data.uidUser).subscribe({next:B=>{this.users.push(Object.assign(Object.assign({},B.user),{email:E,date:D,id:A}))}})})}})}removeSubscription(n){this.subscribeService.deleteSubscription(n).subscribe({next:s=>{s.success?(this.users=[],this.getSubscribeUsers(this.idDoctor),this._snackBar.open("Subscription has been deleted","Undo",{duration:3e3})):this._snackBar.open("Subscription not been deleted","Undo",{duration:3e3})}})}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(h.ux),e.Y36(v.T),e.Y36(C.f),e.Y36(p.gz))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-list-of-entries"]],features:[e._Bn([])],decls:3,vars:1,consts:[[1,"container"],[1,"wrap-cards"],[3,"user","OnRemove",4,"ngFor","ngForOf"],[3,"user","OnRemove"]],template:function(n,s){1&n&&(e.TgZ(0,"div",0)(1,"div",1),e.YNc(2,y,1,1,"app-entry-card",2),e.qZA()()),2&n&&(e.xp6(2),e.Q6J("ngForOf",s.users))},directives:[a.sg,b],styles:[".wrap-cards[_ngcontent-%COMP%]{padding-top:200px;display:flex;flex-wrap:wrap;gap:40px}"]}),t})(),f=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-doctor"]],features:[e._Bn([])],decls:1,vars:0,template:function(n,s){1&n&&e._UZ(0,"app-list-of-entries")},directives:[O],styles:[""]}),t})();const M=[{path:"",component:f}];let Z=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[p.Bz.forChild(M)],p.Bz]}),t})();var T=r(3850);let U=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t,bootstrap:[f]}),t.\u0275inj=e.cJS({providers:[],imports:[[T.m,a.ez,Z]]}),t})()}}]);