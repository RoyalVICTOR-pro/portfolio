import { createClient } from '@supabase/supabase-js'

const createSupabaseClient = () => {
  const config = useRuntimeConfig()
  return createClient(config.supabaseUrl, config.supabaseKey)
}

export async function insertData<T extends Record<string, any>>(
  table: string,
  data: T
) {
  try {
    const supabase = createSupabaseClient()
    await supabase.from(table).insert(data)
  } catch (error) {
    console.error(`Erreur lors de l'insertion dans ${table}:`, error)
    return null
  }
}
