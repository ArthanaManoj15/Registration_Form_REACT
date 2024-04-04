import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isUsernameValid, setIsUsernameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const validate = (e) => {
    const { name, value } = e.target;

    if (name === 'username') {
      setUsername(value);
      setIsUsernameValid(!!value);
    } else if (name === 'email') {
      setEmail(value);
      setIsEmailValid(/\S+@\S+\.\S+/.test(value));
    } else if (name === 'password') {
      setPassword(value);
      // Password validation
      const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
      setIsPasswordValid(passwordRegex.test(value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username && !email && !password) {
      alert('Username, email, and password are required');
    } else if (!username) {
      alert('Username is required');
    } else if (!email) {
      alert('Email is required');
    } else if (!password) {
      alert('Password is required');
    } else if (isUsernameValid && isEmailValid && isPasswordValid) {
      alert('Registration successful');
    }
  };

  const handleReset = () => {
    setUsername('');
    setEmail('');
    setPassword('');
    setIsUsernameValid(true);
    setIsEmailValid(true);
    setIsPasswordValid(true);
  };

  return (
    <div className='box'>
      <div className='sub p-5'>

        <form action="" onSubmit={handleSubmit} className='mt-5 w-100 justify-content-center align-items-center d-flex flex-column  rounded shadow bkgrnd'>
          <h2 className='reg'>Registration Form</h2>
          <TextField id='outlined-basic' label='Username' variant='outlined' className='fbox mt-3 w-75 rounded' onChange={validate} name='username' value={username} />

          {!isUsernameValid && <p className='text-danger'>Username is required</p>}
          <TextField id='outlined-basic' label='Email' variant='outlined' className='fbox mt-3 w-75 rounded ' onChange={validate} name='email' value={email} />

          {!isEmailValid && <p className='text-danger'>Invalid email address</p>}

          <TextField id='outlined-basic' label='Password' variant='outlined' className='fbox mt-3 w-75 rounded' onChange={validate} name='password' value={password} type='password' />
          {!isPasswordValid && (
            <p className='text-danger'>
              Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one symbol.
            </p>
          )}

          <div className='d-flex mt-4 mb-3'>
            <Button type='submit' className='w-100 me-3 p-2' variant='contained' color='success'>
              Register
            </Button>
            <Button onClick={handleReset} className='w-100 p-2 text-light border border-light  ' variant='outlined' >
              Reset
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
