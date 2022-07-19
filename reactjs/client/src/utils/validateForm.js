const validateForm = (e, setValidated) => {
  const form = e.currentTarget;
  if (form.checkValidity() === false) {
    e.preventDefault();
    e.stopPropagation();
  }

  setValidated(true);
};

export default validateForm;
