import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Box, IconButton, Drawer, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logo from '../../shared/logo.svg';
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';
import { useLanguage } from '../../i18n/LanguageContext';
import { Lang } from '../../i18n/translations';

// Game-menu style nav: the active page gets a blinking ▶ cursor
const MenuButton: React.FC<{ to: string; label: string; onClick?: () => void }> = ({ to, label, onClick }) => (
    <Button color="inherit" component={NavLink} to={to} end className="menuButton" onClick={onClick}>
        {label}
    </Button>
);

const languages: Lang[] = ['en', 'de'];

const Navbar: React.FC = () => {
    const { lang, setLang, t } = useLanguage();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [menuOpen, setMenuOpen] = useState(false);
    const closeMenu = () => setMenuOpen(false);

    const pages = [
        { to: '/', label: t.nav.home },
        { to: '/about', label: t.nav.about },
        { to: '/cv', label: t.nav.cv },
        { to: '/contact', label: t.nav.contact },
    ];

    const openToWork = (
        <Link to="/cv" className="hudChip openToWork" onClick={closeMenu}>
            <span className="hudDot" aria-hidden="true" />
            {t.nav.openToWork}
        </Link>
    );

    const languageSwitch = (
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
    );

    return (
        <AppBar position="sticky">
            <Toolbar className="toolbar">
                <Link to="/" className="logoLink" aria-label="mariedabee – Home" onClick={closeMenu}>
                    <img src={logo} alt="" className="logo" />
                    <span className="wordmark">mariedabee</span>
                </Link>

                {!isMobile && pages.map((page) => <MenuButton key={page.to} {...page} />)}

                <Box flexGrow={1} />
                {!isMobile && openToWork}
                {languageSwitch}

                {isMobile && (
                    <IconButton
                        className="menuToggle"
                        aria-label="Menu"
                        aria-expanded={menuOpen}
                        onClick={() => setMenuOpen(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                )}
            </Toolbar>

            {/* Mobile: slide-in game menu */}
            <Drawer anchor="right" open={isMobile && menuOpen} onClose={closeMenu} PaperProps={{ className: 'mobileMenu' }}>
                <div className="mobileMenuHeader">
                    <span className="mobileMenuTitle">MENU</span>
                    <IconButton className="menuToggle" aria-label="Close menu" onClick={closeMenu}>
                        <CloseIcon />
                    </IconButton>
                </div>
                <nav className="mobileMenuLinks">
                    {pages.map((page) => (
                        <MenuButton key={page.to} {...page} onClick={closeMenu} />
                    ))}
                </nav>
                <div className="mobileMenuFooter">{openToWork}</div>
            </Drawer>
        </AppBar>
    );
}

export default Navbar;
