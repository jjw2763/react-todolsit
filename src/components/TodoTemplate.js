import React, { useCallback, useContext } from 'react';
import AuthContext from '../contexts/AuthContext';

const TodoTemplate = ({ children }) => {
  const { auth, setAuth } = useContext(AuthContext);

  const onClick = useCallback(() => {
    setAuth({ userid: '', token: '' });
    window.location.href = 'http://localhost:3000/login';
  }, [setAuth]);

  return (
    <>
      <span id="user_info">
        안녕하세요 <b id="user_id">{auth.userid}</b> 님!
        <br></br>
        <button className="log_out" onClick={onClick}>
          로그아웃
        </button>
      </span>

      <div id="template">{children}</div>
    </>
  );
};

export default TodoTemplate;
