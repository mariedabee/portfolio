## User Authentication Mechanisms

### Login
The login mechanism allows users to authenticate themselves to the system securely.

- **Endpoint**: Accessible via a POST request to `/login`.
- **Input Data**: Users provide their username and password in the request body.
- **Authentication**:
  - The system retrieves the user's record based on the provided username.
  - If the user is found, the password provided is compared with the hashed password stored in the database.
  - If the passwords match, the user is authenticated.
- **Response**:
  - Upon successful authentication, an HTTP status code 200 is returned with a success message.
  - If authentication fails, an HTTP status code 401 is returned with an error message indicating invalid credentials.
  - Errors during the process result in an HTTP status code 500 with a message indicating an internal server error.

### Sign Up
The sign-up mechanism allows users to create new accounts in the system.

- **Endpoint**: Accessible via a POST request to `/signup`.
- **Input Data**: Users provide their desired username, email address, and password in the request body.
- **Validation**:
  - The system checks if the provided username or email address already exists in the database.
  - If a user with the same username or email exists, an error response is returned.
- **Password Hashing**:
  - User passwords are securely hashed using bcrypt before being stored in the database.
- **Account Creation**:
  - Unique usernames and email addresses are inserted into the database along with the hashed password.
- **Response**:
  - Upon successful account creation, an HTTP status code 201 is returned with a success message.
  - If account creation fails, an HTTP status code 400 is returned with an error message indicating user already exists.
  - Errors during the process result in an HTTP status code 500 with a message indicating an internal server error.
