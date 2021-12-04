import Image from 'next/image';
import { FaTrash } from 'react-icons/fa';
import tw from 'twin.macro';
import { Button } from '../ui';

function CartItem() {
  return (
    <CartWrapper>
      <CartHeader>
        <ImageContainer>
          <Image
            alt='gambar'
            src='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'
            layout='fill'
            tw='scale-90 md:scale-75'
            objectFit='contain'
          />
        </ImageContainer>
      </CartHeader>
      <CartBody>
        <ItemName>Logitech Logitech</ItemName>
        <Price>$10</Price>
        <ButtonContainer>
          <Button tw='text-3xl bg-white' text='-' />
          <ToggleInput value={0} type='number' readOnly />
          <Button tw='text-3xl bg-white' text='+' />
        </ButtonContainer>
        <RemoveItemButton>
          <FaTrash tw='text-dark' />
        </RemoveItemButton>
      </CartBody>
    </CartWrapper>
  );
}

const CartWrapper = tw.article`flex w-full p-3 shadow-lg bg-dark`;
const CartHeader = tw.div`w-5/12 bg-white md:w-2/12`;
const ImageContainer = tw.div`relative bg-white aspect-h-4 aspect-w-4`;
const CartBody = tw.div`w-2/3 pl-3.5 relative flex flex-col text-white md:flex-row md:items-center md:justify-between md:w-10/12 md:px-4`;
const ItemName = tw.h3`w-3/12 text-lg font-bold leading-none md:text-base md:w-4/12`;
const Price = tw.p`text-xl md:text-lg md:w-1/5 md:text-center`;
const ButtonContainer = tw.div`flex mt-auto text-dark md:mt-0`;
const ToggleInput = tw.input`!max-w-[52px] text-xl font-bold text-center border-l-2 border-r-2 border-dark`;
const RemoveItemButton = tw(
  Button
)`!min-h-[20px] rounded-full p-1.5 bg-white !min-w-[20px] absolute top-0 right-0 md:static`;

export default CartItem;
