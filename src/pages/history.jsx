import Head from 'next/head';
import { Fragment } from 'react';
import { HistoryList } from '../components/admin';
import { useProductContext } from '../context/product-context';

function History() {
  const { state } = useProductContext();

  const totalIncome = state.history.reduce((acc, current) => {
    const { quantity, price } = current;
    const total = parseFloat(quantity * price).toFixed();
    return acc + parseFloat(total);
  }, 0.0);

  const EmptyHistory = (
    <tr>
      <td colSpan={4}>
        <p className='py-5 text-xl font-semibold text-center'>
          Sorry, nothing has been sold yet
        </p>
      </td>
    </tr>
  );

  return (
    <Fragment>
      <Head>
        <title>Shoply | Situs Jual Beli Online Terlengkap, Murah & Aman</title>
        <meta
          name='description'
          content='Rekap Penjualan pada website kami yang hanya bisa diakses oleh admin level.'
        />
      </Head>
      <section className='min-h-screen px-5 py-10 shadow-xl md:px-14 lg:px-20'>
        <h1 className='p-5 text-3xl font-bold text-center'>
          Recap of Items Sold
        </h1>
        <table className='w-full text-center shadow-xl'>
          <thead className='text-white bg-dark'>
            <tr className='md:text-xl lg:text-2xl'>
              <th className='py-3 md:py-5'>Product</th>
              <th>Price</th>
              <th>Sold</th>
              <th>Income</th>
            </tr>
          </thead>
          <tbody>
            {state?.history.length === 0
              ? EmptyHistory
              : state?.history.map((product) => (
                  <HistoryList {...product} key={product.id} />
                ))}
          </tbody>

          {state?.history.length !== 0 && (
            <tfoot className='text-white bg-dark'>
              <tr className='md:text-xl lg:text-2xl'>
                <th colSpan={3} className='py-3 pl-5 text-left md:py-5'>
                  Total Income
                </th>
                <th>{totalIncome}$</th>
              </tr>
            </tfoot>
          )}
        </table>
      </section>
    </Fragment>
  );
}

export default History;
