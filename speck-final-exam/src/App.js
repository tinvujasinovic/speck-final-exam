import './App.css';
import React, { useEffect, useState } from 'react';
import Title from './components/Title/Title';
import Section from './components/Section/Section';
import UserCard from './components/Card/UserCard';

function App() {

  const [students, setStudents] = useState([]);

  useEffect(() => {

    fetch("https://speck-events-api.herokuapp.com/api/user").then(res => res.json()).then(response => {
      setStudents(response);
    })
  });

  return (
    <>
      <Title title={"Speck Academy 2021"} />
      <Section>
        {students.length > 0 && students.map((student, index) => {
          return <UserCard key={student.id} student={student}/>
        })}
      </Section>
    </>
  );
}

export default App;
