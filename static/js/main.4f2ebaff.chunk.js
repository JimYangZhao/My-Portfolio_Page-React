(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),l=a.n(c),i=(a(13),a(2)),o=a(3),s=a(5),m=a(4),u=a(1);function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=Object(u.a)(e);if(t){var r=Object(u.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(m.a)(this,a)}}var p=function(e){Object(s.a)(a,e);var t=f(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{id:"home"},r.a.createElement("nav",{id:"nav-wrap"},r.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),r.a.createElement("a",{className:"mobile-btn",href:"#",title:"Hide navigation"},"Hide navigation"),r.a.createElement("ul",{id:"nav",className:"nav"},r.a.createElement("li",{className:"current"},r.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Works")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#testimonials"},"Testimonials")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),r.a.createElement("div",{className:"row banner"},r.a.createElement("div",{className:"banner-text"},r.a.createElement("h1",{className:"responsive-headline"},"I am ",e.name,"."),r.a.createElement("h3",{style:{color:"#fff",fontFamily:"sans-serif "}},"I am a ",e.role,".",e.roleDescription),r.a.createElement("hr",null),r.a.createElement("ul",{className:"social"},e.socialLinks&&e.socialLinks.map(function(e){return r.a.createElement("li",{key:e.name},r.a.createElement("a",{href:e.url,target:"_blank"},r.a.createElement("i",{className:e.className})))})))),r.a.createElement("p",{className:"scrolldown"},r.a.createElement("a",{className:"smoothscroll",href:"#about"},r.a.createElement("i",{className:"icon-down-circle"})))))}}]),a}(n.Component);function h(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=Object(u.a)(e);if(t){var r=Object(u.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(m.a)(this,a)}}var d=function(e){Object(s.a)(a,e);var t=h(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return r.a.createElement("section",{id:"about"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"three columns"},r.a.createElement("img",{className:"profile-pic",src:"images/profilepic.jpg",alt:""})),r.a.createElement("div",{className:"nine columns main-col"},r.a.createElement("h2",null,"About Me"),r.a.createElement("p",null,e.aboutme),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"columns contact-details"},r.a.createElement("h2",null,"Contact Details"),r.a.createElement("p",{className:"address"},r.a.createElement("span",null,e.name),r.a.createElement("br",null),r.a.createElement("span",null,e.address),r.a.createElement("br",null),r.a.createElement("span",null,e.website)))))))}}]),a}(n.Component);function v(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=Object(u.a)(e);if(t){var r=Object(u.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(m.a)(this,a)}}var E=function(e){Object(s.a)(a,e);var t=v(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return r.a.createElement("section",{id:"resume"},r.a.createElement("div",{className:"row education"},r.a.createElement("div",{className:"three columns header-col"},r.a.createElement("h1",null,r.a.createElement("span",null,"Education"))),r.a.createElement("div",{className:"nine columns main-col"},e.education&&e.education.map(function(e){return r.a.createElement("div",{className:"row item"},r.a.createElement("div",{className:"twelve columns"},r.a.createElement("h3",null,e.UniversityName),r.a.createElement("p",{className:"info"},e.specialization,r.a.createElement("span",null,"\u2022")," ",r.a.createElement("em",{className:"date"},e.MonthOfPassing," ",e.YearOfPassing)),r.a.createElement("p",null,e.Achievements)))}))),r.a.createElement("div",{className:"row work"},r.a.createElement("div",{className:"three columns header-col"},r.a.createElement("h1",null,r.a.createElement("span",null,"Work"))),r.a.createElement("div",{className:"nine columns main-col"},e.work&&e.work.map(function(e){return r.a.createElement("div",{className:"row item"},r.a.createElement("div",{className:"twelve columns"},r.a.createElement("h3",null,e.CompanyName),r.a.createElement("p",{className:"info"},e.specialization,r.a.createElement("span",null,"\u2022")," ",r.a.createElement("em",{className:"date"},e.MonthOfLeaving," ",e.YearOfLeaving)),r.a.createElement("p",null,e.Achievements)))}))),r.a.createElement("div",{className:"row skill"},r.a.createElement("div",{className:"three columns header-col"},r.a.createElement("h1",null,r.a.createElement("span",null,"Skills"))),r.a.createElement("div",{className:"nine columns main-col"},r.a.createElement("p",null,e.skillsDescription),r.a.createElement("div",{className:"bars"},r.a.createElement("ul",{className:"skills"},e.skills&&e.skills.map(function(e){return r.a.createElement("li",null,r.a.createElement("span",{className:"bar-expand ".concat(e.skillname.toLowerCase())}),r.a.createElement("em",null,e.skillname))}))))))}}]),a}(n.Component);function y(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=Object(u.a)(e);if(t){var r=Object(u.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(m.a)(this,a)}}var g=function(e){Object(s.a)(a,e);var t=y(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return r.a.createElement("section",{id:"portfolio"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"twelve columns collapsed"},r.a.createElement("h1",null,"Check Out Some of My Works."),r.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"},e.portfolio&&e.portfolio.map(function(e){return r.a.createElement("div",{className:"columns portfolio-item"},r.a.createElement("div",{className:"item-wrap"},r.a.createElement("a",{href:"#modal-01"},r.a.createElement("img",{src:"".concat(e.imgurl),className:"item-img"}),r.a.createElement("div",{className:"overlay"},r.a.createElement("div",{className:"portfolio-item-meta"},r.a.createElement("h5",null,e.name),r.a.createElement("p",null,e.description))))))})))))}}]),a}(n.Component);function b(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=Object(u.a)(e);if(t){var r=Object(u.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(m.a)(this,a)}}var N=function(e){Object(s.a)(a,e);var t=b(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return r.a.createElement("section",{id:"testimonials"},r.a.createElement("div",{className:"text-container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"two columns header-col"},r.a.createElement("h1",null,r.a.createElement("span",null,"Client Testimonials"))),r.a.createElement("div",{className:"ten columns flex-container"},r.a.createElement("div",{className:"flexslider"},r.a.createElement("ul",{className:"slides"},e.testimonials&&e.testimonials.map(function(e){return r.a.createElement("li",null,r.a.createElement("blockquote",null,r.a.createElement("p",null,e.description),r.a.createElement("cite",null,e.name)))})))," ")," ")," "),"  ")}}]),a}(n.Component);function O(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=Object(u.a)(e);if(t){var r=Object(u.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(m.a)(this,a)}}var w=function(e){Object(s.a)(a,e);var t=O(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return r.a.createElement("section",{id:"contact"},r.a.createElement("div",{className:"row section-head"},r.a.createElement("div",{className:"ten columns"},r.a.createElement("p",{className:"lead"},"Feel free to contact me for any work or suggestions below"))),r.a.createElement("div",{className:"row"},r.a.createElement("aside",{className:"eigth columns footer-widgets"},r.a.createElement("div",{className:"widget"},r.a.createElement("h4",null,"Linked in :",e.linkedinId)))))}}]),a}(n.Component);function k(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=Object(u.a)(e);if(t){var r=Object(u.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(m.a)(this,a)}}var j=function(e){Object(s.a)(a,e);var t=k(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return r.a.createElement("footer",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"twelve columns"},r.a.createElement("ul",{className:"social-links"},e.socialLinks&&e.socialLinks.map(function(e){return r.a.createElement("li",null,r.a.createElement("a",{href:e.url},r.a.createElement("i",{className:e.className})))}))),r.a.createElement("div",{id:"go-top"},r.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},r.a.createElement("i",{className:"icon-up-open"})))))}}]),a}(n.Component),D={imagebaseurl:"https://JimYangZhao.github.io/",name:"Yang Zhao(Jim)",role:"Full Stack Engineer | Front End Specialist ",linkedinId:"https://www.linkedin.com/in/yang-zhao-11a75015b/",roleDescription:"Computer Science graduate with a demonstrated history of working in the technology industry. Skilled in Spring Boot, Node.js, React, DevOps technologies, and AWS. Strong advocate for TDD and CI&CD implementation. ",socialLinks:[{name:"linkedin",url:"https://www.linkedin.com/in/yang-zhao-11a75015b/",className:"fa fa-linkedin"},{name:"github",url:"https://github.com/JimYangZhao",className:"fa fa-github"}],aboutme:"Computer Science graduate with a demonstrated history of working in the technology industry. Skilled in Spring Boot, Node.js, React, DevOps technologies, and AWS. Strong advocate for TDD and CI&CD implementation.",address:"Canada, NL, St. John's, yangzhao264@gmail.com",education:[{UniversityName:"CA, Memorial University",specialization:"Computer Science",MonthOfPassing:"May",YearOfPassing:"2020",Achievements:"Bachelor of Science, Computer Science"}],work:[{CompanyName:"Heardgi Website Design",specialization:"Communicating with clients and translate client need into business requirements for feature development",MonthOfLeaving:"April",YearOfLeaving:"2016 to Present"},{CompanyName:"JAC",specialization:"Delivered high quality E-commerce web applications based on business requirement using WordPress",MonthOfLeaving:"Sept",YearOfLeaving:"2020 to Dec 2020"},{CompanyName:"NLCC Service Group Corp.",specialization:"Successfully led a full stack project to deliver a modern web application to clients of NLCC Service Group.",MonthOfLeaving:"Jan",YearOfLeaving:"2019 to Dec 2019"},{CompanyName:"FAW-VOLKSWAGEN",specialization:"Responsible for oversight of the IT infrastructure, provisioning, planning, installation and operation for FAW-VOLKSWAGEN IT Department.",MonthOfLeaving:"April",YearOfLeaving:"2016 to August 2016"},{CompanyName:"Memorial University",specialization:"Responsible for installation and maintenance of communication devices on campus.",MonthOfLeaving:"Dec.",YearOfLeaving:"2015 to Sept. of 2019"}],skillsDescription:"HTML5, CSS3, Bootstrap, JQuery, PHP. JAVA, Spring Boot, Node.js, React, DevOps technologies, and AWS. Strong advocate for TDD and CI&CD implementation. ",portfolio:[{name:"NL Bakery E-shop",description:"St. John\u2019s local bakery E-shop.",imgurl:"images/portfolio/WeChat-Screenshot_20200513213724-800x387.png"},{name:"Chinese community",description:"St. John\u2019s biggest Chinese community service/rental website.",imgurl:"images/portfolio/nlcc-800x387.png"},{name:"Chinese restaurant",description:"St. John\u2019s very popular Chinese restaurant.",imgurl:"images/portfolio/citylight-800x390.png"},{name:"Industry website",description:"China, Intelligent Power Technology Co.,Ltd., industry website.",imgurl:"images/portfolio/Gardermoen-800x394.png"}],testimonials:[{description:"The very important thing you should have is patience.",name:"Jack Ma"},{description:"If you get up in the morning and think the future is going to be better, it is a bright day. Otherwise, it\u2019s not.",name:"Elon Musk"}]};function R(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=Object(u.a)(e);if(t){var r=Object(u.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(m.a)(this,a)}}var C=function(e){Object(s.a)(a,e);var t=R(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(p,{resumeData:D}),r.a.createElement(d,{resumeData:D}),r.a.createElement(E,{resumeData:D}),r.a.createElement(g,{resumeData:D}),r.a.createElement(N,{resumeData:D}),r.a.createElement(w,{resumeData:D}),r.a.createElement(j,{resumeData:D}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){e.exports=a(15)}},[[8,2,1]]]);
//# sourceMappingURL=main.4f2ebaff.chunk.js.map