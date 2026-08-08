# AI Usage Log

This project was built through an AI-assisted, iterative workflow in Codex.

## Product prompt

> Build a polished, mobile-first frontend prototype for ABTalks, a 60-day coding challenge for college students. It needs a landing page, student dashboard, and challenge-day experience. Prioritize 390px mobile usability, clear next actions, a dark premium visual system, mock data, accessible interactions, and React/Vite routing.

## Design and UX directions

- Make the student feel: “All I need to do today is complete today's mission.”
- Use clear hierarchy, large touch targets, minimal unnecessary text, and a dark-friendly system.
- Include streak, daily mission, overall progress, achievements, GitHub/LinkedIn proof, and a satisfying completion state.
- Support realistic states including first day, missed day, empty profile, completed day, and in-progress day using mock data.

## Technical directions

- Use React, Vite, JavaScript, React Router, CSS, local/mock data, and Lucide icons.
- Create routes `/`, `/dashboard`, `/day/12`, plus the dynamic route `/day/:dayNumber`.
- Implement interactive checklists, URL validation, local persistence, responsive behavior, and a production build check.

## Breeth AI memory direction

> Add Breeth as a secure memory-powered AI Coach. Keep the API key in a local `.env` file, store completed challenge context as memory only after explicit user approval, and retrieve relevant memory to provide coaching guidance.

## Verification requested

- Build and check all required routes.
- Check the mobile layout for the 390px evaluation viewport.
- Avoid Vite demo content, broken imports, and horizontal overflow.

## Notes

No API keys or private credentials are included in this repository. The `.env` file is intentionally ignored by Git.
