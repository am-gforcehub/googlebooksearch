(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,a){e.exports=a(57)},30:function(e,t,a){},49:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){e.exports=a.p+"static/media/worm2.eea96765.png"},54:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(22),r=a.n(l),c=a(60),s=a(62),i=a(61),u=a(10),m=a(5),h=a(6),d=a(8),f=a(7),E=a(9);a(30);var b=function(e){return o.a.createElement("span",Object.assign({className:"delete-btn"},e,{role:"button",tabIndex:"0"}),"\u2717")};var p=function(e){var t=e.children;return o.a.createElement("div",{className:"jumbotron"},t)},k=a(11),v=a.n(k),g=Object({NODE_ENV:"production",PUBLIC_URL:""}).googlebookssearch||"AIzaSyC--Ap_sGnu-HvqvWuZSKxFssWIArOMvUU",y={getBooks:function(){return v.a.get("/api/books")},getBook:function(e){return v.a.get("/api/books/"+e)},deleteBook:function(e){return v.a.delete("/api/books/"+e)},saveBook:function(e){return v.a.post("/api/books",e)},searchBook:function(e){return v.a.get("https://www.googleapis.com/books/v1/volumes?q="+e+"&key="+g)}},B=a(59);function O(e){var t=e.fluid,a=e.children;return o.a.createElement("div",{className:"container".concat(t?"-fluid":"")},a)}function j(e){var t=e.fluid,a=e.children;return o.a.createElement("div",{className:"row".concat(t?"-fluid":"")},a)}function S(e){var t=e.size,a=e.children;return o.a.createElement("div",{className:t.split(" ").map(function(e){return"col-"+e}).join(" ")},a)}a(49);function N(e){var t=e.children;return o.a.createElement("div",{className:"list-overflow-container"},o.a.createElement("ul",{className:"list-group"},t))}function C(e){var t=e.children;return o.a.createElement("li",{className:"list-group-item"},t)}function w(e){return o.a.createElement("div",{className:"form-group"},o.a.createElement("input",Object.assign({className:"form-control"},e)))}function I(e){return o.a.createElement("div",{className:"form-group"},o.a.createElement("textarea",Object.assign({className:"form-control",rows:"20"},e)))}function A(e){return o.a.createElement("button",Object.assign({},e,{style:{float:"right",marginBottom:10},className:"btn btn-success"}),e.children)}var D=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(o)))).state={books:[],title:"",author:"",synoposis:""},a.loadBooks=function(){y.getBooks().then(function(e){return a.setState({books:e.data,title:"",author:"",synopsis:""})}).catch(function(e){return console.log(e)})},a.deleteBook=function(e){y.deleteBook(e).then(function(e){return a.loadBooks()}).catch(function(e){return console.log(e)})},a.handleInputChange=function(e){var t=e.target,n=t.name,o=t.value;a.setState(Object(u.a)({},n,o))},a.handleFormSubmit=function(e){e.preventDefault(),a.state.title&&a.state.author&&y.saveBook({title:a.state.title,author:a.state.author,synopsis:a.state.synopsis}).then(function(e){return a.loadBooks()}).catch(function(e){return console.log(e)})},a}return Object(E.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.loadBooks()}},{key:"render",value:function(){var e=this;return o.a.createElement(O,{fluid:!0},o.a.createElement(j,null,o.a.createElement(S,{size:"md-8"},o.a.createElement(p,null,o.a.createElement("h1",null,"SEARCH BOOKS")),o.a.createElement("form",null,o.a.createElement(w,{value:this.state.title,onChange:this.handleInputChange,name:"title",placeholder:"Title (required)"}),o.a.createElement(w,{value:this.state.author,onChange:this.handleInputChange,name:"author",placeholder:"Author (required)"}),o.a.createElement(I,{value:this.state.synopsis,onChange:this.handleInputChange,name:"synopsis",placeholder:"Synopsis (Optional)"}),o.a.createElement(A,{disabled:!this.state.author&&this.state.title,onClick:this.handleFormSubmit},"Submit Book"))),o.a.createElement(S,{size:"md-6 sm-12"},o.a.createElement(p,null,o.a.createElement("h1",null,"Books On My List")),this.state.books.length?o.a.createElement(N,null,this.state.books.map(function(t){return o.a.createElement(C,{key:t._id},o.a.createElement(B.a,{to:"/books/"+t._id},o.a.createElement("strong",null,t.title," by ",t.author)),o.a.createElement(b,{onClick:function(){return e.deleteBook(t._id)}}))})):o.a.createElement("h3",null,"No Results to Display"))))}}]),t}(n.Component),x=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(o)))).state={book:{}},a}return Object(E.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this;y.getBook(this.props.match.params.id).then(function(t){return e.setState({book:t.data})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){return o.a.createElement(O,{fluid:!0},o.a.createElement(j,null,o.a.createElement(S,{size:"md-12"},o.a.createElement(p,null,o.a.createElement("h1",null,this.state.book.title," by ",this.state.book.author)))),o.a.createElement(j,null,o.a.createElement(S,{size:"md-10 md-offset-1"},o.a.createElement("article",null,o.a.createElement("h1",null,"Description"),o.a.createElement("p",null,this.state.book.synopsis)))),o.a.createElement(j,null,o.a.createElement(S,{size:"md-2"},o.a.createElement(B.a,{to:"/saved"},"\u2190 Back to Saved List"))))}}]),t}(n.Component);var z=function(){return o.a.createElement(O,{fluid:!0},o.a.createElement(j,null,o.a.createElement(S,{size:"md-12"},o.a.createElement(p,null,o.a.createElement("h1",null,"404 Page Not Found"),o.a.createElement("h1",null,o.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44"))))))},_=(a(52),a(53));var L=function(){return o.a.createElement("nav",{className:"navbar navbar-expand-lg navMain"},o.a.createElement("a",{className:"navbar-brand navTitle",href:"/"},"Books 4 Bookworms"),o.a.createElement("span",null,o.a.createElement("img",{src:_,alt:"worm"})),o.a.createElement("a",{className:"navbar-brand subtitle",href:"/"},"SEARCH"),o.a.createElement("a",{className:"navbar-brand subtitle",href:"/saved"},"SAVED"))},M=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(o)))).state={books:[],title:"",author:"",synopsis:""},a.loadBooks=function(){y.getBooks().then(function(e){return a.setState({books:e.data,title:"",author:"",synopsis:""})}).catch(function(e){return console.log(e)})},a.deleteBook=function(e){y.deleteBook(e).then(function(e){return a.loadBooks()}).catch(function(e){return console.log(e)})},a.handleInputChange=function(e){var t=e.target,n=t.name,o=t.value;a.setState(Object(u.a)({},n,o))},a}return Object(E.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.loadBooks()}},{key:"render",value:function(){var e=this;return o.a.createElement(O,null,o.a.createElement(j,null,o.a.createElement(S,{size:"md-12"},o.a.createElement(p,null,o.a.createElement("h1",null,"Books On My List")),this.state.books.length?o.a.createElement(N,null,this.state.books.map(function(t){return o.a.createElement(C,{key:t._id},o.a.createElement(B.a,{to:"/books/"+t._id},o.a.createElement("strong",null,t.title," by ",t.author)),o.a.createElement(b,{onClick:function(){return e.deleteBook(t._id)}}))})):o.a.createElement("h3",null,"No Results to Display"))))}}]),t}(n.Component);a(54);var R=function(e){return o.a.createElement("span",Object.assign({className:"save-btn"},e,{role:"button",tabIndex:"0"}),"+")},F=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(o)))).state={author:"",books:[],term:"",title:"",saved:!1,synopsis:""},a.loadBooks=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];console.log(e);var t=e.map(function(e){return{title:e.volumeInfo.title,author:e.volumeInfo.authors[0],synopsis:e.volumeInfo.description}});a.setState({books:t,term:""})},a.refreshList=function(e){},a.deleteBook=function(e){y.deleteBook(e).then(function(e){return a.loadBooks()}).catch(function(e){return console.log(e)})},a.handleInputChange=function(e){var t=e.target,n=t.name,o=t.value;a.setState(Object(u.a)({},n,o))},a.handleSavedSubmit=function(e){console.log("save i="+e),console.log(a.state.books[e]),y.saveBook({title:a.state.books[e].title,author:a.state.books[e].author,synopsis:a.state.books[e].synopsis}).then(function(t){var n=a.state.books;n[e].saved=!0,a.setState({books:n})}).catch(function(e){return console.log(e)})},a.handleSearch=function(e){e.preventDefault(),a.state.term&&y.searchBook(a.state.term).then(function(e){return a.loadBooks(e.data.items)}).catch(function(e){return console.log(e)})},a}return Object(E.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.loadBooks()}},{key:"render",value:function(){var e=this;return o.a.createElement(O,null,o.a.createElement(j,null,o.a.createElement(S,{size:"md-12"},o.a.createElement(p,null,o.a.createElement("h1",null,"Find a good book to read!")),o.a.createElement("form",null,o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-11"},o.a.createElement(w,{value:this.state.term,onChange:this.handleInputChange,name:"term",placeholder:"Search for a book"})),o.a.createElement("div",{className:"col-md-1"},o.a.createElement(A,{disabled:!this.state.term,onClick:this.handleSearch},"Search")))))),o.a.createElement(j,null,o.a.createElement(S,{size:"md-12"},this.state.books.length?o.a.createElement(N,null,this.state.books.map(function(t,a){return o.a.createElement(C,{key:a},o.a.createElement("a",{href:t.previewLink,target:"_blank",rel:"noopener noreferrer"},o.a.createElement("strong",null,t.title," by ",t.author)),e.state.books[a].saved?o.a.createElement("mark",{style:{float:"right"}},"Added to Saved List"):o.a.createElement(R,{onClick:function(){return e.handleSavedSubmit(a)}}))})):o.a.createElement("h3",null,"No Results to Display"))))}}]),t}(n.Component);var q=function(){return o.a.createElement(c.a,null,o.a.createElement("div",null,o.a.createElement(L,null),o.a.createElement(s.a,null,o.a.createElement(i.a,{exact:!0,path:"/",component:F}),o.a.createElement(i.a,{exact:!0,path:"/books",component:D}),o.a.createElement(i.a,{exact:!0,path:"/books/:id",component:x}),o.a.createElement(i.a,{exact:!0,path:"/saved",component:M}),o.a.createElement(i.a,{component:z}))))};a(56);r.a.render(o.a.createElement(q,null),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.ac564aba.chunk.js.map