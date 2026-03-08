import { useState } from "react";
import { tarotData } from "./tarotData";

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg: #2c2b29;
    --card-bg: #3a3835;
    --gold: #c8882a;
    --gold-light: #e0a040;
    --text: #e8e0d4;
    --muted: #7a756e;
    --white: #f5f2eee0;
  }

  html, body {
    height: 100%;
    background: var(--bg);
    font-family: 'Libre Baskerville', Georgia, serif;
    color: var(--text);
    overscroll-behavior: none;
  }

  body {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    min-height: 100vh;
    padding: 0;
  }

  .app {
    width: 100%;
    max-width: 420px;
    min-height: 100vh;
    background: var(--bg);
    display: flex;
    flex-direction: column;
    align-items: stretch;
    padding: 48px 28px 40px;
    position: relative;
    overflow-y: auto;
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
  }
  .t-header-right {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .t-header-title {
    font-family: 'Press Start 2P', monospace;
    font-size: 10px;
    color: var(--gold);
    letter-spacing: 2px;
  }
  .t-spread-btn {
    font-family: 'Press Start 2P', monospace;
    font-size: 8px;
    color: var(--muted);
    background: none;
    border: 1px solid var(--muted);
    border-radius: 20px;
    padding: 6px 10px;
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
    background: #1a1917;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #3a3834;
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
    border: 4px solid rgba(200,136,42,0.4);
    border-radius: 6px;
  }
  .t-card-back-symbol {
    font-size: 22px;
    opacity: 0.5;
    filter: sepia(1) hue-rotate(10deg);
    letter-spacing: 10px;
  }
  .t-card-back-title {
    font-family: 'Press Start 2P', monospace;
    font-size: 9px;
    color: rgba(200,136,42,0.6);
    letter-spacing: 4px;
    text-align: center;
    line-height: 2.2;
  }
  .t-card-back-divider {
    width: 35%;
    height: 0px;
    background: rgba(200,136,42,0.3);
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
    justify-content: flex-start;
    gap: 16px;
    width: 100%;
    margin-top: 0px;
  }
  .t-card-front-number {
    font-family: 'Press Start 2P', monospace;
    font-size: 10px;
    color: var(--gold);
    letter-spacing: 2px;
    margin-bottom: 0px;
  }
  .t-card-front-name {
    font-family: 'Press Start 2P', monospace;
    font-size: 13px;
    color: #1a1917;
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
    font-size: 62px;
    filter: saturate(0.4) brightness(1);
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
    color: #1a1917;
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
  .t-spread-tab {
    flex: 1;
    padding: 8px 4px;
    border: none;
    border-radius: 8px;
    background: transparent;
    font-family: 'Press Start 2P', monospace;
    font-size: 8px;
    letter-spacing: 2px;
    color: var(--muted);
    cursor: pointer;
    transition: all 0.2s;
    border-bottom: 2px solid transparent;
  }
  .t-spread-tab.active {
    color: var(--gold);
    border-bottom-color: var(--gold);
    background: rgba(200,136,42,0.08);
  }


  .t-arcana-toggle {
    font-family: 'Press Start 2P', monospace;
    font-size: 8px;
    color: var(--muted);
    background: none;
    border: 1px solid var(--muted);
    border-radius: 20px;
    padding: 6px 10px;
    cursor: pointer;
    letter-spacing: 1px;
    transition: color 0.2s, border-color 0.2s;
  }
  .t-arcana-toggle.active { color: var(--muted); border-color: var(--muted); opacity: 1; }
  .t-arcana-toggle:not(.active) { opacity: 0.35; }
`;

const SPREAD_LABELS = ["PAST", "PRESENT", "FUTURE"];

export default function TarotApp() {
  const [majorActive, setMajorActive] = useState(true);
  const [minorActive, setMinorActive] = useState(true);
  const [spreadMode, setSpreadMode] = useState(false);
  const [drawnCards, setDrawnCards] = useState([]);
  const [activeIdx, setActiveIdx] = useState(0);
  const [flipped, setFlipped] = useState([]);

  const getPool = () => {
    let pool = [];
    if (majorActive) pool = [...pool, ...tarotData.major];
    if (minorActive) pool = [...pool, ...tarotData.minor];
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
    if (isFlipped) {
      setDrawnCards([]);
      setFlipped([]);
      setActiveIdx(0);
    } else {
      if (!hasCards) {
        const pool = getPool();
        if (!pool.length) return;
        const count = spreadMode ? 3 : 1;
        const shuffled = cryptoShuffle(pool);
        const cards = shuffled.slice(0, count).map(c => ({ ...c, isReversed: cryptoBool(0.28) }));
        setDrawnCards(cards);
        setFlipped([0]);
        setActiveIdx(0);
      } else {
        flipCard(activeIdx);
      }
    }
  };

  const activeCard = drawnCards[activeIdx];
  const isFlipped = flipped.includes(activeIdx);
  const hasCards = drawnCards.length > 0;

  const suitCode = { DISKS: "d", SWORDS: "s", WANDS: "w", CUPS: "c" };
  const rankCode = { ACE: "ACE ", TWO: "2", THREE: "3", FOUR: "4", FIVE: "5", SIX: "6", SEVEN: "7", EIGHT: "8", NINE: "9", TEN: "10", PAGE: "P", KNIGHT: "KNI ", QUEEN: "Q", KING: "KIN" };
  const getShortcode = (card) => {
    if (!card.suit) return `— ${card.number} —`;
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
          <span className="t-header-title">Mercurio's</span>
          <div className="t-header-right">
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
              onClick={() => setSpreadMode(v => !v)}
            >
              {spreadMode ? "3 CARDS" : "1 CARD"}
            </button>
          </div>
        </div>

        {/* Spread tabs */}
        {spreadMode && hasCards && (
          <div className="t-spread-row">
            {SPREAD_LABELS.map((label, i) => (
              <button
                key={i}
                className={`t-spread-tab${activeIdx === i ? " active" : ""}`}
                onClick={() => setActiveIdx(i)}
              >
                {label}
              </button>
            ))}
          </div>
        )}

        {/* Card */}
        <div className="t-card-scene" onClick={handleCardClick}>
          <div className={`t-card-flipper${isFlipped ? " flipped" : ""}`}>
            {/* Back */}
            <div className="t-card-face t-card-back">
              <div className="t-card-back-art">
                <div className="t-card-back-symbol">✦</div>
                <div className="t-card-back-divider" />
                <div className="t-card-back-title">DRAW<br/>TARO</div>
                <div className="t-card-back-divider" />
                <div className="t-card-back-symbol">✦</div>
              </div>
            </div>
            {/* Front */}
            <div className="t-card-face t-card-front">
              {activeCard && <>
                <div className="t-card-reversed-indicator">
                  {activeCard.isReversed ? "R" : ""}
                </div>
                <div className="t-card-front-body">
                  <div className="t-card-front-number">{getShortcode(activeCard)}</div>
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
            : "The cards speak in symbols and silence — trust what stirs within you when the image is revealed."}
        </div>

      </div>
    </>
  );
}
