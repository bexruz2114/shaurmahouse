import logo1 from "../assets/logo1.png";

export default function Logo({ className = 'h-10 w-10', withWordmark = true, light = false }) {
  return (
    <div className="flex items-center gap-2.5">
      <div
        className={`flex items-center justify-center rounded-2xl bg-gradient-to-br from-softyellow-300 to-softyellow-400 shadow-glow overflow-hidden p-1.5 ${className}`}
      >
        <img src={logo1} alt="Logo" className="h-full w-full object-contain" style={{ borderRadius: '10px' }} />
      </div>
      {withWordmark && (
        <span
          className={`font-display text-xl font-bold tracking-tight ${
            light ? 'text-white' : 'text-gradient-gold'
          }`}
        >
          SHAURMA<span className={light ? 'text-softyellow-300' : 'text-charcoal'}>HOUSE</span>
        </span>
      )}
    </div>
  );
}