const Shelf = () => {
  return (
    <div
      className="flex justify-around w-full h-3 md:h-4 bg-[linear-gradient(#00bc7d_0%_70%,#f8fdff_70%_100%)] rounded-sm z-10
          before:content-[''] before:box-border before:w-[12px] before:h-[20px] before:bg-[linear-gradient(#00bc7d_0%_70%,#f8fdff_70%_100%)] before:mt-3 md:before:mt-4 before:rounded-b-xs
          after:content-[''] after:box-border after:w-[12px] after:h-[20px] after:bg-[linear-gradient(#00bc7d_0%_70%,#f8fdff_70%_100%)] after:mt-3 md:after:mt-4 after:rounded-b-xs
          "
    ></div>
  );
};

export default Shelf;
