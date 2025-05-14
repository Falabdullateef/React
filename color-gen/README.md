# React Random Color Changer

This is a fun little React app that changes its background to a random color. You can pick if you want a HEX code color or an RGB color.

## What it Does

- **Pick a Color Type:** You can choose "HEX" or "RGB" for the kind of color code you want.
- **Get a Random Color:** Click a button, and it makes a new random color.
- **See it Live:** The whole page background changes to the new color right away!

## How It Works (The Gist)

The app keeps track of what type of color you want (HEX or RGB) and what the current color is.

- **Making HEX Colors:** It picks 6 random letters/numbers (like A-F, 0-9) and puts a "#" in front.
- **Making RGB Colors:** It picks three random numbers (from 0 to 224 for red, green, and blue) and puts them in an "rgb(r, g, b)" format.
- When you click "Generate Random Color", it makes a new color based on your choice and updates the page.

## How to Run It

1.  Make sure you have Node.js and npm (or yarn) on your computer.
2.  Download the project files.
3.  Open your computer's terminal, go into the project folder (e.g., `cd color-gen`).
4.  Type `npm install` (or `yarn install`) and press Enter.
5.  Type `npm run dev` (or `yarn dev`) and press Enter.
6.  Open the website address it shows you in your web browser.

## Future Improvements

Here are some cool things that could be added later:

- **Toggle Button for Mode:** Instead of two buttons for HEX/RGB, one button that switches between them.
