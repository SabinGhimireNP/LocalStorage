# LocalStorage Usage in To-Do List Project

This project highlights the use of **LocalStorage** to save and manage a simple to-do list.  
LocalStorage is a built-in web storage API that allows web applications to store data **persistently in the browser**, even after the page is refreshed or the browser is closed.

---

## 📦 What is LocalStorage?

LocalStorage allows you to save key-value pairs in the browser.  
Key points about LocalStorage:
- It stores data as **strings**
- The data **persists across sessions** (until explicitly removed)
- It's **synchronous** and easy to use in small-scale projects

---

## 🔑 LocalStorage Methods Used in This Project

The following LocalStorage methods are used to **add, update, and clear** the list data.

### 1. Get Data: `localStorage.getItem()`

Retrieves the stored data when the app loads:
```js
const items = JSON.parse(localStorage.getItem("Item")) || [];
```

### 2. Save Data: localStorage.setItem()

```js
localStorage.setItem("Item", JSON.stringify(items));

```

### 3. Clear All Data: localStorage.clear()
```js
localStorage.clear();

```

