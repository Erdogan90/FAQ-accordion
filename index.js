document.addEventListener("DOMContentLoaded", function() {
    const faqButtons = document.querySelectorAll(".faq-button");

    faqButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            this.classList.toggle('active');

            // Navigate to the correct faq-answer sibling
            const faqAnswer = this.parentElement.nextElementSibling;
            const plusIcon = this.querySelector('.plus-btn');
            const minusIcon = this.querySelector('.minus-btn');

            if (!faqAnswer || !plusIcon || !minusIcon) {
                console.error("One or more elements not found for", this);
                return;
            }

            if (faqAnswer.style.maxHeight) {
                faqAnswer.style.maxHeight = null;
                plusIcon.style.display = 'block';
                minusIcon.style.display = 'none';
            } else {
                faqAnswer.style.maxHeight = faqAnswer.scrollHeight + 'px';
                plusIcon.style.display = 'none';
                minusIcon.style.display = 'block';
            }
        });
    });
});
