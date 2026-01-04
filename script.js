document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Lire l'URL
    const params = new URLSearchParams(window.location.search);

    // 2. Récupérer les valeurs (avec valeurs par défaut si vide)
    const depart = params.get('depart') || 'Départ';
    const arrivee = params.get('arrivee') || 'Destination';
    const nb = params.get('nb') || '1';
    
    // Gestion de la date (si vide = aujourd'hui)
    const rawDate = params.get('date');
    const date = rawDate ? rawDate : new Date().toLocaleDateString('fr-FR');

    // 3. Injecter dans le HTML
    const zoneDepart = document.getElementById('txt-depart');
    const zoneArrivee = document.getElementById('txt-arrivee');
    const zoneDate = document.getElementById('txt-date');
    const zoneNb = document.getElementById('txt-nb');

    if(zoneDepart) zoneDepart.innerText = depart;
    if(zoneArrivee) zoneArrivee.innerText = arrivee;
    if(zoneDate) zoneDate.innerText = date;
    if(zoneNb) zoneNb.innerText = nb;
});