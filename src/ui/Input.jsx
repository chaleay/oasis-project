import styled from "styled-components";
import { css } from "styled-components";

const Input = styled.input`
  border: 1px solid var(--color-grey-300);
  border-radius: var(-color-grey-0);
  border-radius: var(--border-radius-sm);
  padding: 0.8rem 1.2rem;
  box-shadow: var(--shadow-sm);

  /* ${(props) =>
    props.darkMode &&
    css`
      color: black;
    `} */
`;

export default Input;
