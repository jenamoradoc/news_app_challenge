export const splitText = (text: string | null, maxLength: number = 2) => {
  if (!text) return 'Anonymous';

  const words = text.split(', ');

  const result = words.splice(0, maxLength).join(', ').concat('...');

  return result;
};
