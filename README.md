# fullstack-code-drill

A 2-month fullstack coding handwriting practice project.

---

# 📚 Full Notes Overview (Up to Day 16)

---

## 📅 Day 1 Notes (JavaScript Fundamentals)

### 🛠 Practice Summary

- Solved 2-3 level 8 CodeWars problems practicing array methods, destructuring, and arrow functions
- Completed Day 1 of JavaScript30 (Drum Kit)
- Solved LeetCode Two Sum, understood the hash map + single-pass solution
- Created a simple counter (increment/decrement buttons) locally to grasp DOM manipulation

### 🔧 Core Concepts

- Differences between `var`, `let`, and `const`
- Practiced closures and scope
- Handwritten basic implementations of `map`, `filter`, `debounce`, and `throttle`

### 🧠 Key Code Snippets

- Find max in array: `Math.max(...arr)`
- Remove duplicates: `[...new Set(arr)]`
- Reverse array: `arr.reverse()`
- Check palindrome: Compare original and reversed strings
- Efficient Two Sum: Use a `Map` for O(n) solution

---

## 📅 Day 2 Notes (React JSX & Components)

### 🛠 Practice Summary

- Created a text toggle button in CodePen using DOM event listeners
- Designed a mock profile card challenge and practiced CSS layout and Flexbox

### 🔧 Core Techniques

- Centering avatar with `position: absolute` + `transform`
- Equal spacing using Flexbox
- Separated Counter into its own component file

### 🧰 Practical Matrix

- Embed JavaScript expressions in JSX
- Created visual effects with `linear-gradient` + hover scale
- Used events to toggle state

---

## 📅 Day 3 Notes (Fullstack Code Drill)

### 🛠 Practice Summary

- Learned basic use of `useState` and controlled components
- Built a `Counter` component with increment button
- Built a `TodoList` with input, button, list, add/delete task
- Practiced `.filter()` and `window.confirm()`

### 🔧 Key Skills

- `e.target.value` to get input data
- `.filter()` to delete specific item
- Difference between traditional and arrow functions

### 💻 Sample Code

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}

export default Counter;
```

### ✅ Git Commit

```bash
git commit -m "Day3: Implement Counter and TodoList components with add, delete, and confirm functionality"
```

---

## 📅 Day 4 Notes (Fullstack Code Drill)

### 🛠 Practice Summary

- Built `LoginForm` component with username & password inputs, form validation
- Managed form state with `useState`
- Displayed submitted data or showed alert on empty input

### 🔧 Key Skills

- `trim()` to remove whitespace and avoid blank submissions
- Form event: `e.preventDefault()` to stop default refresh
- React SyntheticEvent handling

### 💻 Sample Code

```jsx
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");

const handleUsernameChange = (e) => setUsername(e.target.value);
const handlePasswordChange = (e) => setPassword(e.target.value);

const handleSubmit = (e) => {
  e.preventDefault();
  if (username.trim() === "" || password.trim() === "") {
    alert("Username and Password cannot be empty");
    return;
  }
  setSubmittedData({ username, password });
  setUsername("");
  setPassword("");
};
```

### ✅ Git Commit

```bash
feat: implement basic login form with controlled components and validation
```

---

## 📅 Day 5 Notes (Local Coding + Reading Summary)

### 🛠 Practice Summary

- Enhanced Counter with `useEffect` logging count changes
- ToDoList: simulated server delay using `setTimeout`, toggled loading states

### 🔍 Key Matrix

| Question             | Explanation                                 |
| -------------------- | ------------------------------------------- |
| `{count}` in JSX     | Display current variable value              |
| Template literal     | Interpolate value in backtick string        |
| `useEffect([count])` | Run effect when `count` changes             |
| `todos.map(...)`     | Iterate and render with key                 |
| `setLoading(false)`  | Indicate data is loaded and ready to render |

### 📖 Abstract Reading Notes

- **State**: Local memory for dynamic values
- **Effect**: Syncing component with external systems (e.g. API)
- **Dependency array**: Controls when side effects are re-executed

---

## 📅 Day 6 Notes (To-Do App Initial Upgrade)

### 🛠 Practice Summary

- Created a new Vite + React project in `Day6/todo-app`
- Set up `.gitignore` to exclude `node_modules`
- Used `useState` to store tasks
- Built `TodoInput` for task input
- Implemented `handleAddTask` in `App.jsx`
- Input auto-clears on Enter; tasks render instantly

### 🔧 Key Techniques

| Key Concept    | Explanation     |
| -------------- | --------------- |
| `useState([])` | Store task list |

---

## 📅 Day 7 Notes (Handwritten JS Practice)

### 📁 Project Directory: `day7-handwritten`

### 🔧 Completed Exercises

1. **`uniqueArray.js`**

   - Removed duplicates from array using `Set`
   - Input: `[1, 2, 2, 3]` → Output: `[1, 2, 3]`

2. **`myMap.js`**

   - Manually implemented `Array.prototype.myMap`
   - Call `defineMyMap()` to activate

3. **`createCounter.js`**

   - Created a closure-based counter
   - Example: `counter() → 1 → 2 → 3`

4. **`useStateMock.js`**

   - Simulated React’s `useState`
   - Returns `[get, set]` stored via closure

### 🧪 All functions tested successfully via `index.js`

### ✅ Git Commit

```bash
git add .
git commit -m "Day7: Implement handwritten JS functions including uniqueArray, myMap, createCounter, and useStateMock with closure and prototype logic"
```

---

## 📅 Day 8 Notes (Interview + Algorithm Practice)

### ✅ React Interview Question Review

#### 1. What’s the difference between `state` and `props`?

| Category   | `state`                          | `props`                       |
| ---------- | -------------------------------- | ----------------------------- |
| Ownership  | Managed inside the component     | Passed from parent            |
| Mutability | Can be changed with `setState()` | Read-only                     |
| Usage      | Local component data             | Configuration / communication |

💡 _Use `state` to manage input, `props` to receive from parents._

#### 2. How does `useEffect` work?

- Runs after first render
- Reruns on dependency change
- Returns cleanup for unmount

💡 _Used for API fetch or window event listeners._

#### 3. Why is the `key` prop important?

- Helps React identify changes
- Improves performance
- Avoids rendering bugs

💡 _Prefer unique ID over index._

---

### 🧮 Algorithm Practice

#### 1. Remove Duplicates from Sorted Array ([LeetCode 26](https://leetcode.com/problems/remove-duplicates-from-sorted-array/))

```js
function removeDuplicates(nums) {
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
}
```

#### 2. First Unique Character in a String ([LeetCode 387](https://leetcode.com/problems/first-unique-character-in-a-string/))

```js
function firstUniqChar(s) {
  const count = {};
  for (const c of s) {
    count[c] = (count[c] || 0) + 1;
  }
  for (let i = 0; i < s.length; i++) {
    if (count[s[i]] === 1) return i;
  }
  return -1;
}
```

---

### 🧠 Key Takeaways

- Be confident with core React concepts
- Practice LeetCode-style questions
- Support answers with real project examples

---
