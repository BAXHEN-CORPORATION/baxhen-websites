import { create } from 'zustand'

export interface QuoteState {
  step: number
  tipo: string
  recolha: string
  entrega: string
  data: string
  pisoRecolha: string
  pisoEntrega: string
  elevador: string
  desmontagem: string
  extras: string[]
  nome: string
  observacoes: string
  setField: (key: string, value: string | string[]) => void
  nextStep: () => void
  prevStep: () => void
  initStep: (skipFirst?: boolean) => void
  reset: () => void
}

const initial = {
  step: 1,
  tipo: '', recolha: '', entrega: '', data: '',
  pisoRecolha: '', pisoEntrega: '', elevador: '',
  desmontagem: '', extras: [] as string[], nome: '', observacoes: '',
}

export const useQuoteStore = create<QuoteState>()((set) => ({
  ...initial,
  setField: (key, value) => set({ [key]: value }),
  nextStep: () => set((s) => ({ step: s.step + 1 })),
  prevStep: () => set((s) => ({ step: Math.max(1, s.step - 1) })),
  initStep: (skipFirst) => set((s) => {
    // From homepage: tipo already answered → skip to step 2 (nome)
    if (skipFirst) return { step: 2 }
    // Direct: resume if name already filled, else step 1 (nome)
    if (s.nome) return { step: s.step > 1 ? s.step : 2 }
    return { step: 1 }
  }),
  reset: () => set(initial),
}))
