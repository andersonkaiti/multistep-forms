import { ErrorMessage } from '@hookform/error-message'
import { zodResolver } from '@hookform/resolvers/zod'
import { useStepper } from '@hooks/use-stepper'
import { safeGetSessionStorageGetItem } from '@utils/safe-get-local-storage-value'
import { AlertCircleIcon } from 'lucide-react'
import { useEffect } from 'react'
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

const accountStepSchema = z.object({
  email: z.email('Informe um e-mail válido'),
  password: z.string().min(1, 'Informe a senha'),
})

type AccountStep = z.infer<typeof accountStepSchema>

const ACCOUNT_KEY = 'account-step'

export function AccountStep() {
  const { nextStep } = useStepper()

  const initialValue = safeGetSessionStorageGetItem<AccountStep>(ACCOUNT_KEY)

  const form = useForm({
    disabled: !!initialValue,
    resolver: zodResolver(accountStepSchema),
    defaultValues: {
      email: initialValue?.email ?? '',
      password: initialValue?.password ?? '',
    },
  })

  const handleSubmit = form.handleSubmit(async (formData) => {
    if (!initialValue) {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      sessionStorage.setItem(
        ACCOUNT_KEY,
        JSON.stringify({
          ...formData,
          password: '*'.repeat(formData.password.length),
        }),
      )
    }

    nextStep()
  })

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (!form.formState.isDirty) {
        return
      }

      event.preventDefault()
    }

    window.addEventListener('beforeunload', handleBeforeUnload)

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [form.formState.isDirty])

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <StepHeader
        title="Conta"
        description="Seus dados de acesso à plataforma"
      />

      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="email">E-mail</FieldLabel>

          <Input id="email" {...form.register('email')} />

          <ErrorMessage
            errors={form.formState.errors}
            name="email"
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

          <Input id="password" type="password" {...form.register('password')} />

          <ErrorMessage
            errors={form.formState.errors}
            name="password"
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

        <StepperNextButton
          type="submit"
          onClick={handleSubmit}
          disabled={form.formState.isSubmitting}
        />
      </StepperFooter>
    </form>
  )
}
