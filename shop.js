
document.addEventListener('DOMContentLoaded', function() {
    const productsSection = document.getElementById('productsSection');

    // Function to filter products based on selected checkboxes
    function filterProducts() {
        const inStockChecked = document.getElementById('In Stock').checked;
        const outOfStockChecked = document.getElementById('Out Of Stock').checked;
        const type1Checked = document.getElementById('type1').checked;
        const type2Checked = document.getElementById('type2').checked;
        const weight1Checked = document.getElementById('weight1').checked;
        const weight2Checked = document.getElementById('weight2').checked;
        const weight3Checked = document.getElementById('weight3').checked;
        
        const products = document.querySelectorAll('.products-section .product');

        products.forEach(product => {
            const availability = product.getAttribute('data-availability');
            const type = product.getAttribute('data-type');
            const weight = product.getAttribute('data-weight');

            let showProduct = true;

            if (inStockChecked && availability !== 'In Stock') {
                showProduct = false;
            }
            if (outOfStockChecked && availability !== 'Out Of Stock') {
                showProduct = false; 
            }
            if (type1Checked && type !== '|') {
                showProduct = false;
            }
            if (type2Checked && type !== '||') {
                showProduct = false;
            }
            if (weight1Checked && weight !== '100gr') {
                showProduct = false;
            }
            if (weight2Checked && weight!== '500gr') {
                showProduct = false;
            }
            if (weight3Checked && weight !== '1000gr') {
                showProduct = false;
            }

            product.style.display = showProduct ? 'block' : 'none';
        });
    }

    // Attach change event listeners to checkboxes
    document.querySelectorAll('.avi input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', filterProducts);
    });

    document.querySelectorAll('.type input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', filterProducts);
    });

    document.querySelectorAll('.weight input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', filterProducts);
    });

    // Search functionality (if needed)
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = searchInput.value.toLowerCase();
            const products = document.querySelectorAll('.products-section .product');

            products.forEach(product => {
                const title = product.querySelector('.title a').textContent.toLowerCase();
                product.style.display = title.includes(searchTerm) ? 'block' : 'none';
            });
        });
    }
});
/////////////////////
// const menuBtn = document.getElementById("menu-btn");
// const navLinks = document.getElementById("nav-links");
// const menuBtnIcon = menuBtn.querySelector("menu-button");

// menuBtn.addEventListener("click", (e) => {
//   navLinks.classList.toggle("open");

//   const isOpen = navLinks.classList.contains("open");
//   menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
// });

// navLinks.addEventListener("click", (e) => {
//   navLinks.classList.remove("open");
//   menuBtnIcon.setAttribute("class", "ri-menu-line");
// });

