import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addNewQuestion } from "../../state/question/question.thunks";
import { useCustomForm } from "../../hooks/useCustomForm";
import {
  FormDivContainer,
  FormInputContainer,
  FormLabel,
  FormLabelContainer,
  FormRow,
  FormSubmitButton,
  FormTextInput,
  BackButton,
} from "../../components";
/**
 * This component is used for adding new quesion
 */
export default function AddQuestionPage() {
  const dispatch = useDispatch();
  const history = useHistory();

  // go back to List Question page
  const clearAndGoBack = () => {
    history.push(`/`);
  };

  // dispatch add new question action and go to home page
  const handleAddNewQuestion = (newQuestion) => {
    dispatch(addNewQuestion(newQuestion));
    alert("New question added!");
    history.push(`/`);
  };

  // form hook fallback function, used to format the value and request adding a new quesiton
  const createNewQuestion = () => {
    if (inputs.question && inputs.choices) {
      const newQuestion = {
        question: inputs.question,
        choices: inputs.choices
          .split(",")
          .filter((choice) => choice !== null && choice.toString().length > 0),
      };
      handleAddNewQuestion(newQuestion);
    }
  };

  // Initializing custom form hook with initial state value and callback function
  const { inputs, handleInputChange, handleSubmit } = useCustomForm(
    {
      question: "",
      choices: "",
    },
    createNewQuestion
  );
  return (
    <nav>
      <section>
        <BackButton
          onClick={() => {
            clearAndGoBack();
          }}
        >
          &laquo; Back
        </BackButton>
      </section>
      <br></br>
      <form onSubmit={handleSubmit}>
        <FormDivContainer>
          <FormRow>
            <FormLabelContainer>
              <FormLabel htmlFor="question">Question</FormLabel>
            </FormLabelContainer>
            <FormInputContainer>
              <FormTextInput
                type="text"
                onChange={handleInputChange}
                value={inputs.question}
                required
                name="question"
                placeholder="Your Question.."
              ></FormTextInput>
            </FormInputContainer>
          </FormRow>
          <FormRow>
            <FormLabelContainer>
              <FormLabel htmlFor="choices">Choices</FormLabel>
            </FormLabelContainer>
            <FormInputContainer>
              <FormTextInput
                type="text"
                onChange={handleInputChange}
                value={inputs.choices}
                required
                name="choices"
                placeholder="Comma seprated choices"
              ></FormTextInput>
            </FormInputContainer>
          </FormRow>
        </FormDivContainer>
        <br></br>
        <br></br>
        <FormSubmitButton type="submit">Add Question</FormSubmitButton>
      </form>
    </nav>
  );
}
