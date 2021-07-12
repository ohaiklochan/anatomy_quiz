import React from 'react'
import { Message } from 'semantic-ui-react'

const NotificationBump = ({message}) => {

    return (
        <div>
          <Message>{message}</Message>
        </div>
    )
}

export default NotificationBump