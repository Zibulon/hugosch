# PDF Generation Library

A simple PDF Generation Library for creating PDF documents programmatically.

## Installation

You can install the `pdf-generator` package via npm:

```bash
npm install pdf-generator
```

## Usage

```javascript
const PDFGenerator = require('src/pdf-generator');
const fs = require('fs');

const generator = new PDFGenerator();
const text = "Hello, World!";
const outputPath = "output.pdf";

generator.generatePDF(text, outputPath)
    .then(() => {
        console.log(`PDF generated successfully at ${outputPath}`);
    })
    .catch((error) => {
        console.error('Error generating PDF:', error);
    });
```

## API

### `generatePDF(text, outputPath)`

Generates a PDF document containing the provided text and saves it to the specified output path.

- `text`: The text content to be included in the PDF.
- `outputPath`: The file path where the generated PDF will be saved.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
