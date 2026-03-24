# Nash Equilibrium Calculator (2×2 Game)

A full-stack web application that computes **Pure Strategy Nash Equilibria** for a 2×2 payoff matrix. The application is built using Node.js, Express.js, and EJS, providing a simple interface for inputting payoff values and visualizing equilibrium outcomes.

---

## Features

- Computes Nash Equilibrium for two-player strategic games  
- Accepts user-defined 2×2 payoff matrices  
- Dynamically highlights equilibrium cells in the UI  
- Implements backend logic using JavaScript  
- Full-stack architecture using Node.js, Express.js, and EJS  

---

## Input Format

Each cell in the matrix should be entered in the following format:
(Player A payoff, Player B payoff)

Example:

|        | B1     | B2     |
|--------|--------|--------|
| A1     | (2,1)  | (0,0)  |
| A2     | (1,2)  | (3,1)  |

---

## Methodology

A strategy profile is identified as a Nash Equilibrium if:

- Player A's payoff is the maximum within its column  
- Player B's payoff is the maximum within its row  

### Computation Steps

1. Determine Player A’s best responses by evaluating maximum payoffs column-wise  
2. Determine Player B’s best responses by evaluating maximum payoffs row-wise  
3. Identify intersections of best responses to obtain Nash Equilibrium  

---

## Technology Stack

- Node.js  
- Express.js  
- EJS  
- HTML/CSS  

---

## Getting Started

Install dependencies and start the application:

```bash
npm install
node app.js