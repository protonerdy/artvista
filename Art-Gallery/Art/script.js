  // Select relevant HTML elements
const filterButtons = document.querySelectorAll("#filter-buttons button");
const filterableCards = document.querySelectorAll("#filterable-cards .card");

// Function to filter cards based on filter buttons
const filterCards = (e) => {
    document.querySelector("#filter-buttons .active").classList.remove("active");
    e.target.classList.add("active");

    filterableCards.forEach(card => {
        // show the card if it matches the clicked filter or show all cards if "all" filter is clicked
        if(card.dataset.name === e.target.dataset.filter || e.target.dataset.filter === "all") {
            return card.classList.replace("hide", "show");
        }
        card.classList.add("hide");
    });
}

filterButtons.forEach(button => button.addEventListener("click", filterCards));




// Add this JavaScript code to your existing script.js file or create a new one

// Get all the Font Awesome icons
const icons = document.querySelectorAll('.icons i');

// Add click event listener to each icon
icons.forEach(icon => {
  icon.addEventListener('click', () => {
    icon.classList.toggle('clicked');
  });
});








