import React from "react"
const PlaybackBar: React.FC = ({audioState, timestamp, ffInput, rewInput}) => {

if (ffInput) return timestamp+30

if (rewInput) return timestamp-30

return (
    <div>Make progressive bar here</div>
)

}

export default PlaybackBar