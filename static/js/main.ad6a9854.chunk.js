(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{12:function(e,t,a){},19:function(e,t,a){e.exports=a(29)},24:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),i=a(15),s=a.n(i),r=(a(24),a(3)),o=a(4),c=a(6),m=a(5),d=a(7),u=(a(12),function(e){function t(){var e,a;Object(r.a)(this,t);for(var l=arguments.length,n=new Array(l),i=0;i<l;i++)n[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={imageSelected:0,sectionVisible:!1},a.trackScrolling=function(){var e=document.getElementById("about");a.isSection(e)&&(console.log("is about"),a.setState({sectionVisible:!0}),document.removeEventListener("scroll",a.trackScrolling))},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"isSection",value:function(e){return e.getBoundingClientRect().top<window.innerHeight}},{key:"componentDidMount",value:function(){document.addEventListener("scroll",this.trackScrolling)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("scroll",this.trackScrolling)}},{key:"handleMouseOver",value:function(e){this.setState({imageSelected:1}),console.log("over")}},{key:"handleMouseOut",value:function(){this.setState({imageSelected:0}),console.log("out")}},{key:"render",value:function(){var e=this,t=["/me/me1.jpeg","/me/me2.jpeg"];return n.a.createElement("section",{id:"about",className:this.state.sectionVisible?"animated fadeInLeftBig ":"section-pre-loaded"},n.a.createElement("div",null,n.a.createElement("div",{className:"section-header",style:{marginTop:"50px"}},n.a.createElement("h1",null,"About Me"),n.a.createElement("div",{style:{height:"2px",width:"50px",backgroundColor:"black"}})),n.a.createElement("div",{className:"d-none d-md-block"},n.a.createElement("div",{className:"about"},n.a.createElement("div",{className:"about-section",style:{backgroundImage:"url(".concat(t[this.state.imageSelected],")"),backgroundSize:"cover"},onMouseEnter:function(){return e.handleMouseOver()},onMouseLeave:function(){return e.handleMouseOut()}},n.a.createElement("div",{className:"bio-text"},n.a.createElement("h2",null," Who am I ? "),n.a.createElement("div",null,"I am a front-end developer with a passion for creating intuitive and dynamic user experiences. A tinkerer and a problem solver; I find fulfilment in building creative solutions to problems."))),n.a.createElement("div",{className:"about-section"},n.a.createElement("div",{className:"skills-main-bar"},n.a.createElement("div",{className:"skills",style:{width:"90%"}},n.a.createElement("div",{className:"skill-text"},"React Native"),n.a.createElement("img",{src:"/skills/react.png",alt:"logo",className:"skill-image"}))),n.a.createElement("div",{className:"skills-main-bar"},n.a.createElement("div",{className:"skills",style:{width:"90%"}},n.a.createElement("div",{className:"skill-text"},"Swift"),n.a.createElement("img",{src:"/skills/swift.png",alt:"logo",className:"skill-image"}))),n.a.createElement("div",{className:"skills-main-bar"},n.a.createElement("div",{className:"skills",style:{width:"80%"}},n.a.createElement("img",{src:"/skills/react.png",alt:"logo",className:"skill-image"}),n.a.createElement("div",{className:"skill-text"},"React"))),n.a.createElement("div",{className:"skills-main-bar"},n.a.createElement("div",{className:"skills",style:{width:"80%"}},n.a.createElement("img",{src:"/skills/js.png",alt:"logo",className:"skill-image"}),n.a.createElement("div",{className:"skill-text"},"Javascript"))),n.a.createElement("div",{className:"skills-main-bar"},n.a.createElement("div",{className:"skills",style:{width:"70%"}},n.a.createElement("img",{src:"/skills/css.png",alt:"logo",className:"skill-image"}),n.a.createElement("div",{className:"skill-text"},"CSS"))),n.a.createElement("div",{className:"skills-main-bar"},n.a.createElement("div",{className:"skills",style:{width:"60%"}},n.a.createElement("img",{src:"/skills/react.png",alt:"logo",className:"skill-image"}),n.a.createElement("div",{className:"skill-text"},"React Redux"))),n.a.createElement("div",{className:"skills-main-bar"},n.a.createElement("div",{className:"skills",style:{width:"60%"}},n.a.createElement("img",{src:"/skills/dart.png",alt:"logo",className:"skill-image"}),n.a.createElement("div",{className:"skill-text"},"Flutter (Dart)"))),n.a.createElement("div",{className:"skills-main-bar"},n.a.createElement("div",{className:"skills",style:{width:"60%"}},n.a.createElement("img",{src:"/skills/html.png",alt:"logo",className:"skill-image"}),n.a.createElement("div",{className:"skill-text"},"HTML"))),n.a.createElement("div",{className:"skills-main-bar"},n.a.createElement("div",{className:"skills",style:{width:"50%"}},n.a.createElement("img",{src:"/skills/nodejs.png",alt:"logo",className:"skill-image"}),n.a.createElement("div",{className:"skill-text"},"Node.js"))),n.a.createElement("div",{className:"skills-main-bar"},n.a.createElement("div",{className:"skills",style:{width:"50%"}},n.a.createElement("img",{src:"/skills/python.png",alt:"logo",className:"skill-image"}),n.a.createElement("div",{className:"skill-text"},"Python")))))),n.a.createElement("div",{className:"d-md-none"},n.a.createElement("div",{className:"mobile"},n.a.createElement("div",{className:"mobile-column",style:{backgroundImage:"url(".concat(t[1],")"),backgroundSize:"cover",height:"80vh",borderRadius:"10px"}},n.a.createElement("div",{className:"bio-text"},n.a.createElement("h2",null," Who am I ? "),n.a.createElement("div",null,"I am a front-end developer with a passion for creating intuitive and dynamic user experiences. A tinkerer and a problem solver; I find fulfilment in building creative solutions to problems."))),n.a.createElement("div",{className:"mobile-column",style:{marginTop:"30px"}},n.a.createElement("div",{className:"skills-main-bar-mobile"},n.a.createElement("div",{className:"skills",style:{width:"90%"}},n.a.createElement("img",{src:"/skills/react.png",alt:"logo",className:"skill-image"}),n.a.createElement("div",{className:"skill-text"},"React Native"))),n.a.createElement("div",{className:"skills-main-bar-mobile"},n.a.createElement("div",{className:"skills",style:{width:"90%"}},n.a.createElement("img",{src:"/skills/swift.png",alt:"logo",className:"skill-image"}),n.a.createElement("div",{className:"skill-text"},"Swift"))),n.a.createElement("div",{className:"skills-main-bar-mobile"},n.a.createElement("div",{className:"skills",style:{width:"80%"}},n.a.createElement("img",{src:"/skills/react.png",alt:"logo",className:"skill-image"}),n.a.createElement("div",{className:"skill-text"},"React"))),n.a.createElement("div",{className:"skills-main-bar-mobile"},n.a.createElement("div",{className:"skills",style:{width:"80%"}},n.a.createElement("img",{src:"/skills/js.png",alt:"logo",className:"skill-image"}),n.a.createElement("div",{className:"skill-text"},"Javascript"))),n.a.createElement("div",{className:"skills-main-bar-mobile"},n.a.createElement("div",{className:"skills",style:{width:"70%"}},n.a.createElement("img",{src:"/skills/css.png",alt:"logo",className:"skill-image"}),n.a.createElement("div",{className:"skill-text"},"CSS"))),n.a.createElement("div",{className:"skills-main-bar-mobile"},n.a.createElement("div",{className:"skills",style:{width:"60%"}},n.a.createElement("img",{src:"/skills/react.png",alt:"logo",className:"skill-image"}),n.a.createElement("div",{className:"skill-text"},"React Redux"))),n.a.createElement("div",{className:"skills-main-bar-mobile"},n.a.createElement("div",{className:"skills",style:{width:"60%"}},n.a.createElement("img",{src:"/skills/dart.png",alt:"logo",className:"skill-image"}),n.a.createElement("div",{className:"skill-text"},"Flutter (Dart) "))),n.a.createElement("div",{className:"skills-main-bar-mobile"},n.a.createElement("div",{className:"skills",style:{width:"60%"}},n.a.createElement("img",{src:"/skills/html.png",alt:"logo",className:"skill-image"}),n.a.createElement("div",{className:"skill-text"},"HTML"))),n.a.createElement("div",{className:"skills-main-bar-mobile"},n.a.createElement("div",{className:"skills",style:{width:"50%"}},n.a.createElement("img",{src:"/skills/nodejs.png",alt:"logo",className:"skill-image"}),n.a.createElement("div",{className:"skill-text"},"Node.js"))),n.a.createElement("div",{className:"skills-main-bar-mobile"},n.a.createElement("div",{className:"skills",style:{width:"50%"}},n.a.createElement("img",{src:"/skills/python.png",alt:"logo",className:"skill-image"}),n.a.createElement("div",{className:"skill-text"},"Python"))))))))}}]),t}(n.a.Component)),p=function(e){function t(){var e,a;Object(r.a)(this,t);for(var l=arguments.length,n=new Array(l),i=0;i<l;i++)n[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={sectionVisible:!1},a.trackScrolling=function(){var e=document.getElementById("articles");a.isSection(e)&&(console.log("is article"),a.setState({sectionVisible:!0}),document.removeEventListener("scroll",a.trackScrolling))},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"isSection",value:function(e){return e.getBoundingClientRect().top<window.innerHeight}},{key:"componentDidMount",value:function(){document.addEventListener("scroll",this.trackScrolling)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("scroll",this.trackScrolling)}},{key:"render",value:function(){return n.a.createElement("section",{id:"articles",className:this.state.sectionVisible?"animated fadeInLeftBig":"section-pre-loaded"},n.a.createElement("div",null,n.a.createElement("div",{className:"section-header"},n.a.createElement("h1",null,"Articles"),n.a.createElement("div",{style:{height:"2px",width:"50px",backgroundColor:"black"}})),n.a.createElement("div",{style:{width:"100%",minHeight:"60vh",display:"flex",flexDirection:"row",justifyContent:"space-evenly",flexWrap:"wrap"}},n.a.createElement("blockquote",{className:"embedly-card"},n.a.createElement("h4",null,n.a.createElement("a",{href:"https://medium.com/synced-to-tech-blog/implementing-pinch-to-zoom-in-react-native-8a291ca29ac1"},"Implementing Pinch to Zoom in React Native")),n.a.createElement("p",null,"React native is very versatile and widely used framework, frankly speaking, it is the best in class for creating cross platform applications. So, I was a bit disappointed to discover that React Native doesn't come with a simple pinch to zoom component included in the box.")),n.a.createElement("blockquote",{className:"embedly-card"},n.a.createElement("h4",null,n.a.createElement("a",{href:"https://blog.synced.to/Linking-React-Native-to-native-code/"},"Linking React Native to native code")),n.a.createElement("p",null,"Linking native code to React Native, piece of cake, right? After all it's in the name. Wrong! I found it to be an unnecessarily complex and obscured process.")))))}}]),t}(n.a.Component),g=a(16),h=a(30),v=a(31),E=a(32),f=a(33),y=a(34),b=a(17),x=function(e){function t(){var e,a;Object(r.a)(this,t);for(var l=arguments.length,n=new Array(l),i=0;i<l;i++)n[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={name:"",email:"",subject:"",message:"",sectionVisible:!1},a.trackScrolling=function(){var e=document.getElementById("contact");a.isSection(e)&&(console.log("contact"),a.setState({sectionVisible:!0}),document.removeEventListener("scroll",a.trackScrolling))},a.resetForm=function(){a.setState({name:"",email:"",subject:"",message:"Thanks for getting in touch!"})},a.handleChange=function(e,t){a.setState(Object(g.a)({},e,t.target.value))},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"isSection",value:function(e){return e.getBoundingClientRect().top<window.innerHeight}},{key:"componentDidMount",value:function(){document.addEventListener("scroll",this.trackScrolling)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("scroll",this.trackScrolling)}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a=this.state,l={from_name:a.email,subject:a.subject,message_html:a.message};b.send("gmail","template_OwfPvRnL",l,"user_AK8OgfEKUgSJA3TBuwbDg").then((function(e){console.log(e.text),"OK"===e.text&&t.resetForm()})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return n.a.createElement("section",{id:"contact",className:this.state.sectionVisible?"animated fadeInRightBig":"section-pre-loaded"},n.a.createElement("div",{className:"section-header"},n.a.createElement("h1",null,"Get In Touch"),n.a.createElement("div",{style:{height:"2px",width:"50px",backgroundColor:"black"}})),n.a.createElement(h.a,{onSubmit:this.handleSubmit.bind(this)},n.a.createElement(v.a,{controlId:"formBasicEmail"},n.a.createElement(E.a,{className:"text-muted"},"Email address"),n.a.createElement(f.a,{type:"email",name:"email",value:this.state.email,className:"text-primary",onChange:this.handleChange.bind(this,"email"),placeholder:"Enter email"})),n.a.createElement(v.a,{controlId:"formBasicName"},n.a.createElement(E.a,{className:"text-muted"},"Name"),n.a.createElement(f.a,{type:"text",name:"name",value:this.state.name,className:"text-primary",onChange:this.handleChange.bind(this,"name"),placeholder:"Name"})),n.a.createElement(v.a,{controlId:"formBasicSubject"},n.a.createElement(E.a,{className:"text-muted"},"Subject"),n.a.createElement(f.a,{type:"text",name:"subject",className:"text-primary",value:this.state.subject,onChange:this.handleChange.bind(this,"subject"),placeholder:"Subject"})),n.a.createElement(v.a,{controlId:"formBasicMessage"},n.a.createElement(E.a,{className:"text-muted"},"Message"),n.a.createElement(f.a,{type:"textarea",name:"message",className:"text-primary",value:this.state.message,onChange:this.handleChange.bind(this,"message")})),n.a.createElement(y.a,{variant:"primary",type:"submit",style:{marginBottom:"20px",color:"#32FBA4"}},"Submit")))}}]),t}(n.a.Component),k=function(e){function t(){var e,a;Object(r.a)(this,t);for(var l=arguments.length,n=new Array(l),i=0;i<l;i++)n[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).scrollTo=function(){var e=document.getElementById("about");window.scrollTo({top:e.getBoundingClientRect().top,behavior:"smooth"})},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement("header",{id:"home",className:"App-header"},n.a.createElement("div",null,n.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},n.a.createElement("h1",{className:"animated wobble delay-1s"},"Hello,"),n.a.createElement("div",{className:"animated fadeIn delay-1s",style:{marginLeft:"10px",display:"flex",flexDirection:"row"}},n.a.createElement("h1",null,"I'm"),n.a.createElement("span",{style:{marginLeft:"8px",color:"#6853f6",display:"flex"}},n.a.createElement("h1",null,"Sayo Williams.")))),n.a.createElement("div",{className:"animated fadeIn delay-2s slow"},n.a.createElement("h1",null,"I build things with _code."))),n.a.createElement("div",{className:"animated fadeIn delay-2s slower",onClick:this.scrollTo,style:{marginTop:"40px"}},n.a.createElement("button",{className:"header-button"},"View my work")))}}]),t}(n.a.Component),w=function(e){function t(){var e,a;Object(r.a)(this,t);for(var l=arguments.length,n=new Array(l),i=0;i<l;i++)n[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={infoDisplay:0,sectionVisible:!1},a.trackScrolling=function(){var e=document.getElementById("projects");a.isSection(e)&&(console.log("is project"),a.setState({sectionVisible:!0}),document.removeEventListener("scroll",a.trackScrolling))},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"isSection",value:function(e){return e.getBoundingClientRect().top<window.innerHeight}},{key:"componentDidMount",value:function(){document.addEventListener("scroll",this.trackScrolling)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("scroll",this.trackScrolling)}},{key:"handleMouseOver",value:function(e){this.setState({infoDisplay:e}),console.log("over")}},{key:"handleMouseOut",value:function(){this.setState({infoDisplay:0}),console.log("out")}},{key:"render",value:function(){var e=this,t="I designed and built an all-inclusive camera library, based on react-native-camera. This is an upcoming main feature of the Synced application.",a="I designed and built a user reaction component, with the aim of increasing user engagement. This is an upcoming feature within the Synced application.";return n.a.createElement("section",{id:"projects",className:this.state.sectionVisible?"animated fadeInRightBig":"section-pre-loaded"},n.a.createElement("div",{style:{minHeight:"70vh",display:"flex",flexDirection:"column"},className:"d-none d-sm-block"},n.a.createElement("div",{className:"section-header"},n.a.createElement("h1",null,"Projects"),n.a.createElement("div",{style:{height:"2px",width:"50px",backgroundColor:"black"}})),n.a.createElement("div",{style:{marginBottom:"20px",marginTop:"20px"}},n.a.createElement("h3",null,"Apps"),n.a.createElement("div",{style:{marginTop:"20px",marginBottom:"20px"},onMouseEnter:function(){return e.handleMouseOver(1)},onMouseLeave:function(){return e.handleMouseOut()}},n.a.createElement("div",{style:{position:"relative"}},n.a.createElement("div",{style:{display:"flex",flexDirection:"row",position:"relative",flexWrap:"wrap",justifyContent:"center"}},n.a.createElement("img",{src:"/projects/platter/0.jpg",alt:"logo",style:{width:"25%",borderTopLeftRadius:"5px",borderBottomLeftRadius:"5px",maxHeight:"80vh"}}),n.a.createElement("img",{src:"/projects/platter/3.jpg",alt:"logo3",style:{width:"25%",maxHeight:"80vh"}}),n.a.createElement("img",{src:"/projects/platter/2.jpg",alt:"logo2",style:{width:"25%",maxHeight:"80vh"}}),n.a.createElement("img",{src:"/projects/platter/4.jpg",alt:"logo4",style:{width:"25%",borderTopRightRadius:"5px",borderBottomRightRadius:"5px",maxHeight:"80vh"}})),n.a.createElement("div",{style:{display:1===this.state.infoDisplay?"flex":"none",position:"absolute",left:0,top:0,backgroundColor:"rgba(0,0,0,0.5)",height:"100%",width:"100%",justifyContent:"center",alignItems:"center",borderRadius:"5px"}},n.a.createElement("div",{style:{display:"flex",flexDirection:"column",margin:"10px",justifyContent:"space-evenly",color:"white",alignItems:"center",height:"100%"}},n.a.createElement("div",null,n.a.createElement("h3",null,"Swift (iOS) / Dart (Android)"),n.a.createElement("h2",null,"Platter - Food Recipes")),n.a.createElement("a",{href:"http://theplatterapp.com/",style:{color:"#32FBA4"}},n.a.createElement("div",null,"Learn More")))))),n.a.createElement("div",{style:{},onMouseEnter:function(){return e.handleMouseOver(2)},onMouseLeave:function(){return e.handleMouseOut()}},n.a.createElement("div",{style:{position:"relative"}},n.a.createElement("div",{style:{display:"flex",flexDirection:"row",position:"relative",flexWrap:"wrap",justifyContent:"center"}},n.a.createElement("img",{src:"/projects/tightup/ionic 1.png",alt:"logo",style:{width:"25%",borderTopLeftRadius:"5px",borderBottomLeftRadius:"5px",maxHeight:"50vh"}}),n.a.createElement("img",{src:"/projects/tightup/ionic 2.png",alt:"logo",style:{width:"25%",maxHeight:"50vh"}}),n.a.createElement("img",{src:"/projects/tightup/versa 1.png",alt:"logo",style:{width:"25%",maxHeight:"50vh"}}),n.a.createElement("img",{src:"/projects/tightup/versa 2.png",alt:"logo",style:{width:"25%",borderTopRightRadius:"5px",borderBottomRightRadius:"5px",maxHeight:"50vh"}})),n.a.createElement("div",{style:{display:2===this.state.infoDisplay?"flex":"none",position:"absolute",left:0,top:0,backgroundColor:"rgba(0,0,0,0.5)",height:"100%",width:"100%",justifyContent:"center",alignItems:"center",borderRadius:"5px"}},n.a.createElement("div",{style:{display:"flex",flexDirection:"column",margin:"10px",justifyContent:"space-evenly",color:"white",alignItems:"center",height:"100%"}},n.a.createElement("div",null,n.a.createElement("h3",null," JavaScript / CSS / SVG "),n.a.createElement("h2",null,"Tight Up - Kegel Trainer ")),n.a.createElement("a",{href:"https://gallery.fitbit.com/details/a4758ffa-d763-41ea-bd57-f187f290efdf",style:{color:"#32FBA4"}},n.a.createElement("div",null,"Learn More"))))))),n.a.createElement("div",{style:{marginBottom:"20px",marginTop:"20px"}},n.a.createElement("h3",null,"Gallery"),n.a.createElement("div",{style:{display:"flex",flexDirection:"row",marginBottom:"20px",marginTop:"20px",justifyContent:"center",width:"100%",flexWrap:"wrap"}},n.a.createElement("div",{style:{width:"33%",minWidth:"300px",flexGrow:1,marginBottom:"20px"},onMouseEnter:function(){return e.handleMouseOver(3)},onMouseLeave:function(){return e.handleMouseOut()}},n.a.createElement("div",{style:{position:"relative",width:"100%"}},n.a.createElement("div",{style:{backgroundImage:"url(".concat("/projects/features/images/cam.jpg",")"),backgroundSize:"cover",width:"100%",height:"300px",position:"relative",borderTopLeftRadius:"5px",borderBottomLeftRadius:"5px"}}),n.a.createElement("div",{style:{display:3===this.state.infoDisplay?"flex":"none",position:"absolute",left:0,top:0,backgroundColor:"rgba(0,0,0,0.5)",height:"100%",width:"100%",justifyContent:"center",alignItems:"center",borderTopLeftRadius:"5px",borderBottomLeftRadius:"5px"}},n.a.createElement("div",{style:{display:"flex",flexDirection:"column",margin:"10px",justifyContent:"space-evenly",color:"white",alignItems:"center"}},n.a.createElement("h4",null," React Native "),n.a.createElement("h3",null,"Camera Library"),n.a.createElement("div",null,t),n.a.createElement("a",{href:"https://www.npmjs.com/package/react-native-synced-cam",style:{color:"#32FBA4",margin:"5px"}},n.a.createElement("div",null,"Learn More")),n.a.createElement(y.a,{onClick:function(){return e.props.toggleGallery(!0,"cam","web")},style:{marginTop:"5px",color:"#32FBA4"}}," Preview "))))),n.a.createElement("div",{style:{width:"33%",minWidth:"300px",flexGrow:1,marginBottom:"20px"},onMouseEnter:function(){return e.handleMouseOver(4)},onMouseLeave:function(){return e.handleMouseOut()}},n.a.createElement("div",{style:{position:"relative",width:"100%"}},n.a.createElement("div",{style:{backgroundImage:"url(".concat("/projects/features/images/reactions.jpg",")"),backgroundSize:"cover",width:"100%",height:"300px",borderTopRightRadius:"5px",borderBottomRightRadius:"5px"}}),n.a.createElement("div",{style:{display:4===this.state.infoDisplay?"flex":"none",position:"absolute",left:0,top:0,backgroundColor:"rgba(0,0,0,0.5)",height:"100%",width:"100%",justifyContent:"center",alignItems:"center",borderTopRightRadius:"5px",borderBottomRightRadius:"5px"}},n.a.createElement("div",{style:{display:"flex",flexDirection:"column",margin:"10px",justifyContent:"space-evenly",color:"white",alignItems:"center"}},n.a.createElement("h4",null," React Native "),n.a.createElement("h3",null,"Reaction Component"),n.a.createElement("div",null,a),n.a.createElement(y.a,{onClick:function(){return e.props.toggleGallery(!0,"reactions","web")},style:{marginTop:"5px",color:"#32FBA4"}}," Preview ")))))))),n.a.createElement("div",{className:"d-sm-none"},n.a.createElement("div",{className:"section-header",style:{marginTop:"50px"}},n.a.createElement("h1",null,"Projects"),n.a.createElement("div",{style:{height:"2px",width:"50px",backgroundColor:"black"}})),n.a.createElement("div",{style:{marginBottom:"20px",marginTop:"20px"}},n.a.createElement("h3",null,"Apps"),n.a.createElement("div",{style:{marginTop:"20px",marginBottom:"20px"},onClick:function(){return e.handleMouseOver(1)}},n.a.createElement("div",{style:{position:"relative"}},n.a.createElement("div",{style:{display:"flex",flexDirection:"row",position:"relative",justifyContent:"center"}},n.a.createElement("img",{src:"/projects/platter/0.jpg",alt:"logo",style:{width:"50%",maxHeight:"50vh",borderTopLeftRadius:"5px",borderBottomLeftRadius:"5px"}}),n.a.createElement("img",{src:"/projects/platter/3.jpg",alt:"logo3",style:{width:"50%",maxHeight:"50vh",borderTopRightRadius:"5px",borderBottomRightRadius:"5px"}})),n.a.createElement("div",{style:{display:1===this.state.infoDisplay?"flex":"none",position:"absolute",left:0,top:0,backgroundColor:"rgba(0,0,0,0.5)",height:"100%",width:"100%",justifyContent:"center",alignItems:"center",borderRadius:"5px"}},n.a.createElement("div",{style:{display:"flex",flexDirection:"column",margin:"10px",justifyContent:"space-evenly",color:"white",alignItems:"center",height:"100%"}},n.a.createElement("div",null,n.a.createElement("h3",null,"Swift (iOS) / Dart (Android) "),n.a.createElement("h2",null,"Platter - Food Recipes")),n.a.createElement("a",{href:"http://theplatterapp.com/",style:{color:"#32FBA4"}},n.a.createElement("div",null,"Learn More")))))),n.a.createElement("div",{style:{},onClick:function(){return e.handleMouseOver(2)}},n.a.createElement("div",{style:{position:"relative"}},n.a.createElement("div",{style:{display:"flex",flexDirection:"row",position:"relative",flexWrap:"wrap",justifyContent:"center"}},n.a.createElement("img",{src:"/projects/tightup/ionic 2.png",alt:"logo",style:{width:"50%",maxHeight:"35vh",borderTopLeftRadius:"5px",borderBottomLeftRadius:"5px"}}),n.a.createElement("img",{src:"/projects/tightup/versa 2.png",alt:"logo",style:{width:"50%",maxHeight:"35vh",borderTopRightRadius:"5px",borderBottomRightRadius:"5px"}})),n.a.createElement("div",{style:{display:2===this.state.infoDisplay?"flex":"none",position:"absolute",left:0,top:0,backgroundColor:"rgba(0,0,0,0.5)",height:"100%",width:"100%",justifyContent:"center",alignItems:"center",borderRadius:"5px"}},n.a.createElement("div",{style:{display:"flex",flexDirection:"column",margin:"10px",justifyContent:"space-evenly",color:"white",alignItems:"center",height:"100%"}},n.a.createElement("div",null,n.a.createElement("h3",null," JavaScript / CSS / SVG "),n.a.createElement("h2",null,"Tight Up - Kegel Trainer ")),n.a.createElement("a",{href:"https://gallery.fitbit.com/details/a4758ffa-d763-41ea-bd57-f187f290efdf",style:{color:"#32FBA4"}},n.a.createElement("div",null,"Learn More"))))))),n.a.createElement("div",{style:{marginBottom:"20px",marginTop:"20px",display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}},n.a.createElement("h3",null,"Gallery"),n.a.createElement("div",{style:{display:"flex",flexDirection:"row",marginBottom:"20px",marginTop:"20px",justifyContent:"center",width:"100%",flexWrap:"wrap"}},n.a.createElement("div",{style:{width:"100%",marginBottom:"20px"},onClick:function(){return e.handleMouseOver(3)}},n.a.createElement("div",{style:{position:"relative",width:"100%"}},n.a.createElement("div",{style:{backgroundImage:"url(".concat("/projects/features/images/cam.jpg",")"),backgroundSize:"cover",width:"100%",height:"300px",position:"relative",borderRadius:"5px"}}),n.a.createElement("div",{style:{display:3===this.state.infoDisplay?"flex":"none",position:"absolute",left:0,top:0,backgroundColor:"rgba(0,0,0,0.5)",height:"100%",width:"100%",justifyContent:"center",alignItems:"center",borderRadius:"5px"}},n.a.createElement("div",{style:{display:"flex",flexDirection:"column",margin:"10px",justifyContent:"space-evenly",color:"white",alignItems:"center"}},n.a.createElement("h4",null," React Native "),n.a.createElement("h3",null,"Camera Library"),n.a.createElement("div",null,t),n.a.createElement("a",{href:"https://www.npmjs.com/package/react-native-synced-cam",style:{color:"#32FBA4",margin:"5px"}},n.a.createElement("div",null,"Learn More")),n.a.createElement(y.a,{onClick:function(){return e.props.toggleGallery(!0,"cam","mobile")},style:{marginTop:"5px",color:"#32FBA4"}}," Preview "))))),n.a.createElement("div",{style:{width:"100%",marginBottom:"20px"},onClick:function(){return e.handleMouseOver(4)}},n.a.createElement("div",{style:{position:"relative",width:"100%"}},n.a.createElement("div",{style:{backgroundImage:"url(".concat("/projects/features/images/reactions.jpg",")"),backgroundSize:"cover",width:"100%",height:"300px",borderRadius:"5px"}}),n.a.createElement("div",{style:{display:4===this.state.infoDisplay?"flex":"none",position:"absolute",left:0,top:0,backgroundColor:"rgba(0,0,0,0.5)",height:"100%",width:"100%",justifyContent:"center",alignItems:"center",borderRadius:"5px"}},n.a.createElement("div",{style:{display:"flex",flexDirection:"column",margin:"10px",justifyContent:"space-evenly",color:"white",alignItems:"center"}},n.a.createElement("h4",null," React Native "),n.a.createElement("h3",null,"Reaction Component"),n.a.createElement("div",null,a),n.a.createElement(y.a,{onClick:function(){return e.props.toggleGallery(!0,"reactions","mobile")},style:{marginTop:"5px",color:"#32FBA4"}}," Preview ")))))))))}}]),t}(n.a.Component),N=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement("footer",{id:"footer",className:"App-footer"},n.a.createElement("div",null,"A Sayo Project."))}}]),t}(n.a.Component),j=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.asset,l=t.platform;return this.props.showGallery?n.a.createElement("div",{className:"popup",onClick:function(){return e.props.toggleGallery(!1)}},n.a.createElement("div",{className:"popup-content"},n.a.createElement("div",{style:{position:"relative",height:"100%",width:"100%",display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"space-evenly"}},{web:{cam:["/projects/features/cam1.gif","/projects/features/cam2.gif"],reactions:["/projects/features/reactions1.gif","/projects/features/reactions2.gif"]},mobile:{cam:["/projects/features/cam1.gif"],reactions:["/projects/features/reactions2.gif"]}}[l][a].map((function(e,t){return n.a.createElement("div",{key:t,style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between",height:"100%"}},n.a.createElement("img",{src:""+e,alt:"logo",style:{height:"90%"}}),n.a.createElement("div",{style:{padding:"5px",borderRadius:"4px",backgroundColor:"white"}},"GIF"))}))))):null}}]),t}(n.a.Component),C=function(e){function t(){var e,a;Object(r.a)(this,t);for(var l=arguments.length,n=new Array(l),i=0;i<l;i++)n[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={showGallery:!1,asset:"",platform:"",section:"home"},a.toggleGallery=function(e,t,l){a.setState({showGallery:e,asset:t,platform:l})},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement(k,null),n.a.createElement("div",{className:"body"},n.a.createElement(u,null),n.a.createElement(w,{toggleGallery:this.toggleGallery}),n.a.createElement(p,null),n.a.createElement(x,null)),n.a.createElement(N,null),n.a.createElement(j,{showGallery:this.state.showGallery,toggleGallery:this.toggleGallery,asset:this.state.asset,platform:this.state.platform}))}}]),t}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.ad6a9854.chunk.js.map