import useMediaQuery from '@/app/utils/hooks/use-mediaQuery';
import { useState, useEffect, use } from 'react';

const GridCell = ({ active, index }: { active: any; index: number }) => {
  const color = [
    'bg-zinc-950',
    'bg-zinc-900',
    'bg-zinc-800',
    'bg-zinc-700',
    'bg-transparent',
    'bg-zinc-800',
  ];

  const className = ` z-0 backdrop-brightness-50 border border-black  transition-all duration-1000 ${
    active ? `${color[index % color.length]} ` : 'bg-black'
  }`;
  return <div className={className}></div>;
};

const Grid = () => {
  const rows = 6;
  const columns = 10;
  const totalCells = rows * columns;

  const row = 6;
  const column = 10;
  const index = (row - 1) * columns + (column - 1);
  const [activeCells, setActiveCells] = useState([index]);
  const [stop, setStop] = useState(false);
  const [startPosition, setStartPosition] = useState(index);
  const [isInitialized, setIsInitialized] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsInitialized(true);  
      setActiveCells([startPosition]);
    }, 2000);

    return () => clearTimeout(timeout);
  });


  useEffect(() => {
    if (stop || !isInitialized) {
      
      return;
    }
    const interval = setInterval(() => {
      setActiveCells((prev) => {
        const nextActiveCells = [...prev];

        for (let i of prev) {
          const currentRow = Math.floor(i / 10);

          if (i + 10 <= 59) {
            nextActiveCells.push(i + 10);
          }

          if (i - 10 >= 0) {
            nextActiveCells.push(i - 10);
          }

          if (i + 1 <= 59 && Math.floor((i + 1) / 10) === currentRow) {
            nextActiveCells.push(i + 1);
          }

          if (i - 1 >= 0 && Math.floor((i - 1) / 10) === currentRow) {
            nextActiveCells.push(i - 1);
          }
        }

        const uniqueActiveCells = Array.from(new Set(nextActiveCells));


        if (uniqueActiveCells.length >= totalCells) {
          setStop(true);
          const newStartPosition = Math.floor(Math.random() * totalCells);
          setTimeout(() => {
            setStartPosition(newStartPosition);
          }, 1000);
        }

        return uniqueActiveCells;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [activeCells, stop,isInitialized]);
  useEffect(() => {
    setActiveCells([startPosition]);
    setStop(false);
  }, [startPosition]);
  const isNotMobile = useMediaQuery('(min-width: 800px)');
  console.log(isNotMobile);
  return (
    <>
      <div
        className={`absolute gap-[1px] w-full h-full opacity-50 grid-cols-10 grid ${
          isNotMobile ? ' grid-cols-10' : ' grid-cols-2'
        } grid-rows-6 `}
      >
        {Array(isNotMobile ? 60 : 12)
          .fill(0)
          .map((_, i) => (
            <GridCell key={i} active={activeCells.includes(i)} index={i} />
          ))}
        <div className='absolute  w-full h-full z-[-1] animate-background-animation bg-[length:400%] bg-gradient-to-r from-indigo-400 from-10% via-sky-500 via-30% to-emerald-400 to-90%'></div>
      </div>
    </>
  );
};

export default Grid;
