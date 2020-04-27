import React from 'react';
import Header from './Header';
import { mount, shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

//shallow
it("contains 3 NavLinks", () => {
    const numLinks = shallow(<Header />).find('NavLink').length;
    expect(numLinks).toBe(3);
})

//mount
it("contains 3 anchors", () => {
    const numAnchors = mount(
        <MemoryRouter>
            <Header />
        </MemoryRouter>
    ).find('a').length;
    expect(numAnchors).toBe(3);
})