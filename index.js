// import { getHTML, twCount } from './lib/scrape'
import { getAuthToken, fetchSkema } from './lib/lectio';

import { cred } from './config/lectioCred';

const go = async () => {
  const token = await getAuthToken(cred.username, cred.password);
  const skema = await fetchSkema(token);
  console.log(skema);
};

go();
