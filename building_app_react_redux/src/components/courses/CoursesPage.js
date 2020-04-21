import React from 'react';
import { connect } from 'react-redux'
import * as courseActions from '../../redux/actions/courseActions';
import PropTypes from 'prop-types';

// option 3 bindActionCreators
import { bindActionCreators } from 'redux';

import CoursesList from './CoursesList';

class CoursesPage extends React.Component {
    componentDidMount() {
        // option 2
        // this.props.loadCourses()
        this.props.actions.loadCourses()
            .catch(err => {
                alert(err)
            })
    }

    render() {
        return (
            <>
                <h2>Courses </h2>
                <CoursesList courses={this.props.courses} />
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
}

function mapStateToProps(state, ownProps) {
    return {
        courses: state.courses,
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
        actions: bindActionCreators(courseActions, dispatch)
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
