# Secret Santa Generator

A simple and fun web application that allows users to create a Secret Santa gift exchange. Users can add members, set restrictions on who can give gifts to whom, and generate random assignments while adhering to the defined rules.

## Features

- Add members to the Secret Santa list.
- Set restrictions for members to prevent them from giving gifts to certain individuals.
- Generate random Secret Santa assignments while respecting the restrictions.
- Display added members, their restrictions, and the final assignments in an organized format.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **CSS**: For styling the components and overall layout.

## Setup Instructions

To set up and run this application locally, follow these steps:

### Prerequisites

- **Node.js**: Ensure you have Node.js installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).

### Steps to Run the Application

1. **Clone the repository:**

   Open your terminal and run:

   ```bash
   git clone https://github.com/yourusername/secret-santa-generator.git

2. **Navigate into the project directory:**

   ```bash
   cd secret-santa-generator

4. **Install dependencies:**

   ```bash
   npm install

6. **Start the application:**

   ```bash
   npm run dev

The application will be running on http://localhost:5173 in your default web browser.

## Code Explanation

### App Component

The App component is the main entry point of the application. It manages the state for members, restrictions, and assignments using React's useState hook. It contains the following key functions:

    addMember(name): Adds a new member to the list if the name is not empty and not already included.
    setRestriction(member, restriction): Updates the restrictions for a specified member.
    generateAssignments(): Randomly assigns Secret Santa pairs while respecting the restrictions set by users.

### Child Components

    AddMemberForm:
        Allows users to input and add new members.
        Handles form submission and resets the input field.

    MembersTable:
        Displays a table of added members.
        Shows a message if no members have been added yet.

    RestrictionForm:
        Lets users select a member and specify who they cannot give gifts to.
        Adds the restriction to the state when the user submits the form.

    RestrictionsTable:
        Displays a table of restrictions for each member.
        Shows a message if no restrictions have been set.

    AssignmentsDisplay:
        Displays the final Secret Santa assignments in a list format.
        Shows a message if no assignments have been generated yet.

### Styling

The application uses a simple CSS file (App.css) to style the components, ensuring a clean and user-friendly interface. It includes styles for:

    Container layout
    Form elements
    Tables and lists
    Buttons and hover effects

For any questions or feedback, feel free to reach out via:

    GitHub: thegothamstak

Enjoy your Secret Santa experience!
