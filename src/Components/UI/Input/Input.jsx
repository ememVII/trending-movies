import { ErrorMessage, useField } from 'formik'
import './Input.css'

export default function Input({ label, ...props }) {
  const [field, meta] = useField(props)

  const isValid = meta.touched && !meta.error && 'is-valid'
  const isInValid = meta.touched && meta.error && 'is-invalid'
  
  const inputClasses = props.inputfield && 'form-control form-control-sm input-field'
  const checkBoxClasses = props.checkbox && 'float-start me-2 checkBox'
  
  return (
    <>
      <div className={`my-2 col-md-6 ${props.checkbox && 'col-md-12'}`}>
        <label htmlFor={field.name} className={`mb-2 input-label`}>
          {label}
        </label>
        <input
          {...field}
          {...props}
          id={field.name}
          className={`${inputClasses} ${checkBoxClasses} ${isValid} ${isInValid}`}
        />

        <ErrorMessage component="div" name={field.name} className='errorMessage'></ErrorMessage>
      </div>
    </>
  )
}
