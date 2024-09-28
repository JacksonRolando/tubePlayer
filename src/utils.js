import { loadVideoData, keywordSearch } from "./ytData";

function getId(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);

    return (match && match[2].length === 11)
        ? match[2]
        : null;
}

function getSrc(videoId) {
    return "https://www.youtube.com/embed/" + videoId
}

const getVidData = async (vids) => {
    if (vids[0] === null || vids.length === 0) {
        return [
            {
                vid: 'rYyjY-A7kE0',
                name: "Add a YouTube API link in settings",
                channelName: "home alone",
                imgUrl: "https://i.ytimg.com/vi/pYu2W_-RiEo/hqdefault.jpg?sqp=-oaymwE1CKgBEF5IVfKriqkDKAgBFQAAiEIYAXABwAEG8AEB-AH-CYAC0AWKAgwIABABGFMgZShMMA8=&rs=AOn4CLCfUJ9kkobjRvnkWVWQhXCplNxiWw"
            },
            {
                vid: 'nOiwf1u6qbc',
                name: "These are placeholders I like",
                channelName: "Re: Analog",
                imgUrl: "https://i.ytimg.com/vi/nOiwf1u6qbc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDy3oIIqPLdQ6IihPQN-I6s8wK2Wg"
            }
        ]
    }

    let responseData = await loadVideoData(vids)
    const retData = responseData.items.map(item => {
        return {
            vid: item.id,
            name: item.snippet.localized.title,
            channelName: item.snippet.channelTitle,
            imgUrl: item.snippet.thumbnails.default.url
        }
    })

    if (retData.length == 0) {
        return vids.map(vid => { return { vid: vid, name: "click meeeee", channelName: 'load your result' } })
    }

    return retData
}

const apiSearch = async (searchTerm) => {
    return await keywordSearch(searchTerm)
}

const search = async (searchTerm) => {
    if (searchTerm === '') {
        return null
    }

    let matchedIds = [getId(searchTerm)]
    matchedIds = matchedIds[0] === null ? await apiSearch(searchTerm) : matchedIds

    let retVidData = await getVidData(matchedIds)

    return retVidData
}

const loadVid = (videoId, autoplay) => {
    let newUrl = getSrc(videoId)
    const player = document.getElementById('player')
    player.src = newUrl + (autoplay ? '?&autoplay=1' : '')
}

export { getId, getSrc, search, loadVid }