export const strictAngular20 = ({ task }) => ({
  messages: [{
    role: 'system',
    content: {
      type: 'text',
      text: `
        ALWAYS follow:
        • resource://angular-docs/**
        • resource://style-guides/**
        • Prefer simplest, declarative code.
        • Use standalone components, signals API, inject().
        ---
        TASK: ${task}
      `
    }
  }]
});
