import OpenAI from 'openai'

const USE_CASE_GUIDANCE = {
  any:      'The palette can be used for any purpose. Focus purely on the mood and description.',
  art:      'This palette is for fine art, illustration, or painting. Favor expressive, nuanced tones with artistic character — consider how pigments would interact.',
  web:      'This palette is for a website or UI. Include practical tones: a dominant brand color, a complementary accent, neutral backgrounds/surfaces, and readable text colors. Ensure good contrast ratios and accessibility.',
  brand:    'This palette is for branding and visual identity. Colors should be distinctive, memorable, and versatile across print and digital. Include a strong primary, a supporting secondary, and clean neutrals.',
  interior: 'This palette is for interior design. Choose warm, livable tones that work as wall colors, furniture, and accents. Consider how natural light affects the hues.',
  fashion:  'This palette is for fashion and textiles. Think in terms of fabric dyes, seasonal trends, and wearable combinations. Include hero tones and supporting neutrals.',
  print:    'This palette is for print design (posters, packaging, editorial). Colors should be bold and work well in CMYK. Consider how they appear on both coated and uncoated stock.',
  game:     'This palette is for game art or environments. Include both vibrant hero colors and supporting mid-tones. Consider how colors read on screen at various sizes.',
  nature:   'This palette draws from natural landscapes. Use organic, earthy, or natural tones found in the environment described. Avoid overly synthetic or digital-looking colors.',
  food:     'This palette is for food, beverage, or culinary branding. Colors should feel appetizing and evocative. Warm, rich, or fresh tones tend to work well.',
}

// Each call randomly picks one angle to push the AI toward a different interpretation
const CREATIVE_ANGLES = [
  'Lean into unexpected or surprising color choices that still feel cohesive.',
  'Use a muted, desaturated treatment — dusty, aged, or washed-out tones.',
  'Go bold and highly saturated — vivid, punchy, high-energy colors.',
  'Explore a dark, moody, low-luminance palette.',
  'Explore a light, airy, high-key palette with soft pastels and near-whites.',
  'Mix warm and cool tones in an unconventional but harmonious way.',
  'Focus on analogous hues clustered around one dominant color family.',
  'Use strong complementary contrast between two opposing hue families.',
  'Interpret the prompt through a historical or vintage color lens.',
  'Interpret the prompt through a futuristic or sci-fi color lens.',
  'Favor earthy, natural pigment-like tones even if the subject is abstract.',
  'Favor neon or fluorescent-adjacent tones even if the subject is natural.',
  'Emphasize triadic harmony — three hues spaced evenly around the color wheel.',
  'Use a split-complementary scheme for visual tension with balance.',
  'Explore an almost-monochromatic palette with subtle hue shifts.',
  'Prioritize warm amber, orange, and red-adjacent tones.',
  'Prioritize cool blue, teal, and violet-adjacent tones.',
  'Make the palette feel cinematic — like a film grade or color correction LUT.',
  'Channel a specific cultural aesthetic (e.g. Japanese wabi-sabi, Bauhaus, Art Deco).',
  'Use colors that feel tactile — like specific materials, fabrics, or surfaces.',
]

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

function randomTemperature() {
  // Range 0.75–1.15 — enough variation without going incoherent
  return Math.round((0.75 + Math.random() * 0.4) * 100) / 100
}

export async function generatePalette(prompt, count, apiKey, useCase = { id: 'any', label: 'Any' }) {
  const client = new OpenAI({ apiKey, dangerouslyAllowBrowser: true })

  const guidance = USE_CASE_GUIDANCE[useCase.id] || USE_CASE_GUIDANCE.any
  const angle = pickRandom(CREATIVE_ANGLES)
  const temperature = randomTemperature()
  // A random seed phrase injected into the prompt breaks model caching on identical inputs
  const seed = Math.random().toString(36).slice(2, 7)

  const systemPrompt = `You are a professional color designer and color theorist with expertise across fine art, UI/UX design, branding, interior design, fashion, print, game art, and more.
When given a description and use case, you generate harmonious, beautiful, and contextually appropriate color palettes.
Every palette you generate should feel fresh and distinct — never predictable or clichéd.
Always respond with valid JSON only — no markdown, no explanation, just the JSON array.`

  const userPrompt = `Generate a color palette of exactly ${count} colors for the following:

Description: "${prompt}"
Use case: ${useCase.label}
Use case guidance: ${guidance}
Creative direction: ${angle}

The colors should be harmonious, varied in lightness/saturation, and perfectly suited to both the description and the use case.
Avoid defaulting to the most obvious or predictable colors for this description — explore a fresh, interesting angle.

Return a JSON array with exactly ${count} objects. Each object must have:
- "hex": a valid 6-digit hex color code (e.g. "#A3C4BC")
- "name": a creative, evocative color name (2-4 words, e.g. "Dusty Rose Mist", "Deep Ocean Teal")

[ref:${seed}]
Return ONLY the JSON array, nothing else.`

  const response = await client.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userPrompt },
    ],
    temperature,
    max_tokens: 600,
  })

  const raw = response.choices[0].message.content.trim()

  let colors
  try {
    colors = JSON.parse(raw)
  } catch {
    const match = raw.match(/\[[\s\S]*\]/)
    if (!match) throw new Error('Could not parse the AI response. Try again.')
    colors = JSON.parse(match[0])
  }

  if (!Array.isArray(colors) || colors.length === 0) {
    throw new Error('Unexpected response format. Please try again.')
  }

  return colors.map((c) => ({
    hex: c.hex.startsWith('#') ? c.hex : `#${c.hex}`,
    name: c.name,
  }))
}
