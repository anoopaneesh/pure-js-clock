setInterval(setClock, 1000)

function setClock() {
  const date = new Date()
  let seconds = date.getSeconds() * 6
  let minutes = date.getMinutes() * 6
  let hours = date.getHours()
  hours = hours % 12 || hours
  hours = hours * 30
  let secondHand = document.getElementById('second')
  let minuteHand = document.getElementById('minute')
  let hourHand = document.getElementById('hour')
  secondHand.style.setProperty('--rotation', seconds)
  minuteHand.style.setProperty('--rotation', minutes)
  hourHand.style.setProperty('--rotation', hours)
}

setClock()  
