import { Suspense } from "react"
import { EnquiryFormInner } from "./enquiry-form"

export default function EnquiryPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen pt-24 flex items-center justify-center text-gray-500 text-sm">Loading…</div>
      }
    >
      <EnquiryFormInner />
    </Suspense>
  )
}
