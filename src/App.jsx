import React from "react"

const App = () => {
    return (
        <body className="flex align-middle justify-center">
            <div className="player w-3/4">
                <iframe id='player' style={{ width: '100%', height: '200px', overflow: 'hidden' }} src="https://www.youtube.com/embed/dZlQLZirG2c?si=2sBUL2vnNrD55cGp&amp;controls=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div className="search">

            </div>
            <div className="queue"></div>
        </body>
    )
}
export default App