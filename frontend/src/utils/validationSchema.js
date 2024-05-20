import * as Yup from 'yup'

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please type a valid email')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Minimum of 6 character')
    .required('Password is required')
})
