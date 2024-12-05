import { createClient } from '@supabase/supabase-js'

export function createSupabaseClient(event: any) {
  const config = useRuntimeConfig(event)

  console.log('Configuration Supabase:', config.supabaseUrl)

  return createClient(
    config.supabaseUrl as string,
    config.supabaseKey as string
  )
}

/**
 * Utilitaire générique pour insérer des données dans une table Supabase
 * @param table - Nom de la table
 * @param data - Données à insérer
 * @returns Les données insérées ou null en cas d'erreur
 */
export async function insertData<T extends Record<string, any>>(
  supabase: any,
  table: string,
  data: T
) {
  try {
    await supabase.from(table).insert(data)
  } catch (error) {
    console.error(`Erreur lors de l'insertion dans ${table}:`, error)
    return null
  }
}
