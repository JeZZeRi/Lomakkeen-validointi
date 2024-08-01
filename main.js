document.getElementById('rekisterointiLomake').addEventListener('submit', function(event) {
    event.preventDefault();
    let onKelvollinen = true;

    const kayttajaId = document.getElementById('kayttajaId').value;
    const kayttajaIdVirhe = document.getElementById('kayttajaIdVirhe');
    if (kayttajaId.length < 6) {
        kayttajaIdVirhe.style.display = 'block';
        onKelvollinen = false;
    } else {
        kayttajaIdVirhe.style.display = 'none';
    }

    const salasana = document.getElementById('salasana').value;
    const salasanaVirhe = document.getElementById('salasanaVirhe');
    const salasanaRegex = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@£$€&%#]).{6,}$/;
    if (!salasanaRegex.test(salasana)) {
        salasanaVirhe.style.display = 'block';
        onKelvollinen = false;
    } else {
        salasanaVirhe.style.display = 'none';
    }

    const nimi = document.getElementById('nimi').value;
    const nimiVirhe = document.getElementById('nimiVirhe');
    if (!nimi) {
        nimiVirhe.style.display = 'block';
        onKelvollinen = false;
    } else {
        nimiVirhe.style.display = 'none';
    }

    const osoite = document.getElementById('osoite').value;
    const osoiteVirhe = document.getElementById('osoiteVirhe');
    if (!osoite) {
        osoiteVirhe.style.display = 'block';
        onKelvollinen = false;
    } else {
        osoiteVirhe.style.display = 'none';
    }

    const maa = document.getElementById('maa').value;
    const maaVirhe = document.getElementById('maaVirhe');
    if (!maa) {
        maaVirhe.style.display = 'block';
        onKelvollinen = false;
    } else {
        maaVirhe.style.display = 'none';
    }

    const postinumero = document.getElementById('postinumero').value;
    const postinumeroVirhe = document.getElementById('postinumeroVirhe');
    const postinumeroRegex = /^\d{5}$/;
    if (!postinumeroRegex.test(postinumero)) {
        postinumeroVirhe.style.display = 'block';
        onKelvollinen = false;
    } else {
        postinumeroVirhe.style.display = 'none';
    }

    const sahkoposti = document.getElementById('sahkoposti').value;
    const sahkopostiVirhe = document.getElementById('sahkopostiVirhe');
    const sahkopostiRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!sahkopostiRegex.test(sahkoposti)) {
        sahkopostiVirhe.style.display = 'block';
        onKelvollinen = false;
    } else {
        sahkopostiVirhe.style.display = 'none';
    }

    const sukupuoli = document.querySelector('input[name="sukupuoli"]:checked');
    const sukupuoliVirhe = document.getElementById('sukupuoliVirhe');
    if (!sukupuoli) {
        sukupuoliVirhe.style.display = 'block';
        onKelvollinen = false;
    } else {
        sukupuoliVirhe.style.display = 'none';
    }

    const kieli = document.querySelector('input[name="kieli"]:checked');
    const kieliVirhe = document.getElementById('kieliVirhe');
    if (!kieli) {
        kieliVirhe.style.display = 'block';
        onKelvollinen = false;
    } else {
        kieliVirhe.style.display = 'none';
    }
 
    if (onKelvollinen) {
        console.log('Lomake lähetetty onnistuneesti!');
    }
});