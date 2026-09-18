import { jsPDF } from 'jspdf';
import { PERSONAL_INFO, PROJECTS_DATA, EXPERIENCE_DATA, EDUCATION_DATA } from '../data/portfolioData';

export function generateResumePdf(): void {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 16;
  let y = margin;

  // Header Background Bar (Luxury Obsidian & Gold)
  doc.setFillColor(15, 13, 9); // deep dark obsidian
  doc.rect(0, 0, pageWidth, 42, 'F');

  // Gold accent stripe
  doc.setFillColor(212, 175, 55); // #D4AF37 Gold
  doc.rect(0, 42, pageWidth, 1.5, 'F');

  // Name (Gold)
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  doc.setTextColor(245, 208, 97); // #F5D061 Light Gold
  doc.text(PERSONAL_INFO.name.toUpperCase(), margin, 18);

  // Role / Subtitle
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10.5);
  doc.setTextColor(230, 220, 195);
  doc.text(PERSONAL_INFO.tagline || 'AI & Machine Learning Engineer', margin, 26);

  // Contact info row
  doc.setFontSize(8.5);
  doc.setTextColor(180, 165, 140);
  const contactText = `Email: ${PERSONAL_INFO.email}   |   GitHub: github.com/TAFSEELAHMED   |   LinkedIn: linkedin.com/in/tafsilahmed`;
  doc.text(contactText, margin, 34);

  y = 52;

  // SHORT NOTE (Requested by user): "this resume is a virtually generated resume conatct the owner for original one"
  doc.setFillColor(254, 243, 199); // soft amber background
  doc.setDrawColor(217, 119, 6); // amber border
  doc.roundedRect(margin, y, pageWidth - margin * 2, 12, 1.5, 1.5, 'FD');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(146, 64, 14); // amber-800
  doc.text(
    'NOTE: This resume is a virtually generated resume. Please contact the owner for the original one.',
    margin + 4,
    y + 5
  );

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(180, 83, 9);
  doc.text(
    `Official certified resume & verified credentials available upon request at ${PERSONAL_INFO.email}`,
    margin + 4,
    y + 9.5
  );

  y += 18;

  // Helper function for section headings with Gold styling
  const addSectionHeader = (title: string) => {
    if (y > pageHeight - 25) {
      doc.addPage();
      y = margin;
    }
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(180, 130, 30); // Rich Gold
    doc.text(title.toUpperCase(), margin, y);

    doc.setDrawColor(212, 175, 55);
    doc.setLineWidth(0.5);
    doc.line(margin, y + 1.5, pageWidth - margin, y + 1.5);
    y += 7;
  };

  // 1. PROFESSIONAL SUMMARY
  addSectionHeader('Professional Summary');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(50, 45, 40);
  const summaryLines = doc.splitTextToSize(PERSONAL_INFO.bio, pageWidth - margin * 2);
  doc.text(summaryLines, margin, y);
  y += summaryLines.length * 4.5 + 4;

  // 2. CORE TECHNICAL COMPETENCIES
  addSectionHeader('Technical Skills & Ecosystem');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(40, 35, 30);

  const skillGroups = [
    { cat: 'Machine Learning & AI', skills: 'PyTorch, TensorFlow, Scikit-Learn, OpenCV, CNNs, Transformers, Vector Search' },
    { cat: 'Languages & Tools', skills: 'Python, C/C++, TypeScript, React, FastAPI, Git, Docker, Linux, CUDA' },
    { cat: 'NLP & Architectures', skills: 'BERT, Tokenizers, FAISS, Sentence Embeddings, Prompt Engineering, RAG' },
  ];

  skillGroups.forEach((g) => {
    doc.setFont('helvetica', 'bold');
    doc.text(`• ${g.cat}: `, margin, y);
    const catWidth = doc.getTextWidth(`• ${g.cat}: `);
    doc.setFont('helvetica', 'normal');
    doc.text(g.skills, margin + catWidth, y);
    y += 4.5;
  });
  y += 3;

  // 3. FEATURED AI PROJECTS
  addSectionHeader('Key Machine Learning & Software Projects');
  PROJECTS_DATA.slice(0, 3).forEach((proj) => {
    if (y > pageHeight - 35) {
      doc.addPage();
      y = margin;
    }

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(20, 20, 20);
    doc.text(proj.title, margin, y);

    doc.setFont('helvetica', 'italic');
    doc.setFontSize(8);
    doc.setTextColor(160, 110, 20);
    const catTag = `[${proj.category} | ${proj.badge || 'Deep Learning'}]`;
    const titleWidth = doc.getTextWidth(proj.title);
    doc.text(catTag, margin + titleWidth + 3, y);
    y += 4.5;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(60, 60, 60);
    const descLines = doc.splitTextToSize(proj.description, pageWidth - margin * 2);
    doc.text(descLines, margin, y);
    y += descLines.length * 4 + 1;

    // Highlights
    proj.highlights.slice(0, 2).forEach((hl) => {
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8);
      doc.setTextColor(70, 70, 70);
      const hlLines = doc.splitTextToSize(`- ${hl}`, pageWidth - margin * 2 - 4);
      doc.text(hlLines, margin + 3, y);
      y += hlLines.length * 3.8;
    });

    // Tech tags
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.5);
    doc.setTextColor(120, 90, 30);
    doc.text(`Stack: ${proj.tags.join(', ')}`, margin + 3, y + 1);
    y += 6.5;
  });

  // 4. EXPERIENCE
  addSectionHeader('Experience & Engineering Practice');
  EXPERIENCE_DATA.forEach((exp) => {
    if (y > pageHeight - 28) {
      doc.addPage();
      y = margin;
    }

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(20, 20, 20);
    doc.text(`${exp.role} - ${exp.company}`, margin, y);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(120, 120, 120);
    doc.text(exp.period, pageWidth - margin - doc.getTextWidth(exp.period), y);
    y += 4.5;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(60, 60, 60);
    const bulletText = exp.bulletPoints?.[0] || exp.workAreas?.join(', ') || '';
    const expLines = doc.splitTextToSize(bulletText, pageWidth - margin * 2);
    doc.text(expLines, margin, y);
    y += expLines.length * 3.8 + 4;
  });

  // 5. EDUCATION
  addSectionHeader('Education');
  const eduList = [EDUCATION_DATA];
  eduList.forEach((edu) => {
    if (y > pageHeight - 20) {
      doc.addPage();
      y = margin;
    }
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(20, 20, 20);
    const locationStr = edu.location ? ` (${edu.location})` : '';
    doc.text(`${edu.degree} - ${edu.institution}${locationStr}`, margin, y);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(120, 120, 120);
    doc.text(edu.period, pageWidth - margin - doc.getTextWidth(edu.period), y);
    y += 4;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(80, 80, 80);
    doc.text(`${edu.major} • CGPA: ${edu.cgpa} (${edu.batch || 'Batch 2024-2028'})`, margin, y);
    y += 5.5;
  });

  // Footer Disclaimer on last page
  doc.setFont('helvetica', 'italic');
  doc.setFontSize(7.5);
  doc.setTextColor(140, 130, 120);
  const footerNote = `Virtually generated summary from Tafsil Ahmed Portfolio. Contact ${PERSONAL_INFO.email} for certified documents.`;
  doc.text(footerNote, pageWidth / 2, pageHeight - 8, { align: 'center' });

  // Trigger browser download of PDF
  doc.save('Tafsil_Ahmed_AI_Engineer_Resume.pdf');
}
