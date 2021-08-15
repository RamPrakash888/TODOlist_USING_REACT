import React,{useState} from 'react';
import ReactDOM  from 'react-dom';
import './index.css';
const AddTask=({addTask})=>{
  const[value,updateValue]=useState("");

const handleSubmit = e=>{
  e.preventDefault();
  if(value!=="")
  {
    addTask(value)
    updateValue("");
  }
};
return(
  <form onSubmit={handleSubmit}>
    
  <input type="text" value={value} placeholder="ENTER YOUR TASK"
  onChange={e=>updateValue(e.target.value)} />
  <button type="submit"><i class="material-icons">add</i></button>
  
  </form>
);
}
const Todo = ()=>{
  const addTask = text =>updatetasks([...tasks,{text}]);
  const[tasks,updatetasks]=useState(
    [{
      Text:"WAKE UP     ",
      isover:false
    },
    {
      Text:"DO EXERCISE  ",
      isover:false
    },
    {
      Text:"BREAKFAST    ",
      isover:false
    }]);
const toggleTask=index =>{
  const newTask=[...tasks];
  if(newTask[index].isover)
  {
    newTask[index].isover=false;
  }else
  {
    newTask[index].isover=true;
  }
  updatetasks(newTask);
}
const removeTask=index =>{
  const newTask=[...tasks];
  newTask.splice(index,1);
  updatetasks(newTask);
}
    return(
      <div className="listtasks">
        {tasks.map((task,index)=>(
          <div className="intask">
            <span onClick={()=>toggleTask(index)} className={task.isover? "task-name completed-task":"task-name"}>
      
              {task.Text}
            </span>
            <button onClick={()=>removeTask(index)}><i class="material-icons">delete</i></button>
            </div>
         ))}
         <AddTask addTask={addTask}/>
      </div>
    );
} 
ReactDOM.render(<Todo />,document.getElementById('root'));