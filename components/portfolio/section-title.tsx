import type React from "react"

interface SectionTitleProps {
  title: string
  icon?: React.ElementType
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, icon: Icon }) => {
  return (
    <h2 className="text-3xl font-bold mb-8 flex items-center">
      {Icon && <Icon className="mr-3 h-8 w-8 text-yellow-500" />}
      {title}
    </h2>
  )
}

export default SectionTitle
