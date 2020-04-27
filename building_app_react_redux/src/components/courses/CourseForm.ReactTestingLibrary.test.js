import React from 'react';
import { cleanup, render } from '@testing-library/react';
import CourseForm from './CourseForm';

afterEach(cleanup);

function renderCourseForm(args) {
    const defaultProps = {
        authors: [],
        course: {},
        saving: false,
        errors: {},
        onSave: () => { },
        onChange: () => { }
    }

    const props = { ...defaultProps, ...args }
    return render(<CourseForm {...props} />)
}

test("should render Add Course header", () => {
    const { getByText } = renderCourseForm();
    (getByText("Add Course"));
})

test("should label save button as 'Save' when not saving", () => {
    const { getByText } = renderCourseForm();
    (getByText("Save"));
})

test("should label save button as 'Saving...' when saving", () => {
    const { getByText } = renderCourseForm({ saving: true });
    (getByText("Saving..."));
})