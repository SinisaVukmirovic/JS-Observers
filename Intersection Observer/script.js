const cards = document.querySelectorAll('.card');

const options = {
    treshold: 1,
    rootMargin: '-200px'
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle('show', entry.isIntersecting);

        // to stop observing once they are shown
        // if (entry.isIntersecting) observer.unobserve(entry.target);
    });
}, options);

cards.forEach(card => {
    observer.observe(card);
});