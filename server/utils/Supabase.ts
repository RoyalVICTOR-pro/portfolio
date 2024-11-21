import { createClient } from '@supabase/supabase-js'

// Configuration du client Supabase avec des types génériques
const supabase = createClient(
  process.env.SUPABASE_URL as string,
  process.env.SUPABASE_KEY as string
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
): Promise<T | null> {
  try {
    const { data: insertedData, error } = await supabase
      .from(table)
      .insert(data)
      .select()
      .single()

    if (error) {
      console.error(`Erreur lors de l'insertion dans ${table}:`, error)
      throw error
    }

    return insertedData as T
  } catch (error) {
    console.error(`Erreur lors de l'insertion dans ${table}:`, error)
    return null
  }
}
