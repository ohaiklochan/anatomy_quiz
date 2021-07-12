import React from 'react'

const Rankings = (props) => {
  return (
      <tr>
        <td>{props.user.username}</td>
        <td>{props.user.highest_streak}</td>
      </tr>
  );
}

export default Rankings