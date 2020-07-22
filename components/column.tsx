import React from 'react'
import clsx from 'clsx'

export function Column({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={clsx('px-3', className)}>
      {children}
    </div>
  )
}