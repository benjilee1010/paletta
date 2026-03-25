import { useState } from 'react'
import { generatePalette, KEYWORD_GROUPS, getContradictedKeywords } from '../utils/algorithm'
import ColorCard from './ColorCard'
import './PaletteGenerator.css'

const USE_CASES = [
  { id: 'any',      label: 'Any',          icon: '✦' },
  { id: 'art',      label: 'Art',          icon: '🎨' },
  { id: 'web',      label: 'Web / UI',     icon: '🖥️' },
  { id: 'brand',    label: 'Branding',     icon: '💎' },
  { id: 'interior', label: 'Interior',     icon: '🛋️' },
  { id: 'fashion',  label: 'Fashion',      icon: '👗' },
  { id: 'print',    label: 'Print',        icon: '🖨️' },
  { id: 'game',     label: 'Game',         icon: '🎮' },
  { id: 'nature',   label: 'Nature',       icon: '🌿' },
  { id: 'architecture', label: 'Architecture', icon: '🏛️' },
]

function randomKeywords() {
  const all = KEYWORD_GROUPS.flatMap((g) => g.keywords)
  const shuffled = [...all].sort(() => Math.random() - 0.5)
  const count = 2 + Math.floor(Math.random() * 3) // 2–4 keywords
  return shuffled.slice(0, count)
}

export default function PaletteGenerator() {
  const [selected, setSelected] = useState([])
  const [useCase, setUseCase] = useState('any')
  const [colorCount, setColorCount] = useState(5)
  const [palette, setPalette] = useState([])
  const [copyAllDone, setCopyAllDone] = useState(false)

  const contradicted = getContradictedKeywords(selected)
  const [openGroups, setOpenGroups] = useState(
    () => Object.fromEntries(KEYWORD_GROUPS.map((g) => [g.label, false]))
  )
  const toggleGroup = (label) =>
    setOpenGroups((prev) => ({ ...prev, [label]: !prev[label] }))
  const allOpen = Object.values(openGroups).every(Boolean)
  const toggleAll = () =>
    setOpenGroups(Object.fromEntries(KEYWORD_GROUPS.map((g) => [g.label, !allOpen])))

  const toggleKeyword = (kw) => {
    if (contradicted.has(kw)) return
    setSelected((prev) =>
      prev.includes(kw) ? prev.filter((k) => k !== kw) : [...prev, kw]
    )
  }

  const handleGenerate = () => {
    const colors = generatePalette(selected, colorCount, useCase)
    setPalette(colors)
  }

  const handleRandom = () => {
    const kws = randomKeywords()
    setSelected(kws)
    const colors = generatePalette(kws, colorCount, useCase)
    setPalette(colors)
  }

  const handleCopyAll = () => {
    const text = palette.map((c) => `${c.name}: ${c.hex}`).join('\n')
    navigator.clipboard.writeText(text)
    setCopyAllDone(true)
    setTimeout(() => setCopyAllDone(false), 1800)
  }

  return (
    <div className="generator">

      {/* ── Left column: keywords ── */}
      <div className="keyword-section">
        <div className="keyword-header">
          <label className="label">Keywords <span className="label-hint">— pick any combination</span></label>
          <div className="keyword-actions">
            {selected.length > 0 && (
              <button className="btn-ghost" onClick={() => setSelected([])}>Clear all</button>
            )}
            <button className="btn-ghost" onClick={toggleAll}>{allOpen ? 'Collapse all' : 'Expand all'}</button>
            <button className="btn-ghost" onClick={handleRandom}>Randomize</button>
          </div>
        </div>

        {selected.length > 0 && (
          <div className="selected-tags">
            {selected.map((kw) => (
              <button key={kw} className="selected-tag" onClick={() => toggleKeyword(kw)}>
                {kw} ×
              </button>
            ))}
          </div>
        )}

        <p className="keyword-hint">Lots of options here — don't overthink it. Choose however many you want. You don't need to pick something from every category. Just pick what <em>feels</em> right.</p>

        <div className="keyword-groups">
          {KEYWORD_GROUPS.map((group) => (
            <div key={group.label} className="keyword-group">
              <button className="group-label" onClick={() => toggleGroup(group.label)}>
                <span>{group.label}</span>
                <span className="group-chevron">{openGroups[group.label] ? '▴' : '▾'}</span>
              </button>
              <div className={`keyword-tags-wrapper ${openGroups[group.label] ? 'open' : ''}`}>
                <div className="keyword-tags">
                  {group.keywords.map((kw) => (
                    <button
                      key={kw}
                      className={`kw-tag ${selected.includes(kw) ? 'active' : ''} ${contradicted.has(kw) ? 'contradicted' : ''}`}
                      onClick={() => toggleKeyword(kw)}
                      title={contradicted.has(kw) ? `Conflicts with: ${[...getContradictedKeywords([kw])].filter(k => selected.includes(k)).join(', ')}` : undefined}
                    >
                      {kw}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Right column: controls + output ── */}
      <div className="right-col">

        {/* Use case */}
        <div className="usecase-section">
          <label className="label">Use case</label>
          <div className="usecase-grid">
            {USE_CASES.map((uc) => (
              <button
                key={uc.id}
                className={`usecase-card ${useCase === uc.id ? 'active' : ''}`}
                onClick={() => setUseCase(uc.id)}
              >
                <span className="usecase-icon">{uc.icon}</span>
                <span className="usecase-label">{uc.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Color count */}
        <div className="count-section">
          <label className="label">Number of colors: <strong>{colorCount}</strong></label>
          <div className="slider-row">
            <span className="slider-limit">2</span>
            <input
              type="range" min={2} max={10} value={colorCount}
              onChange={(e) => setColorCount(Number(e.target.value))}
              className="slider"
            />
            <span className="slider-limit">10</span>
          </div>
          <div className="count-bubbles-wrapper">
            <div className="count-bubbles">
              {[2,3,4,5,6,7,8,9,10].map((n) => (
                <button
                  key={n}
                  className={`count-bubble ${colorCount === n ? 'active' : ''} ${[3,4,5].includes(n) ? 'sweet-spot' : ''}`}
                  onClick={() => setColorCount(n)}
                >
                  {n}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Generate button */}
        <button className={`btn-generate ${selected.length === 0 ? 'btn-generate--random' : ''}`} onClick={handleGenerate}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
          </svg>
          {selected.length === 0 ? 'Generate Random Palette' : 'Generate Palette'}
        </button>

        {/* Palette */}
        {palette.length > 0 && (
          <div className="palette-section">
            <div className="palette-header">
              <div className="palette-title-block">
                <h2>Your Palette</h2>
                {selected.length > 0 && (
                  <span className="palette-keywords">{selected.join(' · ')}</span>
                )}
              </div>
              <button className="btn-ghost" onClick={handleCopyAll}>
                {copyAllDone ? '✓ Copied!' : 'Copy all'}
              </button>
            </div>
            <div className="palette-strip">
              {palette.map((color) => (
                <div
                  key={color.hex}
                  className="strip-swatch"
                  style={{ background: color.hex, flex: 1 }}
                  title={`${color.name} — ${color.hex}`}
                />
              ))}
            </div>
            <div className="palette-cards">
              {palette.map((color, i) => (
                <ColorCard key={i} color={color} />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  )
}
