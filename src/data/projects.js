
const projects = [
    {
        id: 0,
        title: 'Mario Kart Tour Discord Bots',
        image: '/images/projects/bots.png',
        category: 'Application',
        tags: ['JavaScript', 'Node.js', 'MongoDB', 'Google Sheets API', 'Web Scraping', 'Child Processes', 'OCR'],
        bulletPoints: [
            'Centered around the game Mario Kart Tour',
            'Added to 1000+ Discord servers',
            'Used by 300+ unique users every day',
            'Fast response time is a top priority',
            'Extensive use of image generation for the best user experience',
        ],
        pageUrl: '/projects/discordbots',
        links: {
            demo: null,
            github: null,
            website: 'https://mktbots.com',
            video: null,
        },
        isHighlight: true,
    },
    {
        id: 1,
        title: 'MKT Bots',
        image: '/images/projects/mktbots.png',
        category: 'Website',
        tags: ['HTML', 'CSS', 'JavaScript'],
        bulletPoints: [
            'The documentation website for my Discord bots',
            'Includes detailed descriptions for each command'
        ],
        pageUrl: '/projects/mktbots',
        links: {
            demo: null,
            github: 'https://github.com/mktbots/mktbots.github.io',
            website: 'https://mktbots.com',
            video: null,
        },
        isHighlight: false,
    },
    {
        id: 2,
        title: 'Mario Kart Central',
        image: '/images/projects/mkc.png',
        category: 'Website',
        tags: ['Python', 'Starlette', 'TypeScript', 'Svelte', 'Docker', 'SQLite', 'REST APIs'],
        bulletPoints: [
            'A central website for Mario Kart',
            'Manages tournaments throughout the year',
            'Over 40,000 registered players',
            'Currently being rewritten from the ground up'
        ],
        pageUrl: '/projects/mkc',
        links: {
            demo: null,
            github: null,
            website: 'https://mariokartcentral.com',
            video: null,
        },
        isHighlight: true,
    },
    {
        id: 4,
        title: 'Are We There Yet',
        image: '/images/projects/areWeThereYet.png',
        category: 'Game',
        tags: ['Unity', 'C#'],
        bulletPoints: [
            'Goal is to reach the end of the level',
            'Built using the Unity game engine in collaboration with two other developers',
            'Responsible for the background music, sound effects, and level development',
            'Received a grade of 100% on the final build (mean: 94%)'
        ],
        pageUrl: '/projects/arewethereyet',
        links: {
            demo: '/demo/arewethereyet',
            github: 'https://github.com/jimmylam1/Are-We-There-Yet',
            website: null,
            video: null,
        },
        isHighlight: false,
    },
    {
        id: 3,
        title: 'OpenGL Endless Runner Game',
        image: '/images/projects/opengl.png',
        category: 'Game',
        tags: ['C++', 'OpenGL'],
        bulletPoints: [
            'Goal is to get the highest score by dodging incoming vehicles',
            'Built with OpenGL and C++, without any game engines like Unity',
            'Figured out collision detection, repeating model objects, and keyboard input',
            'Voted Best Game out of 30+ final projects'
        ],
        pageUrl: '/projects/opengl',
        links: {
            demo: null,
            github: 'https://github.com/jimmylam1/OpenGL-Game',
            website: null,
            video: 'https://youtu.be/FqnHcfwxC_M',
        },
        isHighlight: true,
    },
    {
        id: 5,
        title: 'Visualization of Asteroid Impact',
        image: '/images/projects/asteroid.png',
        category: 'Scientific Visualization',
        tags: ['Python', 'FFmpeg', 'VisIt'],
        bulletPoints: [
            'Visualization of an astroid impact on a body of water',
            'Used VisIt as the visualization software',
            'Wrote custom Python scripts to generate frames',
            'Used FFmpeg to convert frames into a video',
            'Selected as one of the best videos out of 25+ submissions'
        ],
        pageUrl: '/projects/asteroidimpact',
        links: {
            demo: null,
            github: null,
            website: null,
            video: 'https://youtu.be/RuVAIJ_aFLU',
        },
        isHighlight: false,
    },
    {
        id: 6,
        title: '4x4 LED Cube',
        image: '/images/projects/cube.png',
        category: 'Electronics',
        tags: ['Python', 'Integrated Circuits', 'Simulation'],
        bulletPoints: [
            'Designed and built a 4x4 LED Cube along with the driver circuit',
            'The driver circuit was made using only discrete logic ICs',
            'Used Python to create the LED cube patterns, and wrote code to create a binary file for the EEPROM',
            'A simulation program was also created in Python to aid in the development and debugging processes',
            'Received a grade of 100%'
        ],
        pageUrl: '/projects/ledcube',
        links: {
            demo: null,
            github: 'https://github.com/jimmylam1/LED-Cube',
            website: null,
            video: 'https://youtu.be/2x6tbyymKe0',
        },
        isHighlight: false,
    },
    {
        id: 8,
        title: 'AI Chess Game',
        image: '/images/projects/chess.png',
        category: 'Game',
        tags: ['C', 'AI', 'Minimax'],
        bulletPoints: [
            'Collaborated with two other developers to build the game from scratch, without the use of any external libraries',
            'Uses Minimax to create a decision tree in order to choose the best outcome',
            'Includes socket programming to comunicate with remote client',
            'Received the highest score out of 20+ groups'
        ],
        pageUrl: '/projects/aichess',
        links: {
            demo: null,
            github: 'https://github.com/jimmylam1/AI-Chess',
            website: null,
            video: null,
        },
        isHighlight: false,
    },
    // {
    //     id: 9,
    //     title: 'Brevet Time Calculator',
    //     image: '/images/projects/brevet.png',
    //     category: 'Application',
    //     tags: ['Python', 'Flask', 'Javascript', 'HTML', 'CSS', 'MongoDB', 'Docker', 'REST APIs'],
    //     bulletPoints: [
    //         'A Full-Stack web application designed for a Brevet',
    //         'A Brevet is a cycling event where participants must pass through multiple checkpoints within specific time ranges',
    //         'The app allows people to enter the distances of each checkpoint from the start, and it will show the time range each checkpoint must be passed at',
    //     ],
    //     pageUrl: '/',
    //     links: {
    //         demo: null,
    //         github: 'https://github.com/jimmylam1/brevet-time-calculator',
    //         website: null,
    //         video: null,
    //     },
    //     isHighlight: false,
    // },
    {
        id: 10,
        title: 'Monte Carlo Simulation of Ferromagnetism',
        image: '/images/projects/ising.png',
        category: 'Simulation',
        tags: ['Python'],
        bulletPoints: [
            'Uses the Ising Model for different 2D lattice structures to model the behavior of ferromagnets',
            'Lattices vary on the number of neighbors each node (a magnetic dipole) is connected to',
            'The simulation overall gives insight to the critical temperature for each lattice, and this temperature is the point where a ferromagnet transitions from having a positive net magnetization to zero net magnetization.'
        ],
        pageUrl: '/projects/isingmodel',
        links: {
            demo: null,
            github: 'https://github.com/jimmylam1/Ferromagnet-Simulation',
            website: null,
            video: null,
        },
        isHighlight: false,
    },
    {
        id: 7,
        title: 'Trivia',
        image: '/images/projects/trivia.png',
        category: 'Game',
        tags: ['JavaScript', 'React', 'HTML', 'CSS'],
        bulletPoints: [
            'A game where the player must answer questions from a variety of different categories',
            'The player is able to select both the category and difficulty for each question',
            'Data is fetched from the Open Trivia Database API'
        ],
        pageUrl: '/projects/trivia',
        links: {
            demo: '/demo/trivia',
            github: 'https://github.com/jimmylam1/Trivia',
            website: null,
            video: null,
        },
        isHighlight: false,
    },
    // {
    //     id: 11,
    //     title: 'Bash Shell Clone',
    //     image: '/images/projects/shell.png',
    //     category: 'Application',
    //     tags: ['C'],
    //     bulletPoints: [
    //         'Uses the C programming language to implement a Bash shell clone using system calls',
    //         'Commands: ls, pwd, mkdir, cd, cp, mv, rm, cat'
    //     ],
    //     pageUrl: '/',
    //     links: {
    //         demo: null,
    //         github: 'https://github.com/jimmylam1/Bash-Shell-Clone',
    //         website: null,
    //         video: null,
    //     },
    //     isHighlight: false,
    // },
]

export default projects