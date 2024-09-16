import axios from 'axios'
import React, { useEffect } from 'react'
import { USER_API_END_POINT } from '../utils/Constants'
import { useDispatch } from "react-redux"
import { getMyProfile } from '../Redux/userSlice'

function useGetProfile(id) {
    const dispatch = useDispatch()

    useEffect(() => {
        async function fetchMyProfile() {
            try {
                const res = await axios.get(`${USER_API_END_POINT}/profile/${id}`, {
                    withCredentials: true
                })
                console.log(res);
                
                dispatch(getMyProfile(res.data.user))
            } catch (error) {
                console.log(error);
            }
        }
        fetchMyProfile()
    }, [id])

    return (
        <div>useGetProfile</div>
    )
}

export default useGetProfile