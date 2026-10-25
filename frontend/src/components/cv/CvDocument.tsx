import React from 'react';
import { Document, Page, View, Text, Image, Link, StyleSheet, Font } from '@react-pdf/renderer';
import profilePicture from '../../shared/profilePicture.jpg';
import { CvData, Job } from '../../data/cvData';
import { Translations } from '../../i18n/translations';

// Printable A4 CV: dark sidebar + white main column, green accents

// No automatic hyphenation: keep words like "Programme" whole
Font.registerHyphenationCallback((word) => [word]);

const GREEN = '#1f8f0c';
const NEON = '#39ff14';
const SIDEBAR = '#0b1a10';
const INK = '#1d2a20';
const MUTED = '#5b6b5e';
const SIDEBAR_WIDTH = 190;

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    fontFamily: 'Helvetica',
    fontSize: 9.5,
    color: INK,
    paddingVertical: 28,
  },
  sidebarBg: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    width: SIDEBAR_WIDTH,
    backgroundColor: SIDEBAR,
  },
  sidebar: {
    width: SIDEBAR_WIDTH,
    paddingHorizontal: 18,
    color: '#e6ffe0',
  },
  photo: {
    width: 110,
    height: 110,
    borderRadius: 55,
    objectFit: 'cover',
    alignSelf: 'center',
    borderWidth: 3,
    borderColor: NEON,
    marginBottom: 14,
  },
  name: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 20,
    color: '#ffffff',
    textAlign: 'center',
  },
  title: {
    fontSize: 10,
    color: NEON,
    textAlign: 'center',
    marginTop: 3,
    marginBottom: 18,
    letterSpacing: 1,
  },
  sideHeading: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 8.5,
    color: NEON,
    letterSpacing: 1.5,
    marginTop: 14,
    marginBottom: 6,
    paddingBottom: 3,
    borderBottomWidth: 1,
    borderBottomColor: GREEN,
  },
  sideText: {
    fontSize: 8.5,
    color: '#d6ecd2',
    marginBottom: 3,
  },
  sideLink: {
    fontSize: 8.5,
    color: '#d6ecd2',
    textDecoration: 'none',
    marginBottom: 3,
  },
  skillLabel: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 8,
    color: '#ffffff',
    marginTop: 4,
  },
  langRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  langName: {
    width: 52,
    fontSize: 8.5,
    color: '#ffffff',
  },
  pip: {
    width: 11,
    height: 5,
    marginRight: 2,
    borderRadius: 1,
    borderWidth: 0.8,
    borderColor: NEON,
  },
  pipOn: {
    backgroundColor: NEON,
  },
  langLevel: {
    fontSize: 7.5,
    color: '#9fc59a',
    marginLeft: 5,
  },
  main: {
    flex: 1,
    paddingHorizontal: 26,
  },
  summary: {
    fontSize: 9.5,
    lineHeight: 1.5,
    color: INK,
    marginBottom: 6,
  },
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 6,
  },
  headingBar: {
    width: 14,
    height: 4,
    backgroundColor: GREEN,
    marginRight: 6,
  },
  headingText: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 11,
    color: GREEN,
    letterSpacing: 1.2,
  },
  entry: {
    marginBottom: 8,
  },
  entryTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  entryRole: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 10,
    color: INK,
    flex: 1,
    paddingRight: 8,
  },
  entryPeriod: {
    fontSize: 8.5,
    color: GREEN,
    fontFamily: 'Helvetica-Bold',
  },
  entryPlace: {
    fontSize: 9,
    color: MUTED,
    marginBottom: 2,
  },
  bulletRow: {
    flexDirection: 'row',
    marginTop: 1.5,
  },
  bullet: {
    width: 8,
    color: GREEN,
  },
  bulletText: {
    flex: 1,
    lineHeight: 1.35,
  },
  detail: {
    lineHeight: 1.35,
    marginTop: 1,
  },
  availability: {
    borderWidth: 1,
    borderColor: GREEN,
    borderRadius: 3,
    padding: 8,
    marginTop: 14,
  },
  availabilityHeadline: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 9,
    color: NEON,
    marginBottom: 4,
  },
  footer: {
    position: 'absolute',
    bottom: 12,
    left: SIDEBAR_WIDTH,
    right: 26,
    textAlign: 'right',
    fontSize: 7,
    color: MUTED,
  },
});

const Heading: React.FC<{ children: string }> = ({ children }) => (
  <View style={styles.heading} wrap={false} minPresenceAhead={70}>
    <View style={styles.headingBar} />
    <Text style={styles.headingText}>{children.toUpperCase()}</Text>
  </View>
);

const Bullets: React.FC<{ points: string[] }> = ({ points }) => (
  <>
    {points.map((point) => (
      <View key={point} style={styles.bulletRow}>
        <Text style={styles.bullet}>•</Text>
        <Text style={styles.bulletText}>{point}</Text>
      </View>
    ))}
  </>
);

const JobEntry: React.FC<{ job: Job }> = ({ job }) => (
  <View style={styles.entry} wrap={false}>
    <View style={styles.entryTop}>
      <Text style={styles.entryRole}>{job.role}</Text>
      <Text style={styles.entryPeriod}>{job.period}</Text>
    </View>
    <Text style={styles.entryPlace}>{[job.company, job.place].filter(Boolean).join(', ')}</Text>
    <Bullets points={job.points} />
  </View>
);

interface CvDocumentProps {
  cv: CvData;
  labels: Translations['cv'];
  certificateCode: string;
}

const CvDocument: React.FC<CvDocumentProps> = ({ cv, labels, certificateCode }) => {
  const { profile, availability } = cv;
  return (
    <Document title={`${profile.name} – ${labels.title}`} author={profile.name} subject={labels.title}>
      <Page size="A4" style={styles.page}>
        <View style={styles.sidebarBg} fixed />

        <View style={styles.sidebar}>
          <Image src={profilePicture} style={styles.photo} />
          <Text style={styles.name}>{profile.name}</Text>
          <Text style={styles.title}>{profile.title.toUpperCase()}</Text>

          <Text style={styles.sideHeading}>{labels.contact.toUpperCase()}</Text>
          <Link src={`mailto:${profile.email}`} style={styles.sideLink}>
            {profile.email}
          </Link>
          <Link src={`https://${profile.github}`} style={styles.sideLink}>
            {profile.github}
          </Link>
          <Text style={styles.sideText}>{profile.location}</Text>

          <View style={styles.availability}>
            <Text style={styles.availabilityHeadline}>{availability.headline.toUpperCase()}</Text>
            <Text style={styles.sideText}>{availability.type}</Text>
            <Text style={styles.sideText}>{availability.location}</Text>
          </View>

          <Text style={styles.sideHeading}>{labels.skills.toUpperCase()}</Text>
          {cv.skillGroups.map((group) => (
            <View key={group.label}>
              <Text style={styles.skillLabel}>{group.label}</Text>
              <Text style={styles.sideText}>{group.items.join(' · ')}</Text>
            </View>
          ))}

          <Text style={styles.sideHeading}>{labels.languages.toUpperCase()}</Text>
          {cv.spokenLanguages.map((spoken) => (
            <View key={spoken.name}>
              <View style={styles.langRow}>
                <Text style={styles.langName}>{spoken.name}</Text>
                {[1, 2, 3, 4, 5].map((n) => (
                  <View key={n} style={n <= spoken.pips ? [styles.pip, styles.pipOn] : styles.pip} />
                ))}
              </View>
              <Text style={[styles.langLevel, { marginLeft: 52, marginTop: -2, marginBottom: 4 }]}>{spoken.level}</Text>
            </View>
          ))}

          <Text style={styles.sideHeading}>{labels.personality.toUpperCase()}</Text>
          <Text style={styles.sideText}>{profile.personality}</Text>

          <Text style={styles.sideHeading}>{labels.interests.toUpperCase()}</Text>
          <Text style={styles.sideText}>{cv.interests}</Text>
        </View>

        <View style={styles.main}>
          <Heading>{labels.profile}</Heading>
          <Text style={styles.summary}>{profile.summary}</Text>

          <Heading>{labels.experience}</Heading>
          {cv.experience.map((job) => (
            <JobEntry key={`${job.role}-${job.period}`} job={job} />
          ))}

          <Heading>{labels.education}</Heading>
          {cv.education.map((school) => (
            <View key={school.degree} style={styles.entry} wrap={false}>
              <View style={styles.entryTop}>
                <Text style={styles.entryRole}>{school.degree}</Text>
                <Text style={styles.entryPeriod}>{school.period}</Text>
              </View>
              <Text style={styles.entryPlace}>{school.school}</Text>
              {school.detail && <Text style={styles.detail}>{school.detail}</Text>}
            </View>
          ))}

          <Heading>{labels.internships}</Heading>
          {cv.internships.map((job) => (
            <JobEntry key={`${job.company}-${job.period}`} job={job} />
          ))}

          <Heading>{labels.certificates}</Heading>
          {cv.certificates.map((cert) => (
            <View key={cert.title} style={styles.entry} wrap={false}>
              <View style={styles.entryTop}>
                <Text style={styles.entryRole}>{cert.title}</Text>
                <Text style={styles.entryPeriod}>{cert.date}</Text>
              </View>
              <Text style={styles.entryPlace}>
                {cert.issuer}
                {cert.code ? ` · ${certificateCode} ${cert.code}` : ''}
              </Text>
            </View>
          ))}

          <Heading>{labels.projects}</Heading>
          {cv.projects.map((project) => (
            <View key={project.name} style={styles.entry} wrap={false}>
              <View style={styles.entryTop}>
                <Text style={styles.entryRole}>{project.name}</Text>
                <Text style={styles.entryPeriod}>{project.status}</Text>
              </View>
              <Text style={styles.detail}>{project.text}</Text>
              <Text style={styles.entryPlace}>{project.tech.join(' · ')}</Text>
            </View>
          ))}
        </View>

        <Text
          style={styles.footer}
          render={({ pageNumber, totalPages }) => `${profile.name} · ${labels.title} · ${pageNumber}/${totalPages}`}
          fixed
        />
      </Page>
    </Document>
  );
};

export default CvDocument;
