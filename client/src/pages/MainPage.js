import React, {useCallback, useContext, useEffect, useState} from 'react'
import {useHistory, useParams} from 'react-router-dom'
import {AuthContext} from '../context/AuthContext'
import {useHttp} from '../hooks/http.hook'
import {Loader} from '../components/Loader'
import {Profile} from '../components/Profile'

export const MainPage = () => {
    //const history = useHistory()
    //const auth = useContext(AuthContext)
    const {token} = useContext(AuthContext)
    const {request, loading} = useHttp()
    const[user, setUser] = useState(null)
    const userId = useParams().id

    const getUser = useCallback(async() => {
        try {
            const fetched = await request(`/api/user/${userId}`, 'GET', null, {
                Authorization: `Bearer ${token}`
            })
            setUser(fetched)
        } catch (e) {
            
        }
    }, [token, userId, request])
    

    useEffect(() => {
        getUser()
      }, [getUser])
    
      if (loading) {
        return <Loader />
      }

    return(   
            <>
                { !loading && user && <Profile user={user} /> }
            </>
    )
}