import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"

import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { useThemeContext } from "./context/ThemeContext";

export default function Home() {
    const [users, setUsers] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const [isDeleting, setIsDeleting] = useState(new Array(10).fill(false))
    useEffect(() => {
        async function getUsers() {
            try {
                const response = await axios.get("https://jsonplaceholder.typicode.com/users")
                setUsers(response.data)
                console.log("API called")
                setIsLoading(false)
            } catch (err) {
                alert("Failed to fetch users")
                setIsLoading(false)
            }
        }
        getUsers()
    }, [])
    const handleClick = async (id, index) => {
        try {
            const temp = [...isDeleting]
            temp[index] = true
            setIsDeleting(temp)
            const response = await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
            console.log(response)
            alert("Deleted Successfully")
            setIsDeleting(new Array(10).fill(false))
        } catch (err) {
            setIsDeleting(new Array(10).fill(false))
            alert("Failed to delete user")
        }
    }
    const { theme } = useThemeContext()
    return (
        <div className="flex flex-col justify-between items-center rounded-div p-4 mt-8">
            {users && <List sx={{ width: '100%', maxWidth: 1200 }}>
                {users.map((user, index) => (
                    <div key={index}>
                        <div className="flex justify-between">
                            <Link to={`/Users/${user.id}`}>
                                <ListItem alignItems="flex-start" >
                                    <ListItemAvatar>
                                        <Avatar sx={{ bgcolor: "red" }}>{user.name.substr(0, 1)}</Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={`${user.name}`}
                                        secondary={
                                            <React.Fragment>
                                                <Typography
                                                    sx={{ display: 'block' }}
                                                    component="span"
                                                    variant="body2"
                                                    color={`${theme === 'light' ? "black" : '#dbdbdb'}`}
                                                >
                                                    {user.email}
                                                </Typography>
                                                <Typography
                                                    sx={{ display: 'block' }}
                                                    component="span"
                                                    variant="body2"
                                                    color={`${theme === 'light' ? "black" : '#dbdbdb'}`}
                                                >
                                                    {user.phone}
                                                </Typography>
                                            </React.Fragment>
                                        }
                                    />
                                </ListItem>
                            </Link>
                            <button onClick={() => (handleClick(user.id, index))} className="self-center bg-button text-btnText px-4 py-2 rounded-2xl">
                                {!isDeleting[index] && <span>Delete</span>}
                                {isDeleting[index] && <span className="loading loading-spinner loading-md"></span>}
                            </button>
                        </div>
                        <Divider variant="inset" component="li" sx={{ bgcolor: `${theme === 'light' ? "black" : '#dbdbdb'}` }} />
                    </div>
                ))}
            </List>}
            {isLoading && <span className="loading loading-spinner loading-lg"></span>}
        </div>
    )
}