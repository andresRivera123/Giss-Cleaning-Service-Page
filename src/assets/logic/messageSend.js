export const handleCallClick = () => {
  window.location.href = `tel:19735733532`;
};

export const handleEmailClick = () => {
  window.location.href = "mailto:gisscleaningservices@gmail.com";
};

export const handleClickWhatssap = () => {
  const message = encodeURIComponent("Hi Giss! :)");
  const phoneNumber = "19735733532";
  window.location.href = `https://wa.me/${phoneNumber}?text=${message}`;
};
