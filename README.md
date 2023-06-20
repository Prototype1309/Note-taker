## Express.js: Note Taker

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

This application can be used to write and save notes, allowing the user to better organize their thoughts and keep track of the tasks they need to complete. This application uses an Express.js back end to save and retrieve note data from a JSON file.

### How it works

The following steps explain how this "Note Taker" application works:

1. When a user opens the Note Taker, they are presented with a landing page containing a link to a notes page.
2. When the user clicks on the link to the notes page, they're presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note's text in the right-hand column.
3. When the user enters a new note title and the note's text, a save icon appears in the navigation at the top of the page.
4. When the user clicks on the save icon, the new note they've entered is saved and appears in the left-hand column with the other existing notes.
5. When the user clicks on an existing note in the list in the left-hand column, that note appears in the right-hand column.
6. When the user clicks on the write icon in the navigation at the top of the page, they're presented with empty fields to enter a new note and the note's text in the right-hand column.

## Table of Contents

- [**Installation**](#installation)
- [**Usage**](#usage)
  [**credits**](#credits)
- [**Questions**](#questions)

# Installation

This app uses an Express.js back end to save and retrieve note data from a JSON file. [**Node.js**](https://nodejs.org/en/download/), which is a run-time environment which includes everything you need to execute a program written in JavaScript. If haven't downloaded the [**Node.js**](https://nodejs.org/en/download/) source code or a pre-built installer for your platform, you will need to do so using this [**link**](https://nodejs.org/en/download/).

The dependencies required for this project are:

- [**Express**](https://expressjs.com/) is the most widely used Node.js server framework, this allows us to create our own server-side APIs.

- [**Generate Unique ID**](https://www.npmjs.com/package/generate-unique-id) is used to generate a unique random ID string because each note needs a unique id when it's saved into our database.

To initialize your project and install these required dependencies, open a command prompt at the project's directory and run:

```
npm init -y  // initialize the project with NPM
npm install express  // for express dependencies
npm install generate-unique-id  // for generate unique id dependencies
```

## Usage

Click [**here**](https://takenotes2-6eb49beb017b.herokuapp.com/) to view deployed application on Heroku.

## Credits

The application's front end was provided. To give the application its CRUD (create, read, update, and delete) functionality, I built the bank end, connected the two, and then deployed the entire application to Heroku.

## Questions

Please use the contact information below if you would like to reach me with any questions.

- Github Profile: [**@prototype=1309**](https://github.com/Prototype1309/Note-taker)
- Email: [**simo.hourri@gmail.com**]