import { Info, MapPin, User } from 'lucide-react'
import type { IStep } from '../ui/stepper'
import { AccountStep } from './account-step'
import { AddressStep } from './address-step'
import { PersonalDataStep } from './personal-data-step'

export const steps: IStep[] = [
  {
    label: 'Conta',
    icon: User,
    content: <AccountStep />,
  },
  {
    label: 'Dados pessoais',
    icon: Info,
    content: <PersonalDataStep />,
  },
  {
    label: 'Endereço',
    icon: MapPin,
    content: <AddressStep />,
  },
]
