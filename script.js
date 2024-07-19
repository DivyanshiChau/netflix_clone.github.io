document.addEventListener("DOMContentLoaded", function() {
    
    const faqBoxes = document.querySelectorAll('.faqbox');

   
    faqBoxes.forEach(faqBox => {
        const question = faqBox.querySelector('expand');
        const answer = faqBox.querySelector('.faq-answer');

       
        question.addEventListener('click', () => {
           
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
                question.classList.remove('active');
            } else {
                answer.style.display = 'block';
                question.classList.add('active');
            }
        });

        answer.style.display = 'none';
    });
});


