# React Course Projects

This repository contains small React practice projects created while learning the most important React basics.  
The main focus of the repository is to understand how React state, props, components, events, lists, conditional rendering, CRUD operations, and `localStorage` work.

## Projects in this repository

### 1. Todo App
The Todo App was the first project in this repository. It was built to practice the basic logic of working with arrays in React.

### 2. Note App
The Note App is a second practice project based on the same CRUD logic, but with a more realistic structure. Each note has a title, text, creation date, and can be deleted or edited.

### 3. Tic-Tac-Toe (Infinity Mode)
A modern Tic-Tac-Toe game with a unique infinity mode where, after the 6th move, the oldest piece of the current player automatically disappears from the board, freeing up space to continue the game endlessly until someone wins.

## Commit history / development progress

| Commit | Update | Explanation |
|---|---|---|
| `a0d9141` | First commit | Created the first Vite + React project structure and added the initial app files. |
| `d30b4a4` | Add filter | Added filtering logic. |
| `93163b5` | Change the logic from index to id | Changed the todo logic to use unique `id` values instead of array indexes. |
| `5a78f0a` | Add handleToggleDone | Added the first version of the function for switching a todo between done and not done. |
| `9ea13a2` | Improve handleToggleDone | Continued improving the done/undo logic. |
| `4064212` | Add edit | Added editing logic for todos. |
| `13adc20` | Make different components | Split the Todo App into smaller components. |
| `ae43b64` | Implement Todo App with components and CRUD | Finished the Todo App as a component-based CRUD app. |
| `45fab9e` | Add localStorage | Added `localStorage` so todos stay saved. |
| `3f90974` | Made NoteApp | Replaced the Todo App with a new Note App. |
| `375f083` | Make different components for NoteApp | Split the Note App 