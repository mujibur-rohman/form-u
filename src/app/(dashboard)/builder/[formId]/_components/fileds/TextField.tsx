"use client";

import { ElementsType, FormElements } from "../FormElements";

const type: ElementsType = "TextField";

export const TextFormFieldElement: FormElements = {
  type,
  designerComponent: () => <div>Designer</div>,
  formComponent: () => <div>Form</div>,
  propertiesComponent: () => <div>Props</div>,
};
