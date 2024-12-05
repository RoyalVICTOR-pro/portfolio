import { createClient } from '@supabase/supabase-js'

const config = useRuntimeConfig()

// Configuration du client Supabase avec des types génériques
const supabase = createClient(
  config.supabaseUrl as string,
  config.supabaseKey as string
)

/**
 * Utilitaire générique pour insérer des données dans une table Supabase
 * @param table - Nom de la table
 * @param data - Données à insérer
 * @returns Les données insérées ou null en cas d'erreur
 */
export async function insertData<T extends Record<string, any>>(
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
