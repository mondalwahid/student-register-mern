import React from 'react';
import './register.styles.css'
import {useFormik} from 'formik'
import * as yup from 'yup';
import { addStudents } from '../api/api'


const initialValues = {
  name: '',
  timezones: '',
  grades: '',
  number: '',
  email: '',
  cities: ''
} 

const Register = () => {

    const handleSubmit = (e) => {
    e.preventDefault();
    alert("Student has been registered")
}

const addUserDetails = async() => {
        await addStudents(values);
        
    }

    const validationSchema = yup.object({
      name: yup.string().required("Student Name is required"),
      grades: yup.string().required("Please enter grades"),
      number: yup.string().required("Please enter Whatsapp number"),
      email: yup.string().email("Enter a valid Email").required("Enter Email"),
      cities: yup.string().required("Please select City"),
      timezones: yup.string().required("Please select Timezone"),
  }) 

    const formik = useFormik({
    validationSchema:validationSchema,
    initialValues: initialValues
  });

  const {setFieldTouched, errors, dirty, setFieldValue, values, touched, isValid} = formik;
    
  return <>
  <div className="main-container">
      <form className='form' onSubmit={handleSubmit} >
      <div className="heading">
      <h3>Register a new Student</h3>
      </div>
      
      <div className='upper-inputs'>
      <p>Personal Details</p> 
      <input name="name" type="text" className={`input-fields ${touched['name'] && Boolean(errors['name']) && 'input-error'} `} placeholder='Enter Student name' value={values['name']} onChange={(e)=> setFieldValue('name',e.target.value)} onBlur={() => setFieldTouched('name') }  />
      {touched['name'] && Boolean(errors['name']) && <p className='err-msg'>{errors.name}</p> }

      <select name="timezones" className={`timezone-selector ${touched['timezones'] && Boolean(errors['timezones']) && 'input-error'} `} value={values['timezones']} onChange={(e)=> setFieldValue('timezones', e.target.value)} onBlur={() => setFieldTouched('timezones') } >
      <option >Select timezone</option>
      <option >(UTC - 5) Eastern Standard Time</option>
      <option >UTC Western European Time</option>
      <option >(UTC + 5:30) Indian Standard Time</option>
      </select >
      {touched['timezones'] && Boolean(errors['timezones']) && <p className='err-msg'>{errors.timezones}</p> }
      </div>
    
      <div className="middle-inputs">
        <div style={{display: 'flex', flexDirection: 'column'}}>
      <input name="grades" type="text" className={`grade-selector ${touched['grades'] && Boolean(errors['grades']) && 'input-error'} `} placeholder='Enter grades' value={values['grades']} onChange={(e)=> setFieldValue('grades',e.target.value)} onBlur={() => setFieldTouched('grades') }   />
      {touched['grades'] && Boolean(errors['grades']) && <p className='err-msg'>{errors.grades}</p> }
      </div>

      <div style={{display: 'flex', flexDirection: 'column'}}>
      <input name="number" type="text" className={`input-number ${touched['number'] && Boolean(errors['number']) && 'input-error'} `} placeholder='Enter Whatsapp Number' value={values['number']} onChange={(e)=> setFieldValue('number',e.target.value)} onBlur={() => setFieldTouched('number')}   />
      {touched['number'] && Boolean(errors['number']) && <p className='err-msg'>{errors.number}</p> }
      </div>
      </div>

      <div className="lower-inputs">
      <input name="email" type="mail" className={`input-fields ${touched['email'] && Boolean(errors['email']) && 'input-error'} `} placeholder='Email' value={values['email']} onChange={(e)=> setFieldValue('email',e.target.value)} onBlur={() => setFieldTouched('email') } />
      {touched['email'] && Boolean(errors['email']) && <p className='err-msg'>{errors.email}</p> }
      <select name="cities" className={`cities-selector ${touched['cities'] && Boolean(errors['cities']) && 'input-error'} `} value={values['cities']} onChange={(e)=> setFieldValue('cities',e.target.value)} onBlur={() => setFieldTouched('cities') } >
      <option  >Choose Cities</option>
      <option  >Newyork</option>
      <option  >Manchester</option>
      <option  >Mumbai</option>
      </select>
      {touched['cities'] && Boolean(errors['cities']) && <p className='err-msg'>{errors.cities}</p> }
      </div>

      <div className="register-button">
      <button disabled={!(isValid && dirty)} onClick={() => addUserDetails()}>Register New Student</button>
      </div>

      </form>
      </div>
  </>;
};

export default Register;
