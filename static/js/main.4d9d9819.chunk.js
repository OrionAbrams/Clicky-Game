(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,name:"Bart",image:"/images/bart.jpg",alreadyClicked:!1},{id:2,name:"Mr. Burns",image:"/images/burns.jpg",alreadyClicked:!1},{id:3,name:"Grampa",image:"/images/grampa.jpg",alreadyClicked:!1},{id:4,name:"Hutz",image:"/images/hutz.jpg",alreadyClicked:!1},{id:5,name:"Kirk",image:"/images/kirk.jpg",alreadyClicked:!1},{id:6,name:"Krusty",image:"/images/krusty.jpg",alreadyClicked:!1},{id:7,name:"Marge",image:"/images/marge.jpg",alreadyClicked:!1},{id:8,name:"Milhouse",image:"/images/milhouse.jpg",alreadyClicked:!1},{id:9,name:"Moleman",image:"/images/moleman.jpg",alreadyClicked:!1},{id:10,name:"Ralph",image:"/images/ralph.jpg",alreadyClicked:!1},{id:11,name:"Sideshow Bob",image:"/images/sideshowbob.jpg",alreadyClicked:!1},{id:12,name:"Chief Wiggum",image:"/images/wiggum.jpg",alreadyClicked:!1}]},,,,,,,,function(e,a,n){e.exports=n(25)},,,,,,function(e,a,n){},,function(e,a,n){},,function(e,a,n){},,function(e,a,n){},,function(e,a,n){},,function(e,a,n){"use strict";n.r(a);var i=n(0),t=n.n(i),r=n(3),c=n.n(r),l=n(4),m=n(5),o=n(7),d=n(6),s=n(8);n(15);var g=function(e){return t.a.createElement("div",{className:"card"},t.a.createElement("div",{className:"img-container"},t.a.createElement("img",{onClick:function(){return e.clickedIt(e.id)},className:"click-me",alt:e.name,src:e.image})))};n(17);var u=function(e){return t.a.createElement("div",{className:"wrapper"},e.children)};n(19);var k=function(e){return t.a.createElement("h2",{className:"title"},e.children)};n(21);var f,p=function(e){return t.a.createElement("nav",{class:"navbar navbar-expand-lg navbar-light bg-light"},e.children)},h=n(1);var y=function(e){function a(){var e,n;Object(l.a)(this,a);for(var i=arguments.length,t=new Array(i),r=0;r<i;r++)t[r]=arguments[r];return(n=Object(o.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(t)))).state={friends:h,score:0,maxScore:0},n.clickedIt=function(e){for(var a,i=h,t=i.filter(function(a){return a.id===e})[0].id,r=0;r<i.length;r++)t===i[r].id&&(a=r);if(h[a].alreadyClicked){alert("You Lose!");for(r=0;r<h.length;r++)h[r].alreadyClicked=!1;n.setState({friends:h,score:0})}else console.log(n.state.score),n.state.score>=n.state.maxScore&&(12===(f=n.state.score+1)&&alert("You win!"),console.log(f)),n.setState({friends:h[a].alreadyClicked=!0,score:n.state.score+1,maxScore:f})},n}return Object(s.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this,a=function(e){for(var a=e.length-1;a>0;a--){var n=Math.floor(Math.random()*(a+1)),i=e[a];e[a]=e[n],e[n]=i}return e}(h);return t.a.createElement(u,null,t.a.createElement(p,null,"Score: ",this.state.score," Max Score: ",this.state.maxScore),t.a.createElement(k,null,"Clicky Game! Click on an image to earn points, but don't click on any more than once!"),a.map(function(a){return t.a.createElement(g,{clickedIt:e.clickedIt,id:a.id,key:a.id,name:a.name,image:a.image})}))}}]),a}(i.Component);n(23);c.a.render(t.a.createElement(y,null),document.getElementById("root"))}],[[9,2,1]]]);
//# sourceMappingURL=main.4d9d9819.chunk.js.map