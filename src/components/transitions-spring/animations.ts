export const ACCORDION_VERTICAL = {
  from: {
    height: 0,
    opacity: 0,
  } as any,
  enter: [
    {
      height: 'auto',
    },
    {
      opacity: 1,
    },
  ] as any,
  leave: [
    {
      opacity: 0,
    },
    {
      height: 0,
    },
  ] as any,
};