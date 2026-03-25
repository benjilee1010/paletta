import { useState } from 'react'
import './ColorCard.css'

function getContrastColor(hex) {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255
  return luminance > 0.55 ? '#1a1a1a' : '#ffffff'
}

export default function ColorCard({ color }) {
  const [copied, setCopied] = useState(false)
  const textColor = getContrastColor(color.hex)

  const copy = () => {
    navigator.clipboard.writeText(color.hex)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div
      className="color-card"
      style={{ background: color.hex, color: textColor }}
      onClick={copy}
      title="Click to copy hex"
    >
      <div className="card-inner">
        <div className="color-name">{color.name}</div>
        <div className="color-meta">
          <span className="hex-code">{color.hex.toUpperCase()}</span>
          <span className={`copy-badge ${copied ? 'visible' : ''}`}>
            {copied ? '✓ Copied!' : 'Copy'}
          </span>
        </div>
      </div>
    </div>
  )
}
