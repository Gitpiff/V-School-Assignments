//get all requests from api & list them on the DOM
function getAll() {
    axios.get("https://api.vschool.io/victor/todo")
        .then(response => {
            const todos = response.data

            listToDoOnTheDom(todos)
        })

        .catch(error => console.log(error))
}


getAll()



//list elements on the DOM
function listToDoOnTheDom(todos) {
    /* Before listing elements on the DOM we need to make sure we are not reprinting the same data everytime
     we add a new task, to do so we need to clear the container every time we list items on the DOM
     we can use inner.HTML - document.getElementById('todo-list').innerHTML = "" - however not all browsers
    support it, to be sure we are incluiding all browsers we can create a function - clearList() -  */

    clearList() //see line 128


    for (let i = 0; i < todos.length; i++) {
        // 1 - Create elements
        //create main container
        const todoContainer = document.createElement("div")
        const title = document.createElement("h1")
        const description = document.createElement("p")
        const budget = document.createElement("h2")
        const img = document.createElement("img")
        const checkbox = document.createElement("input")
        const deleteBtn = document.createElement("button")


        // 2 - Edit the elements
        title.textContent = todos[i].title
        description.textContent = todos[i].description
        budget.textContent = todos[i].budget
        img.classList.add("img-styles")
        todoContainer.classList.add("todoContainer")
        img.src = todos[i].imgUrl // ==> can be used too -img.setAttribute("src", todos[i].imgUrl) -
        checkbox.setAttribute("type", "checkbox")
        checkbox.checked = todos[i].completed
        deleteBtn.textContent = "Delete"



        // 3 - Append the elements
        todoContainer.appendChild(title)
        todoContainer.appendChild(description)
        todoContainer.appendChild(budget)
        todoContainer.appendChild(img)
        todoContainer.appendChild(checkbox)
        todoContainer.appendChild(deleteBtn)
        document.getElementById("todo-list").appendChild(todoContainer)






        //line-through the todos[i]._id if checkbox.checked
        checkbox.addEventListener("change", (e) => {
            //check for 2 scenarios
            //if task completed line-through

            if (checkbox.checked) {
                // title.style.textDecoration = "line-through" ==> can be used, but a css class is better.
                //if an item has been marked as completed then completed: true
                axios.put("https://api.vschool.io/victor/todo/" + todos[i]._id, { completed: true })
                    .then(response => {
                        title.classList.add("completed") //class used in CSS file
                        console.log(response)
                    })
                    .catch(error => console.log(error))
                //item has been marked as incompete so it was completed incomplete false

            } else {
                axios.put("https://api.vschool.io/victor/todo/" + todos[i]._id, { completed: false })
                    .then(response => {
                        title.classList.remove("completed")
                        console.log(response)
                    })
                    .catch(error => console.log(error))
            }

        })



        //delete task
        deleteBtn.addEventListener("click", () => {
            axios.delete("https://api.vschool.io/victor/todo/" + todos[i]._id)
            const container = deleteBtn.parentNode
            document.getElementById("todo-list").removeChild(container)
                .then(response => console.log(response))
                .catch(error => console.log(error))

        })


    }
}

//add task
const todoForm = document.todoForm

todoForm.addEventListener("submit", (event) => {
    event.preventDefault()



    const newTodo = {
        title: todoForm.task.value,
        description: todoForm.description.value,
        budget: todoForm.budget.value,
        imgUrl: todoForm.image.value
    }

    todoForm.title.value = ""
    todoForm.description.value = ""
    todoForm.budget.value = ""
    todoForm.image.value = ""

    axios.post("https://api.vschool.io/victor/todo", newTodo)
        .then(response => getAll())
        .catch(error => console.log(error))
})


//clear the DOM before adding a new task
function clearList() {
    const el = document.getElementById("todo-list")
    while (el.firstChild) {
        el.removeChild(el.firstChild)
    }
}


