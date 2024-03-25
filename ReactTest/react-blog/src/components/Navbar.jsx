const Navbar = () => {
  return (
    <div className="w-full z-10 bg-white rounded flex top-0 h-16 items-center justify-between fixed">
      <div className="w-1/3 text-black font-thin text-3xl pl-5">
        Victorious Family
      </div>
      <div className="w-2/3 flex flex-column justify-end gap-5 pr-4">
        <div>MISSION</div>
        <div>BLOG</div>
        <div>PODCAST</div>
        <div>WORKSHOPS</div>
        <div>RESOURCES</div>
        <div>HOME KIT</div>
        <div>DONATE</div>
      </div>
    </div>
  );
};

export default Navbar;
