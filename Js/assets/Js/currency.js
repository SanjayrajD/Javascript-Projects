let select = document.querySelectorAll(".currency1")
let button = document.querySelector(".bnm")
let second = document.getElementById("first")
fetch('https://api.frankfurter.app/currencies')
.then(res => res.json())
.then(res => convert(res))


function convert(res){
    let arr = Object.entries(res)
    for(let i=0;i<arr.length;i++)
    {
        let opt = `<option value="${arr[i][0]}">${arr[i][0]}</option>`
        select[0].innerHTML += opt 
        select[1].innerHTML += opt

    }
}

button.addEventListener('click', () => {
    let one = select[0].value 
    let two = select[1].value 
    let three = second.value
    if(one===two)
    {
        alert("Choose Different Currency")
    }
    else {
        change(one,two,three)
    }
})

function change(one,two,three)
{
    const host = 'api.frankfurter.app';
    fetch(`https://${host}/latest?amount=${three}&from=${one}&to=${two}`)
    .then(resp => resp.json())
    .then((data) => {
      document.querySelector("#second").value = Object.values(data.rates)
  });
}
