import { StepperBackButton, StepperNextButton } from '../ui/stepper'

export function PersonalDataStep() {
  return (
    <div>
      <h1>PersonalDataStep</h1>

      <div className="flex items-center justify-between pt-2">
        <StepperBackButton />

        <StepperNextButton />
      </div>
    </div>
  )
}
