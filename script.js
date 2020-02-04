let count = 0;
let target = 100;
let canRestart = false;

function reportWindowSize() {
    // $("#height").html(window.innerHeight);
    // $("#width").html(window.innerWidth);
    count++;
    $("#count").fadeOut(function () {
        $(this).text(count).fadeIn("fast");
    });
    if (count >= target) {
        // window.close();
        $("#count").fadeOut(function () {
            $(this).text("CLICK ME").fadeIn("fast");
        });
        $("body").css({
            "background-color": "yellow"
        });
        canRestart = true;
    }
}

function restart() {
    if (canRestart) {
        location.reload();
    }
}

$(document).ready(function () {
    intW = document.documentElement.clientWidth;
    intH = document.documentElement.clientHeight;
});

window.onresize = reportWindowSize;
window.onclick = restart;