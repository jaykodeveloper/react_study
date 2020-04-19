import React from 'react';
import { connect } from 'react-redux'
import * as courseActions from '../../redux/actions/courseActions';
import PropTypes from 'prop-types';

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
        this.props.dispatch(courseActions.createCourse(this.state.course));
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
    dispatch: PropTypes.func.isRequired,
    courses: PropTypes.array.isRequired,
}

function mapStateToProps(state, ownProps) {
    return {
        courses: state.courses,
    }
}

export default connect(mapStateToProps)(CoursesPage);
