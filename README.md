# EventSpot Lite

EventSpot Lite is a single-page web application where users can discover local events happening nearby. This responsive app is designed with a clean and intuitive user interface, complete with smooth animations to enhance the user experience across various devices.

## Project Overview

**Repository:** Jipnesh_Kumar_EventSpotLite  
**Hosted Application URL:** [Your Application URL](YOUR_APPLICATION_URL)  

EventSpot Lite was created as part of a project assignment to demonstrate responsive web application development with animated user interactions and clean, optimized design. The app uses mock data to simulate event listings and is built using modern frontend technologies.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Project Structure](#project-structure)
- [Future Improvements](#future-improvements)
- [License](#license)

## Features

### Event Listing Page

- **Event Cards**: Displays a list of events in a clean, grid layout. Each card includes event details like name, date, and location, with a subtle hover effect that highlights the card.
- **Search Functionality**: Users can search for events by name or location, with real-time filtering applied to the event list for ease of discovery.

### Event Details Modal

- **Event Description and Image**: When an event card is clicked, a modal opens to display additional event details, including a full description and an image.
- **Modal Transitions**: Smooth fade-in and fade-out effects make the modal experience seamless, with options to close by clicking outside the modal or on the 'X' button.

### Responsive Design

- **Mobile, Tablet, and Desktop Support**: The app is fully responsive and adapts gracefully to different screen sizes and orientations, ensuring an optimized user experience across all devices.

### User Interface and Animations

- **Modern UI**: A simple yet elegant design focused on usability and clarity.
- **Smooth Animations**: Implemented animations for enhanced interactivity, including:
  - **Hover Effects**: Subtle effects on event cards and buttons to enhance usability.
  - **Loading Spinner**: A loading indicator is displayed during data fetching (simulated using mock data).
- **Visual Feedback**: Visual cues like button click feedback ensure an engaging user experience.

### Performance Optimization

- **Optimized Assets**: Images and assets are optimized for faster loading times.
- **Minimal Libraries**: Only lightweight libraries are used to maintain performance without sacrificing functionality.

### Code Quality

- **Organized and Commented Code**: Follows best practices with clear, consistent naming conventions and comments for easy readability.
- **Modular Components**: Reusable components improve maintainability and scalability.

## Technologies Used

- **Frontend Framework**: React with Vite for a fast, optimized development environment
- **Styling**: Tailwind CSS for a utility-first CSS framework, allowing for rapid and consistent styling across components
- **Mock Data**: Static JSON files simulate real-world data for events
- **Icons**: [Insert Icon Library Used if applicable, e.g., Font Awesome]

## Setup Instructions

To run EventSpot Lite locally, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Jipnesh-07/Jipnesh_Kumar_EventSpotLite.git
   cd Jipnesh_Kumar_EventSpotLite
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start the Application**:
   ```bash
   npm run dev
   ```
   Open your browser and visit `http://localhost:3000` to view the application.


## Project Structure

- `src/`: Main source code folder.
  - `components/`: Contains reusable UI components such as EventCard and EventModal.
  - `assets/`: Images and other assets used in the app.
  - `data/`: Mock data JSON files.
  - `styles/`: Tailwind CSS configuration and any custom styles.

## Future Improvements

- **Backend Integration**: Integrate a backend API to dynamically fetch event data.
- **User Authentication**: Add user authentication to allow event RSVPs or personalized event recommendations.
- **Advanced Filtering**: Implement additional filtering options for date ranges, categories, and event popularity.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
