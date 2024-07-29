import React from "react";
import { DateInput } from "../components/DateComponents/DateInput";

export default {
  title: "App Test",
  component: DateInput,
  argTypes: {
    format: { control: "text" },
    className: { control: "text" },
  },
};

export const App = (args) => <DateInput {...args} />;

App.args = {
  format: "",
  className: "",
};
