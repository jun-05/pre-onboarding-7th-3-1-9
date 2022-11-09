export const ParseBoldWord = ({ sickName, keyword }: { sickName: string; keyword: string }) => {
  const result = sickName.match(new RegExp(keyword, 'i'));

  // TODO: 이걸 컴포넌트로.. 해도 되나?
  if (result == null) {
    return null;
  }

  if (result.input == null) {
    return null;
  }

  if (result.index == null) {
    return null;
  }

  const beforeBoldText = sickName.slice(0, result.index);
  const boldText = sickName.slice(result.index, result.index + keyword.length);
  const afterBoldText = sickName.slice(result.index + keyword.length);

  return (
    <>
      {beforeBoldText}
      <strong>{boldText}</strong>
      {afterBoldText}
    </>
  );
};
