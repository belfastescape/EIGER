import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Enquiry | Eiger Escape Rooms",
  description: "Send an enquiry about our escape rooms.",
}

export default function EnquiryLayout({ children }: { children: React.ReactNode }) {
  return children
}
