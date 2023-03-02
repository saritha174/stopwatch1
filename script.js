//access the elements
let Display = document.querySelector('.DisplayTimer')
//Initialize the values to zero
let[hours, minutes, seconds, milliseconds] = [0,0,0,0]
let int = null
//start
document.getElementById('start-btn').addEventListener('click',()=>{
    if(int != null){
        clearInterval(int)
    }
    int = setInterval(DisplayTimer,10)

})
//stop
document.getElementById('stop-btn').addEventListener('click',()=>{
    clearInterval(int)
})
//reset
document.getElementById('reset-btn').addEventListener('click',()=>{
    clearInterval(int)
    let [hours, minutes, seconds, milliseconds] = [0,0,0,0]
    Display.innerHTML = `00:00:00:00`

})
//display timer function
function DisplayTimer(){
    milliseconds++
    if(milliseconds==1000){
        milliseconds = 0
        seconds++
        if(seconds==60){
            seconds=0
            minutes++
            if(minutes==60){
                minutes=0
                hours++
            }
        }
    }
    let h=hours<10? '0'+hours:hours
    let m=minutes<10? '0'+minutes:minutes
    let s=seconds<10? '0'+seconds:seconds
    let ms = milliseconds<100? '00'+milliseconds:milliseconds<10 ?'0'+milliseconds:milliseconds
    Display.innerHTML = `${h}:${m}:${s}:${ms}`
}