// import { getHTML, twCount } from './lib/scrape'
import { getAuthToken } from './lib/lectioAuth';

import { cred } from './config/lectioCred';

const go = async () => {
  const token = await getAuthToken(cred.username, cred.password);
  console.log(token);
};

go();
