export const extensions = ['webp', 'jpg', 'jpeg', 'png'] as const;
export type Extensions = typeof extensions[number];
