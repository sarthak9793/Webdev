// JSON does not support comments so I am writing them here

// JSON - stands for JavaScript Object Notation
// - It is a format for used sending data usually used by API's
// - Syntax: It is like javascript objects, but unlike javascript, every key is a double quoted string
// - When we request data from API's what we get is JSON which is basically a giant string. We need a method to convert it to a valid javascript object so we can access data from it

// 'data' intends to mimic data(JSON/'giant string') that we would get from an API
const data = `{"ticker":{"base":"BTC","target":"USD","price":"11288.49813464","volume":"91769.69699773","change":"-46.29462447"},"timestamp":1596510482,"success":true,"error":""}`
// Converting JSON to a valid javascript object
const dataobject = JSON.parse(data)
console.log(dataobject.ticker.price)
// Converting object to JSON
const jsonstring = JSON.stringify(dataobject)
console.log(jsonstring)