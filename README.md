# Minimal React UI Components

A tiny, production-friendly set of React UI primitives (Button, Card) that I use as a base in side projects and client work.

The goal of this repo is to show how I structure small, reusable components with a clean API, TypeScript types and sensible styling defaults.

## Components

### `Button`

- Variants: `primary`, `ghost`
- Accessible focus styles (`focus-visible`)
- Disabled state handling

### `Card`

- Title + optional eyebrow label
- Body content slot for arbitrary React children

## Installation

```bash
npm install minimal-react-ui-components
```

## Usage

```tsx
import { Button, Card } from 'minimal-react-ui-components';

export function Example() {
  return (
    <Card title="Hello" eyebrow="Side project">
      <p>This is a small example using my components.</p>
      <Button variant="primary">Click me</Button>
    </Card>
  );
}
```

## Notes

This is intentionally small, but written the same way I would structure components in a larger design system.
