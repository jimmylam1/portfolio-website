import projectsArray from '../../../data/projects'
import pageCss from '../projectPage.module.css'
import { ProjectPage } from '@/components/project/Project'

export default function DiscordBots() {
    const project = projectsArray.find(i => i.id === 8)

    return (
        <div className={pageCss.main}>
            <div className={pageCss.container}>
                <ProjectPage {...project} />

                <div className={pageCss.content}>
                    <h2>About</h2>
                    <p>
                        This project is a command line artificial intelligence (AI) chess game. This game can be played with or without AI, and it has support for two players to play on separate computers.                  
                    </p>

                    <h2>How was it built?</h2>
                    <p>
                        Everything was built from scratch using only the C programming language, and it was made in collaboration with two other developers.
                        <br/><br/>
                        The backend defines basic chess components, such as the gameboard, the chess pieces, and what the valid moves are for each piece. It also includes Minimax, a decision rule used in AI, to choose the best move. Finally, it includes socket programming to comunicate with a remote client (computer).
                        <br/><br/>
                        The frontend is displayed on the command line, and the gameboard consists of the first letter of each chess piece as well as a colored background for the chessboard. 
                    </p>

                    <h2>Challenges faced</h2>
                    <p>
                        The biggest challenge involved integrating the AI functionality into the game. We did not have prior experience with artificial intelligence, so we had to do research on the topic. We had to create a heuristic function in order to evaluate the value of the game based on where each piece is located. Then, we were able to implement a minimax algorithm to choose the best move for the AI player.
                        <br/><br/>
                        Another challenge we faced was figuring out a way for a remote computer to connect to our AI. This feature was included in case a seaprate team's AI wanted to play against ours. We also did not have experience with networks, so we had to do research to find the best approach. In the end, we used sockets to connect two computers together over a network.
                    </p>

                </div>
            </div>
        </div>
    )
}
