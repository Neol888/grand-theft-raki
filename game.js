(()=>{var pc="160";var ed=0,jc=1,nd=2;var Ru=1,mc=2,si=3,Di=0,un=1,vn=2;var Pi=0,ks=1,Hn=2,th=3,eh=4,id=5,Ji=100,sd=101,rd=102,nh=103,ih=104,ad=200,od=201,ld=202,cd=203,Ml=204,Sl=205,hd=206,ud=207,fd=208,dd=209,pd=210,md=211,gd=212,xd=213,_d=214,vd=0,yd=1,Md=2,wa=3,Sd=4,bd=5,Ed=6,wd=7,gc=0,Td=1,Ad=2,Li=0,Rd=1,Cd=2,Pd=3,Ld=4,Id=5,Dd=6;var Cu=300,Gs=301,Ws=302,bl=303,El=304,ro=306,ns=1e3,Bn=1001,wl=1002,sn=1003,sh=1004;var Bo=1005;var _n=1006,Ud=1007;var Ir=1008;var qn=1009,Nd=1010,Fd=1011,xc=1012,Pu=1013,Ri=1014,Ci=1015,is=1016,Lu=1017,Iu=1018,ji=1020,Od=1021,kn=1023,zd=1024,Bd=1025,ts=1026,Xs=1027,kd=1028,Du=1029,Hd=1030,Uu=1031,Nu=1033,ko=33776,Ho=33777,Vo=33778,Go=33779,rh=35840,ah=35841,oh=35842,lh=35843,Fu=36196,ch=37492,hh=37496,uh=37808,fh=37809,dh=37810,ph=37811,mh=37812,gh=37813,xh=37814,_h=37815,vh=37816,yh=37817,Mh=37818,Sh=37819,bh=37820,Eh=37821,Wo=36492,wh=36494,Th=36495,Vd=36283,Ah=36284,Rh=36285,Ch=36286;var Ta=2300,Aa=2301,Xo=2302,Ph=2400,Lh=2401,Ih=2402;var Ou=3e3,es=3001,Gd=3200,Wd=3201,zu=0,Xd=1,Nn="",Ue="srgb",li="srgb-linear",_c="display-p3",ao="display-p3-linear",Ra="linear",Ae="srgb",Ca="rec709",Pa="p3";var xs=7680;var Dh=519,qd=512,Yd=513,Zd=514,Bu=515,$d=516,Jd=517,Kd=518,Qd=519,Tl=35044;var Uh="300 es",Al=1035,oi=2e3,La=2001,Ui=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var qo=Math.PI/180,Ia=180/Math.PI;function Ii(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(cn[i&255]+cn[i>>8&255]+cn[i>>16&255]+cn[i>>24&255]+"-"+cn[t&255]+cn[t>>8&255]+"-"+cn[t>>16&15|64]+cn[t>>24&255]+"-"+cn[e&63|128]+cn[e>>8&255]+"-"+cn[e>>16&255]+cn[e>>24&255]+cn[n&255]+cn[n>>8&255]+cn[n>>16&255]+cn[n>>24&255]).toLowerCase()}function rn(i,t,e){return Math.max(t,Math.min(e,i))}function jd(i,t){return(i%t+t)%t}function Yo(i,t,e){return(1-e)*i+e*t}function Nh(i){return(i&i-1)===0&&i!==0}function Rl(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ai(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ye(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var St=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(rn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ie=class i{constructor(t,e,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],p=n[2],d=n[5],g=n[8],x=s[0],m=s[3],f=s[6],y=s[1],_=s[4],b=s[7],C=s[2],E=s[5],L=s[8];return r[0]=a*x+o*y+l*C,r[3]=a*m+o*_+l*E,r[6]=a*f+o*b+l*L,r[1]=c*x+h*y+u*C,r[4]=c*m+h*_+u*E,r[7]=c*f+h*b+u*L,r[2]=p*x+d*y+g*C,r[5]=p*m+d*_+g*E,r[8]=p*f+d*b+g*L,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,p=o*l-h*r,d=c*r-a*l,g=e*u+n*p+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=u*x,t[1]=(s*c-h*n)*x,t[2]=(o*n-s*a)*x,t[3]=p*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-o*e)*x,t[6]=d*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Zo.makeScale(t,e)),this}rotate(t){return this.premultiply(Zo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Zo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Zo=new ie;function ku(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Da(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function tp(){let i=Da("canvas");return i.style.display="block",i}var Fh={};function Rr(i){i in Fh||(Fh[i]=!0,console.warn(i))}var Oh=new ie().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),zh=new ie().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),$r={[li]:{transfer:Ra,primaries:Ca,toReference:i=>i,fromReference:i=>i},[Ue]:{transfer:Ae,primaries:Ca,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[ao]:{transfer:Ra,primaries:Pa,toReference:i=>i.applyMatrix3(zh),fromReference:i=>i.applyMatrix3(Oh)},[_c]:{transfer:Ae,primaries:Pa,toReference:i=>i.convertSRGBToLinear().applyMatrix3(zh),fromReference:i=>i.applyMatrix3(Oh).convertLinearToSRGB()}},ep=new Set([li,ao]),ve={enabled:!0,_workingColorSpace:li,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!ep.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=$r[t].toReference,s=$r[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return $r[i].primaries},getTransfer:function(i){return i===Nn?Ra:$r[i].transfer}};function Hs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function $o(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var _s,Ua=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{_s===void 0&&(_s=Da("canvas")),_s.width=t.width,_s.height=t.height;let n=_s.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=_s}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=Da("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Hs(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Hs(e[n]/255)*255):e[n]=Hs(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},np=0,Na=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:np++}),this.uuid=Ii(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Jo(s[a].image)):r.push(Jo(s[a]))}else r=Jo(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Jo(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Ua.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var ip=0,Rn=class i extends Ui{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Bn,s=Bn,r=_n,a=Ir,o=kn,l=qn,c=i.DEFAULT_ANISOTROPY,h=Nn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ip++}),this.uuid=Ii(),this.name="",this.source=new Na(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new St(0,0),this.repeat=new St(1,1),this.center=new St(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Rr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===es?Ue:Nn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Cu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ns:t.x=t.x-Math.floor(t.x);break;case Bn:t.x=t.x<0?0:1;break;case wl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ns:t.y=t.y-Math.floor(t.y);break;case Bn:t.y=t.y<0?0:1;break;case wl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Rr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ue?es:Ou}set encoding(t){Rr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===es?Ue:Nn}};Rn.DEFAULT_IMAGE=null;Rn.DEFAULT_MAPPING=Cu;Rn.DEFAULT_ANISOTROPY=1;var en=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],p=l[1],d=l[5],g=l[9],x=l[2],m=l[6],f=l[10];if(Math.abs(h-p)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+p)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(c+1)/2,b=(d+1)/2,C=(f+1)/2,E=(h+p)/4,L=(u+x)/4,k=(g+m)/4;return _>b&&_>C?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=E/n,r=L/n):b>C?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=E/s,r=k/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=L/r,s=k/r),this.set(n,s,r,e),this}let y=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(p-h)*(p-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-x)/y,this.z=(p-h)/y,this.w=Math.acos((c+d+f-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Cl=class extends Ui{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new en(0,0,t,e),this.scissorTest=!1,this.viewport=new en(0,0,t,e);let s={width:t,height:e,depth:1};n.encoding!==void 0&&(Rr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===es?Ue:Nn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_n,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Rn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Na(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Cn=class extends Cl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Fa=class extends Rn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Pl=class extends Rn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Pn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],p=r[a+0],d=r[a+1],g=r[a+2],x=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=p,t[e+1]=d,t[e+2]=g,t[e+3]=x;return}if(u!==x||l!==p||c!==d||h!==g){let m=1-o,f=l*p+c*d+h*g+u*x,y=f>=0?1:-1,_=1-f*f;if(_>Number.EPSILON){let C=Math.sqrt(_),E=Math.atan2(C,f*y);m=Math.sin(m*E)/C,o=Math.sin(o*E)/C}let b=o*y;if(l=l*m+p*b,c=c*m+d*b,h=h*m+g*b,u=u*m+x*b,m===1-o){let C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],p=r[a+1],d=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*d-c*p,t[e+1]=l*g+h*p+c*u-o*d,t[e+2]=c*g+h*d+o*p-l*u,t[e+3]=h*g-o*u-l*p-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),p=l(n/2),d=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=p*h*u+c*d*g,this._y=c*d*u-p*h*g,this._z=c*h*g+p*d*u,this._w=c*h*u-p*d*g;break;case"YXZ":this._x=p*h*u+c*d*g,this._y=c*d*u-p*h*g,this._z=c*h*g-p*d*u,this._w=c*h*u+p*d*g;break;case"ZXY":this._x=p*h*u-c*d*g,this._y=c*d*u+p*h*g,this._z=c*h*g+p*d*u,this._w=c*h*u-p*d*g;break;case"ZYX":this._x=p*h*u-c*d*g,this._y=c*d*u+p*h*g,this._z=c*h*g-p*d*u,this._w=c*h*u+p*d*g;break;case"YZX":this._x=p*h*u+c*d*g,this._y=c*d*u+p*h*g,this._z=c*h*g-p*d*u,this._w=c*h*u-p*d*g;break;case"XZY":this._x=p*h*u-c*d*g,this._y=c*d*u-p*h*g,this._z=c*h*g+p*d*u,this._w=c*h*u+p*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],p=n+o+u;if(p>0){let d=.5/Math.sqrt(p+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>u){let d=2*Math.sqrt(1+n-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>u){let d=2*Math.sqrt(1+o-n-u);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(rn(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let d=1-e;return this._w=d*a+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,p=Math.sin(e*h)/c;return this._w=a*u+this._w*p,this._x=n*u+this._x*p,this._y=s*u+this._y*p,this._z=r*u+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),n*Math.sin(r),n*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Bh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Bh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ko.copy(this).projectOnVector(t),this.sub(Ko)}reflect(t){return this.sub(Ko.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(rn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ko=new U,Bh=new Pn,ci=class{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Fn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Fn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Fn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Fn):Fn.fromBufferAttribute(r,a),Fn.applyMatrix4(t.matrixWorld),this.expandByPoint(Fn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Jr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Jr.copy(n.boundingBox)),Jr.applyMatrix4(t.matrixWorld),this.union(Jr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Fn),Fn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(vr),Kr.subVectors(this.max,vr),vs.subVectors(t.a,vr),ys.subVectors(t.b,vr),Ms.subVectors(t.c,vr),bi.subVectors(ys,vs),Ei.subVectors(Ms,ys),Xi.subVectors(vs,Ms);let e=[0,-bi.z,bi.y,0,-Ei.z,Ei.y,0,-Xi.z,Xi.y,bi.z,0,-bi.x,Ei.z,0,-Ei.x,Xi.z,0,-Xi.x,-bi.y,bi.x,0,-Ei.y,Ei.x,0,-Xi.y,Xi.x,0];return!Qo(e,vs,ys,Ms,Kr)||(e=[1,0,0,0,1,0,0,0,1],!Qo(e,vs,ys,Ms,Kr))?!1:(Qr.crossVectors(bi,Ei),e=[Qr.x,Qr.y,Qr.z],Qo(e,vs,ys,Ms,Kr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Fn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Fn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(jn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},jn=[new U,new U,new U,new U,new U,new U,new U,new U],Fn=new U,Jr=new ci,vs=new U,ys=new U,Ms=new U,bi=new U,Ei=new U,Xi=new U,vr=new U,Kr=new U,Qr=new U,qi=new U;function Qo(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){qi.fromArray(i,r);let o=s.x*Math.abs(qi.x)+s.y*Math.abs(qi.y)+s.z*Math.abs(qi.z),l=t.dot(qi),c=e.dot(qi),h=n.dot(qi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var sp=new ci,yr=new U,jo=new U,Ni=class{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):sp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;yr.subVectors(t,this.center);let e=yr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(yr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(jo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(yr.copy(t.center).add(jo)),this.expandByPoint(yr.copy(t.center).sub(jo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},ti=new U,tl=new U,jr=new U,wi=new U,el=new U,ta=new U,nl=new U,Oa=class{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ti)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ti.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ti.copy(this.origin).addScaledVector(this.direction,e),ti.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){tl.copy(t).add(e).multiplyScalar(.5),jr.copy(e).sub(t).normalize(),wi.copy(this.origin).sub(tl);let r=t.distanceTo(e)*.5,a=-this.direction.dot(jr),o=wi.dot(this.direction),l=-wi.dot(jr),c=wi.lengthSq(),h=Math.abs(1-a*a),u,p,d,g;if(h>0)if(u=a*l-o,p=a*o-l,g=r*h,u>=0)if(p>=-g)if(p<=g){let x=1/h;u*=x,p*=x,d=u*(u+a*p+2*o)+p*(a*u+p+2*l)+c}else p=r,u=Math.max(0,-(a*p+o)),d=-u*u+p*(p+2*l)+c;else p=-r,u=Math.max(0,-(a*p+o)),d=-u*u+p*(p+2*l)+c;else p<=-g?(u=Math.max(0,-(-a*r+o)),p=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+p*(p+2*l)+c):p<=g?(u=0,p=Math.min(Math.max(-r,-l),r),d=p*(p+2*l)+c):(u=Math.max(0,-(a*r+o)),p=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+p*(p+2*l)+c);else p=a>0?-r:r,u=Math.max(0,-(a*p+o)),d=-u*u+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(tl).addScaledVector(jr,p),d}intersectSphere(t,e){ti.subVectors(t.center,this.origin);let n=ti.dot(this.direction),s=ti.dot(ti)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,p=this.origin;return c>=0?(n=(t.min.x-p.x)*c,s=(t.max.x-p.x)*c):(n=(t.max.x-p.x)*c,s=(t.min.x-p.x)*c),h>=0?(r=(t.min.y-p.y)*h,a=(t.max.y-p.y)*h):(r=(t.max.y-p.y)*h,a=(t.min.y-p.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-p.z)*u,l=(t.max.z-p.z)*u):(o=(t.max.z-p.z)*u,l=(t.min.z-p.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ti)!==null}intersectTriangle(t,e,n,s,r){el.subVectors(e,t),ta.subVectors(n,t),nl.crossVectors(el,ta);let a=this.direction.dot(nl),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;wi.subVectors(this.origin,t);let l=o*this.direction.dot(ta.crossVectors(wi,ta));if(l<0)return null;let c=o*this.direction.dot(el.cross(wi));if(c<0||l+c>a)return null;let h=-o*wi.dot(nl);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ue=class i{constructor(t,e,n,s,r,a,o,l,c,h,u,p,d,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,p,d,g,x,m)}set(t,e,n,s,r,a,o,l,c,h,u,p,d,g,x,m){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=p,f[3]=d,f[7]=g,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Ss.setFromMatrixColumn(t,0).length(),r=1/Ss.setFromMatrixColumn(t,1).length(),a=1/Ss.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let p=a*h,d=a*u,g=o*h,x=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+g*c,e[5]=p-x*c,e[9]=-o*l,e[2]=x-p*c,e[6]=g+d*c,e[10]=a*l}else if(t.order==="YXZ"){let p=l*h,d=l*u,g=c*h,x=c*u;e[0]=p+x*o,e[4]=g*o-d,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=d*o-g,e[6]=x+p*o,e[10]=a*l}else if(t.order==="ZXY"){let p=l*h,d=l*u,g=c*h,x=c*u;e[0]=p-x*o,e[4]=-a*u,e[8]=g+d*o,e[1]=d+g*o,e[5]=a*h,e[9]=x-p*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let p=a*h,d=a*u,g=o*h,x=o*u;e[0]=l*h,e[4]=g*c-d,e[8]=p*c+x,e[1]=l*u,e[5]=x*c+p,e[9]=d*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let p=a*l,d=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=x-p*u,e[8]=g*u+d,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=d*u+g,e[10]=p-x*u}else if(t.order==="XZY"){let p=a*l,d=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=p*u+x,e[5]=a*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=o*h,e[10]=x*u+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(rp,t,ap)}lookAt(t,e,n){let s=this.elements;return Tn.subVectors(t,e),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),Ti.crossVectors(n,Tn),Ti.lengthSq()===0&&(Math.abs(n.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),Ti.crossVectors(n,Tn)),Ti.normalize(),ea.crossVectors(Tn,Ti),s[0]=Ti.x,s[4]=ea.x,s[8]=Tn.x,s[1]=Ti.y,s[5]=ea.y,s[9]=Tn.y,s[2]=Ti.z,s[6]=ea.z,s[10]=Tn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],p=n[9],d=n[13],g=n[2],x=n[6],m=n[10],f=n[14],y=n[3],_=n[7],b=n[11],C=n[15],E=s[0],L=s[4],k=s[8],S=s[12],T=s[1],V=s[5],$=s[9],ft=s[13],O=s[2],W=s[6],K=s[10],it=s[14],Q=s[3],et=s[7],ot=s[11],ht=s[15];return r[0]=a*E+o*T+l*O+c*Q,r[4]=a*L+o*V+l*W+c*et,r[8]=a*k+o*$+l*K+c*ot,r[12]=a*S+o*ft+l*it+c*ht,r[1]=h*E+u*T+p*O+d*Q,r[5]=h*L+u*V+p*W+d*et,r[9]=h*k+u*$+p*K+d*ot,r[13]=h*S+u*ft+p*it+d*ht,r[2]=g*E+x*T+m*O+f*Q,r[6]=g*L+x*V+m*W+f*et,r[10]=g*k+x*$+m*K+f*ot,r[14]=g*S+x*ft+m*it+f*ht,r[3]=y*E+_*T+b*O+C*Q,r[7]=y*L+_*V+b*W+C*et,r[11]=y*k+_*$+b*K+C*ot,r[15]=y*S+_*ft+b*it+C*ht,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],p=t[10],d=t[14],g=t[3],x=t[7],m=t[11],f=t[15];return g*(+r*l*u-s*c*u-r*o*p+n*c*p+s*o*d-n*l*d)+x*(+e*l*d-e*c*p+r*a*p-s*a*d+s*c*h-r*l*h)+m*(+e*c*u-e*o*d-r*a*u+n*a*d+r*o*h-n*c*h)+f*(-s*o*h-e*l*u+e*o*p+s*a*u-n*a*p+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],p=t[10],d=t[11],g=t[12],x=t[13],m=t[14],f=t[15],y=u*m*c-x*p*c+x*l*d-o*m*d-u*l*f+o*p*f,_=g*p*c-h*m*c-g*l*d+a*m*d+h*l*f-a*p*f,b=h*x*c-g*u*c+g*o*d-a*x*d-h*o*f+a*u*f,C=g*u*l-h*x*l-g*o*p+a*x*p+h*o*m-a*u*m,E=e*y+n*_+s*b+r*C;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/E;return t[0]=y*L,t[1]=(x*p*r-u*m*r-x*s*d+n*m*d+u*s*f-n*p*f)*L,t[2]=(o*m*r-x*l*r+x*s*c-n*m*c-o*s*f+n*l*f)*L,t[3]=(u*l*r-o*p*r-u*s*c+n*p*c+o*s*d-n*l*d)*L,t[4]=_*L,t[5]=(h*m*r-g*p*r+g*s*d-e*m*d-h*s*f+e*p*f)*L,t[6]=(g*l*r-a*m*r-g*s*c+e*m*c+a*s*f-e*l*f)*L,t[7]=(a*p*r-h*l*r+h*s*c-e*p*c-a*s*d+e*l*d)*L,t[8]=b*L,t[9]=(g*u*r-h*x*r-g*n*d+e*x*d+h*n*f-e*u*f)*L,t[10]=(a*x*r-g*o*r+g*n*c-e*x*c-a*n*f+e*o*f)*L,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*d-e*o*d)*L,t[12]=C*L,t[13]=(h*x*s-g*u*s+g*n*p-e*x*p-h*n*m+e*u*m)*L,t[14]=(g*o*s-a*x*s-g*n*l+e*x*l+a*n*m-e*o*m)*L,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*p+e*o*p)*L,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,p=r*c,d=r*h,g=r*u,x=a*h,m=a*u,f=o*u,y=l*c,_=l*h,b=l*u,C=n.x,E=n.y,L=n.z;return s[0]=(1-(x+f))*C,s[1]=(d+b)*C,s[2]=(g-_)*C,s[3]=0,s[4]=(d-b)*E,s[5]=(1-(p+f))*E,s[6]=(m+y)*E,s[7]=0,s[8]=(g+_)*L,s[9]=(m-y)*L,s[10]=(1-(p+x))*L,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Ss.set(s[0],s[1],s[2]).length(),a=Ss.set(s[4],s[5],s[6]).length(),o=Ss.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],On.copy(this);let c=1/r,h=1/a,u=1/o;return On.elements[0]*=c,On.elements[1]*=c,On.elements[2]*=c,On.elements[4]*=h,On.elements[5]*=h,On.elements[6]*=h,On.elements[8]*=u,On.elements[9]*=u,On.elements[10]*=u,e.setFromRotationMatrix(On),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=oi){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),p=(n+s)/(n-s),d,g;if(o===oi)d=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===La)d=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=oi){let l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(a-r),p=(e+t)*c,d=(n+s)*h,g,x;if(o===oi)g=(a+r)*u,x=-2*u;else if(o===La)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Ss=new U,On=new ue,rp=new U(0,0,0),ap=new U(1,1,1),Ti=new U,ea=new U,Tn=new U,kh=new ue,Hh=new Pn,qs=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],p=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(rn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-rn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(rn(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-rn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(p,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(rn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-rn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return kh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(kh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Hh.setFromEuler(this),this.setFromQuaternion(Hh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};qs.DEFAULT_ORDER="XYZ";var za=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},op=0,Vh=new U,bs=new Pn,ei=new ue,na=new U,Mr=new U,lp=new U,cp=new Pn,Gh=new U(1,0,0),Wh=new U(0,1,0),Xh=new U(0,0,1),hp={type:"added"},up={type:"removed"},Xe=class i extends Ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:op++}),this.uuid=Ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new U,e=new qs,n=new Pn,s=new U(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ue},normalMatrix:{value:new ie}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new za,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return bs.setFromAxisAngle(t,e),this.quaternion.multiply(bs),this}rotateOnWorldAxis(t,e){return bs.setFromAxisAngle(t,e),this.quaternion.premultiply(bs),this}rotateX(t){return this.rotateOnAxis(Gh,t)}rotateY(t){return this.rotateOnAxis(Wh,t)}rotateZ(t){return this.rotateOnAxis(Xh,t)}translateOnAxis(t,e){return Vh.copy(t).applyQuaternion(this.quaternion),this.position.add(Vh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Gh,t)}translateY(t){return this.translateOnAxis(Wh,t)}translateZ(t){return this.translateOnAxis(Xh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?na.copy(t):na.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ei.lookAt(Mr,na,this.up):ei.lookAt(na,Mr,this.up),this.quaternion.setFromRotationMatrix(ei),s&&(ei.extractRotation(s.matrixWorld),bs.setFromRotationMatrix(ei),this.quaternion.premultiply(bs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(hp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(up)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ei.multiply(t.parent.matrixWorld)),t.applyMatrix4(ei),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mr,t,lp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mr,cp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++){let r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),p=a(t.skeletons),d=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),p.length>0&&(n.skeletons=p),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Xe.DEFAULT_UP=new U(0,1,0);Xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var zn=new U,ni=new U,il=new U,ii=new U,Es=new U,ws=new U,qh=new U,sl=new U,rl=new U,al=new U,ia=!1,Qi=class i{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),zn.subVectors(t,e),s.cross(zn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){zn.subVectors(s,e),ni.subVectors(n,e),il.subVectors(t,e);let a=zn.dot(zn),o=zn.dot(ni),l=zn.dot(il),c=ni.dot(ni),h=ni.dot(il),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let p=1/u,d=(c*l-o*h)*p,g=(a*h-o*l)*p;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ii)===null?!1:ii.x>=0&&ii.y>=0&&ii.x+ii.y<=1}static getUV(t,e,n,s,r,a,o,l){return ia===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ia=!0),this.getInterpolation(t,e,n,s,r,a,o,l)}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,ii)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ii.x),l.addScaledVector(a,ii.y),l.addScaledVector(o,ii.z),l)}static isFrontFacing(t,e,n,s){return zn.subVectors(n,e),ni.subVectors(t,e),zn.cross(ni).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return zn.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),zn.cross(ni).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,s,r){return ia===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ia=!0),i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Es.subVectors(s,n),ws.subVectors(r,n),sl.subVectors(t,n);let l=Es.dot(sl),c=ws.dot(sl);if(l<=0&&c<=0)return e.copy(n);rl.subVectors(t,s);let h=Es.dot(rl),u=ws.dot(rl);if(h>=0&&u<=h)return e.copy(s);let p=l*u-h*c;if(p<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Es,a);al.subVectors(t,r);let d=Es.dot(al),g=ws.dot(al);if(g>=0&&d<=g)return e.copy(r);let x=d*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(ws,o);let m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return qh.subVectors(r,s),o=(u-h)/(u-h+(d-g)),e.copy(s).addScaledVector(qh,o);let f=1/(m+x+p);return a=x*f,o=p*f,e.copy(n).addScaledVector(Es,a).addScaledVector(ws,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Hu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ai={h:0,s:0,l:0},sa={h:0,s:0,l:0};function ol(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Lt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ue){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ve.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ve.workingColorSpace){return this.r=t,this.g=e,this.b=n,ve.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ve.workingColorSpace){if(t=jd(t,1),e=rn(e,0,1),n=rn(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=ol(a,r,t+1/3),this.g=ol(a,r,t),this.b=ol(a,r,t-1/3)}return ve.toWorkingColorSpace(this,s),this}setStyle(t,e=Ue){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ue){let n=Hu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Hs(t.r),this.g=Hs(t.g),this.b=Hs(t.b),this}copyLinearToSRGB(t){return this.r=$o(t.r),this.g=$o(t.g),this.b=$o(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ue){return ve.fromWorkingColorSpace(hn.copy(this),t),Math.round(rn(hn.r*255,0,255))*65536+Math.round(rn(hn.g*255,0,255))*256+Math.round(rn(hn.b*255,0,255))}getHexString(t=Ue){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ve.workingColorSpace){ve.fromWorkingColorSpace(hn.copy(this),e);let n=hn.r,s=hn.g,r=hn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ve.workingColorSpace){return ve.fromWorkingColorSpace(hn.copy(this),e),t.r=hn.r,t.g=hn.g,t.b=hn.b,t}getStyle(t=Ue){ve.fromWorkingColorSpace(hn.copy(this),t);let e=hn.r,n=hn.g,s=hn.b;return t!==Ue?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ai),this.setHSL(Ai.h+t,Ai.s+e,Ai.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ai),t.getHSL(sa);let n=Yo(Ai.h,sa.h,e),s=Yo(Ai.s,sa.s,e),r=Yo(Ai.l,sa.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},hn=new Lt;Lt.NAMES=Hu;var fp=0,hi=class extends Ui{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fp++}),this.uuid=Ii(),this.name="",this.type="Material",this.blending=ks,this.side=Di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ml,this.blendDst=Sl,this.blendEquation=Ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Lt(0,0,0),this.blendAlpha=0,this.depthFunc=wa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xs,this.stencilZFail=xs,this.stencilZPass=xs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ks&&(n.blending=this.blending),this.side!==Di&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ml&&(n.blendSrc=this.blendSrc),this.blendDst!==Sl&&(n.blendDst=this.blendDst),this.blendEquation!==Ji&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==wa&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Dh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==xs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==xs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},on=class extends hi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=gc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var He=new U,ra=new St,fe=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Tl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ci,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ra.fromBufferAttribute(this,e),ra.applyMatrix3(t),this.setXY(e,ra.x,ra.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyMatrix3(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyMatrix4(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyNormalMatrix(t),this.setXYZ(e,He.x,He.y,He.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.transformDirection(t),this.setXYZ(e,He.x,He.y,He.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ai(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ye(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ai(e,this.array)),e}setX(t,e){return this.normalized&&(e=ye(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ai(e,this.array)),e}setY(t,e){return this.normalized&&(e=ye(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ai(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ye(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ai(e,this.array)),e}setW(t,e){return this.normalized&&(e=ye(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ye(e,this.array),n=ye(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ye(e,this.array),n=ye(n,this.array),s=ye(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ye(e,this.array),n=ye(n,this.array),s=ye(s,this.array),r=ye(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Tl&&(t.usage=this.usage),t}};var Ba=class extends fe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ka=class extends fe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var se=class extends fe{constructor(t,e,n){super(new Float32Array(t),e,n)}};var dp=0,Un=new ue,ll=new Xe,Ts=new U,An=new ci,Sr=new ci,tn=new U,ge=class i extends Ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dp++}),this.uuid=Ii(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ku(t)?ka:Ba)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ie().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Un.makeRotationFromQuaternion(t),this.applyMatrix4(Un),this}rotateX(t){return Un.makeRotationX(t),this.applyMatrix4(Un),this}rotateY(t){return Un.makeRotationY(t),this.applyMatrix4(Un),this}rotateZ(t){return Un.makeRotationZ(t),this.applyMatrix4(Un),this}translate(t,e,n){return Un.makeTranslation(t,e,n),this.applyMatrix4(Un),this}scale(t,e,n){return Un.makeScale(t,e,n),this.applyMatrix4(Un),this}lookAt(t){return ll.lookAt(t),ll.updateMatrix(),this.applyMatrix4(ll.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ts).negate(),this.translate(Ts.x,Ts.y,Ts.z),this}setFromPoints(t){let e=[];for(let n=0,s=t.length;n<s;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new se(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ci);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];An.setFromBufferAttribute(r),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ni);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(t){let n=this.boundingSphere.center;if(An.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Sr.setFromBufferAttribute(o),this.morphTargetsRelative?(tn.addVectors(An.min,Sr.min),An.expandByPoint(tn),tn.addVectors(An.max,Sr.max),An.expandByPoint(tn)):(An.expandByPoint(Sr.min),An.expandByPoint(Sr.max))}An.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)tn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(tn));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)tn.fromBufferAttribute(o,c),l&&(Ts.fromBufferAttribute(t,c),tn.add(Ts)),s=Math.max(s,n.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.array,s=e.position.array,r=e.normal.array,a=e.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fe(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let T=0;T<o;T++)c[T]=new U,h[T]=new U;let u=new U,p=new U,d=new U,g=new St,x=new St,m=new St,f=new U,y=new U;function _(T,V,$){u.fromArray(s,T*3),p.fromArray(s,V*3),d.fromArray(s,$*3),g.fromArray(a,T*2),x.fromArray(a,V*2),m.fromArray(a,$*2),p.sub(u),d.sub(u),x.sub(g),m.sub(g);let ft=1/(x.x*m.y-m.x*x.y);isFinite(ft)&&(f.copy(p).multiplyScalar(m.y).addScaledVector(d,-x.y).multiplyScalar(ft),y.copy(d).multiplyScalar(x.x).addScaledVector(p,-m.x).multiplyScalar(ft),c[T].add(f),c[V].add(f),c[$].add(f),h[T].add(y),h[V].add(y),h[$].add(y))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let T=0,V=b.length;T<V;++T){let $=b[T],ft=$.start,O=$.count;for(let W=ft,K=ft+O;W<K;W+=3)_(n[W+0],n[W+1],n[W+2])}let C=new U,E=new U,L=new U,k=new U;function S(T){L.fromArray(r,T*3),k.copy(L);let V=c[T];C.copy(V),C.sub(L.multiplyScalar(L.dot(V))).normalize(),E.crossVectors(k,V);let ft=E.dot(h[T])<0?-1:1;l[T*4]=C.x,l[T*4+1]=C.y,l[T*4+2]=C.z,l[T*4+3]=ft}for(let T=0,V=b.length;T<V;++T){let $=b[T],ft=$.start,O=$.count;for(let W=ft,K=ft+O;W<K;W+=3)S(n[W+0]),S(n[W+1]),S(n[W+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new fe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,d=n.count;p<d;p++)n.setXYZ(p,0,0,0);let s=new U,r=new U,a=new U,o=new U,l=new U,c=new U,h=new U,u=new U;if(t)for(let p=0,d=t.count;p<d;p+=3){let g=t.getX(p+0),x=t.getX(p+1),m=t.getX(p+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let p=0,d=e.count;p<d;p+=3)s.fromBufferAttribute(e,p+0),r.fromBufferAttribute(e,p+1),a.fromBufferAttribute(e,p+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)tn.fromBufferAttribute(t,e),tn.normalize(),t.setXYZ(e,tn.x,tn.y,tn.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,p=new c.constructor(l.length*h),d=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?d=l[x]*o.data.stride+o.offset:d=l[x]*h;for(let f=0;f<h;f++)p[g++]=c[d++]}return new fe(p,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let p=c[h],d=t(p,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,p=c.length;u<p;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let p=0,d=u.length;p<d;p++)h.push(u[p].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Yh=new ue,Yi=new Oa,aa=new Ni,Zh=new U,As=new U,Rs=new U,Cs=new U,cl=new U,oa=new U,la=new St,ca=new St,ha=new St,$h=new U,Jh=new U,Kh=new U,ua=new U,fa=new U,ae=class extends Xe{constructor(t=new ge,e=new on){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){oa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(cl.fromBufferAttribute(u,t),a?oa.addScaledVector(cl,h):oa.addScaledVector(cl.sub(e),h))}e.add(oa)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),aa.copy(n.boundingSphere),aa.applyMatrix4(r),Yi.copy(t.ray).recast(t.near),!(aa.containsPoint(Yi.origin)===!1&&(Yi.intersectSphere(aa,Zh)===null||Yi.origin.distanceToSquared(Zh)>(t.far-t.near)**2))&&(Yh.copy(r).invert(),Yi.copy(t.ray).applyMatrix4(Yh),!(n.boundingBox!==null&&Yi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Yi)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,p=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=p.length;g<x;g++){let m=p[g],f=a[m.materialIndex],y=Math.max(m.start,d.start),_=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let b=y,C=_;b<C;b+=3){let E=o.getX(b),L=o.getX(b+1),k=o.getX(b+2);s=da(this,f,t,n,c,h,u,E,L,k),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(o.count,d.start+d.count);for(let m=g,f=x;m<f;m+=3){let y=o.getX(m),_=o.getX(m+1),b=o.getX(m+2);s=da(this,a,t,n,c,h,u,y,_,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=p.length;g<x;g++){let m=p[g],f=a[m.materialIndex],y=Math.max(m.start,d.start),_=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let b=y,C=_;b<C;b+=3){let E=b,L=b+1,k=b+2;s=da(this,f,t,n,c,h,u,E,L,k),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=g,f=x;m<f;m+=3){let y=m,_=m+1,b=m+2;s=da(this,a,t,n,c,h,u,y,_,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function pp(i,t,e,n,s,r,a,o){let l;if(t.side===un?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Di,o),l===null)return null;fa.copy(o),fa.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(fa);return c<e.near||c>e.far?null:{distance:c,point:fa.clone(),object:i}}function da(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,As),i.getVertexPosition(l,Rs),i.getVertexPosition(c,Cs);let h=pp(i,t,e,n,As,Rs,Cs,ua);if(h){s&&(la.fromBufferAttribute(s,o),ca.fromBufferAttribute(s,l),ha.fromBufferAttribute(s,c),h.uv=Qi.getInterpolation(ua,As,Rs,Cs,la,ca,ha,new St)),r&&(la.fromBufferAttribute(r,o),ca.fromBufferAttribute(r,l),ha.fromBufferAttribute(r,c),h.uv1=Qi.getInterpolation(ua,As,Rs,Cs,la,ca,ha,new St),h.uv2=h.uv1),a&&($h.fromBufferAttribute(a,o),Jh.fromBufferAttribute(a,l),Kh.fromBufferAttribute(a,c),h.normal=Qi.getInterpolation(ua,As,Rs,Cs,$h,Jh,Kh,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new U,materialIndex:0};Qi.getNormal(As,Rs,Cs,u.normal),h.face=u}return h}var Ln=class i extends ge{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],p=0,d=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new se(c,3)),this.setAttribute("normal",new se(h,3)),this.setAttribute("uv",new se(u,2));function g(x,m,f,y,_,b,C,E,L,k,S){let T=b/L,V=C/k,$=b/2,ft=C/2,O=E/2,W=L+1,K=k+1,it=0,Q=0,et=new U;for(let ot=0;ot<K;ot++){let ht=ot*V-ft;for(let Et=0;Et<W;Et++){let J=Et*T-$;et[x]=J*y,et[m]=ht*_,et[f]=O,c.push(et.x,et.y,et.z),et[x]=0,et[m]=0,et[f]=E>0?1:-1,h.push(et.x,et.y,et.z),u.push(Et/L),u.push(1-ot/k),it+=1}}for(let ot=0;ot<k;ot++)for(let ht=0;ht<L;ht++){let Et=p+ht+W*ot,J=p+ht+W*(ot+1),st=p+(ht+1)+W*(ot+1),bt=p+(ht+1)+W*ot;l.push(Et,J,bt),l.push(J,st,bt),Q+=6}o.addGroup(d,Q,S),d+=Q,p+=it}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ys(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function xn(i){let t={};for(let e=0;e<i.length;e++){let n=Ys(i[e]);for(let s in n)t[s]=n[s]}return t}function mp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Vu(i){return i.getRenderTarget()===null?i.outputColorSpace:ve.workingColorSpace}var gp={clone:Ys,merge:xn},xp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_p=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ve=class extends hi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xp,this.fragmentShader=_p,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ys(t.uniforms),this.uniformsGroups=mp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Ha=class extends Xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue,this.coordinateSystem=oi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},an=class extends Ha{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ia*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(qo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ia*2*Math.atan(Math.tan(qo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(qo*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ps=-90,Ls=1,Ll=class extends Xe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new an(Ps,Ls,t,e);s.layers=this.layers,this.add(s);let r=new an(Ps,Ls,t,e);r.layers=this.layers,this.add(r);let a=new an(Ps,Ls,t,e);a.layers=this.layers,this.add(a);let o=new an(Ps,Ls,t,e);o.layers=this.layers,this.add(o);let l=new an(Ps,Ls,t,e);l.layers=this.layers,this.add(l);let c=new an(Ps,Ls,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===oi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===La)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),p=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,p,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Va=class extends Rn{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Gs,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Il=class extends Cn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];e.encoding!==void 0&&(Rr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===es?Ue:Nn),this.texture=new Va(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:_n}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ln(5,5,5),r=new Ve({name:"CubemapFromEquirect",uniforms:Ys(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:un,blending:Pi});r.uniforms.tEquirect.value=e;let a=new ae(s,r),o=e.minFilter;return e.minFilter===Ir&&(e.minFilter=_n),new Ll(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},hl=new U,vp=new U,yp=new ie,ri=class{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=hl.subVectors(n,e).cross(vp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(hl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||yp.getNormalMatrix(t),s=this.coplanarPoint(hl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Zi=new Ni,pa=new U,Dr=class{constructor(t=new ri,e=new ri,n=new ri,s=new ri,r=new ri,a=new ri){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=oi){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],p=s[7],d=s[8],g=s[9],x=s[10],m=s[11],f=s[12],y=s[13],_=s[14],b=s[15];if(n[0].setComponents(l-r,p-c,m-d,b-f).normalize(),n[1].setComponents(l+r,p+c,m+d,b+f).normalize(),n[2].setComponents(l+a,p+h,m+g,b+y).normalize(),n[3].setComponents(l-a,p-h,m-g,b-y).normalize(),n[4].setComponents(l-o,p-u,m-x,b-_).normalize(),e===oi)n[5].setComponents(l+o,p+u,m+x,b+_).normalize();else if(e===La)n[5].setComponents(o,u,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Zi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Zi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Zi)}intersectsSprite(t){return Zi.center.set(0,0,0),Zi.radius=.7071067811865476,Zi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Zi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(pa.x=s.normal.x>0?t.max.x:t.min.x,pa.y=s.normal.y>0?t.max.y:t.min.y,pa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(pa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Gu(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Mp(i,t){let e=t.isWebGL2,n=new WeakMap;function s(c,h){let u=c.array,p=c.usage,d=u.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,u,p),c.onUploadCallback();let x;if(u instanceof Float32Array)x=i.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)x=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)x=i.SHORT;else if(u instanceof Uint32Array)x=i.UNSIGNED_INT;else if(u instanceof Int32Array)x=i.INT;else if(u instanceof Int8Array)x=i.BYTE;else if(u instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:x,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:d}}function r(c,h,u){let p=h.array,d=h._updateRange,g=h.updateRanges;if(i.bindBuffer(u,c),d.count===-1&&g.length===0&&i.bufferSubData(u,0,p),g.length!==0){for(let x=0,m=g.length;x<m;x++){let f=g[x];e?i.bufferSubData(u,f.start*p.BYTES_PER_ELEMENT,p,f.start,f.count):i.bufferSubData(u,f.start*p.BYTES_PER_ELEMENT,p.subarray(f.start,f.start+f.count))}h.clearUpdateRanges()}d.count!==-1&&(e?i.bufferSubData(u,d.offset*p.BYTES_PER_ELEMENT,p,d.offset,d.count):i.bufferSubData(u,d.offset*p.BYTES_PER_ELEMENT,p.subarray(d.offset,d.offset+d.count)),d.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let p=n.get(c);(!p||p.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=n.get(c);if(u===void 0)n.set(c,s(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:a,remove:o,update:l}}var Dl=class i extends ge{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,p=e/l,d=[],g=[],x=[],m=[];for(let f=0;f<h;f++){let y=f*p-a;for(let _=0;_<c;_++){let b=_*u-r;g.push(b,-y,0),x.push(0,0,1),m.push(_/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let y=0;y<o;y++){let _=y+c*f,b=y+c*(f+1),C=y+1+c*(f+1),E=y+1+c*f;d.push(_,b,E),d.push(b,C,E)}this.setIndex(d),this.setAttribute("position",new se(g,3)),this.setAttribute("normal",new se(x,3)),this.setAttribute("uv",new se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Sp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ep=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Ap=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Cp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Pp=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Lp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Ip=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Dp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Up=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Np=`#ifdef USE_IRIDESCENCE
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
#endif`,Fp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Op=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,zp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Bp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Vp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Gp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Wp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Xp=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
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
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,qp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,Yp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Zp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$p=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Kp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qp="gl_FragColor = linearToOutputTexel( gl_FragColor );",jp=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,tm=`#ifdef USE_ENVMAP
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
#endif`,em=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,nm=`#ifdef USE_ENVMAP
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
#endif`,im=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sm=`#ifdef USE_ENVMAP
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
#endif`,rm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,am=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,om=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cm=`#ifdef USE_GRADIENTMAP
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
}`,hm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,um=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,mm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,gm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_m=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ym=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
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
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Mm=`struct PhysicalMaterial {
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
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
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
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
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
#endif
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,Sm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,bm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Em=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Tm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Am=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Rm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Cm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Pm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Lm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Im=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Um=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Nm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fm=`#ifdef USE_MORPHNORMALS
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
#endif`,Om=`#ifdef USE_MORPHTARGETS
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
#endif`,zm=`#ifdef USE_MORPHTARGETS
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
#endif`,Bm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,km=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Hm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Xm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ym=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Zm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$m=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
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
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Km=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,t0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,e0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,n0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,i0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
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
#endif`,s0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,r0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
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
#endif`,a0=`float getShadowMask() {
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
}`,o0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,l0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,c0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,h0=`#ifdef USE_SKINNING
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
#endif`,u0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,f0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,d0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,p0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,m0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,g0=`#ifdef USE_TRANSMISSION
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
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
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
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
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
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,x0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,v0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,y0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,M0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,S0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,b0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,E0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,w0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,T0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,A0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
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
}`,R0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,C0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
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
}`,P0=`#define DISTANCE
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,L0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,I0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,D0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,U0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
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
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,N0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,F0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,O0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,z0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,B0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
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
}`,k0=`#define MATCAP
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
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,H0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,V0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
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
}`,G0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,W0=`#define PHONG
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
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,X0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,q0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
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
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
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
	#include <alphahash_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Y0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Z0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
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
}`,J0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,K0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Q0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,j0=`uniform float rotation;
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
}`,tg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ne={alphahash_fragment:Sp,alphahash_pars_fragment:bp,alphamap_fragment:Ep,alphamap_pars_fragment:wp,alphatest_fragment:Tp,alphatest_pars_fragment:Ap,aomap_fragment:Rp,aomap_pars_fragment:Cp,batching_pars_vertex:Pp,batching_vertex:Lp,begin_vertex:Ip,beginnormal_vertex:Dp,bsdfs:Up,iridescence_fragment:Np,bumpmap_pars_fragment:Fp,clipping_planes_fragment:Op,clipping_planes_pars_fragment:zp,clipping_planes_pars_vertex:Bp,clipping_planes_vertex:kp,color_fragment:Hp,color_pars_fragment:Vp,color_pars_vertex:Gp,color_vertex:Wp,common:Xp,cube_uv_reflection_fragment:qp,defaultnormal_vertex:Yp,displacementmap_pars_vertex:Zp,displacementmap_vertex:$p,emissivemap_fragment:Jp,emissivemap_pars_fragment:Kp,colorspace_fragment:Qp,colorspace_pars_fragment:jp,envmap_fragment:tm,envmap_common_pars_fragment:em,envmap_pars_fragment:nm,envmap_pars_vertex:im,envmap_physical_pars_fragment:mm,envmap_vertex:sm,fog_vertex:rm,fog_pars_vertex:am,fog_fragment:om,fog_pars_fragment:lm,gradientmap_pars_fragment:cm,lightmap_fragment:hm,lightmap_pars_fragment:um,lights_lambert_fragment:fm,lights_lambert_pars_fragment:dm,lights_pars_begin:pm,lights_toon_fragment:gm,lights_toon_pars_fragment:xm,lights_phong_fragment:_m,lights_phong_pars_fragment:vm,lights_physical_fragment:ym,lights_physical_pars_fragment:Mm,lights_fragment_begin:Sm,lights_fragment_maps:bm,lights_fragment_end:Em,logdepthbuf_fragment:wm,logdepthbuf_pars_fragment:Tm,logdepthbuf_pars_vertex:Am,logdepthbuf_vertex:Rm,map_fragment:Cm,map_pars_fragment:Pm,map_particle_fragment:Lm,map_particle_pars_fragment:Im,metalnessmap_fragment:Dm,metalnessmap_pars_fragment:Um,morphcolor_vertex:Nm,morphnormal_vertex:Fm,morphtarget_pars_vertex:Om,morphtarget_vertex:zm,normal_fragment_begin:Bm,normal_fragment_maps:km,normal_pars_fragment:Hm,normal_pars_vertex:Vm,normal_vertex:Gm,normalmap_pars_fragment:Wm,clearcoat_normal_fragment_begin:Xm,clearcoat_normal_fragment_maps:qm,clearcoat_pars_fragment:Ym,iridescence_pars_fragment:Zm,opaque_fragment:$m,packing:Jm,premultiplied_alpha_fragment:Km,project_vertex:Qm,dithering_fragment:jm,dithering_pars_fragment:t0,roughnessmap_fragment:e0,roughnessmap_pars_fragment:n0,shadowmap_pars_fragment:i0,shadowmap_pars_vertex:s0,shadowmap_vertex:r0,shadowmask_pars_fragment:a0,skinbase_vertex:o0,skinning_pars_vertex:l0,skinning_vertex:c0,skinnormal_vertex:h0,specularmap_fragment:u0,specularmap_pars_fragment:f0,tonemapping_fragment:d0,tonemapping_pars_fragment:p0,transmission_fragment:m0,transmission_pars_fragment:g0,uv_pars_fragment:x0,uv_pars_vertex:_0,uv_vertex:v0,worldpos_vertex:y0,background_vert:M0,background_frag:S0,backgroundCube_vert:b0,backgroundCube_frag:E0,cube_vert:w0,cube_frag:T0,depth_vert:A0,depth_frag:R0,distanceRGBA_vert:C0,distanceRGBA_frag:P0,equirect_vert:L0,equirect_frag:I0,linedashed_vert:D0,linedashed_frag:U0,meshbasic_vert:N0,meshbasic_frag:F0,meshlambert_vert:O0,meshlambert_frag:z0,meshmatcap_vert:B0,meshmatcap_frag:k0,meshnormal_vert:H0,meshnormal_frag:V0,meshphong_vert:G0,meshphong_frag:W0,meshphysical_vert:X0,meshphysical_frag:q0,meshtoon_vert:Y0,meshtoon_frag:Z0,points_vert:$0,points_frag:J0,shadow_vert:K0,shadow_frag:Q0,sprite_vert:j0,sprite_frag:tg},gt={common:{diffuse:{value:new Lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ie}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ie},normalScale:{value:new St(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0},uvTransform:{value:new ie}},sprite:{diffuse:{value:new Lt(16777215)},opacity:{value:1},center:{value:new St(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}}},Xn={basic:{uniforms:xn([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:ne.meshbasic_vert,fragmentShader:ne.meshbasic_frag},lambert:{uniforms:xn([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Lt(0)}}]),vertexShader:ne.meshlambert_vert,fragmentShader:ne.meshlambert_frag},phong:{uniforms:xn([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Lt(0)},specular:{value:new Lt(1118481)},shininess:{value:30}}]),vertexShader:ne.meshphong_vert,fragmentShader:ne.meshphong_frag},standard:{uniforms:xn([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new Lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag},toon:{uniforms:xn([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new Lt(0)}}]),vertexShader:ne.meshtoon_vert,fragmentShader:ne.meshtoon_frag},matcap:{uniforms:xn([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:ne.meshmatcap_vert,fragmentShader:ne.meshmatcap_frag},points:{uniforms:xn([gt.points,gt.fog]),vertexShader:ne.points_vert,fragmentShader:ne.points_frag},dashed:{uniforms:xn([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ne.linedashed_vert,fragmentShader:ne.linedashed_frag},depth:{uniforms:xn([gt.common,gt.displacementmap]),vertexShader:ne.depth_vert,fragmentShader:ne.depth_frag},normal:{uniforms:xn([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:ne.meshnormal_vert,fragmentShader:ne.meshnormal_frag},sprite:{uniforms:xn([gt.sprite,gt.fog]),vertexShader:ne.sprite_vert,fragmentShader:ne.sprite_frag},background:{uniforms:{uvTransform:{value:new ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ne.background_vert,fragmentShader:ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ne.backgroundCube_vert,fragmentShader:ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ne.cube_vert,fragmentShader:ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ne.equirect_vert,fragmentShader:ne.equirect_frag},distanceRGBA:{uniforms:xn([gt.common,gt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ne.distanceRGBA_vert,fragmentShader:ne.distanceRGBA_frag},shadow:{uniforms:xn([gt.lights,gt.fog,{color:{value:new Lt(0)},opacity:{value:1}}]),vertexShader:ne.shadow_vert,fragmentShader:ne.shadow_frag}};Xn.physical={uniforms:xn([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ie},clearcoatNormalScale:{value:new St(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ie},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ie},sheen:{value:0},sheenColor:{value:new Lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ie},transmissionSamplerSize:{value:new St},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ie},attenuationDistance:{value:0},attenuationColor:{value:new Lt(0)},specularColor:{value:new Lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ie},anisotropyVector:{value:new St},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ie}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag};var ma={r:0,b:0,g:0};function eg(i,t,e,n,s,r,a){let o=new Lt(0),l=r===!0?0:1,c,h,u=null,p=0,d=null;function g(m,f){let y=!1,_=f.isScene===!0?f.background:null;_&&_.isTexture&&(_=(f.backgroundBlurriness>0?e:t).get(_)),_===null?x(o,l):_&&_.isColor&&(x(_,1),y=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,a):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),_&&(_.isCubeTexture||_.mapping===ro)?(h===void 0&&(h=new ae(new Ln(1,1,1),new Ve({name:"BackgroundCubeMaterial",uniforms:Ys(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,E,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=ve.getTransfer(_.colorSpace)!==Ae,(u!==_||p!==_.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=_,p=_.version,d=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new ae(new Dl(2,2),new Ve({name:"BackgroundMaterial",uniforms:Ys(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:Di,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=ve.getTransfer(_.colorSpace)!==Ae,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||p!==_.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=_,p=_.version,d=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function x(m,f){m.getRGB(ma,Vu(i)),n.buffers.color.setClear(ma.r,ma.g,ma.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(m,f=1){o.set(m),l=f,x(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,x(o,l)},render:g}}function ng(i,t,e,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=m(null),c=l,h=!1;function u(O,W,K,it,Q){let et=!1;if(a){let ot=x(it,K,W);c!==ot&&(c=ot,d(c.object)),et=f(O,it,K,Q),et&&y(O,it,K,Q)}else{let ot=W.wireframe===!0;(c.geometry!==it.id||c.program!==K.id||c.wireframe!==ot)&&(c.geometry=it.id,c.program=K.id,c.wireframe=ot,et=!0)}Q!==null&&e.update(Q,i.ELEMENT_ARRAY_BUFFER),(et||h)&&(h=!1,k(O,W,K,it),Q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function p(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function d(O){return n.isWebGL2?i.bindVertexArray(O):r.bindVertexArrayOES(O)}function g(O){return n.isWebGL2?i.deleteVertexArray(O):r.deleteVertexArrayOES(O)}function x(O,W,K){let it=K.wireframe===!0,Q=o[O.id];Q===void 0&&(Q={},o[O.id]=Q);let et=Q[W.id];et===void 0&&(et={},Q[W.id]=et);let ot=et[it];return ot===void 0&&(ot=m(p()),et[it]=ot),ot}function m(O){let W=[],K=[],it=[];for(let Q=0;Q<s;Q++)W[Q]=0,K[Q]=0,it[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:K,attributeDivisors:it,object:O,attributes:{},index:null}}function f(O,W,K,it){let Q=c.attributes,et=W.attributes,ot=0,ht=K.getAttributes();for(let Et in ht)if(ht[Et].location>=0){let st=Q[Et],bt=et[Et];if(bt===void 0&&(Et==="instanceMatrix"&&O.instanceMatrix&&(bt=O.instanceMatrix),Et==="instanceColor"&&O.instanceColor&&(bt=O.instanceColor)),st===void 0||st.attribute!==bt||bt&&st.data!==bt.data)return!0;ot++}return c.attributesNum!==ot||c.index!==it}function y(O,W,K,it){let Q={},et=W.attributes,ot=0,ht=K.getAttributes();for(let Et in ht)if(ht[Et].location>=0){let st=et[Et];st===void 0&&(Et==="instanceMatrix"&&O.instanceMatrix&&(st=O.instanceMatrix),Et==="instanceColor"&&O.instanceColor&&(st=O.instanceColor));let bt={};bt.attribute=st,st&&st.data&&(bt.data=st.data),Q[Et]=bt,ot++}c.attributes=Q,c.attributesNum=ot,c.index=it}function _(){let O=c.newAttributes;for(let W=0,K=O.length;W<K;W++)O[W]=0}function b(O){C(O,0)}function C(O,W){let K=c.newAttributes,it=c.enabledAttributes,Q=c.attributeDivisors;K[O]=1,it[O]===0&&(i.enableVertexAttribArray(O),it[O]=1),Q[O]!==W&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,W),Q[O]=W)}function E(){let O=c.newAttributes,W=c.enabledAttributes;for(let K=0,it=W.length;K<it;K++)W[K]!==O[K]&&(i.disableVertexAttribArray(K),W[K]=0)}function L(O,W,K,it,Q,et,ot){ot===!0?i.vertexAttribIPointer(O,W,K,Q,et):i.vertexAttribPointer(O,W,K,it,Q,et)}function k(O,W,K,it){if(n.isWebGL2===!1&&(O.isInstancedMesh||it.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;_();let Q=it.attributes,et=K.getAttributes(),ot=W.defaultAttributeValues;for(let ht in et){let Et=et[ht];if(Et.location>=0){let J=Q[ht];if(J===void 0&&(ht==="instanceMatrix"&&O.instanceMatrix&&(J=O.instanceMatrix),ht==="instanceColor"&&O.instanceColor&&(J=O.instanceColor)),J!==void 0){let st=J.normalized,bt=J.itemSize,At=e.get(J);if(At===void 0)continue;let Pt=At.buffer,Zt=At.type,Jt=At.bytesPerElement,kt=n.isWebGL2===!0&&(Zt===i.INT||Zt===i.UNSIGNED_INT||J.gpuType===Pu);if(J.isInterleavedBufferAttribute){let le=J.data,X=le.stride,Ke=J.offset;if(le.isInstancedInterleavedBuffer){for(let Ft=0;Ft<Et.locationSize;Ft++)C(Et.location+Ft,le.meshPerAttribute);O.isInstancedMesh!==!0&&it._maxInstanceCount===void 0&&(it._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Ft=0;Ft<Et.locationSize;Ft++)b(Et.location+Ft);i.bindBuffer(i.ARRAY_BUFFER,Pt);for(let Ft=0;Ft<Et.locationSize;Ft++)L(Et.location+Ft,bt/Et.locationSize,Zt,st,X*Jt,(Ke+bt/Et.locationSize*Ft)*Jt,kt)}else{if(J.isInstancedBufferAttribute){for(let le=0;le<Et.locationSize;le++)C(Et.location+le,J.meshPerAttribute);O.isInstancedMesh!==!0&&it._maxInstanceCount===void 0&&(it._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let le=0;le<Et.locationSize;le++)b(Et.location+le);i.bindBuffer(i.ARRAY_BUFFER,Pt);for(let le=0;le<Et.locationSize;le++)L(Et.location+le,bt/Et.locationSize,Zt,st,bt*Jt,bt/Et.locationSize*le*Jt,kt)}}else if(ot!==void 0){let st=ot[ht];if(st!==void 0)switch(st.length){case 2:i.vertexAttrib2fv(Et.location,st);break;case 3:i.vertexAttrib3fv(Et.location,st);break;case 4:i.vertexAttrib4fv(Et.location,st);break;default:i.vertexAttrib1fv(Et.location,st)}}}}E()}function S(){$();for(let O in o){let W=o[O];for(let K in W){let it=W[K];for(let Q in it)g(it[Q].object),delete it[Q];delete W[K]}delete o[O]}}function T(O){if(o[O.id]===void 0)return;let W=o[O.id];for(let K in W){let it=W[K];for(let Q in it)g(it[Q].object),delete it[Q];delete W[K]}delete o[O.id]}function V(O){for(let W in o){let K=o[W];if(K[O.id]===void 0)continue;let it=K[O.id];for(let Q in it)g(it[Q].object),delete it[Q];delete K[O.id]}}function $(){ft(),h=!0,c!==l&&(c=l,d(c.object))}function ft(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:$,resetDefaultState:ft,dispose:S,releaseStatesOfGeometry:T,releaseStatesOfProgram:V,initAttributes:_,enableAttribute:b,disableUnusedAttributes:E}}function ig(i,t,e,n){let s=n.isWebGL2,r;function a(h){r=h}function o(h,u){i.drawArrays(r,h,u),e.update(u,r,1)}function l(h,u,p){if(p===0)return;let d,g;if(s)d=i,g="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[g](r,h,u,p),e.update(u,r,p)}function c(h,u,p){if(p===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<p;g++)this.render(h[g],u[g]);else{d.multiDrawArraysWEBGL(r,h,0,u,0,p);let g=0;for(let x=0;x<p;x++)g+=u[x];e.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function sg(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let L=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext!="undefined"&&i.constructor.name==="WebGL2RenderingContext",o=e.precision!==void 0?e.precision:"highp",l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let c=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),f=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),_=p>0,b=a||t.has("OES_texture_float"),C=_&&b,E=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:p,maxTextureSize:d,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:y,vertexTextures:_,floatFragmentTextures:b,floatVertexTextures:C,maxSamples:E}}function rg(i){let t=this,e=null,n=0,s=!1,r=!1,a=new ri,o=new ie,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,p){let d=u.length!==0||p||n!==0||s;return s=p,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,p){e=h(u,p,0)},this.setState=function(u,p,d){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let y=r?0:n,_=y*4,b=f.clippingState||null;l.value=b,b=h(g,p,_,d);for(let C=0;C!==_;++C)b[C]=e[C];f.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,p,d,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let f=d+x*4,y=p.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<f)&&(m=new Float32Array(f));for(let _=0,b=d;_!==x;++_,b+=4)a.copy(u[_]).applyMatrix4(y,o),a.normal.toArray(m,b),m[b+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function ag(i){let t=new WeakMap;function e(a,o){return o===bl?a.mapping=Gs:o===El&&(a.mapping=Ws),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===bl||o===El)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Il(l.height/2);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Zs=class extends Ha{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},zs=4,Qh=[.125,.215,.35,.446,.526,.582],Ki=20,ul=new Zs,jh=new Lt,fl=null,dl=0,pl=0,$i=(1+Math.sqrt(5))/2,Is=1/$i,tu=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,$i,Is),new U(0,$i,-Is),new U(Is,0,$i),new U(-Is,0,$i),new U($i,Is,0),new U(-$i,Is,0)],Ga=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){fl=this._renderer.getRenderTarget(),dl=this._renderer.getActiveCubeFace(),pl=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=iu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(fl,dl,pl),t.scissorTest=!1,ga(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Gs||t.mapping===Ws?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),fl=this._renderer.getRenderTarget(),dl=this._renderer.getActiveCubeFace(),pl=this._renderer.getActiveMipmapLevel();let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:_n,minFilter:_n,generateMipmaps:!1,type:is,format:kn,colorSpace:li,depthBuffer:!1},s=eu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=eu(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=og(r)),this._blurMaterial=lg(r,t,e)}return s}_compileMaterial(t){let e=new ae(this._lodPlanes[0],t);this._renderer.compile(e,ul)}_sceneToCubeUV(t,e,n,s){let o=new an(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,p=h.toneMapping;h.getClearColor(jh),h.toneMapping=Li,h.autoClear=!1;let d=new on({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1}),g=new ae(new Ln,d),x=!1,m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,x=!0):(d.color.copy(jh),x=!0);for(let f=0;f<6;f++){let y=f%3;y===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):y===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));let _=this._cubeSize;ga(s,y*_,f>2?_:0,_,_),h.setRenderTarget(s),x&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=p,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Gs||t.mapping===Ws;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=iu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nu());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new ae(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;ga(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,ul)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=tu[(s-1)%tu.length];this._blur(t,s-1,s,r,a)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new ae(this._lodPlanes[s],c),p=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Ki-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):Ki;m>Ki&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ki}`);let f=[],y=0;for(let L=0;L<Ki;++L){let k=L/x,S=Math.exp(-k*k/2);f.push(S),L===0?y+=S:L<m&&(y+=2*S)}for(let L=0;L<f.length;L++)f[L]=f[L]/y;p.envMap.value=t.texture,p.samples.value=m,p.weights.value=f,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);let{_lodMax:_}=this;p.dTheta.value=g,p.mipInt.value=_-n;let b=this._sizeLods[s],C=3*b*(s>_-zs?s-_+zs:0),E=4*(this._cubeSize-b);ga(e,C,E,3*b,2*b),l.setRenderTarget(e),l.render(u,ul)}};function og(i){let t=[],e=[],n=[],s=i,r=i-zs+1+Qh.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>i-zs?l=Qh[a-i+zs-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,p=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,x=3,m=2,f=1,y=new Float32Array(x*g*d),_=new Float32Array(m*g*d),b=new Float32Array(f*g*d);for(let E=0;E<d;E++){let L=E%3*2/3-1,k=E>2?0:-1,S=[L,k,0,L+2/3,k,0,L+2/3,k+1,0,L,k,0,L+2/3,k+1,0,L,k+1,0];y.set(S,x*g*E),_.set(p,m*g*E);let T=[E,E,E,E,E,E];b.set(T,f*g*E)}let C=new ge;C.setAttribute("position",new fe(y,x)),C.setAttribute("uv",new fe(_,m)),C.setAttribute("faceIndex",new fe(b,f)),t.push(C),s>zs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function eu(i,t,e){let n=new Cn(i,t,e);return n.texture.mapping=ro,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ga(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function lg(i,t,e){let n=new Float32Array(Ki),s=new U(0,1,0);return new Ve({name:"SphericalGaussianBlur",defines:{n:Ki,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:vc(),fragmentShader:`

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
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function nu(){return new Ve({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vc(),fragmentShader:`

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
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function iu(){return new Ve({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function vc(){return`

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
	`}function cg(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===bl||l===El,h=l===Gs||l===Ws;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=t.get(o);return e===null&&(e=new Ga(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),t.set(o,u),u.texture}else{if(t.has(o))return t.get(o).texture;{let u=o.image;if(c&&u&&u.height>0||h&&u&&s(u)){e===null&&(e=new Ga(i));let p=c?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,p),o.addEventListener("dispose",r),p.texture}else return null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function hg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){let s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function ug(i,t,e,n){let s={},r=new WeakMap;function a(u){let p=u.target;p.index!==null&&t.remove(p.index);for(let g in p.attributes)t.remove(p.attributes[g]);for(let g in p.morphAttributes){let x=p.morphAttributes[g];for(let m=0,f=x.length;m<f;m++)t.remove(x[m])}p.removeEventListener("dispose",a),delete s[p.id];let d=r.get(p);d&&(t.remove(d),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function o(u,p){return s[p.id]===!0||(p.addEventListener("dispose",a),s[p.id]=!0,e.memory.geometries++),p}function l(u){let p=u.attributes;for(let g in p)t.update(p[g],i.ARRAY_BUFFER);let d=u.morphAttributes;for(let g in d){let x=d[g];for(let m=0,f=x.length;m<f;m++)t.update(x[m],i.ARRAY_BUFFER)}}function c(u){let p=[],d=u.index,g=u.attributes.position,x=0;if(d!==null){let y=d.array;x=d.version;for(let _=0,b=y.length;_<b;_+=3){let C=y[_+0],E=y[_+1],L=y[_+2];p.push(C,E,E,L,L,C)}}else if(g!==void 0){let y=g.array;x=g.version;for(let _=0,b=y.length/3-1;_<b;_+=3){let C=_+0,E=_+1,L=_+2;p.push(C,E,E,L,L,C)}}else return;let m=new(ku(p)?ka:Ba)(p,1);m.version=x;let f=r.get(u);f&&t.remove(f),r.set(u,m)}function h(u){let p=r.get(u);if(p){let d=u.index;d!==null&&p.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function fg(i,t,e,n){let s=n.isWebGL2,r;function a(d){r=d}let o,l;function c(d){o=d.type,l=d.bytesPerElement}function h(d,g){i.drawElements(r,g,o,d*l),e.update(g,r,1)}function u(d,g,x){if(x===0)return;let m,f;if(s)m=i,f="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](r,g,o,d*l,x),e.update(g,r,x)}function p(d,g,x){if(x===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<x;f++)this.render(d[f]/l,g[f]);else{m.multiDrawElementsWEBGL(r,g,0,o,d,0,x);let f=0;for(let y=0;y<x;y++)f+=g[y];e.update(f,r,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=p}function dg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function pg(i,t){return i[0]-t[0]}function mg(i,t){return Math.abs(t[1])-Math.abs(i[1])}function gg(i,t,e){let n={},s=new Float32Array(8),r=new WeakMap,a=new en,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,u){let p=c.morphTargetInfluences;if(t.isWebGL2===!0){let d=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=d!==void 0?d.length:0,x=r.get(h);if(x===void 0||x.count!==g){let O=function(){$.dispose(),r.delete(h),h.removeEventListener("dispose",O)};x!==void 0&&x.texture.dispose();let y=h.morphAttributes.position!==void 0,_=h.morphAttributes.normal!==void 0,b=h.morphAttributes.color!==void 0,C=h.morphAttributes.position||[],E=h.morphAttributes.normal||[],L=h.morphAttributes.color||[],k=0;y===!0&&(k=1),_===!0&&(k=2),b===!0&&(k=3);let S=h.attributes.position.count*k,T=1;S>t.maxTextureSize&&(T=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);let V=new Float32Array(S*T*4*g),$=new Fa(V,S,T,g);$.type=Ci,$.needsUpdate=!0;let ft=k*4;for(let W=0;W<g;W++){let K=C[W],it=E[W],Q=L[W],et=S*T*4*W;for(let ot=0;ot<K.count;ot++){let ht=ot*ft;y===!0&&(a.fromBufferAttribute(K,ot),V[et+ht+0]=a.x,V[et+ht+1]=a.y,V[et+ht+2]=a.z,V[et+ht+3]=0),_===!0&&(a.fromBufferAttribute(it,ot),V[et+ht+4]=a.x,V[et+ht+5]=a.y,V[et+ht+6]=a.z,V[et+ht+7]=0),b===!0&&(a.fromBufferAttribute(Q,ot),V[et+ht+8]=a.x,V[et+ht+9]=a.y,V[et+ht+10]=a.z,V[et+ht+11]=Q.itemSize===4?a.w:1)}}x={count:g,texture:$,size:new St(S,T)},r.set(h,x),h.addEventListener("dispose",O)}let m=0;for(let y=0;y<p.length;y++)m+=p[y];let f=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(i,"morphTargetBaseInfluence",f),u.getUniforms().setValue(i,"morphTargetInfluences",p),u.getUniforms().setValue(i,"morphTargetsTexture",x.texture,e),u.getUniforms().setValue(i,"morphTargetsTextureSize",x.size)}else{let d=p===void 0?0:p.length,g=n[h.id];if(g===void 0||g.length!==d){g=[];for(let _=0;_<d;_++)g[_]=[_,0];n[h.id]=g}for(let _=0;_<d;_++){let b=g[_];b[0]=_,b[1]=p[_]}g.sort(mg);for(let _=0;_<8;_++)_<d&&g[_][1]?(o[_][0]=g[_][0],o[_][1]=g[_][1]):(o[_][0]=Number.MAX_SAFE_INTEGER,o[_][1]=0);o.sort(pg);let x=h.morphAttributes.position,m=h.morphAttributes.normal,f=0;for(let _=0;_<8;_++){let b=o[_],C=b[0],E=b[1];C!==Number.MAX_SAFE_INTEGER&&E?(x&&h.getAttribute("morphTarget"+_)!==x[C]&&h.setAttribute("morphTarget"+_,x[C]),m&&h.getAttribute("morphNormal"+_)!==m[C]&&h.setAttribute("morphNormal"+_,m[C]),s[_]=E,f+=E):(x&&h.hasAttribute("morphTarget"+_)===!0&&h.deleteAttribute("morphTarget"+_),m&&h.hasAttribute("morphNormal"+_)===!0&&h.deleteAttribute("morphNormal"+_),s[_]=0)}let y=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(i,"morphTargetBaseInfluence",y),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function xg(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let p=l.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var Wa=class extends Rn{constructor(t,e,n,s,r,a,o,l,c,h){if(h=h!==void 0?h:ts,h!==ts&&h!==Xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ts&&(n=Ri),n===void 0&&h===Xs&&(n=ji),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:sn,this.minFilter=l!==void 0?l:sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Wu=new Rn,Xu=new Wa(1,1);Xu.compareFunction=Bu;var qu=new Fa,Yu=new Pl,Zu=new Va,su=[],ru=[],au=new Float32Array(16),ou=new Float32Array(9),lu=new Float32Array(4);function tr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=su[s];if(r===void 0&&(r=new Float32Array(s),su[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function qe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ye(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function oo(i,t){let e=ru[t];e===void 0&&(e=new Int32Array(t),ru[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function _g(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function vg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;i.uniform2fv(this.addr,t),Ye(e,t)}}function yg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(qe(e,t))return;i.uniform3fv(this.addr,t),Ye(e,t)}}function Mg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;i.uniform4fv(this.addr,t),Ye(e,t)}}function Sg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,n))return;lu.set(n),i.uniformMatrix2fv(this.addr,!1,lu),Ye(e,n)}}function bg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,n))return;ou.set(n),i.uniformMatrix3fv(this.addr,!1,ou),Ye(e,n)}}function Eg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,n))return;au.set(n),i.uniformMatrix4fv(this.addr,!1,au),Ye(e,n)}}function wg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Tg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;i.uniform2iv(this.addr,t),Ye(e,t)}}function Ag(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;i.uniform3iv(this.addr,t),Ye(e,t)}}function Rg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;i.uniform4iv(this.addr,t),Ye(e,t)}}function Cg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Pg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;i.uniform2uiv(this.addr,t),Ye(e,t)}}function Lg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;i.uniform3uiv(this.addr,t),Ye(e,t)}}function Ig(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;i.uniform4uiv(this.addr,t),Ye(e,t)}}function Dg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?Xu:Wu;e.setTexture2D(t||r,s)}function Ug(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Yu,s)}function Ng(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Zu,s)}function Fg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||qu,s)}function Og(i){switch(i){case 5126:return _g;case 35664:return vg;case 35665:return yg;case 35666:return Mg;case 35674:return Sg;case 35675:return bg;case 35676:return Eg;case 5124:case 35670:return wg;case 35667:case 35671:return Tg;case 35668:case 35672:return Ag;case 35669:case 35673:return Rg;case 5125:return Cg;case 36294:return Pg;case 36295:return Lg;case 36296:return Ig;case 35678:case 36198:case 36298:case 36306:case 35682:return Dg;case 35679:case 36299:case 36307:return Ug;case 35680:case 36300:case 36308:case 36293:return Ng;case 36289:case 36303:case 36311:case 36292:return Fg}}function zg(i,t){i.uniform1fv(this.addr,t)}function Bg(i,t){let e=tr(t,this.size,2);i.uniform2fv(this.addr,e)}function kg(i,t){let e=tr(t,this.size,3);i.uniform3fv(this.addr,e)}function Hg(i,t){let e=tr(t,this.size,4);i.uniform4fv(this.addr,e)}function Vg(i,t){let e=tr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Gg(i,t){let e=tr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Wg(i,t){let e=tr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Xg(i,t){i.uniform1iv(this.addr,t)}function qg(i,t){i.uniform2iv(this.addr,t)}function Yg(i,t){i.uniform3iv(this.addr,t)}function Zg(i,t){i.uniform4iv(this.addr,t)}function $g(i,t){i.uniform1uiv(this.addr,t)}function Jg(i,t){i.uniform2uiv(this.addr,t)}function Kg(i,t){i.uniform3uiv(this.addr,t)}function Qg(i,t){i.uniform4uiv(this.addr,t)}function jg(i,t,e){let n=this.cache,s=t.length,r=oo(e,s);qe(n,r)||(i.uniform1iv(this.addr,r),Ye(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Wu,r[a])}function tx(i,t,e){let n=this.cache,s=t.length,r=oo(e,s);qe(n,r)||(i.uniform1iv(this.addr,r),Ye(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Yu,r[a])}function ex(i,t,e){let n=this.cache,s=t.length,r=oo(e,s);qe(n,r)||(i.uniform1iv(this.addr,r),Ye(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Zu,r[a])}function nx(i,t,e){let n=this.cache,s=t.length,r=oo(e,s);qe(n,r)||(i.uniform1iv(this.addr,r),Ye(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||qu,r[a])}function ix(i){switch(i){case 5126:return zg;case 35664:return Bg;case 35665:return kg;case 35666:return Hg;case 35674:return Vg;case 35675:return Gg;case 35676:return Wg;case 5124:case 35670:return Xg;case 35667:case 35671:return qg;case 35668:case 35672:return Yg;case 35669:case 35673:return Zg;case 5125:return $g;case 36294:return Jg;case 36295:return Kg;case 36296:return Qg;case 35678:case 36198:case 36298:case 36306:case 35682:return jg;case 35679:case 36299:case 36307:return tx;case 35680:case 36300:case 36308:case 36293:return ex;case 36289:case 36303:case 36311:case 36292:return nx}}var Ul=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Og(e.type)}},Nl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ix(e.type)}},Fl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},ml=/(\w+)(\])?(\[|\.)?/g;function cu(i,t){i.seq.push(t),i.map[t.id]=t}function sx(i,t,e){let n=i.name,s=n.length;for(ml.lastIndex=0;;){let r=ml.exec(n),a=ml.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){cu(e,c===void 0?new Ul(o,i,t):new Nl(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new Fl(o),cu(e,u)),e=u}}}var Vs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);sx(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function hu(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var rx=37297,ax=0;function ox(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function lx(i){let t=ve.getPrimaries(ve.workingColorSpace),e=ve.getPrimaries(i),n;switch(t===e?n="":t===Pa&&e===Ca?n="LinearDisplayP3ToLinearSRGB":t===Ca&&e===Pa&&(n="LinearSRGBToLinearDisplayP3"),i){case li:case ao:return[n,"LinearTransferOETF"];case Ue:case _c:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function uu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+ox(i.getShaderSource(t),a)}else return s}function cx(i,t){let e=lx(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function hx(i,t){let e;switch(t){case Rd:e="Linear";break;case Cd:e="Reinhard";break;case Pd:e="OptimizedCineon";break;case Ld:e="ACESFilmic";break;case Dd:e="AgX";break;case Id:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function ux(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Bs).join(`
`)}function fx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Bs).join(`
`)}function dx(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function px(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Bs(i){return i!==""}function fu(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function du(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var mx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ol(i){return i.replace(mx,xx)}var gx=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function xx(i,t){let e=ne[t];if(e===void 0){let n=gx.get(t);if(n!==void 0)e=ne[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ol(e)}var _x=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pu(i){return i.replace(_x,vx)}function vx(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function mu(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function yx(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ru?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===mc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===si&&(t="SHADOWMAP_TYPE_VSM"),t}function Mx(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Gs:case Ws:t="ENVMAP_TYPE_CUBE";break;case ro:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Sx(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ws:t="ENVMAP_MODE_REFRACTION";break}return t}function bx(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case gc:t="ENVMAP_BLENDING_MULTIPLY";break;case Td:t="ENVMAP_BLENDING_MIX";break;case Ad:t="ENVMAP_BLENDING_ADD";break}return t}function Ex(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function wx(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=yx(e),c=Mx(e),h=Sx(e),u=bx(e),p=Ex(e),d=e.isWebGL2?"":ux(e),g=fx(e),x=dx(r),m=s.createProgram(),f,y,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Bs).join(`
`),f.length>0&&(f+=`
`),y=[d,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Bs).join(`
`),y.length>0&&(y+=`
`)):(f=[mu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bs).join(`
`),y=[d,mu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Li?"#define TONE_MAPPING":"",e.toneMapping!==Li?ne.tonemapping_pars_fragment:"",e.toneMapping!==Li?hx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ne.colorspace_pars_fragment,cx("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Bs).join(`
`)),a=Ol(a),a=fu(a,e),a=du(a,e),o=Ol(o),o=fu(o,e),o=du(o,e),a=pu(a),o=pu(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,y=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Uh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Uh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);let b=_+f+a,C=_+y+o,E=hu(s,s.VERTEX_SHADER,b),L=hu(s,s.FRAGMENT_SHADER,C);s.attachShader(m,E),s.attachShader(m,L),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function k($){if(i.debug.checkShaderErrors){let ft=s.getProgramInfoLog(m).trim(),O=s.getShaderInfoLog(E).trim(),W=s.getShaderInfoLog(L).trim(),K=!0,it=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,E,L);else{let Q=uu(s,E,"vertex"),et=uu(s,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+ft+`
`+Q+`
`+et)}else ft!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ft):(O===""||W==="")&&(it=!1);it&&($.diagnostics={runnable:K,programLog:ft,vertexShader:{log:O,prefix:f},fragmentShader:{log:W,prefix:y}})}s.deleteShader(E),s.deleteShader(L),S=new Vs(s,m),T=px(s,m)}let S;this.getUniforms=function(){return S===void 0&&k(this),S};let T;this.getAttributes=function(){return T===void 0&&k(this),T};let V=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=s.getProgramParameter(m,rx)),V},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ax++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=E,this.fragmentShader=L,this}var Tx=0,zl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Bl(t),e.set(t,n)),n}},Bl=class{constructor(t){this.id=Tx++,this.code=t,this.usedTimes=0}};function Ax(i,t,e,n,s,r,a){let o=new za,l=new zl,c=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,p=s.vertexTextures,d=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return S===0?"uv":`uv${S}`}function m(S,T,V,$,ft){let O=$.fog,W=ft.geometry,K=S.isMeshStandardMaterial?$.environment:null,it=(S.isMeshStandardMaterial?e:t).get(S.envMap||K),Q=it&&it.mapping===ro?it.image.height:null,et=g[S.type];S.precision!==null&&(d=s.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));let ot=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ht=ot!==void 0?ot.length:0,Et=0;W.morphAttributes.position!==void 0&&(Et=1),W.morphAttributes.normal!==void 0&&(Et=2),W.morphAttributes.color!==void 0&&(Et=3);let J,st,bt,At;if(et){let Ge=Xn[et];J=Ge.vertexShader,st=Ge.fragmentShader}else J=S.vertexShader,st=S.fragmentShader,l.update(S),bt=l.getVertexShaderID(S),At=l.getFragmentShaderID(S);let Pt=i.getRenderTarget(),Zt=ft.isInstancedMesh===!0,Jt=ft.isBatchedMesh===!0,kt=!!S.map,le=!!S.matcap,X=!!it,Ke=!!S.aoMap,Ft=!!S.lightMap,Xt=!!S.bumpMap,Rt=!!S.normalMap,Se=!!S.displacementMap,Kt=!!S.emissiveMap,A=!!S.metalnessMap,M=!!S.roughnessMap,q=S.anisotropy>0,lt=S.clearcoat>0,rt=S.iridescence>0,ct=S.sheen>0,Tt=S.transmission>0,_t=q&&!!S.anisotropyMap,wt=lt&&!!S.clearcoatMap,zt=lt&&!!S.clearcoatNormalMap,te=lt&&!!S.clearcoatRoughnessMap,at=rt&&!!S.iridescenceMap,de=rt&&!!S.iridescenceThicknessMap,re=ct&&!!S.sheenColorMap,Vt=ct&&!!S.sheenRoughnessMap,Dt=!!S.specularMap,mt=!!S.specularColorMap,$t=!!S.specularIntensityMap,ce=Tt&&!!S.transmissionMap,be=Tt&&!!S.thicknessMap,qt=!!S.gradientMap,pt=!!S.alphaMap,N=S.alphaTest>0,vt=!!S.alphaHash,yt=!!S.extensions,Bt=!!W.attributes.uv1,Nt=!!W.attributes.uv2,pe=!!W.attributes.uv3,_e=Li;return S.toneMapped&&(Pt===null||Pt.isXRRenderTarget===!0)&&(_e=i.toneMapping),{isWebGL2:h,shaderID:et,shaderType:S.type,shaderName:S.name,vertexShader:J,fragmentShader:st,defines:S.defines,customVertexShaderID:bt,customFragmentShaderID:At,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:Jt,instancing:Zt,instancingColor:Zt&&ft.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:Pt===null?i.outputColorSpace:Pt.isXRRenderTarget===!0?Pt.texture.colorSpace:li,map:kt,matcap:le,envMap:X,envMapMode:X&&it.mapping,envMapCubeUVHeight:Q,aoMap:Ke,lightMap:Ft,bumpMap:Xt,normalMap:Rt,displacementMap:p&&Se,emissiveMap:Kt,normalMapObjectSpace:Rt&&S.normalMapType===Xd,normalMapTangentSpace:Rt&&S.normalMapType===zu,metalnessMap:A,roughnessMap:M,anisotropy:q,anisotropyMap:_t,clearcoat:lt,clearcoatMap:wt,clearcoatNormalMap:zt,clearcoatRoughnessMap:te,iridescence:rt,iridescenceMap:at,iridescenceThicknessMap:de,sheen:ct,sheenColorMap:re,sheenRoughnessMap:Vt,specularMap:Dt,specularColorMap:mt,specularIntensityMap:$t,transmission:Tt,transmissionMap:ce,thicknessMap:be,gradientMap:qt,opaque:S.transparent===!1&&S.blending===ks,alphaMap:pt,alphaTest:N,alphaHash:vt,combine:S.combine,mapUv:kt&&x(S.map.channel),aoMapUv:Ke&&x(S.aoMap.channel),lightMapUv:Ft&&x(S.lightMap.channel),bumpMapUv:Xt&&x(S.bumpMap.channel),normalMapUv:Rt&&x(S.normalMap.channel),displacementMapUv:Se&&x(S.displacementMap.channel),emissiveMapUv:Kt&&x(S.emissiveMap.channel),metalnessMapUv:A&&x(S.metalnessMap.channel),roughnessMapUv:M&&x(S.roughnessMap.channel),anisotropyMapUv:_t&&x(S.anisotropyMap.channel),clearcoatMapUv:wt&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:zt&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:at&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:de&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:re&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:Vt&&x(S.sheenRoughnessMap.channel),specularMapUv:Dt&&x(S.specularMap.channel),specularColorMapUv:mt&&x(S.specularColorMap.channel),specularIntensityMapUv:$t&&x(S.specularIntensityMap.channel),transmissionMapUv:ce&&x(S.transmissionMap.channel),thicknessMapUv:be&&x(S.thicknessMap.channel),alphaMapUv:pt&&x(S.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Rt||q),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,vertexUv1s:Bt,vertexUv2s:Nt,vertexUv3s:pe,pointsUvs:ft.isPoints===!0&&!!W.attributes.uv&&(kt||pt),fog:!!O,useFog:S.fog===!0,fogExp2:O&&O.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:ft.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:ht,morphTextureStride:Et,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&V.length>0,shadowMapType:i.shadowMap.type,toneMapping:_e,useLegacyLights:i._useLegacyLights,decodeVideoTexture:kt&&S.map.isVideoTexture===!0&&ve.getTransfer(S.map.colorSpace)===Ae,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===vn,flipSided:S.side===un,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:yt&&S.extensions.derivatives===!0,extensionFragDepth:yt&&S.extensions.fragDepth===!0,extensionDrawBuffers:yt&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:yt&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:yt&&S.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function f(S){let T=[];if(S.shaderID?T.push(S.shaderID):(T.push(S.customVertexShaderID),T.push(S.customFragmentShaderID)),S.defines!==void 0)for(let V in S.defines)T.push(V),T.push(S.defines[V]);return S.isRawShaderMaterial===!1&&(y(T,S),_(T,S),T.push(i.outputColorSpace)),T.push(S.customProgramCacheKey),T.join()}function y(S,T){S.push(T.precision),S.push(T.outputColorSpace),S.push(T.envMapMode),S.push(T.envMapCubeUVHeight),S.push(T.mapUv),S.push(T.alphaMapUv),S.push(T.lightMapUv),S.push(T.aoMapUv),S.push(T.bumpMapUv),S.push(T.normalMapUv),S.push(T.displacementMapUv),S.push(T.emissiveMapUv),S.push(T.metalnessMapUv),S.push(T.roughnessMapUv),S.push(T.anisotropyMapUv),S.push(T.clearcoatMapUv),S.push(T.clearcoatNormalMapUv),S.push(T.clearcoatRoughnessMapUv),S.push(T.iridescenceMapUv),S.push(T.iridescenceThicknessMapUv),S.push(T.sheenColorMapUv),S.push(T.sheenRoughnessMapUv),S.push(T.specularMapUv),S.push(T.specularColorMapUv),S.push(T.specularIntensityMapUv),S.push(T.transmissionMapUv),S.push(T.thicknessMapUv),S.push(T.combine),S.push(T.fogExp2),S.push(T.sizeAttenuation),S.push(T.morphTargetsCount),S.push(T.morphAttributeCount),S.push(T.numDirLights),S.push(T.numPointLights),S.push(T.numSpotLights),S.push(T.numSpotLightMaps),S.push(T.numHemiLights),S.push(T.numRectAreaLights),S.push(T.numDirLightShadows),S.push(T.numPointLightShadows),S.push(T.numSpotLightShadows),S.push(T.numSpotLightShadowsWithMaps),S.push(T.numLightProbes),S.push(T.shadowMapType),S.push(T.toneMapping),S.push(T.numClippingPlanes),S.push(T.numClipIntersection),S.push(T.depthPacking)}function _(S,T){o.disableAll(),T.isWebGL2&&o.enable(0),T.supportsVertexTextures&&o.enable(1),T.instancing&&o.enable(2),T.instancingColor&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),T.anisotropy&&o.enable(17),T.alphaHash&&o.enable(18),T.batching&&o.enable(19),S.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.skinning&&o.enable(4),T.morphTargets&&o.enable(5),T.morphNormals&&o.enable(6),T.morphColors&&o.enable(7),T.premultipliedAlpha&&o.enable(8),T.shadowMapEnabled&&o.enable(9),T.useLegacyLights&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),S.push(o.mask)}function b(S){let T=g[S.type],V;if(T){let $=Xn[T];V=gp.clone($.uniforms)}else V=S.uniforms;return V}function C(S,T){let V;for(let $=0,ft=c.length;$<ft;$++){let O=c[$];if(O.cacheKey===T){V=O,++V.usedTimes;break}}return V===void 0&&(V=new wx(i,T,S,r),c.push(V)),V}function E(S){if(--S.usedTimes===0){let T=c.indexOf(S);c[T]=c[c.length-1],c.pop(),S.destroy()}}function L(S){l.remove(S)}function k(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:b,acquireProgram:C,releaseProgram:E,releaseShaderCache:L,programs:c,dispose:k}}function Rx(){let i=new WeakMap;function t(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function e(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function Cx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function gu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function xu(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,p,d,g,x,m){let f=i[t];return f===void 0?(f={id:u.id,object:u,geometry:p,material:d,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},i[t]=f):(f.id=u.id,f.object=u,f.geometry=p,f.material=d,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=x,f.group=m),t++,f}function o(u,p,d,g,x,m){let f=a(u,p,d,g,x,m);d.transmission>0?n.push(f):d.transparent===!0?s.push(f):e.push(f)}function l(u,p,d,g,x,m){let f=a(u,p,d,g,x,m);d.transmission>0?n.unshift(f):d.transparent===!0?s.unshift(f):e.unshift(f)}function c(u,p){e.length>1&&e.sort(u||Cx),n.length>1&&n.sort(p||gu),s.length>1&&s.sort(p||gu)}function h(){for(let u=t,p=i.length;u<p;u++){let d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function Px(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new xu,i.set(n,[a])):s>=r.length?(a=new xu,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Lx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new Lt};break;case"SpotLight":e={position:new U,direction:new U,color:new Lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new Lt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new Lt,groundColor:new Lt};break;case"RectAreaLight":e={color:new Lt,position:new U,halfWidth:new U,halfHeight:new U};break}return i[t.id]=e,e}}}function Ix(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Dx=0;function Ux(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Nx(i,t){let e=new Lx,n=Ix(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new U);let r=new U,a=new ue,o=new ue;function l(h,u){let p=0,d=0,g=0;for(let $=0;$<9;$++)s.probe[$].set(0,0,0);let x=0,m=0,f=0,y=0,_=0,b=0,C=0,E=0,L=0,k=0,S=0;h.sort(Ux);let T=u===!0?Math.PI:1;for(let $=0,ft=h.length;$<ft;$++){let O=h[$],W=O.color,K=O.intensity,it=O.distance,Q=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)p+=W.r*K*T,d+=W.g*K*T,g+=W.b*K*T;else if(O.isLightProbe){for(let et=0;et<9;et++)s.probe[et].addScaledVector(O.sh.coefficients[et],K);S++}else if(O.isDirectionalLight){let et=e.get(O);if(et.color.copy(O.color).multiplyScalar(O.intensity*T),O.castShadow){let ot=O.shadow,ht=n.get(O);ht.shadowBias=ot.bias,ht.shadowNormalBias=ot.normalBias,ht.shadowRadius=ot.radius,ht.shadowMapSize=ot.mapSize,s.directionalShadow[x]=ht,s.directionalShadowMap[x]=Q,s.directionalShadowMatrix[x]=O.shadow.matrix,b++}s.directional[x]=et,x++}else if(O.isSpotLight){let et=e.get(O);et.position.setFromMatrixPosition(O.matrixWorld),et.color.copy(W).multiplyScalar(K*T),et.distance=it,et.coneCos=Math.cos(O.angle),et.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),et.decay=O.decay,s.spot[f]=et;let ot=O.shadow;if(O.map&&(s.spotLightMap[L]=O.map,L++,ot.updateMatrices(O),O.castShadow&&k++),s.spotLightMatrix[f]=ot.matrix,O.castShadow){let ht=n.get(O);ht.shadowBias=ot.bias,ht.shadowNormalBias=ot.normalBias,ht.shadowRadius=ot.radius,ht.shadowMapSize=ot.mapSize,s.spotShadow[f]=ht,s.spotShadowMap[f]=Q,E++}f++}else if(O.isRectAreaLight){let et=e.get(O);et.color.copy(W).multiplyScalar(K),et.halfWidth.set(O.width*.5,0,0),et.halfHeight.set(0,O.height*.5,0),s.rectArea[y]=et,y++}else if(O.isPointLight){let et=e.get(O);if(et.color.copy(O.color).multiplyScalar(O.intensity*T),et.distance=O.distance,et.decay=O.decay,O.castShadow){let ot=O.shadow,ht=n.get(O);ht.shadowBias=ot.bias,ht.shadowNormalBias=ot.normalBias,ht.shadowRadius=ot.radius,ht.shadowMapSize=ot.mapSize,ht.shadowCameraNear=ot.camera.near,ht.shadowCameraFar=ot.camera.far,s.pointShadow[m]=ht,s.pointShadowMap[m]=Q,s.pointShadowMatrix[m]=O.shadow.matrix,C++}s.point[m]=et,m++}else if(O.isHemisphereLight){let et=e.get(O);et.skyColor.copy(O.color).multiplyScalar(K*T),et.groundColor.copy(O.groundColor).multiplyScalar(K*T),s.hemi[_]=et,_++}}y>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=gt.LTC_FLOAT_1,s.rectAreaLTC2=gt.LTC_FLOAT_2):(s.rectAreaLTC1=gt.LTC_HALF_1,s.rectAreaLTC2=gt.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=gt.LTC_FLOAT_1,s.rectAreaLTC2=gt.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=gt.LTC_HALF_1,s.rectAreaLTC2=gt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=p,s.ambient[1]=d,s.ambient[2]=g;let V=s.hash;(V.directionalLength!==x||V.pointLength!==m||V.spotLength!==f||V.rectAreaLength!==y||V.hemiLength!==_||V.numDirectionalShadows!==b||V.numPointShadows!==C||V.numSpotShadows!==E||V.numSpotMaps!==L||V.numLightProbes!==S)&&(s.directional.length=x,s.spot.length=f,s.rectArea.length=y,s.point.length=m,s.hemi.length=_,s.directionalShadow.length=b,s.directionalShadowMap.length=b,s.pointShadow.length=C,s.pointShadowMap.length=C,s.spotShadow.length=E,s.spotShadowMap.length=E,s.directionalShadowMatrix.length=b,s.pointShadowMatrix.length=C,s.spotLightMatrix.length=E+L-k,s.spotLightMap.length=L,s.numSpotLightShadowsWithMaps=k,s.numLightProbes=S,V.directionalLength=x,V.pointLength=m,V.spotLength=f,V.rectAreaLength=y,V.hemiLength=_,V.numDirectionalShadows=b,V.numPointShadows=C,V.numSpotShadows=E,V.numSpotMaps=L,V.numLightProbes=S,s.version=Dx++)}function c(h,u){let p=0,d=0,g=0,x=0,m=0,f=u.matrixWorldInverse;for(let y=0,_=h.length;y<_;y++){let b=h[y];if(b.isDirectionalLight){let C=s.directional[p];C.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(f),p++}else if(b.isSpotLight){let C=s.spot[g];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(f),C.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(f),g++}else if(b.isRectAreaLight){let C=s.rectArea[x];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(f),o.identity(),a.copy(b.matrixWorld),a.premultiply(f),o.extractRotation(a),C.halfWidth.set(b.width*.5,0,0),C.halfHeight.set(0,b.height*.5,0),C.halfWidth.applyMatrix4(o),C.halfHeight.applyMatrix4(o),x++}else if(b.isPointLight){let C=s.point[d];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(f),d++}else if(b.isHemisphereLight){let C=s.hemi[m];C.direction.setFromMatrixPosition(b.matrixWorld),C.direction.transformDirection(f),m++}}}return{setup:l,setupView:c,state:s}}function _u(i,t){let e=new Nx(i,t),n=[],s=[];function r(){n.length=0,s.length=0}function a(u){n.push(u)}function o(u){s.push(u)}function l(u){e.setup(n,u)}function c(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:e},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Fx(i,t){let e=new WeakMap;function n(r,a=0){let o=e.get(r),l;return o===void 0?(l=new _u(i,t),e.set(r,[l])):a>=o.length?(l=new _u(i,t),o.push(l)):l=o[a],l}function s(){e=new WeakMap}return{get:n,dispose:s}}var kl=class extends hi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Hl=class extends hi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Ox=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zx=`uniform sampler2D shadow_pass;
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
}`;function Bx(i,t,e){let n=new Dr,s=new St,r=new St,a=new en,o=new kl({depthPacking:Wd}),l=new Hl,c={},h=e.maxTextureSize,u={[Di]:un,[un]:Di,[vn]:vn},p=new Ve({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new St},radius:{value:4}},vertexShader:Ox,fragmentShader:zx}),d=p.clone();d.defines.HORIZONTAL_PASS=1;let g=new ge;g.setAttribute("position",new fe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ae(g,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ru;let f=this.type;this.render=function(E,L,k){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;let S=i.getRenderTarget(),T=i.getActiveCubeFace(),V=i.getActiveMipmapLevel(),$=i.state;$.setBlending(Pi),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);let ft=f!==si&&this.type===si,O=f===si&&this.type!==si;for(let W=0,K=E.length;W<K;W++){let it=E[W],Q=it.shadow;if(Q===void 0){console.warn("THREE.WebGLShadowMap:",it,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;s.copy(Q.mapSize);let et=Q.getFrameExtents();if(s.multiply(et),r.copy(Q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/et.x),s.x=r.x*et.x,Q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/et.y),s.y=r.y*et.y,Q.mapSize.y=r.y)),Q.map===null||ft===!0||O===!0){let ht=this.type!==si?{minFilter:sn,magFilter:sn}:{};Q.map!==null&&Q.map.dispose(),Q.map=new Cn(s.x,s.y,ht),Q.map.texture.name=it.name+".shadowMap",Q.camera.updateProjectionMatrix()}i.setRenderTarget(Q.map),i.clear();let ot=Q.getViewportCount();for(let ht=0;ht<ot;ht++){let Et=Q.getViewport(ht);a.set(r.x*Et.x,r.y*Et.y,r.x*Et.z,r.y*Et.w),$.viewport(a),Q.updateMatrices(it,ht),n=Q.getFrustum(),b(L,k,Q.camera,it,this.type)}Q.isPointLightShadow!==!0&&this.type===si&&y(Q,k),Q.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(S,T,V)};function y(E,L){let k=t.update(x);p.defines.VSM_SAMPLES!==E.blurSamples&&(p.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,p.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Cn(s.x,s.y)),p.uniforms.shadow_pass.value=E.map.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(L,null,k,p,x,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(L,null,k,d,x,null)}function _(E,L,k,S){let T=null,V=k.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(V!==void 0)T=V;else if(T=k.isPointLight===!0?l:o,i.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){let $=T.uuid,ft=L.uuid,O=c[$];O===void 0&&(O={},c[$]=O);let W=O[ft];W===void 0&&(W=T.clone(),O[ft]=W,L.addEventListener("dispose",C)),T=W}if(T.visible=L.visible,T.wireframe=L.wireframe,S===si?T.side=L.shadowSide!==null?L.shadowSide:L.side:T.side=L.shadowSide!==null?L.shadowSide:u[L.side],T.alphaMap=L.alphaMap,T.alphaTest=L.alphaTest,T.map=L.map,T.clipShadows=L.clipShadows,T.clippingPlanes=L.clippingPlanes,T.clipIntersection=L.clipIntersection,T.displacementMap=L.displacementMap,T.displacementScale=L.displacementScale,T.displacementBias=L.displacementBias,T.wireframeLinewidth=L.wireframeLinewidth,T.linewidth=L.linewidth,k.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let $=i.properties.get(T);$.light=k}return T}function b(E,L,k,S,T){if(E.visible===!1)return;if(E.layers.test(L.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&T===si)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,E.matrixWorld);let ft=t.update(E),O=E.material;if(Array.isArray(O)){let W=ft.groups;for(let K=0,it=W.length;K<it;K++){let Q=W[K],et=O[Q.materialIndex];if(et&&et.visible){let ot=_(E,et,S,T);E.onBeforeShadow(i,E,L,k,ft,ot,Q),i.renderBufferDirect(k,null,ft,ot,E,Q),E.onAfterShadow(i,E,L,k,ft,ot,Q)}}}else if(O.visible){let W=_(E,O,S,T);E.onBeforeShadow(i,E,L,k,ft,W,null),i.renderBufferDirect(k,null,ft,W,E,null),E.onAfterShadow(i,E,L,k,ft,W,null)}}let $=E.children;for(let ft=0,O=$.length;ft<O;ft++)b($[ft],L,k,S,T)}function C(E){E.target.removeEventListener("dispose",C);for(let k in c){let S=c[k],T=E.target.uuid;T in S&&(S[T].dispose(),delete S[T])}}}function kx(i,t,e){let n=e.isWebGL2;function s(){let N=!1,vt=new en,yt=null,Bt=new en(0,0,0,0);return{setMask:function(Nt){yt!==Nt&&!N&&(i.colorMask(Nt,Nt,Nt,Nt),yt=Nt)},setLocked:function(Nt){N=Nt},setClear:function(Nt,pe,_e,Oe,Ge){Ge===!0&&(Nt*=Oe,pe*=Oe,_e*=Oe),vt.set(Nt,pe,_e,Oe),Bt.equals(vt)===!1&&(i.clearColor(Nt,pe,_e,Oe),Bt.copy(vt))},reset:function(){N=!1,yt=null,Bt.set(-1,0,0,0)}}}function r(){let N=!1,vt=null,yt=null,Bt=null;return{setTest:function(Nt){Nt?Jt(i.DEPTH_TEST):kt(i.DEPTH_TEST)},setMask:function(Nt){vt!==Nt&&!N&&(i.depthMask(Nt),vt=Nt)},setFunc:function(Nt){if(yt!==Nt){switch(Nt){case vd:i.depthFunc(i.NEVER);break;case yd:i.depthFunc(i.ALWAYS);break;case Md:i.depthFunc(i.LESS);break;case wa:i.depthFunc(i.LEQUAL);break;case Sd:i.depthFunc(i.EQUAL);break;case bd:i.depthFunc(i.GEQUAL);break;case Ed:i.depthFunc(i.GREATER);break;case wd:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}yt=Nt}},setLocked:function(Nt){N=Nt},setClear:function(Nt){Bt!==Nt&&(i.clearDepth(Nt),Bt=Nt)},reset:function(){N=!1,vt=null,yt=null,Bt=null}}}function a(){let N=!1,vt=null,yt=null,Bt=null,Nt=null,pe=null,_e=null,Oe=null,Ge=null;return{setTest:function(me){N||(me?Jt(i.STENCIL_TEST):kt(i.STENCIL_TEST))},setMask:function(me){vt!==me&&!N&&(i.stencilMask(me),vt=me)},setFunc:function(me,We,mn){(yt!==me||Bt!==We||Nt!==mn)&&(i.stencilFunc(me,We,mn),yt=me,Bt=We,Nt=mn)},setOp:function(me,We,mn){(pe!==me||_e!==We||Oe!==mn)&&(i.stencilOp(me,We,mn),pe=me,_e=We,Oe=mn)},setLocked:function(me){N=me},setClear:function(me){Ge!==me&&(i.clearStencil(me),Ge=me)},reset:function(){N=!1,vt=null,yt=null,Bt=null,Nt=null,pe=null,_e=null,Oe=null,Ge=null}}}let o=new s,l=new r,c=new a,h=new WeakMap,u=new WeakMap,p={},d={},g=new WeakMap,x=[],m=null,f=!1,y=null,_=null,b=null,C=null,E=null,L=null,k=null,S=new Lt(0,0,0),T=0,V=!1,$=null,ft=null,O=null,W=null,K=null,it=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Q=!1,et=0,ot=i.getParameter(i.VERSION);ot.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(ot)[1]),Q=et>=1):ot.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(ot)[1]),Q=et>=2);let ht=null,Et={},J=i.getParameter(i.SCISSOR_BOX),st=i.getParameter(i.VIEWPORT),bt=new en().fromArray(J),At=new en().fromArray(st);function Pt(N,vt,yt,Bt){let Nt=new Uint8Array(4),pe=i.createTexture();i.bindTexture(N,pe),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let _e=0;_e<yt;_e++)n&&(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)?i.texImage3D(vt,0,i.RGBA,1,1,Bt,0,i.RGBA,i.UNSIGNED_BYTE,Nt):i.texImage2D(vt+_e,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Nt);return pe}let Zt={};Zt[i.TEXTURE_2D]=Pt(i.TEXTURE_2D,i.TEXTURE_2D,1),Zt[i.TEXTURE_CUBE_MAP]=Pt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Zt[i.TEXTURE_2D_ARRAY]=Pt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Zt[i.TEXTURE_3D]=Pt(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Jt(i.DEPTH_TEST),l.setFunc(wa),Kt(!1),A(jc),Jt(i.CULL_FACE),Rt(Pi);function Jt(N){p[N]!==!0&&(i.enable(N),p[N]=!0)}function kt(N){p[N]!==!1&&(i.disable(N),p[N]=!1)}function le(N,vt){return d[N]!==vt?(i.bindFramebuffer(N,vt),d[N]=vt,n&&(N===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=vt),N===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=vt)),!0):!1}function X(N,vt){let yt=x,Bt=!1;if(N)if(yt=g.get(vt),yt===void 0&&(yt=[],g.set(vt,yt)),N.isWebGLMultipleRenderTargets){let Nt=N.texture;if(yt.length!==Nt.length||yt[0]!==i.COLOR_ATTACHMENT0){for(let pe=0,_e=Nt.length;pe<_e;pe++)yt[pe]=i.COLOR_ATTACHMENT0+pe;yt.length=Nt.length,Bt=!0}}else yt[0]!==i.COLOR_ATTACHMENT0&&(yt[0]=i.COLOR_ATTACHMENT0,Bt=!0);else yt[0]!==i.BACK&&(yt[0]=i.BACK,Bt=!0);Bt&&(e.isWebGL2?i.drawBuffers(yt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(yt))}function Ke(N){return m!==N?(i.useProgram(N),m=N,!0):!1}let Ft={[Ji]:i.FUNC_ADD,[sd]:i.FUNC_SUBTRACT,[rd]:i.FUNC_REVERSE_SUBTRACT};if(n)Ft[nh]=i.MIN,Ft[ih]=i.MAX;else{let N=t.get("EXT_blend_minmax");N!==null&&(Ft[nh]=N.MIN_EXT,Ft[ih]=N.MAX_EXT)}let Xt={[ad]:i.ZERO,[od]:i.ONE,[ld]:i.SRC_COLOR,[Ml]:i.SRC_ALPHA,[pd]:i.SRC_ALPHA_SATURATE,[fd]:i.DST_COLOR,[hd]:i.DST_ALPHA,[cd]:i.ONE_MINUS_SRC_COLOR,[Sl]:i.ONE_MINUS_SRC_ALPHA,[dd]:i.ONE_MINUS_DST_COLOR,[ud]:i.ONE_MINUS_DST_ALPHA,[md]:i.CONSTANT_COLOR,[gd]:i.ONE_MINUS_CONSTANT_COLOR,[xd]:i.CONSTANT_ALPHA,[_d]:i.ONE_MINUS_CONSTANT_ALPHA};function Rt(N,vt,yt,Bt,Nt,pe,_e,Oe,Ge,me){if(N===Pi){f===!0&&(kt(i.BLEND),f=!1);return}if(f===!1&&(Jt(i.BLEND),f=!0),N!==id){if(N!==y||me!==V){if((_!==Ji||E!==Ji)&&(i.blendEquation(i.FUNC_ADD),_=Ji,E=Ji),me)switch(N){case ks:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Hn:i.blendFunc(i.ONE,i.ONE);break;case th:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case eh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case ks:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Hn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case th:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case eh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}b=null,C=null,L=null,k=null,S.set(0,0,0),T=0,y=N,V=me}return}Nt=Nt||vt,pe=pe||yt,_e=_e||Bt,(vt!==_||Nt!==E)&&(i.blendEquationSeparate(Ft[vt],Ft[Nt]),_=vt,E=Nt),(yt!==b||Bt!==C||pe!==L||_e!==k)&&(i.blendFuncSeparate(Xt[yt],Xt[Bt],Xt[pe],Xt[_e]),b=yt,C=Bt,L=pe,k=_e),(Oe.equals(S)===!1||Ge!==T)&&(i.blendColor(Oe.r,Oe.g,Oe.b,Ge),S.copy(Oe),T=Ge),y=N,V=!1}function Se(N,vt){N.side===vn?kt(i.CULL_FACE):Jt(i.CULL_FACE);let yt=N.side===un;vt&&(yt=!yt),Kt(yt),N.blending===ks&&N.transparent===!1?Rt(Pi):Rt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),l.setFunc(N.depthFunc),l.setTest(N.depthTest),l.setMask(N.depthWrite),o.setMask(N.colorWrite);let Bt=N.stencilWrite;c.setTest(Bt),Bt&&(c.setMask(N.stencilWriteMask),c.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),c.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),q(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?Jt(i.SAMPLE_ALPHA_TO_COVERAGE):kt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Kt(N){$!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),$=N)}function A(N){N!==ed?(Jt(i.CULL_FACE),N!==ft&&(N===jc?i.cullFace(i.BACK):N===nd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):kt(i.CULL_FACE),ft=N}function M(N){N!==O&&(Q&&i.lineWidth(N),O=N)}function q(N,vt,yt){N?(Jt(i.POLYGON_OFFSET_FILL),(W!==vt||K!==yt)&&(i.polygonOffset(vt,yt),W=vt,K=yt)):kt(i.POLYGON_OFFSET_FILL)}function lt(N){N?Jt(i.SCISSOR_TEST):kt(i.SCISSOR_TEST)}function rt(N){N===void 0&&(N=i.TEXTURE0+it-1),ht!==N&&(i.activeTexture(N),ht=N)}function ct(N,vt,yt){yt===void 0&&(ht===null?yt=i.TEXTURE0+it-1:yt=ht);let Bt=Et[yt];Bt===void 0&&(Bt={type:void 0,texture:void 0},Et[yt]=Bt),(Bt.type!==N||Bt.texture!==vt)&&(ht!==yt&&(i.activeTexture(yt),ht=yt),i.bindTexture(N,vt||Zt[N]),Bt.type=N,Bt.texture=vt)}function Tt(){let N=Et[ht];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function _t(){try{i.compressedTexImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function wt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function zt(){try{i.texSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function te(){try{i.texSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function at(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function de(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function re(){try{i.texStorage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Vt(){try{i.texStorage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Dt(){try{i.texImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function mt(){try{i.texImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function $t(N){bt.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),bt.copy(N))}function ce(N){At.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),At.copy(N))}function be(N,vt){let yt=u.get(vt);yt===void 0&&(yt=new WeakMap,u.set(vt,yt));let Bt=yt.get(N);Bt===void 0&&(Bt=i.getUniformBlockIndex(vt,N.name),yt.set(N,Bt))}function qt(N,vt){let Bt=u.get(vt).get(N);h.get(vt)!==Bt&&(i.uniformBlockBinding(vt,Bt,N.__bindingPointIndex),h.set(vt,Bt))}function pt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),p={},ht=null,Et={},d={},g=new WeakMap,x=[],m=null,f=!1,y=null,_=null,b=null,C=null,E=null,L=null,k=null,S=new Lt(0,0,0),T=0,V=!1,$=null,ft=null,O=null,W=null,K=null,bt.set(0,0,i.canvas.width,i.canvas.height),At.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Jt,disable:kt,bindFramebuffer:le,drawBuffers:X,useProgram:Ke,setBlending:Rt,setMaterial:Se,setFlipSided:Kt,setCullFace:A,setLineWidth:M,setPolygonOffset:q,setScissorTest:lt,activeTexture:rt,bindTexture:ct,unbindTexture:Tt,compressedTexImage2D:_t,compressedTexImage3D:wt,texImage2D:Dt,texImage3D:mt,updateUBOMapping:be,uniformBlockBinding:qt,texStorage2D:re,texStorage3D:Vt,texSubImage2D:zt,texSubImage3D:te,compressedTexSubImage2D:at,compressedTexSubImage3D:de,scissor:$t,viewport:ce,reset:pt}}function Hx(i,t,e,n,s,r,a){let o=s.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,p=new WeakMap,d=!1;try{d=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,M){return d?new OffscreenCanvas(A,M):Da("canvas")}function x(A,M,q,lt){let rt=1;if((A.width>lt||A.height>lt)&&(rt=lt/Math.max(A.width,A.height)),rt<1||M===!0)if(typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&A instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&A instanceof ImageBitmap){let ct=M?Rl:Math.floor,Tt=ct(rt*A.width),_t=ct(rt*A.height);u===void 0&&(u=g(Tt,_t));let wt=q?g(Tt,_t):u;return wt.width=Tt,wt.height=_t,wt.getContext("2d").drawImage(A,0,0,Tt,_t),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+Tt+"x"+_t+")."),wt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function m(A){return Nh(A.width)&&Nh(A.height)}function f(A){return o?!1:A.wrapS!==Bn||A.wrapT!==Bn||A.minFilter!==sn&&A.minFilter!==_n}function y(A,M){return A.generateMipmaps&&M&&A.minFilter!==sn&&A.minFilter!==_n}function _(A){i.generateMipmap(A)}function b(A,M,q,lt,rt=!1){if(o===!1)return M;if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ct=M;if(M===i.RED&&(q===i.FLOAT&&(ct=i.R32F),q===i.HALF_FLOAT&&(ct=i.R16F),q===i.UNSIGNED_BYTE&&(ct=i.R8)),M===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(ct=i.R8UI),q===i.UNSIGNED_SHORT&&(ct=i.R16UI),q===i.UNSIGNED_INT&&(ct=i.R32UI),q===i.BYTE&&(ct=i.R8I),q===i.SHORT&&(ct=i.R16I),q===i.INT&&(ct=i.R32I)),M===i.RG&&(q===i.FLOAT&&(ct=i.RG32F),q===i.HALF_FLOAT&&(ct=i.RG16F),q===i.UNSIGNED_BYTE&&(ct=i.RG8)),M===i.RGBA){let Tt=rt?Ra:ve.getTransfer(lt);q===i.FLOAT&&(ct=i.RGBA32F),q===i.HALF_FLOAT&&(ct=i.RGBA16F),q===i.UNSIGNED_BYTE&&(ct=Tt===Ae?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT_4_4_4_4&&(ct=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(ct=i.RGB5_A1)}return(ct===i.R16F||ct===i.R32F||ct===i.RG16F||ct===i.RG32F||ct===i.RGBA16F||ct===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ct}function C(A,M,q){return y(A,q)===!0||A.isFramebufferTexture&&A.minFilter!==sn&&A.minFilter!==_n?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function E(A){return A===sn||A===sh||A===Bo?i.NEAREST:i.LINEAR}function L(A){let M=A.target;M.removeEventListener("dispose",L),S(M),M.isVideoTexture&&h.delete(M)}function k(A){let M=A.target;M.removeEventListener("dispose",k),V(M)}function S(A){let M=n.get(A);if(M.__webglInit===void 0)return;let q=A.source,lt=p.get(q);if(lt){let rt=lt[M.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&T(A),Object.keys(lt).length===0&&p.delete(q)}n.remove(A)}function T(A){let M=n.get(A);i.deleteTexture(M.__webglTexture);let q=A.source,lt=p.get(q);delete lt[M.__cacheKey],a.memory.textures--}function V(A){let M=A.texture,q=n.get(A),lt=n.get(M);if(lt.__webglTexture!==void 0&&(i.deleteTexture(lt.__webglTexture),a.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let rt=0;rt<6;rt++){if(Array.isArray(q.__webglFramebuffer[rt]))for(let ct=0;ct<q.__webglFramebuffer[rt].length;ct++)i.deleteFramebuffer(q.__webglFramebuffer[rt][ct]);else i.deleteFramebuffer(q.__webglFramebuffer[rt]);q.__webglDepthbuffer&&i.deleteRenderbuffer(q.__webglDepthbuffer[rt])}else{if(Array.isArray(q.__webglFramebuffer))for(let rt=0;rt<q.__webglFramebuffer.length;rt++)i.deleteFramebuffer(q.__webglFramebuffer[rt]);else i.deleteFramebuffer(q.__webglFramebuffer);if(q.__webglDepthbuffer&&i.deleteRenderbuffer(q.__webglDepthbuffer),q.__webglMultisampledFramebuffer&&i.deleteFramebuffer(q.__webglMultisampledFramebuffer),q.__webglColorRenderbuffer)for(let rt=0;rt<q.__webglColorRenderbuffer.length;rt++)q.__webglColorRenderbuffer[rt]&&i.deleteRenderbuffer(q.__webglColorRenderbuffer[rt]);q.__webglDepthRenderbuffer&&i.deleteRenderbuffer(q.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let rt=0,ct=M.length;rt<ct;rt++){let Tt=n.get(M[rt]);Tt.__webglTexture&&(i.deleteTexture(Tt.__webglTexture),a.memory.textures--),n.remove(M[rt])}n.remove(M),n.remove(A)}let $=0;function ft(){$=0}function O(){let A=$;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),$+=1,A}function W(A){let M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function K(A,M){let q=n.get(A);if(A.isVideoTexture&&Se(A),A.isRenderTargetTexture===!1&&A.version>0&&q.__version!==A.version){let lt=A.image;if(lt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(lt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{bt(q,A,M);return}}e.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+M)}function it(A,M){let q=n.get(A);if(A.version>0&&q.__version!==A.version){bt(q,A,M);return}e.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+M)}function Q(A,M){let q=n.get(A);if(A.version>0&&q.__version!==A.version){bt(q,A,M);return}e.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+M)}function et(A,M){let q=n.get(A);if(A.version>0&&q.__version!==A.version){At(q,A,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+M)}let ot={[ns]:i.REPEAT,[Bn]:i.CLAMP_TO_EDGE,[wl]:i.MIRRORED_REPEAT},ht={[sn]:i.NEAREST,[sh]:i.NEAREST_MIPMAP_NEAREST,[Bo]:i.NEAREST_MIPMAP_LINEAR,[_n]:i.LINEAR,[Ud]:i.LINEAR_MIPMAP_NEAREST,[Ir]:i.LINEAR_MIPMAP_LINEAR},Et={[qd]:i.NEVER,[Qd]:i.ALWAYS,[Yd]:i.LESS,[Bu]:i.LEQUAL,[Zd]:i.EQUAL,[Kd]:i.GEQUAL,[$d]:i.GREATER,[Jd]:i.NOTEQUAL};function J(A,M,q){if(q?(i.texParameteri(A,i.TEXTURE_WRAP_S,ot[M.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,ot[M.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,ot[M.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,ht[M.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,ht[M.minFilter])):(i.texParameteri(A,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(A,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(M.wrapS!==Bn||M.wrapT!==Bn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(A,i.TEXTURE_MAG_FILTER,E(M.magFilter)),i.texParameteri(A,i.TEXTURE_MIN_FILTER,E(M.minFilter)),M.minFilter!==sn&&M.minFilter!==_n&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Et[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let lt=t.get("EXT_texture_filter_anisotropic");if(M.magFilter===sn||M.minFilter!==Bo&&M.minFilter!==Ir||M.type===Ci&&t.has("OES_texture_float_linear")===!1||o===!1&&M.type===is&&t.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(i.texParameterf(A,lt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function st(A,M){let q=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",L));let lt=M.source,rt=p.get(lt);rt===void 0&&(rt={},p.set(lt,rt));let ct=W(M);if(ct!==A.__cacheKey){rt[ct]===void 0&&(rt[ct]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,q=!0),rt[ct].usedTimes++;let Tt=rt[A.__cacheKey];Tt!==void 0&&(rt[A.__cacheKey].usedTimes--,Tt.usedTimes===0&&T(M)),A.__cacheKey=ct,A.__webglTexture=rt[ct].texture}return q}function bt(A,M,q){let lt=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(lt=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(lt=i.TEXTURE_3D);let rt=st(A,M),ct=M.source;e.bindTexture(lt,A.__webglTexture,i.TEXTURE0+q);let Tt=n.get(ct);if(ct.version!==Tt.__version||rt===!0){e.activeTexture(i.TEXTURE0+q);let _t=ve.getPrimaries(ve.workingColorSpace),wt=M.colorSpace===Nn?null:ve.getPrimaries(M.colorSpace),zt=M.colorSpace===Nn||_t===wt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,zt);let te=f(M)&&m(M.image)===!1,at=x(M.image,te,!1,s.maxTextureSize);at=Kt(M,at);let de=m(at)||o,re=r.convert(M.format,M.colorSpace),Vt=r.convert(M.type),Dt=b(M.internalFormat,re,Vt,M.colorSpace,M.isVideoTexture);J(lt,M,de);let mt,$t=M.mipmaps,ce=o&&M.isVideoTexture!==!0&&Dt!==Fu,be=Tt.__version===void 0||rt===!0,qt=C(M,at,de);if(M.isDepthTexture)Dt=i.DEPTH_COMPONENT,o?M.type===Ci?Dt=i.DEPTH_COMPONENT32F:M.type===Ri?Dt=i.DEPTH_COMPONENT24:M.type===ji?Dt=i.DEPTH24_STENCIL8:Dt=i.DEPTH_COMPONENT16:M.type===Ci&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===ts&&Dt===i.DEPTH_COMPONENT&&M.type!==xc&&M.type!==Ri&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Ri,Vt=r.convert(M.type)),M.format===Xs&&Dt===i.DEPTH_COMPONENT&&(Dt=i.DEPTH_STENCIL,M.type!==ji&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=ji,Vt=r.convert(M.type))),be&&(ce?e.texStorage2D(i.TEXTURE_2D,1,Dt,at.width,at.height):e.texImage2D(i.TEXTURE_2D,0,Dt,at.width,at.height,0,re,Vt,null));else if(M.isDataTexture)if($t.length>0&&de){ce&&be&&e.texStorage2D(i.TEXTURE_2D,qt,Dt,$t[0].width,$t[0].height);for(let pt=0,N=$t.length;pt<N;pt++)mt=$t[pt],ce?e.texSubImage2D(i.TEXTURE_2D,pt,0,0,mt.width,mt.height,re,Vt,mt.data):e.texImage2D(i.TEXTURE_2D,pt,Dt,mt.width,mt.height,0,re,Vt,mt.data);M.generateMipmaps=!1}else ce?(be&&e.texStorage2D(i.TEXTURE_2D,qt,Dt,at.width,at.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,at.width,at.height,re,Vt,at.data)):e.texImage2D(i.TEXTURE_2D,0,Dt,at.width,at.height,0,re,Vt,at.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){ce&&be&&e.texStorage3D(i.TEXTURE_2D_ARRAY,qt,Dt,$t[0].width,$t[0].height,at.depth);for(let pt=0,N=$t.length;pt<N;pt++)mt=$t[pt],M.format!==kn?re!==null?ce?e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,pt,0,0,0,mt.width,mt.height,at.depth,re,mt.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,pt,Dt,mt.width,mt.height,at.depth,0,mt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ce?e.texSubImage3D(i.TEXTURE_2D_ARRAY,pt,0,0,0,mt.width,mt.height,at.depth,re,Vt,mt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,pt,Dt,mt.width,mt.height,at.depth,0,re,Vt,mt.data)}else{ce&&be&&e.texStorage2D(i.TEXTURE_2D,qt,Dt,$t[0].width,$t[0].height);for(let pt=0,N=$t.length;pt<N;pt++)mt=$t[pt],M.format!==kn?re!==null?ce?e.compressedTexSubImage2D(i.TEXTURE_2D,pt,0,0,mt.width,mt.height,re,mt.data):e.compressedTexImage2D(i.TEXTURE_2D,pt,Dt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ce?e.texSubImage2D(i.TEXTURE_2D,pt,0,0,mt.width,mt.height,re,Vt,mt.data):e.texImage2D(i.TEXTURE_2D,pt,Dt,mt.width,mt.height,0,re,Vt,mt.data)}else if(M.isDataArrayTexture)ce?(be&&e.texStorage3D(i.TEXTURE_2D_ARRAY,qt,Dt,at.width,at.height,at.depth),e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,re,Vt,at.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,Dt,at.width,at.height,at.depth,0,re,Vt,at.data);else if(M.isData3DTexture)ce?(be&&e.texStorage3D(i.TEXTURE_3D,qt,Dt,at.width,at.height,at.depth),e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,re,Vt,at.data)):e.texImage3D(i.TEXTURE_3D,0,Dt,at.width,at.height,at.depth,0,re,Vt,at.data);else if(M.isFramebufferTexture){if(be)if(ce)e.texStorage2D(i.TEXTURE_2D,qt,Dt,at.width,at.height);else{let pt=at.width,N=at.height;for(let vt=0;vt<qt;vt++)e.texImage2D(i.TEXTURE_2D,vt,Dt,pt,N,0,re,Vt,null),pt>>=1,N>>=1}}else if($t.length>0&&de){ce&&be&&e.texStorage2D(i.TEXTURE_2D,qt,Dt,$t[0].width,$t[0].height);for(let pt=0,N=$t.length;pt<N;pt++)mt=$t[pt],ce?e.texSubImage2D(i.TEXTURE_2D,pt,0,0,re,Vt,mt):e.texImage2D(i.TEXTURE_2D,pt,Dt,re,Vt,mt);M.generateMipmaps=!1}else ce?(be&&e.texStorage2D(i.TEXTURE_2D,qt,Dt,at.width,at.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,re,Vt,at)):e.texImage2D(i.TEXTURE_2D,0,Dt,re,Vt,at);y(M,de)&&_(lt),Tt.__version=ct.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function At(A,M,q){if(M.image.length!==6)return;let lt=st(A,M),rt=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+q);let ct=n.get(rt);if(rt.version!==ct.__version||lt===!0){e.activeTexture(i.TEXTURE0+q);let Tt=ve.getPrimaries(ve.workingColorSpace),_t=M.colorSpace===Nn?null:ve.getPrimaries(M.colorSpace),wt=M.colorSpace===Nn||Tt===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);let zt=M.isCompressedTexture||M.image[0].isCompressedTexture,te=M.image[0]&&M.image[0].isDataTexture,at=[];for(let pt=0;pt<6;pt++)!zt&&!te?at[pt]=x(M.image[pt],!1,!0,s.maxCubemapSize):at[pt]=te?M.image[pt].image:M.image[pt],at[pt]=Kt(M,at[pt]);let de=at[0],re=m(de)||o,Vt=r.convert(M.format,M.colorSpace),Dt=r.convert(M.type),mt=b(M.internalFormat,Vt,Dt,M.colorSpace),$t=o&&M.isVideoTexture!==!0,ce=ct.__version===void 0||lt===!0,be=C(M,de,re);J(i.TEXTURE_CUBE_MAP,M,re);let qt;if(zt){$t&&ce&&e.texStorage2D(i.TEXTURE_CUBE_MAP,be,mt,de.width,de.height);for(let pt=0;pt<6;pt++){qt=at[pt].mipmaps;for(let N=0;N<qt.length;N++){let vt=qt[N];M.format!==kn?Vt!==null?$t?e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,N,0,0,vt.width,vt.height,Vt,vt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,N,mt,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$t?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,N,0,0,vt.width,vt.height,Vt,Dt,vt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,N,mt,vt.width,vt.height,0,Vt,Dt,vt.data)}}}else{qt=M.mipmaps,$t&&ce&&(qt.length>0&&be++,e.texStorage2D(i.TEXTURE_CUBE_MAP,be,mt,at[0].width,at[0].height));for(let pt=0;pt<6;pt++)if(te){$t?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,at[pt].width,at[pt].height,Vt,Dt,at[pt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,mt,at[pt].width,at[pt].height,0,Vt,Dt,at[pt].data);for(let N=0;N<qt.length;N++){let yt=qt[N].image[pt].image;$t?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,N+1,0,0,yt.width,yt.height,Vt,Dt,yt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,N+1,mt,yt.width,yt.height,0,Vt,Dt,yt.data)}}else{$t?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,Vt,Dt,at[pt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,mt,Vt,Dt,at[pt]);for(let N=0;N<qt.length;N++){let vt=qt[N];$t?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,N+1,0,0,Vt,Dt,vt.image[pt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,N+1,mt,Vt,Dt,vt.image[pt])}}}y(M,re)&&_(i.TEXTURE_CUBE_MAP),ct.__version=rt.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function Pt(A,M,q,lt,rt,ct){let Tt=r.convert(q.format,q.colorSpace),_t=r.convert(q.type),wt=b(q.internalFormat,Tt,_t,q.colorSpace);if(!n.get(M).__hasExternalTextures){let te=Math.max(1,M.width>>ct),at=Math.max(1,M.height>>ct);rt===i.TEXTURE_3D||rt===i.TEXTURE_2D_ARRAY?e.texImage3D(rt,ct,wt,te,at,M.depth,0,Tt,_t,null):e.texImage2D(rt,ct,wt,te,at,0,Tt,_t,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),Rt(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,lt,rt,n.get(q).__webglTexture,0,Xt(M)):(rt===i.TEXTURE_2D||rt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&rt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,lt,rt,n.get(q).__webglTexture,ct),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Zt(A,M,q){if(i.bindRenderbuffer(i.RENDERBUFFER,A),M.depthBuffer&&!M.stencilBuffer){let lt=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(q||Rt(M)){let rt=M.depthTexture;rt&&rt.isDepthTexture&&(rt.type===Ci?lt=i.DEPTH_COMPONENT32F:rt.type===Ri&&(lt=i.DEPTH_COMPONENT24));let ct=Xt(M);Rt(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ct,lt,M.width,M.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,ct,lt,M.width,M.height)}else i.renderbufferStorage(i.RENDERBUFFER,lt,M.width,M.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,A)}else if(M.depthBuffer&&M.stencilBuffer){let lt=Xt(M);q&&Rt(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,lt,i.DEPTH24_STENCIL8,M.width,M.height):Rt(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,lt,i.DEPTH24_STENCIL8,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,A)}else{let lt=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let rt=0;rt<lt.length;rt++){let ct=lt[rt],Tt=r.convert(ct.format,ct.colorSpace),_t=r.convert(ct.type),wt=b(ct.internalFormat,Tt,_t,ct.colorSpace),zt=Xt(M);q&&Rt(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,zt,wt,M.width,M.height):Rt(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,zt,wt,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,wt,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Jt(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),K(M.depthTexture,0);let lt=n.get(M.depthTexture).__webglTexture,rt=Xt(M);if(M.depthTexture.format===ts)Rt(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,lt,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,lt,0);else if(M.depthTexture.format===Xs)Rt(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,lt,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,lt,0);else throw new Error("Unknown depthTexture format")}function kt(A){let M=n.get(A),q=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");Jt(M.__webglFramebuffer,A)}else if(q){M.__webglDepthbuffer=[];for(let lt=0;lt<6;lt++)e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[lt]),M.__webglDepthbuffer[lt]=i.createRenderbuffer(),Zt(M.__webglDepthbuffer[lt],A,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=i.createRenderbuffer(),Zt(M.__webglDepthbuffer,A,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function le(A,M,q){let lt=n.get(A);M!==void 0&&Pt(lt.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&kt(A)}function X(A){let M=A.texture,q=n.get(A),lt=n.get(M);A.addEventListener("dispose",k),A.isWebGLMultipleRenderTargets!==!0&&(lt.__webglTexture===void 0&&(lt.__webglTexture=i.createTexture()),lt.__version=M.version,a.memory.textures++);let rt=A.isWebGLCubeRenderTarget===!0,ct=A.isWebGLMultipleRenderTargets===!0,Tt=m(A)||o;if(rt){q.__webglFramebuffer=[];for(let _t=0;_t<6;_t++)if(o&&M.mipmaps&&M.mipmaps.length>0){q.__webglFramebuffer[_t]=[];for(let wt=0;wt<M.mipmaps.length;wt++)q.__webglFramebuffer[_t][wt]=i.createFramebuffer()}else q.__webglFramebuffer[_t]=i.createFramebuffer()}else{if(o&&M.mipmaps&&M.mipmaps.length>0){q.__webglFramebuffer=[];for(let _t=0;_t<M.mipmaps.length;_t++)q.__webglFramebuffer[_t]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(ct)if(s.drawBuffers){let _t=A.texture;for(let wt=0,zt=_t.length;wt<zt;wt++){let te=n.get(_t[wt]);te.__webglTexture===void 0&&(te.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&A.samples>0&&Rt(A)===!1){let _t=ct?M:[M];q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let wt=0;wt<_t.length;wt++){let zt=_t[wt];q.__webglColorRenderbuffer[wt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[wt]);let te=r.convert(zt.format,zt.colorSpace),at=r.convert(zt.type),de=b(zt.internalFormat,te,at,zt.colorSpace,A.isXRRenderTarget===!0),re=Xt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,re,de,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.RENDERBUFFER,q.__webglColorRenderbuffer[wt])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),Zt(q.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(rt){e.bindTexture(i.TEXTURE_CUBE_MAP,lt.__webglTexture),J(i.TEXTURE_CUBE_MAP,M,Tt);for(let _t=0;_t<6;_t++)if(o&&M.mipmaps&&M.mipmaps.length>0)for(let wt=0;wt<M.mipmaps.length;wt++)Pt(q.__webglFramebuffer[_t][wt],A,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,wt);else Pt(q.__webglFramebuffer[_t],A,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0);y(M,Tt)&&_(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ct){let _t=A.texture;for(let wt=0,zt=_t.length;wt<zt;wt++){let te=_t[wt],at=n.get(te);e.bindTexture(i.TEXTURE_2D,at.__webglTexture),J(i.TEXTURE_2D,te,Tt),Pt(q.__webglFramebuffer,A,te,i.COLOR_ATTACHMENT0+wt,i.TEXTURE_2D,0),y(te,Tt)&&_(i.TEXTURE_2D)}e.unbindTexture()}else{let _t=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(o?_t=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(_t,lt.__webglTexture),J(_t,M,Tt),o&&M.mipmaps&&M.mipmaps.length>0)for(let wt=0;wt<M.mipmaps.length;wt++)Pt(q.__webglFramebuffer[wt],A,M,i.COLOR_ATTACHMENT0,_t,wt);else Pt(q.__webglFramebuffer,A,M,i.COLOR_ATTACHMENT0,_t,0);y(M,Tt)&&_(_t),e.unbindTexture()}A.depthBuffer&&kt(A)}function Ke(A){let M=m(A)||o,q=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let lt=0,rt=q.length;lt<rt;lt++){let ct=q[lt];if(y(ct,M)){let Tt=A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,_t=n.get(ct).__webglTexture;e.bindTexture(Tt,_t),_(Tt),e.unbindTexture()}}}function Ft(A){if(o&&A.samples>0&&Rt(A)===!1){let M=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],q=A.width,lt=A.height,rt=i.COLOR_BUFFER_BIT,ct=[],Tt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=n.get(A),wt=A.isWebGLMultipleRenderTargets===!0;if(wt)for(let zt=0;zt<M.length;zt++)e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+zt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+zt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,_t.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let zt=0;zt<M.length;zt++){ct.push(i.COLOR_ATTACHMENT0+zt),A.depthBuffer&&ct.push(Tt);let te=_t.__ignoreDepthValues!==void 0?_t.__ignoreDepthValues:!1;if(te===!1&&(A.depthBuffer&&(rt|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&(rt|=i.STENCIL_BUFFER_BIT)),wt&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,_t.__webglColorRenderbuffer[zt]),te===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Tt]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Tt])),wt){let at=n.get(M[zt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,at,0)}i.blitFramebuffer(0,0,q,lt,0,0,q,lt,rt,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ct)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),wt)for(let zt=0;zt<M.length;zt++){e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+zt,i.RENDERBUFFER,_t.__webglColorRenderbuffer[zt]);let te=n.get(M[zt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+zt,i.TEXTURE_2D,te,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglMultisampledFramebuffer)}}function Xt(A){return Math.min(s.maxSamples,A.samples)}function Rt(A){let M=n.get(A);return o&&A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Se(A){let M=a.render.frame;h.get(A)!==M&&(h.set(A,M),A.update())}function Kt(A,M){let q=A.colorSpace,lt=A.format,rt=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===Al||q!==li&&q!==Nn&&(ve.getTransfer(q)===Ae?o===!1?t.has("EXT_sRGB")===!0&&lt===kn?(A.format=Al,A.minFilter=_n,A.generateMipmaps=!1):M=Ua.sRGBToLinear(M):(lt!==kn||rt!==qn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),M}this.allocateTextureUnit=O,this.resetTextureUnits=ft,this.setTexture2D=K,this.setTexture2DArray=it,this.setTexture3D=Q,this.setTextureCube=et,this.rebindTextures=le,this.setupRenderTarget=X,this.updateRenderTargetMipmap=Ke,this.updateMultisampleRenderTarget=Ft,this.setupDepthRenderbuffer=kt,this.setupFrameBufferTexture=Pt,this.useMultisampledRTT=Rt}function Vx(i,t,e){let n=e.isWebGL2;function s(r,a=Nn){let o,l=ve.getTransfer(a);if(r===qn)return i.UNSIGNED_BYTE;if(r===Lu)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Iu)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Nd)return i.BYTE;if(r===Fd)return i.SHORT;if(r===xc)return i.UNSIGNED_SHORT;if(r===Pu)return i.INT;if(r===Ri)return i.UNSIGNED_INT;if(r===Ci)return i.FLOAT;if(r===is)return n?i.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Od)return i.ALPHA;if(r===kn)return i.RGBA;if(r===zd)return i.LUMINANCE;if(r===Bd)return i.LUMINANCE_ALPHA;if(r===ts)return i.DEPTH_COMPONENT;if(r===Xs)return i.DEPTH_STENCIL;if(r===Al)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===kd)return i.RED;if(r===Du)return i.RED_INTEGER;if(r===Hd)return i.RG;if(r===Uu)return i.RG_INTEGER;if(r===Nu)return i.RGBA_INTEGER;if(r===ko||r===Ho||r===Vo||r===Go)if(l===Ae)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===ko)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ho)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Vo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Go)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===ko)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ho)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Vo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Go)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===rh||r===ah||r===oh||r===lh)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===rh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ah)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===oh)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===lh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Fu)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===ch||r===hh)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===ch)return l===Ae?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===hh)return l===Ae?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===uh||r===fh||r===dh||r===ph||r===mh||r===gh||r===xh||r===_h||r===vh||r===yh||r===Mh||r===Sh||r===bh||r===Eh)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===uh)return l===Ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===fh)return l===Ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===dh)return l===Ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ph)return l===Ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===mh)return l===Ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===gh)return l===Ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===xh)return l===Ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===_h)return l===Ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===vh)return l===Ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===yh)return l===Ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Mh)return l===Ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Sh)return l===Ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===bh)return l===Ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Eh)return l===Ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Wo||r===wh||r===Th)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===Wo)return l===Ae?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===wh)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Th)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Vd||r===Ah||r===Rh||r===Ch)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===Wo)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Ah)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Rh)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ch)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ji?n?i.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var Vl=class extends an{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Ne=class extends Xe{constructor(){super(),this.isGroup=!0,this.type="Group"}},Gx={type:"move"},Cr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ne,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ne,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ne,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),f=this._getHandJoint(c,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],p=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&p>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&p<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Gx)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ne;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Gl=class extends Ui{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,p=null,d=null,g=null,x=e.getContextAttributes(),m=null,f=null,y=[],_=[],b=new St,C=null,E=new an;E.layers.enable(1),E.viewport=new en;let L=new an;L.layers.enable(2),L.viewport=new en;let k=[E,L],S=new Vl;S.layers.enable(1),S.layers.enable(2);let T=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let st=y[J];return st===void 0&&(st=new Cr,y[J]=st),st.getTargetRaySpace()},this.getControllerGrip=function(J){let st=y[J];return st===void 0&&(st=new Cr,y[J]=st),st.getGripSpace()},this.getHand=function(J){let st=y[J];return st===void 0&&(st=new Cr,y[J]=st),st.getHandSpace()};function $(J){let st=_.indexOf(J.inputSource);if(st===-1)return;let bt=y[st];bt!==void 0&&(bt.update(J.inputSource,J.frame,c||a),bt.dispatchEvent({type:J.type,data:J.inputSource}))}function ft(){s.removeEventListener("select",$),s.removeEventListener("selectstart",$),s.removeEventListener("selectend",$),s.removeEventListener("squeeze",$),s.removeEventListener("squeezestart",$),s.removeEventListener("squeezeend",$),s.removeEventListener("end",ft),s.removeEventListener("inputsourceschange",O);for(let J=0;J<y.length;J++){let st=_[J];st!==null&&(_[J]=null,y[J].disconnect(st))}T=null,V=null,t.setRenderTarget(m),d=null,p=null,u=null,s=null,f=null,Et.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return p!==null?p:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",$),s.addEventListener("selectstart",$),s.addEventListener("selectend",$),s.addEventListener("squeeze",$),s.addEventListener("squeezestart",$),s.addEventListener("squeezeend",$),s.addEventListener("end",ft),s.addEventListener("inputsourceschange",O),x.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(b),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let st={antialias:s.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,st),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),f=new Cn(d.framebufferWidth,d.framebufferHeight,{format:kn,type:qn,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil})}else{let st=null,bt=null,At=null;x.depth&&(At=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,st=x.stencil?Xs:ts,bt=x.stencil?ji:Ri);let Pt={colorFormat:e.RGBA8,depthFormat:At,scaleFactor:r};u=new XRWebGLBinding(s,e),p=u.createProjectionLayer(Pt),s.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),f=new Cn(p.textureWidth,p.textureHeight,{format:kn,type:qn,depthTexture:new Wa(p.textureWidth,p.textureHeight,bt,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0});let Zt=t.properties.get(f);Zt.__ignoreDepthValues=p.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Et.setContext(s),Et.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function O(J){for(let st=0;st<J.removed.length;st++){let bt=J.removed[st],At=_.indexOf(bt);At>=0&&(_[At]=null,y[At].disconnect(bt))}for(let st=0;st<J.added.length;st++){let bt=J.added[st],At=_.indexOf(bt);if(At===-1){for(let Zt=0;Zt<y.length;Zt++)if(Zt>=_.length){_.push(bt),At=Zt;break}else if(_[Zt]===null){_[Zt]=bt,At=Zt;break}if(At===-1)break}let Pt=y[At];Pt&&Pt.connect(bt)}}let W=new U,K=new U;function it(J,st,bt){W.setFromMatrixPosition(st.matrixWorld),K.setFromMatrixPosition(bt.matrixWorld);let At=W.distanceTo(K),Pt=st.projectionMatrix.elements,Zt=bt.projectionMatrix.elements,Jt=Pt[14]/(Pt[10]-1),kt=Pt[14]/(Pt[10]+1),le=(Pt[9]+1)/Pt[5],X=(Pt[9]-1)/Pt[5],Ke=(Pt[8]-1)/Pt[0],Ft=(Zt[8]+1)/Zt[0],Xt=Jt*Ke,Rt=Jt*Ft,Se=At/(-Ke+Ft),Kt=Se*-Ke;st.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Kt),J.translateZ(Se),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert();let A=Jt+Se,M=kt+Se,q=Xt-Kt,lt=Rt+(At-Kt),rt=le*kt/M*A,ct=X*kt/M*A;J.projectionMatrix.makePerspective(q,lt,rt,ct,A,M),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}function Q(J,st){st===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(st.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;S.near=L.near=E.near=J.near,S.far=L.far=E.far=J.far,(T!==S.near||V!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),T=S.near,V=S.far);let st=J.parent,bt=S.cameras;Q(S,st);for(let At=0;At<bt.length;At++)Q(bt[At],st);bt.length===2?it(S,E,L):S.projectionMatrix.copy(E.projectionMatrix),et(J,S,st)};function et(J,st,bt){bt===null?J.matrix.copy(st.matrixWorld):(J.matrix.copy(bt.matrixWorld),J.matrix.invert(),J.matrix.multiply(st.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(st.projectionMatrix),J.projectionMatrixInverse.copy(st.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Ia*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(p===null&&d===null))return l},this.setFoveation=function(J){l=J,p!==null&&(p.fixedFoveation=J),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=J)};let ot=null;function ht(J,st){if(h=st.getViewerPose(c||a),g=st,h!==null){let bt=h.views;d!==null&&(t.setRenderTargetFramebuffer(f,d.framebuffer),t.setRenderTarget(f));let At=!1;bt.length!==S.cameras.length&&(S.cameras.length=0,At=!0);for(let Pt=0;Pt<bt.length;Pt++){let Zt=bt[Pt],Jt=null;if(d!==null)Jt=d.getViewport(Zt);else{let le=u.getViewSubImage(p,Zt);Jt=le.viewport,Pt===0&&(t.setRenderTargetTextures(f,le.colorTexture,p.ignoreDepthValues?void 0:le.depthStencilTexture),t.setRenderTarget(f))}let kt=k[Pt];kt===void 0&&(kt=new an,kt.layers.enable(Pt),kt.viewport=new en,k[Pt]=kt),kt.matrix.fromArray(Zt.transform.matrix),kt.matrix.decompose(kt.position,kt.quaternion,kt.scale),kt.projectionMatrix.fromArray(Zt.projectionMatrix),kt.projectionMatrixInverse.copy(kt.projectionMatrix).invert(),kt.viewport.set(Jt.x,Jt.y,Jt.width,Jt.height),Pt===0&&(S.matrix.copy(kt.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),At===!0&&S.cameras.push(kt)}}for(let bt=0;bt<y.length;bt++){let At=_[bt],Pt=y[bt];At!==null&&Pt!==void 0&&Pt.update(At,st,c||a)}ot&&ot(J,st),st.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:st}),g=null}let Et=new Gu;Et.setAnimationLoop(ht),this.setAnimationLoop=function(J){ot=J},this.dispose=function(){}}};function Wx(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Vu(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,y,_,b){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),p(m,f),f.isMeshPhysicalMaterial&&d(m,f,b)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),x(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,y,_):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===un&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===un&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let y=t.get(f).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;let _=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*_,e(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,y,_){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*y,m.scale.value=_*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function p(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),t.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function d(m,f,y){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===un&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){let y=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Xx(i,t,e,n){let s={},r={},a=[],o=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,_){let b=_.program;n.uniformBlockBinding(y,b)}function c(y,_){let b=s[y.id];b===void 0&&(g(y),b=h(y),s[y.id]=b,y.addEventListener("dispose",m));let C=_.program;n.updateUBOMapping(y,C);let E=t.render.frame;r[y.id]!==E&&(p(y),r[y.id]=E)}function h(y){let _=u();y.__bindingPointIndex=_;let b=i.createBuffer(),C=y.__size,E=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,C,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,b),b}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(y){let _=s[y.id],b=y.uniforms,C=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let E=0,L=b.length;E<L;E++){let k=Array.isArray(b[E])?b[E]:[b[E]];for(let S=0,T=k.length;S<T;S++){let V=k[S];if(d(V,E,S,C)===!0){let $=V.__offset,ft=Array.isArray(V.value)?V.value:[V.value],O=0;for(let W=0;W<ft.length;W++){let K=ft[W],it=x(K);typeof K=="number"||typeof K=="boolean"?(V.__data[0]=K,i.bufferSubData(i.UNIFORM_BUFFER,$+O,V.__data)):K.isMatrix3?(V.__data[0]=K.elements[0],V.__data[1]=K.elements[1],V.__data[2]=K.elements[2],V.__data[3]=0,V.__data[4]=K.elements[3],V.__data[5]=K.elements[4],V.__data[6]=K.elements[5],V.__data[7]=0,V.__data[8]=K.elements[6],V.__data[9]=K.elements[7],V.__data[10]=K.elements[8],V.__data[11]=0):(K.toArray(V.__data,O),O+=it.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,$,V.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(y,_,b,C){let E=y.value,L=_+"_"+b;if(C[L]===void 0)return typeof E=="number"||typeof E=="boolean"?C[L]=E:C[L]=E.clone(),!0;{let k=C[L];if(typeof E=="number"||typeof E=="boolean"){if(k!==E)return C[L]=E,!0}else if(k.equals(E)===!1)return k.copy(E),!0}return!1}function g(y){let _=y.uniforms,b=0,C=16;for(let L=0,k=_.length;L<k;L++){let S=Array.isArray(_[L])?_[L]:[_[L]];for(let T=0,V=S.length;T<V;T++){let $=S[T],ft=Array.isArray($.value)?$.value:[$.value];for(let O=0,W=ft.length;O<W;O++){let K=ft[O],it=x(K),Q=b%C;Q!==0&&C-Q<it.boundary&&(b+=C-Q),$.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=b,b+=it.storage}}}let E=b%C;return E>0&&(b+=C-E),y.__size=b,y.__cache={},this}function x(y){let _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function m(y){let _=y.target;_.removeEventListener("dispose",m);let b=a.indexOf(_.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function f(){for(let y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:f}}var Ur=class{constructor(t={}){let{canvas:e=tp(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let p;n!==null?p=n.getContextAttributes().alpha:p=a;let d=new Uint32Array(4),g=new Int32Array(4),x=null,m=null,f=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ue,this._useLegacyLights=!1,this.toneMapping=Li,this.toneMappingExposure=1;let _=this,b=!1,C=0,E=0,L=null,k=-1,S=null,T=new en,V=new en,$=null,ft=new Lt(0),O=0,W=e.width,K=e.height,it=1,Q=null,et=null,ot=new en(0,0,W,K),ht=new en(0,0,W,K),Et=!1,J=new Dr,st=!1,bt=!1,At=null,Pt=new ue,Zt=new St,Jt=new U,kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function le(){return L===null?it:1}let X=n;function Ke(w,B){for(let H=0;H<w.length;H++){let Y=w[H],G=e.getContext(Y,B);if(G!==null)return G}return null}try{let w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${pc}`),e.addEventListener("webglcontextlost",pt,!1),e.addEventListener("webglcontextrestored",N,!1),e.addEventListener("webglcontextcreationerror",vt,!1),X===null){let B=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&B.shift(),X=Ke(B,w),X===null)throw Ke(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext!="undefined"&&X instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),X.getShaderPrecisionFormat===void 0&&(X.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Ft,Xt,Rt,Se,Kt,A,M,q,lt,rt,ct,Tt,_t,wt,zt,te,at,de,re,Vt,Dt,mt,$t,ce;function be(){Ft=new hg(X),Xt=new sg(X,Ft,t),Ft.init(Xt),mt=new Vx(X,Ft,Xt),Rt=new kx(X,Ft,Xt),Se=new dg(X),Kt=new Rx,A=new Hx(X,Ft,Rt,Kt,Xt,mt,Se),M=new ag(_),q=new cg(_),lt=new Mp(X,Xt),$t=new ng(X,Ft,lt,Xt),rt=new ug(X,lt,Se,$t),ct=new xg(X,rt,lt,Se),re=new gg(X,Xt,A),te=new rg(Kt),Tt=new Ax(_,M,q,Ft,Xt,$t,te),_t=new Wx(_,Kt),wt=new Px,zt=new Fx(Ft,Xt),de=new eg(_,M,q,Rt,ct,p,l),at=new Bx(_,ct,Xt),ce=new Xx(X,Se,Xt,Rt),Vt=new ig(X,Ft,Se,Xt),Dt=new fg(X,Ft,Se,Xt),Se.programs=Tt.programs,_.capabilities=Xt,_.extensions=Ft,_.properties=Kt,_.renderLists=wt,_.shadowMap=at,_.state=Rt,_.info=Se}be();let qt=new Gl(_,X);this.xr=qt,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){let w=Ft.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=Ft.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return it},this.setPixelRatio=function(w){w!==void 0&&(it=w,this.setSize(W,K,!1))},this.getSize=function(w){return w.set(W,K)},this.setSize=function(w,B,H=!0){if(qt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=w,K=B,e.width=Math.floor(w*it),e.height=Math.floor(B*it),H===!0&&(e.style.width=w+"px",e.style.height=B+"px"),this.setViewport(0,0,w,B)},this.getDrawingBufferSize=function(w){return w.set(W*it,K*it).floor()},this.setDrawingBufferSize=function(w,B,H){W=w,K=B,it=H,e.width=Math.floor(w*H),e.height=Math.floor(B*H),this.setViewport(0,0,w,B)},this.getCurrentViewport=function(w){return w.copy(T)},this.getViewport=function(w){return w.copy(ot)},this.setViewport=function(w,B,H,Y){w.isVector4?ot.set(w.x,w.y,w.z,w.w):ot.set(w,B,H,Y),Rt.viewport(T.copy(ot).multiplyScalar(it).floor())},this.getScissor=function(w){return w.copy(ht)},this.setScissor=function(w,B,H,Y){w.isVector4?ht.set(w.x,w.y,w.z,w.w):ht.set(w,B,H,Y),Rt.scissor(V.copy(ht).multiplyScalar(it).floor())},this.getScissorTest=function(){return Et},this.setScissorTest=function(w){Rt.setScissorTest(Et=w)},this.setOpaqueSort=function(w){Q=w},this.setTransparentSort=function(w){et=w},this.getClearColor=function(w){return w.copy(de.getClearColor())},this.setClearColor=function(){de.setClearColor.apply(de,arguments)},this.getClearAlpha=function(){return de.getClearAlpha()},this.setClearAlpha=function(){de.setClearAlpha.apply(de,arguments)},this.clear=function(w=!0,B=!0,H=!0){let Y=0;if(w){let G=!1;if(L!==null){let Mt=L.texture.format;G=Mt===Nu||Mt===Uu||Mt===Du}if(G){let Mt=L.texture.type,Ct=Mt===qn||Mt===Ri||Mt===xc||Mt===ji||Mt===Lu||Mt===Iu,It=de.getClearColor(),Ot=de.getClearAlpha(),Qt=It.r,Wt=It.g,Yt=It.b;Ct?(d[0]=Qt,d[1]=Wt,d[2]=Yt,d[3]=Ot,X.clearBufferuiv(X.COLOR,0,d)):(g[0]=Qt,g[1]=Wt,g[2]=Yt,g[3]=Ot,X.clearBufferiv(X.COLOR,0,g))}else Y|=X.COLOR_BUFFER_BIT}B&&(Y|=X.DEPTH_BUFFER_BIT),H&&(Y|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",pt,!1),e.removeEventListener("webglcontextrestored",N,!1),e.removeEventListener("webglcontextcreationerror",vt,!1),wt.dispose(),zt.dispose(),Kt.dispose(),M.dispose(),q.dispose(),ct.dispose(),$t.dispose(),ce.dispose(),Tt.dispose(),qt.dispose(),qt.removeEventListener("sessionstart",Ge),qt.removeEventListener("sessionend",me),At&&(At.dispose(),At=null),We.stop()};function pt(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function N(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;let w=Se.autoReset,B=at.enabled,H=at.autoUpdate,Y=at.needsUpdate,G=at.type;be(),Se.autoReset=w,at.enabled=B,at.autoUpdate=H,at.needsUpdate=Y,at.type=G}function vt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function yt(w){let B=w.target;B.removeEventListener("dispose",yt),Bt(B)}function Bt(w){Nt(w),Kt.remove(w)}function Nt(w){let B=Kt.get(w).programs;B!==void 0&&(B.forEach(function(H){Tt.releaseProgram(H)}),w.isShaderMaterial&&Tt.releaseShaderCache(w))}this.renderBufferDirect=function(w,B,H,Y,G,Mt){B===null&&(B=kt);let Ct=G.isMesh&&G.matrixWorld.determinant()<0,It=gr(w,B,H,Y,G);Rt.setMaterial(Y,Ct);let Ot=H.index,Qt=1;if(Y.wireframe===!0){if(Ot=rt.getWireframeAttribute(H),Ot===void 0)return;Qt=2}let Wt=H.drawRange,Yt=H.attributes.position,Ie=Wt.start*Qt,Qe=(Wt.start+Wt.count)*Qt;Mt!==null&&(Ie=Math.max(Ie,Mt.start*Qt),Qe=Math.min(Qe,(Mt.start+Mt.count)*Qt)),Ot!==null?(Ie=Math.max(Ie,0),Qe=Math.min(Qe,Ot.count)):Yt!=null&&(Ie=Math.max(Ie,0),Qe=Math.min(Qe,Yt.count));let ze=Qe-Ie;if(ze<0||ze===1/0)return;$t.setup(G,Y,It,H,Ot);let Dn,Ee=Vt;if(Ot!==null&&(Dn=lt.get(Ot),Ee=Dt,Ee.setIndex(Dn)),G.isMesh)Y.wireframe===!0?(Rt.setLineWidth(Y.wireframeLinewidth*le()),Ee.setMode(X.LINES)):Ee.setMode(X.TRIANGLES);else if(G.isLine){let ee=Y.linewidth;ee===void 0&&(ee=1),Rt.setLineWidth(ee*le()),G.isLineSegments?Ee.setMode(X.LINES):G.isLineLoop?Ee.setMode(X.LINE_LOOP):Ee.setMode(X.LINE_STRIP)}else G.isPoints?Ee.setMode(X.POINTS):G.isSprite&&Ee.setMode(X.TRIANGLES);if(G.isBatchedMesh)Ee.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else if(G.isInstancedMesh)Ee.renderInstances(Ie,ze,G.count);else if(H.isInstancedBufferGeometry){let ee=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,ms=Math.min(H.instanceCount,ee);Ee.renderInstances(Ie,ze,ms)}else Ee.render(Ie,ze)};function pe(w,B,H){w.transparent===!0&&w.side===vn&&w.forceSinglePass===!1?(w.side=un,w.needsUpdate=!0,Vi(w,B,H),w.side=Di,w.needsUpdate=!0,Vi(w,B,H),w.side=vn):Vi(w,B,H)}this.compile=function(w,B,H=null){H===null&&(H=w),m=zt.get(H),m.init(),y.push(m),H.traverseVisible(function(G){G.isLight&&G.layers.test(B.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),w!==H&&w.traverseVisible(function(G){G.isLight&&G.layers.test(B.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),m.setupLights(_._useLegacyLights);let Y=new Set;return w.traverse(function(G){let Mt=G.material;if(Mt)if(Array.isArray(Mt))for(let Ct=0;Ct<Mt.length;Ct++){let It=Mt[Ct];pe(It,H,G),Y.add(It)}else pe(Mt,H,G),Y.add(Mt)}),y.pop(),m=null,Y},this.compileAsync=function(w,B,H=null){let Y=this.compile(w,B,H);return new Promise(G=>{function Mt(){if(Y.forEach(function(Ct){Kt.get(Ct).currentProgram.isReady()&&Y.delete(Ct)}),Y.size===0){G(w);return}setTimeout(Mt,10)}Ft.get("KHR_parallel_shader_compile")!==null?Mt():setTimeout(Mt,10)})};let _e=null;function Oe(w){_e&&_e(w)}function Ge(){We.stop()}function me(){We.start()}let We=new Gu;We.setAnimationLoop(Oe),typeof self!="undefined"&&We.setContext(self),this.setAnimationLoop=function(w){_e=w,qt.setAnimationLoop(w),w===null?We.stop():We.start()},qt.addEventListener("sessionstart",Ge),qt.addEventListener("sessionend",me),this.render=function(w,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),qt.enabled===!0&&qt.isPresenting===!0&&(qt.cameraAutoUpdate===!0&&qt.updateCamera(B),B=qt.getCamera()),w.isScene===!0&&w.onBeforeRender(_,w,B,L),m=zt.get(w,y.length),m.init(),y.push(m),Pt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),J.setFromProjectionMatrix(Pt),bt=this.localClippingEnabled,st=te.init(this.clippingPlanes,bt),x=wt.get(w,f.length),x.init(),f.push(x),mn(w,B,0,_.sortObjects),x.finish(),_.sortObjects===!0&&x.sort(Q,et),this.info.render.frame++,st===!0&&te.beginShadows();let H=m.state.shadowsArray;if(at.render(H,w,B),st===!0&&te.endShadows(),this.info.autoReset===!0&&this.info.reset(),de.render(x,w),m.setupLights(_._useLegacyLights),B.isArrayCamera){let Y=B.cameras;for(let G=0,Mt=Y.length;G<Mt;G++){let Ct=Y[G];Hi(x,w,Ct,Ct.viewport)}}else Hi(x,w,B);L!==null&&(A.updateMultisampleRenderTarget(L),A.updateRenderTargetMipmap(L)),w.isScene===!0&&w.onAfterRender(_,w,B),$t.resetDefaultState(),k=-1,S=null,y.pop(),y.length>0?m=y[y.length-1]:m=null,f.pop(),f.length>0?x=f[f.length-1]:x=null};function mn(w,B,H,Y){if(w.visible===!1)return;if(w.layers.test(B.layers)){if(w.isGroup)H=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(B);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||J.intersectsSprite(w)){Y&&Jt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Pt);let Ct=ct.update(w),It=w.material;It.visible&&x.push(w,Ct,It,H,Jt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||J.intersectsObject(w))){let Ct=ct.update(w),It=w.material;if(Y&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Jt.copy(w.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),Jt.copy(Ct.boundingSphere.center)),Jt.applyMatrix4(w.matrixWorld).applyMatrix4(Pt)),Array.isArray(It)){let Ot=Ct.groups;for(let Qt=0,Wt=Ot.length;Qt<Wt;Qt++){let Yt=Ot[Qt],Ie=It[Yt.materialIndex];Ie&&Ie.visible&&x.push(w,Ct,Ie,H,Jt.z,Yt)}}else It.visible&&x.push(w,Ct,It,H,Jt.z,null)}}let Mt=w.children;for(let Ct=0,It=Mt.length;Ct<It;Ct++)mn(Mt[Ct],B,H,Y)}function Hi(w,B,H,Y){let G=w.opaque,Mt=w.transmissive,Ct=w.transparent;m.setupLightsView(H),st===!0&&te.setGlobalState(_.clippingPlanes,H),Mt.length>0&&dr(G,Mt,B,H),Y&&Rt.viewport(T.copy(Y)),G.length>0&&Kn(G,B,H),Mt.length>0&&Kn(Mt,B,H),Ct.length>0&&Kn(Ct,B,H),Rt.buffers.depth.setTest(!0),Rt.buffers.depth.setMask(!0),Rt.buffers.color.setMask(!0),Rt.setPolygonOffset(!1)}function dr(w,B,H,Y){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;let Mt=Xt.isWebGL2;At===null&&(At=new Cn(1,1,{generateMipmaps:!0,type:Ft.has("EXT_color_buffer_half_float")?is:qn,minFilter:Ir,samples:Mt?4:0})),_.getDrawingBufferSize(Zt),Mt?At.setSize(Zt.x,Zt.y):At.setSize(Rl(Zt.x),Rl(Zt.y));let Ct=_.getRenderTarget();_.setRenderTarget(At),_.getClearColor(ft),O=_.getClearAlpha(),O<1&&_.setClearColor(16777215,.5),_.clear();let It=_.toneMapping;_.toneMapping=Li,Kn(w,H,Y),A.updateMultisampleRenderTarget(At),A.updateRenderTargetMipmap(At);let Ot=!1;for(let Qt=0,Wt=B.length;Qt<Wt;Qt++){let Yt=B[Qt],Ie=Yt.object,Qe=Yt.geometry,ze=Yt.material,Dn=Yt.group;if(ze.side===vn&&Ie.layers.test(Y.layers)){let Ee=ze.side;ze.side=un,ze.needsUpdate=!0,pr(Ie,H,Y,Qe,ze,Dn),ze.side=Ee,ze.needsUpdate=!0,Ot=!0}}Ot===!0&&(A.updateMultisampleRenderTarget(At),A.updateRenderTargetMipmap(At)),_.setRenderTarget(Ct),_.setClearColor(ft,O),_.toneMapping=It}function Kn(w,B,H){let Y=B.isScene===!0?B.overrideMaterial:null;for(let G=0,Mt=w.length;G<Mt;G++){let Ct=w[G],It=Ct.object,Ot=Ct.geometry,Qt=Y===null?Ct.material:Y,Wt=Ct.group;It.layers.test(H.layers)&&pr(It,B,H,Ot,Qt,Wt)}}function pr(w,B,H,Y,G,Mt){w.onBeforeRender(_,B,H,Y,G,Mt),w.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),G.onBeforeRender(_,B,H,Y,w,Mt),G.transparent===!0&&G.side===vn&&G.forceSinglePass===!1?(G.side=un,G.needsUpdate=!0,_.renderBufferDirect(H,B,Y,G,w,Mt),G.side=Di,G.needsUpdate=!0,_.renderBufferDirect(H,B,Y,G,w,Mt),G.side=vn):_.renderBufferDirect(H,B,Y,G,w,Mt),w.onAfterRender(_,B,H,Y,G,Mt)}function Vi(w,B,H){B.isScene!==!0&&(B=kt);let Y=Kt.get(w),G=m.state.lights,Mt=m.state.shadowsArray,Ct=G.state.version,It=Tt.getParameters(w,G.state,Mt,B,H),Ot=Tt.getProgramCacheKey(It),Qt=Y.programs;Y.environment=w.isMeshStandardMaterial?B.environment:null,Y.fog=B.fog,Y.envMap=(w.isMeshStandardMaterial?q:M).get(w.envMap||Y.environment),Qt===void 0&&(w.addEventListener("dispose",yt),Qt=new Map,Y.programs=Qt);let Wt=Qt.get(Ot);if(Wt!==void 0){if(Y.currentProgram===Wt&&Y.lightsStateVersion===Ct)return Gi(w,It),Wt}else It.uniforms=Tt.getUniforms(w),w.onBuild(H,It,_),w.onBeforeCompile(It,_),Wt=Tt.acquireProgram(It,Ot),Qt.set(Ot,Wt),Y.uniforms=It.uniforms;let Yt=Y.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Yt.clippingPlanes=te.uniform),Gi(w,It),Y.needsLights=xr(w),Y.lightsStateVersion=Ct,Y.needsLights&&(Yt.ambientLightColor.value=G.state.ambient,Yt.lightProbe.value=G.state.probe,Yt.directionalLights.value=G.state.directional,Yt.directionalLightShadows.value=G.state.directionalShadow,Yt.spotLights.value=G.state.spot,Yt.spotLightShadows.value=G.state.spotShadow,Yt.rectAreaLights.value=G.state.rectArea,Yt.ltc_1.value=G.state.rectAreaLTC1,Yt.ltc_2.value=G.state.rectAreaLTC2,Yt.pointLights.value=G.state.point,Yt.pointLightShadows.value=G.state.pointShadow,Yt.hemisphereLights.value=G.state.hemi,Yt.directionalShadowMap.value=G.state.directionalShadowMap,Yt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Yt.spotShadowMap.value=G.state.spotShadowMap,Yt.spotLightMatrix.value=G.state.spotLightMatrix,Yt.spotLightMap.value=G.state.spotLightMap,Yt.pointShadowMap.value=G.state.pointShadowMap,Yt.pointShadowMatrix.value=G.state.pointShadowMatrix),Y.currentProgram=Wt,Y.uniformsList=null,Wt}function mr(w){if(w.uniformsList===null){let B=w.currentProgram.getUniforms();w.uniformsList=Vs.seqWithValue(B.seq,w.uniforms)}return w.uniformsList}function Gi(w,B){let H=Kt.get(w);H.outputColorSpace=B.outputColorSpace,H.batching=B.batching,H.instancing=B.instancing,H.instancingColor=B.instancingColor,H.skinning=B.skinning,H.morphTargets=B.morphTargets,H.morphNormals=B.morphNormals,H.morphColors=B.morphColors,H.morphTargetsCount=B.morphTargetsCount,H.numClippingPlanes=B.numClippingPlanes,H.numIntersection=B.numClipIntersection,H.vertexAlphas=B.vertexAlphas,H.vertexTangents=B.vertexTangents,H.toneMapping=B.toneMapping}function gr(w,B,H,Y,G){B.isScene!==!0&&(B=kt),A.resetTextureUnits();let Mt=B.fog,Ct=Y.isMeshStandardMaterial?B.environment:null,It=L===null?_.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:li,Ot=(Y.isMeshStandardMaterial?q:M).get(Y.envMap||Ct),Qt=Y.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Wt=!!H.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Yt=!!H.morphAttributes.position,Ie=!!H.morphAttributes.normal,Qe=!!H.morphAttributes.color,ze=Li;Y.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(ze=_.toneMapping);let Dn=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Ee=Dn!==void 0?Dn.length:0,ee=Kt.get(Y),ms=m.state.lights;if(st===!0&&(bt===!0||w!==S)){let F=w===S&&Y.id===k;te.setState(Y,w,F)}let we=!1;Y.version===ee.__version?(ee.needsLights&&ee.lightsStateVersion!==ms.state.version||ee.outputColorSpace!==It||G.isBatchedMesh&&ee.batching===!1||!G.isBatchedMesh&&ee.batching===!0||G.isInstancedMesh&&ee.instancing===!1||!G.isInstancedMesh&&ee.instancing===!0||G.isSkinnedMesh&&ee.skinning===!1||!G.isSkinnedMesh&&ee.skinning===!0||G.isInstancedMesh&&ee.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&ee.instancingColor===!1&&G.instanceColor!==null||ee.envMap!==Ot||Y.fog===!0&&ee.fog!==Mt||ee.numClippingPlanes!==void 0&&(ee.numClippingPlanes!==te.numPlanes||ee.numIntersection!==te.numIntersection)||ee.vertexAlphas!==Qt||ee.vertexTangents!==Wt||ee.morphTargets!==Yt||ee.morphNormals!==Ie||ee.morphColors!==Qe||ee.toneMapping!==ze||Xt.isWebGL2===!0&&ee.morphTargetsCount!==Ee)&&(we=!0):(we=!0,ee.__version=Y.version);let Qn=ee.currentProgram;we===!0&&(Qn=Vi(Y,B,G));let _r=!1,v=!1,I=!1,R=Qn.getUniforms(),D=ee.uniforms;if(Rt.useProgram(Qn.program)&&(_r=!0,v=!0,I=!0),Y.id!==k&&(k=Y.id,v=!0),_r||S!==w){R.setValue(X,"projectionMatrix",w.projectionMatrix),R.setValue(X,"viewMatrix",w.matrixWorldInverse);let F=R.map.cameraPosition;F!==void 0&&F.setValue(X,Jt.setFromMatrixPosition(w.matrixWorld)),Xt.logarithmicDepthBuffer&&R.setValue(X,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&R.setValue(X,"isOrthographic",w.isOrthographicCamera===!0),S!==w&&(S=w,v=!0,I=!0)}if(G.isSkinnedMesh){R.setOptional(X,G,"bindMatrix"),R.setOptional(X,G,"bindMatrixInverse");let F=G.skeleton;F&&(Xt.floatVertexTextures?(F.boneTexture===null&&F.computeBoneTexture(),R.setValue(X,"boneTexture",F.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}G.isBatchedMesh&&(R.setOptional(X,G,"batchingTexture"),R.setValue(X,"batchingTexture",G._matricesTexture,A));let z=H.morphAttributes;if((z.position!==void 0||z.normal!==void 0||z.color!==void 0&&Xt.isWebGL2===!0)&&re.update(G,H,Qn),(v||ee.receiveShadow!==G.receiveShadow)&&(ee.receiveShadow=G.receiveShadow,R.setValue(X,"receiveShadow",G.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(D.envMap.value=Ot,D.flipEnvMap.value=Ot.isCubeTexture&&Ot.isRenderTargetTexture===!1?-1:1),v&&(R.setValue(X,"toneMappingExposure",_.toneMappingExposure),ee.needsLights&&Wi(D,I),Mt&&Y.fog===!0&&_t.refreshFogUniforms(D,Mt),_t.refreshMaterialUniforms(D,Y,it,K,At),Vs.upload(X,mr(ee),D,A)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Vs.upload(X,mr(ee),D,A),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&R.setValue(X,"center",G.center),R.setValue(X,"modelViewMatrix",G.modelViewMatrix),R.setValue(X,"normalMatrix",G.normalMatrix),R.setValue(X,"modelMatrix",G.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){let F=Y.uniformsGroups;for(let Z=0,j=F.length;Z<j;Z++)if(Xt.isWebGL2){let dt=F[Z];ce.update(dt,Qn),ce.bind(dt,Qn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Qn}function Wi(w,B){w.ambientLightColor.needsUpdate=B,w.lightProbe.needsUpdate=B,w.directionalLights.needsUpdate=B,w.directionalLightShadows.needsUpdate=B,w.pointLights.needsUpdate=B,w.pointLightShadows.needsUpdate=B,w.spotLights.needsUpdate=B,w.spotLightShadows.needsUpdate=B,w.rectAreaLights.needsUpdate=B,w.hemisphereLights.needsUpdate=B}function xr(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(w,B,H){Kt.get(w.texture).__webglTexture=B,Kt.get(w.depthTexture).__webglTexture=H;let Y=Kt.get(w);Y.__hasExternalTextures=!0,Y.__hasExternalTextures&&(Y.__autoAllocateDepthBuffer=H===void 0,Y.__autoAllocateDepthBuffer||Ft.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,B){let H=Kt.get(w);H.__webglFramebuffer=B,H.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(w,B=0,H=0){L=w,C=B,E=H;let Y=!0,G=null,Mt=!1,Ct=!1;if(w){let Ot=Kt.get(w);Ot.__useDefaultFramebuffer!==void 0?(Rt.bindFramebuffer(X.FRAMEBUFFER,null),Y=!1):Ot.__webglFramebuffer===void 0?A.setupRenderTarget(w):Ot.__hasExternalTextures&&A.rebindTextures(w,Kt.get(w.texture).__webglTexture,Kt.get(w.depthTexture).__webglTexture);let Qt=w.texture;(Qt.isData3DTexture||Qt.isDataArrayTexture||Qt.isCompressedArrayTexture)&&(Ct=!0);let Wt=Kt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Wt[B])?G=Wt[B][H]:G=Wt[B],Mt=!0):Xt.isWebGL2&&w.samples>0&&A.useMultisampledRTT(w)===!1?G=Kt.get(w).__webglMultisampledFramebuffer:Array.isArray(Wt)?G=Wt[H]:G=Wt,T.copy(w.viewport),V.copy(w.scissor),$=w.scissorTest}else T.copy(ot).multiplyScalar(it).floor(),V.copy(ht).multiplyScalar(it).floor(),$=Et;if(Rt.bindFramebuffer(X.FRAMEBUFFER,G)&&Xt.drawBuffers&&Y&&Rt.drawBuffers(w,G),Rt.viewport(T),Rt.scissor(V),Rt.setScissorTest($),Mt){let Ot=Kt.get(w.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ot.__webglTexture,H)}else if(Ct){let Ot=Kt.get(w.texture),Qt=B||0;X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,Ot.__webglTexture,H||0,Qt)}k=-1},this.readRenderTargetPixels=function(w,B,H,Y,G,Mt,Ct){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=Kt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ct!==void 0&&(It=It[Ct]),It){Rt.bindFramebuffer(X.FRAMEBUFFER,It);try{let Ot=w.texture,Qt=Ot.format,Wt=Ot.type;if(Qt!==kn&&mt.convert(Qt)!==X.getParameter(X.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Yt=Wt===is&&(Ft.has("EXT_color_buffer_half_float")||Xt.isWebGL2&&Ft.has("EXT_color_buffer_float"));if(Wt!==qn&&mt.convert(Wt)!==X.getParameter(X.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Wt===Ci&&(Xt.isWebGL2||Ft.has("OES_texture_float")||Ft.has("WEBGL_color_buffer_float")))&&!Yt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=w.width-Y&&H>=0&&H<=w.height-G&&X.readPixels(B,H,Y,G,mt.convert(Qt),mt.convert(Wt),Mt)}finally{let Ot=L!==null?Kt.get(L).__webglFramebuffer:null;Rt.bindFramebuffer(X.FRAMEBUFFER,Ot)}}},this.copyFramebufferToTexture=function(w,B,H=0){let Y=Math.pow(2,-H),G=Math.floor(B.image.width*Y),Mt=Math.floor(B.image.height*Y);A.setTexture2D(B,0),X.copyTexSubImage2D(X.TEXTURE_2D,H,0,0,w.x,w.y,G,Mt),Rt.unbindTexture()},this.copyTextureToTexture=function(w,B,H,Y=0){let G=B.image.width,Mt=B.image.height,Ct=mt.convert(H.format),It=mt.convert(H.type);A.setTexture2D(H,0),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,H.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,H.unpackAlignment),B.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Y,w.x,w.y,G,Mt,Ct,It,B.image.data):B.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Y,w.x,w.y,B.mipmaps[0].width,B.mipmaps[0].height,Ct,B.mipmaps[0].data):X.texSubImage2D(X.TEXTURE_2D,Y,w.x,w.y,Ct,It,B.image),Y===0&&H.generateMipmaps&&X.generateMipmap(X.TEXTURE_2D),Rt.unbindTexture()},this.copyTextureToTexture3D=function(w,B,H,Y,G=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Mt=w.max.x-w.min.x+1,Ct=w.max.y-w.min.y+1,It=w.max.z-w.min.z+1,Ot=mt.convert(Y.format),Qt=mt.convert(Y.type),Wt;if(Y.isData3DTexture)A.setTexture3D(Y,0),Wt=X.TEXTURE_3D;else if(Y.isDataArrayTexture||Y.isCompressedArrayTexture)A.setTexture2DArray(Y,0),Wt=X.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,Y.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,Y.unpackAlignment);let Yt=X.getParameter(X.UNPACK_ROW_LENGTH),Ie=X.getParameter(X.UNPACK_IMAGE_HEIGHT),Qe=X.getParameter(X.UNPACK_SKIP_PIXELS),ze=X.getParameter(X.UNPACK_SKIP_ROWS),Dn=X.getParameter(X.UNPACK_SKIP_IMAGES),Ee=H.isCompressedTexture?H.mipmaps[G]:H.image;X.pixelStorei(X.UNPACK_ROW_LENGTH,Ee.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Ee.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,w.min.x),X.pixelStorei(X.UNPACK_SKIP_ROWS,w.min.y),X.pixelStorei(X.UNPACK_SKIP_IMAGES,w.min.z),H.isDataTexture||H.isData3DTexture?X.texSubImage3D(Wt,G,B.x,B.y,B.z,Mt,Ct,It,Ot,Qt,Ee.data):H.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),X.compressedTexSubImage3D(Wt,G,B.x,B.y,B.z,Mt,Ct,It,Ot,Ee.data)):X.texSubImage3D(Wt,G,B.x,B.y,B.z,Mt,Ct,It,Ot,Qt,Ee),X.pixelStorei(X.UNPACK_ROW_LENGTH,Yt),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Ie),X.pixelStorei(X.UNPACK_SKIP_PIXELS,Qe),X.pixelStorei(X.UNPACK_SKIP_ROWS,ze),X.pixelStorei(X.UNPACK_SKIP_IMAGES,Dn),G===0&&Y.generateMipmaps&&X.generateMipmap(Wt),Rt.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?A.setTextureCube(w,0):w.isData3DTexture?A.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?A.setTexture2DArray(w,0):A.setTexture2D(w,0),Rt.unbindTexture()},this.resetState=function(){C=0,E=0,L=null,Rt.reset(),$t.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===_c?"display-p3":"srgb",e.unpackColorSpace=ve.workingColorSpace===ao?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ue?es:Ou}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===es?Ue:li}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},Wl=class extends Ur{};Wl.prototype.isWebGL1Renderer=!0;var Xa=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Lt(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var ss=class extends Xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}},Xl=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Tl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Ii()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ii()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ii()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},gn=new U,qa=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)gn.fromBufferAttribute(this,e),gn.applyMatrix4(t),this.setXYZ(e,gn.x,gn.y,gn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)gn.fromBufferAttribute(this,e),gn.applyNormalMatrix(t),this.setXYZ(e,gn.x,gn.y,gn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)gn.fromBufferAttribute(this,e),gn.transformDirection(t),this.setXYZ(e,gn.x,gn.y,gn.z);return this}setX(t,e){return this.normalized&&(e=ye(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ye(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ye(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ye(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ai(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ai(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ai(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ai(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ye(e,this.array),n=ye(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ye(e,this.array),n=ye(n,this.array),s=ye(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ye(e,this.array),n=ye(n,this.array),s=ye(s,this.array),r=ye(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new fe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},rs=class extends hi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Lt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ds,br=new U,Us=new U,Ns=new U,Fs=new St,Er=new St,$u=new ue,xa=new U,wr=new U,_a=new U,vu=new St,gl=new St,yu=new St,$s=class extends Xe{constructor(t=new rs){if(super(),this.isSprite=!0,this.type="Sprite",Ds===void 0){Ds=new ge;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Xl(e,5);Ds.setIndex([0,1,2,0,2,3]),Ds.setAttribute("position",new qa(n,3,0,!1)),Ds.setAttribute("uv",new qa(n,2,3,!1))}this.geometry=Ds,this.material=t,this.center=new St(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Us.setFromMatrixScale(this.matrixWorld),$u.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ns.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Us.multiplyScalar(-Ns.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;va(xa.set(-.5,-.5,0),Ns,a,Us,s,r),va(wr.set(.5,-.5,0),Ns,a,Us,s,r),va(_a.set(.5,.5,0),Ns,a,Us,s,r),vu.set(0,0),gl.set(1,0),yu.set(1,1);let o=t.ray.intersectTriangle(xa,wr,_a,!1,br);if(o===null&&(va(wr.set(-.5,.5,0),Ns,a,Us,s,r),gl.set(0,1),o=t.ray.intersectTriangle(xa,_a,wr,!1,br),o===null))return;let l=t.ray.origin.distanceTo(br);l<t.near||l>t.far||e.push({distance:l,point:br.clone(),uv:Qi.getInterpolation(br,xa,wr,_a,vu,gl,yu,new St),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function va(i,t,e,n,s,r){Fs.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Er.x=r*Fs.x-s*Fs.y,Er.y=s*Fs.x+r*Fs.y):Er.copy(Fs),i.copy(t),i.x+=Er.x,i.y+=Er.y,i.applyMatrix4($u)}var Ya=class extends Rn{constructor(t=null,e=1,n=1,s,r,a,o,l,c=sn,h=sn,u,p){super(null,a,o,l,c,h,s,r,u,p),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Za=class extends fe{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Os=new ue,Mu=new ue,ya=[],Su=new ci,qx=new ue,Tr=new ae,Ar=new Ni,$a=class extends ae{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Za(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,qx)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ci),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Os),Su.copy(t.boundingBox).applyMatrix4(Os),this.boundingBox.union(Su)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ni),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Os),Ar.copy(t.boundingSphere).applyMatrix4(Os),this.boundingSphere.union(Ar)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Tr.geometry=this.geometry,Tr.material=this.material,Tr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ar.copy(this.boundingSphere),Ar.applyMatrix4(n),t.ray.intersectsSphere(Ar)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Os),Mu.multiplyMatrices(n,Os),Tr.matrixWorld=Mu,Tr.raycast(t,ya);for(let a=0,o=ya.length;a<o;a++){let l=ya[a];l.instanceId=r,l.object=this,e.push(l)}ya.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Za(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var ql=class extends hi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Lt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},bu=new ue,Yl=new Oa,Ma=new Ni,Sa=new U,ui=class extends Xe{constructor(t=new ge,e=new ql){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ma.copy(n.boundingSphere),Ma.applyMatrix4(s),Ma.radius+=r,t.ray.intersectsSphere(Ma)===!1)return;bu.copy(s).invert(),Yl.copy(t.ray).applyMatrix4(bu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let p=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let g=p,x=d;g<x;g++){let m=c.getX(g);Sa.fromBufferAttribute(u,m),Eu(Sa,m,l,s,t,e,this)}}else{let p=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let g=p,x=d;g<x;g++)Sa.fromBufferAttribute(u,g),Eu(Sa,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Eu(i,t,e,n,s,r,a){let o=Yl.distanceSqToPoint(i);if(o<e){let l=new U;Yl.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,object:a})}}var as=class extends Rn{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Vn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],p=n[s+1]-h,d=(a-h)/p;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new St:new U);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new U,s=[],r=[],a=[],o=new U,l=new ue;for(let d=0;d<=t;d++){let g=d/t;s[d]=this.getTangentAt(g,new U)}r[0]=new U,a[0]=new U;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),p=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),p<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(rn(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,g))}a[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(rn(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Ja=class extends Vn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e){let n=e||new St,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),p=l-this.aX,d=c-this.aY;l=p*h-d*u+this.aX,c=p*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Zl=class extends Ja{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function yc(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let p=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+u)+(l-o)/u;p*=h,d*=h,s(a,o,p,d)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var ba=new U,xl=new yc,_l=new yc,vl=new yc,Js=class extends Vn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new U){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(ba.subVectors(s[0],s[1]).add(s[0]),c=ba);let u=s[o%r],p=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(ba.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ba),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(p),d),m=Math.pow(p.distanceToSquared(h),d);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),xl.initNonuniformCatmullRom(c.x,u.x,p.x,h.x,g,x,m),_l.initNonuniformCatmullRom(c.y,u.y,p.y,h.y,g,x,m),vl.initNonuniformCatmullRom(c.z,u.z,p.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(xl.initCatmullRom(c.x,u.x,p.x,h.x,this.tension),_l.initCatmullRom(c.y,u.y,p.y,h.y,this.tension),vl.initCatmullRom(c.z,u.z,p.z,h.z,this.tension));return n.set(xl.calc(l),_l.calc(l),vl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new U().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function wu(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function Yx(i,t){let e=1-i;return e*e*t}function Zx(i,t){return 2*(1-i)*i*t}function $x(i,t){return i*i*t}function Pr(i,t,e,n){return Yx(i,t)+Zx(i,e)+$x(i,n)}function Jx(i,t){let e=1-i;return e*e*e*t}function Kx(i,t){let e=1-i;return 3*e*e*i*t}function Qx(i,t){return 3*(1-i)*i*i*t}function jx(i,t){return i*i*i*t}function Lr(i,t,e,n,s){return Jx(i,t)+Kx(i,e)+Qx(i,n)+jx(i,s)}var $l=class extends Vn{constructor(t=new St,e=new St,n=new St,s=new St){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new St){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Lr(t,s.x,r.x,a.x,o.x),Lr(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Jl=class extends Vn{constructor(t=new U,e=new U,n=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new U){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Lr(t,s.x,r.x,a.x,o.x),Lr(t,s.y,r.y,a.y,o.y),Lr(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Kl=class extends Vn{constructor(t=new St,e=new St){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new St){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new St){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ql=class extends Vn{constructor(t=new U,e=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new U){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new U){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},jl=class extends Vn{constructor(t=new St,e=new St,n=new St){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new St){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Pr(t,s.x,r.x,a.x),Pr(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ka=class extends Vn{constructor(t=new U,e=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new U){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Pr(t,s.x,r.x,a.x),Pr(t,s.y,r.y,a.y),Pr(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},tc=class extends Vn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new St){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(wu(o,l.x,c.x,h.x,u.x),wu(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new St().fromArray(s))}return this}},t_=Object.freeze({__proto__:null,ArcCurve:Zl,CatmullRomCurve3:Js,CubicBezierCurve:$l,CubicBezierCurve3:Jl,EllipseCurve:Ja,LineCurve:Kl,LineCurve3:Ql,QuadraticBezierCurve:jl,QuadraticBezierCurve3:Ka,SplineCurve:tc});var Qa=class i extends ge{constructor(t=[new St(0,-.5),new St(.5,0),new St(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=rn(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/e,u=new U,p=new St,d=new U,g=new U,x=new U,m=0,f=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,f=t[y+1].y-t[y].y,d.x=f*1,d.y=-m,d.z=f*0,x.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:m=t[y+1].x-t[y].x,f=t[y+1].y-t[y].y,d.x=f*1,d.y=-m,d.z=f*0,g.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),l.push(d.x,d.y,d.z),x.copy(g)}for(let y=0;y<=e;y++){let _=n+y*h*s,b=Math.sin(_),C=Math.cos(_);for(let E=0;E<=t.length-1;E++){u.x=t[E].x*b,u.y=t[E].y,u.z=t[E].x*C,a.push(u.x,u.y,u.z),p.x=y/e,p.y=E/(t.length-1),o.push(p.x,p.y);let L=l[3*E+0]*b,k=l[3*E+1],S=l[3*E+0]*C;c.push(L,k,S)}}for(let y=0;y<e;y++)for(let _=0;_<t.length-1;_++){let b=_+y*t.length,C=b,E=b+t.length,L=b+t.length+1,k=b+1;r.push(C,E,k),r.push(L,k,E)}this.setIndex(r),this.setAttribute("position",new se(a,3)),this.setAttribute("uv",new se(o,2)),this.setAttribute("normal",new se(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var ja=class i extends ge{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new U,h=new St;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,p=3;u<=e;u++,p+=3){let d=n+u/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[p]/t+1)/2,h.y=(a[p+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new se(a,3)),this.setAttribute("normal",new se(o,3)),this.setAttribute("uv",new se(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},fn=class i extends ge{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],p=[],d=[],g=0,x=[],m=n/2,f=0;y(),a===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new se(u,3)),this.setAttribute("normal",new se(p,3)),this.setAttribute("uv",new se(d,2));function y(){let b=new U,C=new U,E=0,L=(e-t)/n;for(let k=0;k<=r;k++){let S=[],T=k/r,V=T*(e-t)+t;for(let $=0;$<=s;$++){let ft=$/s,O=ft*l+o,W=Math.sin(O),K=Math.cos(O);C.x=V*W,C.y=-T*n+m,C.z=V*K,u.push(C.x,C.y,C.z),b.set(W,L,K).normalize(),p.push(b.x,b.y,b.z),d.push(ft,1-T),S.push(g++)}x.push(S)}for(let k=0;k<s;k++)for(let S=0;S<r;S++){let T=x[S][k],V=x[S+1][k],$=x[S+1][k+1],ft=x[S][k+1];h.push(T,V,ft),h.push(V,$,ft),E+=6}c.addGroup(f,E,0),f+=E}function _(b){let C=g,E=new St,L=new U,k=0,S=b===!0?t:e,T=b===!0?1:-1;for(let $=1;$<=s;$++)u.push(0,m*T,0),p.push(0,T,0),d.push(.5,.5),g++;let V=g;for(let $=0;$<=s;$++){let O=$/s*l+o,W=Math.cos(O),K=Math.sin(O);L.x=S*K,L.y=m*T,L.z=S*W,u.push(L.x,L.y,L.z),p.push(0,T,0),E.x=W*.5+.5,E.y=K*.5*T+.5,d.push(E.x,E.y),g++}for(let $=0;$<s;$++){let ft=C+$,O=V+$;b===!0?h.push(O,O+1,ft):h.push(O+1,O,ft),k+=3}c.addGroup(f,k,b===!0?1:2),f+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},fi=class i extends fn{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ec=class i extends ge{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new se(r,3)),this.setAttribute("normal",new se(r.slice(),3)),this.setAttribute("uv",new se(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){let _=new U,b=new U,C=new U;for(let E=0;E<e.length;E+=3)d(e[E+0],_),d(e[E+1],b),d(e[E+2],C),l(_,b,C,y)}function l(y,_,b,C){let E=C+1,L=[];for(let k=0;k<=E;k++){L[k]=[];let S=y.clone().lerp(b,k/E),T=_.clone().lerp(b,k/E),V=E-k;for(let $=0;$<=V;$++)$===0&&k===E?L[k][$]=S:L[k][$]=S.clone().lerp(T,$/V)}for(let k=0;k<E;k++)for(let S=0;S<2*(E-k)-1;S++){let T=Math.floor(S/2);S%2===0?(p(L[k][T+1]),p(L[k+1][T]),p(L[k][T])):(p(L[k][T+1]),p(L[k+1][T+1]),p(L[k+1][T]))}}function c(y){let _=new U;for(let b=0;b<r.length;b+=3)_.x=r[b+0],_.y=r[b+1],_.z=r[b+2],_.normalize().multiplyScalar(y),r[b+0]=_.x,r[b+1]=_.y,r[b+2]=_.z}function h(){let y=new U;for(let _=0;_<r.length;_+=3){y.x=r[_+0],y.y=r[_+1],y.z=r[_+2];let b=m(y)/2/Math.PI+.5,C=f(y)/Math.PI+.5;a.push(b,1-C)}g(),u()}function u(){for(let y=0;y<a.length;y+=6){let _=a[y+0],b=a[y+2],C=a[y+4],E=Math.max(_,b,C),L=Math.min(_,b,C);E>.9&&L<.1&&(_<.2&&(a[y+0]+=1),b<.2&&(a[y+2]+=1),C<.2&&(a[y+4]+=1))}}function p(y){r.push(y.x,y.y,y.z)}function d(y,_){let b=y*3;_.x=t[b+0],_.y=t[b+1],_.z=t[b+2]}function g(){let y=new U,_=new U,b=new U,C=new U,E=new St,L=new St,k=new St;for(let S=0,T=0;S<r.length;S+=9,T+=6){y.set(r[S+0],r[S+1],r[S+2]),_.set(r[S+3],r[S+4],r[S+5]),b.set(r[S+6],r[S+7],r[S+8]),E.set(a[T+0],a[T+1]),L.set(a[T+2],a[T+3]),k.set(a[T+4],a[T+5]),C.copy(y).add(_).add(b).divideScalar(3);let V=m(C);x(E,T+0,y,V),x(L,T+2,_,V),x(k,T+4,b,V)}}function x(y,_,b,C){C<0&&y.x===1&&(a[_]=y.x-1),b.x===0&&b.z===0&&(a[_]=C/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function f(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var to=class i extends ec{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var eo=class i extends ge{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],h=[],u=t,p=(e-t)/s,d=new U,g=new St;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){let f=r+m/n*a;d.x=u*Math.cos(f),d.y=u*Math.sin(f),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,h.push(g.x,g.y)}u+=p}for(let x=0;x<s;x++){let m=x*(n+1);for(let f=0;f<n;f++){let y=f+m,_=y,b=y+n+1,C=y+n+2,E=y+1;o.push(_,b,E),o.push(b,C,E)}}this.setIndex(o),this.setAttribute("position",new se(l,3)),this.setAttribute("normal",new se(c,3)),this.setAttribute("uv",new se(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var di=class i extends ge{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new U,p=new U,d=[],g=[],x=[],m=[];for(let f=0;f<=n;f++){let y=[],_=f/n,b=0;f===0&&a===0?b=.5/e:f===n&&l===Math.PI&&(b=-.5/e);for(let C=0;C<=e;C++){let E=C/e;u.x=-t*Math.cos(s+E*r)*Math.sin(a+_*o),u.y=t*Math.cos(a+_*o),u.z=t*Math.sin(s+E*r)*Math.sin(a+_*o),g.push(u.x,u.y,u.z),p.copy(u).normalize(),x.push(p.x,p.y,p.z),m.push(E+b,1-_),y.push(c++)}h.push(y)}for(let f=0;f<n;f++)for(let y=0;y<e;y++){let _=h[f][y+1],b=h[f][y],C=h[f+1][y],E=h[f+1][y+1];(f!==0||a>0)&&d.push(_,b,E),(f!==n-1||l<Math.PI)&&d.push(b,C,E)}this.setIndex(d),this.setAttribute("position",new se(g,3)),this.setAttribute("normal",new se(x,3)),this.setAttribute("uv",new se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var no=class i extends ge{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],l=[],c=[],h=new U,u=new U,p=new U;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){let x=g/s*r,m=d/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(x),u.y=(t+e*Math.cos(m))*Math.sin(x),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),p.subVectors(u,h).normalize(),l.push(p.x,p.y,p.z),c.push(g/s),c.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){let x=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,f=(s+1)*(d-1)+g,y=(s+1)*d+g;a.push(x,m,y),a.push(m,f,y)}this.setIndex(a),this.setAttribute("position",new se(o,3)),this.setAttribute("normal",new se(l,3)),this.setAttribute("uv",new se(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Nr=class i extends ge{constructor(t=new Ka(new U(-1,-1,0),new U(-1,1,0),new U(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new U,l=new U,c=new St,h=new U,u=[],p=[],d=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new se(u,3)),this.setAttribute("normal",new se(p,3)),this.setAttribute("uv",new se(d,2));function x(){for(let _=0;_<e;_++)m(_);m(r===!1?e:0),y(),f()}function m(_){h=t.getPointAt(_/e,h);let b=a.normals[_],C=a.binormals[_];for(let E=0;E<=s;E++){let L=E/s*Math.PI*2,k=Math.sin(L),S=-Math.cos(L);l.x=S*b.x+k*C.x,l.y=S*b.y+k*C.y,l.z=S*b.z+k*C.z,l.normalize(),p.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function f(){for(let _=1;_<=e;_++)for(let b=1;b<=s;b++){let C=(s+1)*(_-1)+(b-1),E=(s+1)*_+(b-1),L=(s+1)*_+b,k=(s+1)*(_-1)+b;g.push(C,E,k),g.push(E,L,k)}}function y(){for(let _=0;_<=e;_++)for(let b=0;b<=s;b++)c.x=_/e,c.y=b/s,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new t_[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var os=class extends hi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zu,this.normalScale=new St(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=gc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Ea(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function e_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Ks=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},nc=class extends Ks{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ph,endingEnd:Ph}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Lh:r=t,o=2*e-n;break;case Ih:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Lh:a=t,l=2*n-e;break;case Ih:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,p=this._weightPrev,d=this._weightNext,g=(n-e)/(s-e),x=g*g,m=x*g,f=-p*m+2*p*x-p*g,y=(1+p)*m+(-1.5-2*p)*x+(-.5+p)*g+1,_=(-1-d)*m+(1.5+d)*x+.5*g,b=d*m-d*x;for(let C=0;C!==o;++C)r[C]=f*a[h+C]+y*a[c+C]+_*a[l+C]+b*a[u+C];return r}},ic=class extends Ks{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),u=1-h;for(let p=0;p!==o;++p)r[p]=a[c+p]*u+a[l+p]*h;return r}},sc=class extends Ks{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Gn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ea(e,this.TimeBufferType),this.values=Ea(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ea(t.times,Array),values:Ea(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new sc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ic(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new nc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ta:e=this.InterpolantFactoryMethodDiscrete;break;case Aa:e=this.InterpolantFactoryMethodLinear;break;case Xo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ta;case this.InterpolantFactoryMethodLinear:return Aa;case this.InterpolantFactoryMethodSmooth:return Xo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&e_(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Xo,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let u=o*n,p=u-n,d=u+n;for(let g=0;g!==n;++g){let x=e[u+g];if(x!==e[p+g]||x!==e[d+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*n,p=a*n;for(let d=0;d!==n;++d)e[p+d]=e[u+d]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Gn.prototype.TimeBufferType=Float32Array;Gn.prototype.ValueBufferType=Float32Array;Gn.prototype.DefaultInterpolation=Aa;var ls=class extends Gn{};ls.prototype.ValueTypeName="bool";ls.prototype.ValueBufferType=Array;ls.prototype.DefaultInterpolation=Ta;ls.prototype.InterpolantFactoryMethodLinear=void 0;ls.prototype.InterpolantFactoryMethodSmooth=void 0;var rc=class extends Gn{};rc.prototype.ValueTypeName="color";var ac=class extends Gn{};ac.prototype.ValueTypeName="number";var oc=class extends Ks{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)Pn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Fr=class extends Gn{InterpolantFactoryMethodLinear(t){return new oc(this.times,this.values,this.getValueSize(),t)}};Fr.prototype.ValueTypeName="quaternion";Fr.prototype.DefaultInterpolation=Aa;Fr.prototype.InterpolantFactoryMethodSmooth=void 0;var cs=class extends Gn{};cs.prototype.ValueTypeName="string";cs.prototype.ValueBufferType=Array;cs.prototype.DefaultInterpolation=Ta;cs.prototype.InterpolantFactoryMethodLinear=void 0;cs.prototype.InterpolantFactoryMethodSmooth=void 0;var lc=class extends Gn{};lc.prototype.ValueTypeName="vector";var cc=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,p=c.length;u<p;u+=2){let d=c[u],g=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}},n_=new cc,hc=class{constructor(t){this.manager=t!==void 0?t:n_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};hc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Or=class extends Xe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Lt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}},Qs=class extends Or{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Xe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Lt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},yl=new ue,Tu=new U,Au=new U,io=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new St(512,512),this.map=null,this.mapPass=null,this.matrix=new ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Dr,this._frameExtents=new St(1,1),this._viewportCount=1,this._viewports=[new en(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Tu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Tu),Au.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Au),e.updateMatrixWorld(),yl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(yl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},uc=class extends io{constructor(){super(new an(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,n=Ia*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},so=class extends Or{constructor(t,e,n=0,s=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Xe.DEFAULT_UP),this.updateMatrix(),this.target=new Xe,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new uc}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var fc=class extends io{constructor(){super(new Zs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},js=class extends Or{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xe.DEFAULT_UP),this.updateMatrix(),this.target=new Xe,this.shadow=new fc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Mc="\\[\\]\\.:\\/",i_=new RegExp("["+Mc+"]","g"),Sc="[^"+Mc+"]",s_="[^"+Mc.replace("\\.","")+"]",r_=/((?:WC+[\/:])*)/.source.replace("WC",Sc),a_=/(WCOD+)?/.source.replace("WCOD",s_),o_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Sc),l_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Sc),c_=new RegExp("^"+r_+a_+o_+l_+"$"),h_=["material","materials","bones","map"],dc=class{constructor(t,e,n){let s=n||Ce.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ce=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(i_,"")}static parseTrackName(t){let e=c_.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);h_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ce.Composite=dc;Ce.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ce.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ce.prototype.GetterByBindingType=[Ce.prototype._getValue_direct,Ce.prototype._getValue_array,Ce.prototype._getValue_arrayElement,Ce.prototype._getValue_toArray];Ce.prototype.SetterByBindingTypeAndVersioning=[[Ce.prototype._setValue_direct,Ce.prototype._setValue_direct_setNeedsUpdate,Ce.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_array,Ce.prototype._setValue_array_setNeedsUpdate,Ce.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_arrayElement,Ce.prototype._setValue_arrayElement_setNeedsUpdate,Ce.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_fromArray,Ce.prototype._setValue_fromArray_setNeedsUpdate,Ce.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var tv=new Float32Array(1);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pc}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pc);function uo(i){let t=i>>>0;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var Pe=(i,t,e)=>Math.max(t,Math.min(e,i)),Sn=(i,t,e)=>i+(t-i)*e,fo=i=>(i=Pe(i,0,1),i*i*(3-2*i));function pi(i,t){return((t-i+Math.PI)%(2*Math.PI)+2*Math.PI)%(2*Math.PI)-Math.PI}var yn=(i,t)=>1-Math.exp(-i*t),lo=new Lt;function tt(i,t=1){return lo.setHex(i),[lo.r*t,lo.g*t,lo.b*t]}var Ju=new U,Ku=new Pn,Qu=new U,ju=new qs;function xt(i,t,e,n=1,s=1,r=1,a=0,o=0,l=0){return Ju.set(i,t,e),ju.set(o,a,l,"YXZ"),Ku.setFromEuler(ju),Qu.set(n,s,r),new ue().compose(Ju,Ku,Qu)}var xe=class{constructor(){this.p=[],this.n=[],this.c=[],this.u=[],this.i=[]}get count(){return this.p.length/3}quad(t,e,n,s,r,a){let o=this.count,l=e[0]-t[0],c=e[1]-t[1],h=e[2]-t[2],u=n[0]-t[0],p=n[1]-t[1],d=n[2]-t[2],g=c*d-h*p,x=h*u-l*d,m=l*p-c*u,f=Math.hypot(g,x,m)||1;g/=f,x/=f,m/=f;let y=[t,e,n,s],_=Array.isArray(r[0]);for(let b=0;b<4;b++){this.p.push(y[b][0],y[b][1],y[b][2]),this.n.push(g,x,m);let C=_?r[b]:r;this.c.push(C[0],C[1],C[2]),a?this.u.push(a[b][0],a[b][1]):this.u.push(b===1||b===2?1:0,b>=2?1:0)}this.i.push(o,o+1,o+2,o,o+2,o+3)}box(t,e,n,s,r,a,o,l){this.quad([t,n,a],[e,n,a],[e,s,a],[t,s,a],o),this.quad([e,n,r],[t,n,r],[t,s,r],[e,s,r],o),this.quad([e,n,a],[e,n,r],[e,s,r],[e,s,a],o),this.quad([t,n,r],[t,n,a],[t,s,a],[t,s,r],o),this.quad([t,s,a],[e,s,a],[e,s,r],[t,s,r],l||o)}bill(t,e,n,s,r,a){let o=this.count,l=[[0,0],[1,0],[1,1],[0,1]];for(let c=0;c<4;c++)this.p.push(t,e,n),this.n.push(s,r,0),this.c.push(a[0],a[1],a[2]),this.u.push(l[c][0],l[c][1]);this.i.push(o,o+1,o+2,o,o+2,o+3)}add(t,e,n){let s=t.index?t.toNonIndexed():t,r=s.attributes.position,a=s.attributes.normal,o=s.attributes.uv,l=new ie().getNormalMatrix(e),c=new U,h=new U,u=this.count,p=typeof n=="function";for(let d=0;d<r.count;d++){c.fromBufferAttribute(r,d);let g=p?n(c):n;h.copy(c).applyMatrix4(e),this.p.push(h.x,h.y,h.z),h.fromBufferAttribute(a,d).applyMatrix3(l).normalize(),this.n.push(h.x,h.y,h.z),this.c.push(g[0],g[1],g[2]),o?this.u.push(o.getX(d),o.getY(d)):this.u.push(0,0),this.i.push(u+d)}return this}worldUV(t){for(let e=0,n=0;e<this.p.length;e+=3,n+=2)this.u[n]=this.p[e]*t,this.u[n+1]=this.p[e+2]*t;return this}build(){let t=new ge;return t.setAttribute("position",new se(this.p,3)),t.setAttribute("normal",new se(this.n,3)),t.setAttribute("color",new se(this.c,3)),t.setAttribute("uv",new se(this.u,2)),t.setIndex(this.i),t.computeBoundingSphere(),t.computeBoundingBox(),t}},u_=new U(0,1,0),co=new U,tf={};function Ze(i,t,e,n,s,r=5){co.set(e[0]-t[0],e[1]-t[1],e[2]-t[2]);let a=co.length();co.normalize();let o=new Pn().setFromUnitVectors(u_,co),l=new ue().compose(new U((t[0]+e[0])/2,(t[1]+e[1])/2,(t[2]+e[2])/2),o,new U(n,a,n)),c=tf[r]||(tf[r]=new fn(1,1,1,r,1,!0));i.add(c,l,s)}function Yn(i,t,e,n={}){let s=document.createElement("canvas");s.width=i,s.height=t;let r=s.getContext("2d");e(r,i,t);let a=new as(s);return n.repeat!==!1&&(a.wrapS=a.wrapT=ns),n.srgb!==!1&&(a.colorSpace=Ue),a.anisotropy=n.aniso||4,a}var ho=class{constructor(t=24){this.cell=t,this.map=new Map,this.stamp=0,this.out=[]}_ins(t,e,n,s,r){let a=this.cell;for(let o=Math.floor(e/a);o<=Math.floor(n/a);o++)for(let l=Math.floor(s/a);l<=Math.floor(r/a);l++){let c=(o+512)*2048+(l+512),h=this.map.get(c);h||this.map.set(c,h=[]),h.push(t)}}box(t,e,n,s,r=0){let a={t:0,x0:t,x1:e,z0:n,z1:s,layer:r,s:0};return this._ins(a,t,e,n,s),a}circle(t,e,n,s=0){let r={t:1,x:t,z:e,r:n,layer:s,s:0};return this._ins(r,t-n,t+n,e-n,e+n),r}query(t,e,n){let s=this.cell,r=this.out;r.length=0;let a=++this.stamp;for(let o=Math.floor((t-n)/s);o<=Math.floor((t+n)/s);o++)for(let l=Math.floor((e-n)/s);l<=Math.floor((e+n)/s);l++){let c=this.map.get((o+512)*2048+(l+512));if(c)for(let h=0;h<c.length;h++){let u=c[h];u.s!==a&&(u.s=a,r.push(u))}}return r}resolve(t,e,n,s=.2){let r=0,a=this.query(t.x,t.z,e+.2);for(let o=0;o<a.length;o++){let l=a[o];if(l.layer&&l.layer!==n)continue;let c,h,u;if(l.t===0){let d=Pe(t.x,l.x0,l.x1),g=Pe(t.z,l.z0,l.z1),x=t.x-d,m=t.z-g,f=x*x+m*m;if(f>e*e)continue;if(f>1e-8){let y=Math.sqrt(f);c=x/y,h=m/y,u=e-y}else{let y=t.x-l.x0,_=l.x1-t.x,b=t.z-l.z0,C=l.z1-t.z,E=Math.min(y,_,b,C);E===y?(c=-1,h=0,u=y+e):E===_?(c=1,h=0,u=_+e):E===b?(c=0,h=-1,u=b+e):(c=0,h=1,u=C+e)}}else{let d=t.x-l.x,g=t.z-l.z,x=d*d+g*g,m=e+l.r;if(x>m*m)continue;let f=Math.sqrt(x)||1e-4;c=d/f,h=g/f,u=m-f}t.x+=c*u,t.z+=h*u;let p=t.vx*c+t.vz*h;p<0&&(t.vx-=p*c*(1+s),t.vz-=p*h*(1+s),-p>r&&(r=-p))}return r}near(t,e,n){let s=this.query(t,e,n);for(let r=0;r<s.length;r++){let a=s[r];if(a.t===0){let o=t-Pe(t,a.x0,a.x1),l=e-Pe(e,a.z0,a.z1);if(o*o+l*l<n*n)return!0}else if(Math.hypot(t-a.x,e-a.z)<n+a.r)return!0}return!1}blocked(t,e){let n=this.query(t,e,.1);for(let s=0;s<n.length;s++){let r=n[s];if(r.t===0&&!r.layer&&t>r.x0&&t<r.x1&&e>r.z0&&e<r.z1)return!0}return!1}};var f_="varying vec2 vUv; void main(){ vUv = position.xy*0.5+0.5; gl_Position = vec4(position.xy,0.0,1.0); }",po=(i,t)=>new Ve({vertexShader:f_,fragmentShader:i,uniforms:t,depthTest:!1,depthWrite:!1}),d_=`
uniform sampler2D tD; uniform vec2 uTexel; uniform float uThr; varying vec2 vUv;
void main(){
  vec3 c = texture2D(tD, vUv + uTexel*vec2(-1.,-1.)).rgb + texture2D(tD, vUv + uTexel*vec2(1.,-1.)).rgb
         + texture2D(tD, vUv + uTexel*vec2(-1.,1.)).rgb + texture2D(tD, vUv + uTexel*vec2(1.,1.)).rgb;
  c = min(c*0.25, vec3(14.0));
  float br = max(c.r, max(c.g, c.b));
  float w = max(br - uThr, 0.0) / max(br, 1e-4);
  gl_FragColor = vec4(c*w, 1.0);
}`,p_=`
uniform sampler2D tD; uniform vec2 uTexel; varying vec2 vUv;
void main(){
  vec3 c = texture2D(tD, vUv).rgb*4.0;
  c += texture2D(tD, vUv + uTexel*vec2(-1.,-1.)).rgb; c += texture2D(tD, vUv + uTexel*vec2(1.,-1.)).rgb;
  c += texture2D(tD, vUv + uTexel*vec2(-1.,1.)).rgb;  c += texture2D(tD, vUv + uTexel*vec2(1.,1.)).rgb;
  gl_FragColor = vec4(c*0.125, 1.0);
}`,m_=`
uniform sampler2D tD; uniform sampler2D tAdd; uniform vec2 uTexel; varying vec2 vUv;
void main(){
  vec2 t = uTexel;
  vec3 c = texture2D(tD, vUv + vec2(-2.*t.x,0.)).rgb + texture2D(tD, vUv + vec2(2.*t.x,0.)).rgb
         + texture2D(tD, vUv + vec2(0.,-2.*t.y)).rgb + texture2D(tD, vUv + vec2(0.,2.*t.y)).rgb;
  c += 2.0*(texture2D(tD, vUv + vec2(-t.x,t.y)).rgb + texture2D(tD, vUv + vec2(t.x,t.y)).rgb
          + texture2D(tD, vUv + vec2(-t.x,-t.y)).rgb + texture2D(tD, vUv + vec2(t.x,-t.y)).rgb);
  gl_FragColor = vec4(c/12.0 + texture2D(tAdd, vUv).rgb, 1.0);
}`,g_=`
uniform sampler2D tScene; uniform sampler2D tBloom; uniform float uBloom; uniform float uTime; uniform float uExp; uniform float uFlash; uniform float uSat; uniform vec3 uTint;
varying vec2 vUv;
vec3 aces(vec3 x){ return clamp((x*(2.51*x+0.03))/(x*(2.43*x+0.59)+0.14), 0.0, 1.0); }
void main(){
  vec2 d = vUv - 0.5;
  float ca = dot(d,d)*0.006;
  vec3 c;
  c.r = texture2D(tScene, vUv + d*ca).r; c.g = texture2D(tScene, vUv).g; c.b = texture2D(tScene, vUv - d*ca).b;
  c += texture2D(tBloom, vUv).rgb * uBloom;
  c = aces(c * uExp);
  float lum = dot(c, vec3(0.299,0.587,0.114));
  c = mix(vec3(lum), c, uSat);
  c += vec3(0.004, 0.008, 0.022)*(1.0 - lum);
  c *= uTint;
  float v = 1.0 - smoothstep(0.3, 0.95, length(d*vec2(1.0,0.92)));
  c *= mix(0.55, 1.0, v);
  float n = fract(sin(dot(gl_FragCoord.xy + fract(uTime)*91.7, vec2(12.9898,78.233)))*43758.5453);
  c += (n - 0.5)*0.022;
  c = pow(max(c, 0.0), vec3(1.0/2.2));
  gl_FragColor = vec4(c + uFlash, 1.0);
}`,mo=class{constructor(t){this.r=t;let e=t.extensions;this.hdr=t.capabilities.isWebGL2&&(e.has("EXT_color_buffer_float")||e.has("EXT_color_buffer_half_float")),this.type=this.hdr?is:qn,this.cam=new Zs(-1,1,1,-1,0,1);let n=new ge;n.setAttribute("position",new se([-1,-1,0,3,-1,0,-1,3,0],3)),this.tri=new ae(n,null),this.tri.frustumCulled=!1,this.scene=new ss,this.scene.add(this.tri),this.mPre=po(d_,{tD:{value:null},uTexel:{value:new St},uThr:{value:this.hdr?1:.72}}),this.mDown=po(p_,{tD:{value:null},uTexel:{value:new St}}),this.mUp=po(m_,{tD:{value:null},tAdd:{value:null},uTexel:{value:new St}}),this.mFinal=po(g_,{tScene:{value:null},tBloom:{value:null},uBloom:{value:.65},uTime:{value:0},uExp:{value:.9},uFlash:{value:0},uSat:{value:1.12},uTint:{value:new Lt(1,1,1)}}),this.black=new Ya(new Uint8Array([0,0,0,255]),1,1),this.black.needsUpdate=!0,this.levels=5,this.bloom=!0,this.down=[],this.up=[],this.sceneRT=null}setSize(t,e,n){this.sceneRT&&this.sceneRT.dispose(),this.down.forEach(o=>o.dispose()),this.up.forEach(o=>o.dispose()),this.down=[],this.up=[];let s={type:this.type,minFilter:_n,magFilter:_n,depthBuffer:!1};this.sceneRT=new Cn(t,e,Object.assign({},s,{depthBuffer:!0,samples:n||0}));let r=t,a=e;for(let o=0;o<this.levels;o++)r=Math.max(2,r>>1),a=Math.max(2,a>>1),this.down.push(new Cn(r,a,s)),o<this.levels-1&&this.up.push(new Cn(r,a,s));this.w=t,this.h=e}pass(t,e){this.tri.material=t,this.r.setRenderTarget(e),this.r.render(this.scene,this.cam)}render(t,e,n){let s=this.r;s.setRenderTarget(this.sceneRT),s.render(t,e);let r=this.black;if(this.bloom){let o=this.levels;this.mPre.uniforms.tD.value=this.sceneRT.texture,this.mPre.uniforms.uTexel.value.set(.5/this.w,.5/this.h),this.pass(this.mPre,this.down[0]);for(let c=1;c<o;c++){let h=this.down[c-1];this.mDown.uniforms.tD.value=h.texture,this.mDown.uniforms.uTexel.value.set(.5/h.width,.5/h.height),this.pass(this.mDown,this.down[c])}let l=this.down[o-1];for(let c=o-2;c>=0;c--)this.mUp.uniforms.tD.value=l.texture,this.mUp.uniforms.tAdd.value=this.down[c].texture,this.mUp.uniforms.uTexel.value.set(.5/l.width,.5/l.height),this.pass(this.mUp,this.up[c]),l=this.up[c];r=l.texture}let a=this.mFinal.uniforms;a.tScene.value=this.sceneRT.texture,a.tBloom.value=r,a.uTime.value=n,this.pass(this.mFinal,null)}};var $e=[-280,-210,-140,-70,70,140,210,280],Je=[-180,-120,-60,0,60,120,180],mi=i=>i===140?11:7,bc=[{z:-60,name:"\u041A\u043E\u043C\u043C\u0443\u043D\u0430\u043B\u044C\u043D\u044B\u0439 \u043C\u043E\u0441\u0442"},{z:120,name:"\u0411\u0443\u0433\u0440\u0438\u043D\u0441\u043A\u0438\u0439 \u043C\u043E\u0441\u0442"}],er=296,nr=196,ef=[[-273,-217],[-203,-147],[-133,-77],[77,129],[151,203],[217,273]],nf=[[-173,-127],[-113,-67],[-53,-7],[7,53],[67,113],[127,173]],x_=[["zone","ind","panel","palace","classic","panel"],["ind","ind","panel","classic","classic","panel"],["panel","panel","classic","park","opera","classic"],["panel","garages","panel","classic","classic","panel"],["panel","panel","fpark","panel","classic","mall"],["vatutina","panel","panel","panel","panel","panel"]],dn={start:[147.4,14],arkasha:[152.4,-30],max:[127.5,90],dima:[57.5,30],igor:[218.6,30],geisler:[103,-133],pasha:[177,68.6],nikita:[127.6,17],kos:[-215.6,-143.5],artem:[245,-128.6],sanya:[-78.5,30],misha:[-105,90],garage:[-149.5,22],shop:[218.6,90],vatutina:[-234,171.5],gate:[-215.6,-150],artifact:[-262,-152],tower1:[-78.5,-128.5],tower2:[201.5,51.5],tower3:[-148.5,111.5],leak1:[61,-80],leak2:[103,-9.5],leak3:[146.5,31]},rf=[{x:180,z:-30,r:45,name:"\u041E\u043F\u0435\u0440\u043D\u044B\u0439 \u0442\u0435\u0430\u0442\u0440"},{x:140,z:30,r:22,name:"\u0427\u0430\u0441\u043E\u0432\u043D\u044F \u043D\u0430 \u041A\u0440\u0430\u0441\u043D\u043E\u043C \u043F\u0440\u043E\u0441\u043F\u0435\u043A\u0442\u0435"},{x:0,z:120,r:50,name:"\u0411\u0443\u0433\u0440\u0438\u043D\u0441\u043A\u0438\u0439 \u043C\u043E\u0441\u0442"},{x:0,z:-60,r:50,name:"\u041A\u043E\u043C\u043C\u0443\u043D\u0430\u043B\u044C\u043D\u044B\u0439 \u043C\u043E\u0441\u0442"},{x:-245,z:-150,r:40,name:"\u041F\u0440\u043E\u043C\u0437\u043E\u043D\u0430. \u0422\u0435\u0440\u0440\u0438\u0442\u043E\u0440\u0438\u044F \u041A\u043E\u0441\u0430"},{x:-175,z:30,r:32,name:"\u0413\u0430\u0440\u0430\u0436\u0438. \u0422\u0443\u0442 \u0441\u0438\u0434\u044F\u0442 \xAB\u0442\u0438\u043F\u044B\xBB"},{x:-245,z:150,r:34,name:"\u0412\u0430\u0442\u0443\u0442\u0438\u043D\u0430. \u0414\u0430\u043B\u0435\u043A\u043E\u0432\u0430\u0442\u043E"},{x:103,z:-30,r:30,name:"\u041C\u0438\u0445\u0430\u0439\u043B\u043E\u0432\u0441\u043A\u0430\u044F \u043D\u0430\u0431\u0435\u0440\u0435\u0436\u043D\u0430\u044F"},{x:103,z:-150,r:30,name:"\u0414\u0432\u043E\u0440\u0435\u0446 \u0413\u0430\u0439\u0441\u043B\u0435\u0440\u0430"},{x:-105,z:90,r:30,name:"\u041F\u0430\u0440\u043A. \u0411\u0430\u0442\u044F \u043D\u0430 \u043F\u0440\u0438\u0440\u043E\u0434\u0435"},{x:245,z:90,r:32,name:"\u0422\u0426 \xAB\u0422\u0435\u0445\u043D\u043E\u0420\u0430\u043A\xBB"}];function Ec(i){return i>=52?0:i<=40?-3:-3+3*(i-40)/12}function Oi(i){let t=Math.abs(i.x);if(t<52){for(let n=0;n<2;n++)if(Math.abs(i.z-bc[n].z)<8.6&&i.y>-1.5)return i.layer=1,0}let e=Ec(t);return i.layer=e<-1.5?2:0,e}function wc(i,t){if(Math.abs(t)<=187){for(let n=0;n<$e.length;n++)if(Math.abs(i-$e[n])<mi($e[n]))return!0}let e=Math.abs(i);for(let n=0;n<Je.length;n++)if(Math.abs(t-Je[n])<7&&(e>=63&&e<=287||e<63&&(Je[n]===-60||Je[n]===120)))return!0;return!1}var zr={value:.0052},__=`
attribute vec3 color; varying vec2 vUv; varying vec3 vC; varying float vF; uniform float uFog;
void main(){ vec4 mv = modelViewMatrix*vec4(position,1.0); gl_Position = projectionMatrix*mv; vUv = uv; vC = color; float d = length(mv.xyz); vF = exp(-uFog*uFog*d*d); }`,go=(i,t={},e=__)=>new Ve({vertexShader:e,fragmentShader:i,uniforms:Object.assign({uFog:zr},t),blending:Hn,transparent:!0,depthWrite:!1});function Tc(){return new Ve({uniforms:{uScale:ir,uFog:zr},vertexShader:`attribute float aSize; attribute vec3 aColor; varying vec3 vC; uniform float uScale; uniform float uFog;
      void main(){ vec4 mv = modelViewMatrix*vec4(position,1.0); gl_Position = projectionMatrix*mv; float d = max(-mv.z, 0.1);
      gl_PointSize = min(aSize*uScale/d, 200.0); vC = aColor*exp(-uFog*uFog*d*d*0.5); }`,fragmentShader:"varying vec3 vC; void main(){ float r = length(gl_PointCoord-0.5)*2.0; float a = pow(max(1.0-r,0.0),2.4)*0.75 + (1.0-smoothstep(0.0,0.22,r))*0.9; gl_FragColor = vec4(vC*a,1.0); }",blending:Hn,transparent:!0,depthWrite:!1})}var ir={value:800};function v_(i,t){return i.onBeforeCompile=e=>{e.uniforms.uGlow=t,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
varying float vWY;`).replace("#include <project_vertex>",`#include <project_vertex>
{ vec4 wp = vec4(transformed,1.0);
#ifdef USE_INSTANCING
 wp = instanceMatrix*wp;
#endif
 vWY = (modelMatrix*wp).y; }`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
varying float vWY; uniform vec3 uGlow;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
 totalEmissiveRadiance += diffuseColor.rgb * uGlow * exp(-abs(vWY)*0.13);`)},i}var y_={value:new U(.26,.13,.05)};function Fi(i){return v_(new os(i),y_)}function sf(i,t){let s=document.createElement("canvas");s.width=s.height=512;let r=s.getContext("2d");r.fillStyle="#000",r.fillRect(0,0,512,512);let a=["#ffcf8a","#ffb866","#ffe2b0","#ffd9a0","#ffc070","#fff0d0","#bfe0ff","#8fb4ff","#d49cff","#ff9f6a"],o=Yn(512,512,c=>{for(let h=0;h<8;h++)for(let u=0;u<8;u++){let p=u*64,d=h*64,g,x,m,f;if(i===0?(c.fillStyle=["#c3c6cc","#b9bcc2","#cdcfd3","#bfc2c8"][Math.floor(t()*4)],c.fillRect(p,d,64,64),c.strokeStyle="#8b8f97",c.lineWidth=2,c.strokeRect(p+1,d+1,62,62),g=p+14,x=d+12,m=36,f=28,u%4===1&&(c.fillStyle="#a4a8b0",c.fillRect(p+8,d+42,48,16),c.fillStyle="#8d9199",c.fillRect(p+8,d+42,48,3)),c.fillStyle="#e4e6ea",c.fillRect(g-2,x-2,m+4,f+4)):(c.fillStyle=["#d6d0c6","#cfc9be","#dcd6cc"][Math.floor(t()*3)],c.fillRect(p,d,64,64),c.fillStyle="#b3ad9f",c.fillRect(p,d+58,64,4),c.fillStyle="#c4beb1",c.fillRect(p,d,5,64),g=p+22,x=d+10,m=24,f=40,c.fillStyle="#efeadf",c.fillRect(g-3,x-3,m+6,f+6),c.fillStyle="#e2dccf",c.fillRect(g-5,x+f+3,m+10,3)),t()<(i===0?.36:.42)){let _=a[Math.floor(t()*t()*a.length)];c.fillStyle=_,c.fillRect(g,x,m,f);let b=r.createLinearGradient(0,x,0,x+f);b.addColorStop(0,_),b.addColorStop(1,"#6b4a2a"),r.fillStyle=b,r.fillRect(g,x,m,f),t()<.5&&(r.fillStyle="rgba(0,0,0,0.45)",r.fillRect(g,x,m*(.2+t()*.3),f)),r.fillStyle="#000",r.fillRect(g+m/2-1,x,2,f)}else c.fillStyle=["#18202e","#1d2738","#141a26"][Math.floor(t()*3)],c.fillRect(g,x,m,f);c.fillStyle="rgba(40,44,52,0.9)",c.fillRect(g+m/2-1,x,2,f)}}),l=new as(s);return l.wrapS=l.wrapT=ns,l.colorSpace=Ue,l.anisotropy=4,{map:o,emissiveMap:l}}function af(i){let t=uo(20261119),e=v=>v[Math.floor(t()*v.length)],n=new ho,s={fa:new xe,fb:new xe,pl:new xe,em:new xe,gr:new xe,rd:new xe,br:new xe,brE:new xe,sg:new xe,pool:new xe,cone:new xe,streak:new xe},r=[],a=[],o=[],l=[],c=[],h=tt(15133943),u=tt(13884654),p=tt(10134453),d=tt(2764344),g=tt(6975096),x=[1,.55,.2],m=[1,.74,.42],f=[.62,.8,1],y=(v,I)=>[v[0]*I,v[1]*I,v[2]*I],_=new fn(1,1,1,10),b=new fi(1,1,7),C=new fi(1,1,14,1,!0),E=new di(1,14,10),L=new Ln(1,1,1),k=(v,I,R,D)=>s.gr.box(v,I,0,.15,R,D,p,h);for(let v=0;v<6;v++)for(let I=0;I<6;I++){let R={ci:v,ri:I,x0:ef[v][0],x1:ef[v][1],z0:nf[I][0],z1:nf[I][1],type:x_[I][v]};R.cx=(R.x0+R.x1)/2,R.cz=(R.z0+R.z1)/2,l.push(R),k(R.x0,R.x1,R.z0,R.z1)}for(let v of[-1,1]){let I=v>0?52:-63,R=v>0?63:-52;for(let[F,Z]of[[-187,-67],[-53,113],[127,187]])k(I,R,F,Z);let D=v>0?52:-900,z=v>0?900:-52;k(D,z,-900,-187),k(D,z,187,900),k(v>0?287:-900,v>0?900:-287,-187,187),v>0?s.gr.quad([40,-3,900],[52,.15,900],[52,.15,-900],[40,-3,-900],u):s.gr.quad([-52,.15,900],[-40,-3,900],[-40,-3,-900],[-52,.15,-900],u)}s.gr.worldUV(1/24);let S=(v,I,R,D,z)=>{let F=z?[[0,D/16],[1,D/16],[1,R/16],[0,R/16]]:[[1,v/16],[1,I/16],[0,I/16],[0,v/16]];s.rd.quad([v,0,D],[I,0,D],[I,0,R],[v,0,R],[1,1,1],F)};for(let v of $e)S(v-mi(v),v+mi(v),-187,187,!0);for(let v of Je){for(let I of[0,4])for(let R=I;R<I+3;R++)S($e[R]+mi($e[R]),$e[R+1]-mi($e[R+1]),v-7,v+7,!1);(v===-60||v===120)&&S(-63,63,v-7,v+7,!1)}let T=(v,I,R,D,z,F,Z,j=0,dt=!1)=>r.push({x:v,z:I,hx:R,hz:D,h:z,c:F,pr:Z,my:j,bridge:dt}),V=(v,I,R,D,z)=>a.push(v,I,R,D,z[0],z[1],z[2]),$=(v,I,R,D,z=.22)=>s.pool.quad([v-R,z,I+R],[v+R,z,I+R],[v+R,z,I-R],[v-R,z,I-R],D);function ft(v,I,R,D,z,F,Z,j){let dt=Math.max(1,Math.round((Z-F)/3)),Ut=Math.floor(t()*8)/8,Me=Ut+dt/8,Te=(je,nn,jt,he,Si)=>{let gs=Math.max(1,Math.round(Si/3.2)),ke=Math.floor(t()*8)/8,Be=ke+gs/8;v.quad(je,nn,jt,he,j,[[ke,Ut],[Be,Ut],[Be,Me],[ke,Me]])};Te([I,F,z],[R,F,z],[R,Z,z],[I,Z,z],R-I),Te([R,F,D],[I,F,D],[I,Z,D],[R,Z,D],R-I),Te([R,F,z],[R,F,D],[R,Z,D],[R,Z,z],z-D),Te([I,F,D],[I,F,z],[I,Z,z],[I,Z,D],z-D)}function O(v,I,R,D,z,F,Z,j){if(ft(v,I,R,D,z,.15,F,Z),s.pl.box(I-.3,R+.3,F,F+.5,D-.3,z+.3,y(Z,.5),h),t()<.7){let dt=2+t()*3,Ut=2+t()*3,Me=Sn(I+3,R-3,t()),Te=Sn(D+3,z-3,t());s.pl.box(Me-dt/2,Me+dt/2,F+.5,F+2+t()*1.5,Te-Ut/2,Te+Ut/2,tt(3817290),h)}j||n.box(I,R,D,z)}let W=[[1.7,1.15,.6],[1.1,1.4,1.8],[1.8,.55,1.1],[.5,1.6,.85],[1.9,.95,.25],[1.5,1.3,1]];function K(v,I,R,D){for(let z=v+1;z+3<I;z+=4){if(t()<.22)continue;let F=e(W),Z=R+D*.06,j=y(F,.45);D>0?s.em.quad([z,.7,Z],[z+3,.7,Z],[z+3,3.1,Z],[z,3.1,Z],[j,j,F,F]):s.em.quad([z+3,.7,Z],[z,.7,Z],[z,3.1,Z],[z+3,3.1,Z],[j,j,F,F]),$(z+1.5,R+D*3,4.5,y(F,.1))}}let it={cv:document.createElement("canvas"),n:0,slots:{}};it.cv.width=it.cv.height=1024,it.g=it.cv.getContext("2d"),it.g.fillStyle="#000",it.g.fillRect(0,0,1024,1024);function Q(v,I,R,D,z,F,Z,j=!0){let dt=it.slots[v+I];if(dt===void 0){dt=it.slots[v+I]=it.n++;let Be=it.g,qr=dt%2*512,Yr=Math.floor(dt/2)*64;Be.save(),Be.beginPath(),Be.rect(qr,Yr,512,64),Be.clip();let Zr=44;Be.font=`900 ${Zr}px "Arial Black", "Segoe UI", system-ui, sans-serif`;let Qc=Be.measureText(v).width;Qc>480&&(Zr=Math.floor(Zr*480/Qc),Be.font=`900 ${Zr}px "Arial Black", "Segoe UI", system-ui, sans-serif`),Be.textAlign="center",Be.textBaseline="middle",Be.shadowColor=I,Be.shadowBlur=14,Be.fillStyle=I,Be.fillText(v,qr+256,Yr+34),Be.fillText(v,qr+256,Yr+34),Be.shadowBlur=0,Be.fillStyle="rgba(255,255,255,0.72)",Be.fillText(v,qr+256,Yr+34),Be.restore()}let Ut=dt%2*.5,Me=Ut+.5,Te=1-Math.floor(dt/2)/16,je=Te-1/16,nn=F/8,jt=F/2,he=nn/2,Si=[[Ut,je],[Me,je],[Me,Te],[Ut,Te]],gs=[1,1,1],ke=.12;Z==="+z"?(s.sg.quad([R-jt,D-he,z+ke],[R+jt,D-he,z+ke],[R+jt,D+he,z+ke],[R-jt,D+he,z+ke],gs,Si),j&&s.pl.box(R-jt-.2,R+jt+.2,D-he-.15,D+he+.15,z-.1,z+.08,d)):Z==="-z"?(s.sg.quad([R+jt,D-he,z-ke],[R-jt,D-he,z-ke],[R-jt,D+he,z-ke],[R+jt,D+he,z-ke],gs,Si),j&&s.pl.box(R-jt-.2,R+jt+.2,D-he-.15,D+he+.15,z-.08,z+.1,d)):Z==="+x"?(s.sg.quad([R+ke,D-he,z+jt],[R+ke,D-he,z-jt],[R+ke,D+he,z-jt],[R+ke,D+he,z+jt],gs,Si),j&&s.pl.box(R-.1,R+.08,D-he-.15,D+he+.15,z-jt-.2,z+jt+.2,d)):(s.sg.quad([R-ke,D-he,z-jt],[R-ke,D-he,z+jt],[R-ke,D+he,z+jt],[R-ke,D+he,z-jt],gs,Si),j&&s.pl.box(R-.08,R+.1,D-he-.15,D+he+.15,z-jt-.2,z+jt+.2,d))}let et=[["BEAM STORE","#3df2ff"],["\u0418\u0413\u0420\u042B \u041E\u0422 390 \u20BD","#ff4fd8"],["\u041F2 \xB7 \u041F3 \xB7 \u041E\u0411\u041C\u0415\u041D","#ffd23d"],["\u0411\u0410\u0420 \xAB\u041D\u0410 \u0421\u0415\u0420\u0413\u0415\u042F \u0421\u0422\u041E\u041B\u0418\u041A\xBB","#ffae3d"],["\u0420\u042B\u0411\u0410 \xB7 \u041F\u0418\u0412\u041E","#6dff8a"],["\u041A\u0418\u041D\u041E\u0422\u0415\u0410\u0422\u0420 11.1.4","#b98cff"],["\u0428\u0410\u0423\u0420\u041C\u0410 \xAB\u041F\u041B\u041E\u0422\u0412\u0410\xBB","#ff7a3d"],["\u0411\u041E\u0416\u0415, \u0425\u0420\u0410\u041D\u0418 \u041F\u0418\u0420\u0410\u0422\u041E\u0412","#ff4f6a"],["\u0426\u0418\u0412\u0410 \xB7 \u0415\u0429\u0401 \u041E\u0414\u0418\u041D \u0425\u041E\u0414","#3dffb5"],["\u041E\u041F\u0415\u0420\u0410\u0422\u0418\u0412\u041A\u0410 \u0414\u041B\u042F \u0421\u0410\u041D\u0418","#3da8ff"],["\u041C\u0415\u0413\u0410\u0424\u0418\u0413 \xB7 \u0421\u0412\u042F\u0417\u042C \u041A 19-\u041C\u0423","#5dff5d"],["TEKKEN \u0421 \u0414\u0415\u0422\u042C\u041C\u0418","#ff5d3d"],["\u041F\u041E\u0414\u041F\u0418\u0421\u041A\u0410 EXTRA","#5d8bff"],["\u041D\u0415 \u0411\u0415\u0420\u0418 \u041F\u041E\u0414\u041F\u0418\u0421\u041A\u0423","#ff9d3d"],["\u041A\u041E\u0424\u0415\u0419\u041D\u042F","#ffcf8a"],["VR2 \xB7 \u041F\u0420\u041E\u0414\u0410\u041C","#c58cff"],["212 \u0413\u0411 \u0421\u0412\u041E\u0411\u041E\u0414\u041D\u041E","#3dfff0"],["\u0422\u0415\u041B\u0415\u041A\u0418 \xB7 \u0416\u0414\u0418 \u0412 \u0421\u0411","#ffe23d"],["\u041B\u041E\u041C\u0411\u0410\u0420\u0414 \xAB144 \u041A\u0410\u0420\u0422\u041E\u0427\u041A\u0418\xBB","#ff5d9d"],["\u0410\u0422\u0415\u041B\u042C\u0415 \xAB\u0411\u0410\u0411\u041E\u0427\u041A\u0410\xBB","#ffd9a0"],["\u0411\u0410\u0420\u0411\u0415\u0420\u0428\u041E\u041F \xAB\u0414\u041E \u0429\u0415\u0422\u0418\u041D\u042B\xBB","#8affd0"],["\u0412\u0421\u0401 \u0422\u0410\u041A, \u0422\u041E\u041B\u042C\u041A\u041E \u041D\u0410\u041E\u0411\u041E\u0420\u041E\u0422","#ff6ad5"]],ot=0,ht=(v,I,R,D)=>{let z=et[ot++%et.length],F=Pe(D-6,6,12);Q(z[0],z[1],v,4.7,I+R*.2,F,R>0?"+z":"-z")},Et=v=>{let I=fo((v.y+.5)*1.5-.15);return[Sn(.012,.8,I),Sn(.05,.86,I),Sn(.03,.95,I)]};function J(v,I,R){s.pl.add(_,xt(v,.15+.6*R,I,.22*R,1.2*R,.22*R),tt(2825750));for(let D=0;D<3;D++){let z=(2.3-.55*D)*R,F=2.7*R;s.pl.add(b,xt(v,.15+(1+1.45*D)*R+F/2,I,z,F,z,t()*3),Et)}n.circle(v,I,.5*R)}function st(v,I,R=[],D=3){let z=[];for(let F=0;F<I*6&&z.length<I;F++){let Z=Sn(v.x0+D,v.x1-D,t()),j=Sn(v.z0+D,v.z1-D,t());n.near(Z,j,2.6)||R.some(dt=>Math.hypot(dt[0]-Z,dt[1]-j)<(dt[2]||6))||z.some(dt=>Math.hypot(dt[0]-Z,dt[1]-j)<4)||(z.push([Z,j]),J(Z,j,.75+t()*.8))}}let bt=[tt(14206880),tt(13612186),tt(12567753),tt(13940912),tt(13225912),tt(13085068)],At=[tt(12106948),tt(11121597),tt(12893358),tt(11055272),tt(12562608),tt(10465476)];function Pt(v,I){let D=v.x0+3,z=v.x1-3,F=v.z0+3,Z=v.z1-3;for(let j of[0,1]){let dt=12.8+Math.floor(t()*2)*1.6,Ut=j?Z-dt:F,Me=j?Z:F+dt,Te=j?1:-1,je=j?Me:Ut,nn;if(t()<.6){let jt=Sn(D+17,z-17,t());nn=[[D,jt-2.4],[jt+2.4,z]]}else nn=[[D,z]];for(let[jt,he]of nn){let Si=.15+3*(4+Math.floor(t()*(I?8:5)));O(s.fb,jt,he,Ut,Me,Si,e(bt)),K(jt,he,je,Te),t()<.9&&ht((jt+he)/2,je,Te,he-jt)}}st(v,3)}function Zt(v){let R=v.x0+4,D=v.x1-4,z=v.z0+4,F=v.z1-4,Z=t();if(Z<.45)O(s.fa,R,D,z,z+12.8,27.15,e(At)),O(s.fa,R,D,F-12.8,F,27.15,e(At));else if(Z<.8){O(s.fa,R,D,z,z+12.8,27.15,e(At));let Ut=Sn(R+10,D-10,t());O(s.fa,Ut-9.6,Ut+9.6,F-19.2,F,48.15,e(At))}else O(s.fa,R,R+12.8,z,F,27.15,e(At)),O(s.fa,D-12.8,D,z,F,36.15,e(At));let j=v.cx+(t()-.5)*10,dt=v.cz+(t()-.5)*3;s.pl.box(j-1.5,j+1.5,.15,.5,dt-1.5,dt+1.5,tt(9067050),h),Ze(s.pl,[j+3,.15,dt],[j+3,2.4,dt],.08,tt(12728890)),Ze(s.pl,[j+5,.15,dt],[j+5,2.4,dt],.08,tt(12728890)),Ze(s.pl,[j+3,2.4,dt],[j+5,2.4,dt],.08,tt(3828418)),st(v,5,[[j,dt,7]]),T(v.cx-12,v.cz,v.cx-12,v.cz,4.6,m,8)}function Jt(v){let I=v.x0+4,R=v.x1-4,D=[tt(7027242),tt(3099194),tt(3819096),tt(5921362),tt(8014366),tt(4861754)];for(let Z=0;Z<3;Z++){let j=v.z0+8+Z*14,dt=j-3,Ut=j+3;s.pl.box(I,R,.15,2.9,dt,Ut,tt(4869202),h),n.box(I,R,dt,Ut);for(let Me=I+.4;Me+3<R;Me+=3.6)s.pl.quad([Me,.2,Ut+.05],[Me+3,.2,Ut+.05],[Me+3,2.5,Ut+.05],[Me,2.5,Ut+.05],e(D)),s.pl.quad([Me+3,.2,dt-.05],[Me,.2,dt-.05],[Me,2.5,dt-.05],[Me+3,2.5,dt-.05],e(D))}Q("\u0422\u0418\u041F\u042B \xB7 \u0414\u0418\u0421\u041A\u0418 390 \u20BD","#ff4fd8",R+.2,4,v.z0+22,6,"+x"),T(R-6,v.z0+15,R-6,v.z0+15,4.6,x,9),T(v.cx,v.z0+29,v.cx,v.z0+29,4.6,x,9);let z=R-9,F=v.z0+15;return s.pl.add(_,xt(z,.6,F,.45,.9,.45),tt(3811874)),n.circle(z,F,.6),{fire:[z,1.3,F]}}function kt(v,I,R){let z=R/6;for(let F=0;F<6;F++){let Z=2-F*.12;s.pl.add(_,xt(v,.15+z*(F+.5),I,Z,z,Z),F%2?tt(14211288):tt(11545122))}s.em.add(E,xt(v,R+.5,I,.35,.35,.35),[3,.2,.15]),V(v,R+.5,I,5,[2.2,.15,.1]),V(v,R*.6,I+2.1,3,[1.8,.12,.08]),n.circle(v,I,2.2),o.push([v,R+1,I])}function le(v){let I=[tt(3752525),tt(4538426),tt(3095874),tt(4865855)],R=v.x0+4,D=R+32,z=v.z0+5,F=z+19,Z=10+t()*4;s.pl.box(R,D,.15,Z,z,F,e(I),h),n.box(R,D,z,F);for(let j=R+2;j+4<D;j+=6){let dt=[.45,1.1,1.3];s.em.quad([j,Z-3,F+.05],[j+4,Z-3,F+.05],[j+4,Z-1.6,F+.05],[j,Z-1.6,F+.05],dt)}kt(v.x1-9,v.z0+10,38+t()*14);for(let j=0;j<2;j++){let dt=v.x1-9-j*11,Ut=v.z1-9;s.pl.add(_,xt(dt,4.15,Ut,4.5,8,4.5),tt(5857643)),s.pl.add(b,xt(dt,8.9,Ut,4.6,1.5,4.6),h),n.circle(dt,Ut,4.6)}s.pl.box(v.x0+4,v.x1-22,4.6,5.3,v.z1-16,v.z1-15.3,tt(7035450),h);for(let j=v.x0+6;j<v.x1-23;j+=8)s.pl.box(j-.15,j+.15,.15,4.6,v.z1-15.8,v.z1-15.5,d);T(v.x0+20,v.z1-8,v.x0+20,v.z1-8,7,f,12)}function X(v){let I=v.x0+2,R=v.x1-2,D=v.z0+2,z=v.z1-2,F=.4,Z=2.9,j=tt(5988198),dt=v.cz,Ut=(Te,je,nn,jt)=>{s.pl.box(Te,je,.15,Z,nn,jt,j,h),n.box(Te,je,nn,jt)};Ut(I,R,D,D+F),Ut(I,R,z-F,z),Ut(I,I+F,D,z),Ut(R-F,R,D,dt-2.8),Ut(R-F,R,dt+2.8,z),s.pl.box(R-1,R+.6,.15,1.3,dt-.8,dt+.8,g,h),n.box(R-1,R+.6,dt-.8,dt+.8),Q("\u0417\u041E\u041D\u0410 \xB7 \u0412\u0425\u041E\u0414 \u041F\u0415\u0428\u041A\u041E\u041C","#7dff5d",R+.1,3.9,dt+8,7,"+x");let Me=[tt(5913126),tt(4866104),tt(4016714)];for(let[Te,je,nn,jt,he]of[[-236,-158,7,2.6,2.6],[-250,-139,3,8,2.8],[-266,-163,6,6,4],[-228,-137,2.5,6,2.4],[-252,-168,9,2.5,3]])s.pl.box(Te-nn/2,Te+nn/2,.15,he,je-jt/2,je+jt/2,e(Me),h),n.box(Te-nn/2,Te+nn/2,je-jt/2,je+jt/2);for(let[Te,je,nn]of[[-231,-150,0],[-242,-141,1.3],[-243,-160,2.1],[-254,-150,3.3],[-258,-163,4.4],[-236,-166,5.2],[-262,-141,.7]])c.push({x0:Te,z0:je,x:Te,z:je,ph:nn,r:2.6});T(-240,-130,-240,-132,7,[.5,1,.6],12)}function Ke(v,I){let R=I?[[v.cx,v.cz,13]]:[[dn.misha[0],dn.misha[1],7]];for(let[D,z]of[[-16,-12],[16,-12],[-16,12],[16,12],[0,18],[0,-18]])T(v.cx+D,v.cz+z,v.cx+D,v.cz+z,4.6,m,9),R.push([v.cx+D,v.cz+z,3]);I&&$(v.cx,v.cz,16,[.5,.3,.6]),st(v,I?16:34,R)}function Ft(v){let I=tt(14470052),R=tt(15657436),D=tt(9411238),z=181,F=-30;s.pl.add(new fn(1,1,1,24),xt(z,8.15,F,15,16,15),I),s.em.add(new di(1,28,10,0,Math.PI*2,0,Math.PI/2),xt(z,16.1,F,15.6,9.6,15.6),Z=>{let j=fo(Z.y*1.25),dt=.86+.14*Math.sign(Math.sin(Math.atan2(Z.z,Z.x)*14)),Ut=(.75+.25*-Z.x)*dt;return[Sn(.62,.11,j)*Ut,Sn(.47,.14,j)*Ut,Sn(.3,.22,j)*Ut]}),s.pl.add(_,xt(z,26.3,F,1.6,1.6,1.6),R),s.pl.add(b,xt(z,28.6,F,1.2,3,1.2),D),s.pl.box(z-15.2,z+15.2,16,16.9,F-15.2,F+15.2,R),s.pl.box(190,201,.15,21,F-12,F+12,I,h),s.pl.box(160,170,.15,13,F-14,F+14,I,h);for(let Z=0;Z<8;Z++){let j=F-12+Z*24/7;s.pl.add(_,xt(158.8,5.65,j,.85,11,.85),R)}s.pl.box(157.4,160.4,11.1,13,F-14.2,F+14.2,R,h),s.pl.box(157.8,160.2,13,14.4,F-10,F+10,R,h),s.pl.box(158.2,160,14.4,15.4,F-5.5,F+5.5,R,h);for(let Z=0;Z<3;Z++)s.pl.box(153.8+Z*1.1,157.6,.15,.95-Z*.27,F-14.5,F+14.5,tt(10130828),h);for(let Z=0;Z<5;Z++){let j=F-8.5+Z*4.25;s.em.quad([159.94,1.2,j-1.1],[159.94,1.2,j+1.1],[159.94,6.5,j+1.1],[159.94,6.5,j-1.1],[[.7,.42,.18],[.7,.42,.18],[1.7,1.1,.55],[1.7,1.1,.55]])}n.box(158,201,F-14,F+14),n.box(166,196,F-15,F+15);for(let[Z,j]of[[156,-30],[156,-42],[156,-18],[170,-48],[170,-12],[192,-48],[192,-12]])$(Z,j,13,[.4,.26,.12]);for(let Z of[-44,-16])V(155.5,.6,Z,2.2,[2,1.3,.6]),V(155.5,.6,Z+9,2.2,[2,1.3,.6]);s.pl.box(154,156.4,.15,2.2,-9.2,-6.8,tt(5593183),h),n.box(154,156.4,-9.2,-6.8),s.pl.add(E,xt(155.2,3.1,-8,.95,.8,.8),tt(11027502)),s.pl.add(E,xt(154.2,4,-7.2,.45,.6,.35),tt(11027502)),s.pl.add(E,xt(156.2,4,-7.2,.45,.6,.35),tt(11027502)),$(155.2,-6,6,[.6,.4,.2]),st(v,4,[[160,-30,22]])}function Xt(v){let I=tt(15392710),R=90,D=116,z=-164,F=-146;s.pl.box(R,D,.15,11,z,F,I,h),n.box(R,D,z,F),s.pl.box(R-.6,D+.6,11,11.8,z-.6,F+.6,tt(16052194),h),s.pl.add(new di(1,16,8,0,Math.PI*2,0,Math.PI/2),xt(103,11.8,-155,5,4,5),tt(12162618));for(let Z=0;Z<7;Z++){let j=R+2.2+Z*3.6,dt=[1.3,.8,.3],Ut=[2.8,2,.95];s.em.quad([j-.9,1.6,F+.06],[j+.9,1.6,F+.06],[j+.9,7.6,F+.06],[j-.9,7.6,F+.06],[dt,dt,Ut,Ut]),Z<6&&s.pl.add(_,xt(j+1.8,4.9,F+.7,.4,9.5,.4),tt(16052194))}for(let Z of[96,103,110])V(Z,6.5,F+.4,6,[1.6,1.1,.5]),$(Z,F+6,9,[.75,.5,.22]);s.pl.quad([101.5,.17,-128],[104.5,.17,-128],[104.5,.17,-146],[101.5,.17,-146],tt(10097192)),Q("\u0414\u0412\u041E\u0420\u0415\u0426 \u0413\u0410\u0419\u0421\u041B\u0415\u0420\u0410","#ffd98a",103,10.2,F+.1,12,"+z",!1),st(v,12,[[103,-137,9]])}function Rt(v){s.pl.box(223,267,.15,9.2,74,106,tt(2830656),h),n.box(223,267,74,106);let F=[.25,.5,.7],Z=[.7,1.2,1.6];s.em.quad([223-.06,.8,76],[223-.06,.8,104],[223-.06,4.2,104],[223-.06,4.2,76],[F,F,Z,Z]),s.em.quad([225,.8,106+.06],[265,.8,106+.06],[265,4.2,106+.06],[225,4.2,106+.06],[F,F,Z,Z]),s.em.quad([265,.8,74-.06],[225,.8,74-.06],[225,4.2,74-.06],[265,4.2,74-.06],[F,F,Z,Z]),Q("\u0422\u0415\u0425\u041D\u041E\u0420\u0410\u041A \xB7 SSD \xB7 212 \u0413\u0411","#3df2ff",223-.2,6.6,90,16,"-x",!1),Q("\u0422\u0415\u041B\u0415\u041A\u0418 \xB7 \u0416\u0414\u0418 \u0412 \u0421\u0411","#ffe23d",245,6.6,106+.2,14,"+z",!1),Q("\u041F\u041E\u0414\u041F\u0418\u0421\u041A\u0410 EXTRA","#5d8bff",245,6.6,74-.2,14,"-z",!1),$(218,90,14,[.25,.5,.7]),$(245,111,14,[.25,.5,.7])}function Se(v){O(s.fa,v.x0+4,v.x1-4,v.z0+4,v.z0+16.8,27.15,e(At));let I=-240,R=-228,D=160,z=168;s.pl.box(I,R,.15,4,D,z,tt(3818064),h),n.box(I,R,D,z),s.em.quad([I+1,.9,z+.06],[R-1,.9,z+.06],[R-1,3,z+.06],[I+1,3,z+.06],[[.4,.9,.6],[.4,.9,.6],[.8,1.9,1.2],[.8,1.9,1.2]]),Q("\u0427\u0418\u0421\u0422\u041A\u0410 PS5 \u041E\u0422 \u041F\u042B\u041B\u0418","#6dff8a",-234,4.9,z+.1,11,"+z"),Q("\u0423\u041B. \u0412\u0410\u0422\u0423\u0422\u0418\u041D\u0410","#ffffff",-222,3.4,172.6,5,"+z"),Ze(s.pl,[-222,.15,172.5],[-222,3,172.5],.1,d),$(-234,172,9,[.3,.8,.5]),st(v,6)}let Kt=null;for(let v of l)v.type==="classic"?Pt(v,v.ci===3||v.ci===4):v.type==="panel"?Zt(v):v.type==="garages"?Kt=Jt(v).fire:v.type==="ind"?le(v):v.type==="zone"?X(v):v.type==="park"?Ke(v,!0):v.type==="fpark"?Ke(v,!1):v.type==="opera"?Ft(v):v.type==="palace"?Xt(v):v.type==="mall"?Rt(v):v.type==="vatutina"&&Se(v);{let R=tt(15921128),D=tt(10107434),z=tt(14723100);s.pl.add(new fn(1,1.15,1,16),xt(140,.35,30,4.6,.7,4.6),h),s.pl.box(140-2.4,140+2.4,.7,6.4,30-2.4,30+2.4,R,h);for(let[Z,j]of[[-2.4,-2.4],[2.4,-2.4],[-2.4,2.4],[2.4,2.4]])s.pl.box(140+Z-.3,140+Z+.3,.7,6.5,30+j-.3,30+j+.3,tt(16513523),h);s.pl.box(140-2.55,140+2.55,.7,1.5,30-2.55,30+2.55,D),s.pl.box(140-2.7,140+2.7,6.4,6.75,30-2.7,30+2.7,D,h);for(let Z of[-1,1])s.pl.add(L,xt(140,6.85,30+Z*2.42,2.3,2.3,.3,0,0,Math.PI/4),R),s.pl.add(L,xt(140+Z*2.42,6.85,30,.3,2.3,2.3,0,Math.PI/4,0),R);s.pl.add(new fn(1,1,1,8),xt(140,8.1,30,1.5,2.4,1.5),R);let F=[[.05,0],[1,.25],[1.25,.9],[.95,1.7],[.4,2.4],[.08,3.1]].map(Z=>new St(Z[0],Z[1]));s.pl.add(new Qa(F,12),xt(140,9.2,30,1.25,1.1,1.25),z),s.em.box(140-.07,140+.07,12.5,14.1,30-.07,30+.07,[2.2,1.5,.3]),s.em.box(140-.45,140+.45,13.4,13.55,30-.07,30+.07,[2.2,1.5,.3]);for(let[Z,j]of[[0,2.45],[0,-2.45]]){let dt=30+j+Math.sign(j)*.02,Ut=[1.9,1.2,.5];j>0?s.em.quad([140-.6,1.5,dt],[140+.6,1.5,dt],[140+.6,4.2,dt],[140-.6,4.2,dt],Ut):s.em.quad([140+.6,1.5,dt],[140-.6,1.5,dt],[140-.6,4.2,dt],[140+.6,4.2,dt],Ut)}n.circle(140,30,4.7),$(140,30,14,[.9,.6,.3]),V(140,10.6,30,5,[1.4,.9,.25])}let A=[];for(let v of["tower1","tower2","tower3"]){let[I,R]=dn[v],D=26,z=tt(9080729);for(let[F,Z]of[[-1,-1],[1,-1],[1,1],[-1,1]])Ze(s.pl,[I+F*1.3,.15,R+Z*1.3],[I+F*.25,D,R+Z*.25],.09,z,4);for(let F=3;F<D;F+=4){let Z=Sn(1.3,.25,F/D);s.pl.box(I-Z,I+Z,F,F+.12,R-Z,R+Z,z)}s.em.box(I-.5,I+.5,D-4,D-2.2,R-.5,R+.5,[.3,1.6,.4]),n.circle(I,R,1.5),A.push({x:I,z:R,h:D})}for(let v of[-1,1])for(let I=-170,R=0;I<=170;I+=20,R++)Math.abs(I+60)<12||Math.abs(I-120)<12||(R%2===0?T(v*55,I,v*55,I,4.6,f,9):Math.hypot(v*58.5-dn.dima[0],I-dn.dima[1])>8&&J(v*58.5,I+(t()-.5)*6,.8+t()*.5));Ze(s.pl,[58,.15,-85],[58,9,-85],.22,d),Ze(s.pl,[58,.15,-75],[58,9,-75],.22,d),s.pl.box(58-.25,58+.25,5.5,12,-80-8.5,-80+8.5,d),n.circle(58,-85,.4),n.circle(58,-75,.4),Q("\u0422\u0410 \u0421\u0410\u041C\u0410\u042F \u0418\u0413\u0420\u0410","#ff4fd8",58-.3,10.2,-80,15,"-x",!1),Q("19.11.2026 \xB7 212 \u0413\u0411","#3df2ff",58-.3,7.8,-80,15,"-x",!1),Q("\u0422\u0410 \u0421\u0410\u041C\u0410\u042F \u0418\u0413\u0420\u0410","#ff4fd8",58+.3,10.2,-80,15,"+x",!1),Q("\u041E\u0421\u0412\u041E\u0411\u041E\u0414\u0418 \u041C\u0415\u0421\u0422\u041E","#ffd23d",58+.3,7.8,-80,15,"+x",!1);for(let v=0;v<90;v++){let I=t()*Math.PI*2,R=330+t()*240,D=Math.cos(I)*R*1.3,z=Math.sin(I)*R;if(Math.abs(D)<80||Math.abs(D)<300&&Math.abs(z)<200)continue;let F=16+Math.floor(t()*8)*3.2,Z=12.8+Math.floor(t()*4)*3.2,j=.15+3*(7+Math.floor(t()*18)),dt=t()<.6;ft(dt?s.fa:s.fb,D-F/2,D+F/2,z-Z/2,z+Z/2,.15,j,e(dt?At:bt)),s.pl.quad([D-F/2,j,z+Z/2],[D+F/2,j,z+Z/2],[D+F/2,j,z-Z/2],[D-F/2,j,z-Z/2],h),j>50&&V(D,j+1,z,5,[2,.15,.1])}for(let v of $e){let I=mi(v),R=0;for(let D=-170;D<=170;D+=34,R++){if(Je.some(F=>Math.abs(D-F)<9))continue;let z=R%2?1:-1;T(v+z*(I+.9),D,v+z*(I-1.6),D,8.2,v===140?m:x,13)}if(v===140)for(let D=-153;D<=170;D+=34)Je.some(z=>Math.abs(D-z)<9)||(T(v+11.9,D,v+9.4,D,8.2,m,13),T(v-11.9,D,v-9.4,D,8.2,m,13))}for(let v of Je)for(let I of[0,4]){let R=0;for(let D=$e[I]+22;D<$e[I+3];D+=35,R++){if($e.some(F=>Math.abs(D-F)<mi(F)+3))continue;let z=R%2?1:-1;T(D,v+z*7.9,D,v+z*5.4,8.2,x,13)}}for(let v of bc)for(let I=-51;I<=51;I+=17)for(let R of[-1,1])T(I,v.z+R*8.1,I,v.z+R*6.2,7,f,11,-3,!0);let M=tt(2895928);for(let v of r){let I=v.bridge?s.br:s.pl;I.box(v.x-.12,v.x+.12,0,v.h,v.z-.12,v.z+.12,M),(v.x!==v.hx||v.z!==v.hz)&&I.box(Math.min(v.x,v.hx)-.08,Math.max(v.x,v.hx)+.08,v.h-.1,v.h+.1,Math.min(v.z,v.hz)-.08,Math.max(v.z,v.hz)+.08,M),(v.bridge?s.brE:s.em).box(v.hx-.3,v.hx+.3,v.h-.28,v.h-.1,v.hz-.3,v.hz+.3,y(v.c,5)),V(v.hx,v.h-.3,v.hz,v.h>6?3:2,y(v.c,1.6)),$(v.hx,v.hz,v.pr,y(v.c,v.h>6?.3:.25)),s.cone.add(C,xt(v.hx,v.h/2,v.hz,v.pr*.42,v.h,v.pr*.42),y(v.c,.36)),s.streak.bill(v.hx,2*v.my-v.h*1.1,v.hz,v.h>6?1.1:.8,v.h*.9,y(v.c,v.bridge?3.2:2.6))}for(let v of bc){let I=v.z;s.br.box(-52,52,-.9,-.02,I-8.6,I+8.6,g,h);for(let R of[-1,1]){s.br.box(-52,52,0,1,I+R*8.45-.1,I+R*8.45+.1,tt(4869978),h),n.box(-52,52,I+R*8.3-.3,I+R*8.3+.3,1);for(let D of[-1,1])n.box(D>0?40:-52,D>0?52:-40,I+R*8.6-.5,I+R*8.6+.5,0)}for(let R of[-1,1])n.box(R>0?41:-43,R>0?43:-41,I-8.6,I+8.6,2);for(let R of[-26,0,26])s.br.box(R-1.5,R+1.5,-3.2,-.9,I-6,I+6,tt(5659236)),n.box(R-1.5,R+1.5,I-6,I+6,2);if(I===120){let R=[1.5,.1,.07],D=50,z=30;for(let F of[-1,1]){let Z=[];for(let j=0;j<=24;j++){let dt=-D+2*D*j/24,Ut=1-dt/D*(dt/D);Z.push(new U(dt,z*Ut+.3,I+F*(9.2-5.5*Ut)))}s.brE.add(new Nr(new Js(Z),48,.75,6),new ue,R);for(let j=-42;j<=42;j+=6)for(let dt of[-7,7]){let Ut=1-j/D*(j/D),Me=Pe(j+dt,-50,50);Ze(s.br,[j,z*Ut,I+F*(9.2-5.5*Ut)],[Me,.9,I+F*8.4],.06,tt(13159636),3)}}for(let F=0;F<=6;F++){let Z=-30+F*10,j=1-Z/D*(Z/D);Ze(s.brE,[Z,z*j+.3,I-(9.2-5.5*j)],[Z,z*j+.3,I+(9.2-5.5*j)],.3,R,5)}V(0,z+1.5,I,7,[2.2,.2,.15])}else{let R=tt(6258566);for(let D=0;D<3;D++)for(let z of[-1,1]){let F=-34+D*34,Z=[];for(let j=0;j<=12;j++){let dt=-1+j/6,Ut=10.5*(1-dt*dt)+.4;Z.push(new U(F+dt*17,Ut,I+z*8.4)),j%2===0&&a.push(F+dt*17,Ut+.5,I+z*8.4,1.5,1.7,1.25,.6),j>0&&j<12&&Ze(s.br,[F+dt*17,Ut,I+z*8.4],[F+dt*17,.9,I+z*8.4],.07,R,3)}s.br.add(new Nr(new Js(Z),20,.4,5),new ue,R)}}}let q=sf(0,t),lt=sf(1,t),rt=Fi({map:q.map,emissiveMap:q.emissiveMap,emissive:16777215,emissiveIntensity:1.5,vertexColors:!0}),ct=Fi({map:lt.map,emissiveMap:lt.emissiveMap,emissive:16777215,emissiveIntensity:1.5,vertexColors:!0}),Tt=Fi({vertexColors:!0}),_t=new on({vertexColors:!0}),wt=new as(it.cv);wt.colorSpace=Ue,wt.anisotropy=4;let zt=go("uniform sampler2D map; varying vec2 vUv; varying vec3 vC; varying float vF; void main(){ vec3 t = texture2D(map, vUv).rgb; gl_FragColor = vec4(t*t*2.6*vC*vF, 1.0); }",{map:{value:wt}}),te=Yn(256,256,v=>{v.fillStyle="#eef2fa",v.fillRect(0,0,256,256);for(let I=0;I<60;I++){let R=t()*256,D=t()*256,z=10+t()*40,F=v.createRadialGradient(R,D,0,R,D,z);F.addColorStop(0,t()<.5?"rgba(196,208,232,0.5)":"rgba(255,255,255,0.6)"),F.addColorStop(1,"rgba(230,236,247,0)"),v.fillStyle=F,v.fillRect(R-z,D-z,z*2,z*2)}for(let I=0;I<500;I++)v.fillStyle=t()<.5?"rgba(255,255,255,0.9)":"rgba(170,185,215,0.5)",v.fillRect(t()*256,t()*256,1.5,1.5)}),at=Yn(256,256,v=>{v.fillStyle="#20232b",v.fillRect(0,0,256,256);for(let I=0;I<1400;I++)v.fillStyle=`rgba(${150+t()*100},${160+t()*90},${190+t()*60},${t()*.16})`,v.fillRect(t()*256,t()*256,1+t()*2,1+t()*3);for(let[I,R]of[[.5,26],[.02,30],[.98,30]]){let D=v.createLinearGradient(I*256-R,0,I*256+R,0);D.addColorStop(0,"rgba(215,224,240,0)"),D.addColorStop(.5,I===.5?"rgba(190,200,222,0.5)":"rgba(228,234,246,0.98)"),D.addColorStop(1,"rgba(215,224,240,0)"),v.fillStyle=D,v.fillRect(I*256-R,0,R*2,256)}for(let I of[.2,.36,.64,.8]){let R=v.createLinearGradient(I*256-12,0,I*256+12,0);R.addColorStop(0,"rgba(8,9,12,0)"),R.addColorStop(.5,"rgba(8,9,12,0.75)"),R.addColorStop(1,"rgba(8,9,12,0)"),v.fillStyle=R,v.fillRect(I*256-12,0,24,256)}for(let I=0;I<50;I++){v.fillStyle="rgba(225,232,245,0.5)";let R=[.1,.28,.5,.72,.9][Math.floor(t()*5)];v.fillRect(R*256-8+t()*16,t()*256,3+t()*8,2+t()*4)}},{aniso:8}),de=Yn(512,512,v=>{v.fillStyle="#1e3f5c",v.fillRect(0,0,512,512);for(let I=0;I<40;I++){let R=t()*512,D=t()*512,z=30+t()*90,F=v.createRadialGradient(R,D,0,R,D,z);F.addColorStop(0,t()<.65?"rgba(228,238,252,0.8)":"rgba(10,30,50,0.5)"),F.addColorStop(1,"rgba(30,63,92,0)"),v.fillStyle=F,v.fillRect(R-z,D-z,z*2,z*2)}v.strokeStyle="rgba(200,230,255,0.4)";for(let I=0;I<26;I++){v.lineWidth=.6+t()*1.6,v.beginPath();let R=t()*512,D=t()*512;v.moveTo(R,D);for(let z=0;z<6;z++)R+=(t()-.5)*120,D+=(t()-.5)*120,v.lineTo(R,D);v.stroke()}}),re=new os({map:te,vertexColors:!0}),Vt=new os({map:at,transparent:!0,opacity:.88}),Dt=new os({map:de,transparent:!0,opacity:.68,color:14674678}),mt=(v,I,R=3)=>{let D=new ae(v,I);return D.castShadow=!!(R&1),D.receiveShadow=!!(R&2),D},$t=new Ne,ce=new Ne,be=new Ne,qt=new Ne,pt=s.fa.build(),N=s.fb.build(),vt=s.pl.build(),yt=s.em.build(),Bt=s.sg.build(),Nt=s.br.build(),pe=s.brE.build();$t.add(mt(pt,rt),mt(N,ct),mt(vt,Tt),mt(yt,_t,0),mt(Bt,zt,0)),ce.add(mt(pt,rt,0),mt(N,ct,0),mt(vt,Tt,0),mt(yt,_t,0),mt(Bt,zt,0)),ce.scale.y=-1,be.add(mt(Nt,Tt),mt(pe,_t,0)),qt.add(mt(Nt,Tt,0),mt(pe,_t,0)),qt.scale.y=-1,qt.position.y=-6;let _e=mt(s.gr.build(),re,2),Oe=mt(s.rd.build(),Vt,2);Oe.renderOrder=-10;let Ge=new xe;Ge.quad([-40,-3,900],[40,-3,900],[40,-3,-900],[-40,-3,-900],[1,1,1]),Ge.worldUV(1/70);let me=mt(Ge.build(),Dt,2);me.renderOrder=-11,i.add($t,ce,be,qt,_e,Oe,me);let We=new ae(s.pool.build(),go("varying vec2 vUv; varying vec3 vC; varying float vF; void main(){ float r = length(vUv-0.5)*2.0; float a = pow(max(1.0-r,0.0),1.8); gl_FragColor = vec4(vC*a*vF,1.0); }"));We.renderOrder=2;let mn=new ae(s.cone.build(),go(`varying vec3 vC; varying float vF; varying vec3 vN; varying vec3 vV; varying vec2 vUv;
    void main(){ float f = abs(dot(normalize(vN), normalize(vV))); float a = f*f*pow(clamp(vUv.y,0.0,1.0),1.5); gl_FragColor = vec4(vC*a*vF,1.0); }`,{},`attribute vec3 color; varying vec2 vUv; varying vec3 vC; varying float vF; varying vec3 vN; varying vec3 vV; uniform float uFog;
    void main(){ vec4 mv = modelViewMatrix*vec4(position,1.0); gl_Position = projectionMatrix*mv; vUv = uv; vC = color; vN = normalMatrix*normal; vV = -mv.xyz; float d = length(mv.xyz); vF = exp(-uFog*uFog*d*d); }`));mn.material.side=vn,mn.renderOrder=3;let Hi=new ae(s.streak.build(),go(`varying vec2 vUv; varying vec3 vC; varying float vF;
    void main(){ float dx = (vUv.x-0.5)*3.6; float dy = (vUv.y-0.55)*2.4; float gx = exp(-dx*dx); float gy = exp(-dy*dy); gl_FragColor = vec4(vC*gx*gy*vF,1.0); }`,{},`attribute vec3 color; varying vec2 vUv; varying vec3 vC; varying float vF; uniform float uFog;
    void main(){ vec3 right = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]);
      vec3 wp = position + right*(uv.x-0.5)*2.0*normal.x + vec3(0.0,1.0,0.0)*(uv.y-0.5)*2.0*normal.y;
      vec4 mv = viewMatrix*vec4(wp,1.0); gl_Position = projectionMatrix*mv; vUv = uv; vC = color; float d = length(mv.xyz); vF = exp(-uFog*uFog*d*d); }`));Hi.frustumCulled=!1,Hi.renderOrder=-20,i.add(We,mn,Hi);let dr=Tc(),Kn=a.length/7,pr=new Float32Array(Kn*3),Vi=new Float32Array(Kn),mr=new Float32Array(Kn*3);for(let v=0;v<Kn;v++)pr.set(a.slice(v*7,v*7+3),v*3),Vi[v]=a[v*7+3],mr.set(a.slice(v*7+4,v*7+7),v*3);let Gi=new ge;Gi.setAttribute("position",new fe(pr,3)),Gi.setAttribute("aSize",new fe(Vi,1)),Gi.setAttribute("aColor",new fe(mr,3));let gr=new ui(Gi,dr);gr.frustumCulled=!1,gr.renderOrder=5,i.add(gr);let Wi=new U(-.45,.62,-.64).normalize(),xr=new Lt(.05,.058,.115),w=new ae(new di(900,24,16),new Ve({side:un,depthWrite:!1,fog:!1,uniforms:{uMoon:{value:Wi},uHor:{value:xr}},vertexShader:"varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`varying vec3 vDir; uniform vec3 uMoon; uniform vec3 uHor;
      void main(){ vec3 d = normalize(vDir); d.y = abs(d.y); float h = d.y;
        float ih = clamp(1.0-h, 0.0, 1.0);
        vec3 c = mix(vec3(0.008,0.014,0.04), uHor, pow(ih, 3.2));
        c += vec3(0.30,0.15,0.10)*pow(ih, 7.0)*(0.55 + 0.45*d.x);
        float m = max(dot(d, uMoon), 0.0);
        c += vec3(0.75,0.85,1.0)*(smoothstep(0.9993,0.9996,m)*3.0 + pow(m,90.0)*0.35 + pow(m,10.0)*0.08);
        gl_FragColor = vec4(c,1.0); }`}));w.renderOrder=-100,w.frustumCulled=!1,i.add(w),i.fog=new Xa(xr,zr.value),i.background=xr;let B=new Qs(new Lt(.3,.4,.78),new Lt(.2,.15,.17),.7),H=new js(new Lt(.58,.72,1),1);H.shadow.mapSize.set(2048,2048),H.shadow.bias=-6e-4,H.shadow.normalBias=.6;let Y=H.shadow.camera;Y.left=-110,Y.right=110,Y.top=110,Y.bottom=-110,Y.near=10,Y.far=520,i.add(B,H,H.target);let G=new xe,Mt=15;for(let v of[-1.2,1.2]){G.add(new no(Mt,.2,5,48),xt(v,0,0,1,1,1,Math.PI/2),tt(8029334));for(let I=0;I<12;I++){let R=I*Math.PI/6;Ze(G,[v,0,0],[v,Math.cos(R)*Mt,Math.sin(R)*Mt],.07,tt(6976646),3)}}let Ct=[tt(14238266),tt(3836633),tt(14725690),tt(4899450)];for(let v=0;v<12;v++){let I=v*Math.PI/6+.26;G.add(L,xt(0,Math.cos(I)*Mt,Math.sin(I)*Mt,2,1.7,1.7,0,-I),Ct[v%4])}let It=new Ne;It.position.set(103,17.4,-30),It.add(new ae(G.build(),Tt));let Ot=48,Qt=new Float32Array(Ot*3),Wt=new Float32Array(Ot),Yt=new Float32Array(Ot*3),Ie=[[2.2,.3,1.4],[.3,1.8,2.2],[2.2,1.5,.3],[.5,2.2,.8]];for(let v=0;v<Ot;v++){let I=v/Ot*Math.PI*2;Qt.set([0,Math.cos(I)*Mt,Math.sin(I)*Mt],v*3),Wt[v]=1.5,Yt.set(Ie[Math.floor(v/4)%4],v*3)}let Qe=new ge;Qe.setAttribute("position",new fe(Qt,3)),Qe.setAttribute("aSize",new fe(Wt,1)),Qe.setAttribute("aColor",new fe(Yt,3));let ze=new ui(Qe,dr);ze.frustumCulled=!1,It.add(ze),i.add(It);let Dn=new xe;for(let v of[-7,7])for(let I of[-2.4,2.4])Ze(Dn,[103+I,.15,-30+v],[103+I*.5,17.4,-30],.28,tt(5857907),5);let Ee=mt(Dn.build(),Tt,1);i.add(Ee),n.circle(103,-37,1.6),n.circle(103,-23,1.6);let ee=Yn(64,64,v=>{let I=v.createRadialGradient(32,32,0,32,32,32);I.addColorStop(0,"rgba(255,255,255,0.9)"),I.addColorStop(1,"rgba(255,255,255,0)"),v.fillStyle=I,v.fillRect(0,0,64,64)},{repeat:!1}),ms=[];for(let v of o)for(let I=0;I<6;I++){let R=new $s(new rs({map:ee,color:new Lt(.34,.3,.36),transparent:!0,opacity:0,depthWrite:!1}));i.add(R),ms.push({sp:R,s:v,ph:I/6})}let we=new Ve({uniforms:{uTime:{value:0}},blending:Hn,transparent:!0,depthWrite:!1,vertexShader:"uniform float uTime; varying vec3 vN; varying vec3 vV; void main(){ vec3 p = position*(1.0+0.14*sin(uTime*3.0+position.y*3.0+position.x*2.0)); vec4 mv = modelViewMatrix*vec4(p,1.0); vN = normalize(normalMatrix*normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix*mv; }",fragmentShader:"uniform float uTime; varying vec3 vN; varying vec3 vV; void main(){ float f = clamp(1.0-abs(dot(normalize(vN),vV)),0.0,1.0); float a = f*f*1.8+0.06; vec3 c = mix(vec3(0.2,1.2,0.6), vec3(0.7,0.3,1.3), 0.5+0.5*sin(uTime*2.0+f*6.0)); gl_FragColor = vec4(c*a,1.0); }"}),Qn=new to(2.3,2);for(let v of c)v.mesh=new ae(Qn,we),v.mesh.position.set(v.x,2.2,v.z),i.add(v.mesh);let _r={col:n,lamps:r,blocks:l,towers:A,anomalies:c,fire:Kt,moon:H,moonDir:Wi,hemi:B,mirror:ce,bridgesM:qt,sky:w,cones:mn,streaks:Hi,pools:We,glowMat:dr,mPL:Tt,mEM:_t,roadsMat:Vt,update(v,I,R){It.rotation.x+=v*.12,we.uniforms.uTime.value=I;for(let D of c)D.x=D.x0+Math.sin(I*.7+D.ph)*3.2,D.z=D.z0+Math.cos(I*.55+D.ph*1.7)*3.2,D.mesh.position.set(D.x,2.2+Math.sin(I*2+D.ph)*.3,D.z);for(let D of ms){let z=(I*.05+D.ph)%1;D.sp.position.set(D.s[0]+z*34,D.s[1]+z*22,D.s[2]+z*12);let F=5+z*26;D.sp.scale.set(F,F,1),D.sp.material.opacity=.5*(1-z)*fo(z*8)}w.position.copy(R.position)},setShadowCenter(v,I){let R=Math.round(v/4)*4,D=Math.round(I/4)*4;H.target.position.set(R,0,D),H.position.set(R+Wi.x*260,Wi.y*260,D+Wi.z*260),H.target.updateMatrixWorld()},drawMap(v,I){let R=F=>(F+300)*I,D=F=>(F+200)*I;v.fillStyle="#0d1220",v.fillRect(0,0,600*I,400*I),v.fillStyle="#17304a",v.fillRect(R(-52),0,104*I,400*I),v.fillStyle="#21486b",v.fillRect(R(-40),0,80*I,400*I);let z={park:"#17382a",fpark:"#17382a",zone:"#2c2140",ind:"#2a2622",opera:"#3a3122",garages:"#2a2a2e",palace:"#33301f",mall:"#1d2a3c"};for(let F of l)v.fillStyle=z[F.type]||"#1a2132",v.fillRect(R(F.x0),D(F.z0),(F.x1-F.x0)*I,(F.z1-F.z0)*I);v.fillStyle="#465068";for(let F of $e)v.fillRect(R(F-mi(F)),D(-187),mi(F)*2*I,374*I);for(let F of Je)v.fillRect(R(-287),D(F-7),224*I,14*I),v.fillRect(R(63),D(F-7),224*I,14*I);v.fillStyle="#8b6f6f",v.fillRect(R(-63),D(-67),126*I,14*I),v.fillStyle="#c0483c",v.fillRect(R(-63),D(113),126*I,14*I),v.fillStyle="#d8c79a",v.beginPath(),v.arc(R(181),D(-30),14*I,0,7),v.fill(),v.fillStyle="#e0b040",v.beginPath(),v.arc(R(140),D(30),4*I,0,7),v.fill()}};return _r.setShadowCenter(dn.start[0],dn.start[1]),_r}var Ht={sph:new di(1,12,9),cyl:new fn(1,1,1,10),cone:new fi(1,1,8),box:new Ln(1,1,1)},Ac,of,lf,M_={arkasha:13123630,max:14375484,dima:856344,igor:15790320,geisler:12729170,pasha:14725168,nikita:13589043,kos:3117020,artem:5027914,sanya:10263708,misha:14180922},Br=tt(16053492),sr=tt(526346),cf=tt(14723100),S_=(i,t)=>[i[0]*t,i[1]*t,i[2]*t];function Rc(i,t,e){let n=Yn(128,128,r=>{r.clearRect(0,0,128,128),r.fillStyle=t,r.beginPath(),r.arc(64,64,60,0,7),r.fill(),r.strokeStyle=e,r.lineWidth=5,r.stroke(),r.fillStyle=e,r.font='900 58px "Arial Black", system-ui, sans-serif',r.textAlign="center",r.textBaseline="middle",r.fillText(i,64,68)},{repeat:!1}),s=new ae(new ja(.19,20),new on({map:n,transparent:!0}));return s.position.set(0,1.08,.405),s}function hf(i){Ac||(Ac=Fi({vertexColors:!0}),of=new on({vertexColors:!0}),lf=Fi({vertexColors:!0,map:Yn(128,128,C=>{C.fillStyle="#f2c94c",C.fillRect(0,0,128,128);let E=["#1b1b1b","#ffffff","#c0392b","#1f8a70","#8e6b00","#f7e08a"];for(let L=0;L<90;L++){C.fillStyle=E[L%E.length];let k=3+L*7%9;C.fillRect(L*37%128,L*53%128,k,k+L%3*3)}C.strokeStyle="#7a5a00",C.lineWidth=1.5;for(let L=0;L<9;L++)C.beginPath(),C.arc(L*47%128,L*71%128,6+L%4,0,5),C.stroke()})}));let t=new Ne,e=new Ne;t.add(e);let n=new xe,s=new xe,r=tt(M_[i]),a=S_(r,.6),o=i==="dima"?tt(1449e3):i==="igor"?tt(14474460):i==="pasha"?tt(16111470):i==="sanya"?tt(13158600):tt(15912870),l=i==="igor"?sr:r,c=i==="igor"?sr:a,h=i==="pasha"?lf:Ac,u=i==="arkasha",p=i==="nikita";n.add(Ht.sph,xt(0,1,0,.44,.56,.38),u?tt(1316380):p?tt(1513243):r),!u&&!p&&n.add(Ht.sph,xt(0,.98,.13,.33,.44,.28),o),n.add(Ht.sph,xt(0,1.62,.02,.4,.34,.36),r),n.add(Ht.box,xt(0,1.52,.34,.16,.03,.04),sr);for(let C of[-1,1]){Ze(n,[C*.15,1.85,.1],[C*.19,2.12,.14],.035,r,5),n.add(Ht.sph,xt(C*.19,2.16,.15,.1,.1,.1),Br),i==="dima"?s.add(Ht.sph,xt(C*.19,2.165,.235,.055,.055,.03),[.3,2.4,2.8]):n.add(Ht.sph,xt(C*.19,2.165,.235,.05,.05,.03),sr),Ze(n,[C*.1,1.9,.25],[C*.45,2.55,-.2],.016,c,4);for(let E=0;E<2;E++)Ze(n,[C*.36,.95-E*.2,0],[C*.64,.62-E*.2,.1],.035,c,4)}n.add(Ht.sph,xt(0,.62,-.18,.36,.26,.3),l),n.add(Ht.sph,xt(0,.42,-.38,.3,.2,.26),c),n.add(Ht.sph,xt(0,.26,-.6,.36,.07,.22),l);let d=C=>{let E=new xe;Ze(E,[0,0,0],[C*.3,-.22,.2],.07,c,5),i==="max"?E.add(Ht.sph,xt(C*.36,-.26,.4,.27,.27,.27),tt(13637656)):(E.add(Ht.sph,xt(C*.36,-.26,.38,.19,.25,.15),l),E.add(Ht.cone,xt(C*.36,-.16,.62,.11,.34,.09,0,Math.PI/2),l),E.add(Ht.cone,xt(C*.36,-.36,.58,.08,.26,.07,0,Math.PI/2),c)),i==="artem"&&C>0&&(E.add(Ht.cyl,xt(.38,-.02,.5,.11,.26,.11),tt(14721056)),E.add(Ht.cyl,xt(.38,.14,.5,.115,.06,.115),Br)),i==="artem"&&C<0&&(E.add(Ht.sph,xt(-.38,.02,.56,.07,.11,.26),tt(9082790)),E.add(Ht.cone,xt(-.38,.02,.86,.02,.14,.12,0,-Math.PI/2),tt(6977414)));let L=new ae(E.build(),h);return L.position.set(C*.42,1.3,.05),L.castShadow=!0,e.add(L),L},g=C=>{let E=new xe;E.add(Ht.cyl,xt(0,-.25,0,.09,.5,.09),c),E.add(Ht.sph,xt(0,-.5,.07,.13,.07,.2),l);let L=new ae(E.build(),h);return L.position.set(C*.17,.57,0),L.castShadow=!0,e.add(L),L},x=d(-1),m=d(1),f=g(-1),y=g(1),_=null;if(i==="arkasha")n.add(Ht.sph,xt(0,1.08,.2,.19,.36,.24),Br),n.add(Ht.box,xt(-.09,1.4,.42,.14,.1,.05,0,0,.3),tt(10097192)),n.add(Ht.box,xt(.09,1.4,.42,.14,.1,.05,0,0,-.3),tt(10097192)),n.add(Ht.box,xt(0,1.4,.44,.05,.07,.05),tt(6949916)),n.add(Ht.sph,xt(0,1.48,.2,.33,.2,.22),tt(5913122));else if(i==="max")n.add(Ht.cyl,xt(0,.72,0,.43,.24,.37),tt(1851304)),n.add(Ht.cyl,xt(0,.86,0,.44,.05,.38),Br);else if(i==="dima")n.add(Ht.box,xt(0,1.08,-.42,.52,.62,.26),tt(1712688)),n.add(Ht.box,xt(0,1.2,-.56,.3,.2,.06),tt(2503240)),_={y:.4,c:[.25,.4,.7],s:4.5};else if(i==="igor")e.add(Rc("\u0418\u0411","#ffffff","#000000"));else if(i==="geisler"){n.add(Ht.cone,xt(0,.98,-.14,.66,1.3,.44),tt(5906298)),n.add(Ht.cyl,xt(0,1.99,0,.2,.1,.2),cf);for(let C=0;C<5;C++){let E=C*Math.PI*2/5;n.add(Ht.cone,xt(Math.sin(E)*.17,2.1,Math.cos(E)*.17,.04,.14,.04),cf)}Ze(s,[0,2.75,0],[0,3,0],.015,[1.2,.9,.4],4);for(let C=0;C<6;C++){let E=C*Math.PI/3;s.add(Ht.sph,xt(Math.sin(E)*.26,2.72,Math.cos(E)*.26,.05,.07,.05),[3.2,2.3,1])}s.add(Ht.cyl,xt(0,2.76,0,.27,.02,.27),[1.4,1,.4]),_={y:2.72,c:[1.5,1,.45],s:2.6}}else if(i==="pasha")_={y:1.2,c:[.8,.55,.12],s:3.2};else if(i==="nikita")n.add(Ht.sph,xt(0,1.66,-.09,.45,.38,.36),tt(1513243)),n.add(Ht.box,xt(0,2.16,.22,.62,.15,.1),sr),s.add(Ht.box,xt(-.17,2.19,.275,.16,.02,.01),[.6,.8,1.2]);else if(i==="kos")e.add(Rc("\u0421\u041A","#35a7e8","#ffffff")),n.add(Ht.cyl,xt(0,1.46,.36,.09,.14,.09,0,Math.PI/2),tt(3357235)),n.add(Ht.sph,xt(0,1.7,-.1,.43,.34,.34),tt(4151860));else if(i==="artem")e.add(Rc("\u0410\u041A","#58c152","#ffffff"));else if(i==="sanya")n.add(Ht.sph,xt(0,1.47,.2,.33,.22,.22),tt(2368548)),n.add(Ht.box,xt(.5,1,.14,.05,.36,.5),tt(3159100)),s.add(Ht.box,xt(.53,1,.14,.01,.3,.44),[.5,.9,1.5]);else if(i==="misha"){n.add(Ht.cyl,xt(0,1.99,-.02,.27,.14,.27),tt(7039802)),n.add(Ht.cyl,xt(0,1.93,-.02,.44,.03,.44),tt(7039802));let C=-.52,E=1.62;n.add(Ht.sph,xt(C,E,0,.15,.13,.13),r);for(let L of[-1,1])n.add(Ht.sph,xt(C+L*.06,E+.16,.06,.04,.04,.04),Br),n.add(Ht.sph,xt(C+L*.06,E+.165,.095,.02,.02,.015),sr),n.add(Ht.sph,xt(C+L*.17,E+.02,.08,.06,.08,.05),r)}let b=new ae(n.build(),h);return b.castShadow=!0,e.add(b),s.count&&e.add(new ae(s.build(),of)),t.userData={id:i,inner:e,armL:x,armR:m,legL:f,legR:y,ph:Math.random()*6,glow:_},t}function xo(i,t,e,n){let s=i.userData,r=t*11;s.inner.position.y=Math.abs(Math.sin(r))*.07*e+Math.sin(t*2+s.ph)*.02,s.inner.rotation.z=Math.sin(r)*.07*e,s.legL.rotation.x=Math.sin(r)*.9*e,s.legR.rotation.x=-Math.sin(r)*.9*e;let a=Math.sin(t*1.7+s.ph)*.08,o=n?1:0;s.armL.rotation.x=-Math.sin(r)*.5*e+a-o*(.9+Math.sin(t*9)*.35),s.armR.rotation.x=Math.sin(r)*.5*e-a-o*(.5+Math.cos(t*7)*.3),s.armL.rotation.z=-o*.3,s.armR.rotation.z=o*.3}function uf(i,t){let e=Yn(256,64,s=>{s.font='800 34px system-ui, "Segoe UI", sans-serif',s.textAlign="center",s.textBaseline="middle";let r=Math.min(250,s.measureText(i).width+36);s.fillStyle="rgba(10,14,24,0.78)",s.beginPath(),s.roundRect?s.roundRect(128-r/2,8,r,48,24):s.rect(128-r/2,8,r,48),s.fill(),s.fillStyle=t,s.fillText(i,128,34)},{repeat:!1}),n=new $s(new rs({map:e,transparent:!0,depthWrite:!1,fog:!1}));return n.scale.set(2.6,.65,1),n.position.y=2.95,n}var b_=new fn(1,1,1,12),Cc,ff,df=tt(15265528),E_=tt(1053724),w_=tt(789518);function T_(i,t){let e=new xe,n=new xe,s=tt(i),r=t==="van",a=r?2:1.5;e.box(-.9,.9,.32,.95,-2.15,2.15,s),e.box(-.93,.93,.3,.52,-2.22,2.22,tt(1382172)),e.box(-.8,.8,.95,a,r?-2.05:-1.3,r?1:.75,E_),e.box(-.83,.83,a,a+.08,r?-2.1:-1.35,r?1.05:.8,s,df),e.box(-.84,.84,.95,a,-.32,-.22,s),r&&e.box(-.84,.84,.95,a,-2.1,-1.2,s),e.box(-.7,.7,.95,.99,1.2,2,df);for(let o of[-.9,.9])for(let l of[-1.35,1.35])e.add(b_,xt(o,.36,l,.36,.26,.36,0,0,Math.PI/2),w_);t==="mod"&&e.box(-.92,.92,.55,.75,-2.16,2.16,tt(1724368));for(let o of[-.62,.62])n.box(o-.2,o+.2,.62,.82,2.14,2.18,[3.2,3,2.4]),n.box(o-.22,o+.22,.66,.82,-2.19,-2.14,[2.6,.12,.08]);return[e.build(),n.build()]}var rr=class{constructor(t,e,n,s,r,a="sedan"){Cc||(Cc=Fi({vertexColors:!0}),ff=new on({vertexColors:!0}));let[o,l]=T_(r,a);this.g=new Ne,this.body=new Ne,this.g.add(this.body);let c=new ae(o,Cc);if(c.castShadow=!0,this.body.add(c,new ae(l,ff)),a==="mod"){this.barMat=new on({color:2245887});let h=new ae(new Ln(1.1,.14,.3),this.barMat);h.position.set(0,1.68,-.2),this.body.add(h)}this.g.rotation.order="YXZ",t.add(this.g),this.e={x:e,z:n,y:0,vx:0,vz:0,layer:0},this.e.y=Oi(this.e),this.h=s,this.steer=0,this.vy=0,this.kind=a,this.color=r,this.ai=null,this.slip=0,this.maxSpeed=38,this.vf=0,this.roll=0,this.spin=0,this.stun=0,this.sync(0)}drive(t,e,n,s,r){let a=this.e,o=a.layer===2;this.steer+=(n-this.steer)*Math.min(1,t*9);let l=Math.sin(this.h),c=Math.cos(this.h),h=a.vx*l+a.vz*c,u=a.y>Oi(a)+.5;u||(this.h-=this.steer*(2.6/(1+Math.abs(h)/28))*t*Pe(h/5,-1,1)),l=Math.sin(this.h),c=Math.cos(this.h);let p=-c,d=l;h=a.vx*l+a.vz*c;let g=a.vx*p+a.vz*d;if(!u){let x=this.maxSpeed*(o?.88:1),m=0;e>0?m=23*e*(1-Pe(h/x,0,1))*(h<-1?2:1):e<0&&(m=h>1?36*e:13*e*(1-Pe(-h/11,0,1))),o&&(m*=.5),h+=m*t,h-=h*(e===0?.8:.12)*t;let f=o?1:6;s&&(f*=.2,h-=h*1.3*t),this.slip=Math.abs(g),g-=g*Math.min(1,f*t)}return a.vx=l*h+p*g,a.vz=c*h+d*g,this.vf=h,this.roll+=(Pe(-g*.035,-.22,.22)-this.roll)*Math.min(1,t*6),this.move(t,r)}move(t,e){let n=this.e;n.x+=n.vx*t,n.z+=n.vz*t;let s=e.resolve(n,1.5,n.layer,.25);Math.abs(n.x)>er&&(n.x=Math.sign(n.x)*er,n.vx*=-.3),Math.abs(n.z)>nr&&(n.z=Math.sign(n.z)*nr,n.vz*=-.3);let r=Oi(n);return this.vy>0||n.y>r+.4?(this.vy-=26*t,n.y+=this.vy*t,this.spin+=t*5,n.y<=r&&(n.y=r,this.vy=0,this.spin=0)):n.y+=(r-n.y)*Math.min(1,t*14),s}launch(t){this.vy=t,this.e.y+=.5}sync(){let t=this.e;this.g.position.set(t.x,t.y,t.z),this.g.rotation.set(this.spin,this.h,this.roll)}get speed(){return Math.hypot(this.e.vx,this.e.vz)}},pn=[];for(let i=0;i<$e.length;i++)for(let t=0;t<Je.length;t++)pn.push({x:$e[i],z:Je[t],xi:i,zi:t,nb:[]});var Pc=(i,t)=>i*Je.length+t;for(let i of pn){i.zi>0&&i.nb.push(Pc(i.xi,i.zi-1)),i.zi<Je.length-1&&i.nb.push(Pc(i.xi,i.zi+1));for(let t of[-1,1]){let e=i.xi+t;if(e<0||e>=$e.length)continue;(!(i.xi<4!=e<4)||Je[i.zi]===-60||Je[i.zi]===120)&&i.nb.push(Pc(e,i.zi))}}function Lc(i,t,e=0,n=1e9){let s=-1,r=1e9;for(let a=0;a<pn.length;a++){let o=Math.hypot(pn[a].x-i,pn[a].z-t);o>=e&&o<=n&&o<r&&(r=o,s=a)}return s}var pf=(i,t)=>i.x===140&&t.x===140?7.6:3.3;function mf(i,t,e){let n=pn[t],s=pn[e],r=s.x-n.x,a=s.z-n.z,o=Math.hypot(r,a),l=r/o,c=a/o;i.ai={type:"traffic",from:t,to:e,sp:0,max:9+Math.random()*5};let h=pf(n,s);i.e.x=n.x+l*o*.5-c*h,i.e.z=n.z+c*o*.5+l*h,i.h=Math.atan2(l,c),i.e.y=0,i.sync()}function _o(i,t,e,n){let s=i.ai,r=i.e,a=pn[s.from],o=pn[s.to],l=o.x-a.x,c=o.z-a.z,h=Math.hypot(l,c),u=l/h,p=c/h,d=(r.x-a.x)*u+(r.z-a.z)*p;if(d>h-8){let k=s.from,S=o.nb.filter(T=>T!==k);s.from=s.to,s.to=S.length?S[Math.floor(Math.random()*S.length)]:k;return}let g=Math.min(d+8,h),x=pf(a,o),m=a.x+u*g-p*x,f=a.z+p*g+u*x;i.h+=pi(i.h,Math.atan2(m-r.x,f-r.z))*Math.min(1,t*3.2);let y=Math.sin(i.h),_=Math.cos(i.h),b=e-r.x,C=n-r.z,E=Math.hypot(b,C),L=s.max;i.stun>0&&(i.stun-=t,L=0),E<10&&(b*y+C*_)/(E+.01)>.55&&(L=0),s.sp+=(L-s.sp)*Math.min(1,t*2.5),r.vx=y*s.sp,r.vz=_*s.sp,r.x+=r.vx*t,r.z+=r.vz*t,r.y=Oi(r),i.vf=s.sp,i.sync()}var vo=class{constructor(t,e){let n=new Float32Array(e*3),s=new Float32Array(e);for(let a=0;a<e;a++)n[a*3]=Math.random(),n[a*3+1]=Math.random(),n[a*3+2]=Math.random(),s[a]=Math.random();let r=new ge;r.setAttribute("position",new fe(n,3)),r.setAttribute("aSeed",new fe(s,1)),this.u={uTime:{value:0},uCam:{value:new U},uBox:{value:new U(72,42,72)},uScale:ir,uCar:{value:new U},uCarDir:{value:new U(0,0,1)},uHead:{value:0}},this.n=e,this.pts=new ui(r,new Ve({uniforms:this.u,blending:Hn,transparent:!0,depthWrite:!1,vertexShader:`attribute float aSeed; uniform float uTime; uniform vec3 uCam; uniform vec3 uBox; uniform float uScale; uniform vec3 uCar; uniform vec3 uCarDir; uniform float uHead;
        varying float vA; varying vec3 vC;
        void main(){ vec3 p = position*uBox;
          p.y -= uTime*(2.2 + aSeed*2.4);
          p.x += sin(uTime*0.6 + aSeed*40.0)*1.2 + uTime*1.7; p.z += cos(uTime*0.5 + aSeed*31.0)*1.2 + uTime*0.7;
          p = mod(p - uCam, uBox) - uBox*0.5 + uCam;
          vec4 mv = viewMatrix*vec4(p,1.0); gl_Position = projectionMatrix*mv; float d = max(-mv.z, 0.5);
          gl_PointSize = clamp((0.07 + aSeed*0.08)*uScale/d, 1.0, 26.0);
          float low = 1.0 - smoothstep(3.0, 15.0, p.y);
          vC = mix(vec3(0.5,0.62,0.95), vec3(1.0,0.76,0.5), low*0.8);
          vec3 tc = p - uCar; float al = dot(tc, uCarDir); float pr = length(tc - uCarDir*al);
          vC += vec3(1.8,1.7,1.4)*uHead*smoothstep(0.5,4.0,al)*(1.0-smoothstep(10.0,36.0,al))*(1.0-smoothstep(0.0,1.0,pr/(1.2+al*0.26)));
          vA = (0.3 + 0.55*low)*smoothstep(0.6,3.0,d)*(1.0-smoothstep(26.0,36.0,d)); }`,fragmentShader:"varying float vA; varying vec3 vC; void main(){ float r = length(gl_PointCoord-0.5)*2.0; gl_FragColor = vec4(vC*vA*(1.0-smoothstep(0.15,1.0,r)),1.0); }"})),this.pts.frustumCulled=!1,this.pts.renderOrder=8,t.add(this.pts)}density(t){this.pts.geometry.setDrawRange(0,Math.floor(this.n*t))}},yo=class{constructor(t,e=420){this.n=e,this.i=0;let n=new ge;this.p=new Float32Array(e*3),this.v=new Float32Array(e*3),this.t=new Float32Array(e*2).fill(-99),this.c=new Float32Array(e*3),n.setAttribute("position",new fe(this.p,3)),n.setAttribute("aVel",new fe(this.v,3)),n.setAttribute("aT",new fe(this.t,2)),n.setAttribute("aColor",new fe(this.c,3)),this.u={uTime:{value:0},uScale:ir},this.pts=new ui(n,new Ve({uniforms:this.u,blending:Hn,transparent:!0,depthWrite:!1,vertexShader:`attribute vec3 aVel; attribute vec2 aT; attribute vec3 aColor; uniform float uTime; uniform float uScale; varying vec3 vC;
        void main(){ float age = uTime - aT.x; float k = clamp(age/aT.y, 0.0, 1.0);
          vec3 p = position + aVel*age; p.y -= 4.0*age*age;
          vec4 mv = modelViewMatrix*vec4(p,1.0); gl_Position = projectionMatrix*mv;
          gl_PointSize = (age < 0.0 || k >= 1.0) ? 0.0 : clamp(0.3*uScale/max(-mv.z,0.5)*(0.5+k), 1.0, 48.0);
          vC = aColor*(1.0-k)*(1.0-k); }`,fragmentShader:"varying vec3 vC; void main(){ float r = length(gl_PointCoord-0.5)*2.0; gl_FragColor = vec4(vC*(1.0-smoothstep(0.0,1.0,r)),1.0); }"})),this.pts.frustumCulled=!1,this.pts.renderOrder=9,t.add(this.pts),this.dirty=!1}emit(t,e,n,s,r,a,o,l,c,h){let u=this.i;this.i=(u+1)%this.n,this.p[u*3]=t,this.p[u*3+1]=e,this.p[u*3+2]=n,this.v[u*3]=s,this.v[u*3+1]=r,this.v[u*3+2]=a,this.t[u*2]=this.u.uTime.value,this.t[u*2+1]=o,this.c[u*3]=l,this.c[u*3+1]=c,this.c[u*3+2]=h,this.dirty=!0}burst(t,e,n,s,r,a,o,l,c){for(let h=0;h<s;h++){let u=Math.random()*6.283,p=Math.random()*2-1,d=Math.sqrt(1-p*p)*r*(.5+Math.random()*.5);this.emit(t,e,n,Math.cos(u)*d,p*r,Math.sin(u)*d,a*(.6+Math.random()*.4),o,l,c)}}update(t){if(this.u.uTime.value=t,this.dirty){let e=this.pts.geometry.attributes;e.position.needsUpdate=e.aVel.needsUpdate=e.aT.needsUpdate=e.aColor.needsUpdate=!0,this.dirty=!1}}},Mo=class{constructor(t,e=700){this.n=e,this.i=0,this.p=new Float32Array(e*12);let n=new ge;n.setAttribute("position",new fe(this.p,3));let s=[];for(let r=0;r<e;r++)s.push(r*4,r*4+1,r*4+2,r*4,r*4+2,r*4+3);n.setIndex(s),this.m=new ae(n,new on({color:329484,transparent:!0,opacity:.42,depthWrite:!1,side:vn})),this.m.frustumCulled=!1,this.m.renderOrder=1,t.add(this.m),this.last=null}seg(t,e,n,s,r,a,o){let l=s-t,c=a-n,h=Math.hypot(l,c)||1,u=-c/h*o,p=l/h*o,d=this.i*12,g=this.p;g[d]=t-u,g[d+1]=e,g[d+2]=n-p,g[d+3]=t+u,g[d+4]=e,g[d+5]=n+p,g[d+6]=s+u,g[d+7]=r,g[d+8]=a+p,g[d+9]=s-u,g[d+10]=r,g[d+11]=a-p,this.i=(this.i+1)%this.n,this.m.geometry.attributes.position.needsUpdate=!0}},So=class{constructor(t,e=400){this.n=e,this.k=0,this.p=new Float32Array(e*3),this.s=new Float32Array(e),this.c=new Float32Array(e*3);let n=new ge;n.setAttribute("position",new fe(this.p,3)),n.setAttribute("aSize",new fe(this.s,1)),n.setAttribute("aColor",new fe(this.c,3)),this.pts=new ui(n,Tc()),this.pts.frustumCulled=!1,this.pts.renderOrder=6,t.add(this.pts)}begin(){this.k=0}add(t,e,n,s,r,a,o){let l=this.k;l>=this.n||(this.p[l*3]=t,this.p[l*3+1]=e,this.p[l*3+2]=n,this.s[l]=s,this.c[l*3]=r,this.c[l*3+1]=a,this.c[l*3+2]=o,this.k++)}end(){let t=this.pts.geometry.attributes;t.position.needsUpdate=t.aSize.needsUpdate=t.aColor.needsUpdate=!0,this.pts.geometry.setDrawRange(0,this.k)}},ar=class{constructor(t){let e=new Ve({uniforms:{uColor:{value:new Lt(1,.8,.2)},uTime:{value:0},uFog:zr},blending:Hn,transparent:!0,depthWrite:!1,side:vn,vertexShader:"varying vec2 vUv; varying float vF; uniform float uFog; void main(){ vUv = uv; vec4 mv = modelViewMatrix*vec4(position,1.0); float d = length(mv.xyz); vF = exp(-uFog*uFog*d*d*0.25); gl_Position = projectionMatrix*mv; }",fragmentShader:"uniform vec3 uColor; uniform float uTime; varying vec2 vUv; varying float vF; void main(){ float iy = clamp(1.0-vUv.y, 0.0, 1.0); float a = pow(iy, 2.2)*0.9 + 0.05*iy; a *= 0.75 + 0.25*sin(uTime*4.0 - vUv.y*30.0); gl_FragColor = vec4(uColor*a*vF*1.6, 1.0); }"});this.mat=e,this.g=new Ne;let n=new ae(new fn(1.3,2.2,70,20,1,!0),e);n.position.y=35,this.g.add(n),this.ring=new ae(new eo(3.6,4.4,40),new on({color:16763955,transparent:!0,opacity:.9,blending:Hn,depthWrite:!1,side:vn})),this.ring.rotation.x=-Math.PI/2,this.ring.position.y=.3,this.g.add(this.ring),this.g.visible=!1,this.g.renderOrder=7,t.add(this.g)}set(t,e,n,s){this.g.position.set(t,e,n),this.g.visible=!0,this.mat.uniforms.uColor.value.setHex(s),this.ring.material.color.setHex(s)}hide(){this.g.visible=!1}update(t){this.mat.uniforms.uTime.value=t;let e=1+Math.sin(t*3)*.12;this.ring.scale.set(e,e,1)}};var bo=i=>440*Math.pow(2,(i-69)/12),A_=[[50,53,57,62],[46,50,53,58],[41,45,48,53],[48,52,55,60]],Eo=class{constructor(){this.ctx=null,this.muted=!1,this.intensity=0,this.step=0,this.next=0,this.eng=null}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;this.master=e.createGain(),this.master.gain.value=.85;let n=e.createDynamicsCompressor();n.threshold.value=-14,n.ratio.value=5,this.master.connect(n),n.connect(e.destination),this.music=e.createGain(),this.music.gain.value=.66,this.music.connect(this.master),this.sfx=e.createGain(),this.sfx.gain.value=.95,this.sfx.connect(this.master);let s=e.createDelay(1);s.delayTime.value=.47;let r=e.createGain();r.gain.value=.36;let a=e.createBiquadFilter();a.type="lowpass",a.frequency.value=2200,s.connect(a),a.connect(r),r.connect(s),a.connect(this.music),this.delay=s;let o=e.createBuffer(1,e.sampleRate*1.5,e.sampleRate),l=o.getChannelData(0);for(let E=0;E<l.length;E++)l[E]=Math.random()*2-1;this.noise=o;let c=e.createOscillator(),h=e.createOscillator(),u=e.createBiquadFilter(),p=e.createGain();c.type="sawtooth",h.type="square",u.type="lowpass",u.frequency.value=500,u.Q.value=2,p.gain.value=0,c.connect(u),h.connect(u),u.connect(p),p.connect(this.sfx),c.start(),h.start();let d=e.createBufferSource();d.buffer=o,d.loop=!0;let g=e.createBiquadFilter();g.type="bandpass",g.frequency.value=1500,g.Q.value=.8;let x=e.createGain();x.gain.value=0,d.connect(g),g.connect(x),x.connect(this.sfx),d.start();let m=e.createBufferSource();m.buffer=o,m.loop=!0;let f=e.createBiquadFilter();f.type="lowpass",f.frequency.value=420;let y=e.createGain();y.gain.value=.05,m.connect(f),f.connect(y),y.connect(this.sfx),m.start();let _=e.createOscillator(),b=e.createGain();_.type="square",b.gain.value=0;let C=e.createBiquadFilter();C.type="lowpass",C.frequency.value=1800,_.connect(C),C.connect(b),b.connect(this.sfx),_.start(),this.eng={o1:c,o2:h,f:u,g:p,sg:x,sf:g,siren:_,sirenG:b},this.next=e.currentTime+.1}setMuted(t){this.muted=t,this.ctx&&this.master.gain.setTargetAtTime(t?0:.85,this.ctx.currentTime,.05)}tone(t,e,n,s,r,a,o){let l=this.ctx,c=l.createOscillator(),h=l.createGain();return c.type=t,c.frequency.setValueAtTime(e,n),o&&c.frequency.exponentialRampToValueAtTime(o,n+s),h.gain.setValueAtTime(1e-4,n),h.gain.exponentialRampToValueAtTime(r,n+.012),h.gain.exponentialRampToValueAtTime(1e-4,n+s),c.connect(h),h.connect(a||this.sfx),c.start(n),c.stop(n+s+.05),h}hit(t,e,n,s,r="highpass",a){let o=this.ctx,l=o.createBufferSource(),c=o.createBiquadFilter(),h=o.createGain();l.buffer=this.noise,c.type=r,c.frequency.value=s,h.gain.setValueAtTime(n,t),h.gain.exponentialRampToValueAtTime(1e-4,t+e),l.connect(c),c.connect(h),h.connect(a||this.sfx),l.start(t,Math.random()),l.stop(t+e+.05)}tick(t,e,n,s){let r=this.ctx;if(!r||r.state!=="running")return;let a=r.currentTime,o=this.intensity,l=60/(96+o*22)/4;for(this.next<a-.5&&(this.next=a+.05);this.next<a+.18;){let d=this.step++,g=this.next,x=Math.floor(d/16)%4,m=d%16,f=A_[x];if(m===0)for(let y of f)for(let _ of[-6,6]){let b=r.createOscillator(),C=r.createGain(),E=r.createBiquadFilter();b.type="sawtooth",b.frequency.value=bo(y+12),b.detune.value=_,E.type="lowpass",E.frequency.value=500+o*900,C.gain.setValueAtTime(1e-4,g),C.gain.linearRampToValueAtTime(.028,g+l*5),C.gain.linearRampToValueAtTime(1e-4,g+l*16.5),b.connect(E),E.connect(C),C.connect(this.music),b.start(g),b.stop(g+l*17)}if(m%2===0){let y=r.createOscillator(),_=r.createGain(),b=r.createBiquadFilter();y.type="sawtooth",y.frequency.value=bo(f[0]-12+(m%8===6?12:0)),b.type="lowpass",b.Q.value=6,b.frequency.setValueAtTime(240+o*700,g),b.frequency.exponentialRampToValueAtTime(110,g+l*1.8),_.gain.setValueAtTime(1e-4,g),_.gain.exponentialRampToValueAtTime(.2,g+.01),_.gain.exponentialRampToValueAtTime(1e-4,g+l*1.9),y.connect(b),b.connect(_),_.connect(this.music),y.start(g),y.stop(g+l*2)}if(o>.05||m%4===0){let y=f[[0,2,1,3,2,1,3,2][m%8]]+12+(m%16>11?12:0);this.tone("triangle",bo(y),g,l*1.6,.045+o*.03,this.delay).connect(this.music)}o>.12&&(m%4===0&&this.tone("sine",130,g,.22,.6,this.music,42),m%8===4&&this.hit(g,.14,.2,1700,"bandpass",this.music),o>.4&&m%2===1&&this.hit(g,.035,.07,7e3,"highpass",this.music),o>.75&&m%4===2&&this.hit(g,.05,.09,9e3,"highpass",this.music)),this.next+=l}let c=this.eng,h=n?.05+t*.06:0;c.g.gain.setTargetAtTime(h,a,.1);let u=t*4%1,p=46+t*60+u*34;c.o1.frequency.setTargetAtTime(p,a,.06),c.o2.frequency.setTargetAtTime(p*.5,a,.06),c.f.frequency.setTargetAtTime(300+t*1300,a,.1),c.sg.gain.setTargetAtTime(n?Math.min(.22,Math.max(0,e-3)*.03):0,a,.05),c.sirenG.gain.setTargetAtTime(s?.035:0,a,.1),c.siren.frequency.setTargetAtTime(a*1.6%1<.5?660:880,a,.02)}play(t){let e=this.ctx;if(!e||e.state!=="running")return;let n=e.currentTime;if(t==="msg")this.tone("sine",880,n,.09,.14),this.tone("sine",1320,n+.07,.12,.12);else if(t==="voice")this.tone("triangle",520,n,.08,.1);else if(t==="pick")this.tone("triangle",988,n,.1,.16),this.tone("triangle",1319,n+.06,.14,.16),this.tone("triangle",1976,n+.12,.2,.1);else if(t==="step")this.tone("square",660,n,.1,.1),this.tone("square",990,n+.09,.16,.1);else if(t==="win")[0,4,7,12,16].forEach((s,r)=>this.tone("sawtooth",bo(62+s),n+r*.08,.35,.09)),this.hit(n+.4,.5,.08,6e3);else if(t==="bump")this.tone("sine",90,n,.18,.5,null,40),this.hit(n,.12,.25,900,"lowpass");else if(t==="honk")this.tone("square",392,n,.25,.07),this.tone("square",494,n,.25,.07);else if(t==="door")this.hit(n,.08,.3,500,"lowpass"),this.tone("sine",140,n,.1,.3,null,70);else if(t==="bad")this.tone("sawtooth",220,n,.3,.14,null,110),this.tone("sawtooth",233,n,.3,.12,null,116);else if(t==="zap")this.tone("sawtooth",1400,n,.4,.14,null,90),this.hit(n,.3,.2,3e3);else if(t==="tick")this.tone("square",1200,n,.05,.1);else if(t==="bell"){for(let[s,r]of[[196,.4],[392,.2],[587,.14],[784,.08]])this.tone("sine",s,n,3.2,r);this.hit(n,.05,.2,2e3)}else t==="boom"&&(this.tone("sine",120,n,.5,.5,null,35),this.hit(n,.7,.22,1400,"lowpass"),this.hit(n+.1,.9,.06,5e3))}};var bn=[{id:"arkasha",name:"\u0410\u0440\u043A\u0430\u0448\u0430",css:"#c8402e",tag:"\u0412\u043B\u0430\u0434\u0435\u043B\u0435\u0446 \u0447\u0430\u0442\u0430",desc:"\u041A\u043E\u0441\u0442\u044E\u043C, \u0431\u0430\u0431\u043E\u0447\u043A\u0430, \u0431\u043E\u0440\u043E\u0434\u0430. \u0421\u0447\u0438\u0442\u0430\u0435\u0442 \u0434\u043D\u0438 \u0434\u043E \u0440\u0435\u043B\u0438\u0437\u0430. 600 \u043C\u0435\u0433\u0430\u0431\u0438\u0442, \u043D\u043E \u043D\u0430 PS5 \u043D\u0435\u0442 212 \u0413\u0411 \u2014 \u043F\u0440\u0438\u0434\u0451\u0442\u0441\u044F \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0412\u0435\u0434\u044C\u043C\u0430\u043A\u0430.",quotes:["\u041C\u0435\u0441\u044F\u0446...","21 \u0434\u0435\u043D\u044C..","\u0412\u0441\u0435 \u0442\u0430\u043A, \u0442\u043E\u043B\u044C\u043A\u043E \u043D\u0430\u043E\u0431\u043E\u0440\u043E\u0442","212 \u0433\u0431, \u0430\u0445\u0443\u0435\u0442\u044C","\u0412\u0435\u0434\u044C\u043C\u0430\u043A\u0430 \u043F\u0440\u0438\u0434\u0451\u0442\u0441\u044F \u0443\u0434\u0430\u043B\u0438\u0442\u044C\u{1F601}\u{1F601}","\u0423 \u043C\u0435\u043D\u044F 600 \u043C\u0435\u0433\u0430 \u0431\u0438\u0442, \u0432\u0441\u0435 \u043F\u0440\u044F\u043C \u0445\u043E\u0440\u043E\u0448\u043E)","\u0412\u0435\u0434\u044C\u043C\u0430\u043A \u043A\u043E\u043D\u0435\u0447\u043D\u043E \u043B\u0435\u0433\u0435\u043D\u0434\u0430","\u0421\u043A\u0430\u0437\u0430\u0442\u044C \u0447\u0442\u043E \u044D\u0442\u043E \u0448\u0435\u0434\u0435\u0432\u0440 \u2014 \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u0441\u043A\u0430\u0437\u0430\u0442\u044C","\u0412\u043A\u043B\u044E\u0447\u0438\u043B, \u0432\u044B\u043A\u043B\u044E\u0447\u0438\u043B, \u0434\u0432\u0430 \u0434\u043D\u044F \u043F\u0440\u043E\u0448\u043B\u043E"]},{id:"max",name:"\u041C\u0430\u043A\u0441",css:"#e2603f",tag:"\u0413\u043E\u043B\u043E\u0441\u043E\u0432\u044B\u0435, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043D\u0438\u043A\u0442\u043E \u043D\u0435 \u0441\u043B\u0443\u0448\u0430\u0435\u0442",desc:"\u0411\u043E\u043A\u0441\u0451\u0440 \u0441 \u0433\u043E\u043B\u044B\u043C \u0442\u043E\u0440\u0441\u043E\u043C. \u041A\u0443\u043F\u0438\u043B 007 \xAB\u0443 \u0442\u0438\u043F\u043E\u0432\xBB \u0437\u0430 390 \u20BD, \u043A\u043E\u0433\u0434\u0430 \u0434\u0438\u0441\u043A \u043D\u0430 \u0410\u0432\u0438\u0442\u043E \u0441\u0442\u043E\u0438\u0442 5000. \u0416\u0434\u0451\u0442 \u043D\u043E\u0432\u044B\u0439 \u0442\u0435\u043B\u0435\u043A.",quotes:["\u041E\u0447\u0435\u043D\u044C \u043F\u043B\u043E\u0445\u043E\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435. \u041E\u043D\u043E \u043C\u043D\u0435 \u043E\u0447\u0435\u043D\u044C \u043D\u0435 \u043D\u0440\u0430\u0432\u0438\u0442\u0441\u044F","\u042F \u043A\u0443\u043F\u0438\u043B \u0437\u0430 390\u{1F602}","\u0414\u0438\u0441\u043A \u043D\u0430 \u0430\u0432\u0438\u0442\u043E \u0441\u0442\u043E\u0438\u0442 5000 \u0440\u0443\u0431","\u041F\u043E\u0442\u0435\u0440\u043F\u0438 \u0447\u0443\u0442\u044C-\u0447\u0443\u0442\u044C!! \u041E\u043D\u043E \u0441\u0442\u043E\u0438\u0442 \u0442\u043E\u0433\u043E \u0432 20 \u043A\u0440\u0430\u0442","\u041B\u0435\u0442\u0441 \u0433\u043E\u0443 \u043D\u0430\u0445\u0443\u0439","\u0412 \u0441\u0431 \u043F\u0440\u0438\u0435\u0434\u0435\u0442 \u043D\u043E\u0432\u044B\u0439 \u0442\u0435\u043B\u0435\u043A \u0438 \u044F \u0437\u0430\u0441\u044F\u0434\u0443 \u043D\u0430 \u043C\u0435\u0441\u044F\u0446)))","\u041C\u0435\u043D\u044F \u0440\u0430\u0437\u044A\u0435\u0431\u044B\u0432\u0430\u0435\u0442 \u043F\u0437\u0434\u0446","\u0411\u0435\u0440\u0438 \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0443 \u0438 \u043D\u0435 \u0435\u0431\u0438 \u043C\u043E\u0437\u0433\u0438"]},{id:"dima",name:"\u0414\u043C\u0418\u0418\u0442\u0440\u0438\u0439",css:"#5d6b8a",tag:"\u0421\u0434\u0435\u043B\u0430\u043B \u044D\u0442\u0443 \u0438\u0433\u0440\u0443 \u043D\u0435\u0439\u0440\u043E\u0441\u0435\u0442\u044C\u044E",desc:"\u0421\u0438\u043B\u0443\u044D\u0442 \u0441 \u0440\u044E\u043A\u0437\u0430\u043A\u043E\u043C \u0432 \u0442\u0443\u043C\u0430\u043D\u0435. \u0417\u043E\u0432\u0451\u0442 \u0432\u0441\u0435\u0445 \xAB\u043D\u0430 \u0432\u043E\u0439\u043D\u0443\xBB \u2014 \u043D\u0438\u043A\u0442\u043E \u043D\u0435 \u043F\u0440\u0438\u0445\u043E\u0434\u0438\u0442. \u041A\u0438\u043D\u043E\u0442\u0435\u0430\u0442\u0440 11.1.4. \u041F\u0440\u043E\u0434\u0430\u0451\u0442 VR2.",quotes:["\u0414\u0430\u0432\u043D\u043E \u043D\u0435 \u0432\u043E\u0435\u0432\u0430\u043B\u0438)","\u0413\u043E\u0443 \u0432\u0441\u0435 \u043D\u0430 \u0432\u043E\u0439\u043D\u0443","11.1.4","\u041A\u0430\u043A\u0430\u044F \u0442\u043E \u043C\u0430\u0433\u0438\u044F) \u0445\u0437","\u041F\u043E\u0442\u043E\u043C \u043F\u043E\u043A\u0430\u0436\u0443)","\u042D\u0442\u043E \u0443\u0436\u0435 \u043D\u043E\u0432\u0430\u044F \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u044C)","\u0420\u0435\u0448\u0438\u043B \u043F\u0440\u043E\u0434\u0430\u0442\u044C VR2. \u0415\u0441\u043B\u0438 \u043A\u043E\u043C\u0443 \u043D\u0443\u0436\u043D\u043E \u2014 \u043F\u0438\u0448\u0438\u0442\u0435","\u0422\u043E\u0436\u0435 \u0441\u043A\u043E\u0440\u043E \u0441\u0434\u0435\u043B\u0430\u044E)"]},{id:"igor",name:"\u0418\u0433\u043E\u0440\u044C",css:"#e8e8e8",tag:"144 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438. \u0427\u0435\u0442\u0432\u0451\u0440\u0442\u044B\u0439 \u0440\u0430\u0437",desc:"\u0427\u0451\u0440\u043D\u043E-\u0431\u0435\u043B\u044B\u0439 \u0440\u0430\u043A \u0441 \u043C\u043E\u043D\u043E\u0433\u0440\u0430\u043C\u043C\u043E\u0439. \u0421\u043E\u0431\u0438\u0440\u0430\u0435\u0442 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438, \u043F\u0435\u0440\u044C\u044F \u0446\u0430\u043F\u0435\u043B\u044C \u0438 \u043E\u0440\u0445\u0438\u0434\u0435\u0438. \u0417\u0430\u0432\u0451\u043B \u043D\u043E\u0432\u044B\u0439 \u0430\u043A\u043A\u0430\u0443\u043D\u0442, \u0447\u0442\u043E\u0431\u044B \u0437\u0430\u043A\u0440\u044B\u0442\u044C \u0432\u0441\u0451 \u043D\u0430 100% \u0437\u0430\u043D\u043E\u0432\u043E.",quotes:["\u041C\u043D\u0435 144 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438 \u043D\u0430\u0434\u043E \u043D\u0430\u0439\u0442\u0438","\u041D\u0435\u0434\u0435\u043B\u044E \u0435\u0431\u0443\u0447\u0438\u0445 \u043F\u0442\u0438\u0446 \u0441\u043E\u0431\u0438\u0440\u0430\u043B\u{1F613}","\u0411\u0430\u0442\u043B\u0430\u2026 \u043F\u0438\u0437\u0434\u0430\u0442\u0430\u044F!!!","\u0411\u0430\u0442\u043B\u0430 \u2026 \u0437\u0430\u043B\u0443\u043F\u0430 \u043F\u043E\u043B\u043D\u0430\u044F!!!","\u0414\u0438\u043C\u0430\u043D \u0421\u043E\u0440\u044F\u043D\u2026 \u044F \u0447\u0435\u0442 \u043F\u0440\u043E\u0435\u0431\u0430\u043B\u0441\u044F","\u0421\u0435\u0439\u0447\u0430\u0441 \u0438\u0433\u0440\u0430\u044E\u2026 \u044F \u0441\u0447\u0430\u0441\u0442\u043B\u0438\u0432","\u0412\u0430\u044F\u044F\u044F\u044F\u{1F979}\u{1F60D}","\u042D\u0442\u043E \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u0430\u044F \u0438\u0433\u0440\u0430"]},{id:"geisler",name:"\u0413\u0430\u0439\u0441\u043B\u0435\u0440",css:"#b0407a",tag:"\u041A\u0430\u043A \u0440\u0430\u0437 \u043A 19-\u043C\u0443 \u0434\u043E\u043A\u0430\u0447\u0430\u0435\u0442\u0441\u044F",desc:"\u0420\u0430\u043A \u0432\u043E \u0434\u0432\u043E\u0440\u0446\u0435 \u0441 \u043B\u044E\u0441\u0442\u0440\u0430\u043C\u0438. \u041A\u0430\u0447\u0430\u0435\u0442 \u0447\u0435\u0440\u0435\u0437 \u041C\u0435\u0433\u0430\u0444\u043E\u043D. \u0417\u043D\u0430\u0435\u0442 \u0432\u0441\u0451 \u043F\u0440\u043E \u041F2/\u041F3 \u0438 \u0443\u0434\u0438\u0432\u043B\u044F\u0435\u0442\u0441\u044F, \u043F\u043E\u0447\u0435\u043C\u0443 \u043B\u0430\u0432\u043E\u0447\u043A\u0443 \u0434\u043E \u0441\u0438\u0445 \u043F\u043E\u0440 \u043D\u0435 \u043F\u0440\u0438\u043A\u0440\u044B\u043B\u0438.",quotes:["\u041A\u0430\u043A \u0440\u0430\u0437 \u043A 19\u043C\u0443 \u0434\u043E\u043A\u0430\u0447\u0430\u0435\u0442\u0441\u044F \u{1F602}\u{1F602}","\u0411\u0430\u0442\u044F \u0432 \u0437\u0434\u0430\u043D\u0438\u0438!)","\u041C\u0435\u043D\u044F \u0443\u0434\u0438\u0432\u043B\u044F\u0435\u0442 \u043F\u043E\u0447\u0435\u043C\u0443 \u043F\u0441 \u0434\u043E \u0441\u0438\u0445 \u043F\u043E\u0440 \u044D\u0442\u0443 \u043B\u0430\u0432\u043E\u0447\u043A\u0443 \u043D\u0435 \u043F\u0440\u0438\u043A\u0440\u044B\u043B\u0438))","\u041E\u0434\u043D\u0430 \u043B\u0438\u0446\u0435\u043D\u0437\u0438\u044F \u043C\u0430\u043A\u0441\u0438\u043C\u0443\u043C \u043D\u0430 3 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0430 \u0434\u0435\u043B\u0438\u0442\u0441\u044F","\u0418\u0433\u043E\u0440\u044C \u0442\u044B \u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0440\u0430\u0437 \u0440\u0434\u0440 \u043F\u0440\u043E\u0448\u0435\u043B? 7?)","\u0422\u044B \u0438\u0445 \u0443\u0436\u0435 \u043D\u0430\u0445\u043E\u0434\u0438\u043B, \u043D\u043E \u043F\u0440\u043E\u0441\u0442\u043E \u043D\u0435 \u043F\u043E\u043C\u043D\u0438\u0448\u044C \u043A\u0443\u0434\u0430 \u0441\u043B\u043E\u0436\u0438\u043B)"]},{id:"pasha",name:"\u041F\u0430\u0448\u0430",css:"#d9a520",tag:"\u041A\u0440\u043E\u043C\u0435 LOA \u0438 RDR \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u0437\u0430\u0435\u0431\u0438\u0441\u044C",desc:"\u0417\u043E\u043B\u043E\u0442\u043E\u0439 \u0440\u0430\u043A \u0432 \u0441\u0442\u0438\u043B\u0435 \u041A\u043B\u0438\u043C\u0442\u0430. \u0421\u043B\u0435\u0434\u0438\u0442 \u0437\u0430 \u0441\u043B\u0438\u0432\u0430\u043C\u0438 \u0438 \u043F\u0435\u0440\u0435\u043D\u043E\u0441\u0430\u043C\u0438 \u043F\u0440\u0435\u0434\u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438. \u0425\u043E\u0447\u0435\u0442 \u043D\u0430\u0447\u0430\u0442\u044C BG3, \u043D\u043E \u0431\u043E\u0438\u0442\u0441\u044F.",quotes:["\u0414\u043B\u044F \u043C\u0435\u043D\u044F \u043A\u0440\u043E\u043C\u0435 LOA \u0438 RDR \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u0437\u0430\u0435\u0431\u0438\u0441\u044C\u{1F612}","BG3 \u0445\u043E\u0447\u0443 \u043D\u0430\u0447\u0430\u0442\u044C, \u043D\u043E \u0431\u043E\u044E\u0441\u044C","\u041F\u0440\u043E \u0441\u043B\u0438\u0432\u044B \u0432 \u043A\u0443\u0440\u0441\u0435? \u041F\u0438\u0437\u0434\u0435\u0446 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u0430\u044F \u0445\u0443\u0439\u043D\u044F)","\u041F\u0435\u0440\u0435\u043D\u0435\u0441\u043B\u0438 \u0441 12-\u043E\u0433\u043E \u043D\u0430 10","\u0421\u043A\u043E\u0440\u0435\u0435 \u0431\u044B","Extra \u0431\u0435\u0440\u0438"]},{id:"nikita",name:"\u041D\u0438\u043A\u0438\u0442\u0430",css:"#3a3a44",tag:"\xAB\u0427\u0442\u043E \u044D\u0442\u043E?\xBB",desc:"\u0422\u0451\u043C\u043D\u044B\u0435 \u043E\u0447\u043A\u0438. \u041F\u043E\u043F\u0430\u043B \u0432 \u0447\u0430\u0442 \u0441\u043B\u0443\u0447\u0430\u0439\u043D\u043E, \u043D\u0430 \u0440\u0435\u043B\u0438\u0437 \u0435\u043C\u0443 \u0432\u043E\u043E\u0431\u0449\u0435 \u043F\u043E\u0435\u0431\u0430\u0442\u044C. \u0417\u0430\u0442\u043E \u0441\u0430\u043C \u0441\u0434\u0435\u043B\u0430\u043B \u043D\u0435\u0439\u0440\u043E\u0441\u0435\u0442\u044C\u044E \u0442\u0440\u0438 \u0438\u0433\u0440\u044B. \u041E\u043F\u044B\u0442 \u2014 Tekken \u0441 \u0434\u0435\u0442\u044C\u043C\u0438.",quotes:["\u0427\u0442\u043E \u044D\u0442\u043E?","\u041C\u043D\u0435 \u0432\u043E\u043E\u0431\u0449\u0435 \u043F\u043E\u0435\u0431\u0430\u0442\u044C \u043D\u0430 \u043D\u043E\u0432\u0443\u044E \u0413\u0422\u0410","\u042F, \u043A\u0441\u0442\u0430\u0442\u0438, \u0442\u043E\u0436\u0435 \u2014 3 \u0438\u0433\u0440\u0443 \u0443\u0436\u0435 \u0441\u0434\u0435\u043B\u0430\u043B\u{1F601}","\u041C\u043E\u0439 \u043E\u043F\u044B\u0442 \u2014 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0431\u043E\u0435\u0432 \u0441 \u0434\u0435\u0442\u044C\u043C\u0438 \u0432 \u0442\u0435\u0439\u043A\u0435\u043D","\u042D\u0442\u043E \u0447\u0442\u043E \u0437\u0430 \u043F\u0438\u0437\u0434\u0435\u0446???!!! \u{1F62D}","\u0410 \u044D\u0442\u043E \u0441\u0438\u043B\u044C\u043D\u0430\u044F \u0448\u0442\u0443\u0447\u043A\u0430?","\u0422\u0430\u043A \u0438 \u043F\u043E\u0434\u0443\u043C\u0430\u043B"]},{id:"kos",name:"\u041A\u043E\u0441",css:"#2f8fdc",tag:"\u041D\u0430 \u0421\u0435\u0440\u0433\u0435\u044F \u0441\u0442\u043E\u043B\u0438\u043A",desc:"\u0421\u0438\u043D\u0438\u0439 \u043A\u0440\u0443\u0436\u043E\u043A \xAB\u0421\u041A\xBB. \u0424\u0430\u043D\u0430\u0442 \u0421\u0442\u0430\u043B\u043A\u0435\u0440\u0430 \u0438 \u0412\u0435\u0434\u044C\u043C\u0430\u043A\u0430. \u041F\u0440\u043E\u0441\u044B\u043F\u0430\u0435\u0442\u0441\u044F \u0432 5 \u0443\u0442\u0440\u0430, \u043F\u043E\u0447\u0443\u0432\u0441\u0442\u0432\u043E\u0432\u0430\u0432, \u0447\u0442\u043E \u0432 \u0447\u0430\u0442\u0435 \u0437\u0430\u0433\u043E\u0432\u043E\u0440\u0438\u043B\u0438 \u043F\u0440\u043E \u0412\u0435\u0434\u044C\u043C\u0430\u043A\u0430.",quotes:["\u041D\u0430 \u0421\u0435\u0440\u0433\u0435\u044F \u0441\u0442\u043E\u043B\u0438\u043A","\u041F\u0440\u043E\u0441\u043D\u0443\u043B\u0441\u044F \u043F\u0440\u043E\u0441\u0442\u043E, \u0447\u0443\u0432\u0441\u0442\u0432\u0443\u044E \u043F\u0440\u043E \u0432\u0435\u0434\u044C\u043C\u0430\u043A\u0430 \u043F\u043E\u0448\u0435\u043B \u0440\u0430\u0437\u0433\u043E\u0432\u043E\u0440)","\u042F \u043A\u0441\u0442\u0430\u0442\u0438 \u0443\u0434\u0438\u0432\u043B\u0435\u043D, \u0447\u0442\u043E \u0437\u0434\u0435\u0441\u044C \u0442\u043E\u043B\u044C\u043A\u043E \u043C\u044B \u0441 \u0442\u043E\u0431\u043E\u0439 \u0444\u0430\u043D\u0430\u0442\u044B \u0441\u0442\u0430\u043B\u043A\u0435\u0440\u0430","\u0422\u043E \u043B\u0438 \u0434\u0435\u043B\u043E \u044D\u0442\u0438 \u043C\u0430\u043B\u043E\u043C\u043E\u0449\u043D\u044B\u0435 \u043A\u043E\u043D\u0441\u043E\u043B\u0438)","\u0411\u0438\u043D\u043E\u043A\u043B\u044C \u0433\u043E\u0432\u043E\u0440\u044F\u0442 \u0434\u043E\u0431\u0430\u0432\u0438\u043B\u0438?)","\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0438\u043C \u043F\u043E\u0441\u043C\u043E\u0442\u0440\u0438\u043C"]},{id:"artem",name:"\u0410\u0440\u0442\u0451\u043C",css:"#4cb84a",tag:"\u0411\u043E\u0436\u0435, \u0445\u0440\u0430\u043D\u0438 \u043F\u0438\u0440\u0430\u0442\u043E\u0432, \u0430\u043C\u0438\u043D\u044C",desc:"\u0417\u0435\u043B\u0451\u043D\u044B\u0439 \u043A\u0440\u0443\u0436\u043E\u043A \xAB\u0410\u041A\xBB. \u0421\u043E\u0432\u0435\u0442\u0443\u0435\u0442 \u043F\u0440\u043E\u0445\u043E\u0434\u0438\u0442\u044C \u0441 \u043D\u0438\u0437\u043A\u043E\u0439 \u043C\u043E\u0440\u0430\u043B\u044C\u044E. \u0418\u0449\u0435\u0442, \u0433\u0434\u0435 \u043F\u043E\u0447\u0438\u0441\u0442\u0438\u0442\u044C PS5 \u043E\u0442 \u043F\u044B\u043B\u0438, \u043D\u043E \u0412\u0430\u0442\u0443\u0442\u0438\u043D\u0430 \u0434\u0430\u043B\u0435\u043A\u043E\u0432\u0430\u0442\u043E.",quotes:["\u0411\u043E\u0436\u0435, \u0445\u0440\u0430\u043D\u0438 \u043F\u0438\u0440\u0430\u0442\u043E\u0432, \u0430\u043C\u0438\u043D\u044C","\u0412\u0430\u0442\u0443\u0442\u0438\u043D\u0430 \u0434\u0430\u043B\u0435\u043A\u043E\u0432\u0430\u0442\u043E)))","\u041F\u0435\u0439 \u043F\u0438\u0432\u043E, \u0440\u0443\u043A\u0438 \u0434\u043E\u043B\u0436\u043D\u044B \u0431\u044B\u0442\u044C \u0432 \u0440\u044B\u0431\u0435, \u043D\u0435 \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0439 \u0434\u0443\u0448","\u041F\u0440\u043E\u0439\u0434\u0438 \u0441 \u043D\u0438\u0437\u043A\u043E\u0439 \u043C\u043E\u0440\u0430\u043B\u044C\u044E","\u0414\u0438\u043C\u0430\u043D, \u0431\u0435\u0440\u0435\u0433\u0438 \u0441\u0435\u0431\u044F","\u0422\u0430\u043A \u043D\u0430\u0445\u0435\u0440 \u043F2?","\u0422\u044B \u0440\u0435\u0430\u043B\u044C\u043D\u043E \u0414\u043C\u0418\u0418\u0442\u0440\u0438\u0439\u{1F91D}"]},{id:"sanya",name:"\u0421\u0430\u043D\u044F",css:"#9a9a9a",tag:"\u041D\u0430\u0447\u0430\u043B\u043E \u0442\u044F\u0433\u043E\u043C\u043E\u0442\u043D\u043E\u0435",desc:"\u0427\u0451\u0440\u043D\u043E-\u0431\u0435\u043B\u044B\u0439 \u0431\u043E\u0440\u043E\u0434\u0430\u0442\u044B\u0439 \u0440\u0430\u043A. \u041D\u0435 \u043E\u0441\u0438\u043B\u0438\u043B RDR2, \u043F\u043E\u0442\u043E\u043C\u0443 \u0447\u0442\u043E \u043D\u0430\u0447\u0430\u043B\u043E \u043C\u0435\u0434\u043B\u0435\u043D\u043D\u043E\u0435. \u0414\u043E\u043A\u0443\u043F\u0438\u043B \u043E\u043F\u0435\u0440\u0430\u0442\u0438\u0432\u043A\u0438 \u0432 \u043D\u043E\u0443\u0442 \u0440\u0430\u0434\u0438 \u0412\u0435\u0434\u044C\u043C\u0430\u043A\u0430.",quotes:["\u041E\u043D\u0430 \u0432\u043D\u0430\u0447\u0430\u043B\u0435 \u0434\u0438\u043A\u043E \u043C\u0435\u0434\u043B\u0435\u043D\u043D\u0430\u044F","\u0412\u043E\u0442 \u0434\u0430, \u0438\u043C\u0435\u043D\u043D\u043E \u0442\u0430\u043A, \u0442\u044F\u0433\u043E\u043C\u043E\u0442\u043D\u0430\u044F","\u041F\u0440\u0438\u0448\u043B\u043E\u0441\u044C \u043E\u043F\u0435\u0440\u0430\u0442\u0438\u0432\u043A\u0438 \u0434\u043E\u043A\u0443\u043F\u0438\u0442\u044C, \u0447\u0442\u043E\u0431\u044B \u0433\u0440\u0430\u0444\u0438\u043A\u0430 \u043D\u043E\u0440\u043C \u0431\u044B\u043B\u0430\u{1F605}","\u041D\u0443, \u0434\u0430\u043C \u0435\u0439 \u0432\u0442\u043E\u0440\u043E\u0439 \u0448\u0430\u043D\u0441, \u043A\u0430\u043A \u0431\u0443\u0434\u0435\u0442 \u0441\u0432\u043E\u0431\u043E\u0434\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F )"]},{id:"misha",name:"\u041C\u0438\u0448\u0430",css:"#d8623a",tag:"\u0411\u0430\u0442\u044F \u0432 \u0437\u0434\u0430\u043D\u0438\u0438!",desc:"\u0422\u043E\u043B\u044C\u043A\u043E \u043A\u0443\u043F\u0438\u043B PS5. \u0412\u0440\u0435\u043C\u0435\u043D\u0438 \u0438\u0433\u0440\u0430\u0442\u044C \u043D\u0435\u0442. \u0421\u043F\u0440\u043E\u0441\u0438\u043B \u043F\u0440\u043E \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0443 \u2014 \u043F\u043E\u043B\u0443\u0447\u0438\u043B \u0448\u0435\u0441\u0442\u044C \u0432\u0437\u0430\u0438\u043C\u043E\u0438\u0441\u043A\u043B\u044E\u0447\u0430\u044E\u0449\u0438\u0445 \u0441\u043E\u0432\u0435\u0442\u043E\u0432.",quotes:["\u0414\u0430 \u043F\u043E\u043A\u0430 \u043D\u0438\u043A\u0430\u043A, \u0432\u0440\u0435\u043C\u0435\u043D\u0438 \u0442\u0443\u043F\u043E \u043D\u0435\u0442 (","\u0412\u043E\u0442 \u0442\u0430\u043A \u0430\u0433\u0430","\u041E\u043A, \u0441\u043F\u0430\u0441\u0438\u0431\u043E!","\u041E\u0433\u043E\u043D\u044C, 2590 \u0433\u043E\u0434\u043D\u043E \u0434\u043B\u044F \u041D\u0441\u043A\u{1F602}"]}],or=Object.fromEntries(bn.map(i=>[i.id,i])),wo={arkasha:{giver:"arkasha",title:"212 \u0413\u0411",reward:500,par:55,intro:[["arkasha","212 \u0433\u0431, \u0430\u0445\u0443\u0435\u0442\u044C"],["arkasha","\u0414\u0430 \u0431\u043B\u044F, \u0432 \u043F\u04415 \u0432\u0441\u0435\u0433\u043E 640\u0433\u0431 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E"],["arkasha","@P, \u043F\u043E\u0434\u044A\u0435\u0437\u0436\u0430\u0439 \u043A \u041E\u043F\u0435\u0440\u043D\u043E\u043C\u0443. \u041D\u0430\u0434\u043E \u043C\u0435\u0441\u0442\u043E \u043E\u0441\u0432\u043E\u0431\u043E\u0434\u0438\u0442\u044C"]],steps:[{pts:["arkasha"],text:"\u041A \u041E\u043F\u0435\u0440\u043D\u043E\u043C\u0443: \u0410\u0440\u043A\u0430\u0448\u0435 \u043D\u0435 \u0445\u0432\u0430\u0442\u0430\u0435\u0442 212 \u0413\u0411"},{choice:{title:"\u041D\u0435 \u0445\u0432\u0430\u0442\u0430\u0435\u0442 212 \u0413\u0411",text:"\u0423 \u0410\u0440\u043A\u0430\u0448\u0438 \u043D\u0430 PS5 \u043A\u043E\u043D\u0447\u0438\u043B\u043E\u0441\u044C \u043C\u0435\u0441\u0442\u043E. \u0427\u0435\u043C \u0436\u0435\u0440\u0442\u0432\u0443\u0435\u043C?",opts:[{label:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0412\u0435\u0434\u044C\u043C\u0430\u043A\u0430",say:[["arkasha","\u0412\u0435\u0434\u044C\u043C\u0430\u043A\u0430 \u043F\u0440\u0438\u0434\u0435\u0442\u0441\u044F \u0443\u0434\u0430\u043B\u0438\u0442\u044C\u{1F601}\u{1F601}"],["kos","\u041F\u0440\u043E\u0441\u043D\u0443\u043B\u0441\u044F \u043F\u0440\u043E\u0441\u0442\u043E, \u0447\u0443\u0432\u0441\u0442\u0432\u0443\u044E \u043F\u0440\u043E \u0432\u0435\u0434\u044C\u043C\u0430\u043A\u0430 \u043F\u043E\u0448\u0435\u043B \u0440\u0430\u0437\u0433\u043E\u0432\u043E\u0440)"],["kos","\u0412\u044B \u0447\u0451 \u0442\u0430\u043C \u0443\u0434\u0430\u043B\u044F\u0435\u0442\u0435??"]],flag:"witcher"},{label:"\u0421\u0433\u043E\u043D\u044F\u0442\u044C \u0437\u0430 SSD",bonus:600,say:[["arkasha","\u0412\u0435\u0434\u044C\u043C\u0430\u043A \u043A\u043E\u043D\u0435\u0447\u043D\u043E \u043B\u0435\u0433\u0435\u043D\u0434\u0430. \u0413\u043E\u043D\u0438 \u0432 \xAB\u0422\u0435\u0445\u043D\u043E\u0420\u0430\u043A\xBB, \u043E\u043D \u0437\u0430 \u041E\u043F\u0435\u0440\u043D\u044B\u043C"]],add:[{pts:["shop"],text:"\u0422\u0426 \xAB\u0422\u0435\u0445\u043D\u043E\u0420\u0430\u043A\xBB: \u0437\u0430\u0431\u0435\u0440\u0438 SSD"},{pts:["arkasha"],text:"\u0412\u0435\u0437\u0438 SSD \u0410\u0440\u043A\u0430\u0448\u0435"}]}]}}],outro:[["arkasha","\u0417\u0431\u0441. \u0412\u043B\u0435\u0437\u043B\u043E"],["arkasha","\u0412\u0441\u0435 \u0442\u0430\u043A, \u0442\u043E\u043B\u044C\u043A\u043E \u043D\u0430\u043E\u0431\u043E\u0440\u043E\u0442"]]},dima:{giver:"dima",title:"\u041D\u0430 \u0432\u043E\u0439\u043D\u0443",reward:700,par:60,intro:[["dima","\u0414\u0430\u0432\u043D\u043E \u043D\u0435 \u0432\u043E\u0435\u0432\u0430\u043B\u0438)"],["dima","\u0413\u043E\u0443 \u0432\u0441\u0435 \u043D\u0430 \u0432\u043E\u0439\u043D\u0443. \u041D\u043E\u0432\u0430\u044F \u043A\u0430\u0440\u0442\u0430, \u043C\u043E\u0436\u043D\u043E \u0434\u0430\u0436\u0435 \u0431\u0435\u0437 \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0438"],["dima","@P, \u0441\u043E\u0431\u0435\u0440\u0438 \u043D\u0430\u0440\u043E\u0434. \u041E\u0431\u044A\u0435\u0434\u044C \u0442\u0440\u043E\u0438\u0445"]],steps:[{raki:3,text:"\u041F\u043E\u0437\u043E\u0432\u0438 \u0442\u0440\u043E\u0438\u0445 \u043D\u0430 \u0432\u043E\u0439\u043D\u0443"},{pts:["dima"],text:"\u0412\u0435\u0440\u043D\u0438\u0441\u044C \u043A \u0414\u043C\u0418\u0418\u0442\u0440\u0438\u044E \u043D\u0430 \u043D\u0430\u0431\u0435\u0440\u0435\u0436\u043D\u0443\u044E"}],outro:[["dima","Go!"],["sys","\u041D\u0430 \u0432\u043E\u0439\u043D\u0443 \u043F\u0440\u0438\u0448\u043B\u043E: 0 \u0438\u0437 3. \u041A\u0430\u043A \u043E\u0431\u044B\u0447\u043D\u043E."],["igor","\u0414\u0438\u043C\u0430\u043D \u0421\u043E\u0440\u044F\u043D\u2026 \u044F \u0447\u0435\u0442 \u043F\u0440\u043E\u0435\u0431\u0430\u043B\u0441\u044F"]]},max:{giver:"max",title:"\u0414\u0438\u0441\u043A \u0437\u0430 390 \u20BD",reward:900,par:75,intro:[["max",{voice:12}],["max",{voice:7}],["max",{voice:31}],["max","\u041A\u043E\u0440\u043E\u0447\u0435. \u0417\u0430\u0431\u0435\u0440\u0438 \u0443 \u0442\u0438\u043F\u043E\u0432 \u0432 \u0433\u0430\u0440\u0430\u0436\u0430\u0445 007. \u0417\u0430 390. \u0414\u0438\u0441\u043A \u043D\u0430 \u0430\u0432\u0438\u0442\u043E \u0441\u0442\u043E\u0438\u0442 5000 \u0440\u0443\u0431\u{1F602}"]],steps:[{pts:["garage"],text:"\u0413\u0430\u0440\u0430\u0436\u0438 \u043D\u0430 \u043B\u0435\u0432\u043E\u043C \u0431\u0435\u0440\u0435\u0433\u0443: \u0437\u0430\u0431\u0435\u0440\u0438 \u0434\u0438\u0441\u043A \u0443 \u0442\u0438\u043F\u043E\u0432",say:[["sys","\u0422\u0438\u043F: \xAB\u041F2 \u0438\u043B\u0438 \u041F3?\xBB \u2014 \xAB\u0414\u0430\xBB. \u041A\u0443\u043F\u043B\u0435\u043D\u043E \u0437\u0430 390 \u20BD"],["beam","\u26A1\uFE0F \u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C \u0432 Beam Store! \u041C\u044B \u043F\u043E\u043B\u0443\u0447\u0438\u043B\u0438 \u0432\u0430\u0448\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435. \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043E\u0436\u0438\u0434\u0430\u0439\u0442\u0435 \u{1F3AE}"],["sys","\u{1F6A8} \u041C\u043E\u0434\u0435\u0440\u0430\u0442\u043E\u0440\u044B PlayStation \u0437\u0430\u043C\u0435\u0442\u0438\u043B\u0438 \u043E\u0431\u0449\u0438\u0439 \u0430\u043A\u043A\u0430\u0443\u043D\u0442"]],wanted:26},{pts:["max"],text:"\u041E\u0442\u0432\u0435\u0437\u0438 \u0434\u0438\u0441\u043A \u041C\u0430\u043A\u0441\u0443. \u0418 \u043E\u0442\u043E\u0440\u0432\u0438\u0441\u044C \u043E\u0442 \u043C\u043E\u0434\u0435\u0440\u0430\u0442\u043E\u0440\u043E\u0432"}],outro:[["max","\u0412\u044D\u0440\u0438 \u0433\u0443\u0434!!! \u0417\u0431\u0441"],["max","\u042F \u0447\u0435-\u0442 \u0434\u0443\u043C\u0430\u043B, \u0447\u0442\u043E \u041F3 \u043D\u0430\u043E\u0431\u043E\u0440\u043E\u0442 \u0445\u0443\u0436\u0435 \u0438 \u0434\u0435\u0448\u0435\u0432\u043B\u0435"],["arkasha","\u0412\u0441\u0435 \u0442\u0430\u043A, \u0442\u043E\u043B\u044C\u043A\u043E \u043D\u0430\u043E\u0431\u043E\u0440\u043E\u0442"]]},geisler:{giver:"geisler",title:"\u041A\u0430\u043A \u0440\u0430\u0437 \u043A 19-\u043C\u0443",reward:900,par:80,intro:[["geisler","\u0425\u0437 \u0447\u0435 \u0442\u043E \u043C\u0435\u0433\u0430\u0444\u043E\u043D \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F \u043E\u0447\u0435\u043D\u044C \u043F\u043B\u043E\u0445\u043E \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442.."],["geisler","\u041A\u0430\u043A \u0440\u0430\u0437 \u043A 19\u043C\u0443 \u0434\u043E\u043A\u0430\u0447\u0430\u0435\u0442\u0441\u044F \u{1F602}\u{1F602}"],["dima","\u0423 \u0442\u0435\u0431\u044F \u043C\u043E\u0434\u0435\u043C \u0447\u0435\u0440\u0435\u0437 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u043D\u0443\u044E \u043B\u0438\u043D\u0438\u044E?)"],["geisler","@P, \u043F\u043D\u0438 \u0442\u0440\u0438 \u0432\u044B\u0448\u043A\u0438, \u0430? \u041C\u043E\u0436\u0435\u0442 \u0431\u044B\u0441\u0442\u0440\u0435\u0435 \u043F\u043E\u0439\u0434\u0451\u0442"]],steps:[{pts:["tower2","tower1","tower3"],text:"\u041F\u043D\u0438 \u0442\u0440\u0438 \u0432\u044B\u0448\u043A\u0438 \u0441\u0432\u044F\u0437\u0438",each:"\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0443 \u0413\u0430\u0439\u0441\u043B\u0435\u0440\u0430: "}],outro:[["geisler","\u041E, 97%. \u041E\u0441\u0442\u0430\u043B\u044C\u043D\u043E\u0435 \u043A\u0430\u043A \u0440\u0430\u0437 \u043A 19\u043C\u0443 \u0434\u043E\u043A\u0430\u0447\u0430\u0435\u0442\u0441\u044F"],["max","\u0423 \u043C\u0435\u043D\u044F 500 \u043C\u0431\u0438\u0442/\u0441\u0435\u043A, \u0434\u043E\u0432\u043E\u043B\u044C\u043D\u043E \u0431\u044B\u0441\u0442\u0440\u043E \u0441\u043A\u0430\u0447\u0430\u043B\u043E\u0441\u044C"]]},kos:{giver:"kos",title:"\u0417\u043E\u043D\u0430",reward:1100,par:75,intro:[["kos","\u042F \u043A\u0441\u0442\u0430\u0442\u0438 \u0443\u0434\u0438\u0432\u043B\u0435\u043D, \u0447\u0442\u043E \u0437\u0434\u0435\u0441\u044C \u0442\u043E\u043B\u044C\u043A\u043E \u043C\u044B \u0441 \u0442\u043E\u0431\u043E\u0439 \u0444\u0430\u043D\u0430\u0442\u044B \u0441\u0442\u0430\u043B\u043A\u0435\u0440\u0430"],["kos","@P, \u043F\u0440\u0438\u0435\u0437\u0436\u0430\u0439 \u0432 \u043F\u0440\u043E\u043C\u0437\u043E\u043D\u0443. \u0412 \u0417\u043E\u043D\u0443 \u043D\u0430 \u043C\u0430\u0448\u0438\u043D\u0435 \u043D\u0435\u043B\u044C\u0437\u044F, \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u0435\u0448\u043A\u043E\u043C"],["kos","\u0410\u0440\u0442\u0435\u0444\u0430\u043A\u0442 \u0432 \u0434\u0430\u043B\u044C\u043D\u0435\u043C \u0443\u0433\u043B\u0443. \u0412 \u0430\u043D\u043E\u043C\u0430\u043B\u0438\u0438 \u043D\u0435 \u043B\u0435\u0437\u044C"]],steps:[{pts:["gate"],text:"\u041F\u0440\u043E\u043C\u0437\u043E\u043D\u0430: \u043A \u0432\u043E\u0440\u043E\u0442\u0430\u043C \u0417\u043E\u043D\u044B"},{pts:["artifact"],foot:!0,r:2.5,text:"\u041F\u0435\u0448\u043A\u043E\u043C: \u0434\u043E\u0441\u0442\u0430\u043D\u044C \u0430\u0440\u0442\u0435\u0444\u0430\u043A\u0442, \u043E\u0431\u0445\u043E\u0434\u0438 \u0430\u043D\u043E\u043C\u0430\u043B\u0438\u0438",say:[["sys","\u0410\u0440\u0442\u0435\u0444\u0430\u043A\u0442 \xAB\u041F\u043B\u043E\u0442\u0432\u0430\xBB \u0443 \u0442\u0435\u0431\u044F"],["kos","\u0411\u0438\u043D\u043E\u043A\u043B\u044C \u0433\u043E\u0432\u043E\u0440\u044F\u0442 \u0434\u043E\u0431\u0430\u0432\u0438\u043B\u0438?)"]]},{pts:["kos"],text:"\u041E\u0442\u043D\u0435\u0441\u0438 \u0430\u0440\u0442\u0435\u0444\u0430\u043A\u0442 \u041A\u043E\u0441\u0443"}],outro:[["kos","\u041D\u0430 \u0421\u0435\u0440\u0433\u0435\u044F \u0441\u0442\u043E\u043B\u0438\u043A"],["sys","\u0421\u0442\u043E\u043B\u0438\u043A \u0437\u0430\u0431\u0440\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u043D. \u0421\u0442\u043E\u0439\u043C\u044F \u043D\u0435 \u043F\u0440\u0438\u0434\u0451\u0442\u0441\u044F"]]},nikita:{giver:"nikita",title:"\u0418\u0433\u0440\u0430 \u043C\u0435\u0447\u0442\u044B",reward:700,par:45,intro:[["nikita","\u044F, \u043A\u0441\u0442\u0430\u0442\u0438, \u0442\u043E\u0436\u0435 - 3 \u0438\u0433\u0440\u0443 \u0443\u0436\u0435 \u0441\u0434\u0435\u043B\u0430\u043B\u{1F601}"],["nikita","\u0412\u043E\u043F\u043B\u043E\u0449\u0430\u044E \u0432\u0441\u0435 \u0444\u0430\u043D\u0442\u0430\u0437\u0438\u0438 \u043A\u0430\u043A\u043E\u0439 \u0434\u043E\u043B\u0436\u043D\u0430 \u0431\u044B\u0442\u044C \u0438\u0433\u0440\u0430 \u043C\u0435\u0447\u0442\u044B\u{1F601}"],["nikita","@P, \u043F\u043E\u0434\u044A\u0435\u0437\u0436\u0430\u0439, \u043F\u043E\u043A\u0430\u0436\u0443. \u0422\u0430\u043C 4 \u0440\u0430\u0441\u044B \u0438 AI \u043F\u0440\u043E\u0442\u0438\u0432\u043D\u0438\u043A"]],steps:[{pts:["nikita"],text:"\u041A \u041D\u0438\u043A\u0438\u0442\u0435: \u043E\u043D \u0441\u0434\u0435\u043B\u0430\u043B \u0438\u0433\u0440\u0443 \u043C\u0435\u0447\u0442\u044B",say:[["nikita","\u0432\u043E\u0442 \u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u043E\u0438\u0433\u0440\u0430\u0442\u044C:"],["sys","\u041D\u0438\u043A\u0438\u0442\u0430 \u0432\u043A\u043B\u044E\u0447\u0438\u043B \u0441\u0432\u043E\u044E \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u044E. \u0422\u0430\u0439\u043C\u0435\u0440 \u0434\u043E \u0440\u0435\u043B\u0438\u0437\u0430 \u043F\u0440\u0438 \u044D\u0442\u043E\u043C \u043D\u0435 \u043E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u043B\u0441\u044F"]]},{duel:!0}],outro:[["nikita","\u042D\u0442\u043E \u0447\u0442\u043E \u0437\u0430 \u043F\u0438\u0437\u0434\u0435\u0446???!!! \u{1F62D}"],["dima","\u0422\u043E\u0436\u0435 \u0441\u043A\u043E\u0440\u043E \u0441\u0434\u0435\u043B\u0430\u044E)"],["nikita","\u0434\u0438\u043C\u0430\u043D, \u043F\u043E\u043A\u0430 \u0437\u0430\u043A\u0430\u043F\u044B\u0432\u0430\u0435\u043C\u0441\u044F)"]],outroLost:[["nikita","AI \u043F\u0440\u043E\u0442\u0438\u0432\u043D\u0438\u043A 50% \u0438\u0433\u0440 \u043C\u0435\u043D\u044F \u0434\u0435\u043B\u0430\u0435\u0442, \u043A\u0430\u043A \u043C\u0430\u043B\u0435\u043D\u044C\u043A\u043E\u0433\u043E"],["igor","\u041D\u0438\u043A\u0438\u0442\u2026 \u043D\u0438\u0447\u0435\u0433\u043E \u0441\u0442\u0440\u0430\u0448\u043D\u043E\u0433\u043E) \u043D\u0435 \u043F\u0435\u0440\u0435\u0436\u0438\u0432\u0430\u0439 \u0438\u0437-\u0437\u0430 \u044D\u0442\u043E\u0433\u043E)"]]},pasha:{giver:"pasha",title:"\u041F\u0435\u0440\u0435\u043D\u043E\u0441 \u043F\u0440\u0435\u0434\u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438",reward:850,par:70,intro:[["pasha","\u041F\u0440\u043E \u0441\u043B\u0438\u0432\u044B \u0413\u0422\u0410 \u0432 \u043A\u0443\u0440\u0441\u0435? \u041F\u0438\u0437\u0434\u0435\u0446 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u0430\u044F \u0445\u0443\u0439\u043D\u044F)"],["pasha","\u041F\u0440\u0435\u0434\u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0443\u0436\u0435 \u0432 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u0432\u0442\u043E\u0440\u043D\u0438\u043A.."],["pasha","@P, \u0437\u0430\u0431\u0435\u0440\u0438 \u0441\u043B\u0438\u0432 \u0443 \u0438\u043D\u0441\u0430\u0439\u0434\u0435\u0440\u0430. \u041E\u043D \u043F\u043E\u0434 \u0431\u0438\u043B\u0431\u043E\u0440\u0434\u043E\u043C \u043D\u0430 \u043D\u0430\u0431\u0435\u0440\u0435\u0436\u043D\u043E\u0439"]],steps:[{pts:["leak1"],text:"\u0421\u043B\u0438\u0432: \u043F\u043E\u0434 \u0431\u0438\u043B\u0431\u043E\u0440\u0434\u043E\u043C \u043D\u0430 \u043D\u0430\u0431\u0435\u0440\u0435\u0436\u043D\u043E\u0439",say:[["pasha","\u041F\u0435\u0440\u0435\u043D\u0435\u0441\u043B\u0438 \u0441 12-\u043E\u0433\u043E \u043D\u0430 10"],["sys","\u0418\u043D\u0441\u0430\u0439\u0434\u0435\u0440 \u043F\u0435\u0440\u0435\u0435\u0445\u0430\u043B \u043A \u043A\u043E\u043B\u0435\u0441\u0443 \u043E\u0431\u043E\u0437\u0440\u0435\u043D\u0438\u044F"]],big:["\u041F\u0415\u0420\u0415\u041D\u0415\u0421\u041B\u0418","\u0441\u043B\u0438\u0432 \u0442\u0435\u043F\u0435\u0440\u044C \u0443 \u043A\u043E\u043B\u0435\u0441\u0430 \u043E\u0431\u043E\u0437\u0440\u0435\u043D\u0438\u044F"]},{pts:["leak2"],text:"\u041F\u0435\u0440\u0435\u043D\u0435\u0441\u043B\u0438: \u0441\u043B\u0438\u0432 \u0443 \u043A\u043E\u043B\u0435\u0441\u0430 \u043E\u0431\u043E\u0437\u0440\u0435\u043D\u0438\u044F",say:[["pasha","\u041D\u0443 \u043E\u0431\u0435\u0449\u0430\u044E\u0442 \u0431\u0435\u0437 \u043F\u0435\u0440\u0435\u043D\u043E\u0441\u043E\u0432"],["sys","\u041F\u0435\u0440\u0435\u043D\u0435\u0441\u043B\u0438 \u0435\u0449\u0451 \u0440\u0430\u0437. \u0422\u0435\u043F\u0435\u0440\u044C \u043A \u0447\u0430\u0441\u043E\u0432\u043D\u0435"]],big:["\u041E\u041F\u042F\u0422\u042C \u041F\u0415\u0420\u0415\u041D\u0415\u0421\u041B\u0418","\u0441\u043B\u0438\u0432 \u0442\u0435\u043F\u0435\u0440\u044C \u0443 \u0447\u0430\u0441\u043E\u0432\u043D\u0438"]},{pts:["leak3"],text:"\u041F\u0435\u0440\u0435\u043D\u0435\u0441\u043B\u0438: \u0441\u043B\u0438\u0432 \u0443 \u0447\u0430\u0441\u043E\u0432\u043D\u0438 \u043D\u0430 \u041A\u0440\u0430\u0441\u043D\u043E\u043C",say:[["sys","\u0424\u043B\u0435\u0448\u043A\u0430 \u0441\u043E \u0441\u043B\u0438\u0432\u043E\u043C \u0443 \u0442\u0435\u0431\u044F. \u041D\u0430 \u043D\u0435\u0439 212 \u0413\u0411"]]},{pts:["pasha"],text:"\u041E\u0442\u0432\u0435\u0437\u0438 \u0441\u043B\u0438\u0432 \u041F\u0430\u0448\u0435"},{choice:{title:"\u041F\u0430\u0448\u0430 \u043F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u043B \u0441\u043B\u0438\u0432",text:"\xAB\u041D\u0435 \u0437\u043D\u0430\u044E\u2026 \u043D\u0435 \u043F\u043E\u043D\u044F\u043B\u2026\xBB \u0427\u0435\u043C \u0435\u043C\u0443 \u0437\u0430\u043D\u044F\u0442\u044C\u0441\u044F \u0434\u043E \u043F\u043E\u043B\u0443\u043D\u043E\u0447\u0438?",opts:[{label:"\u041F\u0443\u0441\u0442\u044C \u043D\u0430\u0447\u043D\u0451\u0442 BG3",say:[["pasha","BG3 \u0445\u043E\u0447\u0443 \u043D\u0430\u0447\u0430\u0442\u044C, \u043D\u043E \u0431\u043E\u044E\u0441\u044C"],["kos","\u041A\u0430\u043A \u0436\u0435 \u0442\u0430\u043C \u043C\u043D\u043E\u0433\u043E \u043D\u0443\u0436\u043D\u043E \u0447\u0438\u0442\u0430\u0442\u044C \u0434\u0438\u0430\u043B\u043E\u0433\u043E\u0432\u{1F635}\u200D\u{1F4AB}"]]},{label:"\u041F\u0443\u0441\u0442\u044C \u0436\u0434\u0451\u0442 \u0434\u0430\u043B\u044C\u0448\u0435",say:[["pasha","\u0421\u043A\u043E\u0440\u0435\u0435 \u0431\u044B \u0413\u0422\u0410"],["max","\u0412 PS Store \u043D\u0430\u043F\u0438\u0441\u0430\u043D\u043E 19.11.26"]]}]}}],outro:[["pasha","\u041D\u0435 \u0437\u043D\u0430\u044E\u2026 \u043D\u0435 \u043F\u043E\u043D\u044F\u043B\u2026 \u0434\u043B\u044F \u043C\u0435\u043D\u044F \u043A\u0440\u043E\u043C\u0435 LOA \u0438 RDR \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u0437\u0430\u0435\u0431\u0438\u0441\u044C\u{1F612}"]]},artem:{giver:"artem",title:"\u0412\u0430\u0442\u0443\u0442\u0438\u043D\u0430 \u0434\u0430\u043B\u0435\u043A\u043E\u0432\u0430\u0442\u043E",reward:1200,par:90,intro:[["artem","\u041A\u0442\u043E \u0447\u0438\u0441\u0442\u0438\u043B \u043F\u04415? \u042F \u043F\u0440\u043E \u0447\u0438\u0441\u0442\u043A\u0443 \u0441\u0430\u043C\u043E\u0439 \u043A\u043E\u043D\u0441\u043E\u043B\u0438 \u043E\u0442 \u043F\u044B\u043B\u0438"],["arkasha",{voice:9}],["artem","\u0412\u0430\u0442\u0443\u0442\u0438\u043D\u0430 \u0434\u0430\u043B\u0435\u043A\u043E\u0432\u0430\u0442\u043E)))"],["artem","@P, \u043E\u0442\u0432\u0435\u0437\u0438, \u0430? \u0417\u0430\u0431\u0435\u0440\u0438 \u043F\u043B\u043E\u0439\u043A\u0443 \u0443 \u043C\u0435\u043D\u044F \u043D\u0430 \u0441\u0435\u0432\u0435\u0440\u043E-\u0432\u043E\u0441\u0442\u043E\u043A\u0435"]],steps:[{pts:["artem"],text:"\u0417\u0430\u0431\u0435\u0440\u0438 \u043F\u044B\u043B\u044C\u043D\u0443\u044E PS5 \u0443 \u0410\u0440\u0442\u0451\u043C\u0430",say:[["artem","\u041F\u0435\u0439 \u043F\u0438\u0432\u043E, \u0440\u0443\u043A\u0438 \u0434\u043E\u043B\u0436\u043D\u044B \u0431\u044B\u0442\u044C \u0432 \u0440\u044B\u0431\u0435, \u043D\u0435 \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0439 \u0434\u0443\u0448"]]},{pts:["vatutina"],text:"\u041D\u0430 \u0412\u0430\u0442\u0443\u0442\u0438\u043D\u0430, \u0447\u0435\u0440\u0435\u0437 \u0411\u0443\u0433\u0440\u0438\u043D\u0441\u043A\u0438\u0439 \u043C\u043E\u0441\u0442. \u0414\u0430\u043B\u0435\u043A\u043E\u0432\u0430\u0442\u043E"}],outro:[["sys","PS5 \u043F\u043E\u0447\u0438\u0449\u0435\u043D\u0430. \u0412\u043D\u0443\u0442\u0440\u0438 \u043D\u0430\u0448\u043B\u0438 \u0442\u0440\u0438 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438 \u0418\u0433\u043E\u0440\u044F"],["artem","\u0411\u043E\u0436\u0435, \u0445\u0440\u0430\u043D\u0438 \u043F\u0438\u0440\u0430\u0442\u043E\u0432, \u0430\u043C\u0438\u043D\u044C"]]}},gf=["arkasha","nikita","pasha","dima","max","sanya","misha","kos","artem","geisler"].filter(i=>wo[i]),xf=6,To=2,_f={igor:"\u042F \u0437\u0430 \u0440\u0443\u043B\u0435\u043C\u2026 \u043D\u0435 \u0432\u043E\u044E\u044E",max:"\u042F \u043F\u0430\u0441, \u0437\u0430\u043D\u044F\u0442",arkasha:"\u0414\u0430\u0439 10 \u043C\u0438\u043D",geisler:"\u042F \u0434\u0430\u0436\u0435 \u0432\u043A\u043B\u044E\u0447\u0430\u0442\u044C \u0431\u043E\u044E\u0441\u044C",pasha:"\u041D\u0435 \u0441\u043E\u0431\u0438\u0440\u0430\u044E\u0441\u044C",nikita:"\u042F \u043D\u0435 \u0438\u0433\u0440\u0430\u043B \u043D\u0435 \u0440\u0430\u0437\u0443",kos:"\u041D\u0430\u0434\u043E \u0441\u043A\u0430\u0447\u0430\u0442\u044C",artem:"\u0413\u043E \u0432 \u0432\u0441",sanya:"\u041A\u0430\u043A \u0431\u0443\u0434\u0435\u0442 \u0441\u0432\u043E\u0431\u043E\u0434\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F )",misha:"\u0412\u0440\u0435\u043C\u0435\u043D\u0438 \u0442\u0443\u043F\u043E \u043D\u0435\u0442 ("},Ao=[[1.5,"nikita","\u0427\u0442\u043E \u044D\u0442\u043E?"],[4.5,"max","\u0427\u0430\u0442 \u0432\u043B\u0430\u0434\u0435\u043B\u044C\u0446\u0435\u0432 PS5"],[7,"sys","\u0412 \u044D\u0442\u043E\u0439 \u043F\u0430\u0440\u0442\u0438\u0438 6 \u043F\u043E\u0440\u0443\u0447\u0435\u043D\u0438\u0439 \u0438\u0437 10. \u0412 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0439 \u0432\u044B\u043F\u0430\u0434\u0443\u0442 \u0434\u0440\u0443\u0433\u0438\u0435"],[10,"sanya","\u041E\u043D\u0430 \u0432\u043D\u0430\u0447\u0430\u043B\u0435 \u0434\u0438\u043A\u043E \u043C\u0435\u0434\u043B\u0435\u043D\u043D\u0430\u044F. \u0418 \u043E\u043F\u044F\u0442\u044C \u0441\u043D\u0435\u0433"],[14,"max","\u0421\u0430\u043D\u044F\u{1F64F}\u{1F3FB}\u{1F64F}\u{1F3FB}\u{1F629} \u043F\u043E\u0442\u0435\u0440\u043F\u0438 \u0447\u0443\u0442\u044C-\u0447\u0443\u0442\u044C!! \u041E\u043D\u043E \u0441\u0442\u043E\u0438\u0442 \u0442\u043E\u0433\u043E \u0432 20 \u043A\u0440\u0430\u0442"],[46,"dima","\u041A\u0441\u0442\u0430\u0442\u0438, \u044D\u0442\u0443 \u0438\u0433\u0440\u0443 \u044F \u0441\u0434\u0435\u043B\u0430\u043B \u043D\u0435\u0439\u0440\u043E\u0441\u0435\u0442\u044C\u044E. \u0417\u0430 \u043D\u043E\u0447\u044C. \u042D\u0442\u043E \u0443\u0436\u0435 \u043D\u043E\u0432\u0430\u044F \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u044C)"],[50,"nikita","\u042F, \u043A\u0441\u0442\u0430\u0442\u0438, \u0442\u043E\u0436\u0435 \u2014 3 \u0438\u0433\u0440\u0443 \u0443\u0436\u0435 \u0441\u0434\u0435\u043B\u0430\u043B\u{1F601}"],[54,"arkasha","\u0415\u0431\u0430\u0442\u044C \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438 \u043A\u043E\u043D\u0435\u0447\u043D\u043E"],[78,"igor","\u0411\u0430\u0442\u043B\u0430\u2026 \u043F\u0438\u0437\u0434\u0430\u0442\u0430\u044F!!!"],[81,"max","\u0420\u0430\u0441\u043F\u0440\u043E\u0431\u043E\u0432\u0430\u043B"],[102,"misha","\u0422\u043E\u043B\u044C\u043A\u043E \u043A\u0443\u043F\u0438\u043B PS5. \u041A\u0430\u043A\u0443\u044E \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0443 \u0431\u0440\u0430\u0442\u044C?","misha"],[104,"pasha","Extra \u0431\u0435\u0440\u0438","misha"],[106,"dima","\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0443\u044E \u0431\u0440\u0430\u0442\u044C \u043D\u0430\u0434\u043E","misha"],[108,"nikita","\u041C\u043D\u0435 \u043A\u0430\u0436\u0435\u0442\u0441\u044F \u043F\u043E\u043A\u0443\u043F\u0430\u0442\u044C \u0443\u0434\u043E\u0431\u043D\u0435\u0435 \u{1F937}\u200D\u2642\uFE0F","misha"],[110,"geisler","\u041C\u0438\u0448\u0430, \u043C\u043E\u0436\u0435\u0448\u044C \u0432\u043E\u043E\u0431\u0449\u0435 \u043D\u0435 \u0431\u0440\u0430\u0442\u044C \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0443","misha"],[112,"max","\u041C\u0438\u0448\u0430, \u0431\u0435\u0440\u0438 \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0443 \u0438 \u043D\u0435 \u0435\u0431\u0438 \u043C\u043E\u0437\u0433\u0438","misha"],[114,"pasha","\u041D\u0443 \u0438\u043B\u0438 \u0432\u043E\u043E\u0431\u0449\u0435 \u043D\u0435 \u0431\u0435\u0440\u0438","misha"],[117,"misha","\u0412\u043E\u0442 \u0442\u0430\u043A \u0430\u0433\u0430","misha"],[142,"pasha","\u041F\u0440\u043E \u0441\u043B\u0438\u0432\u044B \u0432 \u043A\u0443\u0440\u0441\u0435? \u041F\u0438\u0437\u0434\u0435\u0446 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u0430\u044F \u0445\u0443\u0439\u043D\u044F)","pasha"],[168,"igor","\u0411\u0430\u0442\u043B\u0430 \u2026 \u0437\u0430\u043B\u0443\u043F\u0430 \u043F\u043E\u043B\u043D\u0430\u044F!!!"],[171,"nikita","\u0427\u0442\u043E \u043F\u0440\u043E\u0438\u0437\u043E\u0448\u043B\u043E?)"],[198,"artem","\u0411\u043E\u0436\u0435, \u0445\u0440\u0430\u043D\u0438 \u043F\u0438\u0440\u0430\u0442\u043E\u0432, \u0430\u043C\u0438\u043D\u044C"],[218,"max",{voice:47}],[220,"max",{voice:8}],[224,"arkasha","\u042F \u043D\u0435 \u0441\u043B\u0443\u0448\u0430\u043B"],[246,"kos","\u041D\u0430 \u0421\u0435\u0440\u0433\u0435\u044F \u0441\u0442\u043E\u043B\u0438\u043A"],[266,"geisler","\u041C\u0435\u043D\u044F \u0443\u0434\u0438\u0432\u043B\u044F\u0435\u0442 \u043F\u043E\u0447\u0435\u043C\u0443 \u043F\u0441 \u0434\u043E \u0441\u0438\u0445 \u043F\u043E\u0440 \u044D\u0442\u0443 \u043B\u0430\u0432\u043E\u0447\u043A\u0443 \u043D\u0435 \u043F\u0440\u0438\u043A\u0440\u044B\u043B\u0438))"],[288,"max","\u041E\u0447\u0435\u043D\u044C \u043F\u043B\u043E\u0445\u043E\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435. \u041E\u043D\u043E \u043C\u043D\u0435 \u043E\u0447\u0435\u043D\u044C \u043D\u0435 \u043D\u0440\u0430\u0432\u0438\u0442\u0441\u044F"],[304,"pasha","BG3 \u0445\u043E\u0447\u0443 \u043D\u0430\u0447\u0430\u0442\u044C, \u043D\u043E \u0431\u043E\u044E\u0441\u044C"],[322,"igor","\u0413\u043E\u0442\u043E\u0432 \u043A \u0433\u0442\u0430"],[336,"geisler","\u041D\u043E\u0432\u0430\u044F \u0417\u0435\u043B\u0430\u043D\u0434\u0438\u044F \u043F\u043E\u043A\u0430 \u0442\u043E\u043B\u044C\u043A\u043E \u043A\u0430\u0447\u0430\u0435\u0442"],[348,"max","\u041B\u0435\u0442\u0441 \u0433\u043E\u0443 \u043D\u0430\u0445\u0443\u0439"],[358,"misha","\u0414\u0430 \u043F\u043E\u043A\u0430 \u043D\u0438\u043A\u0430\u043A, \u0432\u0440\u0435\u043C\u0435\u043D\u0438 \u0442\u0443\u043F\u043E \u043D\u0435\u0442 ("]],Ro=[[300,"5 \u043C\u0438\u043D\u0443\u0442..."],[240,"4 \u043C\u0438\u043D\u0443\u0442\u044B.."],[180,"3 \u043C\u0438\u043D\u0443\u0442\u044B..."],[120,"2 \u043C\u0438\u043D\u0443\u0442\u044B.."],[60,"\u041C\u0438\u043D\u0443\u0442\u0430..."],[21,"21 \u0441\u0435\u043A\u0443\u043D\u0434\u0430.."]],kr=[["arkasha","\u0417\u0430\u043F\u0443\u0441\u043A\u0430\u044E..."],["arkasha","\u041E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435 \u043F\u0435\u0440\u0432\u043E\u0433\u043E \u0434\u043D\u044F. 38 \u0433\u0431. \u0410\u0445\u0443\u0435\u0442\u044C"],["geisler","\u0423 \u043C\u0435\u043D\u044F 14%. \u041A\u0430\u043A \u0440\u0430\u0437 \u043A 19\u043C\u0443 \u0434\u043E\u043A\u0430\u0447\u0430\u0435\u0442\u0441\u044F \u{1F602}\u{1F602}"],["max",{voice:94}],["igor","\u0423\u0436\u0435 \u043D\u0430\u0448\u0451\u043B 2 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438 \u0438\u0437 144"],["sanya","\u041D\u0430\u0447\u0430\u043B\u043E \u0442\u044F\u0433\u043E\u043C\u043E\u0442\u043D\u043E\u0435"],["max","\u0421\u0430\u043D\u044C, \u043D\u0430\u0434\u043E \u0447\u0443\u0442\u044C-\u0447\u0443\u0442\u044C \u043F\u0435\u0440\u0435\u0442\u0435\u0440\u043F\u0435\u0442\u044C!)) \u0440\u0435\u0430\u043B\u044C\u043D\u043E"],["pasha","\u0414\u043B\u044F \u043C\u0435\u043D\u044F \u043A\u0440\u043E\u043C\u0435 LOA \u0438 RDR \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u0437\u0430\u0435\u0431\u0438\u0441\u044C\u{1F612}"],["kos","\u041D\u0430 \u0421\u0435\u0440\u0433\u0435\u044F \u0441\u0442\u043E\u043B\u0438\u043A"],["artem","\u0411\u043E\u0436\u0435, \u0445\u0440\u0430\u043D\u0438 \u043F\u0438\u0440\u0430\u0442\u043E\u0432, \u0430\u043C\u0438\u043D\u044C"],["misha","\u0414\u0430 \u043F\u043E\u043A\u0430 \u043D\u0438\u043A\u0430\u043A, \u0432\u0440\u0435\u043C\u0435\u043D\u0438 \u0442\u0443\u043F\u043E \u043D\u0435\u0442 ("],["dima","\u0414\u0430\u0432\u043D\u043E \u043D\u0435 \u0432\u043E\u0435\u0432\u0430\u043B\u0438)"],["nikita","\u0427\u0442\u043E \u044D\u0442\u043E?"]],Ic=[[0,"\xAB\u0427\u0442\u043E \u044D\u0442\u043E?\xBB","\u041D\u0438\u043A\u0438\u0442\u0430 \u0438\u0433\u0440\u0430\u0435\u0442 \u043B\u0443\u0447\u0448\u0435. \u0410 \u043E\u043D \u0432\u043E\u043E\u0431\u0449\u0435 \u043D\u0435 \u0438\u0433\u0440\u0430\u0435\u0442."],[700,"\xAB\u041F2 \u0431\u0435\u0437 \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442\u0430\xBB","\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u0434\u043E\u0441\u0442\u0443\u043F \u0432 \u0438\u043D\u0435\u0442. \u0418\u043B\u0438 \u043D\u0430\u043E\u0431\u043E\u0440\u043E\u0442."],[1700,"\xAB\u0422\u0438\u043F\u044B \u0437\u0430 390 \u20BD\xBB","\u041D\u0430 \u0430\u0432\u0438\u0442\u043E \u0442\u0430\u043A\u043E\u0439 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u0441\u0442\u043E\u0438\u0442 5000."],[2900,"\xAB\u041F3 \u0441\u043E \u0441\u0432\u043E\u0435\u0433\u043E \u043F\u0440\u043E\u0444\u0438\u043B\u044F\xBB","\u0421 \u0442\u0440\u043E\u0444\u0435\u044F\u043C\u0438 \u0438 \u0431\u0435\u0437 \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442\u0430."],[4100,"\xAB\u0411\u0430\u0442\u044F \u0432 \u0437\u0434\u0430\u043D\u0438\u0438\xBB","\u0412\u0440\u0435\u043C\u0435\u043D\u0438 \u043D\u0435\u0442, \u0430 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u0435\u0441\u0442\u044C."],[5400,"\xAB\u041B\u0435\u0433\u0435\u043D\u0434\u0430 Beam Store\xBB","\u041C\u044B \u043F\u043E\u043B\u0443\u0447\u0438\u043B\u0438 \u0432\u0430\u0448\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435. \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043E\u0436\u0438\u0434\u0430\u0439\u0442\u0435."],[6800,"\xAB\u0412\u043B\u0430\u0434\u0435\u043B\u0435\u0446 \u0447\u0430\u0442\u0430\xBB","\u0410\u0440\u043A\u0430\u0448\u0430 \u043D\u0430\u043F\u0440\u044F\u0433\u0441\u044F \u0438 \u043F\u043E\u043F\u0440\u0430\u0432\u0438\u043B \u0431\u0430\u0431\u043E\u0447\u043A\u0443."]],Dc=[["\u041D\u0430 \u041F3 \u043D\u0430\u0434\u043E \u0438\u0433\u0440\u0430\u0442\u044C \u0441\u2026","\u0432\u044B\u0434\u0430\u043D\u043D\u043E\u0433\u043E \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0430","\u0441\u0432\u043E\u0435\u0433\u043E \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0430"],["\u041F2 \u2014 \u044D\u0442\u043E \u043A\u043E\u0433\u0434\u0430 \u0438\u0433\u0440\u0430\u0435\u0448\u044C \u0441\u2026","\u0441\u0432\u043E\u0435\u0433\u043E","\u0432\u044B\u0434\u0430\u043D\u043D\u043E\u0433\u043E"],["\u0411\u0435\u0437 \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442\u0430 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442\u2026","\u041F2","\u041F3"],["\u0427\u0442\u043E \u0445\u0443\u0436\u0435 \u0438 \u0434\u0435\u0448\u0435\u0432\u043B\u0435?","\u041F2","\u041F3"],["\u0410\u043A\u043A\u0430\u0443\u043D\u0442, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0442\u0435\u0431\u0435 \u0434\u0430\u043B\u0438, \u043D\u0430\u0434\u043E\u2026","\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043D\u0430 \u043A\u043E\u043D\u0441\u043E\u043B\u0438","\u0443\u0434\u0430\u043B\u0438\u0442\u044C"]],Uc=["\u0421\u043E\u0432\u0435\u0442\u0443\u044E\u0442: \u043F\u0435\u0440\u0435\u0442\u0435\u0440\u043F\u0438 \u0441\u043D\u0435\u0436\u043D\u043E\u0435 \u043D\u0430\u0447\u0430\u043B\u043E","\u0413\u0440\u0443\u0437\u0438\u043C 212 \u0413\u0411\u2026","\u041E\u0441\u0432\u043E\u0431\u043E\u0436\u0434\u0430\u0435\u043C \u043C\u0435\u0441\u0442\u043E: \u0443\u0434\u0430\u043B\u044F\u0435\u043C \u0412\u0435\u0434\u044C\u043C\u0430\u043A\u0430","\u0421\u043F\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u043C \u0443 \u0442\u0438\u043F\u043E\u0432 \u0437\u0430 390 \u20BD","\u041F2 \u0438\u043B\u0438 \u041F3? \u0412\u0441\u0451 \u0442\u0430\u043A, \u0442\u043E\u043B\u044C\u043A\u043E \u043D\u0430\u043E\u0431\u043E\u0440\u043E\u0442"],vf={arkasha:"\u0412\u0435\u0434\u044C\u043C\u0430\u043A \u043D\u0435 \u043F\u043E\u0441\u0442\u0440\u0430\u0434\u0430\u043B. \u0418\u043B\u0438 \u043F\u043E\u0441\u0442\u0440\u0430\u0434\u0430\u043B. \u0412\u0441\u0435 \u0442\u0430\u043A, \u0442\u043E\u043B\u044C\u043A\u043E \u043D\u0430\u043E\u0431\u043E\u0440\u043E\u0442.",max:"\u0417\u0430\u043F\u0438\u0441\u0430\u043B \u043E\u0431 \u044D\u0442\u043E\u043C \u0433\u043E\u043B\u043E\u0441\u043E\u0432\u043E\u0435 \u043D\u0430 1:34. \u041D\u0438\u043A\u0442\u043E \u043D\u0435 \u043F\u043E\u0441\u043B\u0443\u0448\u0430\u043B.",dima:"\u0421\u0434\u0435\u043B\u0430\u043B \u0438\u0433\u0440\u0443 \u043D\u0435\u0439\u0440\u043E\u0441\u0435\u0442\u044C\u044E, \u043F\u043E\u043A\u0430 \u0432\u0441\u0435 \u0436\u0434\u0430\u043B\u0438 \u0438\u0433\u0440\u0443. \u041F\u043E\u0442\u043E\u043C \u043F\u043E\u043A\u0430\u0436\u0443)",igor:"\u0421\u043E\u0431\u0440\u0430\u043B \u043D\u0435 \u0432\u0441\u0451. \u0417\u0430\u0432\u0451\u043B \u043D\u043E\u0432\u044B\u0439 \u0430\u043A\u043A\u0430\u0443\u043D\u0442, \u0447\u0442\u043E\u0431\u044B \u043D\u0430\u0447\u0430\u0442\u044C \u0437\u0430\u043D\u043E\u0432\u043E.",geisler:"\u0414\u043E\u043A\u0430\u0447\u0430\u043B\u043E\u0441\u044C 14%. \u041A\u0430\u043A \u0440\u0430\u0437 \u043A 19-\u043C\u0443.",pasha:"\u0412\u044B\u0448\u043B\u0430 \u0431\u0435\u0437 \u043F\u0435\u0440\u0435\u043D\u043E\u0441\u043E\u0432. \u041F\u0430\u0448\u0430 \u0432\u0441\u0451 \u0440\u0430\u0432\u043D\u043E \u0431\u043E\u0438\u0442\u0441\u044F \u043D\u0430\u0447\u0438\u043D\u0430\u0442\u044C.",nikita:"\u0422\u0430\u043A \u0438 \u043D\u0435 \u043F\u043E\u043D\u044F\u043B, \u0447\u0442\u043E \u044D\u0442\u043E. \u0417\u0430\u0442\u043E \u0441\u0434\u0435\u043B\u0430\u043B \u0447\u0435\u0442\u0432\u0451\u0440\u0442\u0443\u044E \u0438\u0433\u0440\u0443.",kos:"\u0421\u0442\u043E\u043B\u0438\u043A \u043D\u0430 \u0421\u0435\u0440\u0433\u0435\u044F \u0432\u0441\u0451 \u0435\u0449\u0451 \u0437\u0430\u0431\u0440\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u043D.",artem:"\u041F\u043B\u043E\u0439\u043A\u0430 \u0447\u0438\u0441\u0442\u0430\u044F. \u0420\u0443\u043A\u0438 \u0432 \u0440\u044B\u0431\u0435. \u0410\u043C\u0438\u043D\u044C.",sanya:"\u041D\u0430\u0447\u0430\u043B\u043E \u0431\u044B\u043B\u043E \u0442\u044F\u0433\u043E\u043C\u043E\u0442\u043D\u043E\u0435. \u0414\u0430\u043B \u0432\u0442\u043E\u0440\u043E\u0439 \u0448\u0430\u043D\u0441.",misha:"\u0411\u0430\u0442\u044F \u0432 \u0437\u0434\u0430\u043D\u0438\u0438. \u0412\u0440\u0435\u043C\u0435\u043D\u0438 \u043F\u043E-\u043F\u0440\u0435\u0436\u043D\u0435\u043C\u0443 \u043D\u0435\u0442."};var ut=i=>document.getElementById(i),Wn=window.matchMedia&&matchMedia("(pointer: coarse)").matches||"ontouchstart"in window;Wn&&document.body.classList.add("touch");var Mn=new URLSearchParams(location.search);ut("tip").textContent=Uc[Math.floor(Math.random()*Uc.length)];var ki=ut("c"),$n=new Ur({canvas:ki,antialias:!1,alpha:!1,stencil:!1,powerPreference:"high-performance"});$n.shadowMap.enabled=!0;$n.shadowMap.type=mc;$n.setClearColor(329487);var ln=new ss,De=new an(58,1,.5,1100),Le=af(ln),vi=new mo($n),zi=new vo(ln,Wn?3600:6500),Bi=new yo(ln),yf=new Mo(ln),wn=new So(ln),lr=[new ar(ln),new ar(ln),new ar(ln)],oe=new Eo,Zn=new so(16773336,0,80,.5,.8,1);ln.add(Zn,Zn.target);var Df=(()=>{let i=new xe;for(let r of[-.62,.62])i.add(new fi(1,1,12,1,!0),xt(r,.72,9.2,1.7,14,1.7,0,-Math.PI/2),[.15,.14,.11]);let t=new ae(i.build(),Le.cones.material);t.renderOrder=4,t.frustumCulled=!1;let e=new xe;e.quad([-4.5,.2,26],[4.5,.2,26],[4.5,.2,2.4],[-4.5,.2,2.4],[.34,.32,.25]);let n=new ae(e.build(),Le.pools.material);n.renderOrder=2,n.frustumCulled=!1;let s=new Ne;return s.add(t,n),s})(),us={};for(let i of bn){let t=hf(i.id);t.visible=!1,ln.add(t),us[i.id]=t}var Xc=(()=>{let i=new ss;i.add(new Qs(13622527,6706500,2.4));let t=new js(16773344,2.6);t.position.set(1.5,2,3),i.add(t);let e=new an(30,1,.1,20);e.position.set(.45,1.98,3),e.lookAt(0,1.68,0),$n.setPixelRatio(1),$n.setSize(128,128,!1);let n={};for(let a of bn){let o=us[a.id];i.add(o),o.visible=!0,o.position.set(0,0,0),o.rotation.set(0,.3,0),i.background=new Lt(a.css).multiplyScalar(.3).add(new Lt(1186352)),$n.render(i,e),n[a.id]=ki.toDataURL("image/png"),ln.add(o),o.visible=!1}let s=document.createElement("canvas");s.width=s.height=64;let r=s.getContext("2d");return r.fillStyle="#2f7fe0",r.fillRect(0,0,64,64),r.font="40px system-ui",r.textAlign="center",r.textBaseline="middle",r.fillText("\u26A1",32,35),n.beam=s.toDataURL(),n})(),Uf={nikita:"#aab3cc",dima:"#8fa6dd",igor:"#f0f0f0"},P={state:"boot",t:0,time:0,left:360,score:0,pid:null,mode:"car",car:null,cars:[],mods:[],npcs:[],sayQ:[],sayT:0,mission:null,queue:[],nextM:6,wanted:0,caught:0,busy:0,modal:!1,flags:{},stats:{missions:0,total:0,cards:0,feathers:0,orchids:0,bans:0,stolen:0},amb:0,cd:0,acc:1,lastBump:0,shake:0,hudT:0,placeT:0,lastPlace:null},nt={x:0,z:0,y:0,vx:0,vz:0,layer:0,h:0,vy:0,walk:0},Gt={yaw:0,off:0,pitch:.26,manual:9,pos:new U,init:!1},Jn=null,Io="",R_=[{scale:2,msaa:4,shadow:2048,snow:1,bloom:5,mirror:!0},{scale:1.5,msaa:0,shadow:2048,snow:.85,bloom:5,mirror:!0},{scale:1.2,msaa:0,shadow:1024,snow:.65,bloom:5,mirror:!0},{scale:.95,msaa:0,shadow:0,snow:.5,bloom:4,mirror:!0},{scale:.72,msaa:0,shadow:0,snow:.35,bloom:4,mirror:!1},{scale:.55,msaa:0,shadow:0,snow:.25,bloom:0,mirror:!1}],C_=[{scale:2,msaa:0,shadow:1024,snow:.75,bloom:5,mirror:!0},{scale:1.5,msaa:0,shadow:0,snow:.55,bloom:4,mirror:!0},{scale:1.25,msaa:0,shadow:0,snow:.4,bloom:4,mirror:!1},{scale:1,msaa:0,shadow:0,snow:.3,bloom:3,mirror:!1},{scale:.75,msaa:0,shadow:0,snow:.22,bloom:0,mirror:!1}],Fo=Wn?C_:R_,gi=Mn.has("q")?Pe(+Mn.get("q")||0,0,Fo.length-1):Wn?1:0,Nf=720,Mf=!1,Nc=!1,Co=0,P_=gi;function fs(){let i=Fo[gi],t=Math.min(window.devicePixelRatio||1,i.scale),e=innerWidth*t,n=innerHeight*t,s=Math.min(1,Math.sqrt((Wn?17e5:44e5)/(e*n)));e=Math.max(160,Math.round(e*s)),n=Math.max(160,Math.round(n*s)),Nf=n,$n.setPixelRatio(1),$n.setSize(e,n,!1),vi.levels=i.bloom||1,vi.bloom=i.bloom>0,vi.setSize(e,n,i.msaa);let r=Le.moon.shadow;Le.moon.castShadow=i.shadow>0,i.shadow&&r.mapSize.x!==i.shadow&&(r.mapSize.set(i.shadow,i.shadow),r.map&&(r.map.dispose(),r.map=null)),Le.mirror.visible=Le.bridgesM.visible=Le.streaks.visible=i.mirror,zi.density(i.snow);let a=innerWidth/innerHeight;De.aspect=a,Do=a>=1.3?58:Math.min(88,2*Math.atan(Math.tan(29*Math.PI/180)*1.3/a)*180/Math.PI)}var Do=58;addEventListener("resize",()=>fs());addEventListener("orientationchange",()=>setTimeout(fs,250));var Fc=ut("feed"),Bc=ut("plog"),xi=i=>String(i).replace(/[&<>]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;"})[t]),L_=i=>`<div class="voice"><div class="p">\u25B6</div><div class="w"></div><div class="d">${Math.floor(i/60)}:${String(i%60).padStart(2,"0")}</div><div class="u"></div></div>`;function Ff(i,t){let e=i===P.pid,n=document.createElement("div");if(n.className="msg"+(e?" me":"")+(i==="sys"?" sys":""),i==="sys")n.innerHTML=`<div class="b">${xi(t)}</div>`;else{let s=i==="beam"?{name:"Beam Store \u{1F916}",css:"#5db0ff"}:or[i],r=typeof t=="object"?L_(t.voice):xi(t).replace("@P",Io);n.innerHTML=(e?"":`<img src="${Xc[i]}" alt="">`)+`<div class="b">${e?"":`<div class="n" style="color:${Uf[i]||s.css}">${s.name}</div>`}${r}</div>`}return n}function Gr(i,t){let e=Ff(i,t);for(Fc.appendChild(e);Fc.children.length>5;)Fc.firstChild.remove();Bc.appendChild(e.cloneNode(!0)),Bc.scrollTop=1e9,setTimeout(()=>e.remove(),9600),oe.play(typeof t=="object"?"voice":"msg")}var Fe=i=>{for(let t of i)P.sayQ.push(t)};function Mi(i,t){let e=ut("big");e.innerHTML=xi(i)+(t?`<small>${xi(t)}</small>`:""),e.classList.remove("show"),e.offsetWidth,e.classList.add("show")}function _i(i){P.score=Math.max(0,P.score+i),ut("score").textContent=P.score}var Sf=0;function hr(i,t=0){let e=ut("prompt");if(!i){P.time>Sf&&e.classList.add("hidden");return}e.textContent=i,e.classList.remove("hidden"),Sf=t?P.time+t:0}function qc(i,t){P.modal=!0,ut("mtitle").textContent=i.title,ut("mtext").textContent=i.text;let e=ut("mopts");e.innerHTML="",i.opts.forEach(n=>{let s=document.createElement("button");s.textContent=n.label,s.onclick=()=>{ut("modal").classList.add("hidden"),P.modal=!1,t(n)},e.appendChild(s)}),ut("modal").classList.remove("hidden")}var yi=0;try{yi=Pe(+(localStorage.getItem("gtr_sel")||2),0,bn.length-1)||0}catch{yi=2}function I_(){let i=ut("strip");bn.forEach((t,e)=>{let n=document.createElement("img");n.src=Xc[t.id],n.alt=t.name,n.onclick=()=>{oe.init(),Po(e)},i.appendChild(n)}),ut("prev").onclick=()=>{oe.init(),Po((yi+bn.length-1)%bn.length)},ut("next").onclick=()=>{oe.init(),Po((yi+1)%bn.length)},ut("play").onclick=()=>{oe.init(),Vf()},ut("blb").onclick=()=>{oe.init(),Q_()},ut("lbmx").onclick=()=>ut("lbm").classList.add("hidden"),ut("lbm").onclick=t=>{t.target===ut("lbm")&&ut("lbm").classList.add("hidden")},ut("hint").textContent=Wn?"\u041B\u0435\u0432\u044B\u0439 \u043F\u0430\u043B\u0435\u0446 \u2014 \u0440\u0443\u043B\u044C \u0438 \u0433\u0430\u0437 \xB7 \u043F\u0440\u0430\u0432\u044B\u0439 \u2014 \u043A\u0430\u043C\u0435\u0440\u0430 \xB7 \u{1F6AA} \u0432\u044B\u0439\u0442\u0438 \u0438\u0437 \u043C\u0430\u0448\u0438\u043D\u044B \xB7 \u0437\u0432\u0443\u043A \u0432\u043A\u043B\u044E\u0447\u0438\u0442\u0441\u044F \u043F\u043E\u0441\u043B\u0435 \u043A\u0430\u0441\u0430\u043D\u0438\u044F":"WASD \u2014 \u0435\u0445\u0430\u0442\u044C \xB7 \u041F\u0440\u043E\u0431\u0435\u043B \u2014 \u0440\u0443\u0447\u043D\u0438\u043A \xB7 E \u2014 \u0432\u044B\u0439\u0442\u0438 / \u0441\u0435\u0441\u0442\u044C \xB7 \u043C\u044B\u0448\u044C \u0441 \u0437\u0430\u0436\u0430\u0442\u043E\u0439 \u043A\u043D\u043E\u043F\u043A\u043E\u0439 \u2014 \u043A\u0430\u043C\u0435\u0440\u0430 \xB7 T \u2014 \u0447\u0430\u0442 \xB7 M \u2014 \u0437\u0432\u0443\u043A",Wn&&(ut("hint").textContent="\u041B\u0435\u0432\u044B\u0439 \u043F\u0430\u043B\u0435\u0446 \u2014 \u0440\u0443\u043B\u044C \u0438 \u0433\u0430\u0437 \xB7 \u043F\u0440\u0430\u0432\u044B\u0439 \u2014 \u043A\u0430\u043C\u0435\u0440\u0430 \xB7 \u{1F6AA} \u0432\u044B\u0439\u0442\u0438 \u0438\u0437 \u043C\u0430\u0448\u0438\u043D\u044B \xB7 \u043A\u0440\u0430\u0441\u0438\u0432\u0435\u0435 \u0432\u0441\u0435\u0433\u043E \u2014 \u043F\u043E\u0432\u0435\u0440\u043D\u0443\u0432 \u0442\u0435\u043B\u0435\u0444\u043E\u043D \u0433\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u043E"),Po(yi)}function Po(i){yi=i;let t=bn[i];ut("cname").textContent=t.name,ut("ctag").textContent=t.tag,ut("cdesc").textContent=t.desc,ut("play").textContent="\u0418\u0433\u0440\u0430\u0442\u044C \u0437\u0430: "+t.name,[...ut("strip").children].forEach((n,s)=>n.classList.toggle("on",s===i));for(let n of bn)us[n.id].visible=n.id===t.id;let e=us[t.id];e.position.set(149.6,0,-29),e.rotation.set(0,-Math.PI/2,0),e.userData.pop=1,oe.play("tick")}function D_(i){let t=us[bn[yi].id],e=P.time;t.userData.pop=Math.max(0,(t.userData.pop||0)-i*3),t.rotation.y=-Math.PI/2+Math.sin(e*.6)*.35+t.userData.pop*2.5,xo(t,e,0,e%5<1.4);let n=De.aspect<1,s=!n&&innerHeight<520,r=s?1.9:0;De.position.set(143.2+Math.sin(e*.21)*.5-(n?2.5:0),1.5+Math.sin(e*.3)*.12,-26.4+Math.cos(e*.17)*.5),De.lookAt(150.2+.477*r,n?1.05:s?1.25:.8,-30.2+.879*r),De.fov=n?48:s?30:36,De.updateProjectionMatrix();for(let a of P.cars)a.ai&&_o(a,i,1e5,1e5);Le.setShadowCenter(150,-30),wn.begin(),Yc(),zf(t),wn.end()}var ds=[],Wr=new $a(new Ln(.8,1.1,.07),new on,36);Wr.frustumCulled=!1;ln.add(Wr);(function(){let t=uo(144),e=(s,r,a,o=0)=>{let l=0;for(;Le.col.near(s,r,1.8)&&l++<40;)s+=2.5;ds.push({x:s,z:r,y:o,type:a,got:!1})};for(let s=0;s<12;s++){let r=$e[(s*3+1)%8],a=-165+t()*330;e(r+(t()<.5?-3.3:3.3),Je.some(o=>Math.abs(o-a)<9)?a+16:a,0)}for(let s=0;s<6;s++){let r=Je[(s*2+1)%7],a=s%2?1:-1;e(a*(90+t()*170),r+(t()<.5?-3.3:3.3),0)}e(0,-60,0),e(-20,120,0);for(let[s,r]of[[175,30],[-245,30],[245,-90],[-105,-150]])e(s,r,0);for(let s of[-165,-112,-15,42,78,168])e(-28+t()*56,s,1,-3);for(let[s,r]of[[103,-12],[-105,106],[57,-128],[-57,62],[-262,-137],[120,-134]])e(s,r,2);let n=[new Lt(3,2.1,.5),new Lt(1.6,2.4,3),new Lt(3,.7,2.2)];ds.forEach((s,r)=>Wr.setColorAt(r,n[s.type]))})();var bf=new ue,Ef=new Pn,wf=new U,Tf=new U,U_=new U(0,1,0),cr=[[1.5,1,.25],[.7,1.1,1.5],[1.5,.3,1.1]];function Of(i){let t=P.time,e=P.mode==="car"?3.4:2.1;for(let n=0;n<ds.length;n++){let s=ds[n],r=s.y+1.5+Math.sin(t*2+n)*.25;Ef.setFromAxisAngle(U_,t*2.2+n),wf.set(s.x,r,s.z),Tf.setScalar(s.got?1e-4:1),bf.compose(wf,Ef,Tf),Wr.setMatrixAt(n,bf),!s.got&&(wn.add(s.x,r,s.z,3,cr[s.type][0],cr[s.type][1],cr[s.type][2]),i&&Math.abs(nt.x-s.x)<e&&Math.abs(nt.z-s.z)<e&&Math.abs(nt.y-s.y)<2.6&&N_(s))}Wr.instanceMatrix.needsUpdate=!0}function N_(i){i.got=!0,oe.play("pick"),Bi.burst(i.x,i.y+1.5,i.z,14,6,.7,cr[i.type][0],cr[i.type][1],cr[i.type][2]);let t=P.stats;if(i.type===0){if(t.cards+=6,_i(30),t.cards===6&&P.pid!=="igor"&&Fe([["igor","\u041C\u043D\u0435 144 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438 \u0432 \u0440\u0434\u0440 \u043D\u0430\u0434\u043E \u043D\u0430\u0439\u0442\u0438"],["geisler","\u0414\u043E \u0432\u044B\u0445\u043E\u0434\u0430 \u0433\u0442\u0430 6 ?"],["igor","\u0410\u0433\u0430"]]),t.cards===72&&Fe([["igor","\u041D\u0435\u0434\u0435\u043B\u044E \u0435\u0431\u0443\u0447\u0438\u0445 \u043F\u0442\u0438\u0446 \u0441\u043E\u0431\u0438\u0440\u0430\u043B\u{1F613} \u041D\u0430\u0441\u0442\u0430\u043B\u043E \u0432\u0440\u0435\u043C\u044F \u0430\u0445\u0443\u0435\u043D\u043D\u044B\u0445 \u043A\u0430\u0440\u0442\u043E\u0447\u0435\u043A)"]]),t.cards%144===0){P.acc++,_i(500),Mi("144 \u0438\u0437 144","+500 \xB7 \u0438 \u0432\u0441\u0451 \u0437\u0430\u043D\u043E\u0432\u043E"),Fe([["igor","\u0423 \u043C\u0435\u043D\u044F \u043D\u043E\u0432\u044B\u0439 \u0430\u043A\u043A\u0430\u0443\u043D\u0442 \u0438 \u043C\u043D\u0435 \u043D\u0430\u0434\u043E \u0437\u0430\u043A\u0440\u044B\u0442\u044C \u0440\u0434\u0440 \u043D\u0430 100% \u043D\u0430 \u043D\u0435\u043C))"],["artem","\u041F\u043E\u043A\u0430 \u0435\u0435 \u0418\u0433\u043E\u0440\u044C \u043F\u0440\u043E\u0439\u0434\u0451\u0442 \u043D\u0430 100% \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0440\u0430\u0437)"]]);for(let e of ds)e.type===0&&(e.got=!1)}}else i.type===1?(t.feathers++,_i(120),t.feathers===6&&Fe([["igor","\u0421\u0430\u043C\u043E\u0435 \u043F\u0438\u0437\u0434\u0435\u0446 \u0447\u0442\u043E \u044F \u0441\u043E\u0431\u0440\u0430\u043B \u0432\u0441\u0435 \u043F\u0435\u0440\u044C\u044F \u0446\u0430\u043F\u0435\u043B\u044C"],["geisler","\u0410 \u0437\u0430\u0447\u0435\u043C \u0432\u0442\u043E\u0440\u043E\u0439 \u0440\u0430\u0437?)\u{1F605}"]])):(t.orchids++,_i(120),t.orchids===6&&Fe([["geisler","\u0422\u044B \u0438\u0445 \u0443\u0436\u0435 \u043D\u0430\u0445\u043E\u0434\u0438\u043B, \u043D\u043E \u043F\u0440\u043E\u0441\u0442\u043E \u043D\u0435 \u043F\u043E\u043C\u043D\u0438\u0448\u044C \u043A\u0443\u0434\u0430 \u0441\u043B\u043E\u0436\u0438\u043B)"]]));ut("coll").textContent=`\u{1F0CF} ${t.cards%144||(t.cards?144:0)}/144${P.acc>1?" (\u0430\u043A\u043A \u2116"+P.acc+")":""} \xB7 \u{1FAB6} ${t.feathers}/6 \xB7 \u{1F338} ${t.orchids}/6`}var Af=[9054762,2771594,6975352,2042422,13620186,3107402,8018474,3815994,9080618,5909098];for(let i=0;i<11;i++){let t=i%5===4,e=new rr(ln,0,0,0,t?14725152:Af[i%Af.length],t?"van":"sedan"),n=(i*17+3)%pn.length,s=pn[n].nb;mf(e,n,s[i%s.length]),P.cars.push(e)}function Yc(){let i=De.position.x,t=De.position.z;for(let e of P.cars){let n=e.e;if(Math.abs(n.x-i)>190||Math.abs(n.z-t)>190)continue;let s=Math.sin(e.h),r=Math.cos(e.h),a=-r,o=s,l=e.ai||e===P.car?1:.25;for(let c of[-.62,.62])wn.add(n.x+s*2.25+a*c,n.y+.74,n.z+r*2.25+o*c,2.1,1.7*l,1.6*l,1.25*l),wn.add(n.x-s*2.25+a*c,n.y+.76,n.z-r*2.25+o*c,1.3,1.5*l,.1*l,.06*l);if(e.kind==="mod"){let c=(P.time*7|0)%2;wn.add(n.x,n.y+2,n.z,7,c?.3:2.6,.2,c?3:.3)}}}function zf(i){let t=i.userData.glow;t&&wn.add(i.position.x,i.position.y+t.y,i.position.z,t.s,t.c[0],t.c[1],t.c[2])}var In={},ur=null,Uo=0,No=0,kc=0,Hc=0,ps=null,Vc=0,Gc=0,Zc=!1;addEventListener("keydown",i=>{if(In[i.code]=!0,["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Tab"].includes(i.code)&&i.preventDefault(),!i.repeat){if(oe.init(),!ut("lbm").classList.contains("hidden")){(i.code==="Escape"||i.code==="Enter")&&ut("lbm").classList.add("hidden");return}if(P.state==="menu"){i.code==="ArrowLeft"||i.code==="KeyA"?ut("prev").onclick():i.code==="ArrowRight"||i.code==="KeyD"?ut("next").onclick():(i.code==="Enter"||i.code==="Space")&&Vf();return}P.state==="play"&&(i.code==="KeyE"||i.code==="KeyF"||i.code==="Enter"?Jc():i.code==="KeyT"||i.code==="Tab"?$c():i.code==="KeyM"&&Hf())}});addEventListener("keyup",i=>{In[i.code]=!1});addEventListener("blur",()=>{for(let i in In)In[i]=!1});addEventListener("contextmenu",i=>i.preventDefault());addEventListener("gesturestart",i=>i.preventDefault());document.addEventListener("touchmove",i=>{i.target.closest&&i.target.closest("#plog,#final,#lbm")||i.preventDefault()},{passive:!1});document.addEventListener("visibilitychange",()=>{let i=oe.ctx;i&&(document.hidden?i.suspend():i.resume(),Wc=performance.now())});ki.addEventListener("webglcontextlost",i=>{i.preventDefault(),setTimeout(()=>location.reload(),400)});var Oc=ut("stick"),Bf=ut("knob");ki.addEventListener("pointerdown",i=>{if(oe.init(),P.state==="play"){i.pointerType!=="mouse"&&i.clientX<innerWidth*.5&&ur===null?(ur=i.pointerId,kc=i.clientX,Hc=i.clientY,Oc.style.left=kc-64+"px",Oc.style.top=Hc-64+"px",Oc.style.bottom="auto"):ps===null&&(ps=i.pointerId,Vc=i.clientX,Gc=i.clientY);try{ki.setPointerCapture(i.pointerId)}catch{}}});ki.addEventListener("pointermove",i=>{if(i.pointerId===ur){let t=(i.clientX-kc)/52,e=(i.clientY-Hc)/52,n=Math.hypot(t,e);n>1&&(t/=n,e/=n),Uo=t,No=e,Bf.style.transform=`translate(${t*40}px,${e*40}px)`}else if(i.pointerId===ps){let t=(i.clientX-Vc)*.006;P.mode==="car"?Gt.off=Pe(Gt.off+t,-2.8,2.8):Gt.yaw+=t,Gt.pitch=Pe(Gt.pitch+(i.clientY-Gc)*.004,.04,.95),Vc=i.clientX,Gc=i.clientY,Gt.manual=0}});var kf=i=>{i.pointerId===ur&&(ur=null,Uo=No=0,Bf.style.transform=""),i.pointerId===ps&&(ps=null)};ki.addEventListener("pointerup",kf);ki.addEventListener("pointercancel",kf);var Oo=(i,t)=>i.addEventListener("pointerdown",e=>{e.preventDefault(),e.stopPropagation(),oe.init(),t()});Oo(ut("bAct"),()=>Jc());ut("bHand").addEventListener("pointerdown",i=>{i.preventDefault(),Zc=!0,ut("bHand").classList.add("on")});for(let i of["pointerup","pointercancel","pointerleave"])ut("bHand").addEventListener(i,()=>{Zc=!1,ut("bHand").classList.remove("on")});Oo(ut("bPhone"),()=>$c());Oo(ut("bMute"),()=>Hf());Oo(ut("pclose"),()=>$c());function $c(){ut("phone").classList.toggle("hidden"),Bc.scrollTop=1e9}function Hf(){oe.setMuted(!oe.muted),ut("bMute").textContent=oe.muted?"\u{1F507}":"\u{1F50A}"}function F_(){let i=0,t=0;return(In.KeyW||In.ArrowUp)&&(i+=1),(In.KeyS||In.ArrowDown)&&(i-=1),(In.KeyD||In.ArrowRight)&&(t+=1),(In.KeyA||In.ArrowLeft)&&(t-=1),ur!==null&&(t=Math.abs(Uo)>.12?Uo:0,i=Math.abs(No)>.15?-No:0),P.modal||P.busy>0?{thr:0,st:0,hand:!0}:{thr:i,st:t,hand:!!In.Space||Zc}}function Vf(){if(P.state!=="menu")return;let i=bn[yi];P.pid=i.id,Io=i.name;try{localStorage.setItem("gtr_sel",yi)}catch{}ut("fade").style.opacity=1,setTimeout(()=>{ut("menu").classList.add("hidden"),ut("hud").classList.remove("hidden"),Jn=us[i.id],Jn.visible=!1,Jn.rotation.set(0,0,0);for(let n of bn)if(n.id!==i.id){let s=us[n.id],[r,a]=dn[n.id];s.visible=!0,s.position.set(r,.15,a),s.rotation.set(0,Math.atan2(140-r,0-a),0),s.add(uf(n.name,Uf[n.id]||n.css)),Le.col.circle(r,a,.55),P.npcs.push({id:n.id,x:r,z:a,rak:s,cool:3+Math.random()*6,talk:0})}let t=new rr(ln,dn.start[0],dn.start[1],Math.PI,new Lt(i.css).multiplyScalar(.8).getHex(),"sedan");P.cars.push(t),P.car=t,P.mode="car",t.g.add(Df),nt.x=t.e.x,nt.z=t.e.z,Gt.yaw=Math.PI,Gt.init=!1;let e=gf.filter(n=>n!==P.pid);if(Mn.has("m"))e=Mn.get("m").split(",").filter(n=>wo[n]&&n!==P.pid);else{let n={};try{n=JSON.parse(localStorage.getItem("gtr_seen")||"{}")||{}}catch{n={}}let s=e.map(r=>[r,(n[r]||0)+Math.random()]).sort((r,a)=>r[1]-a[1]).slice(0,xf).map(r=>r[0]);e=e.filter(r=>s.includes(r));for(let r of e)n[r]=(n[r]||0)+1;try{localStorage.setItem("gtr_seen",JSON.stringify(n))}catch{}}P.queue=e,P.run=e.slice(),P.stats.total=e.length,P.state="play",P.t=0,Vr=4,Hr=0,fs(),ut("fade").style.opacity=0,Mi("23:54","\u0414\u043E \u0440\u0435\u043B\u0438\u0437\u0430 \u0448\u0435\u0441\u0442\u044C \u043C\u0438\u043D\u0443\u0442"),hr(Wn?"\u041B\u0435\u0432\u044B\u0439 \u043F\u0430\u043B\u0435\u0446 \u2014 \u0440\u0443\u043B\u044C \u0438 \u0433\u0430\u0437 \xB7 \u043F\u0440\u0430\u0432\u044B\u0439 \u2014 \u043A\u0430\u043C\u0435\u0440\u0430":"WASD \u2014 \u0435\u0445\u0430\u0442\u044C \xB7 \u041F\u0440\u043E\u0431\u0435\u043B \u2014 \u0440\u0443\u0447\u043D\u0438\u043A \xB7 E \u2014 \u0432\u044B\u0439\u0442\u0438 \u0438\u0437 \u043C\u0430\u0448\u0438\u043D\u044B",7),Mn.has("t")&&(P.left=+Mn.get("t"))},520)}var Re=[0,0,0,0,0,0,!1];function O_(i){let t=F_();if(P.busy>0&&(P.busy-=i),P.mode==="car"){let e=P.car,n=e.drive(i,t.thr,t.st,t.hand,Le.col),s=e.e;n>5&&P.t-P.lastBump>.3&&(oe.play("bump"),P.lastBump=P.t,P.shake=Math.min(1,n/22),Bi.burst(s.x,s.y+.6,s.z,12,6,.5,1.6,1.2,.7));for(let m of P.cars){if(m===e)continue;let f=s.x-m.e.x,y=s.z-m.e.z,_=Math.hypot(f,y);if(_<3.1&&_>.01&&Math.abs(s.y-m.e.y)<1.5){let b=f/_,C=y/_;s.x+=b*(3.1-_),s.z+=C*(3.1-_);let E=s.vx*b+s.vz*C;E<0&&(s.vx-=E*b*1.4,s.vz-=E*C*1.4,E<-4&&P.t-P.lastBump>.4&&(oe.play("bump"),P.lastBump=P.t,P.shake=.5,m.ai&&m.ai.type==="traffic"&&(m.stun=1.5,oe.play("honk"))))}}e.sync(),nt.x=s.x,nt.z=s.z,nt.y=s.y,nt.layer=s.layer,nt.h=e.h,n>15&&!P.flags.crash&&(P.flags.crash=1,Fe([["max","\u041E\u0447\u0435\u043D\u044C \u043F\u043B\u043E\u0445\u043E\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435. \u041E\u043D\u043E \u043C\u043D\u0435 \u043E\u0447\u0435\u043D\u044C \u043D\u0435 \u043D\u0440\u0430\u0432\u0438\u0442\u0441\u044F"]])),s.layer===2&&!P.flags.ice&&(P.flags.ice=1,Fe([["igor","\u041D\u0430 \u043B\u044C\u0434\u0443 \u043F\u0435\u0440\u044C\u044F \u0446\u0430\u043F\u0435\u043B\u044C \u043B\u0435\u0436\u0430\u0442. \u042F \u043F\u0440\u043E\u0432\u0435\u0440\u044F\u043B"],["geisler","\u0410 \u0437\u0430\u0447\u0435\u043C \u0432\u0442\u043E\u0440\u043E\u0439 \u0440\u0430\u0437?)\u{1F605}"]])),e.slip>8&&e.speed>13&&(P.driftT=(P.driftT||0)+i,P.driftT>.7&&!P.flags.drift&&(P.flags.drift=1,Fe([["max","\u041E\u0447 \u0437\u0430\u043B\u0438\u043F\u0430\u0442\u0435\u043B\u044C\u043D\u0430\u044F)) \u0422\u0430\u043C \u0441\u0430\u043C\u044B\u0439 \u043A\u0430\u0439\u0444 \u0432 \u0440\u0430\u0437\u0440\u0443\u0448\u0435\u043D\u0438\u044F\u0445"]])));let r=Math.sin(e.h),a=Math.cos(e.h),o=-a,l=r,c=e.speed,h=e.vy!==0,u=s.layer===2?s.y+.04:wc(s.x,s.z)?.035:.19,p=s.x-r*1.35-o*.9,d=s.z-a*1.35-l*.9,g=s.x-r*1.35+o*.9,x=s.z-a*1.35+l*.9;if(Re[6]&&!h){let m=Math.hypot(p-Re[0],d-Re[2]);m>4?Re[6]=!1:m>.7&&(yf.seg(Re[0],Re[1],Re[2],p,u,d,.16),yf.seg(Re[3],Re[4],Re[5],g,u,x,.16),Re[0]=p,Re[1]=u,Re[2]=d,Re[3]=g,Re[4]=u,Re[5]=x)}if(!Re[6]&&!h&&(Re[0]=p,Re[1]=u,Re[2]=d,Re[3]=g,Re[4]=u,Re[5]=x,Re[6]=!0),!h&&c>5){let m=e.slip>4?3:Math.random()<c/26?1:0;for(let f=0;f<m;f++){let y=Math.random()<.5?-.9:.9;Bi.emit(s.x-r*1.5+o*y,s.y+.15,s.z-a*1.5+l*y,-r*2+(Math.random()-.5)*4+s.vx*.3,1.5+Math.random()*2.5,-a*2+(Math.random()-.5)*4+s.vz*.3,.6,.2,.24,.34)}}Zn.intensity+=(26-Zn.intensity)*yn(5,i),Zn.position.set(s.x+r*1.6,s.y+1,s.z+a*1.6),Zn.target.position.set(s.x+r*22,s.y-1.2,s.z+a*22),Zn.target.updateMatrixWorld(),zi.u.uCar.value.set(s.x+r*2,s.y+.8,s.z+a*2),zi.u.uCarDir.value.set(r,-.02,a),zi.u.uHead.value=1,hr("")}else{let e=Math.hypot(t.st,t.thr);if(e>.1){let r=Math.sin(Gt.yaw),a=Math.cos(Gt.yaw),o=r*t.thr-a*t.st,l=a*t.thr+r*t.st,c=Math.hypot(o,l);o/=c,l/=c;let h=7.4*Math.min(1,e);nt.vx+=(o*h-nt.vx)*yn(12,i),nt.vz+=(l*h-nt.vz)*yn(12,i),nt.h+=pi(nt.h,Math.atan2(o,l))*yn(12,i)}else nt.vx-=nt.vx*yn(10,i),nt.vz-=nt.vz*yn(10,i);nt.x+=nt.vx*i,nt.z+=nt.vz*i,Le.col.resolve(nt,.45,nt.layer,0);for(let r of P.cars){let a=nt.x-r.e.x,o=nt.z-r.e.z,l=Math.hypot(a,o);l<2&&l>.01&&Math.abs(nt.y-r.e.y)<1.5&&(nt.x+=a/l*(2-l),nt.z+=o/l*(2-l))}nt.x=Pe(nt.x,-er,er),nt.z=Pe(nt.z,-nr,nr);let n=Oi(nt);nt.vy>0||nt.y>n+.3?(nt.vy-=26*i,nt.y+=nt.vy*i,nt.y<=n&&(nt.y=n,nt.vy=0)):nt.y+=(n-nt.y)*yn(14,i),nt.walk=Pe(Math.hypot(nt.vx,nt.vz)/7,0,1),Jn.position.set(nt.x,nt.y+(nt.layer===0&&!wc(nt.x,nt.z)?.15:0),nt.z),Jn.rotation.set(nt.vy!==0?P.time*10:0,nt.h,0),xo(Jn,P.time,nt.walk,!1),Zn.intensity+=(0-Zn.intensity)*yn(5,i),zi.u.uHead.value=0;let s=Gf(5);hr(s?Wn?"\u0416\u043C\u0438 \u{1F697}, \u0447\u0442\u043E\u0431\u044B \u0441\u0435\u0441\u0442\u044C"+(s.ai?" (\u0443\u0433\u043E\u043D!)":""):"E \u2014 \u0441\u0435\u0441\u0442\u044C \u0432 \u043C\u0430\u0448\u0438\u043D\u0443"+(s.ai?" (\u0443\u0433\u043E\u043D!)":""):""),ut("bAct").textContent=s?"\u{1F697}":"\u{1F980}"}for(let e of Le.anomalies)if(Math.hypot(nt.x-e.x,nt.z-e.z)<e.r+(P.mode==="car"?1.2:.3)&&nt.y<2&&P.t-(P.zapT||0)>1.2){P.zapT=P.t,oe.play("zap"),P.shake=1,vi.mFinal.uniforms.uFlash.value=.5,Bi.burst(e.x,2,e.z,40,10,.9,.6,2.2,1.2);let n=Math.atan2(nt.x-e.x,nt.z-e.z)+(Math.random()-.5);P.mode==="car"?(P.car.e.vx=Math.sin(n)*16,P.car.e.vz=Math.cos(n)*16,P.car.launch(13)):(nt.vx=Math.sin(n)*13,nt.vz=Math.cos(n)*13,nt.vy=12,nt.y+=.4),P.flags.zap||(P.flags.zap=1,Fe([["kos","\u042F \u0436\u0435 \u0441\u043A\u0430\u0437\u0430\u043B: \u0432 \u0430\u043D\u043E\u043C\u0430\u043B\u0438\u0438 \u043D\u0435 \u043B\u0435\u0437\u044C"],["dima","\u042D\u0442\u043E \u043D\u0435 \u0431\u0430\u0433. \u042D\u0442\u043E \u043D\u043E\u0432\u0430\u044F \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u044C)"]]))}}function Gf(i){let t=null,e=i;for(let n of P.cars){if(n.kind==="mod")continue;let s=Math.hypot(n.e.x-nt.x,n.e.z-nt.z);s<e&&Math.abs(n.e.y-nt.y)<2&&(e=s,t=n)}return t}function Jc(){if(!(P.state!=="play"||P.modal))if(P.mode==="car"){let i=P.car;if(i.speed>9){hr("\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u043F\u0440\u0438\u0442\u043E\u0440\u043C\u043E\u0437\u0438",1.4);return}let t=Math.cos(i.h),e=-Math.sin(i.h);Le.col.near(i.e.x+t*2,i.e.z+e*2,.5)&&(t=-t,e=-e),nt.x=i.e.x+t*2,nt.z=i.e.z+e*2,nt.y=i.e.y,nt.vx=nt.vz=0,nt.h=i.h,i.e.vx=i.e.vz=0,i.vf=0,P.mode="foot",Jn.visible=!0,Gt.yaw+=Gt.off,Gt.off=0,oe.play("door"),!P.flags.exit&&P.pid!=="nikita"&&(P.flags.exit=1,Fe([["nikita","\u0427\u0435 \u0442\u0430\u043C \u0434\u0435\u043B\u0430\u0442\u044C \u043D\u0430\u0434\u043E?"]]))}else{let i=Gf(5);if(!i)return;i.ai&&(i.ai=null,i.stun=0,P.stats.stolen++,_i(60),Mi("\u0423\u0413\u041E\u041D","+60 \xB7 \u0442\u0435\u043F\u0435\u0440\u044C \u0442\u044B \u043A\u0430\u043A \u0442\u0438\u043F\u044B"),P.stats.stolen===1&&Fe([["sys","\u0421\u0438\u0433\u043D\u0430\u043B\u043A\u0430 \u043E\u0440\u0451\u0442 \u0433\u043E\u043B\u043E\u0441\u043E\u043C \u041C\u0430\u043A\u0441\u0430. \u041D\u0438\u043A\u0442\u043E \u043D\u0435 \u0441\u043B\u0443\u0448\u0430\u0435\u0442"],["max",{voice:23}]]),Kc(15)),i.maxSpeed=i.kind==="van"?31:38,P.car=i,i.g.add(Df),P.mode="car",Jn.visible=!1,hr(""),ut("bAct").textContent="\u{1F6AA}",oe.play("door"),Re[6]=!1}}var Rf=0;function z_(i){for(let t of P.npcs){let e=Math.hypot(nt.x-t.x,nt.z-t.z);if(t.cool-=i,t.talk-=i,e<90&&(xo(t.rak,P.time,0,t.talk>0),zf(t.rak),e<16&&(t.rak.rotation.y+=pi(t.rak.rotation.y,Math.atan2(nt.x-t.x,nt.z-t.z))*yn(5,i)),e<7.5&&t.cool<=0&&P.time>Rf)){let n=or[t.id].quotes;t.cool=14,t.talk=3.2,Rf=P.time+3.4;let s=ut("speak");s.innerHTML=`<b>${or[t.id].name}:</b> ${xi(n[Math.floor(Math.random()*n.length)])}`,s.style.opacity=1,setTimeout(()=>{s.style.opacity=0},3200)}}}function Kc(i){P.wanted=Math.max(P.wanted,i),ut("wanted").classList.remove("hidden");let t=0;for(;P.mods.length<2&&t++<80;){let e=Lc(nt.x+(Math.random()-.5)*200,nt.z+(Math.random()-.5)*200,0),n=pn[e],s=Math.hypot(n.x-nt.x,n.z-nt.z);if(s<55||s>190)continue;let r=new rr(ln,n.x,n.z,Math.atan2(nt.x-n.x,nt.z-n.z),15265528,"mod");r.ai={type:"mod",stuck:0,rev:0},r.maxSpeed=28,P.mods.push(r),P.cars.push(r)}}function Cf(i){P.wanted=0,P.caught=0,ut("wanted").classList.add("hidden");for(let t of P.mods)ln.remove(t.g),P.cars.splice(P.cars.indexOf(t),1);P.mods.length=0,i&&(_i(150),Mi("\u041E\u0422\u041E\u0420\u0412\u0410\u041B\u0421\u042F","+150"),P.flags.esc||(P.flags.esc=1,Fe([["geisler","\u041C\u0435\u043D\u044F \u0443\u0434\u0438\u0432\u043B\u044F\u0435\u0442 \u043F\u043E\u0447\u0435\u043C\u0443 \u043F\u0441 \u0434\u043E \u0441\u0438\u0445 \u043F\u043E\u0440 \u044D\u0442\u0443 \u043B\u0430\u0432\u043E\u0447\u043A\u0443 \u043D\u0435 \u043F\u0440\u0438\u043A\u0440\u044B\u043B\u0438))"]])))}function B_(i){if(P.wanted<=0)return;P.wanted-=i,ut("wt").textContent=Math.ceil(P.wanted)+" \u0441";let t=!1;for(let e of P.mods){let n=e.e,s=nt.x-n.x,r=nt.z-n.z,a=Math.hypot(s,r),o=pi(e.h,Math.atan2(s,r)),l=Pe(-o*2.2,-1,1),c=1;if(e.ai.rev>0?(e.ai.rev-=i,c=-1,l=-l):(e.speed<1.5?e.ai.stuck+=i:e.ai.stuck=0,e.ai.stuck>1.1&&(e.ai.rev=.9,e.ai.stuck=0)),Math.abs(o)>1.2&&e.speed>12&&(c=-.4),P.modal&&(c=0,l=0),e.drive(i,c,l,!1,Le.col),e.sync(),e.barMat.color.setHex((P.time*7|0)%2?2245887:16720435),a<5.2&&Math.abs(nt.y-n.y)<2&&(t=!0),a>240){let h=Lc(nt.x,nt.z,70,150);h>=0&&(n.x=pn[h].x,n.z=pn[h].z,n.y=0,n.vx=n.vz=0)}}if(P.caught=t?P.caught+i:Math.max(0,P.caught-i*.5),P.caught>1&&!P.modal){P.stats.bans++,oe.play("bad"),P.shake=1;let e=Dc[Math.floor(Math.random()*Dc.length)];P.mode==="car"&&(P.car.e.vx=P.car.e.vz=0),qc({title:"\u{1F6A8} \u0411\u0410\u041D! \u0412\u043E\u043F\u0440\u043E\u0441 \u043E\u0442 \u043C\u043E\u0434\u0435\u0440\u0430\u0442\u043E\u0440\u0430",text:e[0],opts:[{label:e[1]},{label:e[2]}]},()=>{Fe([["arkasha","\u0412\u0441\u0435 \u0442\u0430\u043A, \u0442\u043E\u043B\u044C\u043A\u043E \u043D\u0430\u043E\u0431\u043E\u0440\u043E\u0442"],["sys","\u0411\u0430\u043D: \u22128 \u0441\u0435\u043A\u0443\u043D\u0434 \u0438 \u2212150 \u043E\u0447\u043A\u043E\u0432"]]),P.left=Math.max(3,P.left-8),_i(-150),P.busy=.4,Cf(!1)}),P.caught=0}else P.wanted<=0&&!P.modal&&Cf(!0)}function Wf(i){let t=wo[i];P.mission={id:i,def:t,steps:t.steps.slice(),si:-1,t0:P.t,bonus:0,pts:[]},Fe(t.intro),P.introHold=P.t+t.intro.length*1.15,fr()}function k_(i){return i.raki?["arkasha","max","igor","pasha","nikita","geisler"].filter(e=>e!==P.pid).slice(0,i.raki).map(e=>({x:dn[e][0],z:dn[e][1],who:e,done:!1})):i.pts.map(t=>({x:dn[t][0],z:dn[t][1],done:!1}))}function fr(){let i=P.mission;if(i.si++,i.si>=i.steps.length)return V_();let t=i.steps[i.si];if(t.enter&&Fe(t.enter),t.timer&&(i.deadline=P.t+t.timer),i.prog=0,t.choice){i.pts=[],qc(t.choice,e=>{P.mission===i&&(e.say&&Fe(e.say),e.bonus&&(i.bonus+=e.bonus),e.flag&&(P.flags[e.flag]=1),e.add&&i.steps.splice(i.si+1,0,...e.add),fr())});return}if(t.duel){i.pts=[],H_(i);return}i.pts=t.pts||t.raki?k_(t):[],ut("objtext").textContent=t.text,oe.play("step")}function H_(i){let t={me:5,ai:6,kids:!0,round:1},e=()=>{let n=[{label:"\u0410\u0442\u0430\u043A\u043E\u0432\u0430\u0442\u044C \u043A\u043B\u0435\u0448\u043D\u0451\u0439",k:"a"},{label:"\u0417\u0430\u043A\u043E\u043F\u0430\u0442\u044C\u0441\u044F",k:"d"}];t.kids&&n.push({label:"\u041F\u043E\u0437\u0432\u0430\u0442\u044C \u0434\u0435\u0442\u0435\u0439 \u0438\u0437 Tekken",k:"k"}),qc({title:"\u0418\u0433\u0440\u0430 \u041D\u0438\u043A\u0438\u0442\u044B \xB7 \u0445\u043E\u0434 "+t.round,text:"\u041F\u043E\u0448\u0430\u0433\u043E\u0432\u0430\u044F \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u044F, 4 \u0440\u0430\u0441\u044B, AI \u043D\u0430 GPT-6-Luna. \u0422\u044B: "+"\u{1F980}".repeat(Math.max(0,t.me))+" \xB7 AI: "+"\u{1F916}".repeat(Math.max(0,t.ai))+". \u0417\u0430\u043A\u0430\u043F\u044B\u0432\u0430\u0442\u044C\u0441\u044F \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E, \u043D\u043E \u0432\u0440\u0435\u043C\u044F \u0438\u0434\u0451\u0442.",opts:n},s=>{if(P.mission!==i)return;let r=3;s.k==="a"?t.ai-=2:s.k==="d"?(t.ai-=1,r=0):(t.ai-=3,t.kids=!1,r=1),t.ai>0&&(t.me-=r),t.round++,t.ai<=0?(i.bonus+=Math.max(0,5-t.round)*60,Gr("sys","AI \u043F\u043E\u0432\u0435\u0440\u0436\u0435\u043D. \u0425\u043E\u0434\u043E\u0432: "+(t.round-1)),fr()):t.me<=0?(i.lost=!0,Gr("sys","AI \u0441\u0434\u0435\u043B\u0430\u043B \u0442\u0435\u0431\u044F, \u043A\u0430\u043A \u043C\u0430\u043B\u0435\u043D\u044C\u043A\u043E\u0433\u043E"),fr()):e()})};e()}function Xf(){P.mission=null,P.nextM=P.t+4.5,P.target=null,lr.forEach(i=>i.hide()),ut("objtext").textContent=P.queue.length?"\u0416\u0434\u0438 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0439 \u0432 \u0447\u0430\u0442\u0435":"\u041F\u043E\u0440\u0443\u0447\u0435\u043D\u0438\u044F \u043A\u043E\u043D\u0447\u0438\u043B\u0438\u0441\u044C. \u0421\u043E\u0431\u0438\u0440\u0430\u0439 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438 \u0418\u0433\u043E\u0440\u044F",ut("dist").textContent=""}function V_(){let i=P.mission,t=i.lost?0:Math.max(0,Math.round((i.def.par-(P.t-i.t0))*8)),e=Math.round(i.def.reward*(i.lost?.4:1))+i.bonus+t;_i(e),P.stats.missions++,Mi((i.lost?"\u2248 ":"\u2714 ")+i.def.title,"+"+e+(t?" \xB7 \u0437\u0430 \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C +"+t:"")),oe.play("win"),Fe(i.lost&&i.def.outroLost?i.def.outroLost:i.def.outro),Xf()}function G_(){let i=P.mission,t=i.def.failReward||150;_i(t),Mi("\u2716 "+i.def.title,"\u043D\u0435 \u0443\u0441\u043F\u0435\u043B \xB7 +"+t),oe.play("bad"),Fe(i.def.fail||[]),Xf()}function W_(i){if(!P.mission){P.queue.length&&P.t>P.nextM&&!P.sayQ.length&&Wf(P.queue.shift());return}let t=P.mission,e=t.steps[t.si];if(!e)return;if(t.deadline&&P.t>t.deadline&&!P.modal)return G_();if(e.choice||e.duel)return;if(e.slow){let o=P.mode==="car"?P.car.speed:99;o>1&&o<7?t.prog+=i:o>=7&&(t.prog=Math.max(0,t.prog-i*1.5)),lr.forEach(l=>l.hide()),P.target=null,t.prog>=e.slow&&(e.say&&Fe(e.say),e.big&&Mi(e.big[0],e.big[1]),fr());return}let n=0,s=1e9,r=null,a=0;for(let o of t.pts){if(o.done)continue;let l=Math.hypot(nt.x-o.x,nt.z-o.z),c=!e.foot||P.mode==="foot";if(l<(e.r||9)&&c){if(o.done=!0,oe.play("step"),Bi.burst(o.x,1.5,o.z,24,7,.8,2.2,1.6,.4),o.who){Gr(o.who,_f[o.who]||"\u042F \u043F\u0430\u0441");let h=P.npcs.find(u=>u.id===o.who);h&&(h.talk=3)}if(e.each){let h=t.pts.filter(u=>u.done).length;Gr("sys",e.each+[34,61,97][h-1]+"%")}continue}if(e.foot&&P.mode==="car"&&l<60&&hr("\u0412 \u0417\u043E\u043D\u0443 \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u0435\u0448\u043A\u043E\u043C: \u0432\u044B\u0439\u0434\u0438 \u0438\u0437 \u043C\u0430\u0448\u0438\u043D\u044B",.3),n++,l<s&&(s=l,r=o),a<3){let h={x:o.x,z:o.z,y:0};lr[a++].set(o.x,Oi(h),o.z,e.foot?8257373:16762941)}}for(;a<3;a++)lr[a].hide();if(!n){e.say&&Fe(e.say),e.big&&Mi(e.big[0],e.big[1]),e.wanted&&Kc(e.wanted),fr();return}P.target=r,P.targetD=s}var zo=document.createElement("canvas");zo.width=1200;zo.height=800;Le.drawMap(zo.getContext("2d"),2);var X_=ut("map").getContext("2d");function q_(){let i=X_,t=300/420;i.setTransform(1,0,0,1,0,0),i.fillStyle="#0a0e1a",i.fillRect(0,0,300,300),i.setTransform(t,0,0,t,150-(nt.x+300)*2*t,150-(nt.z+200)*2*t),i.drawImage(zo,0,0);let e=(n,s,r,a)=>{i.fillStyle=a,i.beginPath(),i.arc((n+300)*2,(s+200)*2,r,0,7),i.fill()};for(let n of ds)n.got||e(n.x,n.z,5,n.type===0?"#ffd24a":n.type===1?"#9fe0ff":"#ff6ad5");for(let n of P.mods)e(n.e.x,n.e.z,9,(P.time*6|0)%2?"#4a7dff":"#ff4a5a");if(i.setTransform(1,0,0,1,0,0),P.mission)for(let n of P.mission.pts){if(n.done)continue;let s=(n.x-nt.x)*2*t,r=(n.z-nt.z)*2*t,a=Math.hypot(s,r);a>138&&(s*=138/a,r*=138/a),i.fillStyle="#ffc83d",i.strokeStyle="#000",i.lineWidth=3,i.beginPath(),i.arc(150+s,150+r,10+Math.sin(P.time*5)*2,0,7),i.fill(),i.stroke()}i.translate(150,150),i.rotate(-nt.h),i.fillStyle="#fff",i.strokeStyle="#ff3d8a",i.lineWidth=4,i.beginPath(),i.moveTo(0,14),i.lineTo(9,-10),i.lineTo(0,-5),i.lineTo(-9,-10),i.closePath(),i.fill(),i.stroke(),i.setTransform(1,0,0,1,0,0)}var Pf=-1;function Y_(i){let t=Math.max(0,Math.ceil(P.left));if(t!==Pf){Pf=t;let e=ut("timer");e.textContent=String(Math.floor(t/60)).padStart(2,"0")+":"+String(t%60).padStart(2,"0"),e.classList.toggle("hot",t<=30),t<=10&&t>0&&oe.play("tick")}if(P.hudT-=i,!(P.hudT>0)){if(P.hudT=.1,q_(),P.mission){let e=P.mission,n=e.steps[e.si],s="";if(n&&n.slow)s="\xB7 \u0442\u0435\u0440\u043F\u0435\u043D\u0438\u0435 "+Math.min(100,Math.round(100*e.prog/n.slow))+"% \xB7 "+Math.round(P.car.speed*3.6)+" \u043A\u043C/\u0447";else if(P.target&&e.pts.length){s="\xB7 "+Math.round(P.targetD)+" \u043C";let r=pi(Gt.yaw+(P.mode==="car"?Gt.off:0),Math.atan2(P.target.x-nt.x,P.target.z-nt.z));ut("arrow").style.transform="rotate("+-r+"rad)"}e.deadline&&(s+=" \xB7 \u23F1 "+Math.max(0,Math.ceil(e.deadline-P.t))+" \u0441"),ut("dist").textContent=s}P.placeT-=.1;for(let e of rf)if(Math.hypot(nt.x-e.x,nt.z-e.z)<e.r&&P.lastPlace!==e&&P.placeT<=0){P.lastPlace=e,P.placeT=6;let n=ut("place");n.textContent=e.name,n.style.opacity=1,setTimeout(()=>{n.style.opacity=0},3500)}}}function Z_(i){let t,e,n,s;if(Gt.manual+=i,P.mode==="car"){let x=P.car,m=x.speed;t=x.e.x,e=x.e.y+1.25,n=x.e.z,s=8.4+m*.085,Gt.manual>1.6&&ps===null&&(Gt.off-=Gt.off*yn(2.2,i)),Gt.yaw+=pi(Gt.yaw,x.h)*yn(3.4+m*.06,i),De.fov=Do+Pe(m*.26,0,9)}else t=nt.x,e=nt.y+1.55,n=nt.z,s=6.4,De.fov=Do,Gt.manual>2.2&&nt.walk>.3&&ps===null&&(Gt.yaw+=pi(Gt.yaw,nt.h)*yn(1.1,i));let r=Gt.yaw+(P.mode==="car"?Gt.off:0),a=Math.cos(Gt.pitch),o=Math.sin(Gt.pitch),l=Math.sin(r),c=Math.cos(r),h=1;for(let x=1;x<=7;x++){let m=x/7;if(Le.col.blocked(t-l*s*a*m,n-c*s*a*m)){h=Math.max(.16,(x-1)/7);break}}let u=t-l*s*a*h,p=n-c*s*a*h,d=e+.7+s*o*(.55+.45*h)+(1-h)*5;if(P.t<2.8){let x=1-Math.pow(1-P.t/2.8,3),m=1-x;Gt.pos.set(u-l*46*m,d+34*m,p-c*46*m),Gt.init=!0}else if(!Gt.init)Gt.pos.set(u,d,p),Gt.init=!0;else{let x=yn(10,i);Gt.pos.x+=(u-Gt.pos.x)*x,Gt.pos.y+=(d-Gt.pos.y)*x,Gt.pos.z+=(p-Gt.pos.z)*x}Gt.pos.y=Math.max(Gt.pos.y,Ec(Math.abs(Gt.pos.x))+.7),P.shake=Math.max(0,P.shake-i*3),De.position.set(Gt.pos.x+(Math.random()-.5)*P.shake*.5,Gt.pos.y+(Math.random()-.5)*P.shake*.5,Gt.pos.z),De.lookAt(t+l*3,e+.5,n+c*3);let g=td.free;g&&(De.position.set(g[0],g[1],g[2]),De.lookAt(g[3],g[4],g[5])),De.updateProjectionMatrix()}function $_(i){P.t+=i,P.left-=i,O_(i);for(let t of P.cars)t.ai&&t.ai.type==="traffic"&&_o(t,i,nt.x,nt.z);if(wn.begin(),B_(i),z_(i),W_(i),Of(!0),Yc(),Le.fire){let t=Le.fire,e=.7+Math.random()*.5;wn.add(t[0],t[1],t[2],4.5*e,2.4*e,.9*e,.2),Math.random()<.3&&Bi.emit(t[0],t[1],t[2],(Math.random()-.5)*1.5,3+Math.random()*3,(Math.random()-.5)*1.5,1.2,2.5,.9,.2)}if(P.mission&&P.mission.id==="kos"&&P.mission.si<=1){let t=dn.artifact;wn.add(t[0],1.4+Math.sin(P.time*3)*.2,t[1],5,2.6,1.3,.2)}for(let t of Le.towers)wn.add(t.x,t.h+.6,t.z,4,(P.time*2|0)%2?2.2:.3,.2,.15);if(wn.end(),P.sayT-=i,P.sayQ.length&&P.sayT<=0){let t=P.sayQ.shift();Gr(t[0],t[1]),P.sayT=1.15}for(;P.amb<Ao.length&&Ao[P.amb][0]<=P.t;){let t=Ao[P.amb++];!(t[1]==="kos"&&P.flags.witcher&&t[2]==="\u041D\u0430 \u0421\u0435\u0440\u0433\u0435\u044F \u0441\u0442\u043E\u043B\u0438\u043A")&&!(P.flags.crash&&t[0]===288)&&!(t[3]&&P.run&&P.run.includes(t[3]))&&P.sayQ.push([t[1],t[2]])}for(;P.cd<Ro.length&&P.left<=Ro[P.cd][0];){let t=Ro[P.cd++];P.left>t[0]-3&&P.sayQ.push(["arkasha",t[1]])}P.left<150&&!P.flags.delay&&(P.flags.delay=1,P.left+=15,Fe([["pasha","\u041F\u0435\u0440\u0435\u043D\u0435\u0441\u043B\u0438!"],["sys","\u0420\u0435\u043B\u0438\u0437 \u043F\u0435\u0440\u0435\u043D\u0435\u0441\u043B\u0438 \u043D\u0430 15 \u0441\u0435\u043A\u0443\u043D\u0434. +15 \u0441\u0435\u043A"],["pasha","\u041D\u0443 \u043E\u0431\u0435\u0449\u0430\u044E\u0442 \u0431\u0435\u0437 \u043F\u0435\u0440\u0435\u043D\u043E\u0441\u043E\u0432"]]),Mi("\u041F\u0415\u0420\u0415\u041D\u041E\u0421","+15 \u0441\u0435\u043A\u0443\u043D\u0434")),Jf&&!Mf&&(Mf=!0,Fe([["sanya","\u041F\u0440\u0438\u0448\u043B\u043E\u0441\u044C \u043E\u043F\u0435\u0440\u0430\u0442\u0438\u0432\u043A\u0438 \u0434\u043E\u043A\u0443\u043F\u0438\u0442\u044C, \u0447\u0442\u043E\u0431\u044B \u0433\u0440\u0430\u0444\u0438\u043A\u0430 \u043D\u043E\u0440\u043C \u0431\u044B\u043B\u0430\u{1F605}"],["sys","\u0413\u0440\u0430\u0444\u0438\u043A\u0430 \u043F\u043E\u043D\u0438\u0436\u0435\u043D\u0430: \u0442\u0430\u043A \u043F\u043B\u0430\u0432\u043D\u0435\u0435"]])),oe.intensity+=((P.left<60?1:P.wanted>0?.85:.5)-oe.intensity)*yn(1,i),Le.setShadowCenter(nt.x,nt.z),Z_(i),Y_(i),P.left<=0&&$f()}var Lf={url:"https://ecwhfahziwuocmxzyomu.supabase.co/rest/v1/gtr_scores",key:"sb_publishable_srHhvRICnwOl-3P-CPRnKg_Oyx7JTyc"};function qf(i,t){let e=typeof AbortController!="undefined"?new AbortController:null,n=setTimeout(()=>{e&&e.abort()},7e3),s={headers:{apikey:Lf.key,"Content-Type":"application/json",Prefer:"return=minimal"}};return e&&(s.signal=e.signal),t&&(s.method="POST",s.body=JSON.stringify(t)),fetch(Lf.url+i,s).then(r=>{if(clearTimeout(n),!r.ok)throw new Error("lb "+r.status);return t?null:r.json()},r=>{throw clearTimeout(n),r})}var J_=i=>{let t=new Date(i);if(isNaN(t))return"";let e=n=>String(n).padStart(2,"0");return e(t.getDate())+"."+e(t.getMonth()+1)+" "+e(t.getHours())+":"+e(t.getMinutes())},Xr='<div class="h">\u{1F3C6} \u0422\u0410\u0411\u041B\u0418\u0426\u0410 \u0427\u0410\u0422\u0410</div>',Yf=()=>qf("?select=rak,score,created_at,ver&order=score.desc,created_at.desc&limit=150");function Zf(i,t,e){i=i.filter(l=>or[l.rak]);let n=i.filter(l=>(l.ver||1)===To),s=i.filter(l=>(l.ver||1)!==To),r=t?n.findIndex(l=>l.rak===t.rak&&l.score===t.score):-1,a=(l,c,h)=>'<div class="r'+(c===r&&!h?" me":"")+(h?" o":"")+'"><span>'+(h?"":c+1+".")+'</span><img src="'+Xc[l.rak]+'" alt=""><b>'+or[l.rak].name+(c===r&&!h?" \xB7 \u044D\u0442\u043E \u0442\u044B":"")+"</b><i>"+J_(l.created_at)+"</i><em>"+(+l.score||0)+"</em></div>",o=Xr+'<div class="s">\u0432\u0441\u0435 \u0437\u0430\u0431\u0435\u0433\u0438 \xB7 \u043B\u0443\u0447\u0448\u0438\u0435 \u0441\u0432\u0435\u0440\u0445\u0443 \xB7 \u0432\u0441\u0435\u0433\u043E '+n.length+"</div>";return n.length||(o+='<div class="e">\u041F\u043E\u043A\u0430 \u043F\u0443\u0441\u0442\u043E. \u0414\u043E\u0438\u0433\u0440\u0430\u0439 \u0434\u043E \u043F\u043E\u043B\u0443\u043D\u043E\u0447\u0438 \u2014 \u0431\u0443\u0434\u0435\u0448\u044C \u043F\u0435\u0440\u0432\u044B\u043C.</div>'),o+=n.slice(0,e).map((l,c)=>a(l,c)).join(""),r>=e&&(o+='<div class="e">\u2026</div>'+a(n[r],r)),n.length===1&&(o+='<div class="e">\u041F\u043E\u043A\u0430 \u0442\u0443\u0442 \u043E\u0434\u0438\u043D \u0437\u0430\u0431\u0435\u0433. \u041A\u0438\u0434\u0430\u0439 \u0441\u0441\u044B\u043B\u043A\u0443 \u0432 \u0447\u0430\u0442.</div>'),s.length&&(o+='<div class="s" style="margin-top:8px">\u043F\u0440\u043E\u0448\u043B\u0430\u044F \u0432\u0435\u0440\u0441\u0438\u044F \u0438\u0433\u0440\u044B (\u0431\u0435\u0437 \u043D\u043E\u0432\u044B\u0445 \u043F\u043E\u0440\u0443\u0447\u0435\u043D\u0438\u0439) \xB7 \u0432\u043D\u0435 \u0437\u0430\u0447\u0451\u0442\u0430</div>'+s.slice(0,Math.max(2,e>>2)).map((l,c)=>a(l,c,!0)).join("")),o}function K_(){let i=P.stats,t=(Mn.has("debug")||Mn.has("t")||Mn.has("q")||Mn.has("m"))&&!Mn.has("lb"),e=ut("flb"),n=P.score>0&&!t,s=n?{rak:P.pid,score:Math.min(P.score,12e3)}:null;e.classList.remove("hidden"),e.innerHTML=Xr+'<div class="e">\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u044E\u2026</div>',(n?qf("",{ver:To,rak:s.rak,score:s.score,missions:Math.min(i.missions,6),cards:Math.min(i.cards,2e3),bans:Math.min(i.bans,99)}).catch(()=>null):Promise.resolve()).then(Yf).then(a=>{e.innerHTML=Zf(a,s,8)}).catch(()=>{e.innerHTML=Xr+'<div class="e">\u041D\u0435\u0442 \u0441\u0432\u044F\u0437\u0438 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043E\u043C \u0440\u0435\u043A\u043E\u0440\u0434\u043E\u0432. \u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u043E\u0441\u0442\u0430\u043B\u0441\u044F \u043D\u0430 \u044D\u0442\u043E\u043C \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0435.</div>'})}function Q_(){let i=ut("lbmc");ut("lbm").classList.remove("hidden"),i.innerHTML=Xr+'<div class="e">\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u044E\u2026</div>',Yf().then(t=>{i.innerHTML=Zf(t,null,30)}).catch(()=>{i.innerHTML=Xr+'<div class="e">\u041D\u0435\u0442 \u0441\u0432\u044F\u0437\u0438 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043E\u043C \u0440\u0435\u043A\u043E\u0440\u0434\u043E\u0432.</div>'})}var En=null;function $f(){P.state="final",oe.play("bell"),oe.intensity=1,ut("hud").classList.add("hidden"),ut("modal").classList.add("hidden"),ut("phone").classList.add("hidden"),ut("final").classList.remove("hidden"),vi.mFinal.uniforms.uFlash.value=1,Jn&&(Jn.visible=!1),Zn.intensity=0,zi.u.uHead.value=0,lr.forEach(r=>r.hide());let i=P.stats,t=Ic[0];for(let r of Ic)P.score>=r[0]&&(t=r);let e=0;try{e=+(localStorage.getItem("gtr_best")||0),P.score>e&&localStorage.setItem("gtr_best",P.score)}catch{}En={t:0,i:0,fw:0,rank:t,best:e};let n=location.origin+location.pathname,s=`\u{1F980} Grand Theft Raki: \u041D\u043E\u0432\u043E\u0441\u0438\u0431\u0438\u0440\u0441\u043A
\u0418\u0433\u0440\u0430\u043B \u0437\u0430: ${Io}
\u0421\u0447\u0451\u0442: ${P.score} \u2014 \u0437\u0432\u0430\u043D\u0438\u0435 ${t[1]}
\u041F\u043E\u0440\u0443\u0447\u0435\u043D\u0438\u0439: ${i.missions}/${i.total} \xB7 \u043A\u0430\u0440\u0442\u043E\u0447\u0435\u043A \u0418\u0433\u043E\u0440\u044F: ${i.cards} \u0438\u0437 144 \xB7 \u0431\u0430\u043D\u043E\u0432 \u043E\u0442 \u043C\u043E\u0434\u0435\u0440\u0430\u0442\u043E\u0440\u043E\u0432: ${i.bans}
${n}`;ut("frank").textContent=t[1],ut("fscore").textContent=P.score+" \u043E\u0447\u043A.",ut("fnote").innerHTML=xi(t[2])+"<br><i>"+xi(vf[P.pid]||"")+"</i>",ut("fstats").innerHTML=`\u0418\u0433\u0440\u0430\u043B \u0437\u0430: <b>${xi(Io)}</b> \xB7 \u043F\u043E\u0440\u0443\u0447\u0435\u043D\u0438\u0439 ${i.missions}/${i.total}<br>\u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438 ${i.cards}/144 \xB7 \u043F\u0435\u0440\u044C\u044F ${i.feathers}/6 \xB7 \u043E\u0440\u0445\u0438\u0434\u0435\u0438 ${i.orchids}/6 \xB7 \u0443\u0433\u043E\u043D\u043E\u0432 ${i.stolen} \xB7 \u0431\u0430\u043D\u043E\u0432 ${i.bans}`+(e?`<br>\u043F\u0440\u043E\u0448\u043B\u044B\u0439 \u0440\u0435\u043A\u043E\u0440\u0434 \u043D\u0430 \u044D\u0442\u043E\u043C \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0435: ${e}`:""),ut("fcopy").onclick=async()=>{let r=!1;try{await navigator.clipboard.writeText(s),r=!0}catch{}if(!r){let a=document.createElement("textarea");a.value=s,a.style.cssText="position:fixed;left:0;top:0;opacity:0",document.body.appendChild(a),a.focus(),a.select();try{r=document.execCommand("copy")}catch{r=!1}a.remove()}r?ut("fcopy").textContent="\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u043E \u2714 \u0432\u0441\u0442\u0430\u0432\u043B\u044F\u0439 \u0432 \u0447\u0430\u0442":(ut("fstats").innerHTML=`<textarea readonly style="width:100%;height:120px;font:13px system-ui;background:#111a2a;color:#fff;border:1px solid #445;border-radius:10px;padding:8px;-webkit-user-select:text;user-select:text">${xi(s)}</textarea>`,ut("fcopy").textContent="\u0412\u044B\u0434\u0435\u043B\u0438 \u0438 \u0441\u043A\u043E\u043F\u0438\u0440\u0443\u0439 \u0442\u0435\u043A\u0441\u0442 \u0432\u044B\u0448\u0435")},ut("fagain").onclick=()=>location.reload(),K_()}function j_(i){En.t+=i;let t=vi.mFinal.uniforms;t.uFlash.value=Math.max(0,t.uFlash.value-i*1.2);let e=En.t*.12+2.6;if(De.fov=Do,De.position.set(176+Math.cos(e)*60,22+Math.min(En.t,30)*.7,-30+Math.sin(e)*60),De.lookAt(178,14,-30),De.updateProjectionMatrix(),Le.setShadowCenter(176,-30),En.fw-=i,En.fw<=0&&En.t<40){En.fw=.35+Math.random()*.5;let n=[[3,.4,1.6],[.4,2.4,3],[3,2.2,.4],[.6,3,1],[3,.6,.4]][Math.floor(Math.random()*5)];Bi.burst(150+Math.random()*60,34+Math.random()*22,-60+Math.random()*60,60,13,1.7,n[0],n[1],n[2]),Math.random()<.6&&oe.play("boom")}for(let n of P.cars)n.ai&&n.ai.type==="traffic"&&_o(n,i,1e5,1e5);if(wn.begin(),Yc(),Of(!1),wn.end(),En.i<kr.length&&En.t>1.6+En.i*.95){let n=kr[En.i++],s=ut("fchat");for(s.appendChild(Ff(n[0],n[1]));s.children.length>3;)s.firstChild.remove();oe.play("msg")}if(En.i>=kr.length&&En.t>2.6+kr.length*.95&&ut("fcard").classList.contains("hidden")){let n=ut("fchat");for(;n.children.length>1;)n.firstChild.remove();ut("fcard").classList.remove("hidden"),oe.play("win")}}var Hr=0,Wc=performance.now(),Lo=0,zc=0,Vr=4,Jf=!1,If=!1;function Kf(i){P.state==="play"?$_(i):P.state==="menu"?D_(i):P.state==="final"&&j_(i)}function Qf(i){requestAnimationFrame(Qf);let t=(i-Wc)/1e3;Wc=i;let e=Math.min(.05,Math.max(.001,t));P.time+=e;try{Kf(e),jf(e)}catch(n){ut("err").textContent=String(n&&n.stack||n).slice(0,400)}if(t<.5&&(Vr-=t,Vr<=0&&(Lo+=t,zc++,Lo>1.6))){let n=zc/Lo;Lo=0,zc=0,Mn.has("fps")&&(ut("err").textContent=n.toFixed(0)+" fps \xB7 q"+gi),n<(Wn?27:43)&&!document.hidden?Hr++:Hr=0,Co=n>56?Co+1:0,Hr>=2&&gi<Fo.length-1&&!Mn.has("q")?(Hr=0,gi++,gi>P_&&(Jf=!0),Nc=!0,Vr=2.5,fs()):Wn&&Co>=3&&gi>0&&!Nc&&!Mn.has("q")&&P.state==="play"&&(Nc=!0,Co=0,gi--,Vr=3,fs())}If||(If=!0,ut("loading").style.opacity=0,setTimeout(()=>ut("loading").classList.add("hidden"),650))}function jf(i){{let t=vi.mFinal.uniforms;P.state!=="final"&&(t.uFlash.value=Math.max(0,t.uFlash.value-i*2)),ir.value=Nf/(2*Math.tan(De.fov*Math.PI/360)),Le.update(i,P.time,De),zi.u.uTime.value=P.time,zi.u.uCam.value.copy(De.position),Bi.update(P.time),lr.forEach(e=>e.update(P.time)),oe.tick(P.state==="play"&&P.mode==="car"?Pe(P.car.speed/32,0,1):0,P.state==="play"&&P.mode==="car"?P.car.slip:0,P.state==="play"&&P.mode==="car",P.wanted>0),vi.render(ln,De,P.time)}}fs();I_();P.state="menu";ut("menu").classList.remove("hidden");var td={S:P,P:nt,cam:Gt,world:Le,post:vi,renderer:$n,QL:Fo,setQ:i=>{gi=i,fs()},finale:$f,startMission:Wf,COL:ds,action:Jc,startWanted:Kc,audio:oe,NODES:pn,step:(i,t=1/30,e)=>{for(let n=0;n<i;n++)P.time+=t,Kf(t);e||jf(t)}};Mn.has("debug")&&(window.__gtr=td);requestAnimationFrame(Qf);})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
