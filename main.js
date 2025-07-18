let theInput = document.getElementById("task");
let btn = document.getElementById("plus");
let content = document.getElementsByClassName("task-content")[0];
let noTask = document.getElementsByClassName("No-tasks-massage")[0];
let count = document.getElementById("task-count");
let completed = document.getElementById("task-completed");
let numberTask = parseInt(count.textContent) || 0;
let taskDone = parseInt(completed.value) || 0;
window.onload = function () {
  theInput.focus();
};
let arr = [];

btn.onclick = function () {
  const taskText = theInput.value.trim();

  console.log(`${arr.includes(taskText)}  is  a ${taskText}`);
  if (!taskText) {
    Swal.fire("مرحباً بك!", "الرجاء ادخال  مهمة", "success");

    console.log(" العنصر  فارغ");
    return;
  }

  if (arr.includes(taskText)) {
    Swal.fire("مرحباً بك!", "    المهمه  مكرره", "Not  success");

    console.log(" العنصر  مكرر");
    return;
  }
  // noTask.remove();
   noTask.setAttribute("style","display: none;");
  Swal.fire("The task added !");
  arr.push(taskText);
  let mainSpan = document.createElement("span");
  let delet = document.createElement("span");

  let myText = document.createTextNode(theInput.value);
  let deletText = document.createTextNode("Delet");

  mainSpan.className = "task-box"; //mainSpan.setAttribute("class", "task-box");
  delet.className = "delet"; //delet.setAttribute("class", "delet");
  mainSpan.appendChild(myText);
  delet.appendChild(deletText);

  mainSpan.appendChild(delet);
  content.appendChild(mainSpan);
  theInput.value = "";
  theInput.focus();
  count.textContent = numberTask++ + 1;
  console.log(" تمت اضافة العنصر  ");
  console.log(arr.length);

  mainSpan.onclick = function () {
    if (mainSpan.classList.contains("task-clicked")) {
    } else {
      mainSpan.classList.add("task-clicked");
      completed.textContent = taskDone++ + 1;
    }
  };

  delet.onclick = function () {
   
    console.log("تم  حذف  العنصر   ");
    completed.textContent = taskDone-- - 1;
    mainSpan.remove(); 
      count.textContent = numberTask-- - 1;
    if( numberTask===0){
   noTask.setAttribute("style","display:flex;");
 
    }
  arr.pop(taskText);

  };
};

// //  عند  الضغط على زر  انشاءته  داينمك
// document.addEventListener("click", function (e) {
//   if (e.target.className == "delet") {
//     e.target.parentNode.remove();
//     console.log("delete is  clickeed  ");
//   }
  


//   if (e.target.classList.contains('task-box')) {
//     e.target.classList.toggle("task-clicked"); 
//     console.log("taskk is  clickeed");
//   }
// });
