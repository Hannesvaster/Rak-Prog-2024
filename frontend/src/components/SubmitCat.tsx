import { Box, Button, Stack, TextField, Snackbar } from "@mui/material";
import React, { useState } from "react";

type SubmitCatProps = {
  fetchCats: () => void;
};

const SubmitCat = ({ fetchCats }: SubmitCatProps) => {
  const [name, setName] = useState("");
  const [open, setOpen] = useState(false);

  const handleSnackbarClose = () => {
    setOpen(false);
  };

  const submitCat = async () => {
    try {
      const response = await fetch("http://localhost:8080/cats", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
      });

      if (response.ok) {
        setOpen(true);
      }
    } catch (error) {
      console.warn(error);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    submitCat();
    setTimeout(fetchCats, 100);
    setName(""); // Clear input after submit
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <form onSubmit={handleSubmit}>
        <Stack>
          <TextField
            label="Cat name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <Button type="submit">Add</Button>
        </Stack>
      </form>
      <Snackbar
        open={open}
        onClose={handleSnackbarClose}
        message="Cat added successfully!"
        autoHideDuration={3000}
      />
    </Box>
  );
};

export default SubmitCat;
