import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='flex flex-col grow justify-center relative  '>
      <div className='flex  basis-1/3 flex-col justify-center items-center'>
        <h1 className='text-8xl md:text-9xl pb-12 md:pb-24 font-bold text-cyan-500 '>
          404 :(
        </h1>
        <h2 className='text-2xl p-2 md:text-4xl font-bold pb-8'>
          Sorry, the page you are looking for could not be found.
        </h2>
        <Link
          className='text-2xl font-bold text-cyan-500 border rounded-md bg-slate-900 p-2 shadow-inner border-lime-500/50'
          href='/'
        >
          {' '}
          Go back home
        </Link>
      </div>
    </div>
  );
}
