export const suitEmoji: Record<string, string> = {
  WANDS: "🪵",
  CUPS: "🏆",
  SWORDS: "🗡️",
  DISKS: "🪙", 
};

export const suitFlipEmoji: Record<string, boolean> = {
  SWORDS: true,
};

export const tarotData = {
  major: [
    {
      id: 0, number: "0", name: "THE FOOL", emoji: "🃏", color: "#C8922A",
      tags: ["#beginnings", "#innocence", "#spirit", "#freedom", "#instinct"],
      description: "The Fool is the symbol of true innocence, a perfect state of joy and freedom — the sure feeling of being one with the spirit of life. He represents the unwritten page, the open road, the leap before the look. The Fool carries with him the courage to trust life itself, walking the edge of the cliff with a light step and a lighter heart. When times are hard and the pressure to 'be reasonable' weighs heavy, the Fool reminds us that our inner person knows best. Always trust your instincts. The spirit that animates you knows the way, even when the mind cannot yet see it.",
      reversedText: "The shadow of the Fool is recklessness without wisdom — leaping without any awareness of the ground below. Here innocence curdles into naivety, and freedom becomes avoidance of responsibility. The energy is present but directionless, scattered like sparks that never catch flame. Examine what you are running from rather than toward."
    },
    {
      id: 1, number: "I", name: "THE MAGICIAN", emoji: "✨", color: "#A855F7",
      tags: ["#willpower", "#manifestation", "#consciousness", "#creation", "#skill"],
      description: "The Magician represents consciousness, action, and creation — the symbol of the idea of manifestation. He tells us that a power is ready to use as soon as it is recognized. All the tools are laid before him: wand, cup, sword, disk — fire, water, air, earth — and he holds the will to unite them into something new. The Magician is the moment of understanding that you have everything you need. The only act remaining is to see the path clearly and walk it with intention. What the mind conceives and the will directs, the hands can create.",
      reversedText: "The negative side of the Magician is blocked energy — feeling the power within but being unable to channel it. This can manifest as fear, restlessness, even the dread of one's own potential. Energy that finds no outlet builds pressure. There may also be an abuse of power here: manipulation, misdirection, using skill in service of ego rather than truth."
    },
    {
      id: 2, number: "II", name: "HIGH PRIESTESS", emoji: "🌙", color: "#3B82F6",
      tags: ["#intuition", "#mystery", "#wisdom", "#subconscious", "#silence"],
      description: "The High Priestess is the keeper of hidden knowledge, sitting between the pillars of duality with the scroll of wisdom in her hands. She does not speak — she knows. She represents the deepest layers of the subconscious, the sacred feminine principle, the reservoir of all that cannot be said but only felt. She is the pause between thoughts, the knowing beneath knowledge. When she appears, the invitation is to go inward. The answers you seek will not be found in books or in the words of others — they live in the silence between your heartbeats.",
      reversedText: "When reversed, the High Priestess suggests a disconnection from inner knowing — too much noise, too much reliance on the external world. Secrets may be withheld, intuition suppressed, or the deeper self neglected in favour of surface appearances. What are you refusing to acknowledge?"
    },
    {
      id: 3, number: "III", name: "THE EMPRESS", emoji: "🌿", color: "#22C55E",
      tags: ["#abundance", "#nature", "#fertility", "#creativity", "#nurturing"],
      description: "The Empress is fertility, growth, and the overflowing abundance of nature. She is the great mother principle — creative, sensual, nurturing — the embodiment of life in its most generous form. She presides over the garden of existence and invites you to tend to it with love. The Empress speaks of creative power made manifest: art, birth, harvest, beauty. She reminds us that creation requires patience and presence, that all good things grow in their own time. Honour your body, honour the earth, and trust the process of becoming.",
      reversedText: "A reversed Empress may indicate creative blockage, over-dependence on others for nourishment, or a smothering energy that stifles rather than supports. The garden has been neglected, or perhaps over-tended. What needs space to grow on its own?"
    },
    {
      id: 4, number: "IV", name: "THE EMPEROR", emoji: "👑", color: "#EF4444",
      tags: ["#authority", "#structure", "#power", "#stability", "#father"],
      description: "The Emperor brings order to chaos. He is the builder, the lawmaker, the father archetype — the principle of structure and control applied to the raw material of existence. Where the Empress grows, the Emperor constructs. He represents the stable foundation upon which civilization rests: discipline, reason, protection. His strength comes not from force but from the clarity of his vision and his unwavering commitment to it. When the Emperor appears, consider where firm structure, clear boundaries, and disciplined action are called for in your life.",
      reversedText: "In shadow, the Emperor becomes tyrannical — rigidity dressed as strength, control masquerading as protection. His reversed aspect warns of domination, inflexibility, and an inability to bend before breaking. Whose authority is being abused, and is it possibly your own?"
    },
    {
      id: 5, number: "V", name: "THE HIEROPHANT", emoji: "📿", color: "#F59E0B",
      tags: ["#tradition", "#wisdom", "#guidance", "#belief", "#ritual"],
      description: "The Hierophant is the bridge between the mortal and the divine, the keeper of sacred traditions and the interpreter of ancient wisdom. He represents the structures through which humanity has sought meaning: religion, philosophy, education, ceremony. When the Hierophant appears, he invites you to honour what has been passed down, to seek guidance from an established wisdom tradition, or to look for a teacher or mentor. There is profound power in the accumulated knowledge of generations — do not be too proud to receive it.",
      reversedText: "Reversed, the Hierophant may indicate a need to break free from inherited belief systems, to question the rules that no longer serve, or to find a personal spirituality beyond institutional walls. Freedom from dogma can be terrifying and liberating in equal measure."
    },
    {
      id: 6, number: "VI", name: "THE LOVERS", emoji: "🖤", color: "#EC4899",
      tags: ["#love", "#union", "#choice", "#values", "#alignment"],
      description: "The Lovers card is not only about romantic love — it is about the sacred union of opposites, the deep recognition of kinship, and above all the choices that arise from the heart. It represents the moment of alignment between inner values and outer action, the point where two paths become one. The Lovers invite you to examine what you truly value, who you truly are in relation to another, and what choices you are being called to make from a place of genuine love rather than fear, habit, or expectation.",
      reversedText: "Reversed Lovers speak of misalignment — between self and other, between head and heart, between what is said and what is felt. There may be difficulty making choices, a fear of commitment, or a values conflict that has been left unexamined. Where are you out of harmony with yourself?"
    },
    {
      id: 7, number: "VII", name: "THE CHARIOT", emoji: "🎠", color: "#06B6D4",
      tags: ["#victory", "#willpower", "#control", "#direction", "#drive"],
      description: "The Chariot charges forward powered by two opposing forces held in perfect tension. It speaks of triumph achieved through mastery of contradiction — the victory that comes not from eliminating inner conflict but from learning to drive it. The Charioteer does not suppress the darkness or deny the light; he harnesses both. This card speaks of determined forward movement, of will applied with discipline, of success earned through perseverance in the face of difficulty. Keep the reins firm and your eyes on the horizon.",
      reversedText: "A reversed Chariot signals loss of direction, scattered energy, or aggression turned inward. The forces that once propelled you forward are now pulling in opposite directions. What has disrupted your momentum, and what would it take to regain your centre?"
    },
    {
      id: 8, number: "VIII", name: "JUDGMENT", emoji: "⚖️", color: "#64748B",
      tags: ["#justice", "#balance", "#truth", "#cause", "#karma"],
      description: "Judgment — or Justice — is the principle of cosmic equilibrium, the understanding that every action carries consequence and that the universe moves inexorably toward balance. She holds the scales with perfect steadiness and the sword with perfect clarity. No deception escapes her measure. This card speaks of fairness, accountability, and the law of cause and effect operating at the deepest level. It is an invitation to align your actions with truth and to trust that what has been imbalanced will, in time, be corrected.",
      reversedText: "Reversed Judgment warns of injustice, dishonesty, or a refusal to accept the consequences of one's actions. The scales have been tipped deliberately or through negligence. What reckoning has been avoided, and at what cost?"
    },
    {
      id: 9, number: "IX", name: "THE HERMIT", emoji: "🪔", color: "#8B5CF6",
      tags: ["#solitude", "#introspection", "#inner light", "#guidance", "#wisdom"],
      description: "The Hermit stands alone on the mountain peak, holding his lantern aloft in the darkness. He is not lost — he is the one who chose to leave the warmth of the valley to seek a deeper warmth within. The Hermit represents the soul-searching journey, the deliberate withdrawal from the noise of the world in order to listen to what lies beneath it. His light is small but it is true. When this card appears, the call is inward: to solitude, to contemplation, to the slow work of understanding oneself. The answers you need can only be found in the silence you are willing to enter.",
      reversedText: "A reversed Hermit may indicate isolation that has become unhealthy, a refusal to re-emerge after a period of withdrawal, or a stubborn refusal to receive the guidance that others offer. The lamp has been turned away from the world — but also, perhaps, from oneself."
    },
    {
      id: 10, number: "X", name: "WHEEL OF FORTUNE", emoji: "🎡", color: "#FBBF24",
      tags: ["#cycles", "#fate", "#change", "#luck", "#turning point"],
      description: "The Wheel of Fortune turns without asking permission. It represents the cycles of existence — the rising and the falling, the expansion and the contraction, the seasons of fortune that come to all lives. This card reminds us that we are not the fixed point we imagine ourselves to be, but participants in a much larger movement. What rises will fall; what has fallen will rise again. The Wheel invites us to hold our circumstances lightly, to understand that all conditions are temporary, and to align ourselves with the turning rather than resist it.",
      reversedText: "Reversed, the Wheel warns of resistance to necessary change, of clinging to circumstances that have already begun to shift. There may be a sense of bad luck or of forces working against you — but the question to ask is whether you are fighting the current or flowing with it."
    },
    {
      id: 11, number: "XI", name: "STRENGTH", emoji: "🦁", color: "#F97316",
      tags: ["#passion", "#strength", "#courage", "#vitality", "#desire"],
      description: "Strength — or Lust in many traditions — depicts a figure of radiant power astride a lion, not taming it by force but by joy. This card speaks of the creative, vital, passionate force within life — the Kundalini energy, the fire of existence embraced rather than suppressed. True strength here is not the absence of wildness but the ability to ride it. The invitation is to engage fully with life's intensity, to bring your whole passionate self to what matters, to stop apologizing for the fire that burns in you.",
      reversedText: "In shadow, Strength can become compulsion, addiction, or raw force without wisdom. The lion is no longer ridden but ridden over. Where is passion bleeding into obsession, or vitality consuming itself?"
    },
    {
      id: 12, number: "XII", name: "THE HANGED MAN", emoji: "🕯️", color: "#faa560", flipEmoji: true,
      tags: ["#surrender", "#pause", "#new perspective", "#sacrifice", "#waiting"],
      description: "The Hanged Man has chosen his suspension willingly. He hangs upside down from the World Tree, and from this inverted vantage point, he sees everything differently. This card speaks of the transformative power of surrender — of giving up control, pausing the forward march, and allowing a new perspective to emerge through stillness. Something must be sacrificed for clarity to arrive. The Hanged Man is not a victim of circumstance; he is an initiate of wisdom, trading the comfort of the familiar for the revelation of the new.",
      reversedText: "Reversed, the Hanged Man suggests a refusal to surrender what needs to be released — clinging to a position, a relationship, or a belief that no longer serves. The pause is being resisted, and with it, the wisdom it carries. What are you unwilling to let go of?"
    },
    {
      id: 13, number: "XIII", name: "DEATH", emoji: "🌑", color: "#334155",
      tags: ["#transformation", "#endings", "#transition", "#change", "#rebirth"],
      description: "Death in the Tarot is not the end — it is the great transformer. It is the card of necessary ending, of the closing of one chapter so that another can begin, of the shedding of what has been outgrown. The skeleton rides forward and nothing stands unchanged in its path — but what remains after the transformation is what was always true. Death invites a radical honesty about what is already over, what is already gone, what has already ended even if we haven't acknowledged it yet. The grief is real. So is the new life waiting on the other side.",
      reversedText: "A reversed Death card often indicates a resistance to necessary change — the inability to let go, the clinging to what is already dead. Stagnation results not from fate but from refusal. What ending are you postponing?"
    },
    {
      id: 14, number: "XIV", name: "TEMPERANCE", emoji: "🌊", color: "#7C3AED",
      tags: ["#alchemy", "#balance", "#integration", "#harmony", "#synthesis"],
      description: "Temperance in many traditions — is the alchemical card, the principle of solve et coagula: dissolve and recombine. It represents the perfect mixture, the achieved balance between opposing forces, the harmony that emerges when contrasts are not suppressed but integrated. This card speaks of the slow, patient work of inner alchemy — the willingness to leave fixed positions, to step back and observe, and then to return and recombine on a higher level. Beauty and peace are not found by eliminating tension but by learning to dance with it.",
      reversedText: "Reversed, Temperance suggests imbalance or impatience with the alchemical process — rushing the work, forcing the mixture, refusing the necessary dissolution. What synthesis are you resisting because you are unwilling to let the old form dissolve first?"
    },
    {
      id: 15, number: "XV", name: "THE DEVIL", emoji: "🔗", color: "#DC2626",
      tags: ["#shadow", "#bondage", "#materialism", "#illusion", "#temptation"],
      description: "The Devil does not chain you against your will — the chains in this card are loose enough to slip free, worn by choice or by unconsciousness. He represents the shadow self, the parts of us we refuse to acknowledge, the material attachments and addictive patterns that masquerade as needs. He is also raw, vital, creative energy — Dionysian power that has no outlet but the destructive. The Devil invites an honest confrontation with what holds you in place: what beliefs, what fears, what pleasures have become invisible prisons?",
      reversedText: "Reversed, the Devil can indicate a release from bondage — the moment of recognizing and choosing to remove the chains. There may be a new independence, a breaking of an addiction or a pattern. But shadow work is never fully done."
    },
    {
      id: 16, number: "XVI", name: "THE TOWER", emoji: "⚡️", color: "#B45309",
      tags: ["#upheaval", "#revelation", "#collapse", "#liberation", "#sudden change"],
      description: "The Tower is struck by lightning and everything built on false foundations comes tumbling down. This card speaks of sudden, dramatic, unavoidable change — the collapse of structures that could not have held regardless. The Tower is terrifying in the moment and clarifying in retrospect. What falls was always going to fall. The lightning does not destroy what was true — it only destroys the illusion of stability that was built over it. In the rubble of the Tower lies the possibility of building something real.",
      reversedText: "A reversed Tower may indicate a disaster narrowly avoided, or alternatively, a refusal to acknowledge an inevitable collapse. The structure is crumbling but you are holding it up with sheer will. How long can you maintain what has already fallen?"
    },
    {
      id: 17, number: "XVII", name: "THE STAR", emoji: "⭐", color: "#0EA5E9",
      tags: ["#hope", "#renewal", "#serenity", "#faith", "#inspiration"],
      description: "After the violence of the Tower comes the quiet grace of the Star. She pours water from two vessels into the pool and onto the earth — giving without depleting, healing without effort, shining without straining. The Star is the card of hope renewed, of faith restored after devastation, of the soft certainty that the universe is fundamentally generous. She invites you to receive what is being offered, to trust the quiet voice that says things will be alright, to let beauty work on you without resistance.",
      reversedText: "Reversed, the Star suggests despair or the inability to receive hope — a closing of the heart to the possibility of renewal. There may be a deep disillusionment, a sense that the light has gone out. But the stars are still there even when clouds obscure them."
    },
    {
      id: 18, number: "XVIII", name: "THE MOON", emoji: "🌕", color: "#6366F1",
      tags: ["#illusion", "#dreams", "#subconscious", "#fear", "#mystery"],
      description: "The Moon illuminates without fully revealing. She rules the tidal pull of the unconscious, the realm of dreams, fears, and things not yet named. Under her light, the familiar becomes strange and shapes shift at the edges of perception. The Moon is the card of the psychic realm, of intuition operating beyond reason, of the deep waters of the self where strange things swim. She invites you to pay attention to your dreams, your fears, your irrational knowings — not to be ruled by them but to listen to what they carry.",
      reversedText: "A reversed Moon may indicate confusion, self-deception, or the refusal to look at what the unconscious is presenting. Alternatively, it can suggest that a period of confusion is ending and clarity is beginning to emerge — the tide turning."
    },
    {
      id: 19, number: "XIX", name: "THE SUN", emoji: "🌞", color: "#EAB308",
      tags: ["#joy", "#vitality", "#success", "#clarity", "#radiance"],
      description: "The Sun shines without reservation. This is the card of clear joy, of vital energy freely expressed, of the pleasure of existing in a body on a living earth. The Sun speaks of success achieved, of clarity that banishes shadow, of the simple and profound happiness of being alive and present. Children dance in the Sun's light without self-consciousness — this is the invitation. To be fully here, fully alive, fully warm. To let joy be uncomplicated for a moment. To shine.",
      reversedText: "A reversed Sun does not bring darkness — it dims the light. There may be temporary setbacks, a period of doubt, an inability to feel the warmth that is nevertheless present. The Sun will shine again. What is casting the shadow?"
    },
    {
      id: 20, number: "XX", name: "THE AEON", emoji: "🌌", color: "#F59E0B",
      tags: ["#judgement", "#awakening", "#reckoning", "#transformation", "#new era"],
      description: "The Aeon — Judgement in traditional decks — speaks of a great awakening, a cosmic reckoning, a moment of profound transformation that operates on a collective as well as personal level. It is the call that rises from the depths of the soul, summoning the self to a new understanding of who it is and why it is here. This is not the gentle nudge of ordinary change but the trumpet blast of revelation — the moment when the old self is seen clearly for what it is, and the new self steps forward to answer the call.",
      reversedText: "Reversed, the Aeon suggests a refusal to heed the call — a clinging to the old self and the old era even as everything signals that transformation is necessary and overdue. The awakening is delayed but not prevented."
    },
    {
      id: 21, number: "XXI", name: "THE WORLD", emoji: "🌍", color: "#8B5CF6",
      tags: ["#completion", "#wholeness", "#integration", "#cosmos", "#fulfillment"],
      description: "The World is the final trump, the card of completion, of the great work accomplished, of the soul arrived at wholeness after its long journey through all 22 stations of the Major Arcana. She dances at the centre of the cosmic oval, surrounded by the four elements in perfect balance — the individual life integrated into the larger life of the cosmos. This card speaks of fulfillment, of understanding achieved through experience, of the deep satisfaction of a cycle truly complete. And yet the dance continues — for completion is always also a beginning.",
      reversedText: "Reversed, the World may indicate a cycle not yet fully closed, loose ends that prevent the next chapter from beginning, or a near-completion that has stalled. What remains to be finished before you can truly begin again?"
    }
  ],
  minor: [
    // ── WANDS ──
    {
      id: 22, number: "ACE", name: "ACE OF WANDS", suit: "WANDS", color: "#FB923C",
      tags: ["#fire", "#inspiration", "#newventure", "#passion", "#potential"],
      description: "The Ace of Wands is the root of the power of fire — pure creative energy in its most concentrated and unshaped form. It is the spark before the flame, the vision before the work, the surge of inspiration that demands expression. When this card appears, something new and vital is being ignited. The invitation is to trust the fire: to begin, to create, to reach toward the vision that burns brightest within you without waiting for perfect conditions or complete certainty.",
      reversedText: "Reversed, the fire is present but blocked — a creative potential that cannot yet find its outlet. There may be delays, false starts, or an inability to commit to the first step. The flame needs air. What is suppressing the spark?"
    },
    {
      id: 26, number: "TWO", name: "TWO OF WANDS", suit: "WANDS", color: "#FB923C",
      tags: ["#dominion", "#willpower", "#creativity", "#courage", "#determination"],
      description: "The card represents the direction and focus given to raw creative energy. It embodies courage, determination, and the will to conquer in its drive aspect. Power and creativity channel the initial spark into purposeful action, though such intensity requires restraint to avoid collateral damage.",
      reversedText: "Destruction, shamelessness, revenge, and restlessness emerge when the card's forceful energy becomes uncontrolled or misdirected, manifesting as harmful rather than creative power."
    },
    {
      id: 27, number: "THREE", name: "THREE OF WANDS", suit: "WANDS", color: "#FB923C",
      tags: ["#virtue", "#accomplishment", "#confidence", "#nobility", "#leadership"],
      description: "The powerful fire understands its responsibility. Elemental forces are guided by understanding and awareness, creating ideal conditions to begin a work or project and go ahead with a plan. Accomplishment, confidence, harmony, pride, and nobility are its light aspects.",
      reversedText: "Moodiness, overestimation of abilities, conceit, rudeness, insolence, obstinacy, and treachery emerge as the distorted expression of the card's natural pride and confidence."
    },
    {
      id: 28, number: "FOUR", name: "FOUR OF WANDS", suit: "WANDS", color: "#FB923C",
      tags: ["#completion", "#reward", "#achievement", "#rest", "#maturity"],
      description: "Completion and accomplishment. Well earned rewards and rest after labor capture the positive aspects. The card symbolizes work completed successfully, plans that materialized, and spiritual maturation through life lessons.",
      reversedText: "Overestimation, torpidity, and loss of tranquility suggest stagnation where one may overestimate achievements or lose the peace that should accompany genuine completion."
    },
    {
      id: 29, number: "FIVE", name: "FIVE OF WANDS", suit: "WANDS", color: "#FB923C",
      tags: ["#strife", "#conflict", "#challenge", "#renewal", "#boldness"],
      description: "Challenge, the will to break out, contest, struggle, conflict, and rashness are the driving forces. Refreshment, renewal, and boldness emerge as the card signifies revolutionary movements where fire breaks through established structures to create necessary transformation.",
      reversedText: "Struggle, conflict, destruction, spiritual crisis, prodigality, and trickery reflect violent disruption and restless aggression — conflict that arises from boredom rather than purposeful change."
    },
    {
      id: 30, number: "SIX", name: "SIX OF WANDS", suit: "WANDS", color: "#FB923C",
      tags: ["#victory", "#triumph", "#success", "#fulfillment", "#overcoming"],
      description: "The crisis of the Five of Wands is overcome; the lesson was learned and turned into a victory. Creative fulfillment, satisfaction, triumph, and success through energy and industry reflect accomplishment earned through genuine effort and growth.",
      reversedText: "Vanity, reckless egoism, and insolence indicate when victory becomes corrupted by excessive pride and self-centeredness rather than balanced achievement."
    },
    {
      id: 31, number: "SEVEN", name: "SEVEN OF WANDS", suit: "WANDS", color: "#FB923C",
      tags: ["#valour", "#courage", "#perseverance", "#initiation", "#rebirth"],
      description: "A situation requiring courage against overwhelming odds, where one must face forces stronger than oneself and draw upon learned skills to persevere. The drive centers on courage, fighting spirit, and overcoming opposition, while the light aspect suggests initiation and rebirth.",
      reversedText: "Getting attacked and facing hardships represent the darker manifestation of this card's confrontational energy."
    },
    {
      id: 32, number: "EIGHT", name: "EIGHT OF WANDS", suit: "WANDS", color: "#FB923C",
      tags: ["#swiftness", "#progress", "#ideas", "#motion", "#development"],
      description: "Rapid progress and mental clarity. Sudden realizations and quick brainwaves indicate that solutions are imminent. Progression, ideas, creativity, motion, changes, and development emphasize the importance of swift decisive action and allowing the spirit freedom to operate at its best.",
      reversedText: "Rashness, thoughtlessness, rapacity, insolence, and jealousy warn against inefficiency. Excessive disputation and hesitation prevent progress, while moving too hastily creates chaos rather than beneficial outcomes."
    },
    {
      id: 33, number: "NINE", name: "NINE OF WANDS", suit: "WANDS", color: "#FB923C",
      tags: ["#strength", "#determination", "#discipline", "#resilience", "#victory"],
      description: "Strength, determination, and discipline preparing for the final step to completion. Reflects spiritual realization through the combination of consciousness with the unconscious — great success but with strife and energy; victory preceded by apprehension and fear.",
      reversedText: "Conflicts and contradictions warn that one must use spiritual consciousness to concentrate on inner strength and master the will to avoid the card's negative manifestations."
    },
    {
      id: 34, number: "TEN", name: "TEN OF WANDS", suit: "WANDS", color: "#FB923C",
      tags: ["#oppression", "#burden", "#force", "#overload", "#learning"],
      description: "Fire energy grounded in material reality becomes a blind and cruel force that no longer understands itself. The upright aspect offers the chance to think about it and learn — warning against forcing down natural vitality and creative energy.",
      reversedText: "Cruelty, excessive pressure, selfish and material ends, dogmatism, and aggression emphasize the destructive potential of unchecked force divorced from higher spiritual principles."
    },
    {
      id: 35, number: "PAGE", name: "PAGE OF WANDS", suit: "WANDS", color: "#FB923C",
      tags: ["#enthusiasm", "#courage", "#passion", "#joie-de-vivre", "#fire"],
      description: "The Princess of Wands embodies passion, joy of life, enthusiasm, courage, and beauty. She displays fiery, spontaneous energy and magnetic appeal — a quick-burning, enthusiastic spirit.",
      reversedText: "Greed, arrogance, poverty of true feelings, superficiality, theatrics, cruelty, instability, and domineering behavior emerge. She may lack genuine emotional warmth and become cold and cruel while remaining unaware of her own emptiness."
    },
    {
      id: 36, number: "KNIGHT", name: "KNIGHT OF WANDS", suit: "WANDS", color: "#FB923C",
      tags: ["#ambition", "#energy", "#passion", "#creativity", "#swiftness"],
      description: "The Prince of Wands embodies intellect combined with spiritual passion: energy, creativity, and passionate action with endless courage and tenacity. Swift, violent energy combined with generosity and impulsive determination.",
      reversedText: "Reckless destruction, cruelty, and sadism. Impatience escalates into instability, with constant restlessness seeking novelty but accomplishing nothing — intolerance, prejudice, and wasted potential."
    },
    {
      id: 37, number: "QUEEN", name: "QUEEN OF WANDS", suit: "WANDS", color: "#FB923C",
      tags: ["#independence", "#passion", "#charisma", "#honor", "#leadership"],
      description: "Independence, honor, spiritual visions, passion, and adaptability. The Queen combines emotional depth with fiery energy, embodying love, understanding, sympathy, pride, inspiration, and powerful independence with warmth and creative ability.",
      reversedText: "Intolerance, despotism, jealousy, and reckless passion. She becomes hot-tempered, revengeful fury, overdominant and possessive, holding grudges indefinitely while lacking tolerance and self-control."
    },
    {
      id: 38, number: "KING", name: "KING OF WANDS", suit: "WANDS", color: "#FB923C",
      tags: ["#leadership", "#inspiration", "#nobility", "#willpower", "#spirituality"],
      description: "The purest manifestation of fire — burning, enthusiastic, and thrilling. He embodies leadership, idealism, nobility, honesty, and intelligence, representing highest inspirations, spiritual realization, and purest creativity.",
      reversedText: "Despotism, egoism, and intolerance emerge when balance is lacking. Without depth, stability, or logic, strength degenerates to tyranny, convictions stiffen to dogmatism, and he can become cruel, bigoted, and brutal — fire consuming itself until nothing remains."
    },
    // ── CUPS ──
    {
      id: 39, number: "ACE", name: "ACE OF CUPS", suit: "CUPS", color: "#60A5FA",
      tags: ["#water", "#love", "#intuition", "#emotion", "#new feelings"],
      description: "The Ace of Cups is the root of the powers of water — pure emotional and intuitive energy offered as a gift. The cup overflows with divine grace; you need only extend your hands to receive it. A new love, a spiritual opening, a surge of creative or emotional inspiration is being offered in this moment. The invitation is to let yourself feel, to open to what is moving through you without needing to control or categorize it. Love is attempting to enter your life in some form.",
      reversedText: "Reversed, the cup has been turned or the water blocked. There may be emotional closure, a difficulty receiving love or care, or a creative dryness that signals the need to rest and replenish. The waters will flow again."
    },
    {
      id: 40, number: "TWO", name: "TWO OF CUPS", suit: "CUPS", color: "#60A5FA",
      tags: ["#love", "#harmony", "#friendship", "#unity", "#connection"],
      description: "Harmony, pleasure, mirth, love, friendship, and passion with a focus on polarized feelings directed toward a specific object. It embodies love and unity in difference as feelings become focused rather than all-embracing.",
      reversedText: "Dissipation, waste, silliness, and subtlety represent the negative expressions when the card's energy becomes unfocused or misapplied."
    },
    {
      id: 41, number: "THREE", name: "THREE OF CUPS", suit: "CUPS", color: "#60A5FA",
      tags: ["#abundance", "#joy", "#celebration", "#fulfillment", "#healing"],
      description: "Undirected love has found its goal and will grow and blossom. Joy and fulfillment in love and devotion along with good luck, satisfaction, and passive success. Key themes include pleasure, healing, sensuality, conception, and fulfillment.",
      reversedText: "Greed, raw lust, excessive pleasure, and over-abundance suggest an imbalance where positive qualities become excessive or problematic."
    },
    {
      id: 42, number: "FOUR", name: "FOUR OF CUPS", suit: "CUPS", color: "#60A5FA",
      tags: ["#luxury", "#stability", "#protection", "#contemplation", "#stagnation"],
      description: "Emotions are stabilized yet fixed, where the zenith is already crossed and worth is taken for granted. The presence of structure provides security but restricts emotional freedom. The drive is toward emotional richness and stability of feelings — love without risk.",
      reversedText: "Possessive love, restriction of others to satisfy oneself, and emotional emptiness emerge. Comfort becomes complacency and control replaces authentic connection."
    },
    {
      id: 43, number: "FIVE", name: "FIVE OF CUPS", suit: "CUPS", color: "#60A5FA",
      tags: ["#disappointment", "#loss", "#disillusionment", "#grief", "#growth"],
      description: "Emotional crisis and disillusionment — the loss of illusion and realization of deception that, while painful, becomes necessary for growth. Unconscious fears materialize, feelings deteriorate, and the soul feels empty but moves toward healing.",
      reversedText: "Bitterness, emptiness, treachery, deceit, and detraction represent the darker potential when the card's lessons remain unintegrated — becoming stuck in resentment rather than moving through disillusionment toward healing."
    },
    {
      id: 44, number: "SIX", name: "SIX OF CUPS", suit: "CUPS", color: "#60A5FA",
      tags: ["#pleasure", "#harmony", "#balance", "#nostalgia", "#healing"],
      description: "Deep emotions that have passed through pain and fear now enjoy balance and harmony through the return to inner sources. Emotional maturity and the reconciliation of opposites after overcoming previous challenges.",
      reversedText: "Mental standstill and being afraid to move to not lose current values — stagnation caused by fear of disrupting present contentment."
    },
    {
      id: 45, number: "SEVEN", name: "SEVEN OF CUPS", suit: "CUPS", color: "#60A5FA",
      tags: ["#debauch", "#illusion", "#fantasy", "#escapism", "#choices"],
      description: "The waters of delusion and clouds of intoxication where emotional turbulence stems from escapism and fantasy. In its positive aspect, it encourages recognizing false hopes and deceptions to ground oneself in reality rather than mistaking illusion for genuine achievement.",
      reversedText: "Being lost in illusions, drunkenness of mind, vanity, and wrath reflect the dangers of prolonged escapism, unfulfilled promises, and deceptive patterns in relationships."
    },
    {
      id: 46, number: "EIGHT", name: "EIGHT OF CUPS", suit: "CUPS", color: "#60A5FA",
      tags: ["#indolence", "#withdrawal", "#transition", "#leaving", "#transformation"],
      description: "A transition point where past indulgences have lost their appeal. The card calls for abandoning the past, leaving the current situation, and opening eyes to upcoming changes with honesty. A restlessness and searching without lasting fulfillment drives transformation.",
      reversedText: "Depression, suicidal ideation, whining, and instability represent the negative psychological states that manifest when one refuses to move forward or acknowledge necessary change."
    },
    {
      id: 47, number: "NINE", name: "NINE OF CUPS", suit: "CUPS", color: "#60A5FA",
      tags: ["#happiness", "#fulfillment", "#joy", "#contentment", "#luck"],
      description: "Perfect harmony and fulfillment in any emotional matter. Core themes include love, optimism, and trust with positive aspects of luck and compassion. This card suggests a joyful completion of an emotional journey, reflecting contentment and wellbeing.",
      reversedText: "The risk of self-indulgence and complacency — being tempted to enjoy happiness while losing the reflective awareness needed for spiritual growth. Shadow qualities include self-complacency and vanity."
    },
    {
      id: 48, number: "TEN", name: "TEN OF CUPS", suit: "CUPS", color: "#60A5FA",
      tags: ["#satiety", "#completion", "#love", "#generosity", "#fulfillment"],
      description: "Completion of the water suit's journey where all energies have found their fixed forms. Optimism, self-consciousness, and love combining all elements of spirit and body. The drive centers on seeking inner completion and fulfillment, kindness, and generosity.",
      reversedText: "Sentimentality, inner emptiness, debauchery, wantonness, and waste reflect the negative expressions of unfulfilled desires and excess."
    },
    {
      id: 49, number: "PAGE", name: "PAGE OF CUPS", suit: "CUPS", color: "#60A5FA",
      tags: ["#intuition", "#tenderness", "#fantasy", "#sensitivity", "#imagination"],
      description: "The Princess of Cups embodies endless tenderness, kindness, and lovingness, living on an isle of romance and joy. Intuition, sensibility, tenderness, fantasy, and dreamy imagination suggest artistic talents and potential for deeper medial insights.",
      reversedText: "Faking, abuse of feelings, selfishness, luxuriousness, deviation, and flattery. The princess's island can turn into a castle of sand, sinking in irrationality and daydreaming, seducing others into escapism."
    },
    {
      id: 50, number: "KNIGHT", name: "KNIGHT OF CUPS", suit: "CUPS", color: "#60A5FA",
      tags: ["#artistry", "#sensitivity", "#romance", "#creativity", "#emotion"],
      description: "The Prince of Cups combines emotional depth with intellectual clarity. Clever and open-minded with compassion, warmth, love, and artistic intentions — integration of spirit and soul with sensitive philosophical depth.",
      reversedText: "Selfishness, unscrupulousness, and cruelty. He can become reckless, always striving to improve his own goals and carelessly sacrificing relationships for personal ambitions. Quite shifty in dealings — unreliable and deceptive."
    },
    {
      id: 51, number: "QUEEN", name: "QUEEN OF CUPS", suit: "CUPS", color: "#60A5FA",
      tags: ["#emotion", "#intuition", "#poetry", "#kindness", "#depth"],
      description: "Pure emotion, passion, and feeling — never influenced by judgement or purpose. The Queen looks into the depths of the heart with sensitivity and emotional intelligence. Imagination, poetry, kindness, sensitivity, and emotional depth are her gifts.",
      reversedText: "Diffusion and spinning around in irrational folly. Unreliability, inconstancy, and being lost in a dreamworld of unreal fantasies where imagination devolves into weakness and thoughtlessness."
    },
    {
      id: 52, number: "KING", name: "KING OF CUPS", suit: "CUPS", color: "#60A5FA",
      tags: ["#compassion", "#artistry", "#healing", "#sensitivity", "#warmth"],
      description: "Fire in the Waters — emotional sensitivity and artistic inclination with good senses for art, poetry, and lyric. When aligned with inner conviction, he offers rich tenderness, emotional warmth, and healing through compassion.",
      reversedText: "Instability where quickly rising emotions can be overwhelming without genuine depth. Seducibility, vanity, unsteadiness, sentimental obtrusiveness, artificiality, and untruthfulness — interests fade as quickly as they flamed up."
    },
    // ── SWORDS ──
    {
      id: 53, number: "ACE", name: "ACE OF SWORDS", suit: "SWORDS", color: "#94A3B8",
      tags: ["#air", "#clarity", "#truth", "#breakthrough", "#mind"],
      description: "The Ace of Swords is the root of the powers of air — pure mental clarity cutting through confusion and illusion. The sword rises from a crown of light, double-edged, uncompromising in its precision. When this card appears, a moment of absolute clarity is available: to see things exactly as they are, to speak a difficult truth, to cut through the noise and arrive at what is real. This clarity may be painful — the sword does not spare feelings — but it is the only instrument that can truly set you free.",
      reversedText: "Reversed, the sword turns against itself — overthinking, mental confusion, the inability to find clarity in a fog of competing thoughts. The mind is the problem rather than the solution. Step back from the thinking and find a different way to know."
    },
    {
      id: 54, number: "TWO", name: "TWO OF SWORDS", suit: "SWORDS", color: "#94A3B8",
      tags: ["#peace", "#balance", "#truce", "#analysis", "#compromise"],
      description: "The beginning of analysis with balanced contradictory characteristics working in harmony. Peace through mental clarity, showing the mind at its finest when exploring its potential. The drive centers on peaceful resolution and finding a good compromise between soul and mind.",
      reversedText: "Disagreement and unresolved tensions emerge when differences are calmed only through cold logic, leaving underlying conflicts unresolved rather than genuinely harmonized."
    },
    {
      id: 55, number: "THREE", name: "THREE OF SWORDS", suit: "SWORDS", color: "#94A3B8",
      tags: ["#sorrow", "#heartbreak", "#truth", "#loss", "#clarity"],
      description: "A painful realization, a hard decision that has to be made, and the melancholy of Saturn recognizing the unveiled truth. Can also indicate disappointment, loss of illusions, or discovery of deception. The light aspects include understanding and losing beautiful but false illusions.",
      reversedText: "Disappointment, pain, sadness, separation, and sorrows represent the darker expressions emphasizing emotional suffering and loss."
    },
    {
      id: 56, number: "FOUR", name: "FOUR OF SWORDS", suit: "SWORDS", color: "#94A3B8",
      tags: ["#truce", "#rest", "#reflection", "#recovery", "#tolerance"],
      description: "The mind has solved a problem, found a solution, or come to a satisfying compromise. A period of mental resolution where balance allows for reflection and rest from conflict. Light aspects include a chance to reflect, rest from fighting, tolerance, and generosity.",
      reversedText: "Cold truce which means no peace at all — isolation and forced restriction rather than true peace suggest superficial resolution."
    },
    {
      id: 57, number: "FIVE", name: "FIVE OF SWORDS", suit: "SWORDS", color: "#94A3B8",
      tags: ["#defeat", "#limitation", "#acceptance", "#philosophy", "#reality"],
      description: "An intellectual crisis where one recognizes their limitations. Realization of limitations and restrictions and philosophy born in pain emerge from this difficult period as the Swords accept their inherently unstable nature.",
      reversedText: "Loss, defeat, failure, poverty, and fear represent the tangible consequences when one struggles against inevitable circumstances without acceptance or understanding."
    },
    {
      id: 58, number: "SIX", name: "SIX OF SWORDS", suit: "SWORDS", color: "#94A3B8",
      tags: ["#science", "#recovery", "#intellect", "#transition", "#truth"],
      description: "Success after anxiety and trouble, search for truth. Recovery from the previous card's crisis where emotional wounds heal and mental energies fully develop. Emphasizes intellectual harmony and the ability to combine rational thought with deeper spiritual insight.",
      reversedText: "Too much rationalism, distrust, and misanthropy — an excessive reliance on logic at the expense of human connection, leading to skepticism and withdrawal from others."
    },
    {
      id: 59, number: "SEVEN", name: "SEVEN OF SWORDS", suit: "SWORDS", color: "#94A3B8",
      tags: ["#futility", "#cunning", "#deception", "#strategy", "#illusion"],
      description: "Intellect struggling against fate through cunning methods — trickery, cheating, sudden affronts, and juggling. However, these schemes ultimately fail as all lists are bound to fail. The light aspect includes unmasking of illusions and disguises.",
      reversedText: "Treachery, deceit, illusion, amorality, evil tricks, and self-pity characterize the shadow meanings."
    },
    {
      id: 60, number: "EIGHT", name: "EIGHT OF SWORDS", suit: "SWORDS", color: "#94A3B8",
      tags: ["#interference", "#analysis", "#limitation", "#causality", "#restriction"],
      description: "The intellect's tendency toward endless analysis where the mind recognizes limitations in its own reasoning, creating internal conflicts. The upright aspect suggests realization of causality, acceptance of limitation and relativity — understanding how thoughts interconnect.",
      reversedText: "Confusion, aimless pondering, and compulsive brooding where the analytical mind becomes trapped in unproductive rumination and restless uncontrolled thought patterns rather than achieving clarity."
    },
    {
      id: 61, number: "NINE", name: "NINE OF SWORDS", suit: "SWORDS", color: "#94A3B8",
      tags: ["#cruelty", "#truth", "#depth", "#anxiety", "#reckoning"],
      description: "Deep analytical thinking about difficult truths. Facing up to facts and realizing truth; going into the depths of a subject with all consequences. Rather than inherently negative, this card reflects the Swords suit's inability to avoid confronting harsh realities.",
      reversedText: "Cruelty, pain, despair, and lack of pity represent the destructive potential when analytical nature becomes disconnected from compassion or becomes obsessive about negative outcomes."
    },
    {
      id: 62, number: "TEN", name: "TEN OF SWORDS", suit: "SWORDS", color: "#94A3B8",
      tags: ["#ruin", "#endings", "#destruction", "#rebirth", "#finality"],
      description: "The culmination of intellectual development where endless fighting ends in destruction and endless analysis ends in complete loss of hope. Yet the Sun's presence suggests a silent return to origin, to the first spark of mind in the Ace, to start all over again with wisdom gained.",
      reversedText: "Ruin, loss, destruction, separation, pain, and catastrophe characterize the shadow aspects — the harsh consequences of unchecked mental conflict and analytical paralysis."
    },
    {
      id: 63, number: "PAGE", name: "PAGE OF SWORDS", suit: "SWORDS", color: "#94A3B8",
      tags: ["#practicality", "#cleverness", "#perception", "#wind", "#material"],
      description: "The Princess of Swords is the earthy child of her element — the wind over the grounds of the material world. At her best she demonstrates practicality and cleverness with fine skills in material matters, and can be generous and kind once she overcomes inner fear and insecurity.",
      reversedText: "Malicious, cruel, spiteful, and wasteful — failure to recognize facts, aggression, and destruction. She can be stubborn and cruel, turning discriminating and egotistical when results displease her."
    },
    {
      id: 64, number: "KNIGHT", name: "KNIGHT OF SWORDS", suit: "SWORDS", color: "#94A3B8",
      tags: ["#intellect", "#creativity", "#ideas", "#mastery", "#agility"],
      description: "The Prince of Swords embodies intellectual mastery and creative brilliance — creativity, richness of ideas, intelligence, and mastery of words combined with idealism and mental agility. A Mercury-like spirit capable of swift high achievement.",
      reversedText: "Harsh, malicious, unreliable, cheating, and crude. Without grounding qualities, intelligence becomes unstable and manipulative — deceptive and prone to abandoning commitments when distracted by new interests."
    },
    {
      id: 65, number: "QUEEN", name: "QUEEN OF SWORDS", suit: "SWORDS", color: "#94A3B8",
      tags: ["#wisdom", "#perception", "#independence", "#grace", "#clarity"],
      description: "Water in the Air — blending emotional sensitivity with intellectual qualities. Wisdom, imagination, self-confidence, perception, and grace. The Queen embodies independence and freedom of thought with keen perception and sharp wit combined with emotional depth and creative capability.",
      reversedText: "Coldness, inaccessibility, cruelty, and deceitfulness. Impracticality and instability without grounding — potentially dangerous due to intelligence and charm used deceptively."
    },
    {
      id: 66, number: "KING", name: "KING OF SWORDS", suit: "SWORDS", color: "#94A3B8",
      tags: ["#intellect", "#analysis", "#courage", "#sharpness", "#judgment"],
      description: "Fire within Air — mental intensity and intellectual prowess. At his best: intelligent judgment, mental realizations, sharp-mindedness, analytical, clever, dexterous, and courageous. Excels at logical thinking and complex reasoning.",
      reversedText: "Coldness, cynicism, and ambiguity when intellectual gifts turn destructive. Tends to put logic and mind ahead of all other values, becoming emotionally detached and judgmental — or transforming into a deceitful, sardonic tyrant of the mind."
    },
    // ── DISKS ──
    {
      id: 67, number: "ACE", name: "ACE OF DISKS", suit: "DISKS", color: "#4ADE80",
      tags: ["#earth", "#manifestation", "#opportunity", "#abundance", "#material"],
      description: "The Ace of Disks is the root of the powers of earth — pure material potential, the seed of prosperity and tangible achievement. A new path of financial security, practical opportunity, or grounded abundance is opening before you. This is the card of the seed meeting fertile soil: the conditions for material success are present. The invitation is to act practically, to tend to the material dimensions of your life with the same care you give to the spiritual, and to trust that what is planted with intention and patience will grow.",
      reversedText: "Reversed, the seed is present but the soil is not ready — missed opportunities, poor planning, or a scarcity mindset that prevents the recognition of abundance already present. What beliefs about material reality are blocking the harvest?"
    },
    {
      id: 68, number: "TWO", name: "TWO OF DISKS", suit: "DISKS", color: "#4ADE80",
      tags: ["#change", "#balance", "#adaptability", "#cycles", "#flexibility"],
      description: "Harmonious change — flexibility and the natural balance inherent in life's cycles. Symbolizes the beginning of a project with enthusiasm and the ability to adapt to changing circumstances. The card encourages accepting the constant flow of transformation as part of nature's principle of growth.",
      reversedText: "Imbalance, inability to accept change, and clinging to a status quo that is about to fade — reflecting resistance to necessary transformation and difficulty adapting to life's natural cycles."
    },
    {
      id: 69, number: "THREE", name: "THREE OF DISKS", suit: "DISKS", color: "#4ADE80",
      tags: ["#works", "#progress", "#skill", "#mastery", "#craftsmanship"],
      description: "A project entering a phase of understanding and completion. Progress, crystallization, and increase of substance as the alchemical process combines elements into the philosopher's stone. Work has been accomplished marking a first taste of victory, though continued effort remains necessary.",
      reversedText: "Sloppiness or neglect after a first gain was won, stopping in the middle of work — complacency following initial success where momentum stalls and achievements risk being undermined."
    },
    {
      id: 70, number: "FOUR", name: "FOUR OF DISKS", suit: "DISKS", color: "#4ADE80",
      tags: ["#power", "#security", "#stability", "#material-success", "#comfort"],
      description: "Material success and stability achieved through focused effort — success, establishment, proficiency, comfort, and security in both material and personal domains. Power derives from peace, security, and well-deserved reward for good work and concentrated effort.",
      reversedText: "Fear of loss and failure, avarice, greed, and hoarding emerge when comfortable power of peace turns into an ugly force directed against oneself through excessive attachment to material comfort."
    },
    {
      id: 71, number: "FIVE", name: "FIVE OF DISKS", suit: "DISKS", color: "#4ADE80",
      tags: ["#worry", "#hardship", "#crisis", "#adversity", "#resilience"],
      description: "A material crisis disrupting stability — can be a crisis in home, profession, illness, or injury. Worry about material security and health, though there exists potential for reconsidering values and managing to get along in hard times through adversity's lessons.",
      reversedText: "Fear, loss, failure, destruction, hindering, unpredictable changes for the worse, and worsening circumstances depict the darker manifestations of material disruption and crisis."
    },
    {
      id: 72, number: "SIX", name: "SIX OF DISKS", suit: "DISKS", color: "#4ADE80",
      tags: ["#success", "#generosity", "#wealth", "#nobility", "#recovery"],
      description: "Recovery after hardship where a wiser attitude toward material concerns has been achieved and balance restored after the Five's crisis. Wealth, generosity, and nobility with an understanding that material possessions hold their true value — neither overestimated nor undervalued.",
      reversedText: "False pride, taking everything for granted, and prodigality — squandering gains or losing sight of what truly matters."
    },
    {
      id: 73, number: "SEVEN", name: "SEVEN OF DISKS", suit: "DISKS", color: "#4ADE80",
      tags: ["#failure", "#patience", "#deception", "#waiting", "#reevaluation"],
      description: "Hopes deceived and crushed, unfulfilled promises, and loss of fortune — promises that initially seemed promising but prove short-lived or deceptive. The card teaches the value of patience and waiting for genuine opportunities rather than rushing toward uncertain prospects.",
      reversedText: "Failure, disappointment, uneasiness, overhasty and stupid actions, and unwise investments warn against impulsive decisions and the consequences of not exercising proper judgment."
    },
    {
      id: 74, number: "EIGHT", name: "EIGHT OF DISKS", suit: "DISKS", color: "#4ADE80",
      tags: ["#prudence", "#craftsmanship", "#patience", "#skill", "#mastery"],
      description: "Consideration and prudence — the ability to wait for the right moment and realization of coherences. The Eight of Disks signifies learning careful deliberation and patience, having absorbed lessons from previous challenges. Encourages thoughtful analysis before action and developing mastery through disciplined apprenticeship.",
      reversedText: "Penny-wise and pound-foolish, hoarding, stagnancy, and immovability warn against excessive caution that becomes paralyzing — careful about minor details while reckless with major decisions, or endless consideration that prevents forward progress."
    },
    {
      id: 75, number: "NINE", name: "NINE OF DISKS", suit: "DISKS", color: "#4ADE80",
      tags: ["#gain", "#prosperity", "#achievement", "#comfort", "#wellbeing"],
      description: "Material satisfaction and earned rewards — material happiness, gain, and riches with the attainment of well-being through accomplishment. Comfort, contentment with success, and the enjoyment of prosperity. Health and recovery from illness are also associated meanings.",
      reversedText: "Greed for more, materialistic thinking, dissipation, abuse, and exploitation suggest that self-satisfaction with wealth can lead to losing sight of non-material values and potentially harmful behavior."
    },
    {
      id: 76, number: "TEN", name: "TEN OF DISKS", suit: "DISKS", color: "#4ADE80",
      tags: ["#wealth", "#completion", "#security", "#legacy", "#abundance"],
      description: "The culmination of material manifestation in the earthly realm — completion of success, material security, and well-being. The element of Earth reaches its final destination where financial potential fully realizes and work cycles complete. Settled prosperity and the tangible rewards of effort.",
      reversedText: "Greed, laziness, poverty of feelings, and dullness of mind warn against becoming complacent or spiritually impoverished through wealth obsession — material abundance without emotional or intellectual engagement leads to stagnation."
    },
    {
      id: 77, number: "PAGE", name: "PAGE OF DISKS", suit: "DISKS", color: "#4ADE80",
      tags: ["#generosity", "#sensuality", "#creation", "#growth", "#warmth"],
      description: "The Princess of Disks is the pure manifestation of the physical world — Earth in the Earth. She embodies warmth, sensuality, generosity, and reliable stability with a drive toward creation, growth, birth, and making. Generosity, kindness, love, faith, sensitivity, and concentration are her gifts.",
      reversedText: "Illogical, prodigal and wasteful, dissipating ideas, and lacking the ability to recognize facts. Stubborn, overly dependent, and changeable in opinions — with behavioral issues comparable to a stubborn, nasty child when in a poor mood."
    },
    {
      id: 78, number: "KNIGHT", name: "KNIGHT OF DISKS", suit: "DISKS", color: "#4ADE80",
      tags: ["#steadiness", "#practicality", "#patience", "#creativity", "#reliability"],
      description: "The Prince of Disks is stable, industrious, enduring, reliable, practical, reasonable, and careful. Though Earth slows Air's natural speed, this creates steady progress. The Prince values comfort and beauty while remaining patient, tolerant, and thoughtful.",
      reversedText: "Stubbornness, corruption, avarice, phlegma, dullness, and coldness. Obstinate and narrow-minded about unfamiliar matters, prone to stagnation — though patient by nature, the Prince can hold grudges intensely once angered."
    },
    {
      id: 79, number: "QUEEN", name: "QUEEN OF DISKS", suit: "DISKS", color: "#4ADE80",
      tags: ["#nurturing", "#fertility", "#stability", "#kindness", "#intuition"],
      description: "Kind and tender, friendly and good-hearted with fine instincts and intuitions. She embodies fertility and security, representing a stable nurturing figure who balances emotional sensitivity with practical reliability. Calm and practicable, a devoted protector of family and home.",
      reversedText: "Moody, foolish, undecided, weak, and dependent. The shadow side reveals potential foolishness, lack of intelligence, inability to achieve independence, and hidden tendencies toward indulgence and excess beneath a composed exterior."
    },
    {
      id: 80, number: "KING", name: "KING OF DISKS", suit: "DISKS", color: "#4ADE80",
      tags: ["#industry", "#reliability", "#patience", "#pragmatism", "#endurance"],
      description: "Industrious, patient, reliable, strong, and enduring in material matters. He succeeds through pragmatism and instinct rather than intellect, focusing on concrete tasks and tangible results without distraction.",
      reversedText: "Stubborn and even stupid, clumsy, and jealous of anyone that seems higher. Cowardish and unwilling to change himself — obstinacy, mental dullness, envy of others' success, grasping behavior, and stagnation."
    }
  ]
};
