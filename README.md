# React UI Components – Efe

A tiny collection of React components (Button, Card) that match how I like to build clean, minimal UIs.

These are intentionally small and focused; they are here so you can quickly see my React/TypeScript API design and styling approach.

## Components

- `Button` – primary/ghost variants with sensible defaults
- `Card` – simple content card with optional eyebrow

## Usage

```tsx
import { Button, Card } from 'react-ui-components-efe';

export function Example() {
  return (
    <Card title="Hello" eyebrow="Side project">
      <p>This is a small example using my components.</p>
      <Button variant="primary">Click me</Button>
    </Card>
  );
}
```
