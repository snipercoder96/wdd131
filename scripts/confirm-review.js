function saveReview() {
    const reviewData = {
        product: document.getElementById("product").value,
        rating: document.querySelector('input[name="rating"]:checked')?.value || "",
        date: document.getElementById("date").value,
        review: document.getElementById("review").value,
        name: document.getElementById("username").value 
    };

    localStorage.setItem("review", JSON.stringify(reviewData));

    let count = localStorage.getItem("reviewCount");
    if (!count) count = 0;
    localStorage.setItem("reviewCount", parseInt(count) + 1);
}
  
window.addEventListener("DOMContentLoaded", () => {
    const reviewData = JSON.parse(localStorage.getItem("review"));
    const reviewCount = localStorage.getItem("reviewCount");

    if (reviewData) {
        document.getElementById("displayProduct").textContent = reviewData.product;
        document.getElementById("displayRating").textContent = reviewData.rating;
        document.getElementById("displayDate").textContent = reviewData.date;
        document.getElementById("displayReview").textContent = reviewData.review;
        document.getElementById("displayName").textContent = reviewData.name;
    }

    if (reviewCount) {
        document.getElementById("reviewCount").textContent = reviewCount;
    }
});