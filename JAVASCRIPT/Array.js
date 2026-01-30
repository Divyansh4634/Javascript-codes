///Array: In js we can store more than 1 datatype elements in our array;
// const arr=[2,3,4,5,6,7,"hello"];
// console.log(arr[6])//accessing by indexes

//2nd type for declaring Array
const myarr2=new Array(1,2,3,4,5)
// console.log(myarr2);
// myarr2.push(5,6,7)
// console.log(myarr2);
// myarr2.pop()
// console.log(myarr2);//console.log(myarr2.pop())//--> For checking deleted value of array...
// myarr2.unshift(8)//starting me 8 add hoyegaaa....
// console.log(myarr2);
// console.log(myarr2);//for shift funct()
// myarr2.shift()//Sirf phela element hata degaaaa...
// console.log(myarr2);
// console.log(myarr2.indexOf(3));
// console.log(myarr2.includes(2));//true

//slice...    
// const myarr2=new Array(0,1,2,3,4,5)
// console.log("Org arr:",myarr2);
// const myna=myarr2.slice(1,3)
// console.log("C1 Slice:",myna);
//isme end nhi aata hai

//splice...
// console.log("O",myarr2);
// myna1=myarr2.splice(1,3)
// console.log("C2 Splice:",myna1);
//isme end to aata hai saath k saath ye do kaam krta hai phela:iska jo output hai wo main array se cut hota hai or 
// dusra: ye original array me cut karta hai.
// console.log("My aRRay:",myarr2);

// const Marvel_heroes=["Thor","Ironman","Spiderman"]//ham boolean 

// const dcHeroes=["Superman","Batman","Flash"]
// console.log(Marvel_heroes);
// console.log(dcHeroes);

// console.log(Marvel_heroes. push(dcHeroes));//4:0 se start hui hai or ye 3 rd index pae add hui hai dc heroes ki array tbhi ye 4 de rha hai

// push:---Array के end में नया element जोड़ता है (single या multiple)
// Marvel_heroes. push(dcHeroes);//push and concatenate(concat) are same
// console.log(Marvel_heroes);
// console.log(typeof(Marvel_heroes));//object
// console.log((Marvel_heroes).length);//4(Actual-count of array elements);
// console.log(Marvel_heroes[3][0])//Superman
// console.log(Marvel_heroes[2][0])//S


// concat:---दो arrays को merge करके नया array बनाता 

// Marvel_heroes.concat(dcHeroes);//works as push()
// console.log(Marvel_heroes);

//  const all_heroes=Marvel_heroes.concat(dcHeroes);
// console.log(all_heroes)//Combined array(new array)




//Spreading of array:---

// const dcHeroes = ["Superman", "Batman", "Flash"];
// const Marvel_heroes = ["Thor", "Ironman", "Spiderman"];

// const All_spread = [...Marvel_heroes, ...dcHeroes];// this method is most widely used or ... is spread operator
// console.log(All_spread);// ["Thor", "Ironman", "Spiderman", "Superman", "Batman", "Flash"]



//Some IN case array condition(using of flat()-- isme kitni depth tak solve karna hai ye{Exact}batana hota hai nhi to flat(infinity) dedo...)

// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
// const real_another_array = another_array.flat(Infinity);
// console.log(real_another_array);// Output: [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]


// console.log(Array.isArray("Naitik")); //Output: false
// console.log(Array.from("Hitesh")); // Output: ["H", "i", "t", "e", "s", "h"]














