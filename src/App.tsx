import { FC, useEffect, useState } from 'react'

import Header from './components/Header'
import Map from './components/Map'

import { defaultData } from './assets/data'

import { IItem } from './types/types'
import ItemList from './components/ItemList'

const App: FC = () => {
  const [dataItem, setDataItem] = useState<IItem[]>(defaultData)
  const [itemList, setItemList] = useState<IItem[]>(dataItem)

  console.log(dataItem)

  useEffect(() => {
    setItemList(dataItem)
  }, [dataItem])

  return (
    <>
      <Header setDataItem={setDataItem} />
      <main className="flex">
        <Map itemList={itemList} setItemList={setItemList} dataItem={dataItem}/> 
        <ItemList itemList={itemList} />
      </main>
    </>
  );
};

export default App;
