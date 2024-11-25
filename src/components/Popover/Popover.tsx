'use client'
import React from 'react'
import * as RadixPopover from '@radix-ui/react-popover'
import styles from './Popover.module.css'
import classNames from 'classnames'

interface PopoverProps {
  trigger: JSX.Element
  children: React.ReactNode
  className?: string
}

/**
 * A wrapper for Radix UI's Popover.
 *
 * @param {JSX.Element} trigger - The element that triggers the popover.
 * @param {React.ReactNode} children - The content displayed within the popover.
 * @param {string} [className] - Additional CSS class names to style the popover content. (optional)
 */
export default function Popover(props: Readonly<PopoverProps>) {
  const { trigger, children, className } = props
  return (
    <RadixPopover.Root>
      <RadixPopover.Trigger asChild>{trigger}</RadixPopover.Trigger>
      <RadixPopover.Portal>
        <RadixPopover.Content
          className={classNames(className, styles.content)}
          sideOffset={5}
        >
          {children}
        </RadixPopover.Content>
      </RadixPopover.Portal>
    </RadixPopover.Root>
  )
}
