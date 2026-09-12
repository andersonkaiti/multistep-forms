import { ErrorMessage } from '@hookform/error-message'
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

export const addressStepSchema = z.object({
  state: z.string().min(1, 'Informe o seu Estado'),
  city: z.string().min(1, 'Informe a sua cidade'),
  street: z.string().min(1, 'Informe a sua rua'),
})

export function AddressStep() {
  const form = useFormContext<StepsSchema>()

  const { errors, isSubmitting } = useFormState({ control: form.control })

  return (
    <div className="w-full">
      <StepHeader title="Endereço" description="De onde você é?" />

      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="state">Estado</FieldLabel>

          <Input id="state" {...form.register('addressStep.state')} />

          <ErrorMessage
            errors={errors}
            name="addressStep.state"
            render={({ message }) => (
              <Alert variant="destructive">
                <AlertCircleIcon />
                <AlertDescription>{message}</AlertDescription>
              </Alert>
            )}
          />
        </Field>

        <Field>
          <FieldLabel htmlFor="city">Cidade</FieldLabel>

          <Input id="city" {...form.register('addressStep.city')} />

          <ErrorMessage
            errors={errors}
            name="addressStep.city"
            render={({ message }) => (
              <Alert variant="destructive">
                <AlertCircleIcon />
                <AlertDescription>{message}</AlertDescription>
              </Alert>
            )}
          />
        </Field>

        <Field>
          <FieldLabel htmlFor="street">Endereço</FieldLabel>

          <Input id="street" {...form.register('addressStep.street')} />

          <ErrorMessage
            errors={errors}
            name="addressStep.street"
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

        <StepperNextButton type="submit" isLoading={isSubmitting} />
      </StepperFooter>
    </div>
  )
}
