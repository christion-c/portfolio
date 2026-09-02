import type { SkillGroup } from '../types/portfolio';

export const skillGroups: SkillGroup[] = [
  {
    category: 'Back end & platform',
    note: 'What I owned on a shipped application.',
    items: ['TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'REST APIs', 'Docker', 'AWS (S3, EC2, CloudFront)', 'Firebase Auth'],
    emphasis: true,
  },
  {
    category: 'Client & data',
    note: 'Enough to build the whole product and talk to the people who do.',
    items: ['React', 'React Native', 'Expo', 'JavaScript', 'Python', 'HTML', 'CSS', 'Vite'],
  },
  {
    category: 'Foundations',
    note: 'Compiled, statically typed, manual memory.',
    items: ['C', 'C++', 'C#'],
  },
  {
    category: 'Production operations',
    note: 'Three years of it, at company scale — not a course.',
    items: ['Incident triage', 'Severity classification', 'Monitoring filters', 'Escalation judgment', 'Linux', 'Git'],
    emphasis: true,
  },
];
