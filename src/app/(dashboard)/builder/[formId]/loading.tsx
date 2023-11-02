import { Loader2Icon } from "lucide-react";
import React from "react";

function LoadingBuilder() {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <Loader2Icon className="animate-spin w-20 h-20 text-border" />
    </div>
  );
}

export default LoadingBuilder;
