import tagCss from './Tag.module.css'

const styleLookup = {
    'Python': 'python',
    'JavaScript': 'javascript',
    'C': 'c',
    'C++': 'c',
    'HTML': 'html',
    'CSS': 'css',
    'React': 'react',
    'MongoDB': 'mongo',
    'Node.js': 'nodejs',
    'SQLite': 'sqlite',
    'Docker': 'docker',
    'GIT': 'git',
    'Arduino': 'arduino'
}

export default function Tag({name}) {
    let classNames = [tagCss.tag]
    // if (styleLookup[name])
    //     classNames.push(tagCss[styleLookup[name]])
    // else
    //     classNames.push(tagCss.black)

    return (
        <div className={classNames.join(" ")}>{name}</div>
    )
}