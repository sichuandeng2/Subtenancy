import React from 'react';
import {ThemeProvider,theme,
  CSSReset } from 'viviui'
import  MyFormData from './MyFormData';
function HomePage(){
  return (
      <ThemeProvider theme={theme}>
        <CSSReset />
        <MyFormData/>
      </ThemeProvider>
  )
}

export default HomePage