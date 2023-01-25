export const left = {
     offscreen: { x: -800, opcity: 0 },
     onscreen: {
          x: 0,
          opcity: 1,
          transition: { type: "spring", bounce: 0.4, duration: 2 },
     },
};

export const right = {
     offscreen: { x: 800, opcity: 0 },
     onscreen: {
          x: 0,
          opcity: 1,
          transition: { type: "spring", bounce: 0.4, duration: 2 },
     },
};

export const text = {
     offscreen: { y: 300, opcity: 0 },
     onscreen: {
          y: 0,
          opcity: 1,
          rotate: [0, 10, 0],
          transition: { type: "spring", bounce: 0.4, duration: 2 },
     },
}

export const imgAnimate = {
     offscreen: { y: 300, opcity: 0 },
     onscreen: {
          y: 0,
          opcity: 1,
          transition: { type: "spring", bounce: 0.4, duration: 2 },
     },
}