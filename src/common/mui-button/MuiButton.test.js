
import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MuiButton from '../../common/mui-button/MuiButton';

configure({ adapter: new Adapter() })

describe('Test MuiButton component', () => {
    it('Test click event', () => {
      const mockCallBack = jest.fn();
  
      const button = shallow((<MuiButton onClick={mockCallBack}>Ok!</MuiButton>));
      button.find('#button').simulate('click');
      expect(mockCallBack.mock.calls.length).toEqual(1);
    });
  });