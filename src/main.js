document.querySelectorAll("nav a").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault()
        const section = document.querySelector(this.getAttribute('href'))
        section.scrollIntoView({ behavior: 'smooth' })
    })
})

const localization = {
    "en": {
        nav_projects: "Projects"
    },
    "pt": {
        nav_projects: "Projetos"
    },
    "es": {

    }
}

function setLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const keys = key.split('.');
        let text = localization[lang];
        for (const k of keys) {
            text = text[k];
        }
        element.textContent = text;
    });

    document.documentElement.lang = lang;
    localStorage.setItem('lang', lang);
}

const select = document.getElementById('lang-select');
const savedLang = localStorage.getItem('lang') || 'en';
select.value = savedLang;

select.addEventListener('change', (event) => {
    const lang = event.target.value;
    setLanguage(lang);
});
