# React URL Shortener

## Tech Stack
- React (Frontend)
- Material UI (Styling)
- React Router (Routing)
- localStorage (Data Persistence)
- Custom Logger Middleware (Logging)

## Folder Structure
- src/components: Reusable components
- src/pages: Pages for routing (Home, Stats)
- src/utils: Logger function

## Logging
A custom `logger()` function is created to track each major function call. Used in:
- URL shortening handler
- Form submission
- Data saving to localStorage

## Data Flow
- Inputs from form: long URL, optional shortcode, validity
- Data is saved in localStorage along with creation time
- Statistics page reads and shows data

## Validations
- URL required
- Validity defaulted to 30 minutes
- If no shortcode, random one generated
- Client-side checks before submission

## Routing
- `/` → URL Shortener form
- `/stats` → Statistics dashboard
