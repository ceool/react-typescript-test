(self.webpackChunkslack_react_ts=self.webpackChunkslack_react_ts||[]).push([[477],{9250:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var a=n(5692),l=n(8678),r=n(3046),o=n(3564),i=n(9669),s=n.n(i),c=n(7294),p=n(5977),d=n(9249),m=n(8118);const u=({show:e,onCloseModal:t,setShowInviteChannelModal:n})=>{const{workspace:i,channel:u}=(0,p.UO)(),[h,g,b]=(0,l.Z)(""),{data:x}=(0,m.ZP)("/api/users",o.Z),{revalidate:k}=(0,m.ZP)(x&&u?`/api/workspaces/${i}/channels/${u}/members`:null,o.Z),f=(0,c.useCallback)((e=>{e.preventDefault(),h&&h.trim()&&s().post(`/api/workspaces/${i}/channels/${u}/members`,{email:h}).then((()=>{k(),n(!1),b("")})).catch((e=>{var t;console.dir(e),d.Am.error(null===(t=e.response)||void 0===t?void 0:t.data,{position:"bottom-center"})}))}),[h]);return c.createElement(a.Z,{show:e,onCloseModal:t},c.createElement("form",{onSubmit:f},c.createElement(r.__,{id:"member-label"},c.createElement("span",null,"채널 멤버 초대"),c.createElement(r.II,{id:"member",value:h,onChange:g})),c.createElement(r.zx,{type:"submit"},"초대하기")))}},5692:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var a=n(7753);const l=(0,a.Z)("div",{target:"eotctb41"})({name:"10w7pu7",styles:"position:fixed;text-align:center;left:0;bottom:0;top:0;right:0;z-index:1022;&>div{margin-top:200px;display:inline-block;width:440px;background:white;--saf-0:rgba(var(--sk_foreground_low, 29, 28, 29), 0.13);box-shadow:0 0 0 1px var(--saf-0),0 4px 12px 0 rgba(0, 0, 0, 0.12);background-color:rgba(var(--sk_foreground_min_solid, 248, 248, 248), 1);border-radius:6px;user-select:none;max-width:440px;padding:30px 40px 0;z-index:1012;position:relative;}"}),r=(0,a.Z)("button",{target:"eotctb40"})({name:"19gmbxq",styles:"position:absolute;right:10px;top:6px;background:transparent;border:none;font-size:30px;cursor:pointer"});var o=n(7294);const i=({show:e,children:t,onCloseModal:n})=>{const a=(0,o.useCallback)((e=>{e.stopPropagation()}),[]);return e?o.createElement(l,{onClick:n},o.createElement("div",{onClick:a},o.createElement(r,{onClick:n},"×"),t)):null}},2951:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var a=n(6809),l=n.n(a),r=n(7294);const o={},i=e=>{console.log("rerender",e);const t=(0,r.useCallback)((()=>{e&&(o[e].disconnect(),delete o[e])}),[e]);return e?(o[e]||(o[e]=l().connect(`http://localhost:3095/ws-${e}`,{transports:["websocket"]})),[o[e],t]):[void 0,t]}},2867:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>H});var a=n(7753);const l=(0,a.Z)("div",{target:"e1uh5zr713"})({name:"tjo4qw",styles:"float:right"}),r=(0,a.Z)("header",{target:"e1uh5zr712"})({name:"fvf0bi",styles:"height:38px;background:#350d36;color:#ffffff;box-shadow:0 1px 0 0 rgba(255, 255, 255, 0.1);padding:5px;text-align:center"}),o=(0,a.Z)("img",{target:"e1uh5zr711"})({name:"1ly4jlu",styles:"width:28px;height:28px;position:absolute;top:5px;right:16px"}),i=(0,a.Z)("div",{target:"e1uh5zr710"})({name:"47px7v",styles:"display:flex;padding:20px;& img{display:flex;}&>div{display:flex;flex-direction:column;margin-left:10px;}& #profile-name{font-weight:bold;display:inline-flex;}& #profile-active{font-size:13px;display:inline-flex;}"}),s=(0,a.Z)("button",{target:"e1uh5zr79"})({name:"bl1q1k",styles:"border:none;width:100%;border-top:1px solid rgb(29, 28, 29);background:transparent;display:block;height:33px;padding:5px 20px 5px;outline:none;cursor:pointer"}),c=(0,a.Z)("div",{target:"e1uh5zr78"})({name:"36bnqj",styles:"display:flex;flex:1"}),p=(0,a.Z)("div",{target:"e1uh5zr77"})({name:"17lvj7e",styles:"width:65px;display:inline-flex;flex-direction:column;align-items:center;background:#3f0e40;border-top:1px solid rgb(82, 38, 83);border-right:1px solid rgb(82, 38, 83);vertical-align:top;text-align:center;padding:15px 0 0"}),d=(0,a.Z)("nav",{target:"e1uh5zr76"})({name:"2pkygn",styles:"width:260px;display:inline-flex;flex-direction:column;background:#3f0e40;color:rgb(188, 171, 188);vertical-align:top;& a{padding-left:36px;color:inherit;text-decoration:none;height:28px;line-height:28px;display:flex;align-items:center;&.selected{color:white;}}& .bold{color:white;font-weight:bold;}& .count{margin-left:auto;background:#cd2553;border-radius:16px;display:inline-block;font-size:12px;font-weight:700;height:18px;line-height:18px;padding:0 9px;color:white;margin-right:16px;}& h2{height:36px;line-height:36px;margin:0;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;font-size:15px;}"}),m=(0,a.Z)("button",{target:"e1uh5zr75"})({name:"1rmthq7",styles:"height:64px;line-height:64px;border:none;width:100%;text-align:left;border-top:1px solid rgb(82, 38, 83);border-bottom:1px solid rgb(82, 38, 83);font-weight:900;font-size:24px;background:transparent;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;padding:0;padding-left:16px;margin:0;color:white;cursor:pointer"}),u=(0,a.Z)("div",{target:"e1uh5zr74"})({name:"1146j5j",styles:"height:calc(100vh - 102px);overflow-y:auto"}),h=(0,a.Z)("div",{target:"e1uh5zr73"})({name:"192o1ir",styles:"padding:10px 0 0;& h2{padding-left:20px;}&>button{width:100%;height:28px;padding:4px;border:none;background:transparent;border-top:1px solid rgb(28, 29, 28);cursor:pointer;&:last-of-type{border-bottom:1px solid rgb(28, 29, 28);}}"}),g=(0,a.Z)("div",{target:"e1uh5zr72"})({name:"82a6rk",styles:"flex:1"}),b=(0,a.Z)("button",{target:"e1uh5zr71"})({name:"9tlmej",styles:"color:white;font-size:24px;display:inline-block;width:40px;height:40px;background:transparent;border:none;cursor:pointer"}),x=(0,a.Z)("button",{target:"e1uh5zr70"})({name:"wsqixl",styles:"display:inline-block;width:40px;height:40px;border-radius:10px;background:white;border:3px solid #3f0e40;margin-bottom:15px;font-size:18px;font-weight:700;color:black;cursor:pointer"});var k=n(6182),f=n.n(k),w=n(7294),v=n(8118),E=n(3564),C=n(9669),Z=n.n(C),_=n(3727),y=n(5977),z=n(2168);const M=(0,a.Z)("div",{target:"epfh1t1"})({name:"3nqusf",styles:"position:fixed;top:0;right:0;left:0;bottom:0;z-index:1000;&>div{position:absolute;display:inline-block;--saf-0:rgba(var(--sk_foreground_low, 29, 28, 29), 0.13);box-shadow:0 0 0 1px var(--saf-0),0 4px 12px 0 rgba(0, 0, 0, 0.12);background-color:rgba(var(--sk_foreground_min_solid, 248, 248, 248), 1);border-radius:6px;user-select:none;min-width:360px;z-index:512;max-height:calc(100vh - 20px);color:rgb(29, 28, 29);}"}),P=(0,a.Z)("button",{target:"epfh1t0"})({name:"19gmbxq",styles:"position:absolute;right:10px;top:6px;background:transparent;border:none;font-size:30px;cursor:pointer"}),S=({children:e,style:t,show:n,onCloseModal:a,closeButton:l})=>{const r=(0,w.useCallback)((e=>{e.stopPropagation()}),[]);return n?w.createElement(M,{onClick:a},w.createElement("div",{style:t,onClick:r},l&&w.createElement(P,{onClick:a},"×"),e)):null};S.defaultProps={closeButton:!0};const I=S;var $=n(5692),q=n(3046),j=n(8678),O=n(9249);const U=({show:e,onCloseModal:t,setShowCreateChannelModal:n})=>{const[a,l,r]=(0,j.Z)(""),{workspace:o,channel:i}=(0,y.UO)(),{data:s,error:c,revalidate:p}=(0,v.ZP)("/api/users",E.Z,{dedupingInterval:2e3}),{data:d,revalidate:m}=(0,v.ZP)(s?`/api/workspaces/${o}/channels`:null,E.Z),u=(0,w.useCallback)((e=>{e.preventDefault(),Z().post(`/api/workspaces/${o}/channels`,{name:a},{withCredentials:!0}).then((()=>{n(!1),m(),r("")})).catch((e=>{var t;console.dir(e),O.Am.error(null===(t=e.response)||void 0===t?void 0:t.data,{position:"bottom-center"})}))}),[a]);return w.createElement($.Z,{show:e,onCloseModal:t},w.createElement("form",{onSubmit:u},w.createElement(q.__,{id:"channel-label"},w.createElement("span",null,"채널"),w.createElement(q.II,{id:"channel",value:a,onChange:l})),w.createElement(q.zx,{type:"submit"},"생성하기")))},A=({show:e,onCloseModal:t,setShowInviteWorkspaceModal:n})=>{const{workspace:a}=(0,y.UO)(),[l,r,o]=(0,j.Z)(""),{data:i}=(0,v.ZP)("/api/users",E.Z),{revalidate:s}=(0,v.ZP)(i?`/api/workspaces/${a}/members`:null,E.Z),c=(0,w.useCallback)((e=>{e.preventDefault(),l&&l.trim()&&Z().post(`/api/workspaces/${a}/members`,{email:l}).then((e=>{s(),n(!1),o("")})).catch((e=>{var t;console.dir(e),O.Am.error(null===(t=e.response)||void 0===t?void 0:t.data,{position:"bottom-center"})}))}),[a,l]);return w.createElement($.Z,{show:e,onCloseModal:t},w.createElement("form",{onSubmit:c},w.createElement(q.__,{id:"member-label"},w.createElement("span",null,"이메일"),w.createElement(q.II,{id:"member",type:"email",value:l,onChange:r})),w.createElement(q.zx,{type:"submit"},"초대하기")))};var D=n(9250);const L=(0,a.Z)("button",{target:"elthdtx0"})("background:transparent;border:none;width:26px;height:26px;display:inline-flex;justify-content:center;align-items:center;color:white;margin-left:10px;cursor:pointer;",(({collapse:e})=>e&&"\n    & i {\n      transform: none;\n    }\n  "),";");var N=n(2951);const W=()=>{const{workspace:e}=(0,y.UO)(),{data:t,error:n,revalidate:a,mutate:l}=(0,v.ZP)("/api/users",E.Z,{dedupingInterval:2e3}),{data:r}=(0,v.ZP)(t?`/api/workspaces/${e}/members`:null,E.Z),[o]=(0,N.Z)(e),[i,s]=(0,w.useState)(!1),[c,p]=(0,w.useState)([]),d=(0,w.useCallback)((()=>{s((e=>!e))}),[]);return(0,w.useEffect)((()=>{console.log("DMList: workspace 바꼈다",e),p([])}),[e]),(0,w.useEffect)((()=>(null==o||o.on("onlineList",(e=>{p(e)})),()=>{null==o||o.off("onlineList")})),[o]),w.createElement(w.Fragment,null,w.createElement("h2",null,w.createElement(L,{collapse:i,onClick:d},w.createElement("i",{className:"c-icon p-channel_sidebar__section_heading_expand p-channel_sidebar__section_heading_expand--show_more_feature c-icon--caret-right c-icon--inherit c-icon--inline","data-qa":"channel-section-collapse","aria-hidden":"true"})),w.createElement("span",null,"Direct Messages")),w.createElement("div",null,!i&&(null==r?void 0:r.map((n=>{const a=c.includes(n.id);return w.createElement(_.OL,{key:n.id,activeClassName:"selected",to:`/workspace/${e}/dm/${n.id}`},w.createElement("i",{className:"c-icon p-channel_sidebar__presence_icon p-channel_sidebar__presence_icon--dim_enabled c-presence "+(a?"c-presence--active c-icon--presence-online":"c-icon--presence-offline"),"aria-hidden":"true","data-qa":"presence_indicator","data-qa-presence-self":"false","data-qa-presence-active":"false","data-qa-presence-dnd":"false"}),w.createElement("span",null,n.nickname),n.id===(null==t?void 0:t.id)&&w.createElement("span",null," (나)"))})))))},B=()=>{const{workspace:e}=(0,y.UO)(),{data:t,error:n,revalidate:a,mutate:l}=(0,v.ZP)("/api/users",E.Z,{dedupingInterval:2e3}),{data:r}=(0,v.ZP)(t?`/api/workspaces/${e}/channels`:null,E.Z),[o,i]=(0,w.useState)(!1),s=(0,w.useCallback)((()=>{i((e=>!e))}),[]);return w.createElement(w.Fragment,null,w.createElement("h2",null,w.createElement(L,{collapse:o,onClick:s},w.createElement("i",{className:"c-icon p-channel_sidebar__section_heading_expand p-channel_sidebar__section_heading_expand--show_more_feature c-icon--caret-right c-icon--inherit c-icon--inline","data-qa":"channel-section-collapse","aria-hidden":"true"})),w.createElement("span",null,"Channels")),w.createElement("div",null,!o&&(null==r?void 0:r.map((t=>w.createElement(_.OL,{key:t.name,activeClassName:"selected",to:`/workspace/${e}/channel/${t.name}`},w.createElement("span",null,"# ",t.name)))))))},F=(0,z.ZP)((()=>Promise.all([n.e(528),n.e(13),n.e(256)]).then(n.bind(n,5256)))),G=(0,z.ZP)((()=>Promise.all([n.e(528),n.e(13),n.e(94)]).then(n.bind(n,3094)))),H=()=>{const[e,t]=(0,w.useState)(!1),[n,a]=(0,w.useState)(!1),[k,C]=(0,w.useState)(!1),[z,M]=(0,w.useState)(!1),[P,S]=(0,w.useState)(!1),[L,H]=(0,w.useState)(!1),[J,K,Q]=(0,j.Z)(""),[R,T,V]=(0,j.Z)(""),{workspace:X}=(0,y.UO)(),{data:Y,error:ee,revalidate:te,mutate:ne}=(0,v.ZP)("/api/users",E.Z,{dedupingInterval:2e3}),{data:ae}=(0,v.ZP)(Y?`/api/workspaces/${X}/channels`:null,E.Z),{data:le}=(0,v.ZP)(Y?`/api/workspaces/${X}/members`:null,E.Z),[re,oe]=(0,N.Z)(X);(0,w.useEffect)((()=>{ae&&Y&&re&&(console.log(re),re.emit("login",{id:Y.id,channels:ae.map((e=>e.id))}))}),[re,ae,Y]),(0,w.useEffect)((()=>()=>{oe()}),[X,oe]);const ie=(0,w.useCallback)((()=>{Z().post("/api/users/logout",null,{withCredentials:!0}).then((()=>{ne(!1,!1)}))}),[]),se=(0,w.useCallback)((e=>{e.stopPropagation(),t(!1)}),[]),ce=(0,w.useCallback)((()=>{t((e=>!e))}),[]),pe=(0,w.useCallback)((()=>{a(!0)}),[]),de=(0,w.useCallback)((e=>{e.preventDefault(),J&&J.trim()&&R&&R.trim()&&Z().post("/api/workspaces",{workspace:J,url:R},{withCredentials:!0}).then((()=>{te(),a(!1),Q(""),V("")})).catch((e=>{var t;console.dir(e),O.Am.error(null===(t=e.response)||void 0===t?void 0:t.data,{position:"bottom-center"})}))}),[J,R]),me=(0,w.useCallback)((()=>{a(!1),H(!1),C(!1),M(!1)}),[]),ue=(0,w.useCallback)((()=>{S((e=>!e))}),[]),he=(0,w.useCallback)((()=>{H(!0)}),[]),ge=(0,w.useCallback)((()=>{C(!0)}),[]);return Y?w.createElement("div",null,w.createElement(r,null,w.createElement(l,null,w.createElement("span",{onClick:ce},w.createElement(o,{src:f().url(Y.email,{s:"28px",d:"retro"}),alt:Y.nickname}),e&&w.createElement(I,{style:{right:0,top:38},show:e,onCloseModal:se},w.createElement(i,null,w.createElement("img",{src:f().url(Y.nickname,{s:"36px",d:"retro"}),alt:Y.nickname}),w.createElement("div",null,w.createElement("span",{id:"profile-name"},Y.nickname),w.createElement("span",{id:"profile-active"},"Active"))),w.createElement(s,{onClick:ie},"로그아웃"))))),w.createElement(c,null,w.createElement(p,null,null==Y?void 0:Y.Workspaces.map((e=>w.createElement(_.rU,{key:e.id,to:"/workspace/123/channel/일반"},w.createElement(x,null,e.name.slice(0,1).toUpperCase())))),w.createElement(b,{onClick:pe},"+")),w.createElement(d,null,w.createElement(m,{onClick:ue},"Sleact"),w.createElement(u,null,w.createElement(I,{show:P,onCloseModal:ue,style:{top:95,left:80}},w.createElement(h,null,w.createElement("h2",null,"Sleact"),w.createElement("button",{onClick:ge},"워크스페이스에 사용자 초대"),w.createElement("button",{onClick:he},"채널 만들기"),w.createElement("button",{onClick:ie},"로그아웃"))),w.createElement(B,null),w.createElement(W,null))),w.createElement(g,null,w.createElement(y.rs,null,w.createElement(y.AW,{path:"/workspace/:workspace/channel/:channel",component:F}),w.createElement(y.AW,{path:"/workspace/:workspace/dm/:id",component:G})))),w.createElement($.Z,{show:n,onCloseModal:me},w.createElement("form",{onSubmit:de},w.createElement(q.__,{id:"workspace-label"},w.createElement("span",null,"워크스페이스 이름"),w.createElement(q.II,{id:"workspace",value:J,onChange:K})),w.createElement(q.__,{id:"workspace-url-label"},w.createElement("span",null,"워크스페이스 url"),w.createElement(q.II,{id:"workspace",value:R,onChange:T})),w.createElement(q.zx,{type:"submit"},"생성하기"))),w.createElement(U,{show:L,onCloseModal:me,setShowCreateChannelModal:H}),w.createElement(A,{show:k,onCloseModal:me,setShowInviteWorkspaceModal:C}),w.createElement(D.Z,{show:z,onCloseModal:me,setShowInviteChannelModal:M})):w.createElement(y.l_,{to:"/login"})}},7020:()=>{}}]);