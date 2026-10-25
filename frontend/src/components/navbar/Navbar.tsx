import React from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import logo from '../../shared/logo.svg';
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';
import { useLanguage } from '../../i18n/LanguageContext';
import { Lang } from '../../i18n/translations';

// Game-menu style nav: the active page gets a blinking ▶ cursor
const MenuButton: React.FC<{ to: string; label: string }> = ({ to, label }) => (
    <Button color="inherit" component={NavLink} to={to} end className="menuButton">
        {label}
    </Button>
);

const languages: Lang[] = ['en', 'de'];

const Navbar: React.FC = () => {
    const { lang, setLang, t } = useLanguage();

    return (
        <AppBar position="sticky">
            <Toolbar className="toolbar">
                <Link to="/" className="logoLink" aria-label="mariedabee – Home">
                    <img src={logo} alt="" className="logo" />
                    <span className="wordmark">mariedabee</span>
                </Link>
                <MenuButton to="/" label={t.nav.home} />
                <MenuButton to="/about" label={t.nav.about} />
                <MenuButton to="/cv" label={t.nav.cv} />
                <MenuButton to="/contact" label={t.nav.contact} />

                <Box flexGrow={1} />
                <Link to="/cv" className="hudChip openToWork">
                    <span className="hudDot" aria-hidden="true" />
                    {t.nav.openToWork}
                </Link>
                <div className="langSwitch" role="group" aria-label={t.nav.switchLanguage}>
                    {languages.map((code) => (
                        <button
                            key={code}
                            className={`langOption ${lang === code ? 'active' : ''}`}
                            aria-pressed={lang === code}
                            onClick={() => setLang(code)}
                        >
                            {code.toUpperCase()}
                        </button>
                    ))}
                </div>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
