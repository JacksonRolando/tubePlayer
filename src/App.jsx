import { React, useState } from "react"
import SearchResults from "./SearchResults"
import SearchBox from "./SearchBox"

const App = () => {
    const [searchResults, setSearchResults] = useState(null)

    return (
        <div className="flex flex-col align-middle justify-center">
            <div className="player m-auto my-6">
                <iframe id='player' style={{ width: '100%', height: '200px', overflow: 'hidden', borderRadius: '2rem', boxShadow: '0px 2px 5px gray' }} src="https://www.youtube.com/embed/dZlQLZirG2c?si=2sBUL2vnNrD55cGp&amp;controls=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" allowfullscreen></iframe>
            </div>
            <SearchBox setSearchResults={setSearchResults} />
            <div className="m-auto w-5/6 max-w-2xl">
                <SearchResults results={searchResults} />
            </div>
            <div className="queue"></div>
        </div>
    )
}
export default App 