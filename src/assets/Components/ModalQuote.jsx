import { useState } from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import {
  Autocomplete,
  Button,
  TextField,
  TextareaAutosize,
} from "@mui/material";

const styleModal = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  width: { xs: "90%", sm: "70%", md: "60%", lg: "50%", xl: "40%" },
};

export default function ModalQuote() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const names = ["John", "Mary", "Alice", "Bob", "Charlie"];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailValidation(email)) {
      setError({
        error: true,
        message: "Incorrect email",
      });
      return;
    }

    setError({
      error: false,
      message: "",
    });
  };

  const emailValidation = (email) => {
    // expresion regular para validar email
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return regex.test(email);
  };

  const [email, setEmail] = useState("");
  const [error, setError] = useState({
    error: false,
    message: "",
  });

  return (
    <div>
      <button className="quote__button" onClick={handleOpen}>
        Get a free quote
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="modal"
      >
        <Box sx={styleModal}>
          <h2 className="subtitle modal__title">Get your free quote</h2>
          <p className="paragraph">
            Fill out the form or call (+1 584 56 69 974)
          </p>
          <Box component="form" className="form" onSubmit={handleSubmit}>
            <TextField
              id="name"
              name="name"
              label="Name"
              type="text"
              variant="outlined"
              InputLabelProps={{
                style: { fontSize: "1.8rem" },
              }}
              InputProps={{
                style: { fontSize: "1.8rem" },
              }}
              required
              fullWidth
            />
             <TextField
              id="number"
              name="number"
              label="Number"
              type="number"
              variant="outlined"
              InputLabelProps={{
                style: { fontSize: "1.8rem" },
              }}
              InputProps={{
                style: { fontSize: "1.8rem" },
              }}
              required
              fullWidth
            />
            <TextField
            className="single-column"
              label="Email"
              name="email"
              variant="outlined"
              id="email"
              type="email"
              InputLabelProps={{
                style: { fontSize: "1.8rem" },
              }}
              InputProps={{
                style: { fontSize: "1.8rem" },
              }}
              fullWidth
              required
              error={error.error}
              helperText={
                <span style={{ fontSize: "1.6rem" }}>{error.message}</span>
              }
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
           
            <TextField
              className="single-column"
              id="outlined-multiline-static"
              label="Your message"
              multiline
              InputLabelProps={{
                style: { fontSize: "1.8rem" },
              }}
              InputProps={{
                style: { fontSize: "1.8rem" },
              }}
              maxRows={4}
              defaultValue="Default Value"
              variant="outlined"
              
            />
            <button
              type="submit"
              className="quote__button single-column"
            >
              Send now
            </button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
