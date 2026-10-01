Node.js CI/CD Demo App

A simple Node.js application demonstrating an automated CI/CD pipeline using GitHub Actions and Docker.

 Project Overview

Whenever code is pushed to the `main` branch, GitHub Actions automatically:

1. Checks out the source code
2. Sets up Node.js
3. Installs dependencies
4. Runs automated tests
5. Logs in to Docker Hub
6. Builds a Docker image
7. Pushes the Docker image to Docker Hub

Technologies Used

- Node.js
- JavaScript
- Docker
- Docker Hub
- GitHub
- GitHub Actions

Project Structure

```text
nodejs-demo-app/
├── .github/
│   └── workflows/
│       └── main.yml
├── app.js
├── app.test.js
├── Dockerfile
├── package.json
└── package-lock.json