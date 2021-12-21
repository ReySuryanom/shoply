import Head from 'next/head';
import { Fragment } from 'react';
import { HistoryList } from '../components/admin';
import { useProductContext } from '../context/product-context';

function History() {
  const { state } = useProductContext();

  const totalIncome = state.history.reduce((acc, current) => {
    const { quantity, price } = current;
    const total = parseFloat(quantity * price).toFixed();
    return acc + parseInt(total);
  }, 0.0);

  return (
    <Fragment>
      <Head>
        <title>Shoply | Situs Jual Beli Online Terlengkap, Murah & Aman</title>
        <meta
          name='description'
          content='Rekap Penjualan pada website kami yang hanya bisa diakses oleh admin level.'
        />
      </Head>
      <section className='py-10 px-5'>
        <h1 className='p-5 text-3xl font-bold text-center'>Product</h1>
        <table className='w-full text-center'>
          <thead className='text-white bg-dark'>
            <tr className='md:text-xl lg:text-2xl'>
              <th className='py-3 md:py-5'>Product</th>
              <th>Price</th>
              <th>Sold</th>
              <th>Income</th>
            </tr>
          </thead>
          <tbody>
            {state?.history.map((product) => (
              <HistoryList {...product} key={product.id} />
            ))}
          </tbody>
          <tfoot className='text-white bg-dark'>
            <tr className='md:text-xl lg:text-2xl'>
              <th colSpan={3} className='py-3 md:py-5 text-left pl-5'>
                Total Income
              </th>
              <th>{totalIncome}$</th>
            </tr>
          </tfoot>
        </table>
      </section>
    </Fragment>
  );
}

export default History;
