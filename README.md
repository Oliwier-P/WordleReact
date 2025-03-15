# 📝 Wordle
A word-guessing game where players have 6 attempts to guess a hidden 5-letter word. After each guess, tiles change color to indicate correct letters and positions

## 📂 Project Structure
```bash
├── src/                   # Source files
│   ├── assets/            # Assets (svg, etc)
│   ├── components/        # React components
│   ├── RandomWord.js      # Generates a random word for the Wordle game
│   ├── style.scss         # Main style (variables, etc)
│   ├── Wordle.jsx         # Main App component with logic
│   └── words.json         # JSON file with 5 letter words
│ 
├── .gitignore.md          # Git ignore rules for the whole project
├── package.json           # Project dependencies
└── README.md              # Project documentation
```

## 🚀 Getting Started

Quick installation guide:

```bash
git clone https://github.com/Oliwier-P/WordleReact/

npm install
```

Run the app

```bash
npm run dev
```

## ✨ Features
- **Word Guessing Gameplay:** Players have 6 attempts to guess a 5-letter word
- **Color Feedback:** Letters are highlighted to show if they're correct, in the wrong position, or incorrect
- **Interactive Keyboard:** A virtual keyboard updates with color feedback based on guesses
- **Custom Keyboard:** Players can type directly from their own keyboard to enter guesses.
- **Win/Loss Conditions:** The game ends when the correct word is guessed or after 6 failed attempts
- **Dark Mode:** Toggle dark mode for a more comfortable gaming experience
- **Contrast Mode:** Enhanced colors for better visibility for colorblind users
- **Responsive Design:** Optimized for both desktop and mobile devices
- **Game Restart:** Option to start a new game after winning or losing
- **Error Handling:** Alerts for invalid words or incorrect input lengths
- **Tutorial:** A helpful tutorial for first-time players
- **Local Storage:** Remembers user preferences (dark mode and contrast mode) across sessions

## 📷 Screenshots

### 🎮 Game
![image](https://github.com/user-attachments/assets/d4a1ab96-09bf-4ff4-85a2-c233af9e965a)

### ❌ Lost
![image](https://github.com/user-attachments/assets/885e0280-3851-430c-b63f-6b258ff026a9)

### 🏆 Won
![image](https://github.com/user-attachments/assets/bdfee027-9aec-48e1-b71c-8e057da54ee4)

### 📖 Tutorial
![image](https://github.com/user-attachments/assets/9b09069d-91f3-451c-869a-0e4346096dd0)

### ⚙️ Settings
![image](https://github.com/user-attachments/assets/2f25a463-bea1-4d77-bc34-0e7a1662563a)

### 🎨 Colorblind
![image](https://github.com/user-attachments/assets/357db538-1959-4591-8527-4e74b2ed9be8)

### 🌙 Darkmode
![image](https://github.com/user-attachments/assets/c5578ce6-e111-4721-8591-0677868e33c7)


### 🛠️ Tech Stack
- React
- Javascript
- SASS
