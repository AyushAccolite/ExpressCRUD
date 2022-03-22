import express from 'express';

import { getCourses, createCourse, getCourse, deleteCourse, updateCourse } from '../controllers/courses.js';

const router = express.Router();

router.get('/', getCourses);

router.post('/', createCourse);

router.get('/:id', getCourse);

router.delete('/:id', deleteCourse);

router.patch('/:id', updateCourse);

export default router;