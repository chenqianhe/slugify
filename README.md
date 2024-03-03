# URL Slug Generator

A simple TypeScript library for converting strings into URL-friendly slugs, with support for ASCII conversion, custom replacements, word removal, and length restrictions.

## Features

- Converts strings to URL-friendly slugs.
- Transforms non-ASCII characters to their ASCII equivalents using `unidecode`.
- Allows for custom replacement characters instead of the default hyphen.
- Supports removal of specified words from the input string.
- Enforces maximum slug length constraints.

## Installation

Install the package using npm:

```bash
npm install url-slug-generator
```

Or using yarn:

```bash
yarn add url-slug-generator
```

## Usage

First, import the `generateSlug` function from the package:

```typescript
import { generateSlug } from 'url-slug-generator';
```

Then, use the function to convert any string into a slug:

```typescript
const options = {
  replacement: '-', // Default replacement is '-'
  removeWords: ['a', 'the'], // Words to be removed from the input string
  lower: true, // Convert to lowercase
  maxLength: 50, // Maximum length of the slug
};

const slug = generateSlug("Hello, world! This is a test.", options);
console.log(slug); // Outputs: "hello-world-this-is-test"
```

## API Reference

### `generateSlug(text: string, options?: SlugifyOptions): string`

Generates a URL-friendly slug from the provided text.

#### Parameters

- `text` (string): The text to slugify.
- `options` (SlugifyOptions, optional): Configuration options for slug generation.

##### `SlugifyOptions`

- `replacement` (string, optional): The character to replace spaces with, defaults to '-'.
- `removeWords` (string[], optional): An array of words to remove from the input text.
- `lower` (boolean, optional): Whether to convert the text to lowercase.
- `maxLength` (number, optional): The maximum length of the generated slug.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your proposed changes or enhancements.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
