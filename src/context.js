// context.js
import React from 'react';

export const languajes = {
  spanish: {
    name: 'Spanish'
  },
  english: {
    name: 'English'
  }
};

const LangContext = React.createContext(languajes.spanish);

export default LangContext;