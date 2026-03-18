# ScriptSpeak

ScriptSpeak is a simple front-end text-to-speech demo built with plain HTML, CSS, and JavaScript. It lets a user type text into a textarea, press a button to hear the text spoken aloud in the browser, and swaps an image for an animated GIF while speech is playing.

## What the project does

- Uses the browser's built-in Web Speech API through `SpeechSynthesisUtterance`
- Reads user-entered text from a textarea
- Plays the spoken output when the `Play Me` button is clicked
- Changes the character image to an animated GIF while speech is active
- Speaks a short message when the image area is hovered

## Tech stack

- HTML
- CSS
- Vanilla JavaScript
- Browser Web Speech API (`window.speechSynthesis`)

## Project structure

- `index.html`  
  Main page markup for the text-to-speech interface.

- `style.css`  
  Basic page styling and layout rules.

- `speaking.js`  
  Handles speech synthesis, button click behavior, hover speech, and image animation swapping.

- `Jake.JPG` / `Jake.gif`  
  Static and animated character assets used in the UI.

## How it works

When the page loads, the script creates a single `SpeechSynthesisUtterance` object and wires up three behaviors:

1. Clicking the play button reads the textarea content and sends it to `window.speechSynthesis.speak(...)`.
2. Starting speech swaps the main image to a GIF.
3. Ending speech restores the static image.

There is also a hover interaction that speaks the phrase `"Don't touch me"` when the image container is hovered.

## How to run

Because this is a static front-end project, you can run it by opening `index.html` in a browser.

For best results:

- Use a modern browser such as Chrome or Edge
- Make sure the browser supports the Web Speech API
- If speech does not play when opened directly, run it from a simple local server

Example local server options:

```powershell
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Notes from the code review

- The app is lightweight and easy to follow, with no build step or dependencies.
- The project currently uses the title `Document` in `index.html`; this could be renamed to something more descriptive like `ScriptSpeak`.
- The code and markup consistently use `speach` instead of `speech` in a few identifiers such as `speachBox`. This does not break functionality, but it may be worth cleaning up for readability.
- The image filenames use different capitalization in code (`Jake.gif`, `Jake.jpg`) versus the repository file list (`Jake.gif`, `Jake.JPG`). On case-sensitive systems, that mismatch could break image loading.
- The animation event handlers call `startAnimation(...)` and `stopAnimation(...)` with arguments even though those functions do not use parameters. This is harmless, but a little unnecessary.

## Possible next improvements

- Add a stop or pause button
- Let users choose voice, rate, and pitch
- Improve layout and responsive styling
- Add validation for empty text input
- Rename a few variables and headings for clarity
- Fix the image filename casing so it works reliably across environments

## Summary

This project is a beginner-friendly browser speech app that demonstrates how to connect a simple UI to the Web Speech API. It is small, understandable, and a good base if you want to expand it into a more polished accessibility, narration, or character-voice tool.
