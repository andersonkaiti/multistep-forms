import { ErrorMessage } from '@hookform/error-message'
import { useStepper } from '@hooks/use-stepper'
import { AlertCircleIcon } from 'lucide-react'
import { useFormContext, useFormState } from 'react-hook-form'
import { z } from 'zod'
import type { StepsSchema } from '../../app'
import { Alert, AlertDescription } from '../ui/alert'
import { Field, FieldGroup, FieldLabel } from '../ui/field'
import { Input } from '../ui/input'
import {
  StepperBackButton,
  StepperFooter,
  StepperNextButton,
} from '../ui/stepper'
import { StepHeader } from './step-header'

export const accountStepSchema = z.object({
  email: z.email('Informe um e-mail válido'),
  password: z.string().min(1, 'Informe a senha'),
})

export function AccountStep() {
  const form = useFormContext<StepsSchema>()

  const { errors } = useFormState({ control: form.control })

  const { nextStep } = useStepper()

  async function handleNextStep() {
    const isValid = await form.trigger('accountStep')

    if (isValid) {
      nextStep()
    }
  }

  return (
    <div className="w-full">
      <StepHeader
        title="Conta"
        description="Seus dados de acesso à plataforma"
      />

      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="email">E-mail</FieldLabel>

          <Input id="email" {...form.register('accountStep.email')} />

          <ErrorMessage
            errors={errors}
            name="accountStep.email"
            render={({ message }) => (
              <Alert variant="destructive">
                <AlertCircleIcon />
                <AlertDescription>{message}</AlertDescription>
              </Alert>
            )}
          />
        </Field>

        <Field>
          <FieldLabel htmlFor="password">Senha</FieldLabel>

          <Input
            id="password"
            type="password"
            {...form.register('accountStep.password')}
          />

          <ErrorMessage
            errors={errors}
            name="accountStep.password"
            render={({ message }) => (
              <Alert variant="destructive">
                <AlertCircleIcon />
                <AlertDescription>{message}</AlertDescription>
              </Alert>
            )}
          />
        </Field>
      </FieldGroup>

      <StepperFooter>
        <StepperBackButton />

        <StepperNextButton onClick={handleNextStep} />
      </StepperFooter>
    </div>
  )
}
