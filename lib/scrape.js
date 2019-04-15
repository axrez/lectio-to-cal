import axios from 'axios';
import cheerio from 'cheerio';

export const getHTML = async uri => {
  const { data: html } = await axios.get('https://twitter.com/rihanna');
  return html;
};

export const twCount = async html => {
  const $ = await cheerio.load(html);
  const span = await $('[data-nav="followers"] .ProfileNav-value');
  console.log(span.data());
};
