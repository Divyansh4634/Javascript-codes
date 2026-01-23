// stack(primitive) -->copy milti hai
// heap(non-primitive)--> reference milta hai

let my_name="Naitik";// let ko redeclare nhi kr sakte
ghr=my_name;//ghr me my name ki copy mili hai original(reference) nahi
ghr="Divyansh";
console.log(my_name);//Naitik
console.log(ghr);//Divyansh
