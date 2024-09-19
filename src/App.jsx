import { React, useState } from "react"
import SearchResults from "./SearchResults"

const App = () => {
    const [searchResults, setSearchResults] = useState(nulls)

    return (
        <body className="flex flex-col align-middle justify-center">
            <div className="player w-5/6 m-auto my-6">
                <iframe id='player' style={{ width: '100%', height: '200px', overflow: 'hidden', borderRadius: '2rem', boxShadow: '0px 2px 5px gray' }} src="https://www.youtube.com/embed/dZlQLZirG2c?si=2sBUL2vnNrD55cGp&amp;controls=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" allowfullscreen></iframe>
            </div>
            <div className="search m-auto w-3/4 max-w-xl bg-gray-200 rounded-lg flex">
                <div className="ps-2.5 pt-2.5">
                    <svg class="w-5 h-5 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </div>
                <input type="text" className="text-cent pt-2.5 pb-1.5 px-2 mr-3 bg-gray-200 w-full focus:outline-none focus:ring-transparent" name="search" id="search" placeholder="search for a video" />
            </div>
            <SearchResults />
            <div className="queue"></div>
        </body>
    )
}
export default App 