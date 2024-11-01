(()=>{var e,t={445:(e,t,l)=>{"use strict";const o=window.wp.blocks,a=window.wp.i18n,n=window.wp.element,i=window.wp.blockEditor,r=window.wp.components,s=e=>{const{label:t,help:l,value:o,onChange:s}=e;return(0,n.createElement)(n.Fragment,null,(0,n.createElement)(r.BaseControl,{label:t,help:l,className:"ge-color-control"},(0,n.createElement)(r.Dropdown,{className:"ge-color-control__dropdown",contentClassName:"ge-color-control__dropdown-content",position:"bottom right",renderToggle:({isOpen:e,onToggle:l})=>(0,n.createElement)(n.Fragment,null,(0,n.createElement)(r.Button,{className:"ge-color-control__button",onClick:l,"aria-label":t},(0,n.createElement)("span",{style:{background:o},className:"ge-color-control__color"})),o&&(0,n.createElement)(r.Tooltip,{text:(0,a.__)("Clear","ultradevs")},(0,n.createElement)(r.Button,{className:"ge-color-control__button ge-color-control__button-clear",onClick:()=>s(""),"aria-label":(0,a.__)("Clear color","ultradevs")},(0,n.createElement)(r.Dashicon,{icon:"image-rotate"})))),renderContent:({onClose:t})=>(0,n.createElement)(n.Fragment,null,(0,n.createElement)(i.ColorPalette,{value:o,onChange:e=>{s(e),t()},disableCustomColors:!0,clearable:!1}),(0,n.createElement)(r.ColorPicker,{color:o,onChangeComplete:e=>{s((e=>{if("object"==typeof e){const t="undefined"===e.a?1:e.a;if(void 0!==e.h)return`hsl(${e.h}%, ${e.s}%, ${e.l}%, ${t})`;if(void 0!==e.r)return`rgba(${e.r}, ${e.g}, ${e.b}, ${t})`}return e})(e.hex))},disableAlpha:e.disableAlpha}))})))};window.wp.data,l(967);const m=e=>{const{attributes:t,setAttributes:l}=e,o=RegExp(/is-style-/),m=o.test(t.className)?t.className.replace(o,""):null,{image:c,bgColor:u,hoverBGColor:g,txtColor:b,hoverTxtColor:d,rating:v,ratingColor:_,ratingScale:x,ratingSize:h,nameColor:C,designationColor:p,hoverNameColor:E,hoverDesignationColor:f}=t;return(0,n.useEffect)((()=>{l({bgColor:"#fff"}),l({txtColor:"#111"}),l({hoverBGColor:"#111"}),l({hoverTxtColor:"#fff"}),"style-two"===m?(l({bgColor:"#292C36"}),l({hoverBGColor:"#fff"}),l({txtColor:"#fff"}),l({hoverTxtColor:"#111"})):"style-five"===m?(l({bgColor:"#000"}),l({hoverBGColor:"#fff"}),l({txtColor:"#fff"}),l({hoverTxtColor:"#000"})):"style-six"===m?l({bgColor:"#171820"}):("style-eight"===m||"style-nine"===m)&&l({bgColor:"transparent"})}),[m]),(0,n.createElement)(i.InspectorControls,null,(0,n.createElement)(r.PanelBody,{title:(0,a.__)("Testimonial Settings","testimonialx-block")},(0,n.createElement)(s,{label:(0,a.__)("Background Color","testimonialx-block"),value:u,onChange:e=>l({bgColor:e})}),(0,n.createElement)(s,{label:(0,a.__)("Hover Background Color","testimonialx-block"),value:g,onChange:e=>l({hoverBGColor:e})}),(0,n.createElement)(s,{label:(0,a.__)("Text Color","testimonialx-block"),value:b,onChange:e=>l({txtColor:e})}),(0,n.createElement)(s,{label:(0,a.__)("Hover Text Color","testimonialx-block"),value:d,onChange:e=>l({hoverTxtColor:e})})),(0,n.createElement)(r.PanelBody,{title:(0,a.__)("Image Settings","testimonialx-block")},(0,n.createElement)(r.RangeControl,{label:(0,a.__)("Height","testimonialx-block"),value:c.height,onChange:e=>l({image:{...c,height:e}}),min:0,max:500}),(0,n.createElement)(r.RangeControl,{label:(0,a.__)("Width","testimonialx-block"),value:c.width,onChange:e=>l({image:{...c,width:e}}),min:0,max:500}),(0,n.createElement)(r.RangeControl,{label:(0,a.__)("Border Radius","testimonialx-block"),value:c.borderRadius,onChange:e=>l({image:{...c,borderRadius:e}}),min:0,max:1e3}),(0,n.createElement)(r.SelectControl,{label:(0,a.__)("Object Fit","testimonialx-block"),value:c.objectFit,onChange:e=>l({image:{...c,objectFit:e}}),options:[{label:"Fill",value:"fill"},{label:"Contain",value:"contain"},{label:"Cover",value:"cover"},{label:"None",value:"none"},{label:"Scale Down",value:"scale-down"},{label:"Inherit",value:"inherit"},{label:"Unset",value:"unset"}]})),(0,n.createElement)(r.PanelBody,{title:(0,a.__)("Name & Designation","testimonialx-block")},(0,n.createElement)(s,{label:(0,a.__)("Name Color","testimonialx-block"),value:C,onChange:e=>l({nameColor:e})}),(0,n.createElement)(s,{label:(0,a.__)("Designation Color","testimonialx-block"),value:p,onChange:e=>l({designationColor:e})}),(0,n.createElement)(s,{label:(0,a.__)("Hover Name Color","testimonialx-block"),value:E,onChange:e=>l({hoverNameColor:e})}),(0,n.createElement)(s,{label:(0,a.__)("Hover Designation Color","testimonialx-block"),value:f,onChange:e=>l({hoverDesignationColor:e})})),(0,n.createElement)(r.PanelBody,{title:(0,a.__)("Rating Settings","testimonialx-block")},(0,n.createElement)(s,{label:(0,a.__)("Rating Color","testimonialx-block"),value:_,onChange:e=>l({ratingColor:e})}),(0,n.createElement)(r.RangeControl,{label:(0,a.__)("Rating","testimonialx-block"),value:v,onChange:e=>l({rating:e}),min:1,step:.5,max:x}),(0,n.createElement)(r.RangeControl,{label:(0,a.__)("Rating Scale","testimonialx-block"),value:x,onChange:e=>l({ratingScale:e}),min:5,step:1,max:10}),(0,n.createElement)(r.RangeControl,{label:(0,a.__)("Rating Icon Size","testimonialx-block"),value:h,onChange:e=>l({ratingSize:e}),min:10,step:1,max:100})))},c=({rating:e,color:t,ratingScale:l})=>{const o=(0,n.createElement)("svg",{"aria-hidden":"true",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,n.createElement)("path",{fill:"currentColor",d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"})),a=(0,n.createElement)("svg",{"aria-hidden":"true",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 536 512"},(0,n.createElement)("path",{fill:"currentColor",d:"M508.55 171.51L362.18 150.2 296.77 17.81C290.89 5.98 279.42 0 267.95 0c-11.4 0-22.79 5.9-28.69 17.81l-65.43 132.38-146.38 21.29c-26.25 3.8-36.77 36.09-17.74 54.59l105.89 103-25.06 145.48C86.98 495.33 103.57 512 122.15 512c4.93 0 10-1.17 14.87-3.75l130.95-68.68 130.94 68.7c4.86 2.55 9.92 3.71 14.83 3.71 18.6 0 35.22-16.61 31.66-37.4l-25.03-145.49 105.91-102.98c19.04-18.5 8.52-50.8-17.73-54.6zm-121.74 123.2l-18.12 17.62 4.28 24.88 19.52 113.45-102.13-53.59-22.38-11.74.03-317.19 51.03 103.29 11.18 22.63 25.01 3.64 114.23 16.63-82.65 80.38z"})),i=(0,n.createElement)("svg",{"aria-hidden":"true",focusable:"false",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,n.createElement)("path",{fill:"currentColor",d:"M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"})),r=Math.floor(e),s=e%1==0?0:1,m=l-(r+s);return(0,n.createElement)(n.Fragment,null,[...Array(r)].map(((e,t)=>(0,n.createElement)(n.Fragment,null,(0,n.createElement)(n.Fragment,{key:t},o)))),[...Array(s)].map(((e,t)=>(0,n.createElement)(n.Fragment,{key:t},a))),[...Array(m)].map(((e,t)=>(0,n.createElement)(n.Fragment,{key:t},i))))},u=JSON.parse('{"u2":"ultradevs/testimonial"}');let g=[{name:"default",label:(0,a.__)("Default","testimonialx-block"),isDefault:!0},{name:"style-two",label:(0,a.__)("Style Two","testimonialx-block")},{name:"style-three",label:(0,a.__)("Style Three","testimonialx-block")},{name:"style-four",label:(0,a.__)("Style Four","testimonialx-block")},{name:"style-five",label:(0,a.__)("Style Five","testimonialx-block")},{name:"style-six",label:(0,a.__)("Style Six","testimonialx-block")},{name:"style-seven",label:(0,a.__)("Style Seven","testimonialx-block")},{name:"style-eight",label:(0,a.__)("Style Eight","testimonialx-block")},{name:"style-nine",label:(0,a.__)("Style Nine","testimonialx-block")},{name:"style-ten",label:(0,a.__)("Style Ten","testimonialx-block")},{name:"style-eleven",label:(0,a.__)("Style Eleven","testimonialx-block")},{name:"style-twelve",label:(0,a.__)("Style Twelve","testimonialx-block")},{name:"style-thirteen",label:(0,a.__)("Style Thirteen","testimonialx-block")},{name:"style-fourteen",label:(0,a.__)("Style Fourteen","testimonialx-block")},{name:"style-fifteen",label:(0,a.__)("Style Fifteen","testimonialx-block")},{name:"style-sixteen",label:(0,a.__)("Style Sixteen","testimonialx-block")}];g.includes(["style-two","style-six","style-eight"]),(0,o.registerBlockType)(u.u2,{styles:g,edit:e=>{const{attributes:t,setAttributes:l}=e,{name:o,designation:s,description:u,image:g,pubDateTime:b,rating:d,ratingColor:v,ratingSize:_,ratingScale:x,bgColor:h,hoverBGColor:C,txtColor:p,hoverTxtColor:E,nameColor:f,designationColor:y,hoverNameColor:k,hoverDesignationColor:w}=t,N=RegExp(/is-style-/),S=N.test(t.className)?t.className.replace(N,""):null;return(0,n.createElement)(n.Fragment,null,(0,n.createElement)(m,{attributes:t,setAttributes:l}),(0,n.createElement)("div",(0,i.useBlockProps)({className:"ud-testimonial-box",style:{"--ud-testimonial-box-bg-color":h||void 0,"--ud-testimonial-box-hover-bg-color":C||void 0,"--ud-testimonial-box-txt-color":p||void 0,"--ud-testimonial-box-hover-txt-color":E||void 0,"--ud-testimonial-box-rating-color":v||void 0,"--ud-testimonial-box-rating-size":_?_+"px":void 0,"--ud-testimonial-box-name-color":f||void 0,"--ud-testimonial-box-hover-name-color":k||void 0,"--ud-testimonial-box-designation-color":y||void 0,"--ud-testimonial-box-hover-designation-color":w||void 0,"--ud-testimonial-box-image-height":g.height?g.height+"px":void 0,"--ud-testimonial-box-image-width":g.width?g.width+"px":void 0,"--ud-testimonial-box-image-radius":g.radius?g.radius+"px":void 0,"--ud-testimonial-box-image-object-fit":g.objectFit?g.objectFit:"unset"}}),"style-five"===S&&(0,n.createElement)("div",{className:"ud-testimonial-box__img"},(0,n.createElement)(i.MediaUpload,{onSelect:e=>l({image:{...g,url:e.url,title:e.title,alt:e.alt}}),type:"image",value:g,render:({open:e})=>(0,n.createElement)(r.Button,{className:g?"image-button":"button button-large",onClick:e},g?(0,n.createElement)("img",{src:g.url,alt:g.alt,title:g.title}):(0,n.createElement)(n.Fragment,null,(0,n.createElement)(r.Dashicon,{icon:"format-image"})))})),(0,n.createElement)("div",{className:"ud-testimonial-box__text"},(0,n.createElement)(i.RichText,{tagName:"p",placeholder:(0,a.__)("Content"),value:u,onChange:e=>l({description:e})})),(0,n.createElement)("div",{className:"ud-testimonial-box__author"},(0,n.createElement)(i.MediaUpload,{onSelect:e=>{l({image:{...g,url:e.url,title:e.title,alt:e.alt}})},type:"image",value:g,render:({open:e})=>(0,n.createElement)("a",{className:g?"image-button":"button button-large",onClick:e},g.url?(0,n.createElement)("img",{src:g.url,alt:g.title}):(0,a.__)("Upload","ud-testimonial-block"))}),(0,n.createElement)("div",{className:"ud-testimonial-box__author__info"},(0,n.createElement)(i.RichText,{tagName:"h3",placeholder:(0,a.__)("Name"),value:o,onChange:e=>l({name:e}),className:"ud-testimonial-box__author__info__name"}),(0,n.createElement)(i.RichText,{tagName:"h4",placeholder:(0,a.__)("Designation"),value:s,onChange:e=>l({designation:e}),className:"ud-testimonial-box__author__info__designation"}),(0,n.createElement)("div",{className:"ud-testimonial-box__author__info__ratings"},(0,n.createElement)(c,{rating:d,ratingColor:v,ratingScale:x})))),"style-six"===S&&(0,n.createElement)("p",{className:"ud-testimonial-box__star"},"★★★★★"),(0,n.createElement)("div",{className:"ud-testimonial-box__date"},(0,n.createElement)(i.RichText,{tagName:"span",placeholder:(0,a.__)("Date"),value:b,onChange:e=>l({pubDateTime:e})}))))},save:({attributes:e})=>{const{name:t,designation:l,description:o,image:a,pubDateTime:r,rating:s,ratingColor:m,ratingSize:u,ratingScale:g,bgColor:b,hoverBGColor:d,txtColor:v,hoverTxtColor:_,nameColor:x,designationColor:h,hoverNameColor:C,hoverDesignationColor:p}=e,E=RegExp(/is-style-/),f=E.test(e.className)?e.className.replace(E,""):null;return(0,n.createElement)("div",i.useBlockProps.save({className:"ud-testimonial-box ud-testimonial-box--style-two",style:{"--ud-testimonial-box-bg-color":b||void 0,"--ud-testimonial-box-hover-bg-color":d||void 0,"--ud-testimonial-box-txt-color":v||void 0,"--ud-testimonial-box-hover-txt-color":_||void 0,"--ud-testimonial-box-rating-color":m||void 0,"--ud-testimonial-box-rating-size":u?u+"px":void 0,"--ud-testimonial-box-name-color":x||void 0,"--ud-testimonial-box-hover-name-color":C||void 0,"--ud-testimonial-box-designation-color":h||void 0,"--ud-testimonial-box-hover-designation-color":p||void 0,"--ud-testimonial-box-image-height":a.height?a.height+"px":void 0,"--ud-testimonial-box-image-width":a.width?a.width+"px":void 0,"--ud-testimonial-box-image-radius":a.radius?a.radius+"px":void 0,"--ud-testimonial-box-image-object-fit":a.objectFit?a.objectFit:"unset"}}),"style-five"===f&&(0,n.createElement)("div",{className:"ud-testimonial-box__img"},a&&(0,n.createElement)("img",{src:a.url,alt:a.title})),(0,n.createElement)("div",{className:"ud-testimonial-box__text"},(0,n.createElement)(i.RichText.Content,{tagName:"p",value:o})),(0,n.createElement)("div",{className:"ud-testimonial-box__author"},a&&(0,n.createElement)("img",{src:a.url,alt:a.alt,title:a.title}),(0,n.createElement)("div",{className:"ud-testimonial-box__author__info"},(0,n.createElement)(i.RichText.Content,{tagName:"h3",value:t,className:"ud-testimonial-box__author__info__name"}),(0,n.createElement)(i.RichText.Content,{tagName:"h4",value:l,className:"ud-testimonial-box__author__info__designation"}),(0,n.createElement)("div",{className:"ud-testimonial-box__author__info__ratings"},(0,n.createElement)(c,{rating:s,ratingColor:m,ratingScale:g})))),"style-six"===f&&(0,n.createElement)("p",{className:"ud-testimonial-box__star"},"★★★★★"),(0,n.createElement)("div",{className:"ud-testimonial-box__date"},(0,n.createElement)(i.RichText.Content,{tagName:"span",value:r})))}})},967:(e,t)=>{var l;!function(){"use strict";var o={}.hasOwnProperty;function a(){for(var e="",t=0;t<arguments.length;t++){var l=arguments[t];l&&(e=i(e,n(l)))}return e}function n(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return a.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var l in e)o.call(e,l)&&e[l]&&(t=i(t,l));return t}function i(e,t){return t?e?e+" "+t:e+t:e}e.exports?(a.default=a,e.exports=a):void 0===(l=function(){return a}.apply(t,[]))||(e.exports=l)}()}},l={};function o(e){var a=l[e];if(void 0!==a)return a.exports;var n=l[e]={exports:{}};return t[e](n,n.exports,o),n.exports}o.m=t,e=[],o.O=(t,l,a,n)=>{if(!l){var i=1/0;for(c=0;c<e.length;c++){for(var[l,a,n]=e[c],r=!0,s=0;s<l.length;s++)(!1&n||i>=n)&&Object.keys(o.O).every((e=>o.O[e](l[s])))?l.splice(s--,1):(r=!1,n<i&&(i=n));if(r){e.splice(c--,1);var m=a();void 0!==m&&(t=m)}}return t}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[l,a,n]},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={743:0,405:0};o.O.j=t=>0===e[t];var t=(t,l)=>{var a,n,[i,r,s]=l,m=0;if(i.some((t=>0!==e[t]))){for(a in r)o.o(r,a)&&(o.m[a]=r[a]);if(s)var c=s(o)}for(t&&t(l);m<i.length;m++)n=i[m],o.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return o.O(c)},l=globalThis.webpackChunktestimoniax=globalThis.webpackChunktestimoniax||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))})();var a=o.O(void 0,[405],(()=>o(445)));a=o.O(a)})();