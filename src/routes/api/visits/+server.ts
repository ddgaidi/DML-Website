import { json } from '@sveltejs/kit';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://YOUR_SUPABASE_URL.supabase.co';
const supabaseKey = 'YOUR_SUPABASE_ANON_KEY';
const supabase = createClient(supabaseUrl, supabaseKey);

export async function POST({ request }) {
  const { page, visitor_id } = await request.json();

  // Enregistrer la visite dans la base de données
  const { data, error } = await supabase
    .from('visits')
    .insert([{ page, visitor_id, timestamp: new Date() }]);

  if (error) {
    return json({ error: error.message }, { status: 500 });
  }

  return json({ success: true, data });
}