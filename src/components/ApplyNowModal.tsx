import { useEffect, useState } from 'react'
import {
  X,
  User,
  Mail,
  Phone,
  GraduationCap,
  Wallet,
  Loader2,
  CheckCircle2,
} from 'lucide-react'

interface ApplyNowModalProps {
  isOpen: boolean
  onClose: () => void
}

const initialFormData = {
  fullName: '',
  phone: '',
  email: '',
  studyCountry: '',
  course: '',
  loanAmount: '',
}

export default function ApplyNowModal({
  isOpen,
  onClose,
}: ApplyNowModalProps) {
  const [formData, setFormData] = useState(initialFormData)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  // Strong background scroll lock
  useEffect(() => {
    if (!isOpen) return

    const scrollY = window.scrollY

    const previousHtmlOverflow = document.documentElement.style.overflow
    const previousBodyOverflow = document.body.style.overflow
    const previousBodyPosition = document.body.style.position
    const previousBodyTop = document.body.style.top
    const previousBodyWidth = document.body.style.width

    document.documentElement.style.overflow = 'hidden'
    document.body.style.overflow = 'hidden'
    document.body.style.position = 'fixed'
    document.body.style.top = `-${scrollY}px`
    document.body.style.width = '100%'

    return () => {
      document.documentElement.style.overflow = previousHtmlOverflow
      document.body.style.overflow = previousBodyOverflow
      document.body.style.position = previousBodyPosition
      document.body.style.top = previousBodyTop
      document.body.style.width = previousBodyWidth

      window.scrollTo(0, scrollY)
    }
  }, [isOpen])

  if (!isOpen) return null

 const handleChange = (
  e: React.ChangeEvent<HTMLInputElement>
) => {
  setFormData((previousData) => ({
    ...previousData,
    [e.target.name]: e.target.value,
  }))

  // Remove error while user edits
  if (error) {
    setError("")
  }
}

  const handleClose = () => {
    setFormData(initialFormData)
    setLoading(false)
    setSuccess(false)
    setError('')
    onClose()
  }

  const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault()

  setError("")

  // Full Name
  if (!formData.fullName.trim()) {
    setError("Please enter your full name.")
    return
  }

  // Email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!emailRegex.test(formData.email)) {
    setError("Please enter a valid email address.")
    return
  }

  // Phone Number (10 digits)
  const phoneRegex = /^[0-9]{10}$/

  if (!phoneRegex.test(formData.phone)) {
    setError("Please enter a valid 10-digit phone number.")
    return
  }

  // Country
  if (!formData.studyCountry.trim()) {
    setError("Please enter your preferred study country.")
    return
  }

  setLoading(true)

  try {
    const response = await fetch("/api/apply", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(formData),
    })

    let data: any = {}

    try {
      data = await response.json()
    } catch {
      data = {}
    }

    if (!response.ok || !data.success) {
      throw new Error(data.message || "Submission failed.")
    }

    setSuccess(true)
    setFormData(initialFormData)

  } catch (err) {

    setError(
      err instanceof Error
        ? err.message
        : "Submission failed."
    )

  } finally {

    setLoading(false)

  }
}
  if (success) {
    return (<div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50"><div className="bg-white dark:bg-zinc-950 rounded-3xl p-10 max-w-md w-full text-center"><CheckCircle2 className="mx-auto text-emerald-500" size={72}/><h2 className="text-3xl font-bold mt-4">Application Submitted!</h2>
   <p className="mt-5 text-slate-600 dark:text-slate-400 leading-7">

Thank you for choosing Harbor Finance.

<br /><br />

Your application has been submitted successfully.

<br /><br />

One of our education loan specialists will review your details and contact you shortly.

</p>
    <button onClick={handleClose} className="mt-8 w-full rounded-xl bg-gradient-to-r from-[#2563eb] to-[#6d4aff] py-3 text-white">Return Home</button></div></div>)
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6 overflow-hidden overscroll-none">

      {/* Dark background */}
      <button
        type="button"
        aria-label="Close application form"
        onClick={handleClose}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto overscroll-contain rounded-3xl bg-white dark:bg-zinc-950 shadow-2xl border border-slate-200 dark:border-zinc-800">

        {/* Header */}
        <div className="sticky top-0 z-20 flex items-start justify-between gap-4 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md px-6 sm:px-8 pt-7 pb-5 border-b border-slate-100 dark:border-zinc-800">

          <div>
            <p className="text-[#4338CA] text-xs font-semibold tracking-wider uppercase mb-2">
              Start your journey
            </p>

            <h2 className="text-2xl sm:text-3xl font-semibold text-black dark:text-white">
              Apply for an Education Loan
            </h2>

            <p className="text-sm text-black/50 dark:text-white/50 mt-2">
              Share your details and our loan expert will contact you.
            </p>
          </div>

          <button
            type="button"
            onClick={handleClose}
            aria-label="Close application form"
            className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-slate-300 hover:scale-105 transition-transform"
          >
            <X size={20} />
          </button>

        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          autoComplete="off"
          className="p-6 sm:p-8"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

            {/* Full Name */}
            <label className="block">
              <span className="text-sm font-medium text-black dark:text-white">
                Full Name *
              </span>

              <div className="relative mt-2">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-black/35 dark:text-white/35" />

                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  autoComplete="off"
                  placeholder="Your full name"
                  className="w-full h-12 pl-11 pr-4 rounded-xl border border-slate-200 dark:border-zinc-700 bg-slate-50 dark:bg-zinc-900 text-black dark:text-white outline-none focus:border-[#4338CA]"
                />
              </div>
            </label>

            {/* Phone Number */}
            <label className="block">
              <span className="text-sm font-medium text-black dark:text-white">
                Phone Number *
              </span>

              <div className="relative mt-2">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-black/35 dark:text-white/35" />

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  autoComplete="new-password"
                  inputMode="tel"
                  placeholder="+91 98765 43210"
                  className="w-full h-12 pl-11 pr-4 rounded-xl border border-slate-200 dark:border-zinc-700 bg-slate-50 dark:bg-zinc-900 text-black dark:text-white outline-none focus:border-[#4338CA]"
                />
              </div>
            </label>

            {/* Email Address */}
            <label className="block">
              <span className="text-sm font-medium text-black dark:text-white">
                Email Address *
              </span>

              <div className="relative mt-2">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-black/35 dark:text-white/35" />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  autoComplete="off"
                  placeholder="you@example.com"
                  className="w-full h-12 pl-11 pr-4 rounded-xl border border-slate-200 dark:border-zinc-700 bg-slate-50 dark:bg-zinc-900 text-black dark:text-white outline-none focus:border-[#4338CA]"
                />
              </div>
            </label>

            {/* Preferred Study Country */}
            <label className="block">
              <span className="text-sm font-medium text-black dark:text-white">
                Preferred Study Country *
              </span>

              <input
                type="text"
                name="studyCountry"
                value={formData.studyCountry}
                onChange={handleChange}
                required
                autoComplete="off"
                placeholder="e.g. USA, Canada, Germany"
                className="w-full h-12 px-4 mt-2 rounded-xl border border-slate-200 dark:border-zinc-700 bg-slate-50 dark:bg-zinc-900 text-black dark:text-white outline-none focus:border-[#4338CA]"
              />
            </label>

            {/* Course / Program */}
            <label className="block">
              <span className="text-sm font-medium text-black dark:text-white">
                Course / Program
              </span>

              <div className="relative mt-2">
                <GraduationCap className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-black/35 dark:text-white/35" />

                <input
                  type="text"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  autoComplete="off"
                  placeholder="e.g. MS Data Science"
                  className="w-full h-12 pl-11 pr-4 rounded-xl border border-slate-200 dark:border-zinc-700 bg-slate-50 dark:bg-zinc-900 text-black dark:text-white outline-none focus:border-[#4338CA]"
                />
              </div>
            </label>

            {/* Required Loan Amount */}
            <label className="block">
              <span className="text-sm font-medium text-black dark:text-white">
                Required Loan Amount
              </span>

              <div className="relative mt-2">
                <Wallet className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-black/35 dark:text-white/35" />

                <input
                  type="text"
                  name="loanAmount"
                  value={formData.loanAmount}
                  onChange={handleChange}
                  autoComplete="off"
                  placeholder="e.g. ₹50,00,000"
                  className="w-full h-12 pl-11 pr-4 rounded-xl border border-slate-200 dark:border-zinc-700 bg-slate-50 dark:bg-zinc-900 text-black dark:text-white outline-none focus:border-[#4338CA]"
                />
              </div>
            </label>

          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
           className="w-full mt-7 py-3.5 rounded-xl bg-gradient-to-r from-[#2563eb] to-[#6d4aff] text-white font-semibold shadow-md hover:shadow-lg transition-all disabled:opacity-60 flex items-center justify-center gap-2"
          >
            {loading ? (
  <>
    <Loader2 className="animate-spin mr-2 inline-block" size={18} />
    Submitting...
  </>
) : (
  'Submit Application →'
)}
          </button>

          {error && <div className="mt-4 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-600">{error}</div>}

          <p className="text-center text-xs text-black/40 dark:text-white/40 mt-4">
            Your information is secure and will only be used to process your application.
          </p>

        </form>
      </div>
    </div>
  )
}