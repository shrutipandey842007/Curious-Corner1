// Scroll to Blogs

function goToBlogs() {

    document.getElementById("blogs").scrollIntoView({
        behavior: "smooth"
    });

}


// Read More

function readMore(id) {

    const text = document.getElementById(id);

    text.classList.toggle("show");

}


// Like Blog

function likeBlog(button) {

    const count = button.querySelector("span");

    let currentCount = Number(count.innerText);

    currentCount++;

    count.innerText = currentCount;

}


// Search Blogs

function searchBlogs() {

    const searchValue =
        document.getElementById("searchInput").value.toLowerCase();

    const cards =
        document.querySelectorAll(".blog-card");

    cards.forEach(function(card) {

        const title =
            card.querySelector("h3").innerText.toLowerCase();

        if (title.includes(searchValue)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

}


// Random Facts

const facts = [

    "Octopuses have three hearts.",

    "A day on Venus is longer than its year.",

    "Honey can remain edible for a very long time.",

    "The human brain contains billions of neurons.",

    "Lightning can be hotter than the surface of the Sun.",

    "Bananas are botanically classified as berries."

];


function newFact() {

    const randomNumber =
        Math.floor(Math.random() * facts.length);

    document.getElementById("fact").innerText =
        facts[randomNumber];

}


// Topics

function showTopic(topic) {

    alert(
        "You selected the " +
        topic +
        " topic!"
    );

}


// Contact Form

function submitForm(event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value;

    alert(
        "Thank you, " +
        name +
        "! Your message has been received."
    );

}