// Get all accordion headers
const accordionHeaders = document.querySelectorAll('.accordion-header');

// Add click event listeners
accordionHeaders.forEach((header) => {
    header.addEventListener('click', function () {
        const accordionItem = this.parentElement;
        const isActive = accordionItem.classList.contains('active');

        // Close all accordion items
        document.querySelectorAll('.accordion-item').forEach((item) => {
            item.classList.remove('accord-active');
        });

        // If the clicked item wasn't active, open it
        if (!isActive) {
            accordionItem.classList.add('accord-active');
        }
    });
});

// Add keyboard navigation
accordionHeaders.forEach((header, index) => {
    header.setAttribute('tabindex', '0');

    header.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.click();
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            const nextIndex = (index + 1) % accordionHeaders.length;
            accordionHeaders[nextIndex].focus();
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            const prevIndex =
                (index - 1 + accordionHeaders.length) % accordionHeaders.length;
            accordionHeaders[prevIndex].focus();
        }
    });
});
