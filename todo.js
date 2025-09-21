const todoapp= document.querySelector('.todoapp');
const inputtext= todoapp.querySelector('.new-todo');
const todoListul= todoapp.querySelector('.todo-list');
const addbutton= todoapp.querySelector('.submitbtn');
const selectsectionmain = todoapp.querySelector('.main');   
/* const editbtn=selectsectionmain.querySelector('.edit');
const deletebtn=selectsectionmain.querySelector('.delete');
 */

const time= new Date();
const month= time.getMonth()+1;
const date= time.getDate();
const year= time.getFullYear();
const fulldate= `${date}-${month}-${year}`;

const ttime= time.getHours();
const tmin= time.getMinutes();

const fulltime= `${ttime}:${tmin}`;


addbutton.addEventListener("click", (event)=>{
   
   event.preventDefault();
   console.log(inputtext.value);

   if(inputtext.value===""){
    alert("Please enter a task");
    return;
   }


   const createli= document.createElement("li");
   createli.classList.add("todo-list_lists");
createli.innerHTML=inputtext.value;

const createdate=document.createElement("p");
createdate.classList.add("date");
createdate.innerText=`Last Created: ${fulldate} , ${fulltime}`;


   const createbtnedt= document.createElement("button");
   createbtnedt.classList.add("edit");
   createbtnedt.innerHTML=`<i class="fa-duotone fa-solid fa-pen-to-square"></i>`;

    const createbtndel= document.createElement("button");
    createbtndel.classList.add("delete");
    createbtndel.innerHTML=`<i class="fa-duotone fa-solid fa-eraser"></i>`;



      createli.appendChild(createdate);
    createli.appendChild(createbtnedt);
  
createli.appendChild(createbtndel);
todoListul.appendChild(createli);

   

inputtext.value="";



/* edit button */
createbtnedt.addEventListener("click", ()=>{
inputtext.value=createli.innerText;




})

/* Delete button */
createbtndel.addEventListener("click", ()=>{
createli.remove();

})


});


