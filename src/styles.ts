import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-size: 14px;
    color: #98a8c1;
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

  input,
  button {
    background-color: #131f2d;
    border: 1px solid #2c3545;
    color: #7d8a9f;
    padding: 5px 10px;
    font-size: 14px;
    border-radius: 3px;
    transition: 0.3s;
    outline: none;
  }

  input {
    &:hover,
    &:active,
    &:focus {
      border: 1px solid #3e4e69;
    }
  }
`;
