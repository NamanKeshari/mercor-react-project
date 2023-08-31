function Navbar() {
  const navs = [
    "Sign In",
    "Legal",
    "Licenses",
    "Security",
    "Careers",
    "Press",
    "Support",
    "Status",
    "Codeblog",
  ];

  return (
    <nav className="m-0 absolute top-[calc(50%_-_299.5px)] left-[calc(50%_-_383px)] overflow-hidden flex flex-row items-center justify-start gap-[20px] text-left text-xs text-light-white font-hero-text">
      {navs.map((text) => (
        <Nav text={text} />
      ))}
    </nav>
  );
}

export default Navbar;

const Nav = ({ text }: { text: string }) => {
  return (
    <button className="relative tracking-[0.5px] leading-[18px] bg-transparent text-white uppercase">
      {text}
    </button>
  );
};
