// import { getStyleGuides } from '../helpers/load-style-guides.js';
// const styleGuideText = await getStyleGuides();
// Style guides can be used in prompt by ${styleGuideText}

export const strictAngular20 = ({ task }) => ({
  messages: [{
    role: 'system',
    content: {
      type: 'text',
      text: `
        You MUST read every file under resource://style-guides/** and FOLLOW it before writing code.
        Then follow resource://angular-docs/** as secondary source.
        Prefer simplest, declarative code.
        ---
        TASK: ${task}
      `
    }
  }]
});