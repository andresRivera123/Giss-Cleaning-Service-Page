import { useState } from "react";
import * as React from "react";
import emailjs from "@emailjs/browser";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";

import { useRef } from "react";
import Swal from "sweetalert2";

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
  const form = useRef();
  const [formValues, setFormValues] = useState({
    user__name: "",
    user__number: "",
    user__email: "",
  });

  const handleChange = (e) => {
    console.log(e.target.name);
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const [disabledButton, setDisabledButton] = useState(false);

  const validateForm = () => {
    return (
      formValues.user__name.trim() !== "" &&
      formValues.user__number.trim() !== "" &&
      /\S+@\S+\.\S+/.test(formValues.user__email) &&
      formValues.message.trim() !== ""
    );
  };

  const handleSubmit = (e) => {
    setDisabledButton(true);
    e.preventDefault();
    if (validateForm()) {
      emailjs
        .sendForm(
          "service_ndezzve",
          "template_aw0yvlb",
          form.current,
          "FInT8GQNvVmcIns9d"
        )
        .then(() => {
          setOpen();
          setDisabledButton(false);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Message sent successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
        });
    }
  };

  const [error] = useState({
    error: false,
    message: "",
  });

  return (
    <div>
      <button className="quote__button" onClick={() => setOpen(true)}>
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
          <Box
            component="form"
            ref={form}
            className="form"
            onSubmit={handleSubmit}
          >
            <TextField
              id="name"
              name="user__name"
              label="Name"
              type="text"
              value={formValues.user__name}
              variant="outlined"
              InputLabelProps={{
                style: { fontSize: "1.8rem" },
              }}
              InputProps={{
                style: { fontSize: "1.8rem" },
              }}
              required
              fullWidth
              onChange={handleChange}
            />
            <TextField
              id="number"
              name="user__number"
              label="Number"
              type="text"
              value={formValues.user__number}
              variant="outlined"
              InputLabelProps={{
                style: { fontSize: "1.8rem" },
              }}
              InputProps={{
                style: { fontSize: "1.8rem" },
              }}
              required
              fullWidth
              onChange={handleChange}
            />
            <TextField
              className="single-column"
              id="email"
              label="Email"
              name="user__email"
              type="email"
              value={formValues.user__email}
              variant="outlined"
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
              onChange={handleChange}
            />
            <TextField
              id="outlined-multiline-static"
              className="single-column"
              label="Menssage"
              name="message"
              value={formValues.message}
              multiline
              rows={3}
              InputLabelProps={{
                style: { fontSize: "1.8rem" },
              }}
              InputProps={{
                style: { fontSize: "1.8rem" },
              }}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="quote__button single-column"
              value="SEND EMAIL"
              disabled={disabledButton}
            >
              Send now
            </button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
