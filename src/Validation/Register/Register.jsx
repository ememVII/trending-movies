import { Form, Formik } from 'formik'
import { Fragment, useState } from 'react'
import Input from '../../Components/UI/Input/Input'
import Button from '../../Components/UI/Button/Button'
import * as auth from '../Auth/RegisterAuth'
import Axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom'

export default function Register() {
  const [isLoading, setIsLoading] = useState(false)
  
  const navigate = useNavigate()
  
  const apiLink = process.env.AUTH_URL
  const signUpKey = 'signup'

  async function saveUserData(userData) {
    setIsLoading(true)
    const { data } = await Axios.post(`${apiLink}${signUpKey}`, userData)
    
    if(data.message === 'success') {
      navigate('/login')
      toast.success('Congratulations, your account has been successfully created.')
      setIsLoading(false)
    } else {
      toast.error('Email is already registered')
      setIsLoading(false)
    }
  }

  return (
    <Fragment>
      <div className="w-75 m-auto mt-3">
        <h1>Register :</h1>
        <Formik
          initialValues={{
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            age: 0,
            confirmPassword: '',
            acceptTerms: false,
          }}
          validationSchema={auth.RegisterScheme}
          onSubmit={saveUserData}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="row">
                <Input
                  type="text"
                  name="first_name"
                  label="First Name :"
                  placeholder="First Name"
                  inputfield={'true'}
                />
                <Input
                  type="text"
                  name="last_name"
                  label="Last Name :"
                  placeholder="Last Name"
                  inputfield={'true'}
                />
                <Input
                  type="number"
                  name="age"
                  label="Age :"
                  placeholder="Age"
                  inputfield={'true'}
                />
                <Input
                  type="email"
                  name="email"
                  label="Email :"
                  placeholder="Email"
                  inputfield={'true'}
                />
                <Input
                  type="password"
                  name="password"
                  label="Password :"
                  placeholder="Password"
                  inputfield={'true'}
                />
                <Input
                  type="password"
                  name="confirmPassword"
                  label="Confirm Password :"
                  placeholder="Confirm Password"
                  inputfield={'true'}
                />
                <Input
                  type='checkbox'
                  name='acceptTerms'
                  label='Accept Terms and Conditions'
                  checkbox={'true'}
                />
              </div>
            
            <div className='accountExistence text-center'>
              <p>Already have an account ? <Link to={'/login'}>Sign in</Link></p>
            </div>

              <div className="btns m-auto d-flex justify-content-end">
                <Button type="submit" disabled={isSubmitting} className="btn_register mt-3 mx-3">
                  {isLoading ? <i className="fa-solid fa-spinner fa-spin"></i> : 'Register'}
                </Button>
                <Button type="reset" className="btn_reset mt-3">
                  Reset
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="light"
      />

    </Fragment>
  )
}
