# Fixes and Solutions

## Table of Contents

- [Fix 1: Prevent Unknown Prop Warning in React with Styled-Components](#fix-1-prevent-unknown-prop-warning-in-react-with-styled-components)
  - [Context](#context)
  - [Example Warning](#example-warning)
  - [Problem Code](#problem-code)
  - [Solution: Using Transient Props](#solution-using-transient-props)
    - [Fixed Code](#fixed-code)
  - [Why This Happens](#why-this-happens)
  - [In Summary](#in-summary)
- [Fix 2: Supabase Error Fix: Invalid URL](#fix-2-supabase-error-fix-invalid-url)
  - [Context](#context-1)
  - [Example Warning](#example-warning-1)
  - [Problem Code](#problem-code-1)
  - [Solution: Adding the Correct Scheme](#solution-adding-the-correct-scheme)
    - [Fixed Code](#fixed-code-1)
  - [Why This Happens](#why-this-happens-1)
  - [In Summary](#in-summary-1)

---

## Fix 1: Prevent Unknown Prop Warning in React with Styled-Components

### Context

When using **React** with **styled-components**, you might encounter a warning in the console related to unknown props being passed to DOM elements. This happens when custom props (like `variation`) are forwarded to native HTML elements, which React doesn't recognize. React allows only valid HTML attributes (such as `id`, `className`, etc.).

### Example Warning

```
Warning: React does not recognize the `variation` prop on a DOM element.
```

### Problem Code

In this example, the custom `variation` prop is passed down to a button, causing the warning:

```javascript
const Button = styled.button`
  background-color: ${(props) =>
    props.variation === "primary" ? "blue" : "gray"};
`;

<Button variation="primary">Click Me</Button>;
```

### Solution: Using Transient Props

To fix this issue, **styled-components** provides a feature called **transient props**. Transient props are prefixed with a dollar sign (`$`), and they are not forwarded to the DOM, which prevents the warning.

#### Fixed Code

Here’s how you can fix it by using transient props:

```javascript
const Button = styled.button`
  background-color: ${(props) =>
    props.$variation === "primary" ? "blue" : "gray"};
`;

// Usage in the component
<Button $variation="primary">Click Me</Button>;
```

In this case, the `$variation` prop is used for styling purposes only, and it will **not be forwarded** to the DOM, avoiding the React warning.

### Why This Happens

Styled-components allow passing custom props for dynamic styling. However, React doesn't recognize these custom props as valid HTML attributes, triggering the warning when they are passed down to native elements.

### In Summary

- **Use transient props** by prefixing custom props with `$` to prevent them from being forwarded to the DOM.
- **Use `shouldForwardProp`** for more advanced control over which props get forwarded to DOM elements.

---

## Fix 2: Supabase Error Fix: Invalid URL

### Context

When working with **Supabase** (or any service requiring URLs), you might encounter an error when constructing a URL in JavaScript. This happens when the URL is incomplete or lacks the required `https://` or `http://` scheme.

### Example Warning

```
Uncaught TypeError: Failed to construct 'URL': Invalid URL
```

This error is triggered when the **URL** constructor cannot process the given string as a valid URL.

### Problem Code

In this case, if you're missing the `https://` prefix, your code might look like this:

```javascript
const url = new URL("example.supabase.co"); // 🚫 Invalid URL
```

Without the proper scheme (like `https://`), JavaScript throws the error since the URL is not considered valid.

### Solution: Adding the Correct Scheme

To fix this issue, simply ensure that your URL includes the `https://` or `http://` scheme. This makes the URL complete and valid.

#### Fixed Code

Here’s the corrected code with the scheme added:

```javascript
const url = new URL("https://example.supabase.co"); // ✅ Correct!
```

By including `https://`, the error will be resolved, and the URL will be correctly interpreted by the browser.

### Why This Happens

The **JavaScript `URL` constructor** expects a fully-qualified URL that includes a scheme (`https://` or `http://`). If the scheme is missing, the constructor throws an error because it cannot resolve the string into a valid URL.

### In Summary

- Make sure that your URLs include a **scheme** like `https://` or `http://` when working with APIs like Supabase.
- An incomplete URL without a scheme will result in the error: `Failed to construct 'URL': Invalid URL`.
