import rootMain, { stories } from "../../../../.storybook/main";

// Use the following syntax to add addons!
// rootMain.addons.push('');
stories.push(...["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"]);

export default rootMain;
