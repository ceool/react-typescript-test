(self.webpackChunkslack_react_ts=self.webpackChunkslack_react_ts||[]).push([[13],{2309:(e,t,a)=>{"use strict";a.d(t,{Z:()=>y});var n=a(7753),r=a(1753);const o=(0,n.Z)("div",{target:"e7828515"})({name:"ra6cyy",styles:"display:flex;width:100%;padding:20px;padding-top:0"}),i=(0,n.Z)("form",{target:"e7828514"})({name:"33ihw2",styles:"color:rgb(29, 28, 29);font-size:15px;width:100%;border-radius:4px;border:1px solid rgb(29, 28, 29)"}),l=(0,n.Z)(r.r,{target:"e7828513"})({name:"bka2jr",styles:"font-family:Slack-Lato,appleLogo,sans-serif;font-size:15px;padding:8px 9px;width:100%;& strong{background:skyblue;}& textarea{height:44px;padding:9px 10px!important;outline:none!important;border-radius:4px!important;resize:none!important;line-height:22px;border:none;}& ul{border:1px solid lightgray;max-height:200px;overflow-y:auto;padding:9px 10px;background:white;border-radius:4px;width:150px;}"}),s=(0,n.Z)("div",{target:"e7828512"})({name:"13ie2qx",styles:"position:relative;background:rgb(248, 248, 248);height:41px;display:flex;border-top:1px solid rgb(221, 221, 221);align-items:center;border-bottom-left-radius:4px;border-bottom-right-radius:4px"}),c=(0,n.Z)("button",{target:"e7828511"})({name:"xrrdm2",styles:"position:absolute;right:5px;top:5px"}),d=(0,n.Z)("button",{target:"e7828510"})("padding:4px 20px;background:transparent;border:none;display:flex;align-items:center;color:rgb(28, 29, 28);width:100%;& img{margin-right:5px;}",(({focus:e})=>e&&"\n    background: #1264a3;\n    color: white;\n  "),";");var p=a(3564),m=a(7294),u=a(9367),g=a.n(u),x=a(5977),h=a(8118),b=a(6182),f=a.n(b);const y=({chat:e,onSubmitForm:t,onChangeChat:a,placeholder:n})=>{const{workspace:u}=(0,x.UO)(),{data:b,error:y,revalidate:k,mutate:E}=(0,h.ZP)("/api/users",p.Z,{dedupingInterval:2e3}),{data:v}=(0,h.ZP)(b?`/api/workspaces/${u}/members`:null,p.Z),w=(0,m.useRef)(null);(0,m.useEffect)((()=>{w.current&&g()(w.current)}),[]);const _=(0,m.useCallback)((e=>{"Enter"===e.key&&(e.shiftKey||(e.preventDefault(),t(e)))}),[t]),Z=(0,m.useCallback)(((e,t,a,n,r)=>{if(v)return m.createElement(d,{focus:r},m.createElement("img",{src:f().url(v[n].email,{s:"20px",d:"retro"}),alt:v[n].nickname}),m.createElement("span",null,a))}),[v]);return m.createElement(o,null,m.createElement(i,{onSubmit:t},m.createElement(l,{id:"editor-chat",value:e,onChange:a,onKeyPress:_,placeholder:n,inputRef:w,allowSuggestionsAboveCursor:!0},m.createElement(r.p,{appendSpaceOnAdd:!0,trigger:"@",data:(null==v?void 0:v.map((e=>({id:e.id,display:e.nickname}))))||[],renderSuggestion:Z})),m.createElement(s,null,m.createElement(c,{className:"c-button-unstyled c-icon_button c-icon_button--light c-icon_button--size_medium c-texty_input__button c-texty_input__button--send"+(null!=e&&e.trim()?"":" c-texty_input__button--disabled"),"data-qa":"texty_send_button","aria-label":"Send message","data-sk":"tooltip_parent",type:"submit",disabled:!(null!=e&&e.trim())},m.createElement("i",{className:"c-icon c-icon--paperplane-filled","aria-hidden":"true"})))))}},2545:(e,t,a)=>{"use strict";a.d(t,{Z:()=>y});var n=a(7753);const r=(0,n.Z)("div",{target:"e13jx3bw0"})({name:"1gm3yh0",styles:"display:flex;padding:8px 20px;&:hover{background:#eee;}& .chat-img{display:flex;width:36px;margin-right:8px;& img{width:36px;height:36px;}}"});var o=a(7294),i=a(6182),l=a.n(i),s=a(7484),c=a.n(s),d=a(8817),p=a(3727),m=a(5977);const u=({data:e})=>{const{workspace:t}=(0,m.UO)(),a="Sender"in e?e.Sender:e.User,n=(0,o.useMemo)((()=>e.content.startsWith("uploads\\")?o.createElement("img",{src:`https://sleact.nodebird.com/${e.content}`,style:{maxHeight:200}}):(0,d.Z)({input:e.content,pattern:/@\[(.+?)]\((\d+?)\)|\n/g,decorator(e,a){const n=e.match(/@\[(.+?)]\((\d+?)\)/);return n?o.createElement(p.rU,{key:e+a,to:`/workspace/${t}/dm/${n[2]}`},"@",n[1]):o.createElement("br",{key:a})}})),[t,e.content]);return o.createElement(r,null,o.createElement("div",{className:"chat-img"},o.createElement("img",{src:l().url(a.email,{s:"36px",d:"retro"}),alt:a.nickname})),o.createElement("div",{className:"chat-text"},o.createElement("div",{className:"chat-user"},o.createElement("b",null,a.nickname),o.createElement("span",{style:{fontSize:12}},c()(e.createdAt).format(" A h:mm"))),o.createElement("p",null,n)))},g=(0,o.memo)(u),x=(0,n.Z)("div",{target:"emdi30u2"})({name:"1op36e9",styles:"width:100%;display:flex;flex:1"}),h=(0,n.Z)("section",{target:"emdi30u1"})({name:"10zp55f",styles:"margin-top:20px;border-top:1px solid #eee"}),b=(0,n.Z)("div",{target:"emdi30u0"})({name:"16cu5ak",styles:"display:flex;justify-content:center;flex:1;width:100%;position:sticky;top:14px;& button{font-weight:bold;font-size:13px;height:28px;line-height:27px;padding:0 16px;z-index:2;--saf-0:rgba(var(--sk_foreground_low, 29, 28, 29), 0.13);box-shadow:0 0 0 1px var(--saf-0),0 1px 3px 0 rgba(0, 0, 0, 0.08);border-radius:24px;position:relative;top:-13px;background:white;border:none;outline:none;}"});var f=a(1298);const y=(0,o.forwardRef)((({chatSections:e,setSize:t,isReachingEnd:a},n)=>{const r=(0,o.useCallback)((e=>{0!==e.scrollTop||a||(console.log("가장 위"),t((e=>e+1)).then((()=>{const t=null==n?void 0:n.current;t&&t.scrollTop(t.getScrollHeight()-e.scrollHeight)})))}),[n,a,t]);return o.createElement(x,null,o.createElement(f.$B,{autoHide:!0,ref:n,onScrollFrame:r},Object.entries(e).map((([e,t])=>o.createElement(h,{className:`section-${e}`,key:e},o.createElement(b,null,o.createElement("button",null,e)),t.map((e=>o.createElement(g,{key:e.id,data:e}))))))))}))},8667:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});var n=a(7484),r=a.n(n);function o(e){const t={};return e.forEach((e=>{const a=r()(e.createdAt).format("YYYY-MM-DD");Array.isArray(t[a])?t[a].push(e):t[a]=[e]})),t}}}]);