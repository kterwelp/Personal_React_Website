import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Routes from './components/routes';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="demo-big-content">
<Layout>
    <Header className="header-color" title={<Link style={{fontFamily: 'Playfair Display', fontSize: '23px', textDecoration: 'none', color:'white'}} to="/">DevbyKevT</Link>} scroll>
        <Navigation>
            <Link to="/projects">Projects</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/aboutme">About Me</Link>
            <Link to="/contactme">Contact Me</Link>
            <Link to="/">Home</Link>
        </Navigation>
    </Header>
    <Drawer title={<Link style={{fontFamily: 'Playfair Display', textDecoration: 'none', color:'darkblue'}} to="/">DevbyKevT</Link>}>
        <Navigation>
            <Link style={{fontFamily: 'Playfair Display', fontSize: '18px', color: '#0d52d1'}} to="/projects">Projects</Link>
            <Link style={{fontFamily: 'Playfair Display', fontSize: '18px', color: '#0d52d1'}} to="/resume">Resume</Link>
            <Link style={{fontFamily: 'Playfair Display', fontSize: '18px', color: '#0d52d1'}} to="/aboutme">About Me</Link>
            <Link style={{fontFamily: 'Playfair Display', fontSize: '18px', color: '#0d52d1'}} to="/contactme">Contact Me</Link>
            <Link style={{fontFamily: 'Playfair Display', fontSize: '18px', color: '#0d52d1'}} to="/">Home</Link>
        </Navigation>
    </Drawer>
    <Content>
        <div className="page-content" />
        <Routes/>
    </Content>
</Layout>
</div>
  );
}

export default App;
