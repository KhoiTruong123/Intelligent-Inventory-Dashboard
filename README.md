🚗 Keyloop Drive: Intelligent Inventory Dashboard
An advanced automotive inventory management system designed for dealership managers to identify, track, and manage "Aging Stock" (>90 days) efficiently.

🛠 Prerequisites
Before running the application, ensure you have the following installed:

Node.js: v18.0.0 or higher

npm: v9.0.0 or higher

🚀 Getting Started
To run this application, you need to launch both the Mock API Server and the Vue Frontend.

**Step 1: Install Dependencies**
Open your terminal in the project root folder and run:
npm install

**Step 2: Start the Mock Backend (Port 3000)**
The application relies on json-server to fetch and persist vehicle data.

IMPORTANT: Ensure your db.json file is located in the project root folder (the same folder as package.json). If it is inside src/data/, please update the path in your package.json scripts.

Open a new terminal and run:
npm run server

The API will be live at: http://localhost:3000/vehicles

**Step 3: Start the Frontend (Port 8080)**
In a separate terminal window, launch the Vue CLI development server:

Open another terminal and run:
npm run serve

The Dashboard will be live at: http://localhost:8080

🤖 AI Collaboration Narrative
1. High-Level Strategy
My strategy focused on "Incremental Development" and "Modular Architecture". I guided the AI to build the project in logical phases:

Data Modeling: Crafting a professional JSON schema that reflects real-world dealership data and high-quality visual assets.

Component Engineering: Creating a reactive VehicleCard component that dynamically changes its UI state based on the "Aging Stock" business rule.

Persistence Layer: Implementing a reliable flow to log and update "Proposed Actions" using RESTful principles.

2. Verification & Refining Process
I maintained strict quality control by:

Architectural Refinement: When the AI initially suggested direct prop mutations (violating Vue's one-way data flow), I intervened and refactored the code to use Event Emits. This ensures better maintainability and follows the "Props Down, Events Up" best practice.

UI/UX Polishing: I refined the Tailwind CSS implementation to include "Placeholder Spacing," ensuring all vehicle cards maintain a uniform height and grid alignment regardless of content length.

Bug Resolution: I actively troubleshot and resolved path issues between the json-server and the project directory structure, ensuring the mock backend starts correctly and handles data errors gracefully.

3. Ensuring Final Quality
Vue Style Guide Compliance: Enforced multi-word component naming (e.g., TheFooter.vue) to prevent naming collisions with standard HTML tags.

Data Integrity: Manually verified that the "Aging Stock" logic (highlighting cars in stock for >90 days) perfectly aligns with the Keyloop technical requirements.

Clean Code: Optimized the Tailwind utility classes for better readability and removed redundant styles or unused dependencies.

🧪 Quality Assurance & Test Cases
Since reliability is key for inventory management, the following test cases were used to verify the application:

1. Business Logic (Aging Stock)
Test Case: Input a vehicle with an arrivalDate of 91 days ago.

Expected Result: The card must display a Red Alert Border and an "Aging Stock" badge.

Test Case: Input a vehicle with an arrivalDate of 10 days ago.

Expected Result: The card displays a standard neutral border without alerts.

2. Data Persistence (Action Logging)
Test Case: Click "Log Action" on an aging unit, enter "Discount 10%", and save.

Expected Result: The modal closes, the button text changes to "Edit Action", and the new text is displayed on the card.

Test Case: Refresh the browser after saving an action.

Expected Result: The action persists and remains visible (verified via db.json update).
📂 Project Structure
├── src/
│   ├── components/
│   │   ├── VehicleCard.vue   # Core card logic & Aging highlights
│   │   ├── ActionModal.vue   # Form for logging Proposed Actions
│   │   └── TheFooter.vue     # Dark-themed enterprise footer
│   ├── App.vue               # Main Dashboard layout
│   └── main.js               # Entry point
├── db.json                   # Mock Database (Backend)
└── package.json              # Scripts & Dependencies

**Responsive** 
Simple responsive for 3 size:
size 1:  < 768px
size 2:  > 768px < 1024px
size 3: > 1024px 


🛠 Key Commands
npm run server: Starts the json-server on Port 3000.
npm run serve: Launches the Vue CLI server on Port 8080.
npm run build: Compiles the app for production.
npm run lint: Runs ESLint to check for code quality.

Developed for the Keyloop Frontend Challenge - 2026.