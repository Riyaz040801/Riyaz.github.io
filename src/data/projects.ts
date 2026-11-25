import type { ImageMetadata } from 'astro';

// 3D / Blender
import carGarage from '../assets/work/3d/car-garage.png';
import carRear from '../assets/work/3d/car-rear.png';
import carFront from '../assets/work/3d/car-front.png';
import watchPodium from '../assets/work/3d/watch-podium.png';
import watchLilac from '../assets/work/3d/watch-lilac.png';
import watchStudio from '../assets/work/3d/watch-studio.png';
import watchPair from '../assets/work/3d/watch-pair.png';
import earbudsTeal from '../assets/work/3d/earbuds-teal.png';
import earbudsDark from '../assets/work/3d/earbuds-dark.png';
import katana from '../assets/work/3d/katana.png';
import helmet from '../assets/work/3d/helmet.png';
// Unreal Engine
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

export type Category = '3d' | 'unreal' | 'design' | 'sketches';

export const categories: { id: Category; label: string }[] = [
  { id: '3d', label: '3D & Product' },
  { id: 'unreal', label: 'Unreal Engine' },
  { id: 'design', label: 'Graphic Design' },
  { id: 'sketches', label: 'Sketches' },
];

export interface Project {
  title: string;
  category: Category;
  tools: string[];
  summary: string;
  /** First image is the cover. `alt` describes what is in the picture. */
  images: { src: ImageMetadata; alt: string }[];
  /** Wide cards span two columns on large screens. */
  wide?: boolean;
}

// Order here = order on the page. Put your strongest work first.
export const projects: Project[] = [
  {
    title: 'Sports Car — Cinematic Renders',
    category: '3d',
    tools: ['Blender'],
    summary: 'A blue supercar staged in a lit garage tunnel, plus moody low-key studio shots.',
    wide: true,
    images: [
      { src: carGarage, alt: 'Blue sports car in a garage with strip lights along the walls and ceiling' },
      { src: carRear, alt: 'Rear three-quarter view of the sports car with glowing tail lights on black' },
      { src: carFront, alt: 'Front view of the sports car emerging from darkness with headlights on' },
    ],
  },
  {
    title: 'Dive Watch — Product Visualization',
    category: '3d',
    tools: ['Blender'],
    summary: 'Steel dive watch shown in pastel set designs and clean studio lighting.',
    images: [
      { src: watchPodium, alt: 'Steel watch on a pastel podium with a yellow arch' },
      { src: watchLilac, alt: 'Watch leaning against a lilac block' },
      { src: watchStudio, alt: 'Watch on white with a soft reflection' },
      { src: watchPair, alt: 'Two watches on a glossy dark surface' },
    ],
  },
  {
    title: 'Wireless Earbuds — Product Visualization',
    category: '3d',
    tools: ['Blender'],
    summary: 'Purple earbuds and charging case in a vertical, social-ready format.',
    images: [
      { src: earbudsTeal, alt: 'Two purple earbuds floating on a teal background' },
      { src: earbudsDark, alt: 'Purple earbuds and charging case on a dark background' },
    ],
  },
  {
    title: 'Desert Ruins — Environment',
    category: 'unreal',
    tools: ['Unreal Engine 5'],
    summary: 'A sunlit canyon with a ruined stone arch, framed as a third-person game scene.',
    wide: true,
    images: [
      { src: desert1, alt: 'Character facing a giant stone arch in a desert canyon' },
      { src: desert2, alt: 'Wider view of the desert canyon and ruined arch' },
    ],
  },
  {
    title: 'Katana — Stylized Prop',
    category: '3d',
    tools: ['Blender'],
    summary: 'A curved blade with a wrapped handle and floral guard, lit against a warm gradient.',
    images: [{ src: katana, alt: 'Katana with a dark curved blade and gold floral guard on a red gradient' }],
  },
  {
    title: 'Forest Lake — Landscape',
    category: 'unreal',
    tools: ['Unreal Engine 5'],
    summary: 'An open landscape with a lake, rolling hills and dense foliage.',
    images: [{ src: forestLake, alt: 'Lake in a valley with green hills and a large tree in the foreground' }],
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
    tools: ['Photoshop'],
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
