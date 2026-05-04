import type { ReactNode } from 'react'

export default function PhoneFrame({ children }: { children: ReactNode }) {
  return (
    <div className="pc-stage">
      <div className="phone-viewport">{children}</div>
    </div>
  )
}
