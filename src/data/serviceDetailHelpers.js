export const t = (name, initials, role, location, text) => ({
  name,
  initials,
  role,
  location,
  text,
});

export const step = (title, description, points = []) => ({
  title,
  description,
  points,
});

export const reason = (title, description) => ({ title, description });

export const faq = (question, answer) => ({ question, answer });

export const defaultCta = (title) => ({
  title,
  description:
    'At SIMS Home Healthcare, we provide round-the-clock access to DHA-certified professionals, ensuring you receive expert medical care whenever you need it.',
  buttonText: 'Your Wellness Is Just A Call Away',
});
