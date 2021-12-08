import { GiRoundStar } from 'react-icons/gi';

const BASE_URL = 'https://fakestoreapi.com/';

export const trimmingText = (text, margin = 15) => {
  return text.length > margin ? `${text.substr(0, margin)}...` : text;
};

export const createRatingStars = (rate) => {
  const rating = parseInt(rate);
  const starIcons = Array(5)
    .fill(null)
    .map((_, index) =>
      rating > index ? (
        <GiRoundStar key={index} />
      ) : (
        <GiRoundStar style={{ color: '#484543' }} key={index} />
      )
    );
  return starIcons;
};

export const getData = async (query) => {
  try {
    const res = await fetch(`${BASE_URL}${query}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    throw new Error(error);
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
      const isSpecialCases = keys[index] !== 'category';
      const firstSymbol = isSpecialCases
        ? url.includes('?')
          ? '&'
          : '?'
        : '/';
      const secondSymbol = isSpecialCases ? '=' : '/';
      url += `${firstSymbol}${keys[index]}${secondSymbol}${values[index]}`;
    }
  }

  return url;
};
