import { steps } from '@components/steps'
import { accountStepSchema } from '@components/steps/account-step'
import { addressStepSchema } from '@components/steps/address-step'
import { personalDataStepSchema } from '@components/steps/personal-data-step'
import { Stepper } from '@components/ui/stepper'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'

const stepsSchema = z.object({
  accountStep: accountStepSchema,
  personalData: personalDataStepSchema,
  addressStep: addressStepSchema,
})

export type StepsSchema = z.infer<typeof stepsSchema>

export function App() {
  const form = useForm<z.infer<typeof stepsSchema>>({
    resolver: zodResolver(stepsSchema),
    defaultValues: {
      personalData: {
        document: '',
      },
    },
  })

  const handleSubmit = form.handleSubmit((formData) => {
    console.log(formData)
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
    <FormProvider {...form}>
      <form
        className="mx-auto flex min-h-screen max-w-4xl justify-center px-5 py-20"
        onSubmit={handleSubmit}
      >
        <Stepper steps={steps} />
      </form>
    </FormProvider>
  )
}
