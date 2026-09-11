import { steps } from '@components/steps'
import { Stepper } from './components/ui/stepper'

export function App() {
  return (
    <div className="mx-auto flex min-h-screen max-w-4xl justify-center px-5 py-20">
      <Stepper steps={steps} />
    </div>
  )
}
