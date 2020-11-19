const colors = ['darkgoldenrod', 'darkgreen', 'darkcyan', 'darkorange', 'darkkhaki', 'darkmagenta'];

function greenBG() {
    const colorIndex = parseInt(Math.random()*colors.length);
    document.querySelector(".hero").style.backgroundColor = colors[colorIndex];
}

function myFunction() {
  document.getElementById("demo").innerHTML = "YOU CLICKED ME!";
  document.getElementById("demo").style.color = "red";
}

const quotes = [
    {
    quote:
        "Life is too short and sweet to be spent by cribbing and complaining about things. Here are some random quotes about the most wonderful gift that we've got",
    author: " Life"
    },
    {
    quote:
        "Humor is richly rewarding to the person who employs it. It has some value in gaining and holding attention. But it has no persuasive value at all",
    author: "John Kenneth Galbraith"
    },
    {
    quote:
        "God save me from my friends. I can protect myself from my enemies.",
    author: "Claude Louis Hector de Villars "
    },
    {
    quote: "The price of anything is the amount of life you exchange for it.",
    author: "David Thoreau"
    },
    {
    quote:
        "Life is like a landscape. You live in the midst of it but can describe it only from the vantage point of distance. ",
    author: "Charles Lindbergh"
    },
    {
    quote:
        "A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded.",
    author: " Tyne Daly"
    }
];

function genQuote() {
    const random = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerHTML = quotes[random].quote;
    document.getElementById("author").textContent = quotes[random].author;
    // querySelector grabs the first element and uses it.
    // innerText returns just the text, without spacing and inner element tags. 
    // innerHTML returns the text, including all spacing and inner element tags. 
    // textContent returns the text with spacing, but without inner element tags.
}

function openMenu() {
    let x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
}

var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("notice");
    for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 5000); // Change image every 2 seconds
}

// function prevClick() {
//     let n = document.getElementById('trending');
//     n.scrollLeft += 180;
//     console.log("previous was clicked");
// }

// function nextClick() {
//     // document.getElementById('slider').scrollRight = 180;
//     // console.log("next was clicked");
//     let n = document.getElementById('trending');
//     n.scrollRight += 180;
//     console.log("next was clicked");
// }