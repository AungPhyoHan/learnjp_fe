const Footer = () => {
  return (
    <footer className="bg-[#FFA500] shadow-sm mt-auto font-mono">
      <div className="flex flex-col md:flex-row w-full mx-auto items-center  p-4 md:items-start justify-between">
        <span className="text-sm text-black sm:text-center">
          © 2025{" "}
          <a href="#" className="hover:underline">
            LearnJS
          </a>
          . All Rights Reserved.
        </span>
        <p className="pt-1 text-sm">Developed by AungPhyoHan</p>
      </div>
    </footer>
  );
};

export default Footer;
