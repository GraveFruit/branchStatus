//updateStatus requsts for status.div file which contains refreshed list of branches in html

function updateStatus() {
    $('.window').load('status.div', function () {
        $(this).unwrap();
    });
}

$(document).ready(function () {
    setInterval(function () {
        updateStatus();
    }, 10 * 1000);
});

