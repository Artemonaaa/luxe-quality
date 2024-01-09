import React, { FC } from 'react'

import { IItem } from '../types/types'

import undefiendPlace from '../assets/img/UndefiendPlace.png'

interface IItemList {
  itemList: IItem[]
}

const ItemList: FC<IItemList> = ({ itemList }) => {
  return (
    <div className="w-[25%] h-[92vh] overflow-y-auto">
      <div className="flex p-5 flex-col items-center">
        {itemList.map((item, i) => (
          <div key={i}>
            <img className="w-[350px] h-[230px] object-cover" src={item.img === undefined ? undefiendPlace : item.img} alt="nope" />
            <h3 className="text-2xl text-center m-3">{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ItemList