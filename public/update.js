function updateStatus() {
    $('.window').load('.div', function () {
        $(this).unwrap();
    });
}

$(document).ready(function () {
    setInterval(function () {
        updateStatus();
    }, 10 * 1000);
})

