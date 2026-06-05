# React Course Projects

This repository contains small React practice projects created while learning the most important React basics.  
The main focus of the repository is to understand how React state, props, components, events, lists, conditional rendering, CRUD operations, and `localStorage` work.

## Projects in this repository

### 1. Todo App

The Todo App was the first project in this repository. It was built to practice the basic logic of working with arrays in React.

Main features:

- Add new todos
- Delete todos
- Mark todos as done / undo them
- Edit todos
- Cancel editing
- Save todos in `localStorage`
- Split the app into smaller components

Main React concepts used:

- `useState`
- `useEffect`
- `props`
- `map()`
- `filter()`
- conditional rendering
- `localStorage`

### 2. Note App

The Note App is a second practice project based on the same CRUD logic, but with a more realistic structure. Each note has a title, text, creation date, and can be deleted or edited.

Main features:

- Add notes with title and text
- Prevent empty notes
- Add creation date with `new Date()`
- Delete notes
- Edit notes
- Save notes in `localStorage`
- Split the app into components:
  - `NoteInput`
  - `NoteList`
  - `NoteItem`

Main React concepts used:

- controlled inputs
- component structure
- passing functions through props
- working with arrays of objects
- `JSON.stringify()` and `JSON.parse()`
- `localStorage`
- 
## Commit history / development progress

| Commit | Update | Explanation |
|---|---|---|
| `a0d9141` | First commit | Created the first Vite + React project structure and added the initial app files. |
| `d30b4a4` | Add filter | Added filtering logic, which was an early practice step for working with arrays and displaying only selected items. |
| `93163b5` | Change the logic from index to id | Changed the todo logic to use unique `id` values instead of array indexes. This is better because indexes can change when items are deleted or reordered. |
| `5a78f0a` | Add handleToggleDone | Added the first version of the function for switching a todo between done and not done. |
| `9ea13a2` | Improve handleToggleDone | Continued improving the done/undo logic and made the todo status easier to control through state. |
| `4064212` | Add edit | Added editing logic for todos, including edit mode, edited text, and saving changes. |
| `13adc20` | Make different components | Split the Todo App into smaller components. This made the project structure cleaner and easier to understand. |
| `ae43b64` | Implement Todo App with components and CRUD | Finished the Todo App as a component-based CRUD app with create, read, update, and delete functionality. |
| `45fab9e` | Add localStorage | Added `localStorage` so todos stay saved even after refreshing the page. |
| `3f90974` | Made NoteApp | Replaced the Todo App with a new Note App and added basic note functionality. |
| `375f083` | Make different components for NoteApp | Split the Note App into `NoteInput`, `NoteList`, and `NoteItem` components to practice props and component architecture. |

## What I learned

During these projects, I practiced the most important React fundamentals:

- how to create components
- how to pass data with props
- how to use `useState`
- how to save data with `useEffect` and `localStorage`
- how to render lists with `map()`
- how to delete items with `filter()`
- how to update items with `map()`
- how to work with controlled inputs
- how to split a project into smaller files
