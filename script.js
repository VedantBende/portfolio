// Get the navigation list element
const navList = document.getElementById('nav-list');

// Create a new list item
const contactItem = document.createElement('li');

// Create an anchor element
const contactLink = document.createElement('a');
contactLink.href = 'mailto:vedantbende2121@gmail.com'; // Set the mailto link
contactLink.textContent = 'Contact'; // Set the link text

// Append the anchor to the list item
contactItem.appendChild(contactLink);

// Append the list item to the navigation list
navList.appendChild(contactItem);


// Toggle navigation for mobile
function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

document.querySelectorAll('a[href$=".pdf"]').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default behavior

        const anchor = document.createElement('a');
        anchor.href = this.href;
        anchor.download = this.getAttribute('download') || 'Vedant Bende Resume.pdf';
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
    });
});


// Add event listeners to all links on the page
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function(event) {
        const href = this.getAttribute('href');

        // Only apply transition if link is internal (not an external URL or mailto)
        if (!href.startsWith('mailto:') && !href.endsWith('.pdf')) {
            event.preventDefault(); // Prevent the default link behavior
            document.body.classList.add('fade-out'); // Add fade-out class to body

            // Wait for the transition to complete before navigating
            setTimeout(() => {
                window.location.href = href; // Navigate to the new page
            }, 500); // Delay matches the CSS transition duration (0.5s)
        }
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70, // Adjust for fixed header
                behavior: 'smooth'
            });
        }
    });
});
