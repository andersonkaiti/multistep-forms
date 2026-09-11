import { cn } from 'cn'
import { Check, type LucideIcon } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { createContext, type ReactNode, use, useState } from 'react'
import { Button } from './button'

interface IStepperContext {
  previousStep: () => void
  nextStep: () => void
  initialStep: number
  totalSteps: number
  currentStep: number
}

const StepperContext = createContext({} as IStepperContext)

export interface IStep {
  label: string
  icon: LucideIcon
  content: ReactNode
}

interface IStepperProps {
  initialStep?: number
  steps: IStep[]
}

export function Stepper({ initialStep = 0, steps }: IStepperProps) {
  const [currentStep, setCurrentStep] = useState(initialStep)

  const totalSteps = steps.length - 1

  function previousStep() {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 0))
  }

  function nextStep() {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, totalSteps))
  }

  return (
    <StepperContext
      value={{
        previousStep,
        nextStep,
        initialStep,
        totalSteps,
        currentStep,
      }}
    >
      <div className="w-full space-y-10 p-6 md:p-8">
        <div className="relative flex w-full items-center justify-between">
          <div
            className="absolute h-0.5 bg-border"
            style={{ left: '16.67%', right: '16.67%', top: '18px' }}
          />

          <motion.div
            className="absolute h-0.5 origin-left bg-primary"
            style={{ left: '16.67%', right: '16.67%', top: '18px' }}
            initial={{ scaleX: 0 }}
            animate={{
              scaleX: currentStep / (steps.length - 1),
            }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          />

          {steps.map((step, index) => {
            const isCompleted = index < currentStep
            const isActive = index === currentStep

            return (
              <div
                key={step.label}
                className="group relative flex flex-1 cursor-pointer flex-col items-center gap-2"
              >
                <motion.div
                  className={cn(
                    'relative z-10 flex size-9 items-center justify-center rounded-full font-semibold text-sm shadow-sm transition-colors duration-300',
                    isCompleted || isActive
                      ? 'rounded-full bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground',
                  )}
                  animate={{
                    scale: isActive ? 1.05 : 1,
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                >
                  {isCompleted ? (
                    <Check className="size-5" strokeWidth={2.5} />
                  ) : (
                    <step.icon className="size-5" />
                  )}
                </motion.div>

                <small className="text-center">{step.label}</small>
              </div>
            )
          })}
        </div>

        <div className="flex min-h-32 flex-col items-center justify-center py-6 text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="w-full space-y-2"
            >
              {steps[currentStep].content}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </StepperContext>
  )
}

export function StepperBackButton() {
  const { previousStep, initialStep, currentStep } = use(StepperContext)

  return (
    <Button
      onClick={previousStep}
      disabled={initialStep === currentStep}
      variant="secondary"
      className={cn(
        'cursor-pointer',
        'disabled:pointer-events-none disabled:opacity-50',
      )}
    >
      Voltar
    </Button>
  )
}

export function StepperNextButton() {
  const { nextStep, totalSteps, currentStep } = use(StepperContext)

  return (
    <Button onClick={nextStep} className="cursor-pointer hover:bg-primary/90">
      {totalSteps === currentStep ? 'Finalizar' : 'Próximo'}
    </Button>
  )
}
