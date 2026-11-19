import { nav, profile } from '../data/content.js'

export default function Footer() {
  return (
    <footer className="bg-charcoal-deep text-white/70">
      <div className="frame flex flex-col gap-8 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-xl text-white">{profile.name}</p>
          <p className="mt-1 text-sm">
            {profile.role} · {profile.location}
          </p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {nav.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`} className="transition-colors hover:text-peach">
                  {n.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#top" className="font-semibold text-white transition-colors hover:text-peach">
                Back to top ↑
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="frame">
        <p className="border-t border-white/10 py-5 text-xs text-white/60">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  )
}
