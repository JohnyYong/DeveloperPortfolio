import grabityImg from "./assets/media/Grabity.webp";
import obeliskImg from "./assets/media/Obelisk.webp";
import azureImg from "./assets/media/AzureVania-poster.webp";
import azureVid from "./assets/media/AzureVania.mp4";
import rabinImg from "./assets/media/RabinAI-poster.webp";
import rabinVid from "./assets/media/RabinAI.mp4";
import knossosImg from "./assets/media/DungeonOfKnossos.webp";
import reflectionImg from "./assets/media/ReflectionAfterTheEnd.webp";
import battleImg from "./assets/media/BattleMania-poster.webp";
import battleVid from "./assets/media/BattleMania.mp4";
import humanImg from "./assets/media/HumanisticGameAI.webp";
import carveImg from "./assets/media/SeamlessCarve-poster.webp";
import carveVid from "./assets/media/SeamlessCarve.mp4";
import mlImg from "./assets/media/ML-Agent-poster.webp";
import mlVid from "./assets/media/ML-Agent.mp4";
import pairImg from "./assets/media/PairShare.webp";
import companionImg from "./assets/media/AICompanion.svg";
import photoImg from "./assets/media/Johny.webp";

export const profile = {
  name: "Johny Yong",
  fullName: "Johny Yong Jun Siang",
  location: "Singapore",
  email: "Johnyyong10@gmail.com",
  github: "https://github.com/JohnyYong",
  linkedin: "https://www.linkedin.com/in/johnyyong/",
  resume: "./JohnyYongResume.pdf",
  photo: photoImg,
};

// Shown as a rotating "class" under the name
export const roles = ["Game Programmer", "Game Designer", "Systems Tinkerer", "JRPG Enjoyer"];

export const stats = [
  { value: "12", label: "games, tools & AI projects made" },
  { value: "9", label: "teammates led on a custom-engine game" },
  { value: "Top 4", label: "in a cohort-wide A* speed challenge" },
  { value: "5+", label: "years making games in C, C++ & C#" },
];

export const pillars = [
  {
    icon: "⌨",
    color: "cyan",
    title: "I code it",
    text: "Custom C++ engines, ECS architecture, game AI and tools. The stuff under the hood that keeps a game smooth.",
  },
  {
    icon: "✦",
    color: "pink",
    title: "I design it",
    text: "Levels, combat, difficulty curves and story beats, always built around how it feels in the player's hands.",
  },
  {
    icon: "⚑",
    color: "yellow",
    title: "I lead it",
    text: "Led teams of up to 9 programmers, artists and designers, keeping scope sane and the build playable.",
  },
];

// Featured games
export const featured = [
  {
    id: "grabity",
    title: "Grabity",
    color: "yellow",
    tagline: "Physics-driven top-down survival",
    meta: ["Custom C++ engine", "Team of 9", "Sep 2024 – Apr 2025"],
    role: "Product Manager · Gameplay & Engine Programmer",
    image: grabityImg,
    idea:
      "A survival game where physics is the core of the gameplay, running on an engine our team built from scratch.",
    design: [
      "Led core gameplay development, iterating rapidly with a 9-person team.",
      "Owned the roadmap, scope and milestones as Product Manager.",
    ],
    code: [
      "Built the Entity Component System, Game Object Factory and Tag/Layer Manager.",
      "Wrote the FMOD audio system; the engine editor runs on ImGui.",
      "Documented it all in MkDocs, published live on GitHub Pages.",
    ],
    tech: ["C++", "OpenGL", "ECS", "FMOD", "ImGui", "Lua"],
    links: [
      { label: "Source", href: "https://github.com/JohnyYong/Grabity" },
      { label: "Engine docs", href: "https://johnyyong.github.io/GrabityDocumentation/" },
    ],
  },
  {
    id: "azurevania",
    title: "AzureVania",
    color: "pink",
    tagline: "Co-op mini Metroidvania",
    meta: ["Unity", "Team of 4", "2020"],
    role: "Level Designer · Enemy AI · Networking",
    image: azureImg,
    video: azureVid,
    idea: "A 2D Metroidvania you explore with a friend, in real-time online co-op.",
    design: [
      "Designed level layouts that reward exploration while still working as combat arenas.",
      "Designed the enemy behaviours players fight through.",
    ],
    code: [
      "Implemented multiplayer and state sync with Forge Networking.",
      "Programmed the enemy AI.",
    ],
    tech: ["Unity", "C#", "Forge Networking", "Level Design"],
    links: [{ label: "Source", href: "https://github.com/JohnyYong/AzureVania" }],
  },
  {
    id: "knossos",
    title: "Dungeon of Knossos",
    color: "lime",
    tagline: "Procedural roguelike",
    meta: ["Unity", "Solo", "Code + design + art"],
    role: "Everything — design, code and art",
    image: knossosImg,
    idea: "Every restart builds a brand-new labyrinth of up to 30 rooms. No two runs share a map.",
    design: [
      "Tuned difficulty to ramp with distance from spawn: gentle near the entrance, nasty in the depths.",
      "Drew all of the game's art myself.",
    ],
    code: ["Wrote the procedural room generator that builds and connects each dungeon."],
    tech: ["Unity", "C#", "Procedural Generation", "Photoshop"],
    links: [{ label: "Source", href: "https://github.com/JohnyYong/DungeonOfKnossos" }],
  },
  {
    id: "obelisk",
    title: "Obelisk",
    color: "cyan",
    tagline: "VR game · Final Year Project",
    meta: ["Unity VR", "Multi-discipline team", "3 months"],
    role: "Team Leader · Programming Lead",
    image: obeliskImg,
    idea:
      "A VR game made with artists and designers. Midway, COVID-19 forced us off PlayStation VR, so we moved it to Oculus Quest.",
    design: [
      "Led the team through the platform pivot and re-scoped the game to still ship on time.",
      "Coordinated with artists to get their work into VR looking right.",
    ],
    code: ["Built VR input handling, grid-based interactions and custom shaders for Oculus Quest."],
    tech: ["Unity", "C#", "Oculus Quest", "PS4 Devkit", "Shaders"],
    links: [
      { label: "Gameplay videos", href: "https://www.youtube.com/playlist?list=PL9g68ppKwXMmE_Nh0aGJ9Th2hFns0YCvn" },
      { label: "Project files", href: "https://drive.google.com/drive/u/0/folders/14Y1LOmjX-xWqlVCej7PvYdkGI0lrqGw8" },
    ],
  },
];

export const categories = ["All", "Games", "Game Design", "AI & Tech"];

export const projects = [
  {
    id: "companion",
    title: "Local AI Companion",
    category: "AI & Tech",
    period: "2026",
    image: companionImg,
    contain: true,
    summary: "A voice-enabled character AI that chats, remembers you and talks back, all on my own PC.",
    details: [
      "Built a clean voice dataset by filtering ~1,700 clips with speaker embeddings (pyannote), keeping only the target speaker.",
      "Cloned the voice with GPT-SoVITS and served it as a local TTS server, with Japanese text clean-up and sentence splitting.",
      "Experimented with LoRA fine-tuning of Llama 3.1 8B on character dialogue; the live chat runs a 12B model through Ollama with a detailed persona prompt.",
      "Gave her long-term memory with ChromaDB: facts, details about the user, emotions and reflections, pulled into each reply.",
      "Built an \"AI Council\" that asks Groq, Gemini and a local Qwen in parallel for hard questions, plus web search and a Japanese voice mode.",
      "Ran it all across Docker containers with a one-click start script and a browser player for text and audio.",
    ],
    note: "Personal project based on a visual novel character. The voice data and voice model belong to their owners, so they stay private. This page shows only the architecture.",
    tech: ["Python", "LoRA", "GPT-SoVITS", "ChromaDB", "Ollama", "Docker"],
    links: [],
  },
  {
    id: "gameai",
    title: "Game AI Systems",
    category: "AI & Tech",
    image: rabinImg,
    video: rabinVid,
    summary: "A*, behaviour trees and terrain analysis, all built from scratch in C++.",
    details: [
      "Optimised A* so hard it placed Top 4 in a cohort-wide speed challenge set by Prof. Steve Rabin.",
      "Behaviour Trees and Finite State Machines with clean transitions.",
      "Terrain analysis so agents pick smarter routes.",
    ],
    tech: ["C++", "A*", "Behaviour Trees", "FSM"],
    links: [{ label: "Source", href: "https://github.com/JohnyYong/Game-AI-Projects" }],
  },
  {
    id: "reflection",
    title: "Reflection After The End",
    category: "Game Design",
    image: reflectionImg,
    summary: "A story puzzle game set in a court between Heaven and Hell.",
    details: [
      "You wake up before a divine Judge and must recover three memories you buried.",
      "Each memory lives in a place twisted by denial and guilt, explored through puzzles and environmental storytelling.",
      "The verdict comes from your own words, or from someone you wronged.",
    ],
    tech: ["Unreal Engine", "C++", "Narrative Design"],
    links: [
      { label: "Source", href: "https://github.com/JohnyYong/ReflectionAfterTheEnd" },
      { label: "Build", href: "https://drive.google.com/file/d/1e6QFiiWt70sOMYA3uGe2WXDk386Qgy9Z/view?usp=drive_link" },
    ],
  },
  {
    id: "pairshare",
    title: "Pair & Share",
    category: "Game Design",
    image: pairImg,
    summary: "A card game that turns networking anxiety into real conversations.",
    details: [
      "Paired question cards for students and industry folk. Real talk instead of awkward small talk.",
      "Designed from user interviews, personas and journey maps, then refined through playtests.",
      "Built for career fairs and meetups.",
    ],
    tech: ["Game Design", "UX Research", "Playtesting", "Figma"],
    links: [
      { label: "Video", href: "https://youtu.be/8S3q4YANx48" },
      { label: "Figma", href: "https://www.figma.com/design/xhsGfj4xojf8BDrHD88ALz/UDE-Figma-board-game?node-id=6-27&node-type=canvas&t=GDC6kq1vbRVjVARo-0" },
    ],
  },
  {
    id: "battlemania",
    title: "BattleMania",
    category: "Games",
    period: "2020",
    image: battleImg,
    video: battleVid,
    summary: "A solo deep-dive into how 2D fighting games tick.",
    details: [
      "Explored melee hitbox / hurtbox combat, the core of how a fighting game feels.",
      "Online multiplayer with Photon.",
      "Art assets are third-party.",
    ],
    tech: ["Unity", "C#", "Photon", "Combat Design"],
    links: [{ label: "Source", href: "https://github.com/JohnyYong/BattleMania" }],
  },
  {
    id: "humanist",
    title: "Humanistic Game AI",
    category: "AI & Tech",
    image: humanImg,
    summary: "NPCs that sense, think and act more like people.",
    details: [
      "Team of 3 — I built the Sense layer (what NPCs notice) and the shared AI Blackboard.",
      "Explored how NPCs sharing information makes them more believable.",
    ],
    tech: ["Unity", "C#", "Game AI"],
    links: [{ label: "Source", href: "https://github.com/JohnyYong/AIBehaviorAndInformationSharingResearch" }],
  },
  {
    id: "ml",
    title: "Reinforcement Learning Turtle",
    category: "AI & Tech",
    period: "Jan 2026",
    image: mlImg,
    video: mlVid,
    summary: "Teaching a turtle to play with Unity ML-Agents.",
    details: [
      "Designed its observations, actions and rewards. Reward design is a lot like game design!",
      "Trained with PyTorch and iterated until the behaviour settled.",
    ],
    tech: ["Unity", "C#", "Python", "PyTorch"],
    links: [{ label: "Source", href: "https://github.com/JohnyYong/ML-Agents-Research-Turtle" }],
  },
  {
    id: "carve",
    title: "Seam Carving",
    category: "AI & Tech",
    image: carveImg,
    video: carveVid,
    summary: "Resizes images while keeping the important parts intact.",
    details: [
      "Implemented the dynamic-programming algorithm plus a visualiser.",
      "Sped it up by flattening the data into a cache-friendly 1D array, and set up CI/CD.",
    ],
    tech: ["C++", "Dynamic Programming", "CI/CD"],
    links: [{ label: "Source", href: "https://github.com/JohnyYong/AlgoAnalysis_SeamlessCarving" }],
  },
];

export const questLog = [
  {
    title: "Mentor — SIT Community Challenge",
    org: "Singapore Institute of Technology",
    period: "Oct 2025",
    text: "Spent 5 days coaching student teams building prototypes with AI posture and image recognition, covering code, UI/UX and debugging.",
  },
  {
    title: "Software Engineer Intern",
    org: "YJP Surveyors",
    period: "Jun – Aug 2020",
    text: "Built a HoloLens mixed-reality app in Unity that shows pipes hidden behind walls and floors, with voice control and LiDAR point clouds. The prototype was commended for its effectiveness.",
  },
  {
    title: "B.Sc. (Hons) Interactive Media & Game Development",
    org: "DigiPen Institute of Technology / SIT",
    period: "2023 – 2027",
    text: "Engines, game AI, graphics and team game projects.",
  },
  {
    title: "Diploma in Game Development & Technology",
    org: "Nanyang Polytechnic",
    period: "2018 – 2021",
    text: "Where it started. Led the VR Final Year Project, Obelisk.",
  },
];

export const loadout = [
  { group: "Code", color: "cyan", items: ["C++", "C", "C#", "Python", "Lua", "JavaScript", "Java", "Kotlin"] },
  { group: "Engines & frameworks", color: "cyan", items: ["Custom C++ engines", "Unity", "Unreal Engine", "OpenGL", "ImGui", "Qt (C++)"] },
  { group: "Design", color: "pink", items: ["Level design", "Combat design", "Difficulty tuning", "Narrative design", "Playtesting", "UX research"] },
  { group: "Systems", color: "yellow", items: ["ECS", "Game AI", "Pathfinding", "Procedural generation", "Multiplayer (Photon, Forge)"] },
  { group: "XR", color: "lime", items: ["Meta Quest 3", "CAVE systems", "Oculus Quest", "PS4 VR", "HoloLens"] },
  { group: "AI / ML", color: "cyan", items: ["LoRA fine-tuning", "RAG memory (ChromaDB)", "Voice cloning (GPT-SoVITS)", "Ollama", "Unity ML-Agents", "PyTorch"] },
  { group: "Tools", color: "pink", items: ["Git", "GitHub Actions", "Docker", "Visual Studio", "Figma", "Photoshop", "Maya", "FMOD"] },
];

export const sideQuests = [
  { icon: "⚔", text: "Playing JRPGs, then pulling apart why their systems work" },
  { icon: "✈", text: "Travelling and soaking up new cultures" },
  { icon: "", text: "Novels and self-improvement books" },
  { icon: "", text: "Using AI and automation to speed up creative work" },
];

// Teaser for upcoming projects
export const comingSoon = {
  title: "New levels unlocking",
  text: "Projects built with Qt C++, CAVE immersive systems and Meta Quest 3 VR are on the way.",
  tags: ["Qt (C++)", "CAVE", "Meta Quest 3"],
};
