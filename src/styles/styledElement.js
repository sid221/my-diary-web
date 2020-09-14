import styled from "styled-components";
import colors from "./theme";

const Input = styled.input`
  width: 100%;
  height: 2rem;
  margin: 0.5rem 0;
  padding: 0.1rem 0.4rem;
  background: ${colors.bg2};
  border: none;
  border-radius: 5px;
  position: relative;
  :focus {
    outline-color: #0e34a0;
  }
`;

const InputWithIcon = styled.div`
  position: relative;
  > input {
    width: calc(100% - 2.7rem);
    padding-left: 2.4rem;
  }
  > i {
    position: absolute;
    top: 1rem;
    left: 0.75rem;
    font-size: 1.3rem;
    color: ${colors.bg3};
  }
`;

const StyledForm = styled.form`
  width: 15.5rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Button = styled.button`
  box-shadow: 0px 0px 10px 1px ${colors.bg3};
  height: 2rem;
  border: ${(props) => (props.noBackground ? `2px ${colors.bg3}` : "none")};
  border-radius: 5px;
  font-size: 1rem;
  letter-spacing: 0.1px;
  color: ${colors.bg1};
  background: ${(props) => (props.noBackground ? colors.bg1 : colors.bg3)};
`;

const Select = styled.select`
  border: none;
  height: 2rem;
  margin: 0.5rem 0;
  padding: 0.1rem 0.4rem;
  font-size: 0.95rem;
  font-weight: 600;
  color: ${colors.bg3};
  background: ${colors.bg2};
  border-radius: 5px;
  font-family: FontAwesome, -apple-system, BlinkMacSystemFont, "Segoe UI",
    "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
    "Helvetica Neue", sans-serif;
`;
const Option = styled.option`
  font-size: 0.95rem;
  font-weight: 600;
  color: ${colors.bg3};
`;

const P = styled.p`
  margin: 0;
  font-size: 0.7rem;
`;

export { Input, Button, InputWithIcon, StyledForm, Select, Option, P };
