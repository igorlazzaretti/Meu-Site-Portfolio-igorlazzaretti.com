
window.onscroll = function() {myFunction()};

function myFunction() {
    //how far I scrolled
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;

    //the full height of the page
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    
    //the percentage I've scrolled
    var scrolled = (winScroll / height) * 100;
    document.getElementById('progress-bar').style.width = scrolled + "%";
    document.getElementById('progress-bar2').style.width = scrolled + "%";
    console.log("winscroll: " + winScroll);
    console.log("height: " + height);
    console.log("scrolled: " + scrolled);
}

// // 

