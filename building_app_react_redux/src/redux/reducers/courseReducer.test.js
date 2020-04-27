import courseReducer from './courseReducer';
import * as actions from '../actions/courseActions';
import mockData from '../../../tools/mockData'

it("should add course when passed CREATE_COURSE_SUCCESS", () => {
    // arrange
    const initialState = mockData.courses;

    const newCourse = {
        id: 11,
        title: "Jest testing",
        slug: "jest-testing",
        authorId: 1,
        category: "HTML5"
    };

    const action = actions.createCourseSuccess(newCourse);

    // act
    const newState = courseReducer(initialState, action);

    // assert
    expect(newState.length).toEqual(11);
    expect(newState[0].title).toEqual("Securing React Apps with Auth0");
    expect(newState[1].title).toEqual("React: The Big Picture");
    expect(newState[10].title).toEqual("Jest testing");
});