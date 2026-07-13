'use client'

import { cn } from '@/utilities/ui'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import * as React from 'react'

const RadioGroup: React.FC<React.ComponentProps<typeof RadioGroupPrimitive.Root>> = ({
  className,
  ...props
}) => {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={cn('grid gap-3', className)}
      {...props}
    />
  )
}

const RadioGroupItem: React.FC<React.ComponentProps<typeof RadioGroupPrimitive.Item>> = ({
  className,
  ...props
}) => {
  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      className={cn(
        'cursor-pointer border-[#3c494e] data-[state=checked]:border-[#00d4ff] data-[state=checked]:border-2 ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] focus-visible:ring-4 focus-visible:outline-1 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:focus-visible:ring-0',
        className,
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <div className="size-2.5 rounded-full" style={{ backgroundColor: '#00d4ff' }} />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
}

export { RadioGroup, RadioGroupItem }
