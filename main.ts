let number_1 = 0
let number_2 = 0
input.onButtonPressed(Button.A, function () {
    number_1 += 1
    basic.showNumber(number_1)
})
input.onButtonPressed(Button.AB, function () {
    number_1 = 0
    number_2 = 0
})
input.onButtonPressed(Button.B, function () {
    number_2 += 1
    basic.showNumber(number_2)
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        `)
    basic.clearScreen()
    basic.showNumber(number_1 + number_2)
    basic.clearScreen()
})
