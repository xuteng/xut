(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const f of a.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&n(f)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerpolicy&&(a.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?a.credentials="include":r.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();var Ac=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ml={exports:{}};/*!
 * jQuery JavaScript Library v3.6.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2022-08-26T17:52Z
 */(function(o){(function(e,t){o.exports=e.document?t(e,!0):function(n){if(!n.document)throw new Error("jQuery requires a window with a document");return t(n)}})(typeof window<"u"?window:Ac,function(e,t){var n=[],r=Object.getPrototypeOf,a=n.slice,f=n.flat?function(i){return n.flat.call(i)}:function(i){return n.concat.apply([],i)},l=n.push,p=n.indexOf,d={},_=d.toString,x=d.hasOwnProperty,v=x.toString,S=v.call(Object),T={},g=function(s){return typeof s=="function"&&typeof s.nodeType!="number"&&typeof s.item!="function"},m=function(s){return s!=null&&s===s.window},w=e.document,R={type:!0,src:!0,nonce:!0,noModule:!0};function U(i,s,u){u=u||w;var h,y,M=u.createElement("script");if(M.text=i,s)for(h in R)y=s[h]||s.getAttribute&&s.getAttribute(h),y&&M.setAttribute(h,y);u.head.appendChild(M).parentNode.removeChild(M)}function P(i){return i==null?i+"":typeof i=="object"||typeof i=="function"?d[_.call(i)]||"object":typeof i}var L="3.6.1",c=function(i,s){return new c.fn.init(i,s)};c.fn=c.prototype={jquery:L,constructor:c,length:0,toArray:function(){return a.call(this)},get:function(i){return i==null?a.call(this):i<0?this[i+this.length]:this[i]},pushStack:function(i){var s=c.merge(this.constructor(),i);return s.prevObject=this,s},each:function(i){return c.each(this,i)},map:function(i){return this.pushStack(c.map(this,function(s,u){return i.call(s,u,s)}))},slice:function(){return this.pushStack(a.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(c.grep(this,function(i,s){return(s+1)%2}))},odd:function(){return this.pushStack(c.grep(this,function(i,s){return s%2}))},eq:function(i){var s=this.length,u=+i+(i<0?s:0);return this.pushStack(u>=0&&u<s?[this[u]]:[])},end:function(){return this.prevObject||this.constructor()},push:l,sort:n.sort,splice:n.splice},c.extend=c.fn.extend=function(){var i,s,u,h,y,M,b=arguments[0]||{},O=1,N=arguments.length,V=!1;for(typeof b=="boolean"&&(V=b,b=arguments[O]||{},O++),typeof b!="object"&&!g(b)&&(b={}),O===N&&(b=this,O--);O<N;O++)if((i=arguments[O])!=null)for(s in i)h=i[s],!(s==="__proto__"||b===h)&&(V&&h&&(c.isPlainObject(h)||(y=Array.isArray(h)))?(u=b[s],y&&!Array.isArray(u)?M=[]:!y&&!c.isPlainObject(u)?M={}:M=u,y=!1,b[s]=c.extend(V,M,h)):h!==void 0&&(b[s]=h));return b},c.extend({expando:"jQuery"+(L+Math.random()).replace(/\D/g,""),isReady:!0,error:function(i){throw new Error(i)},noop:function(){},isPlainObject:function(i){var s,u;return!i||_.call(i)!=="[object Object]"?!1:(s=r(i),s?(u=x.call(s,"constructor")&&s.constructor,typeof u=="function"&&v.call(u)===S):!0)},isEmptyObject:function(i){var s;for(s in i)return!1;return!0},globalEval:function(i,s,u){U(i,{nonce:s&&s.nonce},u)},each:function(i,s){var u,h=0;if(Y(i))for(u=i.length;h<u&&s.call(i[h],h,i[h])!==!1;h++);else for(h in i)if(s.call(i[h],h,i[h])===!1)break;return i},makeArray:function(i,s){var u=s||[];return i!=null&&(Y(Object(i))?c.merge(u,typeof i=="string"?[i]:i):l.call(u,i)),u},inArray:function(i,s,u){return s==null?-1:p.call(s,i,u)},merge:function(i,s){for(var u=+s.length,h=0,y=i.length;h<u;h++)i[y++]=s[h];return i.length=y,i},grep:function(i,s,u){for(var h,y=[],M=0,b=i.length,O=!u;M<b;M++)h=!s(i[M],M),h!==O&&y.push(i[M]);return y},map:function(i,s,u){var h,y,M=0,b=[];if(Y(i))for(h=i.length;M<h;M++)y=s(i[M],M,u),y!=null&&b.push(y);else for(M in i)y=s(i[M],M,u),y!=null&&b.push(y);return f(b)},guid:1,support:T}),typeof Symbol=="function"&&(c.fn[Symbol.iterator]=n[Symbol.iterator]),c.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(i,s){d["[object "+s+"]"]=s.toLowerCase()});function Y(i){var s=!!i&&"length"in i&&i.length,u=P(i);return g(i)||m(i)?!1:u==="array"||s===0||typeof s=="number"&&s>0&&s-1 in i}var A=function(i){var s,u,h,y,M,b,O,N,V,Q,he,K,ie,Ue,tt,ze,Ft,It,on,xt="sizzle"+1*new Date,Qe=i.document,tn=0,ut=0,Lt=Ur(),_r=Ur(),Nr=Ur(),ln=Ur(),mi=function(E,F){return E===F&&(he=!0),0},gi={}.hasOwnProperty,nn=[],Qn=nn.pop,gn=nn.push,ei=nn.push,Ga=nn.slice,_i=function(E,F){for(var G=0,se=E.length;G<se;G++)if(E[G]===F)return G;return-1},Ls="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",gt="[\\x20\\t\\r\\n\\f]",xi="(?:\\\\[\\da-fA-F]{1,6}"+gt+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",Ha="\\["+gt+"*("+xi+")(?:"+gt+"*([*^$|!~]?=)"+gt+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+xi+"))|)"+gt+"*\\]",Ds=":("+xi+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+Ha+")*)|.*)\\)|)",dc=new RegExp(gt+"+","g"),Fr=new RegExp("^"+gt+"+|((?:^|[^\\\\])(?:\\\\.)*)"+gt+"+$","g"),pc=new RegExp("^"+gt+"*,"+gt+"*"),Va=new RegExp("^"+gt+"*([>+~]|"+gt+")"+gt+"*"),mc=new RegExp(gt+"|>"),gc=new RegExp(Ds),_c=new RegExp("^"+xi+"$"),Or={ID:new RegExp("^#("+xi+")"),CLASS:new RegExp("^\\.("+xi+")"),TAG:new RegExp("^("+xi+"|[*])"),ATTR:new RegExp("^"+Ha),PSEUDO:new RegExp("^"+Ds),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+gt+"*(even|odd|(([+-]|)(\\d*)n|)"+gt+"*(?:([+-]|)"+gt+"*(\\d+)|))"+gt+"*\\)|)","i"),bool:new RegExp("^(?:"+Ls+")$","i"),needsContext:new RegExp("^"+gt+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+gt+"*((?:-\\d)?\\d*)"+gt+"*\\)|)(?=[^-]|$)","i")},xc=/HTML$/i,vc=/^(?:input|select|textarea|button)$/i,yc=/^h\d$/i,xr=/^[^{]+\{\s*\[native \w/,Mc=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Ps=/[+~]/,zn=new RegExp("\\\\[\\da-fA-F]{1,6}"+gt+"?|\\\\([^\\r\\n\\f])","g"),Bn=function(E,F){var G="0x"+E.slice(1)-65536;return F||(G<0?String.fromCharCode(G+65536):String.fromCharCode(G>>10|55296,G&1023|56320))},Wa=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,qa=function(E,F){return F?E==="\0"?"\uFFFD":E.slice(0,-1)+"\\"+E.charCodeAt(E.length-1).toString(16)+" ":"\\"+E},ja=function(){K()},bc=Br(function(E){return E.disabled===!0&&E.nodeName.toLowerCase()==="fieldset"},{dir:"parentNode",next:"legend"});try{ei.apply(nn=Ga.call(Qe.childNodes),Qe.childNodes),nn[Qe.childNodes.length].nodeType}catch{ei={apply:nn.length?function(F,G){gn.apply(F,Ga.call(G))}:function(F,G){for(var se=F.length,H=0;F[se++]=G[H++];);F.length=se-1}}}function vt(E,F,G,se){var H,le,de,we,Ce,je,Ve,Ye=F&&F.ownerDocument,st=F?F.nodeType:9;if(G=G||[],typeof E!="string"||!E||st!==1&&st!==9&&st!==11)return G;if(!se&&(K(F),F=F||ie,tt)){if(st!==11&&(Ce=Mc.exec(E)))if(H=Ce[1]){if(st===9)if(de=F.getElementById(H)){if(de.id===H)return G.push(de),G}else return G;else if(Ye&&(de=Ye.getElementById(H))&&on(F,de)&&de.id===H)return G.push(de),G}else{if(Ce[2])return ei.apply(G,F.getElementsByTagName(E)),G;if((H=Ce[3])&&u.getElementsByClassName&&F.getElementsByClassName)return ei.apply(G,F.getElementsByClassName(H)),G}if(u.qsa&&!ln[E+" "]&&(!ze||!ze.test(E))&&(st!==1||F.nodeName.toLowerCase()!=="object")){if(Ve=E,Ye=F,st===1&&(mc.test(E)||Va.test(E))){for(Ye=Ps.test(E)&&Is(F.parentNode)||F,(Ye!==F||!u.scope)&&((we=F.getAttribute("id"))?we=we.replace(Wa,qa):F.setAttribute("id",we=xt)),je=b(E),le=je.length;le--;)je[le]=(we?"#"+we:":scope")+" "+zr(je[le]);Ve=je.join(",")}try{return ei.apply(G,Ye.querySelectorAll(Ve)),G}catch{ln(E,!0)}finally{we===xt&&F.removeAttribute("id")}}}return N(E.replace(Fr,"$1"),F,G,se)}function Ur(){var E=[];function F(G,se){return E.push(G+" ")>h.cacheLength&&delete F[E.shift()],F[G+" "]=se}return F}function wn(E){return E[xt]=!0,E}function Tn(E){var F=ie.createElement("fieldset");try{return!!E(F)}catch{return!1}finally{F.parentNode&&F.parentNode.removeChild(F),F=null}}function Rs(E,F){for(var G=E.split("|"),se=G.length;se--;)h.attrHandle[G[se]]=F}function Xa(E,F){var G=F&&E,se=G&&E.nodeType===1&&F.nodeType===1&&E.sourceIndex-F.sourceIndex;if(se)return se;if(G){for(;G=G.nextSibling;)if(G===F)return-1}return E?1:-1}function Sc(E){return function(F){var G=F.nodeName.toLowerCase();return G==="input"&&F.type===E}}function wc(E){return function(F){var G=F.nodeName.toLowerCase();return(G==="input"||G==="button")&&F.type===E}}function Ya(E){return function(F){return"form"in F?F.parentNode&&F.disabled===!1?"label"in F?"label"in F.parentNode?F.parentNode.disabled===E:F.disabled===E:F.isDisabled===E||F.isDisabled!==!E&&bc(F)===E:F.disabled===E:"label"in F?F.disabled===E:!1}}function vi(E){return wn(function(F){return F=+F,wn(function(G,se){for(var H,le=E([],G.length,F),de=le.length;de--;)G[H=le[de]]&&(G[H]=!(se[H]=G[H]))})})}function Is(E){return E&&typeof E.getElementsByTagName<"u"&&E}u=vt.support={},M=vt.isXML=function(E){var F=E&&E.namespaceURI,G=E&&(E.ownerDocument||E).documentElement;return!xc.test(F||G&&G.nodeName||"HTML")},K=vt.setDocument=function(E){var F,G,se=E?E.ownerDocument||E:Qe;return se==ie||se.nodeType!==9||!se.documentElement||(ie=se,Ue=ie.documentElement,tt=!M(ie),Qe!=ie&&(G=ie.defaultView)&&G.top!==G&&(G.addEventListener?G.addEventListener("unload",ja,!1):G.attachEvent&&G.attachEvent("onunload",ja)),u.scope=Tn(function(H){return Ue.appendChild(H).appendChild(ie.createElement("div")),typeof H.querySelectorAll<"u"&&!H.querySelectorAll(":scope fieldset div").length}),u.attributes=Tn(function(H){return H.className="i",!H.getAttribute("className")}),u.getElementsByTagName=Tn(function(H){return H.appendChild(ie.createComment("")),!H.getElementsByTagName("*").length}),u.getElementsByClassName=xr.test(ie.getElementsByClassName),u.getById=Tn(function(H){return Ue.appendChild(H).id=xt,!ie.getElementsByName||!ie.getElementsByName(xt).length}),u.getById?(h.filter.ID=function(H){var le=H.replace(zn,Bn);return function(de){return de.getAttribute("id")===le}},h.find.ID=function(H,le){if(typeof le.getElementById<"u"&&tt){var de=le.getElementById(H);return de?[de]:[]}}):(h.filter.ID=function(H){var le=H.replace(zn,Bn);return function(de){var we=typeof de.getAttributeNode<"u"&&de.getAttributeNode("id");return we&&we.value===le}},h.find.ID=function(H,le){if(typeof le.getElementById<"u"&&tt){var de,we,Ce,je=le.getElementById(H);if(je){if(de=je.getAttributeNode("id"),de&&de.value===H)return[je];for(Ce=le.getElementsByName(H),we=0;je=Ce[we++];)if(de=je.getAttributeNode("id"),de&&de.value===H)return[je]}return[]}}),h.find.TAG=u.getElementsByTagName?function(H,le){if(typeof le.getElementsByTagName<"u")return le.getElementsByTagName(H);if(u.qsa)return le.querySelectorAll(H)}:function(H,le){var de,we=[],Ce=0,je=le.getElementsByTagName(H);if(H==="*"){for(;de=je[Ce++];)de.nodeType===1&&we.push(de);return we}return je},h.find.CLASS=u.getElementsByClassName&&function(H,le){if(typeof le.getElementsByClassName<"u"&&tt)return le.getElementsByClassName(H)},Ft=[],ze=[],(u.qsa=xr.test(ie.querySelectorAll))&&(Tn(function(H){var le;Ue.appendChild(H).innerHTML="<a id='"+xt+"'></a><select id='"+xt+"-\r\\' msallowcapture=''><option selected=''></option></select>",H.querySelectorAll("[msallowcapture^='']").length&&ze.push("[*^$]="+gt+`*(?:''|"")`),H.querySelectorAll("[selected]").length||ze.push("\\["+gt+"*(?:value|"+Ls+")"),H.querySelectorAll("[id~="+xt+"-]").length||ze.push("~="),le=ie.createElement("input"),le.setAttribute("name",""),H.appendChild(le),H.querySelectorAll("[name='']").length||ze.push("\\["+gt+"*name"+gt+"*="+gt+`*(?:''|"")`),H.querySelectorAll(":checked").length||ze.push(":checked"),H.querySelectorAll("a#"+xt+"+*").length||ze.push(".#.+[+~]"),H.querySelectorAll("\\\f"),ze.push("[\\r\\n\\f]")}),Tn(function(H){H.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var le=ie.createElement("input");le.setAttribute("type","hidden"),H.appendChild(le).setAttribute("name","D"),H.querySelectorAll("[name=d]").length&&ze.push("name"+gt+"*[*^$|!~]?="),H.querySelectorAll(":enabled").length!==2&&ze.push(":enabled",":disabled"),Ue.appendChild(H).disabled=!0,H.querySelectorAll(":disabled").length!==2&&ze.push(":enabled",":disabled"),H.querySelectorAll("*,:x"),ze.push(",.*:")})),(u.matchesSelector=xr.test(It=Ue.matches||Ue.webkitMatchesSelector||Ue.mozMatchesSelector||Ue.oMatchesSelector||Ue.msMatchesSelector))&&Tn(function(H){u.disconnectedMatch=It.call(H,"*"),It.call(H,"[s!='']:x"),Ft.push("!=",Ds)}),ze=ze.length&&new RegExp(ze.join("|")),Ft=Ft.length&&new RegExp(Ft.join("|")),F=xr.test(Ue.compareDocumentPosition),on=F||xr.test(Ue.contains)?function(H,le){var de=H.nodeType===9?H.documentElement:H,we=le&&le.parentNode;return H===we||!!(we&&we.nodeType===1&&(de.contains?de.contains(we):H.compareDocumentPosition&&H.compareDocumentPosition(we)&16))}:function(H,le){if(le){for(;le=le.parentNode;)if(le===H)return!0}return!1},mi=F?function(H,le){if(H===le)return he=!0,0;var de=!H.compareDocumentPosition-!le.compareDocumentPosition;return de||(de=(H.ownerDocument||H)==(le.ownerDocument||le)?H.compareDocumentPosition(le):1,de&1||!u.sortDetached&&le.compareDocumentPosition(H)===de?H==ie||H.ownerDocument==Qe&&on(Qe,H)?-1:le==ie||le.ownerDocument==Qe&&on(Qe,le)?1:Q?_i(Q,H)-_i(Q,le):0:de&4?-1:1)}:function(H,le){if(H===le)return he=!0,0;var de,we=0,Ce=H.parentNode,je=le.parentNode,Ve=[H],Ye=[le];if(!Ce||!je)return H==ie?-1:le==ie?1:Ce?-1:je?1:Q?_i(Q,H)-_i(Q,le):0;if(Ce===je)return Xa(H,le);for(de=H;de=de.parentNode;)Ve.unshift(de);for(de=le;de=de.parentNode;)Ye.unshift(de);for(;Ve[we]===Ye[we];)we++;return we?Xa(Ve[we],Ye[we]):Ve[we]==Qe?-1:Ye[we]==Qe?1:0}),ie},vt.matches=function(E,F){return vt(E,null,null,F)},vt.matchesSelector=function(E,F){if(K(E),u.matchesSelector&&tt&&!ln[F+" "]&&(!Ft||!Ft.test(F))&&(!ze||!ze.test(F)))try{var G=It.call(E,F);if(G||u.disconnectedMatch||E.document&&E.document.nodeType!==11)return G}catch{ln(F,!0)}return vt(F,ie,null,[E]).length>0},vt.contains=function(E,F){return(E.ownerDocument||E)!=ie&&K(E),on(E,F)},vt.attr=function(E,F){(E.ownerDocument||E)!=ie&&K(E);var G=h.attrHandle[F.toLowerCase()],se=G&&gi.call(h.attrHandle,F.toLowerCase())?G(E,F,!tt):void 0;return se!==void 0?se:u.attributes||!tt?E.getAttribute(F):(se=E.getAttributeNode(F))&&se.specified?se.value:null},vt.escape=function(E){return(E+"").replace(Wa,qa)},vt.error=function(E){throw new Error("Syntax error, unrecognized expression: "+E)},vt.uniqueSort=function(E){var F,G=[],se=0,H=0;if(he=!u.detectDuplicates,Q=!u.sortStable&&E.slice(0),E.sort(mi),he){for(;F=E[H++];)F===E[H]&&(se=G.push(H));for(;se--;)E.splice(G[se],1)}return Q=null,E},y=vt.getText=function(E){var F,G="",se=0,H=E.nodeType;if(H){if(H===1||H===9||H===11){if(typeof E.textContent=="string")return E.textContent;for(E=E.firstChild;E;E=E.nextSibling)G+=y(E)}else if(H===3||H===4)return E.nodeValue}else for(;F=E[se++];)G+=y(F);return G},h=vt.selectors={cacheLength:50,createPseudo:wn,match:Or,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(E){return E[1]=E[1].replace(zn,Bn),E[3]=(E[3]||E[4]||E[5]||"").replace(zn,Bn),E[2]==="~="&&(E[3]=" "+E[3]+" "),E.slice(0,4)},CHILD:function(E){return E[1]=E[1].toLowerCase(),E[1].slice(0,3)==="nth"?(E[3]||vt.error(E[0]),E[4]=+(E[4]?E[5]+(E[6]||1):2*(E[3]==="even"||E[3]==="odd")),E[5]=+(E[7]+E[8]||E[3]==="odd")):E[3]&&vt.error(E[0]),E},PSEUDO:function(E){var F,G=!E[6]&&E[2];return Or.CHILD.test(E[0])?null:(E[3]?E[2]=E[4]||E[5]||"":G&&gc.test(G)&&(F=b(G,!0))&&(F=G.indexOf(")",G.length-F)-G.length)&&(E[0]=E[0].slice(0,F),E[2]=G.slice(0,F)),E.slice(0,3))}},filter:{TAG:function(E){var F=E.replace(zn,Bn).toLowerCase();return E==="*"?function(){return!0}:function(G){return G.nodeName&&G.nodeName.toLowerCase()===F}},CLASS:function(E){var F=Lt[E+" "];return F||(F=new RegExp("(^|"+gt+")"+E+"("+gt+"|$)"))&&Lt(E,function(G){return F.test(typeof G.className=="string"&&G.className||typeof G.getAttribute<"u"&&G.getAttribute("class")||"")})},ATTR:function(E,F,G){return function(se){var H=vt.attr(se,E);return H==null?F==="!=":F?(H+="",F==="="?H===G:F==="!="?H!==G:F==="^="?G&&H.indexOf(G)===0:F==="*="?G&&H.indexOf(G)>-1:F==="$="?G&&H.slice(-G.length)===G:F==="~="?(" "+H.replace(dc," ")+" ").indexOf(G)>-1:F==="|="?H===G||H.slice(0,G.length+1)===G+"-":!1):!0}},CHILD:function(E,F,G,se,H){var le=E.slice(0,3)!=="nth",de=E.slice(-4)!=="last",we=F==="of-type";return se===1&&H===0?function(Ce){return!!Ce.parentNode}:function(Ce,je,Ve){var Ye,st,yt,Xe,Ot,Wt,cn=le!==de?"nextSibling":"previousSibling",wt=Ce.parentNode,vr=we&&Ce.nodeName.toLowerCase(),yr=!Ve&&!we,un=!1;if(wt){if(le){for(;cn;){for(Xe=Ce;Xe=Xe[cn];)if(we?Xe.nodeName.toLowerCase()===vr:Xe.nodeType===1)return!1;Wt=cn=E==="only"&&!Wt&&"nextSibling"}return!0}if(Wt=[de?wt.firstChild:wt.lastChild],de&&yr){for(Xe=wt,yt=Xe[xt]||(Xe[xt]={}),st=yt[Xe.uniqueID]||(yt[Xe.uniqueID]={}),Ye=st[E]||[],Ot=Ye[0]===tn&&Ye[1],un=Ot&&Ye[2],Xe=Ot&&wt.childNodes[Ot];Xe=++Ot&&Xe&&Xe[cn]||(un=Ot=0)||Wt.pop();)if(Xe.nodeType===1&&++un&&Xe===Ce){st[E]=[tn,Ot,un];break}}else if(yr&&(Xe=Ce,yt=Xe[xt]||(Xe[xt]={}),st=yt[Xe.uniqueID]||(yt[Xe.uniqueID]={}),Ye=st[E]||[],Ot=Ye[0]===tn&&Ye[1],un=Ot),un===!1)for(;(Xe=++Ot&&Xe&&Xe[cn]||(un=Ot=0)||Wt.pop())&&!((we?Xe.nodeName.toLowerCase()===vr:Xe.nodeType===1)&&++un&&(yr&&(yt=Xe[xt]||(Xe[xt]={}),st=yt[Xe.uniqueID]||(yt[Xe.uniqueID]={}),st[E]=[tn,un]),Xe===Ce)););return un-=H,un===se||un%se===0&&un/se>=0}}},PSEUDO:function(E,F){var G,se=h.pseudos[E]||h.setFilters[E.toLowerCase()]||vt.error("unsupported pseudo: "+E);return se[xt]?se(F):se.length>1?(G=[E,E,"",F],h.setFilters.hasOwnProperty(E.toLowerCase())?wn(function(H,le){for(var de,we=se(H,F),Ce=we.length;Ce--;)de=_i(H,we[Ce]),H[de]=!(le[de]=we[Ce])}):function(H){return se(H,0,G)}):se}},pseudos:{not:wn(function(E){var F=[],G=[],se=O(E.replace(Fr,"$1"));return se[xt]?wn(function(H,le,de,we){for(var Ce,je=se(H,null,we,[]),Ve=H.length;Ve--;)(Ce=je[Ve])&&(H[Ve]=!(le[Ve]=Ce))}):function(H,le,de){return F[0]=H,se(F,null,de,G),F[0]=null,!G.pop()}}),has:wn(function(E){return function(F){return vt(E,F).length>0}}),contains:wn(function(E){return E=E.replace(zn,Bn),function(F){return(F.textContent||y(F)).indexOf(E)>-1}}),lang:wn(function(E){return _c.test(E||"")||vt.error("unsupported lang: "+E),E=E.replace(zn,Bn).toLowerCase(),function(F){var G;do if(G=tt?F.lang:F.getAttribute("xml:lang")||F.getAttribute("lang"))return G=G.toLowerCase(),G===E||G.indexOf(E+"-")===0;while((F=F.parentNode)&&F.nodeType===1);return!1}}),target:function(E){var F=i.location&&i.location.hash;return F&&F.slice(1)===E.id},root:function(E){return E===Ue},focus:function(E){return E===ie.activeElement&&(!ie.hasFocus||ie.hasFocus())&&!!(E.type||E.href||~E.tabIndex)},enabled:Ya(!1),disabled:Ya(!0),checked:function(E){var F=E.nodeName.toLowerCase();return F==="input"&&!!E.checked||F==="option"&&!!E.selected},selected:function(E){return E.parentNode&&E.parentNode.selectedIndex,E.selected===!0},empty:function(E){for(E=E.firstChild;E;E=E.nextSibling)if(E.nodeType<6)return!1;return!0},parent:function(E){return!h.pseudos.empty(E)},header:function(E){return yc.test(E.nodeName)},input:function(E){return vc.test(E.nodeName)},button:function(E){var F=E.nodeName.toLowerCase();return F==="input"&&E.type==="button"||F==="button"},text:function(E){var F;return E.nodeName.toLowerCase()==="input"&&E.type==="text"&&((F=E.getAttribute("type"))==null||F.toLowerCase()==="text")},first:vi(function(){return[0]}),last:vi(function(E,F){return[F-1]}),eq:vi(function(E,F,G){return[G<0?G+F:G]}),even:vi(function(E,F){for(var G=0;G<F;G+=2)E.push(G);return E}),odd:vi(function(E,F){for(var G=1;G<F;G+=2)E.push(G);return E}),lt:vi(function(E,F,G){for(var se=G<0?G+F:G>F?F:G;--se>=0;)E.push(se);return E}),gt:vi(function(E,F,G){for(var se=G<0?G+F:G;++se<F;)E.push(se);return E})}},h.pseudos.nth=h.pseudos.eq;for(s in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})h.pseudos[s]=Sc(s);for(s in{submit:!0,reset:!0})h.pseudos[s]=wc(s);function $a(){}$a.prototype=h.filters=h.pseudos,h.setFilters=new $a,b=vt.tokenize=function(E,F){var G,se,H,le,de,we,Ce,je=_r[E+" "];if(je)return F?0:je.slice(0);for(de=E,we=[],Ce=h.preFilter;de;){(!G||(se=pc.exec(de)))&&(se&&(de=de.slice(se[0].length)||de),we.push(H=[])),G=!1,(se=Va.exec(de))&&(G=se.shift(),H.push({value:G,type:se[0].replace(Fr," ")}),de=de.slice(G.length));for(le in h.filter)(se=Or[le].exec(de))&&(!Ce[le]||(se=Ce[le](se)))&&(G=se.shift(),H.push({value:G,type:le,matches:se}),de=de.slice(G.length));if(!G)break}return F?de.length:de?vt.error(E):_r(E,we).slice(0)};function zr(E){for(var F=0,G=E.length,se="";F<G;F++)se+=E[F].value;return se}function Br(E,F,G){var se=F.dir,H=F.next,le=H||se,de=G&&le==="parentNode",we=ut++;return F.first?function(Ce,je,Ve){for(;Ce=Ce[se];)if(Ce.nodeType===1||de)return E(Ce,je,Ve);return!1}:function(Ce,je,Ve){var Ye,st,yt,Xe=[tn,we];if(Ve){for(;Ce=Ce[se];)if((Ce.nodeType===1||de)&&E(Ce,je,Ve))return!0}else for(;Ce=Ce[se];)if(Ce.nodeType===1||de)if(yt=Ce[xt]||(Ce[xt]={}),st=yt[Ce.uniqueID]||(yt[Ce.uniqueID]={}),H&&H===Ce.nodeName.toLowerCase())Ce=Ce[se]||Ce;else{if((Ye=st[le])&&Ye[0]===tn&&Ye[1]===we)return Xe[2]=Ye[2];if(st[le]=Xe,Xe[2]=E(Ce,je,Ve))return!0}return!1}}function Ns(E){return E.length>1?function(F,G,se){for(var H=E.length;H--;)if(!E[H](F,G,se))return!1;return!0}:E[0]}function Tc(E,F,G){for(var se=0,H=F.length;se<H;se++)vt(E,F[se],G);return G}function kr(E,F,G,se,H){for(var le,de=[],we=0,Ce=E.length,je=F!=null;we<Ce;we++)(le=E[we])&&(!G||G(le,se,H))&&(de.push(le),je&&F.push(we));return de}function Fs(E,F,G,se,H,le){return se&&!se[xt]&&(se=Fs(se)),H&&!H[xt]&&(H=Fs(H,le)),wn(function(de,we,Ce,je){var Ve,Ye,st,yt=[],Xe=[],Ot=we.length,Wt=de||Tc(F||"*",Ce.nodeType?[Ce]:Ce,[]),cn=E&&(de||!F)?kr(Wt,yt,E,Ce,je):Wt,wt=G?H||(de?E:Ot||se)?[]:we:cn;if(G&&G(cn,wt,Ce,je),se)for(Ve=kr(wt,Xe),se(Ve,[],Ce,je),Ye=Ve.length;Ye--;)(st=Ve[Ye])&&(wt[Xe[Ye]]=!(cn[Xe[Ye]]=st));if(de){if(H||E){if(H){for(Ve=[],Ye=wt.length;Ye--;)(st=wt[Ye])&&Ve.push(cn[Ye]=st);H(null,wt=[],Ve,je)}for(Ye=wt.length;Ye--;)(st=wt[Ye])&&(Ve=H?_i(de,st):yt[Ye])>-1&&(de[Ve]=!(we[Ve]=st))}}else wt=kr(wt===we?wt.splice(Ot,wt.length):wt),H?H(null,we,wt,je):ei.apply(we,wt)})}function Os(E){for(var F,G,se,H=E.length,le=h.relative[E[0].type],de=le||h.relative[" "],we=le?1:0,Ce=Br(function(Ye){return Ye===F},de,!0),je=Br(function(Ye){return _i(F,Ye)>-1},de,!0),Ve=[function(Ye,st,yt){var Xe=!le&&(yt||st!==V)||((F=st).nodeType?Ce(Ye,st,yt):je(Ye,st,yt));return F=null,Xe}];we<H;we++)if(G=h.relative[E[we].type])Ve=[Br(Ns(Ve),G)];else{if(G=h.filter[E[we].type].apply(null,E[we].matches),G[xt]){for(se=++we;se<H&&!h.relative[E[se].type];se++);return Fs(we>1&&Ns(Ve),we>1&&zr(E.slice(0,we-1).concat({value:E[we-2].type===" "?"*":""})).replace(Fr,"$1"),G,we<se&&Os(E.slice(we,se)),se<H&&Os(E=E.slice(se)),se<H&&zr(E))}Ve.push(G)}return Ns(Ve)}function Ec(E,F){var G=F.length>0,se=E.length>0,H=function(le,de,we,Ce,je){var Ve,Ye,st,yt=0,Xe="0",Ot=le&&[],Wt=[],cn=V,wt=le||se&&h.find.TAG("*",je),vr=tn+=cn==null?1:Math.random()||.1,yr=wt.length;for(je&&(V=de==ie||de||je);Xe!==yr&&(Ve=wt[Xe])!=null;Xe++){if(se&&Ve){for(Ye=0,!de&&Ve.ownerDocument!=ie&&(K(Ve),we=!tt);st=E[Ye++];)if(st(Ve,de||ie,we)){Ce.push(Ve);break}je&&(tn=vr)}G&&((Ve=!st&&Ve)&&yt--,le&&Ot.push(Ve))}if(yt+=Xe,G&&Xe!==yt){for(Ye=0;st=F[Ye++];)st(Ot,Wt,de,we);if(le){if(yt>0)for(;Xe--;)Ot[Xe]||Wt[Xe]||(Wt[Xe]=Qn.call(Ce));Wt=kr(Wt)}ei.apply(Ce,Wt),je&&!le&&Wt.length>0&&yt+F.length>1&&vt.uniqueSort(Ce)}return je&&(tn=vr,V=cn),Ot};return G?wn(H):H}return O=vt.compile=function(E,F){var G,se=[],H=[],le=Nr[E+" "];if(!le){for(F||(F=b(E)),G=F.length;G--;)le=Os(F[G]),le[xt]?se.push(le):H.push(le);le=Nr(E,Ec(H,se)),le.selector=E}return le},N=vt.select=function(E,F,G,se){var H,le,de,we,Ce,je=typeof E=="function"&&E,Ve=!se&&b(E=je.selector||E);if(G=G||[],Ve.length===1){if(le=Ve[0]=Ve[0].slice(0),le.length>2&&(de=le[0]).type==="ID"&&F.nodeType===9&&tt&&h.relative[le[1].type]){if(F=(h.find.ID(de.matches[0].replace(zn,Bn),F)||[])[0],F)je&&(F=F.parentNode);else return G;E=E.slice(le.shift().value.length)}for(H=Or.needsContext.test(E)?0:le.length;H--&&(de=le[H],!h.relative[we=de.type]);)if((Ce=h.find[we])&&(se=Ce(de.matches[0].replace(zn,Bn),Ps.test(le[0].type)&&Is(F.parentNode)||F))){if(le.splice(H,1),E=se.length&&zr(le),!E)return ei.apply(G,se),G;break}}return(je||O(E,Ve))(se,F,!tt,G,!F||Ps.test(E)&&Is(F.parentNode)||F),G},u.sortStable=xt.split("").sort(mi).join("")===xt,u.detectDuplicates=!!he,K(),u.sortDetached=Tn(function(E){return E.compareDocumentPosition(ie.createElement("fieldset"))&1}),Tn(function(E){return E.innerHTML="<a href='#'></a>",E.firstChild.getAttribute("href")==="#"})||Rs("type|href|height|width",function(E,F,G){if(!G)return E.getAttribute(F,F.toLowerCase()==="type"?1:2)}),(!u.attributes||!Tn(function(E){return E.innerHTML="<input/>",E.firstChild.setAttribute("value",""),E.firstChild.getAttribute("value")===""}))&&Rs("value",function(E,F,G){if(!G&&E.nodeName.toLowerCase()==="input")return E.defaultValue}),Tn(function(E){return E.getAttribute("disabled")==null})||Rs(Ls,function(E,F,G){var se;if(!G)return E[F]===!0?F.toLowerCase():(se=E.getAttributeNode(F))&&se.specified?se.value:null}),vt}(e);c.find=A,c.expr=A.selectors,c.expr[":"]=c.expr.pseudos,c.uniqueSort=c.unique=A.uniqueSort,c.text=A.getText,c.isXMLDoc=A.isXML,c.contains=A.contains,c.escapeSelector=A.escape;var B=function(i,s,u){for(var h=[],y=u!==void 0;(i=i[s])&&i.nodeType!==9;)if(i.nodeType===1){if(y&&c(i).is(u))break;h.push(i)}return h},J=function(i,s){for(var u=[];i;i=i.nextSibling)i.nodeType===1&&i!==s&&u.push(i);return u},pe=c.expr.match.needsContext;function be(i,s){return i.nodeName&&i.nodeName.toLowerCase()===s.toLowerCase()}var ne=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function $(i,s,u){return g(s)?c.grep(i,function(h,y){return!!s.call(h,y,h)!==u}):s.nodeType?c.grep(i,function(h){return h===s!==u}):typeof s!="string"?c.grep(i,function(h){return p.call(s,h)>-1!==u}):c.filter(s,i,u)}c.filter=function(i,s,u){var h=s[0];return u&&(i=":not("+i+")"),s.length===1&&h.nodeType===1?c.find.matchesSelector(h,i)?[h]:[]:c.find.matches(i,c.grep(s,function(y){return y.nodeType===1}))},c.fn.extend({find:function(i){var s,u,h=this.length,y=this;if(typeof i!="string")return this.pushStack(c(i).filter(function(){for(s=0;s<h;s++)if(c.contains(y[s],this))return!0}));for(u=this.pushStack([]),s=0;s<h;s++)c.find(i,y[s],u);return h>1?c.uniqueSort(u):u},filter:function(i){return this.pushStack($(this,i||[],!1))},not:function(i){return this.pushStack($(this,i||[],!0))},is:function(i){return!!$(this,typeof i=="string"&&pe.test(i)?c(i):i||[],!1).length}});var fe,xe=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,ve=c.fn.init=function(i,s,u){var h,y;if(!i)return this;if(u=u||fe,typeof i=="string")if(i[0]==="<"&&i[i.length-1]===">"&&i.length>=3?h=[null,i,null]:h=xe.exec(i),h&&(h[1]||!s))if(h[1]){if(s=s instanceof c?s[0]:s,c.merge(this,c.parseHTML(h[1],s&&s.nodeType?s.ownerDocument||s:w,!0)),ne.test(h[1])&&c.isPlainObject(s))for(h in s)g(this[h])?this[h](s[h]):this.attr(h,s[h]);return this}else return y=w.getElementById(h[2]),y&&(this[0]=y,this.length=1),this;else return!s||s.jquery?(s||u).find(i):this.constructor(s).find(i);else{if(i.nodeType)return this[0]=i,this.length=1,this;if(g(i))return u.ready!==void 0?u.ready(i):i(c)}return c.makeArray(i,this)};ve.prototype=c.fn,fe=c(w);var oe=/^(?:parents|prev(?:Until|All))/,Z={children:!0,contents:!0,next:!0,prev:!0};c.fn.extend({has:function(i){var s=c(i,this),u=s.length;return this.filter(function(){for(var h=0;h<u;h++)if(c.contains(this,s[h]))return!0})},closest:function(i,s){var u,h=0,y=this.length,M=[],b=typeof i!="string"&&c(i);if(!pe.test(i)){for(;h<y;h++)for(u=this[h];u&&u!==s;u=u.parentNode)if(u.nodeType<11&&(b?b.index(u)>-1:u.nodeType===1&&c.find.matchesSelector(u,i))){M.push(u);break}}return this.pushStack(M.length>1?c.uniqueSort(M):M)},index:function(i){return i?typeof i=="string"?p.call(c(i),this[0]):p.call(this,i.jquery?i[0]:i):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(i,s){return this.pushStack(c.uniqueSort(c.merge(this.get(),c(i,s))))},addBack:function(i){return this.add(i==null?this.prevObject:this.prevObject.filter(i))}});function ee(i,s){for(;(i=i[s])&&i.nodeType!==1;);return i}c.each({parent:function(i){var s=i.parentNode;return s&&s.nodeType!==11?s:null},parents:function(i){return B(i,"parentNode")},parentsUntil:function(i,s,u){return B(i,"parentNode",u)},next:function(i){return ee(i,"nextSibling")},prev:function(i){return ee(i,"previousSibling")},nextAll:function(i){return B(i,"nextSibling")},prevAll:function(i){return B(i,"previousSibling")},nextUntil:function(i,s,u){return B(i,"nextSibling",u)},prevUntil:function(i,s,u){return B(i,"previousSibling",u)},siblings:function(i){return J((i.parentNode||{}).firstChild,i)},children:function(i){return J(i.firstChild)},contents:function(i){return i.contentDocument!=null&&r(i.contentDocument)?i.contentDocument:(be(i,"template")&&(i=i.content||i),c.merge([],i.childNodes))}},function(i,s){c.fn[i]=function(u,h){var y=c.map(this,s,u);return i.slice(-5)!=="Until"&&(h=u),h&&typeof h=="string"&&(y=c.filter(h,y)),this.length>1&&(Z[i]||c.uniqueSort(y),oe.test(i)&&y.reverse()),this.pushStack(y)}});var _e=/[^\x20\t\r\n\f]+/g;function ye(i){var s={};return c.each(i.match(_e)||[],function(u,h){s[h]=!0}),s}c.Callbacks=function(i){i=typeof i=="string"?ye(i):c.extend({},i);var s,u,h,y,M=[],b=[],O=-1,N=function(){for(y=y||i.once,h=s=!0;b.length;O=-1)for(u=b.shift();++O<M.length;)M[O].apply(u[0],u[1])===!1&&i.stopOnFalse&&(O=M.length,u=!1);i.memory||(u=!1),s=!1,y&&(u?M=[]:M="")},V={add:function(){return M&&(u&&!s&&(O=M.length-1,b.push(u)),function Q(he){c.each(he,function(K,ie){g(ie)?(!i.unique||!V.has(ie))&&M.push(ie):ie&&ie.length&&P(ie)!=="string"&&Q(ie)})}(arguments),u&&!s&&N()),this},remove:function(){return c.each(arguments,function(Q,he){for(var K;(K=c.inArray(he,M,K))>-1;)M.splice(K,1),K<=O&&O--}),this},has:function(Q){return Q?c.inArray(Q,M)>-1:M.length>0},empty:function(){return M&&(M=[]),this},disable:function(){return y=b=[],M=u="",this},disabled:function(){return!M},lock:function(){return y=b=[],!u&&!s&&(M=u=""),this},locked:function(){return!!y},fireWith:function(Q,he){return y||(he=he||[],he=[Q,he.slice?he.slice():he],b.push(he),s||N()),this},fire:function(){return V.fireWith(this,arguments),this},fired:function(){return!!h}};return V};function me(i){return i}function Ne(i){throw i}function $e(i,s,u,h){var y;try{i&&g(y=i.promise)?y.call(i).done(s).fail(u):i&&g(y=i.then)?y.call(i,s,u):s.apply(void 0,[i].slice(h))}catch(M){u.apply(void 0,[M])}}c.extend({Deferred:function(i){var s=[["notify","progress",c.Callbacks("memory"),c.Callbacks("memory"),2],["resolve","done",c.Callbacks("once memory"),c.Callbacks("once memory"),0,"resolved"],["reject","fail",c.Callbacks("once memory"),c.Callbacks("once memory"),1,"rejected"]],u="pending",h={state:function(){return u},always:function(){return y.done(arguments).fail(arguments),this},catch:function(M){return h.then(null,M)},pipe:function(){var M=arguments;return c.Deferred(function(b){c.each(s,function(O,N){var V=g(M[N[4]])&&M[N[4]];y[N[1]](function(){var Q=V&&V.apply(this,arguments);Q&&g(Q.promise)?Q.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[N[0]+"With"](this,V?[Q]:arguments)})}),M=null}).promise()},then:function(M,b,O){var N=0;function V(Q,he,K,ie){return function(){var Ue=this,tt=arguments,ze=function(){var It,on;if(!(Q<N)){if(It=K.apply(Ue,tt),It===he.promise())throw new TypeError("Thenable self-resolution");on=It&&(typeof It=="object"||typeof It=="function")&&It.then,g(on)?ie?on.call(It,V(N,he,me,ie),V(N,he,Ne,ie)):(N++,on.call(It,V(N,he,me,ie),V(N,he,Ne,ie),V(N,he,me,he.notifyWith))):(K!==me&&(Ue=void 0,tt=[It]),(ie||he.resolveWith)(Ue,tt))}},Ft=ie?ze:function(){try{ze()}catch(It){c.Deferred.exceptionHook&&c.Deferred.exceptionHook(It,Ft.stackTrace),Q+1>=N&&(K!==Ne&&(Ue=void 0,tt=[It]),he.rejectWith(Ue,tt))}};Q?Ft():(c.Deferred.getStackHook&&(Ft.stackTrace=c.Deferred.getStackHook()),e.setTimeout(Ft))}}return c.Deferred(function(Q){s[0][3].add(V(0,Q,g(O)?O:me,Q.notifyWith)),s[1][3].add(V(0,Q,g(M)?M:me)),s[2][3].add(V(0,Q,g(b)?b:Ne))}).promise()},promise:function(M){return M!=null?c.extend(M,h):h}},y={};return c.each(s,function(M,b){var O=b[2],N=b[5];h[b[1]]=O.add,N&&O.add(function(){u=N},s[3-M][2].disable,s[3-M][3].disable,s[0][2].lock,s[0][3].lock),O.add(b[3].fire),y[b[0]]=function(){return y[b[0]+"With"](this===y?void 0:this,arguments),this},y[b[0]+"With"]=O.fireWith}),h.promise(y),i&&i.call(y,y),y},when:function(i){var s=arguments.length,u=s,h=Array(u),y=a.call(arguments),M=c.Deferred(),b=function(O){return function(N){h[O]=this,y[O]=arguments.length>1?a.call(arguments):N,--s||M.resolveWith(h,y)}};if(s<=1&&($e(i,M.done(b(u)).resolve,M.reject,!s),M.state()==="pending"||g(y[u]&&y[u].then)))return M.then();for(;u--;)$e(y[u],b(u),M.reject);return M.promise()}});var ce=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;c.Deferred.exceptionHook=function(i,s){e.console&&e.console.warn&&i&&ce.test(i.name)&&e.console.warn("jQuery.Deferred exception: "+i.message,i.stack,s)},c.readyException=function(i){e.setTimeout(function(){throw i})};var ct=c.Deferred();c.fn.ready=function(i){return ct.then(i).catch(function(s){c.readyException(s)}),this},c.extend({isReady:!1,readyWait:1,ready:function(i){(i===!0?--c.readyWait:c.isReady)||(c.isReady=!0,!(i!==!0&&--c.readyWait>0)&&ct.resolveWith(w,[c]))}}),c.ready.then=ct.then;function qe(){w.removeEventListener("DOMContentLoaded",qe),e.removeEventListener("load",qe),c.ready()}w.readyState==="complete"||w.readyState!=="loading"&&!w.documentElement.doScroll?e.setTimeout(c.ready):(w.addEventListener("DOMContentLoaded",qe),e.addEventListener("load",qe));var Ge=function(i,s,u,h,y,M,b){var O=0,N=i.length,V=u==null;if(P(u)==="object"){y=!0;for(O in u)Ge(i,s,O,u[O],!0,M,b)}else if(h!==void 0&&(y=!0,g(h)||(b=!0),V&&(b?(s.call(i,h),s=null):(V=s,s=function(Q,he,K){return V.call(c(Q),K)})),s))for(;O<N;O++)s(i[O],u,b?h:h.call(i[O],O,s(i[O],u)));return y?i:V?s.call(i):N?s(i[0],u):M},Fe=/^-ms-/,dt=/-([a-z])/g;function nt(i,s){return s.toUpperCase()}function Oe(i){return i.replace(Fe,"ms-").replace(dt,nt)}var Mt=function(i){return i.nodeType===1||i.nodeType===9||!+i.nodeType};function Et(){this.expando=c.expando+Et.uid++}Et.uid=1,Et.prototype={cache:function(i){var s=i[this.expando];return s||(s={},Mt(i)&&(i.nodeType?i[this.expando]=s:Object.defineProperty(i,this.expando,{value:s,configurable:!0}))),s},set:function(i,s,u){var h,y=this.cache(i);if(typeof s=="string")y[Oe(s)]=u;else for(h in s)y[Oe(h)]=s[h];return y},get:function(i,s){return s===void 0?this.cache(i):i[this.expando]&&i[this.expando][Oe(s)]},access:function(i,s,u){return s===void 0||s&&typeof s=="string"&&u===void 0?this.get(i,s):(this.set(i,s,u),u!==void 0?u:s)},remove:function(i,s){var u,h=i[this.expando];if(h!==void 0){if(s!==void 0)for(Array.isArray(s)?s=s.map(Oe):(s=Oe(s),s=s in h?[s]:s.match(_e)||[]),u=s.length;u--;)delete h[s[u]];(s===void 0||c.isEmptyObject(h))&&(i.nodeType?i[this.expando]=void 0:delete i[this.expando])}},hasData:function(i){var s=i[this.expando];return s!==void 0&&!c.isEmptyObject(s)}};var Pe=new Et,_t=new Et,Rt=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,pt=/[A-Z]/g;function Kt(i){return i==="true"?!0:i==="false"?!1:i==="null"?null:i===+i+""?+i:Rt.test(i)?JSON.parse(i):i}function Yt(i,s,u){var h;if(u===void 0&&i.nodeType===1)if(h="data-"+s.replace(pt,"-$&").toLowerCase(),u=i.getAttribute(h),typeof u=="string"){try{u=Kt(u)}catch{}_t.set(i,s,u)}else u=void 0;return u}c.extend({hasData:function(i){return _t.hasData(i)||Pe.hasData(i)},data:function(i,s,u){return _t.access(i,s,u)},removeData:function(i,s){_t.remove(i,s)},_data:function(i,s,u){return Pe.access(i,s,u)},_removeData:function(i,s){Pe.remove(i,s)}}),c.fn.extend({data:function(i,s){var u,h,y,M=this[0],b=M&&M.attributes;if(i===void 0){if(this.length&&(y=_t.get(M),M.nodeType===1&&!Pe.get(M,"hasDataAttrs"))){for(u=b.length;u--;)b[u]&&(h=b[u].name,h.indexOf("data-")===0&&(h=Oe(h.slice(5)),Yt(M,h,y[h])));Pe.set(M,"hasDataAttrs",!0)}return y}return typeof i=="object"?this.each(function(){_t.set(this,i)}):Ge(this,function(O){var N;if(M&&O===void 0)return N=_t.get(M,i),N!==void 0||(N=Yt(M,i),N!==void 0)?N:void 0;this.each(function(){_t.set(this,i,O)})},null,s,arguments.length>1,null,!0)},removeData:function(i){return this.each(function(){_t.remove(this,i)})}}),c.extend({queue:function(i,s,u){var h;if(i)return s=(s||"fx")+"queue",h=Pe.get(i,s),u&&(!h||Array.isArray(u)?h=Pe.access(i,s,c.makeArray(u)):h.push(u)),h||[]},dequeue:function(i,s){s=s||"fx";var u=c.queue(i,s),h=u.length,y=u.shift(),M=c._queueHooks(i,s),b=function(){c.dequeue(i,s)};y==="inprogress"&&(y=u.shift(),h--),y&&(s==="fx"&&u.unshift("inprogress"),delete M.stop,y.call(i,b,M)),!h&&M&&M.empty.fire()},_queueHooks:function(i,s){var u=s+"queueHooks";return Pe.get(i,u)||Pe.access(i,u,{empty:c.Callbacks("once memory").add(function(){Pe.remove(i,[s+"queue",u])})})}}),c.fn.extend({queue:function(i,s){var u=2;return typeof i!="string"&&(s=i,i="fx",u--),arguments.length<u?c.queue(this[0],i):s===void 0?this:this.each(function(){var h=c.queue(this,i,s);c._queueHooks(this,i),i==="fx"&&h[0]!=="inprogress"&&c.dequeue(this,i)})},dequeue:function(i){return this.each(function(){c.dequeue(this,i)})},clearQueue:function(i){return this.queue(i||"fx",[])},promise:function(i,s){var u,h=1,y=c.Deferred(),M=this,b=this.length,O=function(){--h||y.resolveWith(M,[M])};for(typeof i!="string"&&(s=i,i=void 0),i=i||"fx";b--;)u=Pe.get(M[b],i+"queueHooks"),u&&u.empty&&(h++,u.empty.add(O));return O(),y.promise(s)}});var I=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,C=new RegExp("^(?:([+-])=|)("+I+")([a-z%]*)$","i"),te=["Top","Right","Bottom","Left"],ge=w.documentElement,Me=function(i){return c.contains(i.ownerDocument,i)},De={composed:!0};ge.getRootNode&&(Me=function(i){return c.contains(i.ownerDocument,i)||i.getRootNode(De)===i.ownerDocument});var We=function(i,s){return i=s||i,i.style.display==="none"||i.style.display===""&&Me(i)&&c.css(i,"display")==="none"};function z(i,s,u,h){var y,M,b=20,O=h?function(){return h.cur()}:function(){return c.css(i,s,"")},N=O(),V=u&&u[3]||(c.cssNumber[s]?"":"px"),Q=i.nodeType&&(c.cssNumber[s]||V!=="px"&&+N)&&C.exec(c.css(i,s));if(Q&&Q[3]!==V){for(N=N/2,V=V||Q[3],Q=+N||1;b--;)c.style(i,s,Q+V),(1-M)*(1-(M=O()/N||.5))<=0&&(b=0),Q=Q/M;Q=Q*2,c.style(i,s,Q+V),u=u||[]}return u&&(Q=+Q||+N||0,y=u[1]?Q+(u[1]+1)*u[2]:+u[2],h&&(h.unit=V,h.start=Q,h.end=y)),y}var j={};function Re(i){var s,u=i.ownerDocument,h=i.nodeName,y=j[h];return y||(s=u.body.appendChild(u.createElement(h)),y=c.css(s,"display"),s.parentNode.removeChild(s),y==="none"&&(y="block"),j[h]=y,y)}function Ie(i,s){for(var u,h,y=[],M=0,b=i.length;M<b;M++)h=i[M],h.style&&(u=h.style.display,s?(u==="none"&&(y[M]=Pe.get(h,"display")||null,y[M]||(h.style.display="")),h.style.display===""&&We(h)&&(y[M]=Re(h))):u!=="none"&&(y[M]="none",Pe.set(h,"display",u)));for(M=0;M<b;M++)y[M]!=null&&(i[M].style.display=y[M]);return i}c.fn.extend({show:function(){return Ie(this,!0)},hide:function(){return Ie(this)},toggle:function(i){return typeof i=="boolean"?i?this.show():this.hide():this.each(function(){We(this)?c(this).show():c(this).hide()})}});var Le=/^(?:checkbox|radio)$/i,Be=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,Ze=/^$|^module$|\/(?:java|ecma)script/i;(function(){var i=w.createDocumentFragment(),s=i.appendChild(w.createElement("div")),u=w.createElement("input");u.setAttribute("type","radio"),u.setAttribute("checked","checked"),u.setAttribute("name","t"),s.appendChild(u),T.checkClone=s.cloneNode(!0).cloneNode(!0).lastChild.checked,s.innerHTML="<textarea>x</textarea>",T.noCloneChecked=!!s.cloneNode(!0).lastChild.defaultValue,s.innerHTML="<option></option>",T.option=!!s.lastChild})();var et={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};et.tbody=et.tfoot=et.colgroup=et.caption=et.thead,et.th=et.td,T.option||(et.optgroup=et.option=[1,"<select multiple='multiple'>","</select>"]);function k(i,s){var u;return typeof i.getElementsByTagName<"u"?u=i.getElementsByTagName(s||"*"):typeof i.querySelectorAll<"u"?u=i.querySelectorAll(s||"*"):u=[],s===void 0||s&&be(i,s)?c.merge([i],u):u}function Ae(i,s){for(var u=0,h=i.length;u<h;u++)Pe.set(i[u],"globalEval",!s||Pe.get(s[u],"globalEval"))}var Se=/<|&#?\w+;/;function ue(i,s,u,h,y){for(var M,b,O,N,V,Q,he=s.createDocumentFragment(),K=[],ie=0,Ue=i.length;ie<Ue;ie++)if(M=i[ie],M||M===0)if(P(M)==="object")c.merge(K,M.nodeType?[M]:M);else if(!Se.test(M))K.push(s.createTextNode(M));else{for(b=b||he.appendChild(s.createElement("div")),O=(Be.exec(M)||["",""])[1].toLowerCase(),N=et[O]||et._default,b.innerHTML=N[1]+c.htmlPrefilter(M)+N[2],Q=N[0];Q--;)b=b.lastChild;c.merge(K,b.childNodes),b=he.firstChild,b.textContent=""}for(he.textContent="",ie=0;M=K[ie++];){if(h&&c.inArray(M,h)>-1){y&&y.push(M);continue}if(V=Me(M),b=k(he.appendChild(M),"script"),V&&Ae(b),u)for(Q=0;M=b[Q++];)Ze.test(M.type||"")&&u.push(M)}return he}var Te=/^([^.]*)(?:\.(.+)|)/;function He(){return!0}function ft(){return!1}function At(i,s){return i===Pn()==(s==="focus")}function Pn(){try{return w.activeElement}catch{}}function bt(i,s,u,h,y,M){var b,O;if(typeof s=="object"){typeof u!="string"&&(h=h||u,u=void 0);for(O in s)bt(i,O,u,h,s[O],M);return i}if(h==null&&y==null?(y=u,h=u=void 0):y==null&&(typeof u=="string"?(y=h,h=void 0):(y=h,h=u,u=void 0)),y===!1)y=ft;else if(!y)return i;return M===1&&(b=y,y=function(N){return c().off(N),b.apply(this,arguments)},y.guid=b.guid||(b.guid=c.guid++)),i.each(function(){c.event.add(this,s,y,h,u)})}c.event={global:{},add:function(i,s,u,h,y){var M,b,O,N,V,Q,he,K,ie,Ue,tt,ze=Pe.get(i);if(!!Mt(i))for(u.handler&&(M=u,u=M.handler,y=M.selector),y&&c.find.matchesSelector(ge,y),u.guid||(u.guid=c.guid++),(N=ze.events)||(N=ze.events=Object.create(null)),(b=ze.handle)||(b=ze.handle=function(Ft){return typeof c<"u"&&c.event.triggered!==Ft.type?c.event.dispatch.apply(i,arguments):void 0}),s=(s||"").match(_e)||[""],V=s.length;V--;)O=Te.exec(s[V])||[],ie=tt=O[1],Ue=(O[2]||"").split(".").sort(),ie&&(he=c.event.special[ie]||{},ie=(y?he.delegateType:he.bindType)||ie,he=c.event.special[ie]||{},Q=c.extend({type:ie,origType:tt,data:h,handler:u,guid:u.guid,selector:y,needsContext:y&&c.expr.match.needsContext.test(y),namespace:Ue.join(".")},M),(K=N[ie])||(K=N[ie]=[],K.delegateCount=0,(!he.setup||he.setup.call(i,h,Ue,b)===!1)&&i.addEventListener&&i.addEventListener(ie,b)),he.add&&(he.add.call(i,Q),Q.handler.guid||(Q.handler.guid=u.guid)),y?K.splice(K.delegateCount++,0,Q):K.push(Q),c.event.global[ie]=!0)},remove:function(i,s,u,h,y){var M,b,O,N,V,Q,he,K,ie,Ue,tt,ze=Pe.hasData(i)&&Pe.get(i);if(!(!ze||!(N=ze.events))){for(s=(s||"").match(_e)||[""],V=s.length;V--;){if(O=Te.exec(s[V])||[],ie=tt=O[1],Ue=(O[2]||"").split(".").sort(),!ie){for(ie in N)c.event.remove(i,ie+s[V],u,h,!0);continue}for(he=c.event.special[ie]||{},ie=(h?he.delegateType:he.bindType)||ie,K=N[ie]||[],O=O[2]&&new RegExp("(^|\\.)"+Ue.join("\\.(?:.*\\.|)")+"(\\.|$)"),b=M=K.length;M--;)Q=K[M],(y||tt===Q.origType)&&(!u||u.guid===Q.guid)&&(!O||O.test(Q.namespace))&&(!h||h===Q.selector||h==="**"&&Q.selector)&&(K.splice(M,1),Q.selector&&K.delegateCount--,he.remove&&he.remove.call(i,Q));b&&!K.length&&((!he.teardown||he.teardown.call(i,Ue,ze.handle)===!1)&&c.removeEvent(i,ie,ze.handle),delete N[ie])}c.isEmptyObject(N)&&Pe.remove(i,"handle events")}},dispatch:function(i){var s,u,h,y,M,b,O=new Array(arguments.length),N=c.event.fix(i),V=(Pe.get(this,"events")||Object.create(null))[N.type]||[],Q=c.event.special[N.type]||{};for(O[0]=N,s=1;s<arguments.length;s++)O[s]=arguments[s];if(N.delegateTarget=this,!(Q.preDispatch&&Q.preDispatch.call(this,N)===!1)){for(b=c.event.handlers.call(this,N,V),s=0;(y=b[s++])&&!N.isPropagationStopped();)for(N.currentTarget=y.elem,u=0;(M=y.handlers[u++])&&!N.isImmediatePropagationStopped();)(!N.rnamespace||M.namespace===!1||N.rnamespace.test(M.namespace))&&(N.handleObj=M,N.data=M.data,h=((c.event.special[M.origType]||{}).handle||M.handler).apply(y.elem,O),h!==void 0&&(N.result=h)===!1&&(N.preventDefault(),N.stopPropagation()));return Q.postDispatch&&Q.postDispatch.call(this,N),N.result}},handlers:function(i,s){var u,h,y,M,b,O=[],N=s.delegateCount,V=i.target;if(N&&V.nodeType&&!(i.type==="click"&&i.button>=1)){for(;V!==this;V=V.parentNode||this)if(V.nodeType===1&&!(i.type==="click"&&V.disabled===!0)){for(M=[],b={},u=0;u<N;u++)h=s[u],y=h.selector+" ",b[y]===void 0&&(b[y]=h.needsContext?c(y,this).index(V)>-1:c.find(y,this,null,[V]).length),b[y]&&M.push(h);M.length&&O.push({elem:V,handlers:M})}}return V=this,N<s.length&&O.push({elem:V,handlers:s.slice(N)}),O},addProp:function(i,s){Object.defineProperty(c.Event.prototype,i,{enumerable:!0,configurable:!0,get:g(s)?function(){if(this.originalEvent)return s(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[i]},set:function(u){Object.defineProperty(this,i,{enumerable:!0,configurable:!0,writable:!0,value:u})}})},fix:function(i){return i[c.expando]?i:new c.Event(i)},special:{load:{noBubble:!0},click:{setup:function(i){var s=this||i;return Le.test(s.type)&&s.click&&be(s,"input")&&Jt(s,"click",He),!1},trigger:function(i){var s=this||i;return Le.test(s.type)&&s.click&&be(s,"input")&&Jt(s,"click"),!0},_default:function(i){var s=i.target;return Le.test(s.type)&&s.click&&be(s,"input")&&Pe.get(s,"click")||be(s,"a")}},beforeunload:{postDispatch:function(i){i.result!==void 0&&i.originalEvent&&(i.originalEvent.returnValue=i.result)}}}};function Jt(i,s,u){if(!u){Pe.get(i,s)===void 0&&c.event.add(i,s,He);return}Pe.set(i,s,!1),c.event.add(i,s,{namespace:!1,handler:function(h){var y,M,b=Pe.get(this,s);if(h.isTrigger&1&&this[s]){if(b.length)(c.event.special[s]||{}).delegateType&&h.stopPropagation();else if(b=a.call(arguments),Pe.set(this,s,b),y=u(this,s),this[s](),M=Pe.get(this,s),b!==M||y?Pe.set(this,s,!1):M={},b!==M)return h.stopImmediatePropagation(),h.preventDefault(),M&&M.value}else b.length&&(Pe.set(this,s,{value:c.event.trigger(c.extend(b[0],c.Event.prototype),b.slice(1),this)}),h.stopImmediatePropagation())}})}c.removeEvent=function(i,s,u){i.removeEventListener&&i.removeEventListener(s,u)},c.Event=function(i,s){if(!(this instanceof c.Event))return new c.Event(i,s);i&&i.type?(this.originalEvent=i,this.type=i.type,this.isDefaultPrevented=i.defaultPrevented||i.defaultPrevented===void 0&&i.returnValue===!1?He:ft,this.target=i.target&&i.target.nodeType===3?i.target.parentNode:i.target,this.currentTarget=i.currentTarget,this.relatedTarget=i.relatedTarget):this.type=i,s&&c.extend(this,s),this.timeStamp=i&&i.timeStamp||Date.now(),this[c.expando]=!0},c.Event.prototype={constructor:c.Event,isDefaultPrevented:ft,isPropagationStopped:ft,isImmediatePropagationStopped:ft,isSimulated:!1,preventDefault:function(){var i=this.originalEvent;this.isDefaultPrevented=He,i&&!this.isSimulated&&i.preventDefault()},stopPropagation:function(){var i=this.originalEvent;this.isPropagationStopped=He,i&&!this.isSimulated&&i.stopPropagation()},stopImmediatePropagation:function(){var i=this.originalEvent;this.isImmediatePropagationStopped=He,i&&!this.isSimulated&&i.stopImmediatePropagation(),this.stopPropagation()}},c.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},c.event.addProp),c.each({focus:"focusin",blur:"focusout"},function(i,s){c.event.special[i]={setup:function(){return Jt(this,i,At),!1},trigger:function(){return Jt(this,i),!0},_default:function(u){return Pe.get(u.target,i)},delegateType:s}}),c.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(i,s){c.event.special[i]={delegateType:s,bindType:s,handle:function(u){var h,y=this,M=u.relatedTarget,b=u.handleObj;return(!M||M!==y&&!c.contains(y,M))&&(u.type=b.origType,h=b.handler.apply(this,arguments),u.type=s),h}}}),c.fn.extend({on:function(i,s,u,h){return bt(this,i,s,u,h)},one:function(i,s,u,h){return bt(this,i,s,u,h,1)},off:function(i,s,u){var h,y;if(i&&i.preventDefault&&i.handleObj)return h=i.handleObj,c(i.delegateTarget).off(h.namespace?h.origType+"."+h.namespace:h.origType,h.selector,h.handler),this;if(typeof i=="object"){for(y in i)this.off(y,s,i[y]);return this}return(s===!1||typeof s=="function")&&(u=s,s=void 0),u===!1&&(u=ft),this.each(function(){c.event.remove(this,i,u,s)})}});var Qt=/<script|<style|<link/i,vs=/checked\s*(?:[^=]|=\s*.checked.)/i,Ui=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function hr(i,s){return be(i,"table")&&be(s.nodeType!==11?s:s.firstChild,"tr")&&c(i).children("tbody")[0]||i}function ys(i){return i.type=(i.getAttribute("type")!==null)+"/"+i.type,i}function Ms(i){return(i.type||"").slice(0,5)==="true/"?i.type=i.type.slice(5):i.removeAttribute("type"),i}function Rr(i,s){var u,h,y,M,b,O,N;if(s.nodeType===1){if(Pe.hasData(i)&&(M=Pe.get(i),N=M.events,N)){Pe.remove(s,"handle events");for(y in N)for(u=0,h=N[y].length;u<h;u++)c.event.add(s,y,N[y][u])}_t.hasData(i)&&(b=_t.access(i),O=c.extend({},b),_t.set(s,O))}}function D(i,s){var u=s.nodeName.toLowerCase();u==="input"&&Le.test(i.type)?s.checked=i.checked:(u==="input"||u==="textarea")&&(s.defaultValue=i.defaultValue)}function X(i,s,u,h){s=f(s);var y,M,b,O,N,V,Q=0,he=i.length,K=he-1,ie=s[0],Ue=g(ie);if(Ue||he>1&&typeof ie=="string"&&!T.checkClone&&vs.test(ie))return i.each(function(tt){var ze=i.eq(tt);Ue&&(s[0]=ie.call(this,tt,ze.html())),X(ze,s,u,h)});if(he&&(y=ue(s,i[0].ownerDocument,!1,i,h),M=y.firstChild,y.childNodes.length===1&&(y=M),M||h)){for(b=c.map(k(y,"script"),ys),O=b.length;Q<he;Q++)N=y,Q!==K&&(N=c.clone(N,!0,!0),O&&c.merge(b,k(N,"script"))),u.call(i[Q],N,Q);if(O)for(V=b[b.length-1].ownerDocument,c.map(b,Ms),Q=0;Q<O;Q++)N=b[Q],Ze.test(N.type||"")&&!Pe.access(N,"globalEval")&&c.contains(V,N)&&(N.src&&(N.type||"").toLowerCase()!=="module"?c._evalUrl&&!N.noModule&&c._evalUrl(N.src,{nonce:N.nonce||N.getAttribute("nonce")},V):U(N.textContent.replace(Ui,""),N,V))}return i}function re(i,s,u){for(var h,y=s?c.filter(s,i):i,M=0;(h=y[M])!=null;M++)!u&&h.nodeType===1&&c.cleanData(k(h)),h.parentNode&&(u&&Me(h)&&Ae(k(h,"script")),h.parentNode.removeChild(h));return i}c.extend({htmlPrefilter:function(i){return i},clone:function(i,s,u){var h,y,M,b,O=i.cloneNode(!0),N=Me(i);if(!T.noCloneChecked&&(i.nodeType===1||i.nodeType===11)&&!c.isXMLDoc(i))for(b=k(O),M=k(i),h=0,y=M.length;h<y;h++)D(M[h],b[h]);if(s)if(u)for(M=M||k(i),b=b||k(O),h=0,y=M.length;h<y;h++)Rr(M[h],b[h]);else Rr(i,O);return b=k(O,"script"),b.length>0&&Ae(b,!N&&k(i,"script")),O},cleanData:function(i){for(var s,u,h,y=c.event.special,M=0;(u=i[M])!==void 0;M++)if(Mt(u)){if(s=u[Pe.expando]){if(s.events)for(h in s.events)y[h]?c.event.remove(u,h):c.removeEvent(u,h,s.handle);u[Pe.expando]=void 0}u[_t.expando]&&(u[_t.expando]=void 0)}}}),c.fn.extend({detach:function(i){return re(this,i,!0)},remove:function(i){return re(this,i)},text:function(i){return Ge(this,function(s){return s===void 0?c.text(this):this.empty().each(function(){(this.nodeType===1||this.nodeType===11||this.nodeType===9)&&(this.textContent=s)})},null,i,arguments.length)},append:function(){return X(this,arguments,function(i){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var s=hr(this,i);s.appendChild(i)}})},prepend:function(){return X(this,arguments,function(i){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var s=hr(this,i);s.insertBefore(i,s.firstChild)}})},before:function(){return X(this,arguments,function(i){this.parentNode&&this.parentNode.insertBefore(i,this)})},after:function(){return X(this,arguments,function(i){this.parentNode&&this.parentNode.insertBefore(i,this.nextSibling)})},empty:function(){for(var i,s=0;(i=this[s])!=null;s++)i.nodeType===1&&(c.cleanData(k(i,!1)),i.textContent="");return this},clone:function(i,s){return i=i==null?!1:i,s=s==null?i:s,this.map(function(){return c.clone(this,i,s)})},html:function(i){return Ge(this,function(s){var u=this[0]||{},h=0,y=this.length;if(s===void 0&&u.nodeType===1)return u.innerHTML;if(typeof s=="string"&&!Qt.test(s)&&!et[(Be.exec(s)||["",""])[1].toLowerCase()]){s=c.htmlPrefilter(s);try{for(;h<y;h++)u=this[h]||{},u.nodeType===1&&(c.cleanData(k(u,!1)),u.innerHTML=s);u=0}catch{}}u&&this.empty().append(s)},null,i,arguments.length)},replaceWith:function(){var i=[];return X(this,arguments,function(s){var u=this.parentNode;c.inArray(this,i)<0&&(c.cleanData(k(this)),u&&u.replaceChild(s,this))},i)}}),c.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(i,s){c.fn[i]=function(u){for(var h,y=[],M=c(u),b=M.length-1,O=0;O<=b;O++)h=O===b?this:this.clone(!0),c(M[O])[s](h),l.apply(y,h.get());return this.pushStack(y)}});var q=new RegExp("^("+I+")(?!px)[a-z%]+$","i"),ae=/^--/,ke=function(i){var s=i.ownerDocument.defaultView;return(!s||!s.opener)&&(s=e),s.getComputedStyle(i)},Ke=function(i,s,u){var h,y,M={};for(y in s)M[y]=i.style[y],i.style[y]=s[y];h=u.call(i);for(y in s)i.style[y]=M[y];return h},it=new RegExp(te.join("|"),"i"),Je="[\\x20\\t\\r\\n\\f]",mt=new RegExp("^"+Je+"+|((?:^|[^\\\\])(?:\\\\.)*)"+Je+"+$","g");(function(){function i(){if(!!V){N.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",V.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",ge.appendChild(N).appendChild(V);var Q=e.getComputedStyle(V);u=Q.top!=="1%",O=s(Q.marginLeft)===12,V.style.right="60%",M=s(Q.right)===36,h=s(Q.width)===36,V.style.position="absolute",y=s(V.offsetWidth/3)===12,ge.removeChild(N),V=null}}function s(Q){return Math.round(parseFloat(Q))}var u,h,y,M,b,O,N=w.createElement("div"),V=w.createElement("div");!V.style||(V.style.backgroundClip="content-box",V.cloneNode(!0).style.backgroundClip="",T.clearCloneStyle=V.style.backgroundClip==="content-box",c.extend(T,{boxSizingReliable:function(){return i(),h},pixelBoxStyles:function(){return i(),M},pixelPosition:function(){return i(),u},reliableMarginLeft:function(){return i(),O},scrollboxSize:function(){return i(),y},reliableTrDimensions:function(){var Q,he,K,ie;return b==null&&(Q=w.createElement("table"),he=w.createElement("tr"),K=w.createElement("div"),Q.style.cssText="position:absolute;left:-11111px;border-collapse:separate",he.style.cssText="border:1px solid",he.style.height="1px",K.style.height="9px",K.style.display="block",ge.appendChild(Q).appendChild(he).appendChild(K),ie=e.getComputedStyle(he),b=parseInt(ie.height,10)+parseInt(ie.borderTopWidth,10)+parseInt(ie.borderBottomWidth,10)===he.offsetHeight,ge.removeChild(Q)),b}}))})();function rt(i,s,u){var h,y,M,b,O=ae.test(s),N=i.style;return u=u||ke(i),u&&(b=u.getPropertyValue(s)||u[s],O&&(b=b.replace(mt,"$1")),b===""&&!Me(i)&&(b=c.style(i,s)),!T.pixelBoxStyles()&&q.test(b)&&it.test(s)&&(h=N.width,y=N.minWidth,M=N.maxWidth,N.minWidth=N.maxWidth=N.width=b,b=u.width,N.width=h,N.minWidth=y,N.maxWidth=M)),b!==void 0?b+"":b}function ot(i,s){return{get:function(){if(i()){delete this.get;return}return(this.get=s).apply(this,arguments)}}}var St=["Webkit","Moz","ms"],Rn=w.createElement("div").style,Un={};function Zn(i){for(var s=i[0].toUpperCase()+i.slice(1),u=St.length;u--;)if(i=St[u]+s,i in Rn)return i}function en(i){var s=c.cssProps[i]||Un[i];return s||(i in Rn?i:Un[i]=Zn(i)||i)}var ht=/^(none|table(?!-c[ea]).+)/,Kn={position:"absolute",visibility:"hidden",display:"block"},Ct={letterSpacing:"0",fontWeight:"400"};function $t(i,s,u){var h=C.exec(s);return h?Math.max(0,h[2]-(u||0))+(h[3]||"px"):s}function pn(i,s,u,h,y,M){var b=s==="width"?1:0,O=0,N=0;if(u===(h?"border":"content"))return 0;for(;b<4;b+=2)u==="margin"&&(N+=c.css(i,u+te[b],!0,y)),h?(u==="content"&&(N-=c.css(i,"padding"+te[b],!0,y)),u!=="margin"&&(N-=c.css(i,"border"+te[b]+"Width",!0,y))):(N+=c.css(i,"padding"+te[b],!0,y),u!=="padding"?N+=c.css(i,"border"+te[b]+"Width",!0,y):O+=c.css(i,"border"+te[b]+"Width",!0,y));return!h&&M>=0&&(N+=Math.max(0,Math.ceil(i["offset"+s[0].toUpperCase()+s.slice(1)]-M-N-O-.5))||0),N}function Jn(i,s,u){var h=ke(i),y=!T.boxSizingReliable()||u,M=y&&c.css(i,"boxSizing",!1,h)==="border-box",b=M,O=rt(i,s,h),N="offset"+s[0].toUpperCase()+s.slice(1);if(q.test(O)){if(!u)return O;O="auto"}return(!T.boxSizingReliable()&&M||!T.reliableTrDimensions()&&be(i,"tr")||O==="auto"||!parseFloat(O)&&c.css(i,"display",!1,h)==="inline")&&i.getClientRects().length&&(M=c.css(i,"boxSizing",!1,h)==="border-box",b=N in i,b&&(O=i[N])),O=parseFloat(O)||0,O+pn(i,s,u||(M?"border":"content"),b,h,O)+"px"}c.extend({cssHooks:{opacity:{get:function(i,s){if(s){var u=rt(i,"opacity");return u===""?"1":u}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(i,s,u,h){if(!(!i||i.nodeType===3||i.nodeType===8||!i.style)){var y,M,b,O=Oe(s),N=ae.test(s),V=i.style;if(N||(s=en(O)),b=c.cssHooks[s]||c.cssHooks[O],u!==void 0){if(M=typeof u,M==="string"&&(y=C.exec(u))&&y[1]&&(u=z(i,s,y),M="number"),u==null||u!==u)return;M==="number"&&!N&&(u+=y&&y[3]||(c.cssNumber[O]?"":"px")),!T.clearCloneStyle&&u===""&&s.indexOf("background")===0&&(V[s]="inherit"),(!b||!("set"in b)||(u=b.set(i,u,h))!==void 0)&&(N?V.setProperty(s,u):V[s]=u)}else return b&&"get"in b&&(y=b.get(i,!1,h))!==void 0?y:V[s]}},css:function(i,s,u,h){var y,M,b,O=Oe(s),N=ae.test(s);return N||(s=en(O)),b=c.cssHooks[s]||c.cssHooks[O],b&&"get"in b&&(y=b.get(i,!0,u)),y===void 0&&(y=rt(i,s,h)),y==="normal"&&s in Ct&&(y=Ct[s]),u===""||u?(M=parseFloat(y),u===!0||isFinite(M)?M||0:y):y}}),c.each(["height","width"],function(i,s){c.cssHooks[s]={get:function(u,h,y){if(h)return ht.test(c.css(u,"display"))&&(!u.getClientRects().length||!u.getBoundingClientRect().width)?Ke(u,Kn,function(){return Jn(u,s,y)}):Jn(u,s,y)},set:function(u,h,y){var M,b=ke(u),O=!T.scrollboxSize()&&b.position==="absolute",N=O||y,V=N&&c.css(u,"boxSizing",!1,b)==="border-box",Q=y?pn(u,s,y,V,b):0;return V&&O&&(Q-=Math.ceil(u["offset"+s[0].toUpperCase()+s.slice(1)]-parseFloat(b[s])-pn(u,s,"border",!1,b)-.5)),Q&&(M=C.exec(h))&&(M[3]||"px")!=="px"&&(u.style[s]=h,h=c.css(u,s)),$t(u,h,Q)}}}),c.cssHooks.marginLeft=ot(T.reliableMarginLeft,function(i,s){if(s)return(parseFloat(rt(i,"marginLeft"))||i.getBoundingClientRect().left-Ke(i,{marginLeft:0},function(){return i.getBoundingClientRect().left}))+"px"}),c.each({margin:"",padding:"",border:"Width"},function(i,s){c.cssHooks[i+s]={expand:function(u){for(var h=0,y={},M=typeof u=="string"?u.split(" "):[u];h<4;h++)y[i+te[h]+s]=M[h]||M[h-2]||M[0];return y}},i!=="margin"&&(c.cssHooks[i+s].set=$t)}),c.fn.extend({css:function(i,s){return Ge(this,function(u,h,y){var M,b,O={},N=0;if(Array.isArray(h)){for(M=ke(u),b=h.length;N<b;N++)O[h[N]]=c.css(u,h[N],!1,M);return O}return y!==void 0?c.style(u,h,y):c.css(u,h)},i,s,arguments.length>1)}});function kt(i,s,u,h,y){return new kt.prototype.init(i,s,u,h,y)}c.Tween=kt,kt.prototype={constructor:kt,init:function(i,s,u,h,y,M){this.elem=i,this.prop=u,this.easing=y||c.easing._default,this.options=s,this.start=this.now=this.cur(),this.end=h,this.unit=M||(c.cssNumber[u]?"":"px")},cur:function(){var i=kt.propHooks[this.prop];return i&&i.get?i.get(this):kt.propHooks._default.get(this)},run:function(i){var s,u=kt.propHooks[this.prop];return this.options.duration?this.pos=s=c.easing[this.easing](i,this.options.duration*i,0,1,this.options.duration):this.pos=s=i,this.now=(this.end-this.start)*s+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),u&&u.set?u.set(this):kt.propHooks._default.set(this),this}},kt.prototype.init.prototype=kt.prototype,kt.propHooks={_default:{get:function(i){var s;return i.elem.nodeType!==1||i.elem[i.prop]!=null&&i.elem.style[i.prop]==null?i.elem[i.prop]:(s=c.css(i.elem,i.prop,""),!s||s==="auto"?0:s)},set:function(i){c.fx.step[i.prop]?c.fx.step[i.prop](i):i.elem.nodeType===1&&(c.cssHooks[i.prop]||i.elem.style[en(i.prop)]!=null)?c.style(i.elem,i.prop,i.now+i.unit):i.elem[i.prop]=i.now}}},kt.propHooks.scrollTop=kt.propHooks.scrollLeft={set:function(i){i.elem.nodeType&&i.elem.parentNode&&(i.elem[i.prop]=i.now)}},c.easing={linear:function(i){return i},swing:function(i){return .5-Math.cos(i*Math.PI)/2},_default:"swing"},c.fx=kt.prototype.init,c.fx.step={};var Dt,mn,dr=/^(?:toggle|show|hide)$/,Zt=/queueHooks$/;function fi(){mn&&(w.hidden===!1&&e.requestAnimationFrame?e.requestAnimationFrame(fi):e.setTimeout(fi,c.fx.interval),c.fx.tick())}function Ir(){return e.setTimeout(function(){Dt=void 0}),Dt=Date.now()}function hi(i,s){var u,h=0,y={height:i};for(s=s?1:0;h<4;h+=2-s)u=te[h],y["margin"+u]=y["padding"+u]=i;return s&&(y.opacity=y.width=i),y}function Da(i,s,u){for(var h,y=(Sn.tweeners[s]||[]).concat(Sn.tweeners["*"]),M=0,b=y.length;M<b;M++)if(h=y[M].call(u,s,i))return h}function jl(i,s,u){var h,y,M,b,O,N,V,Q,he="width"in s||"height"in s,K=this,ie={},Ue=i.style,tt=i.nodeType&&We(i),ze=Pe.get(i,"fxshow");u.queue||(b=c._queueHooks(i,"fx"),b.unqueued==null&&(b.unqueued=0,O=b.empty.fire,b.empty.fire=function(){b.unqueued||O()}),b.unqueued++,K.always(function(){K.always(function(){b.unqueued--,c.queue(i,"fx").length||b.empty.fire()})}));for(h in s)if(y=s[h],dr.test(y)){if(delete s[h],M=M||y==="toggle",y===(tt?"hide":"show"))if(y==="show"&&ze&&ze[h]!==void 0)tt=!0;else continue;ie[h]=ze&&ze[h]||c.style(i,h)}if(N=!c.isEmptyObject(s),!(!N&&c.isEmptyObject(ie))){he&&i.nodeType===1&&(u.overflow=[Ue.overflow,Ue.overflowX,Ue.overflowY],V=ze&&ze.display,V==null&&(V=Pe.get(i,"display")),Q=c.css(i,"display"),Q==="none"&&(V?Q=V:(Ie([i],!0),V=i.style.display||V,Q=c.css(i,"display"),Ie([i]))),(Q==="inline"||Q==="inline-block"&&V!=null)&&c.css(i,"float")==="none"&&(N||(K.done(function(){Ue.display=V}),V==null&&(Q=Ue.display,V=Q==="none"?"":Q)),Ue.display="inline-block")),u.overflow&&(Ue.overflow="hidden",K.always(function(){Ue.overflow=u.overflow[0],Ue.overflowX=u.overflow[1],Ue.overflowY=u.overflow[2]})),N=!1;for(h in ie)N||(ze?"hidden"in ze&&(tt=ze.hidden):ze=Pe.access(i,"fxshow",{display:V}),M&&(ze.hidden=!tt),tt&&Ie([i],!0),K.done(function(){tt||Ie([i]),Pe.remove(i,"fxshow");for(h in ie)c.style(i,h,ie[h])})),N=Da(tt?ze[h]:0,h,K),h in ze||(ze[h]=N.start,tt&&(N.end=N.start,N.start=0))}}function Xl(i,s){var u,h,y,M,b;for(u in i)if(h=Oe(u),y=s[h],M=i[u],Array.isArray(M)&&(y=M[1],M=i[u]=M[0]),u!==h&&(i[h]=M,delete i[u]),b=c.cssHooks[h],b&&"expand"in b){M=b.expand(M),delete i[h];for(u in M)u in i||(i[u]=M[u],s[u]=y)}else s[h]=y}function Sn(i,s,u){var h,y,M=0,b=Sn.prefilters.length,O=c.Deferred().always(function(){delete N.elem}),N=function(){if(y)return!1;for(var he=Dt||Ir(),K=Math.max(0,V.startTime+V.duration-he),ie=K/V.duration||0,Ue=1-ie,tt=0,ze=V.tweens.length;tt<ze;tt++)V.tweens[tt].run(Ue);return O.notifyWith(i,[V,Ue,K]),Ue<1&&ze?K:(ze||O.notifyWith(i,[V,1,0]),O.resolveWith(i,[V]),!1)},V=O.promise({elem:i,props:c.extend({},s),opts:c.extend(!0,{specialEasing:{},easing:c.easing._default},u),originalProperties:s,originalOptions:u,startTime:Dt||Ir(),duration:u.duration,tweens:[],createTween:function(he,K){var ie=c.Tween(i,V.opts,he,K,V.opts.specialEasing[he]||V.opts.easing);return V.tweens.push(ie),ie},stop:function(he){var K=0,ie=he?V.tweens.length:0;if(y)return this;for(y=!0;K<ie;K++)V.tweens[K].run(1);return he?(O.notifyWith(i,[V,1,0]),O.resolveWith(i,[V,he])):O.rejectWith(i,[V,he]),this}}),Q=V.props;for(Xl(Q,V.opts.specialEasing);M<b;M++)if(h=Sn.prefilters[M].call(V,i,Q,V.opts),h)return g(h.stop)&&(c._queueHooks(V.elem,V.opts.queue).stop=h.stop.bind(h)),h;return c.map(Q,Da,V),g(V.opts.start)&&V.opts.start.call(i,V),V.progress(V.opts.progress).done(V.opts.done,V.opts.complete).fail(V.opts.fail).always(V.opts.always),c.fx.timer(c.extend(N,{elem:i,anim:V,queue:V.opts.queue})),V}c.Animation=c.extend(Sn,{tweeners:{"*":[function(i,s){var u=this.createTween(i,s);return z(u.elem,i,C.exec(s),u),u}]},tweener:function(i,s){g(i)?(s=i,i=["*"]):i=i.match(_e);for(var u,h=0,y=i.length;h<y;h++)u=i[h],Sn.tweeners[u]=Sn.tweeners[u]||[],Sn.tweeners[u].unshift(s)},prefilters:[jl],prefilter:function(i,s){s?Sn.prefilters.unshift(i):Sn.prefilters.push(i)}}),c.speed=function(i,s,u){var h=i&&typeof i=="object"?c.extend({},i):{complete:u||!u&&s||g(i)&&i,duration:i,easing:u&&s||s&&!g(s)&&s};return c.fx.off?h.duration=0:typeof h.duration!="number"&&(h.duration in c.fx.speeds?h.duration=c.fx.speeds[h.duration]:h.duration=c.fx.speeds._default),(h.queue==null||h.queue===!0)&&(h.queue="fx"),h.old=h.complete,h.complete=function(){g(h.old)&&h.old.call(this),h.queue&&c.dequeue(this,h.queue)},h},c.fn.extend({fadeTo:function(i,s,u,h){return this.filter(We).css("opacity",0).show().end().animate({opacity:s},i,u,h)},animate:function(i,s,u,h){var y=c.isEmptyObject(i),M=c.speed(s,u,h),b=function(){var O=Sn(this,c.extend({},i),M);(y||Pe.get(this,"finish"))&&O.stop(!0)};return b.finish=b,y||M.queue===!1?this.each(b):this.queue(M.queue,b)},stop:function(i,s,u){var h=function(y){var M=y.stop;delete y.stop,M(u)};return typeof i!="string"&&(u=s,s=i,i=void 0),s&&this.queue(i||"fx",[]),this.each(function(){var y=!0,M=i!=null&&i+"queueHooks",b=c.timers,O=Pe.get(this);if(M)O[M]&&O[M].stop&&h(O[M]);else for(M in O)O[M]&&O[M].stop&&Zt.test(M)&&h(O[M]);for(M=b.length;M--;)b[M].elem===this&&(i==null||b[M].queue===i)&&(b[M].anim.stop(u),y=!1,b.splice(M,1));(y||!u)&&c.dequeue(this,i)})},finish:function(i){return i!==!1&&(i=i||"fx"),this.each(function(){var s,u=Pe.get(this),h=u[i+"queue"],y=u[i+"queueHooks"],M=c.timers,b=h?h.length:0;for(u.finish=!0,c.queue(this,i,[]),y&&y.stop&&y.stop.call(this,!0),s=M.length;s--;)M[s].elem===this&&M[s].queue===i&&(M[s].anim.stop(!0),M.splice(s,1));for(s=0;s<b;s++)h[s]&&h[s].finish&&h[s].finish.call(this);delete u.finish})}}),c.each(["toggle","show","hide"],function(i,s){var u=c.fn[s];c.fn[s]=function(h,y,M){return h==null||typeof h=="boolean"?u.apply(this,arguments):this.animate(hi(s,!0),h,y,M)}}),c.each({slideDown:hi("show"),slideUp:hi("hide"),slideToggle:hi("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(i,s){c.fn[i]=function(u,h,y){return this.animate(s,u,h,y)}}),c.timers=[],c.fx.tick=function(){var i,s=0,u=c.timers;for(Dt=Date.now();s<u.length;s++)i=u[s],!i()&&u[s]===i&&u.splice(s--,1);u.length||c.fx.stop(),Dt=void 0},c.fx.timer=function(i){c.timers.push(i),c.fx.start()},c.fx.interval=13,c.fx.start=function(){mn||(mn=!0,fi())},c.fx.stop=function(){mn=null},c.fx.speeds={slow:600,fast:200,_default:400},c.fn.delay=function(i,s){return i=c.fx&&c.fx.speeds[i]||i,s=s||"fx",this.queue(s,function(u,h){var y=e.setTimeout(u,i);h.stop=function(){e.clearTimeout(y)}})},function(){var i=w.createElement("input"),s=w.createElement("select"),u=s.appendChild(w.createElement("option"));i.type="checkbox",T.checkOn=i.value!=="",T.optSelected=u.selected,i=w.createElement("input"),i.value="t",i.type="radio",T.radioValue=i.value==="t"}();var Pa,pr=c.expr.attrHandle;c.fn.extend({attr:function(i,s){return Ge(this,c.attr,i,s,arguments.length>1)},removeAttr:function(i){return this.each(function(){c.removeAttr(this,i)})}}),c.extend({attr:function(i,s,u){var h,y,M=i.nodeType;if(!(M===3||M===8||M===2)){if(typeof i.getAttribute>"u")return c.prop(i,s,u);if((M!==1||!c.isXMLDoc(i))&&(y=c.attrHooks[s.toLowerCase()]||(c.expr.match.bool.test(s)?Pa:void 0)),u!==void 0){if(u===null){c.removeAttr(i,s);return}return y&&"set"in y&&(h=y.set(i,u,s))!==void 0?h:(i.setAttribute(s,u+""),u)}return y&&"get"in y&&(h=y.get(i,s))!==null?h:(h=c.find.attr(i,s),h==null?void 0:h)}},attrHooks:{type:{set:function(i,s){if(!T.radioValue&&s==="radio"&&be(i,"input")){var u=i.value;return i.setAttribute("type",s),u&&(i.value=u),s}}}},removeAttr:function(i,s){var u,h=0,y=s&&s.match(_e);if(y&&i.nodeType===1)for(;u=y[h++];)i.removeAttribute(u)}}),Pa={set:function(i,s,u){return s===!1?c.removeAttr(i,u):i.setAttribute(u,u),u}},c.each(c.expr.match.bool.source.match(/\w+/g),function(i,s){var u=pr[s]||c.find.attr;pr[s]=function(h,y,M){var b,O,N=y.toLowerCase();return M||(O=pr[N],pr[N]=b,b=u(h,y,M)!=null?N:null,pr[N]=O),b}});var Yl=/^(?:input|select|textarea|button)$/i,$l=/^(?:a|area)$/i;c.fn.extend({prop:function(i,s){return Ge(this,c.prop,i,s,arguments.length>1)},removeProp:function(i){return this.each(function(){delete this[c.propFix[i]||i]})}}),c.extend({prop:function(i,s,u){var h,y,M=i.nodeType;if(!(M===3||M===8||M===2))return(M!==1||!c.isXMLDoc(i))&&(s=c.propFix[s]||s,y=c.propHooks[s]),u!==void 0?y&&"set"in y&&(h=y.set(i,u,s))!==void 0?h:i[s]=u:y&&"get"in y&&(h=y.get(i,s))!==null?h:i[s]},propHooks:{tabIndex:{get:function(i){var s=c.find.attr(i,"tabindex");return s?parseInt(s,10):Yl.test(i.nodeName)||$l.test(i.nodeName)&&i.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),T.optSelected||(c.propHooks.selected={get:function(i){var s=i.parentNode;return s&&s.parentNode&&s.parentNode.selectedIndex,null},set:function(i){var s=i.parentNode;s&&(s.selectedIndex,s.parentNode&&s.parentNode.selectedIndex)}}),c.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){c.propFix[this.toLowerCase()]=this});function di(i){var s=i.match(_e)||[];return s.join(" ")}function pi(i){return i.getAttribute&&i.getAttribute("class")||""}function bs(i){return Array.isArray(i)?i:typeof i=="string"?i.match(_e)||[]:[]}c.fn.extend({addClass:function(i){var s,u,h,y,M,b;return g(i)?this.each(function(O){c(this).addClass(i.call(this,O,pi(this)))}):(s=bs(i),s.length?this.each(function(){if(h=pi(this),u=this.nodeType===1&&" "+di(h)+" ",u){for(M=0;M<s.length;M++)y=s[M],u.indexOf(" "+y+" ")<0&&(u+=y+" ");b=di(u),h!==b&&this.setAttribute("class",b)}}):this)},removeClass:function(i){var s,u,h,y,M,b;return g(i)?this.each(function(O){c(this).removeClass(i.call(this,O,pi(this)))}):arguments.length?(s=bs(i),s.length?this.each(function(){if(h=pi(this),u=this.nodeType===1&&" "+di(h)+" ",u){for(M=0;M<s.length;M++)for(y=s[M];u.indexOf(" "+y+" ")>-1;)u=u.replace(" "+y+" "," ");b=di(u),h!==b&&this.setAttribute("class",b)}}):this):this.attr("class","")},toggleClass:function(i,s){var u,h,y,M,b=typeof i,O=b==="string"||Array.isArray(i);return g(i)?this.each(function(N){c(this).toggleClass(i.call(this,N,pi(this),s),s)}):typeof s=="boolean"&&O?s?this.addClass(i):this.removeClass(i):(u=bs(i),this.each(function(){if(O)for(M=c(this),y=0;y<u.length;y++)h=u[y],M.hasClass(h)?M.removeClass(h):M.addClass(h);else(i===void 0||b==="boolean")&&(h=pi(this),h&&Pe.set(this,"__className__",h),this.setAttribute&&this.setAttribute("class",h||i===!1?"":Pe.get(this,"__className__")||""))}))},hasClass:function(i){var s,u,h=0;for(s=" "+i+" ";u=this[h++];)if(u.nodeType===1&&(" "+di(pi(u))+" ").indexOf(s)>-1)return!0;return!1}});var Zl=/\r/g;c.fn.extend({val:function(i){var s,u,h,y=this[0];return arguments.length?(h=g(i),this.each(function(M){var b;this.nodeType===1&&(h?b=i.call(this,M,c(this).val()):b=i,b==null?b="":typeof b=="number"?b+="":Array.isArray(b)&&(b=c.map(b,function(O){return O==null?"":O+""})),s=c.valHooks[this.type]||c.valHooks[this.nodeName.toLowerCase()],(!s||!("set"in s)||s.set(this,b,"value")===void 0)&&(this.value=b))})):y?(s=c.valHooks[y.type]||c.valHooks[y.nodeName.toLowerCase()],s&&"get"in s&&(u=s.get(y,"value"))!==void 0?u:(u=y.value,typeof u=="string"?u.replace(Zl,""):u==null?"":u)):void 0}}),c.extend({valHooks:{option:{get:function(i){var s=c.find.attr(i,"value");return s!=null?s:di(c.text(i))}},select:{get:function(i){var s,u,h,y=i.options,M=i.selectedIndex,b=i.type==="select-one",O=b?null:[],N=b?M+1:y.length;for(M<0?h=N:h=b?M:0;h<N;h++)if(u=y[h],(u.selected||h===M)&&!u.disabled&&(!u.parentNode.disabled||!be(u.parentNode,"optgroup"))){if(s=c(u).val(),b)return s;O.push(s)}return O},set:function(i,s){for(var u,h,y=i.options,M=c.makeArray(s),b=y.length;b--;)h=y[b],(h.selected=c.inArray(c.valHooks.option.get(h),M)>-1)&&(u=!0);return u||(i.selectedIndex=-1),M}}}}),c.each(["radio","checkbox"],function(){c.valHooks[this]={set:function(i,s){if(Array.isArray(s))return i.checked=c.inArray(c(i).val(),s)>-1}},T.checkOn||(c.valHooks[this].get=function(i){return i.getAttribute("value")===null?"on":i.value})}),T.focusin="onfocusin"in e;var Ra=/^(?:focusinfocus|focusoutblur)$/,Ia=function(i){i.stopPropagation()};c.extend(c.event,{trigger:function(i,s,u,h){var y,M,b,O,N,V,Q,he,K=[u||w],ie=x.call(i,"type")?i.type:i,Ue=x.call(i,"namespace")?i.namespace.split("."):[];if(M=he=b=u=u||w,!(u.nodeType===3||u.nodeType===8)&&!Ra.test(ie+c.event.triggered)&&(ie.indexOf(".")>-1&&(Ue=ie.split("."),ie=Ue.shift(),Ue.sort()),N=ie.indexOf(":")<0&&"on"+ie,i=i[c.expando]?i:new c.Event(ie,typeof i=="object"&&i),i.isTrigger=h?2:3,i.namespace=Ue.join("."),i.rnamespace=i.namespace?new RegExp("(^|\\.)"+Ue.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,i.result=void 0,i.target||(i.target=u),s=s==null?[i]:c.makeArray(s,[i]),Q=c.event.special[ie]||{},!(!h&&Q.trigger&&Q.trigger.apply(u,s)===!1))){if(!h&&!Q.noBubble&&!m(u)){for(O=Q.delegateType||ie,Ra.test(O+ie)||(M=M.parentNode);M;M=M.parentNode)K.push(M),b=M;b===(u.ownerDocument||w)&&K.push(b.defaultView||b.parentWindow||e)}for(y=0;(M=K[y++])&&!i.isPropagationStopped();)he=M,i.type=y>1?O:Q.bindType||ie,V=(Pe.get(M,"events")||Object.create(null))[i.type]&&Pe.get(M,"handle"),V&&V.apply(M,s),V=N&&M[N],V&&V.apply&&Mt(M)&&(i.result=V.apply(M,s),i.result===!1&&i.preventDefault());return i.type=ie,!h&&!i.isDefaultPrevented()&&(!Q._default||Q._default.apply(K.pop(),s)===!1)&&Mt(u)&&N&&g(u[ie])&&!m(u)&&(b=u[N],b&&(u[N]=null),c.event.triggered=ie,i.isPropagationStopped()&&he.addEventListener(ie,Ia),u[ie](),i.isPropagationStopped()&&he.removeEventListener(ie,Ia),c.event.triggered=void 0,b&&(u[N]=b)),i.result}},simulate:function(i,s,u){var h=c.extend(new c.Event,u,{type:i,isSimulated:!0});c.event.trigger(h,null,s)}}),c.fn.extend({trigger:function(i,s){return this.each(function(){c.event.trigger(i,s,this)})},triggerHandler:function(i,s){var u=this[0];if(u)return c.event.trigger(i,s,u,!0)}}),T.focusin||c.each({focus:"focusin",blur:"focusout"},function(i,s){var u=function(h){c.event.simulate(s,h.target,c.event.fix(h))};c.event.special[s]={setup:function(){var h=this.ownerDocument||this.document||this,y=Pe.access(h,s);y||h.addEventListener(i,u,!0),Pe.access(h,s,(y||0)+1)},teardown:function(){var h=this.ownerDocument||this.document||this,y=Pe.access(h,s)-1;y?Pe.access(h,s,y):(h.removeEventListener(i,u,!0),Pe.remove(h,s))}}});var mr=e.location,Na={guid:Date.now()},Ss=/\?/;c.parseXML=function(i){var s,u;if(!i||typeof i!="string")return null;try{s=new e.DOMParser().parseFromString(i,"text/xml")}catch{}return u=s&&s.getElementsByTagName("parsererror")[0],(!s||u)&&c.error("Invalid XML: "+(u?c.map(u.childNodes,function(h){return h.textContent}).join(`
`):i)),s};var Kl=/\[\]$/,Fa=/\r?\n/g,Jl=/^(?:submit|button|image|reset|file)$/i,Ql=/^(?:input|select|textarea|keygen)/i;function ws(i,s,u,h){var y;if(Array.isArray(s))c.each(s,function(M,b){u||Kl.test(i)?h(i,b):ws(i+"["+(typeof b=="object"&&b!=null?M:"")+"]",b,u,h)});else if(!u&&P(s)==="object")for(y in s)ws(i+"["+y+"]",s[y],u,h);else h(i,s)}c.param=function(i,s){var u,h=[],y=function(M,b){var O=g(b)?b():b;h[h.length]=encodeURIComponent(M)+"="+encodeURIComponent(O==null?"":O)};if(i==null)return"";if(Array.isArray(i)||i.jquery&&!c.isPlainObject(i))c.each(i,function(){y(this.name,this.value)});else for(u in i)ws(u,i[u],s,y);return h.join("&")},c.fn.extend({serialize:function(){return c.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var i=c.prop(this,"elements");return i?c.makeArray(i):this}).filter(function(){var i=this.type;return this.name&&!c(this).is(":disabled")&&Ql.test(this.nodeName)&&!Jl.test(i)&&(this.checked||!Le.test(i))}).map(function(i,s){var u=c(this).val();return u==null?null:Array.isArray(u)?c.map(u,function(h){return{name:s.name,value:h.replace(Fa,`\r
`)}}):{name:s.name,value:u.replace(Fa,`\r
`)}}).get()}});var ec=/%20/g,tc=/#.*$/,nc=/([?&])_=[^&]*/,ic=/^(.*?):[ \t]*([^\r\n]*)$/mg,rc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,sc=/^(?:GET|HEAD)$/,ac=/^\/\//,Oa={},Ts={},Ua="*/".concat("*"),Es=w.createElement("a");Es.href=mr.href;function za(i){return function(s,u){typeof s!="string"&&(u=s,s="*");var h,y=0,M=s.toLowerCase().match(_e)||[];if(g(u))for(;h=M[y++];)h[0]==="+"?(h=h.slice(1)||"*",(i[h]=i[h]||[]).unshift(u)):(i[h]=i[h]||[]).push(u)}}function Ba(i,s,u,h){var y={},M=i===Ts;function b(O){var N;return y[O]=!0,c.each(i[O]||[],function(V,Q){var he=Q(s,u,h);if(typeof he=="string"&&!M&&!y[he])return s.dataTypes.unshift(he),b(he),!1;if(M)return!(N=he)}),N}return b(s.dataTypes[0])||!y["*"]&&b("*")}function As(i,s){var u,h,y=c.ajaxSettings.flatOptions||{};for(u in s)s[u]!==void 0&&((y[u]?i:h||(h={}))[u]=s[u]);return h&&c.extend(!0,i,h),i}function oc(i,s,u){for(var h,y,M,b,O=i.contents,N=i.dataTypes;N[0]==="*";)N.shift(),h===void 0&&(h=i.mimeType||s.getResponseHeader("Content-Type"));if(h){for(y in O)if(O[y]&&O[y].test(h)){N.unshift(y);break}}if(N[0]in u)M=N[0];else{for(y in u){if(!N[0]||i.converters[y+" "+N[0]]){M=y;break}b||(b=y)}M=M||b}if(M)return M!==N[0]&&N.unshift(M),u[M]}function lc(i,s,u,h){var y,M,b,O,N,V={},Q=i.dataTypes.slice();if(Q[1])for(b in i.converters)V[b.toLowerCase()]=i.converters[b];for(M=Q.shift();M;)if(i.responseFields[M]&&(u[i.responseFields[M]]=s),!N&&h&&i.dataFilter&&(s=i.dataFilter(s,i.dataType)),N=M,M=Q.shift(),M){if(M==="*")M=N;else if(N!=="*"&&N!==M){if(b=V[N+" "+M]||V["* "+M],!b){for(y in V)if(O=y.split(" "),O[1]===M&&(b=V[N+" "+O[0]]||V["* "+O[0]],b)){b===!0?b=V[y]:V[y]!==!0&&(M=O[0],Q.unshift(O[1]));break}}if(b!==!0)if(b&&i.throws)s=b(s);else try{s=b(s)}catch(he){return{state:"parsererror",error:b?he:"No conversion from "+N+" to "+M}}}}return{state:"success",data:s}}c.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:mr.href,type:"GET",isLocal:rc.test(mr.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Ua,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":c.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(i,s){return s?As(As(i,c.ajaxSettings),s):As(c.ajaxSettings,i)},ajaxPrefilter:za(Oa),ajaxTransport:za(Ts),ajax:function(i,s){typeof i=="object"&&(s=i,i=void 0),s=s||{};var u,h,y,M,b,O,N,V,Q,he,K=c.ajaxSetup({},s),ie=K.context||K,Ue=K.context&&(ie.nodeType||ie.jquery)?c(ie):c.event,tt=c.Deferred(),ze=c.Callbacks("once memory"),Ft=K.statusCode||{},It={},on={},xt="canceled",Qe={readyState:0,getResponseHeader:function(ut){var Lt;if(N){if(!M)for(M={};Lt=ic.exec(y);)M[Lt[1].toLowerCase()+" "]=(M[Lt[1].toLowerCase()+" "]||[]).concat(Lt[2]);Lt=M[ut.toLowerCase()+" "]}return Lt==null?null:Lt.join(", ")},getAllResponseHeaders:function(){return N?y:null},setRequestHeader:function(ut,Lt){return N==null&&(ut=on[ut.toLowerCase()]=on[ut.toLowerCase()]||ut,It[ut]=Lt),this},overrideMimeType:function(ut){return N==null&&(K.mimeType=ut),this},statusCode:function(ut){var Lt;if(ut)if(N)Qe.always(ut[Qe.status]);else for(Lt in ut)Ft[Lt]=[Ft[Lt],ut[Lt]];return this},abort:function(ut){var Lt=ut||xt;return u&&u.abort(Lt),tn(0,Lt),this}};if(tt.promise(Qe),K.url=((i||K.url||mr.href)+"").replace(ac,mr.protocol+"//"),K.type=s.method||s.type||K.method||K.type,K.dataTypes=(K.dataType||"*").toLowerCase().match(_e)||[""],K.crossDomain==null){O=w.createElement("a");try{O.href=K.url,O.href=O.href,K.crossDomain=Es.protocol+"//"+Es.host!=O.protocol+"//"+O.host}catch{K.crossDomain=!0}}if(K.data&&K.processData&&typeof K.data!="string"&&(K.data=c.param(K.data,K.traditional)),Ba(Oa,K,s,Qe),N)return Qe;V=c.event&&K.global,V&&c.active++===0&&c.event.trigger("ajaxStart"),K.type=K.type.toUpperCase(),K.hasContent=!sc.test(K.type),h=K.url.replace(tc,""),K.hasContent?K.data&&K.processData&&(K.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(K.data=K.data.replace(ec,"+")):(he=K.url.slice(h.length),K.data&&(K.processData||typeof K.data=="string")&&(h+=(Ss.test(h)?"&":"?")+K.data,delete K.data),K.cache===!1&&(h=h.replace(nc,"$1"),he=(Ss.test(h)?"&":"?")+"_="+Na.guid+++he),K.url=h+he),K.ifModified&&(c.lastModified[h]&&Qe.setRequestHeader("If-Modified-Since",c.lastModified[h]),c.etag[h]&&Qe.setRequestHeader("If-None-Match",c.etag[h])),(K.data&&K.hasContent&&K.contentType!==!1||s.contentType)&&Qe.setRequestHeader("Content-Type",K.contentType),Qe.setRequestHeader("Accept",K.dataTypes[0]&&K.accepts[K.dataTypes[0]]?K.accepts[K.dataTypes[0]]+(K.dataTypes[0]!=="*"?", "+Ua+"; q=0.01":""):K.accepts["*"]);for(Q in K.headers)Qe.setRequestHeader(Q,K.headers[Q]);if(K.beforeSend&&(K.beforeSend.call(ie,Qe,K)===!1||N))return Qe.abort();if(xt="abort",ze.add(K.complete),Qe.done(K.success),Qe.fail(K.error),u=Ba(Ts,K,s,Qe),!u)tn(-1,"No Transport");else{if(Qe.readyState=1,V&&Ue.trigger("ajaxSend",[Qe,K]),N)return Qe;K.async&&K.timeout>0&&(b=e.setTimeout(function(){Qe.abort("timeout")},K.timeout));try{N=!1,u.send(It,tn)}catch(ut){if(N)throw ut;tn(-1,ut)}}function tn(ut,Lt,_r,Nr){var ln,mi,gi,nn,Qn,gn=Lt;N||(N=!0,b&&e.clearTimeout(b),u=void 0,y=Nr||"",Qe.readyState=ut>0?4:0,ln=ut>=200&&ut<300||ut===304,_r&&(nn=oc(K,Qe,_r)),!ln&&c.inArray("script",K.dataTypes)>-1&&c.inArray("json",K.dataTypes)<0&&(K.converters["text script"]=function(){}),nn=lc(K,nn,Qe,ln),ln?(K.ifModified&&(Qn=Qe.getResponseHeader("Last-Modified"),Qn&&(c.lastModified[h]=Qn),Qn=Qe.getResponseHeader("etag"),Qn&&(c.etag[h]=Qn)),ut===204||K.type==="HEAD"?gn="nocontent":ut===304?gn="notmodified":(gn=nn.state,mi=nn.data,gi=nn.error,ln=!gi)):(gi=gn,(ut||!gn)&&(gn="error",ut<0&&(ut=0))),Qe.status=ut,Qe.statusText=(Lt||gn)+"",ln?tt.resolveWith(ie,[mi,gn,Qe]):tt.rejectWith(ie,[Qe,gn,gi]),Qe.statusCode(Ft),Ft=void 0,V&&Ue.trigger(ln?"ajaxSuccess":"ajaxError",[Qe,K,ln?mi:gi]),ze.fireWith(ie,[Qe,gn]),V&&(Ue.trigger("ajaxComplete",[Qe,K]),--c.active||c.event.trigger("ajaxStop")))}return Qe},getJSON:function(i,s,u){return c.get(i,s,u,"json")},getScript:function(i,s){return c.get(i,void 0,s,"script")}}),c.each(["get","post"],function(i,s){c[s]=function(u,h,y,M){return g(h)&&(M=M||y,y=h,h=void 0),c.ajax(c.extend({url:u,type:s,dataType:M,data:h,success:y},c.isPlainObject(u)&&u))}}),c.ajaxPrefilter(function(i){var s;for(s in i.headers)s.toLowerCase()==="content-type"&&(i.contentType=i.headers[s]||"")}),c._evalUrl=function(i,s,u){return c.ajax({url:i,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(h){c.globalEval(h,s,u)}})},c.fn.extend({wrapAll:function(i){var s;return this[0]&&(g(i)&&(i=i.call(this[0])),s=c(i,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&s.insertBefore(this[0]),s.map(function(){for(var u=this;u.firstElementChild;)u=u.firstElementChild;return u}).append(this)),this},wrapInner:function(i){return g(i)?this.each(function(s){c(this).wrapInner(i.call(this,s))}):this.each(function(){var s=c(this),u=s.contents();u.length?u.wrapAll(i):s.append(i)})},wrap:function(i){var s=g(i);return this.each(function(u){c(this).wrapAll(s?i.call(this,u):i)})},unwrap:function(i){return this.parent(i).not("body").each(function(){c(this).replaceWith(this.childNodes)}),this}}),c.expr.pseudos.hidden=function(i){return!c.expr.pseudos.visible(i)},c.expr.pseudos.visible=function(i){return!!(i.offsetWidth||i.offsetHeight||i.getClientRects().length)},c.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch{}};var cc={0:200,1223:204},gr=c.ajaxSettings.xhr();T.cors=!!gr&&"withCredentials"in gr,T.ajax=gr=!!gr,c.ajaxTransport(function(i){var s,u;if(T.cors||gr&&!i.crossDomain)return{send:function(h,y){var M,b=i.xhr();if(b.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(M in i.xhrFields)b[M]=i.xhrFields[M];i.mimeType&&b.overrideMimeType&&b.overrideMimeType(i.mimeType),!i.crossDomain&&!h["X-Requested-With"]&&(h["X-Requested-With"]="XMLHttpRequest");for(M in h)b.setRequestHeader(M,h[M]);s=function(O){return function(){s&&(s=u=b.onload=b.onerror=b.onabort=b.ontimeout=b.onreadystatechange=null,O==="abort"?b.abort():O==="error"?typeof b.status!="number"?y(0,"error"):y(b.status,b.statusText):y(cc[b.status]||b.status,b.statusText,(b.responseType||"text")!=="text"||typeof b.responseText!="string"?{binary:b.response}:{text:b.responseText},b.getAllResponseHeaders()))}},b.onload=s(),u=b.onerror=b.ontimeout=s("error"),b.onabort!==void 0?b.onabort=u:b.onreadystatechange=function(){b.readyState===4&&e.setTimeout(function(){s&&u()})},s=s("abort");try{b.send(i.hasContent&&i.data||null)}catch(O){if(s)throw O}},abort:function(){s&&s()}}}),c.ajaxPrefilter(function(i){i.crossDomain&&(i.contents.script=!1)}),c.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(i){return c.globalEval(i),i}}}),c.ajaxPrefilter("script",function(i){i.cache===void 0&&(i.cache=!1),i.crossDomain&&(i.type="GET")}),c.ajaxTransport("script",function(i){if(i.crossDomain||i.scriptAttrs){var s,u;return{send:function(h,y){s=c("<script>").attr(i.scriptAttrs||{}).prop({charset:i.scriptCharset,src:i.url}).on("load error",u=function(M){s.remove(),u=null,M&&y(M.type==="error"?404:200,M.type)}),w.head.appendChild(s[0])},abort:function(){u&&u()}}}});var ka=[],Cs=/(=)\?(?=&|$)|\?\?/;c.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var i=ka.pop()||c.expando+"_"+Na.guid++;return this[i]=!0,i}}),c.ajaxPrefilter("json jsonp",function(i,s,u){var h,y,M,b=i.jsonp!==!1&&(Cs.test(i.url)?"url":typeof i.data=="string"&&(i.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&Cs.test(i.data)&&"data");if(b||i.dataTypes[0]==="jsonp")return h=i.jsonpCallback=g(i.jsonpCallback)?i.jsonpCallback():i.jsonpCallback,b?i[b]=i[b].replace(Cs,"$1"+h):i.jsonp!==!1&&(i.url+=(Ss.test(i.url)?"&":"?")+i.jsonp+"="+h),i.converters["script json"]=function(){return M||c.error(h+" was not called"),M[0]},i.dataTypes[0]="json",y=e[h],e[h]=function(){M=arguments},u.always(function(){y===void 0?c(e).removeProp(h):e[h]=y,i[h]&&(i.jsonpCallback=s.jsonpCallback,ka.push(h)),M&&g(y)&&y(M[0]),M=y=void 0}),"script"}),T.createHTMLDocument=function(){var i=w.implementation.createHTMLDocument("").body;return i.innerHTML="<form></form><form></form>",i.childNodes.length===2}(),c.parseHTML=function(i,s,u){if(typeof i!="string")return[];typeof s=="boolean"&&(u=s,s=!1);var h,y,M;return s||(T.createHTMLDocument?(s=w.implementation.createHTMLDocument(""),h=s.createElement("base"),h.href=w.location.href,s.head.appendChild(h)):s=w),y=ne.exec(i),M=!u&&[],y?[s.createElement(y[1])]:(y=ue([i],s,M),M&&M.length&&c(M).remove(),c.merge([],y.childNodes))},c.fn.load=function(i,s,u){var h,y,M,b=this,O=i.indexOf(" ");return O>-1&&(h=di(i.slice(O)),i=i.slice(0,O)),g(s)?(u=s,s=void 0):s&&typeof s=="object"&&(y="POST"),b.length>0&&c.ajax({url:i,type:y||"GET",dataType:"html",data:s}).done(function(N){M=arguments,b.html(h?c("<div>").append(c.parseHTML(N)).find(h):N)}).always(u&&function(N,V){b.each(function(){u.apply(this,M||[N.responseText,V,N])})}),this},c.expr.pseudos.animated=function(i){return c.grep(c.timers,function(s){return i===s.elem}).length},c.offset={setOffset:function(i,s,u){var h,y,M,b,O,N,V,Q=c.css(i,"position"),he=c(i),K={};Q==="static"&&(i.style.position="relative"),O=he.offset(),M=c.css(i,"top"),N=c.css(i,"left"),V=(Q==="absolute"||Q==="fixed")&&(M+N).indexOf("auto")>-1,V?(h=he.position(),b=h.top,y=h.left):(b=parseFloat(M)||0,y=parseFloat(N)||0),g(s)&&(s=s.call(i,u,c.extend({},O))),s.top!=null&&(K.top=s.top-O.top+b),s.left!=null&&(K.left=s.left-O.left+y),"using"in s?s.using.call(i,K):he.css(K)}},c.fn.extend({offset:function(i){if(arguments.length)return i===void 0?this:this.each(function(y){c.offset.setOffset(this,i,y)});var s,u,h=this[0];if(!!h)return h.getClientRects().length?(s=h.getBoundingClientRect(),u=h.ownerDocument.defaultView,{top:s.top+u.pageYOffset,left:s.left+u.pageXOffset}):{top:0,left:0}},position:function(){if(!!this[0]){var i,s,u,h=this[0],y={top:0,left:0};if(c.css(h,"position")==="fixed")s=h.getBoundingClientRect();else{for(s=this.offset(),u=h.ownerDocument,i=h.offsetParent||u.documentElement;i&&(i===u.body||i===u.documentElement)&&c.css(i,"position")==="static";)i=i.parentNode;i&&i!==h&&i.nodeType===1&&(y=c(i).offset(),y.top+=c.css(i,"borderTopWidth",!0),y.left+=c.css(i,"borderLeftWidth",!0))}return{top:s.top-y.top-c.css(h,"marginTop",!0),left:s.left-y.left-c.css(h,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var i=this.offsetParent;i&&c.css(i,"position")==="static";)i=i.offsetParent;return i||ge})}}),c.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(i,s){var u=s==="pageYOffset";c.fn[i]=function(h){return Ge(this,function(y,M,b){var O;if(m(y)?O=y:y.nodeType===9&&(O=y.defaultView),b===void 0)return O?O[s]:y[M];O?O.scrollTo(u?O.pageXOffset:b,u?b:O.pageYOffset):y[M]=b},i,h,arguments.length)}}),c.each(["top","left"],function(i,s){c.cssHooks[s]=ot(T.pixelPosition,function(u,h){if(h)return h=rt(u,s),q.test(h)?c(u).position()[s]+"px":h})}),c.each({Height:"height",Width:"width"},function(i,s){c.each({padding:"inner"+i,content:s,"":"outer"+i},function(u,h){c.fn[h]=function(y,M){var b=arguments.length&&(u||typeof y!="boolean"),O=u||(y===!0||M===!0?"margin":"border");return Ge(this,function(N,V,Q){var he;return m(N)?h.indexOf("outer")===0?N["inner"+i]:N.document.documentElement["client"+i]:N.nodeType===9?(he=N.documentElement,Math.max(N.body["scroll"+i],he["scroll"+i],N.body["offset"+i],he["offset"+i],he["client"+i])):Q===void 0?c.css(N,V,O):c.style(N,V,Q,O)},s,b?y:void 0,b)}})}),c.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(i,s){c.fn[s]=function(u){return this.on(s,u)}}),c.fn.extend({bind:function(i,s,u){return this.on(i,null,s,u)},unbind:function(i,s){return this.off(i,null,s)},delegate:function(i,s,u,h){return this.on(s,i,u,h)},undelegate:function(i,s,u){return arguments.length===1?this.off(i,"**"):this.off(s,i||"**",u)},hover:function(i,s){return this.mouseenter(i).mouseleave(s||i)}}),c.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(i,s){c.fn[s]=function(u,h){return arguments.length>0?this.on(s,null,u,h):this.trigger(s)}});var uc=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;c.proxy=function(i,s){var u,h,y;if(typeof s=="string"&&(u=i[s],s=i,i=u),!!g(i))return h=a.call(arguments,2),y=function(){return i.apply(s||this,h.concat(a.call(arguments)))},y.guid=i.guid=i.guid||c.guid++,y},c.holdReady=function(i){i?c.readyWait++:c.ready(!0)},c.isArray=Array.isArray,c.parseJSON=JSON.parse,c.nodeName=be,c.isFunction=g,c.isWindow=m,c.camelCase=Oe,c.type=P,c.now=Date.now,c.isNumeric=function(i){var s=c.type(i);return(s==="number"||s==="string")&&!isNaN(i-parseFloat(i))},c.trim=function(i){return i==null?"":(i+"").replace(uc,"$1")};var fc=e.jQuery,hc=e.$;return c.noConflict=function(i){return e.$===c&&(e.$=hc),i&&e.jQuery===c&&(e.jQuery=fc),c},typeof t>"u"&&(e.jQuery=e.$=c),c})})(ml);const Xt=ml.exports;/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ea="145",zi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Bi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Cc=0,Za=1,Lc=2,gl=1,Dc=2,wr=3,sr=0,Mn=1,li=2,ui=0,nr=1,ga=2,Ka=3,Ja=4,Pc=5,er=100,Rc=101,Ic=102,Qa=103,eo=104,Nc=200,Fc=201,Oc=202,Uc=203,_l=204,xl=205,zc=206,Bc=207,kc=208,Gc=209,Hc=210,Vc=0,Wc=1,qc=2,_a=3,jc=4,Xc=5,Yc=6,$c=7,vl=0,Zc=1,Kc=2,Xn=0,Jc=1,Qc=2,eu=3,tu=4,nu=5,yl=300,ar=301,or=302,xa=303,va=304,ps=306,ya=1e3,Dn=1001,Ma=1002,rn=1003,to=1004,no=1005,xn=1006,iu=1007,ms=1008,Pi=1009,ru=1010,su=1011,Ml=1012,au=1013,Ei=1014,Ai=1015,Er=1016,ou=1017,lu=1018,ir=1020,cu=1021,uu=1022,Nn=1023,fu=1024,hu=1025,Li=1026,lr=1027,du=1028,pu=1029,mu=1030,gu=1031,_u=1033,Us=33776,zs=33777,Bs=33778,ks=33779,io=35840,ro=35841,so=35842,ao=35843,xu=36196,oo=37492,lo=37496,co=37808,uo=37809,fo=37810,ho=37811,po=37812,mo=37813,go=37814,_o=37815,xo=37816,vo=37817,yo=37818,Mo=37819,bo=37820,So=37821,wo=36492,Ri=3e3,Pt=3001,vu=3200,yu=3201,Mu=0,bu=1,qn="srgb",Ci="srgb-linear",Gs=7680,Su=519,To=35044,Eo="300 es",ba=1035;class Oi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let a=0,f=r.length;a<f;a++)r[a].call(this,e);e.target=null}}}const qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Hs=Math.PI/180,Ao=180/Math.PI;function Ar(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qt[o&255]+qt[o>>8&255]+qt[o>>16&255]+qt[o>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[t&63|128]+qt[t>>8&255]+"-"+qt[t>>16&255]+qt[t>>24&255]+qt[n&255]+qt[n>>8&255]+qt[n>>16&255]+qt[n>>24&255]).toLowerCase()}function sn(o,e,t){return Math.max(e,Math.min(t,o))}function wu(o,e){return(o%e+e)%e}function Vs(o,e,t){return(1-t)*o+t*e}function Co(o){return(o&o-1)===0&&o!==0}function Sa(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function Gr(o,e){switch(e.constructor){case Float32Array:return o;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function fn(o,e){switch(e.constructor){case Float32Array:return o;case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class lt{constructor(e=0,t=0){lt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),a=this.x-e.x,f=this.y-e.y;return this.x=a*n-f*r+e.x,this.y=a*r+f*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class yn{constructor(){yn.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,r,a,f,l,p,d){const _=this.elements;return _[0]=e,_[1]=r,_[2]=l,_[3]=t,_[4]=a,_[5]=p,_[6]=n,_[7]=f,_[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,f=n[0],l=n[3],p=n[6],d=n[1],_=n[4],x=n[7],v=n[2],S=n[5],T=n[8],g=r[0],m=r[3],w=r[6],R=r[1],U=r[4],P=r[7],L=r[2],c=r[5],Y=r[8];return a[0]=f*g+l*R+p*L,a[3]=f*m+l*U+p*c,a[6]=f*w+l*P+p*Y,a[1]=d*g+_*R+x*L,a[4]=d*m+_*U+x*c,a[7]=d*w+_*P+x*Y,a[2]=v*g+S*R+T*L,a[5]=v*m+S*U+T*c,a[8]=v*w+S*P+T*Y,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],f=e[4],l=e[5],p=e[6],d=e[7],_=e[8];return t*f*_-t*l*d-n*a*_+n*l*p+r*a*d-r*f*p}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],f=e[4],l=e[5],p=e[6],d=e[7],_=e[8],x=_*f-l*d,v=l*p-_*a,S=d*a-f*p,T=t*x+n*v+r*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/T;return e[0]=x*g,e[1]=(r*d-_*n)*g,e[2]=(l*n-r*f)*g,e[3]=v*g,e[4]=(_*t-r*p)*g,e[5]=(r*a-l*t)*g,e[6]=S*g,e[7]=(n*p-d*t)*g,e[8]=(f*t-n*a)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,a,f,l){const p=Math.cos(a),d=Math.sin(a);return this.set(n*p,n*d,-n*(p*f+d*l)+f+e,-r*d,r*p,-r*(-d*f+p*l)+l+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),r=this.elements,a=r[0],f=r[3],l=r[6],p=r[1],d=r[4],_=r[7];return r[0]=t*a+n*p,r[3]=t*f+n*d,r[6]=t*l+n*_,r[1]=-n*a+t*p,r[4]=-n*f+t*d,r[7]=-n*l+t*_,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function bl(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function ds(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Di(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function fs(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const Ws={[qn]:{[Ci]:Di},[Ci]:{[qn]:fs}},En={legacyMode:!0,get workingColorSpace(){return Ci},set workingColorSpace(o){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(o,e,t){if(this.legacyMode||e===t||!e||!t)return o;if(Ws[e]&&Ws[e][t]!==void 0){const n=Ws[e][t];return o.r=n(o.r),o.g=n(o.g),o.b=n(o.b),o}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(o,e){return this.convert(o,this.workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this.workingColorSpace)}},Sl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ut={r:0,g:0,b:0},An={h:0,s:0,l:0},Hr={h:0,s:0,l:0};function qs(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}function Vr(o,e){return e.r=o.r,e.g=o.g,e.b=o.b,e}class Tt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,En.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Ci){return this.r=e,this.g=t,this.b=n,En.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Ci){if(e=wu(e,1),t=sn(t,0,1),n=sn(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,f=2*n-a;this.r=qs(f,a,e+1/3),this.g=qs(f,a,e),this.b=qs(f,a,e-1/3)}return En.toWorkingColorSpace(this,r),this}setStyle(e,t=qn){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let a;const f=r[1],l=r[2];switch(f){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return this.r=Math.min(255,parseInt(a[1],10))/255,this.g=Math.min(255,parseInt(a[2],10))/255,this.b=Math.min(255,parseInt(a[3],10))/255,En.toWorkingColorSpace(this,t),n(a[4]),this;if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return this.r=Math.min(100,parseInt(a[1],10))/100,this.g=Math.min(100,parseInt(a[2],10))/100,this.b=Math.min(100,parseInt(a[3],10))/100,En.toWorkingColorSpace(this,t),n(a[4]),this;break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l)){const p=parseFloat(a[1])/360,d=parseFloat(a[2])/100,_=parseFloat(a[3])/100;return n(a[4]),this.setHSL(p,d,_,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],f=a.length;if(f===3)return this.r=parseInt(a.charAt(0)+a.charAt(0),16)/255,this.g=parseInt(a.charAt(1)+a.charAt(1),16)/255,this.b=parseInt(a.charAt(2)+a.charAt(2),16)/255,En.toWorkingColorSpace(this,t),this;if(f===6)return this.r=parseInt(a.charAt(0)+a.charAt(1),16)/255,this.g=parseInt(a.charAt(2)+a.charAt(3),16)/255,this.b=parseInt(a.charAt(4)+a.charAt(5),16)/255,En.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=qn){const n=Sl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Di(e.r),this.g=Di(e.g),this.b=Di(e.b),this}copyLinearToSRGB(e){return this.r=fs(e.r),this.g=fs(e.g),this.b=fs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qn){return En.fromWorkingColorSpace(Vr(this,Ut),e),sn(Ut.r*255,0,255)<<16^sn(Ut.g*255,0,255)<<8^sn(Ut.b*255,0,255)<<0}getHexString(e=qn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ci){En.fromWorkingColorSpace(Vr(this,Ut),t);const n=Ut.r,r=Ut.g,a=Ut.b,f=Math.max(n,r,a),l=Math.min(n,r,a);let p,d;const _=(l+f)/2;if(l===f)p=0,d=0;else{const x=f-l;switch(d=_<=.5?x/(f+l):x/(2-f-l),f){case n:p=(r-a)/x+(r<a?6:0);break;case r:p=(a-n)/x+2;break;case a:p=(n-r)/x+4;break}p/=6}return e.h=p,e.s=d,e.l=_,e}getRGB(e,t=Ci){return En.fromWorkingColorSpace(Vr(this,Ut),t),e.r=Ut.r,e.g=Ut.g,e.b=Ut.b,e}getStyle(e=qn){return En.fromWorkingColorSpace(Vr(this,Ut),e),e!==qn?`color(${e} ${Ut.r} ${Ut.g} ${Ut.b})`:`rgb(${Ut.r*255|0},${Ut.g*255|0},${Ut.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(An),An.h+=e,An.s+=t,An.l+=n,this.setHSL(An.h,An.s,An.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(An),e.getHSL(Hr);const n=Vs(An.h,Hr.h,t),r=Vs(An.s,Hr.s,t),a=Vs(An.l,Hr.l,t);return this.setHSL(n,r,a),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Tt.NAMES=Sl;let ki;class wl{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ki===void 0&&(ki=ds("canvas")),ki.width=e.width,ki.height=e.height;const n=ki.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ki}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ds("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),a=r.data;for(let f=0;f<a.length;f++)a[f]=Di(a[f]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Di(t[n]/255)*255):t[n]=Di(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Tl{constructor(e=null){this.isSource=!0,this.uuid=Ar(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let f=0,l=r.length;f<l;f++)r[f].isDataTexture?a.push(js(r[f].image)):a.push(js(r[f]))}else a=js(r);n.url=a}return t||(e.images[this.uuid]=n),n}}function js(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?wl.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Tu=0;class bn extends Oi{constructor(e=bn.DEFAULT_IMAGE,t=bn.DEFAULT_MAPPING,n=Dn,r=Dn,a=xn,f=ms,l=Nn,p=Pi,d=1,_=Ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Tu++}),this.uuid=Ar(),this.name="",this.source=new Tl(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=r,this.magFilter=a,this.minFilter=f,this.anisotropy=d,this.format=l,this.internalFormat=null,this.type=p,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new yn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=_,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==yl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ya:e.x=e.x-Math.floor(e.x);break;case Dn:e.x=e.x<0?0:1;break;case Ma:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ya:e.y=e.y-Math.floor(e.y);break;case Dn:e.y=e.y<0?0:1;break;case Ma:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}bn.DEFAULT_IMAGE=null;bn.DEFAULT_MAPPING=yl;class Vt{constructor(e=0,t=0,n=0,r=1){Vt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=this.w,f=e.elements;return this.x=f[0]*t+f[4]*n+f[8]*r+f[12]*a,this.y=f[1]*t+f[5]*n+f[9]*r+f[13]*a,this.z=f[2]*t+f[6]*n+f[10]*r+f[14]*a,this.w=f[3]*t+f[7]*n+f[11]*r+f[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,a;const p=e.elements,d=p[0],_=p[4],x=p[8],v=p[1],S=p[5],T=p[9],g=p[2],m=p[6],w=p[10];if(Math.abs(_-v)<.01&&Math.abs(x-g)<.01&&Math.abs(T-m)<.01){if(Math.abs(_+v)<.1&&Math.abs(x+g)<.1&&Math.abs(T+m)<.1&&Math.abs(d+S+w-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const U=(d+1)/2,P=(S+1)/2,L=(w+1)/2,c=(_+v)/4,Y=(x+g)/4,A=(T+m)/4;return U>P&&U>L?U<.01?(n=0,r=.707106781,a=.707106781):(n=Math.sqrt(U),r=c/n,a=Y/n):P>L?P<.01?(n=.707106781,r=0,a=.707106781):(r=Math.sqrt(P),n=c/r,a=A/r):L<.01?(n=.707106781,r=.707106781,a=0):(a=Math.sqrt(L),n=Y/a,r=A/a),this.set(n,r,a,t),this}let R=Math.sqrt((m-T)*(m-T)+(x-g)*(x-g)+(v-_)*(v-_));return Math.abs(R)<.001&&(R=1),this.x=(m-T)/R,this.y=(x-g)/R,this.z=(v-_)/R,this.w=Math.acos((d+S+w-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ii extends Oi{constructor(e,t,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Vt(0,0,e,t),this.scissorTest=!1,this.viewport=new Vt(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new bn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:xn,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Tl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class El extends bn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=rn,this.minFilter=rn,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Eu extends bn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=rn,this.minFilter=rn,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ni{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,a,f,l){let p=n[r+0],d=n[r+1],_=n[r+2],x=n[r+3];const v=a[f+0],S=a[f+1],T=a[f+2],g=a[f+3];if(l===0){e[t+0]=p,e[t+1]=d,e[t+2]=_,e[t+3]=x;return}if(l===1){e[t+0]=v,e[t+1]=S,e[t+2]=T,e[t+3]=g;return}if(x!==g||p!==v||d!==S||_!==T){let m=1-l;const w=p*v+d*S+_*T+x*g,R=w>=0?1:-1,U=1-w*w;if(U>Number.EPSILON){const L=Math.sqrt(U),c=Math.atan2(L,w*R);m=Math.sin(m*c)/L,l=Math.sin(l*c)/L}const P=l*R;if(p=p*m+v*P,d=d*m+S*P,_=_*m+T*P,x=x*m+g*P,m===1-l){const L=1/Math.sqrt(p*p+d*d+_*_+x*x);p*=L,d*=L,_*=L,x*=L}}e[t]=p,e[t+1]=d,e[t+2]=_,e[t+3]=x}static multiplyQuaternionsFlat(e,t,n,r,a,f){const l=n[r],p=n[r+1],d=n[r+2],_=n[r+3],x=a[f],v=a[f+1],S=a[f+2],T=a[f+3];return e[t]=l*T+_*x+p*S-d*v,e[t+1]=p*T+_*v+d*x-l*S,e[t+2]=d*T+_*S+l*v-p*x,e[t+3]=_*T-l*x-p*v-d*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,r=e._y,a=e._z,f=e._order,l=Math.cos,p=Math.sin,d=l(n/2),_=l(r/2),x=l(a/2),v=p(n/2),S=p(r/2),T=p(a/2);switch(f){case"XYZ":this._x=v*_*x+d*S*T,this._y=d*S*x-v*_*T,this._z=d*_*T+v*S*x,this._w=d*_*x-v*S*T;break;case"YXZ":this._x=v*_*x+d*S*T,this._y=d*S*x-v*_*T,this._z=d*_*T-v*S*x,this._w=d*_*x+v*S*T;break;case"ZXY":this._x=v*_*x-d*S*T,this._y=d*S*x+v*_*T,this._z=d*_*T+v*S*x,this._w=d*_*x-v*S*T;break;case"ZYX":this._x=v*_*x-d*S*T,this._y=d*S*x+v*_*T,this._z=d*_*T-v*S*x,this._w=d*_*x+v*S*T;break;case"YZX":this._x=v*_*x+d*S*T,this._y=d*S*x+v*_*T,this._z=d*_*T-v*S*x,this._w=d*_*x-v*S*T;break;case"XZY":this._x=v*_*x-d*S*T,this._y=d*S*x-v*_*T,this._z=d*_*T+v*S*x,this._w=d*_*x+v*S*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],a=t[8],f=t[1],l=t[5],p=t[9],d=t[2],_=t[6],x=t[10],v=n+l+x;if(v>0){const S=.5/Math.sqrt(v+1);this._w=.25/S,this._x=(_-p)*S,this._y=(a-d)*S,this._z=(f-r)*S}else if(n>l&&n>x){const S=2*Math.sqrt(1+n-l-x);this._w=(_-p)/S,this._x=.25*S,this._y=(r+f)/S,this._z=(a+d)/S}else if(l>x){const S=2*Math.sqrt(1+l-n-x);this._w=(a-d)/S,this._x=(r+f)/S,this._y=.25*S,this._z=(p+_)/S}else{const S=2*Math.sqrt(1+x-n-l);this._w=(f-r)/S,this._x=(a+d)/S,this._y=(p+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(sn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,a=e._z,f=e._w,l=t._x,p=t._y,d=t._z,_=t._w;return this._x=n*_+f*l+r*d-a*p,this._y=r*_+f*p+a*l-n*d,this._z=a*_+f*d+n*p-r*l,this._w=f*_-n*l-r*p-a*d,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,a=this._z,f=this._w;let l=f*e._w+n*e._x+r*e._y+a*e._z;if(l<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),l>=1)return this._w=f,this._x=n,this._y=r,this._z=a,this;const p=1-l*l;if(p<=Number.EPSILON){const S=1-t;return this._w=S*f+t*this._w,this._x=S*n+t*this._x,this._y=S*r+t*this._y,this._z=S*a+t*this._z,this.normalize(),this._onChangeCallback(),this}const d=Math.sqrt(p),_=Math.atan2(d,l),x=Math.sin((1-t)*_)/d,v=Math.sin(t*_)/d;return this._w=f*x+this._w*v,this._x=n*x+this._x*v,this._y=r*x+this._y*v,this._z=a*x+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(a),n*Math.cos(a),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,t=0,n=0){W.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Lo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Lo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*r,this.y=a[1]*t+a[4]*n+a[7]*r,this.z=a[2]*t+a[5]*n+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=e.elements,f=1/(a[3]*t+a[7]*n+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*r+a[12])*f,this.y=(a[1]*t+a[5]*n+a[9]*r+a[13])*f,this.z=(a[2]*t+a[6]*n+a[10]*r+a[14])*f,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,a=e.x,f=e.y,l=e.z,p=e.w,d=p*t+f*r-l*n,_=p*n+l*t-a*r,x=p*r+a*n-f*t,v=-a*t-f*n-l*r;return this.x=d*p+v*-a+_*-l-x*-f,this.y=_*p+v*-f+x*-a-d*-l,this.z=x*p+v*-l+d*-f-_*-a,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r,this.y=a[1]*t+a[5]*n+a[9]*r,this.z=a[2]*t+a[6]*n+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,a=e.z,f=t.x,l=t.y,p=t.z;return this.x=r*p-a*l,this.y=a*f-n*p,this.z=n*l-r*f,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Xs.copy(this).projectOnVector(e),this.sub(Xs)}reflect(e){return this.sub(Xs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(sn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xs=new W,Lo=new Ni;class Cr{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,r=1/0,a=-1/0,f=-1/0,l=-1/0;for(let p=0,d=e.length;p<d;p+=3){const _=e[p],x=e[p+1],v=e[p+2];_<t&&(t=_),x<n&&(n=x),v<r&&(r=v),_>a&&(a=_),x>f&&(f=x),v>l&&(l=v)}return this.min.set(t,n,r),this.max.set(a,f,l),this}setFromBufferAttribute(e){let t=1/0,n=1/0,r=1/0,a=-1/0,f=-1/0,l=-1/0;for(let p=0,d=e.count;p<d;p++){const _=e.getX(p),x=e.getY(p),v=e.getZ(p);_<t&&(t=_),x<n&&(n=x),v<r&&(r=v),_>a&&(a=_),x>f&&(f=x),v>l&&(l=v)}return this.min.set(t,n,r),this.max.set(a,f,l),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=yi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const a=n.attributes.position;for(let f=0,l=a.count;f<l;f++)yi.fromBufferAttribute(a,f).applyMatrix4(e.matrixWorld),this.expandByPoint(yi)}else n.boundingBox===null&&n.computeBoundingBox(),Ys.copy(n.boundingBox),Ys.applyMatrix4(e.matrixWorld),this.union(Ys);const r=e.children;for(let a=0,f=r.length;a<f;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,yi),yi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Mr),Wr.subVectors(this.max,Mr),Gi.subVectors(e.a,Mr),Hi.subVectors(e.b,Mr),Vi.subVectors(e.c,Mr),ti.subVectors(Hi,Gi),ni.subVectors(Vi,Hi),Mi.subVectors(Gi,Vi);let t=[0,-ti.z,ti.y,0,-ni.z,ni.y,0,-Mi.z,Mi.y,ti.z,0,-ti.x,ni.z,0,-ni.x,Mi.z,0,-Mi.x,-ti.y,ti.x,0,-ni.y,ni.x,0,-Mi.y,Mi.x,0];return!$s(t,Gi,Hi,Vi,Wr)||(t=[1,0,0,0,1,0,0,0,1],!$s(t,Gi,Hi,Vi,Wr))?!1:(qr.crossVectors(ti,ni),t=[qr.x,qr.y,qr.z],$s(t,Gi,Hi,Vi,Wr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return yi.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(yi).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const kn=[new W,new W,new W,new W,new W,new W,new W,new W],yi=new W,Ys=new Cr,Gi=new W,Hi=new W,Vi=new W,ti=new W,ni=new W,Mi=new W,Mr=new W,Wr=new W,qr=new W,bi=new W;function $s(o,e,t,n,r){for(let a=0,f=o.length-3;a<=f;a+=3){bi.fromArray(o,a);const l=r.x*Math.abs(bi.x)+r.y*Math.abs(bi.y)+r.z*Math.abs(bi.z),p=e.dot(bi),d=t.dot(bi),_=n.dot(bi);if(Math.max(-Math.max(p,d,_),Math.min(p,d,_))>l)return!1}return!0}const Au=new Cr,Do=new W,jr=new W,Zs=new W;class gs{constructor(e=new W,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Au.setFromPoints(e).getCenter(n);let r=0;for(let a=0,f=e.length;a<f;a++)r=Math.max(r,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zs.subVectors(e,this.center);const t=Zs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.add(Zs.multiplyScalar(r/n)),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?jr.set(0,0,1).multiplyScalar(e.radius):jr.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(Do.copy(e.center).add(jr)),this.expandByPoint(Do.copy(e.center).sub(jr)),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Gn=new W,Ks=new W,Xr=new W,ii=new W,Js=new W,Yr=new W,Qs=new W;class Al{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Gn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Gn.copy(this.direction).multiplyScalar(t).add(this.origin),Gn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Ks.copy(e).add(t).multiplyScalar(.5),Xr.copy(t).sub(e).normalize(),ii.copy(this.origin).sub(Ks);const a=e.distanceTo(t)*.5,f=-this.direction.dot(Xr),l=ii.dot(this.direction),p=-ii.dot(Xr),d=ii.lengthSq(),_=Math.abs(1-f*f);let x,v,S,T;if(_>0)if(x=f*p-l,v=f*l-p,T=a*_,x>=0)if(v>=-T)if(v<=T){const g=1/_;x*=g,v*=g,S=x*(x+f*v+2*l)+v*(f*x+v+2*p)+d}else v=a,x=Math.max(0,-(f*v+l)),S=-x*x+v*(v+2*p)+d;else v=-a,x=Math.max(0,-(f*v+l)),S=-x*x+v*(v+2*p)+d;else v<=-T?(x=Math.max(0,-(-f*a+l)),v=x>0?-a:Math.min(Math.max(-a,-p),a),S=-x*x+v*(v+2*p)+d):v<=T?(x=0,v=Math.min(Math.max(-a,-p),a),S=v*(v+2*p)+d):(x=Math.max(0,-(f*a+l)),v=x>0?a:Math.min(Math.max(-a,-p),a),S=-x*x+v*(v+2*p)+d);else v=f>0?-a:a,x=Math.max(0,-(f*v+l)),S=-x*x+v*(v+2*p)+d;return n&&n.copy(this.direction).multiplyScalar(x).add(this.origin),r&&r.copy(Xr).multiplyScalar(v).add(Ks),S}intersectSphere(e,t){Gn.subVectors(e.center,this.origin);const n=Gn.dot(this.direction),r=Gn.dot(Gn)-n*n,a=e.radius*e.radius;if(r>a)return null;const f=Math.sqrt(a-r),l=n-f,p=n+f;return l<0&&p<0?null:l<0?this.at(p,t):this.at(l,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,a,f,l,p;const d=1/this.direction.x,_=1/this.direction.y,x=1/this.direction.z,v=this.origin;return d>=0?(n=(e.min.x-v.x)*d,r=(e.max.x-v.x)*d):(n=(e.max.x-v.x)*d,r=(e.min.x-v.x)*d),_>=0?(a=(e.min.y-v.y)*_,f=(e.max.y-v.y)*_):(a=(e.max.y-v.y)*_,f=(e.min.y-v.y)*_),n>f||a>r||((a>n||n!==n)&&(n=a),(f<r||r!==r)&&(r=f),x>=0?(l=(e.min.z-v.z)*x,p=(e.max.z-v.z)*x):(l=(e.max.z-v.z)*x,p=(e.min.z-v.z)*x),n>p||l>r)||((l>n||n!==n)&&(n=l),(p<r||r!==r)&&(r=p),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Gn)!==null}intersectTriangle(e,t,n,r,a){Js.subVectors(t,e),Yr.subVectors(n,e),Qs.crossVectors(Js,Yr);let f=this.direction.dot(Qs),l;if(f>0){if(r)return null;l=1}else if(f<0)l=-1,f=-f;else return null;ii.subVectors(this.origin,e);const p=l*this.direction.dot(Yr.crossVectors(ii,Yr));if(p<0)return null;const d=l*this.direction.dot(Js.cross(ii));if(d<0||p+d>f)return null;const _=-l*ii.dot(Qs);return _<0?null:this.at(_/f,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ht{constructor(){Ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,r,a,f,l,p,d,_,x,v,S,T,g,m){const w=this.elements;return w[0]=e,w[4]=t,w[8]=n,w[12]=r,w[1]=a,w[5]=f,w[9]=l,w[13]=p,w[2]=d,w[6]=_,w[10]=x,w[14]=v,w[3]=S,w[7]=T,w[11]=g,w[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ht().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Wi.setFromMatrixColumn(e,0).length(),a=1/Wi.setFromMatrixColumn(e,1).length(),f=1/Wi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*f,t[9]=n[9]*f,t[10]=n[10]*f,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,a=e.z,f=Math.cos(n),l=Math.sin(n),p=Math.cos(r),d=Math.sin(r),_=Math.cos(a),x=Math.sin(a);if(e.order==="XYZ"){const v=f*_,S=f*x,T=l*_,g=l*x;t[0]=p*_,t[4]=-p*x,t[8]=d,t[1]=S+T*d,t[5]=v-g*d,t[9]=-l*p,t[2]=g-v*d,t[6]=T+S*d,t[10]=f*p}else if(e.order==="YXZ"){const v=p*_,S=p*x,T=d*_,g=d*x;t[0]=v+g*l,t[4]=T*l-S,t[8]=f*d,t[1]=f*x,t[5]=f*_,t[9]=-l,t[2]=S*l-T,t[6]=g+v*l,t[10]=f*p}else if(e.order==="ZXY"){const v=p*_,S=p*x,T=d*_,g=d*x;t[0]=v-g*l,t[4]=-f*x,t[8]=T+S*l,t[1]=S+T*l,t[5]=f*_,t[9]=g-v*l,t[2]=-f*d,t[6]=l,t[10]=f*p}else if(e.order==="ZYX"){const v=f*_,S=f*x,T=l*_,g=l*x;t[0]=p*_,t[4]=T*d-S,t[8]=v*d+g,t[1]=p*x,t[5]=g*d+v,t[9]=S*d-T,t[2]=-d,t[6]=l*p,t[10]=f*p}else if(e.order==="YZX"){const v=f*p,S=f*d,T=l*p,g=l*d;t[0]=p*_,t[4]=g-v*x,t[8]=T*x+S,t[1]=x,t[5]=f*_,t[9]=-l*_,t[2]=-d*_,t[6]=S*x+T,t[10]=v-g*x}else if(e.order==="XZY"){const v=f*p,S=f*d,T=l*p,g=l*d;t[0]=p*_,t[4]=-x,t[8]=d*_,t[1]=v*x+g,t[5]=f*_,t[9]=S*x-T,t[2]=T*x-S,t[6]=l*_,t[10]=g*x+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Cu,e,Lu)}lookAt(e,t,n){const r=this.elements;return hn.subVectors(e,t),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),ri.crossVectors(n,hn),ri.lengthSq()===0&&(Math.abs(n.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),ri.crossVectors(n,hn)),ri.normalize(),$r.crossVectors(hn,ri),r[0]=ri.x,r[4]=$r.x,r[8]=hn.x,r[1]=ri.y,r[5]=$r.y,r[9]=hn.y,r[2]=ri.z,r[6]=$r.z,r[10]=hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,f=n[0],l=n[4],p=n[8],d=n[12],_=n[1],x=n[5],v=n[9],S=n[13],T=n[2],g=n[6],m=n[10],w=n[14],R=n[3],U=n[7],P=n[11],L=n[15],c=r[0],Y=r[4],A=r[8],B=r[12],J=r[1],pe=r[5],be=r[9],ne=r[13],$=r[2],fe=r[6],xe=r[10],ve=r[14],oe=r[3],Z=r[7],ee=r[11],_e=r[15];return a[0]=f*c+l*J+p*$+d*oe,a[4]=f*Y+l*pe+p*fe+d*Z,a[8]=f*A+l*be+p*xe+d*ee,a[12]=f*B+l*ne+p*ve+d*_e,a[1]=_*c+x*J+v*$+S*oe,a[5]=_*Y+x*pe+v*fe+S*Z,a[9]=_*A+x*be+v*xe+S*ee,a[13]=_*B+x*ne+v*ve+S*_e,a[2]=T*c+g*J+m*$+w*oe,a[6]=T*Y+g*pe+m*fe+w*Z,a[10]=T*A+g*be+m*xe+w*ee,a[14]=T*B+g*ne+m*ve+w*_e,a[3]=R*c+U*J+P*$+L*oe,a[7]=R*Y+U*pe+P*fe+L*Z,a[11]=R*A+U*be+P*xe+L*ee,a[15]=R*B+U*ne+P*ve+L*_e,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],a=e[12],f=e[1],l=e[5],p=e[9],d=e[13],_=e[2],x=e[6],v=e[10],S=e[14],T=e[3],g=e[7],m=e[11],w=e[15];return T*(+a*p*x-r*d*x-a*l*v+n*d*v+r*l*S-n*p*S)+g*(+t*p*S-t*d*v+a*f*v-r*f*S+r*d*_-a*p*_)+m*(+t*d*x-t*l*S-a*f*x+n*f*S+a*l*_-n*d*_)+w*(-r*l*_-t*p*x+t*l*v+r*f*x-n*f*v+n*p*_)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],f=e[4],l=e[5],p=e[6],d=e[7],_=e[8],x=e[9],v=e[10],S=e[11],T=e[12],g=e[13],m=e[14],w=e[15],R=x*m*d-g*v*d+g*p*S-l*m*S-x*p*w+l*v*w,U=T*v*d-_*m*d-T*p*S+f*m*S+_*p*w-f*v*w,P=_*g*d-T*x*d+T*l*S-f*g*S-_*l*w+f*x*w,L=T*x*p-_*g*p-T*l*v+f*g*v+_*l*m-f*x*m,c=t*R+n*U+r*P+a*L;if(c===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Y=1/c;return e[0]=R*Y,e[1]=(g*v*a-x*m*a-g*r*S+n*m*S+x*r*w-n*v*w)*Y,e[2]=(l*m*a-g*p*a+g*r*d-n*m*d-l*r*w+n*p*w)*Y,e[3]=(x*p*a-l*v*a-x*r*d+n*v*d+l*r*S-n*p*S)*Y,e[4]=U*Y,e[5]=(_*m*a-T*v*a+T*r*S-t*m*S-_*r*w+t*v*w)*Y,e[6]=(T*p*a-f*m*a-T*r*d+t*m*d+f*r*w-t*p*w)*Y,e[7]=(f*v*a-_*p*a+_*r*d-t*v*d-f*r*S+t*p*S)*Y,e[8]=P*Y,e[9]=(T*x*a-_*g*a-T*n*S+t*g*S+_*n*w-t*x*w)*Y,e[10]=(f*g*a-T*l*a+T*n*d-t*g*d-f*n*w+t*l*w)*Y,e[11]=(_*l*a-f*x*a-_*n*d+t*x*d+f*n*S-t*l*S)*Y,e[12]=L*Y,e[13]=(_*g*r-T*x*r+T*n*v-t*g*v-_*n*m+t*x*m)*Y,e[14]=(T*l*r-f*g*r-T*n*p+t*g*p+f*n*m-t*l*m)*Y,e[15]=(f*x*r-_*l*r+_*n*p-t*x*p-f*n*v+t*l*v)*Y,this}scale(e){const t=this.elements,n=e.x,r=e.y,a=e.z;return t[0]*=n,t[4]*=r,t[8]*=a,t[1]*=n,t[5]*=r,t[9]*=a,t[2]*=n,t[6]*=r,t[10]*=a,t[3]*=n,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),a=1-n,f=e.x,l=e.y,p=e.z,d=a*f,_=a*l;return this.set(d*f+n,d*l-r*p,d*p+r*l,0,d*l+r*p,_*l+n,_*p-r*f,0,d*p-r*l,_*p+r*f,a*p*p+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,a,f){return this.set(1,n,a,0,e,1,f,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,a=t._x,f=t._y,l=t._z,p=t._w,d=a+a,_=f+f,x=l+l,v=a*d,S=a*_,T=a*x,g=f*_,m=f*x,w=l*x,R=p*d,U=p*_,P=p*x,L=n.x,c=n.y,Y=n.z;return r[0]=(1-(g+w))*L,r[1]=(S+P)*L,r[2]=(T-U)*L,r[3]=0,r[4]=(S-P)*c,r[5]=(1-(v+w))*c,r[6]=(m+R)*c,r[7]=0,r[8]=(T+U)*Y,r[9]=(m-R)*Y,r[10]=(1-(v+g))*Y,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let a=Wi.set(r[0],r[1],r[2]).length();const f=Wi.set(r[4],r[5],r[6]).length(),l=Wi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],Cn.copy(this);const d=1/a,_=1/f,x=1/l;return Cn.elements[0]*=d,Cn.elements[1]*=d,Cn.elements[2]*=d,Cn.elements[4]*=_,Cn.elements[5]*=_,Cn.elements[6]*=_,Cn.elements[8]*=x,Cn.elements[9]*=x,Cn.elements[10]*=x,t.setFromRotationMatrix(Cn),n.x=a,n.y=f,n.z=l,this}makePerspective(e,t,n,r,a,f){const l=this.elements,p=2*a/(t-e),d=2*a/(n-r),_=(t+e)/(t-e),x=(n+r)/(n-r),v=-(f+a)/(f-a),S=-2*f*a/(f-a);return l[0]=p,l[4]=0,l[8]=_,l[12]=0,l[1]=0,l[5]=d,l[9]=x,l[13]=0,l[2]=0,l[6]=0,l[10]=v,l[14]=S,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,a,f){const l=this.elements,p=1/(t-e),d=1/(n-r),_=1/(f-a),x=(t+e)*p,v=(n+r)*d,S=(f+a)*_;return l[0]=2*p,l[4]=0,l[8]=0,l[12]=-x,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-v,l[2]=0,l[6]=0,l[10]=-2*_,l[14]=-S,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Wi=new W,Cn=new Ht,Cu=new W(0,0,0),Lu=new W(1,1,1),ri=new W,$r=new W,hn=new W,Po=new Ht,Ro=new Ni;class Lr{constructor(e=0,t=0,n=0,r=Lr.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,a=r[0],f=r[4],l=r[8],p=r[1],d=r[5],_=r[9],x=r[2],v=r[6],S=r[10];switch(t){case"XYZ":this._y=Math.asin(sn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-f,a)):(this._x=Math.atan2(v,d),this._z=0);break;case"YXZ":this._x=Math.asin(-sn(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(l,S),this._z=Math.atan2(p,d)):(this._y=Math.atan2(-x,a),this._z=0);break;case"ZXY":this._x=Math.asin(sn(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-x,S),this._z=Math.atan2(-f,d)):(this._y=0,this._z=Math.atan2(p,a));break;case"ZYX":this._y=Math.asin(-sn(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(v,S),this._z=Math.atan2(p,a)):(this._x=0,this._z=Math.atan2(-f,d));break;case"YZX":this._z=Math.asin(sn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,d),this._y=Math.atan2(-x,a)):(this._x=0,this._y=Math.atan2(l,S));break;case"XZY":this._z=Math.asin(-sn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(v,d),this._y=Math.atan2(l,a)):(this._x=Math.atan2(-_,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Po.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Po,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ro.setFromEuler(this),this.setFromQuaternion(Ro,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Lr.DefaultOrder="XYZ";Lr.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Cl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Du=0;const Io=new W,qi=new Ni,Hn=new Ht,Zr=new W,br=new W,Pu=new W,Ru=new Ni,No=new W(1,0,0),Fo=new W(0,1,0),Oo=new W(0,0,1),Iu={type:"added"},Uo={type:"removed"};class an extends Oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Du++}),this.uuid=Ar(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=an.DefaultUp.clone();const e=new W,t=new Lr,n=new Ni,r=new W(1,1,1);function a(){n.setFromEuler(t,!1)}function f(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ht},normalMatrix:{value:new yn}}),this.matrix=new Ht,this.matrixWorld=new Ht,this.matrixAutoUpdate=an.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=an.DefaultMatrixWorldAutoUpdate,this.layers=new Cl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return qi.setFromAxisAngle(e,t),this.quaternion.multiply(qi),this}rotateOnWorldAxis(e,t){return qi.setFromAxisAngle(e,t),this.quaternion.premultiply(qi),this}rotateX(e){return this.rotateOnAxis(No,e)}rotateY(e){return this.rotateOnAxis(Fo,e)}rotateZ(e){return this.rotateOnAxis(Oo,e)}translateOnAxis(e,t){return Io.copy(e).applyQuaternion(this.quaternion),this.position.add(Io.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(No,e)}translateY(e){return this.translateOnAxis(Fo,e)}translateZ(e){return this.translateOnAxis(Oo,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Hn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Zr.copy(e):Zr.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),br.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hn.lookAt(br,Zr,this.up):Hn.lookAt(Zr,br,this.up),this.quaternion.setFromRotationMatrix(Hn),r&&(Hn.extractRotation(r.matrixWorld),qi.setFromRotationMatrix(Hn),this.quaternion.premultiply(qi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Iu)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Uo)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Uo)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Hn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Hn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Hn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const f=this.children[n].getObjectByProperty(e,t);if(f!==void 0)return f}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(br,e,Pu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(br,Ru,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const a=t[n];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let a=0,f=r.length;a<f;a++){const l=r[a];l.matrixWorldAutoUpdate===!0&&l.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function a(l,p){return l[p.uuid]===void 0&&(l[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const p=l.shapes;if(Array.isArray(p))for(let d=0,_=p.length;d<_;d++){const x=p[d];a(e.shapes,x)}else a(e.shapes,p)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let p=0,d=this.material.length;p<d;p++)l.push(a(e.materials,this.material[p]));r.material=l}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){const p=this.animations[l];r.animations.push(a(e.animations,p))}}if(t){const l=f(e.geometries),p=f(e.materials),d=f(e.textures),_=f(e.images),x=f(e.shapes),v=f(e.skeletons),S=f(e.animations),T=f(e.nodes);l.length>0&&(n.geometries=l),p.length>0&&(n.materials=p),d.length>0&&(n.textures=d),_.length>0&&(n.images=_),x.length>0&&(n.shapes=x),v.length>0&&(n.skeletons=v),S.length>0&&(n.animations=S),T.length>0&&(n.nodes=T)}return n.object=r,n;function f(l){const p=[];for(const d in l){const _=l[d];delete _.metadata,p.push(_)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}an.DefaultUp=new W(0,1,0);an.DefaultMatrixAutoUpdate=!0;an.DefaultMatrixWorldAutoUpdate=!0;const Ln=new W,Vn=new W,ea=new W,Wn=new W,ji=new W,Xi=new W,zo=new W,ta=new W,na=new W,ia=new W;class jn{constructor(e=new W,t=new W,n=new W){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Ln.subVectors(e,t),r.cross(Ln);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,n,r,a){Ln.subVectors(r,t),Vn.subVectors(n,t),ea.subVectors(e,t);const f=Ln.dot(Ln),l=Ln.dot(Vn),p=Ln.dot(ea),d=Vn.dot(Vn),_=Vn.dot(ea),x=f*d-l*l;if(x===0)return a.set(-2,-1,-1);const v=1/x,S=(d*p-l*_)*v,T=(f*_-l*p)*v;return a.set(1-S-T,T,S)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Wn),Wn.x>=0&&Wn.y>=0&&Wn.x+Wn.y<=1}static getUV(e,t,n,r,a,f,l,p){return this.getBarycoord(e,t,n,r,Wn),p.set(0,0),p.addScaledVector(a,Wn.x),p.addScaledVector(f,Wn.y),p.addScaledVector(l,Wn.z),p}static isFrontFacing(e,t,n,r){return Ln.subVectors(n,t),Vn.subVectors(e,t),Ln.cross(Vn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ln.subVectors(this.c,this.b),Vn.subVectors(this.a,this.b),Ln.cross(Vn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return jn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return jn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,a){return jn.getUV(e,this.a,this.b,this.c,t,n,r,a)}containsPoint(e){return jn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return jn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,a=this.c;let f,l;ji.subVectors(r,n),Xi.subVectors(a,n),ta.subVectors(e,n);const p=ji.dot(ta),d=Xi.dot(ta);if(p<=0&&d<=0)return t.copy(n);na.subVectors(e,r);const _=ji.dot(na),x=Xi.dot(na);if(_>=0&&x<=_)return t.copy(r);const v=p*x-_*d;if(v<=0&&p>=0&&_<=0)return f=p/(p-_),t.copy(n).addScaledVector(ji,f);ia.subVectors(e,a);const S=ji.dot(ia),T=Xi.dot(ia);if(T>=0&&S<=T)return t.copy(a);const g=S*d-p*T;if(g<=0&&d>=0&&T<=0)return l=d/(d-T),t.copy(n).addScaledVector(Xi,l);const m=_*T-S*x;if(m<=0&&x-_>=0&&S-T>=0)return zo.subVectors(a,r),l=(x-_)/(x-_+(S-T)),t.copy(r).addScaledVector(zo,l);const w=1/(m+g+v);return f=g*w,l=v*w,t.copy(n).addScaledVector(ji,f).addScaledVector(Xi,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Nu=0;class Dr extends Oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Nu++}),this.uuid=Ar(),this.name="",this.type="Material",this.blending=nr,this.side=sr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=_l,this.blendDst=xl,this.blendEquation=er,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=_a,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Su,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gs,this.stencilZFail=Gs,this.stencilZPass=Gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==nr&&(n.blending=this.blending),this.side!==sr&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function r(a){const f=[];for(const l in a){const p=a[l];delete p.metadata,f.push(p)}return f}if(t){const a=r(e.textures),f=r(e.images);a.length>0&&(n.textures=a),f.length>0&&(n.images=f)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let a=0;a!==r;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ll extends Dr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=vl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Nt=new W,Kr=new lt;class Fn{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=To,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Kr.fromBufferAttribute(this,t),Kr.applyMatrix3(e),this.setXY(t,Kr.x,Kr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix3(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Gr(t,this.array)),t}setX(e,t){return this.normalized&&(t=fn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Gr(t,this.array)),t}setY(e,t){return this.normalized&&(t=fn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Gr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=fn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Gr(t,this.array)),t}setW(e,t){return this.normalized&&(t=fn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=fn(t,this.array),n=fn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=fn(t,this.array),n=fn(n,this.array),r=fn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e*=this.itemSize,this.normalized&&(t=fn(t,this.array),n=fn(n,this.array),r=fn(r,this.array),a=fn(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==To&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Dl extends Fn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Pl extends Fn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class On extends Fn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Fu=0;const _n=new Ht,ra=new an,Yi=new W,dn=new Cr,Sr=new Cr,Gt=new W;class Yn extends Oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fu++}),this.uuid=Ar(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bl(e)?Pl:Dl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new yn().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _n.makeRotationFromQuaternion(e),this.applyMatrix4(_n),this}rotateX(e){return _n.makeRotationX(e),this.applyMatrix4(_n),this}rotateY(e){return _n.makeRotationY(e),this.applyMatrix4(_n),this}rotateZ(e){return _n.makeRotationZ(e),this.applyMatrix4(_n),this}translate(e,t,n){return _n.makeTranslation(e,t,n),this.applyMatrix4(_n),this}scale(e,t,n){return _n.makeScale(e,t,n),this.applyMatrix4(_n),this}lookAt(e){return ra.lookAt(e),ra.updateMatrix(),this.applyMatrix4(ra.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yi).negate(),this.translate(Yi.x,Yi.y,Yi.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const a=e[n];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new On(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Cr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const a=t[n];dn.setFromBufferAttribute(a),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new W,1/0);return}if(e){const n=this.boundingSphere.center;if(dn.setFromBufferAttribute(e),t)for(let a=0,f=t.length;a<f;a++){const l=t[a];Sr.setFromBufferAttribute(l),this.morphTargetsRelative?(Gt.addVectors(dn.min,Sr.min),dn.expandByPoint(Gt),Gt.addVectors(dn.max,Sr.max),dn.expandByPoint(Gt)):(dn.expandByPoint(Sr.min),dn.expandByPoint(Sr.max))}dn.getCenter(n);let r=0;for(let a=0,f=e.count;a<f;a++)Gt.fromBufferAttribute(e,a),r=Math.max(r,n.distanceToSquared(Gt));if(t)for(let a=0,f=t.length;a<f;a++){const l=t[a],p=this.morphTargetsRelative;for(let d=0,_=l.count;d<_;d++)Gt.fromBufferAttribute(l,d),p&&(Yi.fromBufferAttribute(e,d),Gt.add(Yi)),r=Math.max(r,n.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,a=t.normal.array,f=t.uv.array,l=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Fn(new Float32Array(4*l),4));const p=this.getAttribute("tangent").array,d=[],_=[];for(let J=0;J<l;J++)d[J]=new W,_[J]=new W;const x=new W,v=new W,S=new W,T=new lt,g=new lt,m=new lt,w=new W,R=new W;function U(J,pe,be){x.fromArray(r,J*3),v.fromArray(r,pe*3),S.fromArray(r,be*3),T.fromArray(f,J*2),g.fromArray(f,pe*2),m.fromArray(f,be*2),v.sub(x),S.sub(x),g.sub(T),m.sub(T);const ne=1/(g.x*m.y-m.x*g.y);!isFinite(ne)||(w.copy(v).multiplyScalar(m.y).addScaledVector(S,-g.y).multiplyScalar(ne),R.copy(S).multiplyScalar(g.x).addScaledVector(v,-m.x).multiplyScalar(ne),d[J].add(w),d[pe].add(w),d[be].add(w),_[J].add(R),_[pe].add(R),_[be].add(R))}let P=this.groups;P.length===0&&(P=[{start:0,count:n.length}]);for(let J=0,pe=P.length;J<pe;++J){const be=P[J],ne=be.start,$=be.count;for(let fe=ne,xe=ne+$;fe<xe;fe+=3)U(n[fe+0],n[fe+1],n[fe+2])}const L=new W,c=new W,Y=new W,A=new W;function B(J){Y.fromArray(a,J*3),A.copy(Y);const pe=d[J];L.copy(pe),L.sub(Y.multiplyScalar(Y.dot(pe))).normalize(),c.crossVectors(A,pe);const ne=c.dot(_[J])<0?-1:1;p[J*4]=L.x,p[J*4+1]=L.y,p[J*4+2]=L.z,p[J*4+3]=ne}for(let J=0,pe=P.length;J<pe;++J){const be=P[J],ne=be.start,$=be.count;for(let fe=ne,xe=ne+$;fe<xe;fe+=3)B(n[fe+0]),B(n[fe+1]),B(n[fe+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Fn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let v=0,S=n.count;v<S;v++)n.setXYZ(v,0,0,0);const r=new W,a=new W,f=new W,l=new W,p=new W,d=new W,_=new W,x=new W;if(e)for(let v=0,S=e.count;v<S;v+=3){const T=e.getX(v+0),g=e.getX(v+1),m=e.getX(v+2);r.fromBufferAttribute(t,T),a.fromBufferAttribute(t,g),f.fromBufferAttribute(t,m),_.subVectors(f,a),x.subVectors(r,a),_.cross(x),l.fromBufferAttribute(n,T),p.fromBufferAttribute(n,g),d.fromBufferAttribute(n,m),l.add(_),p.add(_),d.add(_),n.setXYZ(T,l.x,l.y,l.z),n.setXYZ(g,p.x,p.y,p.z),n.setXYZ(m,d.x,d.y,d.z)}else for(let v=0,S=t.count;v<S;v+=3)r.fromBufferAttribute(t,v+0),a.fromBufferAttribute(t,v+1),f.fromBufferAttribute(t,v+2),_.subVectors(f,a),x.subVectors(r,a),_.cross(x),n.setXYZ(v+0,_.x,_.y,_.z),n.setXYZ(v+1,_.x,_.y,_.z),n.setXYZ(v+2,_.x,_.y,_.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Gt.fromBufferAttribute(e,t),Gt.normalize(),e.setXYZ(t,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function e(l,p){const d=l.array,_=l.itemSize,x=l.normalized,v=new d.constructor(p.length*_);let S=0,T=0;for(let g=0,m=p.length;g<m;g++){l.isInterleavedBufferAttribute?S=p[g]*l.data.stride+l.offset:S=p[g]*_;for(let w=0;w<_;w++)v[T++]=d[S++]}return new Fn(v,_,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Yn,n=this.index.array,r=this.attributes;for(const l in r){const p=r[l],d=e(p,n);t.setAttribute(l,d)}const a=this.morphAttributes;for(const l in a){const p=[],d=a[l];for(let _=0,x=d.length;_<x;_++){const v=d[_],S=e(v,n);p.push(S)}t.morphAttributes[l]=p}t.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let l=0,p=f.length;l<p;l++){const d=f[l];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const d in p)p[d]!==void 0&&(e[d]=p[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const p in n){const d=n[p];e.data.attributes[p]=d.toJSON(e.data)}const r={};let a=!1;for(const p in this.morphAttributes){const d=this.morphAttributes[p],_=[];for(let x=0,v=d.length;x<v;x++){const S=d[x];_.push(S.toJSON(e.data))}_.length>0&&(r[p]=_,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const d in r){const _=r[d];this.setAttribute(d,_.clone(t))}const a=e.morphAttributes;for(const d in a){const _=[],x=a[d];for(let v=0,S=x.length;v<S;v++)_.push(x[v].clone(t));this.morphAttributes[d]=_}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let d=0,_=f.length;d<_;d++){const x=f[d];this.addGroup(x.start,x.count,x.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Bo=new Ht,$i=new Al,sa=new gs,si=new W,ai=new W,oi=new W,aa=new W,oa=new W,la=new W,Jr=new W,Qr=new W,es=new W,ts=new lt,ns=new lt,is=new lt,ca=new W,rs=new W;class ci extends an{constructor(e=new Yn,t=new Ll){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,f=r.length;a<f;a++){const l=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=a}}}}raycast(e,t){const n=this.geometry,r=this.material,a=this.matrixWorld;if(r===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),sa.copy(n.boundingSphere),sa.applyMatrix4(a),e.ray.intersectsSphere(sa)===!1)||(Bo.copy(a).invert(),$i.copy(e.ray).applyMatrix4(Bo),n.boundingBox!==null&&$i.intersectsBox(n.boundingBox)===!1))return;let f;const l=n.index,p=n.attributes.position,d=n.morphAttributes.position,_=n.morphTargetsRelative,x=n.attributes.uv,v=n.attributes.uv2,S=n.groups,T=n.drawRange;if(l!==null)if(Array.isArray(r))for(let g=0,m=S.length;g<m;g++){const w=S[g],R=r[w.materialIndex],U=Math.max(w.start,T.start),P=Math.min(l.count,Math.min(w.start+w.count,T.start+T.count));for(let L=U,c=P;L<c;L+=3){const Y=l.getX(L),A=l.getX(L+1),B=l.getX(L+2);f=ss(this,R,e,$i,p,d,_,x,v,Y,A,B),f&&(f.faceIndex=Math.floor(L/3),f.face.materialIndex=w.materialIndex,t.push(f))}}else{const g=Math.max(0,T.start),m=Math.min(l.count,T.start+T.count);for(let w=g,R=m;w<R;w+=3){const U=l.getX(w),P=l.getX(w+1),L=l.getX(w+2);f=ss(this,r,e,$i,p,d,_,x,v,U,P,L),f&&(f.faceIndex=Math.floor(w/3),t.push(f))}}else if(p!==void 0)if(Array.isArray(r))for(let g=0,m=S.length;g<m;g++){const w=S[g],R=r[w.materialIndex],U=Math.max(w.start,T.start),P=Math.min(p.count,Math.min(w.start+w.count,T.start+T.count));for(let L=U,c=P;L<c;L+=3){const Y=L,A=L+1,B=L+2;f=ss(this,R,e,$i,p,d,_,x,v,Y,A,B),f&&(f.faceIndex=Math.floor(L/3),f.face.materialIndex=w.materialIndex,t.push(f))}}else{const g=Math.max(0,T.start),m=Math.min(p.count,T.start+T.count);for(let w=g,R=m;w<R;w+=3){const U=w,P=w+1,L=w+2;f=ss(this,r,e,$i,p,d,_,x,v,U,P,L),f&&(f.faceIndex=Math.floor(w/3),t.push(f))}}}}function Ou(o,e,t,n,r,a,f,l){let p;if(e.side===Mn?p=n.intersectTriangle(f,a,r,!0,l):p=n.intersectTriangle(r,a,f,e.side!==li,l),p===null)return null;rs.copy(l),rs.applyMatrix4(o.matrixWorld);const d=t.ray.origin.distanceTo(rs);return d<t.near||d>t.far?null:{distance:d,point:rs.clone(),object:o}}function ss(o,e,t,n,r,a,f,l,p,d,_,x){si.fromBufferAttribute(r,d),ai.fromBufferAttribute(r,_),oi.fromBufferAttribute(r,x);const v=o.morphTargetInfluences;if(a&&v){Jr.set(0,0,0),Qr.set(0,0,0),es.set(0,0,0);for(let T=0,g=a.length;T<g;T++){const m=v[T],w=a[T];m!==0&&(aa.fromBufferAttribute(w,d),oa.fromBufferAttribute(w,_),la.fromBufferAttribute(w,x),f?(Jr.addScaledVector(aa,m),Qr.addScaledVector(oa,m),es.addScaledVector(la,m)):(Jr.addScaledVector(aa.sub(si),m),Qr.addScaledVector(oa.sub(ai),m),es.addScaledVector(la.sub(oi),m)))}si.add(Jr),ai.add(Qr),oi.add(es)}o.isSkinnedMesh&&(o.boneTransform(d,si),o.boneTransform(_,ai),o.boneTransform(x,oi));const S=Ou(o,e,t,n,si,ai,oi,ca);if(S){l&&(ts.fromBufferAttribute(l,d),ns.fromBufferAttribute(l,_),is.fromBufferAttribute(l,x),S.uv=jn.getUV(ca,si,ai,oi,ts,ns,is,new lt)),p&&(ts.fromBufferAttribute(p,d),ns.fromBufferAttribute(p,_),is.fromBufferAttribute(p,x),S.uv2=jn.getUV(ca,si,ai,oi,ts,ns,is,new lt));const T={a:d,b:_,c:x,normal:new W,materialIndex:0};jn.getNormal(si,ai,oi,T.normal),S.face=T}return S}class Pr extends Yn{constructor(e=1,t=1,n=1,r=1,a=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:a,depthSegments:f};const l=this;r=Math.floor(r),a=Math.floor(a),f=Math.floor(f);const p=[],d=[],_=[],x=[];let v=0,S=0;T("z","y","x",-1,-1,n,t,e,f,a,0),T("z","y","x",1,-1,n,t,-e,f,a,1),T("x","z","y",1,1,e,n,t,r,f,2),T("x","z","y",1,-1,e,n,-t,r,f,3),T("x","y","z",1,-1,e,t,n,r,a,4),T("x","y","z",-1,-1,e,t,-n,r,a,5),this.setIndex(p),this.setAttribute("position",new On(d,3)),this.setAttribute("normal",new On(_,3)),this.setAttribute("uv",new On(x,2));function T(g,m,w,R,U,P,L,c,Y,A,B){const J=P/Y,pe=L/A,be=P/2,ne=L/2,$=c/2,fe=Y+1,xe=A+1;let ve=0,oe=0;const Z=new W;for(let ee=0;ee<xe;ee++){const _e=ee*pe-ne;for(let ye=0;ye<fe;ye++){const me=ye*J-be;Z[g]=me*R,Z[m]=_e*U,Z[w]=$,d.push(Z.x,Z.y,Z.z),Z[g]=0,Z[m]=0,Z[w]=c>0?1:-1,_.push(Z.x,Z.y,Z.z),x.push(ye/Y),x.push(1-ee/A),ve+=1}}for(let ee=0;ee<A;ee++)for(let _e=0;_e<Y;_e++){const ye=v+_e+fe*ee,me=v+_e+fe*(ee+1),Ne=v+(_e+1)+fe*(ee+1),$e=v+(_e+1)+fe*ee;p.push(ye,me,$e),p.push(me,Ne,$e),oe+=6}l.addGroup(S,oe,B),S+=oe,v+=ve}}static fromJSON(e){return new Pr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function cr(o){const e={};for(const t in o){e[t]={};for(const n in o[t]){const r=o[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function jt(o){const e={};for(let t=0;t<o.length;t++){const n=cr(o[t]);for(const r in n)e[r]=n[r]}return e}function Uu(o){const e=[];for(let t=0;t<o.length;t++)e.push(o[t].clone());return e}const zu={clone:cr,merge:jt};var Bu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ku=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fi extends Dr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bu,this.fragmentShader=ku,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=cr(e.uniforms),this.uniformsGroups=Uu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const f=this.uniforms[r].value;f&&f.isTexture?t.uniforms[r]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?t.uniforms[r]={type:"c",value:f.getHex()}:f&&f.isVector2?t.uniforms[r]={type:"v2",value:f.toArray()}:f&&f.isVector3?t.uniforms[r]={type:"v3",value:f.toArray()}:f&&f.isVector4?t.uniforms[r]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?t.uniforms[r]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?t.uniforms[r]={type:"m4",value:f.toArray()}:t.uniforms[r]={value:f}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Rl extends an{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ht,this.projectionMatrix=new Ht,this.projectionMatrixInverse=new Ht}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class vn extends Rl{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ao*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Hs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ao*2*Math.atan(Math.tan(Hs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,a,f){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Hs*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,a=-.5*r;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,d=f.fullHeight;a+=f.offsetX*r/p,t-=f.offsetY*n/d,r*=f.width/p,n*=f.height/d}const l=this.filmOffset;l!==0&&(a+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Zi=90,Ki=1;class Gu extends an{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const r=new vn(Zi,Ki,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new W(1,0,0)),this.add(r);const a=new vn(Zi,Ki,e,t);a.layers=this.layers,a.up.set(0,-1,0),a.lookAt(new W(-1,0,0)),this.add(a);const f=new vn(Zi,Ki,e,t);f.layers=this.layers,f.up.set(0,0,1),f.lookAt(new W(0,1,0)),this.add(f);const l=new vn(Zi,Ki,e,t);l.layers=this.layers,l.up.set(0,0,-1),l.lookAt(new W(0,-1,0)),this.add(l);const p=new vn(Zi,Ki,e,t);p.layers=this.layers,p.up.set(0,-1,0),p.lookAt(new W(0,0,1)),this.add(p);const d=new vn(Zi,Ki,e,t);d.layers=this.layers,d.up.set(0,-1,0),d.lookAt(new W(0,0,-1)),this.add(d)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[r,a,f,l,p,d]=this.children,_=e.getRenderTarget(),x=e.toneMapping,v=e.xr.enabled;e.toneMapping=Xn,e.xr.enabled=!1;const S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,a),e.setRenderTarget(n,2),e.render(t,f),e.setRenderTarget(n,3),e.render(t,l),e.setRenderTarget(n,4),e.render(t,p),n.texture.generateMipmaps=S,e.setRenderTarget(n,5),e.render(t,d),e.setRenderTarget(_),e.toneMapping=x,e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class Il extends bn{constructor(e,t,n,r,a,f,l,p,d,_){e=e!==void 0?e:[],t=t!==void 0?t:ar,super(e,t,n,r,a,f,l,p,d,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Hu extends Ii{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Il(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:xn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Pr(5,5,5),a=new Fi({name:"CubemapFromEquirect",uniforms:cr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Mn,blending:ui});a.uniforms.tEquirect.value=t;const f=new ci(r,a),l=t.minFilter;return t.minFilter===ms&&(t.minFilter=xn),new Gu(1,10,this).update(e,f),t.minFilter=l,f.geometry.dispose(),f.material.dispose(),this}clear(e,t,n,r){const a=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(t,n,r);e.setRenderTarget(a)}}const ua=new W,Vu=new W,Wu=new yn;class Si{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=ua.subVectors(n,t).cross(Vu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(ua),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(n).multiplyScalar(a).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Wu.getNormalMatrix(e),r=this.coplanarPoint(ua).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ji=new gs,as=new W;class Nl{constructor(e=new Si,t=new Si,n=new Si,r=new Si,a=new Si,f=new Si){this.planes=[e,t,n,r,a,f]}set(e,t,n,r,a,f){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(r),l[4].copy(a),l[5].copy(f),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,r=n[0],a=n[1],f=n[2],l=n[3],p=n[4],d=n[5],_=n[6],x=n[7],v=n[8],S=n[9],T=n[10],g=n[11],m=n[12],w=n[13],R=n[14],U=n[15];return t[0].setComponents(l-r,x-p,g-v,U-m).normalize(),t[1].setComponents(l+r,x+p,g+v,U+m).normalize(),t[2].setComponents(l+a,x+d,g+S,U+w).normalize(),t[3].setComponents(l-a,x-d,g-S,U-w).normalize(),t[4].setComponents(l-f,x-_,g-T,U-R).normalize(),t[5].setComponents(l+f,x+_,g+T,U+R).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Ji.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Ji)}intersectsSprite(e){return Ji.center.set(0,0,0),Ji.radius=.7071067811865476,Ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ji)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(as.x=r.normal.x>0?e.max.x:e.min.x,as.y=r.normal.y>0?e.max.y:e.min.y,as.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(as)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Fl(){let o=null,e=!1,t=null,n=null;function r(a,f){t(a,f),n=o.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=o.requestAnimationFrame(r),e=!0)},stop:function(){o.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){o=a}}}function qu(o,e){const t=e.isWebGL2,n=new WeakMap;function r(d,_){const x=d.array,v=d.usage,S=o.createBuffer();o.bindBuffer(_,S),o.bufferData(_,x,v),d.onUploadCallback();let T;if(x instanceof Float32Array)T=5126;else if(x instanceof Uint16Array)if(d.isFloat16BufferAttribute)if(t)T=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else T=5123;else if(x instanceof Int16Array)T=5122;else if(x instanceof Uint32Array)T=5125;else if(x instanceof Int32Array)T=5124;else if(x instanceof Int8Array)T=5120;else if(x instanceof Uint8Array)T=5121;else if(x instanceof Uint8ClampedArray)T=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+x);return{buffer:S,type:T,bytesPerElement:x.BYTES_PER_ELEMENT,version:d.version}}function a(d,_,x){const v=_.array,S=_.updateRange;o.bindBuffer(x,d),S.count===-1?o.bufferSubData(x,0,v):(t?o.bufferSubData(x,S.offset*v.BYTES_PER_ELEMENT,v,S.offset,S.count):o.bufferSubData(x,S.offset*v.BYTES_PER_ELEMENT,v.subarray(S.offset,S.offset+S.count)),S.count=-1)}function f(d){return d.isInterleavedBufferAttribute&&(d=d.data),n.get(d)}function l(d){d.isInterleavedBufferAttribute&&(d=d.data);const _=n.get(d);_&&(o.deleteBuffer(_.buffer),n.delete(d))}function p(d,_){if(d.isGLBufferAttribute){const v=n.get(d);(!v||v.version<d.version)&&n.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}d.isInterleavedBufferAttribute&&(d=d.data);const x=n.get(d);x===void 0?n.set(d,r(d,_)):x.version<d.version&&(a(x.buffer,d,_),x.version=d.version)}return{get:f,remove:l,update:p}}class Aa extends Yn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const a=e/2,f=t/2,l=Math.floor(n),p=Math.floor(r),d=l+1,_=p+1,x=e/l,v=t/p,S=[],T=[],g=[],m=[];for(let w=0;w<_;w++){const R=w*v-f;for(let U=0;U<d;U++){const P=U*x-a;T.push(P,-R,0),g.push(0,0,1),m.push(U/l),m.push(1-w/p)}}for(let w=0;w<p;w++)for(let R=0;R<l;R++){const U=R+d*w,P=R+d*(w+1),L=R+1+d*(w+1),c=R+1+d*w;S.push(U,P,c),S.push(P,L,c)}this.setIndex(S),this.setAttribute("position",new On(T,3)),this.setAttribute("normal",new On(g,3)),this.setAttribute("uv",new On(m,2))}static fromJSON(e){return new Aa(e.width,e.height,e.widthSegments,e.heightSegments)}}var ju=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Xu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yu=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,$u=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ku=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ju="vec3 transformed = vec3( position );",Qu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ef=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,tf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,nf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,rf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,sf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,af=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,of=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,uf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ff=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,hf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,df=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,pf=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,mf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,_f=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vf="gl_FragColor = linearToOutputTexel( gl_FragColor );",yf=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Mf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,bf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Sf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,wf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Tf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ef=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Af=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Lf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Df=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Pf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Rf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,If=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Nf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
#define Material_LightProbeLOD( material )	(0)`,Ff=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Of=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Uf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,Bf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,Gf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Hf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Vf=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Wf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,qf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,jf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,$f=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Zf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Kf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Qf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,eh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,th=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nh=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ih=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,rh=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,sh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,ah=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,oh=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,lh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ch=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fh=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,hh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,dh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,ph=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,mh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_h=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,xh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wh=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Th=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Eh=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,Ah=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ch=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Lh=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Dh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ph=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Rh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ih=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Nh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fh=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Oh=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Uh=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,zh=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Bh=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,kh=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Gh=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Hh=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Vh=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Wh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jh=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Xh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yh=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,$h=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Zh=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Kh=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Jh=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Qh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ed=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,td=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,id=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,rd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ad=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,od=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ld=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ud=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,fd=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hd=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,pd=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,md=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_d=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,xd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vd=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Md=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,at={alphamap_fragment:ju,alphamap_pars_fragment:Xu,alphatest_fragment:Yu,alphatest_pars_fragment:$u,aomap_fragment:Zu,aomap_pars_fragment:Ku,begin_vertex:Ju,beginnormal_vertex:Qu,bsdfs:ef,iridescence_fragment:tf,bumpmap_pars_fragment:nf,clipping_planes_fragment:rf,clipping_planes_pars_fragment:sf,clipping_planes_pars_vertex:af,clipping_planes_vertex:of,color_fragment:lf,color_pars_fragment:cf,color_pars_vertex:uf,color_vertex:ff,common:hf,cube_uv_reflection_fragment:df,defaultnormal_vertex:pf,displacementmap_pars_vertex:mf,displacementmap_vertex:gf,emissivemap_fragment:_f,emissivemap_pars_fragment:xf,encodings_fragment:vf,encodings_pars_fragment:yf,envmap_fragment:Mf,envmap_common_pars_fragment:bf,envmap_pars_fragment:Sf,envmap_pars_vertex:wf,envmap_physical_pars_fragment:Of,envmap_vertex:Tf,fog_vertex:Ef,fog_pars_vertex:Af,fog_fragment:Cf,fog_pars_fragment:Lf,gradientmap_pars_fragment:Df,lightmap_fragment:Pf,lightmap_pars_fragment:Rf,lights_lambert_fragment:If,lights_lambert_pars_fragment:Nf,lights_pars_begin:Ff,lights_toon_fragment:Uf,lights_toon_pars_fragment:zf,lights_phong_fragment:Bf,lights_phong_pars_fragment:kf,lights_physical_fragment:Gf,lights_physical_pars_fragment:Hf,lights_fragment_begin:Vf,lights_fragment_maps:Wf,lights_fragment_end:qf,logdepthbuf_fragment:jf,logdepthbuf_pars_fragment:Xf,logdepthbuf_pars_vertex:Yf,logdepthbuf_vertex:$f,map_fragment:Zf,map_pars_fragment:Kf,map_particle_fragment:Jf,map_particle_pars_fragment:Qf,metalnessmap_fragment:eh,metalnessmap_pars_fragment:th,morphcolor_vertex:nh,morphnormal_vertex:ih,morphtarget_pars_vertex:rh,morphtarget_vertex:sh,normal_fragment_begin:ah,normal_fragment_maps:oh,normal_pars_fragment:lh,normal_pars_vertex:ch,normal_vertex:uh,normalmap_pars_fragment:fh,clearcoat_normal_fragment_begin:hh,clearcoat_normal_fragment_maps:dh,clearcoat_pars_fragment:ph,iridescence_pars_fragment:mh,output_fragment:gh,packing:_h,premultiplied_alpha_fragment:xh,project_vertex:vh,dithering_fragment:yh,dithering_pars_fragment:Mh,roughnessmap_fragment:bh,roughnessmap_pars_fragment:Sh,shadowmap_pars_fragment:wh,shadowmap_pars_vertex:Th,shadowmap_vertex:Eh,shadowmask_pars_fragment:Ah,skinbase_vertex:Ch,skinning_pars_vertex:Lh,skinning_vertex:Dh,skinnormal_vertex:Ph,specularmap_fragment:Rh,specularmap_pars_fragment:Ih,tonemapping_fragment:Nh,tonemapping_pars_fragment:Fh,transmission_fragment:Oh,transmission_pars_fragment:Uh,uv_pars_fragment:zh,uv_pars_vertex:Bh,uv_vertex:kh,uv2_pars_fragment:Gh,uv2_pars_vertex:Hh,uv2_vertex:Vh,worldpos_vertex:Wh,background_vert:qh,background_frag:jh,cube_vert:Xh,cube_frag:Yh,depth_vert:$h,depth_frag:Zh,distanceRGBA_vert:Kh,distanceRGBA_frag:Jh,equirect_vert:Qh,equirect_frag:ed,linedashed_vert:td,linedashed_frag:nd,meshbasic_vert:id,meshbasic_frag:rd,meshlambert_vert:sd,meshlambert_frag:ad,meshmatcap_vert:od,meshmatcap_frag:ld,meshnormal_vert:cd,meshnormal_frag:ud,meshphong_vert:fd,meshphong_frag:hd,meshphysical_vert:dd,meshphysical_frag:pd,meshtoon_vert:md,meshtoon_frag:gd,points_vert:_d,points_frag:xd,shadow_vert:vd,shadow_frag:yd,sprite_vert:Md,sprite_frag:bd},Ee={common:{diffuse:{value:new Tt(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new yn},uv2Transform:{value:new yn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new yn}},sprite:{diffuse:{value:new Tt(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new yn}}},In={basic:{uniforms:jt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:jt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Tt(0)}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:jt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Tt(0)},specular:{value:new Tt(1118481)},shininess:{value:30}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:jt([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new Tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:jt([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new Tt(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:jt([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:jt([Ee.points,Ee.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:jt([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:jt([Ee.common,Ee.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:jt([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:jt([Ee.sprite,Ee.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new yn},t2D:{value:null}},vertexShader:at.background_vert,fragmentShader:at.background_frag},cube:{uniforms:jt([Ee.envmap,{opacity:{value:1}}]),vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distanceRGBA:{uniforms:jt([Ee.common,Ee.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distanceRGBA_vert,fragmentShader:at.distanceRGBA_frag},shadow:{uniforms:jt([Ee.lights,Ee.fog,{color:{value:new Tt(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};In.physical={uniforms:jt([In.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new lt(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Tt(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Tt(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Tt(1,1,1)},specularColorMap:{value:null}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};function Sd(o,e,t,n,r,a){const f=new Tt(0);let l=r===!0?0:1,p,d,_=null,x=0,v=null;function S(g,m){let w=!1,R=m.isScene===!0?m.background:null;R&&R.isTexture&&(R=e.get(R));const U=o.xr,P=U.getSession&&U.getSession();P&&P.environmentBlendMode==="additive"&&(R=null),R===null?T(f,l):R&&R.isColor&&(T(R,1),w=!0),(o.autoClear||w)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),R&&(R.isCubeTexture||R.mapping===ps)?(d===void 0&&(d=new ci(new Pr(1,1,1),new Fi({name:"BackgroundCubeMaterial",uniforms:cr(In.cube.uniforms),vertexShader:In.cube.vertexShader,fragmentShader:In.cube.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(L,c,Y){this.matrixWorld.copyPosition(Y.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(d)),d.material.uniforms.envMap.value=R,d.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,(_!==R||x!==R.version||v!==o.toneMapping)&&(d.material.needsUpdate=!0,_=R,x=R.version,v=o.toneMapping),d.layers.enableAll(),g.unshift(d,d.geometry,d.material,0,0,null)):R&&R.isTexture&&(p===void 0&&(p=new ci(new Aa(2,2),new Fi({name:"BackgroundMaterial",uniforms:cr(In.background.uniforms),vertexShader:In.background.vertexShader,fragmentShader:In.background.fragmentShader,side:sr,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(p)),p.material.uniforms.t2D.value=R,R.matrixAutoUpdate===!0&&R.updateMatrix(),p.material.uniforms.uvTransform.value.copy(R.matrix),(_!==R||x!==R.version||v!==o.toneMapping)&&(p.material.needsUpdate=!0,_=R,x=R.version,v=o.toneMapping),p.layers.enableAll(),g.unshift(p,p.geometry,p.material,0,0,null))}function T(g,m){t.buffers.color.setClear(g.r,g.g,g.b,m,a)}return{getClearColor:function(){return f},setClearColor:function(g,m=1){f.set(g),l=m,T(f,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,T(f,l)},render:S}}function wd(o,e,t,n){const r=o.getParameter(34921),a=n.isWebGL2?null:e.get("OES_vertex_array_object"),f=n.isWebGL2||a!==null,l={},p=m(null);let d=p,_=!1;function x($,fe,xe,ve,oe){let Z=!1;if(f){const ee=g(ve,xe,fe);d!==ee&&(d=ee,S(d.object)),Z=w($,ve,xe,oe),Z&&R($,ve,xe,oe)}else{const ee=fe.wireframe===!0;(d.geometry!==ve.id||d.program!==xe.id||d.wireframe!==ee)&&(d.geometry=ve.id,d.program=xe.id,d.wireframe=ee,Z=!0)}oe!==null&&t.update(oe,34963),(Z||_)&&(_=!1,A($,fe,xe,ve),oe!==null&&o.bindBuffer(34963,t.get(oe).buffer))}function v(){return n.isWebGL2?o.createVertexArray():a.createVertexArrayOES()}function S($){return n.isWebGL2?o.bindVertexArray($):a.bindVertexArrayOES($)}function T($){return n.isWebGL2?o.deleteVertexArray($):a.deleteVertexArrayOES($)}function g($,fe,xe){const ve=xe.wireframe===!0;let oe=l[$.id];oe===void 0&&(oe={},l[$.id]=oe);let Z=oe[fe.id];Z===void 0&&(Z={},oe[fe.id]=Z);let ee=Z[ve];return ee===void 0&&(ee=m(v()),Z[ve]=ee),ee}function m($){const fe=[],xe=[],ve=[];for(let oe=0;oe<r;oe++)fe[oe]=0,xe[oe]=0,ve[oe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:fe,enabledAttributes:xe,attributeDivisors:ve,object:$,attributes:{},index:null}}function w($,fe,xe,ve){const oe=d.attributes,Z=fe.attributes;let ee=0;const _e=xe.getAttributes();for(const ye in _e)if(_e[ye].location>=0){const Ne=oe[ye];let $e=Z[ye];if($e===void 0&&(ye==="instanceMatrix"&&$.instanceMatrix&&($e=$.instanceMatrix),ye==="instanceColor"&&$.instanceColor&&($e=$.instanceColor)),Ne===void 0||Ne.attribute!==$e||$e&&Ne.data!==$e.data)return!0;ee++}return d.attributesNum!==ee||d.index!==ve}function R($,fe,xe,ve){const oe={},Z=fe.attributes;let ee=0;const _e=xe.getAttributes();for(const ye in _e)if(_e[ye].location>=0){let Ne=Z[ye];Ne===void 0&&(ye==="instanceMatrix"&&$.instanceMatrix&&(Ne=$.instanceMatrix),ye==="instanceColor"&&$.instanceColor&&(Ne=$.instanceColor));const $e={};$e.attribute=Ne,Ne&&Ne.data&&($e.data=Ne.data),oe[ye]=$e,ee++}d.attributes=oe,d.attributesNum=ee,d.index=ve}function U(){const $=d.newAttributes;for(let fe=0,xe=$.length;fe<xe;fe++)$[fe]=0}function P($){L($,0)}function L($,fe){const xe=d.newAttributes,ve=d.enabledAttributes,oe=d.attributeDivisors;xe[$]=1,ve[$]===0&&(o.enableVertexAttribArray($),ve[$]=1),oe[$]!==fe&&((n.isWebGL2?o:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"]($,fe),oe[$]=fe)}function c(){const $=d.newAttributes,fe=d.enabledAttributes;for(let xe=0,ve=fe.length;xe<ve;xe++)fe[xe]!==$[xe]&&(o.disableVertexAttribArray(xe),fe[xe]=0)}function Y($,fe,xe,ve,oe,Z){n.isWebGL2===!0&&(xe===5124||xe===5125)?o.vertexAttribIPointer($,fe,xe,oe,Z):o.vertexAttribPointer($,fe,xe,ve,oe,Z)}function A($,fe,xe,ve){if(n.isWebGL2===!1&&($.isInstancedMesh||ve.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;U();const oe=ve.attributes,Z=xe.getAttributes(),ee=fe.defaultAttributeValues;for(const _e in Z){const ye=Z[_e];if(ye.location>=0){let me=oe[_e];if(me===void 0&&(_e==="instanceMatrix"&&$.instanceMatrix&&(me=$.instanceMatrix),_e==="instanceColor"&&$.instanceColor&&(me=$.instanceColor)),me!==void 0){const Ne=me.normalized,$e=me.itemSize,ce=t.get(me);if(ce===void 0)continue;const ct=ce.buffer,qe=ce.type,Ge=ce.bytesPerElement;if(me.isInterleavedBufferAttribute){const Fe=me.data,dt=Fe.stride,nt=me.offset;if(Fe.isInstancedInterleavedBuffer){for(let Oe=0;Oe<ye.locationSize;Oe++)L(ye.location+Oe,Fe.meshPerAttribute);$.isInstancedMesh!==!0&&ve._maxInstanceCount===void 0&&(ve._maxInstanceCount=Fe.meshPerAttribute*Fe.count)}else for(let Oe=0;Oe<ye.locationSize;Oe++)P(ye.location+Oe);o.bindBuffer(34962,ct);for(let Oe=0;Oe<ye.locationSize;Oe++)Y(ye.location+Oe,$e/ye.locationSize,qe,Ne,dt*Ge,(nt+$e/ye.locationSize*Oe)*Ge)}else{if(me.isInstancedBufferAttribute){for(let Fe=0;Fe<ye.locationSize;Fe++)L(ye.location+Fe,me.meshPerAttribute);$.isInstancedMesh!==!0&&ve._maxInstanceCount===void 0&&(ve._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let Fe=0;Fe<ye.locationSize;Fe++)P(ye.location+Fe);o.bindBuffer(34962,ct);for(let Fe=0;Fe<ye.locationSize;Fe++)Y(ye.location+Fe,$e/ye.locationSize,qe,Ne,$e*Ge,$e/ye.locationSize*Fe*Ge)}}else if(ee!==void 0){const Ne=ee[_e];if(Ne!==void 0)switch(Ne.length){case 2:o.vertexAttrib2fv(ye.location,Ne);break;case 3:o.vertexAttrib3fv(ye.location,Ne);break;case 4:o.vertexAttrib4fv(ye.location,Ne);break;default:o.vertexAttrib1fv(ye.location,Ne)}}}}c()}function B(){be();for(const $ in l){const fe=l[$];for(const xe in fe){const ve=fe[xe];for(const oe in ve)T(ve[oe].object),delete ve[oe];delete fe[xe]}delete l[$]}}function J($){if(l[$.id]===void 0)return;const fe=l[$.id];for(const xe in fe){const ve=fe[xe];for(const oe in ve)T(ve[oe].object),delete ve[oe];delete fe[xe]}delete l[$.id]}function pe($){for(const fe in l){const xe=l[fe];if(xe[$.id]===void 0)continue;const ve=xe[$.id];for(const oe in ve)T(ve[oe].object),delete ve[oe];delete xe[$.id]}}function be(){ne(),_=!0,d!==p&&(d=p,S(d.object))}function ne(){p.geometry=null,p.program=null,p.wireframe=!1}return{setup:x,reset:be,resetDefaultState:ne,dispose:B,releaseStatesOfGeometry:J,releaseStatesOfProgram:pe,initAttributes:U,enableAttribute:P,disableUnusedAttributes:c}}function Td(o,e,t,n){const r=n.isWebGL2;let a;function f(d){a=d}function l(d,_){o.drawArrays(a,d,_),t.update(_,a,1)}function p(d,_,x){if(x===0)return;let v,S;if(r)v=o,S="drawArraysInstanced";else if(v=e.get("ANGLE_instanced_arrays"),S="drawArraysInstancedANGLE",v===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[S](a,d,_,x),t.update(_,a,x)}this.setMode=f,this.render=l,this.renderInstances=p}function Ed(o,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const Y=e.get("EXT_texture_filter_anisotropic");n=o.getParameter(Y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(Y){if(Y==="highp"){if(o.getShaderPrecisionFormat(35633,36338).precision>0&&o.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";Y="mediump"}return Y==="mediump"&&o.getShaderPrecisionFormat(35633,36337).precision>0&&o.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const f=typeof WebGL2RenderingContext<"u"&&o instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&o instanceof WebGL2ComputeRenderingContext;let l=t.precision!==void 0?t.precision:"highp";const p=a(l);p!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",p,"instead."),l=p);const d=f||e.has("WEBGL_draw_buffers"),_=t.logarithmicDepthBuffer===!0,x=o.getParameter(34930),v=o.getParameter(35660),S=o.getParameter(3379),T=o.getParameter(34076),g=o.getParameter(34921),m=o.getParameter(36347),w=o.getParameter(36348),R=o.getParameter(36349),U=v>0,P=f||e.has("OES_texture_float"),L=U&&P,c=f?o.getParameter(36183):0;return{isWebGL2:f,drawBuffers:d,getMaxAnisotropy:r,getMaxPrecision:a,precision:l,logarithmicDepthBuffer:_,maxTextures:x,maxVertexTextures:v,maxTextureSize:S,maxCubemapSize:T,maxAttributes:g,maxVertexUniforms:m,maxVaryings:w,maxFragmentUniforms:R,vertexTextures:U,floatFragmentTextures:P,floatVertexTextures:L,maxSamples:c}}function Ad(o){const e=this;let t=null,n=0,r=!1,a=!1;const f=new Si,l=new yn,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(x,v,S){const T=x.length!==0||v||n!==0||r;return r=v,t=_(x,S,0),n=x.length,T},this.beginShadows=function(){a=!0,_(null)},this.endShadows=function(){a=!1,d()},this.setState=function(x,v,S){const T=x.clippingPlanes,g=x.clipIntersection,m=x.clipShadows,w=o.get(x);if(!r||T===null||T.length===0||a&&!m)a?_(null):d();else{const R=a?0:n,U=R*4;let P=w.clippingState||null;p.value=P,P=_(T,v,U,S);for(let L=0;L!==U;++L)P[L]=t[L];w.clippingState=P,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=R}};function d(){p.value!==t&&(p.value=t,p.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function _(x,v,S,T){const g=x!==null?x.length:0;let m=null;if(g!==0){if(m=p.value,T!==!0||m===null){const w=S+g*4,R=v.matrixWorldInverse;l.getNormalMatrix(R),(m===null||m.length<w)&&(m=new Float32Array(w));for(let U=0,P=S;U!==g;++U,P+=4)f.copy(x[U]).applyMatrix4(R,l),f.normal.toArray(m,P),m[P+3]=f.constant}p.value=m,p.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function Cd(o){let e=new WeakMap;function t(f,l){return l===xa?f.mapping=ar:l===va&&(f.mapping=or),f}function n(f){if(f&&f.isTexture&&f.isRenderTargetTexture===!1){const l=f.mapping;if(l===xa||l===va)if(e.has(f)){const p=e.get(f).texture;return t(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const d=new Hu(p.height/2);return d.fromEquirectangularTexture(o,f),e.set(f,d),f.addEventListener("dispose",r),t(d.texture,f.mapping)}else return null}}return f}function r(f){const l=f.target;l.removeEventListener("dispose",r);const p=e.get(l);p!==void 0&&(e.delete(l),p.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}class Ld extends Rl{constructor(e=-1,t=1,n=1,r=-1,a=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=a,this.far=f,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,a,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=n-e,f=n+e,l=r+t,p=r-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=d*this.view.offsetX,f=a+d*this.view.width,l-=_*this.view.offsetY,p=l-_*this.view.height}this.projectionMatrix.makeOrthographic(a,f,l,p,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const tr=4,ko=[.125,.215,.35,.446,.526,.582],Ti=20,fa=new Ld,Go=new Tt;let ha=null;const wi=(1+Math.sqrt(5))/2,Qi=1/wi,Ho=[new W(1,1,1),new W(-1,1,1),new W(1,1,-1),new W(-1,1,-1),new W(0,wi,Qi),new W(0,wi,-Qi),new W(Qi,0,wi),new W(-Qi,0,wi),new W(wi,Qi,0),new W(-wi,Qi,0)];class Vo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){ha=this._renderer.getRenderTarget(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ha),e.scissorTest=!1,os(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ar||e.mapping===or?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ha=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:xn,minFilter:xn,generateMipmaps:!1,type:Er,format:Nn,encoding:Ri,depthBuffer:!1},r=Wo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wo(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Dd(a)),this._blurMaterial=Pd(a,e,t)}return r}_compileMaterial(e){const t=new ci(this._lodPlanes[0],e);this._renderer.compile(t,fa)}_sceneToCubeUV(e,t,n,r){const l=new vn(90,1,t,n),p=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],_=this._renderer,x=_.autoClear,v=_.toneMapping;_.getClearColor(Go),_.toneMapping=Xn,_.autoClear=!1;const S=new Ll({name:"PMREM.Background",side:Mn,depthWrite:!1,depthTest:!1}),T=new ci(new Pr,S);let g=!1;const m=e.background;m?m.isColor&&(S.color.copy(m),e.background=null,g=!0):(S.color.copy(Go),g=!0);for(let w=0;w<6;w++){const R=w%3;R===0?(l.up.set(0,p[w],0),l.lookAt(d[w],0,0)):R===1?(l.up.set(0,0,p[w]),l.lookAt(0,d[w],0)):(l.up.set(0,p[w],0),l.lookAt(0,0,d[w]));const U=this._cubeSize;os(r,R*U,w>2?U:0,U,U),_.setRenderTarget(r),g&&_.render(T,l),_.render(e,l)}T.geometry.dispose(),T.material.dispose(),_.toneMapping=v,_.autoClear=x,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===ar||e.mapping===or;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=jo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qo());const a=r?this._cubemapMaterial:this._equirectMaterial,f=new ci(this._lodPlanes[0],a),l=a.uniforms;l.envMap.value=e;const p=this._cubeSize;os(t,0,0,3*p,2*p),n.setRenderTarget(t),n.render(f,fa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),f=Ho[(r-1)%Ho.length];this._blur(e,r-1,r,a,f)}t.autoClear=n}_blur(e,t,n,r,a){const f=this._pingPongRenderTarget;this._halfBlur(e,f,t,n,r,"latitudinal",a),this._halfBlur(f,e,n,n,r,"longitudinal",a)}_halfBlur(e,t,n,r,a,f,l){const p=this._renderer,d=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,x=new ci(this._lodPlanes[r],d),v=d.uniforms,S=this._sizeLods[n]-1,T=isFinite(a)?Math.PI/(2*S):2*Math.PI/(2*Ti-1),g=a/T,m=isFinite(a)?1+Math.floor(_*g):Ti;m>Ti&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ti}`);const w=[];let R=0;for(let Y=0;Y<Ti;++Y){const A=Y/g,B=Math.exp(-A*A/2);w.push(B),Y===0?R+=B:Y<m&&(R+=2*B)}for(let Y=0;Y<w.length;Y++)w[Y]=w[Y]/R;v.envMap.value=e.texture,v.samples.value=m,v.weights.value=w,v.latitudinal.value=f==="latitudinal",l&&(v.poleAxis.value=l);const{_lodMax:U}=this;v.dTheta.value=T,v.mipInt.value=U-n;const P=this._sizeLods[r],L=3*P*(r>U-tr?r-U+tr:0),c=4*(this._cubeSize-P);os(t,L,c,3*P,2*P),p.setRenderTarget(t),p.render(x,fa)}}function Dd(o){const e=[],t=[],n=[];let r=o;const a=o-tr+1+ko.length;for(let f=0;f<a;f++){const l=Math.pow(2,r);t.push(l);let p=1/l;f>o-tr?p=ko[f-o+tr-1]:f===0&&(p=0),n.push(p);const d=1/(l-2),_=-d,x=1+d,v=[_,_,x,_,x,x,_,_,x,x,_,x],S=6,T=6,g=3,m=2,w=1,R=new Float32Array(g*T*S),U=new Float32Array(m*T*S),P=new Float32Array(w*T*S);for(let c=0;c<S;c++){const Y=c%3*2/3-1,A=c>2?0:-1,B=[Y,A,0,Y+2/3,A,0,Y+2/3,A+1,0,Y,A,0,Y+2/3,A+1,0,Y,A+1,0];R.set(B,g*T*c),U.set(v,m*T*c);const J=[c,c,c,c,c,c];P.set(J,w*T*c)}const L=new Yn;L.setAttribute("position",new Fn(R,g)),L.setAttribute("uv",new Fn(U,m)),L.setAttribute("faceIndex",new Fn(P,w)),e.push(L),r>tr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Wo(o,e,t){const n=new Ii(o,e,t);return n.texture.mapping=ps,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function os(o,e,t,n,r){o.viewport.set(e,t,n,r),o.scissor.set(e,t,n,r)}function Pd(o,e,t){const n=new Float32Array(Ti),r=new W(0,1,0);return new Fi({name:"SphericalGaussianBlur",defines:{n:Ti,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ca(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function qo(){return new Fi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ca(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function jo(){return new Fi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ca(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Ca(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Rd(o){let e=new WeakMap,t=null;function n(l){if(l&&l.isTexture){const p=l.mapping,d=p===xa||p===va,_=p===ar||p===or;if(d||_)if(l.isRenderTargetTexture&&l.needsPMREMUpdate===!0){l.needsPMREMUpdate=!1;let x=e.get(l);return t===null&&(t=new Vo(o)),x=d?t.fromEquirectangular(l,x):t.fromCubemap(l,x),e.set(l,x),x.texture}else{if(e.has(l))return e.get(l).texture;{const x=l.image;if(d&&x&&x.height>0||_&&x&&r(x)){t===null&&(t=new Vo(o));const v=d?t.fromEquirectangular(l):t.fromCubemap(l);return e.set(l,v),l.addEventListener("dispose",a),v.texture}else return null}}}return l}function r(l){let p=0;const d=6;for(let _=0;_<d;_++)l[_]!==void 0&&p++;return p===d}function a(l){const p=l.target;p.removeEventListener("dispose",a);const d=e.get(p);d!==void 0&&(e.delete(p),d.dispose())}function f(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:f}}function Id(o){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=o.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Nd(o,e,t,n){const r={},a=new WeakMap;function f(x){const v=x.target;v.index!==null&&e.remove(v.index);for(const T in v.attributes)e.remove(v.attributes[T]);v.removeEventListener("dispose",f),delete r[v.id];const S=a.get(v);S&&(e.remove(S),a.delete(v)),n.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function l(x,v){return r[v.id]===!0||(v.addEventListener("dispose",f),r[v.id]=!0,t.memory.geometries++),v}function p(x){const v=x.attributes;for(const T in v)e.update(v[T],34962);const S=x.morphAttributes;for(const T in S){const g=S[T];for(let m=0,w=g.length;m<w;m++)e.update(g[m],34962)}}function d(x){const v=[],S=x.index,T=x.attributes.position;let g=0;if(S!==null){const R=S.array;g=S.version;for(let U=0,P=R.length;U<P;U+=3){const L=R[U+0],c=R[U+1],Y=R[U+2];v.push(L,c,c,Y,Y,L)}}else{const R=T.array;g=T.version;for(let U=0,P=R.length/3-1;U<P;U+=3){const L=U+0,c=U+1,Y=U+2;v.push(L,c,c,Y,Y,L)}}const m=new(bl(v)?Pl:Dl)(v,1);m.version=g;const w=a.get(x);w&&e.remove(w),a.set(x,m)}function _(x){const v=a.get(x);if(v){const S=x.index;S!==null&&v.version<S.version&&d(x)}else d(x);return a.get(x)}return{get:l,update:p,getWireframeAttribute:_}}function Fd(o,e,t,n){const r=n.isWebGL2;let a;function f(v){a=v}let l,p;function d(v){l=v.type,p=v.bytesPerElement}function _(v,S){o.drawElements(a,S,l,v*p),t.update(S,a,1)}function x(v,S,T){if(T===0)return;let g,m;if(r)g=o,m="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](a,S,l,v*p,T),t.update(S,a,T)}this.setMode=f,this.setIndex=d,this.render=_,this.renderInstances=x}function Od(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,f,l){switch(t.calls++,f){case 4:t.triangles+=l*(a/3);break;case 1:t.lines+=l*(a/2);break;case 3:t.lines+=l*(a-1);break;case 2:t.lines+=l*a;break;case 0:t.points+=l*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Ud(o,e){return o[0]-e[0]}function zd(o,e){return Math.abs(e[1])-Math.abs(o[1])}function Bd(o,e,t){const n={},r=new Float32Array(8),a=new WeakMap,f=new Vt,l=[];for(let d=0;d<8;d++)l[d]=[d,0];function p(d,_,x,v){const S=d.morphTargetInfluences;if(e.isWebGL2===!0){const g=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,m=g!==void 0?g.length:0;let w=a.get(_);if(w===void 0||w.count!==m){let xe=function(){$.dispose(),a.delete(_),_.removeEventListener("dispose",xe)};var T=xe;w!==void 0&&w.texture.dispose();const P=_.morphAttributes.position!==void 0,L=_.morphAttributes.normal!==void 0,c=_.morphAttributes.color!==void 0,Y=_.morphAttributes.position||[],A=_.morphAttributes.normal||[],B=_.morphAttributes.color||[];let J=0;P===!0&&(J=1),L===!0&&(J=2),c===!0&&(J=3);let pe=_.attributes.position.count*J,be=1;pe>e.maxTextureSize&&(be=Math.ceil(pe/e.maxTextureSize),pe=e.maxTextureSize);const ne=new Float32Array(pe*be*4*m),$=new El(ne,pe,be,m);$.type=Ai,$.needsUpdate=!0;const fe=J*4;for(let ve=0;ve<m;ve++){const oe=Y[ve],Z=A[ve],ee=B[ve],_e=pe*be*4*ve;for(let ye=0;ye<oe.count;ye++){const me=ye*fe;P===!0&&(f.fromBufferAttribute(oe,ye),ne[_e+me+0]=f.x,ne[_e+me+1]=f.y,ne[_e+me+2]=f.z,ne[_e+me+3]=0),L===!0&&(f.fromBufferAttribute(Z,ye),ne[_e+me+4]=f.x,ne[_e+me+5]=f.y,ne[_e+me+6]=f.z,ne[_e+me+7]=0),c===!0&&(f.fromBufferAttribute(ee,ye),ne[_e+me+8]=f.x,ne[_e+me+9]=f.y,ne[_e+me+10]=f.z,ne[_e+me+11]=ee.itemSize===4?f.w:1)}}w={count:m,texture:$,size:new lt(pe,be)},a.set(_,w),_.addEventListener("dispose",xe)}let R=0;for(let P=0;P<S.length;P++)R+=S[P];const U=_.morphTargetsRelative?1:1-R;v.getUniforms().setValue(o,"morphTargetBaseInfluence",U),v.getUniforms().setValue(o,"morphTargetInfluences",S),v.getUniforms().setValue(o,"morphTargetsTexture",w.texture,t),v.getUniforms().setValue(o,"morphTargetsTextureSize",w.size)}else{const g=S===void 0?0:S.length;let m=n[_.id];if(m===void 0||m.length!==g){m=[];for(let L=0;L<g;L++)m[L]=[L,0];n[_.id]=m}for(let L=0;L<g;L++){const c=m[L];c[0]=L,c[1]=S[L]}m.sort(zd);for(let L=0;L<8;L++)L<g&&m[L][1]?(l[L][0]=m[L][0],l[L][1]=m[L][1]):(l[L][0]=Number.MAX_SAFE_INTEGER,l[L][1]=0);l.sort(Ud);const w=_.morphAttributes.position,R=_.morphAttributes.normal;let U=0;for(let L=0;L<8;L++){const c=l[L],Y=c[0],A=c[1];Y!==Number.MAX_SAFE_INTEGER&&A?(w&&_.getAttribute("morphTarget"+L)!==w[Y]&&_.setAttribute("morphTarget"+L,w[Y]),R&&_.getAttribute("morphNormal"+L)!==R[Y]&&_.setAttribute("morphNormal"+L,R[Y]),r[L]=A,U+=A):(w&&_.hasAttribute("morphTarget"+L)===!0&&_.deleteAttribute("morphTarget"+L),R&&_.hasAttribute("morphNormal"+L)===!0&&_.deleteAttribute("morphNormal"+L),r[L]=0)}const P=_.morphTargetsRelative?1:1-U;v.getUniforms().setValue(o,"morphTargetBaseInfluence",P),v.getUniforms().setValue(o,"morphTargetInfluences",r)}}return{update:p}}function kd(o,e,t,n){let r=new WeakMap;function a(p){const d=n.render.frame,_=p.geometry,x=e.get(p,_);return r.get(x)!==d&&(e.update(x),r.set(x,d)),p.isInstancedMesh&&(p.hasEventListener("dispose",l)===!1&&p.addEventListener("dispose",l),t.update(p.instanceMatrix,34962),p.instanceColor!==null&&t.update(p.instanceColor,34962)),x}function f(){r=new WeakMap}function l(p){const d=p.target;d.removeEventListener("dispose",l),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:a,dispose:f}}const Ol=new bn,Ul=new El,zl=new Eu,Bl=new Il,Xo=[],Yo=[],$o=new Float32Array(16),Zo=new Float32Array(9),Ko=new Float32Array(4);function ur(o,e,t){const n=o[0];if(n<=0||n>0)return o;const r=e*t;let a=Xo[r];if(a===void 0&&(a=new Float32Array(r),Xo[r]=a),e!==0){n.toArray(a,0);for(let f=1,l=0;f!==e;++f)l+=t,o[f].toArray(a,l)}return a}function zt(o,e){if(o.length!==e.length)return!1;for(let t=0,n=o.length;t<n;t++)if(o[t]!==e[t])return!1;return!0}function Bt(o,e){for(let t=0,n=e.length;t<n;t++)o[t]=e[t]}function _s(o,e){let t=Yo[e];t===void 0&&(t=new Int32Array(e),Yo[e]=t);for(let n=0;n!==e;++n)t[n]=o.allocateTextureUnit();return t}function Gd(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function Hd(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;o.uniform2fv(this.addr,e),Bt(t,e)}}function Vd(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(zt(t,e))return;o.uniform3fv(this.addr,e),Bt(t,e)}}function Wd(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;o.uniform4fv(this.addr,e),Bt(t,e)}}function qd(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),Bt(t,e)}else{if(zt(t,n))return;Ko.set(n),o.uniformMatrix2fv(this.addr,!1,Ko),Bt(t,n)}}function jd(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),Bt(t,e)}else{if(zt(t,n))return;Zo.set(n),o.uniformMatrix3fv(this.addr,!1,Zo),Bt(t,n)}}function Xd(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),Bt(t,e)}else{if(zt(t,n))return;$o.set(n),o.uniformMatrix4fv(this.addr,!1,$o),Bt(t,n)}}function Yd(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function $d(o,e){const t=this.cache;zt(t,e)||(o.uniform2iv(this.addr,e),Bt(t,e))}function Zd(o,e){const t=this.cache;zt(t,e)||(o.uniform3iv(this.addr,e),Bt(t,e))}function Kd(o,e){const t=this.cache;zt(t,e)||(o.uniform4iv(this.addr,e),Bt(t,e))}function Jd(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function Qd(o,e){const t=this.cache;zt(t,e)||(o.uniform2uiv(this.addr,e),Bt(t,e))}function ep(o,e){const t=this.cache;zt(t,e)||(o.uniform3uiv(this.addr,e),Bt(t,e))}function tp(o,e){const t=this.cache;zt(t,e)||(o.uniform4uiv(this.addr,e),Bt(t,e))}function np(o,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(o.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||Ol,r)}function ip(o,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(o.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||zl,r)}function rp(o,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(o.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Bl,r)}function sp(o,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(o.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Ul,r)}function ap(o){switch(o){case 5126:return Gd;case 35664:return Hd;case 35665:return Vd;case 35666:return Wd;case 35674:return qd;case 35675:return jd;case 35676:return Xd;case 5124:case 35670:return Yd;case 35667:case 35671:return $d;case 35668:case 35672:return Zd;case 35669:case 35673:return Kd;case 5125:return Jd;case 36294:return Qd;case 36295:return ep;case 36296:return tp;case 35678:case 36198:case 36298:case 36306:case 35682:return np;case 35679:case 36299:case 36307:return ip;case 35680:case 36300:case 36308:case 36293:return rp;case 36289:case 36303:case 36311:case 36292:return sp}}function op(o,e){o.uniform1fv(this.addr,e)}function lp(o,e){const t=ur(e,this.size,2);o.uniform2fv(this.addr,t)}function cp(o,e){const t=ur(e,this.size,3);o.uniform3fv(this.addr,t)}function up(o,e){const t=ur(e,this.size,4);o.uniform4fv(this.addr,t)}function fp(o,e){const t=ur(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function hp(o,e){const t=ur(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function dp(o,e){const t=ur(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function pp(o,e){o.uniform1iv(this.addr,e)}function mp(o,e){o.uniform2iv(this.addr,e)}function gp(o,e){o.uniform3iv(this.addr,e)}function _p(o,e){o.uniform4iv(this.addr,e)}function xp(o,e){o.uniform1uiv(this.addr,e)}function vp(o,e){o.uniform2uiv(this.addr,e)}function yp(o,e){o.uniform3uiv(this.addr,e)}function Mp(o,e){o.uniform4uiv(this.addr,e)}function bp(o,e,t){const n=this.cache,r=e.length,a=_s(t,r);zt(n,a)||(o.uniform1iv(this.addr,a),Bt(n,a));for(let f=0;f!==r;++f)t.setTexture2D(e[f]||Ol,a[f])}function Sp(o,e,t){const n=this.cache,r=e.length,a=_s(t,r);zt(n,a)||(o.uniform1iv(this.addr,a),Bt(n,a));for(let f=0;f!==r;++f)t.setTexture3D(e[f]||zl,a[f])}function wp(o,e,t){const n=this.cache,r=e.length,a=_s(t,r);zt(n,a)||(o.uniform1iv(this.addr,a),Bt(n,a));for(let f=0;f!==r;++f)t.setTextureCube(e[f]||Bl,a[f])}function Tp(o,e,t){const n=this.cache,r=e.length,a=_s(t,r);zt(n,a)||(o.uniform1iv(this.addr,a),Bt(n,a));for(let f=0;f!==r;++f)t.setTexture2DArray(e[f]||Ul,a[f])}function Ep(o){switch(o){case 5126:return op;case 35664:return lp;case 35665:return cp;case 35666:return up;case 35674:return fp;case 35675:return hp;case 35676:return dp;case 5124:case 35670:return pp;case 35667:case 35671:return mp;case 35668:case 35672:return gp;case 35669:case 35673:return _p;case 5125:return xp;case 36294:return vp;case 36295:return yp;case 36296:return Mp;case 35678:case 36198:case 36298:case 36306:case 35682:return bp;case 35679:case 36299:case 36307:return Sp;case 35680:case 36300:case 36308:case 36293:return wp;case 36289:case 36303:case 36311:case 36292:return Tp}}class Ap{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=ap(t.type)}}class Cp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Ep(t.type)}}class Lp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let a=0,f=r.length;a!==f;++a){const l=r[a];l.setValue(e,t[l.id],n)}}}const da=/(\w+)(\])?(\[|\.)?/g;function Jo(o,e){o.seq.push(e),o.map[e.id]=e}function Dp(o,e,t){const n=o.name,r=n.length;for(da.lastIndex=0;;){const a=da.exec(n),f=da.lastIndex;let l=a[1];const p=a[2]==="]",d=a[3];if(p&&(l=l|0),d===void 0||d==="["&&f+2===r){Jo(t,d===void 0?new Ap(l,o,e):new Cp(l,o,e));break}else{let x=t.map[l];x===void 0&&(x=new Lp(l),Jo(t,x)),t=x}}}class hs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let r=0;r<n;++r){const a=e.getActiveUniform(t,r),f=e.getUniformLocation(t,a.name);Dp(a,f,this)}}setValue(e,t,n,r){const a=this.map[t];a!==void 0&&a.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let a=0,f=t.length;a!==f;++a){const l=t[a],p=n[l.id];p.needsUpdate!==!1&&l.setValue(e,p.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,a=e.length;r!==a;++r){const f=e[r];f.id in t&&n.push(f)}return n}}function Qo(o,e,t){const n=o.createShader(e);return o.shaderSource(n,t),o.compileShader(n),n}let Pp=0;function Rp(o,e){const t=o.split(`
`),n=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let f=r;f<a;f++){const l=f+1;n.push(`${l===e?">":" "} ${l}: ${t[f]}`)}return n.join(`
`)}function Ip(o){switch(o){case Ri:return["Linear","( value )"];case Pt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",o),["Linear","( value )"]}}function el(o,e,t){const n=o.getShaderParameter(e,35713),r=o.getShaderInfoLog(e).trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const f=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Rp(o.getShaderSource(e),f)}else return r}function Np(o,e){const t=Ip(e);return"vec4 "+o+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Fp(o,e){let t;switch(e){case Jc:t="Linear";break;case Qc:t="Reinhard";break;case eu:t="OptimizedCineon";break;case tu:t="ACESFilmic";break;case nu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Op(o){return[o.extensionDerivatives||!!o.envMapCubeUVHeight||o.bumpMap||o.tangentSpaceNormalMap||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Tr).join(`
`)}function Up(o){const e=[];for(const t in o){const n=o[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function zp(o,e){const t={},n=o.getProgramParameter(e,35721);for(let r=0;r<n;r++){const a=o.getActiveAttrib(e,r),f=a.name;let l=1;a.type===35674&&(l=2),a.type===35675&&(l=3),a.type===35676&&(l=4),t[f]={type:a.type,location:o.getAttribLocation(e,f),locationSize:l}}return t}function Tr(o){return o!==""}function tl(o,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function nl(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Bp=/^[ \t]*#include +<([\w\d./]+)>/gm;function wa(o){return o.replace(Bp,kp)}function kp(o,e){const t=at[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return wa(t)}const Gp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function il(o){return o.replace(Gp,Hp)}function Hp(o,e,t,n){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function rl(o){let e="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Vp(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===gl?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===Dc?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===wr&&(e="SHADOWMAP_TYPE_VSM"),e}function Wp(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case ar:case or:e="ENVMAP_TYPE_CUBE";break;case ps:e="ENVMAP_TYPE_CUBE_UV";break}return e}function qp(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case or:e="ENVMAP_MODE_REFRACTION";break}return e}function jp(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case vl:e="ENVMAP_BLENDING_MULTIPLY";break;case Zc:e="ENVMAP_BLENDING_MIX";break;case Kc:e="ENVMAP_BLENDING_ADD";break}return e}function Xp(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Yp(o,e,t,n){const r=o.getContext(),a=t.defines;let f=t.vertexShader,l=t.fragmentShader;const p=Vp(t),d=Wp(t),_=qp(t),x=jp(t),v=Xp(t),S=t.isWebGL2?"":Op(t),T=Up(a),g=r.createProgram();let m,w,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[T].filter(Tr).join(`
`),m.length>0&&(m+=`
`),w=[S,T].filter(Tr).join(`
`),w.length>0&&(w+=`
`)):(m=[rl(t),"#define SHADER_NAME "+t.shaderName,T,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+_:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Tr).join(`
`),w=[S,rl(t),"#define SHADER_NAME "+t.shaderName,T,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+_:"",t.envMap?"#define "+x:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Xn?"#define TONE_MAPPING":"",t.toneMapping!==Xn?at.tonemapping_pars_fragment:"",t.toneMapping!==Xn?Fp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",at.encodings_pars_fragment,Np("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Tr).join(`
`)),f=wa(f),f=tl(f,t),f=nl(f,t),l=wa(l),l=tl(l,t),l=nl(l,t),f=il(f),l=il(l),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,w=["#define varying in",t.glslVersion===Eo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Eo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+w);const U=R+m+f,P=R+w+l,L=Qo(r,35633,U),c=Qo(r,35632,P);if(r.attachShader(g,L),r.attachShader(g,c),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g),o.debug.checkShaderErrors){const B=r.getProgramInfoLog(g).trim(),J=r.getShaderInfoLog(L).trim(),pe=r.getShaderInfoLog(c).trim();let be=!0,ne=!0;if(r.getProgramParameter(g,35714)===!1){be=!1;const $=el(r,L,"vertex"),fe=el(r,c,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,35715)+`

Program Info Log: `+B+`
`+$+`
`+fe)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(J===""||pe==="")&&(ne=!1);ne&&(this.diagnostics={runnable:be,programLog:B,vertexShader:{log:J,prefix:m},fragmentShader:{log:pe,prefix:w}})}r.deleteShader(L),r.deleteShader(c);let Y;this.getUniforms=function(){return Y===void 0&&(Y=new hs(r,g)),Y};let A;return this.getAttributes=function(){return A===void 0&&(A=zp(r,g)),A},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.name=t.shaderName,this.id=Pp++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=L,this.fragmentShader=c,this}let $p=0;class Zp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(n),f=this._getShaderCacheForMaterial(e);return f.has(r)===!1&&(f.add(r),r.usedTimes++),f.has(a)===!1&&(f.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Kp(e),t.set(e,n)),n}}class Kp{constructor(e){this.id=$p++,this.code=e,this.usedTimes=0}}function Jp(o,e,t,n,r,a,f){const l=new Cl,p=new Zp,d=[],_=r.isWebGL2,x=r.logarithmicDepthBuffer,v=r.vertexTextures;let S=r.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(A,B,J,pe,be){const ne=pe.fog,$=be.geometry,fe=A.isMeshStandardMaterial?pe.environment:null,xe=(A.isMeshStandardMaterial?t:e).get(A.envMap||fe),ve=!!xe&&xe.mapping===ps?xe.image.height:null,oe=T[A.type];A.precision!==null&&(S=r.getMaxPrecision(A.precision),S!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",S,"instead."));const Z=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ee=Z!==void 0?Z.length:0;let _e=0;$.morphAttributes.position!==void 0&&(_e=1),$.morphAttributes.normal!==void 0&&(_e=2),$.morphAttributes.color!==void 0&&(_e=3);let ye,me,Ne,$e;if(oe){const dt=In[oe];ye=dt.vertexShader,me=dt.fragmentShader}else ye=A.vertexShader,me=A.fragmentShader,p.update(A),Ne=p.getVertexShaderID(A),$e=p.getFragmentShaderID(A);const ce=o.getRenderTarget(),ct=A.alphaTest>0,qe=A.clearcoat>0,Ge=A.iridescence>0;return{isWebGL2:_,shaderID:oe,shaderName:A.type,vertexShader:ye,fragmentShader:me,defines:A.defines,customVertexShaderID:Ne,customFragmentShaderID:$e,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:S,instancing:be.isInstancedMesh===!0,instancingColor:be.isInstancedMesh===!0&&be.instanceColor!==null,supportsVertexTextures:v,outputEncoding:ce===null?o.outputEncoding:ce.isXRRenderTarget===!0?ce.texture.encoding:Ri,map:!!A.map,matcap:!!A.matcap,envMap:!!xe,envMapMode:xe&&xe.mapping,envMapCubeUVHeight:ve,lightMap:!!A.lightMap,aoMap:!!A.aoMap,emissiveMap:!!A.emissiveMap,bumpMap:!!A.bumpMap,normalMap:!!A.normalMap,objectSpaceNormalMap:A.normalMapType===bu,tangentSpaceNormalMap:A.normalMapType===Mu,decodeVideoTexture:!!A.map&&A.map.isVideoTexture===!0&&A.map.encoding===Pt,clearcoat:qe,clearcoatMap:qe&&!!A.clearcoatMap,clearcoatRoughnessMap:qe&&!!A.clearcoatRoughnessMap,clearcoatNormalMap:qe&&!!A.clearcoatNormalMap,iridescence:Ge,iridescenceMap:Ge&&!!A.iridescenceMap,iridescenceThicknessMap:Ge&&!!A.iridescenceThicknessMap,displacementMap:!!A.displacementMap,roughnessMap:!!A.roughnessMap,metalnessMap:!!A.metalnessMap,specularMap:!!A.specularMap,specularIntensityMap:!!A.specularIntensityMap,specularColorMap:!!A.specularColorMap,opaque:A.transparent===!1&&A.blending===nr,alphaMap:!!A.alphaMap,alphaTest:ct,gradientMap:!!A.gradientMap,sheen:A.sheen>0,sheenColorMap:!!A.sheenColorMap,sheenRoughnessMap:!!A.sheenRoughnessMap,transmission:A.transmission>0,transmissionMap:!!A.transmissionMap,thicknessMap:!!A.thicknessMap,combine:A.combine,vertexTangents:!!A.normalMap&&!!$.attributes.tangent,vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,vertexUvs:!!A.map||!!A.bumpMap||!!A.normalMap||!!A.specularMap||!!A.alphaMap||!!A.emissiveMap||!!A.roughnessMap||!!A.metalnessMap||!!A.clearcoatMap||!!A.clearcoatRoughnessMap||!!A.clearcoatNormalMap||!!A.iridescenceMap||!!A.iridescenceThicknessMap||!!A.displacementMap||!!A.transmissionMap||!!A.thicknessMap||!!A.specularIntensityMap||!!A.specularColorMap||!!A.sheenColorMap||!!A.sheenRoughnessMap,uvsVertexOnly:!(!!A.map||!!A.bumpMap||!!A.normalMap||!!A.specularMap||!!A.alphaMap||!!A.emissiveMap||!!A.roughnessMap||!!A.metalnessMap||!!A.clearcoatNormalMap||!!A.iridescenceMap||!!A.iridescenceThicknessMap||A.transmission>0||!!A.transmissionMap||!!A.thicknessMap||!!A.specularIntensityMap||!!A.specularColorMap||A.sheen>0||!!A.sheenColorMap||!!A.sheenRoughnessMap)&&!!A.displacementMap,fog:!!ne,useFog:A.fog===!0,fogExp2:ne&&ne.isFogExp2,flatShading:!!A.flatShading,sizeAttenuation:A.sizeAttenuation,logarithmicDepthBuffer:x,skinning:be.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:_e,numDirLights:B.directional.length,numPointLights:B.point.length,numSpotLights:B.spot.length,numSpotLightMaps:B.spotLightMap.length,numRectAreaLights:B.rectArea.length,numHemiLights:B.hemi.length,numDirLightShadows:B.directionalShadowMap.length,numPointLightShadows:B.pointShadowMap.length,numSpotLightShadows:B.spotShadowMap.length,numSpotLightShadowsWithMaps:B.numSpotLightShadowsWithMaps,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:A.dithering,shadowMapEnabled:o.shadowMap.enabled&&J.length>0,shadowMapType:o.shadowMap.type,toneMapping:A.toneMapped?o.toneMapping:Xn,physicallyCorrectLights:o.physicallyCorrectLights,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===li,flipSided:A.side===Mn,useDepthPacking:!!A.depthPacking,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionDerivatives:A.extensions&&A.extensions.derivatives,extensionFragDepth:A.extensions&&A.extensions.fragDepth,extensionDrawBuffers:A.extensions&&A.extensions.drawBuffers,extensionShaderTextureLOD:A.extensions&&A.extensions.shaderTextureLOD,rendererExtensionFragDepth:_||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:_||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:_||n.has("EXT_shader_texture_lod"),customProgramCacheKey:A.customProgramCacheKey()}}function m(A){const B=[];if(A.shaderID?B.push(A.shaderID):(B.push(A.customVertexShaderID),B.push(A.customFragmentShaderID)),A.defines!==void 0)for(const J in A.defines)B.push(J),B.push(A.defines[J]);return A.isRawShaderMaterial===!1&&(w(B,A),R(B,A),B.push(o.outputEncoding)),B.push(A.customProgramCacheKey),B.join()}function w(A,B){A.push(B.precision),A.push(B.outputEncoding),A.push(B.envMapMode),A.push(B.envMapCubeUVHeight),A.push(B.combine),A.push(B.vertexUvs),A.push(B.fogExp2),A.push(B.sizeAttenuation),A.push(B.morphTargetsCount),A.push(B.morphAttributeCount),A.push(B.numDirLights),A.push(B.numPointLights),A.push(B.numSpotLights),A.push(B.numSpotLightMaps),A.push(B.numHemiLights),A.push(B.numRectAreaLights),A.push(B.numDirLightShadows),A.push(B.numPointLightShadows),A.push(B.numSpotLightShadows),A.push(B.numSpotLightShadowsWithMaps),A.push(B.shadowMapType),A.push(B.toneMapping),A.push(B.numClippingPlanes),A.push(B.numClipIntersection),A.push(B.depthPacking)}function R(A,B){l.disableAll(),B.isWebGL2&&l.enable(0),B.supportsVertexTextures&&l.enable(1),B.instancing&&l.enable(2),B.instancingColor&&l.enable(3),B.map&&l.enable(4),B.matcap&&l.enable(5),B.envMap&&l.enable(6),B.lightMap&&l.enable(7),B.aoMap&&l.enable(8),B.emissiveMap&&l.enable(9),B.bumpMap&&l.enable(10),B.normalMap&&l.enable(11),B.objectSpaceNormalMap&&l.enable(12),B.tangentSpaceNormalMap&&l.enable(13),B.clearcoat&&l.enable(14),B.clearcoatMap&&l.enable(15),B.clearcoatRoughnessMap&&l.enable(16),B.clearcoatNormalMap&&l.enable(17),B.iridescence&&l.enable(18),B.iridescenceMap&&l.enable(19),B.iridescenceThicknessMap&&l.enable(20),B.displacementMap&&l.enable(21),B.specularMap&&l.enable(22),B.roughnessMap&&l.enable(23),B.metalnessMap&&l.enable(24),B.gradientMap&&l.enable(25),B.alphaMap&&l.enable(26),B.alphaTest&&l.enable(27),B.vertexColors&&l.enable(28),B.vertexAlphas&&l.enable(29),B.vertexUvs&&l.enable(30),B.vertexTangents&&l.enable(31),B.uvsVertexOnly&&l.enable(32),A.push(l.mask),l.disableAll(),B.fog&&l.enable(0),B.useFog&&l.enable(1),B.flatShading&&l.enable(2),B.logarithmicDepthBuffer&&l.enable(3),B.skinning&&l.enable(4),B.morphTargets&&l.enable(5),B.morphNormals&&l.enable(6),B.morphColors&&l.enable(7),B.premultipliedAlpha&&l.enable(8),B.shadowMapEnabled&&l.enable(9),B.physicallyCorrectLights&&l.enable(10),B.doubleSided&&l.enable(11),B.flipSided&&l.enable(12),B.useDepthPacking&&l.enable(13),B.dithering&&l.enable(14),B.specularIntensityMap&&l.enable(15),B.specularColorMap&&l.enable(16),B.transmission&&l.enable(17),B.transmissionMap&&l.enable(18),B.thicknessMap&&l.enable(19),B.sheen&&l.enable(20),B.sheenColorMap&&l.enable(21),B.sheenRoughnessMap&&l.enable(22),B.decodeVideoTexture&&l.enable(23),B.opaque&&l.enable(24),A.push(l.mask)}function U(A){const B=T[A.type];let J;if(B){const pe=In[B];J=zu.clone(pe.uniforms)}else J=A.uniforms;return J}function P(A,B){let J;for(let pe=0,be=d.length;pe<be;pe++){const ne=d[pe];if(ne.cacheKey===B){J=ne,++J.usedTimes;break}}return J===void 0&&(J=new Yp(o,B,A,a),d.push(J)),J}function L(A){if(--A.usedTimes===0){const B=d.indexOf(A);d[B]=d[d.length-1],d.pop(),A.destroy()}}function c(A){p.remove(A)}function Y(){p.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:U,acquireProgram:P,releaseProgram:L,releaseShaderCache:c,programs:d,dispose:Y}}function Qp(){let o=new WeakMap;function e(a){let f=o.get(a);return f===void 0&&(f={},o.set(a,f)),f}function t(a){o.delete(a)}function n(a,f,l){o.get(a)[f]=l}function r(){o=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function em(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function sl(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function al(){const o=[];let e=0;const t=[],n=[],r=[];function a(){e=0,t.length=0,n.length=0,r.length=0}function f(x,v,S,T,g,m){let w=o[e];return w===void 0?(w={id:x.id,object:x,geometry:v,material:S,groupOrder:T,renderOrder:x.renderOrder,z:g,group:m},o[e]=w):(w.id=x.id,w.object=x,w.geometry=v,w.material=S,w.groupOrder=T,w.renderOrder=x.renderOrder,w.z=g,w.group=m),e++,w}function l(x,v,S,T,g,m){const w=f(x,v,S,T,g,m);S.transmission>0?n.push(w):S.transparent===!0?r.push(w):t.push(w)}function p(x,v,S,T,g,m){const w=f(x,v,S,T,g,m);S.transmission>0?n.unshift(w):S.transparent===!0?r.unshift(w):t.unshift(w)}function d(x,v){t.length>1&&t.sort(x||em),n.length>1&&n.sort(v||sl),r.length>1&&r.sort(v||sl)}function _(){for(let x=e,v=o.length;x<v;x++){const S=o[x];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:n,transparent:r,init:a,push:l,unshift:p,finish:_,sort:d}}function tm(){let o=new WeakMap;function e(n,r){const a=o.get(n);let f;return a===void 0?(f=new al,o.set(n,[f])):r>=a.length?(f=new al,a.push(f)):f=a[r],f}function t(){o=new WeakMap}return{get:e,dispose:t}}function nm(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new W,color:new Tt};break;case"SpotLight":t={position:new W,direction:new W,color:new Tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new Tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new Tt,groundColor:new Tt};break;case"RectAreaLight":t={color:new Tt,position:new W,halfWidth:new W,halfHeight:new W};break}return o[e.id]=t,t}}}function im(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let rm=0;function sm(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function am(o,e){const t=new nm,n=im(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let _=0;_<9;_++)r.probe.push(new W);const a=new W,f=new Ht,l=new Ht;function p(_,x){let v=0,S=0,T=0;for(let pe=0;pe<9;pe++)r.probe[pe].set(0,0,0);let g=0,m=0,w=0,R=0,U=0,P=0,L=0,c=0,Y=0,A=0;_.sort(sm);const B=x!==!0?Math.PI:1;for(let pe=0,be=_.length;pe<be;pe++){const ne=_[pe],$=ne.color,fe=ne.intensity,xe=ne.distance,ve=ne.shadow&&ne.shadow.map?ne.shadow.map.texture:null;if(ne.isAmbientLight)v+=$.r*fe*B,S+=$.g*fe*B,T+=$.b*fe*B;else if(ne.isLightProbe)for(let oe=0;oe<9;oe++)r.probe[oe].addScaledVector(ne.sh.coefficients[oe],fe);else if(ne.isDirectionalLight){const oe=t.get(ne);if(oe.color.copy(ne.color).multiplyScalar(ne.intensity*B),ne.castShadow){const Z=ne.shadow,ee=n.get(ne);ee.shadowBias=Z.bias,ee.shadowNormalBias=Z.normalBias,ee.shadowRadius=Z.radius,ee.shadowMapSize=Z.mapSize,r.directionalShadow[g]=ee,r.directionalShadowMap[g]=ve,r.directionalShadowMatrix[g]=ne.shadow.matrix,P++}r.directional[g]=oe,g++}else if(ne.isSpotLight){const oe=t.get(ne);oe.position.setFromMatrixPosition(ne.matrixWorld),oe.color.copy($).multiplyScalar(fe*B),oe.distance=xe,oe.coneCos=Math.cos(ne.angle),oe.penumbraCos=Math.cos(ne.angle*(1-ne.penumbra)),oe.decay=ne.decay,r.spot[w]=oe;const Z=ne.shadow;if(ne.map&&(r.spotLightMap[Y]=ne.map,Y++,Z.updateMatrices(ne),ne.castShadow&&A++),r.spotLightMatrix[w]=Z.matrix,ne.castShadow){const ee=n.get(ne);ee.shadowBias=Z.bias,ee.shadowNormalBias=Z.normalBias,ee.shadowRadius=Z.radius,ee.shadowMapSize=Z.mapSize,r.spotShadow[w]=ee,r.spotShadowMap[w]=ve,c++}w++}else if(ne.isRectAreaLight){const oe=t.get(ne);oe.color.copy($).multiplyScalar(fe),oe.halfWidth.set(ne.width*.5,0,0),oe.halfHeight.set(0,ne.height*.5,0),r.rectArea[R]=oe,R++}else if(ne.isPointLight){const oe=t.get(ne);if(oe.color.copy(ne.color).multiplyScalar(ne.intensity*B),oe.distance=ne.distance,oe.decay=ne.decay,ne.castShadow){const Z=ne.shadow,ee=n.get(ne);ee.shadowBias=Z.bias,ee.shadowNormalBias=Z.normalBias,ee.shadowRadius=Z.radius,ee.shadowMapSize=Z.mapSize,ee.shadowCameraNear=Z.camera.near,ee.shadowCameraFar=Z.camera.far,r.pointShadow[m]=ee,r.pointShadowMap[m]=ve,r.pointShadowMatrix[m]=ne.shadow.matrix,L++}r.point[m]=oe,m++}else if(ne.isHemisphereLight){const oe=t.get(ne);oe.skyColor.copy(ne.color).multiplyScalar(fe*B),oe.groundColor.copy(ne.groundColor).multiplyScalar(fe*B),r.hemi[U]=oe,U++}}R>0&&(e.isWebGL2||o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ee.LTC_FLOAT_1,r.rectAreaLTC2=Ee.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Ee.LTC_HALF_1,r.rectAreaLTC2=Ee.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=v,r.ambient[1]=S,r.ambient[2]=T;const J=r.hash;(J.directionalLength!==g||J.pointLength!==m||J.spotLength!==w||J.rectAreaLength!==R||J.hemiLength!==U||J.numDirectionalShadows!==P||J.numPointShadows!==L||J.numSpotShadows!==c||J.numSpotMaps!==Y)&&(r.directional.length=g,r.spot.length=w,r.rectArea.length=R,r.point.length=m,r.hemi.length=U,r.directionalShadow.length=P,r.directionalShadowMap.length=P,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=c,r.spotShadowMap.length=c,r.directionalShadowMatrix.length=P,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=c+Y-A,r.spotLightMap.length=Y,r.numSpotLightShadowsWithMaps=A,J.directionalLength=g,J.pointLength=m,J.spotLength=w,J.rectAreaLength=R,J.hemiLength=U,J.numDirectionalShadows=P,J.numPointShadows=L,J.numSpotShadows=c,J.numSpotMaps=Y,r.version=rm++)}function d(_,x){let v=0,S=0,T=0,g=0,m=0;const w=x.matrixWorldInverse;for(let R=0,U=_.length;R<U;R++){const P=_[R];if(P.isDirectionalLight){const L=r.directional[v];L.direction.setFromMatrixPosition(P.matrixWorld),a.setFromMatrixPosition(P.target.matrixWorld),L.direction.sub(a),L.direction.transformDirection(w),v++}else if(P.isSpotLight){const L=r.spot[T];L.position.setFromMatrixPosition(P.matrixWorld),L.position.applyMatrix4(w),L.direction.setFromMatrixPosition(P.matrixWorld),a.setFromMatrixPosition(P.target.matrixWorld),L.direction.sub(a),L.direction.transformDirection(w),T++}else if(P.isRectAreaLight){const L=r.rectArea[g];L.position.setFromMatrixPosition(P.matrixWorld),L.position.applyMatrix4(w),l.identity(),f.copy(P.matrixWorld),f.premultiply(w),l.extractRotation(f),L.halfWidth.set(P.width*.5,0,0),L.halfHeight.set(0,P.height*.5,0),L.halfWidth.applyMatrix4(l),L.halfHeight.applyMatrix4(l),g++}else if(P.isPointLight){const L=r.point[S];L.position.setFromMatrixPosition(P.matrixWorld),L.position.applyMatrix4(w),S++}else if(P.isHemisphereLight){const L=r.hemi[m];L.direction.setFromMatrixPosition(P.matrixWorld),L.direction.transformDirection(w),m++}}}return{setup:p,setupView:d,state:r}}function ol(o,e){const t=new am(o,e),n=[],r=[];function a(){n.length=0,r.length=0}function f(x){n.push(x)}function l(x){r.push(x)}function p(x){t.setup(n,x)}function d(x){t.setupView(n,x)}return{init:a,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:p,setupLightsView:d,pushLight:f,pushShadow:l}}function om(o,e){let t=new WeakMap;function n(a,f=0){const l=t.get(a);let p;return l===void 0?(p=new ol(o,e),t.set(a,[p])):f>=l.length?(p=new ol(o,e),l.push(p)):p=l[f],p}function r(){t=new WeakMap}return{get:n,dispose:r}}class lm extends Dr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class cm extends Dr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new W,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const um=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function hm(o,e,t){let n=new Nl;const r=new lt,a=new lt,f=new Vt,l=new lm({depthPacking:yu}),p=new cm,d={},_=t.maxTextureSize,x={0:Mn,1:sr,2:li},v=new Fi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:um,fragmentShader:fm}),S=v.clone();S.defines.HORIZONTAL_PASS=1;const T=new Yn;T.setAttribute("position",new Fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new ci(T,v),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gl,this.render=function(P,L,c){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;const Y=o.getRenderTarget(),A=o.getActiveCubeFace(),B=o.getActiveMipmapLevel(),J=o.state;J.setBlending(ui),J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);for(let pe=0,be=P.length;pe<be;pe++){const ne=P[pe],$=ne.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;r.copy($.mapSize);const fe=$.getFrameExtents();if(r.multiply(fe),a.copy($.mapSize),(r.x>_||r.y>_)&&(r.x>_&&(a.x=Math.floor(_/fe.x),r.x=a.x*fe.x,$.mapSize.x=a.x),r.y>_&&(a.y=Math.floor(_/fe.y),r.y=a.y*fe.y,$.mapSize.y=a.y)),$.map===null){const ve=this.type!==wr?{minFilter:rn,magFilter:rn}:{};$.map=new Ii(r.x,r.y,ve),$.map.texture.name=ne.name+".shadowMap",$.camera.updateProjectionMatrix()}o.setRenderTarget($.map),o.clear();const xe=$.getViewportCount();for(let ve=0;ve<xe;ve++){const oe=$.getViewport(ve);f.set(a.x*oe.x,a.y*oe.y,a.x*oe.z,a.y*oe.w),J.viewport(f),$.updateMatrices(ne,ve),n=$.getFrustum(),U(L,c,$.camera,ne,this.type)}$.isPointLightShadow!==!0&&this.type===wr&&w($,c),$.needsUpdate=!1}m.needsUpdate=!1,o.setRenderTarget(Y,A,B)};function w(P,L){const c=e.update(g);v.defines.VSM_SAMPLES!==P.blurSamples&&(v.defines.VSM_SAMPLES=P.blurSamples,S.defines.VSM_SAMPLES=P.blurSamples,v.needsUpdate=!0,S.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Ii(r.x,r.y)),v.uniforms.shadow_pass.value=P.map.texture,v.uniforms.resolution.value=P.mapSize,v.uniforms.radius.value=P.radius,o.setRenderTarget(P.mapPass),o.clear(),o.renderBufferDirect(L,null,c,v,g,null),S.uniforms.shadow_pass.value=P.mapPass.texture,S.uniforms.resolution.value=P.mapSize,S.uniforms.radius.value=P.radius,o.setRenderTarget(P.map),o.clear(),o.renderBufferDirect(L,null,c,S,g,null)}function R(P,L,c,Y,A,B){let J=null;const pe=c.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(pe!==void 0?J=pe:J=c.isPointLight===!0?p:l,o.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0){const be=J.uuid,ne=L.uuid;let $=d[be];$===void 0&&($={},d[be]=$);let fe=$[ne];fe===void 0&&(fe=J.clone(),$[ne]=fe),J=fe}return J.visible=L.visible,J.wireframe=L.wireframe,B===wr?J.side=L.shadowSide!==null?L.shadowSide:L.side:J.side=L.shadowSide!==null?L.shadowSide:x[L.side],J.alphaMap=L.alphaMap,J.alphaTest=L.alphaTest,J.clipShadows=L.clipShadows,J.clippingPlanes=L.clippingPlanes,J.clipIntersection=L.clipIntersection,J.displacementMap=L.displacementMap,J.displacementScale=L.displacementScale,J.displacementBias=L.displacementBias,J.wireframeLinewidth=L.wireframeLinewidth,J.linewidth=L.linewidth,c.isPointLight===!0&&J.isMeshDistanceMaterial===!0&&(J.referencePosition.setFromMatrixPosition(c.matrixWorld),J.nearDistance=Y,J.farDistance=A),J}function U(P,L,c,Y,A){if(P.visible===!1)return;if(P.layers.test(L.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&A===wr)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(c.matrixWorldInverse,P.matrixWorld);const pe=e.update(P),be=P.material;if(Array.isArray(be)){const ne=pe.groups;for(let $=0,fe=ne.length;$<fe;$++){const xe=ne[$],ve=be[xe.materialIndex];if(ve&&ve.visible){const oe=R(P,ve,Y,c.near,c.far,A);o.renderBufferDirect(c,null,pe,oe,P,xe)}}}else if(be.visible){const ne=R(P,be,Y,c.near,c.far,A);o.renderBufferDirect(c,null,pe,ne,P,null)}}const J=P.children;for(let pe=0,be=J.length;pe<be;pe++)U(J[pe],L,c,Y,A)}}function dm(o,e,t){const n=t.isWebGL2;function r(){let k=!1;const Ae=new Vt;let Se=null;const ue=new Vt(0,0,0,0);return{setMask:function(Te){Se!==Te&&!k&&(o.colorMask(Te,Te,Te,Te),Se=Te)},setLocked:function(Te){k=Te},setClear:function(Te,He,ft,At,Pn){Pn===!0&&(Te*=At,He*=At,ft*=At),Ae.set(Te,He,ft,At),ue.equals(Ae)===!1&&(o.clearColor(Te,He,ft,At),ue.copy(Ae))},reset:function(){k=!1,Se=null,ue.set(-1,0,0,0)}}}function a(){let k=!1,Ae=null,Se=null,ue=null;return{setTest:function(Te){Te?ct(2929):qe(2929)},setMask:function(Te){Ae!==Te&&!k&&(o.depthMask(Te),Ae=Te)},setFunc:function(Te){if(Se!==Te){switch(Te){case Vc:o.depthFunc(512);break;case Wc:o.depthFunc(519);break;case qc:o.depthFunc(513);break;case _a:o.depthFunc(515);break;case jc:o.depthFunc(514);break;case Xc:o.depthFunc(518);break;case Yc:o.depthFunc(516);break;case $c:o.depthFunc(517);break;default:o.depthFunc(515)}Se=Te}},setLocked:function(Te){k=Te},setClear:function(Te){ue!==Te&&(o.clearDepth(Te),ue=Te)},reset:function(){k=!1,Ae=null,Se=null,ue=null}}}function f(){let k=!1,Ae=null,Se=null,ue=null,Te=null,He=null,ft=null,At=null,Pn=null;return{setTest:function(bt){k||(bt?ct(2960):qe(2960))},setMask:function(bt){Ae!==bt&&!k&&(o.stencilMask(bt),Ae=bt)},setFunc:function(bt,Jt,Qt){(Se!==bt||ue!==Jt||Te!==Qt)&&(o.stencilFunc(bt,Jt,Qt),Se=bt,ue=Jt,Te=Qt)},setOp:function(bt,Jt,Qt){(He!==bt||ft!==Jt||At!==Qt)&&(o.stencilOp(bt,Jt,Qt),He=bt,ft=Jt,At=Qt)},setLocked:function(bt){k=bt},setClear:function(bt){Pn!==bt&&(o.clearStencil(bt),Pn=bt)},reset:function(){k=!1,Ae=null,Se=null,ue=null,Te=null,He=null,ft=null,At=null,Pn=null}}}const l=new r,p=new a,d=new f,_=new WeakMap,x=new WeakMap;let v={},S={},T=new WeakMap,g=[],m=null,w=!1,R=null,U=null,P=null,L=null,c=null,Y=null,A=null,B=!1,J=null,pe=null,be=null,ne=null,$=null;const fe=o.getParameter(35661);let xe=!1,ve=0;const oe=o.getParameter(7938);oe.indexOf("WebGL")!==-1?(ve=parseFloat(/^WebGL (\d)/.exec(oe)[1]),xe=ve>=1):oe.indexOf("OpenGL ES")!==-1&&(ve=parseFloat(/^OpenGL ES (\d)/.exec(oe)[1]),xe=ve>=2);let Z=null,ee={};const _e=o.getParameter(3088),ye=o.getParameter(2978),me=new Vt().fromArray(_e),Ne=new Vt().fromArray(ye);function $e(k,Ae,Se){const ue=new Uint8Array(4),Te=o.createTexture();o.bindTexture(k,Te),o.texParameteri(k,10241,9728),o.texParameteri(k,10240,9728);for(let He=0;He<Se;He++)o.texImage2D(Ae+He,0,6408,1,1,0,6408,5121,ue);return Te}const ce={};ce[3553]=$e(3553,3553,1),ce[34067]=$e(34067,34069,6),l.setClear(0,0,0,1),p.setClear(1),d.setClear(0),ct(2929),p.setFunc(_a),Pe(!1),_t(Za),ct(2884),Mt(ui);function ct(k){v[k]!==!0&&(o.enable(k),v[k]=!0)}function qe(k){v[k]!==!1&&(o.disable(k),v[k]=!1)}function Ge(k,Ae){return S[k]!==Ae?(o.bindFramebuffer(k,Ae),S[k]=Ae,n&&(k===36009&&(S[36160]=Ae),k===36160&&(S[36009]=Ae)),!0):!1}function Fe(k,Ae){let Se=g,ue=!1;if(k)if(Se=T.get(Ae),Se===void 0&&(Se=[],T.set(Ae,Se)),k.isWebGLMultipleRenderTargets){const Te=k.texture;if(Se.length!==Te.length||Se[0]!==36064){for(let He=0,ft=Te.length;He<ft;He++)Se[He]=36064+He;Se.length=Te.length,ue=!0}}else Se[0]!==36064&&(Se[0]=36064,ue=!0);else Se[0]!==1029&&(Se[0]=1029,ue=!0);ue&&(t.isWebGL2?o.drawBuffers(Se):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Se))}function dt(k){return m!==k?(o.useProgram(k),m=k,!0):!1}const nt={[er]:32774,[Rc]:32778,[Ic]:32779};if(n)nt[Qa]=32775,nt[eo]=32776;else{const k=e.get("EXT_blend_minmax");k!==null&&(nt[Qa]=k.MIN_EXT,nt[eo]=k.MAX_EXT)}const Oe={[Nc]:0,[Fc]:1,[Oc]:768,[_l]:770,[Hc]:776,[kc]:774,[zc]:772,[Uc]:769,[xl]:771,[Gc]:775,[Bc]:773};function Mt(k,Ae,Se,ue,Te,He,ft,At){if(k===ui){w===!0&&(qe(3042),w=!1);return}if(w===!1&&(ct(3042),w=!0),k!==Pc){if(k!==R||At!==B){if((U!==er||c!==er)&&(o.blendEquation(32774),U=er,c=er),At)switch(k){case nr:o.blendFuncSeparate(1,771,1,771);break;case ga:o.blendFunc(1,1);break;case Ka:o.blendFuncSeparate(0,769,0,1);break;case Ja:o.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case nr:o.blendFuncSeparate(770,771,1,771);break;case ga:o.blendFunc(770,1);break;case Ka:o.blendFuncSeparate(0,769,0,1);break;case Ja:o.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}P=null,L=null,Y=null,A=null,R=k,B=At}return}Te=Te||Ae,He=He||Se,ft=ft||ue,(Ae!==U||Te!==c)&&(o.blendEquationSeparate(nt[Ae],nt[Te]),U=Ae,c=Te),(Se!==P||ue!==L||He!==Y||ft!==A)&&(o.blendFuncSeparate(Oe[Se],Oe[ue],Oe[He],Oe[ft]),P=Se,L=ue,Y=He,A=ft),R=k,B=null}function Et(k,Ae){k.side===li?qe(2884):ct(2884);let Se=k.side===Mn;Ae&&(Se=!Se),Pe(Se),k.blending===nr&&k.transparent===!1?Mt(ui):Mt(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.premultipliedAlpha),p.setFunc(k.depthFunc),p.setTest(k.depthTest),p.setMask(k.depthWrite),l.setMask(k.colorWrite);const ue=k.stencilWrite;d.setTest(ue),ue&&(d.setMask(k.stencilWriteMask),d.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),d.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),pt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ct(32926):qe(32926)}function Pe(k){J!==k&&(k?o.frontFace(2304):o.frontFace(2305),J=k)}function _t(k){k!==Cc?(ct(2884),k!==pe&&(k===Za?o.cullFace(1029):k===Lc?o.cullFace(1028):o.cullFace(1032))):qe(2884),pe=k}function Rt(k){k!==be&&(xe&&o.lineWidth(k),be=k)}function pt(k,Ae,Se){k?(ct(32823),(ne!==Ae||$!==Se)&&(o.polygonOffset(Ae,Se),ne=Ae,$=Se)):qe(32823)}function Kt(k){k?ct(3089):qe(3089)}function Yt(k){k===void 0&&(k=33984+fe-1),Z!==k&&(o.activeTexture(k),Z=k)}function I(k,Ae,Se){Se===void 0&&(Z===null?Se=33984+fe-1:Se=Z);let ue=ee[Se];ue===void 0&&(ue={type:void 0,texture:void 0},ee[Se]=ue),(ue.type!==k||ue.texture!==Ae)&&(Z!==Se&&(o.activeTexture(Se),Z=Se),o.bindTexture(k,Ae||ce[k]),ue.type=k,ue.texture=Ae)}function C(){const k=ee[Z];k!==void 0&&k.type!==void 0&&(o.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function te(){try{o.compressedTexImage2D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ge(){try{o.texSubImage2D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Me(){try{o.texSubImage3D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function De(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function We(){try{o.texStorage2D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function z(){try{o.texStorage3D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function j(){try{o.texImage2D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Re(){try{o.texImage3D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ie(k){me.equals(k)===!1&&(o.scissor(k.x,k.y,k.z,k.w),me.copy(k))}function Le(k){Ne.equals(k)===!1&&(o.viewport(k.x,k.y,k.z,k.w),Ne.copy(k))}function Be(k,Ae){let Se=x.get(Ae);Se===void 0&&(Se=new WeakMap,x.set(Ae,Se));let ue=Se.get(k);ue===void 0&&(ue=o.getUniformBlockIndex(Ae,k.name),Se.set(k,ue))}function Ze(k,Ae){const ue=x.get(Ae).get(k);_.get(k)!==ue&&(o.uniformBlockBinding(Ae,ue,k.__bindingPointIndex),_.set(k,ue))}function et(){o.disable(3042),o.disable(2884),o.disable(2929),o.disable(32823),o.disable(3089),o.disable(2960),o.disable(32926),o.blendEquation(32774),o.blendFunc(1,0),o.blendFuncSeparate(1,0,1,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(513),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(519,0,4294967295),o.stencilOp(7680,7680,7680),o.clearStencil(0),o.cullFace(1029),o.frontFace(2305),o.polygonOffset(0,0),o.activeTexture(33984),o.bindFramebuffer(36160,null),n===!0&&(o.bindFramebuffer(36009,null),o.bindFramebuffer(36008,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),v={},Z=null,ee={},S={},T=new WeakMap,g=[],m=null,w=!1,R=null,U=null,P=null,L=null,c=null,Y=null,A=null,B=!1,J=null,pe=null,be=null,ne=null,$=null,me.set(0,0,o.canvas.width,o.canvas.height),Ne.set(0,0,o.canvas.width,o.canvas.height),l.reset(),p.reset(),d.reset()}return{buffers:{color:l,depth:p,stencil:d},enable:ct,disable:qe,bindFramebuffer:Ge,drawBuffers:Fe,useProgram:dt,setBlending:Mt,setMaterial:Et,setFlipSided:Pe,setCullFace:_t,setLineWidth:Rt,setPolygonOffset:pt,setScissorTest:Kt,activeTexture:Yt,bindTexture:I,unbindTexture:C,compressedTexImage2D:te,texImage2D:j,texImage3D:Re,updateUBOMapping:Be,uniformBlockBinding:Ze,texStorage2D:We,texStorage3D:z,texSubImage2D:ge,texSubImage3D:Me,compressedTexSubImage2D:De,scissor:Ie,viewport:Le,reset:et}}function pm(o,e,t,n,r,a,f){const l=r.isWebGL2,p=r.maxTextures,d=r.maxCubemapSize,_=r.maxTextureSize,x=r.maxSamples,v=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,S=/OculusBrowser/g.test(navigator.userAgent),T=new WeakMap;let g;const m=new WeakMap;let w=!1;try{w=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function R(I,C){return w?new OffscreenCanvas(I,C):ds("canvas")}function U(I,C,te,ge){let Me=1;if((I.width>ge||I.height>ge)&&(Me=ge/Math.max(I.width,I.height)),Me<1||C===!0)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap){const De=C?Sa:Math.floor,We=De(Me*I.width),z=De(Me*I.height);g===void 0&&(g=R(We,z));const j=te?R(We,z):g;return j.width=We,j.height=z,j.getContext("2d").drawImage(I,0,0,We,z),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+I.width+"x"+I.height+") to ("+We+"x"+z+")."),j}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+I.width+"x"+I.height+")."),I;return I}function P(I){return Co(I.width)&&Co(I.height)}function L(I){return l?!1:I.wrapS!==Dn||I.wrapT!==Dn||I.minFilter!==rn&&I.minFilter!==xn}function c(I,C){return I.generateMipmaps&&C&&I.minFilter!==rn&&I.minFilter!==xn}function Y(I){o.generateMipmap(I)}function A(I,C,te,ge,Me=!1){if(l===!1)return C;if(I!==null){if(o[I]!==void 0)return o[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let De=C;return C===6403&&(te===5126&&(De=33326),te===5131&&(De=33325),te===5121&&(De=33321)),C===33319&&(te===5126&&(De=33328),te===5131&&(De=33327),te===5121&&(De=33323)),C===6408&&(te===5126&&(De=34836),te===5131&&(De=34842),te===5121&&(De=ge===Pt&&Me===!1?35907:32856),te===32819&&(De=32854),te===32820&&(De=32855)),(De===33325||De===33326||De===33327||De===33328||De===34842||De===34836)&&e.get("EXT_color_buffer_float"),De}function B(I,C,te){return c(I,te)===!0||I.isFramebufferTexture&&I.minFilter!==rn&&I.minFilter!==xn?Math.log2(Math.max(C.width,C.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?C.mipmaps.length:1}function J(I){return I===rn||I===to||I===no?9728:9729}function pe(I){const C=I.target;C.removeEventListener("dispose",pe),ne(C),C.isVideoTexture&&T.delete(C)}function be(I){const C=I.target;C.removeEventListener("dispose",be),fe(C)}function ne(I){const C=n.get(I);if(C.__webglInit===void 0)return;const te=I.source,ge=m.get(te);if(ge){const Me=ge[C.__cacheKey];Me.usedTimes--,Me.usedTimes===0&&$(I),Object.keys(ge).length===0&&m.delete(te)}n.remove(I)}function $(I){const C=n.get(I);o.deleteTexture(C.__webglTexture);const te=I.source,ge=m.get(te);delete ge[C.__cacheKey],f.memory.textures--}function fe(I){const C=I.texture,te=n.get(I),ge=n.get(C);if(ge.__webglTexture!==void 0&&(o.deleteTexture(ge.__webglTexture),f.memory.textures--),I.depthTexture&&I.depthTexture.dispose(),I.isWebGLCubeRenderTarget)for(let Me=0;Me<6;Me++)o.deleteFramebuffer(te.__webglFramebuffer[Me]),te.__webglDepthbuffer&&o.deleteRenderbuffer(te.__webglDepthbuffer[Me]);else{if(o.deleteFramebuffer(te.__webglFramebuffer),te.__webglDepthbuffer&&o.deleteRenderbuffer(te.__webglDepthbuffer),te.__webglMultisampledFramebuffer&&o.deleteFramebuffer(te.__webglMultisampledFramebuffer),te.__webglColorRenderbuffer)for(let Me=0;Me<te.__webglColorRenderbuffer.length;Me++)te.__webglColorRenderbuffer[Me]&&o.deleteRenderbuffer(te.__webglColorRenderbuffer[Me]);te.__webglDepthRenderbuffer&&o.deleteRenderbuffer(te.__webglDepthRenderbuffer)}if(I.isWebGLMultipleRenderTargets)for(let Me=0,De=C.length;Me<De;Me++){const We=n.get(C[Me]);We.__webglTexture&&(o.deleteTexture(We.__webglTexture),f.memory.textures--),n.remove(C[Me])}n.remove(C),n.remove(I)}let xe=0;function ve(){xe=0}function oe(){const I=xe;return I>=p&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+p),xe+=1,I}function Z(I){const C=[];return C.push(I.wrapS),C.push(I.wrapT),C.push(I.magFilter),C.push(I.minFilter),C.push(I.anisotropy),C.push(I.internalFormat),C.push(I.format),C.push(I.type),C.push(I.generateMipmaps),C.push(I.premultiplyAlpha),C.push(I.flipY),C.push(I.unpackAlignment),C.push(I.encoding),C.join()}function ee(I,C){const te=n.get(I);if(I.isVideoTexture&&Kt(I),I.isRenderTargetTexture===!1&&I.version>0&&te.__version!==I.version){const ge=I.image;if(ge===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ge.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{qe(te,I,C);return}}t.bindTexture(3553,te.__webglTexture,33984+C)}function _e(I,C){const te=n.get(I);if(I.version>0&&te.__version!==I.version){qe(te,I,C);return}t.bindTexture(35866,te.__webglTexture,33984+C)}function ye(I,C){const te=n.get(I);if(I.version>0&&te.__version!==I.version){qe(te,I,C);return}t.bindTexture(32879,te.__webglTexture,33984+C)}function me(I,C){const te=n.get(I);if(I.version>0&&te.__version!==I.version){Ge(te,I,C);return}t.bindTexture(34067,te.__webglTexture,33984+C)}const Ne={[ya]:10497,[Dn]:33071,[Ma]:33648},$e={[rn]:9728,[to]:9984,[no]:9986,[xn]:9729,[iu]:9985,[ms]:9987};function ce(I,C,te){if(te?(o.texParameteri(I,10242,Ne[C.wrapS]),o.texParameteri(I,10243,Ne[C.wrapT]),(I===32879||I===35866)&&o.texParameteri(I,32882,Ne[C.wrapR]),o.texParameteri(I,10240,$e[C.magFilter]),o.texParameteri(I,10241,$e[C.minFilter])):(o.texParameteri(I,10242,33071),o.texParameteri(I,10243,33071),(I===32879||I===35866)&&o.texParameteri(I,32882,33071),(C.wrapS!==Dn||C.wrapT!==Dn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(I,10240,J(C.magFilter)),o.texParameteri(I,10241,J(C.minFilter)),C.minFilter!==rn&&C.minFilter!==xn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ge=e.get("EXT_texture_filter_anisotropic");if(C.type===Ai&&e.has("OES_texture_float_linear")===!1||l===!1&&C.type===Er&&e.has("OES_texture_half_float_linear")===!1)return;(C.anisotropy>1||n.get(C).__currentAnisotropy)&&(o.texParameterf(I,ge.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,r.getMaxAnisotropy())),n.get(C).__currentAnisotropy=C.anisotropy)}}function ct(I,C){let te=!1;I.__webglInit===void 0&&(I.__webglInit=!0,C.addEventListener("dispose",pe));const ge=C.source;let Me=m.get(ge);Me===void 0&&(Me={},m.set(ge,Me));const De=Z(C);if(De!==I.__cacheKey){Me[De]===void 0&&(Me[De]={texture:o.createTexture(),usedTimes:0},f.memory.textures++,te=!0),Me[De].usedTimes++;const We=Me[I.__cacheKey];We!==void 0&&(Me[I.__cacheKey].usedTimes--,We.usedTimes===0&&$(C)),I.__cacheKey=De,I.__webglTexture=Me[De].texture}return te}function qe(I,C,te){let ge=3553;C.isDataArrayTexture&&(ge=35866),C.isData3DTexture&&(ge=32879);const Me=ct(I,C),De=C.source;t.bindTexture(ge,I.__webglTexture,33984+te);const We=n.get(De);if(De.version!==We.__version||Me===!0){t.activeTexture(33984+te),o.pixelStorei(37440,C.flipY),o.pixelStorei(37441,C.premultiplyAlpha),o.pixelStorei(3317,C.unpackAlignment),o.pixelStorei(37443,0);const z=L(C)&&P(C.image)===!1;let j=U(C.image,z,!1,_);j=Yt(C,j);const Re=P(j)||l,Ie=a.convert(C.format,C.encoding);let Le=a.convert(C.type),Be=A(C.internalFormat,Ie,Le,C.encoding,C.isVideoTexture);ce(ge,C,Re);let Ze;const et=C.mipmaps,k=l&&C.isVideoTexture!==!0,Ae=We.__version===void 0||Me===!0,Se=B(C,j,Re);if(C.isDepthTexture)Be=6402,l?C.type===Ai?Be=36012:C.type===Ei?Be=33190:C.type===ir?Be=35056:Be=33189:C.type===Ai&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),C.format===Li&&Be===6402&&C.type!==Ml&&C.type!==Ei&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),C.type=Ei,Le=a.convert(C.type)),C.format===lr&&Be===6402&&(Be=34041,C.type!==ir&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),C.type=ir,Le=a.convert(C.type))),Ae&&(k?t.texStorage2D(3553,1,Be,j.width,j.height):t.texImage2D(3553,0,Be,j.width,j.height,0,Ie,Le,null));else if(C.isDataTexture)if(et.length>0&&Re){k&&Ae&&t.texStorage2D(3553,Se,Be,et[0].width,et[0].height);for(let ue=0,Te=et.length;ue<Te;ue++)Ze=et[ue],k?t.texSubImage2D(3553,ue,0,0,Ze.width,Ze.height,Ie,Le,Ze.data):t.texImage2D(3553,ue,Be,Ze.width,Ze.height,0,Ie,Le,Ze.data);C.generateMipmaps=!1}else k?(Ae&&t.texStorage2D(3553,Se,Be,j.width,j.height),t.texSubImage2D(3553,0,0,0,j.width,j.height,Ie,Le,j.data)):t.texImage2D(3553,0,Be,j.width,j.height,0,Ie,Le,j.data);else if(C.isCompressedTexture){k&&Ae&&t.texStorage2D(3553,Se,Be,et[0].width,et[0].height);for(let ue=0,Te=et.length;ue<Te;ue++)Ze=et[ue],C.format!==Nn?Ie!==null?k?t.compressedTexSubImage2D(3553,ue,0,0,Ze.width,Ze.height,Ie,Ze.data):t.compressedTexImage2D(3553,ue,Be,Ze.width,Ze.height,0,Ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?t.texSubImage2D(3553,ue,0,0,Ze.width,Ze.height,Ie,Le,Ze.data):t.texImage2D(3553,ue,Be,Ze.width,Ze.height,0,Ie,Le,Ze.data)}else if(C.isDataArrayTexture)k?(Ae&&t.texStorage3D(35866,Se,Be,j.width,j.height,j.depth),t.texSubImage3D(35866,0,0,0,0,j.width,j.height,j.depth,Ie,Le,j.data)):t.texImage3D(35866,0,Be,j.width,j.height,j.depth,0,Ie,Le,j.data);else if(C.isData3DTexture)k?(Ae&&t.texStorage3D(32879,Se,Be,j.width,j.height,j.depth),t.texSubImage3D(32879,0,0,0,0,j.width,j.height,j.depth,Ie,Le,j.data)):t.texImage3D(32879,0,Be,j.width,j.height,j.depth,0,Ie,Le,j.data);else if(C.isFramebufferTexture){if(Ae)if(k)t.texStorage2D(3553,Se,Be,j.width,j.height);else{let ue=j.width,Te=j.height;for(let He=0;He<Se;He++)t.texImage2D(3553,He,Be,ue,Te,0,Ie,Le,null),ue>>=1,Te>>=1}}else if(et.length>0&&Re){k&&Ae&&t.texStorage2D(3553,Se,Be,et[0].width,et[0].height);for(let ue=0,Te=et.length;ue<Te;ue++)Ze=et[ue],k?t.texSubImage2D(3553,ue,0,0,Ie,Le,Ze):t.texImage2D(3553,ue,Be,Ie,Le,Ze);C.generateMipmaps=!1}else k?(Ae&&t.texStorage2D(3553,Se,Be,j.width,j.height),t.texSubImage2D(3553,0,0,0,Ie,Le,j)):t.texImage2D(3553,0,Be,Ie,Le,j);c(C,Re)&&Y(ge),We.__version=De.version,C.onUpdate&&C.onUpdate(C)}I.__version=C.version}function Ge(I,C,te){if(C.image.length!==6)return;const ge=ct(I,C),Me=C.source;t.bindTexture(34067,I.__webglTexture,33984+te);const De=n.get(Me);if(Me.version!==De.__version||ge===!0){t.activeTexture(33984+te),o.pixelStorei(37440,C.flipY),o.pixelStorei(37441,C.premultiplyAlpha),o.pixelStorei(3317,C.unpackAlignment),o.pixelStorei(37443,0);const We=C.isCompressedTexture||C.image[0].isCompressedTexture,z=C.image[0]&&C.image[0].isDataTexture,j=[];for(let ue=0;ue<6;ue++)!We&&!z?j[ue]=U(C.image[ue],!1,!0,d):j[ue]=z?C.image[ue].image:C.image[ue],j[ue]=Yt(C,j[ue]);const Re=j[0],Ie=P(Re)||l,Le=a.convert(C.format,C.encoding),Be=a.convert(C.type),Ze=A(C.internalFormat,Le,Be,C.encoding),et=l&&C.isVideoTexture!==!0,k=De.__version===void 0||ge===!0;let Ae=B(C,Re,Ie);ce(34067,C,Ie);let Se;if(We){et&&k&&t.texStorage2D(34067,Ae,Ze,Re.width,Re.height);for(let ue=0;ue<6;ue++){Se=j[ue].mipmaps;for(let Te=0;Te<Se.length;Te++){const He=Se[Te];C.format!==Nn?Le!==null?et?t.compressedTexSubImage2D(34069+ue,Te,0,0,He.width,He.height,Le,He.data):t.compressedTexImage2D(34069+ue,Te,Ze,He.width,He.height,0,He.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):et?t.texSubImage2D(34069+ue,Te,0,0,He.width,He.height,Le,Be,He.data):t.texImage2D(34069+ue,Te,Ze,He.width,He.height,0,Le,Be,He.data)}}}else{Se=C.mipmaps,et&&k&&(Se.length>0&&Ae++,t.texStorage2D(34067,Ae,Ze,j[0].width,j[0].height));for(let ue=0;ue<6;ue++)if(z){et?t.texSubImage2D(34069+ue,0,0,0,j[ue].width,j[ue].height,Le,Be,j[ue].data):t.texImage2D(34069+ue,0,Ze,j[ue].width,j[ue].height,0,Le,Be,j[ue].data);for(let Te=0;Te<Se.length;Te++){const ft=Se[Te].image[ue].image;et?t.texSubImage2D(34069+ue,Te+1,0,0,ft.width,ft.height,Le,Be,ft.data):t.texImage2D(34069+ue,Te+1,Ze,ft.width,ft.height,0,Le,Be,ft.data)}}else{et?t.texSubImage2D(34069+ue,0,0,0,Le,Be,j[ue]):t.texImage2D(34069+ue,0,Ze,Le,Be,j[ue]);for(let Te=0;Te<Se.length;Te++){const He=Se[Te];et?t.texSubImage2D(34069+ue,Te+1,0,0,Le,Be,He.image[ue]):t.texImage2D(34069+ue,Te+1,Ze,Le,Be,He.image[ue])}}}c(C,Ie)&&Y(34067),De.__version=Me.version,C.onUpdate&&C.onUpdate(C)}I.__version=C.version}function Fe(I,C,te,ge,Me){const De=a.convert(te.format,te.encoding),We=a.convert(te.type),z=A(te.internalFormat,De,We,te.encoding);n.get(C).__hasExternalTextures||(Me===32879||Me===35866?t.texImage3D(Me,0,z,C.width,C.height,C.depth,0,De,We,null):t.texImage2D(Me,0,z,C.width,C.height,0,De,We,null)),t.bindFramebuffer(36160,I),pt(C)?v.framebufferTexture2DMultisampleEXT(36160,ge,Me,n.get(te).__webglTexture,0,Rt(C)):o.framebufferTexture2D(36160,ge,Me,n.get(te).__webglTexture,0),t.bindFramebuffer(36160,null)}function dt(I,C,te){if(o.bindRenderbuffer(36161,I),C.depthBuffer&&!C.stencilBuffer){let ge=33189;if(te||pt(C)){const Me=C.depthTexture;Me&&Me.isDepthTexture&&(Me.type===Ai?ge=36012:Me.type===Ei&&(ge=33190));const De=Rt(C);pt(C)?v.renderbufferStorageMultisampleEXT(36161,De,ge,C.width,C.height):o.renderbufferStorageMultisample(36161,De,ge,C.width,C.height)}else o.renderbufferStorage(36161,ge,C.width,C.height);o.framebufferRenderbuffer(36160,36096,36161,I)}else if(C.depthBuffer&&C.stencilBuffer){const ge=Rt(C);te&&pt(C)===!1?o.renderbufferStorageMultisample(36161,ge,35056,C.width,C.height):pt(C)?v.renderbufferStorageMultisampleEXT(36161,ge,35056,C.width,C.height):o.renderbufferStorage(36161,34041,C.width,C.height),o.framebufferRenderbuffer(36160,33306,36161,I)}else{const ge=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let Me=0;Me<ge.length;Me++){const De=ge[Me],We=a.convert(De.format,De.encoding),z=a.convert(De.type),j=A(De.internalFormat,We,z,De.encoding),Re=Rt(C);te&&pt(C)===!1?o.renderbufferStorageMultisample(36161,Re,j,C.width,C.height):pt(C)?v.renderbufferStorageMultisampleEXT(36161,Re,j,C.width,C.height):o.renderbufferStorage(36161,j,C.width,C.height)}}o.bindRenderbuffer(36161,null)}function nt(I,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,I),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(C.depthTexture).__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),ee(C.depthTexture,0);const ge=n.get(C.depthTexture).__webglTexture,Me=Rt(C);if(C.depthTexture.format===Li)pt(C)?v.framebufferTexture2DMultisampleEXT(36160,36096,3553,ge,0,Me):o.framebufferTexture2D(36160,36096,3553,ge,0);else if(C.depthTexture.format===lr)pt(C)?v.framebufferTexture2DMultisampleEXT(36160,33306,3553,ge,0,Me):o.framebufferTexture2D(36160,33306,3553,ge,0);else throw new Error("Unknown depthTexture format")}function Oe(I){const C=n.get(I),te=I.isWebGLCubeRenderTarget===!0;if(I.depthTexture&&!C.__autoAllocateDepthBuffer){if(te)throw new Error("target.depthTexture not supported in Cube render targets");nt(C.__webglFramebuffer,I)}else if(te){C.__webglDepthbuffer=[];for(let ge=0;ge<6;ge++)t.bindFramebuffer(36160,C.__webglFramebuffer[ge]),C.__webglDepthbuffer[ge]=o.createRenderbuffer(),dt(C.__webglDepthbuffer[ge],I,!1)}else t.bindFramebuffer(36160,C.__webglFramebuffer),C.__webglDepthbuffer=o.createRenderbuffer(),dt(C.__webglDepthbuffer,I,!1);t.bindFramebuffer(36160,null)}function Mt(I,C,te){const ge=n.get(I);C!==void 0&&Fe(ge.__webglFramebuffer,I,I.texture,36064,3553),te!==void 0&&Oe(I)}function Et(I){const C=I.texture,te=n.get(I),ge=n.get(C);I.addEventListener("dispose",be),I.isWebGLMultipleRenderTargets!==!0&&(ge.__webglTexture===void 0&&(ge.__webglTexture=o.createTexture()),ge.__version=C.version,f.memory.textures++);const Me=I.isWebGLCubeRenderTarget===!0,De=I.isWebGLMultipleRenderTargets===!0,We=P(I)||l;if(Me){te.__webglFramebuffer=[];for(let z=0;z<6;z++)te.__webglFramebuffer[z]=o.createFramebuffer()}else{if(te.__webglFramebuffer=o.createFramebuffer(),De)if(r.drawBuffers){const z=I.texture;for(let j=0,Re=z.length;j<Re;j++){const Ie=n.get(z[j]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=o.createTexture(),f.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(l&&I.samples>0&&pt(I)===!1){const z=De?C:[C];te.__webglMultisampledFramebuffer=o.createFramebuffer(),te.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,te.__webglMultisampledFramebuffer);for(let j=0;j<z.length;j++){const Re=z[j];te.__webglColorRenderbuffer[j]=o.createRenderbuffer(),o.bindRenderbuffer(36161,te.__webglColorRenderbuffer[j]);const Ie=a.convert(Re.format,Re.encoding),Le=a.convert(Re.type),Be=A(Re.internalFormat,Ie,Le,Re.encoding,I.isXRRenderTarget===!0),Ze=Rt(I);o.renderbufferStorageMultisample(36161,Ze,Be,I.width,I.height),o.framebufferRenderbuffer(36160,36064+j,36161,te.__webglColorRenderbuffer[j])}o.bindRenderbuffer(36161,null),I.depthBuffer&&(te.__webglDepthRenderbuffer=o.createRenderbuffer(),dt(te.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(36160,null)}}if(Me){t.bindTexture(34067,ge.__webglTexture),ce(34067,C,We);for(let z=0;z<6;z++)Fe(te.__webglFramebuffer[z],I,C,36064,34069+z);c(C,We)&&Y(34067),t.unbindTexture()}else if(De){const z=I.texture;for(let j=0,Re=z.length;j<Re;j++){const Ie=z[j],Le=n.get(Ie);t.bindTexture(3553,Le.__webglTexture),ce(3553,Ie,We),Fe(te.__webglFramebuffer,I,Ie,36064+j,3553),c(Ie,We)&&Y(3553)}t.unbindTexture()}else{let z=3553;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(l?z=I.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(z,ge.__webglTexture),ce(z,C,We),Fe(te.__webglFramebuffer,I,C,36064,z),c(C,We)&&Y(z),t.unbindTexture()}I.depthBuffer&&Oe(I)}function Pe(I){const C=P(I)||l,te=I.isWebGLMultipleRenderTargets===!0?I.texture:[I.texture];for(let ge=0,Me=te.length;ge<Me;ge++){const De=te[ge];if(c(De,C)){const We=I.isWebGLCubeRenderTarget?34067:3553,z=n.get(De).__webglTexture;t.bindTexture(We,z),Y(We),t.unbindTexture()}}}function _t(I){if(l&&I.samples>0&&pt(I)===!1){const C=I.isWebGLMultipleRenderTargets?I.texture:[I.texture],te=I.width,ge=I.height;let Me=16384;const De=[],We=I.stencilBuffer?33306:36096,z=n.get(I),j=I.isWebGLMultipleRenderTargets===!0;if(j)for(let Re=0;Re<C.length;Re++)t.bindFramebuffer(36160,z.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+Re,36161,null),t.bindFramebuffer(36160,z.__webglFramebuffer),o.framebufferTexture2D(36009,36064+Re,3553,null,0);t.bindFramebuffer(36008,z.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,z.__webglFramebuffer);for(let Re=0;Re<C.length;Re++){De.push(36064+Re),I.depthBuffer&&De.push(We);const Ie=z.__ignoreDepthValues!==void 0?z.__ignoreDepthValues:!1;if(Ie===!1&&(I.depthBuffer&&(Me|=256),I.stencilBuffer&&(Me|=1024)),j&&o.framebufferRenderbuffer(36008,36064,36161,z.__webglColorRenderbuffer[Re]),Ie===!0&&(o.invalidateFramebuffer(36008,[We]),o.invalidateFramebuffer(36009,[We])),j){const Le=n.get(C[Re]).__webglTexture;o.framebufferTexture2D(36009,36064,3553,Le,0)}o.blitFramebuffer(0,0,te,ge,0,0,te,ge,Me,9728),S&&o.invalidateFramebuffer(36008,De)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),j)for(let Re=0;Re<C.length;Re++){t.bindFramebuffer(36160,z.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+Re,36161,z.__webglColorRenderbuffer[Re]);const Ie=n.get(C[Re]).__webglTexture;t.bindFramebuffer(36160,z.__webglFramebuffer),o.framebufferTexture2D(36009,36064+Re,3553,Ie,0)}t.bindFramebuffer(36009,z.__webglMultisampledFramebuffer)}}function Rt(I){return Math.min(x,I.samples)}function pt(I){const C=n.get(I);return l&&I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function Kt(I){const C=f.render.frame;T.get(I)!==C&&(T.set(I,C),I.update())}function Yt(I,C){const te=I.encoding,ge=I.format,Me=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||I.format===ba||te!==Ri&&(te===Pt?l===!1?e.has("EXT_sRGB")===!0&&ge===Nn?(I.format=ba,I.minFilter=xn,I.generateMipmaps=!1):C=wl.sRGBToLinear(C):(ge!==Nn||Me!==Pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",te)),C}this.allocateTextureUnit=oe,this.resetTextureUnits=ve,this.setTexture2D=ee,this.setTexture2DArray=_e,this.setTexture3D=ye,this.setTextureCube=me,this.rebindTextures=Mt,this.setupRenderTarget=Et,this.updateRenderTargetMipmap=Pe,this.updateMultisampleRenderTarget=_t,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=Fe,this.useMultisampledRTT=pt}function mm(o,e,t){const n=t.isWebGL2;function r(a,f=null){let l;if(a===Pi)return 5121;if(a===ou)return 32819;if(a===lu)return 32820;if(a===ru)return 5120;if(a===su)return 5122;if(a===Ml)return 5123;if(a===au)return 5124;if(a===Ei)return 5125;if(a===Ai)return 5126;if(a===Er)return n?5131:(l=e.get("OES_texture_half_float"),l!==null?l.HALF_FLOAT_OES:null);if(a===cu)return 6406;if(a===Nn)return 6408;if(a===fu)return 6409;if(a===hu)return 6410;if(a===Li)return 6402;if(a===lr)return 34041;if(a===du)return 6403;if(a===uu)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(a===ba)return l=e.get("EXT_sRGB"),l!==null?l.SRGB_ALPHA_EXT:null;if(a===pu)return 36244;if(a===mu)return 33319;if(a===gu)return 33320;if(a===_u)return 36249;if(a===Us||a===zs||a===Bs||a===ks)if(f===Pt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(a===Us)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===zs)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Bs)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===ks)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(a===Us)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===zs)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Bs)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===ks)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===io||a===ro||a===so||a===ao)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(a===io)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===ro)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===so)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===ao)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===xu)return l=e.get("WEBGL_compressed_texture_etc1"),l!==null?l.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===oo||a===lo)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(a===oo)return f===Pt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(a===lo)return f===Pt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===co||a===uo||a===fo||a===ho||a===po||a===mo||a===go||a===_o||a===xo||a===vo||a===yo||a===Mo||a===bo||a===So)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(a===co)return f===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===uo)return f===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===fo)return f===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===ho)return f===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===po)return f===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===mo)return f===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===go)return f===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===_o)return f===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===xo)return f===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===vo)return f===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===yo)return f===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Mo)return f===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===bo)return f===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===So)return f===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===wo)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(a===wo)return f===Pt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return a===ir?n?34042:(l=e.get("WEBGL_depth_texture"),l!==null?l.UNSIGNED_INT_24_8_WEBGL:null):o[a]!==void 0?o[a]:null}return{convert:r}}class gm extends vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ls extends an{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _m={type:"move"};class pa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ls,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ls,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ls,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,a=null,f=null;const l=this._targetRay,p=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){f=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n);if(d.joints[g.jointName]===void 0){const R=new ls;R.matrixAutoUpdate=!1,R.visible=!1,d.joints[g.jointName]=R,d.add(R)}const w=d.joints[g.jointName];m!==null&&(w.matrix.fromArray(m.transform.matrix),w.matrix.decompose(w.position,w.rotation,w.scale),w.jointRadius=m.radius),w.visible=m!==null}const _=d.joints["index-finger-tip"],x=d.joints["thumb-tip"],v=_.position.distanceTo(x.position),S=.02,T=.005;d.inputState.pinching&&v>S+T?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&v<=S-T&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(p.matrix.fromArray(a.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),a.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(a.linearVelocity)):p.hasLinearVelocity=!1,a.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(a.angularVelocity)):p.hasAngularVelocity=!1));l!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&a!==null&&(r=a),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(_m)))}return l!==null&&(l.visible=r!==null),p!==null&&(p.visible=a!==null),d!==null&&(d.visible=f!==null),this}}class xm extends bn{constructor(e,t,n,r,a,f,l,p,d,_){if(_=_!==void 0?_:Li,_!==Li&&_!==lr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&_===Li&&(n=Ei),n===void 0&&_===lr&&(n=ir),super(null,r,a,f,l,p,_,n,d),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=l!==void 0?l:rn,this.minFilter=p!==void 0?p:rn,this.flipY=!1,this.generateMipmaps=!1}}class vm extends Oi{constructor(e,t){super();const n=this;let r=null,a=1,f=null,l="local-floor",p=null,d=null,_=null,x=null,v=null,S=null;const T=t.getContextAttributes();let g=null,m=null;const w=[],R=[],U=new vn;U.layers.enable(1),U.viewport=new Vt;const P=new vn;P.layers.enable(2),P.viewport=new Vt;const L=[U,P],c=new gm;c.layers.enable(1),c.layers.enable(2);let Y=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ee=w[Z];return ee===void 0&&(ee=new pa,w[Z]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(Z){let ee=w[Z];return ee===void 0&&(ee=new pa,w[Z]=ee),ee.getGripSpace()},this.getHand=function(Z){let ee=w[Z];return ee===void 0&&(ee=new pa,w[Z]=ee),ee.getHandSpace()};function B(Z){const ee=R.indexOf(Z.inputSource);if(ee===-1)return;const _e=w[ee];_e!==void 0&&_e.dispatchEvent({type:Z.type,data:Z.inputSource})}function J(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",J),r.removeEventListener("inputsourceschange",pe);for(let Z=0;Z<w.length;Z++){const ee=R[Z];ee!==null&&(R[Z]=null,w[Z].disconnect(ee))}Y=null,A=null,e.setRenderTarget(g),v=null,x=null,_=null,r=null,m=null,oe.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){a=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){l=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(Z){p=Z},this.getBaseLayer=function(){return x!==null?x:v},this.getBinding=function(){return _},this.getFrame=function(){return S},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(g=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",J),r.addEventListener("inputsourceschange",pe),T.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ee={antialias:r.renderState.layers===void 0?T.antialias:!0,alpha:T.alpha,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:a};v=new XRWebGLLayer(r,t,ee),r.updateRenderState({baseLayer:v}),m=new Ii(v.framebufferWidth,v.framebufferHeight,{format:Nn,type:Pi,encoding:e.outputEncoding,stencilBuffer:T.stencil})}else{let ee=null,_e=null,ye=null;T.depth&&(ye=T.stencil?35056:33190,ee=T.stencil?lr:Li,_e=T.stencil?ir:Ei);const me={colorFormat:32856,depthFormat:ye,scaleFactor:a};_=new XRWebGLBinding(r,t),x=_.createProjectionLayer(me),r.updateRenderState({layers:[x]}),m=new Ii(x.textureWidth,x.textureHeight,{format:Nn,type:Pi,depthTexture:new xm(x.textureWidth,x.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:T.stencil,encoding:e.outputEncoding,samples:T.antialias?4:0});const Ne=e.properties.get(m);Ne.__ignoreDepthValues=x.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(1),p=null,f=await r.requestReferenceSpace(l),oe.setContext(r),oe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function pe(Z){for(let ee=0;ee<Z.removed.length;ee++){const _e=Z.removed[ee],ye=R.indexOf(_e);ye>=0&&(R[ye]=null,w[ye].dispatchEvent({type:"disconnected",data:_e}))}for(let ee=0;ee<Z.added.length;ee++){const _e=Z.added[ee];let ye=R.indexOf(_e);if(ye===-1){for(let Ne=0;Ne<w.length;Ne++)if(Ne>=R.length){R.push(_e),ye=Ne;break}else if(R[Ne]===null){R[Ne]=_e,ye=Ne;break}if(ye===-1)break}const me=w[ye];me&&me.dispatchEvent({type:"connected",data:_e})}}const be=new W,ne=new W;function $(Z,ee,_e){be.setFromMatrixPosition(ee.matrixWorld),ne.setFromMatrixPosition(_e.matrixWorld);const ye=be.distanceTo(ne),me=ee.projectionMatrix.elements,Ne=_e.projectionMatrix.elements,$e=me[14]/(me[10]-1),ce=me[14]/(me[10]+1),ct=(me[9]+1)/me[5],qe=(me[9]-1)/me[5],Ge=(me[8]-1)/me[0],Fe=(Ne[8]+1)/Ne[0],dt=$e*Ge,nt=$e*Fe,Oe=ye/(-Ge+Fe),Mt=Oe*-Ge;ee.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Mt),Z.translateZ(Oe),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert();const Et=$e+Oe,Pe=ce+Oe,_t=dt-Mt,Rt=nt+(ye-Mt),pt=ct*ce/Pe*Et,Kt=qe*ce/Pe*Et;Z.projectionMatrix.makePerspective(_t,Rt,pt,Kt,Et,Pe)}function fe(Z,ee){ee===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ee.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;c.near=P.near=U.near=Z.near,c.far=P.far=U.far=Z.far,(Y!==c.near||A!==c.far)&&(r.updateRenderState({depthNear:c.near,depthFar:c.far}),Y=c.near,A=c.far);const ee=Z.parent,_e=c.cameras;fe(c,ee);for(let me=0;me<_e.length;me++)fe(_e[me],ee);c.matrixWorld.decompose(c.position,c.quaternion,c.scale),Z.matrix.copy(c.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale);const ye=Z.children;for(let me=0,Ne=ye.length;me<Ne;me++)ye[me].updateMatrixWorld(!0);_e.length===2?$(c,U,P):c.projectionMatrix.copy(U.projectionMatrix)},this.getCamera=function(){return c},this.getFoveation=function(){if(x!==null)return x.fixedFoveation;if(v!==null)return v.fixedFoveation},this.setFoveation=function(Z){x!==null&&(x.fixedFoveation=Z),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=Z)};let xe=null;function ve(Z,ee){if(d=ee.getViewerPose(p||f),S=ee,d!==null){const _e=d.views;v!==null&&(e.setRenderTargetFramebuffer(m,v.framebuffer),e.setRenderTarget(m));let ye=!1;_e.length!==c.cameras.length&&(c.cameras.length=0,ye=!0);for(let me=0;me<_e.length;me++){const Ne=_e[me];let $e=null;if(v!==null)$e=v.getViewport(Ne);else{const ct=_.getViewSubImage(x,Ne);$e=ct.viewport,me===0&&(e.setRenderTargetTextures(m,ct.colorTexture,x.ignoreDepthValues?void 0:ct.depthStencilTexture),e.setRenderTarget(m))}let ce=L[me];ce===void 0&&(ce=new vn,ce.layers.enable(me),ce.viewport=new Vt,L[me]=ce),ce.matrix.fromArray(Ne.transform.matrix),ce.projectionMatrix.fromArray(Ne.projectionMatrix),ce.viewport.set($e.x,$e.y,$e.width,$e.height),me===0&&c.matrix.copy(ce.matrix),ye===!0&&c.cameras.push(ce)}}for(let _e=0;_e<w.length;_e++){const ye=R[_e],me=w[_e];ye!==null&&me!==void 0&&me.update(ye,ee,p||f)}xe&&xe(Z,ee),S=null}const oe=new Fl;oe.setAnimationLoop(ve),this.setAnimationLoop=function(Z){xe=Z},this.dispose=function(){}}}function ym(o,e){function t(g,m){g.fogColor.value.copy(m.color),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function n(g,m,w,R,U){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),_(g,m)):m.isMeshPhongMaterial?(r(g,m),d(g,m)):m.isMeshStandardMaterial?(r(g,m),x(g,m),m.isMeshPhysicalMaterial&&v(g,m,U)):m.isMeshMatcapMaterial?(r(g,m),S(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),T(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&f(g,m)):m.isPointsMaterial?l(g,m,w,R):m.isSpriteMaterial?p(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map),m.alphaMap&&(g.alphaMap.value=m.alphaMap),m.bumpMap&&(g.bumpMap.value=m.bumpMap,g.bumpScale.value=m.bumpScale,m.side===Mn&&(g.bumpScale.value*=-1)),m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap),m.normalMap&&(g.normalMap.value=m.normalMap,g.normalScale.value.copy(m.normalScale),m.side===Mn&&g.normalScale.value.negate()),m.specularMap&&(g.specularMap.value=m.specularMap),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const w=e.get(m).envMap;if(w&&(g.envMap.value=w,g.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap){g.lightMap.value=m.lightMap;const P=o.physicallyCorrectLights!==!0?Math.PI:1;g.lightMapIntensity.value=m.lightMapIntensity*P}m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity);let R;m.map?R=m.map:m.specularMap?R=m.specularMap:m.displacementMap?R=m.displacementMap:m.normalMap?R=m.normalMap:m.bumpMap?R=m.bumpMap:m.roughnessMap?R=m.roughnessMap:m.metalnessMap?R=m.metalnessMap:m.alphaMap?R=m.alphaMap:m.emissiveMap?R=m.emissiveMap:m.clearcoatMap?R=m.clearcoatMap:m.clearcoatNormalMap?R=m.clearcoatNormalMap:m.clearcoatRoughnessMap?R=m.clearcoatRoughnessMap:m.iridescenceMap?R=m.iridescenceMap:m.iridescenceThicknessMap?R=m.iridescenceThicknessMap:m.specularIntensityMap?R=m.specularIntensityMap:m.specularColorMap?R=m.specularColorMap:m.transmissionMap?R=m.transmissionMap:m.thicknessMap?R=m.thicknessMap:m.sheenColorMap?R=m.sheenColorMap:m.sheenRoughnessMap&&(R=m.sheenRoughnessMap),R!==void 0&&(R.isWebGLRenderTarget&&(R=R.texture),R.matrixAutoUpdate===!0&&R.updateMatrix(),g.uvTransform.value.copy(R.matrix));let U;m.aoMap?U=m.aoMap:m.lightMap&&(U=m.lightMap),U!==void 0&&(U.isWebGLRenderTarget&&(U=U.texture),U.matrixAutoUpdate===!0&&U.updateMatrix(),g.uv2Transform.value.copy(U.matrix))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity}function f(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,w,R){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*w,g.scale.value=R*.5,m.map&&(g.map.value=m.map),m.alphaMap&&(g.alphaMap.value=m.alphaMap),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let U;m.map?U=m.map:m.alphaMap&&(U=m.alphaMap),U!==void 0&&(U.matrixAutoUpdate===!0&&U.updateMatrix(),g.uvTransform.value.copy(U.matrix))}function p(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map),m.alphaMap&&(g.alphaMap.value=m.alphaMap),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let w;m.map?w=m.map:m.alphaMap&&(w=m.alphaMap),w!==void 0&&(w.matrixAutoUpdate===!0&&w.updateMatrix(),g.uvTransform.value.copy(w.matrix))}function d(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function _(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function x(g,m){g.roughness.value=m.roughness,g.metalness.value=m.metalness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap),e.get(m).envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function v(g,m,w){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap)),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),g.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===Mn&&g.clearcoatNormalScale.value.negate())),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap)),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=w.texture,g.transmissionSamplerSize.value.set(w.width,w.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap)}function S(g,m){m.matcap&&(g.matcap.value=m.matcap)}function T(g,m){g.referencePosition.value.copy(m.referencePosition),g.nearDistance.value=m.nearDistance,g.farDistance.value=m.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function Mm(o,e,t,n){let r={},a={},f=[];const l=t.isWebGL2?o.getParameter(35375):0;function p(R,U){const P=U.program;n.uniformBlockBinding(R,P)}function d(R,U){let P=r[R.id];P===void 0&&(T(R),P=_(R),r[R.id]=P,R.addEventListener("dispose",m));const L=U.program;n.updateUBOMapping(R,L);const c=e.render.frame;a[R.id]!==c&&(v(R),a[R.id]=c)}function _(R){const U=x();R.__bindingPointIndex=U;const P=o.createBuffer(),L=R.__size,c=R.usage;return o.bindBuffer(35345,P),o.bufferData(35345,L,c),o.bindBuffer(35345,null),o.bindBufferBase(35345,U,P),P}function x(){for(let R=0;R<l;R++)if(f.indexOf(R)===-1)return f.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(R){const U=r[R.id],P=R.uniforms,L=R.__cache;o.bindBuffer(35345,U);for(let c=0,Y=P.length;c<Y;c++){const A=P[c];if(S(A,c,L)===!0){const B=A.value,J=A.__offset;typeof B=="number"?(A.__data[0]=B,o.bufferSubData(35345,J,A.__data)):(A.value.isMatrix3?(A.__data[0]=A.value.elements[0],A.__data[1]=A.value.elements[1],A.__data[2]=A.value.elements[2],A.__data[3]=A.value.elements[0],A.__data[4]=A.value.elements[3],A.__data[5]=A.value.elements[4],A.__data[6]=A.value.elements[5],A.__data[7]=A.value.elements[0],A.__data[8]=A.value.elements[6],A.__data[9]=A.value.elements[7],A.__data[10]=A.value.elements[8],A.__data[11]=A.value.elements[0]):B.toArray(A.__data),o.bufferSubData(35345,J,A.__data))}}o.bindBuffer(35345,null)}function S(R,U,P){const L=R.value;if(P[U]===void 0)return typeof L=="number"?P[U]=L:P[U]=L.clone(),!0;if(typeof L=="number"){if(P[U]!==L)return P[U]=L,!0}else{const c=P[U];if(c.equals(L)===!1)return c.copy(L),!0}return!1}function T(R){const U=R.uniforms;let P=0;const L=16;let c=0;for(let Y=0,A=U.length;Y<A;Y++){const B=U[Y],J=g(B);if(B.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=P,Y>0){c=P%L;const pe=L-c;c!==0&&pe-J.boundary<0&&(P+=L-c,B.__offset=P)}P+=J.storage}return c=P%L,c>0&&(P+=L-c),R.__size=P,R.__cache={},this}function g(R){const U=R.value,P={boundary:0,storage:0};return typeof U=="number"?(P.boundary=4,P.storage=4):U.isVector2?(P.boundary=8,P.storage=8):U.isVector3||U.isColor?(P.boundary=16,P.storage=12):U.isVector4?(P.boundary=16,P.storage=16):U.isMatrix3?(P.boundary=48,P.storage=48):U.isMatrix4?(P.boundary=64,P.storage=64):U.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",U),P}function m(R){const U=R.target;U.removeEventListener("dispose",m);const P=f.indexOf(U.__bindingPointIndex);f.splice(P,1),o.deleteBuffer(r[U.id]),delete r[U.id],delete a[U.id]}function w(){for(const R in r)o.deleteBuffer(r[R]);f=[],r={},a={}}return{bind:p,update:d,dispose:w}}function bm(){const o=ds("canvas");return o.style.display="block",o}function kl(o={}){this.isWebGLRenderer=!0;const e=o.canvas!==void 0?o.canvas:bm(),t=o.context!==void 0?o.context:null,n=o.depth!==void 0?o.depth:!0,r=o.stencil!==void 0?o.stencil:!0,a=o.antialias!==void 0?o.antialias:!1,f=o.premultipliedAlpha!==void 0?o.premultipliedAlpha:!0,l=o.preserveDrawingBuffer!==void 0?o.preserveDrawingBuffer:!1,p=o.powerPreference!==void 0?o.powerPreference:"default",d=o.failIfMajorPerformanceCaveat!==void 0?o.failIfMajorPerformanceCaveat:!1;let _;t!==null?_=t.getContextAttributes().alpha:_=o.alpha!==void 0?o.alpha:!1;let x=null,v=null;const S=[],T=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Ri,this.physicallyCorrectLights=!1,this.toneMapping=Xn,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const g=this;let m=!1,w=0,R=0,U=null,P=-1,L=null;const c=new Vt,Y=new Vt;let A=null,B=e.width,J=e.height,pe=1,be=null,ne=null;const $=new Vt(0,0,B,J),fe=new Vt(0,0,B,J);let xe=!1;const ve=new Nl;let oe=!1,Z=!1,ee=null;const _e=new Ht,ye=new lt,me=new W,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function $e(){return U===null?pe:1}let ce=t;function ct(D,X){for(let re=0;re<D.length;re++){const q=D[re],ae=e.getContext(q,X);if(ae!==null)return ae}return null}try{const D={alpha:!0,depth:n,stencil:r,antialias:a,premultipliedAlpha:f,preserveDrawingBuffer:l,powerPreference:p,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ea}`),e.addEventListener("webglcontextlost",Be,!1),e.addEventListener("webglcontextrestored",Ze,!1),e.addEventListener("webglcontextcreationerror",et,!1),ce===null){const X=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&X.shift(),ce=ct(X,D),ce===null)throw ct(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}ce.getShaderPrecisionFormat===void 0&&(ce.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let qe,Ge,Fe,dt,nt,Oe,Mt,Et,Pe,_t,Rt,pt,Kt,Yt,I,C,te,ge,Me,De,We,z,j,Re;function Ie(){qe=new Id(ce),Ge=new Ed(ce,qe,o),qe.init(Ge),z=new mm(ce,qe,Ge),Fe=new dm(ce,qe,Ge),dt=new Od,nt=new Qp,Oe=new pm(ce,qe,Fe,nt,Ge,z,dt),Mt=new Cd(g),Et=new Rd(g),Pe=new qu(ce,Ge),j=new wd(ce,qe,Pe,Ge),_t=new Nd(ce,Pe,dt,j),Rt=new kd(ce,_t,Pe,dt),Me=new Bd(ce,Ge,Oe),C=new Ad(nt),pt=new Jp(g,Mt,Et,qe,Ge,j,C),Kt=new ym(g,nt),Yt=new tm,I=new om(qe,Ge),ge=new Sd(g,Mt,Fe,Rt,_,f),te=new hm(g,Rt,Ge),Re=new Mm(ce,dt,Ge,Fe),De=new Td(ce,qe,dt,Ge),We=new Fd(ce,qe,dt,Ge),dt.programs=pt.programs,g.capabilities=Ge,g.extensions=qe,g.properties=nt,g.renderLists=Yt,g.shadowMap=te,g.state=Fe,g.info=dt}Ie();const Le=new vm(g,ce);this.xr=Le,this.getContext=function(){return ce},this.getContextAttributes=function(){return ce.getContextAttributes()},this.forceContextLoss=function(){const D=qe.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=qe.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return pe},this.setPixelRatio=function(D){D!==void 0&&(pe=D,this.setSize(B,J,!1))},this.getSize=function(D){return D.set(B,J)},this.setSize=function(D,X,re){if(Le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=D,J=X,e.width=Math.floor(D*pe),e.height=Math.floor(X*pe),re!==!1&&(e.style.width=D+"px",e.style.height=X+"px"),this.setViewport(0,0,D,X)},this.getDrawingBufferSize=function(D){return D.set(B*pe,J*pe).floor()},this.setDrawingBufferSize=function(D,X,re){B=D,J=X,pe=re,e.width=Math.floor(D*re),e.height=Math.floor(X*re),this.setViewport(0,0,D,X)},this.getCurrentViewport=function(D){return D.copy(c)},this.getViewport=function(D){return D.copy($)},this.setViewport=function(D,X,re,q){D.isVector4?$.set(D.x,D.y,D.z,D.w):$.set(D,X,re,q),Fe.viewport(c.copy($).multiplyScalar(pe).floor())},this.getScissor=function(D){return D.copy(fe)},this.setScissor=function(D,X,re,q){D.isVector4?fe.set(D.x,D.y,D.z,D.w):fe.set(D,X,re,q),Fe.scissor(Y.copy(fe).multiplyScalar(pe).floor())},this.getScissorTest=function(){return xe},this.setScissorTest=function(D){Fe.setScissorTest(xe=D)},this.setOpaqueSort=function(D){be=D},this.setTransparentSort=function(D){ne=D},this.getClearColor=function(D){return D.copy(ge.getClearColor())},this.setClearColor=function(){ge.setClearColor.apply(ge,arguments)},this.getClearAlpha=function(){return ge.getClearAlpha()},this.setClearAlpha=function(){ge.setClearAlpha.apply(ge,arguments)},this.clear=function(D=!0,X=!0,re=!0){let q=0;D&&(q|=16384),X&&(q|=256),re&&(q|=1024),ce.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Be,!1),e.removeEventListener("webglcontextrestored",Ze,!1),e.removeEventListener("webglcontextcreationerror",et,!1),Yt.dispose(),I.dispose(),nt.dispose(),Mt.dispose(),Et.dispose(),Rt.dispose(),j.dispose(),Re.dispose(),pt.dispose(),Le.dispose(),Le.removeEventListener("sessionstart",He),Le.removeEventListener("sessionend",ft),ee&&(ee.dispose(),ee=null),At.stop()};function Be(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),m=!0}function Ze(){console.log("THREE.WebGLRenderer: Context Restored."),m=!1;const D=dt.autoReset,X=te.enabled,re=te.autoUpdate,q=te.needsUpdate,ae=te.type;Ie(),dt.autoReset=D,te.enabled=X,te.autoUpdate=re,te.needsUpdate=q,te.type=ae}function et(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function k(D){const X=D.target;X.removeEventListener("dispose",k),Ae(X)}function Ae(D){Se(D),nt.remove(D)}function Se(D){const X=nt.get(D).programs;X!==void 0&&(X.forEach(function(re){pt.releaseProgram(re)}),D.isShaderMaterial&&pt.releaseShaderCache(D))}this.renderBufferDirect=function(D,X,re,q,ae,ke){X===null&&(X=Ne);const Ke=ae.isMesh&&ae.matrixWorld.determinant()<0,it=ys(D,X,re,q,ae);Fe.setMaterial(q,Ke);let Je=re.index;const mt=re.attributes.position;if(Je===null){if(mt===void 0||mt.count===0)return}else if(Je.count===0)return;let rt=1;q.wireframe===!0&&(Je=_t.getWireframeAttribute(re),rt=2),j.setup(ae,q,it,re,Je);let ot,St=De;Je!==null&&(ot=Pe.get(Je),St=We,St.setIndex(ot));const Rn=Je!==null?Je.count:mt.count,Un=re.drawRange.start*rt,Zn=re.drawRange.count*rt,en=ke!==null?ke.start*rt:0,ht=ke!==null?ke.count*rt:1/0,Kn=Math.max(Un,en),Ct=Math.min(Rn,Un+Zn,en+ht)-1,$t=Math.max(0,Ct-Kn+1);if($t!==0){if(ae.isMesh)q.wireframe===!0?(Fe.setLineWidth(q.wireframeLinewidth*$e()),St.setMode(1)):St.setMode(4);else if(ae.isLine){let pn=q.linewidth;pn===void 0&&(pn=1),Fe.setLineWidth(pn*$e()),ae.isLineSegments?St.setMode(1):ae.isLineLoop?St.setMode(2):St.setMode(3)}else ae.isPoints?St.setMode(0):ae.isSprite&&St.setMode(4);if(ae.isInstancedMesh)St.renderInstances(Kn,$t,ae.count);else if(re.isInstancedBufferGeometry){const pn=Math.min(re.instanceCount,re._maxInstanceCount);St.renderInstances(Kn,$t,pn)}else St.render(Kn,$t)}},this.compile=function(D,X){function re(q,ae,ke){q.transparent===!0&&q.side===li?(q.side=Mn,q.needsUpdate=!0,Ui(q,ae,ke),q.side=sr,q.needsUpdate=!0,Ui(q,ae,ke),q.side=li):Ui(q,ae,ke)}v=I.get(D),v.init(),T.push(v),D.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(v.pushLight(q),q.castShadow&&v.pushShadow(q))}),v.setupLights(g.physicallyCorrectLights),D.traverse(function(q){const ae=q.material;if(ae)if(Array.isArray(ae))for(let ke=0;ke<ae.length;ke++){const Ke=ae[ke];re(Ke,D,q)}else re(ae,D,q)}),T.pop(),v=null};let ue=null;function Te(D){ue&&ue(D)}function He(){At.stop()}function ft(){At.start()}const At=new Fl;At.setAnimationLoop(Te),typeof self<"u"&&At.setContext(self),this.setAnimationLoop=function(D){ue=D,Le.setAnimationLoop(D),D===null?At.stop():At.start()},Le.addEventListener("sessionstart",He),Le.addEventListener("sessionend",ft),this.render=function(D,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(m===!0)return;D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Le.enabled===!0&&Le.isPresenting===!0&&(Le.cameraAutoUpdate===!0&&Le.updateCamera(X),X=Le.getCamera()),D.isScene===!0&&D.onBeforeRender(g,D,X,U),v=I.get(D,T.length),v.init(),T.push(v),_e.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),ve.setFromProjectionMatrix(_e),Z=this.localClippingEnabled,oe=C.init(this.clippingPlanes,Z,X),x=Yt.get(D,S.length),x.init(),S.push(x),Pn(D,X,0,g.sortObjects),x.finish(),g.sortObjects===!0&&x.sort(be,ne),oe===!0&&C.beginShadows();const re=v.state.shadowsArray;if(te.render(re,D,X),oe===!0&&C.endShadows(),this.info.autoReset===!0&&this.info.reset(),ge.render(x,D),v.setupLights(g.physicallyCorrectLights),X.isArrayCamera){const q=X.cameras;for(let ae=0,ke=q.length;ae<ke;ae++){const Ke=q[ae];bt(x,D,Ke,Ke.viewport)}}else bt(x,D,X);U!==null&&(Oe.updateMultisampleRenderTarget(U),Oe.updateRenderTargetMipmap(U)),D.isScene===!0&&D.onAfterRender(g,D,X),j.resetDefaultState(),P=-1,L=null,T.pop(),T.length>0?v=T[T.length-1]:v=null,S.pop(),S.length>0?x=S[S.length-1]:x=null};function Pn(D,X,re,q){if(D.visible===!1)return;if(D.layers.test(X.layers)){if(D.isGroup)re=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(X);else if(D.isLight)v.pushLight(D),D.castShadow&&v.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||ve.intersectsSprite(D)){q&&me.setFromMatrixPosition(D.matrixWorld).applyMatrix4(_e);const Ke=Rt.update(D),it=D.material;it.visible&&x.push(D,Ke,it,re,me.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(D.isSkinnedMesh&&D.skeleton.frame!==dt.render.frame&&(D.skeleton.update(),D.skeleton.frame=dt.render.frame),!D.frustumCulled||ve.intersectsObject(D))){q&&me.setFromMatrixPosition(D.matrixWorld).applyMatrix4(_e);const Ke=Rt.update(D),it=D.material;if(Array.isArray(it)){const Je=Ke.groups;for(let mt=0,rt=Je.length;mt<rt;mt++){const ot=Je[mt],St=it[ot.materialIndex];St&&St.visible&&x.push(D,Ke,St,re,me.z,ot)}}else it.visible&&x.push(D,Ke,it,re,me.z,null)}}const ke=D.children;for(let Ke=0,it=ke.length;Ke<it;Ke++)Pn(ke[Ke],X,re,q)}function bt(D,X,re,q){const ae=D.opaque,ke=D.transmissive,Ke=D.transparent;v.setupLightsView(re),ke.length>0&&Jt(ae,X,re),q&&Fe.viewport(c.copy(q)),ae.length>0&&Qt(ae,X,re),ke.length>0&&Qt(ke,X,re),Ke.length>0&&Qt(Ke,X,re),Fe.buffers.depth.setTest(!0),Fe.buffers.depth.setMask(!0),Fe.buffers.color.setMask(!0),Fe.setPolygonOffset(!1)}function Jt(D,X,re){const q=Ge.isWebGL2;ee===null&&(ee=new Ii(1,1,{generateMipmaps:!0,type:qe.has("EXT_color_buffer_half_float")?Er:Pi,minFilter:ms,samples:q&&a===!0?4:0})),g.getDrawingBufferSize(ye),q?ee.setSize(ye.x,ye.y):ee.setSize(Sa(ye.x),Sa(ye.y));const ae=g.getRenderTarget();g.setRenderTarget(ee),g.clear();const ke=g.toneMapping;g.toneMapping=Xn,Qt(D,X,re),g.toneMapping=ke,Oe.updateMultisampleRenderTarget(ee),Oe.updateRenderTargetMipmap(ee),g.setRenderTarget(ae)}function Qt(D,X,re){const q=X.isScene===!0?X.overrideMaterial:null;for(let ae=0,ke=D.length;ae<ke;ae++){const Ke=D[ae],it=Ke.object,Je=Ke.geometry,mt=q===null?Ke.material:q,rt=Ke.group;it.layers.test(re.layers)&&vs(it,X,re,Je,mt,rt)}}function vs(D,X,re,q,ae,ke){D.onBeforeRender(g,X,re,q,ae,ke),D.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),ae.onBeforeRender(g,X,re,q,D,ke),ae.transparent===!0&&ae.side===li?(ae.side=Mn,ae.needsUpdate=!0,g.renderBufferDirect(re,X,q,ae,D,ke),ae.side=sr,ae.needsUpdate=!0,g.renderBufferDirect(re,X,q,ae,D,ke),ae.side=li):g.renderBufferDirect(re,X,q,ae,D,ke),D.onAfterRender(g,X,re,q,ae,ke)}function Ui(D,X,re){X.isScene!==!0&&(X=Ne);const q=nt.get(D),ae=v.state.lights,ke=v.state.shadowsArray,Ke=ae.state.version,it=pt.getParameters(D,ae.state,ke,X,re),Je=pt.getProgramCacheKey(it);let mt=q.programs;q.environment=D.isMeshStandardMaterial?X.environment:null,q.fog=X.fog,q.envMap=(D.isMeshStandardMaterial?Et:Mt).get(D.envMap||q.environment),mt===void 0&&(D.addEventListener("dispose",k),mt=new Map,q.programs=mt);let rt=mt.get(Je);if(rt!==void 0){if(q.currentProgram===rt&&q.lightsStateVersion===Ke)return hr(D,it),rt}else it.uniforms=pt.getUniforms(D),D.onBuild(re,it,g),D.onBeforeCompile(it,g),rt=pt.acquireProgram(it,Je),mt.set(Je,rt),q.uniforms=it.uniforms;const ot=q.uniforms;(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(ot.clippingPlanes=C.uniform),hr(D,it),q.needsLights=Rr(D),q.lightsStateVersion=Ke,q.needsLights&&(ot.ambientLightColor.value=ae.state.ambient,ot.lightProbe.value=ae.state.probe,ot.directionalLights.value=ae.state.directional,ot.directionalLightShadows.value=ae.state.directionalShadow,ot.spotLights.value=ae.state.spot,ot.spotLightShadows.value=ae.state.spotShadow,ot.rectAreaLights.value=ae.state.rectArea,ot.ltc_1.value=ae.state.rectAreaLTC1,ot.ltc_2.value=ae.state.rectAreaLTC2,ot.pointLights.value=ae.state.point,ot.pointLightShadows.value=ae.state.pointShadow,ot.hemisphereLights.value=ae.state.hemi,ot.directionalShadowMap.value=ae.state.directionalShadowMap,ot.directionalShadowMatrix.value=ae.state.directionalShadowMatrix,ot.spotShadowMap.value=ae.state.spotShadowMap,ot.spotLightMatrix.value=ae.state.spotLightMatrix,ot.spotLightMap.value=ae.state.spotLightMap,ot.pointShadowMap.value=ae.state.pointShadowMap,ot.pointShadowMatrix.value=ae.state.pointShadowMatrix);const St=rt.getUniforms(),Rn=hs.seqWithValue(St.seq,ot);return q.currentProgram=rt,q.uniformsList=Rn,rt}function hr(D,X){const re=nt.get(D);re.outputEncoding=X.outputEncoding,re.instancing=X.instancing,re.skinning=X.skinning,re.morphTargets=X.morphTargets,re.morphNormals=X.morphNormals,re.morphColors=X.morphColors,re.morphTargetsCount=X.morphTargetsCount,re.numClippingPlanes=X.numClippingPlanes,re.numIntersection=X.numClipIntersection,re.vertexAlphas=X.vertexAlphas,re.vertexTangents=X.vertexTangents,re.toneMapping=X.toneMapping}function ys(D,X,re,q,ae){X.isScene!==!0&&(X=Ne),Oe.resetTextureUnits();const ke=X.fog,Ke=q.isMeshStandardMaterial?X.environment:null,it=U===null?g.outputEncoding:U.isXRRenderTarget===!0?U.texture.encoding:Ri,Je=(q.isMeshStandardMaterial?Et:Mt).get(q.envMap||Ke),mt=q.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,rt=!!q.normalMap&&!!re.attributes.tangent,ot=!!re.morphAttributes.position,St=!!re.morphAttributes.normal,Rn=!!re.morphAttributes.color,Un=q.toneMapped?g.toneMapping:Xn,Zn=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,en=Zn!==void 0?Zn.length:0,ht=nt.get(q),Kn=v.state.lights;if(oe===!0&&(Z===!0||D!==L)){const Zt=D===L&&q.id===P;C.setState(q,D,Zt)}let Ct=!1;q.version===ht.__version?(ht.needsLights&&ht.lightsStateVersion!==Kn.state.version||ht.outputEncoding!==it||ae.isInstancedMesh&&ht.instancing===!1||!ae.isInstancedMesh&&ht.instancing===!0||ae.isSkinnedMesh&&ht.skinning===!1||!ae.isSkinnedMesh&&ht.skinning===!0||ht.envMap!==Je||q.fog===!0&&ht.fog!==ke||ht.numClippingPlanes!==void 0&&(ht.numClippingPlanes!==C.numPlanes||ht.numIntersection!==C.numIntersection)||ht.vertexAlphas!==mt||ht.vertexTangents!==rt||ht.morphTargets!==ot||ht.morphNormals!==St||ht.morphColors!==Rn||ht.toneMapping!==Un||Ge.isWebGL2===!0&&ht.morphTargetsCount!==en)&&(Ct=!0):(Ct=!0,ht.__version=q.version);let $t=ht.currentProgram;Ct===!0&&($t=Ui(q,X,ae));let pn=!1,Jn=!1,kt=!1;const Dt=$t.getUniforms(),mn=ht.uniforms;if(Fe.useProgram($t.program)&&(pn=!0,Jn=!0,kt=!0),q.id!==P&&(P=q.id,Jn=!0),pn||L!==D){if(Dt.setValue(ce,"projectionMatrix",D.projectionMatrix),Ge.logarithmicDepthBuffer&&Dt.setValue(ce,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),L!==D&&(L=D,Jn=!0,kt=!0),q.isShaderMaterial||q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshStandardMaterial||q.envMap){const Zt=Dt.map.cameraPosition;Zt!==void 0&&Zt.setValue(ce,me.setFromMatrixPosition(D.matrixWorld))}(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Dt.setValue(ce,"isOrthographic",D.isOrthographicCamera===!0),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial||q.isShadowMaterial||ae.isSkinnedMesh)&&Dt.setValue(ce,"viewMatrix",D.matrixWorldInverse)}if(ae.isSkinnedMesh){Dt.setOptional(ce,ae,"bindMatrix"),Dt.setOptional(ce,ae,"bindMatrixInverse");const Zt=ae.skeleton;Zt&&(Ge.floatVertexTextures?(Zt.boneTexture===null&&Zt.computeBoneTexture(),Dt.setValue(ce,"boneTexture",Zt.boneTexture,Oe),Dt.setValue(ce,"boneTextureSize",Zt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const dr=re.morphAttributes;if((dr.position!==void 0||dr.normal!==void 0||dr.color!==void 0&&Ge.isWebGL2===!0)&&Me.update(ae,re,q,$t),(Jn||ht.receiveShadow!==ae.receiveShadow)&&(ht.receiveShadow=ae.receiveShadow,Dt.setValue(ce,"receiveShadow",ae.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(mn.envMap.value=Je,mn.flipEnvMap.value=Je.isCubeTexture&&Je.isRenderTargetTexture===!1?-1:1),Jn&&(Dt.setValue(ce,"toneMappingExposure",g.toneMappingExposure),ht.needsLights&&Ms(mn,kt),ke&&q.fog===!0&&Kt.refreshFogUniforms(mn,ke),Kt.refreshMaterialUniforms(mn,q,pe,J,ee),hs.upload(ce,ht.uniformsList,mn,Oe)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(hs.upload(ce,ht.uniformsList,mn,Oe),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Dt.setValue(ce,"center",ae.center),Dt.setValue(ce,"modelViewMatrix",ae.modelViewMatrix),Dt.setValue(ce,"normalMatrix",ae.normalMatrix),Dt.setValue(ce,"modelMatrix",ae.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const Zt=q.uniformsGroups;for(let fi=0,Ir=Zt.length;fi<Ir;fi++)if(Ge.isWebGL2){const hi=Zt[fi];Re.update(hi,$t),Re.bind(hi,$t)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return $t}function Ms(D,X){D.ambientLightColor.needsUpdate=X,D.lightProbe.needsUpdate=X,D.directionalLights.needsUpdate=X,D.directionalLightShadows.needsUpdate=X,D.pointLights.needsUpdate=X,D.pointLightShadows.needsUpdate=X,D.spotLights.needsUpdate=X,D.spotLightShadows.needsUpdate=X,D.rectAreaLights.needsUpdate=X,D.hemisphereLights.needsUpdate=X}function Rr(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(D,X,re){nt.get(D.texture).__webglTexture=X,nt.get(D.depthTexture).__webglTexture=re;const q=nt.get(D);q.__hasExternalTextures=!0,q.__hasExternalTextures&&(q.__autoAllocateDepthBuffer=re===void 0,q.__autoAllocateDepthBuffer||qe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(D,X){const re=nt.get(D);re.__webglFramebuffer=X,re.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(D,X=0,re=0){U=D,w=X,R=re;let q=!0;if(D){const Je=nt.get(D);Je.__useDefaultFramebuffer!==void 0?(Fe.bindFramebuffer(36160,null),q=!1):Je.__webglFramebuffer===void 0?Oe.setupRenderTarget(D):Je.__hasExternalTextures&&Oe.rebindTextures(D,nt.get(D.texture).__webglTexture,nt.get(D.depthTexture).__webglTexture)}let ae=null,ke=!1,Ke=!1;if(D){const Je=D.texture;(Je.isData3DTexture||Je.isDataArrayTexture)&&(Ke=!0);const mt=nt.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(ae=mt[X],ke=!0):Ge.isWebGL2&&D.samples>0&&Oe.useMultisampledRTT(D)===!1?ae=nt.get(D).__webglMultisampledFramebuffer:ae=mt,c.copy(D.viewport),Y.copy(D.scissor),A=D.scissorTest}else c.copy($).multiplyScalar(pe).floor(),Y.copy(fe).multiplyScalar(pe).floor(),A=xe;if(Fe.bindFramebuffer(36160,ae)&&Ge.drawBuffers&&q&&Fe.drawBuffers(D,ae),Fe.viewport(c),Fe.scissor(Y),Fe.setScissorTest(A),ke){const Je=nt.get(D.texture);ce.framebufferTexture2D(36160,36064,34069+X,Je.__webglTexture,re)}else if(Ke){const Je=nt.get(D.texture),mt=X||0;ce.framebufferTextureLayer(36160,36064,Je.__webglTexture,re||0,mt)}P=-1},this.readRenderTargetPixels=function(D,X,re,q,ae,ke,Ke){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let it=nt.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Ke!==void 0&&(it=it[Ke]),it){Fe.bindFramebuffer(36160,it);try{const Je=D.texture,mt=Je.format,rt=Je.type;if(mt!==Nn&&z.convert(mt)!==ce.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ot=rt===Er&&(qe.has("EXT_color_buffer_half_float")||Ge.isWebGL2&&qe.has("EXT_color_buffer_float"));if(rt!==Pi&&z.convert(rt)!==ce.getParameter(35738)&&!(rt===Ai&&(Ge.isWebGL2||qe.has("OES_texture_float")||qe.has("WEBGL_color_buffer_float")))&&!ot){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=D.width-q&&re>=0&&re<=D.height-ae&&ce.readPixels(X,re,q,ae,z.convert(mt),z.convert(rt),ke)}finally{const Je=U!==null?nt.get(U).__webglFramebuffer:null;Fe.bindFramebuffer(36160,Je)}}},this.copyFramebufferToTexture=function(D,X,re=0){const q=Math.pow(2,-re),ae=Math.floor(X.image.width*q),ke=Math.floor(X.image.height*q);Oe.setTexture2D(X,0),ce.copyTexSubImage2D(3553,re,0,0,D.x,D.y,ae,ke),Fe.unbindTexture()},this.copyTextureToTexture=function(D,X,re,q=0){const ae=X.image.width,ke=X.image.height,Ke=z.convert(re.format),it=z.convert(re.type);Oe.setTexture2D(re,0),ce.pixelStorei(37440,re.flipY),ce.pixelStorei(37441,re.premultiplyAlpha),ce.pixelStorei(3317,re.unpackAlignment),X.isDataTexture?ce.texSubImage2D(3553,q,D.x,D.y,ae,ke,Ke,it,X.image.data):X.isCompressedTexture?ce.compressedTexSubImage2D(3553,q,D.x,D.y,X.mipmaps[0].width,X.mipmaps[0].height,Ke,X.mipmaps[0].data):ce.texSubImage2D(3553,q,D.x,D.y,Ke,it,X.image),q===0&&re.generateMipmaps&&ce.generateMipmap(3553),Fe.unbindTexture()},this.copyTextureToTexture3D=function(D,X,re,q,ae=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ke=D.max.x-D.min.x+1,Ke=D.max.y-D.min.y+1,it=D.max.z-D.min.z+1,Je=z.convert(q.format),mt=z.convert(q.type);let rt;if(q.isData3DTexture)Oe.setTexture3D(q,0),rt=32879;else if(q.isDataArrayTexture)Oe.setTexture2DArray(q,0),rt=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}ce.pixelStorei(37440,q.flipY),ce.pixelStorei(37441,q.premultiplyAlpha),ce.pixelStorei(3317,q.unpackAlignment);const ot=ce.getParameter(3314),St=ce.getParameter(32878),Rn=ce.getParameter(3316),Un=ce.getParameter(3315),Zn=ce.getParameter(32877),en=re.isCompressedTexture?re.mipmaps[0]:re.image;ce.pixelStorei(3314,en.width),ce.pixelStorei(32878,en.height),ce.pixelStorei(3316,D.min.x),ce.pixelStorei(3315,D.min.y),ce.pixelStorei(32877,D.min.z),re.isDataTexture||re.isData3DTexture?ce.texSubImage3D(rt,ae,X.x,X.y,X.z,ke,Ke,it,Je,mt,en.data):re.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),ce.compressedTexSubImage3D(rt,ae,X.x,X.y,X.z,ke,Ke,it,Je,en.data)):ce.texSubImage3D(rt,ae,X.x,X.y,X.z,ke,Ke,it,Je,mt,en),ce.pixelStorei(3314,ot),ce.pixelStorei(32878,St),ce.pixelStorei(3316,Rn),ce.pixelStorei(3315,Un),ce.pixelStorei(32877,Zn),ae===0&&q.generateMipmaps&&ce.generateMipmap(rt),Fe.unbindTexture()},this.initTexture=function(D){D.isCubeTexture?Oe.setTextureCube(D,0):D.isData3DTexture?Oe.setTexture3D(D,0):D.isDataArrayTexture?Oe.setTexture2DArray(D,0):Oe.setTexture2D(D,0),Fe.unbindTexture()},this.resetState=function(){w=0,R=0,U=null,Fe.reset(),j.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Sm extends kl{}Sm.prototype.isWebGL1Renderer=!0;class wm extends an{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Gl extends Dr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ll=new Ht,Ta=new Al,cs=new gs,us=new W;class Tm extends an{constructor(e=new Yn,t=new Gl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,a=e.params.Points.threshold,f=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),cs.copy(n.boundingSphere),cs.applyMatrix4(r),cs.radius+=a,e.ray.intersectsSphere(cs)===!1)return;ll.copy(r).invert(),Ta.copy(e.ray).applyMatrix4(ll);const l=a/((this.scale.x+this.scale.y+this.scale.z)/3),p=l*l,d=n.index,x=n.attributes.position;if(d!==null){const v=Math.max(0,f.start),S=Math.min(d.count,f.start+f.count);for(let T=v,g=S;T<g;T++){const m=d.getX(T);us.fromBufferAttribute(x,m),cl(us,m,p,r,e,t,this)}}else{const v=Math.max(0,f.start),S=Math.min(x.count,f.start+f.count);for(let T=v,g=S;T<g;T++)us.fromBufferAttribute(x,T),cl(us,T,p,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,f=r.length;a<f;a++){const l=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=a}}}}}function cl(o,e,t,n,r,a,f){const l=Ta.distanceSqToPoint(o);if(l<t){const p=new W;Ta.closestPointToPoint(o,p),p.applyMatrix4(n);const d=r.ray.origin.distanceTo(p);if(d<r.near||d>r.far)return;a.push({distance:d,distanceToRay:Math.sqrt(l),point:p,index:e,face:null,object:f})}}class xs extends Yn{constructor(e=1,t=.4,n=64,r=8,a=2,f=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:r,p:a,q:f},n=Math.floor(n),r=Math.floor(r);const l=[],p=[],d=[],_=[],x=new W,v=new W,S=new W,T=new W,g=new W,m=new W,w=new W;for(let U=0;U<=n;++U){const P=U/n*a*Math.PI*2;R(P,a,f,e,S),R(P+.01,a,f,e,T),m.subVectors(T,S),w.addVectors(T,S),g.crossVectors(m,w),w.crossVectors(g,m),g.normalize(),w.normalize();for(let L=0;L<=r;++L){const c=L/r*Math.PI*2,Y=-t*Math.cos(c),A=t*Math.sin(c);x.x=S.x+(Y*w.x+A*g.x),x.y=S.y+(Y*w.y+A*g.y),x.z=S.z+(Y*w.z+A*g.z),p.push(x.x,x.y,x.z),v.subVectors(x,S).normalize(),d.push(v.x,v.y,v.z),_.push(U/n),_.push(L/r)}}for(let U=1;U<=n;U++)for(let P=1;P<=r;P++){const L=(r+1)*(U-1)+(P-1),c=(r+1)*U+(P-1),Y=(r+1)*U+P,A=(r+1)*(U-1)+P;l.push(L,c,A),l.push(c,Y,A)}this.setIndex(l),this.setAttribute("position",new On(p,3)),this.setAttribute("normal",new On(d,3)),this.setAttribute("uv",new On(_,2));function R(U,P,L,c,Y){const A=Math.cos(U),B=Math.sin(U),J=L/P*U,pe=Math.cos(J);Y.x=c*(2+pe)*.5*A,Y.y=c*(2+pe)*B*.5,Y.z=c*Math.sin(J)*.5}}static fromJSON(e){return new xs(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class ul{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(sn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ea}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ea);function Em(){const o=document.createElement("canvas");o.width=100,o.height=100;let e=o.getContext("2d"),t=e.createRadialGradient(o.width/2,o.height/2,0,o.width/2,o.height/2,o.width/2);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.beginPath(),e.arc(50,50,o.width/2,0,Math.PI*2,!0),e.closePath(),e.fillStyle=t,e.fill();const n=new bn(o);return n.needsUpdate=!0,n}function Hl(o,e=!1){var t=new Gl({size:.3,transparent:!0,opacity:1,blending:ga,map:Em()});let n=new Tm(o,t);return n.sortParticles=!0,n.castShadow=!0,n}const fl={type:"change"},ma={type:"start"},hl={type:"end"};class Am extends Oi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new W,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:zi.ROTATE,MIDDLE:zi.DOLLY,RIGHT:zi.PAN},this.touches={ONE:Bi.ROTATE,TWO:Bi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return l.phi},this.getAzimuthalAngle=function(){return l.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(z){z.addEventListener("keydown",Yt),this._domElementKeyEvents=z},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(fl),n.update(),a=r.NONE},this.update=function(){const z=new W,j=new Ni().setFromUnitVectors(e.up,new W(0,1,0)),Re=j.clone().invert(),Ie=new W,Le=new Ni,Be=2*Math.PI;return function(){const et=n.object.position;z.copy(et).sub(n.target),z.applyQuaternion(j),l.setFromVector3(z),n.autoRotate&&a===r.NONE&&B(Y()),n.enableDamping?(l.theta+=p.theta*n.dampingFactor,l.phi+=p.phi*n.dampingFactor):(l.theta+=p.theta,l.phi+=p.phi);let k=n.minAzimuthAngle,Ae=n.maxAzimuthAngle;return isFinite(k)&&isFinite(Ae)&&(k<-Math.PI?k+=Be:k>Math.PI&&(k-=Be),Ae<-Math.PI?Ae+=Be:Ae>Math.PI&&(Ae-=Be),k<=Ae?l.theta=Math.max(k,Math.min(Ae,l.theta)):l.theta=l.theta>(k+Ae)/2?Math.max(k,l.theta):Math.min(Ae,l.theta)),l.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,l.phi)),l.makeSafe(),l.radius*=d,l.radius=Math.max(n.minDistance,Math.min(n.maxDistance,l.radius)),n.enableDamping===!0?n.target.addScaledVector(_,n.dampingFactor):n.target.add(_),z.setFromSpherical(l),z.applyQuaternion(Re),et.copy(n.target).add(z),n.object.lookAt(n.target),n.enableDamping===!0?(p.theta*=1-n.dampingFactor,p.phi*=1-n.dampingFactor,_.multiplyScalar(1-n.dampingFactor)):(p.set(0,0,0),_.set(0,0,0)),d=1,x||Ie.distanceToSquared(n.object.position)>f||8*(1-Le.dot(n.object.quaternion))>f?(n.dispatchEvent(fl),Ie.copy(n.object.position),Le.copy(n.object.quaternion),x=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",te),n.domElement.removeEventListener("pointerdown",Mt),n.domElement.removeEventListener("pointercancel",_t),n.domElement.removeEventListener("wheel",Kt),n.domElement.removeEventListener("pointermove",Et),n.domElement.removeEventListener("pointerup",Pe),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",Yt)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=r.NONE;const f=1e-6,l=new ul,p=new ul;let d=1;const _=new W;let x=!1;const v=new lt,S=new lt,T=new lt,g=new lt,m=new lt,w=new lt,R=new lt,U=new lt,P=new lt,L=[],c={};function Y(){return 2*Math.PI/60/60*n.autoRotateSpeed}function A(){return Math.pow(.95,n.zoomSpeed)}function B(z){p.theta-=z}function J(z){p.phi-=z}const pe=function(){const z=new W;return function(Re,Ie){z.setFromMatrixColumn(Ie,0),z.multiplyScalar(-Re),_.add(z)}}(),be=function(){const z=new W;return function(Re,Ie){n.screenSpacePanning===!0?z.setFromMatrixColumn(Ie,1):(z.setFromMatrixColumn(Ie,0),z.crossVectors(n.object.up,z)),z.multiplyScalar(Re),_.add(z)}}(),ne=function(){const z=new W;return function(Re,Ie){const Le=n.domElement;if(n.object.isPerspectiveCamera){const Be=n.object.position;z.copy(Be).sub(n.target);let Ze=z.length();Ze*=Math.tan(n.object.fov/2*Math.PI/180),pe(2*Re*Ze/Le.clientHeight,n.object.matrix),be(2*Ie*Ze/Le.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(pe(Re*(n.object.right-n.object.left)/n.object.zoom/Le.clientWidth,n.object.matrix),be(Ie*(n.object.top-n.object.bottom)/n.object.zoom/Le.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function $(z){n.object.isPerspectiveCamera?d/=z:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*z)),n.object.updateProjectionMatrix(),x=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function fe(z){n.object.isPerspectiveCamera?d*=z:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/z)),n.object.updateProjectionMatrix(),x=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function xe(z){v.set(z.clientX,z.clientY)}function ve(z){R.set(z.clientX,z.clientY)}function oe(z){g.set(z.clientX,z.clientY)}function Z(z){S.set(z.clientX,z.clientY),T.subVectors(S,v).multiplyScalar(n.rotateSpeed);const j=n.domElement;B(2*Math.PI*T.x/j.clientHeight),J(2*Math.PI*T.y/j.clientHeight),v.copy(S),n.update()}function ee(z){U.set(z.clientX,z.clientY),P.subVectors(U,R),P.y>0?$(A()):P.y<0&&fe(A()),R.copy(U),n.update()}function _e(z){m.set(z.clientX,z.clientY),w.subVectors(m,g).multiplyScalar(n.panSpeed),ne(w.x,w.y),g.copy(m),n.update()}function ye(z){z.deltaY<0?fe(A()):z.deltaY>0&&$(A()),n.update()}function me(z){let j=!1;switch(z.code){case n.keys.UP:ne(0,n.keyPanSpeed),j=!0;break;case n.keys.BOTTOM:ne(0,-n.keyPanSpeed),j=!0;break;case n.keys.LEFT:ne(n.keyPanSpeed,0),j=!0;break;case n.keys.RIGHT:ne(-n.keyPanSpeed,0),j=!0;break}j&&(z.preventDefault(),n.update())}function Ne(){if(L.length===1)v.set(L[0].pageX,L[0].pageY);else{const z=.5*(L[0].pageX+L[1].pageX),j=.5*(L[0].pageY+L[1].pageY);v.set(z,j)}}function $e(){if(L.length===1)g.set(L[0].pageX,L[0].pageY);else{const z=.5*(L[0].pageX+L[1].pageX),j=.5*(L[0].pageY+L[1].pageY);g.set(z,j)}}function ce(){const z=L[0].pageX-L[1].pageX,j=L[0].pageY-L[1].pageY,Re=Math.sqrt(z*z+j*j);R.set(0,Re)}function ct(){n.enableZoom&&ce(),n.enablePan&&$e()}function qe(){n.enableZoom&&ce(),n.enableRotate&&Ne()}function Ge(z){if(L.length==1)S.set(z.pageX,z.pageY);else{const Re=We(z),Ie=.5*(z.pageX+Re.x),Le=.5*(z.pageY+Re.y);S.set(Ie,Le)}T.subVectors(S,v).multiplyScalar(n.rotateSpeed);const j=n.domElement;B(2*Math.PI*T.x/j.clientHeight),J(2*Math.PI*T.y/j.clientHeight),v.copy(S)}function Fe(z){if(L.length===1)m.set(z.pageX,z.pageY);else{const j=We(z),Re=.5*(z.pageX+j.x),Ie=.5*(z.pageY+j.y);m.set(Re,Ie)}w.subVectors(m,g).multiplyScalar(n.panSpeed),ne(w.x,w.y),g.copy(m)}function dt(z){const j=We(z),Re=z.pageX-j.x,Ie=z.pageY-j.y,Le=Math.sqrt(Re*Re+Ie*Ie);U.set(0,Le),P.set(0,Math.pow(U.y/R.y,n.zoomSpeed)),$(P.y),R.copy(U)}function nt(z){n.enableZoom&&dt(z),n.enablePan&&Fe(z)}function Oe(z){n.enableZoom&&dt(z),n.enableRotate&&Ge(z)}function Mt(z){n.enabled!==!1&&(L.length===0&&(n.domElement.setPointerCapture(z.pointerId),n.domElement.addEventListener("pointermove",Et),n.domElement.addEventListener("pointerup",Pe)),ge(z),z.pointerType==="touch"?I(z):Rt(z))}function Et(z){n.enabled!==!1&&(z.pointerType==="touch"?C(z):pt(z))}function Pe(z){Me(z),L.length===0&&(n.domElement.releasePointerCapture(z.pointerId),n.domElement.removeEventListener("pointermove",Et),n.domElement.removeEventListener("pointerup",Pe)),n.dispatchEvent(hl),a=r.NONE}function _t(z){Me(z)}function Rt(z){let j;switch(z.button){case 0:j=n.mouseButtons.LEFT;break;case 1:j=n.mouseButtons.MIDDLE;break;case 2:j=n.mouseButtons.RIGHT;break;default:j=-1}switch(j){case zi.DOLLY:if(n.enableZoom===!1)return;ve(z),a=r.DOLLY;break;case zi.ROTATE:if(z.ctrlKey||z.metaKey||z.shiftKey){if(n.enablePan===!1)return;oe(z),a=r.PAN}else{if(n.enableRotate===!1)return;xe(z),a=r.ROTATE}break;case zi.PAN:if(z.ctrlKey||z.metaKey||z.shiftKey){if(n.enableRotate===!1)return;xe(z),a=r.ROTATE}else{if(n.enablePan===!1)return;oe(z),a=r.PAN}break;default:a=r.NONE}a!==r.NONE&&n.dispatchEvent(ma)}function pt(z){switch(a){case r.ROTATE:if(n.enableRotate===!1)return;Z(z);break;case r.DOLLY:if(n.enableZoom===!1)return;ee(z);break;case r.PAN:if(n.enablePan===!1)return;_e(z);break}}function Kt(z){n.enabled===!1||n.enableZoom===!1||a!==r.NONE||(z.preventDefault(),n.dispatchEvent(ma),ye(z),n.dispatchEvent(hl))}function Yt(z){n.enabled===!1||n.enablePan===!1||me(z)}function I(z){switch(De(z),L.length){case 1:switch(n.touches.ONE){case Bi.ROTATE:if(n.enableRotate===!1)return;Ne(),a=r.TOUCH_ROTATE;break;case Bi.PAN:if(n.enablePan===!1)return;$e(),a=r.TOUCH_PAN;break;default:a=r.NONE}break;case 2:switch(n.touches.TWO){case Bi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ct(),a=r.TOUCH_DOLLY_PAN;break;case Bi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;qe(),a=r.TOUCH_DOLLY_ROTATE;break;default:a=r.NONE}break;default:a=r.NONE}a!==r.NONE&&n.dispatchEvent(ma)}function C(z){switch(De(z),a){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;Ge(z),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;Fe(z),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;nt(z),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Oe(z),n.update();break;default:a=r.NONE}}function te(z){n.enabled!==!1&&z.preventDefault()}function ge(z){L.push(z)}function Me(z){delete c[z.pointerId];for(let j=0;j<L.length;j++)if(L[j].pointerId==z.pointerId){L.splice(j,1);return}}function De(z){let j=c[z.pointerId];j===void 0&&(j=new lt,c[z.pointerId]=j),j.set(z.pageX,z.pageY)}function We(z){const j=z.pointerId===L[0].pointerId?L[1]:L[0];return c[j.pointerId]}n.domElement.addEventListener("contextmenu",te),n.domElement.addEventListener("pointerdown",Mt),n.domElement.addEventListener("pointercancel",_t),n.domElement.addEventListener("wheel",Kt,{passive:!1}),this.update()}}const La=new wm,rr=new vn(45,window.innerWidth/window.innerHeight,.1,1e3),fr=new kl({antialias:!0});fr.setClearAlpha(0);fr.setSize(window.innerWidth,window.innerHeight);fr.shadowMap.enabled=!0;rr.lookAt(new W(0,0,10009));Xt("#app_bg").append(fr.domElement);const $n=new Am(rr,fr.domElement);rr.position.set(0,0,45);const Cm=new xs(18,35,Math.round(360),Math.round(14),Math.round(5),Math.round(6),2),Lm=new xs(.8,4,Math.round(60),Math.round(12),Math.round(4),Math.round(3),3);La.add(Hl(Lm));La.add(Hl(Cm));$n.listenToKeyEvents(window);$n.enableDamping=!0;$n.dampingFactor=.05;$n.screenSpacePanning=!1;$n.minDistance=1;$n.maxDistance=500;$n.maxPolarAngle=Math.PI/2;$n.update();function Vl(){const o=Date.now()*6e-5;rr.position.x=45*Math.sin(o),rr.position.z=45*Math.cos(o),requestAnimationFrame(Vl),$n.update(),fr.render(La,rr)}window.$=Xt;const Wl=Xt("#starDom"),Dm=window.innerWidth,Pm=window.innerHeight;function dl(o){return o/1440*100}function pl(o,e){var t=e-o,n=Math.random(),r=+(n*t).toFixed(3)+o;return r}function Rm(){return[pl(60,Pm-60),pl(60,Dm-60)]}function ql(o){const[e,t]=Rm(),n=Math.random()*6,r=7e3+n*1e3,a=Xt('<div class="star star'+(Math.random()*3+1>>0)+'" style="zoom:'+(.5+Math.random())+";animation-delay:"+n+"s;top:"+dl(e)+"vw;left:"+dl(t)+'vw"></div>');setTimeout(function(){a.remove(),ql()},r),Wl.append(a)}function Im(){Xt("body").on("click",".pic-bg",function(){Xt(".pic-wrapper").removeClass("show"),setTimeout(function(){Xt(this).remove()}.bind(this),200)}),Xt(".btn").on("click",function(){Xt(this).addClass("on").siblings().removeClass("on"),Xt(".nothing").remove(),Xt(".pic-wrapper").removeClass("show"),setTimeout(function(){Xt(".pic-bg").remove()}.bind(this),200),this.id=="web"?Xt(".content.bg").addClass("show"):Xt(".content.bg").removeClass("show")}),Wl.on("click",".star",function(){const o=imageData.length*Math.random()>>0,e=imageData[o];Xt("body").append('<div class="content pic-bg"></div>'),Xt(".pic-wrapper").addClass("show").empty().append(`<div class="pic">
        <h3>AI IMAGE - ${e.en}</h3>
        <img src="./images/pic/${e.pic}.jpg" alt="">
      </div>
      <div class="eeg">
        <h3>Brainwave visualization</h3>
        <img src="./images/eeg/${e.eeg}.png" alt="">
      </div>`)})}Vl();Im();for(let o=0;o<30;o++)ql();
