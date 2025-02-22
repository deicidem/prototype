import{g as d,m as c,a4 as Z,h as $,b as ee,j as ae,u,c as a,p as y,e as B,d as T,a1 as m,O as P,i as h,a2 as te,a5 as ne,B as le}from"./index-DTEBoTJ-.js";import{m as f,d as _,w as L,l as D,f as N,n as se,B as z,V as R,C as A,g as b,j,q as ie,a as F,k as S,c as O,R as de,h as ce,e as ue,r as re,s as oe,t as ve,v as me,L as ye,x as ge,y as ke,z as be,A as fe,b as Ce,i as Ve}from"./index-DNS50UC3.js";function Ie(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",n=arguments.length>2?arguments[2]:void 0;return d()({name:n??Z(ee(e.replace(/__/g,"-"))),props:{tag:{type:String,default:l},...c()},setup(t,i){let{slots:s}=i;return()=>$(t.tag,{class:[e,t.class],style:t.style},s.default?.())}})}const Ae=d()({name:"VCardActions",props:c(),setup(e,l){let{slots:n}=l;return ae({VBtn:{slim:!0,variant:"text"}}),u(()=>a("div",{class:["v-card-actions",e.class],style:e.style},[n.default?.()])),{}}}),Se=y({opacity:[Number,String],...c(),...f()},"VCardSubtitle"),Pe=d()({name:"VCardSubtitle",props:Se(),setup(e,l){let{slots:n}=l;return u(()=>a(e.tag,{class:["v-card-subtitle",e.class],style:[{"--v-card-subtitle-opacity":e.opacity},e.style]},n)),{}}}),he=Ie("v-card-title"),xe=y({start:Boolean,end:Boolean,icon:m,image:String,text:String,...O(),...c(),...S(),...F(),...ie(),...f(),...T(),...j({variant:"flat"})},"VAvatar"),x=d()({name:"VAvatar",props:xe(),setup(e,l){let{slots:n}=l;const{themeClasses:t}=B(e),{borderClasses:i}=_(e),{colorClasses:s,colorStyles:r,variantClasses:o}=L(e),{densityClasses:v}=D(e),{roundedClasses:C}=N(e),{sizeClasses:V,sizeStyles:I}=se(e);return u(()=>a(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},t.value,i.value,s.value,v.value,C.value,V.value,o.value,e.class],style:[r.value,I.value,e.style]},{default:()=>[n.default?a(b,{key:"content-defaults",defaults:{VImg:{cover:!0,src:e.image},VIcon:{icon:e.icon}}},{default:()=>[n.default()]}):e.image?a(R,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?a(A,{key:"icon",icon:e.icon},null):e.text,z(!1,"v-avatar")]})),{}}}),Be=y({appendAvatar:String,appendIcon:m,prependAvatar:String,prependIcon:m,subtitle:[String,Number],title:[String,Number],...c(),...S()},"VCardItem"),Te=d()({name:"VCardItem",props:Be(),setup(e,l){let{slots:n}=l;return u(()=>{const t=!!(e.prependAvatar||e.prependIcon),i=!!(t||n.prepend),s=!!(e.appendAvatar||e.appendIcon),r=!!(s||n.append),o=!!(e.title!=null||n.title),v=!!(e.subtitle!=null||n.subtitle);return a("div",{class:["v-card-item",e.class],style:e.style},[i&&a("div",{key:"prepend",class:"v-card-item__prepend"},[n.prepend?a(b,{key:"prepend-defaults",disabled:!t,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},n.prepend):a(P,null,[e.prependAvatar&&a(x,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&a(A,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),a("div",{class:"v-card-item__content"},[o&&a(he,{key:"title"},{default:()=>[n.title?.()??e.title]}),v&&a(Pe,{key:"subtitle"},{default:()=>[n.subtitle?.()??e.subtitle]}),n.default?.()]),r&&a("div",{key:"append",class:"v-card-item__append"},[n.append?a(b,{key:"append-defaults",disabled:!s,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},n.append):a(P,null,[e.appendIcon&&a(A,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&a(x,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])])}),{}}}),_e=y({opacity:[Number,String],...c(),...f()},"VCardText"),Le=d()({name:"VCardText",props:_e(),setup(e,l){let{slots:n}=l;return u(()=>a(e.tag,{class:["v-card-text",e.class],style:[{"--v-card-text-opacity":e.opacity},e.style]},n)),{}}}),De=y({appendAvatar:String,appendIcon:m,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:m,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number],text:[String,Number],title:[String,Number],...O(),...c(),...S(),...Ve(),...Ce(),...fe(),...be(),...ke(),...F(),...ge(),...f(),...T(),...j({variant:"elevated"})},"VCard"),Re=d()({name:"VCard",directives:{Ripple:de},props:De(),setup(e,l){let{attrs:n,slots:t}=l;const{themeClasses:i}=B(e),{borderClasses:s}=_(e),{colorClasses:r,colorStyles:o,variantClasses:v}=L(e),{densityClasses:C}=D(e),{dimensionStyles:V}=ce(e),{elevationClasses:I}=ue(e),{loaderClasses:w}=re(e),{locationStyles:E}=oe(e),{positionClasses:M}=ve(e),{roundedClasses:q}=N(e),g=me(e,n),H=h(()=>e.link!==!1&&g.isLink.value),k=h(()=>!e.disabled&&e.link!==!1&&(e.link||g.isClickable.value));return u(()=>{const p=H.value?"a":e.tag,G=!!(t.title||e.title!=null),J=!!(t.subtitle||e.subtitle!=null),K=G||J,Q=!!(t.append||e.appendAvatar||e.appendIcon),U=!!(t.prepend||e.prependAvatar||e.prependIcon),W=!!(t.image||e.image),X=K||U||Q,Y=!!(t.text||e.text!=null);return te(a(p,le({class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":k.value},i.value,s.value,r.value,C.value,I.value,w.value,M.value,q.value,v.value,e.class],style:[o.value,V.value,E.value,e.style],onClick:k.value&&g.navigate,tabindex:e.disabled?-1:void 0},g.linkProps),{default:()=>[W&&a("div",{key:"image",class:"v-card__image"},[t.image?a(b,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):a(R,{key:"image-img",cover:!0,src:e.image},null)]),a(ye,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:t.loader}),X&&a(Te,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:t.item,prepend:t.prepend,title:t.title,subtitle:t.subtitle,append:t.append}),Y&&a(Le,{key:"text"},{default:()=>[t.text?.()??e.text]}),t.default?.(),t.actions&&a(Ae,null,{default:t.actions}),z(k.value,"v-card")]}),[[ne("ripple"),k.value&&e.ripple]])}),{}}});export{Re as V};
