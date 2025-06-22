import clsx from 'clsx';

interface DividerProps {
  className?: string;
}

const Divider = ({ className }: DividerProps) => {
  return (
    <div
      className={clsx(
        'w-60% border-t-[1px] border-slate-200 mx-[25%]',
        className
      )}
    ></div>
  );
};

export default Divider;
