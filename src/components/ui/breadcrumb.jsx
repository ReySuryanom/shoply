import tw from 'twin.macro';

function Breadcrumb() {
  return (
    <BreadcrumbWrapper>
      <p>
        Home &gt; <CurrentPage>About</CurrentPage>
      </p>
    </BreadcrumbWrapper>
  );
}

const BreadcrumbWrapper = tw.div`text-base px-2.5 py-3.5 bg-white mb-7 shadow-md rounded-md`;
const CurrentPage = tw.span`font-bold`;

export default Breadcrumb;
