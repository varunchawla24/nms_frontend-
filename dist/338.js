"use strict";(self.webpackChunkcd_admin_v2=self.webpackChunkcd_admin_v2||[]).push([[338],{4338:(P,d,a)=>{a.r(d),a.d(d,{VerifyOtpModule:()=>E});var c=a(9808),g=a(8555),f=a(1e3),m=a(5226),y=a.n(m),n=a(5e3),l=a(3075);const v=["otpInputElement"];function C(i,r){if(1&i){const t=n.\u0275\u0275getCurrentView();n.\u0275\u0275elementStart(0,"div",2)(1,"label")(2,"input",3,4),n.\u0275\u0275listener("keyup",function(o){const p=n.\u0275\u0275restoreView(t).index;return n.\u0275\u0275nextContext().handleKeyUp(p,o.key)})("keyup.backspace",function(){const s=n.\u0275\u0275restoreView(t).index;return n.\u0275\u0275nextContext().handleDelete(s)})("keyup.arrowLeft",function(){const s=n.\u0275\u0275restoreView(t).index;return n.\u0275\u0275nextContext().stepBackward(s)})("keyup.arrowRight",function(){const s=n.\u0275\u0275restoreView(t).index;return n.\u0275\u0275nextContext().stepForward(s)})("focus",function(){const s=n.\u0275\u0275restoreView(t).index;return n.\u0275\u0275nextContext().handleFocus(s)}),n.\u0275\u0275elementEnd()()()}if(2&i){const t=r.$implicit,e=r.index,o=n.\u0275\u0275nextContext();n.\u0275\u0275property("ngClass",null==o.otpConfig.classList?null:o.otpConfig.classList.inputBox),n.\u0275\u0275advance(1),n.\u0275\u0275attribute("aria-label",o.ariaLabels[e]),n.\u0275\u0275advance(1),n.\u0275\u0275property("id","ngx-otp-input-"+e)("formControl",t)("ngxOtpPattern",o.otpConfig.pattern)("type",o.otpConfig.isPasswordInput?"password":"text")("ngClass",o.styles[e])}}var u=(()=>{return(i=u||(u={}))[i.DEFAULT=0]="DEFAULT",i[i.LEGACY=1]="LEGACY",u;var i})();let h=(()=>{class i{init2DArray(t){return new Array(t).fill(new Array)}toArray(t){return Array.isArray(t)?t:[t]}addItemToAll(t,e){return t.map(o=>o.concat(e))}removeItemFromAll(t,e){return t.map(o=>o.filter(s=>!e.includes(s)))}addItemAtIndex(t,e,o){return t[e]=t[e].concat(o),t}removeItemAtIndex(t,e,o){return t[e]=t[e].filter(s=>!o.includes(s)),t}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275prov=n.\u0275\u0275defineInjectable({token:i,factory:i.\u0275fac}),i})(),x=(()=>{class i{constructor(){this.allowedKeys=["Backspace","ArrowLeft","ArrowRight","Escape","Tab"]}onKeyDown(t){this.allowedKeys.includes(t.key)||"KeyA"===t.code&&!0===t.ctrlKey||"KeyC"===t.code&&!0===t.ctrlKey||"KeyV"===t.code&&!0===t.ctrlKey||"KeyX"===t.code&&!0===t.ctrlKey||"KeyA"===t.code&&!0===t.metaKey||"KeyC"===t.code&&!0===t.metaKey||"KeyV"===t.code&&!0===t.metaKey||"KeyX"===t.code&&!0===t.metaKey||this.pattern.test(t.key)||t.preventDefault()}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275dir=n.\u0275\u0275defineDirective({type:i,selectors:[["","ngxOtpPattern",""]],hostBindings:function(t,e){1&t&&n.\u0275\u0275listener("keydown",function(s){return e.onKeyDown(s)})},inputs:{pattern:["ngxOtpPattern","pattern"]}}),i})(),O=(()=>{class i{constructor(t,e){this.ngxOtpInputService=t,this.ref=e,this.ngxOtpArray=new l.Oe([]),this.ariaLabels=[],this.styles=[],this.otpConfig={otpLength:6,autofocus:!0,autoblur:!0,behavior:u.DEFAULT},this.defaultPattern=/^\d+$/,this.DEFAULT_ARIA_LABEL="One time password input",this.isNgxOtpArrayDisabled=!1,this.focusedInputHasValue=!1,this.otpChange=new n.EventEmitter,this.fill=new n.EventEmitter}onPaste(t){t.preventDefault(),this.handlePaste(t.clipboardData.getData("text"))}set disable(t){this.handleDisable(t),this.isNgxOtpArrayDisabled=t}set config(t){var e;this.otpConfig=Object.assign(Object.assign({},this.otpConfig),t),(null===(e=this.otpConfig.classList)||void 0===e?void 0:e.input)&&this.setInitialStyles(),t.pattern||(this.otpConfig.pattern=this.defaultPattern)}set status(t){this.handleStatusChange(t)}ngOnInit(){this.setUpOtpForm(),this.setUpAriaLabels(),this.LAST_INPUT_INDEX=this.otpConfig.otpLength-1,this.otpFormChangeListener()}ngAfterViewInit(){this.setNativeHTMLElements(),this.setInitialFocus(),this.setNumericInputIfPossible(),this.handleDisable(this.isNgxOtpArrayDisabled)}ngOnDestroy(){this.ngxOtpArray$.unsubscribe()}clear(){var t;this.removeStyleFromAll(null===(t=this.otpConfig.classList)||void 0===t?void 0:t.inputFilled),this.ngxOtpArray.reset(),this.ref.detectChanges(),this.otpConfig.autofocus&&this.setFocus(0)}handleKeyUp(t,e){var o;this.otpConfig.pattern.test(e)&&"Backspace"!==e&&(this.addStyle(t,null===(o=this.otpConfig.classList)||void 0===o?void 0:o.inputFilled),this.ngxOtpArray.valid?this.blur():(this.getFormControlByIndex(t).setValue(e),this.stepForward(t)))}handleDelete(t){var e;this.removeStyle(t,null===(e=this.otpConfig.classList)||void 0===e?void 0:e.inputFilled),this.otpConfig.behavior===u.LEGACY&&!this.focusedInputHasValue||this.otpConfig.behavior!==u.LEGACY?this.stepBackward(t):this.focusedInputHasValue=!1}handleFocus(t){this.focusedInputHasValue=!!this.ngxOtpArray.controls[t].value,this.otpConfig.behavior===u.LEGACY&&this.focusedInputHasValue&&this.inputs[t].select()}stepBackward(t){t>0&&this.setFocus(t-1)}stepForward(t){t<this.LAST_INPUT_INDEX&&this.setFocus(t+1)}otpFormChangeListener(){this.ngxOtpArray$=this.ngxOtpArray.valueChanges.subscribe(t=>{this.otpChange.emit(t),this.ngxOtpArray.valid&&this.fill.emit(t.join(""))})}setUpOtpForm(){for(let t=0;t<this.otpConfig.otpLength;t++)this.ngxOtpArray.push(new l.NI(null,[l.kI.required]))}setUpAriaLabels(){const t=this.otpConfig.ariaLabels;this.ariaLabels=Array.isArray(t)?t:new Array(this.otpConfig.otpLength).fill(t||this.DEFAULT_ARIA_LABEL)}setNativeHTMLElements(){this.inputs=this.otpInputElements.map(t=>t.nativeElement)}setInitialFocus(){this.otpConfig.autofocus&&this.setFocus(0)}setInitialStyles(){this.styles=this.ngxOtpInputService.init2DArray(this.otpConfig.otpLength),this.addStyleToAll(this.otpConfig.classList.input)}setFocus(t){this.inputs[t].focus()}setNumericInputIfPossible(){this.otpConfig.numericInputMode&&(this.otpConfig.pattern=this.defaultPattern,this.inputs.map(t=>{t.setAttribute("inputmode","numeric"),t.setAttribute("pattern","[0-9]*")}))}blur(){this.otpConfig.autoblur&&this.inputs.map(t=>t.blur())}handlePaste(t){if(this.otpConfig.pattern.test(t)){let e=0;t.split("").slice(0,this.otpConfig.otpLength).map((o,s)=>{var p;this.addStyle(s,null===(p=this.otpConfig.classList)||void 0===p?void 0:p.inputFilled),this.getFormControlByIndex(s).setValue(o),e=s}),this.ngxOtpArray.valid?this.blur():this.setFocus(e+1)}}handleDisable(t){var e,o;t?(this.ngxOtpArray.disable(),this.addStyleToAll(null===(e=this.otpConfig.classList)||void 0===e?void 0:e.inputDisabled)):(this.ngxOtpArray.enable(),this.removeStyleFromAll(null===(o=this.otpConfig.classList)||void 0===o?void 0:o.inputDisabled))}handleStatusChange(t){var e,o,s,p;this.removeStyleFromAll([...this.ngxOtpInputService.toArray(null===(e=this.otpConfig.classList)||void 0===e?void 0:e.inputSuccess),...this.ngxOtpInputService.toArray(null===(o=this.otpConfig.classList)||void 0===o?void 0:o.inputError)]),t&&("success"===t?this.addStyleToAll(null===(s=this.otpConfig.classList)||void 0===s?void 0:s.inputSuccess):"error"===t&&this.addStyleToAll(null===(p=this.otpConfig.classList)||void 0===p?void 0:p.inputError))}getFormControlByIndex(t){return this.ngxOtpArray.controls[t]}addStyle(t,e){this.styles=this.ngxOtpInputService.addItemAtIndex(this.styles,t,this.ngxOtpInputService.toArray(e))}addStyleToAll(t){this.styles=this.ngxOtpInputService.addItemToAll(this.styles,this.ngxOtpInputService.toArray(t))}removeStyle(t,e){this.styles=this.ngxOtpInputService.removeItemAtIndex(this.styles,t,this.ngxOtpInputService.toArray(e))}removeStyleFromAll(t){this.styles=this.ngxOtpInputService.removeItemFromAll(this.styles,this.ngxOtpInputService.toArray(t))}}return i.\u0275fac=function(t){return new(t||i)(n.\u0275\u0275directiveInject(h),n.\u0275\u0275directiveInject(n.ChangeDetectorRef))},i.\u0275cmp=n.\u0275\u0275defineComponent({type:i,selectors:[["ngx-otp-input"]],viewQuery:function(t,e){if(1&t&&n.\u0275\u0275viewQuery(v,5),2&t){let o;n.\u0275\u0275queryRefresh(o=n.\u0275\u0275loadQuery())&&(e.otpInputElements=o)}},hostBindings:function(t,e){1&t&&n.\u0275\u0275listener("paste",function(s){return e.onPaste(s)})},inputs:{disable:"disable",config:"config",status:"status"},outputs:{otpChange:"otpChange",fill:"fill"},decls:2,vars:2,consts:[[1,"ngx-otp-input-container",3,"ngClass"],["class","ngx-otp-input-box",3,"ngClass",4,"ngFor","ngForOf"],[1,"ngx-otp-input-box",3,"ngClass"],["maxlength","1","autocapitalize","off","spellcheck","false",1,"ngx-otp-input",3,"id","formControl","ngxOtpPattern","type","ngClass","keyup","keyup.backspace","keyup.arrowLeft","keyup.arrowRight","focus"],["otpInputElement",""]],template:function(t,e){1&t&&(n.\u0275\u0275elementStart(0,"form",0),n.\u0275\u0275template(1,C,4,7,"div",1),n.\u0275\u0275elementEnd()),2&t&&(n.\u0275\u0275property("ngClass",null==e.otpConfig.classList?null:e.otpConfig.classList.container),n.\u0275\u0275advance(1),n.\u0275\u0275property("ngForOf",e.ngxOtpArray.controls))},directives:[l._Y,l.JL,l.F,c.mk,c.sg,l.Fj,l.nD,l.JJ,l.oH,x],styles:[".ngx-otp-input-container[_ngcontent-%COMP%]{display:flex}.ngx-otp-input-box[_ngcontent-%COMP%]{margin:0 5px}.ngx-otp-input-box[_ngcontent-%COMP%]:first-child{margin-left:0}.ngx-otp-input-box[_ngcontent-%COMP%]:last-child{margin-right:0}.ngx-otp-input[_ngcontent-%COMP%]{width:35px;height:35px;text-align:center;font-size:1.25rem;border:1px solid #212121;border-radius:4px;outline:0}.ngx-otp-input-disabled[_ngcontent-%COMP%]{opacity:.3}"],changeDetection:0}),i})(),I=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=n.\u0275\u0275defineNgModule({type:i}),i.\u0275inj=n.\u0275\u0275defineInjector({providers:[h],imports:[[l.UX,l.u5,c.ez]]}),i})();function _(i,r){if(1&i&&(n.\u0275\u0275elementStart(0,"div",7),n.\u0275\u0275text(1),n.\u0275\u0275elementEnd()),2&i){const t=n.\u0275\u0275nextContext();n.\u0275\u0275advance(1),n.\u0275\u0275textInterpolate(t.error.error.message)}}let A=(()=>{class i{constructor(t,e){this.router=t,this.userService=e,this.loading=!1,this.submitted=!1,this.error="",this.filled=!1,this.otpInputConfig={otpLength:4,autofocus:!0,classList:{inputBox:"my-super-box-class",input:"my-super-class",inputFilled:"my-super-filled-class",inputDisabled:"my-super-disable-class",inputSuccess:"my-super-success-class",inputError:"my-super-error-class"}}}ngOnInit(){this.checkLogin()}checkLogin(){const t=localStorage.getItem("isLogin");console.log("is login",t),this.router.navigate("true"==t?["/verifyOtp"]:["/login"])}onOtpChange(t){console.log("event",t)}handeOtpChange(t){console.log("change",t)}handleFillEvent(t){console.log("fill",t),this.filled=!0,this.otp=t}verifyOtp(){console.log("subject",this.userService.mobileSubjectValue);const t=this.userService.mobileSubjectValue;console.log("fsff",t),this.userService.verifyOtp(t,this.otp).pipe().subscribe(e=>{console.log("data",e.data),localStorage.getItem("currentUser")&&this.getProfile(e)},e=>{console.log("errrr",this.error.error),this.error=e,this.loading=!1,y().fire({icon:"error",title:"Oops...",text:e.error.message})})}getProfile(t){this.userService.getProfile(t).pipe().subscribe(e=>{this.profileData=e.data,console.log("data",this.profileData),localStorage.setItem("profile",JSON.stringify(this.profileData)),this.router.navigate(["/"])},e=>{console.log("err",e),this.error=e,this.loading=!1,console.log("errrr",this.error.error)})}}return i.\u0275fac=function(t){return new(t||i)(n.\u0275\u0275directiveInject(g.F0),n.\u0275\u0275directiveInject(f.K))},i.\u0275cmp=n.\u0275\u0275defineComponent({type:i,selectors:[["app-verify-otp"]],decls:8,vars:3,consts:[[1,"container"],["src","../../../assets/login11.jpg","alt","Snow",2,"width","100%"],[1,"centered"],["fxLayout","column","fxLayoutAlign","start stretch",3,"ngSubmit"],[3,"config","otpChange","fill"],["mat-raised-button","","color","primary","type","button",3,"disabled","click"],["class","alert alert-danger mt-3 mb-0",4,"ngIf"],[1,"alert","alert-danger","mt-3","mb-0"]],template:function(t,e){1&t&&(n.\u0275\u0275elementStart(0,"div",0),n.\u0275\u0275element(1,"img",1),n.\u0275\u0275elementStart(2,"div",2)(3,"form",3),n.\u0275\u0275listener("ngSubmit",function(){return e.verifyOtp()}),n.\u0275\u0275elementStart(4,"ngx-otp-input",4),n.\u0275\u0275listener("otpChange",function(s){return e.handeOtpChange(s)})("fill",function(s){return e.handleFillEvent(s)}),n.\u0275\u0275elementEnd(),n.\u0275\u0275elementStart(5,"button",5),n.\u0275\u0275listener("click",function(){return e.verifyOtp()}),n.\u0275\u0275text(6,"verify"),n.\u0275\u0275elementEnd(),n.\u0275\u0275template(7,_,2,1,"div",6),n.\u0275\u0275elementEnd()()()),2&t&&(n.\u0275\u0275advance(4),n.\u0275\u0275property("config",e.otpInputConfig),n.\u0275\u0275advance(1),n.\u0275\u0275property("disabled",!e.filled),n.\u0275\u0275advance(2),n.\u0275\u0275property("ngIf",e.error))},directives:[l._Y,l.JL,l.F,O,c.O5],styles:[".sigin-conainer[_ngcontent-%COMP%]{min-height:100%;background-size:cover;padding:100px}.sigin-main[_ngcontent-%COMP%]{position:relative;margin:0 auto;width:500px}.full-width[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]{position:relative;text-align:center}.centered[_ngcontent-%COMP%]{position:absolute;top:30%;left:50%;transform:translate(-50%,-50%)}.redirect[_ngcontent-%COMP%]{font-size:14px;margin-left:10px;color:#0aa}"]}),i})();var b=a(4390),L=a(2930),S=a(520),F=a(6367),D=a(6766);const w=[{path:"",component:A}];let E=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=n.\u0275\u0275defineNgModule({type:i}),i.\u0275inj=n.\u0275\u0275defineInjector({providers:[f.K],imports:[[c.ez,g.Bz.forChild(w),b.Xz,I,S.JF,L.QW,D.c,F.g0,l.u5,l.UX]]}),i})()}}]);