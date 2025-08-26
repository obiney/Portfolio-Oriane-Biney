// Données du quiz
const quizData = [
    {
        "question": "Dans quel domaine je me spécialise ?",
        "options": ["Frontend", "Backend", "Fullstack", "Mobile"],
        "correct": 2
    },
    {
        "question": "Chez quelle entreprise suis-je en alternance ?",
        "options": ["STDI", "Hatier", "Desk", "Studit"],
        "correct": 0
    },
    {
        "question": "Quel BUT ai-je suivi ?",
        "options": ["Informatique", "Métiers du Multimédia et de l’Internet (MMI)", "Métiers du livre et du patrimoine (MLP)", "Génie électrique et informatique industrielle (GEII)"],
        "correct": 1
    },
    {
        "question": "Quel sont les domaines qui m'intéressent ?",
        "options": ["Édition, éducation et santé","Éducation et sport", "Santé et éducation", "Sport, édition et santé"],
        "correct": 0
    },
    {
        "question": "Dans quelles villes je travaille ?",
        "options": ["Mayenne et Laval", "Lassay-les-Chateaux et Laval", "Mayenne et Le Mans", "Lassay-les-Chateaux et Le Mans"],
        "correct": 3
    },
    {
        "question": "Quel type de projets je préfère ?",
        "options": ["E-commerce", "Applications web", "Sites vitrine", "Jeux"],
        "correct": 1
    },
    {
        "question": "Quelle méthodologie ai-je étudié en BUT ?",
        "options": ["Agile", "Waterfall", "Scrum", "Kanban"],
        "correct": 0
    },
    {
        "question": "Quel est mon loisir préféré ?",
        "options": ["Gaming", "Sport", "Dessin", "Voyage"],
        "correct": 2
    },
    {
        "question": "Dans quelle école suis-je actuellement ?",
        "options": ["ENSIM au Mans", "l'IUT de Laval", "Animation", "Branding"],
        "correct": 0
    },
    {
        "question": "Quel est mon nom",
        "options": ["Oriane Binet", "Auriane Binet", "Oriane Biney", "Auriane Biney"],
        "correct": 2
    }
];

// Données des projets pour les modales
const projectsData = {
    tdm: {
        title: "Projet TDM",
        image: "./images/tdm2.png",
        description: "L’objectif du projet TDM (Traité de Médecine) était de transformer la mise en page InDesign en fichiers XML conformes aux demandes du client, défini dans une DTD, afin de générer des supports numériques.</p><p class='modal-project-description'>J’ai travaillé en étroite collaboration avec Sonia, opératrice PAO en charge de la mise en page. Mon rôle était de développer des outils adaptés à ses besoins, accessibles même sans compétences en développement.</p><p class='modal-project-description'>J’ai ainsi créé 7 scripts XSL : six pour transformer les fichiers XML exportés (structure, renommage de balises, numérotation, nettoyage du texte, placement des éléments) et un pour générer une version XHTML permettant à Sonia de vérifier facilement le résultat. J’ai aussi rédigé un guide pratique pour son utilisation et documenté le code pour les futurs développeurs.</p><p class='modal-project-description'>Les principales difficultés concernaient la variabilité des tableaux, les chemins d’images mal exportés et la structure XML parfois incohérente. Grâce à un travail conjoint avec Sonia et à des solutions techniques adaptées (restructuration en plusieurs étapes, adaptation du balisage, contrôles supplémentaires), nous avons réussi à fiabiliser la chaîne de production.</p><p class='modal-project-description'>Ce projet a été particulièrement formateur car je n’avais jamais travaillé avec XML/XSLT auparavant : j’ai dû rapidement monter en compétences pour concevoir des scripts robustes et exploitables en production.",
        technologies: ["XML", "XSLT"],
        features: [
            "Scripts XSLT",
            "Visualisation XHTML",
            "Guide d'utilisation",
        ],
        color : "rouge",
    },
    gestion: {
        title: "Plateforme de gestion",
        image: "./images/gestion2.png",
        description: "Jusqu’alors, les informations étaient centralisées dans un fichier Excel qui circulait entre plusieurs intervenants (éditeurs, auteurs, etc.). Ce mode de fonctionnement entraînait de nombreux problèmes : formats de données non respectés, modifications involontaires de lignes critiques, et conflits entre différentes versions du fichier.</p><p class='modal-project-description'>Pour répondre à ces enjeux, j’ai développé un outil intégré directement dans leur logiciel interne, sous la forme d’une page web. Cet outil remplace l’Excel et permet un accès centralisé et sécurisé aux données, évitant ainsi les erreurs et les pertes d’informations. J’ai travaillé en collaboration avec un membre de l’équipe prépresse, qui a conçu l’interface et défini les besoins fonctionnels. De mon côté, j’ai réalisé le développement en HTML, Bootstrap, JavaScript et PHP.</p><p class='modal-project-description'>Le projet a évolué au fil du temps en fonction des besoins identifiés et des contraintes techniques, qu’elles soient fonctionnelles ou ergonomiques. Cette expérience m’a permis d’adapter mon travail aux demandes spécifiques de l’entreprise et d’améliorer mes compétences en développement tout en répondant à une problématique concrète.",
        technologies: ["HTML/CSS", "PHP", "MySQL", "Javascript"],
        features: [
            "Maquettes",
            "Plateforme de gestion fonctionnel avec filtres"
        ],
        color : "vertC",
    },
    mayhumanlab: {
        title: "May HumanLab",
        image: "./images/may2.png",
        description: "Leur site existant, une simple page WordPress, n’était ni mis à jour ni fonctionnel pour leurs besoins. L’objectif était donc de concevoir une nouvelle version en accord avec leur charte graphique et d’en faire un vrai outil pour l’association.</p><p class='modal-project-description'>Le site devait répondre à plusieurs exigences : être facilement mis à jour, permettre aux bénévoles de se connecter, intégrer un agenda, afficher un trombinoscope et garantir l’accessibilité pour tous. Nous avons opté pour un design épuré, une navigation fluide en one-page pour la page d’accueil et un back-office simple d’utilisation. Différents niveaux d’accès ont été mis en place : les bénévoles ont un compte et peuvent accéder aux informations de l’association, mais seuls les administrateurs peuvent gérer les comptes.</p><p class='modal-project-description'>Tout au long du projet, nous avons échangé régulièrement avec les membres du Fab Lab pour adapter nos choix à leurs attentes.</p><p class='modal-project-description'>En termes techniques, nous avons développé le site en React pour l’interface et en PHP pour l’API, avec une répartition des tâches efficace.</p><p class='modal-project-description'>De mon côté, j’ai principalement travaillé sur la base de données, la gestion du site en front et back, ainsi que sur l’ergonomie (navigation clavier et compatibilité avec les lecteurs d’écran). J’ai également participé à la rédaction d’un manuel d’utilisation pour accompagner les membres dans la prise en main de leur nouvel outil.",
        technologies: ["HTML/CSS", "React", "PHP Symfony", "MySQL", "Javascript",],
        features: [
            "Base de données",
            "Site vitrine",
            "Backoffice",
            "Gestion de compte"
        ],
        color : "nuit",
    },
    dopinfos: {
        title: "DopInfos",
        image: "./images/dop2.png",
        description: "Nous avons conçu des mascottes pour illustrer nos messages et élaboré une charte graphique cohérente autour de celles-ci. Nous l'avons ensuite réutilisé pour nos vidéos, articles et photographies.</p><p class='modal-project-description'>Le site a été développé sur WordPress, et le spot vidéo monté sur DaVinci Resolve. Ce projet a été un véritable défi d’organisation, étant notre premier travail en groupe sur un projet complet, où nous avons mis en pratique les compétences acquises dans la formation.</p><p class='modal-project-description'>Le site web contient nos vidéos et podcasts. Son contenu est tiré du site du gouvernement du Québec.",
        technologies: ["Wordpress", "HTML/CSS", "Javascript"],
        features: [
            "Site internet Wordpress",
            "Vidéos",
            "Photographies",
            "Podcast"
        ],
        color : "jaune",
    },
    burn: {
        title: "Burn the House",
        image: "./images/burn2.png",
        description: " L’objectif était de nous familiariser avec la syntaxe et les concepts propres à Flutter, tout en appliquant nos connaissances en programmation à un nouveau projet sortant du cadre scolaire habituel. Avant de nous lancer dans le code, nous avons pris le temps de planifier le jeu sur papier : scénario, mécaniques de gameplay, architecture du projet et répartition des tâches. Cette phase de préparation nous a permis d’avoir une vision claire de notre progression avant de commencer le développement.</p><p class='modal-project-description'>J’ai principalement travaillé sur les fonctionnalités « de base », afin qu’elles soient réutilisables tout le long du projet. Je me suis occupée de la génération des pièces, du passage des portes, du déplacement du personnage, de la gestion de l’inventaire et des menus. Une fois implémentées, j’ai surtout servi de soutien auprès des autres membres de mon groupe. J’ai également pu travailler un peu de pixel art en réalisant les illustrations des différents menus.</p><p class='modal-project-description'>Ce jeu a été un vrai défi pour la gestion de projet. Nous avons dû mettre en place une répartition des tâches claire afin d’être sûr de ne pas se bloquer dans le développement des différentes fonctionnalités.",
        technologies: ["Flame", "Flutter"],
        features: [
            "Jeu 2D fonctionnel avec scénario, interactions et plusieurs fins possibles.",
        ],
        color : "horror"
    },
    escape: {
        title: "Escape Game",
        image: "./images/escape2.png",
        description: "L’objectif était d’explorer la mobilité, l’interaction et le séquençage à travers une expérience immersive. Ce projet constituait également une première approche du développement sous Unity en C#.</p><p class='modal-project-description'>Le jeu se déroule dans un magasin dont il faut s’échapper en réalisant le plat du jour. Pour cela, le joueur doit suivre plusieurs étapes : identifier la recette correcte parmi les affiches, rassembler les bons ingrédients, les combiner dans une machine, puis placer le plat préparé sur le plateau de la caissière, qui remettra ensuite la clé permettant de sortir. Un chronomètre affiche le temps réalisé à la fin de l’épreuve. Travaillant en binôme, j’ai principalement développé les scripts et les interactions entre les objets, tandis que mon binôme s’est concentré sur la conception des étapes du jeu et les phases de test. Ce projet m’a permis d’approfondir mes compétences en programmation d’interactions en réalité virtuelle et en conception d’expériences immersives.</p><p class='modal-project-description'>Tous les objets présents dans l’environnement sont interactifs. Une machine permet d’associer différents ingrédients pour créer des plats variés. Nous avons utilisé des modèles 3D libres de droit pour concevoir le décor et les éléments du jeu (site : kenney.nl).",
        technologies: ["C#", "Unity"],
        features: [
            "Jeu VR fonctionnel avec scénario, interactions et chronomètre.",
        ],
        color : "vert",
    }
};

// Variables globales pour le quiz
let currentQuestionIndex = 0;
let userAnswers = [];
let quizScore = 0;

// Fonction pour faire défiler vers une section (fonction globale)
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const offsetTop = section.offsetTop - 70; // Hauteur de la navbar
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// Fonctions globales pour le quiz
function startQuiz() {
    const quizIntro = document.getElementById('quiz-intro');
    const quizContainer = document.getElementById('quiz-container');
    const quizResults = document.getElementById('quiz-results');
    
    if (quizIntro && quizContainer) {
        quizIntro.classList.add('hidden');
        quizContainer.classList.remove('hidden');
        if (quizResults) {
            quizResults.classList.add('hidden');
        }
        
        // Réinitialiser le quiz
        currentQuestionIndex = 0;
        userAnswers = [];
        quizScore = 0;
        
        displayQuestion();
    }
}

function nextQuestion() {
    if (currentQuestionIndex < quizData.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    } else {
        calculateAndShowResults();
    }
}

function resetQuiz() {
    const quizResults = document.getElementById('quiz-results');
    const quizIntro = document.getElementById('quiz-intro');
    
    if (quizResults && quizIntro) {
        quizResults.classList.add('hidden');
        quizIntro.classList.remove('hidden');
    }
    
    // Réinitialiser les variables
    currentQuestionIndex = 0;
    userAnswers = [];
    quizScore = 0;
}

// Fonctions globales pour les modales de projets
function openProjectModal(projectId) {
    const modal = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body');
    const project = projectsData[projectId];
    
    if (!project || !modal || !modalBody) return;
    
    // Générer le contenu de la modale
    modalBody.innerHTML = `
        <img src="${project.image}" alt="${project.title}" class="modal-project-image">
        <h2 class="modal-project-title ${project.color}">${project.title}</h2>
        <p class="modal-project-description">${project.description}</p>
        
        <div class="modal-tech-list">
            ${project.technologies.map(tech => `<span class="modal-tech-tag ${project.color}">${tech}</span>`).join('')}
        </div>
        
        <div class="modal-features">
            <h4 class="${project.color}">Réalisations :</h4>
            <ul>
                ${project.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
        </div>
    `;
    
    // Afficher la modale
    modal.classList.remove('hidden');
    modal.classList.add('show');
    
    // Empêcher le scroll du body
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    const modal = document.getElementById('project-modal');
    if (modal) {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.classList.add('hidden');
        }, 300);
        
        // Réactiver le scroll du body
        document.body.style.overflow = '';
    }
}

// Initialisation du site
document.addEventListener('DOMContentLoaded', function() {
    console.log('Site initialisé');
    initializeNavigation();
});

// ======= NAVIGATION =======
function initializeNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle menu mobile
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }

    // Navigation smooth scroll
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            
            if (href && href.startsWith('#')) {
                const targetId = href.substring(1);
                scrollToSection(targetId);
                
                // Fermer le menu mobile
                if (navMenu && navToggle) {
                    navMenu.classList.remove('active');
                    navToggle.classList.remove('active');
                }
                
                // Mettre à jour l'état actif
                updateActiveNavLink(this);
            }
        });
    });

    // Mise à jour de l'état actif au scroll
    window.addEventListener('scroll', updateActiveNavOnScroll);
}

function updateActiveNavLink(activeLink) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    activeLink.classList.add('active');
}

function updateActiveNavOnScroll() {
    const sections = document.querySelectorAll('.section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        const dataSection = link.getAttribute('data-section');
        if (dataSection === current) {
            link.classList.add('active');
        }
    });
}

// ======= QUIZ =======
function displayQuestion() {
    const question = quizData[currentQuestionIndex];
    const progressPercentage = ((currentQuestionIndex + 1) / quizData.length) * 100;
    
    // Mettre à jour la barre de progression
    const progressFill = document.getElementById('progress-fill');
    const progressText = document.getElementById('progress-text');
    
    if (progressFill) {
        progressFill.style.width = progressPercentage + '%';
    }
    
    if (progressText) {
        progressText.textContent = `Question ${currentQuestionIndex + 1} sur ${quizData.length}`;
    }
    
    // Afficher la question
    const questionText = document.getElementById('question-text');
    if (questionText) {
        questionText.textContent = question.question;
    }
    
    // Générer les options
    const optionsContainer = document.getElementById('quiz-options');
    if (optionsContainer) {
        optionsContainer.innerHTML = '';
        
        question.options.forEach((option, index) => {
            const optionElement = document.createElement('button');
            optionElement.className = 'quiz-option';
            optionElement.textContent = `${String.fromCharCode(65 + index)}. ${option}`;
            optionElement.addEventListener('click', () => selectOption(index, optionElement));
            optionsContainer.appendChild(optionElement);
        });
    }
    
    // Désactiver le bouton suivant
    const nextBtn = document.getElementById('next-btn');
    if (nextBtn) {
        nextBtn.disabled = true;
        
        // Mettre à jour le texte du bouton
        if (currentQuestionIndex === quizData.length - 1) {
            nextBtn.textContent = 'Voir les résultats';
        } else {
            nextBtn.textContent = 'Question suivante';
        }
    }
}

function selectOption(selectedIndex, optionElement) {
    // Retirer la sélection précédente
    document.querySelectorAll('.quiz-option').forEach(option => {
        option.classList.remove('selected');
    });
    
    // Ajouter la sélection actuelle
    optionElement.classList.add('selected');
    
    // Stocker la réponse
    userAnswers[currentQuestionIndex] = selectedIndex;
    
    // Activer le bouton suivant
    const nextBtn = document.getElementById('next-btn');
    if (nextBtn) {
        nextBtn.disabled = false;
    }
}

function calculateAndShowResults() {
    // Calculer le score
    quizScore = 0;
    for (let i = 0; i < quizData.length; i++) {
        if (userAnswers[i] === quizData[i].correct) {
            quizScore += 10; // 10 points par bonne réponse
        }
    }
    
    // Masquer le quiz et afficher les résultats
    const quizContainer = document.getElementById('quiz-container');
    const quizResults = document.getElementById('quiz-results');
    
    if (quizContainer && quizResults) {
        quizContainer.classList.add('hidden');
        quizResults.classList.remove('hidden');
    }
    
    // Afficher le score
    const scoreText = document.getElementById('score-text');
    if (scoreText) {
        scoreText.textContent = `${quizScore}/100`;
    }
    
    // Mettre à jour le cercle de score
    const scoreCircle = document.querySelector('.score-circle');
    if (scoreCircle) {
        const percentage = (quizScore / 100) * 360;
        scoreCircle.style.background = `conic-gradient(var(--primary-color) ${percentage}deg, var(--light-gray) ${percentage}deg)`;
    }
    
    // Afficher le message personnalisé
    const messageElement = document.getElementById('score-message');
    if (messageElement) {
        let message = '';
        let messageClass = '';
        
        if (quizScore >= 90) {
            message = 'Excellent ! Tu me connais parfaitement ! 🎉';
            messageClass = 'excellent';
        } else if (quizScore >= 70) {
            message = 'Très bien ! Tu me connais bien. 👏';
            messageClass = 'good';
        } else if (quizScore >= 50) {
            message = 'Pas mal ! Tu commences à me cerner. 👍';
            messageClass = 'average';
        } else {
            message = 'Il faut encore apprendre à me connaître ! 📚';
            messageClass = 'poor';
        }
        
        messageElement.textContent = message;
        messageElement.className = `score-message ${messageClass}`;
    }
}

// ======= GESTION DES ÉVÉNEMENTS =======

// Fermeture de la modale avec Escape
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const modal = document.getElementById('project-modal');
        if (modal && modal.classList.contains('show')) {
            closeProjectModal();
        }
        
        // Fermer aussi le menu mobile
        const navMenu = document.getElementById('nav-menu');
        const navToggle = document.getElementById('nav-toggle');
        
        if (navMenu && navToggle && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    }
});

// Gestion du redimensionnement de la fenêtre
window.addEventListener('resize', function() {
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    
    if (window.innerWidth > 768 && navMenu && navToggle) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    }
});