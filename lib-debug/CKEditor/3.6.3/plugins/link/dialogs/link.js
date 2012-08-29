CKEDITOR.dialog.add("link",function(e){function t(e){return e.replace(/\\'/g,"'")}function n(e){return e.replace(/'/g,"\\$&")}function r(e){var t,r=L.name,i=L.params,s,o;t=[r,"("];for(var u=0;u<i.length;u++)s=i[u].toLowerCase(),o=e[s],u>0&&t.push(","),t.push("'",o?n(encodeURIComponent(e[s])):"","'");return t.push(")"),t.join("")}function i(e){var t,n=e.length,r=[];for(var i=0;i<n;i++)t=e.charCodeAt(i),r.push(t);return"String.fromCharCode("+r.join(",")+")"}function s(e){var t=e.getAttribute("class");return t?t.replace(/\s*(?:cke_anchor_empty|cke_anchor)(?:\s*$)?/g,""):""}var o=CKEDITOR.plugins.link,u=function(){var t=this.getDialog(),n=t.getContentElement("target","popupFeatures"),r=t.getContentElement("target","linkTargetName"),i=this.getValue();if(!n||!r)return;n=n.getElement(),n.hide(),r.setValue("");switch(i){case"frame":r.setLabel(e.lang.link.targetFrameName),r.getElement().show();break;case"popup":n.show(),r.setLabel(e.lang.link.targetPopupName),r.getElement().show();break;default:r.setValue(i),r.getElement().hide()}},a=function(){var t=this.getDialog(),n=["urlOptions","anchorOptions","emailOptions"],r=this.getValue(),i=t.definition.getContents("upload"),s=i&&i.hidden;r=="url"?(e.config.linkShowTargetTab&&t.showPage("target"),s||t.showPage("upload")):(t.hidePage("target"),s||t.hidePage("upload"));for(var o=0;o<n.length;o++){var u=t.getContentElement("info",n[o]);if(!u)continue;u=u.getElement().getParent().getParent(),n[o]==r+"Options"?u.show():u.hide()}t.layout()},f=/^javascript:/,l=/^mailto:([^?]+)(?:\?(.+))?$/,c=/subject=([^;?:@&=$,\/]*)/,h=/body=([^;?:@&=$,\/]*)/,p=/^#(.*)$/,d=/^((?:http|https|ftp|news):\/\/)?(.*)$/,v=/^(_(?:self|top|parent|blank))$/,m=/^javascript:void\(location\.href='mailto:'\+String\.fromCharCode\(([^)]+)\)(?:\+'(.*)')?\)$/,g=/^javascript:([^(]+)\(([^)]+)\)$/,y=/\s*window.open\(\s*this\.href\s*,\s*(?:'([^']*)'|null)\s*,\s*'([^']*)'\s*\)\s*;\s*return\s*false;*\s*/,b=/(?:^|,)([^=]+)=(\d+|yes|no)/gi,w=function(e,n){var r=n&&(n.data("cke-saved-href")||n.getAttribute("href"))||"",i,o,u,a,w={};if(i=r.match(f))k=="encode"?r=r.replace(m,function(e,n,r){return"mailto:"+String.fromCharCode.apply(String,n.split(","))+(r&&t(r))}):k&&r.replace(g,function(e,n,r){if(n==L.name){w.type="email";var i=w.email={},s=/[^,\s]+/g,o=/(^')|('$)/g,u=r.match(s),a=u.length,f,l;for(var c=0;c<a;c++)l=decodeURIComponent(t(u[c].replace(o,""))),f=L.params[c].toLowerCase(),i[f]=l;i.address=[i.name,i.domain].join("@")}});if(!w.type)if(u=r.match(p))w.type="anchor",w.anchor={},w.anchor.name=w.anchor.id=u[1];else if(o=r.match(l)){var E=r.match(c),S=r.match(h);w.type="email";var x=w.email={};x.address=o[1],E&&(x.subject=decodeURIComponent(E[1])),S&&(x.body=decodeURIComponent(S[1]))}else r&&(a=r.match(d))?(w.type="url",w.url={},w.url.protocol=a[1],w.url.url=a[2]):w.type="url";if(n){var T=n.getAttribute("target");w.target={},w.adv={};if(!T){var N=n.data("cke-pa-onclick")||n.getAttribute("onclick"),C=N&&N.match(y);if(C){w.target.type="popup",w.target.name=C[1];var A;while(A=b.exec(C[2]))A[2]!="yes"&&A[2]!="1"||A[1]in{height:1,width:1,top:1,left:1}?isFinite(A[2])&&(w.target[A[1]]=A[2]):w.target[A[1]]=!0}}else{var O=T.match(v);O?w.target.type=w.target.name=T:(w.target.type="frame",w.target.name=T)}var M=this,_=function(e,t){var r=n.getAttribute(t);r!==null&&(w.adv[e]=r||"")};_("advId","id"),_("advLangDir","dir"),_("advAccessKey","accessKey"),w.adv.advName=n.data("cke-saved-name")||n.getAttribute("name")||"",_("advLangCode","lang"),_("advTabIndex","tabindex"),_("advTitle","title"),_("advContentType","type"),CKEDITOR.plugins.link.synAnchorSelector?w.adv.advCSSClasses=s(n):_("advCSSClasses","class"),_("advCharset","charset"),_("advStyles","style"),_("advRel","rel")}var D=w.anchors=[],P,H,B;if(CKEDITOR.plugins.link.emptyAnchorFix){var j=e.document.getElementsByTag("a");for(P=0,H=j.count();P<H;P++)B=j.getItem(P),(B.data("cke-saved-name")||B.hasAttribute("name"))&&D.push({name:B.data("cke-saved-name")||B.getAttribute("name"),id:B.getAttribute("id")})}else{var F=new CKEDITOR.dom.nodeList(e.document.$.anchors);for(P=0,H=F.count();P<H;P++)B=F.getItem(P),D[P]={name:B.getAttribute("name"),id:B.getAttribute("id")}}if(CKEDITOR.plugins.link.fakeAnchor){var I=e.document.getElementsByTag("img");for(P=0,H=I.count();P<H;P++)(B=CKEDITOR.plugins.link.tryRestoreFakeAnchor(e,I.getItem(P)))&&D.push({name:B.getAttribute("name"),id:B.getAttribute("id")})}return this._.selectedElement=n,w},E=function(e,t){t[e]&&this.setValue(t[e][this.id]||"")},S=function(e){return E.call(this,"target",e)},x=function(e){return E.call(this,"adv",e)},T=function(e,t){t[e]||(t[e]={}),t[e][this.id]=this.getValue()||""},N=function(e){return T.call(this,"target",e)},C=function(e){return T.call(this,"adv",e)},k=e.config.emailProtection||"";if(k&&k!="encode"){var L={};k.replace(/^([^(]+)\(([^)]+)\)$/,function(e,t,n){L.name=t,L.params=[],n.replace(/[^,\s]+/g,function(e){L.params.push(e)})})}var A=e.lang.common,O=e.lang.link;return{title:O.title,minWidth:350,minHeight:230,contents:[{id:"info",label:O.info,title:O.info,elements:[{id:"linkType",type:"select",label:O.type,"default":"url",items:[[O.toUrl,"url"],[O.toAnchor,"anchor"],[O.toEmail,"email"]],onChange:a,setup:function(e){e.type&&this.setValue(e.type)},commit:function(e){e.type=this.getValue()}},{type:"vbox",id:"urlOptions",children:[{type:"hbox",widths:["25%","75%"],children:[{id:"protocol",type:"select",label:A.protocol,"default":"http://",items:[["http://‎","http://"],["https://‎","https://"],["ftp://‎","ftp://"],["news://‎","news://"],[O.other,""]],setup:function(e){e.url&&this.setValue(e.url.protocol||"")},commit:function(e){e.url||(e.url={}),e.url.protocol=this.getValue()}},{type:"text",id:"url",label:A.url,required:!0,onLoad:function(){this.allowOnChange=!0},onKeyUp:function(){var e=this;e.allowOnChange=!1;var t=e.getDialog().getContentElement("info","protocol"),n=e.getValue(),r=/^(http|https|ftp|news):\/\/(?=.)/i,i=/^((javascript:)|[#\/\.\?])/i,s=r.exec(n);s?(e.setValue(n.substr(s[0].length)),t.setValue(s[0].toLowerCase())):i.test(n)&&t.setValue(""),e.allowOnChange=!0},onChange:function(){this.allowOnChange&&this.onKeyUp()},validate:function(){var e=this.getDialog();if(e.getContentElement("info","linkType")&&e.getValueOf("info","linkType")!="url")return!0;if(this.getDialog().fakeObj)return!0;var t=CKEDITOR.dialog.validate.notEmpty(O.noUrl);return t.apply(this)},setup:function(e){this.allowOnChange=!1,e.url&&this.setValue(e.url.url),this.allowOnChange=!0},commit:function(e){this.onChange(),e.url||(e.url={}),e.url.url=this.getValue(),this.allowOnChange=!1}}],setup:function(e){this.getDialog().getContentElement("info","linkType")||this.getElement().show()}},{type:"button",id:"browse",hidden:"true",filebrowser:"info:url",label:A.browseServer}]},{type:"vbox",id:"anchorOptions",width:260,align:"center",padding:0,children:[{type:"fieldset",id:"selectAnchorText",label:O.selectAnchor,setup:function(e){e.anchors.length>0?this.getElement().show():this.getElement().hide()},children:[{type:"hbox",id:"selectAnchor",children:[{type:"select",id:"anchorName","default":"",label:O.anchorName,style:"width: 100%;",items:[[""]],setup:function(e){var t=this;t.clear(),t.add("");for(var n=0;n<e.anchors.length;n++)e.anchors[n].name&&t.add(e.anchors[n].name);e.anchor&&t.setValue(e.anchor.name);var r=t.getDialog().getContentElement("info","linkType");r&&r.getValue()=="email"&&t.focus()},commit:function(e){e.anchor||(e.anchor={}),e.anchor.name=this.getValue()}},{type:"select",id:"anchorId","default":"",label:O.anchorId,style:"width: 100%;",items:[[""]],setup:function(e){var t=this;t.clear(),t.add("");for(var n=0;n<e.anchors.length;n++)e.anchors[n].id&&t.add(e.anchors[n].id);e.anchor&&t.setValue(e.anchor.id)},commit:function(e){e.anchor||(e.anchor={}),e.anchor.id=this.getValue()}}],setup:function(e){e.anchors.length>0?this.getElement().show():this.getElement().hide()}}]},{type:"html",id:"noAnchors",style:"text-align: center;",html:'<div role="note" tabIndex="-1">'+CKEDITOR.tools.htmlEncode(O.noAnchors)+"</div>",focus:!0,setup:function(e){e.anchors.length<1?this.getElement().show():this.getElement().hide()}}],setup:function(e){this.getDialog().getContentElement("info","linkType")||this.getElement().hide()}},{type:"vbox",id:"emailOptions",padding:1,children:[{type:"text",id:"emailAddress",label:O.emailAddress,required:!0,validate:function(){var e=this.getDialog();if(!e.getContentElement("info","linkType")||e.getValueOf("info","linkType")!="email")return!0;var t=CKEDITOR.dialog.validate.notEmpty(O.noEmail);return t.apply(this)},setup:function(e){e.email&&this.setValue(e.email.address);var t=this.getDialog().getContentElement("info","linkType");t&&t.getValue()=="email"&&this.select()},commit:function(e){e.email||(e.email={}),e.email.address=this.getValue()}},{type:"text",id:"emailSubject",label:O.emailSubject,setup:function(e){e.email&&this.setValue(e.email.subject)},commit:function(e){e.email||(e.email={}),e.email.subject=this.getValue()}},{type:"textarea",id:"emailBody",label:O.emailBody,rows:3,"default":"",setup:function(e){e.email&&this.setValue(e.email.body)},commit:function(e){e.email||(e.email={}),e.email.body=this.getValue()}}],setup:function(e){this.getDialog().getContentElement("info","linkType")||this.getElement().hide()}}]},{id:"target",label:O.target,title:O.target,elements:[{type:"hbox",widths:["50%","50%"],children:[{type:"select",id:"linkTargetType",label:A.target,"default":"notSet",style:"width : 100%;",items:[[A.notSet,"notSet"],[O.targetFrame,"frame"],[O.targetPopup,"popup"],[A.targetNew,"_blank"],[A.targetTop,"_top"],[A.targetSelf,"_self"],[A.targetParent,"_parent"]],onChange:u,setup:function(e){e.target&&this.setValue(e.target.type||"notSet"),u.call(this)},commit:function(e){e.target||(e.target={}),e.target.type=this.getValue()}},{type:"text",id:"linkTargetName",label:O.targetFrameName,"default":"",setup:function(e){e.target&&this.setValue(e.target.name)},commit:function(e){e.target||(e.target={}),e.target.name=this.getValue().replace(/\W/gi,"")}}]},{type:"vbox",width:"100%",align:"center",padding:2,id:"popupFeatures",children:[{type:"fieldset",label:O.popupFeatures,children:[{type:"hbox",children:[{type:"checkbox",id:"resizable",label:O.popupResizable,setup:S,commit:N},{type:"checkbox",id:"status",label:O.popupStatusBar,setup:S,commit:N}]},{type:"hbox",children:[{type:"checkbox",id:"location",label:O.popupLocationBar,setup:S,commit:N},{type:"checkbox",id:"toolbar",label:O.popupToolbar,setup:S,commit:N}]},{type:"hbox",children:[{type:"checkbox",id:"menubar",label:O.popupMenuBar,setup:S,commit:N},{type:"checkbox",id:"fullscreen",label:O.popupFullScreen,setup:S,commit:N}]},{type:"hbox",children:[{type:"checkbox",id:"scrollbars",label:O.popupScrollBars,setup:S,commit:N},{type:"checkbox",id:"dependent",label:O.popupDependent,setup:S,commit:N}]},{type:"hbox",children:[{type:"text",widths:["50%","50%"],labelLayout:"horizontal",label:A.width,id:"width",setup:S,commit:N},{type:"text",labelLayout:"horizontal",widths:["50%","50%"],label:O.popupLeft,id:"left",setup:S,commit:N}]},{type:"hbox",children:[{type:"text",labelLayout:"horizontal",widths:["50%","50%"],label:A.height,id:"height",setup:S,commit:N},{type:"text",labelLayout:"horizontal",label:O.popupTop,widths:["50%","50%"],id:"top",setup:S,commit:N}]}]}]}]},{id:"upload",label:O.upload,title:O.upload,hidden:!0,filebrowser:"uploadButton",elements:[{type:"file",id:"upload",label:A.upload,style:"height:40px",size:29},{type:"fileButton",id:"uploadButton",label:A.uploadSubmit,filebrowser:"info:url","for":["upload","upload"]}]},{id:"advanced",label:O.advanced,title:O.advanced,elements:[{type:"vbox",padding:1,children:[{type:"hbox",widths:["45%","35%","20%"],children:[{type:"text",id:"advId",label:O.id,setup:x,commit:C},{type:"select",id:"advLangDir",label:O.langDir,"default":"",style:"width:110px",items:[[A.notSet,""],[O.langDirLTR,"ltr"],[O.langDirRTL,"rtl"]],setup:x,commit:C},{type:"text",id:"advAccessKey",width:"80px",label:O.acccessKey,maxLength:1,setup:x,commit:C}]},{type:"hbox",widths:["45%","35%","20%"],children:[{type:"text",label:O.name,id:"advName",setup:x,commit:C},{type:"text",label:O.langCode,id:"advLangCode",width:"110px","default":"",setup:x,commit:C},{type:"text",label:O.tabIndex,id:"advTabIndex",width:"80px",maxLength:5,setup:x,commit:C}]}]},{type:"vbox",padding:1,children:[{type:"hbox",widths:["45%","55%"],children:[{type:"text",label:O.advisoryTitle,"default":"",id:"advTitle",setup:x,commit:C},{type:"text",label:O.advisoryContentType,"default":"",id:"advContentType",setup:x,commit:C}]},{type:"hbox",widths:["45%","55%"],children:[{type:"text",label:O.cssClasses,"default":"",id:"advCSSClasses",setup:x,commit:C},{type:"text",label:O.charset,"default":"",id:"advCharset",setup:x,commit:C}]},{type:"hbox",widths:["45%","55%"],children:[{type:"text",label:O.rel,"default":"",id:"advRel",setup:x,commit:C},{type:"text",label:O.styles,"default":"",id:"advStyles",validate:CKEDITOR.dialog.validate.inlineStyle(e.lang.common.invalidInlineStyle),setup:x,commit:C}]}]}]}],onShow:function(){var e=this.getParentEditor(),t=e.getSelection(),n=null;(n=o.getSelectedLink(e))&&n.hasAttribute("href")?t.selectElement(n):n=null,this.setupContent(w.apply(this,[e,n]))},onOk:function(){var e={},t=[],s={},o=this,u=this.getParentEditor();this.commitContent(s);switch(s.type||"url"){case"url":var a=s.url&&s.url.protocol!=undefined?s.url.protocol:"http://",f=s.url&&CKEDITOR.tools.trim(s.url.url)||"";e["data-cke-saved-href"]=f.indexOf("/")===0?f:a+f;break;case"anchor":var l=s.anchor&&s.anchor.name,c=s.anchor&&s.anchor.id;e["data-cke-saved-href"]="#"+(l||c||"");break;case"email":var h,p=s.email,d=p.address;switch(k){case"":case"encode":var v=encodeURIComponent(p.subject||""),m=encodeURIComponent(p.body||""),g=[];v&&g.push("subject="+v),m&&g.push("body="+m),g=g.length?"?"+g.join("&"):"",k=="encode"?(h=["javascript:void(location.href='mailto:'+",i(d)],g&&h.push("+'",n(g),"'"),h.push(")")):h=["mailto:",d,g];break;default:var y=d.split("@",2);p.name=y[0],p.domain=y[1],h=["javascript:",r(p)]}e["data-cke-saved-href"]=h.join("")}if(s.target)if(s.target.type=="popup"){var b=["window.open(this.href, '",s.target.name||"","', '"],w=["resizable","status","location","toolbar","menubar","fullscreen","scrollbars","dependent"],E=w.length,S=function(e){s.target[e]&&w.push(e+"="+s.target[e])};for(var x=0;x<E;x++)w[x]=w[x]+(s.target[w[x]]?"=yes":"=no");S("width"),S("left"),S("height"),S("top"),b.push(w.join(","),"'); return false;"),e["data-cke-pa-onclick"]=b.join(""),t.push("target")}else s.target.type!="notSet"&&s.target.name?e.target=s.target.name:t.push("target"),t.push("data-cke-pa-onclick","onclick");if(s.adv){var T=function(n,r){var i=s.adv[n];i?e[r]=i:t.push(r)};T("advId","id"),T("advLangDir","dir"),T("advAccessKey","accessKey"),s.adv.advName?e.name=e["data-cke-saved-name"]=s.adv.advName:t=t.concat(["data-cke-saved-name","name"]),T("advLangCode","lang"),T("advTabIndex","tabindex"),T("advTitle","title"),T("advContentType","type"),T("advCSSClasses","class"),T("advCharset","charset"),T("advStyles","style"),T("advRel","rel")}var N=u.getSelection();e.href=e["data-cke-saved-href"];if(!this._.selectedElement){var C=N.getRanges(!0);if(C.length==1&&C[0].collapsed){var L=new CKEDITOR.dom.text(s.type=="email"?s.email.address:e["data-cke-saved-href"],u.document);C[0].insertNode(L),C[0].selectNodeContents(L),N.selectRanges(C)}var A=new CKEDITOR.style({element:"a",attributes:e});A.type=CKEDITOR.STYLE_INLINE,A.apply(u.document)}else{var O=this._.selectedElement,M=O.data("cke-saved-href"),_=O.getHtml();O.setAttributes(e),O.removeAttributes(t),s.adv&&s.adv.advName&&CKEDITOR.plugins.link.synAnchorSelector&&O.addClass(O.getChildCount()?"cke_anchor":"cke_anchor_empty"),(M==_||s.type=="email"&&_.indexOf("@")!=-1)&&O.setHtml(s.type=="email"?s.email.address:e["data-cke-saved-href"]),N.selectElement(O),delete this._.selectedElement}},onLoad:function(){e.config.linkShowAdvancedTab||this.hidePage("advanced"),e.config.linkShowTargetTab||this.hidePage("target")},onFocus:function(){var e=this.getContentElement("info","linkType"),t;e&&e.getValue()=="url"&&(t=this.getContentElement("info","url"),t.select())}}});