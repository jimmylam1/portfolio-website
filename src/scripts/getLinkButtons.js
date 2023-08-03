import LinkButton from "@/components/linkButton/LinkButton"

export default function getLinkButtons(links) {
    let linksArray = []
    for (let key of Object.keys(links)) {
        if (links[key]) {
            linksArray.push(<LinkButton name={key} linkUrl={links[key]} />)
        }
    }
    return linksArray
}