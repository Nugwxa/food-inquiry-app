'use client'

import classNames from 'classnames'
import Link from 'next/link'
import { ReactNode } from 'react'
import styles from './NavLink.module.css'
import { usePathname } from 'next/navigation'

interface NavLinkProps extends React.ComponentPropsWithRef<'a'> {
  className?: string
  children: ReactNode
}
export default function NavLink(props: Readonly<NavLinkProps>) {
  const { href = '', children, className, ...rest } = props

  const pathname = usePathname()

  const linkIsActive = pathname.startsWith(href)
  return (
    <Link
      href={href}
      className={classNames(className, styles.navLink, {
        [styles.activeLink]: linkIsActive,
      })}
      {...rest}
    >
      {children}
    </Link>
  )
}
