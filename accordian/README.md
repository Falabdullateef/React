# React Accordion Component

This project provides a reusable accordion UI component built with React and TypeScript, designed for easy integration into other applications.

## Introduction

An accordion is a user interface element that organizes content into collapsible sections. It typically consists of a vertically stacked list of items, each with a header. Clicking on a header expands or collapses its associated content panel, allowing users to view information compactly.

## Component Overview: `Accordion`

This `Accordion` component allows developers to quickly implement an accordion interface.

- **Purpose:** To display a list of items (e.g., questions and answers) where only one item's content is visible at a time.
- **Functionality:**
  - Takes a data source (an array of objects, each with at least an `id`, `question`, and `answer`).
  - Manages the open/closed state of accordion items.
  - Allows users to click an item's title to toggle its content visibility.
  - Ensures only one item is expanded at any given time.
- **Usage:** Import the `Accordion` component and provide it with your data to render an interactive accordion.

## Key Features

- **Data-Driven:** Populates accordion items from a provided data array.
- **Stateful:** Manages its own internal state for selected items.
- **Toggle Interaction:** Simple click interface to expand/collapse sections.
- **Single-Select:** Designed for one section to be open at a time.

## How to Use

1.  **Import the Component:**
    ```javascript
    // In your React component file
    import Accordion from "./path/to/components/accordion"; // Adjust path as needed
    ```
2.  **Prepare Your Data:**
    Ensure you have an array of data items. Each item should be an object, minimally containing `id` (string or number), `question` (string), and `answer` (string).
    Example `data.js` (or `.ts`):

    ```javascript
    // filepath: /path/to/your/data.js
    const data = [
      {
        id: "1",
        question: "What is React?",
        answer: "A JavaScript library for building user interfaces.",
      },
      {
        id: "2",
        question: "What is an accordion?",
        answer: "A UI element for collapsible content sections.",
      },
      // ... more items
    ];
    export default data;
    ```

    _(Note: The component currently imports data from a local `./data` file. For broader reusability, you might adapt it to accept data via props.)_

3.  **Render the Component:**
    ```jsx
    // In your React component's render method or functional component body
    function MyApp() {
      return (
        <div>
          <h1>My Application</h1>
          <Accordion />
        </div>
      );
    }
    ```

_(This README assumes the component, as currently written, sources its data from an internal import. For true reusability as a library component, you'd typically pass the `data` in as a prop.)_
