import SubmitButton from "./index";

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  title: "Submit Button",
  component: SubmitButton,
  parameters: { actions: { handles: ["click"] } },
};

const button = (args) => <SubmitButton {...args} />;

export const Primary = button.bind({});
Primary.args = {
  backgroundColor: "green",
  text: "submitdsfve",
};

export const Secondary = button.bind({});
Secondary.args = {
  backgroundColor: "red",
  text: "Urgent button",
};
