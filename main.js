const btnNext = document.querySelector('.btn-next')
const btnPrev = document.querySelector('.btn-prev')
const btnPosts = document.querySelector('.btn-posts')
const block = document.querySelector('.block')
let num = 1

const changeTask = () => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${num}`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(todoItem => {
            console.log(todoItem)
            block.innerHTML = `
                <div class="card">
                    <h3>${todoItem.title}</h3>
                    <h3>${todoItem.completed}</h3>
                    <h3>${todoItem.id}</h3>
                </div>
            `
        })
}

btnNext.onclick = () => {
    num++
    changeTask()
}

btnPrev.onclick = () => {
    if (num > 1) {
        num--
    }
    changeTask()
}



btnPosts.onclick = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(postItems => {
            console.log(postItems)
    })
}