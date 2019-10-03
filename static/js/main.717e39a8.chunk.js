(window.webpackJsonpprofile=window.webpackJsonpprofile||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),i=a.n(o),l=(a(14),a(1)),s=a(2),c=a(4),u=a(3),h=a(5),m=a(8),p=a.n(m),g=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",null,"Lungisa Nduna"),r.a.createElement("img",{className:"ProfilePic",src:p.a,alt:"Lungisa's face"}),r.a.createElement("p",null,"This is my profile page standing in as my online resume."),r.a.createElement("div",{className:"photoCredit"},r.a.createElement("a",{className:"photoLink",href:"https://unsplash.com/@_louisreed?utm_medium=referral&utm_campaign=photographer-credit&utm_content=creditBadge",target:"_blank",rel:"noopener noreferrer",title:"Download free do whatever you want high-resolution photos from Louis Reed"},r.a.createElement("span",{className:"photoLink_span1"},r.a.createElement("svg",{className:"photoLink_svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},r.a.createElement("title",null,"unsplash-logo"),r.a.createElement("path",{d:"M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"}))),r.a.createElement("span",{className:"photoLink_span2"},"photo by Louis Reed"))))}}]),t}(n.Component),d=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container",id:"AboutMeDiv"},r.a.createElement("p",null,"I am a software developer that attended ",r.a.createElement("a",{href:"https://www.wethinkcode.co.za/",target:"_blank"},"WeThinkCode")," and currently works at Britehouse."),r.a.createElement("p",null,"My plan is to become a Solution Architect and am upskilling in accordance with my ",r.a.createElement("a",{href:"#getGrowthPlan"},"growth plan")),r.a.createElement("p",null,"I enjoy problem solving, playing both sports and games (computer and board), as well as biking"))}}]),t}(n.Component),f=(a(15),function e(t){var a=this;Object(l.a)(this,e),this.formatRawData=function(e){var t=[];return e.forEach((function(e){e.logoSourceUrl=a.getLogoSource(e.name),e.has_pages&&(e.pagesLink=a.getPagesLink(e.name)),e.language="JavaScript"===e.language?["JS"]:[e.language],t.push(a.specialConciderations(e))})),t},this.specialConciderations=function(e){return"digital-cards"===e.name&&(e.language=["HTML"]),"profile"===e.name&&(e.language.push("React"),e.has_pages=!1),e},this.getLogoSource=function(e){return"https://github.com/LungisaNduna/".concat(e,"/blob/master/logo.png?raw=true")},this.getPagesLink=function(e){return"lungisanduna/github.io/".concat(e,"/")},this.filterHighlightProjects=function(e){var t=[];return a.projects.forEach((function(a){e.includes(a.name)&&t.push(a)})),t},this.returnProjectList=function(){return a.projects},this.returnHighlightProjectList=function(e){return a.filterHighlightProjects(e)},this.projects=this.formatRawData(t)}),v=Object(n.lazy)((function(){return a.e(3).then(a.bind(null,17))})),b=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={githubProjects:null,isReady:!1},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.github.com/users/LungisaNduna/repos").then((function(e){return e.json()})).then((function(e){return new f(e)})).then((function(t){var a=t.returnHighlightProjectList(["profile","digital-cards","push_swap","UnityFundamentals","filler"]);e.setState({githubProjects:a}),e.setState({isReady:!0})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"container",id:"GithubProjContainer"},r.a.createElement("h1",null,"Some Projects I've Done"),r.a.createElement("div",{id:"GithubProjSection"},this.state.isReady&&this.state.githubProjects.map((function(e){return r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",null,"Loading Project")},r.a.createElement(v,{projInfo:e}))}))),r.a.createElement("a",{className:"photoLink",href:"https://unsplash.com/@mxhpics?utm_medium=referral&utm_campaign=photographer-credit&utm_content=creditBadge",target:"_blank",rel:"noopener noreferrer",title:"Download free do whatever you want high-resolution photos from Maxime Horlaville"},r.a.createElement("span",{className:"photolink_span1"},r.a.createElement("svg",{className:"photoLink_svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},r.a.createElement("title",null,"unsplash-logo"),r.a.createElement("path",{d:"M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"}))),r.a.createElement("span",{className:"photoLink_span2"},"photo by Maxime Horlaville")))}}]),t}(n.Component);var w=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(g,null),r.a.createElement(d,null),r.a.createElement(b,null))};i.a.render(r.a.createElement(w,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a.p+"static/media/LungisaProfile.a5424aec.jpg"},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.717e39a8.chunk.js.map