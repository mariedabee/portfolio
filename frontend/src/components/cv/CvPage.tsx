import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import PlaceIcon from '@mui/icons-material/Place';
import { useStyles } from '../styles';
import profilePicture from '../../shared/profilePicture.jpg';
import { useCv, Job } from '../../data/cvData';
import { useLanguage } from '../../i18n/LanguageContext';
import AvailabilityCard from '../availability/AvailabilityCard';
import '../about/AboutPage.css';
import './CvPage.css';

const JobList: React.FC<{ jobs: Job[] }> = ({ jobs }) => (
  <ol className="questLog">
    {jobs.map((job) => (
      <li key={`${job.role}-${job.period}`} className={`questItem ${job.dev ? 'main' : ''}`}>
        <span className="questType">{job.period}</span>
        <h3 className="questTitle">{job.role}</h3>
        <span className="questPlace">{[job.company, job.place].filter(Boolean).join(', ')}</span>
        <ul className="questPoints">
          {job.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </li>
    ))}
  </ol>
);

const CvPage: React.FC = () => {
  const classes = useStyles();
  const { t } = useLanguage();
  const cv = useCv();
  const { profile } = cv;
  const [generating, setGenerating] = useState(false);

  // The PDF library is only loaded when someone actually downloads
  const handleDownload = async () => {
    setGenerating(true);
    try {
      const [{ pdf }, { default: CvDocument }] = await Promise.all([
        import('@react-pdf/renderer'),
        import('./CvDocument'),
      ]);
      const blob = await pdf(
        <CvDocument cv={cv} labels={t.cv} certificateCode={t.about.certificateCode} />
      ).toBlob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${profile.name.replace(' ', '-')}-${t.cv.fileName}.pdf`;
      link.click();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error generating CV PDF:', error);
    } finally {
      setGenerating(false);
    }
  };

  return (
    <Box className={classes.root}>
      <div className="aboutWrapper">
        <header className="aboutHeader">
          <span className="aboutKicker">{t.cv.kicker}</span>
          <Typography variant="h4" component="h1" className="aboutTitle">
            {t.cv.title}
          </Typography>
          <Button
            variant="contained"
            size="large"
            startIcon={<DownloadIcon />}
            onClick={handleDownload}
            disabled={generating}
            className="cvDownload"
          >
            {generating ? t.cv.generating : t.cv.download}
          </Button>
        </header>

        <div className="cvSheet">
          <aside className="cvSidebar">
            <div className="avatarFrame cvAvatar">
              <img src={profilePicture} alt={profile.name} />
            </div>
            <h2 className="cvName">{profile.name}</h2>
            <span className="cvHandle">@{profile.handle}</span>
            <span className="cvRole">{profile.title}</span>

            <ul className="cvContact">
              <li>
                <EmailIcon /> <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </li>
              <li>
                <GitHubIcon /> <a href={`https://${profile.github}`}>{profile.github}</a>
              </li>
              <li>
                <PlaceIcon /> {profile.location}
              </li>
            </ul>

            <AvailabilityCard compact />

            <h3 className="panelHeading">{t.about.inventory}</h3>
            {cv.skillGroups.map((group) => (
              <div key={group.label} className="cvSkillGroup">
                <span className="cvSkillLabel">{group.label}</span>
                <div className="itemChips">
                  {group.items.map((item) => (
                    <span key={item} className={`itemChip ${cv.mainSkills.includes(item) ? 'main' : ''}`}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            <h3 className="panelHeading">{t.cv.languages}</h3>
            {cv.spokenLanguages.map((spoken) => (
              <div key={spoken.name} className="languageRow cvLanguage">
                <span className="skillName">{spoken.name}</span>
                <div className="pips" aria-label={spoken.level}>
                  {[1, 2, 3, 4, 5].map((n) => (
                    <span key={n} className={`pip ${n <= spoken.pips ? 'on' : ''}`} />
                  ))}
                </div>
                <span className="languageLevel">{spoken.level}</span>
              </div>
            ))}
          </aside>

          <div className="cvMain">
            <section>
              <h3 className="panelHeading">{t.cv.profile}</h3>
              <p className="panelIntro">{profile.summary}</p>
            </section>

            <section>
              <h3 className="panelHeading">{t.cv.experience}</h3>
              <JobList jobs={cv.experience} />
            </section>

            <section>
              <h3 className="panelHeading">{t.cv.education}</h3>
              <ol className="questLog">
                {cv.education.map((school) => (
                  <li key={school.degree} className="questItem main">
                    <span className="questType">{school.period}</span>
                    <h3 className="questTitle">{school.degree}</h3>
                    <span className="questPlace">{school.school}</span>
                    {school.detail && <p>{school.detail}</p>}
                  </li>
                ))}
              </ol>
            </section>

            <section>
              <h3 className="panelHeading">{t.cv.internships}</h3>
              <JobList jobs={cv.internships} />
            </section>

            <section>
              <h3 className="panelHeading">{t.cv.certificates}</h3>
              <div className="trophyGrid">
                {cv.certificates.map((cert) => (
                  <div key={cert.title} className="trophyCard">
                    <h3 className="questTitle">{cert.title}</h3>
                    <span className="questPlace">
                      {cert.issuer} · {cert.date}
                    </span>
                    {cert.code && (
                      <span className="trophyCode">
                        {t.about.certificateCode} {cert.code}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h3 className="panelHeading">{t.cv.projects}</h3>
              <div className="trophyGrid">
                {cv.projects.map((project) => (
                  <div key={project.name} className="trophyCard">
                    <span className="questType">{project.status.toUpperCase()}</span>
                    <h3 className="questTitle">{project.name}</h3>
                    <p className="cvProjectText">{project.text}</p>
                    <div className="itemChips">
                      {project.tech.map((tech) => (
                        <span key={tech} className="itemChip">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default CvPage;
