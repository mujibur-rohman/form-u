import { Button } from "@/components/ui/button";
import { ArrowUpFromLineIcon } from "lucide-react";
import React from "react";

function PublishFormButton() {
  return (
    <Button
      variant="outline"
      className="gap-2 text-white bg-gradient-to-r from-orange-400 to-red-400"
    >
      <ArrowUpFromLineIcon className="h-6 w-6" />
      Publish
    </Button>
  );
}

export default PublishFormButton;
