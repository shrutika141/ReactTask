import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Posts = (props) => {

  const [comment, setComment] = useState('')

  const showComment = (newid) => {
    props.data[0].filter(item => {
      if (item.id === newid) {
        setComment(item)
      }
    })
  }

  return (
    <div>
      <div className="container mt-3">
        <div className="row mt-3">

          {
            props.data[0].map((e) => {
              return (
                <div className="col-sm mt-4" key={e.id}>
                  <div className="card" style={{ width: '18rem' }}>
                    <div className="card-body">
                      <h5 className="card-title">{e.name}</h5>
                      <p className="card-text">{e.body}</p>
                      <Link to="/" onClick={() => showComment(e.id)} data-toggle="modal" data-target="#exampleModal" className="card-link">Show comments</Link>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>

      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Comments</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="card">
                <div className="card-body">
                  {comment.body}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Posts