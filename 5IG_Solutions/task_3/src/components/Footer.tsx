export default function Footer() {
  return (
    <footer className="py-4 text-sm font-[500] bg-[#E3350D] text-white">
      <div className="flex justify-between lg:justify-center items-center flex-col lg:flex-row text-center lg:gap-5">
        <p className="lg:flex justify-center items-center gap-2 mb-2 lg:mb-0">
          2025 Pokémon Cards. Technical test for:
          <span className="block">José Rafael Sissa Mendoza</span>
        </p>
        <div className="flex justify-center items-center gap-2">
          <a
            href="https://www.linkedin.com/in/josesissamendoza/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-[700]"
          >
            <img
              src="/icons/linkedin.svg"
              alt="Linkedin icon"
              className="w-5 h-5"
            />
          </a>
          <a
            href="https://github.com/JoseSissa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-[700]"
          >
            <img
              src="/icons/github_dark.svg"
              alt="Github icon"
              className="w-5 h-5"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
