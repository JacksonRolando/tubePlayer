function getId(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);

    return (match && match[2].length === 11)
        ? match[2]
        : null;
}

function getSrc(videoId) {
    return "http://www.youtube.com/embed/" + videoId
}

const getVidData = async (vids) => {
    if (vids[0] === null) {
        return [
            {
                'vid': 'rYyjY-A7kE0',
                'name': "Your mom's super duper absolutely secret vid",
                'channelName': "Your Mom, obvi",
                'imgUrl': "https://i.ytimg.com/vi/pYu2W_-RiEo/hqdefault.jpg?sqp=-oaymwE1CKgBEF5IVfKriqkDKAgBFQAAiEIYAXABwAEG8AEB-AH-CYAC0AWKAgwIABABGFMgZShMMA8=&rs=AOn4CLCfUJ9kkobjRvnkWVWQhXCplNxiWw"
            },
            {
                'vid': 'nOiwf1u6qbc',
                'name': "Your mom's secret vid",
                'channelName': "Your Mom, obvi",
                'imgUrl': "https://i.ytimg.com/an_webp/nOiwf1u6qbc/mqdefault_6s.webp?du=3000&sqp=CLLz2rcG&rs=AOn4CLBINXj6BDtii8JxHEj4Yo_rZbfYog"
            }
        ]
    }

    //get youtube API data

    return [{ 'vid': vids[0] }]
}

const apiSearch = async (searchTerm) => {
    return []
}

const search = async (searchTerm) => {
    if (searchTerm === '') {
        return null
    }

    let matchedIds = [getId(searchTerm)] || await apiSearch(searchTerm)

    let retVidData = await getVidData(matchedIds)
    console.log(retVidData);

    return retVidData
}

const loadVid = (videoId, autoplay) => {
    let newUrl = getSrc(videoId)
    document.getElementById('player').src = newUrl + (autoplay ? '?&autoplay=1' : '')
}

export { getId, getSrc, search, loadVid }