import { Form } from "@prisma/client";
import React from "react";

type Props = {
  form: Form;
};

function FormBuilder({ form }: Props) {
  return (
    <main className="flex flex-col w-full">
      <nav className="flex justify-between border-b-2 p-4 gap-3 items-center">
        <h2 className="truncate font-medium">
          <span className="text-muted-foreground mr-2">Form:</span>
          {form.name}
        </h2>
        <div className="flex items-center gap-2"></div>
      </nav>
    </main>
  );
}

export default FormBuilder;
