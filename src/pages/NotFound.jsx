import { Link } from 'react-router-dom'

function NotFound() {
  return (
    // 1. div.not-found
    <div className="not-found">
      
      {/* 404 message */}
      <h2>404 - Page Not Found</h2>

      {/* Explanation */}
      <p>The page you are looking for does not exist.</p>

      {/* Back to Home */}
      <Link to="/">Back to Home</Link>

    </div>
  )
}

export default NotFound