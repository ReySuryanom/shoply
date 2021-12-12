import Image from 'next/image';

function ProductImage({ className, image, title, priority = false }) {
  return (
    <div className={className}>
      <Image
        src={image}
        className='w-full scale-75 rounded-md'
        alt={title}
        layout='fill'
        objectFit='contain'
        priority={priority}
      />
    </div>
  );
}

export default ProductImage;
