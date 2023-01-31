import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hey, <br/>
        I'm Arun
      </SectionTitle>
      <SectionText>
        I'm a Full-stack developer with 2 years of software Engineering experience.
        This website is to showcase my personal projects and my skills.
      </SectionText>
      <Button onClick={() => window.location = 'https://google.com'}>Learn more</Button>
    </LeftSection>

  </Section>

);

export default Hero;