import * as Yup from 'yup'

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+-=]).{8,16}$/gm

export const SignInScheme = Yup.object().shape({
    email: Yup.string().email('Invalid Email').required('Email is Required'),
    password: Yup.string().matches(passwordRegex, 'Password Must be between (8,16) characters and must include at least one upper case letter, one lower case letter, and one numeric digit').required('Password is Required')
})