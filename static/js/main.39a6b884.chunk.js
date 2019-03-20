(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a(28)},23:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(14),l=a.n(i),o=a(6),c=a(7),s=a(10),m=a(8),g=a(11),u=a(31),d=a(30),p=(a(23),a(29)),h=function(){return r.a.createElement("header",{className:"flex-row justify-between items-baseline dn-nl"},r.a.createElement("div",{className:"heading-2"},"LIAM VOVK"),r.a.createElement("nav",{className:"main-nav flex-row"},r.a.createElement("div",{className:"nav"},r.a.createElement(p.a,{to:"/"},"ABOUT")),r.a.createElement("div",{className:"nav"},r.a.createElement(p.a,{to:"/work/"},"WORK")),r.a.createElement("div",{className:"nav"},r.a.createElement(p.a,{to:"/contact/"},"CONTACT"))))},v=function(){return r.a.createElement("div",{className:"about flex-row flex-column-nxl pt6"},r.a.createElement("img",{className:"medium-img large-image-nxl flip-img self-start self-center-nxl",src:"/taranaki-full.jpg",alt:"Mount Taranaki"}),r.a.createElement("div",{className:"flex-column pl7 pl0-nxl pt4-nxl"},r.a.createElement("div",{className:"heading-3 pb2"},"ABOUT"),r.a.createElement("div",{className:"paragraph-3"},"I am a developer for RBC Ventures with a degree in Mathematics and Engineering. My unique educational and professional background have afforded me the ability understand modern application architectures and complex data structures and algorithms. My desire for rigorous understanding has also made me highly effective at recognizing obscure bugs in code and making succint solutions.",r.a.createElement("br",null),r.a.createElement("br",null),"I have experience that ranges from stochastic control to implementing end to end user tracking to enable product, marketing, and design teams. I have also had the unique opportunity to work at a startup under RBC where internal system integrations with our cloud hosted apps are increasingly complex due to a greater need for security at the bank.")))},f=function(e){var t=e.match,a=b[t.params.project],n="#"!==a.next?"light-black":"light-grey",i="#"!==a.prev?"light-black":"light-grey";return r.a.createElement("div",{className:"flex-column"},r.a.createElement("div",{className:"flex-row flex-column-reverse-nl pt7 pt5-nxl"},w(a),r.a.createElement("div",{className:"flex-column pl8 pl0-nxl"},r.a.createElement("div",{className:"heading-5 bb-light-grey pb2"},a.title),r.a.createElement("div",{className:"paragraph-3 pt2 pb2"},a.description))),r.a.createElement("div",{className:"pt5 flex-row justify-between"},r.a.createElement("span",null,r.a.createElement(p.a,{className:"light-black",to:"/work/"},"Back to Work")),r.a.createElement("div",{className:"flex-row prev-next text-end"},r.a.createElement(p.a,{to:a.prev,className:i},"prev"),r.a.createElement("div",{className:"light-black ph0_2"},"/"),r.a.createElement(p.a,{to:a.next,className:n},"next"))))},w=function(e){return r.a.createElement("div",{className:"flex-row flex-wrap minw65"},e.img_src.map(function(t,a){return r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{className:"project small-img medium-img-nxl large-image-nl self-start self-center-nxl pr4 pb6 pr0-nl ".concat(e.img_css),src:t,key:a,alt:e.img_alt}),e.img_description&&r.a.createElement("div",{className:"paragraph-3 pb3 w100 text-center"},e.img_description[a]))}))},b={gighub:{title:"GigHub",description:"Implemented an iOS and Android application to help connect students with experiential learning opportunies. The application was developed with React Native, NodeJS, and MongoDB, hosted on AWS EC2 instances.",img_src:["/gighub-landing.png","/gighub-profile.png","/gighub-gigs.png"],img_css:"gighub-imgs",img_alt:"Gighub",next:"/work/ownr/",prev:"#"},ownr:{title:"OWNR",description:"As a software developer for RBC Ventures I work on the OWNR team. Here I develop full stack applications using NodeJS, React with Redux, and TypeScript, using Observables (rxjs) extensively to handle async operations and sequencing of actions. Outside of pure development my responsibilities includ developing a deep understanding of website build and delivery process in order to optimize user experience on slow networks, and the technical implementation of Google Analytics to conform with RBC security standards for RBC Ventures apps hosted in the cloud. My role with GA has given me the opportunity to work extensively with product, marketing, design, and internal RBC teams, giving me a well rounded view of what it takes to convert users into paying customers, as well as how to manage integrations between RBC Ventures cloud and internal RBC.",img_src:["/ownr-1.png","/ownr-2.png","/ownr-3.png"],img_css:"ownr-imgs",img_alt:"OWNR",prev:"/work/gighub/",next:"/work/automated_core_logging/"},automated_core_logging:{title:"Computer Vision",description:"Designed a computer vision algorithm for extracting critical angles from rock core using a combination of ELSD, k-means, and ODR. The final product reduced a 30 minute process to 30 seconds.",img_src:["/core-summary.png"],img_css:"core-imgs",img_alt:"Thesis",img_description:["Mapping core breaks onto a 3D plane"],prev:"/work/gighub/",next:"/work/personal_site/"},personal_site:{title:"liamvovk.com",description:"Developed by me for fun :)",img_src:["/taranaki-full.jpg"],img_css:"personal-imgs",img_alt:"Personal Website",prev:"/work/ownr/",next:"#"}},E=function(e){var t=e.match;return r.a.createElement("div",null,r.a.createElement(d.a,{path:"".concat(t.url,"/:project"),render:f}),r.a.createElement("div",{className:"work-tiles flex-row flex-wrap justify-between pt7 pt5-nl"},N(),r.a.createElement("div",{className:"tile-empty"})))},k=function(e){var t=e.src,a=e.alt,n=e.route,i=e.css;return r.a.createElement("div",{className:"tile flex-column justify-center pointer"},r.a.createElement("a",{href:n,className:"outline-0 flex-column h100 justify-center"},r.a.createElement("img",{className:"tile-img mw100 self-center ".concat(i),src:t,alt:a})))},x=[{src:"/gighub.jpg",alt:"GigHub",route:"/#/work/gighub",css:"gighub"},{src:"/ownr.svg",alt:"Ownr",route:"/#/work/ownr",css:"ownr"},{src:"/camera.svg",alt:"Camera Core Logging",route:"/#/work/automated_core_logging",css:"core"},{src:"/liamvovk.png",alt:"Liam Vovk Website",route:"/#/work/personal_site",css:"site"}],N=function(){return x.map(function(e,t){return r.a.createElement(k,{key:t,src:e.src,alt:e.alt,route:e.route,css:e.css})})},y=function(){return r.a.createElement("div",{className:"about flex-row flex-column-nxl pt5"},r.a.createElement("img",{className:"ml-img large-image-nxl self-start self-center-nxl",src:"/Toronto.png",alt:"Map of Toronto"}),r.a.createElement("div",{className:"flex-column pl7 pl0-nxl pt4-nxl"},r.a.createElement("div",{className:"heading-5 bb-light-grey pb2 mb6"},"Contact"),_()))},_=function(){return r.a.createElement("div",{className:"flex-row justify-between items-center"},O.map(function(e,t){return r.a.createElement("a",{href:e.img_href,className:"flex-column items-center contact-link",target:"_blank",rel:"noopener noreferrer",key:t},r.a.createElement("img",{className:"contact-img",src:e.img_src,alt:e.img_alt}))}))},O=[{img_src:"/github.svg",img_css:"github",img_href:"https://github.com/vovkman/",img_alt:"github"},{img_src:"/google-plus.svg",img_css:"google-plus",img_href:"mailto:liam.vovk@gmail.com",img_alt:"email"},{img_src:"/linkedin.svg",img_css:"linkedin",img_href:"https://www.linkedin.com/in/liamvovk/",img_alt:"LinkedIn"}],j=function(){var e=function(e){var t=e.target;if(t){var a=t.parentNode.querySelector(".dropdown-content");a||(a=t.parentNode.parentNode.parentNode),a.clientHeight?(a.style.height=0,a.style.marginBottom="0",a.style.paddingBottom="0",a.style.borderBottom="none"):(a.style.height="".concat(a.scrollHeight,"px"),a.style.width="100%",a.style.marginBottom="1rem",a.style.paddingBottom="1rem",a.style.borderBottom="1px solid rgba(153, 153, 153, 0.3)")}};return r.a.createElement("div",{className:"collapse_item flex-column items-center outline-0 dn-l",tabIndex:1},r.a.createElement("div",{className:"dropdown-content outline-0",tabIndex:2},r.a.createElement("nav",{className:"main-nav flex-column items-center"},r.a.createElement("div",{className:"nav",onClick:e},r.a.createElement(p.a,{to:"/"},"ABOUT")),r.a.createElement("div",{className:"nav",onClick:e},r.a.createElement(p.a,{to:"/work/"},"WORK")),r.a.createElement("div",{className:"nav",onClick:e},r.a.createElement(p.a,{to:"/contact/"},"CONTACT")))),r.a.createElement("div",{className:"outline-0",onClick:e},"MENU"),r.a.createElement("div",{className:"heading-2 pt4"},"LIAM VOVK"))},C=a(32),B=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.location.pathname!==e.location.pathname&&window.scrollTo(0,0)}},{key:"render",value:function(){return this.props.children}}]),t}(n.Component),R=Object(C.a)(B),T=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(u.a,null,r.a.createElement(R,null,r.a.createElement("div",{className:"App"},r.a.createElement(h,null),r.a.createElement(j,null),r.a.createElement(d.a,{path:"/",exact:!0,render:v}),r.a.createElement(d.a,{path:"/work/",render:E}),r.a.createElement(d.a,{path:"/contact/",render:y}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,2,1]]]);
//# sourceMappingURL=main.39a6b884.chunk.js.map