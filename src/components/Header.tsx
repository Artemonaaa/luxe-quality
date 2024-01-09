import React, { FC, useState } from "react";

import ItemModal from './ItemModal'
import logo from '../assets/img/Logo.png'

import { IItem } from '../types/types'

interface IHeader {
  setDataItem: React.Dispatch<React.SetStateAction<IItem[]>>;
}

const Header: FC<IHeader> = ({ setDataItem }) => {
  const [visibleModal, setVisibleModal] = useState(false)

  return (
    <>
      <header className="bg-[#2a2a2a] p-4 shadow-sm">
        <div className="flex justify-between items-center container m-auto">
          <a href="#">
            <img src={logo} alt="logo" />
          </a>

          <button 
            className="text-white p-2 bg-transparent bg-slate-600 rounded-2xl hover:bg-slate-700 ease-in-out transition-all duration-500"
            onClick={() => setVisibleModal(!visibleModal)}
          >
            Create Item
          </button>
        </div>
      </header>
      {visibleModal && (
        <ItemModal setVisibleModal={setVisibleModal} setDataItem={setDataItem} />
      )}
    </>
  );
};

export default Header;
