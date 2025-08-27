import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App5.css'
import React from "react";

// Reusable StudentCard component
const StudentCard = ({ name, course, email, city, image }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition">
      <img
        src={image}
        alt={name}
        className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-blue-500"
      />
      <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
      <p className="text-blue-600 font-medium">{course}</p>
      <p className="text-gray-600 text-sm">{city}</p>
      <p className="text-gray-500 text-sm mt-2">{email}</p>
    </div>
  );
};

// Example usage in App component
const App = () => {
  const students = [
    {
      name: "Aisha Khan",
      course: "Full Stack Development",
      email: "aisha.k@example.com",
      city: "Bengaluru",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Rohan Gupta",
      course: "Cloud Computing",
      email: "rohan.g@example.com",
      city: "Mumbai",
      image: "https://randomuser.me/api/portraits/men/46.jpg",
    },
    {
      name: "Meera Nair",
      course: "Data Science",
      email: "meera.n@example.com",
      city: "Kochi",
      image: "https://randomuser.me/api/portraits/women/50.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Student Profiles
      </h1>
      {/* Responsive grid layout */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {students.map((student, index) => (
          <StudentCard key={index} {...student} />
        ))}
      </div>
    </div>
  );
};

export default App;
