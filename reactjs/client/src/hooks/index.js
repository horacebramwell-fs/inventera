import { useState } from 'react';

const useValidate = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return {
    validated,
    handleSubmit,
  };
};

export default useValidate;
