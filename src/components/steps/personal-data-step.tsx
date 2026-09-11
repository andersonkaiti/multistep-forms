import { Field, FieldGroup, FieldLabel } from '../ui/field'
import { Input } from '../ui/input'
import {
  StepperBackButton,
  StepperFooter,
  StepperNextButton,
} from '../ui/stepper'
import { StepHeader } from './step-header'

export function PersonalDataStep() {
  return (
    <div className="w-full">
      <StepHeader
        title="Dados pessoais"
        description="Conte-nos mais sobre você"
      />

      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="first_name">Primeiro nome</FieldLabel>
          <Input id="first_name" />
        </Field>

        <Field>
          <FieldLabel htmlFor="last_name">Sobrenome</FieldLabel>
          <Input id="last_name" />
        </Field>

        <Field>
          <FieldLabel htmlFor="document">CPF</FieldLabel>
          <Input id="document" />
        </Field>
      </FieldGroup>

      <StepperFooter>
        <StepperBackButton />

        <StepperNextButton />
      </StepperFooter>
    </div>
  )
}
