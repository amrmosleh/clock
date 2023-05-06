aetInterval(setClock, 1000)

function setClock() {
    const currentDate = new Date()
    const secondsRatio = currentDate.getMinutes() / 60
    const minutesDate = (secondsRatio + currentDate.getSeconds()) / 60
    const hoursRatio = (minutesDate + currentDate.getHours()) / 12
}