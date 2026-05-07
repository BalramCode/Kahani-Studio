// Mock data for Kahani Studio portfolio
import MangalPhoto from "./assets/mangal.png";
import redEye from "./assets/red montage eye.png"
import lantan from "./assets/lantan.png"
import photography from "./assets/photography.png"
import forest from "./assets/forest.png"
import heroImg from "./assets/heroImg.png"
import KSlogo from "./assets/KS logo.png"
import pisachini from "./assets/pisachini.png"
import mahim from "./assets/mahim.png"
import raghu from "./assets/raghu.png"
import shiv from "./assets/shiv.png"
import ram from "./assets/ram.png"
export const ASSETS = {
  // logo: "https://customer-assets.emergentagent.com/job_7e5a08f5-53c8-4b14-8921-403d23a3179c/artifacts/7j5spae3_image.png",
  logo:KSlogo,
  posters: {
    // raghu: "https://customer-assets.emergentagent.com/job_7e5a08f5-53c8-4b14-8921-403d23a3179c/artifacts/ped2xf5q_image.png",
    raghu:raghu,
    // shiv:raghu,
    // shiv: "https://customer-assets.emergentagent.com/job_7e5a08f5-53c8-4b14-8921-403d23a3179c/artifacts/ekzd6cb3_image.png",
    shiv:shiv,
    // redEye: "https://customer-assets.emergentagent.com/job_kahani-productions/artifacts/mwgm030c_Screenshot%202026-05-01%20150323.png",
    redEye:redEye,
    // maaLantern: "https://customer-assets.emergentagent.com/job_kahani-productions/artifacts/0pnl8oz9_image.png",
    maaLantern:lantan,
    // mangal: "https://customer-assets.emergentagent.com/job_7e5a08f5-53c8-4b14-8921-403d23a3179c/artifacts/djzhyufj_image.png",
    mangal:MangalPhoto,
    // shetty: "https://customer-assets.emergentagent.com/job_kahani-productions/artifacts/mq31h4gi_Screenshot%202026-05-01%20150021.png",
    shetty:mahim,
    // swing: "https://customer-assets.emergentagent.com/job_kahani-productions/artifacts/a5lwjsky_image.png",
    ram:ram,
    // forest: "https://customer-assets.emergentagent.com/job_7e5a08f5-53c8-4b14-8921-403d23a3179c/artifacts/gfuhb1gq_image.png",
    forest:forest,
    // pisachini: "https://customer-assets.emergentagent.com/job_kahani-productions/artifacts/vm4l6fc5_image.png",
    pisachini,pisachini
  },
};

export const HERO = {
  title: "KAHANI STUDIO",
  headline: "STORYTELLING THAT COMMANDS ATTENTION.",
  sub: "Provocative Narratives. Elite Retention. Global Reach.",
  videoId: "5bSlHjvLTmY", // MAA teaser
};

export const ANALYTICS = [
  {
    id: "retention",
    label: "Audience Retention",
    value: "60%+",
    detail:
      "MAA: The Unsolved Mystery holds 60%+ audience attention across a 13.5-minute narrative.",
  },
  {
    id: "duration",
    label: "Avg. View Duration",
    value: "8–9 min",
    detail:
      "Viewers stay locked in for 8 to 9 minutes — a category-leading watch time on YouTube.",
  },
  {
    id: "organic",
    label: "Organic Views on MAA",
    value: "20K+",
    detail:
      "Zero paid promotion. 20,000+ organic views — proof of authentic, culture-driven pull.",
  },
];

export const FILMS = [
  {
    id: "maa",
    title: "MAA",
    subtitle: "The Unsolved Mystery",
    status: "RELEASED",
    year: "2025",
    runtime: "13.5 min",
    tagline:
      "A prayer answered in the wrong voice. A mystery that refuses to close its eyes.",
    description:
      "A provocative mystery thriller that turned a small-town whisper into a 20K+ view phenomenon — sustained by a 60%+ retention curve.",
    poster: "raghu",
    accent: "#C9161E",
    links: [
      { label: "Full Film", url: "https://youtu.be/1-k14DA_BLc", type: "film" },
      { label: "Teaser", url: "https://youtu.be/5bSlHjvLTmY", type: "teaser" },
      { label: "Trailer", url: "https://youtu.be/120vgKyHxFE", type: "trailer" },
    ],
  },
  {
    id: "roop",
    title: "ROOP",
    subtitle: "Is she a curse… or the reason curse exists?",
    status: "IN PRODUCTION",
    year: "2026",
    runtime: "TBA",
    tagline:
      "Where the forest keeps its secrets, and the swing never stops moving.",
    description:
      "A folk-horror in production — directed by Anushka Mishra, produced by Saswat Kumar Mishra. Teaser drops 06 April 2026.",
    poster: "pisachini",
    accent: "#F5B800",
    links: [
      { label: "Announcement", url: "https://youtu.be/f0lmuT9OHac", type: "teaser" },
      { label: "Teaser", url: "https://youtu.be/ujPBCFefs9g", type: "teaser" },
      { label: "Trailer", url: "https://youtu.be/1WURJqP8GC0", type: "trailer" },

    ],
  },
];

export const GALLERY = [
  { id: "g1", title: "RAGHU", film: "MAA", img: "raghu", span: "tall" },
  { id: "g2", title: "SHIV", film: "MAA", img: "shiv", span: "normal" },
  { id: "g3", title: "RAM", film: "ROOP", img: "ram", span: "tall" },
  { id: "g4", title: "MAA 23.09.25", film: "MAA", img: "maaLantern", span: "normal" },
  { id: "g5", title: "MANGAL", film: "ROOP", img: "mangal", span: "tall" },
  { id: "g6", title: "SHETTY", film: "ROOP", img: "shetty", span: "normal" },
  { id: "g7",  title: "RED EYE / ROOP", film: "ROOP", img: "redEye", span: "tall"},
  { id: "g8", title: "DARK WOODS", film: "ROOP", img: "forest", span: "normal" },
  { id: "g9", title: "PISACHINI", film: "ROOP", img: "pisachini", span: "tall" },
];

export const careers = [
  {
    id: "cine-001",
    role: "Cinematographer",
    department: "Camera",
    type: "Project-based",
    location: "Bhawanipatna / On-Location",
    blurb:
      "You see in light and shadow before others see at all. We need a DOP comfortable with low-light, lantern, and natural-source storytelling.",
  },
  {
    id: "writer-001",
    role: "Screenwriter",
    department: "Writers Room",
    type: "Retainer",
    location: "Remote / India",
    blurb:
      "Provocative narratives. Folk roots. Modern grammar. Bring us a voice we cannot ignore.",
  },
  {
    id: "editor-001",
    role: "Film Editor",
    department: "Post Production",
    type: "Project-based",
    location: "Remote",
    blurb:
      "You cut for tension, not for time. DaVinci Resolve / Premiere Pro fluency. Sound-design instinct preferred.",
  },
  {
    id: "sound-001",
    role: "Sound Designer",
    department: "Post Production",
    type: "Project-based",
    location: "Remote",
    blurb:
      "Atmosphere, foley, and original score collaboration. The silence between the lines is your stage.",
  },
  {
    id: "colorist-001",
    role: "Colorist",
    department: "Post Production",
    type: "Project-based",
    location: "Remote",
    blurb:
      "Help us define the Ember & Obsidian look across every frame. DaVinci Resolve mastery required.",
  },
];

export const careerDepartments = [
  "All",
  "Camera",
  "Writers Room",
  "Post Production",
];

export const SOCIALS = {
  youtube: "https://www.youtube.com/@KahanixStudio",
  instagram: "https://www.instagram.com/kahanixstudio",
  facebook:
    "https://www.facebook.com/people/thekahanixstudio/61577355502093/?mibextid=ZbWKwL",
  email: "kahanixstudio@gmail.com",
};

export const STUDIO = {
  name: "Kahani Studio",
  base: "Bhawanipatna, Odisha — India",
  est: "EST. 2024",
};
