// @ts-nocheck
import React, { FC, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { IItem } from '../types/types'

interface IItemModal {
  setVisibleModal: (visible: boolean) => void;
  setDataItem: React.Dispatch<React.SetStateAction<IItem[]>>;
}

interface IFormInput {
  title: string;
  latitude: number | null;
  longitude: number | null;
  img: string | undefined;
}

const schema = yup
  .object({
    title: yup.string().required().max(15),
    latitude: yup.number().required().min(40).max(53),
    longitude: yup.number().required().min(21).max(40),
  })

const ItemModal: FC<IItemModal> = ({ setVisibleModal, setDataItem }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
    defaultValues: {
      title: "",
      latitude: null,
      longitude: null,
      img: undefined,
    },
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    if (data.img && data.img.length > 0) {
      const file = new FileReader();

      file.onload = () => {
        setDataItem((prev) => [
          {
            position: { lat: data.latitude, lng: data.longitude },
            title: data.title,
            img: file.result,
          },
          ...prev,
        ]);
        setVisibleModal(false);
      };

      file.readAsDataURL(data.img[0]);
    } else {
      setDataItem((prev) => [
        {
          position: { lat: data.latitude, lng: data.longitude },
          title: data.title,
          img: undefined,
        },
        ...prev,
      ]);
      setVisibleModal(false);
    }
  };

  return (
    <div
      className="fixed bottom-0 left-0 right-0 top-0 flex h-full w-full items-center justify-center bg-black/50 z-10"
      onClick={() => setVisibleModal(false)}
    >
      <form
        className="flex flex-col w-[300px] gap-4 rounded-md p-4 bg-slate-300"
        onClick={(e) => e.stopPropagation()}
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className="flex flex-col">
          Title:
          <input
            className="input w-full"
            type="text"
            placeholder="Title..."
            {...register("title")}
          />
          <small className="text-red-600 first-letter:capitalize">
            {errors.title?.message}
          </small>
        </label>
        <label className="flex flex-col">
          Latitude:
          <input
            className="input w-full"
            type="text"
            placeholder="Latitude..."
            {...register("latitude")}
          />
          <small className="text-red-600 first-letter:capitalize">
            {errors.latitude?.message}
          </small>
        </label>
        <label className="flex flex-col">
          Longitude:
          <input
            className="input w-full"
            type="text"
            placeholder="Longitude..."
            {...register("longitude")}
          />
          <small className="text-red-600 first-letter:capitalize">
            {errors.longitude?.message}
          </small>
        </label>
        <label className="text-blue-600">
          Import an image if you want :)
          <input className="text-black" type="file" {...register("img")} />
        </label>
        <button
          className="bg-slate-600 rounded-2xl text-white p-2"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ItemModal;
