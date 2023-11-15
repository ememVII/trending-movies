import * as Yup from 'yup'

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+-=]).{8,16}$/gm

export const RegisterScheme = Yup.object().shape({
  first_name: Yup.string()
    .trim()
    .min(2, 'Name must be between (2,16) characters')
    .max(16, 'Name must be between (2,16) characters')
    .required('First Name is Required'),
  last_name: Yup.string()
    .trim()
    .min(2, 'Name must be between (2,16) characters')
    .max(16, 'Name must be between (2,16) characters')
    .required('Last Name is Required'),
  email: Yup.string().email('Invalid Email').required('Email is Required'),
  age: Yup.number().min(18, 'Users must be 18 years or older').required('Please confirm your age'),
  password: Yup.string()
    .matches(
      passwordRegex,
      'Password Must be between (8,16) characters and must include at least one upper case letter, one lower case letter, and one numeric digit'
    ).required('Password is Required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords do not match')
    .required('Password confirmation is Required'),
    acceptTerms: Yup.bool().oneOf([true], 'You must accept the terms and conditions')
})
