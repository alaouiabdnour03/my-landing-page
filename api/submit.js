export default async function handler(req, res) {
  // Allow CORS from any origin (your GitHub Pages domain)
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle preflight
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const BREVO_API_KEY = process.env.BREVO_API_KEY;
  if (!BREVO_API_KEY) {
    return res.status(500).json({ error: "BREVO_API_KEY not configured" });
  }

  try {
    const { email, raisonSociale, ice, phone, caAnnuel, cnssEffectif, activities, needs, pack } = req.body;

    // 1. Create / update contact in Brevo
    const contactRes = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "api-key": BREVO_API_KEY,
      },
      body: JSON.stringify({
        email,
        listIds: [4],
        updateEnabled: true,
        attributes: {
          RAISON_SOCIALE: raisonSociale || "",
          ICE: ice || "",
          PHONE: phone || "",
          CA_ANNUEL: caAnnuel || "",
          CNSS_EFFECTIF: cnssEffectif || "",
          ACTIVITES: activities || "",
          BESOINS: needs || "",
          PACK: pack || "",
        },
      }),
    });

    const contactData = await contactRes.json().catch(() => ({}));

    return res.status(200).json({
      success: true,
      brevo: contactData,
    });
  } catch (err) {
    console.error("Brevo API error:", err);
    return res.status(500).json({ error: err.message });
  }
}
