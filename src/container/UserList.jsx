import { Paper } from '@material-ui/core'
import axios from 'axios'
import React, {useEffect, useState} from 'react'

const UserList = ({term}) => {

const [user, setUser] = useState({})

useEffect(() => {
    if(term){
    const fetchUser = async () => {
        const data =  await axios.get(`https://api.github.com/users/${term}`)

        setUser(data)
    }
    fetchUser()

}}, [term])

console.log(user)

    return (
        <div>
            <Paper elevation={2}>
            </Paper>
        </div>
    )
}

export default UserList
