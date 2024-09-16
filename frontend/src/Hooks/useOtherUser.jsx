import axios from 'axios'
import React, { useEffect } from 'react'
import { USER_API_END_POINT } from '../utils/Constants'
import { useDispatch } from "react-redux"
import { getOtherUsers } from '../Redux/userSlice'

function useOtherUser(id) {
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchOtherUser = async () => {
            try {
                const res = await axios.get(`${USER_API_END_POINT}/otheruser/${id}`, {
                    withCredentials: true
                })
                console.log(res);
                
                dispatch(getOtherUsers(res.data.otherUsers))
            } catch (error) {
                console.log(error);
            }
        }
        fetchOtherUser()
    }, [])

}

export default useOtherUser