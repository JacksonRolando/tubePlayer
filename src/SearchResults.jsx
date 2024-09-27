import React, { useEffect, useState } from "react";

/*
results will come in the form of:
{
    'vid': matchedId,
    'name': "Your mom's secret vid",
    'channelName': "Your Mom, obvi",
    'imgUrl': "https://i.ytimg.com/vi/pYu2..."
}
*/



const SearchResults = ({ results, loadVid }) => {
    const [stateResults, setStateResults] = useState(results)

    useEffect(() => {
        setStateResults(results)
    }, [results])

    const selectResult = (e) => {
        loadVid(e.currentTarget.dataset.vid, true)
        setStateResults(null)
    }

    if (stateResults === null || stateResults == []) {
        return (
            <div id="results" className="absolute">
            </div>
        )
    }

    const resultDivs = stateResults.map(result => (
        <div
            tabIndex={0}
            data-vid={result.vid}
            key={result.vid}
            className="flex p-1 align-middle hover:bg-gray-200 focus:bg-gray-200"
            onClick={selectResult}
            onKeyDown={event => {
                if (event.key === 'Enter') {

                    selectResult(event)
                }
            }}
        >
            <img className="h-16 w-auto" src={result.imgUrl} />
            <div className="py-1.5 px-2 text-nowrap overflow-hidden">
                <div className="font-bold">{result.name}</div>
                <div className="">{result.channelName}</div>
            </div>
        </div >
    ))


    return (
        <div id="results" className="absolute left-1/2 transform -translate-x-1/2 flex flex-col mt-3 w-5/6 max-w-2xl rounded-lg shadow-lg bg-gray-50">
            {resultDivs}
        </div>
    )
}

export default SearchResults