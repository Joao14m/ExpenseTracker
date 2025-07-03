const sidebar = document.querySelector(".sidebar"); 
const sidebarToggler = document.querySelector(".sidebar-toggler");

// Toggle sidebar's collapsed state
sidebarToggler.addEventListener("click", () => {
    // .classList.toggle is a method that adds or removes a CSS class from an element
    sidebar.classList.toggle("collapsed");
});
