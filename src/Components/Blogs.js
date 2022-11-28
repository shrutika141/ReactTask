import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { blog } from '../Redux/Actions/Actions'
import Posts from './Posts'

const Blogs = () => {

    const [DataisLoaded, setDataisLoaded] = useState(false)
    const data = useSelector(state => state);
    const dispatch = useDispatch()

    const api = () => {
        axios.get('https://jsonplaceholder.typicode.com/comments')
        .then((response) => {
            dispatch(blog(response.data))
            setDataisLoaded(true)
        })
        .catch((err) => console.log(err))
    }

    useEffect(() => {
        api()
    }, [!DataisLoaded])

    if (!DataisLoaded) {
        return (
            <div className="container mt-5">
                <h1 className="display-4">No data found !</h1>
            </div>
        )
    } else {
        return (
            <div className="container mt-5">
                <h1 className="display-4">BLOGS</h1>

                <Posts data={data} />
            </div>
        )
    }

}

export default Blogs