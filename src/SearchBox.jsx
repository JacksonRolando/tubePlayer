import React, { useEffect } from "react"
import { search } from "./utils"

const SearchBox = ({ setSearchResults }) => {

    const runSearch = async (e) => {
        let searchTerm = e?.target?.value || ''

        const searchResults = await search(searchTerm)
        setSearchResults(searchResults)
    }

    const clearResults = () => {
        runSearch(null)
    }

    const clearText = () => {
        document.getElementById('searchBox').value = ''
        clearResults()
    }

    const selectResult = (result) => {
        clearResults()

    }

    return (
        <div className="search m-auto w-3/4 max-w-xl bg-gray-200 rounded-lg flex">
            <div className="ps-2.5 pt-2.5">
                <svg class="w-5 h-5 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
            </div>
            <input id='searchBox' autoComplete="off" type="text" onChange={runSearch} className="text-cent pt-2.5 pb-1.5 px-2 mr-3 bg-gray-200 w-full focus:outline-none focus:ring-transparent" name="search" placeholder="search for a video" />
            <div onClick={clearText} className="my-2 mx-2 px-1.5 py-1.5 rounded-md hover:bg-gray-400">
                <svg class="w-3 h-3 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
            </div>
        </div>
    )
}

export default SearchBox