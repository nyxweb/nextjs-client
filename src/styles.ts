import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-size: 14px;
    color: #61738e;
    background: #121a25;
  }

  * {
    box-sizing: border-box;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }

  a {
    all: unset;
    position: relative;
    color: #b7cdef;
    cursor: pointer;
    display: inline-block;
    transition: 0.2s ease-in-out;

    &:hover {
      color: #c8ddf1;
      filter: brightness(120%);
      text-shadow: 0 0 5px rgba(200, 221, 241, 0.4);
    }
  }

  input {
    background-color: #131f2d;
    border: 1px solid #2c3545;
    color: #7d8a9f;
    padding: 5px 10px;
    font-size: 12px;
    border-radius: 3px;
    transition: all 0.3s ease;
    outline: none;

    &:hover {
      border: 1px solid #3e4e69;
    }
  }
`;
