"use strict";function _toConsumableArray(t){return _arrayWithoutHoles(t)||_iterableToArray(t)||_unsupportedIterableToArray(t)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,r){if(t){if("string"==typeof t)return _arrayLikeToArray(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?_arrayLikeToArray(t,r):void 0}}function _iterableToArray(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function _arrayWithoutHoles(t){if(Array.isArray(t))return _arrayLikeToArray(t)}function _arrayLikeToArray(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,a=new Array(r);e<r;e++)a[e]=t[e];return a}!function(){var t=document.createElement("link");t.href="./css/ground.css",t.rel="stylesheet",document.head.appendChild(t)}();var canvas=document.getElementById("canvas"),context=canvas.getContext("2d"),textInputElem=document.querySelector("#ground .text-input-cont input"),cellSize=10,cellSizeOver2=cellSize/2,cellCountX=40,cellCountY=10;canvas.width=cellSize*cellCountX,canvas.height=cellSize*cellCountY;for(var charArrData={0:[[1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1],[1,1,0,0,0,0,1,0,1,1],[1,1,0,0,1,1,0,0,1,1],[1,1,0,1,0,0,0,0,1,1],[1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1]],1:[[0,0,1,0,0,0,0,0,1,1],[0,1,1,0,0,0,0,0,1,1],[1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,1,1],[0,0,0,0,0,0,0,0,1,1]],2:[[1,1,0,0,1,1,1,1,1,1],[1,1,0,0,1,1,1,1,1,1],[1,1,0,0,1,1,0,0,1,1],[1,1,0,0,1,1,0,0,1,1],[1,1,0,0,1,1,0,0,1,1],[1,1,1,1,1,1,0,0,1,1],[1,1,1,1,1,1,0,0,1,1]],3:[[1,1,0,0,1,1,0,0,1,1],[1,1,0,0,1,1,0,0,1,1],[1,1,0,0,1,1,0,0,1,1],[1,1,0,0,1,1,0,0,1,1],[1,1,0,0,1,1,0,0,1,1],[1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1]],4:[[1,1,1,1,1,1,0,0,0,0],[1,1,1,1,1,1,0,0,0,0],[0,0,0,0,1,1,0,0,0,0],[0,0,0,0,1,1,0,0,0,0],[0,0,0,0,1,1,0,0,0,0],[1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1]],5:[[1,1,1,1,1,1,0,0,1,1],[1,1,1,1,1,1,0,0,1,1],[1,1,0,0,1,1,0,0,1,1],[1,1,0,0,1,1,0,0,1,1],[1,1,0,0,1,1,0,0,1,1],[1,1,0,0,1,1,1,1,1,1],[1,1,0,0,1,1,1,1,1,1]]},nullMatrix=[],i=0;i<cellCountY;i++)nullMatrix.push(0);for(var textDataArr,gapMatrix=[],_i=0;_i<cellCountX+1;_i++)gapMatrix.push(nullMatrix);for(var resetTextArr=function(){var t=textInputElem.value.split("").filter(function(t){return t in charArrData});textDataArr=[].concat(gapMatrix);for(var r=0;r<t.length;r++){textDataArr.push.apply(textDataArr,_toConsumableArray(charArrData[t[r]]).concat([nullMatrix]))}textDataArrOffset=0},bulbRadius=cellSize/4,bulbOffColor="#f001",bulbOnColor="#f00",bulbConfigArr=[],_i3=0;_i3<cellCountX;_i3++){bulbConfigArr[_i3]=[];for(var j=0;j<cellCountY;j++)bulbConfigArr[_i3][j]={x:_i3*cellSize+cellSizeOver2,y:j*cellSize+cellSizeOver2}}var textDataArrOffset=0,twoPi=2*Math.PI,dispScrollSpeed=10,renderDisp=function t(){context.clearRect(0,0,canvas.width,canvas.height);for(var r=textDataArrOffset,e=0;e<cellCountX;e++){for(var a=0;a<textDataArr[r].length;a++){context.fillStyle=textDataArr[r][a]?bulbOnColor:bulbOffColor;var n=bulbConfigArr[e][a];context.beginPath(),context.arc(n.x,n.y,bulbRadius,0,twoPi),context.fill()}r=++r===textDataArr.length?0:r}textDataArrOffset=++textDataArrOffset===textDataArr.length?0:textDataArrOffset,setTimeout(t,1e3/dispScrollSpeed)},initGround=function(){resetTextArr(),renderDisp()};