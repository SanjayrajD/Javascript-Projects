
function time()
{
    let digital = new Date()
    let hrs = digital.getHours()
    let mins = zero(digital.getMinutes())
    let sec = zero(digital.getSeconds())
    if(hrs>12)
    {
        hrs = hrs-12
        document.querySelector("#AM").innerHTML = "PM"
    }
    document.querySelector("#hours").innerHTML = zero(hrs)
    document.querySelector("#minutes").innerHTML = mins
    document.querySelector("#seconds").innerHTML = sec
}

function zero(sum){
    return sum<10?"0"+sum:sum
}
setInterval(time,500)