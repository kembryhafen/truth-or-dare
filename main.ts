input.onButtonPressed(Button.A, function () {
    randomNumber = randint(0, 1)
    if (randomNumber == 0) {
        basic.showString("Truth")
    } else if (randomNumber == 1) {
        basic.showString("Dare")
    }
})
input.onButtonPressed(Button.B, function () {
    Randomnum = randint(0, 3)
    if (Randomnum == 0) {
        basic.showLeds(`
            . . . # .
            . . # . .
            . # . . .
            . . # . .
            . . . # .
            `)
    } else if (Randomnum == 1) {
        basic.showLeds(`
            . # . . .
            . . # . .
            . . . # .
            . . # . .
            . # . . .
            `)
    } else if (Randomnum == 2) {
        basic.showLeds(`
            . . . . .
            . . # . .
            . # . # .
            # . . . #
            . . . . .
            `)
    } else if (Randomnum == 3) {
        basic.showLeds(`
            . . . . .
            # . . . #
            . # . # .
            . . # . .
            . . . . .
            `)
    }
})
let Randomnum = 0
let randomNumber = 0
basic.showString("Truth or Dare")
basic.forever(function () {
	
})
