document.addEventListener('DOMContentLoaded', function() {
    const scrollDown = document.querySelector('.scroll-down');
    
    scrollDown.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollBy({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    });
});


function toggleVisibility() {
    var myDiv = document.getElementById("hiddenDiv");
    if (myDiv.style.display === "none") {
        myDiv.style.display = "block";
    } else {
        myDiv.style.display = "none";
    }
}


function hideDiv() {
    var myDiv = document.getElementById("hiddenDiv");
    myDiv.style.display = "none"; 
}


function toggleVisibility1() {
    var myDiv = document.getElementById("hiddenDiv1");
    if (myDiv.style.display === "none") {
        myDiv.style.display = "block";
    } else {
        myDiv.style.display = "none";
    }
}


function hideDiv1() {
    var myDiv = document.getElementById("hiddenDiv1");
    myDiv.style.display = "none"; 
}

function toggleVisibility2() {
    var myDiv = document.getElementById("hiddenDiv2");
    if (myDiv.style.display === "none") {
        myDiv.style.display = "block";
    } else {
        myDiv.style.display = "none";
    }
}


function hideDiv2() {
    var myDiv = document.getElementById("hiddenDiv2");
    myDiv.style.display = "none"; 
}

function toggleVisibility3() {
    var myDiv = document.getElementById("hiddenDiv3");
    if (myDiv.style.display === "none") {
        myDiv.style.display = "block";
    } else {
        myDiv.style.display = "none";
    }
}


function hideDiv3() {
    var myDiv = document.getElementById("hiddenDiv3");
    myDiv.style.display = "none"; 
}

function toggleVisibility4() {
    var myDiv = document.getElementById("hiddenDiv4");
    if (myDiv.style.display === "none") {
        myDiv.style.display = "block";
    } else {
        myDiv.style.display = "none";
    }
}


function hideDiv4() {
    var myDiv = document.getElementById("hiddenDiv4");
    myDiv.style.display = "none"; 
}