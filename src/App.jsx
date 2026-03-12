import { useState } from "react";
import { tarotData } from "./tarotData";

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
    font-size: 10px;
    color: var(--gold);
    letter-spacing: 2px;
    flex-shrink: 1;
    min-width: 0;
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
    border-radius: 20px;
    padding: 6px 10px;
    cursor: pointer;
    letter-spacing: 1px;
    transition: color 0.2s, border-color 0.2s;
  }
  .t-arcana-toggle.active { color: var(--muted); border-color: var(--muted); opacity: 1; }
  .t-arcana-toggle:not(.active) { opacity: 0.35; }

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
    bottom: max(env(safe-area-inset-bottom), 66px);
    left: 50%;
    transform: translateX(-50%);
    font-family: 'Press Start 2P', monospace;
    font-size: 9px;
    letter-spacing: 2px;
    color: var(--gold);
    background: var(--bg);
    border: 1px solid var(--gold);
    border-radius: 30px;
    padding: 14px 32px;
    cursor: pointer;
    z-index: 100;
    opacity: 0.9;
    transition: opacity 0.2s;
  }
  .t-draw-btn:active { opacity: 0.6; }
`;

const SPREAD_LABELS = ["PAST", "PRESENT", "FUTURE"];


export default function TarotApp() {
  const [majorActive, setMajorActive] = useState(true);
  const [minorActive, setMinorActive] = useState(true);
  const [spreadMode, setSpreadMode] = useState(false);
  const [drawnCards, setDrawnCards] = useState([]);
  const [activeIdx, setActiveIdx] = useState(0);
  const [flipped, setFlipped] = useState([]);
  const [contentVisible, setContentVisible] = useState(true);
  const [summaryView, setSummaryView] = useState(true);

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
      setSummaryView(true);
    } else {
      if (!hasCards) {
        const pool = getPool();
        if (!pool.length) return;
        const count = spreadMode ? 3 : 1;
        const shuffled = cryptoShuffle(pool);
        const cards = shuffled.slice(0, count).map(c => ({ ...c, isReversed: cryptoBool(0.28) }));
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
              className={`t-arcana-toggle${majorActive ? " active" : ""}`}
              onClick={() => { if (minorActive || !majorActive) setMajorActive(v => !v); }}
            >MAJ</button>
            <button
              className={`t-arcana-toggle${minorActive ? " active" : ""}`}
              onClick={() => { if (majorActive || !minorActive) setMinorActive(v => !v); }}
            >MIN</button>
            <button
              className={`t-spread-btn${spreadMode ? " active-spread" : ""}`}
              onClick={() => { setContentVisible(false); setTimeout(() => { setSpreadMode(v => !v); setDrawnCards([]); setFlipped([]); setActiveIdx(0); setSummaryView(true); setContentVisible(true); }, 200); }}
            >
              {spreadMode ? "3 CARDS" : "1 CARD"}
            </button>
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
    </>
  );
}
