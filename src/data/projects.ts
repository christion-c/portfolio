import type { Project } from '../types/portfolio';

// Case studies rendered by ProjectCard in the Projects section, in display order
export const projects: Project[] = [
  {
    id: 'thinktwice',
    title: 'ThinkTwice',
    tagline: 'Don’t just track where your money went. See where it’s taking you.',
    role: 'Back end & infrastructure — one of three engineers',
    problem:
      'Budgeting apps are rear-view mirrors. They tell you that you spent $35 on coffee last week, which you already knew, and which is too late to act on.',
    built:
      'A cross-platform web and mobile app that separates essential spending from discretionary and runs machine-learning models over the transaction history to project where current habits land. That $35 coffee week becomes a forecast of roughly $140 by month end, surfaced while there is still time to change it. The interface is built to be ADHD-friendly: information in manageable pieces, patterns surfaced without shaming.',
    tags: ['TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Docker', 'Firebase', 'React Native', 'Expo', 'Python'],
    meta: 'Atlas School capstone · presented on demonstration day',
    liveUrl: 'https://thinktwice.site',
    sourceUrl: 'https://github.com/christion-c',
    imageUrl: '/projects/thinktwice.png',
  },
  {
    id: 'okcelticharp',
    title: 'Oklahoma Celtic Harpers',
    tagline: 'A live site for a real community, maintained solo.',
    role: 'Sole developer — built, owned, and maintained',
    problem:
      'A community music organization had no public home — nowhere for someone curious about the Celtic harp to find a concert, locate a teacher, or get sheet music.',
    built:
      'The organization’s website, built from code: events and workshop listings, a directory of teachers and performers, community information, and a downloadable sheet-music library. I own the domain and keep the site current as events change. It has actual users, and if it goes down there is nobody else to fix it.',
    tags: ['React', 'TypeScript'],
    meta: 'Live and in production',
    liveUrl: 'https://okcelticharp.org',
    imageUrl: '/projects/okcelticharp.png',
  },
  {
    id: 'cafe-pos',
    title: 'Full-Stack Café POS',
    tagline: 'I built a point-of-sale system. Then I started supporting them in production.',
    role: 'Full-stack developer',
    problem:
      'A café needed order and transaction workflows: menu management, order entry, and the data model underneath both.',
    built:
      'A full point-of-sale platform in Node and Express over SQL, exposed through REST APIs, with data models and CRUD operations for consistent menu management. The reason it stayed on this site: I now support enterprise POS, payment terminal, and store hardware systems overnight at QuikTrip. I have built this kind of system from scratch and I have been the person paged when one fails at 3 a.m.',
    tags: ['Node.js', 'Express', 'SQL', 'REST APIs'],
    meta: 'December 2024',
    sourceUrl: 'https://github.com/christion-c',
  },
];
