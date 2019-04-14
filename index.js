import { getHTML, twCount } from './lib/fetch'

const go = async () => {
  const html = await getHTML();
  const twitterFollowers = await twCount(html);
  console.log(twitterFollowers);
}

go()

