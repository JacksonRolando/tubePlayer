import axios from 'axios';
const apiKey = window.localStorage.getItem('APIKey')
const apiUrl = "https://www.googleapis.com/youtube/v3";


const loadVideoData = async (vids) => {
    if (apiKey === null) {
        return { items: [] }
    }

    let vidsString = ''
    vids.forEach(vid => {
        vidsString += `id=${vid}&`
    });

    const getUrl = `${apiUrl}/videos?part=snippet&${vidsString}key=${apiKey}`
    const response = await axios.get(getUrl)
    return response.data
}

const keywordSearch = async (keyword) => {
    if (apiKey === null) {
        return []
    }
    const url = `${apiUrl}/search?key=${apiKey}&type=video&q=${keyword}`;
    const response = await axios.get(url)
    const outData = response.data.items.map((item) => item.id.videoId)
    return outData
}

export { loadVideoData, keywordSearch }