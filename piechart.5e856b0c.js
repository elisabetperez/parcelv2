!function(e,n,t,r,o){var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i="function"==typeof a[r]&&a[r],u=i.cache||{},f="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function d(n,t){if(!u[n]){if(!e[n]){var o="function"==typeof a[r]&&a[r];if(!t&&o)return o(n,!0);if(i)return i(n,!0);if(f&&"string"==typeof n)return f(n);var l=new Error("Cannot find module '"+n+"'");throw l.code="MODULE_NOT_FOUND",l}c.resolve=function(t){var r=e[n][1][t];return null!=r?r:t},c.cache={};var s=u[n]=new d.Module(n);e[n][0].call(s.exports,c,s,s.exports,this)}return u[n].exports;function c(e){var n=c.resolve(e);return!1===n?{}:d(n)}}d.isParcelRequire=!0,d.Module=function(e){this.id=e,this.bundle=d,this.exports={}},d.modules=e,d.cache=u,d.parent=i,d.register=function(n,t){e[n]=[function(e,n){n.exports=t},{}]},Object.defineProperty(d,"root",{get:function(){return a[r]}}),a[r]=d;for(var l=0;l<n.length;l++)d(n[l]);if(t){var s=d(t);"object"==typeof exports&&"undefined"!=typeof module?module.exports=s:"function"==typeof define&&define.amd&&define((function(){return s}))}}({"40r7P":[function(e,n,t){var r=e("@parcel/transformer-js/src/esmodule-helpers.js"),o=(e("../index.scss"),e("d3")),a=e("../data.json"),i=r.interopDefault(a);const u=document.querySelector("#years");let f;u.addEventListener("change",(()=>{"2020"==u.value&&(f=i.default.twenty),"2021"==u.value&&(f=i.default.twentyOne),function(e){console.log(e);const n=e.map((e=>e.percent)),t=e.map((e=>e.color)),r=o.select("#pie-chart"),a=500,i=500,u=Math.min(a,i)/2,f=r.append("g").attr("transform","translate("+a/2+","+i/2+")"),d=o.scaleOrdinal(t),l=o.pie(),s=o.arc().innerRadius(0).outerRadius(u);f.selectAll("arc").data(l(n)).enter().append("g").attr("class","arc").append("path").attr("fill",(function(e,n){return d(n)})).attr("d",s)}(f)}))},{"../index.scss":"aHJG4",d3:"2fEok","../data.json":"iFvjd","@parcel/transformer-js/src/esmodule-helpers.js":"XTfsy"}],aHJG4:[function(){},{}]},["40r7P"],"40r7P","parcelRequire8311");