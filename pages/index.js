import Head from 'next/head';
import Image from 'next/image';
import Counter from '../components/counter';
import LightDarkButton from '../components/lightbutton';
import GitHubButton from '../components/githubbutton';

import Drip from '../components/drip';
import PageLink from '../components/link';


export default function Home() {
  return (
    <>
      <Head>
        <title>dripdrop - The next-gen water source.</title>
        <meta name="description" content="The next-gen water source." />
        <link rel="icon" type="image/x-icon" href="/bottle.svg" />
      </Head>


      <header className='select-none bg-water dark:bg-darkwater'>
        <div className='flex flex-row justify-end gap-6 pt-5 pr-6'>
          <LightDarkButton/>
          <GitHubButton/>
        </div>
        <div className='flex flex-row justify-center pt-20'>
          <div className='flex flex-col text-center'>
            <Image src='/bottle.svg' width={300} height={200} className='-rotate-45' alt="water bottle" draggable={false} />
            <h1 className='font-edu font-bold text-5xl'>dripdrop</h1>

            <Drip />
          </div>
        </div>
      </header>

      <main className='flex flex-row justify-center font-lato text-lg pt-20 dark:bg-slate-800 dark:text-gray-300'>
        <div className='flex flex-col gap-4 max-w-screen-sm px-4'>

          <h1 className='font-bold text-4xl pb-4 block text-center'>
            The next-gen water source.
          </h1>

          <section className='pb-8'>
            Dripdrop is a next-generation water deployment system, built for speed, reliability, and simplicity.
            Some stand-out features:

            <ul className='flex flex-col gap-2 my-4'>
              <li><b>Wonderfully crisp taste</b> baked right in.</li>
              <li><b>Long-lasting health benefits</b> from a single sip.</li>
              <li><b>Undeniable quality</b> that roots from our superior technology.</li>
              <li><b>No more headaches</b> given {"dripdrop's"} paliative qualities.</li>
              <li><b>Gloriously amusing</b> in its brilliant duplicity.</li>
              <li><b>Blazingly fast</b> by utilizing powerful tools.</li>
            </ul>

            Dripdrop can seamlessly integrate into your home with a couple clicks
            by taking advantage of new web technologies.
          </section>

          <section id="getting-started" className='flex flex-col gap-2 pb-8'>
            <PageLink href="#getting-started" className="font-bold">
              Getting Started
            </PageLink>

            <div>
              You should have any sort of container that can be filled with water.
              Most kinds will suffice from plastic to metal, even paper!
            </div>

            <div>
              Then, you can go to the store and buy some water for yourself!
            </div>

            <div>
              If you have a water filter at home or are apathetic to health hazards,
              use the tap!
            </div>
          </section>

          <section id="dev-notes" className='flex flex-col gap-2 pb-8'>
            <PageLink href="#dev-notes" className="font-bold">
              Dev Notes
            </PageLink>

            <div>
              {"Hi, it's Daniel! I'm just going to ramble on for a bit."} This is all just a joke; I just made everything up for fun. The design for this website
              is completely inspired by <PageLink href="https://fresh.deno.dev/">{"Fresh's website"}</PageLink> even
              though I used the <PageLink href="https://nextjs.org/">Next.js</PageLink> web framework instead lol. I think their developers also
              used <PageLink href="https://tailwindcss.com/">tailwindcss</PageLink> which was interesting, but not that crazy
              because tailwind is epic. Also... I spent an exorbitant amount of time on <PageLink href="https://react-spring.dev/">react spring</PageLink> which
              was pretty frustrating because the `useChain` hook would not work, and all the animations would run
              simultaneously, and it was a huge mess. Oh... I forgot about dealing with the water bottle svg... that was a
              rollercoaster. <PageLink href="https://vercel.com/">Vercel</PageLink> is pretty nice when it comes to deploy projects like this. Very cool!
              Some maxims that have held up over this project: some K-pop songs are crazy fire, sleep is important,
              do not be coding late into the night, procrastination is bad, web development is hard.
              But at least, I finished this in less than 12 hours of work. Yay. {"🔥 🔥 🔥"}

            </div>
          </section>

          <section id="counter" className='flex flex-col gap-2 pb-8'>
            <PageLink href="#counter" className="font-bold">
              Counter
            </PageLink>

            <div>
              {"Here's"} the infamous <PageLink href="https://reactjs.org/">React</PageLink> example of {"\"reactive\""} state. Have at it!
            </div>

            <Counter />
          </section>

        </div>
      </main>

      <footer className='flex flex-row justify-center content-center w-full h-28 p-6 bg-gray-100 border text-gray-600 dark:bg-gray-900 dark:text-gray-500 dark:border-gray-900'>
        <div className='flex flex-col gap-4'>
          <div className='flex flex-row text-center justify-around gap-8'>
            <PageLink href="https://github.com/solunian/dripdrop">github</PageLink>
            <PageLink href="https://github.com/solunian/dripdrop/blob/main/LICENSE">license</PageLink>
            <PageLink href="https://open.spotify.com/track/1XkMxUilV0E3ChDERZJUEq?si=f27ac47d9fbf41cd">a good song</PageLink>
          </div>

          <div className='text-center'>
            {"© 2022 the dripdrop developer"}
          </div>
        </div>

      </footer>
    </>
  )
}
