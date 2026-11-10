(()=>{var Lc="160";var Md=0,Mh=1,bd=2;var $u=1,Ic=2,mi=3,Vi=0,pn=1,Sn=2;var Bi=0,Ks=1,qn=2,bh=3,Sh=4,Sd=5,is=100,Ed=101,wd=102,Eh=103,wh=104,Td=200,Ad=201,Rd=202,Cd=203,zl=204,Bl=205,Pd=206,Ld=207,Id=208,Dd=209,Ud=210,Nd=211,Fd=212,Od=213,zd=214,Bd=0,kd=1,Hd=2,Ha=3,Vd=4,Gd=5,Wd=6,Xd=7,Dc=0,qd=1,Yd=2,ki=0,Zd=1,Jd=2,$d=3,Kd=4,Qd=5,jd=6;var Ku=300,tr=301,er=302,kl=303,Hl=304,Mo=306,cs=1e3,Wn=1001,Vl=1002,on=1003,Th=1004;var nl=1005;var bn=1006,tp=1007;var Fr=1008;var ti=1009,ep=1010,np=1011,Uc=1012,Qu=1013,Oi=1014,zi=1015,hs=1016,ju=1017,tf=1018,as=1020,ip=1021,Xn=1023,sp=1024,rp=1025,os=1026,nr=1027,ap=1028,ef=1029,op=1030,nf=1031,sf=1033,il=33776,sl=33777,rl=33778,al=33779,Ah=35840,Rh=35841,Ch=35842,Ph=35843,rf=36196,Lh=37492,Ih=37496,Dh=37808,Uh=37809,Nh=37810,Fh=37811,Oh=37812,zh=37813,Bh=37814,kh=37815,Hh=37816,Vh=37817,Gh=37818,Wh=37819,Xh=37820,qh=37821,ol=36492,Yh=36494,Zh=36495,lp=36283,Jh=36284,$h=36285,Kh=36286;var Va=2300,Ga=2301,ll=2302,Qh=2400,jh=2401,tu=2402;var af=3e3,ls=3001,cp=3200,hp=3201,of=0,up=1,zn="",Ne="srgb",vi="srgb-linear",Nc="display-p3",bo="display-p3-linear",Wa="linear",Re="srgb",Xa="rec709",qa="p3";var Rs=7680;var eu=519,fp=512,dp=513,pp=514,lf=515,mp=516,gp=517,xp=518,_p=519,Gl=35044;var nu="300 es",Wl=1035,_i=2e3,Ya=2001,Gi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}},fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var cl=Math.PI/180,Za=180/Math.PI;function Hi(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(fn[s&255]+fn[s>>8&255]+fn[s>>16&255]+fn[s>>24&255]+"-"+fn[t&255]+fn[t>>8&255]+"-"+fn[t>>16&15|64]+fn[t>>24&255]+"-"+fn[e&63|128]+fn[e>>8&255]+"-"+fn[e>>16&255]+fn[e>>24&255]+fn[n&255]+fn[n>>8&255]+fn[n>>16&255]+fn[n>>24&255]).toLowerCase()}function ln(s,t,e){return Math.max(t,Math.min(e,s))}function vp(s,t){return(s%t+t)%t}function hl(s,t,e){return(1-e)*s+e*t}function iu(s){return(s&s-1)===0&&s!==0}function Xl(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function xi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function be(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var yt=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ln(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},re=class s{constructor(t,e,n,i,r,a,o,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c)}set(t,e,n,i,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],x=i[0],m=i[3],p=i[6],y=i[1],v=i[4],w=i[7],L=i[2],T=i[5],I=i[8];return r[0]=a*x+o*y+l*L,r[3]=a*m+o*v+l*T,r[6]=a*p+o*w+l*I,r[1]=c*x+h*y+u*L,r[4]=c*m+h*v+u*T,r[7]=c*p+h*w+u*I,r[2]=f*x+d*y+g*L,r[5]=f*m+d*v+g*T,r[8]=f*p+d*w+g*I,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,f=o*l-h*r,d=c*r-a*l,g=e*u+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=u*x,t[1]=(i*c-h*n)*x,t[2]=(o*n-i*a)*x,t[3]=f*x,t[4]=(h*e-i*l)*x,t[5]=(i*r-o*e)*x,t[6]=d*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(ul.makeScale(t,e)),this}rotate(t){return this.premultiply(ul.makeRotation(-t)),this}translate(t,e){return this.premultiply(ul.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ul=new re;function cf(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Ja(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function yp(){let s=Ja("canvas");return s.style.display="block",s}var su={};function Ir(s){s in su||(su[s]=!0,console.warn(s))}var ru=new re().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),au=new re().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ua={[vi]:{transfer:Wa,primaries:Xa,toReference:s=>s,fromReference:s=>s},[Ne]:{transfer:Re,primaries:Xa,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[bo]:{transfer:Wa,primaries:qa,toReference:s=>s.applyMatrix3(au),fromReference:s=>s.applyMatrix3(ru)},[Nc]:{transfer:Re,primaries:qa,toReference:s=>s.convertSRGBToLinear().applyMatrix3(au),fromReference:s=>s.applyMatrix3(ru).convertLinearToSRGB()}},Mp=new Set([vi,bo]),ve={enabled:!0,_workingColorSpace:vi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Mp.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;let n=ua[t].toReference,i=ua[e].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return ua[s].primaries},getTransfer:function(s){return s===zn?Wa:ua[s].transfer}};function Qs(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function fl(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Cs,$a=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Cs===void 0&&(Cs=Ja("canvas")),Cs.width=t.width,Cs.height=t.height;let n=Cs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Cs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=Ja("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Qs(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Qs(e[n]/255)*255):e[n]=Qs(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},bp=0,Ka=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bp++}),this.uuid=Hi(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(dl(i[a].image)):r.push(dl(i[a]))}else r=dl(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function dl(s){return typeof HTMLImageElement!="undefined"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&s instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&s instanceof ImageBitmap?$a.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Sp=0,Ln=class s extends Gi{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=Wn,i=Wn,r=bn,a=Fr,o=Xn,l=ti,c=s.DEFAULT_ANISOTROPY,h=zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sp++}),this.uuid=Hi(),this.name="",this.source=new Ka(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new yt(0,0),this.repeat=new yt(1,1),this.center=new yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new re,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Ir("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===ls?Ne:zn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ku)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case cs:t.x=t.x-Math.floor(t.x);break;case Wn:t.x=t.x<0?0:1;break;case Vl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case cs:t.y=t.y-Math.floor(t.y);break;case Wn:t.y=t.y<0?0:1;break;case Vl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ir("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ne?ls:af}set encoding(t){Ir("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===ls?Ne:zn}};Ln.DEFAULT_IMAGE=null;Ln.DEFAULT_MAPPING=Ku;Ln.DEFAULT_ANISOTROPY=1;var tn=class s{constructor(t=0,e=0,n=0,i=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(c+1)/2,w=(d+1)/2,L=(p+1)/2,T=(h+f)/4,I=(u+x)/4,k=(g+m)/4;return v>w&&v>L?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=T/n,r=I/n):w>L?w<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(w),n=T/i,r=k/i):L<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(L),n=I/r,i=k/r),this.set(n,i,r,e),this}let y=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-x)/y,this.z=(f-h)/y,this.w=Math.acos((c+d+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ql=class extends Gi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new tn(0,0,t,e),this.scissorTest=!1,this.viewport=new tn(0,0,t,e);let i={width:t,height:e,depth:1};n.encoding!==void 0&&(Ir("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ls?Ne:zn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Ln(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Ka(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},In=class extends ql{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Qa=class extends Ln{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=on,this.minFilter=on,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Yl=class extends Ln{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=on,this.minFilter=on,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Dn=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],f=r[a+0],d=r[a+1],g=r[a+2],x=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=x;return}if(u!==x||l!==f||c!==d||h!==g){let m=1-o,p=l*f+c*d+h*g+u*x,y=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){let L=Math.sqrt(v),T=Math.atan2(L,p*y);m=Math.sin(m*T)/L,o=Math.sin(o*T)/L}let w=o*y;if(l=l*m+f*w,c=c*m+d*w,h=h*m+g*w,u=u*m+x*w,m===1-o){let L=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=L,c*=L,h*=L,u*=L}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],f=r[a+1],d=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*d-c*f,t[e+1]=l*g+h*f+c*u-o*d,t[e+2]=c*g+h*d+o*f-l*u,t[e+3]=h*g-o*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),f=l(n/2),d=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+o+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-i)*d}else if(n>o&&n>u){let d=2*Math.sqrt(1+n-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(r+c)/d}else if(o>u){let d=2*Math.sqrt(1+o-n-u);this._w=(r-c)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-o);this._w=(a-i)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ln(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let d=1-e;return this._w=d*a+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(r),n*Math.cos(r),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class s{constructor(t=0,e=0,n=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ou.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ou.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-r*i),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=i+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return pl.copy(this).projectOnVector(t),this.sub(pl)}reflect(t){return this.sub(pl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ln(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},pl=new U,ou=new Dn,yi=class{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Hn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Hn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Hn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Hn):Hn.fromBufferAttribute(r,a),Hn.applyMatrix4(t.matrixWorld),this.expandByPoint(Hn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),fa.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),fa.copy(n.boundingBox)),fa.applyMatrix4(t.matrixWorld),this.union(fa)}let i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Hn),Hn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Sr),da.subVectors(this.max,Sr),Ps.subVectors(t.a,Sr),Ls.subVectors(t.b,Sr),Is.subVectors(t.c,Sr),Ii.subVectors(Ls,Ps),Di.subVectors(Is,Ls),Qi.subVectors(Ps,Is);let e=[0,-Ii.z,Ii.y,0,-Di.z,Di.y,0,-Qi.z,Qi.y,Ii.z,0,-Ii.x,Di.z,0,-Di.x,Qi.z,0,-Qi.x,-Ii.y,Ii.x,0,-Di.y,Di.x,0,-Qi.y,Qi.x,0];return!ml(e,Ps,Ls,Is,da)||(e=[1,0,0,0,1,0,0,0,1],!ml(e,Ps,Ls,Is,da))?!1:(pa.crossVectors(Ii,Di),e=[pa.x,pa.y,pa.z],ml(e,Ps,Ls,Is,da))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Hn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Hn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(hi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},hi=[new U,new U,new U,new U,new U,new U,new U,new U],Hn=new U,fa=new yi,Ps=new U,Ls=new U,Is=new U,Ii=new U,Di=new U,Qi=new U,Sr=new U,da=new U,pa=new U,ji=new U;function ml(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){ji.fromArray(s,r);let o=i.x*Math.abs(ji.x)+i.y*Math.abs(ji.y)+i.z*Math.abs(ji.z),l=t.dot(ji),c=e.dot(ji),h=n.dot(ji);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Ep=new yi,Er=new U,gl=new U,Wi=class{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Ep.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Er.subVectors(t,this.center);let e=Er.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Er,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(gl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Er.copy(t.center).add(gl)),this.expandByPoint(Er.copy(t.center).sub(gl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},ui=new U,xl=new U,ma=new U,Ui=new U,_l=new U,ga=new U,vl=new U,ja=class{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ui)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ui.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ui.copy(this.origin).addScaledVector(this.direction,e),ui.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){xl.copy(t).add(e).multiplyScalar(.5),ma.copy(e).sub(t).normalize(),Ui.copy(this.origin).sub(xl);let r=t.distanceTo(e)*.5,a=-this.direction.dot(ma),o=Ui.dot(this.direction),l=-Ui.dot(ma),c=Ui.lengthSq(),h=Math.abs(1-a*a),u,f,d,g;if(h>0)if(u=a*l-o,f=a*o-l,g=r*h,u>=0)if(f>=-g)if(f<=g){let x=1/h;u*=x,f*=x,d=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(xl).addScaledVector(ma,f),d}intersectSphere(t,e){ui.subVectors(t.center,this.origin);let n=ui.dot(this.direction),i=ui.dot(ui)-n*n,r=t.radius*t.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,ui)!==null}intersectTriangle(t,e,n,i,r){_l.subVectors(e,t),ga.subVectors(n,t),vl.crossVectors(_l,ga);let a=this.direction.dot(vl),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ui.subVectors(this.origin,t);let l=o*this.direction.dot(ga.crossVectors(Ui,ga));if(l<0)return null;let c=o*this.direction.dot(_l.cross(Ui));if(c<0||l+c>a)return null;let h=-o*Ui.dot(vl);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},fe=class s{constructor(t,e,n,i,r,a,o,l,c,h,u,f,d,g,x,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c,h,u,f,d,g,x,m)}set(t,e,n,i,r,a,o,l,c,h,u,f,d,g,x,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/Ds.setFromMatrixColumn(t,0).length(),r=1/Ds.setFromMatrixColumn(t,1).length(),a=1/Ds.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=a*h,d=a*u,g=o*h,x=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+g*c,e[5]=f-x*c,e[9]=-o*l,e[2]=x-f*c,e[6]=g+d*c,e[10]=a*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,g=c*h,x=c*u;e[0]=f+x*o,e[4]=g*o-d,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=d*o-g,e[6]=x+f*o,e[10]=a*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,g=c*h,x=c*u;e[0]=f-x*o,e[4]=-a*u,e[8]=g+d*o,e[1]=d+g*o,e[5]=a*h,e[9]=x-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let f=a*h,d=a*u,g=o*h,x=o*u;e[0]=l*h,e[4]=g*c-d,e[8]=f*c+x,e[1]=l*u,e[5]=x*c+f,e[9]=d*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let f=a*l,d=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=x-f*u,e[8]=g*u+d,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=d*u+g,e[10]=f-x*u}else if(t.order==="XZY"){let f=a*l,d=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+x,e[5]=a*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=o*h,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(wp,t,Tp)}lookAt(t,e,n){let i=this.elements;return Cn.subVectors(t,e),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),Ni.crossVectors(n,Cn),Ni.lengthSq()===0&&(Math.abs(n.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),Ni.crossVectors(n,Cn)),Ni.normalize(),xa.crossVectors(Cn,Ni),i[0]=Ni.x,i[4]=xa.x,i[8]=Cn.x,i[1]=Ni.y,i[5]=xa.y,i[9]=Cn.y,i[2]=Ni.z,i[6]=xa.z,i[10]=Cn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],x=n[6],m=n[10],p=n[14],y=n[3],v=n[7],w=n[11],L=n[15],T=i[0],I=i[4],k=i[8],b=i[12],A=i[1],H=i[5],J=i[9],dt=i[13],O=i[2],W=i[6],Q=i[10],it=i[14],K=i[3],nt=i[7],ct=i[11],ft=i[15];return r[0]=a*T+o*A+l*O+c*K,r[4]=a*I+o*H+l*W+c*nt,r[8]=a*k+o*J+l*Q+c*ct,r[12]=a*b+o*dt+l*it+c*ft,r[1]=h*T+u*A+f*O+d*K,r[5]=h*I+u*H+f*W+d*nt,r[9]=h*k+u*J+f*Q+d*ct,r[13]=h*b+u*dt+f*it+d*ft,r[2]=g*T+x*A+m*O+p*K,r[6]=g*I+x*H+m*W+p*nt,r[10]=g*k+x*J+m*Q+p*ct,r[14]=g*b+x*dt+m*it+p*ft,r[3]=y*T+v*A+w*O+L*K,r[7]=y*I+v*H+w*W+L*nt,r[11]=y*k+v*J+w*Q+L*ct,r[15]=y*b+v*dt+w*it+L*ft,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],x=t[7],m=t[11],p=t[15];return g*(+r*l*u-i*c*u-r*o*f+n*c*f+i*o*d-n*l*d)+x*(+e*l*d-e*c*f+r*a*f-i*a*d+i*c*h-r*l*h)+m*(+e*c*u-e*o*d-r*a*u+n*a*d+r*o*h-n*c*h)+p*(-i*o*h-e*l*u+e*o*f+i*a*u-n*a*f+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],x=t[13],m=t[14],p=t[15],y=u*m*c-x*f*c+x*l*d-o*m*d-u*l*p+o*f*p,v=g*f*c-h*m*c-g*l*d+a*m*d+h*l*p-a*f*p,w=h*x*c-g*u*c+g*o*d-a*x*d-h*o*p+a*u*p,L=g*u*l-h*x*l-g*o*f+a*x*f+h*o*m-a*u*m,T=e*y+n*v+i*w+r*L;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/T;return t[0]=y*I,t[1]=(x*f*r-u*m*r-x*i*d+n*m*d+u*i*p-n*f*p)*I,t[2]=(o*m*r-x*l*r+x*i*c-n*m*c-o*i*p+n*l*p)*I,t[3]=(u*l*r-o*f*r-u*i*c+n*f*c+o*i*d-n*l*d)*I,t[4]=v*I,t[5]=(h*m*r-g*f*r+g*i*d-e*m*d-h*i*p+e*f*p)*I,t[6]=(g*l*r-a*m*r-g*i*c+e*m*c+a*i*p-e*l*p)*I,t[7]=(a*f*r-h*l*r+h*i*c-e*f*c-a*i*d+e*l*d)*I,t[8]=w*I,t[9]=(g*u*r-h*x*r-g*n*d+e*x*d+h*n*p-e*u*p)*I,t[10]=(a*x*r-g*o*r+g*n*c-e*x*c-a*n*p+e*o*p)*I,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*d-e*o*d)*I,t[12]=L*I,t[13]=(h*x*i-g*u*i+g*n*f-e*x*f-h*n*m+e*u*m)*I,t[14]=(g*o*i-a*x*i-g*n*l+e*x*l+a*n*m-e*o*m)*I,t[15]=(a*u*i-h*o*i+h*n*l-e*u*l-a*n*f+e*o*f)*I,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,f=r*c,d=r*h,g=r*u,x=a*h,m=a*u,p=o*u,y=l*c,v=l*h,w=l*u,L=n.x,T=n.y,I=n.z;return i[0]=(1-(x+p))*L,i[1]=(d+w)*L,i[2]=(g-v)*L,i[3]=0,i[4]=(d-w)*T,i[5]=(1-(f+p))*T,i[6]=(m+y)*T,i[7]=0,i[8]=(g+v)*I,i[9]=(m-y)*I,i[10]=(1-(f+x))*I,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,r=Ds.set(i[0],i[1],i[2]).length(),a=Ds.set(i[4],i[5],i[6]).length(),o=Ds.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Vn.copy(this);let c=1/r,h=1/a,u=1/o;return Vn.elements[0]*=c,Vn.elements[1]*=c,Vn.elements[2]*=c,Vn.elements[4]*=h,Vn.elements[5]*=h,Vn.elements[6]*=h,Vn.elements[8]*=u,Vn.elements[9]*=u,Vn.elements[10]*=u,e.setFromRotationMatrix(Vn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=_i){let l=this.elements,c=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i),d,g;if(o===_i)d=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Ya)d=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=_i){let l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(a-r),f=(e+t)*c,d=(n+i)*h,g,x;if(o===_i)g=(a+r)*u,x=-2*u;else if(o===Ya)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Ds=new U,Vn=new fe,wp=new U(0,0,0),Tp=new U(1,1,1),Ni=new U,xa=new U,Cn=new U,lu=new fe,cu=new Dn,Xi=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(ln(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ln(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ln(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ln(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ln(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-ln(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return lu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(lu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return cu.setFromEuler(this),this.setFromQuaternion(cu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Xi.DEFAULT_ORDER="XYZ";var to=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Ap=0,hu=new U,Us=new Dn,fi=new fe,_a=new U,wr=new U,Rp=new U,Cp=new Dn,uu=new U(1,0,0),fu=new U(0,1,0),du=new U(0,0,1),Pp={type:"added"},Lp={type:"removed"},Xe=class s extends Gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ap++}),this.uuid=Hi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new U,e=new Xi,n=new Dn,i=new U(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new fe},normalMatrix:{value:new re}}),this.matrix=new fe,this.matrixWorld=new fe,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new to,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Us.setFromAxisAngle(t,e),this.quaternion.multiply(Us),this}rotateOnWorldAxis(t,e){return Us.setFromAxisAngle(t,e),this.quaternion.premultiply(Us),this}rotateX(t){return this.rotateOnAxis(uu,t)}rotateY(t){return this.rotateOnAxis(fu,t)}rotateZ(t){return this.rotateOnAxis(du,t)}translateOnAxis(t,e){return hu.copy(t).applyQuaternion(this.quaternion),this.position.add(hu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(uu,t)}translateY(t){return this.translateOnAxis(fu,t)}translateZ(t){return this.translateOnAxis(du,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(fi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?_a.copy(t):_a.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fi.lookAt(wr,_a,this.up):fi.lookAt(_a,wr,this.up),this.quaternion.setFromRotationMatrix(fi),i&&(fi.extractRotation(i.matrixWorld),Us.setFromRotationMatrix(fi),this.quaternion.premultiply(Us.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Pp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Lp)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),fi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),fi.multiply(t.parent.matrixWorld)),t.applyMatrix4(fi),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,t,Rp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,Cp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++){let r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let i=this.children;for(let r=0,a=i.length;r<a;r++){let o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),d=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};Xe.DEFAULT_UP=new U(0,1,0);Xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Gn=new U,di=new U,yl=new U,pi=new U,Ns=new U,Fs=new U,pu=new U,Ml=new U,bl=new U,Sl=new U,va=!1,rs=class s{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Gn.subVectors(t,e),i.cross(Gn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Gn.subVectors(i,e),di.subVectors(n,e),yl.subVectors(t,e);let a=Gn.dot(Gn),o=Gn.dot(di),l=Gn.dot(yl),c=di.dot(di),h=di.dot(yl),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-o*h)*f,g=(a*h-o*l)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,pi)===null?!1:pi.x>=0&&pi.y>=0&&pi.x+pi.y<=1}static getUV(t,e,n,i,r,a,o,l){return va===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),va=!0),this.getInterpolation(t,e,n,i,r,a,o,l)}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,pi.x),l.addScaledVector(a,pi.y),l.addScaledVector(o,pi.z),l)}static isFrontFacing(t,e,n,i){return Gn.subVectors(n,e),di.subVectors(t,e),Gn.cross(di).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Gn.subVectors(this.c,this.b),di.subVectors(this.a,this.b),Gn.cross(di).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,r){return va===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),va=!0),s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,a,o;Ns.subVectors(i,n),Fs.subVectors(r,n),Ml.subVectors(t,n);let l=Ns.dot(Ml),c=Fs.dot(Ml);if(l<=0&&c<=0)return e.copy(n);bl.subVectors(t,i);let h=Ns.dot(bl),u=Fs.dot(bl);if(h>=0&&u<=h)return e.copy(i);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Ns,a);Sl.subVectors(t,r);let d=Ns.dot(Sl),g=Fs.dot(Sl);if(g>=0&&d<=g)return e.copy(r);let x=d*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Fs,o);let m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return pu.subVectors(r,i),o=(u-h)/(u-h+(d-g)),e.copy(i).addScaledVector(pu,o);let p=1/(m+x+f);return a=x*p,o=f*p,e.copy(n).addScaledVector(Ns,a).addScaledVector(Fs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},hf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fi={h:0,s:0,l:0},ya={h:0,s:0,l:0};function El(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var It=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ne){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ve.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=ve.workingColorSpace){return this.r=t,this.g=e,this.b=n,ve.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=ve.workingColorSpace){if(t=vp(t,1),e=ln(e,0,1),n=ln(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=El(a,r,t+1/3),this.g=El(a,r,t),this.b=El(a,r,t-1/3)}return ve.toWorkingColorSpace(this,i),this}setStyle(t,e=Ne){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ne){let n=hf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Qs(t.r),this.g=Qs(t.g),this.b=Qs(t.b),this}copyLinearToSRGB(t){return this.r=fl(t.r),this.g=fl(t.g),this.b=fl(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ne){return ve.fromWorkingColorSpace(dn.copy(this),t),Math.round(ln(dn.r*255,0,255))*65536+Math.round(ln(dn.g*255,0,255))*256+Math.round(ln(dn.b*255,0,255))}getHexString(t=Ne){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ve.workingColorSpace){ve.fromWorkingColorSpace(dn.copy(this),e);let n=dn.r,i=dn.g,r=dn.b,a=Math.max(n,i,r),o=Math.min(n,i,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ve.workingColorSpace){return ve.fromWorkingColorSpace(dn.copy(this),e),t.r=dn.r,t.g=dn.g,t.b=dn.b,t}getStyle(t=Ne){ve.fromWorkingColorSpace(dn.copy(this),t);let e=dn.r,n=dn.g,i=dn.b;return t!==Ne?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Fi),this.setHSL(Fi.h+t,Fi.s+e,Fi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Fi),t.getHSL(ya);let n=hl(Fi.h,ya.h,e),i=hl(Fi.s,ya.s,e),r=hl(Fi.l,ya.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},dn=new It;It.NAMES=hf;var Ip=0,Mi=class extends Gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ip++}),this.uuid=Hi(),this.name="",this.type="Material",this.blending=Ks,this.side=Vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zl,this.blendDst=Bl,this.blendEquation=is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new It(0,0,0),this.blendAlpha=0,this.depthFunc=Ha,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=eu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Rs,this.stencilZFail=Rs,this.stencilZPass=Rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ks&&(n.blending=this.blending),this.side!==Vi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==zl&&(n.blendSrc=this.blendSrc),this.blendDst!==Bl&&(n.blendDst=this.blendDst),this.blendEquation!==is&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ha&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==eu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Rs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Rs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Rs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},hn=class extends Mi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Dc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ve=new U,Ma=new yt,de=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Gl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=zi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ma.fromBufferAttribute(this,e),Ma.applyMatrix3(t),this.setXY(e,Ma.x,Ma.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix3(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix4(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyNormalMatrix(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.transformDirection(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=xi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=be(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=xi(e,this.array)),e}setX(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=xi(e,this.array)),e}setY(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=xi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=xi(e,this.array)),e}setW(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array),i=be(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array),i=be(i,this.array),r=be(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Gl&&(t.usage=this.usage),t}};var eo=class extends de{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var no=class extends de{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ae=class extends de{constructor(t,e,n){super(new Float32Array(t),e,n)}};var Dp=0,On=new fe,wl=new Xe,Os=new U,Pn=new yi,Tr=new yi,je=new U,_e=class s extends Gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dp++}),this.uuid=Hi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(cf(t)?no:eo)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new re().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return On.makeRotationFromQuaternion(t),this.applyMatrix4(On),this}rotateX(t){return On.makeRotationX(t),this.applyMatrix4(On),this}rotateY(t){return On.makeRotationY(t),this.applyMatrix4(On),this}rotateZ(t){return On.makeRotationZ(t),this.applyMatrix4(On),this}translate(t,e,n){return On.makeTranslation(t,e,n),this.applyMatrix4(On),this}scale(t,e,n){return On.makeScale(t,e,n),this.applyMatrix4(On),this}lookAt(t){return wl.lookAt(t),wl.updateMatrix(),this.applyMatrix4(wl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Os).negate(),this.translate(Os.x,Os.y,Os.z),this}setFromPoints(t){let e=[];for(let n=0,i=t.length;n<i;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ae(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];Pn.setFromBufferAttribute(r),this.morphTargetsRelative?(je.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint(je),je.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint(je)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(t){let n=this.boundingSphere.center;if(Pn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Tr.setFromBufferAttribute(o),this.morphTargetsRelative?(je.addVectors(Pn.min,Tr.min),Pn.expandByPoint(je),je.addVectors(Pn.max,Tr.max),Pn.expandByPoint(je)):(Pn.expandByPoint(Tr.min),Pn.expandByPoint(Tr.max))}Pn.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)je.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(je));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)je.fromBufferAttribute(o,c),l&&(Os.fromBufferAttribute(t,c),je.add(Os)),i=Math.max(i,n.distanceToSquared(je))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.array,i=e.position.array,r=e.normal.array,a=e.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new de(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let A=0;A<o;A++)c[A]=new U,h[A]=new U;let u=new U,f=new U,d=new U,g=new yt,x=new yt,m=new yt,p=new U,y=new U;function v(A,H,J){u.fromArray(i,A*3),f.fromArray(i,H*3),d.fromArray(i,J*3),g.fromArray(a,A*2),x.fromArray(a,H*2),m.fromArray(a,J*2),f.sub(u),d.sub(u),x.sub(g),m.sub(g);let dt=1/(x.x*m.y-m.x*x.y);isFinite(dt)&&(p.copy(f).multiplyScalar(m.y).addScaledVector(d,-x.y).multiplyScalar(dt),y.copy(d).multiplyScalar(x.x).addScaledVector(f,-m.x).multiplyScalar(dt),c[A].add(p),c[H].add(p),c[J].add(p),h[A].add(y),h[H].add(y),h[J].add(y))}let w=this.groups;w.length===0&&(w=[{start:0,count:n.length}]);for(let A=0,H=w.length;A<H;++A){let J=w[A],dt=J.start,O=J.count;for(let W=dt,Q=dt+O;W<Q;W+=3)v(n[W+0],n[W+1],n[W+2])}let L=new U,T=new U,I=new U,k=new U;function b(A){I.fromArray(r,A*3),k.copy(I);let H=c[A];L.copy(H),L.sub(I.multiplyScalar(I.dot(H))).normalize(),T.crossVectors(k,H);let dt=T.dot(h[A])<0?-1:1;l[A*4]=L.x,l[A*4+1]=L.y,l[A*4+2]=L.z,l[A*4+3]=dt}for(let A=0,H=w.length;A<H;++A){let J=w[A],dt=J.start,O=J.count;for(let W=dt,Q=dt+O;W<Q;W+=3)b(n[W+0]),b(n[W+1]),b(n[W+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new de(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new U,r=new U,a=new U,o=new U,l=new U,c=new U,h=new U,u=new U;if(t)for(let f=0,d=t.count;f<d;f+=3){let g=t.getX(f+0),x=t.getX(f+1),m=t.getX(f+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)je.fromBufferAttribute(t,e),je.normalize(),t.setXYZ(e,je.x,je.y,je.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h),d=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?d=l[x]*o.data.stride+o.offset:d=l[x]*h;for(let p=0;p<h;p++)f[g++]=c[d++]}return new de(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},mu=new fe,ts=new ja,ba=new Wi,gu=new U,zs=new U,Bs=new U,ks=new U,Tl=new U,Sa=new U,Ea=new yt,wa=new yt,Ta=new yt,xu=new U,_u=new U,vu=new U,Aa=new U,Ra=new U,oe=class extends Xe{constructor(t=new _e,e=new hn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let o=this.morphTargetInfluences;if(r&&o){Sa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Tl.fromBufferAttribute(u,t),a?Sa.addScaledVector(Tl,h):Sa.addScaledVector(Tl.sub(e),h))}e.add(Sa)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ba.copy(n.boundingSphere),ba.applyMatrix4(r),ts.copy(t.ray).recast(t.near),!(ba.containsPoint(ts.origin)===!1&&(ts.intersectSphere(ba,gu)===null||ts.origin.distanceToSquared(gu)>(t.far-t.near)**2))&&(mu.copy(r).invert(),ts.copy(t.ray).applyMatrix4(mu),!(n.boundingBox!==null&&ts.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ts)))}_computeIntersections(t,e,n){let i,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=a[m.materialIndex],y=Math.max(m.start,d.start),v=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let w=y,L=v;w<L;w+=3){let T=o.getX(w),I=o.getX(w+1),k=o.getX(w+2);i=Ca(this,p,t,n,c,h,u,T,I,k),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,d.start),x=Math.min(o.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let y=o.getX(m),v=o.getX(m+1),w=o.getX(m+2);i=Ca(this,a,t,n,c,h,u,y,v,w),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=a[m.materialIndex],y=Math.max(m.start,d.start),v=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let w=y,L=v;w<L;w+=3){let T=w,I=w+1,k=w+2;i=Ca(this,p,t,n,c,h,u,T,I,k),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let y=m,v=m+1,w=m+2;i=Ca(this,a,t,n,c,h,u,y,v,w),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function Up(s,t,e,n,i,r,a,o){let l;if(t.side===pn?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===Vi,o),l===null)return null;Ra.copy(o),Ra.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Ra);return c<e.near||c>e.far?null:{distance:c,point:Ra.clone(),object:s}}function Ca(s,t,e,n,i,r,a,o,l,c){s.getVertexPosition(o,zs),s.getVertexPosition(l,Bs),s.getVertexPosition(c,ks);let h=Up(s,t,e,n,zs,Bs,ks,Aa);if(h){i&&(Ea.fromBufferAttribute(i,o),wa.fromBufferAttribute(i,l),Ta.fromBufferAttribute(i,c),h.uv=rs.getInterpolation(Aa,zs,Bs,ks,Ea,wa,Ta,new yt)),r&&(Ea.fromBufferAttribute(r,o),wa.fromBufferAttribute(r,l),Ta.fromBufferAttribute(r,c),h.uv1=rs.getInterpolation(Aa,zs,Bs,ks,Ea,wa,Ta,new yt),h.uv2=h.uv1),a&&(xu.fromBufferAttribute(a,o),_u.fromBufferAttribute(a,l),vu.fromBufferAttribute(a,c),h.normal=rs.getInterpolation(Aa,zs,Bs,ks,xu,_u,vu,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new U,materialIndex:0};rs.getNormal(zs,Bs,ks,u.normal),h.face=u}return h}var Un=class s extends _e{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new ae(c,3)),this.setAttribute("normal",new ae(h,3)),this.setAttribute("uv",new ae(u,2));function g(x,m,p,y,v,w,L,T,I,k,b){let A=w/I,H=L/k,J=w/2,dt=L/2,O=T/2,W=I+1,Q=k+1,it=0,K=0,nt=new U;for(let ct=0;ct<Q;ct++){let ft=ct*H-dt;for(let St=0;St<W;St++){let $=St*A-J;nt[x]=$*y,nt[m]=ft*v,nt[p]=O,c.push(nt.x,nt.y,nt.z),nt[x]=0,nt[m]=0,nt[p]=T>0?1:-1,h.push(nt.x,nt.y,nt.z),u.push(St/I),u.push(1-ct/k),it+=1}}for(let ct=0;ct<k;ct++)for(let ft=0;ft<I;ft++){let St=f+ft+W*ct,$=f+ft+W*(ct+1),st=f+(ft+1)+W*(ct+1),Mt=f+(ft+1)+W*ct;l.push(St,$,Mt),l.push($,st,Mt),K+=6}o.addGroup(d,K,b),d+=K,f+=it}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ir(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Mn(s){let t={};for(let e=0;e<s.length;e++){let n=ir(s[e]);for(let i in n)t[i]=n[i]}return t}function Np(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function uf(s){return s.getRenderTarget()===null?s.outputColorSpace:ve.workingColorSpace}var Fp={clone:ir,merge:Mn},Op=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ge=class extends Mi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Op,this.fragmentShader=zp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ir(t.uniforms),this.uniformsGroups=Np(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},io=class extends Xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fe,this.projectionMatrix=new fe,this.projectionMatrixInverse=new fe,this.coordinateSystem=_i}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},cn=class extends io{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Za*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(cl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Za*2*Math.atan(Math.tan(cl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(cl*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Hs=-90,Vs=1,Zl=class extends Xe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new cn(Hs,Vs,t,e);i.layers=this.layers,this.add(i);let r=new cn(Hs,Vs,t,e);r.layers=this.layers,this.add(r);let a=new cn(Hs,Vs,t,e);a.layers=this.layers,this.add(a);let o=new cn(Hs,Vs,t,e);o.layers=this.layers,this.add(o);let l=new cn(Hs,Vs,t,e);l.layers=this.layers,this.add(l);let c=new cn(Hs,Vs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===_i)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ya)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},so=class extends Ln{constructor(t,e,n,i,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:tr,super(t,e,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Jl=class extends In{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(Ir("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===ls?Ne:zn),this.texture=new so(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:bn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Un(5,5,5),r=new Ge({name:"CubemapFromEquirect",uniforms:ir(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:pn,blending:Bi});r.uniforms.tEquirect.value=e;let a=new oe(i,r),o=e.minFilter;return e.minFilter===Fr&&(e.minFilter=bn),new Zl(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}},Al=new U,Bp=new U,kp=new re,gi=class{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Al.subVectors(n,e).cross(Bp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Al),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||kp.getNormalMatrix(t),i=this.coplanarPoint(Al).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},es=new Wi,Pa=new U,Or=class{constructor(t=new gi,e=new gi,n=new gi,i=new gi,r=new gi,a=new gi){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=_i){let n=this.planes,i=t.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],f=i[7],d=i[8],g=i[9],x=i[10],m=i[11],p=i[12],y=i[13],v=i[14],w=i[15];if(n[0].setComponents(l-r,f-c,m-d,w-p).normalize(),n[1].setComponents(l+r,f+c,m+d,w+p).normalize(),n[2].setComponents(l+a,f+h,m+g,w+y).normalize(),n[3].setComponents(l-a,f-h,m-g,w-y).normalize(),n[4].setComponents(l-o,f-u,m-x,w-v).normalize(),e===_i)n[5].setComponents(l+o,f+u,m+x,w+v).normalize();else if(e===Ya)n[5].setComponents(o,u,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),es.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),es.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(es)}intersectsSprite(t){return es.center.set(0,0,0),es.radius=.7071067811865476,es.applyMatrix4(t.matrixWorld),this.intersectsSphere(es)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Pa.x=i.normal.x>0?t.max.x:t.min.x,Pa.y=i.normal.y>0?t.max.y:t.min.y,Pa.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Pa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function ff(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Hp(s,t){let e=t.isWebGL2,n=new WeakMap;function i(c,h){let u=c.array,f=c.usage,d=u.byteLength,g=s.createBuffer();s.bindBuffer(h,g),s.bufferData(h,u,f),c.onUploadCallback();let x;if(u instanceof Float32Array)x=s.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)x=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)x=s.SHORT;else if(u instanceof Uint32Array)x=s.UNSIGNED_INT;else if(u instanceof Int32Array)x=s.INT;else if(u instanceof Int8Array)x=s.BYTE;else if(u instanceof Uint8Array)x=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)x=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:x,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:d}}function r(c,h,u){let f=h.array,d=h._updateRange,g=h.updateRanges;if(s.bindBuffer(u,c),d.count===-1&&g.length===0&&s.bufferSubData(u,0,f),g.length!==0){for(let x=0,m=g.length;x<m;x++){let p=g[x];e?s.bufferSubData(u,p.start*f.BYTES_PER_ELEMENT,f,p.start,p.count):s.bufferSubData(u,p.start*f.BYTES_PER_ELEMENT,f.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}d.count!==-1&&(e?s.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):s.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(s.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=n.get(c);if(u===void 0)n.set(c,i(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:a,remove:o,update:l}}var $l=class s extends _e{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=t/o,f=e/l,d=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let y=p*f-a;for(let v=0;v<c;v++){let w=v*u-r;g.push(w,-y,0),x.push(0,0,1),m.push(v/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){let v=y+c*p,w=y+c*(p+1),L=y+1+c*(p+1),T=y+1+c*p;d.push(v,w,T),d.push(w,L,T)}this.setIndex(d),this.setAttribute("position",new ae(g,3)),this.setAttribute("normal",new ae(x,3)),this.setAttribute("uv",new ae(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},Vp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gp=`#ifdef USE_ALPHAHASH
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
#endif`,Wp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Yp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zp=`#ifdef USE_AOMAP
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
#endif`,Jp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$p=`#ifdef USE_BATCHING
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
#endif`,Kp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Qp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,em=`#ifdef USE_IRIDESCENCE
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
#endif`,nm=`#ifdef USE_BUMPMAP
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
#endif`,im=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,sm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,am=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,om=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,lm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,hm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,um=`#define PI 3.141592653589793
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
} // validated`,fm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,dm=`vec3 transformedNormal = objectNormal;
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
#endif`,pm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_m="gl_FragColor = linearToOutputTexel( gl_FragColor );",vm=`
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
}`,ym=`#ifdef USE_ENVMAP
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
#endif`,Mm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bm=`#ifdef USE_ENVMAP
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
#endif`,Sm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Em=`#ifdef USE_ENVMAP
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
#endif`,wm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Tm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Am=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cm=`#ifdef USE_GRADIENTMAP
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
}`,Pm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Lm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Im=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Um=`uniform bool receiveShadow;
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
#endif`,Nm=`#ifdef USE_ENVMAP
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
#endif`,Fm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Om=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,km=`PhysicalMaterial material;
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
#endif`,Hm=`struct PhysicalMaterial {
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
}`,Vm=`
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
#endif`,Gm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Wm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ym=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Zm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Jm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$m=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Km=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Qm=`#if defined( USE_POINTS_UV )
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
#endif`,jm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,t0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,e0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,n0=`#ifdef USE_MORPHNORMALS
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
#endif`,i0=`#ifdef USE_MORPHTARGETS
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
#endif`,s0=`#ifdef USE_MORPHTARGETS
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
#endif`,r0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,a0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,o0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,l0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,c0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,h0=`#ifdef USE_NORMALMAP
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
#endif`,u0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,f0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,d0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,p0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,m0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,g0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,x0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,v0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,y0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,M0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,b0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,S0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,E0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,w0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,T0=`float getShadowMask() {
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
}`,A0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,R0=`#ifdef USE_SKINNING
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
#endif`,C0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,P0=`#ifdef USE_SKINNING
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
#endif`,L0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,I0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,D0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,U0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,N0=`#ifdef USE_TRANSMISSION
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
#endif`,F0=`#ifdef USE_TRANSMISSION
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
#endif`,O0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,z0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,B0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,k0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,H0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,V0=`uniform sampler2D t2D;
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
}`,G0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,W0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,X0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,q0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Y0=`#include <common>
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
}`,Z0=`#if DEPTH_PACKING == 3200
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
}`,J0=`#define DISTANCE
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
}`,$0=`#define DISTANCE
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
}`,K0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Q0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j0=`uniform float scale;
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
}`,tg=`uniform vec3 diffuse;
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
}`,eg=`#include <common>
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
}`,ng=`uniform vec3 diffuse;
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
}`,ig=`#define LAMBERT
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
}`,sg=`#define LAMBERT
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
}`,rg=`#define MATCAP
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
}`,ag=`#define MATCAP
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
}`,og=`#define NORMAL
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
}`,lg=`#define NORMAL
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
}`,cg=`#define PHONG
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
}`,hg=`#define PHONG
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
}`,ug=`#define STANDARD
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
}`,fg=`#define STANDARD
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
}`,dg=`#define TOON
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
}`,pg=`#define TOON
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
}`,mg=`uniform float size;
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
}`,gg=`uniform vec3 diffuse;
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
}`,xg=`#include <common>
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
}`,_g=`uniform vec3 color;
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
}`,vg=`uniform float rotation;
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
}`,yg=`uniform vec3 diffuse;
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
}`,se={alphahash_fragment:Vp,alphahash_pars_fragment:Gp,alphamap_fragment:Wp,alphamap_pars_fragment:Xp,alphatest_fragment:qp,alphatest_pars_fragment:Yp,aomap_fragment:Zp,aomap_pars_fragment:Jp,batching_pars_vertex:$p,batching_vertex:Kp,begin_vertex:Qp,beginnormal_vertex:jp,bsdfs:tm,iridescence_fragment:em,bumpmap_pars_fragment:nm,clipping_planes_fragment:im,clipping_planes_pars_fragment:sm,clipping_planes_pars_vertex:rm,clipping_planes_vertex:am,color_fragment:om,color_pars_fragment:lm,color_pars_vertex:cm,color_vertex:hm,common:um,cube_uv_reflection_fragment:fm,defaultnormal_vertex:dm,displacementmap_pars_vertex:pm,displacementmap_vertex:mm,emissivemap_fragment:gm,emissivemap_pars_fragment:xm,colorspace_fragment:_m,colorspace_pars_fragment:vm,envmap_fragment:ym,envmap_common_pars_fragment:Mm,envmap_pars_fragment:bm,envmap_pars_vertex:Sm,envmap_physical_pars_fragment:Nm,envmap_vertex:Em,fog_vertex:wm,fog_pars_vertex:Tm,fog_fragment:Am,fog_pars_fragment:Rm,gradientmap_pars_fragment:Cm,lightmap_fragment:Pm,lightmap_pars_fragment:Lm,lights_lambert_fragment:Im,lights_lambert_pars_fragment:Dm,lights_pars_begin:Um,lights_toon_fragment:Fm,lights_toon_pars_fragment:Om,lights_phong_fragment:zm,lights_phong_pars_fragment:Bm,lights_physical_fragment:km,lights_physical_pars_fragment:Hm,lights_fragment_begin:Vm,lights_fragment_maps:Gm,lights_fragment_end:Wm,logdepthbuf_fragment:Xm,logdepthbuf_pars_fragment:qm,logdepthbuf_pars_vertex:Ym,logdepthbuf_vertex:Zm,map_fragment:Jm,map_pars_fragment:$m,map_particle_fragment:Km,map_particle_pars_fragment:Qm,metalnessmap_fragment:jm,metalnessmap_pars_fragment:t0,morphcolor_vertex:e0,morphnormal_vertex:n0,morphtarget_pars_vertex:i0,morphtarget_vertex:s0,normal_fragment_begin:r0,normal_fragment_maps:a0,normal_pars_fragment:o0,normal_pars_vertex:l0,normal_vertex:c0,normalmap_pars_fragment:h0,clearcoat_normal_fragment_begin:u0,clearcoat_normal_fragment_maps:f0,clearcoat_pars_fragment:d0,iridescence_pars_fragment:p0,opaque_fragment:m0,packing:g0,premultiplied_alpha_fragment:x0,project_vertex:_0,dithering_fragment:v0,dithering_pars_fragment:y0,roughnessmap_fragment:M0,roughnessmap_pars_fragment:b0,shadowmap_pars_fragment:S0,shadowmap_pars_vertex:E0,shadowmap_vertex:w0,shadowmask_pars_fragment:T0,skinbase_vertex:A0,skinning_pars_vertex:R0,skinning_vertex:C0,skinnormal_vertex:P0,specularmap_fragment:L0,specularmap_pars_fragment:I0,tonemapping_fragment:D0,tonemapping_pars_fragment:U0,transmission_fragment:N0,transmission_pars_fragment:F0,uv_pars_fragment:O0,uv_pars_vertex:z0,uv_vertex:B0,worldpos_vertex:k0,background_vert:H0,background_frag:V0,backgroundCube_vert:G0,backgroundCube_frag:W0,cube_vert:X0,cube_frag:q0,depth_vert:Y0,depth_frag:Z0,distanceRGBA_vert:J0,distanceRGBA_frag:$0,equirect_vert:K0,equirect_frag:Q0,linedashed_vert:j0,linedashed_frag:tg,meshbasic_vert:eg,meshbasic_frag:ng,meshlambert_vert:ig,meshlambert_frag:sg,meshmatcap_vert:rg,meshmatcap_frag:ag,meshnormal_vert:og,meshnormal_frag:lg,meshphong_vert:cg,meshphong_frag:hg,meshphysical_vert:ug,meshphysical_frag:fg,meshtoon_vert:dg,meshtoon_frag:pg,points_vert:mg,points_frag:gg,shadow_vert:xg,shadow_frag:_g,sprite_vert:vg,sprite_frag:yg},xt={common:{diffuse:{value:new It(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new re}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new re}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new re}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new re},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new re},normalScale:{value:new yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new re},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new re}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new re}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new re}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new It(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new It(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0},uvTransform:{value:new re}},sprite:{diffuse:{value:new It(16777215)},opacity:{value:1},center:{value:new yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}}},jn={basic:{uniforms:Mn([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.fog]),vertexShader:se.meshbasic_vert,fragmentShader:se.meshbasic_frag},lambert:{uniforms:Mn([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new It(0)}}]),vertexShader:se.meshlambert_vert,fragmentShader:se.meshlambert_frag},phong:{uniforms:Mn([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new It(0)},specular:{value:new It(1118481)},shininess:{value:30}}]),vertexShader:se.meshphong_vert,fragmentShader:se.meshphong_frag},standard:{uniforms:Mn([xt.common,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.roughnessmap,xt.metalnessmap,xt.fog,xt.lights,{emissive:{value:new It(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag},toon:{uniforms:Mn([xt.common,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.gradientmap,xt.fog,xt.lights,{emissive:{value:new It(0)}}]),vertexShader:se.meshtoon_vert,fragmentShader:se.meshtoon_frag},matcap:{uniforms:Mn([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,{matcap:{value:null}}]),vertexShader:se.meshmatcap_vert,fragmentShader:se.meshmatcap_frag},points:{uniforms:Mn([xt.points,xt.fog]),vertexShader:se.points_vert,fragmentShader:se.points_frag},dashed:{uniforms:Mn([xt.common,xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:se.linedashed_vert,fragmentShader:se.linedashed_frag},depth:{uniforms:Mn([xt.common,xt.displacementmap]),vertexShader:se.depth_vert,fragmentShader:se.depth_frag},normal:{uniforms:Mn([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,{opacity:{value:1}}]),vertexShader:se.meshnormal_vert,fragmentShader:se.meshnormal_frag},sprite:{uniforms:Mn([xt.sprite,xt.fog]),vertexShader:se.sprite_vert,fragmentShader:se.sprite_frag},background:{uniforms:{uvTransform:{value:new re},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:se.background_vert,fragmentShader:se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:se.backgroundCube_vert,fragmentShader:se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:se.cube_vert,fragmentShader:se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:se.equirect_vert,fragmentShader:se.equirect_frag},distanceRGBA:{uniforms:Mn([xt.common,xt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:se.distanceRGBA_vert,fragmentShader:se.distanceRGBA_frag},shadow:{uniforms:Mn([xt.lights,xt.fog,{color:{value:new It(0)},opacity:{value:1}}]),vertexShader:se.shadow_vert,fragmentShader:se.shadow_frag}};jn.physical={uniforms:Mn([jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new re},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new re},clearcoatNormalScale:{value:new yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new re},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new re},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new re},sheen:{value:0},sheenColor:{value:new It(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new re},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new re},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new re},transmissionSamplerSize:{value:new yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new re},attenuationDistance:{value:0},attenuationColor:{value:new It(0)},specularColor:{value:new It(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new re},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new re},anisotropyVector:{value:new yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new re}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag};var La={r:0,b:0,g:0};function Mg(s,t,e,n,i,r,a){let o=new It(0),l=r===!0?0:1,c,h,u=null,f=0,d=null;function g(m,p){let y=!1,v=p.isScene===!0?p.background:null;v&&v.isTexture&&(v=(p.backgroundBlurriness>0?e:t).get(v)),v===null?x(o,l):v&&v.isColor&&(x(v,1),y=!0);let w=s.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||y)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Mo)?(h===void 0&&(h=new oe(new Un(1,1,1),new Ge({name:"BackgroundCubeMaterial",uniforms:ir(jn.backgroundCube.uniforms),vertexShader:jn.backgroundCube.vertexShader,fragmentShader:jn.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,T,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=ve.getTransfer(v.colorSpace)!==Re,(u!==v||f!==v.version||d!==s.toneMapping)&&(h.material.needsUpdate=!0,u=v,f=v.version,d=s.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new oe(new $l(2,2),new Ge({name:"BackgroundMaterial",uniforms:ir(jn.background.uniforms),vertexShader:jn.background.vertexShader,fragmentShader:jn.background.fragmentShader,side:Vi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=ve.getTransfer(v.colorSpace)!==Re,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,u=v,f=v.version,d=s.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function x(m,p){m.getRGB(La,uf(s)),n.buffers.color.setClear(La.r,La.g,La.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),l=p,x(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,x(o,l)},render:g}}function bg(s,t,e,n){let i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=m(null),c=l,h=!1;function u(O,W,Q,it,K){let nt=!1;if(a){let ct=x(it,Q,W);c!==ct&&(c=ct,d(c.object)),nt=p(O,it,Q,K),nt&&y(O,it,Q,K)}else{let ct=W.wireframe===!0;(c.geometry!==it.id||c.program!==Q.id||c.wireframe!==ct)&&(c.geometry=it.id,c.program=Q.id,c.wireframe=ct,nt=!0)}K!==null&&e.update(K,s.ELEMENT_ARRAY_BUFFER),(nt||h)&&(h=!1,k(O,W,Q,it),K!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function f(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function d(O){return n.isWebGL2?s.bindVertexArray(O):r.bindVertexArrayOES(O)}function g(O){return n.isWebGL2?s.deleteVertexArray(O):r.deleteVertexArrayOES(O)}function x(O,W,Q){let it=Q.wireframe===!0,K=o[O.id];K===void 0&&(K={},o[O.id]=K);let nt=K[W.id];nt===void 0&&(nt={},K[W.id]=nt);let ct=nt[it];return ct===void 0&&(ct=m(f()),nt[it]=ct),ct}function m(O){let W=[],Q=[],it=[];for(let K=0;K<i;K++)W[K]=0,Q[K]=0,it[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:Q,attributeDivisors:it,object:O,attributes:{},index:null}}function p(O,W,Q,it){let K=c.attributes,nt=W.attributes,ct=0,ft=Q.getAttributes();for(let St in ft)if(ft[St].location>=0){let st=K[St],Mt=nt[St];if(Mt===void 0&&(St==="instanceMatrix"&&O.instanceMatrix&&(Mt=O.instanceMatrix),St==="instanceColor"&&O.instanceColor&&(Mt=O.instanceColor)),st===void 0||st.attribute!==Mt||Mt&&st.data!==Mt.data)return!0;ct++}return c.attributesNum!==ct||c.index!==it}function y(O,W,Q,it){let K={},nt=W.attributes,ct=0,ft=Q.getAttributes();for(let St in ft)if(ft[St].location>=0){let st=nt[St];st===void 0&&(St==="instanceMatrix"&&O.instanceMatrix&&(st=O.instanceMatrix),St==="instanceColor"&&O.instanceColor&&(st=O.instanceColor));let Mt={};Mt.attribute=st,st&&st.data&&(Mt.data=st.data),K[St]=Mt,ct++}c.attributes=K,c.attributesNum=ct,c.index=it}function v(){let O=c.newAttributes;for(let W=0,Q=O.length;W<Q;W++)O[W]=0}function w(O){L(O,0)}function L(O,W){let Q=c.newAttributes,it=c.enabledAttributes,K=c.attributeDivisors;Q[O]=1,it[O]===0&&(s.enableVertexAttribArray(O),it[O]=1),K[O]!==W&&((n.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,W),K[O]=W)}function T(){let O=c.newAttributes,W=c.enabledAttributes;for(let Q=0,it=W.length;Q<it;Q++)W[Q]!==O[Q]&&(s.disableVertexAttribArray(Q),W[Q]=0)}function I(O,W,Q,it,K,nt,ct){ct===!0?s.vertexAttribIPointer(O,W,Q,K,nt):s.vertexAttribPointer(O,W,Q,it,K,nt)}function k(O,W,Q,it){if(n.isWebGL2===!1&&(O.isInstancedMesh||it.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;v();let K=it.attributes,nt=Q.getAttributes(),ct=W.defaultAttributeValues;for(let ft in nt){let St=nt[ft];if(St.location>=0){let $=K[ft];if($===void 0&&(ft==="instanceMatrix"&&O.instanceMatrix&&($=O.instanceMatrix),ft==="instanceColor"&&O.instanceColor&&($=O.instanceColor)),$!==void 0){let st=$.normalized,Mt=$.itemSize,At=e.get($);if(At===void 0)continue;let Lt=At.buffer,Kt=At.type,jt=At.bytesPerElement,Gt=n.isWebGL2===!0&&(Kt===s.INT||Kt===s.UNSIGNED_INT||$.gpuType===Qu);if($.isInterleavedBufferAttribute){let le=$.data,X=le.stride,Je=$.offset;if(le.isInstancedInterleavedBuffer){for(let zt=0;zt<St.locationSize;zt++)L(St.location+zt,le.meshPerAttribute);O.isInstancedMesh!==!0&&it._maxInstanceCount===void 0&&(it._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let zt=0;zt<St.locationSize;zt++)w(St.location+zt);s.bindBuffer(s.ARRAY_BUFFER,Lt);for(let zt=0;zt<St.locationSize;zt++)I(St.location+zt,Mt/St.locationSize,Kt,st,X*jt,(Je+Mt/St.locationSize*zt)*jt,Gt)}else{if($.isInstancedBufferAttribute){for(let le=0;le<St.locationSize;le++)L(St.location+le,$.meshPerAttribute);O.isInstancedMesh!==!0&&it._maxInstanceCount===void 0&&(it._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let le=0;le<St.locationSize;le++)w(St.location+le);s.bindBuffer(s.ARRAY_BUFFER,Lt);for(let le=0;le<St.locationSize;le++)I(St.location+le,Mt/St.locationSize,Kt,st,Mt*jt,Mt/St.locationSize*le*jt,Gt)}}else if(ct!==void 0){let st=ct[ft];if(st!==void 0)switch(st.length){case 2:s.vertexAttrib2fv(St.location,st);break;case 3:s.vertexAttrib3fv(St.location,st);break;case 4:s.vertexAttrib4fv(St.location,st);break;default:s.vertexAttrib1fv(St.location,st)}}}}T()}function b(){J();for(let O in o){let W=o[O];for(let Q in W){let it=W[Q];for(let K in it)g(it[K].object),delete it[K];delete W[Q]}delete o[O]}}function A(O){if(o[O.id]===void 0)return;let W=o[O.id];for(let Q in W){let it=W[Q];for(let K in it)g(it[K].object),delete it[K];delete W[Q]}delete o[O.id]}function H(O){for(let W in o){let Q=o[W];if(Q[O.id]===void 0)continue;let it=Q[O.id];for(let K in it)g(it[K].object),delete it[K];delete Q[O.id]}}function J(){dt(),h=!0,c!==l&&(c=l,d(c.object))}function dt(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:J,resetDefaultState:dt,dispose:b,releaseStatesOfGeometry:A,releaseStatesOfProgram:H,initAttributes:v,enableAttribute:w,disableUnusedAttributes:T}}function Sg(s,t,e,n){let i=n.isWebGL2,r;function a(h){r=h}function o(h,u){s.drawArrays(r,h,u),e.update(u,r,1)}function l(h,u,f){if(f===0)return;let d,g;if(i)d=s,g="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[g](r,h,u,f),e.update(u,r,f)}function c(h,u,f){if(f===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<f;g++)this.render(h[g],u[g]);else{d.multiDrawArraysWEBGL(r,h,0,u,0,f);let g=0;for(let x=0;x<f;x++)g+=u[x];e.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function Eg(s,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let I=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(I){if(I==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext!="undefined"&&s.constructor.name==="WebGL2RenderingContext",o=e.precision!==void 0?e.precision:"highp",l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let c=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),p=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,w=a||t.has("OES_texture_float"),L=v&&w,T=a?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:y,vertexTextures:v,floatFragmentTextures:w,floatVertexTextures:L,maxSamples:T}}function wg(s){let t=this,e=null,n=0,i=!1,r=!1,a=new gi,o=new re,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{let y=r?0:n,v=y*4,w=p.clippingState||null;l.value=w,w=h(g,f,v,d);for(let L=0;L!==v;++L)w[L]=e[L];p.clippingState=w,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=d+x*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,w=d;v!==x;++v,w+=4)a.copy(u[v]).applyMatrix4(y,o),a.normal.toArray(m,w),m[w+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function Tg(s){let t=new WeakMap;function e(a,o){return o===kl?a.mapping=tr:o===Hl&&(a.mapping=er),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===kl||o===Hl)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Jl(l.height/2);return c.fromEquirectangularTexture(s,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){let o=a.target;o.removeEventListener("dispose",i);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var sr=class extends io{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Js=4,yu=[.125,.215,.35,.446,.526,.582],ss=20,Rl=new sr,Mu=new It,Cl=null,Pl=0,Ll=0,ns=(1+Math.sqrt(5))/2,Gs=1/ns,bu=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,ns,Gs),new U(0,ns,-Gs),new U(Gs,0,ns),new U(-Gs,0,ns),new U(ns,Gs,0),new U(-ns,Gs,0)],ro=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Cl=this._renderer.getRenderTarget(),Pl=this._renderer.getActiveCubeFace(),Ll=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Eu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Cl,Pl,Ll),t.scissorTest=!1,Ia(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===tr||t.mapping===er?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Cl=this._renderer.getRenderTarget(),Pl=this._renderer.getActiveCubeFace(),Ll=this._renderer.getActiveMipmapLevel();let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:bn,minFilter:bn,generateMipmaps:!1,type:hs,format:Xn,colorSpace:vi,depthBuffer:!1},i=Su(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Su(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ag(r)),this._blurMaterial=Rg(r,t,e)}return i}_compileMaterial(t){let e=new oe(this._lodPlanes[0],t);this._renderer.compile(e,Rl)}_sceneToCubeUV(t,e,n,i){let o=new cn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Mu),h.toneMapping=ki,h.autoClear=!1;let d=new hn({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1}),g=new oe(new Un,d),x=!1,m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,x=!0):(d.color.copy(Mu),x=!0);for(let p=0;p<6;p++){let y=p%3;y===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):y===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));let v=this._cubeSize;Ia(i,y*v,p>2?v:0,v,v),h.setRenderTarget(i),x&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===tr||t.mapping===er;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=wu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Eu());let r=i?this._cubemapMaterial:this._equirectMaterial,a=new oe(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Ia(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Rl)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=bu[(i-1)%bu.length];this._blur(t,i-1,i,r,a)}e.autoClear=n}_blur(t,e,n,i,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new oe(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*ss-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):ss;m>ss&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ss}`);let p=[],y=0;for(let I=0;I<ss;++I){let k=I/x,b=Math.exp(-k*k/2);p.push(b),I===0?y+=b:I<m&&(y+=2*b)}for(let I=0;I<p.length;I++)p[I]=p[I]/y;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-n;let w=this._sizeLods[i],L=3*w*(i>v-Js?i-v+Js:0),T=4*(this._cubeSize-w);Ia(e,L,T,3*w,2*w),l.setRenderTarget(e),l.render(u,Rl)}};function Ag(s){let t=[],e=[],n=[],i=s,r=s-Js+1+yu.length;for(let a=0;a<r;a++){let o=Math.pow(2,i);e.push(o);let l=1/o;a>s-Js?l=yu[a-s+Js-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,x=3,m=2,p=1,y=new Float32Array(x*g*d),v=new Float32Array(m*g*d),w=new Float32Array(p*g*d);for(let T=0;T<d;T++){let I=T%3*2/3-1,k=T>2?0:-1,b=[I,k,0,I+2/3,k,0,I+2/3,k+1,0,I,k,0,I+2/3,k+1,0,I,k+1,0];y.set(b,x*g*T),v.set(f,m*g*T);let A=[T,T,T,T,T,T];w.set(A,p*g*T)}let L=new _e;L.setAttribute("position",new de(y,x)),L.setAttribute("uv",new de(v,m)),L.setAttribute("faceIndex",new de(w,p)),t.push(L),i>Js&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Su(s,t,e){let n=new In(s,t,e);return n.texture.mapping=Mo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ia(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Rg(s,t,e){let n=new Float32Array(ss),i=new U(0,1,0);return new Ge({name:"SphericalGaussianBlur",defines:{n:ss,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Fc(),fragmentShader:`

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
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function Eu(){return new Ge({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fc(),fragmentShader:`

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
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function wu(){return new Ge({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function Fc(){return`

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
	`}function Cg(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===kl||l===Hl,h=l===tr||l===er;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=t.get(o);return e===null&&(e=new ro(s)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),t.set(o,u),u.texture}else{if(t.has(o))return t.get(o).texture;{let u=o.image;if(c&&u&&u.height>0||h&&u&&i(u)){e===null&&(e=new ro(s));let f=c?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,f),o.addEventListener("dispose",r),f.texture}else return null}}}return o}function i(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Pg(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){let i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Lg(s,t,e,n){let i={},r=new WeakMap;function a(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);for(let g in f.morphAttributes){let x=f.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)t.remove(x[m])}f.removeEventListener("dispose",a),delete i[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let g in f)t.update(f[g],s.ARRAY_BUFFER);let d=u.morphAttributes;for(let g in d){let x=d[g];for(let m=0,p=x.length;m<p;m++)t.update(x[m],s.ARRAY_BUFFER)}}function c(u){let f=[],d=u.index,g=u.attributes.position,x=0;if(d!==null){let y=d.array;x=d.version;for(let v=0,w=y.length;v<w;v+=3){let L=y[v+0],T=y[v+1],I=y[v+2];f.push(L,T,T,I,I,L)}}else if(g!==void 0){let y=g.array;x=g.version;for(let v=0,w=y.length/3-1;v<w;v+=3){let L=v+0,T=v+1,I=v+2;f.push(L,T,T,I,I,L)}}else return;let m=new(cf(f)?no:eo)(f,1);m.version=x;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Ig(s,t,e,n){let i=n.isWebGL2,r;function a(d){r=d}let o,l;function c(d){o=d.type,l=d.bytesPerElement}function h(d,g){s.drawElements(r,g,o,d*l),e.update(g,r,1)}function u(d,g,x){if(x===0)return;let m,p;if(i)m=s,p="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,g,o,d*l,x),e.update(g,r,x)}function f(d,g,x){if(x===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<x;p++)this.render(d[p]/l,g[p]);else{m.multiDrawElementsWEBGL(r,g,0,o,d,0,x);let p=0;for(let y=0;y<x;y++)p+=g[y];e.update(p,r,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function Dg(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Ug(s,t){return s[0]-t[0]}function Ng(s,t){return Math.abs(t[1])-Math.abs(s[1])}function Fg(s,t,e){let n={},i=new Float32Array(8),r=new WeakMap,a=new tn,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,u){let f=c.morphTargetInfluences;if(t.isWebGL2===!0){let d=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=d!==void 0?d.length:0,x=r.get(h);if(x===void 0||x.count!==g){let O=function(){J.dispose(),r.delete(h),h.removeEventListener("dispose",O)};x!==void 0&&x.texture.dispose();let y=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,w=h.morphAttributes.color!==void 0,L=h.morphAttributes.position||[],T=h.morphAttributes.normal||[],I=h.morphAttributes.color||[],k=0;y===!0&&(k=1),v===!0&&(k=2),w===!0&&(k=3);let b=h.attributes.position.count*k,A=1;b>t.maxTextureSize&&(A=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let H=new Float32Array(b*A*4*g),J=new Qa(H,b,A,g);J.type=zi,J.needsUpdate=!0;let dt=k*4;for(let W=0;W<g;W++){let Q=L[W],it=T[W],K=I[W],nt=b*A*4*W;for(let ct=0;ct<Q.count;ct++){let ft=ct*dt;y===!0&&(a.fromBufferAttribute(Q,ct),H[nt+ft+0]=a.x,H[nt+ft+1]=a.y,H[nt+ft+2]=a.z,H[nt+ft+3]=0),v===!0&&(a.fromBufferAttribute(it,ct),H[nt+ft+4]=a.x,H[nt+ft+5]=a.y,H[nt+ft+6]=a.z,H[nt+ft+7]=0),w===!0&&(a.fromBufferAttribute(K,ct),H[nt+ft+8]=a.x,H[nt+ft+9]=a.y,H[nt+ft+10]=a.z,H[nt+ft+11]=K.itemSize===4?a.w:1)}}x={count:g,texture:J,size:new yt(b,A)},r.set(h,x),h.addEventListener("dispose",O)}let m=0;for(let y=0;y<f.length;y++)m+=f[y];let p=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(s,"morphTargetBaseInfluence",p),u.getUniforms().setValue(s,"morphTargetInfluences",f),u.getUniforms().setValue(s,"morphTargetsTexture",x.texture,e),u.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}else{let d=f===void 0?0:f.length,g=n[h.id];if(g===void 0||g.length!==d){g=[];for(let v=0;v<d;v++)g[v]=[v,0];n[h.id]=g}for(let v=0;v<d;v++){let w=g[v];w[0]=v,w[1]=f[v]}g.sort(Ng);for(let v=0;v<8;v++)v<d&&g[v][1]?(o[v][0]=g[v][0],o[v][1]=g[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(Ug);let x=h.morphAttributes.position,m=h.morphAttributes.normal,p=0;for(let v=0;v<8;v++){let w=o[v],L=w[0],T=w[1];L!==Number.MAX_SAFE_INTEGER&&T?(x&&h.getAttribute("morphTarget"+v)!==x[L]&&h.setAttribute("morphTarget"+v,x[L]),m&&h.getAttribute("morphNormal"+v)!==m[L]&&h.setAttribute("morphNormal"+v,m[L]),i[v]=T,p+=T):(x&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),m&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),i[v]=0)}let y=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(s,"morphTargetBaseInfluence",y),u.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function Og(s,t,e,n){let i=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function a(){i=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var ao=class extends Ln{constructor(t,e,n,i,r,a,o,l,c,h){if(h=h!==void 0?h:os,h!==os&&h!==nr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===os&&(n=Oi),n===void 0&&h===nr&&(n=as),super(null,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:on,this.minFilter=l!==void 0?l:on,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},df=new Ln,pf=new ao(1,1);pf.compareFunction=lf;var mf=new Qa,gf=new Yl,xf=new so,Tu=[],Au=[],Ru=new Float32Array(16),Cu=new Float32Array(9),Pu=new Float32Array(4);function hr(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=Tu[i];if(r===void 0&&(r=new Float32Array(i),Tu[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function qe(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Ye(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function So(s,t){let e=Au[t];e===void 0&&(e=new Int32Array(t),Au[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function zg(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Bg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;s.uniform2fv(this.addr,t),Ye(e,t)}}function kg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(qe(e,t))return;s.uniform3fv(this.addr,t),Ye(e,t)}}function Hg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;s.uniform4fv(this.addr,t),Ye(e,t)}}function Vg(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,n))return;Pu.set(n),s.uniformMatrix2fv(this.addr,!1,Pu),Ye(e,n)}}function Gg(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,n))return;Cu.set(n),s.uniformMatrix3fv(this.addr,!1,Cu),Ye(e,n)}}function Wg(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,n))return;Ru.set(n),s.uniformMatrix4fv(this.addr,!1,Ru),Ye(e,n)}}function Xg(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function qg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;s.uniform2iv(this.addr,t),Ye(e,t)}}function Yg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;s.uniform3iv(this.addr,t),Ye(e,t)}}function Zg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;s.uniform4iv(this.addr,t),Ye(e,t)}}function Jg(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function $g(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;s.uniform2uiv(this.addr,t),Ye(e,t)}}function Kg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;s.uniform3uiv(this.addr,t),Ye(e,t)}}function Qg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;s.uniform4uiv(this.addr,t),Ye(e,t)}}function jg(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r=this.type===s.SAMPLER_2D_SHADOW?pf:df;e.setTexture2D(t||r,i)}function tx(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||gf,i)}function ex(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||xf,i)}function nx(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||mf,i)}function ix(s){switch(s){case 5126:return zg;case 35664:return Bg;case 35665:return kg;case 35666:return Hg;case 35674:return Vg;case 35675:return Gg;case 35676:return Wg;case 5124:case 35670:return Xg;case 35667:case 35671:return qg;case 35668:case 35672:return Yg;case 35669:case 35673:return Zg;case 5125:return Jg;case 36294:return $g;case 36295:return Kg;case 36296:return Qg;case 35678:case 36198:case 36298:case 36306:case 35682:return jg;case 35679:case 36299:case 36307:return tx;case 35680:case 36300:case 36308:case 36293:return ex;case 36289:case 36303:case 36311:case 36292:return nx}}function sx(s,t){s.uniform1fv(this.addr,t)}function rx(s,t){let e=hr(t,this.size,2);s.uniform2fv(this.addr,e)}function ax(s,t){let e=hr(t,this.size,3);s.uniform3fv(this.addr,e)}function ox(s,t){let e=hr(t,this.size,4);s.uniform4fv(this.addr,e)}function lx(s,t){let e=hr(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function cx(s,t){let e=hr(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function hx(s,t){let e=hr(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function ux(s,t){s.uniform1iv(this.addr,t)}function fx(s,t){s.uniform2iv(this.addr,t)}function dx(s,t){s.uniform3iv(this.addr,t)}function px(s,t){s.uniform4iv(this.addr,t)}function mx(s,t){s.uniform1uiv(this.addr,t)}function gx(s,t){s.uniform2uiv(this.addr,t)}function xx(s,t){s.uniform3uiv(this.addr,t)}function _x(s,t){s.uniform4uiv(this.addr,t)}function vx(s,t,e){let n=this.cache,i=t.length,r=So(e,i);qe(n,r)||(s.uniform1iv(this.addr,r),Ye(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||df,r[a])}function yx(s,t,e){let n=this.cache,i=t.length,r=So(e,i);qe(n,r)||(s.uniform1iv(this.addr,r),Ye(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||gf,r[a])}function Mx(s,t,e){let n=this.cache,i=t.length,r=So(e,i);qe(n,r)||(s.uniform1iv(this.addr,r),Ye(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||xf,r[a])}function bx(s,t,e){let n=this.cache,i=t.length,r=So(e,i);qe(n,r)||(s.uniform1iv(this.addr,r),Ye(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||mf,r[a])}function Sx(s){switch(s){case 5126:return sx;case 35664:return rx;case 35665:return ax;case 35666:return ox;case 35674:return lx;case 35675:return cx;case 35676:return hx;case 5124:case 35670:return ux;case 35667:case 35671:return fx;case 35668:case 35672:return dx;case 35669:case 35673:return px;case 5125:return mx;case 36294:return gx;case 36295:return xx;case 36296:return _x;case 35678:case 36198:case 36298:case 36306:case 35682:return vx;case 35679:case 36299:case 36307:return yx;case 35680:case 36300:case 36308:case 36293:return Mx;case 36289:case 36303:case 36311:case 36292:return bx}}var Kl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ix(e.type)}},Ql=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Sx(e.type)}},jl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(t,e[o.id],n)}}},Il=/(\w+)(\])?(\[|\.)?/g;function Lu(s,t){s.seq.push(t),s.map[t.id]=t}function Ex(s,t,e){let n=s.name,i=n.length;for(Il.lastIndex=0;;){let r=Il.exec(n),a=Il.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Lu(e,c===void 0?new Kl(o,s,t):new Ql(o,s,t));break}else{let u=e.map[o];u===void 0&&(u=new jl(o),Lu(e,u)),e=u}}}var js=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);Ex(r,a,this)}}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let a=t[i];a.id in e&&n.push(a)}return n}};function Iu(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var wx=37297,Tx=0;function Ax(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function Rx(s){let t=ve.getPrimaries(ve.workingColorSpace),e=ve.getPrimaries(s),n;switch(t===e?n="":t===qa&&e===Xa?n="LinearDisplayP3ToLinearSRGB":t===Xa&&e===qa&&(n="LinearSRGBToLinearDisplayP3"),s){case vi:case bo:return[n,"LinearTransferOETF"];case Ne:case Nc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Du(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Ax(s.getShaderSource(t),a)}else return i}function Cx(s,t){let e=Rx(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Px(s,t){let e;switch(t){case Zd:e="Linear";break;case Jd:e="Reinhard";break;case $d:e="OptimizedCineon";break;case Kd:e="ACESFilmic";break;case jd:e="AgX";break;case Qd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Lx(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter($s).join(`
`)}function Ix(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter($s).join(`
`)}function Dx(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Ux(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function $s(s){return s!==""}function Uu(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Nu(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Nx=/^[ \t]*#include +<([\w\d./]+)>/gm;function tc(s){return s.replace(Nx,Ox)}var Fx=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Ox(s,t){let e=se[t];if(e===void 0){let n=Fx.get(t);if(n!==void 0)e=se[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return tc(e)}var zx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fu(s){return s.replace(zx,Bx)}function Bx(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Ou(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function kx(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===$u?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Ic?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===mi&&(t="SHADOWMAP_TYPE_VSM"),t}function Hx(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case tr:case er:t="ENVMAP_TYPE_CUBE";break;case Mo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Vx(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case er:t="ENVMAP_MODE_REFRACTION";break}return t}function Gx(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Dc:t="ENVMAP_BLENDING_MULTIPLY";break;case qd:t="ENVMAP_BLENDING_MIX";break;case Yd:t="ENVMAP_BLENDING_ADD";break}return t}function Wx(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Xx(s,t,e,n){let i=s.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=kx(e),c=Hx(e),h=Vx(e),u=Gx(e),f=Wx(e),d=e.isWebGL2?"":Lx(e),g=Ix(e),x=Dx(r),m=i.createProgram(),p,y,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter($s).join(`
`),p.length>0&&(p+=`
`),y=[d,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter($s).join(`
`),y.length>0&&(y+=`
`)):(p=[Ou(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($s).join(`
`),y=[d,Ou(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ki?"#define TONE_MAPPING":"",e.toneMapping!==ki?se.tonemapping_pars_fragment:"",e.toneMapping!==ki?Px("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",se.colorspace_pars_fragment,Cx("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter($s).join(`
`)),a=tc(a),a=Uu(a,e),a=Nu(a,e),o=tc(o),o=Uu(o,e),o=Nu(o,e),a=Fu(a),o=Fu(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,y=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===nu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===nu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);let w=v+p+a,L=v+y+o,T=Iu(i,i.VERTEX_SHADER,w),I=Iu(i,i.FRAGMENT_SHADER,L);i.attachShader(m,T),i.attachShader(m,I),e.index0AttributeName!==void 0?i.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function k(J){if(s.debug.checkShaderErrors){let dt=i.getProgramInfoLog(m).trim(),O=i.getShaderInfoLog(T).trim(),W=i.getShaderInfoLog(I).trim(),Q=!0,it=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(Q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,T,I);else{let K=Du(i,T,"vertex"),nt=Du(i,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+dt+`
`+K+`
`+nt)}else dt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",dt):(O===""||W==="")&&(it=!1);it&&(J.diagnostics={runnable:Q,programLog:dt,vertexShader:{log:O,prefix:p},fragmentShader:{log:W,prefix:y}})}i.deleteShader(T),i.deleteShader(I),b=new js(i,m),A=Ux(i,m)}let b;this.getUniforms=function(){return b===void 0&&k(this),b};let A;this.getAttributes=function(){return A===void 0&&k(this),A};let H=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return H===!1&&(H=i.getProgramParameter(m,wx)),H},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Tx++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=T,this.fragmentShader=I,this}var qx=0,ec=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new nc(t),e.set(t,n)),n}},nc=class{constructor(t){this.id=qx++,this.code=t,this.usedTimes=0}};function Yx(s,t,e,n,i,r,a){let o=new to,l=new ec,c=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,f=i.vertexTextures,d=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return b===0?"uv":`uv${b}`}function m(b,A,H,J,dt){let O=J.fog,W=dt.geometry,Q=b.isMeshStandardMaterial?J.environment:null,it=(b.isMeshStandardMaterial?e:t).get(b.envMap||Q),K=it&&it.mapping===Mo?it.image.height:null,nt=g[b.type];b.precision!==null&&(d=i.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));let ct=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ft=ct!==void 0?ct.length:0,St=0;W.morphAttributes.position!==void 0&&(St=1),W.morphAttributes.normal!==void 0&&(St=2),W.morphAttributes.color!==void 0&&(St=3);let $,st,Mt,At;if(nt){let $e=jn[nt];$=$e.vertexShader,st=$e.fragmentShader}else $=b.vertexShader,st=b.fragmentShader,l.update(b),Mt=l.getVertexShaderID(b),At=l.getFragmentShaderID(b);let Lt=s.getRenderTarget(),Kt=dt.isInstancedMesh===!0,jt=dt.isBatchedMesh===!0,Gt=!!b.map,le=!!b.matcap,X=!!it,Je=!!b.aoMap,zt=!!b.lightMap,Jt=!!b.bumpMap,Rt=!!b.normalMap,Ee=!!b.displacementMap,te=!!b.emissiveMap,P=!!b.metalnessMap,S=!!b.roughnessMap,q=b.anisotropy>0,ot=b.clearcoat>0,at=b.iridescence>0,ut=b.sheen>0,Ct=b.transmission>0,vt=q&&!!b.anisotropyMap,wt=ot&&!!b.clearcoatMap,Bt=ot&&!!b.clearcoatNormalMap,Wt=ot&&!!b.clearcoatRoughnessMap,rt=at&&!!b.iridescenceMap,he=at&&!!b.iridescenceThicknessMap,ie=ut&&!!b.sheenColorMap,Zt=ut&&!!b.sheenRoughnessMap,Nt=!!b.specularMap,Tt=!!b.specularColorMap,ee=!!b.specularIntensityMap,ue=Ct&&!!b.transmissionMap,Le=Ct&&!!b.thicknessMap,Pt=!!b.gradientMap,mt=!!b.alphaMap,N=b.alphaTest>0,_t=!!b.alphaHash,gt=!!b.extensions,Vt=!!W.attributes.uv1,Ot=!!W.attributes.uv2,me=!!W.attributes.uv3,ge=ki;return b.toneMapped&&(Lt===null||Lt.isXRRenderTarget===!0)&&(ge=s.toneMapping),{isWebGL2:h,shaderID:nt,shaderType:b.type,shaderName:b.name,vertexShader:$,fragmentShader:st,defines:b.defines,customVertexShaderID:Mt,customFragmentShaderID:At,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:jt,instancing:Kt,instancingColor:Kt&&dt.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:Lt===null?s.outputColorSpace:Lt.isXRRenderTarget===!0?Lt.texture.colorSpace:vi,map:Gt,matcap:le,envMap:X,envMapMode:X&&it.mapping,envMapCubeUVHeight:K,aoMap:Je,lightMap:zt,bumpMap:Jt,normalMap:Rt,displacementMap:f&&Ee,emissiveMap:te,normalMapObjectSpace:Rt&&b.normalMapType===up,normalMapTangentSpace:Rt&&b.normalMapType===of,metalnessMap:P,roughnessMap:S,anisotropy:q,anisotropyMap:vt,clearcoat:ot,clearcoatMap:wt,clearcoatNormalMap:Bt,clearcoatRoughnessMap:Wt,iridescence:at,iridescenceMap:rt,iridescenceThicknessMap:he,sheen:ut,sheenColorMap:ie,sheenRoughnessMap:Zt,specularMap:Nt,specularColorMap:Tt,specularIntensityMap:ee,transmission:Ct,transmissionMap:ue,thicknessMap:Le,gradientMap:Pt,opaque:b.transparent===!1&&b.blending===Ks,alphaMap:mt,alphaTest:N,alphaHash:_t,combine:b.combine,mapUv:Gt&&x(b.map.channel),aoMapUv:Je&&x(b.aoMap.channel),lightMapUv:zt&&x(b.lightMap.channel),bumpMapUv:Jt&&x(b.bumpMap.channel),normalMapUv:Rt&&x(b.normalMap.channel),displacementMapUv:Ee&&x(b.displacementMap.channel),emissiveMapUv:te&&x(b.emissiveMap.channel),metalnessMapUv:P&&x(b.metalnessMap.channel),roughnessMapUv:S&&x(b.roughnessMap.channel),anisotropyMapUv:vt&&x(b.anisotropyMap.channel),clearcoatMapUv:wt&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:Bt&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Wt&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:rt&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:he&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:ie&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:Zt&&x(b.sheenRoughnessMap.channel),specularMapUv:Nt&&x(b.specularMap.channel),specularColorMapUv:Tt&&x(b.specularColorMap.channel),specularIntensityMapUv:ee&&x(b.specularIntensityMap.channel),transmissionMapUv:ue&&x(b.transmissionMap.channel),thicknessMapUv:Le&&x(b.thicknessMap.channel),alphaMapUv:mt&&x(b.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Rt||q),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,vertexUv1s:Vt,vertexUv2s:Ot,vertexUv3s:me,pointsUvs:dt.isPoints===!0&&!!W.attributes.uv&&(Gt||mt),fog:!!O,useFog:b.fog===!0,fogExp2:O&&O.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:dt.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:ft,morphTextureStride:St,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&H.length>0,shadowMapType:s.shadowMap.type,toneMapping:ge,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Gt&&b.map.isVideoTexture===!0&&ve.getTransfer(b.map.colorSpace)===Re,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Sn,flipSided:b.side===pn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:gt&&b.extensions.derivatives===!0,extensionFragDepth:gt&&b.extensions.fragDepth===!0,extensionDrawBuffers:gt&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:gt&&b.extensions.shaderTextureLOD===!0,extensionClipCullDistance:gt&&b.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()}}function p(b){let A=[];if(b.shaderID?A.push(b.shaderID):(A.push(b.customVertexShaderID),A.push(b.customFragmentShaderID)),b.defines!==void 0)for(let H in b.defines)A.push(H),A.push(b.defines[H]);return b.isRawShaderMaterial===!1&&(y(A,b),v(A,b),A.push(s.outputColorSpace)),A.push(b.customProgramCacheKey),A.join()}function y(b,A){b.push(A.precision),b.push(A.outputColorSpace),b.push(A.envMapMode),b.push(A.envMapCubeUVHeight),b.push(A.mapUv),b.push(A.alphaMapUv),b.push(A.lightMapUv),b.push(A.aoMapUv),b.push(A.bumpMapUv),b.push(A.normalMapUv),b.push(A.displacementMapUv),b.push(A.emissiveMapUv),b.push(A.metalnessMapUv),b.push(A.roughnessMapUv),b.push(A.anisotropyMapUv),b.push(A.clearcoatMapUv),b.push(A.clearcoatNormalMapUv),b.push(A.clearcoatRoughnessMapUv),b.push(A.iridescenceMapUv),b.push(A.iridescenceThicknessMapUv),b.push(A.sheenColorMapUv),b.push(A.sheenRoughnessMapUv),b.push(A.specularMapUv),b.push(A.specularColorMapUv),b.push(A.specularIntensityMapUv),b.push(A.transmissionMapUv),b.push(A.thicknessMapUv),b.push(A.combine),b.push(A.fogExp2),b.push(A.sizeAttenuation),b.push(A.morphTargetsCount),b.push(A.morphAttributeCount),b.push(A.numDirLights),b.push(A.numPointLights),b.push(A.numSpotLights),b.push(A.numSpotLightMaps),b.push(A.numHemiLights),b.push(A.numRectAreaLights),b.push(A.numDirLightShadows),b.push(A.numPointLightShadows),b.push(A.numSpotLightShadows),b.push(A.numSpotLightShadowsWithMaps),b.push(A.numLightProbes),b.push(A.shadowMapType),b.push(A.toneMapping),b.push(A.numClippingPlanes),b.push(A.numClipIntersection),b.push(A.depthPacking)}function v(b,A){o.disableAll(),A.isWebGL2&&o.enable(0),A.supportsVertexTextures&&o.enable(1),A.instancing&&o.enable(2),A.instancingColor&&o.enable(3),A.matcap&&o.enable(4),A.envMap&&o.enable(5),A.normalMapObjectSpace&&o.enable(6),A.normalMapTangentSpace&&o.enable(7),A.clearcoat&&o.enable(8),A.iridescence&&o.enable(9),A.alphaTest&&o.enable(10),A.vertexColors&&o.enable(11),A.vertexAlphas&&o.enable(12),A.vertexUv1s&&o.enable(13),A.vertexUv2s&&o.enable(14),A.vertexUv3s&&o.enable(15),A.vertexTangents&&o.enable(16),A.anisotropy&&o.enable(17),A.alphaHash&&o.enable(18),A.batching&&o.enable(19),b.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.skinning&&o.enable(4),A.morphTargets&&o.enable(5),A.morphNormals&&o.enable(6),A.morphColors&&o.enable(7),A.premultipliedAlpha&&o.enable(8),A.shadowMapEnabled&&o.enable(9),A.useLegacyLights&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),b.push(o.mask)}function w(b){let A=g[b.type],H;if(A){let J=jn[A];H=Fp.clone(J.uniforms)}else H=b.uniforms;return H}function L(b,A){let H;for(let J=0,dt=c.length;J<dt;J++){let O=c[J];if(O.cacheKey===A){H=O,++H.usedTimes;break}}return H===void 0&&(H=new Xx(s,A,b,r),c.push(H)),H}function T(b){if(--b.usedTimes===0){let A=c.indexOf(b);c[A]=c[c.length-1],c.pop(),b.destroy()}}function I(b){l.remove(b)}function k(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:w,acquireProgram:L,releaseProgram:T,releaseShaderCache:I,programs:c,dispose:k}}function Zx(){let s=new WeakMap;function t(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function e(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function Jx(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function zu(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Bu(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(u,f,d,g,x,m){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},s[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),t++,p}function o(u,f,d,g,x,m){let p=a(u,f,d,g,x,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):e.push(p)}function l(u,f,d,g,x,m){let p=a(u,f,d,g,x,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):e.unshift(p)}function c(u,f){e.length>1&&e.sort(u||Jx),n.length>1&&n.sort(f||zu),i.length>1&&i.sort(f||zu)}function h(){for(let u=t,f=s.length;u<f;u++){let d=s[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function $x(){let s=new WeakMap;function t(n,i){let r=s.get(n),a;return r===void 0?(a=new Bu,s.set(n,[a])):i>=r.length?(a=new Bu,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function Kx(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new It};break;case"SpotLight":e={position:new U,direction:new U,color:new It,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new It,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new It,groundColor:new It};break;case"RectAreaLight":e={color:new It,position:new U,halfWidth:new U,halfHeight:new U};break}return s[t.id]=e,e}}}function Qx(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var jx=0;function t_(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function e_(s,t){let e=new Kx,n=Qx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new U);let r=new U,a=new fe,o=new fe;function l(h,u){let f=0,d=0,g=0;for(let J=0;J<9;J++)i.probe[J].set(0,0,0);let x=0,m=0,p=0,y=0,v=0,w=0,L=0,T=0,I=0,k=0,b=0;h.sort(t_);let A=u===!0?Math.PI:1;for(let J=0,dt=h.length;J<dt;J++){let O=h[J],W=O.color,Q=O.intensity,it=O.distance,K=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)f+=W.r*Q*A,d+=W.g*Q*A,g+=W.b*Q*A;else if(O.isLightProbe){for(let nt=0;nt<9;nt++)i.probe[nt].addScaledVector(O.sh.coefficients[nt],Q);b++}else if(O.isDirectionalLight){let nt=e.get(O);if(nt.color.copy(O.color).multiplyScalar(O.intensity*A),O.castShadow){let ct=O.shadow,ft=n.get(O);ft.shadowBias=ct.bias,ft.shadowNormalBias=ct.normalBias,ft.shadowRadius=ct.radius,ft.shadowMapSize=ct.mapSize,i.directionalShadow[x]=ft,i.directionalShadowMap[x]=K,i.directionalShadowMatrix[x]=O.shadow.matrix,w++}i.directional[x]=nt,x++}else if(O.isSpotLight){let nt=e.get(O);nt.position.setFromMatrixPosition(O.matrixWorld),nt.color.copy(W).multiplyScalar(Q*A),nt.distance=it,nt.coneCos=Math.cos(O.angle),nt.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),nt.decay=O.decay,i.spot[p]=nt;let ct=O.shadow;if(O.map&&(i.spotLightMap[I]=O.map,I++,ct.updateMatrices(O),O.castShadow&&k++),i.spotLightMatrix[p]=ct.matrix,O.castShadow){let ft=n.get(O);ft.shadowBias=ct.bias,ft.shadowNormalBias=ct.normalBias,ft.shadowRadius=ct.radius,ft.shadowMapSize=ct.mapSize,i.spotShadow[p]=ft,i.spotShadowMap[p]=K,T++}p++}else if(O.isRectAreaLight){let nt=e.get(O);nt.color.copy(W).multiplyScalar(Q),nt.halfWidth.set(O.width*.5,0,0),nt.halfHeight.set(0,O.height*.5,0),i.rectArea[y]=nt,y++}else if(O.isPointLight){let nt=e.get(O);if(nt.color.copy(O.color).multiplyScalar(O.intensity*A),nt.distance=O.distance,nt.decay=O.decay,O.castShadow){let ct=O.shadow,ft=n.get(O);ft.shadowBias=ct.bias,ft.shadowNormalBias=ct.normalBias,ft.shadowRadius=ct.radius,ft.shadowMapSize=ct.mapSize,ft.shadowCameraNear=ct.camera.near,ft.shadowCameraFar=ct.camera.far,i.pointShadow[m]=ft,i.pointShadowMap[m]=K,i.pointShadowMatrix[m]=O.shadow.matrix,L++}i.point[m]=nt,m++}else if(O.isHemisphereLight){let nt=e.get(O);nt.skyColor.copy(O.color).multiplyScalar(Q*A),nt.groundColor.copy(O.groundColor).multiplyScalar(Q*A),i.hemi[v]=nt,v++}}y>0&&(t.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=xt.LTC_FLOAT_1,i.rectAreaLTC2=xt.LTC_FLOAT_2):(i.rectAreaLTC1=xt.LTC_HALF_1,i.rectAreaLTC2=xt.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=xt.LTC_FLOAT_1,i.rectAreaLTC2=xt.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=xt.LTC_HALF_1,i.rectAreaLTC2=xt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=g;let H=i.hash;(H.directionalLength!==x||H.pointLength!==m||H.spotLength!==p||H.rectAreaLength!==y||H.hemiLength!==v||H.numDirectionalShadows!==w||H.numPointShadows!==L||H.numSpotShadows!==T||H.numSpotMaps!==I||H.numLightProbes!==b)&&(i.directional.length=x,i.spot.length=p,i.rectArea.length=y,i.point.length=m,i.hemi.length=v,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=L,i.pointShadowMap.length=L,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=L,i.spotLightMatrix.length=T+I-k,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=k,i.numLightProbes=b,H.directionalLength=x,H.pointLength=m,H.spotLength=p,H.rectAreaLength=y,H.hemiLength=v,H.numDirectionalShadows=w,H.numPointShadows=L,H.numSpotShadows=T,H.numSpotMaps=I,H.numLightProbes=b,i.version=jx++)}function c(h,u){let f=0,d=0,g=0,x=0,m=0,p=u.matrixWorldInverse;for(let y=0,v=h.length;y<v;y++){let w=h[y];if(w.isDirectionalLight){let L=i.directional[f];L.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),L.direction.sub(r),L.direction.transformDirection(p),f++}else if(w.isSpotLight){let L=i.spot[g];L.position.setFromMatrixPosition(w.matrixWorld),L.position.applyMatrix4(p),L.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),L.direction.sub(r),L.direction.transformDirection(p),g++}else if(w.isRectAreaLight){let L=i.rectArea[x];L.position.setFromMatrixPosition(w.matrixWorld),L.position.applyMatrix4(p),o.identity(),a.copy(w.matrixWorld),a.premultiply(p),o.extractRotation(a),L.halfWidth.set(w.width*.5,0,0),L.halfHeight.set(0,w.height*.5,0),L.halfWidth.applyMatrix4(o),L.halfHeight.applyMatrix4(o),x++}else if(w.isPointLight){let L=i.point[d];L.position.setFromMatrixPosition(w.matrixWorld),L.position.applyMatrix4(p),d++}else if(w.isHemisphereLight){let L=i.hemi[m];L.direction.setFromMatrixPosition(w.matrixWorld),L.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:i}}function ku(s,t){let e=new e_(s,t),n=[],i=[];function r(){n.length=0,i.length=0}function a(u){n.push(u)}function o(u){i.push(u)}function l(u){e.setup(n,u)}function c(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function n_(s,t){let e=new WeakMap;function n(r,a=0){let o=e.get(r),l;return o===void 0?(l=new ku(s,t),e.set(r,[l])):a>=o.length?(l=new ku(s,t),o.push(l)):l=o[a],l}function i(){e=new WeakMap}return{get:n,dispose:i}}var ic=class extends Mi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},sc=class extends Mi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},i_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,s_=`uniform sampler2D shadow_pass;
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
}`;function r_(s,t,e){let n=new Or,i=new yt,r=new yt,a=new tn,o=new ic({depthPacking:hp}),l=new sc,c={},h=e.maxTextureSize,u={[Vi]:pn,[pn]:Vi,[Sn]:Sn},f=new Ge({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new yt},radius:{value:4}},vertexShader:i_,fragmentShader:s_}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new _e;g.setAttribute("position",new de(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new oe(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$u;let p=this.type;this.render=function(T,I,k){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let b=s.getRenderTarget(),A=s.getActiveCubeFace(),H=s.getActiveMipmapLevel(),J=s.state;J.setBlending(Bi),J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);let dt=p!==mi&&this.type===mi,O=p===mi&&this.type!==mi;for(let W=0,Q=T.length;W<Q;W++){let it=T[W],K=it.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",it,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;i.copy(K.mapSize);let nt=K.getFrameExtents();if(i.multiply(nt),r.copy(K.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/nt.x),i.x=r.x*nt.x,K.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/nt.y),i.y=r.y*nt.y,K.mapSize.y=r.y)),K.map===null||dt===!0||O===!0){let ft=this.type!==mi?{minFilter:on,magFilter:on}:{};K.map!==null&&K.map.dispose(),K.map=new In(i.x,i.y,ft),K.map.texture.name=it.name+".shadowMap",K.camera.updateProjectionMatrix()}s.setRenderTarget(K.map),s.clear();let ct=K.getViewportCount();for(let ft=0;ft<ct;ft++){let St=K.getViewport(ft);a.set(r.x*St.x,r.y*St.y,r.x*St.z,r.y*St.w),J.viewport(a),K.updateMatrices(it,ft),n=K.getFrustum(),w(I,k,K.camera,it,this.type)}K.isPointLightShadow!==!0&&this.type===mi&&y(K,k),K.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(b,A,H)};function y(T,I){let k=t.update(x);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new In(i.x,i.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(I,null,k,f,x,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(I,null,k,d,x,null)}function v(T,I,k,b){let A=null,H=k.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(H!==void 0)A=H;else if(A=k.isPointLight===!0?l:o,s.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){let J=A.uuid,dt=I.uuid,O=c[J];O===void 0&&(O={},c[J]=O);let W=O[dt];W===void 0&&(W=A.clone(),O[dt]=W,I.addEventListener("dispose",L)),A=W}if(A.visible=I.visible,A.wireframe=I.wireframe,b===mi?A.side=I.shadowSide!==null?I.shadowSide:I.side:A.side=I.shadowSide!==null?I.shadowSide:u[I.side],A.alphaMap=I.alphaMap,A.alphaTest=I.alphaTest,A.map=I.map,A.clipShadows=I.clipShadows,A.clippingPlanes=I.clippingPlanes,A.clipIntersection=I.clipIntersection,A.displacementMap=I.displacementMap,A.displacementScale=I.displacementScale,A.displacementBias=I.displacementBias,A.wireframeLinewidth=I.wireframeLinewidth,A.linewidth=I.linewidth,k.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let J=s.properties.get(A);J.light=k}return A}function w(T,I,k,b,A){if(T.visible===!1)return;if(T.layers.test(I.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&A===mi)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,T.matrixWorld);let dt=t.update(T),O=T.material;if(Array.isArray(O)){let W=dt.groups;for(let Q=0,it=W.length;Q<it;Q++){let K=W[Q],nt=O[K.materialIndex];if(nt&&nt.visible){let ct=v(T,nt,b,A);T.onBeforeShadow(s,T,I,k,dt,ct,K),s.renderBufferDirect(k,null,dt,ct,T,K),T.onAfterShadow(s,T,I,k,dt,ct,K)}}}else if(O.visible){let W=v(T,O,b,A);T.onBeforeShadow(s,T,I,k,dt,W,null),s.renderBufferDirect(k,null,dt,W,T,null),T.onAfterShadow(s,T,I,k,dt,W,null)}}let J=T.children;for(let dt=0,O=J.length;dt<O;dt++)w(J[dt],I,k,b,A)}function L(T){T.target.removeEventListener("dispose",L);for(let k in c){let b=c[k],A=T.target.uuid;A in b&&(b[A].dispose(),delete b[A])}}}function a_(s,t,e){let n=e.isWebGL2;function i(){let N=!1,_t=new tn,gt=null,Vt=new tn(0,0,0,0);return{setMask:function(Ot){gt!==Ot&&!N&&(s.colorMask(Ot,Ot,Ot,Ot),gt=Ot)},setLocked:function(Ot){N=Ot},setClear:function(Ot,me,ge,ze,$e){$e===!0&&(Ot*=ze,me*=ze,ge*=ze),_t.set(Ot,me,ge,ze),Vt.equals(_t)===!1&&(s.clearColor(Ot,me,ge,ze),Vt.copy(_t))},reset:function(){N=!1,gt=null,Vt.set(-1,0,0,0)}}}function r(){let N=!1,_t=null,gt=null,Vt=null;return{setTest:function(Ot){Ot?jt(s.DEPTH_TEST):Gt(s.DEPTH_TEST)},setMask:function(Ot){_t!==Ot&&!N&&(s.depthMask(Ot),_t=Ot)},setFunc:function(Ot){if(gt!==Ot){switch(Ot){case Bd:s.depthFunc(s.NEVER);break;case kd:s.depthFunc(s.ALWAYS);break;case Hd:s.depthFunc(s.LESS);break;case Ha:s.depthFunc(s.LEQUAL);break;case Vd:s.depthFunc(s.EQUAL);break;case Gd:s.depthFunc(s.GEQUAL);break;case Wd:s.depthFunc(s.GREATER);break;case Xd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}gt=Ot}},setLocked:function(Ot){N=Ot},setClear:function(Ot){Vt!==Ot&&(s.clearDepth(Ot),Vt=Ot)},reset:function(){N=!1,_t=null,gt=null,Vt=null}}}function a(){let N=!1,_t=null,gt=null,Vt=null,Ot=null,me=null,ge=null,ze=null,$e=null;return{setTest:function(xe){N||(xe?jt(s.STENCIL_TEST):Gt(s.STENCIL_TEST))},setMask:function(xe){_t!==xe&&!N&&(s.stencilMask(xe),_t=xe)},setFunc:function(xe,rn,Rn){(gt!==xe||Vt!==rn||Ot!==Rn)&&(s.stencilFunc(xe,rn,Rn),gt=xe,Vt=rn,Ot=Rn)},setOp:function(xe,rn,Rn){(me!==xe||ge!==rn||ze!==Rn)&&(s.stencilOp(xe,rn,Rn),me=xe,ge=rn,ze=Rn)},setLocked:function(xe){N=xe},setClear:function(xe){$e!==xe&&(s.clearStencil(xe),$e=xe)},reset:function(){N=!1,_t=null,gt=null,Vt=null,Ot=null,me=null,ge=null,ze=null,$e=null}}}let o=new i,l=new r,c=new a,h=new WeakMap,u=new WeakMap,f={},d={},g=new WeakMap,x=[],m=null,p=!1,y=null,v=null,w=null,L=null,T=null,I=null,k=null,b=new It(0,0,0),A=0,H=!1,J=null,dt=null,O=null,W=null,Q=null,it=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),K=!1,nt=0,ct=s.getParameter(s.VERSION);ct.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(ct)[1]),K=nt>=1):ct.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(ct)[1]),K=nt>=2);let ft=null,St={},$=s.getParameter(s.SCISSOR_BOX),st=s.getParameter(s.VIEWPORT),Mt=new tn().fromArray($),At=new tn().fromArray(st);function Lt(N,_t,gt,Vt){let Ot=new Uint8Array(4),me=s.createTexture();s.bindTexture(N,me),s.texParameteri(N,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(N,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ge=0;ge<gt;ge++)n&&(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)?s.texImage3D(_t,0,s.RGBA,1,1,Vt,0,s.RGBA,s.UNSIGNED_BYTE,Ot):s.texImage2D(_t+ge,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ot);return me}let Kt={};Kt[s.TEXTURE_2D]=Lt(s.TEXTURE_2D,s.TEXTURE_2D,1),Kt[s.TEXTURE_CUBE_MAP]=Lt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Kt[s.TEXTURE_2D_ARRAY]=Lt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Kt[s.TEXTURE_3D]=Lt(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),jt(s.DEPTH_TEST),l.setFunc(Ha),te(!1),P(Mh),jt(s.CULL_FACE),Rt(Bi);function jt(N){f[N]!==!0&&(s.enable(N),f[N]=!0)}function Gt(N){f[N]!==!1&&(s.disable(N),f[N]=!1)}function le(N,_t){return d[N]!==_t?(s.bindFramebuffer(N,_t),d[N]=_t,n&&(N===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=_t),N===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=_t)),!0):!1}function X(N,_t){let gt=x,Vt=!1;if(N)if(gt=g.get(_t),gt===void 0&&(gt=[],g.set(_t,gt)),N.isWebGLMultipleRenderTargets){let Ot=N.texture;if(gt.length!==Ot.length||gt[0]!==s.COLOR_ATTACHMENT0){for(let me=0,ge=Ot.length;me<ge;me++)gt[me]=s.COLOR_ATTACHMENT0+me;gt.length=Ot.length,Vt=!0}}else gt[0]!==s.COLOR_ATTACHMENT0&&(gt[0]=s.COLOR_ATTACHMENT0,Vt=!0);else gt[0]!==s.BACK&&(gt[0]=s.BACK,Vt=!0);Vt&&(e.isWebGL2?s.drawBuffers(gt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(gt))}function Je(N){return m!==N?(s.useProgram(N),m=N,!0):!1}let zt={[is]:s.FUNC_ADD,[Ed]:s.FUNC_SUBTRACT,[wd]:s.FUNC_REVERSE_SUBTRACT};if(n)zt[Eh]=s.MIN,zt[wh]=s.MAX;else{let N=t.get("EXT_blend_minmax");N!==null&&(zt[Eh]=N.MIN_EXT,zt[wh]=N.MAX_EXT)}let Jt={[Td]:s.ZERO,[Ad]:s.ONE,[Rd]:s.SRC_COLOR,[zl]:s.SRC_ALPHA,[Ud]:s.SRC_ALPHA_SATURATE,[Id]:s.DST_COLOR,[Pd]:s.DST_ALPHA,[Cd]:s.ONE_MINUS_SRC_COLOR,[Bl]:s.ONE_MINUS_SRC_ALPHA,[Dd]:s.ONE_MINUS_DST_COLOR,[Ld]:s.ONE_MINUS_DST_ALPHA,[Nd]:s.CONSTANT_COLOR,[Fd]:s.ONE_MINUS_CONSTANT_COLOR,[Od]:s.CONSTANT_ALPHA,[zd]:s.ONE_MINUS_CONSTANT_ALPHA};function Rt(N,_t,gt,Vt,Ot,me,ge,ze,$e,xe){if(N===Bi){p===!0&&(Gt(s.BLEND),p=!1);return}if(p===!1&&(jt(s.BLEND),p=!0),N!==Sd){if(N!==y||xe!==H){if((v!==is||T!==is)&&(s.blendEquation(s.FUNC_ADD),v=is,T=is),xe)switch(N){case Ks:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case qn:s.blendFunc(s.ONE,s.ONE);break;case bh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Sh:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Ks:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case qn:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case bh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Sh:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}w=null,L=null,I=null,k=null,b.set(0,0,0),A=0,y=N,H=xe}return}Ot=Ot||_t,me=me||gt,ge=ge||Vt,(_t!==v||Ot!==T)&&(s.blendEquationSeparate(zt[_t],zt[Ot]),v=_t,T=Ot),(gt!==w||Vt!==L||me!==I||ge!==k)&&(s.blendFuncSeparate(Jt[gt],Jt[Vt],Jt[me],Jt[ge]),w=gt,L=Vt,I=me,k=ge),(ze.equals(b)===!1||$e!==A)&&(s.blendColor(ze.r,ze.g,ze.b,$e),b.copy(ze),A=$e),y=N,H=!1}function Ee(N,_t){N.side===Sn?Gt(s.CULL_FACE):jt(s.CULL_FACE);let gt=N.side===pn;_t&&(gt=!gt),te(gt),N.blending===Ks&&N.transparent===!1?Rt(Bi):Rt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),l.setFunc(N.depthFunc),l.setTest(N.depthTest),l.setMask(N.depthWrite),o.setMask(N.colorWrite);let Vt=N.stencilWrite;c.setTest(Vt),Vt&&(c.setMask(N.stencilWriteMask),c.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),c.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),q(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?jt(s.SAMPLE_ALPHA_TO_COVERAGE):Gt(s.SAMPLE_ALPHA_TO_COVERAGE)}function te(N){J!==N&&(N?s.frontFace(s.CW):s.frontFace(s.CCW),J=N)}function P(N){N!==Md?(jt(s.CULL_FACE),N!==dt&&(N===Mh?s.cullFace(s.BACK):N===bd?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Gt(s.CULL_FACE),dt=N}function S(N){N!==O&&(K&&s.lineWidth(N),O=N)}function q(N,_t,gt){N?(jt(s.POLYGON_OFFSET_FILL),(W!==_t||Q!==gt)&&(s.polygonOffset(_t,gt),W=_t,Q=gt)):Gt(s.POLYGON_OFFSET_FILL)}function ot(N){N?jt(s.SCISSOR_TEST):Gt(s.SCISSOR_TEST)}function at(N){N===void 0&&(N=s.TEXTURE0+it-1),ft!==N&&(s.activeTexture(N),ft=N)}function ut(N,_t,gt){gt===void 0&&(ft===null?gt=s.TEXTURE0+it-1:gt=ft);let Vt=St[gt];Vt===void 0&&(Vt={type:void 0,texture:void 0},St[gt]=Vt),(Vt.type!==N||Vt.texture!==_t)&&(ft!==gt&&(s.activeTexture(gt),ft=gt),s.bindTexture(N,_t||Kt[N]),Vt.type=N,Vt.texture=_t)}function Ct(){let N=St[ft];N!==void 0&&N.type!==void 0&&(s.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function vt(){try{s.compressedTexImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function wt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Bt(){try{s.texSubImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Wt(){try{s.texSubImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function rt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function he(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ie(){try{s.texStorage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Zt(){try{s.texStorage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Nt(){try{s.texImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Tt(){try{s.texImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ee(N){Mt.equals(N)===!1&&(s.scissor(N.x,N.y,N.z,N.w),Mt.copy(N))}function ue(N){At.equals(N)===!1&&(s.viewport(N.x,N.y,N.z,N.w),At.copy(N))}function Le(N,_t){let gt=u.get(_t);gt===void 0&&(gt=new WeakMap,u.set(_t,gt));let Vt=gt.get(N);Vt===void 0&&(Vt=s.getUniformBlockIndex(_t,N.name),gt.set(N,Vt))}function Pt(N,_t){let Vt=u.get(_t).get(N);h.get(_t)!==Vt&&(s.uniformBlockBinding(_t,Vt,N.__bindingPointIndex),h.set(_t,Vt))}function mt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},ft=null,St={},d={},g=new WeakMap,x=[],m=null,p=!1,y=null,v=null,w=null,L=null,T=null,I=null,k=null,b=new It(0,0,0),A=0,H=!1,J=null,dt=null,O=null,W=null,Q=null,Mt.set(0,0,s.canvas.width,s.canvas.height),At.set(0,0,s.canvas.width,s.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:jt,disable:Gt,bindFramebuffer:le,drawBuffers:X,useProgram:Je,setBlending:Rt,setMaterial:Ee,setFlipSided:te,setCullFace:P,setLineWidth:S,setPolygonOffset:q,setScissorTest:ot,activeTexture:at,bindTexture:ut,unbindTexture:Ct,compressedTexImage2D:vt,compressedTexImage3D:wt,texImage2D:Nt,texImage3D:Tt,updateUBOMapping:Le,uniformBlockBinding:Pt,texStorage2D:ie,texStorage3D:Zt,texSubImage2D:Bt,texSubImage3D:Wt,compressedTexSubImage2D:rt,compressedTexSubImage3D:he,scissor:ee,viewport:ue,reset:mt}}function o_(s,t,e,n,i,r,a){let o=i.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,S){return d?new OffscreenCanvas(P,S):Ja("canvas")}function x(P,S,q,ot){let at=1;if((P.width>ot||P.height>ot)&&(at=ot/Math.max(P.width,P.height)),at<1||S===!0)if(typeof HTMLImageElement!="undefined"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&P instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&P instanceof ImageBitmap){let ut=S?Xl:Math.floor,Ct=ut(at*P.width),vt=ut(at*P.height);u===void 0&&(u=g(Ct,vt));let wt=q?g(Ct,vt):u;return wt.width=Ct,wt.height=vt,wt.getContext("2d").drawImage(P,0,0,Ct,vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+Ct+"x"+vt+")."),wt}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function m(P){return iu(P.width)&&iu(P.height)}function p(P){return o?!1:P.wrapS!==Wn||P.wrapT!==Wn||P.minFilter!==on&&P.minFilter!==bn}function y(P,S){return P.generateMipmaps&&S&&P.minFilter!==on&&P.minFilter!==bn}function v(P){s.generateMipmap(P)}function w(P,S,q,ot,at=!1){if(o===!1)return S;if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ut=S;if(S===s.RED&&(q===s.FLOAT&&(ut=s.R32F),q===s.HALF_FLOAT&&(ut=s.R16F),q===s.UNSIGNED_BYTE&&(ut=s.R8)),S===s.RED_INTEGER&&(q===s.UNSIGNED_BYTE&&(ut=s.R8UI),q===s.UNSIGNED_SHORT&&(ut=s.R16UI),q===s.UNSIGNED_INT&&(ut=s.R32UI),q===s.BYTE&&(ut=s.R8I),q===s.SHORT&&(ut=s.R16I),q===s.INT&&(ut=s.R32I)),S===s.RG&&(q===s.FLOAT&&(ut=s.RG32F),q===s.HALF_FLOAT&&(ut=s.RG16F),q===s.UNSIGNED_BYTE&&(ut=s.RG8)),S===s.RGBA){let Ct=at?Wa:ve.getTransfer(ot);q===s.FLOAT&&(ut=s.RGBA32F),q===s.HALF_FLOAT&&(ut=s.RGBA16F),q===s.UNSIGNED_BYTE&&(ut=Ct===Re?s.SRGB8_ALPHA8:s.RGBA8),q===s.UNSIGNED_SHORT_4_4_4_4&&(ut=s.RGBA4),q===s.UNSIGNED_SHORT_5_5_5_1&&(ut=s.RGB5_A1)}return(ut===s.R16F||ut===s.R32F||ut===s.RG16F||ut===s.RG32F||ut===s.RGBA16F||ut===s.RGBA32F)&&t.get("EXT_color_buffer_float"),ut}function L(P,S,q){return y(P,q)===!0||P.isFramebufferTexture&&P.minFilter!==on&&P.minFilter!==bn?Math.log2(Math.max(S.width,S.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?S.mipmaps.length:1}function T(P){return P===on||P===Th||P===nl?s.NEAREST:s.LINEAR}function I(P){let S=P.target;S.removeEventListener("dispose",I),b(S),S.isVideoTexture&&h.delete(S)}function k(P){let S=P.target;S.removeEventListener("dispose",k),H(S)}function b(P){let S=n.get(P);if(S.__webglInit===void 0)return;let q=P.source,ot=f.get(q);if(ot){let at=ot[S.__cacheKey];at.usedTimes--,at.usedTimes===0&&A(P),Object.keys(ot).length===0&&f.delete(q)}n.remove(P)}function A(P){let S=n.get(P);s.deleteTexture(S.__webglTexture);let q=P.source,ot=f.get(q);delete ot[S.__cacheKey],a.memory.textures--}function H(P){let S=P.texture,q=n.get(P),ot=n.get(S);if(ot.__webglTexture!==void 0&&(s.deleteTexture(ot.__webglTexture),a.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let at=0;at<6;at++){if(Array.isArray(q.__webglFramebuffer[at]))for(let ut=0;ut<q.__webglFramebuffer[at].length;ut++)s.deleteFramebuffer(q.__webglFramebuffer[at][ut]);else s.deleteFramebuffer(q.__webglFramebuffer[at]);q.__webglDepthbuffer&&s.deleteRenderbuffer(q.__webglDepthbuffer[at])}else{if(Array.isArray(q.__webglFramebuffer))for(let at=0;at<q.__webglFramebuffer.length;at++)s.deleteFramebuffer(q.__webglFramebuffer[at]);else s.deleteFramebuffer(q.__webglFramebuffer);if(q.__webglDepthbuffer&&s.deleteRenderbuffer(q.__webglDepthbuffer),q.__webglMultisampledFramebuffer&&s.deleteFramebuffer(q.__webglMultisampledFramebuffer),q.__webglColorRenderbuffer)for(let at=0;at<q.__webglColorRenderbuffer.length;at++)q.__webglColorRenderbuffer[at]&&s.deleteRenderbuffer(q.__webglColorRenderbuffer[at]);q.__webglDepthRenderbuffer&&s.deleteRenderbuffer(q.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let at=0,ut=S.length;at<ut;at++){let Ct=n.get(S[at]);Ct.__webglTexture&&(s.deleteTexture(Ct.__webglTexture),a.memory.textures--),n.remove(S[at])}n.remove(S),n.remove(P)}let J=0;function dt(){J=0}function O(){let P=J;return P>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),J+=1,P}function W(P){let S=[];return S.push(P.wrapS),S.push(P.wrapT),S.push(P.wrapR||0),S.push(P.magFilter),S.push(P.minFilter),S.push(P.anisotropy),S.push(P.internalFormat),S.push(P.format),S.push(P.type),S.push(P.generateMipmaps),S.push(P.premultiplyAlpha),S.push(P.flipY),S.push(P.unpackAlignment),S.push(P.colorSpace),S.join()}function Q(P,S){let q=n.get(P);if(P.isVideoTexture&&Ee(P),P.isRenderTargetTexture===!1&&P.version>0&&q.__version!==P.version){let ot=P.image;if(ot===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ot.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Mt(q,P,S);return}}e.bindTexture(s.TEXTURE_2D,q.__webglTexture,s.TEXTURE0+S)}function it(P,S){let q=n.get(P);if(P.version>0&&q.__version!==P.version){Mt(q,P,S);return}e.bindTexture(s.TEXTURE_2D_ARRAY,q.__webglTexture,s.TEXTURE0+S)}function K(P,S){let q=n.get(P);if(P.version>0&&q.__version!==P.version){Mt(q,P,S);return}e.bindTexture(s.TEXTURE_3D,q.__webglTexture,s.TEXTURE0+S)}function nt(P,S){let q=n.get(P);if(P.version>0&&q.__version!==P.version){At(q,P,S);return}e.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture,s.TEXTURE0+S)}let ct={[cs]:s.REPEAT,[Wn]:s.CLAMP_TO_EDGE,[Vl]:s.MIRRORED_REPEAT},ft={[on]:s.NEAREST,[Th]:s.NEAREST_MIPMAP_NEAREST,[nl]:s.NEAREST_MIPMAP_LINEAR,[bn]:s.LINEAR,[tp]:s.LINEAR_MIPMAP_NEAREST,[Fr]:s.LINEAR_MIPMAP_LINEAR},St={[fp]:s.NEVER,[_p]:s.ALWAYS,[dp]:s.LESS,[lf]:s.LEQUAL,[pp]:s.EQUAL,[xp]:s.GEQUAL,[mp]:s.GREATER,[gp]:s.NOTEQUAL};function $(P,S,q){if(q?(s.texParameteri(P,s.TEXTURE_WRAP_S,ct[S.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,ct[S.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,ct[S.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,ft[S.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,ft[S.minFilter])):(s.texParameteri(P,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(P,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(S.wrapS!==Wn||S.wrapT!==Wn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(P,s.TEXTURE_MAG_FILTER,T(S.magFilter)),s.texParameteri(P,s.TEXTURE_MIN_FILTER,T(S.minFilter)),S.minFilter!==on&&S.minFilter!==bn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,St[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let ot=t.get("EXT_texture_filter_anisotropic");if(S.magFilter===on||S.minFilter!==nl&&S.minFilter!==Fr||S.type===zi&&t.has("OES_texture_float_linear")===!1||o===!1&&S.type===hs&&t.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(s.texParameterf(P,ot.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function st(P,S){let q=!1;P.__webglInit===void 0&&(P.__webglInit=!0,S.addEventListener("dispose",I));let ot=S.source,at=f.get(ot);at===void 0&&(at={},f.set(ot,at));let ut=W(S);if(ut!==P.__cacheKey){at[ut]===void 0&&(at[ut]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,q=!0),at[ut].usedTimes++;let Ct=at[P.__cacheKey];Ct!==void 0&&(at[P.__cacheKey].usedTimes--,Ct.usedTimes===0&&A(S)),P.__cacheKey=ut,P.__webglTexture=at[ut].texture}return q}function Mt(P,S,q){let ot=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ot=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ot=s.TEXTURE_3D);let at=st(P,S),ut=S.source;e.bindTexture(ot,P.__webglTexture,s.TEXTURE0+q);let Ct=n.get(ut);if(ut.version!==Ct.__version||at===!0){e.activeTexture(s.TEXTURE0+q);let vt=ve.getPrimaries(ve.workingColorSpace),wt=S.colorSpace===zn?null:ve.getPrimaries(S.colorSpace),Bt=S.colorSpace===zn||vt===wt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Bt);let Wt=p(S)&&m(S.image)===!1,rt=x(S.image,Wt,!1,i.maxTextureSize);rt=te(S,rt);let he=m(rt)||o,ie=r.convert(S.format,S.colorSpace),Zt=r.convert(S.type),Nt=w(S.internalFormat,ie,Zt,S.colorSpace,S.isVideoTexture);$(ot,S,he);let Tt,ee=S.mipmaps,ue=o&&S.isVideoTexture!==!0&&Nt!==rf,Le=Ct.__version===void 0||at===!0,Pt=L(S,rt,he);if(S.isDepthTexture)Nt=s.DEPTH_COMPONENT,o?S.type===zi?Nt=s.DEPTH_COMPONENT32F:S.type===Oi?Nt=s.DEPTH_COMPONENT24:S.type===as?Nt=s.DEPTH24_STENCIL8:Nt=s.DEPTH_COMPONENT16:S.type===zi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===os&&Nt===s.DEPTH_COMPONENT&&S.type!==Uc&&S.type!==Oi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=Oi,Zt=r.convert(S.type)),S.format===nr&&Nt===s.DEPTH_COMPONENT&&(Nt=s.DEPTH_STENCIL,S.type!==as&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=as,Zt=r.convert(S.type))),Le&&(ue?e.texStorage2D(s.TEXTURE_2D,1,Nt,rt.width,rt.height):e.texImage2D(s.TEXTURE_2D,0,Nt,rt.width,rt.height,0,ie,Zt,null));else if(S.isDataTexture)if(ee.length>0&&he){ue&&Le&&e.texStorage2D(s.TEXTURE_2D,Pt,Nt,ee[0].width,ee[0].height);for(let mt=0,N=ee.length;mt<N;mt++)Tt=ee[mt],ue?e.texSubImage2D(s.TEXTURE_2D,mt,0,0,Tt.width,Tt.height,ie,Zt,Tt.data):e.texImage2D(s.TEXTURE_2D,mt,Nt,Tt.width,Tt.height,0,ie,Zt,Tt.data);S.generateMipmaps=!1}else ue?(Le&&e.texStorage2D(s.TEXTURE_2D,Pt,Nt,rt.width,rt.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,rt.width,rt.height,ie,Zt,rt.data)):e.texImage2D(s.TEXTURE_2D,0,Nt,rt.width,rt.height,0,ie,Zt,rt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ue&&Le&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Pt,Nt,ee[0].width,ee[0].height,rt.depth);for(let mt=0,N=ee.length;mt<N;mt++)Tt=ee[mt],S.format!==Xn?ie!==null?ue?e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,mt,0,0,0,Tt.width,Tt.height,rt.depth,ie,Tt.data,0,0):e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,mt,Nt,Tt.width,Tt.height,rt.depth,0,Tt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ue?e.texSubImage3D(s.TEXTURE_2D_ARRAY,mt,0,0,0,Tt.width,Tt.height,rt.depth,ie,Zt,Tt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,mt,Nt,Tt.width,Tt.height,rt.depth,0,ie,Zt,Tt.data)}else{ue&&Le&&e.texStorage2D(s.TEXTURE_2D,Pt,Nt,ee[0].width,ee[0].height);for(let mt=0,N=ee.length;mt<N;mt++)Tt=ee[mt],S.format!==Xn?ie!==null?ue?e.compressedTexSubImage2D(s.TEXTURE_2D,mt,0,0,Tt.width,Tt.height,ie,Tt.data):e.compressedTexImage2D(s.TEXTURE_2D,mt,Nt,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ue?e.texSubImage2D(s.TEXTURE_2D,mt,0,0,Tt.width,Tt.height,ie,Zt,Tt.data):e.texImage2D(s.TEXTURE_2D,mt,Nt,Tt.width,Tt.height,0,ie,Zt,Tt.data)}else if(S.isDataArrayTexture)ue?(Le&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Pt,Nt,rt.width,rt.height,rt.depth),e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,ie,Zt,rt.data)):e.texImage3D(s.TEXTURE_2D_ARRAY,0,Nt,rt.width,rt.height,rt.depth,0,ie,Zt,rt.data);else if(S.isData3DTexture)ue?(Le&&e.texStorage3D(s.TEXTURE_3D,Pt,Nt,rt.width,rt.height,rt.depth),e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,ie,Zt,rt.data)):e.texImage3D(s.TEXTURE_3D,0,Nt,rt.width,rt.height,rt.depth,0,ie,Zt,rt.data);else if(S.isFramebufferTexture){if(Le)if(ue)e.texStorage2D(s.TEXTURE_2D,Pt,Nt,rt.width,rt.height);else{let mt=rt.width,N=rt.height;for(let _t=0;_t<Pt;_t++)e.texImage2D(s.TEXTURE_2D,_t,Nt,mt,N,0,ie,Zt,null),mt>>=1,N>>=1}}else if(ee.length>0&&he){ue&&Le&&e.texStorage2D(s.TEXTURE_2D,Pt,Nt,ee[0].width,ee[0].height);for(let mt=0,N=ee.length;mt<N;mt++)Tt=ee[mt],ue?e.texSubImage2D(s.TEXTURE_2D,mt,0,0,ie,Zt,Tt):e.texImage2D(s.TEXTURE_2D,mt,Nt,ie,Zt,Tt);S.generateMipmaps=!1}else ue?(Le&&e.texStorage2D(s.TEXTURE_2D,Pt,Nt,rt.width,rt.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,ie,Zt,rt)):e.texImage2D(s.TEXTURE_2D,0,Nt,ie,Zt,rt);y(S,he)&&v(ot),Ct.__version=ut.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function At(P,S,q){if(S.image.length!==6)return;let ot=st(P,S),at=S.source;e.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+q);let ut=n.get(at);if(at.version!==ut.__version||ot===!0){e.activeTexture(s.TEXTURE0+q);let Ct=ve.getPrimaries(ve.workingColorSpace),vt=S.colorSpace===zn?null:ve.getPrimaries(S.colorSpace),wt=S.colorSpace===zn||Ct===vt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);let Bt=S.isCompressedTexture||S.image[0].isCompressedTexture,Wt=S.image[0]&&S.image[0].isDataTexture,rt=[];for(let mt=0;mt<6;mt++)!Bt&&!Wt?rt[mt]=x(S.image[mt],!1,!0,i.maxCubemapSize):rt[mt]=Wt?S.image[mt].image:S.image[mt],rt[mt]=te(S,rt[mt]);let he=rt[0],ie=m(he)||o,Zt=r.convert(S.format,S.colorSpace),Nt=r.convert(S.type),Tt=w(S.internalFormat,Zt,Nt,S.colorSpace),ee=o&&S.isVideoTexture!==!0,ue=ut.__version===void 0||ot===!0,Le=L(S,he,ie);$(s.TEXTURE_CUBE_MAP,S,ie);let Pt;if(Bt){ee&&ue&&e.texStorage2D(s.TEXTURE_CUBE_MAP,Le,Tt,he.width,he.height);for(let mt=0;mt<6;mt++){Pt=rt[mt].mipmaps;for(let N=0;N<Pt.length;N++){let _t=Pt[N];S.format!==Xn?Zt!==null?ee?e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,N,0,0,_t.width,_t.height,Zt,_t.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,N,Tt,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ee?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,N,0,0,_t.width,_t.height,Zt,Nt,_t.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,N,Tt,_t.width,_t.height,0,Zt,Nt,_t.data)}}}else{Pt=S.mipmaps,ee&&ue&&(Pt.length>0&&Le++,e.texStorage2D(s.TEXTURE_CUBE_MAP,Le,Tt,rt[0].width,rt[0].height));for(let mt=0;mt<6;mt++)if(Wt){ee?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,rt[mt].width,rt[mt].height,Zt,Nt,rt[mt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,Tt,rt[mt].width,rt[mt].height,0,Zt,Nt,rt[mt].data);for(let N=0;N<Pt.length;N++){let gt=Pt[N].image[mt].image;ee?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,N+1,0,0,gt.width,gt.height,Zt,Nt,gt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,N+1,Tt,gt.width,gt.height,0,Zt,Nt,gt.data)}}else{ee?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,Zt,Nt,rt[mt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,Tt,Zt,Nt,rt[mt]);for(let N=0;N<Pt.length;N++){let _t=Pt[N];ee?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,N+1,0,0,Zt,Nt,_t.image[mt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,N+1,Tt,Zt,Nt,_t.image[mt])}}}y(S,ie)&&v(s.TEXTURE_CUBE_MAP),ut.__version=at.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function Lt(P,S,q,ot,at,ut){let Ct=r.convert(q.format,q.colorSpace),vt=r.convert(q.type),wt=w(q.internalFormat,Ct,vt,q.colorSpace);if(!n.get(S).__hasExternalTextures){let Wt=Math.max(1,S.width>>ut),rt=Math.max(1,S.height>>ut);at===s.TEXTURE_3D||at===s.TEXTURE_2D_ARRAY?e.texImage3D(at,ut,wt,Wt,rt,S.depth,0,Ct,vt,null):e.texImage2D(at,ut,wt,Wt,rt,0,Ct,vt,null)}e.bindFramebuffer(s.FRAMEBUFFER,P),Rt(S)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ot,at,n.get(q).__webglTexture,0,Jt(S)):(at===s.TEXTURE_2D||at>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&at<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ot,at,n.get(q).__webglTexture,ut),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Kt(P,S,q){if(s.bindRenderbuffer(s.RENDERBUFFER,P),S.depthBuffer&&!S.stencilBuffer){let ot=o===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(q||Rt(S)){let at=S.depthTexture;at&&at.isDepthTexture&&(at.type===zi?ot=s.DEPTH_COMPONENT32F:at.type===Oi&&(ot=s.DEPTH_COMPONENT24));let ut=Jt(S);Rt(S)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ut,ot,S.width,S.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,ut,ot,S.width,S.height)}else s.renderbufferStorage(s.RENDERBUFFER,ot,S.width,S.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,P)}else if(S.depthBuffer&&S.stencilBuffer){let ot=Jt(S);q&&Rt(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ot,s.DEPTH24_STENCIL8,S.width,S.height):Rt(S)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ot,s.DEPTH24_STENCIL8,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,P)}else{let ot=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let at=0;at<ot.length;at++){let ut=ot[at],Ct=r.convert(ut.format,ut.colorSpace),vt=r.convert(ut.type),wt=w(ut.internalFormat,Ct,vt,ut.colorSpace),Bt=Jt(S);q&&Rt(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Bt,wt,S.width,S.height):Rt(S)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Bt,wt,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,wt,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function jt(P,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,P),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Q(S.depthTexture,0);let ot=n.get(S.depthTexture).__webglTexture,at=Jt(S);if(S.depthTexture.format===os)Rt(S)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ot,0,at):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ot,0);else if(S.depthTexture.format===nr)Rt(S)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ot,0,at):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ot,0);else throw new Error("Unknown depthTexture format")}function Gt(P){let S=n.get(P),q=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!S.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");jt(S.__webglFramebuffer,P)}else if(q){S.__webglDepthbuffer=[];for(let ot=0;ot<6;ot++)e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[ot]),S.__webglDepthbuffer[ot]=s.createRenderbuffer(),Kt(S.__webglDepthbuffer[ot],P,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=s.createRenderbuffer(),Kt(S.__webglDepthbuffer,P,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function le(P,S,q){let ot=n.get(P);S!==void 0&&Lt(ot.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),q!==void 0&&Gt(P)}function X(P){let S=P.texture,q=n.get(P),ot=n.get(S);P.addEventListener("dispose",k),P.isWebGLMultipleRenderTargets!==!0&&(ot.__webglTexture===void 0&&(ot.__webglTexture=s.createTexture()),ot.__version=S.version,a.memory.textures++);let at=P.isWebGLCubeRenderTarget===!0,ut=P.isWebGLMultipleRenderTargets===!0,Ct=m(P)||o;if(at){q.__webglFramebuffer=[];for(let vt=0;vt<6;vt++)if(o&&S.mipmaps&&S.mipmaps.length>0){q.__webglFramebuffer[vt]=[];for(let wt=0;wt<S.mipmaps.length;wt++)q.__webglFramebuffer[vt][wt]=s.createFramebuffer()}else q.__webglFramebuffer[vt]=s.createFramebuffer()}else{if(o&&S.mipmaps&&S.mipmaps.length>0){q.__webglFramebuffer=[];for(let vt=0;vt<S.mipmaps.length;vt++)q.__webglFramebuffer[vt]=s.createFramebuffer()}else q.__webglFramebuffer=s.createFramebuffer();if(ut)if(i.drawBuffers){let vt=P.texture;for(let wt=0,Bt=vt.length;wt<Bt;wt++){let Wt=n.get(vt[wt]);Wt.__webglTexture===void 0&&(Wt.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&P.samples>0&&Rt(P)===!1){let vt=ut?S:[S];q.__webglMultisampledFramebuffer=s.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let wt=0;wt<vt.length;wt++){let Bt=vt[wt];q.__webglColorRenderbuffer[wt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,q.__webglColorRenderbuffer[wt]);let Wt=r.convert(Bt.format,Bt.colorSpace),rt=r.convert(Bt.type),he=w(Bt.internalFormat,Wt,rt,Bt.colorSpace,P.isXRRenderTarget===!0),ie=Jt(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,ie,he,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.RENDERBUFFER,q.__webglColorRenderbuffer[wt])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(q.__webglDepthRenderbuffer=s.createRenderbuffer(),Kt(q.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(at){e.bindTexture(s.TEXTURE_CUBE_MAP,ot.__webglTexture),$(s.TEXTURE_CUBE_MAP,S,Ct);for(let vt=0;vt<6;vt++)if(o&&S.mipmaps&&S.mipmaps.length>0)for(let wt=0;wt<S.mipmaps.length;wt++)Lt(q.__webglFramebuffer[vt][wt],P,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,wt);else Lt(q.__webglFramebuffer[vt],P,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0);y(S,Ct)&&v(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ut){let vt=P.texture;for(let wt=0,Bt=vt.length;wt<Bt;wt++){let Wt=vt[wt],rt=n.get(Wt);e.bindTexture(s.TEXTURE_2D,rt.__webglTexture),$(s.TEXTURE_2D,Wt,Ct),Lt(q.__webglFramebuffer,P,Wt,s.COLOR_ATTACHMENT0+wt,s.TEXTURE_2D,0),y(Wt,Ct)&&v(s.TEXTURE_2D)}e.unbindTexture()}else{let vt=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(o?vt=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(vt,ot.__webglTexture),$(vt,S,Ct),o&&S.mipmaps&&S.mipmaps.length>0)for(let wt=0;wt<S.mipmaps.length;wt++)Lt(q.__webglFramebuffer[wt],P,S,s.COLOR_ATTACHMENT0,vt,wt);else Lt(q.__webglFramebuffer,P,S,s.COLOR_ATTACHMENT0,vt,0);y(S,Ct)&&v(vt),e.unbindTexture()}P.depthBuffer&&Gt(P)}function Je(P){let S=m(P)||o,q=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let ot=0,at=q.length;ot<at;ot++){let ut=q[ot];if(y(ut,S)){let Ct=P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,vt=n.get(ut).__webglTexture;e.bindTexture(Ct,vt),v(Ct),e.unbindTexture()}}}function zt(P){if(o&&P.samples>0&&Rt(P)===!1){let S=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],q=P.width,ot=P.height,at=s.COLOR_BUFFER_BIT,ut=[],Ct=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,vt=n.get(P),wt=P.isWebGLMultipleRenderTargets===!0;if(wt)for(let Bt=0;Bt<S.length;Bt++)e.bindFramebuffer(s.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Bt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,vt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Bt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let Bt=0;Bt<S.length;Bt++){ut.push(s.COLOR_ATTACHMENT0+Bt),P.depthBuffer&&ut.push(Ct);let Wt=vt.__ignoreDepthValues!==void 0?vt.__ignoreDepthValues:!1;if(Wt===!1&&(P.depthBuffer&&(at|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&(at|=s.STENCIL_BUFFER_BIT)),wt&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,vt.__webglColorRenderbuffer[Bt]),Wt===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[Ct]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[Ct])),wt){let rt=n.get(S[Bt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,rt,0)}s.blitFramebuffer(0,0,q,ot,0,0,q,ot,at,s.NEAREST),c&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ut)}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),wt)for(let Bt=0;Bt<S.length;Bt++){e.bindFramebuffer(s.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Bt,s.RENDERBUFFER,vt.__webglColorRenderbuffer[Bt]);let Wt=n.get(S[Bt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,vt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Bt,s.TEXTURE_2D,Wt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}}function Jt(P){return Math.min(i.maxSamples,P.samples)}function Rt(P){let S=n.get(P);return o&&P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ee(P){let S=a.render.frame;h.get(P)!==S&&(h.set(P,S),P.update())}function te(P,S){let q=P.colorSpace,ot=P.format,at=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===Wl||q!==vi&&q!==zn&&(ve.getTransfer(q)===Re?o===!1?t.has("EXT_sRGB")===!0&&ot===Xn?(P.format=Wl,P.minFilter=bn,P.generateMipmaps=!1):S=$a.sRGBToLinear(S):(ot!==Xn||at!==ti)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),S}this.allocateTextureUnit=O,this.resetTextureUnits=dt,this.setTexture2D=Q,this.setTexture2DArray=it,this.setTexture3D=K,this.setTextureCube=nt,this.rebindTextures=le,this.setupRenderTarget=X,this.updateRenderTargetMipmap=Je,this.updateMultisampleRenderTarget=zt,this.setupDepthRenderbuffer=Gt,this.setupFrameBufferTexture=Lt,this.useMultisampledRTT=Rt}function l_(s,t,e){let n=e.isWebGL2;function i(r,a=zn){let o,l=ve.getTransfer(a);if(r===ti)return s.UNSIGNED_BYTE;if(r===ju)return s.UNSIGNED_SHORT_4_4_4_4;if(r===tf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===ep)return s.BYTE;if(r===np)return s.SHORT;if(r===Uc)return s.UNSIGNED_SHORT;if(r===Qu)return s.INT;if(r===Oi)return s.UNSIGNED_INT;if(r===zi)return s.FLOAT;if(r===hs)return n?s.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===ip)return s.ALPHA;if(r===Xn)return s.RGBA;if(r===sp)return s.LUMINANCE;if(r===rp)return s.LUMINANCE_ALPHA;if(r===os)return s.DEPTH_COMPONENT;if(r===nr)return s.DEPTH_STENCIL;if(r===Wl)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===ap)return s.RED;if(r===ef)return s.RED_INTEGER;if(r===op)return s.RG;if(r===nf)return s.RG_INTEGER;if(r===sf)return s.RGBA_INTEGER;if(r===il||r===sl||r===rl||r===al)if(l===Re)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===il)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===sl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===rl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===al)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===il)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===sl)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===rl)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===al)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ah||r===Rh||r===Ch||r===Ph)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Ah)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Rh)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ch)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ph)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===rf)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Lh||r===Ih)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Lh)return l===Re?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Ih)return l===Re?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Dh||r===Uh||r===Nh||r===Fh||r===Oh||r===zh||r===Bh||r===kh||r===Hh||r===Vh||r===Gh||r===Wh||r===Xh||r===qh)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Dh)return l===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Uh)return l===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Nh)return l===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Fh)return l===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Oh)return l===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===zh)return l===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Bh)return l===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===kh)return l===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Hh)return l===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Vh)return l===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Gh)return l===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Wh)return l===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Xh)return l===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===qh)return l===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ol||r===Yh||r===Zh)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===ol)return l===Re?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Yh)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Zh)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===lp||r===Jh||r===$h||r===Kh)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===ol)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Jh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===$h)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Kh)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===as?n?s.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}var rc=class extends cn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Fe=class extends Xe{constructor(){super(),this.isGroup=!0,this.type="Group"}},c_={type:"move"},Dr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(c_)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Fe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},ac=class extends Gi{constructor(t,e){super();let n=this,i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null,x=e.getContextAttributes(),m=null,p=null,y=[],v=[],w=new yt,L=null,T=new cn;T.layers.enable(1),T.viewport=new tn;let I=new cn;I.layers.enable(2),I.viewport=new tn;let k=[T,I],b=new rc;b.layers.enable(1),b.layers.enable(2);let A=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let st=y[$];return st===void 0&&(st=new Dr,y[$]=st),st.getTargetRaySpace()},this.getControllerGrip=function($){let st=y[$];return st===void 0&&(st=new Dr,y[$]=st),st.getGripSpace()},this.getHand=function($){let st=y[$];return st===void 0&&(st=new Dr,y[$]=st),st.getHandSpace()};function J($){let st=v.indexOf($.inputSource);if(st===-1)return;let Mt=y[st];Mt!==void 0&&(Mt.update($.inputSource,$.frame,c||a),Mt.dispatchEvent({type:$.type,data:$.inputSource}))}function dt(){i.removeEventListener("select",J),i.removeEventListener("selectstart",J),i.removeEventListener("selectend",J),i.removeEventListener("squeeze",J),i.removeEventListener("squeezestart",J),i.removeEventListener("squeezeend",J),i.removeEventListener("end",dt),i.removeEventListener("inputsourceschange",O);for(let $=0;$<y.length;$++){let st=v[$];st!==null&&(v[$]=null,y[$].disconnect(st))}A=null,H=null,t.setRenderTarget(m),d=null,f=null,u=null,i=null,p=null,St.stop(),n.isPresenting=!1,t.setPixelRatio(L),t.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",J),i.addEventListener("selectstart",J),i.addEventListener("selectend",J),i.addEventListener("squeeze",J),i.addEventListener("squeezestart",J),i.addEventListener("squeezeend",J),i.addEventListener("end",dt),i.addEventListener("inputsourceschange",O),x.xrCompatible!==!0&&await e.makeXRCompatible(),L=t.getPixelRatio(),t.getSize(w),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let st={antialias:i.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,e,st),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),p=new In(d.framebufferWidth,d.framebufferHeight,{format:Xn,type:ti,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil})}else{let st=null,Mt=null,At=null;x.depth&&(At=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,st=x.stencil?nr:os,Mt=x.stencil?as:Oi);let Lt={colorFormat:e.RGBA8,depthFormat:At,scaleFactor:r};u=new XRWebGLBinding(i,e),f=u.createProjectionLayer(Lt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),p=new In(f.textureWidth,f.textureHeight,{format:Xn,type:ti,depthTexture:new ao(f.textureWidth,f.textureHeight,Mt,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0});let Kt=t.properties.get(p);Kt.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),St.setContext(i),St.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function O($){for(let st=0;st<$.removed.length;st++){let Mt=$.removed[st],At=v.indexOf(Mt);At>=0&&(v[At]=null,y[At].disconnect(Mt))}for(let st=0;st<$.added.length;st++){let Mt=$.added[st],At=v.indexOf(Mt);if(At===-1){for(let Kt=0;Kt<y.length;Kt++)if(Kt>=v.length){v.push(Mt),At=Kt;break}else if(v[Kt]===null){v[Kt]=Mt,At=Kt;break}if(At===-1)break}let Lt=y[At];Lt&&Lt.connect(Mt)}}let W=new U,Q=new U;function it($,st,Mt){W.setFromMatrixPosition(st.matrixWorld),Q.setFromMatrixPosition(Mt.matrixWorld);let At=W.distanceTo(Q),Lt=st.projectionMatrix.elements,Kt=Mt.projectionMatrix.elements,jt=Lt[14]/(Lt[10]-1),Gt=Lt[14]/(Lt[10]+1),le=(Lt[9]+1)/Lt[5],X=(Lt[9]-1)/Lt[5],Je=(Lt[8]-1)/Lt[0],zt=(Kt[8]+1)/Kt[0],Jt=jt*Je,Rt=jt*zt,Ee=At/(-Je+zt),te=Ee*-Je;st.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(te),$.translateZ(Ee),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert();let P=jt+Ee,S=Gt+Ee,q=Jt-te,ot=Rt+(At-te),at=le*Gt/S*P,ut=X*Gt/S*P;$.projectionMatrix.makePerspective(q,ot,at,ut,P,S),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}function K($,st){st===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(st.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;b.near=I.near=T.near=$.near,b.far=I.far=T.far=$.far,(A!==b.near||H!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),A=b.near,H=b.far);let st=$.parent,Mt=b.cameras;K(b,st);for(let At=0;At<Mt.length;At++)K(Mt[At],st);Mt.length===2?it(b,T,I):b.projectionMatrix.copy(T.projectionMatrix),nt($,b,st)};function nt($,st,Mt){Mt===null?$.matrix.copy(st.matrixWorld):($.matrix.copy(Mt.matrixWorld),$.matrix.invert(),$.matrix.multiply(st.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(st.projectionMatrix),$.projectionMatrixInverse.copy(st.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Za*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function($){l=$,f!==null&&(f.fixedFoveation=$),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=$)};let ct=null;function ft($,st){if(h=st.getViewerPose(c||a),g=st,h!==null){let Mt=h.views;d!==null&&(t.setRenderTargetFramebuffer(p,d.framebuffer),t.setRenderTarget(p));let At=!1;Mt.length!==b.cameras.length&&(b.cameras.length=0,At=!0);for(let Lt=0;Lt<Mt.length;Lt++){let Kt=Mt[Lt],jt=null;if(d!==null)jt=d.getViewport(Kt);else{let le=u.getViewSubImage(f,Kt);jt=le.viewport,Lt===0&&(t.setRenderTargetTextures(p,le.colorTexture,f.ignoreDepthValues?void 0:le.depthStencilTexture),t.setRenderTarget(p))}let Gt=k[Lt];Gt===void 0&&(Gt=new cn,Gt.layers.enable(Lt),Gt.viewport=new tn,k[Lt]=Gt),Gt.matrix.fromArray(Kt.transform.matrix),Gt.matrix.decompose(Gt.position,Gt.quaternion,Gt.scale),Gt.projectionMatrix.fromArray(Kt.projectionMatrix),Gt.projectionMatrixInverse.copy(Gt.projectionMatrix).invert(),Gt.viewport.set(jt.x,jt.y,jt.width,jt.height),Lt===0&&(b.matrix.copy(Gt.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),At===!0&&b.cameras.push(Gt)}}for(let Mt=0;Mt<y.length;Mt++){let At=v[Mt],Lt=y[Mt];At!==null&&Lt!==void 0&&Lt.update(At,st,c||a)}ct&&ct($,st),st.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:st}),g=null}let St=new ff;St.setAnimationLoop(ft),this.setAnimationLoop=function($){ct=$},this.dispose=function(){}}};function h_(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,uf(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,y,v,w){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,w)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,y,v):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===pn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===pn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y=t.get(p).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let v=s._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*v,e(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=v*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),t.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===pn&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function u_(s,t,e,n){let i={},r={},a=[],o=e.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,v){let w=v.program;n.uniformBlockBinding(y,w)}function c(y,v){let w=i[y.id];w===void 0&&(g(y),w=h(y),i[y.id]=w,y.addEventListener("dispose",m));let L=v.program;n.updateUBOMapping(y,L);let T=t.render.frame;r[y.id]!==T&&(f(y),r[y.id]=T)}function h(y){let v=u();y.__bindingPointIndex=v;let w=s.createBuffer(),L=y.__size,T=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,w),s.bufferData(s.UNIFORM_BUFFER,L,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,w),w}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let v=i[y.id],w=y.uniforms,L=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let T=0,I=w.length;T<I;T++){let k=Array.isArray(w[T])?w[T]:[w[T]];for(let b=0,A=k.length;b<A;b++){let H=k[b];if(d(H,T,b,L)===!0){let J=H.__offset,dt=Array.isArray(H.value)?H.value:[H.value],O=0;for(let W=0;W<dt.length;W++){let Q=dt[W],it=x(Q);typeof Q=="number"||typeof Q=="boolean"?(H.__data[0]=Q,s.bufferSubData(s.UNIFORM_BUFFER,J+O,H.__data)):Q.isMatrix3?(H.__data[0]=Q.elements[0],H.__data[1]=Q.elements[1],H.__data[2]=Q.elements[2],H.__data[3]=0,H.__data[4]=Q.elements[3],H.__data[5]=Q.elements[4],H.__data[6]=Q.elements[5],H.__data[7]=0,H.__data[8]=Q.elements[6],H.__data[9]=Q.elements[7],H.__data[10]=Q.elements[8],H.__data[11]=0):(Q.toArray(H.__data,O),O+=it.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,J,H.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(y,v,w,L){let T=y.value,I=v+"_"+w;if(L[I]===void 0)return typeof T=="number"||typeof T=="boolean"?L[I]=T:L[I]=T.clone(),!0;{let k=L[I];if(typeof T=="number"||typeof T=="boolean"){if(k!==T)return L[I]=T,!0}else if(k.equals(T)===!1)return k.copy(T),!0}return!1}function g(y){let v=y.uniforms,w=0,L=16;for(let I=0,k=v.length;I<k;I++){let b=Array.isArray(v[I])?v[I]:[v[I]];for(let A=0,H=b.length;A<H;A++){let J=b[A],dt=Array.isArray(J.value)?J.value:[J.value];for(let O=0,W=dt.length;O<W;O++){let Q=dt[O],it=x(Q),K=w%L;K!==0&&L-K<it.boundary&&(w+=L-K),J.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=w,w+=it.storage}}}let T=w%L;return T>0&&(w+=L-T),y.__size=w,y.__cache={},this}function x(y){let v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function m(y){let v=y.target;v.removeEventListener("dispose",m);let w=a.indexOf(v.__bindingPointIndex);a.splice(w,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function p(){for(let y in i)s.deleteBuffer(i[y]);a=[],i={},r={}}return{bind:l,update:c,dispose:p}}var zr=class{constructor(t={}){let{canvas:e=yp(),context:n=null,depth:i=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=a;let d=new Uint32Array(4),g=new Int32Array(4),x=null,m=null,p=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ne,this._useLegacyLights=!1,this.toneMapping=ki,this.toneMappingExposure=1;let v=this,w=!1,L=0,T=0,I=null,k=-1,b=null,A=new tn,H=new tn,J=null,dt=new It(0),O=0,W=e.width,Q=e.height,it=1,K=null,nt=null,ct=new tn(0,0,W,Q),ft=new tn(0,0,W,Q),St=!1,$=new Or,st=!1,Mt=!1,At=null,Lt=new fe,Kt=new yt,jt=new U,Gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function le(){return I===null?it:1}let X=n;function Je(E,B){for(let G=0;G<E.length;G++){let Y=E[G],V=e.getContext(Y,B);if(V!==null)return V}return null}try{let E={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Lc}`),e.addEventListener("webglcontextlost",mt,!1),e.addEventListener("webglcontextrestored",N,!1),e.addEventListener("webglcontextcreationerror",_t,!1),X===null){let B=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&B.shift(),X=Je(B,E),X===null)throw Je(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext!="undefined"&&X instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),X.getShaderPrecisionFormat===void 0&&(X.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let zt,Jt,Rt,Ee,te,P,S,q,ot,at,ut,Ct,vt,wt,Bt,Wt,rt,he,ie,Zt,Nt,Tt,ee,ue;function Le(){zt=new Pg(X),Jt=new Eg(X,zt,t),zt.init(Jt),Tt=new l_(X,zt,Jt),Rt=new a_(X,zt,Jt),Ee=new Dg(X),te=new Zx,P=new o_(X,zt,Rt,te,Jt,Tt,Ee),S=new Tg(v),q=new Cg(v),ot=new Hp(X,Jt),ee=new bg(X,zt,ot,Jt),at=new Lg(X,ot,Ee,ee),ut=new Og(X,at,ot,Ee),ie=new Fg(X,Jt,P),Wt=new wg(te),Ct=new Yx(v,S,q,zt,Jt,ee,Wt),vt=new h_(v,te),wt=new $x,Bt=new n_(zt,Jt),he=new Mg(v,S,q,Rt,ut,f,l),rt=new r_(v,ut,Jt),ue=new u_(X,Ee,Jt,Rt),Zt=new Sg(X,zt,Ee,Jt),Nt=new Ig(X,zt,Ee,Jt),Ee.programs=Ct.programs,v.capabilities=Jt,v.extensions=zt,v.properties=te,v.renderLists=wt,v.shadowMap=rt,v.state=Rt,v.info=Ee}Le();let Pt=new ac(v,X);this.xr=Pt,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){let E=zt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=zt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return it},this.setPixelRatio=function(E){E!==void 0&&(it=E,this.setSize(W,Q,!1))},this.getSize=function(E){return E.set(W,Q)},this.setSize=function(E,B,G=!0){if(Pt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=E,Q=B,e.width=Math.floor(E*it),e.height=Math.floor(B*it),G===!0&&(e.style.width=E+"px",e.style.height=B+"px"),this.setViewport(0,0,E,B)},this.getDrawingBufferSize=function(E){return E.set(W*it,Q*it).floor()},this.setDrawingBufferSize=function(E,B,G){W=E,Q=B,it=G,e.width=Math.floor(E*G),e.height=Math.floor(B*G),this.setViewport(0,0,E,B)},this.getCurrentViewport=function(E){return E.copy(A)},this.getViewport=function(E){return E.copy(ct)},this.setViewport=function(E,B,G,Y){E.isVector4?ct.set(E.x,E.y,E.z,E.w):ct.set(E,B,G,Y),Rt.viewport(A.copy(ct).multiplyScalar(it).floor())},this.getScissor=function(E){return E.copy(ft)},this.setScissor=function(E,B,G,Y){E.isVector4?ft.set(E.x,E.y,E.z,E.w):ft.set(E,B,G,Y),Rt.scissor(H.copy(ft).multiplyScalar(it).floor())},this.getScissorTest=function(){return St},this.setScissorTest=function(E){Rt.setScissorTest(St=E)},this.setOpaqueSort=function(E){K=E},this.setTransparentSort=function(E){nt=E},this.getClearColor=function(E){return E.copy(he.getClearColor())},this.setClearColor=function(){he.setClearColor.apply(he,arguments)},this.getClearAlpha=function(){return he.getClearAlpha()},this.setClearAlpha=function(){he.setClearAlpha.apply(he,arguments)},this.clear=function(E=!0,B=!0,G=!0){let Y=0;if(E){let V=!1;if(I!==null){let bt=I.texture.format;V=bt===sf||bt===nf||bt===ef}if(V){let bt=I.texture.type,Et=bt===ti||bt===Oi||bt===Uc||bt===as||bt===ju||bt===tf,Dt=he.getClearColor(),kt=he.getClearAlpha(),Xt=Dt.r,$t=Dt.g,qt=Dt.b;Et?(d[0]=Xt,d[1]=$t,d[2]=qt,d[3]=kt,X.clearBufferuiv(X.COLOR,0,d)):(g[0]=Xt,g[1]=$t,g[2]=qt,g[3]=kt,X.clearBufferiv(X.COLOR,0,g))}else Y|=X.COLOR_BUFFER_BIT}B&&(Y|=X.DEPTH_BUFFER_BIT),G&&(Y|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",mt,!1),e.removeEventListener("webglcontextrestored",N,!1),e.removeEventListener("webglcontextcreationerror",_t,!1),wt.dispose(),Bt.dispose(),te.dispose(),S.dispose(),q.dispose(),ut.dispose(),ee.dispose(),ue.dispose(),Ct.dispose(),Pt.dispose(),Pt.removeEventListener("sessionstart",$e),Pt.removeEventListener("sessionend",xe),At&&(At.dispose(),At=null),rn.stop()};function mt(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function N(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let E=Ee.autoReset,B=rt.enabled,G=rt.autoUpdate,Y=rt.needsUpdate,V=rt.type;Le(),Ee.autoReset=E,rt.enabled=B,rt.autoUpdate=G,rt.needsUpdate=Y,rt.type=V}function _t(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function gt(E){let B=E.target;B.removeEventListener("dispose",gt),Vt(B)}function Vt(E){Ot(E),te.remove(E)}function Ot(E){let B=te.get(E).programs;B!==void 0&&(B.forEach(function(G){Ct.releaseProgram(G)}),E.isShaderMaterial&&Ct.releaseShaderCache(E))}this.renderBufferDirect=function(E,B,G,Y,V,bt){B===null&&(B=Gt);let Et=V.isMesh&&V.matrixWorld.determinant()<0,Dt=sa(E,B,G,Y,V);Rt.setMaterial(Y,Et);let kt=G.index,Xt=1;if(Y.wireframe===!0){if(kt=at.getWireframeAttribute(G),kt===void 0)return;Xt=2}let $t=G.drawRange,qt=G.attributes.position,Me=$t.start*Xt,un=($t.start+$t.count)*Xt;bt!==null&&(Me=Math.max(Me,bt.start*Xt),un=Math.min(un,(bt.start+bt.count)*Xt)),kt!==null?(Me=Math.max(Me,0),un=Math.min(un,kt.count)):qt!=null&&(Me=Math.max(Me,0),un=Math.min(un,qt.count));let Be=un-Me;if(Be<0||Be===1/0)return;ee.setup(V,Y,Dt,G,kt);let Fn,we=Zt;if(kt!==null&&(Fn=ot.get(kt),we=Nt,we.setIndex(Fn)),V.isMesh)Y.wireframe===!0?(Rt.setLineWidth(Y.wireframeLinewidth*le()),we.setMode(X.LINES)):we.setMode(X.TRIANGLES);else if(V.isLine){let Qt=Y.linewidth;Qt===void 0&&(Qt=1),Rt.setLineWidth(Qt*le()),V.isLineSegments?we.setMode(X.LINES):V.isLineLoop?we.setMode(X.LINE_LOOP):we.setMode(X.LINE_STRIP)}else V.isPoints?we.setMode(X.POINTS):V.isSprite&&we.setMode(X.TRIANGLES);if(V.isBatchedMesh)we.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else if(V.isInstancedMesh)we.renderInstances(Me,Be,V.count);else if(G.isInstancedBufferGeometry){let Qt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,ws=Math.min(G.instanceCount,Qt);we.renderInstances(Me,Be,ws)}else we.render(Me,Be)};function me(E,B,G){E.transparent===!0&&E.side===Sn&&E.forceSinglePass===!1?(E.side=pn,E.needsUpdate=!0,li(E,B,G),E.side=Vi,E.needsUpdate=!0,li(E,B,G),E.side=Sn):li(E,B,G)}this.compile=function(E,B,G=null){G===null&&(G=E),m=Bt.get(G),m.init(),y.push(m),G.traverseVisible(function(V){V.isLight&&V.layers.test(B.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),E!==G&&E.traverseVisible(function(V){V.isLight&&V.layers.test(B.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),m.setupLights(v._useLegacyLights);let Y=new Set;return E.traverse(function(V){let bt=V.material;if(bt)if(Array.isArray(bt))for(let Et=0;Et<bt.length;Et++){let Dt=bt[Et];me(Dt,G,V),Y.add(Dt)}else me(bt,G,V),Y.add(bt)}),y.pop(),m=null,Y},this.compileAsync=function(E,B,G=null){let Y=this.compile(E,B,G);return new Promise(V=>{function bt(){if(Y.forEach(function(Et){te.get(Et).currentProgram.isReady()&&Y.delete(Et)}),Y.size===0){V(E);return}setTimeout(bt,10)}zt.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let ge=null;function ze(E){ge&&ge(E)}function $e(){rn.stop()}function xe(){rn.start()}let rn=new ff;rn.setAnimationLoop(ze),typeof self!="undefined"&&rn.setContext(self),this.setAnimationLoop=function(E){ge=E,Pt.setAnimationLoop(E),E===null?rn.stop():rn.start()},Pt.addEventListener("sessionstart",$e),Pt.addEventListener("sessionend",xe),this.render=function(E,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Pt.enabled===!0&&Pt.isPresenting===!0&&(Pt.cameraAutoUpdate===!0&&Pt.updateCamera(B),B=Pt.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,B,I),m=Bt.get(E,y.length),m.init(),y.push(m),Lt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),$.setFromProjectionMatrix(Lt),Mt=this.localClippingEnabled,st=Wt.init(this.clippingPlanes,Mt),x=wt.get(E,p.length),x.init(),p.push(x),Rn(E,B,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(K,nt),this.info.render.frame++,st===!0&&Wt.beginShadows();let G=m.state.shadowsArray;if(rt.render(G,E,B),st===!0&&Wt.endShadows(),this.info.autoReset===!0&&this.info.reset(),he.render(x,E),m.setupLights(v._useLegacyLights),B.isArrayCamera){let Y=B.cameras;for(let V=0,bt=Y.length;V<bt;V++){let Et=Y[V];Ss(x,E,Et,Et.viewport)}}else Ss(x,E,B);I!==null&&(P.updateMultisampleRenderTarget(I),P.updateRenderTargetMipmap(I)),E.isScene===!0&&E.onAfterRender(v,E,B),ee.resetDefaultState(),k=-1,b=null,y.pop(),y.length>0?m=y[y.length-1]:m=null,p.pop(),p.length>0?x=p[p.length-1]:x=null};function Rn(E,B,G,Y){if(E.visible===!1)return;if(E.layers.test(B.layers)){if(E.isGroup)G=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(B);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||$.intersectsSprite(E)){Y&&jt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Lt);let Et=ut.update(E),Dt=E.material;Dt.visible&&x.push(E,Et,Dt,G,jt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||$.intersectsObject(E))){let Et=ut.update(E),Dt=E.material;if(Y&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),jt.copy(E.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),jt.copy(Et.boundingSphere.center)),jt.applyMatrix4(E.matrixWorld).applyMatrix4(Lt)),Array.isArray(Dt)){let kt=Et.groups;for(let Xt=0,$t=kt.length;Xt<$t;Xt++){let qt=kt[Xt],Me=Dt[qt.materialIndex];Me&&Me.visible&&x.push(E,Et,Me,G,jt.z,qt)}}else Dt.visible&&x.push(E,Et,Dt,G,jt.z,null)}}let bt=E.children;for(let Et=0,Dt=bt.length;Et<Dt;Et++)Rn(bt[Et],B,G,Y)}function Ss(E,B,G,Y){let V=E.opaque,bt=E.transmissive,Et=E.transparent;m.setupLightsView(G),st===!0&&Wt.setGlobalState(v.clippingPlanes,G),bt.length>0&&ia(V,bt,B,G),Y&&Rt.viewport(A.copy(Y)),V.length>0&&Ci(V,B,G),bt.length>0&&Ci(bt,B,G),Et.length>0&&Ci(Et,B,G),Rt.buffers.depth.setTest(!0),Rt.buffers.depth.setMask(!0),Rt.buffers.color.setMask(!0),Rt.setPolygonOffset(!1)}function ia(E,B,G,Y){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;let bt=Jt.isWebGL2;At===null&&(At=new In(1,1,{generateMipmaps:!0,type:zt.has("EXT_color_buffer_half_float")?hs:ti,minFilter:Fr,samples:bt?4:0})),v.getDrawingBufferSize(Kt),bt?At.setSize(Kt.x,Kt.y):At.setSize(Xl(Kt.x),Xl(Kt.y));let Et=v.getRenderTarget();v.setRenderTarget(At),v.getClearColor(dt),O=v.getClearAlpha(),O<1&&v.setClearColor(16777215,.5),v.clear();let Dt=v.toneMapping;v.toneMapping=ki,Ci(E,G,Y),P.updateMultisampleRenderTarget(At),P.updateRenderTargetMipmap(At);let kt=!1;for(let Xt=0,$t=B.length;Xt<$t;Xt++){let qt=B[Xt],Me=qt.object,un=qt.geometry,Be=qt.material,Fn=qt.group;if(Be.side===Sn&&Me.layers.test(Y.layers)){let we=Be.side;Be.side=pn,Be.needsUpdate=!0,$i(Me,G,Y,un,Be,Fn),Be.side=we,Be.needsUpdate=!0,kt=!0}}kt===!0&&(P.updateMultisampleRenderTarget(At),P.updateRenderTargetMipmap(At)),v.setRenderTarget(Et),v.setClearColor(dt,O),v.toneMapping=Dt}function Ci(E,B,G){let Y=B.isScene===!0?B.overrideMaterial:null;for(let V=0,bt=E.length;V<bt;V++){let Et=E[V],Dt=Et.object,kt=Et.geometry,Xt=Y===null?Et.material:Y,$t=Et.group;Dt.layers.test(G.layers)&&$i(Dt,B,G,kt,Xt,$t)}}function $i(E,B,G,Y,V,bt){E.onBeforeRender(v,B,G,Y,V,bt),E.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),V.onBeforeRender(v,B,G,Y,E,bt),V.transparent===!0&&V.side===Sn&&V.forceSinglePass===!1?(V.side=pn,V.needsUpdate=!0,v.renderBufferDirect(G,B,Y,V,E,bt),V.side=Vi,V.needsUpdate=!0,v.renderBufferDirect(G,B,Y,V,E,bt),V.side=Sn):v.renderBufferDirect(G,B,Y,V,E,bt),E.onAfterRender(v,B,G,Y,V,bt)}function li(E,B,G){B.isScene!==!0&&(B=Gt);let Y=te.get(E),V=m.state.lights,bt=m.state.shadowsArray,Et=V.state.version,Dt=Ct.getParameters(E,V.state,bt,B,G),kt=Ct.getProgramCacheKey(Dt),Xt=Y.programs;Y.environment=E.isMeshStandardMaterial?B.environment:null,Y.fog=B.fog,Y.envMap=(E.isMeshStandardMaterial?q:S).get(E.envMap||Y.environment),Xt===void 0&&(E.addEventListener("dispose",gt),Xt=new Map,Y.programs=Xt);let $t=Xt.get(kt);if($t!==void 0){if(Y.currentProgram===$t&&Y.lightsStateVersion===Et)return Ki(E,Dt),$t}else Dt.uniforms=Ct.getUniforms(E),E.onBuild(G,Dt,v),E.onBeforeCompile(Dt,v),$t=Ct.acquireProgram(Dt,kt),Xt.set(kt,$t),Y.uniforms=Dt.uniforms;let qt=Y.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(qt.clippingPlanes=Wt.uniform),Ki(E,Dt),Y.needsLights=aa(E),Y.lightsStateVersion=Et,Y.needsLights&&(qt.ambientLightColor.value=V.state.ambient,qt.lightProbe.value=V.state.probe,qt.directionalLights.value=V.state.directional,qt.directionalLightShadows.value=V.state.directionalShadow,qt.spotLights.value=V.state.spot,qt.spotLightShadows.value=V.state.spotShadow,qt.rectAreaLights.value=V.state.rectArea,qt.ltc_1.value=V.state.rectAreaLTC1,qt.ltc_2.value=V.state.rectAreaLTC2,qt.pointLights.value=V.state.point,qt.pointLightShadows.value=V.state.pointShadow,qt.hemisphereLights.value=V.state.hemi,qt.directionalShadowMap.value=V.state.directionalShadowMap,qt.directionalShadowMatrix.value=V.state.directionalShadowMatrix,qt.spotShadowMap.value=V.state.spotShadowMap,qt.spotLightMatrix.value=V.state.spotLightMatrix,qt.spotLightMap.value=V.state.spotLightMap,qt.pointShadowMap.value=V.state.pointShadowMap,qt.pointShadowMatrix.value=V.state.pointShadowMatrix),Y.currentProgram=$t,Y.uniformsList=null,$t}function Es(E){if(E.uniformsList===null){let B=E.currentProgram.getUniforms();E.uniformsList=js.seqWithValue(B.seq,E.uniforms)}return E.uniformsList}function Ki(E,B){let G=te.get(E);G.outputColorSpace=B.outputColorSpace,G.batching=B.batching,G.instancing=B.instancing,G.instancingColor=B.instancingColor,G.skinning=B.skinning,G.morphTargets=B.morphTargets,G.morphNormals=B.morphNormals,G.morphColors=B.morphColors,G.morphTargetsCount=B.morphTargetsCount,G.numClippingPlanes=B.numClippingPlanes,G.numIntersection=B.numClipIntersection,G.vertexAlphas=B.vertexAlphas,G.vertexTangents=B.vertexTangents,G.toneMapping=B.toneMapping}function sa(E,B,G,Y,V){B.isScene!==!0&&(B=Gt),P.resetTextureUnits();let bt=B.fog,Et=Y.isMeshStandardMaterial?B.environment:null,Dt=I===null?v.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:vi,kt=(Y.isMeshStandardMaterial?q:S).get(Y.envMap||Et),Xt=Y.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,$t=!!G.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),qt=!!G.morphAttributes.position,Me=!!G.morphAttributes.normal,un=!!G.morphAttributes.color,Be=ki;Y.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Be=v.toneMapping);let Fn=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,we=Fn!==void 0?Fn.length:0,Qt=te.get(Y),ws=m.state.lights;if(st===!0&&(Mt===!0||E!==b)){let R=E===b&&Y.id===k;Wt.setState(Y,E,R)}let Te=!1;Y.version===Qt.__version?(Qt.needsLights&&Qt.lightsStateVersion!==ws.state.version||Qt.outputColorSpace!==Dt||V.isBatchedMesh&&Qt.batching===!1||!V.isBatchedMesh&&Qt.batching===!0||V.isInstancedMesh&&Qt.instancing===!1||!V.isInstancedMesh&&Qt.instancing===!0||V.isSkinnedMesh&&Qt.skinning===!1||!V.isSkinnedMesh&&Qt.skinning===!0||V.isInstancedMesh&&Qt.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Qt.instancingColor===!1&&V.instanceColor!==null||Qt.envMap!==kt||Y.fog===!0&&Qt.fog!==bt||Qt.numClippingPlanes!==void 0&&(Qt.numClippingPlanes!==Wt.numPlanes||Qt.numIntersection!==Wt.numIntersection)||Qt.vertexAlphas!==Xt||Qt.vertexTangents!==$t||Qt.morphTargets!==qt||Qt.morphNormals!==Me||Qt.morphColors!==un||Qt.toneMapping!==Be||Jt.isWebGL2===!0&&Qt.morphTargetsCount!==we)&&(Te=!0):(Te=!0,Qt.__version=Y.version);let ci=Qt.currentProgram;Te===!0&&(ci=li(Y,B,V));let oa=!1,Pi=!1,Ts=!1,Ke=ci.getUniforms(),Qn=Qt.uniforms;if(Rt.useProgram(ci.program)&&(oa=!0,Pi=!0,Ts=!0),Y.id!==k&&(k=Y.id,Pi=!0),oa||b!==E){Ke.setValue(X,"projectionMatrix",E.projectionMatrix),Ke.setValue(X,"viewMatrix",E.matrixWorldInverse);let R=Ke.map.cameraPosition;R!==void 0&&R.setValue(X,jt.setFromMatrixPosition(E.matrixWorld)),Jt.logarithmicDepthBuffer&&Ke.setValue(X,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Ke.setValue(X,"isOrthographic",E.isOrthographicCamera===!0),b!==E&&(b=E,Pi=!0,Ts=!0)}if(V.isSkinnedMesh){Ke.setOptional(X,V,"bindMatrix"),Ke.setOptional(X,V,"bindMatrixInverse");let R=V.skeleton;R&&(Jt.floatVertexTextures?(R.boneTexture===null&&R.computeBoneTexture(),Ke.setValue(X,"boneTexture",R.boneTexture,P)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}V.isBatchedMesh&&(Ke.setOptional(X,V,"batchingTexture"),Ke.setValue(X,"batchingTexture",V._matricesTexture,P));let _=G.morphAttributes;if((_.position!==void 0||_.normal!==void 0||_.color!==void 0&&Jt.isWebGL2===!0)&&ie.update(V,G,ci),(Pi||Qt.receiveShadow!==V.receiveShadow)&&(Qt.receiveShadow=V.receiveShadow,Ke.setValue(X,"receiveShadow",V.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Qn.envMap.value=kt,Qn.flipEnvMap.value=kt.isCubeTexture&&kt.isRenderTargetTexture===!1?-1:1),Pi&&(Ke.setValue(X,"toneMappingExposure",v.toneMappingExposure),Qt.needsLights&&ra(Qn,Ts),bt&&Y.fog===!0&&vt.refreshFogUniforms(Qn,bt),vt.refreshMaterialUniforms(Qn,Y,it,Q,At),js.upload(X,Es(Qt),Qn,P)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(js.upload(X,Es(Qt),Qn,P),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Ke.setValue(X,"center",V.center),Ke.setValue(X,"modelViewMatrix",V.modelViewMatrix),Ke.setValue(X,"normalMatrix",V.normalMatrix),Ke.setValue(X,"modelMatrix",V.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){let R=Y.uniformsGroups;for(let C=0,D=R.length;C<D;C++)if(Jt.isWebGL2){let F=R[C];ue.update(F,ci),ue.bind(F,ci)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ci}function ra(E,B){E.ambientLightColor.needsUpdate=B,E.lightProbe.needsUpdate=B,E.directionalLights.needsUpdate=B,E.directionalLightShadows.needsUpdate=B,E.pointLights.needsUpdate=B,E.pointLightShadows.needsUpdate=B,E.spotLights.needsUpdate=B,E.spotLightShadows.needsUpdate=B,E.rectAreaLights.needsUpdate=B,E.hemisphereLights.needsUpdate=B}function aa(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(E,B,G){te.get(E.texture).__webglTexture=B,te.get(E.depthTexture).__webglTexture=G;let Y=te.get(E);Y.__hasExternalTextures=!0,Y.__hasExternalTextures&&(Y.__autoAllocateDepthBuffer=G===void 0,Y.__autoAllocateDepthBuffer||zt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,B){let G=te.get(E);G.__webglFramebuffer=B,G.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(E,B=0,G=0){I=E,L=B,T=G;let Y=!0,V=null,bt=!1,Et=!1;if(E){let kt=te.get(E);kt.__useDefaultFramebuffer!==void 0?(Rt.bindFramebuffer(X.FRAMEBUFFER,null),Y=!1):kt.__webglFramebuffer===void 0?P.setupRenderTarget(E):kt.__hasExternalTextures&&P.rebindTextures(E,te.get(E.texture).__webglTexture,te.get(E.depthTexture).__webglTexture);let Xt=E.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(Et=!0);let $t=te.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray($t[B])?V=$t[B][G]:V=$t[B],bt=!0):Jt.isWebGL2&&E.samples>0&&P.useMultisampledRTT(E)===!1?V=te.get(E).__webglMultisampledFramebuffer:Array.isArray($t)?V=$t[G]:V=$t,A.copy(E.viewport),H.copy(E.scissor),J=E.scissorTest}else A.copy(ct).multiplyScalar(it).floor(),H.copy(ft).multiplyScalar(it).floor(),J=St;if(Rt.bindFramebuffer(X.FRAMEBUFFER,V)&&Jt.drawBuffers&&Y&&Rt.drawBuffers(E,V),Rt.viewport(A),Rt.scissor(H),Rt.setScissorTest(J),bt){let kt=te.get(E.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+B,kt.__webglTexture,G)}else if(Et){let kt=te.get(E.texture),Xt=B||0;X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,kt.__webglTexture,G||0,Xt)}k=-1},this.readRenderTargetPixels=function(E,B,G,Y,V,bt,Et){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=te.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Et!==void 0&&(Dt=Dt[Et]),Dt){Rt.bindFramebuffer(X.FRAMEBUFFER,Dt);try{let kt=E.texture,Xt=kt.format,$t=kt.type;if(Xt!==Xn&&Tt.convert(Xt)!==X.getParameter(X.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let qt=$t===hs&&(zt.has("EXT_color_buffer_half_float")||Jt.isWebGL2&&zt.has("EXT_color_buffer_float"));if($t!==ti&&Tt.convert($t)!==X.getParameter(X.IMPLEMENTATION_COLOR_READ_TYPE)&&!($t===zi&&(Jt.isWebGL2||zt.has("OES_texture_float")||zt.has("WEBGL_color_buffer_float")))&&!qt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=E.width-Y&&G>=0&&G<=E.height-V&&X.readPixels(B,G,Y,V,Tt.convert(Xt),Tt.convert($t),bt)}finally{let kt=I!==null?te.get(I).__webglFramebuffer:null;Rt.bindFramebuffer(X.FRAMEBUFFER,kt)}}},this.copyFramebufferToTexture=function(E,B,G=0){let Y=Math.pow(2,-G),V=Math.floor(B.image.width*Y),bt=Math.floor(B.image.height*Y);P.setTexture2D(B,0),X.copyTexSubImage2D(X.TEXTURE_2D,G,0,0,E.x,E.y,V,bt),Rt.unbindTexture()},this.copyTextureToTexture=function(E,B,G,Y=0){let V=B.image.width,bt=B.image.height,Et=Tt.convert(G.format),Dt=Tt.convert(G.type);P.setTexture2D(G,0),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,G.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,G.unpackAlignment),B.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Y,E.x,E.y,V,bt,Et,Dt,B.image.data):B.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Y,E.x,E.y,B.mipmaps[0].width,B.mipmaps[0].height,Et,B.mipmaps[0].data):X.texSubImage2D(X.TEXTURE_2D,Y,E.x,E.y,Et,Dt,B.image),Y===0&&G.generateMipmaps&&X.generateMipmap(X.TEXTURE_2D),Rt.unbindTexture()},this.copyTextureToTexture3D=function(E,B,G,Y,V=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let bt=E.max.x-E.min.x+1,Et=E.max.y-E.min.y+1,Dt=E.max.z-E.min.z+1,kt=Tt.convert(Y.format),Xt=Tt.convert(Y.type),$t;if(Y.isData3DTexture)P.setTexture3D(Y,0),$t=X.TEXTURE_3D;else if(Y.isDataArrayTexture||Y.isCompressedArrayTexture)P.setTexture2DArray(Y,0),$t=X.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,Y.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,Y.unpackAlignment);let qt=X.getParameter(X.UNPACK_ROW_LENGTH),Me=X.getParameter(X.UNPACK_IMAGE_HEIGHT),un=X.getParameter(X.UNPACK_SKIP_PIXELS),Be=X.getParameter(X.UNPACK_SKIP_ROWS),Fn=X.getParameter(X.UNPACK_SKIP_IMAGES),we=G.isCompressedTexture?G.mipmaps[V]:G.image;X.pixelStorei(X.UNPACK_ROW_LENGTH,we.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,we.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,E.min.x),X.pixelStorei(X.UNPACK_SKIP_ROWS,E.min.y),X.pixelStorei(X.UNPACK_SKIP_IMAGES,E.min.z),G.isDataTexture||G.isData3DTexture?X.texSubImage3D($t,V,B.x,B.y,B.z,bt,Et,Dt,kt,Xt,we.data):G.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),X.compressedTexSubImage3D($t,V,B.x,B.y,B.z,bt,Et,Dt,kt,we.data)):X.texSubImage3D($t,V,B.x,B.y,B.z,bt,Et,Dt,kt,Xt,we),X.pixelStorei(X.UNPACK_ROW_LENGTH,qt),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Me),X.pixelStorei(X.UNPACK_SKIP_PIXELS,un),X.pixelStorei(X.UNPACK_SKIP_ROWS,Be),X.pixelStorei(X.UNPACK_SKIP_IMAGES,Fn),V===0&&Y.generateMipmaps&&X.generateMipmap($t),Rt.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?P.setTextureCube(E,0):E.isData3DTexture?P.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?P.setTexture2DArray(E,0):P.setTexture2D(E,0),Rt.unbindTexture()},this.resetState=function(){L=0,T=0,I=null,Rt.reset(),ee.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===Nc?"display-p3":"srgb",e.unpackColorSpace=ve.workingColorSpace===bo?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ne?ls:af}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===ls?Ne:vi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},oc=class extends zr{};oc.prototype.isWebGL1Renderer=!0;var oo=class s{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new It(t),this.density=e}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var us=class extends Xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}},lc=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Gl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Hi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},yn=new U,lo=class s{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)yn.fromBufferAttribute(this,e),yn.applyMatrix4(t),this.setXYZ(e,yn.x,yn.y,yn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)yn.fromBufferAttribute(this,e),yn.applyNormalMatrix(t),this.setXYZ(e,yn.x,yn.y,yn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)yn.fromBufferAttribute(this,e),yn.transformDirection(t),this.setXYZ(e,yn.x,yn.y,yn.z);return this}setX(t,e){return this.normalized&&(e=be(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=be(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=be(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=be(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=xi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=xi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=xi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=xi(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=be(e,this.array),n=be(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=be(e,this.array),n=be(n,this.array),i=be(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=be(e,this.array),n=be(n,this.array),i=be(i,this.array),r=be(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new de(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},fs=class extends Mi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new It(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ws,Ar=new U,Xs=new U,qs=new U,Ys=new yt,Rr=new yt,_f=new fe,Da=new U,Cr=new U,Ua=new U,Hu=new yt,Dl=new yt,Vu=new yt,rr=class extends Xe{constructor(t=new fs){if(super(),this.isSprite=!0,this.type="Sprite",Ws===void 0){Ws=new _e;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new lc(e,5);Ws.setIndex([0,1,2,0,2,3]),Ws.setAttribute("position",new lo(n,3,0,!1)),Ws.setAttribute("uv",new lo(n,2,3,!1))}this.geometry=Ws,this.material=t,this.center=new yt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Xs.setFromMatrixScale(this.matrixWorld),_f.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),qs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Xs.multiplyScalar(-qs.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let a=this.center;Na(Da.set(-.5,-.5,0),qs,a,Xs,i,r),Na(Cr.set(.5,-.5,0),qs,a,Xs,i,r),Na(Ua.set(.5,.5,0),qs,a,Xs,i,r),Hu.set(0,0),Dl.set(1,0),Vu.set(1,1);let o=t.ray.intersectTriangle(Da,Cr,Ua,!1,Ar);if(o===null&&(Na(Cr.set(-.5,.5,0),qs,a,Xs,i,r),Dl.set(0,1),o=t.ray.intersectTriangle(Da,Ua,Cr,!1,Ar),o===null))return;let l=t.ray.origin.distanceTo(Ar);l<t.near||l>t.far||e.push({distance:l,point:Ar.clone(),uv:rs.getInterpolation(Ar,Da,Cr,Ua,Hu,Dl,Vu,new yt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Na(s,t,e,n,i,r){Ys.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(Rr.x=r*Ys.x-i*Ys.y,Rr.y=i*Ys.x+r*Ys.y):Rr.copy(Ys),s.copy(t),s.x+=Rr.x,s.y+=Rr.y,s.applyMatrix4(_f)}var co=class extends Ln{constructor(t=null,e=1,n=1,i,r,a,o,l,c=on,h=on,u,f){super(null,a,o,l,c,h,i,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ho=class extends de{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Zs=new fe,Gu=new fe,Fa=[],Wu=new yi,f_=new fe,Pr=new oe,Lr=new Wi,Br=class extends oe{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ho(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,f_)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new yi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Zs),Wu.copy(t.boundingBox).applyMatrix4(Zs),this.boundingBox.union(Wu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Wi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Zs),Lr.copy(t.boundingSphere).applyMatrix4(Zs),this.boundingSphere.union(Lr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){let n=this.matrixWorld,i=this.count;if(Pr.geometry=this.geometry,Pr.material=this.material,Pr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Lr.copy(this.boundingSphere),Lr.applyMatrix4(n),t.ray.intersectsSphere(Lr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Zs),Gu.multiplyMatrices(n,Zs),Pr.matrixWorld=Gu,Pr.raycast(t,Fa);for(let a=0,o=Fa.length;a<o;a++){let l=Fa[a];l.instanceId=r,l.object=this,e.push(l)}Fa.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new ho(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var cc=class extends Mi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new It(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Xu=new fe,hc=new ja,Oa=new Wi,za=new U,bi=class extends Xe{constructor(t=new _e,e=new cc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Oa.copy(n.boundingSphere),Oa.applyMatrix4(i),Oa.radius+=r,t.ray.intersectsSphere(Oa)===!1)return;Xu.copy(i).invert(),hc.copy(t.ray).applyMatrix4(Xu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let g=f,x=d;g<x;g++){let m=c.getX(g);za.fromBufferAttribute(u,m),qu(za,m,l,i,t,e,this)}}else{let f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let g=f,x=d;g<x;g++)za.fromBufferAttribute(u,g),qu(za,g,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function qu(s,t,e,n,i,r,a){let o=hc.distanceSqToPoint(s);if(o<e){let l=new U;hc.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,object:a})}}var ds=class extends Ln{constructor(t,e,n,i,r,a,o,l,c){super(t,e,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Yn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),i=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);let h=n[i],f=n[i+1]-h,d=(a-h)/f;return(i+d)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),o=this.getPoint(r),l=e||(a.isVector2?new yt:new U);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new U,i=[],r=[],a=[],o=new U,l=new fe;for(let d=0;d<=t;d++){let g=d/t;i[d]=this.getTangentAt(g,new U)}r[0]=new U,a[0]=new U;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(ln(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,g))}a[d].crossVectors(i[d],r[d])}if(e===!0){let d=Math.acos(ln(r[0].dot(r[t]),-1,1));d/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],d*g)),a[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},uo=class extends Yn{constructor(t=0,e=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e){let n=e||new yt,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},uc=class extends uo{constructor(t,e,n,i,r,a){super(t,e,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Oc(){let s=0,t=0,e=0,n=0;function i(r,a,o,l){s=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let f=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+u)+(l-o)/u;f*=h,d*=h,i(a,o,f,d)},calc:function(r){let a=r*r,o=a*r;return s+t*r+e*a+n*o}}}var Ba=new U,Ul=new Oc,Nl=new Oc,Fl=new Oc,ar=class extends Yn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new U){let n=e,i=this.points,r=i.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(Ba.subVectors(i[0],i[1]).add(i[0]),c=Ba);let u=i[o%r],f=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(Ba.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Ba),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Ul.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,x,m),Nl.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,x,m),Fl.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(Ul.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Nl.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Fl.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(Ul.calc(l),Nl.calc(l),Fl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new U().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Yu(s,t,e,n,i){let r=(n-t)*.5,a=(i-e)*.5,o=s*s,l=s*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*s+e}function d_(s,t){let e=1-s;return e*e*t}function p_(s,t){return 2*(1-s)*s*t}function m_(s,t){return s*s*t}function Ur(s,t,e,n){return d_(s,t)+p_(s,e)+m_(s,n)}function g_(s,t){let e=1-s;return e*e*e*t}function x_(s,t){let e=1-s;return 3*e*e*s*t}function __(s,t){return 3*(1-s)*s*s*t}function v_(s,t){return s*s*s*t}function Nr(s,t,e,n,i){return g_(s,t)+x_(s,e)+__(s,n)+v_(s,i)}var fc=class extends Yn{constructor(t=new yt,e=new yt,n=new yt,i=new yt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new yt){let n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Nr(t,i.x,r.x,a.x,o.x),Nr(t,i.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},dc=class extends Yn{constructor(t=new U,e=new U,n=new U,i=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new U){let n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Nr(t,i.x,r.x,a.x,o.x),Nr(t,i.y,r.y,a.y,o.y),Nr(t,i.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},pc=class extends Yn{constructor(t=new yt,e=new yt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new yt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new yt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},mc=class extends Yn{constructor(t=new U,e=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new U){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new U){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},gc=class extends Yn{constructor(t=new yt,e=new yt,n=new yt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new yt){let n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(Ur(t,i.x,r.x,a.x),Ur(t,i.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},fo=class extends Yn{constructor(t=new U,e=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new U){let n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(Ur(t,i.x,r.x,a.x),Ur(t,i.y,r.y,a.y),Ur(t,i.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},xc=class extends Yn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new yt){let n=e,i=this.points,r=(i.length-1)*t,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(Yu(o,l.x,c.x,h.x,u.x),Yu(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new yt().fromArray(i))}return this}},y_=Object.freeze({__proto__:null,ArcCurve:uc,CatmullRomCurve3:ar,CubicBezierCurve:fc,CubicBezierCurve3:dc,EllipseCurve:uo,LineCurve:pc,LineCurve3:mc,QuadraticBezierCurve:gc,QuadraticBezierCurve3:fo,SplineCurve:xc});var po=class s extends _e{constructor(t=[new yt(0,-.5),new yt(.5,0),new yt(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=ln(i,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/e,u=new U,f=new yt,d=new U,g=new U,x=new U,m=0,p=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,d.x=p*1,d.y=-m,d.z=p*0,x.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),l.push(d.x,d.y,d.z),x.copy(g)}for(let y=0;y<=e;y++){let v=n+y*h*i,w=Math.sin(v),L=Math.cos(v);for(let T=0;T<=t.length-1;T++){u.x=t[T].x*w,u.y=t[T].y,u.z=t[T].x*L,a.push(u.x,u.y,u.z),f.x=y/e,f.y=T/(t.length-1),o.push(f.x,f.y);let I=l[3*T+0]*w,k=l[3*T+1],b=l[3*T+0]*L;c.push(I,k,b)}}for(let y=0;y<e;y++)for(let v=0;v<t.length-1;v++){let w=v+y*t.length,L=w,T=w+t.length,I=w+t.length+1,k=w+1;r.push(L,T,k),r.push(I,k,T)}this.setIndex(r),this.setAttribute("position",new ae(a,3)),this.setAttribute("uv",new ae(o,2)),this.setAttribute("normal",new ae(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}};var mo=class s extends _e{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new U,h=new yt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=n+u/e*i;c.x=t*Math.cos(d),c.y=t*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[f]/t+1)/2,h.y=(a[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ae(a,3)),this.setAttribute("normal",new ae(o,3)),this.setAttribute("uv",new ae(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},en=class s extends _e{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],f=[],d=[],g=0,x=[],m=n/2,p=0;y(),a===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new ae(u,3)),this.setAttribute("normal",new ae(f,3)),this.setAttribute("uv",new ae(d,2));function y(){let w=new U,L=new U,T=0,I=(e-t)/n;for(let k=0;k<=r;k++){let b=[],A=k/r,H=A*(e-t)+t;for(let J=0;J<=i;J++){let dt=J/i,O=dt*l+o,W=Math.sin(O),Q=Math.cos(O);L.x=H*W,L.y=-A*n+m,L.z=H*Q,u.push(L.x,L.y,L.z),w.set(W,I,Q).normalize(),f.push(w.x,w.y,w.z),d.push(dt,1-A),b.push(g++)}x.push(b)}for(let k=0;k<i;k++)for(let b=0;b<r;b++){let A=x[b][k],H=x[b+1][k],J=x[b+1][k+1],dt=x[b][k+1];h.push(A,H,dt),h.push(H,J,dt),T+=6}c.addGroup(p,T,0),p+=T}function v(w){let L=g,T=new yt,I=new U,k=0,b=w===!0?t:e,A=w===!0?1:-1;for(let J=1;J<=i;J++)u.push(0,m*A,0),f.push(0,A,0),d.push(.5,.5),g++;let H=g;for(let J=0;J<=i;J++){let O=J/i*l+o,W=Math.cos(O),Q=Math.sin(O);I.x=b*Q,I.y=m*A,I.z=b*W,u.push(I.x,I.y,I.z),f.push(0,A,0),T.x=W*.5+.5,T.y=Q*.5*A+.5,d.push(T.x,T.y),g++}for(let J=0;J<i;J++){let dt=L+J,O=H+J;w===!0?h.push(O,O+1,dt):h.push(O+1,O,dt),k+=3}c.addGroup(p,k,w===!0?1:2),p+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ei=class s extends en{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},_c=class s extends _e{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let r=[],a=[];o(i),c(n),h(),this.setAttribute("position",new ae(r,3)),this.setAttribute("normal",new ae(r.slice(),3)),this.setAttribute("uv",new ae(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(y){let v=new U,w=new U,L=new U;for(let T=0;T<e.length;T+=3)d(e[T+0],v),d(e[T+1],w),d(e[T+2],L),l(v,w,L,y)}function l(y,v,w,L){let T=L+1,I=[];for(let k=0;k<=T;k++){I[k]=[];let b=y.clone().lerp(w,k/T),A=v.clone().lerp(w,k/T),H=T-k;for(let J=0;J<=H;J++)J===0&&k===T?I[k][J]=b:I[k][J]=b.clone().lerp(A,J/H)}for(let k=0;k<T;k++)for(let b=0;b<2*(T-k)-1;b++){let A=Math.floor(b/2);b%2===0?(f(I[k][A+1]),f(I[k+1][A]),f(I[k][A])):(f(I[k][A+1]),f(I[k+1][A+1]),f(I[k+1][A]))}}function c(y){let v=new U;for(let w=0;w<r.length;w+=3)v.x=r[w+0],v.y=r[w+1],v.z=r[w+2],v.normalize().multiplyScalar(y),r[w+0]=v.x,r[w+1]=v.y,r[w+2]=v.z}function h(){let y=new U;for(let v=0;v<r.length;v+=3){y.x=r[v+0],y.y=r[v+1],y.z=r[v+2];let w=m(y)/2/Math.PI+.5,L=p(y)/Math.PI+.5;a.push(w,1-L)}g(),u()}function u(){for(let y=0;y<a.length;y+=6){let v=a[y+0],w=a[y+2],L=a[y+4],T=Math.max(v,w,L),I=Math.min(v,w,L);T>.9&&I<.1&&(v<.2&&(a[y+0]+=1),w<.2&&(a[y+2]+=1),L<.2&&(a[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function d(y,v){let w=y*3;v.x=t[w+0],v.y=t[w+1],v.z=t[w+2]}function g(){let y=new U,v=new U,w=new U,L=new U,T=new yt,I=new yt,k=new yt;for(let b=0,A=0;b<r.length;b+=9,A+=6){y.set(r[b+0],r[b+1],r[b+2]),v.set(r[b+3],r[b+4],r[b+5]),w.set(r[b+6],r[b+7],r[b+8]),T.set(a[A+0],a[A+1]),I.set(a[A+2],a[A+3]),k.set(a[A+4],a[A+5]),L.copy(y).add(v).add(w).divideScalar(3);let H=m(L);x(T,A+0,y,H),x(I,A+2,v,H),x(k,A+4,w,H)}}function x(y,v,w,L){L<0&&y.x===1&&(a[v]=y.x-1),w.x===0&&w.z===0&&(a[v]=L/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.details)}};var go=class s extends _c{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}};var xo=class s extends _e{constructor(t=.5,e=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);let o=[],l=[],c=[],h=[],u=t,f=(e-t)/i,d=new U,g=new yt;for(let x=0;x<=i;x++){for(let m=0;m<=n;m++){let p=r+m/n*a;d.x=u*Math.cos(p),d.y=u*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,h.push(g.x,g.y)}u+=f}for(let x=0;x<i;x++){let m=x*(n+1);for(let p=0;p<n;p++){let y=p+m,v=y,w=y+n+1,L=y+n+2,T=y+1;o.push(v,w,T),o.push(w,L,T)}}this.setIndex(o),this.setAttribute("position",new ae(l,3)),this.setAttribute("normal",new ae(c,3)),this.setAttribute("uv",new ae(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Bn=class s extends _e{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new U,f=new U,d=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let y=[],v=p/n,w=0;p===0&&a===0?w=.5/e:p===n&&l===Math.PI&&(w=-.5/e);for(let L=0;L<=e;L++){let T=L/e;u.x=-t*Math.cos(i+T*r)*Math.sin(a+v*o),u.y=t*Math.cos(a+v*o),u.z=t*Math.sin(i+T*r)*Math.sin(a+v*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),m.push(T+w,1-v),y.push(c++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){let v=h[p][y+1],w=h[p][y],L=h[p+1][y],T=h[p+1][y+1];(p!==0||a>0)&&d.push(v,w,T),(p!==n-1||l<Math.PI)&&d.push(w,L,T)}this.setIndex(d),this.setAttribute("position",new ae(g,3)),this.setAttribute("normal",new ae(x,3)),this.setAttribute("uv",new ae(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var _o=class s extends _e{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let a=[],o=[],l=[],c=[],h=new U,u=new U,f=new U;for(let d=0;d<=n;d++)for(let g=0;g<=i;g++){let x=g/i*r,m=d/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(x),u.y=(t+e*Math.cos(m))*Math.sin(x),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/i),c.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=i;g++){let x=(i+1)*d+g-1,m=(i+1)*(d-1)+g-1,p=(i+1)*(d-1)+g,y=(i+1)*d+g;a.push(x,m,y),a.push(m,p,y)}this.setIndex(a),this.setAttribute("position",new ae(o,3)),this.setAttribute("normal",new ae(l,3)),this.setAttribute("uv",new ae(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var kr=class s extends _e{constructor(t=new fo(new U(-1,-1,0),new U(-1,1,0),new U(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new U,l=new U,c=new yt,h=new U,u=[],f=[],d=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new ae(u,3)),this.setAttribute("normal",new ae(f,3)),this.setAttribute("uv",new ae(d,2));function x(){for(let v=0;v<e;v++)m(v);m(r===!1?e:0),y(),p()}function m(v){h=t.getPointAt(v/e,h);let w=a.normals[v],L=a.binormals[v];for(let T=0;T<=i;T++){let I=T/i*Math.PI*2,k=Math.sin(I),b=-Math.cos(I);l.x=b*w.x+k*L.x,l.y=b*w.y+k*L.y,l.z=b*w.z+k*L.z,l.normalize(),f.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function p(){for(let v=1;v<=e;v++)for(let w=1;w<=i;w++){let L=(i+1)*(v-1)+(w-1),T=(i+1)*v+(w-1),I=(i+1)*v+w,k=(i+1)*(v-1)+w;g.push(L,T,k),g.push(T,I,k)}}function y(){for(let v=0;v<=e;v++)for(let w=0;w<=i;w++)c.x=v/e,c.y=w/i,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new s(new y_[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var ps=class extends Mi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new It(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=of,this.normalScale=new yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Dc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function ka(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function M_(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var or=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=e[++n],t<i)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let a=0;a!==i;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},vc=class extends or{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Qh,endingEnd:Qh}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,a=t+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case jh:r=t,o=2*e-n;break;case tu:r=i.length-2,o=e+i[r]-i[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case jh:a=t,l=2*n-e;break;case tu:a=1,l=n+i[1]-i[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-e)/(i-e),x=g*g,m=x*g,p=-f*m+2*f*x-f*g,y=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,v=(-1-d)*m+(1.5+d)*x+.5*g,w=d*m-d*x;for(let L=0;L!==o;++L)r[L]=p*a[h+L]+y*a[c+L]+v*a[l+L]+w*a[u+L];return r}},yc=class extends or{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(i-e),u=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*u+a[l+f]*h;return r}},Mc=class extends or{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},Zn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ka(e,this.TimeBufferType),this.values=ka(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ka(t.times,Array),values:ka(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Mc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new yc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new vc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Va:e=this.InterpolantFactoryMethodDiscrete;break;case Ga:e=this.InterpolantFactoryMethodLinear;break;case ll:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Va;case this.InterpolantFactoryMethodLinear:return Ga;case this.InterpolantFactoryMethodSmooth:return ll}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(i!==void 0&&M_(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ll,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(i)l=!0;else{let u=o*n,f=u-n,d=u+n;for(let g=0;g!==n;++g){let x=e[u+g];if(x!==e[f+g]||x!==e[d+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*n,f=a*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};Zn.prototype.TimeBufferType=Float32Array;Zn.prototype.ValueBufferType=Float32Array;Zn.prototype.DefaultInterpolation=Ga;var ms=class extends Zn{};ms.prototype.ValueTypeName="bool";ms.prototype.ValueBufferType=Array;ms.prototype.DefaultInterpolation=Va;ms.prototype.InterpolantFactoryMethodLinear=void 0;ms.prototype.InterpolantFactoryMethodSmooth=void 0;var bc=class extends Zn{};bc.prototype.ValueTypeName="color";var Sc=class extends Zn{};Sc.prototype.ValueTypeName="number";var Ec=class extends or{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(i-e),c=t*o;for(let h=c+o;c!==h;c+=4)Dn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Hr=class extends Zn{InterpolantFactoryMethodLinear(t){return new Ec(this.times,this.values,this.getValueSize(),t)}};Hr.prototype.ValueTypeName="quaternion";Hr.prototype.DefaultInterpolation=Ga;Hr.prototype.InterpolantFactoryMethodSmooth=void 0;var gs=class extends Zn{};gs.prototype.ValueTypeName="string";gs.prototype.ValueBufferType=Array;gs.prototype.DefaultInterpolation=Va;gs.prototype.InterpolantFactoryMethodLinear=void 0;gs.prototype.InterpolantFactoryMethodSmooth=void 0;var wc=class extends Zn{};wc.prototype.ValueTypeName="vector";var Tc=class{constructor(t,e,n){let i=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],g=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}},b_=new Tc,Ac=class{constructor(t){this.manager=t!==void 0?t:b_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Ac.DEFAULT_MATERIAL_NAME="__DEFAULT";var Vr=class extends Xe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new It(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}},lr=class extends Vr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Xe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new It(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Ol=new fe,Zu=new U,Ju=new U,vo=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new yt(512,512),this.map=null,this.mapPass=null,this.matrix=new fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Or,this._frameExtents=new yt(1,1),this._viewportCount=1,this._viewports=[new tn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Zu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Zu),Ju.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ju),e.updateMatrixWorld(),Ol.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ol),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ol)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Rc=class extends vo{constructor(){super(new cn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,n=Za*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},yo=class extends Vr{constructor(t,e,n=0,i=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Xe.DEFAULT_UP),this.updateMatrix(),this.target=new Xe,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Rc}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Cc=class extends vo{constructor(){super(new sr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},cr=class extends Vr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xe.DEFAULT_UP),this.updateMatrix(),this.target=new Xe,this.shadow=new Cc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var zc="\\[\\]\\.:\\/",S_=new RegExp("["+zc+"]","g"),Bc="[^"+zc+"]",E_="[^"+zc.replace("\\.","")+"]",w_=/((?:WC+[\/:])*)/.source.replace("WC",Bc),T_=/(WCOD+)?/.source.replace("WCOD",E_),A_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Bc),R_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Bc),C_=new RegExp("^"+w_+T_+A_+R_+"$"),P_=["material","materials","bones","map"],Pc=class{constructor(t,e,n){let i=n||Ie.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ie=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(S_,"")}static parseTrackName(t){let e=C_.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);P_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[i];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ie.Composite=Pc;Ie.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ie.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ie.prototype.GetterByBindingType=[Ie.prototype._getValue_direct,Ie.prototype._getValue_array,Ie.prototype._getValue_arrayElement,Ie.prototype._getValue_toArray];Ie.prototype.SetterByBindingTypeAndVersioning=[[Ie.prototype._setValue_direct,Ie.prototype._setValue_direct_setNeedsUpdate,Ie.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ie.prototype._setValue_array,Ie.prototype._setValue_array_setNeedsUpdate,Ie.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ie.prototype._setValue_arrayElement,Ie.prototype._setValue_arrayElement_setNeedsUpdate,Ie.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ie.prototype._setValue_fromArray,Ie.prototype._setValue_fromArray_setNeedsUpdate,Ie.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ev=new Float32Array(1);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Lc}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Lc);function Gr(s){let t=s>>>0;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var De=(s,t,e)=>Math.max(t,Math.min(e,s)),mn=(s,t,e)=>s+(t-s)*e,Ao=s=>(s=De(s,0,1),s*s*(3-2*s));function Si(s,t){return((t-s+Math.PI)%(2*Math.PI)+2*Math.PI)%(2*Math.PI)-Math.PI}var En=(s,t)=>1-Math.exp(-s*t),Eo=new It;function tt(s,t=1){return Eo.setHex(s),[Eo.r*t,Eo.g*t,Eo.b*t]}var vf=new U,yf=new Dn,Mf=new U,bf=new Xi;function ht(s,t,e,n=1,i=1,r=1,a=0,o=0,l=0){return vf.set(s,t,e),bf.set(o,a,l,"YXZ"),yf.setFromEuler(bf),Mf.set(n,i,r),new fe().compose(vf,yf,Mf)}var pe=class{constructor(){this.p=[],this.n=[],this.c=[],this.u=[],this.i=[]}get count(){return this.p.length/3}quad(t,e,n,i,r,a){let o=this.count,l=e[0]-t[0],c=e[1]-t[1],h=e[2]-t[2],u=n[0]-t[0],f=n[1]-t[1],d=n[2]-t[2],g=c*d-h*f,x=h*u-l*d,m=l*f-c*u,p=Math.hypot(g,x,m)||1;g/=p,x/=p,m/=p;let y=[t,e,n,i],v=Array.isArray(r[0]);for(let w=0;w<4;w++){this.p.push(y[w][0],y[w][1],y[w][2]),this.n.push(g,x,m);let L=v?r[w]:r;this.c.push(L[0],L[1],L[2]),a?this.u.push(a[w][0],a[w][1]):this.u.push(w===1||w===2?1:0,w>=2?1:0)}this.i.push(o,o+1,o+2,o,o+2,o+3)}box(t,e,n,i,r,a,o,l){this.quad([t,n,a],[e,n,a],[e,i,a],[t,i,a],o),this.quad([e,n,r],[t,n,r],[t,i,r],[e,i,r],o),this.quad([e,n,a],[e,n,r],[e,i,r],[e,i,a],o),this.quad([t,n,r],[t,n,a],[t,i,a],[t,i,r],o),this.quad([t,i,a],[e,i,a],[e,i,r],[t,i,r],l||o)}bill(t,e,n,i,r,a){let o=this.count,l=[[0,0],[1,0],[1,1],[0,1]];for(let c=0;c<4;c++)this.p.push(t,e,n),this.n.push(i,r,0),this.c.push(a[0],a[1],a[2]),this.u.push(l[c][0],l[c][1]);this.i.push(o,o+1,o+2,o,o+2,o+3)}add(t,e,n){let i=t.index?t.toNonIndexed():t,r=i.attributes.position,a=i.attributes.normal,o=i.attributes.uv,l=new re().getNormalMatrix(e),c=new U,h=new U,u=this.count,f=typeof n=="function";for(let d=0;d<r.count;d++){c.fromBufferAttribute(r,d);let g=f?n(c):n;h.copy(c).applyMatrix4(e),this.p.push(h.x,h.y,h.z),h.fromBufferAttribute(a,d).applyMatrix3(l).normalize(),this.n.push(h.x,h.y,h.z),this.c.push(g[0],g[1],g[2]),o?this.u.push(o.getX(d),o.getY(d)):this.u.push(0,0),this.i.push(u+d)}return this}worldUV(t){for(let e=0,n=0;e<this.p.length;e+=3,n+=2)this.u[n]=this.p[e]*t,this.u[n+1]=this.p[e+2]*t;return this}build(){let t=new _e;return t.setAttribute("position",new ae(this.p,3)),t.setAttribute("normal",new ae(this.n,3)),t.setAttribute("color",new ae(this.c,3)),t.setAttribute("uv",new ae(this.u,2)),t.setIndex(this.i),t.computeBoundingSphere(),t.computeBoundingBox(),t}},L_=new U(0,1,0),wo=new U,Sf={};function Oe(s,t,e,n,i,r=5){wo.set(e[0]-t[0],e[1]-t[1],e[2]-t[2]);let a=wo.length();wo.normalize();let o=new Dn().setFromUnitVectors(L_,wo),l=new fe().compose(new U((t[0]+e[0])/2,(t[1]+e[1])/2,(t[2]+e[2])/2),o,new U(n,a,n)),c=Sf[r]||(Sf[r]=new en(1,1,1,r,1,!0));s.add(c,l,i)}function ni(s,t,e,n={}){let i=document.createElement("canvas");i.width=s,i.height=t;let r=i.getContext("2d");e(r,s,t);let a=new ds(i);return n.repeat!==!1&&(a.wrapS=a.wrapT=cs),n.srgb!==!1&&(a.colorSpace=Ne),a.anisotropy=n.aniso||4,a}var To=class{constructor(t=24){this.cell=t,this.map=new Map,this.stamp=0,this.out=[]}_ins(t,e,n,i,r){let a=this.cell;for(let o=Math.floor(e/a);o<=Math.floor(n/a);o++)for(let l=Math.floor(i/a);l<=Math.floor(r/a);l++){let c=(o+512)*2048+(l+512),h=this.map.get(c);h||this.map.set(c,h=[]),h.push(t)}}box(t,e,n,i,r=0){let a={t:0,x0:t,x1:e,z0:n,z1:i,layer:r,s:0};return this._ins(a,t,e,n,i),a}circle(t,e,n,i=0){let r={t:1,x:t,z:e,r:n,layer:i,s:0};return this._ins(r,t-n,t+n,e-n,e+n),r}query(t,e,n){let i=this.cell,r=this.out;r.length=0;let a=++this.stamp;for(let o=Math.floor((t-n)/i);o<=Math.floor((t+n)/i);o++)for(let l=Math.floor((e-n)/i);l<=Math.floor((e+n)/i);l++){let c=this.map.get((o+512)*2048+(l+512));if(c)for(let h=0;h<c.length;h++){let u=c[h];u.s!==a&&(u.s=a,r.push(u))}}return r}resolve(t,e,n,i=.2){let r=0,a=this.query(t.x,t.z,e+.2);for(let o=0;o<a.length;o++){let l=a[o];if(l.layer&&l.layer!==n)continue;let c,h,u;if(l.t===0){let d=De(t.x,l.x0,l.x1),g=De(t.z,l.z0,l.z1),x=t.x-d,m=t.z-g,p=x*x+m*m;if(p>e*e)continue;if(p>1e-8){let y=Math.sqrt(p);c=x/y,h=m/y,u=e-y}else{let y=t.x-l.x0,v=l.x1-t.x,w=t.z-l.z0,L=l.z1-t.z,T=Math.min(y,v,w,L);T===y?(c=-1,h=0,u=y+e):T===v?(c=1,h=0,u=v+e):T===w?(c=0,h=-1,u=w+e):(c=0,h=1,u=L+e)}}else{let d=t.x-l.x,g=t.z-l.z,x=d*d+g*g,m=e+l.r;if(x>m*m)continue;let p=Math.sqrt(x)||1e-4;c=d/p,h=g/p,u=m-p}t.x+=c*u,t.z+=h*u;let f=t.vx*c+t.vz*h;f<0&&(t.vx-=f*c*(1+i),t.vz-=f*h*(1+i),-f>r&&(r=-f))}return r}near(t,e,n){let i=this.query(t,e,n);for(let r=0;r<i.length;r++){let a=i[r];if(a.t===0){let o=t-De(t,a.x0,a.x1),l=e-De(e,a.z0,a.z1);if(o*o+l*l<n*n)return!0}else if(Math.hypot(t-a.x,e-a.z)<n+a.r)return!0}return!1}blocked(t,e){let n=this.query(t,e,.1);for(let i=0;i<n.length;i++){let r=n[i];if(r.t===0&&!r.layer&&t>r.x0&&t<r.x1&&e>r.z0&&e<r.z1)return!0}return!1}};var I_="varying vec2 vUv; void main(){ vUv = position.xy*0.5+0.5; gl_Position = vec4(position.xy,0.0,1.0); }",Ro=(s,t)=>new Ge({vertexShader:I_,fragmentShader:s,uniforms:t,depthTest:!1,depthWrite:!1}),D_=`
uniform sampler2D tD; uniform vec2 uTexel; uniform float uThr; varying vec2 vUv;
void main(){
  vec3 c = texture2D(tD, vUv + uTexel*vec2(-1.,-1.)).rgb + texture2D(tD, vUv + uTexel*vec2(1.,-1.)).rgb
         + texture2D(tD, vUv + uTexel*vec2(-1.,1.)).rgb + texture2D(tD, vUv + uTexel*vec2(1.,1.)).rgb;
  c = min(c*0.25, vec3(14.0));
  float br = max(c.r, max(c.g, c.b));
  float w = max(br - uThr, 0.0) / max(br, 1e-4);
  gl_FragColor = vec4(c*w, 1.0);
}`,U_=`
uniform sampler2D tD; uniform vec2 uTexel; varying vec2 vUv;
void main(){
  vec3 c = texture2D(tD, vUv).rgb*4.0;
  c += texture2D(tD, vUv + uTexel*vec2(-1.,-1.)).rgb; c += texture2D(tD, vUv + uTexel*vec2(1.,-1.)).rgb;
  c += texture2D(tD, vUv + uTexel*vec2(-1.,1.)).rgb;  c += texture2D(tD, vUv + uTexel*vec2(1.,1.)).rgb;
  gl_FragColor = vec4(c*0.125, 1.0);
}`,N_=`
uniform sampler2D tD; uniform sampler2D tAdd; uniform vec2 uTexel; varying vec2 vUv;
void main(){
  vec2 t = uTexel;
  vec3 c = texture2D(tD, vUv + vec2(-2.*t.x,0.)).rgb + texture2D(tD, vUv + vec2(2.*t.x,0.)).rgb
         + texture2D(tD, vUv + vec2(0.,-2.*t.y)).rgb + texture2D(tD, vUv + vec2(0.,2.*t.y)).rgb;
  c += 2.0*(texture2D(tD, vUv + vec2(-t.x,t.y)).rgb + texture2D(tD, vUv + vec2(t.x,t.y)).rgb
          + texture2D(tD, vUv + vec2(-t.x,-t.y)).rgb + texture2D(tD, vUv + vec2(t.x,-t.y)).rgb);
  gl_FragColor = vec4(c/12.0 + texture2D(tAdd, vUv).rgb, 1.0);
}`,F_=`
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
}`,Co=class{constructor(t){this.r=t;let e=t.extensions;this.hdr=t.capabilities.isWebGL2&&(e.has("EXT_color_buffer_float")||e.has("EXT_color_buffer_half_float")),this.type=this.hdr?hs:ti,this.cam=new sr(-1,1,1,-1,0,1);let n=new _e;n.setAttribute("position",new ae([-1,-1,0,3,-1,0,-1,3,0],3)),this.tri=new oe(n,null),this.tri.frustumCulled=!1,this.scene=new us,this.scene.add(this.tri),this.mPre=Ro(D_,{tD:{value:null},uTexel:{value:new yt},uThr:{value:this.hdr?1:.72}}),this.mDown=Ro(U_,{tD:{value:null},uTexel:{value:new yt}}),this.mUp=Ro(N_,{tD:{value:null},tAdd:{value:null},uTexel:{value:new yt}}),this.mFinal=Ro(F_,{tScene:{value:null},tBloom:{value:null},uBloom:{value:.65},uTime:{value:0},uExp:{value:.9},uFlash:{value:0},uSat:{value:1.12},uTint:{value:new It(1,1,1)}}),this.black=new co(new Uint8Array([0,0,0,255]),1,1),this.black.needsUpdate=!0,this.levels=5,this.bloom=!0,this.down=[],this.up=[],this.sceneRT=null}setSize(t,e,n){this.sceneRT&&this.sceneRT.dispose(),this.down.forEach(o=>o.dispose()),this.up.forEach(o=>o.dispose()),this.down=[],this.up=[];let i={type:this.type,minFilter:bn,magFilter:bn,depthBuffer:!1};this.sceneRT=new In(t,e,Object.assign({},i,{depthBuffer:!0,samples:n||0}));let r=t,a=e;for(let o=0;o<this.levels;o++)r=Math.max(2,r>>1),a=Math.max(2,a>>1),this.down.push(new In(r,a,i)),o<this.levels-1&&this.up.push(new In(r,a,i));this.w=t,this.h=e}pass(t,e){this.tri.material=t,this.r.setRenderTarget(e),this.r.render(this.scene,this.cam)}render(t,e,n){let i=this.r;i.setRenderTarget(this.sceneRT),i.render(t,e);let r=this.black;if(this.bloom){let o=this.levels;this.mPre.uniforms.tD.value=this.sceneRT.texture,this.mPre.uniforms.uTexel.value.set(.5/this.w,.5/this.h),this.pass(this.mPre,this.down[0]);for(let c=1;c<o;c++){let h=this.down[c-1];this.mDown.uniforms.tD.value=h.texture,this.mDown.uniforms.uTexel.value.set(.5/h.width,.5/h.height),this.pass(this.mDown,this.down[c])}let l=this.down[o-1];for(let c=o-2;c>=0;c--)this.mUp.uniforms.tD.value=l.texture,this.mUp.uniforms.tAdd.value=this.down[c].texture,this.mUp.uniforms.uTexel.value.set(.5/l.width,.5/l.height),this.pass(this.mUp,this.up[c]),l=this.up[c];r=l.texture}let a=this.mFinal.uniforms;a.tScene.value=this.sceneRT.texture,a.tBloom.value=r,a.uTime.value=n,this.pass(this.mFinal,null)}};var Ze=[-280,-210,-140,-70,70,140,210,280],We=[-180,-120,-60,0,60,120,180],Ei=s=>s===140?11:7,kc=[{z:-60,name:"\u041A\u043E\u043C\u043C\u0443\u043D\u0430\u043B\u044C\u043D\u044B\u0439 \u043C\u043E\u0441\u0442"},{z:120,name:"\u0411\u0443\u0433\u0440\u0438\u043D\u0441\u043A\u0438\u0439 \u043C\u043E\u0441\u0442"}],ur=296,fr=196,Ef=[[-273,-217],[-203,-147],[-133,-77],[77,129],[151,203],[217,273]],wf=[[-173,-127],[-113,-67],[-53,-7],[7,53],[67,113],[127,173]],O_=[["zone","ind","panel","palace","classic","panel"],["ind","ind","panel","classic","classic","panel"],["panel","panel","classic","park","opera","classic"],["panel","garages","panel","classic","classic","panel"],["panel","panel","fpark","panel","classic","mall"],["vatutina","panel","panel","panel","panel","panel"]],gn={start:[147.4,14],arkasha:[152.4,-30],max:[127.5,90],dima:[57.5,30],igor:[218.6,30],geisler:[103,-133],pasha:[177,68.6],nikita:[127.6,17],kos:[-215.6,-143.5],artem:[245,-128.6],sanya:[-78.5,30],misha:[-105,70.5],garage:[-149.5,22],shop:[218.6,90],vatutina:[-234,171.5],gate:[-215.6,-150],artifact:[-262,-152],tower1:[-78.5,-128.5],tower2:[201.5,51.5],tower3:[-148.5,111.5],leak1:[61,-80],leak2:[103,-9.5],leak3:[146.5,31]},Af=[{x:180,z:-30,r:45,name:"\u041E\u043F\u0435\u0440\u043D\u044B\u0439 \u0442\u0435\u0430\u0442\u0440"},{x:140,z:30,r:22,name:"\u0427\u0430\u0441\u043E\u0432\u043D\u044F \u043D\u0430 \u041A\u0440\u0430\u0441\u043D\u043E\u043C \u043F\u0440\u043E\u0441\u043F\u0435\u043A\u0442\u0435"},{x:0,z:120,r:50,name:"\u0411\u0443\u0433\u0440\u0438\u043D\u0441\u043A\u0438\u0439 \u043C\u043E\u0441\u0442"},{x:0,z:-60,r:50,name:"\u041A\u043E\u043C\u043C\u0443\u043D\u0430\u043B\u044C\u043D\u044B\u0439 \u043C\u043E\u0441\u0442"},{x:-245,z:-150,r:40,name:"\u041F\u0440\u043E\u043C\u0437\u043E\u043D\u0430. \u0422\u0435\u0440\u0440\u0438\u0442\u043E\u0440\u0438\u044F \u041A\u043E\u0441\u0430"},{x:-175,z:30,r:32,name:"\u0413\u0430\u0440\u0430\u0436\u0438. \u0422\u0443\u0442 \u0441\u0438\u0434\u044F\u0442 \xAB\u0442\u0438\u043F\u044B\xBB"},{x:-245,z:150,r:34,name:"\u0412\u0430\u0442\u0443\u0442\u0438\u043D\u0430. \u0414\u0430\u043B\u0435\u043A\u043E\u0432\u0430\u0442\u043E"},{x:103,z:-30,r:30,name:"\u041C\u0438\u0445\u0430\u0439\u043B\u043E\u0432\u0441\u043A\u0430\u044F \u043D\u0430\u0431\u0435\u0440\u0435\u0436\u043D\u0430\u044F"},{x:103,z:-150,r:30,name:"\u0414\u0432\u043E\u0440\u0435\u0446 \u0413\u0430\u0439\u0441\u043B\u0435\u0440\u0430"},{x:-105,z:90,r:30,name:"\u041F\u0430\u0440\u043A. \u0411\u0430\u0442\u044F \u043D\u0430 \u043F\u0440\u0438\u0440\u043E\u0434\u0435"},{x:245,z:90,r:32,name:"\u0422\u0426 \xAB\u0422\u0435\u0445\u043D\u043E\u0420\u0430\u043A\xBB"}];function Hc(s){return s>=52?0:s<=40?-3:-3+3*(s-40)/12}function Yi(s){let t=Math.abs(s.x);if(t<52){for(let n=0;n<2;n++)if(Math.abs(s.z-kc[n].z)<8.6&&s.y>-1.5)return s.layer=1,0}let e=Hc(t);return s.layer=e<-1.5?2:0,e}function Lo(s,t){if(Math.abs(t)<=187){for(let n=0;n<Ze.length;n++)if(Math.abs(s-Ze[n])<Ei(Ze[n]))return!0}let e=Math.abs(s);for(let n=0;n<We.length;n++)if(Math.abs(t-We[n])<7&&(e>=63&&e<=287||e<63&&(We[n]===-60||We[n]===120)))return!0;return!1}var Wr={value:.0052},z_=`
attribute vec3 color; varying vec2 vUv; varying vec3 vC; varying float vF; uniform float uFog;
void main(){ vec4 mv = modelViewMatrix*vec4(position,1.0); gl_Position = projectionMatrix*mv; vUv = uv; vC = color; float d = length(mv.xyz); vF = exp(-uFog*uFog*d*d); }`,Po=(s,t={},e=z_)=>new Ge({vertexShader:e,fragmentShader:s,uniforms:Object.assign({uFog:Wr},t),blending:qn,transparent:!0,depthWrite:!1});function Vc(){return new Ge({uniforms:{uScale:dr,uFog:Wr},vertexShader:`attribute float aSize; attribute vec3 aColor; varying vec3 vC; uniform float uScale; uniform float uFog;
      void main(){ vec4 mv = modelViewMatrix*vec4(position,1.0); gl_Position = projectionMatrix*mv; float d = max(-mv.z, 0.1);
      gl_PointSize = min(aSize*uScale/d, 200.0); vC = aColor*exp(-uFog*uFog*d*d*0.5); }`,fragmentShader:"varying vec3 vC; void main(){ float r = length(gl_PointCoord-0.5)*2.0; float a = pow(max(1.0-r,0.0),2.4)*0.75 + (1.0-smoothstep(0.0,0.22,r))*0.9; gl_FragColor = vec4(vC*a,1.0); }",blending:qn,transparent:!0,depthWrite:!1})}var dr={value:800};function B_(s,t){return s.onBeforeCompile=e=>{e.uniforms.uGlow=t,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
varying float vWY;`).replace("#include <project_vertex>",`#include <project_vertex>
{ vec4 wp = vec4(transformed,1.0);
#ifdef USE_INSTANCING
 wp = instanceMatrix*wp;
#endif
 vWY = (modelMatrix*wp).y; }`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
varying float vWY; uniform vec3 uGlow;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
 totalEmissiveRadiance += diffuseColor.rgb * uGlow * exp(-abs(vWY)*0.13);`)},s}var k_={value:new U(.26,.13,.05)};function qi(s){return B_(new ps(s),k_)}function Tf(s,t){let i=document.createElement("canvas");i.width=i.height=512;let r=i.getContext("2d");r.fillStyle="#000",r.fillRect(0,0,512,512);let a=["#ffcf8a","#ffb866","#ffe2b0","#ffd9a0","#ffc070","#fff0d0","#bfe0ff","#8fb4ff","#d49cff","#ff9f6a"],o=ni(512,512,c=>{for(let h=0;h<8;h++)for(let u=0;u<8;u++){let f=u*64,d=h*64,g,x,m,p;if(s===0?(c.fillStyle=["#c3c6cc","#b9bcc2","#cdcfd3","#bfc2c8"][Math.floor(t()*4)],c.fillRect(f,d,64,64),c.strokeStyle="#8b8f97",c.lineWidth=2,c.strokeRect(f+1,d+1,62,62),g=f+14,x=d+12,m=36,p=28,u%4===1&&(c.fillStyle="#a4a8b0",c.fillRect(f+8,d+42,48,16),c.fillStyle="#8d9199",c.fillRect(f+8,d+42,48,3)),c.fillStyle="#e4e6ea",c.fillRect(g-2,x-2,m+4,p+4)):(c.fillStyle=["#d6d0c6","#cfc9be","#dcd6cc"][Math.floor(t()*3)],c.fillRect(f,d,64,64),c.fillStyle="#b3ad9f",c.fillRect(f,d+58,64,4),c.fillStyle="#c4beb1",c.fillRect(f,d,5,64),g=f+22,x=d+10,m=24,p=40,c.fillStyle="#efeadf",c.fillRect(g-3,x-3,m+6,p+6),c.fillStyle="#e2dccf",c.fillRect(g-5,x+p+3,m+10,3)),t()<(s===0?.36:.42)){let v=a[Math.floor(t()*t()*a.length)];c.fillStyle=v,c.fillRect(g,x,m,p);let w=r.createLinearGradient(0,x,0,x+p);w.addColorStop(0,v),w.addColorStop(1,"#6b4a2a"),r.fillStyle=w,r.fillRect(g,x,m,p),t()<.5&&(r.fillStyle="rgba(0,0,0,0.45)",r.fillRect(g,x,m*(.2+t()*.3),p)),r.fillStyle="#000",r.fillRect(g+m/2-1,x,2,p)}else c.fillStyle=["#18202e","#1d2738","#141a26"][Math.floor(t()*3)],c.fillRect(g,x,m,p);c.fillStyle="rgba(40,44,52,0.9)",c.fillRect(g+m/2-1,x,2,p)}}),l=new ds(i);return l.wrapS=l.wrapT=cs,l.colorSpace=Ne,l.anisotropy=4,{map:o,emissiveMap:l}}function Rf(s){let t=Gr(20261119),e=_=>_[Math.floor(t()*_.length)],n=new To,i={fa:new pe,fb:new pe,pl:new pe,em:new pe,gr:new pe,rd:new pe,br:new pe,brE:new pe,sg:new pe,pool:new pe,cone:new pe,streak:new pe},r=[],a=[],o=[],l=[],c=[],h=tt(15133943),u=tt(13884654),f=tt(10134453),d=tt(2764344),g=tt(6975096),x=[1,.55,.2],m=[1,.74,.42],p=[.62,.8,1],y=(_,R)=>[_[0]*R,_[1]*R,_[2]*R],v=new en(1,1,1,10),w=new ei(1,1,7),L=new ei(1,1,14,1,!0),T=new Bn(1,14,10),I=new Un(1,1,1),k=(_,R,C,D)=>i.gr.box(_,R,0,.15,C,D,f,h);for(let _=0;_<6;_++)for(let R=0;R<6;R++){let C={ci:_,ri:R,x0:Ef[_][0],x1:Ef[_][1],z0:wf[R][0],z1:wf[R][1],type:O_[R][_]};C.cx=(C.x0+C.x1)/2,C.cz=(C.z0+C.z1)/2,l.push(C),k(C.x0,C.x1,C.z0,C.z1)}for(let _ of[-1,1]){let R=_>0?52:-63,C=_>0?63:-52;for(let[z,Z]of[[-187,-67],[-53,113],[127,187]])k(R,C,z,Z);let D=_>0?52:-900,F=_>0?900:-52;k(D,F,-900,-187),k(D,F,187,900),k(_>0?287:-900,_>0?900:-287,-187,187),_>0?i.gr.quad([40,-3,900],[52,.15,900],[52,.15,-900],[40,-3,-900],u):i.gr.quad([-52,.15,900],[-40,-3,900],[-40,-3,-900],[-52,.15,-900],u)}i.gr.worldUV(1/24);let b=(_,R,C,D,F)=>{let z=F?[[0,D/16],[1,D/16],[1,C/16],[0,C/16]]:[[1,_/16],[1,R/16],[0,R/16],[0,_/16]];i.rd.quad([_,0,D],[R,0,D],[R,0,C],[_,0,C],[1,1,1],z)};for(let _ of Ze)b(_-Ei(_),_+Ei(_),-187,187,!0);for(let _ of We){for(let R of[0,4])for(let C=R;C<R+3;C++)b(Ze[C]+Ei(Ze[C]),Ze[C+1]-Ei(Ze[C+1]),_-7,_+7,!1);(_===-60||_===120)&&b(-63,63,_-7,_+7,!1)}let A=(_,R,C,D,F,z,Z,et=0,pt=!1)=>r.push({x:_,z:R,hx:C,hz:D,h:F,c:z,pr:Z,my:et,bridge:pt}),H=(_,R,C,D,F)=>a.push(_,R,C,D,F[0],F[1],F[2]),J=(_,R,C,D,F=.22)=>i.pool.quad([_-C,F,R+C],[_+C,F,R+C],[_+C,F,R-C],[_-C,F,R-C],D);function dt(_,R,C,D,F,z,Z,et){let pt=Math.max(1,Math.round((Z-z)/3)),Ft=Math.floor(t()*8)/8,Se=Ft+pt/8,Ae=(Qe,an,ne,ce,Li)=>{let As=Math.max(1,Math.round(Li/3.2)),He=Math.floor(t()*8)/8,ke=He+As/8;_.quad(Qe,an,ne,ce,et,[[He,Ft],[ke,Ft],[ke,Se],[He,Se]])};Ae([R,z,F],[C,z,F],[C,Z,F],[R,Z,F],C-R),Ae([C,z,D],[R,z,D],[R,Z,D],[C,Z,D],C-R),Ae([C,z,F],[C,z,D],[C,Z,D],[C,Z,F],F-D),Ae([R,z,D],[R,z,F],[R,Z,F],[R,Z,D],F-D)}function O(_,R,C,D,F,z,Z,et){if(dt(_,R,C,D,F,.15,z,Z),i.pl.box(R-.3,C+.3,z,z+.5,D-.3,F+.3,y(Z,.5),h),t()<.7){let pt=2+t()*3,Ft=2+t()*3,Se=mn(R+3,C-3,t()),Ae=mn(D+3,F-3,t());i.pl.box(Se-pt/2,Se+pt/2,z+.5,z+2+t()*1.5,Ae-Ft/2,Ae+Ft/2,tt(3817290),h)}et||n.box(R,C,D,F)}let W=[[1.7,1.15,.6],[1.1,1.4,1.8],[1.8,.55,1.1],[.5,1.6,.85],[1.9,.95,.25],[1.5,1.3,1]];function Q(_,R,C,D){for(let F=_+1;F+3<R;F+=4){if(t()<.22)continue;let z=e(W),Z=C+D*.06,et=y(z,.45);D>0?i.em.quad([F,.7,Z],[F+3,.7,Z],[F+3,3.1,Z],[F,3.1,Z],[et,et,z,z]):i.em.quad([F+3,.7,Z],[F,.7,Z],[F,3.1,Z],[F+3,3.1,Z],[et,et,z,z]),J(F+1.5,C+D*3,4.5,y(z,.1))}}let it={cv:document.createElement("canvas"),n:0,slots:{}};it.cv.width=1024,it.cv.height=2048,it.g=it.cv.getContext("2d"),it.g.fillStyle="#000",it.g.fillRect(0,0,1024,2048);function K(_,R,C,D,F,z,Z,et=!0){let pt=it.slots[_+R];if(pt===void 0){pt=it.slots[_+R]=it.n++;let ke=it.g,la=pt%2*512,ca=Math.floor(pt/2)*64;ke.save(),ke.beginPath(),ke.rect(la,ca,512,64),ke.clip();let ha=44;ke.font=`900 ${ha}px "Arial Black", "Segoe UI", system-ui, sans-serif`;let yh=ke.measureText(_).width;yh>480&&(ha=Math.floor(ha*480/yh),ke.font=`900 ${ha}px "Arial Black", "Segoe UI", system-ui, sans-serif`),ke.textAlign="center",ke.textBaseline="middle",ke.shadowColor=R,ke.shadowBlur=14,ke.fillStyle=R,ke.fillText(_,la+256,ca+34),ke.fillText(_,la+256,ca+34),ke.shadowBlur=0,ke.fillStyle="rgba(255,255,255,0.72)",ke.fillText(_,la+256,ca+34),ke.restore()}let Ft=pt%2*.5,Se=Ft+.5,Ae=1-Math.floor(pt/2)/32,Qe=Ae-1/32,an=z/8,ne=z/2,ce=an/2,Li=[[Ft,Qe],[Se,Qe],[Se,Ae],[Ft,Ae]],As=[1,1,1],He=.12;Z==="+z"?(i.sg.quad([C-ne,D-ce,F+He],[C+ne,D-ce,F+He],[C+ne,D+ce,F+He],[C-ne,D+ce,F+He],As,Li),et&&i.pl.box(C-ne-.2,C+ne+.2,D-ce-.15,D+ce+.15,F-.1,F+.08,d)):Z==="-z"?(i.sg.quad([C+ne,D-ce,F-He],[C-ne,D-ce,F-He],[C-ne,D+ce,F-He],[C+ne,D+ce,F-He],As,Li),et&&i.pl.box(C-ne-.2,C+ne+.2,D-ce-.15,D+ce+.15,F-.08,F+.1,d)):Z==="+x"?(i.sg.quad([C+He,D-ce,F+ne],[C+He,D-ce,F-ne],[C+He,D+ce,F-ne],[C+He,D+ce,F+ne],As,Li),et&&i.pl.box(C-.1,C+.08,D-ce-.15,D+ce+.15,F-ne-.2,F+ne+.2,d)):(i.sg.quad([C-He,D-ce,F-ne],[C-He,D-ce,F+ne],[C-He,D+ce,F+ne],[C-He,D+ce,F-ne],As,Li),et&&i.pl.box(C-.08,C+.1,D-ce-.15,D+ce+.15,F-ne-.2,F+ne+.2,d))}let nt=[["BEAM STORE","#3df2ff"],["\u0418\u0413\u0420\u042B \u041E\u0422 390 \u20BD","#ff4fd8"],["\u041F2 \xB7 \u041F3 \xB7 \u041E\u0411\u041C\u0415\u041D","#ffd23d"],["\u0411\u0410\u0420 \xAB\u041D\u0410 \u0421\u0415\u0420\u0413\u0415\u042F \u0421\u0422\u041E\u041B\u0418\u041A\xBB","#ffae3d"],["\u0420\u042B\u0411\u0410 \xB7 \u041F\u0418\u0412\u041E","#6dff8a"],["\u041A\u0418\u041D\u041E\u0422\u0415\u0410\u0422\u0420 11.1.4","#b98cff"],["\u0428\u0410\u0423\u0420\u041C\u0410 \xAB\u041F\u041B\u041E\u0422\u0412\u0410\xBB","#ff7a3d"],["\u0411\u041E\u0416\u0415, \u0425\u0420\u0410\u041D\u0418 \u041F\u0418\u0420\u0410\u0422\u041E\u0412","#ff4f6a"],["\u0426\u0418\u0412\u0410 \xB7 \u0415\u0429\u0401 \u041E\u0414\u0418\u041D \u0425\u041E\u0414","#3dffb5"],["\u041E\u041F\u0415\u0420\u0410\u0422\u0418\u0412\u041A\u0410 \u0414\u041B\u042F \u0421\u0410\u041D\u0418","#3da8ff"],["\u041C\u0415\u0413\u0410\u0424\u0418\u0413 \xB7 \u0421\u0412\u042F\u0417\u042C \u041A 19-\u041C\u0423","#5dff5d"],["TEKKEN \u0421 \u0414\u0415\u0422\u042C\u041C\u0418","#ff5d3d"],["\u041F\u041E\u0414\u041F\u0418\u0421\u041A\u0410 EXTRA","#5d8bff"],["\u041D\u0415 \u0411\u0415\u0420\u0418 \u041F\u041E\u0414\u041F\u0418\u0421\u041A\u0423","#ff9d3d"],["\u041A\u041E\u0424\u0415\u0419\u041D\u042F","#ffcf8a"],["VR2 \xB7 \u041F\u0420\u041E\u0414\u0410\u041C","#c58cff"],["212 \u0413\u0411 \u0421\u0412\u041E\u0411\u041E\u0414\u041D\u041E","#3dfff0"],["\u0422\u0415\u041B\u0415\u041A\u0418 \xB7 \u0416\u0414\u0418 \u0412 \u0421\u0411","#ffe23d"],["\u041B\u041E\u041C\u0411\u0410\u0420\u0414 \xAB144 \u041A\u0410\u0420\u0422\u041E\u0427\u041A\u0418\xBB","#ff5d9d"],["\u0410\u0422\u0415\u041B\u042C\u0415 \xAB\u0411\u0410\u0411\u041E\u0427\u041A\u0410\xBB","#ffd9a0"],["\u0411\u0410\u0420\u0411\u0415\u0420\u0428\u041E\u041F \xAB\u0414\u041E \u0429\u0415\u0422\u0418\u041D\u042B\xBB","#8affd0"],["\u0412\u0421\u0401 \u0422\u0410\u041A, \u0422\u041E\u041B\u042C\u041A\u041E \u041D\u0410\u041E\u0411\u041E\u0420\u041E\u0422","#ff6ad5"],["\u041C\u0415\u0421\u042F\u0426\u2026","#ff9d3d"],["21 \u0414\u0415\u041D\u042C..","#3df2ff"],["\u041B\u0415\u0422\u0421 \u0413\u041E\u0423","#6dff8a"],["\u0414\u0418\u041C\u0410\u041D, \u0421\u041E\u0420\u042F\u041D","#c58cff"],["\u0417\u0411\u0421 \xB7 \u0412\u042D\u0420\u0418 \u0413\u0423\u0414","#ffd23d"],["\u0417\u0410\u041A\u0410\u041F\u042B\u0412\u0410\u0415\u041C\u0421\u042F","#ff7a3d"]],ct=0,ft=(_,R,C,D)=>{let F=nt[ct++%nt.length],z=De(D-6,6,12);K(F[0],F[1],_,4.7,R+C*.2,z,C>0?"+z":"-z")},St=_=>{let R=Ao((_.y+.5)*1.5-.15);return[mn(.012,.8,R),mn(.05,.86,R),mn(.03,.95,R)]};function $(_,R,C){i.pl.add(v,ht(_,.15+.6*C,R,.22*C,1.2*C,.22*C),tt(2825750));for(let D=0;D<3;D++){let F=(2.3-.55*D)*C,z=2.7*C;i.pl.add(w,ht(_,.15+(1+1.45*D)*C+z/2,R,F,z,F,t()*3),St)}n.circle(_,R,.5*C)}function st(_,R,C=[],D=3){let F=[];for(let z=0;z<R*6&&F.length<R;z++){let Z=mn(_.x0+D,_.x1-D,t()),et=mn(_.z0+D,_.z1-D,t());n.near(Z,et,2.6)||C.some(pt=>Math.hypot(pt[0]-Z,pt[1]-et)<(pt[2]||6))||F.some(pt=>Math.hypot(pt[0]-Z,pt[1]-et)<4)||(F.push([Z,et]),$(Z,et,.75+t()*.8))}}let Mt=[tt(14206880),tt(13612186),tt(12567753),tt(13940912),tt(13225912),tt(13085068)],At=[tt(12106948),tt(11121597),tt(12893358),tt(11055272),tt(12562608),tt(10465476)];function Lt(_,R){let D=_.x0+3,F=_.x1-3,z=_.z0+3,Z=_.z1-3;for(let et of[0,1]){let pt=12.8+Math.floor(t()*2)*1.6,Ft=et?Z-pt:z,Se=et?Z:z+pt,Ae=et?1:-1,Qe=et?Se:Ft,an;if(t()<.6){let ne=mn(D+17,F-17,t());an=[[D,ne-2.4],[ne+2.4,F]]}else an=[[D,F]];for(let[ne,ce]of an){let Li=.15+3*(4+Math.floor(t()*(R?8:5)));O(i.fb,ne,ce,Ft,Se,Li,e(Mt)),Q(ne,ce,Qe,Ae),t()<.9&&ft((ne+ce)/2,Qe,Ae,ce-ne)}}st(_,3)}function Kt(_){let C=_.x0+4,D=_.x1-4,F=_.z0+4,z=_.z1-4,Z=t();if(Z<.45)O(i.fa,C,D,F,F+12.8,27.15,e(At)),O(i.fa,C,D,z-12.8,z,27.15,e(At));else if(Z<.8){O(i.fa,C,D,F,F+12.8,27.15,e(At));let Ft=mn(C+10,D-10,t());O(i.fa,Ft-9.6,Ft+9.6,z-19.2,z,48.15,e(At))}else O(i.fa,C,C+12.8,F,z,27.15,e(At)),O(i.fa,D-12.8,D,F,z,36.15,e(At));let et=_.cx+(t()-.5)*10,pt=_.cz+(t()-.5)*3;i.pl.box(et-1.5,et+1.5,.15,.5,pt-1.5,pt+1.5,tt(9067050),h),Oe(i.pl,[et+3,.15,pt],[et+3,2.4,pt],.08,tt(12728890)),Oe(i.pl,[et+5,.15,pt],[et+5,2.4,pt],.08,tt(12728890)),Oe(i.pl,[et+3,2.4,pt],[et+5,2.4,pt],.08,tt(3828418)),st(_,5,[[et,pt,7]]),A(_.cx-12,_.cz,_.cx-12,_.cz,4.6,m,8)}function jt(_){let R=_.x0+4,C=_.x1-4,D=[tt(7027242),tt(3099194),tt(3819096),tt(5921362),tt(8014366),tt(4861754)];for(let Z=0;Z<3;Z++){let et=_.z0+8+Z*14,pt=et-3,Ft=et+3;i.pl.box(R,C,.15,2.9,pt,Ft,tt(4869202),h),n.box(R,C,pt,Ft);for(let Se=R+.4;Se+3<C;Se+=3.6)i.pl.quad([Se,.2,Ft+.05],[Se+3,.2,Ft+.05],[Se+3,2.5,Ft+.05],[Se,2.5,Ft+.05],e(D)),i.pl.quad([Se+3,.2,pt-.05],[Se,.2,pt-.05],[Se,2.5,pt-.05],[Se+3,2.5,pt-.05],e(D))}K("\u0422\u0418\u041F\u042B \xB7 \u0414\u0418\u0421\u041A\u0418 390 \u20BD","#ff4fd8",C+.2,4,_.z0+22,6,"+x"),A(C-6,_.z0+15,C-6,_.z0+15,4.6,x,9),A(_.cx,_.z0+29,_.cx,_.z0+29,4.6,x,9);let F=C-9,z=_.z0+15;return i.pl.add(v,ht(F,.6,z,.45,.9,.45),tt(3811874)),n.circle(F,z,.6),{fire:[F,1.3,z]}}function Gt(_,R,C){let F=C/6;for(let z=0;z<6;z++){let Z=2-z*.12;i.pl.add(v,ht(_,.15+F*(z+.5),R,Z,F,Z),z%2?tt(14211288):tt(11545122))}i.em.add(T,ht(_,C+.5,R,.35,.35,.35),[3,.2,.15]),H(_,C+.5,R,5,[2.2,.15,.1]),H(_,C*.6,R+2.1,3,[1.8,.12,.08]),n.circle(_,R,2.2),o.push([_,C+1,R])}function le(_){let R=[tt(3752525),tt(4538426),tt(3095874),tt(4865855)],C=_.x0+4,D=C+32,F=_.z0+5,z=F+19,Z=10+t()*4;i.pl.box(C,D,.15,Z,F,z,e(R),h),n.box(C,D,F,z);for(let et=C+2;et+4<D;et+=6){let pt=[.45,1.1,1.3];i.em.quad([et,Z-3,z+.05],[et+4,Z-3,z+.05],[et+4,Z-1.6,z+.05],[et,Z-1.6,z+.05],pt)}Gt(_.x1-9,_.z0+10,38+t()*14);for(let et=0;et<2;et++){let pt=_.x1-9-et*11,Ft=_.z1-9;i.pl.add(v,ht(pt,4.15,Ft,4.5,8,4.5),tt(5857643)),i.pl.add(w,ht(pt,8.9,Ft,4.6,1.5,4.6),h),n.circle(pt,Ft,4.6)}i.pl.box(_.x0+4,_.x1-22,4.6,5.3,_.z1-16,_.z1-15.3,tt(7035450),h);for(let et=_.x0+6;et<_.x1-23;et+=8)i.pl.box(et-.15,et+.15,.15,4.6,_.z1-15.8,_.z1-15.5,d);A(_.x0+20,_.z1-8,_.x0+20,_.z1-8,7,p,12)}function X(_){let R=_.x0+2,C=_.x1-2,D=_.z0+2,F=_.z1-2,z=.4,Z=2.9,et=tt(5988198),pt=_.cz,Ft=(Ae,Qe,an,ne)=>{i.pl.box(Ae,Qe,.15,Z,an,ne,et,h),n.box(Ae,Qe,an,ne)};Ft(R,C,D,D+z),Ft(R,C,F-z,F),Ft(R,R+z,D,F),Ft(C-z,C,D,pt-2.8),Ft(C-z,C,pt+2.8,F),i.pl.box(C-1,C+.6,.15,1.3,pt-.8,pt+.8,g,h),n.box(C-1,C+.6,pt-.8,pt+.8),K("\u0417\u041E\u041D\u0410 \xB7 \u0412\u0425\u041E\u0414 \u041F\u0415\u0428\u041A\u041E\u041C","#7dff5d",C+.1,3.9,pt+8,7,"+x");let Se=[tt(5913126),tt(4866104),tt(4016714)];for(let[Ae,Qe,an,ne,ce]of[[-236,-158,7,2.6,2.6],[-250,-139,3,8,2.8],[-266,-163,6,6,4],[-228,-137,2.5,6,2.4],[-252,-168,9,2.5,3]])i.pl.box(Ae-an/2,Ae+an/2,.15,ce,Qe-ne/2,Qe+ne/2,e(Se),h),n.box(Ae-an/2,Ae+an/2,Qe-ne/2,Qe+ne/2);for(let[Ae,Qe,an]of[[-231,-150,0],[-242,-141,1.3],[-243,-160,2.1],[-254,-150,3.3],[-258,-163,4.4],[-236,-166,5.2],[-262,-141,.7]])c.push({x0:Ae,z0:Qe,x:Ae,z:Qe,ph:an,r:2.6});A(-240,-130,-240,-132,7,[.5,1,.6],12)}function Je(_,R){let C=R?[[_.cx,_.cz,13]]:[[gn.misha[0],gn.misha[1],7]];for(let[D,F]of[[-16,-12],[16,-12],[-16,12],[16,12],[0,18],[0,-18]])A(_.cx+D,_.cz+F,_.cx+D,_.cz+F,4.6,m,9),C.push([_.cx+D,_.cz+F,3]);R&&J(_.cx,_.cz,16,[.5,.3,.6]),st(_,R?16:34,C)}function zt(_){let R=tt(14470052),C=tt(15657436),D=tt(9411238),F=181,z=-30;i.pl.add(new en(1,1,1,24),ht(F,8.15,z,15,16,15),R),i.em.add(new Bn(1,28,10,0,Math.PI*2,0,Math.PI/2),ht(F,16.1,z,15.6,9.6,15.6),Z=>{let et=Ao(Z.y*1.25),pt=.86+.14*Math.sign(Math.sin(Math.atan2(Z.z,Z.x)*14)),Ft=(.75+.25*-Z.x)*pt;return[mn(.62,.11,et)*Ft,mn(.47,.14,et)*Ft,mn(.3,.22,et)*Ft]}),i.pl.add(v,ht(F,26.3,z,1.6,1.6,1.6),C),i.pl.add(w,ht(F,28.6,z,1.2,3,1.2),D),i.pl.box(F-15.2,F+15.2,16,16.9,z-15.2,z+15.2,C),i.pl.box(190,201,.15,21,z-12,z+12,R,h),i.pl.box(160,170,.15,13,z-14,z+14,R,h);for(let Z=0;Z<8;Z++){let et=z-12+Z*24/7;i.pl.add(v,ht(158.8,5.65,et,.85,11,.85),C)}i.pl.box(157.4,160.4,11.1,13,z-14.2,z+14.2,C,h),i.pl.box(157.8,160.2,13,14.4,z-10,z+10,C,h),i.pl.box(158.2,160,14.4,15.4,z-5.5,z+5.5,C,h);for(let Z=0;Z<3;Z++)i.pl.box(153.8+Z*1.1,157.6,.15,.95-Z*.27,z-14.5,z+14.5,tt(10130828),h);for(let Z=0;Z<5;Z++){let et=z-8.5+Z*4.25;i.em.quad([159.94,1.2,et-1.1],[159.94,1.2,et+1.1],[159.94,6.5,et+1.1],[159.94,6.5,et-1.1],[[.7,.42,.18],[.7,.42,.18],[1.7,1.1,.55],[1.7,1.1,.55]])}n.box(158,201,z-14,z+14),n.box(166,196,z-15,z+15);for(let[Z,et]of[[156,-30],[156,-42],[156,-18],[170,-48],[170,-12],[192,-48],[192,-12]])J(Z,et,13,[.4,.26,.12]);for(let Z of[-44,-16])H(155.5,.6,Z,2.2,[2,1.3,.6]),H(155.5,.6,Z+9,2.2,[2,1.3,.6]);i.pl.box(154,156.4,.15,2.2,-9.2,-6.8,tt(5593183),h),n.box(154,156.4,-9.2,-6.8),i.pl.add(T,ht(155.2,3.1,-8,.95,.8,.8),tt(11027502)),i.pl.add(T,ht(154.2,4,-7.2,.45,.6,.35),tt(11027502)),i.pl.add(T,ht(156.2,4,-7.2,.45,.6,.35),tt(11027502)),J(155.2,-6,6,[.6,.4,.2]),st(_,4,[[160,-30,22]])}function Jt(_){let R=tt(15392710),C=90,D=116,F=-164,z=-146;i.pl.box(C,D,.15,11,F,z,R,h),n.box(C,D,F,z),i.pl.box(C-.6,D+.6,11,11.8,F-.6,z+.6,tt(16052194),h),i.pl.add(new Bn(1,16,8,0,Math.PI*2,0,Math.PI/2),ht(103,11.8,-155,5,4,5),tt(12162618));for(let Z=0;Z<7;Z++){let et=C+2.2+Z*3.6,pt=[1.3,.8,.3],Ft=[2.8,2,.95];i.em.quad([et-.9,1.6,z+.06],[et+.9,1.6,z+.06],[et+.9,7.6,z+.06],[et-.9,7.6,z+.06],[pt,pt,Ft,Ft]),Z<6&&i.pl.add(v,ht(et+1.8,4.9,z+.7,.4,9.5,.4),tt(16052194))}for(let Z of[96,103,110])H(Z,6.5,z+.4,6,[1.6,1.1,.5]),J(Z,z+6,9,[.75,.5,.22]);i.pl.quad([101.5,.17,-128],[104.5,.17,-128],[104.5,.17,-146],[101.5,.17,-146],tt(10097192)),K("\u0414\u0412\u041E\u0420\u0415\u0426 \u0413\u0410\u0419\u0421\u041B\u0415\u0420\u0410","#ffd98a",103,10.2,z+.1,12,"+z",!1),st(_,12,[[103,-137,9]])}function Rt(_){i.pl.box(223,267,.15,9.2,74,106,tt(2830656),h),n.box(223,267,74,106);let z=[.25,.5,.7],Z=[.7,1.2,1.6];i.em.quad([223-.06,.8,76],[223-.06,.8,104],[223-.06,4.2,104],[223-.06,4.2,76],[z,z,Z,Z]),i.em.quad([225,.8,106+.06],[265,.8,106+.06],[265,4.2,106+.06],[225,4.2,106+.06],[z,z,Z,Z]),i.em.quad([265,.8,74-.06],[225,.8,74-.06],[225,4.2,74-.06],[265,4.2,74-.06],[z,z,Z,Z]),K("\u0422\u0415\u0425\u041D\u041E\u0420\u0410\u041A \xB7 SSD \xB7 212 \u0413\u0411","#3df2ff",223-.2,6.6,90,16,"-x",!1),K("\u0422\u0415\u041B\u0415\u041A\u0418 \xB7 \u0416\u0414\u0418 \u0412 \u0421\u0411","#ffe23d",245,6.6,106+.2,14,"+z",!1),K("\u041F\u041E\u0414\u041F\u0418\u0421\u041A\u0410 EXTRA","#5d8bff",245,6.6,74-.2,14,"-z",!1),J(218,90,14,[.25,.5,.7]),J(245,111,14,[.25,.5,.7])}function Ee(_){O(i.fa,_.x0+4,_.x1-4,_.z0+4,_.z0+16.8,27.15,e(At));let R=-240,C=-228,D=160,F=168;i.pl.box(R,C,.15,4,D,F,tt(3818064),h),n.box(R,C,D,F),i.em.quad([R+1,.9,F+.06],[C-1,.9,F+.06],[C-1,3,F+.06],[R+1,3,F+.06],[[.4,.9,.6],[.4,.9,.6],[.8,1.9,1.2],[.8,1.9,1.2]]),K("\u0427\u0418\u0421\u0422\u041A\u0410 PS5 \u041E\u0422 \u041F\u042B\u041B\u0418","#6dff8a",-234,4.9,F+.1,11,"+z"),K("\u0423\u041B. \u0412\u0410\u0422\u0423\u0422\u0418\u041D\u0410","#ffffff",-222,3.4,172.6,5,"+z"),Oe(i.pl,[-222,.15,172.5],[-222,3,172.5],.1,d),J(-234,172,9,[.3,.8,.5]),st(_,6)}let te=null;for(let _ of l)_.type==="classic"?Lt(_,_.ci===3||_.ci===4):_.type==="panel"?Kt(_):_.type==="garages"?te=jt(_).fire:_.type==="ind"?le(_):_.type==="zone"?X(_):_.type==="park"?Je(_,!0):_.type==="fpark"?Je(_,!1):_.type==="opera"?zt(_):_.type==="palace"?Jt(_):_.type==="mall"?Rt(_):_.type==="vatutina"&&Ee(_);{let C=tt(15921128),D=tt(10107434),F=tt(14723100);i.pl.add(new en(1,1.15,1,16),ht(140,.35,30,4.6,.7,4.6),h),i.pl.box(140-2.4,140+2.4,.7,6.4,30-2.4,30+2.4,C,h);for(let[Z,et]of[[-2.4,-2.4],[2.4,-2.4],[-2.4,2.4],[2.4,2.4]])i.pl.box(140+Z-.3,140+Z+.3,.7,6.5,30+et-.3,30+et+.3,tt(16513523),h);i.pl.box(140-2.55,140+2.55,.7,1.5,30-2.55,30+2.55,D),i.pl.box(140-2.7,140+2.7,6.4,6.75,30-2.7,30+2.7,D,h);for(let Z of[-1,1])i.pl.add(I,ht(140,6.85,30+Z*2.42,2.3,2.3,.3,0,0,Math.PI/4),C),i.pl.add(I,ht(140+Z*2.42,6.85,30,.3,2.3,2.3,0,Math.PI/4,0),C);i.pl.add(new en(1,1,1,8),ht(140,8.1,30,1.5,2.4,1.5),C);let z=[[.05,0],[1,.25],[1.25,.9],[.95,1.7],[.4,2.4],[.08,3.1]].map(Z=>new yt(Z[0],Z[1]));i.pl.add(new po(z,12),ht(140,9.2,30,1.25,1.1,1.25),F),i.em.box(140-.07,140+.07,12.5,14.1,30-.07,30+.07,[2.2,1.5,.3]),i.em.box(140-.45,140+.45,13.4,13.55,30-.07,30+.07,[2.2,1.5,.3]);for(let[Z,et]of[[0,2.45],[0,-2.45]]){let pt=30+et+Math.sign(et)*.02,Ft=[1.9,1.2,.5];et>0?i.em.quad([140-.6,1.5,pt],[140+.6,1.5,pt],[140+.6,4.2,pt],[140-.6,4.2,pt],Ft):i.em.quad([140+.6,1.5,pt],[140-.6,1.5,pt],[140-.6,4.2,pt],[140+.6,4.2,pt],Ft)}n.circle(140,30,4.7),J(140,30,14,[.9,.6,.3]),H(140,10.6,30,5,[1.4,.9,.25])}let P=[];for(let _ of["tower1","tower2","tower3"]){let[R,C]=gn[_],D=26,F=tt(9080729);for(let[z,Z]of[[-1,-1],[1,-1],[1,1],[-1,1]])Oe(i.pl,[R+z*1.3,.15,C+Z*1.3],[R+z*.25,D,C+Z*.25],.09,F,4);for(let z=3;z<D;z+=4){let Z=mn(1.3,.25,z/D);i.pl.box(R-Z,R+Z,z,z+.12,C-Z,C+Z,F)}i.em.box(R-.5,R+.5,D-4,D-2.2,C-.5,C+.5,[.3,1.6,.4]),n.circle(R,C,1.5),P.push({x:R,z:C,h:D})}for(let _ of[-1,1])for(let R=-170,C=0;R<=170;R+=20,C++)Math.abs(R+60)<12||Math.abs(R-120)<12||(C%2===0?A(_*55,R,_*55,R,4.6,p,9):Math.hypot(_*58.5-gn.dima[0],R-gn.dima[1])>8&&$(_*58.5,R+(t()-.5)*6,.8+t()*.5));Oe(i.pl,[58,.15,-85],[58,9,-85],.22,d),Oe(i.pl,[58,.15,-75],[58,9,-75],.22,d),i.pl.box(58-.25,58+.25,5.5,12,-80-8.5,-80+8.5,d),n.circle(58,-85,.4),n.circle(58,-75,.4),K("\u0422\u0410 \u0421\u0410\u041C\u0410\u042F \u0418\u0413\u0420\u0410","#ff4fd8",58-.3,10.2,-80,15,"-x",!1),K("19.11.2026 \xB7 212 \u0413\u0411","#3df2ff",58-.3,7.8,-80,15,"-x",!1),K("\u0422\u0410 \u0421\u0410\u041C\u0410\u042F \u0418\u0413\u0420\u0410","#ff4fd8",58+.3,10.2,-80,15,"+x",!1),K("\u041E\u0421\u0412\u041E\u0411\u041E\u0414\u0418 \u041C\u0415\u0421\u0422\u041E","#ffd23d",58+.3,7.8,-80,15,"+x",!1);let S=[[1.5,.9,.4],[1.5,.25,.3],[.3,1.4,.6],[.4,.7,1.6]];for(let _=-160,R=0;_<=160;_+=20)if(!(We.some(C=>Math.abs(_-C)<9)||Math.abs(_-30)<12)){for(let C=0;C<=10;C++){let D=C/10;H(129.5+D*21,7.6-Math.sin(D*Math.PI)*1.5,_,.9,S[(R+C)%4])}R++}let q=new Bn(1,8,5);for(let _ of l)for(let R=0;R<5;R++){let C=Math.floor(t()*4),D=t(),F=C<2?mn(_.x0+2,_.x1-2,D):C===2?_.x0+1:_.x1-1,z=C>=2?mn(_.z0+2,_.z1-2,D):C===0?_.z0+1:_.z1-1;n.near(F,z,1.2)||i.pl.add(q,ht(F,.12,z,C<2?1.6+t()*1.6:.9,.35+t()*.3,C<2?.9:1.6+t()*1.6),h)}let ot=["#ff4fd8","#3df2ff","#ffd23d","#6dff8a"],at=(_,R,C,D,F,z,Z)=>{Oe(i.pl,[_,.15,R-5],[_,9,R-5],.22,d),Oe(i.pl,[_,.15,R+5],[_,9,R+5],.22,d),i.pl.box(_-.25,_+.25,5.5,12,R-8.5,R+8.5,d),n.circle(_,R-5,.4),n.circle(_,R+5,.4),K(C,ot[Z%4],_-.3,10.2,R,15,"-x",!1),K(D,ot[(Z+1)%4],_-.3,7.8,R,15,"-x",!1),K(F,ot[(Z+2)%4],_+.3,10.2,R,15,"+x",!1),K(z,ot[(Z+3)%4],_+.3,7.8,R,15,"+x",!1),H(_,12.4,R,3,[.9,.8,.6])};at(-58,-10,"\u041F\u0415\u0419 \u041F\u0418\u0412\u041E","\u0420\u0423\u041A\u0418 \u0414\u041E\u041B\u0416\u041D\u042B \u0411\u042B\u0422\u042C \u0412 \u0420\u042B\u0411\u0415","\u0411\u041E\u0416\u0415, \u0425\u0420\u0410\u041D\u0418 \u041F\u0418\u0420\u0410\u0422\u041E\u0412","\u0410\u041C\u0418\u041D\u042C",0),at(-58,70,"\u0414\u0410\u0412\u041D\u041E \u041D\u0415 \u0412\u041E\u0415\u0412\u0410\u041B\u0418","\u0413\u041E\u0423 \u0412\u0421\u0415 \u041D\u0410 \u0412\u041E\u0419\u041D\u0423","\u041F\u041E\u0422\u0415\u0420\u041F\u0418 \u0427\u0423\u0422\u042C-\u0427\u0423\u0422\u042C!!","\u041E\u041D\u041E \u0421\u0422\u041E\u0418\u0422 \u0422\u041E\u0413\u041E \u0412 20 \u041A\u0420\u0410\u0422",1),at(-58,-130,"\u041A\u0410\u041A \u0420\u0410\u0417 \u041A 19-\u041C\u0423","\u0414\u041E\u041A\u0410\u0427\u0410\u0415\u0422\u0421\u042F","\u0411\u0410\u0422\u042F \u0412 \u0417\u0414\u0410\u041D\u0418\u0418!","\u0412\u0420\u0415\u041C\u0415\u041D\u0418 \u0422\u0423\u041F\u041E \u041D\u0415\u0422",2),at(58,150,"\u0412\u041A\u041B\u042E\u0427\u0418\u041B, \u0412\u042B\u041A\u041B\u042E\u0427\u0418\u041B","\u0414\u0412\u0410 \u0414\u041D\u042F \u041F\u0420\u041E\u0428\u041B\u041E","\u0427\u0422\u041E \u042D\u0422\u041E?","\u0427\u0410\u0422 \u0412\u041B\u0410\u0414\u0415\u041B\u042C\u0426\u0415\u0412 PS5",3),at(58,-130,"\u041E\u0427\u0415\u041D\u042C \u041F\u041B\u041E\u0425\u041E\u0415 \u0421\u041E\u041E\u0411\u0429\u0415\u041D\u0418\u0415","\u041E\u041D\u041E \u041C\u041D\u0415 \u041E\u0427\u0415\u041D\u042C \u041D\u0415 \u041D\u0420\u0410\u0412\u0418\u0422\u0421\u042F","\u041A\u0420\u041E\u041C\u0415 LOA \u0418 RDR","\u041D\u0418\u0427\u0415\u0413\u041E \u041D\u0415 \u0417\u0410\u0415\u0411\u0418\u0421\u042C",0);for(let _=0;_<90;_++){let R=t()*Math.PI*2,C=330+t()*240,D=Math.cos(R)*C*1.3,F=Math.sin(R)*C;if(Math.abs(D)<80||Math.abs(D)<300&&Math.abs(F)<200)continue;let z=16+Math.floor(t()*8)*3.2,Z=12.8+Math.floor(t()*4)*3.2,et=.15+3*(7+Math.floor(t()*18)),pt=t()<.6;dt(pt?i.fa:i.fb,D-z/2,D+z/2,F-Z/2,F+Z/2,.15,et,e(pt?At:Mt)),i.pl.quad([D-z/2,et,F+Z/2],[D+z/2,et,F+Z/2],[D+z/2,et,F-Z/2],[D-z/2,et,F-Z/2],h),et>50&&H(D,et+1,F,5,[2,.15,.1])}for(let _ of Ze){let R=Ei(_),C=0;for(let D=-170;D<=170;D+=34,C++){if(We.some(z=>Math.abs(D-z)<9))continue;let F=C%2?1:-1;A(_+F*(R+.9),D,_+F*(R-1.6),D,8.2,_===140?m:x,13)}if(_===140)for(let D=-153;D<=170;D+=34)We.some(F=>Math.abs(D-F)<9)||(A(_+11.9,D,_+9.4,D,8.2,m,13),A(_-11.9,D,_-9.4,D,8.2,m,13))}for(let _ of We)for(let R of[0,4]){let C=0;for(let D=Ze[R]+22;D<Ze[R+3];D+=35,C++){if(Ze.some(z=>Math.abs(D-z)<Ei(z)+3))continue;let F=C%2?1:-1;A(D,_+F*7.9,D,_+F*5.4,8.2,x,13)}}for(let _ of kc)for(let R=-51;R<=51;R+=17)for(let C of[-1,1])A(R,_.z+C*8.1,R,_.z+C*6.2,7,p,11,-3,!0);let ut=tt(2895928);for(let _ of r){let R=_.bridge?i.br:i.pl;R.box(_.x-.12,_.x+.12,0,_.h,_.z-.12,_.z+.12,ut),(_.x!==_.hx||_.z!==_.hz)&&R.box(Math.min(_.x,_.hx)-.08,Math.max(_.x,_.hx)+.08,_.h-.1,_.h+.1,Math.min(_.z,_.hz)-.08,Math.max(_.z,_.hz)+.08,ut),(_.bridge?i.brE:i.em).box(_.hx-.3,_.hx+.3,_.h-.28,_.h-.1,_.hz-.3,_.hz+.3,y(_.c,5)),H(_.hx,_.h-.3,_.hz,_.h>6?3:2,y(_.c,1.6)),J(_.hx,_.hz,_.pr,y(_.c,_.h>6?.3:.25)),i.cone.add(L,ht(_.hx,_.h/2,_.hz,_.pr*.42,_.h,_.pr*.42),y(_.c,.36)),i.streak.bill(_.hx,2*_.my-_.h*1.1,_.hz,_.h>6?1.1:.8,_.h*.9,y(_.c,_.bridge?3.2:2.6))}for(let _ of kc){let R=_.z;i.br.box(-52,52,-.9,-.02,R-8.6,R+8.6,g,h);for(let C of[-1,1]){i.br.box(-52,52,0,1,R+C*8.45-.1,R+C*8.45+.1,tt(4869978),h),n.box(-52,52,R+C*8.3-.3,R+C*8.3+.3,1);for(let D of[-1,1])n.box(D>0?40:-52,D>0?52:-40,R+C*8.6-.5,R+C*8.6+.5,0)}for(let C of[-1,1])n.box(C>0?41:-43,C>0?43:-41,R-8.6,R+8.6,2);for(let C of[-26,0,26])i.br.box(C-1.5,C+1.5,-3.2,-.9,R-6,R+6,tt(5659236)),n.box(C-1.5,C+1.5,R-6,R+6,2);if(R===120){let C=[1.5,.1,.07],D=50,F=30;for(let z of[-1,1]){let Z=[];for(let et=0;et<=24;et++){let pt=-D+2*D*et/24,Ft=1-pt/D*(pt/D);Z.push(new U(pt,F*Ft+.3,R+z*(9.2-5.5*Ft)))}i.brE.add(new kr(new ar(Z),48,.75,6),new fe,C);for(let et=-42;et<=42;et+=6)for(let pt of[-7,7]){let Ft=1-et/D*(et/D),Se=De(et+pt,-50,50);Oe(i.br,[et,F*Ft,R+z*(9.2-5.5*Ft)],[Se,.9,R+z*8.4],.06,tt(13159636),3)}}for(let z=0;z<=6;z++){let Z=-30+z*10,et=1-Z/D*(Z/D);Oe(i.brE,[Z,F*et+.3,R-(9.2-5.5*et)],[Z,F*et+.3,R+(9.2-5.5*et)],.3,C,5)}H(0,F+1.5,R,7,[2.2,.2,.15])}else{let C=tt(6258566);for(let D=0;D<3;D++)for(let F of[-1,1]){let z=-34+D*34,Z=[];for(let et=0;et<=12;et++){let pt=-1+et/6,Ft=10.5*(1-pt*pt)+.4;Z.push(new U(z+pt*17,Ft,R+F*8.4)),et%2===0&&a.push(z+pt*17,Ft+.5,R+F*8.4,1.5,1.7,1.25,.6),et>0&&et<12&&Oe(i.br,[z+pt*17,Ft,R+F*8.4],[z+pt*17,.9,R+F*8.4],.07,C,3)}i.br.add(new kr(new ar(Z),20,.4,5),new fe,C)}}}let Ct=Tf(0,t),vt=Tf(1,t),wt=qi({map:Ct.map,emissiveMap:Ct.emissiveMap,emissive:16777215,emissiveIntensity:1.5,vertexColors:!0}),Bt=qi({map:vt.map,emissiveMap:vt.emissiveMap,emissive:16777215,emissiveIntensity:1.5,vertexColors:!0}),Wt=qi({vertexColors:!0}),rt=new hn({vertexColors:!0}),he=new ds(it.cv);he.colorSpace=Ne,he.anisotropy=4;let ie=Po("uniform sampler2D map; varying vec2 vUv; varying vec3 vC; varying float vF; void main(){ vec3 t = texture2D(map, vUv).rgb; gl_FragColor = vec4(t*t*2.6*vC*vF, 1.0); }",{map:{value:he}}),Zt=ni(256,256,_=>{_.fillStyle="#eef2fa",_.fillRect(0,0,256,256);for(let R=0;R<60;R++){let C=t()*256,D=t()*256,F=10+t()*40,z=_.createRadialGradient(C,D,0,C,D,F);z.addColorStop(0,t()<.5?"rgba(196,208,232,0.5)":"rgba(255,255,255,0.6)"),z.addColorStop(1,"rgba(230,236,247,0)"),_.fillStyle=z,_.fillRect(C-F,D-F,F*2,F*2)}for(let R=0;R<500;R++)_.fillStyle=t()<.5?"rgba(255,255,255,0.9)":"rgba(170,185,215,0.5)",_.fillRect(t()*256,t()*256,1.5,1.5)}),Nt=ni(256,256,_=>{_.fillStyle="#20232b",_.fillRect(0,0,256,256);for(let R=0;R<1400;R++)_.fillStyle=`rgba(${150+t()*100},${160+t()*90},${190+t()*60},${t()*.16})`,_.fillRect(t()*256,t()*256,1+t()*2,1+t()*3);for(let[R,C]of[[.5,26],[.02,30],[.98,30]]){let D=_.createLinearGradient(R*256-C,0,R*256+C,0);D.addColorStop(0,"rgba(215,224,240,0)"),D.addColorStop(.5,R===.5?"rgba(190,200,222,0.5)":"rgba(228,234,246,0.98)"),D.addColorStop(1,"rgba(215,224,240,0)"),_.fillStyle=D,_.fillRect(R*256-C,0,C*2,256)}for(let R of[.2,.36,.64,.8]){let C=_.createLinearGradient(R*256-12,0,R*256+12,0);C.addColorStop(0,"rgba(8,9,12,0)"),C.addColorStop(.5,"rgba(8,9,12,0.75)"),C.addColorStop(1,"rgba(8,9,12,0)"),_.fillStyle=C,_.fillRect(R*256-12,0,24,256)}for(let R=0;R<50;R++){_.fillStyle="rgba(225,232,245,0.5)";let C=[.1,.28,.5,.72,.9][Math.floor(t()*5)];_.fillRect(C*256-8+t()*16,t()*256,3+t()*8,2+t()*4)}},{aniso:8}),Tt=ni(512,512,_=>{_.fillStyle="#1e3f5c",_.fillRect(0,0,512,512);for(let R=0;R<40;R++){let C=t()*512,D=t()*512,F=30+t()*90,z=_.createRadialGradient(C,D,0,C,D,F);z.addColorStop(0,t()<.65?"rgba(228,238,252,0.8)":"rgba(10,30,50,0.5)"),z.addColorStop(1,"rgba(30,63,92,0)"),_.fillStyle=z,_.fillRect(C-F,D-F,F*2,F*2)}_.strokeStyle="rgba(200,230,255,0.4)";for(let R=0;R<26;R++){_.lineWidth=.6+t()*1.6,_.beginPath();let C=t()*512,D=t()*512;_.moveTo(C,D);for(let F=0;F<6;F++)C+=(t()-.5)*120,D+=(t()-.5)*120,_.lineTo(C,D);_.stroke()}}),ee=new ps({map:Zt,vertexColors:!0}),ue=new ps({map:Nt,transparent:!0,opacity:.88}),Le=new ps({map:Tt,transparent:!0,opacity:.68,color:14674678}),Pt=(_,R,C=3)=>{let D=new oe(_,R);return D.castShadow=!!(C&1),D.receiveShadow=!!(C&2),D},mt=new Fe,N=new Fe,_t=new Fe,gt=new Fe,Vt=i.fa.build(),Ot=i.fb.build(),me=i.pl.build(),ge=i.em.build(),ze=i.sg.build(),$e=i.br.build(),xe=i.brE.build();mt.add(Pt(Vt,wt),Pt(Ot,Bt),Pt(me,Wt),Pt(ge,rt,0),Pt(ze,ie,0)),N.add(Pt(Vt,wt,0),Pt(Ot,Bt,0),Pt(me,Wt,0),Pt(ge,rt,0),Pt(ze,ie,0)),N.scale.y=-1,_t.add(Pt($e,Wt),Pt(xe,rt,0)),gt.add(Pt($e,Wt,0),Pt(xe,rt,0)),gt.scale.y=-1,gt.position.y=-6;let rn=Pt(i.gr.build(),ee,2),Rn=Pt(i.rd.build(),ue,2);Rn.renderOrder=-10;let Ss=new pe;Ss.quad([-40,-3,900],[40,-3,900],[40,-3,-900],[-40,-3,-900],[1,1,1]),Ss.worldUV(1/70);let ia=Pt(Ss.build(),Le,2);ia.renderOrder=-11,s.add(mt,N,_t,gt,rn,Rn,ia);let Ci=new oe(i.pool.build(),Po("varying vec2 vUv; varying vec3 vC; varying float vF; void main(){ float r = length(vUv-0.5)*2.0; float a = pow(max(1.0-r,0.0),1.8); gl_FragColor = vec4(vC*a*vF,1.0); }"));Ci.renderOrder=2;let $i=new oe(i.cone.build(),Po(`varying vec3 vC; varying float vF; varying vec3 vN; varying vec3 vV; varying vec2 vUv;
    void main(){ float f = abs(dot(normalize(vN), normalize(vV))); float a = f*f*pow(clamp(vUv.y,0.0,1.0),1.5); gl_FragColor = vec4(vC*a*vF,1.0); }`,{},`attribute vec3 color; varying vec2 vUv; varying vec3 vC; varying float vF; varying vec3 vN; varying vec3 vV; uniform float uFog;
    void main(){ vec4 mv = modelViewMatrix*vec4(position,1.0); gl_Position = projectionMatrix*mv; vUv = uv; vC = color; vN = normalMatrix*normal; vV = -mv.xyz; float d = length(mv.xyz); vF = exp(-uFog*uFog*d*d); }`));$i.material.side=Sn,$i.renderOrder=3;let li=new oe(i.streak.build(),Po(`varying vec2 vUv; varying vec3 vC; varying float vF;
    void main(){ float dx = (vUv.x-0.5)*3.6; float dy = (vUv.y-0.55)*2.4; float gx = exp(-dx*dx); float gy = exp(-dy*dy); gl_FragColor = vec4(vC*gx*gy*vF,1.0); }`,{},`attribute vec3 color; varying vec2 vUv; varying vec3 vC; varying float vF; uniform float uFog;
    void main(){ vec3 right = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]);
      vec3 wp = position + right*(uv.x-0.5)*2.0*normal.x + vec3(0.0,1.0,0.0)*(uv.y-0.5)*2.0*normal.y;
      vec4 mv = viewMatrix*vec4(wp,1.0); gl_Position = projectionMatrix*mv; vUv = uv; vC = color; float d = length(mv.xyz); vF = exp(-uFog*uFog*d*d); }`));li.frustumCulled=!1,li.renderOrder=-20,s.add(Ci,$i,li);let Es=Vc(),Ki=a.length/7,sa=new Float32Array(Ki*3),ra=new Float32Array(Ki),aa=new Float32Array(Ki*3);for(let _=0;_<Ki;_++)sa.set(a.slice(_*7,_*7+3),_*3),ra[_]=a[_*7+3],aa.set(a.slice(_*7+4,_*7+7),_*3);let E=new _e;E.setAttribute("position",new de(sa,3)),E.setAttribute("aSize",new de(ra,1)),E.setAttribute("aColor",new de(aa,3));let B=new bi(E,Es);B.frustumCulled=!1,B.renderOrder=5,s.add(B);let G=new U(-.45,.62,-.64).normalize(),Y=new It(.05,.058,.115),V=new oe(new Bn(900,24,16),new Ge({side:pn,depthWrite:!1,fog:!1,uniforms:{uMoon:{value:G},uHor:{value:Y}},vertexShader:"varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`varying vec3 vDir; uniform vec3 uMoon; uniform vec3 uHor;
      void main(){ vec3 d = normalize(vDir); d.y = abs(d.y); float h = d.y;
        float ih = clamp(1.0-h, 0.0, 1.0);
        vec3 c = mix(vec3(0.008,0.014,0.04), uHor, pow(ih, 3.2));
        c += vec3(0.30,0.15,0.10)*pow(ih, 7.0)*(0.55 + 0.45*d.x);
        float m = max(dot(d, uMoon), 0.0);
        c += vec3(0.75,0.85,1.0)*(smoothstep(0.9993,0.9996,m)*3.0 + pow(m,90.0)*0.35 + pow(m,10.0)*0.08);
        gl_FragColor = vec4(c,1.0); }`}));V.renderOrder=-100,V.frustumCulled=!1,s.add(V),s.fog=new oo(Y,Wr.value),s.background=Y;let bt=new lr(new It(.3,.4,.78),new It(.2,.15,.17),.7),Et=new cr(new It(.58,.72,1),1);Et.shadow.mapSize.set(2048,2048),Et.shadow.bias=-6e-4,Et.shadow.normalBias=.6;let Dt=Et.shadow.camera;Dt.left=-110,Dt.right=110,Dt.top=110,Dt.bottom=-110,Dt.near=10,Dt.far=520,s.add(bt,Et,Et.target);let kt=new pe,Xt=15;for(let _ of[-1.2,1.2]){kt.add(new _o(Xt,.2,5,48),ht(_,0,0,1,1,1,Math.PI/2),tt(8029334));for(let R=0;R<12;R++){let C=R*Math.PI/6;Oe(kt,[_,0,0],[_,Math.cos(C)*Xt,Math.sin(C)*Xt],.07,tt(6976646),3)}}let $t=[tt(14238266),tt(3836633),tt(14725690),tt(4899450)];for(let _=0;_<12;_++){let R=_*Math.PI/6+.26;kt.add(I,ht(0,Math.cos(R)*Xt,Math.sin(R)*Xt,2,1.7,1.7,0,-R),$t[_%4])}let qt=new Fe;qt.position.set(103,17.4,-30),qt.add(new oe(kt.build(),Wt));let Me=48,un=new Float32Array(Me*3),Be=new Float32Array(Me),Fn=new Float32Array(Me*3),we=[[2.2,.3,1.4],[.3,1.8,2.2],[2.2,1.5,.3],[.5,2.2,.8]];for(let _=0;_<Me;_++){let R=_/Me*Math.PI*2;un.set([0,Math.cos(R)*Xt,Math.sin(R)*Xt],_*3),Be[_]=1.5,Fn.set(we[Math.floor(_/4)%4],_*3)}let Qt=new _e;Qt.setAttribute("position",new de(un,3)),Qt.setAttribute("aSize",new de(Be,1)),Qt.setAttribute("aColor",new de(Fn,3));let ws=new bi(Qt,Es);ws.frustumCulled=!1,qt.add(ws),s.add(qt);let Te=new pe;for(let _ of[-7,7])for(let R of[-2.4,2.4])Oe(Te,[103+R,.15,-30+_],[103+R*.5,17.4,-30],.28,tt(5857907),5);let ci=Pt(Te.build(),Wt,1);s.add(ci),n.circle(103,-37,1.6),n.circle(103,-23,1.6);let oa=ni(64,64,_=>{let R=_.createRadialGradient(32,32,0,32,32,32);R.addColorStop(0,"rgba(255,255,255,0.9)"),R.addColorStop(1,"rgba(255,255,255,0)"),_.fillStyle=R,_.fillRect(0,0,64,64)},{repeat:!1}),Pi=[];for(let _ of o)for(let R=0;R<6;R++){let C=new rr(new fs({map:oa,color:new It(.34,.3,.36),transparent:!0,opacity:0,depthWrite:!1}));s.add(C),Pi.push({sp:C,s:_,ph:R/6})}let Ts=new Ge({uniforms:{uTime:{value:0}},blending:qn,transparent:!0,depthWrite:!1,vertexShader:"uniform float uTime; varying vec3 vN; varying vec3 vV; void main(){ vec3 p = position*(1.0+0.14*sin(uTime*3.0+position.y*3.0+position.x*2.0)); vec4 mv = modelViewMatrix*vec4(p,1.0); vN = normalize(normalMatrix*normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix*mv; }",fragmentShader:"uniform float uTime; varying vec3 vN; varying vec3 vV; void main(){ float f = clamp(1.0-abs(dot(normalize(vN),vV)),0.0,1.0); float a = f*f*1.8+0.06; vec3 c = mix(vec3(0.2,1.2,0.6), vec3(0.7,0.3,1.3), 0.5+0.5*sin(uTime*2.0+f*6.0)); gl_FragColor = vec4(c*a,1.0); }"}),Ke=new go(2.3,2);for(let _ of c)_.mesh=new oe(Ke,Ts),_.mesh.position.set(_.x,2.2,_.z),s.add(_.mesh);let Qn={col:n,lamps:r,blocks:l,towers:P,anomalies:c,fire:te,moon:Et,moonDir:G,hemi:bt,mirror:N,bridgesM:gt,sky:V,cones:$i,streaks:li,pools:Ci,glowMat:Es,mPL:Wt,mEM:rt,roadsMat:ue,update(_,R,C){qt.rotation.x+=_*.12,Ts.uniforms.uTime.value=R;for(let D of c)D.x=D.x0+Math.sin(R*.7+D.ph)*3.2,D.z=D.z0+Math.cos(R*.55+D.ph*1.7)*3.2,D.mesh.position.set(D.x,2.2+Math.sin(R*2+D.ph)*.3,D.z);for(let D of Pi){let F=(R*.05+D.ph)%1;D.sp.position.set(D.s[0]+F*34,D.s[1]+F*22,D.s[2]+F*12);let z=5+F*26;D.sp.scale.set(z,z,1),D.sp.material.opacity=.5*(1-F)*Ao(F*8)}V.position.copy(C.position)},setShadowCenter(_,R){let C=Math.round(_/4)*4,D=Math.round(R/4)*4;Et.target.position.set(C,0,D),Et.position.set(C+G.x*260,G.y*260,D+G.z*260),Et.target.updateMatrixWorld()},drawMap(_,R){let C=z=>(z+300)*R,D=z=>(z+200)*R;_.fillStyle="#0d1220",_.fillRect(0,0,600*R,400*R),_.fillStyle="#17304a",_.fillRect(C(-52),0,104*R,400*R),_.fillStyle="#21486b",_.fillRect(C(-40),0,80*R,400*R);let F={park:"#17382a",fpark:"#17382a",zone:"#2c2140",ind:"#2a2622",opera:"#3a3122",garages:"#2a2a2e",palace:"#33301f",mall:"#1d2a3c"};for(let z of l)_.fillStyle=F[z.type]||"#1a2132",_.fillRect(C(z.x0),D(z.z0),(z.x1-z.x0)*R,(z.z1-z.z0)*R);_.fillStyle="#465068";for(let z of Ze)_.fillRect(C(z-Ei(z)),D(-187),Ei(z)*2*R,374*R);for(let z of We)_.fillRect(C(-287),D(z-7),224*R,14*R),_.fillRect(C(63),D(z-7),224*R,14*R);_.fillStyle="#8b6f6f",_.fillRect(C(-63),D(-67),126*R,14*R),_.fillStyle="#c0483c",_.fillRect(C(-63),D(113),126*R,14*R),_.fillStyle="#d8c79a",_.beginPath(),_.arc(C(181),D(-30),14*R,0,7),_.fill(),_.fillStyle="#e0b040",_.beginPath(),_.arc(C(140),D(30),4*R,0,7),_.fill()}};return Qn.setShadowCenter(gn.start[0],gn.start[1]),Qn}var Ht={sph:new Bn(1,12,9),cyl:new en(1,1,1,10),cone:new ei(1,1,8),box:new Un(1,1,1)},Gc,Cf,Pf,H_={arkasha:13123630,max:14375484,dima:856344,igor:15790320,geisler:12729170,pasha:14725168,nikita:13589043,kos:3117020,artem:5027914,sanya:10263708,misha:14180922},Xr=tt(16053492),pr=tt(526346),Lf=tt(14723100),V_=(s,t)=>[s[0]*t,s[1]*t,s[2]*t];function Wc(s,t,e){let n=ni(128,128,r=>{r.clearRect(0,0,128,128),r.fillStyle=t,r.beginPath(),r.arc(64,64,60,0,7),r.fill(),r.strokeStyle=e,r.lineWidth=5,r.stroke(),r.fillStyle=e,r.font='900 58px "Arial Black", system-ui, sans-serif',r.textAlign="center",r.textBaseline="middle",r.fillText(s,64,68)},{repeat:!1}),i=new oe(new mo(.19,20),new hn({map:n,transparent:!0}));return i.position.set(0,1.08,.405),i}function If(s){Gc||(Gc=qi({vertexColors:!0}),Cf=new hn({vertexColors:!0}),Pf=qi({vertexColors:!0,map:ni(128,128,L=>{L.fillStyle="#f2c94c",L.fillRect(0,0,128,128);let T=["#1b1b1b","#ffffff","#c0392b","#1f8a70","#8e6b00","#f7e08a"];for(let I=0;I<90;I++){L.fillStyle=T[I%T.length];let k=3+I*7%9;L.fillRect(I*37%128,I*53%128,k,k+I%3*3)}L.strokeStyle="#7a5a00",L.lineWidth=1.5;for(let I=0;I<9;I++)L.beginPath(),L.arc(I*47%128,I*71%128,6+I%4,0,5),L.stroke()})}));let t=new Fe,e=new Fe;t.add(e);let n=new pe,i=new pe,r=tt(H_[s]),a=V_(r,.6),o=s==="dima"?tt(1449e3):s==="igor"?tt(14474460):s==="pasha"?tt(16111470):s==="sanya"?tt(13158600):tt(15912870),l=s==="igor"?pr:r,c=s==="igor"?pr:a,h=s==="pasha"?Pf:Gc,u=s==="arkasha",f=s==="nikita";n.add(Ht.sph,ht(0,1,0,.44,.56,.38),u?tt(1316380):f?tt(1513243):r),!u&&!f&&n.add(Ht.sph,ht(0,.98,.13,.33,.44,.28),o),n.add(Ht.sph,ht(0,1.62,.02,.4,.34,.36),r),n.add(Ht.box,ht(0,1.52,.34,.16,.03,.04),pr);for(let L of[-1,1]){Oe(n,[L*.15,1.85,.1],[L*.19,2.12,.14],.035,r,5),n.add(Ht.sph,ht(L*.19,2.16,.15,.1,.1,.1),Xr),s==="dima"?i.add(Ht.sph,ht(L*.19,2.165,.235,.055,.055,.03),[.3,2.4,2.8]):n.add(Ht.sph,ht(L*.19,2.165,.235,.05,.05,.03),pr),Oe(n,[L*.1,1.9,.25],[L*.45,2.55,-.2],.016,c,4);for(let T=0;T<3;T++)Oe(n,[L*.36,1-T*.17,0],[L*.6,.86-T*.17,.08],.035,c,4),Oe(n,[L*.6,.86-T*.17,.08],[L*.68,.6-T*.17,.14],.028,c,4)}n.add(Ht.sph,ht(0,.62,-.18,.36,.26,.3),l),n.add(Ht.sph,ht(0,.42,-.38,.3,.2,.26),c),n.add(Ht.sph,ht(0,.26,-.6,.3,.07,.24),l);for(let L of[-1,1])n.add(Ht.sph,ht(L*.26,.26,-.56,.2,.06,.2,L*.5),c);let d=L=>{let T=new pe;Oe(T,[0,0,0],[L*.3,-.22,.2],.07,c,5),s==="max"?T.add(Ht.sph,ht(L*.36,-.26,.4,.27,.27,.27),tt(13637656)):(T.add(Ht.sph,ht(L*.3,-.22,.2,.09,.09,.09),l),T.add(Ht.sph,ht(L*.36,-.26,.42,.2,.27,.18),l),T.add(Ht.cone,ht(L*.36,-.1,.74,.13,.5,.1,0,Math.PI/2-.28),l),T.add(Ht.cone,ht(L*.36,-.42,.66,.09,.36,.08,0,Math.PI/2+.32),c)),s==="artem"&&L>0&&(T.add(Ht.cyl,ht(.38,-.02,.5,.11,.26,.11),tt(14721056)),T.add(Ht.cyl,ht(.38,.14,.5,.115,.06,.115),Xr)),s==="artem"&&L<0&&(T.add(Ht.sph,ht(-.38,.02,.56,.07,.11,.26),tt(9082790)),T.add(Ht.cone,ht(-.38,.02,.86,.02,.14,.12,0,-Math.PI/2),tt(6977414)));let I=new oe(T.build(),h);return I.position.set(L*.42,1.3,.05),I.castShadow=!0,e.add(I),I},g=L=>{let T=new pe;T.add(Ht.cyl,ht(0,-.25,0,.09,.5,.09),c),T.add(Ht.sph,ht(0,-.5,.07,.13,.07,.2),l);let I=new oe(T.build(),h);return I.position.set(L*.17,.57,0),I.castShadow=!0,e.add(I),I},x=d(-1),m=d(1),p=g(-1),y=g(1),v=null;if(s==="arkasha")n.add(Ht.sph,ht(0,1.08,.2,.19,.36,.24),Xr),n.add(Ht.box,ht(-.09,1.4,.42,.14,.1,.05,0,0,.3),tt(10097192)),n.add(Ht.box,ht(.09,1.4,.42,.14,.1,.05,0,0,-.3),tt(10097192)),n.add(Ht.box,ht(0,1.4,.44,.05,.07,.05),tt(6949916)),n.add(Ht.sph,ht(0,1.48,.2,.33,.2,.22),tt(5913122));else if(s==="max")n.add(Ht.cyl,ht(0,.72,0,.43,.24,.37),tt(1851304)),n.add(Ht.cyl,ht(0,.86,0,.44,.05,.38),Xr);else if(s==="dima")n.add(Ht.box,ht(0,1.08,-.42,.52,.62,.26),tt(1712688)),n.add(Ht.box,ht(0,1.2,-.56,.3,.2,.06),tt(2503240)),v={y:.4,c:[.25,.4,.7],s:4.5};else if(s==="igor")e.add(Wc("\u0418\u0411","#ffffff","#000000"));else if(s==="geisler"){n.add(Ht.cone,ht(0,.98,-.14,.66,1.3,.44),tt(5906298)),n.add(Ht.cyl,ht(0,1.99,0,.2,.1,.2),Lf);for(let L=0;L<5;L++){let T=L*Math.PI*2/5;n.add(Ht.cone,ht(Math.sin(T)*.17,2.1,Math.cos(T)*.17,.04,.14,.04),Lf)}Oe(i,[0,2.75,0],[0,3,0],.015,[1.2,.9,.4],4);for(let L=0;L<6;L++){let T=L*Math.PI/3;i.add(Ht.sph,ht(Math.sin(T)*.26,2.72,Math.cos(T)*.26,.05,.07,.05),[3.2,2.3,1])}i.add(Ht.cyl,ht(0,2.76,0,.27,.02,.27),[1.4,1,.4]),v={y:2.72,c:[1.5,1,.45],s:2.6}}else if(s==="pasha")v={y:1.2,c:[.8,.55,.12],s:3.2};else if(s==="nikita")n.add(Ht.sph,ht(0,1.66,-.09,.45,.38,.36),tt(1513243)),n.add(Ht.box,ht(0,2.16,.22,.62,.15,.1),pr),i.add(Ht.box,ht(-.17,2.19,.275,.16,.02,.01),[.6,.8,1.2]);else if(s==="kos")e.add(Wc("\u0421\u041A","#35a7e8","#ffffff")),n.add(Ht.cyl,ht(0,1.46,.36,.09,.14,.09,0,Math.PI/2),tt(3357235)),n.add(Ht.sph,ht(0,1.7,-.1,.43,.34,.34),tt(4151860));else if(s==="artem")e.add(Wc("\u0410\u041A","#58c152","#ffffff"));else if(s==="sanya")n.add(Ht.sph,ht(0,1.47,.2,.33,.22,.22),tt(2368548)),n.add(Ht.box,ht(.5,1,.14,.05,.36,.5),tt(3159100)),i.add(Ht.box,ht(.53,1,.14,.01,.3,.44),[.5,.9,1.5]);else if(s==="misha"){n.add(Ht.cyl,ht(0,1.99,-.02,.27,.14,.27),tt(7039802)),n.add(Ht.cyl,ht(0,1.93,-.02,.44,.03,.44),tt(7039802));let L=-.52,T=1.62;n.add(Ht.sph,ht(L,T,0,.15,.13,.13),r);for(let I of[-1,1])n.add(Ht.sph,ht(L+I*.06,T+.16,.06,.04,.04,.04),Xr),n.add(Ht.sph,ht(L+I*.06,T+.165,.095,.02,.02,.015),pr),n.add(Ht.sph,ht(L+I*.17,T+.02,.08,.06,.08,.05),r)}let w=new oe(n.build(),h);return w.castShadow=!0,e.add(w),i.count&&e.add(new oe(i.build(),Cf)),t.userData={id:s,inner:e,armL:x,armR:m,legL:p,legR:y,ph:Math.random()*6,glow:v},t}function Io(s,t,e,n){let i=s.userData,r=t*11;i.inner.position.y=Math.abs(Math.sin(r))*.07*e+Math.sin(t*2+i.ph)*.02,i.inner.rotation.z=Math.sin(r)*.07*e,i.legL.rotation.x=Math.sin(r)*.9*e,i.legR.rotation.x=-Math.sin(r)*.9*e;let a=Math.sin(t*1.7+i.ph)*.08,o=n?1:0;i.armL.rotation.x=-Math.sin(r)*.5*e+a-o*(.9+Math.sin(t*9)*.35),i.armR.rotation.x=Math.sin(r)*.5*e-a-o*(.5+Math.cos(t*7)*.3),i.armL.rotation.z=-o*.3,i.armR.rotation.z=o*.3}function Df(s,t){let e=ni(256,64,i=>{i.font='800 34px system-ui, "Segoe UI", sans-serif',i.textAlign="center",i.textBaseline="middle";let r=Math.min(250,i.measureText(s).width+36);i.fillStyle="rgba(10,14,24,0.78)",i.beginPath(),i.roundRect?i.roundRect(128-r/2,8,r,48,24):i.rect(128-r/2,8,r,48),i.fill(),i.fillStyle=t,i.fillText(s,128,34)},{repeat:!1}),n=new rr(new fs({map:e,transparent:!0,depthWrite:!1,fog:!1}));return n.scale.set(2.6,.65,1),n.position.y=2.95,n}var Uf=new en(1,1,1,12),Xc,Nf,qr=tt(15265528),Do=tt(1053724),G_=tt(789518);function W_(s,t){let e=new pe,n=new pe,i=tt(s),r=tt(1382172),a=tt(9410723),o=u=>{for(let f of[-.9,.9])for(let d of u)e.add(Uf,ht(f,.36,d,.37,.27,.37,0,0,Math.PI/2),G_),e.add(Uf,ht(f*1.02,.36,d,.17,.29,.17,0,0,Math.PI/2),a)},l=(u,f,d,g,x,m,p,y,v)=>{e.quad([-p,u,d],[p,u,d],[y,f,x],[-y,f,x],Do),e.quad([p,u,g],[-p,u,g],[-y,f,m],[y,f,m],Do),e.quad([p,u,d],[p,u,g],[y,f,m],[y,f,x],Do),e.quad([-p,u,g],[-p,u,d],[-y,f,x],[-y,f,m],Do),e.quad([-y,f,x],[y,f,x],[y,f,m],[-y,f,m],v)};if(t==="van"){e.box(-.92,.92,.36,1.25,-2.25,2,i),e.box(-.95,.95,.3,.5,-2.3,2.1,r),l(1.25,2.02,2,-2.25,1.55,-2.2,.9,.86,qr);for(let u of[-1.5,-.4,.6])e.box(-.93,.93,1.25,2,u-.06,u+.06,i);n.box(-.5,.5,2.03,2.2,1.35,1.5,[2.4,1.5,.3]),o([-1.45,1.35])}else t==="plow"?(e.box(-1,1,.45,1.3,-2.4,2.2,i),e.box(-1.02,1.02,.34,.6,-2.45,2.25,r),l(1.3,2.15,2.2,.7,1.9,.75,.96,.9,qr),e.box(-.98,.98,1.3,2,-2.35,.55,tt(3817290),qr),e.quad([-1.5,.12,2.75],[1.5,.12,3.05],[1.5,1,3.2],[-1.5,1,2.9],tt(14263584)),e.quad([1.5,.12,3.05],[-1.5,.12,2.75],[-1.5,1,2.9],[1.5,1,3.2],tt(9071120)),e.box(-.2,.2,.5,.8,2.2,2.9,r),n.box(-.14,.14,2.16,2.34,1.2,1.5,[2.6,1.3,.1]),o([-1.6,1.45])):(e.box(-.88,.88,.36,.93,-2.12,2.12,i),e.box(-.9,.9,.3,.5,-2.05,2.05,r),l(.93,1.47,.78,-1.28,.36,-.98,.84,.72,qr),e.box(-.86,.86,.93,1.46,-.34,-.26,i),e.box(-.92,.92,.4,.55,2.1,2.22,a),e.box(-.92,.92,.4,.55,-2.22,-2.1,a),e.box(-.45,.45,.6,.84,2.11,2.14,r),e.box(-.7,.7,.93,.97,1.15,2,qr),t==="mod"&&e.box(-.9,.9,.55,.75,-2.14,2.14,tt(1724368)),o([-1.35,1.35]));let c=t==="plow"?2.22:t==="van"?2.02:2.14,h=t==="plow"?-2.42:t==="van"?-2.27:-2.14;for(let u of[-.62,.62])n.box(u-.17,u+.17,.62,.84,c,c+.04,[3.2,3,2.4]),n.box(u-.2,u+.2,.66,.82,h-.05,h,[2.6,.12,.08]);return[e.build(),n.build()]}var mr=class{constructor(t,e,n,i,r,a="sedan"){Xc||(Xc=qi({vertexColors:!0}),Nf=new hn({vertexColors:!0}));let[o,l]=W_(r,a);this.g=new Fe,this.body=new Fe,this.g.add(this.body);let c=new oe(o,Xc);if(c.castShadow=!0,this.body.add(c,new oe(l,Nf)),a==="mod"){this.barMat=new hn({color:2245887});let h=new oe(new Un(1.1,.14,.3),this.barMat);h.position.set(0,1.68,-.2),this.body.add(h)}this.g.rotation.order="YXZ",t.add(this.g),this.e={x:e,z:n,y:0,vx:0,vz:0,layer:0},this.e.y=Yi(this.e),this.h=i,this.steer=0,this.vy=0,this.kind=a,this.color=r,this.ai=null,this.slip=0,this.maxSpeed=38,this.vf=0,this.roll=0,this.spin=0,this.stun=0,this.sync(0)}drive(t,e,n,i,r){let a=this.e,o=a.layer===2;this.steer+=(n-this.steer)*Math.min(1,t*9);let l=Math.sin(this.h),c=Math.cos(this.h),h=a.vx*l+a.vz*c,u=a.y>Yi(a)+.5;u||(this.h-=this.steer*(2.6/(1+Math.abs(h)/28))*t*De(h/5,-1,1)),l=Math.sin(this.h),c=Math.cos(this.h);let f=-c,d=l;h=a.vx*l+a.vz*c;let g=a.vx*f+a.vz*d;if(!u){let x=this.maxSpeed*(o?.88:1),m=0;e>0?m=23*e*(1-De(h/x,0,1))*(h<-1?2:1):e<0&&(m=h>1?36*e:13*e*(1-De(-h/11,0,1))),o&&(m*=.5),h+=m*t,h-=h*(e===0?.8:.12)*t;let p=o?1:6;i&&(p*=.2,h-=h*1.3*t),this.slip=Math.abs(g),g-=g*Math.min(1,p*t)}return a.vx=l*h+f*g,a.vz=c*h+d*g,this.vf=h,this.roll+=(De(-g*.035,-.22,.22)-this.roll)*Math.min(1,t*6),this.move(t,r)}move(t,e){let n=this.e;n.x+=n.vx*t,n.z+=n.vz*t;let i=e.resolve(n,1.5,n.layer,.25);Math.abs(n.x)>ur&&(n.x=Math.sign(n.x)*ur,n.vx*=-.3),Math.abs(n.z)>fr&&(n.z=Math.sign(n.z)*fr,n.vz*=-.3);let r=Yi(n);return this.vy>0||n.y>r+.4?(this.vy-=26*t,n.y+=this.vy*t,this.spin+=t*5,n.y<=r&&(n.y=r,this.vy=0,this.spin=0)):n.y+=(r-n.y)*Math.min(1,t*14),i}launch(t){this.vy=t,this.e.y+=.5}sync(){let t=this.e;this.g.position.set(t.x,t.y,t.z),this.g.rotation.set(this.spin,this.h,this.roll)}get speed(){return Math.hypot(this.e.vx,this.e.vz)}},xn=[];for(let s=0;s<Ze.length;s++)for(let t=0;t<We.length;t++)xn.push({x:Ze[s],z:We[t],xi:s,zi:t,nb:[]});var qc=(s,t)=>s*We.length+t;for(let s of xn){s.zi>0&&s.nb.push(qc(s.xi,s.zi-1)),s.zi<We.length-1&&s.nb.push(qc(s.xi,s.zi+1));for(let t of[-1,1]){let e=s.xi+t;if(e<0||e>=Ze.length)continue;(!(s.xi<4!=e<4)||We[s.zi]===-60||We[s.zi]===120)&&s.nb.push(qc(e,s.zi))}}function Yc(s,t,e=0,n=1e9){let i=-1,r=1e9;for(let a=0;a<xn.length;a++){let o=Math.hypot(xn[a].x-s,xn[a].z-t);o>=e&&o<=n&&o<r&&(r=o,i=a)}return i}var Ff=(s,t)=>s.x===140&&t.x===140?7.6:3.3;function Of(s,t,e){let n=xn[t],i=xn[e],r=i.x-n.x,a=i.z-n.z,o=Math.hypot(r,a),l=r/o,c=a/o;s.ai={type:"traffic",from:t,to:e,sp:0,max:9+Math.random()*5};let h=Ff(n,i);s.e.x=n.x+l*o*.5-c*h,s.e.z=n.z+c*o*.5+l*h,s.h=Math.atan2(l,c),s.e.y=0,s.sync()}function Uo(s,t,e,n){let i=s.ai,r=s.e,a=xn[i.from],o=xn[i.to],l=o.x-a.x,c=o.z-a.z,h=Math.hypot(l,c),u=l/h,f=c/h,d=(r.x-a.x)*u+(r.z-a.z)*f;if(d>h-8){let k=i.from,b=o.nb.filter(A=>A!==k);i.from=i.to,i.to=b.length?b[Math.floor(Math.random()*b.length)]:k;return}let g=Math.min(d+8,h),x=Ff(a,o),m=a.x+u*g-f*x,p=a.z+f*g+u*x;s.h+=Si(s.h,Math.atan2(m-r.x,p-r.z))*Math.min(1,t*3.2);let y=Math.sin(s.h),v=Math.cos(s.h),w=e-r.x,L=n-r.z,T=Math.hypot(w,L),I=i.max;s.stun>0&&(s.stun-=t,I=0),T<10&&(w*y+L*v)/(T+.01)>.55&&(I=0),i.sp+=(I-i.sp)*Math.min(1,t*2.5),r.vx=y*i.sp,r.vz=v*i.sp,r.x+=r.vx*t,r.z+=r.vz*t,r.y=Yi(r),s.vf=i.sp,s.sync()}var No=class{constructor(t,e){let n=new Float32Array(e*3),i=new Float32Array(e);for(let a=0;a<e;a++)n[a*3]=Math.random(),n[a*3+1]=Math.random(),n[a*3+2]=Math.random(),i[a]=Math.random();let r=new _e;r.setAttribute("position",new de(n,3)),r.setAttribute("aSeed",new de(i,1)),this.u={uTime:{value:0},uCam:{value:new U},uBox:{value:new U(72,42,72)},uScale:dr,uCar:{value:new U},uCarDir:{value:new U(0,0,1)},uHead:{value:0}},this.n=e,this.pts=new bi(r,new Ge({uniforms:this.u,blending:qn,transparent:!0,depthWrite:!1,vertexShader:`attribute float aSeed; uniform float uTime; uniform vec3 uCam; uniform vec3 uBox; uniform float uScale; uniform vec3 uCar; uniform vec3 uCarDir; uniform float uHead;
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
          vA = (0.3 + 0.55*low)*smoothstep(0.6,3.0,d)*(1.0-smoothstep(26.0,36.0,d))*mix(1.0, 0.4, big); }`,fragmentShader:"varying float vA; varying vec3 vC; void main(){ float r = length(gl_PointCoord-0.5)*2.0; gl_FragColor = vec4(vC*vA*(1.0-smoothstep(0.15,1.0,r)),1.0); }"})),this.pts.frustumCulled=!1,this.pts.renderOrder=8,t.add(this.pts)}density(t){this.pts.geometry.setDrawRange(0,Math.floor(this.n*t))}},Fo=class{constructor(t,e=420){this.n=e,this.i=0;let n=new _e;this.p=new Float32Array(e*3),this.v=new Float32Array(e*3),this.t=new Float32Array(e*2).fill(-99),this.c=new Float32Array(e*3),n.setAttribute("position",new de(this.p,3)),n.setAttribute("aVel",new de(this.v,3)),n.setAttribute("aT",new de(this.t,2)),n.setAttribute("aColor",new de(this.c,3)),this.u={uTime:{value:0},uScale:dr},this.pts=new bi(n,new Ge({uniforms:this.u,blending:qn,transparent:!0,depthWrite:!1,vertexShader:`attribute vec3 aVel; attribute vec2 aT; attribute vec3 aColor; uniform float uTime; uniform float uScale; varying vec3 vC;
        void main(){ float age = uTime - aT.x; float k = clamp(age/aT.y, 0.0, 1.0);
          vec3 p = position + aVel*age; p.y -= 4.0*age*age;
          vec4 mv = modelViewMatrix*vec4(p,1.0); gl_Position = projectionMatrix*mv;
          gl_PointSize = (age < 0.0 || k >= 1.0) ? 0.0 : clamp(0.3*uScale/max(-mv.z,0.5)*(0.5+k), 1.0, 48.0);
          vC = aColor*(1.0-k)*(1.0-k); }`,fragmentShader:"varying vec3 vC; void main(){ float r = length(gl_PointCoord-0.5)*2.0; gl_FragColor = vec4(vC*(1.0-smoothstep(0.0,1.0,r)),1.0); }"})),this.pts.frustumCulled=!1,this.pts.renderOrder=9,t.add(this.pts),this.dirty=!1}emit(t,e,n,i,r,a,o,l,c,h){let u=this.i;this.i=(u+1)%this.n,this.p[u*3]=t,this.p[u*3+1]=e,this.p[u*3+2]=n,this.v[u*3]=i,this.v[u*3+1]=r,this.v[u*3+2]=a,this.t[u*2]=this.u.uTime.value,this.t[u*2+1]=o,this.c[u*3]=l,this.c[u*3+1]=c,this.c[u*3+2]=h,this.dirty=!0}burst(t,e,n,i,r,a,o,l,c){for(let h=0;h<i;h++){let u=Math.random()*6.283,f=Math.random()*2-1,d=Math.sqrt(1-f*f)*r*(.5+Math.random()*.5);this.emit(t,e,n,Math.cos(u)*d,f*r,Math.sin(u)*d,a*(.6+Math.random()*.4),o,l,c)}}update(t){if(this.u.uTime.value=t,this.dirty){let e=this.pts.geometry.attributes;e.position.needsUpdate=e.aVel.needsUpdate=e.aT.needsUpdate=e.aColor.needsUpdate=!0,this.dirty=!1}}},Oo=class{constructor(t,e=700){this.n=e,this.i=0,this.p=new Float32Array(e*12);let n=new _e;n.setAttribute("position",new de(this.p,3));let i=[];for(let r=0;r<e;r++)i.push(r*4,r*4+1,r*4+2,r*4,r*4+2,r*4+3);n.setIndex(i),this.m=new oe(n,new hn({color:329484,transparent:!0,opacity:.42,depthWrite:!1,side:Sn})),this.m.frustumCulled=!1,this.m.renderOrder=1,t.add(this.m),this.last=null}seg(t,e,n,i,r,a,o){let l=i-t,c=a-n,h=Math.hypot(l,c)||1,u=-c/h*o,f=l/h*o,d=this.i*12,g=this.p;g[d]=t-u,g[d+1]=e,g[d+2]=n-f,g[d+3]=t+u,g[d+4]=e,g[d+5]=n+f,g[d+6]=i+u,g[d+7]=r,g[d+8]=a+f,g[d+9]=i-u,g[d+10]=r,g[d+11]=a-f,this.i=(this.i+1)%this.n,this.m.geometry.attributes.position.needsUpdate=!0}},zo=class{constructor(t,e=400){this.n=e,this.k=0,this.p=new Float32Array(e*3),this.s=new Float32Array(e),this.c=new Float32Array(e*3);let n=new _e;n.setAttribute("position",new de(this.p,3)),n.setAttribute("aSize",new de(this.s,1)),n.setAttribute("aColor",new de(this.c,3)),this.pts=new bi(n,Vc()),this.pts.frustumCulled=!1,this.pts.renderOrder=6,t.add(this.pts)}begin(){this.k=0}add(t,e,n,i,r,a,o){let l=this.k;l>=this.n||(this.p[l*3]=t,this.p[l*3+1]=e,this.p[l*3+2]=n,this.s[l]=i,this.c[l*3]=r,this.c[l*3+1]=a,this.c[l*3+2]=o,this.k++)}end(){let t=this.pts.geometry.attributes;t.position.needsUpdate=t.aSize.needsUpdate=t.aColor.needsUpdate=!0,this.pts.geometry.setDrawRange(0,this.k)}},gr=class{constructor(t){let e=new Ge({uniforms:{uColor:{value:new It(1,.8,.2)},uTime:{value:0},uFog:Wr},blending:qn,transparent:!0,depthWrite:!1,side:Sn,vertexShader:"varying vec2 vUv; varying float vF; uniform float uFog; void main(){ vUv = uv; vec4 mv = modelViewMatrix*vec4(position,1.0); float d = length(mv.xyz); vF = exp(-uFog*uFog*d*d*0.25); gl_Position = projectionMatrix*mv; }",fragmentShader:"uniform vec3 uColor; uniform float uTime; varying vec2 vUv; varying float vF; void main(){ float iy = clamp(1.0-vUv.y, 0.0, 1.0); float a = pow(iy, 2.2)*0.9 + 0.05*iy; a *= 0.75 + 0.25*sin(uTime*4.0 - vUv.y*30.0); gl_FragColor = vec4(uColor*a*vF*1.6, 1.0); }"});this.mat=e,this.g=new Fe;let n=new oe(new en(1.3,2.2,70,20,1,!0),e);n.position.y=35,this.g.add(n),this.ring=new oe(new xo(3.6,4.4,40),new hn({color:16763955,transparent:!0,opacity:.9,blending:qn,depthWrite:!1,side:Sn})),this.ring.rotation.x=-Math.PI/2,this.ring.position.y=.3,this.g.add(this.ring),this.g.visible=!1,this.g.renderOrder=7,t.add(this.g)}set(t,e,n,i){this.g.position.set(t,e,n),this.g.visible=!0,this.mat.uniforms.uColor.value.setHex(i),this.ring.material.color.setHex(i)}hide(){this.g.visible=!1}update(t){this.mat.uniforms.uTime.value=t;let e=1+Math.sin(t*3)*.12;this.ring.scale.set(e,e,1)}};var xr=s=>440*Math.pow(2,(s-69)/12),X_={maj:[0,2,4,5,7,9,11],min:[0,2,3,5,7,8,10],dor:[0,2,3,5,7,9,10],hmin:[0,2,3,5,7,8,11],phr:[0,1,3,5,7,8,10]},ii=(s,t,e)=>{let n=X_[t],i=Math.floor(e/7);return s+n[(e%7+7)%7]+12*i},q_="0123456789abcde",zf=s=>s==="z"?-1:s==="y"?-2:s==="x"?-3:q_.indexOf(s),Jn={arkasha:{name:"\u0421\u0432\u0438\u043D\u0433 \u0432 \u0431\u0430\u0431\u043E\u0447\u043A\u0435",bpm:132,sb:4,steps:16,sw8:.6,root:50,sc:"dor",seven:1,g:.92,rv:.2,prog:[0,3,0,[4,"hmin"]],d:{h:"x...x.x.x...x.x.",k:"x.......x.......",b:"....x.......x..."},b:{i:"walk",p:"0...2...4...6...",o:2},c:{i:"organ",p:"......x.......x.",len:2,o:1},l:{i:"vibe",o:1,bars:["4...7...6.4.....","3...6...4.3.....","4...7...9.7.6...","4.......2.0....."]}},max:{name:"\u0424\u043E\u043D\u043A \u043D\u0430 \u0440\u0438\u043D\u0433\u0435",bpm:138,sb:4,steps:16,root:52,sc:"phr",g:1,rv:.12,prog:[0,0,5,6],d:{k:"x.....x...x.....",c:"....x.......x...",h:"x.x.x.x.x.x.xxxx"},b:{i:"808",p:"0-----0---0--7--",o:1},c:{i:"pad",p:"x...............",len:16,o:1,v:.5},l:{i:"cowbell",o:1,bars:["7.7.5.7.....4.5.","7.7.5.7...8.7.5.","5.5.4.5.....2.4.","6.6.5.6...7...4."]}},dima:{name:"\u0421\u0438\u043D\u0442\u0432\u0435\u0439\u0432 11.1.4",bpm:104,sb:4,steps:16,root:50,sc:"min",g:.64,rv:.3,prog:[0,5,2,6],d:{k:"x...x...x...x...",s:"....x.......x...",h:"..x...x...x...x."},b:{i:"pluck",p:"0.0.0.0.0.0.0.7.",o:2},c:{i:"pad",p:"x...............",len:16,o:1},a:{i:"pluck",p:"0123012301230123",o:1,v:.5},l:{i:"saw",o:1,bars:["7---....6.4-....","5---....4.2-....","4---..5.7---....","6---..4.2---...."]}},igor:{name:"\u0412\u0435\u0441\u0442\u0435\u0440\u043D, \u0447\u0435\u0442\u0432\u0451\u0440\u0442\u043E\u0435 \u043F\u0440\u043E\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u0435",bpm:96,sb:4,steps:16,root:57,sc:"dor",g:1.12,rv:.34,prog:[0,0,6,3,0,0,6,0],d:{r:"x..x..x.x..x..x.",sh:"x.x.x.x.x.x.x.x.",k:"x.......x......."},b:{i:"walk",p:"0.......4.......",o:2},c:{i:"strum",p:"....x.......x...",len:4,o:1},l:{i:"twang",o:0,i2:"whistle",o2:1,bars:["0.....2.4...7...","6...4.......2.4.","6.....4.2...4...","0-----......z.0.","7---....9.7.6...","4---........6.7.","6.....7.6.4.2...","0-------........"]}},geisler:{name:"\u041A\u043B\u0430\u0432\u0435\u0441\u0438\u043D \u0447\u0435\u0440\u0435\u0437 \u041C\u0435\u0433\u0430\u0444\u043E\u043D",bpm:112,sb:4,steps:16,root:55,sc:"min",g:1.5,rv:.3,fx:"modem",prog:[0,3,6,2,5,3,[4,"hmin"],0],d:{k:"x.......x.......",h:"....x.......x..."},b:{i:"harpsi",p:"0.......0...4...",o:2},a:{i:"harpsi",p:"0212021202120212",o:0,v:.8},l:{i:"harpsi",o:1,rel:1,bars:["7.....6.4...2...","4.....2.0...z..."]}},pasha:{name:"\u0417\u043E\u043B\u043E\u0442\u043E\u0439 \u0432\u0430\u043B\u044C\u0441",bpm:168,sb:4,steps:12,root:62,sc:"maj",g:1.7,rv:.36,prog:[0,0,1,4,0,5,1,4],d:{tr:"x..........."},b:{i:"walk",p:"0-..........",o:2,v:1.6},c:{i:"pizz",p:"....x...x...",len:2,o:0,v:1.8},l:{i:"glock",o:1,v:.75,bars:["4---....7...","9---....7...","8---....6...","4-------....","4---....7...","b---....9...","8...6...4...","7-------...."]}},nikita:{name:"\u0427\u0438\u043F\u0442\u044E\u043D \u0438\u0437 \u0442\u0440\u0435\u0442\u044C\u0435\u0439 \u0438\u0433\u0440\u044B",bpm:150,sb:4,steps:16,root:60,sc:"maj",g:.72,rv:.06,prog:[0,4,5,3],d:{k:"x...x...x...x...",s:"....x.......x...",h:"x.x.x.x.x.x.x.x."},b:{i:"chip",p:"0.0.7.0.0.0.7.0.",o:1},a:{i:"chip",p:"0123012301230123",o:1,v:.45},l:{i:"square",o:1,bars:["4.4.7...9.7.4...","4.4.6...8.6.4...","2.2.5...7.5.2...","3.5.7.9.7...5..."]}},kos:{name:"\u0417\u043E\u043D\u0430. \u0422\u0440\u0435\u0441\u043A \u2014 \u044D\u0442\u043E \u043D\u043E\u0440\u043C\u0430\u043B\u044C\u043D\u043E",bpm:64,sb:4,steps:16,root:48,sc:"phr",g:.68,rv:.6,fx:"geiger",prog:[0,0,5,4],d:{k:"x..x............"},b:{i:"sub",p:"0---------------",o:1,v:.45},c:{i:"drone",p:"x...............",len:16,o:1},l:{i:"bell",o:1,v:1.7,bars:["....7.......4...","........2.......","....5.......7...","........4.....3."]}},artem:{name:"\u041F\u0438\u0440\u0430\u0442\u0441\u043A\u0430\u044F \u0434\u0436\u0438\u0433\u0430",bpm:104,sb:6,steps:12,root:62,sc:"min",g:.8,rv:.22,prog:[0,6,0,[4,"hmin"]],d:{k:"x.....x.....",c:"...x.....x..",sh:"x.x.x.x.x.x."},b:{i:"walk",p:"0-....4-....",o:2},c:{i:"reed",p:"x...........",len:12,o:0},l:{i:"fiddle",o:1,bars:["0.2.4.7.4.2.","6.4.2.4.2.z.","0.2.4.7.9.7.","6.4.z.0-...."]}},sanya:{name:"\u041B\u043E\u0443-\u0444\u0430\u0439, \u043D\u0430\u0447\u0430\u043B\u043E \u0442\u044F\u0433\u043E\u043C\u043E\u0442\u043D\u043E\u0435",bpm:72,sb:4,steps:16,sw16:.28,root:53,sc:"maj",seven:1,g:.72,rv:.3,lp:5200,fx:"vinyl",prog:[0,2,1,4],d:{k:"x.....x...x.....",s:"....x.......x...",h:"x.x.x.x.x.x.x.x."},b:{i:"sub",p:"0-----0---4-----",o:1,v:.6},c:{i:"rhodes",p:"x.......x.......",len:7,o:1},l:{i:"vibe",o:1,bars:["....4...7.....6.","....4.......2...","....3...5.....4.","....2..........."]}},misha:{name:"\u0423\u043A\u0443\u043B\u0435\u043B\u0435 \u0443 \u043A\u043E\u0441\u0442\u0440\u0430",bpm:116,sb:4,steps:16,root:60,sc:"maj",g:1,rv:.2,prog:[0,3,0,4],d:{k:"x.......x.......",sh:"x.x.x.x.x.x.x.x.",c:"....x.......x..."},b:{i:"walk",p:"0.......4.......",o:2},c:{i:"strum",p:"x..x.xx.x..x.xx.",len:2,o:1,v:.7},l:{i:"whistle",o:1,bars:["4...4.6.7...4...","5...5.7.8...5...","4...4.6.7.9.7...","6...4...2......."]}}};function Y_(s,t){let e=Math.floor(s.sampleRate*t),n=s.createBuffer(2,e,s.sampleRate);for(let i=0;i<2;i++){let r=n.getChannelData(i);for(let a=0;a<e;a++)r[a]=(Math.random()*2-1)*Math.pow(1-a/e,2.8)}return n}var Yr=class{constructor(t,e){this.c=t,this.th=null,this.id=null,this.step=0,this.next=0,this.sd=.1,this.drive=0,this.rush=0,this.sum=t.createGain(),this.trim=t.createGain(),this.tone=t.createBiquadFilter(),this.tone.type="lowpass",this.tone.frequency.value=16e3,this.air=t.createBiquadFilter(),this.air.type="highshelf",this.air.frequency.value=2800,this.air.gain.value=5,this.sum.connect(this.air),this.air.connect(this.tone),this.tone.connect(this.trim),this.trim.connect(e),this.rev=t.createConvolver(),this.rev.buffer=Y_(t,2),this.revIn=t.createGain(),this.revIn.connect(this.rev),this.revOut=t.createGain(),this.rev.connect(this.revOut),this.revOut.connect(this.sum),this.dry=t.createGain(),this.dry.connect(this.sum),this.w1=t.createGain(),this.w1.connect(this.sum),this.s1=t.createGain(),this.s1.gain.value=.28,this.w1.connect(this.s1),this.s1.connect(this.revIn),this.w2=t.createGain(),this.w2.connect(this.sum),this.s2=t.createGain(),this.s2.gain.value=.7,this.w2.connect(this.s2),this.s2.connect(this.revIn);let n=t.createBuffer(1,t.sampleRate*2,t.sampleRate),i=n.getChannelData(0);for(let r=0;r<i.length;r++)i[r]=Math.random()*2-1;this.noise=n}_dest(t,e){let n=t===2?this.w2:t===1?this.w1:this.dry;if(!e||!this.c.createStereoPanner)return n;let i=this.c.createStereoPanner();return i.pan.value=e,i.connect(n),i}_o(t,e,n,i,r,a={}){let o=this.c,l=o.createOscillator(),c=o.createGain(),h=a.a||.004;if(l.type=t,a.from?(l.frequency.setValueAtTime(e*a.from,n),l.frequency.exponentialRampToValueAtTime(e,n+(a.st||.05))):(l.frequency.setValueAtTime(e,n),a.to&&l.frequency.exponentialRampToValueAtTime(a.to,n+(a.st||i))),a.det&&(l.detune.value=a.det),a.vib){let f=o.createOscillator(),d=o.createGain();f.frequency.value=a.vib,d.gain.setValueAtTime(0,n),d.gain.linearRampToValueAtTime(e*.011,n+Math.min(.3,i*.6)),f.connect(d),d.connect(l.frequency),f.start(n),f.stop(n+i+.2)}if(c.gain.setValueAtTime(1e-4,n),c.gain.linearRampToValueAtTime(r,n+h),a.sus){let f=Math.min(a.rel||.08,i*.5);c.gain.setValueAtTime(r,n+Math.max(h,i-f)),c.gain.linearRampToValueAtTime(1e-4,n+i+.01)}else c.gain.exponentialRampToValueAtTime(1e-4,n+h+i);let u=l;if(a.lp){let f=o.createBiquadFilter();f.type=a.ft||"lowpass",f.frequency.setValueAtTime(a.lp,n),a.lpTo&&f.frequency.exponentialRampToValueAtTime(a.lpTo,n+(a.lt||i)),f.Q.value=a.q||.7,l.connect(f),u=f}u.connect(c),c.connect(this._dest(a.w,a.pan)),l.start(n),l.stop(n+i+h+.06)}_n(t,e,n,i,r,a={}){let o=this.c,l=o.createBufferSource(),c=o.createBiquadFilter(),h=o.createGain(),u=a.a||.001;l.buffer=this.noise,c.type=i,c.frequency.value=r,c.Q.value=a.q||.7,h.gain.setValueAtTime(1e-4,t),h.gain.linearRampToValueAtTime(n,t+u),h.gain.exponentialRampToValueAtTime(1e-4,t+u+e),l.connect(c),c.connect(h),h.connect(this._dest(a.w,a.pan)),l.start(t,Math.random()*1.5),l.stop(t+e+u+.05)}drum(t,e,n){if(t==="k")this._o("sine",165,e,.26,n*.9,{to:46,st:.11}),this._o("triangle",330,e,.06,n*.3,{to:95,st:.05}),this._n(e,.012,n*.25,"highpass",2600);else if(t==="s")this._n(e,.16,n*.7,"bandpass",2200,{q:.5,w:1}),this._o("triangle",215,e,.085,n*.4,{to:150});else if(t==="h")this._n(e,.035,n*.42,"highpass",7600,{pan:.25});else if(t==="o")this._n(e,.2,n*.32,"highpass",7e3,{pan:.25});else if(t==="c"){for(let i=0;i<3;i++)this._n(e+i*.011,.02,n*.35,"bandpass",1350,{q:.9});this._n(e+.033,.12,n*.5,"bandpass",1350,{q:.9,w:1})}else t==="r"?(this._o("triangle",1180,e,.03,n*.45,{to:820,w:1,pan:-.3}),this._n(e,.018,n*.2,"bandpass",2400,{q:2})):t==="sh"?this._n(e,.05,n*.3,"bandpass",6200,{q:.8,a:.012,pan:-.25}):t==="b"?this._n(e,.12,n*.45,"bandpass",3600,{q:.4,a:.02,w:1}):t==="tr"&&(this._o("sine",2637,e,.9,n*.12,{w:2,pan:.4}),this._o("sine",5290,e,.5,n*.05,{w:2,pan:.4}))}bass(t,e,n,i,r){t==="808"?(this._o("sine",n,e,i*1.1,r*.8,{from:1.8,st:.045}),this._o("square",n*2,e,i*.8,r*.3,{lp:1400,lpTo:400}),this._o("sawtooth",n*3,e,i*.4,r*.1,{lp:2e3})):t==="sub"?(this._o("sine",n,e,i,r*.5,{sus:1,rel:.1,a:.02}),this._o("triangle",n*2,e,i,r*.4,{sus:1,rel:.1,a:.02}),this._o("sawtooth",n*2,e,i,r*.16,{lp:900,sus:1,rel:.1,a:.02})):t==="pluck"?(this._o("sawtooth",n,e,Math.min(i,.32),r*.8,{lp:1500,lpTo:230,q:2}),this._o("square",n*2,e,.12,r*.16,{lp:1200})):t==="walk"?(this._o("triangle",n,e,Math.min(i,.42),r*.8,{}),this._o("sine",n*2,e,.24,r*.4,{}),this._o("sawtooth",n*2,e,.14,r*.16,{lp:1400})):t==="chip"?(this._o("square",n,e,Math.min(i,.14),r*.5,{sus:1,rel:.02}),this._o("square",n*2,e,.06,r*.14,{sus:1,rel:.02})):t==="harpsi"&&(this._o("sawtooth",n,e,.5,r*.6,{lp:2600,lpTo:500}),this._o("square",n*2,e,.2,r*.25,{lp:3e3}))}chord(t,e,n,i,r){let a=n.length;n.forEach((o,l)=>{let c=xr(o),h=a>1?(l/(a-1)-.5)*.7:0;t==="pad"?(this._o("sawtooth",c,e,i,r*.16,{det:-9,lp:1900,sus:1,a:Math.min(.5,i*.3),rel:.4,w:2,pan:h}),this._o("sawtooth",c,e,i,r*.16,{det:9,lp:1900,sus:1,a:Math.min(.5,i*.3),rel:.4,w:2,pan:-h})):t==="drone"?(this._o("sawtooth",c,e,i,r*.2,{det:-6,lp:700,sus:1,a:i*.4,rel:i*.4,w:2,pan:h}),this._o("sine",c*2,e,i,r*.12,{sus:1,a:i*.45,rel:i*.4,w:2,pan:-h,vib:.3})):t==="organ"?(this._o("sine",c,e,i,r*.24,{sus:1,rel:.03,w:1,pan:h}),this._o("sine",c*2,e,i,r*.14,{sus:1,rel:.03,w:1,pan:h}),this._o("sine",c*3,e,i,r*.08,{sus:1,rel:.03,w:1,pan:h})):t==="rhodes"?(this._o("sine",c,e,i*1.2,r*.34,{w:1,pan:h,a:.008}),this._o("sine",c*4,e,i*.3,r*.08,{w:1,pan:h}),this._o("triangle",c*2,e,i*.6,r*.12,{w:1,pan:h})):t==="pizz"?(this._o("triangle",c,e,.2,r*.3,{w:2,pan:h}),this._o("sine",c*2,e,.1,r*.1,{w:2,pan:h})):t==="reed"?(this._o("square",c,e,i,r*.07,{det:-7,lp:2300,sus:1,a:.04,rel:.08,w:1,pan:h,vib:5.5}),this._o("sawtooth",c,e,i,r*.08,{det:7,lp:2300,sus:1,a:.04,rel:.08,w:1,pan:-h})):t==="strum"&&this.lead("uke",e+l*.014,c,.45,r*.5,h)})}lead(t,e,n,i,r,a=.12){if(t==="saw")this._o("sawtooth",n,e,i,r*.25,{det:-8,lp:3800,q:1,sus:1,rel:.1,a:.02,vib:5.5,w:2,pan:a}),this._o("sawtooth",n,e,i,r*.25,{det:8,lp:3800,q:1,sus:1,rel:.1,a:.02,w:2,pan:-a});else if(t==="vibe"||t==="bell"||t==="glock"){let o=t==="glock"?2:1;this._o("sine",n*o,e,i*1.6+.4,r*(t==="glock"?.3:.5),{w:2,pan:a}),this._o("sine",n*o*4,e,i*.5+.1,r*.1,{w:2,pan:a}),t!=="vibe"&&this._o("sine",n*o*6.8,e,.12,r*.035,{w:2,pan:a})}else t==="twang"?(this._o("sawtooth",n,e,.6,r*.55,{from:1.025,st:.07,lp:3400,lpTo:520,q:4,lt:.35,w:2,pan:a}),this._o("square",n,e,.25,r*.08,{lp:1800,w:2,pan:a})):t==="whistle"?(this._o("sine",n,e,i,r*.42,{sus:1,a:.05,rel:.1,vib:5.3,w:2,pan:a}),this._o("sine",n*2,e,i,r*.06,{sus:1,a:.05,rel:.1,w:2,pan:a}),this._n(e,i,r*.02,"bandpass",n*2,{q:3,a:.04,w:2})):t==="square"?(this._o("square",n,e,i,r*.16,{sus:1,rel:.02,pan:a}),this._o("square",n*2,e,i,r*.04,{sus:1,rel:.02,pan:-a})):t==="cowbell"?(this._o("square",n,e,.24,r*.34,{lp:2600,ft:"bandpass",q:1.6,w:1,pan:a}),this._o("square",n*1.504,e,.2,r*.24,{lp:2600,ft:"bandpass",q:1.6,w:1,pan:a})):t==="fiddle"?this._o("sawtooth",n,e,i,r*.34,{lp:3900,q:1.2,sus:1,a:.03,rel:.05,vib:6,w:1,pan:a}):t==="harpsi"?(this._o("sawtooth",n,e,.42,r*.38,{lp:6e3,lpTo:1100,w:1,pan:a}),this._o("square",n*2,e,.16,r*.14,{lp:7e3,w:1,pan:a})):t==="uke"?(this._o("triangle",n,e,i,r*.5,{w:1,pan:a}),this._o("sawtooth",n,e,i*.5,r*.22,{lp:3600,lpTo:800,w:1,pan:a})):(t==="pluck"||t==="chip")&&this._o(t==="chip"?"square":"sawtooth",n,e,.16,r*(t==="chip"?.1:.22),t==="chip"?{sus:1,rel:.02,pan:a}:{lp:2400,lpTo:500,q:2,w:1,pan:a})}fx(t,e,n){if(t==="geiger"){let i=2+Math.random()*9;for(let r=e+Math.random()*.2;r<e+n;r+=-Math.log(1-Math.random()*.98)/i)this._n(r,.004,.26+Math.random()*.14,"highpass",2800,{pan:Math.random()-.5});Math.random()<.3&&this._n(e+Math.random()*n,.9,.05,"bandpass",420,{q:9,w:2})}else if(t==="vinyl"){for(let i=e;i<e+n;i+=-Math.log(1-Math.random()*.98)/7)this._n(i,.003,.03+Math.random()*.06,"highpass",1800,{pan:Math.random()-.5});this._n(e,n,.012,"lowpass",5e3,{a:.02})}else if(t==="modem"){let i=[1070,1270,2025,2225,980,1650,1850];for(let r=0;r<16;r++)this._o("sine",i[Math.floor(Math.random()*i.length)],e+r*.045,.04,.035,{sus:1,rel:.005,pan:.5});this._n(e+.72,.35,.03,"bandpass",1800,{q:.5,pan:.5})}}setTheme(t){let e=Jn[t];if(!e||this.id===t)return;this.th=e,this.id=t,this.step=0;let n=this.c.currentTime;this.next=Math.max(this.next,n+.06),this.tone.frequency.setTargetAtTime(e.lp||16e3,n,.1),this.trim.gain.setTargetAtTime(e.g||1,n,.08),this.revOut.gain.setTargetAtTime(.5+(e.rv||.25),n,.1)}tones(t,e){let n=t.prog[e%t.prog.length],i=Array.isArray(n)?n[0]:n,r=Array.isArray(n)?n[1]:t.sc,a=[ii(t.root,r,i),ii(t.root,r,i+2),ii(t.root,r,i+4)];return t.seven&&a.push(ii(t.root,r,i+6)),{d:i,sc:r,ms:a}}hold(t,e){let n=1;for(;e+n<t.length&&t[e+n]==="-";)n++;return n}schedule(t){let e=this.th;if(e)for(;this.next<t;){this.sd=60/(e.bpm*(1+.1*this.rush))/e.sb;let n=this.step%e.steps,i=Math.floor(this.step/e.steps),r=this.next;e.sw8&&n%4===2?r+=this.sd*e.sw8:e.sw16&&n%2===1&&(r+=this.sd*e.sw16),this.playStep(e,i,n,r),this.step++,this.next+=this.sd}}playStep(t,e,n,i){let r=this.sd,a=this.tones(t,e),o=this.drive;for(let l in t.d)t.d[l][n]==="x"&&this.drum(l,i,1);if(o>.4&&(n%2===1&&this.drum("h",i,.8*o),n%t.sb===t.sb>>1&&this.drum("r",i,.7*o),n%t.sb===0&&!(t.d.k&&t.d.k[n]==="x")&&this.drum("k",i,.7*o)),t.b){let l=t.b.p[n];l!=="."&&l!=="-"&&this.bass(t.b.i,i,xr(ii(t.root,a.sc,a.d+zf(l))-12*t.b.o),this.hold(t.b.p,n)*r,.4*(t.b.v||1))}if(t.c&&t.c.p[n]==="x"&&this.chord(t.c.i,i,a.ms.map(l=>l+12*t.c.o),t.c.len*r,t.c.v||1),t.a){let l=t.a.p[n];if(l!=="."){let c=+l,h=a.ms[c%a.ms.length]+12*Math.floor(c/a.ms.length)+12*t.a.o;this.lead(t.a.i,i,xr(h),r*1.5,t.a.v||.6,n%2?.35:-.35)}}if(t.l){let l=e%t.l.bars.length,c=t.l.bars[l],h=c[n];if(h!=="."&&h!=="-"){let u=t.l.i2&&l>=t.l.bars.length/2,f=(t.l.rel?a.d:0)+zf(h);this.lead(u?t.l.i2:t.l.i,i,xr(ii(t.root,a.sc,f)+12*(u?t.l.o2:t.l.o)),this.hold(c,n)*r,t.l.v||1)}}t.fx&&n===0&&(t.fx!=="modem"||e%4===3)&&this.fx(t.fx,i,t.steps*r)}sting(t,e){let n=this.th||Jn.dima,i=(r,a=1)=>xr(ii(n.root,n.sc,r)+12*a);t==="win"?([0,2,4,7].forEach((r,a)=>{this.lead("vibe",e+a*.085,i(r),.3,1.1),this.lead("saw",e+a*.085,i(r,0),.12,.7)}),this.chord("pad",e+.34,[i(0,0),i(2,0),i(4,0),i(7,0)],.9,1.2),this._n(e+.34,.9,.1,"highpass",6e3,{w:2})):t==="start"?(this.lead("vibe",e,i(4),.2,.9),this.lead("vibe",e+.11,i(7),.35,.9)):t==="fail"?([4,3,2,0].forEach((r,a)=>this.lead("saw",e+a*.13,i(r,0),.16,.9)),this.drum("k",e+.52,1)):t==="trophy"?[4,7,9,11].forEach((r,a)=>this.lead("glock",e+a*.07,i(r,0),.25,.9)):t==="final"&&([0,2,4,7,9,11,14].forEach((r,a)=>{this.lead("glock",e+a*.09,i(r,0),.4,1),this.lead("saw",e+a*.09,i(r,0),.14,.6)}),this.chord("pad",e+.63,[i(0,0),i(2,0),i(4,0),i(7,0)],2.4,1.5),this.drum("k",e+.63,1.2),this._n(e+.63,1.8,.14,"highpass",5e3,{w:2}))}},Bf={arkasha:["organ",[4,4,7],.16,0],max:["bell",[9,9,9],.12,1],dima:["saw",[0,7,4,11],.07,1],igor:["whistle",[7,9,7,4],.11,1],geisler:["harpsi",[0,2,4,7,9,11],.06,1],pasha:["glock",[7,11],.14,0],nikita:["square",[0,4,7,11,14],.05,1],kos:["geiger",[0],.3,0],artem:["reed",[0,0],.32,-1],sanya:["whistle",[7,4,2,0],.16,0],misha:["square",[11,9],.09,2]},Zr=class s{constructor(){this.ctx=null,this.muted=!1,this.intensity=.5,this.music=null,this.eng=null,this.rush=0,this.chase=0,this.want=null}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;this.master=e.createGain(),this.master.gain.value=.9,s.chain(e,this.master,e.destination),this.musicG=e.createGain(),this.musicG.gain.value=.7,this.musicG.connect(this.master),this.music=new Yr(e,this.musicG),this.want&&this.music.setTheme(this.want),this.sfx=e.createGain(),this.sfx.gain.value=.65,this.sfx.connect(this.master),this.fxm=new Yr(e,this.sfx),this.fxm.th=Jn.dima;let n=e.createOscillator(),i=e.createOscillator(),r=e.createBiquadFilter(),a=e.createGain();n.type="sawtooth",i.type="square",r.type="lowpass",r.frequency.value=500,r.Q.value=2,a.gain.value=0,n.connect(r),i.connect(r),r.connect(a),a.connect(this.sfx),n.start(),i.start();let o=this.music.noise,l=e.createBufferSource();l.buffer=o,l.loop=!0;let c=e.createBiquadFilter();c.type="bandpass",c.frequency.value=1500,c.Q.value=.8;let h=e.createGain();h.gain.value=0,l.connect(c),c.connect(h),h.connect(this.sfx),l.start();let u=e.createBufferSource();u.buffer=o,u.loop=!0;let f=e.createBiquadFilter();f.type="lowpass",f.frequency.value=420;let d=e.createGain();d.gain.value=.04,u.connect(f),f.connect(d),d.connect(this.sfx),u.start();let g=e.createOscillator(),x=e.createGain();g.type="square",x.gain.value=0;let m=e.createBiquadFilter();m.type="lowpass",m.frequency.value=1800,g.connect(m),m.connect(x),x.connect(this.sfx),g.start(),this.eng={o1:n,o2:i,f:r,g:a,sg:h,siren:g,sirenG:x}}static chain(t,e,n){let i=t.createDynamicsCompressor();i.threshold.value=-20,i.knee.value=12,i.ratio.value=3.5,i.attack.value=.008,i.release.value=.18;let r=t.createDynamicsCompressor();r.threshold.value=-5,r.knee.value=0,r.ratio.value=20,r.attack.value=.002,r.release.value=.09,e.connect(i),i.connect(r),r.connect(n)}setMuted(t){this.muted=t,this.ctx&&this.master.gain.setTargetAtTime(t?0:.9,this.ctx.currentTime,.05)}setTheme(t){this.want=t,this.music&&this.music.setTheme(t)}get theme(){return this.music?this.music.id:this.want}sting(t){let e=this.ctx;!e||e.state!=="running"||(this.fxm.th=this.music&&this.music.th||Jn.dima,this.fxm.sting(t,e.currentTime+.02))}horn(t){let e=this.ctx;if(!e||e.state!=="running")return;let n=Bf[t]||Bf.dima,i=Jn[t]||Jn.dima,r=e.currentTime+.02,a=this.fxm;if(n[0]==="geiger"){a.fx("geiger",r,.5),a._n(r,.5,.2,"bandpass",300,{q:6});return}n[1].forEach((o,l)=>{let c=xr(ii(i.root,i.sc,o)+12*n[3]);n[0]==="reed"||n[0]==="organ"?a.chord(n[0],r+l*n[2],[ii(i.root,i.sc,o)+12*n[3],ii(i.root,i.sc,o+4)+12*n[3]],n[2]*.9,2.2):a.lead(n[0],r+l*n[2],c,n[2]*1.2,1.5)})}mumble(t){let e=this.ctx;if(!e||e.state!=="running")return 0;let n=this.fxm,i=e.currentTime+.03,r=Math.min(3.2,.8+t*.06),a=i,o=150;for(;a<i+r;){let l=.035+Math.random()*.05;o=Math.max(110,Math.min(260,o+(Math.random()-.5)*70));let c=[500,800,1100,1500,2100][Math.floor(Math.random()*5)];n._o("sawtooth",o*1.9,a,l,.5,{lp:c,ft:"bandpass",q:5,sus:1,rel:.012,a:.008,to:o*1.9*(.9+Math.random()*.25)}),a+=l+(Math.random()<.14?.07:.004)}return r}tick(t,e,n,i){let r=this.ctx;if(!r||r.state!=="running")return;let a=r.currentTime,o=this.music;o.drive+=((i?1:0)-o.drive)*.05,o.rush+=(this.rush-o.rush)*.02,this.musicG.gain.setTargetAtTime(.5+.28*this.intensity,a,.3),o.next<a-.3&&(o.next=a+.05),o.schedule(a+.22);let l=this.eng,c=n?.035+t*.045:0,h=t*4%1,u=46+t*60+h*34;l.g.gain.setTargetAtTime(c,a,.1),l.o1.frequency.setTargetAtTime(u,a,.06),l.o2.frequency.setTargetAtTime(u*.5,a,.06),l.f.frequency.setTargetAtTime(300+t*1300,a,.1),l.sg.gain.setTargetAtTime(n?Math.min(.2,Math.max(0,e-3)*.028):0,a,.05),l.sirenG.gain.setTargetAtTime(i?.028:0,a,.1),l.siren.frequency.setTargetAtTime(a*1.6%1<.5?660:880,a,.02)}play(t){let e=this.ctx;if(!e||e.state!=="running")return;let n=e.currentTime+.005,i=this.fxm;if(t==="msg")i._o("sine",880,n,.09,.16,{}),i._o("sine",1320,n+.07,.13,.13,{w:1});else if(t==="voice")i._o("triangle",520,n,.08,.12,{});else if(t==="pick")i._o("triangle",988,n,.1,.18,{}),i._o("triangle",1319,n+.06,.14,.18,{}),i._o("triangle",1976,n+.12,.22,.12,{w:1});else if(t==="step")i._o("square",660,n,.09,.07,{lp:3e3}),i._o("square",990,n+.09,.15,.07,{lp:3e3,w:1});else if(t==="win")i.sting("win",n);else if(t==="bump")i._o("sine",90,n,.18,.55,{to:40}),i._n(n,.12,.28,"lowpass",900);else if(t==="honk")i._o("square",392,n,.25,.06,{sus:1,rel:.03,lp:2500}),i._o("square",494,n,.25,.06,{sus:1,rel:.03,lp:2500});else if(t==="door")i._n(n,.08,.32,"lowpass",500),i._o("sine",140,n,.1,.3,{to:70});else if(t==="bad")i.sting("fail",n);else if(t==="zap")i._o("sawtooth",1400,n,.4,.14,{to:90,lp:4e3}),i._n(n,.3,.2,"highpass",3e3,{w:1});else if(t==="tick")i._o("square",1200,n,.05,.08,{lp:4e3});else if(t==="bell"){for(let[r,a]of[[196,.4],[392,.2],[587,.14],[784,.08]])i._o("sine",r,n,3.2,a,{w:2});i._n(n,.05,.2,"highpass",2e3)}else t==="boom"?(i._o("sine",120,n,.5,.5,{to:35}),i._n(n,.7,.22,"lowpass",1400,{w:1}),i._n(n+.1,.9,.06,"highpass",5e3,{w:2})):t==="crash"?(i._n(n,.16,.3,"bandpass",1800,{q:.5}),i._o("triangle",320,n,.12,.2,{to:120}),i._n(n+.03,.25,.12,"highpass",4500,{w:1})):t==="radio"&&(i._n(n,.12,.1,"bandpass",2400,{q:1.5}),i._o("sine",1700,n+.02,.06,.05,{to:900}))}static render(t,e,n={}){let r=new OfflineAudioContext(2,Math.floor(44100*e),44100),a=r.createGain();a.gain.value=.9,s.chain(r,a,r.destination);let o=r.createGain();o.gain.value=.5+.28*(n.intensity===void 0?.5:n.intensity),o.connect(a);let l=new Yr(r,o);return l.drive=n.drive||0,l.rush=n.rush||0,l.next=.05,l.setTheme(t),l.tone.frequency.value=Jn[t].lp||16e3,l.trim.gain.value=Jn[t].g||1,l.revOut.gain.value=.5+(Jn[t].rv||.25),l.schedule(e-.05),n.sting&&l.sting(n.sting,e*.5),r.startRendering()}};var _n=[{id:"arkasha",name:"\u0410\u0440\u043A\u0430\u0448\u0430",css:"#c8402e",tag:"\u0412\u043B\u0430\u0434\u0435\u043B\u0435\u0446 \u0447\u0430\u0442\u0430",desc:"\u041A\u043E\u0441\u0442\u044E\u043C, \u0431\u0430\u0431\u043E\u0447\u043A\u0430, \u0431\u043E\u0440\u043E\u0434\u0430. \u0421\u0447\u0438\u0442\u0430\u0435\u0442 \u0434\u043D\u0438 \u0434\u043E \u0440\u0435\u043B\u0438\u0437\u0430. 600 \u043C\u0435\u0433\u0430\u0431\u0438\u0442, \u043D\u043E \u043D\u0430 PS5 \u043D\u0435\u0442 212 \u0413\u0411 \u2014 \u043F\u0440\u0438\u0434\u0451\u0442\u0441\u044F \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0412\u0435\u0434\u044C\u043C\u0430\u043A\u0430.",quotes:["\u041C\u0435\u0441\u044F\u0446...","21 \u0434\u0435\u043D\u044C..","\u0412\u0441\u0435 \u0442\u0430\u043A, \u0442\u043E\u043B\u044C\u043A\u043E \u043D\u0430\u043E\u0431\u043E\u0440\u043E\u0442","212 \u0433\u0431, \u0430\u0445\u0443\u0435\u0442\u044C","\u0412\u0435\u0434\u044C\u043C\u0430\u043A\u0430 \u043F\u0440\u0438\u0434\u0451\u0442\u0441\u044F \u0443\u0434\u0430\u043B\u0438\u0442\u044C\u{1F601}\u{1F601}","\u0423 \u043C\u0435\u043D\u044F 600 \u043C\u0435\u0433\u0430 \u0431\u0438\u0442, \u0432\u0441\u0435 \u043F\u0440\u044F\u043C \u0445\u043E\u0440\u043E\u0448\u043E)","\u0412\u0435\u0434\u044C\u043C\u0430\u043A \u043A\u043E\u043D\u0435\u0447\u043D\u043E \u043B\u0435\u0433\u0435\u043D\u0434\u0430","\u0421\u043A\u0430\u0437\u0430\u0442\u044C \u0447\u0442\u043E \u044D\u0442\u043E \u0448\u0435\u0434\u0435\u0432\u0440 \u2014 \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u0441\u043A\u0430\u0437\u0430\u0442\u044C","\u0412\u043A\u043B\u044E\u0447\u0438\u043B, \u0432\u044B\u043A\u043B\u044E\u0447\u0438\u043B, \u0434\u0432\u0430 \u0434\u043D\u044F \u043F\u0440\u043E\u0448\u043B\u043E"]},{id:"max",name:"\u041C\u0430\u043A\u0441",css:"#e2603f",tag:"\u0413\u043E\u043B\u043E\u0441\u043E\u0432\u044B\u0435, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043D\u0438\u043A\u0442\u043E \u043D\u0435 \u0441\u043B\u0443\u0448\u0430\u0435\u0442",desc:"\u0411\u043E\u043A\u0441\u0451\u0440 \u0441 \u0433\u043E\u043B\u044B\u043C \u0442\u043E\u0440\u0441\u043E\u043C. \u041A\u0443\u043F\u0438\u043B 007 \xAB\u0443 \u0442\u0438\u043F\u043E\u0432\xBB \u0437\u0430 390 \u20BD, \u043A\u043E\u0433\u0434\u0430 \u0434\u0438\u0441\u043A \u043D\u0430 \u0410\u0432\u0438\u0442\u043E \u0441\u0442\u043E\u0438\u0442 5000. \u0416\u0434\u0451\u0442 \u043D\u043E\u0432\u044B\u0439 \u0442\u0435\u043B\u0435\u043A.",quotes:["\u041E\u0447\u0435\u043D\u044C \u043F\u043B\u043E\u0445\u043E\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435. \u041E\u043D\u043E \u043C\u043D\u0435 \u043E\u0447\u0435\u043D\u044C \u043D\u0435 \u043D\u0440\u0430\u0432\u0438\u0442\u0441\u044F","\u042F \u043A\u0443\u043F\u0438\u043B \u0437\u0430 390\u{1F602}","\u0414\u0438\u0441\u043A \u043D\u0430 \u0430\u0432\u0438\u0442\u043E \u0441\u0442\u043E\u0438\u0442 5000 \u0440\u0443\u0431","\u041F\u043E\u0442\u0435\u0440\u043F\u0438 \u0447\u0443\u0442\u044C-\u0447\u0443\u0442\u044C!! \u041E\u043D\u043E \u0441\u0442\u043E\u0438\u0442 \u0442\u043E\u0433\u043E \u0432 20 \u043A\u0440\u0430\u0442","\u041B\u0435\u0442\u0441 \u0433\u043E\u0443 \u043D\u0430\u0445\u0443\u0439","\u0412 \u0441\u0431 \u043F\u0440\u0438\u0435\u0434\u0435\u0442 \u043D\u043E\u0432\u044B\u0439 \u0442\u0435\u043B\u0435\u043A \u0438 \u044F \u0437\u0430\u0441\u044F\u0434\u0443 \u043D\u0430 \u043C\u0435\u0441\u044F\u0446)))","\u041C\u0435\u043D\u044F \u0440\u0430\u0437\u044A\u0435\u0431\u044B\u0432\u0430\u0435\u0442 \u043F\u0437\u0434\u0446","\u0411\u0435\u0440\u0438 \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0443 \u0438 \u043D\u0435 \u0435\u0431\u0438 \u043C\u043E\u0437\u0433\u0438"]},{id:"dima",name:"\u0414\u043C\u0418\u0418\u0442\u0440\u0438\u0439",css:"#5d6b8a",tag:"\u0421\u0434\u0435\u043B\u0430\u043B \u044D\u0442\u0443 \u0438\u0433\u0440\u0443 \u043D\u0435\u0439\u0440\u043E\u0441\u0435\u0442\u044C\u044E",desc:"\u0421\u0438\u043B\u0443\u044D\u0442 \u0441 \u0440\u044E\u043A\u0437\u0430\u043A\u043E\u043C \u0432 \u0442\u0443\u043C\u0430\u043D\u0435. \u0417\u043E\u0432\u0451\u0442 \u0432\u0441\u0435\u0445 \xAB\u043D\u0430 \u0432\u043E\u0439\u043D\u0443\xBB \u2014 \u043D\u0438\u043A\u0442\u043E \u043D\u0435 \u043F\u0440\u0438\u0445\u043E\u0434\u0438\u0442. \u041A\u0438\u043D\u043E\u0442\u0435\u0430\u0442\u0440 11.1.4. \u041F\u0440\u043E\u0434\u0430\u0451\u0442 VR2.",quotes:["\u0414\u0430\u0432\u043D\u043E \u043D\u0435 \u0432\u043E\u0435\u0432\u0430\u043B\u0438)","\u0413\u043E\u0443 \u0432\u0441\u0435 \u043D\u0430 \u0432\u043E\u0439\u043D\u0443","11.1.4","\u041A\u0430\u043A\u0430\u044F \u0442\u043E \u043C\u0430\u0433\u0438\u044F) \u0445\u0437","\u041F\u043E\u0442\u043E\u043C \u043F\u043E\u043A\u0430\u0436\u0443)","\u042D\u0442\u043E \u0443\u0436\u0435 \u043D\u043E\u0432\u0430\u044F \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u044C)","\u0420\u0435\u0448\u0438\u043B \u043F\u0440\u043E\u0434\u0430\u0442\u044C VR2. \u0415\u0441\u043B\u0438 \u043A\u043E\u043C\u0443 \u043D\u0443\u0436\u043D\u043E \u2014 \u043F\u0438\u0448\u0438\u0442\u0435","\u0422\u043E\u0436\u0435 \u0441\u043A\u043E\u0440\u043E \u0441\u0434\u0435\u043B\u0430\u044E)"]},{id:"igor",name:"\u0418\u0433\u043E\u0440\u044C",css:"#e8e8e8",tag:"144 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438. \u0427\u0435\u0442\u0432\u0451\u0440\u0442\u044B\u0439 \u0440\u0430\u0437",desc:"\u0427\u0451\u0440\u043D\u043E-\u0431\u0435\u043B\u044B\u0439 \u0440\u0430\u043A \u0441 \u043C\u043E\u043D\u043E\u0433\u0440\u0430\u043C\u043C\u043E\u0439. \u0421\u043E\u0431\u0438\u0440\u0430\u0435\u0442 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438, \u043F\u0435\u0440\u044C\u044F \u0446\u0430\u043F\u0435\u043B\u044C \u0438 \u043E\u0440\u0445\u0438\u0434\u0435\u0438. \u0417\u0430\u0432\u0451\u043B \u043D\u043E\u0432\u044B\u0439 \u0430\u043A\u043A\u0430\u0443\u043D\u0442, \u0447\u0442\u043E\u0431\u044B \u0437\u0430\u043A\u0440\u044B\u0442\u044C \u0432\u0441\u0451 \u043D\u0430 100% \u0437\u0430\u043D\u043E\u0432\u043E.",quotes:["\u041C\u043D\u0435 144 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438 \u043D\u0430\u0434\u043E \u043D\u0430\u0439\u0442\u0438","\u041D\u0435\u0434\u0435\u043B\u044E \u0435\u0431\u0443\u0447\u0438\u0445 \u043F\u0442\u0438\u0446 \u0441\u043E\u0431\u0438\u0440\u0430\u043B\u{1F613}","\u0411\u0430\u0442\u043B\u0430\u2026 \u043F\u0438\u0437\u0434\u0430\u0442\u0430\u044F!!!","\u0411\u0430\u0442\u043B\u0430 \u2026 \u0437\u0430\u043B\u0443\u043F\u0430 \u043F\u043E\u043B\u043D\u0430\u044F!!!","\u0414\u0438\u043C\u0430\u043D \u0421\u043E\u0440\u044F\u043D\u2026 \u044F \u0447\u0435\u0442 \u043F\u0440\u043E\u0435\u0431\u0430\u043B\u0441\u044F","\u0421\u0435\u0439\u0447\u0430\u0441 \u0438\u0433\u0440\u0430\u044E\u2026 \u044F \u0441\u0447\u0430\u0441\u0442\u043B\u0438\u0432","\u0412\u0430\u044F\u044F\u044F\u044F\u{1F979}\u{1F60D}","\u042D\u0442\u043E \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u0430\u044F \u0438\u0433\u0440\u0430"]},{id:"geisler",name:"\u0413\u0430\u0439\u0441\u043B\u0435\u0440",css:"#b0407a",tag:"\u041A\u0430\u043A \u0440\u0430\u0437 \u043A 19-\u043C\u0443 \u0434\u043E\u043A\u0430\u0447\u0430\u0435\u0442\u0441\u044F",desc:"\u0420\u0430\u043A \u0432\u043E \u0434\u0432\u043E\u0440\u0446\u0435 \u0441 \u043B\u044E\u0441\u0442\u0440\u0430\u043C\u0438. \u041A\u0430\u0447\u0430\u0435\u0442 \u0447\u0435\u0440\u0435\u0437 \u041C\u0435\u0433\u0430\u0444\u043E\u043D. \u0417\u043D\u0430\u0435\u0442 \u0432\u0441\u0451 \u043F\u0440\u043E \u041F2/\u041F3 \u0438 \u0443\u0434\u0438\u0432\u043B\u044F\u0435\u0442\u0441\u044F, \u043F\u043E\u0447\u0435\u043C\u0443 \u043B\u0430\u0432\u043E\u0447\u043A\u0443 \u0434\u043E \u0441\u0438\u0445 \u043F\u043E\u0440 \u043D\u0435 \u043F\u0440\u0438\u043A\u0440\u044B\u043B\u0438.",quotes:["\u041A\u0430\u043A \u0440\u0430\u0437 \u043A 19\u043C\u0443 \u0434\u043E\u043A\u0430\u0447\u0430\u0435\u0442\u0441\u044F \u{1F602}\u{1F602}","\u0411\u0430\u0442\u044F \u0432 \u0437\u0434\u0430\u043D\u0438\u0438!)","\u041C\u0435\u043D\u044F \u0443\u0434\u0438\u0432\u043B\u044F\u0435\u0442 \u043F\u043E\u0447\u0435\u043C\u0443 \u043F\u0441 \u0434\u043E \u0441\u0438\u0445 \u043F\u043E\u0440 \u044D\u0442\u0443 \u043B\u0430\u0432\u043E\u0447\u043A\u0443 \u043D\u0435 \u043F\u0440\u0438\u043A\u0440\u044B\u043B\u0438))","\u041E\u0434\u043D\u0430 \u043B\u0438\u0446\u0435\u043D\u0437\u0438\u044F \u043C\u0430\u043A\u0441\u0438\u043C\u0443\u043C \u043D\u0430 3 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0430 \u0434\u0435\u043B\u0438\u0442\u0441\u044F","\u0418\u0433\u043E\u0440\u044C \u0442\u044B \u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0440\u0430\u0437 \u0440\u0434\u0440 \u043F\u0440\u043E\u0448\u0435\u043B? 7?)","\u0422\u044B \u0438\u0445 \u0443\u0436\u0435 \u043D\u0430\u0445\u043E\u0434\u0438\u043B, \u043D\u043E \u043F\u0440\u043E\u0441\u0442\u043E \u043D\u0435 \u043F\u043E\u043C\u043D\u0438\u0448\u044C \u043A\u0443\u0434\u0430 \u0441\u043B\u043E\u0436\u0438\u043B)"]},{id:"pasha",name:"\u041F\u0430\u0448\u0430",css:"#d9a520",tag:"\u041A\u0440\u043E\u043C\u0435 LOA \u0438 RDR \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u0437\u0430\u0435\u0431\u0438\u0441\u044C",desc:"\u0417\u043E\u043B\u043E\u0442\u043E\u0439 \u0440\u0430\u043A \u0432 \u0441\u0442\u0438\u043B\u0435 \u041A\u043B\u0438\u043C\u0442\u0430. \u0421\u043B\u0435\u0434\u0438\u0442 \u0437\u0430 \u0441\u043B\u0438\u0432\u0430\u043C\u0438 \u0438 \u043F\u0435\u0440\u0435\u043D\u043E\u0441\u0430\u043C\u0438 \u043F\u0440\u0435\u0434\u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438. \u0425\u043E\u0447\u0435\u0442 \u043D\u0430\u0447\u0430\u0442\u044C BG3, \u043D\u043E \u0431\u043E\u0438\u0442\u0441\u044F.",quotes:["\u0414\u043B\u044F \u043C\u0435\u043D\u044F \u043A\u0440\u043E\u043C\u0435 LOA \u0438 RDR \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u0437\u0430\u0435\u0431\u0438\u0441\u044C\u{1F612}","BG3 \u0445\u043E\u0447\u0443 \u043D\u0430\u0447\u0430\u0442\u044C, \u043D\u043E \u0431\u043E\u044E\u0441\u044C","\u041F\u0440\u043E \u0441\u043B\u0438\u0432\u044B \u0432 \u043A\u0443\u0440\u0441\u0435? \u041F\u0438\u0437\u0434\u0435\u0446 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u0430\u044F \u0445\u0443\u0439\u043D\u044F)","\u041F\u0435\u0440\u0435\u043D\u0435\u0441\u043B\u0438 \u0441 12-\u043E\u0433\u043E \u043D\u0430 10","\u0421\u043A\u043E\u0440\u0435\u0435 \u0431\u044B","Extra \u0431\u0435\u0440\u0438"]},{id:"nikita",name:"\u041D\u0438\u043A\u0438\u0442\u0430",css:"#3a3a44",tag:"\xAB\u0427\u0442\u043E \u044D\u0442\u043E?\xBB",desc:"\u0422\u0451\u043C\u043D\u044B\u0435 \u043E\u0447\u043A\u0438. \u041F\u043E\u043F\u0430\u043B \u0432 \u0447\u0430\u0442 \u0441\u043B\u0443\u0447\u0430\u0439\u043D\u043E, \u043D\u0430 \u0440\u0435\u043B\u0438\u0437 \u0435\u043C\u0443 \u0432\u043E\u043E\u0431\u0449\u0435 \u043F\u043E\u0435\u0431\u0430\u0442\u044C. \u0417\u0430\u0442\u043E \u0441\u0430\u043C \u0441\u0434\u0435\u043B\u0430\u043B \u043D\u0435\u0439\u0440\u043E\u0441\u0435\u0442\u044C\u044E \u0442\u0440\u0438 \u0438\u0433\u0440\u044B. \u041E\u043F\u044B\u0442 \u2014 Tekken \u0441 \u0434\u0435\u0442\u044C\u043C\u0438.",quotes:["\u0427\u0442\u043E \u044D\u0442\u043E?","\u041C\u043D\u0435 \u0432\u043E\u043E\u0431\u0449\u0435 \u043F\u043E\u0435\u0431\u0430\u0442\u044C \u043D\u0430 \u043D\u043E\u0432\u0443\u044E \u0413\u0422\u0410","\u042F, \u043A\u0441\u0442\u0430\u0442\u0438, \u0442\u043E\u0436\u0435 \u2014 3 \u0438\u0433\u0440\u0443 \u0443\u0436\u0435 \u0441\u0434\u0435\u043B\u0430\u043B\u{1F601}","\u041C\u043E\u0439 \u043E\u043F\u044B\u0442 \u2014 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0431\u043E\u0435\u0432 \u0441 \u0434\u0435\u0442\u044C\u043C\u0438 \u0432 \u0442\u0435\u0439\u043A\u0435\u043D","\u042D\u0442\u043E \u0447\u0442\u043E \u0437\u0430 \u043F\u0438\u0437\u0434\u0435\u0446???!!! \u{1F62D}","\u0410 \u044D\u0442\u043E \u0441\u0438\u043B\u044C\u043D\u0430\u044F \u0448\u0442\u0443\u0447\u043A\u0430?","\u0422\u0430\u043A \u0438 \u043F\u043E\u0434\u0443\u043C\u0430\u043B"]},{id:"kos",name:"\u041A\u043E\u0441",css:"#2f8fdc",tag:"\u041D\u0430 \u0421\u0435\u0440\u0433\u0435\u044F \u0441\u0442\u043E\u043B\u0438\u043A",desc:"\u0421\u0438\u043D\u0438\u0439 \u043A\u0440\u0443\u0436\u043E\u043A \xAB\u0421\u041A\xBB. \u0424\u0430\u043D\u0430\u0442 \u0421\u0442\u0430\u043B\u043A\u0435\u0440\u0430 \u0438 \u0412\u0435\u0434\u044C\u043C\u0430\u043A\u0430. \u041F\u0440\u043E\u0441\u044B\u043F\u0430\u0435\u0442\u0441\u044F \u0432 5 \u0443\u0442\u0440\u0430, \u043F\u043E\u0447\u0443\u0432\u0441\u0442\u0432\u043E\u0432\u0430\u0432, \u0447\u0442\u043E \u0432 \u0447\u0430\u0442\u0435 \u0437\u0430\u0433\u043E\u0432\u043E\u0440\u0438\u043B\u0438 \u043F\u0440\u043E \u0412\u0435\u0434\u044C\u043C\u0430\u043A\u0430.",quotes:["\u041D\u0430 \u0421\u0435\u0440\u0433\u0435\u044F \u0441\u0442\u043E\u043B\u0438\u043A","\u041F\u0440\u043E\u0441\u043D\u0443\u043B\u0441\u044F \u043F\u0440\u043E\u0441\u0442\u043E, \u0447\u0443\u0432\u0441\u0442\u0432\u0443\u044E \u043F\u0440\u043E \u0432\u0435\u0434\u044C\u043C\u0430\u043A\u0430 \u043F\u043E\u0448\u0435\u043B \u0440\u0430\u0437\u0433\u043E\u0432\u043E\u0440)","\u042F \u043A\u0441\u0442\u0430\u0442\u0438 \u0443\u0434\u0438\u0432\u043B\u0435\u043D, \u0447\u0442\u043E \u0437\u0434\u0435\u0441\u044C \u0442\u043E\u043B\u044C\u043A\u043E \u043C\u044B \u0441 \u0442\u043E\u0431\u043E\u0439 \u0444\u0430\u043D\u0430\u0442\u044B \u0441\u0442\u0430\u043B\u043A\u0435\u0440\u0430","\u0422\u043E \u043B\u0438 \u0434\u0435\u043B\u043E \u044D\u0442\u0438 \u043C\u0430\u043B\u043E\u043C\u043E\u0449\u043D\u044B\u0435 \u043A\u043E\u043D\u0441\u043E\u043B\u0438)","\u0411\u0438\u043D\u043E\u043A\u043B\u044C \u0433\u043E\u0432\u043E\u0440\u044F\u0442 \u0434\u043E\u0431\u0430\u0432\u0438\u043B\u0438?)","\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0438\u043C \u043F\u043E\u0441\u043C\u043E\u0442\u0440\u0438\u043C"]},{id:"artem",name:"\u0410\u0440\u0442\u0451\u043C",css:"#4cb84a",tag:"\u0411\u043E\u0436\u0435, \u0445\u0440\u0430\u043D\u0438 \u043F\u0438\u0440\u0430\u0442\u043E\u0432, \u0430\u043C\u0438\u043D\u044C",desc:"\u0417\u0435\u043B\u0451\u043D\u044B\u0439 \u043A\u0440\u0443\u0436\u043E\u043A \xAB\u0410\u041A\xBB. \u0421\u043E\u0432\u0435\u0442\u0443\u0435\u0442 \u043F\u0440\u043E\u0445\u043E\u0434\u0438\u0442\u044C \u0441 \u043D\u0438\u0437\u043A\u043E\u0439 \u043C\u043E\u0440\u0430\u043B\u044C\u044E. \u0418\u0449\u0435\u0442, \u0433\u0434\u0435 \u043F\u043E\u0447\u0438\u0441\u0442\u0438\u0442\u044C PS5 \u043E\u0442 \u043F\u044B\u043B\u0438, \u043D\u043E \u0412\u0430\u0442\u0443\u0442\u0438\u043D\u0430 \u0434\u0430\u043B\u0435\u043A\u043E\u0432\u0430\u0442\u043E.",quotes:["\u0411\u043E\u0436\u0435, \u0445\u0440\u0430\u043D\u0438 \u043F\u0438\u0440\u0430\u0442\u043E\u0432, \u0430\u043C\u0438\u043D\u044C","\u0412\u0430\u0442\u0443\u0442\u0438\u043D\u0430 \u0434\u0430\u043B\u0435\u043A\u043E\u0432\u0430\u0442\u043E)))","\u041F\u0435\u0439 \u043F\u0438\u0432\u043E, \u0440\u0443\u043A\u0438 \u0434\u043E\u043B\u0436\u043D\u044B \u0431\u044B\u0442\u044C \u0432 \u0440\u044B\u0431\u0435, \u043D\u0435 \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0439 \u0434\u0443\u0448","\u041F\u0440\u043E\u0439\u0434\u0438 \u0441 \u043D\u0438\u0437\u043A\u043E\u0439 \u043C\u043E\u0440\u0430\u043B\u044C\u044E","\u0414\u0438\u043C\u0430\u043D, \u0431\u0435\u0440\u0435\u0433\u0438 \u0441\u0435\u0431\u044F","\u0422\u0430\u043A \u043D\u0430\u0445\u0435\u0440 \u043F2?","\u0422\u044B \u0440\u0435\u0430\u043B\u044C\u043D\u043E \u0414\u043C\u0418\u0418\u0442\u0440\u0438\u0439\u{1F91D}"]},{id:"sanya",name:"\u0421\u0430\u043D\u044F",css:"#9a9a9a",tag:"\u041D\u0430\u0447\u0430\u043B\u043E \u0442\u044F\u0433\u043E\u043C\u043E\u0442\u043D\u043E\u0435",desc:"\u0427\u0451\u0440\u043D\u043E-\u0431\u0435\u043B\u044B\u0439 \u0431\u043E\u0440\u043E\u0434\u0430\u0442\u044B\u0439 \u0440\u0430\u043A. \u041D\u0435 \u043E\u0441\u0438\u043B\u0438\u043B RDR2, \u043F\u043E\u0442\u043E\u043C\u0443 \u0447\u0442\u043E \u043D\u0430\u0447\u0430\u043B\u043E \u043C\u0435\u0434\u043B\u0435\u043D\u043D\u043E\u0435. \u0414\u043E\u043A\u0443\u043F\u0438\u043B \u043E\u043F\u0435\u0440\u0430\u0442\u0438\u0432\u043A\u0438 \u0432 \u043D\u043E\u0443\u0442 \u0440\u0430\u0434\u0438 \u0412\u0435\u0434\u044C\u043C\u0430\u043A\u0430.",quotes:["\u041E\u043D\u0430 \u0432\u043D\u0430\u0447\u0430\u043B\u0435 \u0434\u0438\u043A\u043E \u043C\u0435\u0434\u043B\u0435\u043D\u043D\u0430\u044F","\u0412\u043E\u0442 \u0434\u0430, \u0438\u043C\u0435\u043D\u043D\u043E \u0442\u0430\u043A, \u0442\u044F\u0433\u043E\u043C\u043E\u0442\u043D\u0430\u044F","\u041F\u0440\u0438\u0448\u043B\u043E\u0441\u044C \u043E\u043F\u0435\u0440\u0430\u0442\u0438\u0432\u043A\u0438 \u0434\u043E\u043A\u0443\u043F\u0438\u0442\u044C, \u0447\u0442\u043E\u0431\u044B \u0433\u0440\u0430\u0444\u0438\u043A\u0430 \u043D\u043E\u0440\u043C \u0431\u044B\u043B\u0430\u{1F605}","\u041D\u0443, \u0434\u0430\u043C \u0435\u0439 \u0432\u0442\u043E\u0440\u043E\u0439 \u0448\u0430\u043D\u0441, \u043A\u0430\u043A \u0431\u0443\u0434\u0435\u0442 \u0441\u0432\u043E\u0431\u043E\u0434\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F )"]},{id:"misha",name:"\u041C\u0438\u0448\u0430",css:"#d8623a",tag:"\u0411\u0430\u0442\u044F \u0432 \u0437\u0434\u0430\u043D\u0438\u0438!",desc:"\u0422\u043E\u043B\u044C\u043A\u043E \u043A\u0443\u043F\u0438\u043B PS5. \u0412\u0440\u0435\u043C\u0435\u043D\u0438 \u0438\u0433\u0440\u0430\u0442\u044C \u043D\u0435\u0442. \u0421\u043F\u0440\u043E\u0441\u0438\u043B \u043F\u0440\u043E \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0443 \u2014 \u043F\u043E\u043B\u0443\u0447\u0438\u043B \u0448\u0435\u0441\u0442\u044C \u0432\u0437\u0430\u0438\u043C\u043E\u0438\u0441\u043A\u043B\u044E\u0447\u0430\u044E\u0449\u0438\u0445 \u0441\u043E\u0432\u0435\u0442\u043E\u0432.",quotes:["\u0414\u0430 \u043F\u043E\u043A\u0430 \u043D\u0438\u043A\u0430\u043A, \u0432\u0440\u0435\u043C\u0435\u043D\u0438 \u0442\u0443\u043F\u043E \u043D\u0435\u0442 (","\u0412\u043E\u0442 \u0442\u0430\u043A \u0430\u0433\u0430","\u041E\u043A, \u0441\u043F\u0430\u0441\u0438\u0431\u043E!","\u041E\u0433\u043E\u043D\u044C, 2590 \u0433\u043E\u0434\u043D\u043E \u0434\u043B\u044F \u041D\u0441\u043A\u{1F602}"]}],wi=Object.fromEntries(_n.map(s=>[s.id,s])),Jr={arkasha:{giver:"arkasha",title:"212 \u0413\u0411",reward:500,par:55,intro:[["arkasha","212 \u0433\u0431, \u0430\u0445\u0443\u0435\u0442\u044C"],["arkasha","\u0414\u0430 \u0431\u043B\u044F, \u0432 \u043F\u04415 \u0432\u0441\u0435\u0433\u043E 640\u0433\u0431 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E"],["arkasha","@P, \u043F\u043E\u0434\u044A\u0435\u0437\u0436\u0430\u0439 \u043A \u041E\u043F\u0435\u0440\u043D\u043E\u043C\u0443. \u041D\u0430\u0434\u043E \u043C\u0435\u0441\u0442\u043E \u043E\u0441\u0432\u043E\u0431\u043E\u0434\u0438\u0442\u044C"]],steps:[{pts:["arkasha"],text:"\u041A \u041E\u043F\u0435\u0440\u043D\u043E\u043C\u0443: \u0410\u0440\u043A\u0430\u0448\u0435 \u043D\u0435 \u0445\u0432\u0430\u0442\u0430\u0435\u0442 212 \u0413\u0411"},{choice:{title:"\u041D\u0435 \u0445\u0432\u0430\u0442\u0430\u0435\u0442 212 \u0413\u0411",text:"\u0423 \u0410\u0440\u043A\u0430\u0448\u0438 \u043D\u0430 PS5 \u043A\u043E\u043D\u0447\u0438\u043B\u043E\u0441\u044C \u043C\u0435\u0441\u0442\u043E. \u0427\u0435\u043C \u0436\u0435\u0440\u0442\u0432\u0443\u0435\u043C?",opts:[{label:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0412\u0435\u0434\u044C\u043C\u0430\u043A\u0430",say:[["arkasha","\u0412\u0435\u0434\u044C\u043C\u0430\u043A\u0430 \u043F\u0440\u0438\u0434\u0435\u0442\u0441\u044F \u0443\u0434\u0430\u043B\u0438\u0442\u044C\u{1F601}\u{1F601}"],["kos","\u041F\u0440\u043E\u0441\u043D\u0443\u043B\u0441\u044F \u043F\u0440\u043E\u0441\u0442\u043E, \u0447\u0443\u0432\u0441\u0442\u0432\u0443\u044E \u043F\u0440\u043E \u0432\u0435\u0434\u044C\u043C\u0430\u043A\u0430 \u043F\u043E\u0448\u0435\u043B \u0440\u0430\u0437\u0433\u043E\u0432\u043E\u0440)"],["kos","\u0412\u044B \u0447\u0451 \u0442\u0430\u043C \u0443\u0434\u0430\u043B\u044F\u0435\u0442\u0435??"]],flag:"witcher"},{label:"\u0421\u0433\u043E\u043D\u044F\u0442\u044C \u0437\u0430 SSD",bonus:600,say:[["arkasha","\u0412\u0435\u0434\u044C\u043C\u0430\u043A \u043A\u043E\u043D\u0435\u0447\u043D\u043E \u043B\u0435\u0433\u0435\u043D\u0434\u0430. \u0413\u043E\u043D\u0438 \u0432 \xAB\u0422\u0435\u0445\u043D\u043E\u0420\u0430\u043A\xBB, \u043E\u043D \u0437\u0430 \u041E\u043F\u0435\u0440\u043D\u044B\u043C"]],add:[{pts:["shop"],text:"\u0422\u0426 \xAB\u0422\u0435\u0445\u043D\u043E\u0420\u0430\u043A\xBB: \u0437\u0430\u0431\u0435\u0440\u0438 SSD"},{pts:["arkasha"],text:"\u0412\u0435\u0437\u0438 SSD \u0410\u0440\u043A\u0430\u0448\u0435"}]}]}}],outro:[["arkasha","\u0417\u0431\u0441. \u0412\u043B\u0435\u0437\u043B\u043E"],["arkasha","\u0412\u0441\u0435 \u0442\u0430\u043A, \u0442\u043E\u043B\u044C\u043A\u043E \u043D\u0430\u043E\u0431\u043E\u0440\u043E\u0442"]]},dima:{giver:"dima",title:"\u041D\u0430 \u0432\u043E\u0439\u043D\u0443",reward:700,par:60,intro:[["dima","\u0414\u0430\u0432\u043D\u043E \u043D\u0435 \u0432\u043E\u0435\u0432\u0430\u043B\u0438)"],["dima","\u0413\u043E\u0443 \u0432\u0441\u0435 \u043D\u0430 \u0432\u043E\u0439\u043D\u0443. \u041D\u043E\u0432\u0430\u044F \u043A\u0430\u0440\u0442\u0430, \u043C\u043E\u0436\u043D\u043E \u0434\u0430\u0436\u0435 \u0431\u0435\u0437 \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0438"],["dima","@P, \u0441\u043E\u0431\u0435\u0440\u0438 \u043D\u0430\u0440\u043E\u0434. \u041E\u0431\u044A\u0435\u0434\u044C \u0442\u0440\u043E\u0438\u0445"]],steps:[{raki:3,text:"\u041F\u043E\u0437\u043E\u0432\u0438 \u0442\u0440\u043E\u0438\u0445 \u043D\u0430 \u0432\u043E\u0439\u043D\u0443"},{pts:["dima"],text:"\u0412\u0435\u0440\u043D\u0438\u0441\u044C \u043A \u0414\u043C\u0418\u0418\u0442\u0440\u0438\u044E \u043D\u0430 \u043D\u0430\u0431\u0435\u0440\u0435\u0436\u043D\u0443\u044E"}],outro:[["dima","Go!"],["sys","\u041D\u0430 \u0432\u043E\u0439\u043D\u0443 \u043F\u0440\u0438\u0448\u043B\u043E: 0 \u0438\u0437 3. \u041A\u0430\u043A \u043E\u0431\u044B\u0447\u043D\u043E."],["igor","\u0414\u0438\u043C\u0430\u043D \u0421\u043E\u0440\u044F\u043D\u2026 \u044F \u0447\u0435\u0442 \u043F\u0440\u043E\u0435\u0431\u0430\u043B\u0441\u044F"]]},max:{giver:"max",title:"\u0414\u0438\u0441\u043A \u0437\u0430 390 \u20BD",reward:900,par:75,intro:[["max",{voice:12}],["max",{voice:7}],["max",{voice:31}],["max","\u041A\u043E\u0440\u043E\u0447\u0435. \u0417\u0430\u0431\u0435\u0440\u0438 \u0443 \u0442\u0438\u043F\u043E\u0432 \u0432 \u0433\u0430\u0440\u0430\u0436\u0430\u0445 007. \u0417\u0430 390. \u0414\u0438\u0441\u043A \u043D\u0430 \u0430\u0432\u0438\u0442\u043E \u0441\u0442\u043E\u0438\u0442 5000 \u0440\u0443\u0431\u{1F602}"]],steps:[{pts:["garage"],text:"\u0413\u0430\u0440\u0430\u0436\u0438 \u043D\u0430 \u043B\u0435\u0432\u043E\u043C \u0431\u0435\u0440\u0435\u0433\u0443: \u0437\u0430\u0431\u0435\u0440\u0438 \u0434\u0438\u0441\u043A \u0443 \u0442\u0438\u043F\u043E\u0432",say:[["sys","\u0422\u0438\u043F: \xAB\u041F2 \u0438\u043B\u0438 \u041F3?\xBB \u2014 \xAB\u0414\u0430\xBB. \u041A\u0443\u043F\u043B\u0435\u043D\u043E \u0437\u0430 390 \u20BD"],["beam","\u26A1\uFE0F \u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C \u0432 Beam Store! \u041C\u044B \u043F\u043E\u043B\u0443\u0447\u0438\u043B\u0438 \u0432\u0430\u0448\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435. \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043E\u0436\u0438\u0434\u0430\u0439\u0442\u0435 \u{1F3AE}"],["sys","\u{1F6A8} \u041C\u043E\u0434\u0435\u0440\u0430\u0442\u043E\u0440\u044B PlayStation \u0437\u0430\u043C\u0435\u0442\u0438\u043B\u0438 \u043E\u0431\u0449\u0438\u0439 \u0430\u043A\u043A\u0430\u0443\u043D\u0442"]],wanted:26},{pts:["max"],text:"\u041E\u0442\u0432\u0435\u0437\u0438 \u0434\u0438\u0441\u043A \u041C\u0430\u043A\u0441\u0443. \u0418 \u043E\u0442\u043E\u0440\u0432\u0438\u0441\u044C \u043E\u0442 \u043C\u043E\u0434\u0435\u0440\u0430\u0442\u043E\u0440\u043E\u0432"}],outro:[["max","\u0412\u044D\u0440\u0438 \u0433\u0443\u0434!!! \u0417\u0431\u0441"],["max","\u042F \u0447\u0435-\u0442 \u0434\u0443\u043C\u0430\u043B, \u0447\u0442\u043E \u041F3 \u043D\u0430\u043E\u0431\u043E\u0440\u043E\u0442 \u0445\u0443\u0436\u0435 \u0438 \u0434\u0435\u0448\u0435\u0432\u043B\u0435"],["arkasha","\u0412\u0441\u0435 \u0442\u0430\u043A, \u0442\u043E\u043B\u044C\u043A\u043E \u043D\u0430\u043E\u0431\u043E\u0440\u043E\u0442"]]},geisler:{giver:"geisler",title:"\u041A\u0430\u043A \u0440\u0430\u0437 \u043A 19-\u043C\u0443",reward:1150,par:80,intro:[["geisler","\u0425\u0437 \u0447\u0435 \u0442\u043E \u043C\u0435\u0433\u0430\u0444\u043E\u043D \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F \u043E\u0447\u0435\u043D\u044C \u043F\u043B\u043E\u0445\u043E \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442.."],["geisler","\u041A\u0430\u043A \u0440\u0430\u0437 \u043A 19\u043C\u0443 \u0434\u043E\u043A\u0430\u0447\u0430\u0435\u0442\u0441\u044F \u{1F602}\u{1F602}"],["dima","\u0423 \u0442\u0435\u0431\u044F \u043C\u043E\u0434\u0435\u043C \u0447\u0435\u0440\u0435\u0437 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u043D\u0443\u044E \u043B\u0438\u043D\u0438\u044E?)"],["geisler","@P, \u043F\u043D\u0438 \u0442\u0440\u0438 \u0432\u044B\u0448\u043A\u0438, \u0430? \u041C\u043E\u0436\u0435\u0442 \u0431\u044B\u0441\u0442\u0440\u0435\u0435 \u043F\u043E\u0439\u0434\u0451\u0442"]],steps:[{pts:["tower2","tower1","tower3"],text:"\u041F\u043D\u0438 \u0442\u0440\u0438 \u0432\u044B\u0448\u043A\u0438 \u0441\u0432\u044F\u0437\u0438",each:"\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0443 \u0413\u0430\u0439\u0441\u043B\u0435\u0440\u0430: "}],outro:[["geisler","\u041E, 97%. \u041E\u0441\u0442\u0430\u043B\u044C\u043D\u043E\u0435 \u043A\u0430\u043A \u0440\u0430\u0437 \u043A 19\u043C\u0443 \u0434\u043E\u043A\u0430\u0447\u0430\u0435\u0442\u0441\u044F"],["max","\u0423 \u043C\u0435\u043D\u044F 500 \u043C\u0431\u0438\u0442/\u0441\u0435\u043A, \u0434\u043E\u0432\u043E\u043B\u044C\u043D\u043E \u0431\u044B\u0441\u0442\u0440\u043E \u0441\u043A\u0430\u0447\u0430\u043B\u043E\u0441\u044C"]]},kos:{giver:"kos",title:"\u0417\u043E\u043D\u0430",reward:1100,par:75,intro:[["kos","\u042F \u043A\u0441\u0442\u0430\u0442\u0438 \u0443\u0434\u0438\u0432\u043B\u0435\u043D, \u0447\u0442\u043E \u0437\u0434\u0435\u0441\u044C \u0442\u043E\u043B\u044C\u043A\u043E \u043C\u044B \u0441 \u0442\u043E\u0431\u043E\u0439 \u0444\u0430\u043D\u0430\u0442\u044B \u0441\u0442\u0430\u043B\u043A\u0435\u0440\u0430"],["kos","@P, \u043F\u0440\u0438\u0435\u0437\u0436\u0430\u0439 \u0432 \u043F\u0440\u043E\u043C\u0437\u043E\u043D\u0443. \u0412 \u0417\u043E\u043D\u0443 \u043D\u0430 \u043C\u0430\u0448\u0438\u043D\u0435 \u043D\u0435\u043B\u044C\u0437\u044F, \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u0435\u0448\u043A\u043E\u043C"],["kos","\u0410\u0440\u0442\u0435\u0444\u0430\u043A\u0442 \u0432 \u0434\u0430\u043B\u044C\u043D\u0435\u043C \u0443\u0433\u043B\u0443. \u0412 \u0430\u043D\u043E\u043C\u0430\u043B\u0438\u0438 \u043D\u0435 \u043B\u0435\u0437\u044C"]],steps:[{pts:["gate"],text:"\u041F\u0440\u043E\u043C\u0437\u043E\u043D\u0430: \u043A \u0432\u043E\u0440\u043E\u0442\u0430\u043C \u0417\u043E\u043D\u044B"},{pts:["artifact"],foot:!0,r:2.5,text:"\u041F\u0435\u0448\u043A\u043E\u043C: \u0434\u043E\u0441\u0442\u0430\u043D\u044C \u0430\u0440\u0442\u0435\u0444\u0430\u043A\u0442, \u043E\u0431\u0445\u043E\u0434\u0438 \u0430\u043D\u043E\u043C\u0430\u043B\u0438\u0438",say:[["sys","\u0410\u0440\u0442\u0435\u0444\u0430\u043A\u0442 \xAB\u041F\u043B\u043E\u0442\u0432\u0430\xBB \u0443 \u0442\u0435\u0431\u044F"],["kos","\u0411\u0438\u043D\u043E\u043A\u043B\u044C \u0433\u043E\u0432\u043E\u0440\u044F\u0442 \u0434\u043E\u0431\u0430\u0432\u0438\u043B\u0438?)"]]},{pts:["kos"],text:"\u041E\u0442\u043D\u0435\u0441\u0438 \u0430\u0440\u0442\u0435\u0444\u0430\u043A\u0442 \u041A\u043E\u0441\u0443"}],outro:[["kos","\u041D\u0430 \u0421\u0435\u0440\u0433\u0435\u044F \u0441\u0442\u043E\u043B\u0438\u043A"],["sys","\u0421\u0442\u043E\u043B\u0438\u043A \u0437\u0430\u0431\u0440\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u043D. \u0421\u0442\u043E\u0439\u043C\u044F \u043D\u0435 \u043F\u0440\u0438\u0434\u0451\u0442\u0441\u044F"]]},nikita:{giver:"nikita",title:"\u0418\u0433\u0440\u0430 \u043C\u0435\u0447\u0442\u044B",reward:320,par:30,intro:[["nikita","\u044F, \u043A\u0441\u0442\u0430\u0442\u0438, \u0442\u043E\u0436\u0435 - 3 \u0438\u0433\u0440\u0443 \u0443\u0436\u0435 \u0441\u0434\u0435\u043B\u0430\u043B\u{1F601}"],["nikita","\u0412\u043E\u043F\u043B\u043E\u0449\u0430\u044E \u0432\u0441\u0435 \u0444\u0430\u043D\u0442\u0430\u0437\u0438\u0438 \u043A\u0430\u043A\u043E\u0439 \u0434\u043E\u043B\u0436\u043D\u0430 \u0431\u044B\u0442\u044C \u0438\u0433\u0440\u0430 \u043C\u0435\u0447\u0442\u044B\u{1F601}"],["nikita","@P, \u043F\u043E\u0434\u044A\u0435\u0437\u0436\u0430\u0439, \u043F\u043E\u043A\u0430\u0436\u0443. \u0422\u0430\u043C 4 \u0440\u0430\u0441\u044B \u0438 AI \u043F\u0440\u043E\u0442\u0438\u0432\u043D\u0438\u043A"]],steps:[{pts:["nikita"],text:"\u041A \u041D\u0438\u043A\u0438\u0442\u0435: \u043E\u043D \u0441\u0434\u0435\u043B\u0430\u043B \u0438\u0433\u0440\u0443 \u043C\u0435\u0447\u0442\u044B",say:[["nikita","\u0432\u043E\u0442 \u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u043E\u0438\u0433\u0440\u0430\u0442\u044C:"],["sys","\u041D\u0438\u043A\u0438\u0442\u0430 \u0432\u043A\u043B\u044E\u0447\u0438\u043B \u0441\u0432\u043E\u044E \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u044E. \u0422\u0430\u0439\u043C\u0435\u0440 \u0434\u043E \u0440\u0435\u043B\u0438\u0437\u0430 \u043F\u0440\u0438 \u044D\u0442\u043E\u043C \u043D\u0435 \u043E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u043B\u0441\u044F"]]},{duel:!0}],outro:[["nikita","\u042D\u0442\u043E \u0447\u0442\u043E \u0437\u0430 \u043F\u0438\u0437\u0434\u0435\u0446???!!! \u{1F62D}"],["dima","\u0422\u043E\u0436\u0435 \u0441\u043A\u043E\u0440\u043E \u0441\u0434\u0435\u043B\u0430\u044E)"],["nikita","\u0434\u0438\u043C\u0430\u043D, \u043F\u043E\u043A\u0430 \u0437\u0430\u043A\u0430\u043F\u044B\u0432\u0430\u0435\u043C\u0441\u044F)"]],outroLost:[["nikita","AI \u043F\u0440\u043E\u0442\u0438\u0432\u043D\u0438\u043A 50% \u0438\u0433\u0440 \u043C\u0435\u043D\u044F \u0434\u0435\u043B\u0430\u0435\u0442, \u043A\u0430\u043A \u043C\u0430\u043B\u0435\u043D\u044C\u043A\u043E\u0433\u043E"],["igor","\u041D\u0438\u043A\u0438\u0442\u2026 \u043D\u0438\u0447\u0435\u0433\u043E \u0441\u0442\u0440\u0430\u0448\u043D\u043E\u0433\u043E) \u043D\u0435 \u043F\u0435\u0440\u0435\u0436\u0438\u0432\u0430\u0439 \u0438\u0437-\u0437\u0430 \u044D\u0442\u043E\u0433\u043E)"]]},sanya:{giver:"sanya",title:"\u0422\u044F\u0433\u043E\u043C\u043E\u0442\u043D\u043E\u0435 \u043D\u0430\u0447\u0430\u043B\u043E",reward:1e3,par:65,intro:[["sanya","\u0410\u043D\u0430\u043B\u043E\u0433\u0438\u0447\u043D\u043E, \u043F\u043E\u0441\u0442\u0430\u0432\u0438\u043B \u043D\u0430 \u043D\u043E\u0443\u0442 \u0438 \u043F\u043E\u0438\u0433\u0440\u044B\u0432\u0430\u044E)"],["sanya","\u041F\u0440\u0438\u0448\u043B\u043E\u0441\u044C \u043E\u043F\u0435\u0440\u0430\u0442\u0438\u0432\u043A\u0438 \u0434\u043E\u043A\u0443\u043F\u0438\u0442\u044C, \u0447\u0442\u043E\u0431\u044B \u0433\u0440\u0430\u0444\u0438\u043A\u0430 \u043D\u043E\u0440\u043C \u0431\u044B\u043B\u0430\u{1F605}"],["sanya","@P, \u0437\u0430\u0445\u0432\u0430\u0442\u0438 \u0435\u0449\u0451 \u043F\u043B\u0430\u043D\u043A\u0443 \u0432 \xAB\u0422\u0435\u0445\u043D\u043E\u0420\u0430\u043A\u0435\xBB \u0438 \u0432\u0435\u0437\u0438 \u043A\u043E \u043C\u043D\u0435 \u043D\u0430 \u043B\u0435\u0432\u044B\u0439 \u0431\u0435\u0440\u0435\u0433"]],steps:[{pts:["shop"],text:"\u0422\u0426 \xAB\u0422\u0435\u0445\u043D\u043E\u0420\u0430\u043A\xBB: \u043E\u043F\u0435\u0440\u0430\u0442\u0438\u0432\u043A\u0430 \u0434\u043B\u044F \u0421\u0430\u043D\u0438"},{pts:["sanya"],text:"\u0412\u0435\u0437\u0438 \u043E\u043F\u0435\u0440\u0430\u0442\u0438\u0432\u043A\u0443 \u0421\u0430\u043D\u0435 \u043D\u0430 \u043B\u0435\u0432\u044B\u0439 \u0431\u0435\u0440\u0435\u0433"},{slow:8,text:"\u0422\u0435\u0440\u043F\u0438: \u0435\u0434\u044C \u043C\u0435\u0434\u043B\u0435\u043D\u043D\u0435\u0435 25 \u043A\u043C/\u0447",enter:[["sys","\u0421\u0430\u043D\u044F \u0432\u043A\u043B\u044E\u0447\u0438\u043B RDR2. \u041D\u0430\u0447\u0430\u043B\u043E, \u0441\u043D\u0435\u0433. \u0415\u0434\u044C \u043C\u0435\u0434\u043B\u0435\u043D\u043D\u043E \u0438 \u0442\u0435\u0440\u043F\u0438 \u0432\u043C\u0435\u0441\u0442\u0435 \u0441 \u043D\u0438\u043C"],["sanya","\u042F \u0442\u0430\u043A \u0438 \u043D\u0435 \u0441\u043C\u043E\u0433 \u0438\u0433\u0440\u0430\u0442\u044C \u0432 \u0440\u0434\u0440, \u043D\u0443 \u043E\u043D\u0430 \u0432\u043D\u0430\u0447\u0430\u043B\u0435 \u0434\u0438\u043A\u043E \u043C\u0435\u0434\u043B\u0435\u043D\u043D\u0430\u044F"],["max","\u041D\u043E, \u043F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043F\u043E\u0442\u0435\u0440\u043F\u0438 \u0447\u0443\u0442\u044C-\u0447\u0443\u0442\u044C!! \u042D\u0442\u043E \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u043D\u0430\u0434\u043E \u0441\u0434\u0435\u043B\u0430\u0442\u044C"]],say:[["max","\u041E\u043D\u043E \u0441\u0442\u043E\u0438\u0442 \u0442\u043E\u0433\u043E \u0432 20 \u043A\u0440\u0430\u0442"]],big:["\u041F\u0415\u0420\u0415\u0422\u0415\u0420\u041F\u0415\u041B","50 \u043E\u0447\u043A\u043E\u0432 \xD7 20 \u043A\u0440\u0430\u0442"]}],outro:[["sanya","\u041D\u0443, \u0434\u0430\u043C \u0435\u0439 \u0432\u0442\u043E\u0440\u043E\u0439 \u0448\u0430\u043D\u0441, \u043A\u0430\u043A \u0431\u0443\u0434\u0435\u0442 \u0441\u0432\u043E\u0431\u043E\u0434\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F )"],["arkasha","\u042D\u0442\u043E \u043E\u0434\u043D\u0430 \u0438\u0437 \u043B\u0443\u0447\u0448\u0438\u0445 \u0438\u0433\u0440 \u0432 \u0446\u0435\u043B\u043E\u043C, \u0441\u0440\u0435\u0434\u0438 \u0432\u0441\u0435\u0445 \u0438\u0433\u0440, \u043D\u0430\u0434\u043E \u0434\u0430\u0442\u044C \u0448\u0430\u043D\u0441 100%"]]},misha:{giver:"misha",title:"\u0411\u0430\u0442\u044F \u0432 \u0437\u0434\u0430\u043D\u0438\u0438",reward:750,par:55,failReward:200,intro:[["misha","\u0422\u043E\u043B\u044C\u043A\u043E \u043A\u0443\u043F\u0438\u043B PS5. \u041A\u0430\u043A\u0443\u044E \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0443 \u0431\u0440\u0430\u0442\u044C?"],["pasha","Extra \u0431\u0435\u0440\u0438"],["dima","\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0443\u044E \u0431\u0440\u0430\u0442\u044C \u043D\u0430\u0434\u043E"],["nikita","\u041C\u043D\u0435 \u043A\u0430\u0436\u0435\u0442\u0441\u044F \u043F\u043E\u043A\u0443\u043F\u0430\u0442\u044C \u0443\u0434\u043E\u0431\u043D\u0435\u0435 \u{1F937}\u200D\u2642\uFE0F"],["geisler","\u041C\u0438\u0448\u0430, \u043C\u043E\u0436\u0435\u0448\u044C \u0432\u043E\u043E\u0431\u0449\u0435 \u043D\u0435 \u0431\u0440\u0430\u0442\u044C \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0443"],["max","\u041C\u0438\u0448\u0430, \u0431\u0435\u0440\u0438 \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0443 \u0438 \u043D\u0435 \u0435\u0431\u0438 \u043C\u043E\u0437\u0433\u0438"],["misha","@P, \u0437\u0430\u0435\u0434\u044C \u0432 \u043F\u0430\u0440\u043A \u043D\u0430 \u043B\u0435\u0432\u043E\u043C \u0431\u0435\u0440\u0435\u0433\u0443, \u0440\u0435\u0448\u0438 \u0437\u0430 \u043C\u0435\u043D\u044F"]],steps:[{pts:["misha"],text:"\u0412 \u043F\u0430\u0440\u043A \u043D\u0430 \u043B\u0435\u0432\u043E\u043C \u0431\u0435\u0440\u0435\u0433\u0443: \u0411\u0430\u0442\u044F \u0436\u0434\u0451\u0442 \u0441\u043E\u0432\u0435\u0442\u0430"},{choice:{title:"\u041A\u0430\u043A\u0443\u044E \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0443 \u0431\u0440\u0430\u0442\u044C \u041C\u0438\u0448\u0435?",text:"\u0427\u0430\u0442 \u0432\u044B\u0434\u0430\u043B \u0432\u0437\u0430\u0438\u043C\u043E\u0438\u0441\u043A\u043B\u044E\u0447\u0430\u044E\u0449\u0438\u0435 \u0441\u043E\u0432\u0435\u0442\u044B. \u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0435 \u0441\u043B\u043E\u0432\u043E \u0437\u0430 \u0442\u043E\u0431\u043E\u0439.",opts:[{label:"Extra",say:[["pasha","\u0412 \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0435 \u0435\u0441\u0442\u044C \u0438 \u0442\u043E\u043F\u043E\u0432\u044B\u0445: \u043F\u0430\u0443\u043A\u0438, \u0413\u0422\u0410 5, \u0440\u0434\u0440, \u043B\u0430\u0441\u0442 \u043E\u0444 \u0430\u0437\u2026"],["geisler","\u042D\u0442\u043E \u0432\u0441\u0435 \u043C\u043E\u0436\u043D\u043E \u043F\u043E \u0434\u0435\u0448\u0435\u0432\u043A\u0435 \u0432\u0437\u044F\u0442\u044C \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u043E"]]},{label:"\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0443\u044E",say:[["dima","\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0443\u044E \u0431\u0440\u0430\u0442\u044C \u043D\u0430\u0434\u043E"],["pasha","\u0422\u0430\u043A \u0442\u0430\u043C \u043E\u0442\u043B\u0438\u0447\u0438\u0435, \u0447\u0442\u043E \u0435\u0441\u0442\u044C \u0440\u0435\u0442\u0440\u043E \u043A\u043B\u0430\u0441\u0441\u0438\u043A\u0430 \u0442\u043E\u043B\u044C\u043A\u043E, \u043D\u0430\u0445 \u043E\u043D\u0430 \u043D\u0443\u0436\u043D\u0430?"]]},{label:"\u0412\u043E\u043E\u0431\u0449\u0435 \u043D\u0435 \u0431\u0440\u0430\u0442\u044C",say:[["geisler","\u0415\u0441\u043B\u0438 \u0442\u044B \u043D\u0435 \u043F\u043B\u0430\u043D\u0438\u0440\u0443\u0435\u0448\u044C \u043F\u043E \u0441\u0435\u0442\u0438 \u0441 \u0434\u0440\u0443\u0433\u0438\u043C\u0438 \u0438\u0433\u0440\u0430\u0442\u044C, \u043C\u043E\u0436\u0435\u0448\u044C \u043D\u0435 \u0431\u0440\u0430\u0442\u044C"],["max","\u041E\u043D\u0430 \u0441\u0442\u043E\u0438\u0442 2 \u0442\u0440 \u0432 \u0433\u043E\u0434"]]}]}},{pts:["garage"],timer:32,text:"\u0411\u044B\u0441\u0442\u0440\u043E \u043A \u0442\u0438\u043F\u0430\u043C \u0432 \u0433\u0430\u0440\u0430\u0436\u0438: \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0430 \u0437\u0430 2590",enter:[["misha","\u0412\u043E\u0442 \u0442\u0430\u043A \u0430\u0433\u0430"],["misha","\u041E\u0433\u043E\u043D\u044C, 2590 \u0433\u043E\u0434\u043D\u043E \u0434\u043B\u044F \u041D\u0441\u043A\u{1F602}"],["sys","\u0423 \u0411\u0430\u0442\u0438 \u0435\u0441\u0442\u044C \u043F\u043E\u043B\u043C\u0438\u043D\u0443\u0442\u044B, \u043F\u043E\u043A\u0430 \u0432\u0441\u0435 \u0441\u043F\u044F\u0442. \u0421\u0433\u043E\u043D\u044F\u0439 \u043A \u0442\u0438\u043F\u0430\u043C \u0438 \u043E\u0431\u0440\u0430\u0442\u043D\u043E"]]},{pts:["misha"],text:"\u041E\u0431\u0440\u0430\u0442\u043D\u043E \u043A \u041C\u0438\u0448\u0435, \u043F\u043E\u043A\u0430 \u0443 \u043D\u0435\u0433\u043E \u0435\u0441\u0442\u044C \u0432\u0440\u0435\u043C\u044F"}],outro:[["geisler","\u0411\u0430\u0442\u044F \u0432 \u0437\u0434\u0430\u043D\u0438\u0438!)"],["misha","\u041E\u043A, \u0441\u043F\u0430\u0441\u0438\u0431\u043E!"]],fail:[["misha","\u0414\u0430 \u043F\u043E\u043A\u0430 \u043D\u0438\u043A\u0430\u043A, \u0432\u0440\u0435\u043C\u0435\u043D\u0438 \u0442\u0443\u043F\u043E \u043D\u0435\u0442 ("],["sys","\u0411\u0430\u0442\u044F \u0443\u0448\u0451\u043B. \u041F\u043E\u0434\u043F\u0438\u0441\u043A\u0430 \u043E\u0441\u0442\u0430\u043B\u0430\u0441\u044C \u0443 \u0442\u0438\u043F\u043E\u0432"]]},pasha:{giver:"pasha",title:"\u041F\u0435\u0440\u0435\u043D\u043E\u0441 \u043F\u0440\u0435\u0434\u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438",reward:850,par:70,intro:[["pasha","\u041F\u0440\u043E \u0441\u043B\u0438\u0432\u044B \u0413\u0422\u0410 \u0432 \u043A\u0443\u0440\u0441\u0435? \u041F\u0438\u0437\u0434\u0435\u0446 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u0430\u044F \u0445\u0443\u0439\u043D\u044F)"],["pasha","\u041F\u0440\u0435\u0434\u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0443\u0436\u0435 \u0432 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u0432\u0442\u043E\u0440\u043D\u0438\u043A.."],["pasha","@P, \u0437\u0430\u0431\u0435\u0440\u0438 \u0441\u043B\u0438\u0432 \u0443 \u0438\u043D\u0441\u0430\u0439\u0434\u0435\u0440\u0430. \u041E\u043D \u043F\u043E\u0434 \u0431\u0438\u043B\u0431\u043E\u0440\u0434\u043E\u043C \u043D\u0430 \u043D\u0430\u0431\u0435\u0440\u0435\u0436\u043D\u043E\u0439"]],steps:[{pts:["leak1"],text:"\u0421\u043B\u0438\u0432: \u043F\u043E\u0434 \u0431\u0438\u043B\u0431\u043E\u0440\u0434\u043E\u043C \u043D\u0430 \u043D\u0430\u0431\u0435\u0440\u0435\u0436\u043D\u043E\u0439",say:[["pasha","\u041F\u0435\u0440\u0435\u043D\u0435\u0441\u043B\u0438 \u0441 12-\u043E\u0433\u043E \u043D\u0430 10"],["sys","\u0418\u043D\u0441\u0430\u0439\u0434\u0435\u0440 \u043F\u0435\u0440\u0435\u0435\u0445\u0430\u043B \u043A \u043A\u043E\u043B\u0435\u0441\u0443 \u043E\u0431\u043E\u0437\u0440\u0435\u043D\u0438\u044F"]],big:["\u041F\u0415\u0420\u0415\u041D\u0415\u0421\u041B\u0418","\u0441\u043B\u0438\u0432 \u0442\u0435\u043F\u0435\u0440\u044C \u0443 \u043A\u043E\u043B\u0435\u0441\u0430 \u043E\u0431\u043E\u0437\u0440\u0435\u043D\u0438\u044F"]},{pts:["leak2"],text:"\u041F\u0435\u0440\u0435\u043D\u0435\u0441\u043B\u0438: \u0441\u043B\u0438\u0432 \u0443 \u043A\u043E\u043B\u0435\u0441\u0430 \u043E\u0431\u043E\u0437\u0440\u0435\u043D\u0438\u044F",say:[["pasha","\u041D\u0443 \u043E\u0431\u0435\u0449\u0430\u044E\u0442 \u0431\u0435\u0437 \u043F\u0435\u0440\u0435\u043D\u043E\u0441\u043E\u0432"],["sys","\u041F\u0435\u0440\u0435\u043D\u0435\u0441\u043B\u0438 \u0435\u0449\u0451 \u0440\u0430\u0437. \u0422\u0435\u043F\u0435\u0440\u044C \u043A \u0447\u0430\u0441\u043E\u0432\u043D\u0435"]],big:["\u041E\u041F\u042F\u0422\u042C \u041F\u0415\u0420\u0415\u041D\u0415\u0421\u041B\u0418","\u0441\u043B\u0438\u0432 \u0442\u0435\u043F\u0435\u0440\u044C \u0443 \u0447\u0430\u0441\u043E\u0432\u043D\u0438"]},{pts:["leak3"],text:"\u041F\u0435\u0440\u0435\u043D\u0435\u0441\u043B\u0438: \u0441\u043B\u0438\u0432 \u0443 \u0447\u0430\u0441\u043E\u0432\u043D\u0438 \u043D\u0430 \u041A\u0440\u0430\u0441\u043D\u043E\u043C",say:[["sys","\u0424\u043B\u0435\u0448\u043A\u0430 \u0441\u043E \u0441\u043B\u0438\u0432\u043E\u043C \u0443 \u0442\u0435\u0431\u044F. \u041D\u0430 \u043D\u0435\u0439 212 \u0413\u0411"]]},{pts:["pasha"],text:"\u041E\u0442\u0432\u0435\u0437\u0438 \u0441\u043B\u0438\u0432 \u041F\u0430\u0448\u0435"},{choice:{title:"\u041F\u0430\u0448\u0430 \u043F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u043B \u0441\u043B\u0438\u0432",text:"\xAB\u041D\u0435 \u0437\u043D\u0430\u044E\u2026 \u043D\u0435 \u043F\u043E\u043D\u044F\u043B\u2026\xBB \u0427\u0435\u043C \u0435\u043C\u0443 \u0437\u0430\u043D\u044F\u0442\u044C\u0441\u044F \u0434\u043E \u043F\u043E\u043B\u0443\u043D\u043E\u0447\u0438?",opts:[{label:"\u041F\u0443\u0441\u0442\u044C \u043D\u0430\u0447\u043D\u0451\u0442 BG3",say:[["pasha","BG3 \u0445\u043E\u0447\u0443 \u043D\u0430\u0447\u0430\u0442\u044C, \u043D\u043E \u0431\u043E\u044E\u0441\u044C"],["kos","\u041A\u0430\u043A \u0436\u0435 \u0442\u0430\u043C \u043C\u043D\u043E\u0433\u043E \u043D\u0443\u0436\u043D\u043E \u0447\u0438\u0442\u0430\u0442\u044C \u0434\u0438\u0430\u043B\u043E\u0433\u043E\u0432\u{1F635}\u200D\u{1F4AB}"]]},{label:"\u041F\u0443\u0441\u0442\u044C \u0436\u0434\u0451\u0442 \u0434\u0430\u043B\u044C\u0448\u0435",say:[["pasha","\u0421\u043A\u043E\u0440\u0435\u0435 \u0431\u044B \u0413\u0422\u0410"],["max","\u0412 PS Store \u043D\u0430\u043F\u0438\u0441\u0430\u043D\u043E 19.11.26"]]}]}}],outro:[["pasha","\u041D\u0435 \u0437\u043D\u0430\u044E\u2026 \u043D\u0435 \u043F\u043E\u043D\u044F\u043B\u2026 \u0434\u043B\u044F \u043C\u0435\u043D\u044F \u043A\u0440\u043E\u043C\u0435 LOA \u0438 RDR \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u0437\u0430\u0435\u0431\u0438\u0441\u044C\u{1F612}"]]},artem:{giver:"artem",title:"\u0412\u0430\u0442\u0443\u0442\u0438\u043D\u0430 \u0434\u0430\u043B\u0435\u043A\u043E\u0432\u0430\u0442\u043E",reward:1200,par:90,intro:[["artem","\u041A\u0442\u043E \u0447\u0438\u0441\u0442\u0438\u043B \u043F\u04415? \u042F \u043F\u0440\u043E \u0447\u0438\u0441\u0442\u043A\u0443 \u0441\u0430\u043C\u043E\u0439 \u043A\u043E\u043D\u0441\u043E\u043B\u0438 \u043E\u0442 \u043F\u044B\u043B\u0438"],["arkasha",{voice:9}],["artem","\u0412\u0430\u0442\u0443\u0442\u0438\u043D\u0430 \u0434\u0430\u043B\u0435\u043A\u043E\u0432\u0430\u0442\u043E)))"],["artem","@P, \u043E\u0442\u0432\u0435\u0437\u0438, \u0430? \u0417\u0430\u0431\u0435\u0440\u0438 \u043F\u043B\u043E\u0439\u043A\u0443 \u0443 \u043C\u0435\u043D\u044F \u043D\u0430 \u0441\u0435\u0432\u0435\u0440\u043E-\u0432\u043E\u0441\u0442\u043E\u043A\u0435"]],steps:[{pts:["artem"],text:"\u0417\u0430\u0431\u0435\u0440\u0438 \u043F\u044B\u043B\u044C\u043D\u0443\u044E PS5 \u0443 \u0410\u0440\u0442\u0451\u043C\u0430",say:[["artem","\u041F\u0435\u0439 \u043F\u0438\u0432\u043E, \u0440\u0443\u043A\u0438 \u0434\u043E\u043B\u0436\u043D\u044B \u0431\u044B\u0442\u044C \u0432 \u0440\u044B\u0431\u0435, \u043D\u0435 \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0439 \u0434\u0443\u0448"]]},{pts:["vatutina"],text:"\u041D\u0430 \u0412\u0430\u0442\u0443\u0442\u0438\u043D\u0430, \u0447\u0435\u0440\u0435\u0437 \u0411\u0443\u0433\u0440\u0438\u043D\u0441\u043A\u0438\u0439 \u043C\u043E\u0441\u0442. \u0414\u0430\u043B\u0435\u043A\u043E\u0432\u0430\u0442\u043E"}],outro:[["sys","PS5 \u043F\u043E\u0447\u0438\u0449\u0435\u043D\u0430. \u0412\u043D\u0443\u0442\u0440\u0438 \u043D\u0430\u0448\u043B\u0438 \u0442\u0440\u0438 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438 \u0418\u0433\u043E\u0440\u044F"],["artem","\u0411\u043E\u0436\u0435, \u0445\u0440\u0430\u043D\u0438 \u043F\u0438\u0440\u0430\u0442\u043E\u0432, \u0430\u043C\u0438\u043D\u044C"]]}},Zc=["arkasha","nikita","pasha","dima","max","sanya","misha","kos","artem","geisler"].filter(s=>Jr[s]),kf=6,Bo=3,Hf={igor:"\u042F \u0437\u0430 \u0440\u0443\u043B\u0435\u043C\u2026 \u043D\u0435 \u0432\u043E\u044E\u044E",max:"\u042F \u043F\u0430\u0441, \u0437\u0430\u043D\u044F\u0442",arkasha:"\u0414\u0430\u0439 10 \u043C\u0438\u043D",geisler:"\u042F \u0434\u0430\u0436\u0435 \u0432\u043A\u043B\u044E\u0447\u0430\u0442\u044C \u0431\u043E\u044E\u0441\u044C",pasha:"\u041D\u0435 \u0441\u043E\u0431\u0438\u0440\u0430\u044E\u0441\u044C",nikita:"\u042F \u043D\u0435 \u0438\u0433\u0440\u0430\u043B \u043D\u0435 \u0440\u0430\u0437\u0443",kos:"\u041D\u0430\u0434\u043E \u0441\u043A\u0430\u0447\u0430\u0442\u044C",artem:"\u0413\u043E \u0432 \u0432\u0441",sanya:"\u041A\u0430\u043A \u0431\u0443\u0434\u0435\u0442 \u0441\u0432\u043E\u0431\u043E\u0434\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F )",misha:"\u0412\u0440\u0435\u043C\u0435\u043D\u0438 \u0442\u0443\u043F\u043E \u043D\u0435\u0442 ("},ko=[[1.5,"nikita","\u0427\u0442\u043E \u044D\u0442\u043E?"],[4.5,"max","\u0427\u0430\u0442 \u0432\u043B\u0430\u0434\u0435\u043B\u044C\u0446\u0435\u0432 PS5"],[7,"sys","\u0412 \u044D\u0442\u043E\u0439 \u043F\u0430\u0440\u0442\u0438\u0438 6 \u043F\u043E\u0440\u0443\u0447\u0435\u043D\u0438\u0439 \u0438\u0437 10. \u0412 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0439 \u0432\u044B\u043F\u0430\u0434\u0443\u0442 \u0434\u0440\u0443\u0433\u0438\u0435"],[10,"sanya","\u041E\u043D\u0430 \u0432\u043D\u0430\u0447\u0430\u043B\u0435 \u0434\u0438\u043A\u043E \u043C\u0435\u0434\u043B\u0435\u043D\u043D\u0430\u044F. \u0418 \u043E\u043F\u044F\u0442\u044C \u0441\u043D\u0435\u0433"],[14,"max","\u0421\u0430\u043D\u044F\u{1F64F}\u{1F3FB}\u{1F64F}\u{1F3FB}\u{1F629} \u043F\u043E\u0442\u0435\u0440\u043F\u0438 \u0447\u0443\u0442\u044C-\u0447\u0443\u0442\u044C!! \u041E\u043D\u043E \u0441\u0442\u043E\u0438\u0442 \u0442\u043E\u0433\u043E \u0432 20 \u043A\u0440\u0430\u0442"],[46,"dima","\u041A\u0441\u0442\u0430\u0442\u0438, \u044D\u0442\u0443 \u0438\u0433\u0440\u0443 \u044F \u0441\u0434\u0435\u043B\u0430\u043B \u043D\u0435\u0439\u0440\u043E\u0441\u0435\u0442\u044C\u044E. \u0417\u0430 \u043D\u043E\u0447\u044C. \u042D\u0442\u043E \u0443\u0436\u0435 \u043D\u043E\u0432\u0430\u044F \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u044C)"],[50,"nikita","\u042F, \u043A\u0441\u0442\u0430\u0442\u0438, \u0442\u043E\u0436\u0435 \u2014 3 \u0438\u0433\u0440\u0443 \u0443\u0436\u0435 \u0441\u0434\u0435\u043B\u0430\u043B\u{1F601}"],[54,"arkasha","\u0415\u0431\u0430\u0442\u044C \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438 \u043A\u043E\u043D\u0435\u0447\u043D\u043E"],[78,"igor","\u0411\u0430\u0442\u043B\u0430\u2026 \u043F\u0438\u0437\u0434\u0430\u0442\u0430\u044F!!!"],[81,"max","\u0420\u0430\u0441\u043F\u0440\u043E\u0431\u043E\u0432\u0430\u043B"],[102,"misha","\u0422\u043E\u043B\u044C\u043A\u043E \u043A\u0443\u043F\u0438\u043B PS5. \u041A\u0430\u043A\u0443\u044E \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0443 \u0431\u0440\u0430\u0442\u044C?","misha"],[104,"pasha","Extra \u0431\u0435\u0440\u0438","misha"],[106,"dima","\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0443\u044E \u0431\u0440\u0430\u0442\u044C \u043D\u0430\u0434\u043E","misha"],[108,"nikita","\u041C\u043D\u0435 \u043A\u0430\u0436\u0435\u0442\u0441\u044F \u043F\u043E\u043A\u0443\u043F\u0430\u0442\u044C \u0443\u0434\u043E\u0431\u043D\u0435\u0435 \u{1F937}\u200D\u2642\uFE0F","misha"],[110,"geisler","\u041C\u0438\u0448\u0430, \u043C\u043E\u0436\u0435\u0448\u044C \u0432\u043E\u043E\u0431\u0449\u0435 \u043D\u0435 \u0431\u0440\u0430\u0442\u044C \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0443","misha"],[112,"max","\u041C\u0438\u0448\u0430, \u0431\u0435\u0440\u0438 \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0443 \u0438 \u043D\u0435 \u0435\u0431\u0438 \u043C\u043E\u0437\u0433\u0438","misha"],[114,"pasha","\u041D\u0443 \u0438\u043B\u0438 \u0432\u043E\u043E\u0431\u0449\u0435 \u043D\u0435 \u0431\u0435\u0440\u0438","misha"],[117,"misha","\u0412\u043E\u0442 \u0442\u0430\u043A \u0430\u0433\u0430","misha"],[142,"pasha","\u041F\u0440\u043E \u0441\u043B\u0438\u0432\u044B \u0432 \u043A\u0443\u0440\u0441\u0435? \u041F\u0438\u0437\u0434\u0435\u0446 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u0430\u044F \u0445\u0443\u0439\u043D\u044F)","pasha"],[168,"igor","\u0411\u0430\u0442\u043B\u0430 \u2026 \u0437\u0430\u043B\u0443\u043F\u0430 \u043F\u043E\u043B\u043D\u0430\u044F!!!"],[171,"nikita","\u0427\u0442\u043E \u043F\u0440\u043E\u0438\u0437\u043E\u0448\u043B\u043E?)"],[198,"artem","\u0411\u043E\u0436\u0435, \u0445\u0440\u0430\u043D\u0438 \u043F\u0438\u0440\u0430\u0442\u043E\u0432, \u0430\u043C\u0438\u043D\u044C"],[218,"max",{voice:47}],[220,"max",{voice:8}],[224,"arkasha","\u042F \u043D\u0435 \u0441\u043B\u0443\u0448\u0430\u043B"],[246,"kos","\u041D\u0430 \u0421\u0435\u0440\u0433\u0435\u044F \u0441\u0442\u043E\u043B\u0438\u043A"],[266,"geisler","\u041C\u0435\u043D\u044F \u0443\u0434\u0438\u0432\u043B\u044F\u0435\u0442 \u043F\u043E\u0447\u0435\u043C\u0443 \u043F\u0441 \u0434\u043E \u0441\u0438\u0445 \u043F\u043E\u0440 \u044D\u0442\u0443 \u043B\u0430\u0432\u043E\u0447\u043A\u0443 \u043D\u0435 \u043F\u0440\u0438\u043A\u0440\u044B\u043B\u0438))"],[288,"max","\u041E\u0447\u0435\u043D\u044C \u043F\u043B\u043E\u0445\u043E\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435. \u041E\u043D\u043E \u043C\u043D\u0435 \u043E\u0447\u0435\u043D\u044C \u043D\u0435 \u043D\u0440\u0430\u0432\u0438\u0442\u0441\u044F"],[304,"pasha","BG3 \u0445\u043E\u0447\u0443 \u043D\u0430\u0447\u0430\u0442\u044C, \u043D\u043E \u0431\u043E\u044E\u0441\u044C"],[322,"igor","\u0413\u043E\u0442\u043E\u0432 \u043A \u0433\u0442\u0430"],[336,"geisler","\u041D\u043E\u0432\u0430\u044F \u0417\u0435\u043B\u0430\u043D\u0434\u0438\u044F \u043F\u043E\u043A\u0430 \u0442\u043E\u043B\u044C\u043A\u043E \u043A\u0430\u0447\u0430\u0435\u0442"],[348,"max","\u041B\u0435\u0442\u0441 \u0433\u043E\u0443 \u043D\u0430\u0445\u0443\u0439"],[358,"misha","\u0414\u0430 \u043F\u043E\u043A\u0430 \u043D\u0438\u043A\u0430\u043A, \u0432\u0440\u0435\u043C\u0435\u043D\u0438 \u0442\u0443\u043F\u043E \u043D\u0435\u0442 ("]],Ho=[[300,"5 \u043C\u0438\u043D\u0443\u0442..."],[240,"4 \u043C\u0438\u043D\u0443\u0442\u044B.."],[180,"3 \u043C\u0438\u043D\u0443\u0442\u044B..."],[120,"2 \u043C\u0438\u043D\u0443\u0442\u044B.."],[60,"\u041C\u0438\u043D\u0443\u0442\u0430..."],[21,"21 \u0441\u0435\u043A\u0443\u043D\u0434\u0430.."]],$r=[["arkasha","\u0417\u0430\u043F\u0443\u0441\u043A\u0430\u044E..."],["arkasha","\u041E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435 \u043F\u0435\u0440\u0432\u043E\u0433\u043E \u0434\u043D\u044F. 38 \u0433\u0431. \u0410\u0445\u0443\u0435\u0442\u044C"],["geisler","\u0423 \u043C\u0435\u043D\u044F 14%. \u041A\u0430\u043A \u0440\u0430\u0437 \u043A 19\u043C\u0443 \u0434\u043E\u043A\u0430\u0447\u0430\u0435\u0442\u0441\u044F \u{1F602}\u{1F602}"],["max",{voice:94}],["igor","\u0423\u0436\u0435 \u043D\u0430\u0448\u0451\u043B 2 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438 \u0438\u0437 144"],["sanya","\u041D\u0430\u0447\u0430\u043B\u043E \u0442\u044F\u0433\u043E\u043C\u043E\u0442\u043D\u043E\u0435"],["max","\u0421\u0430\u043D\u044C, \u043D\u0430\u0434\u043E \u0447\u0443\u0442\u044C-\u0447\u0443\u0442\u044C \u043F\u0435\u0440\u0435\u0442\u0435\u0440\u043F\u0435\u0442\u044C!)) \u0440\u0435\u0430\u043B\u044C\u043D\u043E"],["pasha","\u0414\u043B\u044F \u043C\u0435\u043D\u044F \u043A\u0440\u043E\u043C\u0435 LOA \u0438 RDR \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u0437\u0430\u0435\u0431\u0438\u0441\u044C\u{1F612}"],["kos","\u041D\u0430 \u0421\u0435\u0440\u0433\u0435\u044F \u0441\u0442\u043E\u043B\u0438\u043A"],["artem","\u0411\u043E\u0436\u0435, \u0445\u0440\u0430\u043D\u0438 \u043F\u0438\u0440\u0430\u0442\u043E\u0432, \u0430\u043C\u0438\u043D\u044C"],["misha","\u0414\u0430 \u043F\u043E\u043A\u0430 \u043D\u0438\u043A\u0430\u043A, \u0432\u0440\u0435\u043C\u0435\u043D\u0438 \u0442\u0443\u043F\u043E \u043D\u0435\u0442 ("],["dima","\u0414\u0430\u0432\u043D\u043E \u043D\u0435 \u0432\u043E\u0435\u0432\u0430\u043B\u0438)"],["nikita","\u0427\u0442\u043E \u044D\u0442\u043E?"]],Jc=[[0,"\xAB\u0427\u0442\u043E \u044D\u0442\u043E?\xBB","\u041D\u0438\u043A\u0438\u0442\u0430 \u0438\u0433\u0440\u0430\u0435\u0442 \u043B\u0443\u0447\u0448\u0435. \u0410 \u043E\u043D \u0432\u043E\u043E\u0431\u0449\u0435 \u043D\u0435 \u0438\u0433\u0440\u0430\u0435\u0442."],[700,"\xAB\u041F2 \u0431\u0435\u0437 \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442\u0430\xBB","\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u0434\u043E\u0441\u0442\u0443\u043F \u0432 \u0438\u043D\u0435\u0442. \u0418\u043B\u0438 \u043D\u0430\u043E\u0431\u043E\u0440\u043E\u0442."],[1700,"\xAB\u0422\u0438\u043F\u044B \u0437\u0430 390 \u20BD\xBB","\u041D\u0430 \u0430\u0432\u0438\u0442\u043E \u0442\u0430\u043A\u043E\u0439 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u0441\u0442\u043E\u0438\u0442 5000."],[2900,"\xAB\u041F3 \u0441\u043E \u0441\u0432\u043E\u0435\u0433\u043E \u043F\u0440\u043E\u0444\u0438\u043B\u044F\xBB","\u0421 \u0442\u0440\u043E\u0444\u0435\u044F\u043C\u0438 \u0438 \u0431\u0435\u0437 \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442\u0430."],[4100,"\xAB\u0411\u0430\u0442\u044F \u0432 \u0437\u0434\u0430\u043D\u0438\u0438\xBB","\u0412\u0440\u0435\u043C\u0435\u043D\u0438 \u043D\u0435\u0442, \u0430 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u0435\u0441\u0442\u044C."],[5400,"\xAB\u041B\u0435\u0433\u0435\u043D\u0434\u0430 Beam Store\xBB","\u041C\u044B \u043F\u043E\u043B\u0443\u0447\u0438\u043B\u0438 \u0432\u0430\u0448\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435. \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043E\u0436\u0438\u0434\u0430\u0439\u0442\u0435."],[6800,"\xAB\u0412\u043B\u0430\u0434\u0435\u043B\u0435\u0446 \u0447\u0430\u0442\u0430\xBB","\u0410\u0440\u043A\u0430\u0448\u0430 \u043D\u0430\u043F\u0440\u044F\u0433\u0441\u044F \u0438 \u043F\u043E\u043F\u0440\u0430\u0432\u0438\u043B \u0431\u0430\u0431\u043E\u0447\u043A\u0443."]],$c=[["\u041D\u0430 \u041F3 \u043D\u0430\u0434\u043E \u0438\u0433\u0440\u0430\u0442\u044C \u0441\u2026","\u0432\u044B\u0434\u0430\u043D\u043D\u043E\u0433\u043E \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0430","\u0441\u0432\u043E\u0435\u0433\u043E \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0430"],["\u041F2 \u2014 \u044D\u0442\u043E \u043A\u043E\u0433\u0434\u0430 \u0438\u0433\u0440\u0430\u0435\u0448\u044C \u0441\u2026","\u0441\u0432\u043E\u0435\u0433\u043E","\u0432\u044B\u0434\u0430\u043D\u043D\u043E\u0433\u043E"],["\u0411\u0435\u0437 \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442\u0430 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442\u2026","\u041F2","\u041F3"],["\u0427\u0442\u043E \u0445\u0443\u0436\u0435 \u0438 \u0434\u0435\u0448\u0435\u0432\u043B\u0435?","\u041F2","\u041F3"],["\u0410\u043A\u043A\u0430\u0443\u043D\u0442, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0442\u0435\u0431\u0435 \u0434\u0430\u043B\u0438, \u043D\u0430\u0434\u043E\u2026","\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043D\u0430 \u043A\u043E\u043D\u0441\u043E\u043B\u0438","\u0443\u0434\u0430\u043B\u0438\u0442\u044C"]],Kc=["\u0421\u043E\u0432\u0435\u0442\u0443\u044E\u0442: \u043F\u0435\u0440\u0435\u0442\u0435\u0440\u043F\u0438 \u0441\u043D\u0435\u0436\u043D\u043E\u0435 \u043D\u0430\u0447\u0430\u043B\u043E","\u0413\u0440\u0443\u0437\u0438\u043C 212 \u0413\u0411\u2026","\u041E\u0441\u0432\u043E\u0431\u043E\u0436\u0434\u0430\u0435\u043C \u043C\u0435\u0441\u0442\u043E: \u0443\u0434\u0430\u043B\u044F\u0435\u043C \u0412\u0435\u0434\u044C\u043C\u0430\u043A\u0430","\u0421\u043F\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u043C \u0443 \u0442\u0438\u043F\u043E\u0432 \u0437\u0430 390 \u20BD","\u041F2 \u0438\u043B\u0438 \u041F3? \u0412\u0441\u0451 \u0442\u0430\u043A, \u0442\u043E\u043B\u044C\u043A\u043E \u043D\u0430\u043E\u0431\u043E\u0440\u043E\u0442"],Vf={arkasha:"\u0412\u0435\u0434\u044C\u043C\u0430\u043A \u043D\u0435 \u043F\u043E\u0441\u0442\u0440\u0430\u0434\u0430\u043B. \u0418\u043B\u0438 \u043F\u043E\u0441\u0442\u0440\u0430\u0434\u0430\u043B. \u0412\u0441\u0435 \u0442\u0430\u043A, \u0442\u043E\u043B\u044C\u043A\u043E \u043D\u0430\u043E\u0431\u043E\u0440\u043E\u0442.",max:"\u0417\u0430\u043F\u0438\u0441\u0430\u043B \u043E\u0431 \u044D\u0442\u043E\u043C \u0433\u043E\u043B\u043E\u0441\u043E\u0432\u043E\u0435 \u043D\u0430 1:34. \u041D\u0438\u043A\u0442\u043E \u043D\u0435 \u043F\u043E\u0441\u043B\u0443\u0448\u0430\u043B.",dima:"\u0421\u0434\u0435\u043B\u0430\u043B \u0438\u0433\u0440\u0443 \u043D\u0435\u0439\u0440\u043E\u0441\u0435\u0442\u044C\u044E, \u043F\u043E\u043A\u0430 \u0432\u0441\u0435 \u0436\u0434\u0430\u043B\u0438 \u0438\u0433\u0440\u0443. \u041F\u043E\u0442\u043E\u043C \u043F\u043E\u043A\u0430\u0436\u0443)",igor:"\u0421\u043E\u0431\u0440\u0430\u043B \u043D\u0435 \u0432\u0441\u0451. \u0417\u0430\u0432\u0451\u043B \u043D\u043E\u0432\u044B\u0439 \u0430\u043A\u043A\u0430\u0443\u043D\u0442, \u0447\u0442\u043E\u0431\u044B \u043D\u0430\u0447\u0430\u0442\u044C \u0437\u0430\u043D\u043E\u0432\u043E.",geisler:"\u0414\u043E\u043A\u0430\u0447\u0430\u043B\u043E\u0441\u044C 14%. \u041A\u0430\u043A \u0440\u0430\u0437 \u043A 19-\u043C\u0443.",pasha:"\u0412\u044B\u0448\u043B\u0430 \u0431\u0435\u0437 \u043F\u0435\u0440\u0435\u043D\u043E\u0441\u043E\u0432. \u041F\u0430\u0448\u0430 \u0432\u0441\u0451 \u0440\u0430\u0432\u043D\u043E \u0431\u043E\u0438\u0442\u0441\u044F \u043D\u0430\u0447\u0438\u043D\u0430\u0442\u044C.",nikita:"\u0422\u0430\u043A \u0438 \u043D\u0435 \u043F\u043E\u043D\u044F\u043B, \u0447\u0442\u043E \u044D\u0442\u043E. \u0417\u0430\u0442\u043E \u0441\u0434\u0435\u043B\u0430\u043B \u0447\u0435\u0442\u0432\u0451\u0440\u0442\u0443\u044E \u0438\u0433\u0440\u0443.",kos:"\u0421\u0442\u043E\u043B\u0438\u043A \u043D\u0430 \u0421\u0435\u0440\u0433\u0435\u044F \u0432\u0441\u0451 \u0435\u0449\u0451 \u0437\u0430\u0431\u0440\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u043D.",artem:"\u041F\u043B\u043E\u0439\u043A\u0430 \u0447\u0438\u0441\u0442\u0430\u044F. \u0420\u0443\u043A\u0438 \u0432 \u0440\u044B\u0431\u0435. \u0410\u043C\u0438\u043D\u044C.",sanya:"\u041D\u0430\u0447\u0430\u043B\u043E \u0431\u044B\u043B\u043E \u0442\u044F\u0433\u043E\u043C\u043E\u0442\u043D\u043E\u0435. \u0414\u0430\u043B \u0432\u0442\u043E\u0440\u043E\u0439 \u0448\u0430\u043D\u0441.",misha:"\u0411\u0430\u0442\u044F \u0432 \u0437\u0434\u0430\u043D\u0438\u0438. \u0412\u0440\u0435\u043C\u0435\u043D\u0438 \u043F\u043E-\u043F\u0440\u0435\u0436\u043D\u0435\u043C\u0443 \u043D\u0435\u0442."};var lt=s=>document.getElementById(s),kn=window.matchMedia&&matchMedia("(pointer: coarse)").matches||"ontouchstart"in window;kn&&document.body.classList.add("touch");var wn=new URLSearchParams(location.search);lt("tip").textContent=Kc[Math.floor(Math.random()*Kc.length)];var Ji=lt("c"),ai=new zr({canvas:Ji,antialias:!1,alpha:!1,stencil:!1,powerPreference:"high-performance"});ai.shadowMap.enabled=!0;ai.shadowMap.type=Ic;ai.setClearColor(329487);var sn=new us,Ue=new cn(58,1,.5,1100),ye=Rf(sn),Ai=new Co(ai),Zi=new No(sn,kn?3600:6500),$n=new Fo(sn),Gf=new Oo(sn),Tn=new zo(sn),_r=[new gr(sn),new gr(sn),new gr(sn)],Ut=new Zr,si=new yo(16773336,0,80,.5,.8,1);sn.add(si,si.target);var Qf=(()=>{let s=new pe;for(let r of[-.62,.62])s.add(new ei(1,1,12,1,!0),ht(r,.72,9.2,1.7,14,1.7,0,-Math.PI/2),[.15,.14,.11]);let t=new oe(s.build(),ye.cones.material);t.renderOrder=4,t.frustumCulled=!1;let e=new pe;e.quad([-4.5,.2,26],[4.5,.2,26],[4.5,.2,2.4],[-4.5,.2,2.4],[.34,.32,.25]);let n=new oe(e.build(),ye.pools.material);n.renderOrder=2,n.frustumCulled=!1;let i=new Fe;return i.add(t,n),i})(),_s={};for(let s of _n){let t=If(s.id);t.visible=!1,sn.add(t),_s[s.id]=t}var hh=(()=>{let s=new us;s.add(new lr(13622527,6706500,2.4));let t=new cr(16773344,2.6);t.position.set(1.5,2,3),s.add(t);let e=new cn(30,1,.1,20);e.position.set(.45,1.98,3),e.lookAt(0,1.68,0),ai.setPixelRatio(1),ai.setSize(128,128,!1);let n={};for(let a of _n){let o=_s[a.id];s.add(o),o.visible=!0,o.position.set(0,0,0),o.rotation.set(0,.3,0),s.background=new It(a.css).multiplyScalar(.3).add(new It(1186352)),ai.render(s,e),n[a.id]=Ji.toDataURL("image/png"),sn.add(o),o.visible=!1}let i=document.createElement("canvas");i.width=i.height=64;let r=i.getContext("2d");return r.fillStyle="#2f7fe0",r.fillRect(0,0,64,64),r.font="40px system-ui",r.textAlign="center",r.textBaseline="middle",r.fillText("\u26A1",32,35),n.beam=i.toDataURL(),n})(),jf={nikita:"#aab3cc",dima:"#8fa6dd",igor:"#f0f0f0"},M={state:"boot",t:0,time:0,left:360,score:0,pid:null,mode:"car",car:null,cars:[],mods:[],npcs:[],sayQ:[],sayT:0,mission:null,queue:[],nextM:6,wanted:0,caught:0,busy:0,modal:!1,flags:{},stats:{missions:0,total:0,cards:0,feathers:0,orchids:0,bans:0,stolen:0,smashed:0},amb:0,cd:0,acc:1,lastBump:0,shake:0,hudT:0,placeT:0,lastPlace:null},j={x:0,z:0,y:0,vx:0,vz:0,layer:0,h:0,vy:0,walk:0},Yt={yaw:0,off:0,pitch:.26,manual:9,pos:new U,init:!1},oi=null,jr="",Z_=[{scale:2,msaa:4,shadow:2048,snow:1,bloom:5,mirror:!0},{scale:1.5,msaa:0,shadow:2048,snow:.85,bloom:5,mirror:!0},{scale:1.2,msaa:0,shadow:1024,snow:.65,bloom:5,mirror:!0},{scale:.95,msaa:0,shadow:0,snow:.5,bloom:4,mirror:!0},{scale:.72,msaa:0,shadow:0,snow:.35,bloom:4,mirror:!1},{scale:.55,msaa:0,shadow:0,snow:.25,bloom:0,mirror:!1}],J_=[{scale:2,msaa:0,shadow:1024,snow:.75,bloom:5,mirror:!0},{scale:1.5,msaa:0,shadow:0,snow:.55,bloom:4,mirror:!0},{scale:1.25,msaa:0,shadow:0,snow:.4,bloom:4,mirror:!1},{scale:1,msaa:0,shadow:0,snow:.3,bloom:3,mirror:!1},{scale:.75,msaa:0,shadow:0,snow:.22,bloom:0,mirror:!1}],tl=kn?J_:Z_,Ti=wn.has("q")?De(+wn.get("q")||0,0,tl.length-1):kn?1:0,td=720,Wf=!1,Qc=!1,Vo=0,$_=Ti;function vs(){let s=tl[Ti],t=Math.min(window.devicePixelRatio||1,s.scale),e=innerWidth*t,n=innerHeight*t,i=Math.min(1,Math.sqrt((kn?17e5:44e5)/(e*n)));e=Math.max(160,Math.round(e*i)),n=Math.max(160,Math.round(n*i)),td=n,ai.setPixelRatio(1),ai.setSize(e,n,!1),Ai.levels=s.bloom||1,Ai.bloom=s.bloom>0,Ai.setSize(e,n,s.msaa);let r=ye.moon.shadow;ye.moon.castShadow=s.shadow>0,s.shadow&&r.mapSize.x!==s.shadow&&(r.mapSize.set(s.shadow,s.shadow),r.map&&(r.map.dispose(),r.map=null)),ye.mirror.visible=ye.bridgesM.visible=ye.streaks.visible=s.mirror,Zi.density(s.snow);let a=innerWidth/innerHeight;Ue.aspect=a,qo=a>=1.3?58:Math.min(88,2*Math.atan(Math.tan(29*Math.PI/180)*1.3/a)*180/Math.PI)}var qo=58;addEventListener("resize",()=>vs());addEventListener("orientationchange",()=>setTimeout(vs,250));var jc=lt("feed"),nh=lt("plog"),vn=s=>String(s).replace(/[&<>]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;"})[t]),K_=s=>`<div class="voice" data-sec="${s}"><div class="p">\u25B6</div><div class="w"></div><div class="d">${Math.floor(s/60)}:${String(s%60).padStart(2,"0")}</div><div class="u"></div></div>`;function ed(s,t){let e=s===M.pid,n=document.createElement("div");if(n.className="msg"+(e?" me":"")+(s==="sys"?" sys":""),s==="sys")n.innerHTML=`<div class="b">${vn(t)}</div>`;else{let i=s==="beam"?{name:"Beam Store \u{1F916}",css:"#5db0ff"}:wi[s],r=typeof t=="object"?K_(t.voice):vn(t).replace("@P",jr);n.innerHTML=(e?"":`<img src="${hh[s]}" alt="">`)+`<div class="b">${e?"":`<div class="n" style="color:${jf[s]||i.css}">${i.name}</div>`}${r}</div>`}return n}function ta(s,t){let e=ed(s,t);for(jc.appendChild(e);jc.children.length>5;)jc.firstChild.remove();nh.appendChild(e.cloneNode(!0)),nh.scrollTop=1e9,setTimeout(()=>e.remove(),9600),Ut.play(typeof t=="object"?"voice":"msg")}var Pe=s=>{for(let t of s)M.sayQ.push(t)};function Kn(s,t){let e=lt("big");e.innerHTML=vn(s)+(t?`<small>${vn(t)}</small>`:""),e.classList.remove("show"),e.offsetWidth,e.classList.add("show")}function ri(s){M.score=Math.max(0,M.score+s),lt("score").textContent=M.score}var Xf=0;function ys(s,t=0){let e=lt("prompt");if(!s){M.time>Xf&&e.classList.add("hidden");return}e.textContent=s,e.classList.remove("hidden"),Xf=t?M.time+t:0}function uh(s,t){M.modal=!0,lt("mtitle").textContent=s.title,lt("mtext").textContent=s.text;let e=lt("mopts");e.innerHTML="",s.opts.forEach(n=>{let i=document.createElement("button");i.textContent=n.label,i.onclick=()=>{lt("modal").classList.add("hidden"),M.modal=!1,t(n)},e.appendChild(i)}),lt("modal").classList.remove("hidden")}var Ri=0;try{Ri=De(+(localStorage.getItem("gtr_sel")||2),0,_n.length-1)||0}catch{Ri=2}function Q_(){let s=lt("strip");_n.forEach((t,e)=>{let n=document.createElement("img");n.src=hh[t.id],n.alt=t.name,n.onclick=()=>{Ut.init(),Go(e)},s.appendChild(n)}),lt("prev").onclick=()=>{Ut.init(),Go((Ri+_n.length-1)%_n.length)},lt("next").onclick=()=>{Ut.init(),Go((Ri+1)%_n.length)},lt("play").onclick=()=>{Ut.init(),ld()},lt("blb").onclick=()=>{Ut.init(),bv()},lt("lbmx").onclick=()=>lt("lbm").classList.add("hidden"),lt("lbm").onclick=t=>{t.target===lt("lbm")&&lt("lbm").classList.add("hidden")},lt("hint").textContent=kn?"\u041B\u0435\u0432\u044B\u0439 \u043F\u0430\u043B\u0435\u0446 \u2014 \u0440\u0443\u043B\u044C \u0438 \u0433\u0430\u0437 \xB7 \u043F\u0440\u0430\u0432\u044B\u0439 \u2014 \u043A\u0430\u043C\u0435\u0440\u0430 \xB7 \u{1F6AA} \u0432\u044B\u0439\u0442\u0438 \u0438\u0437 \u043C\u0430\u0448\u0438\u043D\u044B \xB7 \u0437\u0432\u0443\u043A \u0432\u043A\u043B\u044E\u0447\u0438\u0442\u0441\u044F \u043F\u043E\u0441\u043B\u0435 \u043A\u0430\u0441\u0430\u043D\u0438\u044F":"WASD \u2014 \u0435\u0445\u0430\u0442\u044C \xB7 \u041F\u0440\u043E\u0431\u0435\u043B \u2014 \u0440\u0443\u0447\u043D\u0438\u043A \xB7 E \u2014 \u0432\u044B\u0439\u0442\u0438 / \u0441\u0435\u0441\u0442\u044C \xB7 R \u2014 \u0440\u0430\u0434\u0438\u043E \xB7 H \u2014 \u043A\u043B\u0430\u043A\u0441\u043E\u043D \xB7 \u043C\u044B\u0448\u044C \u0441 \u0437\u0430\u0436\u0430\u0442\u043E\u0439 \u043A\u043D\u043E\u043F\u043A\u043E\u0439 \u2014 \u043A\u0430\u043C\u0435\u0440\u0430 \xB7 T \u2014 \u0447\u0430\u0442",kn&&(lt("hint").textContent="\u041B\u0435\u0432\u044B\u0439 \u043F\u0430\u043B\u0435\u0446 \u2014 \u0440\u0443\u043B\u044C \u0438 \u0433\u0430\u0437 \xB7 \u043F\u0440\u0430\u0432\u044B\u0439 \u2014 \u043A\u0430\u043C\u0435\u0440\u0430 \xB7 \u{1F6AA} \u0432\u044B\u0439\u0442\u0438 \u0438\u0437 \u043C\u0430\u0448\u0438\u043D\u044B \xB7 \u043A\u0440\u0430\u0441\u0438\u0432\u0435\u0435 \u0432\u0441\u0435\u0433\u043E \u2014 \u043F\u043E\u0432\u0435\u0440\u043D\u0443\u0432 \u0442\u0435\u043B\u0435\u0444\u043E\u043D \u0433\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u043E"),Go(Ri)}function Go(s){Ri=s;let t=_n[s];lt("cname").textContent=t.name,lt("ctag").textContent=t.tag,lt("cdesc").textContent=t.desc,lt("play").textContent="\u0418\u0433\u0440\u0430\u0442\u044C \u0437\u0430: "+t.name,[...lt("strip").children].forEach((n,i)=>n.classList.toggle("on",i===s));for(let n of _n)_s[n.id].visible=n.id===t.id;let e=_s[t.id];e.position.set(149.6,0,-29),e.rotation.set(0,-Math.PI/2,0),e.userData.pop=1,Ut.play("tick"),Ut.setTheme(t.id)}function j_(s){let t=_s[_n[Ri].id],e=M.time;t.userData.pop=Math.max(0,(t.userData.pop||0)-s*3),t.rotation.y=-Math.PI/2+Math.sin(e*.6)*.35+t.userData.pop*2.5,Io(t,e,0,e%5<1.4);let n=Ue.aspect<1,i=!n&&innerHeight<520,r=i?1.9:0;Ue.position.set(143.2+Math.sin(e*.21)*.5-(n?2.5:0),1.5+Math.sin(e*.3)*.12,-26.4+Math.cos(e*.17)*.5),Ue.lookAt(150.2+.477*r,n?.1:i?1.25:.2,-30.2+.879*r),Ue.fov=n?48:i?30:44,Ue.updateProjectionMatrix();for(let a of M.cars)a.ai&&Uo(a,s,1e5,1e5);ye.setShadowCenter(150,-30),Tn.begin(),dh(),sd(t),Tn.end()}var Ms=[],ea=new Br(new Un(.8,1.1,.07),new hn,36);ea.frustumCulled=!1;sn.add(ea);(function(){let t=Gr(144),e=(i,r,a,o=0)=>{let l=0;for(;ye.col.near(i,r,1.8)&&l++<40;)i+=2.5;Ms.push({x:i,z:r,y:o,type:a,got:!1})};for(let i=0;i<12;i++){let r=Ze[(i*3+1)%8],a=-165+t()*330;e(r+(t()<.5?-3.3:3.3),We.some(o=>Math.abs(o-a)<9)?a+16:a,0)}for(let i=0;i<6;i++){let r=We[(i*2+1)%7],a=i%2?1:-1;e(a*(90+t()*170),r+(t()<.5?-3.3:3.3),0)}e(0,-60,0),e(-20,120,0);for(let[i,r]of[[175,30],[-245,30],[245,-90],[-105,-150]])e(i,r,0);for(let i of[-165,-112,-15,42,78,168])e(-28+t()*56,i,1,-3);for(let[i,r]of[[103,-12],[-105,106],[57,-128],[-57,62],[-262,-137],[120,-134]])e(i,r,2);let n=[new It(3,2.1,.5),new It(1.6,2.4,3),new It(3,.7,2.2)];Ms.forEach((i,r)=>ea.setColorAt(r,n[i.type]))})();var Yo=new fe,Zo=new Dn,Jo=new U,$o=new U,tv=new U(0,1,0),ev=new Xi,vr=[[1.5,1,.25],[.7,1.1,1.5],[1.5,.3,1.1]];function nd(s){let t=M.time,e=M.mode==="car"?3.4:2.1;for(let n=0;n<Ms.length;n++){let i=Ms[n],r=i.y+1.5+Math.sin(t*2+n)*.25;Zo.setFromAxisAngle(tv,t*2.2+n),Jo.set(i.x,r,i.z),$o.setScalar(i.got?1e-4:1),Yo.compose(Jo,Zo,$o),ea.setMatrixAt(n,Yo),!i.got&&(Tn.add(i.x,r,i.z,3,vr[i.type][0],vr[i.type][1],vr[i.type][2]),s&&Math.abs(j.x-i.x)<e&&Math.abs(j.z-i.z)<e&&Math.abs(j.y-i.y)<2.6&&nv(i))}ea.instanceMatrix.needsUpdate=!0}function nv(s){s.got=!0,Ut.play("pick"),$n.burst(s.x,s.y+1.5,s.z,14,6,.7,vr[s.type][0],vr[s.type][1],vr[s.type][2]);let t=M.stats;if(s.type===0){if(t.cards+=6,ri(30),t.cards===6&&M.pid!=="igor"&&Pe([["igor","\u041C\u043D\u0435 144 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438 \u0432 \u0440\u0434\u0440 \u043D\u0430\u0434\u043E \u043D\u0430\u0439\u0442\u0438"],["geisler","\u0414\u043E \u0432\u044B\u0445\u043E\u0434\u0430 \u0433\u0442\u0430 6 ?"],["igor","\u0410\u0433\u0430"]]),t.cards===72&&Pe([["igor","\u041D\u0435\u0434\u0435\u043B\u044E \u0435\u0431\u0443\u0447\u0438\u0445 \u043F\u0442\u0438\u0446 \u0441\u043E\u0431\u0438\u0440\u0430\u043B\u{1F613} \u041D\u0430\u0441\u0442\u0430\u043B\u043E \u0432\u0440\u0435\u043C\u044F \u0430\u0445\u0443\u0435\u043D\u043D\u044B\u0445 \u043A\u0430\u0440\u0442\u043E\u0447\u0435\u043A)"]]),t.cards%144===0){nn("cards"),M.acc++,ri(500),Kn("144 \u0438\u0437 144","+500 \xB7 \u0438 \u0432\u0441\u0451 \u0437\u0430\u043D\u043E\u0432\u043E"),Pe([["igor","\u0423 \u043C\u0435\u043D\u044F \u043D\u043E\u0432\u044B\u0439 \u0430\u043A\u043A\u0430\u0443\u043D\u0442 \u0438 \u043C\u043D\u0435 \u043D\u0430\u0434\u043E \u0437\u0430\u043A\u0440\u044B\u0442\u044C \u0440\u0434\u0440 \u043D\u0430 100% \u043D\u0430 \u043D\u0435\u043C))"],["artem","\u041F\u043E\u043A\u0430 \u0435\u0435 \u0418\u0433\u043E\u0440\u044C \u043F\u0440\u043E\u0439\u0434\u0451\u0442 \u043D\u0430 100% \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0440\u0430\u0437)"]]);for(let e of Ms)e.type===0&&(e.got=!1)}}else s.type===1?(t.feathers++,ri(120),t.feathers===6&&Pe([["igor","\u0421\u0430\u043C\u043E\u0435 \u043F\u0438\u0437\u0434\u0435\u0446 \u0447\u0442\u043E \u044F \u0441\u043E\u0431\u0440\u0430\u043B \u0432\u0441\u0435 \u043F\u0435\u0440\u044C\u044F \u0446\u0430\u043F\u0435\u043B\u044C"],["geisler","\u0410 \u0437\u0430\u0447\u0435\u043C \u0432\u0442\u043E\u0440\u043E\u0439 \u0440\u0430\u0437?)\u{1F605}"]])):(t.orchids++,ri(120),t.orchids===6&&Pe([["geisler","\u0422\u044B \u0438\u0445 \u0443\u0436\u0435 \u043D\u0430\u0445\u043E\u0434\u0438\u043B, \u043D\u043E \u043F\u0440\u043E\u0441\u0442\u043E \u043D\u0435 \u043F\u043E\u043C\u043D\u0438\u0448\u044C \u043A\u0443\u0434\u0430 \u0441\u043B\u043E\u0436\u0438\u043B)"]]));lt("coll").textContent=`\u{1F0CF} ${t.cards%144||(t.cards?144:0)}/144${M.acc>1?" (\u0430\u043A\u043A \u2116"+M.acc+")":""} \xB7 \u{1FAB6} ${t.feathers}/6 \xB7 \u{1F338} ${t.orchids}/6`}var Xo=[],fh=[];(function(){let t=Gr(390),e=[.86,.9,.97],n=new Bn(1,8,6),i=new ei(1,1,8),r=new en(1,1,1,8),a=new pe;a.add(n,ht(0,.45,0,.5,.45,.5),e),a.add(n,ht(0,1.05,0,.36,.33,.36),e),a.add(n,ht(0,1.52,0,.25,.24,.25),e),a.add(i,ht(0,1.52,.3,.05,.26,.05,0,Math.PI/2),[.9,.35,.05]),a.add(r,ht(0,1.8,0,.2,.2,.2),[.5,.06,.06]);let o=new pe;o.add(i,ht(0,.4,0,.26,.75,.26),[.95,.3,.04]),o.add(r,ht(0,.45,0,.15,.1,.15),e),o.add(r,ht(0,.04,0,.34,.07,.34),[.1,.1,.12]);let l=new pe;l.add(r,ht(0,.45,0,.3,.9,.3),[.12,.2,.16]),l.add(n,ht(0,.93,0,.32,.14,.32),e);let c=(h,u,f)=>{ye.col.near(h,u,.7)||Xo.push({x:h,z:u,y:0,x0:h,z0:u,vx:0,vy:0,vz:0,a:t()*6,sp:0,t:f,st:0,i:0})};for(let h of ye.blocks)if(h.type!=="zone")for(let u=0;u<2;u++)c(h.x0+2+t()*(h.x1-h.x0-4),t()<.5?h.z0+1.6:h.z1-1.6,0);for(let[h,u,f]of[[70,-30,1],[210,30,1],[-140,-90,1],[-70,90,1],[175,60,0],[-175,-60,0],[105,0,0],[-245,120,0],[280,90,1],[-210,30,1]])for(let d=0;d<5;d++)c(f?h+1.2+d*1.3:h-3+d*1.5,f?u-3+d*1.5:u+1.2+d*1.3,1);ye.lamps.forEach((h,u)=>{u%4===0&&!h.bridge&&h.h>6&&c(h.x+(h.x>h.hx?.9:-.9),h.z+(h.z>h.hz?.9:h.z<h.hz?-.9:.6),2)}),[a,o,l].forEach((h,u)=>{let f=Xo.filter(x=>x.t===u).length,d=new Br(h.build(),ye.mPL,Math.max(1,f));d.frustumCulled=!1,d.castShadow=!0,sn.add(d),fh.push(d);let g=0;for(let x of Xo)x.t===u&&(x.i=g++,id(x));d.instanceMatrix.needsUpdate=!0})})();function id(s){Zo.setFromEuler(ev.set(s.sp?s.a*1.3:0,s.a,s.sp?s.a*.8:0)),Jo.set(s.x,s.y+(Lo(s.x0,s.z0)?0:.15),s.z),$o.setScalar(s.st===2?1e-4:1),Yo.compose(Jo,Zo,$o),fh[s.t].setMatrixAt(s.i,Yo)}function iv(s){let t=M.mode==="car"?M.car:null,e=t?t.speed:0,n=0;for(let i of Xo){if(i.st===0){if(!t||e<3||Math.abs(i.x-j.x)>2.1||Math.abs(i.z-j.z)>2.1||Math.abs(j.y)>1)continue;i.st=1,i.vx=t.e.vx*.7+(Math.random()-.5)*4,i.vz=t.e.vz*.7+(Math.random()-.5)*4,i.vy=4+e*.28,i.sp=6+Math.random()*8,M.stats.smashed++,ri(15),Ut.play("crash"),$n.burst(i.x,.8,i.z,16,6,.6,.7,.75,.9),M.stats.smashed===1&&Pe([["max","\u0422\u0430\u043C \u0441\u0430\u043C\u044B\u0439 \u043A\u0430\u0439\u0444 \u0432 \u0440\u0430\u0437\u0440\u0443\u0448\u0435\u043D\u0438\u044F\u0445, \u043E\u043D\u0438 \u043E\u0447 \u0440\u0435\u0430\u043B\u0438\u0441\u0442\u0438\u0447\u043D\u044B"],["sys","BeamNG-\u0431\u043E\u043D\u0443\u0441: +15 \u0437\u0430 \u043A\u0430\u0436\u0434\u044B\u0439 \u0441\u043D\u0435\u0441\u0451\u043D\u043D\u044B\u0439 \u043F\u0440\u0435\u0434\u043C\u0435\u0442"]]),M.stats.smashed===10&&nn("beam"),M.stats.smashed%10===0&&Kn("BeamNG \xD7"+M.stats.smashed,"+"+M.stats.smashed*15+" \u0437\u0430 \u0440\u0430\u0437\u0440\u0443\u0448\u0435\u043D\u0438\u044F")}i.st===1&&(i.vy-=22*s,i.x+=i.vx*s,i.y+=i.vy*s,i.z+=i.vz*s,i.a+=i.sp*s,i.y<0&&i.vy<0&&(i.st=2,$n.burst(i.x,.3,i.z,10,3,.5,.6,.65,.8)),id(i),n|=1<<i.t)}for(let i=0;i<3;i++)n&1<<i&&(fh[i].instanceMatrix.needsUpdate=!0)}var qf=[9054762,2771594,6975352,2042422,13620186,3107402,8018474,3815994,9080618,5909098];for(let s=0;s<11;s++){let t=s%5===4,e=s===2||s===7,n=new mr(sn,0,0,0,e?14247450:t?14725152:qf[s%qf.length],e?"plow":t?"van":"sedan"),i=(s*17+3)%xn.length,r=xn[i].nb;Of(n,i,r[s%r.length]),M.cars.push(n)}function dh(){let s=Ue.position.x,t=Ue.position.z;for(let e of M.cars){let n=e.e;if(Math.abs(n.x-s)>190||Math.abs(n.z-t)>190)continue;let i=Math.sin(e.h),r=Math.cos(e.h),a=-r,o=i,l=e.ai||e===M.car?1:.25;for(let c of[-.62,.62])Tn.add(n.x+i*2.25+a*c,n.y+.74,n.z+r*2.25+o*c,2.1,1.7*l,1.6*l,1.25*l),Tn.add(n.x-i*2.25+a*c,n.y+.76,n.z-r*2.25+o*c,1.3,1.5*l,.1*l,.06*l);if(e.kind==="plow"){let c=(M.time*3|0)%2;Tn.add(n.x+i*1.35,n.y+2.5,n.z+r*1.35,4,c?2.6:.4,c?1.3:.2,.1)}if(Math.random()<.12&&Math.abs(n.x-s)<70&&Math.abs(n.z-t)<70&&$n.emit(n.x-i*2.25-a*.5,n.y+.4,n.z-r*2.25-o*.5,-i*.8+(Math.random()-.5)*.4,.9+Math.random()*.6,-r*.8+(Math.random()-.5)*.4,1.3,.09,.09,.11),e.kind==="mod"){let c=(M.time*7|0)%2;Tn.add(n.x,n.y+2,n.z,7,c?.3:2.6,.2,c?3:.3)}}}function sd(s){let t=s.userData.glow;t&&Tn.add(s.position.x,s.position.y+t.y,s.position.z,t.s,t.c[0],t.c[1],t.c[2])}var Nn={},yr=null,Ko=0,Qo=0,ih=0,sh=0,bs=null,rh=0,ah=0,ph=!1;addEventListener("keydown",s=>{if(Nn[s.code]=!0,["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Tab"].includes(s.code)&&s.preventDefault(),!s.repeat){if(Ut.init(),!lt("lbm").classList.contains("hidden")){(s.code==="Escape"||s.code==="Enter")&&lt("lbm").classList.add("hidden");return}if(M.state==="menu"){s.code==="ArrowLeft"||s.code==="KeyA"?lt("prev").onclick():s.code==="ArrowRight"||s.code==="KeyD"?lt("next").onclick():(s.code==="Enter"||s.code==="Space")&&ld();return}M.state==="play"&&(s.code==="KeyE"||s.code==="KeyF"||s.code==="Enter"?_h():s.code==="KeyT"||s.code==="Tab"?xh():s.code==="KeyM"?od():s.code==="KeyR"?mh():s.code==="KeyH"&&gh())}});addEventListener("keyup",s=>{Nn[s.code]=!1});addEventListener("blur",()=>{for(let s in Nn)Nn[s]=!1});addEventListener("contextmenu",s=>s.preventDefault());addEventListener("gesturestart",s=>s.preventDefault());document.addEventListener("touchmove",s=>{s.target.closest&&s.target.closest("#plog,#final,#lbm")||s.preventDefault()},{passive:!1});document.addEventListener("visibilitychange",()=>{let s=Ut.ctx;s&&(document.hidden?s.suspend():s.resume(),ch=performance.now())});Ji.addEventListener("webglcontextlost",s=>{s.preventDefault(),setTimeout(()=>location.reload(),400)});var th=lt("stick"),rd=lt("knob");Ji.addEventListener("pointerdown",s=>{if(Ut.init(),M.state==="play"){s.pointerType!=="mouse"&&s.clientX<innerWidth*.5&&yr===null?(yr=s.pointerId,ih=s.clientX,sh=s.clientY,th.style.left=ih-64+"px",th.style.top=sh-64+"px",th.style.bottom="auto"):bs===null&&(bs=s.pointerId,rh=s.clientX,ah=s.clientY);try{Ji.setPointerCapture(s.pointerId)}catch{}}});Ji.addEventListener("pointermove",s=>{if(s.pointerId===yr){let t=(s.clientX-ih)/52,e=(s.clientY-sh)/52,n=Math.hypot(t,e);n>1&&(t/=n,e/=n),Ko=t,Qo=e,rd.style.transform=`translate(${t*40}px,${e*40}px)`}else if(s.pointerId===bs){let t=(s.clientX-rh)*.006;M.mode==="car"?Yt.off=De(Yt.off+t,-2.8,2.8):Yt.yaw+=t,Yt.pitch=De(Yt.pitch+(s.clientY-ah)*.004,.04,.95),rh=s.clientX,ah=s.clientY,Yt.manual=0}});var ad=s=>{s.pointerId===yr&&(yr=null,Ko=Qo=0,rd.style.transform=""),s.pointerId===bs&&(bs=null)};Ji.addEventListener("pointerup",ad);Ji.addEventListener("pointercancel",ad);var br=(s,t)=>s.addEventListener("pointerdown",e=>{e.preventDefault(),e.stopPropagation(),Ut.init(),t()});br(lt("bAct"),()=>_h());lt("bHand").addEventListener("pointerdown",s=>{s.preventDefault(),ph=!0,lt("bHand").classList.add("on")});for(let s of["pointerup","pointercancel","pointerleave"])lt("bHand").addEventListener(s,()=>{ph=!1,lt("bHand").classList.remove("on")});br(lt("bRadio"),()=>mh());br(lt("bHorn"),()=>gh());br(lt("bPhone"),()=>xh());br(lt("bMute"),()=>od());br(lt("pclose"),()=>xh());var sv={arkasha:"\u0441\u0432\u0438\u043D\u0433 \u0432 \u0431\u0430\u0431\u043E\u0447\u043A\u0435. \u0414\u043E \u0440\u0435\u043B\u0438\u0437\u0430 \u043E\u0441\u0442\u0430\u043B\u043E\u0441\u044C\u2026",max:"\u0444\u043E\u043D\u043A \u0438 \u0433\u043E\u043B\u043E\u0441\u043E\u0432\u044B\u0435. \u041D\u0438\u043A\u0442\u043E \u043D\u0435 \u0441\u043B\u0443\u0448\u0430\u0435\u0442",dima:"\u0441\u0438\u043D\u0442\u0432\u0435\u0439\u0432 \u0432 11.1.4. \u0421\u0433\u0435\u043D\u0435\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u043E",igor:"\u0432\u0435\u0441\u0442\u0435\u0440\u043D. \u0427\u0435\u0442\u0432\u0451\u0440\u0442\u043E\u0435 \u043F\u0440\u043E\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u0435",geisler:"\u043A\u043B\u0430\u0432\u0435\u0441\u0438\u043D \u0447\u0435\u0440\u0435\u0437 \u041C\u0435\u0433\u0430\u0444\u043E\u043D. \u0411\u0443\u0444\u0435\u0440\u0438\u0437\u0430\u0446\u0438\u044F\u2026",pasha:"\u0432\u0435\u043D\u0441\u043A\u0438\u0439 \u0432\u0430\u043B\u044C\u0441. \u041A\u0440\u043E\u043C\u0435 \u043D\u0435\u0433\u043E \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u0437\u0430\u0435\u0431\u0438\u0441\u044C",nikita:"\u0447\u0438\u043F\u0442\u044E\u043D \u0438\u0437 \u0435\u0433\u043E \u0442\u0440\u0435\u0442\u044C\u0435\u0439 \u0438\u0433\u0440\u044B",kos:"\u044D\u043C\u0431\u0438\u0435\u043D\u0442 \u0417\u043E\u043D\u044B. \u0422\u0440\u0435\u0441\u043A \u2014 \u044D\u0442\u043E \u043D\u043E\u0440\u043C\u0430\u043B\u044C\u043D\u043E",artem:"\u043F\u0438\u0440\u0430\u0442\u0441\u043A\u0430\u044F \u0434\u0436\u0438\u0433\u0430. \u0411\u043E\u0436\u0435, \u0445\u0440\u0430\u043D\u0438 \u043F\u0438\u0440\u0430\u0442\u043E\u0432",sanya:"\u043B\u043E\u0443-\u0444\u0430\u0439. \u041D\u0430\u0447\u0430\u043B\u043E \u0442\u044F\u0433\u043E\u043C\u043E\u0442\u043D\u043E\u0435, \u043F\u043E\u0442\u0435\u0440\u043F\u0438",misha:"\u0443\u043A\u0443\u043B\u0435\u043B\u0435 \u0443 \u043A\u043E\u0441\u0442\u0440\u0430. \u0412\u0440\u0435\u043C\u0435\u043D\u0438 \u0441\u043B\u0443\u0448\u0430\u0442\u044C \u043D\u0435\u0442"},rv={arkasha:"\u0412\u0441\u0435 \u0442\u0430\u043A, \u0442\u043E\u043B\u044C\u043A\u043E \u043D\u0430\u043E\u0431\u043E\u0440\u043E\u0442",max:"\u041E\u0447\u0435\u043D\u044C \u043F\u043B\u043E\u0445\u043E\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435",dima:"\u0413\u043E\u0443 \u0432\u0441\u0435 \u043D\u0430 \u0432\u043E\u0439\u043D\u0443",igor:"\u041C\u043D\u0435 144 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438 \u043D\u0430\u0434\u043E \u043D\u0430\u0439\u0442\u0438",geisler:"\u0411\u0430\u0442\u044F \u0432 \u0437\u0434\u0430\u043D\u0438\u0438!)",pasha:"\u0421\u043A\u043E\u0440\u0435\u0435 \u0431\u044B \u0413\u0422\u0410",nikita:"\u0427\u0442\u043E \u044D\u0442\u043E?",kos:"\u041D\u0430 \u0421\u0435\u0440\u0433\u0435\u044F \u0441\u0442\u043E\u043B\u0438\u043A",artem:"\u0411\u043E\u0436\u0435, \u0445\u0440\u0430\u043D\u0438 \u043F\u0438\u0440\u0430\u0442\u043E\u0432, \u0430\u043C\u0438\u043D\u044C",sanya:"\u041E\u043D\u0430 \u0432\u043D\u0430\u0447\u0430\u043B\u0435 \u0434\u0438\u043A\u043E \u043C\u0435\u0434\u043B\u0435\u043D\u043D\u0430\u044F",misha:"\u0412\u0440\u0435\u043C\u0435\u043D\u0438 \u0442\u0443\u043F\u043E \u043D\u0435\u0442 ("};function oh(s,t=3e3){let e=lt("speak");e.innerHTML=s,e.style.opacity=1,clearTimeout(oh.t),oh.t=setTimeout(()=>{e.style.opacity=0},t),lh=M.time+t/1e3}function mh(){if(M.state!=="play")return;let s=[null].concat(_n.map(t=>t.id));M.radio=s[(s.indexOf(M.radio)+1)%s.length],Ut.play("radio"),Ut.setTheme(M.radio||(M.mission?M.mission.def.giver:M.pid)),ys(M.radio?"\u{1F4FB} \u0420\u0430\u0434\u0438\u043E "+wi[M.radio].name+": "+sv[M.radio]:"\u{1F4FB} \u0410\u0432\u0442\u043E: \u0442\u0432\u043E\u044F \u0442\u0435\u043C\u0430, \u043D\u0430 \u043F\u043E\u0440\u0443\u0447\u0435\u043D\u0438\u0438 \u2014 \u0442\u0435\u043C\u0430 \u0437\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u0430",3.4),M.radio&&(M.heard[M.radio]=1,Object.keys(M.heard).length>=_n.length&&nn("radio"))}var Yf=0;function gh(){if(!(M.state!=="play"||M.time<Yf)){Yf=M.time+.7,Ut.horn(M.pid),oh("<b>"+vn(jr)+":</b> "+vn(rv[M.pid]||"\u0411\u0438-\u0431\u0438\u043F"),1800);for(let s of M.cars)s.ai&&s.ai.type==="traffic"&&Math.hypot(s.e.x-j.x,s.e.z-j.z)<16&&(s.stun=1.3);for(let s of M.npcs)Math.hypot(s.x-j.x,s.z-j.z)<14&&(s.talk=1.6);M.horns=(M.horns||0)+1,M.horns>=10&&nn("horn")}}document.addEventListener("pointerdown",s=>{let t=s.target.closest&&s.target.closest(".voice");t&&(Ut.init(),Ut.mumble(+t.dataset.sec||10),t.classList.add("heard"),M.state==="play"&&(M.flags.voice||(M.flags.voice=1,Pe([["sys","\u0422\u044B \u043F\u043E\u0441\u043B\u0443\u0448\u0430\u043B \u0433\u043E\u043B\u043E\u0441\u043E\u0432\u043E\u0435 \u041C\u0430\u043A\u0441\u0430. \u041F\u0435\u0440\u0432\u044B\u0439 \u0437\u0430 \u0432\u0441\u044E \u0438\u0441\u0442\u043E\u0440\u0438\u044E \u0447\u0430\u0442\u0430"]])),nn("voice")))});var jo={what:["\u0427\u0442\u043E \u044D\u0442\u043E?","\u043D\u0430\u0447\u0430\u043B \u043F\u0430\u0440\u0442\u0438\u044E"],ice:["\u0420\u0443\u043A\u0438 \u0432 \u0440\u044B\u0431\u0435","\u0432\u044B\u0435\u0445\u0430\u043B \u043D\u0430 \u043B\u0451\u0434 \u041E\u0431\u0438"],speed:["11.1.4","\u0440\u0430\u0437\u043E\u0433\u043D\u0430\u043B\u0441\u044F \u0434\u043E 111,4 \u043A\u043C/\u0447"],rev:["\u0412\u0441\u0451 \u0442\u0430\u043A, \u0442\u043E\u043B\u044C\u043A\u043E \u043D\u0430\u043E\u0431\u043E\u0440\u043E\u0442","\u0447\u0435\u0442\u044B\u0440\u0435 \u0441\u0435\u043A\u0443\u043D\u0434\u044B \u0435\u0445\u0430\u043B \u0437\u0430\u0434\u043E\u043C"],steal:["\u0411\u043E\u0436\u0435, \u0445\u0440\u0430\u043D\u0438 \u043F\u0438\u0440\u0430\u0442\u043E\u0432","\u0443\u0433\u043D\u0430\u043B \u043C\u0430\u0448\u0438\u043D\u0443"],voice:["\u041D\u0438\u043A\u0442\u043E \u043D\u0435 \u0441\u043B\u0443\u0448\u0430\u0435\u0442","\u043F\u043E\u0441\u043B\u0443\u0448\u0430\u043B \u0433\u043E\u043B\u043E\u0441\u043E\u0432\u043E\u0435 \u041C\u0430\u043A\u0441\u0430"],crash:["\u0421\u0430\u043C\u044B\u0439 \u043A\u0430\u0439\u0444 \u0432 \u0440\u0430\u0437\u0440\u0443\u0448\u0435\u043D\u0438\u044F\u0445","\u0432\u044A\u0435\u0445\u0430\u043B \u043A\u0430\u043A \u0441\u043B\u0435\u0434\u0443\u0435\u0442"],zap:["\u0412 \u0430\u043D\u043E\u043C\u0430\u043B\u0438\u0438 \u043D\u0435 \u043B\u0435\u0437\u044C","\u0437\u0430\u043B\u0435\u0437 \u0432 \u0430\u043D\u043E\u043C\u0430\u043B\u0438\u044E"],esc:["\u041B\u0430\u0432\u043E\u0447\u043A\u0443 \u043D\u0435 \u043F\u0440\u0438\u043A\u0440\u044B\u043B\u0438","\u0443\u0448\u0451\u043B \u043E\u0442 \u043C\u043E\u0434\u0435\u0440\u0430\u0442\u043E\u0440\u043E\u0432"],ban:["\u041F2 \u0438\u043B\u0438 \u041F3?","\u043F\u043E\u043B\u0443\u0447\u0438\u043B \u0431\u0430\u043D"],cards:["144 \u0438\u0437 144","\u0441\u043E\u0431\u0440\u0430\u043B \u0432\u0441\u0435 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438 \u0418\u0433\u043E\u0440\u044F"],radio:["\u041C\u0435\u043B\u043E\u043C\u0430\u043D","\u043F\u043E\u0441\u043B\u0443\u0448\u0430\u043B \u0432\u0441\u0435 \u043E\u0434\u0438\u043D\u043D\u0430\u0434\u0446\u0430\u0442\u044C \u0441\u0442\u0430\u043D\u0446\u0438\u0439"],horn:["\u041E\u0447\u0435\u043D\u044C \u043F\u043B\u043E\u0445\u043E\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435","\u043F\u043E\u0441\u0438\u0433\u043D\u0430\u043B\u0438\u043B \u0434\u0435\u0441\u044F\u0442\u044C \u0440\u0430\u0437"],slow:["\u041F\u043E\u0442\u0435\u0440\u043F\u0438 \u0447\u0443\u0442\u044C-\u0447\u0443\u0442\u044C","\u043F\u0435\u0440\u0435\u0442\u0435\u0440\u043F\u0435\u043B \u0442\u044F\u0433\u043E\u043C\u043E\u0442\u043D\u043E\u0435 \u043D\u0430\u0447\u0430\u043B\u043E"],bati:["\u0411\u0430\u0442\u044F \u0432 \u0437\u0434\u0430\u043D\u0438\u0438","\u0443\u0441\u043F\u0435\u043B \u043A \u041C\u0438\u0448\u0435 \u0432\u043E\u0432\u0440\u0435\u043C\u044F"],dance:["\u0417\u0430\u043A\u0430\u043F\u044B\u0432\u0430\u0435\u043C\u0441\u044F","\u0441\u0442\u0430\u043D\u0446\u0435\u0432\u0430\u043B \u043F\u0435\u0448\u043A\u043E\u043C"],beam:["BeamNG","\u0441\u043D\u0451\u0441 \u0434\u0435\u0441\u044F\u0442\u044C \u043F\u0440\u0435\u0434\u043C\u0435\u0442\u043E\u0432"]};function nn(s){if(M.state!=="play"||!M.tro||M.tro[s]||!jo[s])return;M.tro[s]=1;let t=jo[s],e=lt("tro");e.innerHTML='<span class="ic">\u{1F980}</span><span><b>\u0422\u0440\u043E\u0444\u0435\u0439: '+vn(t[0])+"</b><i>"+vn(t[1])+"</i></span>",e.classList.remove("show"),e.offsetWidth,e.classList.add("show"),Ut.sting("trophy");try{let n=JSON.parse(localStorage.getItem("gtr_tro")||"{}")||{};n[s]=1,localStorage.setItem("gtr_tro",JSON.stringify(n))}catch{}}function xh(){lt("phone").classList.toggle("hidden"),nh.scrollTop=1e9}function od(){Ut.setMuted(!Ut.muted),lt("bMute").textContent=Ut.muted?"\u{1F507}":"\u{1F50A}"}function av(){let s=0,t=0;return(Nn.KeyW||Nn.ArrowUp)&&(s+=1),(Nn.KeyS||Nn.ArrowDown)&&(s-=1),(Nn.KeyD||Nn.ArrowRight)&&(t+=1),(Nn.KeyA||Nn.ArrowLeft)&&(t-=1),yr!==null&&(t=Math.abs(Ko)>.12?Ko:0,s=Math.abs(Qo)>.15?-Qo:0),M.modal||M.busy>0?{thr:0,st:0,hand:!0}:{thr:s,st:t,hand:!!Nn.Space||ph}}function ld(){if(M.state!=="menu")return;let s=_n[Ri];M.pid=s.id,jr=s.name;try{localStorage.setItem("gtr_sel",Ri)}catch{}lt("fade").style.opacity=1,setTimeout(()=>{lt("menu").classList.add("hidden"),lt("hud").classList.remove("hidden"),oi=_s[s.id],oi.visible=!1,oi.rotation.set(0,0,0);for(let n of _n)if(n.id!==s.id){let i=_s[n.id],[r,a]=gn[n.id];i.visible=!0,i.position.set(r,.15,a),i.rotation.set(0,Math.atan2(140-r,0-a),0),i.add(Df(n.name,jf[n.id]||n.css)),ye.col.circle(r,a,.55),M.npcs.push({id:n.id,x:r,z:a,rak:i,cool:3+Math.random()*6,talk:0})}let t=new mr(sn,gn.start[0],gn.start[1],Math.PI,new It(s.css).multiplyScalar(.8).getHex(),"sedan");M.cars.push(t),M.car=t,M.mode="car",t.g.add(Qf),j.x=t.e.x,j.z=t.e.z,Yt.yaw=Math.PI,Yt.init=!1;let e=Zc.filter(n=>n!==M.pid);if(wn.has("m"))e=wn.get("m").split(",").filter(n=>Jr[n]&&n!==M.pid);else{let n={};try{n=JSON.parse(localStorage.getItem("gtr_seen")||"{}")||{}}catch{n={}}let i=e.map(r=>[r,(n[r]||0)+Math.random()]).sort((r,a)=>r[1]-a[1]).slice(0,kf).map(r=>r[0]);e=e.filter(r=>i.includes(r));for(let r of e)n[r]=(n[r]||0)+1;try{localStorage.setItem("gtr_seen",JSON.stringify(n))}catch{}}M.queue=e,M.run=e.slice(),M.done={},M.stats.total=e.length,M.radio=null,M.heard={},M.horns=0,M.tro={},Ut.setTheme(M.pid),M.state="play",M.t=0,Qr=4,Kr=0,vs(),lt("fade").style.opacity=0,Kn("23:54","\u0414\u043E \u0440\u0435\u043B\u0438\u0437\u0430 \u0448\u0435\u0441\u0442\u044C \u043C\u0438\u043D\u0443\u0442"),ys(kn?"\u041B\u0435\u0432\u044B\u0439 \u043F\u0430\u043B\u0435\u0446 \u2014 \u0440\u0443\u043B\u044C \u0438 \u0433\u0430\u0437 \xB7 \u043F\u0440\u0430\u0432\u044B\u0439 \u2014 \u043A\u0430\u043C\u0435\u0440\u0430":"WASD \u2014 \u0435\u0445\u0430\u0442\u044C \xB7 \u041F\u0440\u043E\u0431\u0435\u043B \u2014 \u0440\u0443\u0447\u043D\u0438\u043A \xB7 E \u2014 \u0432\u044B\u0439\u0442\u0438 \u0438\u0437 \u043C\u0430\u0448\u0438\u043D\u044B",7),wn.has("t")&&(M.left=+wn.get("t"))},520)}var Ce=[0,0,0,0,0,0,!1];function ov(s){let t=av();if(M.busy>0&&(M.busy-=s),M.mode==="car"){let e=M.car,n=e.drive(s,t.thr,t.st,t.hand,ye.col),i=e.e;n>5&&M.t-M.lastBump>.3&&(Ut.play("bump"),M.lastBump=M.t,M.shake=Math.min(1,n/22),$n.burst(i.x,i.y+.6,i.z,12,6,.5,1.6,1.2,.7));for(let m of M.cars){if(m===e)continue;let p=i.x-m.e.x,y=i.z-m.e.z,v=Math.hypot(p,y);if(v<3.1&&v>.01&&Math.abs(i.y-m.e.y)<1.5){let w=p/v,L=y/v;i.x+=w*(3.1-v),i.z+=L*(3.1-v);let T=i.vx*w+i.vz*L;T<0&&(i.vx-=T*w*1.4,i.vz-=T*L*1.4,T<-4&&M.t-M.lastBump>.4&&(Ut.play("bump"),M.lastBump=M.t,M.shake=.5,m.ai&&m.ai.type==="traffic"&&(m.stun=1.5,Ut.play("honk"))))}}e.sync(),j.x=i.x,j.z=i.z,j.y=i.y,j.layer=i.layer,j.h=e.h,n>15&&nn("crash"),i.layer===2&&nn("ice"),e.speed*3.6>=111.4&&nn("speed"),M.revT=e.vf<-3?(M.revT||0)+s:0,M.revT>4&&nn("rev"),n>15&&!M.flags.crash&&(M.flags.crash=1,Pe([["max","\u041E\u0447\u0435\u043D\u044C \u043F\u043B\u043E\u0445\u043E\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435. \u041E\u043D\u043E \u043C\u043D\u0435 \u043E\u0447\u0435\u043D\u044C \u043D\u0435 \u043D\u0440\u0430\u0432\u0438\u0442\u0441\u044F"]])),i.layer===2&&!M.flags.ice&&(M.flags.ice=1,Pe([["igor","\u041D\u0430 \u043B\u044C\u0434\u0443 \u043F\u0435\u0440\u044C\u044F \u0446\u0430\u043F\u0435\u043B\u044C \u043B\u0435\u0436\u0430\u0442. \u042F \u043F\u0440\u043E\u0432\u0435\u0440\u044F\u043B"],["geisler","\u0410 \u0437\u0430\u0447\u0435\u043C \u0432\u0442\u043E\u0440\u043E\u0439 \u0440\u0430\u0437?)\u{1F605}"]])),e.slip>8&&e.speed>13&&(M.driftT=(M.driftT||0)+s,M.driftT>.7&&!M.flags.drift&&(M.flags.drift=1,Pe([["max","\u041E\u0447 \u0437\u0430\u043B\u0438\u043F\u0430\u0442\u0435\u043B\u044C\u043D\u0430\u044F)) \u0422\u0430\u043C \u0441\u0430\u043C\u044B\u0439 \u043A\u0430\u0439\u0444 \u0432 \u0440\u0430\u0437\u0440\u0443\u0448\u0435\u043D\u0438\u044F\u0445"]])));let r=Math.sin(e.h),a=Math.cos(e.h),o=-a,l=r,c=e.speed,h=e.vy!==0,u=i.layer===2?i.y+.04:Lo(i.x,i.z)?.035:.19,f=i.x-r*1.35-o*.9,d=i.z-a*1.35-l*.9,g=i.x-r*1.35+o*.9,x=i.z-a*1.35+l*.9;if(Ce[6]&&!h){let m=Math.hypot(f-Ce[0],d-Ce[2]);m>4?Ce[6]=!1:m>.7&&(Gf.seg(Ce[0],Ce[1],Ce[2],f,u,d,.16),Gf.seg(Ce[3],Ce[4],Ce[5],g,u,x,.16),Ce[0]=f,Ce[1]=u,Ce[2]=d,Ce[3]=g,Ce[4]=u,Ce[5]=x)}if(!Ce[6]&&!h&&(Ce[0]=f,Ce[1]=u,Ce[2]=d,Ce[3]=g,Ce[4]=u,Ce[5]=x,Ce[6]=!0),!h&&c>5){let m=e.slip>4?3:Math.random()<c/26?1:0;for(let p=0;p<m;p++){let y=Math.random()<.5?-.9:.9;$n.emit(i.x-r*1.5+o*y,i.y+.15,i.z-a*1.5+l*y,-r*2+(Math.random()-.5)*4+i.vx*.3,1.5+Math.random()*2.5,-a*2+(Math.random()-.5)*4+i.vz*.3,.6,.2,.24,.34)}}si.intensity+=(26-si.intensity)*En(5,s),si.position.set(i.x+r*1.6,i.y+1,i.z+a*1.6),si.target.position.set(i.x+r*22,i.y-1.2,i.z+a*22),si.target.updateMatrixWorld(),Zi.u.uCar.value.set(i.x+r*2,i.y+.8,i.z+a*2),Zi.u.uCarDir.value.set(r,-.02,a),Zi.u.uHead.value=1,ys("")}else{let e=Math.hypot(t.st,t.thr);if(e>.1){let r=Math.sin(Yt.yaw),a=Math.cos(Yt.yaw),o=r*t.thr-a*t.st,l=a*t.thr+r*t.st,c=Math.hypot(o,l);o/=c,l/=c;let h=7.4*Math.min(1,e);j.vx+=(o*h-j.vx)*En(12,s),j.vz+=(l*h-j.vz)*En(12,s),j.h+=Si(j.h,Math.atan2(o,l))*En(12,s)}else j.vx-=j.vx*En(10,s),j.vz-=j.vz*En(10,s);j.x+=j.vx*s,j.z+=j.vz*s,ye.col.resolve(j,.45,j.layer,0);for(let r of M.cars){let a=j.x-r.e.x,o=j.z-r.e.z,l=Math.hypot(a,o);l<2&&l>.01&&Math.abs(j.y-r.e.y)<1.5&&(j.x+=a/l*(2-l),j.z+=o/l*(2-l))}j.x=De(j.x,-ur,ur),j.z=De(j.z,-fr,fr);let n=Yi(j);j.vy>0||j.y>n+.3?(j.vy-=26*s,j.y+=j.vy*s,j.y<=n&&(j.y=n,j.vy=0)):j.y+=(n-j.y)*En(14,s),j.walk=De(Math.hypot(j.vx,j.vz)/7,0,1),oi.position.set(j.x,j.y+(j.layer===0&&!Lo(j.x,j.z)?.15:0),j.z),M.danceT=Math.max(0,(M.danceT||0)-s),M.danceT>0&&(j.h+=s*9),oi.rotation.set(j.vy!==0?M.time*10:0,j.h,M.danceT>0?Math.sin(M.time*14)*.25:0),Io(oi,M.time,M.danceT>0?1:j.walk,M.danceT>0),si.intensity+=(0-si.intensity)*En(5,s),Zi.u.uHead.value=0;let i=cd(5);ys(i?kn?"\u0416\u043C\u0438 \u{1F697}, \u0447\u0442\u043E\u0431\u044B \u0441\u0435\u0441\u0442\u044C"+(i.ai?" (\u0443\u0433\u043E\u043D!)":""):"E \u2014 \u0441\u0435\u0441\u0442\u044C \u0432 \u043C\u0430\u0448\u0438\u043D\u0443"+(i.ai?" (\u0443\u0433\u043E\u043D!)":""):M.t<200&&M.danceT<=0?kn?"\u{1F980} \u2014 \u0442\u0430\u043D\u0446\u0435\u0432\u0430\u0442\u044C":"E \u2014 \u0442\u0430\u043D\u0446\u0435\u0432\u0430\u0442\u044C":""),lt("bAct").textContent=i?"\u{1F697}":"\u{1F980}"}for(let e of ye.anomalies)if(Math.hypot(j.x-e.x,j.z-e.z)<e.r+(M.mode==="car"?1.2:.3)&&j.y<2&&M.t-(M.zapT||0)>1.2){M.zapT=M.t,nn("zap"),Ut.play("zap"),M.shake=1,Ai.mFinal.uniforms.uFlash.value=.5,$n.burst(e.x,2,e.z,40,10,.9,.6,2.2,1.2);let n=Math.atan2(j.x-e.x,j.z-e.z)+(Math.random()-.5);M.mode==="car"?(M.car.e.vx=Math.sin(n)*16,M.car.e.vz=Math.cos(n)*16,M.car.launch(13)):(j.vx=Math.sin(n)*13,j.vz=Math.cos(n)*13,j.vy=12,j.y+=.4),M.flags.zap||(M.flags.zap=1,Pe([["kos","\u042F \u0436\u0435 \u0441\u043A\u0430\u0437\u0430\u043B: \u0432 \u0430\u043D\u043E\u043C\u0430\u043B\u0438\u0438 \u043D\u0435 \u043B\u0435\u0437\u044C"],["dima","\u042D\u0442\u043E \u043D\u0435 \u0431\u0430\u0433. \u042D\u0442\u043E \u043D\u043E\u0432\u0430\u044F \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u044C)"]]))}}function cd(s){let t=null,e=s;for(let n of M.cars){if(n.kind==="mod")continue;let i=Math.hypot(n.e.x-j.x,n.e.z-j.z);i<e&&Math.abs(n.e.y-j.y)<2&&(e=i,t=n)}return t}function _h(){if(!(M.state!=="play"||M.modal))if(M.mode==="car"){let s=M.car;if(s.speed>9){ys("\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u043F\u0440\u0438\u0442\u043E\u0440\u043C\u043E\u0437\u0438",1.4);return}let t=Math.cos(s.h),e=-Math.sin(s.h);ye.col.near(s.e.x+t*2,s.e.z+e*2,.5)&&(t=-t,e=-e),j.x=s.e.x+t*2,j.z=s.e.z+e*2,j.y=s.e.y,j.vx=j.vz=0,j.h=s.h,s.e.vx=s.e.vz=0,s.vf=0,M.mode="foot",oi.visible=!0,Yt.yaw+=Yt.off,Yt.off=0,Ut.play("door"),!M.flags.exit&&M.pid!=="nikita"&&(M.flags.exit=1,Pe([["nikita","\u0427\u0435 \u0442\u0430\u043C \u0434\u0435\u043B\u0430\u0442\u044C \u043D\u0430\u0434\u043E?"]]))}else{let s=cd(5);if(!s){M.danceT=2.4,Ut.horn(M.pid),nn("dance"),M.flags.dance||(M.flags.dance=1,Pe([["nikita","\u0434\u0438\u043C\u0430\u043D, \u043F\u043E\u043A\u0430 \u0437\u0430\u043A\u0430\u043F\u044B\u0432\u0430\u0435\u043C\u0441\u044F)"]]));return}s.ai&&(s.ai=null,s.stun=0,M.stats.stolen++,nn("steal"),ri(60),Kn("\u0423\u0413\u041E\u041D","+60 \xB7 \u0442\u0435\u043F\u0435\u0440\u044C \u0442\u044B \u043A\u0430\u043A \u0442\u0438\u043F\u044B"),M.stats.stolen===1&&Pe([["sys","\u0421\u0438\u0433\u043D\u0430\u043B\u043A\u0430 \u043E\u0440\u0451\u0442 \u0433\u043E\u043B\u043E\u0441\u043E\u043C \u041C\u0430\u043A\u0441\u0430. \u041D\u0438\u043A\u0442\u043E \u043D\u0435 \u0441\u043B\u0443\u0448\u0430\u0435\u0442"],["max",{voice:23}]]),vh(15)),s.maxSpeed=s.kind==="van"?31:38,M.car=s,s.g.add(Qf),M.mode="car",oi.visible=!1,ys(""),lt("bAct").textContent="\u{1F6AA}",Ut.play("door"),Ce[6]=!1}}var lh=0;function lv(s){for(let t of M.npcs){let e=Math.hypot(j.x-t.x,j.z-t.z);if(t.cool-=s,t.talk-=s,e<90&&(Io(t.rak,M.time,0,t.talk>0),sd(t.rak),e<16&&(t.rak.rotation.y+=Si(t.rak.rotation.y,Math.atan2(j.x-t.x,j.z-t.z))*En(5,s)),e<7.5&&t.cool<=0&&M.time>lh)){let n=wi[t.id].quotes;t.cool=14,t.talk=3.2,lh=M.time+3.4;let i=lt("speak");i.innerHTML=`<b>${wi[t.id].name}:</b> ${vn(n[Math.floor(Math.random()*n.length)])}`,i.style.opacity=1,setTimeout(()=>{i.style.opacity=0},3200)}}}function vh(s){M.wanted=Math.max(M.wanted,s),lt("wanted").classList.remove("hidden");let t=0;for(;M.mods.length<2&&t++<80;){let e=Yc(j.x+(Math.random()-.5)*200,j.z+(Math.random()-.5)*200,0),n=xn[e],i=Math.hypot(n.x-j.x,n.z-j.z);if(i<55||i>190)continue;let r=new mr(sn,n.x,n.z,Math.atan2(j.x-n.x,j.z-n.z),15265528,"mod");r.ai={type:"mod",stuck:0,rev:0},r.maxSpeed=28,M.mods.push(r),M.cars.push(r)}}function Zf(s){M.wanted=0,M.caught=0,lt("wanted").classList.add("hidden");for(let t of M.mods)sn.remove(t.g),M.cars.splice(M.cars.indexOf(t),1);M.mods.length=0,s&&(nn("esc"),ri(150),Kn("\u041E\u0422\u041E\u0420\u0412\u0410\u041B\u0421\u042F","+150"),M.flags.esc||(M.flags.esc=1,Pe([["geisler","\u041C\u0435\u043D\u044F \u0443\u0434\u0438\u0432\u043B\u044F\u0435\u0442 \u043F\u043E\u0447\u0435\u043C\u0443 \u043F\u0441 \u0434\u043E \u0441\u0438\u0445 \u043F\u043E\u0440 \u044D\u0442\u0443 \u043B\u0430\u0432\u043E\u0447\u043A\u0443 \u043D\u0435 \u043F\u0440\u0438\u043A\u0440\u044B\u043B\u0438))"]])))}function cv(s){if(M.wanted<=0)return;M.wanted-=s,lt("wt").textContent=Math.ceil(M.wanted)+" \u0441";let t=!1;for(let e of M.mods){let n=e.e,i=j.x-n.x,r=j.z-n.z,a=Math.hypot(i,r),o=Si(e.h,Math.atan2(i,r)),l=De(-o*2.2,-1,1),c=1;if(e.ai.rev>0?(e.ai.rev-=s,c=-1,l=-l):(e.speed<1.5?e.ai.stuck+=s:e.ai.stuck=0,e.ai.stuck>1.1&&(e.ai.rev=.9,e.ai.stuck=0)),Math.abs(o)>1.2&&e.speed>12&&(c=-.4),M.modal&&(c=0,l=0),e.drive(s,c,l,!1,ye.col),e.sync(),e.barMat.color.setHex((M.time*7|0)%2?2245887:16720435),a<5.2&&Math.abs(j.y-n.y)<2&&(t=!0),a>240){let h=Yc(j.x,j.z,70,150);h>=0&&(n.x=xn[h].x,n.z=xn[h].z,n.y=0,n.vx=n.vz=0)}}if(M.caught=t?M.caught+s:Math.max(0,M.caught-s*.5),M.caught>1&&!M.modal){M.stats.bans++,nn("ban"),Ut.play("bad"),M.shake=1;let e=$c[Math.floor(Math.random()*$c.length)];M.mode==="car"&&(M.car.e.vx=M.car.e.vz=0),uh({title:"\u{1F6A8} \u0411\u0410\u041D! \u0412\u043E\u043F\u0440\u043E\u0441 \u043E\u0442 \u043C\u043E\u0434\u0435\u0440\u0430\u0442\u043E\u0440\u0430",text:e[0],opts:[{label:e[1]},{label:e[2]}]},()=>{Pe([["arkasha","\u0412\u0441\u0435 \u0442\u0430\u043A, \u0442\u043E\u043B\u044C\u043A\u043E \u043D\u0430\u043E\u0431\u043E\u0440\u043E\u0442"],["sys","\u0411\u0430\u043D: \u22128 \u0441\u0435\u043A\u0443\u043D\u0434 \u0438 \u2212150 \u043E\u0447\u043A\u043E\u0432"]]),M.left=Math.max(3,M.left-8),ri(-150),M.busy=.4,Zf(!1)}),M.caught=0}else M.wanted<=0&&!M.modal&&Zf(!0)}function hd(s){let t=Jr[s];M.mission={id:s,def:t,steps:t.steps.slice(),si:-1,t0:M.t,bonus:0,pts:[]},Pe(t.intro),Mr(),M.radio||Ut.setTheme(t.giver),Ut.sting("start"),M.t>4&&Kn("\u{1F4F1} "+t.title,"\u043D\u043E\u0432\u043E\u0435 \u043F\u043E\u0440\u0443\u0447\u0435\u043D\u0438\u0435 \xB7 "+wi[t.giver].name)}function hv(s){return s.raki?["arkasha","max","igor","pasha","nikita","geisler"].filter(e=>e!==M.pid).slice(0,s.raki).map(e=>({x:gn[e][0],z:gn[e][1],who:e,done:!1})):s.pts.map(t=>({x:gn[t][0],z:gn[t][1],done:!1}))}function Mr(){let s=M.mission;if(s.si++,s.si>=s.steps.length)return fv();let t=s.steps[s.si];if(t.enter&&Pe(t.enter),t.timer&&(s.deadline=M.t+t.timer),s.prog=0,t.choice){s.pts=[],uh(t.choice,e=>{M.mission===s&&(e.say&&Pe(e.say),e.bonus&&(s.bonus+=e.bonus),e.flag&&(M.flags[e.flag]=1),e.add&&s.steps.splice(s.si+1,0,...e.add),Mr())});return}if(t.duel){s.pts=[],uv(s);return}s.pts=t.pts||t.raki?hv(t):[],lt("objtext").textContent=t.text,Ut.play("step")}function uv(s){let t={me:5,ai:6,kids:!0,round:1},e=()=>{let n=[{label:"\u0410\u0442\u0430\u043A\u043E\u0432\u0430\u0442\u044C \u043A\u043B\u0435\u0448\u043D\u0451\u0439",k:"a"},{label:"\u0417\u0430\u043A\u043E\u043F\u0430\u0442\u044C\u0441\u044F",k:"d"}];t.kids&&n.push({label:"\u041F\u043E\u0437\u0432\u0430\u0442\u044C \u0434\u0435\u0442\u0435\u0439 \u0438\u0437 Tekken",k:"k"}),uh({title:"\u0418\u0433\u0440\u0430 \u041D\u0438\u043A\u0438\u0442\u044B \xB7 \u0445\u043E\u0434 "+t.round,text:"\u041F\u043E\u0448\u0430\u0433\u043E\u0432\u0430\u044F \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u044F, 4 \u0440\u0430\u0441\u044B, AI \u043D\u0430 GPT-6-Luna. \u0422\u044B: "+"\u{1F980}".repeat(Math.max(0,t.me))+" \xB7 AI: "+"\u{1F916}".repeat(Math.max(0,t.ai))+". \u0417\u0430\u043A\u0430\u043F\u044B\u0432\u0430\u0442\u044C\u0441\u044F \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E, \u043D\u043E \u0432\u0440\u0435\u043C\u044F \u0438\u0434\u0451\u0442.",opts:n},i=>{if(M.mission!==s)return;let r=3;i.k==="a"?t.ai-=2:i.k==="d"?(t.ai-=1,r=0):(t.ai-=3,t.kids=!1,r=1),t.ai>0&&(t.me-=r),t.round++,t.ai<=0?(s.bonus+=Math.max(0,5-t.round)*50,ta("sys","AI \u043F\u043E\u0432\u0435\u0440\u0436\u0435\u043D. \u0425\u043E\u0434\u043E\u0432: "+(t.round-1)),Mr()):t.me<=0?(s.lost=!0,ta("sys","AI \u0441\u0434\u0435\u043B\u0430\u043B \u0442\u0435\u0431\u044F, \u043A\u0430\u043A \u043C\u0430\u043B\u0435\u043D\u044C\u043A\u043E\u0433\u043E"),Mr()):e()})};e()}function ud(){M.mission=null,M.nextM=M.t+4.5,M.target=null,_r.forEach(s=>s.hide()),M.radio||Ut.setTheme(M.pid),lt("objtext").textContent=M.queue.length?"\u0416\u0434\u0438 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0439 \u0432 \u0447\u0430\u0442\u0435":"\u041F\u043E\u0440\u0443\u0447\u0435\u043D\u0438\u044F \u043A\u043E\u043D\u0447\u0438\u043B\u0438\u0441\u044C. \u0421\u043E\u0431\u0438\u0440\u0430\u0439 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438 \u0418\u0433\u043E\u0440\u044F",lt("dist").textContent="",lt("dist").classList.remove("hot")}function fv(){let s=M.mission,t=s.lost?0:Math.max(0,Math.round((s.def.par-(M.t-s.t0))*8)),e=Math.round(s.def.reward*(s.lost?.4:1))+s.bonus+t;M.done[s.id]=s.lost?"\u2248":"\u2714",s.id==="sanya"&&nn("slow"),s.id==="misha"&&nn("bati"),ri(e),M.stats.missions++,Kn((s.lost?"\u2248 ":"\u2714 ")+s.def.title,"+"+e+(t?" \xB7 \u0437\u0430 \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C +"+t:"")),Ut.play("win"),Pe(s.lost&&s.def.outroLost?s.def.outroLost:s.def.outro),ud()}function dv(){let s=M.mission,t=s.def.failReward||150;M.done[s.id]="\u2716",ri(t),Kn("\u2716 "+s.def.title,"\u043D\u0435 \u0443\u0441\u043F\u0435\u043B \xB7 +"+t),Ut.play("bad"),Pe(s.def.fail||[]),ud()}function pv(s){if(!M.mission){M.queue.length&&M.t>M.nextM&&!M.sayQ.length&&hd(M.queue.shift());return}let t=M.mission,e=t.steps[t.si];if(!e)return;if(t.deadline&&M.t>t.deadline&&!M.modal)return dv();if(e.choice||e.duel)return;if(e.slow){let o=M.mode==="car"?M.car.speed:99;o>1&&o<7?t.prog+=s:o>=7&&(t.prog=Math.max(0,t.prog-s*1.5)),_r.forEach(l=>l.hide()),M.target=null,t.prog>=e.slow&&(e.say&&Pe(e.say),e.big&&Kn(e.big[0],e.big[1]),Mr());return}let n=0,i=1e9,r=null,a=0;for(let o of t.pts){if(o.done)continue;let l=Math.hypot(j.x-o.x,j.z-o.z),c=!e.foot||M.mode==="foot";if(l<(e.r||9)&&c){if(o.done=!0,Ut.play("step"),$n.burst(o.x,1.5,o.z,24,7,.8,2.2,1.6,.4),o.who){ta(o.who,Hf[o.who]||"\u042F \u043F\u0430\u0441");let h=M.npcs.find(u=>u.id===o.who);h&&(h.talk=3)}if(e.each){let h=t.pts.filter(u=>u.done).length;ta("sys",e.each+[34,61,97][h-1]+"%")}continue}if(e.foot&&M.mode==="car"&&l<60&&ys("\u0412 \u0417\u043E\u043D\u0443 \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u0435\u0448\u043A\u043E\u043C: \u0432\u044B\u0439\u0434\u0438 \u0438\u0437 \u043C\u0430\u0448\u0438\u043D\u044B",.3),n++,l<i&&(i=l,r=o),a<3){let h={x:o.x,z:o.z,y:0};_r[a++].set(o.x,Yi(h),o.z,t.deadline?16730718:e.foot?8257373:16762941)}}for(;a<3;a++)_r[a].hide();if(!n){e.say&&Pe(e.say),e.big&&Kn(e.big[0],e.big[1]),e.wanted&&vh(e.wanted),Mr();return}M.target=r,M.targetD=i}var el=document.createElement("canvas");el.width=1200;el.height=800;ye.drawMap(el.getContext("2d"),2);var mv=lt("map").getContext("2d");function gv(){let s=mv,t=300/420;s.setTransform(1,0,0,1,0,0),s.fillStyle="#0a0e1a",s.fillRect(0,0,300,300),s.setTransform(t,0,0,t,150-(j.x+300)*2*t,150-(j.z+200)*2*t),s.drawImage(el,0,0);let e=(n,i,r,a)=>{s.fillStyle=a,s.beginPath(),s.arc((n+300)*2,(i+200)*2,r,0,7),s.fill()};for(let n of Ms)n.got||e(n.x,n.z,5,n.type===0?"#ffd24a":n.type===1?"#9fe0ff":"#ff6ad5");for(let n of M.mods)e(n.e.x,n.e.z,9,(M.time*6|0)%2?"#4a7dff":"#ff4a5a");if(s.setTransform(1,0,0,1,0,0),M.mission)for(let n of M.mission.pts){if(n.done)continue;let i=(n.x-j.x)*2*t,r=(n.z-j.z)*2*t,a=Math.hypot(i,r);a>138&&(i*=138/a,r*=138/a),s.fillStyle="#ffc83d",s.strokeStyle="#000",s.lineWidth=3,s.beginPath(),s.arc(150+i,150+r,10+Math.sin(M.time*5)*2,0,7),s.fill(),s.stroke()}s.translate(150,150),s.rotate(-j.h),s.fillStyle="#fff",s.strokeStyle="#ff3d8a",s.lineWidth=4,s.beginPath(),s.moveTo(0,14),s.lineTo(9,-10),s.lineTo(0,-5),s.lineTo(-9,-10),s.closePath(),s.fill(),s.stroke(),s.setTransform(1,0,0,1,0,0)}var Jf=-1;function xv(s){let t=Math.max(0,Math.ceil(M.left));if(t!==Jf){Jf=t;let e=lt("timer");e.textContent=String(Math.floor(t/60)).padStart(2,"0")+":"+String(t%60).padStart(2,"0"),e.classList.toggle("hot",t<=30),t<=10&&t>0&&Ut.play("tick")}if(M.hudT-=s,!(M.hudT>0)){if(M.hudT=.1,gv(),M.mission){let e=M.mission,n=e.steps[e.si],i="";if(n&&n.slow)i="\xB7 "+Math.min(100,Math.round(100*e.prog/n.slow))+"% \xB7 "+Math.round(M.car.speed*3.6)+" \u043A\u043C/\u0447";else if(M.target&&e.pts.length){i="\xB7 "+Math.round(M.targetD)+" \u043C";let a=Si(Yt.yaw+(M.mode==="car"?Yt.off:0),Math.atan2(M.target.x-j.x,M.target.z-j.z));lt("arrow").style.transform="rotate("+-a+"rad)"}let r=e.deadline?Math.max(0,Math.ceil(e.deadline-M.t)):-1;r>=0&&(i+=" \xB7 \u23F1 "+r+" \u0441",r<=5&&r!==M.lastTl&&(M.lastTl=r,Ut.play("tick"))),lt("dist").textContent=i,lt("dist").classList.toggle("hot",r>=0&&r<=10)}M.placeT-=.1;for(let e of Af)if(Math.hypot(j.x-e.x,j.z-e.z)<e.r&&M.lastPlace!==e&&M.placeT<=0){M.lastPlace=e,M.placeT=6;let n=lt("place");n.textContent=e.name,n.style.opacity=1,setTimeout(()=>{n.style.opacity=0},3500)}}}function _v(s){let t,e,n,i;if(Yt.manual+=s,M.mode==="car"){let x=M.car,m=x.speed;t=x.e.x,e=x.e.y+1.25,n=x.e.z,i=8.4+m*.085,Yt.manual>1.6&&bs===null&&(Yt.off-=Yt.off*En(2.2,s)),Yt.yaw+=Si(Yt.yaw,x.h)*En(3.4+m*.06,s),Ue.fov=qo+De(m*.26,0,9)}else t=j.x,e=j.y+1.55,n=j.z,i=6.4,Ue.fov=qo,Yt.manual>2.2&&j.walk>.3&&bs===null&&(Yt.yaw+=Si(Yt.yaw,j.h)*En(1.1,s));let r=Yt.yaw+(M.mode==="car"?Yt.off:0),a=Math.cos(Yt.pitch),o=Math.sin(Yt.pitch),l=Math.sin(r),c=Math.cos(r),h=1;for(let x=1;x<=7;x++){let m=x/7;if(ye.col.blocked(t-l*i*a*m,n-c*i*a*m)){h=Math.max(.16,(x-1)/7);break}}let u=t-l*i*a*h,f=n-c*i*a*h,d=e+.7+i*o*(.55+.45*h)+(1-h)*5;if(M.t<2.8){let x=1-Math.pow(1-M.t/2.8,3),m=1-x;Yt.pos.set(u-l*46*m,d+34*m,f-c*46*m),Yt.init=!0}else if(!Yt.init)Yt.pos.set(u,d,f),Yt.init=!0;else{let x=En(10,s);Yt.pos.x+=(u-Yt.pos.x)*x,Yt.pos.y+=(d-Yt.pos.y)*x,Yt.pos.z+=(f-Yt.pos.z)*x}Yt.pos.y=Math.max(Yt.pos.y,Hc(Math.abs(Yt.pos.x))+.7),M.shake=Math.max(0,M.shake-s*3),Ue.position.set(Yt.pos.x+(Math.random()-.5)*M.shake*.5,Yt.pos.y+(Math.random()-.5)*M.shake*.5,Yt.pos.z),Ue.lookAt(t+l*3,e+.5,n+c*3);let g=yd.free;g&&(Ue.position.set(g[0],g[1],g[2]),Ue.lookAt(g[3],g[4],g[5])),Ue.updateProjectionMatrix()}function vv(s){M.t+=s,M.left-=s,M.t>3&&nn("what"),ov(s);for(let t of M.cars)t.ai&&t.ai.type==="traffic"&&Uo(t,s,j.x,j.z);if(Tn.begin(),cv(s),lv(s),pv(s),nd(!0),iv(s),dh(),ye.fire){let t=ye.fire,e=.7+Math.random()*.5;Tn.add(t[0],t[1],t[2],4.5*e,2.4*e,.9*e,.2),Math.random()<.3&&$n.emit(t[0],t[1],t[2],(Math.random()-.5)*1.5,3+Math.random()*3,(Math.random()-.5)*1.5,1.2,2.5,.9,.2)}if(M.mission&&M.mission.id==="kos"&&M.mission.si<=1){let t=gn.artifact;Tn.add(t[0],1.4+Math.sin(M.time*3)*.2,t[1],5,2.6,1.3,.2)}for(let t of ye.towers)Tn.add(t.x,t.h+.6,t.z,4,(M.time*2|0)%2?2.2:.3,.2,.15);if(Tn.end(),M.sayT-=s,M.sayQ.length&&M.sayT<=0){let t=M.sayQ.shift();ta(t[0],t[1]),M.sayT=1.15}for(;M.amb<ko.length&&ko[M.amb][0]<=M.t;){let t=ko[M.amb++];!(t[1]==="kos"&&M.flags.witcher&&t[2]==="\u041D\u0430 \u0421\u0435\u0440\u0433\u0435\u044F \u0441\u0442\u043E\u043B\u0438\u043A")&&!(M.flags.crash&&t[0]===288)&&!(t[3]&&M.run&&M.run.includes(t[3]))&&M.sayQ.push([t[1],t[2]])}for(;M.cd<Ho.length&&M.left<=Ho[M.cd][0];){let t=Ho[M.cd++];M.left>t[0]-3&&M.sayQ.push(["arkasha",t[1]])}M.left<150&&!M.flags.delay&&(M.flags.delay=1,M.left+=15,Pe([["pasha","\u041F\u0435\u0440\u0435\u043D\u0435\u0441\u043B\u0438!"],["sys","\u0420\u0435\u043B\u0438\u0437 \u043F\u0435\u0440\u0435\u043D\u0435\u0441\u043B\u0438 \u043D\u0430 15 \u0441\u0435\u043A\u0443\u043D\u0434. +15 \u0441\u0435\u043A"],["pasha","\u041D\u0443 \u043E\u0431\u0435\u0449\u0430\u044E\u0442 \u0431\u0435\u0437 \u043F\u0435\u0440\u0435\u043D\u043E\u0441\u043E\u0432"]]),Kn("\u041F\u0415\u0420\u0415\u041D\u041E\u0421","+15 \u0441\u0435\u043A\u0443\u043D\u0434")),gd&&!Wf&&(Wf=!0,Pe([["sanya","\u041F\u0440\u0438\u0448\u043B\u043E\u0441\u044C \u043E\u043F\u0435\u0440\u0430\u0442\u0438\u0432\u043A\u0438 \u0434\u043E\u043A\u0443\u043F\u0438\u0442\u044C, \u0447\u0442\u043E\u0431\u044B \u0433\u0440\u0430\u0444\u0438\u043A\u0430 \u043D\u043E\u0440\u043C \u0431\u044B\u043B\u0430\u{1F605}"],["sys","\u0413\u0440\u0430\u0444\u0438\u043A\u0430 \u043F\u043E\u043D\u0438\u0436\u0435\u043D\u0430: \u0442\u0430\u043A \u043F\u043B\u0430\u0432\u043D\u0435\u0435"]])),Ut.intensity+=((M.left<60?1:M.wanted>0?.85:.5)-Ut.intensity)*En(1,s),Ut.rush=M.left<60?1:0,ye.setShadowCenter(j.x,j.z),_v(s),xv(s),M.left<=0&&md()}var $f={url:"https://ecwhfahziwuocmxzyomu.supabase.co/rest/v1/gtr_scores",key:"sb_publishable_srHhvRICnwOl-3P-CPRnKg_Oyx7JTyc"};function fd(s,t){let e=typeof AbortController!="undefined"?new AbortController:null,n=setTimeout(()=>{e&&e.abort()},7e3),i={headers:{apikey:$f.key,"Content-Type":"application/json",Prefer:"return=minimal"}};return e&&(i.signal=e.signal),t&&(i.method="POST",i.body=JSON.stringify(t)),fetch($f.url+s,i).then(r=>{if(clearTimeout(n),!r.ok)throw new Error("lb "+r.status);return t?null:r.json()},r=>{throw clearTimeout(n),r})}var yv=s=>{let t=new Date(s);if(isNaN(t))return"";let e=n=>String(n).padStart(2,"0");return e(t.getDate())+"."+e(t.getMonth()+1)+" "+e(t.getHours())+":"+e(t.getMinutes())},na='<div class="h">\u{1F3C6} \u0422\u0410\u0411\u041B\u0418\u0426\u0410 \u0427\u0410\u0422\u0410</div>',dd=()=>fd("?select=rak,score,created_at,ver&order=score.desc,created_at.desc&limit=150");function pd(s,t,e){s=s.filter(l=>wi[l.rak]);let n=s.filter(l=>(l.ver||1)===Bo),i=s.filter(l=>(l.ver||1)!==Bo),r=t?n.findIndex(l=>l.rak===t.rak&&l.score===t.score):-1,a=(l,c,h)=>'<div class="r'+(c===r&&!h?" me":"")+(h?" o":"")+'"><span>'+(h?"":c+1+".")+'</span><img src="'+hh[l.rak]+'" alt=""><b>'+wi[l.rak].name+(c===r&&!h?" \xB7 \u044D\u0442\u043E \u0442\u044B":"")+"</b><i>"+yv(l.created_at)+"</i><em>"+(+l.score||0)+"</em></div>",o=na+'<div class="s">\u0432\u0441\u0435 \u0437\u0430\u0431\u0435\u0433\u0438 \xB7 \u043B\u0443\u0447\u0448\u0438\u0435 \u0441\u0432\u0435\u0440\u0445\u0443 \xB7 \u0432\u0441\u0435\u0433\u043E '+n.length+"</div>";return n.length||(o+='<div class="e">\u041F\u043E\u043A\u0430 \u043F\u0443\u0441\u0442\u043E. \u0414\u043E\u0438\u0433\u0440\u0430\u0439 \u0434\u043E \u043F\u043E\u043B\u0443\u043D\u043E\u0447\u0438 \u2014 \u0431\u0443\u0434\u0435\u0448\u044C \u043F\u0435\u0440\u0432\u044B\u043C.</div>'),o+=n.slice(0,e).map((l,c)=>a(l,c)).join(""),r>=e&&(o+='<div class="e">\u2026</div>'+a(n[r],r)),n.length===1&&(o+='<div class="e">\u041F\u043E\u043A\u0430 \u0442\u0443\u0442 \u043E\u0434\u0438\u043D \u0437\u0430\u0431\u0435\u0433. \u041A\u0438\u0434\u0430\u0439 \u0441\u0441\u044B\u043B\u043A\u0443 \u0432 \u0447\u0430\u0442.</div>'),i.length&&(o+='<div class="s" style="margin-top:8px">\u043F\u0440\u043E\u0448\u043B\u0430\u044F \u0432\u0435\u0440\u0441\u0438\u044F \u0438\u0433\u0440\u044B (\u0431\u0435\u0437 \u043D\u043E\u0432\u044B\u0445 \u043F\u043E\u0440\u0443\u0447\u0435\u043D\u0438\u0439) \xB7 \u0432\u043D\u0435 \u0437\u0430\u0447\u0451\u0442\u0430</div>'+i.slice(0,Math.max(2,e>>2)).map((l,c)=>a(l,c,!0)).join("")),o}function Mv(){let s=M.stats,t=(wn.has("debug")||wn.has("t")||wn.has("q")||wn.has("m"))&&!wn.has("lb"),e=lt("flb"),n=M.score>0&&!t,i=n?{rak:M.pid,score:Math.min(M.score,12e3)}:null;e.classList.remove("hidden"),e.innerHTML=na+'<div class="e">\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u044E\u2026</div>',(n?fd("",{ver:Bo,rak:i.rak,score:i.score,missions:Math.min(s.missions,6),cards:Math.min(s.cards,2e3),bans:Math.min(s.bans,99)}).catch(()=>null):Promise.resolve()).then(dd).then(a=>{e.innerHTML=pd(a,i,8)}).catch(()=>{e.innerHTML=na+'<div class="e">\u041D\u0435\u0442 \u0441\u0432\u044F\u0437\u0438 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043E\u043C \u0440\u0435\u043A\u043E\u0440\u0434\u043E\u0432. \u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u043E\u0441\u0442\u0430\u043B\u0441\u044F \u043D\u0430 \u044D\u0442\u043E\u043C \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0435.</div>'})}function bv(){let s=lt("lbmc");lt("lbm").classList.remove("hidden"),s.innerHTML=na+'<div class="e">\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u044E\u2026</div>',dd().then(t=>{s.innerHTML=pd(t,null,30)}).catch(()=>{s.innerHTML=na+'<div class="e">\u041D\u0435\u0442 \u0441\u0432\u044F\u0437\u0438 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043E\u043C \u0440\u0435\u043A\u043E\u0440\u0434\u043E\u0432.</div>'})}var An=null;function md(){M.state="final",Ut.play("bell"),Ut.sting("final"),Ut.rush=0,Ut.setTheme(M.pid),Ut.intensity=1,lt("hud").classList.add("hidden"),lt("modal").classList.add("hidden"),lt("phone").classList.add("hidden"),lt("final").classList.remove("hidden"),Ai.mFinal.uniforms.uFlash.value=1,oi&&(oi.visible=!1),si.intensity=0,Zi.u.uHead.value=0,_r.forEach(l=>l.hide());let s=M.stats,t=Jc[0];for(let l of Jc)M.score>=l[0]&&(t=l);let e=0;try{e=+(localStorage.getItem("gtr_best")||0),M.score>e&&localStorage.setItem("gtr_best",M.score)}catch{}An={t:0,i:0,fw:0,rank:t,best:e};let n=location.origin+location.pathname,i=`\u{1F980} Grand Theft Raki: \u041D\u043E\u0432\u043E\u0441\u0438\u0431\u0438\u0440\u0441\u043A
\u0418\u0433\u0440\u0430\u043B \u0437\u0430: ${jr}
\u0421\u0447\u0451\u0442: ${M.score} \u2014 \u0437\u0432\u0430\u043D\u0438\u0435 ${t[1]}
\u041F\u043E\u0440\u0443\u0447\u0435\u043D\u0438\u0439: ${s.missions}/${s.total} \xB7 \u043A\u0430\u0440\u0442\u043E\u0447\u0435\u043A \u0418\u0433\u043E\u0440\u044F: ${s.cards} \u0438\u0437 144 \xB7 \u0431\u0430\u043D\u043E\u0432 \u043E\u0442 \u043C\u043E\u0434\u0435\u0440\u0430\u0442\u043E\u0440\u043E\u0432: ${s.bans}${Object.keys(M.tro||{}).length?`
\u0422\u0440\u043E\u0444\u0435\u0438: `+Object.keys(M.tro).map(l=>jo[l][0]).join(", "):""}
${n}`;lt("frank").textContent=t[1],lt("fscore").textContent=M.score+" \u043E\u0447\u043A.",lt("fnote").innerHTML=vn(t[2])+"<br><i>"+vn(Vf[M.pid]||"")+"</i>";let r=Object.keys(M.tro||{}).map(l=>jo[l][0]),a=(M.run||[]).map(l=>(M.done[l]||"\u2014")+" "+Jr[l].title).join(" \xB7 "),o=Zc.filter(l=>l!==M.pid&&!(M.run||[]).includes(l)).map(l=>wi[l].name).join(", ");lt("fstats").innerHTML="\u0418\u0433\u0440\u0430\u043B \u0437\u0430: <b>"+vn(jr)+"</b> \xB7 \u043F\u043E\u0440\u0443\u0447\u0435\u043D\u0438\u0439 "+s.missions+"/"+s.total+"<br>"+vn(a)+"<br>\u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438 "+s.cards+"/144 \xB7 \u043F\u0435\u0440\u044C\u044F "+s.feathers+"/6 \xB7 \u043E\u0440\u0445\u0438\u0434\u0435\u0438 "+s.orchids+"/6 \xB7 \u0443\u0433\u043E\u043D\u043E\u0432 "+s.stolen+" \xB7 \u0431\u0430\u043D\u043E\u0432 "+s.bans+" \xB7 \u0441\u043D\u0435\u0441\u0435\u043D\u043E "+s.smashed+(r.length?"<br>\u{1F980} \u0422\u0440\u043E\u0444\u0435\u0438 ("+r.length+"): "+vn(r.join(" \xB7 ")):"")+(o?'<br><span class="nx">\u0412 \u044D\u0442\u043E\u0442 \u0440\u0430\u0437 \u043D\u0435 \u0432\u044B\u043F\u0430\u043B\u0438 \u043F\u043E\u0440\u0443\u0447\u0435\u043D\u0438\u044F: '+vn(o)+". \u0421\u044B\u0433\u0440\u0430\u0439 \u0435\u0449\u0451.</span>":"")+(e?"<br>\u043F\u0440\u043E\u0448\u043B\u044B\u0439 \u0440\u0435\u043A\u043E\u0440\u0434 \u043D\u0430 \u044D\u0442\u043E\u043C \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0435: "+e:""),lt("fcopy").onclick=async()=>{let l=!1;try{await navigator.clipboard.writeText(i),l=!0}catch{}if(!l){let c=document.createElement("textarea");c.value=i,c.style.cssText="position:fixed;left:0;top:0;opacity:0",document.body.appendChild(c),c.focus(),c.select();try{l=document.execCommand("copy")}catch{l=!1}c.remove()}l?lt("fcopy").textContent="\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u043E \u2714 \u0432\u0441\u0442\u0430\u0432\u043B\u044F\u0439 \u0432 \u0447\u0430\u0442":(lt("fstats").innerHTML=`<textarea readonly style="width:100%;height:120px;font:13px system-ui;background:#111a2a;color:#fff;border:1px solid #445;border-radius:10px;padding:8px;-webkit-user-select:text;user-select:text">${vn(i)}</textarea>`,lt("fcopy").textContent="\u0412\u044B\u0434\u0435\u043B\u0438 \u0438 \u0441\u043A\u043E\u043F\u0438\u0440\u0443\u0439 \u0442\u0435\u043A\u0441\u0442 \u0432\u044B\u0448\u0435")},lt("fagain").onclick=()=>location.reload(),Mv()}function Sv(s){An.t+=s;let t=Ai.mFinal.uniforms;t.uFlash.value=Math.max(0,t.uFlash.value-s*1.2);let e=An.t*.12+2.6;if(Ue.fov=qo,Ue.position.set(176+Math.cos(e)*60,22+Math.min(An.t,30)*.7,-30+Math.sin(e)*60),Ue.lookAt(178,14,-30),Ue.updateProjectionMatrix(),ye.setShadowCenter(176,-30),An.fw-=s,An.fw<=0&&An.t<40){An.fw=.35+Math.random()*.5;let n=[[3,.4,1.6],[.4,2.4,3],[3,2.2,.4],[.6,3,1],[3,.6,.4]][Math.floor(Math.random()*5)];$n.burst(150+Math.random()*60,34+Math.random()*22,-60+Math.random()*60,60,13,1.7,n[0],n[1],n[2]),Math.random()<.6&&Ut.play("boom")}for(let n of M.cars)n.ai&&n.ai.type==="traffic"&&Uo(n,s,1e5,1e5);if(Tn.begin(),dh(),nd(!1),Tn.end(),An.i<$r.length&&An.t>1.6+An.i*.95){let n=$r[An.i++],i=lt("fchat");for(i.appendChild(ed(n[0],n[1]));i.children.length>3;)i.firstChild.remove();Ut.play("msg")}if(An.i>=$r.length&&An.t>2.6+$r.length*.95&&lt("fcard").classList.contains("hidden")){let n=lt("fchat");for(;n.children.length>1;)n.firstChild.remove();lt("fcard").classList.remove("hidden"),Ut.play("win")}}var Kr=0,ch=performance.now(),Wo=0,eh=0,Qr=4,gd=!1,Kf=!1;function xd(s){M.state==="play"?vv(s):M.state==="menu"?j_(s):M.state==="final"&&Sv(s)}function _d(s){requestAnimationFrame(_d);let t=(s-ch)/1e3;ch=s;let e=Math.min(.05,Math.max(.001,t));M.time+=e;try{xd(e),vd(e)}catch(n){lt("err").textContent=String(n&&n.stack||n).slice(0,400)}if(t<.5&&(Qr-=t,Qr<=0&&(Wo+=t,eh++,Wo>1.6))){let n=eh/Wo;Wo=0,eh=0,wn.has("fps")&&(lt("err").textContent=n.toFixed(0)+" fps \xB7 q"+Ti),n<(kn?27:43)&&!document.hidden?Kr++:Kr=0,Vo=n>56?Vo+1:0,Kr>=2&&Ti<tl.length-1&&!wn.has("q")?(Kr=0,Ti++,Ti>$_&&(gd=!0),Qc=!0,Qr=2.5,vs()):kn&&Vo>=3&&Ti>0&&!Qc&&!wn.has("q")&&M.state==="play"&&(Qc=!0,Vo=0,Ti--,Qr=3,vs())}Kf||(Kf=!0,lt("loading").style.opacity=0,setTimeout(()=>lt("loading").classList.add("hidden"),650))}function vd(s){{let t=Ai.mFinal.uniforms;M.state!=="final"&&(t.uFlash.value=Math.max(0,t.uFlash.value-s*2)),dr.value=td/(2*Math.tan(Ue.fov*Math.PI/360)),ye.update(s,M.time,Ue),Zi.u.uTime.value=M.time,Zi.u.uCam.value.copy(Ue.position),$n.update(M.time),_r.forEach(e=>e.update(M.time)),Ut.tick(M.state==="play"&&M.mode==="car"?De(M.car.speed/32,0,1):0,M.state==="play"&&M.mode==="car"?M.car.slip:0,M.state==="play"&&M.mode==="car",M.wanted>0),Ai.render(sn,Ue,M.time)}}vs();Q_();M.state="menu";lt("menu").classList.remove("hidden");var yd={S:M,P:j,cam:Yt,world:ye,post:Ai,renderer:ai,QL:tl,setQ:s=>{Ti=s,vs()},finale:md,startMission:hd,COL:Ms,action:_h,startWanted:vh,audio:Ut,Audio:Zr,THEMES:Jn,radioNext:mh,horn:gh,trophy:nn,NODES:xn,step:(s,t=1/30,e)=>{for(let n=0;n<s;n++)M.time+=t,xd(t);e||vd(t)}};wn.has("debug")&&(window.__gtr=yd);requestAnimationFrame(_d);})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
