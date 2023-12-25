import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import CircleIcon from '@mui/icons-material/Circle';
import AssignmentIcon from '@mui/icons-material/Assignment';


const Layout = ({ children }) => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const theme = createTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));


    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <ThemeProvider theme={theme}>
            <div style={{  height: '100vh' }}>
                {isMobile ? (
                    //mobile layout
                    <>
                    <div>
                        <div style={{
                                color: '#000',
                                transition: 'width 0.3s ease',
                                alignItems: 'center',
                                justifyContent:'center'
                        }}>
                            <div style={{
                                    width: '100vw',
                                backgroundColor: '#C3B1E1', height: '100%', display: 'flex',
                                    transition: 'width 0.3s ease',
                                    alignItems: 'center'
                            }}>
                                <div style={{
                                    height: '5em'
                                }}></div>
                                <Link to="/" className='listItem'>
                                    <div className='listItemContainer'>
                                        <div style={{
                                                    display: 'flex', flexDirection: 'row', gap:'.5em' 
                                        }}>
                                            <HomeIcon style={{ fontSize: '1.5rem' }} />
                                            <div>Home</div>
                                        </div>
                                </div>
                                </Link>
                                <Link to="/todo" className='listItem'>
                                    <div className='listItemContainer'>
                                        <div style={{
                                           display: 'flex', flexDirection: 'row', gap:'.5em'
                                        }}>
                                            <AssignmentIcon style={{ fontSize: '1.5rem' }} />
                                            <div>Todo</div>
                                            
                                        </div>                                      
                                    </div>
                                </Link>
                                <Link to="/Other" className='listItem'>
                                    <div className='listItemContainer'>
                                        <div style={{
                                           display: 'flex', flexDirection: 'row', gap:'.5em'
                                        }}>
                                            <CircleIcon style={{ fontSize: '1.5rem' }} />
                                            <div>Other</div>
                                            
                                        </div>                                      
                                    </div>
                                </Link>
                            </div>
                        </div> 
                        <div style={{ flex: 1, overflowY: 'auto'
                        }}>
                            {children}
                        </div>
                    </div>                       
                    </>
                ) : (
                    //desktop layout
                    <div style={{ display: 'flex'}}>
                        <div style={{
                                color: '#000',
                                transition: 'width 0.3s ease',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent:'center'
                        }}>
                            <div style={{
                                    width: '10vw',
                                backgroundColor: '#C3B1E1', height: '100%', display: 'flex',
                                    transition: 'width 0.3s ease',
                                    flexDirection: 'column',
                                    alignItems: 'center'
                            }}>
                                <div style={{
                                    height: '13em'
                                }}></div>
                                <Link to="/" className='listItem'>
                                    <div className='listItemContainer'>
                                        <div style={{
                                                    display: 'flex', flexDirection: 'row', gap:'.5em' 
                                        }}>
                                            <HomeIcon style={{ fontSize: '2rem' }} />
                                            <div>Home</div>
                                        </div>
                                </div>
                                </Link>
                                <Link to="/todo" className='listItem'>
                                    <div className='listItemContainer'>
                                        <div style={{
                                           display: 'flex', flexDirection: 'row', gap:'.5em'
                                        }}>
                                            <AssignmentIcon style={{ fontSize: '2rem' }} />
                                            <div>Todo</div>
                                            
                                        </div>                                      
                                    </div>
                                </Link>
                                <Link to="/Other" className='listItem'>
                                    <div className='listItemContainer'>
                                        <div style={{
                                           display: 'flex', flexDirection: 'row', gap:'.5em'
                                        }}>
                                            <CircleIcon style={{ fontSize: '2rem' }} />
                                            <div>Other</div>
                                            
                                        </div>                                      
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div style={{ flex: 1, overflowY: 'auto'
                        }}>
                            {children}
                        </div>
                    </div>
                )}
            </div>
        </ThemeProvider>
    );
};

export default Layout;

