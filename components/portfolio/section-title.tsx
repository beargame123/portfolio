import type React from "react"

interface SectionTitleProps {
  title: string
  number?: string
  icon?: React.ElementType
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, number }) => {
  return (
    <h2 className="mb-8 flex items-baseline gap-3 text-lg font-bold tracking-wide text-slate-900 dark:text-slate-100">
      {number && (
        <span className="font-mono text-sm font-normal text-amber-600 dark:text-amber-400">{number}.</span>
      )}
      {title}
    </h2>
  )
}

export default SectionTitle
