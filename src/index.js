import React from 'react';
import ReactDOM from 'react-dom';
import Index from './pages/index';
import 'typeface-roboto'
import './css/homePage.css'
import './css/verticalLayout.css'
import './css/quill.css'
import 'react-quill/dist/quill.snow.css'; // ES6

// import 'antd/dist/antd.css'
ReactDOM.render(<Index />,document.querySelector('#root'));
