import { TextFormFieldElement } from "./fileds/TextField";

export type ElementsType = "TextField";

export type FormElements = {
  type: ElementsType;
  designerComponent: React.FC;
  formComponent: React.FC;
  propertiesComponent: React.FC;
};

type FormElementsType = {
  [key in ElementsType]: FormElements;
};

export const FormElements: FormElementsType = {
  TextField: TextFormFieldElement,
};
