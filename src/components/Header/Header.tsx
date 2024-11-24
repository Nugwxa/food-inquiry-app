'use client'
import { MenuIcon, XIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import classNames from 'classnames'
import NavLink from './NavLink'
import styles from './Header.module.css'

/**
 * Header component for application's navigation
 */
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const html = document.documentElement

    // Prevent the user from scrolling if the menu is open
    if (isMenuOpen) {
      html.style.overflow = 'hidden'
    } else {
      html.style.overflow = ''
    }

    return () => {
      html.style.overflow = ''
    }
  }, [isMenuOpen])

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <div className={styles.headerTitle}>Food Inquiry App</div>

        {/* Desktop Navigation */}
        <nav className={styles.headerNavigation}>
          <ul className={styles.desktopNavigation}>
            <li>{<NavLink href="/recipes">Recipes</NavLink>}</li>
            <li>
              {<NavLink href="/nearby-restaurants">Nearby Restaurants</NavLink>}
            </li>
          </ul>
        </nav>

        {/* Side menu toggle button */}
        <button
          className={styles.menuButton}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <XIcon /> : <MenuIcon />}
        </button>

        {/* Mobile Navigation and Overlay */}
        {isMenuOpen && (
          <>
            <div
              className={classNames(styles.overlay, {
                [styles.overlayActive]: isMenuOpen,
              })}
              onClick={toggleMenu}
            />

            <nav className={classNames(styles.mobileNav)}>
              <ul>
                <li>
                  <NavLink href="/recipes" onClick={() => setIsMenuOpen(false)}>
                    Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    href="/nearby-restaurants"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Nearby Restaurants
                  </NavLink>
                </li>
              </ul>
            </nav>
          </>
        )}
      </div>
    </header>
  )
}
