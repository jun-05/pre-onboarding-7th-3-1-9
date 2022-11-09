export function SearchSickItem({ parseWord }: { parseWord: any }) {
  return (
    <>
      {parseWord.before}
      <strong>{parseWord.boldKeyword}</strong>
      {parseWord.after}
    </>
  );
}
