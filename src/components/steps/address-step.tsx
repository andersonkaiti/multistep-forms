import { Field, FieldGroup, FieldLabel } from '../ui/field'
import { Input } from '../ui/input'
import {
  StepperBackButton,
  StepperFooter,
  StepperNextButton,
} from '../ui/stepper'
import { StepHeader } from './step-header'

export function AddressStep() {
  return (
    <div className="w-full">
      <StepHeader title="Endereço" description="De onde você é?" />

      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="state">Estado</FieldLabel>
          <Input id="state" />
        </Field>

        <Field>
          <FieldLabel htmlFor="city">Cidade</FieldLabel>
          <Input id="city" />
        </Field>

        <Field>
          <FieldLabel htmlFor="street">Endereço</FieldLabel>
          <Input id="street" />
        </Field>
      </FieldGroup>

      <StepperFooter>
        <StepperBackButton />

        <StepperNextButton />
      </StepperFooter>
    </div>
  )
}
