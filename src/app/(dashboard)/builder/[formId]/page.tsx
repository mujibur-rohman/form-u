import { GetFormById } from "@/actions/form";
import React from "react";
import FormBuilder from "./_components/FormBuilder";

type Props = {
  params: {
    formId: string;
  };
};

async function BuilderFormPage({ params }: Props) {
  const { formId } = params;
  const form = await GetFormById(Number(formId));
  if (!form) {
    throw new Error("Form Not Found");
  }

  return <FormBuilder form={form} />;
}

export default BuilderFormPage;
