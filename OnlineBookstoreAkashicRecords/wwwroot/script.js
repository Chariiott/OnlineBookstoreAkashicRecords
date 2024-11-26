document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".book-item");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    let currentIndex = 0;

    function updateActiveBook(index) {
        items.forEach((item, i) => {
            item.classList.remove("active");
            item.style.display = i === index ? "flex" : "none"; // Only show active item
        });
        items[index].classList.add("active");
    }

    function changeBook(direction) {
        currentIndex = (currentIndex + direction + items.length) % items.length;
        updateActiveBook(currentIndex);
    }

    // Initial display of the first book
    updateActiveBook(currentIndex);

    // Event listeners for navigation buttons
    prevButton.addEventListener("click", () => changeBook(-1));
    nextButton.addEventListener("click", () => changeBook(1));

    // Optional: Automatic slideshow
    setInterval(() => changeBook(1), 5000); // Change every 5 seconds
});
