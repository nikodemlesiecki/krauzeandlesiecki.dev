       // Navbar
            // hamburger menu
            const navbarMenuList = document.querySelector('.navbar-menu-list');
            const navbarHamburgerMenu = document.querySelector('.navbar-hamburger-menu');

            navbarHamburgerMenu.addEventListener('click', () => {
                navbarMenuList.classList.toggle('navbar-menu-list--active');
            });

            // Close the navbar menu when a menu item is clicked
            const navbarMenuLinks = document.querySelectorAll('.navbar-menu-link');

            navbarMenuLinks.forEach(link => {
                link.addEventListener('click', () => {
                    navbarMenuList.classList.remove('navbar-menu-list--active');
                });
            });

        // Scroll when clicking on a link
            const navbarMenuLinksScroll = document.querySelectorAll('.navbar-menu-link[href^="#"]');
            const navbarHamburgerMenuLinksScroll = document.querySelectorAll('.navbar-menu-list--active .navbar-menu-link[href^="#"]');

            navbarMenuLinksScroll.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();

                    const href = link.getAttribute('href');
                    const offsetTop = document.querySelector(href).offsetTop;

                    scroll({
                        top: offsetTop,
                        behavior: "smooth"
                    });
                });
            });

            navbarHamburgerMenuLinksScroll.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();

                    const href = link.getAttribute('href');
                    const offsetTop = document.querySelector(href).offsetTop;

                    scroll({
                        top: offsetTop,
                        behavior: "smooth"
                    });
                });
            });

            // End Scroll when clicking on a link

            // Get all the navbar menu links
            const menuLinks = document.querySelectorAll('.navbar-menu-link');

            // Function to add or remove the "active" class from menu links
            function setActiveLink() {
                // Get the current scroll position
                const scrollPosition = window.scrollY;

                // Iterate over each menu link
                menuLinks.forEach(link => {
                    // Get the target section based on the link's href attribute
                    const section = document.querySelector(link.getAttribute('href'));

                    // Check if the section is in the viewport
                    if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
                        // Add the "active" class to the link
                        link.classList.add('active');
                    } else {
                        // Remove the "active" class from the link
                        link.classList.remove('active');
                    }
                });
            }

            // Call the setActiveLink function on page load and scroll events
            window.addEventListener('DOMContentLoaded', setActiveLink);
            window.addEventListener('scroll', setActiveLink);

        // Logo typing effect
            // Get the typed-text element
            const typedText = document.querySelector('#logo');

            // Get the cursor element
            const cursor = document.querySelector('.cursor');
        
            // Define the text to be typed
            const textToType = "krauzeandlesiecki.dev";
        
            // Set the initial values
            let textIndex = 0;
            let isDeleting = false;
        
            // Function to simulate typing effect
            function type() {
                // Get the current text
                const currentText = textToType.substring(0, textIndex);
            
                // Set the text of the typed-text element
                typedText.textContent = currentText;
            
                // Increment or decrement the text index based on whether we are typing or deleting
                if (isDeleting) {
                    textIndex--;
                } else {
                    textIndex++;
                    
                }
            
                // Calculate the typing speed randomly
                const typingSpeed = 150;
            
                // Set a shorter delay when deleting the text
                const delay = isDeleting ? typingSpeed / 1 : typingSpeed;
            
                // Add or remove the blink class to show/hide the cursor
                if (isDeleting) {
                    cursor.classList.add('blink');
                } else {
                    cursor.classList.remove('blink');
                }
            
                // Check if we have typed/deleted all the text
                if (!isDeleting && textIndex === textToType.length) {
                    // Set the isDeleting flag to true for deleting effect
                    isDeleting = true;
                } else if (isDeleting && textIndex === 0) {
                    // Reset the isDeleting flag and move to typing effect
                    isDeleting = false;
                }
            
                // Call the type function recursively after the delay
                setTimeout(type, delay);
            }
        
            // Start the typing effect
            setTimeout(type, 1000);

        // End Navbar
    
        // Our Projects
            const ourProjectsTiles = document.querySelectorAll('.our-projects-tile');
        
            ourProjectsTiles.forEach(tile => {
                tile.addEventListener('mouseover', () => {
                    tile.classList.add('our-projects-tile--active');
                });
        
                tile.addEventListener('mouseout', () => {
                    tile.classList.remove('our-projects-tile--active');
                });
            });
    
        // End Our Projects

        // Contact Form