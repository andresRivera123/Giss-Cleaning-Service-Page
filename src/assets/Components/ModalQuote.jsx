import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";

const styleModal = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 950,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function ModalQuote() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("SUBMIT");
  };

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
      >
        <Box sx={styleModal}>
          <h2 className="subtitle">Get your free quote</h2>
          <p className="paragraph">Fill out the form or call (+1 584 56 69 974)</p>
          <Box component="form"  className="form" onSubmit={handleSubmit}>
            <TextField
            id="name"
            label="Your name"
            type="text"
            variant="outlined"
            fullWidth
            helperText=""
            >

            </TextField>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
