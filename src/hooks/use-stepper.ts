import { StepperContext } from '@components/ui/stepper'
import { use } from 'react'

export function useStepper() {
  return use(StepperContext)
}
