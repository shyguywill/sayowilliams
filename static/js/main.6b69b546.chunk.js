(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{13:function(e,t,a){e.exports=a(23)},18:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),i=a(8),r=a.n(i),s=(a(18),a(2)),o=a(3),c=a(5),m=a(4),d=(a(6),function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var l=arguments.length,n=new Array(l),i=0;i<l;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={imageSelected:0,sectionVisible:!1},e.trackScrolling=function(){var t=document.getElementById("about");e.isSection(t)&&(e.setState({sectionVisible:!0}),document.removeEventListener("scroll",e.trackScrolling))},e}return Object(o.a)(a,[{key:"isSection",value:function(e){return e.getBoundingClientRect().top<window.innerHeight}},{key:"componentDidMount",value:function(){document.addEventListener("scroll",this.trackScrolling)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("scroll",this.trackScrolling)}},{key:"handleMouseOver",value:function(e){this.setState({imageSelected:1})}},{key:"handleMouseOut",value:function(){this.setState({imageSelected:0})}},{key:"render",value:function(){var e=this,t=["./me/me1.jpeg","./me/me2.jpeg"];return n.a.createElement("section",{id:"about",className:this.state.sectionVisible?"animated fadeInLeftBig ":"section-pre-loaded"},n.a.createElement("div",null,n.a.createElement("div",{className:"section-header",style:{marginTop:"50px"}},n.a.createElement("h1",null,"About Me"),n.a.createElement("div",{style:{height:"2px",width:"50px",backgroundColor:"black"}})),n.a.createElement("div",{className:"d-none d-md-block"},n.a.createElement("div",{className:"about"},n.a.createElement("div",{className:"about-section",style:{backgroundImage:"url(".concat(t[this.state.imageSelected],")"),backgroundSize:"cover"},onMouseEnter:function(){return e.handleMouseOver()},onMouseLeave:function(){return e.handleMouseOut()}},n.a.createElement("div",{className:"bio-text"},n.a.createElement("h2",null," Who am I ? "),n.a.createElement("div",null,"I am a front-end developer with a passion for creating intuitive and dynamic user experiences. A tinkerer and a problem solver; I find fulfilment in building creative solutions to problems."))),n.a.createElement("div",{className:"about-section"},n.a.createElement("div",{className:"skills-main-bar"},n.a.createElement("div",{className:"skills",style:{width:"90%"}},n.a.createElement("div",{className:"skill-text"},"React Native"),n.a.createElement("img",{loading:"lazy",src:"./skills/react.png",alt:"logo",className:"skill-image"}))),n.a.createElement("div",{className:"skills-main-bar"},n.a.createElement("div",{className:"skills",style:{width:"90%"}},n.a.createElement("div",{className:"skill-text"},"Swift"),n.a.createElement("img",{loading:"lazy",src:"./skills/swift.png",alt:"logo",className:"skill-image"}))),n.a.createElement("div",{className:"skills-main-bar"},n.a.createElement("div",{className:"skills",style:{width:"80%"}},n.a.createElement("img",{loading:"lazy",src:"./skills/react.png",alt:"logo",className:"skill-image"}),n.a.createElement("div",{className:"skill-text"},"React"))),n.a.createElement("div",{className:"skills-main-bar"},n.a.createElement("div",{className:"skills",style:{width:"80%"}},n.a.createElement("img",{loading:"lazy",src:"./skills/js.png",alt:"logo",className:"skill-image"}),n.a.createElement("div",{className:"skill-text"},"Javascript"))),n.a.createElement("div",{className:"skills-main-bar"},n.a.createElement("div",{className:"skills",style:{width:"70%"}},n.a.createElement("img",{loading:"lazy",src:"./skills/css.png",alt:"logo",className:"skill-image"}),n.a.createElement("div",{className:"skill-text"},"CSS"))),n.a.createElement("div",{className:"skills-main-bar"},n.a.createElement("div",{className:"skills",style:{width:"60%"}},n.a.createElement("img",{loading:"lazy",src:"./skills/python.png",alt:"logo",className:"skill-image"}),n.a.createElement("div",{className:"skill-text"},"Python"))),n.a.createElement("div",{className:"skills-main-bar"},n.a.createElement("div",{className:"skills",style:{width:"60%"}},n.a.createElement("img",{loading:"lazy",src:"./skills/dart.png",alt:"logo",className:"skill-image"}),n.a.createElement("div",{className:"skill-text"},"Flutter (Dart)"))),n.a.createElement("div",{className:"skills-main-bar"},n.a.createElement("div",{className:"skills",style:{width:"60%"}},n.a.createElement("img",{loading:"lazy",src:"./skills/html.png",alt:"logo",className:"skill-image"}),n.a.createElement("div",{className:"skill-text"},"HTML"))),n.a.createElement("div",{className:"skills-main-bar"},n.a.createElement("div",{className:"skills",style:{width:"60%"}},n.a.createElement("img",{loading:"lazy",src:"./skills/nodejs.png",alt:"logo",className:"skill-image"}),n.a.createElement("div",{className:"skill-text"},"Node.js")))))),n.a.createElement("div",{className:"d-md-none"},n.a.createElement("div",{className:"mobile"},n.a.createElement("div",{className:"mobile-column",style:{backgroundImage:"url(".concat(t[1],")"),backgroundSize:"cover",height:"80vh",borderRadius:"10px"}},n.a.createElement("div",{className:"bio-text"},n.a.createElement("h2",null," Who am I ? "),n.a.createElement("div",null,"I am a front-end developer with a passion for creating intuitive and dynamic user experiences. A tinkerer and a problem solver; I find fulfilment in building creative solutions to problems."))),n.a.createElement("div",{className:"mobile-column",style:{marginTop:"30px"}},n.a.createElement("div",{className:"skills-main-bar-mobile"},n.a.createElement("div",{className:"skills",style:{width:"90%"}},n.a.createElement("img",{loading:"lazy",src:"./skills/react.png",alt:"logo",className:"skill-image"}),n.a.createElement("div",{className:"skill-text"},"React Native"))),n.a.createElement("div",{className:"skills-main-bar-mobile"},n.a.createElement("div",{className:"skills",style:{width:"90%"}},n.a.createElement("img",{loading:"lazy",src:"./skills/swift.png",alt:"logo",className:"skill-image"}),n.a.createElement("div",{className:"skill-text"},"Swift"))),n.a.createElement("div",{className:"skills-main-bar-mobile"},n.a.createElement("div",{className:"skills",style:{width:"80%"}},n.a.createElement("img",{loading:"lazy",src:"./skills/react.png",alt:"logo",className:"skill-image"}),n.a.createElement("div",{className:"skill-text"},"React"))),n.a.createElement("div",{className:"skills-main-bar-mobile"},n.a.createElement("div",{className:"skills",style:{width:"80%"}},n.a.createElement("img",{loading:"lazy",src:"./skills/js.png",alt:"logo",className:"skill-image"}),n.a.createElement("div",{className:"skill-text"},"Javascript"))),n.a.createElement("div",{className:"skills-main-bar-mobile"},n.a.createElement("div",{className:"skills",style:{width:"70%"}},n.a.createElement("img",{loading:"lazy",src:"./skills/css.png",alt:"logo",className:"skill-image"}),n.a.createElement("div",{className:"skill-text"},"CSS"))),n.a.createElement("div",{className:"skills-main-bar-mobile"},n.a.createElement("div",{className:"skills",style:{width:"60%"}},n.a.createElement("img",{loading:"lazy",src:"./skills/python.png",alt:"logo",className:"skill-image"}),n.a.createElement("div",{className:"skill-text"},"Python"))),n.a.createElement("div",{className:"skills-main-bar-mobile"},n.a.createElement("div",{className:"skills",style:{width:"60%"}},n.a.createElement("img",{loading:"lazy",src:"./skills/dart.png",alt:"logo",className:"skill-image"}),n.a.createElement("div",{className:"skill-text"},"Flutter (Dart) "))),n.a.createElement("div",{className:"skills-main-bar-mobile"},n.a.createElement("div",{className:"skills",style:{width:"60%"}},n.a.createElement("img",{loading:"lazy",src:"./skills/html.png",alt:"logo",className:"skill-image"}),n.a.createElement("div",{className:"skill-text"},"HTML"))),n.a.createElement("div",{className:"skills-main-bar-mobile"},n.a.createElement("div",{className:"skills",style:{width:"60%"}},n.a.createElement("img",{loading:"lazy",src:"./skills/nodejs.png",alt:"logo",className:"skill-image"}),n.a.createElement("div",{className:"skill-text"},"Node.js"))))))))}}]),a}(n.a.Component)),p=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var l=arguments.length,n=new Array(l),i=0;i<l;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={sectionVisible:!1},e.trackScrolling=function(){var t=document.getElementById("articles");e.isSection(t)&&(e.setState({sectionVisible:!0}),document.removeEventListener("scroll",e.trackScrolling))},e}return Object(o.a)(a,[{key:"isSection",value:function(e){return e.getBoundingClientRect().top<window.innerHeight}},{key:"componentDidMount",value:function(){document.addEventListener("scroll",this.trackScrolling)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("scroll",this.trackScrolling)}},{key:"render",value:function(){return n.a.createElement("section",{id:"articles",className:this.state.sectionVisible?"animated fadeInLeftBig":"section-pre-loaded"},n.a.createElement("div",null,n.a.createElement("div",{className:"section-header"},n.a.createElement("h1",null,"Articles"),n.a.createElement("div",{style:{height:"2px",width:"50px",backgroundColor:"black"}})),n.a.createElement("div",{style:{width:"100%",minHeight:"60vh",display:"flex",flexDirection:"row",justifyContent:"space-evenly",flexWrap:"wrap"}},n.a.createElement("blockquote",{className:"embedly-card"},n.a.createElement("h4",null,n.a.createElement("a",{href:"https://medium.com/synced-to-tech-blog/implementing-pinch-to-zoom-in-react-native-8a291ca29ac1"},"Implementing Pinch to Zoom in React Native")),n.a.createElement("p",null,"React native is very versatile and widely used framework, frankly speaking, it is the best in class for creating cross platform applications. So, I was a bit disappointed to discover that React Native doesn't come with a simple pinch to zoom component included in the box.")),n.a.createElement("blockquote",{className:"embedly-card"},n.a.createElement("h4",null,n.a.createElement("a",{href:"https://blog.synced.to/Linking-React-Native-to-native-code/"},"Linking React Native to native code")),n.a.createElement("p",null,"Linking native code to React Native, piece of cake, right? After all it's in the name. Wrong! I found it to be an unnecessarily complex and obscured process.")))))}}]),a}(n.a.Component),u=a(9),g=a(10),h=(n.a.Component,function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var l=arguments.length,n=new Array(l),i=0;i<l;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).scrollTo=function(){var e=document.getElementById("about");window.scrollTo({top:e.getBoundingClientRect().top,behavior:"smooth"})},e}return Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement("header",{id:"home",className:"App-header"},n.a.createElement("div",null,n.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},n.a.createElement("h1",{className:"animated wobble delay-1s"},"Hello,"),n.a.createElement("div",{className:"animated fadeIn delay-1s",style:{marginLeft:"10px",display:"flex",flexDirection:"row"}},n.a.createElement("h1",null,"I'm"),n.a.createElement("span",{style:{marginLeft:"8px",color:"#6853f6",display:"flex"}},n.a.createElement("h1",null,"Sayo Williams.")))),n.a.createElement("div",{className:"animated fadeIn delay-2s slow"},n.a.createElement("h1",null,"I build things with _code."))),n.a.createElement("div",{className:"animated fadeIn delay-2s slower",onClick:this.scrollTo,style:{marginTop:"40px"}},n.a.createElement("button",{className:"header-button"},"View my work")))}}]),a}(n.a.Component)),v=a(24),y=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var l=arguments.length,n=new Array(l),i=0;i<l;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={infoDisplay:0,sectionVisible:!1},e.trackScrolling=function(){var t=document.getElementById("projects");e.isSection(t)&&(e.setState({sectionVisible:!0}),document.removeEventListener("scroll",e.trackScrolling))},e}return Object(o.a)(a,[{key:"isSection",value:function(e){return e.getBoundingClientRect().top<window.innerHeight}},{key:"componentDidMount",value:function(){document.addEventListener("scroll",this.trackScrolling)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("scroll",this.trackScrolling)}},{key:"handleMouseOver",value:function(e){this.setState({infoDisplay:e})}},{key:"handleMouseOut",value:function(){this.setState({infoDisplay:0})}},{key:"render",value:function(){var e=this,t="I designed and built an all-inclusive camera library, based on react-native-camera. This is an upcoming main feature of the Synced application.",a="I designed and built a user reaction component, with the aim of increasing user engagement. This is an upcoming feature within the Synced application.";return n.a.createElement("section",{id:"projects",className:this.state.sectionVisible?"animated fadeInRightBig":"section-pre-loaded"},n.a.createElement("div",{style:{minHeight:"70vh",display:"flex",flexDirection:"column"},className:"d-none d-sm-block"},n.a.createElement("div",{className:"section-header"},n.a.createElement("h1",null,"Projects"),n.a.createElement("div",{style:{height:"2px",width:"50px",backgroundColor:"black"}})),n.a.createElement("div",{style:{marginBottom:"20px",marginTop:"20px"}},n.a.createElement("h3",null,"Apps"),n.a.createElement("div",{style:{marginTop:"20px",marginBottom:"20px"},onMouseEnter:function(){return e.handleMouseOver(1)},onMouseLeave:function(){return e.handleMouseOut()}},n.a.createElement("div",{style:{position:"relative"}},n.a.createElement("div",{style:{display:"flex",flexDirection:"row",position:"relative",flexWrap:"wrap",justifyContent:"center"}},n.a.createElement("img",{loading:"lazy",src:"./projects/platter/0.jpg",alt:"logo",style:{width:"25%",borderTopLeftRadius:"5px",borderBottomLeftRadius:"5px",maxHeight:"80vh"}}),n.a.createElement("img",{loading:"lazy",src:"./projects/platter/3.jpg",alt:"logo3",style:{width:"25%",maxHeight:"80vh"}}),n.a.createElement("img",{loading:"lazy",src:"./projects/platter/2.jpg",alt:"logo2",style:{width:"25%",maxHeight:"80vh"}}),n.a.createElement("img",{loading:"lazy",src:"./projects/platter/4.jpg",alt:"logo4",style:{width:"25%",borderTopRightRadius:"5px",borderBottomRightRadius:"5px",maxHeight:"80vh"}})),n.a.createElement("div",{style:{display:1===this.state.infoDisplay?"flex":"none",position:"absolute",left:0,top:0,backgroundColor:"rgba(0,0,0,0.5)",height:"100%",width:"100%",justifyContent:"center",alignItems:"center",borderRadius:"5px"}},n.a.createElement("div",{style:{display:"flex",flexDirection:"column",margin:"10px",justifyContent:"space-evenly",color:"white",alignItems:"center",height:"100%"}},n.a.createElement("div",null,n.a.createElement("h3",null,"Swift (iOS) / Dart (Android)"),n.a.createElement("h2",null,"Platter - Food Recipes")),n.a.createElement("a",{href:"http://theplatterapp.com/",style:{color:"#32FBA4"}},n.a.createElement("div",null,"Learn More")))))),n.a.createElement("div",{style:{marginTop:"20px",marginBottom:"20px"},onMouseEnter:function(){return e.handleMouseOver(2)},onMouseLeave:function(){return e.handleMouseOut()}},n.a.createElement("div",{style:{position:"relative"}},n.a.createElement("div",{style:{display:"flex",flexDirection:"row",position:"relative",flexWrap:"wrap",justifyContent:"center"}},n.a.createElement("img",{loading:"lazy",src:"./projects/insiteful/0.jpeg",alt:"logo",style:{width:"100%",borderRadius:"5px"}})),n.a.createElement("div",{style:{display:2===this.state.infoDisplay?"flex":"none",position:"absolute",left:0,top:0,backgroundColor:"rgba(0,0,0,0.5)",height:"100%",width:"100%",justifyContent:"center",alignItems:"center",borderRadius:"5px"}},n.a.createElement("div",{style:{display:"flex",flexDirection:"column",margin:"10px",justifyContent:"space-evenly",color:"white",alignItems:"center",height:"100%"}},n.a.createElement("div",null,n.a.createElement("h3",null,"React / Node.js"),n.a.createElement("h2",null,"insiteful")),n.a.createElement("a",{href:"https://apps.shopify.com/insiteful",style:{color:"#32FBA4"}},n.a.createElement("div",null,"Learn More")))))),n.a.createElement("div",{style:{},onMouseEnter:function(){return e.handleMouseOver(3)},onMouseLeave:function(){return e.handleMouseOut()}},n.a.createElement("div",{style:{position:"relative"}},n.a.createElement("div",{style:{display:"flex",flexDirection:"row",position:"relative",flexWrap:"wrap",justifyContent:"center"}},n.a.createElement("img",{loading:"lazy",src:"./projects/tightup/ionic 1.png",alt:"logo",style:{width:"25%",borderTopLeftRadius:"5px",borderBottomLeftRadius:"5px",maxHeight:"50vh"}}),n.a.createElement("img",{loading:"lazy",src:"./projects/tightup/ionic 2.png",alt:"logo",style:{width:"25%",maxHeight:"50vh"}}),n.a.createElement("img",{loading:"lazy",src:"./projects/tightup/versa 1.png",alt:"logo",style:{width:"25%",maxHeight:"50vh"}}),n.a.createElement("img",{loading:"lazy",src:"./projects/tightup/versa 2.png",alt:"logo",style:{width:"25%",borderTopRightRadius:"5px",borderBottomRightRadius:"5px",maxHeight:"50vh"}})),n.a.createElement("div",{style:{display:3===this.state.infoDisplay?"flex":"none",position:"absolute",left:0,top:0,backgroundColor:"rgba(0,0,0,0.5)",height:"100%",width:"100%",justifyContent:"center",alignItems:"center",borderRadius:"5px"}},n.a.createElement("div",{style:{display:"flex",flexDirection:"column",margin:"10px",justifyContent:"space-evenly",color:"white",alignItems:"center",height:"100%"}},n.a.createElement("div",null,n.a.createElement("h3",null," JavaScript / CSS / SVG "),n.a.createElement("h2",null,"Tight Up - Kegel Trainer ")),n.a.createElement("a",{href:"https://gallery.fitbit.com/details/a4758ffa-d763-41ea-bd57-f187f290efdf",style:{color:"#32FBA4"}},n.a.createElement("div",null,"Learn More"))))))),n.a.createElement("div",{style:{marginBottom:"20px",marginTop:"20px"}},n.a.createElement("h3",null,"Gallery"),n.a.createElement("div",{style:{display:"flex",flexDirection:"row",marginBottom:"20px",marginTop:"20px",justifyContent:"center",width:"100%",flexWrap:"wrap"}},n.a.createElement("div",{style:{width:"33%",minWidth:"300px",flexGrow:1,marginBottom:"20px"},onMouseEnter:function(){return e.handleMouseOver(4)},onMouseLeave:function(){return e.handleMouseOut()}},n.a.createElement("div",{style:{position:"relative",width:"100%"}},n.a.createElement("div",{style:{backgroundImage:"url(".concat("./projects/features/images/cam.jpg",")"),backgroundSize:"cover",width:"100%",height:"300px",position:"relative",borderTopLeftRadius:"5px",borderBottomLeftRadius:"5px"}}),n.a.createElement("div",{style:{display:4===this.state.infoDisplay?"flex":"none",position:"absolute",left:0,top:0,backgroundColor:"rgba(0,0,0,0.5)",height:"100%",width:"100%",justifyContent:"center",alignItems:"center",borderTopLeftRadius:"5px",borderBottomLeftRadius:"5px"}},n.a.createElement("div",{style:{display:"flex",flexDirection:"column",margin:"10px",justifyContent:"space-evenly",color:"white",alignItems:"center"}},n.a.createElement("h4",null," React Native "),n.a.createElement("h3",null,"Camera Library"),n.a.createElement("div",null,t),n.a.createElement("a",{href:"https://www.npmjs.com/package/react-native-synced-cam",style:{color:"#32FBA4",margin:"5px"}},n.a.createElement("div",null,"Learn More")),n.a.createElement(v.a,{onClick:function(){return e.props.toggleGallery(!0,"cam","web")},style:{marginTop:"5px",color:"#32FBA4"}}," Preview "))))),n.a.createElement("div",{style:{width:"33%",minWidth:"300px",flexGrow:1,marginBottom:"20px"},onMouseEnter:function(){return e.handleMouseOver(5)},onMouseLeave:function(){return e.handleMouseOut()}},n.a.createElement("div",{style:{position:"relative",width:"100%"}},n.a.createElement("div",{style:{backgroundImage:"url(".concat("./projects/features/images/reactions.jpg",")"),backgroundSize:"cover",width:"100%",height:"300px",borderTopRightRadius:"5px",borderBottomRightRadius:"5px"}}),n.a.createElement("div",{style:{display:5===this.state.infoDisplay?"flex":"none",position:"absolute",left:0,top:0,backgroundColor:"rgba(0,0,0,0.5)",height:"100%",width:"100%",justifyContent:"center",alignItems:"center",borderTopRightRadius:"5px",borderBottomRightRadius:"5px"}},n.a.createElement("div",{style:{display:"flex",flexDirection:"column",margin:"10px",justifyContent:"space-evenly",color:"white",alignItems:"center"}},n.a.createElement("h4",null," React Native "),n.a.createElement("h3",null,"Reaction Component"),n.a.createElement("div",null,a),n.a.createElement(v.a,{onClick:function(){return e.props.toggleGallery(!0,"reactions","web")},style:{marginTop:"5px",color:"#32FBA4"}}," Preview ")))))))),n.a.createElement("div",{className:"d-sm-none"},n.a.createElement("div",{className:"section-header",style:{marginTop:"50px"}},n.a.createElement("h1",null,"Projects"),n.a.createElement("div",{style:{height:"2px",width:"50px",backgroundColor:"black"}})),n.a.createElement("div",{style:{marginBottom:"20px",marginTop:"20px"}},n.a.createElement("h3",null,"Apps"),n.a.createElement("div",{style:{marginTop:"20px",marginBottom:"20px"},onClick:function(){return e.handleMouseOver(1)}},n.a.createElement("div",{style:{position:"relative"}},n.a.createElement("div",{style:{display:"flex",flexDirection:"row",position:"relative",justifyContent:"center"}},n.a.createElement("img",{loading:"lazy",src:"./projects/platter/0.jpg",alt:"logo",style:{width:"50%",maxHeight:"50vh",borderTopLeftRadius:"5px",borderBottomLeftRadius:"5px"}}),n.a.createElement("img",{loading:"lazy",src:"./projects/platter/3.jpg",alt:"logo3",style:{width:"50%",maxHeight:"50vh",borderTopRightRadius:"5px",borderBottomRightRadius:"5px"}})),n.a.createElement("div",{style:{display:1===this.state.infoDisplay?"flex":"none",position:"absolute",left:0,top:0,backgroundColor:"rgba(0,0,0,0.5)",height:"100%",width:"100%",justifyContent:"center",alignItems:"center",borderRadius:"5px"}},n.a.createElement("div",{style:{display:"flex",flexDirection:"column",margin:"10px",justifyContent:"space-evenly",color:"white",alignItems:"center",height:"100%"}},n.a.createElement("div",null,n.a.createElement("h3",null,"Swift (iOS) / Dart (Android) "),n.a.createElement("h2",null,"Platter - Food Recipes")),n.a.createElement("a",{href:"http://theplatterapp.com/",style:{color:"#32FBA4"}},n.a.createElement("div",null,"Learn More")))))),n.a.createElement("div",{style:{marginTop:"20px",marginBottom:"20px"},onClick:function(){return e.handleMouseOver(2)}},n.a.createElement("div",{style:{position:"relative"}},n.a.createElement("div",{style:{display:"flex",flexDirection:"row",position:"relative",justifyContent:"center"}},n.a.createElement("img",{loading:"lazy",src:"./projects/insiteful/0.jpeg",alt:"logo",style:{width:"100%",maxHeight:"21vh",borderRadius:"5px",borderBottomLeftRadius:"5px"}})),n.a.createElement("div",{style:{display:2===this.state.infoDisplay?"flex":"none",position:"absolute",left:0,top:0,backgroundColor:"rgba(0,0,0,0.5)",height:"100%",width:"100%",justifyContent:"center",alignItems:"center",borderRadius:"5px"}},n.a.createElement("div",{style:{display:"flex",flexDirection:"column",margin:"10px",justifyContent:"space-evenly",color:"white",alignItems:"center",height:"100%"}},n.a.createElement("div",null,n.a.createElement("h3",null,"React / Node.js"),n.a.createElement("h2",null,"insiteful")),n.a.createElement("a",{href:"https://apps.shopify.com/insiteful",style:{color:"#32FBA4"}},n.a.createElement("div",null,"Learn More")))))),n.a.createElement("div",{style:{},onClick:function(){return e.handleMouseOver(3)}},n.a.createElement("div",{style:{position:"relative"}},n.a.createElement("div",{style:{display:"flex",flexDirection:"row",position:"relative",flexWrap:"wrap",justifyContent:"center"}},n.a.createElement("img",{loading:"lazy",src:"./projects/tightup/ionic 2.png",alt:"logo",style:{width:"50%",maxHeight:"35vh",borderTopLeftRadius:"5px",borderBottomLeftRadius:"5px"}}),n.a.createElement("img",{loading:"lazy",src:"./projects/tightup/versa 2.png",alt:"logo",style:{width:"50%",maxHeight:"35vh",borderTopRightRadius:"5px",borderBottomRightRadius:"5px"}})),n.a.createElement("div",{style:{display:3===this.state.infoDisplay?"flex":"none",position:"absolute",left:0,top:0,backgroundColor:"rgba(0,0,0,0.5)",height:"100%",width:"100%",justifyContent:"center",alignItems:"center",borderRadius:"5px"}},n.a.createElement("div",{style:{display:"flex",flexDirection:"column",margin:"10px",justifyContent:"space-evenly",color:"white",alignItems:"center",height:"100%"}},n.a.createElement("div",null,n.a.createElement("h3",null," JavaScript / CSS / SVG "),n.a.createElement("h2",null,"Tight Up - Kegel Trainer ")),n.a.createElement("a",{href:"https://gallery.fitbit.com/details/a4758ffa-d763-41ea-bd57-f187f290efdf",style:{color:"#32FBA4"}},n.a.createElement("div",null,"Learn More"))))))),n.a.createElement("div",{style:{marginBottom:"20px",marginTop:"20px",display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}},n.a.createElement("h3",null,"Gallery"),n.a.createElement("div",{style:{display:"flex",flexDirection:"row",marginBottom:"20px",marginTop:"20px",justifyContent:"center",width:"100%",flexWrap:"wrap"}},n.a.createElement("div",{style:{width:"100%",marginBottom:"20px"},onClick:function(){return e.handleMouseOver(4)}},n.a.createElement("div",{style:{position:"relative",width:"100%"}},n.a.createElement("div",{style:{backgroundImage:"url(".concat("./projects/features/images/cam.jpg",")"),backgroundSize:"cover",width:"100%",height:"300px",position:"relative",borderRadius:"5px"}}),n.a.createElement("div",{style:{display:4===this.state.infoDisplay?"flex":"none",position:"absolute",left:0,top:0,backgroundColor:"rgba(0,0,0,0.5)",height:"100%",width:"100%",justifyContent:"center",alignItems:"center",borderRadius:"5px"}},n.a.createElement("div",{style:{display:"flex",flexDirection:"column",margin:"10px",justifyContent:"space-evenly",color:"white",alignItems:"center"}},n.a.createElement("h4",null," React Native "),n.a.createElement("h3",null,"Camera Library"),n.a.createElement("div",null,t),n.a.createElement("a",{href:"https://www.npmjs.com/package/react-native-synced-cam",style:{color:"#32FBA4",margin:"5px"}},n.a.createElement("div",null,"Learn More")),n.a.createElement(v.a,{onClick:function(){return e.props.toggleGallery(!0,"cam","mobile")},style:{marginTop:"5px",color:"#32FBA4"}}," Preview "))))),n.a.createElement("div",{style:{width:"100%",marginBottom:"20px"},onClick:function(){return e.handleMouseOver(5)}},n.a.createElement("div",{style:{position:"relative",width:"100%"}},n.a.createElement("div",{style:{backgroundImage:"url(".concat("./projects/features/images/reactions.jpg",")"),backgroundSize:"cover",width:"100%",height:"300px",borderRadius:"5px"}}),n.a.createElement("div",{style:{display:5===this.state.infoDisplay?"flex":"none",position:"absolute",left:0,top:0,backgroundColor:"rgba(0,0,0,0.5)",height:"100%",width:"100%",justifyContent:"center",alignItems:"center",borderRadius:"5px"}},n.a.createElement("div",{style:{display:"flex",flexDirection:"column",margin:"10px",justifyContent:"space-evenly",color:"white",alignItems:"center"}},n.a.createElement("h4",null," React Native "),n.a.createElement("h3",null,"Reaction Component"),n.a.createElement("div",null,a),n.a.createElement(v.a,{onClick:function(){return e.props.toggleGallery(!0,"reactions","mobile")},style:{marginTop:"5px",color:"#32FBA4"}}," Preview ")))))))))}}]),a}(n.a.Component),f=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement("footer",{id:"footer",className:"App-footer"},n.a.createElement("div",null,"A Sayo Project"),n.a.createElement("i",{"aria-hidden":"true",class:"red rocket icon"}))}}]),a}(n.a.Component),E=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.asset,l=t.platform;return this.props.showGallery?n.a.createElement("div",{className:"popup",onClick:function(){return e.props.toggleGallery(!1)}},n.a.createElement("div",{className:"popup-content"},n.a.createElement("div",{style:{position:"relative",height:"100%",width:"100%",display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"space-evenly"}},{web:{cam:["./projects/features/cam1.gif","./projects/features/cam2.gif"],reactions:["./projects/features/reactions1.gif","./projects/features/reactions2.gif"]},mobile:{cam:["./projects/features/cam1.gif"],reactions:["./projects/features/reactions2.gif"]}}[l][a].map((function(e,t){return n.a.createElement("div",{key:t,style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between",height:"100%"}},n.a.createElement("img",{src:""+e,alt:"logo",style:{height:"90%"}}),n.a.createElement("div",{style:{padding:"5px",borderRadius:"4px",backgroundColor:"white"}},"GIF"))}))))):null}}]),a}(n.a.Component),b=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var l=arguments.length,n=new Array(l),i=0;i<l;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={showGallery:!1,asset:"",platform:"",section:"home"},e.toggleGallery=function(t,a,l){e.setState({showGallery:t,asset:a,platform:l})},e}return Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement(h,null),n.a.createElement("div",{className:"body"},n.a.createElement(d,null),n.a.createElement(y,{toggleGallery:this.toggleGallery}),n.a.createElement(p,null)),n.a.createElement(f,null),n.a.createElement(E,{showGallery:this.state.showGallery,toggleGallery:this.toggleGallery,asset:this.state.asset,platform:this.state.platform}))}}]),a}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,a){}},[[13,1,2]]]);
//# sourceMappingURL=main.6b69b546.chunk.js.map
