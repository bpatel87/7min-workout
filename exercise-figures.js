// ==================== SVG EXERCISE FIGURES ====================
// NYT-style anatomical silhouettes for 7-Minute Workout
// Style: Clean, monochrome, geometric-anatomical.
// Uses 'currentColor' for CSS-based color control.

var EXERCISE_SVG = {};

// Helper: creates a standard SVG wrapper
const fig = (paths) => `<<svgsvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="currentColor">${paths}</svg>`;

// Anatomical building blocks
const head = (cx, cy, r=12) => `<<circlecircle cx="${cx}" cy="${cy}" r="${r}"/>`;
const torso = (d) => `<<pathpath d="${d}" />`;
const limb = (d) => `<<pathpath d="${d}" />`;
const ground = () => `<<rectrect x="20" y="185" width="160" height="2" opacity="0.2"/>`;

// --- DATA GENERATION ---

// Jumping Jacks
EXERCISE_SVG['Jumping Jacks'] = {
  a: fig(head(100,40) + torso("M100,52 L100,100 L85,140 L75,175 M100,100 L115,140 L125,175") + limb("M100,60 L60,30 M100,60 L140,30")),
  b: fig(head(100,40) + torso("M100,52 L100,100 L70,140 L60,175 M100,100 L130,140 L140,175") + limb("M100,60 L40,20 M100,60 L160,20"))
};

// Wall Sit
EXERCISE_SVG['Wall Sit'] = {
  a: fig(head(60,50) + torso("M60,65 L60,100 L90,100 L90,175") + limb("M90,100 L110,100 L110,175") + `<<rectrect x="30" y="40" width="4" height="150" opacity="0.2"/>`),
  b: fig(head(60,50) + torso("M60,65 L60,100 L90,100 L90,175") + limb("M90,100 L110,100 L110,175") + `<<rectrect x="30" y="40" width="4" height="150" opacity="0.2"/>`)
};

// Push-Ups
EXERCISE_SVG['Push-Ups'] = {
  a: fig(head(50,100) + torso("M55,105 L140,125 L170,150") + limb("M55,105 L55,145") + limb("M140,125 L170,150")),
  b: fig(head(50,100) + torso("M55,105 L140,125 L170,150") + limb("M55,105 L50,130 L50,150") + limb("M140,125 L170,150"))
};

// Crunches
EXERCISE_SVG['Crunches'] = {
  a: fig(head(60,120) + torso("M65,115 Q80,100 100,115") + limb("M100,115 L140,140 L160,145")),
  b: fig(head(60,120) + torso("M65,115 Q80,80 100,95") + limb("M100,95 L140,140 L160,145"))
};

// Step-Up onto Chair
EXERCISE_SVG['Step-Up onto Chair'] = {
  a: fig(head(100,40) + torso("M100,54 L100,120") + limb("M100,120 L125,120 L125,140") + limb("M100,120 L90,160") + `<<rectrect x="110" y="120" width="50" height="40" opacity="0.3"/>`),
  b: fig(head(100,40) + torso("M100,54 L100,120") + limb("M100,120 L125,120 L125,140") + limb("M100,120 L90,160") + `<<rectrect x="110" y="120" width="50" height="40" opacity="0.3"/>`)
};

// Squats
EXERCISE_SVG['Squats'] = {
  a: fig(head(100,40) + torso("M100,54 L100,100") + limb("M100,100 L75,130 L75,175") + limb("M100,100 L125,130 L125,175")),
  b: fig(head(100,40) + torso("M100,54 L100,80") + limb("M100,80 L70,100 L70,175") + limb("M100,80 L130,100 L130,175"))
};

// Tricep Dips
EXERCISE_SVG['Tricep Dips'] = {
  a: fig(head(100,50) + torso("M100,64 L100,130") + limb("M100,130 L120,130 L120,145") + limb("M100,130 L70,160") + `<<rectrect x="110" y="130" width="50" height="10" opacity="0.3"/>`),
  b: fig(head(100,50) + torso("M100,64 L100,130") + limb("M100,130 L120,130 L120,145") + limb("M100,130 L70,160") + `<<rectrect x="110" y="130" width="50" height="10" opacity="0.3"/>`)
};

// Plank
EXERCISE_SVG['Plank'] = {
  a: fig(head(40,110) + torso("M45,115 L150,130") + limb("M45,115 L40,140") + limb("M150,130 L170,150")),
  b: fig(head(40,110) + torso("M45,115 L150,130") + limb("M45,115 L40,140") + limb("M150,130 L170,150"))
};

// High Knees
EXERCISE_SVG['High Knees'] = {
  a: fig(head(100,30) + torso("M100,44 L100,100") + limb("M100,100 L70,70 L75,100") + limb("M100,100 L120,140 L125,175")),
  b: fig(head(100,30) + torso("M100,44 L100,100") + limb("M100,100 L80,50 L90,80") + limb("M100,100 L120,140 L125,175"))
};

// Lunges
EXERCISE_SVG['Lunges'] = {
  a: fig(head(80,40) + torso("M80,54 L80,100") + limb("M80,100 L55,130 L55,175") + limb("M80,100 L110,130 L120,175")),
  b: fig(head(80,40) + torso("M80,54 L80,100") + limb("M80,100 L65,130 L65,175") + limb("M80,100 L115,130 L125,175"))
};

// Push-Up & Rotate
EXERCISE_SVG['Push-Up & Rotate'] = {
  a: fig(head(60,80) + torso("M65,85 L130,120") + limb("M65,85 L60,120 L60,150") + limb("M130,120 L160,150")),
  b: fig(head(60,80) + torso("M65,85 L130,120") + limb("M65,85 L40,50") + limb("M130,120 L160,150"))
};

// Side Plank
EXERCISE_SVG['Side Plank'] = {
  a: fig(head(50,60) + torso("M55,75 L140,130") + limb("M55,75 L40,100 L40,150") + limb("M140,130 L160,150")),
  b: fig(head(50,60) + torso("M55,75 L140,130") + limb("M55,75 L40,100 L40,150") + limb("M140,130 L160,150"))
};

// Bicycle Crunches
EXERCISE_SVG['Bicycle Crunches'] = {
  a: fig(head(60,110) + torso("M65,115 Q90,100 110,115") + limb("M110,115 L130,80 L140,100")),
  b: fig(head(60,110) + torso("M65,115 Q90,100 110,115") + limb("M110,115 L130,130 L140,145"))
};

// Flutter Kicks
EXERCISE_SVG['Flutter Kicks'] = {
  a: fig(head(40,110) + torso("M45,115 L130,115") + limb("M130,115 L160,95 L175,105")),
  b: fig(head(40,110) + torso("M45,115 L130,115") + limb("M130,115 L160,135 L175,125"))
};

// Mountain Climbers
EXERCISE_SVG['Mountain Climbers'] = {
  a: fig(head(45,80) + torso("M50,85 L140,110") + limb("M50,85 L50,120") + limb("M140,110 L160,140")),
  b: fig(head(45,80) + torso("M50,85 L140,110") + limb("M50,85 L50,120") + limb("M140,110 L100,95 L105,120"))
};

// Dead Bug
EXERCISE_SVG['Dead Bug'] = {
  a: fig(head(100,110) + torso("M100,100 L100,60") + limb("M100,90 L70,60") + limb("M100,60 L75,45")),
  b: fig(head(100,110) + torso("M100,100 L100,60") + limb("M100,90 L130,60") + limb("M100,60 L125,45"))
};

// Russian Twists
EXERCISE_SVG['Russian Twists'] = {
  a: fig(head(85,70) + torso("M90,80 L110,110") + limb("M90,85 L60,75")),
  b: fig(head(85,70) + torso("M90,80 L110,110") + limb("M90,85 L120,75"))
};

// Leg Raises
EXERCISE_SVG['Leg Raises'] = {
  a: fig(head(40,110) + torso("M45,115 L130,115") + limb("M130,115 L145,60 L155,50")),
  b: fig(head(40,110) + torso("M45,115 L130,115") + limb("M130,115 L145,110 L155,120"))
};

// Side Plank Left/Right
EXERCISE_SVG['Side Plank Left'] = EXERCISE_SVG['Side Plank'];
EXERCISE_SVG['Side Plank Right'] = EXERCISE_SVG['Side Plank'];

// V-Ups
EXERCISE_SVG['V-Ups'] = {
  a: fig(head(100,100) + torso("M100,105 L100,85 L130,50") + limb("M100,85 L120,70")),
  b: fig(head(100,100) + torso("M100,105 L100,85 L70,50") + limb("M100,85 L80,70"))
};

// Bird Dogs
EXERCISE_SVG['Bird Dogs'] = {
  a: fig(head(60,80) + torso("M65,85 L115,85") + limb("M65,85 L35,65") + limb("M115,85 L150,65")),
  b: fig(head(60,80) + torso("M65,85 L115,85") + limb("M65,85 L35,105") + limb("M115,85 L150,105"))
};

// Superman Hold
EXERCISE_SVG['Superman Hold'] = {
  a: fig(head(50,110) + torso("M55,105 L145,105") + limb("M55,105 L25,85") + limb("M145,105 L175,85")),
  b: fig(head(50,110) + torso("M55,105 L145,105") + limb("M55,105 L25,125") + limb("M145,105 L175,125"))
};

// Arm Circles
EXERCISE_SVG['Arm Circles'] = {
  a: fig(head(100,40) + torso("M100,54 L100,110") + limb("M100,65 L60,65") + limb("M100,65 L140,65")),
  b: fig(head(100,40) + torso("M100,54 L100,110") + limb("M100,65 L40,45") + limb("M100,65 L160,45"))
};

// Diamond Push-Ups
EXERCISE_SVG['Diamond Push-Ups'] = {
  a: fig(head(45,100) + torso("M55,105 L140,125") + limb("M55,105 L65,120 L75,120")),
  b: fig(head(45,100) + torso("M55,105 L140,125") + limb("M55,105 L65,120 L75,120"))
};

// Shoulder Taps
EXERCISE_SVG['Shoulder Taps'] = {
  a: fig(head(45,80) + torso("M50,85 L140,110") + limb("M50,85 L50,120") + limb("M50,85 L65,70")),
  b: fig(head(45,80) + torso("M50,85 L140,110") + limb("M50,85 L50,120") + limb("M50,85 L65,90"))
};

// Wide Push-Ups
EXERCISE_SVG['Wide Push-Ups'] = {
  a: fig(head(45,100) + torso("M55,105 L140,125") + limb("M55,105 L30,130") + limb("M55,105 L80,130")),
  b: fig(head(45,100) + torso("M55,105 L140,125") + limb("M55,105 L30,130") + limb("M55,105 L80,130"))
};

// Pike Push-Ups
EXERCISE_SVG['Pike Push-Ups'] = {
  a: fig(head(140,100) + torso("M135,95 L80,130 L50,150") + limb("M80,130 L80,150")),
  b: fig(head(140,100) + torso("M135,95 L80,130 L50,150") + limb("M80,130 L60,150"))
};

// Plank Up-Downs
EXERCISE_SVG['Plank Up-Downs'] = {
  a: fig(head(42,78) + torso("M50,86 L155,105") + limb("M50,86 L50,115") + limb("M50,86 L65,85")),
  b: fig(head(42,78) + torso("M50,86 L155,105") + limb("M50,86 L50,135") + limb("M50,86 L65,115"))
};

// Inchworms
EXERCISE_SVG['Inchworms'] = {
  a: fig(head(40,150) + torso("M45,145 L140,145") + limb("M45,145 L40,120") + limb("M140,145 L150,165")),
  b: fig(head(40,150) + torso("M45,145 L140,145") + limb("M45,145 L40,90") + limb("M140,145 L150,165"))
};

// Decline Push-Ups
EXERCISE_SVG['Decline Push-Ups'] = {
  a: fig(head(30,90) + torso("M35,95 L130,120") + limb("M35,95 L35,120") + limb("M130,120 L150,140") + `<<rectrect x="130" y="130" width="50" height="30" opacity="0.3"/>`),
  b: fig(head(30,90) + torso("M35,95 L130,120") + limb("M35,95 L35,120") + limb("M130,120 L150,140") + `<<rectrect x="130" y="130" width="50" height="30" opacity="0.3"/>`)
};

// Superman Pulls
EXERCISE_SVG['Superman Pulls'] = {
  a: fig(head(50,110) + torso("M55,105 L145,105") + limb("M55,105 L35,90") + limb("M145,105 L175,85")),
  b: fig(head(50,110) + torso("M55,105 L145,105") + limb("M55,105 L50,80") + limb("M145,105 L175,105"))
};

// Alternating Lunges
EXERCISE_SVG['Alternating Lunges'] = EXERCISE_SVG['Lunges'];

// Glute Bridges
EXERCISE_SVG['Glute Bridges'] = {
  a: fig(head(50,140) + torso("M55,135 L100,80 L145,135") + limb("M100,80 L115,60")),
  b: fig(head(50,140) + torso("M55,135 L100,80 L145,135") + limb("M100,80 L115,60"))
};

// Jump Squats
EXERCISE_SVG['Jump Squats'] = {
  a: fig(head(100,28) + torso("M100,40 L100,85") + limb("M100,85 L75,105") + limb("M100,85 L125,105")),
  b: fig(head(100,28) + torso("M100,40 L100,40") + limb("M100,40 L70,10") + limb("M100,40 L130,10"))
};

// Calf Raises
EXERCISE_SVG['Calf Raises'] = {
  a: fig(head(100,40) + torso("M100,54 L100,120") + limb("M100,120 L95,155")),
  b: fig(head(100,40) + torso("M100,54 L100,120") + limb("M100,120 L100,165"))
};

// Sumo Squats
EXERCISE_SVG['Sumo Squats'] = {
  a: fig(head(100,40) + torso("M100,54 L100,100") + limb("M100,100 L60,130") + limb("M100,100 L140,130")),
  b: fig(head(100,40) + torso("M100,54 L100,80") + limb("M100,80 L60,110") + limb("M100,80 L140,110"))
};

// Single-Leg Deadlift
EXERCISE_SVG['Single-Leg Deadlift'] = {
  a: fig(head(80,50) + torso("M85,65 L120,100") + limb("M120,100 L120,160") + limb("M120,100 L160,60")),
  b: fig(head(80,50) + torso("M85,65 L120,100") + limb("M120,100 L120,160") + limb("M120,100 L160,60"))
};

// Lateral Lunges
EXERCISE_SVG['Lateral Lunges'] = {
  a: fig(head(70,40) + torso("M75,54 L75,100") + limb("M75,100 L45,130") + limb("M75,100 L130,175")),
  b: fig(head(70,40) + torso("M75,54 L75,100") + limb("M75,100 L55,130") + limb("M75,100 L130,175"))
};

// Donkey Kicks
EXERCISE_SVG['Donkey Kicks'] = {
  a: fig(head(50,80) + torso("M55,85 L115,85") + limb("M55,85 L55,110") + limb("M115,85 L150,50")),
  b: fig(head(50,80) + torso("M55,85 L115,85") + limb("M55,85 L55,110") + limb("M115,85 L150,50"))
};

// Curtsy Lunges
EXERCISE_SVG['Curtsy Lunges'] = {
  a: fig(head(100,40) + torso("M100,54 L100,100") + limb("M100,100 L80,130") + limb("M100,100 L130,120")),
  b: fig(head(100,40) + torso("M100,54 L100,100") + limb("M100,100 L80,130") + limb("M100,100 L130,120"))
};

// Squat Hold
EXERCISE_SVG['Squat Hold'] = {
  a: fig(head(100,50) + torso("M100,64 L100,110") + limb("M100,110 L75,110") + limb("M100,110 L125,110")),
  b: fig(head(100,50) + torso("M100,64 L100,110") + limb("M100,110 L75,110") + limb("M100,110 L125,110"))
};

// Rest
EXERCISE_SVG['Rest'] = {
  a: fig(head(100,50) + torso("M100,64 L100,120") + limb("M100,75 L80,90") + limb("M100,120 L90,175")),
  b: fig(head(100,50) + torso("M100,64 L100,120") + limb("M100,75 L80,90") + limb("M100,120 L90,175"))
};
