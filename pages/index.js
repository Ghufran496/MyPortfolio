import Head from 'next/head';
import ConnectSection from '../components/ConnectSection/ConnectSection';
import IntroSection from '../components/IntroSection/IntroSection';
import ProjectsSection from '../components/ProjectsSection/ProjectsSection';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ghufran Ullah - Software Engineer</title>
        <meta
          name='description'
          content='Ghufran Ullah - Software Engineer Portfolio'
        />
      </Head>
      <IntroSection />
      <ProjectsSection />
      <ConnectSection />
    </>
  );
}
