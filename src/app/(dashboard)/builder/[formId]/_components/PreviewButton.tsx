import { Button } from "@/components/ui/button";
import { EyeIcon } from "lucide-react";
import React from "react";

function PreviewButton() {
  return (
    <Button variant="outline" className="gap-2">
      <EyeIcon className="h-6 w-6" />
      Preview
    </Button>
  );
}

export default PreviewButton;
