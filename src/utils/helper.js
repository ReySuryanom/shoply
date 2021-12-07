import { GiRoundStar } from 'react-icons/gi';

const BASE_URL = 'https://fakestoreapi.com/';

export const trimmingText = (text, margin = 20) => {
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
  const res = await fetch(`${BASE_URL}${query}`);
  const data = await res.json();

  return data;
};

export const hasObjectValue = (value) => {
  for (var i in value) return true;
  return false;
};
