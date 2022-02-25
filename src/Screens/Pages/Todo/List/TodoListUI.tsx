import React,{useState,FC,useCallback} from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import { useSelector ,useDispatch} from 'react-redux';
import { RootStore } from '../../../../Services/Store';
import TodoActions from '../../../../Services/Actions/TodoActions';
import { UpdateTodoModel } from '../../../../Services/Model/TodoModel';

const TodoListUI: FC=() =>{
    const [checked, setChecked] = useState<number[]>([]);
    const tasks = useSelector((store: RootStore) => store.TodoReducers.tasks);
    const dispatch=useDispatch();
    const handleToggle = useCallback((value:number,tasknumber:number,completed:number) => () => {
    //     const currentIndex = checked.indexOf(value);
    //     const newChecked = [...checked];
    // console.log(currentIndex)
        // if (currentIndex === -1) {
        //   newChecked.push(value);
        if(completed){
            const payload: UpdateTodoModel = {
                taskno: tasknumber,
              };
              dispatch(TodoActions.uncheckedTask(payload))
            
        }else{
            const payload: UpdateTodoModel = {
                taskno: tasknumber,
              };
              dispatch(TodoActions.completeTask(payload))
              
        }
         
       
        // } else {
        //   newChecked.splice(currentIndex, 1);
       
    
        // setChecked(newChecked);
 
      },[dispatch]);
    return (
        <List sx={{ width: '100%', maxWidth: "100%", bgcolor: 'background.paper' }}>
      {tasks?.map((value:any) => {
        const labelId = `checkbox-list-label-${value}`;

        return (
          <ListItem
            key={value?.takno}
            disablePadding
          >
            <ListItemButton role={undefined} onClick={handleToggle(value,value?.taskno,value?.completedAt)} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={value?.completedAt? true: checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                  key={value?.taskno}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={`Task: ${value?.task} Deadline: ${value?.deadline} day/s`} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
    );
}

export default TodoListUI;