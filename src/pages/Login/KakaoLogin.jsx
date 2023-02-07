import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { API_KEY, REDIRECT_URI } from './oauthConfig';
import { API } from '../../config';

const KakaoLogin = () => {
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');
  const navigate = useNavigate();

  const getKakaoToken = () => {
    fetch('https://kauth.kakao.com/oauth/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `grant_type=authorization_code&client_id=${API_KEY}&redirect_url=${REDIRECT_URI}&code=${code}`,
    })
      .then(res => res.json())
      .then(data => {
        if (data.access_token) {
          fetch(`${API.login}`, {
            method: 'POST',
            headers: {
              Authorization: data.access_token,
            },
          })
            .then(res => res.json())
            .then(data => {
              if (data) {
                localStorage.setItem('token', data.accessToken);
                navigate('/');
              }
            });
        } else {
          alert('로그인을 다시 시도해주세요');
          navigate('/');
        }
      });
  };

  useEffect(() => {
    getKakaoToken();
  }, []);
};

export default KakaoLogin;
