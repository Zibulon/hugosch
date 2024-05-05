// pdf-generator.js

const fs = require('fs');
const { PDFDocument, rgb } = require('pdf-lib');

class PDFGenerator {
    async generatePDF(text, outputPath) {
        const pdfDoc = await PDFDocument.create();
        const page = pdfDoc.addPage();

        page.drawText(text, {
            x: 50,
            y: page.getHeight() - 100,
            size: 30,
            color: rgb(0, 0, 0),
        });

        const pdfBytes = await pdfDoc.save();
        fs.writeFileSync(outputPath, pdfBytes);
    }
}

module.exports = PDFGenerator;
