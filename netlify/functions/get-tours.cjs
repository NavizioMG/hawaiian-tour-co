const { createClient } = require('@supabase/supabase-js');

exports.handler = async (event) => {
  console.log("🔥 Function hit");

  const SUPABASE_URL = process.env.SUPABASE_URL;
  const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

  const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

  const location = event.queryStringParameters.location || "Oahu"; // fallback
  console.log("📍 Searching for location:", location);

  const { data, error } = await supabase
    .from('tours')
    .select('*')
    .eq('location', location);

  if (error) {
    console.error("❌ Supabase Error:", error.message);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }

  console.log("✅ Tours found:", data.length);

  return {
    statusCode: 200,
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  };
};
