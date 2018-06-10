import React from 'react'
import { Colors, beat, MediaQueries } from '../design'

export default function ActionButton ({
  href, disabled, primary, children, onClick,
}) {
  return (
    <a
      href={href || `javascript${':'}`}
      onClick={onClick}
      css={{
        padding: `${beat(0.5)} ${beat(1)}`,
        display: 'inline-block',
        border: `1px solid ${primary ? Colors.reactBlue : Colors.grey700}`,
        borderTopLeftRadius: beat(0.25),
        borderBottomRightRadius: beat(0.25),
        color: Colors.white, // TODO: brighter grey
        fontWeight: primary ? 600 : 400,
        opacity: disabled ? 0.25 : 1,
        pointerEvents: disabled ? 'none' : undefined,
        [MediaQueries.md]: {
          width: beat(10),
        },
        transition: 'all ease 0.2s',
        '&:hover': {
          background: primary ? Colors.reactBlue : Colors.grey700,
        },
      }}
    >
      {children}
    </a>
  )
}
