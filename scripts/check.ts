#!/usr/bin/env zx

import type { ProcessOutput } from 'zx'
import { $ } from 'zx'
import { printObject } from './utils'

await $`pnpm spell-check`.catch((out: ProcessOutput) => {
  console.log(out)
  throw new Error(out.stdout)
})

await Promise.all([$`pnpm type-check`, $`pnpm lint:stage`]).catch((out: ProcessOutput) => {
  printObject(out)
  throw new Error(out.stdout)
})
