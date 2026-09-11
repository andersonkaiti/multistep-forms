import { ErrorMessage } from '@hookform/error-message'
import { zodResolver } from '@hookform/resolvers/zod'
import { useStepper } from '@hooks/use-stepper'
import { AlertCircleIcon } from 'lucide-react'
import { Controller, useForm } from 'react-hook-form'
import { PatternFormat } from 'react-number-format'
import { z } from 'zod'
import { Alert, AlertDescription } from '../ui/alert'
import { Field, FieldGroup, FieldLabel } from '../ui/field'
import { Input } from '../ui/input'
import {
  StepperBackButton,
  StepperFooter,
  StepperNextButton,
} from '../ui/stepper'
import { StepHeader } from './step-header'

const personalDataStepSchema = z.object({
  firstName: z.string().min(1, 'Informe o seu primeiro nome'),
  lastName: z.string().min(1, 'Informe o seu último nome'),
  document: z.string().min(1, 'Informe o seu CPF'),
})

export function PersonalDataStep() {
  const { nextStep } = useStepper()

  const form = useForm({
    resolver: zodResolver(personalDataStepSchema),
    defaultValues: {
      document: '',
    },
  })

  const handleSubmit = form.handleSubmit(async (formData) => {
    console.log(formData)

    await new Promise((resolve) => setTimeout(resolve, 2000))

    nextStep()
  })

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <StepHeader
        title="Dados pessoais"
        description="Conte-nos mais sobre você"
      />

      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="firstName">Primeiro nome</FieldLabel>

          <Input id="firstName" {...form.register('firstName')} />

          <ErrorMessage
            errors={form.formState.errors}
            name="firstName"
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

          <Input id="lastName" {...form.register('lastName')} />

          <ErrorMessage
            errors={form.formState.errors}
            name="lastName"
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
            name="document"
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
            errors={form.formState.errors}
            name="document"
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
        <StepperBackButton disabled={form.formState.isSubmitting} />

        <StepperNextButton
          type="submit"
          onClick={handleSubmit}
          disabled={form.formState.isSubmitting}
        />
      </StepperFooter>
    </form>
  )
}
