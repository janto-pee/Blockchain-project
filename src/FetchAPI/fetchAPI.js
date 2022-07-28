import {useEffect, useState} from 'react';

const useFetch = () => {
    const [allNews, setNews] = useState('');

    const getNews = async () => {
        try {
            const res = await fetch(`https://bing-news-search1.p.rapidapi.com/news/search?q=cryptocurrency&freshness=Day&textFormat=Raw&safeSearch=Off&count=${3}`, {
                 headers: {
                    'X-BingApis-SDK': import.meta.env.VITE_APP_NEWSAPI_SDK, 
                    'X-RapidAPI-Host': import.meta.env.VITE_APP_NEWSAPI_Host,
                    'X-RapidAPI-Key': import.meta.env.VITE_APP_NEWSAPI_Key
                }
            })
            const data = await res.json()
            setNews(data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getNews();
    }, []);

    return allNews;
}

export default useFetch;