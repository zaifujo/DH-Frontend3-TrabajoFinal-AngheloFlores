export const validateText = (value) => {
  return value.trim().length >= 3;
};

export const validateEmail = (value) => {
  const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regexEmail.test(value);
};

export const validateSubject = (value) => {
  const options = ["general" , "support", "feedback", "other"];
  return options.some(option => option === value);
}