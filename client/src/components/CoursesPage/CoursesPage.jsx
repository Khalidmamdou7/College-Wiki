import React from 'react'
import './coursesPage.scss'
import axios from "axios";
import { useEffect,useState } from 'react';

function CoursesPage() {
    const [course, setCourse] = useState();    
    const [lists, setLists] = useState([]);
    useEffect(() => {
        const getCourses = async () => 
        {
            try {
                const res = await axios.get("http://localhost:8080/api/department/"+"HEM"+"/lists");
                setLists(res.data.lists);
                console.log(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        getCourses();
    }, []);
    return (
        <div className="coursespage">
            <div className="container">
                {lists.map(list => (
                    <div className="wrap">
                        <h1>{list.name}</h1>
                        <div className="courses">
                            {list.courses.map(course => (
                                <div className="course" onClick={() => setCourse(course)}>
                                    {course.code}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            {course !== undefined && <div className="courseInfo">
                <h3 className="courseCode">{course.code}</h3>
                <h1 className="courseName">{course.name}</h1>
                <hr/>
                <p className="courseDesc">{course.description}</p>
                <hr/>
                {/* <p className="courseProfessor">Professor: {course.professor[0].name}</p> */}
            </div>}
        </div>
    )
}

export default CoursesPage 