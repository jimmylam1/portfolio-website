const skills = [
    {
        path: '/images/skills/python.png',
        name: 'Python',
        category: 'language'
    },
    {
        path: '/images/skills/typescript.png',
        name: 'JavaScript TypeScript',
        category: 'language'
    },
    {
        path: '/images/skills/c++.png',
        name: 'C, C++',
        category: 'language'
    },
    {
        path: '/images/skills/html.png',
        name: 'HTML, CSS',
        category: 'frontend'
    },
    {
        path: '/images/skills/react.png',
        name: 'React',
        category: 'frontend'
    },
    {
        path: '/images/skills/svelte.png',
        name: 'Svelte',
        category: 'frontend'
    },
    {
        path: '/images/skills/nodejs.png',
        name: 'Node.js',
        category: 'backend'
    },
    {
        path: '/images/skills/mongo.png',
        name: 'MongoDB',
        category: 'database'
    },
    {
        path: '/images/skills/sql.png',
        name: 'SQL',
        category: 'database'
    },
    {
        path: '/images/skills/docker.png',
        name: 'Docker',
        category: 'container'
    },
    {
        path: '/images/skills/git.png',
        name: 'GIT',
        category: 'tool'
    },
    {
        path: '/images/skills/bash.png',
        name: 'Bash',
        category: 'tool'
    },
    {
        path: '/images/skills/arduino.png',
        name: 'Arduino',
        category: 'tool'
    },
    {
        path: '/images/skills/graphicDesign.png',
        name: 'Graphic Design',
        category: 'tool'
    },
    {
        path: '/images/skills/imageGeneration.png',
        name: 'Image Generation',
        category: 'tool'
    },
]

const skillsWithId = skills.map((i, idx) => ({
    ...i,
    id: idx
}))

export default skillsWithId