input.onButtonPressed(Button.A, function () {
    lcd1602.clear()
    lcd1602.putString(
    "Reset mission...",
    0,
    0
    )
    Farmbots.resetMission()
    while (!(Farmbots.validMissionID())) {
        Farmbots.startMission("hum")
    }
    lcd1602.clear()
    lcd1602.putString(
    Farmbots.getMissionID(),
    0,
    0
    )
    lcd1602.putString(
    "x:" + Farmbots.getMissionX() + "y:" + Farmbots.getMissionY(),
    0,
    1
    )
    lcd1602.set_LCD_Show(lcd1602.visibled.visible)
})
function connect2Internet () {
    lcd1602.putString(
    "Connecting...",
    0,
    0
    )
    Farmbots.wifiSettings(
    SerialPin.P0,
    SerialPin.P1,
    BaudRate.BaudRate115200,
    "VODAFONE_GS",
    "2106019487"
    )
    while (!(Farmbots.isWifiConnected())) {
        Farmbots.wifiConnect()
    }
    lcd1602.putString(
    "Wifi Connected",
    0,
    0
    )
    Farmbots.cloudSettings(
    "138.68.73.242",
    "1886",
    "TRNCENTRPX",
    "019ea7cc84b841294a7eeeed8d0a70b3"
    )
}
led.enable(false)
lcd1602.setAddress(
lcd1602.I2C_ADDR.addr1
)
connect2Internet()
