(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[105],{24212:(e,t,r)=>{Promise.resolve().then(r.bind(r,82771)),Promise.resolve().then(r.bind(r,67790)),Promise.resolve().then(r.bind(r,36521)),Promise.resolve().then(r.bind(r,88207))},6750:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});var a=r(95155),i=r(25683),l=r(89229);function n(e){let{isOpen:t,children:r}=e;return(0,a.jsx)(i.N,{children:t&&(0,a.jsx)(l.P.div,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},className:" absolute bg-dark-700 l-0 rounded-md mt-2 w-fit py-2 z-20",children:r})})}},82771:(e,t,r)=>{"use strict";r.d(t,{default:()=>s});var a=r(95155),i=r(36390),l=r(89229);function n(e){let{name:t,amount:r,total:i,index:n}=e;return(0,a.jsxs)("div",{className:"grid grid-rows-[1fr,max-content] gap-2",children:[(0,a.jsx)("div",{className:"h-full w-10 m-auto bg-repeat bg-stripes rounded-full relative",children:(0,a.jsx)(l.P.div,{initial:{scaleY:0},animate:{scaleY:1},transition:{delay:n/20},className:"w-full absolute bg-purple-100 rounded-full bottom-0 cursor-pointer group",style:{height:"".concat(r/i*100,"%"),transformOrigin:"bottom center"},children:(0,a.jsx)("div",{className:"w-full h-full relative",children:(0,a.jsxs)("div",{className:"absolute z-10 w-max bg-dark-700 rounded-full top-[-45px] py-1 px-2 left-[50%] translate-x-[-50%] opacity-0 translate-y-[-10px] group-hover:opacity-100 group-hover:translate-y-[0px] transition-all duration-[250ms] ease-in-out",children:[(0,a.jsxs)("p",{className:"text-light-700 text-sm relative z-20",children:[(0,a.jsxs)("span",{className:"font-bold text-white",children:[r," "]}),"Tasks"]}),(0,a.jsx)("div",{className:"w-4 absolute aspect-square bg-purple-300 border-white bottom-[-25px] border-[1px] rounded-full left-[50%] translate-x-[-50%]"}),(0,a.jsx)("div",{className:"w-4 absolute aspect-square bg-dark-700 rotate-45 bottom-[-5px] left-[50%] translate-x-[-50%]"})]})})})}),(0,a.jsx)(l.P.p,{initial:{opacity:0,y:5},animate:{opacity:1,y:0},transition:{delay:n/20},className:"text-dark-500 uppercase text-sm lg:text-[1rem]",children:t})]})}function s(){let{tasks:e}=(0,i.Y)(),t=[];return["UX","UI","Development"].forEach(r=>{let a=0;e.forEach(e=>e.category==r?a++:null),t.push({name:r,amount:a})}),(0,a.jsxs)("div",{className:"p-4 md:p-8 bg-light-100 rounded-small grid grid-rows-[max-content,1fr] gap-4 text-dark-700 h-[250px] md:h-full",children:[(0,a.jsx)("p",{className:"font-bold text-[1rem] lg:text-xl",children:"Categories Overview"}),(0,a.jsx)("div",{className:"grid grid-cols-[repeat(3,max-content)] justify-center px-0 w-full text-center gap-4 sm:grid-cols-3 md:px-4 sm:justify-between sm:gap-0 ",children:t.map((t,r)=>(0,a.jsx)(n,{index:r,name:t.name,amount:t.amount,total:e.length},r))})]})}},67790:(e,t,r)=>{"use strict";r.d(t,{default:()=>c});var a=r(95155),i=r(36390),l=r(12115),n=r(94079);function s(e){let{data:t}=e;return(0,a.jsx)(n.fO,{data:t,margin:{top:10,right:10,bottom:10,left:10},tooltip:()=>null,enableArcLinkLabels:!1,enableArcLabels:!1,colors:["#7DFF9C","#BF98F2","#FF8D7D"],innerRadius:.7,padAngle:2,cornerRadius:3,activeOuterRadiusOffset:0,defs:[{id:"dots",type:"patternDots",background:"inherit",color:"rgba(255, 255, 255, 0.3)",size:4,padding:1,stagger:!0},{id:"lines1",type:"patternLines",background:"inherit",color:"rgba(255, 255, 255, 0.3)",rotation:-45,lineWidth:6,spacing:10},{id:"lines2",type:"patternLines",background:"inherit",color:"rgba(255, 255, 255, 0.3)",rotation:45,lineWidth:6,spacing:10}],fill:[{match:{id:"col1"},id:"lines1"},{match:{id:"col2"},id:"lines2"}]})}var o=r(89229);function d(e){let{children:t,index:r}=e;return(0,a.jsx)(o.P.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{delay:r/20},className:"grid grid-cols-[12px,1fr] gap-2 items-start",children:t})}function c(){let{projects:e,tasks:t}=(0,i.Y)(),[r,n]=(0,l.useState)(e[0]),c=[];r.columns.forEach(e=>{if("col3"!==e.id){let a=t.filter(t=>t.column_id===e.id&&t.project_id===r.id),i="col1"==e.id?"Not Started":e.name;c.push({id:e.id,label:i,value:a.length})}});let p=c[0].value+c[1].value+c[2].value,u=e=>(e/p*100).toFixed(0);return(0,a.jsxs)("div",{className:"p-4 md:p-8 bg-dark-900 rounded-small grid gap-2",children:[(0,a.jsx)("p",{className:"font-bold text-[1rem] lg:text-xl",children:"Projects Overview"}),(0,a.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-[max-content_1fr] lg:grid-cols-[2fr,1fr] gap-2 lg:gap-0",children:[(0,a.jsx)(o.P.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"w-[200px] sm:w-[300px] md:h-[140px] md:w-[130px] lg:h-[200px] lg:w-[200px] aspect-square self-center m-auto",children:(0,a.jsx)(s,{data:c})}),(0,a.jsxs)("div",{className:"flex flex-col sm:flex-row sm:justify-between md:flex-col justif>y-between self-center lg:self-start",children:[(0,a.jsxs)(d,{index:0,children:[(0,a.jsx)("div",{className:"rounded-full bg-purple-100 w-[12px] h-[12px] mt-[6px]"}),(0,a.jsxs)("p",{children:["In Progress",(0,a.jsx)("br",{}),(0,a.jsxs)("span",{className:"font-bold",children:[u(c[1].value),"%"]})]})]}),(0,a.jsxs)(d,{index:1,children:[(0,a.jsx)("div",{className:"rounded-full bg-salmon-100 w-[12px] h-[12px] mt-[6px]"}),(0,a.jsxs)("p",{children:["Completed",(0,a.jsx)("br",{}),(0,a.jsxs)("span",{className:"font-bold",children:[u(c[2].value),"%"]})]})]}),(0,a.jsxs)(d,{index:2,children:[(0,a.jsx)("div",{className:"rounded-full bg-green-100 w-[12px] h-[12px] mt-[6px]"}),(0,a.jsxs)("p",{children:["Not Started",(0,a.jsx)("br",{}),(0,a.jsxs)("span",{className:"font-bold",children:[u(c[0].value),"%"]})]})]})]})]})]})}},36521:(e,t,r)=>{"use strict";r.d(t,{default:()=>s});var a=r(95155),i=r(36390),l=r(89229);function n(e){let t,{column:r,index:n}=e,{tasks:s}=(0,i.Y)(),o=s.filter(e=>e.column_id===r.id),d=(o.length/s.length*100).toFixed(0);switch(r.id){case"col1":t="bg-green-100";break;case"col2":t="bg-purple-100";break;case"col3":t="bg-pink-100";break;case"col4":t="bg-salmon-100";break;default:t="bg-gray-100"}return(0,a.jsxs)(l.P.div,{initial:{opacity:.5,x:10},animate:{opacity:1,x:0},transition:{delay:n/40},className:"".concat(t," rounded-small px-8 py-4 text-dark-500 grid items-centerl w-full"),children:[(0,a.jsx)("h1",{className:"text-sm lg:text-[1rem] font-bold",children:r.name}),(0,a.jsxs)("div",{className:"flex justify-between items-end w-full",children:[(0,a.jsx)("p",{className:"text-4xl lg:text-5xl font-black",children:o.length}),(0,a.jsxs)("p",{className:"bg-dark-500 rounded-full text-light-100 px-4 py-1 text-sm font-bold",children:[d,"%"]})]})]})}function s(){var e;let{projects:t}=(0,i.Y)();return(0,a.jsx)("div",{className:"grid grid-cols-1 gap-4 h-fit max-w-full w-full sm:grid-cols-2 md:grid-cols-4 md:w-full ",children:null===(e=t[0])||void 0===e?void 0:e.columns.map((e,t)=>(0,a.jsx)(n,{column:e,index:t},e.id))})}},88207:(e,t,r)=>{"use strict";r.d(t,{default:()=>f});var a=r(95155),i=r(36390),l=r(12115),n=r(6750);function s(e){let{handleClick:t,activeProject:r}=e,{projects:s}=(0,i.Y)(),[o,d]=(0,l.useState)(!1);return(0,a.jsxs)("div",{className:"relative w-full",children:[(0,a.jsxs)("button",{className:"flex gap-4 items-center ".concat(s.length<2&&"cursor-default"," "),onClick:function(){s.length<2||d(!o)},children:[(0,a.jsxs)("p",{className:"font-bold md:text-[1rem] lg:text-xl",children:[r.name," "]}),s.length>1&&(0,a.jsx)("svg",{className:"".concat(o?"rotate-180":"rotate-0"," transition-all"),xmlns:"http://www.w3.org/2000/svg",width:"16",height:"9",viewBox:"0 0 16 9",fill:"none",children:(0,a.jsx)("path",{d:"M1 0.5L8 7.5L15 0.5",stroke:"white",strokeWidth:"2",strokeLinecap:"round"})})]}),(0,a.jsx)(n.A,{isOpen:o,children:s.map(e=>(0,a.jsx)("button",{className:"w-full text-left hover:bg-purple-300 hover:text-white px-3 py-2\n                                ".concat(e.id===r.id&&"text-purple-100"),onClick:()=>{var r;return r=e.id,void(d(!1),t(r))},value:e.id,children:e.name},e.id))})]})}let o=(0,l.createContext)(),d=e=>{let{children:t}=e,[r,i]=(0,l.useState)("Week"),[n,s]=(0,l.useState)(0),[d,c]=(0,l.useState)(p("Week"));function p(e){let t=[];if("Month"===e){let e=new Date,r=e.getMonth()+12*Math.ceil(-1*n/12)+n;t=function(e,t){let r=[],a=new Date(e,t,1);for(;a.getMonth()===t;)r.push(new Date(a)),a.setDate(a.getDate()+1);return r}(e.getFullYear()+Math.floor(n/12),r)}else{let r;"Week"===e?r=7:"Day"===e&&(r=1);let a=new Date,i=new Date(a);i.setDate(a.getDate()+n*r);for(let e=0;e<r;e++){let r=new Date(i);r.setDate(i.getDate()+e),t.push(r)}}return t}return(0,l.useEffect)(()=>{c(p(r))},[n]),(0,a.jsx)(o.Provider,{value:{timelineType:r,changeTimelineType:function(e){i(e),s(0),c(p(e))},timelineRange:d,decreaseCount:function(){s(e=>e-=1)},increaseCount:function(){s(e=>e+=1)}},children:t})},c=()=>(0,l.useContext)(o);function p(e){let{clickFn:t,rotate:r}=e;return(0,a.jsx)("button",{onClick:()=>t(),className:"".concat(r," border-2 border-white rounded-full w-[30px] aspect-square grid items-center justify-center\n                        hover:bg-purple-100/50 hover:border-purple-100/50 transition-all"),children:(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"9",viewBox:"0 0 16 9",fill:"none",children:(0,a.jsx)("path",{d:"M1 0.5L8 7.5L15 0.5",stroke:"white",strokeWidth:"2",strokeLinecap:"round"})})})}let u=["Day","Week","Month"];function m(){let{timelineType:e,changeTimelineType:t,timelineRange:r,increaseCount:i,decreaseCount:s}=c(),[o,d]=(0,l.useState)(!1),m="Day"===e?r[0].toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"}):r[0].toLocaleDateString("en-US",{month:"long",year:"numeric"});return(0,a.jsxs)("div",{className:"flex h-max items-center gap-8",children:[(0,a.jsxs)("div",{className:"flex gap-4 items-center",children:[(0,a.jsx)(p,{clickFn:s,rotate:"rotate-90"}),(0,a.jsx)("p",{className:"text-[1rem] lg:text-xl font-bold",children:m}),(0,a.jsx)(p,{clickFn:i,rotate:"rotate-[-90deg]"})]}),(0,a.jsxs)("div",{className:"relative w-40",children:[(0,a.jsxs)("button",{type:"button",onClick:()=>d(!o),className:"bg-purple-100 w-full font-bold text-light-100 px-4 py-2 rounded-md justify-self-end flex items-center justify-between gap-4 hover:bg-purple-300",children:[(0,a.jsx)("p",{children:e}),(0,a.jsx)("svg",{className:"".concat(o?"rotate-180":"rotate-0"," transition-all"),xmlns:"http://www.w3.org/2000/svg",width:"16",height:"9",viewBox:"0 0 16 9",fill:"none",children:(0,a.jsx)("path",{d:"M1 0.5L8 7.5L15 0.5",stroke:"white",strokeWidth:"2",strokeLinecap:"round"})})]}),(0,a.jsx)(n.A,{isOpen:o,children:u.map((r,i)=>(0,a.jsx)("button",{className:"w-full text-left hover:bg-purple-300 hover:text-white px-3 py-2 text-nowrap\n                                                ".concat(r===e&&"text-purple-100"),type:"button",onClick:()=>{t(r),d(!1)},children:r},i))})]})]})}var g=r(89229);function x(e){let t,{task:r,style:i,index:l}=e;switch(r.column_id){case"col1":t="bg-green-100";break;case"col2":t="bg-purple-100";break;case"col3":t="bg-pink-100";break;case"col4":t="bg-salmon-100";break;default:t="bg-gray-100"}return(0,a.jsx)(g.P.div,{className:"py-1",style:i,initial:{scaleX:0},animate:{scaleX:1},transition:{delay:l/20},children:(0,a.jsx)("div",{className:"h-[50px] rounded-lg ".concat(t," text-dark-700 flex items-center px-2 font-bold text-nowrap"),children:(0,a.jsx)("p",{className:"w-[calc(100%-.5rem)]  overflow-hidden ",children:r.name})})})}function h(e){let{activeProject:t}=e,{timelineRange:r,timelineType:l}=c(),{tasks:n}=(0,i.Y)(),s=r[0],o=r[r.length-1],d=n.filter(e=>{let r=new Date(e.starting_date),a=new Date(e.delivery_date);return e.project_id==t.id&&(r>=s&&r<=o||a>=s&&a<=o||r<=s&&a>=o)}).map(e=>{let t=new Date(e.starting_date),a=new Date(e.delivery_date),i=!1,n=1,s=1;return r.forEach((e,r)=>{t.getFullYear()!=e.getFullYear()||t.getMonth()!=e.getMonth()||t.getDate()!==e.getDate()||i||("Month"==l&&(n=r+2),"Week"==l&&(n=r+1),"Day"==l&&(n=r),i=!0),a.getFullYear()==e.getFullYear()&&a.getMonth()==e.getMonth()&&a.getDate()===e.getDate()&&("Week"==l&&(s=r+1),"Month"==l&&(s=r+2))}),n>=1&&1==s&&(s=r.length+1),console.log(n,s),{...e,gridColumnStart:n,gridColumnEnd:s}}),p={gridTemplateColumns:"repeat(".concat(r.length,", 1fr)")};return(0,a.jsxs)("div",{className:"w-full h-full grid grid-rows-[1.5rem,1fr]",children:[(0,a.jsx)("div",{className:"grid h-full",style:p,children:r.map((e,t)=>{let i="";return r.length<8&&r.length>1&&(i=e.toLocaleDateString("en-US",{weekday:"short"})),r.length>7&&(i=e.toLocaleDateString("en-US",{day:"numeric"})),(0,a.jsx)("p",{className:"w-full text-center text-light-700",children:i},t)})}),(0,a.jsx)("div",{className:"h-[200px] grid overflow-scroll scrollbar-none row-start-2 row-end col-start-1 col-end-2 relative z-10",style:p,children:d.map((e,t)=>{let r={gridColumn:"".concat(e.gridColumnStart,"/").concat(e.gridColumnEnd),gridRow:"".concat(t+1,"/").concat(t+2),transformOrigin:"bottom left"};return(0,a.jsx)(x,{style:r,task:e,index:t},e.id)})}),(0,a.jsx)("div",{className:"h-[200px] grid border-t-[1px] border-dark-500 row-start-2 row-end-3 col-start-1 col-end-2 ",style:p,children:r.map((e,t)=>(0,a.jsx)("div",{className:"relative before:absolute before:w-[1px] before:h-full before:bg-dark-500 before:content-['']"},t))})]})}function f(){let{projects:e}=(0,i.Y)(),[t,r]=(0,l.useState)(e[0]);return(0,a.jsx)(d,{children:(0,a.jsxs)("div",{className:"hidden md:grid p-8 bg-dark-900 rounded-small grid-rows-[max-content,1fr] gap-4",children:[(0,a.jsxs)("div",{className:"grid grid-cols-[1fr,max-content] gap-2",children:[(0,a.jsx)(s,{handleClick:function(t){let a=e.findIndex(e=>e.id===t);r(e[a])},activeProject:t}),(0,a.jsx)(m,{})]}),(0,a.jsx)(h,{activeProject:t})]})})}},36390:(e,t,r)=>{"use strict";r.d(t,{TaskProvider:()=>c,Y:()=>p});var a=r(95155),i=r(12115);let l=JSON.parse('[{"id":"proj1","name":"Project Alpha","description":"A project to build and optimize a new user management system.","columns":[{"id":"col1","name":"Backlog","tasks":[]},{"id":"col2","name":"In Progress","tasks":[]},{"id":"col3","name":"Pending","tasks":[]},{"id":"col4","name":"Completed","tasks":[]}]}]'),n=()=>l,s=JSON.parse('[{"id":"t1","name":"Design Landing Page","description":"Create a visually appealing landing page for the new feature.","priority":"high","category":"UX","starting_date":"2025-01-02","delivery_date":"2025-01-25","column_id":"col1","project_id":"proj1"},{"id":"t2","name":"Develop Login API","description":"Implement secure login functionality using OAuth 2.0.","priority":"medium","category":"Development","starting_date":"2025-01-02","delivery_date":"2025-01-25","column_id":"col2","project_id":"proj1"},{"id":"t3","name":"Create Onboarding Flow","description":"Design and prototype the user onboarding experience.","priority":"low","category":"UX","starting_date":"2025-01-15","delivery_date":"2025-02-10","column_id":"col1","project_id":"proj1"},{"id":"t4","name":"Style Dashboard","description":"Apply UI styles and interactions for the analytics dashboard.","priority":"medium","category":"UI","starting_date":"2025-01-22","delivery_date":"2025-01-25","column_id":"col2","project_id":"proj1"},{"id":"t5","name":"Fix Authentication Bug","description":"Resolve the issue where user tokens are expiring prematurely.","priority":"high","category":"Development","starting_date":"2025-01-18","delivery_date":"2025-01-25","column_id":"col3","project_id":"proj1"},{"id":"t6","name":"Design Profile Page","description":"Create a responsive design for user profile pages.","priority":"low","category":"UI","starting_date":"2025-01-28","delivery_date":"2025-01-22","column_id":"col1","project_id":"proj1"},{"id":"t7","name":"Build Notification Service","description":"Develop a microservice to handle user notifications.","priority":"high","category":"Development","starting_date":"2025-01-05","delivery_date":"2025-01-25","column_id":"col2","project_id":"proj1"},{"id":"t8","name":"Improve Checkout UX","description":"Redesign the checkout flow to reduce friction and improve conversions.","priority":"medium","category":"UX","starting_date":"2025-01-19","delivery_date":"2025-01-25","column_id":"col3","project_id":"proj1"},{"id":"t9","name":"Create Theme Switcher","description":"Add light/dark mode toggle for better usability.","priority":"low","category":"UI","starting_date":"2025-01-30","delivery_date":"2025-01-14","column_id":"col3","project_id":"proj1"},{"id":"t10","name":"Optimize Database Queries","description":"Improve the performance of database queries for the reports module.","priority":"high","category":"Development","starting_date":"2025-01-05","delivery_date":"2025-01-10","column_id":"col4","project_id":"proj1"}]'),o=()=>s,d=(0,i.createContext)(),c=e=>{let{children:t}=e,r=n(),l=o(),[s,c]=(0,i.useState)(r),[p,u]=(0,i.useState)(l);return(0,a.jsx)(d.Provider,{value:{projects:s,tasks:p,addTask:function(e){u(t=>[...t,e])},updateTask:function(e,t,r){u(a=>{let i=[...a],l=i.findIndex(t=>t.id===e);return -1!==l&&(i[l]={...i[l],...t}),r&&(i.splice(l,1),i.splice(0,0,{...t})),i})},switchTask:function(e,t,r){u(a=>{let i=[...a],l=i.find(t=>t.id===e),n=i.findIndex(t=>t.id===e);i.splice(n,1);let s=i.findIndex(e=>e.id===t);return"down"===r&&(s+=1),i.splice(s,0,{...l}),i})},addProject:function(e){c(t=>[...t,e])}},children:t})},p=()=>(0,i.useContext)(d)}},e=>{var t=t=>e(e.s=t);e.O(0,[229,133,441,517,358],()=>t(24212)),_N_E=e.O()}]);