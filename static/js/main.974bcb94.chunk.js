(this["webpackJsonptheng-dev"]=this["webpackJsonptheng-dev"]||[]).push([[0],{100:function(e,t,n){},101:function(e,t,n){"use strict";n.r(t);var i,s,a=n(0),c=n.n(a),o=n(59),r=n.n(o),l=(n(77),n(78),n(5)),h=(n(79),n(80),n(1)),j=function(e){var t=e.children;return Object(h.jsx)("div",{className:"outline-button",children:t})},d=function(e){return Object(h.jsx)("nav",{className:"navbar",children:Object(h.jsxs)("div",{className:"navbar-content",children:[Object(h.jsxs)("div",{className:"navbar-links",children:[Object(h.jsx)("div",{className:"navbar-link",children:"HOME"}),Object(h.jsx)("div",{className:"navbar-link",children:"ABOUT"}),Object(h.jsx)("div",{className:"navbar-link",children:"PORTFOLIO"}),Object(h.jsx)("div",{className:"navbar-link",children:"CONTACT"})]}),Object(h.jsx)("div",{children:Object(h.jsx)(j,{children:"Resume"})})]})})},u=n(23),b=n(44),x=(n(82),n(60)),p=n.n(x),m=n(64),v=n.n(m),O=["icon","link"],f=function(e){var t=e.icon,n=e.link,i=Object(b.a)(e,O);return Object(h.jsx)("a",{href:n,style:{color:"inherit"},target:"_blank",rel:"noreferrer",children:Object(h.jsx)("div",Object(u.a)(Object(u.a)({className:"social-icon"},i),{},{children:t}))})},y=function(e){var t=Object.assign({},e),n=Object(h.jsxs)("div",{className:"icons",children:[Object(h.jsx)(f,{icon:Object(h.jsx)(p.a,{className:"footer-icon"}),link:"https://www.linkedin.com/in/tommy-seng-heng/"}),Object(h.jsx)(f,{icon:Object(h.jsx)(v.a,{className:"footer-icon"}),link:"https://www.github.com/tomiyee"})]}),i=Object(h.jsxs)("div",{className:"footnote",children:["TOMMY HENG ",Object(h.jsx)("span",{style:{color:"var(--orange)"},children:"\xa92021"})]});return Object(h.jsxs)("footer",Object(u.a)(Object(u.a)({},t),{},{children:[n,i]}))},g=n(42),w=n(43),N=function(){function e(t,n){Object(g.a)(this,e),this.dimensions=2,this.x=t,this.y=n}return Object(w.a)(e,[{key:"add",value:function(t,n){return n?(this.x+=t.x,this.y+=t.y,this):new e(this.x+t.x,this.y+t.y)}},{key:"subtract",value:function(t,n){return n?(this.x-=t.x,this.y-=t.y,this):new e(this.x-t.x,this.y-t.y)}},{key:"distanceTo",value:function(e){return Math.sqrt(Math.pow(this.x-e.x,2)+Math.pow(this.y-e.y,2))}},{key:"equals",value:function(e){return this.x===e.x&&this.y===e.y}},{key:"copy",value:function(){return new e(this.x,this.y)}},{key:"randomize",value:function(e,t){return this.x=Math.random()*e,this.y=Math.random()*t,this}},{key:"getRelativeAngle",value:function(e){return(this.y>0?1:-1)*Math.acos(this.x/this.length())-(e.y>0?1:-1)*Math.acos(e.x/e.length())}},{key:"getAngle",value:function(e){return Math.acos(this.dot(e)/(this.length()*e.length()))}},{key:"scale",value:function(e){return this.x*=e,this.y*=e,this}},{key:"length",value:function(){return Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2))}},{key:"setLength",value:function(e){var t=Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2));this.x*=e/t,this.y*=e/t}},{key:"setMax",value:function(e){var t=Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2));t>e&&(this.x*=e/t,this.y*=e/t)}},{key:"dot",value:function(e){return this.x*e.x+this.y*e.y}},{key:"toString",value:function(){return"Vector2D <".concat(this.x,", ").concat(this.y,">")}}]),e}(),M=(n(87),.35),k=247,A=247,I=249,T=[],S=900,P=600,C=!1,B=0,D=0;function F(){var e,t,n,a,c;P=window.innerHeight,S=window.innerWidth,i.width=S,i.height=P,e=0,t=0,n=S,a=P,c="#2B2D42",s.fillStyle=c,s.fillRect(e,t,n,a);for(var o=0;o<T.length;o++)T[o].update(T),T[o].draw();window.requestAnimationFrame(F)}var E=function(){function e(t,n){Object(g.a)(this,e),this.position=new N(isNaN(t)?Math.random()*S:t,isNaN(n)?Math.random()*P:n);var i=2*Math.random()*Math.PI;this.velocity=new N(Math.cos(i),Math.sin(i)),this.acceleration=new N(0,0)}return Object(w.a)(e,[{key:"localFlock",value:function(e){for(var t=[],n=0;n<e.length;n++)Math.sqrt(Math.pow(this.position.x-e[n].position.x,2)+Math.pow(this.position.y-e[n].position.y,2))<40&&e[n]!==this&&t.push(e[n]);return t}},{key:"align",value:function(e){for(var t=new N(0,0),n=0;n<e.length;n++)t.add(e[n].velocity,!0);return t.setMax(2),t.scale(.3)}},{key:"cohesion",value:function(e){for(var t={x:0,y:0},n=0;n<e.length;n++)t.x+=e[n].position.x,t.y+=e[n].position.y;var i=Math.sqrt(Math.pow(t.x,2)+Math.pow(t.y,2)),s=new N(t.x/i-this.position.x,t.y/i-this.position.y);return s.setMax(2),s.scale(.04)}},{key:"repulsion",value:function(e){for(var t=new N(0,0),n=0;n<e.length;n++)t.x+=1/(this.position.x-e[n].position.x),t.y+=1/(this.position.y-e[n].position.y);return C&&Math.sqrt(Math.pow(this.position.x-B,2)+Math.pow(this.position.y-D,2))<160&&(t.x+=10/(this.position.x-B),t.y+=10/(this.position.y-D)),t.setMax(3),t.scale(1.8)}},{key:"draw",value:function(){var e=Math.atan2(this.velocity.y,this.velocity.x),t=Math.PI/5;if(s.fillStyle="rgba(".concat(k,",").concat(A,",").concat(I,",").concat(M,")"),C){var n=Math.sqrt(Math.pow(this.position.x-B,2)+Math.pow(this.position.y-D,2)),i=Math.pow(n,2)/(16*Math.pow(40,2))*-.65+1;s.fillStyle="rgba(".concat(k,",").concat(A,",").concat(I,",").concat(i>M?i:M,")")}s.beginPath(),s.moveTo(this.position.x+6*Math.cos(e),this.position.y+6*Math.sin(e)),s.lineTo(this.position.x+6*Math.cos(e+Math.PI-t),this.position.y+6*Math.sin(e+Math.PI-t)),s.lineTo(this.position.x+6*Math.cos(e+Math.PI+t),this.position.y+6*Math.sin(e+Math.PI+t)),s.fill()}},{key:"update",value:function(e){var t=this.localFlock(e);if(t.length>0){this.acceleration.scale(0);var n=this.align(t),i=this.cohesion(t),s=this.repulsion(t);this.acceleration.add(n,!0),this.acceleration.add(i,!0),this.acceleration.add(s,!0),this.velocity.add(this.acceleration,!0)}this.velocity.setLength(3),this.position.add(this.velocity,!0),this.position.x>S?this.position.x-=S:this.position.x<0&&(this.position.x+=S),this.position.y>P?this.position.y-=P:this.position.y<0&&(this.position.y+=P)}}]),e}(),L=function(){for(var e=Object(h.jsx)("canvas",{className:"banner-bg-canvas",width:"100%",height:"100%",onMouseEnter:function(){return C=!0},onMouseLeave:function(){return C=!1},onMouseMove:function(e){if(i){var t=i.getBoundingClientRect();B=e.clientX-t.left,D=e.clientY-t.top}}}),t=window.innerWidth*window.innerHeight/1e4*2,n=0;n<t;n++){var c=Math.random()*window.innerWidth,o=Math.random()*window.innerHeight,r=new E(c,o);T.push(r)}return Object(a.useEffect)((function(){i=document.getElementsByClassName("banner-bg-canvas")[0],s=i.getContext("2d"),window.requestAnimationFrame(F)}),[]),Object(h.jsxs)("section",{className:"banner",children:[e,Object(h.jsxs)("div",{className:"banner-text",children:["Hello, I'm ",Object(h.jsx)("span",{className:"highlight",children:"Tommy Heng"}),"."]})]})},q=(n(88),n(9)),H=n(119),R=n(122),V=n(121),J=(n(89),function(e){return Object(h.jsx)("div",{className:"flex",children:Object(h.jsx)("div",{className:"header-underline"})})}),W=(n(90),["children","value","index"]),z=function(e){var t=e.children,n=e.value,i=e.index,s=Object(b.a)(e,W);return Object(h.jsx)("div",Object(u.a)(Object(u.a)({role:"tabpanel",style:{display:n!==i?"none":"block"},id:"simple-tabpanel-".concat(i),"aria-labelledby":"simple-tab-".concat(i),className:"tabpanel"},s),{},{children:n===i&&Object(h.jsx)(V.a,{style:{textAlign:"left"},children:t})}))},U=function(e){var t=Object.assign({},e),n=Object(a.useState)(0),i=Object(q.a)(n,2),s=i[0],c=i[1];return Object(h.jsx)("section",Object(u.a)(Object(u.a)({className:"experience-section"},t),{},{children:Object(h.jsxs)("div",{className:"experience-content",children:[Object(h.jsx)("h1",{children:"Where I've Been"}),Object(h.jsx)(J,{}),Object(h.jsxs)("div",{className:"experience-viewer",children:[Object(h.jsxs)(H.a,{value:s,onChange:function(e,t){c(t)},"aria-label":"basic tabs example",orientation:"vertical",style:{width:"100%"},children:[Object(h.jsx)(R.a,{className:"experience-tab",label:"MIT App Inventor"}),Object(h.jsx)(R.a,{className:"experience-tab",label:"BBot Inc."}),Object(h.jsx)(R.a,{className:"experience-tab",label:"Stanford ASL"}),Object(h.jsx)(R.a,{className:"experience-tab",label:"Breakthrough SV"})]}),Object(h.jsxs)(z,{value:s,index:0,children:[Object(h.jsxs)("h3",{className:"experience-title",children:[Object(h.jsx)("span",{className:"color-navy",children:"Engineering Researcher"}),Object(h.jsx)("span",{className:"color-teal",children:" @ MIT App Inventor"})]}),Object(h.jsx)("p",{className:"experience-range",children:"September 2018 - Present"}),Object(h.jsxs)("ul",{className:"experience-description",children:[Object(h.jsx)("li",{children:"Design a Conversational AI Interface for the visual programming platform MIT App Inventor"}),Object(h.jsx)("li",{children:"Lead week-long workshops teaching 20+ local high school students computational thinking and conversational AI"}),Object(h.jsx)("li",{children:"Trained and hosted a text-generating LSTM neural network with Tensorflow on a node.js web server"}),Object(h.jsx)("li",{children:"Developed and pioneered a new curriculum for an abroad education initiative in Brazil"})]})]}),Object(h.jsxs)(z,{value:s,index:1,children:[Object(h.jsxs)("h3",{className:"experience-title",children:[Object(h.jsx)("span",{className:"color-navy",children:"Software Engineer Intern"}),Object(h.jsx)("span",{className:"color-teal",children:" @ BBot Inc."})]}),Object(h.jsx)("p",{className:"experience-range",children:"June - August 2021"}),Object(h.jsxs)("ul",{className:"experience-description",children:[Object(h.jsx)("li",{children:"Redesigned web pages facilitating customer financial transactions in a React Native framework for a fast-paced in-venue ordering start-up; successfully pushed to production"}),Object(h.jsx)("li",{children:"Developed a comprehensive front-end test suite with Cypress.io for performance-critical web pages"}),Object(h.jsx)("li",{children:"Incorporated customer feedback into product features to improve user experience"})]})]}),Object(h.jsxs)(z,{value:s,index:2,children:[Object(h.jsxs)("h3",{className:"experience-title",children:[Object(h.jsx)("span",{className:"color-navy",children:"Engineering Researcher"}),Object(h.jsx)("span",{className:"color-teal",children:" @ Stanford Autonomous Systems Lab"})]}),Object(h.jsx)("p",{className:"experience-range",children:"June - July 2017"}),Object(h.jsxs)("ul",{className:"experience-description",children:[Object(h.jsx)("li",{children:"Developed a time series forecasting model using an LSTM neural network for use in autonomous mobility simulations"}),Object(h.jsx)("li",{children:"Defined a custom loss function which heavily penalized over-estimation to optimize model performance"}),Object(h.jsx)("li",{children:"Implemented Dropout as a method of determining a probability distribution of the model\u2019s predictions"})]})]}),Object(h.jsxs)(z,{value:s,index:3,children:[Object(h.jsxs)("h3",{className:"experience-title",children:[Object(h.jsx)("span",{className:"color-navy",children:"Computer Science Teaching Assistant"}),Object(h.jsx)("span",{className:"color-teal",children:" @ Breakthrough SV"})]}),Object(h.jsx)("p",{className:"experience-range",children:"June 2018"}),Object(h.jsxs)("ul",{className:"experience-description",children:[Object(h.jsx)("li",{children:"Coached high school students on video game development in Unity"}),Object(h.jsx)("li",{children:"Tracked student outcome data and compiled reports for the on-site administrative team"})]})]})]})]})}))},_=n(45),G=(n(96),n(55)),Y=n.n(G),K=n(65),X=n.n(K),Q=n(67),Z=n.n(Q),$=n(66),ee=n.n($),te=n.p+"static/media/github.164d6380.svg",ne=(n(97),n(98)),ie=function(e){var t=e.projectData,n=t.title,i=t.desc,s=t.date,a=t.tech,c=t.links,o=new Map([["external",Object(h.jsx)(X.a,{})],["github",Object(h.jsx)("img",{src:te,alt:"git"})],["youtube",Object(h.jsx)(ee.a,{})]]),r=a.map((function(e){return Object(h.jsx)("li",{className:"project-tech-element",children:e})}));return Object(h.jsx)(_.VerticalTimelineElement,{className:"vertical-timeline-element--work",date:s,contentStyle:{textAlign:"left",borderTop:"4px solid var(--teal)"},iconStyle:{background:"var(--white)",boxShadow:"0 0 0 4px var(--teal), inset 0 2px 0 rgb(0 0 0 / 8%), 0 3px 0 4px rgb(0 0 0 / 5%)"},icon:Object(h.jsx)(Y.a,{}),children:Object(h.jsxs)("article",{className:"project-card",children:[Object(h.jsxs)("div",{className:"project-card-top",children:[Object(h.jsx)("div",{className:"folder-icon",children:Object(h.jsx)(Y.a,{})}),Object(h.jsx)("div",{className:"project-links",children:c.map((function(e){return Object(h.jsx)("a",{href:e[1],style:{color:"inherit"},target:"_blank",rel:"noreferrer",children:Object(h.jsx)("div",{className:"project-link",children:o.get(e[0])})})}))})]}),Object(h.jsx)("div",{className:"project-card-title",children:Object(h.jsx)("h2",{children:n})}),Object(h.jsx)("div",{className:"project-card-description",children:Object(h.jsx)("p",{children:i})}),Object(h.jsx)("div",{className:"project-card-bottom",children:Object(h.jsx)("ul",{className:"project-card-tech-list",children:r})})]})})},se=function(e){var t=Object(h.jsx)(_.VerticalTimelineElement,{icon:Object(h.jsx)(Z.a,{style:{fill:"var(--navy)"}}),iconStyle:{background:"var(--teal)",boxShadow:"0 0 0 4px var(--navy), inset 0 2px 0 rgb(0 0 0 / 8%), 0 3px 0 4px rgb(0 0 0 / 5%)"}}),n=ne.map((function(e,t){return Object(h.jsx)(ie,{projectData:e},t)}));return Object(h.jsxs)("section",{children:[Object(h.jsx)("br",{}),Object(h.jsx)("h1",{children:"Previous Projects"}),Object(h.jsx)(J,{}),Object(h.jsx)("div",{className:"projects-content",children:Object(h.jsxs)(_.VerticalTimeline,{lineColor:"var(--navy)",children:[n,t]})})]})},ae=n.p+"static/media/profile.a65adaae.jpg",ce=function(e){return Object(h.jsxs)("section",{className:"about-me-section flex col",children:[Object(h.jsx)("h1",{children:"About Me"}),Object(h.jsx)(J,{}),Object(h.jsxs)("div",{className:"about-me-content",children:[Object(h.jsxs)("div",{className:"about-me-description",children:[Object(h.jsx)("p",{children:"Hello! My name is Tommy Heng and I enjoy designing software with a positive community impact. My interest in web development started in 2011, where I made a Khan Academy knock-off tailored for my middle school."}),Object(h.jsx)("p",{children:"Most recently, my projects have ranged from full-stack development on a visual programming platform, to designing web applications for start-ups, to even leading workshops on Conversational AI for local high school students."})]}),Object(h.jsxs)("div",{className:"about-me-profile-container",children:[Object(h.jsx)("img",{src:ae,className:"profile-pic",alt:"it be me"}),Object(h.jsx)("div",{className:"about-me-profile-inner"})]})]})]})},oe=function(e){return Object(h.jsx)("div",{children:Object(h.jsxs)("main",{className:"home-content",children:[Object(h.jsx)(ce,{}),Object(h.jsx)(U,{}),Object(h.jsx)(se,{})]})})},re=(n(99),function(e){return Object(h.jsx)("section",{children:Object(h.jsx)("h1",{children:"Archives"})})}),le=(n(100),function(e){return Object(h.jsx)("h1",{children:"Page404"})});var he=function(){var e=["/","/home","/theng-dev"];return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(l.c,{children:e.map((function(e){return Object(h.jsx)(l.a,{exact:!0,path:e,element:Object(h.jsx)(L,{})})}))}),Object(h.jsx)(d,{}),Object(h.jsxs)(l.c,{children:[e.map((function(e){return Object(h.jsx)(l.a,{exact:!0,path:e,element:Object(h.jsx)(oe,{})})})),Object(h.jsx)(l.a,{exact:!0,path:"archives",element:Object(h.jsx)(re,{})}),Object(h.jsx)(l.a,{exact:!0,path:"*",element:Object(h.jsx)(le,{})})]}),Object(h.jsx)(y,{})]})},je=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,123)).then((function(t){var n=t.getCLS,i=t.getFID,s=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),i(e),s(e),a(e),c(e)}))},de=n(51);r.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(de.a,{children:Object(h.jsx)(he,{})})}),document.getElementById("root")),je()},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},82:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){},97:function(e,t,n){},98:function(e){e.exports=JSON.parse('[{"title":"MIT Conversational AI Interface","desc":"A visual programming interace for conversational agents like Amazon Alexa. A video demonstration is linked above.","date":"Fall 2018 - Fall 2021","tech":["GWT","AWS","Node.js"],"links":[["youtube","https://youtu.be/_D8v3H71074"]]},{"title":"Project Veritas","desc":"An web-application for public accountability of police brutality. Users submit reports and provide details on a map UI.","date":"Fall 2021","tech":["Vue.js","Node.js","MongoDB","RESTful API","Vuetify"],"links":[]},{"title":"Tetris AI Interface","desc":"A platform for testing and comparing the performance between different Tetris AI.","date":"Summer 2021","tech":["Python3","Tensorflow"],"links":[["github","https://github.com/tomiyee/tetris-python"]]},{"title":"Composer Similarity Ranker","desc":"A computational music theory project. Compares the chord progression in a song to the patterns of a known composer. A larger number is given if the song closely matches the composer\'s music style.","date":"Spring 2020","tech":["Python","Computational Music Theory","Data Science"],"links":[]},{"title":"Author AI","desc":"A text-generation AI hosted on a web server, which generates text in the style of different authors or book series like Dr. Seuss or Harry Potter.","date":"Fall 2018","tech":["Python3","Tensorflow","NLP","AI"],"links":[]}]')},99:function(e,t,n){}},[[101,1,2]]]);
//# sourceMappingURL=main.974bcb94.chunk.js.map