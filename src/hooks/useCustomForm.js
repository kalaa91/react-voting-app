import { useState, useCallback } from "react";
export const useCustomForm = (initialState = {}, callback) => {
  const [inputs, setValues] = useState(initialState);
  const handleSubmit = useCallback(
    (event) => {
      event && event.preventDefault();
      callback && callback();
    },
    [callback]
  );
  const handleInputChange = useCallback((event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  }, []);
  return {
    handleSubmit,
    handleInputChange,
    inputs,
  };
};
