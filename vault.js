'use strict';
module.exports = function(){
  var storeCode = {};
  var setValue = function(key, value){
    storeCode[key] = value;
    return storeCode;
  }
  var getValue = function(key){
    if(storeCode.hasOwnProperty(key)){
      return storeCode[key];
    }else{
      return null;
    }
  }
  return {
    setValue:setValue,
    getValue:getValue
  }
}