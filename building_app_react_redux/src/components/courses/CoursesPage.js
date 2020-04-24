import React from 'react';
import { connect } from 'react-redux'
import * as courseActions from '../../redux/actions/courseActions';
import * as authorActions from '../../redux/actions/authorActions'
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

// option 3 bindActionCreators
import { bindActionCreators } from 'redux';

import CoursesList from './CoursesList';
import Spinner from '../common/Spinner';
import { toast } from 'react-toastify';


class CoursesPage extends React.Component {
    state = {
        redirectToAddCoursePage: false
    }
    componentDidMount() {
        // option 2
        // this.props.loadCourses()
        const { actions, courses, authors } = this.props;
        if (courses.length === 0) {
            actions.loadCourses()
                .catch(err => {
                    alert(err)
                })
        }
        if (authors.length === 0) {

            actions.loadAuthors()
                .catch(err => {
                    alert(err)
                })
        }
    }

    handleDeleteCourse = async course => {
        toast.success("Course deleted!");
        try {
            await this.props.actions.deleteCourse(course)
        }
        catch (err) {
            toast.error("Delete failed" + err.message, { autoClose: false })
        }
    }

    render() {
        return (
            <>
                {this.state.redirectToAddCoursePage && <Redirect to='/course' />}
                <h2>Courses </h2>
                {
                    this.props.loading ?
                        <Spinner /> :
                        (
                            <>
                                <button
                                    style={{ marginBottom: 20 }}
                                    className="btn btn-primary add-course"
                                    onClick={() => this.setState({ redirectToAddCoursePage: true })}
                                >
                                    Add Course
                        </button>
                                <CoursesList
                                    courses={this.props.courses}
                                    onDeleteClick={this.handleDeleteCourse}
                                />
                            </>
                        )
                }


            </>
        );
    }
};

CoursesPage.propType = {
    // option 1
    /*
    dispatch: PropTypes.func.isRequired,
    courses: PropTypes.array.isRequired
    */
    // option 2
    // createCourse: PropTypes.func.isRequired,
    // loadCourses: PropTypes.func.isRequired,
    // courses: PropTypes.array.isRequired,
    //option 3
    actions: PropTypes.object.isRequired,
    courses: PropTypes.array.isRequired,
    authors: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
}

function mapStateToProps(state, ownProps) {
    return {
        courses: state.authors.length === 0 ? [] :
            state.courses.map(course => {
                return {
                    ...course,
                    authorName:
                        state.authors.find(a => a.id === course.authorId).name
                };
            }),
        authors: state.authors,
        loading: state.apiStatus > 0
    }
}

// option2 manually wrap
// function mapDispatchToProps(dispatch) {
//     return {
//         createCourse: course => dispatch(courseActions.createCourse(course)),
//         loadCourses: () => dispatch(courseActions.loadCourses())
//     }
// }

// option3 bindActionCreators
function mapDispatchToProps(dispatch) {
    return {
        // all actions. if you have one, you can specific one only,
        // createCourse: ...
        actions: {
            loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
            loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch),
            deleteCourse: bindActionCreators(courseActions.deleteCourse, dispatch),
        }
    }
}

// option 4 make object
// when declared as an object, each property is automatically bound to dispatch
/*
const mapDispatchToProps = {
    createCourse: courseActions.createCourse
}
*/

// option 1 ignore
// export default connect(mapStateToProps)(CoursesPage);


// option 2, 3, 4
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
