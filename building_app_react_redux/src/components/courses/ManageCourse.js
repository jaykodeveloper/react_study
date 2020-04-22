import React from 'react';
import { connect } from 'react-redux'
import { loadCourses } from '../../redux/actions/courseActions';
import { loadAuthors } from '../../redux/actions/authorActions'
import PropTypes from 'prop-types';

class ManageCourse extends React.Component {
    componentDidMount() {
        const { courses, authors, loadCourses, loadAuthors } = this.props;
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
    }

    render() {
        return (
            <>
                <h2>Manage Courses </h2>
            </>
        );
    }
};

ManageCourse.propType = {
    courses: PropTypes.array.isRequired,
    authors: PropTypes.array.isRequired,
    loadCourses: PropTypes.func.isRequired,
    loadAuthors: PropTypes.func.isRequired,
}

function mapStateToProps(state, ownProps) {
    return {
        courses: state.courses,
        authors: state.authors
    }
}

const mapDispatchToProps = {
    loadCourses,
    loadAuthors
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCourse);
