import { Session } from '@supabase/supabase-js'
import { createContext } from 'react'

export const sessionContext = createContext<Session | null>(null)
