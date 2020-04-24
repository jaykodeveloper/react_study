import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import { loadCourses, saveCourses } from '../../redux/actions/courseActions';
import { loadAuthors } from '../../redux/actions/authorActions'
import PropTypes from 'prop-types';
import { newCourse } from '../../../tools/mockData'
import CourseForm from './CourseForm';
import Spinner from '../common/Spinner'
import { toast } from 'react-toastify';

const ManageCourse = ({
    courses,
    authors,
    loadCourses,
    loadAuthors,
    saveCourses,
    history,
    ...props }) => {
    const [course, setCourse] = useState({ ...props.course })
    const [errors, setErrors] = useState({})
    const [saving, setSaving] = useState(false)

    useEffect(() => {
        if (courses.length === 0) {
            loadCourses()
                .catch(err => {
                    alert(err)
                })
        }
        else {
            setCourse({
                ...props.course
            })
        }

        if (authors.length === 0) {
            loadAuthors()
                .catch(err => {
                    alert(err)
                })
        }
    }, [props.course, props.courses])

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCourse(precourse => ({
            ...precourse,
            [name]: name === 'authorId' ? parseInt(value, 10) : value
        }))
    }

    const isFormValid = () => {
        const { title, author, category } = course
        const errors = {};

        if (!title) errors.title = "Title is required"
        if (!author) errors.author = "Author is required"
        if (!category) errors.category = "Category is required"

        setErrors(errors);
        return Object.keys(errors).length === 0;
    }

    const handleSave = (event) => {
        event.preventDefault();
        debugger;
        if (!isFormValid()) return;
        setSaving(true);
        saveCourses(course)
            .then(() => {
                toast.success("Course saved!");
                history.push('/courses');
            })
            .catch(err => {
                setSaving(false);
                setErrors({ onSave: err.message })
            })
    }

    return (
        <>
            {
                (courses.length === 0 || authors.length === 0) ?
                    <Spinner /> :
                    <CourseForm
                        course={course}
                        authors={authors}
                        errors={errors}
                        onChange={handleChange}
                        onSave={handleSave}
                        saving={saving}
                    />
            }

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
    history: PropTypes.object.isRequired
}

export function getCourseBySlug(courses, slug) {
    return courses.find(course => course.slug === slug) || null;
}

function mapStateToProps(state, ownProps) {
    const slug = ownProps.match.params.slug;
    const course = (slug && state.courses.length > 0) ?
        getCourseBySlug(state.courses, slug) : newCourse
    return {
        course,
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
