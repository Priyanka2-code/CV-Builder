function addnewWEField(){
    //console.log("Adding new field");
   let newNode=document.createElement("textarea");
   newNode.classList.add("form-control");
   newNode.classList.add("weField");
   newNode.setAttribute("placeholder", "Enter here");

   let weOb = document.getElementById("we");
   let weAddButtonOb = document.getElementById("weAddButton");

   weOb.insertBefore(newNode, weAddButtonOb);
}
function addnewPRField(){
   // console.log("Adding new field");
   let newNode=document.createElement("textarea");
   newNode.classList.add("form-control");
   newNode.classList.add("prField");
   newNode.setAttribute("placeholder", "Enter your poject ");

   let prOb = document.getElementById("pr");
   let addnewPRFieldOb = document.getElementById("addnewPRField");

   prOb.insertBefore(newNode, addnewPRFieldOb);
}
function addnewAQField(){
    // console.log("Adding new field");
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqField");
    newNode.setAttribute("placeholder", "Enter here");
 
    let aqOb = document.getElementById("aq");
    let addnewAQFieldOb = document.getElementById("addnewAQField");
 
    aqOb.insertBefore(newNode, addnewAQFieldOb);
 }

 function addnewSField(){
   // console.log("Adding new field");
   let newNode=document.createElement("textarea");
   newNode.classList.add("form-control");
   newNode.classList.add("SField");
   newNode.setAttribute("placeholder", "Enter your skill");

   let skillOb = document.getElementById("skill");
   let addnewSFieldOb = document.getElementById("addnewSField");

   skillOb.insertBefore(newNode, addnewSFieldOb);
}

function addnewAField(){
   // console.log("Adding new field");
   let newNode=document.createElement("textarea");
   newNode.classList.add("form-control");
   newNode.classList.add("AField");
   newNode.setAttribute("placeholder", "Enter your Achievement");

   let achievOb = document.getElementById("achiev");
   let addnewAFieldOb = document.getElementById("addnewAField");

   achievOb.insertBefore(newNode, addnewAFieldOb);
}
 //generate cv

 function generateCV(){
   //console.log("Adding new field");

   let nameField=document.getElementById('nameField').value;
   let nameT=document.getElementById('nameT');
   nameT.innerHTML = nameField;


   document.getElementById("contactT").innerHTML=document.getElementById("contactField").value;

   document.getElementById("ghT").innerHTML=document.getElementById("ghField").value;

   document.getElementById("LIT").innerHTML=document.getElementById("LIField").value;

   document.getElementById("emailT").innerHTML=document.getElementById("emailField").value;

   document.getElementById("obT").innerHTML=document.getElementById("obField").value;

  //work experience

  let we= document.getElementsByClassName("weField");
  let str="";

  for(let e of we){
   str = str + `<li> ${e.value} </li>`;
  }
  document.getElementById("weT").innerHTML=str;

  //academic qualification
  let aq= document.getElementsByClassName("aqField");
  let str1="";

  for(let e of aq){
   str1 = str1 + `<li> ${e.value} </li>`;
  }
 document.getElementById("aqT").innerHTML=str1;

// skills
 let S= document.getElementsByClassName("SField");
  let str2="";

  for(let e of S){
   str2 = str2 + `<li> ${e.value} </li>`;
  }
 document.getElementById("skillT").innerHTML=str2;


 //projects
 let pr= document.getElementsByClassName("prField");
 let str3="";

 for(let e of pr){
  str3 = str3 + `<li> ${e.value} </li>`;
 }
document.getElementById("projectT").innerHTML=str3; 

//achievement
let A= document.getElementsByClassName("AField");
let str4="";

  for(let e of A){
   str4 = str4 + `<li> ${e.value} </li>`;
  }
 document.getElementById("achievT").innerHTML=str4;

 //setting image

 let file=document.getElementById('imgField').files[0];
 console.log(file);
 let reader=new FileReader();
 reader.readAsDataURL(file);

 console.log(reader.result);

 //set image to template

 reader.onloadend=function(){
   document.getElementById('imgTemplate').src=reader.result;
 };

 document.getElementById("cv-form").style.display="none";
 document.getElementById("bottom").style.display="none";
 document.getElementById("carousel-1").style.display="none";
 document.getElementById("generatearea").style.display="none";
 document.getElementById("cv-template").style.display="block";
 }


 //printing cv

 function printCV(){
   window.print();
 }