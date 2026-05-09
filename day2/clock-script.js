function setDate(){
    const secondHand = document.querySelector('.second-hand')
    const minsHand = document.querySelector('.min-hand')
    const hourHand = document.querySelector('.hour-hand')
    const now = new Date();
    const seconds = now.getSeconds()
    const minuts = now.getMinutes()
    const hours = now.getHours()
    const secondDegrees = ((seconds / 60) * 360) + 90;
    const minutsDegree = ((minuts / 60) * 360) +90;
    const hoursDegree = ((hours / 12) * 360) + 90;
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
    minsHand.style.transform = `rotate(${minutsDegree}deg)`;
    hourHand.style.transform = `rotate(${hoursDegree}deg)`
    console.log(seconds)
    console.log(minuts)
    console.log((hours))
}
setInterval(setDate, 1000);