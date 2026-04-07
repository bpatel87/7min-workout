// ==================== SVG EXERCISE FIGURES ====================
// Clean stick-figure illustrations for each exercise
// Style: NYT 7-minute workout inspired — simple, anatomical, monochrome

const EXERCISE_SVG = {};

// Helper: create a figure with consistent style
function fig(paths, w=200, h=200) {
  return `<svg viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">${paths}</svg>`;
}

// Head helper
const head = (cx,cy,r=12) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="currentColor" opacity="0.15" stroke="currentColor"/>`;
// Body line
const line = (x1,y1,x2,y2) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"/>`;
// Curved path
const path = (d) => `<path d="${d}"/>`;
// Filled circle (joint)
const joint = (cx,cy,r=3) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="currentColor" opacity="0.4"/>`;
// Ground line
const ground = (y=185) => `<line x1="30" y1="${y}" x2="170" y2="${y}" stroke-opacity="0.15" stroke-dasharray="4,4"/>`;
// Chair shape
const chair = () => `<rect x="125" y="95" width="45" height="70" rx="3" fill="none" stroke="currentColor" stroke-opacity="0.25" stroke-width="2.5"/><line x1="170" y1="95" x2="170" y2="75" stroke-opacity="0.25" stroke-width="2.5"/>`;
// Wall
const wall = (x=30) => `<line x1="${x}" y1="40" x2="${x}" y2="185" stroke-opacity="0.2" stroke-width="4"/>`;

// ===== CLASSIC 12 =====

EXERCISE_SVG['Jumping Jacks'] = fig(
  // Standing with legs apart, arms up in V
  head(100,35) +
  line(100,47,100,105) + // torso
  // Arms up in V
  line(100,60,65,30) + line(100,60,135,30) +
  // Legs apart
  line(100,105,65,165) + line(100,105,135,165) +
  // Feet
  line(65,165,58,168) + line(135,165,142,168) +
  // Hands
  joint(65,30) + joint(135,30) +
  // Motion lines
  `<line x1="55" y1="28" x2="48" y2="22" stroke-opacity="0.3" stroke-width="2"/>` +
  `<line x1="145" y1="28" x2="152" y2="22" stroke-opacity="0.3" stroke-width="2"/>` +
  `<line x1="55" y1="170" x2="48" y2="176" stroke-opacity="0.3" stroke-width="2"/>` +
  `<line x1="145" y1="170" x2="152" y2="176" stroke-opacity="0.3" stroke-width="2"/>` +
  ground()
);

EXERCISE_SVG['Wall Sit'] = fig(
  wall(40) +
  head(55,55) +
  // Back against wall
  line(55,67,55,105) +
  // Thighs horizontal
  line(55,105,95,105) +
  // Shins vertical
  line(95,105,95,155) +
  // Arms at sides
  line(55,75,55,100) +
  // Feet
  line(95,155,88,158) + line(95,155,102,158) +
  joint(95,105) +
  ground(160)
);

EXERCISE_SVG['Push-Ups'] = fig(
  // Plank/push-up position
  head(45,82) +
  // Torso angled
  line(55,90,145,108) +
  // Arms (bent at elbow)
  line(55,90,55,120) + line(55,120,55,145) +
  // Back arm
  line(85,95,85,120) + line(85,120,85,145) +
  // Legs extended
  line(145,108,175,140) +
  // Feet
  line(175,140,178,135) +
  joint(55,120) + joint(85,120) +
  ground(147)
, 200, 200);

EXERCISE_SVG['Crunches'] = fig(
  // Lying on back, knees bent, curling up
  head(65,75) +
  // Torso curled up
  path('M 73,83 Q 85,100 100,110') +
  // Legs bent
  line(100,110,120,90) + line(120,90,140,130) +
  // Arms behind head
  line(65,80,50,72) + line(65,80,55,68) +
  // Foot on ground
  line(140,130,145,130) +
  joint(120,90) +
  ground(132)
);

EXERCISE_SVG['Step-Up onto Chair'] = fig(
  chair() +
  head(95,45) +
  line(95,57,95,105) + // torso
  // Stepping leg on chair
  line(95,105,125,95) +
  line(125,95,125,95) +
  // Standing leg
  line(95,105,90,145) + line(90,145,90,165) +
  // Arms
  line(95,70,80,55) + line(95,70,110,55) +
  // Knee drive
  joint(125,95) +
  ground(167)
);

EXERCISE_SVG['Squats'] = fig(
  head(100,48) +
  line(100,60,100,100) + // torso
  // Thighs going down
  line(100,100,75,130) + line(100,100,125,130) +
  // Shins
  line(75,130,80,165) + line(125,130,120,165) +
  // Arms forward for balance
  line(100,72,65,72) + line(100,72,135,72) +
  joint(75,130) + joint(125,130) +
  joint(65,72) + joint(135,72) +
  ground(167)
);

EXERCISE_SVG['Tricep Dips'] = fig(
  chair() +
  head(110,60) +
  // Torso vertical
  line(110,72,110,115) +
  // Hands on chair
  line(110,85,130,85) + line(130,85,130,95) +
  // Legs extended
  line(110,115,70,140) + line(70,140,50,140) +
  // Arms bent
  joint(130,85) +
  ground(145)
);

EXERCISE_SVG['Plank'] = fig(
  head(42,88) +
  // Torso - straight line
  line(50,95,160,110) +
  // Forearms on ground
  line(50,95,42,120) + line(42,120,55,125) +
  // Back arm
  line(70,97,65,120) + line(65,120,75,125) +
  // Legs
  line(160,110,175,135) +
  // Feet
  line(175,135,178,130) +
  ground(127)
);

EXERCISE_SVG['High Knees'] = fig(
  head(100,32) +
  line(100,44,100,95) + // torso
  // Right knee driven up high
  line(100,95,85,70) + // thigh up
  line(85,70,85,95) + // shin hanging
  // Left leg on ground
  line(100,95,115,140) + line(115,140,115,170) +
  // Arms pumping
  line(100,58,120,45) + line(100,58,80,80) +
  // Motion lines
  `<line x1="78" y1="65" x2="70" y2="60" stroke-opacity="0.3" stroke-width="2"/>` +
  `<line x1="78" y1="75" x2="70" y2="72" stroke-opacity="0.3" stroke-width="2"/>` +
  joint(85,70) +
  ground(172)
);

EXERCISE_SVG['Lunges'] = fig(
  head(90,38) +
  line(90,50,90,100) + // torso
  // Front leg bent 90°
  line(90,100,55,100) + line(55,100,55,150) +
  // Back leg extended
  line(90,100,140,135) + line(140,135,155,165) +
  // Arms at sides
  line(90,62,90,95) +
  joint(55,100) + joint(140,135) +
  // Back knee near ground
  `<circle cx="140" cy="135" r="2" fill="currentColor" opacity="0.5"/>` +
  ground(167)
);

EXERCISE_SVG['Push-Up & Rotate'] = fig(
  // Side plank with arm up
  head(70,45) +
  // Torso diagonal
  line(73,57,130,130) +
  // Bottom arm supporting
  line(73,57,50,85) + line(50,85,50,120) +
  // Top arm reaching up
  line(85,70,70,35) +
  // Legs
  line(130,130,155,155) +
  // Foot
  line(155,155,160,150) +
  // Rotation arrow
  path('M 55,40 Q 45,50 55,60') +
  `<line x1="55" y1="60" x2="50" y2="55" stroke-opacity="0.4" stroke-width="2"/>` +
  ground(158)
);

EXERCISE_SVG['Side Plank'] = fig(
  head(60,52) +
  // Torso diagonal
  line(63,64,140,128) +
  // Bottom forearm
  line(63,64,45,90) + line(45,90,60,95) +
  // Top arm on hip
  line(85,80,80,70) +
  // Legs stacked
  line(140,128,165,152) +
  line(140,128,160,158) +
  ground(160)
);

// ===== CORE =====

EXERCISE_SVG['Bicycle Crunches'] = fig(
  head(60,68) +
  path('M 68,76 Q 80,95 95,100') + // torso curl
  // Right knee up to chest
  line(95,100,110,80) + line(110,80,120,100) +
  // Left leg extended
  line(95,100,150,115) + line(150,115,170,125) +
  // Arm toward knee (twist)
  line(65,75,105,78) +
  // Other arm behind head
  line(65,75,50,65) +
  joint(110,80) +
  ground(130)
);

EXERCISE_SVG['Flutter Kicks'] = fig(
  head(40,95) +
  // Lying flat
  line(50,100,140,100) +
  // One leg up
  line(140,100,170,75) +
  // One leg slightly down
  line(140,100,175,110) +
  // Arms at sides
  line(50,100,40,105) +
  // Motion lines on legs
  `<line x1="165" y1="70" x2="172" y2="65" stroke-opacity="0.3" stroke-width="2"/>` +
  `<line x1="170" y1="115" x2="177" y2="120" stroke-opacity="0.3" stroke-width="2"/>` +
  ground(118)
);

EXERCISE_SVG['Mountain Climbers'] = fig(
  head(45,72) +
  line(53,80,155,108) + // torso
  // Front arm
  line(53,80,48,110) + line(48,110,55,120) +
  // Back arm
  line(75,85,72,110) + line(72,110,80,120) +
  // One knee driven forward
  line(120,100,90,95) + line(90,95,95,115) +
  // Back leg extended
  line(155,108,175,135) +
  joint(90,95) +
  // Motion lines
  `<line x1="83" y1="90" x2="75" y2="85" stroke-opacity="0.3" stroke-width="2"/>` +
  ground(137)
);

EXERCISE_SVG['Dead Bug'] = fig(
  head(100,110) +
  // Lying on back
  line(100,100,100,60) +
  // Right arm up
  line(100,90,70,55) +
  // Left arm up
  line(100,90,130,55) +
  // Right leg up, bent
  line(100,60,75,45) + line(75,45,75,65) +
  // Left leg up, bent
  line(100,60,125,45) + line(125,45,125,65) +
  joint(75,45) + joint(125,45) +
  ground(115)
);

EXERCISE_SVG['Russian Twists'] = fig(
  head(85,55) +
  // Torso leaned back
  path('M 90,67 Q 100,90 105,105') +
  // Legs bent, feet off floor
  line(105,105,130,85) + line(130,85,145,100) +
  // Arms extended to one side (twisting)
  line(92,78,60,70) + line(60,70,55,75) +
  joint(130,85) +
  // Rotation arrow
  path('M 60,65 Q 70,55 80,60') +
  ground(115)
);

EXERCISE_SVG['Leg Raises'] = fig(
  head(40,95) +
  // Lying flat
  line(50,100,130,100) +
  // Legs raised to ~80°
  line(130,100,145,50) +
  // Feet together
  line(145,50,140,48) + line(145,50,150,48) +
  // Arms at sides pressing down
  line(50,100,35,105) +
  // Motion arc
  path('M 160,100 Q 165,75 155,50') +
  `<line x1="155" y1="50" x2="160" y2="55" stroke-opacity="0.3" stroke-width="2"/>` +
  ground(110)
);

EXERCISE_SVG['Side Plank Left'] = EXERCISE_SVG['Side Plank'];
EXERCISE_SVG['Side Plank Right'] = EXERCISE_SVG['Side Plank'];

EXERCISE_SVG['V-Ups'] = fig(
  head(80,50) +
  // Torso and legs meeting in V
  path('M 85,60 Q 100,80 100,85') +
  line(100,85,130,55) + // legs going up
  // Arms reaching for toes
  line(85,60,120,48) +
  joint(100,85) +
  ground(115)
);

EXERCISE_SVG['Bird Dogs'] = fig(
  // On hands and knees
  head(55,68) +
  // Torso horizontal
  line(60,78,120,78) +
  // Supporting arm
  line(70,78,70,110) +
  // Supporting knee
  line(110,78,110,110) +
  // Extended arm forward
  line(60,78,30,60) + joint(30,60) +
  // Extended leg back
  line(120,78,160,62) + joint(160,62) +
  ground(112)
);

EXERCISE_SVG['Superman Hold'] = fig(
  head(50,82) +
  // Torso (slight arch)
  path('M 58,88 Q 100,95 145,88') +
  // Arms extended forward and up
  line(58,88,30,72) + joint(30,72) +
  // Legs extended back and up
  line(145,88,175,72) + joint(175,72) +
  ground(105)
);

// ===== UPPER BODY =====

EXERCISE_SVG['Arm Circles'] = fig(
  head(100,40) +
  line(100,52,100,110) + // torso
  // Arms out to sides
  line(100,65,55,65) + line(100,65,145,65) +
  // Legs
  line(100,110,85,165) + line(100,110,115,165) +
  // Circle arcs around hands
  `<circle cx="55" cy="65" r="18" fill="none" stroke-opacity="0.3" stroke-width="2" stroke-dasharray="4,3"/>` +
  `<circle cx="145" cy="65" r="18" fill="none" stroke-opacity="0.3" stroke-width="2" stroke-dasharray="4,3"/>` +
  // Arrow tips
  joint(55,65) + joint(145,65) +
  ground()
);

EXERCISE_SVG['Diamond Push-Ups'] = fig(
  head(45,82) +
  line(55,90,145,108) +
  // Hands close together (diamond)
  line(55,90,68,118) + line(68,118,78,120) +
  line(75,95,68,118) +
  // Diamond shape hint
  `<path d="M 65,115 L 72,108 L 79,115 L 72,122 Z" fill="none" stroke-opacity="0.4" stroke-width="1.5"/>` +
  // Legs
  line(145,108,175,135) + line(175,135,178,130) +
  ground(127)
);

EXERCISE_SVG['Shoulder Taps'] = fig(
  head(45,75) +
  line(53,83,150,100) + // torso
  // One arm supporting
  line(65,86,65,120) +
  // Other arm tapping shoulder
  line(53,83,60,80) + // tap
  `<circle cx="60" cy="80" r="4" fill="currentColor" opacity="0.3"/>` +
  // Legs
  line(150,100,170,128) + line(170,128,173,123) +
  ground(125)
);

EXERCISE_SVG['Wide Push-Ups'] = fig(
  head(45,82) +
  line(55,90,145,108) +
  // Arms wide
  line(55,90,35,120) + line(35,120,35,140) +
  line(90,96,90,120) + line(90,120,90,140) +
  // Legs
  line(145,108,175,135) +
  joint(35,120) + joint(90,120) +
  ground(142)
);

EXERCISE_SVG['Pike Push-Ups'] = fig(
  head(65,55) +
  // Inverted V shape
  line(70,67,105,115) + // torso going down
  line(105,115,155,95) + // legs going up-ish to ground
  // Arms vertical
  line(70,67,65,95) + line(65,95,65,120) +
  // Hips high
  joint(105,115) +
  ground(122)
);

EXERCISE_SVG['Plank Up-Downs'] = fig(
  head(42,78) +
  line(50,86,155,105) + // torso
  // One arm straight (hand)
  line(50,86,48,115) +
  // One arm on forearm
  line(75,90,68,115) + line(68,115,80,118) +
  // Legs
  line(155,105,175,130) +
  // Arrow showing up motion
  `<path d="M 58,125 L 58,108 L 52,114" fill="none" stroke-opacity="0.4" stroke-width="2"/>` +
  ground(133)
);

EXERCISE_SVG['Inchworms'] = fig(
  head(50,55) +
  // Folded forward
  path('M 55,67 Q 70,90 80,110') +
  // Hands walking out
  line(55,67,45,85) + line(45,85,40,100) +
  // Legs straight
  line(80,110,80,160) +
  // Motion dots
  `<circle cx="30" cy="105" r="2" fill="currentColor" opacity="0.3"/>` +
  `<circle cx="22" cy="108" r="2" fill="currentColor" opacity="0.2"/>` +
  `<circle cx="15" cy="111" r="2" fill="currentColor" opacity="0.1"/>` +
  ground(162)
);

EXERCISE_SVG['Decline Push-Ups'] = fig(
  // Feet elevated on chair
  `<rect x="140" y="90" width="40" height="35" rx="3" fill="none" stroke="currentColor" stroke-opacity="0.25" stroke-width="2.5"/>` +
  head(35,82) +
  line(43,90,140,95) + // torso (slight incline)
  // Arms
  line(43,90,40,115) + line(40,115,40,135) +
  line(65,92,62,115) + line(62,115,62,135) +
  // Legs going up to chair
  line(140,95,160,90) +
  joint(40,115) + joint(62,115) +
  ground(137)
);

EXERCISE_SVG['Superman Pulls'] = fig(
  head(50,82) +
  path('M 58,88 Q 100,95 145,88') +
  // Arms pulled back (row motion)
  line(58,88,50,78) + line(50,78,65,82) +
  // Another arm
  line(65,86,58,76) + line(58,76,72,80) +
  // Legs extended
  line(145,88,175,78) + joint(175,78) +
  // Arrow showing pull
  `<path d="M 35,75 L 50,80" fill="none" stroke-opacity="0.4" stroke-width="2"/>` +
  ground(105)
);

// ===== LOWER BODY =====

EXERCISE_SVG['Alternating Lunges'] = EXERCISE_SVG['Lunges'];

EXERCISE_SVG['Glute Bridges'] = fig(
  head(45,100) +
  // On back, hips up
  line(50,95,65,95) + // upper back on ground
  line(65,95,105,70) + // torso rising up
  // Hips at peak
  line(105,70,130,95) + // thigh going down
  line(130,95,130,120) + // shin vertical
  // Foot on ground
  line(130,120,135,120) +
  joint(105,70) +
  ground(122)
);

EXERCISE_SVG['Jump Squats'] = fig(
  head(100,28) +
  line(100,40,100,85) + // torso
  // Legs tucked (in air)
  line(100,85,75,105) + line(75,105,80,120) +
  line(100,85,125,105) + line(125,105,120,120) +
  // Arms up
  line(100,52,75,38) + line(100,52,125,38) +
  joint(75,105) + joint(125,105) +
  // Motion lines below (in air)
  `<line x1="80" y1="140" x2="120" y2="140" stroke-opacity="0.2" stroke-width="2" stroke-dasharray="3,3"/>` +
  `<line x1="85" y1="148" x2="115" y2="148" stroke-opacity="0.15" stroke-width="2" stroke-dasharray="3,3"/>` +
  `<line x1="90" y1="156" x2="110" y2="156" stroke-opacity="0.1" stroke-width="2" stroke-dasharray="3,3"/>` +
  ground(170)
);

EXERCISE_SVG['Calf Raises'] = fig(
  head(100,35) +
  line(100,47,100,110) + // torso
  // Legs straight, on toes
  line(100,110,90,155) + line(100,110,110,155) +
  // On tippy toes
  line(90,155,88,152) + line(110,155,112,152) +
  // Arms at sides
  line(100,60,90,60) + line(100,60,110,60) +
  // Arrow showing rise
  `<path d="M 130,155 L 130,140 L 125,145" fill="none" stroke-opacity="0.4" stroke-width="2"/>` +
  ground(160)
);

EXERCISE_SVG['Sumo Squats'] = fig(
  head(100,40) +
  line(100,52,100,95) + // torso
  // Wide legs
  line(100,95,60,120) + line(60,120,60,160) +
  line(100,95,140,120) + line(140,120,140,160) +
  // Feet pointed out
  line(60,160,50,162) + line(140,160,150,162) +
  // Arms in front / prayer position
  line(100,70,92,85) + line(100,70,108,85) +
  joint(60,120) + joint(140,120) +
  ground(165)
);

EXERCISE_SVG['Single-Leg Deadlift'] = fig(
  head(75,55) +
  // Torso leaning forward
  line(80,67,115,95) +
  // Standing leg
  line(115,95,115,155) +
  // Back leg extended behind (T shape)
  line(115,95,160,65) + joint(160,65) +
  // Arms hanging
  line(90,75,85,100) +
  ground(158)
);

EXERCISE_SVG['Lateral Lunges'] = fig(
  head(80,38) +
  line(80,50,80,95) + // torso shifted left
  // Bent leg (lunge side)
  line(80,95,55,120) + line(55,120,55,155) +
  // Straight leg
  line(80,95,135,95) + line(135,95,155,155) +
  // Arms
  line(80,65,65,55) +
  joint(55,120) +
  ground(158)
);

EXERCISE_SVG['Donkey Kicks'] = fig(
  head(55,68) +
  // On hands and knees
  line(60,78,120,78) +
  // Arms
  line(65,78,65,110) + line(80,78,80,110) +
  // One knee down
  line(110,78,110,110) +
  // Kicking leg up
  line(120,78,155,50) + joint(155,50) +
  // Motion lines
  `<line x1="150" y1="45" x2="158" y2="38" stroke-opacity="0.3" stroke-width="2"/>` +
  `<line x1="145" y1="42" x2="150" y2="33" stroke-opacity="0.3" stroke-width="2"/>` +
  ground(112)
);

EXERCISE_SVG['Curtsy Lunges'] = fig(
  head(100,35) +
  line(100,47,100,95) + // torso
  // Front leg
  line(100,95,80,125) + line(80,125,80,160) +
  // Back leg crossed behind
  line(100,95,130,120) + line(130,120,115,155) +
  // Arms on hips
  line(100,62,85,72) + line(100,62,115,72) +
  joint(80,125) + joint(130,120) +
  ground(162)
);

EXERCISE_SVG['Squat Hold'] = fig(
  head(100,50) +
  line(100,62,100,105) + // torso
  // Deep squat hold
  line(100,105,70,105) + line(70,105,70,150) +
  line(100,105,130,105) + line(130,105,130,150) +
  // Arms forward
  line(100,75,60,75) + line(100,75,140,75) +
  joint(70,105) + joint(130,105) +
  joint(60,75) + joint(140,75) +
  // Hold indicator (wavy lines)
  `<path d="M 55,60 Q 60,55 65,60 Q 70,65 75,60" fill="none" stroke-opacity="0.3" stroke-width="1.5"/>` +
  ground(153)
);

// ===== REST =====
EXERCISE_SVG['Rest'] = fig(
  head(100,55) +
  line(100,67,100,115) + // torso
  // Relaxed arms at sides
  line(100,78,80,95) + line(100,78,120,95) +
  // Legs standing
  line(100,115,90,165) + line(100,115,110,165) +
  // Breath indicators
  `<path d="M 115,50 Q 125,45 120,38" fill="none" stroke-opacity="0.3" stroke-width="2"/>` +
  `<path d="M 120,55 Q 132,48 128,40" fill="none" stroke-opacity="0.2" stroke-width="2"/>` +
  ground()
);
