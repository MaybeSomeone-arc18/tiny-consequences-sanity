import type {Metadata} from 'next'
import './style.css'
export const metadata: Metadata = {title: 'The Department of Tiny Consequences', description: 'A fictional city where little acts travel far.'}
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="en"><body>{children}</body></html>}
