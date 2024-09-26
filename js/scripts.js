let interval;
function setSlide() {
    clearInterval(interval);
    interval = setInterval(function () {
        let buttons = document.getElementsByName("carousel");
        for (let i = 0; i < buttons.length; i++) {
            if (buttons[i].checked) {
                buttons[i].checked = false;
                if (i + 1 === buttons.length) {
                    buttons[0].checked = true;
                } else {
                    buttons[i + 1].checked = true;
                }
                return;
            }
        }
    }, 5000);
}
setSlide();
