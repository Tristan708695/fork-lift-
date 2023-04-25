radio.onReceivedNumber(function (receivedNumber) {
    action = receivedNumber
})
function Fork_down () {
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 0)
}
function Reverse () {
    wuKong.setAllMotor(-100, -100)
}
function Forword () {
    wuKong.setAllMotor(100, 100)
}
function Fork_up () {
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 60)
}
let action = 0
joystickbit.initJoystickBit()
radio.setGroup(5)
basic.showIcon(IconNames.Butterfly)
