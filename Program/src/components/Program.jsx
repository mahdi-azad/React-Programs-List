import React, { useEffect, useState } from 'react';

const Program = () => {

  // Use useState to manage the state of the array which I will then map to use the array items
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    fetch("https://api.ts4u.us/api/course/get?type=program")
      .then(response => response.json())
      .then(data => {
        setPrograms([...programs, data.courses]);
        console.log('this is the data', data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  console.log('this is programs', programs)

  return (
    <div className="container">
        <h1>Here are our programs</h1> <br/>
        <div>
            <ul>
                {
                    programs.map((item, i) => <li key={i}>
                        <h2>{item[i].title}</h2> <br/>
                        <h3> Instructor: {item[i].instructor.name}</h3> <br/>
                        <p>{item[i].meta.description}</p>
                    </li>)
                }
            </ul>
        </div>
    </div>
  );
};

export default Program;