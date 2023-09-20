import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from "swiper";
import PlayPause from "./PlayPause";
import { playPause, setActveSong } from "../redux/features/playerSlice";
import 'swiper/css';
import 'swiper/css/free-mode'
import { useGetTopChartsQuery } from "../redux/services/Deezer";



const TopPlay = () => (
  const dispatch = useDispatch()
);

export default TopPlay;
