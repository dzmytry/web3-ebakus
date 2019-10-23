/*!
 * Extend Web3 for Ebakus Blockchain v0.1.1
 *
 * @author Ebakus AG <chris@ebakus.com>
 * @website https://www.ebakus.com/
 *
 * @copyright Ebakus 2019
 * @license MIT
 */
!(function(t, r) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = r())
    : 'function' == typeof define && define.amd
    ? define([], r)
    : 'object' == typeof exports
    ? (exports['web3-ebakus'] = r())
    : (t.Web3Ebakus = r())
})(this, function() {
  return (function(t) {
    var r = {}
    function e(n) {
      if (r[n]) return r[n].exports
      var o = (r[n] = { i: n, l: !1, exports: {} })
      return t[n].call(o.exports, o, o.exports, e), (o.l = !0), o.exports
    }
    return (
      (e.m = t),
      (e.c = r),
      (e.d = function(t, r, n) {
        e.o(t, r) || Object.defineProperty(t, r, { enumerable: !0, get: n })
      }),
      (e.r = function(t) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(t, '__esModule', { value: !0 })
      }),
      (e.t = function(t, r) {
        if ((1 & r && (t = e(t)), 8 & r)) return t
        if (4 & r && 'object' == typeof t && t && t.__esModule) return t
        var n = Object.create(null)
        if (
          (e.r(n),
          Object.defineProperty(n, 'default', { enumerable: !0, value: t }),
          2 & r && 'string' != typeof t)
        )
          for (var o in t)
            e.d(
              n,
              o,
              function(r) {
                return t[r]
              }.bind(null, o)
            )
        return n
      }),
      (e.n = function(t) {
        var r =
          t && t.__esModule
            ? function() {
                return t.default
              }
            : function() {
                return t
              }
        return e.d(r, 'a', r), r
      }),
      (e.o = function(t, r) {
        return Object.prototype.hasOwnProperty.call(t, r)
      }),
      (e.p = ''),
      e((e.s = 6))
    )
  })([
    function(t, r) {
      t.exports = require('eth-lib/lib/bytes')
    },
    function(t, r) {
      t.exports = require('eth-lib/lib/rlp')
    },
    function(t, r) {
      t.exports = require('eth-lib/lib/account')
    },
    function(t, r) {
      t.exports = require('eth-lib/lib/hash')
    },
    function(t, r, e) {
      t.exports = function() {
        return e(8)(
          '/*!\n * Extend Web3 for Ebakus Blockchain v0.1.1\n * \n * @author Ebakus AG <chris@ebakus.com>\n * @website https://www.ebakus.com/\n * \n * @copyright Ebakus 2019\n * @license MIT\n */!function(t){var r={};function e(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,e),i.l=!0,i.exports}e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:n})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,r){if(1&r&&(t=e(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var i in t)e.d(n,i,function(r){return t[r]}.bind(null,i));return n},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},e.p="",e(e.s=2)}([function(t,r){const e="0123456789abcdef".split(""),n=[1,256,65536,16777216],i=[0,8,16,24],o=[1,0,32898,0,32906,2147483648,2147516416,2147483648,32907,0,2147483649,0,2147516545,2147483648,32777,2147483648,138,0,136,0,2147516425,0,2147483658,0,2147516555,0,139,2147483648,32905,2147483648,32771,2147483648,32770,2147483648,128,2147483648,32778,0,2147483658,2147483648,2147516545,2147483648,32896,2147483648,2147483649,0,2147516424,2147483648],f=t=>{var r,e,n,i,f,u,s,a,h,c,l,p,g,y,w,d,v,b,A,E,_,m,R,P,B,T,U,S,I,Y,O,k,M,C,x,L,D,N,j,z,F,V,X,q,J,Z,G,H,K,Q,W,$,tt,rt,et,nt,it,ot,ft,ut,st,at,ht;for(n=0;n<48;n+=2)i=t[0]^t[10]^t[20]^t[30]^t[40],f=t[1]^t[11]^t[21]^t[31]^t[41],u=t[2]^t[12]^t[22]^t[32]^t[42],s=t[3]^t[13]^t[23]^t[33]^t[43],a=t[4]^t[14]^t[24]^t[34]^t[44],h=t[5]^t[15]^t[25]^t[35]^t[45],c=t[6]^t[16]^t[26]^t[36]^t[46],l=t[7]^t[17]^t[27]^t[37]^t[47],r=(p=t[8]^t[18]^t[28]^t[38]^t[48])^(u<<1|s>>>31),e=(g=t[9]^t[19]^t[29]^t[39]^t[49])^(s<<1|u>>>31),t[0]^=r,t[1]^=e,t[10]^=r,t[11]^=e,t[20]^=r,t[21]^=e,t[30]^=r,t[31]^=e,t[40]^=r,t[41]^=e,r=i^(a<<1|h>>>31),e=f^(h<<1|a>>>31),t[2]^=r,t[3]^=e,t[12]^=r,t[13]^=e,t[22]^=r,t[23]^=e,t[32]^=r,t[33]^=e,t[42]^=r,t[43]^=e,r=u^(c<<1|l>>>31),e=s^(l<<1|c>>>31),t[4]^=r,t[5]^=e,t[14]^=r,t[15]^=e,t[24]^=r,t[25]^=e,t[34]^=r,t[35]^=e,t[44]^=r,t[45]^=e,r=a^(p<<1|g>>>31),e=h^(g<<1|p>>>31),t[6]^=r,t[7]^=e,t[16]^=r,t[17]^=e,t[26]^=r,t[27]^=e,t[36]^=r,t[37]^=e,t[46]^=r,t[47]^=e,r=c^(i<<1|f>>>31),e=l^(f<<1|i>>>31),t[8]^=r,t[9]^=e,t[18]^=r,t[19]^=e,t[28]^=r,t[29]^=e,t[38]^=r,t[39]^=e,t[48]^=r,t[49]^=e,y=t[0],w=t[1],Z=t[11]<<4|t[10]>>>28,G=t[10]<<4|t[11]>>>28,S=t[20]<<3|t[21]>>>29,I=t[21]<<3|t[20]>>>29,ut=t[31]<<9|t[30]>>>23,st=t[30]<<9|t[31]>>>23,V=t[40]<<18|t[41]>>>14,X=t[41]<<18|t[40]>>>14,C=t[2]<<1|t[3]>>>31,x=t[3]<<1|t[2]>>>31,d=t[13]<<12|t[12]>>>20,v=t[12]<<12|t[13]>>>20,H=t[22]<<10|t[23]>>>22,K=t[23]<<10|t[22]>>>22,Y=t[33]<<13|t[32]>>>19,O=t[32]<<13|t[33]>>>19,at=t[42]<<2|t[43]>>>30,ht=t[43]<<2|t[42]>>>30,rt=t[5]<<30|t[4]>>>2,et=t[4]<<30|t[5]>>>2,L=t[14]<<6|t[15]>>>26,D=t[15]<<6|t[14]>>>26,b=t[25]<<11|t[24]>>>21,A=t[24]<<11|t[25]>>>21,Q=t[34]<<15|t[35]>>>17,W=t[35]<<15|t[34]>>>17,k=t[45]<<29|t[44]>>>3,M=t[44]<<29|t[45]>>>3,P=t[6]<<28|t[7]>>>4,B=t[7]<<28|t[6]>>>4,nt=t[17]<<23|t[16]>>>9,it=t[16]<<23|t[17]>>>9,N=t[26]<<25|t[27]>>>7,j=t[27]<<25|t[26]>>>7,E=t[36]<<21|t[37]>>>11,_=t[37]<<21|t[36]>>>11,$=t[47]<<24|t[46]>>>8,tt=t[46]<<24|t[47]>>>8,q=t[8]<<27|t[9]>>>5,J=t[9]<<27|t[8]>>>5,T=t[18]<<20|t[19]>>>12,U=t[19]<<20|t[18]>>>12,ot=t[29]<<7|t[28]>>>25,ft=t[28]<<7|t[29]>>>25,z=t[38]<<8|t[39]>>>24,F=t[39]<<8|t[38]>>>24,m=t[48]<<14|t[49]>>>18,R=t[49]<<14|t[48]>>>18,t[0]=y^~d&b,t[1]=w^~v&A,t[10]=P^~T&S,t[11]=B^~U&I,t[20]=C^~L&N,t[21]=x^~D&j,t[30]=q^~Z&H,t[31]=J^~G&K,t[40]=rt^~nt&ot,t[41]=et^~it&ft,t[2]=d^~b&E,t[3]=v^~A&_,t[12]=T^~S&Y,t[13]=U^~I&O,t[22]=L^~N&z,t[23]=D^~j&F,t[32]=Z^~H&Q,t[33]=G^~K&W,t[42]=nt^~ot&ut,t[43]=it^~ft&st,t[4]=b^~E&m,t[5]=A^~_&R,t[14]=S^~Y&k,t[15]=I^~O&M,t[24]=N^~z&V,t[25]=j^~F&X,t[34]=H^~Q&$,t[35]=K^~W&tt,t[44]=ot^~ut&at,t[45]=ft^~st&ht,t[6]=E^~m&y,t[7]=_^~R&w,t[16]=Y^~k&P,t[17]=O^~M&B,t[26]=z^~V&C,t[27]=F^~X&x,t[36]=Q^~$&q,t[37]=W^~tt&J,t[46]=ut^~at&rt,t[47]=st^~ht&et,t[8]=m^~y&d,t[9]=R^~w&v,t[18]=k^~P&T,t[19]=M^~B&U,t[28]=V^~C&L,t[29]=X^~x&D,t[38]=$^~q&Z,t[39]=tt^~J&G,t[48]=at^~rt&nt,t[49]=ht^~et&it,t[0]^=o[n],t[1]^=o[n+1]},u=t=>r=>{var o;if("0x"===r.slice(0,2)){o=[];for(var u=2,s=r.length;u<s;u+=2)o.push(parseInt(r.slice(u,u+2),16))}else o=r;return((t,r)=>{for(var o,u=r.length,s=t.blocks,a=t.blockCount<<2,h=t.blockCount,c=t.outputBlocks,l=t.s,p=0;p<u;){if(t.reset)for(t.reset=!1,s[0]=t.block,w=1;w<h+1;++w)s[w]=0;if("string"!=typeof r)for(w=t.start;p<u&&w<a;++p)s[w>>2]|=r[p]<<i[3&w++];else for(w=t.start;p<u&&w<a;++p)(o=r.charCodeAt(p))<128?s[w>>2]|=o<<i[3&w++]:o<2048?(s[w>>2]|=(192|o>>6)<<i[3&w++],s[w>>2]|=(128|63&o)<<i[3&w++]):o<55296||o>=57344?(s[w>>2]|=(224|o>>12)<<i[3&w++],s[w>>2]|=(128|o>>6&63)<<i[3&w++],s[w>>2]|=(128|63&o)<<i[3&w++]):(o=65536+((1023&o)<<10|1023&r.charCodeAt(++p)),s[w>>2]|=(240|o>>18)<<i[3&w++],s[w>>2]|=(128|o>>12&63)<<i[3&w++],s[w>>2]|=(128|o>>6&63)<<i[3&w++],s[w>>2]|=(128|63&o)<<i[3&w++]);if(t.lastByteIndex=w,w>=a){for(t.start=w-a,t.block=s[h],w=0;w<h;++w)l[w]^=s[w];f(l),t.reset=!0}else t.start=w}if(s[(w=t.lastByteIndex)>>2]|=n[3&w],t.lastByteIndex===a)for(s[0]=s[h],w=1;w<h+1;++w)s[w]=0;for(s[h-1]|=2147483648,w=0;w<h;++w)l[w]^=s[w];f(l);for(var g,y="",w=0,d=0;d<c;){for(w=0;w<h&&d<c;++w,++d)g=l[w],y+=e[g>>4&15]+e[15&g]+e[g>>12&15]+e[g>>8&15]+e[g>>20&15]+e[g>>16&15]+e[g>>28&15]+e[g>>24&15];d%h==0&&(f(l),w=0)}return"0x"+y})((t=>({blocks:[],reset:!0,block:0,start:0,blockCount:1600-(t<<1)>>5,outputBlocks:t>>5,s:(t=>[].concat(t,t,t,t,t))([0,0,0,0,0,0,0,0,0,0])}))(t),o)};t.exports={keccak256:u(256),keccak512:u(512),keccak256s:u(256),keccak512s:u(512)}},function(t,r){t.exports=function(t){for(var r=0,e=0;e<t.length;e++,r+=8)if(0!==t[e]){r+=Math.clz32(t[e])-24;break}return r}},function(t,r,e){"use strict";e.r(r),function(t){var r=e(1),n=e.n(r),i=e(0);onmessage=function(r){var e,o,f=r.data,u=f.hash,s=f.targetDifficulty,a=0,h=(500,e=function(){postMessage({cmd:"current",workNonce:a})},o=0,function(){var t=(new Date).getTime();if(!(t-o<500))return o=t,e.apply(void 0,arguments)});!function(){var r=Math.log2(s),e=r=Math.ceil(r),o=new ArrayBuffer(128),f=new Uint8Array(o,64,64),c=new Uint8Array(new t(Object(i.keccak256)(u).slice(2),"hex"));f.set(c);var l=new DataView(o,f.byteOffset,f.byteLength),p=0;do{l.setUint32(60,a);var g=new Uint8Array(new t(Object(i.keccak256)(f).slice(2),"hex")),y=n()(g);if(y>p&&(p=y)>=e)break;a++,h()}while(p<=e)}(),postMessage({cmd:"finished",workNonce:a})},postMessage({cmd:"ready"})}.call(this,e(3).Buffer)},function(t,r,e){"use strict";(function(t){\n/*!\n * The buffer module from node.js, for the browser.\n *\n * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>\n * @license  MIT\n */\nvar n=e(5),i=e(6),o=e(7);function f(){return s.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function u(t,r){if(f()<r)throw new RangeError("Invalid typed array length");return s.TYPED_ARRAY_SUPPORT?(t=new Uint8Array(r)).__proto__=s.prototype:(null===t&&(t=new s(r)),t.length=r),t}function s(t,r,e){if(!(s.TYPED_ARRAY_SUPPORT||this instanceof s))return new s(t,r,e);if("number"==typeof t){if("string"==typeof r)throw new Error("If encoding is specified then the first argument must be a string");return c(this,t)}return a(this,t,r,e)}function a(t,r,e,n){if("number"==typeof r)throw new TypeError(\'"value" argument must not be a number\');return"undefined"!=typeof ArrayBuffer&&r instanceof ArrayBuffer?function(t,r,e,n){if(r.byteLength,e<0||r.byteLength<e)throw new RangeError("\'offset\' is out of bounds");if(r.byteLength<e+(n||0))throw new RangeError("\'length\' is out of bounds");return r=void 0===e&&void 0===n?new Uint8Array(r):void 0===n?new Uint8Array(r,e):new Uint8Array(r,e,n),s.TYPED_ARRAY_SUPPORT?(t=r).__proto__=s.prototype:t=l(t,r),t}(t,r,e,n):"string"==typeof r?function(t,r,e){if("string"==typeof e&&""!==e||(e="utf8"),!s.isEncoding(e))throw new TypeError(\'"encoding" must be a valid string encoding\');var n=0|g(r,e),i=(t=u(t,n)).write(r,e);return i!==n&&(t=t.slice(0,i)),t}(t,r,e):function(t,r){if(s.isBuffer(r)){var e=0|p(r.length);return 0===(t=u(t,e)).length?t:(r.copy(t,0,0,e),t)}if(r){if("undefined"!=typeof ArrayBuffer&&r.buffer instanceof ArrayBuffer||"length"in r)return"number"!=typeof r.length||(n=r.length)!=n?u(t,0):l(t,r);if("Buffer"===r.type&&o(r.data))return l(t,r.data)}var n;throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(t,r)}function h(t){if("number"!=typeof t)throw new TypeError(\'"size" argument must be a number\');if(t<0)throw new RangeError(\'"size" argument must not be negative\')}function c(t,r){if(h(r),t=u(t,r<0?0:0|p(r)),!s.TYPED_ARRAY_SUPPORT)for(var e=0;e<r;++e)t[e]=0;return t}function l(t,r){var e=r.length<0?0:0|p(r.length);t=u(t,e);for(var n=0;n<e;n+=1)t[n]=255&r[n];return t}function p(t){if(t>=f())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+f().toString(16)+" bytes");return 0|t}function g(t,r){if(s.isBuffer(t))return t.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer))return t.byteLength;"string"!=typeof t&&(t=""+t);var e=t.length;if(0===e)return 0;for(var n=!1;;)switch(r){case"ascii":case"latin1":case"binary":return e;case"utf8":case"utf-8":case void 0:return j(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*e;case"hex":return e>>>1;case"base64":return z(t).length;default:if(n)return j(t).length;r=(""+r).toLowerCase(),n=!0}}function y(t,r,e){var n=!1;if((void 0===r||r<0)&&(r=0),r>this.length)return"";if((void 0===e||e>this.length)&&(e=this.length),e<=0)return"";if((e>>>=0)<=(r>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return I(this,r,e);case"utf8":case"utf-8":return B(this,r,e);case"ascii":return U(this,r,e);case"latin1":case"binary":return S(this,r,e);case"base64":return P(this,r,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Y(this,r,e);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}function w(t,r,e){var n=t[r];t[r]=t[e],t[e]=n}function d(t,r,e,n,i){if(0===t.length)return-1;if("string"==typeof e?(n=e,e=0):e>2147483647?e=2147483647:e<-2147483648&&(e=-2147483648),e=+e,isNaN(e)&&(e=i?0:t.length-1),e<0&&(e=t.length+e),e>=t.length){if(i)return-1;e=t.length-1}else if(e<0){if(!i)return-1;e=0}if("string"==typeof r&&(r=s.from(r,n)),s.isBuffer(r))return 0===r.length?-1:v(t,r,e,n,i);if("number"==typeof r)return r&=255,s.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(t,r,e):Uint8Array.prototype.lastIndexOf.call(t,r,e):v(t,[r],e,n,i);throw new TypeError("val must be string, number or Buffer")}function v(t,r,e,n,i){var o,f=1,u=t.length,s=r.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||r.length<2)return-1;f=2,u/=2,s/=2,e/=2}function a(t,r){return 1===f?t[r]:t.readUInt16BE(r*f)}if(i){var h=-1;for(o=e;o<u;o++)if(a(t,o)===a(r,-1===h?0:o-h)){if(-1===h&&(h=o),o-h+1===s)return h*f}else-1!==h&&(o-=o-h),h=-1}else for(e+s>u&&(e=u-s),o=e;o>=0;o--){for(var c=!0,l=0;l<s;l++)if(a(t,o+l)!==a(r,l)){c=!1;break}if(c)return o}return-1}function b(t,r,e,n){e=Number(e)||0;var i=t.length-e;n?(n=Number(n))>i&&(n=i):n=i;var o=r.length;if(o%2!=0)throw new TypeError("Invalid hex string");n>o/2&&(n=o/2);for(var f=0;f<n;++f){var u=parseInt(r.substr(2*f,2),16);if(isNaN(u))return f;t[e+f]=u}return f}function A(t,r,e,n){return F(j(r,t.length-e),t,e,n)}function E(t,r,e,n){return F(function(t){for(var r=[],e=0;e<t.length;++e)r.push(255&t.charCodeAt(e));return r}(r),t,e,n)}function _(t,r,e,n){return E(t,r,e,n)}function m(t,r,e,n){return F(z(r),t,e,n)}function R(t,r,e,n){return F(function(t,r){for(var e,n,i,o=[],f=0;f<t.length&&!((r-=2)<0);++f)n=(e=t.charCodeAt(f))>>8,i=e%256,o.push(i),o.push(n);return o}(r,t.length-e),t,e,n)}function P(t,r,e){return 0===r&&e===t.length?n.fromByteArray(t):n.fromByteArray(t.slice(r,e))}function B(t,r,e){e=Math.min(t.length,e);for(var n=[],i=r;i<e;){var o,f,u,s,a=t[i],h=null,c=a>239?4:a>223?3:a>191?2:1;if(i+c<=e)switch(c){case 1:a<128&&(h=a);break;case 2:128==(192&(o=t[i+1]))&&(s=(31&a)<<6|63&o)>127&&(h=s);break;case 3:o=t[i+1],f=t[i+2],128==(192&o)&&128==(192&f)&&(s=(15&a)<<12|(63&o)<<6|63&f)>2047&&(s<55296||s>57343)&&(h=s);break;case 4:o=t[i+1],f=t[i+2],u=t[i+3],128==(192&o)&&128==(192&f)&&128==(192&u)&&(s=(15&a)<<18|(63&o)<<12|(63&f)<<6|63&u)>65535&&s<1114112&&(h=s)}null===h?(h=65533,c=1):h>65535&&(h-=65536,n.push(h>>>10&1023|55296),h=56320|1023&h),n.push(h),i+=c}return function(t){var r=t.length;if(r<=T)return String.fromCharCode.apply(String,t);for(var e="",n=0;n<r;)e+=String.fromCharCode.apply(String,t.slice(n,n+=T));return e}(n)}r.Buffer=s,r.SlowBuffer=function(t){return+t!=t&&(t=0),s.alloc(+t)},r.INSPECT_MAX_BYTES=50,s.TYPED_ARRAY_SUPPORT=void 0!==t.TYPED_ARRAY_SUPPORT?t.TYPED_ARRAY_SUPPORT:function(){try{var t=new Uint8Array(1);return t.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===t.foo()&&"function"==typeof t.subarray&&0===t.subarray(1,1).byteLength}catch(t){return!1}}(),r.kMaxLength=f(),s.poolSize=8192,s._augment=function(t){return t.__proto__=s.prototype,t},s.from=function(t,r,e){return a(null,t,r,e)},s.TYPED_ARRAY_SUPPORT&&(s.prototype.__proto__=Uint8Array.prototype,s.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&s[Symbol.species]===s&&Object.defineProperty(s,Symbol.species,{value:null,configurable:!0})),s.alloc=function(t,r,e){return function(t,r,e,n){return h(r),r<=0?u(null,r):void 0!==e?"string"==typeof n?u(null,r).fill(e,n):u(null,r).fill(e):u(null,r)}(0,t,r,e)},s.allocUnsafe=function(t){return c(null,t)},s.allocUnsafeSlow=function(t){return c(null,t)},s.isBuffer=function(t){return!(null==t||!t._isBuffer)},s.compare=function(t,r){if(!s.isBuffer(t)||!s.isBuffer(r))throw new TypeError("Arguments must be Buffers");if(t===r)return 0;for(var e=t.length,n=r.length,i=0,o=Math.min(e,n);i<o;++i)if(t[i]!==r[i]){e=t[i],n=r[i];break}return e<n?-1:n<e?1:0},s.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},s.concat=function(t,r){if(!o(t))throw new TypeError(\'"list" argument must be an Array of Buffers\');if(0===t.length)return s.alloc(0);var e;if(void 0===r)for(r=0,e=0;e<t.length;++e)r+=t[e].length;var n=s.allocUnsafe(r),i=0;for(e=0;e<t.length;++e){var f=t[e];if(!s.isBuffer(f))throw new TypeError(\'"list" argument must be an Array of Buffers\');f.copy(n,i),i+=f.length}return n},s.byteLength=g,s.prototype._isBuffer=!0,s.prototype.swap16=function(){var t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var r=0;r<t;r+=2)w(this,r,r+1);return this},s.prototype.swap32=function(){var t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var r=0;r<t;r+=4)w(this,r,r+3),w(this,r+1,r+2);return this},s.prototype.swap64=function(){var t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var r=0;r<t;r+=8)w(this,r,r+7),w(this,r+1,r+6),w(this,r+2,r+5),w(this,r+3,r+4);return this},s.prototype.toString=function(){var t=0|this.length;return 0===t?"":0===arguments.length?B(this,0,t):y.apply(this,arguments)},s.prototype.equals=function(t){if(!s.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===s.compare(this,t)},s.prototype.inspect=function(){var t="",e=r.INSPECT_MAX_BYTES;return this.length>0&&(t=this.toString("hex",0,e).match(/.{2}/g).join(" "),this.length>e&&(t+=" ... ")),"<Buffer "+t+">"},s.prototype.compare=function(t,r,e,n,i){if(!s.isBuffer(t))throw new TypeError("Argument must be a Buffer");if(void 0===r&&(r=0),void 0===e&&(e=t?t.length:0),void 0===n&&(n=0),void 0===i&&(i=this.length),r<0||e>t.length||n<0||i>this.length)throw new RangeError("out of range index");if(n>=i&&r>=e)return 0;if(n>=i)return-1;if(r>=e)return 1;if(this===t)return 0;for(var o=(i>>>=0)-(n>>>=0),f=(e>>>=0)-(r>>>=0),u=Math.min(o,f),a=this.slice(n,i),h=t.slice(r,e),c=0;c<u;++c)if(a[c]!==h[c]){o=a[c],f=h[c];break}return o<f?-1:f<o?1:0},s.prototype.includes=function(t,r,e){return-1!==this.indexOf(t,r,e)},s.prototype.indexOf=function(t,r,e){return d(this,t,r,e,!0)},s.prototype.lastIndexOf=function(t,r,e){return d(this,t,r,e,!1)},s.prototype.write=function(t,r,e,n){if(void 0===r)n="utf8",e=this.length,r=0;else if(void 0===e&&"string"==typeof r)n=r,e=this.length,r=0;else{if(!isFinite(r))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");r|=0,isFinite(e)?(e|=0,void 0===n&&(n="utf8")):(n=e,e=void 0)}var i=this.length-r;if((void 0===e||e>i)&&(e=i),t.length>0&&(e<0||r<0)||r>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var o=!1;;)switch(n){case"hex":return b(this,t,r,e);case"utf8":case"utf-8":return A(this,t,r,e);case"ascii":return E(this,t,r,e);case"latin1":case"binary":return _(this,t,r,e);case"base64":return m(this,t,r,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return R(this,t,r,e);default:if(o)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),o=!0}},s.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var T=4096;function U(t,r,e){var n="";e=Math.min(t.length,e);for(var i=r;i<e;++i)n+=String.fromCharCode(127&t[i]);return n}function S(t,r,e){var n="";e=Math.min(t.length,e);for(var i=r;i<e;++i)n+=String.fromCharCode(t[i]);return n}function I(t,r,e){var n,i=t.length;(!r||r<0)&&(r=0),(!e||e<0||e>i)&&(e=i);for(var o="",f=r;f<e;++f)o+=(n=t[f])<16?"0"+n.toString(16):n.toString(16);return o}function Y(t,r,e){for(var n=t.slice(r,e),i="",o=0;o<n.length;o+=2)i+=String.fromCharCode(n[o]+256*n[o+1]);return i}function O(t,r,e){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+r>e)throw new RangeError("Trying to access beyond buffer length")}function k(t,r,e,n,i,o){if(!s.isBuffer(t))throw new TypeError(\'"buffer" argument must be a Buffer instance\');if(r>i||r<o)throw new RangeError(\'"value" argument is out of bounds\');if(e+n>t.length)throw new RangeError("Index out of range")}function M(t,r,e,n){r<0&&(r=65535+r+1);for(var i=0,o=Math.min(t.length-e,2);i<o;++i)t[e+i]=(r&255<<8*(n?i:1-i))>>>8*(n?i:1-i)}function C(t,r,e,n){r<0&&(r=4294967295+r+1);for(var i=0,o=Math.min(t.length-e,4);i<o;++i)t[e+i]=r>>>8*(n?i:3-i)&255}function x(t,r,e,n,i,o){if(e+n>t.length)throw new RangeError("Index out of range");if(e<0)throw new RangeError("Index out of range")}function L(t,r,e,n,o){return o||x(t,0,e,4),i.write(t,r,e,n,23,4),e+4}function D(t,r,e,n,o){return o||x(t,0,e,8),i.write(t,r,e,n,52,8),e+8}s.prototype.slice=function(t,r){var e,n=this.length;if((t=~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),(r=void 0===r?n:~~r)<0?(r+=n)<0&&(r=0):r>n&&(r=n),r<t&&(r=t),s.TYPED_ARRAY_SUPPORT)(e=this.subarray(t,r)).__proto__=s.prototype;else{var i=r-t;e=new s(i,void 0);for(var o=0;o<i;++o)e[o]=this[o+t]}return e},s.prototype.readUIntLE=function(t,r,e){t|=0,r|=0,e||O(t,r,this.length);for(var n=this[t],i=1,o=0;++o<r&&(i*=256);)n+=this[t+o]*i;return n},s.prototype.readUIntBE=function(t,r,e){t|=0,r|=0,e||O(t,r,this.length);for(var n=this[t+--r],i=1;r>0&&(i*=256);)n+=this[t+--r]*i;return n},s.prototype.readUInt8=function(t,r){return r||O(t,1,this.length),this[t]},s.prototype.readUInt16LE=function(t,r){return r||O(t,2,this.length),this[t]|this[t+1]<<8},s.prototype.readUInt16BE=function(t,r){return r||O(t,2,this.length),this[t]<<8|this[t+1]},s.prototype.readUInt32LE=function(t,r){return r||O(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},s.prototype.readUInt32BE=function(t,r){return r||O(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},s.prototype.readIntLE=function(t,r,e){t|=0,r|=0,e||O(t,r,this.length);for(var n=this[t],i=1,o=0;++o<r&&(i*=256);)n+=this[t+o]*i;return n>=(i*=128)&&(n-=Math.pow(2,8*r)),n},s.prototype.readIntBE=function(t,r,e){t|=0,r|=0,e||O(t,r,this.length);for(var n=r,i=1,o=this[t+--n];n>0&&(i*=256);)o+=this[t+--n]*i;return o>=(i*=128)&&(o-=Math.pow(2,8*r)),o},s.prototype.readInt8=function(t,r){return r||O(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},s.prototype.readInt16LE=function(t,r){r||O(t,2,this.length);var e=this[t]|this[t+1]<<8;return 32768&e?4294901760|e:e},s.prototype.readInt16BE=function(t,r){r||O(t,2,this.length);var e=this[t+1]|this[t]<<8;return 32768&e?4294901760|e:e},s.prototype.readInt32LE=function(t,r){return r||O(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},s.prototype.readInt32BE=function(t,r){return r||O(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},s.prototype.readFloatLE=function(t,r){return r||O(t,4,this.length),i.read(this,t,!0,23,4)},s.prototype.readFloatBE=function(t,r){return r||O(t,4,this.length),i.read(this,t,!1,23,4)},s.prototype.readDoubleLE=function(t,r){return r||O(t,8,this.length),i.read(this,t,!0,52,8)},s.prototype.readDoubleBE=function(t,r){return r||O(t,8,this.length),i.read(this,t,!1,52,8)},s.prototype.writeUIntLE=function(t,r,e,n){t=+t,r|=0,e|=0,n||k(this,t,r,e,Math.pow(2,8*e)-1,0);var i=1,o=0;for(this[r]=255&t;++o<e&&(i*=256);)this[r+o]=t/i&255;return r+e},s.prototype.writeUIntBE=function(t,r,e,n){t=+t,r|=0,e|=0,n||k(this,t,r,e,Math.pow(2,8*e)-1,0);var i=e-1,o=1;for(this[r+i]=255&t;--i>=0&&(o*=256);)this[r+i]=t/o&255;return r+e},s.prototype.writeUInt8=function(t,r,e){return t=+t,r|=0,e||k(this,t,r,1,255,0),s.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),this[r]=255&t,r+1},s.prototype.writeUInt16LE=function(t,r,e){return t=+t,r|=0,e||k(this,t,r,2,65535,0),s.TYPED_ARRAY_SUPPORT?(this[r]=255&t,this[r+1]=t>>>8):M(this,t,r,!0),r+2},s.prototype.writeUInt16BE=function(t,r,e){return t=+t,r|=0,e||k(this,t,r,2,65535,0),s.TYPED_ARRAY_SUPPORT?(this[r]=t>>>8,this[r+1]=255&t):M(this,t,r,!1),r+2},s.prototype.writeUInt32LE=function(t,r,e){return t=+t,r|=0,e||k(this,t,r,4,4294967295,0),s.TYPED_ARRAY_SUPPORT?(this[r+3]=t>>>24,this[r+2]=t>>>16,this[r+1]=t>>>8,this[r]=255&t):C(this,t,r,!0),r+4},s.prototype.writeUInt32BE=function(t,r,e){return t=+t,r|=0,e||k(this,t,r,4,4294967295,0),s.TYPED_ARRAY_SUPPORT?(this[r]=t>>>24,this[r+1]=t>>>16,this[r+2]=t>>>8,this[r+3]=255&t):C(this,t,r,!1),r+4},s.prototype.writeIntLE=function(t,r,e,n){if(t=+t,r|=0,!n){var i=Math.pow(2,8*e-1);k(this,t,r,e,i-1,-i)}var o=0,f=1,u=0;for(this[r]=255&t;++o<e&&(f*=256);)t<0&&0===u&&0!==this[r+o-1]&&(u=1),this[r+o]=(t/f>>0)-u&255;return r+e},s.prototype.writeIntBE=function(t,r,e,n){if(t=+t,r|=0,!n){var i=Math.pow(2,8*e-1);k(this,t,r,e,i-1,-i)}var o=e-1,f=1,u=0;for(this[r+o]=255&t;--o>=0&&(f*=256);)t<0&&0===u&&0!==this[r+o+1]&&(u=1),this[r+o]=(t/f>>0)-u&255;return r+e},s.prototype.writeInt8=function(t,r,e){return t=+t,r|=0,e||k(this,t,r,1,127,-128),s.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),t<0&&(t=255+t+1),this[r]=255&t,r+1},s.prototype.writeInt16LE=function(t,r,e){return t=+t,r|=0,e||k(this,t,r,2,32767,-32768),s.TYPED_ARRAY_SUPPORT?(this[r]=255&t,this[r+1]=t>>>8):M(this,t,r,!0),r+2},s.prototype.writeInt16BE=function(t,r,e){return t=+t,r|=0,e||k(this,t,r,2,32767,-32768),s.TYPED_ARRAY_SUPPORT?(this[r]=t>>>8,this[r+1]=255&t):M(this,t,r,!1),r+2},s.prototype.writeInt32LE=function(t,r,e){return t=+t,r|=0,e||k(this,t,r,4,2147483647,-2147483648),s.TYPED_ARRAY_SUPPORT?(this[r]=255&t,this[r+1]=t>>>8,this[r+2]=t>>>16,this[r+3]=t>>>24):C(this,t,r,!0),r+4},s.prototype.writeInt32BE=function(t,r,e){return t=+t,r|=0,e||k(this,t,r,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),s.TYPED_ARRAY_SUPPORT?(this[r]=t>>>24,this[r+1]=t>>>16,this[r+2]=t>>>8,this[r+3]=255&t):C(this,t,r,!1),r+4},s.prototype.writeFloatLE=function(t,r,e){return L(this,t,r,!0,e)},s.prototype.writeFloatBE=function(t,r,e){return L(this,t,r,!1,e)},s.prototype.writeDoubleLE=function(t,r,e){return D(this,t,r,!0,e)},s.prototype.writeDoubleBE=function(t,r,e){return D(this,t,r,!1,e)},s.prototype.copy=function(t,r,e,n){if(e||(e=0),n||0===n||(n=this.length),r>=t.length&&(r=t.length),r||(r=0),n>0&&n<e&&(n=e),n===e)return 0;if(0===t.length||0===this.length)return 0;if(r<0)throw new RangeError("targetStart out of bounds");if(e<0||e>=this.length)throw new RangeError("sourceStart out of bounds");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-r<n-e&&(n=t.length-r+e);var i,o=n-e;if(this===t&&e<r&&r<n)for(i=o-1;i>=0;--i)t[i+r]=this[i+e];else if(o<1e3||!s.TYPED_ARRAY_SUPPORT)for(i=0;i<o;++i)t[i+r]=this[i+e];else Uint8Array.prototype.set.call(t,this.subarray(e,e+o),r);return o},s.prototype.fill=function(t,r,e,n){if("string"==typeof t){if("string"==typeof r?(n=r,r=0,e=this.length):"string"==typeof e&&(n=e,e=this.length),1===t.length){var i=t.charCodeAt(0);i<256&&(t=i)}if(void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!s.isEncoding(n))throw new TypeError("Unknown encoding: "+n)}else"number"==typeof t&&(t&=255);if(r<0||this.length<r||this.length<e)throw new RangeError("Out of range index");if(e<=r)return this;var o;if(r>>>=0,e=void 0===e?this.length:e>>>0,t||(t=0),"number"==typeof t)for(o=r;o<e;++o)this[o]=t;else{var f=s.isBuffer(t)?t:j(new s(t,n).toString()),u=f.length;for(o=0;o<e-r;++o)this[o+r]=f[o%u]}return this};var N=/[^+\\/0-9A-Za-z-_]/g;function j(t,r){var e;r=r||1/0;for(var n=t.length,i=null,o=[],f=0;f<n;++f){if((e=t.charCodeAt(f))>55295&&e<57344){if(!i){if(e>56319){(r-=3)>-1&&o.push(239,191,189);continue}if(f+1===n){(r-=3)>-1&&o.push(239,191,189);continue}i=e;continue}if(e<56320){(r-=3)>-1&&o.push(239,191,189),i=e;continue}e=65536+(i-55296<<10|e-56320)}else i&&(r-=3)>-1&&o.push(239,191,189);if(i=null,e<128){if((r-=1)<0)break;o.push(e)}else if(e<2048){if((r-=2)<0)break;o.push(e>>6|192,63&e|128)}else if(e<65536){if((r-=3)<0)break;o.push(e>>12|224,e>>6&63|128,63&e|128)}else{if(!(e<1114112))throw new Error("Invalid code point");if((r-=4)<0)break;o.push(e>>18|240,e>>12&63|128,e>>6&63|128,63&e|128)}}return o}function z(t){return n.toByteArray(function(t){if((t=function(t){return t.trim?t.trim():t.replace(/^\\s+|\\s+$/g,"")}(t).replace(N,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function F(t,r,e,n){for(var i=0;i<n&&!(i+e>=r.length||i>=t.length);++i)r[i+e]=t[i];return i}}).call(this,e(4))},function(t,r){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},function(t,r,e){"use strict";r.byteLength=function(t){var r=a(t),e=r[0],n=r[1];return 3*(e+n)/4-n},r.toByteArray=function(t){var r,e,n=a(t),f=n[0],u=n[1],s=new o(function(t,r,e){return 3*(r+e)/4-e}(0,f,u)),h=0,c=u>0?f-4:f;for(e=0;e<c;e+=4)r=i[t.charCodeAt(e)]<<18|i[t.charCodeAt(e+1)]<<12|i[t.charCodeAt(e+2)]<<6|i[t.charCodeAt(e+3)],s[h++]=r>>16&255,s[h++]=r>>8&255,s[h++]=255&r;return 2===u&&(r=i[t.charCodeAt(e)]<<2|i[t.charCodeAt(e+1)]>>4,s[h++]=255&r),1===u&&(r=i[t.charCodeAt(e)]<<10|i[t.charCodeAt(e+1)]<<4|i[t.charCodeAt(e+2)]>>2,s[h++]=r>>8&255,s[h++]=255&r),s},r.fromByteArray=function(t){for(var r,e=t.length,i=e%3,o=[],f=0,u=e-i;f<u;f+=16383)o.push(h(t,f,f+16383>u?u:f+16383));return 1===i?(r=t[e-1],o.push(n[r>>2]+n[r<<4&63]+"==")):2===i&&(r=(t[e-2]<<8)+t[e-1],o.push(n[r>>10]+n[r>>4&63]+n[r<<2&63]+"=")),o.join("")};for(var n=[],i=[],o="undefined"!=typeof Uint8Array?Uint8Array:Array,f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",u=0,s=f.length;u<s;++u)n[u]=f[u],i[f.charCodeAt(u)]=u;function a(t){var r=t.length;if(r%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var e=t.indexOf("=");return-1===e&&(e=r),[e,e===r?0:4-e%4]}function h(t,r,e){for(var i,o,f=[],u=r;u<e;u+=3)i=(t[u]<<16&16711680)+(t[u+1]<<8&65280)+(255&t[u+2]),f.push(n[(o=i)>>18&63]+n[o>>12&63]+n[o>>6&63]+n[63&o]);return f.join("")}i["-".charCodeAt(0)]=62,i["_".charCodeAt(0)]=63},function(t,r){r.read=function(t,r,e,n,i){var o,f,u=8*i-n-1,s=(1<<u)-1,a=s>>1,h=-7,c=e?i-1:0,l=e?-1:1,p=t[r+c];for(c+=l,o=p&(1<<-h)-1,p>>=-h,h+=u;h>0;o=256*o+t[r+c],c+=l,h-=8);for(f=o&(1<<-h)-1,o>>=-h,h+=n;h>0;f=256*f+t[r+c],c+=l,h-=8);if(0===o)o=1-a;else{if(o===s)return f?NaN:1/0*(p?-1:1);f+=Math.pow(2,n),o-=a}return(p?-1:1)*f*Math.pow(2,o-n)},r.write=function(t,r,e,n,i,o){var f,u,s,a=8*o-i-1,h=(1<<a)-1,c=h>>1,l=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,p=n?0:o-1,g=n?1:-1,y=r<0||0===r&&1/r<0?1:0;for(r=Math.abs(r),isNaN(r)||r===1/0?(u=isNaN(r)?1:0,f=h):(f=Math.floor(Math.log(r)/Math.LN2),r*(s=Math.pow(2,-f))<1&&(f--,s*=2),(r+=f+c>=1?l/s:l*Math.pow(2,1-c))*s>=2&&(f++,s/=2),f+c>=h?(u=0,f=h):f+c>=1?(u=(r*s-1)*Math.pow(2,i),f+=c):(u=r*Math.pow(2,c-1)*Math.pow(2,i),f=0));i>=8;t[e+p]=255&u,p+=g,u/=256,i-=8);for(f=f<<i|u,a+=i;a>0;t[e+p]=255&f,p+=g,f/=256,a-=8);t[e+p-g]|=128*y}},function(t,r){var e={}.toString;t.exports=Array.isArray||function(t){return"[object Array]"==e.call(t)}}]);',
          e.p + 'calculateWorkNonce.worker.js'
        )
      }
    },
    function(t, r) {
      t.exports = require('eth-lib/lib/nat')
    },
    function(t, r, e) {
      e(7), (t.exports = e(9))
    },
    function(t, r) {
      t.exports = require('@babel/polyfill')
    },
    function(t, r, e) {
      'use strict'
      var n = window.URL || window.webkitURL
      t.exports = function(t, r) {
        try {
          try {
            var e
            try {
              ;(e = new (window.BlobBuilder ||
                window.WebKitBlobBuilder ||
                window.MozBlobBuilder ||
                window.MSBlobBuilder)()).append(t),
                (e = e.getBlob())
            } catch (r) {
              e = new Blob([t])
            }
            return new Worker(n.createObjectURL(e))
          } catch (r) {
            return new Worker(
              'data:application/javascript,' + encodeURIComponent(t)
            )
          }
        } catch (t) {
          if (!r) throw Error('Inline worker is not supported')
          return new Worker(r)
        }
      }
    },
    function(t, r, e) {
      'use strict'
      e.r(r)
      var n,
        o = e(0),
        i = e.n(o),
        s = e(1),
        u = e.n(s),
        f = e(4),
        a = e.n(f),
        c = e(2),
        h = e.n(c),
        l = e(3),
        p = e.n(l),
        g = e(5),
        y = e.n(g)
      function w(t, r) {
        var e = Object.keys(t)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t)
          r &&
            (n = n.filter(function(r) {
              return Object.getOwnPropertyDescriptor(t, r).enumerable
            })),
            e.push.apply(e, n)
        }
        return e
      }
      function d(t, r, e) {
        return (
          r in t
            ? Object.defineProperty(t, r, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[r] = e),
          t
        )
      }
      var b = function(t) {
          return null == t
        },
        m = function(t) {
          for (; t && t.startsWith('0x0'); ) t = '0x'.concat(t.slice(3))
          return t
        },
        v = function(t) {
          return t.length % 2 == 1 && (t = t.replace('0x', '0x0')), t
        },
        A = function(t, r, e) {
          var o,
            s = !1
          if (((e = e || function() {}), !t))
            return (
              (s = new Error('No transaction object given!')),
              e(s),
              Promise.reject(s)
            )
          function f(t) {
            if (
              (t.gas || t.gasLimit || (s = new Error('gas is missing')),
              (t.nonce < 0 || t.gas < 0 || t.workNonce < 0 || t.chainId < 0) &&
                (s = new Error(
                  'Gas, gasPrice, nonce or chainId is lower than 0'
                )),
              s)
            )
              return e(s), Promise.reject(s)
            try {
              var f = (t = n.extend.formatters.inputCallFormatter(t))
              ;(f.to = t.to || '0x'),
                (f.data = t.data || '0x'),
                (f.value = t.value || '0x'),
                (f.chainId = n.utils.numberToHex(t.chainId))
              var a = u.a.encode([
                  i.a.fromNat(f.nonce),
                  i.a.fromNat(f.workNonce || '0x'),
                  i.a.fromNat(f.gas),
                  f.to.toLowerCase(),
                  i.a.fromNat(f.value),
                  f.data,
                  i.a.fromNat(f.chainId || '0x1'),
                  '0x',
                  '0x',
                ]),
                c = p.a.keccak256(a),
                l = h.a.makeSigner(2 * y.a.toNumber(f.chainId || '0x1') + 35)(
                  p.a.keccak256(a),
                  r
                ),
                g = u.a
                  .decode(a)
                  .slice(0, 6)
                  .concat(h.a.decodeSignature(l))
              ;(g[6] = v(m(g[6]))), (g[7] = v(m(g[7]))), (g[8] = v(m(g[8])))
              var w = u.a.encode(g),
                d = u.a.decode(w)
              o = {
                messageHash: c,
                v: m(d[6]),
                r: m(d[7]),
                s: m(d[8]),
                rawTransaction: w,
              }
            } catch (t) {
              return e(t), Promise.reject(t)
            }
            return e(null, o), o
          }
          return void 0 !== t.nonce && void 0 !== t.chainId
            ? Promise.resolve(f(t))
            : Promise.all([
                b(t.chainId) ? n.eth.net.getId() : t.chainId,
                b(t.nonce)
                  ? n.eth.getTransactionCount(
                      n.eth.accounts.privateKeyToAccount(r).address
                    )
                  : t.nonce,
              ]).then(function(r) {
                if (b(r[0]) || b(r[1]))
                  throw new Error(
                    "One of the values 'chainId', or 'nonce' couldn't be fetched: ".concat(
                      JSON.stringify(r)
                    )
                  )
                return f(
                  (function(t) {
                    for (var r = 1; r < arguments.length; r++) {
                      var e = null != arguments[r] ? arguments[r] : {}
                      r % 2
                        ? w(e, !0).forEach(function(r) {
                            d(t, r, e[r])
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            t,
                            Object.getOwnPropertyDescriptors(e)
                          )
                        : w(e).forEach(function(r) {
                            Object.defineProperty(
                              t,
                              r,
                              Object.getOwnPropertyDescriptor(e, r)
                            )
                          })
                    }
                    return t
                  })({}, t, { chainId: r[0], nonce: r[1] })
                )
              })
        }
      function E(t) {
        return (E =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(t) {
                return typeof t
              }
            : function(t) {
                return t &&
                  'function' == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t
              })(t)
      }
      var _ = (function() {
        try {
          if (
            'object' ===
              ('undefined' == typeof WebAssembly
                ? 'undefined'
                : E(WebAssembly)) &&
            'function' == typeof WebAssembly.instantiate
          ) {
            var t = new WebAssembly.Module(
              Uint8Array.of(0, 97, 115, 109, 1, 0, 0, 0)
            )
            if (t instanceof WebAssembly.Module)
              return new WebAssembly.Instance(t) instanceof WebAssembly.Instance
          }
        } catch (t) {}
        return !1
      })()
      function P(t) {
        return (P =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(t) {
                return typeof t
              }
            : function(t) {
                return t &&
                  'function' == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t
              })(t)
      }
      function k(t, r, e, n, o, i, s) {
        try {
          var u = t[i](s),
            f = u.value
        } catch (t) {
          return void e(t)
        }
        u.done ? r(f) : Promise.resolve(f).then(n, o)
      }
      r.default = function(t) {
        ;(t.eth.calculateWorkForTransaction = function(r, e, n, o) {
          var s = !1
          if (((o = o || function() {}), !_))
            return (
              (s = new Error(
                "Wasm is not supported by browser. CryptoNight can't load."
              )),
              o(s),
              Promise.reject(s)
            )
          if (!r)
            return (
              (s = new Error('No transaction object given!')),
              o(s),
              Promise.reject(s)
            )
          var f = (function() {
            var r,
              s =
                ((r = regeneratorRuntime.mark(function r(s) {
                  var f, c, h, l, p, g
                  return regeneratorRuntime.wrap(
                    function(r) {
                      for (;;)
                        switch ((r.prev = r.next)) {
                          case 0:
                            if (
                              ((f = 0),
                              (c = !1),
                              null !== n &&
                                'object' === P(n) &&
                                ((n.isRunning = function() {
                                  return c
                                }),
                                (n.getCurrentWorkNonce = function() {
                                  return f
                                }),
                                (n.kill = function() {
                                  ;(c = !1),
                                    (f = 0),
                                    h && h.terminate(),
                                    l && l('Worker terminated by user')
                                })),
                              (r.prev = 3),
                              e)
                            ) {
                              r.next = 8
                              break
                            }
                            return (r.next = 7), t.eth.suggestDifficulty(s.to)
                          case 7:
                            e = r.sent
                          case 8:
                            if (s.nonce || 0 === s.nonce) {
                              r.next = 12
                              break
                            }
                            return (
                              (r.next = 11), t.eth.getTransactionCount(s.to)
                            )
                          case 11:
                            s.nonce = r.sent
                          case 12:
                            return (
                              (s = t.extend.formatters.inputCallFormatter(s)),
                              (p = u.a.encode([
                                i.a.fromNat(s.nonce),
                                i.a.fromNat(s.gas),
                                s.to ? s.to.toLowerCase() : '',
                                i.a.fromNat(s.value || '0x'),
                                s.data || '0x',
                              ])),
                              (g = { hash: p, targetDifficulty: e }),
                              r.abrupt(
                                'return',
                                new Promise(function(r, e) {
                                  ;(h = new a.a()),
                                    (l = e),
                                    (h.onmessage = function(e) {
                                      var n = e.target,
                                        i = e.data,
                                        u = i.cmd,
                                        a = i.workNonce
                                      switch (u) {
                                        case 'ready':
                                          ;(c = !0), h.postMessage(g)
                                          break
                                        case 'current':
                                          f = a
                                          break
                                        case 'finished':
                                          ;(s.workNonce = t.utils.numberToHex(
                                            a
                                          )),
                                            (f = s.workNonce),
                                            (c = !1),
                                            n.terminate(),
                                            o(null, s),
                                            r(s)
                                      }
                                    })
                                })
                              )
                            )
                          case 18:
                            return (
                              (r.prev = 18),
                              (r.t0 = r.catch(3)),
                              o(r.t0),
                              r.abrupt('return', Promise.reject(r.t0))
                            )
                          case 23:
                          case 'end':
                            return r.stop()
                        }
                    },
                    r,
                    null,
                    [[3, 18]]
                  )
                })),
                function() {
                  var t = this,
                    e = arguments
                  return new Promise(function(n, o) {
                    var i = r.apply(t, e)
                    function s(t) {
                      k(i, n, o, s, u, 'next', t)
                    }
                    function u(t) {
                      k(i, n, o, s, u, 'throw', t)
                    }
                    s(void 0)
                  })
                })
            return function(t) {
              return s.apply(this, arguments)
            }
          })()
          return Promise.resolve(f(r))
        }),
          t.eth.extend({
            methods: [
              {
                name: 'suggestDifficulty',
                call: 'eth_suggestDifficulty',
                params: 1,
                inputFormatter: [t.utils.toChecksumAddress],
                outputFormatter: t.utils.toFloat,
              },
            ],
          })
        var r = t.eth.accounts._addAccountFunctions
        return (
          (t.eth.accounts._addAccountFunctions = function(e) {
            return (
              ((e = r.call(this, e)).signTransaction = function(t, r) {
                return A(t, e.privateKey, r)
              }),
              (e.calculateWorkForTransaction =
                t.eth.calculateWorkForTransaction),
              e
            )
          }),
          (t.eth.accounts.signTransaction = function(t, r, e) {
            return A(t, r, e)
          }),
          (n = t),
          t.extend({
            property: 'db',
            methods: [
              {
                name: 'get',
                call: 'db_get',
                params: 5,
                inputFormatter: [
                  t.utils.inputAddressFormatter,
                  null,
                  null,
                  null,
                  t.utils.inputBlockNumberFormatter,
                ],
              },
              {
                name: 'select',
                call: 'db_select',
                params: 5,
                inputFormatter: [
                  t.utils.inputAddressFormatter,
                  null,
                  null,
                  null,
                  t.utils.inputBlockNumberFormatter,
                ],
              },
              {
                name: 'next',
                call: 'db_next',
                params: 1,
                inputFormatter: [null],
              },
            ],
          }),
          t
        )
      }
    },
  ]).default
})
