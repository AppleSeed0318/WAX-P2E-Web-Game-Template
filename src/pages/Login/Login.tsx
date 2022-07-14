import React, { useState } from 'react';
import styles from "./Login.module.scss";
import { useDispatch, useSelector } from 'react-redux';
import { WalletLogin, LoginRequest } from '../../store/user/actions';
import { AppState } from "../../store";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Login = () => {
  
  const dispatch = useDispatch();

  const onClickLogin = () => {
    dispatch(WalletLogin('WCW'));
  }
  // useState(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  const userModule = useSelector((state: AppState) => state.userModule);

  const { loginInfo } = userModule;

  return (
    <div className={styles.root}>
      <h3 className={styles.title}>Todo-list</h3>
      <button onClick={onClickLogin}>Login</button>
      <Link to={'/main'}>Main</Link>
    </div>
  );
};

export default Login;
