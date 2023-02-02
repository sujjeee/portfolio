import Card from '@/components/Card'
import Hero from '@/components/Hero'
import Tab from '@/components/Tab'
import { getProjects } from '@/service';
import Head from 'next/head'
import { useEffect, useState } from 'react';

export async function getStaticProps() {
  const projects = await getProjects();

  return {
    props: { 
      projects,
      revalidate: 86400,
      headers: {
        'Cache-Control': 'public, max-age=86400',
      },
    },
  };

}

export default function Home({ projects }) {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    setSelectedProject(projects)
  }, [])



  const handleTabClick = (value) => {
    if (value === 'All') {
      setSelectedProject(projects)
    }
    else {
      setSelectedProject(
        projects.filter((project) => project.category === value)
      );
    }
  };
  return (
    <>
      <Head>
        <title>CodeBustar</title>
        <meta name="description" content="Get free Nextjs and Tailwind CSS templates." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <header>
          <Hero />
        </header>
        <section className='max-w-screen-xl mx-auto border-y border-gray-900 py-16'>
          <div className='py-2 sm:py-8'>
            <Tab onTabClick={handleTabClick} />
          </div>
          <Card projects={selectedProject} />
        </section>
      </main>
    </>
  )
}
