import Clubhouse from '../components/Clubhouse';
import ClubhouseHero from '../components/ClubhouseHero';
import Description from '../components/Desciption';
import FAQ from '../components/FAQ';
import Hero from '../components/Hero';
import Obama from '../components/Obama';
import Stats from '../components/Stats';
import Team from '../components/Team';
import WhatWeDo from '../components/WhatWeDo';
import { Meta } from '../layout/Meta';

const Index = () => {
  return (
    <>
      <Meta
        title="Crocker Dads Club"
        description="We are an elite force of fund-raising, grilling, grilling, fund-raising, and grilling dads who never shy away from the critical tasks of grilling, fundraising, and fund-raising while grilling."
      />
      <Hero />
      <Description />
      <Stats />
      <Team />
      <Obama />
      <Clubhouse />
      <WhatWeDo />
      <ClubhouseHero />
      <FAQ />
    </>
  );
};

export default Index;
