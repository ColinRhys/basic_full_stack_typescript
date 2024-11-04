// components/IssueForm/styles.ts

import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 15px;
  font-weight: bold;
`;

export const Input = styled.input`
  padding: 8px;
  margin-top: 5px;
  width: 100%;
`;

export const TextArea = styled.textarea`
  padding: 8px;
  margin-top: 5px;
  width: 100%;
  height: 100px;
`;

export const Select = styled.select`
  padding: 8px;
  margin-top: 5px;
  width: 100%;
`;

export const Button = styled.button`
  padding: 10px 15px;
  margin-top: 10px;
  background-color: #0070f3;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #005bb5;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const ErrorMessage = styled.div`
  color: red;
  margin-bottom: 10px;
`;

export const SuccessMessage = styled.div`
  color: green;
  margin-bottom: 10px;
`;
