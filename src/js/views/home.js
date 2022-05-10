import React from 'react'
import { Link } from "react-router-dom";


export const Home = () => {
	
  return (
	<div className='container mt-5'>
    <div className='text-center'>
    <Link to="/people">
    <button type="button" className="btn btn-warning">People</button>
    </Link>
    <Link to="/planets">
    <button type="button" className="btn btn-warning">Planets</button>
</Link>
    </div>

  </div>
  
  )
}

