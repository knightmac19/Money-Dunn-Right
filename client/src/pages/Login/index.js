import React from 'react';
import "./style.css";
import { Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import MyCard from '../../components/MyCard';
import MainNav from '../../components/MainNav';


const Login = () => {
  return (
    <div>
      <MainNav />
      <br/>
      <br/>
      <br/>
      <MyCard header={"Login"}/>
    </div>
  );
};

export default Login;