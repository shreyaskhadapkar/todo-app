(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(7),c=n.n(r),i=(n(14),n(8)),l=n(1),u=n(2),s=n(4),m=n(3),d=n(5),p=function(t){function e(){var t,n;Object(l.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(s.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(o)))).state={ToDo:null,id:null},n.Change=function(t){n.setState({ToDo:t.target.value,id:10*Math.random()})},n.Submit=function(t){t.preventDefault(),""===document.getElementById("input")?alert("You cannot add Empty To-do"):(document.getElementById("input").value="",n.props.addTask(n.state))},n}return Object(d.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return o.a.createElement("form",{className:"form-group my-4 ",onSubmit:this.Submit},o.a.createElement("div",{className:"input-group-lg mb-3 rounded-pill"},o.a.createElement("input",{className:"form-control rounded",placeholder:"Create a To-do",id:"input",onChange:this.Change})),o.a.createElement("button",{className:"btn btn-primary btn-lg rounded float-right",type:"submit"},"Add To-Do"))}}]),e}(a.Component),h=function(t){var e=t.todo,n=t.del;if(0!==e.length)var a=e.map((function(t){return o.a.createElement("div",{className:" list-group-item list-group-item-primary rounded-pill p-3 my-3 ",key:t.id,onClick:function(){n(t.id)}},o.a.createElement("h3",null,t.ToDo))}));else a=o.a.createElement("h1",{className:"text-primary"},"Nothing Left!!");return o.a.createElement("div",null,a)},f=function(t){function e(){var t,n;Object(l.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(s.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(o)))).state={ToDo:[]},n.Add=function(t){var e=[].concat(Object(i.a)(n.state.ToDo),[t]);n.setState({ToDo:e})},n.Del=function(t){var e=n.state.ToDo.filter((function(e){return e.id!==t}));n.setState({ToDo:e})},n}return Object(d.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return o.a.createElement("div",{className:"App container text-center"},o.a.createElement("h1",{className:"my-4 py-4 text-primary"},"To-Do List"),o.a.createElement(h,{todo:this.state.ToDo,del:this.Del}),o.a.createElement(p,{addTask:this.Add}))}}]),e}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},9:function(t,e,n){t.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.3d503f7b.chunk.js.map