import React from "react";

/*
results will come in the form of:
{
    'vid': matchedId,
    'name': "Your mom's secret vid",
    'channelName': "Your Mom, obvi",
    'imgUrl': "https://i.ytimg.com/vi/pYu2..."
}
*/



const SearchResults = ({ results, selectResult }) => {

    if (results === null) {
        return (
            <div id="results" className="absolute flex flex-col">
            </div>
        )
    }

    const resultDivs = results.map(result => (
        <div tabIndex={0} id={result.vid} key={result.vid} className="flex p-1 align-middle" >
            <img className="h-14 w-auto" src={result.imgUrl} />
            <div className="py-1.5 px-2 max-w-full text-nowrap overflow-hidden">
                <div className="font-bold">{result.name}</div>
                <div className="">{result.channelName}</div>
            </div>
        </div >
    ))


    return (
        <div id="results" className="absolute flex flex-col mt-3 w-5/6 rounded-lg shadow-md">
            {resultDivs}
        </div>
    )
}

export default SearchResults