import labTestAtHomeImage from '../assets/LabTestAtHome02.jpeg';
import onCall from '../assets/Oncall.png';
import step from '../assets/StepStep.png';
import ivDripImage from '../assets/IvDripImage01.jpeg';

export const BLOG_POSTS = [
  {
    slug: 'iv-drip-at-home-dubai',
    title: 'IV Drips at Home in Dubai: Benefits, Types, Safety, and What to Expect',
    author: 'simshealthcare',
    date: 'April 21, 2026',
    day: '21',
    month: 'Apr',
    category: 'Doctor on Call',
    comments: 'No Comments',
    commentCount: 0,
    excerpt:
      'Dubai’s heat alone can drain you. Add a busy work schedule or a long flight, and your body is running on empty …',
    image: ivDripImage,
  },
  {
    slug: 'home-doctor-visit-dubai-step-by-step-guide',
    title: 'A Step-by-Step Guide to a Home Doctor Visit in Dubai',
    author: 'simshealthcare',
    date: 'April 9, 2026',
    day: '09',
    month: 'Apr',
    category: 'Doctor on Call',
    comments: 'No Comments',
    commentCount: 0,
    excerpt:
      'You’ve woken up with a pounding fever. Or your child hasn’t stopped coughing since midnight. The last thing you want to do …',
    image: step,
  },
  {
    slug: 'conditions-treated-doctor-at-home-dubai',
    title:
      'Common Health Problems That Can Be Treated at Home by a Visiting Doctor in Dubai',
    author: 'simshealthcare',
    date: 'March 26, 2026',
    day: '26',
    month: 'Mar',
    category: 'Doctor on Call',
    comments: 'No Comments',
    commentCount: 0,
    excerpt:
      'You wake up with a fever at midnight. Your child has been vomiting since dinner. You have a pounding headache, a blocked …',
    image:
      'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=800',
  },
  {
    slug: 'doctor-at-hotel-dubai-for-tourists',
    title: 'Fell Sick at Your Hotel in Dubai? Here’s How to Get Medical Help Fast',
    author: 'simshealthcare',
    date: 'March 26, 2026',
    day: '26',
    month: 'Mar',
    category: 'Doctor at Hotel',
    comments: 'No Comments',
    commentCount: 0,
    excerpt:
      'You’re on a trip in Dubai. Everything’s planned, until suddenly, you’re not feeling well. Maybe it’s fever, food poisoning, or just complete …',
    image:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800',
  },
  {
    slug: 'post-surgery-rehabilitation-care-dubai-heal-comfortably-at-home',
    title: 'Post-Surgery & Rehabilitation Care Dubai – Heal Comfortably at Home',
    author: 'simshealthcare',
    date: 'November 20, 2025',
    day: '20',
    month: 'Nov',
    category: 'Uncategorized',
    comments: 'No Comments',
    commentCount: 0,
    excerpt:
      'Recovering after surgery can be stressful, especially when hospital visits are frequent or mobility is limited. SIMS Home Healthcare provides post-surgery and rehabilitation care in Dubai.',
    image:
      'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=800',
  },
  {
    slug: 'lab-tests-at-home-dubai-fast-accurate-convenient',
    title: 'Lab Tests at Home Dubai – Fast, Accurate & Convenient',
    author: 'simshealthcare',
    date: 'November 6, 2025',
    day: '06',
    month: 'Nov',
    category: 'Uncategorized',
    comments: 'No Comments',
    commentCount: 0,
    excerpt:
      'SIMS Home Healthcare makes it easy with lab tests at home in Dubai, ensuring accurate, professional testing without leaving the comfort of your home.',
    image: labTestAtHomeImage,
  },
  {
    slug: 'doctor-on-call-in-dubai-fast-reliable-healthcare-at-your-doorstep',
    title: 'Doctor on Call in Dubai – Fast, Reliable Healthcare at Your Doorstep',
    author: 'simshealthcare',
    date: 'November 1, 2025',
    day: '01',
    month: 'Nov',
    category: 'Uncategorized',
    comments: 'No Comments',
    commentCount: 0,
    excerpt:
      'SIMS Home Healthcare’s doctor on call service in Dubai brings professional medical care directly to your home, hotel, or office—timely, effective, and personalized.',
    image: onCall,
  },
];

export const getBlogPostBySlug = (slug) => {
  const resolved = BLOG_SLUG_ALIASES[slug] || slug;
  return BLOG_POSTS.find((post) => post.slug === resolved) ?? null;
};

export const BLOG_SLUG_ALIASES = {
  'iv-drips-at-home-dubai': 'iv-drip-at-home-dubai',
  'home-doctor-visit-dubai-guide': 'home-doctor-visit-dubai-step-by-step-guide',
  'common-health-problems-treated-at-home-dubai': 'conditions-treated-doctor-at-home-dubai',
  'fell-sick-at-hotel-dubai-medical-help': 'doctor-at-hotel-dubai-for-tourists',
};
