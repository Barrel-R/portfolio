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
    en: {
        tbi: "To be implemented",
        nav: {
            projects: "Projects",
            about: "About",
            contact: "Contact",
        },
        option: {
            en: "English",
            pt: "Portuguese",
            es: "Spanish",
        },
        hero: {
            hi: "Hi, I'm",
            description: "A fast-learning developer who builds quality software solo.",
            link: "View My Work",
        },
        modal: {
            images: "Images",
            why_title: "Why It Was Needed",
            difficulties_title: "Difficulties",
            solutions_title: "How I Overcame Them",
            learned_title: "What I Learned",
        },
        projects: {
            private: "This project is private",
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
                purchase: "A complex, solo-built web app with Laravel and Vue.js—featuring multiple models, async data loading, caching, unit tests, and design patterns like Strategy and Observer.",
                news: "An interactive enterprise blog with social-media-like features (likes, comments), WYSIWYG editor for posts, and real-time point-transactions in a fidelity program to use in the company's products.",
                books: "An elegant, simple, and well-designed website to display a catalogue of handmade children’s books.",
                excel: "A desktop tool built solo with Go and Wails to parse Excel sheets and generate organized Word documents by company number, automating hours of manual labor.",
                images: "A quick Python script using openpyxl and pandas to insert a high number of images into an Excel column based on product data.",
                chat: "A solo-built chat app with Go, WebSockets, and Redis in weeks to deliver real-time messaging.",
            },
            why: {
                purchase: "The company needed a centralized system to streamline purchase order management across multiple stores and suppliers, replacing error-prone manual processes.",
                news: "The company wanted an engaging internal platform to share updates, foster employee interaction, and incentivize engagement and sales through a points-based loyalty system.",
                books: "A small business needed an online presence to showcase their unique handmade children’s books to attract customers and simplify orders.",
                excel: "A team required a tool to automate generating formatted Word reports from Excel data, eliminating tedious copy-paste work across hundreds of entries.",
                images: "A sudden presentation appeared, neededing a high number of product images in an existing sheet, which was impractical to do manually.",
                chat: "I wanted to improve my knowledge about concurrency in Go, while also learning how Redis' Pub/Sub and queues would interact with it.",
            },
            difficulties: {
                purchase: "Integrating with a poorly documented legacy API and ensuring real-time performance across large datasets while working solo was a major challenge.",
                news: "Balancing real-time point transactions with a responsive UI, plus integrating an legacy API posed technical hurdles.",
                books: "Designing an intuitive, visually appealing layout while keeping it simple for non-tech-savvy owners or children was tricky.",
                excel: "It was my first time using Wails and experimenting with Go, so adapting to their ecosystems while parsing Excel formats and generating styled Word documents was a steep learning curve",
                images: "Handling large image batches and matching them accurately to product code with the correct image dimensions for display demanded efficient scripting.",
                chat: "Implementing WebSockets for real-time messaging with low latency, while ensuring scalability on a tight timeline, stretched my limits.",
            },
            solutions: {
                purchase: "Separated the most important, highly complex page into small parts so each would work individually, making the overall simpler and easier to understand or refactor, used Redis for caching, \
                            used laravel's new Concurrency feature for document generation, jobs and scheduled tasks to streamline the process and keep data synchronized. Also and leveraged Vue.js for async updates, \
                            prioritizing testable core features.",
                news: "Integrated Redis for real-time points, sanitized WYSIWYG inputs with a custom filter, and optimized the frontend with Vue.js reactivity.",
                books: "Used TailwindCSS for a responsive, elegant design and Laravel’s simplicity for a lightweight backend, with clear admin docs for the owners.",
                excel: "Developed a Go parser with Wails for a native UI, mapping Excel data to Word templates with dynamic formatting, tested across sample files.",
                images: "Quickly wrote a Python script with pandas for data matching and openpyxl for image insertion, batching operations to avoid memory issues.",
                chat: "Deployed Go with WebSockets for low-latency messaging, backed by Redis for session persistence, and stress-tested it in weeks.",
            },
            learned: {
                purchase: "Learned how to deal with legacy and complex API, how  to architecture a complex project, and gained confidence in solo-building performant systems.",
                news: "Mastered design patterns (Strategy, Observer), and learned to balance interactivity and security in real-time apps.",
                books: "Honed my eye for minimalist design and realized how small, well-crafted solutions can delight users and clients alike.",
                excel: "Deepened my Go skills and discovered the power of desktop apps for niche automation tasks—simplicity can transform workflows.",
                images: "Improved my Python efficiency and learned to optimize scripts for real-world constraints like memory and speed.",
                chat: "Expanded my knowledge around Go and concurrency, also understood more about how WebSockets work.",
            },
        },
        languages: "Languages & Tools",
        about: {
            title: "About Me",
            work: {
                tools: {
                    title: "Tools I use",
                },
                ethic: {
                    title: "Work Ethic",
                    description: "Focused on efficiency, speed, and delivering value through practical solutions",
                },
                goals: {
                    title: "Current Goals",
                    remote: "Estabilish myself remotely",
                    sync: "Have my own synchronized environment",
                    place: "Get a new place with dedicated workspace",
                },
                history: {
                    title: "Work History",
                    start: "Started programming as a hobby in 2017 (15y)",
                    mersan: "Mersan - Fullstack Developer (07/2022 - current)",
                    gamedev: "Started modding minecraft and creating my own games",
                }
            },
            personal: {
                creative: {
                    title: "Creative Pursuits",
                    procreate: "Digital Illustration with Procreate",
                    gamedev: "Game modding and gamedev",
                    poems: "Writing poems",
                },
                obsessions: {
                    title: "Current Obsessions",
                    coding: "Coding",
                },
                music: {
                    title: "Music",
                    sopao: "Sopão (big soup) is my spotify playlist that's basically an amalgam\
                            of all my spotify playlists(except for metal because it's too big) \
                            in one big mix.",
                    playlist: "Spotify playlist",
                },
                gaming: {
                    title: "Gaming",
                },
            },
        },
        philosophy: {
            title: "My Developer Philosophy",
            description: "I like building software the simplest way possible, avoiding bloat and unnecessary dependencies. I build software to fit the resources and needs: unless it's proven that it needs to scale, there's no need to pre-optimize it. Simple software gets delivered fast, works well, and saves you headaches.",
        },
        contact: {
            title: "Contact",
            description: "Need a versatile developer who can jump in and deliver? Reach out!",
        },
        email: "Email Me",
        credits: "2025 Henrique Barrel. All rights reserved.",
    },
    pt: {
        tbi: "A ser implementado",
        nav: {
            projects: "Projetos",
            about: "Sobre",
            contact: "Contato",
        },
        option: {
            en: "Inglês",
            pt: "Português",
            es: "Espanhol",
        },
        hero: {
            hi: "Olá, sou",
            description: "Desenvolvedor de software de rápido aprendizado que constrói programas de alta qualidade sozinho.",
            link: "Veja Meu Trabalho",
        },
        modal: {
            images: "Imagens",
            why_title: "Por Que Foi Necessário",
            difficulties_title: "Dificuldades",
            solutions_title: "Como Eu Superei",
            learned_title: "O Que Aprendi",
        },
        projects: {
            private: "Esse projeto é privado.",
            header: "Projetos",
            title: {
                purchase: "Sistema de Compras",
                news: "Blog de Notícias com Programa de Fidelidade",
                books: "Catálogo de Livros Artesanais",
                excel: "Gerador Word para Excel",
                images: "Inserção Automática de Imagens em Excel",
                chat: "Aplicativo de Chat em Tempo Real",
            },
            description: {
                purchase: "Um aplicativo web complexo, desenvolvido solo com Laravel e Vue.js, contando com múltiplos modelos, carregamento assíncrono de dados, caching, testes unitários e padrões de design como Strategy e Observer.",
                news: "Um blog empresarial interativo com recursos semelhantes às redes sociais (curtidas, comentários), editor WYSIWYG para postagens e transações de pontos em tempo real em um programa de fidelidade para uso nos produtos da empresa.",
                books: "Um site elegante, simples e bem projetado para exibir um catálogo de livros infantis feitos à mão.",
                excel: "Uma ferramenta desktop desenvolvida solo com Go e Wails para analisar planilhas do Excel e gerar documentos do Word organizados por número de empresa, automatizando horas de trabalho manual.",
                images: "Um script rápido em Python usando openpyxl e pandas para inserir um grande número de imagens em uma coluna do Excel com base nos dados do produto.",
                chat: "Um aplicativo de chat desenvolvido com Go, WebSockets e Redis em poucas semanas para entregar mensagens em tempo real.",
            },
            why: {
                purchase: "O cliente precisava de um sistema centralizado para gerenciar ordens de compra em várias lojas e fornecedores, substituindo processos manuais lentos e propensos a erros.",
                news: "A empresa queria uma plataforma interna envolvente para compartilhar atualizações, incentivar interação entre funcionários e recompensar engajamento com um sistema de pontos.",
                books: "Um pequeno negócio precisava de uma presença online para exibir seus livros infantis artesanais únicos, atraindo clientes e simplificando pedidos.",
                excel: "Uma equipe precisava de uma ferramenta para automatizar a geração de relatórios Word formatados a partir de dados do Excel, eliminando trabalho manual repetitivo.",
                images: "Um cliente precisava preencher rapidamente uma planilha de inventário no Excel com imagens de produtos para uma apresentação, algo impraticável manualmente.",
                chat: "Uma startup exigiu uma ferramenta leve de comunicação em tempo real para sua equipe remota, evitando soluções de terceiros pesadas.",
            },
            difficulties: {
                purchase: "Integrar uma API legada mal documentada e garantir desempenho em tempo real com grandes conjuntos de dados, tudo sozinho, foi um grande desafio.",
                news: "Equilibrar transações de pontos em tempo real com uma interface responsiva, além de segurar conteúdo gerado pelo editor WYSIWYG, trouxe obstáculos técnicos.",
                books: "Criar um layout intuitivo e visualmente atraente que funcionasse em todos os dispositivos, mantendo simplicidade para donos não técnicos, foi complicado.",
                excel: "Analisar formatos variados de Excel e gerar documentos Word com estilo consistente dentro do ecossistema Go exigiu soluções criativas.",
                images: "Lidar com grandes lotes de imagens sem travar o Excel e associá-las precisamente aos IDs de produtos demandou um script eficiente.",
                chat: "Implementar WebSockets para mensagens em tempo real com baixa latência, garantindo escalabilidade em um prazo curto, testou meus limites.",
            },
            solutions: {
                purchase: "Construí um middleware em Laravel para normalizar dados da API, usei Redis para caching e Vue.js para atualizações assíncronas, focando em recursos testáveis.",
                news: "Integrei Redis para pontos em tempo real, filtrei entradas do WYSIWYG com segurança e otimizei o frontend com a reatividade do Vue.js.",
                books: "Usei TailwindCSS para um design elegante e responsivo e a simplicidade do Laravel no backend, com documentação clara para os donos.",
                excel: "Desenvolvi um parser em Go com Wails para uma interface nativa, mapeando dados do Excel para templates Word com formatação dinâmica, testado em amostras.",
                images: "Escrevi um script em Python com pandas para correspondência de dados e openpyxl para inserção de imagens, processando em lotes para evitar problemas de memória.",
                chat: "Implementei Go com WebSockets para mensagens de baixa latência, usei Redis para persistência de sessões e testei sob pressão em semanas.",
            },
            learned: {
                purchase: "Dominei padrões de design (Strategy, Observer) e ganhei confiança para construir sistemas complexos e performantes sozinho sob pressão.",
                news: "Aprendi a equilibrar interatividade e segurança em apps em tempo real, além do valor de ferramentas administrativas amigáveis para clientes empresariais.",
                books: "Aprimorei meu olhar para design minimalista e percebi como soluções pequenas e bem-feitas podem encantar usuários e clientes.",
                excel: "Aprofundei minhas habilidades em Go e descobri o poder de apps desktop para tarefas de automação específicas—a simplicidade pode transformar fluxos de trabalho.",
                images: "Melhorei minha eficiência em Python e aprendi a otimizar scripts para restrições reais como memória e velocidade.",
                chat: "Tive experiência prática com WebSockets e Redis, provando que posso entregar recursos em tempo real rapidamente sem complicar a pilha.",
            },
        },
        languages: "Linguagens & Ferramentas",
        about: {
            title: "Sobre Mim",
            work: {
                tools: {
                    title: "Ferramentas Que Uso",
                },
                ethic: {
                    title: "Ética de Trabalho",
                    description: "Focado em eficiência, velocidade e entregar valor através de soluções práticas",
                },
                goals: {
                    title: "Metas Atuais",
                    remote: "Me estabelecer no mercado remoto",
                    sync: "Criar meu ambiente sincronizado",
                    place: "Conseguir um novo espaço com área de trabalho dedicada",
                },
                history: {
                    title: "Histórico Profissional",
                    start: "Comecei a programar como hobby em 2017 (15 anos)",
                    mersan: "Mersan - Desenvolvedor Fullstack (07/2022 - atual)",
                    gamedev: "Comecei a modar Minecraft e criar meus próprios jogos",
                }
            },
            personal: {
                creative: {
                    title: "Criações",
                    procreate: "Ilustração Digital com Procreate",
                    gamedev: "Mods de jogos e desenvolvimento",
                    poems: "Escrever poemas",
                },
                obsessions: {
                    title: "Obsessões Atuais",
                    coding: "Programação",
                },
                music: {
                    title: "Música",
                    sopao: "Sopão é minha playlist do Spotify que basicamente \
                            mistura todas as minhas outras playlists (exceto metal, porque é grande demais) \
                            em uma só.",
                    playlist: "Playlist no Spotify"
                },
                gaming: {
                    title: "Jogos",
                },
            },
        },
        philosophy: {
            title: "Minha Filosofia como Desenvolvedor",
            description: "Gosto de desenvolver software da maneira mais simples possível, evitando bloat e dependências desnecessárias. Construo software de acordo com os recursos e necessidades: a menos que seja comprovado que precisa escalar, não há necessidade de otimizar prematuramente. Software simples é entregue rápido, funciona bem e evita dores de cabeça.",
        },
        contact: {
            title: "Contato",
            description: "Precisa de um desenvolvedor versátil que possa entrar e entregar resultados? Entre em contato!",
        },
        email: "Enviar Email",
        credits: "2025 Henrique Barrel. Todos os direitos reservados.",
    },
    es: {
        tbi: "Por implementar",
        nav: {
            projects: "Proyectos",
            about: "Sobre mí",
            contact: "Contacto",
        },
        option: {
            en: "Inglés",
            pt: "Portugués",
            es: "Español",
        },
        hero: {
            hi: "Hola, soy",
            description: "Un desarrollador de aprendizaje rápido que crea software de calidad de forma independiente.",
            link: "Ver mi trabajo",
        },
        modal: {
            images: "Imágenes",
            why_title: "Por Qué Fue Necesario",
            difficulties_title: "Dificultades",
            solutions_title: "Cómo Las Superé",
            learned_title: "Qué Aprendí",
        },
        projects: {
            private: "Este proyecto es privado.",
            header: "Proyectos",
            title: {
                purchase: "Sistema de Gestión de Compras",
                news: "Blog Empresarial con Programa de Fidelidad",
                books: "Catálogo de Libros Artesanales",
                excel: "Generador de Documentos desde Excel",
                images: "Automatizador de Imágenes en Excel",
                chat: "Aplicación de Chat en Tiempo Real",
            },
            description: {
                purchase: "Una aplicación web compleja, desarrollada en solitario con Laravel y Vue.js. Incluye múltiples modelos, carga de datos asíncrona, almacenamiento en caché, pruebas unitarias y patrones de diseño como Strategy y Observer.",
                news: "Un blog empresarial interactivo con funciones similares a redes sociales (me gusta, comentarios), un editor WYSIWYG para publicaciones y transacciones de puntos en tiempo real dentro de un programa de fidelidad para los productos de la empresa.",
                books: "Un sitio web elegante y bien diseñado para mostrar un catálogo de libros infantiles hechos a mano.",
                excel: "Herramienta de escritorio desarrollada en solitario con Go y Wails para analizar hojas de Excel y generar documentos de Word organizados por número de empresa, automatizando horas de trabajo manual.",
                images: "Script en Python que usa openpyxl y pandas para insertar imágenes en Excel basándose en datos de productos.",
                chat: "Aplicación de chat desarrollada en solitario con Go, WebSockets y Redis para ofrecer mensajería en tiempo real.",
            },
            why: {
                purchase: "El cliente necesitaba un sistema centralizado para gestionar órdenes de compra en varias tiendas y proveedores, reemplazando procesos manuales lentos y propensos a errores.",
                news: "La empresa quería una plataforma interna atractiva para compartir actualizaciones, fomentar la interacción entre empleados y recompensar el compromiso con un sistema de puntos.",
                books: "Un pequeño negocio necesitaba una presencia en línea para exhibir sus libros infantiles artesanales únicos, atrayendo clientes y simplificando pedidos.",
                excel: "Un equipo requería una herramienta para automatizar la generación de informes Word formateados a partir de datos de Excel, eliminando trabajo manual repetitivo.",
                images: "Un cliente necesitaba poblar rápidamente una hoja de inventario en Excel con imágenes de productos para una presentación, algo impracticable de hacer manualmente.",
                chat: "Una startup demandó una herramienta ligera de comunicación en tiempo real para su equipo remoto, evitando soluciones de terceros pesadas.",
            },
            difficulties: {
                purchase: "Integrar una API heredada mal documentada y garantizar rendimiento en tiempo real con grandes conjuntos de datos, todo en solitario, fue un gran desafío.",
                news: "Equilibrar transacciones de puntos en tiempo real con una interfaz responsiva, además de asegurar el contenido generado por el editor WYSIWYG, presentó obstáculos técnicos.",
                books: "Crear un diseño intuitivo y visualmente atractivo que funcionara en todos los dispositivos, manteniendo la simplicidad para propietarios no técnicos, fue complicado.",
                excel: "Analizar formatos variados de Excel y generar documentos Word con estilo consistente dentro del ecosistema de Go requirió soluciones creativas.",
                images: "Manejar lotes grandes de imágenes sin que Excel fallara y asociarlas precisamente a los IDs de productos exigió un script eficiente.",
                chat: "Implementar WebSockets para mensajería en tiempo real con baja latencia, asegurando escalabilidad en un plazo corto, puso a prueba mis límites.",
            },
            solutions: {
                purchase: "Construí un middleware en Laravel para normalizar datos de la API, usé Redis para caché y Vue.js para actualizaciones asíncronas, priorizando funciones testables.",
                news: "Integré Redis para puntos en tiempo real, filtré entradas del WYSIWYG con seguridad y optimicé el frontend con la reactividad de Vue.js.",
                books: "Usé TailwindCSS para un diseño elegante y responsivo y la simplicidad de Laravel en el backend, con documentación clara para los propietarios.",
                excel: "Desarrollé un parser en Go con Wails para una interfaz nativa, mapeando datos de Excel a plantillas Word con formato dinámico, probado en muestras.",
                images: "Escribí un script en Python con pandas para coincidencia de datos y openpyxl para inserción de imágenes, procesando en lotes para evitar problemas de memoria.",
                chat: "Implementé Go con WebSockets para mensajería de baja latencia, respaldado por Redis para persistencia de sesiones, y lo probé bajo presión en semanas.",
            },
            learned: {
                purchase: "Dominé patrones de diseño (Strategy, Observer) y gané confianza para construir sistemas complejos y performantes en solitario bajo presión.",
                news: "Aprendí a equilibrar interactividad y seguridad en aplicaciones en tiempo real, además del valor de herramientas administrativas amigables para clientes empresariales.",
                books: "Perfeccioné mi ojo para el diseño minimalista y comprendí cómo soluciones pequeñas y bien hechas pueden encantar a usuarios y clientes.",
                excel: "Profundicé mis habilidades en Go y descubrí el poder de las aplicaciones de escritorio para tareas de automatización específicas—la simplicidad puede transformar flujos de trabajo.",
                images: "Mejoré mi eficiencia en Python y aprendí a optimizar scripts para restricciones reales como memoria y velocidad.",
                chat: "Obtuve experiencia práctica con WebSockets y Redis, demostrando que puedo entregar funciones en tiempo real rápidamente sin complicar la pila.",
            },
        },
        languages: "Lenguajes y Herramientas",
        about: {
            title: "Sobre Mí",
            work: {
                tools: {
                    title: "Herramientas Que Uso",
                },
                ethic: {
                    title: "Ética de Trabajo",
                    description: "Enfocado en eficiencia, velocidad y entregar valor a través de soluciones prácticas",
                },
                goals: {
                    title: "Metas Actuales",
                    remote: "Establecerme en el mercado remoto",
                    sync: "Tener mi entorno sincronizado",
                    place: "Conseguir un nuevo espacio con área de trabajo dedicada",
                },
                history: {
                    title: "Historial Profesional",
                    start: "Empecé a programar como hobby en 2017 (15 años)",
                    mersan: "Mersan - Desarrollador Fullstack (07/2022 - actual)",
                    gamedev: "Empecé a modificar Minecraft y crear mis propios juegos",
                }
            },
            personal: {
                creative: {
                    title: "Intereses Creativos",
                    procreate: "Ilustración Digital con Procreate",
                    gamedev: "Modificación de juegos y desarrollo",
                    poems: "Escribir poemas",
                },
                obsessions: {
                    title: "Obsesiones Actuales",
                    coding: "Programación",
                },
                music: {
                    title: "Música",
                    sopao: "Sopão (literalmente una gran sopa) es mi playlist de Spotify que básicamente \
                            es una mezcla de todas mis otras playlists (excepto metal, porque es demasiado grande) \
                            en una gran revuelta musical.",
                    playlist: "Playlist en Spotify"
                },
                gaming: {
                    title: "Videojuegos",
                },
            },
        },
        philosophy: {
            title: "Mi Filosofía como Desenvolvedor",
            description: "Me gusta desarrollar software de la manera más simple posible, evitando sobrecarga y dependencias innecesarias. Construyo software que se ajusta a los recursos y necesidades: si no es necesario escalar, no hay razón para optimizar prematuramente. El software simple se entrega rápido, funciona bien y evita dolores de cabeza.",
        },
        contact: {
            title: "Contacto",
            description: "¿Buscas un desarrollador versátil capaz de aportar resultados de inmediato? ¡Contáctame!",
        },
        email: "Envíame un correo",
        credits: "© 2025 Henrique Barrel. Todos los derechos reservados.",
    },
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
