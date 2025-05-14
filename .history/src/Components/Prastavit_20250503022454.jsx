import React from 'react'
import { useNavigate } from 'react-router-dom';
import './CSS/Prastavit.css';
import shivar from '../Images/Shivar-Samelan.jpg';
import kavikatta from '../Images/Kavi-Kattta.jpg';
import Calendar from '../Icons/Calendar.png';
import Clock from '../Icons/Clock.png';
import Loc from '../Icons/Location.png';

const events = [
  {
    id: 1,
    date: "०४ मे",
    title: "कवी संमेलन",
    description: "शब्दांची उधळण, कवितेची उत्सव!",
    image: shivar,
    icon:Calendar,
    route: "/KaviSamelanPop",
  },
  {
    id: 2,
    date: "३० जून",
    title: "कुटुंब कट्टा",
    description: "कुटुंब, गप्पा आणि अनुभवांची गोष्ट येथे!",
    image: kavikatta,
    icon:Calendar,
  },
  {
    id: 3,
    date: "०४ मे",
    title: "शिवार संमेलन",
    description: "वेळी, संस्कृती आणि दानाचा संगम सुंदर निसर्गात",
    image: shivar,
    icon:Calendar,
  },
  {
    id: 4,
    date: "०४ मे",
    title: "शिवार संमेलन",
    description: "वेळी, संस्कृती आणि दानाचा संगम सुंदर निसर्गात",
    image: shivar,
    icon:Calendar,
  },
  {
    id: 5,
    date: "०४ मे",
    title: "शिवार संमेलन",
    description: "वेळी, संस्कृती आणि दानाचा संगम सुंदर निसर्गात",
    image: shivar,
    icon:Calendar,
  },
  {
    id: 6,
    date: "०४ मे",
    title: "शिवार संमेलन",
    description: "वेळी, संस्कृती आणि दानाचा संगम सुंदर निसर्गात",
    image: shivar,
    icon:Calendar,
  },
  {
    id: 7,
    date: "०४ मे",
    title: "शिवार संमेलन",
    description: "वेळी, संस्कृती आणि दानाचा संगम सुंदर निसर्गात",
    image: shivar,
    icon:Calendar,
  },
];




export default Prastavit; 