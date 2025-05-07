import { SkillMeter } from "@/components/atoms/skill-meter"

interface SkillCardProps {
  title: string
  description: string
  level: number
}

export function SkillCard({ title, description, level }: SkillCardProps) {
  return (
    <div className="border rounded-md p-4 shadow-sm">
      <h3 className="text-lg font-semibold">{title}</h3>
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">{description}</p>
        <SkillMeter value={level} size="sm" className="ml-4 flex-shrink-0" />
      </div>
    </div>
  )
}
