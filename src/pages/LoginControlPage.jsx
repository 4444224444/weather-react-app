import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styles from './LoginControlPage.module.css';

function LoginControlPage({ onLogin }) {
  const [inputId, setInputId] = useState('');
  const [inputPw, setInputPw] = useState('');
  const [inputName, setInputName] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const saved = JSON.parse(localStorage.getItem("userInfo"));

    if (saved && inputId === saved.id && inputPw === saved.pw) {
      localStorage.setItem("userName", saved.name); // 로그인 성공 시 이름 저장
      onLogin(inputId); // props로 ID 넘김
      navigate("/");
    } else {
      alert("아이디 또는 비밀번호가 틀렸습니다.");
    }
  };

  return (
    <div className={styles.background}>
      <div className={styles.glass}>
        <h2 className={styles.title}>LOGIN</h2>
        
        <input
          placeholder="Name"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
          className={styles.input}
        />
        <input
          placeholder="ID"
          value={inputId}
          onChange={(e) => setInputId(e.target.value)}
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={inputPw}
          onChange={(e) => setInputPw(e.target.value)}
          className={styles.input}
        />

        <button onClick={handleLogin} className={styles.button}>
          SIGN IN
        </button>

        <p className={styles.message}>
          계정이 없으신가요?{' '}
          <Link to="/signup" className={styles.link}>SIGN UP</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginControlPage;



