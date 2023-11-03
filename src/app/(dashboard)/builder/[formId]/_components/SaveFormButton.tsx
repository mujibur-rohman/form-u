import { Button } from "@/components/ui/button";
import { SaveIcon } from "lucide-react";
import React from "react";

function SaveFormButton() {
  return (
    <Button variant="outline" className="gap-2">
      <SaveIcon className="h-6 w-6" />
      Save
    </Button>
  );
}

export default SaveFormButton;
