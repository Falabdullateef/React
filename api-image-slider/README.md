# React Image Slider Component

This is a React component that displays an image slider. It fetches image data from an API and lets users slide through the images.

## Features

- Fetches images from a given API URL
- Auto slide with configurable interval
- Manual navigation with next and previous buttons
- Responsive layout

## Installation

1. Clone the repository or copy the component files.
2. Make sure you have React installed in your project.

## Usage

```jsx
import React from "react";
import ImageSlider from "./ImageSlider";

const App = () => {
  return (
    <div>
      <h1>Image Slider</h1>
      <ImageSlider apiUrl="https://example.com/api/images" />
    </div>
  );
};

export default App;
```

## Props

| Name     | Type   | Required | Description                      |
| -------- | ------ | -------- | -------------------------------- |
| apiUrl   | string | Yes      | The API endpoint to fetch images |
| interval | number | No       | Time in ms between auto slides   |

## API Response Format

The API should return a JSON array of image objects like this:

```json
[
  {
    "url": "https://example.com/image1.jpg",
    "alt": "Image 1 description"
  },
  {
    "url": "https://example.com/image2.jpg",
    "alt": "Image 2 description"
  }
]
```

## License

MIT
