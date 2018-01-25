'use strict';
const SLL = require('./sll');

const solution = module.exports = function (list1, list2) {
  if (!list1 || !list2) return null; //check for no input
  if (!(list1 instanceof SLL) || !(list2 instanceof SLL)) return null; //if input is not linked list
  let valArr = [], retList = new SLL; //declare empty array and return sll
  //iterate through first list, putting unique values in array
  for (let i = list1.head; i; i = i.next) {
    valArr[i.value] ? valArr[i.value]++ : valArr[i.value] = 1;}
  //interate through second list, checking for matches. if match, insert into the return list
  for (let j = list2.head; j; j = j.next) {
    if(valArr[j.value]) retList.insertHead(j.value);}
  return retList; // return new intersection SLL
};
