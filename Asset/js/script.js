const form = document.getElementById('Formulaire');
const nom = document.getElementById('Nom');
const commentaire = document.getElementById('Commentaire');
const erreur = document.getElementById('Erreur');
const avis = document.getElementById('Avis');

form.addEventListener('submit', function(event) {
    const nomValue = nom.value.trim();
    const commentaireValue = commentaire.value.trim();

    if (nomValue.length < 2) {
        event.preventDefault();
        erreur.textContent = 'Le nom doit contenir au moins 2 caractères.';
        return;
    }
    if (commentaireValue.length < 10) {
        event.preventDefault();
        erreur.textContent = 'Le commentaire doit contenir au moins 10 caractères.';
        return;
    }
});

