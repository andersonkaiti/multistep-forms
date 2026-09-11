import { StepperBackButton, StepperNextButton } from '../ui/stepper'

export function AddressStep() {
  return (
    <div>
      <h1>AddressStep</h1>

      <div className="flex w-full items-center justify-between">
        <StepperBackButton />

        <StepperNextButton />
      </div>
    </div>
  )
}
