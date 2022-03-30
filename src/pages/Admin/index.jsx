import React, { Component, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { getCurrentUser } from '../../service/UserService'

export default function Admin() {
  let navigate = useNavigate();
  useEffect(() => {
    let user = getCurrentUser()
    console.log('user', user)
    if (!user) {
      navigate('/login', { replace: true })
    }
  }, [])

  return (
    <div>Admin</div>
  )
}
