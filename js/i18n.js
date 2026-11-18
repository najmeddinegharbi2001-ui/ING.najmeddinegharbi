(function () {
    const englishText = {
        'Ingénieur Génie Civil': 'Civil Engineer',
        'À Propos': 'About',
        'Projets & Stages': 'Projects & Internships',
        'Logiciels & Compétences': 'Software & Skills',
        'Compétences': 'Skills',
        'Parcours': 'Experience',
        'Vie Associative': 'Community',
        'Me Contacter': 'Contact Me',
        'Choisir la langue': 'Choose language',
        'Ouvrir le menu de navigation': 'Open navigation menu',
        'Afficher l’adresse e-mail': 'Show contact links',
        "Afficher l'adresse e-mail": 'Show contact links',
        'Afficher mes réseaux sociaux': 'Show my social profiles',
        'Liens de contact': 'Contact links',
        'Liens sociaux et contact': 'Social & contact links',
        'Contactez-moi': 'Get in touch',
        'Réseaux sociaux': 'Social profiles',
        'Réseaux & contact': 'Social & contact',
        'Mail': 'Email',
        'Disponible pour de nouvelles opportunités': 'Available for new opportunities',
        'De la vision à la construction, nous donnons vie à vos idées': 'From vision to construction, we bring your ideas to life',
        'Découvrir Mes Projets': 'Explore My Projects',
        'Voir mon CV': 'View my CV',
        'Aperçu du CV': 'CV Preview',
        'Aperçu du CV en français': 'French CV preview',
        "Fermer l'aperçu du CV": 'Close CV preview',
        'Langue du CV': 'CV language',
        'CV Français': 'French CV',
        'Ouvrir le CV dans un nouvel onglet': 'Open CV in a new tab',
        'Ouvrir le PDF': 'Open PDF',
        'Télécharger le CV': 'Download CV',
        'À Propos de Moi': 'About Me',
        'Profil': 'Profile',
        'Compétences Clés': 'Key Skills',
        'Profil & Compétences Clés': 'Profile & Key Skills',
        'Je suis': 'I am',
        ', Ingénieur Génie Civil diplômé de l’': ', a Civil Engineer graduated from ',
        ", Ingénieur Génie Civil diplômé de l'": ', a Civil Engineer graduated from ',
        ', titulaire d’une ': ', and hold a ',
        ", titulaire d'une ": ', and hold a ',
        ' de l’ISSAT Gabès.': ' from ISSAT Gabès.',
        " de l'ISSAT Gabès.": ' from ISSAT Gabès.',
        'Rigoureux et motivé, je possède des compétences solides en ': 'Rigorous and motivated, I have strong skills in ',
        'conception et calcul structural': 'structural design and analysis',
        ' (Béton Armé), ': ' (reinforced concrete), ',
        'modélisation hydraulique & routière': 'hydraulic and road modelling',
        ', ainsi que la ': ', as well as ',
        'maîtrise des processus BIM': 'BIM process expertise',
        ' sous Autodesk Revit et Robot Structural Analysis.': ' using Autodesk Revit and Robot Structural Analysis.',
        'Mon parcours comprend également des expériences terrain au sein d’entreprises et de bureaux d’études, notamment dans le suivi de chantiers et la réalisation d’ouvrages d’art et d’assainissement.': 'My experience also includes field work with contractors and engineering consultancies, including site supervision and the delivery of bridges and drainage infrastructure.',
        "Mon parcours comprend également des expériences terrain au sein d'entreprises et de bureaux d'études, notamment dans le suivi de chantiers et la réalisation d'ouvrages d'art et d'assainissement.": 'My experience also includes field work with contractors and engineering consultancies, including site supervision and the delivery of bridges and drainage infrastructure.',
        'Formation': 'Education',
        'Ingénieur (2023 - 2026)': 'Engineering degree (2023–2026)',
        'Adresse': 'Location',
        "M'saken, Sousse, Tunisie": "M'saken, Sousse, Tunisia",
        'Conception Routière & VRD': 'Road & Infrastructure Design',
        'Tracé géométrique (14 km), chaussées (ALIZE, PISTE 5, Civil 3D), bassins versants et assainissement.': 'Geometric design (14 km), pavement design (ALIZE, PISTE 5, Civil 3D), watersheds and drainage.',
        "Calcul d'Ouvrages d'Art": 'Bridge & Structural Design',
        'Étude complète Pont VIPP précontraint sur Oued Nebhana, câbles moyens, vérifications ELU/ELS & ferraillage.': 'Full design study of a prestressed VIPP bridge over Oued Nebhana, tendon design, ULS/SLS checks and reinforcement.',
        'BIM 3D & Structures': '3D BIM & Structures',
        'Modélisation 3D Revit, descente de charges & analyse de sollicitations sous Robot Structural Analysis.': '3D Revit modelling, load take-down and structural analysis with Robot Structural Analysis.',
        'Suivi & Sécurité Chantier': 'Site Supervision & Safety',
        'Supervision de chantiers R+4, contrôle coffrage/ferraillage, respect des normes HSE et métrés.': 'Supervision of R+4 building sites, formwork and reinforcement checks, HSE compliance and quantity surveying.',
        'Réalisations Techniques': 'Technical Work',
        'Expériences & Projets Marquants': 'Experience & Key Projects',
        "Projets d'ingénierie et de stages issus de mon parcours sur le terrain et en bureau d'études.": 'Engineering projects and internships from my field and design-office experience.',
        'Tous les Projets': 'All Projects',
        "Ouvrages d'Art & Ponts": 'Structures & Bridges',
        'Infrastructures & Routes': 'Infrastructure & Roads',
        'BIM & Calcul Structure': 'BIM & Structural Analysis',
        'Chantier & Bâtiment': 'Construction Sites & Buildings',
        "Ouvrage d'Art sur Route Locale RL 892": 'Bridge Structure on Local Road RL 892',
        'Conception routière et ouvrage d’art': 'Road and bridge design',
        "Conception routière et ouvrage d'art": 'Road and bridge design',
        'PFE Ingénieur • 02/2026 - 06/2026': 'Engineering Capstone • 02/2026 - 06/2026',
        'Entreprise Gloulou': 'Gloulou Company',
        'Conception Routière & Pont VIPP (Oued Nebhana)': 'Road Design & VIPP Bridge (Oued Nebhana)',
        "Étude géométrique d'un tronçon autoroutier de 14 km et étude complète de la précontrainte (câble moyen, pertes, vérifications ELU/ELS) pour un pont en béton précontraint (VIPP).": 'Geometric design of a 14 km highway section and full prestressing study (tendon profile, losses, ULS/SLS checks) for a prestressed concrete VIPP bridge.',
        'Béton Précontraint': 'Prestressed Concrete',
        'Détails du Projet': 'Project Details',
        'Stage Ingénieur • 06/2025 - 07/2025': 'Engineering Internship • 06/2025 - 07/2025',
        "Bureau d'Études EPEC": 'EPEC Engineering Consultancy',
        'Conception BIM & Calcul Structure (Oued Hamdoun)': 'BIM Design & Structural Analysis (Oued Hamdoun)',
        "Modélisation 3D sous Revit des ouvrages hydrauliques à Sousse, analyse des sollicitations structurales sous Robot Structural Analysis et réalisation des plans d'exécution.": '3D Revit modelling of hydraulic structures in Sousse, structural analysis with Robot Structural Analysis and production of execution drawings.',
        'Ferraillage': 'Reinforcement',
        'PFE Licence • 02/2023 - 06/2023': 'Bachelor’s Capstone • 02/2023 - 06/2023',
        'Entreprise Gloulou • Sidi Bouzid': 'Gloulou Company • Sidi Bouzid',
        'Ouvrage de franchissement sur RL 892': 'Bridge Structure on Local Road RL 892',
        "Étude technique globale, modélisation hydrologique/hydraulique, calcul des ferraillages selon normes et suivi d'exécution des plans sur le chantier.": 'Comprehensive technical study, hydrological/hydraulic modelling, code-based reinforcement design and site follow-up of execution drawings.',
        'Hydraulique': 'Hydraulics',
        'Ferraillage CRT': 'Reinforcement Design',
        'Stage Chantier • 06/2022 - 07/2022': 'Construction Internship • 06/2022 - 07/2022',
        'Suivi & Contrôle de Chantier Bâtiment R+4': 'R+4 Building Site Supervision & Inspection',
        'Direction quotidienne des travaux, contrôle de conformité des éléments structuraux (poteaux, poutres, dalles) et gestion des équipes HSE.': 'Daily site supervision, structural compliance checks (columns, beams and slabs) and HSE team coordination.',
        'Suivi Gros Œuvre': 'Structural Works Supervision',
        'Normes HSE': 'HSE Standards',
        'Stage Dessin • 07/2021 - 08/2021': 'Drafting Internship • 07/2021 - 08/2021',
        'Bureau d’Études BTEC': 'BTEC Engineering Consultancy',
        "Bureau d'Études BTEC": 'BTEC Engineering Consultancy',
        'Conception & Plans de Coffrage': 'Design & Formwork Drawings',
        'Élaboration des plans de coffrage pour bâtiments et ouvrages hydrauliques, vérification de la cohérence entre plans architecturaux et structuraux.': 'Preparation of formwork drawings for buildings and hydraulic structures, checking consistency between architectural and structural plans.',
        'Plans Coffrage': 'Formwork Drawings',
        'Dessin Technique': 'Technical Drafting',
        'Expertise & Logiciels': 'Expertise & Software',
        'Compétences Techniques': 'Technical Skills',
        'Outils & Logiciels': 'Tools & Software',
        'Domaines Techniques': 'Technical Areas',
        'Dimensionnement et Calcul de Ferraillage': 'Structural Design & Reinforcement Calculations',
        "Dessin Technique & Plans d'Exécution": 'Technical Drafting & Construction Drawings',
        'Réseaux sociaux': 'Social media',
        'Conception Structurale (BA & Précontraint)': 'Structural Design (Reinforced & Prestressed Concrete)',
        'Modélisation Hydrologique & Hydraulique': 'Hydrological & Hydraulic Modelling',
        'Métré & Devis Estimatif': 'Quantity Surveying & Cost Estimates',
        'Diplômes & Expériences': 'Education & Experience',
        'Parcours Académique & Professionnel': 'Academic & Professional Journey',
        'Stagiaire Ingénieur (PFE) • Entreprise Gloulou': 'Engineering Intern (Capstone) • Gloulou Company',
        "Stagiaire Ingénieur • Bureau d'Études EPEC": 'Engineering Intern • EPEC Engineering Consultancy',
        'Stagiaire Ingénieur • Bureau d’Études EPEC': 'Engineering Intern • EPEC Engineering Consultancy',
        'Conception routière (14 km), bassins versants et dimensionnement structural Pont VIPP en béton précontraint sur Oued Nebhana.': 'Road design (14 km), watershed analysis and structural design of a prestressed-concrete VIPP bridge over Oued Nebhana.',
        'Modélisation BIM 3D (Revit), calcul sous Robot Structural Analysis et réalisation de plans de ferraillage (Oued Hamdoun Sousse).': '3D BIM modelling (Revit), structural analysis in Robot Structural Analysis and reinforcement drawings (Oued Hamdoun, Sousse).',
        'Cycle Ingénieur en Génie Civil': 'Civil Engineering Degree',
        'École d’Ingénieurs Polytechnique de Sousse': 'Polytechnic School of Sousse',
        "École d'Ingénieurs Polytechnique de Sousse": 'Polytechnic School of Sousse',
        'Stagiaire Technicien (PFE) • Entreprise Gloulou': 'Technical Intern (Capstone) • Gloulou Company',
        "Étude hydraulique & calcul structural d'un ouvrage d'art sur RL 892 (Sidi Bouzid) et suivi d'exécution.": 'Hydraulic study and structural design of a bridge on RL 892 (Sidi Bouzid), with construction follow-up.',
        'Stagiaire Technicien • Entreprise Gloulou': 'Technical Intern • Gloulou Company',
        "Suivi et contrôle de chantier d'un bâtiment R+4 : conformité des éléments structuraux, application des plans d'exécution et respect des normes HSE.": 'Supervision and inspection of an R+4 building site: structural compliance, adherence to construction drawings and HSE standards.',
        'Stagiaire Technicien • Bureau d’Études BTEC': 'Technical Intern • BTEC Engineering Consultancy',
        "Stagiaire Technicien • Bureau d'Études BTEC": 'Technical Intern • BTEC Engineering Consultancy',
        "Élaboration de plans de coffrage (bâtiments et ouvrages hydrauliques) et vérification de la cohérence des plans architecturaux et structuraux.": 'Preparation of formwork drawings for buildings and hydraulic structures, and cross-checking architectural and structural plans.',
        "Étude hydraulique & calcul structural d'un ouvrage d'art sur RL 892 (Sidi Bouzid) et suivi d'exécution.": 'Hydraulic study and structural design of a bridge on RL 892 (Sidi Bouzid), with construction follow-up.',
        "Suivi et contrôle de chantier d'un bâtiment R+4 : conformité des éléments structuraux, application des plans d'exécution et respect des normes HSE.": 'Supervision and inspection of an R+4 building site: structural compliance, adherence to construction drawings and HSE standards.',
        'Licence en Génie Civil': 'Bachelor’s Degree in Civil Engineering',
        'ISSAT Gabès (Institut Supérieur des Sciences Appliquées et de Technologie)': 'ISSAT Gabès (Higher Institute of Applied Sciences and Technology)',
        'Baccalauréat en Sciences Techniques': 'Technical Sciences Baccalaureate',
        'Lycée Ibnou Sina M’saken | Sousse': 'Ibnou Sina High School, M’saken | Sousse',
        "Lycée Ibnou Sina M'saken | Sousse": 'Ibnou Sina High School, M’saken | Sousse',
        'Leadership & Bénévolat': 'Leadership & Volunteering',
        '2023 - Présent': '2023 - Present',
        'Responsable Marketing & Média (2022-2023)': 'Marketing & Media Manager (2022–2023)',
        'Centres d’Intérêt & Engagement': 'Interests & Community Involvement',
        "Centres d'Intérêt & Engagement": 'Interests & Community Involvement',
        'Jeune Chambre Internationale (JCI M’saken)': 'Junior Chamber International (JCI M’saken)',
        "Jeune Chambre Internationale (JCI M'saken)": 'Junior Chamber International (JCI M’saken)',
        'Directeur Média (2025)': 'Media Director (2025)',
        'Membre Actif (2023 - 2024)': 'Active Member (2023–2024)',
        'Club Génie Civil - ISSAT Gabès': 'Civil Engineering Club - ISSAT Gabès',
        'Responsable Marketing & Média (2022-2023)': 'Marketing & Media Manager (2022–2023)',
        'Membre Actif (2020 - 2022)': 'Active Member (2020–2022)',
        'Croissant-Rouge Tunisien': 'Tunisian Red Crescent',
        'Membre Bénévolat': 'Volunteer Member',
        'Comité Local M’saken': 'M’saken Local Committee',
        "Comité Local M'saken": 'M’saken Local Committee',
        'Coordonnées': 'Contact',
        'Contactez-Moi Directement': 'Get in Touch',
        'Téléphone': 'Phone',
        'WhatsApp Direct': 'Message me on WhatsApp',
        'Email Direct': 'Send me an email',
        'Retrouvez-moi aussi sur': 'Connect with me',
        'Facebook de Najmeddine Gharbi': 'Najmeddine Gharbi on Facebook',
        'LinkedIn de Najmeddine Gharbi': 'Najmeddine Gharbi on LinkedIn',
        'Instagram de Najmeddine Gharbi': 'Najmeddine Gharbi on Instagram',
        'Nom & Prénom': 'Full Name',
        'Sujet': 'Subject',
        'Message': 'Message',
        'Envoyer le Message': 'Send Message',
        'Ex: Ali Ben Salem': 'e.g. Alex Smith',
        'nom@entreprise.tn': 'name@company.com',
        'Opportunité de recrutement / Consulting...': 'Recruitment opportunity / Consulting...',
        'Bonjour Najmeddine...': 'Hello Najmeddine...',
        'Nouveau message depuis le portfolio': 'New message from the portfolio',
        'Fermer': 'Close',
        'Détails des Réalisations :': 'Project Highlights:',
        '© 2026 Najmeddine Gharbi. Tous droits réservés.': '© 2026 Najmeddine Gharbi. All rights reserved.',
        'Profil LinkedIn de Najmeddine Gharbi': 'Najmeddine Gharbi on LinkedIn',
        'Portrait de Najmeddine Gharbi': 'Portrait of Najmeddine Gharbi',
        'BIM Oued Hamdoun': 'BIM project at Oued Hamdoun',
        'Ouvrage RL 892': 'Bridge structure on RL 892',
        'Plans de coffrage BTEC': 'BTEC formwork drawings'
    };

    const projectDetailsEn = {
        'proj-pfe-ing': {
            title: 'Engineering Capstone Intern - Gloulou Company',
            period: '02/2026 - 06/2026',
            description: 'Comprehensive road engineering study and structural design of a major bridge structure.',
            highlights: [
                'Road & Hydraulic Design (14 km): Geometric design of a highway section, including watershed delineation and road drainage.',
                'VIPP Bridge Design (Oued Nebhana): Preliminary and detailed structural design, including prestressing tendons, losses, and ULS/SLS verifications.',
                'Software: ALIZE, Civil 3D, Global Mapper, AutoCAD and Excel.'
            ]
        },
        'proj-epec': {
            title: 'Engineering Intern - EPEC Engineering Consultancy',
            period: '06/2025 - 07/2025',
            description: '3D BIM design and structural analysis of hydraulic structures in the Sousse area.',
            highlights: [
                '3D modelling of hydraulic structures on Oued Hamdoun using Autodesk Revit.',
                'Load and structural analysis in Robot Structural Analysis, with reinforcement design.',
                'Production of formwork and reinforcement drawings for inspection and collection chambers.'
            ]
        },
        'proj-pfe-lic': {
            title: 'Technical Capstone Intern - Gloulou Company',
            period: '02/2023 - 06/2023',
            description: 'Comprehensive technical study of a bridge structure on Local Road RL 892 in Sidi Bouzid.',
            highlights: [
                'Hydrological and hydraulic modelling, watershed delineation and peak-flow calculations.',
                'Preliminary design and reinforcement calculations in accordance with standards.',
                'Preparation of construction drawings and on-site compliance follow-up.'
            ]
        },
        'proj-chantier': {
            title: 'Technical Intern - Gloulou Company (R+4)',
            period: '06/2022 - 07/2022',
            description: 'Site supervision and quality control for an R+4 building.',
            highlights: [
                'Daily supervision of structural works.',
                'Inspection of columns, beams, slabs and shear walls.',
                'Ensured compliance with execution drawings and HSE requirements.'
            ]
        },
        'proj-btec': {
            title: 'Technical Intern - BTEC Engineering Consultancy',
            period: '07/2021 - 08/2021',
            description: 'Formwork design and technical drafting for buildings and hydraulic structures.',
            highlights: [
                'Preparation of formwork drawings using consistent drafting conventions.',
                'Review of consistency between architectural and structural drawings.'
            ]
        }
    };

    const originalText = new WeakMap();
    const originalAttributes = new WeakMap();
    let currentLanguage = 'fr';

    function getDeviceLanguage() {
        const preferredLanguages = navigator.languages?.length
            ? navigator.languages
            : [navigator.language];
        const matchingLanguage = preferredLanguages.find(language =>
            /^(en|fr)(-|$)/i.test(language)
        );

        return matchingLanguage?.toLowerCase().startsWith('en') ? 'en' : 'fr';
    }

    function translatePage(language) {
        currentLanguage = language;
        window.currentLanguage = language;
        document.documentElement.lang = language;
        document.title = language === 'en'
            ? 'Najmeddine Gharbi | Civil Engineer'
            : 'Najmeddine Gharbi | Ingénieur Génie Civil';

        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
        let textNode;
        while ((textNode = walker.nextNode())) {
            const parent = textNode.parentElement;
            if (!parent || parent.closest('svg, script, style')) continue;
            if (!originalText.has(textNode)) originalText.set(textNode, textNode.nodeValue);

            const source = originalText.get(textNode);
            const trimmed = source.trim();
            const translated = language === 'en' ? englishText[trimmed] : null;
            if (translated) {
                textNode.nodeValue = source.replace(trimmed, translated);
            } else {
                textNode.nodeValue = source;
            }
        }

        document.querySelectorAll('[title], [aria-label], [placeholder], img[alt], input[name="_subject"]').forEach(element => {
            let attributes = originalAttributes.get(element);
            if (!attributes) {
                attributes = {};
                originalAttributes.set(element, attributes);
            }

            ['title', 'aria-label', 'placeholder', 'alt', 'value'].forEach(attribute => {
                if (!element.hasAttribute(attribute)) return;
                if (!(attribute in attributes)) attributes[attribute] = element.getAttribute(attribute);
                const source = attributes[attribute];
                element.setAttribute(attribute, language === 'en' ? (englishText[source] || source) : source);
            });
        });

        document.querySelectorAll('[data-language-switch]').forEach(button => {
            const isActive = button.dataset.languageSwitch === language;
            button.classList.toggle('is-active', isActive);
            button.setAttribute('aria-pressed', String(isActive));
        });

        if (window.refreshProjectModal) window.refreshProjectModal();
    }

    document.querySelectorAll('[data-language-switch]').forEach(button => {
        button.addEventListener('click', () => translatePage(button.dataset.languageSwitch));
    });

    window.projectDetailsEn = projectDetailsEn;
    window.setPortfolioLanguage = translatePage;
    translatePage(getDeviceLanguage());
})();
