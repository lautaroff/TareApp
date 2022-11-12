( () => {

    const btn = document.querySelector("[data-form-btn]");
    
    btn.addEventListener("click", crearTarea);
    
    function crearTarea(evento){
        evento.preventDefault();
        const input = document.querySelector("[data-form-input]");
        if( input.value != ''){
            const lista = document.querySelector("[data-list]");
            const task = document.createElement("li");
            task.classList.add("card");
            const value = input.value;
            input.value = "";
            const taskContent = document.createElement('div');
            taskContent.appendChild(checkClomplete());
            const titleTask = document.createElement('span');
            titleTask.classList.add('task');
            titleTask.innerText = value;
            taskContent.appendChild(titleTask);
            
            task.appendChild(taskContent);
            task.appendChild(deleteicon());
            lista.appendChild(task);
        }
    
    }
    
    function checkClomplete(){
        const i = document.createElement('i');
        i.classList.add("far", "fa-check-square", "icon");
        i.addEventListener("click", taskComplete);
        return i;
    }
    
    function taskComplete(event){
        const element = event.target;
        element.classList.toggle('fas');
        element.classList.toggle('completeIcon');
        element.classList.toggle('far');
    }
    function deleteicon (){
        const i = document.createElement('i');
        i.classList.add('fas', 'fa-trash-alt', 'trashIcon','icon');
        i.addEventListener('click', deleteTask)
        return i;
    }
    
    function deleteTask(event){
        const parent = event.target.parentElement
        parent.remove()
    }
    
    })()