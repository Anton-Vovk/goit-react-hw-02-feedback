(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),o=n(5),i=n.n(o),r=(n(15),n(6)),s=n(7),d=n(8),b=n(10),u=n(9),l=(n(16),n(3)),j=n.n(l),O=n(0),h=function(e){var t=e.title,n=e.children;return Object(O.jsxs)("div",{className:j.a.container,children:[Object(O.jsx)("h2",{className:j.a.title,children:t}),n]})},f=function(e){var t=e.good,n=e.neutral,a=e.bad,c=e.total,o=e.positivePercentage;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("p",{children:["Good:",t]}),Object(O.jsxs)("p",{children:["Neutral: ",n]}),Object(O.jsxs)("p",{children:["Bad: ",a]}),Object(O.jsxs)("p",{children:["Total: ",c]}),Object(O.jsxs)("p",{children:["Positive feedback: ",o," %"]})]})},p=n(4),k=n.n(p),v=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(O.jsx)("div",{className:k.a.feedbackOptionsContainer,children:t.map((function(e){return Object(O.jsx)("button",{className:k.a.feedbackOptionsButton,type:"button",name:e,onClick:n,children:e},e)}))})},x=function(e){var t=e.message;return Object(O.jsx)("p",{children:t})},g=function(e){Object(b.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.countTotalFeedback=function(){var t=e.state;return t.good+t.neutral+t.bad},e.countPositiveFeedbackPercentage=function(){var t=100*e.state.good/e.countTotalFeedback();return Math.round(t)},e.onLeaveFeedback=function(t){var n=t.target.name;e.setState((function(e){return Object(r.a)({},n,e[n]+1)}))},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,a=e.bad,c=Object.keys(this.state);return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(h,{title:"Please leave feedback",children:Object(O.jsx)(v,{options:c,onLeaveFeedback:this.onLeaveFeedback})}),0===this.countTotalFeedback()?Object(O.jsx)(x,{message:"No feedback given"}):Object(O.jsx)(h,{title:"Statistics",children:Object(O.jsx)(f,{good:t,neutral:n,bad:a,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()})})]})}}]),n}(a.Component);n(18);i.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(g,{})}),document.getElementById("root"))},3:function(e,t,n){e.exports={container:"Section_container__29CZy",title:"Section_title__1QDFa"}},4:function(e,t,n){e.exports={feedbackOptionsContainer:"FeedbackOptions_feedbackOptionsContainer__1PfHn",feedbackOptionsButton:"FeedbackOptions_feedbackOptionsButton__1c8_E"}}},[[19,1,2]]]);
//# sourceMappingURL=main.d617a0d2.chunk.js.map