(()=>{var Mc="160";var pd=0,uh=1,md=2;var ku=1,bc=2,hi=3,zi=0,un=1,Mn=2;var Ni=0,Ys=1,Gn=2,fh=3,dh=4,gd=5,Qi=100,xd=101,_d=102,ph=103,mh=104,vd=200,yd=201,Md=202,bd=203,Rl=204,Cl=205,Sd=206,Ed=207,wd=208,Td=209,Ad=210,Rd=211,Cd=212,Pd=213,Ld=214,Id=0,Dd=1,Ud=2,Fa=3,Nd=4,Fd=5,Od=6,zd=7,Sc=0,Bd=1,kd=2,Fi=0,Hd=1,Vd=2,Gd=3,Wd=4,Xd=5,qd=6;var Hu=300,$s=301,Ks=302,Pl=303,Ll=304,xo=306,ss=1e3,Hn=1001,Il=1002,nn=1003,gh=1004;var qo=1005;var yn=1006,Yd=1007;var zr=1008;var $n=1009,Zd=1010,Jd=1011,Ec=1012,Vu=1013,Di=1014,Ui=1015,rs=1016,Gu=1017,Wu=1018,es=1020,$d=1021,Vn=1023,Kd=1024,Qd=1025,ns=1026,Qs=1027,jd=1028,Xu=1029,tp=1030,qu=1031,Yu=1033,Yo=33776,Zo=33777,Jo=33778,$o=33779,xh=35840,_h=35841,vh=35842,yh=35843,Zu=36196,Mh=37492,bh=37496,Sh=37808,Eh=37809,wh=37810,Th=37811,Ah=37812,Rh=37813,Ch=37814,Ph=37815,Lh=37816,Ih=37817,Dh=37818,Uh=37819,Nh=37820,Fh=37821,Ko=36492,Oh=36494,zh=36495,ep=36283,Bh=36284,kh=36285,Hh=36286;var Oa=2300,za=2301,Qo=2302,Vh=2400,Gh=2401,Wh=2402;var Ju=3e3,is=3001,np=3200,ip=3201,$u=0,sp=1,On="",Ne="srgb",pi="srgb-linear",wc="display-p3",_o="display-p3-linear",Ba="linear",Te="srgb",ka="rec709",Ha="p3";var Es=7680;var Xh=519,rp=512,ap=513,op=514,Ku=515,lp=516,cp=517,hp=518,up=519,Dl=35044;var qh="300 es",Ul=1035,di=2e3,Va=2001,Bi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var jo=Math.PI/180,Ga=180/Math.PI;function Oi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(cn[i&255]+cn[i>>8&255]+cn[i>>16&255]+cn[i>>24&255]+"-"+cn[t&255]+cn[t>>8&255]+"-"+cn[t>>16&15|64]+cn[t>>24&255]+"-"+cn[e&63|128]+cn[e>>8&255]+"-"+cn[e>>16&255]+cn[e>>24&255]+cn[n&255]+cn[n>>8&255]+cn[n>>16&255]+cn[n>>24&255]).toLowerCase()}function sn(i,t,e){return Math.max(t,Math.min(e,i))}function fp(i,t){return(i%t+t)%t}function tl(i,t,e){return(1-e)*i+e*t}function Yh(i){return(i&i-1)===0&&i!==0}function Nl(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function fi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ye(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Mt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(sn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},re=class i{constructor(t,e,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],x=s[0],m=s[3],p=s[6],y=s[1],v=s[4],w=s[7],L=s[2],T=s[5],I=s[8];return r[0]=a*x+o*y+l*L,r[3]=a*m+o*v+l*T,r[6]=a*p+o*w+l*I,r[1]=c*x+h*y+u*L,r[4]=c*m+h*v+u*T,r[7]=c*p+h*w+u*I,r[2]=f*x+d*y+g*L,r[5]=f*m+d*v+g*T,r[8]=f*p+d*w+g*I,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,f=o*l-h*r,d=c*r-a*l,g=e*u+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=u*x,t[1]=(s*c-h*n)*x,t[2]=(o*n-s*a)*x,t[3]=f*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-o*e)*x,t[6]=d*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(el.makeScale(t,e)),this}rotate(t){return this.premultiply(el.makeRotation(-t)),this}translate(t,e){return this.premultiply(el.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},el=new re;function Qu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Wa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function dp(){let i=Wa("canvas");return i.style.display="block",i}var Zh={};function Ur(i){i in Zh||(Zh[i]=!0,console.warn(i))}var Jh=new re().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),$h=new re().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),aa={[pi]:{transfer:Ba,primaries:ka,toReference:i=>i,fromReference:i=>i},[Ne]:{transfer:Te,primaries:ka,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[_o]:{transfer:Ba,primaries:Ha,toReference:i=>i.applyMatrix3($h),fromReference:i=>i.applyMatrix3(Jh)},[wc]:{transfer:Te,primaries:Ha,toReference:i=>i.convertSRGBToLinear().applyMatrix3($h),fromReference:i=>i.applyMatrix3(Jh).convertLinearToSRGB()}},pp=new Set([pi,_o]),ve={enabled:!0,_workingColorSpace:pi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!pp.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=aa[t].toReference,s=aa[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return aa[i].primaries},getTransfer:function(i){return i===On?Ba:aa[i].transfer}};function Zs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function nl(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ws,Xa=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ws===void 0&&(ws=Wa("canvas")),ws.width=t.width,ws.height=t.height;let n=ws.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ws}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=Wa("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Zs(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Zs(e[n]/255)*255):e[n]=Zs(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},mp=0,qa=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mp++}),this.uuid=Oi(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(il(s[a].image)):r.push(il(s[a]))}else r=il(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function il(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Xa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var gp=0,Ln=class i extends Bi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Hn,s=Hn,r=yn,a=zr,o=Vn,l=$n,c=i.DEFAULT_ANISOTROPY,h=On){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gp++}),this.uuid=Oi(),this.name="",this.source=new qa(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Mt(0,0),this.repeat=new Mt(1,1),this.center=new Mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new re,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Ur("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===is?Ne:On),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Hu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ss:t.x=t.x-Math.floor(t.x);break;case Hn:t.x=t.x<0?0:1;break;case Il:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ss:t.y=t.y-Math.floor(t.y);break;case Hn:t.y=t.y<0?0:1;break;case Il:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ur("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ne?is:Ju}set encoding(t){Ur("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===is?Ne:On}};Ln.DEFAULT_IMAGE=null;Ln.DEFAULT_MAPPING=Hu;Ln.DEFAULT_ANISOTROPY=1;var je=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(c+1)/2,w=(d+1)/2,L=(p+1)/2,T=(h+f)/4,I=(u+x)/4,k=(g+m)/4;return v>w&&v>L?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=T/n,r=I/n):w>L?w<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),n=T/s,r=k/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=I/r,s=k/r),this.set(n,s,r,e),this}let y=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-x)/y,this.z=(f-h)/y,this.w=Math.acos((c+d+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Fl=class extends Bi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new je(0,0,t,e),this.scissorTest=!1,this.viewport=new je(0,0,t,e);let s={width:t,height:e,depth:1};n.encoding!==void 0&&(Ur("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===is?Ne:On),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Ln(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new qa(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},In=class extends Fl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ya=class extends Ln{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ol=class extends Ln{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Dn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],f=r[a+0],d=r[a+1],g=r[a+2],x=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=x;return}if(u!==x||l!==f||c!==d||h!==g){let m=1-o,p=l*f+c*d+h*g+u*x,y=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){let L=Math.sqrt(v),T=Math.atan2(L,p*y);m=Math.sin(m*T)/L,o=Math.sin(o*T)/L}let w=o*y;if(l=l*m+f*w,c=c*m+d*w,h=h*m+g*w,u=u*m+x*w,m===1-o){let L=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=L,c*=L,h*=L,u*=L}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],f=r[a+1],d=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*d-c*f,t[e+1]=l*g+h*f+c*u-o*d,t[e+2]=c*g+h*d+o*f-l*u,t[e+3]=h*g-o*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),f=l(n/2),d=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+o+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>u){let d=2*Math.sqrt(1+n-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>u){let d=2*Math.sqrt(1+o-n-u);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(sn(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let d=1-e;return this._w=d*a+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),n*Math.sin(r),n*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Kh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Kh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return sl.copy(this).projectOnVector(t),this.sub(sl)}reflect(t){return this.sub(sl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(sn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},sl=new U,Kh=new Dn,mi=class{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(zn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(zn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=zn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,zn):zn.fromBufferAttribute(r,a),zn.applyMatrix4(t.matrixWorld),this.expandByPoint(zn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),oa.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),oa.copy(n.boundingBox)),oa.applyMatrix4(t.matrixWorld),this.union(oa)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,zn),zn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(wr),la.subVectors(this.max,wr),Ts.subVectors(t.a,wr),As.subVectors(t.b,wr),Rs.subVectors(t.c,wr),Ri.subVectors(As,Ts),Ci.subVectors(Rs,As),Yi.subVectors(Ts,Rs);let e=[0,-Ri.z,Ri.y,0,-Ci.z,Ci.y,0,-Yi.z,Yi.y,Ri.z,0,-Ri.x,Ci.z,0,-Ci.x,Yi.z,0,-Yi.x,-Ri.y,Ri.x,0,-Ci.y,Ci.x,0,-Yi.y,Yi.x,0];return!rl(e,Ts,As,Rs,la)||(e=[1,0,0,0,1,0,0,0,1],!rl(e,Ts,As,Rs,la))?!1:(ca.crossVectors(Ri,Ci),e=[ca.x,ca.y,ca.z],rl(e,Ts,As,Rs,la))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,zn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(zn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ri),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},ri=[new U,new U,new U,new U,new U,new U,new U,new U],zn=new U,oa=new mi,Ts=new U,As=new U,Rs=new U,Ri=new U,Ci=new U,Yi=new U,wr=new U,la=new U,ca=new U,Zi=new U;function rl(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Zi.fromArray(i,r);let o=s.x*Math.abs(Zi.x)+s.y*Math.abs(Zi.y)+s.z*Math.abs(Zi.z),l=t.dot(Zi),c=e.dot(Zi),h=n.dot(Zi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var xp=new mi,Tr=new U,al=new U,ki=class{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):xp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Tr.subVectors(t,this.center);let e=Tr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Tr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(al.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Tr.copy(t.center).add(al)),this.expandByPoint(Tr.copy(t.center).sub(al))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},ai=new U,ol=new U,ha=new U,Pi=new U,ll=new U,ua=new U,cl=new U,Za=class{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ai)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ai.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ai.copy(this.origin).addScaledVector(this.direction,e),ai.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ol.copy(t).add(e).multiplyScalar(.5),ha.copy(e).sub(t).normalize(),Pi.copy(this.origin).sub(ol);let r=t.distanceTo(e)*.5,a=-this.direction.dot(ha),o=Pi.dot(this.direction),l=-Pi.dot(ha),c=Pi.lengthSq(),h=Math.abs(1-a*a),u,f,d,g;if(h>0)if(u=a*l-o,f=a*o-l,g=r*h,u>=0)if(f>=-g)if(f<=g){let x=1/h;u*=x,f*=x,d=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ol).addScaledVector(ha,f),d}intersectSphere(t,e){ai.subVectors(t.center,this.origin);let n=ai.dot(this.direction),s=ai.dot(ai)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ai)!==null}intersectTriangle(t,e,n,s,r){ll.subVectors(e,t),ua.subVectors(n,t),cl.crossVectors(ll,ua);let a=this.direction.dot(cl),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Pi.subVectors(this.origin,t);let l=o*this.direction.dot(ua.crossVectors(Pi,ua));if(l<0)return null;let c=o*this.direction.dot(ll.cross(Pi));if(c<0||l+c>a)return null;let h=-o*Pi.dot(cl);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ue=class i{constructor(t,e,n,s,r,a,o,l,c,h,u,f,d,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,f,d,g,x,m)}set(t,e,n,s,r,a,o,l,c,h,u,f,d,g,x,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Cs.setFromMatrixColumn(t,0).length(),r=1/Cs.setFromMatrixColumn(t,1).length(),a=1/Cs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=a*h,d=a*u,g=o*h,x=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+g*c,e[5]=f-x*c,e[9]=-o*l,e[2]=x-f*c,e[6]=g+d*c,e[10]=a*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,g=c*h,x=c*u;e[0]=f+x*o,e[4]=g*o-d,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=d*o-g,e[6]=x+f*o,e[10]=a*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,g=c*h,x=c*u;e[0]=f-x*o,e[4]=-a*u,e[8]=g+d*o,e[1]=d+g*o,e[5]=a*h,e[9]=x-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let f=a*h,d=a*u,g=o*h,x=o*u;e[0]=l*h,e[4]=g*c-d,e[8]=f*c+x,e[1]=l*u,e[5]=x*c+f,e[9]=d*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let f=a*l,d=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=x-f*u,e[8]=g*u+d,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=d*u+g,e[10]=f-x*u}else if(t.order==="XZY"){let f=a*l,d=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+x,e[5]=a*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=o*h,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(_p,t,vp)}lookAt(t,e,n){let s=this.elements;return Cn.subVectors(t,e),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),Li.crossVectors(n,Cn),Li.lengthSq()===0&&(Math.abs(n.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),Li.crossVectors(n,Cn)),Li.normalize(),fa.crossVectors(Cn,Li),s[0]=Li.x,s[4]=fa.x,s[8]=Cn.x,s[1]=Li.y,s[5]=fa.y,s[9]=Cn.y,s[2]=Li.z,s[6]=fa.z,s[10]=Cn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],x=n[6],m=n[10],p=n[14],y=n[3],v=n[7],w=n[11],L=n[15],T=s[0],I=s[4],k=s[8],S=s[12],A=s[1],V=s[5],J=s[9],ft=s[13],O=s[2],X=s[6],Q=s[10],it=s[14],K=s[3],nt=s[7],lt=s[11],ut=s[15];return r[0]=a*T+o*A+l*O+c*K,r[4]=a*I+o*V+l*X+c*nt,r[8]=a*k+o*J+l*Q+c*lt,r[12]=a*S+o*ft+l*it+c*ut,r[1]=h*T+u*A+f*O+d*K,r[5]=h*I+u*V+f*X+d*nt,r[9]=h*k+u*J+f*Q+d*lt,r[13]=h*S+u*ft+f*it+d*ut,r[2]=g*T+x*A+m*O+p*K,r[6]=g*I+x*V+m*X+p*nt,r[10]=g*k+x*J+m*Q+p*lt,r[14]=g*S+x*ft+m*it+p*ut,r[3]=y*T+v*A+w*O+L*K,r[7]=y*I+v*V+w*X+L*nt,r[11]=y*k+v*J+w*Q+L*lt,r[15]=y*S+v*ft+w*it+L*ut,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],x=t[7],m=t[11],p=t[15];return g*(+r*l*u-s*c*u-r*o*f+n*c*f+s*o*d-n*l*d)+x*(+e*l*d-e*c*f+r*a*f-s*a*d+s*c*h-r*l*h)+m*(+e*c*u-e*o*d-r*a*u+n*a*d+r*o*h-n*c*h)+p*(-s*o*h-e*l*u+e*o*f+s*a*u-n*a*f+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],x=t[13],m=t[14],p=t[15],y=u*m*c-x*f*c+x*l*d-o*m*d-u*l*p+o*f*p,v=g*f*c-h*m*c-g*l*d+a*m*d+h*l*p-a*f*p,w=h*x*c-g*u*c+g*o*d-a*x*d-h*o*p+a*u*p,L=g*u*l-h*x*l-g*o*f+a*x*f+h*o*m-a*u*m,T=e*y+n*v+s*w+r*L;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/T;return t[0]=y*I,t[1]=(x*f*r-u*m*r-x*s*d+n*m*d+u*s*p-n*f*p)*I,t[2]=(o*m*r-x*l*r+x*s*c-n*m*c-o*s*p+n*l*p)*I,t[3]=(u*l*r-o*f*r-u*s*c+n*f*c+o*s*d-n*l*d)*I,t[4]=v*I,t[5]=(h*m*r-g*f*r+g*s*d-e*m*d-h*s*p+e*f*p)*I,t[6]=(g*l*r-a*m*r-g*s*c+e*m*c+a*s*p-e*l*p)*I,t[7]=(a*f*r-h*l*r+h*s*c-e*f*c-a*s*d+e*l*d)*I,t[8]=w*I,t[9]=(g*u*r-h*x*r-g*n*d+e*x*d+h*n*p-e*u*p)*I,t[10]=(a*x*r-g*o*r+g*n*c-e*x*c-a*n*p+e*o*p)*I,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*d-e*o*d)*I,t[12]=L*I,t[13]=(h*x*s-g*u*s+g*n*f-e*x*f-h*n*m+e*u*m)*I,t[14]=(g*o*s-a*x*s-g*n*l+e*x*l+a*n*m-e*o*m)*I,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*f+e*o*f)*I,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,f=r*c,d=r*h,g=r*u,x=a*h,m=a*u,p=o*u,y=l*c,v=l*h,w=l*u,L=n.x,T=n.y,I=n.z;return s[0]=(1-(x+p))*L,s[1]=(d+w)*L,s[2]=(g-v)*L,s[3]=0,s[4]=(d-w)*T,s[5]=(1-(f+p))*T,s[6]=(m+y)*T,s[7]=0,s[8]=(g+v)*I,s[9]=(m-y)*I,s[10]=(1-(f+x))*I,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Cs.set(s[0],s[1],s[2]).length(),a=Cs.set(s[4],s[5],s[6]).length(),o=Cs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Bn.copy(this);let c=1/r,h=1/a,u=1/o;return Bn.elements[0]*=c,Bn.elements[1]*=c,Bn.elements[2]*=c,Bn.elements[4]*=h,Bn.elements[5]*=h,Bn.elements[6]*=h,Bn.elements[8]*=u,Bn.elements[9]*=u,Bn.elements[10]*=u,e.setFromRotationMatrix(Bn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=di){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),d,g;if(o===di)d=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Va)d=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=di){let l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(a-r),f=(e+t)*c,d=(n+s)*h,g,x;if(o===di)g=(a+r)*u,x=-2*u;else if(o===Va)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Cs=new U,Bn=new ue,_p=new U(0,0,0),vp=new U(1,1,1),Li=new U,fa=new U,Cn=new U,Qh=new ue,jh=new Dn,js=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(sn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-sn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(sn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-sn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(sn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-sn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Qh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Qh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return jh.setFromEuler(this),this.setFromQuaternion(jh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};js.DEFAULT_ORDER="XYZ";var Ja=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},yp=0,tu=new U,Ps=new Dn,oi=new ue,da=new U,Ar=new U,Mp=new U,bp=new Dn,eu=new U(1,0,0),nu=new U(0,1,0),iu=new U(0,0,1),Sp={type:"added"},Ep={type:"removed"},Xe=class i extends Bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yp++}),this.uuid=Oi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new U,e=new js,n=new Dn,s=new U(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ue},normalMatrix:{value:new re}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ja,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ps.setFromAxisAngle(t,e),this.quaternion.multiply(Ps),this}rotateOnWorldAxis(t,e){return Ps.setFromAxisAngle(t,e),this.quaternion.premultiply(Ps),this}rotateX(t){return this.rotateOnAxis(eu,t)}rotateY(t){return this.rotateOnAxis(nu,t)}rotateZ(t){return this.rotateOnAxis(iu,t)}translateOnAxis(t,e){return tu.copy(t).applyQuaternion(this.quaternion),this.position.add(tu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(eu,t)}translateY(t){return this.translateOnAxis(nu,t)}translateZ(t){return this.translateOnAxis(iu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(oi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?da.copy(t):da.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ar.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oi.lookAt(Ar,da,this.up):oi.lookAt(da,Ar,this.up),this.quaternion.setFromRotationMatrix(oi),s&&(oi.extractRotation(s.matrixWorld),Ps.setFromRotationMatrix(oi),this.quaternion.premultiply(Ps.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Sp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ep)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),oi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),oi.multiply(t.parent.matrixWorld)),t.applyMatrix4(oi),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ar,t,Mp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ar,bp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++){let r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),d=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Xe.DEFAULT_UP=new U(0,1,0);Xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var kn=new U,li=new U,hl=new U,ci=new U,Ls=new U,Is=new U,su=new U,ul=new U,fl=new U,dl=new U,pa=!1,ts=class i{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),kn.subVectors(t,e),s.cross(kn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){kn.subVectors(s,e),li.subVectors(n,e),hl.subVectors(t,e);let a=kn.dot(kn),o=kn.dot(li),l=kn.dot(hl),c=li.dot(li),h=li.dot(hl),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-o*h)*f,g=(a*h-o*l)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ci)===null?!1:ci.x>=0&&ci.y>=0&&ci.x+ci.y<=1}static getUV(t,e,n,s,r,a,o,l){return pa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),pa=!0),this.getInterpolation(t,e,n,s,r,a,o,l)}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ci.x),l.addScaledVector(a,ci.y),l.addScaledVector(o,ci.z),l)}static isFrontFacing(t,e,n,s){return kn.subVectors(n,e),li.subVectors(t,e),kn.cross(li).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return kn.subVectors(this.c,this.b),li.subVectors(this.a,this.b),kn.cross(li).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,s,r){return pa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),pa=!0),i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Ls.subVectors(s,n),Is.subVectors(r,n),ul.subVectors(t,n);let l=Ls.dot(ul),c=Is.dot(ul);if(l<=0&&c<=0)return e.copy(n);fl.subVectors(t,s);let h=Ls.dot(fl),u=Is.dot(fl);if(h>=0&&u<=h)return e.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Ls,a);dl.subVectors(t,r);let d=Ls.dot(dl),g=Is.dot(dl);if(g>=0&&d<=g)return e.copy(r);let x=d*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Is,o);let m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return su.subVectors(r,s),o=(u-h)/(u-h+(d-g)),e.copy(s).addScaledVector(su,o);let p=1/(m+x+f);return a=x*p,o=f*p,e.copy(n).addScaledVector(Ls,a).addScaledVector(Is,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ju={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ii={h:0,s:0,l:0},ma={h:0,s:0,l:0};function pl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var It=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ne){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ve.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ve.workingColorSpace){return this.r=t,this.g=e,this.b=n,ve.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ve.workingColorSpace){if(t=fp(t,1),e=sn(e,0,1),n=sn(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=pl(a,r,t+1/3),this.g=pl(a,r,t),this.b=pl(a,r,t-1/3)}return ve.toWorkingColorSpace(this,s),this}setStyle(t,e=Ne){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ne){let n=ju[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Zs(t.r),this.g=Zs(t.g),this.b=Zs(t.b),this}copyLinearToSRGB(t){return this.r=nl(t.r),this.g=nl(t.g),this.b=nl(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ne){return ve.fromWorkingColorSpace(hn.copy(this),t),Math.round(sn(hn.r*255,0,255))*65536+Math.round(sn(hn.g*255,0,255))*256+Math.round(sn(hn.b*255,0,255))}getHexString(t=Ne){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ve.workingColorSpace){ve.fromWorkingColorSpace(hn.copy(this),e);let n=hn.r,s=hn.g,r=hn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ve.workingColorSpace){return ve.fromWorkingColorSpace(hn.copy(this),e),t.r=hn.r,t.g=hn.g,t.b=hn.b,t}getStyle(t=Ne){ve.fromWorkingColorSpace(hn.copy(this),t);let e=hn.r,n=hn.g,s=hn.b;return t!==Ne?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ii),this.setHSL(Ii.h+t,Ii.s+e,Ii.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ii),t.getHSL(ma);let n=tl(Ii.h,ma.h,e),s=tl(Ii.s,ma.s,e),r=tl(Ii.l,ma.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},hn=new It;It.NAMES=ju;var wp=0,gi=class extends Bi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wp++}),this.uuid=Oi(),this.name="",this.type="Material",this.blending=Ys,this.side=zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rl,this.blendDst=Cl,this.blendEquation=Qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new It(0,0,0),this.blendAlpha=0,this.depthFunc=Fa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Es,this.stencilZFail=Es,this.stencilZPass=Es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ys&&(n.blending=this.blending),this.side!==zi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Rl&&(n.blendSrc=this.blendSrc),this.blendDst!==Cl&&(n.blendDst=this.blendDst),this.blendEquation!==Qi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Fa&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Es&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Es&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Es&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},an=class extends gi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Sc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ve=new U,ga=new Mt,fe=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Dl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ui,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ga.fromBufferAttribute(this,e),ga.applyMatrix3(t),this.setXY(e,ga.x,ga.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix3(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix4(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyNormalMatrix(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.transformDirection(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=fi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ye(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=fi(e,this.array)),e}setX(t,e){return this.normalized&&(e=ye(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=fi(e,this.array)),e}setY(t,e){return this.normalized&&(e=ye(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=fi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ye(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=fi(e,this.array)),e}setW(t,e){return this.normalized&&(e=ye(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ye(e,this.array),n=ye(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ye(e,this.array),n=ye(n,this.array),s=ye(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ye(e,this.array),n=ye(n,this.array),s=ye(s,this.array),r=ye(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Dl&&(t.usage=this.usage),t}};var $a=class extends fe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ka=class extends fe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ae=class extends fe{constructor(t,e,n){super(new Float32Array(t),e,n)}};var Tp=0,Fn=new ue,ml=new Xe,Ds=new U,Pn=new mi,Rr=new mi,Qe=new U,xe=class i extends Bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tp++}),this.uuid=Oi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Qu(t)?Ka:$a)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new re().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Fn.makeRotationFromQuaternion(t),this.applyMatrix4(Fn),this}rotateX(t){return Fn.makeRotationX(t),this.applyMatrix4(Fn),this}rotateY(t){return Fn.makeRotationY(t),this.applyMatrix4(Fn),this}rotateZ(t){return Fn.makeRotationZ(t),this.applyMatrix4(Fn),this}translate(t,e,n){return Fn.makeTranslation(t,e,n),this.applyMatrix4(Fn),this}scale(t,e,n){return Fn.makeScale(t,e,n),this.applyMatrix4(Fn),this}lookAt(t){return ml.lookAt(t),ml.updateMatrix(),this.applyMatrix4(ml.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ds).negate(),this.translate(Ds.x,Ds.y,Ds.z),this}setFromPoints(t){let e=[];for(let n=0,s=t.length;n<s;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ae(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Pn.setFromBufferAttribute(r),this.morphTargetsRelative?(Qe.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint(Qe),Qe.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint(Qe)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ki);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(t){let n=this.boundingSphere.center;if(Pn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Rr.setFromBufferAttribute(o),this.morphTargetsRelative?(Qe.addVectors(Pn.min,Rr.min),Pn.expandByPoint(Qe),Qe.addVectors(Pn.max,Rr.max),Pn.expandByPoint(Qe)):(Pn.expandByPoint(Rr.min),Pn.expandByPoint(Rr.max))}Pn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Qe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Qe));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Qe.fromBufferAttribute(o,c),l&&(Ds.fromBufferAttribute(t,c),Qe.add(Ds)),s=Math.max(s,n.distanceToSquared(Qe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.array,s=e.position.array,r=e.normal.array,a=e.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fe(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let A=0;A<o;A++)c[A]=new U,h[A]=new U;let u=new U,f=new U,d=new U,g=new Mt,x=new Mt,m=new Mt,p=new U,y=new U;function v(A,V,J){u.fromArray(s,A*3),f.fromArray(s,V*3),d.fromArray(s,J*3),g.fromArray(a,A*2),x.fromArray(a,V*2),m.fromArray(a,J*2),f.sub(u),d.sub(u),x.sub(g),m.sub(g);let ft=1/(x.x*m.y-m.x*x.y);isFinite(ft)&&(p.copy(f).multiplyScalar(m.y).addScaledVector(d,-x.y).multiplyScalar(ft),y.copy(d).multiplyScalar(x.x).addScaledVector(f,-m.x).multiplyScalar(ft),c[A].add(p),c[V].add(p),c[J].add(p),h[A].add(y),h[V].add(y),h[J].add(y))}let w=this.groups;w.length===0&&(w=[{start:0,count:n.length}]);for(let A=0,V=w.length;A<V;++A){let J=w[A],ft=J.start,O=J.count;for(let X=ft,Q=ft+O;X<Q;X+=3)v(n[X+0],n[X+1],n[X+2])}let L=new U,T=new U,I=new U,k=new U;function S(A){I.fromArray(r,A*3),k.copy(I);let V=c[A];L.copy(V),L.sub(I.multiplyScalar(I.dot(V))).normalize(),T.crossVectors(k,V);let ft=T.dot(h[A])<0?-1:1;l[A*4]=L.x,l[A*4+1]=L.y,l[A*4+2]=L.z,l[A*4+3]=ft}for(let A=0,V=w.length;A<V;++A){let J=w[A],ft=J.start,O=J.count;for(let X=ft,Q=ft+O;X<Q;X+=3)S(n[X+0]),S(n[X+1]),S(n[X+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new fe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new U,r=new U,a=new U,o=new U,l=new U,c=new U,h=new U,u=new U;if(t)for(let f=0,d=t.count;f<d;f+=3){let g=t.getX(f+0),x=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Qe.fromBufferAttribute(t,e),Qe.normalize(),t.setXYZ(e,Qe.x,Qe.y,Qe.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h),d=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?d=l[x]*o.data.stride+o.offset:d=l[x]*h;for(let p=0;p<h;p++)f[g++]=c[d++]}return new fe(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},ru=new ue,Ji=new Za,xa=new ki,au=new U,Us=new U,Ns=new U,Fs=new U,gl=new U,_a=new U,va=new Mt,ya=new Mt,Ma=new Mt,ou=new U,lu=new U,cu=new U,ba=new U,Sa=new U,le=class extends Xe{constructor(t=new xe,e=new an){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){_a.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(gl.fromBufferAttribute(u,t),a?_a.addScaledVector(gl,h):_a.addScaledVector(gl.sub(e),h))}e.add(_a)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),xa.copy(n.boundingSphere),xa.applyMatrix4(r),Ji.copy(t.ray).recast(t.near),!(xa.containsPoint(Ji.origin)===!1&&(Ji.intersectSphere(xa,au)===null||Ji.origin.distanceToSquared(au)>(t.far-t.near)**2))&&(ru.copy(r).invert(),Ji.copy(t.ray).applyMatrix4(ru),!(n.boundingBox!==null&&Ji.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ji)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=a[m.materialIndex],y=Math.max(m.start,d.start),v=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let w=y,L=v;w<L;w+=3){let T=o.getX(w),I=o.getX(w+1),k=o.getX(w+2);s=Ea(this,p,t,n,c,h,u,T,I,k),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(o.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let y=o.getX(m),v=o.getX(m+1),w=o.getX(m+2);s=Ea(this,a,t,n,c,h,u,y,v,w),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=a[m.materialIndex],y=Math.max(m.start,d.start),v=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let w=y,L=v;w<L;w+=3){let T=w,I=w+1,k=w+2;s=Ea(this,p,t,n,c,h,u,T,I,k),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let y=m,v=m+1,w=m+2;s=Ea(this,a,t,n,c,h,u,y,v,w),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Ap(i,t,e,n,s,r,a,o){let l;if(t.side===un?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===zi,o),l===null)return null;Sa.copy(o),Sa.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Sa);return c<e.near||c>e.far?null:{distance:c,point:Sa.clone(),object:i}}function Ea(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Us),i.getVertexPosition(l,Ns),i.getVertexPosition(c,Fs);let h=Ap(i,t,e,n,Us,Ns,Fs,ba);if(h){s&&(va.fromBufferAttribute(s,o),ya.fromBufferAttribute(s,l),Ma.fromBufferAttribute(s,c),h.uv=ts.getInterpolation(ba,Us,Ns,Fs,va,ya,Ma,new Mt)),r&&(va.fromBufferAttribute(r,o),ya.fromBufferAttribute(r,l),Ma.fromBufferAttribute(r,c),h.uv1=ts.getInterpolation(ba,Us,Ns,Fs,va,ya,Ma,new Mt),h.uv2=h.uv1),a&&(ou.fromBufferAttribute(a,o),lu.fromBufferAttribute(a,l),cu.fromBufferAttribute(a,c),h.normal=ts.getInterpolation(ba,Us,Ns,Fs,ou,lu,cu,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new U,materialIndex:0};ts.getNormal(Us,Ns,Fs,u.normal),h.face=u}return h}var Un=class i extends xe{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ae(c,3)),this.setAttribute("normal",new ae(h,3)),this.setAttribute("uv",new ae(u,2));function g(x,m,p,y,v,w,L,T,I,k,S){let A=w/I,V=L/k,J=w/2,ft=L/2,O=T/2,X=I+1,Q=k+1,it=0,K=0,nt=new U;for(let lt=0;lt<Q;lt++){let ut=lt*V-ft;for(let Et=0;Et<X;Et++){let $=Et*A-J;nt[x]=$*y,nt[m]=ut*v,nt[p]=O,c.push(nt.x,nt.y,nt.z),nt[x]=0,nt[m]=0,nt[p]=T>0?1:-1,h.push(nt.x,nt.y,nt.z),u.push(Et/I),u.push(1-lt/k),it+=1}}for(let lt=0;lt<k;lt++)for(let ut=0;ut<I;ut++){let Et=f+ut+X*lt,$=f+ut+X*(lt+1),st=f+(ut+1)+X*(lt+1),bt=f+(ut+1)+X*lt;l.push(Et,$,bt),l.push($,st,bt),K+=6}o.addGroup(d,K,S),d+=K,f+=it}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function tr(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function vn(i){let t={};for(let e=0;e<i.length;e++){let n=tr(i[e]);for(let s in n)t[s]=n[s]}return t}function Rp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function tf(i){return i.getRenderTarget()===null?i.outputColorSpace:ve.workingColorSpace}var Cp={clone:tr,merge:vn},Pp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Lp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ge=class extends gi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pp,this.fragmentShader=Lp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=tr(t.uniforms),this.uniformsGroups=Rp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Qa=class extends Xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue,this.coordinateSystem=di}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},rn=class extends Qa{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ga*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(jo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ga*2*Math.atan(Math.tan(jo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(jo*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Os=-90,zs=1,zl=class extends Xe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new rn(Os,zs,t,e);s.layers=this.layers,this.add(s);let r=new rn(Os,zs,t,e);r.layers=this.layers,this.add(r);let a=new rn(Os,zs,t,e);a.layers=this.layers,this.add(a);let o=new rn(Os,zs,t,e);o.layers=this.layers,this.add(o);let l=new rn(Os,zs,t,e);l.layers=this.layers,this.add(l);let c=new rn(Os,zs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===di)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Va)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},ja=class extends Ln{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:$s,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Bl=class extends In{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];e.encoding!==void 0&&(Ur("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===is?Ne:On),this.texture=new ja(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:yn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Un(5,5,5),r=new Ge({name:"CubemapFromEquirect",uniforms:tr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:un,blending:Ni});r.uniforms.tEquirect.value=e;let a=new le(s,r),o=e.minFilter;return e.minFilter===zr&&(e.minFilter=yn),new zl(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},xl=new U,Ip=new U,Dp=new re,ui=class{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=xl.subVectors(n,e).cross(Ip.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(xl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Dp.getNormalMatrix(t),s=this.coplanarPoint(xl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},$i=new ki,wa=new U,Br=class{constructor(t=new ui,e=new ui,n=new ui,s=new ui,r=new ui,a=new ui){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=di){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],d=s[8],g=s[9],x=s[10],m=s[11],p=s[12],y=s[13],v=s[14],w=s[15];if(n[0].setComponents(l-r,f-c,m-d,w-p).normalize(),n[1].setComponents(l+r,f+c,m+d,w+p).normalize(),n[2].setComponents(l+a,f+h,m+g,w+y).normalize(),n[3].setComponents(l-a,f-h,m-g,w-y).normalize(),n[4].setComponents(l-o,f-u,m-x,w-v).normalize(),e===di)n[5].setComponents(l+o,f+u,m+x,w+v).normalize();else if(e===Va)n[5].setComponents(o,u,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),$i.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),$i.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere($i)}intersectsSprite(t){return $i.center.set(0,0,0),$i.radius=.7071067811865476,$i.applyMatrix4(t.matrixWorld),this.intersectsSphere($i)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(wa.x=s.normal.x>0?t.max.x:t.min.x,wa.y=s.normal.y>0?t.max.y:t.min.y,wa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(wa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function ef(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Up(i,t){let e=t.isWebGL2,n=new WeakMap;function s(c,h){let u=c.array,f=c.usage,d=u.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,u,f),c.onUploadCallback();let x;if(u instanceof Float32Array)x=i.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)x=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)x=i.SHORT;else if(u instanceof Uint32Array)x=i.UNSIGNED_INT;else if(u instanceof Int32Array)x=i.INT;else if(u instanceof Int8Array)x=i.BYTE;else if(u instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:x,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:d}}function r(c,h,u){let f=h.array,d=h._updateRange,g=h.updateRanges;if(i.bindBuffer(u,c),d.count===-1&&g.length===0&&i.bufferSubData(u,0,f),g.length!==0){for(let x=0,m=g.length;x<m;x++){let p=g[x];e?i.bufferSubData(u,p.start*f.BYTES_PER_ELEMENT,f,p.start,p.count):i.bufferSubData(u,p.start*f.BYTES_PER_ELEMENT,f.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}d.count!==-1&&(e?i.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):i.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=n.get(c);if(u===void 0)n.set(c,s(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:a,remove:o,update:l}}var kl=class i extends xe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,f=e/l,d=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let y=p*f-a;for(let v=0;v<c;v++){let w=v*u-r;g.push(w,-y,0),x.push(0,0,1),m.push(v/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){let v=y+c*p,w=y+c*(p+1),L=y+1+c*(p+1),T=y+1+c*p;d.push(v,w,T),d.push(w,L,T)}this.setIndex(d),this.setAttribute("position",new ae(g,3)),this.setAttribute("normal",new ae(x,3)),this.setAttribute("uv",new ae(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Np=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Fp=`#ifdef USE_ALPHAHASH
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
#endif`,Op=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,kp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hp=`#ifdef USE_AOMAP
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
#endif`,Vp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gp=`#ifdef USE_BATCHING
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
#endif`,Wp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Xp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Yp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Zp=`#ifdef USE_IRIDESCENCE
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
#endif`,Jp=`#ifdef USE_BUMPMAP
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
#endif`,$p=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Kp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,em=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,nm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,im=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,sm=`#define PI 3.141592653589793
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
} // validated`,rm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,am=`vec3 transformedNormal = objectNormal;
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
#endif`,om=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,um="gl_FragColor = linearToOutputTexel( gl_FragColor );",fm=`
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
}`,dm=`#ifdef USE_ENVMAP
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
#endif`,pm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,mm=`#ifdef USE_ENVMAP
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
#endif`,gm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xm=`#ifdef USE_ENVMAP
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
#endif`,_m=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ym=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Mm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bm=`#ifdef USE_GRADIENTMAP
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
}`,Sm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Em=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Tm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Am=`uniform bool receiveShadow;
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
#endif`,Rm=`#ifdef USE_ENVMAP
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
#endif`,Cm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Pm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Lm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Im=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Dm=`PhysicalMaterial material;
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
#endif`,Um=`struct PhysicalMaterial {
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
}`,Nm=`
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
#endif`,Fm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Om=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,km=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Hm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Vm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Wm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Xm=`#if defined( USE_POINTS_UV )
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
#endif`,qm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ym=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Jm=`#ifdef USE_MORPHNORMALS
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
#endif`,$m=`#ifdef USE_MORPHTARGETS
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
#endif`,Km=`#ifdef USE_MORPHTARGETS
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
#endif`,Qm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,jm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,t0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,e0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,n0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,i0=`#ifdef USE_NORMALMAP
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
#endif`,s0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,r0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,a0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,o0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,l0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,c0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,h0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,u0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,f0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,d0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,p0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,m0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,g0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,x0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,v0=`float getShadowMask() {
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
}`,y0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,M0=`#ifdef USE_SKINNING
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
#endif`,b0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,S0=`#ifdef USE_SKINNING
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
#endif`,E0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,w0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,T0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,A0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,R0=`#ifdef USE_TRANSMISSION
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
#endif`,C0=`#ifdef USE_TRANSMISSION
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
#endif`,P0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,L0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,I0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,D0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,U0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,N0=`uniform sampler2D t2D;
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
}`,F0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,O0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,z0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,B0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,k0=`#include <common>
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
}`,H0=`#if DEPTH_PACKING == 3200
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
}`,V0=`#define DISTANCE
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
}`,G0=`#define DISTANCE
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
}`,W0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,X0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q0=`uniform float scale;
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
}`,Y0=`uniform vec3 diffuse;
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
}`,Z0=`#include <common>
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
}`,J0=`uniform vec3 diffuse;
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
}`,$0=`#define LAMBERT
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
}`,K0=`#define LAMBERT
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
}`,Q0=`#define MATCAP
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
}`,j0=`#define MATCAP
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
}`,tg=`#define NORMAL
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
}`,eg=`#define NORMAL
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
}`,ng=`#define PHONG
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
}`,ig=`#define PHONG
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
}`,sg=`#define STANDARD
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
}`,rg=`#define STANDARD
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
}`,ag=`#define TOON
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
}`,og=`#define TOON
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
}`,lg=`uniform float size;
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
}`,cg=`uniform vec3 diffuse;
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
}`,hg=`#include <common>
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
}`,ug=`uniform vec3 color;
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
}`,fg=`uniform float rotation;
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
}`,dg=`uniform vec3 diffuse;
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
}`,se={alphahash_fragment:Np,alphahash_pars_fragment:Fp,alphamap_fragment:Op,alphamap_pars_fragment:zp,alphatest_fragment:Bp,alphatest_pars_fragment:kp,aomap_fragment:Hp,aomap_pars_fragment:Vp,batching_pars_vertex:Gp,batching_vertex:Wp,begin_vertex:Xp,beginnormal_vertex:qp,bsdfs:Yp,iridescence_fragment:Zp,bumpmap_pars_fragment:Jp,clipping_planes_fragment:$p,clipping_planes_pars_fragment:Kp,clipping_planes_pars_vertex:Qp,clipping_planes_vertex:jp,color_fragment:tm,color_pars_fragment:em,color_pars_vertex:nm,color_vertex:im,common:sm,cube_uv_reflection_fragment:rm,defaultnormal_vertex:am,displacementmap_pars_vertex:om,displacementmap_vertex:lm,emissivemap_fragment:cm,emissivemap_pars_fragment:hm,colorspace_fragment:um,colorspace_pars_fragment:fm,envmap_fragment:dm,envmap_common_pars_fragment:pm,envmap_pars_fragment:mm,envmap_pars_vertex:gm,envmap_physical_pars_fragment:Rm,envmap_vertex:xm,fog_vertex:_m,fog_pars_vertex:vm,fog_fragment:ym,fog_pars_fragment:Mm,gradientmap_pars_fragment:bm,lightmap_fragment:Sm,lightmap_pars_fragment:Em,lights_lambert_fragment:wm,lights_lambert_pars_fragment:Tm,lights_pars_begin:Am,lights_toon_fragment:Cm,lights_toon_pars_fragment:Pm,lights_phong_fragment:Lm,lights_phong_pars_fragment:Im,lights_physical_fragment:Dm,lights_physical_pars_fragment:Um,lights_fragment_begin:Nm,lights_fragment_maps:Fm,lights_fragment_end:Om,logdepthbuf_fragment:zm,logdepthbuf_pars_fragment:Bm,logdepthbuf_pars_vertex:km,logdepthbuf_vertex:Hm,map_fragment:Vm,map_pars_fragment:Gm,map_particle_fragment:Wm,map_particle_pars_fragment:Xm,metalnessmap_fragment:qm,metalnessmap_pars_fragment:Ym,morphcolor_vertex:Zm,morphnormal_vertex:Jm,morphtarget_pars_vertex:$m,morphtarget_vertex:Km,normal_fragment_begin:Qm,normal_fragment_maps:jm,normal_pars_fragment:t0,normal_pars_vertex:e0,normal_vertex:n0,normalmap_pars_fragment:i0,clearcoat_normal_fragment_begin:s0,clearcoat_normal_fragment_maps:r0,clearcoat_pars_fragment:a0,iridescence_pars_fragment:o0,opaque_fragment:l0,packing:c0,premultiplied_alpha_fragment:h0,project_vertex:u0,dithering_fragment:f0,dithering_pars_fragment:d0,roughnessmap_fragment:p0,roughnessmap_pars_fragment:m0,shadowmap_pars_fragment:g0,shadowmap_pars_vertex:x0,shadowmap_vertex:_0,shadowmask_pars_fragment:v0,skinbase_vertex:y0,skinning_pars_vertex:M0,skinning_vertex:b0,skinnormal_vertex:S0,specularmap_fragment:E0,specularmap_pars_fragment:w0,tonemapping_fragment:T0,tonemapping_pars_fragment:A0,transmission_fragment:R0,transmission_pars_fragment:C0,uv_pars_fragment:P0,uv_pars_vertex:L0,uv_vertex:I0,worldpos_vertex:D0,background_vert:U0,background_frag:N0,backgroundCube_vert:F0,backgroundCube_frag:O0,cube_vert:z0,cube_frag:B0,depth_vert:k0,depth_frag:H0,distanceRGBA_vert:V0,distanceRGBA_frag:G0,equirect_vert:W0,equirect_frag:X0,linedashed_vert:q0,linedashed_frag:Y0,meshbasic_vert:Z0,meshbasic_frag:J0,meshlambert_vert:$0,meshlambert_frag:K0,meshmatcap_vert:Q0,meshmatcap_frag:j0,meshnormal_vert:tg,meshnormal_frag:eg,meshphong_vert:ng,meshphong_frag:ig,meshphysical_vert:sg,meshphysical_frag:rg,meshtoon_vert:ag,meshtoon_frag:og,points_vert:lg,points_frag:cg,shadow_vert:hg,shadow_frag:ug,sprite_vert:fg,sprite_frag:dg},mt={common:{diffuse:{value:new It(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new re}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new re}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new re}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new re},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new re},normalScale:{value:new Mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new re},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new re}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new re}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new re}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new It(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new It(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0},uvTransform:{value:new re}},sprite:{diffuse:{value:new It(16777215)},opacity:{value:1},center:{value:new Mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}}},Jn={basic:{uniforms:vn([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:se.meshbasic_vert,fragmentShader:se.meshbasic_frag},lambert:{uniforms:vn([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new It(0)}}]),vertexShader:se.meshlambert_vert,fragmentShader:se.meshlambert_frag},phong:{uniforms:vn([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new It(0)},specular:{value:new It(1118481)},shininess:{value:30}}]),vertexShader:se.meshphong_vert,fragmentShader:se.meshphong_frag},standard:{uniforms:vn([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new It(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag},toon:{uniforms:vn([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new It(0)}}]),vertexShader:se.meshtoon_vert,fragmentShader:se.meshtoon_frag},matcap:{uniforms:vn([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:se.meshmatcap_vert,fragmentShader:se.meshmatcap_frag},points:{uniforms:vn([mt.points,mt.fog]),vertexShader:se.points_vert,fragmentShader:se.points_frag},dashed:{uniforms:vn([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:se.linedashed_vert,fragmentShader:se.linedashed_frag},depth:{uniforms:vn([mt.common,mt.displacementmap]),vertexShader:se.depth_vert,fragmentShader:se.depth_frag},normal:{uniforms:vn([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:se.meshnormal_vert,fragmentShader:se.meshnormal_frag},sprite:{uniforms:vn([mt.sprite,mt.fog]),vertexShader:se.sprite_vert,fragmentShader:se.sprite_frag},background:{uniforms:{uvTransform:{value:new re},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:se.background_vert,fragmentShader:se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:se.backgroundCube_vert,fragmentShader:se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:se.cube_vert,fragmentShader:se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:se.equirect_vert,fragmentShader:se.equirect_frag},distanceRGBA:{uniforms:vn([mt.common,mt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:se.distanceRGBA_vert,fragmentShader:se.distanceRGBA_frag},shadow:{uniforms:vn([mt.lights,mt.fog,{color:{value:new It(0)},opacity:{value:1}}]),vertexShader:se.shadow_vert,fragmentShader:se.shadow_frag}};Jn.physical={uniforms:vn([Jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new re},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new re},clearcoatNormalScale:{value:new Mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new re},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new re},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new re},sheen:{value:0},sheenColor:{value:new It(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new re},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new re},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new re},transmissionSamplerSize:{value:new Mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new re},attenuationDistance:{value:0},attenuationColor:{value:new It(0)},specularColor:{value:new It(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new re},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new re},anisotropyVector:{value:new Mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new re}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag};var Ta={r:0,b:0,g:0};function pg(i,t,e,n,s,r,a){let o=new It(0),l=r===!0?0:1,c,h,u=null,f=0,d=null;function g(m,p){let y=!1,v=p.isScene===!0?p.background:null;v&&v.isTexture&&(v=(p.backgroundBlurriness>0?e:t).get(v)),v===null?x(o,l):v&&v.isColor&&(x(v,1),y=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===xo)?(h===void 0&&(h=new le(new Un(1,1,1),new Ge({name:"BackgroundCubeMaterial",uniforms:tr(Jn.backgroundCube.uniforms),vertexShader:Jn.backgroundCube.vertexShader,fragmentShader:Jn.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,T,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=ve.getTransfer(v.colorSpace)!==Te,(u!==v||f!==v.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=v,f=v.version,d=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new le(new kl(2,2),new Ge({name:"BackgroundMaterial",uniforms:tr(Jn.background.uniforms),vertexShader:Jn.background.vertexShader,fragmentShader:Jn.background.fragmentShader,side:zi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=ve.getTransfer(v.colorSpace)!==Te,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=v,f=v.version,d=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function x(m,p){m.getRGB(Ta,tf(i)),n.buffers.color.setClear(Ta.r,Ta.g,Ta.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),l=p,x(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,x(o,l)},render:g}}function mg(i,t,e,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=m(null),c=l,h=!1;function u(O,X,Q,it,K){let nt=!1;if(a){let lt=x(it,Q,X);c!==lt&&(c=lt,d(c.object)),nt=p(O,it,Q,K),nt&&y(O,it,Q,K)}else{let lt=X.wireframe===!0;(c.geometry!==it.id||c.program!==Q.id||c.wireframe!==lt)&&(c.geometry=it.id,c.program=Q.id,c.wireframe=lt,nt=!0)}K!==null&&e.update(K,i.ELEMENT_ARRAY_BUFFER),(nt||h)&&(h=!1,k(O,X,Q,it),K!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function f(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function d(O){return n.isWebGL2?i.bindVertexArray(O):r.bindVertexArrayOES(O)}function g(O){return n.isWebGL2?i.deleteVertexArray(O):r.deleteVertexArrayOES(O)}function x(O,X,Q){let it=Q.wireframe===!0,K=o[O.id];K===void 0&&(K={},o[O.id]=K);let nt=K[X.id];nt===void 0&&(nt={},K[X.id]=nt);let lt=nt[it];return lt===void 0&&(lt=m(f()),nt[it]=lt),lt}function m(O){let X=[],Q=[],it=[];for(let K=0;K<s;K++)X[K]=0,Q[K]=0,it[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:Q,attributeDivisors:it,object:O,attributes:{},index:null}}function p(O,X,Q,it){let K=c.attributes,nt=X.attributes,lt=0,ut=Q.getAttributes();for(let Et in ut)if(ut[Et].location>=0){let st=K[Et],bt=nt[Et];if(bt===void 0&&(Et==="instanceMatrix"&&O.instanceMatrix&&(bt=O.instanceMatrix),Et==="instanceColor"&&O.instanceColor&&(bt=O.instanceColor)),st===void 0||st.attribute!==bt||bt&&st.data!==bt.data)return!0;lt++}return c.attributesNum!==lt||c.index!==it}function y(O,X,Q,it){let K={},nt=X.attributes,lt=0,ut=Q.getAttributes();for(let Et in ut)if(ut[Et].location>=0){let st=nt[Et];st===void 0&&(Et==="instanceMatrix"&&O.instanceMatrix&&(st=O.instanceMatrix),Et==="instanceColor"&&O.instanceColor&&(st=O.instanceColor));let bt={};bt.attribute=st,st&&st.data&&(bt.data=st.data),K[Et]=bt,lt++}c.attributes=K,c.attributesNum=lt,c.index=it}function v(){let O=c.newAttributes;for(let X=0,Q=O.length;X<Q;X++)O[X]=0}function w(O){L(O,0)}function L(O,X){let Q=c.newAttributes,it=c.enabledAttributes,K=c.attributeDivisors;Q[O]=1,it[O]===0&&(i.enableVertexAttribArray(O),it[O]=1),K[O]!==X&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,X),K[O]=X)}function T(){let O=c.newAttributes,X=c.enabledAttributes;for(let Q=0,it=X.length;Q<it;Q++)X[Q]!==O[Q]&&(i.disableVertexAttribArray(Q),X[Q]=0)}function I(O,X,Q,it,K,nt,lt){lt===!0?i.vertexAttribIPointer(O,X,Q,K,nt):i.vertexAttribPointer(O,X,Q,it,K,nt)}function k(O,X,Q,it){if(n.isWebGL2===!1&&(O.isInstancedMesh||it.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;v();let K=it.attributes,nt=Q.getAttributes(),lt=X.defaultAttributeValues;for(let ut in nt){let Et=nt[ut];if(Et.location>=0){let $=K[ut];if($===void 0&&(ut==="instanceMatrix"&&O.instanceMatrix&&($=O.instanceMatrix),ut==="instanceColor"&&O.instanceColor&&($=O.instanceColor)),$!==void 0){let st=$.normalized,bt=$.itemSize,Tt=e.get($);if(Tt===void 0)continue;let Pt=Tt.buffer,$t=Tt.type,jt=Tt.bytesPerElement,kt=n.isWebGL2===!0&&($t===i.INT||$t===i.UNSIGNED_INT||$.gpuType===Vu);if($.isInterleavedBufferAttribute){let ce=$.data,q=ce.stride,$e=$.offset;if(ce.isInstancedInterleavedBuffer){for(let zt=0;zt<Et.locationSize;zt++)L(Et.location+zt,ce.meshPerAttribute);O.isInstancedMesh!==!0&&it._maxInstanceCount===void 0&&(it._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let zt=0;zt<Et.locationSize;zt++)w(Et.location+zt);i.bindBuffer(i.ARRAY_BUFFER,Pt);for(let zt=0;zt<Et.locationSize;zt++)I(Et.location+zt,bt/Et.locationSize,$t,st,q*jt,($e+bt/Et.locationSize*zt)*jt,kt)}else{if($.isInstancedBufferAttribute){for(let ce=0;ce<Et.locationSize;ce++)L(Et.location+ce,$.meshPerAttribute);O.isInstancedMesh!==!0&&it._maxInstanceCount===void 0&&(it._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let ce=0;ce<Et.locationSize;ce++)w(Et.location+ce);i.bindBuffer(i.ARRAY_BUFFER,Pt);for(let ce=0;ce<Et.locationSize;ce++)I(Et.location+ce,bt/Et.locationSize,$t,st,bt*jt,bt/Et.locationSize*ce*jt,kt)}}else if(lt!==void 0){let st=lt[ut];if(st!==void 0)switch(st.length){case 2:i.vertexAttrib2fv(Et.location,st);break;case 3:i.vertexAttrib3fv(Et.location,st);break;case 4:i.vertexAttrib4fv(Et.location,st);break;default:i.vertexAttrib1fv(Et.location,st)}}}}T()}function S(){J();for(let O in o){let X=o[O];for(let Q in X){let it=X[Q];for(let K in it)g(it[K].object),delete it[K];delete X[Q]}delete o[O]}}function A(O){if(o[O.id]===void 0)return;let X=o[O.id];for(let Q in X){let it=X[Q];for(let K in it)g(it[K].object),delete it[K];delete X[Q]}delete o[O.id]}function V(O){for(let X in o){let Q=o[X];if(Q[O.id]===void 0)continue;let it=Q[O.id];for(let K in it)g(it[K].object),delete it[K];delete Q[O.id]}}function J(){ft(),h=!0,c!==l&&(c=l,d(c.object))}function ft(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:J,resetDefaultState:ft,dispose:S,releaseStatesOfGeometry:A,releaseStatesOfProgram:V,initAttributes:v,enableAttribute:w,disableUnusedAttributes:T}}function gg(i,t,e,n){let s=n.isWebGL2,r;function a(h){r=h}function o(h,u){i.drawArrays(r,h,u),e.update(u,r,1)}function l(h,u,f){if(f===0)return;let d,g;if(s)d=i,g="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[g](r,h,u,f),e.update(u,r,f)}function c(h,u,f){if(f===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<f;g++)this.render(h[g],u[g]);else{d.multiDrawArraysWEBGL(r,h,0,u,0,f);let g=0;for(let x=0;x<f;x++)g+=u[x];e.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function xg(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let I=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext!="undefined"&&i.constructor.name==="WebGL2RenderingContext",o=e.precision!==void 0?e.precision:"highp",l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let c=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,w=a||t.has("OES_texture_float"),L=v&&w,T=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:y,vertexTextures:v,floatFragmentTextures:w,floatVertexTextures:L,maxSamples:T}}function _g(i){let t=this,e=null,n=0,s=!1,r=!1,a=new ui,o=new re,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let y=r?0:n,v=y*4,w=p.clippingState||null;l.value=w,w=h(g,f,v,d);for(let L=0;L!==v;++L)w[L]=e[L];p.clippingState=w,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=d+x*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,w=d;v!==x;++v,w+=4)a.copy(u[v]).applyMatrix4(y,o),a.normal.toArray(m,w),m[w+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function vg(i){let t=new WeakMap;function e(a,o){return o===Pl?a.mapping=$s:o===Ll&&(a.mapping=Ks),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Pl||o===Ll)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Bl(l.height/2);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var er=class extends Qa{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Xs=4,hu=[.125,.215,.35,.446,.526,.582],ji=20,_l=new er,uu=new It,vl=null,yl=0,Ml=0,Ki=(1+Math.sqrt(5))/2,Bs=1/Ki,fu=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,Ki,Bs),new U(0,Ki,-Bs),new U(Bs,0,Ki),new U(-Bs,0,Ki),new U(Ki,Bs,0),new U(-Ki,Bs,0)],to=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){vl=this._renderer.getRenderTarget(),yl=this._renderer.getActiveCubeFace(),Ml=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(vl,yl,Ml),t.scissorTest=!1,Aa(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===$s||t.mapping===Ks?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),vl=this._renderer.getRenderTarget(),yl=this._renderer.getActiveCubeFace(),Ml=this._renderer.getActiveMipmapLevel();let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:yn,minFilter:yn,generateMipmaps:!1,type:rs,format:Vn,colorSpace:pi,depthBuffer:!1},s=du(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=du(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=yg(r)),this._blurMaterial=Mg(r,t,e)}return s}_compileMaterial(t){let e=new le(this._lodPlanes[0],t);this._renderer.compile(e,_l)}_sceneToCubeUV(t,e,n,s){let o=new rn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(uu),h.toneMapping=Fi,h.autoClear=!1;let d=new an({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1}),g=new le(new Un,d),x=!1,m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,x=!0):(d.color.copy(uu),x=!0);for(let p=0;p<6;p++){let y=p%3;y===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):y===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));let v=this._cubeSize;Aa(s,y*v,p>2?v:0,v,v),h.setRenderTarget(s),x&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===$s||t.mapping===Ks;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=mu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pu());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new le(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Aa(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,_l)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=fu[(s-1)%fu.length];this._blur(t,s-1,s,r,a)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new le(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*ji-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):ji;m>ji&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ji}`);let p=[],y=0;for(let I=0;I<ji;++I){let k=I/x,S=Math.exp(-k*k/2);p.push(S),I===0?y+=S:I<m&&(y+=2*S)}for(let I=0;I<p.length;I++)p[I]=p[I]/y;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-n;let w=this._sizeLods[s],L=3*w*(s>v-Xs?s-v+Xs:0),T=4*(this._cubeSize-w);Aa(e,L,T,3*w,2*w),l.setRenderTarget(e),l.render(u,_l)}};function yg(i){let t=[],e=[],n=[],s=i,r=i-Xs+1+hu.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Xs?l=hu[a-i+Xs-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,x=3,m=2,p=1,y=new Float32Array(x*g*d),v=new Float32Array(m*g*d),w=new Float32Array(p*g*d);for(let T=0;T<d;T++){let I=T%3*2/3-1,k=T>2?0:-1,S=[I,k,0,I+2/3,k,0,I+2/3,k+1,0,I,k,0,I+2/3,k+1,0,I,k+1,0];y.set(S,x*g*T),v.set(f,m*g*T);let A=[T,T,T,T,T,T];w.set(A,p*g*T)}let L=new xe;L.setAttribute("position",new fe(y,x)),L.setAttribute("uv",new fe(v,m)),L.setAttribute("faceIndex",new fe(w,p)),t.push(L),s>Xs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function du(i,t,e){let n=new In(i,t,e);return n.texture.mapping=xo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Aa(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Mg(i,t,e){let n=new Float32Array(ji),s=new U(0,1,0);return new Ge({name:"SphericalGaussianBlur",defines:{n:ji,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Tc(),fragmentShader:`

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
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function pu(){return new Ge({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Tc(),fragmentShader:`

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
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function mu(){return new Ge({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Tc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function Tc(){return`

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
	`}function bg(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===Pl||l===Ll,h=l===$s||l===Ks;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=t.get(o);return e===null&&(e=new to(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),t.set(o,u),u.texture}else{if(t.has(o))return t.get(o).texture;{let u=o.image;if(c&&u&&u.height>0||h&&u&&s(u)){e===null&&(e=new to(i));let f=c?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,f),o.addEventListener("dispose",r),f.texture}else return null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Sg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){let s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Eg(i,t,e,n){let s={},r=new WeakMap;function a(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);for(let g in f.morphAttributes){let x=f.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)t.remove(x[m])}f.removeEventListener("dispose",a),delete s[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let g in f)t.update(f[g],i.ARRAY_BUFFER);let d=u.morphAttributes;for(let g in d){let x=d[g];for(let m=0,p=x.length;m<p;m++)t.update(x[m],i.ARRAY_BUFFER)}}function c(u){let f=[],d=u.index,g=u.attributes.position,x=0;if(d!==null){let y=d.array;x=d.version;for(let v=0,w=y.length;v<w;v+=3){let L=y[v+0],T=y[v+1],I=y[v+2];f.push(L,T,T,I,I,L)}}else if(g!==void 0){let y=g.array;x=g.version;for(let v=0,w=y.length/3-1;v<w;v+=3){let L=v+0,T=v+1,I=v+2;f.push(L,T,T,I,I,L)}}else return;let m=new(Qu(f)?Ka:$a)(f,1);m.version=x;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function wg(i,t,e,n){let s=n.isWebGL2,r;function a(d){r=d}let o,l;function c(d){o=d.type,l=d.bytesPerElement}function h(d,g){i.drawElements(r,g,o,d*l),e.update(g,r,1)}function u(d,g,x){if(x===0)return;let m,p;if(s)m=i,p="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,g,o,d*l,x),e.update(g,r,x)}function f(d,g,x){if(x===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<x;p++)this.render(d[p]/l,g[p]);else{m.multiDrawElementsWEBGL(r,g,0,o,d,0,x);let p=0;for(let y=0;y<x;y++)p+=g[y];e.update(p,r,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function Tg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Ag(i,t){return i[0]-t[0]}function Rg(i,t){return Math.abs(t[1])-Math.abs(i[1])}function Cg(i,t,e){let n={},s=new Float32Array(8),r=new WeakMap,a=new je,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,u){let f=c.morphTargetInfluences;if(t.isWebGL2===!0){let d=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=d!==void 0?d.length:0,x=r.get(h);if(x===void 0||x.count!==g){let O=function(){J.dispose(),r.delete(h),h.removeEventListener("dispose",O)};x!==void 0&&x.texture.dispose();let y=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,w=h.morphAttributes.color!==void 0,L=h.morphAttributes.position||[],T=h.morphAttributes.normal||[],I=h.morphAttributes.color||[],k=0;y===!0&&(k=1),v===!0&&(k=2),w===!0&&(k=3);let S=h.attributes.position.count*k,A=1;S>t.maxTextureSize&&(A=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);let V=new Float32Array(S*A*4*g),J=new Ya(V,S,A,g);J.type=Ui,J.needsUpdate=!0;let ft=k*4;for(let X=0;X<g;X++){let Q=L[X],it=T[X],K=I[X],nt=S*A*4*X;for(let lt=0;lt<Q.count;lt++){let ut=lt*ft;y===!0&&(a.fromBufferAttribute(Q,lt),V[nt+ut+0]=a.x,V[nt+ut+1]=a.y,V[nt+ut+2]=a.z,V[nt+ut+3]=0),v===!0&&(a.fromBufferAttribute(it,lt),V[nt+ut+4]=a.x,V[nt+ut+5]=a.y,V[nt+ut+6]=a.z,V[nt+ut+7]=0),w===!0&&(a.fromBufferAttribute(K,lt),V[nt+ut+8]=a.x,V[nt+ut+9]=a.y,V[nt+ut+10]=a.z,V[nt+ut+11]=K.itemSize===4?a.w:1)}}x={count:g,texture:J,size:new Mt(S,A)},r.set(h,x),h.addEventListener("dispose",O)}let m=0;for(let y=0;y<f.length;y++)m+=f[y];let p=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(i,"morphTargetBaseInfluence",p),u.getUniforms().setValue(i,"morphTargetInfluences",f),u.getUniforms().setValue(i,"morphTargetsTexture",x.texture,e),u.getUniforms().setValue(i,"morphTargetsTextureSize",x.size)}else{let d=f===void 0?0:f.length,g=n[h.id];if(g===void 0||g.length!==d){g=[];for(let v=0;v<d;v++)g[v]=[v,0];n[h.id]=g}for(let v=0;v<d;v++){let w=g[v];w[0]=v,w[1]=f[v]}g.sort(Rg);for(let v=0;v<8;v++)v<d&&g[v][1]?(o[v][0]=g[v][0],o[v][1]=g[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(Ag);let x=h.morphAttributes.position,m=h.morphAttributes.normal,p=0;for(let v=0;v<8;v++){let w=o[v],L=w[0],T=w[1];L!==Number.MAX_SAFE_INTEGER&&T?(x&&h.getAttribute("morphTarget"+v)!==x[L]&&h.setAttribute("morphTarget"+v,x[L]),m&&h.getAttribute("morphNormal"+v)!==m[L]&&h.setAttribute("morphNormal"+v,m[L]),s[v]=T,p+=T):(x&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),m&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),s[v]=0)}let y=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(i,"morphTargetBaseInfluence",y),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function Pg(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var eo=class extends Ln{constructor(t,e,n,s,r,a,o,l,c,h){if(h=h!==void 0?h:ns,h!==ns&&h!==Qs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ns&&(n=Di),n===void 0&&h===Qs&&(n=es),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:nn,this.minFilter=l!==void 0?l:nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},nf=new Ln,sf=new eo(1,1);sf.compareFunction=Ku;var rf=new Ya,af=new Ol,of=new ja,gu=[],xu=[],_u=new Float32Array(16),vu=new Float32Array(9),yu=new Float32Array(4);function or(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=gu[s];if(r===void 0&&(r=new Float32Array(s),gu[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function qe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ye(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function vo(i,t){let e=xu[t];e===void 0&&(e=new Int32Array(t),xu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Lg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Ig(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;i.uniform2fv(this.addr,t),Ye(e,t)}}function Dg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(qe(e,t))return;i.uniform3fv(this.addr,t),Ye(e,t)}}function Ug(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;i.uniform4fv(this.addr,t),Ye(e,t)}}function Ng(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,n))return;yu.set(n),i.uniformMatrix2fv(this.addr,!1,yu),Ye(e,n)}}function Fg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,n))return;vu.set(n),i.uniformMatrix3fv(this.addr,!1,vu),Ye(e,n)}}function Og(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,n))return;_u.set(n),i.uniformMatrix4fv(this.addr,!1,_u),Ye(e,n)}}function zg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Bg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;i.uniform2iv(this.addr,t),Ye(e,t)}}function kg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;i.uniform3iv(this.addr,t),Ye(e,t)}}function Hg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;i.uniform4iv(this.addr,t),Ye(e,t)}}function Vg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Gg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;i.uniform2uiv(this.addr,t),Ye(e,t)}}function Wg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;i.uniform3uiv(this.addr,t),Ye(e,t)}}function Xg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;i.uniform4uiv(this.addr,t),Ye(e,t)}}function qg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?sf:nf;e.setTexture2D(t||r,s)}function Yg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||af,s)}function Zg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||of,s)}function Jg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||rf,s)}function $g(i){switch(i){case 5126:return Lg;case 35664:return Ig;case 35665:return Dg;case 35666:return Ug;case 35674:return Ng;case 35675:return Fg;case 35676:return Og;case 5124:case 35670:return zg;case 35667:case 35671:return Bg;case 35668:case 35672:return kg;case 35669:case 35673:return Hg;case 5125:return Vg;case 36294:return Gg;case 36295:return Wg;case 36296:return Xg;case 35678:case 36198:case 36298:case 36306:case 35682:return qg;case 35679:case 36299:case 36307:return Yg;case 35680:case 36300:case 36308:case 36293:return Zg;case 36289:case 36303:case 36311:case 36292:return Jg}}function Kg(i,t){i.uniform1fv(this.addr,t)}function Qg(i,t){let e=or(t,this.size,2);i.uniform2fv(this.addr,e)}function jg(i,t){let e=or(t,this.size,3);i.uniform3fv(this.addr,e)}function tx(i,t){let e=or(t,this.size,4);i.uniform4fv(this.addr,e)}function ex(i,t){let e=or(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function nx(i,t){let e=or(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function ix(i,t){let e=or(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function sx(i,t){i.uniform1iv(this.addr,t)}function rx(i,t){i.uniform2iv(this.addr,t)}function ax(i,t){i.uniform3iv(this.addr,t)}function ox(i,t){i.uniform4iv(this.addr,t)}function lx(i,t){i.uniform1uiv(this.addr,t)}function cx(i,t){i.uniform2uiv(this.addr,t)}function hx(i,t){i.uniform3uiv(this.addr,t)}function ux(i,t){i.uniform4uiv(this.addr,t)}function fx(i,t,e){let n=this.cache,s=t.length,r=vo(e,s);qe(n,r)||(i.uniform1iv(this.addr,r),Ye(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||nf,r[a])}function dx(i,t,e){let n=this.cache,s=t.length,r=vo(e,s);qe(n,r)||(i.uniform1iv(this.addr,r),Ye(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||af,r[a])}function px(i,t,e){let n=this.cache,s=t.length,r=vo(e,s);qe(n,r)||(i.uniform1iv(this.addr,r),Ye(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||of,r[a])}function mx(i,t,e){let n=this.cache,s=t.length,r=vo(e,s);qe(n,r)||(i.uniform1iv(this.addr,r),Ye(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||rf,r[a])}function gx(i){switch(i){case 5126:return Kg;case 35664:return Qg;case 35665:return jg;case 35666:return tx;case 35674:return ex;case 35675:return nx;case 35676:return ix;case 5124:case 35670:return sx;case 35667:case 35671:return rx;case 35668:case 35672:return ax;case 35669:case 35673:return ox;case 5125:return lx;case 36294:return cx;case 36295:return hx;case 36296:return ux;case 35678:case 36198:case 36298:case 36306:case 35682:return fx;case 35679:case 36299:case 36307:return dx;case 35680:case 36300:case 36308:case 36293:return px;case 36289:case 36303:case 36311:case 36292:return mx}}var Hl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=$g(e.type)}},Vl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=gx(e.type)}},Gl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},bl=/(\w+)(\])?(\[|\.)?/g;function Mu(i,t){i.seq.push(t),i.map[t.id]=t}function xx(i,t,e){let n=i.name,s=n.length;for(bl.lastIndex=0;;){let r=bl.exec(n),a=bl.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Mu(e,c===void 0?new Hl(o,i,t):new Vl(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new Gl(o),Mu(e,u)),e=u}}}var Js=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);xx(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function bu(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var _x=37297,vx=0;function yx(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function Mx(i){let t=ve.getPrimaries(ve.workingColorSpace),e=ve.getPrimaries(i),n;switch(t===e?n="":t===Ha&&e===ka?n="LinearDisplayP3ToLinearSRGB":t===ka&&e===Ha&&(n="LinearSRGBToLinearDisplayP3"),i){case pi:case _o:return[n,"LinearTransferOETF"];case Ne:case wc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Su(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+yx(i.getShaderSource(t),a)}else return s}function bx(i,t){let e=Mx(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Sx(i,t){let e;switch(t){case Hd:e="Linear";break;case Vd:e="Reinhard";break;case Gd:e="OptimizedCineon";break;case Wd:e="ACESFilmic";break;case qd:e="AgX";break;case Xd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Ex(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(qs).join(`
`)}function wx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(qs).join(`
`)}function Tx(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Ax(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function qs(i){return i!==""}function Eu(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function wu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Rx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wl(i){return i.replace(Rx,Px)}var Cx=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Px(i,t){let e=se[t];if(e===void 0){let n=Cx.get(t);if(n!==void 0)e=se[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Wl(e)}var Lx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tu(i){return i.replace(Lx,Ix)}function Ix(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Au(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Dx(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ku?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===bc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===hi&&(t="SHADOWMAP_TYPE_VSM"),t}function Ux(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case $s:case Ks:t="ENVMAP_TYPE_CUBE";break;case xo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Nx(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ks:t="ENVMAP_MODE_REFRACTION";break}return t}function Fx(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Sc:t="ENVMAP_BLENDING_MULTIPLY";break;case Bd:t="ENVMAP_BLENDING_MIX";break;case kd:t="ENVMAP_BLENDING_ADD";break}return t}function Ox(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function zx(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Dx(e),c=Ux(e),h=Nx(e),u=Fx(e),f=Ox(e),d=e.isWebGL2?"":Ex(e),g=wx(e),x=Tx(r),m=s.createProgram(),p,y,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(qs).join(`
`),p.length>0&&(p+=`
`),y=[d,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(qs).join(`
`),y.length>0&&(y+=`
`)):(p=[Au(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qs).join(`
`),y=[d,Au(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Fi?"#define TONE_MAPPING":"",e.toneMapping!==Fi?se.tonemapping_pars_fragment:"",e.toneMapping!==Fi?Sx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",se.colorspace_pars_fragment,bx("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(qs).join(`
`)),a=Wl(a),a=Eu(a,e),a=wu(a,e),o=Wl(o),o=Eu(o,e),o=wu(o,e),a=Tu(a),o=Tu(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,y=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===qh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===qh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);let w=v+p+a,L=v+y+o,T=bu(s,s.VERTEX_SHADER,w),I=bu(s,s.FRAGMENT_SHADER,L);s.attachShader(m,T),s.attachShader(m,I),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function k(J){if(i.debug.checkShaderErrors){let ft=s.getProgramInfoLog(m).trim(),O=s.getShaderInfoLog(T).trim(),X=s.getShaderInfoLog(I).trim(),Q=!0,it=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(Q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,T,I);else{let K=Su(s,T,"vertex"),nt=Su(s,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+ft+`
`+K+`
`+nt)}else ft!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ft):(O===""||X==="")&&(it=!1);it&&(J.diagnostics={runnable:Q,programLog:ft,vertexShader:{log:O,prefix:p},fragmentShader:{log:X,prefix:y}})}s.deleteShader(T),s.deleteShader(I),S=new Js(s,m),A=Ax(s,m)}let S;this.getUniforms=function(){return S===void 0&&k(this),S};let A;this.getAttributes=function(){return A===void 0&&k(this),A};let V=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=s.getProgramParameter(m,_x)),V},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=vx++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=T,this.fragmentShader=I,this}var Bx=0,Xl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new ql(t),e.set(t,n)),n}},ql=class{constructor(t){this.id=Bx++,this.code=t,this.usedTimes=0}};function kx(i,t,e,n,s,r,a){let o=new Ja,l=new Xl,c=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,f=s.vertexTextures,d=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return S===0?"uv":`uv${S}`}function m(S,A,V,J,ft){let O=J.fog,X=ft.geometry,Q=S.isMeshStandardMaterial?J.environment:null,it=(S.isMeshStandardMaterial?e:t).get(S.envMap||Q),K=it&&it.mapping===xo?it.image.height:null,nt=g[S.type];S.precision!==null&&(d=s.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));let lt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ut=lt!==void 0?lt.length:0,Et=0;X.morphAttributes.position!==void 0&&(Et=1),X.morphAttributes.normal!==void 0&&(Et=2),X.morphAttributes.color!==void 0&&(Et=3);let $,st,bt,Tt;if(nt){let tn=Jn[nt];$=tn.vertexShader,st=tn.fragmentShader}else $=S.vertexShader,st=S.fragmentShader,l.update(S),bt=l.getVertexShaderID(S),Tt=l.getFragmentShaderID(S);let Pt=i.getRenderTarget(),$t=ft.isInstancedMesh===!0,jt=ft.isBatchedMesh===!0,kt=!!S.map,ce=!!S.matcap,q=!!it,$e=!!S.aoMap,zt=!!S.lightMap,Zt=!!S.bumpMap,Rt=!!S.normalMap,Se=!!S.displacementMap,te=!!S.emissiveMap,R=!!S.metalnessMap,b=!!S.roughnessMap,G=S.anisotropy>0,ct=S.clearcoat>0,at=S.iridescence>0,ht=S.sheen>0,Ct=S.transmission>0,vt=G&&!!S.anisotropyMap,St=ct&&!!S.clearcoatMap,Dt=ct&&!!S.clearcoatNormalMap,Kt=ct&&!!S.clearcoatRoughnessMap,rt=at&&!!S.iridescenceMap,de=at&&!!S.iridescenceThicknessMap,oe=ht&&!!S.sheenColorMap,qt=ht&&!!S.sheenRoughnessMap,Ut=!!S.specularMap,wt=!!S.specularColorMap,ee=!!S.specularIntensityMap,Ht=Ct&&!!S.transmissionMap,Ee=Ct&&!!S.thicknessMap,Qt=!!S.gradientMap,pt=!!S.alphaMap,N=S.alphaTest>0,xt=!!S.alphaHash,_t=!!S.extensions,Bt=!!X.attributes.uv1,Ft=!!X.attributes.uv2,pe=!!X.attributes.uv3,me=Fi;return S.toneMapped&&(Pt===null||Pt.isXRRenderTarget===!0)&&(me=i.toneMapping),{isWebGL2:h,shaderID:nt,shaderType:S.type,shaderName:S.name,vertexShader:$,fragmentShader:st,defines:S.defines,customVertexShaderID:bt,customFragmentShaderID:Tt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:jt,instancing:$t,instancingColor:$t&&ft.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:Pt===null?i.outputColorSpace:Pt.isXRRenderTarget===!0?Pt.texture.colorSpace:pi,map:kt,matcap:ce,envMap:q,envMapMode:q&&it.mapping,envMapCubeUVHeight:K,aoMap:$e,lightMap:zt,bumpMap:Zt,normalMap:Rt,displacementMap:f&&Se,emissiveMap:te,normalMapObjectSpace:Rt&&S.normalMapType===sp,normalMapTangentSpace:Rt&&S.normalMapType===$u,metalnessMap:R,roughnessMap:b,anisotropy:G,anisotropyMap:vt,clearcoat:ct,clearcoatMap:St,clearcoatNormalMap:Dt,clearcoatRoughnessMap:Kt,iridescence:at,iridescenceMap:rt,iridescenceThicknessMap:de,sheen:ht,sheenColorMap:oe,sheenRoughnessMap:qt,specularMap:Ut,specularColorMap:wt,specularIntensityMap:ee,transmission:Ct,transmissionMap:Ht,thicknessMap:Ee,gradientMap:Qt,opaque:S.transparent===!1&&S.blending===Ys,alphaMap:pt,alphaTest:N,alphaHash:xt,combine:S.combine,mapUv:kt&&x(S.map.channel),aoMapUv:$e&&x(S.aoMap.channel),lightMapUv:zt&&x(S.lightMap.channel),bumpMapUv:Zt&&x(S.bumpMap.channel),normalMapUv:Rt&&x(S.normalMap.channel),displacementMapUv:Se&&x(S.displacementMap.channel),emissiveMapUv:te&&x(S.emissiveMap.channel),metalnessMapUv:R&&x(S.metalnessMap.channel),roughnessMapUv:b&&x(S.roughnessMap.channel),anisotropyMapUv:vt&&x(S.anisotropyMap.channel),clearcoatMapUv:St&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:Dt&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Kt&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:rt&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:de&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:oe&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:qt&&x(S.sheenRoughnessMap.channel),specularMapUv:Ut&&x(S.specularMap.channel),specularColorMapUv:wt&&x(S.specularColorMap.channel),specularIntensityMapUv:ee&&x(S.specularIntensityMap.channel),transmissionMapUv:Ht&&x(S.transmissionMap.channel),thicknessMapUv:Ee&&x(S.thicknessMap.channel),alphaMapUv:pt&&x(S.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Rt||G),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,vertexUv1s:Bt,vertexUv2s:Ft,vertexUv3s:pe,pointsUvs:ft.isPoints===!0&&!!X.attributes.uv&&(kt||pt),fog:!!O,useFog:S.fog===!0,fogExp2:O&&O.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:ft.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:ut,morphTextureStride:Et,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&V.length>0,shadowMapType:i.shadowMap.type,toneMapping:me,useLegacyLights:i._useLegacyLights,decodeVideoTexture:kt&&S.map.isVideoTexture===!0&&ve.getTransfer(S.map.colorSpace)===Te,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Mn,flipSided:S.side===un,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:_t&&S.extensions.derivatives===!0,extensionFragDepth:_t&&S.extensions.fragDepth===!0,extensionDrawBuffers:_t&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:_t&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:_t&&S.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function p(S){let A=[];if(S.shaderID?A.push(S.shaderID):(A.push(S.customVertexShaderID),A.push(S.customFragmentShaderID)),S.defines!==void 0)for(let V in S.defines)A.push(V),A.push(S.defines[V]);return S.isRawShaderMaterial===!1&&(y(A,S),v(A,S),A.push(i.outputColorSpace)),A.push(S.customProgramCacheKey),A.join()}function y(S,A){S.push(A.precision),S.push(A.outputColorSpace),S.push(A.envMapMode),S.push(A.envMapCubeUVHeight),S.push(A.mapUv),S.push(A.alphaMapUv),S.push(A.lightMapUv),S.push(A.aoMapUv),S.push(A.bumpMapUv),S.push(A.normalMapUv),S.push(A.displacementMapUv),S.push(A.emissiveMapUv),S.push(A.metalnessMapUv),S.push(A.roughnessMapUv),S.push(A.anisotropyMapUv),S.push(A.clearcoatMapUv),S.push(A.clearcoatNormalMapUv),S.push(A.clearcoatRoughnessMapUv),S.push(A.iridescenceMapUv),S.push(A.iridescenceThicknessMapUv),S.push(A.sheenColorMapUv),S.push(A.sheenRoughnessMapUv),S.push(A.specularMapUv),S.push(A.specularColorMapUv),S.push(A.specularIntensityMapUv),S.push(A.transmissionMapUv),S.push(A.thicknessMapUv),S.push(A.combine),S.push(A.fogExp2),S.push(A.sizeAttenuation),S.push(A.morphTargetsCount),S.push(A.morphAttributeCount),S.push(A.numDirLights),S.push(A.numPointLights),S.push(A.numSpotLights),S.push(A.numSpotLightMaps),S.push(A.numHemiLights),S.push(A.numRectAreaLights),S.push(A.numDirLightShadows),S.push(A.numPointLightShadows),S.push(A.numSpotLightShadows),S.push(A.numSpotLightShadowsWithMaps),S.push(A.numLightProbes),S.push(A.shadowMapType),S.push(A.toneMapping),S.push(A.numClippingPlanes),S.push(A.numClipIntersection),S.push(A.depthPacking)}function v(S,A){o.disableAll(),A.isWebGL2&&o.enable(0),A.supportsVertexTextures&&o.enable(1),A.instancing&&o.enable(2),A.instancingColor&&o.enable(3),A.matcap&&o.enable(4),A.envMap&&o.enable(5),A.normalMapObjectSpace&&o.enable(6),A.normalMapTangentSpace&&o.enable(7),A.clearcoat&&o.enable(8),A.iridescence&&o.enable(9),A.alphaTest&&o.enable(10),A.vertexColors&&o.enable(11),A.vertexAlphas&&o.enable(12),A.vertexUv1s&&o.enable(13),A.vertexUv2s&&o.enable(14),A.vertexUv3s&&o.enable(15),A.vertexTangents&&o.enable(16),A.anisotropy&&o.enable(17),A.alphaHash&&o.enable(18),A.batching&&o.enable(19),S.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.skinning&&o.enable(4),A.morphTargets&&o.enable(5),A.morphNormals&&o.enable(6),A.morphColors&&o.enable(7),A.premultipliedAlpha&&o.enable(8),A.shadowMapEnabled&&o.enable(9),A.useLegacyLights&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),S.push(o.mask)}function w(S){let A=g[S.type],V;if(A){let J=Jn[A];V=Cp.clone(J.uniforms)}else V=S.uniforms;return V}function L(S,A){let V;for(let J=0,ft=c.length;J<ft;J++){let O=c[J];if(O.cacheKey===A){V=O,++V.usedTimes;break}}return V===void 0&&(V=new zx(i,A,S,r),c.push(V)),V}function T(S){if(--S.usedTimes===0){let A=c.indexOf(S);c[A]=c[c.length-1],c.pop(),S.destroy()}}function I(S){l.remove(S)}function k(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:w,acquireProgram:L,releaseProgram:T,releaseShaderCache:I,programs:c,dispose:k}}function Hx(){let i=new WeakMap;function t(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function e(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function Vx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Ru(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Cu(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,f,d,g,x,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),t++,p}function o(u,f,d,g,x,m){let p=a(u,f,d,g,x,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):e.push(p)}function l(u,f,d,g,x,m){let p=a(u,f,d,g,x,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,f){e.length>1&&e.sort(u||Vx),n.length>1&&n.sort(f||Ru),s.length>1&&s.sort(f||Ru)}function h(){for(let u=t,f=i.length;u<f;u++){let d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function Gx(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Cu,i.set(n,[a])):s>=r.length?(a=new Cu,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Wx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new It};break;case"SpotLight":e={position:new U,direction:new U,color:new It,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new It,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new It,groundColor:new It};break;case"RectAreaLight":e={color:new It,position:new U,halfWidth:new U,halfHeight:new U};break}return i[t.id]=e,e}}}function Xx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var qx=0;function Yx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Zx(i,t){let e=new Wx,n=Xx(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new U);let r=new U,a=new ue,o=new ue;function l(h,u){let f=0,d=0,g=0;for(let J=0;J<9;J++)s.probe[J].set(0,0,0);let x=0,m=0,p=0,y=0,v=0,w=0,L=0,T=0,I=0,k=0,S=0;h.sort(Yx);let A=u===!0?Math.PI:1;for(let J=0,ft=h.length;J<ft;J++){let O=h[J],X=O.color,Q=O.intensity,it=O.distance,K=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)f+=X.r*Q*A,d+=X.g*Q*A,g+=X.b*Q*A;else if(O.isLightProbe){for(let nt=0;nt<9;nt++)s.probe[nt].addScaledVector(O.sh.coefficients[nt],Q);S++}else if(O.isDirectionalLight){let nt=e.get(O);if(nt.color.copy(O.color).multiplyScalar(O.intensity*A),O.castShadow){let lt=O.shadow,ut=n.get(O);ut.shadowBias=lt.bias,ut.shadowNormalBias=lt.normalBias,ut.shadowRadius=lt.radius,ut.shadowMapSize=lt.mapSize,s.directionalShadow[x]=ut,s.directionalShadowMap[x]=K,s.directionalShadowMatrix[x]=O.shadow.matrix,w++}s.directional[x]=nt,x++}else if(O.isSpotLight){let nt=e.get(O);nt.position.setFromMatrixPosition(O.matrixWorld),nt.color.copy(X).multiplyScalar(Q*A),nt.distance=it,nt.coneCos=Math.cos(O.angle),nt.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),nt.decay=O.decay,s.spot[p]=nt;let lt=O.shadow;if(O.map&&(s.spotLightMap[I]=O.map,I++,lt.updateMatrices(O),O.castShadow&&k++),s.spotLightMatrix[p]=lt.matrix,O.castShadow){let ut=n.get(O);ut.shadowBias=lt.bias,ut.shadowNormalBias=lt.normalBias,ut.shadowRadius=lt.radius,ut.shadowMapSize=lt.mapSize,s.spotShadow[p]=ut,s.spotShadowMap[p]=K,T++}p++}else if(O.isRectAreaLight){let nt=e.get(O);nt.color.copy(X).multiplyScalar(Q),nt.halfWidth.set(O.width*.5,0,0),nt.halfHeight.set(0,O.height*.5,0),s.rectArea[y]=nt,y++}else if(O.isPointLight){let nt=e.get(O);if(nt.color.copy(O.color).multiplyScalar(O.intensity*A),nt.distance=O.distance,nt.decay=O.decay,O.castShadow){let lt=O.shadow,ut=n.get(O);ut.shadowBias=lt.bias,ut.shadowNormalBias=lt.normalBias,ut.shadowRadius=lt.radius,ut.shadowMapSize=lt.mapSize,ut.shadowCameraNear=lt.camera.near,ut.shadowCameraFar=lt.camera.far,s.pointShadow[m]=ut,s.pointShadowMap[m]=K,s.pointShadowMatrix[m]=O.shadow.matrix,L++}s.point[m]=nt,m++}else if(O.isHemisphereLight){let nt=e.get(O);nt.skyColor.copy(O.color).multiplyScalar(Q*A),nt.groundColor.copy(O.groundColor).multiplyScalar(Q*A),s.hemi[v]=nt,v++}}y>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=mt.LTC_FLOAT_1,s.rectAreaLTC2=mt.LTC_FLOAT_2):(s.rectAreaLTC1=mt.LTC_HALF_1,s.rectAreaLTC2=mt.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=mt.LTC_FLOAT_1,s.rectAreaLTC2=mt.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=mt.LTC_HALF_1,s.rectAreaLTC2=mt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=d,s.ambient[2]=g;let V=s.hash;(V.directionalLength!==x||V.pointLength!==m||V.spotLength!==p||V.rectAreaLength!==y||V.hemiLength!==v||V.numDirectionalShadows!==w||V.numPointShadows!==L||V.numSpotShadows!==T||V.numSpotMaps!==I||V.numLightProbes!==S)&&(s.directional.length=x,s.spot.length=p,s.rectArea.length=y,s.point.length=m,s.hemi.length=v,s.directionalShadow.length=w,s.directionalShadowMap.length=w,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=T,s.spotShadowMap.length=T,s.directionalShadowMatrix.length=w,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=T+I-k,s.spotLightMap.length=I,s.numSpotLightShadowsWithMaps=k,s.numLightProbes=S,V.directionalLength=x,V.pointLength=m,V.spotLength=p,V.rectAreaLength=y,V.hemiLength=v,V.numDirectionalShadows=w,V.numPointShadows=L,V.numSpotShadows=T,V.numSpotMaps=I,V.numLightProbes=S,s.version=qx++)}function c(h,u){let f=0,d=0,g=0,x=0,m=0,p=u.matrixWorldInverse;for(let y=0,v=h.length;y<v;y++){let w=h[y];if(w.isDirectionalLight){let L=s.directional[f];L.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),L.direction.sub(r),L.direction.transformDirection(p),f++}else if(w.isSpotLight){let L=s.spot[g];L.position.setFromMatrixPosition(w.matrixWorld),L.position.applyMatrix4(p),L.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),L.direction.sub(r),L.direction.transformDirection(p),g++}else if(w.isRectAreaLight){let L=s.rectArea[x];L.position.setFromMatrixPosition(w.matrixWorld),L.position.applyMatrix4(p),o.identity(),a.copy(w.matrixWorld),a.premultiply(p),o.extractRotation(a),L.halfWidth.set(w.width*.5,0,0),L.halfHeight.set(0,w.height*.5,0),L.halfWidth.applyMatrix4(o),L.halfHeight.applyMatrix4(o),x++}else if(w.isPointLight){let L=s.point[d];L.position.setFromMatrixPosition(w.matrixWorld),L.position.applyMatrix4(p),d++}else if(w.isHemisphereLight){let L=s.hemi[m];L.direction.setFromMatrixPosition(w.matrixWorld),L.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:s}}function Pu(i,t){let e=new Zx(i,t),n=[],s=[];function r(){n.length=0,s.length=0}function a(u){n.push(u)}function o(u){s.push(u)}function l(u){e.setup(n,u)}function c(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:e},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Jx(i,t){let e=new WeakMap;function n(r,a=0){let o=e.get(r),l;return o===void 0?(l=new Pu(i,t),e.set(r,[l])):a>=o.length?(l=new Pu(i,t),o.push(l)):l=o[a],l}function s(){e=new WeakMap}return{get:n,dispose:s}}var Yl=class extends gi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=np,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Zl=class extends gi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},$x=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Kx=`uniform sampler2D shadow_pass;
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
}`;function Qx(i,t,e){let n=new Br,s=new Mt,r=new Mt,a=new je,o=new Yl({depthPacking:ip}),l=new Zl,c={},h=e.maxTextureSize,u={[zi]:un,[un]:zi,[Mn]:Mn},f=new Ge({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Mt},radius:{value:4}},vertexShader:$x,fragmentShader:Kx}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new xe;g.setAttribute("position",new fe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new le(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ku;let p=this.type;this.render=function(T,I,k){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let S=i.getRenderTarget(),A=i.getActiveCubeFace(),V=i.getActiveMipmapLevel(),J=i.state;J.setBlending(Ni),J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);let ft=p!==hi&&this.type===hi,O=p===hi&&this.type!==hi;for(let X=0,Q=T.length;X<Q;X++){let it=T[X],K=it.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",it,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;s.copy(K.mapSize);let nt=K.getFrameExtents();if(s.multiply(nt),r.copy(K.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/nt.x),s.x=r.x*nt.x,K.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/nt.y),s.y=r.y*nt.y,K.mapSize.y=r.y)),K.map===null||ft===!0||O===!0){let ut=this.type!==hi?{minFilter:nn,magFilter:nn}:{};K.map!==null&&K.map.dispose(),K.map=new In(s.x,s.y,ut),K.map.texture.name=it.name+".shadowMap",K.camera.updateProjectionMatrix()}i.setRenderTarget(K.map),i.clear();let lt=K.getViewportCount();for(let ut=0;ut<lt;ut++){let Et=K.getViewport(ut);a.set(r.x*Et.x,r.y*Et.y,r.x*Et.z,r.y*Et.w),J.viewport(a),K.updateMatrices(it,ut),n=K.getFrustum(),w(I,k,K.camera,it,this.type)}K.isPointLightShadow!==!0&&this.type===hi&&y(K,k),K.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(S,A,V)};function y(T,I){let k=t.update(x);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new In(s.x,s.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(I,null,k,f,x,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(I,null,k,d,x,null)}function v(T,I,k,S){let A=null,V=k.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(V!==void 0)A=V;else if(A=k.isPointLight===!0?l:o,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){let J=A.uuid,ft=I.uuid,O=c[J];O===void 0&&(O={},c[J]=O);let X=O[ft];X===void 0&&(X=A.clone(),O[ft]=X,I.addEventListener("dispose",L)),A=X}if(A.visible=I.visible,A.wireframe=I.wireframe,S===hi?A.side=I.shadowSide!==null?I.shadowSide:I.side:A.side=I.shadowSide!==null?I.shadowSide:u[I.side],A.alphaMap=I.alphaMap,A.alphaTest=I.alphaTest,A.map=I.map,A.clipShadows=I.clipShadows,A.clippingPlanes=I.clippingPlanes,A.clipIntersection=I.clipIntersection,A.displacementMap=I.displacementMap,A.displacementScale=I.displacementScale,A.displacementBias=I.displacementBias,A.wireframeLinewidth=I.wireframeLinewidth,A.linewidth=I.linewidth,k.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let J=i.properties.get(A);J.light=k}return A}function w(T,I,k,S,A){if(T.visible===!1)return;if(T.layers.test(I.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&A===hi)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,T.matrixWorld);let ft=t.update(T),O=T.material;if(Array.isArray(O)){let X=ft.groups;for(let Q=0,it=X.length;Q<it;Q++){let K=X[Q],nt=O[K.materialIndex];if(nt&&nt.visible){let lt=v(T,nt,S,A);T.onBeforeShadow(i,T,I,k,ft,lt,K),i.renderBufferDirect(k,null,ft,lt,T,K),T.onAfterShadow(i,T,I,k,ft,lt,K)}}}else if(O.visible){let X=v(T,O,S,A);T.onBeforeShadow(i,T,I,k,ft,X,null),i.renderBufferDirect(k,null,ft,X,T,null),T.onAfterShadow(i,T,I,k,ft,X,null)}}let J=T.children;for(let ft=0,O=J.length;ft<O;ft++)w(J[ft],I,k,S,A)}function L(T){T.target.removeEventListener("dispose",L);for(let k in c){let S=c[k],A=T.target.uuid;A in S&&(S[A].dispose(),delete S[A])}}}function jx(i,t,e){let n=e.isWebGL2;function s(){let N=!1,xt=new je,_t=null,Bt=new je(0,0,0,0);return{setMask:function(Ft){_t!==Ft&&!N&&(i.colorMask(Ft,Ft,Ft,Ft),_t=Ft)},setLocked:function(Ft){N=Ft},setClear:function(Ft,pe,me,Oe,tn){tn===!0&&(Ft*=Oe,pe*=Oe,me*=Oe),xt.set(Ft,pe,me,Oe),Bt.equals(xt)===!1&&(i.clearColor(Ft,pe,me,Oe),Bt.copy(xt))},reset:function(){N=!1,_t=null,Bt.set(-1,0,0,0)}}}function r(){let N=!1,xt=null,_t=null,Bt=null;return{setTest:function(Ft){Ft?jt(i.DEPTH_TEST):kt(i.DEPTH_TEST)},setMask:function(Ft){xt!==Ft&&!N&&(i.depthMask(Ft),xt=Ft)},setFunc:function(Ft){if(_t!==Ft){switch(Ft){case Id:i.depthFunc(i.NEVER);break;case Dd:i.depthFunc(i.ALWAYS);break;case Ud:i.depthFunc(i.LESS);break;case Fa:i.depthFunc(i.LEQUAL);break;case Nd:i.depthFunc(i.EQUAL);break;case Fd:i.depthFunc(i.GEQUAL);break;case Od:i.depthFunc(i.GREATER);break;case zd:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}_t=Ft}},setLocked:function(Ft){N=Ft},setClear:function(Ft){Bt!==Ft&&(i.clearDepth(Ft),Bt=Ft)},reset:function(){N=!1,xt=null,_t=null,Bt=null}}}function a(){let N=!1,xt=null,_t=null,Bt=null,Ft=null,pe=null,me=null,Oe=null,tn=null;return{setTest:function(ge){N||(ge?jt(i.STENCIL_TEST):kt(i.STENCIL_TEST))},setMask:function(ge){xt!==ge&&!N&&(i.stencilMask(ge),xt=ge)},setFunc:function(ge,We,Rn){(_t!==ge||Bt!==We||Ft!==Rn)&&(i.stencilFunc(ge,We,Rn),_t=ge,Bt=We,Ft=Rn)},setOp:function(ge,We,Rn){(pe!==ge||me!==We||Oe!==Rn)&&(i.stencilOp(ge,We,Rn),pe=ge,me=We,Oe=Rn)},setLocked:function(ge){N=ge},setClear:function(ge){tn!==ge&&(i.clearStencil(ge),tn=ge)},reset:function(){N=!1,xt=null,_t=null,Bt=null,Ft=null,pe=null,me=null,Oe=null,tn=null}}}let o=new s,l=new r,c=new a,h=new WeakMap,u=new WeakMap,f={},d={},g=new WeakMap,x=[],m=null,p=!1,y=null,v=null,w=null,L=null,T=null,I=null,k=null,S=new It(0,0,0),A=0,V=!1,J=null,ft=null,O=null,X=null,Q=null,it=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),K=!1,nt=0,lt=i.getParameter(i.VERSION);lt.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(lt)[1]),K=nt>=1):lt.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(lt)[1]),K=nt>=2);let ut=null,Et={},$=i.getParameter(i.SCISSOR_BOX),st=i.getParameter(i.VIEWPORT),bt=new je().fromArray($),Tt=new je().fromArray(st);function Pt(N,xt,_t,Bt){let Ft=new Uint8Array(4),pe=i.createTexture();i.bindTexture(N,pe),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let me=0;me<_t;me++)n&&(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)?i.texImage3D(xt,0,i.RGBA,1,1,Bt,0,i.RGBA,i.UNSIGNED_BYTE,Ft):i.texImage2D(xt+me,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ft);return pe}let $t={};$t[i.TEXTURE_2D]=Pt(i.TEXTURE_2D,i.TEXTURE_2D,1),$t[i.TEXTURE_CUBE_MAP]=Pt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&($t[i.TEXTURE_2D_ARRAY]=Pt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),$t[i.TEXTURE_3D]=Pt(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),jt(i.DEPTH_TEST),l.setFunc(Fa),te(!1),R(uh),jt(i.CULL_FACE),Rt(Ni);function jt(N){f[N]!==!0&&(i.enable(N),f[N]=!0)}function kt(N){f[N]!==!1&&(i.disable(N),f[N]=!1)}function ce(N,xt){return d[N]!==xt?(i.bindFramebuffer(N,xt),d[N]=xt,n&&(N===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=xt),N===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=xt)),!0):!1}function q(N,xt){let _t=x,Bt=!1;if(N)if(_t=g.get(xt),_t===void 0&&(_t=[],g.set(xt,_t)),N.isWebGLMultipleRenderTargets){let Ft=N.texture;if(_t.length!==Ft.length||_t[0]!==i.COLOR_ATTACHMENT0){for(let pe=0,me=Ft.length;pe<me;pe++)_t[pe]=i.COLOR_ATTACHMENT0+pe;_t.length=Ft.length,Bt=!0}}else _t[0]!==i.COLOR_ATTACHMENT0&&(_t[0]=i.COLOR_ATTACHMENT0,Bt=!0);else _t[0]!==i.BACK&&(_t[0]=i.BACK,Bt=!0);Bt&&(e.isWebGL2?i.drawBuffers(_t):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(_t))}function $e(N){return m!==N?(i.useProgram(N),m=N,!0):!1}let zt={[Qi]:i.FUNC_ADD,[xd]:i.FUNC_SUBTRACT,[_d]:i.FUNC_REVERSE_SUBTRACT};if(n)zt[ph]=i.MIN,zt[mh]=i.MAX;else{let N=t.get("EXT_blend_minmax");N!==null&&(zt[ph]=N.MIN_EXT,zt[mh]=N.MAX_EXT)}let Zt={[vd]:i.ZERO,[yd]:i.ONE,[Md]:i.SRC_COLOR,[Rl]:i.SRC_ALPHA,[Ad]:i.SRC_ALPHA_SATURATE,[wd]:i.DST_COLOR,[Sd]:i.DST_ALPHA,[bd]:i.ONE_MINUS_SRC_COLOR,[Cl]:i.ONE_MINUS_SRC_ALPHA,[Td]:i.ONE_MINUS_DST_COLOR,[Ed]:i.ONE_MINUS_DST_ALPHA,[Rd]:i.CONSTANT_COLOR,[Cd]:i.ONE_MINUS_CONSTANT_COLOR,[Pd]:i.CONSTANT_ALPHA,[Ld]:i.ONE_MINUS_CONSTANT_ALPHA};function Rt(N,xt,_t,Bt,Ft,pe,me,Oe,tn,ge){if(N===Ni){p===!0&&(kt(i.BLEND),p=!1);return}if(p===!1&&(jt(i.BLEND),p=!0),N!==gd){if(N!==y||ge!==V){if((v!==Qi||T!==Qi)&&(i.blendEquation(i.FUNC_ADD),v=Qi,T=Qi),ge)switch(N){case Ys:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Gn:i.blendFunc(i.ONE,i.ONE);break;case fh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case dh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Ys:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Gn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case fh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case dh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}w=null,L=null,I=null,k=null,S.set(0,0,0),A=0,y=N,V=ge}return}Ft=Ft||xt,pe=pe||_t,me=me||Bt,(xt!==v||Ft!==T)&&(i.blendEquationSeparate(zt[xt],zt[Ft]),v=xt,T=Ft),(_t!==w||Bt!==L||pe!==I||me!==k)&&(i.blendFuncSeparate(Zt[_t],Zt[Bt],Zt[pe],Zt[me]),w=_t,L=Bt,I=pe,k=me),(Oe.equals(S)===!1||tn!==A)&&(i.blendColor(Oe.r,Oe.g,Oe.b,tn),S.copy(Oe),A=tn),y=N,V=!1}function Se(N,xt){N.side===Mn?kt(i.CULL_FACE):jt(i.CULL_FACE);let _t=N.side===un;xt&&(_t=!_t),te(_t),N.blending===Ys&&N.transparent===!1?Rt(Ni):Rt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),l.setFunc(N.depthFunc),l.setTest(N.depthTest),l.setMask(N.depthWrite),o.setMask(N.colorWrite);let Bt=N.stencilWrite;c.setTest(Bt),Bt&&(c.setMask(N.stencilWriteMask),c.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),c.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),G(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?jt(i.SAMPLE_ALPHA_TO_COVERAGE):kt(i.SAMPLE_ALPHA_TO_COVERAGE)}function te(N){J!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),J=N)}function R(N){N!==pd?(jt(i.CULL_FACE),N!==ft&&(N===uh?i.cullFace(i.BACK):N===md?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):kt(i.CULL_FACE),ft=N}function b(N){N!==O&&(K&&i.lineWidth(N),O=N)}function G(N,xt,_t){N?(jt(i.POLYGON_OFFSET_FILL),(X!==xt||Q!==_t)&&(i.polygonOffset(xt,_t),X=xt,Q=_t)):kt(i.POLYGON_OFFSET_FILL)}function ct(N){N?jt(i.SCISSOR_TEST):kt(i.SCISSOR_TEST)}function at(N){N===void 0&&(N=i.TEXTURE0+it-1),ut!==N&&(i.activeTexture(N),ut=N)}function ht(N,xt,_t){_t===void 0&&(ut===null?_t=i.TEXTURE0+it-1:_t=ut);let Bt=Et[_t];Bt===void 0&&(Bt={type:void 0,texture:void 0},Et[_t]=Bt),(Bt.type!==N||Bt.texture!==xt)&&(ut!==_t&&(i.activeTexture(_t),ut=_t),i.bindTexture(N,xt||$t[N]),Bt.type=N,Bt.texture=xt)}function Ct(){let N=Et[ut];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function vt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function St(){try{i.compressedTexImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Dt(){try{i.texSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Kt(){try{i.texSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function rt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function de(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function oe(){try{i.texStorage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function qt(){try{i.texStorage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ut(){try{i.texImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function wt(){try{i.texImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ee(N){bt.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),bt.copy(N))}function Ht(N){Tt.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),Tt.copy(N))}function Ee(N,xt){let _t=u.get(xt);_t===void 0&&(_t=new WeakMap,u.set(xt,_t));let Bt=_t.get(N);Bt===void 0&&(Bt=i.getUniformBlockIndex(xt,N.name),_t.set(N,Bt))}function Qt(N,xt){let Bt=u.get(xt).get(N);h.get(xt)!==Bt&&(i.uniformBlockBinding(xt,Bt,N.__bindingPointIndex),h.set(xt,Bt))}function pt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},ut=null,Et={},d={},g=new WeakMap,x=[],m=null,p=!1,y=null,v=null,w=null,L=null,T=null,I=null,k=null,S=new It(0,0,0),A=0,V=!1,J=null,ft=null,O=null,X=null,Q=null,bt.set(0,0,i.canvas.width,i.canvas.height),Tt.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:jt,disable:kt,bindFramebuffer:ce,drawBuffers:q,useProgram:$e,setBlending:Rt,setMaterial:Se,setFlipSided:te,setCullFace:R,setLineWidth:b,setPolygonOffset:G,setScissorTest:ct,activeTexture:at,bindTexture:ht,unbindTexture:Ct,compressedTexImage2D:vt,compressedTexImage3D:St,texImage2D:Ut,texImage3D:wt,updateUBOMapping:Ee,uniformBlockBinding:Qt,texStorage2D:oe,texStorage3D:qt,texSubImage2D:Dt,texSubImage3D:Kt,compressedTexSubImage2D:rt,compressedTexSubImage3D:de,scissor:ee,viewport:Ht,reset:pt}}function t_(i,t,e,n,s,r,a){let o=s.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,b){return d?new OffscreenCanvas(R,b):Wa("canvas")}function x(R,b,G,ct){let at=1;if((R.width>ct||R.height>ct)&&(at=ct/Math.max(R.width,R.height)),at<1||b===!0)if(typeof HTMLImageElement!="undefined"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&R instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&R instanceof ImageBitmap){let ht=b?Nl:Math.floor,Ct=ht(at*R.width),vt=ht(at*R.height);u===void 0&&(u=g(Ct,vt));let St=G?g(Ct,vt):u;return St.width=Ct,St.height=vt,St.getContext("2d").drawImage(R,0,0,Ct,vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+Ct+"x"+vt+")."),St}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function m(R){return Yh(R.width)&&Yh(R.height)}function p(R){return o?!1:R.wrapS!==Hn||R.wrapT!==Hn||R.minFilter!==nn&&R.minFilter!==yn}function y(R,b){return R.generateMipmaps&&b&&R.minFilter!==nn&&R.minFilter!==yn}function v(R){i.generateMipmap(R)}function w(R,b,G,ct,at=!1){if(o===!1)return b;if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ht=b;if(b===i.RED&&(G===i.FLOAT&&(ht=i.R32F),G===i.HALF_FLOAT&&(ht=i.R16F),G===i.UNSIGNED_BYTE&&(ht=i.R8)),b===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(ht=i.R8UI),G===i.UNSIGNED_SHORT&&(ht=i.R16UI),G===i.UNSIGNED_INT&&(ht=i.R32UI),G===i.BYTE&&(ht=i.R8I),G===i.SHORT&&(ht=i.R16I),G===i.INT&&(ht=i.R32I)),b===i.RG&&(G===i.FLOAT&&(ht=i.RG32F),G===i.HALF_FLOAT&&(ht=i.RG16F),G===i.UNSIGNED_BYTE&&(ht=i.RG8)),b===i.RGBA){let Ct=at?Ba:ve.getTransfer(ct);G===i.FLOAT&&(ht=i.RGBA32F),G===i.HALF_FLOAT&&(ht=i.RGBA16F),G===i.UNSIGNED_BYTE&&(ht=Ct===Te?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(ht=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(ht=i.RGB5_A1)}return(ht===i.R16F||ht===i.R32F||ht===i.RG16F||ht===i.RG32F||ht===i.RGBA16F||ht===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ht}function L(R,b,G){return y(R,G)===!0||R.isFramebufferTexture&&R.minFilter!==nn&&R.minFilter!==yn?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function T(R){return R===nn||R===gh||R===qo?i.NEAREST:i.LINEAR}function I(R){let b=R.target;b.removeEventListener("dispose",I),S(b),b.isVideoTexture&&h.delete(b)}function k(R){let b=R.target;b.removeEventListener("dispose",k),V(b)}function S(R){let b=n.get(R);if(b.__webglInit===void 0)return;let G=R.source,ct=f.get(G);if(ct){let at=ct[b.__cacheKey];at.usedTimes--,at.usedTimes===0&&A(R),Object.keys(ct).length===0&&f.delete(G)}n.remove(R)}function A(R){let b=n.get(R);i.deleteTexture(b.__webglTexture);let G=R.source,ct=f.get(G);delete ct[b.__cacheKey],a.memory.textures--}function V(R){let b=R.texture,G=n.get(R),ct=n.get(b);if(ct.__webglTexture!==void 0&&(i.deleteTexture(ct.__webglTexture),a.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let at=0;at<6;at++){if(Array.isArray(G.__webglFramebuffer[at]))for(let ht=0;ht<G.__webglFramebuffer[at].length;ht++)i.deleteFramebuffer(G.__webglFramebuffer[at][ht]);else i.deleteFramebuffer(G.__webglFramebuffer[at]);G.__webglDepthbuffer&&i.deleteRenderbuffer(G.__webglDepthbuffer[at])}else{if(Array.isArray(G.__webglFramebuffer))for(let at=0;at<G.__webglFramebuffer.length;at++)i.deleteFramebuffer(G.__webglFramebuffer[at]);else i.deleteFramebuffer(G.__webglFramebuffer);if(G.__webglDepthbuffer&&i.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&i.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let at=0;at<G.__webglColorRenderbuffer.length;at++)G.__webglColorRenderbuffer[at]&&i.deleteRenderbuffer(G.__webglColorRenderbuffer[at]);G.__webglDepthRenderbuffer&&i.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let at=0,ht=b.length;at<ht;at++){let Ct=n.get(b[at]);Ct.__webglTexture&&(i.deleteTexture(Ct.__webglTexture),a.memory.textures--),n.remove(b[at])}n.remove(b),n.remove(R)}let J=0;function ft(){J=0}function O(){let R=J;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),J+=1,R}function X(R){let b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function Q(R,b){let G=n.get(R);if(R.isVideoTexture&&Se(R),R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){let ct=R.image;if(ct===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ct.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{bt(G,R,b);return}}e.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+b)}function it(R,b){let G=n.get(R);if(R.version>0&&G.__version!==R.version){bt(G,R,b);return}e.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+b)}function K(R,b){let G=n.get(R);if(R.version>0&&G.__version!==R.version){bt(G,R,b);return}e.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+b)}function nt(R,b){let G=n.get(R);if(R.version>0&&G.__version!==R.version){Tt(G,R,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+b)}let lt={[ss]:i.REPEAT,[Hn]:i.CLAMP_TO_EDGE,[Il]:i.MIRRORED_REPEAT},ut={[nn]:i.NEAREST,[gh]:i.NEAREST_MIPMAP_NEAREST,[qo]:i.NEAREST_MIPMAP_LINEAR,[yn]:i.LINEAR,[Yd]:i.LINEAR_MIPMAP_NEAREST,[zr]:i.LINEAR_MIPMAP_LINEAR},Et={[rp]:i.NEVER,[up]:i.ALWAYS,[ap]:i.LESS,[Ku]:i.LEQUAL,[op]:i.EQUAL,[hp]:i.GEQUAL,[lp]:i.GREATER,[cp]:i.NOTEQUAL};function $(R,b,G){if(G?(i.texParameteri(R,i.TEXTURE_WRAP_S,lt[b.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,lt[b.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,lt[b.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,ut[b.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,ut[b.minFilter])):(i.texParameteri(R,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(R,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(b.wrapS!==Hn||b.wrapT!==Hn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(R,i.TEXTURE_MAG_FILTER,T(b.magFilter)),i.texParameteri(R,i.TEXTURE_MIN_FILTER,T(b.minFilter)),b.minFilter!==nn&&b.minFilter!==yn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,Et[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let ct=t.get("EXT_texture_filter_anisotropic");if(b.magFilter===nn||b.minFilter!==qo&&b.minFilter!==zr||b.type===Ui&&t.has("OES_texture_float_linear")===!1||o===!1&&b.type===rs&&t.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||n.get(b).__currentAnisotropy)&&(i.texParameterf(R,ct.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy)}}function st(R,b){let G=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",I));let ct=b.source,at=f.get(ct);at===void 0&&(at={},f.set(ct,at));let ht=X(b);if(ht!==R.__cacheKey){at[ht]===void 0&&(at[ht]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,G=!0),at[ht].usedTimes++;let Ct=at[R.__cacheKey];Ct!==void 0&&(at[R.__cacheKey].usedTimes--,Ct.usedTimes===0&&A(b)),R.__cacheKey=ht,R.__webglTexture=at[ht].texture}return G}function bt(R,b,G){let ct=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ct=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ct=i.TEXTURE_3D);let at=st(R,b),ht=b.source;e.bindTexture(ct,R.__webglTexture,i.TEXTURE0+G);let Ct=n.get(ht);if(ht.version!==Ct.__version||at===!0){e.activeTexture(i.TEXTURE0+G);let vt=ve.getPrimaries(ve.workingColorSpace),St=b.colorSpace===On?null:ve.getPrimaries(b.colorSpace),Dt=b.colorSpace===On||vt===St?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt);let Kt=p(b)&&m(b.image)===!1,rt=x(b.image,Kt,!1,s.maxTextureSize);rt=te(b,rt);let de=m(rt)||o,oe=r.convert(b.format,b.colorSpace),qt=r.convert(b.type),Ut=w(b.internalFormat,oe,qt,b.colorSpace,b.isVideoTexture);$(ct,b,de);let wt,ee=b.mipmaps,Ht=o&&b.isVideoTexture!==!0&&Ut!==Zu,Ee=Ct.__version===void 0||at===!0,Qt=L(b,rt,de);if(b.isDepthTexture)Ut=i.DEPTH_COMPONENT,o?b.type===Ui?Ut=i.DEPTH_COMPONENT32F:b.type===Di?Ut=i.DEPTH_COMPONENT24:b.type===es?Ut=i.DEPTH24_STENCIL8:Ut=i.DEPTH_COMPONENT16:b.type===Ui&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===ns&&Ut===i.DEPTH_COMPONENT&&b.type!==Ec&&b.type!==Di&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=Di,qt=r.convert(b.type)),b.format===Qs&&Ut===i.DEPTH_COMPONENT&&(Ut=i.DEPTH_STENCIL,b.type!==es&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=es,qt=r.convert(b.type))),Ee&&(Ht?e.texStorage2D(i.TEXTURE_2D,1,Ut,rt.width,rt.height):e.texImage2D(i.TEXTURE_2D,0,Ut,rt.width,rt.height,0,oe,qt,null));else if(b.isDataTexture)if(ee.length>0&&de){Ht&&Ee&&e.texStorage2D(i.TEXTURE_2D,Qt,Ut,ee[0].width,ee[0].height);for(let pt=0,N=ee.length;pt<N;pt++)wt=ee[pt],Ht?e.texSubImage2D(i.TEXTURE_2D,pt,0,0,wt.width,wt.height,oe,qt,wt.data):e.texImage2D(i.TEXTURE_2D,pt,Ut,wt.width,wt.height,0,oe,qt,wt.data);b.generateMipmaps=!1}else Ht?(Ee&&e.texStorage2D(i.TEXTURE_2D,Qt,Ut,rt.width,rt.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,rt.width,rt.height,oe,qt,rt.data)):e.texImage2D(i.TEXTURE_2D,0,Ut,rt.width,rt.height,0,oe,qt,rt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ht&&Ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Qt,Ut,ee[0].width,ee[0].height,rt.depth);for(let pt=0,N=ee.length;pt<N;pt++)wt=ee[pt],b.format!==Vn?oe!==null?Ht?e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,pt,0,0,0,wt.width,wt.height,rt.depth,oe,wt.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,pt,Ut,wt.width,wt.height,rt.depth,0,wt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?e.texSubImage3D(i.TEXTURE_2D_ARRAY,pt,0,0,0,wt.width,wt.height,rt.depth,oe,qt,wt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,pt,Ut,wt.width,wt.height,rt.depth,0,oe,qt,wt.data)}else{Ht&&Ee&&e.texStorage2D(i.TEXTURE_2D,Qt,Ut,ee[0].width,ee[0].height);for(let pt=0,N=ee.length;pt<N;pt++)wt=ee[pt],b.format!==Vn?oe!==null?Ht?e.compressedTexSubImage2D(i.TEXTURE_2D,pt,0,0,wt.width,wt.height,oe,wt.data):e.compressedTexImage2D(i.TEXTURE_2D,pt,Ut,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?e.texSubImage2D(i.TEXTURE_2D,pt,0,0,wt.width,wt.height,oe,qt,wt.data):e.texImage2D(i.TEXTURE_2D,pt,Ut,wt.width,wt.height,0,oe,qt,wt.data)}else if(b.isDataArrayTexture)Ht?(Ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Qt,Ut,rt.width,rt.height,rt.depth),e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,oe,qt,rt.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ut,rt.width,rt.height,rt.depth,0,oe,qt,rt.data);else if(b.isData3DTexture)Ht?(Ee&&e.texStorage3D(i.TEXTURE_3D,Qt,Ut,rt.width,rt.height,rt.depth),e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,oe,qt,rt.data)):e.texImage3D(i.TEXTURE_3D,0,Ut,rt.width,rt.height,rt.depth,0,oe,qt,rt.data);else if(b.isFramebufferTexture){if(Ee)if(Ht)e.texStorage2D(i.TEXTURE_2D,Qt,Ut,rt.width,rt.height);else{let pt=rt.width,N=rt.height;for(let xt=0;xt<Qt;xt++)e.texImage2D(i.TEXTURE_2D,xt,Ut,pt,N,0,oe,qt,null),pt>>=1,N>>=1}}else if(ee.length>0&&de){Ht&&Ee&&e.texStorage2D(i.TEXTURE_2D,Qt,Ut,ee[0].width,ee[0].height);for(let pt=0,N=ee.length;pt<N;pt++)wt=ee[pt],Ht?e.texSubImage2D(i.TEXTURE_2D,pt,0,0,oe,qt,wt):e.texImage2D(i.TEXTURE_2D,pt,Ut,oe,qt,wt);b.generateMipmaps=!1}else Ht?(Ee&&e.texStorage2D(i.TEXTURE_2D,Qt,Ut,rt.width,rt.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,oe,qt,rt)):e.texImage2D(i.TEXTURE_2D,0,Ut,oe,qt,rt);y(b,de)&&v(ct),Ct.__version=ht.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function Tt(R,b,G){if(b.image.length!==6)return;let ct=st(R,b),at=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+G);let ht=n.get(at);if(at.version!==ht.__version||ct===!0){e.activeTexture(i.TEXTURE0+G);let Ct=ve.getPrimaries(ve.workingColorSpace),vt=b.colorSpace===On?null:ve.getPrimaries(b.colorSpace),St=b.colorSpace===On||Ct===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);let Dt=b.isCompressedTexture||b.image[0].isCompressedTexture,Kt=b.image[0]&&b.image[0].isDataTexture,rt=[];for(let pt=0;pt<6;pt++)!Dt&&!Kt?rt[pt]=x(b.image[pt],!1,!0,s.maxCubemapSize):rt[pt]=Kt?b.image[pt].image:b.image[pt],rt[pt]=te(b,rt[pt]);let de=rt[0],oe=m(de)||o,qt=r.convert(b.format,b.colorSpace),Ut=r.convert(b.type),wt=w(b.internalFormat,qt,Ut,b.colorSpace),ee=o&&b.isVideoTexture!==!0,Ht=ht.__version===void 0||ct===!0,Ee=L(b,de,oe);$(i.TEXTURE_CUBE_MAP,b,oe);let Qt;if(Dt){ee&&Ht&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Ee,wt,de.width,de.height);for(let pt=0;pt<6;pt++){Qt=rt[pt].mipmaps;for(let N=0;N<Qt.length;N++){let xt=Qt[N];b.format!==Vn?qt!==null?ee?e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,N,0,0,xt.width,xt.height,qt,xt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,N,wt,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ee?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,N,0,0,xt.width,xt.height,qt,Ut,xt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,N,wt,xt.width,xt.height,0,qt,Ut,xt.data)}}}else{Qt=b.mipmaps,ee&&Ht&&(Qt.length>0&&Ee++,e.texStorage2D(i.TEXTURE_CUBE_MAP,Ee,wt,rt[0].width,rt[0].height));for(let pt=0;pt<6;pt++)if(Kt){ee?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,rt[pt].width,rt[pt].height,qt,Ut,rt[pt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,wt,rt[pt].width,rt[pt].height,0,qt,Ut,rt[pt].data);for(let N=0;N<Qt.length;N++){let _t=Qt[N].image[pt].image;ee?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,N+1,0,0,_t.width,_t.height,qt,Ut,_t.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,N+1,wt,_t.width,_t.height,0,qt,Ut,_t.data)}}else{ee?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,qt,Ut,rt[pt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,wt,qt,Ut,rt[pt]);for(let N=0;N<Qt.length;N++){let xt=Qt[N];ee?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,N+1,0,0,qt,Ut,xt.image[pt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,N+1,wt,qt,Ut,xt.image[pt])}}}y(b,oe)&&v(i.TEXTURE_CUBE_MAP),ht.__version=at.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function Pt(R,b,G,ct,at,ht){let Ct=r.convert(G.format,G.colorSpace),vt=r.convert(G.type),St=w(G.internalFormat,Ct,vt,G.colorSpace);if(!n.get(b).__hasExternalTextures){let Kt=Math.max(1,b.width>>ht),rt=Math.max(1,b.height>>ht);at===i.TEXTURE_3D||at===i.TEXTURE_2D_ARRAY?e.texImage3D(at,ht,St,Kt,rt,b.depth,0,Ct,vt,null):e.texImage2D(at,ht,St,Kt,rt,0,Ct,vt,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),Rt(b)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ct,at,n.get(G).__webglTexture,0,Zt(b)):(at===i.TEXTURE_2D||at>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&at<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ct,at,n.get(G).__webglTexture,ht),e.bindFramebuffer(i.FRAMEBUFFER,null)}function $t(R,b,G){if(i.bindRenderbuffer(i.RENDERBUFFER,R),b.depthBuffer&&!b.stencilBuffer){let ct=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(G||Rt(b)){let at=b.depthTexture;at&&at.isDepthTexture&&(at.type===Ui?ct=i.DEPTH_COMPONENT32F:at.type===Di&&(ct=i.DEPTH_COMPONENT24));let ht=Zt(b);Rt(b)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ht,ct,b.width,b.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,ht,ct,b.width,b.height)}else i.renderbufferStorage(i.RENDERBUFFER,ct,b.width,b.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,R)}else if(b.depthBuffer&&b.stencilBuffer){let ct=Zt(b);G&&Rt(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ct,i.DEPTH24_STENCIL8,b.width,b.height):Rt(b)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ct,i.DEPTH24_STENCIL8,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,R)}else{let ct=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let at=0;at<ct.length;at++){let ht=ct[at],Ct=r.convert(ht.format,ht.colorSpace),vt=r.convert(ht.type),St=w(ht.internalFormat,Ct,vt,ht.colorSpace),Dt=Zt(b);G&&Rt(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Dt,St,b.width,b.height):Rt(b)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Dt,St,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,St,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function jt(R,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),Q(b.depthTexture,0);let ct=n.get(b.depthTexture).__webglTexture,at=Zt(b);if(b.depthTexture.format===ns)Rt(b)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ct,0,at):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ct,0);else if(b.depthTexture.format===Qs)Rt(b)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ct,0,at):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ct,0);else throw new Error("Unknown depthTexture format")}function kt(R){let b=n.get(R),G=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!b.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");jt(b.__webglFramebuffer,R)}else if(G){b.__webglDepthbuffer=[];for(let ct=0;ct<6;ct++)e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[ct]),b.__webglDepthbuffer[ct]=i.createRenderbuffer(),$t(b.__webglDepthbuffer[ct],R,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=i.createRenderbuffer(),$t(b.__webglDepthbuffer,R,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function ce(R,b,G){let ct=n.get(R);b!==void 0&&Pt(ct.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&kt(R)}function q(R){let b=R.texture,G=n.get(R),ct=n.get(b);R.addEventListener("dispose",k),R.isWebGLMultipleRenderTargets!==!0&&(ct.__webglTexture===void 0&&(ct.__webglTexture=i.createTexture()),ct.__version=b.version,a.memory.textures++);let at=R.isWebGLCubeRenderTarget===!0,ht=R.isWebGLMultipleRenderTargets===!0,Ct=m(R)||o;if(at){G.__webglFramebuffer=[];for(let vt=0;vt<6;vt++)if(o&&b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer[vt]=[];for(let St=0;St<b.mipmaps.length;St++)G.__webglFramebuffer[vt][St]=i.createFramebuffer()}else G.__webglFramebuffer[vt]=i.createFramebuffer()}else{if(o&&b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer=[];for(let vt=0;vt<b.mipmaps.length;vt++)G.__webglFramebuffer[vt]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(ht)if(s.drawBuffers){let vt=R.texture;for(let St=0,Dt=vt.length;St<Dt;St++){let Kt=n.get(vt[St]);Kt.__webglTexture===void 0&&(Kt.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&R.samples>0&&Rt(R)===!1){let vt=ht?b:[b];G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let St=0;St<vt.length;St++){let Dt=vt[St];G.__webglColorRenderbuffer[St]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[St]);let Kt=r.convert(Dt.format,Dt.colorSpace),rt=r.convert(Dt.type),de=w(Dt.internalFormat,Kt,rt,Dt.colorSpace,R.isXRRenderTarget===!0),oe=Zt(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,oe,de,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,G.__webglColorRenderbuffer[St])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),$t(G.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(at){e.bindTexture(i.TEXTURE_CUBE_MAP,ct.__webglTexture),$(i.TEXTURE_CUBE_MAP,b,Ct);for(let vt=0;vt<6;vt++)if(o&&b.mipmaps&&b.mipmaps.length>0)for(let St=0;St<b.mipmaps.length;St++)Pt(G.__webglFramebuffer[vt][St],R,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,St);else Pt(G.__webglFramebuffer[vt],R,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0);y(b,Ct)&&v(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ht){let vt=R.texture;for(let St=0,Dt=vt.length;St<Dt;St++){let Kt=vt[St],rt=n.get(Kt);e.bindTexture(i.TEXTURE_2D,rt.__webglTexture),$(i.TEXTURE_2D,Kt,Ct),Pt(G.__webglFramebuffer,R,Kt,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,0),y(Kt,Ct)&&v(i.TEXTURE_2D)}e.unbindTexture()}else{let vt=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(o?vt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(vt,ct.__webglTexture),$(vt,b,Ct),o&&b.mipmaps&&b.mipmaps.length>0)for(let St=0;St<b.mipmaps.length;St++)Pt(G.__webglFramebuffer[St],R,b,i.COLOR_ATTACHMENT0,vt,St);else Pt(G.__webglFramebuffer,R,b,i.COLOR_ATTACHMENT0,vt,0);y(b,Ct)&&v(vt),e.unbindTexture()}R.depthBuffer&&kt(R)}function $e(R){let b=m(R)||o,G=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let ct=0,at=G.length;ct<at;ct++){let ht=G[ct];if(y(ht,b)){let Ct=R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,vt=n.get(ht).__webglTexture;e.bindTexture(Ct,vt),v(Ct),e.unbindTexture()}}}function zt(R){if(o&&R.samples>0&&Rt(R)===!1){let b=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],G=R.width,ct=R.height,at=i.COLOR_BUFFER_BIT,ht=[],Ct=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=n.get(R),St=R.isWebGLMultipleRenderTargets===!0;if(St)for(let Dt=0;Dt<b.length;Dt++)e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let Dt=0;Dt<b.length;Dt++){ht.push(i.COLOR_ATTACHMENT0+Dt),R.depthBuffer&&ht.push(Ct);let Kt=vt.__ignoreDepthValues!==void 0?vt.__ignoreDepthValues:!1;if(Kt===!1&&(R.depthBuffer&&(at|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&(at|=i.STENCIL_BUFFER_BIT)),St&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,vt.__webglColorRenderbuffer[Dt]),Kt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Ct]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Ct])),St){let rt=n.get(b[Dt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,rt,0)}i.blitFramebuffer(0,0,G,ct,0,0,G,ct,at,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ht)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),St)for(let Dt=0;Dt<b.length;Dt++){e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.RENDERBUFFER,vt.__webglColorRenderbuffer[Dt]);let Kt=n.get(b[Dt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.TEXTURE_2D,Kt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}}function Zt(R){return Math.min(s.maxSamples,R.samples)}function Rt(R){let b=n.get(R);return o&&R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Se(R){let b=a.render.frame;h.get(R)!==b&&(h.set(R,b),R.update())}function te(R,b){let G=R.colorSpace,ct=R.format,at=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===Ul||G!==pi&&G!==On&&(ve.getTransfer(G)===Te?o===!1?t.has("EXT_sRGB")===!0&&ct===Vn?(R.format=Ul,R.minFilter=yn,R.generateMipmaps=!1):b=Xa.sRGBToLinear(b):(ct!==Vn||at!==$n)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),b}this.allocateTextureUnit=O,this.resetTextureUnits=ft,this.setTexture2D=Q,this.setTexture2DArray=it,this.setTexture3D=K,this.setTextureCube=nt,this.rebindTextures=ce,this.setupRenderTarget=q,this.updateRenderTargetMipmap=$e,this.updateMultisampleRenderTarget=zt,this.setupDepthRenderbuffer=kt,this.setupFrameBufferTexture=Pt,this.useMultisampledRTT=Rt}function e_(i,t,e){let n=e.isWebGL2;function s(r,a=On){let o,l=ve.getTransfer(a);if(r===$n)return i.UNSIGNED_BYTE;if(r===Gu)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Wu)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Zd)return i.BYTE;if(r===Jd)return i.SHORT;if(r===Ec)return i.UNSIGNED_SHORT;if(r===Vu)return i.INT;if(r===Di)return i.UNSIGNED_INT;if(r===Ui)return i.FLOAT;if(r===rs)return n?i.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===$d)return i.ALPHA;if(r===Vn)return i.RGBA;if(r===Kd)return i.LUMINANCE;if(r===Qd)return i.LUMINANCE_ALPHA;if(r===ns)return i.DEPTH_COMPONENT;if(r===Qs)return i.DEPTH_STENCIL;if(r===Ul)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===jd)return i.RED;if(r===Xu)return i.RED_INTEGER;if(r===tp)return i.RG;if(r===qu)return i.RG_INTEGER;if(r===Yu)return i.RGBA_INTEGER;if(r===Yo||r===Zo||r===Jo||r===$o)if(l===Te)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Yo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Zo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Jo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===$o)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Yo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Zo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Jo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===$o)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===xh||r===_h||r===vh||r===yh)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===xh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===_h)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===vh)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===yh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Zu)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Mh||r===bh)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Mh)return l===Te?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===bh)return l===Te?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Sh||r===Eh||r===wh||r===Th||r===Ah||r===Rh||r===Ch||r===Ph||r===Lh||r===Ih||r===Dh||r===Uh||r===Nh||r===Fh)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Sh)return l===Te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Eh)return l===Te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===wh)return l===Te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Th)return l===Te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ah)return l===Te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Rh)return l===Te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ch)return l===Te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ph)return l===Te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Lh)return l===Te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ih)return l===Te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Dh)return l===Te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Uh)return l===Te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Nh)return l===Te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Fh)return l===Te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ko||r===Oh||r===zh)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===Ko)return l===Te?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Oh)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===zh)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===ep||r===Bh||r===kh||r===Hh)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===Ko)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Bh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===kh)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Hh)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===es?n?i.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var Jl=class extends rn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Fe=class extends Xe{constructor(){super(),this.isGroup=!0,this.type="Group"}},n_={type:"move"},Nr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(n_)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Fe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},$l=class extends Bi{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null,x=e.getContextAttributes(),m=null,p=null,y=[],v=[],w=new Mt,L=null,T=new rn;T.layers.enable(1),T.viewport=new je;let I=new rn;I.layers.enable(2),I.viewport=new je;let k=[T,I],S=new Jl;S.layers.enable(1),S.layers.enable(2);let A=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let st=y[$];return st===void 0&&(st=new Nr,y[$]=st),st.getTargetRaySpace()},this.getControllerGrip=function($){let st=y[$];return st===void 0&&(st=new Nr,y[$]=st),st.getGripSpace()},this.getHand=function($){let st=y[$];return st===void 0&&(st=new Nr,y[$]=st),st.getHandSpace()};function J($){let st=v.indexOf($.inputSource);if(st===-1)return;let bt=y[st];bt!==void 0&&(bt.update($.inputSource,$.frame,c||a),bt.dispatchEvent({type:$.type,data:$.inputSource}))}function ft(){s.removeEventListener("select",J),s.removeEventListener("selectstart",J),s.removeEventListener("selectend",J),s.removeEventListener("squeeze",J),s.removeEventListener("squeezestart",J),s.removeEventListener("squeezeend",J),s.removeEventListener("end",ft),s.removeEventListener("inputsourceschange",O);for(let $=0;$<y.length;$++){let st=v[$];st!==null&&(v[$]=null,y[$].disconnect(st))}A=null,V=null,t.setRenderTarget(m),d=null,f=null,u=null,s=null,p=null,Et.stop(),n.isPresenting=!1,t.setPixelRatio(L),t.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",J),s.addEventListener("selectstart",J),s.addEventListener("selectend",J),s.addEventListener("squeeze",J),s.addEventListener("squeezestart",J),s.addEventListener("squeezeend",J),s.addEventListener("end",ft),s.addEventListener("inputsourceschange",O),x.xrCompatible!==!0&&await e.makeXRCompatible(),L=t.getPixelRatio(),t.getSize(w),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let st={antialias:s.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,st),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),p=new In(d.framebufferWidth,d.framebufferHeight,{format:Vn,type:$n,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil})}else{let st=null,bt=null,Tt=null;x.depth&&(Tt=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,st=x.stencil?Qs:ns,bt=x.stencil?es:Di);let Pt={colorFormat:e.RGBA8,depthFormat:Tt,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(Pt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),p=new In(f.textureWidth,f.textureHeight,{format:Vn,type:$n,depthTexture:new eo(f.textureWidth,f.textureHeight,bt,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0});let $t=t.properties.get(p);$t.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Et.setContext(s),Et.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function O($){for(let st=0;st<$.removed.length;st++){let bt=$.removed[st],Tt=v.indexOf(bt);Tt>=0&&(v[Tt]=null,y[Tt].disconnect(bt))}for(let st=0;st<$.added.length;st++){let bt=$.added[st],Tt=v.indexOf(bt);if(Tt===-1){for(let $t=0;$t<y.length;$t++)if($t>=v.length){v.push(bt),Tt=$t;break}else if(v[$t]===null){v[$t]=bt,Tt=$t;break}if(Tt===-1)break}let Pt=y[Tt];Pt&&Pt.connect(bt)}}let X=new U,Q=new U;function it($,st,bt){X.setFromMatrixPosition(st.matrixWorld),Q.setFromMatrixPosition(bt.matrixWorld);let Tt=X.distanceTo(Q),Pt=st.projectionMatrix.elements,$t=bt.projectionMatrix.elements,jt=Pt[14]/(Pt[10]-1),kt=Pt[14]/(Pt[10]+1),ce=(Pt[9]+1)/Pt[5],q=(Pt[9]-1)/Pt[5],$e=(Pt[8]-1)/Pt[0],zt=($t[8]+1)/$t[0],Zt=jt*$e,Rt=jt*zt,Se=Tt/(-$e+zt),te=Se*-$e;st.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(te),$.translateZ(Se),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert();let R=jt+Se,b=kt+Se,G=Zt-te,ct=Rt+(Tt-te),at=ce*kt/b*R,ht=q*kt/b*R;$.projectionMatrix.makePerspective(G,ct,at,ht,R,b),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}function K($,st){st===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(st.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;S.near=I.near=T.near=$.near,S.far=I.far=T.far=$.far,(A!==S.near||V!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),A=S.near,V=S.far);let st=$.parent,bt=S.cameras;K(S,st);for(let Tt=0;Tt<bt.length;Tt++)K(bt[Tt],st);bt.length===2?it(S,T,I):S.projectionMatrix.copy(T.projectionMatrix),nt($,S,st)};function nt($,st,bt){bt===null?$.matrix.copy(st.matrixWorld):($.matrix.copy(bt.matrixWorld),$.matrix.invert(),$.matrix.multiply(st.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(st.projectionMatrix),$.projectionMatrixInverse.copy(st.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Ga*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function($){l=$,f!==null&&(f.fixedFoveation=$),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=$)};let lt=null;function ut($,st){if(h=st.getViewerPose(c||a),g=st,h!==null){let bt=h.views;d!==null&&(t.setRenderTargetFramebuffer(p,d.framebuffer),t.setRenderTarget(p));let Tt=!1;bt.length!==S.cameras.length&&(S.cameras.length=0,Tt=!0);for(let Pt=0;Pt<bt.length;Pt++){let $t=bt[Pt],jt=null;if(d!==null)jt=d.getViewport($t);else{let ce=u.getViewSubImage(f,$t);jt=ce.viewport,Pt===0&&(t.setRenderTargetTextures(p,ce.colorTexture,f.ignoreDepthValues?void 0:ce.depthStencilTexture),t.setRenderTarget(p))}let kt=k[Pt];kt===void 0&&(kt=new rn,kt.layers.enable(Pt),kt.viewport=new je,k[Pt]=kt),kt.matrix.fromArray($t.transform.matrix),kt.matrix.decompose(kt.position,kt.quaternion,kt.scale),kt.projectionMatrix.fromArray($t.projectionMatrix),kt.projectionMatrixInverse.copy(kt.projectionMatrix).invert(),kt.viewport.set(jt.x,jt.y,jt.width,jt.height),Pt===0&&(S.matrix.copy(kt.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),Tt===!0&&S.cameras.push(kt)}}for(let bt=0;bt<y.length;bt++){let Tt=v[bt],Pt=y[bt];Tt!==null&&Pt!==void 0&&Pt.update(Tt,st,c||a)}lt&&lt($,st),st.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:st}),g=null}let Et=new ef;Et.setAnimationLoop(ut),this.setAnimationLoop=function($){lt=$},this.dispose=function(){}}};function i_(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,tf(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,v,w){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,w)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,y,v):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===un&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===un&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y=t.get(p).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let v=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*v,e(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=v*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),t.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===un&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function s_(i,t,e,n){let s={},r={},a=[],o=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,v){let w=v.program;n.uniformBlockBinding(y,w)}function c(y,v){let w=s[y.id];w===void 0&&(g(y),w=h(y),s[y.id]=w,y.addEventListener("dispose",m));let L=v.program;n.updateUBOMapping(y,L);let T=t.render.frame;r[y.id]!==T&&(f(y),r[y.id]=T)}function h(y){let v=u();y.__bindingPointIndex=v;let w=i.createBuffer(),L=y.__size,T=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,L,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,w),w}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let v=s[y.id],w=y.uniforms,L=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let T=0,I=w.length;T<I;T++){let k=Array.isArray(w[T])?w[T]:[w[T]];for(let S=0,A=k.length;S<A;S++){let V=k[S];if(d(V,T,S,L)===!0){let J=V.__offset,ft=Array.isArray(V.value)?V.value:[V.value],O=0;for(let X=0;X<ft.length;X++){let Q=ft[X],it=x(Q);typeof Q=="number"||typeof Q=="boolean"?(V.__data[0]=Q,i.bufferSubData(i.UNIFORM_BUFFER,J+O,V.__data)):Q.isMatrix3?(V.__data[0]=Q.elements[0],V.__data[1]=Q.elements[1],V.__data[2]=Q.elements[2],V.__data[3]=0,V.__data[4]=Q.elements[3],V.__data[5]=Q.elements[4],V.__data[6]=Q.elements[5],V.__data[7]=0,V.__data[8]=Q.elements[6],V.__data[9]=Q.elements[7],V.__data[10]=Q.elements[8],V.__data[11]=0):(Q.toArray(V.__data,O),O+=it.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,J,V.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(y,v,w,L){let T=y.value,I=v+"_"+w;if(L[I]===void 0)return typeof T=="number"||typeof T=="boolean"?L[I]=T:L[I]=T.clone(),!0;{let k=L[I];if(typeof T=="number"||typeof T=="boolean"){if(k!==T)return L[I]=T,!0}else if(k.equals(T)===!1)return k.copy(T),!0}return!1}function g(y){let v=y.uniforms,w=0,L=16;for(let I=0,k=v.length;I<k;I++){let S=Array.isArray(v[I])?v[I]:[v[I]];for(let A=0,V=S.length;A<V;A++){let J=S[A],ft=Array.isArray(J.value)?J.value:[J.value];for(let O=0,X=ft.length;O<X;O++){let Q=ft[O],it=x(Q),K=w%L;K!==0&&L-K<it.boundary&&(w+=L-K),J.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=w,w+=it.storage}}}let T=w%L;return T>0&&(w+=L-T),y.__size=w,y.__cache={},this}function x(y){let v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function m(y){let v=y.target;v.removeEventListener("dispose",m);let w=a.indexOf(v.__bindingPointIndex);a.splice(w,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function p(){for(let y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}var kr=class{constructor(t={}){let{canvas:e=dp(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=a;let d=new Uint32Array(4),g=new Int32Array(4),x=null,m=null,p=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ne,this._useLegacyLights=!1,this.toneMapping=Fi,this.toneMappingExposure=1;let v=this,w=!1,L=0,T=0,I=null,k=-1,S=null,A=new je,V=new je,J=null,ft=new It(0),O=0,X=e.width,Q=e.height,it=1,K=null,nt=null,lt=new je(0,0,X,Q),ut=new je(0,0,X,Q),Et=!1,$=new Br,st=!1,bt=!1,Tt=null,Pt=new ue,$t=new Mt,jt=new U,kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ce(){return I===null?it:1}let q=n;function $e(E,B){for(let W=0;W<E.length;W++){let Z=E[W],H=e.getContext(Z,B);if(H!==null)return H}return null}try{let E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Mc}`),e.addEventListener("webglcontextlost",pt,!1),e.addEventListener("webglcontextrestored",N,!1),e.addEventListener("webglcontextcreationerror",xt,!1),q===null){let B=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&B.shift(),q=$e(B,E),q===null)throw $e(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext!="undefined"&&q instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),q.getShaderPrecisionFormat===void 0&&(q.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let zt,Zt,Rt,Se,te,R,b,G,ct,at,ht,Ct,vt,St,Dt,Kt,rt,de,oe,qt,Ut,wt,ee,Ht;function Ee(){zt=new Sg(q),Zt=new xg(q,zt,t),zt.init(Zt),wt=new e_(q,zt,Zt),Rt=new jx(q,zt,Zt),Se=new Tg(q),te=new Hx,R=new t_(q,zt,Rt,te,Zt,wt,Se),b=new vg(v),G=new bg(v),ct=new Up(q,Zt),ee=new mg(q,zt,ct,Zt),at=new Eg(q,ct,Se,ee),ht=new Pg(q,at,ct,Se),oe=new Cg(q,Zt,R),Kt=new _g(te),Ct=new kx(v,b,G,zt,Zt,ee,Kt),vt=new i_(v,te),St=new Gx,Dt=new Jx(zt,Zt),de=new pg(v,b,G,Rt,ht,f,l),rt=new Qx(v,ht,Zt),Ht=new s_(q,Se,Zt,Rt),qt=new gg(q,zt,Se,Zt),Ut=new wg(q,zt,Se,Zt),Se.programs=Ct.programs,v.capabilities=Zt,v.extensions=zt,v.properties=te,v.renderLists=St,v.shadowMap=rt,v.state=Rt,v.info=Se}Ee();let Qt=new $l(v,q);this.xr=Qt,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){let E=zt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=zt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return it},this.setPixelRatio=function(E){E!==void 0&&(it=E,this.setSize(X,Q,!1))},this.getSize=function(E){return E.set(X,Q)},this.setSize=function(E,B,W=!0){if(Qt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=E,Q=B,e.width=Math.floor(E*it),e.height=Math.floor(B*it),W===!0&&(e.style.width=E+"px",e.style.height=B+"px"),this.setViewport(0,0,E,B)},this.getDrawingBufferSize=function(E){return E.set(X*it,Q*it).floor()},this.setDrawingBufferSize=function(E,B,W){X=E,Q=B,it=W,e.width=Math.floor(E*W),e.height=Math.floor(B*W),this.setViewport(0,0,E,B)},this.getCurrentViewport=function(E){return E.copy(A)},this.getViewport=function(E){return E.copy(lt)},this.setViewport=function(E,B,W,Z){E.isVector4?lt.set(E.x,E.y,E.z,E.w):lt.set(E,B,W,Z),Rt.viewport(A.copy(lt).multiplyScalar(it).floor())},this.getScissor=function(E){return E.copy(ut)},this.setScissor=function(E,B,W,Z){E.isVector4?ut.set(E.x,E.y,E.z,E.w):ut.set(E,B,W,Z),Rt.scissor(V.copy(ut).multiplyScalar(it).floor())},this.getScissorTest=function(){return Et},this.setScissorTest=function(E){Rt.setScissorTest(Et=E)},this.setOpaqueSort=function(E){K=E},this.setTransparentSort=function(E){nt=E},this.getClearColor=function(E){return E.copy(de.getClearColor())},this.setClearColor=function(){de.setClearColor.apply(de,arguments)},this.getClearAlpha=function(){return de.getClearAlpha()},this.setClearAlpha=function(){de.setClearAlpha.apply(de,arguments)},this.clear=function(E=!0,B=!0,W=!0){let Z=0;if(E){let H=!1;if(I!==null){let yt=I.texture.format;H=yt===Yu||yt===qu||yt===Xu}if(H){let yt=I.texture.type,At=yt===$n||yt===Di||yt===Ec||yt===es||yt===Gu||yt===Wu,Lt=de.getClearColor(),Wt=de.getClearAlpha(),Yt=Lt.r,Vt=Lt.g,Jt=Lt.b;At?(d[0]=Yt,d[1]=Vt,d[2]=Jt,d[3]=Wt,q.clearBufferuiv(q.COLOR,0,d)):(g[0]=Yt,g[1]=Vt,g[2]=Jt,g[3]=Wt,q.clearBufferiv(q.COLOR,0,g))}else Z|=q.COLOR_BUFFER_BIT}B&&(Z|=q.DEPTH_BUFFER_BIT),W&&(Z|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",pt,!1),e.removeEventListener("webglcontextrestored",N,!1),e.removeEventListener("webglcontextcreationerror",xt,!1),St.dispose(),Dt.dispose(),te.dispose(),b.dispose(),G.dispose(),ht.dispose(),ee.dispose(),Ht.dispose(),Ct.dispose(),Qt.dispose(),Qt.removeEventListener("sessionstart",tn),Qt.removeEventListener("sessionend",ge),Tt&&(Tt.dispose(),Tt=null),We.stop()};function pt(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function N(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let E=Se.autoReset,B=rt.enabled,W=rt.autoUpdate,Z=rt.needsUpdate,H=rt.type;Ee(),Se.autoReset=E,rt.enabled=B,rt.autoUpdate=W,rt.needsUpdate=Z,rt.type=H}function xt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function _t(E){let B=E.target;B.removeEventListener("dispose",_t),Bt(B)}function Bt(E){Ft(E),te.remove(E)}function Ft(E){let B=te.get(E).programs;B!==void 0&&(B.forEach(function(W){Ct.releaseProgram(W)}),E.isShaderMaterial&&Ct.releaseShaderCache(E))}this.renderBufferDirect=function(E,B,W,Z,H,yt){B===null&&(B=kt);let At=H.isMesh&&H.matrixWorld.determinant()<0,Lt=na(E,B,W,Z,H);Rt.setMaterial(Z,At);let Wt=W.index,Yt=1;if(Z.wireframe===!0){if(Wt=at.getWireframeAttribute(W),Wt===void 0)return;Yt=2}let Vt=W.drawRange,Jt=W.attributes.position,Re=Vt.start*Yt,ln=(Vt.start+Vt.count)*Yt;yt!==null&&(Re=Math.max(Re,yt.start*Yt),ln=Math.min(ln,(yt.start+yt.count)*Yt)),Wt!==null?(Re=Math.max(Re,0),ln=Math.min(ln,Wt.count)):Jt!=null&&(Re=Math.max(Re,0),ln=Math.min(ln,Jt.count));let ke=ln-Re;if(ke<0||ke===1/0)return;ee.setup(H,Z,Lt,W,Wt);let En,Me=qt;if(Wt!==null&&(En=ct.get(Wt),Me=Ut,Me.setIndex(En)),H.isMesh)Z.wireframe===!0?(Rt.setLineWidth(Z.wireframeLinewidth*ce()),Me.setMode(q.LINES)):Me.setMode(q.TRIANGLES);else if(H.isLine){let ie=Z.linewidth;ie===void 0&&(ie=1),Rt.setLineWidth(ie*ce()),H.isLineSegments?Me.setMode(q.LINES):H.isLineLoop?Me.setMode(q.LINE_LOOP):Me.setMode(q.LINE_STRIP)}else H.isPoints?Me.setMode(q.POINTS):H.isSprite&&Me.setMode(q.TRIANGLES);if(H.isBatchedMesh)Me.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else if(H.isInstancedMesh)Me.renderInstances(Re,ke,H.count);else if(W.isInstancedBufferGeometry){let ie=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Sr=Math.min(W.instanceCount,ie);Me.renderInstances(Re,ke,Sr)}else Me.render(Re,ke)};function pe(E,B,W){E.transparent===!0&&E.side===Mn&&E.forceSinglePass===!1?(E.side=un,E.needsUpdate=!0,si(E,B,W),E.side=zi,E.needsUpdate=!0,si(E,B,W),E.side=Mn):si(E,B,W)}this.compile=function(E,B,W=null){W===null&&(W=E),m=Dt.get(W),m.init(),y.push(m),W.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),E!==W&&E.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),m.setupLights(v._useLegacyLights);let Z=new Set;return E.traverse(function(H){let yt=H.material;if(yt)if(Array.isArray(yt))for(let At=0;At<yt.length;At++){let Lt=yt[At];pe(Lt,W,H),Z.add(Lt)}else pe(yt,W,H),Z.add(yt)}),y.pop(),m=null,Z},this.compileAsync=function(E,B,W=null){let Z=this.compile(E,B,W);return new Promise(H=>{function yt(){if(Z.forEach(function(At){te.get(At).currentProgram.isReady()&&Z.delete(At)}),Z.size===0){H(E);return}setTimeout(yt,10)}zt.get("KHR_parallel_shader_compile")!==null?yt():setTimeout(yt,10)})};let me=null;function Oe(E){me&&me(E)}function tn(){We.stop()}function ge(){We.start()}let We=new ef;We.setAnimationLoop(Oe),typeof self!="undefined"&&We.setContext(self),this.setAnimationLoop=function(E){me=E,Qt.setAnimationLoop(E),E===null?We.stop():We.start()},Qt.addEventListener("sessionstart",tn),Qt.addEventListener("sessionend",ge),this.render=function(E,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Qt.enabled===!0&&Qt.isPresenting===!0&&(Qt.cameraAutoUpdate===!0&&Qt.updateCamera(B),B=Qt.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,B,I),m=Dt.get(E,y.length),m.init(),y.push(m),Pt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),$.setFromProjectionMatrix(Pt),bt=this.localClippingEnabled,st=Kt.init(this.clippingPlanes,bt),x=St.get(E,p.length),x.init(),p.push(x),Rn(E,B,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(K,nt),this.info.render.frame++,st===!0&&Kt.beginShadows();let W=m.state.shadowsArray;if(rt.render(W,E,B),st===!0&&Kt.endShadows(),this.info.autoReset===!0&&this.info.reset(),de.render(x,E),m.setupLights(v._useLegacyLights),B.isArrayCamera){let Z=B.cameras;for(let H=0,yt=Z.length;H<yt;H++){let At=Z[H];_s(x,E,At,At.viewport)}}else _s(x,E,B);I!==null&&(R.updateMultisampleRenderTarget(I),R.updateRenderTargetMipmap(I)),E.isScene===!0&&E.onAfterRender(v,E,B),ee.resetDefaultState(),k=-1,S=null,y.pop(),y.length>0?m=y[y.length-1]:m=null,p.pop(),p.length>0?x=p[p.length-1]:x=null};function Rn(E,B,W,Z){if(E.visible===!1)return;if(E.layers.test(B.layers)){if(E.isGroup)W=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(B);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||$.intersectsSprite(E)){Z&&jt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Pt);let At=ht.update(E),Lt=E.material;Lt.visible&&x.push(E,At,Lt,W,jt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||$.intersectsObject(E))){let At=ht.update(E),Lt=E.material;if(Z&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),jt.copy(E.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),jt.copy(At.boundingSphere.center)),jt.applyMatrix4(E.matrixWorld).applyMatrix4(Pt)),Array.isArray(Lt)){let Wt=At.groups;for(let Yt=0,Vt=Wt.length;Yt<Vt;Yt++){let Jt=Wt[Yt],Re=Lt[Jt.materialIndex];Re&&Re.visible&&x.push(E,At,Re,W,jt.z,Jt)}}else Lt.visible&&x.push(E,At,Lt,W,jt.z,null)}}let yt=E.children;for(let At=0,Lt=yt.length;At<Lt;At++)Rn(yt[At],B,W,Z)}function _s(E,B,W,Z){let H=E.opaque,yt=E.transmissive,At=E.transparent;m.setupLightsView(W),st===!0&&Kt.setGlobalState(v.clippingPlanes,W),yt.length>0&&vs(H,yt,B,W),Z&&Rt.viewport(A.copy(Z)),H.length>0&&ii(H,B,W),yt.length>0&&ii(yt,B,W),At.length>0&&ii(At,B,W),Rt.buffers.depth.setTest(!0),Rt.buffers.depth.setMask(!0),Rt.buffers.color.setMask(!0),Rt.setPolygonOffset(!1)}function vs(E,B,W,Z){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;let yt=Zt.isWebGL2;Tt===null&&(Tt=new In(1,1,{generateMipmaps:!0,type:zt.has("EXT_color_buffer_half_float")?rs:$n,minFilter:zr,samples:yt?4:0})),v.getDrawingBufferSize($t),yt?Tt.setSize($t.x,$t.y):Tt.setSize(Nl($t.x),Nl($t.y));let At=v.getRenderTarget();v.setRenderTarget(Tt),v.getClearColor(ft),O=v.getClearAlpha(),O<1&&v.setClearColor(16777215,.5),v.clear();let Lt=v.toneMapping;v.toneMapping=Fi,ii(E,W,Z),R.updateMultisampleRenderTarget(Tt),R.updateRenderTargetMipmap(Tt);let Wt=!1;for(let Yt=0,Vt=B.length;Yt<Vt;Yt++){let Jt=B[Yt],Re=Jt.object,ln=Jt.geometry,ke=Jt.material,En=Jt.group;if(ke.side===Mn&&Re.layers.test(Z.layers)){let Me=ke.side;ke.side=un,ke.needsUpdate=!0,ys(Re,W,Z,ln,ke,En),ke.side=Me,ke.needsUpdate=!0,Wt=!0}}Wt===!0&&(R.updateMultisampleRenderTarget(Tt),R.updateRenderTargetMipmap(Tt)),v.setRenderTarget(At),v.setClearColor(ft,O),v.toneMapping=Lt}function ii(E,B,W){let Z=B.isScene===!0?B.overrideMaterial:null;for(let H=0,yt=E.length;H<yt;H++){let At=E[H],Lt=At.object,Wt=At.geometry,Yt=Z===null?At.material:Z,Vt=At.group;Lt.layers.test(W.layers)&&ys(Lt,B,W,Wt,Yt,Vt)}}function ys(E,B,W,Z,H,yt){E.onBeforeRender(v,B,W,Z,H,yt),E.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),H.onBeforeRender(v,B,W,Z,E,yt),H.transparent===!0&&H.side===Mn&&H.forceSinglePass===!1?(H.side=un,H.needsUpdate=!0,v.renderBufferDirect(W,B,Z,H,E,yt),H.side=zi,H.needsUpdate=!0,v.renderBufferDirect(W,B,Z,H,E,yt),H.side=Mn):v.renderBufferDirect(W,B,Z,H,E,yt),E.onAfterRender(v,B,W,Z,H,yt)}function si(E,B,W){B.isScene!==!0&&(B=kt);let Z=te.get(E),H=m.state.lights,yt=m.state.shadowsArray,At=H.state.version,Lt=Ct.getParameters(E,H.state,yt,B,W),Wt=Ct.getProgramCacheKey(Lt),Yt=Z.programs;Z.environment=E.isMeshStandardMaterial?B.environment:null,Z.fog=B.fog,Z.envMap=(E.isMeshStandardMaterial?G:b).get(E.envMap||Z.environment),Yt===void 0&&(E.addEventListener("dispose",_t),Yt=new Map,Z.programs=Yt);let Vt=Yt.get(Wt);if(Vt!==void 0){if(Z.currentProgram===Vt&&Z.lightsStateVersion===At)return Mr(E,Lt),Vt}else Lt.uniforms=Ct.getUniforms(E),E.onBuild(W,Lt,v),E.onBeforeCompile(Lt,v),Vt=Ct.acquireProgram(Lt,Wt),Yt.set(Wt,Vt),Z.uniforms=Lt.uniforms;let Jt=Z.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Jt.clippingPlanes=Kt.uniform),Mr(E,Lt),Z.needsLights=br(E),Z.lightsStateVersion=At,Z.needsLights&&(Jt.ambientLightColor.value=H.state.ambient,Jt.lightProbe.value=H.state.probe,Jt.directionalLights.value=H.state.directional,Jt.directionalLightShadows.value=H.state.directionalShadow,Jt.spotLights.value=H.state.spot,Jt.spotLightShadows.value=H.state.spotShadow,Jt.rectAreaLights.value=H.state.rectArea,Jt.ltc_1.value=H.state.rectAreaLTC1,Jt.ltc_2.value=H.state.rectAreaLTC2,Jt.pointLights.value=H.state.point,Jt.pointLightShadows.value=H.state.pointShadow,Jt.hemisphereLights.value=H.state.hemi,Jt.directionalShadowMap.value=H.state.directionalShadowMap,Jt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Jt.spotShadowMap.value=H.state.spotShadowMap,Jt.spotLightMatrix.value=H.state.spotLightMatrix,Jt.spotLightMap.value=H.state.spotLightMap,Jt.pointShadowMap.value=H.state.pointShadowMap,Jt.pointShadowMatrix.value=H.state.pointShadowMatrix),Z.currentProgram=Vt,Z.uniformsList=null,Vt}function yr(E){if(E.uniformsList===null){let B=E.currentProgram.getUniforms();E.uniformsList=Js.seqWithValue(B.seq,E.uniforms)}return E.uniformsList}function Mr(E,B){let W=te.get(E);W.outputColorSpace=B.outputColorSpace,W.batching=B.batching,W.instancing=B.instancing,W.instancingColor=B.instancingColor,W.skinning=B.skinning,W.morphTargets=B.morphTargets,W.morphNormals=B.morphNormals,W.morphColors=B.morphColors,W.morphTargetsCount=B.morphTargetsCount,W.numClippingPlanes=B.numClippingPlanes,W.numIntersection=B.numClipIntersection,W.vertexAlphas=B.vertexAlphas,W.vertexTangents=B.vertexTangents,W.toneMapping=B.toneMapping}function na(E,B,W,Z,H){B.isScene!==!0&&(B=kt),R.resetTextureUnits();let yt=B.fog,At=Z.isMeshStandardMaterial?B.environment:null,Lt=I===null?v.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:pi,Wt=(Z.isMeshStandardMaterial?G:b).get(Z.envMap||At),Yt=Z.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Vt=!!W.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Jt=!!W.morphAttributes.position,Re=!!W.morphAttributes.normal,ln=!!W.morphAttributes.color,ke=Fi;Z.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(ke=v.toneMapping);let En=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Me=En!==void 0?En.length:0,ie=te.get(Z),Sr=m.state.lights;if(st===!0&&(bt===!0||E!==S)){let D=E===S&&Z.id===k;Kt.setState(Z,E,D)}let Ce=!1;Z.version===ie.__version?(ie.needsLights&&ie.lightsStateVersion!==Sr.state.version||ie.outputColorSpace!==Lt||H.isBatchedMesh&&ie.batching===!1||!H.isBatchedMesh&&ie.batching===!0||H.isInstancedMesh&&ie.instancing===!1||!H.isInstancedMesh&&ie.instancing===!0||H.isSkinnedMesh&&ie.skinning===!1||!H.isSkinnedMesh&&ie.skinning===!0||H.isInstancedMesh&&ie.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&ie.instancingColor===!1&&H.instanceColor!==null||ie.envMap!==Wt||Z.fog===!0&&ie.fog!==yt||ie.numClippingPlanes!==void 0&&(ie.numClippingPlanes!==Kt.numPlanes||ie.numIntersection!==Kt.numIntersection)||ie.vertexAlphas!==Yt||ie.vertexTangents!==Vt||ie.morphTargets!==Jt||ie.morphNormals!==Re||ie.morphColors!==ln||ie.toneMapping!==ke||Zt.isWebGL2===!0&&ie.morphTargetsCount!==Me)&&(Ce=!0):(Ce=!0,ie.__version=Z.version);let Zn=ie.currentProgram;Ce===!0&&(Zn=si(Z,B,H));let Er=!1,qi=!1,bs=!1,_=Zn.getUniforms(),C=ie.uniforms;if(Rt.useProgram(Zn.program)&&(Er=!0,qi=!0,bs=!0),Z.id!==k&&(k=Z.id,qi=!0),Er||S!==E){_.setValue(q,"projectionMatrix",E.projectionMatrix),_.setValue(q,"viewMatrix",E.matrixWorldInverse);let D=_.map.cameraPosition;D!==void 0&&D.setValue(q,jt.setFromMatrixPosition(E.matrixWorld)),Zt.logarithmicDepthBuffer&&_.setValue(q,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&_.setValue(q,"isOrthographic",E.isOrthographicCamera===!0),S!==E&&(S=E,qi=!0,bs=!0)}if(H.isSkinnedMesh){_.setOptional(q,H,"bindMatrix"),_.setOptional(q,H,"bindMatrixInverse");let D=H.skeleton;D&&(Zt.floatVertexTextures?(D.boneTexture===null&&D.computeBoneTexture(),_.setValue(q,"boneTexture",D.boneTexture,R)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}H.isBatchedMesh&&(_.setOptional(q,H,"batchingTexture"),_.setValue(q,"batchingTexture",H._matricesTexture,R));let P=W.morphAttributes;if((P.position!==void 0||P.normal!==void 0||P.color!==void 0&&Zt.isWebGL2===!0)&&oe.update(H,W,Zn),(qi||ie.receiveShadow!==H.receiveShadow)&&(ie.receiveShadow=H.receiveShadow,_.setValue(q,"receiveShadow",H.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(C.envMap.value=Wt,C.flipEnvMap.value=Wt.isCubeTexture&&Wt.isRenderTargetTexture===!1?-1:1),qi&&(_.setValue(q,"toneMappingExposure",v.toneMappingExposure),ie.needsLights&&Ms(C,bs),yt&&Z.fog===!0&&vt.refreshFogUniforms(C,yt),vt.refreshMaterialUniforms(C,Z,it,Q,Tt),Js.upload(q,yr(ie),C,R)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Js.upload(q,yr(ie),C,R),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&_.setValue(q,"center",H.center),_.setValue(q,"modelViewMatrix",H.modelViewMatrix),_.setValue(q,"normalMatrix",H.normalMatrix),_.setValue(q,"modelMatrix",H.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){let D=Z.uniformsGroups;for(let F=0,z=D.length;F<z;F++)if(Zt.isWebGL2){let Y=D[F];Ht.update(Y,Zn),Ht.bind(Y,Zn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Zn}function Ms(E,B){E.ambientLightColor.needsUpdate=B,E.lightProbe.needsUpdate=B,E.directionalLights.needsUpdate=B,E.directionalLightShadows.needsUpdate=B,E.pointLights.needsUpdate=B,E.pointLightShadows.needsUpdate=B,E.spotLights.needsUpdate=B,E.spotLightShadows.needsUpdate=B,E.rectAreaLights.needsUpdate=B,E.hemisphereLights.needsUpdate=B}function br(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(E,B,W){te.get(E.texture).__webglTexture=B,te.get(E.depthTexture).__webglTexture=W;let Z=te.get(E);Z.__hasExternalTextures=!0,Z.__hasExternalTextures&&(Z.__autoAllocateDepthBuffer=W===void 0,Z.__autoAllocateDepthBuffer||zt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,B){let W=te.get(E);W.__webglFramebuffer=B,W.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(E,B=0,W=0){I=E,L=B,T=W;let Z=!0,H=null,yt=!1,At=!1;if(E){let Wt=te.get(E);Wt.__useDefaultFramebuffer!==void 0?(Rt.bindFramebuffer(q.FRAMEBUFFER,null),Z=!1):Wt.__webglFramebuffer===void 0?R.setupRenderTarget(E):Wt.__hasExternalTextures&&R.rebindTextures(E,te.get(E.texture).__webglTexture,te.get(E.depthTexture).__webglTexture);let Yt=E.texture;(Yt.isData3DTexture||Yt.isDataArrayTexture||Yt.isCompressedArrayTexture)&&(At=!0);let Vt=te.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Vt[B])?H=Vt[B][W]:H=Vt[B],yt=!0):Zt.isWebGL2&&E.samples>0&&R.useMultisampledRTT(E)===!1?H=te.get(E).__webglMultisampledFramebuffer:Array.isArray(Vt)?H=Vt[W]:H=Vt,A.copy(E.viewport),V.copy(E.scissor),J=E.scissorTest}else A.copy(lt).multiplyScalar(it).floor(),V.copy(ut).multiplyScalar(it).floor(),J=Et;if(Rt.bindFramebuffer(q.FRAMEBUFFER,H)&&Zt.drawBuffers&&Z&&Rt.drawBuffers(E,H),Rt.viewport(A),Rt.scissor(V),Rt.setScissorTest(J),yt){let Wt=te.get(E.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+B,Wt.__webglTexture,W)}else if(At){let Wt=te.get(E.texture),Yt=B||0;q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,Wt.__webglTexture,W||0,Yt)}k=-1},this.readRenderTargetPixels=function(E,B,W,Z,H,yt,At){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=te.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&At!==void 0&&(Lt=Lt[At]),Lt){Rt.bindFramebuffer(q.FRAMEBUFFER,Lt);try{let Wt=E.texture,Yt=Wt.format,Vt=Wt.type;if(Yt!==Vn&&wt.convert(Yt)!==q.getParameter(q.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Jt=Vt===rs&&(zt.has("EXT_color_buffer_half_float")||Zt.isWebGL2&&zt.has("EXT_color_buffer_float"));if(Vt!==$n&&wt.convert(Vt)!==q.getParameter(q.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Vt===Ui&&(Zt.isWebGL2||zt.has("OES_texture_float")||zt.has("WEBGL_color_buffer_float")))&&!Jt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=E.width-Z&&W>=0&&W<=E.height-H&&q.readPixels(B,W,Z,H,wt.convert(Yt),wt.convert(Vt),yt)}finally{let Wt=I!==null?te.get(I).__webglFramebuffer:null;Rt.bindFramebuffer(q.FRAMEBUFFER,Wt)}}},this.copyFramebufferToTexture=function(E,B,W=0){let Z=Math.pow(2,-W),H=Math.floor(B.image.width*Z),yt=Math.floor(B.image.height*Z);R.setTexture2D(B,0),q.copyTexSubImage2D(q.TEXTURE_2D,W,0,0,E.x,E.y,H,yt),Rt.unbindTexture()},this.copyTextureToTexture=function(E,B,W,Z=0){let H=B.image.width,yt=B.image.height,At=wt.convert(W.format),Lt=wt.convert(W.type);R.setTexture2D(W,0),q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,W.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,W.unpackAlignment),B.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,Z,E.x,E.y,H,yt,At,Lt,B.image.data):B.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,Z,E.x,E.y,B.mipmaps[0].width,B.mipmaps[0].height,At,B.mipmaps[0].data):q.texSubImage2D(q.TEXTURE_2D,Z,E.x,E.y,At,Lt,B.image),Z===0&&W.generateMipmaps&&q.generateMipmap(q.TEXTURE_2D),Rt.unbindTexture()},this.copyTextureToTexture3D=function(E,B,W,Z,H=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let yt=E.max.x-E.min.x+1,At=E.max.y-E.min.y+1,Lt=E.max.z-E.min.z+1,Wt=wt.convert(Z.format),Yt=wt.convert(Z.type),Vt;if(Z.isData3DTexture)R.setTexture3D(Z,0),Vt=q.TEXTURE_3D;else if(Z.isDataArrayTexture||Z.isCompressedArrayTexture)R.setTexture2DArray(Z,0),Vt=q.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,Z.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,Z.unpackAlignment);let Jt=q.getParameter(q.UNPACK_ROW_LENGTH),Re=q.getParameter(q.UNPACK_IMAGE_HEIGHT),ln=q.getParameter(q.UNPACK_SKIP_PIXELS),ke=q.getParameter(q.UNPACK_SKIP_ROWS),En=q.getParameter(q.UNPACK_SKIP_IMAGES),Me=W.isCompressedTexture?W.mipmaps[H]:W.image;q.pixelStorei(q.UNPACK_ROW_LENGTH,Me.width),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Me.height),q.pixelStorei(q.UNPACK_SKIP_PIXELS,E.min.x),q.pixelStorei(q.UNPACK_SKIP_ROWS,E.min.y),q.pixelStorei(q.UNPACK_SKIP_IMAGES,E.min.z),W.isDataTexture||W.isData3DTexture?q.texSubImage3D(Vt,H,B.x,B.y,B.z,yt,At,Lt,Wt,Yt,Me.data):W.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),q.compressedTexSubImage3D(Vt,H,B.x,B.y,B.z,yt,At,Lt,Wt,Me.data)):q.texSubImage3D(Vt,H,B.x,B.y,B.z,yt,At,Lt,Wt,Yt,Me),q.pixelStorei(q.UNPACK_ROW_LENGTH,Jt),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Re),q.pixelStorei(q.UNPACK_SKIP_PIXELS,ln),q.pixelStorei(q.UNPACK_SKIP_ROWS,ke),q.pixelStorei(q.UNPACK_SKIP_IMAGES,En),H===0&&Z.generateMipmaps&&q.generateMipmap(Vt),Rt.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?R.setTextureCube(E,0):E.isData3DTexture?R.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?R.setTexture2DArray(E,0):R.setTexture2D(E,0),Rt.unbindTexture()},this.resetState=function(){L=0,T=0,I=null,Rt.reset(),ee.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===wc?"display-p3":"srgb",e.unpackColorSpace=ve.workingColorSpace===_o?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ne?is:Ju}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===is?Ne:pi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},Kl=class extends kr{};Kl.prototype.isWebGL1Renderer=!0;var no=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new It(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var as=class extends Xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}},Ql=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Dl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Oi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Oi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Oi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},_n=new U,io=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)_n.fromBufferAttribute(this,e),_n.applyMatrix4(t),this.setXYZ(e,_n.x,_n.y,_n.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)_n.fromBufferAttribute(this,e),_n.applyNormalMatrix(t),this.setXYZ(e,_n.x,_n.y,_n.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)_n.fromBufferAttribute(this,e),_n.transformDirection(t),this.setXYZ(e,_n.x,_n.y,_n.z);return this}setX(t,e){return this.normalized&&(e=ye(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ye(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ye(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ye(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=fi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=fi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=fi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=fi(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ye(e,this.array),n=ye(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ye(e,this.array),n=ye(n,this.array),s=ye(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ye(e,this.array),n=ye(n,this.array),s=ye(s,this.array),r=ye(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new fe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},os=class extends gi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new It(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ks,Cr=new U,Hs=new U,Vs=new U,Gs=new Mt,Pr=new Mt,lf=new ue,Ra=new U,Lr=new U,Ca=new U,Lu=new Mt,Sl=new Mt,Iu=new Mt,nr=class extends Xe{constructor(t=new os){if(super(),this.isSprite=!0,this.type="Sprite",ks===void 0){ks=new xe;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ql(e,5);ks.setIndex([0,1,2,0,2,3]),ks.setAttribute("position",new io(n,3,0,!1)),ks.setAttribute("uv",new io(n,2,3,!1))}this.geometry=ks,this.material=t,this.center=new Mt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Hs.setFromMatrixScale(this.matrixWorld),lf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Vs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Hs.multiplyScalar(-Vs.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Pa(Ra.set(-.5,-.5,0),Vs,a,Hs,s,r),Pa(Lr.set(.5,-.5,0),Vs,a,Hs,s,r),Pa(Ca.set(.5,.5,0),Vs,a,Hs,s,r),Lu.set(0,0),Sl.set(1,0),Iu.set(1,1);let o=t.ray.intersectTriangle(Ra,Lr,Ca,!1,Cr);if(o===null&&(Pa(Lr.set(-.5,.5,0),Vs,a,Hs,s,r),Sl.set(0,1),o=t.ray.intersectTriangle(Ra,Ca,Lr,!1,Cr),o===null))return;let l=t.ray.origin.distanceTo(Cr);l<t.near||l>t.far||e.push({distance:l,point:Cr.clone(),uv:ts.getInterpolation(Cr,Ra,Lr,Ca,Lu,Sl,Iu,new Mt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Pa(i,t,e,n,s,r){Gs.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Pr.x=r*Gs.x-s*Gs.y,Pr.y=s*Gs.x+r*Gs.y):Pr.copy(Gs),i.copy(t),i.x+=Pr.x,i.y+=Pr.y,i.applyMatrix4(lf)}var so=class extends Ln{constructor(t=null,e=1,n=1,s,r,a,o,l,c=nn,h=nn,u,f){super(null,a,o,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ro=class extends fe{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ws=new ue,Du=new ue,La=[],Uu=new mi,r_=new ue,Ir=new le,Dr=new ki,ao=class extends le{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ro(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,r_)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new mi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ws),Uu.copy(t.boundingBox).applyMatrix4(Ws),this.boundingBox.union(Uu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ki),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ws),Dr.copy(t.boundingSphere).applyMatrix4(Ws),this.boundingSphere.union(Dr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Ir.geometry=this.geometry,Ir.material=this.material,Ir.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Dr.copy(this.boundingSphere),Dr.applyMatrix4(n),t.ray.intersectsSphere(Dr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ws),Du.multiplyMatrices(n,Ws),Ir.matrixWorld=Du,Ir.raycast(t,La);for(let a=0,o=La.length;a<o;a++){let l=La[a];l.instanceId=r,l.object=this,e.push(l)}La.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new ro(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var jl=class extends gi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new It(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Nu=new ue,tc=new Za,Ia=new ki,Da=new U,xi=class extends Xe{constructor(t=new xe,e=new jl){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ia.copy(n.boundingSphere),Ia.applyMatrix4(s),Ia.radius+=r,t.ray.intersectsSphere(Ia)===!1)return;Nu.copy(s).invert(),tc.copy(t.ray).applyMatrix4(Nu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let g=f,x=d;g<x;g++){let m=c.getX(g);Da.fromBufferAttribute(u,m),Fu(Da,m,l,s,t,e,this)}}else{let f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let g=f,x=d;g<x;g++)Da.fromBufferAttribute(u,g),Fu(Da,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Fu(i,t,e,n,s,r,a){let o=tc.distanceSqToPoint(i);if(o<e){let l=new U;tc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,object:a})}}var ls=class extends Ln{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Wn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],f=n[s+1]-h,d=(a-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new Mt:new U);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new U,s=[],r=[],a=[],o=new U,l=new ue;for(let d=0;d<=t;d++){let g=d/t;s[d]=this.getTangentAt(g,new U)}r[0]=new U,a[0]=new U;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(sn(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,g))}a[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(sn(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},oo=class extends Wn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e){let n=e||new Mt,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},ec=class extends oo{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Ac(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let f=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+u)+(l-o)/u;f*=h,d*=h,s(a,o,f,d)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var Ua=new U,El=new Ac,wl=new Ac,Tl=new Ac,ir=class extends Wn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new U){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Ua.subVectors(s[0],s[1]).add(s[0]),c=Ua);let u=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Ua.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ua),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),El.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,x,m),wl.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,x,m),Tl.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(El.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),wl.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Tl.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(El.calc(l),wl.calc(l),Tl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new U().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Ou(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function a_(i,t){let e=1-i;return e*e*t}function o_(i,t){return 2*(1-i)*i*t}function l_(i,t){return i*i*t}function Fr(i,t,e,n){return a_(i,t)+o_(i,e)+l_(i,n)}function c_(i,t){let e=1-i;return e*e*e*t}function h_(i,t){let e=1-i;return 3*e*e*i*t}function u_(i,t){return 3*(1-i)*i*i*t}function f_(i,t){return i*i*i*t}function Or(i,t,e,n,s){return c_(i,t)+h_(i,e)+u_(i,n)+f_(i,s)}var nc=class extends Wn{constructor(t=new Mt,e=new Mt,n=new Mt,s=new Mt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Mt){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Or(t,s.x,r.x,a.x,o.x),Or(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ic=class extends Wn{constructor(t=new U,e=new U,n=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new U){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Or(t,s.x,r.x,a.x,o.x),Or(t,s.y,r.y,a.y,o.y),Or(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},sc=class extends Wn{constructor(t=new Mt,e=new Mt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Mt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Mt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},rc=class extends Wn{constructor(t=new U,e=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new U){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new U){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ac=class extends Wn{constructor(t=new Mt,e=new Mt,n=new Mt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Mt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Fr(t,s.x,r.x,a.x),Fr(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},lo=class extends Wn{constructor(t=new U,e=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new U){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Fr(t,s.x,r.x,a.x),Fr(t,s.y,r.y,a.y),Fr(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},oc=class extends Wn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Mt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(Ou(o,l.x,c.x,h.x,u.x),Ou(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Mt().fromArray(s))}return this}},d_=Object.freeze({__proto__:null,ArcCurve:ec,CatmullRomCurve3:ir,CubicBezierCurve:nc,CubicBezierCurve3:ic,EllipseCurve:oo,LineCurve:sc,LineCurve3:rc,QuadraticBezierCurve:ac,QuadraticBezierCurve3:lo,SplineCurve:oc});var co=class i extends xe{constructor(t=[new Mt(0,-.5),new Mt(.5,0),new Mt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=sn(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/e,u=new U,f=new Mt,d=new U,g=new U,x=new U,m=0,p=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,d.x=p*1,d.y=-m,d.z=p*0,x.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),l.push(d.x,d.y,d.z),x.copy(g)}for(let y=0;y<=e;y++){let v=n+y*h*s,w=Math.sin(v),L=Math.cos(v);for(let T=0;T<=t.length-1;T++){u.x=t[T].x*w,u.y=t[T].y,u.z=t[T].x*L,a.push(u.x,u.y,u.z),f.x=y/e,f.y=T/(t.length-1),o.push(f.x,f.y);let I=l[3*T+0]*w,k=l[3*T+1],S=l[3*T+0]*L;c.push(I,k,S)}}for(let y=0;y<e;y++)for(let v=0;v<t.length-1;v++){let w=v+y*t.length,L=w,T=w+t.length,I=w+t.length+1,k=w+1;r.push(L,T,k),r.push(I,k,T)}this.setIndex(r),this.setAttribute("position",new ae(a,3)),this.setAttribute("uv",new ae(o,2)),this.setAttribute("normal",new ae(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var ho=class i extends xe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new U,h=new Mt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=n+u/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[f]/t+1)/2,h.y=(a[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ae(a,3)),this.setAttribute("normal",new ae(o,3)),this.setAttribute("uv",new ae(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},fn=class i extends xe{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],g=0,x=[],m=n/2,p=0;y(),a===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new ae(u,3)),this.setAttribute("normal",new ae(f,3)),this.setAttribute("uv",new ae(d,2));function y(){let w=new U,L=new U,T=0,I=(e-t)/n;for(let k=0;k<=r;k++){let S=[],A=k/r,V=A*(e-t)+t;for(let J=0;J<=s;J++){let ft=J/s,O=ft*l+o,X=Math.sin(O),Q=Math.cos(O);L.x=V*X,L.y=-A*n+m,L.z=V*Q,u.push(L.x,L.y,L.z),w.set(X,I,Q).normalize(),f.push(w.x,w.y,w.z),d.push(ft,1-A),S.push(g++)}x.push(S)}for(let k=0;k<s;k++)for(let S=0;S<r;S++){let A=x[S][k],V=x[S+1][k],J=x[S+1][k+1],ft=x[S][k+1];h.push(A,V,ft),h.push(V,J,ft),T+=6}c.addGroup(p,T,0),p+=T}function v(w){let L=g,T=new Mt,I=new U,k=0,S=w===!0?t:e,A=w===!0?1:-1;for(let J=1;J<=s;J++)u.push(0,m*A,0),f.push(0,A,0),d.push(.5,.5),g++;let V=g;for(let J=0;J<=s;J++){let O=J/s*l+o,X=Math.cos(O),Q=Math.sin(O);I.x=S*Q,I.y=m*A,I.z=S*X,u.push(I.x,I.y,I.z),f.push(0,A,0),T.x=X*.5+.5,T.y=Q*.5*A+.5,d.push(T.x,T.y),g++}for(let J=0;J<s;J++){let ft=L+J,O=V+J;w===!0?h.push(O,O+1,ft):h.push(O+1,O,ft),k+=3}c.addGroup(p,k,w===!0?1:2),p+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},_i=class i extends fn{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},lc=class i extends xe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new ae(r,3)),this.setAttribute("normal",new ae(r.slice(),3)),this.setAttribute("uv",new ae(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){let v=new U,w=new U,L=new U;for(let T=0;T<e.length;T+=3)d(e[T+0],v),d(e[T+1],w),d(e[T+2],L),l(v,w,L,y)}function l(y,v,w,L){let T=L+1,I=[];for(let k=0;k<=T;k++){I[k]=[];let S=y.clone().lerp(w,k/T),A=v.clone().lerp(w,k/T),V=T-k;for(let J=0;J<=V;J++)J===0&&k===T?I[k][J]=S:I[k][J]=S.clone().lerp(A,J/V)}for(let k=0;k<T;k++)for(let S=0;S<2*(T-k)-1;S++){let A=Math.floor(S/2);S%2===0?(f(I[k][A+1]),f(I[k+1][A]),f(I[k][A])):(f(I[k][A+1]),f(I[k+1][A+1]),f(I[k+1][A]))}}function c(y){let v=new U;for(let w=0;w<r.length;w+=3)v.x=r[w+0],v.y=r[w+1],v.z=r[w+2],v.normalize().multiplyScalar(y),r[w+0]=v.x,r[w+1]=v.y,r[w+2]=v.z}function h(){let y=new U;for(let v=0;v<r.length;v+=3){y.x=r[v+0],y.y=r[v+1],y.z=r[v+2];let w=m(y)/2/Math.PI+.5,L=p(y)/Math.PI+.5;a.push(w,1-L)}g(),u()}function u(){for(let y=0;y<a.length;y+=6){let v=a[y+0],w=a[y+2],L=a[y+4],T=Math.max(v,w,L),I=Math.min(v,w,L);T>.9&&I<.1&&(v<.2&&(a[y+0]+=1),w<.2&&(a[y+2]+=1),L<.2&&(a[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function d(y,v){let w=y*3;v.x=t[w+0],v.y=t[w+1],v.z=t[w+2]}function g(){let y=new U,v=new U,w=new U,L=new U,T=new Mt,I=new Mt,k=new Mt;for(let S=0,A=0;S<r.length;S+=9,A+=6){y.set(r[S+0],r[S+1],r[S+2]),v.set(r[S+3],r[S+4],r[S+5]),w.set(r[S+6],r[S+7],r[S+8]),T.set(a[A+0],a[A+1]),I.set(a[A+2],a[A+3]),k.set(a[A+4],a[A+5]),L.copy(y).add(v).add(w).divideScalar(3);let V=m(L);x(T,A+0,y,V),x(I,A+2,v,V),x(k,A+4,w,V)}}function x(y,v,w,L){L<0&&y.x===1&&(a[v]=y.x-1),w.x===0&&w.z===0&&(a[v]=L/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var uo=class i extends lc{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var fo=class i extends xe{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],h=[],u=t,f=(e-t)/s,d=new U,g=new Mt;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){let p=r+m/n*a;d.x=u*Math.cos(p),d.y=u*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,h.push(g.x,g.y)}u+=f}for(let x=0;x<s;x++){let m=x*(n+1);for(let p=0;p<n;p++){let y=p+m,v=y,w=y+n+1,L=y+n+2,T=y+1;o.push(v,w,T),o.push(w,L,T)}}this.setIndex(o),this.setAttribute("position",new ae(l,3)),this.setAttribute("normal",new ae(c,3)),this.setAttribute("uv",new ae(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var vi=class i extends xe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new U,f=new U,d=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let y=[],v=p/n,w=0;p===0&&a===0?w=.5/e:p===n&&l===Math.PI&&(w=-.5/e);for(let L=0;L<=e;L++){let T=L/e;u.x=-t*Math.cos(s+T*r)*Math.sin(a+v*o),u.y=t*Math.cos(a+v*o),u.z=t*Math.sin(s+T*r)*Math.sin(a+v*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),m.push(T+w,1-v),y.push(c++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){let v=h[p][y+1],w=h[p][y],L=h[p+1][y],T=h[p+1][y+1];(p!==0||a>0)&&d.push(v,w,T),(p!==n-1||l<Math.PI)&&d.push(w,L,T)}this.setIndex(d),this.setAttribute("position",new ae(g,3)),this.setAttribute("normal",new ae(x,3)),this.setAttribute("uv",new ae(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var po=class i extends xe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],l=[],c=[],h=new U,u=new U,f=new U;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){let x=g/s*r,m=d/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(x),u.y=(t+e*Math.cos(m))*Math.sin(x),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){let x=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,y=(s+1)*d+g;a.push(x,m,y),a.push(m,p,y)}this.setIndex(a),this.setAttribute("position",new ae(o,3)),this.setAttribute("normal",new ae(l,3)),this.setAttribute("uv",new ae(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Hr=class i extends xe{constructor(t=new lo(new U(-1,-1,0),new U(-1,1,0),new U(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new U,l=new U,c=new Mt,h=new U,u=[],f=[],d=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new ae(u,3)),this.setAttribute("normal",new ae(f,3)),this.setAttribute("uv",new ae(d,2));function x(){for(let v=0;v<e;v++)m(v);m(r===!1?e:0),y(),p()}function m(v){h=t.getPointAt(v/e,h);let w=a.normals[v],L=a.binormals[v];for(let T=0;T<=s;T++){let I=T/s*Math.PI*2,k=Math.sin(I),S=-Math.cos(I);l.x=S*w.x+k*L.x,l.y=S*w.y+k*L.y,l.z=S*w.z+k*L.z,l.normalize(),f.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function p(){for(let v=1;v<=e;v++)for(let w=1;w<=s;w++){let L=(s+1)*(v-1)+(w-1),T=(s+1)*v+(w-1),I=(s+1)*v+w,k=(s+1)*(v-1)+w;g.push(L,T,k),g.push(T,I,k)}}function y(){for(let v=0;v<=e;v++)for(let w=0;w<=s;w++)c.x=v/e,c.y=w/s,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new d_[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var cs=class extends gi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new It(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$u,this.normalScale=new Mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Sc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Na(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function p_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var sr=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},cc=class extends sr{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Vh,endingEnd:Vh}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Gh:r=t,o=2*e-n;break;case Wh:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Gh:a=t,l=2*n-e;break;case Wh:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-e)/(s-e),x=g*g,m=x*g,p=-f*m+2*f*x-f*g,y=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,v=(-1-d)*m+(1.5+d)*x+.5*g,w=d*m-d*x;for(let L=0;L!==o;++L)r[L]=p*a[h+L]+y*a[c+L]+v*a[l+L]+w*a[u+L];return r}},hc=class extends sr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),u=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*u+a[l+f]*h;return r}},uc=class extends sr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Xn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Na(e,this.TimeBufferType),this.values=Na(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Na(t.times,Array),values:Na(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new uc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new hc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new cc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Oa:e=this.InterpolantFactoryMethodDiscrete;break;case za:e=this.InterpolantFactoryMethodLinear;break;case Qo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Oa;case this.InterpolantFactoryMethodLinear:return za;case this.InterpolantFactoryMethodSmooth:return Qo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&p_(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Qo,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let u=o*n,f=u-n,d=u+n;for(let g=0;g!==n;++g){let x=e[u+g];if(x!==e[f+g]||x!==e[d+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*n,f=a*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Xn.prototype.TimeBufferType=Float32Array;Xn.prototype.ValueBufferType=Float32Array;Xn.prototype.DefaultInterpolation=za;var hs=class extends Xn{};hs.prototype.ValueTypeName="bool";hs.prototype.ValueBufferType=Array;hs.prototype.DefaultInterpolation=Oa;hs.prototype.InterpolantFactoryMethodLinear=void 0;hs.prototype.InterpolantFactoryMethodSmooth=void 0;var fc=class extends Xn{};fc.prototype.ValueTypeName="color";var dc=class extends Xn{};dc.prototype.ValueTypeName="number";var pc=class extends sr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)Dn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Vr=class extends Xn{InterpolantFactoryMethodLinear(t){return new pc(this.times,this.values,this.getValueSize(),t)}};Vr.prototype.ValueTypeName="quaternion";Vr.prototype.DefaultInterpolation=za;Vr.prototype.InterpolantFactoryMethodSmooth=void 0;var us=class extends Xn{};us.prototype.ValueTypeName="string";us.prototype.ValueBufferType=Array;us.prototype.DefaultInterpolation=Oa;us.prototype.InterpolantFactoryMethodLinear=void 0;us.prototype.InterpolantFactoryMethodSmooth=void 0;var mc=class extends Xn{};mc.prototype.ValueTypeName="vector";var gc=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],g=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}},m_=new gc,xc=class{constructor(t){this.manager=t!==void 0?t:m_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};xc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Gr=class extends Xe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new It(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}},rr=class extends Gr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Xe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new It(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Al=new ue,zu=new U,Bu=new U,mo=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Mt(512,512),this.map=null,this.mapPass=null,this.matrix=new ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Br,this._frameExtents=new Mt(1,1),this._viewportCount=1,this._viewports=[new je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;zu.setFromMatrixPosition(t.matrixWorld),e.position.copy(zu),Bu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Bu),e.updateMatrixWorld(),Al.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Al),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Al)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},_c=class extends mo{constructor(){super(new rn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,n=Ga*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},go=class extends Gr{constructor(t,e,n=0,s=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Xe.DEFAULT_UP),this.updateMatrix(),this.target=new Xe,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new _c}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var vc=class extends mo{constructor(){super(new er(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ar=class extends Gr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xe.DEFAULT_UP),this.updateMatrix(),this.target=new Xe,this.shadow=new vc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Rc="\\[\\]\\.:\\/",g_=new RegExp("["+Rc+"]","g"),Cc="[^"+Rc+"]",x_="[^"+Rc.replace("\\.","")+"]",__=/((?:WC+[\/:])*)/.source.replace("WC",Cc),v_=/(WCOD+)?/.source.replace("WCOD",x_),y_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Cc),M_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Cc),b_=new RegExp("^"+__+v_+y_+M_+"$"),S_=["material","materials","bones","map"],yc=class{constructor(t,e,n){let s=n||Pe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Pe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(g_,"")}static parseTrackName(t){let e=b_.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);S_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Pe.Composite=yc;Pe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pe.prototype.GetterByBindingType=[Pe.prototype._getValue_direct,Pe.prototype._getValue_array,Pe.prototype._getValue_arrayElement,Pe.prototype._getValue_toArray];Pe.prototype.SetterByBindingTypeAndVersioning=[[Pe.prototype._setValue_direct,Pe.prototype._setValue_direct_setNeedsUpdate,Pe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pe.prototype._setValue_array,Pe.prototype._setValue_array_setNeedsUpdate,Pe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pe.prototype._setValue_arrayElement,Pe.prototype._setValue_arrayElement_setNeedsUpdate,Pe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pe.prototype._setValue_fromArray,Pe.prototype._setValue_fromArray_setNeedsUpdate,Pe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var xv=new Float32Array(1);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Mc}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Mc);function So(i){let t=i>>>0;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var Le=(i,t,e)=>Math.max(t,Math.min(e,i)),wn=(i,t,e)=>i+(t-i)*e,Eo=i=>(i=Le(i,0,1),i*i*(3-2*i));function yi(i,t){return((t-i+Math.PI)%(2*Math.PI)+2*Math.PI)%(2*Math.PI)-Math.PI}var bn=(i,t)=>1-Math.exp(-i*t),yo=new It;function et(i,t=1){return yo.setHex(i),[yo.r*t,yo.g*t,yo.b*t]}var cf=new U,hf=new Dn,uf=new U,ff=new js;function gt(i,t,e,n=1,s=1,r=1,a=0,o=0,l=0){return cf.set(i,t,e),ff.set(o,a,l,"YXZ"),hf.setFromEuler(ff),uf.set(n,s,r),new ue().compose(cf,hf,uf)}var _e=class{constructor(){this.p=[],this.n=[],this.c=[],this.u=[],this.i=[]}get count(){return this.p.length/3}quad(t,e,n,s,r,a){let o=this.count,l=e[0]-t[0],c=e[1]-t[1],h=e[2]-t[2],u=n[0]-t[0],f=n[1]-t[1],d=n[2]-t[2],g=c*d-h*f,x=h*u-l*d,m=l*f-c*u,p=Math.hypot(g,x,m)||1;g/=p,x/=p,m/=p;let y=[t,e,n,s],v=Array.isArray(r[0]);for(let w=0;w<4;w++){this.p.push(y[w][0],y[w][1],y[w][2]),this.n.push(g,x,m);let L=v?r[w]:r;this.c.push(L[0],L[1],L[2]),a?this.u.push(a[w][0],a[w][1]):this.u.push(w===1||w===2?1:0,w>=2?1:0)}this.i.push(o,o+1,o+2,o,o+2,o+3)}box(t,e,n,s,r,a,o,l){this.quad([t,n,a],[e,n,a],[e,s,a],[t,s,a],o),this.quad([e,n,r],[t,n,r],[t,s,r],[e,s,r],o),this.quad([e,n,a],[e,n,r],[e,s,r],[e,s,a],o),this.quad([t,n,r],[t,n,a],[t,s,a],[t,s,r],o),this.quad([t,s,a],[e,s,a],[e,s,r],[t,s,r],l||o)}bill(t,e,n,s,r,a){let o=this.count,l=[[0,0],[1,0],[1,1],[0,1]];for(let c=0;c<4;c++)this.p.push(t,e,n),this.n.push(s,r,0),this.c.push(a[0],a[1],a[2]),this.u.push(l[c][0],l[c][1]);this.i.push(o,o+1,o+2,o,o+2,o+3)}add(t,e,n){let s=t.index?t.toNonIndexed():t,r=s.attributes.position,a=s.attributes.normal,o=s.attributes.uv,l=new re().getNormalMatrix(e),c=new U,h=new U,u=this.count,f=typeof n=="function";for(let d=0;d<r.count;d++){c.fromBufferAttribute(r,d);let g=f?n(c):n;h.copy(c).applyMatrix4(e),this.p.push(h.x,h.y,h.z),h.fromBufferAttribute(a,d).applyMatrix3(l).normalize(),this.n.push(h.x,h.y,h.z),this.c.push(g[0],g[1],g[2]),o?this.u.push(o.getX(d),o.getY(d)):this.u.push(0,0),this.i.push(u+d)}return this}worldUV(t){for(let e=0,n=0;e<this.p.length;e+=3,n+=2)this.u[n]=this.p[e]*t,this.u[n+1]=this.p[e+2]*t;return this}build(){let t=new xe;return t.setAttribute("position",new ae(this.p,3)),t.setAttribute("normal",new ae(this.n,3)),t.setAttribute("color",new ae(this.c,3)),t.setAttribute("uv",new ae(this.u,2)),t.setIndex(this.i),t.computeBoundingSphere(),t.computeBoundingBox(),t}},E_=new U(0,1,0),Mo=new U,df={};function Be(i,t,e,n,s,r=5){Mo.set(e[0]-t[0],e[1]-t[1],e[2]-t[2]);let a=Mo.length();Mo.normalize();let o=new Dn().setFromUnitVectors(E_,Mo),l=new ue().compose(new U((t[0]+e[0])/2,(t[1]+e[1])/2,(t[2]+e[2])/2),o,new U(n,a,n)),c=df[r]||(df[r]=new fn(1,1,1,r,1,!0));i.add(c,l,s)}function Kn(i,t,e,n={}){let s=document.createElement("canvas");s.width=i,s.height=t;let r=s.getContext("2d");e(r,i,t);let a=new ls(s);return n.repeat!==!1&&(a.wrapS=a.wrapT=ss),n.srgb!==!1&&(a.colorSpace=Ne),a.anisotropy=n.aniso||4,a}var bo=class{constructor(t=24){this.cell=t,this.map=new Map,this.stamp=0,this.out=[]}_ins(t,e,n,s,r){let a=this.cell;for(let o=Math.floor(e/a);o<=Math.floor(n/a);o++)for(let l=Math.floor(s/a);l<=Math.floor(r/a);l++){let c=(o+512)*2048+(l+512),h=this.map.get(c);h||this.map.set(c,h=[]),h.push(t)}}box(t,e,n,s,r=0){let a={t:0,x0:t,x1:e,z0:n,z1:s,layer:r,s:0};return this._ins(a,t,e,n,s),a}circle(t,e,n,s=0){let r={t:1,x:t,z:e,r:n,layer:s,s:0};return this._ins(r,t-n,t+n,e-n,e+n),r}query(t,e,n){let s=this.cell,r=this.out;r.length=0;let a=++this.stamp;for(let o=Math.floor((t-n)/s);o<=Math.floor((t+n)/s);o++)for(let l=Math.floor((e-n)/s);l<=Math.floor((e+n)/s);l++){let c=this.map.get((o+512)*2048+(l+512));if(c)for(let h=0;h<c.length;h++){let u=c[h];u.s!==a&&(u.s=a,r.push(u))}}return r}resolve(t,e,n,s=.2){let r=0,a=this.query(t.x,t.z,e+.2);for(let o=0;o<a.length;o++){let l=a[o];if(l.layer&&l.layer!==n)continue;let c,h,u;if(l.t===0){let d=Le(t.x,l.x0,l.x1),g=Le(t.z,l.z0,l.z1),x=t.x-d,m=t.z-g,p=x*x+m*m;if(p>e*e)continue;if(p>1e-8){let y=Math.sqrt(p);c=x/y,h=m/y,u=e-y}else{let y=t.x-l.x0,v=l.x1-t.x,w=t.z-l.z0,L=l.z1-t.z,T=Math.min(y,v,w,L);T===y?(c=-1,h=0,u=y+e):T===v?(c=1,h=0,u=v+e):T===w?(c=0,h=-1,u=w+e):(c=0,h=1,u=L+e)}}else{let d=t.x-l.x,g=t.z-l.z,x=d*d+g*g,m=e+l.r;if(x>m*m)continue;let p=Math.sqrt(x)||1e-4;c=d/p,h=g/p,u=m-p}t.x+=c*u,t.z+=h*u;let f=t.vx*c+t.vz*h;f<0&&(t.vx-=f*c*(1+s),t.vz-=f*h*(1+s),-f>r&&(r=-f))}return r}near(t,e,n){let s=this.query(t,e,n);for(let r=0;r<s.length;r++){let a=s[r];if(a.t===0){let o=t-Le(t,a.x0,a.x1),l=e-Le(e,a.z0,a.z1);if(o*o+l*l<n*n)return!0}else if(Math.hypot(t-a.x,e-a.z)<n+a.r)return!0}return!1}blocked(t,e){let n=this.query(t,e,.1);for(let s=0;s<n.length;s++){let r=n[s];if(r.t===0&&!r.layer&&t>r.x0&&t<r.x1&&e>r.z0&&e<r.z1)return!0}return!1}};var w_="varying vec2 vUv; void main(){ vUv = position.xy*0.5+0.5; gl_Position = vec4(position.xy,0.0,1.0); }",wo=(i,t)=>new Ge({vertexShader:w_,fragmentShader:i,uniforms:t,depthTest:!1,depthWrite:!1}),T_=`
uniform sampler2D tD; uniform vec2 uTexel; uniform float uThr; varying vec2 vUv;
void main(){
  vec3 c = texture2D(tD, vUv + uTexel*vec2(-1.,-1.)).rgb + texture2D(tD, vUv + uTexel*vec2(1.,-1.)).rgb
         + texture2D(tD, vUv + uTexel*vec2(-1.,1.)).rgb + texture2D(tD, vUv + uTexel*vec2(1.,1.)).rgb;
  c = min(c*0.25, vec3(14.0));
  float br = max(c.r, max(c.g, c.b));
  float w = max(br - uThr, 0.0) / max(br, 1e-4);
  gl_FragColor = vec4(c*w, 1.0);
}`,A_=`
uniform sampler2D tD; uniform vec2 uTexel; varying vec2 vUv;
void main(){
  vec3 c = texture2D(tD, vUv).rgb*4.0;
  c += texture2D(tD, vUv + uTexel*vec2(-1.,-1.)).rgb; c += texture2D(tD, vUv + uTexel*vec2(1.,-1.)).rgb;
  c += texture2D(tD, vUv + uTexel*vec2(-1.,1.)).rgb;  c += texture2D(tD, vUv + uTexel*vec2(1.,1.)).rgb;
  gl_FragColor = vec4(c*0.125, 1.0);
}`,R_=`
uniform sampler2D tD; uniform sampler2D tAdd; uniform vec2 uTexel; varying vec2 vUv;
void main(){
  vec2 t = uTexel;
  vec3 c = texture2D(tD, vUv + vec2(-2.*t.x,0.)).rgb + texture2D(tD, vUv + vec2(2.*t.x,0.)).rgb
         + texture2D(tD, vUv + vec2(0.,-2.*t.y)).rgb + texture2D(tD, vUv + vec2(0.,2.*t.y)).rgb;
  c += 2.0*(texture2D(tD, vUv + vec2(-t.x,t.y)).rgb + texture2D(tD, vUv + vec2(t.x,t.y)).rgb
          + texture2D(tD, vUv + vec2(-t.x,-t.y)).rgb + texture2D(tD, vUv + vec2(t.x,-t.y)).rgb);
  gl_FragColor = vec4(c/12.0 + texture2D(tAdd, vUv).rgb, 1.0);
}`,C_=`
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
}`,To=class{constructor(t){this.r=t;let e=t.extensions;this.hdr=t.capabilities.isWebGL2&&(e.has("EXT_color_buffer_float")||e.has("EXT_color_buffer_half_float")),this.type=this.hdr?rs:$n,this.cam=new er(-1,1,1,-1,0,1);let n=new xe;n.setAttribute("position",new ae([-1,-1,0,3,-1,0,-1,3,0],3)),this.tri=new le(n,null),this.tri.frustumCulled=!1,this.scene=new as,this.scene.add(this.tri),this.mPre=wo(T_,{tD:{value:null},uTexel:{value:new Mt},uThr:{value:this.hdr?1:.72}}),this.mDown=wo(A_,{tD:{value:null},uTexel:{value:new Mt}}),this.mUp=wo(R_,{tD:{value:null},tAdd:{value:null},uTexel:{value:new Mt}}),this.mFinal=wo(C_,{tScene:{value:null},tBloom:{value:null},uBloom:{value:.65},uTime:{value:0},uExp:{value:.9},uFlash:{value:0},uSat:{value:1.12},uTint:{value:new It(1,1,1)}}),this.black=new so(new Uint8Array([0,0,0,255]),1,1),this.black.needsUpdate=!0,this.levels=5,this.bloom=!0,this.down=[],this.up=[],this.sceneRT=null}setSize(t,e,n){this.sceneRT&&this.sceneRT.dispose(),this.down.forEach(o=>o.dispose()),this.up.forEach(o=>o.dispose()),this.down=[],this.up=[];let s={type:this.type,minFilter:yn,magFilter:yn,depthBuffer:!1};this.sceneRT=new In(t,e,Object.assign({},s,{depthBuffer:!0,samples:n||0}));let r=t,a=e;for(let o=0;o<this.levels;o++)r=Math.max(2,r>>1),a=Math.max(2,a>>1),this.down.push(new In(r,a,s)),o<this.levels-1&&this.up.push(new In(r,a,s));this.w=t,this.h=e}pass(t,e){this.tri.material=t,this.r.setRenderTarget(e),this.r.render(this.scene,this.cam)}render(t,e,n){let s=this.r;s.setRenderTarget(this.sceneRT),s.render(t,e);let r=this.black;if(this.bloom){let o=this.levels;this.mPre.uniforms.tD.value=this.sceneRT.texture,this.mPre.uniforms.uTexel.value.set(.5/this.w,.5/this.h),this.pass(this.mPre,this.down[0]);for(let c=1;c<o;c++){let h=this.down[c-1];this.mDown.uniforms.tD.value=h.texture,this.mDown.uniforms.uTexel.value.set(.5/h.width,.5/h.height),this.pass(this.mDown,this.down[c])}let l=this.down[o-1];for(let c=o-2;c>=0;c--)this.mUp.uniforms.tD.value=l.texture,this.mUp.uniforms.tAdd.value=this.down[c].texture,this.mUp.uniforms.uTexel.value.set(.5/l.width,.5/l.height),this.pass(this.mUp,this.up[c]),l=this.up[c];r=l.texture}let a=this.mFinal.uniforms;a.tScene.value=this.sceneRT.texture,a.tBloom.value=r,a.uTime.value=n,this.pass(this.mFinal,null)}};var Ze=[-280,-210,-140,-70,70,140,210,280],Je=[-180,-120,-60,0,60,120,180],Mi=i=>i===140?11:7,Pc=[{z:-60,name:"\u041A\u043E\u043C\u043C\u0443\u043D\u0430\u043B\u044C\u043D\u044B\u0439 \u043C\u043E\u0441\u0442"},{z:120,name:"\u0411\u0443\u0433\u0440\u0438\u043D\u0441\u043A\u0438\u0439 \u043C\u043E\u0441\u0442"}],lr=296,cr=196,pf=[[-273,-217],[-203,-147],[-133,-77],[77,129],[151,203],[217,273]],mf=[[-173,-127],[-113,-67],[-53,-7],[7,53],[67,113],[127,173]],P_=[["zone","ind","panel","palace","classic","panel"],["ind","ind","panel","classic","classic","panel"],["panel","panel","classic","park","opera","classic"],["panel","garages","panel","classic","classic","panel"],["panel","panel","fpark","panel","classic","mall"],["vatutina","panel","panel","panel","panel","panel"]],dn={start:[147.4,14],arkasha:[152.4,-30],max:[127.5,90],dima:[57.5,30],igor:[218.6,30],geisler:[103,-133],pasha:[177,68.6],nikita:[127.6,17],kos:[-215.6,-143.5],artem:[245,-128.6],sanya:[-78.5,30],misha:[-105,70.5],garage:[-149.5,22],shop:[218.6,90],vatutina:[-234,171.5],gate:[-215.6,-150],artifact:[-262,-152],tower1:[-78.5,-128.5],tower2:[201.5,51.5],tower3:[-148.5,111.5],leak1:[61,-80],leak2:[103,-9.5],leak3:[146.5,31]},xf=[{x:180,z:-30,r:45,name:"\u041E\u043F\u0435\u0440\u043D\u044B\u0439 \u0442\u0435\u0430\u0442\u0440"},{x:140,z:30,r:22,name:"\u0427\u0430\u0441\u043E\u0432\u043D\u044F \u043D\u0430 \u041A\u0440\u0430\u0441\u043D\u043E\u043C \u043F\u0440\u043E\u0441\u043F\u0435\u043A\u0442\u0435"},{x:0,z:120,r:50,name:"\u0411\u0443\u0433\u0440\u0438\u043D\u0441\u043A\u0438\u0439 \u043C\u043E\u0441\u0442"},{x:0,z:-60,r:50,name:"\u041A\u043E\u043C\u043C\u0443\u043D\u0430\u043B\u044C\u043D\u044B\u0439 \u043C\u043E\u0441\u0442"},{x:-245,z:-150,r:40,name:"\u041F\u0440\u043E\u043C\u0437\u043E\u043D\u0430. \u0422\u0435\u0440\u0440\u0438\u0442\u043E\u0440\u0438\u044F \u041A\u043E\u0441\u0430"},{x:-175,z:30,r:32,name:"\u0413\u0430\u0440\u0430\u0436\u0438. \u0422\u0443\u0442 \u0441\u0438\u0434\u044F\u0442 \xAB\u0442\u0438\u043F\u044B\xBB"},{x:-245,z:150,r:34,name:"\u0412\u0430\u0442\u0443\u0442\u0438\u043D\u0430. \u0414\u0430\u043B\u0435\u043A\u043E\u0432\u0430\u0442\u043E"},{x:103,z:-30,r:30,name:"\u041C\u0438\u0445\u0430\u0439\u043B\u043E\u0432\u0441\u043A\u0430\u044F \u043D\u0430\u0431\u0435\u0440\u0435\u0436\u043D\u0430\u044F"},{x:103,z:-150,r:30,name:"\u0414\u0432\u043E\u0440\u0435\u0446 \u0413\u0430\u0439\u0441\u043B\u0435\u0440\u0430"},{x:-105,z:90,r:30,name:"\u041F\u0430\u0440\u043A. \u0411\u0430\u0442\u044F \u043D\u0430 \u043F\u0440\u0438\u0440\u043E\u0434\u0435"},{x:245,z:90,r:32,name:"\u0422\u0426 \xAB\u0422\u0435\u0445\u043D\u043E\u0420\u0430\u043A\xBB"}];function Lc(i){return i>=52?0:i<=40?-3:-3+3*(i-40)/12}function Vi(i){let t=Math.abs(i.x);if(t<52){for(let n=0;n<2;n++)if(Math.abs(i.z-Pc[n].z)<8.6&&i.y>-1.5)return i.layer=1,0}let e=Lc(t);return i.layer=e<-1.5?2:0,e}function Ic(i,t){if(Math.abs(t)<=187){for(let n=0;n<Ze.length;n++)if(Math.abs(i-Ze[n])<Mi(Ze[n]))return!0}let e=Math.abs(i);for(let n=0;n<Je.length;n++)if(Math.abs(t-Je[n])<7&&(e>=63&&e<=287||e<63&&(Je[n]===-60||Je[n]===120)))return!0;return!1}var Wr={value:.0052},L_=`
attribute vec3 color; varying vec2 vUv; varying vec3 vC; varying float vF; uniform float uFog;
void main(){ vec4 mv = modelViewMatrix*vec4(position,1.0); gl_Position = projectionMatrix*mv; vUv = uv; vC = color; float d = length(mv.xyz); vF = exp(-uFog*uFog*d*d); }`,Ao=(i,t={},e=L_)=>new Ge({vertexShader:e,fragmentShader:i,uniforms:Object.assign({uFog:Wr},t),blending:Gn,transparent:!0,depthWrite:!1});function Dc(){return new Ge({uniforms:{uScale:hr,uFog:Wr},vertexShader:`attribute float aSize; attribute vec3 aColor; varying vec3 vC; uniform float uScale; uniform float uFog;
      void main(){ vec4 mv = modelViewMatrix*vec4(position,1.0); gl_Position = projectionMatrix*mv; float d = max(-mv.z, 0.1);
      gl_PointSize = min(aSize*uScale/d, 200.0); vC = aColor*exp(-uFog*uFog*d*d*0.5); }`,fragmentShader:"varying vec3 vC; void main(){ float r = length(gl_PointCoord-0.5)*2.0; float a = pow(max(1.0-r,0.0),2.4)*0.75 + (1.0-smoothstep(0.0,0.22,r))*0.9; gl_FragColor = vec4(vC*a,1.0); }",blending:Gn,transparent:!0,depthWrite:!1})}var hr={value:800};function I_(i,t){return i.onBeforeCompile=e=>{e.uniforms.uGlow=t,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
varying float vWY;`).replace("#include <project_vertex>",`#include <project_vertex>
{ vec4 wp = vec4(transformed,1.0);
#ifdef USE_INSTANCING
 wp = instanceMatrix*wp;
#endif
 vWY = (modelMatrix*wp).y; }`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
varying float vWY; uniform vec3 uGlow;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
 totalEmissiveRadiance += diffuseColor.rgb * uGlow * exp(-abs(vWY)*0.13);`)},i}var D_={value:new U(.26,.13,.05)};function Hi(i){return I_(new cs(i),D_)}function gf(i,t){let s=document.createElement("canvas");s.width=s.height=512;let r=s.getContext("2d");r.fillStyle="#000",r.fillRect(0,0,512,512);let a=["#ffcf8a","#ffb866","#ffe2b0","#ffd9a0","#ffc070","#fff0d0","#bfe0ff","#8fb4ff","#d49cff","#ff9f6a"],o=Kn(512,512,c=>{for(let h=0;h<8;h++)for(let u=0;u<8;u++){let f=u*64,d=h*64,g,x,m,p;if(i===0?(c.fillStyle=["#c3c6cc","#b9bcc2","#cdcfd3","#bfc2c8"][Math.floor(t()*4)],c.fillRect(f,d,64,64),c.strokeStyle="#8b8f97",c.lineWidth=2,c.strokeRect(f+1,d+1,62,62),g=f+14,x=d+12,m=36,p=28,u%4===1&&(c.fillStyle="#a4a8b0",c.fillRect(f+8,d+42,48,16),c.fillStyle="#8d9199",c.fillRect(f+8,d+42,48,3)),c.fillStyle="#e4e6ea",c.fillRect(g-2,x-2,m+4,p+4)):(c.fillStyle=["#d6d0c6","#cfc9be","#dcd6cc"][Math.floor(t()*3)],c.fillRect(f,d,64,64),c.fillStyle="#b3ad9f",c.fillRect(f,d+58,64,4),c.fillStyle="#c4beb1",c.fillRect(f,d,5,64),g=f+22,x=d+10,m=24,p=40,c.fillStyle="#efeadf",c.fillRect(g-3,x-3,m+6,p+6),c.fillStyle="#e2dccf",c.fillRect(g-5,x+p+3,m+10,3)),t()<(i===0?.36:.42)){let v=a[Math.floor(t()*t()*a.length)];c.fillStyle=v,c.fillRect(g,x,m,p);let w=r.createLinearGradient(0,x,0,x+p);w.addColorStop(0,v),w.addColorStop(1,"#6b4a2a"),r.fillStyle=w,r.fillRect(g,x,m,p),t()<.5&&(r.fillStyle="rgba(0,0,0,0.45)",r.fillRect(g,x,m*(.2+t()*.3),p)),r.fillStyle="#000",r.fillRect(g+m/2-1,x,2,p)}else c.fillStyle=["#18202e","#1d2738","#141a26"][Math.floor(t()*3)],c.fillRect(g,x,m,p);c.fillStyle="rgba(40,44,52,0.9)",c.fillRect(g+m/2-1,x,2,p)}}),l=new ls(s);return l.wrapS=l.wrapT=ss,l.colorSpace=Ne,l.anisotropy=4,{map:o,emissiveMap:l}}function _f(i){let t=So(20261119),e=_=>_[Math.floor(t()*_.length)],n=new bo,s={fa:new _e,fb:new _e,pl:new _e,em:new _e,gr:new _e,rd:new _e,br:new _e,brE:new _e,sg:new _e,pool:new _e,cone:new _e,streak:new _e},r=[],a=[],o=[],l=[],c=[],h=et(15133943),u=et(13884654),f=et(10134453),d=et(2764344),g=et(6975096),x=[1,.55,.2],m=[1,.74,.42],p=[.62,.8,1],y=(_,C)=>[_[0]*C,_[1]*C,_[2]*C],v=new fn(1,1,1,10),w=new _i(1,1,7),L=new _i(1,1,14,1,!0),T=new vi(1,14,10),I=new Un(1,1,1),k=(_,C,P,D)=>s.gr.box(_,C,0,.15,P,D,f,h);for(let _=0;_<6;_++)for(let C=0;C<6;C++){let P={ci:_,ri:C,x0:pf[_][0],x1:pf[_][1],z0:mf[C][0],z1:mf[C][1],type:P_[C][_]};P.cx=(P.x0+P.x1)/2,P.cz=(P.z0+P.z1)/2,l.push(P),k(P.x0,P.x1,P.z0,P.z1)}for(let _ of[-1,1]){let C=_>0?52:-63,P=_>0?63:-52;for(let[z,Y]of[[-187,-67],[-53,113],[127,187]])k(C,P,z,Y);let D=_>0?52:-900,F=_>0?900:-52;k(D,F,-900,-187),k(D,F,187,900),k(_>0?287:-900,_>0?900:-287,-187,187),_>0?s.gr.quad([40,-3,900],[52,.15,900],[52,.15,-900],[40,-3,-900],u):s.gr.quad([-52,.15,900],[-40,-3,900],[-40,-3,-900],[-52,.15,-900],u)}s.gr.worldUV(1/24);let S=(_,C,P,D,F)=>{let z=F?[[0,D/16],[1,D/16],[1,P/16],[0,P/16]]:[[1,_/16],[1,C/16],[0,C/16],[0,_/16]];s.rd.quad([_,0,D],[C,0,D],[C,0,P],[_,0,P],[1,1,1],z)};for(let _ of Ze)S(_-Mi(_),_+Mi(_),-187,187,!0);for(let _ of Je){for(let C of[0,4])for(let P=C;P<C+3;P++)S(Ze[P]+Mi(Ze[P]),Ze[P+1]-Mi(Ze[P+1]),_-7,_+7,!1);(_===-60||_===120)&&S(-63,63,_-7,_+7,!1)}let A=(_,C,P,D,F,z,Y,tt=0,dt=!1)=>r.push({x:_,z:C,hx:P,hz:D,h:F,c:z,pr:Y,my:tt,bridge:dt}),V=(_,C,P,D,F)=>a.push(_,C,P,D,F[0],F[1],F[2]),J=(_,C,P,D,F=.22)=>s.pool.quad([_-P,F,C+P],[_+P,F,C+P],[_+P,F,C-P],[_-P,F,C-P],D);function ft(_,C,P,D,F,z,Y,tt){let dt=Math.max(1,Math.round((Y-z)/3)),Nt=Math.floor(t()*8)/8,be=Nt+dt/8,we=(Ke,en,ne,he,Ai)=>{let Ss=Math.max(1,Math.round(Ai/3.2)),He=Math.floor(t()*8)/8,ze=He+Ss/8;_.quad(Ke,en,ne,he,tt,[[He,Nt],[ze,Nt],[ze,be],[He,be]])};we([C,z,F],[P,z,F],[P,Y,F],[C,Y,F],P-C),we([P,z,D],[C,z,D],[C,Y,D],[P,Y,D],P-C),we([P,z,F],[P,z,D],[P,Y,D],[P,Y,F],F-D),we([C,z,D],[C,z,F],[C,Y,F],[C,Y,D],F-D)}function O(_,C,P,D,F,z,Y,tt){if(ft(_,C,P,D,F,.15,z,Y),s.pl.box(C-.3,P+.3,z,z+.5,D-.3,F+.3,y(Y,.5),h),t()<.7){let dt=2+t()*3,Nt=2+t()*3,be=wn(C+3,P-3,t()),we=wn(D+3,F-3,t());s.pl.box(be-dt/2,be+dt/2,z+.5,z+2+t()*1.5,we-Nt/2,we+Nt/2,et(3817290),h)}tt||n.box(C,P,D,F)}let X=[[1.7,1.15,.6],[1.1,1.4,1.8],[1.8,.55,1.1],[.5,1.6,.85],[1.9,.95,.25],[1.5,1.3,1]];function Q(_,C,P,D){for(let F=_+1;F+3<C;F+=4){if(t()<.22)continue;let z=e(X),Y=P+D*.06,tt=y(z,.45);D>0?s.em.quad([F,.7,Y],[F+3,.7,Y],[F+3,3.1,Y],[F,3.1,Y],[tt,tt,z,z]):s.em.quad([F+3,.7,Y],[F,.7,Y],[F,3.1,Y],[F+3,3.1,Y],[tt,tt,z,z]),J(F+1.5,P+D*3,4.5,y(z,.1))}}let it={cv:document.createElement("canvas"),n:0,slots:{}};it.cv.width=1024,it.cv.height=2048,it.g=it.cv.getContext("2d"),it.g.fillStyle="#000",it.g.fillRect(0,0,1024,2048);function K(_,C,P,D,F,z,Y,tt=!0){let dt=it.slots[_+C];if(dt===void 0){dt=it.slots[_+C]=it.n++;let ze=it.g,ia=dt%2*512,sa=Math.floor(dt/2)*64;ze.save(),ze.beginPath(),ze.rect(ia,sa,512,64),ze.clip();let ra=44;ze.font=`900 ${ra}px "Arial Black", "Segoe UI", system-ui, sans-serif`;let hh=ze.measureText(_).width;hh>480&&(ra=Math.floor(ra*480/hh),ze.font=`900 ${ra}px "Arial Black", "Segoe UI", system-ui, sans-serif`),ze.textAlign="center",ze.textBaseline="middle",ze.shadowColor=C,ze.shadowBlur=14,ze.fillStyle=C,ze.fillText(_,ia+256,sa+34),ze.fillText(_,ia+256,sa+34),ze.shadowBlur=0,ze.fillStyle="rgba(255,255,255,0.72)",ze.fillText(_,ia+256,sa+34),ze.restore()}let Nt=dt%2*.5,be=Nt+.5,we=1-Math.floor(dt/2)/32,Ke=we-1/32,en=z/8,ne=z/2,he=en/2,Ai=[[Nt,Ke],[be,Ke],[be,we],[Nt,we]],Ss=[1,1,1],He=.12;Y==="+z"?(s.sg.quad([P-ne,D-he,F+He],[P+ne,D-he,F+He],[P+ne,D+he,F+He],[P-ne,D+he,F+He],Ss,Ai),tt&&s.pl.box(P-ne-.2,P+ne+.2,D-he-.15,D+he+.15,F-.1,F+.08,d)):Y==="-z"?(s.sg.quad([P+ne,D-he,F-He],[P-ne,D-he,F-He],[P-ne,D+he,F-He],[P+ne,D+he,F-He],Ss,Ai),tt&&s.pl.box(P-ne-.2,P+ne+.2,D-he-.15,D+he+.15,F-.08,F+.1,d)):Y==="+x"?(s.sg.quad([P+He,D-he,F+ne],[P+He,D-he,F-ne],[P+He,D+he,F-ne],[P+He,D+he,F+ne],Ss,Ai),tt&&s.pl.box(P-.1,P+.08,D-he-.15,D+he+.15,F-ne-.2,F+ne+.2,d)):(s.sg.quad([P-He,D-he,F-ne],[P-He,D-he,F+ne],[P-He,D+he,F+ne],[P-He,D+he,F-ne],Ss,Ai),tt&&s.pl.box(P-.08,P+.1,D-he-.15,D+he+.15,F-ne-.2,F+ne+.2,d))}let nt=[["BEAM STORE","#3df2ff"],["\u0418\u0413\u0420\u042B \u041E\u0422 390 \u20BD","#ff4fd8"],["\u041F2 \xB7 \u041F3 \xB7 \u041E\u0411\u041C\u0415\u041D","#ffd23d"],["\u0411\u0410\u0420 \xAB\u041D\u0410 \u0421\u0415\u0420\u0413\u0415\u042F \u0421\u0422\u041E\u041B\u0418\u041A\xBB","#ffae3d"],["\u0420\u042B\u0411\u0410 \xB7 \u041F\u0418\u0412\u041E","#6dff8a"],["\u041A\u0418\u041D\u041E\u0422\u0415\u0410\u0422\u0420 11.1.4","#b98cff"],["\u0428\u0410\u0423\u0420\u041C\u0410 \xAB\u041F\u041B\u041E\u0422\u0412\u0410\xBB","#ff7a3d"],["\u0411\u041E\u0416\u0415, \u0425\u0420\u0410\u041D\u0418 \u041F\u0418\u0420\u0410\u0422\u041E\u0412","#ff4f6a"],["\u0426\u0418\u0412\u0410 \xB7 \u0415\u0429\u0401 \u041E\u0414\u0418\u041D \u0425\u041E\u0414","#3dffb5"],["\u041E\u041F\u0415\u0420\u0410\u0422\u0418\u0412\u041A\u0410 \u0414\u041B\u042F \u0421\u0410\u041D\u0418","#3da8ff"],["\u041C\u0415\u0413\u0410\u0424\u0418\u0413 \xB7 \u0421\u0412\u042F\u0417\u042C \u041A 19-\u041C\u0423","#5dff5d"],["TEKKEN \u0421 \u0414\u0415\u0422\u042C\u041C\u0418","#ff5d3d"],["\u041F\u041E\u0414\u041F\u0418\u0421\u041A\u0410 EXTRA","#5d8bff"],["\u041D\u0415 \u0411\u0415\u0420\u0418 \u041F\u041E\u0414\u041F\u0418\u0421\u041A\u0423","#ff9d3d"],["\u041A\u041E\u0424\u0415\u0419\u041D\u042F","#ffcf8a"],["VR2 \xB7 \u041F\u0420\u041E\u0414\u0410\u041C","#c58cff"],["212 \u0413\u0411 \u0421\u0412\u041E\u0411\u041E\u0414\u041D\u041E","#3dfff0"],["\u0422\u0415\u041B\u0415\u041A\u0418 \xB7 \u0416\u0414\u0418 \u0412 \u0421\u0411","#ffe23d"],["\u041B\u041E\u041C\u0411\u0410\u0420\u0414 \xAB144 \u041A\u0410\u0420\u0422\u041E\u0427\u041A\u0418\xBB","#ff5d9d"],["\u0410\u0422\u0415\u041B\u042C\u0415 \xAB\u0411\u0410\u0411\u041E\u0427\u041A\u0410\xBB","#ffd9a0"],["\u0411\u0410\u0420\u0411\u0415\u0420\u0428\u041E\u041F \xAB\u0414\u041E \u0429\u0415\u0422\u0418\u041D\u042B\xBB","#8affd0"],["\u0412\u0421\u0401 \u0422\u0410\u041A, \u0422\u041E\u041B\u042C\u041A\u041E \u041D\u0410\u041E\u0411\u041E\u0420\u041E\u0422","#ff6ad5"],["\u041C\u0415\u0421\u042F\u0426\u2026","#ff9d3d"],["21 \u0414\u0415\u041D\u042C..","#3df2ff"],["\u041B\u0415\u0422\u0421 \u0413\u041E\u0423","#6dff8a"],["\u0414\u0418\u041C\u0410\u041D, \u0421\u041E\u0420\u042F\u041D","#c58cff"],["\u0417\u0411\u0421 \xB7 \u0412\u042D\u0420\u0418 \u0413\u0423\u0414","#ffd23d"],["\u0417\u0410\u041A\u0410\u041F\u042B\u0412\u0410\u0415\u041C\u0421\u042F","#ff7a3d"]],lt=0,ut=(_,C,P,D)=>{let F=nt[lt++%nt.length],z=Le(D-6,6,12);K(F[0],F[1],_,4.7,C+P*.2,z,P>0?"+z":"-z")},Et=_=>{let C=Eo((_.y+.5)*1.5-.15);return[wn(.012,.8,C),wn(.05,.86,C),wn(.03,.95,C)]};function $(_,C,P){s.pl.add(v,gt(_,.15+.6*P,C,.22*P,1.2*P,.22*P),et(2825750));for(let D=0;D<3;D++){let F=(2.3-.55*D)*P,z=2.7*P;s.pl.add(w,gt(_,.15+(1+1.45*D)*P+z/2,C,F,z,F,t()*3),Et)}n.circle(_,C,.5*P)}function st(_,C,P=[],D=3){let F=[];for(let z=0;z<C*6&&F.length<C;z++){let Y=wn(_.x0+D,_.x1-D,t()),tt=wn(_.z0+D,_.z1-D,t());n.near(Y,tt,2.6)||P.some(dt=>Math.hypot(dt[0]-Y,dt[1]-tt)<(dt[2]||6))||F.some(dt=>Math.hypot(dt[0]-Y,dt[1]-tt)<4)||(F.push([Y,tt]),$(Y,tt,.75+t()*.8))}}let bt=[et(14206880),et(13612186),et(12567753),et(13940912),et(13225912),et(13085068)],Tt=[et(12106948),et(11121597),et(12893358),et(11055272),et(12562608),et(10465476)];function Pt(_,C){let D=_.x0+3,F=_.x1-3,z=_.z0+3,Y=_.z1-3;for(let tt of[0,1]){let dt=12.8+Math.floor(t()*2)*1.6,Nt=tt?Y-dt:z,be=tt?Y:z+dt,we=tt?1:-1,Ke=tt?be:Nt,en;if(t()<.6){let ne=wn(D+17,F-17,t());en=[[D,ne-2.4],[ne+2.4,F]]}else en=[[D,F]];for(let[ne,he]of en){let Ai=.15+3*(4+Math.floor(t()*(C?8:5)));O(s.fb,ne,he,Nt,be,Ai,e(bt)),Q(ne,he,Ke,we),t()<.9&&ut((ne+he)/2,Ke,we,he-ne)}}st(_,3)}function $t(_){let P=_.x0+4,D=_.x1-4,F=_.z0+4,z=_.z1-4,Y=t();if(Y<.45)O(s.fa,P,D,F,F+12.8,27.15,e(Tt)),O(s.fa,P,D,z-12.8,z,27.15,e(Tt));else if(Y<.8){O(s.fa,P,D,F,F+12.8,27.15,e(Tt));let Nt=wn(P+10,D-10,t());O(s.fa,Nt-9.6,Nt+9.6,z-19.2,z,48.15,e(Tt))}else O(s.fa,P,P+12.8,F,z,27.15,e(Tt)),O(s.fa,D-12.8,D,F,z,36.15,e(Tt));let tt=_.cx+(t()-.5)*10,dt=_.cz+(t()-.5)*3;s.pl.box(tt-1.5,tt+1.5,.15,.5,dt-1.5,dt+1.5,et(9067050),h),Be(s.pl,[tt+3,.15,dt],[tt+3,2.4,dt],.08,et(12728890)),Be(s.pl,[tt+5,.15,dt],[tt+5,2.4,dt],.08,et(12728890)),Be(s.pl,[tt+3,2.4,dt],[tt+5,2.4,dt],.08,et(3828418)),st(_,5,[[tt,dt,7]]),A(_.cx-12,_.cz,_.cx-12,_.cz,4.6,m,8)}function jt(_){let C=_.x0+4,P=_.x1-4,D=[et(7027242),et(3099194),et(3819096),et(5921362),et(8014366),et(4861754)];for(let Y=0;Y<3;Y++){let tt=_.z0+8+Y*14,dt=tt-3,Nt=tt+3;s.pl.box(C,P,.15,2.9,dt,Nt,et(4869202),h),n.box(C,P,dt,Nt);for(let be=C+.4;be+3<P;be+=3.6)s.pl.quad([be,.2,Nt+.05],[be+3,.2,Nt+.05],[be+3,2.5,Nt+.05],[be,2.5,Nt+.05],e(D)),s.pl.quad([be+3,.2,dt-.05],[be,.2,dt-.05],[be,2.5,dt-.05],[be+3,2.5,dt-.05],e(D))}K("\u0422\u0418\u041F\u042B \xB7 \u0414\u0418\u0421\u041A\u0418 390 \u20BD","#ff4fd8",P+.2,4,_.z0+22,6,"+x"),A(P-6,_.z0+15,P-6,_.z0+15,4.6,x,9),A(_.cx,_.z0+29,_.cx,_.z0+29,4.6,x,9);let F=P-9,z=_.z0+15;return s.pl.add(v,gt(F,.6,z,.45,.9,.45),et(3811874)),n.circle(F,z,.6),{fire:[F,1.3,z]}}function kt(_,C,P){let F=P/6;for(let z=0;z<6;z++){let Y=2-z*.12;s.pl.add(v,gt(_,.15+F*(z+.5),C,Y,F,Y),z%2?et(14211288):et(11545122))}s.em.add(T,gt(_,P+.5,C,.35,.35,.35),[3,.2,.15]),V(_,P+.5,C,5,[2.2,.15,.1]),V(_,P*.6,C+2.1,3,[1.8,.12,.08]),n.circle(_,C,2.2),o.push([_,P+1,C])}function ce(_){let C=[et(3752525),et(4538426),et(3095874),et(4865855)],P=_.x0+4,D=P+32,F=_.z0+5,z=F+19,Y=10+t()*4;s.pl.box(P,D,.15,Y,F,z,e(C),h),n.box(P,D,F,z);for(let tt=P+2;tt+4<D;tt+=6){let dt=[.45,1.1,1.3];s.em.quad([tt,Y-3,z+.05],[tt+4,Y-3,z+.05],[tt+4,Y-1.6,z+.05],[tt,Y-1.6,z+.05],dt)}kt(_.x1-9,_.z0+10,38+t()*14);for(let tt=0;tt<2;tt++){let dt=_.x1-9-tt*11,Nt=_.z1-9;s.pl.add(v,gt(dt,4.15,Nt,4.5,8,4.5),et(5857643)),s.pl.add(w,gt(dt,8.9,Nt,4.6,1.5,4.6),h),n.circle(dt,Nt,4.6)}s.pl.box(_.x0+4,_.x1-22,4.6,5.3,_.z1-16,_.z1-15.3,et(7035450),h);for(let tt=_.x0+6;tt<_.x1-23;tt+=8)s.pl.box(tt-.15,tt+.15,.15,4.6,_.z1-15.8,_.z1-15.5,d);A(_.x0+20,_.z1-8,_.x0+20,_.z1-8,7,p,12)}function q(_){let C=_.x0+2,P=_.x1-2,D=_.z0+2,F=_.z1-2,z=.4,Y=2.9,tt=et(5988198),dt=_.cz,Nt=(we,Ke,en,ne)=>{s.pl.box(we,Ke,.15,Y,en,ne,tt,h),n.box(we,Ke,en,ne)};Nt(C,P,D,D+z),Nt(C,P,F-z,F),Nt(C,C+z,D,F),Nt(P-z,P,D,dt-2.8),Nt(P-z,P,dt+2.8,F),s.pl.box(P-1,P+.6,.15,1.3,dt-.8,dt+.8,g,h),n.box(P-1,P+.6,dt-.8,dt+.8),K("\u0417\u041E\u041D\u0410 \xB7 \u0412\u0425\u041E\u0414 \u041F\u0415\u0428\u041A\u041E\u041C","#7dff5d",P+.1,3.9,dt+8,7,"+x");let be=[et(5913126),et(4866104),et(4016714)];for(let[we,Ke,en,ne,he]of[[-236,-158,7,2.6,2.6],[-250,-139,3,8,2.8],[-266,-163,6,6,4],[-228,-137,2.5,6,2.4],[-252,-168,9,2.5,3]])s.pl.box(we-en/2,we+en/2,.15,he,Ke-ne/2,Ke+ne/2,e(be),h),n.box(we-en/2,we+en/2,Ke-ne/2,Ke+ne/2);for(let[we,Ke,en]of[[-231,-150,0],[-242,-141,1.3],[-243,-160,2.1],[-254,-150,3.3],[-258,-163,4.4],[-236,-166,5.2],[-262,-141,.7]])c.push({x0:we,z0:Ke,x:we,z:Ke,ph:en,r:2.6});A(-240,-130,-240,-132,7,[.5,1,.6],12)}function $e(_,C){let P=C?[[_.cx,_.cz,13]]:[[dn.misha[0],dn.misha[1],7]];for(let[D,F]of[[-16,-12],[16,-12],[-16,12],[16,12],[0,18],[0,-18]])A(_.cx+D,_.cz+F,_.cx+D,_.cz+F,4.6,m,9),P.push([_.cx+D,_.cz+F,3]);C&&J(_.cx,_.cz,16,[.5,.3,.6]),st(_,C?16:34,P)}function zt(_){let C=et(14470052),P=et(15657436),D=et(9411238),F=181,z=-30;s.pl.add(new fn(1,1,1,24),gt(F,8.15,z,15,16,15),C),s.em.add(new vi(1,28,10,0,Math.PI*2,0,Math.PI/2),gt(F,16.1,z,15.6,9.6,15.6),Y=>{let tt=Eo(Y.y*1.25),dt=.86+.14*Math.sign(Math.sin(Math.atan2(Y.z,Y.x)*14)),Nt=(.75+.25*-Y.x)*dt;return[wn(.62,.11,tt)*Nt,wn(.47,.14,tt)*Nt,wn(.3,.22,tt)*Nt]}),s.pl.add(v,gt(F,26.3,z,1.6,1.6,1.6),P),s.pl.add(w,gt(F,28.6,z,1.2,3,1.2),D),s.pl.box(F-15.2,F+15.2,16,16.9,z-15.2,z+15.2,P),s.pl.box(190,201,.15,21,z-12,z+12,C,h),s.pl.box(160,170,.15,13,z-14,z+14,C,h);for(let Y=0;Y<8;Y++){let tt=z-12+Y*24/7;s.pl.add(v,gt(158.8,5.65,tt,.85,11,.85),P)}s.pl.box(157.4,160.4,11.1,13,z-14.2,z+14.2,P,h),s.pl.box(157.8,160.2,13,14.4,z-10,z+10,P,h),s.pl.box(158.2,160,14.4,15.4,z-5.5,z+5.5,P,h);for(let Y=0;Y<3;Y++)s.pl.box(153.8+Y*1.1,157.6,.15,.95-Y*.27,z-14.5,z+14.5,et(10130828),h);for(let Y=0;Y<5;Y++){let tt=z-8.5+Y*4.25;s.em.quad([159.94,1.2,tt-1.1],[159.94,1.2,tt+1.1],[159.94,6.5,tt+1.1],[159.94,6.5,tt-1.1],[[.7,.42,.18],[.7,.42,.18],[1.7,1.1,.55],[1.7,1.1,.55]])}n.box(158,201,z-14,z+14),n.box(166,196,z-15,z+15);for(let[Y,tt]of[[156,-30],[156,-42],[156,-18],[170,-48],[170,-12],[192,-48],[192,-12]])J(Y,tt,13,[.4,.26,.12]);for(let Y of[-44,-16])V(155.5,.6,Y,2.2,[2,1.3,.6]),V(155.5,.6,Y+9,2.2,[2,1.3,.6]);s.pl.box(154,156.4,.15,2.2,-9.2,-6.8,et(5593183),h),n.box(154,156.4,-9.2,-6.8),s.pl.add(T,gt(155.2,3.1,-8,.95,.8,.8),et(11027502)),s.pl.add(T,gt(154.2,4,-7.2,.45,.6,.35),et(11027502)),s.pl.add(T,gt(156.2,4,-7.2,.45,.6,.35),et(11027502)),J(155.2,-6,6,[.6,.4,.2]),st(_,4,[[160,-30,22]])}function Zt(_){let C=et(15392710),P=90,D=116,F=-164,z=-146;s.pl.box(P,D,.15,11,F,z,C,h),n.box(P,D,F,z),s.pl.box(P-.6,D+.6,11,11.8,F-.6,z+.6,et(16052194),h),s.pl.add(new vi(1,16,8,0,Math.PI*2,0,Math.PI/2),gt(103,11.8,-155,5,4,5),et(12162618));for(let Y=0;Y<7;Y++){let tt=P+2.2+Y*3.6,dt=[1.3,.8,.3],Nt=[2.8,2,.95];s.em.quad([tt-.9,1.6,z+.06],[tt+.9,1.6,z+.06],[tt+.9,7.6,z+.06],[tt-.9,7.6,z+.06],[dt,dt,Nt,Nt]),Y<6&&s.pl.add(v,gt(tt+1.8,4.9,z+.7,.4,9.5,.4),et(16052194))}for(let Y of[96,103,110])V(Y,6.5,z+.4,6,[1.6,1.1,.5]),J(Y,z+6,9,[.75,.5,.22]);s.pl.quad([101.5,.17,-128],[104.5,.17,-128],[104.5,.17,-146],[101.5,.17,-146],et(10097192)),K("\u0414\u0412\u041E\u0420\u0415\u0426 \u0413\u0410\u0419\u0421\u041B\u0415\u0420\u0410","#ffd98a",103,10.2,z+.1,12,"+z",!1),st(_,12,[[103,-137,9]])}function Rt(_){s.pl.box(223,267,.15,9.2,74,106,et(2830656),h),n.box(223,267,74,106);let z=[.25,.5,.7],Y=[.7,1.2,1.6];s.em.quad([223-.06,.8,76],[223-.06,.8,104],[223-.06,4.2,104],[223-.06,4.2,76],[z,z,Y,Y]),s.em.quad([225,.8,106+.06],[265,.8,106+.06],[265,4.2,106+.06],[225,4.2,106+.06],[z,z,Y,Y]),s.em.quad([265,.8,74-.06],[225,.8,74-.06],[225,4.2,74-.06],[265,4.2,74-.06],[z,z,Y,Y]),K("\u0422\u0415\u0425\u041D\u041E\u0420\u0410\u041A \xB7 SSD \xB7 212 \u0413\u0411","#3df2ff",223-.2,6.6,90,16,"-x",!1),K("\u0422\u0415\u041B\u0415\u041A\u0418 \xB7 \u0416\u0414\u0418 \u0412 \u0421\u0411","#ffe23d",245,6.6,106+.2,14,"+z",!1),K("\u041F\u041E\u0414\u041F\u0418\u0421\u041A\u0410 EXTRA","#5d8bff",245,6.6,74-.2,14,"-z",!1),J(218,90,14,[.25,.5,.7]),J(245,111,14,[.25,.5,.7])}function Se(_){O(s.fa,_.x0+4,_.x1-4,_.z0+4,_.z0+16.8,27.15,e(Tt));let C=-240,P=-228,D=160,F=168;s.pl.box(C,P,.15,4,D,F,et(3818064),h),n.box(C,P,D,F),s.em.quad([C+1,.9,F+.06],[P-1,.9,F+.06],[P-1,3,F+.06],[C+1,3,F+.06],[[.4,.9,.6],[.4,.9,.6],[.8,1.9,1.2],[.8,1.9,1.2]]),K("\u0427\u0418\u0421\u0422\u041A\u0410 PS5 \u041E\u0422 \u041F\u042B\u041B\u0418","#6dff8a",-234,4.9,F+.1,11,"+z"),K("\u0423\u041B. \u0412\u0410\u0422\u0423\u0422\u0418\u041D\u0410","#ffffff",-222,3.4,172.6,5,"+z"),Be(s.pl,[-222,.15,172.5],[-222,3,172.5],.1,d),J(-234,172,9,[.3,.8,.5]),st(_,6)}let te=null;for(let _ of l)_.type==="classic"?Pt(_,_.ci===3||_.ci===4):_.type==="panel"?$t(_):_.type==="garages"?te=jt(_).fire:_.type==="ind"?ce(_):_.type==="zone"?q(_):_.type==="park"?$e(_,!0):_.type==="fpark"?$e(_,!1):_.type==="opera"?zt(_):_.type==="palace"?Zt(_):_.type==="mall"?Rt(_):_.type==="vatutina"&&Se(_);{let P=et(15921128),D=et(10107434),F=et(14723100);s.pl.add(new fn(1,1.15,1,16),gt(140,.35,30,4.6,.7,4.6),h),s.pl.box(140-2.4,140+2.4,.7,6.4,30-2.4,30+2.4,P,h);for(let[Y,tt]of[[-2.4,-2.4],[2.4,-2.4],[-2.4,2.4],[2.4,2.4]])s.pl.box(140+Y-.3,140+Y+.3,.7,6.5,30+tt-.3,30+tt+.3,et(16513523),h);s.pl.box(140-2.55,140+2.55,.7,1.5,30-2.55,30+2.55,D),s.pl.box(140-2.7,140+2.7,6.4,6.75,30-2.7,30+2.7,D,h);for(let Y of[-1,1])s.pl.add(I,gt(140,6.85,30+Y*2.42,2.3,2.3,.3,0,0,Math.PI/4),P),s.pl.add(I,gt(140+Y*2.42,6.85,30,.3,2.3,2.3,0,Math.PI/4,0),P);s.pl.add(new fn(1,1,1,8),gt(140,8.1,30,1.5,2.4,1.5),P);let z=[[.05,0],[1,.25],[1.25,.9],[.95,1.7],[.4,2.4],[.08,3.1]].map(Y=>new Mt(Y[0],Y[1]));s.pl.add(new co(z,12),gt(140,9.2,30,1.25,1.1,1.25),F),s.em.box(140-.07,140+.07,12.5,14.1,30-.07,30+.07,[2.2,1.5,.3]),s.em.box(140-.45,140+.45,13.4,13.55,30-.07,30+.07,[2.2,1.5,.3]);for(let[Y,tt]of[[0,2.45],[0,-2.45]]){let dt=30+tt+Math.sign(tt)*.02,Nt=[1.9,1.2,.5];tt>0?s.em.quad([140-.6,1.5,dt],[140+.6,1.5,dt],[140+.6,4.2,dt],[140-.6,4.2,dt],Nt):s.em.quad([140+.6,1.5,dt],[140-.6,1.5,dt],[140-.6,4.2,dt],[140+.6,4.2,dt],Nt)}n.circle(140,30,4.7),J(140,30,14,[.9,.6,.3]),V(140,10.6,30,5,[1.4,.9,.25])}let R=[];for(let _ of["tower1","tower2","tower3"]){let[C,P]=dn[_],D=26,F=et(9080729);for(let[z,Y]of[[-1,-1],[1,-1],[1,1],[-1,1]])Be(s.pl,[C+z*1.3,.15,P+Y*1.3],[C+z*.25,D,P+Y*.25],.09,F,4);for(let z=3;z<D;z+=4){let Y=wn(1.3,.25,z/D);s.pl.box(C-Y,C+Y,z,z+.12,P-Y,P+Y,F)}s.em.box(C-.5,C+.5,D-4,D-2.2,P-.5,P+.5,[.3,1.6,.4]),n.circle(C,P,1.5),R.push({x:C,z:P,h:D})}for(let _ of[-1,1])for(let C=-170,P=0;C<=170;C+=20,P++)Math.abs(C+60)<12||Math.abs(C-120)<12||(P%2===0?A(_*55,C,_*55,C,4.6,p,9):Math.hypot(_*58.5-dn.dima[0],C-dn.dima[1])>8&&$(_*58.5,C+(t()-.5)*6,.8+t()*.5));Be(s.pl,[58,.15,-85],[58,9,-85],.22,d),Be(s.pl,[58,.15,-75],[58,9,-75],.22,d),s.pl.box(58-.25,58+.25,5.5,12,-80-8.5,-80+8.5,d),n.circle(58,-85,.4),n.circle(58,-75,.4),K("\u0422\u0410 \u0421\u0410\u041C\u0410\u042F \u0418\u0413\u0420\u0410","#ff4fd8",58-.3,10.2,-80,15,"-x",!1),K("19.11.2026 \xB7 212 \u0413\u0411","#3df2ff",58-.3,7.8,-80,15,"-x",!1),K("\u0422\u0410 \u0421\u0410\u041C\u0410\u042F \u0418\u0413\u0420\u0410","#ff4fd8",58+.3,10.2,-80,15,"+x",!1),K("\u041E\u0421\u0412\u041E\u0411\u041E\u0414\u0418 \u041C\u0415\u0421\u0422\u041E","#ffd23d",58+.3,7.8,-80,15,"+x",!1);let b=["#ff4fd8","#3df2ff","#ffd23d","#6dff8a"],G=(_,C,P,D,F,z,Y)=>{Be(s.pl,[_,.15,C-5],[_,9,C-5],.22,d),Be(s.pl,[_,.15,C+5],[_,9,C+5],.22,d),s.pl.box(_-.25,_+.25,5.5,12,C-8.5,C+8.5,d),n.circle(_,C-5,.4),n.circle(_,C+5,.4),K(P,b[Y%4],_-.3,10.2,C,15,"-x",!1),K(D,b[(Y+1)%4],_-.3,7.8,C,15,"-x",!1),K(F,b[(Y+2)%4],_+.3,10.2,C,15,"+x",!1),K(z,b[(Y+3)%4],_+.3,7.8,C,15,"+x",!1),V(_,12.4,C,3,[.9,.8,.6])};G(-58,-10,"\u041F\u0415\u0419 \u041F\u0418\u0412\u041E","\u0420\u0423\u041A\u0418 \u0414\u041E\u041B\u0416\u041D\u042B \u0411\u042B\u0422\u042C \u0412 \u0420\u042B\u0411\u0415","\u0411\u041E\u0416\u0415, \u0425\u0420\u0410\u041D\u0418 \u041F\u0418\u0420\u0410\u0422\u041E\u0412","\u0410\u041C\u0418\u041D\u042C",0),G(-58,70,"\u0414\u0410\u0412\u041D\u041E \u041D\u0415 \u0412\u041E\u0415\u0412\u0410\u041B\u0418","\u0413\u041E\u0423 \u0412\u0421\u0415 \u041D\u0410 \u0412\u041E\u0419\u041D\u0423","\u041F\u041E\u0422\u0415\u0420\u041F\u0418 \u0427\u0423\u0422\u042C-\u0427\u0423\u0422\u042C!!","\u041E\u041D\u041E \u0421\u0422\u041E\u0418\u0422 \u0422\u041E\u0413\u041E \u0412 20 \u041A\u0420\u0410\u0422",1),G(-58,-130,"\u041A\u0410\u041A \u0420\u0410\u0417 \u041A 19-\u041C\u0423","\u0414\u041E\u041A\u0410\u0427\u0410\u0415\u0422\u0421\u042F","\u0411\u0410\u0422\u042F \u0412 \u0417\u0414\u0410\u041D\u0418\u0418!","\u0412\u0420\u0415\u041C\u0415\u041D\u0418 \u0422\u0423\u041F\u041E \u041D\u0415\u0422",2),G(58,150,"\u0412\u041A\u041B\u042E\u0427\u0418\u041B, \u0412\u042B\u041A\u041B\u042E\u0427\u0418\u041B","\u0414\u0412\u0410 \u0414\u041D\u042F \u041F\u0420\u041E\u0428\u041B\u041E","\u0427\u0422\u041E \u042D\u0422\u041E?","\u0427\u0410\u0422 \u0412\u041B\u0410\u0414\u0415\u041B\u042C\u0426\u0415\u0412 PS5",3),G(58,-130,"\u041E\u0427\u0415\u041D\u042C \u041F\u041B\u041E\u0425\u041E\u0415 \u0421\u041E\u041E\u0411\u0429\u0415\u041D\u0418\u0415","\u041E\u041D\u041E \u041C\u041D\u0415 \u041E\u0427\u0415\u041D\u042C \u041D\u0415 \u041D\u0420\u0410\u0412\u0418\u0422\u0421\u042F","\u041A\u0420\u041E\u041C\u0415 LOA \u0418 RDR","\u041D\u0418\u0427\u0415\u0413\u041E \u041D\u0415 \u0417\u0410\u0415\u0411\u0418\u0421\u042C",0);for(let _=0;_<90;_++){let C=t()*Math.PI*2,P=330+t()*240,D=Math.cos(C)*P*1.3,F=Math.sin(C)*P;if(Math.abs(D)<80||Math.abs(D)<300&&Math.abs(F)<200)continue;let z=16+Math.floor(t()*8)*3.2,Y=12.8+Math.floor(t()*4)*3.2,tt=.15+3*(7+Math.floor(t()*18)),dt=t()<.6;ft(dt?s.fa:s.fb,D-z/2,D+z/2,F-Y/2,F+Y/2,.15,tt,e(dt?Tt:bt)),s.pl.quad([D-z/2,tt,F+Y/2],[D+z/2,tt,F+Y/2],[D+z/2,tt,F-Y/2],[D-z/2,tt,F-Y/2],h),tt>50&&V(D,tt+1,F,5,[2,.15,.1])}for(let _ of Ze){let C=Mi(_),P=0;for(let D=-170;D<=170;D+=34,P++){if(Je.some(z=>Math.abs(D-z)<9))continue;let F=P%2?1:-1;A(_+F*(C+.9),D,_+F*(C-1.6),D,8.2,_===140?m:x,13)}if(_===140)for(let D=-153;D<=170;D+=34)Je.some(F=>Math.abs(D-F)<9)||(A(_+11.9,D,_+9.4,D,8.2,m,13),A(_-11.9,D,_-9.4,D,8.2,m,13))}for(let _ of Je)for(let C of[0,4]){let P=0;for(let D=Ze[C]+22;D<Ze[C+3];D+=35,P++){if(Ze.some(z=>Math.abs(D-z)<Mi(z)+3))continue;let F=P%2?1:-1;A(D,_+F*7.9,D,_+F*5.4,8.2,x,13)}}for(let _ of Pc)for(let C=-51;C<=51;C+=17)for(let P of[-1,1])A(C,_.z+P*8.1,C,_.z+P*6.2,7,p,11,-3,!0);let ct=et(2895928);for(let _ of r){let C=_.bridge?s.br:s.pl;C.box(_.x-.12,_.x+.12,0,_.h,_.z-.12,_.z+.12,ct),(_.x!==_.hx||_.z!==_.hz)&&C.box(Math.min(_.x,_.hx)-.08,Math.max(_.x,_.hx)+.08,_.h-.1,_.h+.1,Math.min(_.z,_.hz)-.08,Math.max(_.z,_.hz)+.08,ct),(_.bridge?s.brE:s.em).box(_.hx-.3,_.hx+.3,_.h-.28,_.h-.1,_.hz-.3,_.hz+.3,y(_.c,5)),V(_.hx,_.h-.3,_.hz,_.h>6?3:2,y(_.c,1.6)),J(_.hx,_.hz,_.pr,y(_.c,_.h>6?.3:.25)),s.cone.add(L,gt(_.hx,_.h/2,_.hz,_.pr*.42,_.h,_.pr*.42),y(_.c,.36)),s.streak.bill(_.hx,2*_.my-_.h*1.1,_.hz,_.h>6?1.1:.8,_.h*.9,y(_.c,_.bridge?3.2:2.6))}for(let _ of Pc){let C=_.z;s.br.box(-52,52,-.9,-.02,C-8.6,C+8.6,g,h);for(let P of[-1,1]){s.br.box(-52,52,0,1,C+P*8.45-.1,C+P*8.45+.1,et(4869978),h),n.box(-52,52,C+P*8.3-.3,C+P*8.3+.3,1);for(let D of[-1,1])n.box(D>0?40:-52,D>0?52:-40,C+P*8.6-.5,C+P*8.6+.5,0)}for(let P of[-1,1])n.box(P>0?41:-43,P>0?43:-41,C-8.6,C+8.6,2);for(let P of[-26,0,26])s.br.box(P-1.5,P+1.5,-3.2,-.9,C-6,C+6,et(5659236)),n.box(P-1.5,P+1.5,C-6,C+6,2);if(C===120){let P=[1.5,.1,.07],D=50,F=30;for(let z of[-1,1]){let Y=[];for(let tt=0;tt<=24;tt++){let dt=-D+2*D*tt/24,Nt=1-dt/D*(dt/D);Y.push(new U(dt,F*Nt+.3,C+z*(9.2-5.5*Nt)))}s.brE.add(new Hr(new ir(Y),48,.75,6),new ue,P);for(let tt=-42;tt<=42;tt+=6)for(let dt of[-7,7]){let Nt=1-tt/D*(tt/D),be=Le(tt+dt,-50,50);Be(s.br,[tt,F*Nt,C+z*(9.2-5.5*Nt)],[be,.9,C+z*8.4],.06,et(13159636),3)}}for(let z=0;z<=6;z++){let Y=-30+z*10,tt=1-Y/D*(Y/D);Be(s.brE,[Y,F*tt+.3,C-(9.2-5.5*tt)],[Y,F*tt+.3,C+(9.2-5.5*tt)],.3,P,5)}V(0,F+1.5,C,7,[2.2,.2,.15])}else{let P=et(6258566);for(let D=0;D<3;D++)for(let F of[-1,1]){let z=-34+D*34,Y=[];for(let tt=0;tt<=12;tt++){let dt=-1+tt/6,Nt=10.5*(1-dt*dt)+.4;Y.push(new U(z+dt*17,Nt,C+F*8.4)),tt%2===0&&a.push(z+dt*17,Nt+.5,C+F*8.4,1.5,1.7,1.25,.6),tt>0&&tt<12&&Be(s.br,[z+dt*17,Nt,C+F*8.4],[z+dt*17,.9,C+F*8.4],.07,P,3)}s.br.add(new Hr(new ir(Y),20,.4,5),new ue,P)}}}let at=gf(0,t),ht=gf(1,t),Ct=Hi({map:at.map,emissiveMap:at.emissiveMap,emissive:16777215,emissiveIntensity:1.5,vertexColors:!0}),vt=Hi({map:ht.map,emissiveMap:ht.emissiveMap,emissive:16777215,emissiveIntensity:1.5,vertexColors:!0}),St=Hi({vertexColors:!0}),Dt=new an({vertexColors:!0}),Kt=new ls(it.cv);Kt.colorSpace=Ne,Kt.anisotropy=4;let rt=Ao("uniform sampler2D map; varying vec2 vUv; varying vec3 vC; varying float vF; void main(){ vec3 t = texture2D(map, vUv).rgb; gl_FragColor = vec4(t*t*2.6*vC*vF, 1.0); }",{map:{value:Kt}}),de=Kn(256,256,_=>{_.fillStyle="#eef2fa",_.fillRect(0,0,256,256);for(let C=0;C<60;C++){let P=t()*256,D=t()*256,F=10+t()*40,z=_.createRadialGradient(P,D,0,P,D,F);z.addColorStop(0,t()<.5?"rgba(196,208,232,0.5)":"rgba(255,255,255,0.6)"),z.addColorStop(1,"rgba(230,236,247,0)"),_.fillStyle=z,_.fillRect(P-F,D-F,F*2,F*2)}for(let C=0;C<500;C++)_.fillStyle=t()<.5?"rgba(255,255,255,0.9)":"rgba(170,185,215,0.5)",_.fillRect(t()*256,t()*256,1.5,1.5)}),oe=Kn(256,256,_=>{_.fillStyle="#20232b",_.fillRect(0,0,256,256);for(let C=0;C<1400;C++)_.fillStyle=`rgba(${150+t()*100},${160+t()*90},${190+t()*60},${t()*.16})`,_.fillRect(t()*256,t()*256,1+t()*2,1+t()*3);for(let[C,P]of[[.5,26],[.02,30],[.98,30]]){let D=_.createLinearGradient(C*256-P,0,C*256+P,0);D.addColorStop(0,"rgba(215,224,240,0)"),D.addColorStop(.5,C===.5?"rgba(190,200,222,0.5)":"rgba(228,234,246,0.98)"),D.addColorStop(1,"rgba(215,224,240,0)"),_.fillStyle=D,_.fillRect(C*256-P,0,P*2,256)}for(let C of[.2,.36,.64,.8]){let P=_.createLinearGradient(C*256-12,0,C*256+12,0);P.addColorStop(0,"rgba(8,9,12,0)"),P.addColorStop(.5,"rgba(8,9,12,0.75)"),P.addColorStop(1,"rgba(8,9,12,0)"),_.fillStyle=P,_.fillRect(C*256-12,0,24,256)}for(let C=0;C<50;C++){_.fillStyle="rgba(225,232,245,0.5)";let P=[.1,.28,.5,.72,.9][Math.floor(t()*5)];_.fillRect(P*256-8+t()*16,t()*256,3+t()*8,2+t()*4)}},{aniso:8}),qt=Kn(512,512,_=>{_.fillStyle="#1e3f5c",_.fillRect(0,0,512,512);for(let C=0;C<40;C++){let P=t()*512,D=t()*512,F=30+t()*90,z=_.createRadialGradient(P,D,0,P,D,F);z.addColorStop(0,t()<.65?"rgba(228,238,252,0.8)":"rgba(10,30,50,0.5)"),z.addColorStop(1,"rgba(30,63,92,0)"),_.fillStyle=z,_.fillRect(P-F,D-F,F*2,F*2)}_.strokeStyle="rgba(200,230,255,0.4)";for(let C=0;C<26;C++){_.lineWidth=.6+t()*1.6,_.beginPath();let P=t()*512,D=t()*512;_.moveTo(P,D);for(let F=0;F<6;F++)P+=(t()-.5)*120,D+=(t()-.5)*120,_.lineTo(P,D);_.stroke()}}),Ut=new cs({map:de,vertexColors:!0}),wt=new cs({map:oe,transparent:!0,opacity:.88}),ee=new cs({map:qt,transparent:!0,opacity:.68,color:14674678}),Ht=(_,C,P=3)=>{let D=new le(_,C);return D.castShadow=!!(P&1),D.receiveShadow=!!(P&2),D},Ee=new Fe,Qt=new Fe,pt=new Fe,N=new Fe,xt=s.fa.build(),_t=s.fb.build(),Bt=s.pl.build(),Ft=s.em.build(),pe=s.sg.build(),me=s.br.build(),Oe=s.brE.build();Ee.add(Ht(xt,Ct),Ht(_t,vt),Ht(Bt,St),Ht(Ft,Dt,0),Ht(pe,rt,0)),Qt.add(Ht(xt,Ct,0),Ht(_t,vt,0),Ht(Bt,St,0),Ht(Ft,Dt,0),Ht(pe,rt,0)),Qt.scale.y=-1,pt.add(Ht(me,St),Ht(Oe,Dt,0)),N.add(Ht(me,St,0),Ht(Oe,Dt,0)),N.scale.y=-1,N.position.y=-6;let tn=Ht(s.gr.build(),Ut,2),ge=Ht(s.rd.build(),wt,2);ge.renderOrder=-10;let We=new _e;We.quad([-40,-3,900],[40,-3,900],[40,-3,-900],[-40,-3,-900],[1,1,1]),We.worldUV(1/70);let Rn=Ht(We.build(),ee,2);Rn.renderOrder=-11,i.add(Ee,Qt,pt,N,tn,ge,Rn);let _s=new le(s.pool.build(),Ao("varying vec2 vUv; varying vec3 vC; varying float vF; void main(){ float r = length(vUv-0.5)*2.0; float a = pow(max(1.0-r,0.0),1.8); gl_FragColor = vec4(vC*a*vF,1.0); }"));_s.renderOrder=2;let vs=new le(s.cone.build(),Ao(`varying vec3 vC; varying float vF; varying vec3 vN; varying vec3 vV; varying vec2 vUv;
    void main(){ float f = abs(dot(normalize(vN), normalize(vV))); float a = f*f*pow(clamp(vUv.y,0.0,1.0),1.5); gl_FragColor = vec4(vC*a*vF,1.0); }`,{},`attribute vec3 color; varying vec2 vUv; varying vec3 vC; varying float vF; varying vec3 vN; varying vec3 vV; uniform float uFog;
    void main(){ vec4 mv = modelViewMatrix*vec4(position,1.0); gl_Position = projectionMatrix*mv; vUv = uv; vC = color; vN = normalMatrix*normal; vV = -mv.xyz; float d = length(mv.xyz); vF = exp(-uFog*uFog*d*d); }`));vs.material.side=Mn,vs.renderOrder=3;let ii=new le(s.streak.build(),Ao(`varying vec2 vUv; varying vec3 vC; varying float vF;
    void main(){ float dx = (vUv.x-0.5)*3.6; float dy = (vUv.y-0.55)*2.4; float gx = exp(-dx*dx); float gy = exp(-dy*dy); gl_FragColor = vec4(vC*gx*gy*vF,1.0); }`,{},`attribute vec3 color; varying vec2 vUv; varying vec3 vC; varying float vF; uniform float uFog;
    void main(){ vec3 right = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]);
      vec3 wp = position + right*(uv.x-0.5)*2.0*normal.x + vec3(0.0,1.0,0.0)*(uv.y-0.5)*2.0*normal.y;
      vec4 mv = viewMatrix*vec4(wp,1.0); gl_Position = projectionMatrix*mv; vUv = uv; vC = color; float d = length(mv.xyz); vF = exp(-uFog*uFog*d*d); }`));ii.frustumCulled=!1,ii.renderOrder=-20,i.add(_s,vs,ii);let ys=Dc(),si=a.length/7,yr=new Float32Array(si*3),Mr=new Float32Array(si),na=new Float32Array(si*3);for(let _=0;_<si;_++)yr.set(a.slice(_*7,_*7+3),_*3),Mr[_]=a[_*7+3],na.set(a.slice(_*7+4,_*7+7),_*3);let Ms=new xe;Ms.setAttribute("position",new fe(yr,3)),Ms.setAttribute("aSize",new fe(Mr,1)),Ms.setAttribute("aColor",new fe(na,3));let br=new xi(Ms,ys);br.frustumCulled=!1,br.renderOrder=5,i.add(br);let E=new U(-.45,.62,-.64).normalize(),B=new It(.05,.058,.115),W=new le(new vi(900,24,16),new Ge({side:un,depthWrite:!1,fog:!1,uniforms:{uMoon:{value:E},uHor:{value:B}},vertexShader:"varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`varying vec3 vDir; uniform vec3 uMoon; uniform vec3 uHor;
      void main(){ vec3 d = normalize(vDir); d.y = abs(d.y); float h = d.y;
        float ih = clamp(1.0-h, 0.0, 1.0);
        vec3 c = mix(vec3(0.008,0.014,0.04), uHor, pow(ih, 3.2));
        c += vec3(0.30,0.15,0.10)*pow(ih, 7.0)*(0.55 + 0.45*d.x);
        float m = max(dot(d, uMoon), 0.0);
        c += vec3(0.75,0.85,1.0)*(smoothstep(0.9993,0.9996,m)*3.0 + pow(m,90.0)*0.35 + pow(m,10.0)*0.08);
        gl_FragColor = vec4(c,1.0); }`}));W.renderOrder=-100,W.frustumCulled=!1,i.add(W),i.fog=new no(B,Wr.value),i.background=B;let Z=new rr(new It(.3,.4,.78),new It(.2,.15,.17),.7),H=new ar(new It(.58,.72,1),1);H.shadow.mapSize.set(2048,2048),H.shadow.bias=-6e-4,H.shadow.normalBias=.6;let yt=H.shadow.camera;yt.left=-110,yt.right=110,yt.top=110,yt.bottom=-110,yt.near=10,yt.far=520,i.add(Z,H,H.target);let At=new _e,Lt=15;for(let _ of[-1.2,1.2]){At.add(new po(Lt,.2,5,48),gt(_,0,0,1,1,1,Math.PI/2),et(8029334));for(let C=0;C<12;C++){let P=C*Math.PI/6;Be(At,[_,0,0],[_,Math.cos(P)*Lt,Math.sin(P)*Lt],.07,et(6976646),3)}}let Wt=[et(14238266),et(3836633),et(14725690),et(4899450)];for(let _=0;_<12;_++){let C=_*Math.PI/6+.26;At.add(I,gt(0,Math.cos(C)*Lt,Math.sin(C)*Lt,2,1.7,1.7,0,-C),Wt[_%4])}let Yt=new Fe;Yt.position.set(103,17.4,-30),Yt.add(new le(At.build(),St));let Vt=48,Jt=new Float32Array(Vt*3),Re=new Float32Array(Vt),ln=new Float32Array(Vt*3),ke=[[2.2,.3,1.4],[.3,1.8,2.2],[2.2,1.5,.3],[.5,2.2,.8]];for(let _=0;_<Vt;_++){let C=_/Vt*Math.PI*2;Jt.set([0,Math.cos(C)*Lt,Math.sin(C)*Lt],_*3),Re[_]=1.5,ln.set(ke[Math.floor(_/4)%4],_*3)}let En=new xe;En.setAttribute("position",new fe(Jt,3)),En.setAttribute("aSize",new fe(Re,1)),En.setAttribute("aColor",new fe(ln,3));let Me=new xi(En,ys);Me.frustumCulled=!1,Yt.add(Me),i.add(Yt);let ie=new _e;for(let _ of[-7,7])for(let C of[-2.4,2.4])Be(ie,[103+C,.15,-30+_],[103+C*.5,17.4,-30],.28,et(5857907),5);let Sr=Ht(ie.build(),St,1);i.add(Sr),n.circle(103,-37,1.6),n.circle(103,-23,1.6);let Ce=Kn(64,64,_=>{let C=_.createRadialGradient(32,32,0,32,32,32);C.addColorStop(0,"rgba(255,255,255,0.9)"),C.addColorStop(1,"rgba(255,255,255,0)"),_.fillStyle=C,_.fillRect(0,0,64,64)},{repeat:!1}),Zn=[];for(let _ of o)for(let C=0;C<6;C++){let P=new nr(new os({map:Ce,color:new It(.34,.3,.36),transparent:!0,opacity:0,depthWrite:!1}));i.add(P),Zn.push({sp:P,s:_,ph:C/6})}let Er=new Ge({uniforms:{uTime:{value:0}},blending:Gn,transparent:!0,depthWrite:!1,vertexShader:"uniform float uTime; varying vec3 vN; varying vec3 vV; void main(){ vec3 p = position*(1.0+0.14*sin(uTime*3.0+position.y*3.0+position.x*2.0)); vec4 mv = modelViewMatrix*vec4(p,1.0); vN = normalize(normalMatrix*normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix*mv; }",fragmentShader:"uniform float uTime; varying vec3 vN; varying vec3 vV; void main(){ float f = clamp(1.0-abs(dot(normalize(vN),vV)),0.0,1.0); float a = f*f*1.8+0.06; vec3 c = mix(vec3(0.2,1.2,0.6), vec3(0.7,0.3,1.3), 0.5+0.5*sin(uTime*2.0+f*6.0)); gl_FragColor = vec4(c*a,1.0); }"}),qi=new uo(2.3,2);for(let _ of c)_.mesh=new le(qi,Er),_.mesh.position.set(_.x,2.2,_.z),i.add(_.mesh);let bs={col:n,lamps:r,blocks:l,towers:R,anomalies:c,fire:te,moon:H,moonDir:E,hemi:Z,mirror:Qt,bridgesM:N,sky:W,cones:vs,streaks:ii,pools:_s,glowMat:ys,mPL:St,mEM:Dt,roadsMat:wt,update(_,C,P){Yt.rotation.x+=_*.12,Er.uniforms.uTime.value=C;for(let D of c)D.x=D.x0+Math.sin(C*.7+D.ph)*3.2,D.z=D.z0+Math.cos(C*.55+D.ph*1.7)*3.2,D.mesh.position.set(D.x,2.2+Math.sin(C*2+D.ph)*.3,D.z);for(let D of Zn){let F=(C*.05+D.ph)%1;D.sp.position.set(D.s[0]+F*34,D.s[1]+F*22,D.s[2]+F*12);let z=5+F*26;D.sp.scale.set(z,z,1),D.sp.material.opacity=.5*(1-F)*Eo(F*8)}W.position.copy(P.position)},setShadowCenter(_,C){let P=Math.round(_/4)*4,D=Math.round(C/4)*4;H.target.position.set(P,0,D),H.position.set(P+E.x*260,E.y*260,D+E.z*260),H.target.updateMatrixWorld()},drawMap(_,C){let P=z=>(z+300)*C,D=z=>(z+200)*C;_.fillStyle="#0d1220",_.fillRect(0,0,600*C,400*C),_.fillStyle="#17304a",_.fillRect(P(-52),0,104*C,400*C),_.fillStyle="#21486b",_.fillRect(P(-40),0,80*C,400*C);let F={park:"#17382a",fpark:"#17382a",zone:"#2c2140",ind:"#2a2622",opera:"#3a3122",garages:"#2a2a2e",palace:"#33301f",mall:"#1d2a3c"};for(let z of l)_.fillStyle=F[z.type]||"#1a2132",_.fillRect(P(z.x0),D(z.z0),(z.x1-z.x0)*C,(z.z1-z.z0)*C);_.fillStyle="#465068";for(let z of Ze)_.fillRect(P(z-Mi(z)),D(-187),Mi(z)*2*C,374*C);for(let z of Je)_.fillRect(P(-287),D(z-7),224*C,14*C),_.fillRect(P(63),D(z-7),224*C,14*C);_.fillStyle="#8b6f6f",_.fillRect(P(-63),D(-67),126*C,14*C),_.fillStyle="#c0483c",_.fillRect(P(-63),D(113),126*C,14*C),_.fillStyle="#d8c79a",_.beginPath(),_.arc(P(181),D(-30),14*C,0,7),_.fill(),_.fillStyle="#e0b040",_.beginPath(),_.arc(P(140),D(30),4*C,0,7),_.fill()}};return bs.setShadowCenter(dn.start[0],dn.start[1]),bs}var Gt={sph:new vi(1,12,9),cyl:new fn(1,1,1,10),cone:new _i(1,1,8),box:new Un(1,1,1)},Uc,vf,yf,U_={arkasha:13123630,max:14375484,dima:856344,igor:15790320,geisler:12729170,pasha:14725168,nikita:13589043,kos:3117020,artem:5027914,sanya:10263708,misha:14180922},Xr=et(16053492),ur=et(526346),Mf=et(14723100),N_=(i,t)=>[i[0]*t,i[1]*t,i[2]*t];function Nc(i,t,e){let n=Kn(128,128,r=>{r.clearRect(0,0,128,128),r.fillStyle=t,r.beginPath(),r.arc(64,64,60,0,7),r.fill(),r.strokeStyle=e,r.lineWidth=5,r.stroke(),r.fillStyle=e,r.font='900 58px "Arial Black", system-ui, sans-serif',r.textAlign="center",r.textBaseline="middle",r.fillText(i,64,68)},{repeat:!1}),s=new le(new ho(.19,20),new an({map:n,transparent:!0}));return s.position.set(0,1.08,.405),s}function bf(i){Uc||(Uc=Hi({vertexColors:!0}),vf=new an({vertexColors:!0}),yf=Hi({vertexColors:!0,map:Kn(128,128,L=>{L.fillStyle="#f2c94c",L.fillRect(0,0,128,128);let T=["#1b1b1b","#ffffff","#c0392b","#1f8a70","#8e6b00","#f7e08a"];for(let I=0;I<90;I++){L.fillStyle=T[I%T.length];let k=3+I*7%9;L.fillRect(I*37%128,I*53%128,k,k+I%3*3)}L.strokeStyle="#7a5a00",L.lineWidth=1.5;for(let I=0;I<9;I++)L.beginPath(),L.arc(I*47%128,I*71%128,6+I%4,0,5),L.stroke()})}));let t=new Fe,e=new Fe;t.add(e);let n=new _e,s=new _e,r=et(U_[i]),a=N_(r,.6),o=i==="dima"?et(1449e3):i==="igor"?et(14474460):i==="pasha"?et(16111470):i==="sanya"?et(13158600):et(15912870),l=i==="igor"?ur:r,c=i==="igor"?ur:a,h=i==="pasha"?yf:Uc,u=i==="arkasha",f=i==="nikita";n.add(Gt.sph,gt(0,1,0,.44,.56,.38),u?et(1316380):f?et(1513243):r),!u&&!f&&n.add(Gt.sph,gt(0,.98,.13,.33,.44,.28),o),n.add(Gt.sph,gt(0,1.62,.02,.4,.34,.36),r),n.add(Gt.box,gt(0,1.52,.34,.16,.03,.04),ur);for(let L of[-1,1]){Be(n,[L*.15,1.85,.1],[L*.19,2.12,.14],.035,r,5),n.add(Gt.sph,gt(L*.19,2.16,.15,.1,.1,.1),Xr),i==="dima"?s.add(Gt.sph,gt(L*.19,2.165,.235,.055,.055,.03),[.3,2.4,2.8]):n.add(Gt.sph,gt(L*.19,2.165,.235,.05,.05,.03),ur),Be(n,[L*.1,1.9,.25],[L*.45,2.55,-.2],.016,c,4);for(let T=0;T<2;T++)Be(n,[L*.36,.95-T*.2,0],[L*.64,.62-T*.2,.1],.035,c,4)}n.add(Gt.sph,gt(0,.62,-.18,.36,.26,.3),l),n.add(Gt.sph,gt(0,.42,-.38,.3,.2,.26),c),n.add(Gt.sph,gt(0,.26,-.6,.36,.07,.22),l);let d=L=>{let T=new _e;Be(T,[0,0,0],[L*.3,-.22,.2],.07,c,5),i==="max"?T.add(Gt.sph,gt(L*.36,-.26,.4,.27,.27,.27),et(13637656)):(T.add(Gt.sph,gt(L*.36,-.26,.38,.19,.25,.15),l),T.add(Gt.cone,gt(L*.36,-.16,.62,.11,.34,.09,0,Math.PI/2),l),T.add(Gt.cone,gt(L*.36,-.36,.58,.08,.26,.07,0,Math.PI/2),c)),i==="artem"&&L>0&&(T.add(Gt.cyl,gt(.38,-.02,.5,.11,.26,.11),et(14721056)),T.add(Gt.cyl,gt(.38,.14,.5,.115,.06,.115),Xr)),i==="artem"&&L<0&&(T.add(Gt.sph,gt(-.38,.02,.56,.07,.11,.26),et(9082790)),T.add(Gt.cone,gt(-.38,.02,.86,.02,.14,.12,0,-Math.PI/2),et(6977414)));let I=new le(T.build(),h);return I.position.set(L*.42,1.3,.05),I.castShadow=!0,e.add(I),I},g=L=>{let T=new _e;T.add(Gt.cyl,gt(0,-.25,0,.09,.5,.09),c),T.add(Gt.sph,gt(0,-.5,.07,.13,.07,.2),l);let I=new le(T.build(),h);return I.position.set(L*.17,.57,0),I.castShadow=!0,e.add(I),I},x=d(-1),m=d(1),p=g(-1),y=g(1),v=null;if(i==="arkasha")n.add(Gt.sph,gt(0,1.08,.2,.19,.36,.24),Xr),n.add(Gt.box,gt(-.09,1.4,.42,.14,.1,.05,0,0,.3),et(10097192)),n.add(Gt.box,gt(.09,1.4,.42,.14,.1,.05,0,0,-.3),et(10097192)),n.add(Gt.box,gt(0,1.4,.44,.05,.07,.05),et(6949916)),n.add(Gt.sph,gt(0,1.48,.2,.33,.2,.22),et(5913122));else if(i==="max")n.add(Gt.cyl,gt(0,.72,0,.43,.24,.37),et(1851304)),n.add(Gt.cyl,gt(0,.86,0,.44,.05,.38),Xr);else if(i==="dima")n.add(Gt.box,gt(0,1.08,-.42,.52,.62,.26),et(1712688)),n.add(Gt.box,gt(0,1.2,-.56,.3,.2,.06),et(2503240)),v={y:.4,c:[.25,.4,.7],s:4.5};else if(i==="igor")e.add(Nc("\u0418\u0411","#ffffff","#000000"));else if(i==="geisler"){n.add(Gt.cone,gt(0,.98,-.14,.66,1.3,.44),et(5906298)),n.add(Gt.cyl,gt(0,1.99,0,.2,.1,.2),Mf);for(let L=0;L<5;L++){let T=L*Math.PI*2/5;n.add(Gt.cone,gt(Math.sin(T)*.17,2.1,Math.cos(T)*.17,.04,.14,.04),Mf)}Be(s,[0,2.75,0],[0,3,0],.015,[1.2,.9,.4],4);for(let L=0;L<6;L++){let T=L*Math.PI/3;s.add(Gt.sph,gt(Math.sin(T)*.26,2.72,Math.cos(T)*.26,.05,.07,.05),[3.2,2.3,1])}s.add(Gt.cyl,gt(0,2.76,0,.27,.02,.27),[1.4,1,.4]),v={y:2.72,c:[1.5,1,.45],s:2.6}}else if(i==="pasha")v={y:1.2,c:[.8,.55,.12],s:3.2};else if(i==="nikita")n.add(Gt.sph,gt(0,1.66,-.09,.45,.38,.36),et(1513243)),n.add(Gt.box,gt(0,2.16,.22,.62,.15,.1),ur),s.add(Gt.box,gt(-.17,2.19,.275,.16,.02,.01),[.6,.8,1.2]);else if(i==="kos")e.add(Nc("\u0421\u041A","#35a7e8","#ffffff")),n.add(Gt.cyl,gt(0,1.46,.36,.09,.14,.09,0,Math.PI/2),et(3357235)),n.add(Gt.sph,gt(0,1.7,-.1,.43,.34,.34),et(4151860));else if(i==="artem")e.add(Nc("\u0410\u041A","#58c152","#ffffff"));else if(i==="sanya")n.add(Gt.sph,gt(0,1.47,.2,.33,.22,.22),et(2368548)),n.add(Gt.box,gt(.5,1,.14,.05,.36,.5),et(3159100)),s.add(Gt.box,gt(.53,1,.14,.01,.3,.44),[.5,.9,1.5]);else if(i==="misha"){n.add(Gt.cyl,gt(0,1.99,-.02,.27,.14,.27),et(7039802)),n.add(Gt.cyl,gt(0,1.93,-.02,.44,.03,.44),et(7039802));let L=-.52,T=1.62;n.add(Gt.sph,gt(L,T,0,.15,.13,.13),r);for(let I of[-1,1])n.add(Gt.sph,gt(L+I*.06,T+.16,.06,.04,.04,.04),Xr),n.add(Gt.sph,gt(L+I*.06,T+.165,.095,.02,.02,.015),ur),n.add(Gt.sph,gt(L+I*.17,T+.02,.08,.06,.08,.05),r)}let w=new le(n.build(),h);return w.castShadow=!0,e.add(w),s.count&&e.add(new le(s.build(),vf)),t.userData={id:i,inner:e,armL:x,armR:m,legL:p,legR:y,ph:Math.random()*6,glow:v},t}function Ro(i,t,e,n){let s=i.userData,r=t*11;s.inner.position.y=Math.abs(Math.sin(r))*.07*e+Math.sin(t*2+s.ph)*.02,s.inner.rotation.z=Math.sin(r)*.07*e,s.legL.rotation.x=Math.sin(r)*.9*e,s.legR.rotation.x=-Math.sin(r)*.9*e;let a=Math.sin(t*1.7+s.ph)*.08,o=n?1:0;s.armL.rotation.x=-Math.sin(r)*.5*e+a-o*(.9+Math.sin(t*9)*.35),s.armR.rotation.x=Math.sin(r)*.5*e-a-o*(.5+Math.cos(t*7)*.3),s.armL.rotation.z=-o*.3,s.armR.rotation.z=o*.3}function Sf(i,t){let e=Kn(256,64,s=>{s.font='800 34px system-ui, "Segoe UI", sans-serif',s.textAlign="center",s.textBaseline="middle";let r=Math.min(250,s.measureText(i).width+36);s.fillStyle="rgba(10,14,24,0.78)",s.beginPath(),s.roundRect?s.roundRect(128-r/2,8,r,48,24):s.rect(128-r/2,8,r,48),s.fill(),s.fillStyle=t,s.fillText(i,128,34)},{repeat:!1}),n=new nr(new os({map:e,transparent:!0,depthWrite:!1,fog:!1}));return n.scale.set(2.6,.65,1),n.position.y=2.95,n}var F_=new fn(1,1,1,12),Fc,Ef,wf=et(15265528),O_=et(1053724),z_=et(789518);function B_(i,t){let e=new _e,n=new _e,s=et(i),r=t==="van",a=r?2:1.5;e.box(-.9,.9,.32,.95,-2.15,2.15,s),e.box(-.93,.93,.3,.52,-2.22,2.22,et(1382172)),e.box(-.8,.8,.95,a,r?-2.05:-1.3,r?1:.75,O_),e.box(-.83,.83,a,a+.08,r?-2.1:-1.35,r?1.05:.8,s,wf),e.box(-.84,.84,.95,a,-.32,-.22,s),r&&e.box(-.84,.84,.95,a,-2.1,-1.2,s),e.box(-.7,.7,.95,.99,1.2,2,wf);for(let o of[-.9,.9])for(let l of[-1.35,1.35])e.add(F_,gt(o,.36,l,.36,.26,.36,0,0,Math.PI/2),z_);t==="mod"&&e.box(-.92,.92,.55,.75,-2.16,2.16,et(1724368));for(let o of[-.62,.62])n.box(o-.2,o+.2,.62,.82,2.14,2.18,[3.2,3,2.4]),n.box(o-.22,o+.22,.66,.82,-2.19,-2.14,[2.6,.12,.08]);return[e.build(),n.build()]}var fr=class{constructor(t,e,n,s,r,a="sedan"){Fc||(Fc=Hi({vertexColors:!0}),Ef=new an({vertexColors:!0}));let[o,l]=B_(r,a);this.g=new Fe,this.body=new Fe,this.g.add(this.body);let c=new le(o,Fc);if(c.castShadow=!0,this.body.add(c,new le(l,Ef)),a==="mod"){this.barMat=new an({color:2245887});let h=new le(new Un(1.1,.14,.3),this.barMat);h.position.set(0,1.68,-.2),this.body.add(h)}this.g.rotation.order="YXZ",t.add(this.g),this.e={x:e,z:n,y:0,vx:0,vz:0,layer:0},this.e.y=Vi(this.e),this.h=s,this.steer=0,this.vy=0,this.kind=a,this.color=r,this.ai=null,this.slip=0,this.maxSpeed=38,this.vf=0,this.roll=0,this.spin=0,this.stun=0,this.sync(0)}drive(t,e,n,s,r){let a=this.e,o=a.layer===2;this.steer+=(n-this.steer)*Math.min(1,t*9);let l=Math.sin(this.h),c=Math.cos(this.h),h=a.vx*l+a.vz*c,u=a.y>Vi(a)+.5;u||(this.h-=this.steer*(2.6/(1+Math.abs(h)/28))*t*Le(h/5,-1,1)),l=Math.sin(this.h),c=Math.cos(this.h);let f=-c,d=l;h=a.vx*l+a.vz*c;let g=a.vx*f+a.vz*d;if(!u){let x=this.maxSpeed*(o?.88:1),m=0;e>0?m=23*e*(1-Le(h/x,0,1))*(h<-1?2:1):e<0&&(m=h>1?36*e:13*e*(1-Le(-h/11,0,1))),o&&(m*=.5),h+=m*t,h-=h*(e===0?.8:.12)*t;let p=o?1:6;s&&(p*=.2,h-=h*1.3*t),this.slip=Math.abs(g),g-=g*Math.min(1,p*t)}return a.vx=l*h+f*g,a.vz=c*h+d*g,this.vf=h,this.roll+=(Le(-g*.035,-.22,.22)-this.roll)*Math.min(1,t*6),this.move(t,r)}move(t,e){let n=this.e;n.x+=n.vx*t,n.z+=n.vz*t;let s=e.resolve(n,1.5,n.layer,.25);Math.abs(n.x)>lr&&(n.x=Math.sign(n.x)*lr,n.vx*=-.3),Math.abs(n.z)>cr&&(n.z=Math.sign(n.z)*cr,n.vz*=-.3);let r=Vi(n);return this.vy>0||n.y>r+.4?(this.vy-=26*t,n.y+=this.vy*t,this.spin+=t*5,n.y<=r&&(n.y=r,this.vy=0,this.spin=0)):n.y+=(r-n.y)*Math.min(1,t*14),s}launch(t){this.vy=t,this.e.y+=.5}sync(){let t=this.e;this.g.position.set(t.x,t.y,t.z),this.g.rotation.set(this.spin,this.h,this.roll)}get speed(){return Math.hypot(this.e.vx,this.e.vz)}},pn=[];for(let i=0;i<Ze.length;i++)for(let t=0;t<Je.length;t++)pn.push({x:Ze[i],z:Je[t],xi:i,zi:t,nb:[]});var Oc=(i,t)=>i*Je.length+t;for(let i of pn){i.zi>0&&i.nb.push(Oc(i.xi,i.zi-1)),i.zi<Je.length-1&&i.nb.push(Oc(i.xi,i.zi+1));for(let t of[-1,1]){let e=i.xi+t;if(e<0||e>=Ze.length)continue;(!(i.xi<4!=e<4)||Je[i.zi]===-60||Je[i.zi]===120)&&i.nb.push(Oc(e,i.zi))}}function zc(i,t,e=0,n=1e9){let s=-1,r=1e9;for(let a=0;a<pn.length;a++){let o=Math.hypot(pn[a].x-i,pn[a].z-t);o>=e&&o<=n&&o<r&&(r=o,s=a)}return s}var Tf=(i,t)=>i.x===140&&t.x===140?7.6:3.3;function Af(i,t,e){let n=pn[t],s=pn[e],r=s.x-n.x,a=s.z-n.z,o=Math.hypot(r,a),l=r/o,c=a/o;i.ai={type:"traffic",from:t,to:e,sp:0,max:9+Math.random()*5};let h=Tf(n,s);i.e.x=n.x+l*o*.5-c*h,i.e.z=n.z+c*o*.5+l*h,i.h=Math.atan2(l,c),i.e.y=0,i.sync()}function Co(i,t,e,n){let s=i.ai,r=i.e,a=pn[s.from],o=pn[s.to],l=o.x-a.x,c=o.z-a.z,h=Math.hypot(l,c),u=l/h,f=c/h,d=(r.x-a.x)*u+(r.z-a.z)*f;if(d>h-8){let k=s.from,S=o.nb.filter(A=>A!==k);s.from=s.to,s.to=S.length?S[Math.floor(Math.random()*S.length)]:k;return}let g=Math.min(d+8,h),x=Tf(a,o),m=a.x+u*g-f*x,p=a.z+f*g+u*x;i.h+=yi(i.h,Math.atan2(m-r.x,p-r.z))*Math.min(1,t*3.2);let y=Math.sin(i.h),v=Math.cos(i.h),w=e-r.x,L=n-r.z,T=Math.hypot(w,L),I=s.max;i.stun>0&&(i.stun-=t,I=0),T<10&&(w*y+L*v)/(T+.01)>.55&&(I=0),s.sp+=(I-s.sp)*Math.min(1,t*2.5),r.vx=y*s.sp,r.vz=v*s.sp,r.x+=r.vx*t,r.z+=r.vz*t,r.y=Vi(r),i.vf=s.sp,i.sync()}var Po=class{constructor(t,e){let n=new Float32Array(e*3),s=new Float32Array(e);for(let a=0;a<e;a++)n[a*3]=Math.random(),n[a*3+1]=Math.random(),n[a*3+2]=Math.random(),s[a]=Math.random();let r=new xe;r.setAttribute("position",new fe(n,3)),r.setAttribute("aSeed",new fe(s,1)),this.u={uTime:{value:0},uCam:{value:new U},uBox:{value:new U(72,42,72)},uScale:hr,uCar:{value:new U},uCarDir:{value:new U(0,0,1)},uHead:{value:0}},this.n=e,this.pts=new xi(r,new Ge({uniforms:this.u,blending:Gn,transparent:!0,depthWrite:!1,vertexShader:`attribute float aSeed; uniform float uTime; uniform vec3 uCam; uniform vec3 uBox; uniform float uScale; uniform vec3 uCar; uniform vec3 uCarDir; uniform float uHead;
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
          vA = (0.3 + 0.55*low)*smoothstep(0.6,3.0,d)*(1.0-smoothstep(26.0,36.0,d)); }`,fragmentShader:"varying float vA; varying vec3 vC; void main(){ float r = length(gl_PointCoord-0.5)*2.0; gl_FragColor = vec4(vC*vA*(1.0-smoothstep(0.15,1.0,r)),1.0); }"})),this.pts.frustumCulled=!1,this.pts.renderOrder=8,t.add(this.pts)}density(t){this.pts.geometry.setDrawRange(0,Math.floor(this.n*t))}},Lo=class{constructor(t,e=420){this.n=e,this.i=0;let n=new xe;this.p=new Float32Array(e*3),this.v=new Float32Array(e*3),this.t=new Float32Array(e*2).fill(-99),this.c=new Float32Array(e*3),n.setAttribute("position",new fe(this.p,3)),n.setAttribute("aVel",new fe(this.v,3)),n.setAttribute("aT",new fe(this.t,2)),n.setAttribute("aColor",new fe(this.c,3)),this.u={uTime:{value:0},uScale:hr},this.pts=new xi(n,new Ge({uniforms:this.u,blending:Gn,transparent:!0,depthWrite:!1,vertexShader:`attribute vec3 aVel; attribute vec2 aT; attribute vec3 aColor; uniform float uTime; uniform float uScale; varying vec3 vC;
        void main(){ float age = uTime - aT.x; float k = clamp(age/aT.y, 0.0, 1.0);
          vec3 p = position + aVel*age; p.y -= 4.0*age*age;
          vec4 mv = modelViewMatrix*vec4(p,1.0); gl_Position = projectionMatrix*mv;
          gl_PointSize = (age < 0.0 || k >= 1.0) ? 0.0 : clamp(0.3*uScale/max(-mv.z,0.5)*(0.5+k), 1.0, 48.0);
          vC = aColor*(1.0-k)*(1.0-k); }`,fragmentShader:"varying vec3 vC; void main(){ float r = length(gl_PointCoord-0.5)*2.0; gl_FragColor = vec4(vC*(1.0-smoothstep(0.0,1.0,r)),1.0); }"})),this.pts.frustumCulled=!1,this.pts.renderOrder=9,t.add(this.pts),this.dirty=!1}emit(t,e,n,s,r,a,o,l,c,h){let u=this.i;this.i=(u+1)%this.n,this.p[u*3]=t,this.p[u*3+1]=e,this.p[u*3+2]=n,this.v[u*3]=s,this.v[u*3+1]=r,this.v[u*3+2]=a,this.t[u*2]=this.u.uTime.value,this.t[u*2+1]=o,this.c[u*3]=l,this.c[u*3+1]=c,this.c[u*3+2]=h,this.dirty=!0}burst(t,e,n,s,r,a,o,l,c){for(let h=0;h<s;h++){let u=Math.random()*6.283,f=Math.random()*2-1,d=Math.sqrt(1-f*f)*r*(.5+Math.random()*.5);this.emit(t,e,n,Math.cos(u)*d,f*r,Math.sin(u)*d,a*(.6+Math.random()*.4),o,l,c)}}update(t){if(this.u.uTime.value=t,this.dirty){let e=this.pts.geometry.attributes;e.position.needsUpdate=e.aVel.needsUpdate=e.aT.needsUpdate=e.aColor.needsUpdate=!0,this.dirty=!1}}},Io=class{constructor(t,e=700){this.n=e,this.i=0,this.p=new Float32Array(e*12);let n=new xe;n.setAttribute("position",new fe(this.p,3));let s=[];for(let r=0;r<e;r++)s.push(r*4,r*4+1,r*4+2,r*4,r*4+2,r*4+3);n.setIndex(s),this.m=new le(n,new an({color:329484,transparent:!0,opacity:.42,depthWrite:!1,side:Mn})),this.m.frustumCulled=!1,this.m.renderOrder=1,t.add(this.m),this.last=null}seg(t,e,n,s,r,a,o){let l=s-t,c=a-n,h=Math.hypot(l,c)||1,u=-c/h*o,f=l/h*o,d=this.i*12,g=this.p;g[d]=t-u,g[d+1]=e,g[d+2]=n-f,g[d+3]=t+u,g[d+4]=e,g[d+5]=n+f,g[d+6]=s+u,g[d+7]=r,g[d+8]=a+f,g[d+9]=s-u,g[d+10]=r,g[d+11]=a-f,this.i=(this.i+1)%this.n,this.m.geometry.attributes.position.needsUpdate=!0}},Do=class{constructor(t,e=400){this.n=e,this.k=0,this.p=new Float32Array(e*3),this.s=new Float32Array(e),this.c=new Float32Array(e*3);let n=new xe;n.setAttribute("position",new fe(this.p,3)),n.setAttribute("aSize",new fe(this.s,1)),n.setAttribute("aColor",new fe(this.c,3)),this.pts=new xi(n,Dc()),this.pts.frustumCulled=!1,this.pts.renderOrder=6,t.add(this.pts)}begin(){this.k=0}add(t,e,n,s,r,a,o){let l=this.k;l>=this.n||(this.p[l*3]=t,this.p[l*3+1]=e,this.p[l*3+2]=n,this.s[l]=s,this.c[l*3]=r,this.c[l*3+1]=a,this.c[l*3+2]=o,this.k++)}end(){let t=this.pts.geometry.attributes;t.position.needsUpdate=t.aSize.needsUpdate=t.aColor.needsUpdate=!0,this.pts.geometry.setDrawRange(0,this.k)}},dr=class{constructor(t){let e=new Ge({uniforms:{uColor:{value:new It(1,.8,.2)},uTime:{value:0},uFog:Wr},blending:Gn,transparent:!0,depthWrite:!1,side:Mn,vertexShader:"varying vec2 vUv; varying float vF; uniform float uFog; void main(){ vUv = uv; vec4 mv = modelViewMatrix*vec4(position,1.0); float d = length(mv.xyz); vF = exp(-uFog*uFog*d*d*0.25); gl_Position = projectionMatrix*mv; }",fragmentShader:"uniform vec3 uColor; uniform float uTime; varying vec2 vUv; varying float vF; void main(){ float iy = clamp(1.0-vUv.y, 0.0, 1.0); float a = pow(iy, 2.2)*0.9 + 0.05*iy; a *= 0.75 + 0.25*sin(uTime*4.0 - vUv.y*30.0); gl_FragColor = vec4(uColor*a*vF*1.6, 1.0); }"});this.mat=e,this.g=new Fe;let n=new le(new fn(1.3,2.2,70,20,1,!0),e);n.position.y=35,this.g.add(n),this.ring=new le(new fo(3.6,4.4,40),new an({color:16763955,transparent:!0,opacity:.9,blending:Gn,depthWrite:!1,side:Mn})),this.ring.rotation.x=-Math.PI/2,this.ring.position.y=.3,this.g.add(this.ring),this.g.visible=!1,this.g.renderOrder=7,t.add(this.g)}set(t,e,n,s){this.g.position.set(t,e,n),this.g.visible=!0,this.mat.uniforms.uColor.value.setHex(s),this.ring.material.color.setHex(s)}hide(){this.g.visible=!1}update(t){this.mat.uniforms.uTime.value=t;let e=1+Math.sin(t*3)*.12;this.ring.scale.set(e,e,1)}};var pr=i=>440*Math.pow(2,(i-69)/12),k_={maj:[0,2,4,5,7,9,11],min:[0,2,3,5,7,8,10],dor:[0,2,3,5,7,9,10],hmin:[0,2,3,5,7,8,11],phr:[0,1,3,5,7,8,10]},Qn=(i,t,e)=>{let n=k_[t],s=Math.floor(e/7);return i+n[(e%7+7)%7]+12*s},H_="0123456789abcde",Rf=i=>i==="z"?-1:i==="y"?-2:i==="x"?-3:H_.indexOf(i),qn={arkasha:{name:"\u0421\u0432\u0438\u043D\u0433 \u0432 \u0431\u0430\u0431\u043E\u0447\u043A\u0435",bpm:132,sb:4,steps:16,sw8:.6,root:50,sc:"dor",seven:1,g:.92,rv:.2,prog:[0,3,0,[4,"hmin"]],d:{h:"x...x.x.x...x.x.",k:"x.......x.......",b:"....x.......x..."},b:{i:"walk",p:"0...2...4...6...",o:2},c:{i:"organ",p:"......x.......x.",len:2,o:1},l:{i:"vibe",o:1,bars:["4...7...6.4.....","3...6...4.3.....","4...7...9.7.6...","4.......2.0....."]}},max:{name:"\u0424\u043E\u043D\u043A \u043D\u0430 \u0440\u0438\u043D\u0433\u0435",bpm:138,sb:4,steps:16,root:52,sc:"phr",g:1,rv:.12,prog:[0,0,5,6],d:{k:"x.....x...x.....",c:"....x.......x...",h:"x.x.x.x.x.x.xxxx"},b:{i:"808",p:"0-----0---0--7--",o:1},c:{i:"pad",p:"x...............",len:16,o:1,v:.5},l:{i:"cowbell",o:1,bars:["7.7.5.7.....4.5.","7.7.5.7...8.7.5.","5.5.4.5.....2.4.","6.6.5.6...7...4."]}},dima:{name:"\u0421\u0438\u043D\u0442\u0432\u0435\u0439\u0432 11.1.4",bpm:104,sb:4,steps:16,root:50,sc:"min",g:.64,rv:.3,prog:[0,5,2,6],d:{k:"x...x...x...x...",s:"....x.......x...",h:"..x...x...x...x."},b:{i:"pluck",p:"0.0.0.0.0.0.0.7.",o:2},c:{i:"pad",p:"x...............",len:16,o:1},a:{i:"pluck",p:"0123012301230123",o:1,v:.5},l:{i:"saw",o:1,bars:["7---....6.4-....","5---....4.2-....","4---..5.7---....","6---..4.2---...."]}},igor:{name:"\u0412\u0435\u0441\u0442\u0435\u0440\u043D, \u0447\u0435\u0442\u0432\u0451\u0440\u0442\u043E\u0435 \u043F\u0440\u043E\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u0435",bpm:96,sb:4,steps:16,root:57,sc:"dor",g:1.12,rv:.34,prog:[0,0,6,3,0,0,6,0],d:{r:"x..x..x.x..x..x.",sh:"x.x.x.x.x.x.x.x.",k:"x.......x......."},b:{i:"walk",p:"0.......4.......",o:2},c:{i:"strum",p:"....x.......x...",len:4,o:1},l:{i:"twang",o:0,i2:"whistle",o2:1,bars:["0.....2.4...7...","6...4.......2.4.","6.....4.2...4...","0-----......z.0.","7---....9.7.6...","4---........6.7.","6.....7.6.4.2...","0-------........"]}},geisler:{name:"\u041A\u043B\u0430\u0432\u0435\u0441\u0438\u043D \u0447\u0435\u0440\u0435\u0437 \u041C\u0435\u0433\u0430\u0444\u043E\u043D",bpm:112,sb:4,steps:16,root:55,sc:"min",g:1.5,rv:.3,fx:"modem",prog:[0,3,6,2,5,3,[4,"hmin"],0],d:{k:"x.......x.......",h:"....x.......x..."},b:{i:"harpsi",p:"0.......0...4...",o:2},a:{i:"harpsi",p:"0212021202120212",o:0,v:.8},l:{i:"harpsi",o:1,rel:1,bars:["7.....6.4...2...","4.....2.0...z..."]}},pasha:{name:"\u0417\u043E\u043B\u043E\u0442\u043E\u0439 \u0432\u0430\u043B\u044C\u0441",bpm:168,sb:4,steps:12,root:62,sc:"maj",g:1.7,rv:.36,prog:[0,0,1,4,0,5,1,4],d:{tr:"x..........."},b:{i:"walk",p:"0-..........",o:2,v:1.6},c:{i:"pizz",p:"....x...x...",len:2,o:0,v:1.8},l:{i:"glock",o:1,v:.75,bars:["4---....7...","9---....7...","8---....6...","4-------....","4---....7...","b---....9...","8...6...4...","7-------...."]}},nikita:{name:"\u0427\u0438\u043F\u0442\u044E\u043D \u0438\u0437 \u0442\u0440\u0435\u0442\u044C\u0435\u0439 \u0438\u0433\u0440\u044B",bpm:150,sb:4,steps:16,root:60,sc:"maj",g:.72,rv:.06,prog:[0,4,5,3],d:{k:"x...x...x...x...",s:"....x.......x...",h:"x.x.x.x.x.x.x.x."},b:{i:"chip",p:"0.0.7.0.0.0.7.0.",o:1},a:{i:"chip",p:"0123012301230123",o:1,v:.45},l:{i:"square",o:1,bars:["4.4.7...9.7.4...","4.4.6...8.6.4...","2.2.5...7.5.2...","3.5.7.9.7...5..."]}},kos:{name:"\u0417\u043E\u043D\u0430. \u0422\u0440\u0435\u0441\u043A \u2014 \u044D\u0442\u043E \u043D\u043E\u0440\u043C\u0430\u043B\u044C\u043D\u043E",bpm:64,sb:4,steps:16,root:48,sc:"phr",g:.68,rv:.6,fx:"geiger",prog:[0,0,5,4],d:{k:"x..x............"},b:{i:"sub",p:"0---------------",o:1,v:.45},c:{i:"drone",p:"x...............",len:16,o:1},l:{i:"bell",o:1,v:1.7,bars:["....7.......4...","........2.......","....5.......7...","........4.....3."]}},artem:{name:"\u041F\u0438\u0440\u0430\u0442\u0441\u043A\u0430\u044F \u0434\u0436\u0438\u0433\u0430",bpm:104,sb:6,steps:12,root:62,sc:"min",g:.8,rv:.22,prog:[0,6,0,[4,"hmin"]],d:{k:"x.....x.....",c:"...x.....x..",sh:"x.x.x.x.x.x."},b:{i:"walk",p:"0-....4-....",o:2},c:{i:"reed",p:"x...........",len:12,o:0},l:{i:"fiddle",o:1,bars:["0.2.4.7.4.2.","6.4.2.4.2.z.","0.2.4.7.9.7.","6.4.z.0-...."]}},sanya:{name:"\u041B\u043E\u0443-\u0444\u0430\u0439, \u043D\u0430\u0447\u0430\u043B\u043E \u0442\u044F\u0433\u043E\u043C\u043E\u0442\u043D\u043E\u0435",bpm:72,sb:4,steps:16,sw16:.28,root:53,sc:"maj",seven:1,g:.72,rv:.3,lp:5200,fx:"vinyl",prog:[0,2,1,4],d:{k:"x.....x...x.....",s:"....x.......x...",h:"x.x.x.x.x.x.x.x."},b:{i:"sub",p:"0-----0---4-----",o:1,v:.6},c:{i:"rhodes",p:"x.......x.......",len:7,o:1},l:{i:"vibe",o:1,bars:["....4...7.....6.","....4.......2...","....3...5.....4.","....2..........."]}},misha:{name:"\u0423\u043A\u0443\u043B\u0435\u043B\u0435 \u0443 \u043A\u043E\u0441\u0442\u0440\u0430",bpm:116,sb:4,steps:16,root:60,sc:"maj",g:1,rv:.2,prog:[0,3,0,4],d:{k:"x.......x.......",sh:"x.x.x.x.x.x.x.x.",c:"....x.......x..."},b:{i:"walk",p:"0.......4.......",o:2},c:{i:"strum",p:"x..x.xx.x..x.xx.",len:2,o:1,v:.7},l:{i:"whistle",o:1,bars:["4...4.6.7...4...","5...5.7.8...5...","4...4.6.7.9.7...","6...4...2......."]}}};function V_(i,t){let e=Math.floor(i.sampleRate*t),n=i.createBuffer(2,e,i.sampleRate);for(let s=0;s<2;s++){let r=n.getChannelData(s);for(let a=0;a<e;a++)r[a]=(Math.random()*2-1)*Math.pow(1-a/e,2.8)}return n}var qr=class{constructor(t,e){this.c=t,this.th=null,this.id=null,this.step=0,this.next=0,this.sd=.1,this.drive=0,this.rush=0,this.sum=t.createGain(),this.trim=t.createGain(),this.tone=t.createBiquadFilter(),this.tone.type="lowpass",this.tone.frequency.value=16e3,this.air=t.createBiquadFilter(),this.air.type="highshelf",this.air.frequency.value=2800,this.air.gain.value=5,this.sum.connect(this.air),this.air.connect(this.tone),this.tone.connect(this.trim),this.trim.connect(e),this.rev=t.createConvolver(),this.rev.buffer=V_(t,2),this.revIn=t.createGain(),this.revIn.connect(this.rev),this.revOut=t.createGain(),this.rev.connect(this.revOut),this.revOut.connect(this.sum),this.dry=t.createGain(),this.dry.connect(this.sum),this.w1=t.createGain(),this.w1.connect(this.sum),this.s1=t.createGain(),this.s1.gain.value=.28,this.w1.connect(this.s1),this.s1.connect(this.revIn),this.w2=t.createGain(),this.w2.connect(this.sum),this.s2=t.createGain(),this.s2.gain.value=.7,this.w2.connect(this.s2),this.s2.connect(this.revIn);let n=t.createBuffer(1,t.sampleRate*2,t.sampleRate),s=n.getChannelData(0);for(let r=0;r<s.length;r++)s[r]=Math.random()*2-1;this.noise=n}_dest(t,e){let n=t===2?this.w2:t===1?this.w1:this.dry;if(!e||!this.c.createStereoPanner)return n;let s=this.c.createStereoPanner();return s.pan.value=e,s.connect(n),s}_o(t,e,n,s,r,a={}){let o=this.c,l=o.createOscillator(),c=o.createGain(),h=a.a||.004;if(l.type=t,a.from?(l.frequency.setValueAtTime(e*a.from,n),l.frequency.exponentialRampToValueAtTime(e,n+(a.st||.05))):(l.frequency.setValueAtTime(e,n),a.to&&l.frequency.exponentialRampToValueAtTime(a.to,n+(a.st||s))),a.det&&(l.detune.value=a.det),a.vib){let f=o.createOscillator(),d=o.createGain();f.frequency.value=a.vib,d.gain.setValueAtTime(0,n),d.gain.linearRampToValueAtTime(e*.011,n+Math.min(.3,s*.6)),f.connect(d),d.connect(l.frequency),f.start(n),f.stop(n+s+.2)}if(c.gain.setValueAtTime(1e-4,n),c.gain.linearRampToValueAtTime(r,n+h),a.sus){let f=Math.min(a.rel||.08,s*.5);c.gain.setValueAtTime(r,n+Math.max(h,s-f)),c.gain.linearRampToValueAtTime(1e-4,n+s+.01)}else c.gain.exponentialRampToValueAtTime(1e-4,n+h+s);let u=l;if(a.lp){let f=o.createBiquadFilter();f.type=a.ft||"lowpass",f.frequency.setValueAtTime(a.lp,n),a.lpTo&&f.frequency.exponentialRampToValueAtTime(a.lpTo,n+(a.lt||s)),f.Q.value=a.q||.7,l.connect(f),u=f}u.connect(c),c.connect(this._dest(a.w,a.pan)),l.start(n),l.stop(n+s+h+.06)}_n(t,e,n,s,r,a={}){let o=this.c,l=o.createBufferSource(),c=o.createBiquadFilter(),h=o.createGain(),u=a.a||.001;l.buffer=this.noise,c.type=s,c.frequency.value=r,c.Q.value=a.q||.7,h.gain.setValueAtTime(1e-4,t),h.gain.linearRampToValueAtTime(n,t+u),h.gain.exponentialRampToValueAtTime(1e-4,t+u+e),l.connect(c),c.connect(h),h.connect(this._dest(a.w,a.pan)),l.start(t,Math.random()*1.5),l.stop(t+e+u+.05)}drum(t,e,n){if(t==="k")this._o("sine",165,e,.26,n*.9,{to:46,st:.11}),this._o("triangle",330,e,.06,n*.3,{to:95,st:.05}),this._n(e,.012,n*.25,"highpass",2600);else if(t==="s")this._n(e,.16,n*.7,"bandpass",2200,{q:.5,w:1}),this._o("triangle",215,e,.085,n*.4,{to:150});else if(t==="h")this._n(e,.035,n*.42,"highpass",7600,{pan:.25});else if(t==="o")this._n(e,.2,n*.32,"highpass",7e3,{pan:.25});else if(t==="c"){for(let s=0;s<3;s++)this._n(e+s*.011,.02,n*.35,"bandpass",1350,{q:.9});this._n(e+.033,.12,n*.5,"bandpass",1350,{q:.9,w:1})}else t==="r"?(this._o("triangle",1180,e,.03,n*.45,{to:820,w:1,pan:-.3}),this._n(e,.018,n*.2,"bandpass",2400,{q:2})):t==="sh"?this._n(e,.05,n*.3,"bandpass",6200,{q:.8,a:.012,pan:-.25}):t==="b"?this._n(e,.12,n*.45,"bandpass",3600,{q:.4,a:.02,w:1}):t==="tr"&&(this._o("sine",2637,e,.9,n*.12,{w:2,pan:.4}),this._o("sine",5290,e,.5,n*.05,{w:2,pan:.4}))}bass(t,e,n,s,r){t==="808"?(this._o("sine",n,e,s*1.1,r*.8,{from:1.8,st:.045}),this._o("square",n*2,e,s*.8,r*.3,{lp:1400,lpTo:400}),this._o("sawtooth",n*3,e,s*.4,r*.1,{lp:2e3})):t==="sub"?(this._o("sine",n,e,s,r*.5,{sus:1,rel:.1,a:.02}),this._o("triangle",n*2,e,s,r*.4,{sus:1,rel:.1,a:.02}),this._o("sawtooth",n*2,e,s,r*.16,{lp:900,sus:1,rel:.1,a:.02})):t==="pluck"?(this._o("sawtooth",n,e,Math.min(s,.32),r*.8,{lp:1500,lpTo:230,q:2}),this._o("square",n*2,e,.12,r*.16,{lp:1200})):t==="walk"?(this._o("triangle",n,e,Math.min(s,.42),r*.8,{}),this._o("sine",n*2,e,.24,r*.4,{}),this._o("sawtooth",n*2,e,.14,r*.16,{lp:1400})):t==="chip"?(this._o("square",n,e,Math.min(s,.14),r*.5,{sus:1,rel:.02}),this._o("square",n*2,e,.06,r*.14,{sus:1,rel:.02})):t==="harpsi"&&(this._o("sawtooth",n,e,.5,r*.6,{lp:2600,lpTo:500}),this._o("square",n*2,e,.2,r*.25,{lp:3e3}))}chord(t,e,n,s,r){let a=n.length;n.forEach((o,l)=>{let c=pr(o),h=a>1?(l/(a-1)-.5)*.7:0;t==="pad"?(this._o("sawtooth",c,e,s,r*.16,{det:-9,lp:1900,sus:1,a:Math.min(.5,s*.3),rel:.4,w:2,pan:h}),this._o("sawtooth",c,e,s,r*.16,{det:9,lp:1900,sus:1,a:Math.min(.5,s*.3),rel:.4,w:2,pan:-h})):t==="drone"?(this._o("sawtooth",c,e,s,r*.2,{det:-6,lp:700,sus:1,a:s*.4,rel:s*.4,w:2,pan:h}),this._o("sine",c*2,e,s,r*.12,{sus:1,a:s*.45,rel:s*.4,w:2,pan:-h,vib:.3})):t==="organ"?(this._o("sine",c,e,s,r*.24,{sus:1,rel:.03,w:1,pan:h}),this._o("sine",c*2,e,s,r*.14,{sus:1,rel:.03,w:1,pan:h}),this._o("sine",c*3,e,s,r*.08,{sus:1,rel:.03,w:1,pan:h})):t==="rhodes"?(this._o("sine",c,e,s*1.2,r*.34,{w:1,pan:h,a:.008}),this._o("sine",c*4,e,s*.3,r*.08,{w:1,pan:h}),this._o("triangle",c*2,e,s*.6,r*.12,{w:1,pan:h})):t==="pizz"?(this._o("triangle",c,e,.2,r*.3,{w:2,pan:h}),this._o("sine",c*2,e,.1,r*.1,{w:2,pan:h})):t==="reed"?(this._o("square",c,e,s,r*.07,{det:-7,lp:2300,sus:1,a:.04,rel:.08,w:1,pan:h,vib:5.5}),this._o("sawtooth",c,e,s,r*.08,{det:7,lp:2300,sus:1,a:.04,rel:.08,w:1,pan:-h})):t==="strum"&&this.lead("uke",e+l*.014,c,.45,r*.5,h)})}lead(t,e,n,s,r,a=.12){if(t==="saw")this._o("sawtooth",n,e,s,r*.25,{det:-8,lp:3800,q:1,sus:1,rel:.1,a:.02,vib:5.5,w:2,pan:a}),this._o("sawtooth",n,e,s,r*.25,{det:8,lp:3800,q:1,sus:1,rel:.1,a:.02,w:2,pan:-a});else if(t==="vibe"||t==="bell"||t==="glock"){let o=t==="glock"?2:1;this._o("sine",n*o,e,s*1.6+.4,r*(t==="glock"?.3:.5),{w:2,pan:a}),this._o("sine",n*o*4,e,s*.5+.1,r*.1,{w:2,pan:a}),t!=="vibe"&&this._o("sine",n*o*6.8,e,.12,r*.035,{w:2,pan:a})}else t==="twang"?(this._o("sawtooth",n,e,.6,r*.55,{from:1.025,st:.07,lp:3400,lpTo:520,q:4,lt:.35,w:2,pan:a}),this._o("square",n,e,.25,r*.08,{lp:1800,w:2,pan:a})):t==="whistle"?(this._o("sine",n,e,s,r*.42,{sus:1,a:.05,rel:.1,vib:5.3,w:2,pan:a}),this._o("sine",n*2,e,s,r*.06,{sus:1,a:.05,rel:.1,w:2,pan:a}),this._n(e,s,r*.02,"bandpass",n*2,{q:3,a:.04,w:2})):t==="square"?(this._o("square",n,e,s,r*.16,{sus:1,rel:.02,pan:a}),this._o("square",n*2,e,s,r*.04,{sus:1,rel:.02,pan:-a})):t==="cowbell"?(this._o("square",n,e,.24,r*.34,{lp:2600,ft:"bandpass",q:1.6,w:1,pan:a}),this._o("square",n*1.504,e,.2,r*.24,{lp:2600,ft:"bandpass",q:1.6,w:1,pan:a})):t==="fiddle"?this._o("sawtooth",n,e,s,r*.34,{lp:3900,q:1.2,sus:1,a:.03,rel:.05,vib:6,w:1,pan:a}):t==="harpsi"?(this._o("sawtooth",n,e,.42,r*.38,{lp:6e3,lpTo:1100,w:1,pan:a}),this._o("square",n*2,e,.16,r*.14,{lp:7e3,w:1,pan:a})):t==="uke"?(this._o("triangle",n,e,s,r*.5,{w:1,pan:a}),this._o("sawtooth",n,e,s*.5,r*.22,{lp:3600,lpTo:800,w:1,pan:a})):(t==="pluck"||t==="chip")&&this._o(t==="chip"?"square":"sawtooth",n,e,.16,r*(t==="chip"?.1:.22),t==="chip"?{sus:1,rel:.02,pan:a}:{lp:2400,lpTo:500,q:2,w:1,pan:a})}fx(t,e,n){if(t==="geiger"){let s=2+Math.random()*9;for(let r=e+Math.random()*.2;r<e+n;r+=-Math.log(1-Math.random()*.98)/s)this._n(r,.004,.26+Math.random()*.14,"highpass",2800,{pan:Math.random()-.5});Math.random()<.3&&this._n(e+Math.random()*n,.9,.05,"bandpass",420,{q:9,w:2})}else if(t==="vinyl"){for(let s=e;s<e+n;s+=-Math.log(1-Math.random()*.98)/7)this._n(s,.003,.03+Math.random()*.06,"highpass",1800,{pan:Math.random()-.5});this._n(e,n,.012,"lowpass",5e3,{a:.02})}else if(t==="modem"){let s=[1070,1270,2025,2225,980,1650,1850];for(let r=0;r<16;r++)this._o("sine",s[Math.floor(Math.random()*s.length)],e+r*.045,.04,.035,{sus:1,rel:.005,pan:.5});this._n(e+.72,.35,.03,"bandpass",1800,{q:.5,pan:.5})}}setTheme(t){let e=qn[t];if(!e||this.id===t)return;this.th=e,this.id=t,this.step=0;let n=this.c.currentTime;this.next=Math.max(this.next,n+.06),this.tone.frequency.setTargetAtTime(e.lp||16e3,n,.1),this.trim.gain.setTargetAtTime(e.g||1,n,.08),this.revOut.gain.setTargetAtTime(.5+(e.rv||.25),n,.1)}tones(t,e){let n=t.prog[e%t.prog.length],s=Array.isArray(n)?n[0]:n,r=Array.isArray(n)?n[1]:t.sc,a=[Qn(t.root,r,s),Qn(t.root,r,s+2),Qn(t.root,r,s+4)];return t.seven&&a.push(Qn(t.root,r,s+6)),{d:s,sc:r,ms:a}}hold(t,e){let n=1;for(;e+n<t.length&&t[e+n]==="-";)n++;return n}schedule(t){let e=this.th;if(e)for(;this.next<t;){this.sd=60/(e.bpm*(1+.1*this.rush))/e.sb;let n=this.step%e.steps,s=Math.floor(this.step/e.steps),r=this.next;e.sw8&&n%4===2?r+=this.sd*e.sw8:e.sw16&&n%2===1&&(r+=this.sd*e.sw16),this.playStep(e,s,n,r),this.step++,this.next+=this.sd}}playStep(t,e,n,s){let r=this.sd,a=this.tones(t,e),o=this.drive;for(let l in t.d)t.d[l][n]==="x"&&this.drum(l,s,1);if(o>.4&&(n%2===1&&this.drum("h",s,.8*o),n%t.sb===t.sb>>1&&this.drum("r",s,.7*o),n%t.sb===0&&!(t.d.k&&t.d.k[n]==="x")&&this.drum("k",s,.7*o)),t.b){let l=t.b.p[n];l!=="."&&l!=="-"&&this.bass(t.b.i,s,pr(Qn(t.root,a.sc,a.d+Rf(l))-12*t.b.o),this.hold(t.b.p,n)*r,.4*(t.b.v||1))}if(t.c&&t.c.p[n]==="x"&&this.chord(t.c.i,s,a.ms.map(l=>l+12*t.c.o),t.c.len*r,t.c.v||1),t.a){let l=t.a.p[n];if(l!=="."){let c=+l,h=a.ms[c%a.ms.length]+12*Math.floor(c/a.ms.length)+12*t.a.o;this.lead(t.a.i,s,pr(h),r*1.5,t.a.v||.6,n%2?.35:-.35)}}if(t.l){let l=e%t.l.bars.length,c=t.l.bars[l],h=c[n];if(h!=="."&&h!=="-"){let u=t.l.i2&&l>=t.l.bars.length/2,f=(t.l.rel?a.d:0)+Rf(h);this.lead(u?t.l.i2:t.l.i,s,pr(Qn(t.root,a.sc,f)+12*(u?t.l.o2:t.l.o)),this.hold(c,n)*r,t.l.v||1)}}t.fx&&n===0&&(t.fx!=="modem"||e%4===3)&&this.fx(t.fx,s,t.steps*r)}sting(t,e){let n=this.th||qn.dima,s=(r,a=1)=>pr(Qn(n.root,n.sc,r)+12*a);t==="win"?([0,2,4,7].forEach((r,a)=>{this.lead("vibe",e+a*.085,s(r),.3,1.1),this.lead("saw",e+a*.085,s(r,0),.12,.7)}),this.chord("pad",e+.34,[s(0,0),s(2,0),s(4,0),s(7,0)],.9,1.2),this._n(e+.34,.9,.1,"highpass",6e3,{w:2})):t==="start"?(this.lead("vibe",e,s(4),.2,.9),this.lead("vibe",e+.11,s(7),.35,.9)):t==="fail"?([4,3,2,0].forEach((r,a)=>this.lead("saw",e+a*.13,s(r,0),.16,.9)),this.drum("k",e+.52,1)):t==="trophy"?[4,7,9,11].forEach((r,a)=>this.lead("glock",e+a*.07,s(r,0),.25,.9)):t==="final"&&([0,2,4,7,9,11,14].forEach((r,a)=>{this.lead("glock",e+a*.09,s(r,0),.4,1),this.lead("saw",e+a*.09,s(r,0),.14,.6)}),this.chord("pad",e+.63,[s(0,0),s(2,0),s(4,0),s(7,0)],2.4,1.5),this.drum("k",e+.63,1.2),this._n(e+.63,1.8,.14,"highpass",5e3,{w:2}))}},Cf={arkasha:["organ",[4,4,7],.16,0],max:["bell",[9,9,9],.12,1],dima:["saw",[0,7,4,11],.07,1],igor:["whistle",[7,9,7,4],.11,1],geisler:["harpsi",[0,2,4,7,9,11],.06,1],pasha:["glock",[7,11],.14,0],nikita:["square",[0,4,7,11,14],.05,1],kos:["geiger",[0],.3,0],artem:["reed",[0,0],.32,-1],sanya:["whistle",[7,4,2,0],.16,0],misha:["square",[11,9],.09,2]},Yr=class i{constructor(){this.ctx=null,this.muted=!1,this.intensity=.5,this.music=null,this.eng=null,this.rush=0,this.chase=0,this.want=null}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;this.master=e.createGain(),this.master.gain.value=.9,i.chain(e,this.master,e.destination),this.musicG=e.createGain(),this.musicG.gain.value=.7,this.musicG.connect(this.master),this.music=new qr(e,this.musicG),this.want&&this.music.setTheme(this.want),this.sfx=e.createGain(),this.sfx.gain.value=.65,this.sfx.connect(this.master),this.fxm=new qr(e,this.sfx),this.fxm.th=qn.dima;let n=e.createOscillator(),s=e.createOscillator(),r=e.createBiquadFilter(),a=e.createGain();n.type="sawtooth",s.type="square",r.type="lowpass",r.frequency.value=500,r.Q.value=2,a.gain.value=0,n.connect(r),s.connect(r),r.connect(a),a.connect(this.sfx),n.start(),s.start();let o=this.music.noise,l=e.createBufferSource();l.buffer=o,l.loop=!0;let c=e.createBiquadFilter();c.type="bandpass",c.frequency.value=1500,c.Q.value=.8;let h=e.createGain();h.gain.value=0,l.connect(c),c.connect(h),h.connect(this.sfx),l.start();let u=e.createBufferSource();u.buffer=o,u.loop=!0;let f=e.createBiquadFilter();f.type="lowpass",f.frequency.value=420;let d=e.createGain();d.gain.value=.04,u.connect(f),f.connect(d),d.connect(this.sfx),u.start();let g=e.createOscillator(),x=e.createGain();g.type="square",x.gain.value=0;let m=e.createBiquadFilter();m.type="lowpass",m.frequency.value=1800,g.connect(m),m.connect(x),x.connect(this.sfx),g.start(),this.eng={o1:n,o2:s,f:r,g:a,sg:h,siren:g,sirenG:x}}static chain(t,e,n){let s=t.createDynamicsCompressor();s.threshold.value=-20,s.knee.value=12,s.ratio.value=3.5,s.attack.value=.008,s.release.value=.18;let r=t.createDynamicsCompressor();r.threshold.value=-5,r.knee.value=0,r.ratio.value=20,r.attack.value=.002,r.release.value=.09,e.connect(s),s.connect(r),r.connect(n)}setMuted(t){this.muted=t,this.ctx&&this.master.gain.setTargetAtTime(t?0:.9,this.ctx.currentTime,.05)}setTheme(t){this.want=t,this.music&&this.music.setTheme(t)}get theme(){return this.music?this.music.id:this.want}sting(t){let e=this.ctx;!e||e.state!=="running"||(this.fxm.th=this.music&&this.music.th||qn.dima,this.fxm.sting(t,e.currentTime+.02))}horn(t){let e=this.ctx;if(!e||e.state!=="running")return;let n=Cf[t]||Cf.dima,s=qn[t]||qn.dima,r=e.currentTime+.02,a=this.fxm;if(n[0]==="geiger"){a.fx("geiger",r,.5),a._n(r,.5,.2,"bandpass",300,{q:6});return}n[1].forEach((o,l)=>{let c=pr(Qn(s.root,s.sc,o)+12*n[3]);n[0]==="reed"||n[0]==="organ"?a.chord(n[0],r+l*n[2],[Qn(s.root,s.sc,o)+12*n[3],Qn(s.root,s.sc,o+4)+12*n[3]],n[2]*.9,2.2):a.lead(n[0],r+l*n[2],c,n[2]*1.2,1.5)})}mumble(t){let e=this.ctx;if(!e||e.state!=="running")return 0;let n=this.fxm,s=e.currentTime+.03,r=Math.min(3.2,.8+t*.06),a=s,o=150;for(;a<s+r;){let l=.035+Math.random()*.05;o=Math.max(110,Math.min(260,o+(Math.random()-.5)*70));let c=[500,800,1100,1500,2100][Math.floor(Math.random()*5)];n._o("sawtooth",o*1.9,a,l,.5,{lp:c,ft:"bandpass",q:5,sus:1,rel:.012,a:.008,to:o*1.9*(.9+Math.random()*.25)}),a+=l+(Math.random()<.14?.07:.004)}return r}tick(t,e,n,s){let r=this.ctx;if(!r||r.state!=="running")return;let a=r.currentTime,o=this.music;o.drive+=((s?1:0)-o.drive)*.05,o.rush+=(this.rush-o.rush)*.02,this.musicG.gain.setTargetAtTime(.5+.28*this.intensity,a,.3),o.next<a-.3&&(o.next=a+.05),o.schedule(a+.22);let l=this.eng,c=n?.035+t*.045:0,h=t*4%1,u=46+t*60+h*34;l.g.gain.setTargetAtTime(c,a,.1),l.o1.frequency.setTargetAtTime(u,a,.06),l.o2.frequency.setTargetAtTime(u*.5,a,.06),l.f.frequency.setTargetAtTime(300+t*1300,a,.1),l.sg.gain.setTargetAtTime(n?Math.min(.2,Math.max(0,e-3)*.028):0,a,.05),l.sirenG.gain.setTargetAtTime(s?.028:0,a,.1),l.siren.frequency.setTargetAtTime(a*1.6%1<.5?660:880,a,.02)}play(t){let e=this.ctx;if(!e||e.state!=="running")return;let n=e.currentTime+.005,s=this.fxm;if(t==="msg")s._o("sine",880,n,.09,.16,{}),s._o("sine",1320,n+.07,.13,.13,{w:1});else if(t==="voice")s._o("triangle",520,n,.08,.12,{});else if(t==="pick")s._o("triangle",988,n,.1,.18,{}),s._o("triangle",1319,n+.06,.14,.18,{}),s._o("triangle",1976,n+.12,.22,.12,{w:1});else if(t==="step")s._o("square",660,n,.09,.07,{lp:3e3}),s._o("square",990,n+.09,.15,.07,{lp:3e3,w:1});else if(t==="win")s.sting("win",n);else if(t==="bump")s._o("sine",90,n,.18,.55,{to:40}),s._n(n,.12,.28,"lowpass",900);else if(t==="honk")s._o("square",392,n,.25,.06,{sus:1,rel:.03,lp:2500}),s._o("square",494,n,.25,.06,{sus:1,rel:.03,lp:2500});else if(t==="door")s._n(n,.08,.32,"lowpass",500),s._o("sine",140,n,.1,.3,{to:70});else if(t==="bad")s.sting("fail",n);else if(t==="zap")s._o("sawtooth",1400,n,.4,.14,{to:90,lp:4e3}),s._n(n,.3,.2,"highpass",3e3,{w:1});else if(t==="tick")s._o("square",1200,n,.05,.08,{lp:4e3});else if(t==="bell"){for(let[r,a]of[[196,.4],[392,.2],[587,.14],[784,.08]])s._o("sine",r,n,3.2,a,{w:2});s._n(n,.05,.2,"highpass",2e3)}else t==="boom"?(s._o("sine",120,n,.5,.5,{to:35}),s._n(n,.7,.22,"lowpass",1400,{w:1}),s._n(n+.1,.9,.06,"highpass",5e3,{w:2})):t==="crash"?(s._n(n,.16,.3,"bandpass",1800,{q:.5}),s._o("triangle",320,n,.12,.2,{to:120}),s._n(n+.03,.25,.12,"highpass",4500,{w:1})):t==="radio"&&(s._n(n,.12,.1,"bandpass",2400,{q:1.5}),s._o("sine",1700,n+.02,.06,.05,{to:900}))}static render(t,e,n={}){let r=new OfflineAudioContext(2,Math.floor(44100*e),44100),a=r.createGain();a.gain.value=.9,i.chain(r,a,r.destination);let o=r.createGain();o.gain.value=.5+.28*(n.intensity===void 0?.5:n.intensity),o.connect(a);let l=new qr(r,o);return l.drive=n.drive||0,l.rush=n.rush||0,l.next=.05,l.setTheme(t),l.tone.frequency.value=qn[t].lp||16e3,l.trim.gain.value=qn[t].g||1,l.revOut.gain.value=.5+(qn[t].rv||.25),l.schedule(e-.05),n.sting&&l.sting(n.sting,e*.5),r.startRendering()}};var mn=[{id:"arkasha",name:"\u0410\u0440\u043A\u0430\u0448\u0430",css:"#c8402e",tag:"\u0412\u043B\u0430\u0434\u0435\u043B\u0435\u0446 \u0447\u0430\u0442\u0430",desc:"\u041A\u043E\u0441\u0442\u044E\u043C, \u0431\u0430\u0431\u043E\u0447\u043A\u0430, \u0431\u043E\u0440\u043E\u0434\u0430. \u0421\u0447\u0438\u0442\u0430\u0435\u0442 \u0434\u043D\u0438 \u0434\u043E \u0440\u0435\u043B\u0438\u0437\u0430. 600 \u043C\u0435\u0433\u0430\u0431\u0438\u0442, \u043D\u043E \u043D\u0430 PS5 \u043D\u0435\u0442 212 \u0413\u0411 \u2014 \u043F\u0440\u0438\u0434\u0451\u0442\u0441\u044F \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0412\u0435\u0434\u044C\u043C\u0430\u043A\u0430.",quotes:["\u041C\u0435\u0441\u044F\u0446...","21 \u0434\u0435\u043D\u044C..","\u0412\u0441\u0435 \u0442\u0430\u043A, \u0442\u043E\u043B\u044C\u043A\u043E \u043D\u0430\u043E\u0431\u043E\u0440\u043E\u0442","212 \u0433\u0431, \u0430\u0445\u0443\u0435\u0442\u044C","\u0412\u0435\u0434\u044C\u043C\u0430\u043A\u0430 \u043F\u0440\u0438\u0434\u0451\u0442\u0441\u044F \u0443\u0434\u0430\u043B\u0438\u0442\u044C\u{1F601}\u{1F601}","\u0423 \u043C\u0435\u043D\u044F 600 \u043C\u0435\u0433\u0430 \u0431\u0438\u0442, \u0432\u0441\u0435 \u043F\u0440\u044F\u043C \u0445\u043E\u0440\u043E\u0448\u043E)","\u0412\u0435\u0434\u044C\u043C\u0430\u043A \u043A\u043E\u043D\u0435\u0447\u043D\u043E \u043B\u0435\u0433\u0435\u043D\u0434\u0430","\u0421\u043A\u0430\u0437\u0430\u0442\u044C \u0447\u0442\u043E \u044D\u0442\u043E \u0448\u0435\u0434\u0435\u0432\u0440 \u2014 \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u0441\u043A\u0430\u0437\u0430\u0442\u044C","\u0412\u043A\u043B\u044E\u0447\u0438\u043B, \u0432\u044B\u043A\u043B\u044E\u0447\u0438\u043B, \u0434\u0432\u0430 \u0434\u043D\u044F \u043F\u0440\u043E\u0448\u043B\u043E"]},{id:"max",name:"\u041C\u0430\u043A\u0441",css:"#e2603f",tag:"\u0413\u043E\u043B\u043E\u0441\u043E\u0432\u044B\u0435, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043D\u0438\u043A\u0442\u043E \u043D\u0435 \u0441\u043B\u0443\u0448\u0430\u0435\u0442",desc:"\u0411\u043E\u043A\u0441\u0451\u0440 \u0441 \u0433\u043E\u043B\u044B\u043C \u0442\u043E\u0440\u0441\u043E\u043C. \u041A\u0443\u043F\u0438\u043B 007 \xAB\u0443 \u0442\u0438\u043F\u043E\u0432\xBB \u0437\u0430 390 \u20BD, \u043A\u043E\u0433\u0434\u0430 \u0434\u0438\u0441\u043A \u043D\u0430 \u0410\u0432\u0438\u0442\u043E \u0441\u0442\u043E\u0438\u0442 5000. \u0416\u0434\u0451\u0442 \u043D\u043E\u0432\u044B\u0439 \u0442\u0435\u043B\u0435\u043A.",quotes:["\u041E\u0447\u0435\u043D\u044C \u043F\u043B\u043E\u0445\u043E\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435. \u041E\u043D\u043E \u043C\u043D\u0435 \u043E\u0447\u0435\u043D\u044C \u043D\u0435 \u043D\u0440\u0430\u0432\u0438\u0442\u0441\u044F","\u042F \u043A\u0443\u043F\u0438\u043B \u0437\u0430 390\u{1F602}","\u0414\u0438\u0441\u043A \u043D\u0430 \u0430\u0432\u0438\u0442\u043E \u0441\u0442\u043E\u0438\u0442 5000 \u0440\u0443\u0431","\u041F\u043E\u0442\u0435\u0440\u043F\u0438 \u0447\u0443\u0442\u044C-\u0447\u0443\u0442\u044C!! \u041E\u043D\u043E \u0441\u0442\u043E\u0438\u0442 \u0442\u043E\u0433\u043E \u0432 20 \u043A\u0440\u0430\u0442","\u041B\u0435\u0442\u0441 \u0433\u043E\u0443 \u043D\u0430\u0445\u0443\u0439","\u0412 \u0441\u0431 \u043F\u0440\u0438\u0435\u0434\u0435\u0442 \u043D\u043E\u0432\u044B\u0439 \u0442\u0435\u043B\u0435\u043A \u0438 \u044F \u0437\u0430\u0441\u044F\u0434\u0443 \u043D\u0430 \u043C\u0435\u0441\u044F\u0446)))","\u041C\u0435\u043D\u044F \u0440\u0430\u0437\u044A\u0435\u0431\u044B\u0432\u0430\u0435\u0442 \u043F\u0437\u0434\u0446","\u0411\u0435\u0440\u0438 \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0443 \u0438 \u043D\u0435 \u0435\u0431\u0438 \u043C\u043E\u0437\u0433\u0438"]},{id:"dima",name:"\u0414\u043C\u0418\u0418\u0442\u0440\u0438\u0439",css:"#5d6b8a",tag:"\u0421\u0434\u0435\u043B\u0430\u043B \u044D\u0442\u0443 \u0438\u0433\u0440\u0443 \u043D\u0435\u0439\u0440\u043E\u0441\u0435\u0442\u044C\u044E",desc:"\u0421\u0438\u043B\u0443\u044D\u0442 \u0441 \u0440\u044E\u043A\u0437\u0430\u043A\u043E\u043C \u0432 \u0442\u0443\u043C\u0430\u043D\u0435. \u0417\u043E\u0432\u0451\u0442 \u0432\u0441\u0435\u0445 \xAB\u043D\u0430 \u0432\u043E\u0439\u043D\u0443\xBB \u2014 \u043D\u0438\u043A\u0442\u043E \u043D\u0435 \u043F\u0440\u0438\u0445\u043E\u0434\u0438\u0442. \u041A\u0438\u043D\u043E\u0442\u0435\u0430\u0442\u0440 11.1.4. \u041F\u0440\u043E\u0434\u0430\u0451\u0442 VR2.",quotes:["\u0414\u0430\u0432\u043D\u043E \u043D\u0435 \u0432\u043E\u0435\u0432\u0430\u043B\u0438)","\u0413\u043E\u0443 \u0432\u0441\u0435 \u043D\u0430 \u0432\u043E\u0439\u043D\u0443","11.1.4","\u041A\u0430\u043A\u0430\u044F \u0442\u043E \u043C\u0430\u0433\u0438\u044F) \u0445\u0437","\u041F\u043E\u0442\u043E\u043C \u043F\u043E\u043A\u0430\u0436\u0443)","\u042D\u0442\u043E \u0443\u0436\u0435 \u043D\u043E\u0432\u0430\u044F \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u044C)","\u0420\u0435\u0448\u0438\u043B \u043F\u0440\u043E\u0434\u0430\u0442\u044C VR2. \u0415\u0441\u043B\u0438 \u043A\u043E\u043C\u0443 \u043D\u0443\u0436\u043D\u043E \u2014 \u043F\u0438\u0448\u0438\u0442\u0435","\u0422\u043E\u0436\u0435 \u0441\u043A\u043E\u0440\u043E \u0441\u0434\u0435\u043B\u0430\u044E)"]},{id:"igor",name:"\u0418\u0433\u043E\u0440\u044C",css:"#e8e8e8",tag:"144 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438. \u0427\u0435\u0442\u0432\u0451\u0440\u0442\u044B\u0439 \u0440\u0430\u0437",desc:"\u0427\u0451\u0440\u043D\u043E-\u0431\u0435\u043B\u044B\u0439 \u0440\u0430\u043A \u0441 \u043C\u043E\u043D\u043E\u0433\u0440\u0430\u043C\u043C\u043E\u0439. \u0421\u043E\u0431\u0438\u0440\u0430\u0435\u0442 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438, \u043F\u0435\u0440\u044C\u044F \u0446\u0430\u043F\u0435\u043B\u044C \u0438 \u043E\u0440\u0445\u0438\u0434\u0435\u0438. \u0417\u0430\u0432\u0451\u043B \u043D\u043E\u0432\u044B\u0439 \u0430\u043A\u043A\u0430\u0443\u043D\u0442, \u0447\u0442\u043E\u0431\u044B \u0437\u0430\u043A\u0440\u044B\u0442\u044C \u0432\u0441\u0451 \u043D\u0430 100% \u0437\u0430\u043D\u043E\u0432\u043E.",quotes:["\u041C\u043D\u0435 144 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438 \u043D\u0430\u0434\u043E \u043D\u0430\u0439\u0442\u0438","\u041D\u0435\u0434\u0435\u043B\u044E \u0435\u0431\u0443\u0447\u0438\u0445 \u043F\u0442\u0438\u0446 \u0441\u043E\u0431\u0438\u0440\u0430\u043B\u{1F613}","\u0411\u0430\u0442\u043B\u0430\u2026 \u043F\u0438\u0437\u0434\u0430\u0442\u0430\u044F!!!","\u0411\u0430\u0442\u043B\u0430 \u2026 \u0437\u0430\u043B\u0443\u043F\u0430 \u043F\u043E\u043B\u043D\u0430\u044F!!!","\u0414\u0438\u043C\u0430\u043D \u0421\u043E\u0440\u044F\u043D\u2026 \u044F \u0447\u0435\u0442 \u043F\u0440\u043E\u0435\u0431\u0430\u043B\u0441\u044F","\u0421\u0435\u0439\u0447\u0430\u0441 \u0438\u0433\u0440\u0430\u044E\u2026 \u044F \u0441\u0447\u0430\u0441\u0442\u043B\u0438\u0432","\u0412\u0430\u044F\u044F\u044F\u044F\u{1F979}\u{1F60D}","\u042D\u0442\u043E \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u0430\u044F \u0438\u0433\u0440\u0430"]},{id:"geisler",name:"\u0413\u0430\u0439\u0441\u043B\u0435\u0440",css:"#b0407a",tag:"\u041A\u0430\u043A \u0440\u0430\u0437 \u043A 19-\u043C\u0443 \u0434\u043E\u043A\u0430\u0447\u0430\u0435\u0442\u0441\u044F",desc:"\u0420\u0430\u043A \u0432\u043E \u0434\u0432\u043E\u0440\u0446\u0435 \u0441 \u043B\u044E\u0441\u0442\u0440\u0430\u043C\u0438. \u041A\u0430\u0447\u0430\u0435\u0442 \u0447\u0435\u0440\u0435\u0437 \u041C\u0435\u0433\u0430\u0444\u043E\u043D. \u0417\u043D\u0430\u0435\u0442 \u0432\u0441\u0451 \u043F\u0440\u043E \u041F2/\u041F3 \u0438 \u0443\u0434\u0438\u0432\u043B\u044F\u0435\u0442\u0441\u044F, \u043F\u043E\u0447\u0435\u043C\u0443 \u043B\u0430\u0432\u043E\u0447\u043A\u0443 \u0434\u043E \u0441\u0438\u0445 \u043F\u043E\u0440 \u043D\u0435 \u043F\u0440\u0438\u043A\u0440\u044B\u043B\u0438.",quotes:["\u041A\u0430\u043A \u0440\u0430\u0437 \u043A 19\u043C\u0443 \u0434\u043E\u043A\u0430\u0447\u0430\u0435\u0442\u0441\u044F \u{1F602}\u{1F602}","\u0411\u0430\u0442\u044F \u0432 \u0437\u0434\u0430\u043D\u0438\u0438!)","\u041C\u0435\u043D\u044F \u0443\u0434\u0438\u0432\u043B\u044F\u0435\u0442 \u043F\u043E\u0447\u0435\u043C\u0443 \u043F\u0441 \u0434\u043E \u0441\u0438\u0445 \u043F\u043E\u0440 \u044D\u0442\u0443 \u043B\u0430\u0432\u043E\u0447\u043A\u0443 \u043D\u0435 \u043F\u0440\u0438\u043A\u0440\u044B\u043B\u0438))","\u041E\u0434\u043D\u0430 \u043B\u0438\u0446\u0435\u043D\u0437\u0438\u044F \u043C\u0430\u043A\u0441\u0438\u043C\u0443\u043C \u043D\u0430 3 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0430 \u0434\u0435\u043B\u0438\u0442\u0441\u044F","\u0418\u0433\u043E\u0440\u044C \u0442\u044B \u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0440\u0430\u0437 \u0440\u0434\u0440 \u043F\u0440\u043E\u0448\u0435\u043B? 7?)","\u0422\u044B \u0438\u0445 \u0443\u0436\u0435 \u043D\u0430\u0445\u043E\u0434\u0438\u043B, \u043D\u043E \u043F\u0440\u043E\u0441\u0442\u043E \u043D\u0435 \u043F\u043E\u043C\u043D\u0438\u0448\u044C \u043A\u0443\u0434\u0430 \u0441\u043B\u043E\u0436\u0438\u043B)"]},{id:"pasha",name:"\u041F\u0430\u0448\u0430",css:"#d9a520",tag:"\u041A\u0440\u043E\u043C\u0435 LOA \u0438 RDR \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u0437\u0430\u0435\u0431\u0438\u0441\u044C",desc:"\u0417\u043E\u043B\u043E\u0442\u043E\u0439 \u0440\u0430\u043A \u0432 \u0441\u0442\u0438\u043B\u0435 \u041A\u043B\u0438\u043C\u0442\u0430. \u0421\u043B\u0435\u0434\u0438\u0442 \u0437\u0430 \u0441\u043B\u0438\u0432\u0430\u043C\u0438 \u0438 \u043F\u0435\u0440\u0435\u043D\u043E\u0441\u0430\u043C\u0438 \u043F\u0440\u0435\u0434\u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438. \u0425\u043E\u0447\u0435\u0442 \u043D\u0430\u0447\u0430\u0442\u044C BG3, \u043D\u043E \u0431\u043E\u0438\u0442\u0441\u044F.",quotes:["\u0414\u043B\u044F \u043C\u0435\u043D\u044F \u043A\u0440\u043E\u043C\u0435 LOA \u0438 RDR \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u0437\u0430\u0435\u0431\u0438\u0441\u044C\u{1F612}","BG3 \u0445\u043E\u0447\u0443 \u043D\u0430\u0447\u0430\u0442\u044C, \u043D\u043E \u0431\u043E\u044E\u0441\u044C","\u041F\u0440\u043E \u0441\u043B\u0438\u0432\u044B \u0432 \u043A\u0443\u0440\u0441\u0435? \u041F\u0438\u0437\u0434\u0435\u0446 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u0430\u044F \u0445\u0443\u0439\u043D\u044F)","\u041F\u0435\u0440\u0435\u043D\u0435\u0441\u043B\u0438 \u0441 12-\u043E\u0433\u043E \u043D\u0430 10","\u0421\u043A\u043E\u0440\u0435\u0435 \u0431\u044B","Extra \u0431\u0435\u0440\u0438"]},{id:"nikita",name:"\u041D\u0438\u043A\u0438\u0442\u0430",css:"#3a3a44",tag:"\xAB\u0427\u0442\u043E \u044D\u0442\u043E?\xBB",desc:"\u0422\u0451\u043C\u043D\u044B\u0435 \u043E\u0447\u043A\u0438. \u041F\u043E\u043F\u0430\u043B \u0432 \u0447\u0430\u0442 \u0441\u043B\u0443\u0447\u0430\u0439\u043D\u043E, \u043D\u0430 \u0440\u0435\u043B\u0438\u0437 \u0435\u043C\u0443 \u0432\u043E\u043E\u0431\u0449\u0435 \u043F\u043E\u0435\u0431\u0430\u0442\u044C. \u0417\u0430\u0442\u043E \u0441\u0430\u043C \u0441\u0434\u0435\u043B\u0430\u043B \u043D\u0435\u0439\u0440\u043E\u0441\u0435\u0442\u044C\u044E \u0442\u0440\u0438 \u0438\u0433\u0440\u044B. \u041E\u043F\u044B\u0442 \u2014 Tekken \u0441 \u0434\u0435\u0442\u044C\u043C\u0438.",quotes:["\u0427\u0442\u043E \u044D\u0442\u043E?","\u041C\u043D\u0435 \u0432\u043E\u043E\u0431\u0449\u0435 \u043F\u043E\u0435\u0431\u0430\u0442\u044C \u043D\u0430 \u043D\u043E\u0432\u0443\u044E \u0413\u0422\u0410","\u042F, \u043A\u0441\u0442\u0430\u0442\u0438, \u0442\u043E\u0436\u0435 \u2014 3 \u0438\u0433\u0440\u0443 \u0443\u0436\u0435 \u0441\u0434\u0435\u043B\u0430\u043B\u{1F601}","\u041C\u043E\u0439 \u043E\u043F\u044B\u0442 \u2014 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0431\u043E\u0435\u0432 \u0441 \u0434\u0435\u0442\u044C\u043C\u0438 \u0432 \u0442\u0435\u0439\u043A\u0435\u043D","\u042D\u0442\u043E \u0447\u0442\u043E \u0437\u0430 \u043F\u0438\u0437\u0434\u0435\u0446???!!! \u{1F62D}","\u0410 \u044D\u0442\u043E \u0441\u0438\u043B\u044C\u043D\u0430\u044F \u0448\u0442\u0443\u0447\u043A\u0430?","\u0422\u0430\u043A \u0438 \u043F\u043E\u0434\u0443\u043C\u0430\u043B"]},{id:"kos",name:"\u041A\u043E\u0441",css:"#2f8fdc",tag:"\u041D\u0430 \u0421\u0435\u0440\u0433\u0435\u044F \u0441\u0442\u043E\u043B\u0438\u043A",desc:"\u0421\u0438\u043D\u0438\u0439 \u043A\u0440\u0443\u0436\u043E\u043A \xAB\u0421\u041A\xBB. \u0424\u0430\u043D\u0430\u0442 \u0421\u0442\u0430\u043B\u043A\u0435\u0440\u0430 \u0438 \u0412\u0435\u0434\u044C\u043C\u0430\u043A\u0430. \u041F\u0440\u043E\u0441\u044B\u043F\u0430\u0435\u0442\u0441\u044F \u0432 5 \u0443\u0442\u0440\u0430, \u043F\u043E\u0447\u0443\u0432\u0441\u0442\u0432\u043E\u0432\u0430\u0432, \u0447\u0442\u043E \u0432 \u0447\u0430\u0442\u0435 \u0437\u0430\u0433\u043E\u0432\u043E\u0440\u0438\u043B\u0438 \u043F\u0440\u043E \u0412\u0435\u0434\u044C\u043C\u0430\u043A\u0430.",quotes:["\u041D\u0430 \u0421\u0435\u0440\u0433\u0435\u044F \u0441\u0442\u043E\u043B\u0438\u043A","\u041F\u0440\u043E\u0441\u043D\u0443\u043B\u0441\u044F \u043F\u0440\u043E\u0441\u0442\u043E, \u0447\u0443\u0432\u0441\u0442\u0432\u0443\u044E \u043F\u0440\u043E \u0432\u0435\u0434\u044C\u043C\u0430\u043A\u0430 \u043F\u043E\u0448\u0435\u043B \u0440\u0430\u0437\u0433\u043E\u0432\u043E\u0440)","\u042F \u043A\u0441\u0442\u0430\u0442\u0438 \u0443\u0434\u0438\u0432\u043B\u0435\u043D, \u0447\u0442\u043E \u0437\u0434\u0435\u0441\u044C \u0442\u043E\u043B\u044C\u043A\u043E \u043C\u044B \u0441 \u0442\u043E\u0431\u043E\u0439 \u0444\u0430\u043D\u0430\u0442\u044B \u0441\u0442\u0430\u043B\u043A\u0435\u0440\u0430","\u0422\u043E \u043B\u0438 \u0434\u0435\u043B\u043E \u044D\u0442\u0438 \u043C\u0430\u043B\u043E\u043C\u043E\u0449\u043D\u044B\u0435 \u043A\u043E\u043D\u0441\u043E\u043B\u0438)","\u0411\u0438\u043D\u043E\u043A\u043B\u044C \u0433\u043E\u0432\u043E\u0440\u044F\u0442 \u0434\u043E\u0431\u0430\u0432\u0438\u043B\u0438?)","\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0438\u043C \u043F\u043E\u0441\u043C\u043E\u0442\u0440\u0438\u043C"]},{id:"artem",name:"\u0410\u0440\u0442\u0451\u043C",css:"#4cb84a",tag:"\u0411\u043E\u0436\u0435, \u0445\u0440\u0430\u043D\u0438 \u043F\u0438\u0440\u0430\u0442\u043E\u0432, \u0430\u043C\u0438\u043D\u044C",desc:"\u0417\u0435\u043B\u0451\u043D\u044B\u0439 \u043A\u0440\u0443\u0436\u043E\u043A \xAB\u0410\u041A\xBB. \u0421\u043E\u0432\u0435\u0442\u0443\u0435\u0442 \u043F\u0440\u043E\u0445\u043E\u0434\u0438\u0442\u044C \u0441 \u043D\u0438\u0437\u043A\u043E\u0439 \u043C\u043E\u0440\u0430\u043B\u044C\u044E. \u0418\u0449\u0435\u0442, \u0433\u0434\u0435 \u043F\u043E\u0447\u0438\u0441\u0442\u0438\u0442\u044C PS5 \u043E\u0442 \u043F\u044B\u043B\u0438, \u043D\u043E \u0412\u0430\u0442\u0443\u0442\u0438\u043D\u0430 \u0434\u0430\u043B\u0435\u043A\u043E\u0432\u0430\u0442\u043E.",quotes:["\u0411\u043E\u0436\u0435, \u0445\u0440\u0430\u043D\u0438 \u043F\u0438\u0440\u0430\u0442\u043E\u0432, \u0430\u043C\u0438\u043D\u044C","\u0412\u0430\u0442\u0443\u0442\u0438\u043D\u0430 \u0434\u0430\u043B\u0435\u043A\u043E\u0432\u0430\u0442\u043E)))","\u041F\u0435\u0439 \u043F\u0438\u0432\u043E, \u0440\u0443\u043A\u0438 \u0434\u043E\u043B\u0436\u043D\u044B \u0431\u044B\u0442\u044C \u0432 \u0440\u044B\u0431\u0435, \u043D\u0435 \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0439 \u0434\u0443\u0448","\u041F\u0440\u043E\u0439\u0434\u0438 \u0441 \u043D\u0438\u0437\u043A\u043E\u0439 \u043C\u043E\u0440\u0430\u043B\u044C\u044E","\u0414\u0438\u043C\u0430\u043D, \u0431\u0435\u0440\u0435\u0433\u0438 \u0441\u0435\u0431\u044F","\u0422\u0430\u043A \u043D\u0430\u0445\u0435\u0440 \u043F2?","\u0422\u044B \u0440\u0435\u0430\u043B\u044C\u043D\u043E \u0414\u043C\u0418\u0418\u0442\u0440\u0438\u0439\u{1F91D}"]},{id:"sanya",name:"\u0421\u0430\u043D\u044F",css:"#9a9a9a",tag:"\u041D\u0430\u0447\u0430\u043B\u043E \u0442\u044F\u0433\u043E\u043C\u043E\u0442\u043D\u043E\u0435",desc:"\u0427\u0451\u0440\u043D\u043E-\u0431\u0435\u043B\u044B\u0439 \u0431\u043E\u0440\u043E\u0434\u0430\u0442\u044B\u0439 \u0440\u0430\u043A. \u041D\u0435 \u043E\u0441\u0438\u043B\u0438\u043B RDR2, \u043F\u043E\u0442\u043E\u043C\u0443 \u0447\u0442\u043E \u043D\u0430\u0447\u0430\u043B\u043E \u043C\u0435\u0434\u043B\u0435\u043D\u043D\u043E\u0435. \u0414\u043E\u043A\u0443\u043F\u0438\u043B \u043E\u043F\u0435\u0440\u0430\u0442\u0438\u0432\u043A\u0438 \u0432 \u043D\u043E\u0443\u0442 \u0440\u0430\u0434\u0438 \u0412\u0435\u0434\u044C\u043C\u0430\u043A\u0430.",quotes:["\u041E\u043D\u0430 \u0432\u043D\u0430\u0447\u0430\u043B\u0435 \u0434\u0438\u043A\u043E \u043C\u0435\u0434\u043B\u0435\u043D\u043D\u0430\u044F","\u0412\u043E\u0442 \u0434\u0430, \u0438\u043C\u0435\u043D\u043D\u043E \u0442\u0430\u043A, \u0442\u044F\u0433\u043E\u043C\u043E\u0442\u043D\u0430\u044F","\u041F\u0440\u0438\u0448\u043B\u043E\u0441\u044C \u043E\u043F\u0435\u0440\u0430\u0442\u0438\u0432\u043A\u0438 \u0434\u043E\u043A\u0443\u043F\u0438\u0442\u044C, \u0447\u0442\u043E\u0431\u044B \u0433\u0440\u0430\u0444\u0438\u043A\u0430 \u043D\u043E\u0440\u043C \u0431\u044B\u043B\u0430\u{1F605}","\u041D\u0443, \u0434\u0430\u043C \u0435\u0439 \u0432\u0442\u043E\u0440\u043E\u0439 \u0448\u0430\u043D\u0441, \u043A\u0430\u043A \u0431\u0443\u0434\u0435\u0442 \u0441\u0432\u043E\u0431\u043E\u0434\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F )"]},{id:"misha",name:"\u041C\u0438\u0448\u0430",css:"#d8623a",tag:"\u0411\u0430\u0442\u044F \u0432 \u0437\u0434\u0430\u043D\u0438\u0438!",desc:"\u0422\u043E\u043B\u044C\u043A\u043E \u043A\u0443\u043F\u0438\u043B PS5. \u0412\u0440\u0435\u043C\u0435\u043D\u0438 \u0438\u0433\u0440\u0430\u0442\u044C \u043D\u0435\u0442. \u0421\u043F\u0440\u043E\u0441\u0438\u043B \u043F\u0440\u043E \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0443 \u2014 \u043F\u043E\u043B\u0443\u0447\u0438\u043B \u0448\u0435\u0441\u0442\u044C \u0432\u0437\u0430\u0438\u043C\u043E\u0438\u0441\u043A\u043B\u044E\u0447\u0430\u044E\u0449\u0438\u0445 \u0441\u043E\u0432\u0435\u0442\u043E\u0432.",quotes:["\u0414\u0430 \u043F\u043E\u043A\u0430 \u043D\u0438\u043A\u0430\u043A, \u0432\u0440\u0435\u043C\u0435\u043D\u0438 \u0442\u0443\u043F\u043E \u043D\u0435\u0442 (","\u0412\u043E\u0442 \u0442\u0430\u043A \u0430\u0433\u0430","\u041E\u043A, \u0441\u043F\u0430\u0441\u0438\u0431\u043E!","\u041E\u0433\u043E\u043D\u044C, 2590 \u0433\u043E\u0434\u043D\u043E \u0434\u043B\u044F \u041D\u0441\u043A\u{1F602}"]}],bi=Object.fromEntries(mn.map(i=>[i.id,i])),Zr={arkasha:{giver:"arkasha",title:"212 \u0413\u0411",reward:500,par:55,intro:[["arkasha","212 \u0433\u0431, \u0430\u0445\u0443\u0435\u0442\u044C"],["arkasha","\u0414\u0430 \u0431\u043B\u044F, \u0432 \u043F\u04415 \u0432\u0441\u0435\u0433\u043E 640\u0433\u0431 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E"],["arkasha","@P, \u043F\u043E\u0434\u044A\u0435\u0437\u0436\u0430\u0439 \u043A \u041E\u043F\u0435\u0440\u043D\u043E\u043C\u0443. \u041D\u0430\u0434\u043E \u043C\u0435\u0441\u0442\u043E \u043E\u0441\u0432\u043E\u0431\u043E\u0434\u0438\u0442\u044C"]],steps:[{pts:["arkasha"],text:"\u041A \u041E\u043F\u0435\u0440\u043D\u043E\u043C\u0443: \u0410\u0440\u043A\u0430\u0448\u0435 \u043D\u0435 \u0445\u0432\u0430\u0442\u0430\u0435\u0442 212 \u0413\u0411"},{choice:{title:"\u041D\u0435 \u0445\u0432\u0430\u0442\u0430\u0435\u0442 212 \u0413\u0411",text:"\u0423 \u0410\u0440\u043A\u0430\u0448\u0438 \u043D\u0430 PS5 \u043A\u043E\u043D\u0447\u0438\u043B\u043E\u0441\u044C \u043C\u0435\u0441\u0442\u043E. \u0427\u0435\u043C \u0436\u0435\u0440\u0442\u0432\u0443\u0435\u043C?",opts:[{label:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0412\u0435\u0434\u044C\u043C\u0430\u043A\u0430",say:[["arkasha","\u0412\u0435\u0434\u044C\u043C\u0430\u043A\u0430 \u043F\u0440\u0438\u0434\u0435\u0442\u0441\u044F \u0443\u0434\u0430\u043B\u0438\u0442\u044C\u{1F601}\u{1F601}"],["kos","\u041F\u0440\u043E\u0441\u043D\u0443\u043B\u0441\u044F \u043F\u0440\u043E\u0441\u0442\u043E, \u0447\u0443\u0432\u0441\u0442\u0432\u0443\u044E \u043F\u0440\u043E \u0432\u0435\u0434\u044C\u043C\u0430\u043A\u0430 \u043F\u043E\u0448\u0435\u043B \u0440\u0430\u0437\u0433\u043E\u0432\u043E\u0440)"],["kos","\u0412\u044B \u0447\u0451 \u0442\u0430\u043C \u0443\u0434\u0430\u043B\u044F\u0435\u0442\u0435??"]],flag:"witcher"},{label:"\u0421\u0433\u043E\u043D\u044F\u0442\u044C \u0437\u0430 SSD",bonus:600,say:[["arkasha","\u0412\u0435\u0434\u044C\u043C\u0430\u043A \u043A\u043E\u043D\u0435\u0447\u043D\u043E \u043B\u0435\u0433\u0435\u043D\u0434\u0430. \u0413\u043E\u043D\u0438 \u0432 \xAB\u0422\u0435\u0445\u043D\u043E\u0420\u0430\u043A\xBB, \u043E\u043D \u0437\u0430 \u041E\u043F\u0435\u0440\u043D\u044B\u043C"]],add:[{pts:["shop"],text:"\u0422\u0426 \xAB\u0422\u0435\u0445\u043D\u043E\u0420\u0430\u043A\xBB: \u0437\u0430\u0431\u0435\u0440\u0438 SSD"},{pts:["arkasha"],text:"\u0412\u0435\u0437\u0438 SSD \u0410\u0440\u043A\u0430\u0448\u0435"}]}]}}],outro:[["arkasha","\u0417\u0431\u0441. \u0412\u043B\u0435\u0437\u043B\u043E"],["arkasha","\u0412\u0441\u0435 \u0442\u0430\u043A, \u0442\u043E\u043B\u044C\u043A\u043E \u043D\u0430\u043E\u0431\u043E\u0440\u043E\u0442"]]},dima:{giver:"dima",title:"\u041D\u0430 \u0432\u043E\u0439\u043D\u0443",reward:700,par:60,intro:[["dima","\u0414\u0430\u0432\u043D\u043E \u043D\u0435 \u0432\u043E\u0435\u0432\u0430\u043B\u0438)"],["dima","\u0413\u043E\u0443 \u0432\u0441\u0435 \u043D\u0430 \u0432\u043E\u0439\u043D\u0443. \u041D\u043E\u0432\u0430\u044F \u043A\u0430\u0440\u0442\u0430, \u043C\u043E\u0436\u043D\u043E \u0434\u0430\u0436\u0435 \u0431\u0435\u0437 \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0438"],["dima","@P, \u0441\u043E\u0431\u0435\u0440\u0438 \u043D\u0430\u0440\u043E\u0434. \u041E\u0431\u044A\u0435\u0434\u044C \u0442\u0440\u043E\u0438\u0445"]],steps:[{raki:3,text:"\u041F\u043E\u0437\u043E\u0432\u0438 \u0442\u0440\u043E\u0438\u0445 \u043D\u0430 \u0432\u043E\u0439\u043D\u0443"},{pts:["dima"],text:"\u0412\u0435\u0440\u043D\u0438\u0441\u044C \u043A \u0414\u043C\u0418\u0418\u0442\u0440\u0438\u044E \u043D\u0430 \u043D\u0430\u0431\u0435\u0440\u0435\u0436\u043D\u0443\u044E"}],outro:[["dima","Go!"],["sys","\u041D\u0430 \u0432\u043E\u0439\u043D\u0443 \u043F\u0440\u0438\u0448\u043B\u043E: 0 \u0438\u0437 3. \u041A\u0430\u043A \u043E\u0431\u044B\u0447\u043D\u043E."],["igor","\u0414\u0438\u043C\u0430\u043D \u0421\u043E\u0440\u044F\u043D\u2026 \u044F \u0447\u0435\u0442 \u043F\u0440\u043E\u0435\u0431\u0430\u043B\u0441\u044F"]]},max:{giver:"max",title:"\u0414\u0438\u0441\u043A \u0437\u0430 390 \u20BD",reward:900,par:75,intro:[["max",{voice:12}],["max",{voice:7}],["max",{voice:31}],["max","\u041A\u043E\u0440\u043E\u0447\u0435. \u0417\u0430\u0431\u0435\u0440\u0438 \u0443 \u0442\u0438\u043F\u043E\u0432 \u0432 \u0433\u0430\u0440\u0430\u0436\u0430\u0445 007. \u0417\u0430 390. \u0414\u0438\u0441\u043A \u043D\u0430 \u0430\u0432\u0438\u0442\u043E \u0441\u0442\u043E\u0438\u0442 5000 \u0440\u0443\u0431\u{1F602}"]],steps:[{pts:["garage"],text:"\u0413\u0430\u0440\u0430\u0436\u0438 \u043D\u0430 \u043B\u0435\u0432\u043E\u043C \u0431\u0435\u0440\u0435\u0433\u0443: \u0437\u0430\u0431\u0435\u0440\u0438 \u0434\u0438\u0441\u043A \u0443 \u0442\u0438\u043F\u043E\u0432",say:[["sys","\u0422\u0438\u043F: \xAB\u041F2 \u0438\u043B\u0438 \u041F3?\xBB \u2014 \xAB\u0414\u0430\xBB. \u041A\u0443\u043F\u043B\u0435\u043D\u043E \u0437\u0430 390 \u20BD"],["beam","\u26A1\uFE0F \u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C \u0432 Beam Store! \u041C\u044B \u043F\u043E\u043B\u0443\u0447\u0438\u043B\u0438 \u0432\u0430\u0448\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435. \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043E\u0436\u0438\u0434\u0430\u0439\u0442\u0435 \u{1F3AE}"],["sys","\u{1F6A8} \u041C\u043E\u0434\u0435\u0440\u0430\u0442\u043E\u0440\u044B PlayStation \u0437\u0430\u043C\u0435\u0442\u0438\u043B\u0438 \u043E\u0431\u0449\u0438\u0439 \u0430\u043A\u043A\u0430\u0443\u043D\u0442"]],wanted:26},{pts:["max"],text:"\u041E\u0442\u0432\u0435\u0437\u0438 \u0434\u0438\u0441\u043A \u041C\u0430\u043A\u0441\u0443. \u0418 \u043E\u0442\u043E\u0440\u0432\u0438\u0441\u044C \u043E\u0442 \u043C\u043E\u0434\u0435\u0440\u0430\u0442\u043E\u0440\u043E\u0432"}],outro:[["max","\u0412\u044D\u0440\u0438 \u0433\u0443\u0434!!! \u0417\u0431\u0441"],["max","\u042F \u0447\u0435-\u0442 \u0434\u0443\u043C\u0430\u043B, \u0447\u0442\u043E \u041F3 \u043D\u0430\u043E\u0431\u043E\u0440\u043E\u0442 \u0445\u0443\u0436\u0435 \u0438 \u0434\u0435\u0448\u0435\u0432\u043B\u0435"],["arkasha","\u0412\u0441\u0435 \u0442\u0430\u043A, \u0442\u043E\u043B\u044C\u043A\u043E \u043D\u0430\u043E\u0431\u043E\u0440\u043E\u0442"]]},geisler:{giver:"geisler",title:"\u041A\u0430\u043A \u0440\u0430\u0437 \u043A 19-\u043C\u0443",reward:1150,par:80,intro:[["geisler","\u0425\u0437 \u0447\u0435 \u0442\u043E \u043C\u0435\u0433\u0430\u0444\u043E\u043D \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F \u043E\u0447\u0435\u043D\u044C \u043F\u043B\u043E\u0445\u043E \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442.."],["geisler","\u041A\u0430\u043A \u0440\u0430\u0437 \u043A 19\u043C\u0443 \u0434\u043E\u043A\u0430\u0447\u0430\u0435\u0442\u0441\u044F \u{1F602}\u{1F602}"],["dima","\u0423 \u0442\u0435\u0431\u044F \u043C\u043E\u0434\u0435\u043C \u0447\u0435\u0440\u0435\u0437 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u043D\u0443\u044E \u043B\u0438\u043D\u0438\u044E?)"],["geisler","@P, \u043F\u043D\u0438 \u0442\u0440\u0438 \u0432\u044B\u0448\u043A\u0438, \u0430? \u041C\u043E\u0436\u0435\u0442 \u0431\u044B\u0441\u0442\u0440\u0435\u0435 \u043F\u043E\u0439\u0434\u0451\u0442"]],steps:[{pts:["tower2","tower1","tower3"],text:"\u041F\u043D\u0438 \u0442\u0440\u0438 \u0432\u044B\u0448\u043A\u0438 \u0441\u0432\u044F\u0437\u0438",each:"\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0443 \u0413\u0430\u0439\u0441\u043B\u0435\u0440\u0430: "}],outro:[["geisler","\u041E, 97%. \u041E\u0441\u0442\u0430\u043B\u044C\u043D\u043E\u0435 \u043A\u0430\u043A \u0440\u0430\u0437 \u043A 19\u043C\u0443 \u0434\u043E\u043A\u0430\u0447\u0430\u0435\u0442\u0441\u044F"],["max","\u0423 \u043C\u0435\u043D\u044F 500 \u043C\u0431\u0438\u0442/\u0441\u0435\u043A, \u0434\u043E\u0432\u043E\u043B\u044C\u043D\u043E \u0431\u044B\u0441\u0442\u0440\u043E \u0441\u043A\u0430\u0447\u0430\u043B\u043E\u0441\u044C"]]},kos:{giver:"kos",title:"\u0417\u043E\u043D\u0430",reward:1100,par:75,intro:[["kos","\u042F \u043A\u0441\u0442\u0430\u0442\u0438 \u0443\u0434\u0438\u0432\u043B\u0435\u043D, \u0447\u0442\u043E \u0437\u0434\u0435\u0441\u044C \u0442\u043E\u043B\u044C\u043A\u043E \u043C\u044B \u0441 \u0442\u043E\u0431\u043E\u0439 \u0444\u0430\u043D\u0430\u0442\u044B \u0441\u0442\u0430\u043B\u043A\u0435\u0440\u0430"],["kos","@P, \u043F\u0440\u0438\u0435\u0437\u0436\u0430\u0439 \u0432 \u043F\u0440\u043E\u043C\u0437\u043E\u043D\u0443. \u0412 \u0417\u043E\u043D\u0443 \u043D\u0430 \u043C\u0430\u0448\u0438\u043D\u0435 \u043D\u0435\u043B\u044C\u0437\u044F, \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u0435\u0448\u043A\u043E\u043C"],["kos","\u0410\u0440\u0442\u0435\u0444\u0430\u043A\u0442 \u0432 \u0434\u0430\u043B\u044C\u043D\u0435\u043C \u0443\u0433\u043B\u0443. \u0412 \u0430\u043D\u043E\u043C\u0430\u043B\u0438\u0438 \u043D\u0435 \u043B\u0435\u0437\u044C"]],steps:[{pts:["gate"],text:"\u041F\u0440\u043E\u043C\u0437\u043E\u043D\u0430: \u043A \u0432\u043E\u0440\u043E\u0442\u0430\u043C \u0417\u043E\u043D\u044B"},{pts:["artifact"],foot:!0,r:2.5,text:"\u041F\u0435\u0448\u043A\u043E\u043C: \u0434\u043E\u0441\u0442\u0430\u043D\u044C \u0430\u0440\u0442\u0435\u0444\u0430\u043A\u0442, \u043E\u0431\u0445\u043E\u0434\u0438 \u0430\u043D\u043E\u043C\u0430\u043B\u0438\u0438",say:[["sys","\u0410\u0440\u0442\u0435\u0444\u0430\u043A\u0442 \xAB\u041F\u043B\u043E\u0442\u0432\u0430\xBB \u0443 \u0442\u0435\u0431\u044F"],["kos","\u0411\u0438\u043D\u043E\u043A\u043B\u044C \u0433\u043E\u0432\u043E\u0440\u044F\u0442 \u0434\u043E\u0431\u0430\u0432\u0438\u043B\u0438?)"]]},{pts:["kos"],text:"\u041E\u0442\u043D\u0435\u0441\u0438 \u0430\u0440\u0442\u0435\u0444\u0430\u043A\u0442 \u041A\u043E\u0441\u0443"}],outro:[["kos","\u041D\u0430 \u0421\u0435\u0440\u0433\u0435\u044F \u0441\u0442\u043E\u043B\u0438\u043A"],["sys","\u0421\u0442\u043E\u043B\u0438\u043A \u0437\u0430\u0431\u0440\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u043D. \u0421\u0442\u043E\u0439\u043C\u044F \u043D\u0435 \u043F\u0440\u0438\u0434\u0451\u0442\u0441\u044F"]]},nikita:{giver:"nikita",title:"\u0418\u0433\u0440\u0430 \u043C\u0435\u0447\u0442\u044B",reward:320,par:30,intro:[["nikita","\u044F, \u043A\u0441\u0442\u0430\u0442\u0438, \u0442\u043E\u0436\u0435 - 3 \u0438\u0433\u0440\u0443 \u0443\u0436\u0435 \u0441\u0434\u0435\u043B\u0430\u043B\u{1F601}"],["nikita","\u0412\u043E\u043F\u043B\u043E\u0449\u0430\u044E \u0432\u0441\u0435 \u0444\u0430\u043D\u0442\u0430\u0437\u0438\u0438 \u043A\u0430\u043A\u043E\u0439 \u0434\u043E\u043B\u0436\u043D\u0430 \u0431\u044B\u0442\u044C \u0438\u0433\u0440\u0430 \u043C\u0435\u0447\u0442\u044B\u{1F601}"],["nikita","@P, \u043F\u043E\u0434\u044A\u0435\u0437\u0436\u0430\u0439, \u043F\u043E\u043A\u0430\u0436\u0443. \u0422\u0430\u043C 4 \u0440\u0430\u0441\u044B \u0438 AI \u043F\u0440\u043E\u0442\u0438\u0432\u043D\u0438\u043A"]],steps:[{pts:["nikita"],text:"\u041A \u041D\u0438\u043A\u0438\u0442\u0435: \u043E\u043D \u0441\u0434\u0435\u043B\u0430\u043B \u0438\u0433\u0440\u0443 \u043C\u0435\u0447\u0442\u044B",say:[["nikita","\u0432\u043E\u0442 \u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u043E\u0438\u0433\u0440\u0430\u0442\u044C:"],["sys","\u041D\u0438\u043A\u0438\u0442\u0430 \u0432\u043A\u043B\u044E\u0447\u0438\u043B \u0441\u0432\u043E\u044E \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u044E. \u0422\u0430\u0439\u043C\u0435\u0440 \u0434\u043E \u0440\u0435\u043B\u0438\u0437\u0430 \u043F\u0440\u0438 \u044D\u0442\u043E\u043C \u043D\u0435 \u043E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u043B\u0441\u044F"]]},{duel:!0}],outro:[["nikita","\u042D\u0442\u043E \u0447\u0442\u043E \u0437\u0430 \u043F\u0438\u0437\u0434\u0435\u0446???!!! \u{1F62D}"],["dima","\u0422\u043E\u0436\u0435 \u0441\u043A\u043E\u0440\u043E \u0441\u0434\u0435\u043B\u0430\u044E)"],["nikita","\u0434\u0438\u043C\u0430\u043D, \u043F\u043E\u043A\u0430 \u0437\u0430\u043A\u0430\u043F\u044B\u0432\u0430\u0435\u043C\u0441\u044F)"]],outroLost:[["nikita","AI \u043F\u0440\u043E\u0442\u0438\u0432\u043D\u0438\u043A 50% \u0438\u0433\u0440 \u043C\u0435\u043D\u044F \u0434\u0435\u043B\u0430\u0435\u0442, \u043A\u0430\u043A \u043C\u0430\u043B\u0435\u043D\u044C\u043A\u043E\u0433\u043E"],["igor","\u041D\u0438\u043A\u0438\u0442\u2026 \u043D\u0438\u0447\u0435\u0433\u043E \u0441\u0442\u0440\u0430\u0448\u043D\u043E\u0433\u043E) \u043D\u0435 \u043F\u0435\u0440\u0435\u0436\u0438\u0432\u0430\u0439 \u0438\u0437-\u0437\u0430 \u044D\u0442\u043E\u0433\u043E)"]]},sanya:{giver:"sanya",title:"\u0422\u044F\u0433\u043E\u043C\u043E\u0442\u043D\u043E\u0435 \u043D\u0430\u0447\u0430\u043B\u043E",reward:1e3,par:65,intro:[["sanya","\u0410\u043D\u0430\u043B\u043E\u0433\u0438\u0447\u043D\u043E, \u043F\u043E\u0441\u0442\u0430\u0432\u0438\u043B \u043D\u0430 \u043D\u043E\u0443\u0442 \u0438 \u043F\u043E\u0438\u0433\u0440\u044B\u0432\u0430\u044E)"],["sanya","\u041F\u0440\u0438\u0448\u043B\u043E\u0441\u044C \u043E\u043F\u0435\u0440\u0430\u0442\u0438\u0432\u043A\u0438 \u0434\u043E\u043A\u0443\u043F\u0438\u0442\u044C, \u0447\u0442\u043E\u0431\u044B \u0433\u0440\u0430\u0444\u0438\u043A\u0430 \u043D\u043E\u0440\u043C \u0431\u044B\u043B\u0430\u{1F605}"],["sanya","@P, \u0437\u0430\u0445\u0432\u0430\u0442\u0438 \u0435\u0449\u0451 \u043F\u043B\u0430\u043D\u043A\u0443 \u0432 \xAB\u0422\u0435\u0445\u043D\u043E\u0420\u0430\u043A\u0435\xBB \u0438 \u0432\u0435\u0437\u0438 \u043A\u043E \u043C\u043D\u0435 \u043D\u0430 \u043B\u0435\u0432\u044B\u0439 \u0431\u0435\u0440\u0435\u0433"]],steps:[{pts:["shop"],text:"\u0422\u0426 \xAB\u0422\u0435\u0445\u043D\u043E\u0420\u0430\u043A\xBB: \u043E\u043F\u0435\u0440\u0430\u0442\u0438\u0432\u043A\u0430 \u0434\u043B\u044F \u0421\u0430\u043D\u0438"},{pts:["sanya"],text:"\u0412\u0435\u0437\u0438 \u043E\u043F\u0435\u0440\u0430\u0442\u0438\u0432\u043A\u0443 \u0421\u0430\u043D\u0435 \u043D\u0430 \u043B\u0435\u0432\u044B\u0439 \u0431\u0435\u0440\u0435\u0433"},{slow:8,text:"\u0422\u0435\u0440\u043F\u0438: \u0435\u0434\u044C \u043C\u0435\u0434\u043B\u0435\u043D\u043D\u0435\u0435 25 \u043A\u043C/\u0447",enter:[["sys","\u0421\u0430\u043D\u044F \u0432\u043A\u043B\u044E\u0447\u0438\u043B RDR2. \u041D\u0430\u0447\u0430\u043B\u043E, \u0441\u043D\u0435\u0433. \u0415\u0434\u044C \u043C\u0435\u0434\u043B\u0435\u043D\u043D\u043E \u0438 \u0442\u0435\u0440\u043F\u0438 \u0432\u043C\u0435\u0441\u0442\u0435 \u0441 \u043D\u0438\u043C"],["sanya","\u042F \u0442\u0430\u043A \u0438 \u043D\u0435 \u0441\u043C\u043E\u0433 \u0438\u0433\u0440\u0430\u0442\u044C \u0432 \u0440\u0434\u0440, \u043D\u0443 \u043E\u043D\u0430 \u0432\u043D\u0430\u0447\u0430\u043B\u0435 \u0434\u0438\u043A\u043E \u043C\u0435\u0434\u043B\u0435\u043D\u043D\u0430\u044F"],["max","\u041D\u043E, \u043F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043F\u043E\u0442\u0435\u0440\u043F\u0438 \u0447\u0443\u0442\u044C-\u0447\u0443\u0442\u044C!! \u042D\u0442\u043E \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u043D\u0430\u0434\u043E \u0441\u0434\u0435\u043B\u0430\u0442\u044C"]],say:[["max","\u041E\u043D\u043E \u0441\u0442\u043E\u0438\u0442 \u0442\u043E\u0433\u043E \u0432 20 \u043A\u0440\u0430\u0442"]],big:["\u041F\u0415\u0420\u0415\u0422\u0415\u0420\u041F\u0415\u041B","50 \u043E\u0447\u043A\u043E\u0432 \xD7 20 \u043A\u0440\u0430\u0442"]}],outro:[["sanya","\u041D\u0443, \u0434\u0430\u043C \u0435\u0439 \u0432\u0442\u043E\u0440\u043E\u0439 \u0448\u0430\u043D\u0441, \u043A\u0430\u043A \u0431\u0443\u0434\u0435\u0442 \u0441\u0432\u043E\u0431\u043E\u0434\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F )"],["arkasha","\u042D\u0442\u043E \u043E\u0434\u043D\u0430 \u0438\u0437 \u043B\u0443\u0447\u0448\u0438\u0445 \u0438\u0433\u0440 \u0432 \u0446\u0435\u043B\u043E\u043C, \u0441\u0440\u0435\u0434\u0438 \u0432\u0441\u0435\u0445 \u0438\u0433\u0440, \u043D\u0430\u0434\u043E \u0434\u0430\u0442\u044C \u0448\u0430\u043D\u0441 100%"]]},misha:{giver:"misha",title:"\u0411\u0430\u0442\u044F \u0432 \u0437\u0434\u0430\u043D\u0438\u0438",reward:750,par:55,failReward:200,intro:[["misha","\u0422\u043E\u043B\u044C\u043A\u043E \u043A\u0443\u043F\u0438\u043B PS5. \u041A\u0430\u043A\u0443\u044E \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0443 \u0431\u0440\u0430\u0442\u044C?"],["pasha","Extra \u0431\u0435\u0440\u0438"],["dima","\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0443\u044E \u0431\u0440\u0430\u0442\u044C \u043D\u0430\u0434\u043E"],["nikita","\u041C\u043D\u0435 \u043A\u0430\u0436\u0435\u0442\u0441\u044F \u043F\u043E\u043A\u0443\u043F\u0430\u0442\u044C \u0443\u0434\u043E\u0431\u043D\u0435\u0435 \u{1F937}\u200D\u2642\uFE0F"],["geisler","\u041C\u0438\u0448\u0430, \u043C\u043E\u0436\u0435\u0448\u044C \u0432\u043E\u043E\u0431\u0449\u0435 \u043D\u0435 \u0431\u0440\u0430\u0442\u044C \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0443"],["max","\u041C\u0438\u0448\u0430, \u0431\u0435\u0440\u0438 \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0443 \u0438 \u043D\u0435 \u0435\u0431\u0438 \u043C\u043E\u0437\u0433\u0438"],["misha","@P, \u0437\u0430\u0435\u0434\u044C \u0432 \u043F\u0430\u0440\u043A \u043D\u0430 \u043B\u0435\u0432\u043E\u043C \u0431\u0435\u0440\u0435\u0433\u0443, \u0440\u0435\u0448\u0438 \u0437\u0430 \u043C\u0435\u043D\u044F"]],steps:[{pts:["misha"],text:"\u0412 \u043F\u0430\u0440\u043A \u043D\u0430 \u043B\u0435\u0432\u043E\u043C \u0431\u0435\u0440\u0435\u0433\u0443: \u0411\u0430\u0442\u044F \u0436\u0434\u0451\u0442 \u0441\u043E\u0432\u0435\u0442\u0430"},{choice:{title:"\u041A\u0430\u043A\u0443\u044E \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0443 \u0431\u0440\u0430\u0442\u044C \u041C\u0438\u0448\u0435?",text:"\u0427\u0430\u0442 \u0432\u044B\u0434\u0430\u043B \u0432\u0437\u0430\u0438\u043C\u043E\u0438\u0441\u043A\u043B\u044E\u0447\u0430\u044E\u0449\u0438\u0435 \u0441\u043E\u0432\u0435\u0442\u044B. \u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0435 \u0441\u043B\u043E\u0432\u043E \u0437\u0430 \u0442\u043E\u0431\u043E\u0439.",opts:[{label:"Extra",say:[["pasha","\u0412 \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0435 \u0435\u0441\u0442\u044C \u0438 \u0442\u043E\u043F\u043E\u0432\u044B\u0445: \u043F\u0430\u0443\u043A\u0438, \u0413\u0422\u0410 5, \u0440\u0434\u0440, \u043B\u0430\u0441\u0442 \u043E\u0444 \u0430\u0437\u2026"],["geisler","\u042D\u0442\u043E \u0432\u0441\u0435 \u043C\u043E\u0436\u043D\u043E \u043F\u043E \u0434\u0435\u0448\u0435\u0432\u043A\u0435 \u0432\u0437\u044F\u0442\u044C \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u043E"]]},{label:"\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0443\u044E",say:[["dima","\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0443\u044E \u0431\u0440\u0430\u0442\u044C \u043D\u0430\u0434\u043E"],["pasha","\u0422\u0430\u043A \u0442\u0430\u043C \u043E\u0442\u043B\u0438\u0447\u0438\u0435, \u0447\u0442\u043E \u0435\u0441\u0442\u044C \u0440\u0435\u0442\u0440\u043E \u043A\u043B\u0430\u0441\u0441\u0438\u043A\u0430 \u0442\u043E\u043B\u044C\u043A\u043E, \u043D\u0430\u0445 \u043E\u043D\u0430 \u043D\u0443\u0436\u043D\u0430?"]]},{label:"\u0412\u043E\u043E\u0431\u0449\u0435 \u043D\u0435 \u0431\u0440\u0430\u0442\u044C",say:[["geisler","\u0415\u0441\u043B\u0438 \u0442\u044B \u043D\u0435 \u043F\u043B\u0430\u043D\u0438\u0440\u0443\u0435\u0448\u044C \u043F\u043E \u0441\u0435\u0442\u0438 \u0441 \u0434\u0440\u0443\u0433\u0438\u043C\u0438 \u0438\u0433\u0440\u0430\u0442\u044C, \u043C\u043E\u0436\u0435\u0448\u044C \u043D\u0435 \u0431\u0440\u0430\u0442\u044C"],["max","\u041E\u043D\u0430 \u0441\u0442\u043E\u0438\u0442 2 \u0442\u0440 \u0432 \u0433\u043E\u0434"]]}]}},{pts:["garage"],timer:32,text:"\u0411\u044B\u0441\u0442\u0440\u043E \u043A \u0442\u0438\u043F\u0430\u043C \u0432 \u0433\u0430\u0440\u0430\u0436\u0438: \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0430 \u0437\u0430 2590",enter:[["misha","\u0412\u043E\u0442 \u0442\u0430\u043A \u0430\u0433\u0430"],["misha","\u041E\u0433\u043E\u043D\u044C, 2590 \u0433\u043E\u0434\u043D\u043E \u0434\u043B\u044F \u041D\u0441\u043A\u{1F602}"],["sys","\u0423 \u0411\u0430\u0442\u0438 \u0435\u0441\u0442\u044C \u043F\u043E\u043B\u043C\u0438\u043D\u0443\u0442\u044B, \u043F\u043E\u043A\u0430 \u0432\u0441\u0435 \u0441\u043F\u044F\u0442. \u0421\u0433\u043E\u043D\u044F\u0439 \u043A \u0442\u0438\u043F\u0430\u043C \u0438 \u043E\u0431\u0440\u0430\u0442\u043D\u043E"]]},{pts:["misha"],text:"\u041E\u0431\u0440\u0430\u0442\u043D\u043E \u043A \u041C\u0438\u0448\u0435, \u043F\u043E\u043A\u0430 \u0443 \u043D\u0435\u0433\u043E \u0435\u0441\u0442\u044C \u0432\u0440\u0435\u043C\u044F"}],outro:[["geisler","\u0411\u0430\u0442\u044F \u0432 \u0437\u0434\u0430\u043D\u0438\u0438!)"],["misha","\u041E\u043A, \u0441\u043F\u0430\u0441\u0438\u0431\u043E!"]],fail:[["misha","\u0414\u0430 \u043F\u043E\u043A\u0430 \u043D\u0438\u043A\u0430\u043A, \u0432\u0440\u0435\u043C\u0435\u043D\u0438 \u0442\u0443\u043F\u043E \u043D\u0435\u0442 ("],["sys","\u0411\u0430\u0442\u044F \u0443\u0448\u0451\u043B. \u041F\u043E\u0434\u043F\u0438\u0441\u043A\u0430 \u043E\u0441\u0442\u0430\u043B\u0430\u0441\u044C \u0443 \u0442\u0438\u043F\u043E\u0432"]]},pasha:{giver:"pasha",title:"\u041F\u0435\u0440\u0435\u043D\u043E\u0441 \u043F\u0440\u0435\u0434\u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438",reward:850,par:70,intro:[["pasha","\u041F\u0440\u043E \u0441\u043B\u0438\u0432\u044B \u0413\u0422\u0410 \u0432 \u043A\u0443\u0440\u0441\u0435? \u041F\u0438\u0437\u0434\u0435\u0446 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u0430\u044F \u0445\u0443\u0439\u043D\u044F)"],["pasha","\u041F\u0440\u0435\u0434\u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0443\u0436\u0435 \u0432 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u0432\u0442\u043E\u0440\u043D\u0438\u043A.."],["pasha","@P, \u0437\u0430\u0431\u0435\u0440\u0438 \u0441\u043B\u0438\u0432 \u0443 \u0438\u043D\u0441\u0430\u0439\u0434\u0435\u0440\u0430. \u041E\u043D \u043F\u043E\u0434 \u0431\u0438\u043B\u0431\u043E\u0440\u0434\u043E\u043C \u043D\u0430 \u043D\u0430\u0431\u0435\u0440\u0435\u0436\u043D\u043E\u0439"]],steps:[{pts:["leak1"],text:"\u0421\u043B\u0438\u0432: \u043F\u043E\u0434 \u0431\u0438\u043B\u0431\u043E\u0440\u0434\u043E\u043C \u043D\u0430 \u043D\u0430\u0431\u0435\u0440\u0435\u0436\u043D\u043E\u0439",say:[["pasha","\u041F\u0435\u0440\u0435\u043D\u0435\u0441\u043B\u0438 \u0441 12-\u043E\u0433\u043E \u043D\u0430 10"],["sys","\u0418\u043D\u0441\u0430\u0439\u0434\u0435\u0440 \u043F\u0435\u0440\u0435\u0435\u0445\u0430\u043B \u043A \u043A\u043E\u043B\u0435\u0441\u0443 \u043E\u0431\u043E\u0437\u0440\u0435\u043D\u0438\u044F"]],big:["\u041F\u0415\u0420\u0415\u041D\u0415\u0421\u041B\u0418","\u0441\u043B\u0438\u0432 \u0442\u0435\u043F\u0435\u0440\u044C \u0443 \u043A\u043E\u043B\u0435\u0441\u0430 \u043E\u0431\u043E\u0437\u0440\u0435\u043D\u0438\u044F"]},{pts:["leak2"],text:"\u041F\u0435\u0440\u0435\u043D\u0435\u0441\u043B\u0438: \u0441\u043B\u0438\u0432 \u0443 \u043A\u043E\u043B\u0435\u0441\u0430 \u043E\u0431\u043E\u0437\u0440\u0435\u043D\u0438\u044F",say:[["pasha","\u041D\u0443 \u043E\u0431\u0435\u0449\u0430\u044E\u0442 \u0431\u0435\u0437 \u043F\u0435\u0440\u0435\u043D\u043E\u0441\u043E\u0432"],["sys","\u041F\u0435\u0440\u0435\u043D\u0435\u0441\u043B\u0438 \u0435\u0449\u0451 \u0440\u0430\u0437. \u0422\u0435\u043F\u0435\u0440\u044C \u043A \u0447\u0430\u0441\u043E\u0432\u043D\u0435"]],big:["\u041E\u041F\u042F\u0422\u042C \u041F\u0415\u0420\u0415\u041D\u0415\u0421\u041B\u0418","\u0441\u043B\u0438\u0432 \u0442\u0435\u043F\u0435\u0440\u044C \u0443 \u0447\u0430\u0441\u043E\u0432\u043D\u0438"]},{pts:["leak3"],text:"\u041F\u0435\u0440\u0435\u043D\u0435\u0441\u043B\u0438: \u0441\u043B\u0438\u0432 \u0443 \u0447\u0430\u0441\u043E\u0432\u043D\u0438 \u043D\u0430 \u041A\u0440\u0430\u0441\u043D\u043E\u043C",say:[["sys","\u0424\u043B\u0435\u0448\u043A\u0430 \u0441\u043E \u0441\u043B\u0438\u0432\u043E\u043C \u0443 \u0442\u0435\u0431\u044F. \u041D\u0430 \u043D\u0435\u0439 212 \u0413\u0411"]]},{pts:["pasha"],text:"\u041E\u0442\u0432\u0435\u0437\u0438 \u0441\u043B\u0438\u0432 \u041F\u0430\u0448\u0435"},{choice:{title:"\u041F\u0430\u0448\u0430 \u043F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u043B \u0441\u043B\u0438\u0432",text:"\xAB\u041D\u0435 \u0437\u043D\u0430\u044E\u2026 \u043D\u0435 \u043F\u043E\u043D\u044F\u043B\u2026\xBB \u0427\u0435\u043C \u0435\u043C\u0443 \u0437\u0430\u043D\u044F\u0442\u044C\u0441\u044F \u0434\u043E \u043F\u043E\u043B\u0443\u043D\u043E\u0447\u0438?",opts:[{label:"\u041F\u0443\u0441\u0442\u044C \u043D\u0430\u0447\u043D\u0451\u0442 BG3",say:[["pasha","BG3 \u0445\u043E\u0447\u0443 \u043D\u0430\u0447\u0430\u0442\u044C, \u043D\u043E \u0431\u043E\u044E\u0441\u044C"],["kos","\u041A\u0430\u043A \u0436\u0435 \u0442\u0430\u043C \u043C\u043D\u043E\u0433\u043E \u043D\u0443\u0436\u043D\u043E \u0447\u0438\u0442\u0430\u0442\u044C \u0434\u0438\u0430\u043B\u043E\u0433\u043E\u0432\u{1F635}\u200D\u{1F4AB}"]]},{label:"\u041F\u0443\u0441\u0442\u044C \u0436\u0434\u0451\u0442 \u0434\u0430\u043B\u044C\u0448\u0435",say:[["pasha","\u0421\u043A\u043E\u0440\u0435\u0435 \u0431\u044B \u0413\u0422\u0410"],["max","\u0412 PS Store \u043D\u0430\u043F\u0438\u0441\u0430\u043D\u043E 19.11.26"]]}]}}],outro:[["pasha","\u041D\u0435 \u0437\u043D\u0430\u044E\u2026 \u043D\u0435 \u043F\u043E\u043D\u044F\u043B\u2026 \u0434\u043B\u044F \u043C\u0435\u043D\u044F \u043A\u0440\u043E\u043C\u0435 LOA \u0438 RDR \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u0437\u0430\u0435\u0431\u0438\u0441\u044C\u{1F612}"]]},artem:{giver:"artem",title:"\u0412\u0430\u0442\u0443\u0442\u0438\u043D\u0430 \u0434\u0430\u043B\u0435\u043A\u043E\u0432\u0430\u0442\u043E",reward:1200,par:90,intro:[["artem","\u041A\u0442\u043E \u0447\u0438\u0441\u0442\u0438\u043B \u043F\u04415? \u042F \u043F\u0440\u043E \u0447\u0438\u0441\u0442\u043A\u0443 \u0441\u0430\u043C\u043E\u0439 \u043A\u043E\u043D\u0441\u043E\u043B\u0438 \u043E\u0442 \u043F\u044B\u043B\u0438"],["arkasha",{voice:9}],["artem","\u0412\u0430\u0442\u0443\u0442\u0438\u043D\u0430 \u0434\u0430\u043B\u0435\u043A\u043E\u0432\u0430\u0442\u043E)))"],["artem","@P, \u043E\u0442\u0432\u0435\u0437\u0438, \u0430? \u0417\u0430\u0431\u0435\u0440\u0438 \u043F\u043B\u043E\u0439\u043A\u0443 \u0443 \u043C\u0435\u043D\u044F \u043D\u0430 \u0441\u0435\u0432\u0435\u0440\u043E-\u0432\u043E\u0441\u0442\u043E\u043A\u0435"]],steps:[{pts:["artem"],text:"\u0417\u0430\u0431\u0435\u0440\u0438 \u043F\u044B\u043B\u044C\u043D\u0443\u044E PS5 \u0443 \u0410\u0440\u0442\u0451\u043C\u0430",say:[["artem","\u041F\u0435\u0439 \u043F\u0438\u0432\u043E, \u0440\u0443\u043A\u0438 \u0434\u043E\u043B\u0436\u043D\u044B \u0431\u044B\u0442\u044C \u0432 \u0440\u044B\u0431\u0435, \u043D\u0435 \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0439 \u0434\u0443\u0448"]]},{pts:["vatutina"],text:"\u041D\u0430 \u0412\u0430\u0442\u0443\u0442\u0438\u043D\u0430, \u0447\u0435\u0440\u0435\u0437 \u0411\u0443\u0433\u0440\u0438\u043D\u0441\u043A\u0438\u0439 \u043C\u043E\u0441\u0442. \u0414\u0430\u043B\u0435\u043A\u043E\u0432\u0430\u0442\u043E"}],outro:[["sys","PS5 \u043F\u043E\u0447\u0438\u0449\u0435\u043D\u0430. \u0412\u043D\u0443\u0442\u0440\u0438 \u043D\u0430\u0448\u043B\u0438 \u0442\u0440\u0438 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438 \u0418\u0433\u043E\u0440\u044F"],["artem","\u0411\u043E\u0436\u0435, \u0445\u0440\u0430\u043D\u0438 \u043F\u0438\u0440\u0430\u0442\u043E\u0432, \u0430\u043C\u0438\u043D\u044C"]]}},Bc=["arkasha","nikita","pasha","dima","max","sanya","misha","kos","artem","geisler"].filter(i=>Zr[i]),Pf=6,Uo=2,Lf={igor:"\u042F \u0437\u0430 \u0440\u0443\u043B\u0435\u043C\u2026 \u043D\u0435 \u0432\u043E\u044E\u044E",max:"\u042F \u043F\u0430\u0441, \u0437\u0430\u043D\u044F\u0442",arkasha:"\u0414\u0430\u0439 10 \u043C\u0438\u043D",geisler:"\u042F \u0434\u0430\u0436\u0435 \u0432\u043A\u043B\u044E\u0447\u0430\u0442\u044C \u0431\u043E\u044E\u0441\u044C",pasha:"\u041D\u0435 \u0441\u043E\u0431\u0438\u0440\u0430\u044E\u0441\u044C",nikita:"\u042F \u043D\u0435 \u0438\u0433\u0440\u0430\u043B \u043D\u0435 \u0440\u0430\u0437\u0443",kos:"\u041D\u0430\u0434\u043E \u0441\u043A\u0430\u0447\u0430\u0442\u044C",artem:"\u0413\u043E \u0432 \u0432\u0441",sanya:"\u041A\u0430\u043A \u0431\u0443\u0434\u0435\u0442 \u0441\u0432\u043E\u0431\u043E\u0434\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F )",misha:"\u0412\u0440\u0435\u043C\u0435\u043D\u0438 \u0442\u0443\u043F\u043E \u043D\u0435\u0442 ("},No=[[1.5,"nikita","\u0427\u0442\u043E \u044D\u0442\u043E?"],[4.5,"max","\u0427\u0430\u0442 \u0432\u043B\u0430\u0434\u0435\u043B\u044C\u0446\u0435\u0432 PS5"],[7,"sys","\u0412 \u044D\u0442\u043E\u0439 \u043F\u0430\u0440\u0442\u0438\u0438 6 \u043F\u043E\u0440\u0443\u0447\u0435\u043D\u0438\u0439 \u0438\u0437 10. \u0412 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0439 \u0432\u044B\u043F\u0430\u0434\u0443\u0442 \u0434\u0440\u0443\u0433\u0438\u0435"],[10,"sanya","\u041E\u043D\u0430 \u0432\u043D\u0430\u0447\u0430\u043B\u0435 \u0434\u0438\u043A\u043E \u043C\u0435\u0434\u043B\u0435\u043D\u043D\u0430\u044F. \u0418 \u043E\u043F\u044F\u0442\u044C \u0441\u043D\u0435\u0433"],[14,"max","\u0421\u0430\u043D\u044F\u{1F64F}\u{1F3FB}\u{1F64F}\u{1F3FB}\u{1F629} \u043F\u043E\u0442\u0435\u0440\u043F\u0438 \u0447\u0443\u0442\u044C-\u0447\u0443\u0442\u044C!! \u041E\u043D\u043E \u0441\u0442\u043E\u0438\u0442 \u0442\u043E\u0433\u043E \u0432 20 \u043A\u0440\u0430\u0442"],[46,"dima","\u041A\u0441\u0442\u0430\u0442\u0438, \u044D\u0442\u0443 \u0438\u0433\u0440\u0443 \u044F \u0441\u0434\u0435\u043B\u0430\u043B \u043D\u0435\u0439\u0440\u043E\u0441\u0435\u0442\u044C\u044E. \u0417\u0430 \u043D\u043E\u0447\u044C. \u042D\u0442\u043E \u0443\u0436\u0435 \u043D\u043E\u0432\u0430\u044F \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u044C)"],[50,"nikita","\u042F, \u043A\u0441\u0442\u0430\u0442\u0438, \u0442\u043E\u0436\u0435 \u2014 3 \u0438\u0433\u0440\u0443 \u0443\u0436\u0435 \u0441\u0434\u0435\u043B\u0430\u043B\u{1F601}"],[54,"arkasha","\u0415\u0431\u0430\u0442\u044C \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438 \u043A\u043E\u043D\u0435\u0447\u043D\u043E"],[78,"igor","\u0411\u0430\u0442\u043B\u0430\u2026 \u043F\u0438\u0437\u0434\u0430\u0442\u0430\u044F!!!"],[81,"max","\u0420\u0430\u0441\u043F\u0440\u043E\u0431\u043E\u0432\u0430\u043B"],[102,"misha","\u0422\u043E\u043B\u044C\u043A\u043E \u043A\u0443\u043F\u0438\u043B PS5. \u041A\u0430\u043A\u0443\u044E \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0443 \u0431\u0440\u0430\u0442\u044C?","misha"],[104,"pasha","Extra \u0431\u0435\u0440\u0438","misha"],[106,"dima","\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0443\u044E \u0431\u0440\u0430\u0442\u044C \u043D\u0430\u0434\u043E","misha"],[108,"nikita","\u041C\u043D\u0435 \u043A\u0430\u0436\u0435\u0442\u0441\u044F \u043F\u043E\u043A\u0443\u043F\u0430\u0442\u044C \u0443\u0434\u043E\u0431\u043D\u0435\u0435 \u{1F937}\u200D\u2642\uFE0F","misha"],[110,"geisler","\u041C\u0438\u0448\u0430, \u043C\u043E\u0436\u0435\u0448\u044C \u0432\u043E\u043E\u0431\u0449\u0435 \u043D\u0435 \u0431\u0440\u0430\u0442\u044C \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0443","misha"],[112,"max","\u041C\u0438\u0448\u0430, \u0431\u0435\u0440\u0438 \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0443 \u0438 \u043D\u0435 \u0435\u0431\u0438 \u043C\u043E\u0437\u0433\u0438","misha"],[114,"pasha","\u041D\u0443 \u0438\u043B\u0438 \u0432\u043E\u043E\u0431\u0449\u0435 \u043D\u0435 \u0431\u0435\u0440\u0438","misha"],[117,"misha","\u0412\u043E\u0442 \u0442\u0430\u043A \u0430\u0433\u0430","misha"],[142,"pasha","\u041F\u0440\u043E \u0441\u043B\u0438\u0432\u044B \u0432 \u043A\u0443\u0440\u0441\u0435? \u041F\u0438\u0437\u0434\u0435\u0446 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u0430\u044F \u0445\u0443\u0439\u043D\u044F)","pasha"],[168,"igor","\u0411\u0430\u0442\u043B\u0430 \u2026 \u0437\u0430\u043B\u0443\u043F\u0430 \u043F\u043E\u043B\u043D\u0430\u044F!!!"],[171,"nikita","\u0427\u0442\u043E \u043F\u0440\u043E\u0438\u0437\u043E\u0448\u043B\u043E?)"],[198,"artem","\u0411\u043E\u0436\u0435, \u0445\u0440\u0430\u043D\u0438 \u043F\u0438\u0440\u0430\u0442\u043E\u0432, \u0430\u043C\u0438\u043D\u044C"],[218,"max",{voice:47}],[220,"max",{voice:8}],[224,"arkasha","\u042F \u043D\u0435 \u0441\u043B\u0443\u0448\u0430\u043B"],[246,"kos","\u041D\u0430 \u0421\u0435\u0440\u0433\u0435\u044F \u0441\u0442\u043E\u043B\u0438\u043A"],[266,"geisler","\u041C\u0435\u043D\u044F \u0443\u0434\u0438\u0432\u043B\u044F\u0435\u0442 \u043F\u043E\u0447\u0435\u043C\u0443 \u043F\u0441 \u0434\u043E \u0441\u0438\u0445 \u043F\u043E\u0440 \u044D\u0442\u0443 \u043B\u0430\u0432\u043E\u0447\u043A\u0443 \u043D\u0435 \u043F\u0440\u0438\u043A\u0440\u044B\u043B\u0438))"],[288,"max","\u041E\u0447\u0435\u043D\u044C \u043F\u043B\u043E\u0445\u043E\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435. \u041E\u043D\u043E \u043C\u043D\u0435 \u043E\u0447\u0435\u043D\u044C \u043D\u0435 \u043D\u0440\u0430\u0432\u0438\u0442\u0441\u044F"],[304,"pasha","BG3 \u0445\u043E\u0447\u0443 \u043D\u0430\u0447\u0430\u0442\u044C, \u043D\u043E \u0431\u043E\u044E\u0441\u044C"],[322,"igor","\u0413\u043E\u0442\u043E\u0432 \u043A \u0433\u0442\u0430"],[336,"geisler","\u041D\u043E\u0432\u0430\u044F \u0417\u0435\u043B\u0430\u043D\u0434\u0438\u044F \u043F\u043E\u043A\u0430 \u0442\u043E\u043B\u044C\u043A\u043E \u043A\u0430\u0447\u0430\u0435\u0442"],[348,"max","\u041B\u0435\u0442\u0441 \u0433\u043E\u0443 \u043D\u0430\u0445\u0443\u0439"],[358,"misha","\u0414\u0430 \u043F\u043E\u043A\u0430 \u043D\u0438\u043A\u0430\u043A, \u0432\u0440\u0435\u043C\u0435\u043D\u0438 \u0442\u0443\u043F\u043E \u043D\u0435\u0442 ("]],Fo=[[300,"5 \u043C\u0438\u043D\u0443\u0442..."],[240,"4 \u043C\u0438\u043D\u0443\u0442\u044B.."],[180,"3 \u043C\u0438\u043D\u0443\u0442\u044B..."],[120,"2 \u043C\u0438\u043D\u0443\u0442\u044B.."],[60,"\u041C\u0438\u043D\u0443\u0442\u0430..."],[21,"21 \u0441\u0435\u043A\u0443\u043D\u0434\u0430.."]],Jr=[["arkasha","\u0417\u0430\u043F\u0443\u0441\u043A\u0430\u044E..."],["arkasha","\u041E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435 \u043F\u0435\u0440\u0432\u043E\u0433\u043E \u0434\u043D\u044F. 38 \u0433\u0431. \u0410\u0445\u0443\u0435\u0442\u044C"],["geisler","\u0423 \u043C\u0435\u043D\u044F 14%. \u041A\u0430\u043A \u0440\u0430\u0437 \u043A 19\u043C\u0443 \u0434\u043E\u043A\u0430\u0447\u0430\u0435\u0442\u0441\u044F \u{1F602}\u{1F602}"],["max",{voice:94}],["igor","\u0423\u0436\u0435 \u043D\u0430\u0448\u0451\u043B 2 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438 \u0438\u0437 144"],["sanya","\u041D\u0430\u0447\u0430\u043B\u043E \u0442\u044F\u0433\u043E\u043C\u043E\u0442\u043D\u043E\u0435"],["max","\u0421\u0430\u043D\u044C, \u043D\u0430\u0434\u043E \u0447\u0443\u0442\u044C-\u0447\u0443\u0442\u044C \u043F\u0435\u0440\u0435\u0442\u0435\u0440\u043F\u0435\u0442\u044C!)) \u0440\u0435\u0430\u043B\u044C\u043D\u043E"],["pasha","\u0414\u043B\u044F \u043C\u0435\u043D\u044F \u043A\u0440\u043E\u043C\u0435 LOA \u0438 RDR \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u0437\u0430\u0435\u0431\u0438\u0441\u044C\u{1F612}"],["kos","\u041D\u0430 \u0421\u0435\u0440\u0433\u0435\u044F \u0441\u0442\u043E\u043B\u0438\u043A"],["artem","\u0411\u043E\u0436\u0435, \u0445\u0440\u0430\u043D\u0438 \u043F\u0438\u0440\u0430\u0442\u043E\u0432, \u0430\u043C\u0438\u043D\u044C"],["misha","\u0414\u0430 \u043F\u043E\u043A\u0430 \u043D\u0438\u043A\u0430\u043A, \u0432\u0440\u0435\u043C\u0435\u043D\u0438 \u0442\u0443\u043F\u043E \u043D\u0435\u0442 ("],["dima","\u0414\u0430\u0432\u043D\u043E \u043D\u0435 \u0432\u043E\u0435\u0432\u0430\u043B\u0438)"],["nikita","\u0427\u0442\u043E \u044D\u0442\u043E?"]],kc=[[0,"\xAB\u0427\u0442\u043E \u044D\u0442\u043E?\xBB","\u041D\u0438\u043A\u0438\u0442\u0430 \u0438\u0433\u0440\u0430\u0435\u0442 \u043B\u0443\u0447\u0448\u0435. \u0410 \u043E\u043D \u0432\u043E\u043E\u0431\u0449\u0435 \u043D\u0435 \u0438\u0433\u0440\u0430\u0435\u0442."],[700,"\xAB\u041F2 \u0431\u0435\u0437 \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442\u0430\xBB","\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u0434\u043E\u0441\u0442\u0443\u043F \u0432 \u0438\u043D\u0435\u0442. \u0418\u043B\u0438 \u043D\u0430\u043E\u0431\u043E\u0440\u043E\u0442."],[1700,"\xAB\u0422\u0438\u043F\u044B \u0437\u0430 390 \u20BD\xBB","\u041D\u0430 \u0430\u0432\u0438\u0442\u043E \u0442\u0430\u043A\u043E\u0439 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u0441\u0442\u043E\u0438\u0442 5000."],[2900,"\xAB\u041F3 \u0441\u043E \u0441\u0432\u043E\u0435\u0433\u043E \u043F\u0440\u043E\u0444\u0438\u043B\u044F\xBB","\u0421 \u0442\u0440\u043E\u0444\u0435\u044F\u043C\u0438 \u0438 \u0431\u0435\u0437 \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442\u0430."],[4100,"\xAB\u0411\u0430\u0442\u044F \u0432 \u0437\u0434\u0430\u043D\u0438\u0438\xBB","\u0412\u0440\u0435\u043C\u0435\u043D\u0438 \u043D\u0435\u0442, \u0430 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u0435\u0441\u0442\u044C."],[5400,"\xAB\u041B\u0435\u0433\u0435\u043D\u0434\u0430 Beam Store\xBB","\u041C\u044B \u043F\u043E\u043B\u0443\u0447\u0438\u043B\u0438 \u0432\u0430\u0448\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435. \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043E\u0436\u0438\u0434\u0430\u0439\u0442\u0435."],[6800,"\xAB\u0412\u043B\u0430\u0434\u0435\u043B\u0435\u0446 \u0447\u0430\u0442\u0430\xBB","\u0410\u0440\u043A\u0430\u0448\u0430 \u043D\u0430\u043F\u0440\u044F\u0433\u0441\u044F \u0438 \u043F\u043E\u043F\u0440\u0430\u0432\u0438\u043B \u0431\u0430\u0431\u043E\u0447\u043A\u0443."]],Hc=[["\u041D\u0430 \u041F3 \u043D\u0430\u0434\u043E \u0438\u0433\u0440\u0430\u0442\u044C \u0441\u2026","\u0432\u044B\u0434\u0430\u043D\u043D\u043E\u0433\u043E \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0430","\u0441\u0432\u043E\u0435\u0433\u043E \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0430"],["\u041F2 \u2014 \u044D\u0442\u043E \u043A\u043E\u0433\u0434\u0430 \u0438\u0433\u0440\u0430\u0435\u0448\u044C \u0441\u2026","\u0441\u0432\u043E\u0435\u0433\u043E","\u0432\u044B\u0434\u0430\u043D\u043D\u043E\u0433\u043E"],["\u0411\u0435\u0437 \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442\u0430 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442\u2026","\u041F2","\u041F3"],["\u0427\u0442\u043E \u0445\u0443\u0436\u0435 \u0438 \u0434\u0435\u0448\u0435\u0432\u043B\u0435?","\u041F2","\u041F3"],["\u0410\u043A\u043A\u0430\u0443\u043D\u0442, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0442\u0435\u0431\u0435 \u0434\u0430\u043B\u0438, \u043D\u0430\u0434\u043E\u2026","\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043D\u0430 \u043A\u043E\u043D\u0441\u043E\u043B\u0438","\u0443\u0434\u0430\u043B\u0438\u0442\u044C"]],Vc=["\u0421\u043E\u0432\u0435\u0442\u0443\u044E\u0442: \u043F\u0435\u0440\u0435\u0442\u0435\u0440\u043F\u0438 \u0441\u043D\u0435\u0436\u043D\u043E\u0435 \u043D\u0430\u0447\u0430\u043B\u043E","\u0413\u0440\u0443\u0437\u0438\u043C 212 \u0413\u0411\u2026","\u041E\u0441\u0432\u043E\u0431\u043E\u0436\u0434\u0430\u0435\u043C \u043C\u0435\u0441\u0442\u043E: \u0443\u0434\u0430\u043B\u044F\u0435\u043C \u0412\u0435\u0434\u044C\u043C\u0430\u043A\u0430","\u0421\u043F\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u043C \u0443 \u0442\u0438\u043F\u043E\u0432 \u0437\u0430 390 \u20BD","\u041F2 \u0438\u043B\u0438 \u041F3? \u0412\u0441\u0451 \u0442\u0430\u043A, \u0442\u043E\u043B\u044C\u043A\u043E \u043D\u0430\u043E\u0431\u043E\u0440\u043E\u0442"],If={arkasha:"\u0412\u0435\u0434\u044C\u043C\u0430\u043A \u043D\u0435 \u043F\u043E\u0441\u0442\u0440\u0430\u0434\u0430\u043B. \u0418\u043B\u0438 \u043F\u043E\u0441\u0442\u0440\u0430\u0434\u0430\u043B. \u0412\u0441\u0435 \u0442\u0430\u043A, \u0442\u043E\u043B\u044C\u043A\u043E \u043D\u0430\u043E\u0431\u043E\u0440\u043E\u0442.",max:"\u0417\u0430\u043F\u0438\u0441\u0430\u043B \u043E\u0431 \u044D\u0442\u043E\u043C \u0433\u043E\u043B\u043E\u0441\u043E\u0432\u043E\u0435 \u043D\u0430 1:34. \u041D\u0438\u043A\u0442\u043E \u043D\u0435 \u043F\u043E\u0441\u043B\u0443\u0448\u0430\u043B.",dima:"\u0421\u0434\u0435\u043B\u0430\u043B \u0438\u0433\u0440\u0443 \u043D\u0435\u0439\u0440\u043E\u0441\u0435\u0442\u044C\u044E, \u043F\u043E\u043A\u0430 \u0432\u0441\u0435 \u0436\u0434\u0430\u043B\u0438 \u0438\u0433\u0440\u0443. \u041F\u043E\u0442\u043E\u043C \u043F\u043E\u043A\u0430\u0436\u0443)",igor:"\u0421\u043E\u0431\u0440\u0430\u043B \u043D\u0435 \u0432\u0441\u0451. \u0417\u0430\u0432\u0451\u043B \u043D\u043E\u0432\u044B\u0439 \u0430\u043A\u043A\u0430\u0443\u043D\u0442, \u0447\u0442\u043E\u0431\u044B \u043D\u0430\u0447\u0430\u0442\u044C \u0437\u0430\u043D\u043E\u0432\u043E.",geisler:"\u0414\u043E\u043A\u0430\u0447\u0430\u043B\u043E\u0441\u044C 14%. \u041A\u0430\u043A \u0440\u0430\u0437 \u043A 19-\u043C\u0443.",pasha:"\u0412\u044B\u0448\u043B\u0430 \u0431\u0435\u0437 \u043F\u0435\u0440\u0435\u043D\u043E\u0441\u043E\u0432. \u041F\u0430\u0448\u0430 \u0432\u0441\u0451 \u0440\u0430\u0432\u043D\u043E \u0431\u043E\u0438\u0442\u0441\u044F \u043D\u0430\u0447\u0438\u043D\u0430\u0442\u044C.",nikita:"\u0422\u0430\u043A \u0438 \u043D\u0435 \u043F\u043E\u043D\u044F\u043B, \u0447\u0442\u043E \u044D\u0442\u043E. \u0417\u0430\u0442\u043E \u0441\u0434\u0435\u043B\u0430\u043B \u0447\u0435\u0442\u0432\u0451\u0440\u0442\u0443\u044E \u0438\u0433\u0440\u0443.",kos:"\u0421\u0442\u043E\u043B\u0438\u043A \u043D\u0430 \u0421\u0435\u0440\u0433\u0435\u044F \u0432\u0441\u0451 \u0435\u0449\u0451 \u0437\u0430\u0431\u0440\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u043D.",artem:"\u041F\u043B\u043E\u0439\u043A\u0430 \u0447\u0438\u0441\u0442\u0430\u044F. \u0420\u0443\u043A\u0438 \u0432 \u0440\u044B\u0431\u0435. \u0410\u043C\u0438\u043D\u044C.",sanya:"\u041D\u0430\u0447\u0430\u043B\u043E \u0431\u044B\u043B\u043E \u0442\u044F\u0433\u043E\u043C\u043E\u0442\u043D\u043E\u0435. \u0414\u0430\u043B \u0432\u0442\u043E\u0440\u043E\u0439 \u0448\u0430\u043D\u0441.",misha:"\u0411\u0430\u0442\u044F \u0432 \u0437\u0434\u0430\u043D\u0438\u0438. \u0412\u0440\u0435\u043C\u0435\u043D\u0438 \u043F\u043E-\u043F\u0440\u0435\u0436\u043D\u0435\u043C\u0443 \u043D\u0435\u0442."};var ot=i=>document.getElementById(i),Yn=window.matchMedia&&matchMedia("(pointer: coarse)").matches||"ontouchstart"in window;Yn&&document.body.classList.add("touch");var Sn=new URLSearchParams(location.search);ot("tip").textContent=Vc[Math.floor(Math.random()*Vc.length)];var Xi=ot("c"),ti=new kr({canvas:Xi,antialias:!1,alpha:!1,stencil:!1,powerPreference:"high-performance"});ti.shadowMap.enabled=!0;ti.shadowMap.type=bc;ti.setClearColor(329487);var on=new as,De=new rn(58,1,.5,1100),Ie=_f(on),wi=new To(ti),Gi=new Po(on,Yn?3600:6500),Wi=new Lo(on),Df=new Io(on),An=new Do(on),mr=[new dr(on),new dr(on),new dr(on)],Ot=new Yr,jn=new go(16773336,0,80,.5,.8,1);on.add(jn,jn.target);var qf=(()=>{let i=new _e;for(let r of[-.62,.62])i.add(new _i(1,1,12,1,!0),gt(r,.72,9.2,1.7,14,1.7,0,-Math.PI/2),[.15,.14,.11]);let t=new le(i.build(),Ie.cones.material);t.renderOrder=4,t.frustumCulled=!1;let e=new _e;e.quad([-4.5,.2,26],[4.5,.2,26],[4.5,.2,2.4],[-4.5,.2,2.4],[.34,.32,.25]);let n=new le(e.build(),Ie.pools.material);n.renderOrder=2,n.frustumCulled=!1;let s=new Fe;return s.add(t,n),s})(),ds={};for(let i of mn){let t=bf(i.id);t.visible=!1,on.add(t),ds[i.id]=t}var eh=(()=>{let i=new as;i.add(new rr(13622527,6706500,2.4));let t=new ar(16773344,2.6);t.position.set(1.5,2,3),i.add(t);let e=new rn(30,1,.1,20);e.position.set(.45,1.98,3),e.lookAt(0,1.68,0),ti.setPixelRatio(1),ti.setSize(128,128,!1);let n={};for(let a of mn){let o=ds[a.id];i.add(o),o.visible=!0,o.position.set(0,0,0),o.rotation.set(0,.3,0),i.background=new It(a.css).multiplyScalar(.3).add(new It(1186352)),ti.render(i,e),n[a.id]=Xi.toDataURL("image/png"),on.add(o),o.visible=!1}let s=document.createElement("canvas");s.width=s.height=64;let r=s.getContext("2d");return r.fillStyle="#2f7fe0",r.fillRect(0,0,64,64),r.font="40px system-ui",r.textAlign="center",r.textBaseline="middle",r.fillText("\u26A1",32,35),n.beam=s.toDataURL(),n})(),Yf={nikita:"#aab3cc",dima:"#8fa6dd",igor:"#f0f0f0"},M={state:"boot",t:0,time:0,left:360,score:0,pid:null,mode:"car",car:null,cars:[],mods:[],npcs:[],sayQ:[],sayT:0,mission:null,queue:[],nextM:6,wanted:0,caught:0,busy:0,modal:!1,flags:{},stats:{missions:0,total:0,cards:0,feathers:0,orchids:0,bans:0,stolen:0},amb:0,cd:0,acc:1,lastBump:0,shake:0,hudT:0,placeT:0,lastPlace:null},j={x:0,z:0,y:0,vx:0,vz:0,layer:0,h:0,vy:0,walk:0},Xt={yaw:0,off:0,pitch:.26,manual:9,pos:new U,init:!1},ei=null,Qr="",G_=[{scale:2,msaa:4,shadow:2048,snow:1,bloom:5,mirror:!0},{scale:1.5,msaa:0,shadow:2048,snow:.85,bloom:5,mirror:!0},{scale:1.2,msaa:0,shadow:1024,snow:.65,bloom:5,mirror:!0},{scale:.95,msaa:0,shadow:0,snow:.5,bloom:4,mirror:!0},{scale:.72,msaa:0,shadow:0,snow:.35,bloom:4,mirror:!1},{scale:.55,msaa:0,shadow:0,snow:.25,bloom:0,mirror:!1}],W_=[{scale:2,msaa:0,shadow:1024,snow:.75,bloom:5,mirror:!0},{scale:1.5,msaa:0,shadow:0,snow:.55,bloom:4,mirror:!0},{scale:1.25,msaa:0,shadow:0,snow:.4,bloom:4,mirror:!1},{scale:1,msaa:0,shadow:0,snow:.3,bloom:3,mirror:!1},{scale:.75,msaa:0,shadow:0,snow:.22,bloom:0,mirror:!1}],Wo=Yn?W_:G_,Si=Sn.has("q")?Le(+Sn.get("q")||0,0,Wo.length-1):Yn?1:0,Zf=720,Uf=!1,Gc=!1,Oo=0,X_=Si;function ps(){let i=Wo[Si],t=Math.min(window.devicePixelRatio||1,i.scale),e=innerWidth*t,n=innerHeight*t,s=Math.min(1,Math.sqrt((Yn?17e5:44e5)/(e*n)));e=Math.max(160,Math.round(e*s)),n=Math.max(160,Math.round(n*s)),Zf=n,ti.setPixelRatio(1),ti.setSize(e,n,!1),wi.levels=i.bloom||1,wi.bloom=i.bloom>0,wi.setSize(e,n,i.msaa);let r=Ie.moon.shadow;Ie.moon.castShadow=i.shadow>0,i.shadow&&r.mapSize.x!==i.shadow&&(r.mapSize.set(i.shadow,i.shadow),r.map&&(r.map.dispose(),r.map=null)),Ie.mirror.visible=Ie.bridgesM.visible=Ie.streaks.visible=i.mirror,Gi.density(i.snow);let a=innerWidth/innerHeight;De.aspect=a,ko=a>=1.3?58:Math.min(88,2*Math.atan(Math.tan(29*Math.PI/180)*1.3/a)*180/Math.PI)}var ko=58;addEventListener("resize",()=>ps());addEventListener("orientationchange",()=>setTimeout(ps,250));var Wc=ot("feed"),Yc=ot("plog"),gn=i=>String(i).replace(/[&<>]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;"})[t]),q_=i=>`<div class="voice" data-sec="${i}"><div class="p">\u25B6</div><div class="w"></div><div class="d">${Math.floor(i/60)}:${String(i%60).padStart(2,"0")}</div><div class="u"></div></div>`;function Jf(i,t){let e=i===M.pid,n=document.createElement("div");if(n.className="msg"+(e?" me":"")+(i==="sys"?" sys":""),i==="sys")n.innerHTML=`<div class="b">${gn(t)}</div>`;else{let s=i==="beam"?{name:"Beam Store \u{1F916}",css:"#5db0ff"}:bi[i],r=typeof t=="object"?q_(t.voice):gn(t).replace("@P",Qr);n.innerHTML=(e?"":`<img src="${eh[i]}" alt="">`)+`<div class="b">${e?"":`<div class="n" style="color:${Yf[i]||s.css}">${s.name}</div>`}${r}</div>`}return n}function jr(i,t){let e=Jf(i,t);for(Wc.appendChild(e);Wc.children.length>5;)Wc.firstChild.remove();Yc.appendChild(e.cloneNode(!0)),Yc.scrollTop=1e9,setTimeout(()=>e.remove(),9600),Ot.play(typeof t=="object"?"voice":"msg")}var Ue=i=>{for(let t of i)M.sayQ.push(t)};function ni(i,t){let e=ot("big");e.innerHTML=gn(i)+(t?`<small>${gn(t)}</small>`:""),e.classList.remove("show"),e.offsetWidth,e.classList.add("show")}function Ei(i){M.score=Math.max(0,M.score+i),ot("score").textContent=M.score}var Nf=0;function ms(i,t=0){let e=ot("prompt");if(!i){M.time>Nf&&e.classList.add("hidden");return}e.textContent=i,e.classList.remove("hidden"),Nf=t?M.time+t:0}function nh(i,t){M.modal=!0,ot("mtitle").textContent=i.title,ot("mtext").textContent=i.text;let e=ot("mopts");e.innerHTML="",i.opts.forEach(n=>{let s=document.createElement("button");s.textContent=n.label,s.onclick=()=>{ot("modal").classList.add("hidden"),M.modal=!1,t(n)},e.appendChild(s)}),ot("modal").classList.remove("hidden")}var Ti=0;try{Ti=Le(+(localStorage.getItem("gtr_sel")||2),0,mn.length-1)||0}catch{Ti=2}function Y_(){let i=ot("strip");mn.forEach((t,e)=>{let n=document.createElement("img");n.src=eh[t.id],n.alt=t.name,n.onclick=()=>{Ot.init(),zo(e)},i.appendChild(n)}),ot("prev").onclick=()=>{Ot.init(),zo((Ti+mn.length-1)%mn.length)},ot("next").onclick=()=>{Ot.init(),zo((Ti+1)%mn.length)},ot("play").onclick=()=>{Ot.init(),ed()},ot("blb").onclick=()=>{Ot.init(),mv()},ot("lbmx").onclick=()=>ot("lbm").classList.add("hidden"),ot("lbm").onclick=t=>{t.target===ot("lbm")&&ot("lbm").classList.add("hidden")},ot("hint").textContent=Yn?"\u041B\u0435\u0432\u044B\u0439 \u043F\u0430\u043B\u0435\u0446 \u2014 \u0440\u0443\u043B\u044C \u0438 \u0433\u0430\u0437 \xB7 \u043F\u0440\u0430\u0432\u044B\u0439 \u2014 \u043A\u0430\u043C\u0435\u0440\u0430 \xB7 \u{1F6AA} \u0432\u044B\u0439\u0442\u0438 \u0438\u0437 \u043C\u0430\u0448\u0438\u043D\u044B \xB7 \u0437\u0432\u0443\u043A \u0432\u043A\u043B\u044E\u0447\u0438\u0442\u0441\u044F \u043F\u043E\u0441\u043B\u0435 \u043A\u0430\u0441\u0430\u043D\u0438\u044F":"WASD \u2014 \u0435\u0445\u0430\u0442\u044C \xB7 \u041F\u0440\u043E\u0431\u0435\u043B \u2014 \u0440\u0443\u0447\u043D\u0438\u043A \xB7 E \u2014 \u0432\u044B\u0439\u0442\u0438 / \u0441\u0435\u0441\u0442\u044C \xB7 R \u2014 \u0440\u0430\u0434\u0438\u043E \xB7 H \u2014 \u043A\u043B\u0430\u043A\u0441\u043E\u043D \xB7 \u043C\u044B\u0448\u044C \u0441 \u0437\u0430\u0436\u0430\u0442\u043E\u0439 \u043A\u043D\u043E\u043F\u043A\u043E\u0439 \u2014 \u043A\u0430\u043C\u0435\u0440\u0430 \xB7 T \u2014 \u0447\u0430\u0442",Yn&&(ot("hint").textContent="\u041B\u0435\u0432\u044B\u0439 \u043F\u0430\u043B\u0435\u0446 \u2014 \u0440\u0443\u043B\u044C \u0438 \u0433\u0430\u0437 \xB7 \u043F\u0440\u0430\u0432\u044B\u0439 \u2014 \u043A\u0430\u043C\u0435\u0440\u0430 \xB7 \u{1F6AA} \u0432\u044B\u0439\u0442\u0438 \u0438\u0437 \u043C\u0430\u0448\u0438\u043D\u044B \xB7 \u043A\u0440\u0430\u0441\u0438\u0432\u0435\u0435 \u0432\u0441\u0435\u0433\u043E \u2014 \u043F\u043E\u0432\u0435\u0440\u043D\u0443\u0432 \u0442\u0435\u043B\u0435\u0444\u043E\u043D \u0433\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u043E"),zo(Ti)}function zo(i){Ti=i;let t=mn[i];ot("cname").textContent=t.name,ot("ctag").textContent=t.tag,ot("cdesc").textContent=t.desc,ot("play").textContent="\u0418\u0433\u0440\u0430\u0442\u044C \u0437\u0430: "+t.name,[...ot("strip").children].forEach((n,s)=>n.classList.toggle("on",s===i));for(let n of mn)ds[n.id].visible=n.id===t.id;let e=ds[t.id];e.position.set(149.6,0,-29),e.rotation.set(0,-Math.PI/2,0),e.userData.pop=1,Ot.play("tick"),Ot.setTheme(t.id)}function Z_(i){let t=ds[mn[Ti].id],e=M.time;t.userData.pop=Math.max(0,(t.userData.pop||0)-i*3),t.rotation.y=-Math.PI/2+Math.sin(e*.6)*.35+t.userData.pop*2.5,Ro(t,e,0,e%5<1.4);let n=De.aspect<1,s=!n&&innerHeight<520,r=s?1.9:0;De.position.set(143.2+Math.sin(e*.21)*.5-(n?2.5:0),1.5+Math.sin(e*.3)*.12,-26.4+Math.cos(e*.17)*.5),De.lookAt(150.2+.477*r,n?.1:s?1.25:.2,-30.2+.879*r),De.fov=n?48:s?30:44,De.updateProjectionMatrix();for(let a of M.cars)a.ai&&Co(a,i,1e5,1e5);Ie.setShadowCenter(150,-30),An.begin(),ih(),Kf(t),An.end()}var gs=[],ta=new ao(new Un(.8,1.1,.07),new an,36);ta.frustumCulled=!1;on.add(ta);(function(){let t=So(144),e=(s,r,a,o=0)=>{let l=0;for(;Ie.col.near(s,r,1.8)&&l++<40;)s+=2.5;gs.push({x:s,z:r,y:o,type:a,got:!1})};for(let s=0;s<12;s++){let r=Ze[(s*3+1)%8],a=-165+t()*330;e(r+(t()<.5?-3.3:3.3),Je.some(o=>Math.abs(o-a)<9)?a+16:a,0)}for(let s=0;s<6;s++){let r=Je[(s*2+1)%7],a=s%2?1:-1;e(a*(90+t()*170),r+(t()<.5?-3.3:3.3),0)}e(0,-60,0),e(-20,120,0);for(let[s,r]of[[175,30],[-245,30],[245,-90],[-105,-150]])e(s,r,0);for(let s of[-165,-112,-15,42,78,168])e(-28+t()*56,s,1,-3);for(let[s,r]of[[103,-12],[-105,106],[57,-128],[-57,62],[-262,-137],[120,-134]])e(s,r,2);let n=[new It(3,2.1,.5),new It(1.6,2.4,3),new It(3,.7,2.2)];gs.forEach((s,r)=>ta.setColorAt(r,n[s.type]))})();var Ff=new ue,Of=new Dn,zf=new U,Bf=new U,J_=new U(0,1,0),gr=[[1.5,1,.25],[.7,1.1,1.5],[1.5,.3,1.1]];function $f(i){let t=M.time,e=M.mode==="car"?3.4:2.1;for(let n=0;n<gs.length;n++){let s=gs[n],r=s.y+1.5+Math.sin(t*2+n)*.25;Of.setFromAxisAngle(J_,t*2.2+n),zf.set(s.x,r,s.z),Bf.setScalar(s.got?1e-4:1),Ff.compose(zf,Of,Bf),ta.setMatrixAt(n,Ff),!s.got&&(An.add(s.x,r,s.z,3,gr[s.type][0],gr[s.type][1],gr[s.type][2]),i&&Math.abs(j.x-s.x)<e&&Math.abs(j.z-s.z)<e&&Math.abs(j.y-s.y)<2.6&&$_(s))}ta.instanceMatrix.needsUpdate=!0}function $_(i){i.got=!0,Ot.play("pick"),Wi.burst(i.x,i.y+1.5,i.z,14,6,.7,gr[i.type][0],gr[i.type][1],gr[i.type][2]);let t=M.stats;if(i.type===0){if(t.cards+=6,Ei(30),t.cards===6&&M.pid!=="igor"&&Ue([["igor","\u041C\u043D\u0435 144 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438 \u0432 \u0440\u0434\u0440 \u043D\u0430\u0434\u043E \u043D\u0430\u0439\u0442\u0438"],["geisler","\u0414\u043E \u0432\u044B\u0445\u043E\u0434\u0430 \u0433\u0442\u0430 6 ?"],["igor","\u0410\u0433\u0430"]]),t.cards===72&&Ue([["igor","\u041D\u0435\u0434\u0435\u043B\u044E \u0435\u0431\u0443\u0447\u0438\u0445 \u043F\u0442\u0438\u0446 \u0441\u043E\u0431\u0438\u0440\u0430\u043B\u{1F613} \u041D\u0430\u0441\u0442\u0430\u043B\u043E \u0432\u0440\u0435\u043C\u044F \u0430\u0445\u0443\u0435\u043D\u043D\u044B\u0445 \u043A\u0430\u0440\u0442\u043E\u0447\u0435\u043A)"]]),t.cards%144===0){xn("cards"),M.acc++,Ei(500),ni("144 \u0438\u0437 144","+500 \xB7 \u0438 \u0432\u0441\u0451 \u0437\u0430\u043D\u043E\u0432\u043E"),Ue([["igor","\u0423 \u043C\u0435\u043D\u044F \u043D\u043E\u0432\u044B\u0439 \u0430\u043A\u043A\u0430\u0443\u043D\u0442 \u0438 \u043C\u043D\u0435 \u043D\u0430\u0434\u043E \u0437\u0430\u043A\u0440\u044B\u0442\u044C \u0440\u0434\u0440 \u043D\u0430 100% \u043D\u0430 \u043D\u0435\u043C))"],["artem","\u041F\u043E\u043A\u0430 \u0435\u0435 \u0418\u0433\u043E\u0440\u044C \u043F\u0440\u043E\u0439\u0434\u0451\u0442 \u043D\u0430 100% \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0440\u0430\u0437)"]]);for(let e of gs)e.type===0&&(e.got=!1)}}else i.type===1?(t.feathers++,Ei(120),t.feathers===6&&Ue([["igor","\u0421\u0430\u043C\u043E\u0435 \u043F\u0438\u0437\u0434\u0435\u0446 \u0447\u0442\u043E \u044F \u0441\u043E\u0431\u0440\u0430\u043B \u0432\u0441\u0435 \u043F\u0435\u0440\u044C\u044F \u0446\u0430\u043F\u0435\u043B\u044C"],["geisler","\u0410 \u0437\u0430\u0447\u0435\u043C \u0432\u0442\u043E\u0440\u043E\u0439 \u0440\u0430\u0437?)\u{1F605}"]])):(t.orchids++,Ei(120),t.orchids===6&&Ue([["geisler","\u0422\u044B \u0438\u0445 \u0443\u0436\u0435 \u043D\u0430\u0445\u043E\u0434\u0438\u043B, \u043D\u043E \u043F\u0440\u043E\u0441\u0442\u043E \u043D\u0435 \u043F\u043E\u043C\u043D\u0438\u0448\u044C \u043A\u0443\u0434\u0430 \u0441\u043B\u043E\u0436\u0438\u043B)"]]));ot("coll").textContent=`\u{1F0CF} ${t.cards%144||(t.cards?144:0)}/144${M.acc>1?" (\u0430\u043A\u043A \u2116"+M.acc+")":""} \xB7 \u{1FAB6} ${t.feathers}/6 \xB7 \u{1F338} ${t.orchids}/6`}var kf=[9054762,2771594,6975352,2042422,13620186,3107402,8018474,3815994,9080618,5909098];for(let i=0;i<11;i++){let t=i%5===4,e=new fr(on,0,0,0,t?14725152:kf[i%kf.length],t?"van":"sedan"),n=(i*17+3)%pn.length,s=pn[n].nb;Af(e,n,s[i%s.length]),M.cars.push(e)}function ih(){let i=De.position.x,t=De.position.z;for(let e of M.cars){let n=e.e;if(Math.abs(n.x-i)>190||Math.abs(n.z-t)>190)continue;let s=Math.sin(e.h),r=Math.cos(e.h),a=-r,o=s,l=e.ai||e===M.car?1:.25;for(let c of[-.62,.62])An.add(n.x+s*2.25+a*c,n.y+.74,n.z+r*2.25+o*c,2.1,1.7*l,1.6*l,1.25*l),An.add(n.x-s*2.25+a*c,n.y+.76,n.z-r*2.25+o*c,1.3,1.5*l,.1*l,.06*l);if(e.kind==="mod"){let c=(M.time*7|0)%2;An.add(n.x,n.y+2,n.z,7,c?.3:2.6,.2,c?3:.3)}}}function Kf(i){let t=i.userData.glow;t&&An.add(i.position.x,i.position.y+t.y,i.position.z,t.s,t.c[0],t.c[1],t.c[2])}var Nn={},xr=null,Ho=0,Vo=0,Zc=0,Jc=0,xs=null,$c=0,Kc=0,sh=!1;addEventListener("keydown",i=>{if(Nn[i.code]=!0,["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Tab"].includes(i.code)&&i.preventDefault(),!i.repeat){if(Ot.init(),!ot("lbm").classList.contains("hidden")){(i.code==="Escape"||i.code==="Enter")&&ot("lbm").classList.add("hidden");return}if(M.state==="menu"){i.code==="ArrowLeft"||i.code==="KeyA"?ot("prev").onclick():i.code==="ArrowRight"||i.code==="KeyD"?ot("next").onclick():(i.code==="Enter"||i.code==="Space")&&ed();return}M.state==="play"&&(i.code==="KeyE"||i.code==="KeyF"||i.code==="Enter"?lh():i.code==="KeyT"||i.code==="Tab"?oh():i.code==="KeyM"?td():i.code==="KeyR"?rh():i.code==="KeyH"&&ah())}});addEventListener("keyup",i=>{Nn[i.code]=!1});addEventListener("blur",()=>{for(let i in Nn)Nn[i]=!1});addEventListener("contextmenu",i=>i.preventDefault());addEventListener("gesturestart",i=>i.preventDefault());document.addEventListener("touchmove",i=>{i.target.closest&&i.target.closest("#plog,#final,#lbm")||i.preventDefault()},{passive:!1});document.addEventListener("visibilitychange",()=>{let i=Ot.ctx;i&&(document.hidden?i.suspend():i.resume(),th=performance.now())});Xi.addEventListener("webglcontextlost",i=>{i.preventDefault(),setTimeout(()=>location.reload(),400)});var Xc=ot("stick"),Qf=ot("knob");Xi.addEventListener("pointerdown",i=>{if(Ot.init(),M.state==="play"){i.pointerType!=="mouse"&&i.clientX<innerWidth*.5&&xr===null?(xr=i.pointerId,Zc=i.clientX,Jc=i.clientY,Xc.style.left=Zc-64+"px",Xc.style.top=Jc-64+"px",Xc.style.bottom="auto"):xs===null&&(xs=i.pointerId,$c=i.clientX,Kc=i.clientY);try{Xi.setPointerCapture(i.pointerId)}catch{}}});Xi.addEventListener("pointermove",i=>{if(i.pointerId===xr){let t=(i.clientX-Zc)/52,e=(i.clientY-Jc)/52,n=Math.hypot(t,e);n>1&&(t/=n,e/=n),Ho=t,Vo=e,Qf.style.transform=`translate(${t*40}px,${e*40}px)`}else if(i.pointerId===xs){let t=(i.clientX-$c)*.006;M.mode==="car"?Xt.off=Le(Xt.off+t,-2.8,2.8):Xt.yaw+=t,Xt.pitch=Le(Xt.pitch+(i.clientY-Kc)*.004,.04,.95),$c=i.clientX,Kc=i.clientY,Xt.manual=0}});var jf=i=>{i.pointerId===xr&&(xr=null,Ho=Vo=0,Qf.style.transform=""),i.pointerId===xs&&(xs=null)};Xi.addEventListener("pointerup",jf);Xi.addEventListener("pointercancel",jf);var vr=(i,t)=>i.addEventListener("pointerdown",e=>{e.preventDefault(),e.stopPropagation(),Ot.init(),t()});vr(ot("bAct"),()=>lh());ot("bHand").addEventListener("pointerdown",i=>{i.preventDefault(),sh=!0,ot("bHand").classList.add("on")});for(let i of["pointerup","pointercancel","pointerleave"])ot("bHand").addEventListener(i,()=>{sh=!1,ot("bHand").classList.remove("on")});vr(ot("bRadio"),()=>rh());vr(ot("bHorn"),()=>ah());vr(ot("bPhone"),()=>oh());vr(ot("bMute"),()=>td());vr(ot("pclose"),()=>oh());var K_={arkasha:"\u0441\u0432\u0438\u043D\u0433 \u0432 \u0431\u0430\u0431\u043E\u0447\u043A\u0435. \u0414\u043E \u0440\u0435\u043B\u0438\u0437\u0430 \u043E\u0441\u0442\u0430\u043B\u043E\u0441\u044C\u2026",max:"\u0444\u043E\u043D\u043A \u0438 \u0433\u043E\u043B\u043E\u0441\u043E\u0432\u044B\u0435. \u041D\u0438\u043A\u0442\u043E \u043D\u0435 \u0441\u043B\u0443\u0448\u0430\u0435\u0442",dima:"\u0441\u0438\u043D\u0442\u0432\u0435\u0439\u0432 \u0432 11.1.4. \u0421\u0433\u0435\u043D\u0435\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u043E",igor:"\u0432\u0435\u0441\u0442\u0435\u0440\u043D. \u0427\u0435\u0442\u0432\u0451\u0440\u0442\u043E\u0435 \u043F\u0440\u043E\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u0435",geisler:"\u043A\u043B\u0430\u0432\u0435\u0441\u0438\u043D \u0447\u0435\u0440\u0435\u0437 \u041C\u0435\u0433\u0430\u0444\u043E\u043D. \u0411\u0443\u0444\u0435\u0440\u0438\u0437\u0430\u0446\u0438\u044F\u2026",pasha:"\u0432\u0435\u043D\u0441\u043A\u0438\u0439 \u0432\u0430\u043B\u044C\u0441. \u041A\u0440\u043E\u043C\u0435 \u043D\u0435\u0433\u043E \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u0437\u0430\u0435\u0431\u0438\u0441\u044C",nikita:"\u0447\u0438\u043F\u0442\u044E\u043D \u0438\u0437 \u0435\u0433\u043E \u0442\u0440\u0435\u0442\u044C\u0435\u0439 \u0438\u0433\u0440\u044B",kos:"\u044D\u043C\u0431\u0438\u0435\u043D\u0442 \u0417\u043E\u043D\u044B. \u0422\u0440\u0435\u0441\u043A \u2014 \u044D\u0442\u043E \u043D\u043E\u0440\u043C\u0430\u043B\u044C\u043D\u043E",artem:"\u043F\u0438\u0440\u0430\u0442\u0441\u043A\u0430\u044F \u0434\u0436\u0438\u0433\u0430. \u0411\u043E\u0436\u0435, \u0445\u0440\u0430\u043D\u0438 \u043F\u0438\u0440\u0430\u0442\u043E\u0432",sanya:"\u043B\u043E\u0443-\u0444\u0430\u0439. \u041D\u0430\u0447\u0430\u043B\u043E \u0442\u044F\u0433\u043E\u043C\u043E\u0442\u043D\u043E\u0435, \u043F\u043E\u0442\u0435\u0440\u043F\u0438",misha:"\u0443\u043A\u0443\u043B\u0435\u043B\u0435 \u0443 \u043A\u043E\u0441\u0442\u0440\u0430. \u0412\u0440\u0435\u043C\u0435\u043D\u0438 \u0441\u043B\u0443\u0448\u0430\u0442\u044C \u043D\u0435\u0442"},Q_={arkasha:"\u0412\u0441\u0435 \u0442\u0430\u043A, \u0442\u043E\u043B\u044C\u043A\u043E \u043D\u0430\u043E\u0431\u043E\u0440\u043E\u0442",max:"\u041E\u0447\u0435\u043D\u044C \u043F\u043B\u043E\u0445\u043E\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435",dima:"\u0413\u043E\u0443 \u0432\u0441\u0435 \u043D\u0430 \u0432\u043E\u0439\u043D\u0443",igor:"\u041C\u043D\u0435 144 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438 \u043D\u0430\u0434\u043E \u043D\u0430\u0439\u0442\u0438",geisler:"\u0411\u0430\u0442\u044F \u0432 \u0437\u0434\u0430\u043D\u0438\u0438!)",pasha:"\u0421\u043A\u043E\u0440\u0435\u0435 \u0431\u044B \u0413\u0422\u0410",nikita:"\u0427\u0442\u043E \u044D\u0442\u043E?",kos:"\u041D\u0430 \u0421\u0435\u0440\u0433\u0435\u044F \u0441\u0442\u043E\u043B\u0438\u043A",artem:"\u0411\u043E\u0436\u0435, \u0445\u0440\u0430\u043D\u0438 \u043F\u0438\u0440\u0430\u0442\u043E\u0432, \u0430\u043C\u0438\u043D\u044C",sanya:"\u041E\u043D\u0430 \u0432\u043D\u0430\u0447\u0430\u043B\u0435 \u0434\u0438\u043A\u043E \u043C\u0435\u0434\u043B\u0435\u043D\u043D\u0430\u044F",misha:"\u0412\u0440\u0435\u043C\u0435\u043D\u0438 \u0442\u0443\u043F\u043E \u043D\u0435\u0442 ("};function Qc(i,t=3e3){let e=ot("speak");e.innerHTML=i,e.style.opacity=1,clearTimeout(Qc.t),Qc.t=setTimeout(()=>{e.style.opacity=0},t),jc=M.time+t/1e3}function rh(){if(M.state!=="play")return;let i=[null].concat(mn.map(t=>t.id));M.radio=i[(i.indexOf(M.radio)+1)%i.length],Ot.play("radio"),Ot.setTheme(M.radio||(M.mission?M.mission.def.giver:M.pid)),ms(M.radio?"\u{1F4FB} \u0420\u0430\u0434\u0438\u043E "+bi[M.radio].name+": "+K_[M.radio]:"\u{1F4FB} \u0410\u0432\u0442\u043E: \u0442\u0432\u043E\u044F \u0442\u0435\u043C\u0430, \u043D\u0430 \u043F\u043E\u0440\u0443\u0447\u0435\u043D\u0438\u0438 \u2014 \u0442\u0435\u043C\u0430 \u0437\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u0430",3.4),M.radio&&(M.heard[M.radio]=1,Object.keys(M.heard).length>=mn.length&&xn("radio"))}var Hf=0;function ah(){if(!(M.state!=="play"||M.time<Hf)){Hf=M.time+.7,Ot.horn(M.pid),Qc("<b>"+gn(Qr)+":</b> "+gn(Q_[M.pid]||"\u0411\u0438-\u0431\u0438\u043F"),1800);for(let i of M.cars)i.ai&&i.ai.type==="traffic"&&Math.hypot(i.e.x-j.x,i.e.z-j.z)<16&&(i.stun=1.3);for(let i of M.npcs)Math.hypot(i.x-j.x,i.z-j.z)<14&&(i.talk=1.6);M.horns=(M.horns||0)+1,M.horns>=10&&xn("horn")}}document.addEventListener("pointerdown",i=>{let t=i.target.closest&&i.target.closest(".voice");t&&(Ot.init(),Ot.mumble(+t.dataset.sec||10),t.classList.add("heard"),M.state==="play"&&(M.flags.voice||(M.flags.voice=1,Ue([["sys","\u0422\u044B \u043F\u043E\u0441\u043B\u0443\u0448\u0430\u043B \u0433\u043E\u043B\u043E\u0441\u043E\u0432\u043E\u0435 \u041C\u0430\u043A\u0441\u0430. \u041F\u0435\u0440\u0432\u044B\u0439 \u0437\u0430 \u0432\u0441\u044E \u0438\u0441\u0442\u043E\u0440\u0438\u044E \u0447\u0430\u0442\u0430"]])),xn("voice")))});var Go={what:["\u0427\u0442\u043E \u044D\u0442\u043E?","\u043D\u0430\u0447\u0430\u043B \u043F\u0430\u0440\u0442\u0438\u044E"],ice:["\u0420\u0443\u043A\u0438 \u0432 \u0440\u044B\u0431\u0435","\u0432\u044B\u0435\u0445\u0430\u043B \u043D\u0430 \u043B\u0451\u0434 \u041E\u0431\u0438"],speed:["11.1.4","\u0440\u0430\u0437\u043E\u0433\u043D\u0430\u043B\u0441\u044F \u0434\u043E 111,4 \u043A\u043C/\u0447"],rev:["\u0412\u0441\u0451 \u0442\u0430\u043A, \u0442\u043E\u043B\u044C\u043A\u043E \u043D\u0430\u043E\u0431\u043E\u0440\u043E\u0442","\u0447\u0435\u0442\u044B\u0440\u0435 \u0441\u0435\u043A\u0443\u043D\u0434\u044B \u0435\u0445\u0430\u043B \u0437\u0430\u0434\u043E\u043C"],steal:["\u0411\u043E\u0436\u0435, \u0445\u0440\u0430\u043D\u0438 \u043F\u0438\u0440\u0430\u0442\u043E\u0432","\u0443\u0433\u043D\u0430\u043B \u043C\u0430\u0448\u0438\u043D\u0443"],voice:["\u041D\u0438\u043A\u0442\u043E \u043D\u0435 \u0441\u043B\u0443\u0448\u0430\u0435\u0442","\u043F\u043E\u0441\u043B\u0443\u0448\u0430\u043B \u0433\u043E\u043B\u043E\u0441\u043E\u0432\u043E\u0435 \u041C\u0430\u043A\u0441\u0430"],crash:["\u0421\u0430\u043C\u044B\u0439 \u043A\u0430\u0439\u0444 \u0432 \u0440\u0430\u0437\u0440\u0443\u0448\u0435\u043D\u0438\u044F\u0445","\u0432\u044A\u0435\u0445\u0430\u043B \u043A\u0430\u043A \u0441\u043B\u0435\u0434\u0443\u0435\u0442"],zap:["\u0412 \u0430\u043D\u043E\u043C\u0430\u043B\u0438\u0438 \u043D\u0435 \u043B\u0435\u0437\u044C","\u0437\u0430\u043B\u0435\u0437 \u0432 \u0430\u043D\u043E\u043C\u0430\u043B\u0438\u044E"],esc:["\u041B\u0430\u0432\u043E\u0447\u043A\u0443 \u043D\u0435 \u043F\u0440\u0438\u043A\u0440\u044B\u043B\u0438","\u0443\u0448\u0451\u043B \u043E\u0442 \u043C\u043E\u0434\u0435\u0440\u0430\u0442\u043E\u0440\u043E\u0432"],ban:["\u041F2 \u0438\u043B\u0438 \u041F3?","\u043F\u043E\u043B\u0443\u0447\u0438\u043B \u0431\u0430\u043D"],cards:["144 \u0438\u0437 144","\u0441\u043E\u0431\u0440\u0430\u043B \u0432\u0441\u0435 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438 \u0418\u0433\u043E\u0440\u044F"],radio:["\u041C\u0435\u043B\u043E\u043C\u0430\u043D","\u043F\u043E\u0441\u043B\u0443\u0448\u0430\u043B \u0432\u0441\u0435 \u043E\u0434\u0438\u043D\u043D\u0430\u0434\u0446\u0430\u0442\u044C \u0441\u0442\u0430\u043D\u0446\u0438\u0439"],horn:["\u041E\u0447\u0435\u043D\u044C \u043F\u043B\u043E\u0445\u043E\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435","\u043F\u043E\u0441\u0438\u0433\u043D\u0430\u043B\u0438\u043B \u0434\u0435\u0441\u044F\u0442\u044C \u0440\u0430\u0437"],slow:["\u041F\u043E\u0442\u0435\u0440\u043F\u0438 \u0447\u0443\u0442\u044C-\u0447\u0443\u0442\u044C","\u043F\u0435\u0440\u0435\u0442\u0435\u0440\u043F\u0435\u043B \u0442\u044F\u0433\u043E\u043C\u043E\u0442\u043D\u043E\u0435 \u043D\u0430\u0447\u0430\u043B\u043E"],bati:["\u0411\u0430\u0442\u044F \u0432 \u0437\u0434\u0430\u043D\u0438\u0438","\u0443\u0441\u043F\u0435\u043B \u043A \u041C\u0438\u0448\u0435 \u0432\u043E\u0432\u0440\u0435\u043C\u044F"],dance:["\u0417\u0430\u043A\u0430\u043F\u044B\u0432\u0430\u0435\u043C\u0441\u044F","\u0441\u0442\u0430\u043D\u0446\u0435\u0432\u0430\u043B \u043F\u0435\u0448\u043A\u043E\u043C"],beam:["BeamNG","\u0441\u043D\u0451\u0441 \u0434\u0435\u0441\u044F\u0442\u044C \u043F\u0440\u0435\u0434\u043C\u0435\u0442\u043E\u0432"]};function xn(i){if(M.state!=="play"||!M.tro||M.tro[i]||!Go[i])return;M.tro[i]=1;let t=Go[i],e=ot("tro");e.innerHTML='<span class="ic">\u{1F980}</span><span><b>\u0422\u0440\u043E\u0444\u0435\u0439: '+gn(t[0])+"</b><i>"+gn(t[1])+"</i></span>",e.classList.remove("show"),e.offsetWidth,e.classList.add("show"),Ot.sting("trophy");try{let n=JSON.parse(localStorage.getItem("gtr_tro")||"{}")||{};n[i]=1,localStorage.setItem("gtr_tro",JSON.stringify(n))}catch{}}function oh(){ot("phone").classList.toggle("hidden"),Yc.scrollTop=1e9}function td(){Ot.setMuted(!Ot.muted),ot("bMute").textContent=Ot.muted?"\u{1F507}":"\u{1F50A}"}function j_(){let i=0,t=0;return(Nn.KeyW||Nn.ArrowUp)&&(i+=1),(Nn.KeyS||Nn.ArrowDown)&&(i-=1),(Nn.KeyD||Nn.ArrowRight)&&(t+=1),(Nn.KeyA||Nn.ArrowLeft)&&(t-=1),xr!==null&&(t=Math.abs(Ho)>.12?Ho:0,i=Math.abs(Vo)>.15?-Vo:0),M.modal||M.busy>0?{thr:0,st:0,hand:!0}:{thr:i,st:t,hand:!!Nn.Space||sh}}function ed(){if(M.state!=="menu")return;let i=mn[Ti];M.pid=i.id,Qr=i.name;try{localStorage.setItem("gtr_sel",Ti)}catch{}ot("fade").style.opacity=1,setTimeout(()=>{ot("menu").classList.add("hidden"),ot("hud").classList.remove("hidden"),ei=ds[i.id],ei.visible=!1,ei.rotation.set(0,0,0);for(let n of mn)if(n.id!==i.id){let s=ds[n.id],[r,a]=dn[n.id];s.visible=!0,s.position.set(r,.15,a),s.rotation.set(0,Math.atan2(140-r,0-a),0),s.add(Sf(n.name,Yf[n.id]||n.css)),Ie.col.circle(r,a,.55),M.npcs.push({id:n.id,x:r,z:a,rak:s,cool:3+Math.random()*6,talk:0})}let t=new fr(on,dn.start[0],dn.start[1],Math.PI,new It(i.css).multiplyScalar(.8).getHex(),"sedan");M.cars.push(t),M.car=t,M.mode="car",t.g.add(qf),j.x=t.e.x,j.z=t.e.z,Xt.yaw=Math.PI,Xt.init=!1;let e=Bc.filter(n=>n!==M.pid);if(Sn.has("m"))e=Sn.get("m").split(",").filter(n=>Zr[n]&&n!==M.pid);else{let n={};try{n=JSON.parse(localStorage.getItem("gtr_seen")||"{}")||{}}catch{n={}}let s=e.map(r=>[r,(n[r]||0)+Math.random()]).sort((r,a)=>r[1]-a[1]).slice(0,Pf).map(r=>r[0]);e=e.filter(r=>s.includes(r));for(let r of e)n[r]=(n[r]||0)+1;try{localStorage.setItem("gtr_seen",JSON.stringify(n))}catch{}}M.queue=e,M.run=e.slice(),M.done={},M.stats.total=e.length,M.radio=null,M.heard={},M.horns=0,M.tro={},Ot.setTheme(M.pid),M.state="play",M.t=0,Kr=4,$r=0,ps(),ot("fade").style.opacity=0,ni("23:54","\u0414\u043E \u0440\u0435\u043B\u0438\u0437\u0430 \u0448\u0435\u0441\u0442\u044C \u043C\u0438\u043D\u0443\u0442"),ms(Yn?"\u041B\u0435\u0432\u044B\u0439 \u043F\u0430\u043B\u0435\u0446 \u2014 \u0440\u0443\u043B\u044C \u0438 \u0433\u0430\u0437 \xB7 \u043F\u0440\u0430\u0432\u044B\u0439 \u2014 \u043A\u0430\u043C\u0435\u0440\u0430":"WASD \u2014 \u0435\u0445\u0430\u0442\u044C \xB7 \u041F\u0440\u043E\u0431\u0435\u043B \u2014 \u0440\u0443\u0447\u043D\u0438\u043A \xB7 E \u2014 \u0432\u044B\u0439\u0442\u0438 \u0438\u0437 \u043C\u0430\u0448\u0438\u043D\u044B",7),Sn.has("t")&&(M.left=+Sn.get("t"))},520)}var Ae=[0,0,0,0,0,0,!1];function tv(i){let t=j_();if(M.busy>0&&(M.busy-=i),M.mode==="car"){let e=M.car,n=e.drive(i,t.thr,t.st,t.hand,Ie.col),s=e.e;n>5&&M.t-M.lastBump>.3&&(Ot.play("bump"),M.lastBump=M.t,M.shake=Math.min(1,n/22),Wi.burst(s.x,s.y+.6,s.z,12,6,.5,1.6,1.2,.7));for(let m of M.cars){if(m===e)continue;let p=s.x-m.e.x,y=s.z-m.e.z,v=Math.hypot(p,y);if(v<3.1&&v>.01&&Math.abs(s.y-m.e.y)<1.5){let w=p/v,L=y/v;s.x+=w*(3.1-v),s.z+=L*(3.1-v);let T=s.vx*w+s.vz*L;T<0&&(s.vx-=T*w*1.4,s.vz-=T*L*1.4,T<-4&&M.t-M.lastBump>.4&&(Ot.play("bump"),M.lastBump=M.t,M.shake=.5,m.ai&&m.ai.type==="traffic"&&(m.stun=1.5,Ot.play("honk"))))}}e.sync(),j.x=s.x,j.z=s.z,j.y=s.y,j.layer=s.layer,j.h=e.h,n>15&&xn("crash"),s.layer===2&&xn("ice"),e.speed*3.6>=111.4&&xn("speed"),M.revT=e.vf<-3?(M.revT||0)+i:0,M.revT>4&&xn("rev"),n>15&&!M.flags.crash&&(M.flags.crash=1,Ue([["max","\u041E\u0447\u0435\u043D\u044C \u043F\u043B\u043E\u0445\u043E\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435. \u041E\u043D\u043E \u043C\u043D\u0435 \u043E\u0447\u0435\u043D\u044C \u043D\u0435 \u043D\u0440\u0430\u0432\u0438\u0442\u0441\u044F"]])),s.layer===2&&!M.flags.ice&&(M.flags.ice=1,Ue([["igor","\u041D\u0430 \u043B\u044C\u0434\u0443 \u043F\u0435\u0440\u044C\u044F \u0446\u0430\u043F\u0435\u043B\u044C \u043B\u0435\u0436\u0430\u0442. \u042F \u043F\u0440\u043E\u0432\u0435\u0440\u044F\u043B"],["geisler","\u0410 \u0437\u0430\u0447\u0435\u043C \u0432\u0442\u043E\u0440\u043E\u0439 \u0440\u0430\u0437?)\u{1F605}"]])),e.slip>8&&e.speed>13&&(M.driftT=(M.driftT||0)+i,M.driftT>.7&&!M.flags.drift&&(M.flags.drift=1,Ue([["max","\u041E\u0447 \u0437\u0430\u043B\u0438\u043F\u0430\u0442\u0435\u043B\u044C\u043D\u0430\u044F)) \u0422\u0430\u043C \u0441\u0430\u043C\u044B\u0439 \u043A\u0430\u0439\u0444 \u0432 \u0440\u0430\u0437\u0440\u0443\u0448\u0435\u043D\u0438\u044F\u0445"]])));let r=Math.sin(e.h),a=Math.cos(e.h),o=-a,l=r,c=e.speed,h=e.vy!==0,u=s.layer===2?s.y+.04:Ic(s.x,s.z)?.035:.19,f=s.x-r*1.35-o*.9,d=s.z-a*1.35-l*.9,g=s.x-r*1.35+o*.9,x=s.z-a*1.35+l*.9;if(Ae[6]&&!h){let m=Math.hypot(f-Ae[0],d-Ae[2]);m>4?Ae[6]=!1:m>.7&&(Df.seg(Ae[0],Ae[1],Ae[2],f,u,d,.16),Df.seg(Ae[3],Ae[4],Ae[5],g,u,x,.16),Ae[0]=f,Ae[1]=u,Ae[2]=d,Ae[3]=g,Ae[4]=u,Ae[5]=x)}if(!Ae[6]&&!h&&(Ae[0]=f,Ae[1]=u,Ae[2]=d,Ae[3]=g,Ae[4]=u,Ae[5]=x,Ae[6]=!0),!h&&c>5){let m=e.slip>4?3:Math.random()<c/26?1:0;for(let p=0;p<m;p++){let y=Math.random()<.5?-.9:.9;Wi.emit(s.x-r*1.5+o*y,s.y+.15,s.z-a*1.5+l*y,-r*2+(Math.random()-.5)*4+s.vx*.3,1.5+Math.random()*2.5,-a*2+(Math.random()-.5)*4+s.vz*.3,.6,.2,.24,.34)}}jn.intensity+=(26-jn.intensity)*bn(5,i),jn.position.set(s.x+r*1.6,s.y+1,s.z+a*1.6),jn.target.position.set(s.x+r*22,s.y-1.2,s.z+a*22),jn.target.updateMatrixWorld(),Gi.u.uCar.value.set(s.x+r*2,s.y+.8,s.z+a*2),Gi.u.uCarDir.value.set(r,-.02,a),Gi.u.uHead.value=1,ms("")}else{let e=Math.hypot(t.st,t.thr);if(e>.1){let r=Math.sin(Xt.yaw),a=Math.cos(Xt.yaw),o=r*t.thr-a*t.st,l=a*t.thr+r*t.st,c=Math.hypot(o,l);o/=c,l/=c;let h=7.4*Math.min(1,e);j.vx+=(o*h-j.vx)*bn(12,i),j.vz+=(l*h-j.vz)*bn(12,i),j.h+=yi(j.h,Math.atan2(o,l))*bn(12,i)}else j.vx-=j.vx*bn(10,i),j.vz-=j.vz*bn(10,i);j.x+=j.vx*i,j.z+=j.vz*i,Ie.col.resolve(j,.45,j.layer,0);for(let r of M.cars){let a=j.x-r.e.x,o=j.z-r.e.z,l=Math.hypot(a,o);l<2&&l>.01&&Math.abs(j.y-r.e.y)<1.5&&(j.x+=a/l*(2-l),j.z+=o/l*(2-l))}j.x=Le(j.x,-lr,lr),j.z=Le(j.z,-cr,cr);let n=Vi(j);j.vy>0||j.y>n+.3?(j.vy-=26*i,j.y+=j.vy*i,j.y<=n&&(j.y=n,j.vy=0)):j.y+=(n-j.y)*bn(14,i),j.walk=Le(Math.hypot(j.vx,j.vz)/7,0,1),ei.position.set(j.x,j.y+(j.layer===0&&!Ic(j.x,j.z)?.15:0),j.z),ei.rotation.set(j.vy!==0?M.time*10:0,j.h,0),Ro(ei,M.time,j.walk,!1),jn.intensity+=(0-jn.intensity)*bn(5,i),Gi.u.uHead.value=0;let s=nd(5);ms(s?Yn?"\u0416\u043C\u0438 \u{1F697}, \u0447\u0442\u043E\u0431\u044B \u0441\u0435\u0441\u0442\u044C"+(s.ai?" (\u0443\u0433\u043E\u043D!)":""):"E \u2014 \u0441\u0435\u0441\u0442\u044C \u0432 \u043C\u0430\u0448\u0438\u043D\u0443"+(s.ai?" (\u0443\u0433\u043E\u043D!)":""):""),ot("bAct").textContent=s?"\u{1F697}":"\u{1F980}"}for(let e of Ie.anomalies)if(Math.hypot(j.x-e.x,j.z-e.z)<e.r+(M.mode==="car"?1.2:.3)&&j.y<2&&M.t-(M.zapT||0)>1.2){M.zapT=M.t,xn("zap"),Ot.play("zap"),M.shake=1,wi.mFinal.uniforms.uFlash.value=.5,Wi.burst(e.x,2,e.z,40,10,.9,.6,2.2,1.2);let n=Math.atan2(j.x-e.x,j.z-e.z)+(Math.random()-.5);M.mode==="car"?(M.car.e.vx=Math.sin(n)*16,M.car.e.vz=Math.cos(n)*16,M.car.launch(13)):(j.vx=Math.sin(n)*13,j.vz=Math.cos(n)*13,j.vy=12,j.y+=.4),M.flags.zap||(M.flags.zap=1,Ue([["kos","\u042F \u0436\u0435 \u0441\u043A\u0430\u0437\u0430\u043B: \u0432 \u0430\u043D\u043E\u043C\u0430\u043B\u0438\u0438 \u043D\u0435 \u043B\u0435\u0437\u044C"],["dima","\u042D\u0442\u043E \u043D\u0435 \u0431\u0430\u0433. \u042D\u0442\u043E \u043D\u043E\u0432\u0430\u044F \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u044C)"]]))}}function nd(i){let t=null,e=i;for(let n of M.cars){if(n.kind==="mod")continue;let s=Math.hypot(n.e.x-j.x,n.e.z-j.z);s<e&&Math.abs(n.e.y-j.y)<2&&(e=s,t=n)}return t}function lh(){if(!(M.state!=="play"||M.modal))if(M.mode==="car"){let i=M.car;if(i.speed>9){ms("\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u043F\u0440\u0438\u0442\u043E\u0440\u043C\u043E\u0437\u0438",1.4);return}let t=Math.cos(i.h),e=-Math.sin(i.h);Ie.col.near(i.e.x+t*2,i.e.z+e*2,.5)&&(t=-t,e=-e),j.x=i.e.x+t*2,j.z=i.e.z+e*2,j.y=i.e.y,j.vx=j.vz=0,j.h=i.h,i.e.vx=i.e.vz=0,i.vf=0,M.mode="foot",ei.visible=!0,Xt.yaw+=Xt.off,Xt.off=0,Ot.play("door"),!M.flags.exit&&M.pid!=="nikita"&&(M.flags.exit=1,Ue([["nikita","\u0427\u0435 \u0442\u0430\u043C \u0434\u0435\u043B\u0430\u0442\u044C \u043D\u0430\u0434\u043E?"]]))}else{let i=nd(5);if(!i)return;i.ai&&(i.ai=null,i.stun=0,M.stats.stolen++,xn("steal"),Ei(60),ni("\u0423\u0413\u041E\u041D","+60 \xB7 \u0442\u0435\u043F\u0435\u0440\u044C \u0442\u044B \u043A\u0430\u043A \u0442\u0438\u043F\u044B"),M.stats.stolen===1&&Ue([["sys","\u0421\u0438\u0433\u043D\u0430\u043B\u043A\u0430 \u043E\u0440\u0451\u0442 \u0433\u043E\u043B\u043E\u0441\u043E\u043C \u041C\u0430\u043A\u0441\u0430. \u041D\u0438\u043A\u0442\u043E \u043D\u0435 \u0441\u043B\u0443\u0448\u0430\u0435\u0442"],["max",{voice:23}]]),ch(15)),i.maxSpeed=i.kind==="van"?31:38,M.car=i,i.g.add(qf),M.mode="car",ei.visible=!1,ms(""),ot("bAct").textContent="\u{1F6AA}",Ot.play("door"),Ae[6]=!1}}var jc=0;function ev(i){for(let t of M.npcs){let e=Math.hypot(j.x-t.x,j.z-t.z);if(t.cool-=i,t.talk-=i,e<90&&(Ro(t.rak,M.time,0,t.talk>0),Kf(t.rak),e<16&&(t.rak.rotation.y+=yi(t.rak.rotation.y,Math.atan2(j.x-t.x,j.z-t.z))*bn(5,i)),e<7.5&&t.cool<=0&&M.time>jc)){let n=bi[t.id].quotes;t.cool=14,t.talk=3.2,jc=M.time+3.4;let s=ot("speak");s.innerHTML=`<b>${bi[t.id].name}:</b> ${gn(n[Math.floor(Math.random()*n.length)])}`,s.style.opacity=1,setTimeout(()=>{s.style.opacity=0},3200)}}}function ch(i){M.wanted=Math.max(M.wanted,i),ot("wanted").classList.remove("hidden");let t=0;for(;M.mods.length<2&&t++<80;){let e=zc(j.x+(Math.random()-.5)*200,j.z+(Math.random()-.5)*200,0),n=pn[e],s=Math.hypot(n.x-j.x,n.z-j.z);if(s<55||s>190)continue;let r=new fr(on,n.x,n.z,Math.atan2(j.x-n.x,j.z-n.z),15265528,"mod");r.ai={type:"mod",stuck:0,rev:0},r.maxSpeed=28,M.mods.push(r),M.cars.push(r)}}function Vf(i){M.wanted=0,M.caught=0,ot("wanted").classList.add("hidden");for(let t of M.mods)on.remove(t.g),M.cars.splice(M.cars.indexOf(t),1);M.mods.length=0,i&&(xn("esc"),Ei(150),ni("\u041E\u0422\u041E\u0420\u0412\u0410\u041B\u0421\u042F","+150"),M.flags.esc||(M.flags.esc=1,Ue([["geisler","\u041C\u0435\u043D\u044F \u0443\u0434\u0438\u0432\u043B\u044F\u0435\u0442 \u043F\u043E\u0447\u0435\u043C\u0443 \u043F\u0441 \u0434\u043E \u0441\u0438\u0445 \u043F\u043E\u0440 \u044D\u0442\u0443 \u043B\u0430\u0432\u043E\u0447\u043A\u0443 \u043D\u0435 \u043F\u0440\u0438\u043A\u0440\u044B\u043B\u0438))"]])))}function nv(i){if(M.wanted<=0)return;M.wanted-=i,ot("wt").textContent=Math.ceil(M.wanted)+" \u0441";let t=!1;for(let e of M.mods){let n=e.e,s=j.x-n.x,r=j.z-n.z,a=Math.hypot(s,r),o=yi(e.h,Math.atan2(s,r)),l=Le(-o*2.2,-1,1),c=1;if(e.ai.rev>0?(e.ai.rev-=i,c=-1,l=-l):(e.speed<1.5?e.ai.stuck+=i:e.ai.stuck=0,e.ai.stuck>1.1&&(e.ai.rev=.9,e.ai.stuck=0)),Math.abs(o)>1.2&&e.speed>12&&(c=-.4),M.modal&&(c=0,l=0),e.drive(i,c,l,!1,Ie.col),e.sync(),e.barMat.color.setHex((M.time*7|0)%2?2245887:16720435),a<5.2&&Math.abs(j.y-n.y)<2&&(t=!0),a>240){let h=zc(j.x,j.z,70,150);h>=0&&(n.x=pn[h].x,n.z=pn[h].z,n.y=0,n.vx=n.vz=0)}}if(M.caught=t?M.caught+i:Math.max(0,M.caught-i*.5),M.caught>1&&!M.modal){M.stats.bans++,xn("ban"),Ot.play("bad"),M.shake=1;let e=Hc[Math.floor(Math.random()*Hc.length)];M.mode==="car"&&(M.car.e.vx=M.car.e.vz=0),nh({title:"\u{1F6A8} \u0411\u0410\u041D! \u0412\u043E\u043F\u0440\u043E\u0441 \u043E\u0442 \u043C\u043E\u0434\u0435\u0440\u0430\u0442\u043E\u0440\u0430",text:e[0],opts:[{label:e[1]},{label:e[2]}]},()=>{Ue([["arkasha","\u0412\u0441\u0435 \u0442\u0430\u043A, \u0442\u043E\u043B\u044C\u043A\u043E \u043D\u0430\u043E\u0431\u043E\u0440\u043E\u0442"],["sys","\u0411\u0430\u043D: \u22128 \u0441\u0435\u043A\u0443\u043D\u0434 \u0438 \u2212150 \u043E\u0447\u043A\u043E\u0432"]]),M.left=Math.max(3,M.left-8),Ei(-150),M.busy=.4,Vf(!1)}),M.caught=0}else M.wanted<=0&&!M.modal&&Vf(!0)}function id(i){let t=Zr[i];M.mission={id:i,def:t,steps:t.steps.slice(),si:-1,t0:M.t,bonus:0,pts:[]},Ue(t.intro),_r(),M.radio||Ot.setTheme(t.giver),Ot.sting("start"),M.t>4&&ni("\u{1F4F1} "+t.title,"\u043D\u043E\u0432\u043E\u0435 \u043F\u043E\u0440\u0443\u0447\u0435\u043D\u0438\u0435 \xB7 "+bi[t.giver].name)}function iv(i){return i.raki?["arkasha","max","igor","pasha","nikita","geisler"].filter(e=>e!==M.pid).slice(0,i.raki).map(e=>({x:dn[e][0],z:dn[e][1],who:e,done:!1})):i.pts.map(t=>({x:dn[t][0],z:dn[t][1],done:!1}))}function _r(){let i=M.mission;if(i.si++,i.si>=i.steps.length)return rv();let t=i.steps[i.si];if(t.enter&&Ue(t.enter),t.timer&&(i.deadline=M.t+t.timer),i.prog=0,t.choice){i.pts=[],nh(t.choice,e=>{M.mission===i&&(e.say&&Ue(e.say),e.bonus&&(i.bonus+=e.bonus),e.flag&&(M.flags[e.flag]=1),e.add&&i.steps.splice(i.si+1,0,...e.add),_r())});return}if(t.duel){i.pts=[],sv(i);return}i.pts=t.pts||t.raki?iv(t):[],ot("objtext").textContent=t.text,Ot.play("step")}function sv(i){let t={me:5,ai:6,kids:!0,round:1},e=()=>{let n=[{label:"\u0410\u0442\u0430\u043A\u043E\u0432\u0430\u0442\u044C \u043A\u043B\u0435\u0448\u043D\u0451\u0439",k:"a"},{label:"\u0417\u0430\u043A\u043E\u043F\u0430\u0442\u044C\u0441\u044F",k:"d"}];t.kids&&n.push({label:"\u041F\u043E\u0437\u0432\u0430\u0442\u044C \u0434\u0435\u0442\u0435\u0439 \u0438\u0437 Tekken",k:"k"}),nh({title:"\u0418\u0433\u0440\u0430 \u041D\u0438\u043A\u0438\u0442\u044B \xB7 \u0445\u043E\u0434 "+t.round,text:"\u041F\u043E\u0448\u0430\u0433\u043E\u0432\u0430\u044F \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u044F, 4 \u0440\u0430\u0441\u044B, AI \u043D\u0430 GPT-6-Luna. \u0422\u044B: "+"\u{1F980}".repeat(Math.max(0,t.me))+" \xB7 AI: "+"\u{1F916}".repeat(Math.max(0,t.ai))+". \u0417\u0430\u043A\u0430\u043F\u044B\u0432\u0430\u0442\u044C\u0441\u044F \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E, \u043D\u043E \u0432\u0440\u0435\u043C\u044F \u0438\u0434\u0451\u0442.",opts:n},s=>{if(M.mission!==i)return;let r=3;s.k==="a"?t.ai-=2:s.k==="d"?(t.ai-=1,r=0):(t.ai-=3,t.kids=!1,r=1),t.ai>0&&(t.me-=r),t.round++,t.ai<=0?(i.bonus+=Math.max(0,5-t.round)*50,jr("sys","AI \u043F\u043E\u0432\u0435\u0440\u0436\u0435\u043D. \u0425\u043E\u0434\u043E\u0432: "+(t.round-1)),_r()):t.me<=0?(i.lost=!0,jr("sys","AI \u0441\u0434\u0435\u043B\u0430\u043B \u0442\u0435\u0431\u044F, \u043A\u0430\u043A \u043C\u0430\u043B\u0435\u043D\u044C\u043A\u043E\u0433\u043E"),_r()):e()})};e()}function sd(){M.mission=null,M.nextM=M.t+4.5,M.target=null,mr.forEach(i=>i.hide()),M.radio||Ot.setTheme(M.pid),ot("objtext").textContent=M.queue.length?"\u0416\u0434\u0438 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0439 \u0432 \u0447\u0430\u0442\u0435":"\u041F\u043E\u0440\u0443\u0447\u0435\u043D\u0438\u044F \u043A\u043E\u043D\u0447\u0438\u043B\u0438\u0441\u044C. \u0421\u043E\u0431\u0438\u0440\u0430\u0439 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438 \u0418\u0433\u043E\u0440\u044F",ot("dist").textContent="",ot("dist").classList.remove("hot")}function rv(){let i=M.mission,t=i.lost?0:Math.max(0,Math.round((i.def.par-(M.t-i.t0))*8)),e=Math.round(i.def.reward*(i.lost?.4:1))+i.bonus+t;M.done[i.id]=i.lost?"\u2248":"\u2714",i.id==="sanya"&&xn("slow"),i.id==="misha"&&xn("bati"),Ei(e),M.stats.missions++,ni((i.lost?"\u2248 ":"\u2714 ")+i.def.title,"+"+e+(t?" \xB7 \u0437\u0430 \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C +"+t:"")),Ot.play("win"),Ue(i.lost&&i.def.outroLost?i.def.outroLost:i.def.outro),sd()}function av(){let i=M.mission,t=i.def.failReward||150;M.done[i.id]="\u2716",Ei(t),ni("\u2716 "+i.def.title,"\u043D\u0435 \u0443\u0441\u043F\u0435\u043B \xB7 +"+t),Ot.play("bad"),Ue(i.def.fail||[]),sd()}function ov(i){if(!M.mission){M.queue.length&&M.t>M.nextM&&!M.sayQ.length&&id(M.queue.shift());return}let t=M.mission,e=t.steps[t.si];if(!e)return;if(t.deadline&&M.t>t.deadline&&!M.modal)return av();if(e.choice||e.duel)return;if(e.slow){let o=M.mode==="car"?M.car.speed:99;o>1&&o<7?t.prog+=i:o>=7&&(t.prog=Math.max(0,t.prog-i*1.5)),mr.forEach(l=>l.hide()),M.target=null,t.prog>=e.slow&&(e.say&&Ue(e.say),e.big&&ni(e.big[0],e.big[1]),_r());return}let n=0,s=1e9,r=null,a=0;for(let o of t.pts){if(o.done)continue;let l=Math.hypot(j.x-o.x,j.z-o.z),c=!e.foot||M.mode==="foot";if(l<(e.r||9)&&c){if(o.done=!0,Ot.play("step"),Wi.burst(o.x,1.5,o.z,24,7,.8,2.2,1.6,.4),o.who){jr(o.who,Lf[o.who]||"\u042F \u043F\u0430\u0441");let h=M.npcs.find(u=>u.id===o.who);h&&(h.talk=3)}if(e.each){let h=t.pts.filter(u=>u.done).length;jr("sys",e.each+[34,61,97][h-1]+"%")}continue}if(e.foot&&M.mode==="car"&&l<60&&ms("\u0412 \u0417\u043E\u043D\u0443 \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u0435\u0448\u043A\u043E\u043C: \u0432\u044B\u0439\u0434\u0438 \u0438\u0437 \u043C\u0430\u0448\u0438\u043D\u044B",.3),n++,l<s&&(s=l,r=o),a<3){let h={x:o.x,z:o.z,y:0};mr[a++].set(o.x,Vi(h),o.z,t.deadline?16730718:e.foot?8257373:16762941)}}for(;a<3;a++)mr[a].hide();if(!n){e.say&&Ue(e.say),e.big&&ni(e.big[0],e.big[1]),e.wanted&&ch(e.wanted),_r();return}M.target=r,M.targetD=s}var Xo=document.createElement("canvas");Xo.width=1200;Xo.height=800;Ie.drawMap(Xo.getContext("2d"),2);var lv=ot("map").getContext("2d");function cv(){let i=lv,t=300/420;i.setTransform(1,0,0,1,0,0),i.fillStyle="#0a0e1a",i.fillRect(0,0,300,300),i.setTransform(t,0,0,t,150-(j.x+300)*2*t,150-(j.z+200)*2*t),i.drawImage(Xo,0,0);let e=(n,s,r,a)=>{i.fillStyle=a,i.beginPath(),i.arc((n+300)*2,(s+200)*2,r,0,7),i.fill()};for(let n of gs)n.got||e(n.x,n.z,5,n.type===0?"#ffd24a":n.type===1?"#9fe0ff":"#ff6ad5");for(let n of M.mods)e(n.e.x,n.e.z,9,(M.time*6|0)%2?"#4a7dff":"#ff4a5a");if(i.setTransform(1,0,0,1,0,0),M.mission)for(let n of M.mission.pts){if(n.done)continue;let s=(n.x-j.x)*2*t,r=(n.z-j.z)*2*t,a=Math.hypot(s,r);a>138&&(s*=138/a,r*=138/a),i.fillStyle="#ffc83d",i.strokeStyle="#000",i.lineWidth=3,i.beginPath(),i.arc(150+s,150+r,10+Math.sin(M.time*5)*2,0,7),i.fill(),i.stroke()}i.translate(150,150),i.rotate(-j.h),i.fillStyle="#fff",i.strokeStyle="#ff3d8a",i.lineWidth=4,i.beginPath(),i.moveTo(0,14),i.lineTo(9,-10),i.lineTo(0,-5),i.lineTo(-9,-10),i.closePath(),i.fill(),i.stroke(),i.setTransform(1,0,0,1,0,0)}var Gf=-1;function hv(i){let t=Math.max(0,Math.ceil(M.left));if(t!==Gf){Gf=t;let e=ot("timer");e.textContent=String(Math.floor(t/60)).padStart(2,"0")+":"+String(t%60).padStart(2,"0"),e.classList.toggle("hot",t<=30),t<=10&&t>0&&Ot.play("tick")}if(M.hudT-=i,!(M.hudT>0)){if(M.hudT=.1,cv(),M.mission){let e=M.mission,n=e.steps[e.si],s="";if(n&&n.slow)s="\xB7 "+Math.min(100,Math.round(100*e.prog/n.slow))+"% \xB7 "+Math.round(M.car.speed*3.6)+" \u043A\u043C/\u0447";else if(M.target&&e.pts.length){s="\xB7 "+Math.round(M.targetD)+" \u043C";let a=yi(Xt.yaw+(M.mode==="car"?Xt.off:0),Math.atan2(M.target.x-j.x,M.target.z-j.z));ot("arrow").style.transform="rotate("+-a+"rad)"}let r=e.deadline?Math.max(0,Math.ceil(e.deadline-M.t)):-1;r>=0&&(s+=" \xB7 \u23F1 "+r+" \u0441",r<=5&&r!==M.lastTl&&(M.lastTl=r,Ot.play("tick"))),ot("dist").textContent=s,ot("dist").classList.toggle("hot",r>=0&&r<=10)}M.placeT-=.1;for(let e of xf)if(Math.hypot(j.x-e.x,j.z-e.z)<e.r&&M.lastPlace!==e&&M.placeT<=0){M.lastPlace=e,M.placeT=6;let n=ot("place");n.textContent=e.name,n.style.opacity=1,setTimeout(()=>{n.style.opacity=0},3500)}}}function uv(i){let t,e,n,s;if(Xt.manual+=i,M.mode==="car"){let x=M.car,m=x.speed;t=x.e.x,e=x.e.y+1.25,n=x.e.z,s=8.4+m*.085,Xt.manual>1.6&&xs===null&&(Xt.off-=Xt.off*bn(2.2,i)),Xt.yaw+=yi(Xt.yaw,x.h)*bn(3.4+m*.06,i),De.fov=ko+Le(m*.26,0,9)}else t=j.x,e=j.y+1.55,n=j.z,s=6.4,De.fov=ko,Xt.manual>2.2&&j.walk>.3&&xs===null&&(Xt.yaw+=yi(Xt.yaw,j.h)*bn(1.1,i));let r=Xt.yaw+(M.mode==="car"?Xt.off:0),a=Math.cos(Xt.pitch),o=Math.sin(Xt.pitch),l=Math.sin(r),c=Math.cos(r),h=1;for(let x=1;x<=7;x++){let m=x/7;if(Ie.col.blocked(t-l*s*a*m,n-c*s*a*m)){h=Math.max(.16,(x-1)/7);break}}let u=t-l*s*a*h,f=n-c*s*a*h,d=e+.7+s*o*(.55+.45*h)+(1-h)*5;if(M.t<2.8){let x=1-Math.pow(1-M.t/2.8,3),m=1-x;Xt.pos.set(u-l*46*m,d+34*m,f-c*46*m),Xt.init=!0}else if(!Xt.init)Xt.pos.set(u,d,f),Xt.init=!0;else{let x=bn(10,i);Xt.pos.x+=(u-Xt.pos.x)*x,Xt.pos.y+=(d-Xt.pos.y)*x,Xt.pos.z+=(f-Xt.pos.z)*x}Xt.pos.y=Math.max(Xt.pos.y,Lc(Math.abs(Xt.pos.x))+.7),M.shake=Math.max(0,M.shake-i*3),De.position.set(Xt.pos.x+(Math.random()-.5)*M.shake*.5,Xt.pos.y+(Math.random()-.5)*M.shake*.5,Xt.pos.z),De.lookAt(t+l*3,e+.5,n+c*3);let g=dd.free;g&&(De.position.set(g[0],g[1],g[2]),De.lookAt(g[3],g[4],g[5])),De.updateProjectionMatrix()}function fv(i){M.t+=i,M.left-=i,M.t>3&&xn("what"),tv(i);for(let t of M.cars)t.ai&&t.ai.type==="traffic"&&Co(t,i,j.x,j.z);if(An.begin(),nv(i),ev(i),ov(i),$f(!0),ih(),Ie.fire){let t=Ie.fire,e=.7+Math.random()*.5;An.add(t[0],t[1],t[2],4.5*e,2.4*e,.9*e,.2),Math.random()<.3&&Wi.emit(t[0],t[1],t[2],(Math.random()-.5)*1.5,3+Math.random()*3,(Math.random()-.5)*1.5,1.2,2.5,.9,.2)}if(M.mission&&M.mission.id==="kos"&&M.mission.si<=1){let t=dn.artifact;An.add(t[0],1.4+Math.sin(M.time*3)*.2,t[1],5,2.6,1.3,.2)}for(let t of Ie.towers)An.add(t.x,t.h+.6,t.z,4,(M.time*2|0)%2?2.2:.3,.2,.15);if(An.end(),M.sayT-=i,M.sayQ.length&&M.sayT<=0){let t=M.sayQ.shift();jr(t[0],t[1]),M.sayT=1.15}for(;M.amb<No.length&&No[M.amb][0]<=M.t;){let t=No[M.amb++];!(t[1]==="kos"&&M.flags.witcher&&t[2]==="\u041D\u0430 \u0421\u0435\u0440\u0433\u0435\u044F \u0441\u0442\u043E\u043B\u0438\u043A")&&!(M.flags.crash&&t[0]===288)&&!(t[3]&&M.run&&M.run.includes(t[3]))&&M.sayQ.push([t[1],t[2]])}for(;M.cd<Fo.length&&M.left<=Fo[M.cd][0];){let t=Fo[M.cd++];M.left>t[0]-3&&M.sayQ.push(["arkasha",t[1]])}M.left<150&&!M.flags.delay&&(M.flags.delay=1,M.left+=15,Ue([["pasha","\u041F\u0435\u0440\u0435\u043D\u0435\u0441\u043B\u0438!"],["sys","\u0420\u0435\u043B\u0438\u0437 \u043F\u0435\u0440\u0435\u043D\u0435\u0441\u043B\u0438 \u043D\u0430 15 \u0441\u0435\u043A\u0443\u043D\u0434. +15 \u0441\u0435\u043A"],["pasha","\u041D\u0443 \u043E\u0431\u0435\u0449\u0430\u044E\u0442 \u0431\u0435\u0437 \u043F\u0435\u0440\u0435\u043D\u043E\u0441\u043E\u0432"]]),ni("\u041F\u0415\u0420\u0415\u041D\u041E\u0421","+15 \u0441\u0435\u043A\u0443\u043D\u0434")),cd&&!Uf&&(Uf=!0,Ue([["sanya","\u041F\u0440\u0438\u0448\u043B\u043E\u0441\u044C \u043E\u043F\u0435\u0440\u0430\u0442\u0438\u0432\u043A\u0438 \u0434\u043E\u043A\u0443\u043F\u0438\u0442\u044C, \u0447\u0442\u043E\u0431\u044B \u0433\u0440\u0430\u0444\u0438\u043A\u0430 \u043D\u043E\u0440\u043C \u0431\u044B\u043B\u0430\u{1F605}"],["sys","\u0413\u0440\u0430\u0444\u0438\u043A\u0430 \u043F\u043E\u043D\u0438\u0436\u0435\u043D\u0430: \u0442\u0430\u043A \u043F\u043B\u0430\u0432\u043D\u0435\u0435"]])),Ot.intensity+=((M.left<60?1:M.wanted>0?.85:.5)-Ot.intensity)*bn(1,i),Ot.rush=M.left<60?1:0,Ie.setShadowCenter(j.x,j.z),uv(i),hv(i),M.left<=0&&ld()}var Wf={url:"https://ecwhfahziwuocmxzyomu.supabase.co/rest/v1/gtr_scores",key:"sb_publishable_srHhvRICnwOl-3P-CPRnKg_Oyx7JTyc"};function rd(i,t){let e=typeof AbortController!="undefined"?new AbortController:null,n=setTimeout(()=>{e&&e.abort()},7e3),s={headers:{apikey:Wf.key,"Content-Type":"application/json",Prefer:"return=minimal"}};return e&&(s.signal=e.signal),t&&(s.method="POST",s.body=JSON.stringify(t)),fetch(Wf.url+i,s).then(r=>{if(clearTimeout(n),!r.ok)throw new Error("lb "+r.status);return t?null:r.json()},r=>{throw clearTimeout(n),r})}var dv=i=>{let t=new Date(i);if(isNaN(t))return"";let e=n=>String(n).padStart(2,"0");return e(t.getDate())+"."+e(t.getMonth()+1)+" "+e(t.getHours())+":"+e(t.getMinutes())},ea='<div class="h">\u{1F3C6} \u0422\u0410\u0411\u041B\u0418\u0426\u0410 \u0427\u0410\u0422\u0410</div>',ad=()=>rd("?select=rak,score,created_at,ver&order=score.desc,created_at.desc&limit=150");function od(i,t,e){i=i.filter(l=>bi[l.rak]);let n=i.filter(l=>(l.ver||1)===Uo),s=i.filter(l=>(l.ver||1)!==Uo),r=t?n.findIndex(l=>l.rak===t.rak&&l.score===t.score):-1,a=(l,c,h)=>'<div class="r'+(c===r&&!h?" me":"")+(h?" o":"")+'"><span>'+(h?"":c+1+".")+'</span><img src="'+eh[l.rak]+'" alt=""><b>'+bi[l.rak].name+(c===r&&!h?" \xB7 \u044D\u0442\u043E \u0442\u044B":"")+"</b><i>"+dv(l.created_at)+"</i><em>"+(+l.score||0)+"</em></div>",o=ea+'<div class="s">\u0432\u0441\u0435 \u0437\u0430\u0431\u0435\u0433\u0438 \xB7 \u043B\u0443\u0447\u0448\u0438\u0435 \u0441\u0432\u0435\u0440\u0445\u0443 \xB7 \u0432\u0441\u0435\u0433\u043E '+n.length+"</div>";return n.length||(o+='<div class="e">\u041F\u043E\u043A\u0430 \u043F\u0443\u0441\u0442\u043E. \u0414\u043E\u0438\u0433\u0440\u0430\u0439 \u0434\u043E \u043F\u043E\u043B\u0443\u043D\u043E\u0447\u0438 \u2014 \u0431\u0443\u0434\u0435\u0448\u044C \u043F\u0435\u0440\u0432\u044B\u043C.</div>'),o+=n.slice(0,e).map((l,c)=>a(l,c)).join(""),r>=e&&(o+='<div class="e">\u2026</div>'+a(n[r],r)),n.length===1&&(o+='<div class="e">\u041F\u043E\u043A\u0430 \u0442\u0443\u0442 \u043E\u0434\u0438\u043D \u0437\u0430\u0431\u0435\u0433. \u041A\u0438\u0434\u0430\u0439 \u0441\u0441\u044B\u043B\u043A\u0443 \u0432 \u0447\u0430\u0442.</div>'),s.length&&(o+='<div class="s" style="margin-top:8px">\u043F\u0440\u043E\u0448\u043B\u0430\u044F \u0432\u0435\u0440\u0441\u0438\u044F \u0438\u0433\u0440\u044B (\u0431\u0435\u0437 \u043D\u043E\u0432\u044B\u0445 \u043F\u043E\u0440\u0443\u0447\u0435\u043D\u0438\u0439) \xB7 \u0432\u043D\u0435 \u0437\u0430\u0447\u0451\u0442\u0430</div>'+s.slice(0,Math.max(2,e>>2)).map((l,c)=>a(l,c,!0)).join("")),o}function pv(){let i=M.stats,t=(Sn.has("debug")||Sn.has("t")||Sn.has("q")||Sn.has("m"))&&!Sn.has("lb"),e=ot("flb"),n=M.score>0&&!t,s=n?{rak:M.pid,score:Math.min(M.score,12e3)}:null;e.classList.remove("hidden"),e.innerHTML=ea+'<div class="e">\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u044E\u2026</div>',(n?rd("",{ver:Uo,rak:s.rak,score:s.score,missions:Math.min(i.missions,6),cards:Math.min(i.cards,2e3),bans:Math.min(i.bans,99)}).catch(()=>null):Promise.resolve()).then(ad).then(a=>{e.innerHTML=od(a,s,8)}).catch(()=>{e.innerHTML=ea+'<div class="e">\u041D\u0435\u0442 \u0441\u0432\u044F\u0437\u0438 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043E\u043C \u0440\u0435\u043A\u043E\u0440\u0434\u043E\u0432. \u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u043E\u0441\u0442\u0430\u043B\u0441\u044F \u043D\u0430 \u044D\u0442\u043E\u043C \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0435.</div>'})}function mv(){let i=ot("lbmc");ot("lbm").classList.remove("hidden"),i.innerHTML=ea+'<div class="e">\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u044E\u2026</div>',ad().then(t=>{i.innerHTML=od(t,null,30)}).catch(()=>{i.innerHTML=ea+'<div class="e">\u041D\u0435\u0442 \u0441\u0432\u044F\u0437\u0438 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043E\u043C \u0440\u0435\u043A\u043E\u0440\u0434\u043E\u0432.</div>'})}var Tn=null;function ld(){M.state="final",Ot.play("bell"),Ot.sting("final"),Ot.rush=0,Ot.setTheme(M.pid),Ot.intensity=1,ot("hud").classList.add("hidden"),ot("modal").classList.add("hidden"),ot("phone").classList.add("hidden"),ot("final").classList.remove("hidden"),wi.mFinal.uniforms.uFlash.value=1,ei&&(ei.visible=!1),jn.intensity=0,Gi.u.uHead.value=0,mr.forEach(l=>l.hide());let i=M.stats,t=kc[0];for(let l of kc)M.score>=l[0]&&(t=l);let e=0;try{e=+(localStorage.getItem("gtr_best")||0),M.score>e&&localStorage.setItem("gtr_best",M.score)}catch{}Tn={t:0,i:0,fw:0,rank:t,best:e};let n=location.origin+location.pathname,s=`\u{1F980} Grand Theft Raki: \u041D\u043E\u0432\u043E\u0441\u0438\u0431\u0438\u0440\u0441\u043A
\u0418\u0433\u0440\u0430\u043B \u0437\u0430: ${Qr}
\u0421\u0447\u0451\u0442: ${M.score} \u2014 \u0437\u0432\u0430\u043D\u0438\u0435 ${t[1]}
\u041F\u043E\u0440\u0443\u0447\u0435\u043D\u0438\u0439: ${i.missions}/${i.total} \xB7 \u043A\u0430\u0440\u0442\u043E\u0447\u0435\u043A \u0418\u0433\u043E\u0440\u044F: ${i.cards} \u0438\u0437 144 \xB7 \u0431\u0430\u043D\u043E\u0432 \u043E\u0442 \u043C\u043E\u0434\u0435\u0440\u0430\u0442\u043E\u0440\u043E\u0432: ${i.bans}${Object.keys(M.tro||{}).length?`
\u0422\u0440\u043E\u0444\u0435\u0438: `+Object.keys(M.tro).map(l=>Go[l][0]).join(", "):""}
${n}`;ot("frank").textContent=t[1],ot("fscore").textContent=M.score+" \u043E\u0447\u043A.",ot("fnote").innerHTML=gn(t[2])+"<br><i>"+gn(If[M.pid]||"")+"</i>";let r=Object.keys(M.tro||{}).map(l=>Go[l][0]),a=(M.run||[]).map(l=>(M.done[l]||"\u2014")+" "+Zr[l].title).join(" \xB7 "),o=Bc.filter(l=>l!==M.pid&&!(M.run||[]).includes(l)).map(l=>bi[l].name).join(", ");ot("fstats").innerHTML="\u0418\u0433\u0440\u0430\u043B \u0437\u0430: <b>"+gn(Qr)+"</b> \xB7 \u043F\u043E\u0440\u0443\u0447\u0435\u043D\u0438\u0439 "+i.missions+"/"+i.total+"<br>"+gn(a)+"<br>\u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438 "+i.cards+"/144 \xB7 \u043F\u0435\u0440\u044C\u044F "+i.feathers+"/6 \xB7 \u043E\u0440\u0445\u0438\u0434\u0435\u0438 "+i.orchids+"/6 \xB7 \u0443\u0433\u043E\u043D\u043E\u0432 "+i.stolen+" \xB7 \u0431\u0430\u043D\u043E\u0432 "+i.bans+(r.length?"<br>\u{1F980} \u0422\u0440\u043E\u0444\u0435\u0438 ("+r.length+"): "+gn(r.join(" \xB7 ")):"")+(o?'<br><span class="nx">\u0412 \u044D\u0442\u043E\u0442 \u0440\u0430\u0437 \u043D\u0435 \u0432\u044B\u043F\u0430\u043B\u0438 \u043F\u043E\u0440\u0443\u0447\u0435\u043D\u0438\u044F: '+gn(o)+". \u0421\u044B\u0433\u0440\u0430\u0439 \u0435\u0449\u0451.</span>":"")+(e?"<br>\u043F\u0440\u043E\u0448\u043B\u044B\u0439 \u0440\u0435\u043A\u043E\u0440\u0434 \u043D\u0430 \u044D\u0442\u043E\u043C \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0435: "+e:""),ot("fcopy").onclick=async()=>{let l=!1;try{await navigator.clipboard.writeText(s),l=!0}catch{}if(!l){let c=document.createElement("textarea");c.value=s,c.style.cssText="position:fixed;left:0;top:0;opacity:0",document.body.appendChild(c),c.focus(),c.select();try{l=document.execCommand("copy")}catch{l=!1}c.remove()}l?ot("fcopy").textContent="\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u043E \u2714 \u0432\u0441\u0442\u0430\u0432\u043B\u044F\u0439 \u0432 \u0447\u0430\u0442":(ot("fstats").innerHTML=`<textarea readonly style="width:100%;height:120px;font:13px system-ui;background:#111a2a;color:#fff;border:1px solid #445;border-radius:10px;padding:8px;-webkit-user-select:text;user-select:text">${gn(s)}</textarea>`,ot("fcopy").textContent="\u0412\u044B\u0434\u0435\u043B\u0438 \u0438 \u0441\u043A\u043E\u043F\u0438\u0440\u0443\u0439 \u0442\u0435\u043A\u0441\u0442 \u0432\u044B\u0448\u0435")},ot("fagain").onclick=()=>location.reload(),pv()}function gv(i){Tn.t+=i;let t=wi.mFinal.uniforms;t.uFlash.value=Math.max(0,t.uFlash.value-i*1.2);let e=Tn.t*.12+2.6;if(De.fov=ko,De.position.set(176+Math.cos(e)*60,22+Math.min(Tn.t,30)*.7,-30+Math.sin(e)*60),De.lookAt(178,14,-30),De.updateProjectionMatrix(),Ie.setShadowCenter(176,-30),Tn.fw-=i,Tn.fw<=0&&Tn.t<40){Tn.fw=.35+Math.random()*.5;let n=[[3,.4,1.6],[.4,2.4,3],[3,2.2,.4],[.6,3,1],[3,.6,.4]][Math.floor(Math.random()*5)];Wi.burst(150+Math.random()*60,34+Math.random()*22,-60+Math.random()*60,60,13,1.7,n[0],n[1],n[2]),Math.random()<.6&&Ot.play("boom")}for(let n of M.cars)n.ai&&n.ai.type==="traffic"&&Co(n,i,1e5,1e5);if(An.begin(),ih(),$f(!1),An.end(),Tn.i<Jr.length&&Tn.t>1.6+Tn.i*.95){let n=Jr[Tn.i++],s=ot("fchat");for(s.appendChild(Jf(n[0],n[1]));s.children.length>3;)s.firstChild.remove();Ot.play("msg")}if(Tn.i>=Jr.length&&Tn.t>2.6+Jr.length*.95&&ot("fcard").classList.contains("hidden")){let n=ot("fchat");for(;n.children.length>1;)n.firstChild.remove();ot("fcard").classList.remove("hidden"),Ot.play("win")}}var $r=0,th=performance.now(),Bo=0,qc=0,Kr=4,cd=!1,Xf=!1;function hd(i){M.state==="play"?fv(i):M.state==="menu"?Z_(i):M.state==="final"&&gv(i)}function ud(i){requestAnimationFrame(ud);let t=(i-th)/1e3;th=i;let e=Math.min(.05,Math.max(.001,t));M.time+=e;try{hd(e),fd(e)}catch(n){ot("err").textContent=String(n&&n.stack||n).slice(0,400)}if(t<.5&&(Kr-=t,Kr<=0&&(Bo+=t,qc++,Bo>1.6))){let n=qc/Bo;Bo=0,qc=0,Sn.has("fps")&&(ot("err").textContent=n.toFixed(0)+" fps \xB7 q"+Si),n<(Yn?27:43)&&!document.hidden?$r++:$r=0,Oo=n>56?Oo+1:0,$r>=2&&Si<Wo.length-1&&!Sn.has("q")?($r=0,Si++,Si>X_&&(cd=!0),Gc=!0,Kr=2.5,ps()):Yn&&Oo>=3&&Si>0&&!Gc&&!Sn.has("q")&&M.state==="play"&&(Gc=!0,Oo=0,Si--,Kr=3,ps())}Xf||(Xf=!0,ot("loading").style.opacity=0,setTimeout(()=>ot("loading").classList.add("hidden"),650))}function fd(i){{let t=wi.mFinal.uniforms;M.state!=="final"&&(t.uFlash.value=Math.max(0,t.uFlash.value-i*2)),hr.value=Zf/(2*Math.tan(De.fov*Math.PI/360)),Ie.update(i,M.time,De),Gi.u.uTime.value=M.time,Gi.u.uCam.value.copy(De.position),Wi.update(M.time),mr.forEach(e=>e.update(M.time)),Ot.tick(M.state==="play"&&M.mode==="car"?Le(M.car.speed/32,0,1):0,M.state==="play"&&M.mode==="car"?M.car.slip:0,M.state==="play"&&M.mode==="car",M.wanted>0),wi.render(on,De,M.time)}}ps();Y_();M.state="menu";ot("menu").classList.remove("hidden");var dd={S:M,P:j,cam:Xt,world:Ie,post:wi,renderer:ti,QL:Wo,setQ:i=>{Si=i,ps()},finale:ld,startMission:id,COL:gs,action:lh,startWanted:ch,audio:Ot,Audio:Yr,THEMES:qn,radioNext:rh,horn:ah,trophy:xn,NODES:pn,step:(i,t=1/30,e)=>{for(let n=0;n<i;n++)M.time+=t,hd(t);e||fd(t)}};Sn.has("debug")&&(window.__gtr=dd);requestAnimationFrame(ud);})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
