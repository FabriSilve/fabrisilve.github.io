import{_ as F,a as P}from"./ActionButton.de910b7f.js";import{_ as S}from"./MainParagraph.c4dc61ba.js";import{_ as N}from"./LinkBtn.f0558ba5.js";import{o,c as v,w as a,p as e,q as R,s as C,t as w,b as c,u as p,e as n,f as m,h as I,I as M,a as $,v as g,F as f,r as k,x as B,m as L,y as D}from"./entry.6569cf05.js";import{_ as j}from"./SectionTitle.08a8f9e0.js";const A={class:"border-b-2 border-link_border hover:border-link_border_hover hover:text-link_text_hover transition-colors text-link"},T={__name:"InlineLink",props:{to:String},setup(_){return(s,t)=>{const i=C;return o(),v(i,{to:_.to},{default:a(()=>[e("span",A,[R(s.$slots,"default")])]),_:3},8,["to"])}}},H=""+new URL("profile.315a8960.jpg",import.meta.url).href,q={class:"flex flex-col gap-5"},E={class:"flex justify-center"},V=["src"],W=e("i",{className:"text-sm sm:text-lg md:text-2xl lg:text-3xl"},"joy",-1),z=w({__name:"TheHero",setup(_){return(s,t)=>{const i=F,r=S,u=N,d=T;return o(),c("div",q,[e("div",E,[e("img",{src:p(H),alt:"",class:"w-72 h-auto md:w-96 rounded-full"},null,8,V)]),n(i,null,{default:a(()=>[W,m("Full Stack Developer")]),_:1}),n(r,null,{default:a(()=>[m(" I'm Fabrizio Silvestri, a Full Stack Developer and Tech Leader. I specialised my skils in Web Development with NodeJS, NoSQL databases and RESTful APIs. I am also a fan of Javascript frameworks and I like relying on Docker and AWS Cloud. (I have some experience in Python too!) ")]),_:1}),n(r,null,{default:a(()=>[m(" I'm currently working full time as CTO for "),n(u,{link:"https://www.moank.se/",text:"Moank AB"}),m(", a cool heavy tech oriented bank based in Stockholm, Sweden. I'm open to learn new technologies and I'm always looking for new challenges. ")]),_:1}),n(r,null,{default:a(()=>[n(d,{to:"about"},{default:a(()=>[m("Read more...")]),_:1})]),_:1})])}}}),b=(_,s)=>{const{link:t,title:i,icon:r}=_;return I("a",{href:t,title:i,target:"_blank"},I(M,{icon:r,class:"text-p_text rounded-md hover:bg-border_sm p-2 transition-all",width:"50"}))},J={class:"flex justify-between items-center"},O={class:"flex gap-1"},G=w({__name:"TheSocials",setup(_){return(s,t)=>(o(),c("div",J,[e("div",O,[n(p(b),{title:"Github",link:"https://github.com/FabriSilve",icon:"ant-design:github-filled"}),n(p(b),{title:"LinkedIn",link:"https://www.linkedin.com/in/fabrisilve",icon:"ant-design:linkedin-filled"}),n(p(b),{title:"Instagram",link:"https://www.instagram.com/fabri.silve",icon:"ant-design:instagram-outlined"})]),n(p(P),{link:"mailto:fabri.silve.fs@gmail.com"},{default:a(()=>[m("Email Me")]),_:1})]))}}),Q={setup(){},props:["name","image","description","tech","link"]},U=["href"],K=["alt","src"],X={class:"flex flex-col justify-between gap-4 slg:gap-5"},Y={class:"font-theme_bold text-lg text-head_text slg:text-xl"},Z={class:"text-sm md:text-base"},ee={class:"flex gap-2"};function te(_,s,t,i,r,u){return o(),c("a",{href:t.link,target:"_blank",class:"flex flex-col w-full p-6 py-6 lg:p-6 lg:py-10 items-center gap-8 rounded-md bg-item_back hover:bg-item_hover_back transition-colors border-[1px] border-border_sm"},[e("img",{alt:t.name,src:t.image,class:"w-full object-cover rounded-md slg:h-48"},null,8,K),e("div",X,[e("span",Y,g(t.name),1),e("p",Z,g(t.description),1),e("div",ee,[(o(!0),c(f,null,k(t.tech,d=>(o(),c("div",{key:d,class:"grid select-none items-center whitespace-nowrap rounded-lg bg-white py-0.5 px-2 text-xs font-italic uppercase text-black"},[e("span",null,g(d),1)]))),128))])])],8,U)}const ne=$(Q,[["render",te]]),oe=e("p",null,"Here are some of the personal projects that I'm proud of.",-1),se={class:"grid grid-cols-1 slg:grid-cols-2 gap-7 sm:gap-6 pt-8 mx-auto sm:w-5/6 slg:w-full"},le=w({__name:"FeaturedProjects",setup(_){const{getFeaturedProjects:s}=B(),t=s;return(i,r)=>{const u=j,d=ne,x=L,y=T,l=S;return o(),c(f,null,[e("div",null,[n(x,{name:"section"},{default:a(()=>[n(u,null,{default:a(()=>[m("Featured Projects")]),_:1}),oe,e("div",se,[(o(!0),c(f,null,k(p(t),h=>(o(),v(d,{key:h.id,description:h.description,image:h.image,link:h.link,name:h.name,tech:h.tech},null,8,["description","image","link","name","tech"]))),128))])]),_:1})]),n(l,null,{default:a(()=>[n(y,{to:"projects"},{default:a(()=>[m("Read more...")]),_:1})]),_:1})],64)}}}),ae={setup(){},props:["name","link","review","role"]},ce={class:"text-sm leading-6"},ie={class:"relative group"},re=e("div",{class:"absolute rounded-lg opacity-100 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur"},null,-1),_e={class:"relative p-6 space-y-6 leading-none rounded-lg bg-item_back hover:bg-item_hover_back ring-1 ring-gray-900/5"},de={class:"flex items-center justify-between space-x-4"},me={class:"text-lg font-semibold text-white"},ue={class:"text-gray-500 text-md"},pe={class:"leading-normal text-gray-300 text-md"},he={class:"flex items-center justify-center space-x-2 mt-4"},ge=e("svg",{class:"text-yellow-500 w-4 h-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",stroke:"currentColor"},[e("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})],-1),fe=[ge];function xe(_,s,t,i,r,u){const d=b;return o(),c("li",ce,[e("div",ie,[re,e("div",_e,[e("div",de,[e("div",null,[e("h3",me,g(t.name),1),e("p",ue,g(t.role),1)]),n(d,{title:"LinkedIn",link:t.link,icon:"ant-design:linkedin-filled"},null,8,["link"])]),e("p",pe,g(t.review),1),e("div",he,[(o(),c(f,null,k(5,x=>e("div",null,fe)),64))])])])])}const ke=$(ae,[["render",xe]]),be=e("p",null,"Here's what others have to say about me.",-1),ve={class:"grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 lg:gap-8 mt-8"},we={class:"space-y-8"},ye={class:"hidden space-y-8 sm:block"},$e=w({__name:"Reviews",setup(_){const{getAllReviews:s}=D(),t=s.slice(0,Math.ceil(s.length/2)),i=s.slice(Math.ceil(s.length/2));return(r,u)=>{const d=j,x=ke,y=L;return o(),c("div",null,[n(y,{name:"section"},{default:a(()=>[n(d,null,{default:a(()=>[m("Words from Others")]),_:1}),be,e("div",ve,[e("ul",we,[(o(!0),c(f,null,k(p(t),l=>(o(),v(x,{key:l.id,review:l.review,name:l.name,link:l.link,role:l.role},null,8,["review","name","link","role"]))),128))]),e("ul",ye,[(o(!0),c(f,null,k(p(i),l=>(o(),v(x,{key:l.id,review:l.review,name:l.name,link:l.link,role:l.role},null,8,["review","name","link","role"]))),128))])])]),_:1})])}}}),Ie={},Se={class:"flex flex-col gap-8 lg:gap-16 mb-16"},Le=e("hr",{class:"bg-squgily bg-repeat border-0 h-[6px] opacity-25"},null,-1),je=e("hr",{class:"bg-squgily bg-repeat border-0 h-[6px] opacity-25"},null,-1);function Te(_,s){const t=z,i=G,r=le,u=$e;return o(),c("div",Se,[n(t),n(i),Le,n(r),je,n(u)])}const Me=$(Ie,[["render",Te]]);export{Me as default};
