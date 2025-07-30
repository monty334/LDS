// Toggle mobile menu
function toggleMenu() {
  document.getElementById("navMenu").classList.toggle("active");
}

// Function to display different pages
function showPage(page) {
  document.querySelectorAll(".page").forEach((section) => {
    section.classList.remove("active");
  });
  document.getElementById(page).classList.add("active");
  // Close mobile menu after selecting a page
  document.getElementById("navMenu").classList.remove("active");
}