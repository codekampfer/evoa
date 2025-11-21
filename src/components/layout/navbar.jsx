import logo from '../../assets/logo.avif';

export default function Navbar() {
  return (
    <header className="bg-[#003F91] text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img 
            src={logo} 
            alt="EVO-A Logo" 
            className="h-8 w-8 object-contain"
          />
          <span className="text-lg font-semibold tracking-wide">EVO-A</span>
        </div>

        {/* Hamburger icon */}
        <button
          type="button"
          className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/0 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white md:hidden"
          aria-label="Open menu"
        >
          <span className="block h-0.5 w-5 bg-white mb-1" />
          <span className="block h-0.5 w-5 bg-white mb-1" />
          <span className="block h-0.5 w-5 bg-white" />
        </button>

        {/* Desktop nav placeholder (you can add links later) */}
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          <button className="rounded-full border border-white/60 px-4 py-1.5 text-xs tracking-wide hover:bg-white/10">
            For Startups
          </button>
          <button className="rounded-full border border-white/60 px-4 py-1.5 text-xs tracking-wide hover:bg-white/10">
            For Investors
          </button>
          <button className="rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-[#003F91]">
            Sign in
          </button>
        </nav>
      </div>
    </header>
  );
}
