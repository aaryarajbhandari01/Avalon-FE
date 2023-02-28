import React from 'react'
import { Link } from 'react-router-dom'
import "./Error.css"

const Error = () => {
  return (
    <div className='error'>
    	<div class="fof">
        		<h1>Error 404</h1>
                <h2>UH OH! You're lost.</h2>
                <p>
                    The page you're looking for does not exist.
                </p>

                <Link to="/">
                    <button>
                    GO BACK TO HOME
                    </button>
                </Link>
    	</div>
    </div>
  )
}

export default Error