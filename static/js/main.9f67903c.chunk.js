(this.webpackJsonpdo=this.webpackJsonpdo||[]).push([[0],{102:function(e,t,n){},159:function(e,t,n){},170:function(e,t,n){},171:function(e,t,n){},173:function(e,t,n){},174:function(e,t,n){},176:function(e,t){},177:function(e,t,n){},179:function(e,t,n){},180:function(e,t,n){},181:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(29),s=n.n(c),r=n(41),i=n(7),o=n(9),u=n.n(o),l=n(15),d=n(20),j=n(106),p=n(66),b=n(70),h=n(30),O=n(69),f={id:0,name:"",type:"\u0437\u0430\u0434\u0430\u0447\u0430",period:0,balance:"",parent:0,goal:!1,today:!1,repeat:!1,plan:"inbox",date:null,done:!1,donedate:null,action:null,repeatday:0},x=["\u0440\u0430\u0431\u043e\u0442\u0430","\u043f\u0440\u043e\u0435\u043a\u0442","\u0441\u0435\u043c\u044c\u044f","\u0437\u0434\u043e\u0440\u043e\u0432\u044c\u0435","\u0431\u044b\u0442","\u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0435","\u043e\u0442\u0434\u044b\u0445"],v="plan",k="done",m=[{eng:"today",ru:"\u0441\u0435\u0433\u043e\u0434\u043d\u044f",days:0},{eng:"tomorrow",ru:"\u0437\u0430\u0432\u0442\u0440\u0430",days:1},{eng:"aftertomorrow",ru:"\u043f\u043e\u0441\u043b\u0435\u0437\u0430\u0432\u0442\u0440\u0430",days:2}],y="new",g="project",N="task",w="day",T=Object(O.b)({name:"tasks",initialState:{goals:[],tasks:[],projects:[],currentTask:null,isFetching:!1,modalIsOpen:!1,typeOfModal:"new",todaytasks:[],doneTasks:[],daytext:!1,error:""},reducers:{toggleFetching:function(e){e.isFetching=!e.isFetching},setTasks:function(e,t){e.tasks=t.payload,e.isFetching=!1},setDoneTasks:function(e,t){e.doneTasks=t.payload},setDay:function(e,t){t.payload&&(e.daytext=!0,e.isFetching=!1,e.modalIsOpen=!1)},saveTask:function(e){var t=e.tasks.map((function(t){return t.id===e.currentTask.id?Object(h.a)({},e.currentTask):t}));e.tasks=t,e.isFetching=!1,e.modalIsOpen=!1},addTask:function(e,t){e.tasks=[].concat(Object(b.a)(e.tasks),[t.payload]),e.isFetching=!1,e.modalIsOpen=!1},deleteTask:function(e,t){var n=e.tasks.filter((function(t){return t.id!==e.currentTask.id}));e.tasks=n},deleteProject:function(e,t){var n=e.projects.filter((function(e){return e.id!==t.payload}));e.projects=n},setProjects:function(e,t){e.projects=t.payload},setPlan:function(e,t){e.plan=t.payload.plan,e.filtertype=t.payload.filtertype},setWeek:function(e,t){e.week=t.payload},doTask:function(e,t){var n=t.payload,a=n.id,c=(n.parent,e.tasks.find((function(e){return e.id===a}))),s=e.tasks.filter((function(e){return e.id!==a}));e.tasks=s,e.doneTasks=[].concat(Object(b.a)(e.doneTasks),[c]),t.payload.parent.hasParent?(e.modalIsOpen=!0,e.typeOfModal=g,e.currentTask=t.payload.parent.project):e.modalIsOpen=!1,e.isFetching=!1},setCurrentTask:function(e,t){e.currentTask=t.payload},setModal:function(e,t){e.modalIsOpen=!0,e.typeOfModal=t.payload.typeOfModal},openNewTask:function(e,t){e.modalIsOpen=!0,e.typeOfModal=y,e.currentTask=f},setProject:function(e,t){e.modalIsOpen=!0,e.typeOfModal=g,e.currentTask=t.payload,e.isFetching=!1},setTask:function(e,t){e.modalIsOpen=!0,e.typeOfModal=N,e.currentTask=t.payload,e.isFetching=!1},closeModal:function(e){e.modalIsOpen=!1},changeCurrentTask:function(e,t){e.currentTask=Object(h.a)(Object(h.a)({},e.currentTask),{},Object(p.a)({},t.payload.type,t.payload.value));var n=e.tasks.map((function(n){return n.id===e.currentTask.id?Object(h.a)(Object(h.a)({},n),{},Object(p.a)({},t.payload.type,t.payload.value)):n}));e.tasks=n},addSubtask:function(e,t){e.tasks=[].concat(Object(b.a)(e.tasks),[t.payload]),e.currentTask.subtasks=[].concat(Object(b.a)(e.currentTask.subtasks),[t.payload]),e.isFetching=!1},setCurrentDay:function(e,t){e.date=t.payload},setCurrentPlan:function(e,t){e.isplan=t.payload},setSearch:function(e,t){e.search=t.payload},setGoals:function(e,t){e.goals=t.payload,e.isFetching=!1},setError:function(e,t){e.error=t.payload,e.isFetching=!1}}}),_=T.actions,C=_.toggleFetching,F=_.setTasks,M=_.addTask,D=_.deleteTask,P=_.saveTask,I=_.doTask,S=(_.setPlanTasks,_.setTodayTasks,_.setDoneTasks),Y=_.setProjects,E=(_.deleteProject,_.setProject),K=_.setCurrentTask,z=_.changeCurrentTask,G=_.addSubtask,L=_.openNewTask,U=_.setModal,A=_.closeModal,R=_.setDay,B=_.setTask,H=_.setGoals,J=_.setError,V=function(e){return e},q=T.reducer,W=n(107),Q=n.n(W),X=n(27),Z=n(47),$=n(120),ee=n(108),te=n.n(ee),ne=n(22),ae=n.n(ne),ce=function(e){var t=new Date;return e.filter((function(e){return ae()(e.date)<=t})).sort((function(e){return e.important?-1:1})).sort((function(e){return e.goal?-1:1}))},se=te.a.create({baseURL:"http://82.146.40.11:5002/api/"});se.defaults.headers.common={Authorization:"Bearer ".concat(localStorage.getItem("do"))};var re=se,ie=function(e){return function(){var t=Object(l.a)(u.a.mark((function t(n){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n(C()),t.next=4,re.put("tasks",e);case 4:n(P()),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),n(J(t.t0.response.statusText));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},oe=function(e){return function(){var t=Object(l.a)(u.a.mark((function t(n){var a,c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n(C()),t.next=4,re.post("tasks",e);case 4:a=t.sent,c=a.data,n(M(c)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),n(J(t.t0.response.statusText));case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()},ue=function(e){return function(){var t=Object(l.a)(u.a.mark((function t(n){var a,c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n(C()),t.next=4,re.post("tasks/do",{id:e});case 4:a=t.sent,c=a.data,n(I({id:e,parent:c})),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),n(J(t.t0.response.statusText));case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()},le=(n(64),n(1)),de=n(186),je=n(188),pe=(n(102),function(e){var t=e.task,n=(e.change,Object(a.useState)(t.name)),c=Object(X.a)(n,2),s=(c[0],c[1],Object(i.b)()),r="";if(t.date){var o=t.date.split("-");r=o[2]+"."+o[1]}return Object(le.jsxs)("div",{className:"subtask",onClick:function(){var e;s((e=t.id,function(){var t=Object(l.a)(u.a.mark((function t(n){var a,c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n(C()),t.next=4,re.get("tasks/"+e);case 4:a=t.sent,c=a.data,n(B(c)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),n(J(t.t0.response.statusText));case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()))},children:[Object(le.jsx)("span",{children:t.name}),Object(le.jsx)("div",{className:"subtask_info",children:Object(le.jsx)("span",{className:"subtask_plan",children:r})})]})}),be=function(e){var t=e.name,n=void 0===t?"":t,c=e.close,s=e.goal,r=e.balance,o=e.parent,d=Object(a.useState)(n),j=Object(X.a)(d,2),p=j[0],b=j[1],O=Object(i.b)();return Object(le.jsx)("div",{className:"subtask",children:Object(le.jsx)("input",{className:"subtask_input",value:p,onChange:function(e){return b(e.target.value)},onKeyPress:function(e){var t;13===e.charCode&&(O((t=Object(h.a)(Object(h.a)({},f),{},{goal:s,balance:r,parent:o,name:p}),function(){var e=Object(l.a)(u.a.mark((function e(n){var a,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n(C()),e.next=4,re.post("tasks",t);case 4:a=e.sent,c=a.data,n(G(c)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),n(J(e.t0.response.statusText));case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}())),c())},autoFocus:""===n})})},he=n(184),Oe=(n(159),function(e){var t=e.task,n=Object(i.b)(),c=Object(a.useState)(!1),s=Object(X.a)(c,2),r=s[0],o=(s[1],Object(i.c)(V).isFetching),d=function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n(ue(t.id));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(le.jsx)(le.Fragment,{children:o&&r?Object(le.jsx)(he.a,{}):Object(le.jsx)("div",{className:"docheck",onClick:d})})}),fe=function(){return function(){var e=Object(l.a)(u.a.mark((function e(t){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(C()),e.next=4,re.get("projects");case 4:n=e.sent,a=n.data,t(Y(a)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t(J(e.t0.response.statusText));case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()},xe=function(e){return function(){var t=Object(l.a)(u.a.mark((function t(n){var a,c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n(C()),t.next=4,re.get("projects/"+e);case 4:a=t.sent,c=a.data,n(E(c)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),n(J(t.t0.response.statusText));case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()},ve=n(185),ke=n(187),me=(n(170),function(e){var t=e.id,n=e.name,c=Object(a.useState)(!1),s=Object(X.a)(c,2),r=s[0],o=s[1],d=Object(i.c)(V),j=d.projects,p=(d.isFetching,Object(i.b)()),b=function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:0===j.length&&p(fe()),o(!0);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=de.a.Option;return r?Object(le.jsx)(de.a,{showSearch:!0,style:{width:"100%"},onChange:function(e,t){p(z({type:"parent",value:t.value})),p(z({type:"parentname",value:t.children}));var n=j.find((function(t){return t.id===e}));p(z({type:"balance",value:n.balance})),p(z({type:"goal",value:n.goal}))},filterOption:function(e,t){return t.children.toLowerCase().indexOf(e.toLowerCase())>=0},children:j.map((function(e){return Object(le.jsx)(h,{value:e.id,children:e.name})}))}):n?Object(le.jsx)(le.Fragment,{children:Object(le.jsx)("div",{className:"parenttask",onClick:function(){p(xe(t))},children:n})}):Object(le.jsx)("a",{onClick:b,children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044f"})}),ye=function(e){return function(){var t=Object(l.a)(u.a.mark((function t(n){var a,c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n(C()),t.next=4,re.post("days",{text:e});case 4:a=t.sent,c=a.data,n(R(c)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),n(J(t.t0.response.statusText));case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()},ge={content:{top:"50%",left:"50%",width:"500px",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}},Ne={project:function(){var e=de.a.Option,t=Object(i.c)(V),n=t.currentTask,c=t.tasks,s=t.isFetching,r=Object(i.b)(),o=Object(a.useState)(!1),d=Object(X.a)(o,2),j=d[0],p=d[1],b=function(e,t){r(z({type:t,value:e}))};c.find((function(e){return e.id===n.child}));return Object(le.jsxs)("div",{children:[Object(le.jsx)("div",{children:Object(le.jsxs)("div",{className:"flex",children:[Object(le.jsx)(Oe,{task:n}),Object(le.jsx)(Z.a,{className:"inputtext inputtext-name",value:n.name,onChange:function(e){r(z({type:"name",value:e.target.value}))},onKeyPress:function(e){"Enter"===e.key&&e.preventDefault()}})]})}),Object(le.jsxs)("div",{className:"input_block",children:[Object(le.jsxs)("div",{className:"input_div",children:[Object(le.jsx)("div",{children:"\u0421\u0444\u0435\u0440\u0430 \u0436\u0438\u0437\u043d\u0438"}),Object(le.jsxs)(de.a,{onChange:function(e){return b(e,"balance")},value:n.balance,style:{width:200},size:"large",children:[Object(le.jsx)(e,{value:"\u0440\u0430\u0431\u043e\u0442\u0430",children:"\u0440\u0430\u0431\u043e\u0442\u0430"}),Object(le.jsx)(e,{value:"\u043f\u0440\u043e\u0435\u043a\u0442",children:"\u043f\u0440\u043e\u0435\u043a\u0442"}),Object(le.jsx)(e,{value:"\u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0435",children:"\u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0435"}),Object(le.jsx)(e,{value:"\u0441\u0435\u043c\u044c\u044f",children:"\u0441\u0435\u043c\u044c\u044f"}),Object(le.jsx)(e,{value:"\u0437\u0434\u043e\u0440\u043e\u0432\u044c\u0435",children:"\u0437\u0434\u043e\u0440\u043e\u0432\u044c\u0435"}),Object(le.jsx)(e,{value:"\u0431\u044b\u0442",children:"\u0431\u044b\u0442"}),Object(le.jsx)(e,{value:"\u043e\u0442\u0434\u044b\u0445",children:"\u043e\u0442\u0434\u044b\u0445"})]})]}),Object(le.jsxs)("div",{className:"input_div",children:[Object(le.jsx)("div",{children:"\u0426\u0435\u043b\u044c"}),Object(le.jsx)(je.a,{defaultChecked:n.goal,onChange:function(e){return b(e,"goal")}})]})]}),Object(le.jsxs)("div",{className:"subtask_block",children:[Object(le.jsx)("div",{children:"\u041f\u043e\u0434\u0437\u0430\u0434\u0430\u0447\u0438"}),Object(le.jsx)("div",{onClick:function(){return p(!0)},className:"subtask_button",children:"+"})]}),n.subtasks.map((function(e,t){return Object(le.jsx)(pe,{task:e,index:t},e.id)})),j?Object(le.jsx)(be,{close:function(){return p(!1)},goal:n.goal,balance:n.balance,parent:n.id}):null,Object(le.jsxs)("div",{className:"button_block",children:[Object(le.jsx)($.a,{onClick:function(){n.balance&&r(ie(n))},loading:s,children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"}),Object(le.jsx)($.a,{onClick:function(){var e;r((e=n.id,function(){var t=Object(l.a)(u.a.mark((function t(n){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n(C()),t.next=4,re.delete("projects/"+e);case 4:t.sent.data,t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),n(J(t.t0.response.statusText));case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()))},loading:s,children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]})]})},task:function(){var e=de.a.Option,t=Object(i.c)(V),n=t.currentTask,a=t.isFetching,c=Object(i.b)(),s=function(e,t){e.target?c(z({type:t,value:e.target.value})):c(z({type:t,value:e}))},r=function(e,t){c(z({type:"date",value:t}))},o=function(e){var t=function(e){var t=m.find((function(t){return t.eng===e})).days,n=ae()().add(t,"days");return ae()(n).format("YYYY-MM-DD")}(e);c(z({type:"date",value:t}))};return Object(le.jsxs)("div",{children:[Object(le.jsx)(me,{name:n.parentname,id:n.parentid}),Object(le.jsx)("div",{children:Object(le.jsxs)("div",{className:"flex",children:[Object(le.jsx)(Oe,{task:n}),Object(le.jsx)(Z.a,{className:"inputtext inputtext-name",value:n.name,onChange:function(e){z("name",e.target.value),c(z({type:"name",value:e.target.value}))}})]})}),n.date?Object(le.jsxs)("div",{className:"input_block",children:[Object(le.jsxs)("div",{className:"input_div",children:[Object(le.jsx)("div",{children:"\u0414\u0430\u0442\u0430"}),Object(le.jsx)(ve.a,{value:n.date?ae()(n.date):null,onChange:r,style:{width:200},size:"large"}),Object(le.jsx)("div",{children:m.map((function(e){return Object(le.jsx)("span",{className:"date_constant",onClick:function(){return o(e.eng)},children:e.ru},e.eng)}))})]}),Object(le.jsxs)("div",{className:"input_div",children:[Object(le.jsx)("div",{children:"\u0412\u0430\u0436\u043d\u043e"}),Object(le.jsx)(je.a,{defaultChecked:n.important,onChange:function(e){return s(e,"important")}})]})]}):Object(le.jsxs)(le.Fragment,{children:[Object(le.jsxs)("div",{className:"input_block",children:[Object(le.jsxs)("div",{className:"input_div",children:[Object(le.jsx)("div",{children:"\u0422\u0438\u043f \u0437\u0430\u0434\u0430\u0447\u0438"}),Object(le.jsxs)(ke.a.Group,{onChange:function(e){return s(e,"type")},value:n.type,children:[Object(le.jsx)(ke.a,{value:"\u0437\u0430\u0434\u0430\u0447\u0430",children:"\u0437\u0430\u0434\u0430\u0447\u0430"}),Object(le.jsx)(ke.a,{value:"\u043f\u0440\u043e\u0435\u043a\u0442",children:"\u043f\u0440\u043e\u0435\u043a\u0442"})]})]}),Object(le.jsxs)("div",{className:"input_div",children:[Object(le.jsx)("div",{children:"\u0421\u0444\u0435\u0440\u0430 \u0436\u0438\u0437\u043d\u0438"}),Object(le.jsxs)(de.a,{onChange:function(e){return s(e,"balance")},value:n.balance,style:{width:200},size:"large",children:[Object(le.jsx)(e,{value:"\u0440\u0430\u0431\u043e\u0442\u0430",children:"\u0440\u0430\u0431\u043e\u0442\u0430"}),Object(le.jsx)(e,{value:"\u043f\u0440\u043e\u0435\u043a\u0442",children:"\u043f\u0440\u043e\u0435\u043a\u0442"}),Object(le.jsx)(e,{value:"\u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0435",children:"\u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0435"}),Object(le.jsx)(e,{value:"\u0441\u0435\u043c\u044c\u044f",children:"\u0441\u0435\u043c\u044c\u044f"}),Object(le.jsx)(e,{value:"\u0437\u0434\u043e\u0440\u043e\u0432\u044c\u0435",children:"\u0437\u0434\u043e\u0440\u043e\u0432\u044c\u0435"}),Object(le.jsx)(e,{value:"\u0431\u044b\u0442",children:"\u0431\u044b\u0442"}),Object(le.jsx)(e,{value:"\u043e\u0442\u0434\u044b\u0445",children:"\u043e\u0442\u0434\u044b\u0445"})]})]})]}),Object(le.jsxs)("div",{className:"input_block",children:[Object(le.jsxs)("div",{className:"input_div",children:[Object(le.jsx)("div",{children:"\u0426\u0435\u043b\u044c"}),Object(le.jsx)(je.a,{defaultChecked:n.goal,onChange:function(e){return s(e,"goal")}})]}),Object(le.jsxs)("div",{className:"input_div",children:[Object(le.jsx)("div",{children:"\u0412\u0430\u0436\u043d\u043e"}),Object(le.jsx)(je.a,{defaultChecked:n.important,onChange:function(e){return s(e,"important")}})]})]}),Object(le.jsx)("div",{className:"input_block",children:Object(le.jsxs)("div",{className:"input_div",children:[Object(le.jsx)("div",{children:"\u0414\u0430\u0442\u0430"}),Object(le.jsx)(ve.a,{value:n.date?ae()(n.date):null,onChange:r,style:{width:200},size:"large"}),Object(le.jsx)("div",{children:m.map((function(e){return Object(le.jsx)("span",{className:"date_constant",onClick:function(){return o(e.eng)},children:e.ru},e.eng)}))})]})})]}),Object(le.jsxs)("div",{className:"button_block",children:[Object(le.jsx)($.a,{onClick:function(){(n.balance||0!==n.child)&&c(ie(n))},loading:a,children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"}),Object(le.jsx)($.a,{onClick:function(){var e,t;c((e=n.id,t=n.parent,function(){var n=Object(l.a)(u.a.mark((function n(a){var c,s;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a(C()),n.next=4,re.delete("tasks/"+e);case 4:if(a(D(e)),!t){n.next=13;break}return n.next=8,re.get("projects/"+t);case 8:c=n.sent,s=c.data,a(E(s)),n.next=15;break;case 13:a(A()),a(C());case 15:n.next=20;break;case 17:n.prev=17,n.t0=n.catch(0),a(J(n.t0.response.statusText));case 20:case"end":return n.stop()}}),n,null,[[0,17]])})));return function(e){return n.apply(this,arguments)}}()))},loading:a,children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]})]})},new:function(){var e=Object(a.useState)(""),t=Object(X.a)(e,2),n=t[0],c=t[1],s=Object(i.c)(V),r=s.currentTask,o=s.isFetching,u=Object(i.b)();return Object(le.jsxs)("div",{onKeyPress:function(e){13===e.charCode&&(e.preventDefault(),""!==n&&u(oe(Object(h.a)(Object(h.a)({},r),{},{name:n}))))},children:[Object(le.jsx)(Z.a,{value:n,className:"inputtext inputtext-name",onChange:function(e){return c(e.target.value)},autoFocus:!0}),Object(le.jsx)("div",{className:"button_block",children:Object(le.jsx)($.a,{onClick:function(){""!==n&&u(oe(Object(h.a)(Object(h.a)({},r),{},{name:n})))},loading:o,children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})})]})},day:function(){var e=Object(a.useState)(""),t=Object(X.a)(e,2),n=t[0],c=t[1],s=Object(i.c)(V),r=(s.currentTask,s.isFetching),o=Object(i.b)();return Object(le.jsxs)("div",{onKeyPress:function(e){13===e.charCode&&e.ctrlKey&&""!==n&&o(ye(n))},children:[Object(le.jsx)(Z.a,{value:n,className:"inputtext inputtext-day",onChange:function(e){return c(e.target.value)},autoFocus:!0}),Object(le.jsx)("div",{className:"button_block",children:Object(le.jsx)($.a,{onClick:function(){""!==n&&o(ye(n))},loading:r,children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})})]})}},we=function(){var e=Object(i.c)(V),t=e.modalIsOpen,n=e.typeOfModal,a=Object(i.b)(),c=Ne[n];return Object(le.jsx)(Q.a,{isOpen:t,onRequestClose:function(){return a(A())},ariaHideApp:!1,style:ge,children:Object(le.jsx)(c,{})})},Te=(n(171),function(){var e=Object(i.c)(V).daytext,t=Object(i.b)();return Object(le.jsx)("div",{className:"mainheader",children:Object(le.jsxs)("div",{children:[Object(le.jsx)(r.b,{className:"mainheader_item",to:"/goals",children:"\u0426\u0435\u043b\u0438"}),Object(le.jsx)(r.b,{className:"mainheader_item",to:"/projects",children:"\u041f\u0440\u043e\u0435\u043a\u0442\u044b"}),Object(le.jsx)(r.b,{className:"mainheader_item",to:"/tasks",children:"\u041e\u0431\u0449\u0435\u0435 \u043f\u043b\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435"}),Object(le.jsx)(r.b,{className:"mainheader_item",to:"/today",children:"\u041f\u043b\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0434\u043d\u044f"}),Object(le.jsx)(r.b,{className:"mainheader_item",to:"/do",children:"\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435"}),e?null:Object(le.jsx)("span",{onClick:function(){t(U({typeOfModal:w}))},className:"dayinform",children:"\u0412\u0441\u0442\u0443\u043f\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u0441\u043b\u043e\u0432\u043e"}),Object(le.jsx)("span",{})]})})}),_e=(n(173),function(e){var t=e.important,n=(e.date,["action"]);return t&&n.push("important"),Object(le.jsx)("div",{className:n.join(" ")})}),Ce=(n(174),function(e){var t=e.value,n=e.type,a=Object(i.b)(),c=["task"];n===k&&c.push("task-done");var s=["task_name"];t.goal&&s.push("task_goal");var r=ae()().diff(ae()(t.date,"YYYY-MM-DD"),"days");return Object(le.jsxs)("div",{className:c.join(" "),children:[Object(le.jsxs)("div",{className:"task_left",children:[Object(le.jsxs)("div",{className:"task_tools",children:[Object(le.jsx)(_e,{important:t.important||t.goal,date:t.date}),Object(le.jsx)(Oe,{task:t})]}),Object(le.jsxs)("div",{className:"task_name",onClick:function(){a(U({typeOfModal:"task"})),a(K(t))},children:[Object(le.jsx)("span",{className:s.join(" "),children:t.name}),t.parentname?Object(le.jsx)("span",{className:"task_children",children:"<  ".concat(t.parentname)}):t.isparent?Object(le.jsx)("span",{className:"task_children",children:" >"}):null]})]}),Object(le.jsxs)("div",{className:"task_right",children:[Object(le.jsx)("span",{className:r?"task_tag task-overdue":"task_tag",children:!!r&&r}),Object(le.jsx)("span",{className:"task_tag",children:t.balance})]})]})}),Fe=function(){var e=Object(i.c)(V).tasks,t=function(e){for(var t=[],n=1;n<e;n++){var a=ae()().add(n,"days"),c={raw:a.format("YYYY-MM-DD"),show:a.format("DD.MM dddd")};t.push(c)}return t}(14),n=ce(e),a=e.filter((function(e){return!e.date&&!e.parent})),c=e.filter((function(e){return e.date}));return Object(le.jsxs)(le.Fragment,{children:[Object(le.jsxs)("div",{className:"block",children:[Object(le.jsx)("h3",{children:"\u0418\u043d\u0431\u043e\u043a\u0441"}),a.map((function(e,t){return Object(le.jsx)(Ce,{index:t,value:e,type:v},e.id)}))]}),Object(le.jsxs)("div",{className:"block",children:[Object(le.jsx)("h3",{children:"\u0421\u0415\u0413\u041e\u0414\u041d\u042f"}),n.map((function(e,t){return Object(le.jsx)(Ce,{index:t,value:e,type:v},e.id)}))]}),t.map((function(e,t){var n=c.filter((function(t){return t.date===e.raw}));return Object(le.jsxs)("div",{className:"block",children:[Object(le.jsx)("h3",{children:e.show}),n.map((function(e,t){return Object(le.jsx)(Ce,{index:t,value:e,type:v},e.id)}))]},t)}))]})},Me=function(e){var t=e.value,n=(e.type,e.childname),a=e.childdate,c=Object(i.b)(),s=(new Date,Object(i.c)(V).filtertype,function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c(xe(t.id));case 2:e.sent;case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()),r=["task_name"];return t.goal&&r.push("task_goal"),Object(le.jsxs)("div",{className:"task",onClick:s,children:[Object(le.jsxs)("div",{className:"task_left",children:[Object(le.jsx)("div",{className:"task_tools",children:Object(le.jsx)(_e,{type:t.action})}),Object(le.jsx)("div",{className:"task_name",children:Object(le.jsx)("span",{className:r.join(" "),children:t.name})}),n?Object(le.jsx)("span",{className:"task_children",children:" > ".concat(n)}):null]}),Object(le.jsx)("div",{className:"task_right",children:Object(le.jsx)("div",{children:Object(le.jsx)("span",{className:"task_tag",children:a})})})]})},De=function(){var e=Object(a.useState)(x[0]),t=Object(X.a)(e,2),n=t[0],c=t[1],s=Object(i.c)(V).projects,r=function(e){c(e.target.textContent.toLowerCase())},o=s.filter((function(e){return e.balance===n}));return Object(le.jsxs)("div",{children:[Object(le.jsx)("div",{className:"block",children:x.map((function(e){return Object(le.jsx)("span",{className:"nav".concat(n===e?" nav-active":""),onClick:r,children:e.toUpperCase()},e)}))}),o.map((function(e){return Object(le.jsx)(Me,{value:e,childname:e.childname,childdate:e.childdate},e.id)}))]})},Pe=(n(175),function(){var e=Object(i.c)(V),t=e.tasks,n=e.doneTasks,a=ce(t);return Object(le.jsxs)("div",{children:[Object(le.jsxs)("div",{className:"plantask_div",children:[Object(le.jsx)("h3",{children:"\u0421\u0415\u0413\u041e\u0414\u041d\u042f"}),a.map((function(e,t){return Object(le.jsx)(Ce,{index:t,value:e},e.id)}))]}),n.length>0?Object(le.jsxs)("div",{className:"block",children:[Object(le.jsx)("h3",{children:"\u0412\u042b\u041f\u041e\u041b\u041d\u0415\u041d\u041e"}),n.map((function(e,t){return Object(le.jsx)(Ce,{index:t,value:e,type:k},e.id)}))]}):null]})}),Ie=(n(176),n(177),function(e){var t=e.name,n=e.description;e.balance,Object(i.b)(),Object(i.c)(V).filtertype;return Object(le.jsxs)("div",{className:"goal",children:[Object(le.jsx)("div",{className:"goal_name",children:t}),Object(le.jsx)("div",{className:"goal_description",children:n})]})}),Se=function(){var e=Object(i.c)(V).goals;return Object(le.jsx)("div",{children:e.map((function(e){return Object(le.jsx)(Ie,{name:e.name,description:e.description},e.id)}))})};n(178),n(179);var Ye=function(){var e=Object(i.c)(V).error,t=Object(i.b)(),n={MOVE_UP:function(e){return t(L())}},c=function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(function(){var e=Object(l.a)(u.a.mark((function e(t){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(C()),e.next=4,re.get("days");case 4:n=e.sent,a=n.data,t(R(a)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t(J(e.t0.response.statusText));case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}());case 2:return e.next=4,t(function(){var e=Object(l.a)(u.a.mark((function e(t){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(C()),e.next=4,re.get("tasks");case 4:n=e.sent,a=n.data,t(F(a)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t(J(e.t0.response.statusText));case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}());case 4:return e.next=6,t(function(){var e=Object(l.a)(u.a.mark((function e(t){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(C()),e.next=4,re.get("tasks/done");case 4:n=e.sent,a=n.data,t(S(a)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t(J(e.t0.response.statusText));case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}());case 6:return e.next=8,t(fe());case 8:return e.next=10,t(function(){var e=Object(l.a)(u.a.mark((function e(t){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(C()),e.next=4,re.get("goals");case 4:n=e.sent,a=n.data,t(H(a)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t(J(e.t0.response.statusText));case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}());case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){c()}),[]),e?Object(le.jsx)("div",{children:e}):Object(le.jsx)(j.GlobalHotKeys,{keyMap:{MOVE_UP:"ctrl+enter"},handlers:n,children:Object(le.jsx)("div",{className:"App",children:Object(le.jsxs)("div",{className:"wrapper",children:[Object(le.jsx)(Te,{}),Object(le.jsxs)(d.c,{children:[Object(le.jsx)(d.a,{exact:!0,path:"/",component:Fe}),Object(le.jsx)(d.a,{exact:!0,path:"/goals",component:Se}),Object(le.jsx)(d.a,{exact:!0,path:"/tasks",component:Fe}),Object(le.jsx)(d.a,{exact:!0,path:"/today",component:Pe}),Object(le.jsx)(d.a,{exact:!0,path:"/projects",component:De})]}),Object(le.jsx)(we,{})]})})})},Ee=Object(O.a)({reducer:q,middleware:Object(O.c)(),devTools:!1});n(180);s.a.render(Object(le.jsx)(r.a,{children:Object(le.jsx)(i.a,{store:Ee,children:Object(le.jsx)(Ye,{})})}),document.getElementById("root"))},64:function(e,t,n){}},[[181,1,2]]]);
//# sourceMappingURL=main.9f67903c.chunk.js.map