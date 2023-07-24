import styled from "styled-components";
import {Link} from 'react-router-dom';
import palette from "../../lib/styles/palette";
import Button from './../common/Button';

/**
 * 회원가입 또는 로그인 폼을 보여준다.
 */

const AuthFormBlock = styled.div`
  h3{
    margin: 0;
    color: ${palette.gray};
    margin-bottom: 1rem;
  }
`;

/**
 * 스타일링된 input
 */
const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[5]};
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;
  $:focus {
    color:
  }
`

const AuthForm = () => {
  return <AuthFormBlock>AuthForm</AuthFormBlock>;
};

export default AuthForm;
