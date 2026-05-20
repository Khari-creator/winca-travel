import type { SubmissionStatus } from './useInquirySubmission'

export default function InquiryFeedback({
  status,
  message,
  className = '',
}: {
  status: SubmissionStatus
  message: string
  className?: string
}) {
  if (status === 'idle' || !message) {
    return null
  }

  const toneClassName =
    status === 'success'
      ? 'border-green-200 bg-green-50 text-green-800'
      : status === 'error'
        ? 'border-red-200 bg-red-50 text-red-700'
        : 'border-gray-200 bg-gray-50 text-gray-700'

  const role = status === 'error' ? 'alert' : 'status'

  return (
    <p role={role} className={`rounded-lg border px-4 py-3 text-sm ${toneClassName} ${className}`.trim()}>
      {message}
    </p>
  )
}
