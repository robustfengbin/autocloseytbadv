scheduleAutoCloseAdv()
function scheduleAutoCloseAdv () {
    setInterval(() => {
        close_adv()
    }, 1000)
}
function close_adv () {
    let btns = document.getElementsByClassName('ytp-ad-skip-button-icon')
    if (btns.length !== 1) {
        return
    }
    btns[0].click();
    console.info('auto click ok')
}