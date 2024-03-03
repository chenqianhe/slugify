# URL Slug Generator

A simple TypeScript library for converting strings into URL-friendly slugs.

## Description

The URL Slug Generator helps you easily convert any string into a format suitable for URLs. It automatically removes special characters, converts all text to lowercase, and replaces spaces with hyphens, making it an ideal tool for creating clean, readable URLs.

## Installation

Install with npm:

```bash
npm install url-slug-generator
```

Or with yarn:

```bash
yarn add url-slug-generator
```

## Usage

First, import `url-slug-generator`:

```typescript
import slugify from 'url-slug-generator';
```

Then, use the `slugify` function to convert any string into a slug:

```typescript
const mySlug = slugify("Hello World!");
console.log(mySlug); // Outputs: "hello-world"
```

## API Reference

### slugify(text: string): string

Converts the provided string `text` into a URL-friendly slug.

- **Parameters**:
    - `text`: The string to be converted.
- **Returns**: The converted slug string.

## Contributing

Contributions are welcome! Please fork this repository and submit pull requests to propose additions or fixes.

## License

This project is licensed under the MIT License. For more details, see the LICENSE file.
