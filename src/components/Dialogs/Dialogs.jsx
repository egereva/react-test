import React from 'react'
import s from './Dialogs.module.css'

const Dialogs = (props) => {
  return (
    <div className="dialogs">
      <div>
        <div className="dialogs-items">
          <div className="item">
            Dimych
          </div>
          <div className="item">
            Andrey
          </div>
          <div className="item">
            Ivan
          </div>
          <div className="item">
            Denis
          </div>
        </div>
        <div className="messages">

        </div>
      </div>
    </div>
  )
}

export default Dialogs
