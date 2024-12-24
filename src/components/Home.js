import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// Import images
import image13 from '../img/image-13.png';
import vector26 from '../img/vector-26@2x.png';
import buttonText7 from '../img/button-text-7@2x.png';
import image19 from '../img/image-19@2x.png';
import image2 from '../img/image-2.png';
import image21 from '../img/image-21.png';
import image5 from '../img/image-5.png';
import logo from '../img/terapia-gpt-logo.png';

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const animateElements = document.querySelectorAll('[class*="animate-enter"]');
      const screenBottom = window.pageYOffset + window.innerHeight;
      
      animateElements.forEach(element => {
        const top = element.getBoundingClientRect().top + window.pageYOffset;
        if (top < screenBottom) {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <HomeContainer className="home-m screen">
      <Frame1244831314>
        <Card>
          <Image src={image13} alt="Image" />
        </Card>
      </Frame1244831314>

      <TextInput className="animate-enter15" />

      <NavBar>
        <Logo>
          <LogoImage src={logo} alt="Terapia GPT" />
          <LogoText>TERAPIA GPT</LogoText>
        </Logo>
        <NavLinks>
          <NavLink>Planos</NavLink>
          <NavLink>Ferramentas</NavLink>
          <NavLink>Novidades</NavLink>
        </NavLinks>
        <LoginButton>
          Fazer Login
        </LoginButton>
      </NavBar>

      <MainContent>
        <TextContent>
          <Heading className="animate-enter16">ESTAMOS VIVENDO EM</Heading>
          <SubheadingContainer className="animate-enter17">
            <Subheading>Nossa Saúde Mental está em</Subheading>
            <SubheadingImage src={buttonText7} alt="Button Text" />
          </SubheadingContainer>
          <LargeText className="animate-enter18">TEMPOS COMPLICADOS</LargeText>
        </TextContent>

        <CTAButton>
          <CTAText>Descubra nossa Solução</CTAText>
        </CTAButton>
      </MainContent>

      <ImageSection>
        <ImageGrid>
          <GridImage1 src={image19} alt="Image" />
          <GridImage2 src={image2} alt="Image" />
          <GridImage3 src={image21} alt="Image" />
          <StressedPersonImage src={image5} alt="Pessoa demonstrando preocupação" />
        </ImageGrid>
      </ImageSection>
    </HomeContainer>
  );
};

// Styled Components
const HomeContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #ffffff;
  position: relative;
`;

const Frame1244831314 = styled.div`
  position: relative;
  width: 100%;
`;

const Card = styled.div`
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const TextInput = styled.div`
  // Add your styles
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  box-sizing: border-box;
  overflow: visible;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  position: relative;
  margin-left: 6px;
`;

const LogoImage = styled.img`
  height: 40px;
  position: relative;
  left: -6px;
`;

const LogoText = styled.span`
  font-family: 'Inter', sans-serif;
  font-weight: bold;
  color: #6366F1;
  font-size: 24px;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 3rem;
`;

const NavLink = styled.a`
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  color: #1F2937;
  text-decoration: none;
  cursor: pointer;
  
  &:hover {
    color: #6366F1;
  }
`;

const LoginButton = styled.button`
  background: #6366F1;
  color: white;
  border: none;
  border-radius: 9999px;
  padding: 0.75rem 1.5rem;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background: #4F46E5;
  }
`;

const MainContent = styled.div`
  padding: 120px 5% 60px;
  max-width: 1200px;
  margin: 0 auto;
`;

const TextContent = styled.div`
  margin-bottom: 40px;
`;

const Heading = styled.h1`
  font-family: 'DM Sans', sans-serif;
  font-size: 48px;
  color: #1E2875;
  margin-bottom: 20px;
`;

const SubheadingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
`;

const Subheading = styled.p`
  font-size: 24px;
  color: #1E2875;
`;

const SubheadingImage = styled.img`
  height: 30px;
`;

const LargeText = styled.div`
  font-size: 48px;
  color: #1E2875;
  font-weight: bold;
`;

const CTAButton = styled.button`
  background: #1E2875;
  border: none;
  border-radius: 8px;
  padding: 16px 32px;
  cursor: pointer;
  
  &:hover {
    opacity: 0.9;
  }
`;

const CTAText = styled.span`
  color: white;
  font-size: 24px;
  font-weight: bold;
`;

const ImageSection = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

const ImageGrid = styled.div`
  position: relative;
  max-width: 1400px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const GridImage1 = styled.img`
  width: 30%;
  position: absolute;
  top: 0;
  left: 0;
`;

const GridImage2 = styled.img`
  width: 40%;
  position: absolute;
  bottom: 0;
  left: 10%;
`;

const GridImage3 = styled.img`
  width: 20%;
  position: absolute;
  top: 20px;
  right: 20%;
`;

const StressedPersonImage = styled.img`
  width: 50%;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
`;

export default Home;
