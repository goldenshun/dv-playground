const ContentfulDemo = () => {
  console.log(process.env.CONTENTFUL_SPACE_ID);
  console.log(process.env.CONTENTFUL_ACCESS_TOKEN);

  return (
    <div>Hey</div>
  );
};

export default ContentfulDemo;
