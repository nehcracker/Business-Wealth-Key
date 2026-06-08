import { Link } from 'react-router-dom'
import { useSEO } from '../../hooks/useSEO'
import { IconKey } from '../../assets/icons'
import './NotFound.css'

export default function NotFound() {
  return (
    <>
      <div className="notfound">
        <div className="notfound__inner">
          <div className="notfound__icon" aria-hidden="true">
            <IconKey size={72} />
          </div>
          <p className="notfound__code">404</p>
          <h1 className="notfound__heading">Page Not Found</h1>
          <p className="notfound__message">
            The page you are looking for does not exist or may have been moved.
          </p>
          <Link to="/" className="notfound__btn">
            Return to Home
          </Link>
          <div className="notfound__links">
            <Link to="/services" className="notfound__link">Our Services</Link>
            <span className="notfound__sep" aria-hidden="true">·</span>
            <Link to="/about" className="notfound__link">About</Link>
            <span className="notfound__sep" aria-hidden="true">·</span>
            <Link to="/contact" className="notfound__link">Contact</Link>
          </div>
        </div>
        <div className="notfound__glow" aria-hidden="true" />
      </div>
    </>
  )
}
