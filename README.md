# My Portfolio

Hello, this is my portfolio project codebase.<br>
You can visit the live website [here](https://maro-portfolio-bead9.web.app/).

## Main Features
This project while simple, after all it's only a website to share my professional information, hides an underlaying complexity that it cannot be easily perceived by the client's view.

The features I would hightlight are the following:

- **CI/CD** operations with **GitHub Actions**, enabling automatic deployments to **Firebase Hosting** after each push or pull request.

- Integration of an **AI Chat Assistant** to help users about the services I can provide.<br><br>
There is also a backend application running on a **GCloud App Engine** service. This backend is made with **Python** and handles the communication with the frontend via **websockets**, receiving the messages from the chat and passing them to an **AI Agent**.<br><br>I'm using a **semantic kernel agent** to process the messages and at the same time this agent utilizes a **Gemini LLM** to generate text responses, then it sends them back to this frontend which listens continuosly for the response event.<br><br>
The **AI Agent** is also able to store users data (name, contact info, and project details) integrating a custom plugin that enables it to perform this task whenever it finds it reasonable based on the users messages.

You can check the backend repository [here]().

## Thank you

If you liked this project a star with be greatly appreciated, thank you for passing by!

## Contact Me
If you'd like to reach out, feel free to do it via:

[LinkedIn](https://www.linkedin.com/in/gumaro-monroy-vazquez/)

My email: maromvz@gmail.com
