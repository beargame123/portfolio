import type React from "react"

interface SectionTitleProps {
  title: string
  number?: string
  icon?: React.ElementType
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, number }) => {
  return (
    <div className="mb-8">
      {number && (
        <span className="mb-1.5 block font-mono text-[11px] font-normal uppercase tracking-[0.22em] text-amber-700 dark:text-amber-400/90">
          {number}
        </span>
      )}
      <h2 className="text-lg font-bold tracking-tight text-slate-900 dark:text-slate-100">{title}</h2>
    </div>
  )
}

export default SectionTitle
