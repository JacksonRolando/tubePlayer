import { React, useState } from "react"
import SearchResults from "./SearchResults"
import SearchBox from "./SearchBox"
import Menu from "./Menu"
import { loadVid } from "./utils"
import { submitApiKey } from "./cryptoness"

const App = () => {
    const moveMenu = (isOpen) => {
        let menu = document.getElementById('menu')
        if (!menu) return

        if (isOpen) {
            menu.classList.remove('-translate-x-full')
        } else {
            menu.classList.add('-translate-x-full')
        }
    }

    const [searchResults, setSearchResults] = useState(null)
    return (
        <div className="flex flex-col align-middle justify-center">
            <svg onClick={() => moveMenu(true)} className="absolute top-1 left-1 h-14 text-gray-600 p-1 rounded-lg hover:bg-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 18H10" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                <path d="M4 12L16 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                <path d="M4 6L20 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
            </svg>
            <div className="player m-auto my-6">
                <iframe id='player' style={{ width: '100%', height: '200px', overflow: 'hidden', borderRadius: '2rem', boxShadow: '0px 2px 5px gray' }} src="https://www.youtube.com/embed/dZlQLZirG2c" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen;" allowFullScreen></iframe>
            </div>
            <SearchBox setSearchResults={setSearchResults} />
            <div>
                <SearchResults results={searchResults} loadVid={loadVid} />
            </div>
            <div className="queue"></div>
            <Menu moveMenu={moveMenu} submitApiKey={submitApiKey} />
        </div >
    )
}
export default App 