"use client"

import { useState } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function EnquiryFormInner() {
  const searchParams = useSearchParams()
  const roomFromQuery = searchParams.get("room") ?? ""

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    preferredDate: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")
    setErrorMessage("")

    const subject = roomFromQuery
      ? `Room enquiry: ${roomFromQuery}`
      : "General enquiry"
    const messageBody = [
      formData.message,
      formData.preferredDate ? `Preferred date: ${formData.preferredDate}` : "",
      roomFromQuery ? `Room context: ${roomFromQuery}` : "",
    ]
      .filter(Boolean)
      .join("\n\n")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject,
          message: messageBody,
        }),
      })
      const data = await response.json()
      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", message: "", preferredDate: "" })
      } else {
        setSubmitStatus("error")
        setErrorMessage(data.details || data.error || "Unknown error")
      }
    } catch {
      setSubmitStatus("error")
      setErrorMessage("Network error — please try again")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-lg mx-auto">
        <h1 className="text-2xl font-bold text-white mb-2">Enquiry</h1>
        <p className="text-gray-400 text-sm mb-8">
          Send a message and we will get back to you. Online booking is available after this step.
        </p>

        <Card className="bg-[#111] border-[#222]">
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              {roomFromQuery ? (
                <p className="text-gray-500 text-sm">Regarding: {roomFromQuery}</p>
              ) : null}
              <div>
                <Label htmlFor="name" className="text-gray-300">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="mt-1 bg-[#0a0a0a] border-[#333]"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-gray-300">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="mt-1 bg-[#0a0a0a] border-[#333]"
                />
              </div>
              <div>
                <Label htmlFor="preferredDate" className="text-gray-300">
                  Preferred date
                </Label>
                <Input
                  id="preferredDate"
                  name="preferredDate"
                  type="date"
                  value={formData.preferredDate}
                  onChange={handleInputChange}
                  className="mt-1 bg-[#0a0a0a] border-[#333]"
                />
              </div>
              <div>
                <Label htmlFor="message" className="text-gray-300">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="mt-1 bg-[#0a0a0a] border-[#333]"
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600"
              >
                {isSubmitting ? "Sending…" : "Send enquiry"}
              </Button>
            </form>
            {submitStatus === "success" ? (
              <p className="mt-4 text-green-400 text-sm">Thanks — we have received your message.</p>
            ) : null}
            {submitStatus === "error" ? (
              <p className="mt-4 text-red-400 text-sm">{errorMessage}</p>
            ) : null}
          </CardContent>
        </Card>

        <p className="mt-8 text-center text-sm text-gray-500">
          <Link href="/booking" className="text-gray-500 underline underline-offset-2 hover:text-gray-400">
            Continue to booking
          </Link>
        </p>
      </div>
    </div>
  )
}
