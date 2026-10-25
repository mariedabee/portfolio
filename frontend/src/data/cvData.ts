// Single source of truth for CV content: used by the About page, the CV page and the PDF download.
// Keep private details (phone, address, birth date) out of this file — everything here is public.
import { Lang } from '../i18n/translations';
import { useLanguage } from '../i18n/LanguageContext';

export interface Job {
  role: string;
  company: string;
  place: string;
  period: string;
  points: string[];
  dev?: boolean;
}

export interface School {
  degree: string;
  school: string;
  period: string;
  detail?: string;
}

export interface CvData {
  profile: {
    name: string;
    handle: string;
    title: string;
    email: string;
    github: string;
    location: string;
    personality: string;
    personalityType: string;
    personalityName: string;
    summary: string;
  };
  availability: {
    headline: string;
    type: string;
    location: string;
    note: string;
  };
  experience: Job[];
  internships: Job[];
  education: School[];
  skillGroups: { label: string; items: string[] }[];
  mainSkills: string[];
  spokenLanguages: { name: string; level: string; pips: number }[];
  certificates: { title: string; issuer: string; date: string; code?: string }[];
  projects: { name: string; status: string; text: string; tech: string[] }[];
  interests: string;
}

const contact = {
  name: 'Mariam Bari',
  handle: 'mariedabee',
  email: 'mariejuly70@gmail.com',
  github: 'github.com/mariedabee',
  personalityType: 'INFJ',
};

// Skills used professionally (per the experience below) get a highlight
const mainSkills = ['Java', 'Spring Boot'];

const en: CvData = {
  profile: {
    ...contact,
    title: 'Software Developer',
    location: 'Bremen area, Germany',
    personality: 'INFJ · The Advocate',
    personalityName: 'The Advocate',
    summary:
      'Dedicated and driven software developer with an international background and solid full-stack skills. ' +
      'Experienced in agile teams, software customization and system integration. ' +
      'Eager to learn, a strong team player and interculturally minded.',
  },
  availability: {
    headline: 'Open to work',
    type: 'Part-time position (Teilzeit)',
    location: 'Bremen area or remote',
    note: 'Part-time leaves me room to keep building my own projects.',
  },
  experience: [
    {
      role: 'Software Developer',
      company: 'STAROFIT Klose GmbH & Co. KG',
      place: 'Ganderkesee',
      period: '02/2025 – 05/2026',
      dev: true,
      points: [
        'Developed and maintained software solutions for business applications',
        'Implemented backend features in Java and Spring Boot',
        'Optimized existing systems and interfaces',
        'Worked with interdisciplinary teams to improve internal processes',
      ],
    },
    {
      role: 'Software Developer',
      company: 'encoway GmbH',
      place: 'Bremen',
      period: '06/2023 – 06/2024',
      dev: true,
      points: [
        'Developed and customized software solutions in Java',
        'Built plugins and integrated them into existing systems',
        'Analyzed bugs and optimized software components',
        'Contributed to software customization and permission solutions',
      ],
    },
    {
      role: 'Working Student',
      company: 'encoway GmbH',
      place: 'Bremen',
      period: '02/2023 – 05/2023',
      dev: true,
      points: [
        'Developed software solutions with Java and Spring Boot',
        'Supported software testing and bug fixing',
        'Worked in agile development teams',
      ],
    },
    {
      role: 'Intern',
      company: 'encoway GmbH',
      place: 'Bremen',
      period: '10/2022 – 01/2023',
      dev: true,
      points: [
        'Supported software development and documentation',
        'Worked on software customizing',
        'Learned agile methods and company processes',
      ],
    },
    {
      role: 'Caregiver for People with Special Needs',
      company: '',
      place: 'Delmenhorst',
      period: '01/2022 – 01/2023',
      points: [
        'Personal care and support for two sisters with special needs',
        'Ensured their safety, comfort and well-being',
      ],
    },
    {
      role: 'Warehouse Assistant',
      company: 'BLG Logistics Group',
      place: '',
      period: '05/2019 – 08/2019',
      points: ['Storage, receiving and dispatch of goods', 'Supported logistics processes'],
    },
  ],
  internships: [
    {
      role: 'Year-long Internship',
      company: 'Zschaler Werbung',
      place: 'Delmenhorst',
      period: '03/2018 – 03/2019',
      points: ['Supported system administration, design and client orders', 'Worked on graphic design projects'],
    },
    {
      role: 'Internship',
      company: 'Lebenshilfe GmbH',
      place: 'Delmenhorst',
      period: '2017',
      points: ['Care and support for people with disabilities'],
    },
    {
      role: 'Internship',
      company: 'Veterinary Practice Schillerstraße',
      place: 'Delmenhorst',
      period: '2017',
      points: ['Assisted with admissions, medical procedures and the care of animals'],
    },
  ],
  education: [
    {
      degree: 'B.Sc. Computer Science (International Women’s Degree Programme)',
      school: 'Hochschule Bremen – City University of Applied Sciences',
      period: '2019 – 2024',
      detail: 'Thesis: “More control for the user without overlapping complexity when customizing software”',
    },
    {
      degree: 'Semester Abroad – Information and Communication Technology',
      school: 'HZ University of Applied Sciences, Netherlands',
      period: '08/2021 – 02/2022',
      detail: 'Digital innovation projects, continuous integration, design thinking',
    },
    {
      degree: 'Fachschulreife (Advanced Technical College Certificate), Computer Science',
      school: 'BBS II Delmenhorst',
      period: '2017 – 2019',
    },
  ],
  skillGroups: [
    { label: 'Languages', items: ['Java', 'JavaScript', 'TypeScript', 'C#'] },
    { label: 'Frameworks', items: ['Spring Boot', 'React', 'Node.js', 'Express'] },
    { label: 'Web', items: ['HTML', 'CSS', 'REST APIs'] },
    { label: 'Data', items: ['SQL', 'MongoDB'] },
    { label: 'DevOps', items: ['Git', 'Docker', 'CI/CD'] },
    { label: 'Tools', items: ['IntelliJ IDEA', 'VS Code', 'Postman'] },
  ],
  mainSkills,
  // pips: CEFR mapped to 5 (native 5, C1 4, B2 3, beginner 1)
  spokenLanguages: [
    { name: 'Arabic', level: 'Native', pips: 5 },
    { name: 'English', level: 'Fluent (C1)', pips: 4 },
    { name: 'German', level: 'Good (B2)', pips: 3 },
    { name: 'Turkish', level: 'Beginner', pips: 1 },
  ],
  certificates: [
    { title: 'Bachelor of Science', issuer: 'Hochschule Bremen', date: 'Feb 2024' },
    { title: 'CI/CD for Beginners', issuer: 'Simplilearn SkillUp', date: 'Nov 2024', code: '7587392' },
    { title: 'Getting Started with Docker', issuer: 'Simplilearn SkillUp', date: 'Dec 2024', code: '7634225' },
  ],
  projects: [
    {
      name: 'Portfolio Website',
      status: 'Live',
      text: 'This site: a personal portfolio with a game-style UI, built full-stack.',
      tech: ['React', 'TypeScript', 'MUI', 'Node.js', 'Express', 'MongoDB'],
    },
    {
      name: 'E-Commerce Platform',
      status: 'In progress',
      text: 'An online shop built with modern web technologies, focused on usability, security and performance.',
      tech: ['Web', 'Full-stack'],
    },
  ],
  interests: 'Animals & nature, music, sports, reading & writing, psychology, hand crafts (painting on clothes, making lamps)',
};

const de: CvData = {
  profile: {
    ...contact,
    title: 'Softwareentwicklerin',
    location: 'Raum Bremen, Deutschland',
    personality: 'INFJ · Advokat',
    personalityName: 'Advokat',
    summary:
      'Engagierte und zielstrebige Softwareentwicklerin mit internationalem Hintergrund und fundierten Kenntnissen ' +
      'in Full-Stack-Entwicklung. Erfahrung in agilen Teams, Softwareanpassung und Systemintegration. ' +
      'Hohe Lernbereitschaft, Teamfähigkeit und interkulturelle Kompetenz.',
  },
  availability: {
    headline: 'Offen für neue Jobs',
    type: 'Teilzeitstelle',
    location: 'Raum Bremen oder remote',
    note: 'Teilzeit, damit ich nebenbei an meinen eigenen Projekten weiterarbeiten kann.',
  },
  experience: [
    {
      role: 'Softwareentwicklerin',
      company: 'STAROFIT Klose GmbH & Co. KG',
      place: 'Ganderkesee',
      period: '02/2025 – 05/2026',
      dev: true,
      points: [
        'Entwicklung und Wartung von Softwarelösungen für betriebliche Anwendungen',
        'Implementierung von Backend-Funktionalitäten in Java und Spring Boot',
        'Optimierung bestehender Systeme und Schnittstellen',
        'Zusammenarbeit mit interdisziplinären Teams zur Verbesserung interner Prozesse',
      ],
    },
    {
      role: 'Softwareentwicklerin',
      company: 'encoway GmbH',
      place: 'Bremen',
      period: '06/2023 – 06/2024',
      dev: true,
      points: [
        'Entwicklung und Anpassung von Softwarelösungen in Java',
        'Plugin-Entwicklung und Integration in bestehende Systeme',
        'Fehleranalyse und Optimierung von Softwarekomponenten',
        'Mitarbeit an Softwareanpassungs- und Berechtigungslösungen',
      ],
    },
    {
      role: 'Werkstudentin',
      company: 'encoway GmbH',
      place: 'Bremen',
      period: '02/2023 – 05/2023',
      dev: true,
      points: [
        'Entwicklung von Softwarelösungen mit Java und Spring Boot',
        'Unterstützung bei Softwaretests und Fehlerbehebung',
        'Mitarbeit in agilen Entwicklungsteams',
      ],
    },
    {
      role: 'Praktikantin',
      company: 'encoway GmbH',
      place: 'Bremen',
      period: '10/2022 – 01/2023',
      dev: true,
      points: [
        'Unterstützung bei Softwareentwicklung und Dokumentation',
        'Mitarbeit im Bereich Software-Customizing',
        'Kennenlernen agiler Methoden und Unternehmensprozesse',
      ],
    },
    {
      role: 'Betreuung von Personen mit Einschränkungen',
      company: '',
      place: 'Delmenhorst',
      period: '01/2022 – 01/2023',
      points: [
        'Persönliche Pflege und Unterstützung zweier Schwestern mit besonderen Bedürfnissen',
        'Gewährleistung von Sicherheit, Komfort und Wohlbefinden',
      ],
    },
    {
      role: 'Lagerhelferin',
      company: 'BLG Logistics Group',
      place: '',
      period: '05/2019 – 08/2019',
      points: ['Warenlagerung, -übernahme und -ausgabe', 'Unterstützung bei logistischen Abläufen'],
    },
  ],
  internships: [
    {
      role: 'Jahrespraktikum',
      company: 'Zschaler Werbung',
      place: 'Delmenhorst',
      period: '03/2018 – 03/2019',
      points: ['Unterstützung bei Systemsteuerung, Design und Kundenaufträgen', 'Mitarbeit an grafischen Umsetzungen'],
    },
    {
      role: 'Praktikum',
      company: 'Lebenshilfe GmbH',
      place: 'Delmenhorst',
      period: '2017',
      points: ['Betreuung, Pflege und Unterstützung von Menschen mit Behinderungen'],
    },
    {
      role: 'Praktikum',
      company: 'Tierarztpraxis Schillerstraße',
      place: 'Delmenhorst',
      period: '2017',
      points: ['Unterstützung bei Aufnahme, medizinischen Eingriffen, Betreuung und Pflege von Tieren'],
    },
  ],
  education: [
    {
      degree: 'B.Sc. Internationaler Frauenstudiengang Informatik',
      school: 'Hochschule Bremen',
      period: '2019 – 2024',
      detail:
        'Bachelorarbeit: „Mehr Kontrolle für den Benutzer ohne Komplexitätsüberschneidungen bei der Anpassung der Software“',
    },
    {
      degree: 'Auslandssemester – Information and Communication Technology (ICT)',
      school: 'HZ University of Applied Sciences, Niederlande',
      period: '08/2021 – 02/2022',
      detail: 'Digitale Innovationsprojekte, Continuous Integration, Design Thinking',
    },
    {
      degree: 'Fachschulreife Informatik',
      school: 'BBS II Delmenhorst',
      period: '2017 – 2019',
    },
  ],
  skillGroups: [
    { label: 'Programmiersprachen', items: ['Java', 'JavaScript', 'TypeScript', 'C#'] },
    { label: 'Frameworks', items: ['Spring Boot', 'React', 'Node.js', 'Express'] },
    { label: 'Web', items: ['HTML', 'CSS', 'REST APIs'] },
    { label: 'Datenbanken', items: ['SQL', 'MongoDB'] },
    { label: 'DevOps', items: ['Git', 'Docker', 'CI/CD'] },
    { label: 'Tools', items: ['IntelliJ IDEA', 'VS Code', 'Postman'] },
  ],
  mainSkills,
  spokenLanguages: [
    { name: 'Arabisch', level: 'Muttersprache', pips: 5 },
    { name: 'Englisch', level: 'Fließend (C1)', pips: 4 },
    { name: 'Deutsch', level: 'Gut (B2)', pips: 3 },
    { name: 'Türkisch', level: 'Anfängerin', pips: 1 },
  ],
  certificates: [
    { title: 'Bachelor of Science', issuer: 'Hochschule Bremen', date: 'Feb. 2024' },
    { title: 'CI/CD for Beginners', issuer: 'Simplilearn SkillUp', date: 'Nov. 2024', code: '7587392' },
    { title: 'Getting Started with Docker', issuer: 'Simplilearn SkillUp', date: 'Dez. 2024', code: '7634225' },
  ],
  projects: [
    {
      name: 'Portfolio-Website',
      status: 'Online',
      text: 'Diese Seite: ein persönliches Portfolio im Game-Stil, Full-Stack entwickelt.',
      tech: ['React', 'TypeScript', 'MUI', 'Node.js', 'Express', 'MongoDB'],
    },
    {
      name: 'E-Commerce-Plattform',
      status: 'In Arbeit',
      text: 'Ein Online-Shop mit modernen Webtechnologien – Fokus auf Benutzerfreundlichkeit, Sicherheit und Performance.',
      tech: ['Web', 'Full-Stack'],
    },
  ],
  interests: 'Tiere & Natur, Musik, Sport, Lesen & Schreiben, Psychologie, Handarbeit (Kleidung bemalen, Lampen bauen)',
};

export const cvData: Record<Lang, CvData> = { en, de };

export const useCv = (): CvData => cvData[useLanguage().lang];
