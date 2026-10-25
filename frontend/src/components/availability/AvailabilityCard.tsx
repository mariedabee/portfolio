import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import PlaceIcon from '@mui/icons-material/Place';
import { useCv } from '../../data/cvData';
import { useLanguage } from '../../i18n/LanguageContext';
import './AvailabilityCard.css';

// "Open to work" panel: full quest banner on the home page, compact in the CV sidebar
const AvailabilityCard: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const { t } = useLanguage();
  const { availability } = useCv();

  return (
    <div className={`availabilityCard ${compact ? 'compact' : ''}`}>
      {!compact && <span className="availabilityKicker">{t.home.questTitle}</span>}
      <div className="availabilityHeadline">
        <span className="statusDot" aria-hidden="true" />
        {availability.headline}
      </div>
      {!compact && <span className="availabilityLabel">{t.home.lookingFor}:</span>}
      <ul className="availabilityList">
        <li>
          <WorkOutlineIcon /> {availability.type}
        </li>
        <li>
          <PlaceIcon /> {availability.location}
        </li>
      </ul>
      {!compact && <p className="availabilityNote">{availability.note}</p>}
      {!compact && (
        <Button variant="contained" color="secondary" component={Link} to="/cv">
          {t.home.viewCv}
        </Button>
      )}
    </div>
  );
};

export default AvailabilityCard;
