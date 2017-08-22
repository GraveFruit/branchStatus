function loadlink(){
    $('.window').load('.div',function () {
        $(this).unwrap();
        console.log("refresh");
    });
}

setInterval(function(){
    loadlink() // this will run after every 5 seconds
}, 6000);