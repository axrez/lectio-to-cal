import axios from 'axios';

export const getAuthToken = async (username, password) => {
  const { headers } = await axios.post(
    'https://www.lectio.dk/lectio/165/login.aspx?prevurl=forside.aspx',
    {
      __EVENTTARGET: 'm$Content$submitbtn2',
      m$Content$username2: username,
      m$Content$passwordHidden: password,
    }
  );
  const token = await headers['set-cookie'][0].replace(
    /ASP.NET_SessionId=(.*);\spath.*/g,
    '$1'
  );
  return token;
};

export const fetchSkema = async token => {
  const { data } = await axios.get(
    'https://www.lectio.dk/lectio/165/SkemaNy.aspx?type=elev&elevid=26559177918',
    {
      headers: {
        Cookie: `ASP.NET_SessionId=${token}`,
      },
    }
  );
  console.log(data);
};
