import React from 'react'
import { Alert } from 'react-bootstrap'

const NotfoundCard = ({messege}) => {
  return (
    <Alert  variant="success">
<h3 className='text-center'>   {messege}</h3>
  </Alert>
  )
}

export default NotfoundCard
