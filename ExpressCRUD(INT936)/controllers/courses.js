import { v4 as uuid } from 'uuid';

let courses = [
    {
        name: "Java",
        level: "Beginner"
    }, 

    {
        name: "Python",
        level: "Intermediate"
    }
];

export const getCourses = (req, res) => {
    console.log(`Users in the database: ${courses}`);

    res.send(courses);
}

export const createCourse = (req, res) => {   
    const course = req.body;

    courses.push({...course, id: uuid()});
    
    console.log(`Course [${course.name}] added to the database.`);

    res.send("Course creation successfull")
};

export const getCourse = (req, res) => {
    const course = courses.find((course) => course.id === req.params.id);
    res.send(course)
};

export const deleteCourse = (req, res) => { 
    console.log(`course with id ${req.params.id} has been deleted`);
    
    courses = courses.filter((course) => course.id !== req.params.id);
};

export const updateCourse =  (req,res) => {
    const course = courses.find((course) => course.id === req.params.id);
    
    course.name = req.body.name;
    course.level = req.body.level;

    console.log(`coursename has been updated to ${req.body.name}, level has been updated to ${req.body.level}`)
};