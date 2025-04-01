// Exemplu de script simplu care ar putea fi folosit pentru interactivitate
document.querySelectorAll('.birds-list img').forEach(img => {
    img.addEventListener('click', () => {
        alert("Ai selectat o pasăre!");
    });
});
