// stack(primitive) -->copy milti hai:stack me copy badalne se original nhi badlta hai.
// heap(non-primitive)--> reference milta hai:heap me copy badalne se original badlta hai.

let my_name="Naitik";// let ko redeclare nhi kr sakte
ghr=my_name;//ghr me my name ki copy mili hai original(reference) nahi
ghr="Divyansh";
console.log(my_name);//Naitik
console.log(ghr);//Divyansh
