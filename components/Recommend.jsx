import React from 'react'

export default function Recommend() {
  return (
    <div className='text-center pb-5'>
        <small>See Personalized recommendations.</small>
        <br />
        <a href="/login" className='btn auth_button'>
            Sign In
        </a>
        <br />
        <small>New customer? <a href="/signup">Start Here.</a></small>
    </div>
  )
}
