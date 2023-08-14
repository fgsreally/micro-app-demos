"use strict";(self["webpackChunk_icestark_demo_vue2_child"]=self["webpackChunk_icestark_demo_vue2_child"]||[]).push([[72],{42363:function(e,t,a){a.d(t,{A:function(){return s}});var r=a(43177),n=a(95698);const s=(0,r.Q_)("counter",(()=>{const e=(0,n.ref)(0),t=t=>{e.value+=t},a=t=>{e.value-=t};return{value:e,decrement:a,increment:t}}))},83546:function(e,t,a){a.d(t,{s:function(){return r},x:function(){return n}});var r=function(){var e=this,t=e._self._c;return t("a-space",{staticClass:"box",attrs:{size:40,direction:"vertical"}},[t("a-row",{attrs:{type:"flex",justify:"center",align:"middle",gutter:20}},[t("a-col",[t("label",[e._v("step:")])]),t("a-col",[t("a-input-number",{attrs:{size:"large"},model:{value:e.step,callback:function(t){e.step=t},expression:"step"}})],1)],1),t("a-row",{attrs:{type:"flex",justify:"center",align:"middle",gutter:40}},[t("a-col",[t("a-button",{staticClass:"btn",attrs:{type:"primary",size:"large"},on:{click:()=>e.increment(e.step)}},[e._v("+")])],1),t("a-col",[t("h1",{staticClass:"number"},[e._v(e._s(e.value))])]),t("a-col",[t("a-button",{staticClass:"btn",attrs:{type:"danger",size:"large"},on:{click:()=>e.decrement(e.step)}},[e._v("-")])],1)],1)],1)},n=[]},63550:function(e,t,a){a.d(t,{s:function(){return r},x:function(){return n}});var r=function(){var e=this,t=e._self._c;return t("a-form",{attrs:{form:e.form}},[t("a-form-item",e._b({attrs:{label:"信息文本"}},"a-form-item",e.formItemLayout,!1),[t("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["info",{rules:[{required:!0,message:"信息不能为空!"}]}],expression:"['info', { rules: [{ required: true, message: '信息不能为空!' }] }]"}],attrs:{placeholder:"输入信息文本",rows:4}})],1),t("a-form-item",e._b({attrs:{label:"消息类型"}},"a-form-item",e.formItemLayout,!1),[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["type",{initialValue:"success",rules:[{required:!0,message:"消息类型不能为空!"}]}],expression:"['type', { initialValue: 'success', rules: [{ required: true, message: '消息类型不能为空!' }] }]"}]},e._l(e.types,(function(a){return t("a-select-option",{key:a.value,attrs:{value:a.value}},[e._v(e._s(a.label))])})),1)],1),t("a-row",{attrs:{type:"flex",justify:"center"}},[t("a-col",[t("a-button",{attrs:{type:"primary"},on:{click:e.sendMessage}},[e._v("向主应用发送信息")])],1)],1)],1)},n=[]},18566:function(e,t,a){a.d(t,{s:function(){return r},x:function(){return n}});var r=function(){var e=this,t=e._self._c;return t("a-tabs",{attrs:{"default-active-key":"1"}},[t("a-tab-pane",{key:"1",attrs:{tab:"input"}},[t("a-input")],1),t("a-tab-pane",{key:"2",attrs:{tab:"message trigger"}},[t("message-trigger")],1),t("a-tab-pane",{key:"3",attrs:{tab:"counter"}},[t("counter")],1)],1)},n=[]},92300:function(){},77469:function(e,t,a){a(36751);var r=a(7286),n=(a(99988),a(64347)),s=(a(13464),a(72081)),u=(a(26039),a(73207)),o=(a(81878),a(4076)),i=a(42363),l=a(43177);t.Z={name:"Counter",data(){return{step:1}},computed:{...(0,l.rn)(i.A,["value"])},methods:{...(0,l.nv)(i.A,["increment","decrement"])},components:{[o["default"].name]:o["default"],[u.Z.name]:u.Z,[s.Z.name]:s.Z,[n.ZP.name]:n.ZP,[r.ZP.name]:r.ZP}}},51482:function(e,t,a){a(72911);var r,n=a(84596),s=(a(26039),a(73207)),u=(a(13464),a(72081)),o=(a(81878),a(4076)),i=(a(6714),a(82265)),l=(a(38416),a(23270)),c=a(27040);(function(e){e["success"]="success",e["warn"]="warn",e["error"]="error",e["info"]="info"})(r||(r={})),t.Z={name:"MessageTrigger",data(){return{types:[{value:r.success,label:"成功"},{value:r.error,label:"失败"},{value:r.warn,label:"提醒"},{value:r.info,label:"信息"}],formItemLayout:{labelCol:{xs:{span:24},sm:{span:3,offset:6}},wrapperCol:{xs:{span:24},sm:{span:9}}}}},beforeCreate(){this.form=this.$form.createForm(this,{name:"form"})},methods:{sendMessage(){this.form.validateFields(((e,t)=>{e||c.B.emit("message",{...t,from:"Vue2子应用"})}))}},components:{[l.Z.TextArea.name]:l.Z.TextArea,[i.ZP.name]:i.ZP,[i.ZP.Option.name]:i.ZP.Option,[o["default"].name]:o["default"],[u.Z.name]:u.Z,[s.Z.name]:s.Z,[n.ZP.name]:n.ZP,[n.ZP.Item.name]:n.ZP.Item}}},98493:function(e,t,a){a(89413);var r=a(8897),n=(a(38416),a(23270)),s=a(24344),u=a(43669);t.Z={name:"TabView",components:{MessageTrigger:s.Z,Counter:u.Z,[n.Z.name]:n.Z,[r.ZP.name]:r.ZP,[r.ZP.TabPane.name]:r.ZP.TabPane}}},43669:function(e,t,a){var r=a(83546),n=a(76322),s=(a(15829),a(12410)),u=(0,s.Z)(n.Z,r.s,r.x,!1,null,"43a70264",null);t.Z=u.exports},24344:function(e,t,a){var r=a(63550),n=a(52567),s=a(12410),u=(0,s.Z)(n.Z,r.s,r.x,!1,null,"516a4a98",null);t.Z=u.exports},4722:function(e,t,a){a.r(t);var r=a(18566),n=a(46595),s=a(12410),u=(0,s.Z)(n.Z,r.s,r.x,!1,null,null,null);t["default"]=u.exports},15829:function(e,t,a){a(92300)},76322:function(e,t,a){var r=a(77469);t.Z=r.Z},52567:function(e,t,a){var r=a(51482);t.Z=r.Z},46595:function(e,t,a){var r=a(98493);t.Z=r.Z}}]);
//# sourceMappingURL=72.a7d09660.js.map