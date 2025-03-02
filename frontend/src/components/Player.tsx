import { OnDemandItem } from "../types/OnDemand"
import AudioPlayer  from 'react-h5-audio-player'
import { useLocation} from "react-router-dom"
import 'react-h5-audio-player/lib/styles.css';
import { HomeButton } from "./homeButton";

const Player: React.FC<OnDemandItem> = () => {
    
    const location = useLocation()
    const onDemandProgram = location.state || {}

    //data unmounted/user refresh not navigated from card click
    if (!onDemandProgram.audioURL) { return (
        <div>
            <p>This show is currently not playable</p>
        </div>
        )
    }

    return (
        <>
            <img src={onDemandProgram.image} alt={onDemandProgram.title} style={{width: "200px"}}/>
            <h2>{onDemandProgram.title}</h2>
            <AudioPlayer
                src={onDemandProgram.audioURL} 
                onPlay={e => console.log("onPlay")}
                progressJumpSteps={{
                    forward: 30000,
                    backward: 30000
                }}
            />
            <br />
            <HomeButton />
        </>
    )
    
}

export default Player