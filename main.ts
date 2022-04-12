let strip = neopixel.create(DigitalPin.P0, 8, NeoPixelMode.RGB)
let range = strip.range(0, 4)
let horna = strip.range(4, 8)
basic.forever(function () {
    for (let _index = 0; _index <= 7; _index++) {
        range.setPixelColor(_index, neopixel.colors(NeoPixelColors.Red))
        range.show()
        basic.pause(500)
        range.clear()
    }
    for (let _index = 0; _index <= 7; _index++) {
        horna.setPixelColor(7 - _index, neopixel.colors(NeoPixelColors.Red))
        horna.show()
        basic.pause(500)
        horna.clear()
    }
})
