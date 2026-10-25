import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import MapIcon from '@mui/icons-material/Map';
import SchoolIcon from '@mui/icons-material/School';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import PetsIcon from '@mui/icons-material/Pets';
import ParkIcon from '@mui/icons-material/Park';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import BrushIcon from '@mui/icons-material/Brush';
import LightIcon from '@mui/icons-material/Light';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import EditNoteIcon from '@mui/icons-material/EditNote';
import PsychologyIcon from '@mui/icons-material/Psychology';
import { useStyles } from '../styles';
import ImageGallery from './ImageGallery';
import imageData from './imageData';
import { useCv } from '../../data/cvData';
import { useLanguage } from '../../i18n/LanguageContext';
import './AboutPage.css';

type TabId = 'skills' | 'quests' | 'academy' | 'achievements' | 'hobbies' | 'next';

const tabIcons: { id: TabId; icon: React.ReactNode }[] = [
    { id: 'skills', icon: <CodeIcon /> },
    { id: 'quests', icon: <MapIcon /> },
    { id: 'academy', icon: <SchoolIcon /> },
    { id: 'achievements', icon: <EmojiEventsIcon /> },
    { id: 'hobbies', icon: <SportsEsportsIcon /> },
    { id: 'next', icon: <RocketLaunchIcon /> },
];

// Same order as the translated hobby labels
const hobbyIcons = [
    <PetsIcon />,
    <ParkIcon />,
    <HeadphonesIcon />,
    <DirectionsRunIcon />,
    <BrushIcon />,
    <LightIcon />,
    <MenuBookIcon />,
    <EditNoteIcon />,
    <PsychologyIcon />,
];

const placeLine = (company: string, place: string) => [company, place].filter(Boolean).join(', ');

const AboutPage: React.FC = () => {
    const classes = useStyles();
    const { lang, t } = useLanguage();
    const cv = useCv();
    const [activeTab, setActiveTab] = useState<TabId>('skills');
    const galleryItems = imageData.map((item) => ({ ...item, caption: item.caption[lang] }));

    return (
        <Box className={classes.root}>
            <div className="aboutWrapper">
                <header className="aboutHeader">
                    <span className="aboutKicker">{t.about.kicker}</span>
                    <Typography variant="h4" component="h1" className="aboutTitle">
                        {t.about.title}
                    </Typography>
                    <div className="classBadge">
                        <span className="classLabel">{t.about.classLabel}</span>
                        <span className="classType">{cv.profile.personalityType}</span>
                        <span className="className">{cv.profile.personalityName}</span>
                    </div>
                </header>

                <section className="profilePanel">
                    <div className="tabBar" role="tablist" aria-label={t.about.title}>
                        {tabIcons.map((tab) => (
                            <button
                                key={tab.id}
                                role="tab"
                                id={`tab-${tab.id}`}
                                aria-selected={activeTab === tab.id}
                                aria-controls={`panel-${tab.id}`}
                                className={`tabButton ${activeTab === tab.id ? 'active' : ''}`}
                                onClick={() => setActiveTab(tab.id)}
                            >
                                {tab.icon}
                                <span>{t.about.tabs[tab.id]}</span>
                            </button>
                        ))}
                    </div>

                    <div
                        key={activeTab}
                        className="tabPanel"
                        role="tabpanel"
                        id={`panel-${activeTab}`}
                        aria-labelledby={`tab-${activeTab}`}
                    >
                        {activeTab === 'skills' && (
                            <>
                                <p className="panelIntro">{cv.profile.summary}</p>
                                <h3 className="panelHeading">{t.about.inventory}</h3>
                                <div className="skillGrid">
                                    {cv.skillGroups.map((group, i) => (
                                        <div key={group.label} className="skillCard" style={{ animationDelay: `${i * 70}ms` }}>
                                            <span className="skillRank">{group.label}</span>
                                            <div className="itemChips">
                                                {group.items.map((item) => (
                                                    <span
                                                        key={item}
                                                        className={`itemChip ${cv.mainSkills.includes(item) ? 'main' : ''}`}
                                                        title={cv.mainSkills.includes(item) ? t.about.usedProfessionally : undefined}
                                                    >
                                                        {item}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <h3 className="panelHeading">{t.about.languagesSpoken}</h3>
                                <div className="languageGrid">
                                    {cv.spokenLanguages.map((spoken) => (
                                        <div key={spoken.name} className="languageRow">
                                            <span className="skillName">{spoken.name}</span>
                                            <div className="pips" aria-label={spoken.level}>
                                                {[1, 2, 3, 4, 5].map((n) => (
                                                    <span key={n} className={`pip ${n <= spoken.pips ? 'on' : ''}`} />
                                                ))}
                                            </div>
                                            <span className="languageLevel">{spoken.level}</span>
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}

                        {activeTab === 'quests' && (
                            <ol className="questLog">
                                {[...cv.experience, ...cv.internships].map((job, i) => (
                                    <li
                                        key={`${job.role}-${job.period}`}
                                        className={`questItem ${job.dev ? 'main' : ''}`}
                                        style={{ animationDelay: `${i * 70}ms` }}
                                    >
                                        <span className="questType">
                                            {job.dev ? t.about.mainQuest : t.about.sideQuest} · {job.period}
                                        </span>
                                        <h3 className="questTitle">{job.role}</h3>
                                        <span className="questPlace">{placeLine(job.company, job.place)}</span>
                                        <ul className="questPoints">
                                            {job.points.map((point) => (
                                                <li key={point}>{point}</li>
                                            ))}
                                        </ul>
                                    </li>
                                ))}
                            </ol>
                        )}

                        {activeTab === 'academy' && (
                            <ol className="questLog">
                                {cv.education.map((school, i) => (
                                    <li key={school.degree} className="questItem main" style={{ animationDelay: `${i * 90}ms` }}>
                                        <span className="questType">{school.period}</span>
                                        <h3 className="questTitle">{school.degree}</h3>
                                        <span className="questPlace">{school.school}</span>
                                        {school.detail && <p>{school.detail}</p>}
                                    </li>
                                ))}
                            </ol>
                        )}

                        {activeTab === 'achievements' && (
                            <div className="trophyGrid">
                                {cv.certificates.map((cert, i) => (
                                    <div key={cert.title} className="trophyCard" style={{ animationDelay: `${i * 90}ms` }}>
                                        <EmojiEventsIcon className="trophyIcon" />
                                        <span className="questType">{t.about.achievementUnlocked}</span>
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
                        )}

                        {activeTab === 'hobbies' && (
                            <>
                                <div className="hobbyGrid">
                                    {t.about.hobbies.map((label, i) => (
                                        <div key={label} className="hobbyTile">
                                            {hobbyIcons[i]}
                                            <span>{label}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="panelIntro">{t.about.hobbiesText}</p>
                            </>
                        )}

                        {activeTab === 'next' && (
                            <>
                                <p className="panelIntro">{t.about.nextText}</p>
                                <ul className="objectives">
                                    {t.about.objectives.map((objective) => (
                                        <li key={objective}>{objective}</li>
                                    ))}
                                </ul>
                            </>
                        )}
                    </div>
                </section>

                <section className="memorySection">
                    <span className="aboutKicker">{t.about.memoryCards}</span>
                    <ImageGallery itemData={galleryItems} />
                </section>
            </div>
        </Box>
    );
}

export default AboutPage;
