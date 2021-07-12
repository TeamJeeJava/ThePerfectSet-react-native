import React from 'react';
import {render, cleanup} from '@testing-library/react-native';
import App from '../App.js';

afterEach(cleanup);

describe('App', () => {
  test('App is rendering correctly', () => {
    render(<App />);
  });
});
