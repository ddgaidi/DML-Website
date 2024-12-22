// visits/stats/+server.ts
import { json } from '@sveltejs/kit';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mwtwgqqrdldaeykbdldm.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im13dHdncXFyZGxkYWV5a2JkbGRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE1NzgwMDMsImV4cCI6MjA0NzE1NDAwM30.aEQ-jEp76Zdw35YkkCJBFUDazvm-SgKlZ-D-7rzCANI';
const supabase = createClient(supabaseUrl, supabaseKey);

export async function GET() {
  // Exécuter une requête SQL brute pour obtenir le nombre de visites par page
  const { data, error } = await supabase
    .rpc('get_visit_stats');  // Appel d'une fonction SQL

  if (error) {
    return json({ error: error.message }, { status: 500 });
  }

  return json(data);  // Retourner les données agrégées
}