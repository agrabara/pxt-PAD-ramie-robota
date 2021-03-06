let item = 0
let arp1 = 0
let arp2 = 0
I2C_LCD1602.LcdInit(63)
basic.showIcon(IconNames.Heart)
basic.clearScreen()
basic.forever(() => {
//basic.showIcon(IconNames.Angry)
    item += 1
    I2C_LCD1602.BacklightOff()
    I2C_LCD1602.ShowNumber(item, 0, 1)
    basic.pause(100)
    I2C_LCD1602.BacklightOn()
    //basic.showIcon(IconNames.Cow)
    basic.pause(100)
    I2C_LCD1602.clear()
    I2C_LCD1602.ShowNumber(pins.analogReadPin(AnalogPin.P1),10, 1)
    I2C_LCD1602.ShowNumber(pins.analogReadPin(AnalogPin.P2),10, 0)

    music.playTone(Note.C, 10)

    arp1 = pins.analogReadPin(AnalogPin.P1)
    arp2 = pins.analogReadPin(AnalogPin.P2)

    if (arp1 >= 340 && arp1 <= 370) {  //FIRE
        led.plot(1, 1)
    } else if (arp1 >= 20 && arp1 <= 50) { //UP
        led.plot(1, 0)
    } else if (arp1 >= 80 && arp1 <= 100) { //DOWN
        led.plot(1, 2)
    } else if (arp1 >= 0 && arp1 <= 15) { //LEFT
        led.plot(0, 1)
    } else if (arp1 >= 150 && arp1 <= 185) { //RIGHT
        led.plot(2, 1)
    } else {   // EMPTY
        led.unplot(1, 1)
        led.unplot(1, 0)
        led.unplot(1, 2)
        led.unplot(0, 1)
        led.unplot(2, 1)
    }
    
    if (arp2 >= 340 && arp2 <= 370) {  //FIRE
        led.plot(3, 3)
    } else if (arp2 >= 20 && arp2 <= 50) { //UP
        led.plot(3, 2)
    } else if (arp2 >= 80 && arp2 <= 100) { //DOWN
        led.plot(3, 4)
    } else if (arp2 >= 0 && arp2 <= 15) { //LEFT
        led.plot(2, 3)
    } else if (arp2 >= 150 && arp2 <= 185) { //RIGHT
        led.plot(4, 3)
    } else {   // EMPTY
        led.unplot(3, 3)
        led.unplot(3, 2)
        led.unplot(3, 4)
        led.unplot(2, 3)
        led.unplot(4, 3)
    }

})