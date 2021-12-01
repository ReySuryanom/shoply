import { Fragment } from 'react';

function CardList({ children, className, product }) {
  return (
    <Fragment>
      <section className={className}>{product}</section>
      {children}
    </Fragment>
  );
}

export default CardList;
