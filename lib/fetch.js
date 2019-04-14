import axios from 'axios';
import cheerio from 'cheerio';

export const getHTML = async (uri) => {
  const html = await axios.get('https://twitter.com/rihanna');
  return html;
}

export const twCount = async (html) => {
  const $ = await cheerio.load(html);
  const followers = await $('a[data-nav="followers"]').html();
  return followers;
}

