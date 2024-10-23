# Fix: Prevent Unknown Prop Warning in React with Styled-Components

## Table of Contents

- [Context](#context)
- [Example Warning](#example-warning)
- [Problem Code](#problem-code)
- [Solution: Using Transient Props](#solution-using-transient-props)
  - [Fixed Code](#fixed-code)
- [Alternative Solution: Using `shouldForwardProp`](#alternative-solution-using-shouldforwardprop)
- [Why This Happens](#why-this-happens)
- [In Summary](#in-summary)
- [References](#references)

## Context

When using **React** with **styled-components**, you might encounter a warning in the console related to unknown props being passed to DOM elements. This happens when custom props (like `variation`) are forwarded to native HTML elements, which React doesn't recognize. React allows only valid HTML attributes (such as `id`, `className`, etc.).

## Example Warning

```
Warning: React does not recognize the `variation` prop on a DOM element.
```

## Problem Code

In this example, the custom `variation` prop is passed down to a button, causing the warning:

```javascript
const Button = styled.button`
  background-color: ${(props) =>
    props.variation === "primary" ? "blue" : "gray"};
`;

<Button variation="primary">Click Me</Button>;
```

## Solution: Using Transient Props

To fix this issue, **styled-components** provides a feature called **transient props**. Transient props are prefixed with a dollar sign (`$`), and they are not forwarded to the DOM, which prevents the warning.

### Fixed Code

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

## Alternative Solution: Using `shouldForwardProp`

For more advanced control, you can use **`shouldForwardProp`** to specify which props should be forwarded to the DOM. This is useful if you want to fine-tune which props are passed down.

Here’s how you can do it with `@emotion/is-prop-valid`:

```javascript
import isPropValid from "@emotion/is-prop-valid";
import { StyleSheetManager } from "styled-components";

<StyleSheetManager shouldForwardProp={(prop) => isPropValid(prop)}>
  <YourApp />
</StyleSheetManager>;
```

This ensures that only valid HTML attributes are passed to native DOM elements.

## Why This Happens

Styled-components allow passing custom props for dynamic styling. However, React doesn't recognize these custom props as valid HTML attributes, triggering the warning when they are passed down to native HTML elements like `<div>` or `<button>`.

## In Summary

- **Use transient props** by prefixing custom props with `$` to prevent them from being forwarded to the DOM.
- **Use `shouldForwardProp`** for more advanced control over which props get forwarded to DOM elements.

## References

- [Styled-components Documentation: Transient Props](https://styled-components.com/docs/api#transient-props)
- [React Docs: Unknown Prop Warning](https://reactjs.org/warnings/unknown-prop.html)
