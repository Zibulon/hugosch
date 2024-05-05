const PDFGenerator = require('./pdf-generator');

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
