function getAttr(node, prop) {
 
  if (isString(node)) node = getNode(node);
 
  if(!isString(prop)) throw typeError('getArrt 함수에 전달된 두 번째 인수는 문자 타입 이어야 합니다.')
 
    return node.getAttribute(prop);
}


// 미니 과제 setAttr 만들기
// function setAttr(node, prop, value) {
//   if (isString(node)) node = getNode(node);

//   if (!isString(node || prop)) {
//     throw new TypeError('setAttr 함수의 두 번째 인수는 문자열 타입이어야 합니다.');
//   }

//   node.setAttribute(prop, value);
// }

function setAttr(node,prop,value){
  
  if(isString(node)) node = getNode(node);
  if(!isString(prop)) throw typeError('setAttr 함수의 두 번째 인수는 문자 타입 이어야 합니다.');
  if(isUndefined(value) || value === ''){
    
    node.removeAttribute(prop);
    return;
  }

  if( prop.startsWith('data') ) {
    prop = prop.slice(5);
    node.dataset[prop] = value;
    return;
  }

  node.setAttribute(prop,value);

}

setAttr('.about','data-name','안녕');




// function attr(node,prop,value){
//   if(!value){
//     return getAttr(node,prop)
//   }else{
//     setAttr(node,prop,value)
//   }
// }

const attr = (node,prop,value) => !value ? getAttr(node,prop) : setAttr(node,prop,value)

attr('.about', 'id') // getter
attr('.about', 'id', 'star') // setter