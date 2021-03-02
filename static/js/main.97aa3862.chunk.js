(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{12:function(t,e,n){t.exports={form:"ContactForm_form__2IF4m",input:"ContactForm_input__3dHde",btn:"ContactForm_btn__tShh_",container:"ContactForm_container__jcN59"}},13:function(t,e,n){t.exports={list:"ContactList_list__2cE9S",contact:"ContactList_contact__2n-Pp",name:"ContactList_name__2vs56",number:"ContactList_number__3h_Jg",btn:"ContactList_btn__2-jnR"}},24:function(t,e,n){t.exports={container:"Container_container__3e1Mh"}},42:function(t,e,n){},43:function(t,e,n){},44:function(t,e,n){},45:function(t,e,n){},48:function(t,e,n){},49:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(8),o=n.n(c),r=n(5),s=n(23),i=n(24),l=n.n(i),u=n(1);function b(t){var e=t.children;return Object(u.jsx)("div",{className:l.a.container,children:e})}var j,m=n(51),h=(n(42),function(){return Object(u.jsx)(m.a,{in:!0,appear:!0,timeout:500,classNames:"Title-SlideIn",unmountOnExit:!0,children:Object(u.jsx)("h1",{className:"Title",children:"Phonebook"})})}),d=n(11),O=n(26),f=n(27),p=n(31),x=n(30),g=n(52),v=n(6),C={addContact:Object(v.b)("contacts/add",(function(t,e){return{payload:{id:Object(g.a)(),name:t,number:e}}})),deleteContact:Object(v.b)("contacts/delete"),changeFilter:Object(v.b)("contacts/changeFilter")},_=(n(43),function(t){var e=t.message;return Object(u.jsx)(m.a,{in:e,timeout:250,classNames:"Notification-fade",unmountOnExit:!0,children:Object(u.jsx)("div",{className:"Overlay",children:Object(u.jsx)("p",{className:"Notification",children:e})})})}),N=n(12),k=n.n(N),y=function(t){Object(p.a)(n,t);var e=Object(x.a)(n);function n(){var t;Object(O.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:"",message:null},t.setMessage=function(e){t.setState({message:e}),setTimeout((function(){t.setState({message:null})}),2500)},t.handleSubmit=function(e){var n=t.state,a=n.name,c=n.number;e.preventDefault(),""!==a?""!==c?t.props.contacts.find((function(t){return t.name.toLowerCase()===a.toLowerCase()}))?t.setMessage("Contact already exists!"):(t.props.onSubmit(a,c),t.setState({name:"",number:""})):t.setMessage("Enter concact phone, please!"):t.setMessage("Enter contact name, please!")},t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(d.a)({},a,c))},t}return Object(f.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number,a=t.message;return Object(u.jsxs)("div",{className:k.a.container,children:[Object(u.jsx)(_,{message:a}),Object(u.jsxs)("form",{className:k.a.form,onSubmit:this.handleSubmit,children:[Object(u.jsx)("label",{children:Object(u.jsx)("input",{className:k.a.input,type:"text",value:e,name:"name",placeholder:"Name",onChange:this.handleChange})}),Object(u.jsx)("label",{children:Object(u.jsx)("input",{className:k.a.input,type:"tel",value:n,name:"number",placeholder:"+380",onChange:this.handleChange})}),Object(u.jsx)("button",{className:k.a.btn,type:"submit",children:"Add contact"})]})]})}}]),n}(a.Component),F=Object(r.b)((function(t){return{contacts:t.phoneBook.contacts}}),(function(t){return{onSubmit:function(e,n){return t(C.addContact(e,n))}}}))(y),S=n(13),w=n.n(S),L=n(53),E=(n(44),function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))}),B=Object(r.b)((function(t){var e=t.phoneBook,n=e.contacts,a=e.filter;return{contacts:E(n,a)}}),(function(t){return{onDelete:function(e){return t(C.deleteContact(e))},clearFilter:function(){return t(C.changeFilter(""))}}}))((function(t){var e=t.contacts,n=t.onDelete,a=t.clearFilter;return Object(u.jsx)(L.a,{component:"ul",className:w.a.list,children:e.map((function(t){var e=t.id,c=t.name,o=t.number;return Object(u.jsx)(m.a,{timeout:250,classNames:"List-slideIn",unmountOnExit:!0,children:Object(u.jsxs)("li",{className:w.a.contact,children:[Object(u.jsx)("span",{className:w.a.name,children:c}),Object(u.jsx)("span",{className:w.a.number,children:o}),Object(u.jsx)("button",{className:w.a.btn,onClick:function(){n(e,a())},"aria-label":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043a\u043e\u043d\u0442\u0430\u043a\u0442",children:"Delete"})]})},e)}))})})),M=(n(45),Object(r.b)((function(t){return{value:t.phoneBook.filter,contacts:t.phoneBook.contacts}}),(function(t){return{onChangeFilter:function(e){return t(C.changeFilter(e.target.value))}}}))((function(t){var e=t.value,n=t.onChangeFilter,a=t.contacts;return Object(u.jsx)(m.a,{in:a.length>1,timeout:250,classNames:"Filter-fade",unmountOnExit:!0,children:Object(u.jsx)("form",{className:"form",children:Object(u.jsxs)("label",{children:[Object(u.jsx)("span",{className:"title",children:"Find contacts by name"}),Object(u.jsx)("input",{className:"input",type:"text",value:e,onChange:n})]})})})}))),D=Object(r.b)((function(t){return{contacts:t.phoneBook.contacts}}),null)((function(t){var e=t.contacts;return Object(u.jsxs)(b,{children:[Object(u.jsx)(h,{}),Object(u.jsx)(F,{}),Object(u.jsx)(M,{}),Object(u.jsx)(m.a,{in:e.length>0,timeout:0,unmountOnExit:!0,children:Object(u.jsx)(B,{})})]})})),T=n(16),A=n(28),I=n.n(A),J=n(7),P=n(29),q=n.n(P),z=n(2),H=Object(v.c)([],(j={},Object(d.a)(j,C.addContact,(function(t,e){var n=e.payload;return[].concat(Object(T.a)(t),[n])})),Object(d.a)(j,C.deleteContact,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),j)),R=Object(v.c)("",Object(d.a)({},C.changeFilter,(function(t,e){return e.payload}))),G=Object(z.c)({contacts:H,filter:R}),K=[].concat(Object(T.a)(Object(v.d)({serializableCheck:{ignoredActions:[J.a,J.f,J.b,J.c,J.d,J.e]}})),[I.a]),Q={key:"phoneBook",storage:q.a,blacklist:["filter"]},U=Object(v.a)({reducer:{phoneBook:Object(J.g)(Q,G)},middleware:K,devTools:!1}),V={store:U,persistor:Object(J.h)(U)};n(48);o.a.render(Object(u.jsx)(r.a,{store:V.store,children:Object(u.jsx)(s.a,{persistor:V.persistor,children:Object(u.jsx)(D,{})})}),document.querySelector("#root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.97aa3862.chunk.js.map