"use strict";(self.webpackChunksakai_ng=self.webpackChunksakai_ng||[]).push([[528],{6528:(R,_,d)=>{d.r(_),d.d(_,{PhysicianModule:()=>L});var p=d(7538),i=d(4946),u=d(3113),T=d(1687),S=d(5219),h=d(707),x=d(6340),P=d(8402);function N(s,c){1&s&&(i.TgZ(0,"div",6),i._uU(1," Doctors "),i.qZA())}function M(s,c){if(1&s){const t=i.EpF();i.TgZ(0,"p-button",7),i.NdJ("click",function(){i.CHM(t);const e=i.oxw();return i.KtG(e.addPhysician())}),i.qZA()}}let A=(()=>{class s{constructor(t,a,e){this._physicianService=t,this.router=a,this.toasterService=e,this.tableData={data:[],columns:[{header:"First Name",field:"firstName",columnType:"Text"},{header:"Last Name",field:"lastName",columnType:"Text"},{header:"Specialist",field:"specialist",columnType:"Text"},{header:"Email",field:"email",columnType:"Text",align:"center"},{header:"Phone",field:"phoneNumber",columnType:"Phone"},{header:"Action",columnType:"Action",align:"center",actions:[{icon:"pi pi-eye",class:"p-button-info",label:"View"},{icon:"pi pi-pencil",class:"p-button-warning",label:"Edit"},{icon:"pi pi-trash",class:"p-button-danger",label:"Delete"}]}],count:0},this.getPhysician=(l={limit:10,offset:0})=>{this._physicianService.getPhysicians(l).subscribe(({data:o,count:n})=>{console.log(o,n),this.tableData.data=JSON.parse(JSON.stringify(o)),this.tableData.count=n})},this.addPhysician=()=>this.router.navigate(["/physician/add"]),this.viewPhysician=({_id:l})=>this.router.navigate(["/physician/view",l]),this.editPhysician=({_id:l})=>this.router.navigate(["/physician/edit",l]),this.onActionClick=l=>{switch(console.log(l),l.action){case"View":this.viewPhysician(l.rowData);break;case"Edit":this.editPhysician(l.rowData);break;case"Delete":this.deletePhysician(l.rowData)}},this.deletePhysician=({_id:l})=>{this._physicianService.deletePhysician(l).subscribe(o=>{this.getPhysician()},o=>{this.toasterService.error(o.error.message)})}}ngOnInit(){this.getPhysician()}static#i=this.\u0275fac=function(a){return new(a||s)(i.Y36(u.E),i.Y36(p.F0),i.Y36(T.M))};static#e=this.\u0275cmp=i.Xpm({type:s,selectors:[["app-physician"]],decls:6,vars:3,consts:[[1,"card","flex","flex-column"],["styleClass","mb-4 gap-2"],["pTemplate","left"],["pTemplate","right"],[1,"col-12","p-0"],["showExportButtons","true","fileName","Physician",3,"value","columns","totalRecords","onPageChange","onAction"],[1,"text-2xl","font-semibold","vertical-align-middle"],["label","Add Doctor","styleClass","p-button-raised",3,"click"]],template:function(a,e){1&a&&(i.TgZ(0,"div",0)(1,"p-toolbar",1),i.YNc(2,N,2,0,"ng-template",2),i.YNc(3,M,1,0,"ng-template",3),i.qZA(),i.TgZ(4,"div",4)(5,"app-common-table",5),i.NdJ("onPageChange",function(o){return e.getPhysician(o)})("onAction",function(o){return e.onActionClick(o)}),i.qZA()()()),2&a&&(i.xp6(5),i.Q6J("value",e.tableData.data)("columns",e.tableData.columns)("totalRecords",e.tableData.count))},dependencies:[S.jx,h.zx,x.o,P.u]})}return s})();var g=d(9239),b=d(1752),y=d(9030),v=d(7870),f=d(6814),C=d(5160);function w(s,c){if(1&s){const t=i.EpF();i.TgZ(0,"div",7)(1,"app-common-input",3),i.NdJ("valueChange",function(e){const o=i.CHM(t).$implicit,n=i.oxw();return i.KtG(n.formModel[o.id]=e)})("valueChange",function(e){const o=i.CHM(t).$implicit,n=i.oxw();return i.KtG(n.updateModel(e,o))}),i.qZA()()}if(2&s){const t=c.$implicit,a=i.oxw();i.xp6(1),i.Q6J("property",t)("value",a.formModel[t.id])}}function E(s,c){if(1&s){const t=i.EpF();i.TgZ(0,"div",7)(1,"app-common-input",3),i.NdJ("valueChange",function(e){const o=i.CHM(t).$implicit,n=i.oxw();return i.KtG(n.formModel[o.id]=e)})("valueChange",function(e){const o=i.CHM(t).$implicit,n=i.oxw();return i.KtG(n.updateModel(e,o))}),i.qZA()()}if(2&s){const t=c.$implicit,a=i.oxw();i.xp6(1),i.Q6J("property",t)("value",a.formModel[t.id])}}let V=(()=>{class s{constructor(t,a,e,l){this._router=t,this._physicianService=a,this._validationService=e,this._sharedService=l,this.formModel={},this.loading=!1,this.formControls1=[{label:"First Name",required:!0,inputType:"Name",id:"firstName",validator:this._validationService.nameValidator},{label:"Last Name",required:!0,inputType:"Name",id:"lastName",validator:this._validationService.nameValidator},{label:"Date of Birth",inputType:"Date",required:!0,id:"dateOfBirth",maxDate:new Date,validator:o=>this._validationService.dateValidator(o)&&o<new Date},{label:"Age",inputType:"Name",id:"age",disabled:!0,maxLength:3,validator:this._validationService.numberValidator},{label:"Sex",inputType:"Dropdown",options:["Male","Female","Other"],optionTypeStr:!0,id:"gender",validator:this._validationService.emptyValueValidator},{label:"Specialist",required:!0,inputType:"AutoComplete",id:"specialist",suggestions:["General","Cardiologist","Pediatrician","Neurologist"],validator:this._validationService.emptyValueValidator},{label:"Education",required:!0,inputType:"Text",id:"education",validator:this._validationService.emptyValueValidator},{label:"License No",required:!0,inputType:"Text",id:"licenseNo",validator:this._validationService.emptyValueValidator}],this.addressControl={label:"Address",required:!0,inputType:"TextArea",id:"address",rows:2,validator:this._validationService.stringValidator,maxLength:500},this.formControls2=[{label:"City",required:!0,inputType:"AutoComplete",id:"city",validator:this._validationService.stringValidator,suggestions:b},{label:"State",required:!0,inputType:"Dropdown",id:"state",validator:this._validationService.emptyValueValidator,options:g},{label:"Zip",required:!0,inputType:"Number",id:"zipCode",maxLength:6,validator:this._validationService.zipCodeValidator},{label:"Phone",required:!0,inputType:"Number",id:"phoneNumber",maxLength:10,validator:this._validationService.phoneValidator,preAddon:"pi-phone"},{label:"Email",required:!0,inputType:"Text",id:"email",validator:this._validationService.emailValidator,preAddon:"pi-envelope"}],this.submitTried=!1,this.validator=o=>{let n=!0;const r=this.formModel[o.id];return o.required&&o.validator&&(o.validator(r)?o.invalid=!1:(o.invalid=!0,n=!1)),console.log(o,r,n),n},this.updateModel=(o,n)=>{"dateOfBirth"===n.id&&(this.formModel.age=o?String(this._sharedService.calculateAge(o)):null),this.submitTried&&this.validator(n)},this.validate=()=>{let o=!0;const n=r=>{this.validator(r)||(o=!1)};return this.formControls1.forEach(n),n(this.addressControl),this.formControls2.forEach(n),o},this.submit=()=>{this.submitTried=!0,this.validate()&&(this.loading=!0,this.subscription=this._physicianService.addPhysician(this.formModel).subscribe(n=>{console.log(n),this._sharedService.toast.showSuccess({heading:"Success",message:n.msg}),this._router.navigate(["/physician"])},({error:n})=>{console.log(n),this._sharedService.toast.showError({heading:"Error",message:n.msg}),this.loading=!1}))},this.back=()=>{this._router.navigate(["/physician"])}}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}static#i=this.\u0275fac=function(a){return new(a||s)(i.Y36(p.F0),i.Y36(u.E),i.Y36(y.R),i.Y36(v.F))};static#e=this.\u0275cmp=i.Xpm({type:s,selectors:[["app-add-physician"]],decls:8,vars:5,consts:[[1,"card","flex","flex-wrap"],["class","field col-12 md:col-4 py-2",4,"ngFor","ngForOf"],[1,"field","col-12","md:col-8","py-2"],[3,"property","value","valueChange"],[1,"col-12","flex","justify-content-between"],["pButton","","pRipple","","type","button","label","Back","icon","pi pi-arrow-left","iconPos","left",1,"p-button-outlined","p-button-raised","p-button-danger",3,"click"],["pButton","","pRipple","","type","button","label","Submit",1,"p-button-outlined","p-button-raised","p-button-success",3,"loading","click"],[1,"field","col-12","md:col-4","py-2"]],template:function(a,e){1&a&&(i.TgZ(0,"div",0),i.YNc(1,w,2,2,"div",1),i.TgZ(2,"div",2)(3,"app-common-input",3),i.NdJ("valueChange",function(o){return e.formModel[e.addressControl.id]=o})("valueChange",function(o){return e.updateModel(o,e.addressControl)}),i.qZA()(),i.YNc(4,E,2,2,"div",1),i.TgZ(5,"div",4)(6,"button",5),i.NdJ("click",function(){return e.back()}),i.qZA(),i.TgZ(7,"button",6),i.NdJ("click",function(){return e.submit()}),i.qZA()()()),2&a&&(i.xp6(1),i.Q6J("ngForOf",e.formControls1),i.xp6(2),i.Q6J("property",e.addressControl)("value",e.formModel[e.addressControl.id]),i.xp6(1),i.Q6J("ngForOf",e.formControls2),i.xp6(3),i.Q6J("loading",e.loading))},dependencies:[f.sg,h.Hq,C.v]})}return s})();var Z=d(6676),F=d.n(Z);function J(s,c){if(1&s&&(i.TgZ(0,"div",4)(1,"div",5),i._uU(2),i.qZA(),i.TgZ(3,"div",6),i._uU(4,":"),i.qZA(),i.TgZ(5,"div",7),i._uU(6),i.qZA()()),2&s){const t=c.$implicit,a=i.oxw();i.xp6(2),i.hij(" ",t.label," "),i.xp6(4),i.hij(" ",a.formModel[t.field]," ")}}function O(s,c){if(1&s){const t=i.EpF();i.TgZ(0,"div",7)(1,"app-common-input",3),i.NdJ("valueChange",function(e){const o=i.CHM(t).$implicit,n=i.oxw();return i.KtG(n.formModel[o.id]=e)})("valueChange",function(e){const o=i.CHM(t).$implicit,n=i.oxw();return i.KtG(n.updateModel(e,o))}),i.qZA()()}if(2&s){const t=c.$implicit,a=i.oxw();i.xp6(1),i.Q6J("property",t)("value",a.formModel[t.id])}}function q(s,c){if(1&s){const t=i.EpF();i.TgZ(0,"div",7)(1,"app-common-input",3),i.NdJ("valueChange",function(e){const o=i.CHM(t).$implicit,n=i.oxw();return i.KtG(n.formModel[o.id]=e)})("valueChange",function(e){const o=i.CHM(t).$implicit,n=i.oxw();return i.KtG(n.updateModel(e,o))}),i.qZA()()}if(2&s){const t=c.$implicit,a=i.oxw();i.xp6(1),i.Q6J("property",t)("value",a.formModel[t.id])}}const B=[{path:"",component:A},{path:"add",component:V},{path:"view/:id",component:(()=>{class s{constructor(t,a,e,l){this._router=t,this._activatedRoute=a,this._physicianService=e,this._sharedService=l,this.subscription=[],this.formModel={},this.loading=!1,this.formControls1=[{label:"First Name",field:"firstName"},{label:"Last Name",field:"lastName"},{label:"Date of Birth",field:"dateOfBirth"},{label:"Age",field:"age"},{label:"Sex",field:"gender"},{label:"Specialist",field:"specialist"},{label:"Education",field:"education"},{label:"License No",field:"licenseNo"},{label:"Address",field:"address"},{label:"City",field:"city"},{label:"State",field:"state"},{label:"Zip",field:"zipCode"},{label:"Phone",field:"phoneNumber"},{label:"Email",field:"email"}],this.edit=()=>this._router.navigate(["/physician","edit",this.formModel.id]),this.back=()=>this._router.navigate(["/physician"])}ngOnInit(){this.loading=!0,this.subscription.push(this._activatedRoute.params.subscribe(t=>{this.loading=!1,this.subscription.push(this._physicianService.getPhysician(t).subscribe(a=>{this.formModel=JSON.parse(JSON.stringify(a)),this.formModel.dateOfBirth=new Date(this.formModel.dateOfBirth),this.formModel.age=this._sharedService.calculateAge(this.formModel.dateOfBirth),this.formModel.dateOfBirth=F()(this.formModel.dateOfBirth).format("Do MMMM YYYY"),this.formModel.id=String(t.id)}))}))}ngOnDestroy(){this.subscription&&this.subscription.length>0&&this.subscription.forEach(t=>t.unsubscribe())}static#i=this.\u0275fac=function(a){return new(a||s)(i.Y36(p.F0),i.Y36(p.gz),i.Y36(u.E),i.Y36(v.F))};static#e=this.\u0275cmp=i.Xpm({type:s,selectors:[["app-view-physician"]],decls:4,vars:1,consts:[[1,"card","flex","flex-wrap"],["class","flex col-12 md:col-6",4,"ngFor","ngForOf"],[1,"col-12","flex","justify-content-between"],["pButton","","pRipple","","type","button","label","Back","icon","pi pi-arrow-left","iconPos","left",1,"p-button-outlined","p-button-raised","p-button-danger",3,"click"],[1,"flex","col-12","md:col-6"],[1,"col-4","font-bold","p-0"],[1,"col-1","text-center","p-0"],[1,"col","p-0"]],template:function(a,e){1&a&&(i.TgZ(0,"div",0),i.YNc(1,J,7,2,"div",1),i.TgZ(2,"div",2)(3,"button",3),i.NdJ("click",function(){return e.back()}),i.qZA()()()),2&a&&(i.xp6(1),i.Q6J("ngForOf",e.formControls1))},dependencies:[f.sg,h.Hq]})}return s})()},{path:"edit/:id",component:(()=>{class s{constructor(t,a,e,l,o){this._router=t,this._activatedRoute=a,this._physicianService=e,this._validationService=l,this._sharedService=o,this.subscription=[],this.formModel={},this.loading=!1,this.formControls1=[{label:"First Name",required:!0,inputType:"Name",id:"firstName",validator:this._validationService.nameValidator},{label:"Last Name",required:!0,inputType:"Name",id:"lastName",validator:this._validationService.nameValidator},{label:"Date of Birth",inputType:"Date",required:!0,id:"dateOfBirth",maxDate:new Date,validator:n=>this._validationService.dateValidator(n)&&n<new Date},{label:"Age",inputType:"Name",id:"age",disabled:!0,maxLength:3,validator:this._validationService.numberValidator},{label:"Sex",inputType:"Dropdown",options:["Male","Female","Other"],optionTypeStr:!0,id:"gender",validator:this._validationService.emptyValueValidator},{label:"Specialist",required:!0,inputType:"AutoComplete",id:"specialist",suggestions:["General","Cardiologist","Pediatrician","Neurologist"],validator:this._validationService.emptyValueValidator},{label:"Education",required:!0,inputType:"Text",id:"education",validator:this._validationService.emptyValueValidator},{label:"License No",required:!0,inputType:"Text",id:"licenseNo",validator:this._validationService.emptyValueValidator}],this.addressControl={label:"Address",required:!0,inputType:"TextArea",id:"address",rows:2,validator:this._validationService.stringValidator,maxLength:500},this.formControls2=[{label:"City",required:!0,inputType:"AutoComplete",id:"city",validator:this._validationService.stringValidator,suggestions:b},{label:"State",required:!0,inputType:"Dropdown",id:"state",validator:this._validationService.emptyValueValidator,options:g},{label:"Zip",required:!0,inputType:"Number",id:"zipCode",maxLength:6,validator:this._validationService.zipCodeValidator},{label:"Phone",required:!0,inputType:"Number",id:"phoneNumber",maxLength:10,validator:this._validationService.phoneValidator,preAddon:"pi-phone"},{label:"Email",required:!0,inputType:"Text",id:"email",validator:this._validationService.emailValidator,preAddon:"pi-envelope"}],this.submitTried=!1,this.validator=n=>{let r=!0;const m=this.formModel[n.id];return n.required&&n.validator&&(n.validator(m)?n.invalid=!1:(n.invalid=!0,r=!1)),console.log(n,m,r),r},this.updateModel=(n,r)=>{"dateOfBirth"===r.id&&(this.formModel.age=n?String(this._sharedService.calculateAge(n)):null),this.submitTried&&this.validator(r)},this.validate=()=>{let n=!0;const r=m=>{this.validator(m)||(n=!1)};return this.formControls1.forEach(r),r(this.addressControl),this.formControls2.forEach(r),n},this.submit=()=>{this.submitTried=!0,this.validate()?(this.loading=!0,this.subscription.push(this._physicianService.updatePhysician(this.formModel).subscribe(r=>{console.log(r),this._sharedService.toast.showSuccess({heading:"Success",message:r.msg}),this._router.navigate(["/physician"])},({error:r})=>{console.log(r),this._sharedService.toast.showError({heading:"Error",message:r.msg})},()=>{this.loading=!1}))):this._sharedService.toast.showError({heading:"Error",message:"Please enter the required fields"})},this.back=()=>{this._router.navigate(["/physician"])}}ngOnInit(){this.loading=!0,this.subscription.push(this._activatedRoute.params.subscribe(t=>{this.loading=!1,this.subscription.push(this._physicianService.getPhysician(t).subscribe(a=>{this.formModel=JSON.parse(JSON.stringify(a)),this.formModel.dateOfBirth=new Date(this.formModel.dateOfBirth),this.formModel.id=String(t.id)}))}))}ngOnDestroy(){this.subscription&&this.subscription.length>0&&this.subscription.forEach(t=>t.unsubscribe())}static#i=this.\u0275fac=function(a){return new(a||s)(i.Y36(p.F0),i.Y36(p.gz),i.Y36(u.E),i.Y36(y.R),i.Y36(v.F))};static#e=this.\u0275cmp=i.Xpm({type:s,selectors:[["app-edit-physician"]],decls:8,vars:5,consts:[[1,"card","flex","flex-wrap"],["class","field col-12 md:col-4 py-2",4,"ngFor","ngForOf"],[1,"field","col-12","md:col-8","py-2"],[3,"property","value","valueChange"],[1,"col-12","flex","justify-content-between"],["pButton","","pRipple","","type","button","label","Back","icon","pi pi-arrow-left","iconPos","left",1,"p-button-outlined","p-button-raised","p-button-danger",3,"click"],["pButton","","pRipple","","type","button","label","Submit",1,"p-button-outlined","p-button-raised","p-button-success",3,"loading","click"],[1,"field","col-12","md:col-4","py-2"]],template:function(a,e){1&a&&(i.TgZ(0,"div",0),i.YNc(1,O,2,2,"div",1),i.TgZ(2,"div",2)(3,"app-common-input",3),i.NdJ("valueChange",function(o){return e.formModel[e.addressControl.id]=o})("valueChange",function(o){return e.updateModel(o,e.addressControl)}),i.qZA()(),i.YNc(4,q,2,2,"div",1),i.TgZ(5,"div",4)(6,"button",5),i.NdJ("click",function(){return e.back()}),i.qZA(),i.TgZ(7,"button",6),i.NdJ("click",function(){return e.submit()}),i.qZA()()()),2&a&&(i.xp6(1),i.Q6J("ngForOf",e.formControls1),i.xp6(2),i.Q6J("property",e.addressControl)("value",e.formModel[e.addressControl.id]),i.xp6(1),i.Q6J("ngForOf",e.formControls2),i.xp6(3),i.Q6J("loading",e.loading))},dependencies:[f.sg,h.Hq,C.v]})}return s})()}];let Y=(()=>{class s{static#i=this.\u0275fac=function(a){return new(a||s)};static#e=this.\u0275mod=i.oAB({type:s});static#t=this.\u0275inj=i.cJS({imports:[p.Bz.forChild(B),p.Bz]})}return s})();var k=d(2692);let L=(()=>{class s{static#i=this.\u0275fac=function(a){return new(a||s)};static#e=this.\u0275mod=i.oAB({type:s});static#t=this.\u0275inj=i.cJS({imports:[k.R,Y]})}return s})()}}]);