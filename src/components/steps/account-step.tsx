import { Field, FieldGroup, FieldLabel } from '../ui/field'
import { Input } from '../ui/input'
import {
  StepperBackButton,
  StepperFooter,
  StepperNextButton,
} from '../ui/stepper'
import { StepHeader } from './step-header'

export function AccountStep() {
  return (
    <div className="w-full">
      <StepHeader
        title="Conta"
        description="Seus dados de acesso à plataforma"
      />

      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="email">E-mail</FieldLabel>
          <Input id="email" />
        </Field>

        <Field>
          <FieldLabel htmlFor="password">Senha</FieldLabel>
          <Input id="password" type="password" />
        </Field>
      </FieldGroup>

      <StepperFooter>
        <StepperBackButton />

        <StepperNextButton />
      </StepperFooter>
    </div>
  )
}
