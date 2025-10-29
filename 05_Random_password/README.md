# PROJECT SUMMARY AND LESSON

Build a Random Password Generator (React + Tailwind CSS) and learnerd about 4 hooks (useState , useCallback , useEffect , useRef)

## SUMMARY

2. State Variables
```
const [length, setLength] = useState(8)
const [charAllowed, setcharAllowed] = useState(false)
const [numberAllowed, setnumberAllowed] = useState(false)
const [password, setPassword] = useState('')
```
- length: stores password length (default = 8)
- charAllowed: tracks if special characters are included
- numberAllowed: tracks if numbers are included
- password: stores the generated password


**Password Generation Function**
```
const generater_password = useCallback(() => {
  let pass = ""
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if (numberAllowed) str += "0123456789"
  if (charAllowed) str += "~!@#$%^&*()_{}[]?/+=`"

  for (let i = 1; i <= length; i++) {
    let random = Math.floor((Math.random() * str.length) + 1)
    pass += str.charAt(random)
  }

  setPassword(pass)
}, [length, charAllowed, numberAllowed, setPassword])

```
- Uses useCallback for optimization (function won’t recreate unnecessarily).
- Builds a string str of allowed characters.
- Loops from 1 → length to pick random characters.
- Updates the password using setPassword.

**Reference for Copying**

```
const passwordRef = useRef(null);
```
Stores reference to the password (input) element.

**Copy-to-Clipboard Function**

```
const copytoclipboard = useCallback(() => {
  passwordRef.current?.select()
  passwordRef.current?.setSelectionRange(0, 100)
  window.navigator.clipboard.writeText(password)
}, [password])
```


- Selects text in input field using the ref.

- Copies password to clipboard using browser API.

**Auto Password Generation**

```
useEffect(() => {
  generater_password()
}, [length, numberAllowed, charAllowed, generater_password])

```

- Automatically regenerates password whenever length, numberAllowed, or charAllowed change.

And in buttons
```
onChange={() => setcharAllowed((prev) => !prev)}
```
changes the value from true to false and false to true

# Hooks Used and Why?

## 1. useCallback
```
const generater_password = useCallback(() => { ... }, [length, charAllowed, numberAllowed])
```
Purpose: Memoizes (saves) a function so it’s not recreated on every render.

Why here:

- Prevents unnecessary re-creations of generater_password and copytoclipboard when component re-renders for optimization.

- saves as much things in cache memory

- Improves performance since these functions are used inside useEffect and as event handlers.

## 2. useRef
```
const passwordRef = useRef(null)
```

Purpose: Creates a reference to a DOM element.

Why here:

- Used to directly access the input field that displays the password.

- Allows selecting and copying text without re-rendering the component.

Example: passwordRef.current.select() highlights the text.

## 3. useEffect
```
useEffect(() => {
  generater_password()
}, [length, numberAllowed, charAllowed, generater_password])
```

Purpose: Runs side effects when dependencies change.

Why here:

- Runs the function

- Automatically regenerates the password whenever user changes: Length slider , Number checkbox ,Character checkbox

- Keeps the displayed password always updated with the latest settings.

useState
const [length, setLength] = useState(8)
const [charAllowed, setcharAllowed] = useState(false)
const [numberAllowed, setnumberAllowed] = useState(false)
const [password, setPassword] = useState('')

## 4. Purpose:
```
const [length, setLength] = useState(8)
const [charAllowed, setcharAllowed] = useState(false)
const [numberAllowed, setnumberAllowed] = useState(false)
const [password, setPassword] = useState('')
```
Purpose:
useState lets your component store and update data that changes while the app runs.

Why used here:

- length → stores current password length from the slider.
- charAllowed → true/false for including special characters.
- numberAllowed → true/false for including numbers.
- password → stores the currently generated password.

Each time one of these states changes (for example, slider moves or checkbox toggles), React re-renders the component to show the new values instantly.