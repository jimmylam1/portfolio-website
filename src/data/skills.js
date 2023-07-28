const skills = [
    {
        path: '/images/skills/python.png',
        name: 'Python',
        category: 'language'
    },
    {
        path: '/images/skills/javascript.png',
        name: 'JavaScript',
        category: 'language'
    },
    {
        path: '/images/skills/c.png',
        name: 'C',
        category: 'language'
    },
    {
        path: '/images/skills/c++.png',
        name: 'C++',
        category: 'language'
    },
    {
        path: '/images/skills/html.png',
        name: 'HTML',
        category: 'frontend'
    },
    {
        path: '/images/skills/css.png',
        name: 'CSS',
        category: 'frontend'
    },
    {
        path: '/images/skills/react.png',
        name: 'React',
        category: 'frontend'
    },
    {
        path: '/images/skills/mongo.png',
        name: 'MongoDB',
        category: 'database'
    },
    {
        path: '/images/skills/sqlite.png',
        name: 'SQLite',
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
        path: '/images/skills/nodejs.png',
        name: 'Node.js',
        category: 'backend'
    },
    {
        path: '/images/skills/arduino.png',
        name: 'Arduino',
        category: 'Language'
    },
]

const skillsWithId = skills.map((i, idx) => ({
    ...i,
    id: idx
}))

export default skillsWithId