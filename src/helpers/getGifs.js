export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=2B63COB7od4hnfc7SJUQINw6x0kGASCX`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map((gif) => {
        return {
            id: gif.id,
            title: gif.title,
            url: gif.images.downsized_medium.url,
        };
    });

    return gifs;
};
