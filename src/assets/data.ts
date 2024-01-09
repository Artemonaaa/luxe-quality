import { IItem } from '../types/types'

import podil from '../assets/img/Podil.png'
import chernihiv from '../assets/img/Chernihiv.png'
import sofiivska from '../assets/img/Sofiivska.png'
import teremky from '../assets/img/Teremky.png'
import pecherskyi from '../assets/img/Pecherskyi.png'
import svyatoshynskyi from '../assets/img/Svyatoshynskyi.png'
import brovary from '../assets/img/Brovary.png'

export const defaultData: IItem[] = [
  { position: { lat: 50.451319, lng: 30.5323 }, title: "Podil", img: podil },
  { position: { lat: 50.451319, lng: 31.5323 }, title: "Pylypcha" },
  { position: { lat: 51.451319, lng: 31.5323 }, title: "Chernihiv", img: chernihiv },
  { position: { lat: 50.404663, lng: 30.364243 }, title: "Sofiivska", img: sofiivska },
  { position: { lat: 50.363831, lng: 30.43843 }, title: "Teremky", img: teremky },
  { position: { lat: 50.402742, lng: 30.566076 }, title: "Pecherskyi", img: pecherskyi },
  { position: { lat: 50.515425, lng: 30.365809 }, title: "Svyatoshynskyi", img: svyatoshynskyi },
  { position: { lat: 50.511078, lng: 30.762141 }, title: "Brovary", img: brovary},
  { position: { lat: 50.238964, lng: 28.83465 }, title: "Zhytomer" },
];
