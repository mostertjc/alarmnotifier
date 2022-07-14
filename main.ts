radio.onReceivedNumberDeprecated(function (receivedNumber) {
    if (receivedNumber == 1) {
        basic.showLeds(`
            . # . # .
            # # . # #
            . . . . .
            . # # # .
            # . . . #
            `)
        music.startMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Once)
        basic.pause(1000)
        basic.clearScreen()
    }
})
radio.setGroup(103)
basic.forever(function () {
	
})
