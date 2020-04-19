import React from 'react';
import { connect } from 'react-redux'
import * as courseActions from '../../redux/actions/courseActions';
import PropTypes from 'prop-types';

// option 3 bindActionCreators
import { bindActionCreators } from 'redux';

class CoursesPage extends React.Component {
    state = {
        course: {
            title: ""
        }
    }

    handleChange = e => {
        const newCourse = { ...this.state.course, title: e.target.value }
        this.setState({
            course: newCourse
        })
    }

    handleSumit = e => {
        e.preventDefault();
        //option 1
        // this.props.dispatch(courseActions.createCourse(this.state.course))

        // option 2
        this.props.createCourse(this.state.course);
        //option 3
        // this.props.actions.createCourse(this.state.course)
    }

    render() {
        return (
            <>
                <form onSubmit={this.handleSumit}>
                    <input
                        type="text"
                        onChange={this.handleChange}
                        value={this.state.course.title}
                    />
                    <input type="submit" value="Save" />
                    {this.props.courses.length > 0 && this.props.courses.map(course => (
                        <div key={course.title}>{course.title}</div>
                    ))}
                </form>
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
    createCourse: PropTypes.func.isRequired,
    courses: PropTypes.array.isRequired,
    //option 3
    /*
    action: PropTypes.object.isRequired,
    courses: PropTypes.array.isRequired,
    */
}

function mapStateToProps(state, ownProps) {
    return {
        courses: state.courses,
    }
}

// option2 manually wrap
function mapDispatchToProps(dispatch) {
    return {
        createCourse: course => dispatch(courseActions.createCourse(course))
    }
}

// option3 bindActionCreators
/**
function mapDispatchToProps(dispatch){
    return {
        // all actions. if you have one, you can specific one only,
        // createCourse: ...
        actions: bindActionCreators(courseActions, dispatch);
    }
}
 */

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
