import { createTask } from "./addTask.js";
import { uniqueDates, orderDay } from "../services/date.js";
import dateElement  from './dateElement.js'
export const displayTasks = () => {
    const list = document.querySelector('[data-list]')
    const taskList = JSON.parse(localStorage.getItem("tasks")) ||[];
    
    const dates = uniqueDates(taskList)
    orderDay(dates)

    dates.forEach((date) => {
        const dateMoment = moment(date , "DD/MM/YYYY")
        list.appendChild(dateElement(date))
        taskList.forEach((task) => {
            const dateTask = moment(task.dateFormat, 'DD/MM/YYYY')
            const diff = dateMoment.diff(dateTask)
            if (diff === 0){
                list.appendChild(createTask(task))
            }
            
        });
    }) 
    
}