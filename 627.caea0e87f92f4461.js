"use strict";(self.webpackChunkclinic=self.webpackChunkclinic||[]).push([[627],{3627:(x,l,e)=>{e.r(l),e.d(l,{RegistrationModule:()=>Z});var s=e(325),n=e(2382),t=e(5e3),p=e(1271),d=e(3830),g=e(7437),m=e(7322),f=e(7531),h=e(1833);let c=(()=>{class o{constructor(r,a,u){this._snackBar=r,this.router=a,this.authService=u,this.register=new n.cw({email:new n.NI("",[n.kI.required,n.kI.email]),password:new n.NI("",n.kI.pattern("[0-9]{10}"))})}ngOnInit(){}submit(){const r=this.register.getRawValue();this.authService.register(r).subscribe({next:()=>{this.router.navigate(["/authorization"]),this._snackBar.open("User created!","Undo",{duration:5e3})}})}}return o.\u0275fac=function(r){return new(r||o)(t.Y36(p.ux),t.Y36(s.F0),t.Y36(d.e))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-registration"]],features:[t._Bn([])],decls:17,vars:1,consts:[[1,"container"],[1,"wrap"],["data-tilt","",1,"login100-pic","js-tilt"],["src","assets/img/login.png","alt","IMG"],["novalidate","",1,"form",3,"formGroup","submit"],[1,"form-title"],["appearance","fill"],["matInput","","placeholder","pat@example.com","formControlName","email","type","email","placeholder","Email","required","",1,"form-control"],["matInput","","placeholder","Confirm password","formControlName","password","type","password","required","",1,"form-control"],["type","submit"]],template:function(r,a){1&r&&(t.TgZ(0,"div",0)(1,"app-back-btn"),t._uU(2,"Back to Home"),t.qZA(),t.TgZ(3,"div",1)(4,"div",2),t._UZ(5,"img",3),t.qZA(),t.TgZ(6,"form",4),t.NdJ("submit",function(){return a.submit()}),t.TgZ(7,"h3",5),t._uU(8,"Please Register"),t.qZA(),t.TgZ(9,"mat-form-field",6)(10,"mat-label"),t._uU(11,"Enter your email"),t.qZA(),t._UZ(12,"input",7),t.qZA(),t.TgZ(13,"mat-form-field",6),t._UZ(14,"input",8),t.qZA(),t.TgZ(15,"app-btn",9),t._uU(16,"Registration"),t.qZA()()()()),2&r&&(t.xp6(6),t.Q6J("formGroup",a.register))},directives:[g.a,n._Y,n.JL,n.sg,m.KE,m.hX,f.Nt,n.Fj,n.JJ,n.u,n.Q7,h.H],styles:[".wrap[_ngcontent-%COMP%]{display:flex;max-width:650px;gap:30px;background:azure;border-radius:20px;margin:0 auto}.form[_ngcontent-%COMP%]{display:flex;flex-direction:column;max-width:300px;justify-content:end}.container[_ngcontent-%COMP%]{padding:250px 0}.form-link[_ngcontent-%COMP%]{padding:20px 0;font-size:15px;display:block;text-decoration:none;color:#587de4}.form-link[_ngcontent-%COMP%]:hover{transform:rotate(5deg)}.form-title[_ngcontent-%COMP%]{font-size:20px;color:#587de4}"]}),o})();const v=[{path:"",component:c}];let R=(()=>{class o{}return o.\u0275fac=function(r){return new(r||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[s.Bz.forChild(v)],s.Bz]}),o})();var C=e(3850);let Z=(()=>{class o{}return o.\u0275fac=function(r){return new(r||o)},o.\u0275mod=t.oAB({type:o,bootstrap:[c]}),o.\u0275inj=t.cJS({providers:[],imports:[[C.m,R]]}),o})()}}]);