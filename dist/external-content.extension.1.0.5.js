(()=>{"use strict";const t={en:{"block.name":"DAM","preview.label":"External Content"},fr:{"block.name":"DAM","preview.label":"External Content"}};function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function e(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,o)}return e}function o(t,e,o){var r;return r=function(t,e){if("object"!=n(t)||!t)return t;var o=t[Symbol.toPrimitive];if(void 0!==o){var r=o.call(t,e||"default");if("object"!=n(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(e,"string"),(e="symbol"==n(r)?r:r+"")in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}var r={create:function(n,r,l){return Object.assign(function(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?e(Object(r),!0).forEach((function(n){o(t,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):e(Object(r)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))}))}return t}({stripoConfig:n,stripoApi:r,extensionBasePath:l,onBlockCopy:function(){}},function(n,e){var o=(n.externalContentConfig||{}).onBlockOpen;return{name:"ExternalContentBlock",iconClass:"es-icon-download",uniqueClassName:"external-content-block",canBeSavedToLibrary:!1,i18n:t,emptyContainerIcon:!0,blockName:"block.name",blockType:"structure",disableSettingsPanel:!0,isEnabled:function(){return!0},getBlockLayoutToDrop:function(){return'<td style="cursor: pointer">\n  <div class="externalContentDefault">\n    <style>\n      tr>td.external-content-block .externalContentDefault {\n          margin: 20px;\n          background-color: #ebfaff;\n          border: 1px dashed hsl(194, 96%, 70%);\n          transition: background-color 200ms ease;\n          border-radius: 3px;\n      }\n      tr>td.external-content-block .externalContentDefault p {\n          color: hsl(214, 93%, 22%);\n      }\n\n      tr>td.external-content-block .externalContentDefault:hover {\n          background-color: #bfdee9;\n      }\n    </style>\n    <p style="font-size: 18px; text-align: center; padding-top: 10px; padding-bottom: 10px">\n      Click to add a Content Fragment\n    </p>\n  </div>\n  <div class="externalContentContainer" style="display: none">\n    <p\n      class="externalContent"\n      style="text-align: center; padding-bottom: 10px"\n    ></p>\n  </div>\n</td>\n'},blockDropped:function(t){t.find(">.esd-structure-type").html(e.translate("block.name"))},onSelectBlock:function(t,n){n.showCustomBlockSettings||o(t)}}}(n,r)))}};self.externalContentExtension=r})();