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
const SearchResults = ({ results }) => {

    const resultDivs = []
    results.forEach(result => {
        resultDivs.push(
            <div id={result.vid} className="flex">
                <img src={result.imgUrl} />
                <div className="flex flex-col">
                    <div>{result.name}</div>
                    <div>{result.channelName}</div>
                </div>
            </div>
        )
    });

    return (
        <div id="results" className="absolute flex flex-col">
            resultDivs
        </div>
    )
}

export default SearchResults