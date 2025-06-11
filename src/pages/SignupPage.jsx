import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SignupPage.module.css';

function SignupPage() {
  const [newId, setNewId] = useState('');
  const [newPw, setNewPw] = useState('');
  const [newName, setNewName] = useState('');
  const navigate = useNavigate();

const handleSignup = () => {
  if (newId && newPw && newName) {
    const userInfo = { id: newId, pw: newPw, name: newName };
    localStorage.setItem("userInfo", JSON.stringify(userInfo)); // 🔐 전체 정보 저장
    localStorage.setItem("userName", newName); // ✅ 이름 따로 저장 (마이페이지용)
    alert("회원가입 완료!");
    navigate("/login");
  }
};

  return (
    <div className={styles.background}>
      <div className={styles.glass}>
        <h2 className={styles.title}>SIGN UP</h2>
        <input
          placeholder="Name"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          className={styles.input}
        />
        <input
          placeholder="ID"
          value={newId}
          onChange={(e) => setNewId(e.target.value)}
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={newPw}
          onChange={(e) => setNewPw(e.target.value)}
          className={styles.input}
        />
        <button onClick={handleSignup} className={styles.button}>
          SIGN UP
        </button>

        <p className={styles.message}>
          이미 계정이 있으신가요?{' '}
          <span className={styles.link} onClick={() => navigate('/login')}>
            LOGIN
          </span>
        </p>
      </div>
    </div>
  );
}

export default SignupPage;
