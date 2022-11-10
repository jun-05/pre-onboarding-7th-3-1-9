import React, { createContext, useContext, useEffect } from 'react';
import { sick } from '../models/type';
import { useState } from 'react';

type SearcEventhState = {
  selected: sick | undefined;
  upSelectNumber: () => void;
  downSelectNumber: () => void;
};

const SearchEventContext = createContext<SearcEventhState | null>(null);

export const useSearchEventContext = () => {
  const state = useContext(SearchEventContext);
  if (!state) throw new Error('Cannot find SampleProvider');
  return state;
};

export function SearchEventProvider({
  children,
  sickData,
}: {
  children: React.ReactNode;
  sickData: sick[];
}) {
  const [selected, setSelected] = useState<sick | undefined>();
  const [selectedNumber, setSelectedNumber] = useState(0);

  useEffect(() => {
    setSelectedNumber(0);
  }, [sickData]);

  useEffect(() => {
    const handleSelected = () => {
      if (selectedNumber - 1 < 0 || selectedNumber - 1 > sickData.length) {
        return;
      }
      setSelected(sickData[selectedNumber - 1]);
    };
    handleSelected();
  }, [selectedNumber, sickData]);

  console.log(selectedNumber);

  const upSelectNumber = () => {
    console.log('ddd');
    setSelectedNumber(prev => prev + 1);
  };
  const downSelectNumber = () => setSelectedNumber(prev => prev - 1);

  const state: SearcEventhState = {
    selected,
    upSelectNumber,
    downSelectNumber,
  };

  return <SearchEventContext.Provider value={state}>{children}</SearchEventContext.Provider>;
}
