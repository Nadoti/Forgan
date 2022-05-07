import styled from "styled-components";



export const FormStyles = styled.form`

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;



`

export const Titulo = styled.h1`
  font-size: 3rem;
  line-height: 1;
  margin: 1rem 0;
  position: relative;
  z-index: 1;

  &::after {
    content: '';
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    background: #606c88;
    position: absolute;
    bottom: 5px;
    left: -5px;
    border-radius: .2rem;
    z-index: -1;
  }
`