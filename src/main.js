document.querySelectorAll("nav a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        const target = document.querySelector(this.getAttribute('href'))
        if (target) {
            e.preventDefault()
            target.scrollIntoView({ behavior: 'smooth' })
        }
    })
})

const localization = {
    "en": {
        nav: {
            projects: "Projects",
            about: "About",
            contact: "Contact",
        },
        option: {
            en: "English",
            pt: "Portuguese",
            es: "Spanish"
        },
        hero: {
            hi: "Hi, I'm",
            description: "A fast-learning developer who builds quality software solo.",
            link: "View My Work",
        },
        projects: {
            header: "Projects",
            title: {
                purchase: "Purchase Order System",
                news: "News Blog with Fidelity Program",
                books: "Artisan Books Catalogue",
                excel: "Excel to Word Generator",
                images: "Automatic Excel Image Inserter",
                chat: "Real-Time Chat App",
            },
            description: {
                purchase: "A complex, solo-built web app with Laravel and Vue.js—featuring multiple models, async\
                        data loading,caching, unit tests, and design patterns like Strategy and Observer.",
                news: "An interactive enterprise blog with social-media-like features (likes, comments), \
                        WYSIWYG editor for posts, and real-time point-transactions in a fidelity program to \
                        use in the company's products",
                books: "An elegant, simple and well-designed website to display a catalogue \
                        of handmade children books.",
                excel: "A desktop tool built solo with Go and Wails to parse Excel sheets and generate organized \
                        Word documents by company number, automating hours of manual labor.",
                images: "A quick Python script using openpyxl and pandas to insert a hight number of images \
                        into an Excel column based on product data.",
                chat: "A solo-built chat-app wth Go, WebSockets, and Redis in weeks to deliver real-time \
                    messaging."
            }
        },
        languages: "Languages & Tools",
        about: {
            title: "About Me",
            description: "I'm a self-driven developer who thrives on learning fast and building software independently. \
                From complex web apps in Laravel and Vue.js to desktop tools with Go and Wails, I deliver \
                quality solutions tailored to the challenge. \
                Let's create something great together."
        },
        philosophy: {
            title: "My Developer Philosophy",
            description: "I like building software the simplest way possible, avoiding bloat and unnecessary dependencies. \
                I build software to fit the resources and needs: unless it's proven that it needs to scale, \
                there's no need to pre-optimize it. Simple software gets delivered fast, works well, \
                and saves you headaches."
        },
        contact: {
            title: "Contact",
            description: "Need a versatile developer who can jump in and deliver? Reach out!"
        },
        email: "Email Me",
        credits: "2025 Henrique Barrel. All rights reserved."
    },
    "pt": {
        nav: {
            projects: "Projetos",
            about: "Sobre",
            contact: "Contato",
        },
        option: {
            en: "Inglês",
            pt: "Português",
            es: "Espanhol"
        },
        hero: {
            hi: "Olá, sou",
            description: "Desenvolvedor de software de rápido aprendizado que constrói programas de alta qualidade sozinho.",
            link: "Veja Meu Trabalho",
        },
        projects: {
            header: "Projetos",
            title: {
                purchase: "Sistema de Compras",
                news: "Blog de Notícias com Programa de Fidelidade",
                books: "Catálogo de Livros Artesanais",
                excel: "Gerador Word para Excel",
                images: "Inserção Automática de Imagens em Excel",
                chat: "Aplicativo de Chat em Tempo-Real",
            },
            description: {
                "purchase": "Um aplicativo web complexo, desenvolvido solo com Laravel e Vue.js contando com múltiplos modelos, \
                        carregamento assíncrono de dados, caching, testes unitários e padrões de design como Strategy e Observer.",
                "news": "Um blog empresarial interativo com recursos semelhantes às redes sociais (curtidas, comentários), \
                        editor WYSIWYG para postagens e transações de pontos em tempo real em um programa de fidelidade \
                        para uso nos produtos da empresa.",
                "books": "Um site elegante, simples e bem projetado para exibir um catálogo \
                        de livros infantis feitos à mão.",
                "excel": "Uma ferramenta desktop desenvolvida solo com Go e Wails para analisar planilhas do Excel e gerar \
                        documentos do Word organizados por número de empresa, automatizando horas de trabalho manual.",
                "images": "Um script rápido em Python usando openpyxl e pandas para inserir um grande número de imagens \
                        em uma coluna do Excel com base nos dados do produto.",
                "chat": "Um aplicativo de chat desenvolvido com Go, WebSockets e Redis em poucas semanas para entregar \
                        mensagens em tempo real."
            }
        },
        "languages": "Linguagens & Ferramentas",
        "about": {
            "title": "Sobre Mim",
            "description": "Sou um desenvolvedor autodidata que aprende rápido e constrói software de forma independente. \
            Desde aplicações web complexas em Laravel e Vue.js até ferramentas desktop com Go e Wails, \
            entrego soluções de qualidade adaptadas ao desafio. \
            Vamos criar algo incrível juntos."
        },
        "philosophy": {
            "title": "Minha Filosofia como Desenvolvedor",
            "description": "Gosto de desenvolver software da maneira mais simples possível, evitando bloat e dependências desnecessárias. \
            Construo software de acordo com os recursos e necessidades: a menos que seja comprovado que precisa escalar, \
            não há necessidade de otimizar prematuramente. Software simples é entregue rápido, funciona bem \
            e evita dores de cabeça."
        },
        "contact": {
            "title": "Contato",
            "description": "Precisa de um desenvolvedor versátil que possa entrar e entregar resultados? Entre em contato!"
        },
        "email": "Enviar Email",
        "credits": "2025 Henrique Barrel. Todos os direitos reservados."
    },
    "es": {
        "nav": {
            "projects": "Proyectos",
            "about": "Sobre mí",
            "contact": "Contacto"
        },
        "option": {
            "en": "Inglés",
            "pt": "Portugués",
            "es": "Español"
        },
        "hero": {
            "hi": "Hola, soy",
            "description": "Un desarrollador de aprendizaje rápido que crea software de calidad de forma independiente.",
            "link": "Ver mi trabajo"
        },
        "projects": {
            "header": "Proyectos",
            "title": {
                "purchase": "Sistema de Gestión de Compras",
                "news": "Blog Empresarial con Programa de Fidelidad",
                "books": "Catálogo de Libros Artesanales",
                "excel": "Generador de Documentos desde Excel",
                "images": "Automatizador de Imágenes en Excel",
                "chat": "Aplicación de Chat en Tiempo Real"
            },
            "description": {
                "purchase": "Una aplicación web compleja, desarrollada en solitario con Laravel y Vue.js. Incluye múltiples modelos, \
                carga de datos asíncrona, almacenamiento en caché, pruebas unitarias y patrones de diseño como Strategy y Observer.",
                "news": "Un blog empresarial interactivo con funciones similares a redes sociales (me gusta, comentarios), \
                un editor WYSIWYG para publicaciones y transacciones de puntos en tiempo real dentro de un programa de fidelidad \
                para los productos de la empresa.",
                "books": "Un sitio web elegante y bien diseñado para mostrar un catálogo de libros infantiles hechos a mano.",
                "excel": "Herramienta de escritorio desarrollada en solitario con Go y Wails para analizar hojas de Excel y generar \
                documentos de Word organizados por número de empresa, automatizando horas de trabajo manual.",
                "images": "Script en Python que usa openpyxl y pandas para insertar imágenes en Excel basándose en datos de productos.",
                "chat": "Aplicación de chat desarrollada en solitario con Go, WebSockets y Redis para ofrecer mensajería en tiempo real."
            }
        },
        "languages": "Lenguajes y Herramientas",
        "about": {
            "title": "Sobre Mí",
            "description": "Soy un desarrollador autodidacta que aprende rápido y construye software de forma independiente. \
            Desde aplicaciones web complejas en Laravel y Vue.js hasta herramientas de escritorio con Go y Wails, \
            entrego soluciones de calidad adaptadas a cada desafío. \
            Construyamos algo increíble juntos."
        },
        "philosophy": {
            "title": "Mi Filosofía como Desarrollador",
            "description": "Me gusta desarrollar software de la manera más simple posible, evitando sobrecarga y dependencias innecesarias. \
            Construyo software que se ajusta a los recursos y necesidades: si no es necesario escalar, \
            no hay razón para optimizar prematuramente. El software simple se entrega rápido, funciona bien \
            y evita dolores de cabeza."
        },
        "contact": {
            "title": "Contacto",
            "description": "¿Buscas un desarrollador versátil capaz de aportar resultados de inmediato? ¡Contáctame!"
        },
        "email": "Envíame un correo",
        "credits": "&copy; 2025 Henrique Barrel. Todos los derechos reservados."
    }
}

function setLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n')
        const keys = key.split('.')
        let text = localization[lang]

        for (const k of keys) {
            text = text?.[k]
            if (text === undefined) {
                console.warn(`Missing translation for key: ${key} in language: ${lang}`)
                return
            }
        }

        element.textContent = text
    })

    document.documentElement.lang = lang
    localStorage.setItem('lang', lang)
}

const select = document.getElementById('lang-select')
const userLang = navigator.language.substring(0, 2)
const availableLangs = ["en", "pt", "es"]
const defaultLang = availableLangs.includes(userLang) ? userLang : "en"

const savedLang = localStorage.getItem("lang") || defaultLang
setLanguage(savedLang)

if (select) {
    select.value = savedLang
    select.addEventListener('change', (event) => {
        setLanguage(event.target.value)
    })
}
