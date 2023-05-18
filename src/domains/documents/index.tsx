import classNames from 'classnames';
import { animator } from 'shared/utils/animator';
import { titleGenerator } from 'shared/utils/title-generator';

export function DocumentsPage() {
  titleGenerator('Documents');
  return (
    <main>
      <h1
        className={classNames(
          'font-bold text-center text-3xl mb-5',
          animator({ name: 'fadeInUp' })
        )}
      >
        Documents
      </h1>

      <article className='leading-7 text-justify flex flex-col gap-y-3 px-10 pb-10'>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae labore
          dolor reprehenderit cupiditate placeat earum debitis sapiente similique quasi
          repellendus qui explicabo, error, distinctio, quidem necessitatibus? Placeat
          dolores dolorem omnis.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae labore
          dolor reprehenderit cupiditate placeat earum debitis sapiente similique quasi
          repellendus qui explicabo, error, distinctio, quidem necessitatibus? Placeat
          dolores dolorem omnis. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Repudiandae labore dolor reprehenderit cupiditate placeat earum debitis sapiente
          similique quasi repellendus qui explicabo, error, distinctio, quidem
          necessitatibus? Placeat dolores dolorem omnis. Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Repudiandae labore dolor reprehenderit cupiditate
          placeat earum debitis sapiente similique quasi repellendus qui explicabo, error,
          distinctio, quidem necessitatibus? Placeat dolores dolorem omnis. Lorem ipsum,
          dolor sit amet consectetur adipisicing elit. Repudiandae labore dolor
          reprehenderit cupiditate placeat earum debitis sapiente similique quasi
          repellendus qui explicabo, error, distinctio, quidem necessitatibus? Placeat
          dolores dolorem omnis.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae labore
          dolor reprehenderit cupiditate placeat earum debitis sapiente similique quasi
          repellendus qui explicabo, error, distinctio, quidem necessitatibus? Placeat
          dolores dolorem omnis.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae labore
          dolor reprehenderit cupiditate placeat earum debitis sapiente similique quasi
          repellendus qui explicabo, error, distinctio, quidem necessitatibus? Placeat
          dolores dolorem omnis. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Repudiandae labore dolor reprehenderit cupiditate placeat earum debitis sapiente
          similique quasi repellendus qui explicabo, error, distinctio, quidem
          necessitatibus? Placeat dolores dolorem omnis. Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Repudiandae labore dolor reprehenderit cupiditate
          placeat earum debitis sapiente similique quasi repellendus qui explicabo, error,
          distinctio, quidem necessitatibus? Placeat dolores dolorem omnis. Lorem ipsum,
          dolor sit amet consectetur adipisicing elit. Repudiandae labore dolor
          reprehenderit cupiditate placeat earum debitis sapiente similique quasi
          repellendus qui explicabo, error, distinctio, quidem necessitatibus? Placeat
          dolores dolorem omnis. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Repudiandae labore dolor reprehenderit cupiditate placeat earum debitis sapiente
          similique quasi repellendus qui explicabo, error, distinctio, quidem
          necessitatibus? Placeat dolores dolorem omnis.
        </p>
      </article>
    </main>
  );
}
