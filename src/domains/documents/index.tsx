/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';

import { clsx } from 'clsx';
import { CodeBox } from 'shared/components/code-box';
import { PROJECT_GITHUB_PAGE_ROUTE } from 'shared/routes/route-path';
import { animator } from 'shared/utils/animator';
import { titleGenerator } from 'shared/utils/title-generator';

import DOC_IMAGE_1 from 'shared/static/images/documents/1.png';
import DOC_IMAGE_2 from 'shared/static/images/documents/2.png';
import DOC_IMAGE_3 from 'shared/static/images/documents/3.png';
import DOC_IMAGE_4 from 'shared/static/images/documents/4.png';
import DOC_IMAGE_5 from 'shared/static/images/documents/5.png';
import DOC_IMAGE_6 from 'shared/static/images/documents/6.png';

export function DocumentsPage() {
  titleGenerator('Documents');

  return (
    <main>
      <h1
        className={clsx(
          'font-bold text-center text-3xl mb-5',
          animator({ name: 'fadeInUp' })
        )}
      >
        Documents
      </h1>

      <article className='leading-7 text-justify flex flex-col gap-y-3 sm:px-10 pb-10'>
        <h1 className='font-bold'>Intro</h1>
        <p>
          This project is proudly done by Ramin Rezaei as a technical task to evaluate the
          technical skills of front end developer for Boozt company (Senior Front-end
          Engineer - WebShop). This project has been developed as a full stack in both
          front-end and back-end sections, and it has been tried to provide high quality
          in a short time. And it has been tried not to use any external tools in all
          parts to show better programming skills. For example, we can use powerful
          libraries such as React-Query to structure requests on the front-end side of the
          project, but in this project all hooks and requests structure are custom built.
        </p>

        <h1 className='font-bold'>Performance</h1>
        <p>
          To provide the best quality in the performance of this project and to provide a
          better user experience, tools such as Lighthouse, Performance Tab, Rendering
          Check and ... were used and all its parameters were observed as much as
          possible. Other things like security (HTTPS) are outside the scope of this task.
          <br />
          In creating requests and displaying data, we tried to have the least
          re-rendering and re-painting of the browser. Also, no additional request is
          created. Of course, by caching data or using libraries such as React Query, we
          can significantly reduce requests, which will be much more optimal for
          high-traffic situations.
          <br />
          Also, in the future, the use of client-side capabilities, including Back/Forward
          cache, will have a significant impact.
          <br />
          Also, for better downloading of fonts and faster speed, Google fonts are used,
          which have the highest quality by its CDN. It also has special and interesting
          ways to optimize more fonts, which were not required for this task, but you can
          learn more.
          <CodeBox className='my-5'>
            https://sia.codes/posts/making-google-fonts-faster/
          </CodeBox>
          Also, by Google Chrome's Lighthouse statistics, we have tried to have a more
          optimal and better CLS. Also, in the beginning, the shadow effect was considered
          for the product cards, which I realized by checking the statistics, and now the
          designed page has the best re-rendering and re-painting of the browser and
          alignment of the elements.
          <CodeBox className='my-5'>
            https://www.sitepoint.com/css-box-shadow-animation-performance/
          </CodeBox>
          <CodeBox className='mb-5'>https://web.dev/optimize-cls/</CodeBox>
        </p>

        <br />
        <div className='w-full grid sm:grid-cols-2 gap-2'>
          <img alt='' src={DOC_IMAGE_1} className='rounded-md' />
          <img alt='' src={DOC_IMAGE_2} className='rounded-md' />
        </div>
        <p className='text-center text-gray-400'>
          Fix Layout Shift Regions and Paint Flashing (Before/After)
        </p>
        <br />
        <div className='w-full grid sm:grid-cols-2 gap-2'>
          <img alt='' src={DOC_IMAGE_3} className='rounded-md' />
          <img alt='' src={DOC_IMAGE_4} className='rounded-md' />
        </div>
        <p className='text-center text-gray-400'>Core Web Vitals & Layer Border</p>
        <br />
        <div className='w-full grid sm:grid-cols-2 gap-2'>
          <img alt='' src={DOC_IMAGE_5} className='rounded-md' />
          <img alt='' src={DOC_IMAGE_6} className='rounded-md' />
        </div>
        <p className='text-center text-gray-400'>Fix Lighthouse Issues (Before/After)</p>

        <h1 className='font-bold'>UI & UX</h1>
        <p>
          In the implementation of this project, an effort has been made to convey a sense
          of trust and simplicity to the user, and also by keeping the sort bar fixed when
          scrolling or returning to the top of the list after changing the pagination, an
          attempt has been made to create a good user experience.
        </p>

        <h1 className='font-bold'>Project Stack</h1>
        <ul className='list-disc ml-5'>
          <li>PHP</li>
          <li>MySql</li>
          <li>React</li>
          <li>Tailwind CSS</li>
          <li>SCSS Module System</li>
          <li>JavaScript with TypeScript</li>
        </ul>

        <h1 className='font-bold'>Your Comments & Suggestions</h1>
        <p>
          This project was done for temporary employment and as a technical task.
          <br />
          But my main goal in all my projects is to learn new things and improve myself. I
          eagerly welcome your smallest suggestions or ideas because I believe that
          thoughts are complementary. You can send me your comments and suggestions in the
          issues section of this project through GitHub.
        </p>
        <Link
          target='blank'
          className='text-sky-500'
          to={PROJECT_GITHUB_PAGE_ROUTE + '/issues'}
        >
          Issues Page
        </Link>

        {/* LINKS */}
        <h1 className='font-bold mt-10'>More About ...</h1>
        <Link target='blank' className='text-sky-500' to={PROJECT_GITHUB_PAGE_ROUTE}>
          See Project On GitHub
        </Link>
        <Link
          target='blank'
          className='text-sky-500'
          to={PROJECT_GITHUB_PAGE_ROUTE + '/tree/main/documents'}
        >
          See Or Download Full Documents On GitHub
        </Link>
      </article>
    </main>
  );
}
