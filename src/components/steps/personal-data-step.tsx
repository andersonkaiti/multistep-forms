import { ErrorMessage } from '@hookform/error-message'
import { useStepper } from '@hooks/use-stepper'
import { AlertCircleIcon } from 'lucide-react'
import { Controller, useFormContext, useFormState } from 'react-hook-form'
import { PatternFormat } from 'react-number-format'
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

export const personalDataStepSchema = z.object({
  firstName: z.string().min(1, 'Informe o seu primeiro nome'),
  lastName: z.string().min(1, 'Informe o seu último nome'),
  document: z.string().min(11, 'Informe o seu CPF'),
})

export function PersonalDataStep() {
  const form = useFormContext<StepsSchema>()

  const { errors } = useFormState({ control: form.control })

  const { nextStep } = useStepper()

  async function handleNextStep() {
    const isValid = await form.trigger('personalData')

    if (isValid) {
      nextStep()
    }
  }

  return (
    <div className="w-full">
      <StepHeader
        title="Dados pessoais"
        description="Conte-nos mais sobre você"
      />

      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="firstName">Primeiro nome</FieldLabel>

          <Input id="firstName" {...form.register('personalData.firstName')} />

          <ErrorMessage
            errors={errors}
            name="personalData.firstName"
            render={({ message }) => (
              <Alert variant="destructive">
                <AlertCircleIcon />
                <AlertDescription>{message}</AlertDescription>
              </Alert>
            )}
          />
        </Field>

        <Field>
          <FieldLabel htmlFor="lastName">Sobrenome</FieldLabel>

          <Input id="lastName" {...form.register('personalData.lastName')} />

          <ErrorMessage
            errors={errors}
            name="personalData.lastName"
            render={({ message }) => (
              <Alert variant="destructive">
                <AlertCircleIcon />
                <AlertDescription>{message}</AlertDescription>
              </Alert>
            )}
          />
        </Field>

        <Field>
          <FieldLabel htmlFor="document">CPF</FieldLabel>

          <Controller
            control={form.control}
            name="personalData.document"
            render={({ field: { value, ref, onChange } }) => (
              <PatternFormat
                id="document"
                format="###.###.###-##"
                mask="_"
                value={value}
                getInputRef={ref}
                onValueChange={(values) => onChange(values.value)}
                customInput={Input}
              />
            )}
          />

          <ErrorMessage
            errors={errors}
            name="personalData.document"
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
