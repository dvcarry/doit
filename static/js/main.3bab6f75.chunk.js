(this.webpackJsonpdo=this.webpackJsonpdo||[]).push([[0],{102:function(e,t,n){},159:function(e,t,n){},170:function(e,t,n){},171:function(e,t,n){},173:function(e,t,n){},174:function(e,t,n){},176:function(e,t){},177:function(e,t,n){},179:function(e,t,n){},180:function(e,t,n){},181:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(30),s=n.n(c),r=n(50),i=n(7),o=n(8),u=n.n(o),l=n(10),d=n(21),j=n(106),p=n(44),b=n(24),f=n(70),O={id:0,name:"",type:"\u0437\u0430\u0434\u0430\u0447\u0430",period:0,balance:"",parent:0,goal:!1,today:!1,repeat:!1,plan:"inbox",date:null,done:!1,donedate:null,action:null,repeatday:0},h=["\u0440\u0430\u0431\u043e\u0442\u0430","\u043f\u0440\u043e\u0435\u043a\u0442","\u0441\u0435\u043c\u044c\u044f","\u0437\u0434\u043e\u0440\u043e\u0432\u044c\u0435","\u0431\u044b\u0442","\u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0435","\u043e\u0442\u0434\u044b\u0445"],x="plan",v="done",k="today",m=[{eng:"today",ru:"\u0441\u0435\u0433\u043e\u0434\u043d\u044f",days:0},{eng:"tomorrow",ru:"\u0437\u0430\u0432\u0442\u0440\u0430",days:1},{eng:"aftertomorrow",ru:"\u043f\u043e\u0441\u043b\u0435\u0437\u0430\u0432\u0442\u0440\u0430",days:2}],y="new",g="project",w="task",N="day",T="failures",C=Object(f.b)({name:"tasks",initialState:{goals:[],tasks:[],projects:[],currentTask:null,isFetching:!1,modalIsOpen:!1,typeOfModal:"new",todaytasks:[],doneTasks:[],daytext:!1,error:"",breaks:0,focus:null,failures:[]},reducers:{toggleFetching:function(e){e.isFetching=!e.isFetching},setTasks:function(e,t){e.tasks=t.payload,e.isFetching=!1},setDoneTasks:function(e,t){e.doneTasks=t.payload},setDay:function(e,t){t.payload&&(e.daytext=!0,e.isFetching=!1,e.modalIsOpen=!1)},saveTask:function(e){var t=e.tasks.map((function(t){return t.id===e.currentTask.id?Object(b.a)({},e.currentTask):t}));e.tasks=t,e.isFetching=!1,e.modalIsOpen=!1},addTask:function(e,t){e.tasks=[].concat(Object(p.a)(e.tasks),[t.payload]),e.isFetching=!1,e.modalIsOpen=!1},deleteTask:function(e,t){var n=e.tasks.filter((function(t){return t.id!==e.currentTask.id}));e.tasks=n},deleteProject:function(e,t){var n=e.projects.filter((function(e){return e.id!==t.payload}));e.projects=n},setProjects:function(e,t){e.projects=t.payload},setPlan:function(e,t){e.plan=t.payload.plan,e.filtertype=t.payload.filtertype},setWeek:function(e,t){e.week=t.payload},doTask:function(e,t){var n=t.payload,a=n.id,c=(n.parent,n.type);if("\u0437\u0430\u0434\u0430\u0447\u0430"===c){var s=e.tasks.find((function(e){return e.id===a})),r=e.tasks.filter((function(e){return e.id!==a}));e.tasks=r,e.doneTasks=[].concat(Object(p.a)(e.doneTasks),[s])}else if("\u043f\u0440\u043e\u0435\u043a\u0442"===c){var i=e.projects.filter((function(e){return e.id!==a}));e.projects=i}t.payload.parent.hasParent?(e.modalIsOpen=!0,e.typeOfModal=g,e.currentTask=t.payload.parent.project):e.modalIsOpen=!1,e.breaks=e.breaks+1,e.isFetching=!1},setCurrentTask:function(e,t){e.currentTask=t.payload},setModal:function(e,t){e.modalIsOpen=!0,e.typeOfModal=t.payload.typeOfModal},openNewTask:function(e,t){e.modalIsOpen=!0,e.typeOfModal=y,e.currentTask=O},setProject:function(e,t){e.modalIsOpen=!0,e.typeOfModal=g,e.currentTask=t.payload,e.isFetching=!1},changeToProject:function(e,t){e.modalIsOpen=!0,e.typeOfModal=g,e.currentTask=t.payload;var n=e.tasks.filter((function(e){return e.id!==t.payload.id}));e.tasks=n;var a=[].concat(Object(p.a)(e.projects),[t.payload]);e.projects=a,e.isFetching=!1},setTask:function(e,t){e.modalIsOpen=!0,e.typeOfModal=w,e.currentTask=t.payload,e.isFetching=!1},changeTask:function(e,t){var n=e.tasks.map((function(e){return e.id===t.payload.id?Object(b.a)(Object(b.a)({},e),t.payload):e}));if(e.tasks=n,t.payload.donedate){var a=e.doneTasks.filter((function(e){return e.id!==t.payload.id}));e.doneTasks=a}e.isFetching=!1},closeModal:function(e){e.modalIsOpen=!1},changeCurrentTask:function(e,t){e.currentTask=Object(b.a)(Object(b.a)({},e.currentTask),t.payload);var n=e.tasks.map((function(n){return n.id===e.currentTask.id?Object(b.a)(Object(b.a)({},n),t.payload):n}));e.tasks=n,e.isFetching=!1},addSubtask:function(e,t){e.tasks=[].concat(Object(p.a)(e.tasks),[t.payload]),e.currentTask.subtasks=[].concat(Object(p.a)(e.currentTask.subtasks),[t.payload]),e.isFetching=!1},setCurrentDay:function(e,t){e.date=t.payload},setCurrentPlan:function(e,t){e.isplan=t.payload},setSearch:function(e,t){e.search=t.payload},setGoals:function(e,t){e.goals=t.payload,e.isFetching=!1},setError:function(e,t){e.error=t.payload,e.isFetching=!1},resetBreaks:function(e,t){e.breaks=0},setFocus:function(e,t){e.focus=t.payload},setFailures:function(e,t){e.failures=t.payload,e.isFetching=!1},doFailures:function(e,t){var n=e.failures.filter((function(e){return e.id!==t.payload}));console.log("\ud83d\ude80 ~ file: taskReducer.js ~ line 188 ~ newFaiilures",n),e.failures=n,0===n.length&&(e.modalIsOpen=!1),e.isFetching=!1}}}),_=C.actions,F=_.toggleFetching,M=_.setTasks,D=_.addTask,S=_.deleteTask,I=_.saveTask,Y=_.doTask,P=_.changeToProject,E=(_.setPlanTasks,_.setTodayTasks,_.setDoneTasks),K=_.setProjects,z=_.deleteProject,B=_.setProject,L=_.setCurrentTask,U=_.changeCurrentTask,A=_.addSubtask,R=_.openNewTask,G=_.setModal,H=_.closeModal,J=_.setDay,V=_.setTask,q=_.changeTask,W=_.setGoals,Q=_.setError,X=_.resetBreaks,Z=_.setFailures,$=_.doFailures,ee=_.setFocus,te=function(e){return e},ne=C.reducer,ae=n(107),ce=n.n(ae),se=n(20),re=n(41),ie=n(120),oe=n(108),ue=n.n(oe),le=n(23),de=n.n(le),je=function(e){var t=new Date;return e.filter((function(e){return de()(e.date)<=t})).sort((function(e){return e.wait?1:-1})).sort((function(e){return e.important?-1:1})).sort((function(e){return e.goal?-1:1}))},pe=ue.a.create({baseURL:"http://82.146.40.11:5002/api/"});pe.defaults.headers.common={Authorization:"Bearer ".concat(localStorage.getItem("do"))};var be=pe,fe=function(e){return function(){var t=Object(l.a)(u.a.mark((function t(n){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n(F()),t.next=4,be.put("tasks",e);case 4:n(I()),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),n(Q(t.t0.response.statusText));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},Oe=function(e){return function(){var t=Object(l.a)(u.a.mark((function t(n){var a,c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n(F()),t.next=4,be.post("tasks",e);case 4:a=t.sent,c=a.data,n(D(c)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),n(Q(t.t0.response.statusText));case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()},he=function(e,t){return function(){var n=Object(l.a)(u.a.mark((function n(a){var c,s;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("typeees",t),n.prev=1,a(F()),n.next=5,be.post("tasks/do",{id:e,type:t});case 5:c=n.sent,s=c.data,a(Y({id:e,parent:s,type:t})),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(1),a(Q(n.t0.response.statusText));case 13:case"end":return n.stop()}}),n,null,[[1,10]])})));return function(e){return n.apply(this,arguments)}}()},xe=function(e){return function(){var t=Object(l.a)(u.a.mark((function t(n){var a,c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n(F()),t.next=4,be.put("tasks/toproject",{id:e});case 4:a=t.sent,c=a.data,n(P(c)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),n(Q(t.t0.response.statusText));case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()},ve=function(e,t){return function(){var n=Object(l.a)(u.a.mark((function n(a){var c;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a(F()),c=Object(b.a)({id:e},t),n.next=5,be.put("tasks/one",c);case 5:a(U(t)),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),a(Q(n.t0.response.statusText));case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()},ke=function(e,t){return function(){var n=Object(l.a)(u.a.mark((function n(a){var c;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a(F()),n.next=4,be.post("failures",{task_id:e,description:t});case 4:c=n.sent,c.data,a($(e)),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),a(Q(n.t0.response.statusText));case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}()},me=(n(57),n(1)),ye=n(187),ge=n(188),we=(n(102),function(e){var t=e.task,n=(e.change,Object(a.useState)(t.name)),c=Object(se.a)(n,2),s=(c[0],c[1],Object(i.b)()),r="";if(t.date){var o=t.date.split("-");r=o[2]+"."+o[1]}return Object(me.jsxs)("div",{className:"subtask",onClick:function(){var e;s((e=t.id,function(){var t=Object(l.a)(u.a.mark((function t(n){var a,c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n(F()),t.next=4,be.get("tasks/"+e);case 4:a=t.sent,c=a.data,n(V(c)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),n(Q(t.t0.response.statusText));case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()))},children:[Object(me.jsx)("span",{children:t.name}),Object(me.jsx)("div",{className:"subtask_info",children:Object(me.jsx)("span",{className:"subtask_plan",children:r})})]})}),Ne=function(e){var t=e.name,n=void 0===t?"":t,c=e.close,s=e.goal,r=e.balance,o=e.parent,d=Object(a.useState)(n),j=Object(se.a)(d,2),p=j[0],f=j[1],h=Object(i.b)();return Object(me.jsx)("div",{className:"subtask",children:Object(me.jsx)("input",{className:"subtask_input",value:p,onChange:function(e){return f(e.target.value)},onKeyPress:function(e){var t;13===e.charCode&&(h((t=Object(b.a)(Object(b.a)({},O),{},{goal:s,balance:r,parent:o,name:p}),function(){var e=Object(l.a)(u.a.mark((function e(n){var a,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n(F()),e.next=4,be.post("tasks",t);case 4:a=e.sent,c=a.data,n(A(c)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),n(Q(e.t0.response.statusText));case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}())),c())},autoFocus:""===n})})},Te=n(184),Ce=(n(159),function(e){var t=e.task,n=Object(i.b)(),c=Object(a.useState)(!1),s=Object(se.a)(c,2),r=s[0],o=(s[1],Object(i.c)(te).isFetching),d=function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n(he(t.id,t.type));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(me.jsx)(me.Fragment,{children:o&&r?Object(me.jsx)(Te.a,{}):Object(me.jsx)("div",{className:"docheck",onClick:d})})}),_e=function(){return function(){var e=Object(l.a)(u.a.mark((function e(t){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(F()),e.next=4,be.get("projects");case 4:n=e.sent,a=n.data,t(K(a)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t(Q(e.t0.response.statusText));case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()},Fe=function(e){return function(){var t=Object(l.a)(u.a.mark((function t(n){var a,c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n(F()),t.next=4,be.get("projects/"+e);case 4:a=t.sent,c=a.data,n(B(c)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),n(Q(t.t0.response.statusText));case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()},Me=n(72),De=n(185),Se=(n(170),ye.a.Option),Ie=function(e){var t=e.parent,n=e.name,c=e.id,s=e.balance,r=Object(a.useState)(!1),o=Object(se.a)(r,2),d=o[0],j=o[1],p=Object(i.c)(te),b=p.projects,f=(p.isFetching,Object(i.b)()),O=function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:0===b.length&&f(_e()),j(!0);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return d?Object(me.jsx)(ye.a,{showSearch:!0,style:{width:"100%"},onChange:function(e,t){f(function(e,t){return function(){var n=Object(l.a)(u.a.mark((function n(a){return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a(F()),n.next=4,be.put("tasks/addtoproject",{id:e,parent:t});case 4:n.sent.data,n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),a(Q(n.t0.response.statusText));case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()}(c,e)),f(U({type:"parent",value:t.value})),f(U({type:"parentname",value:t.children}));var n=b.find((function(t){return t.id===e}));f(U({type:"balance",value:n.balance})),f(U({type:"goal",value:n.goal}))},filterOption:function(e,t){return t.children.toLowerCase().indexOf(e.toLowerCase())>=0},children:b.map((function(e){return Object(me.jsx)(Se,{value:e.id,children:e.name})}))}):n?Object(me.jsx)(me.Fragment,{children:Object(me.jsx)("div",{className:"parenttask",onClick:function(){f(Fe(t))},children:n})}):Object(me.jsxs)("div",{className:"parenttask",children:[Object(me.jsx)("a",{onClick:O,children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044f"}),Object(me.jsx)("a",{onClick:function(){console.log("balance",s),s&&f(xe(c))},children:"\u0421\u0434\u0435\u043b\u0430\u0442\u044c \u043f\u0440\u043e\u0435\u043a\u0442\u043e\u043c"})]})},Ye=function(){var e=Object(a.useState)(!1),t=Object(se.a)(e,2),n=t[0],c=t[1],s=Object(i.b)(),r=Object(i.c)(te).currentTask;return Object(me.jsx)("input",{className:"inputtext inputtext-name",onChange:function(e){c(!0),s(U({name:e.target.value}))},onBlur:function(){n&&s(ve(r.id,{name:r.name}))},value:r.name})},Pe=function(e){return function(){var t=Object(l.a)(u.a.mark((function t(n){var a,c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n(F()),t.next=4,be.post("days",{text:e});case 4:a=t.sent,c=a.data,n(J(c)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),n(Q(t.t0.response.statusText));case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()},Ee={content:{top:"50%",left:"50%",width:"500px",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}},Ke={project:function(){var e=ye.a.Option,t=Object(i.c)(te),n=t.currentTask,c=t.tasks,s=t.isFetching,r=Object(i.b)(),o=Object(a.useState)(!1),d=Object(se.a)(o,2),j=d[0],p=d[1],b=function(e,t){r(U({type:t,value:e}))};c.find((function(e){return e.id===n.child}));return Object(me.jsxs)("div",{children:[Object(me.jsx)("div",{children:Object(me.jsxs)("div",{className:"flex",children:[Object(me.jsx)(Ce,{task:n}),Object(me.jsx)(re.a,{className:"inputtext inputtext-name",value:n.name,onChange:function(e){r(U({type:"name",value:e.target.value}))},onKeyPress:function(e){"Enter"===e.key&&e.preventDefault()}})]})}),Object(me.jsxs)("div",{className:"input_block",children:[Object(me.jsxs)("div",{className:"input_div",children:[Object(me.jsx)("div",{children:"\u0421\u0444\u0435\u0440\u0430 \u0436\u0438\u0437\u043d\u0438"}),Object(me.jsxs)(ye.a,{onChange:function(e){return b(e,"balance")},value:n.balance,style:{width:200},size:"large",children:[Object(me.jsx)(e,{value:"\u0440\u0430\u0431\u043e\u0442\u0430",children:"\u0440\u0430\u0431\u043e\u0442\u0430"}),Object(me.jsx)(e,{value:"\u043f\u0440\u043e\u0435\u043a\u0442",children:"\u043f\u0440\u043e\u0435\u043a\u0442"}),Object(me.jsx)(e,{value:"\u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0435",children:"\u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0435"}),Object(me.jsx)(e,{value:"\u0441\u0435\u043c\u044c\u044f",children:"\u0441\u0435\u043c\u044c\u044f"}),Object(me.jsx)(e,{value:"\u0437\u0434\u043e\u0440\u043e\u0432\u044c\u0435",children:"\u0437\u0434\u043e\u0440\u043e\u0432\u044c\u0435"}),Object(me.jsx)(e,{value:"\u0431\u044b\u0442",children:"\u0431\u044b\u0442"}),Object(me.jsx)(e,{value:"\u043e\u0442\u0434\u044b\u0445",children:"\u043e\u0442\u0434\u044b\u0445"})]})]}),Object(me.jsxs)("div",{className:"input_div",children:[Object(me.jsx)("div",{children:"\u0426\u0435\u043b\u044c"}),Object(me.jsx)(ge.a,{defaultChecked:n.goal,onChange:function(e){return b(e,"goal")}})]})]}),Object(me.jsxs)("div",{className:"subtask_block",children:[Object(me.jsx)("div",{children:"\u041f\u043e\u0434\u0437\u0430\u0434\u0430\u0447\u0438"}),Object(me.jsx)("div",{onClick:function(){return p(!0)},className:"subtask_button",children:"+"})]}),n.subtasks.map((function(e,t){return Object(me.jsx)(we,{task:e,index:t},e.id)})),j?Object(me.jsx)(Ne,{close:function(){return p(!1)},goal:n.goal,balance:n.balance,parent:n.id}):null,Object(me.jsxs)("div",{className:"button_block",children:[Object(me.jsx)(ie.a,{onClick:function(){n.balance&&r(fe(n))},loading:s,children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"}),Object(me.jsx)(ie.a,{onClick:function(){var e;r((e=n.id,function(){var t=Object(l.a)(u.a.mark((function t(n){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n(F()),t.next=4,be.delete("tasks/"+e);case 4:t.sent.data,n(z(e)),n(H()),n(F()),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),n(Q(t.t0.response.statusText));case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()))},loading:s,children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]})]})},task:function(){var e=ye.a.Option,t=Object(i.c)(te),n=t.currentTask,a=t.isFetching,c=Object(i.b)(),s=function(e,t){console.log("\ud83d\ude80 ~ file: TaskForm.js ~ line 31 ~ handleChangeData ~ type",e),c(ve(n.id,Object(Me.a)({},t,e)))},r=function(e){var t=function(e){var t=m.find((function(t){return t.eng===e})).days,n=de()().add(t,"days");return de()(n).format("YYYY-MM-DD")}(e);c(ve(n.id,{date:t}))},o=Object(me.jsxs)("div",{className:"input_div",children:[Object(me.jsx)("div",{children:"\u0412\u0430\u0436\u043d\u043e"}),Object(me.jsx)(ge.a,{defaultChecked:n.important,onChange:function(e){return s(e,"important")}})]}),d=Object(me.jsxs)("div",{className:"input_div",children:[Object(me.jsx)("div",{children:"\u0416\u0434\u0443"}),Object(me.jsx)(ge.a,{defaultChecked:n.wait,onChange:function(e){return s(e,"wait")}})]}),j=Object(me.jsxs)("div",{className:"input_div",children:[Object(me.jsx)("div",{children:"\u0414\u0430\u0442\u0430"}),Object(me.jsx)(De.a,{value:n.date?de()(n.date):null,onChange:function(e,t){c(ve(n.id,{date:t}))},style:{width:200},size:"large",placeholder:""}),Object(me.jsx)("div",{children:m.map((function(e){return Object(me.jsx)("span",{className:"date_constant",onClick:function(){return r(e.eng)},children:e.ru},e.eng)}))})]}),p=Object(me.jsxs)("div",{className:"input_div",children:[Object(me.jsx)("div",{children:"\u0421\u0444\u0435\u0440\u0430 \u0436\u0438\u0437\u043d\u0438"}),Object(me.jsxs)(ye.a,{onChange:function(e){return s(e,"balance")},value:n.balance,style:{width:200},size:"large",children:[Object(me.jsx)(e,{value:"\u0440\u0430\u0431\u043e\u0442\u0430",children:"\u0440\u0430\u0431\u043e\u0442\u0430"}),Object(me.jsx)(e,{value:"\u043f\u0440\u043e\u0435\u043a\u0442",children:"\u043f\u0440\u043e\u0435\u043a\u0442"}),Object(me.jsx)(e,{value:"\u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0435",children:"\u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0435"}),Object(me.jsx)(e,{value:"\u0441\u0435\u043c\u044c\u044f",children:"\u0441\u0435\u043c\u044c\u044f"}),Object(me.jsx)(e,{value:"\u0437\u0434\u043e\u0440\u043e\u0432\u044c\u0435",children:"\u0437\u0434\u043e\u0440\u043e\u0432\u044c\u0435"}),Object(me.jsx)(e,{value:"\u0431\u044b\u0442",children:"\u0431\u044b\u0442"}),Object(me.jsx)(e,{value:"\u043e\u0442\u0434\u044b\u0445",children:"\u043e\u0442\u0434\u044b\u0445"})]})]}),b=Object(me.jsxs)("div",{className:"input_block",children:[j,Object(me.jsxs)("div",{className:"input_block",children:[o,d]})]}),f=Object(me.jsxs)(me.Fragment,{children:[Object(me.jsxs)("div",{className:"input_block",children:[p,Object(me.jsxs)("div",{className:"input_block",children:[o,d]})]}),j]});return Object(me.jsxs)("div",{children:[Object(me.jsx)(Ie,{name:n.parentname,parent:n.parentid,id:n.id,balance:n.balance}),Object(me.jsx)("div",{children:Object(me.jsxs)("div",{className:"flex",children:[Object(me.jsx)(Ce,{task:n}),Object(me.jsx)(Ye,{})]})}),n.parentid?b:f,Object(me.jsxs)("div",{className:"button_block",children:[Object(me.jsx)(ie.a,{onClick:function(){(n.balance||0!==n.child)&&c(fe(n))},loading:a,children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"}),Object(me.jsx)(ie.a,{onClick:function(){var e,t;c((e=n.id,t=n.parent,function(){var n=Object(l.a)(u.a.mark((function n(a){var c,s;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a(F()),n.next=4,be.delete("tasks/"+e);case 4:if(a(S(e)),!t){n.next=13;break}return n.next=8,be.get("projects/"+t);case 8:c=n.sent,s=c.data,a(B(s)),n.next=15;break;case 13:a(H()),a(F());case 15:n.next=20;break;case 17:n.prev=17,n.t0=n.catch(0),a(Q(n.t0.response.statusText));case 20:case"end":return n.stop()}}),n,null,[[0,17]])})));return function(e){return n.apply(this,arguments)}}()))},loading:a,children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]})]})},new:function(){var e=Object(a.useState)(""),t=Object(se.a)(e,2),n=t[0],c=t[1],s=Object(i.c)(te),r=s.currentTask,o=s.isFetching,u=Object(i.b)();return Object(me.jsxs)("div",{onKeyPress:function(e){13===e.charCode&&(e.preventDefault(),""!==n&&u(Oe(Object(b.a)(Object(b.a)({},r),{},{name:n}))))},children:[Object(me.jsx)(re.a,{value:n,className:"inputtext inputtext-name",onChange:function(e){return c(e.target.value)},autoFocus:!0}),Object(me.jsx)("div",{className:"button_block",children:Object(me.jsx)(ie.a,{onClick:function(){""!==n&&u(Oe(Object(b.a)(Object(b.a)({},r),{},{name:n})))},loading:o,children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})})]})},day:function(){var e=Object(a.useState)(""),t=Object(se.a)(e,2),n=t[0],c=t[1],s=Object(i.c)(te),r=(s.currentTask,s.isFetching),o=Object(i.b)();return Object(me.jsxs)("div",{onKeyPress:function(e){13===e.charCode&&e.ctrlKey&&""!==n&&o(Pe(n))},children:[Object(me.jsx)(re.a,{value:n,className:"inputtext inputtext-day",onChange:function(e){return c(e.target.value)},autoFocus:!0}),Object(me.jsx)("div",{className:"button_block",children:Object(me.jsx)(ie.a,{onClick:function(){""!==n&&o(Pe(n))},loading:r,children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})})]})},failures:function(){var e=Object(a.useState)(""),t=Object(se.a)(e,2),n=t[0],c=t[1],s=Object(i.c)(te),r=s.failures,o=s.isFetching,u=Object(i.b)();return Object(me.jsxs)("div",{onKeyPress:function(e){13===e.charCode&&e.ctrlKey&&""!==n&&u(ke(r[0].id,n))},children:["\u041f\u043e\u0447\u0435\u043c\u0443 \u043d\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u043b \u0437\u0430\u0434\u0430\u0447\u0443",Object(me.jsx)("h2",{children:r[0]&&r[0].name}),Object(me.jsx)(re.a,{value:n,className:"inputtext inputtext-day",onChange:function(e){return c(e.target.value)},autoFocus:!0}),Object(me.jsx)("div",{className:"button_block",children:Object(me.jsx)(ie.a,{onClick:function(){""!==n&&u(ke(r[0].id,n))},loading:o,children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})})]})}},ze=function(){var e=Object(i.c)(te),t=e.modalIsOpen,n=e.typeOfModal,a=Object(i.b)(),c=Ke[n];return Object(me.jsx)(ce.a,{isOpen:t,onRequestClose:function(){return a(H())},ariaHideApp:!1,style:Ee,children:Object(me.jsx)(c,{})})},Be=(n(171),function(){var e=Object(i.c)(te).daytext,t=Object(i.b)();return Object(me.jsx)("div",{className:"mainheader",children:Object(me.jsxs)("div",{children:[Object(me.jsx)(r.b,{className:"mainheader_item",to:"/goals",children:"\u0426\u0435\u043b\u0438"}),Object(me.jsx)(r.b,{className:"mainheader_item",to:"/projects",children:"\u041f\u0440\u043e\u0435\u043a\u0442\u044b"}),Object(me.jsx)(r.b,{className:"mainheader_item",to:"/tasks",children:"\u041e\u0431\u0449\u0435\u0435 \u043f\u043b\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435"}),Object(me.jsx)(r.b,{className:"mainheader_item",to:"/today",children:"\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435"}),e?null:Object(me.jsx)("span",{onClick:function(){t(G({typeOfModal:N}))},className:"dayinform",children:"\u0412\u0441\u0442\u0443\u043f\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u0441\u043b\u043e\u0432\u043e"}),Object(me.jsx)("span",{})]})})}),Le=(n(173),function(e){var t=e.important,n=(e.date,e.wait),a=["action"];return t&&a.push("important"),n&&a.push("wait"),Object(me.jsx)("div",{className:a.join(" ")})}),Ue=(n(174),function(e){var t=e.value,n=e.type,a=Object(i.b)(),c=["task"];n===v&&c.push("task-done");var s=["task_name"];t.goal&&s.push("task_goal");var r=de()().diff(de()(t.date,"YYYY-MM-DD"),"days");return Object(me.jsxs)("div",{className:c.join(" "),children:[Object(me.jsxs)("div",{className:"task_left",children:[Object(me.jsxs)("div",{className:"task_tools",children:[Object(me.jsx)(Le,{important:t.important||t.goal,date:t.date,wait:t.wait}),Object(me.jsx)(Ce,{task:t})]}),Object(me.jsxs)("div",{className:"task_name",onClick:function(){a(G({typeOfModal:"task"})),a(L(t))},children:[Object(me.jsx)("span",{className:s.join(" "),children:t.name}),t.parentname?Object(me.jsx)("span",{className:"task_children",children:"<  ".concat(t.parentname)}):t.isparent?Object(me.jsx)("span",{className:"task_children",children:" >"}):null]})]}),Object(me.jsxs)("div",{className:"task_right",children:[Object(me.jsx)("span",{className:r?"task_tag task-overdue":"task_tag",children:!!r&&r}),"today"===n&&Object(me.jsx)("span",{className:"task_tag task-focus",onClick:function(){a(ee(t.id))},children:"\u0444\u043e\u043a\u0443\u0441"}),"done"===n&&Object(me.jsx)("span",{className:"task_tag task-focus",onClick:function(){var e,n,c=de()(t.donedate,"YYYY-MM-DD").subtract(1,"d").format("YYYY-MM-DD");a((e=t.id,n={donedate:c},function(){var t=Object(l.a)(u.a.mark((function t(a){var c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a(F()),c=Object(b.a)({id:e},n),t.next=5,be.put("tasks/one",c);case 5:a(q(c)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),a(Q(t.t0.response.statusText));case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()))},children:"\u0432\u0447\u0435\u0440\u0430"})]})]})}),Ae=n(186),Re=function(e){e.breaks;var t=Object(i.b)();return Object(me.jsx)("div",{className:"block",children:Object(me.jsx)(Ae.a,{message:"\u0421\u0434\u0435\u043b\u0430\u0439 \u043d\u0435\u0431\u043e\u043b\u044c\u0448\u043e\u0439 \u043f\u0435\u0440\u0435\u0440\u044b\u0432 \u0438 \u0432\u044b\u043a\u043b\u044e\u0447\u0438 \u0433\u043e\u043b\u043e\u0432\u0443",type:"warning",showIcon:!0,action:Object(me.jsx)(ie.a,{size:"small",type:"text",onClick:function(){t(X())},children:"\u0413\u043e\u0442\u043e\u0432\u043e"})})})},Ge=function(){var e=Object(i.c)(te),t=(e.tasks,e.breaks,e.failures),n=Object(i.b)();return Object(me.jsx)("div",{children:t.length>0&&Object(me.jsx)("div",{className:"block",onClick:function(){n(G({typeOfModal:T}))},children:Object(me.jsx)(Ae.a,{message:"\u041f\u0420\u041e\u0421\u0420\u041e\u0427\u0415\u041d\u041d\u042b\u0415 \u0417\u0410\u0414\u0410\u0427\u0418",description:"\u041e\u0431\u044a\u044f\u0441\u043d\u0438, \u043f\u043e\u0447\u0435\u043c\u0443 \u0442\u044b \u043d\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u043b \u0437\u0430\u0434\u0430\u0447\u0438. \u042d\u0442\u043e \u043e\u0447\u0435\u043d\u044c \u0432\u0430\u0436\u043d\u043e.",type:"error",showIcon:!0})})})},He=function(){var e=Object(i.c)(te),t=e.tasks,n=e.breaks,a=(e.failures,function(e){for(var t=[],n=1;n<e;n++){var a=de()().add(n,"days"),c={raw:a.format("YYYY-MM-DD"),show:a.format("DD.MM dddd")};t.push(c)}return t}(14)),c=je(t),s=t.filter((function(e){return!e.date&&!e.parent})),r=t.filter((function(e){return e.date}));return Object(me.jsxs)(me.Fragment,{children:[n>0&&Object(me.jsx)(Re,{breaks:n}),Object(me.jsx)(Ge,{}),s.length>0?Object(me.jsxs)("div",{className:"block",children:[Object(me.jsx)("h3",{children:"\u0418\u043d\u0431\u043e\u043a\u0441"}),s.map((function(e,t){return Object(me.jsx)(Ue,{index:t,value:e,type:x},e.id)}))]}):null,Object(me.jsxs)("div",{className:"block",children:[Object(me.jsx)("h3",{children:"\u0421\u0415\u0413\u041e\u0414\u041d\u042f"}),c.map((function(e,t){return Object(me.jsx)(Ue,{index:t,value:e,type:x},e.id)}))]}),a.map((function(e,t){var n=r.filter((function(t){return t.date===e.raw}));return Object(me.jsxs)("div",{className:"block",children:[Object(me.jsx)("h3",{children:e.show}),n.map((function(e,t){return Object(me.jsx)(Ue,{index:t,value:e,type:x},e.id)}))]},t)}))]})},Je=function(e){var t=e.value,n=(e.type,e.childname),a=e.childdate,c=Object(i.b)(),s=(new Date,Object(i.c)(te).filtertype,function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c(Fe(t.id));case 2:e.sent;case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()),r=["task_name"];return t.goal&&r.push("task_goal"),Object(me.jsxs)("div",{className:"task",onClick:s,children:[Object(me.jsxs)("div",{className:"task_left",children:[Object(me.jsx)("div",{className:"task_tools",children:Object(me.jsx)(Le,{type:t.action})}),Object(me.jsx)("div",{className:"task_name",children:Object(me.jsx)("span",{className:r.join(" "),children:t.name})}),n?Object(me.jsx)("span",{className:"task_children",children:" > ".concat(n)}):null]}),Object(me.jsx)("div",{className:"task_right",children:Object(me.jsx)("div",{children:Object(me.jsx)("span",{className:"task_tag",children:a})})})]})},Ve=function(){var e=Object(a.useState)(h[0]),t=Object(se.a)(e,2),n=t[0],c=t[1],s=Object(i.c)(te).projects,r=function(e){c(e.target.textContent.toLowerCase())},o=s.filter((function(e){return e.balance===n}));return Object(me.jsxs)("div",{children:[Object(me.jsx)("div",{className:"block",children:h.map((function(e){return Object(me.jsx)("span",{className:"nav".concat(n===e?" nav-active":""),onClick:r,children:e.toUpperCase()},e)}))}),o.map((function(e){return Object(me.jsx)(Je,{value:e,childname:e.childname,childdate:e.childdate},e.id)}))]})},qe=(n(175),"\u0432\u0441\u0435"),We=function(){var e=Object(a.useState)(qe),t=Object(se.a)(e,2),n=t[0],c=t[1],s=Object(i.c)(te),r=s.tasks,o=s.doneTasks,u=s.focus,l=s.breaks,d=je(r),j=d.find((function(e){return e.id===u})),b=function(e){c(e.target.textContent.toLowerCase())},f=Object(p.a)(new Set(d.map((function(e){return e.balance})))),O=[qe].concat(Object(p.a)(f)),h=n===qe?d:d.filter((function(e){return e.balance===n})),m=n===qe?o:o.filter((function(e){return e.balance===n}));return Object(me.jsxs)("div",{children:[l>0&&Object(me.jsx)(Re,{breaks:l}),j?Object(me.jsxs)("div",{className:"block",children:[Object(me.jsx)("h3",{children:"\u0424\u041e\u041a\u0423\u0421"}),Object(me.jsx)(Ue,{value:j,type:x})]}):Object(me.jsx)("div",{className:"block",children:Object(me.jsx)(Ae.a,{message:"\u0412\u044b\u0431\u0435\u0440\u0438 \u0444\u043e\u043a\u0443\u0441\u043d\u0443\u044e \u0437\u0430\u0434\u0430\u0447\u0443",type:"info",showIcon:!0})}),Object(me.jsx)("div",{className:"block",children:O.map((function(e){return Object(me.jsx)("span",{className:"nav".concat(n===e?" nav-active":""),onClick:b,children:e.toUpperCase()},e)}))}),Object(me.jsx)("div",{className:"block",children:h.map((function(e,t){return Object(me.jsx)(Ue,{index:t,value:e,type:k},e.id)}))}),m.length>0?Object(me.jsxs)("div",{className:"block",children:[Object(me.jsx)("h3",{children:"\u0412\u042b\u041f\u041e\u041b\u041d\u0415\u041d\u041e"}),o.map((function(e,t){return Object(me.jsx)(Ue,{index:t,value:e,type:v},e.id)}))]}):null]})},Qe=(n(176),n(177),function(e){var t=e.name,n=e.description;e.balance,Object(i.b)(),Object(i.c)(te).filtertype;return Object(me.jsxs)("div",{className:"goal",children:[Object(me.jsx)("div",{className:"goal_name",children:t}),Object(me.jsx)("div",{className:"goal_description",children:n})]})}),Xe=function(){var e=Object(i.c)(te).goals;return Object(me.jsx)("div",{children:e.map((function(e){return Object(me.jsx)(Qe,{name:e.name,description:e.description},e.id)}))})},Ze=(n(178),n(179),function(){var e=Object(a.useState)(null),t=Object(se.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(!0),r=Object(se.a)(s,2),i=r[0],o=r[1];console.log("\ud83d\ude80 ~ file: Token.js ~ line 8 ~ Token ~ isAuth",i);return Object(a.useEffect)((function(){localStorage.getItem("do")&&o(!0)}),[]),i?null:Object(me.jsxs)("div",{children:[Object(me.jsx)("input",{onChange:function(e){c(e.target.value)}}),Object(me.jsx)("button",{onClick:function(){localStorage.setItem("do",n)},children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})});var $e=function(){var e=Object(i.c)(te).error,t=Object(i.b)(),n={MOVE_UP:function(e){return t(R())}},c=function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(function(){var e=Object(l.a)(u.a.mark((function e(t){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(F()),e.next=4,be.get("days");case 4:n=e.sent,a=n.data,t(J(a)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t(Q(e.t0.response.statusText));case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}());case 2:return e.next=4,t(function(){var e=Object(l.a)(u.a.mark((function e(t){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(F()),e.next=4,be.get("tasks");case 4:n=e.sent,a=n.data,t(M(a)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t(Q(e.t0.response.statusText));case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}());case 4:return e.next=6,t(function(){var e=Object(l.a)(u.a.mark((function e(t){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(F()),e.next=4,be.get("tasks/done");case 4:n=e.sent,a=n.data,t(E(a)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t(Q(e.t0.response.statusText));case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}());case 6:return e.next=8,t(_e());case 8:return e.next=10,t(function(){var e=Object(l.a)(u.a.mark((function e(t){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(F()),e.next=4,be.get("goals");case 4:n=e.sent,a=n.data,t(W(a)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t(Q(e.t0.response.statusText));case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}());case 10:return e.next=12,t(function(){var e=Object(l.a)(u.a.mark((function e(t){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(F()),e.next=4,be.get("failures");case 4:n=e.sent,a=n.data,t(Z(a)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t(Q(e.t0.response.statusText));case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}());case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){c()}),[]),e?Object(me.jsx)("div",{children:e}):Object(me.jsx)(j.GlobalHotKeys,{keyMap:{MOVE_UP:"ctrl+enter"},handlers:n,children:Object(me.jsx)("div",{className:"App",children:Object(me.jsxs)("div",{className:"wrapper",children:[Object(me.jsx)(Ze,{}),Object(me.jsx)(Be,{}),Object(me.jsxs)(d.c,{children:[Object(me.jsx)(d.a,{exact:!0,path:"/",component:He}),Object(me.jsx)(d.a,{exact:!0,path:"/goals",component:Xe}),Object(me.jsx)(d.a,{exact:!0,path:"/tasks",component:He}),Object(me.jsx)(d.a,{exact:!0,path:"/today",component:We}),Object(me.jsx)(d.a,{exact:!0,path:"/projects",component:Ve})]}),Object(me.jsx)(ze,{})]})})})},et=Object(f.a)({reducer:ne,middleware:Object(f.c)(),devTools:!1});n(180);s.a.render(Object(me.jsx)(r.a,{children:Object(me.jsx)(i.a,{store:et,children:Object(me.jsx)($e,{})})}),document.getElementById("root"))},57:function(e,t,n){}},[[181,1,2]]]);
//# sourceMappingURL=main.3bab6f75.chunk.js.map