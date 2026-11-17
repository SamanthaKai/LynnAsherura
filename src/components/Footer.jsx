import { ArrowUp } from 'lucide-react'
import { nav, profile } from '../data/content.js'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink text-white/60">
      <div className="frame flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-bold text-white">{profile.name}</p>
          <p className="mt-1 text-sm">
            {profile.role} · {profile.location}
          </p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {nav.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`} className="transition-colors hover:text-white">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href="#top"
          className="inline-flex items-center gap-2 self-start rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-peach-300 hover:text-peach-300 sm:self-auto"
        >
          Back to top <ArrowUp className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
      <div className="frame">
        <p className="border-t border-white/10 py-5 text-xs">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
