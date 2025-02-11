# TodoApp

# React Native Todo App

A simple and intuitive Todo List application built with React Native. The app allows users to manage tasks with features like adding, deleting, filtering, and local storage persistence.

<!-- ![App Demo](https://drive.google.com/file/d/1hbfI81nu1jK615ekF8ufrBwMwgu0MmFK/view?usp=sharing) -->

[![App Demo](https://img.shields.io/badge/Watch%20Demo-Click%20Here-blue)](https://drive.google.com/file/d/1hbfI81nu1jK615ekF8ufrBwMwgu0MmFK/preview)


## Features

- Create new tasks with unique IDs
- Mark tasks as completed with checkbox
- Delete tasks
- Filter tasks by status (All/Completed/Pending)
- Persistent storage using AsyncStorage
- Responsive design for both Portrait and Landscape orientations
- Clean and intuitive user interface

## Technologies Used

- React Native
- AsyncStorage for local data persistence
- React Native's built-in components and styling

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Pooja-Gajjar06/TodoApp.git
cd react-native-todo-app
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm start
# or
yarn start
```

4. Run on iOS/Android:
```bash
# For iOS
npx react-native run-ios

# For Android
npx react-native run-android
```

## App Structure

The app is organized with the following key functionality:

### 1. Task Management
- Add new tasks with a title
- Each task has a unique ID and completion status
- Delete tasks individually

### 2. Task Display
- List view of all tasks
- Checkbox for task completion
- Visual indicators for completed tasks
- Delete button for each task

### 3. Filtering System
- View all tasks
- Filter completed tasks
- Filter pending tasks

### 4. Data Persistence
- Tasks are saved locally using AsyncStorage

## Usage

1. **Adding a Task:**
   - Enter task text in the input field
   - Press "Add Task" button

2. **Completing a Task:**
   - Tap the checkbox next to the task
   - Task will be visually marked as complete

3. **Deleting a Task:**
   - Press the delete button next to the task

4. **Filtering Tasks:**
   - Use the filter control to switch between All/Completed/Pending views

