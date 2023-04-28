import './index.css'

const NotFound = () => (
  <div className="not-found-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/ebank-not-found-img.png "
      className="not-found-image"
      alt="not found"
    />
    <h1 className="not-heading">Page Not Found</h1>
    <p className="not-para">
      We are sorry, the page you requested could not be found
    </p>
  </div>
)

export default NotFound
