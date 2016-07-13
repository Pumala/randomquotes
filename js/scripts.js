var changing = document.getElementById("changing");
var feedback = document.getElementById("feedback");
var author = document.getElementById("author");
var k = 0;

var comments = [
                    { comment: "\"No act of kindness, no matter how small, is ever wasted.\"",
                      person: "- Aesop"
                    },
                    { comment: "\"The best preparation for tomorrow is doing your best today.\"",
                      person: "- H. Jackson Brown, Jr."
                    },
                    { comment: "\"The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.\"",
                      person: "- Helen Keller"
                    },
                    { comment: "\"Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.\"",
                      person: "- Buddha"
                    }
               ];

window.onload = setInterval(function() { displayComments()}, 4000);

function displayComments() {
    if (k !== 5) {
        changeColors(k);
        if (k === allDots.length) {
            k = 0;
            displayComments();
        } else {
            displayInner(k);
            k++;
        }
    }
}

function displayInner(x) {
    feedback.innerHTML = comments[x].comment;
    author.innerHTML = comments[x].person;
}

function changeColors(num) {
    for (var p = 0; p < allDots.length; p++) {
        if (p !== num) {
            allDots[p].classList.remove("orange");
        } else {
            allDots[num].classList.add("orange");
        }
    }
}

var allDots = document.getElementsByClassName("dot");
for (var i = 0; i < allDots.length; i++) {
    allDots[i].addEventListener("click", function() {
        k = 5;
        var getNum = Number(this.getAttribute("value"));
        displayInner(getNum);
        changeColors(getNum);
    });
}