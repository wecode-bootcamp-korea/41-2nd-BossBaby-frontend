export const API = {
  login: `${process.env.REACT_APP_BASE_URL}/auth/kakao-login`,
  items: `${process.env.REACT_APP_BASE_URL}/items`,
  cart: `${process.env.REACT_APP_BASE_URL}/carts`,
  signin: `${process.env.REACT_APP_BASE_URL}/signin`,
  signup: `${process.env.REACT_APP_BASE_URL}/signup`,
};

export const fetchApi = async (url, method = 'GET', fetchData, auth) => {
  try {
    if (method === 'GET') {
      const res = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          Authorization: auth ? localStorage.getItem('accessToken') : null,
        },
      });
      return res.json();
    }
    const res = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: auth ? localStorage.getItem('accessToken') : null,
      },
      body: JSON.stringify(fetchData),
    });
    return res.json();
  } catch (e) {
    return e;
  }
};
