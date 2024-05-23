import React from 'react';
import { getLayout } from '~/components/Sidebar';
import Head from 'next/head';
import { Headline1 } from '~/components/Headlines';
import { SectionContext } from '~/context';
import Card from '~/components/Card';
import data from '~/data/welcome.json';

export default function Welcome() {
  const newTitle = 'Welcome';

  return (
    <SectionContext.Provider value='docs'>
      <Head>
        <title>{newTitle}</title>
      </Head>
      <Headline1>{newTitle}</Headline1>
      <p>
        Veniam ea fugiat exercitation laboris non est nulla id pariatur ex. Qui
        occaecat fugiat sunt exercitation adipisicing culpa reprehenderit
        consectetur amet in. Qui fugiat amet do eu.
      </p>
      <div className='w-full lg:w-full grid grid-cols-1 sm:grid-cols-2 gap-6 my-[10px] mx-auto mt-8'>
        {data.map((element: any, index: any) => (
          <Card
            key={index}
            title={element.title}
            body={element.summary}
            icon={element.logo}
            link={element.links.url}
          />
        ))}
      </div>
    </SectionContext.Provider>
  );
}
Welcome.getLayout = getLayout;
