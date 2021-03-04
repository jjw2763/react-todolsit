import React, { useCallback, useContext, useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import loginApi from '../api/loginApi';
import AuthContext from '../contexts/AuthContext';
import AxiosContext from '../contexts/AxiosContext';

const LoginPage = ({ history }) => {
  const [userid, setUserid] = useState('');
  const [password, setPassword] = useState('');
  const { auth, setAuth } = useContext(AuthContext);
  const { axios } = useContext(AxiosContext);

  const validationCheck = useCallback((value) => {
    if (value.trim() === '') {
      return false;
    } else {
      return true;
    }
  }, []);

  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      if (!validationCheck(userid) || !validationCheck(password)) {
        alert('필수 입력사항 입니다.');
        return;
      }

      loginApi(axios, userid, password, setAuth);
    },
    [userid, password, axios, setAuth, validationCheck],
  );

  useEffect(() => {
    if (auth.token && auth.token !== '' && auth.userid === 'grace09') {
      history.push('/todo-list');
    }
  }, [history, auth]);

  return (
    <div className="wrap_login">
      <form method="POST" className="loginForm" onSubmit={onSubmit}>
        <h2>Login</h2>
        <div className="idForm">
          <input
            type="text"
            className="id"
            placeholder="ID"
            onChange={(e) => {
              setUserid(e.target.value);
            }}
            value={userid}
          ></input>
        </div>
        <div className="passForm">
          <input
            type="password"
            className="pw"
            placeholder="PW"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
          ></input>
        </div>
        <button type="submit" className="btn">
          LOG IN
        </button>
      </form>
    </div>
  );
};

export default withRouter(LoginPage);
