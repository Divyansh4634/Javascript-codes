//date(object)--> kaam chal rha hai temporal ko global object bnane ka for accessing dates

let d=new Date()        

// console.log((d.toDateString()));//Sat Jan 24 2026
// console.log(d.toISOString());//2026-01-24T10:29:10.071Z
// console.log(d.toLocaleDateString());//1/24/2026
// console.log(d.toString());//Sat Jan 24 2026 16:00:05 GMT+0530 (India Standard Time)
// console.log(d.toTimeString());//16:00:40 GMT+0530 (India Standard Time)
// console.log(`Aaj ki Date is:   ${d.getDate()}\n     hai..` );
// console.log(d.getMonth());//0--> january
// console.log(d.getFullYear());//2026
// console.log(typeof (d));

//Date only
// let MyCdate=new Date(2026,0,26);
// console.log(MyCdate.toDateString());//monday jan 26 2026;

//Date with time
// let MyCdateWT=new Date(2026,0,26,13,0,0);//13--> 0 do to time raat ka 12 am ho jaayega
// console.log(MyCdateWT.toLocaleString());

// yyyy-mm-dd-->DATABASES; dd-mm-yyyy-->India; mm-dd-yyyy-->USA;
// let indDate=new Date("2026-01-26")
// console.log(indDate.toLocaleString());

// let myTimeStamp=Date.now()
// console.log(myTimeStamp);
// console.log(MyCdate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newdate=new Date(Date.now());
weekday=newdate.toLocaleString('default',{// weekday me store kiyaaa...
    weekday:"long",
})
console.log(weekday);








