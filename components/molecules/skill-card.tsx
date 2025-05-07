import { SkillMeter } from "@/components/atoms/skill-meter";

interface SkillCardProps {
  name: string;
  icon: React.ComponentType<any>;
  description: string;

  level: number;
}

export function SkillCard({
  name,
  icon: Icon,
  description,
  level,
}: SkillCardProps) {
  return (
    <div className="border rounded-md p-4 shadow-sm">
      <Icon className="h-5 w-5 text-primary" />
      <h3 className="text-lg font-semibold">{name}</h3>
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">{description}</p>
        <SkillMeter value={level} size="sm" className="ml-4 flex-shrink-0" />
      </div>
    </div>
  );
}
