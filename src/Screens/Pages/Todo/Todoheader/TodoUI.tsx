import React,{ChangeEvent, FC, useCallback, useEffect, useState} from 'react';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import Grid from "@mui/material/Grid";
import "../../../../App.css"
import "./todostyle.css"
import Container from '@mui/material/Container';
import { useDispatch, useSelector } from 'react-redux';
import TodoActions from '../../../../Services/Actions/TodoActions';
import TodoAPI from '../../../../Services/API/TodoAPI';
import ObjectToFormDataHelper from "../../../../Helpers/ObjectToFormDataHelper";
import { RootStore } from "../../../../Services/Store";
import { AddTodoModel } from '../../../../Services/Model/TodoModel';
import TodoListUI from '../List/TodoListUI';
import Link from '@mui/material/Link';
const TodoUI:FC =()=>{
  const tasks = useSelector((store: RootStore) => store.TodoReducers.tasks);
console.log(tasks)
    const [task,settask]=useState<string>("");
    const [deadline,setdeadline]=useState<number>(0);
    const dispatch=useDispatch()
    const handleTypeChange = useCallback((e: ChangeEvent<HTMLInputElement>) =>{
        if(e.target.name==="task"){
            settask(e.target.value);
        }else{
            setdeadline(Number(e.target.value));
        }
       
        
      
      },[]);
      

    const handleSubmit=useCallback(async()=>{
        console.log(`added ${task} deadline on  ${deadline}`)
        if(task!=="" && deadline!==0){
          const payload: AddTodoModel = {
            task: task,
            deadline: deadline,
          };
    
  
          dispatch(TodoActions.addTask(payload))
        }
 
    },[deadline, dispatch, task])
    useEffect(() => {

        dispatch(TodoActions.setTask());
      
    }, [dispatch]);
    return (
        <Container maxWidth="xs">
      <Grid container spacing={2}  alignItems="center" maxWidth="100%" justifyContent="center" marginTop={10}>
        <Grid item xs={12}>
          <TextField type="text" label="Task" variant="standard" name="task" fullWidth onChange={handleTypeChange}/>
        </Grid>
        <Grid item xs={12}>
          <TextField
            type="number"
            label="Deadline (in Days)"
            name="deadline"
            variant="standard"
            fullWidth
            onChange={handleTypeChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" endIcon={<SendIcon />} onClick={()=>handleSubmit()} fullWidth>
            Add Task
          </Button>
        </Grid>
      </Grid>
      <div className="todoList">
     
        <TodoListUI/>
      </div> 
      <div className="agreementfooter">
      <Grid container spacing={2}>
        <Grid item xs={6}>
      <Link href="/termsandconditions">Terms and Condition</Link>
      </Grid>
      <Grid item xs={6}>
      <Link href="/privacyandpolicy">Privacy and Policy</Link>

      </Grid>
      </Grid>
      </div>
    </Container>
     );
}

export default TodoUI;