const account_id=144553//const or let is used mostly at this time
let account_email="naitik.2422@gmail.com"//let-->use as single time only  var..> use multiple times
var account_password="12345"// it is use in ancient times bcz error or issue in block scope{} or functional scope{} 
account_city="jaipur"// it is not a good way
let account_state;//if not declare anything to variable,js set variable to undefined

// account_id=2 //error
account_email="hchch@google.com";
// console.log(account_email);//sabke liye alag alag console.log na likh k seedhe "console.table([account_id ,account_email  ,account_password ,account_city])"
console.table([account_id,account_email,account_password,account_city,account_state]);

