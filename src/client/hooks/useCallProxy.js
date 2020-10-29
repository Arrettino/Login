import { useEffect } from 'react';

function useCallProxy(payload) {
  const callProxy = async () => {
    try {
      const baseUrl = process.env.BASE_URL_PROXY;
      const { code } = payload;
      const response = await fetch(`${baseUrl}/login/github?code=${code}`, {
        headers: {
          Type: 'application/json',
          Accept: 'application/json',
        },
      });
      const data = await response.json();
      console.log(data);
      return ('hola');
    } catch (err) {
      console.log(err);
      return ('hola');
    }
  };
  useEffect(() => {
    callProxy();
  }, []);
}

export default useCallProxy;
