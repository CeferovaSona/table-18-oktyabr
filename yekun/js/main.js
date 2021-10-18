let inputName=document.querySelector("#name");
let inputSurname=document.querySelector("#surname");
let inputAge=document.querySelector("#age");
let table=document.querySelector(".table");
let addButton=document.querySelector("#button");
let checkButton=document.querySelector("#check");
let checkItem=document.querySelector(".btn");
const i = document.createElement('i')

let count=1;
addButton.addEventListener("click",addition);
checkButton.addEventListener("click",check);


function check(event) {
  checkItem.classList.toggle('strike');
  checkItem.appendChild(i);
  i.classList.toggle('fas');
  i.classList.toggle('fa-check')
}

function addition (event){
    if (inputName.value.length>3) {
      
        let changeableName=inputName.value;
        let changeableSurname=inputSurname.value;
        let changeableAge=inputAge.value;
        count=count+1;
        let template=`<tr> 
                       <td> ${count}</td>
                      <td> ${changeableName} </td>
                      <td> ${changeableSurname} </td>
                      <td> ${changeableAge}</td>
                      <td> <button id="check"><div class="btn"></div></button> </td>
                      </tr>
                      `  
                    table.innerHTML+=template;
                    checkButton.addEventListener("click",check);

    }
   else alert("Daxil edəcəyiniz ədə ən az 4 simvoldan ibaret olmalıdır")
                
               inputName.value="";
               inputSurname.value="";
               inputAge.value="";

              

              
};

checkButton.addEventListener("click",check);





