import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from 'react-icons/fa';

import {
  Container,
  Wrapper,
  SocialMedia,
  Logo,
  SocialMediaWrap,
  SocialIcons,
  SocialLink,
} from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <SocialMedia>
          <SocialMediaWrap>
            <Logo to="/">Pizza</Logo>
            <SocialIcons>
              <SocialLink
                href="/"
                target="_blank"
                aria-label="Facebook"
                rel="noopener"
              >
                <FaFacebook />
              </SocialLink>
              <SocialLink
                href="/"
                target="_blank"
                aria-label="Instagram"
                rel="noopener"
              >
                <FaInstagram />
              </SocialLink>
              <SocialLink
                href="/"
                target="_blank"
                aria-label="Youtube"
                rel="noopener"
              >
                <FaYoutube />
              </SocialLink>
              <SocialLink
                href="/"
                target="_blank"
                aria-label="Twitter"
                rel="noopener"
              >
                <FaTwitter />
              </SocialLink>
              <SocialLink
                href="/"
                target="_blank"
                aria-label="Linkedin"
                rel="noopener"
              >
                <FaLinkedin />
              </SocialLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </Wrapper>
    </Container>
  );
};

export default Footer;
