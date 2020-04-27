import React from 'react';
import { mount } from 'enzyme';
import { authors, newCourse, courses } from '../../../tools/mockData';
import { ManageCourse } from './ManageCourse';

function renderManageCourse(args) {
    const defaultProps = {
        courses,
        authors,
        loadCourses: jest.fn(),
        loadAuthors: jest.fn(),
        saveCourses: jest.fn(),
        history: {},
        course: newCourse,
        match: {}
    }

    const props = { ...defaultProps, ...args }
    return mount(<ManageCourse {...props} />)
}

it("should return error message when click save button without contents", () => {
    const wrapper = renderManageCourse()
    wrapper.find('form').simulate('submit');
    wrapper.debug();
    const error = wrapper.find('.alert').first();
    expect(error.text()).toEqual('Title is required');
})