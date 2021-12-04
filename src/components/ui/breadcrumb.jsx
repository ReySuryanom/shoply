import tw from 'twin.macro';

function Breadcrumb() {
  const format = '\xa0\xa0/\xa0\xa0';

  return (
    <BreadcrumbWrapper>
      <Text>
        Home{format}
        <CurrentPage>About</CurrentPage>
      </Text>
    </BreadcrumbWrapper>
  );
}

const BreadcrumbWrapper = tw.div`px-2.5 py-3.5 bg-white mb-7 shadow-md rounded-md`;
const CurrentPage = tw.span`font-bold`;
const Text = tw.p`text-base md:text-lg`;

export default Breadcrumb;
