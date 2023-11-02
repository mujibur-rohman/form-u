"use client";

import { Button } from "@/components/ui/button";
import React, { useEffect } from "react";

function ErrorBuilder({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex w-full h-full flex-col items-center justify-center gap-4">
      <h2 className="text-4xl">Something went wrong!</h2>
      <Button
        onClick={() => {
          reset();
        }}
      >
        Try Again
      </Button>
    </div>
  );
}

export default ErrorBuilder;
