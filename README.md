# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Component Structure and State Management

### Component Structure

The application is structured into several components, each responsible for a specific part of the UI:

- **TextEditor**: A rich text editor component that uses `ReactQuill` for text editing and formatting.
- **DataForm**: A form component for collecting and saving user data.
- **Counter**: A counter component that demonstrates state management with animations.
- **AuthenticationPage**: A component for handling user authentication.
- **Additional**: A placeholder component for additional features.

### State Management

State management in this application is handled using Redux Toolkit. The state is divided into slices, each responsible for a specific part of the application's state:

- **userSlice**: Manages user data and rich text content. It saves and retrieves data from `localStorage` to persist state across sessions.
- **counterSlice**: Manages the counter value, with actions to increment, decrement, and reset the counter. The counter value is also persisted in `localStorage`.
- **authenticationSlice**: Manages user authentication state.

The Redux store is configured in `src/Redux/store.js` and provided to the application using the `Provider` component from `react-redux`.

### Example Usage

- **TextEditor**: Fetches user data from `localStorage` and displays it in a rich text format if no saved text is available.
- **DataForm**: Collects user data and saves it to both Redux state and `localStorage`. It also clears the rich text content upon submission.
- **Counter**: Demonstrates state management with Redux by allowing the user to increment, decrement, and reset a counter value, with animations for visual feedback.
- **AuthenticationPage**: Handles user sign-in using a button that dispatches a login action.

This structure ensures a clear separation of concerns and makes the application scalable and maintainable.
