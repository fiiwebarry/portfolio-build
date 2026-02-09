"use client";

import { PopupButton } from "react-calendly";

export default function CalendlyButton() {
  return (
    <PopupButton
      url="https://calendly.com/fiiwebarry"
      rootElement={document.body}
      text="Schedule A Call"
    />
  );
}
