# Job Interview AI Generator

This is an Angular-based project that generates job interview questions and answers using OpenAI's GPT model. The application allows users to specify details such as the subject, difficulty level, and number of questions, then generates a list of job interview questions and answers in JSON format.

## Project Structure

### Components:
1. **AiComponent**: 
   - Handles the interaction with the GPT service. It sends user input (details like subject, difficulty, and question count) to the backend and displays the generated interview questions and answers.
   - Contains the sections for both input and output components.

2. **InputComponent**:
   - Collects the user's input, including the subject, difficulty level, and question count.
   
3. **OutputComponent**:
   - Displays the generated interview questions and answers.

### Services:
1. **GptService**:
   - Makes a POST request to the OpenAI GPT API with the generated prompt and retrieves the response containing the job interview questions and answers.
   
2. **PromptEngineeringService**:
   - Constructs the prompts for the GPT model based on user input, specifying the subject, level, and count of questions.

### Models:
1. **DetailModel**:
   - Represents the user's input, including subject, count of questions, and level.
   
2. **QNAModel**:
   - Represents the structure of each question and answer pair.

3. **PromptModel**:
   - Represents the structure of the prompt sent to the GPT service.
 
