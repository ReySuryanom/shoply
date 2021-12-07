import { GiRoundStar } from 'react-icons/gi';

const BASE_URL = 'https://fakestoreapi.com/';

export const trimmingText = (text, margin = 20) => {
  return text.length > margin ? `${text.substr(0, margin)}...` : text;
};

export const createRatingStars = (rate) => {
  let icons = [];

  for (let i = 0, j = rate; i < 5; i += 1, j -= 1) {
    if (j >= 1) {
      icons.push(<GiRoundStar className='text-yellow-400' key={i} />);
    } else {
      icons.push(<GiRoundStar key={i} />);
    }
  }

  return icons;
};

export const getData = async (query) => {
  const res = await fetch(`${BASE_URL}${query}`);
  const data = await res.json();

  return data;
};
