(()=>{var Oc="160";var Pd=0,Ph=1,Ld=2;var af=1,zc=2,yi=3,Xi=0,xn=1,wn=2;var Vi=0,or=1,Zn=2,Lh=3,Ih=4,Id=5,ls=100,Dd=101,Ud=102,Dh=103,Uh=104,Nd=200,Fd=201,Od=202,zd=203,Wl=204,Xl=205,Bd=206,kd=207,Hd=208,Vd=209,Gd=210,Wd=211,Xd=212,qd=213,Yd=214,Zd=0,Jd=1,$d=2,ja=3,Kd=4,Qd=5,jd=6,tp=7,Bc=0,ep=1,np=2,Gi=0,ip=1,sp=2,rp=3,ap=4,op=5,lp=6;var of=300,hr=301,ur=302,ql=303,Yl=304,Io=306,ps=1e3,qn=1001,Zl=1002,hn=1003,Nh=1004;var ll=1005;var En=1006,cp=1007;var Qr=1008;var ni=1009,hp=1010,up=1011,kc=1012,lf=1013,ki=1014,Hi=1015,ms=1016,cf=1017,hf=1018,us=1020,fp=1021,Yn=1023,dp=1024,pp=1025,fs=1026,fr=1027,mp=1028,uf=1029,gp=1030,ff=1031,df=1033,cl=33776,hl=33777,ul=33778,fl=33779,Fh=35840,Oh=35841,zh=35842,Bh=35843,pf=36196,kh=37492,Hh=37496,Vh=37808,Gh=37809,Wh=37810,Xh=37811,qh=37812,Yh=37813,Zh=37814,Jh=37815,$h=37816,Kh=37817,Qh=37818,jh=37819,tu=37820,eu=37821,dl=36492,nu=36494,iu=36495,xp=36283,su=36284,ru=36285,au=36286;var to=2300,eo=2301,pl=2302,ou=2400,lu=2401,cu=2402;var mf=3e3,ds=3001,_p=3200,vp=3201,gf=0,yp=1,Hn="",ze="srgb",Ei="srgb-linear",Hc="display-p3",Do="display-p3-linear",no="linear",Le="srgb",io="rec709",so="p3";var zs=7680;var hu=519,Mp=512,bp=513,Sp=514,xf=515,Ep=516,wp=517,Tp=518,Ap=519,Jl=35044;var uu="300 es",$l=1035,Si=2e3,ro=2001,qi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var ml=Math.PI/180,ao=180/Math.PI;function Wi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(mn[i&255]+mn[i>>8&255]+mn[i>>16&255]+mn[i>>24&255]+"-"+mn[t&255]+mn[t>>8&255]+"-"+mn[t>>16&15|64]+mn[t>>24&255]+"-"+mn[e&63|128]+mn[e>>8&255]+"-"+mn[e>>16&255]+mn[e>>24&255]+mn[n&255]+mn[n>>8&255]+mn[n>>16&255]+mn[n>>24&255]).toLowerCase()}function un(i,t,e){return Math.max(t,Math.min(e,i))}function Rp(i,t){return(i%t+t)%t}function gl(i,t,e){return(1-e)*i+e*t}function fu(i){return(i&i-1)===0&&i!==0}function Kl(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function bi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ee(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var bt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(un(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},re=class i{constructor(t,e,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],x=s[0],m=s[3],p=s[6],b=s[1],v=s[4],w=s[7],U=s[2],P=s[5],I=s[8];return r[0]=a*x+o*b+l*U,r[3]=a*m+o*v+l*P,r[6]=a*p+o*w+l*I,r[1]=c*x+h*b+u*U,r[4]=c*m+h*v+u*P,r[7]=c*p+h*w+u*I,r[2]=f*x+d*b+g*U,r[5]=f*m+d*v+g*P,r[8]=f*p+d*w+g*I,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,f=o*l-h*r,d=c*r-a*l,g=e*u+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=u*x,t[1]=(s*c-h*n)*x,t[2]=(o*n-s*a)*x,t[3]=f*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-o*e)*x,t[6]=d*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(xl.makeScale(t,e)),this}rotate(t){return this.premultiply(xl.makeRotation(-t)),this}translate(t,e){return this.premultiply(xl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},xl=new re;function _f(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function oo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Cp(){let i=oo("canvas");return i.style.display="block",i}var du={};function Zr(i){i in du||(du[i]=!0,console.warn(i))}var pu=new re().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),mu=new re().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Sa={[Ei]:{transfer:no,primaries:io,toReference:i=>i,fromReference:i=>i},[ze]:{transfer:Le,primaries:io,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Do]:{transfer:no,primaries:so,toReference:i=>i.applyMatrix3(mu),fromReference:i=>i.applyMatrix3(pu)},[Hc]:{transfer:Le,primaries:so,toReference:i=>i.convertSRGBToLinear().applyMatrix3(mu),fromReference:i=>i.applyMatrix3(pu).convertLinearToSRGB()}},Pp=new Set([Ei,Do]),be={enabled:!0,_workingColorSpace:Ei,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Pp.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=Sa[t].toReference,s=Sa[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Sa[i].primaries},getTransfer:function(i){return i===Hn?no:Sa[i].transfer}};function lr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function _l(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Bs,lo=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Bs===void 0&&(Bs=oo("canvas")),Bs.width=t.width,Bs.height=t.height;let n=Bs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Bs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=oo("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=lr(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(lr(e[n]/255)*255):e[n]=lr(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Lp=0,co=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Lp++}),this.uuid=Wi(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(vl(s[a].image)):r.push(vl(s[a]))}else r=vl(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function vl(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?lo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Ip=0,In=class i extends qi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=qn,s=qn,r=En,a=Qr,o=Yn,l=ni,c=i.DEFAULT_ANISOTROPY,h=Hn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ip++}),this.uuid=Wi(),this.name="",this.source=new co(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new bt(0,0),this.repeat=new bt(1,1),this.center=new bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new re,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Zr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===ds?ze:Hn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==of)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ps:t.x=t.x-Math.floor(t.x);break;case qn:t.x=t.x<0?0:1;break;case Zl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ps:t.y=t.y-Math.floor(t.y);break;case qn:t.y=t.y<0?0:1;break;case Zl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Zr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ze?ds:mf}set encoding(t){Zr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===ds?ze:Hn}};In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=of;In.DEFAULT_ANISOTROPY=1;var an=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(c+1)/2,w=(d+1)/2,U=(p+1)/2,P=(h+f)/4,I=(u+x)/4,F=(g+m)/4;return v>w&&v>U?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=P/n,r=I/n):w>U?w<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),n=P/s,r=F/s):U<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(U),n=I/r,s=F/r),this.set(n,s,r,e),this}let b=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(u-x)/b,this.z=(f-h)/b,this.w=Math.acos((c+d+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ql=class extends qi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new an(0,0,t,e),this.scissorTest=!1,this.viewport=new an(0,0,t,e);let s={width:t,height:e,depth:1};n.encoding!==void 0&&(Zr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ds?ze:Hn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:En,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new In(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new co(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Dn=class extends Ql{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ho=class extends In{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=hn,this.minFilter=hn,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var jl=class extends In{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=hn,this.minFilter=hn,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Un=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],f=r[a+0],d=r[a+1],g=r[a+2],x=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=x;return}if(u!==x||l!==f||c!==d||h!==g){let m=1-o,p=l*f+c*d+h*g+u*x,b=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){let U=Math.sqrt(v),P=Math.atan2(U,p*b);m=Math.sin(m*P)/U,o=Math.sin(o*P)/U}let w=o*b;if(l=l*m+f*w,c=c*m+d*w,h=h*m+g*w,u=u*m+x*w,m===1-o){let U=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=U,c*=U,h*=U,u*=U}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],f=r[a+1],d=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*d-c*f,t[e+1]=l*g+h*f+c*u-o*d,t[e+2]=c*g+h*d+o*f-l*u,t[e+3]=h*g-o*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),f=l(n/2),d=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+o+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>u){let d=2*Math.sqrt(1+n-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>u){let d=2*Math.sqrt(1+o-n-u);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(un(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let d=1-e;return this._w=d*a+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),n*Math.sin(r),n*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(gu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(gu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return yl.copy(this).projectOnVector(t),this.sub(yl)}reflect(t){return this.sub(yl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(un(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},yl=new D,gu=new Un,wi=class{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Gn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Gn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Gn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Gn):Gn.fromBufferAttribute(r,a),Gn.applyMatrix4(t.matrixWorld),this.expandByPoint(Gn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ea.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ea.copy(n.boundingBox)),Ea.applyMatrix4(t.matrixWorld),this.union(Ea)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Gn),Gn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Br),wa.subVectors(this.max,Br),ks.subVectors(t.a,Br),Hs.subVectors(t.b,Br),Vs.subVectors(t.c,Br),Ni.subVectors(Hs,ks),Fi.subVectors(Vs,Hs),is.subVectors(ks,Vs);let e=[0,-Ni.z,Ni.y,0,-Fi.z,Fi.y,0,-is.z,is.y,Ni.z,0,-Ni.x,Fi.z,0,-Fi.x,is.z,0,-is.x,-Ni.y,Ni.x,0,-Fi.y,Fi.x,0,-is.y,is.x,0];return!Ml(e,ks,Hs,Vs,wa)||(e=[1,0,0,0,1,0,0,0,1],!Ml(e,ks,Hs,Vs,wa))?!1:(Ta.crossVectors(Ni,Fi),e=[Ta.x,Ta.y,Ta.z],Ml(e,ks,Hs,Vs,wa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Gn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Gn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(mi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},mi=[new D,new D,new D,new D,new D,new D,new D,new D],Gn=new D,Ea=new wi,ks=new D,Hs=new D,Vs=new D,Ni=new D,Fi=new D,is=new D,Br=new D,wa=new D,Ta=new D,ss=new D;function Ml(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ss.fromArray(i,r);let o=s.x*Math.abs(ss.x)+s.y*Math.abs(ss.y)+s.z*Math.abs(ss.z),l=t.dot(ss),c=e.dot(ss),h=n.dot(ss);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Dp=new wi,kr=new D,bl=new D,Yi=class{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Dp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;kr.subVectors(t,this.center);let e=kr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(kr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(bl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(kr.copy(t.center).add(bl)),this.expandByPoint(kr.copy(t.center).sub(bl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},gi=new D,Sl=new D,Aa=new D,Oi=new D,El=new D,Ra=new D,wl=new D,uo=class{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,gi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=gi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(gi.copy(this.origin).addScaledVector(this.direction,e),gi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Sl.copy(t).add(e).multiplyScalar(.5),Aa.copy(e).sub(t).normalize(),Oi.copy(this.origin).sub(Sl);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Aa),o=Oi.dot(this.direction),l=-Oi.dot(Aa),c=Oi.lengthSq(),h=Math.abs(1-a*a),u,f,d,g;if(h>0)if(u=a*l-o,f=a*o-l,g=r*h,u>=0)if(f>=-g)if(f<=g){let x=1/h;u*=x,f*=x,d=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Sl).addScaledVector(Aa,f),d}intersectSphere(t,e){gi.subVectors(t.center,this.origin);let n=gi.dot(this.direction),s=gi.dot(gi)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,gi)!==null}intersectTriangle(t,e,n,s,r){El.subVectors(e,t),Ra.subVectors(n,t),wl.crossVectors(El,Ra);let a=this.direction.dot(wl),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Oi.subVectors(this.origin,t);let l=o*this.direction.dot(Ra.crossVectors(Oi,Ra));if(l<0)return null;let c=o*this.direction.dot(El.cross(Oi));if(c<0||l+c>a)return null;let h=-o*Oi.dot(wl);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},fe=class i{constructor(t,e,n,s,r,a,o,l,c,h,u,f,d,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,f,d,g,x,m)}set(t,e,n,s,r,a,o,l,c,h,u,f,d,g,x,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Gs.setFromMatrixColumn(t,0).length(),r=1/Gs.setFromMatrixColumn(t,1).length(),a=1/Gs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=a*h,d=a*u,g=o*h,x=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+g*c,e[5]=f-x*c,e[9]=-o*l,e[2]=x-f*c,e[6]=g+d*c,e[10]=a*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,g=c*h,x=c*u;e[0]=f+x*o,e[4]=g*o-d,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=d*o-g,e[6]=x+f*o,e[10]=a*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,g=c*h,x=c*u;e[0]=f-x*o,e[4]=-a*u,e[8]=g+d*o,e[1]=d+g*o,e[5]=a*h,e[9]=x-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let f=a*h,d=a*u,g=o*h,x=o*u;e[0]=l*h,e[4]=g*c-d,e[8]=f*c+x,e[1]=l*u,e[5]=x*c+f,e[9]=d*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let f=a*l,d=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=x-f*u,e[8]=g*u+d,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=d*u+g,e[10]=f-x*u}else if(t.order==="XZY"){let f=a*l,d=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+x,e[5]=a*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=o*h,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Up,t,Np)}lookAt(t,e,n){let s=this.elements;return Pn.subVectors(t,e),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),zi.crossVectors(n,Pn),zi.lengthSq()===0&&(Math.abs(n.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),zi.crossVectors(n,Pn)),zi.normalize(),Ca.crossVectors(Pn,zi),s[0]=zi.x,s[4]=Ca.x,s[8]=Pn.x,s[1]=zi.y,s[5]=Ca.y,s[9]=Pn.y,s[2]=zi.z,s[6]=Ca.z,s[10]=Pn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],x=n[6],m=n[10],p=n[14],b=n[3],v=n[7],w=n[11],U=n[15],P=s[0],I=s[4],F=s[8],M=s[12],E=s[1],H=s[5],J=s[9],ot=s[13],B=s[2],V=s[6],et=s[10],at=s[14],it=s[3],K=s[7],ut=s[11],mt=s[15];return r[0]=a*P+o*E+l*B+c*it,r[4]=a*I+o*H+l*V+c*K,r[8]=a*F+o*J+l*et+c*ut,r[12]=a*M+o*ot+l*at+c*mt,r[1]=h*P+u*E+f*B+d*it,r[5]=h*I+u*H+f*V+d*K,r[9]=h*F+u*J+f*et+d*ut,r[13]=h*M+u*ot+f*at+d*mt,r[2]=g*P+x*E+m*B+p*it,r[6]=g*I+x*H+m*V+p*K,r[10]=g*F+x*J+m*et+p*ut,r[14]=g*M+x*ot+m*at+p*mt,r[3]=b*P+v*E+w*B+U*it,r[7]=b*I+v*H+w*V+U*K,r[11]=b*F+v*J+w*et+U*ut,r[15]=b*M+v*ot+w*at+U*mt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],x=t[7],m=t[11],p=t[15];return g*(+r*l*u-s*c*u-r*o*f+n*c*f+s*o*d-n*l*d)+x*(+e*l*d-e*c*f+r*a*f-s*a*d+s*c*h-r*l*h)+m*(+e*c*u-e*o*d-r*a*u+n*a*d+r*o*h-n*c*h)+p*(-s*o*h-e*l*u+e*o*f+s*a*u-n*a*f+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],x=t[13],m=t[14],p=t[15],b=u*m*c-x*f*c+x*l*d-o*m*d-u*l*p+o*f*p,v=g*f*c-h*m*c-g*l*d+a*m*d+h*l*p-a*f*p,w=h*x*c-g*u*c+g*o*d-a*x*d-h*o*p+a*u*p,U=g*u*l-h*x*l-g*o*f+a*x*f+h*o*m-a*u*m,P=e*b+n*v+s*w+r*U;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/P;return t[0]=b*I,t[1]=(x*f*r-u*m*r-x*s*d+n*m*d+u*s*p-n*f*p)*I,t[2]=(o*m*r-x*l*r+x*s*c-n*m*c-o*s*p+n*l*p)*I,t[3]=(u*l*r-o*f*r-u*s*c+n*f*c+o*s*d-n*l*d)*I,t[4]=v*I,t[5]=(h*m*r-g*f*r+g*s*d-e*m*d-h*s*p+e*f*p)*I,t[6]=(g*l*r-a*m*r-g*s*c+e*m*c+a*s*p-e*l*p)*I,t[7]=(a*f*r-h*l*r+h*s*c-e*f*c-a*s*d+e*l*d)*I,t[8]=w*I,t[9]=(g*u*r-h*x*r-g*n*d+e*x*d+h*n*p-e*u*p)*I,t[10]=(a*x*r-g*o*r+g*n*c-e*x*c-a*n*p+e*o*p)*I,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*d-e*o*d)*I,t[12]=U*I,t[13]=(h*x*s-g*u*s+g*n*f-e*x*f-h*n*m+e*u*m)*I,t[14]=(g*o*s-a*x*s-g*n*l+e*x*l+a*n*m-e*o*m)*I,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*f+e*o*f)*I,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,f=r*c,d=r*h,g=r*u,x=a*h,m=a*u,p=o*u,b=l*c,v=l*h,w=l*u,U=n.x,P=n.y,I=n.z;return s[0]=(1-(x+p))*U,s[1]=(d+w)*U,s[2]=(g-v)*U,s[3]=0,s[4]=(d-w)*P,s[5]=(1-(f+p))*P,s[6]=(m+b)*P,s[7]=0,s[8]=(g+v)*I,s[9]=(m-b)*I,s[10]=(1-(f+x))*I,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Gs.set(s[0],s[1],s[2]).length(),a=Gs.set(s[4],s[5],s[6]).length(),o=Gs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Wn.copy(this);let c=1/r,h=1/a,u=1/o;return Wn.elements[0]*=c,Wn.elements[1]*=c,Wn.elements[2]*=c,Wn.elements[4]*=h,Wn.elements[5]*=h,Wn.elements[6]*=h,Wn.elements[8]*=u,Wn.elements[9]*=u,Wn.elements[10]*=u,e.setFromRotationMatrix(Wn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Si){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),d,g;if(o===Si)d=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===ro)d=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Si){let l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(a-r),f=(e+t)*c,d=(n+s)*h,g,x;if(o===Si)g=(a+r)*u,x=-2*u;else if(o===ro)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Gs=new D,Wn=new fe,Up=new D(0,0,0),Np=new D(1,1,1),zi=new D,Ca=new D,Pn=new D,xu=new fe,_u=new Un,Zi=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(un(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-un(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(un(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-un(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(un(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-un(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return xu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(xu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return _u.setFromEuler(this),this.setFromQuaternion(_u,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Zi.DEFAULT_ORDER="XYZ";var fo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Fp=0,vu=new D,Ws=new Un,xi=new fe,Pa=new D,Hr=new D,Op=new D,zp=new Un,yu=new D(1,0,0),Mu=new D(0,1,0),bu=new D(0,0,1),Bp={type:"added"},kp={type:"removed"},Ke=class i extends qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fp++}),this.uuid=Wi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new D,e=new Zi,n=new Un,s=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new fe},normalMatrix:{value:new re}}),this.matrix=new fe,this.matrixWorld=new fe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ws.setFromAxisAngle(t,e),this.quaternion.multiply(Ws),this}rotateOnWorldAxis(t,e){return Ws.setFromAxisAngle(t,e),this.quaternion.premultiply(Ws),this}rotateX(t){return this.rotateOnAxis(yu,t)}rotateY(t){return this.rotateOnAxis(Mu,t)}rotateZ(t){return this.rotateOnAxis(bu,t)}translateOnAxis(t,e){return vu.copy(t).applyQuaternion(this.quaternion),this.position.add(vu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(yu,t)}translateY(t){return this.translateOnAxis(Mu,t)}translateZ(t){return this.translateOnAxis(bu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(xi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Pa.copy(t):Pa.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Hr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xi.lookAt(Hr,Pa,this.up):xi.lookAt(Pa,Hr,this.up),this.quaternion.setFromRotationMatrix(xi),s&&(xi.extractRotation(s.matrixWorld),Ws.setFromRotationMatrix(xi),this.quaternion.premultiply(Ws.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Bp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(kp)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),xi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),xi.multiply(t.parent.matrixWorld)),t.applyMatrix4(xi),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hr,t,Op),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hr,zp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++){let r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),d=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Ke.DEFAULT_UP=new D(0,1,0);Ke.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Xn=new D,_i=new D,Tl=new D,vi=new D,Xs=new D,qs=new D,Su=new D,Al=new D,Rl=new D,Cl=new D,La=!1,hs=class i{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Xn.subVectors(t,e),s.cross(Xn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Xn.subVectors(s,e),_i.subVectors(n,e),Tl.subVectors(t,e);let a=Xn.dot(Xn),o=Xn.dot(_i),l=Xn.dot(Tl),c=_i.dot(_i),h=_i.dot(Tl),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-o*h)*f,g=(a*h-o*l)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,vi)===null?!1:vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getUV(t,e,n,s,r,a,o,l){return La===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),La=!0),this.getInterpolation(t,e,n,s,r,a,o,l)}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,vi.x),l.addScaledVector(a,vi.y),l.addScaledVector(o,vi.z),l)}static isFrontFacing(t,e,n,s){return Xn.subVectors(n,e),_i.subVectors(t,e),Xn.cross(_i).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Xn.subVectors(this.c,this.b),_i.subVectors(this.a,this.b),Xn.cross(_i).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,s,r){return La===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),La=!0),i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Xs.subVectors(s,n),qs.subVectors(r,n),Al.subVectors(t,n);let l=Xs.dot(Al),c=qs.dot(Al);if(l<=0&&c<=0)return e.copy(n);Rl.subVectors(t,s);let h=Xs.dot(Rl),u=qs.dot(Rl);if(h>=0&&u<=h)return e.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Xs,a);Cl.subVectors(t,r);let d=Xs.dot(Cl),g=qs.dot(Cl);if(g>=0&&d<=g)return e.copy(r);let x=d*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(qs,o);let m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return Su.subVectors(r,s),o=(u-h)/(u-h+(d-g)),e.copy(s).addScaledVector(Su,o);let p=1/(m+x+f);return a=x*p,o=f*p,e.copy(n).addScaledVector(Xs,a).addScaledVector(qs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},vf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bi={h:0,s:0,l:0},Ia={h:0,s:0,l:0};function Pl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Dt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,be.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=be.workingColorSpace){return this.r=t,this.g=e,this.b=n,be.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=be.workingColorSpace){if(t=Rp(t,1),e=un(e,0,1),n=un(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Pl(a,r,t+1/3),this.g=Pl(a,r,t),this.b=Pl(a,r,t-1/3)}return be.toWorkingColorSpace(this,s),this}setStyle(t,e=ze){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ze){let n=vf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=lr(t.r),this.g=lr(t.g),this.b=lr(t.b),this}copyLinearToSRGB(t){return this.r=_l(t.r),this.g=_l(t.g),this.b=_l(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ze){return be.fromWorkingColorSpace(gn.copy(this),t),Math.round(un(gn.r*255,0,255))*65536+Math.round(un(gn.g*255,0,255))*256+Math.round(un(gn.b*255,0,255))}getHexString(t=ze){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=be.workingColorSpace){be.fromWorkingColorSpace(gn.copy(this),e);let n=gn.r,s=gn.g,r=gn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=be.workingColorSpace){return be.fromWorkingColorSpace(gn.copy(this),e),t.r=gn.r,t.g=gn.g,t.b=gn.b,t}getStyle(t=ze){be.fromWorkingColorSpace(gn.copy(this),t);let e=gn.r,n=gn.g,s=gn.b;return t!==ze?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Bi),this.setHSL(Bi.h+t,Bi.s+e,Bi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Bi),t.getHSL(Ia);let n=gl(Bi.h,Ia.h,e),s=gl(Bi.s,Ia.s,e),r=gl(Bi.l,Ia.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},gn=new Dt;Dt.NAMES=vf;var Hp=0,Ti=class extends qi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hp++}),this.uuid=Wi(),this.name="",this.type="Material",this.blending=or,this.side=Xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wl,this.blendDst=Xl,this.blendEquation=ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Dt(0,0,0),this.blendAlpha=0,this.depthFunc=ja,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zs,this.stencilZFail=zs,this.stencilZPass=zs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==or&&(n.blending=this.blending),this.side!==Xi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Wl&&(n.blendSrc=this.blendSrc),this.blendDst!==Xl&&(n.blendDst=this.blendDst),this.blendEquation!==ls&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ja&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==zs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==zs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},dn=class extends Ti{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Bc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var We=new D,Da=new bt,pe=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Jl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Hi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Da.fromBufferAttribute(this,e),Da.applyMatrix3(t),this.setXY(e,Da.x,Da.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyMatrix3(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyMatrix4(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyNormalMatrix(t),this.setXYZ(e,We.x,We.y,We.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.transformDirection(t),this.setXYZ(e,We.x,We.y,We.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=bi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ee(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=bi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=bi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=bi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=bi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array),s=Ee(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array),s=Ee(s,this.array),r=Ee(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Jl&&(t.usage=this.usage),t}};var po=class extends pe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var mo=class extends pe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ae=class extends pe{constructor(t,e,n){super(new Float32Array(t),e,n)}};var Vp=0,kn=new fe,Ll=new Ke,Ys=new D,Ln=new wi,Vr=new wi,rn=new D,Me=class i extends qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vp++}),this.uuid=Wi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(_f(t)?mo:po)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new re().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return kn.makeRotationFromQuaternion(t),this.applyMatrix4(kn),this}rotateX(t){return kn.makeRotationX(t),this.applyMatrix4(kn),this}rotateY(t){return kn.makeRotationY(t),this.applyMatrix4(kn),this}rotateZ(t){return kn.makeRotationZ(t),this.applyMatrix4(kn),this}translate(t,e,n){return kn.makeTranslation(t,e,n),this.applyMatrix4(kn),this}scale(t,e,n){return kn.makeScale(t,e,n),this.applyMatrix4(kn),this}lookAt(t){return Ll.lookAt(t),Ll.updateMatrix(),this.applyMatrix4(Ll.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ys).negate(),this.translate(Ys.x,Ys.y,Ys.z),this}setFromPoints(t){let e=[];for(let n=0,s=t.length;n<s;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ae(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Ln.setFromBufferAttribute(r),this.morphTargetsRelative?(rn.addVectors(this.boundingBox.min,Ln.min),this.boundingBox.expandByPoint(rn),rn.addVectors(this.boundingBox.max,Ln.max),this.boundingBox.expandByPoint(rn)):(this.boundingBox.expandByPoint(Ln.min),this.boundingBox.expandByPoint(Ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(t){let n=this.boundingSphere.center;if(Ln.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Vr.setFromBufferAttribute(o),this.morphTargetsRelative?(rn.addVectors(Ln.min,Vr.min),Ln.expandByPoint(rn),rn.addVectors(Ln.max,Vr.max),Ln.expandByPoint(rn)):(Ln.expandByPoint(Vr.min),Ln.expandByPoint(Vr.max))}Ln.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)rn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(rn));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)rn.fromBufferAttribute(o,c),l&&(Ys.fromBufferAttribute(t,c),rn.add(Ys)),s=Math.max(s,n.distanceToSquared(rn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.array,s=e.position.array,r=e.normal.array,a=e.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pe(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let E=0;E<o;E++)c[E]=new D,h[E]=new D;let u=new D,f=new D,d=new D,g=new bt,x=new bt,m=new bt,p=new D,b=new D;function v(E,H,J){u.fromArray(s,E*3),f.fromArray(s,H*3),d.fromArray(s,J*3),g.fromArray(a,E*2),x.fromArray(a,H*2),m.fromArray(a,J*2),f.sub(u),d.sub(u),x.sub(g),m.sub(g);let ot=1/(x.x*m.y-m.x*x.y);isFinite(ot)&&(p.copy(f).multiplyScalar(m.y).addScaledVector(d,-x.y).multiplyScalar(ot),b.copy(d).multiplyScalar(x.x).addScaledVector(f,-m.x).multiplyScalar(ot),c[E].add(p),c[H].add(p),c[J].add(p),h[E].add(b),h[H].add(b),h[J].add(b))}let w=this.groups;w.length===0&&(w=[{start:0,count:n.length}]);for(let E=0,H=w.length;E<H;++E){let J=w[E],ot=J.start,B=J.count;for(let V=ot,et=ot+B;V<et;V+=3)v(n[V+0],n[V+1],n[V+2])}let U=new D,P=new D,I=new D,F=new D;function M(E){I.fromArray(r,E*3),F.copy(I);let H=c[E];U.copy(H),U.sub(I.multiplyScalar(I.dot(H))).normalize(),P.crossVectors(F,H);let ot=P.dot(h[E])<0?-1:1;l[E*4]=U.x,l[E*4+1]=U.y,l[E*4+2]=U.z,l[E*4+3]=ot}for(let E=0,H=w.length;E<H;++E){let J=w[E],ot=J.start,B=J.count;for(let V=ot,et=ot+B;V<et;V+=3)M(n[V+0]),M(n[V+1]),M(n[V+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new pe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new D,r=new D,a=new D,o=new D,l=new D,c=new D,h=new D,u=new D;if(t)for(let f=0,d=t.count;f<d;f+=3){let g=t.getX(f+0),x=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)rn.fromBufferAttribute(t,e),rn.normalize(),t.setXYZ(e,rn.x,rn.y,rn.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h),d=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?d=l[x]*o.data.stride+o.offset:d=l[x]*h;for(let p=0;p<h;p++)f[g++]=c[d++]}return new pe(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Eu=new fe,rs=new uo,Ua=new Yi,wu=new D,Zs=new D,Js=new D,$s=new D,Il=new D,Na=new D,Fa=new bt,Oa=new bt,za=new bt,Tu=new D,Au=new D,Ru=new D,Ba=new D,ka=new D,oe=class extends Ke{constructor(t=new Me,e=new dn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Na.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Il.fromBufferAttribute(u,t),a?Na.addScaledVector(Il,h):Na.addScaledVector(Il.sub(e),h))}e.add(Na)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ua.copy(n.boundingSphere),Ua.applyMatrix4(r),rs.copy(t.ray).recast(t.near),!(Ua.containsPoint(rs.origin)===!1&&(rs.intersectSphere(Ua,wu)===null||rs.origin.distanceToSquared(wu)>(t.far-t.near)**2))&&(Eu.copy(r).invert(),rs.copy(t.ray).applyMatrix4(Eu),!(n.boundingBox!==null&&rs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,rs)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=a[m.materialIndex],b=Math.max(m.start,d.start),v=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let w=b,U=v;w<U;w+=3){let P=o.getX(w),I=o.getX(w+1),F=o.getX(w+2);s=Ha(this,p,t,n,c,h,u,P,I,F),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(o.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let b=o.getX(m),v=o.getX(m+1),w=o.getX(m+2);s=Ha(this,a,t,n,c,h,u,b,v,w),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=a[m.materialIndex],b=Math.max(m.start,d.start),v=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let w=b,U=v;w<U;w+=3){let P=w,I=w+1,F=w+2;s=Ha(this,p,t,n,c,h,u,P,I,F),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let b=m,v=m+1,w=m+2;s=Ha(this,a,t,n,c,h,u,b,v,w),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Gp(i,t,e,n,s,r,a,o){let l;if(t.side===xn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Xi,o),l===null)return null;ka.copy(o),ka.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(ka);return c<e.near||c>e.far?null:{distance:c,point:ka.clone(),object:i}}function Ha(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Zs),i.getVertexPosition(l,Js),i.getVertexPosition(c,$s);let h=Gp(i,t,e,n,Zs,Js,$s,Ba);if(h){s&&(Fa.fromBufferAttribute(s,o),Oa.fromBufferAttribute(s,l),za.fromBufferAttribute(s,c),h.uv=hs.getInterpolation(Ba,Zs,Js,$s,Fa,Oa,za,new bt)),r&&(Fa.fromBufferAttribute(r,o),Oa.fromBufferAttribute(r,l),za.fromBufferAttribute(r,c),h.uv1=hs.getInterpolation(Ba,Zs,Js,$s,Fa,Oa,za,new bt),h.uv2=h.uv1),a&&(Tu.fromBufferAttribute(a,o),Au.fromBufferAttribute(a,l),Ru.fromBufferAttribute(a,c),h.normal=hs.getInterpolation(Ba,Zs,Js,$s,Tu,Au,Ru,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new D,materialIndex:0};hs.getNormal(Zs,Js,$s,u.normal),h.face=u}return h}var Nn=class i extends Me{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ae(c,3)),this.setAttribute("normal",new ae(h,3)),this.setAttribute("uv",new ae(u,2));function g(x,m,p,b,v,w,U,P,I,F,M){let E=w/I,H=U/F,J=w/2,ot=U/2,B=P/2,V=I+1,et=F+1,at=0,it=0,K=new D;for(let ut=0;ut<et;ut++){let mt=ut*H-ot;for(let Et=0;Et<V;Et++){let tt=Et*E-J;K[x]=tt*b,K[m]=mt*v,K[p]=B,c.push(K.x,K.y,K.z),K[x]=0,K[m]=0,K[p]=P>0?1:-1,h.push(K.x,K.y,K.z),u.push(Et/I),u.push(1-ut/F),at+=1}}for(let ut=0;ut<F;ut++)for(let mt=0;mt<I;mt++){let Et=f+mt+V*ut,tt=f+mt+V*(ut+1),lt=f+(mt+1)+V*(ut+1),vt=f+(mt+1)+V*ut;l.push(Et,tt,vt),l.push(tt,lt,vt),it+=6}o.addGroup(d,it,M),d+=it,f+=at}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function dr(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Sn(i){let t={};for(let e=0;e<i.length;e++){let n=dr(i[e]);for(let s in n)t[s]=n[s]}return t}function Wp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function yf(i){return i.getRenderTarget()===null?i.outputColorSpace:be.workingColorSpace}var Xp={clone:dr,merge:Sn},qp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Xe=class extends Ti{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qp,this.fragmentShader=Yp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=dr(t.uniforms),this.uniformsGroups=Wp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},go=class extends Ke{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fe,this.projectionMatrix=new fe,this.projectionMatrixInverse=new fe,this.coordinateSystem=Si}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},fn=class extends go{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ao*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ml*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ao*2*Math.atan(Math.tan(ml*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ml*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ks=-90,Qs=1,tc=class extends Ke{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new fn(Ks,Qs,t,e);s.layers=this.layers,this.add(s);let r=new fn(Ks,Qs,t,e);r.layers=this.layers,this.add(r);let a=new fn(Ks,Qs,t,e);a.layers=this.layers,this.add(a);let o=new fn(Ks,Qs,t,e);o.layers=this.layers,this.add(o);let l=new fn(Ks,Qs,t,e);l.layers=this.layers,this.add(l);let c=new fn(Ks,Qs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Si)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ro)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},xo=class extends In{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:hr,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ec=class extends Dn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];e.encoding!==void 0&&(Zr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===ds?ze:Hn),this.texture=new xo(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:En}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Nn(5,5,5),r=new Xe({name:"CubemapFromEquirect",uniforms:dr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:xn,blending:Vi});r.uniforms.tEquirect.value=e;let a=new oe(s,r),o=e.minFilter;return e.minFilter===Qr&&(e.minFilter=En),new tc(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},Dl=new D,Zp=new D,Jp=new re,Mi=class{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Dl.subVectors(n,e).cross(Zp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Dl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Jp.getNormalMatrix(t),s=this.coplanarPoint(Dl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},as=new Yi,Va=new D,jr=class{constructor(t=new Mi,e=new Mi,n=new Mi,s=new Mi,r=new Mi,a=new Mi){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Si){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],d=s[8],g=s[9],x=s[10],m=s[11],p=s[12],b=s[13],v=s[14],w=s[15];if(n[0].setComponents(l-r,f-c,m-d,w-p).normalize(),n[1].setComponents(l+r,f+c,m+d,w+p).normalize(),n[2].setComponents(l+a,f+h,m+g,w+b).normalize(),n[3].setComponents(l-a,f-h,m-g,w-b).normalize(),n[4].setComponents(l-o,f-u,m-x,w-v).normalize(),e===Si)n[5].setComponents(l+o,f+u,m+x,w+v).normalize();else if(e===ro)n[5].setComponents(o,u,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),as.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),as.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(as)}intersectsSprite(t){return as.center.set(0,0,0),as.radius=.7071067811865476,as.applyMatrix4(t.matrixWorld),this.intersectsSphere(as)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Va.x=s.normal.x>0?t.max.x:t.min.x,Va.y=s.normal.y>0?t.max.y:t.min.y,Va.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Va)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Mf(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function $p(i,t){let e=t.isWebGL2,n=new WeakMap;function s(c,h){let u=c.array,f=c.usage,d=u.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,u,f),c.onUploadCallback();let x;if(u instanceof Float32Array)x=i.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)x=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)x=i.SHORT;else if(u instanceof Uint32Array)x=i.UNSIGNED_INT;else if(u instanceof Int32Array)x=i.INT;else if(u instanceof Int8Array)x=i.BYTE;else if(u instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:x,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:d}}function r(c,h,u){let f=h.array,d=h._updateRange,g=h.updateRanges;if(i.bindBuffer(u,c),d.count===-1&&g.length===0&&i.bufferSubData(u,0,f),g.length!==0){for(let x=0,m=g.length;x<m;x++){let p=g[x];e?i.bufferSubData(u,p.start*f.BYTES_PER_ELEMENT,f,p.start,p.count):i.bufferSubData(u,p.start*f.BYTES_PER_ELEMENT,f.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}d.count!==-1&&(e?i.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):i.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=n.get(c);if(u===void 0)n.set(c,s(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:a,remove:o,update:l}}var nc=class i extends Me{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,f=e/l,d=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let b=p*f-a;for(let v=0;v<c;v++){let w=v*u-r;g.push(w,-b,0),x.push(0,0,1),m.push(v/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<o;b++){let v=b+c*p,w=b+c*(p+1),U=b+1+c*(p+1),P=b+1+c*p;d.push(v,w,P),d.push(w,U,P)}this.setIndex(d),this.setAttribute("position",new ae(g,3)),this.setAttribute("normal",new ae(x,3)),this.setAttribute("uv",new ae(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Kp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qp=`#ifdef USE_ALPHAHASH
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
#endif`,jp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,t0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,e0=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,n0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,i0=`#ifdef USE_AOMAP
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
#endif`,s0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,r0=`#ifdef USE_BATCHING
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
#endif`,a0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,o0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,l0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,c0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,h0=`#ifdef USE_IRIDESCENCE
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
#endif`,u0=`#ifdef USE_BUMPMAP
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
#endif`,f0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,d0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,p0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,m0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,g0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,x0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,v0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,y0=`#define PI 3.141592653589793
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
} // validated`,M0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,b0=`vec3 transformedNormal = objectNormal;
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
#endif`,S0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,E0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,w0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,T0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,A0="gl_FragColor = linearToOutputTexel( gl_FragColor );",R0=`
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
}`,C0=`#ifdef USE_ENVMAP
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
#endif`,P0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,L0=`#ifdef USE_ENVMAP
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
#endif`,I0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,D0=`#ifdef USE_ENVMAP
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
#endif`,U0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,N0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,F0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,O0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,z0=`#ifdef USE_GRADIENTMAP
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
}`,B0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,k0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,H0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,V0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,G0=`uniform bool receiveShadow;
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
#endif`,W0=`#ifdef USE_ENVMAP
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
#endif`,X0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,q0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Y0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Z0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,J0=`PhysicalMaterial material;
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
#endif`,$0=`struct PhysicalMaterial {
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
}`,K0=`
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
#endif`,Q0=`#if defined( RE_IndirectDiffuse )
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
#endif`,j0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,em=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,im=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,sm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,am=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,om=`#if defined( USE_POINTS_UV )
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
#endif`,lm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,um=`#ifdef USE_MORPHNORMALS
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
#endif`,fm=`#ifdef USE_MORPHTARGETS
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
#endif`,dm=`#ifdef USE_MORPHTARGETS
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
#endif`,pm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,mm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,gm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_m=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vm=`#ifdef USE_NORMALMAP
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
#endif`,ym=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Mm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Sm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Em=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Tm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Am=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Rm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Im=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Dm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Um=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Nm=`float getShadowMask() {
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
}`,Fm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Om=`#ifdef USE_SKINNING
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
#endif`,zm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bm=`#ifdef USE_SKINNING
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
#endif`,km=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wm=`#ifdef USE_TRANSMISSION
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
#endif`,Xm=`#ifdef USE_TRANSMISSION
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
#endif`,qm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ym=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,$m=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Km=`uniform sampler2D t2D;
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
}`,Qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,tg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ng=`#include <common>
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
}`,ig=`#if DEPTH_PACKING == 3200
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
}`,sg=`#define DISTANCE
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
}`,rg=`#define DISTANCE
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
}`,ag=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,og=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lg=`uniform float scale;
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
}`,cg=`uniform vec3 diffuse;
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
}`,hg=`#include <common>
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
}`,ug=`uniform vec3 diffuse;
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
}`,fg=`#define LAMBERT
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
}`,dg=`#define LAMBERT
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
}`,pg=`#define MATCAP
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
}`,mg=`#define MATCAP
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
}`,gg=`#define NORMAL
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
}`,xg=`#define NORMAL
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
}`,_g=`#define PHONG
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
}`,vg=`#define PHONG
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
}`,yg=`#define STANDARD
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
}`,Mg=`#define STANDARD
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
}`,bg=`#define TOON
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
}`,Sg=`#define TOON
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
}`,Eg=`uniform float size;
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
}`,wg=`uniform vec3 diffuse;
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
}`,Tg=`#include <common>
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
}`,Ag=`uniform vec3 color;
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
}`,Rg=`uniform float rotation;
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
}`,Cg=`uniform vec3 diffuse;
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
}`,se={alphahash_fragment:Kp,alphahash_pars_fragment:Qp,alphamap_fragment:jp,alphamap_pars_fragment:t0,alphatest_fragment:e0,alphatest_pars_fragment:n0,aomap_fragment:i0,aomap_pars_fragment:s0,batching_pars_vertex:r0,batching_vertex:a0,begin_vertex:o0,beginnormal_vertex:l0,bsdfs:c0,iridescence_fragment:h0,bumpmap_pars_fragment:u0,clipping_planes_fragment:f0,clipping_planes_pars_fragment:d0,clipping_planes_pars_vertex:p0,clipping_planes_vertex:m0,color_fragment:g0,color_pars_fragment:x0,color_pars_vertex:_0,color_vertex:v0,common:y0,cube_uv_reflection_fragment:M0,defaultnormal_vertex:b0,displacementmap_pars_vertex:S0,displacementmap_vertex:E0,emissivemap_fragment:w0,emissivemap_pars_fragment:T0,colorspace_fragment:A0,colorspace_pars_fragment:R0,envmap_fragment:C0,envmap_common_pars_fragment:P0,envmap_pars_fragment:L0,envmap_pars_vertex:I0,envmap_physical_pars_fragment:W0,envmap_vertex:D0,fog_vertex:U0,fog_pars_vertex:N0,fog_fragment:F0,fog_pars_fragment:O0,gradientmap_pars_fragment:z0,lightmap_fragment:B0,lightmap_pars_fragment:k0,lights_lambert_fragment:H0,lights_lambert_pars_fragment:V0,lights_pars_begin:G0,lights_toon_fragment:X0,lights_toon_pars_fragment:q0,lights_phong_fragment:Y0,lights_phong_pars_fragment:Z0,lights_physical_fragment:J0,lights_physical_pars_fragment:$0,lights_fragment_begin:K0,lights_fragment_maps:Q0,lights_fragment_end:j0,logdepthbuf_fragment:tm,logdepthbuf_pars_fragment:em,logdepthbuf_pars_vertex:nm,logdepthbuf_vertex:im,map_fragment:sm,map_pars_fragment:rm,map_particle_fragment:am,map_particle_pars_fragment:om,metalnessmap_fragment:lm,metalnessmap_pars_fragment:cm,morphcolor_vertex:hm,morphnormal_vertex:um,morphtarget_pars_vertex:fm,morphtarget_vertex:dm,normal_fragment_begin:pm,normal_fragment_maps:mm,normal_pars_fragment:gm,normal_pars_vertex:xm,normal_vertex:_m,normalmap_pars_fragment:vm,clearcoat_normal_fragment_begin:ym,clearcoat_normal_fragment_maps:Mm,clearcoat_pars_fragment:bm,iridescence_pars_fragment:Sm,opaque_fragment:Em,packing:wm,premultiplied_alpha_fragment:Tm,project_vertex:Am,dithering_fragment:Rm,dithering_pars_fragment:Cm,roughnessmap_fragment:Pm,roughnessmap_pars_fragment:Lm,shadowmap_pars_fragment:Im,shadowmap_pars_vertex:Dm,shadowmap_vertex:Um,shadowmask_pars_fragment:Nm,skinbase_vertex:Fm,skinning_pars_vertex:Om,skinning_vertex:zm,skinnormal_vertex:Bm,specularmap_fragment:km,specularmap_pars_fragment:Hm,tonemapping_fragment:Vm,tonemapping_pars_fragment:Gm,transmission_fragment:Wm,transmission_pars_fragment:Xm,uv_pars_fragment:qm,uv_pars_vertex:Ym,uv_vertex:Zm,worldpos_vertex:Jm,background_vert:$m,background_frag:Km,backgroundCube_vert:Qm,backgroundCube_frag:jm,cube_vert:tg,cube_frag:eg,depth_vert:ng,depth_frag:ig,distanceRGBA_vert:sg,distanceRGBA_frag:rg,equirect_vert:ag,equirect_frag:og,linedashed_vert:lg,linedashed_frag:cg,meshbasic_vert:hg,meshbasic_frag:ug,meshlambert_vert:fg,meshlambert_frag:dg,meshmatcap_vert:pg,meshmatcap_frag:mg,meshnormal_vert:gg,meshnormal_frag:xg,meshphong_vert:_g,meshphong_frag:vg,meshphysical_vert:yg,meshphysical_frag:Mg,meshtoon_vert:bg,meshtoon_frag:Sg,points_vert:Eg,points_frag:wg,shadow_vert:Tg,shadow_frag:Ag,sprite_vert:Rg,sprite_frag:Cg},gt={common:{diffuse:{value:new Dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new re}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new re}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new re}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new re},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new re},normalScale:{value:new bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new re},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new re}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new re}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new re}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0},uvTransform:{value:new re}},sprite:{diffuse:{value:new Dt(16777215)},opacity:{value:1},center:{value:new bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}}},ei={basic:{uniforms:Sn([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:se.meshbasic_vert,fragmentShader:se.meshbasic_frag},lambert:{uniforms:Sn([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Dt(0)}}]),vertexShader:se.meshlambert_vert,fragmentShader:se.meshlambert_frag},phong:{uniforms:Sn([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Dt(0)},specular:{value:new Dt(1118481)},shininess:{value:30}}]),vertexShader:se.meshphong_vert,fragmentShader:se.meshphong_frag},standard:{uniforms:Sn([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new Dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag},toon:{uniforms:Sn([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new Dt(0)}}]),vertexShader:se.meshtoon_vert,fragmentShader:se.meshtoon_frag},matcap:{uniforms:Sn([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:se.meshmatcap_vert,fragmentShader:se.meshmatcap_frag},points:{uniforms:Sn([gt.points,gt.fog]),vertexShader:se.points_vert,fragmentShader:se.points_frag},dashed:{uniforms:Sn([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:se.linedashed_vert,fragmentShader:se.linedashed_frag},depth:{uniforms:Sn([gt.common,gt.displacementmap]),vertexShader:se.depth_vert,fragmentShader:se.depth_frag},normal:{uniforms:Sn([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:se.meshnormal_vert,fragmentShader:se.meshnormal_frag},sprite:{uniforms:Sn([gt.sprite,gt.fog]),vertexShader:se.sprite_vert,fragmentShader:se.sprite_frag},background:{uniforms:{uvTransform:{value:new re},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:se.background_vert,fragmentShader:se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:se.backgroundCube_vert,fragmentShader:se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:se.cube_vert,fragmentShader:se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:se.equirect_vert,fragmentShader:se.equirect_frag},distanceRGBA:{uniforms:Sn([gt.common,gt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:se.distanceRGBA_vert,fragmentShader:se.distanceRGBA_frag},shadow:{uniforms:Sn([gt.lights,gt.fog,{color:{value:new Dt(0)},opacity:{value:1}}]),vertexShader:se.shadow_vert,fragmentShader:se.shadow_frag}};ei.physical={uniforms:Sn([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new re},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new re},clearcoatNormalScale:{value:new bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new re},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new re},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new re},sheen:{value:0},sheenColor:{value:new Dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new re},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new re},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new re},transmissionSamplerSize:{value:new bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new re},attenuationDistance:{value:0},attenuationColor:{value:new Dt(0)},specularColor:{value:new Dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new re},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new re},anisotropyVector:{value:new bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new re}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag};var Ga={r:0,b:0,g:0};function Pg(i,t,e,n,s,r,a){let o=new Dt(0),l=r===!0?0:1,c,h,u=null,f=0,d=null;function g(m,p){let b=!1,v=p.isScene===!0?p.background:null;v&&v.isTexture&&(v=(p.backgroundBlurriness>0?e:t).get(v)),v===null?x(o,l):v&&v.isColor&&(x(v,1),b=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||b)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Io)?(h===void 0&&(h=new oe(new Nn(1,1,1),new Xe({name:"BackgroundCubeMaterial",uniforms:dr(ei.backgroundCube.uniforms),vertexShader:ei.backgroundCube.vertexShader,fragmentShader:ei.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(U,P,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=be.getTransfer(v.colorSpace)!==Le,(u!==v||f!==v.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=v,f=v.version,d=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new oe(new nc(2,2),new Xe({name:"BackgroundMaterial",uniforms:dr(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:Xi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=be.getTransfer(v.colorSpace)!==Le,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=v,f=v.version,d=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function x(m,p){m.getRGB(Ga,yf(i)),n.buffers.color.setClear(Ga.r,Ga.g,Ga.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),l=p,x(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,x(o,l)},render:g}}function Lg(i,t,e,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=m(null),c=l,h=!1;function u(B,V,et,at,it){let K=!1;if(a){let ut=x(at,et,V);c!==ut&&(c=ut,d(c.object)),K=p(B,at,et,it),K&&b(B,at,et,it)}else{let ut=V.wireframe===!0;(c.geometry!==at.id||c.program!==et.id||c.wireframe!==ut)&&(c.geometry=at.id,c.program=et.id,c.wireframe=ut,K=!0)}it!==null&&e.update(it,i.ELEMENT_ARRAY_BUFFER),(K||h)&&(h=!1,F(B,V,et,at),it!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(it).buffer))}function f(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function d(B){return n.isWebGL2?i.bindVertexArray(B):r.bindVertexArrayOES(B)}function g(B){return n.isWebGL2?i.deleteVertexArray(B):r.deleteVertexArrayOES(B)}function x(B,V,et){let at=et.wireframe===!0,it=o[B.id];it===void 0&&(it={},o[B.id]=it);let K=it[V.id];K===void 0&&(K={},it[V.id]=K);let ut=K[at];return ut===void 0&&(ut=m(f()),K[at]=ut),ut}function m(B){let V=[],et=[],at=[];for(let it=0;it<s;it++)V[it]=0,et[it]=0,at[it]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:et,attributeDivisors:at,object:B,attributes:{},index:null}}function p(B,V,et,at){let it=c.attributes,K=V.attributes,ut=0,mt=et.getAttributes();for(let Et in mt)if(mt[Et].location>=0){let lt=it[Et],vt=K[Et];if(vt===void 0&&(Et==="instanceMatrix"&&B.instanceMatrix&&(vt=B.instanceMatrix),Et==="instanceColor"&&B.instanceColor&&(vt=B.instanceColor)),lt===void 0||lt.attribute!==vt||vt&&lt.data!==vt.data)return!0;ut++}return c.attributesNum!==ut||c.index!==at}function b(B,V,et,at){let it={},K=V.attributes,ut=0,mt=et.getAttributes();for(let Et in mt)if(mt[Et].location>=0){let lt=K[Et];lt===void 0&&(Et==="instanceMatrix"&&B.instanceMatrix&&(lt=B.instanceMatrix),Et==="instanceColor"&&B.instanceColor&&(lt=B.instanceColor));let vt={};vt.attribute=lt,lt&&lt.data&&(vt.data=lt.data),it[Et]=vt,ut++}c.attributes=it,c.attributesNum=ut,c.index=at}function v(){let B=c.newAttributes;for(let V=0,et=B.length;V<et;V++)B[V]=0}function w(B){U(B,0)}function U(B,V){let et=c.newAttributes,at=c.enabledAttributes,it=c.attributeDivisors;et[B]=1,at[B]===0&&(i.enableVertexAttribArray(B),at[B]=1),it[B]!==V&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](B,V),it[B]=V)}function P(){let B=c.newAttributes,V=c.enabledAttributes;for(let et=0,at=V.length;et<at;et++)V[et]!==B[et]&&(i.disableVertexAttribArray(et),V[et]=0)}function I(B,V,et,at,it,K,ut){ut===!0?i.vertexAttribIPointer(B,V,et,it,K):i.vertexAttribPointer(B,V,et,at,it,K)}function F(B,V,et,at){if(n.isWebGL2===!1&&(B.isInstancedMesh||at.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;v();let it=at.attributes,K=et.getAttributes(),ut=V.defaultAttributeValues;for(let mt in K){let Et=K[mt];if(Et.location>=0){let tt=it[mt];if(tt===void 0&&(mt==="instanceMatrix"&&B.instanceMatrix&&(tt=B.instanceMatrix),mt==="instanceColor"&&B.instanceColor&&(tt=B.instanceColor)),tt!==void 0){let lt=tt.normalized,vt=tt.itemSize,Ut=e.get(tt);if(Ut===void 0)continue;let At=Ut.buffer,Zt=Ut.type,$t=Ut.bytesPerElement,Gt=n.isWebGL2===!0&&(Zt===i.INT||Zt===i.UNSIGNED_INT||tt.gpuType===lf);if(tt.isInterleavedBufferAttribute){let le=tt.data,X=le.stride,ln=tt.offset;if(le.isInstancedInterleavedBuffer){for(let Ot=0;Ot<Et.locationSize;Ot++)U(Et.location+Ot,le.meshPerAttribute);B.isInstancedMesh!==!0&&at._maxInstanceCount===void 0&&(at._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Ot=0;Ot<Et.locationSize;Ot++)w(Et.location+Ot);i.bindBuffer(i.ARRAY_BUFFER,At);for(let Ot=0;Ot<Et.locationSize;Ot++)I(Et.location+Ot,vt/Et.locationSize,Zt,lt,X*$t,(ln+vt/Et.locationSize*Ot)*$t,Gt)}else{if(tt.isInstancedBufferAttribute){for(let le=0;le<Et.locationSize;le++)U(Et.location+le,tt.meshPerAttribute);B.isInstancedMesh!==!0&&at._maxInstanceCount===void 0&&(at._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let le=0;le<Et.locationSize;le++)w(Et.location+le);i.bindBuffer(i.ARRAY_BUFFER,At);for(let le=0;le<Et.locationSize;le++)I(Et.location+le,vt/Et.locationSize,Zt,lt,vt*$t,vt/Et.locationSize*le*$t,Gt)}}else if(ut!==void 0){let lt=ut[mt];if(lt!==void 0)switch(lt.length){case 2:i.vertexAttrib2fv(Et.location,lt);break;case 3:i.vertexAttrib3fv(Et.location,lt);break;case 4:i.vertexAttrib4fv(Et.location,lt);break;default:i.vertexAttrib1fv(Et.location,lt)}}}}P()}function M(){J();for(let B in o){let V=o[B];for(let et in V){let at=V[et];for(let it in at)g(at[it].object),delete at[it];delete V[et]}delete o[B]}}function E(B){if(o[B.id]===void 0)return;let V=o[B.id];for(let et in V){let at=V[et];for(let it in at)g(at[it].object),delete at[it];delete V[et]}delete o[B.id]}function H(B){for(let V in o){let et=o[V];if(et[B.id]===void 0)continue;let at=et[B.id];for(let it in at)g(at[it].object),delete at[it];delete et[B.id]}}function J(){ot(),h=!0,c!==l&&(c=l,d(c.object))}function ot(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:J,resetDefaultState:ot,dispose:M,releaseStatesOfGeometry:E,releaseStatesOfProgram:H,initAttributes:v,enableAttribute:w,disableUnusedAttributes:P}}function Ig(i,t,e,n){let s=n.isWebGL2,r;function a(h){r=h}function o(h,u){i.drawArrays(r,h,u),e.update(u,r,1)}function l(h,u,f){if(f===0)return;let d,g;if(s)d=i,g="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[g](r,h,u,f),e.update(u,r,f)}function c(h,u,f){if(f===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<f;g++)this.render(h[g],u[g]);else{d.multiDrawArraysWEBGL(r,h,0,u,0,f);let g=0;for(let x=0;x<f;x++)g+=u[x];e.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function Dg(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let I=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext!="undefined"&&i.constructor.name==="WebGL2RenderingContext",o=e.precision!==void 0?e.precision:"highp",l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let c=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,w=a||t.has("OES_texture_float"),U=v&&w,P=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:b,vertexTextures:v,floatFragmentTextures:w,floatVertexTextures:U,maxSamples:P}}function Ug(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Mi,o=new re,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let b=r?0:n,v=b*4,w=p.clippingState||null;l.value=w,w=h(g,f,v,d);for(let U=0;U!==v;++U)w[U]=e[U];p.clippingState=w,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=d+x*4,b=f.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,w=d;v!==x;++v,w+=4)a.copy(u[v]).applyMatrix4(b,o),a.normal.toArray(m,w),m[w+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function Ng(i){let t=new WeakMap;function e(a,o){return o===ql?a.mapping=hr:o===Yl&&(a.mapping=ur),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===ql||o===Yl)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new ec(l.height/2);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var pr=class extends go{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},rr=4,Cu=[.125,.215,.35,.446,.526,.582],cs=20,Ul=new pr,Pu=new Dt,Nl=null,Fl=0,Ol=0,os=(1+Math.sqrt(5))/2,js=1/os,Lu=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,os,js),new D(0,os,-js),new D(js,0,os),new D(-js,0,os),new D(os,js,0),new D(-os,js,0)],_o=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Nl=this._renderer.getRenderTarget(),Fl=this._renderer.getActiveCubeFace(),Ol=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Uu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Du(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Nl,Fl,Ol),t.scissorTest=!1,Wa(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===hr||t.mapping===ur?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Nl=this._renderer.getRenderTarget(),Fl=this._renderer.getActiveCubeFace(),Ol=this._renderer.getActiveMipmapLevel();let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:En,minFilter:En,generateMipmaps:!1,type:ms,format:Yn,colorSpace:Ei,depthBuffer:!1},s=Iu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Iu(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Fg(r)),this._blurMaterial=Og(r,t,e)}return s}_compileMaterial(t){let e=new oe(this._lodPlanes[0],t);this._renderer.compile(e,Ul)}_sceneToCubeUV(t,e,n,s){let o=new fn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Pu),h.toneMapping=Gi,h.autoClear=!1;let d=new dn({name:"PMREM.Background",side:xn,depthWrite:!1,depthTest:!1}),g=new oe(new Nn,d),x=!1,m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,x=!0):(d.color.copy(Pu),x=!0);for(let p=0;p<6;p++){let b=p%3;b===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):b===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));let v=this._cubeSize;Wa(s,b*v,p>2?v:0,v,v),h.setRenderTarget(s),x&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===hr||t.mapping===ur;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Uu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Du());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new oe(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Wa(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Ul)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Lu[(s-1)%Lu.length];this._blur(t,s-1,s,r,a)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new oe(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*cs-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):cs;m>cs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${cs}`);let p=[],b=0;for(let I=0;I<cs;++I){let F=I/x,M=Math.exp(-F*F/2);p.push(M),I===0?b+=M:I<m&&(b+=2*M)}for(let I=0;I<p.length;I++)p[I]=p[I]/b;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-n;let w=this._sizeLods[s],U=3*w*(s>v-rr?s-v+rr:0),P=4*(this._cubeSize-w);Wa(e,U,P,3*w,2*w),l.setRenderTarget(e),l.render(u,Ul)}};function Fg(i){let t=[],e=[],n=[],s=i,r=i-rr+1+Cu.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>i-rr?l=Cu[a-i+rr-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,x=3,m=2,p=1,b=new Float32Array(x*g*d),v=new Float32Array(m*g*d),w=new Float32Array(p*g*d);for(let P=0;P<d;P++){let I=P%3*2/3-1,F=P>2?0:-1,M=[I,F,0,I+2/3,F,0,I+2/3,F+1,0,I,F,0,I+2/3,F+1,0,I,F+1,0];b.set(M,x*g*P),v.set(f,m*g*P);let E=[P,P,P,P,P,P];w.set(E,p*g*P)}let U=new Me;U.setAttribute("position",new pe(b,x)),U.setAttribute("uv",new pe(v,m)),U.setAttribute("faceIndex",new pe(w,p)),t.push(U),s>rr&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Iu(i,t,e){let n=new Dn(i,t,e);return n.texture.mapping=Io,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Wa(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Og(i,t,e){let n=new Float32Array(cs),s=new D(0,1,0);return new Xe({name:"SphericalGaussianBlur",defines:{n:cs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Vc(),fragmentShader:`

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
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function Du(){return new Xe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vc(),fragmentShader:`

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
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function Uu(){return new Xe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function Vc(){return`

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
	`}function zg(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===ql||l===Yl,h=l===hr||l===ur;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=t.get(o);return e===null&&(e=new _o(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),t.set(o,u),u.texture}else{if(t.has(o))return t.get(o).texture;{let u=o.image;if(c&&u&&u.height>0||h&&u&&s(u)){e===null&&(e=new _o(i));let f=c?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,f),o.addEventListener("dispose",r),f.texture}else return null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Bg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){let s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function kg(i,t,e,n){let s={},r=new WeakMap;function a(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);for(let g in f.morphAttributes){let x=f.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)t.remove(x[m])}f.removeEventListener("dispose",a),delete s[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let g in f)t.update(f[g],i.ARRAY_BUFFER);let d=u.morphAttributes;for(let g in d){let x=d[g];for(let m=0,p=x.length;m<p;m++)t.update(x[m],i.ARRAY_BUFFER)}}function c(u){let f=[],d=u.index,g=u.attributes.position,x=0;if(d!==null){let b=d.array;x=d.version;for(let v=0,w=b.length;v<w;v+=3){let U=b[v+0],P=b[v+1],I=b[v+2];f.push(U,P,P,I,I,U)}}else if(g!==void 0){let b=g.array;x=g.version;for(let v=0,w=b.length/3-1;v<w;v+=3){let U=v+0,P=v+1,I=v+2;f.push(U,P,P,I,I,U)}}else return;let m=new(_f(f)?mo:po)(f,1);m.version=x;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Hg(i,t,e,n){let s=n.isWebGL2,r;function a(d){r=d}let o,l;function c(d){o=d.type,l=d.bytesPerElement}function h(d,g){i.drawElements(r,g,o,d*l),e.update(g,r,1)}function u(d,g,x){if(x===0)return;let m,p;if(s)m=i,p="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,g,o,d*l,x),e.update(g,r,x)}function f(d,g,x){if(x===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<x;p++)this.render(d[p]/l,g[p]);else{m.multiDrawElementsWEBGL(r,g,0,o,d,0,x);let p=0;for(let b=0;b<x;b++)p+=g[b];e.update(p,r,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function Vg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Gg(i,t){return i[0]-t[0]}function Wg(i,t){return Math.abs(t[1])-Math.abs(i[1])}function Xg(i,t,e){let n={},s=new Float32Array(8),r=new WeakMap,a=new an,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,u){let f=c.morphTargetInfluences;if(t.isWebGL2===!0){let d=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=d!==void 0?d.length:0,x=r.get(h);if(x===void 0||x.count!==g){let B=function(){J.dispose(),r.delete(h),h.removeEventListener("dispose",B)};x!==void 0&&x.texture.dispose();let b=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,w=h.morphAttributes.color!==void 0,U=h.morphAttributes.position||[],P=h.morphAttributes.normal||[],I=h.morphAttributes.color||[],F=0;b===!0&&(F=1),v===!0&&(F=2),w===!0&&(F=3);let M=h.attributes.position.count*F,E=1;M>t.maxTextureSize&&(E=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let H=new Float32Array(M*E*4*g),J=new ho(H,M,E,g);J.type=Hi,J.needsUpdate=!0;let ot=F*4;for(let V=0;V<g;V++){let et=U[V],at=P[V],it=I[V],K=M*E*4*V;for(let ut=0;ut<et.count;ut++){let mt=ut*ot;b===!0&&(a.fromBufferAttribute(et,ut),H[K+mt+0]=a.x,H[K+mt+1]=a.y,H[K+mt+2]=a.z,H[K+mt+3]=0),v===!0&&(a.fromBufferAttribute(at,ut),H[K+mt+4]=a.x,H[K+mt+5]=a.y,H[K+mt+6]=a.z,H[K+mt+7]=0),w===!0&&(a.fromBufferAttribute(it,ut),H[K+mt+8]=a.x,H[K+mt+9]=a.y,H[K+mt+10]=a.z,H[K+mt+11]=it.itemSize===4?a.w:1)}}x={count:g,texture:J,size:new bt(M,E)},r.set(h,x),h.addEventListener("dispose",B)}let m=0;for(let b=0;b<f.length;b++)m+=f[b];let p=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(i,"morphTargetBaseInfluence",p),u.getUniforms().setValue(i,"morphTargetInfluences",f),u.getUniforms().setValue(i,"morphTargetsTexture",x.texture,e),u.getUniforms().setValue(i,"morphTargetsTextureSize",x.size)}else{let d=f===void 0?0:f.length,g=n[h.id];if(g===void 0||g.length!==d){g=[];for(let v=0;v<d;v++)g[v]=[v,0];n[h.id]=g}for(let v=0;v<d;v++){let w=g[v];w[0]=v,w[1]=f[v]}g.sort(Wg);for(let v=0;v<8;v++)v<d&&g[v][1]?(o[v][0]=g[v][0],o[v][1]=g[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(Gg);let x=h.morphAttributes.position,m=h.morphAttributes.normal,p=0;for(let v=0;v<8;v++){let w=o[v],U=w[0],P=w[1];U!==Number.MAX_SAFE_INTEGER&&P?(x&&h.getAttribute("morphTarget"+v)!==x[U]&&h.setAttribute("morphTarget"+v,x[U]),m&&h.getAttribute("morphNormal"+v)!==m[U]&&h.setAttribute("morphNormal"+v,m[U]),s[v]=P,p+=P):(x&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),m&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),s[v]=0)}let b=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(i,"morphTargetBaseInfluence",b),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function qg(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var vo=class extends In{constructor(t,e,n,s,r,a,o,l,c,h){if(h=h!==void 0?h:fs,h!==fs&&h!==fr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===fs&&(n=ki),n===void 0&&h===fr&&(n=us),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:hn,this.minFilter=l!==void 0?l:hn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},bf=new In,Sf=new vo(1,1);Sf.compareFunction=xf;var Ef=new ho,wf=new jl,Tf=new xo,Nu=[],Fu=[],Ou=new Float32Array(16),zu=new Float32Array(9),Bu=new Float32Array(4);function br(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Nu[s];if(r===void 0&&(r=new Float32Array(s),Nu[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Qe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function je(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Uo(i,t){let e=Fu[t];e===void 0&&(e=new Int32Array(t),Fu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Yg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Zg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qe(e,t))return;i.uniform2fv(this.addr,t),je(e,t)}}function Jg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Qe(e,t))return;i.uniform3fv(this.addr,t),je(e,t)}}function $g(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qe(e,t))return;i.uniform4fv(this.addr,t),je(e,t)}}function Kg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Qe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),je(e,t)}else{if(Qe(e,n))return;Bu.set(n),i.uniformMatrix2fv(this.addr,!1,Bu),je(e,n)}}function Qg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Qe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),je(e,t)}else{if(Qe(e,n))return;zu.set(n),i.uniformMatrix3fv(this.addr,!1,zu),je(e,n)}}function jg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Qe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),je(e,t)}else{if(Qe(e,n))return;Ou.set(n),i.uniformMatrix4fv(this.addr,!1,Ou),je(e,n)}}function tx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function ex(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qe(e,t))return;i.uniform2iv(this.addr,t),je(e,t)}}function nx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Qe(e,t))return;i.uniform3iv(this.addr,t),je(e,t)}}function ix(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qe(e,t))return;i.uniform4iv(this.addr,t),je(e,t)}}function sx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function rx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qe(e,t))return;i.uniform2uiv(this.addr,t),je(e,t)}}function ax(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Qe(e,t))return;i.uniform3uiv(this.addr,t),je(e,t)}}function ox(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qe(e,t))return;i.uniform4uiv(this.addr,t),je(e,t)}}function lx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?Sf:bf;e.setTexture2D(t||r,s)}function cx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||wf,s)}function hx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Tf,s)}function ux(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Ef,s)}function fx(i){switch(i){case 5126:return Yg;case 35664:return Zg;case 35665:return Jg;case 35666:return $g;case 35674:return Kg;case 35675:return Qg;case 35676:return jg;case 5124:case 35670:return tx;case 35667:case 35671:return ex;case 35668:case 35672:return nx;case 35669:case 35673:return ix;case 5125:return sx;case 36294:return rx;case 36295:return ax;case 36296:return ox;case 35678:case 36198:case 36298:case 36306:case 35682:return lx;case 35679:case 36299:case 36307:return cx;case 35680:case 36300:case 36308:case 36293:return hx;case 36289:case 36303:case 36311:case 36292:return ux}}function dx(i,t){i.uniform1fv(this.addr,t)}function px(i,t){let e=br(t,this.size,2);i.uniform2fv(this.addr,e)}function mx(i,t){let e=br(t,this.size,3);i.uniform3fv(this.addr,e)}function gx(i,t){let e=br(t,this.size,4);i.uniform4fv(this.addr,e)}function xx(i,t){let e=br(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function _x(i,t){let e=br(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function vx(i,t){let e=br(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function yx(i,t){i.uniform1iv(this.addr,t)}function Mx(i,t){i.uniform2iv(this.addr,t)}function bx(i,t){i.uniform3iv(this.addr,t)}function Sx(i,t){i.uniform4iv(this.addr,t)}function Ex(i,t){i.uniform1uiv(this.addr,t)}function wx(i,t){i.uniform2uiv(this.addr,t)}function Tx(i,t){i.uniform3uiv(this.addr,t)}function Ax(i,t){i.uniform4uiv(this.addr,t)}function Rx(i,t,e){let n=this.cache,s=t.length,r=Uo(e,s);Qe(n,r)||(i.uniform1iv(this.addr,r),je(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||bf,r[a])}function Cx(i,t,e){let n=this.cache,s=t.length,r=Uo(e,s);Qe(n,r)||(i.uniform1iv(this.addr,r),je(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||wf,r[a])}function Px(i,t,e){let n=this.cache,s=t.length,r=Uo(e,s);Qe(n,r)||(i.uniform1iv(this.addr,r),je(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Tf,r[a])}function Lx(i,t,e){let n=this.cache,s=t.length,r=Uo(e,s);Qe(n,r)||(i.uniform1iv(this.addr,r),je(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Ef,r[a])}function Ix(i){switch(i){case 5126:return dx;case 35664:return px;case 35665:return mx;case 35666:return gx;case 35674:return xx;case 35675:return _x;case 35676:return vx;case 5124:case 35670:return yx;case 35667:case 35671:return Mx;case 35668:case 35672:return bx;case 35669:case 35673:return Sx;case 5125:return Ex;case 36294:return wx;case 36295:return Tx;case 36296:return Ax;case 35678:case 36198:case 36298:case 36306:case 35682:return Rx;case 35679:case 36299:case 36307:return Cx;case 35680:case 36300:case 36308:case 36293:return Px;case 36289:case 36303:case 36311:case 36292:return Lx}}var ic=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=fx(e.type)}},sc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ix(e.type)}},rc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},zl=/(\w+)(\])?(\[|\.)?/g;function ku(i,t){i.seq.push(t),i.map[t.id]=t}function Dx(i,t,e){let n=i.name,s=n.length;for(zl.lastIndex=0;;){let r=zl.exec(n),a=zl.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){ku(e,c===void 0?new ic(o,i,t):new sc(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new rc(o),ku(e,u)),e=u}}}var cr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Dx(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Hu(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Ux=37297,Nx=0;function Fx(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function Ox(i){let t=be.getPrimaries(be.workingColorSpace),e=be.getPrimaries(i),n;switch(t===e?n="":t===so&&e===io?n="LinearDisplayP3ToLinearSRGB":t===io&&e===so&&(n="LinearSRGBToLinearDisplayP3"),i){case Ei:case Do:return[n,"LinearTransferOETF"];case ze:case Hc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Vu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Fx(i.getShaderSource(t),a)}else return s}function zx(i,t){let e=Ox(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Bx(i,t){let e;switch(t){case ip:e="Linear";break;case sp:e="Reinhard";break;case rp:e="OptimizedCineon";break;case ap:e="ACESFilmic";break;case lp:e="AgX";break;case op:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function kx(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ar).join(`
`)}function Hx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ar).join(`
`)}function Vx(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Gx(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function ar(i){return i!==""}function Gu(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Wu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Wx=/^[ \t]*#include +<([\w\d./]+)>/gm;function ac(i){return i.replace(Wx,qx)}var Xx=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function qx(i,t){let e=se[t];if(e===void 0){let n=Xx.get(t);if(n!==void 0)e=se[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ac(e)}var Yx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xu(i){return i.replace(Yx,Zx)}function Zx(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function qu(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Jx(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===af?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===zc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===yi&&(t="SHADOWMAP_TYPE_VSM"),t}function $x(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case hr:case ur:t="ENVMAP_TYPE_CUBE";break;case Io:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Kx(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ur:t="ENVMAP_MODE_REFRACTION";break}return t}function Qx(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Bc:t="ENVMAP_BLENDING_MULTIPLY";break;case ep:t="ENVMAP_BLENDING_MIX";break;case np:t="ENVMAP_BLENDING_ADD";break}return t}function jx(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function t_(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Jx(e),c=$x(e),h=Kx(e),u=Qx(e),f=jx(e),d=e.isWebGL2?"":kx(e),g=Hx(e),x=Vx(r),m=s.createProgram(),p,b,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(ar).join(`
`),p.length>0&&(p+=`
`),b=[d,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(ar).join(`
`),b.length>0&&(b+=`
`)):(p=[qu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ar).join(`
`),b=[d,qu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Gi?"#define TONE_MAPPING":"",e.toneMapping!==Gi?se.tonemapping_pars_fragment:"",e.toneMapping!==Gi?Bx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",se.colorspace_pars_fragment,zx("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ar).join(`
`)),a=ac(a),a=Gu(a,e),a=Wu(a,e),o=ac(o),o=Gu(o,e),o=Wu(o,e),a=Xu(a),o=Xu(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,b=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===uu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===uu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+b);let w=v+p+a,U=v+b+o,P=Hu(s,s.VERTEX_SHADER,w),I=Hu(s,s.FRAGMENT_SHADER,U);s.attachShader(m,P),s.attachShader(m,I),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function F(J){if(i.debug.checkShaderErrors){let ot=s.getProgramInfoLog(m).trim(),B=s.getShaderInfoLog(P).trim(),V=s.getShaderInfoLog(I).trim(),et=!0,at=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(et=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,P,I);else{let it=Vu(s,P,"vertex"),K=Vu(s,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+ot+`
`+it+`
`+K)}else ot!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ot):(B===""||V==="")&&(at=!1);at&&(J.diagnostics={runnable:et,programLog:ot,vertexShader:{log:B,prefix:p},fragmentShader:{log:V,prefix:b}})}s.deleteShader(P),s.deleteShader(I),M=new cr(s,m),E=Gx(s,m)}let M;this.getUniforms=function(){return M===void 0&&F(this),M};let E;this.getAttributes=function(){return E===void 0&&F(this),E};let H=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return H===!1&&(H=s.getProgramParameter(m,Ux)),H},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Nx++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=P,this.fragmentShader=I,this}var e_=0,oc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new lc(t),e.set(t,n)),n}},lc=class{constructor(t){this.id=e_++,this.code=t,this.usedTimes=0}};function n_(i,t,e,n,s,r,a){let o=new fo,l=new oc,c=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,f=s.vertexTextures,d=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return M===0?"uv":`uv${M}`}function m(M,E,H,J,ot){let B=J.fog,V=ot.geometry,et=M.isMeshStandardMaterial?J.environment:null,at=(M.isMeshStandardMaterial?e:t).get(M.envMap||et),it=at&&at.mapping===Io?at.image.height:null,K=g[M.type];M.precision!==null&&(d=s.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));let ut=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,mt=ut!==void 0?ut.length:0,Et=0;V.morphAttributes.position!==void 0&&(Et=1),V.morphAttributes.normal!==void 0&&(Et=2),V.morphAttributes.color!==void 0&&(Et=3);let tt,lt,vt,Ut;if(K){let nn=ei[K];tt=nn.vertexShader,lt=nn.fragmentShader}else tt=M.vertexShader,lt=M.fragmentShader,l.update(M),vt=l.getVertexShaderID(M),Ut=l.getFragmentShaderID(M);let At=i.getRenderTarget(),Zt=ot.isInstancedMesh===!0,$t=ot.isBatchedMesh===!0,Gt=!!M.map,le=!!M.matcap,X=!!at,ln=!!M.aoMap,Ot=!!M.lightMap,qt=!!M.bumpMap,Pt=!!M.normalMap,Re=!!M.displacementMap,te=!!M.emissiveMap,C=!!M.metalnessMap,S=!!M.roughnessMap,Y=M.anisotropy>0,pt=M.clearcoat>0,ct=M.iridescence>0,ft=M.sheen>0,Lt=M.transmission>0,yt=Y&&!!M.anisotropyMap,Tt=pt&&!!M.clearcoatMap,Ht=pt&&!!M.clearcoatNormalMap,Kt=pt&&!!M.clearcoatRoughnessMap,rt=ct&&!!M.iridescenceMap,ce=ct&&!!M.iridescenceThicknessMap,ee=ft&&!!M.sheenColorMap,Wt=ft&&!!M.sheenRoughnessMap,Ft=!!M.specularMap,Rt=!!M.specularColorMap,Qt=!!M.specularIntensityMap,ge=Lt&&!!M.transmissionMap,Ce=Lt&&!!M.thicknessMap,ne=!!M.gradientMap,ht=!!M.alphaMap,z=M.alphaTest>0,xt=!!M.alphaHash,_t=!!M.extensions,zt=!!V.attributes.uv1,Bt=!!V.attributes.uv2,_e=!!V.attributes.uv3,ve=Gi;return M.toneMapped&&(At===null||At.isXRRenderTarget===!0)&&(ve=i.toneMapping),{isWebGL2:h,shaderID:K,shaderType:M.type,shaderName:M.name,vertexShader:tt,fragmentShader:lt,defines:M.defines,customVertexShaderID:vt,customFragmentShaderID:Ut,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:$t,instancing:Zt,instancingColor:Zt&&ot.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:At===null?i.outputColorSpace:At.isXRRenderTarget===!0?At.texture.colorSpace:Ei,map:Gt,matcap:le,envMap:X,envMapMode:X&&at.mapping,envMapCubeUVHeight:it,aoMap:ln,lightMap:Ot,bumpMap:qt,normalMap:Pt,displacementMap:f&&Re,emissiveMap:te,normalMapObjectSpace:Pt&&M.normalMapType===yp,normalMapTangentSpace:Pt&&M.normalMapType===gf,metalnessMap:C,roughnessMap:S,anisotropy:Y,anisotropyMap:yt,clearcoat:pt,clearcoatMap:Tt,clearcoatNormalMap:Ht,clearcoatRoughnessMap:Kt,iridescence:ct,iridescenceMap:rt,iridescenceThicknessMap:ce,sheen:ft,sheenColorMap:ee,sheenRoughnessMap:Wt,specularMap:Ft,specularColorMap:Rt,specularIntensityMap:Qt,transmission:Lt,transmissionMap:ge,thicknessMap:Ce,gradientMap:ne,opaque:M.transparent===!1&&M.blending===or,alphaMap:ht,alphaTest:z,alphaHash:xt,combine:M.combine,mapUv:Gt&&x(M.map.channel),aoMapUv:ln&&x(M.aoMap.channel),lightMapUv:Ot&&x(M.lightMap.channel),bumpMapUv:qt&&x(M.bumpMap.channel),normalMapUv:Pt&&x(M.normalMap.channel),displacementMapUv:Re&&x(M.displacementMap.channel),emissiveMapUv:te&&x(M.emissiveMap.channel),metalnessMapUv:C&&x(M.metalnessMap.channel),roughnessMapUv:S&&x(M.roughnessMap.channel),anisotropyMapUv:yt&&x(M.anisotropyMap.channel),clearcoatMapUv:Tt&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:Ht&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Kt&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:rt&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:ee&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:Wt&&x(M.sheenRoughnessMap.channel),specularMapUv:Ft&&x(M.specularMap.channel),specularColorMapUv:Rt&&x(M.specularColorMap.channel),specularIntensityMapUv:Qt&&x(M.specularIntensityMap.channel),transmissionMapUv:ge&&x(M.transmissionMap.channel),thicknessMapUv:Ce&&x(M.thicknessMap.channel),alphaMapUv:ht&&x(M.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Pt||Y),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,vertexUv1s:zt,vertexUv2s:Bt,vertexUv3s:_e,pointsUvs:ot.isPoints===!0&&!!V.attributes.uv&&(Gt||ht),fog:!!B,useFog:M.fog===!0,fogExp2:B&&B.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:ot.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:mt,morphTextureStride:Et,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&H.length>0,shadowMapType:i.shadowMap.type,toneMapping:ve,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Gt&&M.map.isVideoTexture===!0&&be.getTransfer(M.map.colorSpace)===Le,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===wn,flipSided:M.side===xn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:_t&&M.extensions.derivatives===!0,extensionFragDepth:_t&&M.extensions.fragDepth===!0,extensionDrawBuffers:_t&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:_t&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:_t&&M.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function p(M){let E=[];if(M.shaderID?E.push(M.shaderID):(E.push(M.customVertexShaderID),E.push(M.customFragmentShaderID)),M.defines!==void 0)for(let H in M.defines)E.push(H),E.push(M.defines[H]);return M.isRawShaderMaterial===!1&&(b(E,M),v(E,M),E.push(i.outputColorSpace)),E.push(M.customProgramCacheKey),E.join()}function b(M,E){M.push(E.precision),M.push(E.outputColorSpace),M.push(E.envMapMode),M.push(E.envMapCubeUVHeight),M.push(E.mapUv),M.push(E.alphaMapUv),M.push(E.lightMapUv),M.push(E.aoMapUv),M.push(E.bumpMapUv),M.push(E.normalMapUv),M.push(E.displacementMapUv),M.push(E.emissiveMapUv),M.push(E.metalnessMapUv),M.push(E.roughnessMapUv),M.push(E.anisotropyMapUv),M.push(E.clearcoatMapUv),M.push(E.clearcoatNormalMapUv),M.push(E.clearcoatRoughnessMapUv),M.push(E.iridescenceMapUv),M.push(E.iridescenceThicknessMapUv),M.push(E.sheenColorMapUv),M.push(E.sheenRoughnessMapUv),M.push(E.specularMapUv),M.push(E.specularColorMapUv),M.push(E.specularIntensityMapUv),M.push(E.transmissionMapUv),M.push(E.thicknessMapUv),M.push(E.combine),M.push(E.fogExp2),M.push(E.sizeAttenuation),M.push(E.morphTargetsCount),M.push(E.morphAttributeCount),M.push(E.numDirLights),M.push(E.numPointLights),M.push(E.numSpotLights),M.push(E.numSpotLightMaps),M.push(E.numHemiLights),M.push(E.numRectAreaLights),M.push(E.numDirLightShadows),M.push(E.numPointLightShadows),M.push(E.numSpotLightShadows),M.push(E.numSpotLightShadowsWithMaps),M.push(E.numLightProbes),M.push(E.shadowMapType),M.push(E.toneMapping),M.push(E.numClippingPlanes),M.push(E.numClipIntersection),M.push(E.depthPacking)}function v(M,E){o.disableAll(),E.isWebGL2&&o.enable(0),E.supportsVertexTextures&&o.enable(1),E.instancing&&o.enable(2),E.instancingColor&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),M.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.skinning&&o.enable(4),E.morphTargets&&o.enable(5),E.morphNormals&&o.enable(6),E.morphColors&&o.enable(7),E.premultipliedAlpha&&o.enable(8),E.shadowMapEnabled&&o.enable(9),E.useLegacyLights&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),M.push(o.mask)}function w(M){let E=g[M.type],H;if(E){let J=ei[E];H=Xp.clone(J.uniforms)}else H=M.uniforms;return H}function U(M,E){let H;for(let J=0,ot=c.length;J<ot;J++){let B=c[J];if(B.cacheKey===E){H=B,++H.usedTimes;break}}return H===void 0&&(H=new t_(i,E,M,r),c.push(H)),H}function P(M){if(--M.usedTimes===0){let E=c.indexOf(M);c[E]=c[c.length-1],c.pop(),M.destroy()}}function I(M){l.remove(M)}function F(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:w,acquireProgram:U,releaseProgram:P,releaseShaderCache:I,programs:c,dispose:F}}function i_(){let i=new WeakMap;function t(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function e(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function s_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Yu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Zu(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,f,d,g,x,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),t++,p}function o(u,f,d,g,x,m){let p=a(u,f,d,g,x,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):e.push(p)}function l(u,f,d,g,x,m){let p=a(u,f,d,g,x,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,f){e.length>1&&e.sort(u||s_),n.length>1&&n.sort(f||Yu),s.length>1&&s.sort(f||Yu)}function h(){for(let u=t,f=i.length;u<f;u++){let d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function r_(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Zu,i.set(n,[a])):s>=r.length?(a=new Zu,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function a_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new Dt};break;case"SpotLight":e={position:new D,direction:new D,color:new Dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Dt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Dt,groundColor:new Dt};break;case"RectAreaLight":e={color:new Dt,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function o_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var l_=0;function c_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function h_(i,t){let e=new a_,n=o_(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new D);let r=new D,a=new fe,o=new fe;function l(h,u){let f=0,d=0,g=0;for(let J=0;J<9;J++)s.probe[J].set(0,0,0);let x=0,m=0,p=0,b=0,v=0,w=0,U=0,P=0,I=0,F=0,M=0;h.sort(c_);let E=u===!0?Math.PI:1;for(let J=0,ot=h.length;J<ot;J++){let B=h[J],V=B.color,et=B.intensity,at=B.distance,it=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)f+=V.r*et*E,d+=V.g*et*E,g+=V.b*et*E;else if(B.isLightProbe){for(let K=0;K<9;K++)s.probe[K].addScaledVector(B.sh.coefficients[K],et);M++}else if(B.isDirectionalLight){let K=e.get(B);if(K.color.copy(B.color).multiplyScalar(B.intensity*E),B.castShadow){let ut=B.shadow,mt=n.get(B);mt.shadowBias=ut.bias,mt.shadowNormalBias=ut.normalBias,mt.shadowRadius=ut.radius,mt.shadowMapSize=ut.mapSize,s.directionalShadow[x]=mt,s.directionalShadowMap[x]=it,s.directionalShadowMatrix[x]=B.shadow.matrix,w++}s.directional[x]=K,x++}else if(B.isSpotLight){let K=e.get(B);K.position.setFromMatrixPosition(B.matrixWorld),K.color.copy(V).multiplyScalar(et*E),K.distance=at,K.coneCos=Math.cos(B.angle),K.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),K.decay=B.decay,s.spot[p]=K;let ut=B.shadow;if(B.map&&(s.spotLightMap[I]=B.map,I++,ut.updateMatrices(B),B.castShadow&&F++),s.spotLightMatrix[p]=ut.matrix,B.castShadow){let mt=n.get(B);mt.shadowBias=ut.bias,mt.shadowNormalBias=ut.normalBias,mt.shadowRadius=ut.radius,mt.shadowMapSize=ut.mapSize,s.spotShadow[p]=mt,s.spotShadowMap[p]=it,P++}p++}else if(B.isRectAreaLight){let K=e.get(B);K.color.copy(V).multiplyScalar(et),K.halfWidth.set(B.width*.5,0,0),K.halfHeight.set(0,B.height*.5,0),s.rectArea[b]=K,b++}else if(B.isPointLight){let K=e.get(B);if(K.color.copy(B.color).multiplyScalar(B.intensity*E),K.distance=B.distance,K.decay=B.decay,B.castShadow){let ut=B.shadow,mt=n.get(B);mt.shadowBias=ut.bias,mt.shadowNormalBias=ut.normalBias,mt.shadowRadius=ut.radius,mt.shadowMapSize=ut.mapSize,mt.shadowCameraNear=ut.camera.near,mt.shadowCameraFar=ut.camera.far,s.pointShadow[m]=mt,s.pointShadowMap[m]=it,s.pointShadowMatrix[m]=B.shadow.matrix,U++}s.point[m]=K,m++}else if(B.isHemisphereLight){let K=e.get(B);K.skyColor.copy(B.color).multiplyScalar(et*E),K.groundColor.copy(B.groundColor).multiplyScalar(et*E),s.hemi[v]=K,v++}}b>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=gt.LTC_FLOAT_1,s.rectAreaLTC2=gt.LTC_FLOAT_2):(s.rectAreaLTC1=gt.LTC_HALF_1,s.rectAreaLTC2=gt.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=gt.LTC_FLOAT_1,s.rectAreaLTC2=gt.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=gt.LTC_HALF_1,s.rectAreaLTC2=gt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=d,s.ambient[2]=g;let H=s.hash;(H.directionalLength!==x||H.pointLength!==m||H.spotLength!==p||H.rectAreaLength!==b||H.hemiLength!==v||H.numDirectionalShadows!==w||H.numPointShadows!==U||H.numSpotShadows!==P||H.numSpotMaps!==I||H.numLightProbes!==M)&&(s.directional.length=x,s.spot.length=p,s.rectArea.length=b,s.point.length=m,s.hemi.length=v,s.directionalShadow.length=w,s.directionalShadowMap.length=w,s.pointShadow.length=U,s.pointShadowMap.length=U,s.spotShadow.length=P,s.spotShadowMap.length=P,s.directionalShadowMatrix.length=w,s.pointShadowMatrix.length=U,s.spotLightMatrix.length=P+I-F,s.spotLightMap.length=I,s.numSpotLightShadowsWithMaps=F,s.numLightProbes=M,H.directionalLength=x,H.pointLength=m,H.spotLength=p,H.rectAreaLength=b,H.hemiLength=v,H.numDirectionalShadows=w,H.numPointShadows=U,H.numSpotShadows=P,H.numSpotMaps=I,H.numLightProbes=M,s.version=l_++)}function c(h,u){let f=0,d=0,g=0,x=0,m=0,p=u.matrixWorldInverse;for(let b=0,v=h.length;b<v;b++){let w=h[b];if(w.isDirectionalLight){let U=s.directional[f];U.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),U.direction.sub(r),U.direction.transformDirection(p),f++}else if(w.isSpotLight){let U=s.spot[g];U.position.setFromMatrixPosition(w.matrixWorld),U.position.applyMatrix4(p),U.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),U.direction.sub(r),U.direction.transformDirection(p),g++}else if(w.isRectAreaLight){let U=s.rectArea[x];U.position.setFromMatrixPosition(w.matrixWorld),U.position.applyMatrix4(p),o.identity(),a.copy(w.matrixWorld),a.premultiply(p),o.extractRotation(a),U.halfWidth.set(w.width*.5,0,0),U.halfHeight.set(0,w.height*.5,0),U.halfWidth.applyMatrix4(o),U.halfHeight.applyMatrix4(o),x++}else if(w.isPointLight){let U=s.point[d];U.position.setFromMatrixPosition(w.matrixWorld),U.position.applyMatrix4(p),d++}else if(w.isHemisphereLight){let U=s.hemi[m];U.direction.setFromMatrixPosition(w.matrixWorld),U.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:s}}function Ju(i,t){let e=new h_(i,t),n=[],s=[];function r(){n.length=0,s.length=0}function a(u){n.push(u)}function o(u){s.push(u)}function l(u){e.setup(n,u)}function c(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:e},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function u_(i,t){let e=new WeakMap;function n(r,a=0){let o=e.get(r),l;return o===void 0?(l=new Ju(i,t),e.set(r,[l])):a>=o.length?(l=new Ju(i,t),o.push(l)):l=o[a],l}function s(){e=new WeakMap}return{get:n,dispose:s}}var cc=class extends Ti{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_p,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},hc=class extends Ti{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},f_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,d_=`uniform sampler2D shadow_pass;
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
}`;function p_(i,t,e){let n=new jr,s=new bt,r=new bt,a=new an,o=new cc({depthPacking:vp}),l=new hc,c={},h=e.maxTextureSize,u={[Xi]:xn,[xn]:Xi,[wn]:wn},f=new Xe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new bt},radius:{value:4}},vertexShader:f_,fragmentShader:d_}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new Me;g.setAttribute("position",new pe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new oe(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=af;let p=this.type;this.render=function(P,I,F){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;let M=i.getRenderTarget(),E=i.getActiveCubeFace(),H=i.getActiveMipmapLevel(),J=i.state;J.setBlending(Vi),J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);let ot=p!==yi&&this.type===yi,B=p===yi&&this.type!==yi;for(let V=0,et=P.length;V<et;V++){let at=P[V],it=at.shadow;if(it===void 0){console.warn("THREE.WebGLShadowMap:",at,"has no shadow.");continue}if(it.autoUpdate===!1&&it.needsUpdate===!1)continue;s.copy(it.mapSize);let K=it.getFrameExtents();if(s.multiply(K),r.copy(it.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/K.x),s.x=r.x*K.x,it.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/K.y),s.y=r.y*K.y,it.mapSize.y=r.y)),it.map===null||ot===!0||B===!0){let mt=this.type!==yi?{minFilter:hn,magFilter:hn}:{};it.map!==null&&it.map.dispose(),it.map=new Dn(s.x,s.y,mt),it.map.texture.name=at.name+".shadowMap",it.camera.updateProjectionMatrix()}i.setRenderTarget(it.map),i.clear();let ut=it.getViewportCount();for(let mt=0;mt<ut;mt++){let Et=it.getViewport(mt);a.set(r.x*Et.x,r.y*Et.y,r.x*Et.z,r.y*Et.w),J.viewport(a),it.updateMatrices(at,mt),n=it.getFrustum(),w(I,F,it.camera,at,this.type)}it.isPointLightShadow!==!0&&this.type===yi&&b(it,F),it.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(M,E,H)};function b(P,I){let F=t.update(x);f.defines.VSM_SAMPLES!==P.blurSamples&&(f.defines.VSM_SAMPLES=P.blurSamples,d.defines.VSM_SAMPLES=P.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Dn(s.x,s.y)),f.uniforms.shadow_pass.value=P.map.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(I,null,F,f,x,null),d.uniforms.shadow_pass.value=P.mapPass.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(I,null,F,d,x,null)}function v(P,I,F,M){let E=null,H=F.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(H!==void 0)E=H;else if(E=F.isPointLight===!0?l:o,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){let J=E.uuid,ot=I.uuid,B=c[J];B===void 0&&(B={},c[J]=B);let V=B[ot];V===void 0&&(V=E.clone(),B[ot]=V,I.addEventListener("dispose",U)),E=V}if(E.visible=I.visible,E.wireframe=I.wireframe,M===yi?E.side=I.shadowSide!==null?I.shadowSide:I.side:E.side=I.shadowSide!==null?I.shadowSide:u[I.side],E.alphaMap=I.alphaMap,E.alphaTest=I.alphaTest,E.map=I.map,E.clipShadows=I.clipShadows,E.clippingPlanes=I.clippingPlanes,E.clipIntersection=I.clipIntersection,E.displacementMap=I.displacementMap,E.displacementScale=I.displacementScale,E.displacementBias=I.displacementBias,E.wireframeLinewidth=I.wireframeLinewidth,E.linewidth=I.linewidth,F.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let J=i.properties.get(E);J.light=F}return E}function w(P,I,F,M,E){if(P.visible===!1)return;if(P.layers.test(I.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&E===yi)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,P.matrixWorld);let ot=t.update(P),B=P.material;if(Array.isArray(B)){let V=ot.groups;for(let et=0,at=V.length;et<at;et++){let it=V[et],K=B[it.materialIndex];if(K&&K.visible){let ut=v(P,K,M,E);P.onBeforeShadow(i,P,I,F,ot,ut,it),i.renderBufferDirect(F,null,ot,ut,P,it),P.onAfterShadow(i,P,I,F,ot,ut,it)}}}else if(B.visible){let V=v(P,B,M,E);P.onBeforeShadow(i,P,I,F,ot,V,null),i.renderBufferDirect(F,null,ot,V,P,null),P.onAfterShadow(i,P,I,F,ot,V,null)}}let J=P.children;for(let ot=0,B=J.length;ot<B;ot++)w(J[ot],I,F,M,E)}function U(P){P.target.removeEventListener("dispose",U);for(let F in c){let M=c[F],E=P.target.uuid;E in M&&(M[E].dispose(),delete M[E])}}}function m_(i,t,e){let n=e.isWebGL2;function s(){let z=!1,xt=new an,_t=null,zt=new an(0,0,0,0);return{setMask:function(Bt){_t!==Bt&&!z&&(i.colorMask(Bt,Bt,Bt,Bt),_t=Bt)},setLocked:function(Bt){z=Bt},setClear:function(Bt,_e,ve,ke,nn){nn===!0&&(Bt*=ke,_e*=ke,ve*=ke),xt.set(Bt,_e,ve,ke),zt.equals(xt)===!1&&(i.clearColor(Bt,_e,ve,ke),zt.copy(xt))},reset:function(){z=!1,_t=null,zt.set(-1,0,0,0)}}}function r(){let z=!1,xt=null,_t=null,zt=null;return{setTest:function(Bt){Bt?$t(i.DEPTH_TEST):Gt(i.DEPTH_TEST)},setMask:function(Bt){xt!==Bt&&!z&&(i.depthMask(Bt),xt=Bt)},setFunc:function(Bt){if(_t!==Bt){switch(Bt){case Zd:i.depthFunc(i.NEVER);break;case Jd:i.depthFunc(i.ALWAYS);break;case $d:i.depthFunc(i.LESS);break;case ja:i.depthFunc(i.LEQUAL);break;case Kd:i.depthFunc(i.EQUAL);break;case Qd:i.depthFunc(i.GEQUAL);break;case jd:i.depthFunc(i.GREATER);break;case tp:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}_t=Bt}},setLocked:function(Bt){z=Bt},setClear:function(Bt){zt!==Bt&&(i.clearDepth(Bt),zt=Bt)},reset:function(){z=!1,xt=null,_t=null,zt=null}}}function a(){let z=!1,xt=null,_t=null,zt=null,Bt=null,_e=null,ve=null,ke=null,nn=null;return{setTest:function(ye){z||(ye?$t(i.STENCIL_TEST):Gt(i.STENCIL_TEST))},setMask:function(ye){xt!==ye&&!z&&(i.stencilMask(ye),xt=ye)},setFunc:function(ye,sn,zn){(_t!==ye||zt!==sn||Bt!==zn)&&(i.stencilFunc(ye,sn,zn),_t=ye,zt=sn,Bt=zn)},setOp:function(ye,sn,zn){(_e!==ye||ve!==sn||ke!==zn)&&(i.stencilOp(ye,sn,zn),_e=ye,ve=sn,ke=zn)},setLocked:function(ye){z=ye},setClear:function(ye){nn!==ye&&(i.clearStencil(ye),nn=ye)},reset:function(){z=!1,xt=null,_t=null,zt=null,Bt=null,_e=null,ve=null,ke=null,nn=null}}}let o=new s,l=new r,c=new a,h=new WeakMap,u=new WeakMap,f={},d={},g=new WeakMap,x=[],m=null,p=!1,b=null,v=null,w=null,U=null,P=null,I=null,F=null,M=new Dt(0,0,0),E=0,H=!1,J=null,ot=null,B=null,V=null,et=null,at=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),it=!1,K=0,ut=i.getParameter(i.VERSION);ut.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(ut)[1]),it=K>=1):ut.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(ut)[1]),it=K>=2);let mt=null,Et={},tt=i.getParameter(i.SCISSOR_BOX),lt=i.getParameter(i.VIEWPORT),vt=new an().fromArray(tt),Ut=new an().fromArray(lt);function At(z,xt,_t,zt){let Bt=new Uint8Array(4),_e=i.createTexture();i.bindTexture(z,_e),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ve=0;ve<_t;ve++)n&&(z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY)?i.texImage3D(xt,0,i.RGBA,1,1,zt,0,i.RGBA,i.UNSIGNED_BYTE,Bt):i.texImage2D(xt+ve,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Bt);return _e}let Zt={};Zt[i.TEXTURE_2D]=At(i.TEXTURE_2D,i.TEXTURE_2D,1),Zt[i.TEXTURE_CUBE_MAP]=At(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Zt[i.TEXTURE_2D_ARRAY]=At(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Zt[i.TEXTURE_3D]=At(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),$t(i.DEPTH_TEST),l.setFunc(ja),te(!1),C(Ph),$t(i.CULL_FACE),Pt(Vi);function $t(z){f[z]!==!0&&(i.enable(z),f[z]=!0)}function Gt(z){f[z]!==!1&&(i.disable(z),f[z]=!1)}function le(z,xt){return d[z]!==xt?(i.bindFramebuffer(z,xt),d[z]=xt,n&&(z===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=xt),z===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=xt)),!0):!1}function X(z,xt){let _t=x,zt=!1;if(z)if(_t=g.get(xt),_t===void 0&&(_t=[],g.set(xt,_t)),z.isWebGLMultipleRenderTargets){let Bt=z.texture;if(_t.length!==Bt.length||_t[0]!==i.COLOR_ATTACHMENT0){for(let _e=0,ve=Bt.length;_e<ve;_e++)_t[_e]=i.COLOR_ATTACHMENT0+_e;_t.length=Bt.length,zt=!0}}else _t[0]!==i.COLOR_ATTACHMENT0&&(_t[0]=i.COLOR_ATTACHMENT0,zt=!0);else _t[0]!==i.BACK&&(_t[0]=i.BACK,zt=!0);zt&&(e.isWebGL2?i.drawBuffers(_t):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(_t))}function ln(z){return m!==z?(i.useProgram(z),m=z,!0):!1}let Ot={[ls]:i.FUNC_ADD,[Dd]:i.FUNC_SUBTRACT,[Ud]:i.FUNC_REVERSE_SUBTRACT};if(n)Ot[Dh]=i.MIN,Ot[Uh]=i.MAX;else{let z=t.get("EXT_blend_minmax");z!==null&&(Ot[Dh]=z.MIN_EXT,Ot[Uh]=z.MAX_EXT)}let qt={[Nd]:i.ZERO,[Fd]:i.ONE,[Od]:i.SRC_COLOR,[Wl]:i.SRC_ALPHA,[Gd]:i.SRC_ALPHA_SATURATE,[Hd]:i.DST_COLOR,[Bd]:i.DST_ALPHA,[zd]:i.ONE_MINUS_SRC_COLOR,[Xl]:i.ONE_MINUS_SRC_ALPHA,[Vd]:i.ONE_MINUS_DST_COLOR,[kd]:i.ONE_MINUS_DST_ALPHA,[Wd]:i.CONSTANT_COLOR,[Xd]:i.ONE_MINUS_CONSTANT_COLOR,[qd]:i.CONSTANT_ALPHA,[Yd]:i.ONE_MINUS_CONSTANT_ALPHA};function Pt(z,xt,_t,zt,Bt,_e,ve,ke,nn,ye){if(z===Vi){p===!0&&(Gt(i.BLEND),p=!1);return}if(p===!1&&($t(i.BLEND),p=!0),z!==Id){if(z!==b||ye!==H){if((v!==ls||P!==ls)&&(i.blendEquation(i.FUNC_ADD),v=ls,P=ls),ye)switch(z){case or:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Zn:i.blendFunc(i.ONE,i.ONE);break;case Lh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ih:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case or:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Zn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Lh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ih:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}w=null,U=null,I=null,F=null,M.set(0,0,0),E=0,b=z,H=ye}return}Bt=Bt||xt,_e=_e||_t,ve=ve||zt,(xt!==v||Bt!==P)&&(i.blendEquationSeparate(Ot[xt],Ot[Bt]),v=xt,P=Bt),(_t!==w||zt!==U||_e!==I||ve!==F)&&(i.blendFuncSeparate(qt[_t],qt[zt],qt[_e],qt[ve]),w=_t,U=zt,I=_e,F=ve),(ke.equals(M)===!1||nn!==E)&&(i.blendColor(ke.r,ke.g,ke.b,nn),M.copy(ke),E=nn),b=z,H=!1}function Re(z,xt){z.side===wn?Gt(i.CULL_FACE):$t(i.CULL_FACE);let _t=z.side===xn;xt&&(_t=!_t),te(_t),z.blending===or&&z.transparent===!1?Pt(Vi):Pt(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),l.setFunc(z.depthFunc),l.setTest(z.depthTest),l.setMask(z.depthWrite),o.setMask(z.colorWrite);let zt=z.stencilWrite;c.setTest(zt),zt&&(c.setMask(z.stencilWriteMask),c.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),c.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Y(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?$t(i.SAMPLE_ALPHA_TO_COVERAGE):Gt(i.SAMPLE_ALPHA_TO_COVERAGE)}function te(z){J!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),J=z)}function C(z){z!==Pd?($t(i.CULL_FACE),z!==ot&&(z===Ph?i.cullFace(i.BACK):z===Ld?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Gt(i.CULL_FACE),ot=z}function S(z){z!==B&&(it&&i.lineWidth(z),B=z)}function Y(z,xt,_t){z?($t(i.POLYGON_OFFSET_FILL),(V!==xt||et!==_t)&&(i.polygonOffset(xt,_t),V=xt,et=_t)):Gt(i.POLYGON_OFFSET_FILL)}function pt(z){z?$t(i.SCISSOR_TEST):Gt(i.SCISSOR_TEST)}function ct(z){z===void 0&&(z=i.TEXTURE0+at-1),mt!==z&&(i.activeTexture(z),mt=z)}function ft(z,xt,_t){_t===void 0&&(mt===null?_t=i.TEXTURE0+at-1:_t=mt);let zt=Et[_t];zt===void 0&&(zt={type:void 0,texture:void 0},Et[_t]=zt),(zt.type!==z||zt.texture!==xt)&&(mt!==_t&&(i.activeTexture(_t),mt=_t),i.bindTexture(z,xt||Zt[z]),zt.type=z,zt.texture=xt)}function Lt(){let z=Et[mt];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function yt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Tt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ht(){try{i.texSubImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Kt(){try{i.texSubImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function rt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ce(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ee(){try{i.texStorage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Wt(){try{i.texStorage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ft(){try{i.texImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Rt(){try{i.texImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Qt(z){vt.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),vt.copy(z))}function ge(z){Ut.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),Ut.copy(z))}function Ce(z,xt){let _t=u.get(xt);_t===void 0&&(_t=new WeakMap,u.set(xt,_t));let zt=_t.get(z);zt===void 0&&(zt=i.getUniformBlockIndex(xt,z.name),_t.set(z,zt))}function ne(z,xt){let zt=u.get(xt).get(z);h.get(xt)!==zt&&(i.uniformBlockBinding(xt,zt,z.__bindingPointIndex),h.set(xt,zt))}function ht(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},mt=null,Et={},d={},g=new WeakMap,x=[],m=null,p=!1,b=null,v=null,w=null,U=null,P=null,I=null,F=null,M=new Dt(0,0,0),E=0,H=!1,J=null,ot=null,B=null,V=null,et=null,vt.set(0,0,i.canvas.width,i.canvas.height),Ut.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:$t,disable:Gt,bindFramebuffer:le,drawBuffers:X,useProgram:ln,setBlending:Pt,setMaterial:Re,setFlipSided:te,setCullFace:C,setLineWidth:S,setPolygonOffset:Y,setScissorTest:pt,activeTexture:ct,bindTexture:ft,unbindTexture:Lt,compressedTexImage2D:yt,compressedTexImage3D:Tt,texImage2D:Ft,texImage3D:Rt,updateUBOMapping:Ce,uniformBlockBinding:ne,texStorage2D:ee,texStorage3D:Wt,texSubImage2D:Ht,texSubImage3D:Kt,compressedTexSubImage2D:rt,compressedTexSubImage3D:ce,scissor:Qt,viewport:ge,reset:ht}}function g_(i,t,e,n,s,r,a){let o=s.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,S){return d?new OffscreenCanvas(C,S):oo("canvas")}function x(C,S,Y,pt){let ct=1;if((C.width>pt||C.height>pt)&&(ct=pt/Math.max(C.width,C.height)),ct<1||S===!0)if(typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&C instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&C instanceof ImageBitmap){let ft=S?Kl:Math.floor,Lt=ft(ct*C.width),yt=ft(ct*C.height);u===void 0&&(u=g(Lt,yt));let Tt=Y?g(Lt,yt):u;return Tt.width=Lt,Tt.height=yt,Tt.getContext("2d").drawImage(C,0,0,Lt,yt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+Lt+"x"+yt+")."),Tt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function m(C){return fu(C.width)&&fu(C.height)}function p(C){return o?!1:C.wrapS!==qn||C.wrapT!==qn||C.minFilter!==hn&&C.minFilter!==En}function b(C,S){return C.generateMipmaps&&S&&C.minFilter!==hn&&C.minFilter!==En}function v(C){i.generateMipmap(C)}function w(C,S,Y,pt,ct=!1){if(o===!1)return S;if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ft=S;if(S===i.RED&&(Y===i.FLOAT&&(ft=i.R32F),Y===i.HALF_FLOAT&&(ft=i.R16F),Y===i.UNSIGNED_BYTE&&(ft=i.R8)),S===i.RED_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ft=i.R8UI),Y===i.UNSIGNED_SHORT&&(ft=i.R16UI),Y===i.UNSIGNED_INT&&(ft=i.R32UI),Y===i.BYTE&&(ft=i.R8I),Y===i.SHORT&&(ft=i.R16I),Y===i.INT&&(ft=i.R32I)),S===i.RG&&(Y===i.FLOAT&&(ft=i.RG32F),Y===i.HALF_FLOAT&&(ft=i.RG16F),Y===i.UNSIGNED_BYTE&&(ft=i.RG8)),S===i.RGBA){let Lt=ct?no:be.getTransfer(pt);Y===i.FLOAT&&(ft=i.RGBA32F),Y===i.HALF_FLOAT&&(ft=i.RGBA16F),Y===i.UNSIGNED_BYTE&&(ft=Lt===Le?i.SRGB8_ALPHA8:i.RGBA8),Y===i.UNSIGNED_SHORT_4_4_4_4&&(ft=i.RGBA4),Y===i.UNSIGNED_SHORT_5_5_5_1&&(ft=i.RGB5_A1)}return(ft===i.R16F||ft===i.R32F||ft===i.RG16F||ft===i.RG32F||ft===i.RGBA16F||ft===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ft}function U(C,S,Y){return b(C,Y)===!0||C.isFramebufferTexture&&C.minFilter!==hn&&C.minFilter!==En?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function P(C){return C===hn||C===Nh||C===ll?i.NEAREST:i.LINEAR}function I(C){let S=C.target;S.removeEventListener("dispose",I),M(S),S.isVideoTexture&&h.delete(S)}function F(C){let S=C.target;S.removeEventListener("dispose",F),H(S)}function M(C){let S=n.get(C);if(S.__webglInit===void 0)return;let Y=C.source,pt=f.get(Y);if(pt){let ct=pt[S.__cacheKey];ct.usedTimes--,ct.usedTimes===0&&E(C),Object.keys(pt).length===0&&f.delete(Y)}n.remove(C)}function E(C){let S=n.get(C);i.deleteTexture(S.__webglTexture);let Y=C.source,pt=f.get(Y);delete pt[S.__cacheKey],a.memory.textures--}function H(C){let S=C.texture,Y=n.get(C),pt=n.get(S);if(pt.__webglTexture!==void 0&&(i.deleteTexture(pt.__webglTexture),a.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let ct=0;ct<6;ct++){if(Array.isArray(Y.__webglFramebuffer[ct]))for(let ft=0;ft<Y.__webglFramebuffer[ct].length;ft++)i.deleteFramebuffer(Y.__webglFramebuffer[ct][ft]);else i.deleteFramebuffer(Y.__webglFramebuffer[ct]);Y.__webglDepthbuffer&&i.deleteRenderbuffer(Y.__webglDepthbuffer[ct])}else{if(Array.isArray(Y.__webglFramebuffer))for(let ct=0;ct<Y.__webglFramebuffer.length;ct++)i.deleteFramebuffer(Y.__webglFramebuffer[ct]);else i.deleteFramebuffer(Y.__webglFramebuffer);if(Y.__webglDepthbuffer&&i.deleteRenderbuffer(Y.__webglDepthbuffer),Y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(Y.__webglMultisampledFramebuffer),Y.__webglColorRenderbuffer)for(let ct=0;ct<Y.__webglColorRenderbuffer.length;ct++)Y.__webglColorRenderbuffer[ct]&&i.deleteRenderbuffer(Y.__webglColorRenderbuffer[ct]);Y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(Y.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let ct=0,ft=S.length;ct<ft;ct++){let Lt=n.get(S[ct]);Lt.__webglTexture&&(i.deleteTexture(Lt.__webglTexture),a.memory.textures--),n.remove(S[ct])}n.remove(S),n.remove(C)}let J=0;function ot(){J=0}function B(){let C=J;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),J+=1,C}function V(C){let S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function et(C,S){let Y=n.get(C);if(C.isVideoTexture&&Re(C),C.isRenderTargetTexture===!1&&C.version>0&&Y.__version!==C.version){let pt=C.image;if(pt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{vt(Y,C,S);return}}e.bindTexture(i.TEXTURE_2D,Y.__webglTexture,i.TEXTURE0+S)}function at(C,S){let Y=n.get(C);if(C.version>0&&Y.__version!==C.version){vt(Y,C,S);return}e.bindTexture(i.TEXTURE_2D_ARRAY,Y.__webglTexture,i.TEXTURE0+S)}function it(C,S){let Y=n.get(C);if(C.version>0&&Y.__version!==C.version){vt(Y,C,S);return}e.bindTexture(i.TEXTURE_3D,Y.__webglTexture,i.TEXTURE0+S)}function K(C,S){let Y=n.get(C);if(C.version>0&&Y.__version!==C.version){Ut(Y,C,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture,i.TEXTURE0+S)}let ut={[ps]:i.REPEAT,[qn]:i.CLAMP_TO_EDGE,[Zl]:i.MIRRORED_REPEAT},mt={[hn]:i.NEAREST,[Nh]:i.NEAREST_MIPMAP_NEAREST,[ll]:i.NEAREST_MIPMAP_LINEAR,[En]:i.LINEAR,[cp]:i.LINEAR_MIPMAP_NEAREST,[Qr]:i.LINEAR_MIPMAP_LINEAR},Et={[Mp]:i.NEVER,[Ap]:i.ALWAYS,[bp]:i.LESS,[xf]:i.LEQUAL,[Sp]:i.EQUAL,[Tp]:i.GEQUAL,[Ep]:i.GREATER,[wp]:i.NOTEQUAL};function tt(C,S,Y){if(Y?(i.texParameteri(C,i.TEXTURE_WRAP_S,ut[S.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,ut[S.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,ut[S.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,mt[S.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,mt[S.minFilter])):(i.texParameteri(C,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(C,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(S.wrapS!==qn||S.wrapT!==qn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(C,i.TEXTURE_MAG_FILTER,P(S.magFilter)),i.texParameteri(C,i.TEXTURE_MIN_FILTER,P(S.minFilter)),S.minFilter!==hn&&S.minFilter!==En&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,Et[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let pt=t.get("EXT_texture_filter_anisotropic");if(S.magFilter===hn||S.minFilter!==ll&&S.minFilter!==Qr||S.type===Hi&&t.has("OES_texture_float_linear")===!1||o===!1&&S.type===ms&&t.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(i.texParameterf(C,pt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function lt(C,S){let Y=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",I));let pt=S.source,ct=f.get(pt);ct===void 0&&(ct={},f.set(pt,ct));let ft=V(S);if(ft!==C.__cacheKey){ct[ft]===void 0&&(ct[ft]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,Y=!0),ct[ft].usedTimes++;let Lt=ct[C.__cacheKey];Lt!==void 0&&(ct[C.__cacheKey].usedTimes--,Lt.usedTimes===0&&E(S)),C.__cacheKey=ft,C.__webglTexture=ct[ft].texture}return Y}function vt(C,S,Y){let pt=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(pt=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(pt=i.TEXTURE_3D);let ct=lt(C,S),ft=S.source;e.bindTexture(pt,C.__webglTexture,i.TEXTURE0+Y);let Lt=n.get(ft);if(ft.version!==Lt.__version||ct===!0){e.activeTexture(i.TEXTURE0+Y);let yt=be.getPrimaries(be.workingColorSpace),Tt=S.colorSpace===Hn?null:be.getPrimaries(S.colorSpace),Ht=S.colorSpace===Hn||yt===Tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ht);let Kt=p(S)&&m(S.image)===!1,rt=x(S.image,Kt,!1,s.maxTextureSize);rt=te(S,rt);let ce=m(rt)||o,ee=r.convert(S.format,S.colorSpace),Wt=r.convert(S.type),Ft=w(S.internalFormat,ee,Wt,S.colorSpace,S.isVideoTexture);tt(pt,S,ce);let Rt,Qt=S.mipmaps,ge=o&&S.isVideoTexture!==!0&&Ft!==pf,Ce=Lt.__version===void 0||ct===!0,ne=U(S,rt,ce);if(S.isDepthTexture)Ft=i.DEPTH_COMPONENT,o?S.type===Hi?Ft=i.DEPTH_COMPONENT32F:S.type===ki?Ft=i.DEPTH_COMPONENT24:S.type===us?Ft=i.DEPTH24_STENCIL8:Ft=i.DEPTH_COMPONENT16:S.type===Hi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===fs&&Ft===i.DEPTH_COMPONENT&&S.type!==kc&&S.type!==ki&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=ki,Wt=r.convert(S.type)),S.format===fr&&Ft===i.DEPTH_COMPONENT&&(Ft=i.DEPTH_STENCIL,S.type!==us&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=us,Wt=r.convert(S.type))),Ce&&(ge?e.texStorage2D(i.TEXTURE_2D,1,Ft,rt.width,rt.height):e.texImage2D(i.TEXTURE_2D,0,Ft,rt.width,rt.height,0,ee,Wt,null));else if(S.isDataTexture)if(Qt.length>0&&ce){ge&&Ce&&e.texStorage2D(i.TEXTURE_2D,ne,Ft,Qt[0].width,Qt[0].height);for(let ht=0,z=Qt.length;ht<z;ht++)Rt=Qt[ht],ge?e.texSubImage2D(i.TEXTURE_2D,ht,0,0,Rt.width,Rt.height,ee,Wt,Rt.data):e.texImage2D(i.TEXTURE_2D,ht,Ft,Rt.width,Rt.height,0,ee,Wt,Rt.data);S.generateMipmaps=!1}else ge?(Ce&&e.texStorage2D(i.TEXTURE_2D,ne,Ft,rt.width,rt.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,rt.width,rt.height,ee,Wt,rt.data)):e.texImage2D(i.TEXTURE_2D,0,Ft,rt.width,rt.height,0,ee,Wt,rt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ge&&Ce&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ne,Ft,Qt[0].width,Qt[0].height,rt.depth);for(let ht=0,z=Qt.length;ht<z;ht++)Rt=Qt[ht],S.format!==Yn?ee!==null?ge?e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ht,0,0,0,Rt.width,Rt.height,rt.depth,ee,Rt.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ht,Ft,Rt.width,Rt.height,rt.depth,0,Rt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ge?e.texSubImage3D(i.TEXTURE_2D_ARRAY,ht,0,0,0,Rt.width,Rt.height,rt.depth,ee,Wt,Rt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ht,Ft,Rt.width,Rt.height,rt.depth,0,ee,Wt,Rt.data)}else{ge&&Ce&&e.texStorage2D(i.TEXTURE_2D,ne,Ft,Qt[0].width,Qt[0].height);for(let ht=0,z=Qt.length;ht<z;ht++)Rt=Qt[ht],S.format!==Yn?ee!==null?ge?e.compressedTexSubImage2D(i.TEXTURE_2D,ht,0,0,Rt.width,Rt.height,ee,Rt.data):e.compressedTexImage2D(i.TEXTURE_2D,ht,Ft,Rt.width,Rt.height,0,Rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ge?e.texSubImage2D(i.TEXTURE_2D,ht,0,0,Rt.width,Rt.height,ee,Wt,Rt.data):e.texImage2D(i.TEXTURE_2D,ht,Ft,Rt.width,Rt.height,0,ee,Wt,Rt.data)}else if(S.isDataArrayTexture)ge?(Ce&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ne,Ft,rt.width,rt.height,rt.depth),e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,ee,Wt,rt.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ft,rt.width,rt.height,rt.depth,0,ee,Wt,rt.data);else if(S.isData3DTexture)ge?(Ce&&e.texStorage3D(i.TEXTURE_3D,ne,Ft,rt.width,rt.height,rt.depth),e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,ee,Wt,rt.data)):e.texImage3D(i.TEXTURE_3D,0,Ft,rt.width,rt.height,rt.depth,0,ee,Wt,rt.data);else if(S.isFramebufferTexture){if(Ce)if(ge)e.texStorage2D(i.TEXTURE_2D,ne,Ft,rt.width,rt.height);else{let ht=rt.width,z=rt.height;for(let xt=0;xt<ne;xt++)e.texImage2D(i.TEXTURE_2D,xt,Ft,ht,z,0,ee,Wt,null),ht>>=1,z>>=1}}else if(Qt.length>0&&ce){ge&&Ce&&e.texStorage2D(i.TEXTURE_2D,ne,Ft,Qt[0].width,Qt[0].height);for(let ht=0,z=Qt.length;ht<z;ht++)Rt=Qt[ht],ge?e.texSubImage2D(i.TEXTURE_2D,ht,0,0,ee,Wt,Rt):e.texImage2D(i.TEXTURE_2D,ht,Ft,ee,Wt,Rt);S.generateMipmaps=!1}else ge?(Ce&&e.texStorage2D(i.TEXTURE_2D,ne,Ft,rt.width,rt.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,ee,Wt,rt)):e.texImage2D(i.TEXTURE_2D,0,Ft,ee,Wt,rt);b(S,ce)&&v(pt),Lt.__version=ft.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function Ut(C,S,Y){if(S.image.length!==6)return;let pt=lt(C,S),ct=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+Y);let ft=n.get(ct);if(ct.version!==ft.__version||pt===!0){e.activeTexture(i.TEXTURE0+Y);let Lt=be.getPrimaries(be.workingColorSpace),yt=S.colorSpace===Hn?null:be.getPrimaries(S.colorSpace),Tt=S.colorSpace===Hn||Lt===yt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);let Ht=S.isCompressedTexture||S.image[0].isCompressedTexture,Kt=S.image[0]&&S.image[0].isDataTexture,rt=[];for(let ht=0;ht<6;ht++)!Ht&&!Kt?rt[ht]=x(S.image[ht],!1,!0,s.maxCubemapSize):rt[ht]=Kt?S.image[ht].image:S.image[ht],rt[ht]=te(S,rt[ht]);let ce=rt[0],ee=m(ce)||o,Wt=r.convert(S.format,S.colorSpace),Ft=r.convert(S.type),Rt=w(S.internalFormat,Wt,Ft,S.colorSpace),Qt=o&&S.isVideoTexture!==!0,ge=ft.__version===void 0||pt===!0,Ce=U(S,ce,ee);tt(i.TEXTURE_CUBE_MAP,S,ee);let ne;if(Ht){Qt&&ge&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Ce,Rt,ce.width,ce.height);for(let ht=0;ht<6;ht++){ne=rt[ht].mipmaps;for(let z=0;z<ne.length;z++){let xt=ne[z];S.format!==Yn?Wt!==null?Qt?e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,z,0,0,xt.width,xt.height,Wt,xt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,z,Rt,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Qt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,z,0,0,xt.width,xt.height,Wt,Ft,xt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,z,Rt,xt.width,xt.height,0,Wt,Ft,xt.data)}}}else{ne=S.mipmaps,Qt&&ge&&(ne.length>0&&Ce++,e.texStorage2D(i.TEXTURE_CUBE_MAP,Ce,Rt,rt[0].width,rt[0].height));for(let ht=0;ht<6;ht++)if(Kt){Qt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,rt[ht].width,rt[ht].height,Wt,Ft,rt[ht].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,Rt,rt[ht].width,rt[ht].height,0,Wt,Ft,rt[ht].data);for(let z=0;z<ne.length;z++){let _t=ne[z].image[ht].image;Qt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,z+1,0,0,_t.width,_t.height,Wt,Ft,_t.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,z+1,Rt,_t.width,_t.height,0,Wt,Ft,_t.data)}}else{Qt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,Wt,Ft,rt[ht]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,Rt,Wt,Ft,rt[ht]);for(let z=0;z<ne.length;z++){let xt=ne[z];Qt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,z+1,0,0,Wt,Ft,xt.image[ht]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,z+1,Rt,Wt,Ft,xt.image[ht])}}}b(S,ee)&&v(i.TEXTURE_CUBE_MAP),ft.__version=ct.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function At(C,S,Y,pt,ct,ft){let Lt=r.convert(Y.format,Y.colorSpace),yt=r.convert(Y.type),Tt=w(Y.internalFormat,Lt,yt,Y.colorSpace);if(!n.get(S).__hasExternalTextures){let Kt=Math.max(1,S.width>>ft),rt=Math.max(1,S.height>>ft);ct===i.TEXTURE_3D||ct===i.TEXTURE_2D_ARRAY?e.texImage3D(ct,ft,Tt,Kt,rt,S.depth,0,Lt,yt,null):e.texImage2D(ct,ft,Tt,Kt,rt,0,Lt,yt,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),Pt(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,pt,ct,n.get(Y).__webglTexture,0,qt(S)):(ct===i.TEXTURE_2D||ct>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ct<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,pt,ct,n.get(Y).__webglTexture,ft),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Zt(C,S,Y){if(i.bindRenderbuffer(i.RENDERBUFFER,C),S.depthBuffer&&!S.stencilBuffer){let pt=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(Y||Pt(S)){let ct=S.depthTexture;ct&&ct.isDepthTexture&&(ct.type===Hi?pt=i.DEPTH_COMPONENT32F:ct.type===ki&&(pt=i.DEPTH_COMPONENT24));let ft=qt(S);Pt(S)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ft,pt,S.width,S.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,ft,pt,S.width,S.height)}else i.renderbufferStorage(i.RENDERBUFFER,pt,S.width,S.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,C)}else if(S.depthBuffer&&S.stencilBuffer){let pt=qt(S);Y&&Pt(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,pt,i.DEPTH24_STENCIL8,S.width,S.height):Pt(S)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pt,i.DEPTH24_STENCIL8,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,C)}else{let pt=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let ct=0;ct<pt.length;ct++){let ft=pt[ct],Lt=r.convert(ft.format,ft.colorSpace),yt=r.convert(ft.type),Tt=w(ft.internalFormat,Lt,yt,ft.colorSpace),Ht=qt(S);Y&&Pt(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ht,Tt,S.width,S.height):Pt(S)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ht,Tt,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Tt,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function $t(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),et(S.depthTexture,0);let pt=n.get(S.depthTexture).__webglTexture,ct=qt(S);if(S.depthTexture.format===fs)Pt(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,pt,0,ct):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,pt,0);else if(S.depthTexture.format===fr)Pt(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,pt,0,ct):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,pt,0);else throw new Error("Unknown depthTexture format")}function Gt(C){let S=n.get(C),Y=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");$t(S.__webglFramebuffer,C)}else if(Y){S.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[pt]),S.__webglDepthbuffer[pt]=i.createRenderbuffer(),Zt(S.__webglDepthbuffer[pt],C,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=i.createRenderbuffer(),Zt(S.__webglDepthbuffer,C,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function le(C,S,Y){let pt=n.get(C);S!==void 0&&At(pt.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Y!==void 0&&Gt(C)}function X(C){let S=C.texture,Y=n.get(C),pt=n.get(S);C.addEventListener("dispose",F),C.isWebGLMultipleRenderTargets!==!0&&(pt.__webglTexture===void 0&&(pt.__webglTexture=i.createTexture()),pt.__version=S.version,a.memory.textures++);let ct=C.isWebGLCubeRenderTarget===!0,ft=C.isWebGLMultipleRenderTargets===!0,Lt=m(C)||o;if(ct){Y.__webglFramebuffer=[];for(let yt=0;yt<6;yt++)if(o&&S.mipmaps&&S.mipmaps.length>0){Y.__webglFramebuffer[yt]=[];for(let Tt=0;Tt<S.mipmaps.length;Tt++)Y.__webglFramebuffer[yt][Tt]=i.createFramebuffer()}else Y.__webglFramebuffer[yt]=i.createFramebuffer()}else{if(o&&S.mipmaps&&S.mipmaps.length>0){Y.__webglFramebuffer=[];for(let yt=0;yt<S.mipmaps.length;yt++)Y.__webglFramebuffer[yt]=i.createFramebuffer()}else Y.__webglFramebuffer=i.createFramebuffer();if(ft)if(s.drawBuffers){let yt=C.texture;for(let Tt=0,Ht=yt.length;Tt<Ht;Tt++){let Kt=n.get(yt[Tt]);Kt.__webglTexture===void 0&&(Kt.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&C.samples>0&&Pt(C)===!1){let yt=ft?S:[S];Y.__webglMultisampledFramebuffer=i.createFramebuffer(),Y.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Tt=0;Tt<yt.length;Tt++){let Ht=yt[Tt];Y.__webglColorRenderbuffer[Tt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Y.__webglColorRenderbuffer[Tt]);let Kt=r.convert(Ht.format,Ht.colorSpace),rt=r.convert(Ht.type),ce=w(Ht.internalFormat,Kt,rt,Ht.colorSpace,C.isXRRenderTarget===!0),ee=qt(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,ee,ce,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,Y.__webglColorRenderbuffer[Tt])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(Y.__webglDepthRenderbuffer=i.createRenderbuffer(),Zt(Y.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ct){e.bindTexture(i.TEXTURE_CUBE_MAP,pt.__webglTexture),tt(i.TEXTURE_CUBE_MAP,S,Lt);for(let yt=0;yt<6;yt++)if(o&&S.mipmaps&&S.mipmaps.length>0)for(let Tt=0;Tt<S.mipmaps.length;Tt++)At(Y.__webglFramebuffer[yt][Tt],C,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Tt);else At(Y.__webglFramebuffer[yt],C,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0);b(S,Lt)&&v(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ft){let yt=C.texture;for(let Tt=0,Ht=yt.length;Tt<Ht;Tt++){let Kt=yt[Tt],rt=n.get(Kt);e.bindTexture(i.TEXTURE_2D,rt.__webglTexture),tt(i.TEXTURE_2D,Kt,Lt),At(Y.__webglFramebuffer,C,Kt,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,0),b(Kt,Lt)&&v(i.TEXTURE_2D)}e.unbindTexture()}else{let yt=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(o?yt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(yt,pt.__webglTexture),tt(yt,S,Lt),o&&S.mipmaps&&S.mipmaps.length>0)for(let Tt=0;Tt<S.mipmaps.length;Tt++)At(Y.__webglFramebuffer[Tt],C,S,i.COLOR_ATTACHMENT0,yt,Tt);else At(Y.__webglFramebuffer,C,S,i.COLOR_ATTACHMENT0,yt,0);b(S,Lt)&&v(yt),e.unbindTexture()}C.depthBuffer&&Gt(C)}function ln(C){let S=m(C)||o,Y=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let pt=0,ct=Y.length;pt<ct;pt++){let ft=Y[pt];if(b(ft,S)){let Lt=C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,yt=n.get(ft).__webglTexture;e.bindTexture(Lt,yt),v(Lt),e.unbindTexture()}}}function Ot(C){if(o&&C.samples>0&&Pt(C)===!1){let S=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],Y=C.width,pt=C.height,ct=i.COLOR_BUFFER_BIT,ft=[],Lt=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=n.get(C),Tt=C.isWebGLMultipleRenderTargets===!0;if(Tt)for(let Ht=0;Ht<S.length;Ht++)e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ht,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ht,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let Ht=0;Ht<S.length;Ht++){ft.push(i.COLOR_ATTACHMENT0+Ht),C.depthBuffer&&ft.push(Lt);let Kt=yt.__ignoreDepthValues!==void 0?yt.__ignoreDepthValues:!1;if(Kt===!1&&(C.depthBuffer&&(ct|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&(ct|=i.STENCIL_BUFFER_BIT)),Tt&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,yt.__webglColorRenderbuffer[Ht]),Kt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Lt]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Lt])),Tt){let rt=n.get(S[Ht]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,rt,0)}i.blitFramebuffer(0,0,Y,pt,0,0,Y,pt,ct,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ft)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Tt)for(let Ht=0;Ht<S.length;Ht++){e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ht,i.RENDERBUFFER,yt.__webglColorRenderbuffer[Ht]);let Kt=n.get(S[Ht]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ht,i.TEXTURE_2D,Kt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}}function qt(C){return Math.min(s.maxSamples,C.samples)}function Pt(C){let S=n.get(C);return o&&C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Re(C){let S=a.render.frame;h.get(C)!==S&&(h.set(C,S),C.update())}function te(C,S){let Y=C.colorSpace,pt=C.format,ct=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===$l||Y!==Ei&&Y!==Hn&&(be.getTransfer(Y)===Le?o===!1?t.has("EXT_sRGB")===!0&&pt===Yn?(C.format=$l,C.minFilter=En,C.generateMipmaps=!1):S=lo.sRGBToLinear(S):(pt!==Yn||ct!==ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),S}this.allocateTextureUnit=B,this.resetTextureUnits=ot,this.setTexture2D=et,this.setTexture2DArray=at,this.setTexture3D=it,this.setTextureCube=K,this.rebindTextures=le,this.setupRenderTarget=X,this.updateRenderTargetMipmap=ln,this.updateMultisampleRenderTarget=Ot,this.setupDepthRenderbuffer=Gt,this.setupFrameBufferTexture=At,this.useMultisampledRTT=Pt}function x_(i,t,e){let n=e.isWebGL2;function s(r,a=Hn){let o,l=be.getTransfer(a);if(r===ni)return i.UNSIGNED_BYTE;if(r===cf)return i.UNSIGNED_SHORT_4_4_4_4;if(r===hf)return i.UNSIGNED_SHORT_5_5_5_1;if(r===hp)return i.BYTE;if(r===up)return i.SHORT;if(r===kc)return i.UNSIGNED_SHORT;if(r===lf)return i.INT;if(r===ki)return i.UNSIGNED_INT;if(r===Hi)return i.FLOAT;if(r===ms)return n?i.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===fp)return i.ALPHA;if(r===Yn)return i.RGBA;if(r===dp)return i.LUMINANCE;if(r===pp)return i.LUMINANCE_ALPHA;if(r===fs)return i.DEPTH_COMPONENT;if(r===fr)return i.DEPTH_STENCIL;if(r===$l)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===mp)return i.RED;if(r===uf)return i.RED_INTEGER;if(r===gp)return i.RG;if(r===ff)return i.RG_INTEGER;if(r===df)return i.RGBA_INTEGER;if(r===cl||r===hl||r===ul||r===fl)if(l===Le)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===cl)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===hl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ul)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===fl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===cl)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===hl)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ul)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===fl)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Fh||r===Oh||r===zh||r===Bh)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Fh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Oh)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===zh)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Bh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===pf)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===kh||r===Hh)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===kh)return l===Le?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Hh)return l===Le?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Vh||r===Gh||r===Wh||r===Xh||r===qh||r===Yh||r===Zh||r===Jh||r===$h||r===Kh||r===Qh||r===jh||r===tu||r===eu)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Vh)return l===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Gh)return l===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Wh)return l===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Xh)return l===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===qh)return l===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Yh)return l===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Zh)return l===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Jh)return l===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===$h)return l===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Kh)return l===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Qh)return l===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===jh)return l===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===tu)return l===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===eu)return l===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===dl||r===nu||r===iu)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===dl)return l===Le?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===nu)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===iu)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===xp||r===su||r===ru||r===au)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===dl)return o.COMPRESSED_RED_RGTC1_EXT;if(r===su)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ru)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===au)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===us?n?i.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var uc=class extends fn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Be=class extends Ke{constructor(){super(),this.isGroup=!0,this.type="Group"}},__={type:"move"},Jr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Be,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Be,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Be,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(__)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Be;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},fc=class extends qi{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null,x=e.getContextAttributes(),m=null,p=null,b=[],v=[],w=new bt,U=null,P=new fn;P.layers.enable(1),P.viewport=new an;let I=new fn;I.layers.enable(2),I.viewport=new an;let F=[P,I],M=new uc;M.layers.enable(1),M.layers.enable(2);let E=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let lt=b[tt];return lt===void 0&&(lt=new Jr,b[tt]=lt),lt.getTargetRaySpace()},this.getControllerGrip=function(tt){let lt=b[tt];return lt===void 0&&(lt=new Jr,b[tt]=lt),lt.getGripSpace()},this.getHand=function(tt){let lt=b[tt];return lt===void 0&&(lt=new Jr,b[tt]=lt),lt.getHandSpace()};function J(tt){let lt=v.indexOf(tt.inputSource);if(lt===-1)return;let vt=b[lt];vt!==void 0&&(vt.update(tt.inputSource,tt.frame,c||a),vt.dispatchEvent({type:tt.type,data:tt.inputSource}))}function ot(){s.removeEventListener("select",J),s.removeEventListener("selectstart",J),s.removeEventListener("selectend",J),s.removeEventListener("squeeze",J),s.removeEventListener("squeezestart",J),s.removeEventListener("squeezeend",J),s.removeEventListener("end",ot),s.removeEventListener("inputsourceschange",B);for(let tt=0;tt<b.length;tt++){let lt=v[tt];lt!==null&&(v[tt]=null,b[tt].disconnect(lt))}E=null,H=null,t.setRenderTarget(m),d=null,f=null,u=null,s=null,p=null,Et.stop(),n.isPresenting=!1,t.setPixelRatio(U),t.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){r=tt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){o=tt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(tt){c=tt},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(tt){if(s=tt,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",J),s.addEventListener("selectstart",J),s.addEventListener("selectend",J),s.addEventListener("squeeze",J),s.addEventListener("squeezestart",J),s.addEventListener("squeezeend",J),s.addEventListener("end",ot),s.addEventListener("inputsourceschange",B),x.xrCompatible!==!0&&await e.makeXRCompatible(),U=t.getPixelRatio(),t.getSize(w),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let lt={antialias:s.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,lt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),p=new Dn(d.framebufferWidth,d.framebufferHeight,{format:Yn,type:ni,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil})}else{let lt=null,vt=null,Ut=null;x.depth&&(Ut=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,lt=x.stencil?fr:fs,vt=x.stencil?us:ki);let At={colorFormat:e.RGBA8,depthFormat:Ut,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(At),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),p=new Dn(f.textureWidth,f.textureHeight,{format:Yn,type:ni,depthTexture:new vo(f.textureWidth,f.textureHeight,vt,void 0,void 0,void 0,void 0,void 0,void 0,lt),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0});let Zt=t.properties.get(p);Zt.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Et.setContext(s),Et.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function B(tt){for(let lt=0;lt<tt.removed.length;lt++){let vt=tt.removed[lt],Ut=v.indexOf(vt);Ut>=0&&(v[Ut]=null,b[Ut].disconnect(vt))}for(let lt=0;lt<tt.added.length;lt++){let vt=tt.added[lt],Ut=v.indexOf(vt);if(Ut===-1){for(let Zt=0;Zt<b.length;Zt++)if(Zt>=v.length){v.push(vt),Ut=Zt;break}else if(v[Zt]===null){v[Zt]=vt,Ut=Zt;break}if(Ut===-1)break}let At=b[Ut];At&&At.connect(vt)}}let V=new D,et=new D;function at(tt,lt,vt){V.setFromMatrixPosition(lt.matrixWorld),et.setFromMatrixPosition(vt.matrixWorld);let Ut=V.distanceTo(et),At=lt.projectionMatrix.elements,Zt=vt.projectionMatrix.elements,$t=At[14]/(At[10]-1),Gt=At[14]/(At[10]+1),le=(At[9]+1)/At[5],X=(At[9]-1)/At[5],ln=(At[8]-1)/At[0],Ot=(Zt[8]+1)/Zt[0],qt=$t*ln,Pt=$t*Ot,Re=Ut/(-ln+Ot),te=Re*-ln;lt.matrixWorld.decompose(tt.position,tt.quaternion,tt.scale),tt.translateX(te),tt.translateZ(Re),tt.matrixWorld.compose(tt.position,tt.quaternion,tt.scale),tt.matrixWorldInverse.copy(tt.matrixWorld).invert();let C=$t+Re,S=Gt+Re,Y=qt-te,pt=Pt+(Ut-te),ct=le*Gt/S*C,ft=X*Gt/S*C;tt.projectionMatrix.makePerspective(Y,pt,ct,ft,C,S),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert()}function it(tt,lt){lt===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(lt.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(s===null)return;M.near=I.near=P.near=tt.near,M.far=I.far=P.far=tt.far,(E!==M.near||H!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),E=M.near,H=M.far);let lt=tt.parent,vt=M.cameras;it(M,lt);for(let Ut=0;Ut<vt.length;Ut++)it(vt[Ut],lt);vt.length===2?at(M,P,I):M.projectionMatrix.copy(P.projectionMatrix),K(tt,M,lt)};function K(tt,lt,vt){vt===null?tt.matrix.copy(lt.matrixWorld):(tt.matrix.copy(vt.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(lt.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(lt.projectionMatrix),tt.projectionMatrixInverse.copy(lt.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=ao*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(tt){l=tt,f!==null&&(f.fixedFoveation=tt),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=tt)};let ut=null;function mt(tt,lt){if(h=lt.getViewerPose(c||a),g=lt,h!==null){let vt=h.views;d!==null&&(t.setRenderTargetFramebuffer(p,d.framebuffer),t.setRenderTarget(p));let Ut=!1;vt.length!==M.cameras.length&&(M.cameras.length=0,Ut=!0);for(let At=0;At<vt.length;At++){let Zt=vt[At],$t=null;if(d!==null)$t=d.getViewport(Zt);else{let le=u.getViewSubImage(f,Zt);$t=le.viewport,At===0&&(t.setRenderTargetTextures(p,le.colorTexture,f.ignoreDepthValues?void 0:le.depthStencilTexture),t.setRenderTarget(p))}let Gt=F[At];Gt===void 0&&(Gt=new fn,Gt.layers.enable(At),Gt.viewport=new an,F[At]=Gt),Gt.matrix.fromArray(Zt.transform.matrix),Gt.matrix.decompose(Gt.position,Gt.quaternion,Gt.scale),Gt.projectionMatrix.fromArray(Zt.projectionMatrix),Gt.projectionMatrixInverse.copy(Gt.projectionMatrix).invert(),Gt.viewport.set($t.x,$t.y,$t.width,$t.height),At===0&&(M.matrix.copy(Gt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),Ut===!0&&M.cameras.push(Gt)}}for(let vt=0;vt<b.length;vt++){let Ut=v[vt],At=b[vt];Ut!==null&&At!==void 0&&At.update(Ut,lt,c||a)}ut&&ut(tt,lt),lt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:lt}),g=null}let Et=new Mf;Et.setAnimationLoop(mt),this.setAnimationLoop=function(tt){ut=tt},this.dispose=function(){}}};function v_(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,yf(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,b,v,w){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,w)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,b,v):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===xn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===xn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let b=t.get(p).envMap;if(b&&(m.envMap.value=b,m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let v=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*v,e(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=v*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),t.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===xn&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let b=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function y_(i,t,e,n){let s={},r={},a=[],o=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(b,v){let w=v.program;n.uniformBlockBinding(b,w)}function c(b,v){let w=s[b.id];w===void 0&&(g(b),w=h(b),s[b.id]=w,b.addEventListener("dispose",m));let U=v.program;n.updateUBOMapping(b,U);let P=t.render.frame;r[b.id]!==P&&(f(b),r[b.id]=P)}function h(b){let v=u();b.__bindingPointIndex=v;let w=i.createBuffer(),U=b.__size,P=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,U,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,w),w}function u(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){let v=s[b.id],w=b.uniforms,U=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let P=0,I=w.length;P<I;P++){let F=Array.isArray(w[P])?w[P]:[w[P]];for(let M=0,E=F.length;M<E;M++){let H=F[M];if(d(H,P,M,U)===!0){let J=H.__offset,ot=Array.isArray(H.value)?H.value:[H.value],B=0;for(let V=0;V<ot.length;V++){let et=ot[V],at=x(et);typeof et=="number"||typeof et=="boolean"?(H.__data[0]=et,i.bufferSubData(i.UNIFORM_BUFFER,J+B,H.__data)):et.isMatrix3?(H.__data[0]=et.elements[0],H.__data[1]=et.elements[1],H.__data[2]=et.elements[2],H.__data[3]=0,H.__data[4]=et.elements[3],H.__data[5]=et.elements[4],H.__data[6]=et.elements[5],H.__data[7]=0,H.__data[8]=et.elements[6],H.__data[9]=et.elements[7],H.__data[10]=et.elements[8],H.__data[11]=0):(et.toArray(H.__data,B),B+=at.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,J,H.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(b,v,w,U){let P=b.value,I=v+"_"+w;if(U[I]===void 0)return typeof P=="number"||typeof P=="boolean"?U[I]=P:U[I]=P.clone(),!0;{let F=U[I];if(typeof P=="number"||typeof P=="boolean"){if(F!==P)return U[I]=P,!0}else if(F.equals(P)===!1)return F.copy(P),!0}return!1}function g(b){let v=b.uniforms,w=0,U=16;for(let I=0,F=v.length;I<F;I++){let M=Array.isArray(v[I])?v[I]:[v[I]];for(let E=0,H=M.length;E<H;E++){let J=M[E],ot=Array.isArray(J.value)?J.value:[J.value];for(let B=0,V=ot.length;B<V;B++){let et=ot[B],at=x(et),it=w%U;it!==0&&U-it<at.boundary&&(w+=U-it),J.__data=new Float32Array(at.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=w,w+=at.storage}}}let P=w%U;return P>0&&(w+=U-P),b.__size=w,b.__cache={},this}function x(b){let v={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(v.boundary=4,v.storage=4):b.isVector2?(v.boundary=8,v.storage=8):b.isVector3||b.isColor?(v.boundary=16,v.storage=12):b.isVector4?(v.boundary=16,v.storage=16):b.isMatrix3?(v.boundary=48,v.storage=48):b.isMatrix4?(v.boundary=64,v.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),v}function m(b){let v=b.target;v.removeEventListener("dispose",m);let w=a.indexOf(v.__bindingPointIndex);a.splice(w,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function p(){for(let b in s)i.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}var ta=class{constructor(t={}){let{canvas:e=Cp(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=a;let d=new Uint32Array(4),g=new Int32Array(4),x=null,m=null,p=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ze,this._useLegacyLights=!1,this.toneMapping=Gi,this.toneMappingExposure=1;let v=this,w=!1,U=0,P=0,I=null,F=-1,M=null,E=new an,H=new an,J=null,ot=new Dt(0),B=0,V=e.width,et=e.height,at=1,it=null,K=null,ut=new an(0,0,V,et),mt=new an(0,0,V,et),Et=!1,tt=new jr,lt=!1,vt=!1,Ut=null,At=new fe,Zt=new bt,$t=new D,Gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function le(){return I===null?at:1}let X=n;function ln(T,k){for(let q=0;q<T.length;q++){let Z=T[q],W=e.getContext(Z,k);if(W!==null)return W}return null}try{let T={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Oc}`),e.addEventListener("webglcontextlost",ht,!1),e.addEventListener("webglcontextrestored",z,!1),e.addEventListener("webglcontextcreationerror",xt,!1),X===null){let k=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&k.shift(),X=ln(k,T),X===null)throw ln(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext!="undefined"&&X instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),X.getShaderPrecisionFormat===void 0&&(X.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Ot,qt,Pt,Re,te,C,S,Y,pt,ct,ft,Lt,yt,Tt,Ht,Kt,rt,ce,ee,Wt,Ft,Rt,Qt,ge;function Ce(){Ot=new Bg(X),qt=new Dg(X,Ot,t),Ot.init(qt),Rt=new x_(X,Ot,qt),Pt=new m_(X,Ot,qt),Re=new Vg(X),te=new i_,C=new g_(X,Ot,Pt,te,qt,Rt,Re),S=new Ng(v),Y=new zg(v),pt=new $p(X,qt),Qt=new Lg(X,Ot,pt,qt),ct=new kg(X,pt,Re,Qt),ft=new qg(X,ct,pt,Re),ee=new Xg(X,qt,C),Kt=new Ug(te),Lt=new n_(v,S,Y,Ot,qt,Qt,Kt),yt=new v_(v,te),Tt=new r_,Ht=new u_(Ot,qt),ce=new Pg(v,S,Y,Pt,ft,f,l),rt=new p_(v,ft,qt),ge=new y_(X,Re,qt,Pt),Wt=new Ig(X,Ot,Re,qt),Ft=new Hg(X,Ot,Re,qt),Re.programs=Lt.programs,v.capabilities=qt,v.extensions=Ot,v.properties=te,v.renderLists=Tt,v.shadowMap=rt,v.state=Pt,v.info=Re}Ce();let ne=new fc(v,X);this.xr=ne,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){let T=Ot.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=Ot.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return at},this.setPixelRatio=function(T){T!==void 0&&(at=T,this.setSize(V,et,!1))},this.getSize=function(T){return T.set(V,et)},this.setSize=function(T,k,q=!0){if(ne.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=T,et=k,e.width=Math.floor(T*at),e.height=Math.floor(k*at),q===!0&&(e.style.width=T+"px",e.style.height=k+"px"),this.setViewport(0,0,T,k)},this.getDrawingBufferSize=function(T){return T.set(V*at,et*at).floor()},this.setDrawingBufferSize=function(T,k,q){V=T,et=k,at=q,e.width=Math.floor(T*q),e.height=Math.floor(k*q),this.setViewport(0,0,T,k)},this.getCurrentViewport=function(T){return T.copy(E)},this.getViewport=function(T){return T.copy(ut)},this.setViewport=function(T,k,q,Z){T.isVector4?ut.set(T.x,T.y,T.z,T.w):ut.set(T,k,q,Z),Pt.viewport(E.copy(ut).multiplyScalar(at).floor())},this.getScissor=function(T){return T.copy(mt)},this.setScissor=function(T,k,q,Z){T.isVector4?mt.set(T.x,T.y,T.z,T.w):mt.set(T,k,q,Z),Pt.scissor(H.copy(mt).multiplyScalar(at).floor())},this.getScissorTest=function(){return Et},this.setScissorTest=function(T){Pt.setScissorTest(Et=T)},this.setOpaqueSort=function(T){it=T},this.setTransparentSort=function(T){K=T},this.getClearColor=function(T){return T.copy(ce.getClearColor())},this.setClearColor=function(){ce.setClearColor.apply(ce,arguments)},this.getClearAlpha=function(){return ce.getClearAlpha()},this.setClearAlpha=function(){ce.setClearAlpha.apply(ce,arguments)},this.clear=function(T=!0,k=!0,q=!0){let Z=0;if(T){let W=!1;if(I!==null){let Mt=I.texture.format;W=Mt===df||Mt===ff||Mt===uf}if(W){let Mt=I.texture.type,It=Mt===ni||Mt===ki||Mt===kc||Mt===us||Mt===cf||Mt===hf,Ct=ce.getClearColor(),kt=ce.getClearAlpha(),Yt=Ct.r,Vt=Ct.g,Jt=Ct.b;It?(d[0]=Yt,d[1]=Vt,d[2]=Jt,d[3]=kt,X.clearBufferuiv(X.COLOR,0,d)):(g[0]=Yt,g[1]=Vt,g[2]=Jt,g[3]=kt,X.clearBufferiv(X.COLOR,0,g))}else Z|=X.COLOR_BUFFER_BIT}k&&(Z|=X.DEPTH_BUFFER_BIT),q&&(Z|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ht,!1),e.removeEventListener("webglcontextrestored",z,!1),e.removeEventListener("webglcontextcreationerror",xt,!1),Tt.dispose(),Ht.dispose(),te.dispose(),S.dispose(),Y.dispose(),ft.dispose(),Qt.dispose(),ge.dispose(),Lt.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",nn),ne.removeEventListener("sessionend",ye),Ut&&(Ut.dispose(),Ut=null),sn.stop()};function ht(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function z(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let T=Re.autoReset,k=rt.enabled,q=rt.autoUpdate,Z=rt.needsUpdate,W=rt.type;Ce(),Re.autoReset=T,rt.enabled=k,rt.autoUpdate=q,rt.needsUpdate=Z,rt.type=W}function xt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function _t(T){let k=T.target;k.removeEventListener("dispose",_t),zt(k)}function zt(T){Bt(T),te.remove(T)}function Bt(T){let k=te.get(T).programs;k!==void 0&&(k.forEach(function(q){Lt.releaseProgram(q)}),T.isShaderMaterial&&Lt.releaseShaderCache(T))}this.renderBufferDirect=function(T,k,q,Z,W,Mt){k===null&&(k=Gt);let It=W.isMesh&&W.matrixWorld.determinant()<0,Ct=Us(T,k,q,Z,W);Pt.setMaterial(Z,It);let kt=q.index,Yt=1;if(Z.wireframe===!0){if(kt=ct.getWireframeAttribute(q),kt===void 0)return;Yt=2}let Vt=q.drawRange,Jt=q.attributes.position,Se=Vt.start*Yt,Je=(Vt.start+Vt.count)*Yt;Mt!==null&&(Se=Math.max(Se,Mt.start*Yt),Je=Math.min(Je,(Mt.start+Mt.count)*Yt)),kt!==null?(Se=Math.max(Se,0),Je=Math.min(Je,kt.count)):Jt!=null&&(Se=Math.max(Se,0),Je=Math.min(Je,Jt.count));let He=Je-Se;if(He<0||He===1/0)return;Qt.setup(W,Z,Ct,q,kt);let Bn,Te=Wt;if(kt!==null&&(Bn=pt.get(kt),Te=Ft,Te.setIndex(Bn)),W.isMesh)Z.wireframe===!0?(Pt.setLineWidth(Z.wireframeLinewidth*le()),Te.setMode(X.LINES)):Te.setMode(X.TRIANGLES);else if(W.isLine){let ie=Z.linewidth;ie===void 0&&(ie=1),Pt.setLineWidth(ie*le()),W.isLineSegments?Te.setMode(X.LINES):W.isLineLoop?Te.setMode(X.LINE_LOOP):Te.setMode(X.LINE_STRIP)}else W.isPoints?Te.setMode(X.POINTS):W.isSprite&&Te.setMode(X.TRIANGLES);if(W.isBatchedMesh)Te.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else if(W.isInstancedMesh)Te.renderInstances(Se,He,W.count);else if(q.isInstancedBufferGeometry){let ie=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Di=Math.min(q.instanceCount,ie);Te.renderInstances(Se,He,Di)}else Te.render(Se,He)};function _e(T,k,q){T.transparent===!0&&T.side===wn&&T.forceSinglePass===!1?(T.side=xn,T.needsUpdate=!0,di(T,k,q),T.side=Xi,T.needsUpdate=!0,di(T,k,q),T.side=wn):di(T,k,q)}this.compile=function(T,k,q=null){q===null&&(q=T),m=Ht.get(q),m.init(),b.push(m),q.traverseVisible(function(W){W.isLight&&W.layers.test(k.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),T!==q&&T.traverseVisible(function(W){W.isLight&&W.layers.test(k.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),m.setupLights(v._useLegacyLights);let Z=new Set;return T.traverse(function(W){let Mt=W.material;if(Mt)if(Array.isArray(Mt))for(let It=0;It<Mt.length;It++){let Ct=Mt[It];_e(Ct,q,W),Z.add(Ct)}else _e(Mt,q,W),Z.add(Mt)}),b.pop(),m=null,Z},this.compileAsync=function(T,k,q=null){let Z=this.compile(T,k,q);return new Promise(W=>{function Mt(){if(Z.forEach(function(It){te.get(It).currentProgram.isReady()&&Z.delete(It)}),Z.size===0){W(T);return}setTimeout(Mt,10)}Ot.get("KHR_parallel_shader_compile")!==null?Mt():setTimeout(Mt,10)})};let ve=null;function ke(T){ve&&ve(T)}function nn(){sn.stop()}function ye(){sn.start()}let sn=new Mf;sn.setAnimationLoop(ke),typeof self!="undefined"&&sn.setContext(self),this.setAnimationLoop=function(T){ve=T,ne.setAnimationLoop(T),T===null?sn.stop():sn.start()},ne.addEventListener("sessionstart",nn),ne.addEventListener("sessionend",ye),this.render=function(T,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(k),k=ne.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,k,I),m=Ht.get(T,b.length),m.init(),b.push(m),At.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),tt.setFromProjectionMatrix(At),vt=this.localClippingEnabled,lt=Kt.init(this.clippingPlanes,vt),x=Tt.get(T,p.length),x.init(),p.push(x),zn(T,k,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(it,K),this.info.render.frame++,lt===!0&&Kt.beginShadows();let q=m.state.shadowsArray;if(rt.render(q,T,k),lt===!0&&Kt.endShadows(),this.info.autoReset===!0&&this.info.reset(),ce.render(x,T),m.setupLights(v._useLegacyLights),k.isArrayCamera){let Z=k.cameras;for(let W=0,Mt=Z.length;W<Mt;W++){let It=Z[W];Or(x,T,It,It.viewport)}}else Or(x,T,k);I!==null&&(C.updateMultisampleRenderTarget(I),C.updateRenderTargetMipmap(I)),T.isScene===!0&&T.onAfterRender(v,T,k),Qt.resetDefaultState(),F=-1,M=null,b.pop(),b.length>0?m=b[b.length-1]:m=null,p.pop(),p.length>0?x=p[p.length-1]:x=null};function zn(T,k,q,Z){if(T.visible===!1)return;if(T.layers.test(k.layers)){if(T.isGroup)q=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(k);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||tt.intersectsSprite(T)){Z&&$t.setFromMatrixPosition(T.matrixWorld).applyMatrix4(At);let It=ft.update(T),Ct=T.material;Ct.visible&&x.push(T,It,Ct,q,$t.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||tt.intersectsObject(T))){let It=ft.update(T),Ct=T.material;if(Z&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),$t.copy(T.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),$t.copy(It.boundingSphere.center)),$t.applyMatrix4(T.matrixWorld).applyMatrix4(At)),Array.isArray(Ct)){let kt=It.groups;for(let Yt=0,Vt=kt.length;Yt<Vt;Yt++){let Jt=kt[Yt],Se=Ct[Jt.materialIndex];Se&&Se.visible&&x.push(T,It,Se,q,$t.z,Jt)}}else Ct.visible&&x.push(T,It,Ct,q,$t.z,null)}}let Mt=T.children;for(let It=0,Ct=Mt.length;It<Ct;It++)zn(Mt[It],k,q,Z)}function Or(T,k,q,Z){let W=T.opaque,Mt=T.transmissive,It=T.transparent;m.setupLightsView(q),lt===!0&&Kt.setGlobalState(v.clippingPlanes,q),Mt.length>0&&zr(W,Mt,k,q),Z&&Pt.viewport(E.copy(Z)),W.length>0&&ts(W,k,q),Mt.length>0&&ts(Mt,k,q),It.length>0&&ts(It,k,q),Pt.buffers.depth.setTest(!0),Pt.buffers.depth.setMask(!0),Pt.buffers.color.setMask(!0),Pt.setPolygonOffset(!1)}function zr(T,k,q,Z){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;let Mt=qt.isWebGL2;Ut===null&&(Ut=new Dn(1,1,{generateMipmaps:!0,type:Ot.has("EXT_color_buffer_half_float")?ms:ni,minFilter:Qr,samples:Mt?4:0})),v.getDrawingBufferSize(Zt),Mt?Ut.setSize(Zt.x,Zt.y):Ut.setSize(Kl(Zt.x),Kl(Zt.y));let It=v.getRenderTarget();v.setRenderTarget(Ut),v.getClearColor(ot),B=v.getClearAlpha(),B<1&&v.setClearColor(16777215,.5),v.clear();let Ct=v.toneMapping;v.toneMapping=Gi,ts(T,q,Z),C.updateMultisampleRenderTarget(Ut),C.updateRenderTargetMipmap(Ut);let kt=!1;for(let Yt=0,Vt=k.length;Yt<Vt;Yt++){let Jt=k[Yt],Se=Jt.object,Je=Jt.geometry,He=Jt.material,Bn=Jt.group;if(He.side===wn&&Se.layers.test(Z.layers)){let Te=He.side;He.side=xn,He.needsUpdate=!0,Is(Se,q,Z,Je,He,Bn),He.side=Te,He.needsUpdate=!0,kt=!0}}kt===!0&&(C.updateMultisampleRenderTarget(Ut),C.updateRenderTargetMipmap(Ut)),v.setRenderTarget(It),v.setClearColor(ot,B),v.toneMapping=Ct}function ts(T,k,q){let Z=k.isScene===!0?k.overrideMaterial:null;for(let W=0,Mt=T.length;W<Mt;W++){let It=T[W],Ct=It.object,kt=It.geometry,Yt=Z===null?It.material:Z,Vt=It.group;Ct.layers.test(q.layers)&&Is(Ct,k,q,kt,Yt,Vt)}}function Is(T,k,q,Z,W,Mt){T.onBeforeRender(v,k,q,Z,W,Mt),T.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),W.onBeforeRender(v,k,q,Z,T,Mt),W.transparent===!0&&W.side===wn&&W.forceSinglePass===!1?(W.side=xn,W.needsUpdate=!0,v.renderBufferDirect(q,k,Z,W,T,Mt),W.side=Xi,W.needsUpdate=!0,v.renderBufferDirect(q,k,Z,W,T,Mt),W.side=wn):v.renderBufferDirect(q,k,Z,W,T,Mt),T.onAfterRender(v,k,q,Z,W,Mt)}function di(T,k,q){k.isScene!==!0&&(k=Gt);let Z=te.get(T),W=m.state.lights,Mt=m.state.shadowsArray,It=W.state.version,Ct=Lt.getParameters(T,W.state,Mt,k,q),kt=Lt.getProgramCacheKey(Ct),Yt=Z.programs;Z.environment=T.isMeshStandardMaterial?k.environment:null,Z.fog=k.fog,Z.envMap=(T.isMeshStandardMaterial?Y:S).get(T.envMap||Z.environment),Yt===void 0&&(T.addEventListener("dispose",_t),Yt=new Map,Z.programs=Yt);let Vt=Yt.get(kt);if(Vt!==void 0){if(Z.currentProgram===Vt&&Z.lightsStateVersion===It)return Ds(T,Ct),Vt}else Ct.uniforms=Lt.getUniforms(T),T.onBuild(q,Ct,v),T.onBeforeCompile(Ct,v),Vt=Lt.acquireProgram(Ct,kt),Yt.set(kt,Vt),Z.uniforms=Ct.uniforms;let Jt=Z.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Jt.clippingPlanes=Kt.uniform),Ds(T,Ct),Z.needsLights=_a(T),Z.lightsStateVersion=It,Z.needsLights&&(Jt.ambientLightColor.value=W.state.ambient,Jt.lightProbe.value=W.state.probe,Jt.directionalLights.value=W.state.directional,Jt.directionalLightShadows.value=W.state.directionalShadow,Jt.spotLights.value=W.state.spot,Jt.spotLightShadows.value=W.state.spotShadow,Jt.rectAreaLights.value=W.state.rectArea,Jt.ltc_1.value=W.state.rectAreaLTC1,Jt.ltc_2.value=W.state.rectAreaLTC2,Jt.pointLights.value=W.state.point,Jt.pointLightShadows.value=W.state.pointShadow,Jt.hemisphereLights.value=W.state.hemi,Jt.directionalShadowMap.value=W.state.directionalShadowMap,Jt.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Jt.spotShadowMap.value=W.state.spotShadowMap,Jt.spotLightMatrix.value=W.state.spotLightMatrix,Jt.spotLightMap.value=W.state.spotLightMap,Jt.pointShadowMap.value=W.state.pointShadowMap,Jt.pointShadowMatrix.value=W.state.pointShadowMatrix),Z.currentProgram=Vt,Z.uniformsList=null,Vt}function es(T){if(T.uniformsList===null){let k=T.currentProgram.getUniforms();T.uniformsList=cr.seqWithValue(k.seq,T.uniforms)}return T.uniformsList}function Ds(T,k){let q=te.get(T);q.outputColorSpace=k.outputColorSpace,q.batching=k.batching,q.instancing=k.instancing,q.instancingColor=k.instancingColor,q.skinning=k.skinning,q.morphTargets=k.morphTargets,q.morphNormals=k.morphNormals,q.morphColors=k.morphColors,q.morphTargetsCount=k.morphTargetsCount,q.numClippingPlanes=k.numClippingPlanes,q.numIntersection=k.numClipIntersection,q.vertexAlphas=k.vertexAlphas,q.vertexTangents=k.vertexTangents,q.toneMapping=k.toneMapping}function Us(T,k,q,Z,W){k.isScene!==!0&&(k=Gt),C.resetTextureUnits();let Mt=k.fog,It=Z.isMeshStandardMaterial?k.environment:null,Ct=I===null?v.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Ei,kt=(Z.isMeshStandardMaterial?Y:S).get(Z.envMap||It),Yt=Z.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Vt=!!q.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Jt=!!q.morphAttributes.position,Se=!!q.morphAttributes.normal,Je=!!q.morphAttributes.color,He=Gi;Z.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(He=v.toneMapping);let Bn=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Te=Bn!==void 0?Bn.length:0,ie=te.get(Z),Di=m.state.lights;if(lt===!0&&(vt===!0||T!==M)){let _=T===M&&Z.id===F;Kt.setState(Z,T,_)}let Pe=!1;Z.version===ie.__version?(ie.needsLights&&ie.lightsStateVersion!==Di.state.version||ie.outputColorSpace!==Ct||W.isBatchedMesh&&ie.batching===!1||!W.isBatchedMesh&&ie.batching===!0||W.isInstancedMesh&&ie.instancing===!1||!W.isInstancedMesh&&ie.instancing===!0||W.isSkinnedMesh&&ie.skinning===!1||!W.isSkinnedMesh&&ie.skinning===!0||W.isInstancedMesh&&ie.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&ie.instancingColor===!1&&W.instanceColor!==null||ie.envMap!==kt||Z.fog===!0&&ie.fog!==Mt||ie.numClippingPlanes!==void 0&&(ie.numClippingPlanes!==Kt.numPlanes||ie.numIntersection!==Kt.numIntersection)||ie.vertexAlphas!==Yt||ie.vertexTangents!==Vt||ie.morphTargets!==Jt||ie.morphNormals!==Se||ie.morphColors!==Je||ie.toneMapping!==He||qt.isWebGL2===!0&&ie.morphTargetsCount!==Te)&&(Pe=!0):(Pe=!0,ie.__version=Z.version);let ti=ie.currentProgram;Pe===!0&&(ti=di(Z,k,W));let va=!1,ns=!1,Ns=!1,$e=ti.getUniforms(),pi=ie.uniforms;if(Pt.useProgram(ti.program)&&(va=!0,ns=!0,Ns=!0),Z.id!==F&&(F=Z.id,ns=!0),va||M!==T){$e.setValue(X,"projectionMatrix",T.projectionMatrix),$e.setValue(X,"viewMatrix",T.matrixWorldInverse);let _=$e.map.cameraPosition;_!==void 0&&_.setValue(X,$t.setFromMatrixPosition(T.matrixWorld)),qt.logarithmicDepthBuffer&&$e.setValue(X,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&$e.setValue(X,"isOrthographic",T.isOrthographicCamera===!0),M!==T&&(M=T,ns=!0,Ns=!0)}if(W.isSkinnedMesh){$e.setOptional(X,W,"bindMatrix"),$e.setOptional(X,W,"bindMatrixInverse");let _=W.skeleton;_&&(qt.floatVertexTextures?(_.boneTexture===null&&_.computeBoneTexture(),$e.setValue(X,"boneTexture",_.boneTexture,C)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}W.isBatchedMesh&&($e.setOptional(X,W,"batchingTexture"),$e.setValue(X,"batchingTexture",W._matricesTexture,C));let Fs=q.morphAttributes;if((Fs.position!==void 0||Fs.normal!==void 0||Fs.color!==void 0&&qt.isWebGL2===!0)&&ee.update(W,q,ti),(ns||ie.receiveShadow!==W.receiveShadow)&&(ie.receiveShadow=W.receiveShadow,$e.setValue(X,"receiveShadow",W.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(pi.envMap.value=kt,pi.flipEnvMap.value=kt.isCubeTexture&&kt.isRenderTargetTexture===!1?-1:1),ns&&($e.setValue(X,"toneMappingExposure",v.toneMappingExposure),ie.needsLights&&xa(pi,Ns),Mt&&Z.fog===!0&&yt.refreshFogUniforms(pi,Mt),yt.refreshMaterialUniforms(pi,Z,at,et,Ut),cr.upload(X,es(ie),pi,C)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(cr.upload(X,es(ie),pi,C),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&$e.setValue(X,"center",W.center),$e.setValue(X,"modelViewMatrix",W.modelViewMatrix),$e.setValue(X,"normalMatrix",W.normalMatrix),$e.setValue(X,"modelMatrix",W.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){let _=Z.uniformsGroups;for(let A=0,R=_.length;A<R;A++)if(qt.isWebGL2){let L=_[A];ge.update(L,ti),ge.bind(L,ti)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ti}function xa(T,k){T.ambientLightColor.needsUpdate=k,T.lightProbe.needsUpdate=k,T.directionalLights.needsUpdate=k,T.directionalLightShadows.needsUpdate=k,T.pointLights.needsUpdate=k,T.pointLightShadows.needsUpdate=k,T.spotLights.needsUpdate=k,T.spotLightShadows.needsUpdate=k,T.rectAreaLights.needsUpdate=k,T.hemisphereLights.needsUpdate=k}function _a(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(T,k,q){te.get(T.texture).__webglTexture=k,te.get(T.depthTexture).__webglTexture=q;let Z=te.get(T);Z.__hasExternalTextures=!0,Z.__hasExternalTextures&&(Z.__autoAllocateDepthBuffer=q===void 0,Z.__autoAllocateDepthBuffer||Ot.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,k){let q=te.get(T);q.__webglFramebuffer=k,q.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(T,k=0,q=0){I=T,U=k,P=q;let Z=!0,W=null,Mt=!1,It=!1;if(T){let kt=te.get(T);kt.__useDefaultFramebuffer!==void 0?(Pt.bindFramebuffer(X.FRAMEBUFFER,null),Z=!1):kt.__webglFramebuffer===void 0?C.setupRenderTarget(T):kt.__hasExternalTextures&&C.rebindTextures(T,te.get(T.texture).__webglTexture,te.get(T.depthTexture).__webglTexture);let Yt=T.texture;(Yt.isData3DTexture||Yt.isDataArrayTexture||Yt.isCompressedArrayTexture)&&(It=!0);let Vt=te.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Vt[k])?W=Vt[k][q]:W=Vt[k],Mt=!0):qt.isWebGL2&&T.samples>0&&C.useMultisampledRTT(T)===!1?W=te.get(T).__webglMultisampledFramebuffer:Array.isArray(Vt)?W=Vt[q]:W=Vt,E.copy(T.viewport),H.copy(T.scissor),J=T.scissorTest}else E.copy(ut).multiplyScalar(at).floor(),H.copy(mt).multiplyScalar(at).floor(),J=Et;if(Pt.bindFramebuffer(X.FRAMEBUFFER,W)&&qt.drawBuffers&&Z&&Pt.drawBuffers(T,W),Pt.viewport(E),Pt.scissor(H),Pt.setScissorTest(J),Mt){let kt=te.get(T.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+k,kt.__webglTexture,q)}else if(It){let kt=te.get(T.texture),Yt=k||0;X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,kt.__webglTexture,q||0,Yt)}F=-1},this.readRenderTargetPixels=function(T,k,q,Z,W,Mt,It){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=te.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&It!==void 0&&(Ct=Ct[It]),Ct){Pt.bindFramebuffer(X.FRAMEBUFFER,Ct);try{let kt=T.texture,Yt=kt.format,Vt=kt.type;if(Yt!==Yn&&Rt.convert(Yt)!==X.getParameter(X.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Jt=Vt===ms&&(Ot.has("EXT_color_buffer_half_float")||qt.isWebGL2&&Ot.has("EXT_color_buffer_float"));if(Vt!==ni&&Rt.convert(Vt)!==X.getParameter(X.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Vt===Hi&&(qt.isWebGL2||Ot.has("OES_texture_float")||Ot.has("WEBGL_color_buffer_float")))&&!Jt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=T.width-Z&&q>=0&&q<=T.height-W&&X.readPixels(k,q,Z,W,Rt.convert(Yt),Rt.convert(Vt),Mt)}finally{let kt=I!==null?te.get(I).__webglFramebuffer:null;Pt.bindFramebuffer(X.FRAMEBUFFER,kt)}}},this.copyFramebufferToTexture=function(T,k,q=0){let Z=Math.pow(2,-q),W=Math.floor(k.image.width*Z),Mt=Math.floor(k.image.height*Z);C.setTexture2D(k,0),X.copyTexSubImage2D(X.TEXTURE_2D,q,0,0,T.x,T.y,W,Mt),Pt.unbindTexture()},this.copyTextureToTexture=function(T,k,q,Z=0){let W=k.image.width,Mt=k.image.height,It=Rt.convert(q.format),Ct=Rt.convert(q.type);C.setTexture2D(q,0),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,q.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,q.unpackAlignment),k.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Z,T.x,T.y,W,Mt,It,Ct,k.image.data):k.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Z,T.x,T.y,k.mipmaps[0].width,k.mipmaps[0].height,It,k.mipmaps[0].data):X.texSubImage2D(X.TEXTURE_2D,Z,T.x,T.y,It,Ct,k.image),Z===0&&q.generateMipmaps&&X.generateMipmap(X.TEXTURE_2D),Pt.unbindTexture()},this.copyTextureToTexture3D=function(T,k,q,Z,W=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Mt=T.max.x-T.min.x+1,It=T.max.y-T.min.y+1,Ct=T.max.z-T.min.z+1,kt=Rt.convert(Z.format),Yt=Rt.convert(Z.type),Vt;if(Z.isData3DTexture)C.setTexture3D(Z,0),Vt=X.TEXTURE_3D;else if(Z.isDataArrayTexture||Z.isCompressedArrayTexture)C.setTexture2DArray(Z,0),Vt=X.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,Z.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,Z.unpackAlignment);let Jt=X.getParameter(X.UNPACK_ROW_LENGTH),Se=X.getParameter(X.UNPACK_IMAGE_HEIGHT),Je=X.getParameter(X.UNPACK_SKIP_PIXELS),He=X.getParameter(X.UNPACK_SKIP_ROWS),Bn=X.getParameter(X.UNPACK_SKIP_IMAGES),Te=q.isCompressedTexture?q.mipmaps[W]:q.image;X.pixelStorei(X.UNPACK_ROW_LENGTH,Te.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Te.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,T.min.x),X.pixelStorei(X.UNPACK_SKIP_ROWS,T.min.y),X.pixelStorei(X.UNPACK_SKIP_IMAGES,T.min.z),q.isDataTexture||q.isData3DTexture?X.texSubImage3D(Vt,W,k.x,k.y,k.z,Mt,It,Ct,kt,Yt,Te.data):q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),X.compressedTexSubImage3D(Vt,W,k.x,k.y,k.z,Mt,It,Ct,kt,Te.data)):X.texSubImage3D(Vt,W,k.x,k.y,k.z,Mt,It,Ct,kt,Yt,Te),X.pixelStorei(X.UNPACK_ROW_LENGTH,Jt),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Se),X.pixelStorei(X.UNPACK_SKIP_PIXELS,Je),X.pixelStorei(X.UNPACK_SKIP_ROWS,He),X.pixelStorei(X.UNPACK_SKIP_IMAGES,Bn),W===0&&Z.generateMipmaps&&X.generateMipmap(Vt),Pt.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?C.setTextureCube(T,0):T.isData3DTexture?C.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?C.setTexture2DArray(T,0):C.setTexture2D(T,0),Pt.unbindTexture()},this.resetState=function(){U=0,P=0,I=null,Pt.reset(),Qt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===Hc?"display-p3":"srgb",e.unpackColorSpace=be.workingColorSpace===Do?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ze?ds:mf}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===ds?ze:Ei}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},dc=class extends ta{};dc.prototype.isWebGL1Renderer=!0;var yo=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Dt(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var gs=class extends Ke{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}},pc=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Jl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Wi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},bn=new D,Mo=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)bn.fromBufferAttribute(this,e),bn.applyMatrix4(t),this.setXYZ(e,bn.x,bn.y,bn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)bn.fromBufferAttribute(this,e),bn.applyNormalMatrix(t),this.setXYZ(e,bn.x,bn.y,bn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)bn.fromBufferAttribute(this,e),bn.transformDirection(t),this.setXYZ(e,bn.x,bn.y,bn.z);return this}setX(t,e){return this.normalized&&(e=Ee(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=bi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=bi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=bi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=bi(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array),s=Ee(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array),s=Ee(s,this.array),r=Ee(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new pe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},xs=class extends Ti{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Dt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},tr,Gr=new D,er=new D,nr=new D,ir=new bt,Wr=new bt,Af=new fe,Xa=new D,Xr=new D,qa=new D,$u=new bt,Bl=new bt,Ku=new bt,mr=class extends Ke{constructor(t=new xs){if(super(),this.isSprite=!0,this.type="Sprite",tr===void 0){tr=new Me;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new pc(e,5);tr.setIndex([0,1,2,0,2,3]),tr.setAttribute("position",new Mo(n,3,0,!1)),tr.setAttribute("uv",new Mo(n,2,3,!1))}this.geometry=tr,this.material=t,this.center=new bt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),er.setFromMatrixScale(this.matrixWorld),Af.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),nr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&er.multiplyScalar(-nr.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Ya(Xa.set(-.5,-.5,0),nr,a,er,s,r),Ya(Xr.set(.5,-.5,0),nr,a,er,s,r),Ya(qa.set(.5,.5,0),nr,a,er,s,r),$u.set(0,0),Bl.set(1,0),Ku.set(1,1);let o=t.ray.intersectTriangle(Xa,Xr,qa,!1,Gr);if(o===null&&(Ya(Xr.set(-.5,.5,0),nr,a,er,s,r),Bl.set(0,1),o=t.ray.intersectTriangle(Xa,qa,Xr,!1,Gr),o===null))return;let l=t.ray.origin.distanceTo(Gr);l<t.near||l>t.far||e.push({distance:l,point:Gr.clone(),uv:hs.getInterpolation(Gr,Xa,Xr,qa,$u,Bl,Ku,new bt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Ya(i,t,e,n,s,r){ir.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Wr.x=r*ir.x-s*ir.y,Wr.y=s*ir.x+r*ir.y):Wr.copy(ir),i.copy(t),i.x+=Wr.x,i.y+=Wr.y,i.applyMatrix4(Af)}var bo=class extends In{constructor(t=null,e=1,n=1,s,r,a,o,l,c=hn,h=hn,u,f){super(null,a,o,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var So=class extends pe{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},sr=new fe,Qu=new fe,Za=[],ju=new wi,M_=new fe,qr=new oe,Yr=new Yi,gr=class extends oe{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new So(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,M_)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new wi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,sr),ju.copy(t.boundingBox).applyMatrix4(sr),this.boundingBox.union(ju)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Yi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,sr),Yr.copy(t.boundingSphere).applyMatrix4(sr),this.boundingSphere.union(Yr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){let n=this.matrixWorld,s=this.count;if(qr.geometry=this.geometry,qr.material=this.material,qr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Yr.copy(this.boundingSphere),Yr.applyMatrix4(n),t.ray.intersectsSphere(Yr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,sr),Qu.multiplyMatrices(n,sr),qr.matrixWorld=Qu,qr.raycast(t,Za);for(let a=0,o=Za.length;a<o;a++){let l=Za[a];l.instanceId=r,l.object=this,e.push(l)}Za.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new So(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var mc=class extends Ti{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Dt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},tf=new fe,gc=new uo,Ja=new Yi,$a=new D,Ai=class extends Ke{constructor(t=new Me,e=new mc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ja.copy(n.boundingSphere),Ja.applyMatrix4(s),Ja.radius+=r,t.ray.intersectsSphere(Ja)===!1)return;tf.copy(s).invert(),gc.copy(t.ray).applyMatrix4(tf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let g=f,x=d;g<x;g++){let m=c.getX(g);$a.fromBufferAttribute(u,m),ef($a,m,l,s,t,e,this)}}else{let f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let g=f,x=d;g<x;g++)$a.fromBufferAttribute(u,g),ef($a,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function ef(i,t,e,n,s,r,a){let o=gc.distanceSqToPoint(i);if(o<e){let l=new D;gc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,object:a})}}var _s=class extends In{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Jn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],f=n[s+1]-h,d=(a-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new bt:new D);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new D,s=[],r=[],a=[],o=new D,l=new fe;for(let d=0;d<=t;d++){let g=d/t;s[d]=this.getTangentAt(g,new D)}r[0]=new D,a[0]=new D;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(un(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,g))}a[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(un(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Eo=class extends Jn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e){let n=e||new bt,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},xc=class extends Eo{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Gc(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let f=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+u)+(l-o)/u;f*=h,d*=h,s(a,o,f,d)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var Ka=new D,kl=new Gc,Hl=new Gc,Vl=new Gc,vs=class extends Jn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new D){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Ka.subVectors(s[0],s[1]).add(s[0]),c=Ka);let u=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Ka.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ka),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),kl.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,x,m),Hl.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,x,m),Vl.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(kl.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Hl.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Vl.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(kl.calc(l),Hl.calc(l),Vl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new D().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function nf(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function b_(i,t){let e=1-i;return e*e*t}function S_(i,t){return 2*(1-i)*i*t}function E_(i,t){return i*i*t}function $r(i,t,e,n){return b_(i,t)+S_(i,e)+E_(i,n)}function w_(i,t){let e=1-i;return e*e*e*t}function T_(i,t){let e=1-i;return 3*e*e*i*t}function A_(i,t){return 3*(1-i)*i*i*t}function R_(i,t){return i*i*i*t}function Kr(i,t,e,n,s){return w_(i,t)+T_(i,e)+A_(i,n)+R_(i,s)}var _c=class extends Jn{constructor(t=new bt,e=new bt,n=new bt,s=new bt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new bt){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Kr(t,s.x,r.x,a.x,o.x),Kr(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},vc=class extends Jn{constructor(t=new D,e=new D,n=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new D){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Kr(t,s.x,r.x,a.x,o.x),Kr(t,s.y,r.y,a.y,o.y),Kr(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},yc=class extends Jn{constructor(t=new bt,e=new bt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new bt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new bt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Mc=class extends Jn{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},bc=class extends Jn{constructor(t=new bt,e=new bt,n=new bt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new bt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set($r(t,s.x,r.x,a.x),$r(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},wo=class extends Jn{constructor(t=new D,e=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new D){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set($r(t,s.x,r.x,a.x),$r(t,s.y,r.y,a.y),$r(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Sc=class extends Jn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new bt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(nf(o,l.x,c.x,h.x,u.x),nf(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new bt().fromArray(s))}return this}},C_=Object.freeze({__proto__:null,ArcCurve:xc,CatmullRomCurve3:vs,CubicBezierCurve:_c,CubicBezierCurve3:vc,EllipseCurve:Eo,LineCurve:yc,LineCurve3:Mc,QuadraticBezierCurve:bc,QuadraticBezierCurve3:wo,SplineCurve:Sc});var To=class i extends Me{constructor(t=[new bt(0,-.5),new bt(.5,0),new bt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=un(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/e,u=new D,f=new bt,d=new D,g=new D,x=new D,m=0,p=0;for(let b=0;b<=t.length-1;b++)switch(b){case 0:m=t[b+1].x-t[b].x,p=t[b+1].y-t[b].y,d.x=p*1,d.y=-m,d.z=p*0,x.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:m=t[b+1].x-t[b].x,p=t[b+1].y-t[b].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),l.push(d.x,d.y,d.z),x.copy(g)}for(let b=0;b<=e;b++){let v=n+b*h*s,w=Math.sin(v),U=Math.cos(v);for(let P=0;P<=t.length-1;P++){u.x=t[P].x*w,u.y=t[P].y,u.z=t[P].x*U,a.push(u.x,u.y,u.z),f.x=b/e,f.y=P/(t.length-1),o.push(f.x,f.y);let I=l[3*P+0]*w,F=l[3*P+1],M=l[3*P+0]*U;c.push(I,F,M)}}for(let b=0;b<e;b++)for(let v=0;v<t.length-1;v++){let w=v+b*t.length,U=w,P=w+t.length,I=w+t.length+1,F=w+1;r.push(U,P,F),r.push(I,F,P)}this.setIndex(r),this.setAttribute("position",new ae(a,3)),this.setAttribute("uv",new ae(o,2)),this.setAttribute("normal",new ae(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var Ao=class i extends Me{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new D,h=new bt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=n+u/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[f]/t+1)/2,h.y=(a[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ae(a,3)),this.setAttribute("normal",new ae(o,3)),this.setAttribute("uv",new ae(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},tn=class i extends Me{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],g=0,x=[],m=n/2,p=0;b(),a===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new ae(u,3)),this.setAttribute("normal",new ae(f,3)),this.setAttribute("uv",new ae(d,2));function b(){let w=new D,U=new D,P=0,I=(e-t)/n;for(let F=0;F<=r;F++){let M=[],E=F/r,H=E*(e-t)+t;for(let J=0;J<=s;J++){let ot=J/s,B=ot*l+o,V=Math.sin(B),et=Math.cos(B);U.x=H*V,U.y=-E*n+m,U.z=H*et,u.push(U.x,U.y,U.z),w.set(V,I,et).normalize(),f.push(w.x,w.y,w.z),d.push(ot,1-E),M.push(g++)}x.push(M)}for(let F=0;F<s;F++)for(let M=0;M<r;M++){let E=x[M][F],H=x[M+1][F],J=x[M+1][F+1],ot=x[M][F+1];h.push(E,H,ot),h.push(H,J,ot),P+=6}c.addGroup(p,P,0),p+=P}function v(w){let U=g,P=new bt,I=new D,F=0,M=w===!0?t:e,E=w===!0?1:-1;for(let J=1;J<=s;J++)u.push(0,m*E,0),f.push(0,E,0),d.push(.5,.5),g++;let H=g;for(let J=0;J<=s;J++){let B=J/s*l+o,V=Math.cos(B),et=Math.sin(B);I.x=M*et,I.y=m*E,I.z=M*V,u.push(I.x,I.y,I.z),f.push(0,E,0),P.x=V*.5+.5,P.y=et*.5*E+.5,d.push(P.x,P.y),g++}for(let J=0;J<s;J++){let ot=U+J,B=H+J;w===!0?h.push(B,B+1,ot):h.push(B+1,B,ot),F+=3}c.addGroup(p,F,w===!0?1:2),p+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},$n=class i extends tn{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ec=class i extends Me{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new ae(r,3)),this.setAttribute("normal",new ae(r.slice(),3)),this.setAttribute("uv",new ae(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(b){let v=new D,w=new D,U=new D;for(let P=0;P<e.length;P+=3)d(e[P+0],v),d(e[P+1],w),d(e[P+2],U),l(v,w,U,b)}function l(b,v,w,U){let P=U+1,I=[];for(let F=0;F<=P;F++){I[F]=[];let M=b.clone().lerp(w,F/P),E=v.clone().lerp(w,F/P),H=P-F;for(let J=0;J<=H;J++)J===0&&F===P?I[F][J]=M:I[F][J]=M.clone().lerp(E,J/H)}for(let F=0;F<P;F++)for(let M=0;M<2*(P-F)-1;M++){let E=Math.floor(M/2);M%2===0?(f(I[F][E+1]),f(I[F+1][E]),f(I[F][E])):(f(I[F][E+1]),f(I[F+1][E+1]),f(I[F+1][E]))}}function c(b){let v=new D;for(let w=0;w<r.length;w+=3)v.x=r[w+0],v.y=r[w+1],v.z=r[w+2],v.normalize().multiplyScalar(b),r[w+0]=v.x,r[w+1]=v.y,r[w+2]=v.z}function h(){let b=new D;for(let v=0;v<r.length;v+=3){b.x=r[v+0],b.y=r[v+1],b.z=r[v+2];let w=m(b)/2/Math.PI+.5,U=p(b)/Math.PI+.5;a.push(w,1-U)}g(),u()}function u(){for(let b=0;b<a.length;b+=6){let v=a[b+0],w=a[b+2],U=a[b+4],P=Math.max(v,w,U),I=Math.min(v,w,U);P>.9&&I<.1&&(v<.2&&(a[b+0]+=1),w<.2&&(a[b+2]+=1),U<.2&&(a[b+4]+=1))}}function f(b){r.push(b.x,b.y,b.z)}function d(b,v){let w=b*3;v.x=t[w+0],v.y=t[w+1],v.z=t[w+2]}function g(){let b=new D,v=new D,w=new D,U=new D,P=new bt,I=new bt,F=new bt;for(let M=0,E=0;M<r.length;M+=9,E+=6){b.set(r[M+0],r[M+1],r[M+2]),v.set(r[M+3],r[M+4],r[M+5]),w.set(r[M+6],r[M+7],r[M+8]),P.set(a[E+0],a[E+1]),I.set(a[E+2],a[E+3]),F.set(a[E+4],a[E+5]),U.copy(b).add(v).add(w).divideScalar(3);let H=m(U);x(P,E+0,b,H),x(I,E+2,v,H),x(F,E+4,w,H)}}function x(b,v,w,U){U<0&&b.x===1&&(a[v]=b.x-1),w.x===0&&w.z===0&&(a[v]=U/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function p(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var Ro=class i extends Ec{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Co=class i extends Me{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],h=[],u=t,f=(e-t)/s,d=new D,g=new bt;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){let p=r+m/n*a;d.x=u*Math.cos(p),d.y=u*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,h.push(g.x,g.y)}u+=f}for(let x=0;x<s;x++){let m=x*(n+1);for(let p=0;p<n;p++){let b=p+m,v=b,w=b+n+1,U=b+n+2,P=b+1;o.push(v,w,P),o.push(w,U,P)}}this.setIndex(o),this.setAttribute("position",new ae(l,3)),this.setAttribute("normal",new ae(c,3)),this.setAttribute("uv",new ae(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Fn=class i extends Me{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new D,f=new D,d=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let b=[],v=p/n,w=0;p===0&&a===0?w=.5/e:p===n&&l===Math.PI&&(w=-.5/e);for(let U=0;U<=e;U++){let P=U/e;u.x=-t*Math.cos(s+P*r)*Math.sin(a+v*o),u.y=t*Math.cos(a+v*o),u.z=t*Math.sin(s+P*r)*Math.sin(a+v*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),m.push(P+w,1-v),b.push(c++)}h.push(b)}for(let p=0;p<n;p++)for(let b=0;b<e;b++){let v=h[p][b+1],w=h[p][b],U=h[p+1][b],P=h[p+1][b+1];(p!==0||a>0)&&d.push(v,w,P),(p!==n-1||l<Math.PI)&&d.push(w,U,P)}this.setIndex(d),this.setAttribute("position",new ae(g,3)),this.setAttribute("normal",new ae(x,3)),this.setAttribute("uv",new ae(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var xr=class i extends Me{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],l=[],c=[],h=new D,u=new D,f=new D;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){let x=g/s*r,m=d/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(x),u.y=(t+e*Math.cos(m))*Math.sin(x),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){let x=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,b=(s+1)*d+g;a.push(x,m,b),a.push(m,p,b)}this.setIndex(a),this.setAttribute("position",new ae(o,3)),this.setAttribute("normal",new ae(l,3)),this.setAttribute("uv",new ae(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var _r=class i extends Me{constructor(t=new wo(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new D,l=new D,c=new bt,h=new D,u=[],f=[],d=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new ae(u,3)),this.setAttribute("normal",new ae(f,3)),this.setAttribute("uv",new ae(d,2));function x(){for(let v=0;v<e;v++)m(v);m(r===!1?e:0),b(),p()}function m(v){h=t.getPointAt(v/e,h);let w=a.normals[v],U=a.binormals[v];for(let P=0;P<=s;P++){let I=P/s*Math.PI*2,F=Math.sin(I),M=-Math.cos(I);l.x=M*w.x+F*U.x,l.y=M*w.y+F*U.y,l.z=M*w.z+F*U.z,l.normalize(),f.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function p(){for(let v=1;v<=e;v++)for(let w=1;w<=s;w++){let U=(s+1)*(v-1)+(w-1),P=(s+1)*v+(w-1),I=(s+1)*v+w,F=(s+1)*(v-1)+w;g.push(U,P,F),g.push(P,I,F)}}function b(){for(let v=0;v<=e;v++)for(let w=0;w<=s;w++)c.x=v/e,c.y=w/s,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new C_[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var ys=class extends Ti{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gf,this.normalScale=new bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Bc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Qa(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function P_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var vr=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},wc=class extends vr{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ou,endingEnd:ou}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case lu:r=t,o=2*e-n;break;case cu:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case lu:a=t,l=2*n-e;break;case cu:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-e)/(s-e),x=g*g,m=x*g,p=-f*m+2*f*x-f*g,b=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,v=(-1-d)*m+(1.5+d)*x+.5*g,w=d*m-d*x;for(let U=0;U!==o;++U)r[U]=p*a[h+U]+b*a[c+U]+v*a[l+U]+w*a[u+U];return r}},Tc=class extends vr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),u=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*u+a[l+f]*h;return r}},Ac=class extends vr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Kn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Qa(e,this.TimeBufferType),this.values=Qa(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Qa(t.times,Array),values:Qa(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ac(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Tc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new wc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case to:e=this.InterpolantFactoryMethodDiscrete;break;case eo:e=this.InterpolantFactoryMethodLinear;break;case pl:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return to;case this.InterpolantFactoryMethodLinear:return eo;case this.InterpolantFactoryMethodSmooth:return pl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&P_(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===pl,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let u=o*n,f=u-n,d=u+n;for(let g=0;g!==n;++g){let x=e[u+g];if(x!==e[f+g]||x!==e[d+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*n,f=a*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Kn.prototype.TimeBufferType=Float32Array;Kn.prototype.ValueBufferType=Float32Array;Kn.prototype.DefaultInterpolation=eo;var Ms=class extends Kn{};Ms.prototype.ValueTypeName="bool";Ms.prototype.ValueBufferType=Array;Ms.prototype.DefaultInterpolation=to;Ms.prototype.InterpolantFactoryMethodLinear=void 0;Ms.prototype.InterpolantFactoryMethodSmooth=void 0;var Rc=class extends Kn{};Rc.prototype.ValueTypeName="color";var Cc=class extends Kn{};Cc.prototype.ValueTypeName="number";var Pc=class extends vr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)Un.slerpFlat(r,0,a,c-o,a,c,l);return r}},ea=class extends Kn{InterpolantFactoryMethodLinear(t){return new Pc(this.times,this.values,this.getValueSize(),t)}};ea.prototype.ValueTypeName="quaternion";ea.prototype.DefaultInterpolation=eo;ea.prototype.InterpolantFactoryMethodSmooth=void 0;var bs=class extends Kn{};bs.prototype.ValueTypeName="string";bs.prototype.ValueBufferType=Array;bs.prototype.DefaultInterpolation=to;bs.prototype.InterpolantFactoryMethodLinear=void 0;bs.prototype.InterpolantFactoryMethodSmooth=void 0;var Lc=class extends Kn{};Lc.prototype.ValueTypeName="vector";var Ic=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],g=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}},L_=new Ic,Dc=class{constructor(t){this.manager=t!==void 0?t:L_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Dc.DEFAULT_MATERIAL_NAME="__DEFAULT";var na=class extends Ke{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Dt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}},yr=class extends na{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ke.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Dt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Gl=new fe,sf=new D,rf=new D,Po=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new bt(512,512),this.map=null,this.mapPass=null,this.matrix=new fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new jr,this._frameExtents=new bt(1,1),this._viewportCount=1,this._viewports=[new an(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;sf.setFromMatrixPosition(t.matrixWorld),e.position.copy(sf),rf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(rf),e.updateMatrixWorld(),Gl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Gl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Uc=class extends Po{constructor(){super(new fn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,n=ao*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},Lo=class extends na{constructor(t,e,n=0,s=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ke.DEFAULT_UP),this.updateMatrix(),this.target=new Ke,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Uc}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Nc=class extends Po{constructor(){super(new pr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Mr=class extends na{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ke.DEFAULT_UP),this.updateMatrix(),this.target=new Ke,this.shadow=new Nc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Wc="\\[\\]\\.:\\/",I_=new RegExp("["+Wc+"]","g"),Xc="[^"+Wc+"]",D_="[^"+Wc.replace("\\.","")+"]",U_=/((?:WC+[\/:])*)/.source.replace("WC",Xc),N_=/(WCOD+)?/.source.replace("WCOD",D_),F_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Xc),O_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Xc),z_=new RegExp("^"+U_+N_+F_+O_+"$"),B_=["material","materials","bones","map"],Fc=class{constructor(t,e,n){let s=n||De.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},De=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(I_,"")}static parseTrackName(t){let e=z_.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);B_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};De.Composite=Fc;De.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};De.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};De.prototype.GetterByBindingType=[De.prototype._getValue_direct,De.prototype._getValue_array,De.prototype._getValue_arrayElement,De.prototype._getValue_toArray];De.prototype.SetterByBindingTypeAndVersioning=[[De.prototype._setValue_direct,De.prototype._setValue_direct_setNeedsUpdate,De.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[De.prototype._setValue_array,De.prototype._setValue_array_setNeedsUpdate,De.prototype._setValue_array_setMatrixWorldNeedsUpdate],[De.prototype._setValue_arrayElement,De.prototype._setValue_arrayElement_setNeedsUpdate,De.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[De.prototype._setValue_fromArray,De.prototype._setValue_fromArray_setNeedsUpdate,De.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Iv=new Float32Array(1);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Oc}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Oc);function Es(i){let t=i>>>0;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var we=(i,t,e)=>Math.max(t,Math.min(e,i)),qe=(i,t,e)=>i+(t-i)*e,zo=i=>(i=we(i,0,1),i*i*(3-2*i));function Ri(i,t){return((t-i+Math.PI)%(2*Math.PI)+2*Math.PI)%(2*Math.PI)-Math.PI}var Tn=(i,t)=>1-Math.exp(-i*t),No=new Dt;function $(i,t=1){return No.setHex(i),[No.r*t,No.g*t,No.b*t]}var Rf=new D,Cf=new Un,Pf=new D,Lf=new Zi;function Q(i,t,e,n=1,s=1,r=1,a=0,o=0,l=0){return Rf.set(i,t,e),Lf.set(o,a,l,"YXZ"),Cf.setFromEuler(Lf),Pf.set(n,s,r),new fe().compose(Rf,Cf,Pf)}var de=class{constructor(){this.p=[],this.n=[],this.c=[],this.u=[],this.i=[]}get count(){return this.p.length/3}quad(t,e,n,s,r,a){let o=this.count,l=e[0]-t[0],c=e[1]-t[1],h=e[2]-t[2],u=n[0]-t[0],f=n[1]-t[1],d=n[2]-t[2],g=c*d-h*f,x=h*u-l*d,m=l*f-c*u,p=Math.hypot(g,x,m)||1;g/=p,x/=p,m/=p;let b=[t,e,n,s],v=Array.isArray(r[0]);for(let w=0;w<4;w++){this.p.push(b[w][0],b[w][1],b[w][2]),this.n.push(g,x,m);let U=v?r[w]:r;this.c.push(U[0],U[1],U[2]),a?this.u.push(a[w][0],a[w][1]):this.u.push(w===1||w===2?1:0,w>=2?1:0)}this.i.push(o,o+1,o+2,o,o+2,o+3)}box(t,e,n,s,r,a,o,l){this.quad([t,n,a],[e,n,a],[e,s,a],[t,s,a],o),this.quad([e,n,r],[t,n,r],[t,s,r],[e,s,r],o),this.quad([e,n,a],[e,n,r],[e,s,r],[e,s,a],o),this.quad([t,n,r],[t,n,a],[t,s,a],[t,s,r],o),this.quad([t,s,a],[e,s,a],[e,s,r],[t,s,r],l||o)}bill(t,e,n,s,r,a){let o=this.count,l=[[0,0],[1,0],[1,1],[0,1]];for(let c=0;c<4;c++)this.p.push(t,e,n),this.n.push(s,r,0),this.c.push(a[0],a[1],a[2]),this.u.push(l[c][0],l[c][1]);this.i.push(o,o+1,o+2,o,o+2,o+3)}add(t,e,n){let s=t.index?t.toNonIndexed():t,r=s.attributes.position,a=s.attributes.normal,o=s.attributes.uv,l=new re().getNormalMatrix(e),c=new D,h=new D,u=this.count,f=typeof n=="function";for(let d=0;d<r.count;d++){c.fromBufferAttribute(r,d);let g=f?n(c):n;h.copy(c).applyMatrix4(e),this.p.push(h.x,h.y,h.z),h.fromBufferAttribute(a,d).applyMatrix3(l).normalize(),this.n.push(h.x,h.y,h.z),this.c.push(g[0],g[1],g[2]),o?this.u.push(o.getX(d),o.getY(d)):this.u.push(0,0),this.i.push(u+d)}return this}worldUV(t){for(let e=0,n=0;e<this.p.length;e+=3,n+=2)this.u[n]=this.p[e]*t,this.u[n+1]=this.p[e+2]*t;return this}build(){let t=new Me;return t.setAttribute("position",new ae(this.p,3)),t.setAttribute("normal",new ae(this.n,3)),t.setAttribute("color",new ae(this.c,3)),t.setAttribute("uv",new ae(this.u,2)),t.setIndex(this.i),t.computeBoundingSphere(),t.computeBoundingBox(),t}},k_=new D(0,1,0),Fo=new D,If={};function Ne(i,t,e,n,s,r=5){Fo.set(e[0]-t[0],e[1]-t[1],e[2]-t[2]);let a=Fo.length();Fo.normalize();let o=new Un().setFromUnitVectors(k_,Fo),l=new fe().compose(new D((t[0]+e[0])/2,(t[1]+e[1])/2,(t[2]+e[2])/2),o,new D(n,a,n)),c=If[r]||(If[r]=new tn(1,1,1,r,1,!0));i.add(c,l,s)}function ii(i,t,e,n={}){let s=document.createElement("canvas");s.width=i,s.height=t;let r=s.getContext("2d");e(r,i,t);let a=new _s(s);return n.repeat!==!1&&(a.wrapS=a.wrapT=ps),n.srgb!==!1&&(a.colorSpace=ze),a.anisotropy=n.aniso||4,a}var Oo=class{constructor(t=24){this.cell=t,this.map=new Map,this.stamp=0,this.out=[]}_ins(t,e,n,s,r){let a=this.cell;for(let o=Math.floor(e/a);o<=Math.floor(n/a);o++)for(let l=Math.floor(s/a);l<=Math.floor(r/a);l++){let c=(o+512)*2048+(l+512),h=this.map.get(c);h||this.map.set(c,h=[]),h.push(t)}}box(t,e,n,s,r=0){let a={t:0,x0:t,x1:e,z0:n,z1:s,layer:r,s:0};return this._ins(a,t,e,n,s),a}circle(t,e,n,s=0){let r={t:1,x:t,z:e,r:n,layer:s,s:0};return this._ins(r,t-n,t+n,e-n,e+n),r}query(t,e,n){let s=this.cell,r=this.out;r.length=0;let a=++this.stamp;for(let o=Math.floor((t-n)/s);o<=Math.floor((t+n)/s);o++)for(let l=Math.floor((e-n)/s);l<=Math.floor((e+n)/s);l++){let c=this.map.get((o+512)*2048+(l+512));if(c)for(let h=0;h<c.length;h++){let u=c[h];u.s!==a&&(u.s=a,r.push(u))}}return r}resolve(t,e,n,s=.2){let r=0,a=this.query(t.x,t.z,e+.2);for(let o=0;o<a.length;o++){let l=a[o];if(l.layer&&l.layer!==n)continue;let c,h,u;if(l.t===0){let d=we(t.x,l.x0,l.x1),g=we(t.z,l.z0,l.z1),x=t.x-d,m=t.z-g,p=x*x+m*m;if(p>e*e)continue;if(p>1e-8){let b=Math.sqrt(p);c=x/b,h=m/b,u=e-b}else{let b=t.x-l.x0,v=l.x1-t.x,w=t.z-l.z0,U=l.z1-t.z,P=Math.min(b,v,w,U);P===b?(c=-1,h=0,u=b+e):P===v?(c=1,h=0,u=v+e):P===w?(c=0,h=-1,u=w+e):(c=0,h=1,u=U+e)}}else{let d=t.x-l.x,g=t.z-l.z,x=d*d+g*g,m=e+l.r;if(x>m*m)continue;let p=Math.sqrt(x)||1e-4;c=d/p,h=g/p,u=m-p}t.x+=c*u,t.z+=h*u;let f=t.vx*c+t.vz*h;f<0&&(t.vx-=f*c*(1+s),t.vz-=f*h*(1+s),-f>r&&(r=-f))}return r}near(t,e,n){let s=this.query(t,e,n);for(let r=0;r<s.length;r++){let a=s[r];if(a.t===0){let o=t-we(t,a.x0,a.x1),l=e-we(e,a.z0,a.z1);if(o*o+l*l<n*n)return!0}else if(Math.hypot(t-a.x,e-a.z)<n+a.r)return!0}return!1}blocked(t,e){let n=this.query(t,e,.1);for(let s=0;s<n.length;s++){let r=n[s];if(r.t===0&&!r.layer&&t>r.x0&&t<r.x1&&e>r.z0&&e<r.z1)return!0}return!1}};var H_="varying vec2 vUv; void main(){ vUv = position.xy*0.5+0.5; gl_Position = vec4(position.xy,0.0,1.0); }",Bo=(i,t)=>new Xe({vertexShader:H_,fragmentShader:i,uniforms:t,depthTest:!1,depthWrite:!1}),V_=`
uniform sampler2D tD; uniform vec2 uTexel; uniform float uThr; varying vec2 vUv;
void main(){
  vec3 c = texture2D(tD, vUv + uTexel*vec2(-1.,-1.)).rgb + texture2D(tD, vUv + uTexel*vec2(1.,-1.)).rgb
         + texture2D(tD, vUv + uTexel*vec2(-1.,1.)).rgb + texture2D(tD, vUv + uTexel*vec2(1.,1.)).rgb;
  c = min(c*0.25, vec3(14.0));
  float br = max(c.r, max(c.g, c.b));
  float w = max(br - uThr, 0.0) / max(br, 1e-4);
  gl_FragColor = vec4(c*w, 1.0);
}`,G_=`
uniform sampler2D tD; uniform vec2 uTexel; varying vec2 vUv;
void main(){
  vec3 c = texture2D(tD, vUv).rgb*4.0;
  c += texture2D(tD, vUv + uTexel*vec2(-1.,-1.)).rgb; c += texture2D(tD, vUv + uTexel*vec2(1.,-1.)).rgb;
  c += texture2D(tD, vUv + uTexel*vec2(-1.,1.)).rgb;  c += texture2D(tD, vUv + uTexel*vec2(1.,1.)).rgb;
  gl_FragColor = vec4(c*0.125, 1.0);
}`,W_=`
uniform sampler2D tD; uniform sampler2D tAdd; uniform vec2 uTexel; varying vec2 vUv;
void main(){
  vec2 t = uTexel;
  vec3 c = texture2D(tD, vUv + vec2(-2.*t.x,0.)).rgb + texture2D(tD, vUv + vec2(2.*t.x,0.)).rgb
         + texture2D(tD, vUv + vec2(0.,-2.*t.y)).rgb + texture2D(tD, vUv + vec2(0.,2.*t.y)).rgb;
  c += 2.0*(texture2D(tD, vUv + vec2(-t.x,t.y)).rgb + texture2D(tD, vUv + vec2(t.x,t.y)).rgb
          + texture2D(tD, vUv + vec2(-t.x,-t.y)).rgb + texture2D(tD, vUv + vec2(t.x,-t.y)).rgb);
  gl_FragColor = vec4(c/12.0 + texture2D(tAdd, vUv).rgb, 1.0);
}`,X_=`
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
}`,ko=class{constructor(t){this.r=t;let e=t.extensions;this.hdr=t.capabilities.isWebGL2&&(e.has("EXT_color_buffer_float")||e.has("EXT_color_buffer_half_float")),this.type=this.hdr?ms:ni,this.cam=new pr(-1,1,1,-1,0,1);let n=new Me;n.setAttribute("position",new ae([-1,-1,0,3,-1,0,-1,3,0],3)),this.tri=new oe(n,null),this.tri.frustumCulled=!1,this.scene=new gs,this.scene.add(this.tri),this.mPre=Bo(V_,{tD:{value:null},uTexel:{value:new bt},uThr:{value:this.hdr?1:.72}}),this.mDown=Bo(G_,{tD:{value:null},uTexel:{value:new bt}}),this.mUp=Bo(W_,{tD:{value:null},tAdd:{value:null},uTexel:{value:new bt}}),this.mFinal=Bo(X_,{tScene:{value:null},tBloom:{value:null},uBloom:{value:.65},uTime:{value:0},uExp:{value:.9},uFlash:{value:0},uSat:{value:1.12},uTint:{value:new Dt(1,1,1)}}),this.black=new bo(new Uint8Array([0,0,0,255]),1,1),this.black.needsUpdate=!0,this.levels=5,this.bloom=!0,this.down=[],this.up=[],this.sceneRT=null}setSize(t,e,n){this.sceneRT&&this.sceneRT.dispose(),this.down.forEach(o=>o.dispose()),this.up.forEach(o=>o.dispose()),this.down=[],this.up=[];let s={type:this.type,minFilter:En,magFilter:En,depthBuffer:!1};this.sceneRT=new Dn(t,e,Object.assign({},s,{depthBuffer:!0,samples:n||0}));let r=t,a=e;for(let o=0;o<this.levels;o++)r=Math.max(2,r>>1),a=Math.max(2,a>>1),this.down.push(new Dn(r,a,s)),o<this.levels-1&&this.up.push(new Dn(r,a,s));this.w=t,this.h=e}pass(t,e){this.tri.material=t,this.r.setRenderTarget(e),this.r.render(this.scene,this.cam)}render(t,e,n){let s=this.r;s.setRenderTarget(this.sceneRT),s.render(t,e);let r=this.black;if(this.bloom){let o=this.levels;this.mPre.uniforms.tD.value=this.sceneRT.texture,this.mPre.uniforms.uTexel.value.set(.5/this.w,.5/this.h),this.pass(this.mPre,this.down[0]);for(let c=1;c<o;c++){let h=this.down[c-1];this.mDown.uniforms.tD.value=h.texture,this.mDown.uniforms.uTexel.value.set(.5/h.width,.5/h.height),this.pass(this.mDown,this.down[c])}let l=this.down[o-1];for(let c=o-2;c>=0;c--)this.mUp.uniforms.tD.value=l.texture,this.mUp.uniforms.tAdd.value=this.down[c].texture,this.mUp.uniforms.uTexel.value.set(.5/l.width,.5/l.height),this.pass(this.mUp,this.up[c]),l=this.up[c];r=l.texture}let a=this.mFinal.uniforms;a.tScene.value=this.sceneRT.texture,a.tBloom.value=r,a.uTime.value=n,this.pass(this.mFinal,null)}};var en=[-280,-210,-140,-70,70,140,210,280],Ye=[-180,-120,-60,0,60,120,180],Ci=i=>i===140?11:7,qc=[{z:-60,name:"\u041A\u043E\u043C\u043C\u0443\u043D\u0430\u043B\u044C\u043D\u044B\u0439 \u043C\u043E\u0441\u0442"},{z:120,name:"\u0411\u0443\u0433\u0440\u0438\u043D\u0441\u043A\u0438\u0439 \u043C\u043E\u0441\u0442"}],Sr=296,Er=196,Df=[[-273,-217],[-203,-147],[-133,-77],[77,129],[151,203],[217,273]],Uf=[[-173,-127],[-113,-67],[-53,-7],[7,53],[67,113],[127,173]],q_=[["zone","ind","panel","palace","classic","panel"],["ind","ind","panel","classic","classic","panel"],["panel","panel","classic","park","opera","classic"],["panel","garages","panel","classic","classic","panel"],["panel","panel","fpark","panel","classic","mall"],["vatutina","panel","panel","panel","panel","panel"]],_n={start:[147.4,14],arkasha:[152.4,-30],max:[127.5,90],dima:[57.5,30],igor:[218.6,30],geisler:[103,-133],pasha:[177,68.6],nikita:[127.6,17],kos:[-215.6,-143.5],artem:[245,-128.6],sanya:[-78.5,30],misha:[-105,70.5],garage:[-149.5,22],shop:[218.6,90],vatutina:[-234,171.5],gate:[-215.6,-150],artifact:[-262,-152],tower1:[-78.5,-128.5],tower2:[201.5,51.5],tower3:[-148.5,111.5],leak1:[61,-80],leak2:[103,-9.5],leak3:[146.5,31]},Ff=[{x:180,z:-30,r:45,name:"\u041E\u043F\u0435\u0440\u043D\u044B\u0439 \u0442\u0435\u0430\u0442\u0440"},{x:140,z:30,r:22,name:"\u0427\u0430\u0441\u043E\u0432\u043D\u044F \u043D\u0430 \u041A\u0440\u0430\u0441\u043D\u043E\u043C \u043F\u0440\u043E\u0441\u043F\u0435\u043A\u0442\u0435"},{x:0,z:120,r:50,name:"\u0411\u0443\u0433\u0440\u0438\u043D\u0441\u043A\u0438\u0439 \u043C\u043E\u0441\u0442"},{x:0,z:-60,r:50,name:"\u041A\u043E\u043C\u043C\u0443\u043D\u0430\u043B\u044C\u043D\u044B\u0439 \u043C\u043E\u0441\u0442"},{x:-245,z:-150,r:40,name:"\u041F\u0440\u043E\u043C\u0437\u043E\u043D\u0430. \u0422\u0435\u0440\u0440\u0438\u0442\u043E\u0440\u0438\u044F \u041A\u043E\u0441\u0430"},{x:-175,z:30,r:32,name:"\u0413\u0430\u0440\u0430\u0436\u0438. \u0422\u0443\u0442 \u0441\u0438\u0434\u044F\u0442 \xAB\u0442\u0438\u043F\u044B\xBB"},{x:-245,z:150,r:34,name:"\u0412\u0430\u0442\u0443\u0442\u0438\u043D\u0430. \u0414\u0430\u043B\u0435\u043A\u043E\u0432\u0430\u0442\u043E"},{x:103,z:-30,r:30,name:"\u041C\u0438\u0445\u0430\u0439\u043B\u043E\u0432\u0441\u043A\u0430\u044F \u043D\u0430\u0431\u0435\u0440\u0435\u0436\u043D\u0430\u044F"},{x:103,z:-150,r:30,name:"\u0414\u0432\u043E\u0440\u0435\u0446 \u0413\u0430\u0439\u0441\u043B\u0435\u0440\u0430"},{x:-105,z:90,r:30,name:"\u041F\u0430\u0440\u043A. \u0411\u0430\u0442\u044F \u043D\u0430 \u043F\u0440\u0438\u0440\u043E\u0434\u0435"},{x:245,z:90,r:32,name:"\u0422\u0426 \xAB\u0422\u0435\u0445\u043D\u043E\u0420\u0430\u043A\xBB"}];function Yc(i){return i>=52?0:i<=40?-3:-3+3*(i-40)/12}function $i(i){let t=Math.abs(i.x);if(t<52){for(let n=0;n<2;n++)if(Math.abs(i.z-qc[n].z)<8.6&&i.y>-1.5)return i.layer=1,0}let e=Yc(t);return i.layer=e<-1.5?2:0,e}function ia(i,t){if(Math.abs(t)<=187){for(let n=0;n<en.length;n++)if(Math.abs(i-en[n])<Ci(en[n]))return!0}let e=Math.abs(i);for(let n=0;n<Ye.length;n++)if(Math.abs(t-Ye[n])<7&&(e>=63&&e<=287||e<63&&(Ye[n]===-60||Ye[n]===120)))return!0;return!1}var sa={value:.0052},Y_=`
attribute vec3 color; varying vec2 vUv; varying vec3 vC; varying float vF; uniform float uFog;
void main(){ vec4 mv = modelViewMatrix*vec4(position,1.0); gl_Position = projectionMatrix*mv; vUv = uv; vC = color; float d = length(mv.xyz); vF = exp(-uFog*uFog*d*d); }`,Ho=(i,t={},e=Y_)=>new Xe({vertexShader:e,fragmentShader:i,uniforms:Object.assign({uFog:sa},t),blending:Zn,transparent:!0,depthWrite:!1});function Zc(){return new Xe({uniforms:{uScale:ws,uFog:sa},vertexShader:`attribute float aSize; attribute vec3 aColor; varying vec3 vC; uniform float uScale; uniform float uFog;
      void main(){ vec4 mv = modelViewMatrix*vec4(position,1.0); gl_Position = projectionMatrix*mv; float d = max(-mv.z, 0.1);
      gl_PointSize = min(aSize*uScale/d, 200.0); vC = aColor*exp(-uFog*uFog*d*d*0.5); }`,fragmentShader:"varying vec3 vC; void main(){ float r = length(gl_PointCoord-0.5)*2.0; float a = pow(max(1.0-r,0.0),2.4)*0.75 + (1.0-smoothstep(0.0,0.22,r))*0.9; gl_FragColor = vec4(vC*a,1.0); }",blending:Zn,transparent:!0,depthWrite:!1})}var ws={value:800};function Z_(i,t){return i.onBeforeCompile=e=>{e.uniforms.uGlow=t,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
varying float vWY;`).replace("#include <project_vertex>",`#include <project_vertex>
{ vec4 wp = vec4(transformed,1.0);
#ifdef USE_INSTANCING
 wp = instanceMatrix*wp;
#endif
 vWY = (modelMatrix*wp).y; }`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
varying float vWY; uniform vec3 uGlow;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
 totalEmissiveRadiance += diffuseColor.rgb * uGlow * exp(-abs(vWY)*0.13);`)},i}var J_={value:new D(.26,.13,.05)};function Ji(i){return Z_(new ys(i),J_)}function Nf(i,t){let s=document.createElement("canvas");s.width=s.height=512;let r=s.getContext("2d");r.fillStyle="#000",r.fillRect(0,0,512,512);let a=["#ffcf8a","#ffb866","#ffe2b0","#ffd9a0","#ffc070","#fff0d0","#bfe0ff","#8fb4ff","#d49cff","#ff9f6a"],o=ii(512,512,c=>{for(let h=0;h<8;h++)for(let u=0;u<8;u++){let f=u*64,d=h*64,g,x,m,p;if(i===0?(c.fillStyle=["#c3c6cc","#b9bcc2","#cdcfd3","#bfc2c8"][Math.floor(t()*4)],c.fillRect(f,d,64,64),c.strokeStyle="#8b8f97",c.lineWidth=2,c.strokeRect(f+1,d+1,62,62),g=f+14,x=d+12,m=36,p=28,u%4===1&&(c.fillStyle="#a4a8b0",c.fillRect(f+8,d+42,48,16),c.fillStyle="#8d9199",c.fillRect(f+8,d+42,48,3)),c.fillStyle="#e4e6ea",c.fillRect(g-2,x-2,m+4,p+4)):(c.fillStyle=["#d6d0c6","#cfc9be","#dcd6cc"][Math.floor(t()*3)],c.fillRect(f,d,64,64),c.fillStyle="#b3ad9f",c.fillRect(f,d+58,64,4),c.fillStyle="#c4beb1",c.fillRect(f,d,5,64),g=f+22,x=d+10,m=24,p=40,c.fillStyle="#efeadf",c.fillRect(g-3,x-3,m+6,p+6),c.fillStyle="#e2dccf",c.fillRect(g-5,x+p+3,m+10,3)),t()<(i===0?.36:.42)){let v=a[Math.floor(t()*t()*a.length)];c.fillStyle=v,c.fillRect(g,x,m,p);let w=r.createLinearGradient(0,x,0,x+p);w.addColorStop(0,v),w.addColorStop(1,"#6b4a2a"),r.fillStyle=w,r.fillRect(g,x,m,p),t()<.5&&(r.fillStyle="rgba(0,0,0,0.45)",r.fillRect(g,x,m*(.2+t()*.3),p)),r.fillStyle="#000",r.fillRect(g+m/2-1,x,2,p)}else c.fillStyle=["#18202e","#1d2738","#141a26"][Math.floor(t()*3)],c.fillRect(g,x,m,p);c.fillStyle="rgba(40,44,52,0.9)",c.fillRect(g+m/2-1,x,2,p)}}),l=new _s(s);return l.wrapS=l.wrapT=ps,l.colorSpace=ze,l.anisotropy=4,{map:o,emissiveMap:l}}function Of(i){let t=Es(20261119),e=_=>_[Math.floor(t()*_.length)],n=Es(777),s=new Oo,r={fa:new de,fb:new de,pl:new de,em:new de,gr:new de,rd:new de,br:new de,brE:new de,sg:new de,pool:new de,cone:new de,streak:new de},a=[],o=[],l=[],c=[],h=[],u=$(15133943),f=$(13884654),d=$(10134453),g=$(2764344),x=$(6975096),m=[1,.55,.2],p=[1,.74,.42],b=[.62,.8,1],v=(_,A)=>[_[0]*A,_[1]*A,_[2]*A],w=new tn(1,1,1,10),U=new $n(1,1,7),P=new $n(1,1,14,1,!0),I=new Fn(1,14,10),F=new Nn(1,1,1),M=(_,A,R,L)=>r.gr.box(_,A,0,.15,R,L,d,u);for(let _=0;_<6;_++)for(let A=0;A<6;A++){let R={ci:_,ri:A,x0:Df[_][0],x1:Df[_][1],z0:Uf[A][0],z1:Uf[A][1],type:q_[A][_]};R.cx=(R.x0+R.x1)/2,R.cz=(R.z0+R.z1)/2,c.push(R),M(R.x0,R.x1,R.z0,R.z1)}for(let _ of[-1,1]){let A=_>0?52:-63,R=_>0?63:-52;for(let[N,G]of[[-187,-67],[-53,113],[127,187]])M(A,R,N,G);let L=_>0?52:-900,O=_>0?900:-52;M(L,O,-900,-187),M(L,O,187,900),M(_>0?287:-900,_>0?900:-287,-187,187),_>0?r.gr.quad([40,-3,900],[52,.15,900],[52,.15,-900],[40,-3,-900],f):r.gr.quad([-52,.15,900],[-40,-3,900],[-40,-3,-900],[-52,.15,-900],f)}r.gr.worldUV(1/24);let E=(_,A,R,L,O)=>{let N=O?[[0,L/16],[1,L/16],[1,R/16],[0,R/16]]:[[1,_/16],[1,A/16],[0,A/16],[0,_/16]];r.rd.quad([_,0,L],[A,0,L],[A,0,R],[_,0,R],[1,1,1],N)};for(let _ of en)E(_-Ci(_),_+Ci(_),-187,187,!0);for(let _ of Ye){for(let A of[0,4])for(let R=A;R<A+3;R++)E(en[R]+Ci(en[R]),en[R+1]-Ci(en[R+1]),_-7,_+7,!1);(_===-60||_===120)&&E(-63,63,_-7,_+7,!1)}let H=(_,A,R,L,O,N,G,j=0,st=!1)=>a.push({x:_,z:A,hx:R,hz:L,h:O,c:N,pr:G,my:j,bridge:st}),J=(_,A,R,L,O)=>o.push(_,A,R,L,O[0],O[1],O[2]),ot=(_,A,R,L,O=.22)=>r.pool.quad([_-R,O,A+R],[_+R,O,A+R],[_+R,O,A-R],[_-R,O,A-R],L);function B(_,A,R,L,O,N,G,j){let st=Math.max(1,Math.round((G-N)/3)),wt=Math.floor(t()*8)/8,he=wt+st/8,xe=(Oe,cn,jt,ue,Ui)=>{let Os=Math.max(1,Math.round(Ui/3.2)),Ge=Math.floor(t()*8)/8,Ve=Ge+Os/8;_.quad(Oe,cn,jt,ue,j,[[Ge,wt],[Ve,wt],[Ve,he],[Ge,he]])};xe([A,N,O],[R,N,O],[R,G,O],[A,G,O],R-A),xe([R,N,L],[A,N,L],[A,G,L],[R,G,L],R-A),xe([R,N,O],[R,N,L],[R,G,L],[R,G,O],O-L),xe([A,N,L],[A,N,O],[A,G,O],[A,G,L],O-L)}function V(_,A,R,L,O,N,G,j){if(B(_,A,R,L,O,.15,N,G),r.pl.box(A-.3,R+.3,N,N+.5,L-.3,O+.3,v(G,.5),u),t()<.7){let st=2+t()*3,wt=2+t()*3,he=qe(A+3,R-3,t()),xe=qe(L+3,O-3,t());r.pl.box(he-st/2,he+st/2,N+.5,N+2+t()*1.5,xe-wt/2,xe+wt/2,$(3817290),u)}for(let st=0,wt=1+Math.floor(n()*3);st<wt;st++){let he=qe(A+2,R-2,n()),xe=qe(L+2,O-2,n()),Oe=2.5+n()*3;Ne(r.pl,[he,N+.5,xe],[he,N+.5+Oe,xe],.05,g,3),r.pl.box(he-.7,he+.7,N+.5+Oe*.7,N+.55+Oe*.7,xe-.04,xe+.04,g)}if(N>40&&J(A+1,N+1.2,L+1,3.5,[2,.15,.1]),_===r.fa&&R-A>20)for(let st=A+6.4;st<R-3;st+=12.8)r.pl.box(st-1.3,st+1.3,2.7,2.9,O,O+1.5,$(4869978),u),r.em.quad([st-.6,.2,O+.05],[st+.6,.2,O+.05],[st+.6,2.3,O+.05],[st-.6,2.3,O+.05],[[.5,.3,.12],[.5,.3,.12],[1.3,.85,.4],[1.3,.85,.4]]),J(st,2.55,O+1.2,1.2,[1.3,.9,.5]),ot(st,O+2.2,3.2,[.3,.2,.09]);j||s.box(A,R,L,O)}let et=[[1.7,1.15,.6],[1.1,1.4,1.8],[1.8,.55,1.1],[.5,1.6,.85],[1.9,.95,.25],[1.5,1.3,1]];function at(_,A,R,L){for(let O=_+1;O+3<A;O+=4){if(t()<.22)continue;let N=e(et),G=R+L*.06,j=v(N,.45);L>0?r.em.quad([O,.7,G],[O+3,.7,G],[O+3,3.1,G],[O,3.1,G],[j,j,N,N]):r.em.quad([O+3,.7,G],[O,.7,G],[O,3.1,G],[O+3,3.1,G],[j,j,N,N]),ot(O+1.5,R+L*3,4.5,v(N,.1))}}let it={cv:document.createElement("canvas"),n:0,slots:{}};it.cv.width=1024,it.cv.height=2048,it.g=it.cv.getContext("2d"),it.g.fillStyle="#000",it.g.fillRect(0,0,1024,2048);function K(_,A,R,L,O,N,G,j=!0){let st=it.slots[_+A];if(st===void 0){st=it.slots[_+A]=it.n++;let Ve=it.g,ya=st%2*512,Ma=Math.floor(st/2)*64;Ve.save(),Ve.beginPath(),Ve.rect(ya,Ma,512,64),Ve.clip();let ba=44;Ve.font=`900 ${ba}px "Arial Black", "Segoe UI", system-ui, sans-serif`;let Ch=Ve.measureText(_).width;Ch>480&&(ba=Math.floor(ba*480/Ch),Ve.font=`900 ${ba}px "Arial Black", "Segoe UI", system-ui, sans-serif`),Ve.textAlign="center",Ve.textBaseline="middle",Ve.shadowColor=A,Ve.shadowBlur=14,Ve.fillStyle=A,Ve.fillText(_,ya+256,Ma+34),Ve.fillText(_,ya+256,Ma+34),Ve.shadowBlur=0,Ve.fillStyle="rgba(255,255,255,0.72)",Ve.fillText(_,ya+256,Ma+34),Ve.restore()}let wt=st%2*.5,he=wt+.5,xe=1-Math.floor(st/2)/32,Oe=xe-1/32,cn=N/8,jt=N/2,ue=cn/2,Ui=[[wt,Oe],[he,Oe],[he,xe],[wt,xe]],Os=[1,1,1],Ge=.12;G==="+z"?(r.sg.quad([R-jt,L-ue,O+Ge],[R+jt,L-ue,O+Ge],[R+jt,L+ue,O+Ge],[R-jt,L+ue,O+Ge],Os,Ui),j&&r.pl.box(R-jt-.2,R+jt+.2,L-ue-.15,L+ue+.15,O-.1,O+.08,g)):G==="-z"?(r.sg.quad([R+jt,L-ue,O-Ge],[R-jt,L-ue,O-Ge],[R-jt,L+ue,O-Ge],[R+jt,L+ue,O-Ge],Os,Ui),j&&r.pl.box(R-jt-.2,R+jt+.2,L-ue-.15,L+ue+.15,O-.08,O+.1,g)):G==="+x"?(r.sg.quad([R+Ge,L-ue,O+jt],[R+Ge,L-ue,O-jt],[R+Ge,L+ue,O-jt],[R+Ge,L+ue,O+jt],Os,Ui),j&&r.pl.box(R-.1,R+.08,L-ue-.15,L+ue+.15,O-jt-.2,O+jt+.2,g)):(r.sg.quad([R-Ge,L-ue,O-jt],[R-Ge,L-ue,O+jt],[R-Ge,L+ue,O+jt],[R-Ge,L+ue,O-jt],Os,Ui),j&&r.pl.box(R-.08,R+.1,L-ue-.15,L+ue+.15,O-jt-.2,O+jt+.2,g))}let ut=[["BEAM STORE","#3df2ff"],["\u0418\u0413\u0420\u042B \u041E\u0422 390 \u20BD","#ff4fd8"],["\u041F2 \xB7 \u041F3 \xB7 \u041E\u0411\u041C\u0415\u041D","#ffd23d"],["\u0411\u0410\u0420 \xAB\u041D\u0410 \u0421\u0415\u0420\u0413\u0415\u042F \u0421\u0422\u041E\u041B\u0418\u041A\xBB","#ffae3d"],["\u0420\u042B\u0411\u0410 \xB7 \u041F\u0418\u0412\u041E","#6dff8a"],["\u041A\u0418\u041D\u041E\u0422\u0415\u0410\u0422\u0420 11.1.4","#b98cff"],["\u0428\u0410\u0423\u0420\u041C\u0410 \xAB\u041F\u041B\u041E\u0422\u0412\u0410\xBB","#ff7a3d"],["\u0411\u041E\u0416\u0415, \u0425\u0420\u0410\u041D\u0418 \u041F\u0418\u0420\u0410\u0422\u041E\u0412","#ff4f6a"],["\u0426\u0418\u0412\u0410 \xB7 \u0415\u0429\u0401 \u041E\u0414\u0418\u041D \u0425\u041E\u0414","#3dffb5"],["\u041E\u041F\u0415\u0420\u0410\u0422\u0418\u0412\u041A\u0410 \u0414\u041B\u042F \u0421\u0410\u041D\u0418","#3da8ff"],["\u041C\u0415\u0413\u0410\u0424\u0418\u0413 \xB7 \u0421\u0412\u042F\u0417\u042C \u041A 19-\u041C\u0423","#5dff5d"],["TEKKEN \u0421 \u0414\u0415\u0422\u042C\u041C\u0418","#ff5d3d"],["\u041F\u041E\u0414\u041F\u0418\u0421\u041A\u0410 EXTRA","#5d8bff"],["\u041D\u0415 \u0411\u0415\u0420\u0418 \u041F\u041E\u0414\u041F\u0418\u0421\u041A\u0423","#ff9d3d"],["\u041A\u041E\u0424\u0415\u0419\u041D\u042F","#ffcf8a"],["VR2 \xB7 \u041F\u0420\u041E\u0414\u0410\u041C","#c58cff"],["212 \u0413\u0411 \u0421\u0412\u041E\u0411\u041E\u0414\u041D\u041E","#3dfff0"],["\u0422\u0415\u041B\u0415\u041A\u0418 \xB7 \u0416\u0414\u0418 \u0412 \u0421\u0411","#ffe23d"],["\u041B\u041E\u041C\u0411\u0410\u0420\u0414 \xAB144 \u041A\u0410\u0420\u0422\u041E\u0427\u041A\u0418\xBB","#ff5d9d"],["\u0410\u0422\u0415\u041B\u042C\u0415 \xAB\u0411\u0410\u0411\u041E\u0427\u041A\u0410\xBB","#ffd9a0"],["\u0411\u0410\u0420\u0411\u0415\u0420\u0428\u041E\u041F \xAB\u0414\u041E \u0429\u0415\u0422\u0418\u041D\u042B\xBB","#8affd0"],["\u0412\u0421\u0401 \u0422\u0410\u041A, \u0422\u041E\u041B\u042C\u041A\u041E \u041D\u0410\u041E\u0411\u041E\u0420\u041E\u0422","#ff6ad5"],["\u041C\u0415\u0421\u042F\u0426\u2026","#ff9d3d"],["21 \u0414\u0415\u041D\u042C..","#3df2ff"],["\u041B\u0415\u0422\u0421 \u0413\u041E\u0423","#6dff8a"],["\u0414\u0418\u041C\u0410\u041D, \u0421\u041E\u0420\u042F\u041D","#c58cff"],["\u0417\u0411\u0421 \xB7 \u0412\u042D\u0420\u0418 \u0413\u0423\u0414","#ffd23d"],["\u0417\u0410\u041A\u0410\u041F\u042B\u0412\u0410\u0415\u041C\u0421\u042F","#ff7a3d"]],mt=0,Et=(_,A,R,L)=>{let O=ut[mt++%ut.length],N=we(L-6,6,12);K(O[0],O[1],_,4.7,A+R*.2,N,R>0?"+z":"-z")},tt=_=>{let A=zo((_.y+.5)*1.5-.15);return[qe(.012,.8,A),qe(.05,.86,A),qe(.03,.95,A)]};function lt(_,A,R){r.pl.add(w,Q(_,.15+.6*R,A,.22*R,1.2*R,.22*R),$(2825750));for(let L=0;L<3;L++){let O=(2.3-.55*L)*R,N=2.7*R;r.pl.add(U,Q(_,.15+(1+1.45*L)*R+N/2,A,O,N,O,t()*3),tt)}s.circle(_,A,.5*R)}function vt(_,A,R=[],L=3){let O=[];for(let N=0;N<A*6&&O.length<A;N++){let G=qe(_.x0+L,_.x1-L,t()),j=qe(_.z0+L,_.z1-L,t());s.near(G,j,2.6)||R.some(st=>Math.hypot(st[0]-G,st[1]-j)<(st[2]||6))||O.some(st=>Math.hypot(st[0]-G,st[1]-j)<4)||(O.push([G,j]),lt(G,j,.75+t()*.8))}}let Ut=[$(14206880),$(13612186),$(12567753),$(13940912),$(13225912),$(13085068)],At=[$(12106948),$(11121597),$(12893358),$(11055272),$(12562608),$(10465476)];function Zt(_,A){let L=_.x0+3,O=_.x1-3,N=_.z0+3,G=_.z1-3;for(let j of[0,1]){let st=12.8+Math.floor(t()*2)*1.6,wt=j?G-st:N,he=j?G:N+st,xe=j?1:-1,Oe=j?he:wt,cn;if(t()<.6){let jt=qe(L+17,O-17,t());cn=[[L,jt-2.4],[jt+2.4,O]]}else cn=[[L,O]];for(let[jt,ue]of cn){let Ui=.15+3*(4+Math.floor(t()*(A?8:5)));V(r.fb,jt,ue,wt,he,Ui,e(Ut)),at(jt,ue,Oe,xe),t()<.9&&Et((jt+ue)/2,Oe,xe,ue-jt)}}vt(_,3)}function $t(_){let R=_.x0+4,L=_.x1-4,O=_.z0+4,N=_.z1-4,G=t();if(G<.45)V(r.fa,R,L,O,O+12.8,27.15,e(At)),V(r.fa,R,L,N-12.8,N,27.15,e(At));else if(G<.8){V(r.fa,R,L,O,O+12.8,27.15,e(At));let wt=qe(R+10,L-10,t());V(r.fa,wt-9.6,wt+9.6,N-19.2,N,48.15,e(At))}else V(r.fa,R,R+12.8,O,N,27.15,e(At)),V(r.fa,L-12.8,L,O,N,36.15,e(At));let j=_.cx+(t()-.5)*10,st=_.cz+(t()-.5)*3;r.pl.box(j-1.5,j+1.5,.15,.5,st-1.5,st+1.5,$(9067050),u),Ne(r.pl,[j+3,.15,st],[j+3,2.4,st],.08,$(12728890)),Ne(r.pl,[j+5,.15,st],[j+5,2.4,st],.08,$(12728890)),Ne(r.pl,[j+3,2.4,st],[j+5,2.4,st],.08,$(3828418)),vt(_,5,[[j,st,7]]),H(_.cx-12,_.cz,_.cx-12,_.cz,4.6,p,8)}function Gt(_){let A=_.x0+4,R=_.x1-4,L=[$(7027242),$(3099194),$(3819096),$(5921362),$(8014366),$(4861754)];for(let G=0;G<3;G++){let j=_.z0+8+G*14,st=j-3,wt=j+3;r.pl.box(A,R,.15,2.9,st,wt,$(4869202),u),s.box(A,R,st,wt);for(let he=A+.4;he+3<R;he+=3.6)r.pl.quad([he,.2,wt+.05],[he+3,.2,wt+.05],[he+3,2.5,wt+.05],[he,2.5,wt+.05],e(L)),r.pl.quad([he+3,.2,st-.05],[he,.2,st-.05],[he,2.5,st-.05],[he+3,2.5,st-.05],e(L))}K("\u0422\u0418\u041F\u042B \xB7 \u0414\u0418\u0421\u041A\u0418 390 \u20BD","#ff4fd8",R+.2,4,_.z0+22,6,"+x"),H(R-6,_.z0+15,R-6,_.z0+15,4.6,m,9),H(_.cx,_.z0+29,_.cx,_.z0+29,4.6,m,9);let O=R-9,N=_.z0+15;return r.pl.add(w,Q(O,.6,N,.45,.9,.45),$(3811874)),s.circle(O,N,.6),{fire:[O,1.3,N]}}function le(_,A,R){let O=R/6;for(let N=0;N<6;N++){let G=2-N*.12;r.pl.add(w,Q(_,.15+O*(N+.5),A,G,O,G),N%2?$(14211288):$(11545122))}r.em.add(I,Q(_,R+.5,A,.35,.35,.35),[3,.2,.15]),J(_,R+.5,A,5,[2.2,.15,.1]),J(_,R*.6,A+2.1,3,[1.8,.12,.08]),s.circle(_,A,2.2),l.push([_,R+1,A])}function X(_){let A=[$(3752525),$(4538426),$(3095874),$(4865855)],R=_.x0+4,L=R+32,O=_.z0+5,N=O+19,G=10+t()*4;r.pl.box(R,L,.15,G,O,N,e(A),u),s.box(R,L,O,N);for(let j=R+2;j+4<L;j+=6){let st=[.45,1.1,1.3];r.em.quad([j,G-3,N+.05],[j+4,G-3,N+.05],[j+4,G-1.6,N+.05],[j,G-1.6,N+.05],st)}le(_.x1-9,_.z0+10,38+t()*14);for(let j=0;j<2;j++){let st=_.x1-9-j*11,wt=_.z1-9;r.pl.add(w,Q(st,4.15,wt,4.5,8,4.5),$(5857643)),r.pl.add(U,Q(st,8.9,wt,4.6,1.5,4.6),u),s.circle(st,wt,4.6)}r.pl.box(_.x0+4,_.x1-22,4.6,5.3,_.z1-16,_.z1-15.3,$(7035450),u);for(let j=_.x0+6;j<_.x1-23;j+=8)r.pl.box(j-.15,j+.15,.15,4.6,_.z1-15.8,_.z1-15.5,g);H(_.x0+20,_.z1-8,_.x0+20,_.z1-8,7,b,12)}function ln(_){let A=_.x0+2,R=_.x1-2,L=_.z0+2,O=_.z1-2,N=.4,G=2.9,j=$(5988198),st=_.cz,wt=(xe,Oe,cn,jt)=>{r.pl.box(xe,Oe,.15,G,cn,jt,j,u),s.box(xe,Oe,cn,jt)};wt(A,R,L,L+N),wt(A,R,O-N,O),wt(A,A+N,L,O),wt(R-N,R,L,st-2.8),wt(R-N,R,st+2.8,O),r.pl.box(R-1,R+.6,.15,1.3,st-.8,st+.8,x,u),s.box(R-1,R+.6,st-.8,st+.8),K("\u0417\u041E\u041D\u0410 \xB7 \u0412\u0425\u041E\u0414 \u041F\u0415\u0428\u041A\u041E\u041C","#7dff5d",R+.1,3.9,st+8,7,"+x");let he=[$(5913126),$(4866104),$(4016714)];for(let[xe,Oe,cn,jt,ue]of[[-236,-158,7,2.6,2.6],[-250,-139,3,8,2.8],[-266,-163,6,6,4],[-228,-137,2.5,6,2.4],[-252,-168,9,2.5,3]])r.pl.box(xe-cn/2,xe+cn/2,.15,ue,Oe-jt/2,Oe+jt/2,e(he),u),s.box(xe-cn/2,xe+cn/2,Oe-jt/2,Oe+jt/2);for(let[xe,Oe,cn]of[[-231,-150,0],[-242,-141,1.3],[-243,-160,2.1],[-254,-150,3.3],[-258,-163,4.4],[-236,-166,5.2],[-262,-141,.7]])h.push({x0:xe,z0:Oe,x:xe,z:Oe,ph:cn,r:2.6});H(-240,-130,-240,-132,7,[.5,1,.6],12)}function Ot(_,A){let R=A?[[_.cx,_.cz,13]]:[[_n.misha[0],_n.misha[1],7]];for(let[L,O]of[[-16,-12],[16,-12],[-16,12],[16,12],[0,18],[0,-18]])H(_.cx+L,_.cz+O,_.cx+L,_.cz+O,4.6,p,9),R.push([_.cx+L,_.cz+O,3]);A&&ot(_.cx,_.cz,16,[.5,.3,.6]),vt(_,A?16:34,R)}function qt(_){let A=$(14470052),R=$(15657436),L=$(9411238),O=181,N=-30;r.em.add(new tn(1,1,1,24,3),Q(O,8.15,N,15,16,15),G=>{let j=we(G.y+.5,0,1),st=Math.round(Math.atan2(G.z,G.x)/(Math.PI/12)),wt=qe(st%2?.95:.6,.26,Math.sqrt(j));return[.8*wt,.6*wt,.33*wt]}),r.em.add(new Fn(1,28,10,0,Math.PI*2,0,Math.PI/2),Q(O,16.1,N,15.6,9.6,15.6),G=>{let j=zo(G.y*1.25),st=.86+.14*Math.sign(Math.sin(Math.atan2(G.z,G.x)*14)),wt=(.75+.25*-G.x)*st;return[qe(.62,.11,j)*wt,qe(.47,.14,j)*wt,qe(.3,.22,j)*wt]}),r.pl.add(w,Q(O,26.3,N,1.6,1.6,1.6),R),r.pl.add(U,Q(O,28.6,N,1.2,3,1.2),L),r.pl.box(O-15.2,O+15.2,16,16.9,N-15.2,N+15.2,R),r.pl.box(190,201,.15,21,N-12,N+12,A,u),r.pl.box(160,170,.15,13,N-14,N+14,A,u);for(let G=0;G<8;G++){let j=N-12+G*24/7;r.em.add(w,Q(158.8,5.65,j,.85,11,.85),st=>{let wt=qe(.95,.34,we(st.y+.5,0,1))*(.72+.28*-st.x);return[.95*wt,.78*wt,.5*wt]})}r.pl.box(157.4,160.4,11.1,13,N-14.2,N+14.2,R,u),r.pl.box(157.8,160.2,13,14.4,N-10,N+10,R,u),r.pl.box(158.2,160,14.4,15.4,N-5.5,N+5.5,R,u);for(let G=0;G<3;G++)r.pl.box(153.8+G*1.1,157.6,.15,.95-G*.27,N-14.5,N+14.5,$(10130828),u);for(let G=0;G<5;G++){let j=N-8.5+G*4.25;r.em.quad([159.86,1.2,j-1.1],[159.86,1.2,j+1.1],[159.86,6.5,j+1.1],[159.86,6.5,j-1.1],[[.7,.42,.18],[.7,.42,.18],[1.7,1.1,.55],[1.7,1.1,.55]])}{let G=[.5,.36,.18],j=[.13,.1,.06],st=[G,G,j,j];r.em.quad([159.93,.15,N-14],[159.93,.15,N+14],[159.93,11.1,N+14],[159.93,11.1,N-14],st),r.em.quad([170,.15,N-14.06],[160,.15,N-14.06],[160,13,N-14.06],[170,13,N-14.06],st),r.em.quad([160,.15,N+14.06],[170,.15,N+14.06],[170,13,N+14.06],[160,13,N+14.06],st),r.em.quad([201,.15,N-12.06],[190,.15,N-12.06],[190,21,N-12.06],[201,21,N-12.06],st),r.em.quad([190,.15,N+12.06],[201,.15,N+12.06],[201,21,N+12.06],[190,21,N+12.06],st);for(let wt=0;wt<12;wt++){let he=wt/12*Math.PI*2+.26;J(O+Math.cos(he)*15.6,17.3,N+Math.sin(he)*15.6,1.3,[1.5,1,.45])}J(O,30.4,N,2.8,[2.2,1.6,.8])}s.box(158,201,N-14,N+14),s.box(166,196,N-15,N+15);for(let[G,j]of[[156,-30],[156,-42],[156,-18],[170,-48],[170,-12],[192,-48],[192,-12]])ot(G,j,13,[.4,.26,.12]);for(let G of[-44,-16])J(155.5,.6,G,2.2,[2,1.3,.6]),J(155.5,.6,G+9,2.2,[2,1.3,.6]);r.pl.box(154,156.4,.15,2.2,-9.2,-6.8,$(5593183),u),s.box(154,156.4,-9.2,-6.8),r.pl.add(I,Q(155.2,3.1,-8,.95,.8,.8),$(11027502)),r.pl.add(I,Q(154.2,4,-7.2,.45,.6,.35),$(11027502)),r.pl.add(I,Q(156.2,4,-7.2,.45,.6,.35),$(11027502)),ot(155.2,-6,6,[.6,.4,.2]),vt(_,4,[[160,-30,22]])}function Pt(_){let A=$(15392710),R=90,L=116,O=-164,N=-146;r.pl.box(R,L,.15,11,O,N,A,u),s.box(R,L,O,N),r.pl.box(R-.6,L+.6,11,11.8,O-.6,N+.6,$(16052194),u),r.pl.add(new Fn(1,16,8,0,Math.PI*2,0,Math.PI/2),Q(103,11.8,-155,5,4,5),$(12162618));for(let G=0;G<7;G++){let j=R+2.2+G*3.6,st=[1.3,.8,.3],wt=[2.8,2,.95];r.em.quad([j-.9,1.6,N+.06],[j+.9,1.6,N+.06],[j+.9,7.6,N+.06],[j-.9,7.6,N+.06],[st,st,wt,wt]),G<6&&r.pl.add(w,Q(j+1.8,4.9,N+.7,.4,9.5,.4),$(16052194))}for(let G of[96,103,110])J(G,6.5,N+.4,6,[1.6,1.1,.5]),ot(G,N+6,9,[.75,.5,.22]);r.pl.quad([101.5,.17,-128],[104.5,.17,-128],[104.5,.17,-146],[101.5,.17,-146],$(10097192)),K("\u0414\u0412\u041E\u0420\u0415\u0426 \u0413\u0410\u0419\u0421\u041B\u0415\u0420\u0410","#ffd98a",103,10.2,N+.1,12,"+z",!1),vt(_,12,[[103,-137,9]])}function Re(_){r.pl.box(223,267,.15,9.2,74,106,$(2830656),u),s.box(223,267,74,106);let N=[.25,.5,.7],G=[.7,1.2,1.6];r.em.quad([223-.06,.8,76],[223-.06,.8,104],[223-.06,4.2,104],[223-.06,4.2,76],[N,N,G,G]),r.em.quad([225,.8,106+.06],[265,.8,106+.06],[265,4.2,106+.06],[225,4.2,106+.06],[N,N,G,G]),r.em.quad([265,.8,74-.06],[225,.8,74-.06],[225,4.2,74-.06],[265,4.2,74-.06],[N,N,G,G]),K("\u0422\u0415\u0425\u041D\u041E\u0420\u0410\u041A \xB7 SSD \xB7 212 \u0413\u0411","#3df2ff",223-.2,6.6,90,16,"-x",!1),K("\u0422\u0415\u041B\u0415\u041A\u0418 \xB7 \u0416\u0414\u0418 \u0412 \u0421\u0411","#ffe23d",245,6.6,106+.2,14,"+z",!1),K("\u041F\u041E\u0414\u041F\u0418\u0421\u041A\u0410 EXTRA","#5d8bff",245,6.6,74-.2,14,"-z",!1),ot(218,90,14,[.25,.5,.7]),ot(245,111,14,[.25,.5,.7])}function te(_){V(r.fa,_.x0+4,_.x1-4,_.z0+4,_.z0+16.8,27.15,e(At));let A=-240,R=-228,L=160,O=168;r.pl.box(A,R,.15,4,L,O,$(3818064),u),s.box(A,R,L,O),r.em.quad([A+1,.9,O+.06],[R-1,.9,O+.06],[R-1,3,O+.06],[A+1,3,O+.06],[[.4,.9,.6],[.4,.9,.6],[.8,1.9,1.2],[.8,1.9,1.2]]),K("\u0427\u0418\u0421\u0422\u041A\u0410 PS5 \u041E\u0422 \u041F\u042B\u041B\u0418","#6dff8a",-234,4.9,O+.1,11,"+z"),K("\u0423\u041B. \u0412\u0410\u0422\u0423\u0422\u0418\u041D\u0410","#ffffff",-222,3.4,172.6,5,"+z"),Ne(r.pl,[-222,.15,172.5],[-222,3,172.5],.1,g),ot(-234,172,9,[.3,.8,.5]),vt(_,6)}let C=null;for(let _ of c)_.type==="classic"?Zt(_,_.ci===3||_.ci===4):_.type==="panel"?$t(_):_.type==="garages"?C=Gt(_).fire:_.type==="ind"?X(_):_.type==="zone"?ln(_):_.type==="park"?Ot(_,!0):_.type==="fpark"?Ot(_,!1):_.type==="opera"?qt(_):_.type==="palace"?Pt(_):_.type==="mall"?Re(_):_.type==="vatutina"&&te(_);{let R=$(15921128),L=$(10107434),O=$(14723100);r.pl.add(new tn(1,1.15,1,16),Q(140,.35,30,4.6,.7,4.6),u),r.pl.box(140-2.4,140+2.4,.7,6.4,30-2.4,30+2.4,R,u);for(let[G,j]of[[-2.4,-2.4],[2.4,-2.4],[-2.4,2.4],[2.4,2.4]])r.pl.box(140+G-.3,140+G+.3,.7,6.5,30+j-.3,30+j+.3,$(16513523),u);r.pl.box(140-2.55,140+2.55,.7,1.5,30-2.55,30+2.55,L),r.pl.box(140-2.7,140+2.7,6.4,6.75,30-2.7,30+2.7,L,u);for(let G of[-1,1])r.pl.add(F,Q(140,6.85,30+G*2.42,2.3,2.3,.3,0,0,Math.PI/4),R),r.pl.add(F,Q(140+G*2.42,6.85,30,.3,2.3,2.3,0,Math.PI/4,0),R);r.pl.add(new tn(1,1,1,8),Q(140,8.1,30,1.5,2.4,1.5),R);let N=[[.05,0],[1,.25],[1.25,.9],[.95,1.7],[.4,2.4],[.08,3.1]].map(G=>new bt(G[0],G[1]));r.pl.add(new To(N,12),Q(140,9.2,30,1.25,1.1,1.25),O),r.em.box(140-.07,140+.07,12.5,14.1,30-.07,30+.07,[2.2,1.5,.3]),r.em.box(140-.45,140+.45,13.4,13.55,30-.07,30+.07,[2.2,1.5,.3]);for(let[G,j]of[[0,2.45],[0,-2.45]]){let st=30+j+Math.sign(j)*.02,wt=[1.9,1.2,.5];j>0?r.em.quad([140-.6,1.5,st],[140+.6,1.5,st],[140+.6,4.2,st],[140-.6,4.2,st],wt):r.em.quad([140+.6,1.5,st],[140-.6,1.5,st],[140-.6,4.2,st],[140+.6,4.2,st],wt)}s.circle(140,30,4.7),ot(140,30,14,[.9,.6,.3]),J(140,10.6,30,5,[1.4,.9,.25])}let S=[];for(let _ of["tower1","tower2","tower3"]){let[A,R]=_n[_],L=26,O=$(9080729);for(let[N,G]of[[-1,-1],[1,-1],[1,1],[-1,1]])Ne(r.pl,[A+N*1.3,.15,R+G*1.3],[A+N*.25,L,R+G*.25],.09,O,4);for(let N=3;N<L;N+=4){let G=qe(1.3,.25,N/L);r.pl.box(A-G,A+G,N,N+.12,R-G,R+G,O)}r.em.box(A-.5,A+.5,L-4,L-2.2,R-.5,R+.5,[.3,1.6,.4]),s.circle(A,R,1.5),S.push({x:A,z:R,h:L})}for(let _ of[-1,1])for(let A=-170,R=0;A<=170;A+=20,R++)Math.abs(A+60)<12||Math.abs(A-120)<12||(R%2===0?H(_*55,A,_*55,A,4.6,b,9):Math.hypot(_*58.5-_n.dima[0],A-_n.dima[1])>8&&lt(_*58.5,A+(t()-.5)*6,.8+t()*.5));Ne(r.pl,[58,.15,-85],[58,9,-85],.22,g),Ne(r.pl,[58,.15,-75],[58,9,-75],.22,g),r.pl.box(58-.25,58+.25,5.5,12,-80-8.5,-80+8.5,g),s.circle(58,-85,.4),s.circle(58,-75,.4),K("\u0422\u0410 \u0421\u0410\u041C\u0410\u042F \u0418\u0413\u0420\u0410","#ff4fd8",58-.3,10.2,-80,15,"-x",!1),K("19.11.2026 \xB7 212 \u0413\u0411","#3df2ff",58-.3,7.8,-80,15,"-x",!1),K("\u0422\u0410 \u0421\u0410\u041C\u0410\u042F \u0418\u0413\u0420\u0410","#ff4fd8",58+.3,10.2,-80,15,"+x",!1),K("\u041E\u0421\u0412\u041E\u0411\u041E\u0414\u0418 \u041C\u0415\u0421\u0422\u041E","#ffd23d",58+.3,7.8,-80,15,"+x",!1);let Y=[[1.5,.9,.4],[1.5,.25,.3],[.3,1.4,.6],[.4,.7,1.6]];for(let _=-160,A=0;_<=160;_+=20)if(!(Ye.some(R=>Math.abs(_-R)<9)||Math.abs(_-30)<12)){for(let R=0;R<=10;R++){let L=R/10;J(129.5+L*21,7.6-Math.sin(L*Math.PI)*1.5,_,.9,Y[(A+R)%4])}A++}let pt=new Fn(1,6,4);for(let _ of c)for(let A=0;A<5;A++){let R=Math.floor(t()*4),L=t(),O=R<2?qe(_.x0+2,_.x1-2,L):R===2?_.x0+1:_.x1-1,N=R>=2?qe(_.z0+2,_.z1-2,L):R===0?_.z0+1:_.z1-1;s.near(O,N,1.2)||r.pl.add(pt,Q(O,.12,N,R<2?1.6+t()*1.6:.9,.35+t()*.3,R<2?.9:1.6+t()*1.6),u)}let ct=["#ff4fd8","#3df2ff","#ffd23d","#6dff8a"],ft=(_,A,R,L,O,N,G)=>{Ne(r.pl,[_,.15,A-5],[_,9,A-5],.22,g),Ne(r.pl,[_,.15,A+5],[_,9,A+5],.22,g),r.pl.box(_-.25,_+.25,5.5,12,A-8.5,A+8.5,g),s.circle(_,A-5,.4),s.circle(_,A+5,.4),K(R,ct[G%4],_-.3,10.2,A,15,"-x",!1),K(L,ct[(G+1)%4],_-.3,7.8,A,15,"-x",!1),K(O,ct[(G+2)%4],_+.3,10.2,A,15,"+x",!1),K(N,ct[(G+3)%4],_+.3,7.8,A,15,"+x",!1),J(_,12.4,A,3,[.9,.8,.6])};ft(-58,-10,"\u041F\u0415\u0419 \u041F\u0418\u0412\u041E","\u0420\u0423\u041A\u0418 \u0414\u041E\u041B\u0416\u041D\u042B \u0411\u042B\u0422\u042C \u0412 \u0420\u042B\u0411\u0415","\u0411\u041E\u0416\u0415, \u0425\u0420\u0410\u041D\u0418 \u041F\u0418\u0420\u0410\u0422\u041E\u0412","\u0410\u041C\u0418\u041D\u042C",0),ft(-58,70,"\u0414\u0410\u0412\u041D\u041E \u041D\u0415 \u0412\u041E\u0415\u0412\u0410\u041B\u0418","\u0413\u041E\u0423 \u0412\u0421\u0415 \u041D\u0410 \u0412\u041E\u0419\u041D\u0423","\u041F\u041E\u0422\u0415\u0420\u041F\u0418 \u0427\u0423\u0422\u042C-\u0427\u0423\u0422\u042C!!","\u041E\u041D\u041E \u0421\u0422\u041E\u0418\u0422 \u0422\u041E\u0413\u041E \u0412 20 \u041A\u0420\u0410\u0422",1),ft(-58,-130,"\u041A\u0410\u041A \u0420\u0410\u0417 \u041A 19-\u041C\u0423","\u0414\u041E\u041A\u0410\u0427\u0410\u0415\u0422\u0421\u042F","\u0411\u0410\u0422\u042F \u0412 \u0417\u0414\u0410\u041D\u0418\u0418!","\u0412\u0420\u0415\u041C\u0415\u041D\u0418 \u0422\u0423\u041F\u041E \u041D\u0415\u0422",2),ft(58,150,"\u0412\u041A\u041B\u042E\u0427\u0418\u041B, \u0412\u042B\u041A\u041B\u042E\u0427\u0418\u041B","\u0414\u0412\u0410 \u0414\u041D\u042F \u041F\u0420\u041E\u0428\u041B\u041E","\u0427\u0422\u041E \u042D\u0422\u041E?","\u0427\u0410\u0422 \u0412\u041B\u0410\u0414\u0415\u041B\u042C\u0426\u0415\u0412 PS5",3),ft(58,-130,"\u041E\u0427\u0415\u041D\u042C \u041F\u041B\u041E\u0425\u041E\u0415 \u0421\u041E\u041E\u0411\u0429\u0415\u041D\u0418\u0415","\u041E\u041D\u041E \u041C\u041D\u0415 \u041E\u0427\u0415\u041D\u042C \u041D\u0415 \u041D\u0420\u0410\u0412\u0418\u0422\u0421\u042F","\u041A\u0420\u041E\u041C\u0415 LOA \u0418 RDR","\u041D\u0418\u0427\u0415\u0413\u041E \u041D\u0415 \u0417\u0410\u0415\u0411\u0418\u0421\u042C",0);for(let _=0;_<90;_++){let A=t()*Math.PI*2,R=330+t()*240,L=Math.cos(A)*R*1.3,O=Math.sin(A)*R;if(Math.abs(L)<80||Math.abs(L)<300&&Math.abs(O)<200)continue;let N=16+Math.floor(t()*8)*3.2,G=12.8+Math.floor(t()*4)*3.2,j=.15+3*(7+Math.floor(t()*18)),st=t()<.6;B(st?r.fa:r.fb,L-N/2,L+N/2,O-G/2,O+G/2,.15,j,e(st?At:Ut)),r.pl.quad([L-N/2,j,O+G/2],[L+N/2,j,O+G/2],[L+N/2,j,O-G/2],[L-N/2,j,O-G/2],u),j>50&&J(L,j+1,O,5,[2,.15,.1])}for(let _ of en){let A=Ci(_),R=0;for(let L=-170;L<=170;L+=34,R++){if(Ye.some(N=>Math.abs(L-N)<9))continue;let O=R%2?1:-1;H(_+O*(A+.9),L,_+O*(A-1.6),L,8.2,_===140?p:m,13)}if(_===140)for(let L=-153;L<=170;L+=34)Ye.some(O=>Math.abs(L-O)<9)||(H(_+11.9,L,_+9.4,L,8.2,p,13),H(_-11.9,L,_-9.4,L,8.2,p,13))}for(let _ of Ye)for(let A of[0,4]){let R=0;for(let L=en[A]+22;L<en[A+3];L+=35,R++){if(en.some(N=>Math.abs(L-N)<Ci(N)+3))continue;let O=R%2?1:-1;H(L,_+O*7.9,L,_+O*5.4,8.2,m,13)}}for(let _ of qc)for(let A=-51;A<=51;A+=17)for(let R of[-1,1])H(A,_.z+R*8.1,A,_.z+R*6.2,7,b,11,-3,!0);let Lt=$(2895928);for(let _ of a){let A=_.bridge?r.br:r.pl;A.box(_.x-.12,_.x+.12,0,_.h,_.z-.12,_.z+.12,Lt),(_.x!==_.hx||_.z!==_.hz)&&A.box(Math.min(_.x,_.hx)-.08,Math.max(_.x,_.hx)+.08,_.h-.1,_.h+.1,Math.min(_.z,_.hz)-.08,Math.max(_.z,_.hz)+.08,Lt),(_.bridge?r.brE:r.em).box(_.hx-.3,_.hx+.3,_.h-.28,_.h-.1,_.hz-.3,_.hz+.3,v(_.c,5)),J(_.hx,_.h-.3,_.hz,_.h>6?3:2,v(_.c,1.6)),J(_.hx,_.h-.3,_.hz,_.h>6?8.5:5.5,v(_.c,.2)),ot(_.hx,_.hz,_.pr,v(_.c,_.h>6?.3:.25)),r.cone.add(P,Q(_.hx,_.h/2,_.hz,_.pr*.42,_.h,_.pr*.42),v(_.c,.36)),r.streak.bill(_.hx,2*_.my-_.h*1.1,_.hz,_.h>6?1.1:.8,_.h*.9,v(_.c,_.bridge?3.2:2.6))}for(let _ of qc){let A=_.z;r.br.box(-52,52,-.9,-.02,A-8.6,A+8.6,x,u);for(let R of[-1,1]){r.br.box(-52,52,0,1,A+R*8.45-.1,A+R*8.45+.1,$(4869978),u),s.box(-52,52,A+R*8.3-.3,A+R*8.3+.3,1);for(let L of[-1,1])s.box(L>0?40:-52,L>0?52:-40,A+R*8.6-.5,A+R*8.6+.5,0)}for(let R of[-1,1])s.box(R>0?41:-43,R>0?43:-41,A-8.6,A+8.6,2);for(let R of[-26,0,26])r.br.box(R-1.5,R+1.5,-3.2,-.9,A-6,A+6,$(5659236)),s.box(R-1.5,R+1.5,A-6,A+6,2);{let R=A===120?[1.3,.15,.1]:[.26,.95,1.15];for(let L of[-1,1]){r.brE.box(-52,52,-.5,-.34,A+L*8.64-.06,A+L*8.64+.06,R);for(let O of[-26,0,26])J(O,-1.7,A+L*6.3,2,v(R,1.3)),ot(O,A+L*9.5,11,v(R,.2),-2.93)}}if(A===120){let R=[1.5,.1,.07],L=50,O=30;for(let N of[-1,1]){let G=[];for(let j=0;j<=24;j++){let st=-L+2*L*j/24,wt=1-st/L*(st/L);G.push(new D(st,O*wt+.3,A+N*(9.2-5.5*wt)))}r.brE.add(new _r(new vs(G),48,.75,6),new fe,R);for(let j=-42;j<=42;j+=6)for(let st of[-7,7]){let wt=1-j/L*(j/L),he=we(j+st,-50,50);Ne(r.br,[j,O*wt,A+N*(9.2-5.5*wt)],[he,.9,A+N*8.4],.06,$(13159636),3)}}for(let N=0;N<=6;N++){let G=-30+N*10,j=1-G/L*(G/L);Ne(r.brE,[G,O*j+.3,A-(9.2-5.5*j)],[G,O*j+.3,A+(9.2-5.5*j)],.3,R,5)}J(0,O+1.5,A,7,[2.2,.2,.15]),ot(0,A,30,[.2,.02,.014],-2.93);for(let N of[-1,1])for(let G=-40;G<=40;G+=20){let j=1-G/L*(G/L);J(G,O*j+1.2,A+N*(9.2-5.5*j),2.2,[1.9,.22,.14])}}else{let R=$(6258566);for(let L=0;L<3;L++)for(let O of[-1,1]){let N=-34+L*34,G=[];for(let j=0;j<=12;j++){let st=-1+j/6,wt=10.5*(1-st*st)+.4;G.push(new D(N+st*17,wt,A+O*8.4)),j%2===0&&o.push(N+st*17,wt+.5,A+O*8.4,1.5,1.7,1.25,.6),j>0&&j<12&&Ne(r.br,[N+st*17,wt,A+O*8.4],[N+st*17,.9,A+O*8.4],.07,R,3)}r.br.add(new _r(new vs(G),20,.4,5),new fe,R),r.brE.add(new _r(new vs(G.map(j=>new D(j.x,j.y+.48,j.z))),20,.12,4),new fe,[.26,.95,1.15])}}}let yt=Nf(0,t),Tt=Nf(1,t),Ht=Ji({map:yt.map,emissiveMap:yt.emissiveMap,emissive:16777215,emissiveIntensity:1.5,vertexColors:!0}),Kt=Ji({map:Tt.map,emissiveMap:Tt.emissiveMap,emissive:16777215,emissiveIntensity:1.5,vertexColors:!0}),rt=Ji({vertexColors:!0}),ce=new dn({vertexColors:!0}),ee=new _s(it.cv);ee.colorSpace=ze,ee.anisotropy=4;let Wt=Ho("uniform sampler2D map; varying vec2 vUv; varying vec3 vC; varying float vF; void main(){ vec3 t = texture2D(map, vUv).rgb; gl_FragColor = vec4(t*t*2.6*vC*vF, 1.0); }",{map:{value:ee}}),Ft=ii(256,256,_=>{_.fillStyle="#eef2fa",_.fillRect(0,0,256,256);for(let A=0;A<60;A++){let R=t()*256,L=t()*256,O=10+t()*40,N=_.createRadialGradient(R,L,0,R,L,O);N.addColorStop(0,t()<.5?"rgba(196,208,232,0.5)":"rgba(255,255,255,0.6)"),N.addColorStop(1,"rgba(230,236,247,0)"),_.fillStyle=N,_.fillRect(R-O,L-O,O*2,O*2)}for(let A=0;A<500;A++)_.fillStyle=t()<.5?"rgba(255,255,255,0.9)":"rgba(170,185,215,0.5)",_.fillRect(t()*256,t()*256,1.5,1.5)}),Rt=ii(256,256,_=>{_.fillStyle="#20232b",_.fillRect(0,0,256,256);for(let A=0;A<1400;A++)_.fillStyle=`rgba(${150+t()*100},${160+t()*90},${190+t()*60},${t()*.16})`,_.fillRect(t()*256,t()*256,1+t()*2,1+t()*3);for(let[A,R]of[[.5,26],[.02,30],[.98,30]]){let L=_.createLinearGradient(A*256-R,0,A*256+R,0);L.addColorStop(0,"rgba(215,224,240,0)"),L.addColorStop(.5,A===.5?"rgba(190,200,222,0.5)":"rgba(228,234,246,0.98)"),L.addColorStop(1,"rgba(215,224,240,0)"),_.fillStyle=L,_.fillRect(A*256-R,0,R*2,256)}for(let A of[.2,.36,.64,.8]){let R=_.createLinearGradient(A*256-12,0,A*256+12,0);R.addColorStop(0,"rgba(8,9,12,0)"),R.addColorStop(.5,"rgba(8,9,12,0.75)"),R.addColorStop(1,"rgba(8,9,12,0)"),_.fillStyle=R,_.fillRect(A*256-12,0,24,256)}for(let A=0;A<50;A++){_.fillStyle="rgba(225,232,245,0.5)";let R=[.1,.28,.5,.72,.9][Math.floor(t()*5)];_.fillRect(R*256-8+t()*16,t()*256,3+t()*8,2+t()*4)}},{aniso:8}),Qt=ii(512,512,_=>{_.fillStyle="#1e3f5c",_.fillRect(0,0,512,512);for(let A=0;A<40;A++){let R=t()*512,L=t()*512,O=30+t()*90,N=_.createRadialGradient(R,L,0,R,L,O);N.addColorStop(0,t()<.65?"rgba(228,238,252,0.8)":"rgba(10,30,50,0.5)"),N.addColorStop(1,"rgba(30,63,92,0)"),_.fillStyle=N,_.fillRect(R-O,L-O,O*2,O*2)}_.strokeStyle="rgba(200,230,255,0.4)";for(let A=0;A<26;A++){_.lineWidth=.6+t()*1.6,_.beginPath();let R=t()*512,L=t()*512;_.moveTo(R,L);for(let O=0;O<6;O++)R+=(t()-.5)*120,L+=(t()-.5)*120,_.lineTo(R,L);_.stroke()}}),ge=new ys({map:Ft,vertexColors:!0}),Ce=new ys({map:Rt,transparent:!0,opacity:.88}),ne=new ys({map:Qt,transparent:!0,opacity:.68,color:14674678}),ht=(_,A,R=3)=>{let L=new oe(_,A);return L.castShadow=!!(R&1),L.receiveShadow=!!(R&2),L},z=new Be,xt=new Be,_t=new Be,zt=new Be,Bt=r.fa.build(),_e=r.fb.build(),ve=r.pl.build(),ke=r.em.build(),nn=r.sg.build(),ye=r.br.build(),sn=r.brE.build();z.add(ht(Bt,Ht),ht(_e,Kt),ht(ve,rt),ht(ke,ce,0),ht(nn,Wt,0)),xt.add(ht(Bt,Ht,0),ht(_e,Kt,0),ht(ve,rt,0),ht(ke,ce,0),ht(nn,Wt,0)),xt.scale.y=-1,_t.add(ht(ye,rt),ht(sn,ce,0)),zt.add(ht(ye,rt,0),ht(sn,ce,0)),zt.scale.y=-1,zt.position.y=-6;let zn=ht(r.gr.build(),ge,2),Or=ht(r.rd.build(),Ce,2);Or.renderOrder=-10;let zr=new de;zr.quad([-40,-3,900],[40,-3,900],[40,-3,-900],[-40,-3,-900],[1,1,1]),zr.worldUV(1/70);let ts=ht(zr.build(),ne,2);ts.renderOrder=-11,i.add(z,xt,_t,zt,zn,Or,ts);let Is=new oe(r.pool.build(),Ho("varying vec2 vUv; varying vec3 vC; varying float vF; void main(){ float r = length(vUv-0.5)*2.0; float a = pow(max(1.0-r,0.0),1.8); gl_FragColor = vec4(vC*a*vF,1.0); }"));Is.renderOrder=2;let di=new oe(r.cone.build(),Ho(`varying vec3 vC; varying float vF; varying vec3 vN; varying vec3 vV; varying vec2 vUv;
    void main(){ float f = abs(dot(normalize(vN), normalize(vV))); float a = f*f*pow(clamp(vUv.y,0.0,1.0),1.5); gl_FragColor = vec4(vC*a*vF,1.0); }`,{},`attribute vec3 color; varying vec2 vUv; varying vec3 vC; varying float vF; varying vec3 vN; varying vec3 vV; uniform float uFog;
    void main(){ vec4 mv = modelViewMatrix*vec4(position,1.0); gl_Position = projectionMatrix*mv; vUv = uv; vC = color; vN = normalMatrix*normal; vV = -mv.xyz; float d = length(mv.xyz); vF = exp(-uFog*uFog*d*d); }`));di.material.side=wn,di.renderOrder=3;let es=new oe(r.streak.build(),Ho(`varying vec2 vUv; varying vec3 vC; varying float vF;
    void main(){ float dx = (vUv.x-0.5)*3.6; float dy = (vUv.y-0.55)*2.4; float gx = exp(-dx*dx); float gy = exp(-dy*dy); gl_FragColor = vec4(vC*gx*gy*vF,1.0); }`,{},`attribute vec3 color; varying vec2 vUv; varying vec3 vC; varying float vF; uniform float uFog;
    void main(){ vec3 right = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]);
      vec3 wp = position + right*(uv.x-0.5)*2.0*normal.x + vec3(0.0,1.0,0.0)*(uv.y-0.5)*2.0*normal.y;
      vec4 mv = viewMatrix*vec4(wp,1.0); gl_Position = projectionMatrix*mv; vUv = uv; vC = color; float d = length(mv.xyz); vF = exp(-uFog*uFog*d*d); }`));es.frustumCulled=!1,es.renderOrder=-20,i.add(Is,di,es);let Ds=Zc(),Us=o.length/7,xa=new Float32Array(Us*3),_a=new Float32Array(Us),T=new Float32Array(Us*3);for(let _=0;_<Us;_++)xa.set(o.slice(_*7,_*7+3),_*3),_a[_]=o[_*7+3],T.set(o.slice(_*7+4,_*7+7),_*3);let k=new Me;k.setAttribute("position",new pe(xa,3)),k.setAttribute("aSize",new pe(_a,1)),k.setAttribute("aColor",new pe(T,3));let q=new Ai(k,Ds);q.frustumCulled=!1,q.renderOrder=5,i.add(q);let Z=new D(-.45,.62,-.64).normalize(),W=new Dt(.05,.058,.115),Mt=new oe(new Fn(900,24,16),new Xe({side:xn,depthWrite:!1,fog:!1,uniforms:{uMoon:{value:Z},uHor:{value:W},uTime:{value:0}},vertexShader:"varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`varying vec3 vDir; uniform vec3 uMoon; uniform vec3 uHor; uniform float uTime;
      float hs(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7)))*43758.5453); }
      float vn(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f); return mix(mix(hs(i), hs(i+vec2(1.,0.)), f.x), mix(hs(i+vec2(0.,1.)), hs(i+vec2(1.,1.)), f.x), f.y); }
      void main(){ vec3 d = normalize(vDir); d.y = abs(d.y); float h = d.y;
        float ih = clamp(1.0-h, 0.0, 1.0);
        vec3 c = mix(vec3(0.008,0.014,0.04), uHor, pow(ih, 3.2));
        c += vec3(0.30,0.15,0.10)*pow(ih, 7.0)*(0.55 + 0.45*d.x);
        float m = max(dot(d, uMoon), 0.0);
        // \u043E\u0431\u043B\u0430\u043A\u0430: \u0441\u043B\u043E\u0439 \u0448\u0443\u043C\u0430 \u043D\u0430 \xAB\u043F\u043E\u0442\u043E\u043B\u043A\u0435\xBB, \u0441\u043D\u0438\u0437\u0443 \u043F\u043E\u0434\u0441\u0432\u0435\u0447\u0435\u043D\u044B \u0433\u043E\u0440\u043E\u0434\u043E\u043C, \u0443 \u043B\u0443\u043D\u044B \u2014 \u0445\u043E\u043B\u043E\u0434\u043D\u044B\u043C
        vec2 uv = d.xz/(h + 0.16)*1.1 + vec2(uTime*0.006, uTime*0.002);
        float n = vn(uv)*0.55 + vn(uv*2.1 + 7.3)*0.3 + vn(uv*4.3 + 1.7)*0.15;
        float cl = smoothstep(0.46, 0.74, n)*smoothstep(0.03, 0.3, h);
        vec3 cc = mix(vec3(0.035,0.04,0.075), vec3(0.24,0.13,0.12), pow(ih, 2.2)*(0.6 + 0.4*d.x)) + vec3(0.22,0.27,0.38)*pow(m, 5.0);
        c = mix(c, cc, cl*0.8);
        c += vec3(0.75,0.85,1.0)*(smoothstep(0.9993,0.9996,m)*3.0*(1.0 - cl*0.85) + pow(m,90.0)*0.35 + pow(m,10.0)*0.08);
        gl_FragColor = vec4(c,1.0); }`}));Mt.renderOrder=-100,Mt.frustumCulled=!1,i.add(Mt),i.fog=new yo(W,sa.value),i.background=W;let It=new yr(new Dt(.3,.4,.78),new Dt(.2,.15,.17),.7),Ct=new Mr(new Dt(.58,.72,1),1);Ct.shadow.mapSize.set(2048,2048),Ct.shadow.bias=-6e-4,Ct.shadow.normalBias=.6;let kt=Ct.shadow.camera;kt.left=-110,kt.right=110,kt.top=110,kt.bottom=-110,kt.near=10,kt.far=520,i.add(It,Ct,Ct.target);let Yt=new de,Vt=15;for(let _ of[-1.2,1.2]){Yt.add(new xr(Vt,.2,5,48),Q(_,0,0,1,1,1,Math.PI/2),$(8029334));for(let A=0;A<12;A++){let R=A*Math.PI/6;Ne(Yt,[_,0,0],[_,Math.cos(R)*Vt,Math.sin(R)*Vt],.07,$(6976646),3)}}let Jt=[$(14238266),$(3836633),$(14725690),$(4899450)];for(let _=0;_<12;_++){let A=_*Math.PI/6+.26;Yt.add(F,Q(0,Math.cos(A)*Vt,Math.sin(A)*Vt,2,1.7,1.7,0,-A),Jt[_%4])}let Se=new Be;Se.position.set(103,17.4,-30),Se.add(new oe(Yt.build(),rt));let Je=48,He=new Float32Array(Je*3),Bn=new Float32Array(Je),Te=new Float32Array(Je*3),ie=[[2.2,.3,1.4],[.3,1.8,2.2],[2.2,1.5,.3],[.5,2.2,.8]];for(let _=0;_<Je;_++){let A=_/Je*Math.PI*2;He.set([0,Math.cos(A)*Vt,Math.sin(A)*Vt],_*3),Bn[_]=1.5,Te.set(ie[Math.floor(_/4)%4],_*3)}let Di=new Me;Di.setAttribute("position",new pe(He,3)),Di.setAttribute("aSize",new pe(Bn,1)),Di.setAttribute("aColor",new pe(Te,3));let Pe=new Ai(Di,Ds);Pe.frustumCulled=!1,Se.add(Pe),i.add(Se);let ti=new de;for(let _ of[-7,7])for(let A of[-2.4,2.4])Ne(ti,[103+A,.15,-30+_],[103+A*.5,17.4,-30],.28,$(5857907),5);let va=ht(ti.build(),rt,1);i.add(va),s.circle(103,-37,1.6),s.circle(103,-23,1.6);let ns=ii(64,64,_=>{let A=_.createRadialGradient(32,32,0,32,32,32);A.addColorStop(0,"rgba(255,255,255,0.9)"),A.addColorStop(1,"rgba(255,255,255,0)"),_.fillStyle=A,_.fillRect(0,0,64,64)},{repeat:!1}),Ns=[];for(let _ of l)for(let A=0;A<6;A++){let R=new mr(new xs({map:ns,color:new Dt(.34,.3,.36),transparent:!0,opacity:0,depthWrite:!1}));i.add(R),Ns.push({sp:R,s:_,ph:A/6})}let $e=new Xe({uniforms:{uTime:{value:0}},blending:Zn,transparent:!0,depthWrite:!1,vertexShader:"uniform float uTime; varying vec3 vN; varying vec3 vV; void main(){ vec3 p = position*(1.0+0.14*sin(uTime*3.0+position.y*3.0+position.x*2.0)); vec4 mv = modelViewMatrix*vec4(p,1.0); vN = normalize(normalMatrix*normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix*mv; }",fragmentShader:"uniform float uTime; varying vec3 vN; varying vec3 vV; void main(){ float f = clamp(1.0-abs(dot(normalize(vN),vV)),0.0,1.0); float a = f*f*1.8+0.06; vec3 c = mix(vec3(0.2,1.2,0.6), vec3(0.7,0.3,1.3), 0.5+0.5*sin(uTime*2.0+f*6.0)); gl_FragColor = vec4(c*a,1.0); }"}),pi=new Ro(2.3,2);for(let _ of h)_.mesh=new oe(pi,$e),_.mesh.position.set(_.x,2.2,_.z),i.add(_.mesh);let Fs={col:s,lamps:a,blocks:c,towers:S,anomalies:h,fire:C,moon:Ct,moonDir:Z,hemi:It,mirror:xt,bridgesM:zt,sky:Mt,cones:di,streaks:es,pools:Is,glowMat:Ds,mPL:rt,mEM:ce,roadsMat:Ce,update(_,A,R){Se.rotation.x+=_*.12,$e.uniforms.uTime.value=A;for(let L of h)L.x=L.x0+Math.sin(A*.7+L.ph)*3.2,L.z=L.z0+Math.cos(A*.55+L.ph*1.7)*3.2,L.mesh.position.set(L.x,2.2+Math.sin(A*2+L.ph)*.3,L.z);for(let L of Ns){let O=(A*.05+L.ph)%1;L.sp.position.set(L.s[0]+O*34,L.s[1]+O*22,L.s[2]+O*12);let N=5+O*26;L.sp.scale.set(N,N,1),L.sp.material.opacity=.5*(1-O)*zo(O*8)}Mt.position.copy(R.position),Mt.material.uniforms.uTime.value=A},setShadowCenter(_,A){let R=Math.round(_/4)*4,L=Math.round(A/4)*4;Ct.target.position.set(R,0,L),Ct.position.set(R+Z.x*260,Z.y*260,L+Z.z*260),Ct.target.updateMatrixWorld()},drawMap(_,A){let R=N=>(N+300)*A,L=N=>(N+200)*A;_.fillStyle="#0d1220",_.fillRect(0,0,600*A,400*A),_.fillStyle="#17304a",_.fillRect(R(-52),0,104*A,400*A),_.fillStyle="#21486b",_.fillRect(R(-40),0,80*A,400*A);let O={park:"#17382a",fpark:"#17382a",zone:"#2c2140",ind:"#2a2622",opera:"#3a3122",garages:"#2a2a2e",palace:"#33301f",mall:"#1d2a3c"};for(let N of c)_.fillStyle=O[N.type]||"#1a2132",_.fillRect(R(N.x0),L(N.z0),(N.x1-N.x0)*A,(N.z1-N.z0)*A);_.fillStyle="#465068";for(let N of en)_.fillRect(R(N-Ci(N)),L(-187),Ci(N)*2*A,374*A);for(let N of Ye)_.fillRect(R(-287),L(N-7),224*A,14*A),_.fillRect(R(63),L(N-7),224*A,14*A);_.fillStyle="#8b6f6f",_.fillRect(R(-63),L(-67),126*A,14*A),_.fillStyle="#c0483c",_.fillRect(R(-63),L(113),126*A,14*A),_.fillStyle="#d8c79a",_.beginPath(),_.arc(R(181),L(-30),14*A,0,7),_.fill(),_.fillStyle="#e0b040",_.beginPath(),_.arc(R(140),L(30),4*A,0,7),_.fill()}};return Fs.setShadowCenter(_n.start[0],_n.start[1]),Fs}var St={sph:new Fn(1,12,9),cyl:new tn(1,1,1,10),cone:new $n(1,1,8),box:new Nn(1,1,1)},Jc,zf,Bf,$_={arkasha:13123630,max:14375484,dima:856344,igor:15790320,geisler:12729170,pasha:14725168,nikita:13589043,kos:3117020,artem:5027914,sanya:10263708,misha:14180922},Ts=$(16053492),si=$(526346),Vo=$(14723100),K_=(i,t)=>[i[0]*t,i[1]*t,i[2]*t];function $c(i,t,e){let n=ii(128,128,r=>{r.clearRect(0,0,128,128),r.fillStyle=t,r.beginPath(),r.arc(64,64,60,0,7),r.fill(),r.strokeStyle=e,r.lineWidth=5,r.stroke(),r.fillStyle=e,r.font='900 58px "Arial Black", system-ui, sans-serif',r.textAlign="center",r.textBaseline="middle",r.fillText(i,64,68)},{repeat:!1}),s=new oe(new Ao(.19,20),new dn({map:n,transparent:!0}));return s.position.set(0,1.08,.405),s}function kf(i){Jc||(Jc=Ji({vertexColors:!0}),zf=new dn({vertexColors:!0}),Bf=Ji({vertexColors:!0,map:ii(128,128,F=>{F.fillStyle="#f2c94c",F.fillRect(0,0,128,128);let M=["#1b1b1b","#ffffff","#c0392b","#1f8a70","#8e6b00","#f7e08a"];for(let E=0;E<90;E++){F.fillStyle=M[E%M.length];let H=3+E*7%9;F.fillRect(E*37%128,E*53%128,H,H+E%3*3)}F.strokeStyle="#7a5a00",F.lineWidth=1.5;for(let E=0;E<9;E++)F.beginPath(),F.arc(E*47%128,E*71%128,6+E%4,0,5),F.stroke()})}));let t=new Be,e=new Be;t.add(e);let n=new de,s=new de,r=$($_[i]),a=K_(r,.6),o=i==="dima"?$(1449e3):i==="igor"?$(14474460):i==="pasha"?$(16111470):i==="sanya"?$(13158600):$(15912870),l=i==="igor"?si:r,c=i==="igor"?si:a,h=i==="pasha"?Bf:Jc,u=i==="arkasha",f=i==="nikita";n.add(St.sph,Q(0,1,0,.44,.56,.38),u?$(1316380):f?$(1513243):r),!u&&!f&&n.add(St.sph,Q(0,.98,.13,.33,.44,.28),o),n.add(St.sph,Q(0,1.62,.02,.4,.34,.36),r),n.add(St.box,Q(0,1.52,.34,.16,.03,.04),si);for(let F of[-1,1]){Ne(n,[F*.15,1.85,.1],[F*.19,2.12,.14],.035,r,5),n.add(St.sph,Q(F*.19,2.16,.15,.1,.1,.1),Ts),i==="dima"?s.add(St.sph,Q(F*.19,2.165,.235,.055,.055,.03),[.3,2.4,2.8]):n.add(St.sph,Q(F*.19,2.165,.235,.05,.05,.03),si),Ne(n,[F*.1,1.9,.25],[F*.45,2.55,-.2],.016,c,4);for(let M=0;M<3;M++)Ne(n,[F*.36,1-M*.17,0],[F*.6,.86-M*.17,.08],.035,c,4),Ne(n,[F*.6,.86-M*.17,.08],[F*.68,.6-M*.17,.14],.028,c,4)}n.add(St.sph,Q(0,.62,-.18,.36,.26,.3),l),n.add(St.sph,Q(0,.42,-.38,.3,.2,.26),c),n.add(St.sph,Q(0,.26,-.6,.3,.07,.24),l);for(let F of[-1,1])n.add(St.sph,Q(F*.26,.26,-.56,.2,.06,.2,F*.5),c);let d=F=>{let M=new de;Ne(M,[0,0,0],[F*.3,-.22,.2],.07,c,5),i==="max"?M.add(St.sph,Q(F*.36,-.26,.4,.27,.27,.27),$(13637656)):(M.add(St.sph,Q(F*.3,-.22,.2,.09,.09,.09),l),M.add(St.sph,Q(F*.36,-.26,.42,.2,.27,.18),l),M.add(St.cone,Q(F*.36,-.1,.74,.13,.5,.1,0,Math.PI/2-.28),l),M.add(St.cone,Q(F*.36,-.42,.66,.09,.36,.08,0,Math.PI/2+.32),c)),i==="artem"&&F>0&&(M.add(St.cyl,Q(.38,-.02,.5,.11,.26,.11),$(14721056)),M.add(St.cyl,Q(.38,.14,.5,.115,.06,.115),Ts)),i==="artem"&&F<0&&(M.add(St.sph,Q(-.38,.02,.56,.07,.11,.26),$(9082790)),M.add(St.cone,Q(-.38,.02,.86,.02,.14,.12,0,-Math.PI/2),$(6977414)));let E=new oe(M.build(),h);return E.position.set(F*.42,1.3,.05),E.castShadow=!0,e.add(E),E},g=F=>{let M=new de;M.add(St.cyl,Q(0,-.25,0,.09,.5,.09),c),M.add(St.sph,Q(0,-.5,.07,.13,.07,.2),l);let E=new oe(M.build(),h);return E.position.set(F*.17,.57,0),E.castShadow=!0,e.add(E),E},x=d(-1),m=d(1),p=g(-1),b=g(1),v=null;if(i==="arkasha")n.add(St.sph,Q(0,1.08,.2,.19,.36,.24),Ts),n.add(St.box,Q(-.09,1.4,.42,.14,.1,.05,0,0,.3),$(10097192)),n.add(St.box,Q(.09,1.4,.42,.14,.1,.05,0,0,-.3),$(10097192)),n.add(St.box,Q(0,1.4,.44,.05,.07,.05),$(6949916)),n.add(St.sph,Q(0,1.48,.2,.33,.2,.22),$(5913122));else if(i==="max")n.add(St.cyl,Q(0,.72,0,.43,.24,.37),$(1851304)),n.add(St.cyl,Q(0,.86,0,.44,.05,.38),Ts);else if(i==="dima")n.add(St.box,Q(0,1.08,-.42,.52,.62,.26),$(1712688)),n.add(St.box,Q(0,1.2,-.56,.3,.2,.06),$(2503240)),v={y:.4,c:[.25,.4,.7],s:4.5};else if(i==="igor")e.add($c("\u0418\u0411","#ffffff","#000000"));else if(i==="geisler"){n.add(St.cone,Q(0,.98,-.14,.66,1.3,.44),$(5906298)),n.add(St.cyl,Q(0,1.99,0,.2,.1,.2),Vo);for(let F=0;F<5;F++){let M=F*Math.PI*2/5;n.add(St.cone,Q(Math.sin(M)*.17,2.1,Math.cos(M)*.17,.04,.14,.04),Vo)}Ne(s,[0,2.75,0],[0,3,0],.015,[1.2,.9,.4],4);for(let F=0;F<6;F++){let M=F*Math.PI/3;s.add(St.sph,Q(Math.sin(M)*.26,2.72,Math.cos(M)*.26,.05,.07,.05),[3.2,2.3,1])}s.add(St.cyl,Q(0,2.76,0,.27,.02,.27),[1.4,1,.4]),v={y:2.72,c:[1.5,1,.45],s:2.6}}else if(i==="pasha")v={y:1.2,c:[.8,.55,.12],s:3.2};else if(i==="nikita")n.add(St.sph,Q(0,1.66,-.09,.45,.38,.36),$(1513243)),n.add(St.box,Q(0,2.16,.22,.62,.15,.1),si),s.add(St.box,Q(-.17,2.19,.275,.16,.02,.01),[.6,.8,1.2]);else if(i==="kos")e.add($c("\u0421\u041A","#35a7e8","#ffffff")),n.add(St.cyl,Q(0,1.46,.36,.09,.14,.09,0,Math.PI/2),$(3357235)),n.add(St.sph,Q(0,1.7,-.1,.43,.34,.34),$(4151860));else if(i==="artem")e.add($c("\u0410\u041A","#58c152","#ffffff"));else if(i==="sanya")n.add(St.sph,Q(0,1.47,.2,.33,.22,.22),$(2368548)),n.add(St.box,Q(.5,1,.14,.05,.36,.5),$(3159100)),s.add(St.box,Q(.53,1,.14,.01,.3,.44),[.5,.9,1.5]);else if(i==="misha"){n.add(St.cyl,Q(0,1.99,-.02,.27,.14,.27),$(7039802)),n.add(St.cyl,Q(0,1.93,-.02,.44,.03,.44),$(7039802));let F=-.52,M=1.62;n.add(St.sph,Q(F,M,0,.15,.13,.13),r);for(let E of[-1,1])n.add(St.sph,Q(F+E*.06,M+.16,.06,.04,.04,.04),Ts),n.add(St.sph,Q(F+E*.06,M+.165,.095,.02,.02,.015),si),n.add(St.sph,Q(F+E*.17,M+.02,.08,.06,.08,.05),r)}let w=$(13113384),U=new tn(1,1,1,3),P=new xr(.42,.035,6,20);if(i==="arkasha"){n.add(St.cone,Q(-.17,1.4,.45,.13,.3,.07,0,0,-Math.PI/2),w),n.add(St.cone,Q(.17,1.4,.45,.13,.3,.07,0,0,Math.PI/2),w),n.add(St.sph,Q(0,1.4,.46,.06,.06,.05),$(7998492));for(let F of[-1,1])n.add(St.box,Q(F*.15,1.13,.37,.1,.42,.03,0,0,-F*.38),$(2895930));n.add(St.box,Q(-.25,1.2,.36,.09,.06,.03),Ts)}else if(i==="max")n.add(St.cyl,Q(0,1.8,.02,.4,.07,.36),w),n.add(St.cyl,Q(0,.86,.37,.15,.05,.15,0,Math.PI/2),Vo);else if(i==="dima"){for(let F of[-1,1])n.add(St.box,Q(F*.2,1.15,.34,.07,.6,.05),$(2766930));s.add(St.box,Q(0,1.25,-.566,.18,.1,.02),[.3,2.2,2.6])}else if(i==="igor")n.add(St.cyl,Q(0,1.97,-.04,.52,.03,.48),si),n.add(St.cyl,Q(0,2.09,-.06,.24,.22,.22),si),n.add(St.cyl,Q(0,2.01,-.06,.246,.05,.226),Ts);else if(i==="pasha")s.add(P,Q(0,1.74,-.3),[1.7,1.15,.25]);else if(i==="kos"){n.add(St.sph,Q(0,1.56,.3,.21,.19,.14),$(2501414));for(let F of[-1,1])n.add(St.cyl,Q(F*.17,1.5,.41,.08,.1,.08,0,Math.PI/2),$(4870726));s.add(St.box,Q(.2,1,.4,.08,.12,.02),[.4,2.2,.6])}else if(i==="artem")n.add(U,Q(0,1.98,-.02,.56,.06,.56,Math.PI),$(1382172)),n.add(U,Q(0,1.975,-.02,.6,.02,.6,Math.PI),Vo),n.add(St.cyl,Q(0,2.07,-.04,.22,.16,.22),$(1382172)),n.add(St.box,Q(.19,2.16,.24,.12,.1,.03),si);else if(i==="sanya"){n.add(P,Q(0,1.64,0),$(1710622));for(let F of[-1,1])n.add(St.cyl,Q(F*.43,1.62,0,.13,.09,.13,0,0,Math.PI/2),$(1710622))}else i==="misha"?n.add(St.cone,Q(-.52,1.84,0,.11,.13,.11),$(15909424)):i==="nikita"?(n.add(St.box,Q(0,2.16,.23,.7,.18,.1),si),s.add(St.box,Q(.17,2.2,.285,.16,.025,.01),[.6,.8,1.2])):i==="geisler"&&s.add(St.sph,Q(0,2.26,.17,.045,.045,.045),[2.6,.4,.5]);let I=new oe(n.build(),h);return I.castShadow=!0,e.add(I),s.count&&e.add(new oe(s.build(),zf)),t.userData={id:i,inner:e,armL:x,armR:m,legL:p,legR:b,ph:Math.random()*6,glow:v},t}function ra(i,t,e,n){let s=i.userData,r=t*11,a=1-e,o=Math.pow(Math.max(0,Math.sin(t*1.9+s.ph)),10),l=n?1:0;s.inner.position.y=Math.abs(Math.sin(r))*.07*e+Math.sin(t*2+s.ph)*.025,s.inner.rotation.z=Math.sin(r)*.07*e+Math.sin(t*1.3+s.ph)*.045*a,s.inner.rotation.x=Math.sin(t*.9+s.ph)*.03*a,s.inner.rotation.y=Math.sin(t*.7+s.ph*2)*.12*a,s.inner.scale.y=1+Math.sin(t*2.4+s.ph)*.015,s.legL.rotation.x=Math.sin(r)*.9*e,s.legR.rotation.x=-Math.sin(r)*.9*e;let c=Math.sin(t*1.7+s.ph)*.1;s.armL.rotation.x=-Math.sin(r)*.5*e+c-o*.5*a-l*(.9+Math.sin(t*9)*.35),s.armR.rotation.x=Math.sin(r)*.5*e-c-Math.pow(Math.max(0,Math.sin(t*1.9+s.ph+1.6)),10)*.5*a-l*(.5+Math.cos(t*7)*.3),s.armL.rotation.z=-l*.3-o*.25*a,s.armR.rotation.z=l*.3+o*.25*a}function Kc(i,t){let e=ii(256,64,s=>{s.font='800 34px system-ui, "Segoe UI", sans-serif',s.textAlign="center",s.textBaseline="middle";let r=Math.min(250,s.measureText(i).width+36);s.fillStyle="rgba(10,14,24,0.78)",s.beginPath(),s.roundRect?s.roundRect(128-r/2,8,r,48,24):s.rect(128-r/2,8,r,48),s.fill(),s.fillStyle=t,s.fillText(i,128,34)},{repeat:!1}),n=new mr(new xs({map:e,transparent:!0,depthWrite:!1,fog:!1}));return n.scale.set(2.6,.65,1),n.position.y=2.95,n}var Hf=new tn(1,1,1,12),Qc,Vf,aa=$(15265528),Go=$(1053724),Q_=$(789518);function j_(i,t){let e=new de,n=new de,s=$(i),r=$(1382172),a=$(9410723),o=u=>{for(let f of[-.9,.9])for(let d of u)e.add(Hf,Q(f,.36,d,.37,.27,.37,0,0,Math.PI/2),Q_),e.add(Hf,Q(f*1.02,.36,d,.17,.29,.17,0,0,Math.PI/2),a)},l=(u,f,d,g,x,m,p,b,v)=>{e.quad([-p,u,d],[p,u,d],[b,f,x],[-b,f,x],Go),e.quad([p,u,g],[-p,u,g],[-b,f,m],[b,f,m],Go),e.quad([p,u,d],[p,u,g],[b,f,m],[b,f,x],Go),e.quad([-p,u,g],[-p,u,d],[-b,f,x],[-b,f,m],Go),e.quad([-b,f,x],[b,f,x],[b,f,m],[-b,f,m],v)};if(t==="van"){e.box(-.92,.92,.36,1.25,-2.25,2,s),e.box(-.95,.95,.3,.5,-2.3,2.1,r),l(1.25,2.02,2,-2.25,1.55,-2.2,.9,.86,aa);for(let u of[-1.5,-.4,.6])e.box(-.93,.93,1.25,2,u-.06,u+.06,s);n.box(-.5,.5,2.03,2.2,1.35,1.5,[2.4,1.5,.3]),o([-1.45,1.35])}else t==="plow"?(e.box(-1,1,.45,1.3,-2.4,2.2,s),e.box(-1.02,1.02,.34,.6,-2.45,2.25,r),l(1.3,2.15,2.2,.7,1.9,.75,.96,.9,aa),e.box(-.98,.98,1.3,2,-2.35,.55,$(3817290),aa),e.quad([-1.5,.12,2.75],[1.5,.12,3.05],[1.5,1,3.2],[-1.5,1,2.9],$(14263584)),e.quad([1.5,.12,3.05],[-1.5,.12,2.75],[-1.5,1,2.9],[1.5,1,3.2],$(9071120)),e.box(-.2,.2,.5,.8,2.2,2.9,r),n.box(-.14,.14,2.16,2.34,1.2,1.5,[2.6,1.3,.1]),o([-1.6,1.45])):(e.box(-.88,.88,.36,.93,-2.12,2.12,s),e.box(-.9,.9,.3,.5,-2.05,2.05,r),l(.93,1.47,.78,-1.28,.36,-.98,.84,.72,aa),e.box(-.86,.86,.93,1.46,-.34,-.26,s),e.box(-.92,.92,.4,.55,2.1,2.22,a),e.box(-.92,.92,.4,.55,-2.22,-2.1,a),e.box(-.45,.45,.6,.84,2.11,2.14,r),e.box(-.7,.7,.93,.97,1.15,2,aa),t==="mod"&&e.box(-.9,.9,.55,.75,-2.14,2.14,$(1724368)),o([-1.35,1.35]));let c=t==="plow"?2.22:t==="van"?2.02:2.14,h=t==="plow"?-2.42:t==="van"?-2.27:-2.14;for(let u of[-.62,.62])n.box(u-.17,u+.17,.62,.84,c,c+.04,[3.2,3,2.4]),n.box(u-.2,u+.2,.66,.82,h-.05,h,[2.6,.12,.08]);return[e.build(),n.build()]}var wr=class{constructor(t,e,n,s,r,a="sedan"){Qc||(Qc=Ji({vertexColors:!0}),Vf=new dn({vertexColors:!0}));let[o,l]=j_(r,a);this.g=new Be,this.body=new Be,this.g.add(this.body);let c=new oe(o,Qc);if(c.castShadow=!0,this.body.add(c,new oe(l,Vf)),a==="mod"){this.barMat=new dn({color:2245887});let h=new oe(new Nn(1.1,.14,.3),this.barMat);h.position.set(0,1.68,-.2),this.body.add(h)}this.g.rotation.order="YXZ",t.add(this.g),this.e={x:e,z:n,y:0,vx:0,vz:0,layer:0},this.e.y=$i(this.e),this.h=s,this.steer=0,this.vy=0,this.kind=a,this.color=r,this.ai=null,this.slip=0,this.maxSpeed=38,this.vf=0,this.roll=0,this.spin=0,this.stun=0,this.sync(0)}drive(t,e,n,s,r){let a=this.e,o=a.layer===2;this.steer+=(n-this.steer)*Math.min(1,t*9);let l=Math.sin(this.h),c=Math.cos(this.h),h=a.vx*l+a.vz*c,u=a.y>$i(a)+.5;u||(this.h-=this.steer*(2.6/(1+Math.abs(h)/28))*t*we(h/5,-1,1)),l=Math.sin(this.h),c=Math.cos(this.h);let f=-c,d=l;h=a.vx*l+a.vz*c;let g=a.vx*f+a.vz*d;if(!u){let x=this.maxSpeed*(o?.88:1),m=0;e>0?m=23*e*(1-we(h/x,0,1))*(h<-1?2:1):e<0&&(m=h>1?36*e:13*e*(1-we(-h/11,0,1))),o&&(m*=.5),h+=m*t,h-=h*(e===0?.8:.12)*t;let p=o?1:6;s&&(p*=.2,h-=h*1.3*t),this.slip=Math.abs(g),g-=g*Math.min(1,p*t)}return a.vx=l*h+f*g,a.vz=c*h+d*g,this.vf=h,this.roll+=(we(-g*.035,-.22,.22)-this.roll)*Math.min(1,t*6),this.move(t,r)}move(t,e){let n=this.e;n.x+=n.vx*t,n.z+=n.vz*t;let s=e.resolve(n,1.5,n.layer,.25);Math.abs(n.x)>Sr&&(n.x=Math.sign(n.x)*Sr,n.vx*=-.3),Math.abs(n.z)>Er&&(n.z=Math.sign(n.z)*Er,n.vz*=-.3);let r=$i(n);return this.vy>0||n.y>r+.4?(this.vy-=26*t,n.y+=this.vy*t,this.spin+=t*5,n.y<=r&&(n.y=r,this.vy=0,this.spin=0)):n.y+=(r-n.y)*Math.min(1,t*14),s}launch(t){this.vy=t,this.e.y+=.5}sync(){let t=this.e;this.g.position.set(t.x,t.y,t.z),this.g.rotation.set(this.spin,this.h,this.roll)}get speed(){return Math.hypot(this.e.vx,this.e.vz)}},vn=[];for(let i=0;i<en.length;i++)for(let t=0;t<Ye.length;t++)vn.push({x:en[i],z:Ye[t],xi:i,zi:t,nb:[]});var jc=(i,t)=>i*Ye.length+t;for(let i of vn){i.zi>0&&i.nb.push(jc(i.xi,i.zi-1)),i.zi<Ye.length-1&&i.nb.push(jc(i.xi,i.zi+1));for(let t of[-1,1]){let e=i.xi+t;if(e<0||e>=en.length)continue;(!(i.xi<4!=e<4)||Ye[i.zi]===-60||Ye[i.zi]===120)&&i.nb.push(jc(e,i.zi))}}function th(i,t,e=0,n=1e9){let s=-1,r=1e9;for(let a=0;a<vn.length;a++){let o=Math.hypot(vn[a].x-i,vn[a].z-t);o>=e&&o<=n&&o<r&&(r=o,s=a)}return s}var Gf=(i,t)=>i.x===140&&t.x===140?7.6:3.3;function Wf(i,t,e){let n=vn[t],s=vn[e],r=s.x-n.x,a=s.z-n.z,o=Math.hypot(r,a),l=r/o,c=a/o;i.ai={type:"traffic",from:t,to:e,sp:0,max:9+Math.random()*5};let h=Gf(n,s);i.e.x=n.x+l*o*.5-c*h,i.e.z=n.z+c*o*.5+l*h,i.h=Math.atan2(l,c),i.e.y=0,i.sync()}function Wo(i,t,e,n){let s=i.ai,r=i.e,a=vn[s.from],o=vn[s.to],l=o.x-a.x,c=o.z-a.z,h=Math.hypot(l,c),u=l/h,f=c/h,d=(r.x-a.x)*u+(r.z-a.z)*f;if(d>h-8){let F=s.from,M=o.nb.filter(E=>E!==F);s.from=s.to,s.to=M.length?M[Math.floor(Math.random()*M.length)]:F;return}let g=Math.min(d+8,h),x=Gf(a,o),m=a.x+u*g-f*x,p=a.z+f*g+u*x;i.h+=Ri(i.h,Math.atan2(m-r.x,p-r.z))*Math.min(1,t*3.2);let b=Math.sin(i.h),v=Math.cos(i.h),w=e-r.x,U=n-r.z,P=Math.hypot(w,U),I=s.max;i.stun>0&&(i.stun-=t,I=0),P<10&&(w*b+U*v)/(P+.01)>.55&&(I=0),s.sp+=(I-s.sp)*Math.min(1,t*2.5),r.vx=b*s.sp,r.vz=v*s.sp,r.x+=r.vx*t,r.z+=r.vz*t,r.y=$i(r),i.vf=s.sp,i.sync()}var Xo=class{constructor(t,e){let n=new Float32Array(e*3),s=new Float32Array(e);for(let a=0;a<e;a++)n[a*3]=Math.random(),n[a*3+1]=Math.random(),n[a*3+2]=Math.random(),s[a]=Math.random();let r=new Me;r.setAttribute("position",new pe(n,3)),r.setAttribute("aSeed",new pe(s,1)),this.u={uTime:{value:0},uCam:{value:new D},uBox:{value:new D(72,42,72)},uScale:ws,uCar:{value:new D},uCarDir:{value:new D(0,0,1)},uHead:{value:0}},this.n=e,this.pts=new Ai(r,new Xe({uniforms:this.u,blending:Zn,transparent:!0,depthWrite:!1,vertexShader:`attribute float aSeed; uniform float uTime; uniform vec3 uCam; uniform vec3 uBox; uniform float uScale; uniform vec3 uCar; uniform vec3 uCarDir; uniform float uHead;
        varying float vA; varying vec3 vC;
        void main(){ vec3 p = position*uBox;
          p.y -= uTime*(2.2 + aSeed*2.4);
          p.x += sin(uTime*0.6 + aSeed*40.0)*1.2 + uTime*1.7; p.z += cos(uTime*0.5 + aSeed*31.0)*1.2 + uTime*0.7;
          p = mod(p - uCam, uBox) - uBox*0.5 + uCam;
          vec4 mv = viewMatrix*vec4(p,1.0); gl_Position = projectionMatrix*mv; float d = max(-mv.z, 0.5);
          float big = step(0.94, fract(aSeed*7.31));
          gl_PointSize = clamp((0.07 + aSeed*0.08 + big*0.2)*uScale/d, 1.0, 44.0);
          float low = 1.0 - smoothstep(3.0, 15.0, p.y);
          vC = mix(vec3(0.5,0.62,0.95), vec3(1.0,0.76,0.5), low*0.8);
          vec3 tc = p - uCar; float al = dot(tc, uCarDir); float pr = length(tc - uCarDir*al);
          vC += vec3(1.8,1.7,1.4)*uHead*smoothstep(0.5,4.0,al)*(1.0-smoothstep(10.0,36.0,al))*(1.0-smoothstep(0.0,1.0,pr/(1.2+al*0.26)));
          vA = (0.3 + 0.55*low)*smoothstep(0.6,3.0,d)*(1.0-smoothstep(26.0,36.0,d))*mix(1.0, 0.4, big); }`,fragmentShader:"varying float vA; varying vec3 vC; void main(){ float r = length(gl_PointCoord-0.5)*2.0; gl_FragColor = vec4(vC*vA*(1.0-smoothstep(0.15,1.0,r)),1.0); }"})),this.pts.frustumCulled=!1,this.pts.renderOrder=8,t.add(this.pts)}density(t){this.pts.geometry.setDrawRange(0,Math.floor(this.n*t))}},oa=class{constructor(t,e=420){this.n=e,this.i=0;let n=new Me;this.p=new Float32Array(e*3),this.v=new Float32Array(e*3),this.t=new Float32Array(e*2).fill(-99),this.c=new Float32Array(e*3),n.setAttribute("position",new pe(this.p,3)),n.setAttribute("aVel",new pe(this.v,3)),n.setAttribute("aT",new pe(this.t,2)),n.setAttribute("aColor",new pe(this.c,3)),this.u={uTime:{value:0},uScale:ws},this.pts=new Ai(n,new Xe({uniforms:this.u,blending:Zn,transparent:!0,depthWrite:!1,vertexShader:`attribute vec3 aVel; attribute vec2 aT; attribute vec3 aColor; uniform float uTime; uniform float uScale; varying vec3 vC;
        void main(){ float age = uTime - aT.x; float k = clamp(age/aT.y, 0.0, 1.0);
          vec3 p = position + aVel*age; p.y -= 4.0*age*age;
          vec4 mv = modelViewMatrix*vec4(p,1.0); gl_Position = projectionMatrix*mv;
          gl_PointSize = (age < 0.0 || k >= 1.0) ? 0.0 : clamp(0.3*uScale/max(-mv.z,0.5)*(0.5+k), 1.0, 48.0);
          vC = aColor*(1.0-k)*(1.0-k); }`,fragmentShader:"varying vec3 vC; void main(){ float r = length(gl_PointCoord-0.5)*2.0; gl_FragColor = vec4(vC*(1.0-smoothstep(0.0,1.0,r)),1.0); }"})),this.pts.frustumCulled=!1,this.pts.renderOrder=9,t.add(this.pts),this.dirty=!1}emit(t,e,n,s,r,a,o,l,c,h){let u=this.i;this.i=(u+1)%this.n,this.p[u*3]=t,this.p[u*3+1]=e,this.p[u*3+2]=n,this.v[u*3]=s,this.v[u*3+1]=r,this.v[u*3+2]=a,this.t[u*2]=this.u.uTime.value,this.t[u*2+1]=o,this.c[u*3]=l,this.c[u*3+1]=c,this.c[u*3+2]=h,this.dirty=!0}burst(t,e,n,s,r,a,o,l,c){for(let h=0;h<s;h++){let u=Math.random()*6.283,f=Math.random()*2-1,d=Math.sqrt(1-f*f)*r*(.5+Math.random()*.5);this.emit(t,e,n,Math.cos(u)*d,f*r,Math.sin(u)*d,a*(.6+Math.random()*.4),o,l,c)}}update(t){if(this.u.uTime.value=t,this.dirty){let e=this.pts.geometry.attributes;e.position.needsUpdate=e.aVel.needsUpdate=e.aT.needsUpdate=e.aColor.needsUpdate=!0,this.dirty=!1}}},qo=class{constructor(t,e=700){this.n=e,this.i=0,this.p=new Float32Array(e*12);let n=new Me;n.setAttribute("position",new pe(this.p,3));let s=[];for(let r=0;r<e;r++)s.push(r*4,r*4+1,r*4+2,r*4,r*4+2,r*4+3);n.setIndex(s),this.m=new oe(n,new dn({color:329484,transparent:!0,opacity:.42,depthWrite:!1,side:wn})),this.m.frustumCulled=!1,this.m.renderOrder=1,t.add(this.m),this.last=null}seg(t,e,n,s,r,a,o){let l=s-t,c=a-n,h=Math.hypot(l,c)||1,u=-c/h*o,f=l/h*o,d=this.i*12,g=this.p;g[d]=t-u,g[d+1]=e,g[d+2]=n-f,g[d+3]=t+u,g[d+4]=e,g[d+5]=n+f,g[d+6]=s+u,g[d+7]=r,g[d+8]=a+f,g[d+9]=s-u,g[d+10]=r,g[d+11]=a-f,this.i=(this.i+1)%this.n,this.m.geometry.attributes.position.needsUpdate=!0}},Yo=class{constructor(t,e=400){this.n=e,this.k=0,this.p=new Float32Array(e*3),this.s=new Float32Array(e),this.c=new Float32Array(e*3);let n=new Me;n.setAttribute("position",new pe(this.p,3)),n.setAttribute("aSize",new pe(this.s,1)),n.setAttribute("aColor",new pe(this.c,3)),this.pts=new Ai(n,Zc()),this.pts.frustumCulled=!1,this.pts.renderOrder=6,t.add(this.pts)}begin(){this.k=0}add(t,e,n,s,r,a,o){let l=this.k;l>=this.n||(this.p[l*3]=t,this.p[l*3+1]=e,this.p[l*3+2]=n,this.s[l]=s,this.c[l*3]=r,this.c[l*3+1]=a,this.c[l*3+2]=o,this.k++)}end(){let t=this.pts.geometry.attributes;t.position.needsUpdate=t.aSize.needsUpdate=t.aColor.needsUpdate=!0,this.pts.geometry.setDrawRange(0,this.k)}},Tr=class{constructor(t){let e=new Xe({uniforms:{uColor:{value:new Dt(1,.8,.2)},uTime:{value:0},uFog:sa},blending:Zn,transparent:!0,depthWrite:!1,side:wn,vertexShader:"varying vec2 vUv; varying float vF; uniform float uFog; void main(){ vUv = uv; vec4 mv = modelViewMatrix*vec4(position,1.0); float d = length(mv.xyz); vF = exp(-uFog*uFog*d*d*0.25); gl_Position = projectionMatrix*mv; }",fragmentShader:"uniform vec3 uColor; uniform float uTime; varying vec2 vUv; varying float vF; void main(){ float iy = clamp(1.0-vUv.y, 0.0, 1.0); float a = pow(iy, 2.2)*0.9 + 0.05*iy; a *= 0.75 + 0.25*sin(uTime*4.0 - vUv.y*30.0); gl_FragColor = vec4(uColor*a*vF*1.6, 1.0); }"});this.mat=e,this.g=new Be;let n=new oe(new tn(1.3,2.2,70,20,1,!0),e);n.position.y=35,this.g.add(n),this.ring=new oe(new Co(3.6,4.4,40),new dn({color:16763955,transparent:!0,opacity:.9,blending:Zn,depthWrite:!1,side:wn})),this.ring.rotation.x=-Math.PI/2,this.ring.position.y=.3,this.g.add(this.ring),this.g.visible=!1,this.g.renderOrder=7,t.add(this.g)}set(t,e,n,s){this.g.position.set(t,e,n),this.g.visible=!0,this.mat.uniforms.uColor.value.setHex(s),this.ring.material.color.setHex(s)}hide(){this.g.visible=!1}update(t){this.mat.uniforms.uTime.value=t;let e=1+Math.sin(t*3)*.12;this.ring.scale.set(e,e,1)}};var As=i=>440*Math.pow(2,(i-69)/12),tv={maj:[0,2,4,5,7,9,11],min:[0,2,3,5,7,8,10],dor:[0,2,3,5,7,9,10],hmin:[0,2,3,5,7,8,11],phr:[0,1,3,5,7,8,10]},Qn=(i,t,e)=>{let n=tv[t],s=Math.floor(e/7);return i+n[(e%7+7)%7]+12*s},ev="0123456789abcde",Xf=i=>i==="z"?-1:i==="y"?-2:i==="x"?-3:ev.indexOf(i),An={arkasha:{name:"\u0421\u0432\u0438\u043D\u0433 \u0432 \u0431\u0430\u0431\u043E\u0447\u043A\u0435",bpm:132,sb:4,steps:16,sw8:.6,root:50,sc:"dor",seven:1,g:.92,rv:.2,prog:[0,3,0,[4,"hmin"]],d:{h:"x...x.x.x...x.x.",k:"x.......x.......",b:"....x.......x..."},b:{i:"walk",p:"0...2...4...6...",o:2},c:{i:"organ",p:"......x.......x.",len:2,o:1},l:{i:"vibe",o:1,bars:["4...7...6.4.....","3...6...4.3.....","4...7...9.7.6...","4.......2.0....."]}},max:{name:"\u0424\u043E\u043D\u043A \u043D\u0430 \u0440\u0438\u043D\u0433\u0435",bpm:138,sb:4,steps:16,root:52,sc:"phr",g:1,rv:.12,prog:[0,0,5,6],d:{k:"x.....x...x.....",c:"....x.......x...",h:"x.x.x.x.x.x.xxxx"},b:{i:"808",p:"0-----0---0--7--",o:1},c:{i:"pad",p:"x...............",len:16,o:1,v:.5},l:{i:"cowbell",o:1,bars:["7.7.5.7.....4.5.","7.7.5.7...8.7.5.","5.5.4.5.....2.4.","6.6.5.6...7...4."]}},dima:{name:"\u0421\u0438\u043D\u0442\u0432\u0435\u0439\u0432 11.1.4",bpm:104,sb:4,steps:16,root:50,sc:"min",g:.64,rv:.3,prog:[0,5,2,6],d:{k:"x...x...x...x...",s:"....x.......x...",h:"..x...x...x...x."},b:{i:"pluck",p:"0.0.0.0.0.0.0.7.",o:2},c:{i:"pad",p:"x...............",len:16,o:1},a:{i:"pluck",p:"0123012301230123",o:1,v:.5},l:{i:"saw",o:1,bars:["7---....6.4-....","5---....4.2-....","4---..5.7---....","6---..4.2---...."]}},igor:{name:"\u0412\u0435\u0441\u0442\u0435\u0440\u043D, \u0447\u0435\u0442\u0432\u0451\u0440\u0442\u043E\u0435 \u043F\u0440\u043E\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u0435",bpm:96,sb:4,steps:16,root:57,sc:"dor",g:1.12,rv:.34,prog:[0,0,6,3,0,0,6,0],d:{r:"x..x..x.x..x..x.",sh:"x.x.x.x.x.x.x.x.",k:"x.......x......."},b:{i:"walk",p:"0.......4.......",o:2},c:{i:"strum",p:"....x.......x...",len:4,o:1},l:{i:"twang",o:0,i2:"whistle",o2:1,bars:["0.....2.4...7...","6...4.......2.4.","6.....4.2...4...","0-----......z.0.","7---....9.7.6...","4---........6.7.","6.....7.6.4.2...","0-------........"]}},geisler:{name:"\u041A\u043B\u0430\u0432\u0435\u0441\u0438\u043D \u0447\u0435\u0440\u0435\u0437 \u041C\u0435\u0433\u0430\u0444\u043E\u043D",bpm:112,sb:4,steps:16,root:55,sc:"min",g:1.5,rv:.3,fx:"modem",prog:[0,3,6,2,5,3,[4,"hmin"],0],d:{k:"x.......x.......",h:"....x.......x..."},b:{i:"harpsi",p:"0.......0...4...",o:2},a:{i:"harpsi",p:"0212021202120212",o:0,v:.8},l:{i:"harpsi",o:1,rel:1,bars:["7.....6.4...2...","4.....2.0...z..."]}},pasha:{name:"\u0417\u043E\u043B\u043E\u0442\u043E\u0439 \u0432\u0430\u043B\u044C\u0441",bpm:168,sb:4,steps:12,root:62,sc:"maj",g:1.7,rv:.36,prog:[0,0,1,4,0,5,1,4],d:{tr:"x..........."},b:{i:"walk",p:"0-..........",o:2,v:1.6},c:{i:"pizz",p:"....x...x...",len:2,o:0,v:1.8},l:{i:"glock",o:1,v:.75,bars:["4---....7...","9---....7...","8---....6...","4-------....","4---....7...","b---....9...","8...6...4...","7-------...."]}},nikita:{name:"\u0427\u0438\u043F\u0442\u044E\u043D \u0438\u0437 \u0442\u0440\u0435\u0442\u044C\u0435\u0439 \u0438\u0433\u0440\u044B",bpm:150,sb:4,steps:16,root:60,sc:"maj",g:.72,rv:.06,prog:[0,4,5,3],d:{k:"x...x...x...x...",s:"....x.......x...",h:"x.x.x.x.x.x.x.x."},b:{i:"chip",p:"0.0.7.0.0.0.7.0.",o:1},a:{i:"chip",p:"0123012301230123",o:1,v:.45},l:{i:"square",o:1,bars:["4.4.7...9.7.4...","4.4.6...8.6.4...","2.2.5...7.5.2...","3.5.7.9.7...5..."]}},kos:{name:"\u0417\u043E\u043D\u0430. \u0422\u0440\u0435\u0441\u043A \u2014 \u044D\u0442\u043E \u043D\u043E\u0440\u043C\u0430\u043B\u044C\u043D\u043E",bpm:64,sb:4,steps:16,root:48,sc:"phr",g:.68,rv:.6,fx:"geiger",prog:[0,0,5,4],d:{k:"x..x............"},b:{i:"sub",p:"0---------------",o:1,v:.45},c:{i:"drone",p:"x...............",len:16,o:1},l:{i:"bell",o:1,v:1.7,bars:["....7.......4...","........2.......","....5.......7...","........4.....3."]}},artem:{name:"\u041F\u0438\u0440\u0430\u0442\u0441\u043A\u0430\u044F \u0434\u0436\u0438\u0433\u0430",bpm:104,sb:6,steps:12,root:62,sc:"min",g:.8,rv:.22,prog:[0,6,0,[4,"hmin"]],d:{k:"x.....x.....",c:"...x.....x..",sh:"x.x.x.x.x.x."},b:{i:"walk",p:"0-....4-....",o:2},c:{i:"reed",p:"x...........",len:12,o:0},l:{i:"fiddle",o:1,bars:["0.2.4.7.4.2.","6.4.2.4.2.z.","0.2.4.7.9.7.","6.4.z.0-...."]}},sanya:{name:"\u041B\u043E\u0443-\u0444\u0430\u0439, \u043D\u0430\u0447\u0430\u043B\u043E \u0442\u044F\u0433\u043E\u043C\u043E\u0442\u043D\u043E\u0435",bpm:72,sb:4,steps:16,sw16:.28,root:53,sc:"maj",seven:1,g:.72,rv:.3,lp:5200,fx:"vinyl",prog:[0,2,1,4],d:{k:"x.....x...x.....",s:"....x.......x...",h:"x.x.x.x.x.x.x.x."},b:{i:"sub",p:"0-----0---4-----",o:1,v:.6},c:{i:"rhodes",p:"x.......x.......",len:7,o:1},l:{i:"vibe",o:1,bars:["....4...7.....6.","....4.......2...","....3...5.....4.","....2..........."]}},misha:{name:"\u0423\u043A\u0443\u043B\u0435\u043B\u0435 \u0443 \u043A\u043E\u0441\u0442\u0440\u0430",bpm:116,sb:4,steps:16,root:60,sc:"maj",g:1,rv:.2,prog:[0,3,0,4],d:{k:"x.......x.......",sh:"x.x.x.x.x.x.x.x.",c:"....x.......x..."},b:{i:"walk",p:"0.......4.......",o:2},c:{i:"strum",p:"x..x.xx.x..x.xx.",len:2,o:1,v:.7},l:{i:"whistle",o:1,bars:["4...4.6.7...4...","5...5.7.8...5...","4...4.6.7.9.7...","6...4...2......."]}}},qf={arkasha:{prog:[3,6,2,[4,"hmin"]],bars:["7...9...8.7.....","6...8...7.6.....","4...6...5.4.2...","3.......4.6....."]},max:{prog:[3,3,1,0],bars:["a.a.9.a.....7.9.","a.a.9.a...b.a.9.","8.8.7.8.....5.7.","7.....5.4...2..."]},dima:{prog:[3,6,2,[4,"hmin"]],bars:["9---....8.7-....","8---....7.6-....","7---..9.b---....","8---..7.6---...."]},igor:{prog:[3,3,0,0,6,6,3,[4,"hmin"]],bars:["3.....5.7...9...","7...5.......3.5.","4.....2.0...2...","4-----......2.4.","6---....8.6.4...","6---........4.6.","7.....5.3...5...","4-------........"]},geisler:{prog:[2,6,5,2,3,0,[4,"hmin"],0],bars:["9.....7.6...4...","6.....4.2...0..."]},pasha:{prog:[3,3,0,0,1,4,0,0],bars:["7---....9...","b---....9...","9---....7...","4-------....","8---....6...","4...6...8...","7---....4...","7-------...."]},nikita:{prog:[3,4,2,5],bars:["7.7.9...b.9.7...","8.8.9...b.9.8...","6.6.7...9.7.6...","7.9.b.c.b...9..."]},kos:{prog:[5,5,3,0],bars:["....9.......7...","........5.......","....7.......8...","........7.....5."]},artem:{prog:[2,6,3,[4,"hmin"]],bars:["2.4.7.9.7.4.","6.8.a.8.6.4.","3.5.7.a.7.5.","6.4.z.0-...."]},sanya:{prog:[3,2,1,0],bars:["....7...9.....8.","....6.......4...","....5...7.....6.","....4..........."]},misha:{prog:[5,3,0,4],bars:["7...7.9.a...7...","7...5.7.8...5...","4...4.6.7.9.7...","8...6...4......."]}};for(let i in qf)An[i].B=qf[i];An.kos.nofill=An.pasha.nofill=1;function nv(i,t){let e=Math.floor(i.sampleRate*t),n=i.createBuffer(2,e,i.sampleRate);for(let s=0;s<2;s++){let r=n.getChannelData(s);for(let a=0;a<e;a++)r[a]=(Math.random()*2-1)*Math.pow(1-a/e,2.8)}return n}var la=class{constructor(t,e){this.c=t,this.th=null,this.id=null,this.step=0,this.next=0,this.sd=.1,this.drive=0,this.rush=0,this.sum=t.createGain(),this.trim=t.createGain(),this.tone=t.createBiquadFilter(),this.tone.type="lowpass",this.tone.frequency.value=16e3,this.air=t.createBiquadFilter(),this.air.type="highshelf",this.air.frequency.value=2800,this.air.gain.value=5,this.sum.connect(this.air),this.air.connect(this.tone),this.tone.connect(this.trim),this.trim.connect(e),this.rev=t.createConvolver(),this.rev.buffer=nv(t,2),this.revIn=t.createGain(),this.revIn.connect(this.rev),this.revOut=t.createGain(),this.rev.connect(this.revOut),this.revOut.connect(this.sum),this.dry=t.createGain(),this.dry.connect(this.sum),this.w1=t.createGain(),this.w1.connect(this.sum),this.s1=t.createGain(),this.s1.gain.value=.28,this.w1.connect(this.s1),this.s1.connect(this.revIn),this.w2=t.createGain(),this.w2.connect(this.sum),this.s2=t.createGain(),this.s2.gain.value=.7,this.w2.connect(this.s2),this.s2.connect(this.revIn);let n=t.createBuffer(1,t.sampleRate*2,t.sampleRate),s=n.getChannelData(0);for(let r=0;r<s.length;r++)s[r]=Math.random()*2-1;this.noise=n}_dest(t,e){let n=t===2?this.w2:t===1?this.w1:this.dry;if(!e||!this.c.createStereoPanner)return n;let s=this.c.createStereoPanner();return s.pan.value=e,s.connect(n),s}_o(t,e,n,s,r,a={}){let o=this.c,l=o.createOscillator(),c=o.createGain(),h=a.a||.004;if(l.type=t,a.from?(l.frequency.setValueAtTime(e*a.from,n),l.frequency.exponentialRampToValueAtTime(e,n+(a.st||.05))):(l.frequency.setValueAtTime(e,n),a.to&&l.frequency.exponentialRampToValueAtTime(a.to,n+(a.st||s))),a.det&&(l.detune.value=a.det),a.vib){let f=o.createOscillator(),d=o.createGain();f.frequency.value=a.vib,d.gain.setValueAtTime(0,n),d.gain.linearRampToValueAtTime(e*.011,n+Math.min(.3,s*.6)),f.connect(d),d.connect(l.frequency),f.start(n),f.stop(n+s+.2)}if(c.gain.setValueAtTime(1e-4,n),c.gain.linearRampToValueAtTime(r,n+h),a.sus){let f=Math.min(a.rel||.08,s*.5);c.gain.setValueAtTime(r,n+Math.max(h,s-f)),c.gain.linearRampToValueAtTime(1e-4,n+s+.01)}else c.gain.exponentialRampToValueAtTime(1e-4,n+h+s);let u=l;if(a.lp){let f=o.createBiquadFilter();f.type=a.ft||"lowpass",f.frequency.setValueAtTime(a.lp,n),a.lpTo&&f.frequency.exponentialRampToValueAtTime(a.lpTo,n+(a.lt||s)),f.Q.value=a.q||.7,l.connect(f),u=f}u.connect(c),c.connect(this._dest(a.w,a.pan)),l.start(n),l.stop(n+s+h+.06)}_n(t,e,n,s,r,a={}){let o=this.c,l=o.createBufferSource(),c=o.createBiquadFilter(),h=o.createGain(),u=a.a||.001;l.buffer=this.noise,c.type=s,c.frequency.value=r,c.Q.value=a.q||.7,h.gain.setValueAtTime(1e-4,t),h.gain.linearRampToValueAtTime(n,t+u),h.gain.exponentialRampToValueAtTime(1e-4,t+u+e),l.connect(c),c.connect(h),h.connect(this._dest(a.w,a.pan)),l.start(t,Math.random()*1.5),l.stop(t+e+u+.05)}drum(t,e,n){if(t==="k")this._o("sine",165,e,.26,n*.9,{to:46,st:.11}),this._o("triangle",330,e,.06,n*.3,{to:95,st:.05}),this._n(e,.012,n*.25,"highpass",2600);else if(t==="s")this._n(e,.16,n*.7,"bandpass",2200,{q:.5,w:1}),this._o("triangle",215,e,.085,n*.4,{to:150});else if(t==="h")this._n(e,.035,n*.42,"highpass",7600,{pan:.25});else if(t==="o")this._n(e,.2,n*.32,"highpass",7e3,{pan:.25});else if(t==="c"){for(let s=0;s<3;s++)this._n(e+s*.011,.02,n*.35,"bandpass",1350,{q:.9});this._n(e+.033,.12,n*.5,"bandpass",1350,{q:.9,w:1})}else t==="r"?(this._o("triangle",1180,e,.03,n*.45,{to:820,w:1,pan:-.3}),this._n(e,.018,n*.2,"bandpass",2400,{q:2})):t==="sh"?this._n(e,.05,n*.3,"bandpass",6200,{q:.8,a:.012,pan:-.25}):t==="b"?this._n(e,.12,n*.45,"bandpass",3600,{q:.4,a:.02,w:1}):t==="tr"&&(this._o("sine",2637,e,.9,n*.12,{w:2,pan:.4}),this._o("sine",5290,e,.5,n*.05,{w:2,pan:.4}))}bass(t,e,n,s,r){t==="808"?(this._o("sine",n,e,s*1.1,r*.8,{from:1.8,st:.045}),this._o("square",n*2,e,s*.8,r*.3,{lp:1400,lpTo:400}),this._o("sawtooth",n*3,e,s*.4,r*.1,{lp:2e3})):t==="sub"?(this._o("sine",n,e,s,r*.5,{sus:1,rel:.1,a:.02}),this._o("triangle",n*2,e,s,r*.4,{sus:1,rel:.1,a:.02}),this._o("sawtooth",n*2,e,s,r*.16,{lp:900,sus:1,rel:.1,a:.02})):t==="pluck"?(this._o("sawtooth",n,e,Math.min(s,.32),r*.8,{lp:1500,lpTo:230,q:2}),this._o("square",n*2,e,.12,r*.16,{lp:1200})):t==="walk"?(this._o("triangle",n,e,Math.min(s,.42),r*.8,{}),this._o("sine",n*2,e,.24,r*.4,{}),this._o("sawtooth",n*2,e,.14,r*.16,{lp:1400})):t==="chip"?(this._o("square",n,e,Math.min(s,.14),r*.5,{sus:1,rel:.02}),this._o("square",n*2,e,.06,r*.14,{sus:1,rel:.02})):t==="harpsi"&&(this._o("sawtooth",n,e,.5,r*.6,{lp:2600,lpTo:500}),this._o("square",n*2,e,.2,r*.25,{lp:3e3}))}chord(t,e,n,s,r){let a=n.length;n.forEach((o,l)=>{let c=As(o),h=a>1?(l/(a-1)-.5)*.7:0;t==="pad"?(this._o("sawtooth",c,e,s,r*.16,{det:-9,lp:1900,sus:1,a:Math.min(.5,s*.3),rel:.4,w:2,pan:h}),this._o("sawtooth",c,e,s,r*.16,{det:9,lp:1900,sus:1,a:Math.min(.5,s*.3),rel:.4,w:2,pan:-h})):t==="drone"?(this._o("sawtooth",c,e,s,r*.2,{det:-6,lp:700,sus:1,a:s*.4,rel:s*.4,w:2,pan:h}),this._o("sine",c*2,e,s,r*.12,{sus:1,a:s*.45,rel:s*.4,w:2,pan:-h,vib:.3})):t==="organ"?(this._o("sine",c,e,s,r*.24,{sus:1,rel:.03,w:1,pan:h}),this._o("sine",c*2,e,s,r*.14,{sus:1,rel:.03,w:1,pan:h}),this._o("sine",c*3,e,s,r*.08,{sus:1,rel:.03,w:1,pan:h})):t==="rhodes"?(this._o("sine",c,e,s*1.2,r*.34,{w:1,pan:h,a:.008}),this._o("sine",c*4,e,s*.3,r*.08,{w:1,pan:h}),this._o("triangle",c*2,e,s*.6,r*.12,{w:1,pan:h})):t==="pizz"?(this._o("triangle",c,e,.2,r*.3,{w:2,pan:h}),this._o("sine",c*2,e,.1,r*.1,{w:2,pan:h})):t==="reed"?(this._o("square",c,e,s,r*.07,{det:-7,lp:2300,sus:1,a:.04,rel:.08,w:1,pan:h,vib:5.5}),this._o("sawtooth",c,e,s,r*.08,{det:7,lp:2300,sus:1,a:.04,rel:.08,w:1,pan:-h})):t==="strum"&&this.lead("uke",e+l*.014,c,.45,r*.5,h)})}lead(t,e,n,s,r,a=.12){if(t==="saw")this._o("sawtooth",n,e,s,r*.25,{det:-8,lp:3800,q:1,sus:1,rel:.1,a:.02,vib:5.5,w:2,pan:a}),this._o("sawtooth",n,e,s,r*.25,{det:8,lp:3800,q:1,sus:1,rel:.1,a:.02,w:2,pan:-a});else if(t==="vibe"||t==="bell"||t==="glock"){let o=t==="glock"?2:1;this._o("sine",n*o,e,s*1.6+.4,r*(t==="glock"?.3:.5),{w:2,pan:a}),this._o("sine",n*o*4,e,s*.5+.1,r*.1,{w:2,pan:a}),t!=="vibe"&&this._o("sine",n*o*6.8,e,.12,r*.035,{w:2,pan:a})}else t==="twang"?(this._o("sawtooth",n,e,.6,r*.55,{from:1.025,st:.07,lp:3400,lpTo:520,q:4,lt:.35,w:2,pan:a}),this._o("square",n,e,.25,r*.08,{lp:1800,w:2,pan:a})):t==="whistle"?(this._o("sine",n,e,s,r*.42,{sus:1,a:.05,rel:.1,vib:5.3,w:2,pan:a}),this._o("sine",n*2,e,s,r*.06,{sus:1,a:.05,rel:.1,w:2,pan:a}),this._n(e,s,r*.02,"bandpass",n*2,{q:3,a:.04,w:2})):t==="square"?(this._o("square",n,e,s,r*.16,{sus:1,rel:.02,pan:a}),this._o("square",n*2,e,s,r*.04,{sus:1,rel:.02,pan:-a})):t==="cowbell"?(this._o("square",n,e,.24,r*.34,{lp:2600,ft:"bandpass",q:1.6,w:1,pan:a}),this._o("square",n*1.504,e,.2,r*.24,{lp:2600,ft:"bandpass",q:1.6,w:1,pan:a})):t==="fiddle"?this._o("sawtooth",n,e,s,r*.34,{lp:3900,q:1.2,sus:1,a:.03,rel:.05,vib:6,w:1,pan:a}):t==="harpsi"?(this._o("sawtooth",n,e,.42,r*.38,{lp:6e3,lpTo:1100,w:1,pan:a}),this._o("square",n*2,e,.16,r*.14,{lp:7e3,w:1,pan:a})):t==="uke"?(this._o("triangle",n,e,s,r*.5,{w:1,pan:a}),this._o("sawtooth",n,e,s*.5,r*.22,{lp:3600,lpTo:800,w:1,pan:a})):(t==="pluck"||t==="chip")&&this._o(t==="chip"?"square":"sawtooth",n,e,.16,r*(t==="chip"?.1:.22),t==="chip"?{sus:1,rel:.02,pan:a}:{lp:2400,lpTo:500,q:2,w:1,pan:a})}fx(t,e,n){if(t==="geiger"){let s=2+Math.random()*9;for(let r=e+Math.random()*.2;r<e+n;r+=-Math.log(1-Math.random()*.98)/s)this._n(r,.004,.26+Math.random()*.14,"highpass",2800,{pan:Math.random()-.5});Math.random()<.3&&this._n(e+Math.random()*n,.9,.05,"bandpass",420,{q:9,w:2})}else if(t==="vinyl"){for(let s=e;s<e+n;s+=-Math.log(1-Math.random()*.98)/7)this._n(s,.003,.03+Math.random()*.06,"highpass",1800,{pan:Math.random()-.5});this._n(e,n,.012,"lowpass",5e3,{a:.02})}else if(t==="modem"){let s=[1070,1270,2025,2225,980,1650,1850];for(let r=0;r<16;r++)this._o("sine",s[Math.floor(Math.random()*s.length)],e+r*.045,.04,.035,{sus:1,rel:.005,pan:.5});this._n(e+.72,.35,.03,"bandpass",1800,{q:.5,pan:.5})}}setTheme(t){let e=An[t],n=this.c.currentTime;if(!(!e||this.id===t&&!this.pend||this.pend===t)){if(this.id===t){this.pend=null,this.trim.gain.setTargetAtTime(e.g||1,n,.08);return}if(!this.th||n===0)return this._apply(t,n);this.pend=t,this.pendAt=n+.34,this.trim.gain.setTargetAtTime(1e-4,n,.09)}}_apply(t,e){let n=An[t];this.th=n,this.id=t,this.pend=null,this.step=0,this.next=Math.max(this.next,e+.06),this.tone.frequency.setTargetAtTime(n.lp||16e3,e,.1),this.trim.gain.setTargetAtTime(n.g||1,e,.08),this.revOut.gain.setTargetAtTime(.5+(n.rv||.25),e,.1)}tones(t,e){let n=this.sect(t,e).B?t.B.prog:t.prog,s=n[e%n.length],r=Array.isArray(s)?s[0]:s,a=Array.isArray(s)?s[1]:t.sc,o=[Qn(t.root,a,r),Qn(t.root,a,r+2),Qn(t.root,a,r+4)];return t.seven&&o.push(Qn(t.root,a,r+6)),{d:r,sc:a,ms:o}}sect(t,e){let n=t.prog.length,s=Math.floor(e/n)%4;return{n:s,B:s===2&&!!t.B,last:e%n===n-1,first:e%n===0}}hold(t,e){let n=1;for(;e+n<t.length&&t[e+n]==="-";)n++;return n}schedule(t){this.pend&&this.c.currentTime>=this.pendAt&&this._apply(this.pend,this.c.currentTime);let e=this.th;if(e)for(;this.next<t;){this.sd=60/(e.bpm*(1+.1*this.rush))/e.sb;let n=this.step%e.steps,s=Math.floor(this.step/e.steps),r=this.next;e.sw8&&n%4===2?r+=this.sd*e.sw8:e.sw16&&n%2===1&&(r+=this.sd*e.sw16),this.playStep(e,s,n,r),this.step++,this.next+=this.sd}}playStep(t,e,n,s){let r=this.sd,a=this.tones(t,e),o=this.drive;for(let c in t.d)t.d[c][n]==="x"&&this.drum(c,s,1);let l=this.sect(t,e);if(!t.nofill&&l.last&&n>=t.steps-t.sb&&this.drum(t.d.s?"s":"r",s,.45+.18*(n-(t.steps-t.sb))),n===0&&l.first&&e>0&&this._n(s,.9,.08,"highpass",5200,{w:2}),o>.4&&(n%2===1&&this.drum("h",s,.8*o),n%t.sb===t.sb>>1&&this.drum("r",s,.7*o),n%t.sb===0&&!(t.d.k&&t.d.k[n]==="x")&&this.drum("k",s,.7*o)),t.b){let c=t.b.p[n];c!=="."&&c!=="-"&&this.bass(t.b.i,s,As(Qn(t.root,a.sc,a.d+Xf(c))-12*t.b.o),this.hold(t.b.p,n)*r,.4*(t.b.v||1))}if(t.c&&t.c.p[n]==="x"&&this.chord(t.c.i,s,a.ms.map(c=>c+12*t.c.o),t.c.len*r,t.c.v||1),t.a){let c=t.a.p[n];if(c!=="."){let h=+c,u=a.ms[h%a.ms.length]+12*Math.floor(h/a.ms.length)+12*t.a.o;this.lead(t.a.i,s,As(u),r*1.5,t.a.v||.6,n%2?.35:-.35)}}if(t.l){let c=l.B?t.B.bars:t.l.bars,h=e%c.length,u=c[h],f=u[n];if(f!=="."&&f!=="-"){let d=t.l.i2&&h>=t.l.bars.length/2,g=(t.l.rel?a.d:0)+Xf(f);this.lead(d?t.l.i2:t.l.i,s,As(Qn(t.root,a.sc,g)+12*(d?t.l.o2:t.l.o)),this.hold(u,n)*r,t.l.v||1),l.n===1&&!d&&this.lead(t.l.i,s,As(Qn(t.root,a.sc,g)+12*(t.l.o+1)),this.hold(u,n)*r,(t.l.v||1)*.28,-.3)}}t.fx&&n===0&&(t.fx!=="modem"||e%4===3)&&this.fx(t.fx,s,t.steps*r)}sting(t,e){let n=this.th||An.dima,s=(r,a=1)=>As(Qn(n.root,n.sc,r)+12*a);t==="win"?([0,2,4,7].forEach((r,a)=>{this.lead("vibe",e+a*.085,s(r),.3,1.1),this.lead("saw",e+a*.085,s(r,0),.12,.7)}),this.chord("pad",e+.34,[s(0,0),s(2,0),s(4,0),s(7,0)],.9,1.2),this._n(e+.34,.9,.1,"highpass",6e3,{w:2})):t==="start"?(this.lead("vibe",e,s(4),.2,.9),this.lead("vibe",e+.11,s(7),.35,.9)):t==="fail"?([4,3,2,0].forEach((r,a)=>this.lead("saw",e+a*.13,s(r,0),.16,.9)),this.drum("k",e+.52,1)):t==="trophy"?[4,7,9,11].forEach((r,a)=>this.lead("glock",e+a*.07,s(r,0),.25,.9)):t==="final"&&([0,2,4,7,9,11,14].forEach((r,a)=>{this.lead("glock",e+a*.09,s(r,0),.4,1),this.lead("saw",e+a*.09,s(r,0),.14,.6)}),this.chord("pad",e+.63,[s(0,0),s(2,0),s(4,0),s(7,0)],2.4,1.5),this.drum("k",e+.63,1.2),this._n(e+.63,1.8,.14,"highpass",5e3,{w:2}))}},Yf={arkasha:["organ",[4,4,7],.16,0],max:["bell",[9,9,9],.12,1],dima:["saw",[0,7,4,11],.07,1],igor:["whistle",[7,9,7,4],.11,1],geisler:["harpsi",[0,2,4,7,9,11],.06,1],pasha:["glock",[7,11],.14,0],nikita:["square",[0,4,7,11,14],.05,1],kos:["geiger",[0],.3,0],artem:["reed",[0,0],.32,-1],sanya:["whistle",[7,4,2,0],.16,0],misha:["square",[11,9],.09,2]},ca=class i{constructor(){this.ctx=null,this.muted=!1,this.intensity=.5,this.music=null,this.eng=null,this.rush=0,this.chase=0,this.want=null}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;this.master=e.createGain(),this.master.gain.value=.9,i.chain(e,this.master,e.destination),this.musicG=e.createGain(),this.musicG.gain.value=.7,this.musicG.connect(this.master),this.music=new la(e,this.musicG),this.want&&this.music.setTheme(this.want),this.sfx=e.createGain(),this.sfx.gain.value=.65,this.sfx.connect(this.master),this.fxm=new la(e,this.sfx),this.fxm.th=An.dima;let n=e.createOscillator(),s=e.createOscillator(),r=e.createBiquadFilter(),a=e.createGain();n.type="sawtooth",s.type="square",r.type="lowpass",r.frequency.value=500,r.Q.value=2,a.gain.value=0,n.connect(r),s.connect(r),r.connect(a),a.connect(this.sfx),n.start(),s.start();let o=this.music.noise,l=e.createBufferSource();l.buffer=o,l.loop=!0;let c=e.createBiquadFilter();c.type="bandpass",c.frequency.value=1500,c.Q.value=.8;let h=e.createGain();h.gain.value=0,l.connect(c),c.connect(h),h.connect(this.sfx),l.start();let u=e.createBufferSource();u.buffer=o,u.loop=!0;let f=e.createBiquadFilter();f.type="lowpass",f.frequency.value=420;let d=e.createGain();d.gain.value=.04,u.connect(f),f.connect(d),d.connect(this.sfx),u.start();let g=e.createOscillator(),x=e.createGain();g.type="square",x.gain.value=0;let m=e.createBiquadFilter();m.type="lowpass",m.frequency.value=1800,g.connect(m),m.connect(x),x.connect(this.sfx),g.start(),this.eng={o1:n,o2:s,f:r,g:a,sg:h,siren:g,sirenG:x}}static chain(t,e,n){let s=t.createDynamicsCompressor();s.threshold.value=-20,s.knee.value=12,s.ratio.value=3.5,s.attack.value=.008,s.release.value=.18;let r=t.createDynamicsCompressor();r.threshold.value=-5,r.knee.value=0,r.ratio.value=20,r.attack.value=.002,r.release.value=.09,e.connect(s),s.connect(r),r.connect(n)}setMuted(t){this.muted=t,this.ctx&&this.master.gain.setTargetAtTime(t?0:.9,this.ctx.currentTime,.05)}setTheme(t){this.want=t,this.music&&this.music.setTheme(t)}get theme(){return this.music?this.music.id:this.want}sting(t){let e=this.ctx;!e||e.state!=="running"||(this.fxm.th=this.music&&this.music.th||An.dima,this.fxm.sting(t,e.currentTime+.02))}horn(t){let e=this.ctx;if(!e||e.state!=="running")return;let n=Yf[t]||Yf.dima,s=An[t]||An.dima,r=e.currentTime+.02,a=this.fxm;if(n[0]==="geiger"){a.fx("geiger",r,.5),a._n(r,.5,.2,"bandpass",300,{q:6});return}n[1].forEach((o,l)=>{let c=As(Qn(s.root,s.sc,o)+12*n[3]);n[0]==="reed"||n[0]==="organ"?a.chord(n[0],r+l*n[2],[Qn(s.root,s.sc,o)+12*n[3],Qn(s.root,s.sc,o+4)+12*n[3]],n[2]*.9,2.2):a.lead(n[0],r+l*n[2],c,n[2]*1.2,1.5)})}mumble(t){let e=this.ctx;if(!e||e.state!=="running")return 0;let n=this.fxm,s=e.currentTime+.03,r=Math.min(3.2,.8+t*.06),a=s,o=150;for(;a<s+r;){let l=.035+Math.random()*.05;o=Math.max(110,Math.min(260,o+(Math.random()-.5)*70));let c=[500,800,1100,1500,2100][Math.floor(Math.random()*5)];n._o("sawtooth",o*1.9,a,l,.5,{lp:c,ft:"bandpass",q:5,sus:1,rel:.012,a:.008,to:o*1.9*(.9+Math.random()*.25)}),a+=l+(Math.random()<.14?.07:.004)}return r}tick(t,e,n,s,r){let a=this.ctx;if(!a||a.state!=="running")return;let o=a.currentTime,l=this.music;l.drive+=((s?1:0)-l.drive)*.05,l.rush+=(this.rush-l.rush)*.02,this.musicG.gain.setTargetAtTime(.5+.28*this.intensity,o,.3),l.next<o-.3&&(l.next=o+.05),l.schedule(o+.22);let c=r==="plow"?.6:r==="van"?.8:r==="mod"?1.18:1,h=this.eng,u=n?(.035+t*.045)*(r==="plow"?1.35:1):0,f=t*(r==="plow"?3:4)%1,d=(46+t*60+f*34)*c;h.g.gain.setTargetAtTime(u,o,.1),h.o1.frequency.setTargetAtTime(d,o,.06),h.o2.frequency.setTargetAtTime(d*.5,o,.06),h.f.frequency.setTargetAtTime(300+t*1300,o,.1),h.sg.gain.setTargetAtTime(n?Math.min(.2,Math.max(0,e-3)*.028):0,o,.05),h.sirenG.gain.setTargetAtTime(s?.028:0,o,.1),h.siren.frequency.setTargetAtTime(o*1.6%1<.5?660:880,o,.02)}play(t){let e=this.ctx;if(!e||e.state!=="running")return;let n=e.currentTime+.005,s=this.fxm;if(t==="msg")s._o("sine",880,n,.09,.16,{}),s._o("sine",1320,n+.07,.13,.13,{w:1});else if(t==="voice")s._o("triangle",520,n,.08,.12,{});else if(t==="pick")s._o("triangle",988,n,.1,.18,{}),s._o("triangle",1319,n+.06,.14,.18,{}),s._o("triangle",1976,n+.12,.22,.12,{w:1});else if(t==="step")s._o("square",660,n,.09,.07,{lp:3e3}),s._o("square",990,n+.09,.15,.07,{lp:3e3,w:1});else if(t==="win")s.sting("win",n);else if(t==="bump")s._o("sine",90,n,.18,.55,{to:40}),s._n(n,.12,.28,"lowpass",900);else if(t==="honk")s._o("square",392,n,.25,.06,{sus:1,rel:.03,lp:2500}),s._o("square",494,n,.25,.06,{sus:1,rel:.03,lp:2500});else if(t==="door")s._n(n,.08,.32,"lowpass",500),s._o("sine",140,n,.1,.3,{to:70});else if(t==="bad")s.sting("fail",n);else if(t==="zap")s._o("sawtooth",1400,n,.4,.14,{to:90,lp:4e3}),s._n(n,.3,.2,"highpass",3e3,{w:1});else if(t==="tick")s._o("square",1200,n,.05,.08,{lp:4e3});else if(t==="bell"){for(let[r,a]of[[196,.4],[392,.2],[587,.14],[784,.08]])s._o("sine",r,n,3.2,a,{w:2});s._n(n,.05,.2,"highpass",2e3)}else t==="boom"?(s._o("sine",120,n,.5,.5,{to:35}),s._n(n,.7,.22,"lowpass",1400,{w:1}),s._n(n+.1,.9,.06,"highpass",5e3,{w:2})):t==="crash"?(s._n(n,.16,.3,"bandpass",1800,{q:.5}),s._o("triangle",320,n,.12,.2,{to:120}),s._n(n+.03,.25,.12,"highpass",4500,{w:1})):t==="squeak"?s._o("sine",900,n,.11,.16,{to:1750}):t==="radio"&&(s._n(n,.12,.1,"bandpass",2400,{q:1.5}),s._o("sine",1700,n+.02,.06,.05,{to:900}))}static render(t,e,n={}){let r=new OfflineAudioContext(2,Math.floor(44100*e),44100),a=r.createGain();a.gain.value=.9,i.chain(r,a,r.destination);let o=r.createGain();o.gain.value=.5+.28*(n.intensity===void 0?.5:n.intensity),o.connect(a);let l=new la(r,o);return l.drive=n.drive||0,l.rush=n.rush||0,l.next=.05,l.setTheme(t),l.tone.frequency.value=An[t].lp||16e3,l.trim.gain.value=An[t].g||1,l.revOut.gain.value=.5+(An[t].rv||.25),l.schedule(e-.05),n.sting&&l.sting(n.sting,e*.5),r.startRendering()}};var pn=[{id:"arkasha",name:"\u0410\u0440\u043A\u0430\u0448\u0430",css:"#c8402e",tag:"\u0412\u043B\u0430\u0434\u0435\u043B\u0435\u0446 \u0447\u0430\u0442\u0430",desc:"\u041A\u043E\u0441\u0442\u044E\u043C, \u0431\u0430\u0431\u043E\u0447\u043A\u0430, \u0431\u043E\u0440\u043E\u0434\u0430. \u0421\u0447\u0438\u0442\u0430\u0435\u0442 \u0434\u043D\u0438 \u0434\u043E \u0440\u0435\u043B\u0438\u0437\u0430. 600 \u043C\u0435\u0433\u0430\u0431\u0438\u0442, \u043D\u043E \u043D\u0430 PS5 \u043D\u0435\u0442 212 \u0413\u0411 \u2014 \u043F\u0440\u0438\u0434\u0451\u0442\u0441\u044F \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0412\u0435\u0434\u044C\u043C\u0430\u043A\u0430.",quotes:["\u041C\u0435\u0441\u044F\u0446...","21 \u0434\u0435\u043D\u044C..","\u0412\u0441\u0435 \u0442\u0430\u043A, \u0442\u043E\u043B\u044C\u043A\u043E \u043D\u0430\u043E\u0431\u043E\u0440\u043E\u0442","212 \u0433\u0431, \u0430\u0445\u0443\u0435\u0442\u044C","\u0412\u0435\u0434\u044C\u043C\u0430\u043A\u0430 \u043F\u0440\u0438\u0434\u0451\u0442\u0441\u044F \u0443\u0434\u0430\u043B\u0438\u0442\u044C\u{1F601}\u{1F601}","\u0423 \u043C\u0435\u043D\u044F 600 \u043C\u0435\u0433\u0430 \u0431\u0438\u0442, \u0432\u0441\u0435 \u043F\u0440\u044F\u043C \u0445\u043E\u0440\u043E\u0448\u043E)","\u0412\u0435\u0434\u044C\u043C\u0430\u043A \u043A\u043E\u043D\u0435\u0447\u043D\u043E \u043B\u0435\u0433\u0435\u043D\u0434\u0430","\u0421\u043A\u0430\u0437\u0430\u0442\u044C \u0447\u0442\u043E \u044D\u0442\u043E \u0448\u0435\u0434\u0435\u0432\u0440 \u2014 \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u0441\u043A\u0430\u0437\u0430\u0442\u044C","\u0412\u043A\u043B\u044E\u0447\u0438\u043B, \u0432\u044B\u043A\u043B\u044E\u0447\u0438\u043B, \u0434\u0432\u0430 \u0434\u043D\u044F \u043F\u0440\u043E\u0448\u043B\u043E"]},{id:"max",name:"\u041C\u0430\u043A\u0441",css:"#e2603f",tag:"\u0413\u043E\u043B\u043E\u0441\u043E\u0432\u044B\u0435, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043D\u0438\u043A\u0442\u043E \u043D\u0435 \u0441\u043B\u0443\u0448\u0430\u0435\u0442",desc:"\u0411\u043E\u043A\u0441\u0451\u0440 \u0441 \u0433\u043E\u043B\u044B\u043C \u0442\u043E\u0440\u0441\u043E\u043C. \u041A\u0443\u043F\u0438\u043B 007 \xAB\u0443 \u0442\u0438\u043F\u043E\u0432\xBB \u0437\u0430 390 \u20BD, \u043A\u043E\u0433\u0434\u0430 \u0434\u0438\u0441\u043A \u043D\u0430 \u0410\u0432\u0438\u0442\u043E \u0441\u0442\u043E\u0438\u0442 5000. \u0416\u0434\u0451\u0442 \u043D\u043E\u0432\u044B\u0439 \u0442\u0435\u043B\u0435\u043A.",quotes:["\u041E\u0447\u0435\u043D\u044C \u043F\u043B\u043E\u0445\u043E\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435. \u041E\u043D\u043E \u043C\u043D\u0435 \u043E\u0447\u0435\u043D\u044C \u043D\u0435 \u043D\u0440\u0430\u0432\u0438\u0442\u0441\u044F","\u042F \u043A\u0443\u043F\u0438\u043B \u0437\u0430 390\u{1F602}","\u0414\u0438\u0441\u043A \u043D\u0430 \u0430\u0432\u0438\u0442\u043E \u0441\u0442\u043E\u0438\u0442 5000 \u0440\u0443\u0431","\u041F\u043E\u0442\u0435\u0440\u043F\u0438 \u0447\u0443\u0442\u044C-\u0447\u0443\u0442\u044C!! \u041E\u043D\u043E \u0441\u0442\u043E\u0438\u0442 \u0442\u043E\u0433\u043E \u0432 20 \u043A\u0440\u0430\u0442","\u041B\u0435\u0442\u0441 \u0433\u043E\u0443 \u043D\u0430\u0445\u0443\u0439","\u0412 \u0441\u0431 \u043F\u0440\u0438\u0435\u0434\u0435\u0442 \u043D\u043E\u0432\u044B\u0439 \u0442\u0435\u043B\u0435\u043A \u0438 \u044F \u0437\u0430\u0441\u044F\u0434\u0443 \u043D\u0430 \u043C\u0435\u0441\u044F\u0446)))","\u041C\u0435\u043D\u044F \u0440\u0430\u0437\u044A\u0435\u0431\u044B\u0432\u0430\u0435\u0442 \u043F\u0437\u0434\u0446","\u0411\u0435\u0440\u0438 \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0443 \u0438 \u043D\u0435 \u0435\u0431\u0438 \u043C\u043E\u0437\u0433\u0438"]},{id:"dima",name:"\u0414\u043C\u0418\u0418\u0442\u0440\u0438\u0439",css:"#5d6b8a",tag:"\u0421\u0434\u0435\u043B\u0430\u043B \u044D\u0442\u0443 \u0438\u0433\u0440\u0443 \u043D\u0435\u0439\u0440\u043E\u0441\u0435\u0442\u044C\u044E",desc:"\u0421\u0438\u043B\u0443\u044D\u0442 \u0441 \u0440\u044E\u043A\u0437\u0430\u043A\u043E\u043C \u0432 \u0442\u0443\u043C\u0430\u043D\u0435. \u0417\u043E\u0432\u0451\u0442 \u0432\u0441\u0435\u0445 \xAB\u043D\u0430 \u0432\u043E\u0439\u043D\u0443\xBB \u2014 \u043D\u0438\u043A\u0442\u043E \u043D\u0435 \u043F\u0440\u0438\u0445\u043E\u0434\u0438\u0442. \u041A\u0438\u043D\u043E\u0442\u0435\u0430\u0442\u0440 11.1.4. \u041F\u0440\u043E\u0434\u0430\u0451\u0442 VR2.",quotes:["\u0414\u0430\u0432\u043D\u043E \u043D\u0435 \u0432\u043E\u0435\u0432\u0430\u043B\u0438)","\u0413\u043E\u0443 \u0432\u0441\u0435 \u043D\u0430 \u0432\u043E\u0439\u043D\u0443","11.1.4","\u041A\u0430\u043A\u0430\u044F \u0442\u043E \u043C\u0430\u0433\u0438\u044F) \u0445\u0437","\u041F\u043E\u0442\u043E\u043C \u043F\u043E\u043A\u0430\u0436\u0443)","\u042D\u0442\u043E \u0443\u0436\u0435 \u043D\u043E\u0432\u0430\u044F \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u044C)","\u0420\u0435\u0448\u0438\u043B \u043F\u0440\u043E\u0434\u0430\u0442\u044C VR2. \u0415\u0441\u043B\u0438 \u043A\u043E\u043C\u0443 \u043D\u0443\u0436\u043D\u043E \u2014 \u043F\u0438\u0448\u0438\u0442\u0435","\u0422\u043E\u0436\u0435 \u0441\u043A\u043E\u0440\u043E \u0441\u0434\u0435\u043B\u0430\u044E)"]},{id:"igor",name:"\u0418\u0433\u043E\u0440\u044C",css:"#e8e8e8",tag:"144 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438. \u0427\u0435\u0442\u0432\u0451\u0440\u0442\u044B\u0439 \u0440\u0430\u0437",desc:"\u0427\u0451\u0440\u043D\u043E-\u0431\u0435\u043B\u044B\u0439 \u0440\u0430\u043A \u0441 \u043C\u043E\u043D\u043E\u0433\u0440\u0430\u043C\u043C\u043E\u0439. \u0421\u043E\u0431\u0438\u0440\u0430\u0435\u0442 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438, \u043F\u0435\u0440\u044C\u044F \u0446\u0430\u043F\u0435\u043B\u044C \u0438 \u043E\u0440\u0445\u0438\u0434\u0435\u0438. \u0417\u0430\u0432\u0451\u043B \u043D\u043E\u0432\u044B\u0439 \u0430\u043A\u043A\u0430\u0443\u043D\u0442, \u0447\u0442\u043E\u0431\u044B \u0437\u0430\u043A\u0440\u044B\u0442\u044C \u0432\u0441\u0451 \u043D\u0430 100% \u0437\u0430\u043D\u043E\u0432\u043E.",quotes:["\u041C\u043D\u0435 144 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438 \u043D\u0430\u0434\u043E \u043D\u0430\u0439\u0442\u0438","\u041D\u0435\u0434\u0435\u043B\u044E \u0435\u0431\u0443\u0447\u0438\u0445 \u043F\u0442\u0438\u0446 \u0441\u043E\u0431\u0438\u0440\u0430\u043B\u{1F613}","\u0411\u0430\u0442\u043B\u0430\u2026 \u043F\u0438\u0437\u0434\u0430\u0442\u0430\u044F!!!","\u0411\u0430\u0442\u043B\u0430 \u2026 \u0437\u0430\u043B\u0443\u043F\u0430 \u043F\u043E\u043B\u043D\u0430\u044F!!!","\u0414\u0438\u043C\u0430\u043D \u0421\u043E\u0440\u044F\u043D\u2026 \u044F \u0447\u0435\u0442 \u043F\u0440\u043E\u0435\u0431\u0430\u043B\u0441\u044F","\u0421\u0435\u0439\u0447\u0430\u0441 \u0438\u0433\u0440\u0430\u044E\u2026 \u044F \u0441\u0447\u0430\u0441\u0442\u043B\u0438\u0432","\u0412\u0430\u044F\u044F\u044F\u044F\u{1F979}\u{1F60D}","\u042D\u0442\u043E \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u0430\u044F \u0438\u0433\u0440\u0430"]},{id:"geisler",name:"\u0413\u0430\u0439\u0441\u043B\u0435\u0440",css:"#b0407a",tag:"\u041A\u0430\u043A \u0440\u0430\u0437 \u043A 19-\u043C\u0443 \u0434\u043E\u043A\u0430\u0447\u0430\u0435\u0442\u0441\u044F",desc:"\u0420\u0430\u043A \u0432\u043E \u0434\u0432\u043E\u0440\u0446\u0435 \u0441 \u043B\u044E\u0441\u0442\u0440\u0430\u043C\u0438. \u041A\u0430\u0447\u0430\u0435\u0442 \u0447\u0435\u0440\u0435\u0437 \u041C\u0435\u0433\u0430\u0444\u043E\u043D. \u0417\u043D\u0430\u0435\u0442 \u0432\u0441\u0451 \u043F\u0440\u043E \u041F2/\u041F3 \u0438 \u0443\u0434\u0438\u0432\u043B\u044F\u0435\u0442\u0441\u044F, \u043F\u043E\u0447\u0435\u043C\u0443 \u043B\u0430\u0432\u043E\u0447\u043A\u0443 \u0434\u043E \u0441\u0438\u0445 \u043F\u043E\u0440 \u043D\u0435 \u043F\u0440\u0438\u043A\u0440\u044B\u043B\u0438.",quotes:["\u041A\u0430\u043A \u0440\u0430\u0437 \u043A 19\u043C\u0443 \u0434\u043E\u043A\u0430\u0447\u0430\u0435\u0442\u0441\u044F \u{1F602}\u{1F602}","\u0411\u0430\u0442\u044F \u0432 \u0437\u0434\u0430\u043D\u0438\u0438!)","\u041C\u0435\u043D\u044F \u0443\u0434\u0438\u0432\u043B\u044F\u0435\u0442 \u043F\u043E\u0447\u0435\u043C\u0443 \u043F\u0441 \u0434\u043E \u0441\u0438\u0445 \u043F\u043E\u0440 \u044D\u0442\u0443 \u043B\u0430\u0432\u043E\u0447\u043A\u0443 \u043D\u0435 \u043F\u0440\u0438\u043A\u0440\u044B\u043B\u0438))","\u041E\u0434\u043D\u0430 \u043B\u0438\u0446\u0435\u043D\u0437\u0438\u044F \u043C\u0430\u043A\u0441\u0438\u043C\u0443\u043C \u043D\u0430 3 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0430 \u0434\u0435\u043B\u0438\u0442\u0441\u044F","\u0418\u0433\u043E\u0440\u044C \u0442\u044B \u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0440\u0430\u0437 \u0440\u0434\u0440 \u043F\u0440\u043E\u0448\u0435\u043B? 7?)","\u0422\u044B \u0438\u0445 \u0443\u0436\u0435 \u043D\u0430\u0445\u043E\u0434\u0438\u043B, \u043D\u043E \u043F\u0440\u043E\u0441\u0442\u043E \u043D\u0435 \u043F\u043E\u043C\u043D\u0438\u0448\u044C \u043A\u0443\u0434\u0430 \u0441\u043B\u043E\u0436\u0438\u043B)"]},{id:"pasha",name:"\u041F\u0430\u0448\u0430",css:"#d9a520",tag:"\u041A\u0440\u043E\u043C\u0435 LOA \u0438 RDR \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u0437\u0430\u0435\u0431\u0438\u0441\u044C",desc:"\u0417\u043E\u043B\u043E\u0442\u043E\u0439 \u0440\u0430\u043A \u0432 \u0441\u0442\u0438\u043B\u0435 \u041A\u043B\u0438\u043C\u0442\u0430. \u0421\u043B\u0435\u0434\u0438\u0442 \u0437\u0430 \u0441\u043B\u0438\u0432\u0430\u043C\u0438 \u0438 \u043F\u0435\u0440\u0435\u043D\u043E\u0441\u0430\u043C\u0438 \u043F\u0440\u0435\u0434\u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438. \u0425\u043E\u0447\u0435\u0442 \u043D\u0430\u0447\u0430\u0442\u044C BG3, \u043D\u043E \u0431\u043E\u0438\u0442\u0441\u044F.",quotes:["\u0414\u043B\u044F \u043C\u0435\u043D\u044F \u043A\u0440\u043E\u043C\u0435 LOA \u0438 RDR \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u0437\u0430\u0435\u0431\u0438\u0441\u044C\u{1F612}","BG3 \u0445\u043E\u0447\u0443 \u043D\u0430\u0447\u0430\u0442\u044C, \u043D\u043E \u0431\u043E\u044E\u0441\u044C","\u041F\u0440\u043E \u0441\u043B\u0438\u0432\u044B \u0432 \u043A\u0443\u0440\u0441\u0435? \u041F\u0438\u0437\u0434\u0435\u0446 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u0430\u044F \u0445\u0443\u0439\u043D\u044F)","\u041F\u0435\u0440\u0435\u043D\u0435\u0441\u043B\u0438 \u0441 12-\u043E\u0433\u043E \u043D\u0430 10","\u0421\u043A\u043E\u0440\u0435\u0435 \u0431\u044B","Extra \u0431\u0435\u0440\u0438"]},{id:"nikita",name:"\u041D\u0438\u043A\u0438\u0442\u0430",css:"#3a3a44",tag:"\xAB\u0427\u0442\u043E \u044D\u0442\u043E?\xBB",desc:"\u0422\u0451\u043C\u043D\u044B\u0435 \u043E\u0447\u043A\u0438. \u041F\u043E\u043F\u0430\u043B \u0432 \u0447\u0430\u0442 \u0441\u043B\u0443\u0447\u0430\u0439\u043D\u043E, \u043D\u0430 \u0440\u0435\u043B\u0438\u0437 \u0435\u043C\u0443 \u0432\u043E\u043E\u0431\u0449\u0435 \u043F\u043E\u0435\u0431\u0430\u0442\u044C. \u0417\u0430\u0442\u043E \u0441\u0430\u043C \u0441\u0434\u0435\u043B\u0430\u043B \u043D\u0435\u0439\u0440\u043E\u0441\u0435\u0442\u044C\u044E \u0442\u0440\u0438 \u0438\u0433\u0440\u044B. \u041E\u043F\u044B\u0442 \u2014 Tekken \u0441 \u0434\u0435\u0442\u044C\u043C\u0438.",quotes:["\u0427\u0442\u043E \u044D\u0442\u043E?","\u041C\u043D\u0435 \u0432\u043E\u043E\u0431\u0449\u0435 \u043F\u043E\u0435\u0431\u0430\u0442\u044C \u043D\u0430 \u043D\u043E\u0432\u0443\u044E \u0413\u0422\u0410","\u042F, \u043A\u0441\u0442\u0430\u0442\u0438, \u0442\u043E\u0436\u0435 \u2014 3 \u0438\u0433\u0440\u0443 \u0443\u0436\u0435 \u0441\u0434\u0435\u043B\u0430\u043B\u{1F601}","\u041C\u043E\u0439 \u043E\u043F\u044B\u0442 \u2014 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0431\u043E\u0435\u0432 \u0441 \u0434\u0435\u0442\u044C\u043C\u0438 \u0432 \u0442\u0435\u0439\u043A\u0435\u043D","\u042D\u0442\u043E \u0447\u0442\u043E \u0437\u0430 \u043F\u0438\u0437\u0434\u0435\u0446???!!! \u{1F62D}","\u0410 \u044D\u0442\u043E \u0441\u0438\u043B\u044C\u043D\u0430\u044F \u0448\u0442\u0443\u0447\u043A\u0430?","\u0422\u0430\u043A \u0438 \u043F\u043E\u0434\u0443\u043C\u0430\u043B"]},{id:"kos",name:"\u041A\u043E\u0441",css:"#2f8fdc",tag:"\u041D\u0430 \u0421\u0435\u0440\u0433\u0435\u044F \u0441\u0442\u043E\u043B\u0438\u043A",desc:"\u0421\u0438\u043D\u0438\u0439 \u043A\u0440\u0443\u0436\u043E\u043A \xAB\u0421\u041A\xBB. \u0424\u0430\u043D\u0430\u0442 \u0421\u0442\u0430\u043B\u043A\u0435\u0440\u0430 \u0438 \u0412\u0435\u0434\u044C\u043C\u0430\u043A\u0430. \u041F\u0440\u043E\u0441\u044B\u043F\u0430\u0435\u0442\u0441\u044F \u0432 5 \u0443\u0442\u0440\u0430, \u043F\u043E\u0447\u0443\u0432\u0441\u0442\u0432\u043E\u0432\u0430\u0432, \u0447\u0442\u043E \u0432 \u0447\u0430\u0442\u0435 \u0437\u0430\u0433\u043E\u0432\u043E\u0440\u0438\u043B\u0438 \u043F\u0440\u043E \u0412\u0435\u0434\u044C\u043C\u0430\u043A\u0430.",quotes:["\u041D\u0430 \u0421\u0435\u0440\u0433\u0435\u044F \u0441\u0442\u043E\u043B\u0438\u043A","\u041F\u0440\u043E\u0441\u043D\u0443\u043B\u0441\u044F \u043F\u0440\u043E\u0441\u0442\u043E, \u0447\u0443\u0432\u0441\u0442\u0432\u0443\u044E \u043F\u0440\u043E \u0432\u0435\u0434\u044C\u043C\u0430\u043A\u0430 \u043F\u043E\u0448\u0435\u043B \u0440\u0430\u0437\u0433\u043E\u0432\u043E\u0440)","\u042F \u043A\u0441\u0442\u0430\u0442\u0438 \u0443\u0434\u0438\u0432\u043B\u0435\u043D, \u0447\u0442\u043E \u0437\u0434\u0435\u0441\u044C \u0442\u043E\u043B\u044C\u043A\u043E \u043C\u044B \u0441 \u0442\u043E\u0431\u043E\u0439 \u0444\u0430\u043D\u0430\u0442\u044B \u0441\u0442\u0430\u043B\u043A\u0435\u0440\u0430","\u0422\u043E \u043B\u0438 \u0434\u0435\u043B\u043E \u044D\u0442\u0438 \u043C\u0430\u043B\u043E\u043C\u043E\u0449\u043D\u044B\u0435 \u043A\u043E\u043D\u0441\u043E\u043B\u0438)","\u0411\u0438\u043D\u043E\u043A\u043B\u044C \u0433\u043E\u0432\u043E\u0440\u044F\u0442 \u0434\u043E\u0431\u0430\u0432\u0438\u043B\u0438?)","\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0438\u043C \u043F\u043E\u0441\u043C\u043E\u0442\u0440\u0438\u043C"]},{id:"artem",name:"\u0410\u0440\u0442\u0451\u043C",css:"#4cb84a",tag:"\u0411\u043E\u0436\u0435, \u0445\u0440\u0430\u043D\u0438 \u043F\u0438\u0440\u0430\u0442\u043E\u0432, \u0430\u043C\u0438\u043D\u044C",desc:"\u0417\u0435\u043B\u0451\u043D\u044B\u0439 \u043A\u0440\u0443\u0436\u043E\u043A \xAB\u0410\u041A\xBB. \u0421\u043E\u0432\u0435\u0442\u0443\u0435\u0442 \u043F\u0440\u043E\u0445\u043E\u0434\u0438\u0442\u044C \u0441 \u043D\u0438\u0437\u043A\u043E\u0439 \u043C\u043E\u0440\u0430\u043B\u044C\u044E. \u0418\u0449\u0435\u0442, \u0433\u0434\u0435 \u043F\u043E\u0447\u0438\u0441\u0442\u0438\u0442\u044C PS5 \u043E\u0442 \u043F\u044B\u043B\u0438, \u043D\u043E \u0412\u0430\u0442\u0443\u0442\u0438\u043D\u0430 \u0434\u0430\u043B\u0435\u043A\u043E\u0432\u0430\u0442\u043E.",quotes:["\u0411\u043E\u0436\u0435, \u0445\u0440\u0430\u043D\u0438 \u043F\u0438\u0440\u0430\u0442\u043E\u0432, \u0430\u043C\u0438\u043D\u044C","\u0412\u0430\u0442\u0443\u0442\u0438\u043D\u0430 \u0434\u0430\u043B\u0435\u043A\u043E\u0432\u0430\u0442\u043E)))","\u041F\u0435\u0439 \u043F\u0438\u0432\u043E, \u0440\u0443\u043A\u0438 \u0434\u043E\u043B\u0436\u043D\u044B \u0431\u044B\u0442\u044C \u0432 \u0440\u044B\u0431\u0435, \u043D\u0435 \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0439 \u0434\u0443\u0448","\u041F\u0440\u043E\u0439\u0434\u0438 \u0441 \u043D\u0438\u0437\u043A\u043E\u0439 \u043C\u043E\u0440\u0430\u043B\u044C\u044E","\u0414\u0438\u043C\u0430\u043D, \u0431\u0435\u0440\u0435\u0433\u0438 \u0441\u0435\u0431\u044F","\u0422\u0430\u043A \u043D\u0430\u0445\u0435\u0440 \u043F2?","\u0422\u044B \u0440\u0435\u0430\u043B\u044C\u043D\u043E \u0414\u043C\u0418\u0418\u0442\u0440\u0438\u0439\u{1F91D}"]},{id:"sanya",name:"\u0421\u0430\u043D\u044F",css:"#9a9a9a",tag:"\u041D\u0430\u0447\u0430\u043B\u043E \u0442\u044F\u0433\u043E\u043C\u043E\u0442\u043D\u043E\u0435",desc:"\u0427\u0451\u0440\u043D\u043E-\u0431\u0435\u043B\u044B\u0439 \u0431\u043E\u0440\u043E\u0434\u0430\u0442\u044B\u0439 \u0440\u0430\u043A. \u041D\u0435 \u043E\u0441\u0438\u043B\u0438\u043B RDR2, \u043F\u043E\u0442\u043E\u043C\u0443 \u0447\u0442\u043E \u043D\u0430\u0447\u0430\u043B\u043E \u043C\u0435\u0434\u043B\u0435\u043D\u043D\u043E\u0435. \u0414\u043E\u043A\u0443\u043F\u0438\u043B \u043E\u043F\u0435\u0440\u0430\u0442\u0438\u0432\u043A\u0438 \u0432 \u043D\u043E\u0443\u0442 \u0440\u0430\u0434\u0438 \u0412\u0435\u0434\u044C\u043C\u0430\u043A\u0430.",quotes:["\u041E\u043D\u0430 \u0432\u043D\u0430\u0447\u0430\u043B\u0435 \u0434\u0438\u043A\u043E \u043C\u0435\u0434\u043B\u0435\u043D\u043D\u0430\u044F","\u0412\u043E\u0442 \u0434\u0430, \u0438\u043C\u0435\u043D\u043D\u043E \u0442\u0430\u043A, \u0442\u044F\u0433\u043E\u043C\u043E\u0442\u043D\u0430\u044F","\u041F\u0440\u0438\u0448\u043B\u043E\u0441\u044C \u043E\u043F\u0435\u0440\u0430\u0442\u0438\u0432\u043A\u0438 \u0434\u043E\u043A\u0443\u043F\u0438\u0442\u044C, \u0447\u0442\u043E\u0431\u044B \u0433\u0440\u0430\u0444\u0438\u043A\u0430 \u043D\u043E\u0440\u043C \u0431\u044B\u043B\u0430\u{1F605}","\u041D\u0443, \u0434\u0430\u043C \u0435\u0439 \u0432\u0442\u043E\u0440\u043E\u0439 \u0448\u0430\u043D\u0441, \u043A\u0430\u043A \u0431\u0443\u0434\u0435\u0442 \u0441\u0432\u043E\u0431\u043E\u0434\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F )"]},{id:"misha",name:"\u041C\u0438\u0448\u0430",css:"#d8623a",tag:"\u0411\u0430\u0442\u044F \u0432 \u0437\u0434\u0430\u043D\u0438\u0438!",desc:"\u0422\u043E\u043B\u044C\u043A\u043E \u043A\u0443\u043F\u0438\u043B PS5. \u0412\u0440\u0435\u043C\u0435\u043D\u0438 \u0438\u0433\u0440\u0430\u0442\u044C \u043D\u0435\u0442. \u0421\u043F\u0440\u043E\u0441\u0438\u043B \u043F\u0440\u043E \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0443 \u2014 \u043F\u043E\u043B\u0443\u0447\u0438\u043B \u0448\u0435\u0441\u0442\u044C \u0432\u0437\u0430\u0438\u043C\u043E\u0438\u0441\u043A\u043B\u044E\u0447\u0430\u044E\u0449\u0438\u0445 \u0441\u043E\u0432\u0435\u0442\u043E\u0432.",quotes:["\u0414\u0430 \u043F\u043E\u043A\u0430 \u043D\u0438\u043A\u0430\u043A, \u0432\u0440\u0435\u043C\u0435\u043D\u0438 \u0442\u0443\u043F\u043E \u043D\u0435\u0442 (","\u0412\u043E\u0442 \u0442\u0430\u043A \u0430\u0433\u0430","\u041E\u043A, \u0441\u043F\u0430\u0441\u0438\u0431\u043E!","\u041E\u0433\u043E\u043D\u044C, 2590 \u0433\u043E\u0434\u043D\u043E \u0434\u043B\u044F \u041D\u0441\u043A\u{1F602}"]}],ri=Object.fromEntries(pn.map(i=>[i.id,i])),ha={arkasha:{giver:"arkasha",title:"212 \u0413\u0411",reward:500,par:55,intro:[["arkasha","212 \u0433\u0431, \u0430\u0445\u0443\u0435\u0442\u044C"],["arkasha","\u0414\u0430 \u0431\u043B\u044F, \u0432 \u043F\u04415 \u0432\u0441\u0435\u0433\u043E 640\u0433\u0431 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E"],["arkasha","@P, \u043F\u043E\u0434\u044A\u0435\u0437\u0436\u0430\u0439 \u043A \u041E\u043F\u0435\u0440\u043D\u043E\u043C\u0443. \u041D\u0430\u0434\u043E \u043C\u0435\u0441\u0442\u043E \u043E\u0441\u0432\u043E\u0431\u043E\u0434\u0438\u0442\u044C"]],steps:[{pts:["arkasha"],text:"\u041A \u041E\u043F\u0435\u0440\u043D\u043E\u043C\u0443: \u0410\u0440\u043A\u0430\u0448\u0435 \u043D\u0435 \u0445\u0432\u0430\u0442\u0430\u0435\u0442 212 \u0413\u0411"},{choice:{title:"\u041D\u0435 \u0445\u0432\u0430\u0442\u0430\u0435\u0442 212 \u0413\u0411",text:"\u0423 \u0410\u0440\u043A\u0430\u0448\u0438 \u043D\u0430 PS5 \u043A\u043E\u043D\u0447\u0438\u043B\u043E\u0441\u044C \u043C\u0435\u0441\u0442\u043E. \u0427\u0435\u043C \u0436\u0435\u0440\u0442\u0432\u0443\u0435\u043C?",opts:[{label:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0412\u0435\u0434\u044C\u043C\u0430\u043A\u0430",say:[["arkasha","\u0412\u0435\u0434\u044C\u043C\u0430\u043A\u0430 \u043F\u0440\u0438\u0434\u0435\u0442\u0441\u044F \u0443\u0434\u0430\u043B\u0438\u0442\u044C\u{1F601}\u{1F601}"],["kos","\u041F\u0440\u043E\u0441\u043D\u0443\u043B\u0441\u044F \u043F\u0440\u043E\u0441\u0442\u043E, \u0447\u0443\u0432\u0441\u0442\u0432\u0443\u044E \u043F\u0440\u043E \u0432\u0435\u0434\u044C\u043C\u0430\u043A\u0430 \u043F\u043E\u0448\u0435\u043B \u0440\u0430\u0437\u0433\u043E\u0432\u043E\u0440)"],["kos","\u0412\u044B \u0447\u0451 \u0442\u0430\u043C \u0443\u0434\u0430\u043B\u044F\u0435\u0442\u0435??"]],flag:"witcher"},{label:"\u0421\u0433\u043E\u043D\u044F\u0442\u044C \u0437\u0430 SSD",bonus:600,say:[["arkasha","\u0412\u0435\u0434\u044C\u043C\u0430\u043A \u043A\u043E\u043D\u0435\u0447\u043D\u043E \u043B\u0435\u0433\u0435\u043D\u0434\u0430. \u0413\u043E\u043D\u0438 \u0432 \xAB\u0422\u0435\u0445\u043D\u043E\u0420\u0430\u043A\xBB, \u043E\u043D \u0437\u0430 \u041E\u043F\u0435\u0440\u043D\u044B\u043C"]],add:[{pts:["shop"],text:"\u0422\u0426 \xAB\u0422\u0435\u0445\u043D\u043E\u0420\u0430\u043A\xBB: \u0437\u0430\u0431\u0435\u0440\u0438 SSD"},{pts:["arkasha"],text:"\u0412\u0435\u0437\u0438 SSD \u0410\u0440\u043A\u0430\u0448\u0435"}]}]}}],outro:[["arkasha","\u0417\u0431\u0441. \u0412\u043B\u0435\u0437\u043B\u043E"],["arkasha","\u0412\u0441\u0435 \u0442\u0430\u043A, \u0442\u043E\u043B\u044C\u043A\u043E \u043D\u0430\u043E\u0431\u043E\u0440\u043E\u0442"]]},dima:{giver:"dima",title:"\u041D\u0430 \u0432\u043E\u0439\u043D\u0443",reward:700,par:60,intro:[["dima","\u0414\u0430\u0432\u043D\u043E \u043D\u0435 \u0432\u043E\u0435\u0432\u0430\u043B\u0438)"],["dima","\u0413\u043E\u0443 \u0432\u0441\u0435 \u043D\u0430 \u0432\u043E\u0439\u043D\u0443. \u041D\u043E\u0432\u0430\u044F \u043A\u0430\u0440\u0442\u0430, \u043C\u043E\u0436\u043D\u043E \u0434\u0430\u0436\u0435 \u0431\u0435\u0437 \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0438"],["dima","@P, \u0441\u043E\u0431\u0435\u0440\u0438 \u043D\u0430\u0440\u043E\u0434. \u041E\u0431\u044A\u0435\u0434\u044C \u0442\u0440\u043E\u0438\u0445"]],steps:[{raki:3,text:"\u041F\u043E\u0437\u043E\u0432\u0438 \u0442\u0440\u043E\u0438\u0445 \u043D\u0430 \u0432\u043E\u0439\u043D\u0443"},{pts:["dima"],text:"\u0412\u0435\u0440\u043D\u0438\u0441\u044C \u043A \u0414\u043C\u0418\u0418\u0442\u0440\u0438\u044E \u043D\u0430 \u043D\u0430\u0431\u0435\u0440\u0435\u0436\u043D\u0443\u044E"}],outro:[["dima","Go!"],["sys","\u041D\u0430 \u0432\u043E\u0439\u043D\u0443 \u043F\u0440\u0438\u0448\u043B\u043E: 0 \u0438\u0437 3. \u041A\u0430\u043A \u043E\u0431\u044B\u0447\u043D\u043E."],["igor","\u0414\u0438\u043C\u0430\u043D \u0421\u043E\u0440\u044F\u043D\u2026 \u044F \u0447\u0435\u0442 \u043F\u0440\u043E\u0435\u0431\u0430\u043B\u0441\u044F"]]},max:{giver:"max",title:"\u0414\u0438\u0441\u043A \u0437\u0430 390 \u20BD",reward:900,par:75,intro:[["max",{voice:12}],["max",{voice:7}],["max",{voice:31}],["max","\u041A\u043E\u0440\u043E\u0447\u0435. \u0417\u0430\u0431\u0435\u0440\u0438 \u0443 \u0442\u0438\u043F\u043E\u0432 \u0432 \u0433\u0430\u0440\u0430\u0436\u0430\u0445 007. \u0417\u0430 390. \u0414\u0438\u0441\u043A \u043D\u0430 \u0430\u0432\u0438\u0442\u043E \u0441\u0442\u043E\u0438\u0442 5000 \u0440\u0443\u0431\u{1F602}"]],steps:[{pts:["garage"],text:"\u0413\u0430\u0440\u0430\u0436\u0438 \u043D\u0430 \u043B\u0435\u0432\u043E\u043C \u0431\u0435\u0440\u0435\u0433\u0443: \u0437\u0430\u0431\u0435\u0440\u0438 \u0434\u0438\u0441\u043A \u0443 \u0442\u0438\u043F\u043E\u0432",say:[["sys","\u0422\u0438\u043F: \xAB\u041F2 \u0438\u043B\u0438 \u041F3?\xBB \u2014 \xAB\u0414\u0430\xBB. \u041A\u0443\u043F\u043B\u0435\u043D\u043E \u0437\u0430 390 \u20BD"],["beam","\u26A1\uFE0F \u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C \u0432 Beam Store! \u041C\u044B \u043F\u043E\u043B\u0443\u0447\u0438\u043B\u0438 \u0432\u0430\u0448\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435. \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043E\u0436\u0438\u0434\u0430\u0439\u0442\u0435 \u{1F3AE}"],["sys","\u{1F6A8} \u041C\u043E\u0434\u0435\u0440\u0430\u0442\u043E\u0440\u044B PlayStation \u0437\u0430\u043C\u0435\u0442\u0438\u043B\u0438 \u043E\u0431\u0449\u0438\u0439 \u0430\u043A\u043A\u0430\u0443\u043D\u0442"]],wanted:26},{pts:["max"],text:"\u041E\u0442\u0432\u0435\u0437\u0438 \u0434\u0438\u0441\u043A \u041C\u0430\u043A\u0441\u0443. \u0418 \u043E\u0442\u043E\u0440\u0432\u0438\u0441\u044C \u043E\u0442 \u043C\u043E\u0434\u0435\u0440\u0430\u0442\u043E\u0440\u043E\u0432"}],outro:[["max","\u0412\u044D\u0440\u0438 \u0433\u0443\u0434!!! \u0417\u0431\u0441"],["max","\u042F \u0447\u0435-\u0442 \u0434\u0443\u043C\u0430\u043B, \u0447\u0442\u043E \u041F3 \u043D\u0430\u043E\u0431\u043E\u0440\u043E\u0442 \u0445\u0443\u0436\u0435 \u0438 \u0434\u0435\u0448\u0435\u0432\u043B\u0435"],["arkasha","\u0412\u0441\u0435 \u0442\u0430\u043A, \u0442\u043E\u043B\u044C\u043A\u043E \u043D\u0430\u043E\u0431\u043E\u0440\u043E\u0442"]]},geisler:{giver:"geisler",title:"\u041A\u0430\u043A \u0440\u0430\u0437 \u043A 19-\u043C\u0443",reward:1150,par:80,intro:[["geisler","\u0425\u0437 \u0447\u0435 \u0442\u043E \u043C\u0435\u0433\u0430\u0444\u043E\u043D \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F \u043E\u0447\u0435\u043D\u044C \u043F\u043B\u043E\u0445\u043E \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442.."],["geisler","\u041A\u0430\u043A \u0440\u0430\u0437 \u043A 19\u043C\u0443 \u0434\u043E\u043A\u0430\u0447\u0430\u0435\u0442\u0441\u044F \u{1F602}\u{1F602}"],["dima","\u0423 \u0442\u0435\u0431\u044F \u043C\u043E\u0434\u0435\u043C \u0447\u0435\u0440\u0435\u0437 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u043D\u0443\u044E \u043B\u0438\u043D\u0438\u044E?)"],["geisler","@P, \u043F\u043D\u0438 \u0442\u0440\u0438 \u0432\u044B\u0448\u043A\u0438, \u0430? \u041C\u043E\u0436\u0435\u0442 \u0431\u044B\u0441\u0442\u0440\u0435\u0435 \u043F\u043E\u0439\u0434\u0451\u0442"]],steps:[{pts:["tower2","tower1","tower3"],text:"\u041F\u043D\u0438 \u0442\u0440\u0438 \u0432\u044B\u0448\u043A\u0438 \u0441\u0432\u044F\u0437\u0438",each:"\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0443 \u0413\u0430\u0439\u0441\u043B\u0435\u0440\u0430: "}],outro:[["geisler","\u041E, 97%. \u041E\u0441\u0442\u0430\u043B\u044C\u043D\u043E\u0435 \u043A\u0430\u043A \u0440\u0430\u0437 \u043A 19\u043C\u0443 \u0434\u043E\u043A\u0430\u0447\u0430\u0435\u0442\u0441\u044F"],["max","\u0423 \u043C\u0435\u043D\u044F 500 \u043C\u0431\u0438\u0442/\u0441\u0435\u043A, \u0434\u043E\u0432\u043E\u043B\u044C\u043D\u043E \u0431\u044B\u0441\u0442\u0440\u043E \u0441\u043A\u0430\u0447\u0430\u043B\u043E\u0441\u044C"]]},kos:{giver:"kos",title:"\u0417\u043E\u043D\u0430",reward:1100,par:75,intro:[["kos","\u042F \u043A\u0441\u0442\u0430\u0442\u0438 \u0443\u0434\u0438\u0432\u043B\u0435\u043D, \u0447\u0442\u043E \u0437\u0434\u0435\u0441\u044C \u0442\u043E\u043B\u044C\u043A\u043E \u043C\u044B \u0441 \u0442\u043E\u0431\u043E\u0439 \u0444\u0430\u043D\u0430\u0442\u044B \u0441\u0442\u0430\u043B\u043A\u0435\u0440\u0430"],["kos","@P, \u043F\u0440\u0438\u0435\u0437\u0436\u0430\u0439 \u0432 \u043F\u0440\u043E\u043C\u0437\u043E\u043D\u0443. \u0412 \u0417\u043E\u043D\u0443 \u043D\u0430 \u043C\u0430\u0448\u0438\u043D\u0435 \u043D\u0435\u043B\u044C\u0437\u044F, \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u0435\u0448\u043A\u043E\u043C"],["kos","\u0410\u0440\u0442\u0435\u0444\u0430\u043A\u0442 \u0432 \u0434\u0430\u043B\u044C\u043D\u0435\u043C \u0443\u0433\u043B\u0443. \u0412 \u0430\u043D\u043E\u043C\u0430\u043B\u0438\u0438 \u043D\u0435 \u043B\u0435\u0437\u044C"]],steps:[{pts:["gate"],text:"\u041F\u0440\u043E\u043C\u0437\u043E\u043D\u0430: \u043A \u0432\u043E\u0440\u043E\u0442\u0430\u043C \u0417\u043E\u043D\u044B"},{pts:["artifact"],foot:!0,r:2.5,text:"\u041F\u0435\u0448\u043A\u043E\u043C: \u0434\u043E\u0441\u0442\u0430\u043D\u044C \u0430\u0440\u0442\u0435\u0444\u0430\u043A\u0442, \u043E\u0431\u0445\u043E\u0434\u0438 \u0430\u043D\u043E\u043C\u0430\u043B\u0438\u0438",say:[["sys","\u0410\u0440\u0442\u0435\u0444\u0430\u043A\u0442 \xAB\u041F\u043B\u043E\u0442\u0432\u0430\xBB \u0443 \u0442\u0435\u0431\u044F"],["kos","\u0411\u0438\u043D\u043E\u043A\u043B\u044C \u0433\u043E\u0432\u043E\u0440\u044F\u0442 \u0434\u043E\u0431\u0430\u0432\u0438\u043B\u0438?)"]]},{pts:["kos"],text:"\u041E\u0442\u043D\u0435\u0441\u0438 \u0430\u0440\u0442\u0435\u0444\u0430\u043A\u0442 \u041A\u043E\u0441\u0443"}],outro:[["kos","\u041D\u0430 \u0421\u0435\u0440\u0433\u0435\u044F \u0441\u0442\u043E\u043B\u0438\u043A"],["sys","\u0421\u0442\u043E\u043B\u0438\u043A \u0437\u0430\u0431\u0440\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u043D. \u0421\u0442\u043E\u0439\u043C\u044F \u043D\u0435 \u043F\u0440\u0438\u0434\u0451\u0442\u0441\u044F"]]},nikita:{giver:"nikita",title:"\u0418\u0433\u0440\u0430 \u043C\u0435\u0447\u0442\u044B",reward:320,par:30,intro:[["nikita","\u044F, \u043A\u0441\u0442\u0430\u0442\u0438, \u0442\u043E\u0436\u0435 - 3 \u0438\u0433\u0440\u0443 \u0443\u0436\u0435 \u0441\u0434\u0435\u043B\u0430\u043B\u{1F601}"],["nikita","\u0412\u043E\u043F\u043B\u043E\u0449\u0430\u044E \u0432\u0441\u0435 \u0444\u0430\u043D\u0442\u0430\u0437\u0438\u0438 \u043A\u0430\u043A\u043E\u0439 \u0434\u043E\u043B\u0436\u043D\u0430 \u0431\u044B\u0442\u044C \u0438\u0433\u0440\u0430 \u043C\u0435\u0447\u0442\u044B\u{1F601}"],["nikita","@P, \u043F\u043E\u0434\u044A\u0435\u0437\u0436\u0430\u0439, \u043F\u043E\u043A\u0430\u0436\u0443. \u0422\u0430\u043C 4 \u0440\u0430\u0441\u044B \u0438 AI \u043F\u0440\u043E\u0442\u0438\u0432\u043D\u0438\u043A"]],steps:[{pts:["nikita"],text:"\u041A \u041D\u0438\u043A\u0438\u0442\u0435: \u043E\u043D \u0441\u0434\u0435\u043B\u0430\u043B \u0438\u0433\u0440\u0443 \u043C\u0435\u0447\u0442\u044B",say:[["nikita","\u0432\u043E\u0442 \u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u043E\u0438\u0433\u0440\u0430\u0442\u044C:"],["sys","\u041D\u0438\u043A\u0438\u0442\u0430 \u0432\u043A\u043B\u044E\u0447\u0438\u043B \u0441\u0432\u043E\u044E \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u044E. \u0422\u0430\u0439\u043C\u0435\u0440 \u0434\u043E \u0440\u0435\u043B\u0438\u0437\u0430 \u043F\u0440\u0438 \u044D\u0442\u043E\u043C \u043D\u0435 \u043E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u043B\u0441\u044F"]]},{duel:!0}],outro:[["nikita","\u042D\u0442\u043E \u0447\u0442\u043E \u0437\u0430 \u043F\u0438\u0437\u0434\u0435\u0446???!!! \u{1F62D}"],["dima","\u0422\u043E\u0436\u0435 \u0441\u043A\u043E\u0440\u043E \u0441\u0434\u0435\u043B\u0430\u044E)"],["nikita","\u0434\u0438\u043C\u0430\u043D, \u043F\u043E\u043A\u0430 \u0437\u0430\u043A\u0430\u043F\u044B\u0432\u0430\u0435\u043C\u0441\u044F)"]],outroLost:[["nikita","AI \u043F\u0440\u043E\u0442\u0438\u0432\u043D\u0438\u043A 50% \u0438\u0433\u0440 \u043C\u0435\u043D\u044F \u0434\u0435\u043B\u0430\u0435\u0442, \u043A\u0430\u043A \u043C\u0430\u043B\u0435\u043D\u044C\u043A\u043E\u0433\u043E"],["igor","\u041D\u0438\u043A\u0438\u0442\u2026 \u043D\u0438\u0447\u0435\u0433\u043E \u0441\u0442\u0440\u0430\u0448\u043D\u043E\u0433\u043E) \u043D\u0435 \u043F\u0435\u0440\u0435\u0436\u0438\u0432\u0430\u0439 \u0438\u0437-\u0437\u0430 \u044D\u0442\u043E\u0433\u043E)"]]},sanya:{giver:"sanya",title:"\u0422\u044F\u0433\u043E\u043C\u043E\u0442\u043D\u043E\u0435 \u043D\u0430\u0447\u0430\u043B\u043E",reward:1e3,par:65,intro:[["sanya","\u0410\u043D\u0430\u043B\u043E\u0433\u0438\u0447\u043D\u043E, \u043F\u043E\u0441\u0442\u0430\u0432\u0438\u043B \u043D\u0430 \u043D\u043E\u0443\u0442 \u0438 \u043F\u043E\u0438\u0433\u0440\u044B\u0432\u0430\u044E)"],["sanya","\u041F\u0440\u0438\u0448\u043B\u043E\u0441\u044C \u043E\u043F\u0435\u0440\u0430\u0442\u0438\u0432\u043A\u0438 \u0434\u043E\u043A\u0443\u043F\u0438\u0442\u044C, \u0447\u0442\u043E\u0431\u044B \u0433\u0440\u0430\u0444\u0438\u043A\u0430 \u043D\u043E\u0440\u043C \u0431\u044B\u043B\u0430\u{1F605}"],["sanya","@P, \u0437\u0430\u0445\u0432\u0430\u0442\u0438 \u0435\u0449\u0451 \u043F\u043B\u0430\u043D\u043A\u0443 \u0432 \xAB\u0422\u0435\u0445\u043D\u043E\u0420\u0430\u043A\u0435\xBB \u0438 \u0432\u0435\u0437\u0438 \u043A\u043E \u043C\u043D\u0435 \u043D\u0430 \u043B\u0435\u0432\u044B\u0439 \u0431\u0435\u0440\u0435\u0433"]],steps:[{pts:["shop"],text:"\u0422\u0426 \xAB\u0422\u0435\u0445\u043D\u043E\u0420\u0430\u043A\xBB: \u043E\u043F\u0435\u0440\u0430\u0442\u0438\u0432\u043A\u0430 \u0434\u043B\u044F \u0421\u0430\u043D\u0438"},{pts:["sanya"],text:"\u0412\u0435\u0437\u0438 \u043E\u043F\u0435\u0440\u0430\u0442\u0438\u0432\u043A\u0443 \u0421\u0430\u043D\u0435 \u043D\u0430 \u043B\u0435\u0432\u044B\u0439 \u0431\u0435\u0440\u0435\u0433"},{slow:8,text:"\u0422\u0435\u0440\u043F\u0438: \u0435\u0434\u044C \u043C\u0435\u0434\u043B\u0435\u043D\u043D\u0435\u0435 25 \u043A\u043C/\u0447",enter:[["sys","\u0421\u0430\u043D\u044F \u0432\u043A\u043B\u044E\u0447\u0438\u043B RDR2. \u041D\u0430\u0447\u0430\u043B\u043E, \u0441\u043D\u0435\u0433. \u0415\u0434\u044C \u043C\u0435\u0434\u043B\u0435\u043D\u043D\u043E \u0438 \u0442\u0435\u0440\u043F\u0438 \u0432\u043C\u0435\u0441\u0442\u0435 \u0441 \u043D\u0438\u043C"],["sanya","\u042F \u0442\u0430\u043A \u0438 \u043D\u0435 \u0441\u043C\u043E\u0433 \u0438\u0433\u0440\u0430\u0442\u044C \u0432 \u0440\u0434\u0440, \u043D\u0443 \u043E\u043D\u0430 \u0432\u043D\u0430\u0447\u0430\u043B\u0435 \u0434\u0438\u043A\u043E \u043C\u0435\u0434\u043B\u0435\u043D\u043D\u0430\u044F"],["max","\u041D\u043E, \u043F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043F\u043E\u0442\u0435\u0440\u043F\u0438 \u0447\u0443\u0442\u044C-\u0447\u0443\u0442\u044C!! \u042D\u0442\u043E \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u043D\u0430\u0434\u043E \u0441\u0434\u0435\u043B\u0430\u0442\u044C"]],say:[["max","\u041E\u043D\u043E \u0441\u0442\u043E\u0438\u0442 \u0442\u043E\u0433\u043E \u0432 20 \u043A\u0440\u0430\u0442"]],big:["\u041F\u0415\u0420\u0415\u0422\u0415\u0420\u041F\u0415\u041B","50 \u043E\u0447\u043A\u043E\u0432 \xD7 20 \u043A\u0440\u0430\u0442"]}],outro:[["sanya","\u041D\u0443, \u0434\u0430\u043C \u0435\u0439 \u0432\u0442\u043E\u0440\u043E\u0439 \u0448\u0430\u043D\u0441, \u043A\u0430\u043A \u0431\u0443\u0434\u0435\u0442 \u0441\u0432\u043E\u0431\u043E\u0434\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F )"],["arkasha","\u042D\u0442\u043E \u043E\u0434\u043D\u0430 \u0438\u0437 \u043B\u0443\u0447\u0448\u0438\u0445 \u0438\u0433\u0440 \u0432 \u0446\u0435\u043B\u043E\u043C, \u0441\u0440\u0435\u0434\u0438 \u0432\u0441\u0435\u0445 \u0438\u0433\u0440, \u043D\u0430\u0434\u043E \u0434\u0430\u0442\u044C \u0448\u0430\u043D\u0441 100%"]]},misha:{giver:"misha",title:"\u0411\u0430\u0442\u044F \u0432 \u0437\u0434\u0430\u043D\u0438\u0438",reward:750,par:55,failReward:200,intro:[["misha","\u0422\u043E\u043B\u044C\u043A\u043E \u043A\u0443\u043F\u0438\u043B PS5. \u041A\u0430\u043A\u0443\u044E \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0443 \u0431\u0440\u0430\u0442\u044C?"],["pasha","Extra \u0431\u0435\u0440\u0438"],["dima","\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0443\u044E \u0431\u0440\u0430\u0442\u044C \u043D\u0430\u0434\u043E"],["nikita","\u041C\u043D\u0435 \u043A\u0430\u0436\u0435\u0442\u0441\u044F \u043F\u043E\u043A\u0443\u043F\u0430\u0442\u044C \u0443\u0434\u043E\u0431\u043D\u0435\u0435 \u{1F937}\u200D\u2642\uFE0F"],["geisler","\u041C\u0438\u0448\u0430, \u043C\u043E\u0436\u0435\u0448\u044C \u0432\u043E\u043E\u0431\u0449\u0435 \u043D\u0435 \u0431\u0440\u0430\u0442\u044C \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0443"],["max","\u041C\u0438\u0448\u0430, \u0431\u0435\u0440\u0438 \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0443 \u0438 \u043D\u0435 \u0435\u0431\u0438 \u043C\u043E\u0437\u0433\u0438"],["misha","@P, \u0437\u0430\u0435\u0434\u044C \u0432 \u043F\u0430\u0440\u043A \u043D\u0430 \u043B\u0435\u0432\u043E\u043C \u0431\u0435\u0440\u0435\u0433\u0443, \u0440\u0435\u0448\u0438 \u0437\u0430 \u043C\u0435\u043D\u044F"]],steps:[{pts:["misha"],text:"\u0412 \u043F\u0430\u0440\u043A \u043D\u0430 \u043B\u0435\u0432\u043E\u043C \u0431\u0435\u0440\u0435\u0433\u0443: \u0411\u0430\u0442\u044F \u0436\u0434\u0451\u0442 \u0441\u043E\u0432\u0435\u0442\u0430"},{choice:{title:"\u041A\u0430\u043A\u0443\u044E \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0443 \u0431\u0440\u0430\u0442\u044C \u041C\u0438\u0448\u0435?",text:"\u0427\u0430\u0442 \u0432\u044B\u0434\u0430\u043B \u0432\u0437\u0430\u0438\u043C\u043E\u0438\u0441\u043A\u043B\u044E\u0447\u0430\u044E\u0449\u0438\u0435 \u0441\u043E\u0432\u0435\u0442\u044B. \u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0435 \u0441\u043B\u043E\u0432\u043E \u0437\u0430 \u0442\u043E\u0431\u043E\u0439.",opts:[{label:"Extra",say:[["pasha","\u0412 \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0435 \u0435\u0441\u0442\u044C \u0438 \u0442\u043E\u043F\u043E\u0432\u044B\u0445: \u043F\u0430\u0443\u043A\u0438, \u0413\u0422\u0410 5, \u0440\u0434\u0440, \u043B\u0430\u0441\u0442 \u043E\u0444 \u0430\u0437\u2026"],["geisler","\u042D\u0442\u043E \u0432\u0441\u0435 \u043C\u043E\u0436\u043D\u043E \u043F\u043E \u0434\u0435\u0448\u0435\u0432\u043A\u0435 \u0432\u0437\u044F\u0442\u044C \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u043E"]]},{label:"\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0443\u044E",say:[["dima","\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0443\u044E \u0431\u0440\u0430\u0442\u044C \u043D\u0430\u0434\u043E"],["pasha","\u0422\u0430\u043A \u0442\u0430\u043C \u043E\u0442\u043B\u0438\u0447\u0438\u0435, \u0447\u0442\u043E \u0435\u0441\u0442\u044C \u0440\u0435\u0442\u0440\u043E \u043A\u043B\u0430\u0441\u0441\u0438\u043A\u0430 \u0442\u043E\u043B\u044C\u043A\u043E, \u043D\u0430\u0445 \u043E\u043D\u0430 \u043D\u0443\u0436\u043D\u0430?"]]},{label:"\u0412\u043E\u043E\u0431\u0449\u0435 \u043D\u0435 \u0431\u0440\u0430\u0442\u044C",say:[["geisler","\u0415\u0441\u043B\u0438 \u0442\u044B \u043D\u0435 \u043F\u043B\u0430\u043D\u0438\u0440\u0443\u0435\u0448\u044C \u043F\u043E \u0441\u0435\u0442\u0438 \u0441 \u0434\u0440\u0443\u0433\u0438\u043C\u0438 \u0438\u0433\u0440\u0430\u0442\u044C, \u043C\u043E\u0436\u0435\u0448\u044C \u043D\u0435 \u0431\u0440\u0430\u0442\u044C"],["max","\u041E\u043D\u0430 \u0441\u0442\u043E\u0438\u0442 2 \u0442\u0440 \u0432 \u0433\u043E\u0434"]]}]}},{pts:["garage"],timer:32,text:"\u0411\u044B\u0441\u0442\u0440\u043E \u043A \u0442\u0438\u043F\u0430\u043C \u0432 \u0433\u0430\u0440\u0430\u0436\u0438: \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0430 \u0437\u0430 2590",enter:[["misha","\u0412\u043E\u0442 \u0442\u0430\u043A \u0430\u0433\u0430"],["misha","\u041E\u0433\u043E\u043D\u044C, 2590 \u0433\u043E\u0434\u043D\u043E \u0434\u043B\u044F \u041D\u0441\u043A\u{1F602}"],["sys","\u0423 \u0411\u0430\u0442\u0438 \u0435\u0441\u0442\u044C \u043F\u043E\u043B\u043C\u0438\u043D\u0443\u0442\u044B, \u043F\u043E\u043A\u0430 \u0432\u0441\u0435 \u0441\u043F\u044F\u0442. \u0421\u0433\u043E\u043D\u044F\u0439 \u043A \u0442\u0438\u043F\u0430\u043C \u0438 \u043E\u0431\u0440\u0430\u0442\u043D\u043E"]]},{pts:["misha"],text:"\u041E\u0431\u0440\u0430\u0442\u043D\u043E \u043A \u041C\u0438\u0448\u0435, \u043F\u043E\u043A\u0430 \u0443 \u043D\u0435\u0433\u043E \u0435\u0441\u0442\u044C \u0432\u0440\u0435\u043C\u044F"}],outro:[["geisler","\u0411\u0430\u0442\u044F \u0432 \u0437\u0434\u0430\u043D\u0438\u0438!)"],["misha","\u041E\u043A, \u0441\u043F\u0430\u0441\u0438\u0431\u043E!"]],fail:[["misha","\u0414\u0430 \u043F\u043E\u043A\u0430 \u043D\u0438\u043A\u0430\u043A, \u0432\u0440\u0435\u043C\u0435\u043D\u0438 \u0442\u0443\u043F\u043E \u043D\u0435\u0442 ("],["sys","\u0411\u0430\u0442\u044F \u0443\u0448\u0451\u043B. \u041F\u043E\u0434\u043F\u0438\u0441\u043A\u0430 \u043E\u0441\u0442\u0430\u043B\u0430\u0441\u044C \u0443 \u0442\u0438\u043F\u043E\u0432"]]},pasha:{giver:"pasha",title:"\u041F\u0435\u0440\u0435\u043D\u043E\u0441 \u043F\u0440\u0435\u0434\u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438",reward:850,par:70,intro:[["pasha","\u041F\u0440\u043E \u0441\u043B\u0438\u0432\u044B \u0413\u0422\u0410 \u0432 \u043A\u0443\u0440\u0441\u0435? \u041F\u0438\u0437\u0434\u0435\u0446 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u0430\u044F \u0445\u0443\u0439\u043D\u044F)"],["pasha","\u041F\u0440\u0435\u0434\u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0443\u0436\u0435 \u0432 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u0432\u0442\u043E\u0440\u043D\u0438\u043A.."],["pasha","@P, \u0437\u0430\u0431\u0435\u0440\u0438 \u0441\u043B\u0438\u0432 \u0443 \u0438\u043D\u0441\u0430\u0439\u0434\u0435\u0440\u0430. \u041E\u043D \u043F\u043E\u0434 \u0431\u0438\u043B\u0431\u043E\u0440\u0434\u043E\u043C \u043D\u0430 \u043D\u0430\u0431\u0435\u0440\u0435\u0436\u043D\u043E\u0439"]],steps:[{pts:["leak1"],text:"\u0421\u043B\u0438\u0432: \u043F\u043E\u0434 \u0431\u0438\u043B\u0431\u043E\u0440\u0434\u043E\u043C \u043D\u0430 \u043D\u0430\u0431\u0435\u0440\u0435\u0436\u043D\u043E\u0439",say:[["pasha","\u041F\u0435\u0440\u0435\u043D\u0435\u0441\u043B\u0438 \u0441 12-\u043E\u0433\u043E \u043D\u0430 10"],["sys","\u0418\u043D\u0441\u0430\u0439\u0434\u0435\u0440 \u043F\u0435\u0440\u0435\u0435\u0445\u0430\u043B \u043A \u043A\u043E\u043B\u0435\u0441\u0443 \u043E\u0431\u043E\u0437\u0440\u0435\u043D\u0438\u044F"]],big:["\u041F\u0415\u0420\u0415\u041D\u0415\u0421\u041B\u0418","\u0441\u043B\u0438\u0432 \u0442\u0435\u043F\u0435\u0440\u044C \u0443 \u043A\u043E\u043B\u0435\u0441\u0430 \u043E\u0431\u043E\u0437\u0440\u0435\u043D\u0438\u044F"]},{pts:["leak2"],text:"\u041F\u0435\u0440\u0435\u043D\u0435\u0441\u043B\u0438: \u0441\u043B\u0438\u0432 \u0443 \u043A\u043E\u043B\u0435\u0441\u0430 \u043E\u0431\u043E\u0437\u0440\u0435\u043D\u0438\u044F",say:[["pasha","\u041D\u0443 \u043E\u0431\u0435\u0449\u0430\u044E\u0442 \u0431\u0435\u0437 \u043F\u0435\u0440\u0435\u043D\u043E\u0441\u043E\u0432"],["sys","\u041F\u0435\u0440\u0435\u043D\u0435\u0441\u043B\u0438 \u0435\u0449\u0451 \u0440\u0430\u0437. \u0422\u0435\u043F\u0435\u0440\u044C \u043A \u0447\u0430\u0441\u043E\u0432\u043D\u0435"]],big:["\u041E\u041F\u042F\u0422\u042C \u041F\u0415\u0420\u0415\u041D\u0415\u0421\u041B\u0418","\u0441\u043B\u0438\u0432 \u0442\u0435\u043F\u0435\u0440\u044C \u0443 \u0447\u0430\u0441\u043E\u0432\u043D\u0438"]},{pts:["leak3"],text:"\u041F\u0435\u0440\u0435\u043D\u0435\u0441\u043B\u0438: \u0441\u043B\u0438\u0432 \u0443 \u0447\u0430\u0441\u043E\u0432\u043D\u0438 \u043D\u0430 \u041A\u0440\u0430\u0441\u043D\u043E\u043C",say:[["sys","\u0424\u043B\u0435\u0448\u043A\u0430 \u0441\u043E \u0441\u043B\u0438\u0432\u043E\u043C \u0443 \u0442\u0435\u0431\u044F. \u041D\u0430 \u043D\u0435\u0439 212 \u0413\u0411"]]},{pts:["pasha"],text:"\u041E\u0442\u0432\u0435\u0437\u0438 \u0441\u043B\u0438\u0432 \u041F\u0430\u0448\u0435"},{choice:{title:"\u041F\u0430\u0448\u0430 \u043F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u043B \u0441\u043B\u0438\u0432",text:"\xAB\u041D\u0435 \u0437\u043D\u0430\u044E\u2026 \u043D\u0435 \u043F\u043E\u043D\u044F\u043B\u2026\xBB \u0427\u0435\u043C \u0435\u043C\u0443 \u0437\u0430\u043D\u044F\u0442\u044C\u0441\u044F \u0434\u043E \u043F\u043E\u043B\u0443\u043D\u043E\u0447\u0438?",opts:[{label:"\u041F\u0443\u0441\u0442\u044C \u043D\u0430\u0447\u043D\u0451\u0442 BG3",say:[["pasha","BG3 \u0445\u043E\u0447\u0443 \u043D\u0430\u0447\u0430\u0442\u044C, \u043D\u043E \u0431\u043E\u044E\u0441\u044C"],["kos","\u041A\u0430\u043A \u0436\u0435 \u0442\u0430\u043C \u043C\u043D\u043E\u0433\u043E \u043D\u0443\u0436\u043D\u043E \u0447\u0438\u0442\u0430\u0442\u044C \u0434\u0438\u0430\u043B\u043E\u0433\u043E\u0432\u{1F635}\u200D\u{1F4AB}"]]},{label:"\u041F\u0443\u0441\u0442\u044C \u0436\u0434\u0451\u0442 \u0434\u0430\u043B\u044C\u0448\u0435",say:[["pasha","\u0421\u043A\u043E\u0440\u0435\u0435 \u0431\u044B \u0413\u0422\u0410"],["max","\u0412 PS Store \u043D\u0430\u043F\u0438\u0441\u0430\u043D\u043E 19.11.26"]]}]}}],outro:[["pasha","\u041D\u0435 \u0437\u043D\u0430\u044E\u2026 \u043D\u0435 \u043F\u043E\u043D\u044F\u043B\u2026 \u0434\u043B\u044F \u043C\u0435\u043D\u044F \u043A\u0440\u043E\u043C\u0435 LOA \u0438 RDR \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u0437\u0430\u0435\u0431\u0438\u0441\u044C\u{1F612}"]]},artem:{giver:"artem",title:"\u0412\u0430\u0442\u0443\u0442\u0438\u043D\u0430 \u0434\u0430\u043B\u0435\u043A\u043E\u0432\u0430\u0442\u043E",reward:1200,par:90,intro:[["artem","\u041A\u0442\u043E \u0447\u0438\u0441\u0442\u0438\u043B \u043F\u04415? \u042F \u043F\u0440\u043E \u0447\u0438\u0441\u0442\u043A\u0443 \u0441\u0430\u043C\u043E\u0439 \u043A\u043E\u043D\u0441\u043E\u043B\u0438 \u043E\u0442 \u043F\u044B\u043B\u0438"],["arkasha",{voice:9}],["artem","\u0412\u0430\u0442\u0443\u0442\u0438\u043D\u0430 \u0434\u0430\u043B\u0435\u043A\u043E\u0432\u0430\u0442\u043E)))"],["artem","@P, \u043E\u0442\u0432\u0435\u0437\u0438, \u0430? \u0417\u0430\u0431\u0435\u0440\u0438 \u043F\u043B\u043E\u0439\u043A\u0443 \u0443 \u043C\u0435\u043D\u044F \u043D\u0430 \u0441\u0435\u0432\u0435\u0440\u043E-\u0432\u043E\u0441\u0442\u043E\u043A\u0435"]],steps:[{pts:["artem"],text:"\u0417\u0430\u0431\u0435\u0440\u0438 \u043F\u044B\u043B\u044C\u043D\u0443\u044E PS5 \u0443 \u0410\u0440\u0442\u0451\u043C\u0430",say:[["artem","\u041F\u0435\u0439 \u043F\u0438\u0432\u043E, \u0440\u0443\u043A\u0438 \u0434\u043E\u043B\u0436\u043D\u044B \u0431\u044B\u0442\u044C \u0432 \u0440\u044B\u0431\u0435, \u043D\u0435 \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0439 \u0434\u0443\u0448"]]},{pts:["vatutina"],text:"\u041D\u0430 \u0412\u0430\u0442\u0443\u0442\u0438\u043D\u0430, \u0447\u0435\u0440\u0435\u0437 \u0411\u0443\u0433\u0440\u0438\u043D\u0441\u043A\u0438\u0439 \u043C\u043E\u0441\u0442. \u0414\u0430\u043B\u0435\u043A\u043E\u0432\u0430\u0442\u043E"}],outro:[["sys","PS5 \u043F\u043E\u0447\u0438\u0449\u0435\u043D\u0430. \u0412\u043D\u0443\u0442\u0440\u0438 \u043D\u0430\u0448\u043B\u0438 \u0442\u0440\u0438 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438 \u0418\u0433\u043E\u0440\u044F"],["artem","\u0411\u043E\u0436\u0435, \u0445\u0440\u0430\u043D\u0438 \u043F\u0438\u0440\u0430\u0442\u043E\u0432, \u0430\u043C\u0438\u043D\u044C"]]}},eh=["arkasha","nikita","pasha","dima","max","sanya","misha","kos","artem","geisler"].filter(i=>ha[i]),Zf=6,Zo=3,Jf={igor:"\u042F \u0437\u0430 \u0440\u0443\u043B\u0435\u043C\u2026 \u043D\u0435 \u0432\u043E\u044E\u044E",max:"\u042F \u043F\u0430\u0441, \u0437\u0430\u043D\u044F\u0442",arkasha:"\u0414\u0430\u0439 10 \u043C\u0438\u043D",geisler:"\u042F \u0434\u0430\u0436\u0435 \u0432\u043A\u043B\u044E\u0447\u0430\u0442\u044C \u0431\u043E\u044E\u0441\u044C",pasha:"\u041D\u0435 \u0441\u043E\u0431\u0438\u0440\u0430\u044E\u0441\u044C",nikita:"\u042F \u043D\u0435 \u0438\u0433\u0440\u0430\u043B \u043D\u0435 \u0440\u0430\u0437\u0443",kos:"\u041D\u0430\u0434\u043E \u0441\u043A\u0430\u0447\u0430\u0442\u044C",artem:"\u0413\u043E \u0432 \u0432\u0441",sanya:"\u041A\u0430\u043A \u0431\u0443\u0434\u0435\u0442 \u0441\u0432\u043E\u0431\u043E\u0434\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F )",misha:"\u0412\u0440\u0435\u043C\u0435\u043D\u0438 \u0442\u0443\u043F\u043E \u043D\u0435\u0442 ("},Jo=[[1.5,"nikita","\u0427\u0442\u043E \u044D\u0442\u043E?"],[4.5,"max","\u0427\u0430\u0442 \u0432\u043B\u0430\u0434\u0435\u043B\u044C\u0446\u0435\u0432 PS5"],[7,"sys","\u0412 \u044D\u0442\u043E\u0439 \u043F\u0430\u0440\u0442\u0438\u0438 6 \u043F\u043E\u0440\u0443\u0447\u0435\u043D\u0438\u0439 \u0438\u0437 10. \u0412 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0439 \u0432\u044B\u043F\u0430\u0434\u0443\u0442 \u0434\u0440\u0443\u0433\u0438\u0435"],[10,"sanya","\u041E\u043D\u0430 \u0432\u043D\u0430\u0447\u0430\u043B\u0435 \u0434\u0438\u043A\u043E \u043C\u0435\u0434\u043B\u0435\u043D\u043D\u0430\u044F. \u0418 \u043E\u043F\u044F\u0442\u044C \u0441\u043D\u0435\u0433"],[14,"max","\u0421\u0430\u043D\u044F\u{1F64F}\u{1F3FB}\u{1F64F}\u{1F3FB}\u{1F629} \u043F\u043E\u0442\u0435\u0440\u043F\u0438 \u0447\u0443\u0442\u044C-\u0447\u0443\u0442\u044C!! \u041E\u043D\u043E \u0441\u0442\u043E\u0438\u0442 \u0442\u043E\u0433\u043E \u0432 20 \u043A\u0440\u0430\u0442"],[46,"dima","\u041A\u0441\u0442\u0430\u0442\u0438, \u044D\u0442\u0443 \u0438\u0433\u0440\u0443 \u044F \u0441\u0434\u0435\u043B\u0430\u043B \u043D\u0435\u0439\u0440\u043E\u0441\u0435\u0442\u044C\u044E. \u0417\u0430 \u043D\u043E\u0447\u044C. \u042D\u0442\u043E \u0443\u0436\u0435 \u043D\u043E\u0432\u0430\u044F \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u044C)"],[50,"nikita","\u042F, \u043A\u0441\u0442\u0430\u0442\u0438, \u0442\u043E\u0436\u0435 \u2014 3 \u0438\u0433\u0440\u0443 \u0443\u0436\u0435 \u0441\u0434\u0435\u043B\u0430\u043B\u{1F601}"],[54,"arkasha","\u0415\u0431\u0430\u0442\u044C \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438 \u043A\u043E\u043D\u0435\u0447\u043D\u043E"],[78,"igor","\u0411\u0430\u0442\u043B\u0430\u2026 \u043F\u0438\u0437\u0434\u0430\u0442\u0430\u044F!!!"],[81,"max","\u0420\u0430\u0441\u043F\u0440\u043E\u0431\u043E\u0432\u0430\u043B"],[102,"misha","\u0422\u043E\u043B\u044C\u043A\u043E \u043A\u0443\u043F\u0438\u043B PS5. \u041A\u0430\u043A\u0443\u044E \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0443 \u0431\u0440\u0430\u0442\u044C?","misha"],[104,"pasha","Extra \u0431\u0435\u0440\u0438","misha"],[106,"dima","\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0443\u044E \u0431\u0440\u0430\u0442\u044C \u043D\u0430\u0434\u043E","misha"],[108,"nikita","\u041C\u043D\u0435 \u043A\u0430\u0436\u0435\u0442\u0441\u044F \u043F\u043E\u043A\u0443\u043F\u0430\u0442\u044C \u0443\u0434\u043E\u0431\u043D\u0435\u0435 \u{1F937}\u200D\u2642\uFE0F","misha"],[110,"geisler","\u041C\u0438\u0448\u0430, \u043C\u043E\u0436\u0435\u0448\u044C \u0432\u043E\u043E\u0431\u0449\u0435 \u043D\u0435 \u0431\u0440\u0430\u0442\u044C \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0443","misha"],[112,"max","\u041C\u0438\u0448\u0430, \u0431\u0435\u0440\u0438 \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0443 \u0438 \u043D\u0435 \u0435\u0431\u0438 \u043C\u043E\u0437\u0433\u0438","misha"],[114,"pasha","\u041D\u0443 \u0438\u043B\u0438 \u0432\u043E\u043E\u0431\u0449\u0435 \u043D\u0435 \u0431\u0435\u0440\u0438","misha"],[117,"misha","\u0412\u043E\u0442 \u0442\u0430\u043A \u0430\u0433\u0430","misha"],[142,"pasha","\u041F\u0440\u043E \u0441\u043B\u0438\u0432\u044B \u0432 \u043A\u0443\u0440\u0441\u0435? \u041F\u0438\u0437\u0434\u0435\u0446 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u0430\u044F \u0445\u0443\u0439\u043D\u044F)","pasha"],[168,"igor","\u0411\u0430\u0442\u043B\u0430 \u2026 \u0437\u0430\u043B\u0443\u043F\u0430 \u043F\u043E\u043B\u043D\u0430\u044F!!!"],[171,"nikita","\u0427\u0442\u043E \u043F\u0440\u043E\u0438\u0437\u043E\u0448\u043B\u043E?)"],[198,"artem","\u0411\u043E\u0436\u0435, \u0445\u0440\u0430\u043D\u0438 \u043F\u0438\u0440\u0430\u0442\u043E\u0432, \u0430\u043C\u0438\u043D\u044C"],[218,"max",{voice:47}],[220,"max",{voice:8}],[224,"arkasha","\u042F \u043D\u0435 \u0441\u043B\u0443\u0448\u0430\u043B"],[246,"kos","\u041D\u0430 \u0421\u0435\u0440\u0433\u0435\u044F \u0441\u0442\u043E\u043B\u0438\u043A"],[266,"geisler","\u041C\u0435\u043D\u044F \u0443\u0434\u0438\u0432\u043B\u044F\u0435\u0442 \u043F\u043E\u0447\u0435\u043C\u0443 \u043F\u0441 \u0434\u043E \u0441\u0438\u0445 \u043F\u043E\u0440 \u044D\u0442\u0443 \u043B\u0430\u0432\u043E\u0447\u043A\u0443 \u043D\u0435 \u043F\u0440\u0438\u043A\u0440\u044B\u043B\u0438))"],[288,"max","\u041E\u0447\u0435\u043D\u044C \u043F\u043B\u043E\u0445\u043E\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435. \u041E\u043D\u043E \u043C\u043D\u0435 \u043E\u0447\u0435\u043D\u044C \u043D\u0435 \u043D\u0440\u0430\u0432\u0438\u0442\u0441\u044F"],[304,"pasha","BG3 \u0445\u043E\u0447\u0443 \u043D\u0430\u0447\u0430\u0442\u044C, \u043D\u043E \u0431\u043E\u044E\u0441\u044C"],[322,"igor","\u0413\u043E\u0442\u043E\u0432 \u043A \u0433\u0442\u0430"],[336,"geisler","\u041D\u043E\u0432\u0430\u044F \u0417\u0435\u043B\u0430\u043D\u0434\u0438\u044F \u043F\u043E\u043A\u0430 \u0442\u043E\u043B\u044C\u043A\u043E \u043A\u0430\u0447\u0430\u0435\u0442"],[348,"max","\u041B\u0435\u0442\u0441 \u0433\u043E\u0443 \u043D\u0430\u0445\u0443\u0439"],[358,"misha","\u0414\u0430 \u043F\u043E\u043A\u0430 \u043D\u0438\u043A\u0430\u043A, \u0432\u0440\u0435\u043C\u0435\u043D\u0438 \u0442\u0443\u043F\u043E \u043D\u0435\u0442 ("]],$o=[[300,"5 \u043C\u0438\u043D\u0443\u0442..."],[240,"4 \u043C\u0438\u043D\u0443\u0442\u044B.."],[180,"3 \u043C\u0438\u043D\u0443\u0442\u044B..."],[120,"2 \u043C\u0438\u043D\u0443\u0442\u044B.."],[60,"\u041C\u0438\u043D\u0443\u0442\u0430..."],[21,"21 \u0441\u0435\u043A\u0443\u043D\u0434\u0430.."]],ua=[["arkasha","\u0417\u0430\u043F\u0443\u0441\u043A\u0430\u044E..."],["arkasha","\u041E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435 \u043F\u0435\u0440\u0432\u043E\u0433\u043E \u0434\u043D\u044F. 38 \u0433\u0431. \u0410\u0445\u0443\u0435\u0442\u044C"],["geisler","\u0423 \u043C\u0435\u043D\u044F 14%. \u041A\u0430\u043A \u0440\u0430\u0437 \u043A 19\u043C\u0443 \u0434\u043E\u043A\u0430\u0447\u0430\u0435\u0442\u0441\u044F \u{1F602}\u{1F602}"],["max",{voice:94}],["igor","\u0423\u0436\u0435 \u043D\u0430\u0448\u0451\u043B 2 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438 \u0438\u0437 144"],["sanya","\u041D\u0430\u0447\u0430\u043B\u043E \u0442\u044F\u0433\u043E\u043C\u043E\u0442\u043D\u043E\u0435"],["max","\u0421\u0430\u043D\u044C, \u043D\u0430\u0434\u043E \u0447\u0443\u0442\u044C-\u0447\u0443\u0442\u044C \u043F\u0435\u0440\u0435\u0442\u0435\u0440\u043F\u0435\u0442\u044C!)) \u0440\u0435\u0430\u043B\u044C\u043D\u043E"],["pasha","\u0414\u043B\u044F \u043C\u0435\u043D\u044F \u043A\u0440\u043E\u043C\u0435 LOA \u0438 RDR \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u0437\u0430\u0435\u0431\u0438\u0441\u044C\u{1F612}"],["kos","\u041D\u0430 \u0421\u0435\u0440\u0433\u0435\u044F \u0441\u0442\u043E\u043B\u0438\u043A"],["artem","\u0411\u043E\u0436\u0435, \u0445\u0440\u0430\u043D\u0438 \u043F\u0438\u0440\u0430\u0442\u043E\u0432, \u0430\u043C\u0438\u043D\u044C"],["misha","\u0414\u0430 \u043F\u043E\u043A\u0430 \u043D\u0438\u043A\u0430\u043A, \u0432\u0440\u0435\u043C\u0435\u043D\u0438 \u0442\u0443\u043F\u043E \u043D\u0435\u0442 ("],["dima","\u0414\u0430\u0432\u043D\u043E \u043D\u0435 \u0432\u043E\u0435\u0432\u0430\u043B\u0438)"],["nikita","\u0427\u0442\u043E \u044D\u0442\u043E?"]],nh=[[0,"\xAB\u0427\u0442\u043E \u044D\u0442\u043E?\xBB","\u041D\u0438\u043A\u0438\u0442\u0430 \u0438\u0433\u0440\u0430\u0435\u0442 \u043B\u0443\u0447\u0448\u0435. \u0410 \u043E\u043D \u0432\u043E\u043E\u0431\u0449\u0435 \u043D\u0435 \u0438\u0433\u0440\u0430\u0435\u0442."],[700,"\xAB\u041F2 \u0431\u0435\u0437 \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442\u0430\xBB","\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u0434\u043E\u0441\u0442\u0443\u043F \u0432 \u0438\u043D\u0435\u0442. \u0418\u043B\u0438 \u043D\u0430\u043E\u0431\u043E\u0440\u043E\u0442."],[1700,"\xAB\u0422\u0438\u043F\u044B \u0437\u0430 390 \u20BD\xBB","\u041D\u0430 \u0430\u0432\u0438\u0442\u043E \u0442\u0430\u043A\u043E\u0439 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u0441\u0442\u043E\u0438\u0442 5000."],[2900,"\xAB\u041F3 \u0441\u043E \u0441\u0432\u043E\u0435\u0433\u043E \u043F\u0440\u043E\u0444\u0438\u043B\u044F\xBB","\u0421 \u0442\u0440\u043E\u0444\u0435\u044F\u043C\u0438 \u0438 \u0431\u0435\u0437 \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442\u0430."],[4100,"\xAB\u0411\u0430\u0442\u044F \u0432 \u0437\u0434\u0430\u043D\u0438\u0438\xBB","\u0412\u0440\u0435\u043C\u0435\u043D\u0438 \u043D\u0435\u0442, \u0430 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u0435\u0441\u0442\u044C."],[5400,"\xAB\u041B\u0435\u0433\u0435\u043D\u0434\u0430 Beam Store\xBB","\u041C\u044B \u043F\u043E\u043B\u0443\u0447\u0438\u043B\u0438 \u0432\u0430\u0448\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435. \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043E\u0436\u0438\u0434\u0430\u0439\u0442\u0435."],[6800,"\xAB\u0412\u043B\u0430\u0434\u0435\u043B\u0435\u0446 \u0447\u0430\u0442\u0430\xBB","\u0410\u0440\u043A\u0430\u0448\u0430 \u043D\u0430\u043F\u0440\u044F\u0433\u0441\u044F \u0438 \u043F\u043E\u043F\u0440\u0430\u0432\u0438\u043B \u0431\u0430\u0431\u043E\u0447\u043A\u0443."]],ih=[["\u041D\u0430 \u041F3 \u043D\u0430\u0434\u043E \u0438\u0433\u0440\u0430\u0442\u044C \u0441\u2026","\u0432\u044B\u0434\u0430\u043D\u043D\u043E\u0433\u043E \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0430","\u0441\u0432\u043E\u0435\u0433\u043E \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0430"],["\u041F2 \u2014 \u044D\u0442\u043E \u043A\u043E\u0433\u0434\u0430 \u0438\u0433\u0440\u0430\u0435\u0448\u044C \u0441\u2026","\u0441\u0432\u043E\u0435\u0433\u043E","\u0432\u044B\u0434\u0430\u043D\u043D\u043E\u0433\u043E"],["\u0411\u0435\u0437 \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442\u0430 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442\u2026","\u041F2","\u041F3"],["\u0427\u0442\u043E \u0445\u0443\u0436\u0435 \u0438 \u0434\u0435\u0448\u0435\u0432\u043B\u0435?","\u041F2","\u041F3"],["\u0410\u043A\u043A\u0430\u0443\u043D\u0442, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0442\u0435\u0431\u0435 \u0434\u0430\u043B\u0438, \u043D\u0430\u0434\u043E\u2026","\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043D\u0430 \u043A\u043E\u043D\u0441\u043E\u043B\u0438","\u0443\u0434\u0430\u043B\u0438\u0442\u044C"]],sh=["\u0421\u043E\u0432\u0435\u0442\u0443\u044E\u0442: \u043F\u0435\u0440\u0435\u0442\u0435\u0440\u043F\u0438 \u0441\u043D\u0435\u0436\u043D\u043E\u0435 \u043D\u0430\u0447\u0430\u043B\u043E","\u0413\u0440\u0443\u0437\u0438\u043C 212 \u0413\u0411\u2026","\u041E\u0441\u0432\u043E\u0431\u043E\u0436\u0434\u0430\u0435\u043C \u043C\u0435\u0441\u0442\u043E: \u0443\u0434\u0430\u043B\u044F\u0435\u043C \u0412\u0435\u0434\u044C\u043C\u0430\u043A\u0430","\u0421\u043F\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u043C \u0443 \u0442\u0438\u043F\u043E\u0432 \u0437\u0430 390 \u20BD","\u041F2 \u0438\u043B\u0438 \u041F3? \u0412\u0441\u0451 \u0442\u0430\u043A, \u0442\u043E\u043B\u044C\u043A\u043E \u043D\u0430\u043E\u0431\u043E\u0440\u043E\u0442"],$f={arkasha:"\u0412\u0435\u0434\u044C\u043C\u0430\u043A \u043D\u0435 \u043F\u043E\u0441\u0442\u0440\u0430\u0434\u0430\u043B. \u0418\u043B\u0438 \u043F\u043E\u0441\u0442\u0440\u0430\u0434\u0430\u043B. \u0412\u0441\u0435 \u0442\u0430\u043A, \u0442\u043E\u043B\u044C\u043A\u043E \u043D\u0430\u043E\u0431\u043E\u0440\u043E\u0442.",max:"\u0417\u0430\u043F\u0438\u0441\u0430\u043B \u043E\u0431 \u044D\u0442\u043E\u043C \u0433\u043E\u043B\u043E\u0441\u043E\u0432\u043E\u0435 \u043D\u0430 1:34. \u041D\u0438\u043A\u0442\u043E \u043D\u0435 \u043F\u043E\u0441\u043B\u0443\u0448\u0430\u043B.",dima:"\u0421\u0434\u0435\u043B\u0430\u043B \u0438\u0433\u0440\u0443 \u043D\u0435\u0439\u0440\u043E\u0441\u0435\u0442\u044C\u044E, \u043F\u043E\u043A\u0430 \u0432\u0441\u0435 \u0436\u0434\u0430\u043B\u0438 \u0438\u0433\u0440\u0443. \u041F\u043E\u0442\u043E\u043C \u043F\u043E\u043A\u0430\u0436\u0443)",igor:"\u0421\u043E\u0431\u0440\u0430\u043B \u043D\u0435 \u0432\u0441\u0451. \u0417\u0430\u0432\u0451\u043B \u043D\u043E\u0432\u044B\u0439 \u0430\u043A\u043A\u0430\u0443\u043D\u0442, \u0447\u0442\u043E\u0431\u044B \u043D\u0430\u0447\u0430\u0442\u044C \u0437\u0430\u043D\u043E\u0432\u043E.",geisler:"\u0414\u043E\u043A\u0430\u0447\u0430\u043B\u043E\u0441\u044C 14%. \u041A\u0430\u043A \u0440\u0430\u0437 \u043A 19-\u043C\u0443.",pasha:"\u0412\u044B\u0448\u043B\u0430 \u0431\u0435\u0437 \u043F\u0435\u0440\u0435\u043D\u043E\u0441\u043E\u0432. \u041F\u0430\u0448\u0430 \u0432\u0441\u0451 \u0440\u0430\u0432\u043D\u043E \u0431\u043E\u0438\u0442\u0441\u044F \u043D\u0430\u0447\u0438\u043D\u0430\u0442\u044C.",nikita:"\u0422\u0430\u043A \u0438 \u043D\u0435 \u043F\u043E\u043D\u044F\u043B, \u0447\u0442\u043E \u044D\u0442\u043E. \u0417\u0430\u0442\u043E \u0441\u0434\u0435\u043B\u0430\u043B \u0447\u0435\u0442\u0432\u0451\u0440\u0442\u0443\u044E \u0438\u0433\u0440\u0443.",kos:"\u0421\u0442\u043E\u043B\u0438\u043A \u043D\u0430 \u0421\u0435\u0440\u0433\u0435\u044F \u0432\u0441\u0451 \u0435\u0449\u0451 \u0437\u0430\u0431\u0440\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u043D.",artem:"\u041F\u043B\u043E\u0439\u043A\u0430 \u0447\u0438\u0441\u0442\u0430\u044F. \u0420\u0443\u043A\u0438 \u0432 \u0440\u044B\u0431\u0435. \u0410\u043C\u0438\u043D\u044C.",sanya:"\u041D\u0430\u0447\u0430\u043B\u043E \u0431\u044B\u043B\u043E \u0442\u044F\u0433\u043E\u043C\u043E\u0442\u043D\u043E\u0435. \u0414\u0430\u043B \u0432\u0442\u043E\u0440\u043E\u0439 \u0448\u0430\u043D\u0441.",misha:"\u0411\u0430\u0442\u044F \u0432 \u0437\u0434\u0430\u043D\u0438\u0438. \u0412\u0440\u0435\u043C\u0435\u043D\u0438 \u043F\u043E-\u043F\u0440\u0435\u0436\u043D\u0435\u043C\u0443 \u043D\u0435\u0442."};var dt=i=>document.getElementById(i),Vn=window.matchMedia&&matchMedia("(pointer: coarse)").matches||"ontouchstart"in window;Vn&&document.body.classList.add("touch");var Rn=new URLSearchParams(location.search);dt("tip").textContent=sh[Math.floor(Math.random()*sh.length)];var ji=dt("c"),hi=new ta({canvas:ji,antialias:!1,alpha:!1,stencil:!1,powerPreference:"high-performance"});hi.shadowMap.enabled=!0;hi.shadowMap.type=zc;hi.setClearColor(329487);var Ze=new gs,Fe=new fn(58,1,.5,1100),me=Of(Ze),Li=new ko(hi),Ki=new Xo(Ze,Vn?3600:6500),ui=new oa(Ze),Kf=new qo(Ze),Mn=new Yo(Ze),Qi=new oa(Ze,900);Qi.u.uScale={value:1};Qi.pts.visible=!1;var Ar=[new Tr(Ze),new Tr(Ze),new Tr(Ze)],Nt=new ca,oi=new Lo(16773336,0,80,.5,.8,1);Ze.add(oi,oi.target);var od=(()=>{let i=new de;for(let r of[-.62,.62])i.add(new $n(1,1,12,1,!0),Q(r,.72,9.2,1.7,14,1.7,0,-Math.PI/2),[.15,.14,.11]);let t=new oe(i.build(),me.cones.material);t.renderOrder=4,t.frustumCulled=!1;let e=new de;e.quad([-4.5,.2,26],[4.5,.2,26],[4.5,.2,2.4],[-4.5,.2,2.4],[.34,.32,.25]),e.quad([-2.8,.21,12.5],[2.8,.21,12.5],[2.8,.21,2.2],[-2.8,.21,2.2],[.5,.47,.36]),e.quad([-2.2,.21,-1.6],[2.2,.21,-1.6],[2.2,.21,-6.4],[-2.2,.21,-6.4],[.4,.035,.02]);let n=new oe(e.build(),me.pools.material);n.renderOrder=2,n.frustumCulled=!1;let s=new Be;return s.add(t,n),s})(),fi={};for(let i of pn){let t=kf(i.id);t.visible=!1,Ze.add(t),fi[i.id]=t}var xh=(()=>{let i=new gs;i.add(new yr(13622527,6706500,2.4));let t=new Mr(16773344,2.6);t.position.set(1.5,2,3),i.add(t);let e=new fn(30,1,.1,20);e.position.set(.45,1.98,3),e.lookAt(0,1.68,0),hi.setPixelRatio(1),hi.setSize(128,128,!1);let n={};for(let a of pn){let o=fi[a.id];i.add(o),o.visible=!0,o.position.set(0,0,0),o.rotation.set(0,.3,0),i.background=new Dt(a.css).multiplyScalar(.3).add(new Dt(1186352)),hi.render(i,e),n[a.id]=ji.toDataURL("image/png"),Ze.add(o),o.visible=!1}let s=document.createElement("canvas");s.width=s.height=64;let r=s.getContext("2d");return r.fillStyle="#2f7fe0",r.fillRect(0,0,64,64),r.font="40px system-ui",r.textAlign="center",r.textBaseline="middle",r.fillText("\u26A1",32,35),n.beam=s.toDataURL(),n})(),_h={nikita:"#aab3cc",dima:"#8fa6dd",igor:"#f0f0f0"},y={state:"boot",t:0,time:0,left:360,score:0,pid:null,mode:"car",car:null,cars:[],mods:[],npcs:[],sayQ:[],sayT:0,mission:null,queue:[],nextM:6,wanted:0,caught:0,busy:0,modal:!1,flags:{},stats:{missions:0,total:0,cards:0,feathers:0,orchids:0,bans:0,stolen:0,smashed:0},amb:0,cd:0,acc:1,lastBump:0,shake:0,hudT:0,placeT:0,lastPlace:null},nt={x:0,z:0,y:0,vx:0,vz:0,layer:0,h:0,vy:0,walk:0},Xt={yaw:0,off:0,pitch:.26,manual:9,pos:new D,init:!1},Cn=null,Rr="",iv=[{scale:2,msaa:4,shadow:2048,snow:1,bloom:5,mirror:!0},{scale:1.5,msaa:0,shadow:2048,snow:.85,bloom:5,mirror:!0},{scale:1.2,msaa:0,shadow:1024,snow:.65,bloom:5,mirror:!0},{scale:.95,msaa:0,shadow:0,snow:.5,bloom:4,mirror:!0},{scale:.72,msaa:0,shadow:0,snow:.35,bloom:4,mirror:!1},{scale:.55,msaa:0,shadow:0,snow:.25,bloom:0,mirror:!1}],sv=[{scale:2,msaa:0,shadow:1024,snow:.75,bloom:5,mirror:!0},{scale:1.5,msaa:0,shadow:0,snow:.55,bloom:4,mirror:!0},{scale:1.25,msaa:0,shadow:0,snow:.4,bloom:4,mirror:!1},{scale:1,msaa:0,shadow:0,snow:.3,bloom:3,mirror:!1},{scale:.75,msaa:0,shadow:0,snow:.22,bloom:0,mirror:!1}],al=Vn?sv:iv,Pi=Rn.has("q")?we(+Rn.get("q")||0,0,al.length-1):Vn?1:0,ld=720,Qf=!1,rh=!1,Ko=0,rv=Pi;function Rs(){let i=al[Pi],t=Math.min(window.devicePixelRatio||1,i.scale),e=innerWidth*t,n=innerHeight*t,s=Math.min(1,Math.sqrt((Vn?17e5:44e5)/(e*n)));e=Math.max(160,Math.round(e*s)),n=Math.max(160,Math.round(n*s)),ld=n,hi.setPixelRatio(1),hi.setSize(e,n,!1),Li.levels=i.bloom||1,Li.bloom=i.bloom>0,Li.setSize(e,n,i.msaa);let r=me.moon.shadow;me.moon.castShadow=i.shadow>0,i.shadow&&r.mapSize.x!==i.shadow&&(r.mapSize.set(i.shadow,i.shadow),r.map&&(r.map.dispose(),r.map=null)),me.mirror.visible=me.bridgesM.visible=me.streaks.visible=i.mirror,li&&(li.visible=i.mirror),Ki.density(i.snow);let a=innerWidth/innerHeight;Fe.aspect=a,el=a>=1.3?58:Math.min(88,2*Math.atan(Math.tan(29*Math.PI/180)*1.3/a)*180/Math.PI)}var el=58;addEventListener("resize",()=>Rs());addEventListener("orientationchange",()=>setTimeout(Rs,250));var ah=dt("feed"),ch=dt("plog"),yn=i=>String(i).replace(/[&<>]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;"})[t]),av=i=>`<div class="voice" data-sec="${i}"><div class="p">\u25B6</div><div class="w"></div><div class="d">${Math.floor(i/60)}:${String(i%60).padStart(2,"0")}</div><div class="u"></div></div>`;function cd(i,t){let e=i===y.pid,n=document.createElement("div");if(n.className="msg"+(e?" me":"")+(i==="sys"?" sys":""),i==="sys")n.innerHTML=`<div class="b">${yn(t)}</div>`;else{let s=i==="beam"?{name:"Beam Store \u{1F916}",css:"#5db0ff"}:ri[i],r=typeof t=="object"?av(t.voice):yn(t).replace("@P",Rr);n.innerHTML=(e?"":`<img src="${xh[i]}" alt="">`)+`<div class="b">${e?"":`<div class="n" style="color:${_h[i]||s.css}">${s.name}</div>`}${r}</div>`}return n}function pa(i,t){let e=cd(i,t);for(ah.appendChild(e);ah.children.length>5;)ah.firstChild.remove();ch.appendChild(e.cloneNode(!0)),ch.scrollTop=1e9,setTimeout(()=>e.remove(),9600),Nt.play(typeof t=="object"?"voice":"msg")}var Ae=i=>{for(let t of i)y.sayQ.push(t)};function jn(i,t){let e=dt("big");e.innerHTML=yn(i)+(t?`<small>${yn(t)}</small>`:""),e.classList.remove("show"),e.offsetWidth,e.classList.add("show")}function ci(i){y.score=Math.max(0,y.score+i),dt("score").textContent=y.score}var jf=0;function Cs(i,t=0){let e=dt("prompt");if(!i){y.time>jf&&e.classList.add("hidden");return}e.textContent=i,e.classList.remove("hidden"),jf=t?y.time+t:0}function vh(i,t){y.modal=!0,dt("mtitle").textContent=i.title,dt("mtext").textContent=i.text;let e=dt("mopts");e.innerHTML="",i.opts.forEach(n=>{let s=document.createElement("button");s.textContent=n.label,s.onclick=()=>{dt("modal").classList.add("hidden"),y.modal=!1,t(n)},e.appendChild(s)}),dt("modal").classList.remove("hidden")}var Ii=0;try{Ii=we(+(localStorage.getItem("gtr_sel")||2),0,pn.length-1)||0}catch{Ii=2}function ov(){let i=dt("strip");pn.forEach((t,e)=>{let n=document.createElement("img");n.src=xh[t.id],n.alt=t.name,n.onclick=()=>{Nt.init(),Qo(e)},i.appendChild(n)}),dt("prev").onclick=()=>{Nt.init(),Qo((Ii+pn.length-1)%pn.length)},dt("next").onclick=()=>{Nt.init(),Qo((Ii+1)%pn.length)},dt("play").onclick=()=>{Nt.init(),xd()},dt("blb").onclick=()=>{Nt.init(),Pv()},dt("lbmx").onclick=()=>dt("lbm").classList.add("hidden"),dt("lbm").onclick=t=>{t.target===dt("lbm")&&dt("lbm").classList.add("hidden")},dt("hint").textContent=Vn?"\u041B\u0435\u0432\u044B\u0439 \u043F\u0430\u043B\u0435\u0446 \u2014 \u0440\u0443\u043B\u044C \u0438 \u0433\u0430\u0437 \xB7 \u043F\u0440\u0430\u0432\u044B\u0439 \u2014 \u043A\u0430\u043C\u0435\u0440\u0430 \xB7 \u{1F6AA} \u0432\u044B\u0439\u0442\u0438 \u0438\u0437 \u043C\u0430\u0448\u0438\u043D\u044B \xB7 \u0437\u0432\u0443\u043A \u0432\u043A\u043B\u044E\u0447\u0438\u0442\u0441\u044F \u043F\u043E\u0441\u043B\u0435 \u043A\u0430\u0441\u0430\u043D\u0438\u044F":"WASD \u2014 \u0435\u0445\u0430\u0442\u044C \xB7 \u041F\u0440\u043E\u0431\u0435\u043B \u2014 \u0440\u0443\u0447\u043D\u0438\u043A \xB7 E \u2014 \u0432\u044B\u0439\u0442\u0438 / \u0441\u0435\u0441\u0442\u044C \xB7 R \u2014 \u0440\u0430\u0434\u0438\u043E \xB7 H \u2014 \u043A\u043B\u0430\u043A\u0441\u043E\u043D \xB7 \u043C\u044B\u0448\u044C \u0441 \u0437\u0430\u0436\u0430\u0442\u043E\u0439 \u043A\u043D\u043E\u043F\u043A\u043E\u0439 \u2014 \u043A\u0430\u043C\u0435\u0440\u0430 \xB7 T \u2014 \u0447\u0430\u0442",Vn&&(dt("hint").textContent="\u041B\u0435\u0432\u044B\u0439 \u043F\u0430\u043B\u0435\u0446 \u2014 \u0440\u0443\u043B\u044C \u0438 \u0433\u0430\u0437 \xB7 \u043F\u0440\u0430\u0432\u044B\u0439 \u2014 \u043A\u0430\u043C\u0435\u0440\u0430 \xB7 \u{1F6AA} \u0432\u044B\u0439\u0442\u0438 \u0438\u0437 \u043C\u0430\u0448\u0438\u043D\u044B \xB7 \u043A\u0440\u0430\u0441\u0438\u0432\u0435\u0435 \u0432\u0441\u0435\u0433\u043E \u2014 \u043F\u043E\u0432\u0435\u0440\u043D\u0443\u0432 \u0442\u0435\u043B\u0435\u0444\u043E\u043D \u0433\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u043E"),Qo(Ii)}function Qo(i){Ii=i;let t=pn[i];dt("cname").textContent=t.name,dt("ctag").textContent=t.tag,dt("cdesc").textContent=t.desc,dt("play").textContent="\u0418\u0433\u0440\u0430\u0442\u044C \u0437\u0430: "+t.name,[...dt("strip").children].forEach((n,s)=>n.classList.toggle("on",s===i));for(let n of pn)fi[n.id].visible=n.id===t.id;let e=fi[t.id];e.position.set(149.6,0,-29),e.rotation.set(0,-Math.PI/2,0),e.userData.pop=1,Nt.play("tick"),Nt.setTheme(t.id)}var ai=[153.7,-23.5,148.32,-29.42,.64];function lv(i){let t=fi[pn[Ii].id],e=y.time;t.userData.pop=Math.max(0,(t.userData.pop||0)-i*3),t.rotation.y=ai[4]+Math.sin(e*.6)*.35+t.userData.pop*2.5,ra(t,e,0,e%5<1.4);let n=Fe.aspect<1,s=!n&&innerHeight<520,r=s?1.9:0,a=ai[2]-ai[0],o=ai[3]-ai[1],l=Math.hypot(a,o),c=n?2.5:0;Fe.position.set(ai[0]+Math.sin(e*.21)*.5-a/l*c,1.5+Math.sin(e*.3)*.12,ai[1]+Math.cos(e*.17)*.5-o/l*c),Fe.lookAt(ai[2]-o/l*r,n?-.7:s?1.25:.2,ai[3]+a/l*r),Fe.fov=n?48:s?30:44,Fe.updateProjectionMatrix();for(let h of y.cars)h.ai&&Wo(h,i,1e5,1e5);me.setShadowCenter(150,-30),dd(i),Mn.begin(),Mh(),bh(t),Mn.end()}var Ps=[],ma=new gr(new Nn(.8,1.1,.07),new dn,36);ma.frustumCulled=!1;Ze.add(ma);(function(){let t=Es(144),e=(s,r,a,o=0)=>{let l=0;for(;me.col.near(s,r,1.8)&&l++<40;)s+=2.5;Ps.push({x:s,z:r,y:o,type:a,got:!1})};for(let s=0;s<12;s++){let r=en[(s*3+1)%8],a=-165+t()*330;e(r+(t()<.5?-3.3:3.3),Ye.some(o=>Math.abs(o-a)<9)?a+16:a,0)}for(let s=0;s<6;s++){let r=Ye[(s*2+1)%7],a=s%2?1:-1;e(a*(90+t()*170),r+(t()<.5?-3.3:3.3),0)}e(0,-60,0),e(-20,120,0);for(let[s,r]of[[175,30],[-245,30],[245,-90],[-105,-150]])e(s,r,0);for(let s of[-165,-112,-15,42,78,168])e(-28+t()*56,s,1,-3);for(let[s,r]of[[103,-12],[-105,106],[57,-128],[-57,62],[-262,-137],[120,-134]])e(s,r,2);let n=[new Dt(3,2.1,.5),new Dt(1.6,2.4,3),new Dt(3,.7,2.2)];Ps.forEach((s,r)=>ma.setColorAt(r,n[s.type]))})();var Pr=new fe,Lr=new Un,Ir=new D,Dr=new D,cv=new D(0,1,0),hd=new Zi,Cr=[[1.5,1,.25],[.7,1.1,1.5],[1.5,.3,1.1]];function ud(i){let t=y.time,e=y.mode==="car"?3.4:2.1;for(let n=0;n<Ps.length;n++){let s=Ps[n],r=s.y+1.5+Math.sin(t*2+n)*.25;Lr.setFromAxisAngle(cv,t*2.2+n),Ir.set(s.x,r,s.z),Dr.setScalar(s.got?1e-4:1),Pr.compose(Ir,Lr,Dr),ma.setMatrixAt(n,Pr),!s.got&&(Mn.add(s.x,r,s.z,3,Cr[s.type][0],Cr[s.type][1],Cr[s.type][2]),i&&Math.abs(nt.x-s.x)<e&&Math.abs(nt.z-s.z)<e&&Math.abs(nt.y-s.y)<2.6&&hv(s))}ma.instanceMatrix.needsUpdate=!0}function hv(i){i.got=!0,Nt.play("pick"),ui.burst(i.x,i.y+1.5,i.z,14,6,.7,Cr[i.type][0],Cr[i.type][1],Cr[i.type][2]);let t=y.stats;if(i.type===0){if(t.cards+=6,ci(30),t.cards===6&&y.pid!=="igor"&&Ae([["igor","\u041C\u043D\u0435 144 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438 \u0432 \u0440\u0434\u0440 \u043D\u0430\u0434\u043E \u043D\u0430\u0439\u0442\u0438"],["geisler","\u0414\u043E \u0432\u044B\u0445\u043E\u0434\u0430 \u0433\u0442\u0430 6 ?"],["igor","\u0410\u0433\u0430"]]),t.cards===72&&Ae([["igor","\u041D\u0435\u0434\u0435\u043B\u044E \u0435\u0431\u0443\u0447\u0438\u0445 \u043F\u0442\u0438\u0446 \u0441\u043E\u0431\u0438\u0440\u0430\u043B\u{1F613} \u041D\u0430\u0441\u0442\u0430\u043B\u043E \u0432\u0440\u0435\u043C\u044F \u0430\u0445\u0443\u0435\u043D\u043D\u044B\u0445 \u043A\u0430\u0440\u0442\u043E\u0447\u0435\u043A)"]]),t.cards%144===0){on("cards"),y.acc++,ci(500),jn("144 \u0438\u0437 144","+500 \xB7 \u0438 \u0432\u0441\u0451 \u0437\u0430\u043D\u043E\u0432\u043E"),Ae([["igor","\u0423 \u043C\u0435\u043D\u044F \u043D\u043E\u0432\u044B\u0439 \u0430\u043A\u043A\u0430\u0443\u043D\u0442 \u0438 \u043C\u043D\u0435 \u043D\u0430\u0434\u043E \u0437\u0430\u043A\u0440\u044B\u0442\u044C \u0440\u0434\u0440 \u043D\u0430 100% \u043D\u0430 \u043D\u0435\u043C))"],["artem","\u041F\u043E\u043A\u0430 \u0435\u0435 \u0418\u0433\u043E\u0440\u044C \u043F\u0440\u043E\u0439\u0434\u0451\u0442 \u043D\u0430 100% \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0440\u0430\u0437)"]]);for(let e of Ps)e.type===0&&(e.got=!1)}}else i.type===1?(t.feathers++,ci(120),t.feathers===6&&Ae([["igor","\u0421\u0430\u043C\u043E\u0435 \u043F\u0438\u0437\u0434\u0435\u0446 \u0447\u0442\u043E \u044F \u0441\u043E\u0431\u0440\u0430\u043B \u0432\u0441\u0435 \u043F\u0435\u0440\u044C\u044F \u0446\u0430\u043F\u0435\u043B\u044C"],["geisler","\u0410 \u0437\u0430\u0447\u0435\u043C \u0432\u0442\u043E\u0440\u043E\u0439 \u0440\u0430\u0437?)\u{1F605}"]])):(t.orchids++,ci(120),t.orchids===6&&Ae([["geisler","\u0422\u044B \u0438\u0445 \u0443\u0436\u0435 \u043D\u0430\u0445\u043E\u0434\u0438\u043B, \u043D\u043E \u043F\u0440\u043E\u0441\u0442\u043E \u043D\u0435 \u043F\u043E\u043C\u043D\u0438\u0448\u044C \u043A\u0443\u0434\u0430 \u0441\u043B\u043E\u0436\u0438\u043B)"]]));dt("coll").textContent=`\u{1F0CF} ${t.cards%144||(t.cards?144:0)}/144${y.acc>1?" (\u0430\u043A\u043A \u2116"+y.acc+")":""} \xB7 \u{1FAB6} ${t.feathers}/6 \xB7 \u{1F338} ${t.orchids}/6`}var tl=[],yh=[];(function(){let t=Es(390),e=[.86,.9,.97],n=new Fn(1,6,4),s=new $n(1,1,6),r=new tn(1,1,1,6),a=new de;a.add(n,Q(0,.45,0,.5,.45,.5),e),a.add(n,Q(0,1.05,0,.36,.33,.36),e),a.add(n,Q(0,1.52,0,.25,.24,.25),e),a.add(s,Q(0,1.52,.3,.05,.26,.05,0,Math.PI/2),[.9,.35,.05]),a.add(r,Q(0,1.8,0,.2,.2,.2),[.5,.06,.06]);let o=new de;o.add(s,Q(0,.4,0,.26,.75,.26),[.95,.3,.04]),o.add(r,Q(0,.45,0,.15,.1,.15),e),o.add(r,Q(0,.04,0,.34,.07,.34),[.1,.1,.12]);let l=new de;l.add(r,Q(0,.45,0,.3,.9,.3),[.12,.2,.16]),l.add(n,Q(0,.93,0,.32,.14,.32),e);let c=(h,u,f)=>{me.col.near(h,u,.7)||tl.push({x:h,z:u,y:0,x0:h,z0:u,vx:0,vy:0,vz:0,a:t()*6,sp:0,t:f,st:0,i:0})};for(let h of me.blocks)if(h.type!=="zone")for(let u=0;u<2;u++)c(h.x0+2+t()*(h.x1-h.x0-4),t()<.5?h.z0+1.6:h.z1-1.6,0);for(let[h,u,f]of[[70,-30,1],[210,30,1],[-140,-90,1],[-70,90,1],[175,60,0],[-175,-60,0],[105,0,0],[-245,120,0],[280,90,1],[-210,30,1]])for(let d=0;d<5;d++)c(f?h+1.2+d*1.3:h-3+d*1.5,f?u-3+d*1.5:u+1.2+d*1.3,1);me.lamps.forEach((h,u)=>{u%4===0&&!h.bridge&&h.h>6&&c(h.x+(h.x>h.hx?.9:-.9),h.z+(h.z>h.hz?.9:h.z<h.hz?-.9:.6),2)}),[a,o,l].forEach((h,u)=>{let f=tl.filter(x=>x.t===u).length,d=new gr(h.build(),me.mPL,Math.max(1,f));d.frustumCulled=!1,d.castShadow=!0,Ze.add(d),yh.push(d);let g=0;for(let x of tl)x.t===u&&(x.i=g++,fd(x));d.instanceMatrix.needsUpdate=!0})})();function fd(i){Lr.setFromEuler(hd.set(i.sp?i.a*1.3:0,i.a,i.sp?i.a*.8:0)),Ir.set(i.x,i.y+(ia(i.x0,i.z0)?0:.15),i.z),Dr.setScalar(i.st===2?1e-4:1),Pr.compose(Ir,Lr,Dr),yh[i.t].setMatrixAt(i.i,Pr)}function uv(i){let t=y.mode==="car"?y.car:null,e=t?t.speed:0,n=0;for(let s of tl){if(s.st===0){if(!t||e<3||Math.abs(s.x-nt.x)>2.1||Math.abs(s.z-nt.z)>2.1||Math.abs(nt.y)>1)continue;s.st=1,s.vx=t.e.vx*.7+(Math.random()-.5)*4,s.vz=t.e.vz*.7+(Math.random()-.5)*4,s.vy=4+e*.28,s.sp=6+Math.random()*8,y.stats.smashed++,ci(15),Nt.play("crash"),ui.burst(s.x,.8,s.z,16,6,.6,.7,.75,.9),y.stats.smashed===1&&Ae([["max","\u0422\u0430\u043C \u0441\u0430\u043C\u044B\u0439 \u043A\u0430\u0439\u0444 \u0432 \u0440\u0430\u0437\u0440\u0443\u0448\u0435\u043D\u0438\u044F\u0445, \u043E\u043D\u0438 \u043E\u0447 \u0440\u0435\u0430\u043B\u0438\u0441\u0442\u0438\u0447\u043D\u044B"],["sys","BeamNG-\u0431\u043E\u043D\u0443\u0441: +15 \u0437\u0430 \u043A\u0430\u0436\u0434\u044B\u0439 \u0441\u043D\u0435\u0441\u0451\u043D\u043D\u044B\u0439 \u043F\u0440\u0435\u0434\u043C\u0435\u0442"]]),y.stats.smashed===10&&on("beam"),y.stats.smashed%10===0&&jn("BeamNG \xD7"+y.stats.smashed,"+"+y.stats.smashed*15+" \u0437\u0430 \u0440\u0430\u0437\u0440\u0443\u0448\u0435\u043D\u0438\u044F")}s.st===1&&(s.vy-=22*i,s.x+=s.vx*i,s.y+=s.vy*i,s.z+=s.vz*i,s.a+=s.sp*i,s.y<0&&s.vy<0&&(s.st=2,ui.burst(s.x,.3,s.z,10,3,.5,.6,.65,.8)),fd(s),n|=1<<s.t)}for(let s=0;s<3;s++)n&1<<s&&(yh[s].instanceMatrix.needsUpdate=!0)}var nl=[],li=null,td=0;(function(){let t=new de,e=new Fn(1,7,5),n=new $n(1,1,5),s=[1,1,1],r=[.55,.55,.55],a=[1.7,1.7,1.7],o=[.04,.04,.04];t.add(e,Q(0,.9,0,.4,.52,.36),s),t.add(e,Q(0,1.5,.02,.36,.3,.33),s),t.add(e,Q(0,.5,-.25,.3,.2,.28),r);for(let f of[-1,1])t.add(e,Q(f*.17,1.95,.14,.09,.09,.09),a),t.add(e,Q(f*.17,1.955,.215,.045,.045,.03),o),t.add(e,Q(f*.55,1.05,.3,.17,.22,.14),s),t.add(n,Q(f*.55,1.12,.52,.1,.34,.08,0,Math.PI/2-.25),s),t.add(e,Q(f*.17,.12,.06,.12,.07,.18),r);let l=14,c=Es(1911),h=[13123630,14180922,11550842,13589043,11024938,14711370,9063088,3836592];li=new gr(t.build(),me.mPL,l),li.frustumCulled=!1,li.castShadow=!0,Ze.add(li);let u=me.blocks.filter(f=>["classic","panel","opera","mall","park","palace"].includes(f.type)&&f.ci>=2);for(let f=0;f<l;f++){let d=u[Math.floor(c()*u.length)],g=c()<.5,x=c()<.5,m=g?{ax:d.x0+2,az:x?d.z1-1.3:d.z0+1.3,bx:d.x1-2,bz:x?d.z1-1.3:d.z0+1.3}:{ax:x?d.x1-1.3:d.x0+1.3,az:d.z0+2,bx:x?d.x1-1.3:d.x0+1.3,bz:d.z1-2};nl.push(Object.assign(m,{u:c(),dir:c()<.5?1:-1,sp:1.2+c()*.9,y:0,vy:0,ox:0,oz:0,jx:0,jz:0,ph:c()*6})),li.setColorAt(f,new Dt(h[f%h.length]))}})();function dd(i){if(!li.visible)return;let t=y.state==="play"&&y.mode==="car"?y.car:null;for(let e=0;e<nl.length;e++){let n=nl[e],s=n.bx-n.ax,r=n.bz-n.az,a=Math.hypot(s,r);n.u+=n.dir*n.sp*i/a,n.u>1?(n.u=1,n.dir=-1):n.u<0&&(n.u=0,n.dir=1);let o=n.ax+s*n.u+n.ox,l=n.az+r*n.u+n.oz;if(t&&n.y===0&&t.speed>3){let h=o-t.e.x,u=l-t.e.z,f=Math.hypot(h,u);f<5.5&&(n.vy=7,n.jx=h/(f||1)*5,n.jz=u/(f||1)*5,y.time>td&&(td=y.time+.7,Nt.play("squeak")),y.flags.ped||(y.flags.ped=1,Ae([["sys","\u041F\u0440\u043E\u0445\u043E\u0436\u0438\u0439 \u0440\u0430\u043A \u043E\u0442\u043F\u0440\u044B\u0433\u043D\u0443\u043B. \u0417\u0434\u0435\u0441\u044C \u043D\u0438\u043A\u043E\u0433\u043E \u043D\u0435 \u0434\u0430\u0432\u044F\u0442"],["geisler","\u0416\u0435\u0441\u0442\u044C))"]])))}if(n.vy!==0||n.y>0)n.vy-=22*i,n.y+=n.vy*i,n.ox+=n.jx*i,n.oz+=n.jz*i,n.y<=0&&(n.y=0,n.vy=0);else{let h=Math.min(1,i*.7);n.ox-=n.ox*h,n.oz-=n.oz*h}let c=y.time*9+n.ph;Lr.setFromEuler(hd.set(n.y>0?y.time*8:0,Math.atan2(s*n.dir,r*n.dir),Math.sin(c)*.1)),Ir.set(o,.15+n.y+Math.abs(Math.sin(c))*.05,l),Dr.setScalar(1),Pr.compose(Ir,Lr,Dr),li.setMatrixAt(e,Pr)}li.instanceMatrix.needsUpdate=!0}var ed=[9054762,2771594,6975352,2042422,13620186,3107402,8018474,3815994,9080618,5909098];for(let i=0;i<11;i++){let t=i%5===4,e=i===2||i===7,n=new wr(Ze,0,0,0,e?14247450:t?14725152:ed[i%ed.length],e?"plow":t?"van":"sedan"),s=(i*17+3)%vn.length,r=vn[s].nb;Wf(n,s,r[i%r.length]),y.cars.push(n)}function Mh(){let i=Fe.position.x,t=Fe.position.z;for(let e of y.cars){let n=e.e;if(Math.abs(n.x-i)>190||Math.abs(n.z-t)>190)continue;let s=Math.sin(e.h),r=Math.cos(e.h),a=-r,o=s,l=e.ai||e===y.car?1:.25;for(let c of[-.62,.62])Mn.add(n.x+s*2.25+a*c,n.y+.74,n.z+r*2.25+o*c,2.1,1.7*l,1.6*l,1.25*l),Mn.add(n.x-s*2.25+a*c,n.y+.76,n.z-r*2.25+o*c,1.3,1.5*l,.1*l,.06*l);if(e.kind==="plow"){let c=(y.time*3|0)%2;Mn.add(n.x+s*1.35,n.y+2.5,n.z+r*1.35,4,c?2.6:.4,c?1.3:.2,.1)}if(Math.random()<.12&&Math.abs(n.x-i)<70&&Math.abs(n.z-t)<70&&ui.emit(n.x-s*2.25-a*.5,n.y+.4,n.z-r*2.25-o*.5,-s*.8+(Math.random()-.5)*.4,.9+Math.random()*.6,-r*.8+(Math.random()-.5)*.4,1.3,.09,.09,.11),e.kind==="mod"){let c=(y.time*7|0)%2;Mn.add(n.x,n.y+2,n.z,7,c?.3:2.6,.2,c?3:.3)}}}function bh(i){let t=i.userData.glow;t&&Mn.add(i.position.x,i.position.y+t.y,i.position.z,t.s,t.c[0],t.c[1],t.c[2])}var On={},Ur=null,il=0,sl=0,hh=0,uh=0,Ls=null,fh=0,dh=0,Sh=!1;addEventListener("keydown",i=>{if(On[i.code]=!0,["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Tab"].includes(i.code)&&i.preventDefault(),!i.repeat){if(Nt.init(),!dt("lbm").classList.contains("hidden")){(i.code==="Escape"||i.code==="Enter")&&dt("lbm").classList.add("hidden");return}if(y.state==="menu"){i.code==="ArrowLeft"||i.code==="KeyA"?dt("prev").onclick():i.code==="ArrowRight"||i.code==="KeyD"?dt("next").onclick():(i.code==="Enter"||i.code==="Space")&&xd();return}y.state==="play"&&(i.code==="KeyE"||i.code==="KeyF"||i.code==="Enter"?Ah():i.code==="KeyT"||i.code==="Tab"?Th():i.code==="KeyM"?gd():i.code==="KeyR"?Eh():i.code==="KeyH"&&wh())}});addEventListener("keyup",i=>{On[i.code]=!1});addEventListener("blur",()=>{for(let i in On)On[i]=!1});addEventListener("contextmenu",i=>i.preventDefault());addEventListener("gesturestart",i=>i.preventDefault());document.addEventListener("touchmove",i=>{i.target.closest&&i.target.closest("#plog,#final,#lbm")||i.preventDefault()},{passive:!1});document.addEventListener("visibilitychange",()=>{let i=Nt.ctx;i&&(document.hidden?i.suspend():i.resume(),gh=performance.now())});ji.addEventListener("webglcontextlost",i=>{i.preventDefault(),setTimeout(()=>location.reload(),400)});var oh=dt("stick"),pd=dt("knob");ji.addEventListener("pointerdown",i=>{if(Nt.init(),y.state==="play"){i.pointerType!=="mouse"&&i.clientX<innerWidth*.5&&Ur===null?(Ur=i.pointerId,hh=i.clientX,uh=i.clientY,oh.style.left=hh-64+"px",oh.style.top=uh-64+"px",oh.style.bottom="auto"):Ls===null&&(Ls=i.pointerId,fh=i.clientX,dh=i.clientY);try{ji.setPointerCapture(i.pointerId)}catch{}}});ji.addEventListener("pointermove",i=>{if(i.pointerId===Ur){let t=(i.clientX-hh)/52,e=(i.clientY-uh)/52,n=Math.hypot(t,e);n>1&&(t/=n,e/=n),il=t,sl=e,pd.style.transform=`translate(${t*40}px,${e*40}px)`}else if(i.pointerId===Ls){let t=(i.clientX-fh)*.006;y.mode==="car"?Xt.off=we(Xt.off+t,-2.8,2.8):Xt.yaw+=t,Xt.pitch=we(Xt.pitch+(i.clientY-dh)*.004,.04,.95),fh=i.clientX,dh=i.clientY,Xt.manual=0}});var md=i=>{i.pointerId===Ur&&(Ur=null,il=sl=0,pd.style.transform=""),i.pointerId===Ls&&(Ls=null)};ji.addEventListener("pointerup",md);ji.addEventListener("pointercancel",md);var Fr=(i,t)=>i.addEventListener("pointerdown",e=>{e.preventDefault(),e.stopPropagation(),Nt.init(),t()});Fr(dt("bAct"),()=>Ah());dt("bHand").addEventListener("pointerdown",i=>{i.preventDefault(),Sh=!0,dt("bHand").classList.add("on")});for(let i of["pointerup","pointercancel","pointerleave"])dt("bHand").addEventListener(i,()=>{Sh=!1,dt("bHand").classList.remove("on")});Fr(dt("bRadio"),()=>Eh());Fr(dt("bHorn"),()=>wh());Fr(dt("bPhone"),()=>Th());Fr(dt("bMute"),()=>gd());Fr(dt("pclose"),()=>Th());var fv={arkasha:"\u0441\u0432\u0438\u043D\u0433 \u0432 \u0431\u0430\u0431\u043E\u0447\u043A\u0435. \u0414\u043E \u0440\u0435\u043B\u0438\u0437\u0430 \u043E\u0441\u0442\u0430\u043B\u043E\u0441\u044C\u2026",max:"\u0444\u043E\u043D\u043A \u0438 \u0433\u043E\u043B\u043E\u0441\u043E\u0432\u044B\u0435. \u041D\u0438\u043A\u0442\u043E \u043D\u0435 \u0441\u043B\u0443\u0448\u0430\u0435\u0442",dima:"\u0441\u0438\u043D\u0442\u0432\u0435\u0439\u0432 \u0432 11.1.4. \u0421\u0433\u0435\u043D\u0435\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u043E",igor:"\u0432\u0435\u0441\u0442\u0435\u0440\u043D. \u0427\u0435\u0442\u0432\u0451\u0440\u0442\u043E\u0435 \u043F\u0440\u043E\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u0435",geisler:"\u043A\u043B\u0430\u0432\u0435\u0441\u0438\u043D \u0447\u0435\u0440\u0435\u0437 \u041C\u0435\u0433\u0430\u0444\u043E\u043D. \u0411\u0443\u0444\u0435\u0440\u0438\u0437\u0430\u0446\u0438\u044F\u2026",pasha:"\u0432\u0435\u043D\u0441\u043A\u0438\u0439 \u0432\u0430\u043B\u044C\u0441. \u041A\u0440\u043E\u043C\u0435 \u043D\u0435\u0433\u043E \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u0437\u0430\u0435\u0431\u0438\u0441\u044C",nikita:"\u0447\u0438\u043F\u0442\u044E\u043D \u0438\u0437 \u0435\u0433\u043E \u0442\u0440\u0435\u0442\u044C\u0435\u0439 \u0438\u0433\u0440\u044B",kos:"\u044D\u043C\u0431\u0438\u0435\u043D\u0442 \u0417\u043E\u043D\u044B. \u0422\u0440\u0435\u0441\u043A \u2014 \u044D\u0442\u043E \u043D\u043E\u0440\u043C\u0430\u043B\u044C\u043D\u043E",artem:"\u043F\u0438\u0440\u0430\u0442\u0441\u043A\u0430\u044F \u0434\u0436\u0438\u0433\u0430. \u0411\u043E\u0436\u0435, \u0445\u0440\u0430\u043D\u0438 \u043F\u0438\u0440\u0430\u0442\u043E\u0432",sanya:"\u043B\u043E\u0443-\u0444\u0430\u0439. \u041D\u0430\u0447\u0430\u043B\u043E \u0442\u044F\u0433\u043E\u043C\u043E\u0442\u043D\u043E\u0435, \u043F\u043E\u0442\u0435\u0440\u043F\u0438",misha:"\u0443\u043A\u0443\u043B\u0435\u043B\u0435 \u0443 \u043A\u043E\u0441\u0442\u0440\u0430. \u0412\u0440\u0435\u043C\u0435\u043D\u0438 \u0441\u043B\u0443\u0448\u0430\u0442\u044C \u043D\u0435\u0442"},dv={arkasha:"\u0412\u0441\u0435 \u0442\u0430\u043A, \u0442\u043E\u043B\u044C\u043A\u043E \u043D\u0430\u043E\u0431\u043E\u0440\u043E\u0442",max:"\u041E\u0447\u0435\u043D\u044C \u043F\u043B\u043E\u0445\u043E\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435",dima:"\u0413\u043E\u0443 \u0432\u0441\u0435 \u043D\u0430 \u0432\u043E\u0439\u043D\u0443",igor:"\u041C\u043D\u0435 144 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438 \u043D\u0430\u0434\u043E \u043D\u0430\u0439\u0442\u0438",geisler:"\u0411\u0430\u0442\u044F \u0432 \u0437\u0434\u0430\u043D\u0438\u0438!)",pasha:"\u0421\u043A\u043E\u0440\u0435\u0435 \u0431\u044B \u0413\u0422\u0410",nikita:"\u0427\u0442\u043E \u044D\u0442\u043E?",kos:"\u041D\u0430 \u0421\u0435\u0440\u0433\u0435\u044F \u0441\u0442\u043E\u043B\u0438\u043A",artem:"\u0411\u043E\u0436\u0435, \u0445\u0440\u0430\u043D\u0438 \u043F\u0438\u0440\u0430\u0442\u043E\u0432, \u0430\u043C\u0438\u043D\u044C",sanya:"\u041E\u043D\u0430 \u0432\u043D\u0430\u0447\u0430\u043B\u0435 \u0434\u0438\u043A\u043E \u043C\u0435\u0434\u043B\u0435\u043D\u043D\u0430\u044F",misha:"\u0412\u0440\u0435\u043C\u0435\u043D\u0438 \u0442\u0443\u043F\u043E \u043D\u0435\u0442 ("};function ph(i,t=3e3){let e=dt("speak");e.innerHTML=i,e.style.opacity=1,clearTimeout(ph.t),ph.t=setTimeout(()=>{e.style.opacity=0},t),mh=y.time+t/1e3}function Eh(){if(y.state!=="play")return;let i=[null].concat(pn.map(t=>t.id));y.radio=i[(i.indexOf(y.radio)+1)%i.length],Nt.play("radio"),Nt.setTheme(y.radio||(y.mission?y.mission.def.giver:y.pid)),Cs(y.radio?"\u{1F4FB} \u0420\u0430\u0434\u0438\u043E "+ri[y.radio].name+": "+fv[y.radio]:"\u{1F4FB} \u0410\u0432\u0442\u043E: \u0442\u0432\u043E\u044F \u0442\u0435\u043C\u0430, \u043D\u0430 \u043F\u043E\u0440\u0443\u0447\u0435\u043D\u0438\u0438 \u2014 \u0442\u0435\u043C\u0430 \u0437\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u0430",3.4),y.radio&&(y.heard[y.radio]=1,Object.keys(y.heard).length>=pn.length&&on("radio"))}var nd=0;function wh(){if(!(y.state!=="play"||y.time<nd)){nd=y.time+.7,Nt.horn(y.pid),ph("<b>"+yn(Rr)+":</b> "+yn(dv[y.pid]||"\u0411\u0438-\u0431\u0438\u043F"),1800);for(let i of y.cars)i.ai&&i.ai.type==="traffic"&&Math.hypot(i.e.x-nt.x,i.e.z-nt.z)<16&&(i.stun=1.3);for(let i of y.npcs)Math.hypot(i.x-nt.x,i.z-nt.z)<14&&(i.talk=1.6);y.horns=(y.horns||0)+1,y.horns>=10&&on("horn")}}document.addEventListener("pointerdown",i=>{let t=i.target.closest&&i.target.closest(".voice");t&&(Nt.init(),Nt.mumble(+t.dataset.sec||10),t.classList.add("heard"),y.state==="play"&&(y.flags.voice||(y.flags.voice=1,Ae([["sys","\u0422\u044B \u043F\u043E\u0441\u043B\u0443\u0448\u0430\u043B \u0433\u043E\u043B\u043E\u0441\u043E\u0432\u043E\u0435 \u041C\u0430\u043A\u0441\u0430. \u041F\u0435\u0440\u0432\u044B\u0439 \u0437\u0430 \u0432\u0441\u044E \u0438\u0441\u0442\u043E\u0440\u0438\u044E \u0447\u0430\u0442\u0430"]])),on("voice")))});var rl={what:["\u0427\u0442\u043E \u044D\u0442\u043E?","\u043D\u0430\u0447\u0430\u043B \u043F\u0430\u0440\u0442\u0438\u044E"],ice:["\u0420\u0443\u043A\u0438 \u0432 \u0440\u044B\u0431\u0435","\u0432\u044B\u0435\u0445\u0430\u043B \u043D\u0430 \u043B\u0451\u0434 \u041E\u0431\u0438"],speed:["11.1.4","\u0440\u0430\u0437\u043E\u0433\u043D\u0430\u043B\u0441\u044F \u0434\u043E 111,4 \u043A\u043C/\u0447"],rev:["\u0412\u0441\u0451 \u0442\u0430\u043A, \u0442\u043E\u043B\u044C\u043A\u043E \u043D\u0430\u043E\u0431\u043E\u0440\u043E\u0442","\u0447\u0435\u0442\u044B\u0440\u0435 \u0441\u0435\u043A\u0443\u043D\u0434\u044B \u0435\u0445\u0430\u043B \u0437\u0430\u0434\u043E\u043C"],steal:["\u0411\u043E\u0436\u0435, \u0445\u0440\u0430\u043D\u0438 \u043F\u0438\u0440\u0430\u0442\u043E\u0432","\u0443\u0433\u043D\u0430\u043B \u043C\u0430\u0448\u0438\u043D\u0443"],voice:["\u041D\u0438\u043A\u0442\u043E \u043D\u0435 \u0441\u043B\u0443\u0448\u0430\u0435\u0442","\u043F\u043E\u0441\u043B\u0443\u0448\u0430\u043B \u0433\u043E\u043B\u043E\u0441\u043E\u0432\u043E\u0435 \u041C\u0430\u043A\u0441\u0430"],crash:["\u0421\u0430\u043C\u044B\u0439 \u043A\u0430\u0439\u0444 \u0432 \u0440\u0430\u0437\u0440\u0443\u0448\u0435\u043D\u0438\u044F\u0445","\u0432\u044A\u0435\u0445\u0430\u043B \u043A\u0430\u043A \u0441\u043B\u0435\u0434\u0443\u0435\u0442"],zap:["\u0412 \u0430\u043D\u043E\u043C\u0430\u043B\u0438\u0438 \u043D\u0435 \u043B\u0435\u0437\u044C","\u0437\u0430\u043B\u0435\u0437 \u0432 \u0430\u043D\u043E\u043C\u0430\u043B\u0438\u044E"],esc:["\u041B\u0430\u0432\u043E\u0447\u043A\u0443 \u043D\u0435 \u043F\u0440\u0438\u043A\u0440\u044B\u043B\u0438","\u0443\u0448\u0451\u043B \u043E\u0442 \u043C\u043E\u0434\u0435\u0440\u0430\u0442\u043E\u0440\u043E\u0432"],ban:["\u041F2 \u0438\u043B\u0438 \u041F3?","\u043F\u043E\u043B\u0443\u0447\u0438\u043B \u0431\u0430\u043D"],cards:["144 \u0438\u0437 144","\u0441\u043E\u0431\u0440\u0430\u043B \u0432\u0441\u0435 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438 \u0418\u0433\u043E\u0440\u044F"],radio:["\u041C\u0435\u043B\u043E\u043C\u0430\u043D","\u043F\u043E\u0441\u043B\u0443\u0448\u0430\u043B \u0432\u0441\u0435 \u043E\u0434\u0438\u043D\u043D\u0430\u0434\u0446\u0430\u0442\u044C \u0441\u0442\u0430\u043D\u0446\u0438\u0439"],horn:["\u041E\u0447\u0435\u043D\u044C \u043F\u043B\u043E\u0445\u043E\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435","\u043F\u043E\u0441\u0438\u0433\u043D\u0430\u043B\u0438\u043B \u0434\u0435\u0441\u044F\u0442\u044C \u0440\u0430\u0437"],slow:["\u041F\u043E\u0442\u0435\u0440\u043F\u0438 \u0447\u0443\u0442\u044C-\u0447\u0443\u0442\u044C","\u043F\u0435\u0440\u0435\u0442\u0435\u0440\u043F\u0435\u043B \u0442\u044F\u0433\u043E\u043C\u043E\u0442\u043D\u043E\u0435 \u043D\u0430\u0447\u0430\u043B\u043E"],bati:["\u0411\u0430\u0442\u044F \u0432 \u0437\u0434\u0430\u043D\u0438\u0438","\u0443\u0441\u043F\u0435\u043B \u043A \u041C\u0438\u0448\u0435 \u0432\u043E\u0432\u0440\u0435\u043C\u044F"],dance:["\u0417\u0430\u043A\u0430\u043F\u044B\u0432\u0430\u0435\u043C\u0441\u044F","\u0441\u0442\u0430\u043D\u0446\u0435\u0432\u0430\u043B \u043F\u0435\u0448\u043A\u043E\u043C"],beam:["BeamNG","\u0441\u043D\u0451\u0441 \u0434\u0435\u0441\u044F\u0442\u044C \u043F\u0440\u0435\u0434\u043C\u0435\u0442\u043E\u0432"]};function on(i){if(y.state!=="play"||!y.tro||y.tro[i]||!rl[i])return;y.tro[i]=1;let t=rl[i],e=dt("tro");e.innerHTML='<span class="ic">\u{1F980}</span><span><b>\u0422\u0440\u043E\u0444\u0435\u0439: '+yn(t[0])+"</b><i>"+yn(t[1])+"</i></span>",e.classList.remove("show"),e.offsetWidth,e.classList.add("show"),Nt.sting("trophy");try{let n=JSON.parse(localStorage.getItem("gtr_tro")||"{}")||{};n[i]=1,localStorage.setItem("gtr_tro",JSON.stringify(n))}catch{}}function Th(){dt("phone").classList.toggle("hidden"),ch.scrollTop=1e9}function gd(){Nt.setMuted(!Nt.muted),dt("bMute").textContent=Nt.muted?"\u{1F507}":"\u{1F50A}"}function pv(){let i=0,t=0;return(On.KeyW||On.ArrowUp)&&(i+=1),(On.KeyS||On.ArrowDown)&&(i-=1),(On.KeyD||On.ArrowRight)&&(t+=1),(On.KeyA||On.ArrowLeft)&&(t-=1),Ur!==null&&(t=Math.abs(il)>.12?il:0,i=Math.abs(sl)>.15?-sl:0),y.modal||y.busy>0?{thr:0,st:0,hand:!0}:{thr:i,st:t,hand:!!On.Space||Sh}}function xd(){if(y.state!=="menu")return;let i=pn[Ii];y.pid=i.id,Rr=i.name;try{localStorage.setItem("gtr_sel",Ii)}catch{}dt("fade").style.opacity=1,setTimeout(()=>{dt("menu").classList.add("hidden"),dt("hud").classList.remove("hidden"),Cn=fi[i.id],Cn.visible=!1,Cn.rotation.set(0,0,0);for(let n of pn)if(n.id!==i.id){let s=fi[n.id],[r,a]=_n[n.id];s.visible=!0,s.position.set(r,.15,a),s.rotation.set(0,Math.atan2(140-r,0-a),0),s.add(Kc(n.name,_h[n.id]||n.css)),me.col.circle(r,a,.55),y.npcs.push({id:n.id,x:r,z:a,rak:s,cool:3+Math.random()*6,talk:0})}let t=new wr(Ze,_n.start[0],_n.start[1],Math.PI,new Dt(i.css).multiplyScalar(.8).getHex(),"sedan");y.cars.push(t),y.car=t,y.mode="car",t.g.add(od),nt.x=t.e.x,nt.z=t.e.z,Xt.yaw=Math.PI,Xt.init=!1;let e=eh.filter(n=>n!==y.pid);if(Rn.has("m"))e=Rn.get("m").split(",").filter(n=>ha[n]&&n!==y.pid);else{let n={};try{n=JSON.parse(localStorage.getItem("gtr_seen")||"{}")||{}}catch{n={}}let s=e.map(r=>[r,(n[r]||0)+Math.random()]).sort((r,a)=>r[1]-a[1]).slice(0,Zf).map(r=>r[0]);e=e.filter(r=>s.includes(r));for(let r of e)n[r]=(n[r]||0)+1;try{localStorage.setItem("gtr_seen",JSON.stringify(n))}catch{}}y.queue=e,y.run=e.slice(),y.done={},y.stats.total=e.length,y.radio=null,y.heard={},y.horns=0,y.tro={},Nt.setTheme(y.pid),y.state="play",y.t=0,da=4,fa=0,Rs(),dt("fade").style.opacity=0,jn("23:54","\u0414\u043E \u0440\u0435\u043B\u0438\u0437\u0430 \u0448\u0435\u0441\u0442\u044C \u043C\u0438\u043D\u0443\u0442"),Cs(Vn?"\u041B\u0435\u0432\u044B\u0439 \u043F\u0430\u043B\u0435\u0446 \u2014 \u0440\u0443\u043B\u044C \u0438 \u0433\u0430\u0437 \xB7 \u043F\u0440\u0430\u0432\u044B\u0439 \u2014 \u043A\u0430\u043C\u0435\u0440\u0430":"WASD \u2014 \u0435\u0445\u0430\u0442\u044C \xB7 \u041F\u0440\u043E\u0431\u0435\u043B \u2014 \u0440\u0443\u0447\u043D\u0438\u043A \xB7 E \u2014 \u0432\u044B\u0439\u0442\u0438 \u0438\u0437 \u043C\u0430\u0448\u0438\u043D\u044B",7),Rn.has("t")&&(y.left=+Rn.get("t"))},520)}var Ie=[0,0,0,0,0,0,!1];function mv(i){let t=pv();if(y.busy>0&&(y.busy-=i),y.mode==="car"){let e=y.car,n=e.drive(i,t.thr,t.st,t.hand,me.col),s=e.e;n>5&&y.t-y.lastBump>.3&&(Nt.play("bump"),y.lastBump=y.t,y.shake=Math.min(1,n/22),ui.burst(s.x,s.y+.6,s.z,12,6,.5,1.6,1.2,.7));for(let m of y.cars){if(m===e)continue;let p=s.x-m.e.x,b=s.z-m.e.z,v=Math.hypot(p,b);if(v<3.1&&v>.01&&Math.abs(s.y-m.e.y)<1.5){let w=p/v,U=b/v;s.x+=w*(3.1-v),s.z+=U*(3.1-v);let P=s.vx*w+s.vz*U;P<0&&(s.vx-=P*w*1.4,s.vz-=P*U*1.4,P<-4&&y.t-y.lastBump>.4&&(Nt.play("bump"),y.lastBump=y.t,y.shake=.5,m.ai&&m.ai.type==="traffic"&&(m.stun=1.5,Nt.play("honk"))))}}e.sync(),nt.x=s.x,nt.z=s.z,nt.y=s.y,nt.layer=s.layer,nt.h=e.h,n>15&&on("crash"),s.layer===2&&on("ice"),e.speed*3.6>=111.4&&on("speed"),y.revT=e.vf<-3?(y.revT||0)+i:0,y.revT>4&&on("rev"),n>15&&!y.flags.crash&&(y.flags.crash=1,Ae([["max","\u041E\u0447\u0435\u043D\u044C \u043F\u043B\u043E\u0445\u043E\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435. \u041E\u043D\u043E \u043C\u043D\u0435 \u043E\u0447\u0435\u043D\u044C \u043D\u0435 \u043D\u0440\u0430\u0432\u0438\u0442\u0441\u044F"]])),s.layer===2&&!y.flags.ice&&(y.flags.ice=1,Ae([["igor","\u041D\u0430 \u043B\u044C\u0434\u0443 \u043F\u0435\u0440\u044C\u044F \u0446\u0430\u043F\u0435\u043B\u044C \u043B\u0435\u0436\u0430\u0442. \u042F \u043F\u0440\u043E\u0432\u0435\u0440\u044F\u043B"],["geisler","\u0410 \u0437\u0430\u0447\u0435\u043C \u0432\u0442\u043E\u0440\u043E\u0439 \u0440\u0430\u0437?)\u{1F605}"]])),e.slip>8&&e.speed>13&&(y.driftT=(y.driftT||0)+i,y.driftT>.7&&!y.flags.drift&&(y.flags.drift=1,Ae([["max","\u041E\u0447 \u0437\u0430\u043B\u0438\u043F\u0430\u0442\u0435\u043B\u044C\u043D\u0430\u044F)) \u0422\u0430\u043C \u0441\u0430\u043C\u044B\u0439 \u043A\u0430\u0439\u0444 \u0432 \u0440\u0430\u0437\u0440\u0443\u0448\u0435\u043D\u0438\u044F\u0445"]])));let r=Math.sin(e.h),a=Math.cos(e.h),o=-a,l=r,c=e.speed,h=e.vy!==0,u=s.layer===2?s.y+.04:ia(s.x,s.z)?.035:.19,f=s.x-r*1.35-o*.9,d=s.z-a*1.35-l*.9,g=s.x-r*1.35+o*.9,x=s.z-a*1.35+l*.9;if(Ie[6]&&!h){let m=Math.hypot(f-Ie[0],d-Ie[2]);m>4?Ie[6]=!1:m>.7&&(Kf.seg(Ie[0],Ie[1],Ie[2],f,u,d,.16),Kf.seg(Ie[3],Ie[4],Ie[5],g,u,x,.16),Ie[0]=f,Ie[1]=u,Ie[2]=d,Ie[3]=g,Ie[4]=u,Ie[5]=x)}if(!Ie[6]&&!h&&(Ie[0]=f,Ie[1]=u,Ie[2]=d,Ie[3]=g,Ie[4]=u,Ie[5]=x,Ie[6]=!0),!h&&c>5){let m=(e.slip>4?4:Math.random()<c/13?1:0)+(c>22?1:0)+(s.layer!==2&&!ia(s.x,s.z)?1:0);for(let p=0;p<m;p++){let b=Math.random()<.5?-.9:.9;ui.emit(s.x-r*1.5+o*b,s.y+.15,s.z-a*1.5+l*b,-r*2+(Math.random()-.5)*4+s.vx*.3,1.5+Math.random()*2.5,-a*2+(Math.random()-.5)*4+s.vz*.3,.75,.3,.34,.46)}}oi.intensity+=(26-oi.intensity)*Tn(5,i),oi.position.set(s.x+r*1.6,s.y+1,s.z+a*1.6),oi.target.position.set(s.x+r*22,s.y-1.2,s.z+a*22),oi.target.updateMatrixWorld(),Ki.u.uCar.value.set(s.x+r*2,s.y+.8,s.z+a*2),Ki.u.uCarDir.value.set(r,-.02,a),Ki.u.uHead.value=1,Cs("")}else{let e=Math.hypot(t.st,t.thr);if(e>.1){let r=Math.sin(Xt.yaw),a=Math.cos(Xt.yaw),o=r*t.thr-a*t.st,l=a*t.thr+r*t.st,c=Math.hypot(o,l);o/=c,l/=c;let h=7.4*Math.min(1,e);nt.vx+=(o*h-nt.vx)*Tn(12,i),nt.vz+=(l*h-nt.vz)*Tn(12,i),nt.h+=Ri(nt.h,Math.atan2(o,l))*Tn(12,i)}else nt.vx-=nt.vx*Tn(10,i),nt.vz-=nt.vz*Tn(10,i);nt.x+=nt.vx*i,nt.z+=nt.vz*i,me.col.resolve(nt,.45,nt.layer,0);for(let r of y.cars){let a=nt.x-r.e.x,o=nt.z-r.e.z,l=Math.hypot(a,o);l<2&&l>.01&&Math.abs(nt.y-r.e.y)<1.5&&(nt.x+=a/l*(2-l),nt.z+=o/l*(2-l))}nt.x=we(nt.x,-Sr,Sr),nt.z=we(nt.z,-Er,Er);let n=$i(nt);nt.vy>0||nt.y>n+.3?(nt.vy-=26*i,nt.y+=nt.vy*i,nt.y<=n&&(nt.y=n,nt.vy=0)):nt.y+=(n-nt.y)*Tn(14,i),nt.walk=we(Math.hypot(nt.vx,nt.vz)/7,0,1),Cn.position.set(nt.x,nt.y+(nt.layer===0&&!ia(nt.x,nt.z)?.15:0),nt.z),y.danceT=Math.max(0,(y.danceT||0)-i),y.danceT>0&&(nt.h+=i*9),Cn.rotation.set(nt.vy!==0?y.time*10:0,nt.h,y.danceT>0?Math.sin(y.time*14)*.25:0),ra(Cn,y.time,y.danceT>0?1:nt.walk,y.danceT>0),oi.intensity+=(0-oi.intensity)*Tn(5,i),Ki.u.uHead.value=0;let s=_d(5);Cs(s?Vn?"\u0416\u043C\u0438 \u{1F697}, \u0447\u0442\u043E\u0431\u044B \u0441\u0435\u0441\u0442\u044C"+(s.ai?" (\u0443\u0433\u043E\u043D!)":""):"E \u2014 \u0441\u0435\u0441\u0442\u044C \u0432 \u043C\u0430\u0448\u0438\u043D\u0443"+(s.ai?" (\u0443\u0433\u043E\u043D!)":""):y.t<200&&y.danceT<=0?Vn?"\u{1F980} \u2014 \u0442\u0430\u043D\u0446\u0435\u0432\u0430\u0442\u044C":"E \u2014 \u0442\u0430\u043D\u0446\u0435\u0432\u0430\u0442\u044C":""),dt("bAct").textContent=s?"\u{1F697}":"\u{1F980}"}for(let e of me.anomalies)if(Math.hypot(nt.x-e.x,nt.z-e.z)<e.r+(y.mode==="car"?1.2:.3)&&nt.y<2&&y.t-(y.zapT||0)>1.2){y.zapT=y.t,on("zap"),Nt.play("zap"),y.shake=1,Li.mFinal.uniforms.uFlash.value=.5,ui.burst(e.x,2,e.z,40,10,.9,.6,2.2,1.2);let n=Math.atan2(nt.x-e.x,nt.z-e.z)+(Math.random()-.5);y.mode==="car"?(y.car.e.vx=Math.sin(n)*16,y.car.e.vz=Math.cos(n)*16,y.car.launch(13)):(nt.vx=Math.sin(n)*13,nt.vz=Math.cos(n)*13,nt.vy=12,nt.y+=.4),y.flags.zap||(y.flags.zap=1,Ae([["kos","\u042F \u0436\u0435 \u0441\u043A\u0430\u0437\u0430\u043B: \u0432 \u0430\u043D\u043E\u043C\u0430\u043B\u0438\u0438 \u043D\u0435 \u043B\u0435\u0437\u044C"],["dima","\u042D\u0442\u043E \u043D\u0435 \u0431\u0430\u0433. \u042D\u0442\u043E \u043D\u043E\u0432\u0430\u044F \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u044C)"]]))}}function _d(i){let t=null,e=i;for(let n of y.cars){if(n.kind==="mod")continue;let s=Math.hypot(n.e.x-nt.x,n.e.z-nt.z);s<e&&Math.abs(n.e.y-nt.y)<2&&(e=s,t=n)}return t}function Ah(){if(!(y.state!=="play"||y.modal))if(y.mode==="car"){let i=y.car;if(i.speed>9){Cs("\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u043F\u0440\u0438\u0442\u043E\u0440\u043C\u043E\u0437\u0438",1.4);return}let t=Math.cos(i.h),e=-Math.sin(i.h);me.col.near(i.e.x+t*2,i.e.z+e*2,.5)&&(t=-t,e=-e),nt.x=i.e.x+t*2,nt.z=i.e.z+e*2,nt.y=i.e.y,nt.vx=nt.vz=0,nt.h=i.h,i.e.vx=i.e.vz=0,i.vf=0,y.mode="foot",Cn.visible=!0,Xt.yaw+=Xt.off,Xt.off=0,Nt.play("door"),!y.flags.exit&&y.pid!=="nikita"&&(y.flags.exit=1,Ae([["nikita","\u0427\u0435 \u0442\u0430\u043C \u0434\u0435\u043B\u0430\u0442\u044C \u043D\u0430\u0434\u043E?"]]))}else{let i=_d(5);if(!i){y.danceT=2.4,Nt.horn(y.pid),on("dance"),y.flags.dance||(y.flags.dance=1,Ae([["nikita","\u0434\u0438\u043C\u0430\u043D, \u043F\u043E\u043A\u0430 \u0437\u0430\u043A\u0430\u043F\u044B\u0432\u0430\u0435\u043C\u0441\u044F)"]]));return}i.ai&&(i.ai=null,i.stun=0,y.stats.stolen++,on("steal"),ci(60),jn("\u0423\u0413\u041E\u041D","+60 \xB7 \u0442\u0435\u043F\u0435\u0440\u044C \u0442\u044B \u043A\u0430\u043A \u0442\u0438\u043F\u044B"),y.stats.stolen===1&&Ae([["sys","\u0421\u0438\u0433\u043D\u0430\u043B\u043A\u0430 \u043E\u0440\u0451\u0442 \u0433\u043E\u043B\u043E\u0441\u043E\u043C \u041C\u0430\u043A\u0441\u0430. \u041D\u0438\u043A\u0442\u043E \u043D\u0435 \u0441\u043B\u0443\u0448\u0430\u0435\u0442"],["max",{voice:23}]]),Rh(15)),i.maxSpeed=i.kind==="van"?31:38,y.car=i,i.g.add(od),y.mode="car",Cn.visible=!1,Cs(""),dt("bAct").textContent="\u{1F6AA}",Nt.play("door"),Ie[6]=!1}}var mh=0;function gv(i){for(let t of y.npcs){let e=Math.hypot(nt.x-t.x,nt.z-t.z);if(t.cool-=i,t.talk-=i,e<90&&(ra(t.rak,y.time,0,t.talk>0),bh(t.rak),e<16&&(t.rak.rotation.y+=Ri(t.rak.rotation.y,Math.atan2(nt.x-t.x,nt.z-t.z))*Tn(5,i)),e<7.5&&t.cool<=0&&y.time>mh)){let n=ri[t.id].quotes;t.cool=14,t.talk=3.2,mh=y.time+3.4;let s=dt("speak");s.innerHTML=`<b>${ri[t.id].name}:</b> ${yn(n[Math.floor(Math.random()*n.length)])}`,s.style.opacity=1,setTimeout(()=>{s.style.opacity=0},3200)}}}function Rh(i){y.wanted=Math.max(y.wanted,i),dt("wanted").classList.remove("hidden");let t=0;for(;y.mods.length<2&&t++<80;){let e=th(nt.x+(Math.random()-.5)*200,nt.z+(Math.random()-.5)*200,0),n=vn[e],s=Math.hypot(n.x-nt.x,n.z-nt.z);if(s<55||s>190)continue;let r=new wr(Ze,n.x,n.z,Math.atan2(nt.x-n.x,nt.z-n.z),15265528,"mod");r.ai={type:"mod",stuck:0,rev:0},r.maxSpeed=28,y.mods.push(r),y.cars.push(r)}}function id(i){y.wanted=0,y.caught=0,dt("wanted").classList.add("hidden");for(let t of y.mods)Ze.remove(t.g),y.cars.splice(y.cars.indexOf(t),1);y.mods.length=0,i&&(on("esc"),ci(150),jn("\u041E\u0422\u041E\u0420\u0412\u0410\u041B\u0421\u042F","+150"),y.flags.esc||(y.flags.esc=1,Ae([["geisler","\u041C\u0435\u043D\u044F \u0443\u0434\u0438\u0432\u043B\u044F\u0435\u0442 \u043F\u043E\u0447\u0435\u043C\u0443 \u043F\u0441 \u0434\u043E \u0441\u0438\u0445 \u043F\u043E\u0440 \u044D\u0442\u0443 \u043B\u0430\u0432\u043E\u0447\u043A\u0443 \u043D\u0435 \u043F\u0440\u0438\u043A\u0440\u044B\u043B\u0438))"]])))}function xv(i){if(y.wanted<=0)return;y.wanted-=i,dt("wt").textContent=Math.ceil(y.wanted)+" \u0441";let t=!1;for(let e of y.mods){let n=e.e,s=nt.x-n.x,r=nt.z-n.z,a=Math.hypot(s,r),o=Ri(e.h,Math.atan2(s,r)),l=we(-o*2.2,-1,1),c=1;if(e.ai.rev>0?(e.ai.rev-=i,c=-1,l=-l):(e.speed<1.5?e.ai.stuck+=i:e.ai.stuck=0,e.ai.stuck>1.1&&(e.ai.rev=.9,e.ai.stuck=0)),Math.abs(o)>1.2&&e.speed>12&&(c=-.4),y.modal&&(c=0,l=0),e.drive(i,c,l,!1,me.col),e.sync(),e.barMat.color.setHex((y.time*7|0)%2?2245887:16720435),a<5.2&&Math.abs(nt.y-n.y)<2&&(t=!0),a>240){let h=th(nt.x,nt.z,70,150);h>=0&&(n.x=vn[h].x,n.z=vn[h].z,n.y=0,n.vx=n.vz=0)}}if(y.caught=t?y.caught+i:Math.max(0,y.caught-i*.5),y.caught>1&&!y.modal){y.stats.bans++,on("ban"),Nt.play("bad"),y.shake=1;let e=ih[Math.floor(Math.random()*ih.length)];y.mode==="car"&&(y.car.e.vx=y.car.e.vz=0),vh({title:"\u{1F6A8} \u0411\u0410\u041D! \u0412\u043E\u043F\u0440\u043E\u0441 \u043E\u0442 \u043C\u043E\u0434\u0435\u0440\u0430\u0442\u043E\u0440\u0430",text:e[0],opts:[{label:e[1]},{label:e[2]}]},()=>{Ae([["arkasha","\u0412\u0441\u0435 \u0442\u0430\u043A, \u0442\u043E\u043B\u044C\u043A\u043E \u043D\u0430\u043E\u0431\u043E\u0440\u043E\u0442"],["sys","\u0411\u0430\u043D: \u22128 \u0441\u0435\u043A\u0443\u043D\u0434 \u0438 \u2212150 \u043E\u0447\u043A\u043E\u0432"]]),y.left=Math.max(3,y.left-8),ci(-150),y.busy=.4,id(!1)}),y.caught=0}else y.wanted<=0&&!y.modal&&id(!0)}function vd(i){let t=ha[i];y.mission={id:i,def:t,steps:t.steps.slice(),si:-1,t0:y.t,bonus:0,pts:[]},Ae(t.intro),Nr(),y.radio||Nt.setTheme(t.giver),Nt.sting("start"),y.t>4&&jn("\u{1F4F1} "+t.title,"\u043D\u043E\u0432\u043E\u0435 \u043F\u043E\u0440\u0443\u0447\u0435\u043D\u0438\u0435 \xB7 "+ri[t.giver].name)}function _v(i){return i.raki?["arkasha","max","igor","pasha","nikita","geisler"].filter(e=>e!==y.pid).slice(0,i.raki).map(e=>({x:_n[e][0],z:_n[e][1],who:e,done:!1})):i.pts.map(t=>({x:_n[t][0],z:_n[t][1],done:!1}))}function Nr(){let i=y.mission;if(i.si++,i.si>=i.steps.length)return yv();let t=i.steps[i.si];if(t.enter&&Ae(t.enter),t.timer&&(i.deadline=y.t+t.timer),i.prog=0,t.choice){i.pts=[],vh(t.choice,e=>{y.mission===i&&(e.say&&Ae(e.say),e.bonus&&(i.bonus+=e.bonus),e.flag&&(y.flags[e.flag]=1),e.add&&i.steps.splice(i.si+1,0,...e.add),Nr())});return}if(t.duel){i.pts=[],vv(i);return}i.pts=t.pts||t.raki?_v(t):[],dt("objtext").textContent=t.text,Nt.play("step")}function vv(i){let t={me:5,ai:6,kids:!0,round:1},e=()=>{let n=[{label:"\u0410\u0442\u0430\u043A\u043E\u0432\u0430\u0442\u044C \u043A\u043B\u0435\u0448\u043D\u0451\u0439",k:"a"},{label:"\u0417\u0430\u043A\u043E\u043F\u0430\u0442\u044C\u0441\u044F",k:"d"}];t.kids&&n.push({label:"\u041F\u043E\u0437\u0432\u0430\u0442\u044C \u0434\u0435\u0442\u0435\u0439 \u0438\u0437 Tekken",k:"k"}),vh({title:"\u0418\u0433\u0440\u0430 \u041D\u0438\u043A\u0438\u0442\u044B \xB7 \u0445\u043E\u0434 "+t.round,text:"\u041F\u043E\u0448\u0430\u0433\u043E\u0432\u0430\u044F \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u044F, 4 \u0440\u0430\u0441\u044B, AI \u043D\u0430 GPT-6-Luna. \u0422\u044B: "+"\u{1F980}".repeat(Math.max(0,t.me))+" \xB7 AI: "+"\u{1F916}".repeat(Math.max(0,t.ai))+". \u0417\u0430\u043A\u0430\u043F\u044B\u0432\u0430\u0442\u044C\u0441\u044F \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E, \u043D\u043E \u0432\u0440\u0435\u043C\u044F \u0438\u0434\u0451\u0442.",opts:n},s=>{if(y.mission!==i)return;let r=3;s.k==="a"?t.ai-=2:s.k==="d"?(t.ai-=1,r=0):(t.ai-=3,t.kids=!1,r=1),t.ai>0&&(t.me-=r),t.round++,t.ai<=0?(i.bonus+=Math.max(0,5-t.round)*50,pa("sys","AI \u043F\u043E\u0432\u0435\u0440\u0436\u0435\u043D. \u0425\u043E\u0434\u043E\u0432: "+(t.round-1)),Nr()):t.me<=0?(i.lost=!0,pa("sys","AI \u0441\u0434\u0435\u043B\u0430\u043B \u0442\u0435\u0431\u044F, \u043A\u0430\u043A \u043C\u0430\u043B\u0435\u043D\u044C\u043A\u043E\u0433\u043E"),Nr()):e()})};e()}function yd(){y.mission=null,y.nextM=y.t+4.5,y.target=null,Ar.forEach(i=>i.hide()),y.radio||Nt.setTheme(y.pid),dt("objtext").textContent=y.queue.length?"\u0416\u0434\u0438 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0439 \u0432 \u0447\u0430\u0442\u0435":"\u041F\u043E\u0440\u0443\u0447\u0435\u043D\u0438\u044F \u043A\u043E\u043D\u0447\u0438\u043B\u0438\u0441\u044C. \u0421\u043E\u0431\u0438\u0440\u0430\u0439 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438 \u0418\u0433\u043E\u0440\u044F",dt("dist").textContent="",dt("dist").classList.remove("hot")}function yv(){let i=y.mission,t=i.lost?0:Math.max(0,Math.round((i.def.par-(y.t-i.t0))*8)),e=Math.round(i.def.reward*(i.lost?.4:1))+i.bonus+t;y.done[i.id]=i.lost?"\u2248":"\u2714",i.id==="sanya"&&on("slow"),i.id==="misha"&&on("bati"),ci(e),y.stats.missions++,jn((i.lost?"\u2248 ":"\u2714 ")+i.def.title,"+"+e+(t?" \xB7 \u0437\u0430 \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C +"+t:"")),Nt.play("win"),Ae(i.lost&&i.def.outroLost?i.def.outroLost:i.def.outro),yd()}function Mv(){let i=y.mission,t=i.def.failReward||150;y.done[i.id]="\u2716",ci(t),jn("\u2716 "+i.def.title,"\u043D\u0435 \u0443\u0441\u043F\u0435\u043B \xB7 +"+t),Nt.play("bad"),Ae(i.def.fail||[]),yd()}function bv(i){if(!y.mission){y.queue.length&&y.t>y.nextM&&!y.sayQ.length&&vd(y.queue.shift());return}let t=y.mission,e=t.steps[t.si];if(!e)return;if(t.deadline&&y.t>t.deadline&&!y.modal)return Mv();if(e.choice||e.duel)return;if(e.slow){let o=y.mode==="car"?y.car.speed:99;o>1&&o<7?t.prog+=i:o>=7&&(t.prog=Math.max(0,t.prog-i*1.5)),Ar.forEach(l=>l.hide()),y.target=null,t.prog>=e.slow&&(e.say&&Ae(e.say),e.big&&jn(e.big[0],e.big[1]),Nr());return}let n=0,s=1e9,r=null,a=0;for(let o of t.pts){if(o.done)continue;let l=Math.hypot(nt.x-o.x,nt.z-o.z),c=!e.foot||y.mode==="foot";if(l<(e.r||9)&&c){if(o.done=!0,Nt.play("step"),ui.burst(o.x,1.5,o.z,24,7,.8,2.2,1.6,.4),o.who){pa(o.who,Jf[o.who]||"\u042F \u043F\u0430\u0441");let h=y.npcs.find(u=>u.id===o.who);h&&(h.talk=3)}if(e.each){let h=t.pts.filter(u=>u.done).length;pa("sys",e.each+[34,61,97][h-1]+"%")}continue}if(e.foot&&y.mode==="car"&&l<60&&Cs("\u0412 \u0417\u043E\u043D\u0443 \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u0435\u0448\u043A\u043E\u043C: \u0432\u044B\u0439\u0434\u0438 \u0438\u0437 \u043C\u0430\u0448\u0438\u043D\u044B",.3),n++,l<s&&(s=l,r=o),a<3){let h={x:o.x,z:o.z,y:0};Ar[a++].set(o.x,$i(h),o.z,t.deadline?16730718:e.foot?8257373:16762941)}}for(;a<3;a++)Ar[a].hide();if(!n){e.say&&Ae(e.say),e.big&&jn(e.big[0],e.big[1]),e.wanted&&Rh(e.wanted),Nr();return}y.target=r,y.targetD=s}var ol=document.createElement("canvas");ol.width=1200;ol.height=800;me.drawMap(ol.getContext("2d"),2);var Sv=dt("map").getContext("2d");function Ev(){let i=Sv,t=300/420;i.setTransform(1,0,0,1,0,0),i.fillStyle="#0a0e1a",i.fillRect(0,0,300,300),i.setTransform(t,0,0,t,150-(nt.x+300)*2*t,150-(nt.z+200)*2*t),i.drawImage(ol,0,0);let e=(n,s,r,a)=>{i.fillStyle=a,i.beginPath(),i.arc((n+300)*2,(s+200)*2,r,0,7),i.fill()};for(let n of Ps)n.got||e(n.x,n.z,5,n.type===0?"#ffd24a":n.type===1?"#9fe0ff":"#ff6ad5");for(let n of y.mods)e(n.e.x,n.e.z,9,(y.time*6|0)%2?"#4a7dff":"#ff4a5a");if(i.setTransform(1,0,0,1,0,0),y.mission)for(let n of y.mission.pts){if(n.done)continue;let s=(n.x-nt.x)*2*t,r=(n.z-nt.z)*2*t,a=Math.hypot(s,r);a>138&&(s*=138/a,r*=138/a),i.fillStyle="#ffc83d",i.strokeStyle="#000",i.lineWidth=3,i.beginPath(),i.arc(150+s,150+r,10+Math.sin(y.time*5)*2,0,7),i.fill(),i.stroke()}i.translate(150,150),i.rotate(-nt.h),i.fillStyle="#fff",i.strokeStyle="#ff3d8a",i.lineWidth=4,i.beginPath(),i.moveTo(0,14),i.lineTo(9,-10),i.lineTo(0,-5),i.lineTo(-9,-10),i.closePath(),i.fill(),i.stroke(),i.setTransform(1,0,0,1,0,0)}var sd=-1;function wv(i){let t=Math.max(0,Math.ceil(y.left));if(t!==sd){sd=t;let e=dt("timer");e.textContent=String(Math.floor(t/60)).padStart(2,"0")+":"+String(t%60).padStart(2,"0"),e.classList.toggle("hot",t<=30),t<=10&&t>0&&Nt.play("tick")}if(y.hudT-=i,!(y.hudT>0)){if(y.hudT=.1,Ev(),y.mission){let e=y.mission,n=e.steps[e.si],s="";if(n&&n.slow)s="\xB7 "+Math.min(100,Math.round(100*e.prog/n.slow))+"% \xB7 "+Math.round(y.car.speed*3.6)+" \u043A\u043C/\u0447";else if(y.target&&e.pts.length){s="\xB7 "+Math.round(y.targetD)+" \u043C";let a=Ri(Xt.yaw+(y.mode==="car"?Xt.off:0),Math.atan2(y.target.x-nt.x,y.target.z-nt.z));dt("arrow").style.transform="rotate("+-a+"rad)"}let r=e.deadline?Math.max(0,Math.ceil(e.deadline-y.t)):-1;r>=0&&(s+=" \xB7 \u23F1 "+r+" \u0441",r<=5&&r!==y.lastTl&&(y.lastTl=r,Nt.play("tick"))),dt("dist").textContent=s,dt("dist").classList.toggle("hot",r>=0&&r<=10)}y.placeT-=.1;for(let e of Ff)if(Math.hypot(nt.x-e.x,nt.z-e.z)<e.r&&y.lastPlace!==e&&y.placeT<=0){y.lastPlace=e,y.placeT=6;let n=dt("place");n.textContent=e.name,n.style.opacity=1,setTimeout(()=>{n.style.opacity=0},3500)}}}function Tv(i){let t,e,n,s,r=0;if(Xt.manual+=i,y.mode==="car"){let m=y.car,p=m.speed;t=m.e.x,e=m.e.y+1.25,n=m.e.z,s=8.4+p*.085,Xt.manual>1.6&&Ls===null&&(Xt.off-=Xt.off*Tn(2.2,i)),Xt.yaw+=Ri(Xt.yaw,m.h)*Tn(3.4+p*.06,i),Fe.fov=el+we(p*.36,0,13),r=Math.max(0,p-15)/17*.05}else t=nt.x,e=nt.y+1.55,n=nt.z,s=6.4,Fe.fov=el,Xt.manual>2.2&&nt.walk>.3&&Ls===null&&(Xt.yaw+=Ri(Xt.yaw,nt.h)*Tn(1.1,i));let a=Xt.yaw+(y.mode==="car"?Xt.off:0),o=Math.cos(Xt.pitch),l=Math.sin(Xt.pitch),c=Math.sin(a),h=Math.cos(a),u=1;for(let m=1;m<=7;m++){let p=m/7;if(me.col.blocked(t-c*s*o*p,n-h*s*o*p)){u=Math.max(.16,(m-1)/7);break}}let f=t-c*s*o*u,d=n-h*s*o*u,g=e+.7+s*l*(.55+.45*u)+(1-u)*5;if(y.t<2.8){let m=1-Math.pow(1-y.t/2.8,3),p=1-m;Xt.pos.set(f-c*46*p,g+34*p,d-h*46*p),Xt.init=!0}else if(!Xt.init)Xt.pos.set(f,g,d),Xt.init=!0;else{let m=Tn(10,i);Xt.pos.x+=(f-Xt.pos.x)*m,Xt.pos.y+=(g-Xt.pos.y)*m,Xt.pos.z+=(d-Xt.pos.z)*m}Xt.pos.y=Math.max(Xt.pos.y,Yc(Math.abs(Xt.pos.x))+.7),y.shake=Math.max(0,y.shake-i*3),Fe.position.set(Xt.pos.x+(Math.random()-.5)*y.shake*.5+Math.sin(y.time*37)*r,Xt.pos.y+(Math.random()-.5)*y.shake*.5+Math.sin(y.time*43+1)*r*.8,Xt.pos.z+Math.sin(y.time*29+2)*r*.5),Fe.lookAt(t+c*3,e+.5,n+h*3);let x=Cd.free;x&&(Fe.position.set(x[0],x[1],x[2]),Fe.lookAt(x[3],x[4],x[5])),Fe.updateProjectionMatrix()}function Av(i){y.t+=i,y.left-=i,y.t>3&&on("what"),mv(i);for(let t of y.cars)t.ai&&t.ai.type==="traffic"&&Wo(t,i,nt.x,nt.z);if(Mn.begin(),xv(i),gv(i),bv(i),ud(!0),uv(i),dd(i),Mh(),me.fire){let t=me.fire,e=.7+Math.random()*.5;Mn.add(t[0],t[1],t[2],4.5*e,2.4*e,.9*e,.2),Math.random()<.3&&ui.emit(t[0],t[1],t[2],(Math.random()-.5)*1.5,3+Math.random()*3,(Math.random()-.5)*1.5,1.2,2.5,.9,.2)}if(y.mission&&y.mission.id==="kos"&&y.mission.si<=1){let t=_n.artifact;Mn.add(t[0],1.4+Math.sin(y.time*3)*.2,t[1],5,2.6,1.3,.2)}for(let t of me.towers)Mn.add(t.x,t.h+.6,t.z,4,(y.time*2|0)%2?2.2:.3,.2,.15);if(Mn.end(),y.sayT-=i,y.sayQ.length&&y.sayT<=0){let t=y.sayQ.shift();pa(t[0],t[1]),y.sayT=1.15}for(;y.amb<Jo.length&&Jo[y.amb][0]<=y.t;){let t=Jo[y.amb++];!(t[1]==="kos"&&y.flags.witcher&&t[2]==="\u041D\u0430 \u0421\u0435\u0440\u0433\u0435\u044F \u0441\u0442\u043E\u043B\u0438\u043A")&&!(y.flags.crash&&t[0]===288)&&!(t[3]&&y.run&&y.run.includes(t[3]))&&y.sayQ.push([t[1],t[2]])}for(;y.cd<$o.length&&y.left<=$o[y.cd][0];){let t=$o[y.cd++];y.left>t[0]-3&&y.sayQ.push(["arkasha",t[1]])}y.left<150&&!y.flags.delay&&(y.flags.delay=1,y.left+=15,Ae([["pasha","\u041F\u0435\u0440\u0435\u043D\u0435\u0441\u043B\u0438!"],["sys","\u0420\u0435\u043B\u0438\u0437 \u043F\u0435\u0440\u0435\u043D\u0435\u0441\u043B\u0438 \u043D\u0430 15 \u0441\u0435\u043A\u0443\u043D\u0434. +15 \u0441\u0435\u043A"],["pasha","\u041D\u0443 \u043E\u0431\u0435\u0449\u0430\u044E\u0442 \u0431\u0435\u0437 \u043F\u0435\u0440\u0435\u043D\u043E\u0441\u043E\u0432"]]),jn("\u041F\u0415\u0420\u0415\u041D\u041E\u0421","+15 \u0441\u0435\u043A\u0443\u043D\u0434")),wd&&!Qf&&(Qf=!0,Ae([["sanya","\u041F\u0440\u0438\u0448\u043B\u043E\u0441\u044C \u043E\u043F\u0435\u0440\u0430\u0442\u0438\u0432\u043A\u0438 \u0434\u043E\u043A\u0443\u043F\u0438\u0442\u044C, \u0447\u0442\u043E\u0431\u044B \u0433\u0440\u0430\u0444\u0438\u043A\u0430 \u043D\u043E\u0440\u043C \u0431\u044B\u043B\u0430\u{1F605}"],["sys","\u0413\u0440\u0430\u0444\u0438\u043A\u0430 \u043F\u043E\u043D\u0438\u0436\u0435\u043D\u0430: \u0442\u0430\u043A \u043F\u043B\u0430\u0432\u043D\u0435\u0435"]])),Nt.intensity+=((y.left<60?1:y.wanted>0?.85:.5)-Nt.intensity)*Tn(1,i),Nt.rush=y.left<60?1:0,me.setShadowCenter(nt.x,nt.z),Tv(i),wv(i),y.left<=0&&Ed()}var rd={url:"https://ecwhfahziwuocmxzyomu.supabase.co/rest/v1/gtr_scores",key:"sb_publishable_srHhvRICnwOl-3P-CPRnKg_Oyx7JTyc"};function Md(i,t){let e=typeof AbortController!="undefined"?new AbortController:null,n=setTimeout(()=>{e&&e.abort()},7e3),s={headers:{apikey:rd.key,"Content-Type":"application/json",Prefer:"return=minimal"}};return e&&(s.signal=e.signal),t&&(s.method="POST",s.body=JSON.stringify(t)),fetch(rd.url+i,s).then(r=>{if(clearTimeout(n),!r.ok)throw new Error("lb "+r.status);return t?null:r.json()},r=>{throw clearTimeout(n),r})}var Rv=i=>{let t=new Date(i);if(isNaN(t))return"";let e=n=>String(n).padStart(2,"0");return e(t.getDate())+"."+e(t.getMonth()+1)+" "+e(t.getHours())+":"+e(t.getMinutes())},ga='<div class="h">\u{1F3C6} \u0422\u0410\u0411\u041B\u0418\u0426\u0410 \u0427\u0410\u0422\u0410</div>',bd=()=>Md("?select=rak,score,created_at,ver&order=score.desc,created_at.desc&limit=150");function Sd(i,t,e){i=i.filter(l=>ri[l.rak]);let n=i.filter(l=>(l.ver||1)===Zo),s=i.filter(l=>(l.ver||1)!==Zo),r=t?n.findIndex(l=>l.rak===t.rak&&l.score===t.score):-1,a=(l,c,h)=>'<div class="r'+(c===r&&!h?" me":"")+(h?" o":"")+'"><span>'+(h?"":c+1+".")+'</span><img src="'+xh[l.rak]+'" alt=""><b>'+ri[l.rak].name+(c===r&&!h?" \xB7 \u044D\u0442\u043E \u0442\u044B":"")+"</b><i>"+Rv(l.created_at)+"</i><em>"+(+l.score||0)+"</em></div>",o=ga+'<div class="s">\u0432\u0441\u0435 \u0437\u0430\u0431\u0435\u0433\u0438 \xB7 \u043B\u0443\u0447\u0448\u0438\u0435 \u0441\u0432\u0435\u0440\u0445\u0443 \xB7 \u0432\u0441\u0435\u0433\u043E '+n.length+"</div>";return n.length||(o+='<div class="e">\u041F\u043E\u043A\u0430 \u043F\u0443\u0441\u0442\u043E. \u0414\u043E\u0438\u0433\u0440\u0430\u0439 \u0434\u043E \u043F\u043E\u043B\u0443\u043D\u043E\u0447\u0438 \u2014 \u0431\u0443\u0434\u0435\u0448\u044C \u043F\u0435\u0440\u0432\u044B\u043C.</div>'),o+=n.slice(0,e).map((l,c)=>a(l,c)).join(""),r>=e&&(o+='<div class="e">\u2026</div>'+a(n[r],r)),n.length===1&&(o+='<div class="e">\u041F\u043E\u043A\u0430 \u0442\u0443\u0442 \u043E\u0434\u0438\u043D \u0437\u0430\u0431\u0435\u0433. \u041A\u0438\u0434\u0430\u0439 \u0441\u0441\u044B\u043B\u043A\u0443 \u0432 \u0447\u0430\u0442.</div>'),s.length&&(o+='<div class="s" style="margin-top:8px">\u043F\u0440\u043E\u0448\u043B\u0430\u044F \u0432\u0435\u0440\u0441\u0438\u044F \u0438\u0433\u0440\u044B (\u0431\u0435\u0437 \u043D\u043E\u0432\u044B\u0445 \u043F\u043E\u0440\u0443\u0447\u0435\u043D\u0438\u0439) \xB7 \u0432\u043D\u0435 \u0437\u0430\u0447\u0451\u0442\u0430</div>'+s.slice(0,Math.max(2,e>>2)).map((l,c)=>a(l,c,!0)).join("")),o}function Cv(){let i=y.stats,t=(Rn.has("debug")||Rn.has("t")||Rn.has("q")||Rn.has("m"))&&!Rn.has("lb"),e=dt("flb"),n=y.score>0&&!t,s=n?{rak:y.pid,score:Math.min(y.score,12e3)}:null;e.classList.remove("hidden"),e.innerHTML=ga+'<div class="e">\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u044E\u2026</div>',(n?Md("",{ver:Zo,rak:s.rak,score:s.score,missions:Math.min(i.missions,6),cards:Math.min(i.cards,2e3),bans:Math.min(i.bans,99)}).catch(()=>null):Promise.resolve()).then(bd).then(a=>{e.innerHTML=Sd(a,s,8)}).catch(()=>{e.innerHTML=ga+'<div class="e">\u041D\u0435\u0442 \u0441\u0432\u044F\u0437\u0438 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043E\u043C \u0440\u0435\u043A\u043E\u0440\u0434\u043E\u0432. \u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u043E\u0441\u0442\u0430\u043B\u0441\u044F \u043D\u0430 \u044D\u0442\u043E\u043C \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0435.</div>'})}function Pv(){let i=dt("lbmc");dt("lbm").classList.remove("hidden"),i.innerHTML=ga+'<div class="e">\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u044E\u2026</div>',bd().then(t=>{i.innerHTML=Sd(t,null,30)}).catch(()=>{i.innerHTML=ga+'<div class="e">\u041D\u0435\u0442 \u0441\u0432\u044F\u0437\u0438 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043E\u043C \u0440\u0435\u043A\u043E\u0440\u0434\u043E\u0432.</div>'})}var Ue=null;function Ed(){y.state="final",Nt.play("bell"),Nt.sting("final"),Nt.rush=0,Nt.setTheme(y.pid),Nt.intensity=1,dt("hud").classList.add("hidden"),dt("modal").classList.add("hidden"),dt("phone").classList.add("hidden"),dt("final").classList.remove("hidden"),Li.mFinal.uniforms.uFlash.value=1,Cn&&(Cn.visible=!1),oi.intensity=0,Ki.u.uHead.value=0,Ar.forEach(l=>l.hide());let i=y.stats,t=nh[0];for(let l of nh)y.score>=l[0]&&(t=l);let e=0;try{e=+(localStorage.getItem("gtr_best")||0),y.score>e&&localStorage.setItem("gtr_best",y.score)}catch{}Ue={t:0,i:0,fw:0,rank:t,best:e,fl:[],h0:me.hemi.intensity},Ue.ids=pn.map(l=>l.id).filter(l=>l!==y.pid),Ue.ids.splice(5,0,y.pid),Qi.pts.visible=!0,Ue.ids.forEach((l,c)=>{let h=fi[l];h.visible=!0,h.rotation.set(0,-Math.PI/2,0),h.position.set(l===y.pid?154.5:155.9,.95,-38+c*1.6)}),Cn&&!Cn.userData.named&&(Cn.userData.named=1,Cn.add(Kc(Rr,_h[y.pid]||ri[y.pid].css)));let n=location.origin+location.pathname,s=`\u{1F980} Grand Theft Raki: \u041D\u043E\u0432\u043E\u0441\u0438\u0431\u0438\u0440\u0441\u043A
\u0418\u0433\u0440\u0430\u043B \u0437\u0430: ${Rr}
\u0421\u0447\u0451\u0442: ${y.score} \u2014 \u0437\u0432\u0430\u043D\u0438\u0435 ${t[1]}
\u041F\u043E\u0440\u0443\u0447\u0435\u043D\u0438\u0439: ${i.missions}/${i.total} \xB7 \u043A\u0430\u0440\u0442\u043E\u0447\u0435\u043A \u0418\u0433\u043E\u0440\u044F: ${i.cards} \u0438\u0437 144 \xB7 \u0431\u0430\u043D\u043E\u0432 \u043E\u0442 \u043C\u043E\u0434\u0435\u0440\u0430\u0442\u043E\u0440\u043E\u0432: ${i.bans}${Object.keys(y.tro||{}).length?`
\u0422\u0440\u043E\u0444\u0435\u0438: `+Object.keys(y.tro).map(l=>rl[l][0]).join(", "):""}
${n}`;dt("frank").textContent=t[1],dt("fscore").textContent=y.score+" \u043E\u0447\u043A.",dt("fnote").innerHTML=yn(t[2])+"<br><i>"+yn($f[y.pid]||"")+"</i>";let r=Object.keys(y.tro||{}).map(l=>rl[l][0]),a=(y.run||[]).map(l=>(y.done[l]||"\u2014")+" "+ha[l].title).join(" \xB7 "),o=eh.filter(l=>l!==y.pid&&!(y.run||[]).includes(l)).map(l=>ri[l].name).join(", ");dt("fstats").innerHTML="\u0418\u0433\u0440\u0430\u043B \u0437\u0430: <b>"+yn(Rr)+"</b> \xB7 \u043F\u043E\u0440\u0443\u0447\u0435\u043D\u0438\u0439 "+i.missions+"/"+i.total+"<br>"+yn(a)+"<br>\u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438 "+i.cards+"/144 \xB7 \u043F\u0435\u0440\u044C\u044F "+i.feathers+"/6 \xB7 \u043E\u0440\u0445\u0438\u0434\u0435\u0438 "+i.orchids+"/6 \xB7 \u0443\u0433\u043E\u043D\u043E\u0432 "+i.stolen+" \xB7 \u0431\u0430\u043D\u043E\u0432 "+i.bans+" \xB7 \u0441\u043D\u0435\u0441\u0435\u043D\u043E "+i.smashed+(r.length?"<br>\u{1F980} \u0422\u0440\u043E\u0444\u0435\u0438 ("+r.length+"): "+yn(r.join(" \xB7 ")):"")+(o?'<br><span class="nx">\u0412 \u044D\u0442\u043E\u0442 \u0440\u0430\u0437 \u043D\u0435 \u0432\u044B\u043F\u0430\u043B\u0438 \u043F\u043E\u0440\u0443\u0447\u0435\u043D\u0438\u044F: '+yn(o)+". \u0421\u044B\u0433\u0440\u0430\u0439 \u0435\u0449\u0451.</span>":"")+(e?"<br>\u043F\u0440\u043E\u0448\u043B\u044B\u0439 \u0440\u0435\u043A\u043E\u0440\u0434 \u043D\u0430 \u044D\u0442\u043E\u043C \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0435: "+e:""),dt("fcopy").onclick=async()=>{let l=!1;try{await navigator.clipboard.writeText(s),l=!0}catch{}if(!l){let c=document.createElement("textarea");c.value=s,c.style.cssText="position:fixed;left:0;top:0;opacity:0",document.body.appendChild(c),c.focus(),c.select();try{l=document.execCommand("copy")}catch{l=!1}c.remove()}l?dt("fcopy").textContent="\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u043E \u2714 \u0432\u0441\u0442\u0430\u0432\u043B\u044F\u0439 \u0432 \u0447\u0430\u0442":(dt("fstats").innerHTML=`<textarea readonly style="width:100%;height:120px;font:13px system-ui;background:#111a2a;color:#fff;border:1px solid #445;border-radius:10px;padding:8px;-webkit-user-select:text;user-select:text">${yn(s)}</textarea>`,dt("fcopy").textContent="\u0412\u044B\u0434\u0435\u043B\u0438 \u0438 \u0441\u043A\u043E\u043F\u0438\u0440\u0443\u0439 \u0442\u0435\u043A\u0441\u0442 \u0432\u044B\u0448\u0435")},dt("fagain").onclick=()=>location.reload(),Cv()}function Lv(i){Ue.t+=i;let t=Li.mFinal.uniforms;t.uFlash.value=Math.max(0,t.uFlash.value-i*1.2);let e=Ue.t,n=e*.12+2.6,s=we((e-6.5)/5.5,0,1),r=s*s*(3-2*s),a=Math.sin(e*.42-1.3),o=(c,h)=>c+(h-c)*r;if(Fe.fov=el,Fe.position.set(o(143.8-e*.22,176+Math.cos(n)*60),o(4.6+e*.12,22+Math.min(e,30)*.7),o(-30+a*3.5,-30+Math.sin(n)*60)),Fe.lookAt(o(155.6,178),o(2,14),o(-30+a*5.5,-30)),Fe.updateProjectionMatrix(),Ue.ids.forEach((c,h)=>{let u=fi[c],f=c===y.pid;ra(u,y.time+h*.37,1,(e+h*.7)%3<1.2),u.position.y=.95+Math.abs(Math.sin(e*5.2+h*1.7))*(f?.75:.42),u.rotation.y=-Math.PI/2+Math.sin(e*2.3+h)*.55+(f?Math.pow(Math.max(0,Math.sin(e*.8)),10)*6.283:0)}),me.setShadowCenter(176,-30),Ue.fw-=i,Ue.fw<=0&&Ue.t<40){Ue.fw=.35+Math.random()*.5;let c=[[3,.4,1.6],[.4,2.4,3],[3,2.2,.4],[.6,3,1],[3,.6,.4]][Math.floor(Math.random()*5)],h=154+Math.random()*54,u=25+Math.random()*21,f=-60+Math.random()*60;Qi.burst(h,u,f,70,15,2.1,c[0],c[1],c[2]),Math.random()<.5&&Qi.burst(h,u,f,28,7,1.6,3,2.8,2.2),Ue.fl.push([h,u,f,.4,c]),Math.random()<.6&&Nt.play("boom")}for(let c of y.cars)c.ai&&c.ai.type==="traffic"&&Wo(c,i,1e5,1e5);Mn.begin(),Mh(),ud(!1);let l=0;for(let c of Ue.fl)if(c[3]-=i,c[3]>0){let h=c[3]/.4;l+=h,Mn.add(c[0],c[1],c[2],8+26*h,c[4][0]*.5*h,c[4][1]*.5*h,c[4][2]*.5*h)}Ue.fl.length>12&&(Ue.fl=Ue.fl.filter(c=>c[3]>0)),me.hemi.intensity=Ue.h0*(1+Math.min(l,1.2)*.8);for(let c of Ue.ids)bh(fi[c]);if(Mn.end(),Ue.i<ua.length&&Ue.t>1.6+Ue.i*.95){let c=ua[Ue.i++],h=dt("fchat");for(h.appendChild(cd(c[0],c[1]));h.children.length>3;)h.firstChild.remove();Nt.play("msg")}if(Ue.i>=ua.length&&Ue.t>2.6+ua.length*.95&&dt("fcard").classList.contains("hidden")){let c=dt("fchat");for(;c.children.length>1;)c.firstChild.remove();dt("fcard").classList.remove("hidden"),Nt.play("win")}}var fa=0,gh=performance.now(),jo=0,lh=0,da=4,wd=!1,ad=!1;function Td(i){y.state==="play"?Av(i):y.state==="menu"?lv(i):y.state==="final"&&Lv(i)}function Ad(i){requestAnimationFrame(Ad);let t=(i-gh)/1e3;gh=i;let e=Math.min(.05,Math.max(.001,t));y.time+=e;try{Td(e),Rd(e)}catch(n){dt("err").textContent=String(n&&n.stack||n).slice(0,400)}if(t<.5&&(da-=t,da<=0&&(jo+=t,lh++,jo>1.6))){let n=lh/jo;jo=0,lh=0,Rn.has("fps")&&(dt("err").textContent=n.toFixed(0)+" fps \xB7 q"+Pi),n<(Vn?27:43)&&!document.hidden?fa++:fa=0,Ko=n>56?Ko+1:0,fa>=2&&Pi<al.length-1&&!Rn.has("q")?(fa=0,Pi++,Pi>rv&&(wd=!0),rh=!0,da=2.5,Rs()):Vn&&Ko>=3&&Pi>0&&!rh&&!Rn.has("q")&&y.state==="play"&&(rh=!0,Ko=0,Pi--,da=3,Rs())}ad||(ad=!0,dt("loading").style.opacity=0,setTimeout(()=>dt("loading").classList.add("hidden"),650))}function Rd(i){{let t=Li.mFinal.uniforms;y.state!=="final"&&(t.uFlash.value=Math.max(0,t.uFlash.value-i*2)),ws.value=ld/(2*Math.tan(Fe.fov*Math.PI/360)),me.update(i,y.time,Fe),Ki.u.uTime.value=y.time,Ki.u.uCam.value.copy(Fe.position),ui.update(y.time),Qi.pts.visible&&(Qi.u.uScale.value=ws.value*6,Qi.update(y.time)),Ar.forEach(e=>e.update(y.time)),Nt.tick(y.state==="play"&&y.mode==="car"?we(y.car.speed/32,0,1):0,y.state==="play"&&y.mode==="car"?y.car.slip:0,y.state==="play"&&y.mode==="car",y.wanted>0,y.car?y.car.kind:"sedan"),Li.render(Ze,Fe,y.time)}}Rs();ov();y.state="menu";dt("menu").classList.remove("hidden");var Cd={mcam:i=>{ai=i},S:y,P:nt,cam:Xt,world:me,post:Li,renderer:hi,QL:al,setQ:i=>{Pi=i,Rs()},finale:Ed,startMission:vd,COL:Ps,action:Ah,startWanted:Rh,audio:Nt,Audio:ca,THEMES:An,radioNext:Eh,horn:wh,trophy:on,PEDS:nl,NODES:vn,step:(i,t=1/30,e)=>{for(let n=0;n<i;n++)y.time+=t,Td(t);e||Rd(t)}};Rn.has("debug")&&(window.__gtr=Cd);requestAnimationFrame(Ad);})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
