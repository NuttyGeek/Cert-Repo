import { jsPDF } from "jspdf";
// Default export is a4 paper, portrait, using millimeters for units
const printBtn = document.getElementById('print');
printBtn.addEventListener('click', () => {
    const doc = new jsPDF({
        orientation: 'landscape'
    });
    var elementHTML = $('#certificate').html();
    doc.fromHTML(elementHTML, 15, 15, {
        'width': 180,
        'elementHandlers': specialElementHandlers
    });
    // Save the PDF
    doc.save('sample-document.pdf');
});