"use strict";(self.webpackChunksakai_ng=self.webpackChunksakai_ng||[]).push([[362],{8362:(X,x,s)=>{s.r(x),s.d(x,{PatientModule:()=>j});var m=s(7538),t=s(4946),f=s(255),_=s(95),T=s(5219),C=s(6340),I=s(3714),M=s(8402);function S(a,d){1&a&&(t.TgZ(0,"div",6),t._uU(1," Patients List "),t.qZA())}function P(a,d){if(1&a){const e=t.EpF();t.TgZ(0,"span",7),t._UZ(1,"i",8),t.TgZ(2,"input",9),t.NdJ("ngModelChange",function(n){t.CHM(e);const l=t.oxw();return t.KtG(l.searchQuery=n)})("input",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.getPatients())}),t.qZA()()}if(2&a){const e=t.oxw();t.xp6(2),t.Q6J("ngModel",e.searchQuery)}}let F=(()=>{class a{constructor(e,i){this._patientService=e,this.router=i,this.searchQuery="",this.tableData={data:[],columns:[{header:"First Name",field:"firstName",columnType:"Text"},{header:"Last Name",field:"lastName",columnType:"Text"},{header:"Email",field:"email",columnType:"Text",align:"center"},{header:"Age",field:"age",columnType:"Number"},{header:"Gender",field:"gender",columnType:"Text",align:"center"},{header:"Phone",field:"phoneNumber",columnType:"Phone"},{header:"Action",columnType:"Action",align:"center",actions:[{icon:"pi pi-eye",class:"p-button-info",label:"View"}]}],count:0},this.isPatientTableLoading=!1}ngOnInit(){this.getPatients()}getPatients({limit:e,offset:i}={limit:10,offset:0}){this.isPatientTableLoading=!0,this._patientService.getPatients({offset:i,limit:e,query:this.searchQuery}).subscribe(({data:n=[],count:l=0})=>{console.log(n,l),this.tableData.data=JSON.parse(JSON.stringify(n)),this.tableData.count=l,this.isPatientTableLoading=!1})}onAction(e){"View"===e.action&&this.router.navigate(["/patient/view",e.rowData._id||"1"])}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}static#t=this.\u0275fac=function(i){return new(i||a)(t.Y36(f.e),t.Y36(m.F0))};static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["ng-component"]],decls:6,vars:4,consts:[[1,"card","flex","flex-column"],["styleClass","mb-4 gap-2"],["pTemplate","left"],["pTemplate","right"],[1,"col-12","p-0"],["showExportButtons","true","fileName","Patients",3,"value","columns","totalRecords","loading","onPageChange"],[1,"text-2xl","font-semibold","vertical-align-middle"],[1,"p-input-icon-left","ml-auto"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Search keyword",3,"ngModel","ngModelChange","input"]],template:function(i,n){1&i&&(t.TgZ(0,"div",0)(1,"p-toolbar",1),t.YNc(2,S,2,0,"ng-template",2),t.YNc(3,P,3,1,"ng-template",3),t.qZA(),t.TgZ(4,"div",4)(5,"app-common-table",5),t.NdJ("onPageChange",function(r){return n.getPatients(r)}),t.qZA()()()),2&i&&(t.xp6(5),t.Q6J("value",n.tableData.data)("columns",n.tableData.columns)("totalRecords",n.tableData.count)("loading",n.isPatientTableLoading))},dependencies:[_.Fj,_.JJ,_.On,T.jx,C.o,I.o,M.u],encapsulation:2})}return a})();var w=s(6676),A=s.n(w),N=s(9239),D=s(1752),Z=s(9030),k=s(7870),b=s(1687),B=s(6035),J=s(3113),h=s(6814),R=s(707),G=s(2198),O=s(5160);function Q(a,d){if(1&a){const e=t.EpF();t.TgZ(0,"div",12)(1,"app-common-input",9),t.NdJ("valueChange",function(n){const r=t.CHM(e).$implicit,p=t.oxw(2);return t.KtG(p.patientInfoModel[r.id]=n)})("valueChange",function(n){const r=t.CHM(e).$implicit,p=t.oxw(2);return t.KtG(p.updateModel(n,r))}),t.qZA()()}if(2&a){const e=d.$implicit,i=t.oxw(2);t.xp6(1),t.Q6J("property",e)("value",i.patientInfoModel[e.id])}}function Y(a,d){if(1&a){const e=t.EpF();t.TgZ(0,"div",12)(1,"app-common-input",9),t.NdJ("valueChange",function(n){const r=t.CHM(e).$implicit,p=t.oxw(2);return t.KtG(p.patientInfoModel[r.id]=n)})("valueChange",function(n){const r=t.CHM(e).$implicit,p=t.oxw(2);return t.KtG(p.updateModel(n,r))}),t.qZA()()}if(2&a){const e=d.$implicit,i=t.oxw(2);t.xp6(1),t.Q6J("property",e)("value",i.patientInfoModel[e.id])}}function H(a,d){if(1&a){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",4)(2,"div",5)(3,"div",6),t._uU(4," Personal Information "),t.qZA(),t.YNc(5,Q,2,2,"div",7),t.qZA(),t.TgZ(6,"div",5)(7,"div",6),t._uU(8," Contact Information "),t.qZA(),t.TgZ(9,"div",8)(10,"app-common-input",9),t.NdJ("valueChange",function(n){t.CHM(e);const l=t.oxw();return t.KtG(l.patientInfoModel[l.patientAddressField.id]=n)})("valueChange",function(n){t.CHM(e);const l=t.oxw();return t.KtG(l.updateModel(n,l.patientAddressField))}),t.qZA()(),t.YNc(11,Y,2,2,"div",7),t.qZA()(),t.TgZ(12,"div",10)(13,"button",11),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.submit())}),t.qZA()(),t.BQk()}if(2&a){const e=t.oxw();t.xp6(5),t.Q6J("ngForOf",e.patientPersonalInformationFields),t.xp6(5),t.Q6J("property",e.patientAddressField)("value",e.patientInfoModel[e.patientAddressField.id]),t.xp6(1),t.Q6J("ngForOf",e.patientContactInformationFields),t.xp6(2),t.Q6J("label",e.personalInfoSubmitted?"Update & Move":"Next")}}function V(a,d){if(1&a){const e=t.EpF();t.TgZ(0,"div",18)(1,"app-common-input",9),t.NdJ("valueChange",function(n){const r=t.CHM(e).$implicit,p=t.oxw(2);return t.KtG(p.patientInfoModel[r.id]=n)})("valueChange",function(n){const r=t.CHM(e).$implicit,p=t.oxw(2);return t.KtG(p.updateModel(n,r))}),t.qZA()()}if(2&a){const e=d.$implicit,i=t.oxw(2);t.xp6(1),t.Q6J("property",e)("value",i.patientInfoModel[e.id])}}function E(a,d){if(1&a){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",13),t.YNc(2,V,2,2,"div",14),t.qZA(),t.TgZ(3,"div",15)(4,"button",16),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.back())}),t.qZA(),t.TgZ(5,"button",17),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.submit())}),t.qZA()(),t.BQk()}if(2&a){const e=t.oxw();t.xp6(2),t.Q6J("ngForOf",e.patientExtraInformationFields)}}function K(a,d){if(1&a){const e=t.EpF();t.TgZ(0,"div",22)(1,"app-common-input",9),t.NdJ("valueChange",function(n){const r=t.CHM(e).$implicit,p=t.oxw(3);return t.KtG(p.patientInfoModel[r.id]=n)})("valueChange",function(n){const r=t.CHM(e).$implicit,p=t.oxw(3);return t.KtG(p.updateModel(n,r))}),t.qZA()()}if(2&a){const e=d.$implicit,i=t.oxw(3);t.xp6(1),t.Q6J("property",e)("value",i.patientInfoModel[e.id])}}function q(a,d){if(1&a&&(t.TgZ(0,"div",13),t.YNc(1,K,2,2,"div",21),t.qZA()),2&a){const e=t.oxw(2);t.xp6(1),t.Q6J("ngForOf",e.patientDoctorInformationFields)}}function L(a,d){if(1&a){const e=t.EpF();t.ynx(0),t.YNc(1,q,2,1,"div",19),t.TgZ(2,"div",15)(3,"button",16),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.back())}),t.qZA(),t.TgZ(4,"button",20),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.submit())}),t.qZA()(),t.BQk()}if(2&a){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",2==e.activeStepIndex)}}let y=(()=>{class a{constructor(e,i,n,l,r,p,g,v){this._router=e,this._validationService=i,this._sharedService=n,this._patientService=l,this._activatedRoute=r,this._toasterService=p,this._appointmentService=g,this._physicianService=v,this.personalInfoSubmitted=!1,this.activeStepIndex=0,this.getSteps=()=>{const o=u=>this.activeStepIndex=u.index,c=!this.personalInfoSubmitted;return[{label:"Personal Info",command:o},{label:"Info",command:o,disabled:c},{label:"Done",command:o,disabled:c}]},this.patientInfoModel={firstName:null,lastName:null,dateOfBirth:null,age:null,gender:null,address:null,city:null,state:null,zipCode:null,phoneNumber:null,email:null,weight:null,bloodGroup:null,mlc:null,broughtBy:null,identificationMark:null,initialResponse:null,triage:null,gcs:null,bp:null,heartRate:null,sp02:null,respiratoryRate:null,temperature:null,allergy:null,allergyDetails:null,physicianId:null,appointmentDate:new Date},this.patientPersonalInformationFields=[{label:"First Name",required:!0,inputType:"Name",id:"firstName",validator:this._validationService.nameValidator},{label:"Last Name",required:!0,inputType:"Name",id:"lastName",validator:this._validationService.nameValidator},{label:"Date of Birth",inputType:"Date",required:!0,id:"dateOfBirth",maxDate:new Date,validator:o=>this._validationService.dateValidator(o)&&o<new Date},{label:"Age",inputType:"Name",id:"age",disabled:!0,maxLength:3,validator:this._validationService.numberValidator},{label:"Sex",inputType:"Dropdown",options:["Male","Female","Other"],optionTypeStr:!0,id:"gender",required:!0,validator:this._validationService.emptyValueValidator}],this.patientAddressField={label:"Address",required:!0,inputType:"TextArea",id:"address",rows:2,validator:this._validationService.stringValidator,maxLength:500},this.patientContactInformationFields=[{label:"City",required:!0,inputType:"AutoComplete",id:"city",validator:this._validationService.stringValidator,suggestions:D},{label:"State",required:!0,inputType:"Dropdown",id:"state",validator:this._validationService.emptyValueValidator,options:N},{label:"Zip",required:!0,inputType:"Number",id:"zipCode",maxLength:6,validator:this._validationService.zipCodeValidator},{label:"Phone",required:!0,inputType:"Number",id:"phoneNumber",maxLength:10,validator:this._validationService.phoneValidator,preAddon:"pi-phone"},{label:"Email",inputType:"Text",id:"email",validator:this._validationService.emailValidator,preAddon:"pi-envelope"}],this.patientExtraInformationFields=[{label:"Weight",inputType:"Decimal",id:"weight",postAddonText:"kg"},{label:"Blood Group",inputType:"Dropdown",id:"bloodGroup",options:["A +","A -","B +","B -","AB +","AB -","O +","O -"],optionTypeStr:!0},{label:"MLC No.",inputType:"Text",id:"mlc"},{label:"Brought by",inputType:"Text",id:"broughtBy"},{label:"Identification Mark",inputType:"Text",id:"identificationMark"},{label:"Initial Response",inputType:"Dropdown",id:"initialResponse",options:["Alert","Responding to Verbal Stimuli","Responds to Pain","Unresponsive"],optionTypeStr:!0},{label:"Triage",inputType:"Dropdown",id:"triage",options:[1,2,3],optionTypeStr:!0},{label:"GCS",inputType:"Text",id:"gcs"},{label:"BP",inputType:"Text",id:"bp"},{label:"Heart Rate (HR)",inputType:"Text",id:"heartRate"},{label:"SP02",inputType:"Text",id:"sp02"},{label:"Respiratory Rate (RR)",inputType:"Text",id:"respiratoryRate"},{label:"Temperature (Temp)",inputType:"Text",id:"temperature"},{label:"GRBS",inputType:"Text",id:"grbs"},{label:"Allergy",inputType:"Dropdown",id:"allergy",options:["Food","Drug","Blood","Unknown"]},{label:"Allergy Details",inputType:"TextArea",id:"allergyDetails"}],this.patientDoctorInformationFields=[{id:"physicianId",label:"Doctor",inputType:"Dropdown",options:[],required:!0},{label:"Appointment Date",inputType:"Date",id:"appointmentDate",required:!0}],this.submitTried=!1,this.patientId="",this.validator=o=>{let c=!0;const u=this.patientInfoModel[o.id];return o.required&&o.validator&&(o.validator(u)?o.invalid=!1:(o.invalid=!0,c=!1)),"email"===o.id&&(u&&o.validator?o.validator(u)?o.invalid=!1:(o.invalid=!0,c=!1):o.invalid=!1),console.log(o,u,c),c},this.updateModel=(o,c)=>{"dateOfBirth"===c.id&&(this.patientInfoModel.age=o?String(this._sharedService.calculateAge(o)):null),this.submitTried&&this.validator(c)},this.validate=()=>{let o=!0;const c=u=>{this.validator(u)||(o=!1)};switch(this.activeStepIndex){case 0:this.patientPersonalInformationFields.forEach(c),c(this.patientAddressField),this.patientContactInformationFields.forEach(c);break;case 1:break;case 2:this._router.navigate(["/appointment"])}return o},this.submit=()=>{if(this.submitTried=!0,this.validate())switch(this.submitTried=!1,this.activeStepIndex){case 0:this.personalInfoSubmitted=!1,this.savePersonalInfo(),this.activeStepIndex++;break;case 1:this.activeStepIndex++;break;case 2:this.createAppointment()}},this.back=()=>this.activeStepIndex--,this.onStepChange=o=>{2===o&&this.getDoctors()}}ngOnInit(){this._activatedRoute.paramMap.subscribe(e=>{this.patientId=e.params.id,this.patientId&&this.getPatientInfo()})}getDoctors(){this._physicianService.getAllPhysicianId().subscribe((e=[])=>{this.patientDoctorInformationFields[0].options=e.map(i=>({value:i._id,label:[i.firstName,i.lastName,"-",i.specialist].join(" ")})),1===this.patientDoctorInformationFields[0].options.length&&(this.patientInfoModel.physicianId=this.patientDoctorInformationFields[0].options[0].value,this.patientInfoModel.appointmentDate=new Date)})}getPatientInfo(){this._patientService.getPatientById(this.patientId).subscribe(e=>{e&&(this.patientInfoModel=e,this.patientInfoModel.dateOfBirth=A()(e.dateOfBirth).toDate(),this.patientInfoModel.age=String(this._sharedService.calculateAge(e.dateOfBirth)),this.activeStepIndex=1,this.personalInfoSubmitted=!0)})}createAppointment(){this._appointmentService.createAppointment({patientId:this.patientId,physicianId:this.patientInfoModel.physicianId,weight:this.patientInfoModel.weight,bloodGroup:this.patientInfoModel.bloodGroup,mlc:this.patientInfoModel.mlc,broughtBy:this.patientInfoModel.broughtBy,identificationMark:this.patientInfoModel.identificationMark,appointmentDate:this.patientInfoModel.appointmentDate,initialResponse:this.patientInfoModel.initialResponse,triage:this.patientInfoModel.triage,gcs:this.patientInfoModel.gcs,bp:this.patientInfoModel.bp,heartRate:this.patientInfoModel.heartRate,sp02:this.patientInfoModel.sp02,respiratoryRate:this.patientInfoModel.respiratoryRate,temperature:this.patientInfoModel.temperature,allergy:this.patientInfoModel.allergy,allergyDetails:this.patientInfoModel.allergyDetails}).subscribe(i=>{this._toasterService.success("Appointment created successfully"),this._router.navigate(["/appointment"])},i=>{this._toasterService.error("Something went wrong"),this._router.navigate(["/appointment"])})}savePersonalInfo(){let e={firstName:this.patientInfoModel.firstName,lastName:this.patientInfoModel.lastName,dateOfBirth:this.patientInfoModel.dateOfBirth,age:this.patientInfoModel.age,gender:this.patientInfoModel.gender,address:this.patientInfoModel.address,city:this.patientInfoModel.city,state:this.patientInfoModel.state,zipCode:this.patientInfoModel.zipCode,email:this.patientInfoModel.email,phoneNumber:this.patientInfoModel.phoneNumber};this.personalInfoSubmitted?this._patientService.updatePatient(this.patientId,e).subscribe(i=>{this._toasterService.success("Patient updated successfully")},i=>{this._toasterService.error("Something went wrong")}):this._patientService.createPatient(e).subscribe(i=>{this.patientId=i._id,this._toasterService.success("Patient created successfully"),this._router.navigate([`/patient/add/${i._id}`])},()=>{this._toasterService.error("Something went wrong")})}static#t=this.\u0275fac=function(i){return new(i||a)(t.Y36(m.F0),t.Y36(Z.R),t.Y36(k.F),t.Y36(f.e),t.Y36(m.gz),t.Y36(b.M),t.Y36(B.H),t.Y36(J.E))};static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-patient-form"]],decls:6,vars:7,consts:[[1,"card","flex","flex-column"],[3,"model","readonly","activeIndex","activeIndexChange"],[3,"ngSwitch"],[4,"ngSwitchCase"],[1,"flex","flex-wrap"],[1,"flex","flex-wrap","col-12","md:col-6","align-content-start"],[1,"field","col-12","p-0","pb-2","text-xl","font-semibold"],["class","field col-12 md:col-6 py-2",4,"ngFor","ngForOf"],[1,"field","col-12","py-2"],[3,"property","value","valueChange"],[1,"flex","justify-content-end"],["pButton","","pRipple","","type","button","icon","pi pi-arrow-right","iconPos","right",1,"p-button-outlined","p-button-raised","p-button-success",3,"label","click"],[1,"field","col-12","md:col-6","py-2"],[1,"flex","flex-wrap","col-12","align-content-start"],["class","field col-12 md:col-4 py-2",4,"ngFor","ngForOf"],[1,"flex","justify-content-between"],["pButton","","pRipple","","type","button","label","Back","icon","pi pi-arrow-left","iconPos","left",1,"p-button-outlined","p-button-raised","p-button-danger",3,"click"],["pButton","","pRipple","","type","button","label","Next","icon","pi pi-arrow-right","iconPos","right",1,"p-button-outlined","p-button-raised","p-button-success",3,"click"],[1,"field","col-12","md:col-4","py-2"],["class","flex flex-wrap col-12 align-content-start",4,"ngIf"],["pButton","","pRipple","","type","button","label","Done","icon","pi pi-check","iconPos","right",1,"p-button-outlined","p-button-raised","p-button-success",3,"click"],["class","field col-12 md:col-3 py-2",4,"ngFor","ngForOf"],[1,"field","col-12","md:col-3","py-2"]],template:function(i,n){1&i&&(t.TgZ(0,"div",0)(1,"p-steps",1),t.NdJ("activeIndexChange",function(r){return n.onStepChange(r)}),t.qZA(),t.ynx(2,2),t.YNc(3,H,14,5,"ng-container",3),t.YNc(4,E,6,1,"ng-container",3),t.YNc(5,L,5,1,"ng-container",3),t.BQk(),t.qZA()),2&i&&(t.xp6(1),t.Q6J("model",n.getSteps())("readonly",!1)("activeIndex",n.activeStepIndex),t.xp6(1),t.Q6J("ngSwitch",n.activeStepIndex),t.xp6(1),t.Q6J("ngSwitchCase",0),t.xp6(1),t.Q6J("ngSwitchCase",1),t.xp6(1),t.Q6J("ngSwitchCase",2))},dependencies:[h.sg,h.O5,h.RF,h.n9,R.Hq,G.R,O.v]})}return a})(),$=(()=>{class a{constructor(e,i,n,l){this._activatedRoute=e,this._router=i,this._patientService=n,this._toasterService=l,this.patientId="",this.staffInfo=[],this.back=()=>this._router.navigate(["/patient"])}ngOnInit(){this._activatedRoute.paramMap.subscribe(e=>{this.patientId=e.params.id,this.getStaffInfo()})}getStaffInfo(){console.log(this.patientId),this._patientService.getPatientById(this.patientId).subscribe(e=>{const{firstName:i,lastName:n,gender:l,age:r,email:p,phoneNumber:g,address:v,state:o,city:c,zip:u}=e;this.staffInfo=[{key:"Name",value:i+" "+n},{key:"Gender",value:l},{key:"Age",value:r},{key:"Email",value:p},{key:"Phone",value:g},{key:"Address",value:v},{key:"City",value:c},{key:"State",value:o},{key:"Zip",value:u}]},e=>{500===e.status?(this._toasterService.error("Patient not found"),this.back()):(this._toasterService.error("Something went wrong"),this.back())})}static#t=this.\u0275fac=function(i){return new(i||a)(t.Y36(m.gz),t.Y36(m.F0),t.Y36(f.e),t.Y36(b.M))};static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-view-patient"]],decls:2,vars:0,template:function(i,n){1&i&&(t.TgZ(0,"p"),t._uU(1,"view-patient works!"),t.qZA())}})}return a})(),z=(()=>{class a{static#t=this.\u0275fac=function(i){return new(i||a)};static#e=this.\u0275mod=t.oAB({type:a});static#i=this.\u0275inj=t.cJS({imports:[m.Bz.forChild([{path:"",component:F,title:"Patient List"},{path:"add",component:y,title:"Patient Form"},{path:"add/:id",component:y,title:"Edit Patient"},{path:"view",component:$,title:"View Patient"}]),m.Bz]})}return a})();var U=s(2692);let j=(()=>{class a{static#t=this.\u0275fac=function(i){return new(i||a)};static#e=this.\u0275mod=t.oAB({type:a});static#i=this.\u0275inj=t.cJS({imports:[U.R,z]})}return a})()}}]);