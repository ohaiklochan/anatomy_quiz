import React from 'react'
import { Message } from 'semantic-ui-css'

const NotificationBump = ({message}) => {

    return (
        <div>
          <Message>{message}</Message>
        </div>
    )
}

export default NotificationBump