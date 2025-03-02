import { useState } from "react"
import { OnDemandItem } from "../types/OnDemand"
import PlaybackBar from "./PlaybackBar"
import AudioPlayer from 'react-h5-audio-player'

const Player: React.FC<OnDemandItem> = ({title, audioURL, image}) => {
    // const [playing, setPlaying] = useState<true | false>(false)
    // const [playback, setPlayback] = useState<string>('00:00:00')
    // const [rewind, setRewind] = useState<true | false>(false)
    // const [fforward, setFforward] = useState<true | false>(false)

    return (
        <>
        <div>
            <img src={image} width={200}/>
            <h1>{title}</h1>
            <AudioPlayer src={audioURL} autoPlay onPlay={e => console.log("onPlay")} />
            {/* <div className="button-container">
            {playing ? <button onClick={handleStopAudio(audioURL)}>Stop</button> : <button onClick={handlePlayAudio(audioURL)}>Play</button>}
            </div>
            <div className="playback-bar">
                <PlaybackBar audioState={playing} timestamp={playback} ffInput={fforward} rewInput={rewind}  />
            </div>
            <div className="fast-forward">
                <button>Forward 30s</button>
            </div>
            <div className="re-wind">
                <button>Back 30s</button>
            </div> */}
        </div>
        </>
    )

    function handlePlayAudio(url: string) {
        setPlaying(true)
    }

    function handleStopAudio(url: string) {
        setPlaying(false)
    }

    // function playbackProgress(playing: boolean, timestamp: string) {
    //     let playbackNumber = Number(timestamp)
    //     while(playing) {
    //         playbackNumber++
    //         setPlayback(playbackNumber.toString)
    //     }
    // }

    //maybe need to look at a player timedate/string formatting solution

}



export default Player