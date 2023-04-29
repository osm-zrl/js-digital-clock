const monthD = document.getElementById('monthD')
const yearD = document.getElementById('yearD')
const monthday = document.getElementById('monthday')
const dayD = document.querySelectorAll('.day')
console.log(dayD)
const hourD = document.getElementById('hourD')
const minuteD = document.getElementById('minuteD')
const secondD = document.getElementById('secondD')
const siding = document.querySelectorAll('.sideblock')
//const colors = ['#89e589','#6cbd6c','#5aa05a','#4b8f4b','#376f37','#224a22','#142d14','#102910','#0b220b','#041304']

const colors = ['#33FF00','#66FF00','#99FF00','#CCFF00'	,'#FFFF00','#FFCC00','#FF9900','#FF6600','#FF3300','#FF0000']
function totwo(num){
    if (num >=10){
        return String(num)
    }else{
        return "0"+String(num)
    }
}

setInterval(()=>{
    if (siding[9].style.background != ''){
        siding.forEach(element => {
            element.style.background = ''
        });
    }
    let datenow = new Date()
    //monthD.innerText = datenow.getMonth()
    switch (datenow.getMonth()){
        case 0:
            monthD.innerText = "january"
            break
        case 1:
            monthD.innerText = "February"
            break
        case 2:
            monthD.innerText = "March"
            break
        case 3:
            monthD.innerText = "April"
            break
        case 4:
            monthD.innerText = "May"
            break
        case 5:
            monthD.innerText = "June"
            break
        case 6:
            monthD.innerText = "July"
            break
        case 7:
            monthD.innerText = "August"
            break
        case 8:
            monthD.innerText = "September"
            break
        case 9:
            monthD.innerText = "October"
            break
        case 10:
            monthD.innerText = "November"
            break
        case 11:
            monthD.innerText = "December"
            break

    }
    
    switch (datenow.getDay()){
        case 1:
            dayD.forEach(element => {
                element.style.color = ''
            });
            dayD[0].style.color = 'white'
            break
        case 2:
            dayD.forEach(element => {
                element.style.color = ''
            });
            dayD[1].style.color = 'white'
            break
        case 3:
            dayD.forEach(element => {
                element.style.color = ''
            });
            dayD[2].style.color = 'white'
            break
        case 4:
            dayD.forEach(element => {
                element.style.color = ''
            });
            dayD[3].style.color = 'white'
            break
        case 5:
            dayD.forEach(element => {
                element.style.color = ''
            });
            dayD[4].style.color = 'white'
            break
        case 6:
            dayD.forEach(element => {
                element.style.color = ''
            });
            dayD[5].style.color = 'white'
            break
        case 7:
            dayD.forEach(element => {
                element.style.color = ''
            });
            dayD[6].style.color = 'white'
            break
            
    }

    hourD.innerText = totwo(datenow.getHours())
    minuteD.innerText = totwo(datenow.getMinutes()) 
    monthday.innerText = totwo(datenow.getDate())
    yearD.innerText = datenow.getFullYear()
    let seconds = datenow.getSeconds()
    
    secondD.innerText = totwo(seconds)

    if (seconds%10==0){
        for (let i = 0; i < 10; i++) {
            siding[i].style.background = colors[i]
            
        }  
    }
    else{
        for (let i = 0; i < seconds%10; i++) {
            siding[i].style.background = colors[i]
            
        }
    }
    

},1000)