# Radio Streaming Take-Home Project

## Introduction
Hi Anthony,

Max Nash here.

I've built out the requirements as per the Radio Streaming team take-home. It was actually a great refresher! 

For context, when I originally learned React and JavaScript, it was non-type-safe, ES6-based, and quite vanilla. Routers and state management were a lot more complex back then compared to now. 

With this project, I stretched my legs a little. While it’s not the most visually polished solution (I prioritized functionality over form), it meets all the requirements.

---

## Getting Started
### Installation & Running the Project
```sh
cd frontend
npm install
npm run dev
```

---

## Key Learnings
During this project, I explored and refreshed my knowledge on several React-related concepts:

### React Router v6
- **`useNavigate` & `useLocation`**
- Previously, I was familiar with React Router v5. While the `Route` tags are functionally the same, navigation has changed.
- **Navigate:** A simpler alternative to `NavLink/Link`, making navigation easier.
- **Location:** A useful tool for passing state between routes.

### React Query (Instead of `useEffect`)
- I referenced the official docs as well as [this article](https://medium.com/@mayank2803sharma/react-query-vs-useeffect-understanding-the-differences-d7ad480a0bab).
- I liked React Query's built-in error and loading state handling, which made data fetching much more readable with less manual work.

### Audio Player (First-Time Implementation)
- I researched various libraries and chose [react-h5-audio-player](https://www.npmjs.com/package/react-h5-audio-player).
- The library had great documentation and out-of-the-box functionality, making features like `forward` and `back` navigation via `progressJumpSteps` simple to implement.

### Hooks & State Management
- While I have worked with hooks in personal projects, my career experience so far has been more Redux/Sagas-heavy.
- Returning to hooks for this project was a refreshing change, as they are much more intuitive than Redux for state management in smaller applications.

### Vite (Instead of Create-React-App)
- I originally learned React using `create-react-app`, so moving to Vite was an adjustment.
- The performance improvements and smooth development experience were great.
- I enjoyed it so much that I even converted a previous CRA project to Vite.

---

## Potential Improvements (For Production Readiness)
If I had more time or developers available, I would enhance the project in several ways:

1. **Unit & API Testing**
   - Use Jest or React Testing Library for basic unit rendering and mock API tests.
   - Potentially add snapshot testing for component consistency.

2. **Stronger Error Handling**
   - While I’ve covered basic failure cases, improving error handling is always valuable.

3. **Extendability Considerations**
   - As a general rule i've tried to keep things fairly decoupled and extendable, but i'm confident more could be done.

4. **Containerization**
   - Use Docker to package the app for easier deployment and scalability.

5. **Environment Variables**
   - Hide API endpoints and other sensitive data using `.env` files.

6. **AWS Hosting & Deployment**
   - Implement AWS hosting with environment variables to remove dependency on localhost ports and enhance security.

7. **Feature Enhancements**
   - Add user authentication and role-based view permissions.

8. **Styling Improvements**
   - UI/UX is not my expertise, but a more polished design would enhance usability.

---

## AI Assistance in This Project
I took a hands-on approach to this project, treating it as an opportunity to sharpen my skills through trial and error, Google, Stack Overflow, and documentation.

That said, I did use AI in a few ways:
- **Initial Styling**: GPT assisted in generating some basic CSS for the card components.
- **React Query & Router Nesting Patterns**: AI helped clarify how to structure nested routes and queries in `App.tsx`.
- **Documentation Simplification**: When a part of the documentation was unclear, I asked GPT to explain it in layman's terms.
- **README Formatting**: I followed [this article](https://www.freecodecamp.org/news/how-to-write-a-good-readme-file/) and then used GPT to help format this README accordingly.

---

## Final Thoughts
This project was a great learning experience and a chance to refresh my React skills in a more modern context. Looking forward to your feedback!

Thanks,  
**Max Nash**
