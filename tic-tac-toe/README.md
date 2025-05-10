# Tic Tac Toe Game

This is my **first React project**, inspired by the [React documentation](https://react.dev/learn). It is a simple implementation of the classic Tic Tac Toe game, built using **React**, **TypeScript**, and **Vite**.

## Features

- **React Hooks**: Learned and implemented [`useState`](https://react.dev/reference/react/useState) for managing state.
- **Custom Components**: Created reusable components like [`WinnerAlert`](src/components/WinnerAlert.tsx), [`RestartButton`](src/components/RestartButton.tsx), and [`Modal`](src/components/Modal.tsx).
- **Bootstrap Integration**: Used [Bootstrap](https://getbootstrap.com/) for styling and responsive design.
- **Custom Modal**: Built a custom modal for game restart confirmation.
- **Game Logic**: Implemented the logic to determine the winner or a draw.

## How to Run

1. Clone the repository:

   ```bash
   git clone https://github.com/Falabdullateef/tic-tac-toe.git
   cd tic-tac-toe
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the game in your browser at [http://localhost:5173](http://localhost:5173).

## Project Structure

- **Game Board**: The game board is rendered using the [`Square`](src/App.tsx#L15) component.
- **Winner Announcement**: Displays the winner using the [`WinnerAlert`](src/components/WinnerAlert.tsx) component.
- **Restart Button**: Allows restarting the game with a confirmation modal using the [`RestartButton`](src/components/RestartButton.tsx) and [`Modal`](src/components/Modal.tsx) components.

## What I Learned

- **React Basics**: Understanding components, props, and state management.
- **React Hooks**: Using [`useState`](https://react.dev/reference/react/useState) for managing game state.
- **Custom Modals**: Creating a reusable modal component for user interactions.
- **Bootstrap Integration**: Styling the app with [Bootstrap](https://getbootstrap.com/).
- **Game Logic**: Implementing the logic to calculate the winner or detect a draw.

## Inspiration

This project was inspired by the [React documentation](https://react.dev/learn), which provided a great starting point for learning React.

## Future Improvements

- Add animations for smoother transitions.
- Implement a scoreboard to track wins and draws.
- Add an AI opponent for single-player mode.
- **Undo/Redo Functionality**: Allow players to undo or redo their moves for better gameplay flexibility.

## License

This project is open-source and available under the [MIT License](LICENSE).
