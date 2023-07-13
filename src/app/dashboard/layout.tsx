import { ReactNode } from "react";
import Link from 'next/link'

export default function DashboardLayout({children}: { children: ReactNode }) {
  
  return (
    <section>
      <nav>
        <ul>
          <li>
            <Link href="/dashboard/settings">
              Settings
            </Link>
          </li>
        </ul>
      </nav>
      {children}
    </section>
  )
}
