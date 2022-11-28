import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Blogs from './Components/Blogs'
// import Comments from './Components/Comments.js'

const App = () => {

  useEffect(() => {
    console.log('app')
  })

  return (
    <div>
        {/* <Blogs /> */}
        <Routes>
          <Route path="/" element={<Blogs />} />
          {/* <Route path="/comments" element={<Comments />} />       */}
        </Routes>
    </div>
  )
}

export default App