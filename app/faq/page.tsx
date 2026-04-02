import { faqItems } from "./faq-data"

export default function FAQPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4">
      <div className="max-w-3xl mx-auto text-gray-400 text-sm leading-relaxed space-y-8">
        {faqItems.map((faq) => (
          <p key={faq.id}>
            {faq.question} {faq.answer}
          </p>
        ))}
      </div>
    </div>
  )
}
