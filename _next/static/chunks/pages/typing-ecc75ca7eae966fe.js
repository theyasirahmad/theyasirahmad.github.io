(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[912],{8184:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/typing",function(){return c(2961)}])},9145:function(c,b,a){"use strict";a.d(b,{Z:function(){return e}});var d=a(5893);function e(a){return(0,d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",className:a.className,viewBox:"0 0 24 24",children:(0,d.jsx)("path",{d:"M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"})})}a(7294)},5416:function(c,b,a){"use strict";a.d(b,{Z:function(){return e}});var d=a(5893);function e(a){return(0,d.jsx)("svg",{className:a.className,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:(0,d.jsx)("path",{d:"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"})})}a(7294)},2961:function(g,b,a){"use strict";a.r(b),a.d(b,{default:function(){return F}});var h=a(828),i=a(9815),j=a(5893),k=a(7294),l=a(9875),m=function(a){if(a>=60){var c=Math.floor(a/60),b=a-60*c;if(!(b>9))return[c,0,b];var d=Math.floor(b/10);return[c,d,b-10*d]}if(!(a>9))return[0,0,a];var e=Math.floor(a/10);return[0,e,a-10*e]};function n(a){var d=a.setIsFinished,n=a.inputLostFocus,e=a.seconds,f=a.timerCountingInterval,o=a.updateStatistics,g=(0,k.useState)(e.current),b=g[0],q=g[1],c=(0,k.useRef)(null),i=(0,k.useState)(!1),p=i[0],r=i[1];return(0,k.useEffect)(function(){n?clearInterval(f.current):f.current=setInterval(function(){if(console.log("Timer executing...",e.current),e.current--,q(e.current),e.current>0){if(c.current){var a=(0,h.Z)(m(e.current),3),b=a[0],d=a[1],f=a[2];c.current.innerText="".concat(b,":").concat(d).concat(f)}}else r(!0)},1e3)},[d,n,e,f]),(0,k.useEffect)(function(){!0==p&&(r(!1),o(),d(!0),clearInterval(f.current))},[d,f,p,o]),(0,j.jsxs)(j.Fragment,{children:[b<=5&&(0,j.jsx)(l.E.span,{initial:{opacity:1},animate:{opacity:[0,1,0]},transition:{duration:.5,repeat:1/0},ref:c,className:"text-AAError md:text-xl text-sm",children:"0:05"}),b<=15&&b>5&&(0,j.jsx)(l.E.span,{initial:{opacity:1},animate:{opacity:[0,1,0]},transition:{duration:1,repeat:1/0},ref:c,className:"text-AAError md:text-xl text-sm",children:"0:15"}),b>15&&(0,j.jsx)("span",{ref:c,className:"text-gray-400 md:text-xl text-sm"})]})}var o=a(9145),p=a(5416),q=function(a){return(0,j.jsx)("a",{href:a.href,className:"",target:"_blank",rel:"noreferrer",children:(0,j.jsx)(a.Icon,{className:"w-5 h-5 text-gray-400 hover:text-AAsecondary transition duration-800 fill-current hover:cursor-pointer "})})};function r(a){return(0,j.jsxs)("div",{className:" ".concat(a.className," bg-AAprimary flex flex-col justify-center items-center py-8 space-y-4 "),children:[(0,j.jsxs)("div",{className:"flex flex-row space-x-8",children:[(0,j.jsx)(q,{href:"https://github.com/theyasirahmad",Icon:o.Z}),(0,j.jsx)(q,{href:"https://www.linkedin.com/in/theyasirahmad",Icon:p.Z})]}),(0,j.jsx)("a",{href:a.link,className:"",target:"_blank",rel:"noreferrer",children:(0,j.jsxs)("div",{className:"group flex flex-col font-mono justify-center items-center text-gray-400 text-sm space-y-2 ",children:[(0,j.jsx)("span",{className:"group-hover:text-AAsecondary sm:text-sm text-xs",children:"Designed & Built by Yasir Ahmed"}),(0,j.jsxs)("span",{className:"text-xs flex flex-row items-center space-x-2 group-hover:text-AAsecondary",children:[(0,j.jsx)(o.Z,{className:"w-4 h-4 text-gray-400 fill-current group-hover:text-AAsecondary duration-800"}),(0,j.jsx)("span",{className:"",children:"Source code - Github"})]})]})})]})}var s=function(a){if(!(a.length>1))return null;var b=(0,i.Z)(a.slice(0).reverse()),d=b[0].wpm,c=0;return b.forEach(function(a,b){a.wpm>d&&(d=a.wpm,c=b)}),c},t=function(b,c){var a=s(c);return null==a?(0,j.jsx)(j.Fragment,{}):b===a?(0,j.jsx)(l.E.span,{initial:{opacity:0},animate:{opacity:[1,0,1]},transition:{repeat:1/0,duration:1},className:"text-yellow-300",children:"TopScore"}):(0,j.jsx)(j.Fragment,{})};function u(a){var b=a.statistics,c=a.round,d=a.finishedTime;return console.log("score list : ",b),(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)("div",{className:"w-full flex flex-col space-y-4",children:[(0,j.jsx)("div",{className:"w-full flex justify-center",children:(0,j.jsx)("span",{className:"sm:text-xl text-sm text-gray-400 underline ",children:"Statistics"})}),(0,j.jsxs)("div",{className:"w-full font-mono text-AAsecondary flex flex-row justify-between px-2",children:[(0,j.jsxs)("div",{className:"sm:text-base text-sm ",children:["round ",c.toString()," : "]}),(0,j.jsxs)("div",{className:"sm:text-base text-sm ",children:[d," sec"]})]})]}),(0,j.jsx)("div",{className:"flex flex-col duration-400",children:(0,j.jsx)("div",{className:"overflow-x-auto",children:(0,j.jsx)("div",{className:"p-1.5 w-full inline-block align-middle",children:(0,j.jsx)("div",{className:"overflow-hidden border rounded-lg border-gray-500",children:(0,j.jsxs)("table",{className:"min-w-full divide-y divide-gray-200",children:[(0,j.jsx)("thead",{className:"bg-gray-500 border border-gray-500",children:(0,j.jsxs)("tr",{children:[(0,j.jsx)("th",{scope:"col",className:"px-6 py-3 text-xs font-bold text-left text-gray-300 uppercase ",children:"ROUND"}),(0,j.jsx)("th",{scope:"col",className:"px-6 py-3 text-xs font-bold text-left text-gray-300 uppercase ",children:"Wpm"}),(0,j.jsx)("th",{scope:"col",className:"px-6 py-3 text-xs font-bold text-left text-gray-300 uppercase ",children:"Accuracy"})]})}),(0,j.jsx)("tbody",{className:"divide-y divide-gray-200 text-AAsecondary",children:b.slice(0).reverse().map(function(a,c){return 0==c?(0,j.jsxs)(l.E.tr,{initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},transition:{default:{duration:.3,ease:[0,.71,.2,1.01]},scale:{type:"spring",damping:5,stiffness:100,restDelta:.001}},children:[(0,j.jsx)("td",{className:"px-6 py-4 text-sm font-medium whitespace-nowrap",children:a.round}),(0,j.jsxs)("td",{className:"px-6 py-4 text-sm flex sm:flex-row flex-col whitespace-nowrap",children:[(0,j.jsx)("span",{className:"sm:order-2 order-1 sm:pl-2",children:t(c,b)}),(0,j.jsxs)("span",{children:[a.wpm," wpm "]})]}),(0,j.jsxs)("td",{className:"px-6 py-4 text-sm text-left whitespace-nowrap",children:[a.accuracy,"%"]})]},c):(0,j.jsxs)("tr",{children:[(0,j.jsx)("td",{className:"px-6 py-4 text-sm font-medium whitespace-nowrap",children:a.round}),(0,j.jsxs)("td",{className:"px-6 py-4 text-sm flex sm:flex-row flex-col whitespace-nowrap",children:[(0,j.jsx)("span",{className:"sm:order-2 order-1 sm:pl-2",children:t(c,b)}),(0,j.jsxs)("span",{children:[a.wpm," wpm "]})]}),(0,j.jsxs)("td",{className:"px-6 py-4 text-sm text-left whitespace-nowrap",children:[a.accuracy,"%"]})]},c)})})]})})})})})]})}function v(){return(0,j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-full h-full text-gray-400 group-hover:text-AAsecondary group-hover:rotate-180 duration-200",children:(0,j.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3"})})}function w(a){return(0,j.jsx)("img",{src:a.src,alt:a.alt,className:a.className})}function x(){return(0,j.jsxs)("div",{className:"w-full 2xl:px-96 xl:px-80 lg:px-64 md:px-28 px-12 flex md:flex-row flex-col md:space-x-12 items-center space-y-4 pt-24 opacity-70 hover:opacity-100 duration-500 ",children:[(0,j.jsx)("div",{className:"flex-none w-32 lg:w-44 flex justify-center items-center",children:(0,j.jsx)(w,{src:"gdscCercle.png",alt:"About picture",className:"opacity-80"})}),(0,j.jsxs)("div",{className:"flex flex-col space-y-8 items-center",children:[(0,j.jsx)("span",{className:"font-extrabold lg:text-5xl md:text-4xl text-2xl sm:text-3xl text-gray-300 text-center",children:"What's this project for?"}),(0,j.jsxs)("span",{className:"font-sans italic sm:text-base text-sm text-gray-400 text-center",children:["Most jobs do not explicitly require certain typing speeds, but that's because basic typing skills are taken as a given. Thus, you should"," ",(0,j.jsx)("span",{className:"font-bold text-gray-300",children:"aim for a typing speed of at least 40 WPM"})," to keep up a standard level of efficiency at work..However this project aim to help you to improve your typing speed by tracking your progress in each round and give you a score based on your typing speed and accuracy."]})]})]})}function y(a){return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)("section",{className:" w-full h-full flex flex-row sm:space-x-12 space-x-4 justify-center items-center pb-16",children:[(0,j.jsxs)(l.E.div,{initial:{opacity:0,x:30},animate:{opacity:1,x:0},transition:{duration:.6},className:"flex flex-col items-center text-gray-400 hover:text-AAsecondary duration-300",children:[(0,j.jsx)("span",{className:"sm:text-base text-xs",children:"Windows : Ctrl + /"}),(0,j.jsx)("span",{className:"sm:text-base text-xs",children:"Or"}),(0,j.jsx)("span",{className:"sm:text-base text-xs",children:"Mac : Cmd + /"})]}),(0,j.jsx)("div",{className:"h-8 w-[2px] bg-gray-400 rounded"}),(0,j.jsxs)(l.E.div,{initial:{opacity:0,x:-30},animate:{opacity:1,x:0},transition:{duration:.6},onClick:function(){console.log("Restarted By a click!!!!"),a.restart()},className:"group flex flex-row space-x-3 items-center hover:cursor-pointer",children:[(0,j.jsx)("div",{className:"sm:h-8 sm:w-8 h-5 w-5 ",children:(0,j.jsx)(v,{})}),(0,j.jsx)("span",{className:"sm:text-lg text-sm font-mono text-gray-400 group-hover:text-AAsecondary duration-200 group-hover:translate-x-2",children:"Restart"})]})]}),(0,j.jsx)("section",{className:" w-full 2xl:px-96 xl:px-80 lg:px-64 md:px-28 sm:px-12 flex flex-col space-y-2",children:(0,j.jsx)(u,{statistics:a.statistics,round:a.roundCounter,finishedTime:(a.timeToType-a.seconds.current).toString()})}),(0,j.jsx)(x,{})]})}var c,d=a(7568),e=a(4051),f=a.n(e),z=(c=(0,d.Z)(f().mark(function a(b,c,d,e){return f().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:fetch("/api/typing/10").then(function(a){return a.json()}).then(function(a){var f=[];a.quote.split(" ").forEach(function(c,d){var b=function(){return a.quote.split(" ").length-1==d?c:c+" "};f.push({word:b(),indexFrom:0,indexTo:0})});var h=0;f.forEach(function(a,b){0==b?(a.indexFrom=0,a.indexTo=a.word.length-1,h=a.indexTo):(a.indexFrom=h+1,a.indexTo=a.indexFrom+a.word.length-1,h=a.indexTo)});var g=[f,[],{CursorPosition:0}];a.quote.split("").forEach(function(a,b){g[1].push({char:a,charColor:"text-gray-500"})}),d(e+1),c({wordIndex:0,wordDetail:g[0][0]}),b(g)}).catch(function(a){return console.error(a)});case 1:case"end":return a.stop()}},a)})),function(a,b,d,e){return c.apply(this,arguments)}),A=function(b,d){for(var c=0,a=0;a<b.length;a++)if("text-AAsecondary"==b[a].charColor)c++;else if("text-gray-500"==b[a].charColor)break;return Math.floor(Math.round(c/d*60)/5)},B=function(a){for(var c=0,b=0;b<a.length;b++)"text-AAsecondary"==a[b].charColor?c++:a[b].charColor;return Math.floor(100*c/a.length)},C=function(e,h,b,j,a,f,k,l,m){for(var d=b.wordDetail.indexFrom;d<a[1].length;d++)a[1][d].charColor="text-gray-500";var n=b.wordDetail.indexFrom;if(e.split("").forEach(function(b,c){a[1][n].charColor=b===a[1][n].char?"text-AAsecondary":"text-AAError",n++}),0==e.localeCompare(b.wordDetail.word)){var g=b.wordIndex+1;j({wordIndex:g,wordDetail:a[0][g]}),h.target.value=""}for(var c=0;c<a[1].length;c++)if(0==a[1][c].charColor.localeCompare("text-gray-500")){a[2].CursorPosition=c;break}f((0,i.Z)(a)),"text-gray-500"!==a[1][a[1].length-1].charColor&&(console.log("Player Finished typing!!"),m(),a[1]=[],f((0,i.Z)(a)),k(!0),clearInterval(l.current))};function D(){return(0,j.jsx)(l.E.span,{initial:{opacity:0,x:0},animate:{opacity:[1,0]},transition:{opacity:{duration:.8,repeat:1/0}},className:"absolute left-0 w-[3px] lg:h-8 sm:bottom-0 top-1 sm:h-5 h-4 rounded bg-AAsecondary "})}var E=a(732);function F(){var g=(0,h.Z)(k.useState([[],[],{CursorPosition:0}]),2),b=g[0],K=g[1],l=(0,k.useState)(null),v=l[0],L=l[1],m=(0,k.useState)(0),c=m[0],M=m[1],o=(0,k.useState)(!1),d=o[0],w=o[1],x=(0,k.useRef)(null),F=(0,k.useRef)(null),G=(0,k.useRef)(null),p=(0,k.useState)(!1),e=p[0],N=p[1],f=(0,k.useRef)(180),H=(0,k.useRef)(),q=(0,k.useState)([]),s=q[0],O=q[1],t=(0,k.useState)(!1),I=t[0],P=t[1],a=(0,k.useContext)(E.Z),u=(0,k.useCallback)(function(){var b;document.removeEventListener("keydown",a.sharedState.typing.keyboardEvent),console.log("event Listener is Removed!!!!!!!!!!"),f.current=180,z(K,L,M,c),L(null),P(!1),(null===(b=x.current)|| void 0===b?void 0:b.value)&&(x.current.value="")},[a.sharedState.typing.keyboardEvent,c]),J=(0,k.useCallback)(function(){s.push({round:c,wpm:A(b[1],180-f.current),accuracy:B(b[1])}),O((0,i.Z)(s))},[b,c,s]);return(0,k.useEffect)(function(){e?(a.sharedState.typing.eventInputLostFocus=function(){var a;console.log("window is resized..Changing inputLostFocus height"),(null===(a=G.current)|| void 0===a?void 0:a.style)&&e&&(G.current.style.height=F.current.clientHeight+"px")},window.addEventListener("resize",a.sharedState.typing.eventInputLostFocus)):window.removeEventListener("resize",a.sharedState.typing.eventInputLostFocus)},[a.sharedState.typing,e]),(0,k.useEffect)(function(){var a;0==b[0].length&&(console.log("#useEffect Getting Data......."),z(K,L,M,c)),null===(a=x.current)|| void 0===a||a.focus(),console.log("useEffect executed...")},[b,v,d,c]),(0,k.useEffect)(function(){var b;null===(b=x.current)|| void 0===b||b.focus(),a.sharedState.typing.keyboardEvent=function(a){console.log("KeyDown Detected : ",a.code),(a.metaKey||a.ctrlKey)&&"Slash"===a.code&&(u(),console.log("Restarted By Shortcut!!!!"))}},[a.sharedState.typing,u]),(0,k.useEffect)(function(){d&&(console.log("event Listener added!!!"),document.addEventListener("keydown",a.sharedState.typing.keyboardEvent))},[a.sharedState.typing.keyboardEvent,d]),(0,k.useEffect)(function(){var b;console.log("event Listener is Removed!!!!!!!!!!"),document.removeEventListener("keydown",a.sharedState.typing.keyboardEvent),(null===(b=x.current)|| void 0===b?void 0:b.value)&&(x.current.value=""),w(!1),console.log("useEffect RoundCounter executed...")},[a.sharedState.typing.keyboardEvent,c]),(0,k.useEffect)(function(){var a,b;e?(null===(a=G.current)|| void 0===a?void 0:a.style)&&e&&(G.current.style.height=F.current.clientHeight+"px"):null===(b=x.current)|| void 0===b||b.focus()},[e]),(0,k.useEffect)(function(){clearInterval(a.sharedState.userdata.timerCookieRef.current),window.removeEventListener("resize",a.sharedState.userdata.windowSizeTracker.current),window.removeEventListener("mousemove",a.sharedState.userdata.mousePositionTracker.current,!1),window.removeEventListener("scroll",a.sharedState.portfolio.NavBar.IntervalEvent),a.sharedState.portfolio.NavBar.IntervalEvent=null,a.sharedState.portfolio.NavBar.scrolling=null,a.sharedState.portfolio.NavBar.scrollSizeY=null},[a.sharedState]),(0,j.jsxs)("div",{className:" bg-AAprimary min-h-screen  w-full flex flex-col justify-center items-center ".concat(d?"pt-48":""),children:[!d&&0!=b[1].length&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("main",{className:"w-full 2xl:px-96 xl:px-80 lg:px-64 md:px-28 px-12 flex flex-col justify-center items-center space-y-12",children:(0,j.jsxs)("div",{ref:F,className:"relative w-full h-full flex flex-col space-y-8 ",children:[e&&(0,j.jsx)("div",{onClick:function(){N(!1)},ref:G,className:"absolute w-full z-10 bg-AAprimary opacity-90 rounded border-[0.5px] border-gray-700 flex justify-center items-center hover:cursor-pointer",children:(0,j.jsx)("span",{className:"text-gray-400 font-mono",children:"Click to continue.."})}),I&&(0,j.jsxs)("div",{className:"w-full flex justify-between pb-8",children:[(0,j.jsxs)("span",{className:"text-gray-400 md:text-xl text-sm ",children:[180==f.current?"0":A(b[1],180-f.current)," wpm"]}),(0,j.jsx)(n,{setIsFinished:w,inputLostFocus:e,seconds:f,timerCountingInterval:H,updateStatistics:J})]}),(0,j.jsx)("div",{className:"lg:text-3xl md:text-xl sm:text-xl hover:cursor-pointer flex flex-wrap px-2 ",onClick:function(){return x.current.focus()},children:b[0].map(function(a,c){return(0,j.jsx)("div",{className:"flex ",children:a.word.split("").map(function(d,c){return 0==d.localeCompare(" ")&&0==b[1][a.indexFrom+c].charColor.localeCompare("text-AAError")?(0,j.jsxs)("div",{className:"relative text-AAError",children:[c+a.indexFrom==b[2].CursorPosition?(0,j.jsx)(D,{}):(0,j.jsx)(j.Fragment,{}),(0,j.jsxs)("div",{className:"relative",children:["\xa0 ",(0,j.jsx)("div",{className:"absolute bottom-0 h-[3px] w-full bg-AAError"})]})]},c):0==d.localeCompare(" ")?(0,j.jsxs)("div",{className:"relative ",children:[c+a.indexFrom==b[2].CursorPosition?(0,j.jsx)(D,{}):(0,j.jsx)(j.Fragment,{}),"\xa0"]},c):(0,j.jsxs)("div",{className:"relative ".concat(b[1][a.indexFrom+c].charColor),children:[d,c+a.indexFrom==b[2].CursorPosition?(0,j.jsx)(D,{}):(0,j.jsx)(j.Fragment,{})]},c)})},c)})}),(0,j.jsx)("div",{className:"w-full flex justify-center",children:(0,j.jsx)("input",{onBlur:function(){console.log("input lost focus!!"),N(!0)},ref:x,type:"text",className:"w-0 h-0 bg-AAprimary text-xl text-center text-gray-600 border-b-gray-600 py-2 px-4 focus:outline-none ",onChange:function(a){!1==I&&P(!0),C(a.target.value,a,v,L,b,K,w,H,J)},onKeyDownCapture:function(a){("ArrowLeft"===a.key||"ArrowRight"===a.key)&&x.current.setSelectionRange(x.current.value.length,x.current.value.length+1)}})})]})}),(0,j.jsx)(r,{className:"absolute bottom-0",link:"https://github.com/hktitof/Typing"})]}),d&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(y,{restart:u,roundCounter:c,seconds:f,statistics:s,timeToType:180}),(0,j.jsx)(r,{className:"pt-16",link:"https://github.com/hktitof/Typing"})]})]})}},7568:function(c,a,b){"use strict";function d(c,d,e,f,g,h,i){try{var a=c[h](i),b=a.value}catch(j){e(j);return}a.done?d(b):Promise.resolve(b).then(f,g)}function e(a){return function(){var b=this,c=arguments;return new Promise(function(f,g){var h=a.apply(b,c);function e(a){d(h,f,g,e,i,"next",a)}function i(a){d(h,f,g,e,i,"throw",a)}e(void 0)})}}b.d(a,{Z:function(){return e}})},9815:function(c,b,a){"use strict";a.d(b,{Z:function(){return g}});var d=a(943),e=a(3375),f=a(1566);function g(a){return function(a){if(Array.isArray(a))return(0,d.Z)(a)}(a)||(0,e.Z)(a)||(0,f.Z)(a)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}},function(a){a.O(0,[401,774,888,179],function(){var b;return a(a.s=8184)}),_N_E=a.O()}])