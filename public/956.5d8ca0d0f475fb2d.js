"use strict";(self.webpackChunksakai_ng=self.webpackChunksakai_ng||[]).push([[956],{3956:(j,p,i)=>{i.r(p),i.d(p,{LoginModule:()=>Y});var u=i(6814),d=i(7538),a=i(95),e=i(4946),y=i(3859),_=i(5299),v=i(1687),m=i(707),g=i(2332),f=i(5219),b=i(2591);const T=["cb"];function I(n,s){if(1&n&&e._UZ(0,"span",10),2&n){const t=e.oxw(3);e.Q6J("ngClass",t.checkboxIcon)}}function w(n,s){1&n&&e._UZ(0,"CheckIcon",11),2&n&&e.Q6J("styleClass","p-checkbox-icon")}function M(n,s){if(1&n&&(e.ynx(0),e.YNc(1,I,1,1,"span",8),e.YNc(2,w,1,1,"CheckIcon",9),e.BQk()),2&n){const t=e.oxw(2);e.xp6(1),e.Q6J("ngIf",t.checkboxIcon),e.xp6(1),e.Q6J("ngIf",!t.checkboxIcon)}}function Z(n,s){}function J(n,s){1&n&&e.YNc(0,Z,0,0,"ng-template")}function Q(n,s){if(1&n&&(e.TgZ(0,"span",12),e.YNc(1,J,1,0,null,13),e.qZA()),2&n){const t=e.oxw(2);e.xp6(1),e.Q6J("ngTemplateOutlet",t.checkboxIconTemplate)}}function S(n,s){if(1&n&&(e.ynx(0),e.YNc(1,M,3,2,"ng-container",5),e.YNc(2,Q,2,1,"span",7),e.BQk()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",!t.checkboxIconTemplate),e.xp6(1),e.Q6J("ngIf",t.checkboxIconTemplate)}}const A=function(n,s,t){return{"p-checkbox-label":!0,"p-checkbox-label-active":n,"p-disabled":s,"p-checkbox-label-focus":t}};function F(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"label",14),e.NdJ("click",function(o){e.CHM(t);const c=e.oxw(),r=e.MAs(3);return e.KtG(c.onClick(o,r,!0))}),e._uU(1),e.qZA()}if(2&n){const t=e.oxw();e.Tol(t.labelStyleClass),e.Q6J("ngClass",e.kEZ(5,A,t.checked(),t.disabled,t.focused)),e.uIk("for",t.inputId),e.xp6(1),e.Oqu(t.label)}}const B=function(n,s,t){return{"p-checkbox p-component":!0,"p-checkbox-checked":n,"p-checkbox-disabled":s,"p-checkbox-focused":t}},L=function(n,s,t){return{"p-highlight":n,"p-disabled":s,"p-focus":t}},N={provide:a.JU,useExisting:(0,e.Gpc)(()=>k),multi:!0};let k=(()=>{class n{cd;value;name;disabled;binary;label;ariaLabelledBy;ariaLabel;tabindex;inputId;style;styleClass;labelStyleClass;formControl;checkboxIcon;readonly;required;trueValue=!0;falseValue=!1;onChange=new e.vpe;inputViewChild;templates;checkboxIconTemplate;model;onModelChange=()=>{};onModelTouched=()=>{};focused=!1;constructor(t){this.cd=t}ngAfterContentInit(){this.templates.forEach(t=>{"icon"===t.getType()&&(this.checkboxIconTemplate=t.template)})}onClick(t,l,o){t.preventDefault(),!this.disabled&&!this.readonly&&(this.updateModel(t),o&&l.focus())}updateModel(t){let l;this.binary?(l=this.checked()?this.falseValue:this.trueValue,this.model=l,this.onModelChange(l)):(l=this.checked()?this.model.filter(o=>!g.gb.equals(o,this.value)):this.model?[...this.model,this.value]:[this.value],this.onModelChange(l),this.model=l,this.formControl&&this.formControl.setValue(l)),this.onChange.emit({checked:l,originalEvent:t})}handleChange(t){this.readonly||this.updateModel(t)}onFocus(){this.focused=!0}onBlur(){this.focused=!1,this.onModelTouched()}focus(){this.inputViewChild?.nativeElement.focus()}writeValue(t){this.model=t,this.cd.markForCheck()}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}setDisabledState(t){this.disabled=t,this.cd.markForCheck()}checked(){return this.binary?this.model===this.trueValue:g.gb.contains(this.value,this.model)}static \u0275fac=function(l){return new(l||n)(e.Y36(e.sBO))};static \u0275cmp=e.Xpm({type:n,selectors:[["p-checkbox"]],contentQueries:function(l,o,c){if(1&l&&e.Suo(c,f.jx,4),2&l){let r;e.iGM(r=e.CRH())&&(o.templates=r)}},viewQuery:function(l,o){if(1&l&&e.Gf(T,5),2&l){let c;e.iGM(c=e.CRH())&&(o.inputViewChild=c.first)}},hostAttrs:[1,"p-element"],inputs:{value:"value",name:"name",disabled:"disabled",binary:"binary",label:"label",ariaLabelledBy:"ariaLabelledBy",ariaLabel:"ariaLabel",tabindex:"tabindex",inputId:"inputId",style:"style",styleClass:"styleClass",labelStyleClass:"labelStyleClass",formControl:"formControl",checkboxIcon:"checkboxIcon",readonly:"readonly",required:"required",trueValue:"trueValue",falseValue:"falseValue"},outputs:{onChange:"onChange"},features:[e._Bn([N])],decls:7,vars:26,consts:[[3,"ngStyle","ngClass"],[1,"p-hidden-accessible"],["type","checkbox",3,"readonly","value","checked","disabled","focus","blur","change"],["cb",""],[1,"p-checkbox-box",3,"ngClass","click"],[4,"ngIf"],[3,"class","ngClass","click",4,"ngIf"],["class","p-checkbox-icon",4,"ngIf"],["class","p-checkbox-icon",3,"ngClass",4,"ngIf"],[3,"styleClass",4,"ngIf"],[1,"p-checkbox-icon",3,"ngClass"],[3,"styleClass"],[1,"p-checkbox-icon"],[4,"ngTemplateOutlet"],[3,"ngClass","click"]],template:function(l,o){if(1&l){const c=e.EpF();e.TgZ(0,"div",0)(1,"div",1)(2,"input",2,3),e.NdJ("focus",function(){return o.onFocus()})("blur",function(){return o.onBlur()})("change",function(h){return o.handleChange(h)}),e.qZA()(),e.TgZ(4,"div",4),e.NdJ("click",function(h){e.CHM(c);const O=e.MAs(3);return e.KtG(o.onClick(h,O,!0))}),e.YNc(5,S,3,2,"ng-container",5),e.qZA()(),e.YNc(6,F,2,9,"label",6)}2&l&&(e.Tol(o.styleClass),e.Q6J("ngStyle",o.style)("ngClass",e.kEZ(18,B,o.checked(),o.disabled,o.focused)),e.xp6(2),e.Q6J("readonly",o.readonly)("value",o.value)("checked",o.checked())("disabled",o.disabled),e.uIk("id",o.inputId)("name",o.name)("tabindex",o.tabindex)("aria-labelledby",o.ariaLabelledBy)("aria-label",o.ariaLabel)("aria-checked",o.checked())("required",o.required),e.xp6(2),e.Q6J("ngClass",e.kEZ(22,L,o.checked(),o.disabled,o.focused)),e.xp6(1),e.Q6J("ngIf",o.checked()),e.xp6(1),e.Q6J("ngIf",o.label))},dependencies:function(){return[u.mk,u.O5,u.tP,u.PC,b.n]},styles:[".p-checkbox{display:inline-flex;cursor:pointer;-webkit-user-select:none;user-select:none;vertical-align:bottom;position:relative}.p-checkbox-disabled{cursor:default!important;pointer-events:none}.p-checkbox-box{display:flex;justify-content:center;align-items:center}p-checkbox{display:inline-flex;vertical-align:bottom;align-items:center}.p-checkbox-label{line-height:1}\n"],encapsulation:2,changeDetection:0})}return n})(),V=(()=>{class n{static \u0275fac=function(l){return new(l||n)};static \u0275mod=e.oAB({type:n});static \u0275inj=e.cJS({imports:[u.ez,b.n,f.m8]})}return n})();var x=i(3714),C=i(1423);let E=(()=>{class n{constructor(t,l,o,c){this.layoutService=t,this.router=l,this.auth=o,this.toaster=c,this.valCheck=["remember"]}ngOnInit(){this.loginForm=new a.cw({email:new a.NI(""),password:new a.NI("")})}login(){this.auth.login(this.loginForm.value.email,this.loginForm.value.password).subscribe(t=>{console.log(t),localStorage.setItem("token",t.token),location.reload(),this.router.navigate(["/"])},t=>{console.log(t),this.toaster.error(401===t.status?"Invalid Credentials":"Something went wrong")})}static#e=this.\u0275fac=function(l){return new(l||n)(e.Y36(y.P),e.Y36(d.F0),e.Y36(_.e),e.Y36(v.M))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-login"]],decls:19,vars:3,consts:[[1,"surface-ground","flex","align-items-center","justify-content-center","min-h-screen","min-w-screen","overflow-hidden"],[1,"flex","flex-column","align-items-center","justify-content-center"],["src","assets/logo.png","alt","HealthSphere logo",1,"mb-5","w-6rem","flex-shrink-0"],[2,"border-radius","56px","padding","0.3rem","background","linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)"],[1,"w-full","surface-card","py-8","px-5","sm:px-8",2,"border-radius","53px"],[1,"text-center","mb-5"],[3,"formGroup"],["for","email1",1,"block","text-900","text-xl","font-medium","mb-2"],["id","email1","type","text","placeholder","Email address","pInputText","","formControlName","email",1,"w-full","md:w-30rem","mb-5",2,"padding","1rem"],["for","password1",1,"block","text-900","font-medium","text-xl","mb-2"],["id","password1","formControlName","password","placeholder","Password","styleClass","mb-5","inputStyleClass","w-full p-3 md:w-30rem",3,"toggleMask"],[1,"flex","align-items-center","justify-content-between","mb-5","gap-5"],[1,"flex","align-items-center"],["id","rememberme1","styleClass","mr-2","label","Remember me",3,"binary"],[1,"font-medium","no-underline","ml-2","text-right","cursor-pointer",2,"color","var(--primary-color)"],["pButton","","pRipple","","label","Sign In",1,"w-full","p-3","text-xl",3,"click"]],template:function(l,o){1&l&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"img",2),e.TgZ(3,"div",3)(4,"div",4),e._UZ(5,"div",5),e.TgZ(6,"div",6)(7,"label",7),e._uU(8,"Email"),e.qZA(),e._UZ(9,"input",8),e.TgZ(10,"label",9),e._uU(11,"Password"),e.qZA(),e._UZ(12,"p-password",10),e.TgZ(13,"div",11)(14,"div",12),e._UZ(15,"p-checkbox",13),e.qZA(),e.TgZ(16,"a",14),e._uU(17,"Forgot password?"),e.qZA()(),e.TgZ(18,"button",15),e.NdJ("click",function(){return o.login()}),e.qZA()()()()()()),2&l&&(e.xp6(6),e.Q6J("formGroup",o.loginForm),e.xp6(6),e.Q6J("toggleMask",!0),e.xp6(3),e.Q6J("binary",!0))},dependencies:[m.Hq,k,x.o,a.Fj,a.JJ,a.JL,C.ro,a.sg,a.u],styles:["[_nghost-%COMP%]     .pi-eye, [_nghost-%COMP%]     .pi-eye-slash{transform:scale(1.6);margin-right:1rem;color:var(--primary-color)!important}"]})}return n})(),U=(()=>{class n{static#e=this.\u0275fac=function(l){return new(l||n)};static#t=this.\u0275mod=e.oAB({type:n});static#n=this.\u0275inj=e.cJS({imports:[d.Bz.forChild([{path:"",component:E}]),d.Bz]})}return n})(),Y=(()=>{class n{static#e=this.\u0275fac=function(l){return new(l||n)};static#t=this.\u0275mod=e.oAB({type:n});static#n=this.\u0275inj=e.cJS({imports:[u.ez,U,m.hJ,V,x.j,a.u5,C.gz,a.UX]})}return n})()}}]);