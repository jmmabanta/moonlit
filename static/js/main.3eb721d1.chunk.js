(this.webpackJsonpmoonlit=this.webpackJsonpmoonlit||[]).push([[0],{117:function(e,t,n){},142:function(e,t,n){"use strict";n.r(t);var c,o,r=n(0),a=n.n(r),i=n(33),s=n.n(i),l=(n(117),n(11)),u=n(198),j=n(203),d=n(195),b=n(196),h=n(199),O=n(200),x=n(201),g=n(58),p=n(2),f=function(e){var t=Object(g.useGoogleLogout)({clientId:"391415236751-30bjtlsn5mifvrq6t4f4n7janqa343e6.apps.googleusercontent.com",onLogoutSuccess:function(t){e.loginUser({}),window.location.reload()},onFailure:function(){console.error("LOGOUT FAILED!!!")}}).signOut;return Object(p.jsx)(h.a,{position:"sticky",sx:{backgroundColor:"#37425B",padding:"0.25em"},children:Object(p.jsxs)(O.a,{children:[Object(p.jsxs)("div",{style:{display:"flex",flexDirection:"row",flex:1},children:[Object(p.jsxs)("div",{children:[Object(p.jsx)(x.a,{variant:"h3",sx:{margin:0},children:"Moonlit"}),Object(p.jsx)(x.a,{variant:"subtitle1",sx:{margin:0,color:"#FFD700"},children:"To the moon, To the stars..."})]}),Object(p.jsx)(j.a,{variant:"determinate",value:e.updateProgress,sx:{marginTop:"auto",marginBottom:"auto"}})]}),(!e.user||0!==Object.keys(e.user).length)&&Object(p.jsxs)("div",{style:{display:"flex",justifyContent:"space-evenly",alignItems:"center"},children:[Object(p.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-end"},children:[Object(p.jsxs)(x.a,{variant:"overline",sx:{margin:0},children:["Hello, ",e.user.name||""]}),Object(p.jsx)(d.a,{size:"small",sx:{margin:0},onClick:t,children:"LOGOUT"})]}),Object(p.jsx)(b.a,{src:e.user.picture.substring(0,e.user.picture.length-6),sx:{marginLeft:"1em",height:"2.5em",width:"2.5em"}})]})]})})},m=n(29),v=n.n(m),k=n(93),y=n(14),C=n(21),w=n.n(C),F=n(41),S=n(95),D=n.n(S),I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return"https://moonlit-api.herokuapp.com/"+e},L=function(e){var t=Object(g.useGoogleLogin)({onSuccess:function(t){var n=function(){var n=Object(F.a)(w.a.mark((function n(){var c;return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(c=new FormData).set("token_id",t.tokenId),n.prev=2,n.next=5,v.a.post(I(),c).then((function(t){e.loginUser(t.data),console.log(t.data)}));case 5:n.next=10;break;case 7:n.prev=7,n.t0=n.catch(2),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[2,7]])})));return function(){return n.apply(this,arguments)}}();n(),function(e){var t=1e3*(e.tokenObj.expires_in||3300),n=function(){var c=Object(F.a)(w.a.mark((function c(){var o;return w.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,e.reloadAuthResponse();case 2:o=c.sent,t=1e3*(o.expires_in||3300),setTimeout(n,t);case 5:case"end":return c.stop()}}),c)})));return function(){return c.apply(this,arguments)}}();setTimeout(n,t)}(t)},onFailure:function(e){console.log("LOGIN FAILED"),console.log(e)},clientId:"391415236751-30bjtlsn5mifvrq6t4f4n7janqa343e6.apps.googleusercontent.com",isSignedIn:!0,cookiePolicy:"single_host_origin"}),n=t.signIn;return Object(p.jsxs)(u.a,{children:[Object(p.jsx)(x.a,{variant:"h3",color:"#FFFFFF",children:"Welcome to Moonlit!"}),Object(p.jsx)(x.a,{variant:"subtitle1",color:"#FFFFFF",children:"A place to keep track of all of your stocks."}),Object(p.jsxs)(d.a,{onClick:n,size:"large",variant:"contained",children:[Object(p.jsx)(D.a,{sx:{marginRight:"0.5em"}}),"Login With Google"]})]})},T=n(197),E=n(25),U=n(204),_=n(205),A=n(184),N=n(96),R=n.n(N),z=Object(A.a)(x.a)(c||(c=Object(E.a)(["\n  color: ",";\n"])),(function(e){return e.pricechange>=0?"#18BC9D":"#DF9DC1"})),G=function(e){return Object(p.jsxs)(U.a,{sx:{backgroundColor:"#1D6988",color:"white",textShadow:"1px 1px #333333",width:"100vw",maxWidth:"220px",padding:"1em",position:"relative"},children:[Object(p.jsx)(x.a,{variant:"h4",children:e.ticker}),Object(p.jsx)(x.a,{variant:"caption",children:e.name}),Object(p.jsxs)(z,{variant:"h6",pricechange:e.priceChange,children:["$",e.currentPrice.toFixed(2)||0," (",e.priceChange>0?"+$"+e.priceChange.toFixed(2):"-$"+(-1*e.priceChange).toFixed(2),")"]}),Object(p.jsx)(_.a,{size:"small",color:"secondary","aria-label":"remove-stock",sx:{position:"absolute",top:10,right:10},onClick:function(){e.removeStock(e.id)},children:Object(p.jsx)(R.a,{})})]})},B=n(5),P=n(190),W=n(30),q=n(97),M=n(189),H=n(191),J=n(194),$=n(192),K=n(206),Q=n(98),V=n.n(Q),X=Object(A.a)(P.a)((o={},Object(B.a)(o,"& .".concat(W.a.root," .").concat(W.a.notchedOutline),{borderColor:"white"}),Object(B.a)(o,"&:hover .".concat(W.a.root," .").concat(W.a.notchedOutline),{borderColor:"white"}),Object(B.a)(o,"& .".concat(W.a.root,".").concat(W.a.focused," .").concat(W.a.notchedOutline),{borderColor:"white"}),Object(B.a)(o,"& .".concat(W.a.input),{color:"white"}),Object(B.a)(o,"&:hover .".concat(W.a.input),{color:"white"}),Object(B.a)(o,"& .".concat(W.a.root,".").concat(W.a.focused," .").concat(W.a.input),{color:"white"}),Object(B.a)(o,"& .".concat(q.a.outlined),{color:"white"}),Object(B.a)(o,"&:hover .".concat(q.a.outlined),{color:"white"}),Object(B.a)(o,"& .".concat(q.a.outlined,".").concat(q.a.focused),{color:"white"}),o)),Y=function(e){var t=Object(r.useState)(null),n=Object(l.a)(t,2),c=n[0],o=n[1],a=Object(r.useState)(""),i=Object(l.a)(a,2),s=i[0],j=i[1],b=Object(r.useState)(!1),h=Object(l.a)(b,2),O=h[0],x=h[1],g=Object(r.useState)(!1),f=Object(l.a)(g,2),m=f[0],k=f[1],y=Object(r.useState)(!1),C=Object(l.a)(y,2),S=C[0],D=C[1],L=function(){k(!1)},T=function(){var t=Object(F.a)(w.a.mark((function t(){var n;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return x(!0),(n=new FormData).set("ticker",s),n.set("user_id",e.user.sub),t.next=6,v.a.post(I("/add"),n).then((function(t){"string"!==typeof t.data?(e.newTicker(t.data),D(!0)):D(!1),x(!1)}));case 6:k(!0),j("");case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),E=Boolean(c),U=c?"simple-popover":void 0;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(M.a,{title:"Add Stock",children:Object(p.jsx)(_.a,{size:"medium",color:"primary","aria-label":"add-stock",sx:{position:"fixed",right:20,bottom:20},onClick:function(e){o(e.currentTarget)},children:Object(p.jsx)(V.a,{})})}),Object(p.jsx)(H.a,{id:U,anchorEl:c,open:E,onClose:function(){o(null)},anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"bottom",horizontal:"right"},children:Object(p.jsx)(u.a,{sx:{backgroundColor:"#343435",color:"white",padding:"1em 2em",display:"flex",flexDirection:"column"},children:Object(p.jsxs)("div",{style:{display:"flex",justifyContent:"space-evenly"},children:[Object(p.jsx)(X,{id:"outlined-basic",label:"Enter Stock Ticker",variant:"outlined",value:s,disabled:O,onChange:function(e){j(e.target.value)},sx:{marginRight:"1em"},onKeyDown:function(e){"Enter"===e.key&&T()}}),Object(p.jsx)(d.a,{variant:"outlined",disabled:O,onClick:T,children:"Add Stock"})]})})}),Object(p.jsx)(J.a,{open:m,onClose:L,autoHideDuration:5e3,children:S?Object(p.jsxs)($.a,{onClose:L,severity:"success",children:[Object(p.jsx)(K.a,{children:"SUCCESS!!!"}),"Stock was successfully added!"]}):Object(p.jsxs)($.a,{onClose:L,severity:"error",children:[Object(p.jsx)(K.a,{children:"ERROR!!!"}),"Stock was NOT FOUND!"]})})]})},Z=function(e){var t=Object(r.useState)([]),n=Object(l.a)(t,2),c=n[0],o=n[1],a=Object(r.useState)(!0),i=Object(l.a)(a,2),s=i[0],j=i[1],d=function(){var t=new FormData;t.set("user_id",e.user.sub),v.a.post(I("/update"),t).then((function(t){console.log(t.data),o(t.data),t.data.length>0&&e.resetCounter(),j(!1)})).catch((function(e){console.error(e)}))},b=function(t){var n=new FormData;n.set("user_id",e.user.sub),n.set("ticker",c[t].ticker),o((function(e){return e.splice(t,1),e})),v.a.post(I("/remove"),n)};return Object(r.useEffect)((function(){d(),setInterval(d,"45000")}),[]),s?Object(p.jsx)(u.a,{sx:{color:"#FFFFFF",textAlign:"center"},children:Object(p.jsx)(x.a,{variant:"h5",children:"Loading stocks..."})}):Object(p.jsxs)(T.a,{container:!0,spacing:2,justifyContent:"center",children:[c.map((function(e,t){return Object(p.jsx)(T.a,{item:!0,children:Object(p.jsx)(G,{id:t,ticker:e.ticker,name:e.name,currentPrice:e.price,priceChange:e.change,removeStock:b})},t)})),0===c.length&&Object(p.jsxs)(u.a,{sx:{color:"#aaaaaa"},children:[Object(p.jsx)(x.a,{variant:"h4",children:"Nothing here!"}),Object(p.jsx)(x.a,{variant:"overline",children:"Try adding some stocks using the button in the bottom right!"})]}),Object(p.jsx)(Y,{user:e.user,newTicker:function(e){o(e),d()}})]})},ee=function(e){var t=Object(y.g)();return console.log(t),e.isLoggedIn?Object(p.jsx)(Z,{user:e.user,resetCounter:e.resetCounter}):Object(p.jsx)(L,{loginUser:e.loginUser})},te=function(){var e=Object(y.g)();return Object(p.jsx)("div",{children:Object(p.jsxs)("h1",{children:["Hello World! Query = ",e.id]})})},ne=function(){return Object(p.jsx)("div",{style:{position:"fixed",bottom:5,color:"#aaaaaa"},children:Object(p.jsxs)(x.a,{variant:"overline",children:["\xa9 2021 John Mabanta \xb7"," ",Object(p.jsx)("a",{href:"https://github.com/jmmabanta/moonlit",target:"_blank",rel:"noreferrer",style:{color:"#aaaaaa"},children:"SOURCE CODE"})]})})},ce=function(){var e=Object(r.useState)(!0),t=Object(l.a)(e,2),n=t[0],c=t[1],o=Object(r.useState)(0),a=Object(l.a)(o,2),i=a[0],s=a[1],j=Object(r.useState)({}),d=Object(l.a)(j,2),b=d[0],h=d[1];Object(k.a)(v.a,{retries:999,retryDelay:function(e){return 1e3*e}});var O=function(){s((function(e){return e<100?e+=5:e}))},x=null,g=function(e){h(e)};return Object(r.useEffect)((function(){v.a.get(I()).then((function(e){console.log("CONNECTED!"),console.log(e.data),c(!1)})).catch((function(e){console.error(e)}))}),[]),n?Object(p.jsx)("h1",{children:"Loading..."}):Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(f,{updateProgress:i,user:b,isLoggedIn:!b||0!==Object.keys(b).length,loginUser:g}),Object(p.jsxs)(u.a,{maxWidth:"none",sx:{paddingTop:"2em"},children:[Object(p.jsxs)(y.c,{children:[Object(p.jsx)(y.a,{path:"/portfolio/:id",element:Object(p.jsx)(te,{})}),Object(p.jsx)(y.a,{path:"/",element:Object(p.jsx)(ee,{isLoggedIn:!b||0!==Object.keys(b).length,loginUser:g,user:b,resetCounter:function(){null!==x&&(clearInterval(x),x=null),s(10),x=setInterval(O,2250)}})})]}),Object(p.jsx)(ne,{})]})]})},oe=n(48);s.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(oe.a,{basename:"/",children:Object(p.jsx)(ce,{})})}),document.getElementById("root"))}},[[142,1,2]]]);
//# sourceMappingURL=main.3eb721d1.chunk.js.map