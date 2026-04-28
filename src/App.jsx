import { useState, useRef } from "react";
import { tarotData, suitEmoji, suitFlipEmoji } from "./tarotData";

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  #root { display: flex; justify-content: center; width: 100%; }

  :root {
    --bg: #2c2b29;
    --card-bg: #3a3835;
    --gold: #c8882a;
    --gold-light: #e0a040;
    --text: #e8e0d4;
    --muted: #7a756e;
    --white: #f5f2eee0;
    --dark: #2c2b29;
  }

  html {
    background: var(--bg);
    font-family: 'Libre Baskerville', Georgia, serif;
    color: var(--text);
    overscroll-behavior: none;
  }

  body {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    min-height: 100dvh;
    margin: 0;
    padding: 0;
    background: var(--bg);
    overscroll-behavior: none;
  }

  .app {
    width: 100%;
    max-width: 420px;
    min-height: 100dvh;
    background: var(--bg);
    display: flex;
    flex-direction: column;
    align-items: stretch;
    padding: max(env(safe-area-inset-top), 20px) clamp(14px, 5vw, 28px) 120px;
    position: relative;
    overflow-x: hidden;
  }

  .app::before {
    content: '';
    position: fixed;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
    pointer-events: none;
    z-index: 0;
    opacity: 0.5;
  }

  .app > * { position: relative; z-index: 1; }

  .t-header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
    gap: 12px;
  }
  .t-header-right {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
  }
  .t-header-title {
    font-family: 'Press Start 2P', monospace;
    font-size: 12px;
    color: var(--gold);
    letter-spacing: 1px;
    flex-shrink: 1;
    min-width: 0;
  }
  .t-spread-btn {
    font-family: 'Press Start 2P', monospace;
    font-size: 8px;
    color: var(--muted);
    background: none;
    border: 1px solid var(--muted);
    border-radius: 10px;
    padding: 12px 6px;
    cursor: pointer;
    letter-spacing: 1px;
    transition: color 0.2s, border-color 0.2s;
  }
  .t-spread-btn.active-spread { color: var(--gold); border-color: var(--gold); }

  .t-card-scene {
    width: 100%;
    perspective: 1000px;
    margin: 0 auto 16px;
    cursor: pointer;
    flex-shrink: 0;
  }

  .t-card-flipper {
    width: 100%;
    height: 380px;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.35s cubic-bezier(0.4, 0.2, 0.2, 1);
  }
  @media (min-height: 800px) {
    .t-card-flipper { height: 430px; }
    .t-card-illustration { font-size: 72px; }
  }
  @media (min-height: 1000px) {
    .t-card-flipper { height: 480px; }
    .t-card-illustration { font-size: 80px; }
  }

  .t-card-flipper.flipped { transform: rotateY(180deg); }

  .t-card-face {
    position: absolute;
    inset: 0;
    border-radius: 18px;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    overflow: hidden;
  }

  .t-card-back {
    background: #4f4c46;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .t-card-back-art {
    width: 78%;
    height: 82%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 14px;
    border: 4px solid color-mix(in srgb, var(--gold) 60%, transparent);
    border-radius: 16px;
  }
  .t-card-back-symbol {
    font-size: 22px;
    color: var(--white);
    opacity: .7;
    letter-spacing: 10px;
  }
  .t-card-back-title {
    font-family: 'Press Start 2P', monospace;
    font-size: 12px;
    color: color-mix(in srgb, var(--gold) 80%, transparent);
    letter-spacing: 6px;
    text-align: center;
    line-height: 2.4;
  }
  .t-card-back-divider {
    width: 35%;
    height: 0px;
    background: color-mix(in srgb, var(--gold) 30%, transparent);
  }

  .t-card-front {
    background: var(--white);
    transform: rotateY(180deg);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 18px 20px 14px;
  }
  .t-card-front-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
    width: 100%;
    flex: 1;
    padding-bottom: 12%;
  }
  .t-card-front-number {
    font-family: 'Press Start 2P', monospace;
    font-size: 10px;
    color: var(--gold);
    letter-spacing: 2px;
  }
  .t-card-front-name {
    font-family: 'Press Start 2P', monospace;
    font-size: 13px;
    color: var(--dark);
    letter-spacing: 2px;
    text-align: center;
    line-height: 1.6;
  }
  .t-card-illustration {
    width: 47%;
    aspect-ratio: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 66px;
    filter: saturate(0.4);
    margin: 8px 0;
    transition: transform 0.3s;
  }
  .t-card-front-arcana {
    font-family: 'Press Start 2P', monospace;
    font-size: 8px;
    color: var(--gold);
    letter-spacing: 1px;
    opacity: 0.7;
    text-align: center;
  }
  .t-card-reversed-indicator {
    font-family: 'Press Start 2P', monospace;
    font-size: 10px;
    color: var(--dark);
    position: absolute;
    top: 14px;
    left: 16px;
    transform: scaleX(-1);
  }
  .t-card-front-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 7px;
    justify-content: center;
    width: 100%;
    margin-top: auto;
    padding-top: 6px;
  }
  .t-card-front-tag {
    font-family: 'Press Start 2P', monospace;
    font-size: 6.3px;
    letter-spacing: 2px;
    color: var(--muted);
    opacity: 0.6;
    text-transform: uppercase;
    padding: 4px 8px;
    border: 1px solid rgba(122,117,110,0.35);
    border-radius: 20px;
  }

  .t-card-desc {
    font-size: 15px;
    line-height: 1.75;
    color: var(--text);
    opacity: 0.7;
    text-align: justify;
    margin-bottom: 28px;
    width: 100%;
    font-family: 'Libre Baskerville', Georgia, serif;
  }

  .t-spread-row {
    display: flex;
    gap: 8px;
    width: 100%;
    margin-bottom: 16px;
  }
  .t-tab {
    padding: 8px 4px;
    border: 1px solid color-mix(in srgb, var(--muted) 30%, transparent);
    border-radius: 8px;
    background: color-mix(in srgb, var(--muted) 8%, transparent);
    font-family: 'Press Start 2P', monospace;
    font-size: 8px;
    letter-spacing: 2px;
    color: var(--muted);
    cursor: pointer;
    transition: all 0.2s;
  }
  .t-tab.active {
    color: var(--gold);
    border-color: var(--gold);
    background: color-mix(in srgb, var(--gold) 12%, transparent);
  }
  .t-spread-tab { flex: 1; }

  .t-arcana-toggle {
    font-family: 'Press Start 2P', monospace;
    font-size: 8px;
    color: var(--muted);
    background: none;
    border: 1px solid var(--muted);
    border-radius: 10px;
    padding: 12px 6px;
    cursor: pointer;
    letter-spacing: 1px;
    transition: color 0.2s, border-color 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .t-arcana-toggle.active { color: var(--muted); border-color: var(--muted); opacity: 1; }
  .t-arcana-toggle:not(.active) { opacity: 0.35; }

  .t-menu-btn {
    font-family: 'Press Start 2P', monospace;
    font-size: 8px;
    color: var(--muted);
    background: none;
    border: 1px solid var(--muted);
    border-radius: 10px;
    padding: 12px 10px;
    cursor: pointer;
    letter-spacing: 1px;
    transition: color 0.2s, border-color 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .t-menu-btn.open { color: var(--gold); border-color: var(--gold); }

  .t-picker-overlay {
    position: fixed;
    inset: 0;
    background: var(--bg);
    z-index: 300;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  .t-picker-header {
    padding: max(env(safe-area-inset-top), 20px) clamp(14px, 5vw, 28px) 14px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-shrink: 0;
    border-bottom: 1px solid rgba(122,117,110,0.2);
  }
  .t-picker-title {
    font-family: 'Press Start 2P', monospace;
    font-size: 9px;
    color: var(--gold);
    letter-spacing: 2px;
  }
  .t-picker-subtitle {
    font-family: 'Press Start 2P', monospace;
    font-size: 6px;
    color: var(--muted);
    letter-spacing: 1px;
    margin-top: 6px;
    opacity: 0.6;
  }
  .t-picker-close {
    font-family: 'Press Start 2P', monospace;
    font-size: 8px;
    color: var(--muted);
    background: none;
    border: 1px solid var(--muted);
    border-radius: 10px;
    padding: 10px 12px;
    cursor: pointer;
    flex-shrink: 0;
  }
  .t-picker-body {
    flex: 1;
    overflow-y: auto;
    padding: 0 clamp(14px, 5vw, 28px) 100px;
    -webkit-overflow-scrolling: touch;
  }
  .t-picker-section-label {
    font-family: 'Press Start 2P', monospace;
    font-size: 6px;
    color: var(--gold);
    letter-spacing: 3px;
    margin: 22px 0 10px;
    opacity: 0.55;
  }
  .t-picker-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6px;
  }
  .t-picker-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 12px 12px;
    border: 1px solid rgba(122,117,110,0.18);
    border-radius: 10px;
    background: none;
    cursor: pointer;
    transition: background 0.12s, border-color 0.12s;
    text-align: left;
    width: 100%;
  }
  .t-picker-item:active { background: rgba(200,136,42,0.08); }
  .t-picker-item.selected {
    border-color: var(--gold);
    background: color-mix(in srgb, var(--gold) 8%, transparent);
  }
  .t-picker-item-emoji { font-size: 20px; flex-shrink: 0; line-height: 1; }
  .t-picker-item-name {
    font-family: 'Press Start 2P', monospace;
    font-size: 6px;
    color: var(--text);
    letter-spacing: 0.5px;
    line-height: 1.9;
  }
  .t-picker-item-check {
    margin-left: auto;
    flex-shrink: 0;
    font-size: 9px;
    color: var(--gold);
  }

  .t-picker-suit-block { margin-bottom: 14px; }
  .t-picker-suit-header {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
  }
  .t-picker-suit-emoji { font-size: 16px; line-height: 1; }
  .t-picker-suit-name {
    font-family: 'Press Start 2P', monospace;
    font-size: 6px;
    color: var(--gold);
    letter-spacing: 2px;
    opacity: 0.7;
  }
  .t-picker-ranks {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
  }
  .t-picker-rank-chip {
    font-family: 'Press Start 2P', monospace;
    font-size: 6px;
    letter-spacing: 0.5px;
    color: var(--text);
    background: none;
    border: 1px solid rgba(122,117,110,0.22);
    border-radius: 8px;
    padding: 14px 13px;
    cursor: pointer;
    transition: background 0.12s, border-color 0.12s;
    line-height: 1;
    min-width: 44px;
    text-align: center;
  }
  .t-picker-rank-chip:active { background: rgba(200,136,42,0.1); }
  .t-picker-rank-chip.selected {
    border-color: var(--gold);
    color: var(--gold);
    background: color-mix(in srgb, var(--gold) 10%, transparent);
  }

  .t-picker-confirm {
    position: fixed;
    bottom: max(env(safe-area-inset-bottom), 66px);
    left: 50%;
    transform: translateX(-50%);
    font-family: 'Press Start 2P', monospace;
    font-size: 8px;
    letter-spacing: 2px;
    color: var(--dark);
    background: var(--gold);
    border: none;
    border-radius: 30px;
    padding: 20px 36px;
    cursor: pointer;
    z-index: 301;
    white-space: nowrap;
  }

  .t-menu-panel {
    position: absolute;
    top: 50%;
    right: calc(100% + 10px);
    transform: translateY(-50%);
    background: var(--bg);
    border: none;
    padding: 0;
    display: flex;
    flex-direction: row;
    gap: 8px;
    z-index: 200;
  }

  .t-summary-tab { width: 100%; margin-bottom: 16px; }

  .t-summary-view {
    display: flex;
    gap: 10px;
    width: 100%;
    align-items: flex-start;
    justify-content: center;
  }
  .t-summary-col {
    flex: 1 1 0;
    min-width: 0;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 8px;
  }
  .t-summary-label {
    font-family: 'Press Start 2P', monospace;
    font-size: 6px;
    letter-spacing: 2px;
    color: var(--gold);
    opacity: 0.6;
  }
  .t-summary-mini-wrap {
    width: 100%;
  }
  .t-summary-mini-wrap .t-card-scene {
    margin: 0;
    cursor: default;
    overflow: hidden;
  }
  .t-summary-mini-wrap .t-card-illustration { font-size: 39px; }
  .t-summary-mini-wrap .t-card-front { padding-left: 0; padding-right: 0; padding-top: 14px; }
  .t-summary-mini-wrap .t-card-front-name { font-size: 9px; line-height: 2; hyphens: auto; overflow-wrap: break-word; }
  .t-summary-mini-wrap .t-card-front-arcana { font-size: 8px; line-height: 1.8;}
  .t-summary-mini-wrap .t-card-front-number { font-size: 8px; text-align: center; }
  .t-summary-mini-wrap .t-card-front-body { gap: 10px; padding-bottom: 30%; padding-top: 40%; justify-content: space-between; }
  .t-summary-mini-wrap .t-card-front-tags { gap: 3px; overflow: hidden; height: 90px; align-items: flex-start; padding: 0px 6px; }
  .t-summary-mini-wrap .t-card-front-tag { font-size: 6px; padding: 2px 4px; letter-spacing: 0px; text-align: center; line-height: 1.4; white-space: nowrap; }
  .t-summary-mini-wrap .t-card-reversed-indicator { font-size: 8px; }
  .t-summary-mini-wrap .t-card-back { background: #4f4c46; }
  .t-summary-mini-wrap .t-card-back-art { gap: 6px; border: 2px solid color-mix(in srgb, var(--gold) 60%, transparent); border-radius: 10px; }
  .t-summary-mini-wrap .t-card-back-symbol { font-size: 10px; color: var(--white); opacity: 0.7; letter-spacing: 4px; }
  .t-summary-mini-wrap .t-card-back-title { font-size: 9px; color: color-mix(in srgb, var(--gold) 80%, transparent); letter-spacing: 2px; line-height: 2.4; }
  .t-summary-mini-wrap .t-card-back-divider { background: color-mix(in srgb, var(--gold) 30%, transparent); }
  .t-summary-mini-card {
    width: 100%;
    height: 380px;
    border-radius: 10px;
    background: var(--white);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 4px;
    position: relative;
    padding: 8px 6px 6px;
  }
  .t-summary-mini-r {
    font-family: 'Press Start 2P', monospace;
    font-size: 6px;
    color: var(--dark);
    position: absolute;
    top: 6px;
    left: 7px;
    transform: scaleX(-1);
  }
  .t-summary-mini-emoji {
    font-size: 34px;
    filter: saturate(0.4);
    line-height: 1;
    margin-bottom: 8px;
  }
  .t-summary-mini-shortcode {
    font-family: 'Press Start 2P', monospace;
    font-size: 5.5px;
    color: var(--gold);
    letter-spacing: 1px;
  }
  .t-summary-mini-name {
    font-family: 'Press Start 2P', monospace;
    font-size: 7px;
    color: var(--dark);
    text-align: center;
    line-height: 1.6;
    letter-spacing: 1px;
  }
  .t-summary-mini-arcana {
    font-family: 'Press Start 2P', monospace;
    font-size: 6px;
    color: var(--gold);
    opacity: 0.7;
    letter-spacing: 1px;
  }
  .t-summary-mini-body {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3px;
  }
  .t-summary-combo {
    font-family: 'Press Start 2P', monospace;
    font-size: 7px;
    color: var(--muted);
    letter-spacing: 1px;
    text-align: center;
    margin-bottom: 12px;
    opacity: 0.7;
  }
  .t-summary-desc {
    font-size: 11px;
    line-height: 1.6;
    color: var(--text);
    opacity: 0.65;
    text-align: justify;
    font-family: 'Libre Baskerville', Georgia, serif;
    width: 100%;
  }

  .t-draw-btn {
    position: fixed;
    width: 160px;
    bottom: max(env(safe-area-inset-bottom), 66px);
    left: 50%;
    transform: translateX(-50%);
    font-family: 'Press Start 2P', monospace;
    font-size: 10px;
    letter-spacing: 3px;
    color: var(--gold);
    background: var(--bg);
    border: 3px solid var(--gold);
    border-radius: 60px;
    padding: 32px 40px;
    cursor: pointer;
    z-index: 100;
    opacity: 0.9;
    transition: opacity 0.2s;
  }
  .t-draw-btn:active { opacity: 0.6; }
`;

const SPREAD_LABELS = ["PAST", "PRESENT", "FUTURE"];

const toRoman = (n) => {
  if (n === 0) return '0';
  const vals = [10, 9, 5, 4, 1];
  const syms = ['X', 'IX', 'V', 'IV', 'I'];
  let result = '', num = n;
  for (let i = 0; i < vals.length; i++) {
    while (num >= vals[i]) { result += syms[i]; num -= vals[i]; }
  }
  return result;
};

const MINOR_RANK_LABEL = {
  ACE: 'Ace', TWO: 'II', THREE: 'III', FOUR: 'IV', FIVE: 'V',
  SIX: 'VI', SEVEN: 'VII', EIGHT: 'VIII', NINE: 'IX', TEN: 'X',
  PAGE: 'Page', KNIGHT: 'Knight', QUEEN: 'Queen', KING: 'King'
};
const SUIT_LABEL = { CUPS: 'Cups', WANDS: 'Wands', SWORDS: 'Swords', DISKS: 'Disks' };

const getPickerLabel = (card) => {
  if (card.suit) {
    const rank = MINOR_RANK_LABEL[card.number] ?? card.number;
    const suit = SUIT_LABEL[card.suit] ?? card.suit;
    return `${rank} of ${suit}`;
  }
  return `${card.number} – ${card.name}`;
};

export default function TarotApp() {
  const [majorActive, setMajorActive] = useState(true);
  const [minorActive, setMinorActive] = useState(true);
  const [spreadMode, setSpreadMode] = useState(false);
  const [drawnCards, setDrawnCards] = useState([]);
  const [activeIdx, setActiveIdx] = useState(0);
  const [flipped, setFlipped] = useState([]);
  const [contentVisible, setContentVisible] = useState(true);
  const [summaryView, setSummaryView] = useState(true);
  const [reversalsEnabled, setReversalsEnabled] = useState(true);
  const lastClickRef = useRef(0);
  const [pickerOpen, setPickerOpen] = useState(false);
  const [pickerSelected, setPickerSelected] = useState([]);

  const getPool = () => {
    let pool = [];
    if (majorActive) pool = [...pool, ...tarotData.major];
    if (minorActive) pool = [...pool, ...tarotData.minor.map(c => ({
      ...c,
      emoji: suitEmoji[c.suit] || c.emoji,
      flipEmoji: suitFlipEmoji[c.suit] || false,
    }))];
    return pool;
  };

  const cryptoShuffle = (arr) => {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const rand = new Uint32Array(1);
      crypto.getRandomValues(rand);
      const j = rand[0] % (i + 1);
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  const cryptoBool = (threshold) => {
    const rand = new Uint32Array(1);
    crypto.getRandomValues(rand);
    return rand[0] / 0xFFFFFFFF < threshold;
  };

  const flipCard = (idx) => {
    if (flipped.includes(idx)) return;
    setActiveIdx(idx);
    setFlipped(prev => [...prev, idx]);
  };

  const handleCardClick = () => {
    const now = Date.now();
    if (now - lastClickRef.current < 500) return;
    lastClickRef.current = now;

    if (isFlipped) {
      setDrawnCards([]);
      setFlipped([]);
      setActiveIdx(0);
      setSummaryView(true);
    } else {
      if (!hasCards) {
        const pool = getPool();
        if (!pool.length) return;
        const count = spreadMode ? 3 : 1;
        const shuffled = cryptoShuffle(pool);
        const cards = shuffled.slice(0, count).map(c => ({ ...c, isReversed: reversalsEnabled && cryptoBool(0.28) }));
        setDrawnCards(cards);
        setFlipped(cards.map((_, i) => i));
        setActiveIdx(0);
      } else {
        flipCard(activeIdx);
      }
    }
  };

  const activeCard = drawnCards[activeIdx];
  const isFlipped = flipped.includes(activeIdx);
  const hasCards = drawnCards.length > 0;

  const pickerSections = [
    { label: 'MAJOR ARCANA', cards: tarotData.major },
    ...['CUPS', 'WANDS', 'SWORDS', 'DISKS'].map(suit => ({
      label: suit,
      cards: tarotData.minor
        .filter(c => c.suit === suit)
        .map(c => ({ ...c, emoji: suitEmoji[c.suit] || c.emoji, flipEmoji: suitFlipEmoji[c.suit] || false }))
    })).filter(s => s.cards.length > 0)
  ];

  const confirmPickerSelection = (cards) => {
    const selected = cards || pickerSelected;
    if (!selected.length) return;
    const finalCards = selected.map(c => ({ ...c, isReversed: reversalsEnabled && cryptoBool(0.28) }));
    setPickerOpen(false);
    setPickerSelected([]);
    setContentVisible(false);
    setTimeout(() => {
      setDrawnCards(finalCards);
      setFlipped(finalCards.map((_, i) => i));
      setActiveIdx(0);
      setSummaryView(true);
      setContentVisible(true);
    }, 200);
  };

  const togglePickerCard = (card) => {
    const maxSelect = spreadMode ? 3 : 1;
    const isSelected = pickerSelected.some(c => c.name === card.name);
    if (isSelected) {
      setPickerSelected(prev => prev.filter(c => c.name !== card.name));
    } else if (pickerSelected.length < maxSelect) {
      if (maxSelect === 1) {
        confirmPickerSelection([card]);
      } else {
        setPickerSelected(prev => [...prev, card]);
      }
    }
  };

  const suitCode = { DISKS: "d", SWORDS: "s", WANDS: "w", CUPS: "c" };
  const rankCode = { ACE: "ACE ", TWO: "2", THREE: "3", FOUR: "4", FIVE: "5", SIX: "6", SEVEN: "7", EIGHT: "8", NINE: "9", TEN: "10", PAGE: "P", KNIGHT: "KNI ", QUEEN: "Q", KING: "KIN" };
  const formatName = (name) =>
    name.split(' ').map((w, j) => (
      <span key={j} style={{ display: 'block' }}>
        {w.length > 7 ? w.slice(0, Math.ceil(w.length / 2)) + '\u00AD' + w.slice(Math.ceil(w.length / 2)) : w}
      </span>
    ));

  const getShortcode = (card) => {
    if (!card.suit) return `—${card.number}—`;
    const rank = rankCode[card.number] ?? card.number;
    const suit = suitCode[card.suit] ?? card.suit[0];
    const rev = card.isReversed ? "R" : "";
    return `${rank}${suit}${rev}`;
  };

  return (
    <>
      <style>{css}</style>
      <div className="app">
        {/* Header */}
        <div className="t-header">
          <button className="t-header-title" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }} onClick={() => { setDrawnCards([]); setFlipped([]); setActiveIdx(0); setSummaryView(true); }}>Mercurio's</button>
          <div className="t-header-right">
            <button
              className={`t-arcana-toggle${reversalsEnabled ? " active" : ""}`}
              onClick={() => setReversalsEnabled(v => !v)}
            >R</button>
            <button
              className={`t-arcana-toggle${majorActive ? " active" : ""}`}
              onClick={() => { if (minorActive || !majorActive) setMajorActive(v => !v); }}
            >MAJ</button>
            <button
              className={`t-arcana-toggle${minorActive ? " active" : ""}`}
              onClick={() => { if (majorActive || !minorActive) setMinorActive(v => !v); }}
            >MIN</button>
            <button
              className={`t-spread-btn${spreadMode ? " active-spread" : ""}`}
              style={{ height: '39px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              onClick={() => { setContentVisible(false); setTimeout(() => { setSpreadMode(v => !v); setDrawnCards([]); setFlipped([]); setActiveIdx(0); setSummaryView(true); setContentVisible(true); }, 200); }}
            >
              {spreadMode ? "3 CARDS" : "1 CARD"}
            </button>
            <button
              className="t-arcana-toggle"
              style={{ opacity: 1 }}
              onClick={() => { setPickerSelected([]); setPickerOpen(true); }}
            >X</button>
          </div>
        </div>

        {/* Spread tabs */}
        {spreadMode && (
          <>
            <div className="t-spread-row">
              {SPREAD_LABELS.map((label, i) => (
                <button
                  key={i}
                  className={`t-tab t-spread-tab${!summaryView && activeIdx === i ? " active" : ""}`}
                  onClick={() => { if (!summaryView && activeIdx === i) { setSummaryView(true); } else { setSummaryView(false); setActiveIdx(i); } }}
                >
                  {label}
                </button>
              ))}
            </div>
          </>
        )}

        {/* Summary view */}
        {summaryView && spreadMode ? (
          <div className="t-summary-view" onClick={handleCardClick} style={{ cursor: 'pointer', opacity: contentVisible ? 1 : 0, transform: contentVisible ? 'translateY(0)' : 'translateY(-30px)', transition: 'opacity 0.25s, transform 0.25s' }}>
            {[0, 1, 2].map((i) => {
              const card = drawnCards[i];
              return (
                <div key={i} className="t-summary-col">
                  <div className="t-summary-mini-wrap">
                    <div className="t-card-scene">
                      <div className={`t-card-flipper${card ? " flipped" : ""}`}>
                        <div className="t-card-face t-card-back">
                          <div className="t-card-back-art">
                            <div className="t-card-back-symbol">✦</div>
                            <div className="t-card-back-divider" />
                            <div className="t-card-back-title">DRAW<br/>TARO</div>
                            <div className="t-card-back-divider" />
                            <div className="t-card-back-symbol">✦</div>
                          </div>
                        </div>
                        <div className="t-card-face t-card-front">
                          {card ? <>
                            <div className="t-card-reversed-indicator">{card.isReversed ? "R" : ""}</div>
                            <div className="t-card-front-number" style={{ whiteSpace: 'nowrap' }}>{getShortcode(card)}</div>
                            <div className="t-card-front-body">
                              <div className="t-card-illustration" style={{ transform: (card.isReversed !== !!card.flipEmoji) ? "rotate(180deg)" : "none" }}>{card.emoji}</div>
                              <div className="t-card-front-name" style={{ hyphens: 'manual' }}>{formatName(card.name)}</div>
                              <div className="t-card-front-arcana">{card.suit ? <><span style={{display:'block'}}>MINOR</span><span style={{display:'block'}}>ARCANA</span></> : <><span style={{display:'block'}}>MAJOR</span><span style={{display:'block'}}>ARCANA</span></>}</div>
                            </div>
                            <div className="t-card-front-tags">
                              {card.tags.map(t => <span key={t} className="t-card-front-tag">{t.replace(/^#/, '')}</span>)}
                            </div>
                          </> : (
                            <div className="t-card-front-body">
                              <div style={{ fontSize: 22, opacity: 0.15, color: 'var(--dark)' }}>✦</div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  {card && (
                    <div className="t-summary-desc">
                      {card.isReversed ? card.reversedText : card.description}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <div style={{ opacity: contentVisible ? 1 : 0, transform: contentVisible ? 'translateY(0)' : 'translateY(30px)', transition: 'opacity 0.25s, transform 0.25s' }}>
            {/* Card */}
            <div className="t-card-scene" onClick={handleCardClick}>
              <div className={`t-card-flipper${isFlipped ? " flipped" : ""}`}>
                <div className="t-card-face t-card-back">
                  <div className="t-card-back-art">
                    <div className="t-card-back-symbol">✦</div>
                    <div className="t-card-back-divider" />
                    <div className="t-card-back-title">DRAW<br/>TARO</div>
                    <div className="t-card-back-divider" />
                    <div className="t-card-back-symbol">✦</div>
                  </div>
                </div>
                <div className="t-card-face t-card-front">
                  {activeCard && <>
                    <div className="t-card-reversed-indicator">
                      {activeCard.isReversed ? "R" : ""}
                    </div>
                    <div className="t-card-front-number">{getShortcode(activeCard)}</div>
                    <div className="t-card-front-body">
                      <div
                        className="t-card-illustration"
                        style={{ transform: (activeCard.isReversed !== !!activeCard.flipEmoji) ? "rotate(180deg)" : "none" }}
                      >
                        {activeCard.emoji}
                      </div>
                      <div className="t-card-front-name">{activeCard.name}</div>
                      <div className="t-card-front-arcana">
                        {activeCard.suit ? "MINOR ARCANA" : "MAJOR ARCANA"}
                      </div>
                    </div>
                    <div className="t-card-front-tags">
                      {activeCard.tags.map(t => (
                        <span key={t} className="t-card-front-tag">{t.replace(/^#/, '')}</span>
                      ))}
                    </div>
                  </>}
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="t-card-desc">
              {activeCard && isFlipped
                ? (activeCard.isReversed ? activeCard.reversedText : activeCard.description)
                : <span style={{ opacity: 0 }}>{"The cards speak in symbols and silence — trust what stirs within you when the image is revealed."}</span>}
            </div>
          </div>
        )}

      </div>

      {/* Draw button — fixed at thumb level */}
      <button className="t-draw-btn" onClick={handleCardClick}>
        {isFlipped ? "RESET" : hasCards ? "REVEAL" : "DRAW"}
      </button>

      {/* Card picker overlay */}
      {pickerOpen && (
        <div className="t-picker-overlay">
          <div className="t-picker-header">
            <div>
              <div className="t-picker-title">PICK A CARD</div>
              {spreadMode && (
                <div className="t-picker-subtitle">
                  {pickerSelected.length}/3 SELECTED
                </div>
              )}
            </div>
            <button className="t-picker-close" onClick={() => setPickerOpen(false)}>✕</button>
          </div>
          <div className="t-picker-body">
            {pickerSections.map(section => (
              <div key={section.label}>
                <div className="t-picker-section-label">{section.label}</div>
                {section.label === 'MAJOR ARCANA' ? (
                  <div className="t-picker-grid">
                    {section.cards.map(card => {
                      const selected = pickerSelected.some(c => c.name === card.name);
                      return (
                        <button
                          key={card.name}
                          className={`t-picker-item${selected ? ' selected' : ''}`}
                          onClick={() => togglePickerCard(card)}
                        >
                          <span className="t-picker-item-emoji">{card.emoji}</span>
                          <span className="t-picker-item-name">{getPickerLabel(card)}</span>
                          {selected && <span className="t-picker-item-check">✦</span>}
                        </button>
                      );
                    })}
                  </div>
                ) : (
                  <div className="t-picker-suit-block">
                    <div className="t-picker-suit-header">
                      <span className="t-picker-suit-emoji">{section.cards[0]?.emoji}</span>
                      <span className="t-picker-suit-name">{SUIT_LABEL[section.label] ?? section.label}:</span>
                    </div>
                    <div className="t-picker-ranks">
                      {section.cards.map(card => {
                        const selected = pickerSelected.some(c => c.name === card.name);
                        const chip = MINOR_RANK_LABEL[card.number] ?? card.number;
                        return (
                          <button
                            key={card.name}
                            className={`t-picker-rank-chip${selected ? ' selected' : ''}`}
                            onClick={() => togglePickerCard(card)}
                          >
                            {chip}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          {spreadMode && pickerSelected.length > 0 && (
            <button className="t-picker-confirm" onClick={() => confirmPickerSelection()}>
              CONFIRM {pickerSelected.length} {pickerSelected.length === 1 ? 'CARD' : 'CARDS'}
            </button>
          )}
        </div>
      )}
    </>
  );
}