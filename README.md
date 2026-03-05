# easy-sticky-header

> Easy sticky header on scroll

[![npm version](https://badge.fury.io/js/easy-sticky-header.svg)](https://www.npmjs.com/package/easy-sticky-header)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

## Installation

```bash
npm install easy-sticky-header
```

## Quick Start

```javascript
const { header } = require('easy-sticky-header');

// Basic usage
const result = header('your input here');
console.log(result);
```

## Features

- Simple, clean API
- Zero dependencies
- Lightweight (< 3KB)
- Works in Node.js and browsers
- Fully tested with Jest

## API Reference

### `header(input, [options])`

Main utility function.

**Parameters:**
- `input` — The input data to process
- `options` — Optional configuration object

**Returns:** Processed result

### `batch(inputs, [options])`

Process multiple inputs at once.

## Examples

```javascript
const { header, batch } = require('easy-sticky-header');

// Single item
const result = header('hello');

// Batch processing
const results = batch(['a', 'b', 'c']);
```

## Running Tests

```bash
npm test
```

## License

MIT License - see [LICENSE](LICENSE) for details.

---

### Learn More

**Want to build tools like this?** Check out the
**[Frontend For Beginners](https://gumroad.com/l/frontend-for-beginners)** course — learn how to create
modern web utilities with hands-on projects and best practices.

*Built with skills from [Frontend For Beginners](https://gumroad.com/l/frontend-for-beginners)*
