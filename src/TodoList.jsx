import {useState} from 'react';
import {v4 as uuidv4} from "uuid";
export default function TodoList () {
    // by clicking on the Add button the new task will be added to the todo list.

    let [tasks , setTasks] = useState([{task:"First Task", id: uuidv4()}]);

    // the task written inside the input box will be added as new task to the list. 
    let [newTask , setNewTask] = useState("");

    //function for adding new task

    let addTask = ()=>{
        setTasks((prevTask)=>{
            return [...prevTask ,  {task:newTask , id : uuidv4()}];
        });
        setNewTask("");
    }
    let updateTaskValue = (event)=>{
        setNewTask(event.target.value);
    }
    let deleteTask = (id)=>{
        setTasks((previous)=>tasks.filter((previous)=> previous.id !=id));
    }
    let upperCaseAll = ()=>{
        setTasks((prevTask) =>
            
             prevTask.map((task)=>{
                return {
                     ...task,
                     task : task.task.toUpperCase(),
                };
            })
        );
    }
    let markDone = (id)=>{
              setTasks((prevTask)=>
                prevTask.map((task)=>{
                    if(task.id === id){
                        return{
                            ...task,
                            done:true,
                        }
                    }
                    else {
                        return task;
                    }
                })
            );
    }
        return (
        <div style={{border:"1px solid black",width:"480px",borderRadius:"10px",boxShadow:"5px 5px 10px gold"}}>
            <input type ="text"  onChange = {updateTaskValue} value = {newTask}  placeholder="add task" style={{marginTop:"20px"}} />
            <br /><br />
            <button onClick={addTask}>Add Task</button>
            <br /><br />
            <hr />
            <h4>I AM YOUR TO DO LIST &#128203;</h4>
            <ul>
                {tasks.map((task)=>{
                       return <li key = {task.id} style={{
                             display: "grid",
                             gridTemplateColumns: "1fr 120px 150px", 
                             alignItems: "center",
                             marginBottom: "8px",
                             columnGap: "10px",
                             marginRight:"10px",
  }}
                    >
                        <span style={{color:task.done ? "green":"black",
                           fontWeight:task.done ? "bold" : "normal"}}>
                        {task.task}</span>
                        <button onClick={()=> deleteTask(task.id)}>Delete</button>
                        <button onClick={()=> markDone(task.id)}>Done</button>
                        </li>
                 })}
            </ul>
            <br /><br />
            <button style={{marginBottom:"10px"}} onClick={upperCaseAll}>Upper Case All</button>
        </div>
    )
}