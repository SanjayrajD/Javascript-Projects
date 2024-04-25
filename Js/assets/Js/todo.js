let select = document.querySelector("#select")
let button =  document.querySelector("#button")
let result= document.querySelector(".result")
let arr = [];
window.onload = () => {
    arr = JSON.parse(localStorage.getItem('arr')) || []
    arr.forEach(todo => addsum(todo))
}

button.addEventListener('click', () => {
    arr.push(select.value)
    localStorage.setItem('arr',JSON.stringify(arr))
    addsum(select.value) 
    select.value = '' 
})

function addsum(todo){
    let para = document.createElement('p')
    para.innerText = todo
    result.appendChild(para)
    localStorage.setItem('arr',JSON.stringify(arr))
    para.addEventListener('click', () => {
        para.style.textDecoration = 'line-through'
        remove(todo)
    })
    para.addEventListener('dblclick', () => {
       result.removeChild(para)
        remove(todo)
    })
}

function remove(todo){
    let index = arr.indexOf(todo)
    if(index>-1)
    {
        arr.splice(index,1)
    }
    localStorage.setItem('arr',JSON.stringify(arr))
}