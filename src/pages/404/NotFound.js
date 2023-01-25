import React from 'react'
import { Link } from 'react-router-dom'
const NotFound = () => {
  return (
    <section>
      <div style={{ width: '100%', height: '100%' }} className='flex py-[8rem] justify-center items-center flex-col' >
        <h2 style={{ fontSize: '35px', color: '#00b966' }}>Not Found</h2>
        <h1 className='' style={{ color: '#00b966', fontSize: '65px', margin: '2rem' }} >404</h1>
        <Link to='/' >Home</Link>
      </div>
    </section>
  )
}

export default NotFound