

import React from 'react'

function control(props) {
    return (
        <div className='control'>
            <button className='control_skipBtn' onClick={() => {
                props.skipSong(false)
            }}>
                <i className="fa-solid fa-backward"></i>
            </button>
            <button className='control_playButton' onClick={() => {
                props.setIsPlaying(!props.isPlaying)
            }}>
                <i className="fa-solid fa-pause" ></i>
            </button>
            <button className='control_skipBtn' onClick={() => {
                props.skipSong(true)
            }}> 
                <i class="fa-solid fa-forward"></i>
            </button>

        </div>
    )
}

export default control
