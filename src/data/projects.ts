import type { ImageMetadata } from 'astro';

// 3D / Blender
import carGarage from '../assets/work/3d/car-garage.png';
import carRear from '../assets/work/3d/car-rear.png';
import carFront from '../assets/work/3d/car-front.png';
import ambassador1 from '../assets/work/3d/ambassador-car-1.jpg';
import ambassador2 from '../assets/work/3d/ambassador-car-2.jpg';
import ambassador3 from '../assets/work/3d/ambassador-car-3.jpg';
import ambassador4 from '../assets/work/3d/ambassador-car-4.jpg';
import watchPodium from '../assets/work/3d/watch-podium.png';
import watchLilac from '../assets/work/3d/watch-lilac.png';
import watchStudio from '../assets/work/3d/watch-studio.png';
import watchPair from '../assets/work/3d/watch-pair.png';
import earbudsTeal from '../assets/work/3d/earbuds-teal.png';
import earbudsDark from '../assets/work/3d/earbuds-dark.png';
import katana from '../assets/work/3d/katana.png';
import helmet from '../assets/work/3d/helmet.png';
import torch from '../assets/work/3d/stylized-torch.jpg';
// Games & Unreal Engine
import intoTheHollow from '../assets/work/games/into-the-hollow.jpg';
import desert1 from '../assets/work/unreal/desert-ruins-1.png';
import desert2 from '../assets/work/unreal/desert-ruins-2.png';
import forestLake from '../assets/work/unreal/forest-lake.png';
// Graphic design
import bakery1 from '../assets/work/design/bakery-brochure-1.png';
import bakery2 from '../assets/work/design/bakery-brochure-2.png';
import studio1 from '../assets/work/design/studio-brochure-1.png';
import studio2 from '../assets/work/design/studio-brochure-2.png';
import diwali from '../assets/work/design/diwali-poster.png';
import nerdLogo from '../assets/work/design/nerd-studio-logo.png';
// Sketches
import sketchEye from '../assets/work/sketches/sketch-2577.jpg';
import sketch0097 from '../assets/work/sketches/sketch-0097.jpg';
import sketch0293 from '../assets/work/sketches/sketch-0293.jpg';
import sketch0411 from '../assets/work/sketches/sketch-0411.jpg';
import sketch0412 from '../assets/work/sketches/sketch-0412.jpg';
import sketch0436 from '../assets/work/sketches/sketch-0436.jpg';
import sketch1430 from '../assets/work/sketches/sketch-1430.jpg';

export type Category = 'games' | '3d' | 'unreal' | 'design' | 'sketches';

export const categories: { id: Category; label: string }[] = [
  { id: 'games', label: 'Games & VR' },
  { id: '3d', label: '3D & Product' },
  { id: 'unreal', label: 'Environments' },
  { id: 'design', label: 'Graphic Design' },
  { id: 'sketches', label: 'Sketches' },
];

const post = (id: string) => `https://www.linkedin.com/feed/update/urn:li:activity:${id}/`;

export interface Project {
  title: string;
  category: Category;
  tools: string[];
  summary: string;
  /** First image is the cover. Leave empty for video-only work (shows a styled video card). */
  images: { src: ImageMetadata; alt: string }[];
  /** Optional link, e.g. a video on LinkedIn. */
  link?: { label: string; href: string };
  /** Year or month shown on the card. */
  date?: string;
  /** Wide cards span two columns on large screens. */
  wide?: boolean;
}

// Order here = order on the page. Put your strongest work first.
export const projects: Project[] = [
  {
    title: 'Sports Car — Cinematic Lighting',
    category: '3d',
    tools: ['Blender', 'Lighting', 'Look-dev'],
    summary:
      'A lighting study focused on mood, composition and depth: a supercar staged in a lit garage tunnel plus low-key studio shots.',
    date: '2025',
    wide: true,
    images: [
      { src: carGarage, alt: 'Blue sports car in a garage with strip lights along the walls and ceiling' },
      { src: carRear, alt: 'Rear three-quarter view of the sports car with glowing tail lights on black' },
      { src: carFront, alt: 'Front view of the sports car emerging from darkness with headlights on' },
    ],
    link: { label: 'View post', href: post('7297270324109131778') },
  },
  {
    title: 'Into the Hollow — 2.5D Side-scroller',
    category: 'games',
    tools: ['Unreal Engine 5', 'Blueprints', 'Level Design'],
    summary:
      'A 2.5D platformer with running, jumping, ledge grabbing, slope sliding and a checkpoint & save system. Stealth, enemy AI and puzzles in progress.',
    date: '2025',
    images: [{ src: intoTheHollow, alt: 'Grey-box level of a side-scrolling 3D game with the player character on a platform' }],
    link: { label: 'Watch gameplay', href: post('7363226908123193344') },
  },
  {
    title: 'Fruit Cutter — VR Game',
    category: 'games',
    tools: ['Unreal Engine 5.5', 'VR', 'Blueprints'],
    summary:
      'A fruit-slicing VR game built with a teammate, taken from first prototype through five rounds of gameplay and UX improvements.',
    date: '2025',
    images: [],
    link: { label: 'Watch dev progress', href: post('7304425933384429568') },
  },
  {
    title: 'Ambassador Car — Game-ready Model',
    category: '3d',
    tools: ['Blender', 'Substance Painter'],
    summary:
      'A tribute to one of India’s most iconic cars, modeled for realism while staying optimized for game-ready or cinematic use.',
    date: '2025',
    images: [
      { src: ambassador1, alt: 'Clay render of a white Ambassador car, front three-quarter view' },
      { src: ambassador2, alt: 'Ambassador car from a high side angle' },
      { src: ambassador3, alt: 'Front view of the Ambassador car' },
      { src: ambassador4, alt: 'Rear three-quarter view of the Ambassador car' },
    ],
    link: { label: 'View post', href: post('7309634513477808128') },
  },
  {
    title: 'Dive Watch — Product Visualization',
    category: '3d',
    tools: ['Blender', 'Animation'],
    summary: 'A steel timepiece modeled, textured and animated, shown in pastel sets and clean studio lighting.',
    date: '2024–25',
    images: [
      { src: watchPodium, alt: 'Steel watch on a pastel podium with a yellow arch' },
      { src: watchLilac, alt: 'Watch leaning against a lilac block' },
      { src: watchStudio, alt: 'Watch on white with a soft reflection' },
      { src: watchPair, alt: 'Two watches on a glossy dark surface' },
    ],
    link: { label: 'Watch animation', href: post('7312509062674374656') },
  },
  {
    title: 'Mythic Desert — Environment',
    category: 'unreal',
    tools: ['Unreal Engine 5', 'Auto Materials', 'Post-process'],
    summary:
      'A Black Myth: Wukong-inspired canyon with a ruined stone arch, exploring lighting, auto materials and post-process atmosphere.',
    date: '2025',
    wide: true,
    images: [
      { src: desert1, alt: 'Character facing a giant stone arch in a desert canyon' },
      { src: desert2, alt: 'Wider view of the desert canyon and ruined arch' },
    ],
    link: { label: 'View post', href: post('7296106090285408256') },
  },
  {
    title: 'Stylized Wooden Torch — Game Asset',
    category: '3d',
    tools: ['Blender', 'Substance Painter', 'Sculpting'],
    summary:
      'My first game-ready asset: high-poly sculpt baked onto an optimized low-poly mesh, with stylized fantasy texturing.',
    date: '2025',
    images: [{ src: torch, alt: 'Grey model of a stylized torch handle on a round base' }],
    link: { label: 'Watch turntable', href: post('7320493494316187649') },
  },
  {
    title: 'Wireless Earbuds — Product Visualization',
    category: '3d',
    tools: ['Blender', 'UV Unwrapping', 'Texturing'],
    summary: 'Purple earbuds and charging case with precise texture mapping, in a vertical, social-ready format.',
    date: '2024',
    images: [
      { src: earbudsTeal, alt: 'Two purple earbuds floating on a teal background' },
      { src: earbudsDark, alt: 'Purple earbuds and charging case on a dark background' },
    ],
  },
  {
    title: 'Gym Shaker Bottle — Product Animation',
    category: '3d',
    tools: ['Blender', 'Animation', 'Rendering'],
    summary: 'A personal product visualization from concept to final render, including modeling, texturing, lighting and animation.',
    date: '2025',
    images: [],
    link: { label: 'Watch animation', href: post('7311437351145074690') },
  },
  {
    title: 'Forest Lake — Environment',
    category: 'unreal',
    tools: ['Unreal Engine 5'],
    summary: 'An open landscape with a lake, rolling hills and dense foliage, built to explore real-time world building.',
    date: '2024',
    images: [{ src: forestLake, alt: 'Lake in a valley with green hills and a large tree in the foreground' }],
    link: { label: 'Watch fly-through', href: post('7227486005501509632') },
  },
  {
    title: 'Katana — Stylized Prop',
    category: '3d',
    tools: ['Blender'],
    summary: 'A curved blade with a wrapped handle and floral guard, lit against a warm gradient.',
    images: [{ src: katana, alt: 'Katana with a dark curved blade and gold floral guard on a red gradient' }],
  },
  {
    title: 'Military Helmet — Prop',
    category: '3d',
    tools: ['Blender'],
    summary: 'A camouflage combat helmet with a playing card tucked in the strap.',
    images: [{ src: helmet, alt: 'Camouflage military helmet on a dark grey background' }],
  },
  {
    title: 'Bakery Brochure',
    category: 'design',
    tools: ['Photoshop'],
    summary: 'A two-sided brochure for a home bakery.',
    images: [
      { src: bakery1, alt: 'Brochure front for Mom’s Bakery with photos of pastries' },
      { src: bakery2, alt: 'Brochure back for Mom’s Bakery with a 50% off offer' },
    ],
  },
  {
    title: 'Photo Studio Brochure',
    category: 'design',
    tools: ['Photoshop'],
    summary: 'A black-and-white brochure listing a photography studio’s services.',
    images: [
      { src: studio1, alt: 'Studio brochure with portrait photography and contact details' },
      { src: studio2, alt: 'Studio brochure listing wedding, birthday, model and outdoor shoots' },
    ],
  },
  {
    title: 'Diwali Poster',
    category: 'design',
    tools: ['Photoshop'],
    summary: 'A festive social media poster.',
    images: [{ src: diwali, alt: 'Happy Diwali poster with three oil lamps on a deep blue background' }],
  },
  {
    title: 'Nerd Studio — Logo',
    category: 'design',
    tools: ['Illustrator'],
    summary: 'A wordmark for a gaming studio, built around a game controller shape.',
    images: [{ src: nerdLogo, alt: 'Nerd Studio logo shaped like a game controller' }],
  },
  {
    title: 'Graphite Portraits & Studies',
    category: 'sketches',
    tools: ['Pencil'],
    summary: 'Hand-drawn portraits and eye studies.',
    images: [
      { src: sketchEye, alt: 'Pencil drawing of an eye in profile' },
      { src: sketch0412, alt: 'Pencil drawing of an eye and eyebrow' },
      { src: sketch0097, alt: 'Pencil portrait of a smiling man in a striped shirt' },
      { src: sketch0293, alt: 'Pencil portrait of a man in a T-shirt' },
      { src: sketch1430, alt: 'Pencil portrait of a man in a jacket' },
      { src: sketch0411, alt: 'Pencil drawing of an anime character in a straw hat' },
      { src: sketch0436, alt: 'Pencil drawing of an anime character' },
    ],
  },
];
