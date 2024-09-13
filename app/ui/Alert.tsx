import React from "react";
import { Alert, Button } from "@material-tailwind/react";
 
export default function AlertDismissible() {
  const [open, setOpen] = React.useState(true);
 
  return (
    <>
      {!open && (
        <Button className="absolute" onClick={() => setOpen(true)}>
          Show Alert
        </Button>
      )}
      <Alert open={open} onClose={() => setOpen(false)}>
        "The Ueats app is under development, please check back in about 1 month's time for our full offerings. Click 'Ok' to see what we've built so far."
      </Alert>
    </>
  );
}