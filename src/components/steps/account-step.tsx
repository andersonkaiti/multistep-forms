import { StepperBackButton, StepperNextButton } from '../ui/stepper'

export function AccountStep() {
  return (
    <div className="w-full">
      <h1>AccountStep</h1>

      <div className="flex w-full items-center justify-between">
        <StepperBackButton />

        <StepperNextButton />
      </div>
    </div>
  )
}
