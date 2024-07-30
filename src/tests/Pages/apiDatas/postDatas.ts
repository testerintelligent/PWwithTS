
interface User {
    name: string;
    job: string;
  }
  interface cookieFormat {
    name: string,
    value: string,
    domain: string,
    path: string,
    httpOnly: boolean,
    secure: boolean
  }

  const users: User[] = [
    {
        name: "Magesh",
        job: "Tester"
    }
  ];
  const dataForCookie: cookieFormat[] = [
    {
      name: 'test_cookie',
      value: 'cookie_value',
      domain: 'example.com',
      path: '/',
      httpOnly: false,
      secure: false
    }
  ];
  

  export {users,dataForCookie};
  