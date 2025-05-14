# Spaceship Project with Next.js

This is a project developed with [Next.js](https://nextjs.org), created using the [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) command. The goal of this project is to present a web application that displays information about spaceships, using modern technologies and development best practices.

## Technologies Used

-   **Next.js**: React framework for developing modern and optimized web applications.
-   **TypeScript**: A superset of JavaScript that adds static typing to the code, increasing safety and productivity.
-   **CSS Modules**: For modular styling and local scope, ensuring styles do not conflict with each other.
-   **JSON**: Used to store spaceship data in a simple and efficient way.

## Project Structure

The project structure was organized to facilitate scalability and maintenance:

-   `src/app`: Contains the main application files, such as layout, global styles, and pages.
-   `src/app/categories/[category]`: Dynamic page to display spaceships by category.
-   `src/app/spaceships/[id]`: Dynamic page to display details of a specific spaceship.
-   `public/images`: Contains images of the spaceships used in the application.
-   `src/data/spaceships.json`: JSON file with spaceship data.

## Best Practices Applied

-   **Componentization**: The project uses reusable components to avoid code duplication and facilitate maintenance.
-   **Dynamic Routes**: Implementation of dynamic routes to display categories and spaceship details.
-   **Font Optimization**: Use of [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to optimize font loading.
-   **Optimized Images**: Use of Next.js image optimization system to improve performance.
-   **Static Typing**: Use of TypeScript to avoid common errors and improve code readability.

## How to Run the Project

To run the development server, use one of the commands below:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Learn More

To learn more about Next.js, check out the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API.
-   [Interactive Next.js Tutorial](https://nextjs.org/learn) - An interactive tutorial to learn Next.js.

You can also visit the [Next.js GitHub repository](https://github.com/vercel/next.js) to contribute or provide feedback.

## Deploy on Vercel

The easiest way to deploy your Next.js application is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme), created by the developers of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
