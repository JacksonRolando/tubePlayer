import { React, useState } from "react"
import SearchResults from "./SearchResults"
import SearchBox from "./SearchBox"
import { loadVid } from "./utils"

const App = () => {
    const [searchResults, setSearchResults] = useState(null)

    return (
        <div className="flex flex-col align-middle justify-center">
            <div className="player m-auto my-6">
                <iframe id='player' style={{ width: '100%', height: '200px', overflow: 'hidden', borderRadius: '2rem', boxShadow: '0px 2px 5px gray' }} src="https://www.youtube.com/embed/dZlQLZirG2c" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" allowFullScreen></iframe>
            </div>
            <SearchBox setSearchResults={setSearchResults} />
            <div>
                <SearchResults results={searchResults} loadVid={loadVid} />
            </div>
            <div className="queue"></div>
        </div >
    )
}
export default App 