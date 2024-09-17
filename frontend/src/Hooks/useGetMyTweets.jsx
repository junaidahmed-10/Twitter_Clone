import axios from 'axios'
import React, { useEffect } from 'react'
import { TWEET_API_END_POINT } from '../utils/Constants'
import { useDispatch, useSelector } from "react-redux"
import { getAllTweets } from '../Redux/tweetSlice'

function useGetMyTweets(id) {
    const dispatch = useDispatch()
    const { refresh, isActive } = useSelector(store => store.tweet)

    async function fetchMyTweets() {
        try {
            const res = await axios.get(`${TWEET_API_END_POINT}/alltweets/${id}`, {
                withCredentials: true
            })
            console.log(res);

            dispatch(getAllTweets(res.data.tweets))
        } catch (error) {
            console.log(error);
        }
    }

    const followingTweetHandler = async () => {
    
        try {
            axios.defaults.withCredentials = true;
            const res = await axios.get(`${TWEET_API_END_POINT}/followingtweets/${id}`)
            console.log(res);
            dispatch(getAllTweets(res.data.tweets))
            // dispatch(getRefresh())
        } catch (error) {
            console.log(error);

        }
    }

    useEffect(() => {

        if (isActive) {
            fetchMyTweets()
        } else {
            followingTweetHandler()
        }

    }, [refresh, isActive])

    return (
        <div>useGetMyTweets</div>
    )
}

export default useGetMyTweets