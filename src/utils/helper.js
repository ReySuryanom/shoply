import { GiRoundStar } from 'react-icons/gi';

const BASE_URL = 'https://fakestoreapi.com/';

export const trimmingText = (text, margin = 15) => {
  return text.length > margin ? `${text.substr(0, margin)}...` : text;
};

export const createRatingStars = (rate) => {
  let icons = [];

  for (let index = 0; index < 5; index += 1, rate -= 1) {
    if (rate >= 1) {
      icons.push(<GiRoundStar className='text-yellow-400' key={index} />);
    } else {
      icons.push(<GiRoundStar key={index} />);
    }
  }

  return icons;
};

export const getData = async (query) => {
  try {
    const res = await fetch(`${BASE_URL}${query}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error)
    throw new Error('Maaf, sepertinya url yang anda tuju tidak ada.');
  }
};

export const hasObjectValue = (value) => {
  for (var i in value) return true;
  return false;
};

export const formatUrl = (query) => {
  let url = 'products';

  if (hasObjectValue(query)) {
    const keys = Object.keys(query);
    const values = Object.values(query);

    for (let index = 0; index < keys.length; index++) {
      const isSpecialCases = keys[index] === 'sort' || keys[index] === 'limit';
      const firstSymbol = isSpecialCases ? (url.includes('?') ? '&' : '?') : '/';
      const secondSymbol = isSpecialCases ? '=' : '/';
      url += `${firstSymbol}${keys[index]}${secondSymbol}${values[index]}`;
    }
  }

  return url;
};
