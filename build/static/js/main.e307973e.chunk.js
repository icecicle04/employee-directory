(this.webpackJsonpemployee_directory=this.webpackJsonpemployee_directory||[]).push([[0],{24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(2),r=a.n(n),s=a(16),l=a.n(s),i=(a(24),a(25),a(17)),o=a(3),d=a(4),j=a(6),h=a(5),u=(a(26),a(27),function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(o.a)(this,a);for(var c=arguments.length,n=new Array(c),r=0;r<c;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={data:[],filterData:[]},e.handleSearch=function(t){t.preventDefault();var a=t.target.value,c=e.state.data.filter((function(e){return-1!==e.name.first.indexOf(a)}));e.setState({filterData:c})},e}return Object(d.a)(a,[{key:"render",value:function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:"container-fluid",children:[" ",Object(c.jsxs)("div",{className:"row header-row table",children:[Object(c.jsx)("div",{className:"col-sm-3"}),Object(c.jsxs)("div",{className:"col-sm-6 text-center",children:[Object(c.jsx)("h1",{children:"Employee Directory"}),Object(c.jsx)("hr",{}),Object(c.jsx)("h5",{children:"Search by first name or sort by clicking on 'Name'"})]})]})]}),Object(c.jsx)("div",{className:"container-fluid",children:Object(c.jsxs)("div",{className:"row main-page",children:[Object(c.jsx)("div",{className:"col-sm-1"}),Object(c.jsxs)("div",{className:"col-sm-10 text-center",children:[Object(c.jsxs)("div",{className:"search-bar row",children:[Object(c.jsx)("div",{className:"col-sm-3"}),Object(c.jsx)("div",{className:"col-sm-6 search-div",children:Object(c.jsx)("input",{type:"text",class:"form-control input-search",onChange:this.handleSearch,placeholder:"Search for employee","aria-describedby":"inputGroup-sizing-default"})}),Object(c.jsx)("div",{className:"col-sm-3"})]}),Object(c.jsxs)("table",{className:"table table-dark",children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{scope:"col",onClick:this.handleSort,children:"Name"}),Object(c.jsx)("th",{scope:"col",children:"Salary"}),Object(c.jsx)("th",{scope:"col",children:"Email"})]})}),Object(c.jsx)("tbody",{children:this.state.filterData.map((function(e){return Object(c.jsx)("tr",{})}))})]})]})]})})]})}}]),a}(n.Component)),b=a(18),m=a.n(b),p={getAllEmployees:function(){return m.a.get("http://dummy.restapiexample.com/api/v1/employees")}},O=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(o.a)(this,a);for(var c=arguments.length,n=new Array(c),r=0;r<c;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={ascending:!0,search:"",result:[],error:""},e.handleInputChange=function(t){var a=t.target.value,c=t.target.name;e.filterSearch(a),e.setState(Object(i.a)({},c,a))},e.searchEmployee=function(t){p.search(t).then((function(t){return e.setState({result:t.data.data,alteredResult:t.data.data})}))},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.getAllEmployees().then((function(t){var a=t.data.data;console.log(a),e.setState({employees:t.data.data})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return Object(c.jsx)("div",{children:Object(c.jsx)(u,{employees:this.state.employee_name})})}}]),a}(n.Component);var f=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(O,{})})},x=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,47)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),r(e),s(e)}))};l.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(f,{})}),document.getElementById("root")),x()}},[[45,1,2]]]);
//# sourceMappingURL=main.e307973e.chunk.js.map