import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import { loadCourses, saveCourses } from '../../redux/actions/courseActions';
import { loadAuthors } from '../../redux/actions/authorActions'
import PropTypes from 'prop-types';
import { newCourse } from '../../../tools/mockData'
import CourseForm from './CourseForm';

const ManageCourse = ({ courses, authors, loadCourses, loadAuthors, saveCourses, ...props }) => {
    const [course, setCourse] = useState({ ...props.course })
    const [errors, setErrors] = useState({})

    useEffect(() => {
        if (courses.length === 0) {
            loadCourses()
                .catch(err => {
                    alert(err)
                })
        }

        if (authors.length === 0) {
            loadAuthors()
                .catch(err => {
                    alert(err)
                })
        }
    }, [])

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCourse(precourse => ({
            ...precourse,
            [name]: name === 'authorId' ? parseInt(value, 10) : value
        }))
    }

    const handleSave = (event) => {
        event.preventDefault();
        saveCourses(course)
    }

    return (
        <>
            <CourseForm
                course={course}
                authors={authors}
                errors={errors}
                onChange={handleChange}
                onSave={handleSave}
            />
        </>
    );
};

ManageCourse.propType = {
    course: PropTypes.object,
    courses: PropTypes.array.isRequired,
    authors: PropTypes.array.isRequired,
    loadCourses: PropTypes.func.isRequired,
    saveCourses: PropTypes.func.isRequired,
    loadAuthors: PropTypes.func.isRequired,
}

function mapStateToProps(state, ownProps) {
    return {
        course: newCourse,
        courses: state.courses,
        authors: state.authors
    }
}

const mapDispatchToProps = {
    loadCourses,
    loadAuthors,
    saveCourses
}


export default connect(mapStateToProps, mapDispatchToProps)(ManageCourse);
