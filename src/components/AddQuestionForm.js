import styled from "styled-components";

/** AddQuestionForm component*/
export const FormDivContainer = styled.div`
  border-radius: 5px;
  background-color: #c53e55;
  padding: 20px;
`;

export const FormRow = styled.div`
  &:after {
    content: "";
    display: table;
    clear: both;
  }
`;

export const FormLabelContainer = styled.div`
  float: left;
  width: 25%;
  margin-top: 6px;
  @media (max-width: 600px) {
    width: 100%;
    margin-top: 0;
  }
`;

export const FormInputContainer = styled.div`
  float: left;
  width: 75%;
  margin-top: 6px;
  @media (max-width: 600px) {
    width: 100%;
    margin-top: 0;
  }
`;

export const FormSubmitButton = styled.button`
  background-color: #c53e55;
  color: #dadada;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  float: right;
  &.hover {
    background-color: #c53e55;
  }
  @media (max-width: 600px) {
    width: 100%;
    margin-top: 0;
  }
`;

export const FormLabel = styled.label`
  padding: 12px 12px 12px 0;
  display: inline-block;
  color: #dadada;
`;

export const FormTextInput = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
`;
