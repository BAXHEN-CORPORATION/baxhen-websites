import { create } from 'zustand'

export interface QuoteState {
  step: number
  tipo: string
  origem: string
  destino: string
  data: string
  pisoOrigem: string
  pisoDestino: string
  elevador: string
  estacionamento: string
  notas: string
  extras: string[]
  nome: string
  telefone: string
  setField: (key: string, value: string | string[]) => void
  nextStep: () => void
  prevStep: () => void
  initStep: () => void
  reset: () => void
}

const initial = {
  step: 1,
  tipo: '', origem: '', destino: '', data: '',
  pisoOrigem: '', pisoDestino: '', elevador: '', estacionamento: '', notas: '',
  extras: [] as string[], nome: '', telefone: '',
}

export const useQuoteStore = create<QuoteState>((set) => ({
  ...initial,
  setField: (key, value) => set({ [key]: value }),
  nextStep: () => set((s) => ({ step: s.step + 1 })),
  prevStep: () => set((s) => ({ step: Math.max(1, s.step - 1) })),
  initStep: () => set((s) => ({ step: s.tipo ? 2 : 1 })),
  reset: () => set(initial),
}))
