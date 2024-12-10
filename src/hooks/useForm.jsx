import { useState } from "react";

export function useForm(initialValue) {
  const [data, setValues] = useState(initialValue);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setValues({
      ...data,
      [name]: value,
    });
  }

  const resetForm = () => {
    setValues(initialValue);
  };

  return { data, handleChange, resetForm };
}