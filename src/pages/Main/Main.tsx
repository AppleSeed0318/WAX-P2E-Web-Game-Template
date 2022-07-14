import React, { useState } from 'react';
import styles from "./Main.module.scss";
import { useDispatch, useSelector } from 'react-redux';
import { WalletLogin, LoginRequest } from '../../store/user/actions';
import { AppState } from "../../store";

const Main = () => {
  
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
      <h3 className={styles.title}>Main Page</h3>
      <h3 className={styles.title}>{loginInfo.account}</h3>
      <button onClick={onClickLogin}>Main</button>
    </div>
  );
};

export default Main;
