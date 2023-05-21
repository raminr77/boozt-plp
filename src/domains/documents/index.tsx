import { Link } from 'react-router-dom';

import { clsx } from 'clsx';
import { CodeBox } from 'shared/components/code-box';
import { Image } from 'shared/components/image';
import { PROJECT_GITHUB_PAGE_ROUTE } from 'shared/routes/route-path';
import { animator } from 'shared/utils/animator';
import { titleGenerator } from 'shared/utils/title-generator';

import DOC_IMAGE_1 from 'shared/static/images/documents/1.png';
import DOC_IMAGE_2 from 'shared/static/images/documents/2.png';
import DOC_IMAGE_3 from 'shared/static/images/documents/3.png';
import DOC_IMAGE_4 from 'shared/static/images/documents/4.png';
import DOC_IMAGE_5 from 'shared/static/images/documents/5.png';
import DOC_IMAGE_6 from 'shared/static/images/documents/6.png';
import DOC_IMAGE_7 from 'shared/static/images/documents/7.png';
import DOC_IMAGE_8 from 'shared/static/images/documents/8.png';
import DOC_IMAGE_9 from 'shared/static/images/documents/9.png';

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
          technical skills of a front-end developer for Boozt company (Senior Front-end
          Engineer - WebShop). The project has been developed as a full stack,
          encompassing both the front-end and back-end sections. The aim was to deliver
          high-quality results within a short timeframe, while showcasing strong
          programming skills. Notably, no external tools were utilized in any parts of the
          project to demonstrate proficiency in custom-built solutions. Although libraries
          like React-Query could have been employed for structuring requests on the
          front-end side, this project opted for custom hooks and request structures.
        </p>
        <br />
        <h1 className='font-bold'>Folder Structure</h1>
        <p>
          The project follows a feature-sliced design for organizing folders and files.
          While this structure may initially appear confusing or inadequate, it was chosen
          to showcase the ability to create well-structured systems for large-scale
          projects, including yours.
        </p>
        <p>For more details on feature-sliced design, refer to the following resource:</p>
        <CodeBox>https://feature-sliced.design/</CodeBox>
        <br />
        <h1 className='font-bold'>Performance</h1>
        <p>
          To ensure optimal performance and deliver an excellent user experience, various
          tools and techniques were employed in this project. Lighthouse, Performance Tab,
          Rendering Check, and other similar tools were utilized to fine-tune performance
          parameters. While considerations such as security (HTTPS) were outside the scope
          of this task, efforts were made to minimize browser re-rendering and re-painting
          during request handling and data display. Additionally, no unnecessary requests
          were generated. Caching data or leveraging libraries like React Query could
          further reduce the number of requests, making it even more optimized for
          high-traffic scenarios. Furthermore, utilizing client-side capabilities such as
          Back/Forward cache would have a significant impact on performance. Google fonts
          were used to enhance font download speed, and their highest quality was ensured
          through CDN. Although there are additional techniques for optimizing fonts, they
          were not required for this task. Feel free to explore them for further
          optimization.
        </p>
        <p>Learn more about optimizing Google fonts:</p>
        <CodeBox className='my-5'>
          https://sia.codes/posts/making-google-fonts-faster/
        </CodeBox>

        <br />

        <div className='w-full grid sm:grid-cols-2 gap-2'>
          <Image alt='' src={DOC_IMAGE_1} className='rounded-md' />
          <Image alt='' src={DOC_IMAGE_2} className='rounded-md' />
        </div>
        <p className='text-center text-gray-400'>
          Fix Layout Shift Regions and Paint Flashing (Before/After)
        </p>
        <br />
        <p>
          Lighthouse statistics were used to improve Cumulative Layout Shift (CLS) and
          overall optimization. Initially, the shadow effect was considered for product
          cards, but upon analyzing the statistics, the design was adjusted to ensure the
          best re-rendering, re-painting, and alignment of elements within the browser.
        </p>

        <p>
          Learn more about optimizing CSS box-shadow animation performance and CLS:
          <CodeBox className='my-5'>
            https://www.sitepoint.com/css-box-shadow-animation-performance/
          </CodeBox>
          <CodeBox className='mb-5'>https://web.dev/optimize-cls/</CodeBox>
        </p>
        <div className='w-full grid sm:grid-cols-2 gap-2'>
          <Image alt='' src={DOC_IMAGE_3} className='rounded-md' />
          <Image alt='' src={DOC_IMAGE_4} className='rounded-md' />
        </div>
        <br />
        <br />

        <h1 className='font-bold'>Core Web Vitals & Layer Border</h1>
        <p>
          Enhancing Core Web Vitals and implementing layer borders can significantly
          improve the user experience and make your website visually appealing.
        </p>
        <p>
          Improving performance and accessibility scores in Lighthouse audits can greatly
          enhance the overall user experience and ensure that your website meets modern
          standards.
        </p>
        <div className='w-full grid sm:grid-cols-2 gap-2'>
          <Image alt='' src={DOC_IMAGE_5} className='rounded-md' />
          <Image alt='' src={DOC_IMAGE_6} className='rounded-md' />
        </div>
        <p className='text-center text-gray-400'>Fix Lighthouse Issues (Before/After)</p>

        <br />
        <p>
          [classnames] and [clsx] are utility libraries commonly used in React projects to
          conditionally join CSS class names together. They are particularly useful for
          dynamically applying classes based on different conditions or states. The
          [classnames] library is a popular choice for this task, but it may contribute to
          a larger bundle size due to its dependencies and code footprint. On the other
          hand, [clsx] is a lightweight alternative that provides similar functionality
          with a smaller footprint, making it more suitable for optimizing bundle size.
        </p>
        <div className='w-full flex items-center justify-center'>
          <Image alt='' src={DOC_IMAGE_7} className='rounded-md max-w-md' />
        </div>
        <p className='text-center text-gray-400'>
          Reduce Bundle Size By Replace A Library (Before/After)
        </p>

        <br />
        <p>
          The code provided demonstrates the development of a custom hook called useToggle
          that utilizes the useReducer hook from React. This custom hook aims to optimize
          binary mode functionality and serves as a replacement for the standard useState
          hook. The useToggle hook accepts an optional initialValue parameter, defaulting
          to false if not provided. Internally, it employs the useReducer hook to manage
          the state. The toggler function acts as the reducer function responsible for
          updating the state based on dispatched actions. It takes two parameters:
          currentValue, representing the current state value, and newValue, the value
          passed when dispatching an action. If newValue is explicitly of type boolean, it
          returns that value. Otherwise, it negates the currentValue, effectively toggling
          between true and false. By leveraging useReducer instead of useState, the
          useToggle hook provides a more optimized solution for managing binary mode
          state. It avoids unnecessary re-renders that may occur when using useState for
          this purpose. To utilize the useToggle hook in your components, import it from
          the file where it is defined and invoke it like any other custom hook. If
          needed, provide an optional initialValue parameter. The hook will return an
          array with two elements: the current state value and a function to toggle the
          state.
          <br />
          Example:
        </p>
        <div className='w-full flex flex-col items-center justify-center'>
          <Image alt='' src={DOC_IMAGE_8} className='rounded-md max-w-3xl' />
          <Image alt='' src={DOC_IMAGE_9} className='rounded-md max-w-xl' />
        </div>
        <p className='text-center text-gray-400'>
          Development of a custom hook optimized (useReducer) for binary modes and
          replacement with useState. (Before/After)
        </p>
        <p>
          By utilizing the useToggle hook, you can easily manage binary mode state within
          your components, providing a clean and optimized solution for handling toggling
          functionality. This project also includes other types of hooks, each designed
          with attention to detail and optimized for performance.
        </p>
        <br />
        <h1 className='font-bold'>Images</h1>
        <p>
          In this project, the `loading` parameter with the value of `lazy` has been added
          to all the images. This parameter is an attribute available in modern browsers
          that provides a way to control the loading behavior of images. By setting the
          `loading` attribute to `lazy`, we aim to achieve two main benefits:
        </p>
        <ul className='list-disc ml-5'>
          <li>
            Faster Initial Page Load: By deferring the loading of images until they are
            about to come into the viewport, the page can load faster initially. This is
            because the browser prioritizes the loading of visible content, such as text
            and critical resources, before loading the images. As a result, users can
            start interacting with the page more quickly, improving the overall user
            experience.
          </li>
          <li>
            On-Demand Image Loading: With loading=lazy, the browser will load the images
            progressively as the user scrolls and approaches the area where the images are
            displayed. This ensures that images are loaded only when they are actually
            needed, conserving bandwidth and reducing unnecessary network requests. By
            loading product images dynamically as users see them, we optimize the
            performance of the product listing and enhance the overall speed and
            responsiveness of the website.
          </li>
        </ul>
        <p>
          By leveraging the loading parameter with the value of lazy, we aim to optimize
          the loading performance of the project, enabling faster initial page load and
          efficient on-demand image loading. This approach contributes to a better user
          experience, improved loading times, and overall optimization of the project.
        </p>
        <br />
        <h1 className='font-bold'>UI & UX</h1>
        <p>
          The implementation of this project prioritizes delivering a user interface that
          embodies trust and simplicity. Measures have been taken to ensure that users
          feel confident and at ease while interacting with the application. One notable
          feature is the fixed sort bar, which remains visible to the user even while
          scrolling through the product list. This provides easy access to sorting options
          at all times, enhancing the overall user experience. Additionally, a smooth
          transition has been implemented to automatically scroll the user back to the top
          of the list after changing the pagination. This subtle yet effective enhancement
          allows users to navigate through the product catalog seamlessly without losing
          their place or feeling disoriented. By considering such details, the project
          aims to provide a pleasant and intuitive user experience that promotes ease of
          use and engagement. The goal is to create an interface that fosters trust,
          simplicity, and seamless usability, ensuring that users can effortlessly explore
          and find the products they desire.
        </p>
        <br />
        <h1 className='font-bold'>
          My Config (ESLint, Prettier, CommitLint, Husky, ...)
        </h1>
        <p>
          In this project, the following tools have been configured to enhance the
          development process:
        </p>
        <ul className='list-disc ml-5'>
          <li>ESLint: Used for static code analysis and enforcing coding standards.</li>
          <li>Prettier: Ensures consistent code formatting throughout the project.</li>
          <li>
            Commitlint: Enforces commit message conventions for a cleaner commit history.
          </li>
          <li>Husky: Enables automation of tasks before or after Git events.</li>
          <li>
            lint-staged: Runs linters on staged files to catch issues before committing
            them.
          </li>
        </ul>
        <p>
          These tools contribute to maintaining code quality, consistent formatting, and
          organized commit history in the project.
        </p>
        <br />
        <h1 className='font-bold'>Project Stack</h1>
        <ul className='list-disc ml-5'>
          <li>PHP</li>
          <li>MySql</li>
          <li>React</li>
          <li>Tailwind CSS</li>
          <li>SCSS Module System</li>
          <li>JavaScript with TypeScript</li>
        </ul>
        <br />
        <h1 className='font-bold'>Your Comments & Suggestions</h1>
        <p>
          This project was completed as a temporary employment and technical task.
          However, the main objective of all my projects is to learn new things and
          improve myself. I eagerly welcome even the smallest suggestions or ideas because
          I believe that thoughts are complementary. Please feel free to share your
          comments and suggestions in the issues section of this project on GitHub.
        </p>
        <p>Also, you can send me an email.</p>
        <div>
          Email:
          <Link
            target='blank'
            to='mailto:info@boozt-plp.ir'
            className='text-sky-500 ml-2'
          >
            info@boozt-plp.ir
          </Link>
        </div>
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
