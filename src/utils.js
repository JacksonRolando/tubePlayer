const getId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);

    return (match && match[2].length === 11)
        ? match[2]
        : null;
}

const getSrc = (url) => {
    let videoId = getId(url);
    return "http://www.youtube.com/embed/" + videoId
}

const search = (searchTerm) => {
    let matchedId = getId(searchTerm)

    const retVids = []

    if (matchedId === null) {
        retVids.push(
            {
                'vid': matchedId,
                'name': "Your mom's secret vid",
                'channelName': "Your Mom, obvi",
                'imgUrl': "https://i.ytimg.com/vi/pYu2W_-RiEo/hqdefault.jpg?sqp=-oaymwE1CKgBEF5IVfKriqkDKAgBFQAAiEIYAXABwAEG8AEB-AH-CYAC0AWKAgwIABABGFMgZShMMA8=&rs=AOn4CLCfUJ9kkobjRvnkWVWQhXCplNxiWw"
            },
            {
                'vid': matchedId,
                'name': "Your mom's secret vid",
                'channelName': "Your Mom, obvi",
                'imgUrl': "https://i.ytimg.com/vi/pYu2W_-RiEo/hqdefault.jpg?sqp=-oaymwE1CKgBEF5IVfKriqkDKAgBFQAAiEIYAXABwAEG8AEB-AH-CYAC0AWKAgwIABABGFMgZShMMA8=&rs=AOn4CLCfUJ9kkobjRvnkWVWQhXCplNxiWw"
            }
        )
    }
}

module.exports = [getId, getSrc, search]