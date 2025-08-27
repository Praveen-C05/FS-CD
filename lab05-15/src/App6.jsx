// This is a complete and self-contained React application.
// It includes the main App component and the reusable StudentProfileCard component.
// The code is written using modern functional components and hooks.
// All styling is handled with Tailwind CSS classes for a responsive design.
// A search feature has been added to filter the list of students.

import React ,{ useState } from 'react';
import './App6.css'

// The StudentProfileCard component is reusable and takes student data as props.
// It's a functional component that renders a single student profile card.
const StudentProfileCard = ({ name, major, year, imageUrl }) => {
  return (
    <div className="student-card">
      <img
        className="student-img"
        src={imageUrl}
        alt={`Profile of ${name}`}
        // Fallback image in case the main image URL fails to load.
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "https://placehold.co/96x96/E5E7EB/6B7280?text=P";
        }}
      />
      <div className="student-info">
        <div className="student-name">{name}</div>
        <div className="student-major">{major}</div>
        <div className="student-year">Year: {year}</div>
      </div>
    </div>
  );
};

// The main App component that renders a list of StudentProfileCards.
// It holds the mock data and maps over it to demonstrate reusability.
const App = () => {
  // Sample student data. This could be fetched from an API in a real application.
  const students = [
    { id: 1, name: "Alex Johnson", major: "Computer Science", year: "Senior", imageUrl: "https://placehold.co/100x100/F43F5E/FFFFFF?text=AJ" },
    { id: 2, name: "Maria Garcia", major: "Mechanical Engineering", year: "Junior", imageUrl: "https://placehold.co/100x100/06B6D4/FFFFFF?text=MG" },
    { id: 3, name: "Ethan Chen", major: "Biology", year: "Sophomore", imageUrl: "https://placehold.co/100x100/22C55E/FFFFFF?text=EC" },
    { id: 4, name: "Sophie Miller", major: "Graphic Design", year: "Freshman", imageUrl: "https://placehold.co/100x100/6366F1/FFFFFF?text=SM" },
    { id: 5, name: "Liam Rodriguez", major: "Physics", year: "Senior", imageUrl: "https://placehold.co/100x100/F97316/FFFFFF?text=LR" },
    { id: 6, name: "Olivia Brown", major: "Chemistry", year: "Junior", imageUrl: "https://placehold.co/100x100/EF4444/FFFFFF?text=OB" },
    { id: 7, name: "Noah Wilson", major: "Political Science", year: "Sophomore", imageUrl: "https://placehold.co/100x100/8B5CF6/FFFFFF?text=NW" },
    { id: 8, name: "Ava Taylor", major: "Psychology", year: "Freshman", imageUrl: "https://placehold.co/100x100/EC4899/FFFFFF?text=AT" },
    { id: 9, name: "Lucas Hall", major: "Data Science", year: "Senior", imageUrl: "https://placehold.co/100x100/10B981/FFFFFF?text=LH" },
    { id: 10, name: "Chloe Martin", major: "Fine Arts", year: "Junior", imageUrl: "https://placehold.co/100x100/F59E0B/FFFFFF?text=CM" },
  ];

  // State to hold the search query
  const [searchQuery, setSearchQuery] = useState('');

  // Filter students based on the search query
  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.major.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.year.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="student-directory">
      <div className="student-title">Student Directory</div>
      <input
        type="text"
        placeholder="Search students by name, major, or year..."
        className="student-search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className="student-grid">
        {filteredStudents.length > 0 ? (
          filteredStudents.map((student) => (
            <StudentProfileCard
              key={student.id}
              name={student.name}
              major={student.major}
              year={student.year}
              imageUrl={student.imageUrl}
            />
          ))
        ) : (
          <div className="student-empty">No students found matching your search.</div>
        )}
      </div>
    </div>
  );
};

// Export the main App component as the default export.
export default App;