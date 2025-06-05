
import logo from './logo.svg';
import './App.css';
import FormExampleone from './FormExampleone';
import FormExampleTwo from './FormExampleTwo';
/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
//class Component
/*import React, {Component} from "react";
export default class Parent extends Component{
  state={
    age:10,
    name:'srilekha'
  }
  render()
  {
    return(
      <div>
        <h1>
          <Child age={this.state.age} name={this.state.name}/>
          </h1>
      </div>
    )
  }
}
class Child extends React.Component{
  render()
  {
    return(
      <div>
        <p>Age:{this.props.age}</p>
        <p>Name:{this.props.name}</p>
      </div>
    )
  }
}*/
/*import React, { useState } from "react";

const ChildComponent = ({ message, count }) => {
  return (
    <div>
      <h2>Child Component</h2>
      <p>Message from Parent: {message}</p>
      <p>Count from Parent: {count}</p>
    </div>
  );
};

const ParentComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Parent Component</h1>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <ChildComponent message="Hello from Parent!" count={count} />
    </div>
  );
};

export default ParentComponent;*/
/*code for clickevent
function Fun1(){
  return(
    <div><ClickEvent/></div>
  )
}
export default Fun1;*/
/*import { useState } from "react";
const ParentClick=()=>{
  const num1=0;
  const [number,setnumber]=useState(0);
  return(
    <div>
      <h1>Button click</h1>
      <button onClick={()=>setnumber(number+1)}>Increment Button</button>
      <button onClick={()=>setnumber(number-1)}>Decrement Button</button>
      <button onClick={()=>setnumber(num1)}>Reset Button</button>
      <ClickEvent number={number}/>
    </div>
  )
}
import ClickEvent from "./ClickEvent";
function App(){
  return(
    <div className="App">
    <ClickEvent/>
  </div>

  );
}
import Resizing  from './Resizing';
function App()
{
  return(
    <div className='App'>
      <Resizing/>
    </div>
    
  )
}

function App()
{
  return(
    <div className='App'>
      <FormExampleone/>
    </div>
  )
}
/*function App()
{
  return(
    <div className='App'>
      <FormExampleTwo/>
    </div>
  )
}
/*import DynamicInputComponent from './DynamicInputComponent';
function App()
{
  return(
    <div className='App'>
      <DynamicInputComponent/>
      </div>
  )
}
import React, { useState } from 'react';

const formConfig = [
  { name: 'name', label: 'Name', type: 'text', required: true },
  { name: 'email', label: 'Email', type: 'email', required: true },
];

function App() {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [errors, setErrors] = useState({});

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Basic validation
    if (value === '') {
      setErrors({ ...errors, [name]: `${name} is required` });
    } else {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newErrors = {};
    formConfig.forEach(field => {
      if (field.required && !formData[field.name]) {
        newErrors[field.name] = `${field.label} is required`;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      console.log('Form Submitted:', formData);
      alert('Form submitted!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {formConfig.map(field => (
        <div key={field.name}>
          <label>{field.label}</label><br />
          <input
            type={field.type}
            name={field.name}
            value={formData[field.name]}
            onChange={handleChange}
          />
          {errors[field.name] && <div style={{ color: 'red' }}>{errors[field.name]}</div>}
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {
  state = {
    isLoggedIn: false,
    userName: 'John',
  };

  toggleLogin = () => {
    this.setState({ isLoggedIn: !this.state.isLoggedIn });
  };

  greetUser = () => {
    alert(`Hello, ${this.state.userName}`);
  };

  render() {
    return (
      <div>
        <h2>{this.state.isLoggedIn ? `Welcome, ${this.state.userName}` : 'Please log in'}</h2>
        <ChildComponent
          greetHandler={this.greetUser}
          toggleLoginHandler={this.toggleLogin}
        />
      </div>
    );
  }
}

export default ParentComponent;
import React, { useState } from 'react';

const formConfig = [
  { name: 'name', label: 'Name', type: 'text', required: true },
  { name: 'email', label: 'Email', type: 'email', required: true },
];

function App() {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [errors, setErrors] = useState({});

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Basic validation
    if (value === '') {
      setErrors({ ...errors, [name]: `${name} is required` });
    } else {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newErrors = {};
    formConfig.forEach(field => {
      if (field.required && !formData[field.name]) {
        newErrors[field.name] = `${field.label} is required`;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      console.log('Form Submitted:', formData);
      alert('Form submitted!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {formConfig.map(field => (
        <div key={field.name}>
          <label>{field.label}</label><br />
          <input
            type={field.type}
            name={field.name}
            value={formData[field.name]}
            onChange={handleChange}
          />
          {errors[field.name] && <div style={{ color: 'red' }}>{errors[field.name]}</div>}
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
}*/
/*import State1 from './State1';
function App()
{
  return(
    <div className='App'>
      <State1/>
      </div>
  )
}
export default App;*/
/*import CounterC from './CounterC';
function App() {
  return (
    <div className='App'>
      
    
     <CounterC/>
    </div>
  );
}
export default App;*/
//Experiment-7
/*
import React, { useEffect, useState } from "react";
import Login from "./Experiment-7/Login";
import ContactUs from "./Experiment-7/ContactUs";
import ProtectedRoute from "./Experiment-7/ProtectedRoute";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(savedUser);
    }
  }, []);

  const handleLogin = (username) => {
    setUser(username);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <div className="max-w-md mx-auto mt-10 shadow-md p-6 border rounded">
      {!user ? (
        <Login onLogin={handleLogin} />
      ) : (
        <ProtectedRoute user={user}>
          <ContactUs onLogout={handleLogout} user={user} />
        </ProtectedRoute>
      )}
    </div>
  );
}

export default App;*/
import React, { useState, useEffect } from 'react';
import Login from './Experiment-8/Login';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const session = localStorage.getItem('session');
    if (session === 'active') {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (user) => {
    setIsLoggedIn(true);
    setUsername(user);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('session');
    setUsername('');
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h2>Welcome, {username}!</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
