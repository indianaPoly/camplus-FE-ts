import React, { useState } from 'react';
import { isLogin } from '../../api/post/api';

interface LoginData {
  username: string;
  password: string;
}

const LoginForm = () => {
  const [loginData, setLoginData] = useState<LoginData>({
    username: '',
    password: '',
  });

  /**
   * @해결해야하는것
   * 1. 로그인 성공 여부를 조금 더 깔끔하게 하는 방법 - redux 사용 여부 고민
   * 2. onClick function화 진행
   */
  const handleOnChange =
    (key: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setLoginData((prevState) => {
        return { ...prevState, [key]: event.target.value };
      });
    };

  return (
    <div>
      <form id="login">
        <input id="username" onChange={handleOnChange('username')} />
        <input id="password" onChange={handleOnChange('password')} />
      </form>
      <button
        form="login"
        type="submit"
        onClick={async (event) => {
          event.preventDefault();
          const loginResponse = await isLogin(loginData);
          if (loginResponse.status === 200) {
            console.log('다음 페이지로 이동합니다');
          }
        }}
      >
        버튼이요
      </button>
    </div>
  );
};

export default LoginForm;
