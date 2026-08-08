export const student = { name: 'Ananya', currentStreak: 12, longestStreak: 15, completedDays: 11, totalDays: 60 };

export const challenge = {
  title: 'Build a Responsive Landing Page', estimatedTime: '35 min', difficulty: 'Intermediate', status: 'in-progress',
  description: 'Build a responsive landing page for a fictional startup. It should feel clear and polished on both mobile and desktop.',
  requirements: ['Responsive layout', 'Semantic HTML', 'Mobile navigation', 'Clear CTA', 'Accessible color contrast', 'Clean component structure'],
  skills: ['Responsive design', 'UI hierarchy', 'CSS layout', 'Accessibility'],
};

export const achievements = [
  { icon: '🔥', title: '7 Day Streak', note: 'Consistency unlocked' },
  { icon: '🚀', title: 'First Week Complete', note: '7 builds shipped' },
  { icon: '💻', title: '10 Builds Shipped', note: 'Proof in public' },
];

export const initialChecklist = [
  { id: 'read', label: "Read today's task", complete: true },
  { id: 'understand', label: 'Understand requirements', complete: true },
  { id: 'build', label: 'Build', complete: false },
  { id: 'github', label: 'Push to GitHub', complete: false },
  { id: 'linkedin', label: 'Share on LinkedIn', complete: false },
];

export const edgeStates = {
  firstDay: { currentStreak: 0, message: 'Your first small build starts a powerful habit.' },
  missedDay: { status: 'missed', message: 'A missed day happens. Pick up with one focused mission today.' },
  emptyProfile: { name: '', message: 'Choose a track to begin your first challenge.' },
};
