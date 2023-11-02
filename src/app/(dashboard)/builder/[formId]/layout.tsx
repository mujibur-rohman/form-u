import React, { ReactNode } from "react";

function LayoutBuilder({ children }: { children: ReactNode }) {
  return <div className="w-full flex-grow">{children}</div>;
}

export default LayoutBuilder;
