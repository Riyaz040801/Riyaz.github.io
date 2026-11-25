import type { ImageMetadata } from 'astro';
import atWork1 from '../assets/moments/at-work-1.jpg';
import atWork2 from '../assets/moments/at-work-2.jpg';
import familyDay1 from '../assets/moments/family-day-1.jpg';
import familyDay2 from '../assets/moments/family-day-2.jpg';
import familyDay3 from '../assets/moments/family-day-3.jpg';
import award from '../assets/moments/vrtualizar-award.jpg';

const post = (id: string) => `https://www.linkedin.com/feed/update/urn:li:activity:${id}/`;

export interface Moment {
  date: string;
  tag: string;
  title: string;
  text: string;
  images: { src: ImageMetadata; alt: string }[];
  link?: string;
}

// Newest first. Events, milestones and memories from the journey.
export const moments: Moment[] = [
  {
    date: 'Mar 2026',
    tag: 'Milestone',
    title: 'Promoted to Junior 3D Artist',
    text: 'Moved from intern to Junior 3D Artist on the Immersive Tech team at Maersk Training, building VR training products every day.',
    images: [
      { src: atWork1, alt: 'Syed working at his desk in the Maersk Training office' },
      { src: atWork2, alt: 'A workstation with a 3D modeling application open on the monitors' },
    ],
    link: post('7439868197375479808'),
  },
  {
    date: 'Early 2026',
    tag: 'Showcase',
    title: 'VR demo at Town Hall 2026',
    text: 'Presented our team’s VR training work to the leadership of Maersk Training and talked about where immersive learning is headed.',
    images: [],
  },
  {
    date: 'Nov 2025',
    tag: 'Event',
    title: 'Family Day — VR for real people',
    text: 'Represented Maersk Training at the Maersk Chennai GSC Family Day: guiding visitors of all ages through our VR experiences for the first time outside the studio.',
    images: [
      { src: familyDay1, alt: 'Syed guiding a visitor wearing a VR headset' },
      { src: familyDay2, alt: 'Syed helping a child use VR controllers' },
      { src: familyDay3, alt: 'A visitor trying a VR headset while seated' },
    ],
    link: post('7396038137866588160'),
  },
  {
    date: 'Oct 2025',
    tag: 'Milestone',
    title: 'Joined Maersk Training',
    text: 'Started as a 3D Artist intern on the Immersive Tech team, working on VR-based training.',
    images: [],
  },
  {
    date: 'May 2025',
    tag: 'Award',
    title: 'VRtualizAR’25 — Unreal Development',
    text: 'Recognized for outstanding performance in Unreal Development at the VRtualizAR’25 Skill Test, an in-house competition by Monolith Research & Training Labs.',
    images: [{ src: award, alt: 'Certificate of recognition for Unreal Development at VRtualizAR’25' }],
    link: post('7341071227626627073'),
  },
];
