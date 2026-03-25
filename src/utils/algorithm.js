// ---------------------------------------------------------------------------
// Keyword groups (used by UI)
// ---------------------------------------------------------------------------
export const KEYWORD_GROUPS = [
  {
    label: 'Color Priority',
    keywords: ['red','orange','yellow','green','blue','purple','pink','teal','cyan','lime','indigo','magenta','brown','coral','gold','olive','lavender','peach','turquoise','amber','burgundy','navy','rose','black','white','gray','silver'],
  },
  {
    label: 'Temperature',
    keywords: ['warm','cool','icy','fiery','scorching','arctic','humid','mild','brisk'],
  },
  {
    label: 'Mood',
    keywords: ['calm','moody','dreamy','electric','funky','bold','soft','tense','nostalgic','anxious','restless','hopeful','melancholy','euphoric'],
  },
  {
    label: 'Personality',
    keywords: ['playful','funny','serious','elegant','brutal','lovely','mysterious','rigid','whimsical','rebellious','timid','chaotic','refined','raw','quirky'],
  },
  {
    label: 'Aesthetic',
    keywords: ['premium','vintage','retro','minimal','pastel','neon','gothic','industrial','homemade','luxe','cottagecore','brutalist','maximalist','cyberpunk','art deco','bauhaus','y2k','vaporwave','coastal','preppy','steampunk'],
  },
  {
    label: 'Nature & Tone',
    keywords: ['earthy','natural','fresh','tropical','dark','bright','muted','cosmic','sandy','oceanic','floral','autumnal','stormy','mossy','volcanic','desert','alpine'],
  },
  {
    label: 'Color Quality',
    keywords: ['creamy','vivid','desaturated','washed out','dusty','rich','faded','deep','pale','matte','glossy','translucent','cloudy','crisp','monochrome','duotone','high contrast','chalky','inky','muddy','weathered'],
  },
  {
    label: 'Era',
    keywords: ['70s','80s','90s','medieval','futuristic','ancient'],
  },
  {
    label: 'Material',
    keywords: ['wood','metal','ceramic','glass','concrete','velvet','linen'],
  },
  {
    label: 'Time of Day',
    keywords: ['golden hour','midnight','dawn','dusk','midday'],
  },
]

// ---------------------------------------------------------------------------
// Color DNA per keyword
// hues: [[min,max], ...] — valid hue ranges (0–360)
// sat:  [min, max] — saturation %
// lit:  [min, max] — lightness %
// harmony: analogous | complementary | triadic | varied
// ---------------------------------------------------------------------------
const KEYWORD_DNA = {

  // ── Temperature ──────────────────────────────────────────────────────────
  warm:       { hues:[[0,60],[330,360]],          sat:[30,75],  lit:[40,75],  harmony:'analogous'     },
  cool:       { hues:[[175,260]],                 sat:[20,65],  lit:[35,72],  harmony:'analogous'     },
  icy:        { hues:[[185,230]],                 sat:[10,45],  lit:[68,93],  harmony:'analogous'     },
  fiery:      { hues:[[0,42]],                    sat:[72,100], lit:[35,58],  harmony:'analogous'     },
  scorching:  { hues:[[0,30]],                    sat:[80,100], lit:[28,52],  harmony:'complementary' },
  arctic:     { hues:[[185,225]],                 sat:[8,35],   lit:[72,95],  harmony:'analogous'     },
  humid:      { hues:[[100,200]],                 sat:[22,55],  lit:[42,68],  harmony:'analogous'     },
  mild:       { hues:[[60,200]],                  sat:[12,42],  lit:[52,78],  harmony:'analogous'     },
  brisk:      { hues:[[170,240]],                 sat:[25,55],  lit:[45,72],  harmony:'analogous'     },

  // ── Mood ─────────────────────────────────────────────────────────────────
  calm:       { hues:[[90,160],[180,240]],        sat:[15,45],  lit:[55,80],  harmony:'analogous'     },
  moody:      { hues:[[200,280]],                 sat:[25,60],  lit:[18,44],  harmony:'analogous'     },
  dreamy:     { hues:[[240,340]],                 sat:[18,52],  lit:[60,85],  harmony:'analogous'     },
  electric:   { hues:[[160,300]],                 sat:[85,100], lit:[45,65],  harmony:'triadic'       },
  funky:      { hues:[[20,60],[270,320],[140,180]],sat:[65,95], lit:[45,70],  harmony:'varied'        },
  bold:       { hues:[[0,360]],                   sat:[75,100], lit:[32,55],  harmony:'complementary' },
  soft:       { hues:[[0,360]],                   sat:[8,38],   lit:[65,90],  harmony:'analogous'     },
  tense:      { hues:[[0,20],[190,230]],          sat:[55,90],  lit:[25,52],  harmony:'complementary' },
  nostalgic:  { hues:[[20,65],[330,360]],         sat:[18,48],  lit:[50,74],  harmony:'analogous'     },
  anxious:    { hues:[[0,30],[200,240]],          sat:[35,70],  lit:[30,58],  harmony:'complementary' },
  restless:   { hues:[[0,360]],                   sat:[50,88],  lit:[38,68],  harmony:'varied'        },
  hopeful:    { hues:[[40,80],[180,220]],         sat:[35,72],  lit:[55,80],  harmony:'analogous'     },
  melancholy: { hues:[[200,270]],                 sat:[15,45],  lit:[22,48],  harmony:'analogous'     },
  euphoric:   { hues:[[0,80],[280,360]],          sat:[70,100], lit:[50,75],  harmony:'triadic'       },

  // ── Personality ──────────────────────────────────────────────────────────
  playful:    { hues:[[0,360]],                   sat:[55,90],  lit:[55,80],  harmony:'triadic'       },
  funny:      { hues:[[20,80],[300,360]],         sat:[60,92],  lit:[55,78],  harmony:'varied'        },
  serious:    { hues:[[200,240],[0,20]],          sat:[10,38],  lit:[22,52],  harmony:'analogous'     },
  elegant:    { hues:[[240,300],[0,30]],          sat:[12,42],  lit:[22,58],  harmony:'analogous'     },
  brutal:     { hues:[[0,20],[195,235]],          sat:[30,80],  lit:[8,32],   harmony:'complementary' },
  lovely:     { hues:[[320,360],[0,20]],          sat:[28,68],  lit:[55,82],  harmony:'analogous'     },
  mysterious: { hues:[[240,300]],                 sat:[28,68],  lit:[10,36],  harmony:'analogous'     },
  rigid:      { hues:[[195,235]],                 sat:[5,28],   lit:[28,58],  harmony:'analogous'     },
  whimsical:  { hues:[[0,360]],                   sat:[45,85],  lit:[58,84],  harmony:'triadic'       },
  rebellious: { hues:[[0,30],[270,310]],          sat:[65,100], lit:[28,55],  harmony:'complementary' },
  timid:      { hues:[[0,360]],                   sat:[5,28],   lit:[68,90],  harmony:'analogous'     },
  chaotic:    { hues:[[0,360]],                   sat:[40,100], lit:[20,80],  harmony:'varied'        },
  refined:    { hues:[[200,270],[20,50]],         sat:[10,38],  lit:[30,62],  harmony:'analogous'     },
  raw:        { hues:[[15,75],[90,140]],          sat:[45,80],  lit:[25,52],  harmony:'analogous'     },
  quirky:     { hues:[[0,360]],                   sat:[45,85],  lit:[48,78],  harmony:'varied'        },

  // ── Aesthetic ────────────────────────────────────────────────────────────
  premium:    { hues:[[240,280],[35,55]],         sat:[18,62],  lit:[14,48],  harmony:'complementary' },
  vintage:    { hues:[[20,60],[330,360]],         sat:[14,44],  lit:[50,75],  harmony:'analogous'     },
  retro:      { hues:[[15,55],[270,310]],         sat:[45,80],  lit:[45,68],  harmony:'varied'        },
  minimal:    { hues:[[0,360]],                   sat:[0,18],   lit:[62,94],  harmony:'analogous'     },
  pastel:     { hues:[[0,360]],                   sat:[18,48],  lit:[72,90],  harmony:'varied'        },
  neon:       { hues:[[80,200],[280,340]],        sat:[90,100], lit:[48,65],  harmony:'complementary' },
  gothic:     { hues:[[270,310],[0,20]],          sat:[28,68],  lit:[6,28],   harmony:'analogous'     },
  industrial: { hues:[[195,230]],                 sat:[4,22],   lit:[20,50],  harmony:'analogous'     },
  homemade:   { hues:[[20,80],[90,150]],          sat:[18,52],  lit:[45,72],  harmony:'analogous'     },
  luxe:       { hues:[[35,55],[240,280]],         sat:[25,65],  lit:[18,52],  harmony:'complementary' },
  cottagecore:{ hues:[[70,150],[320,360]],        sat:[20,55],  lit:[55,82],  harmony:'analogous'     },
  brutalist:  { hues:[[0,360]],                   sat:[0,20],   lit:[15,45],  harmony:'complementary' },
  maximalist: { hues:[[0,360]],                   sat:[60,100], lit:[35,75],  harmony:'varied'        },
  cyberpunk:  { hues:[[280,330],[160,210]],       sat:[80,100], lit:[28,55],  harmony:'complementary' },
  'art deco': { hues:[[35,55],[240,280]],         sat:[40,80],  lit:[15,50],  harmony:'complementary' },
  bauhaus:    { hues:[[0,15],[45,65],[210,250]],  sat:[80,100], lit:[35,58],  harmony:'triadic'       },
  y2k:        { hues:[[240,280],[300,340]],       sat:[28,65],  lit:[65,88],  harmony:'analogous'     },
  vaporwave:  { hues:[[270,320],[160,210]],       sat:[50,85],  lit:[45,72],  harmony:'complementary' },
  coastal:    { hues:[[180,230],[40,65]],         sat:[18,55],  lit:[60,88],  harmony:'analogous'     },
  preppy:     { hues:[[215,245],[0,20],[110,145]],sat:[50,90],  lit:[30,60],  harmony:'triadic'       },
  steampunk:  { hues:[[25,52],[165,195],[215,240]],sat:[35,78], lit:[15,52],  harmony:'complementary' },

  // ── Nature & Tone ────────────────────────────────────────────────────────
  earthy:     { hues:[[20,90]],                   sat:[18,52],  lit:[28,58],  harmony:'analogous'     },
  natural:    { hues:[[70,160]],                  sat:[18,58],  lit:[32,65],  harmony:'analogous'     },
  fresh:      { hues:[[90,185]],                  sat:[35,72],  lit:[55,80],  harmony:'analogous'     },
  tropical:   { hues:[[80,190],[30,60]],          sat:[60,95],  lit:[45,70],  harmony:'triadic'       },
  dark:       { hues:[[0,360]],                   sat:[12,58],  lit:[6,30],   harmony:'analogous'     },
  bright:     { hues:[[0,360]],                   sat:[62,98],  lit:[52,78],  harmony:'varied'        },
  muted:      { hues:[[0,360]],                   sat:[4,26],   lit:[42,68],  harmony:'analogous'     },
  cosmic:     { hues:[[220,310]],                 sat:[45,90],  lit:[12,45],  harmony:'triadic'       },
  sandy:      { hues:[[30,65]],                   sat:[18,50],  lit:[58,82],  harmony:'analogous'     },
  oceanic:    { hues:[[175,220]],                 sat:[38,80],  lit:[28,65],  harmony:'analogous'     },
  floral:     { hues:[[300,360],[0,20],[40,80],[240,300]], sat:[28,72], lit:[55,85], harmony:'varied' },
  autumnal:   { hues:[[15,60]],                   sat:[45,85],  lit:[32,62],  harmony:'analogous'     },
  stormy:     { hues:[[200,250]],                 sat:[12,45],  lit:[18,48],  harmony:'analogous'     },
  mossy:      { hues:[[80,140]],                  sat:[20,55],  lit:[22,48],  harmony:'analogous'     },
  volcanic:   { hues:[[0,30],[330,360]],          sat:[55,90],  lit:[8,35],   harmony:'analogous'     },
  desert:     { hues:[[25,70]],                   sat:[18,52],  lit:[48,75],  harmony:'analogous'     },
  alpine:     { hues:[[90,175],[185,220]],        sat:[18,55],  lit:[42,78],  harmony:'analogous'     },

  // ── Color Quality ────────────────────────────────────────────────────────
  creamy:       { hues:[[20,60]],                 sat:[5,25],   lit:[84,96],  harmony:'analogous'     },
  desaturated:  { hues:[[0,360]],                 sat:[4,22],   lit:[38,70],  harmony:'analogous'     },
  'washed out': { hues:[[0,360]],                 sat:[3,18],   lit:[74,93],  harmony:'analogous'     },
  vivid:        { hues:[[0,360]],                 sat:[78,100], lit:[42,65],  harmony:'varied'        },
  dusty:        { hues:[[0,360]],                 sat:[10,30],  lit:[45,68],  harmony:'analogous'     },
  rich:         { hues:[[0,360]],                 sat:[55,90],  lit:[16,42],  harmony:'analogous'     },
  faded:        { hues:[[0,360]],                 sat:[6,26],   lit:[62,85],  harmony:'analogous'     },
  deep:         { hues:[[0,360]],                 sat:[45,85],  lit:[8,34],   harmony:'analogous'     },
  pale:         { hues:[[0,360]],                 sat:[8,32],   lit:[78,94],  harmony:'varied'        },
  matte:        { hues:[[0,360]],                 sat:[14,42],  lit:[32,60],  harmony:'analogous'     },
  glossy:       { hues:[[0,360]],                 sat:[55,88],  lit:[50,76],  harmony:'varied'        },
  translucent:  { hues:[[0,360]],                 sat:[4,20],   lit:[80,97],  harmony:'analogous'     },
  cloudy:       { hues:[[185,240]],               sat:[4,18],   lit:[68,88],  harmony:'analogous'     },
  crisp:        { hues:[[0,360]],                 sat:[50,90],  lit:[20,80],  harmony:'complementary' },
  monochrome:   { hues:[[0,360]],                 sat:[5,90],   lit:[5,95],   harmony:'monochrome'    },
  duotone:      { hues:[[0,360]],                 sat:[55,100], lit:[15,85],  harmony:'complementary' },
  'high contrast':{ hues:[[0,360]],              sat:[45,100], lit:[5,92],   harmony:'complementary' },
  chalky:       { hues:[[0,360]],                 sat:[8,32],   lit:[68,90],  harmony:'analogous'     },
  inky:         { hues:[[0,360]],                 sat:[55,100], lit:[4,28],   harmony:'analogous'     },
  muddy:        { hues:[[15,75]],                 sat:[12,42],  lit:[22,52],  harmony:'analogous'     },
  weathered:    { hues:[[15,65],[90,150]],        sat:[10,38],  lit:[35,65],  harmony:'analogous'     },

  // ── Era ──────────────────────────────────────────────────────────────────
  '70s':      { hues:[[20,60],[90,130]],          sat:[40,78],  lit:[38,65],  harmony:'analogous'     },
  '80s':      { hues:[[300,340],[160,210],[40,70]],sat:[65,95], lit:[42,68],  harmony:'triadic'       },
  '90s':      { hues:[[160,200],[300,330],[20,50]],sat:[18,52], lit:[45,70],  harmony:'varied'        },
  medieval:   { hues:[[0,25],[100,140],[35,55]],  sat:[45,80],  lit:[12,42],  harmony:'triadic'       },
  futuristic: { hues:[[185,250],[270,310]],       sat:[45,88],  lit:[25,60],  harmony:'complementary' },
  ancient:    { hues:[[25,70],[100,140]],         sat:[22,58],  lit:[30,58],  harmony:'analogous'     },

  // ── Material ─────────────────────────────────────────────────────────────
  wood:       { hues:[[20,50]],                   sat:[28,62],  lit:[28,58],  harmony:'analogous'     },
  metal:      { hues:[[195,230]],                 sat:[4,22],   lit:[35,68],  harmony:'analogous'     },
  ceramic:    { hues:[[20,60],[160,200]],         sat:[8,35],   lit:[68,90],  harmony:'analogous'     },
  glass:      { hues:[[175,225]],                 sat:[5,28],   lit:[72,95],  harmony:'analogous'     },
  concrete:   { hues:[[190,220]],                 sat:[2,16],   lit:[38,62],  harmony:'analogous'     },
  velvet:     { hues:[[270,320],[0,20]],          sat:[38,78],  lit:[12,38],  harmony:'analogous'     },
  linen:      { hues:[[30,65]],                   sat:[8,28],   lit:[72,92],  harmony:'analogous'     },

  // ── Time of Day ──────────────────────────────────────────────────────────
  'golden hour':{ hues:[[25,55]],                 sat:[55,90],  lit:[52,78],  harmony:'analogous'     },
  midnight:     { hues:[[220,280]],               sat:[25,65],  lit:[4,22],   harmony:'analogous'     },
  dawn:         { hues:[[300,360],[0,30],[200,240]],sat:[18,55], lit:[60,88],  harmony:'analogous'     },
  dusk:         { hues:[[270,330],[15,45]],       sat:[35,78],  lit:[22,55],  harmony:'analogous'     },
  midday:       { hues:[[185,230],[50,80]],       sat:[38,75],  lit:[55,85],  harmony:'complementary' },

  // ── Color ─────────────────────────────────────────────────────────────────
  // Tight hue ranges with wide sat/lit so they blend well with other keywords
  red:        { hues:[[345,360],[0,12]],          sat:[55,95],  lit:[28,65],  harmony:'analogous'     },
  orange:     { hues:[[18,42]],                   sat:[65,98],  lit:[38,68],  harmony:'analogous'     },
  yellow:     { hues:[[45,65]],                   sat:[58,95],  lit:[48,80],  harmony:'analogous'     },
  green:      { hues:[[100,148]],                 sat:[35,85],  lit:[22,65],  harmony:'analogous'     },
  blue:       { hues:[[205,248]],                 sat:[40,90],  lit:[22,65],  harmony:'analogous'     },
  purple:     { hues:[[265,302]],                 sat:[35,82],  lit:[18,60],  harmony:'analogous'     },
  pink:       { hues:[[318,352]],                 sat:[30,78],  lit:[45,82],  harmony:'analogous'     },
  teal:       { hues:[[162,192]],                 sat:[38,82],  lit:[22,60],  harmony:'analogous'     },
  cyan:       { hues:[[178,205]],                 sat:[45,88],  lit:[35,70],  harmony:'analogous'     },
  lime:       { hues:[[72,100]],                  sat:[55,95],  lit:[38,72],  harmony:'analogous'     },
  indigo:     { hues:[[238,268]],                 sat:[40,85],  lit:[14,50],  harmony:'analogous'     },
  magenta:    { hues:[[298,332]],                 sat:[50,92],  lit:[28,65],  harmony:'analogous'     },
  brown:      { hues:[[18,38]],                   sat:[32,68],  lit:[12,40],  harmony:'analogous'     },
  coral:      { hues:[[8,24]],                    sat:[55,88],  lit:[45,72],  harmony:'analogous'     },
  gold:       { hues:[[38,55]],                   sat:[62,95],  lit:[38,65],  harmony:'analogous'     },
  olive:      { hues:[[58,92]],                   sat:[22,58],  lit:[22,48],  harmony:'analogous'     },
  lavender:   { hues:[[252,282]],                 sat:[18,55],  lit:[55,84],  harmony:'analogous'     },
  peach:      { hues:[[12,32]],                   sat:[38,72],  lit:[62,84],  harmony:'analogous'     },
  turquoise:  { hues:[[168,192]],                 sat:[50,88],  lit:[35,65],  harmony:'analogous'     },
  amber:      { hues:[[28,50]],                   sat:[68,98],  lit:[38,65],  harmony:'analogous'     },
  burgundy:   { hues:[[338,360],[0,8]],           sat:[45,82],  lit:[12,36],  harmony:'analogous'     },
  navy:       { hues:[[212,242]],                 sat:[45,88],  lit:[6,32],   harmony:'analogous'     },
  rose:       { hues:[[335,358]],                 sat:[32,72],  lit:[38,72],  harmony:'analogous'     },
  // Neutrals — very low saturation, lightness drives the output
  black:      { hues:[[0,360]],                   sat:[0,10],   lit:[2,14],   harmony:'analogous'     },
  white:      { hues:[[0,360]],                   sat:[0,8],    lit:[88,100], harmony:'analogous'     },
  gray:       { hues:[[0,360]],                   sat:[0,12],   lit:[32,72],  harmony:'analogous'     },
  silver:     { hues:[[195,230]],                 sat:[3,16],   lit:[62,84],  harmony:'analogous'     },
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
function rand(min, max) { return min + Math.random() * (max - min) }
function pick(arr) { return arr[Math.floor(Math.random() * arr.length)] }
function clamp(v, min, max) { return Math.max(min, Math.min(max, v)) }

function hslToHex(h, s, l) {
  h = ((h % 360) + 360) % 360
  s = clamp(s, 0, 100) / 100
  l = clamp(l, 0, 100) / 100
  const a = s * Math.min(l, 1 - l)
  const f = (n) => {
    const k = (n + h / 30) % 12
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1)
    return Math.round(255 * color).toString(16).padStart(2, '0')
  }
  return `#${f(0)}${f(8)}${f(4)}`
}

// ---------------------------------------------------------------------------
// Color naming
// ---------------------------------------------------------------------------
const HUE_BASES = [
  { range:[0,   12], words:['Crimson','Scarlet','Ruby','Cherry','Cardinal']           },
  { range:[12,  30], words:['Vermillion','Rust','Coral','Brick','Terracotta']          },
  { range:[30,  50], words:['Amber','Tangerine','Apricot','Peach','Cinnamon']         },
  { range:[50,  70], words:['Gold','Honey','Mustard','Citron','Saffron']              },
  { range:[70, 110], words:['Lime','Chartreuse','Olive','Avocado','Fern']             },
  { range:[110,150], words:['Sage','Emerald','Forest','Jade','Pine','Basil']          },
  { range:[150,185], words:['Mint','Seafoam','Aqua','Teal','Patina','Verdigris']      },
  { range:[185,220], words:['Cerulean','Sky','Azure','Cornflower','Steel']            },
  { range:[220,255], words:['Cobalt','Navy','Indigo','Denim','Sapphire']              },
  { range:[255,285], words:['Violet','Iris','Wisteria','Amethyst','Lavender']         },
  { range:[285,320], words:['Plum','Mauve','Mulberry','Orchid','Heather']             },
  { range:[320,345], words:['Rose','Blush','Flamingo','Fuchsia','Magenta']            },
  { range:[345,360], words:['Wine','Raspberry','Berry','Carmine']                     },
]

const LIT_PREFIXES = [
  [88, ['Pale','Whisper','Ghost','Cloud','Powder']],
  [72, ['Light','Soft','Airy','Feather']],
  [55, ['','True','Clear','']],
  [38, ['Deep','Rich','Bold','Strong']],
  [22, ['Dark','Shadow','Smoked','Dusk']],
  [0,  ['Midnight','Abyss','Void','Obsidian']],
]

const SAT_SUFFIXES = [
  [10,  ['Ash','Smoke','Fog','Stone']],
  [26,  ['Dust','Haze','Mist','']],
  [52,  ['','','Shade','']],
  [78,  ['','Glow','Gleam','']],
  [101, ['Burst','Flash','Blaze','Zap']],
]

function nameColor(h, s, l) {
  h = ((h % 360) + 360) % 360
  if (s < 10) {
    if (l >= 88) return pick(['Pearl','Snow','Mist','Ivory','Chalk'])
    if (l >= 68) return pick(['Silver','Powder','Smoke','Haze'])
    if (l >= 45) return pick(['Ash','Stone','Pebble','Pewter'])
    if (l >= 25) return pick(['Slate','Flint','Cinder','Graphite'])
    return pick(['Charcoal','Obsidian','Onyx','Jet'])
  }
  const base = HUE_BASES.find(({ range }) => h >= range[0] && h < range[1])
  const baseName = base ? pick(base.words) : 'Hue'
  const litEntry = LIT_PREFIXES.find(([t]) => l >= t)
  const prefix = litEntry ? pick(litEntry[1]) : ''
  const satEntry = SAT_SUFFIXES.find(([t]) => s < t)
  const suffix = satEntry ? pick(satEntry[1]) : ''
  return [prefix, baseName, suffix].filter(Boolean).join(' ')
}

// ---------------------------------------------------------------------------
// DNA merging
// ---------------------------------------------------------------------------
function mergeDNA(selectedKeywords) {
  if (selectedKeywords.length === 0) {
    return { hues:[[0,360]], sat:[35,80], lit:[38,78], harmony:'varied' }
  }
  const dnas = selectedKeywords.map((k) => KEYWORD_DNA[k]).filter(Boolean)
  const allHues = dnas.flatMap((d) => d.hues)

  const avgRange = (key) => {
    const mins = dnas.map((d) => d[key][0])
    const maxs = dnas.map((d) => d[key][1])
    return [
      Math.round(mins.reduce((a,b) => a+b, 0) / mins.length),
      Math.round(maxs.reduce((a,b) => a+b, 0) / maxs.length),
    ]
  }

  const harmonies = dnas.map((d) => d.harmony)
  const unique = [...new Set(harmonies)]
  let harmony = unique[0]
  if (unique.length > 1) {
    if (unique.includes('varied'))            harmony = 'varied'
    else if (unique.includes('triadic'))      harmony = 'triadic'
    else if (unique.includes('complementary'))harmony = 'complementary'
    else if (unique.includes('analogous'))    harmony = 'analogous'
    else harmony = 'monochrome'
  }

  return { hues:allHues, sat:avgRange('sat'), lit:avgRange('lit'), harmony }
}

// ---------------------------------------------------------------------------
// Hue utilities
// ---------------------------------------------------------------------------
function pickHueFromRanges(hueRanges) {
  const range = hueRanges[Math.floor(Math.random() * hueRanges.length)]
  return rand(range[0], range[1])
}

function clampHueToRanges(hue, hueRanges) {
  const h = ((hue % 360) + 360) % 360
  if (hueRanges.some(([mn,mx]) => h >= mn && h < mx)) return h
  let best = h, bestDist = Infinity
  for (const [mn, mx] of hueRanges) {
    const mid = (mn + mx) / 2
    const d = Math.abs(((h - mid + 180 + 360) % 360) - 180)
    if (d < bestDist) { bestDist = d; best = mid + rand(-8, 8) }
  }
  return ((best % 360) + 360) % 360
}

// ---------------------------------------------------------------------------
// Harmonic hue generation
// ---------------------------------------------------------------------------
function generateHues(count, harmony, hueRanges) {
  const root = pickHueFromRanges(hueRanges)
  const hues = [root]

  if (harmony === 'monochrome') {
    // All hues stay within ±8° of root — true single-hue palette
    for (let i = 1; i < count; i++) {
      const offset = rand(-8, 8)
      hues.push(((root + offset) + 360) % 360)
    }
  } else if (harmony === 'analogous') {
    for (let i = 1; i < count; i++) {
      const sign = i % 2 === 0 ? 1 : -1
      const step = Math.ceil(i / 2) * rand(15, 32)
      hues.push(clampHueToRanges(root + sign * step, hueRanges))
    }
  } else if (harmony === 'complementary') {
    const comp = (root + 180) % 360
    for (let i = 1; i < count; i++) {
      const base = i % 2 === 0 ? root : comp
      hues.push(clampHueToRanges(base + rand(-18, 18), hueRanges))
    }
  } else if (harmony === 'triadic') {
    const t1 = (root + 120) % 360
    const t2 = (root + 240) % 360
    const bases = [root, t1, t2]
    for (let i = 1; i < count; i++) {
      hues.push(clampHueToRanges(bases[i % 3] + rand(-14, 14), hueRanges))
    }
  } else {
    for (let i = 1; i < count; i++) {
      let candidate, attempts = 0
      do {
        candidate = pickHueFromRanges(hueRanges)
        attempts++
      } while (
        attempts < 30 &&
        hues.some((h) => Math.abs(((candidate - h + 180 + 360) % 360) - 180) < 22)
      )
      hues.push(candidate)
    }
  }
  return hues
}

// ---------------------------------------------------------------------------
// Lightness distribution — ensures tonal spread across the palette
// ---------------------------------------------------------------------------
function distributeLightness(count, litRange) {
  const [mn, mx] = litRange
  const spread = mx - mn

  // Always place values across the full range so the palette has light & dark
  // Divide the range into `count` equal slots, pick randomly within each slot
  const slotSize = spread / count
  const values = Array.from({ length: count }, (_, i) => {
    const slotMin = mn + i * slotSize
    const slotMax = slotMin + slotSize
    return rand(slotMin, slotMax)
  })

  // Shuffle so lightness order doesn't match hue order
  for (let i = values.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [values[i], values[j]] = [values[j], values[i]]
  }
  return values
}

// ---------------------------------------------------------------------------
// Saturation distribution — ensures variety, not all the same flatness
// ---------------------------------------------------------------------------
function distributeSaturation(count, satRange) {
  const [mn, mx] = satRange
  const slotSize = (mx - mn) / count
  const values = Array.from({ length: count }, (_, i) => {
    const slotMin = mn + i * slotSize
    return rand(slotMin, slotMin + slotSize)
  })
  for (let i = values.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [values[i], values[j]] = [values[j], values[i]]
  }
  return values
}

// ---------------------------------------------------------------------------
// Use-case modifier
// ---------------------------------------------------------------------------
const USE_CASE_MOD = {
  any:      { s:1.00, l:1.00 },
  art:      { s:1.10, l:1.00 },
  web:      { s:0.88, l:1.06 },
  brand:    { s:1.05, l:0.94 },
  interior: { s:0.82, l:1.02 },
  fashion:  { s:1.00, l:1.00 },
  print:    { s:1.12, l:0.93 },
  game:     { s:1.18, l:1.00 },
  nature:   { s:0.85, l:1.04 },
  architecture: { s:0.82, l:1.02 },
}

// ---------------------------------------------------------------------------
// Contradiction pairs — keywords that conflict in color output
// Each pair is defined once; the lookup is made symmetric automatically.
// ---------------------------------------------------------------------------
const CONTRADICTION_PAIRS = [
  // Lightness opposites
  ['dark',    'bright'],    ['dark',    'pale'],       ['dark',    'pastel'],
  ['dark',    'creamy'],    ['dark',    'washed out'], ['dark',    'translucent'],
  ['dark',    'midday'],    ['dark',    'dawn'],
  ['bright',  'midnight'],  ['bright',  'gothic'],     ['bright',  'deep'],
  ['bright',  'moody'],     ['bright',  'mysterious'], ['bright',  'melancholy'],
  ['midnight','midday'],    ['midnight','dawn'],        ['midnight','pastel'],
  ['midnight','pale'],      ['midnight','creamy'],
  ['deep',    'pale'],      ['deep',    'pastel'],      ['deep',    'creamy'],
  ['deep',    'washed out'],['deep',    'translucent'],
  ['pale',    'rich'],      ['pale',    'gothic'],      ['pale',    'brutal'],

  // Saturation opposites
  ['vivid',   'muted'],     ['vivid',   'desaturated'], ['vivid',  'washed out'],
  ['vivid',   'faded'],     ['vivid',   'dusty'],       ['vivid',  'cloudy'],
  ['neon',    'muted'],     ['neon',    'desaturated'], ['neon',   'dusty'],
  ['neon',    'faded'],     ['neon',    'washed out'],  ['neon',   'vintage'],
  ['neon',    'earthy'],    ['neon',    'homemade'],
  ['muted',   'electric'],  ['muted',   'bold'],        ['muted',  'neon'],
  ['minimal', 'maximalist'],['minimal', 'chaotic'],     ['minimal','bold'],
  ['desaturated','electric'],

  // Temperature opposites
  ['warm',    'cool'],      ['warm',    'icy'],         ['warm',   'arctic'],
  ['fiery',   'icy'],       ['fiery',   'arctic'],      ['fiery',  'cool'],
  ['scorching','icy'],      ['scorching','arctic'],     ['scorching','cool'],
  ['humid',   'arctic'],    ['humid',   'icy'],

  // Aesthetic opposites
  ['gothic',     'pastel'],     ['gothic',     'coastal'],
  ['gothic',     'cottagecore'],['gothic',     'preppy'],
  ['gothic',     'hopeful'],    ['gothic',     'lovely'],
  ['brutal',     'soft'],       ['brutal',     'dreamy'],
  ['brutal',     'pastel'],     ['brutal',     'lovely'],
  ['brutal',     'whimsical'],  ['brutal',     'cottagecore'],
  ['cyberpunk',  'cottagecore'],['cyberpunk',  'earthy'],
  ['cyberpunk',  'homemade'],   ['cyberpunk',  'natural'],
  ['brutalist',  'cottagecore'],['brutalist',  'floral'],
  ['brutalist',  'pastel'],     ['brutalist',  'whimsical'],
  ['steampunk',  'neon'],       ['steampunk',  'minimal'],
  ['chaotic',    'calm'],       ['chaotic',    'rigid'],
  ['chaotic',    'elegant'],    ['chaotic',    'serious'],
  ['calm',       'electric'],   ['calm',       'restless'],
  ['calm',       'tense'],

  // Time of day opposites
  ['midnight',   'golden hour'],['midnight',  'midday'],
  ['midday',     'dusk'],       ['dawn',      'dusk'],

  // New quality keyword conflicts
  ['monochrome',    'duotone'],    ['monochrome',    'varied'],
  ['monochrome',    'funky'],      ['monochrome',    'maximalist'],
  ['high contrast', 'muted'],      ['high contrast', 'soft'],
  ['high contrast', 'low contrast'],
  ['inky',          'pale'],       ['inky',          'chalky'],
  ['inky',          'washed out'], ['inky',          'creamy'],
  ['chalky',        'inky'],       ['chalky',        'vivid'],
  ['chalky',        'rich'],       ['chalky',        'neon'],

  // Neutral color opposites
  ['black',  'white'],      ['black',  'pale'],       ['black',  'bright'],
  ['black',  'pastel'],     ['black',  'creamy'],     ['black',  'vivid'],
  ['black',  'neon'],       ['black',  'silver'],     ['black',  'lavender'],
  ['white',  'dark'],       ['white',  'midnight'],   ['white',  'gothic'],
  ['white',  'deep'],       ['white',  'brutal'],     ['white',  'navy'],
  ['white',  'black'],      ['white',  'burgundy'],   ['white',  'brown'],
  ['gray',   'vivid'],      ['gray',   'neon'],        ['gray',  'electric'],
  ['silver', 'dark'],       ['silver', 'black'],       ['silver','gothic'],
]

// Build symmetric lookup: keyword → Set of keywords it contradicts
const CONTRADICTION_MAP = new Map()
for (const [a, b] of CONTRADICTION_PAIRS) {
  if (!CONTRADICTION_MAP.has(a)) CONTRADICTION_MAP.set(a, new Set())
  if (!CONTRADICTION_MAP.has(b)) CONTRADICTION_MAP.set(b, new Set())
  CONTRADICTION_MAP.get(a).add(b)
  CONTRADICTION_MAP.get(b).add(a)
}

export function getContradictedKeywords(selectedKeywords) {
  const contradicted = new Set()
  for (const selected of selectedKeywords) {
    const conflicts = CONTRADICTION_MAP.get(selected)
    if (conflicts) {
      for (const c of conflicts) {
        if (!selectedKeywords.includes(c)) contradicted.add(c)
      }
    }
  }
  return contradicted
}

// ---------------------------------------------------------------------------
// Main export
// ---------------------------------------------------------------------------
export function generatePalette(selectedKeywords, count, useCaseId = 'any') {
  const dna = mergeDNA(selectedKeywords)
  const mod = USE_CASE_MOD[useCaseId] || USE_CASE_MOD.any
  const hues = generateHues(count, dna.harmony, dna.hues)

  // Distributed lightness and saturation for guaranteed tonal spread
  const litValues = distributeLightness(count, dna.lit)
  const satValues = distributeSaturation(count, dna.sat)

  return hues.map((h, i) => {
    const s = clamp(satValues[i] * mod.s + rand(-3, 3), 0, 100)
    const l = clamp(litValues[i] * mod.l + rand(-3, 3), 0, 100)
    return { hex: hslToHex(h, s, l), name: nameColor(h, s, l) }
  })
}
