# React 10-Star Rating Component

This project implements a React-based 10-star rating component with a highlight-on-hover feature.

## Functionality

The component displays ten stars, allowing users to rate something by hovering over the stars. When a user hovers over a particular star, that star and all the stars before it will visually light up, indicating the selected rating.

## Key Features

- **Interactive Rating:** Users can easily select a rating by hovering over the stars.
- **Highlight on Hover:** Hovering over a star highlights it and all preceding stars.
- **React-Based:** Built using React for reusability and easy integration.

## Usage

1.  Import the component into your React application.
2.  Render the component where you want the star rating to appear.

## Example

```jsx
import StarRating from "./components/StarRating";

function MyComponent() {
  return (
    <div>
      <StarRating />
    </div>
  );
}
```
