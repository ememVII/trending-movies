import { Form, Formik } from 'formik'
import { Fragment, useState } from 'react'
import Input from '../../Components/UI/Input/Input'
import Button from '../../Components/UI/Button/Button'
import * as auth from '../Auth/LoginAuth'
import Axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { saveUserData, setToken } from '../../store/userSlice'

export default function Login() {
  const dispatch = useDispatch()
  
  const [isLoading, setIsLoading] = useState(false)
  
  const navigate = useNavigate()
  
  const apiLink = process.env.AUTH_URL
  const signInKey = 'signin'

  async function sendUserData(userData) {
    setIsLoading(true)
    const { data } = await Axios.post(`${apiLink}${signInKey}`, userData)
    
    if(data.message === 'success') {
      navigate('/home')
      toast.success('Congratulations, your account has been successfully created.')
      setIsLoading(false)
      
      // Save userToken in localStorage
      dispatch(setToken(data.token))
      // Save userData in store
      dispatch(saveUserData(data.token))
    } else {
      toast.error("Email or Password you entered is not valid, please try again.")
      setIsLoading(false)
    }
  }

  return (
    <Fragment>
      <div className="w-75 m-auto mt-3">
        <h1>Login :</h1>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={auth.SignInScheme}
          onSubmit={sendUserData}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="row">
                <Input
                  name="email"
                  label="Email :"
                  type="email"
                  placeholder="Email"
                  inputfield={'true'}
                />
                <Input
                  name="password"
                  label="Password :"
                  type="password"
                  placeholder="Password"
                  inputfield={'true'}
                />
              </div>
              
              <div className='accountExistence text-center mt-3'>
                <p>Don't have an account ? <Link to={'/register'}>Sign up</Link></p>
              </div>
              
              <div className="btns m-auto d-flex justify-content-end">
                <Button type="submit" disabled={isSubmitting} className="btn_register mt-3 mx-3">
                  {isLoading ? <i className="fa-solid fa-spinner fa-spin"></i> : 'Login'}
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
