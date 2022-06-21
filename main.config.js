const config = {
    theme: {
        width: '900pt',
    },
    meta: {
        title: 'Accretence',
        description: "Amirhossein Mohammadi's Personal Website & Portfolio! 👨‍💻",
        url: 'https://accretence.com',
        image: 'https://user-images.githubusercontent.com/45223699/172024380-b4aa82ee-1356-49ff-8772-eb28871dc44c.jpg',
        handle: '@accretence',
        keywords: 'portfolio, accretence',
    },
    tabs: [
        {
            label: 'EXPERIENCES',
            value: '/experiences',
        },
        {
            label: 'CONTACT',
            value: '/contact',
        },
    ],
    links: {
        email: 'mailto:accretence@gmail.com',
        twitter: 'https://twitter.com/accretence',
        linkedin: 'https://linkedin.com/in/accretence',
        github: 'https://github.com/accretence',
        instagram: 'https://instagram.com/accretence',
        pinterest: 'https://pinterest.com/accretence',
    },
    experiences: [
        {
            title: 'Learning and Development Specialist',
            employer: 'Fahandej Engineering, Tehran',
            period: 'Jan 2018 – Jun 2018',
            skills: ['Multi-Diciplinary Pipelines', 'Autodesk Revit', 'BIM'],
            description:
                'As an academic student studying architecture, I helped transition a traditional design and construction company to a more contemporary and sustainable technical multi-desciplinary pipeline in a 6 months L&D program.',
        },
        {
            title: 'Executive Supervisor @IranPharma Int. Expo 2018',
            employer: 'Rasayesh, Tehran',
            period: 'Sep 2018',
            skills: ['Communication', 'Improvisation', 'Facilitation'],
            description:
                'As both a fluent English speaker and an architectural student I helped translate for and connect to international attendees and organizers while collaborating with a group of 12 people to execute a Pharmaceutical Exhibition on an international level.',
        },
        {
            title: 'Interior Architect, and BIM Specialist',
            employer: 'Farazin, Tehran',
            period: 'August 2019 - December 2019',
            poster: 'https://i.imgur.com/OlR7y8U.jpg',
            skills: [],
            description:
                'As a recent Bachelor of Architecture graduate, I was able to join a great team of designers and engineers in an industry-leading company. I was able to bring my 3D Modelling and Rendering skills and improve the company’s presentation capabilities.',
        },
        {
            title: 'UI & UX Designer',
            employer: 'Farazin, Tehran',
            period: 'December 2019 - May 2020',
            poster: 'https://i.imgur.com/R7RniiG.png',
            skills: [''],
            description:
                'In my first experience in the development industry, I was able to work with an amazing group of individuals and web engineers and gain experience in both UI & UX Design, and front-end development. I was given the opportunity to work on several projects including in-house CRM, Resource & Project Management and Analysis, and E-Commerce Platforms from the design phase using tools like Adobe XD and Zeplin to development phase using Bootstrap and Vue.js upholding high standards such as Progressive Web Application, Single Page Applications, and Server Side Rendering.',
        },
    ],
    projects: [
        {
            description: `My Bachelor's Thesis. Architectural & urban infrastrucutre can be both beautiful & eye-openning if designed properly.`,
            name: 'Transparent Architecture',
            page: '/projects/bachelors_thesis',
            poster: 'https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/64594c61446529.5a6f3c0731f96.jpg',
            links: {
                'INTERACTIVE 3D': '/projects/bachelors_thesis',
                PDF: 'https://drive.google.com/file/d/1L14SigVJXECHbRlG4yqt_H056ij_nsxV/view',
            },
            keywords: ['Javascript', 'Three.js', 'WebGL', 'Revit'],
        },
        {
            description: `Self-Hosted Open-Source Discord Bot to onboard & protect community members. It gamifies user entertainment & engagement.`,
            name: 'Hestia',
            page: '/projects/hestia',
            poster: 'https://cdn.dribbble.com/users/34556/screenshots/3687300/attachments/825513/spindle-mockup.jpg',
            links: {
                'INTERACTIVE 3D': '/projects/bachelors_thesis',
                PDF: 'https://drive.google.com/file/d/1L14SigVJXECHbRlG4yqt_H056ij_nsxV/view',
            },
            keywords: [
                'Javascript',
                'Discord.js',
                'Gamification',
                'User-Journey-Mapping',
            ],
        },
        {
            description: 'Masters of Architectural Technology',
            name: 'Perlin Noise & Invisibility in Skyscrapers',
            page: '/projects/bachelors_thesis',
            poster: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/ba0247107500101.5fa8e86a7f955.png',
            links: {
                PDF: 'https://drive.google.com/file/d/1FIGE4zIfGLg-_Imsc_dsi3qJVl8UFSnS/view?usp=sharing',
                YOUTUBE: 'https://youtu.be/qIsABW5UTys',
            },
            keywords: ['Three.js', 'Architecture', 'Unity'],
        },
        {
            description: 'Masters of Architectural Technology',
            name: 'Perlin Noise & Invisibility in Skyscrapers',
            page: '/projects/bachelors_thesis',
            poster: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/a6f00c76514213.5c6d5bfb1c3cb.jpg',
            links: {
                PDF: 'https://drive.google.com/file/d/1FIGE4zIfGLg-_Imsc_dsi3qJVl8UFSnS/view?usp=sharing',
                YOUTUBE: 'https://youtu.be/qIsABW5UTys',
            },
            keywords: ['Three.js', 'Architecture', 'Unity'],
        },
        {
            description: 'Masters of Architectural Technology',
            name: 'Perlin Noise & Invisibility in Skyscrapers',
            page: '/projects/bachelors_thesis',
            poster: 'https://mir-s3-cdn-cf.behance.net/projects/max_808/dbc9a3142560005.Y3JvcCwxNDg4LDExNjQsMTI4LDA.jpg',
            links: {
                PDF: 'https://drive.google.com/file/d/1FIGE4zIfGLg-_Imsc_dsi3qJVl8UFSnS/view?usp=sharing',
                YOUTUBE: 'https://youtu.be/qIsABW5UTys',
            },
            keywords: ['Three.js', 'Architecture', 'Unity'],
        },
        {
            description: 'Masters of Architectural Technology',
            name: 'Perlin Noise & Invisibility in Skyscrapers',
            page: '/projects/bachelors_thesis',
            poster: 'https://cdn.dribbble.com/userupload/2896514/file/original-8472ca96356b9c49e138d373684422e7.jpg?compress=1&resize=2048x1536',
            links: {
                PDF: 'https://drive.google.com/file/d/1FIGE4zIfGLg-_Imsc_dsi3qJVl8UFSnS/view?usp=sharing',
                YOUTUBE: 'https://youtu.be/qIsABW5UTys',
            },
            keywords: ['Three.js', 'Architecture', 'Unity'],
        },
        {
            description: 'Masters of Architectural Technology',
            name: 'Perlin Noise & Invisibility in Skyscrapers',
            page: '/projects/bachelors_thesis',
            poster: 'https://cdn.dribbble.com/users/2905985/screenshots/15793471/media/4e4bdd10ed446bb61231175bc8ef6363.png',
            links: {
                PDF: 'https://drive.google.com/file/d/1FIGE4zIfGLg-_Imsc_dsi3qJVl8UFSnS/view?usp=sharing',
                YOUTUBE: 'https://youtu.be/qIsABW5UTys',
            },
            keywords: ['Three.js', 'Architecture', 'Unity'],
        },
    ],
}

export default config
