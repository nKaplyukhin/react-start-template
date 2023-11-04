"use strict";(self.webpackChunkreact_start_template=self.webpackChunkreact_start_template||[]).push([[290],{"./src/stories/Modal.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Modal_stories});__webpack_require__("./node_modules/react/index.js");var _templateObject,_templateObject2,_templateObject3,_templateObject4,styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}var _Primary$parameters,_Primary$parameters2,_Primary$parameters2$,active=(0,styled_components_browser_esm.iv)(_templateObject||(_templateObject=_taggedTemplateLiteral(["\n  opacity: 1;\n  pointer-events: auto;\n"]))),StyledModalContainer=styled_components_browser_esm.ZP.div(_templateObject2||(_templateObject2=_taggedTemplateLiteral(["\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: opacity 0.3s ease-out;\n  opacity: 0;\n  pointer-events: none;\n  ",";\n"])),(function(_ref){return _ref.visible&&active})),StyledModal=styled_components_browser_esm.ZP.div(_templateObject3||(_templateObject3=_taggedTemplateLiteral(["\n  position: relative;\n  max-width: 500px;\n  min-height: 40vh;\n  width: 100%;\n  padding: 10px;\n  background-color: white;\n  box-shadow: 1px 1px 10px black;\n"]))),CloseButton=styled_components_browser_esm.ZP.button(_templateObject4||(_templateObject4=_taggedTemplateLiteral(["\n  position: absolute;\n  right: 5px;\n  top: 5px;\n  background: none;\n  border: none;\n  width: 15px;\n  height: 15px;\n  cursor: pointer;\n  transition: opacity 0.3s ease-out;\n  &:hover {\n    opacity: 0.5;\n  }\n  &::before,\n  &::after {\n    content: '';\n    position: absolute;\n    background-color: black;\n    left: 50%;\n    top: 0px;\n    width: 2px;\n    bottom: 0;\n  }\n  &::before {\n    transform: translateX(-50%) rotate(-45deg);\n  }\n  &::after {\n    transform: translateX(-50%) rotate(45deg);\n  }\n"]))),Modal=function Modal(_ref2){var visible=_ref2.visible,children=_ref2.children;return(0,jsx_runtime.jsx)(StyledModalContainer,{visible,children:(0,jsx_runtime.jsxs)(StyledModal,{children:[(0,jsx_runtime.jsx)(CloseButton,{}),children]})})};Modal.displayName="Modal";try{Modal.displayName="Modal",Modal.__docgenInfo={description:"",displayName:"Modal",props:{visible:{defaultValue:null,description:"",name:"visible",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/modal/Modal.tsx#Modal"]={docgenInfo:Modal.__docgenInfo,name:"Modal",path:"src/components/modal/Modal.tsx#Modal"})}catch(__react_docgen_typescript_loader_error){}function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const Modal_stories={title:"Example/Modal",component:Modal,tags:["autodocs"],argTypes:{visible:{defaultValue:!0},children:{input:"test"}}};var Primary={args:{visible:!0,children:"test"}};Primary.parameters=_objectSpread(_objectSpread({},Primary.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Primary$parameters=Primary.parameters)||void 0===_Primary$parameters?void 0:_Primary$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    visible: true,\n    children: 'test'\n  }\n}"},null===(_Primary$parameters2=Primary.parameters)||void 0===_Primary$parameters2||null===(_Primary$parameters2$=_Primary$parameters2.docs)||void 0===_Primary$parameters2$?void 0:_Primary$parameters2$.source)})});var __namedExportsOrder=["Primary"]}}]);