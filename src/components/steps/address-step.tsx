import { ErrorMessage } from '@hookform/error-message'
import { zodResolver } from '@hookform/resolvers/zod'
import { AlertCircleIcon } from 'lucide-react'
import { useForm } from 'react-hook-form'
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

const addressStepSchema = z.object({
  state: z.string().min(1, 'Informe o seu Estado'),
  city: z.string().min(1, 'Informe a sua cidade'),
  street: z.string().min(1, 'Informe a sua rua'),
})

export function AddressStep() {
  const form = useForm({
    resolver: zodResolver(addressStepSchema),
  })

  const handleSubmit = form.handleSubmit(async (formData) => {
    console.log(formData)

    await new Promise((resolve) => setTimeout(resolve, 2000))
  })

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <StepHeader title="Endereço" description="De onde você é?" />

      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="state">Estado</FieldLabel>

          <Input id="state" {...form.register('state')} />

          <ErrorMessage
            errors={form.formState.errors}
            name="state"
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

          <Input id="city" {...form.register('city')} />

          <ErrorMessage
            errors={form.formState.errors}
            name="city"
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

          <Input id="street" {...form.register('street')} />

          <ErrorMessage
            errors={form.formState.errors}
            name="street"
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
