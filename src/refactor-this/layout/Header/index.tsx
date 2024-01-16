import { Link, useLocation } from 'react-router-dom'
import { LINKS } from '../../constants'
import { useImageContext } from '../../context'
import React from 'react'

const Header = () => {
  const { pathname } = useLocation()
  const { updatePage, loading } = useImageContext()
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        Photo Sharing App
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          {LINKS.map((data) => (
            <React.Fragment key={data.id}>
              {loading ? (
                <span className="text-secondary mx-2">{data.name}</span>
              ) : (
                <Link
                  onClick={() => updatePage(1)}
                  className={`nav-link ${pathname.substring(1) === data.name ? 'active' : ''}`}
                  to={data.url}
                >
                  {data.name}
                  <span className="sr-only">(current)</span>
                </Link>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Header
