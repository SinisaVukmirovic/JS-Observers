const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle('show', entry.isIntersecting);

        // to stop observing once they are shown
        // if (entry.isIntersecting) observer.unobserve(entry.target);
    }, {
        // treshold: 1,
        rootMargin: '-200px'
    });
});

cards.forEach(card => {
    observer.observe(card);
});