var that=this;function __skpm_run(key,context){that.context=context;var exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=21)}([function(e,t,n){(function(t){function n(e,n){var o=Array.prototype.slice.call(n);o.forEach(function(e){try{log(t._skpmPrefix+function(){for(var e="",t=0;t<r;t++)e+="  ";r>0&&(e+="| ");return e}()+e)}catch(t){log(e)}})}t._skpmPrefix="console> ";var r=0;var o=t.group;t.group=function(){o&&o.apply(this,arguments),r+=1};var i=t.groupCollapsed;t.groupCollapsed=function(){i&&i.apply(this,arguments),r+=1};var a=t.groupEnd;t.groupEnd=function(){a&&a.apply(this,arguments),(r-=1)<0&&(r=0)};var u={},c=t.count;t.count=function(e){return u[e=void 0!==e?e:"Global"]=(u[e]||0)+1,c&&c.apply(this,arguments),n(0,[e+": "+u[e]])};var l={},s=t.time;t.time=function(e){if(s&&s.apply(this,arguments),l[e=void 0!==e?e:"default"])return n(0,['Timer "'+e+'" already exists']);l[e]=Date.now()};var f=t.timeEnd;t.timeEnd=function(e){if(f&&f.apply(this,arguments),!l[e=void 0!==e?e:"default"])return n(0,['Timer "'+e+'" does not exist']);var t=Date.now()-l[e];return delete l[e],n(0,[e+": "+t/1e3+"ms"])};var p=t.log;t.log=function(){return p&&p.apply(this,arguments),n(0,arguments)};var d=t.warn;t.warn=function(){return d&&d.apply(this,arguments),n(0,arguments)};var v=t.error;t.error=function(){return v&&v.apply(this,arguments),n(0,arguments)};var y=t.assert;t.assert=function(e,t){if(y&&y.apply(this,arguments),!e)return n(0,[t])};var g=t.info;t.info=function(){return g&&g.apply(this,arguments),n(0,arguments)};var b=t.clear;t.clear=function(){b&&b()},t._skpmEnabled=!0,e.exports=t}).call(t,n(0))},function(e,t,n){var r=n(16),o=n(14);e.exports=function(e){return null!=e&&o(e.length)&&!r(e)}},function(e,t,n){var r=n(9),o=n(39),i=n(40),a="[object Null]",u="[object Undefined]",c=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?u:a:c&&c in Object(e)?o(e):i(e)}},function(e,t,n){var r=n(10),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();e.exports=i},function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},function(e,t){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},function(e,t){e.exports=function(e){return e}},function(e,t,n){var r=n(29),o=n(30),i=n(51),a=n(11);e.exports=function(e,t){return(a(e)?r:o)(e,i(t))}},function(e,t,n){var r=n(34),o=n(47),i=n(1);e.exports=function(e){return i(e)?r(e):o(e)}},function(e,t,n){var r=n(3).Symbol;e.exports=r},function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(t,n(38))},function(e,t){var n=Array.isArray;e.exports=n},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t){var n=9007199254740991,r=/^(?:0|[1-9]\d*)$/;e.exports=function(e,t){var o=typeof e;return!!(t=null==t?n:t)&&("number"==o||"symbol"!=o&&r.test(e))&&e>-1&&e%1==0&&e<t}},function(e,t){var n=9007199254740991;e.exports=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=n}},function(e,t){var n=Object.prototype;e.exports=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||n)}},function(e,t,n){var r=n(2),o=n(5),i="[object AsyncFunction]",a="[object Function]",u="[object GeneratorFunction]",c="[object Proxy]";e.exports=function(e){if(!o(e))return!1;var t=r(e);return t==a||t==u||t==i||t==c}},function(e,t,n){var r=n(18),o=n(20),i=Object.prototype.hasOwnProperty;e.exports=function(e,t,n){var a=e[t];i.call(e,t)&&o(a,n)&&(void 0!==n||t in e)||r(e,t,n)}},function(e,t,n){var r=n(19);e.exports=function(e,t,n){"__proto__"==t&&r?r(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}},function(e,t,n){var r=n(53),o=function(){try{var e=r(Object,"defineProperty");return e({},"",{}),e}catch(e){}}();e.exports=o},function(e,t){e.exports=function(e,t){return e===t||e!=e&&t!=t}},function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var r=u(n(22)),o=u(n(23)),i=u(n(24)),a=n(27);function u(e){return e&&e.__esModule?e:{default:e}}t.default=function(t){var n=r.default.getSelectedDocument(),u=new i.default(t,"index.html",{identifier:"sketch-select.panel",x:0,y:0,width:340,height:624,title:"Sketch Select",onlyShowCloseButton:!0,background:(0,a.hex2NSColor)("32d1ff"),hideTitleBar:!1,shouldKeepAround:!0,resizable:!1,handlers:{select:function(t){var r=JSON.parse(t),i=void 0;if(e.log(r),r.global)i=n.selectedPage;else if(!(i=function e(t){if(!t)return!1;if("Artboard"===t.type)return t;if(t.parent)return e(t.parent);return!1}(i=n.selectedLayers.layers[0])))return o.default.alert("🖱 Select","Select target-artboard first ~");var u=(0,a.mapLayers)(i,r);u.length>0?(n.selectedLayers.clear(),(0,a.selectLayers)(u),o.default.message("🖱 Selected "+u.length+" Layers!")):o.default.alert("🖱 Select","Nothing to select ...")},getSelection:function(){var t=n.selectedLayers.layers[0],r=JSON.stringify(t);o.default.message("🖱 Select: "+t.name+" ("+t.type+")"),e.log(r),u.eval("getSelection("+r+")")},openWeb:function(e){return(0,a.openURL)(e)}}})}}).call(t,n(0))},function(e,t){e.exports=require("sketch/dom")},function(e,t){e.exports=require("sketch/ui")},function(e,t,n){var r=n(25),o=n(26),i=COScript.currentCOScript(),a="webView:didChangeLocationWithinPageForFrame:";function u(e,t,n,r){n.addConstraint(NSLayoutConstraint.constraintWithItem_attribute_relatedBy_toItem_attribute_multiplier_constant(t,e,NSLayoutRelationEqual,n,e,1,r))}function c(e,t,n){e.setTranslatesAutoresizingMaskIntoConstraints(!1),u(NSLayoutAttributeLeft,e,t,n[0]),u(NSLayoutAttributeTop,e,t,n[1]),u(NSLayoutAttributeRight,e,t,n[2]),u(NSLayoutAttributeBottom,e,t,n[3])}function l(e,t,n){var u,l,s=(n=n||{}).identifier||NSUUID.UUID().UUIDString(),f=NSThread.mainThread().threadDictionary();if(f[s]){(u=f[s]).makeKeyAndOrderFront(null);for(var p=u.contentView().subviews(),d=0;d<p.length;d++)p[d].isKindOfClass(WebView.class())&&(l=p[d]);if(!l)throw new Error("Tried to reuse panel but couldn't find the webview inside");return{panel:u,eval:l.stringByEvaluatingJavaScriptFromString,webView:l}}u=NSPanel.alloc().init();var v=n.width||240,y=n.height||180;u.setFrame_display(NSMakeRect(n.x||0,n.y||0,v,y),!0),u.setTitle(n.title||e.plugin.name()),n.hideTitleBar&&(u.setTitlebarAppearsTransparent(!0),u.setTitleVisibility(NSWindowTitleHidden)),n.onlyShowCloseButton&&(u.standardWindowButton(NSWindowMiniaturizeButton).setHidden(!0),u.standardWindowButton(NSWindowZoomButton).setHidden(!0));var g=u.standardWindowButton(NSWindowCloseButton);function b(){if(n.onPanelClose&&!1===n.onPanelClose())return;u.close(),f.removeObjectForKey(n.identifier),i.setShouldKeepAround(!1)}g.setCOSJSTargetFunction(b),g.setAction("callAction:"),u.setStyleMask(n.styleMask||(n.resizable?NSTexturedBackgroundWindowMask|NSTitledWindowMask|NSResizableWindowMask|NSClosableWindowMask|NSFullSizeContentViewWindowMask:NSTexturedBackgroundWindowMask|NSTitledWindowMask|NSClosableWindowMask|NSFullSizeContentViewWindowMask)),u.becomeKeyWindow(),u.setLevel(NSFloatingWindowLevel);var h=n.background||NSColor.whiteColor();if(u.setBackgroundColor(h),n.blurredBackground){var S=NSVisualEffectView.alloc().initWithFrame(NSMakeRect(0,0,v,y));S.setAppearance(NSAppearance.appearanceNamed(NSAppearanceNameVibrantLight)),S.setBlendingMode(NSVisualEffectBlendingModeBehindWindow),u.contentView().addSubview(S),c(S,u.contentView(),[0,0,0,0])}if(f[s]=u,!1!==n.shouldKeepAround&&i.setShouldKeepAround(!0),l=WebView.alloc().initWithFrame(NSMakeRect(0,n.hideTitleBar?-24:0,n.width||240,(n.height||180)-(n.hideTitleBar?0:24))),n.frameLoadDelegate||n.handlers){var x,m=n.frameLoadDelegate||{};if(n.handlers)m[a]=function(t,r){var i=t.windowScriptObject().evaluateWebScript("window.location.hash");if((i=o(i)).pluginAction&&i.actionId&&i.actionId!==x&&i.pluginAction in n.handlers){x=i.actionId;try{i.pluginArgs=JSON.parse(i.pluginArgs)}catch(e){}n.handlers[i.pluginAction].apply(e,i.pluginArgs)}};var w=new r(m);l.setFrameLoadDelegate_(w.getClassInstance())}if(n.uiDelegate){var j=new r(n.uiDelegate);l.setUIDelegate_(j.getClassInstance())}return n.blurredBackground?l.setDrawsBackground(!1):(l.setOpaque(!0),l.setBackgroundColor(h)),/^(?!http|localhost|www|file).*\.html?$/.test(t)&&(t=e.plugin.urlForResourceNamed(t).path()),l.setMainFrameURL_(t),u.contentView().addSubview(l),c(l,u.contentView(),[0,n.hideTitleBar?0:24,0,0]),u.center(),u.makeKeyAndOrderFront(null),{panel:u,eval:l.stringByEvaluatingJavaScriptFromString,webView:l,close:b}}l.clean=function(){i.setShouldKeepAround(!1)},e.exports=l},function(module,exports){module.exports=function(selectorHandlerDict,superclass){var uniqueClassName="MochaJSDelegate_DynamicClass_"+NSUUID.UUID().UUIDString(),delegateClassDesc=MOClassDescription.allocateDescriptionForClassWithName_superclass_(uniqueClassName,superclass||NSObject);delegateClassDesc.registerClass();var handlers={};if(this.setHandlerForSelector=function(selectorString,func){var handlerHasBeenSet=selectorString in handlers,selector=NSSelectorFromString(selectorString);if(handlers[selectorString]=func,!handlerHasBeenSet){for(var args=[],regex=/:/g;regex.exec(selectorString);)args.push("arg"+args.length);var dynamicFunction=eval("(function ("+args.join(", ")+") { return handlers[selectorString].apply(this, arguments); })");delegateClassDesc.addInstanceMethodWithSelector_function_(selector,dynamicFunction)}},this.removeHandlerForSelector=function(e){delete handlers[e]},this.getHandlerForSelector=function(e){return handlers[e]},this.getAllHandlers=function(){return handlers},this.getClass=function(){return NSClassFromString(uniqueClassName)},this.getClassInstance=function(){return NSClassFromString(uniqueClassName).new()},"object"==typeof selectorHandlerDict)for(var selectorString in selectorHandlerDict)this.setHandlerForSelector(selectorString,selectorHandlerDict[selectorString])}},function(e,t){e.exports=function(e){if(e=e.split("?")[1])return e=e.split("&").reduce(function(e,t){var n=t.split("=");return 2===n.length&&(e[decodeURIComponent(n[0])]=decodeURIComponent(n[1])),e},{})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(28);Object.defineProperty(t,"mapLayers",{enumerable:!0,get:function(){return u(r).default}});var o=n(69);Object.defineProperty(t,"selectLayers",{enumerable:!0,get:function(){return u(o).default}});var i=n(70);Object.defineProperty(t,"hex2NSColor",{enumerable:!0,get:function(){return u(i).default}});var a=n(71);function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"openURL",{enumerable:!0,get:function(){return u(a).default}})},function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(7)),o=i(n(52));function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=(0,o.default)({Artboard:!1,Page:!1,Group:!1,Text:!1,Shape:!1,Image:!1,SymbolInstance:!1,SymbolMaster:!1,SymbolOverride:!1},n.types),a=[],u=[],c=[];!function e(t){(0,r.default)(t,function(t){a.push(t),t.layers?e(t.layers):u.push(t)})}(t.layers);return(0,r.default)(a,function(e){var t=!0;if(i[e.type]||(t=!1),t&&n.config.Name&&(0,r.default)(n.config.Name,function(n,r){e[r]!==n&&(t=!1)}),t&&n.config.Rect&&(0,r.default)(n.config.Rect,function(n,r){e.frame[r]!==n&&(t=!1)}),t&&n.config.Symbol&&(0,r.default)(n.config.Symbol,function(n,r){e[r]!==n&&(t=!1)}),t&&n.config.Prototyping&&(0,r.default)(n.config.Prototyping,function(n,r){e[r]&&e[r]!==n&&(t=!1)}),t&&n.config.Style){var o=n.config.Style,a=e.style.fills[0],u=e.style.borders[0];t&&o.fillColor&&(a||(t=!1),t&&a.color!==o.fillColor&&(t=!1)),t&&o.fillType&&(a||(t=!1),t&&a.fill!==o.fillType&&(t=!1)),t&&o.borderColor&&(u||(t=!1),t&&u.color!==o.borderColor&&(t=!1)),t&&o.borderThickness&&(u||(t=!1),t&&u.thickness!==o.borderThickness&&(t=!1))}t&&c.push(e)}),e.log("Filter",JSON.stringify(c)),c}}).call(t,n(0))},function(e,t){e.exports=function(e,t){for(var n=-1,r=null==e?0:e.length;++n<r&&!1!==t(e[n],n,e););return e}},function(e,t,n){var r=n(31),o=n(50)(r);e.exports=o},function(e,t,n){var r=n(32),o=n(8);e.exports=function(e,t){return e&&r(e,t,o)}},function(e,t,n){var r=n(33)();e.exports=r},function(e,t){e.exports=function(e){return function(t,n,r){for(var o=-1,i=Object(t),a=r(t),u=a.length;u--;){var c=a[e?u:++o];if(!1===n(i[c],c,i))break}return t}}},function(e,t,n){var r=n(35),o=n(36),i=n(11),a=n(41),u=n(13),c=n(43),l=Object.prototype.hasOwnProperty;e.exports=function(e,t){var n=i(e),s=!n&&o(e),f=!n&&!s&&a(e),p=!n&&!s&&!f&&c(e),d=n||s||f||p,v=d?r(e.length,String):[],y=v.length;for(var g in e)!t&&!l.call(e,g)||d&&("length"==g||f&&("offset"==g||"parent"==g)||p&&("buffer"==g||"byteLength"==g||"byteOffset"==g)||u(g,y))||v.push(g);return v}},function(e,t){e.exports=function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}},function(e,t,n){var r=n(37),o=n(4),i=Object.prototype,a=i.hasOwnProperty,u=i.propertyIsEnumerable,c=r(function(){return arguments}())?r:function(e){return o(e)&&a.call(e,"callee")&&!u.call(e,"callee")};e.exports=c},function(e,t,n){var r=n(2),o=n(4),i="[object Arguments]";e.exports=function(e){return o(e)&&r(e)==i}},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){var r=n(9),o=Object.prototype,i=o.hasOwnProperty,a=o.toString,u=r?r.toStringTag:void 0;e.exports=function(e){var t=i.call(e,u),n=e[u];try{e[u]=void 0;var r=!0}catch(e){}var o=a.call(e);return r&&(t?e[u]=n:delete e[u]),o}},function(e,t){var n=Object.prototype.toString;e.exports=function(e){return n.call(e)}},function(e,t,n){(function(e){var r=n(3),o=n(42),i="object"==typeof t&&t&&!t.nodeType&&t,a=i&&"object"==typeof e&&e&&!e.nodeType&&e,u=a&&a.exports===i?r.Buffer:void 0,c=(u?u.isBuffer:void 0)||o;e.exports=c}).call(t,n(12)(e))},function(e,t){e.exports=function(){return!1}},function(e,t,n){var r=n(44),o=n(45),i=n(46),a=i&&i.isTypedArray,u=a?o(a):r;e.exports=u},function(e,t,n){var r=n(2),o=n(14),i=n(4),a={};a["[object Float32Array]"]=a["[object Float64Array]"]=a["[object Int8Array]"]=a["[object Int16Array]"]=a["[object Int32Array]"]=a["[object Uint8Array]"]=a["[object Uint8ClampedArray]"]=a["[object Uint16Array]"]=a["[object Uint32Array]"]=!0,a["[object Arguments]"]=a["[object Array]"]=a["[object ArrayBuffer]"]=a["[object Boolean]"]=a["[object DataView]"]=a["[object Date]"]=a["[object Error]"]=a["[object Function]"]=a["[object Map]"]=a["[object Number]"]=a["[object Object]"]=a["[object RegExp]"]=a["[object Set]"]=a["[object String]"]=a["[object WeakMap]"]=!1,e.exports=function(e){return i(e)&&o(e.length)&&!!a[r(e)]}},function(e,t){e.exports=function(e){return function(t){return e(t)}}},function(e,t,n){(function(e){var r=n(10),o="object"==typeof t&&t&&!t.nodeType&&t,i=o&&"object"==typeof e&&e&&!e.nodeType&&e,a=i&&i.exports===o&&r.process,u=function(){try{return a&&a.binding&&a.binding("util")}catch(e){}}();e.exports=u}).call(t,n(12)(e))},function(e,t,n){var r=n(15),o=n(48),i=Object.prototype.hasOwnProperty;e.exports=function(e){if(!r(e))return o(e);var t=[];for(var n in Object(e))i.call(e,n)&&"constructor"!=n&&t.push(n);return t}},function(e,t,n){var r=n(49)(Object.keys,Object);e.exports=r},function(e,t){e.exports=function(e,t){return function(n){return e(t(n))}}},function(e,t,n){var r=n(1);e.exports=function(e,t){return function(n,o){if(null==n)return n;if(!r(n))return e(n,o);for(var i=n.length,a=t?i:-1,u=Object(n);(t?a--:++a<i)&&!1!==o(u[a],a,u););return n}}},function(e,t,n){var r=n(6);e.exports=function(e){return"function"==typeof e?e:r}},function(e,t,n){var r=n(17),o=n(59),i=n(60),a=n(1),u=n(15),c=n(8),l=Object.prototype.hasOwnProperty,s=i(function(e,t){if(u(t)||a(t))o(t,c(t),e);else for(var n in t)l.call(t,n)&&r(e,n,t[n])});e.exports=s},function(e,t,n){var r=n(54),o=n(58);e.exports=function(e,t){var n=o(e,t);return r(n)?n:void 0}},function(e,t,n){var r=n(16),o=n(55),i=n(5),a=n(57),u=/^\[object .+?Constructor\]$/,c=Function.prototype,l=Object.prototype,s=c.toString,f=l.hasOwnProperty,p=RegExp("^"+s.call(f).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");e.exports=function(e){return!(!i(e)||o(e))&&(r(e)?p:u).test(a(e))}},function(e,t,n){var r,o=n(56),i=(r=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||""))?"Symbol(src)_1."+r:"";e.exports=function(e){return!!i&&i in e}},function(e,t,n){var r=n(3)["__core-js_shared__"];e.exports=r},function(e,t){var n=Function.prototype.toString;e.exports=function(e){if(null!=e){try{return n.call(e)}catch(e){}try{return e+""}catch(e){}}return""}},function(e,t){e.exports=function(e,t){return null==e?void 0:e[t]}},function(e,t,n){var r=n(17),o=n(18);e.exports=function(e,t,n,i){var a=!n;n||(n={});for(var u=-1,c=t.length;++u<c;){var l=t[u],s=i?i(n[l],e[l],l,n,e):void 0;void 0===s&&(s=e[l]),a?o(n,l,s):r(n,l,s)}return n}},function(e,t,n){var r=n(61),o=n(68);e.exports=function(e){return r(function(t,n){var r=-1,i=n.length,a=i>1?n[i-1]:void 0,u=i>2?n[2]:void 0;for(a=e.length>3&&"function"==typeof a?(i--,a):void 0,u&&o(n[0],n[1],u)&&(a=i<3?void 0:a,i=1),t=Object(t);++r<i;){var c=n[r];c&&e(t,c,r,a)}return t})}},function(e,t,n){var r=n(6),o=n(62),i=n(64);e.exports=function(e,t){return i(o(e,t,r),e+"")}},function(e,t,n){var r=n(63),o=Math.max;e.exports=function(e,t,n){return t=o(void 0===t?e.length-1:t,0),function(){for(var i=arguments,a=-1,u=o(i.length-t,0),c=Array(u);++a<u;)c[a]=i[t+a];a=-1;for(var l=Array(t+1);++a<t;)l[a]=i[a];return l[t]=n(c),r(e,this,l)}}},function(e,t){e.exports=function(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}},function(e,t,n){var r=n(65),o=n(67)(r);e.exports=o},function(e,t,n){var r=n(66),o=n(19),i=n(6),a=o?function(e,t){return o(e,"toString",{configurable:!0,enumerable:!1,value:r(t),writable:!0})}:i;e.exports=a},function(e,t){e.exports=function(e){return function(){return e}}},function(e,t){var n=800,r=16,o=Date.now;e.exports=function(e){var t=0,i=0;return function(){var a=o(),u=r-(a-i);if(i=a,u>0){if(++t>=n)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}},function(e,t,n){var r=n(20),o=n(1),i=n(13),a=n(5);e.exports=function(e,t,n){if(!a(n))return!1;var u=typeof t;return!!("number"==u?o(n)&&i(t,n.length):"string"==u&&t in n)&&r(n[t],e)}},function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(7),i=(r=o)&&r.__esModule?r:{default:r};t.default=function(t){try{(0,i.default)(t,function(e){return e.selected=!0})}catch(t){e.log(t)}}}).call(t,n(0))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=parseInt(e.substring(0,2),16)/255,n=parseInt(e.substring(2,4),16)/255,r=parseInt(e.substring(4,6),16)/255;return NSColor.colorWithRed_green_blue_alpha(t,n,r,1)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return NSWorkspace.sharedWorkspace().openURL(NSURL.URLWithString(e))}}]);"default"===key&&"function"==typeof exports?exports(context):exports[key](context)}that.onRun=__skpm_run.bind(this,"default");