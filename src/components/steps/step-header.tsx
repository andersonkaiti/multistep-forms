interface IStepHeaderProps {
  title: string
  description: string
}

export function StepHeader({ title, description }: IStepHeaderProps) {
  return (
    <header className="mb-6 text-start">
      <h1 className="font-semibold text-2xl tracking-tight">{title}</h1>
      <span className="text-muted-foreground">{description}</span>
    </header>
  )
}
