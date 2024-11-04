import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
`;

export const Title = styled.h2`
  margin-bottom: 10px;
`;

export const Description = styled.p`
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  font-weight: bold;
  margin-bottom: 10px;
  display: block;
`;

export const Select = styled.select`
  padding: 8px;
  margin-top: 5px;
  width: 100%;
`;

export const Button = styled.button`
  padding: 10px 15px;
  margin-top: 10px;
  margin-right: 10px;
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

export const InfoRow = styled.div`
  display: flex;
  margin-bottom: 5px;
`;

export const InfoLabel = styled.div`
  font-weight: bold;
  width: 100px;
`;

export const InfoValue = styled.div`
  color: #555;
`;
