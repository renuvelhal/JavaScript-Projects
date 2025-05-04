<!DOCTYPE html>
<html>
    <head>
        <TITLE>
            TuDu List
        </TITLE>
        <styles>
            body{
                font-family: Arial, sans-serif;
                padding: 30px;
                text-align: center;
              }
        
              input, button {
                padding: 10px;
                font-size: 16px;
              }
        
              ul {
                list-style-type: none;
                padding: 0;
                margin-top: 20px;
              }
        
              li {
                margin: 10px 0;
                font-size: 18px;
              }
        
              .delete-btn {
                margin-left: 10px;
                color: red;
                cursor: pointer;
            }
        </styles>
    </head>
    <body>
        <h2>Todo List</h2>
        <input type="text" id="taskInput" placeholder="Enter your task"/>
        <button onclick="addTask()">Add</button>
        <ul id="taskList"></ul>
        <script>
            const taskInput=document.getElementById("taskInput");
            const taskList=document.getElementById("taskList");
            function addTask() {
            const taskText = taskInput.value.trim(); // remove extra spaces

            if (taskText === "") {
            alert("Please enter a task!");
            return;
            }
            const li=document.createElement("li");
            li.textContent=taskText;
            const deleteBtn=document.createElement("span");
            deleteBtn.textContent="❌";
            deleteBtn.className="delete-btn";
            deleteBtn.onclick=function(){
                taskList.removeChild(li);

            };
            li.appendChild(deleteBtn);
            taskList.appendChild(li);
            taskInput.value="";
        </script>
    </body>
</html>