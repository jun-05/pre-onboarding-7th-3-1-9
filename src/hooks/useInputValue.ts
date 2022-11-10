import { useMemo, useState } from 'react';

export function useSelectVal() {
  const [selected, setSelected] = useState('');
  const handleSelected = (value: string) => {
    setSelected(value);
  };

  const selectedMemo = useMemo(() => selected, [selected]);

  return { selectedMemo, handleSelected };
}
