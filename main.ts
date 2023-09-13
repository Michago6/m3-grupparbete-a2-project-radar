radio.onReceivedNumber(function (receivedNumber) {
	
})
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.pause(100)
    basic.showNumber(0 - ymax - 45)
    basic.pause(2000)
    basic.showNumber(3)
})
let ymax = 0
basic.showNumber(3)
ymax = 2
let _119 = 0
basic.forever(function () {
    radio.setGroup(116)
    radio.sendNumber(ymax)
})
