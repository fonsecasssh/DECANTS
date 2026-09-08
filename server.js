
const express = require("express");
const crypto = require("crypto");
const path = require("path");

const app = express();
app.use(express.json({ limit: "1mb" }));
app.use(express.static(path.join(__dirname, "public")));

const CATALOG = [{"id": 1, "brand": "Dior", "name": "Sauvage EDP", "category": "masculino", "niche": false, "badge": "Best seller", "image": "https://cms.brnstc.de/product_images/1122x1536_retina/cpro/media/images/product/25/8/3348901368247_0_1756475813780.jpg", "family": "Cítrico • Amadeirado • Baunilha", "notes": "Bergamota, patchouli e baunilha", "prices": {"2ml": 34.9, "5ml": 69.9, "10ml": 124.9}}, {"id": 2, "brand": "Carolina Herrera", "name": "Good Girl EDP", "category": "feminino", "niche": false, "badge": "Ícone", "image": "https://bulldog.vn/uploads/tt_hinh/9776361799710-jpg-20231208114041VRgayZJwwZ.jpg", "family": "Âmbar • Floral", "notes": "Amêndoa, jasmim, fava tonka e cacau", "prices": {"2ml": 29.9, "5ml": 59.9, "10ml": 109.9}}, {"id": 3, "brand": "Maison Francis Kurkdjian", "name": "Baccarat Rouge 540", "category": "unissex", "niche": true, "badge": "Nicho", "image": "https://tangs-prd-cdn.ascentismedia.com/ProductImages/e5e09c2b-9a70-4cf8-9002-94bfd5020d8c/1/240x240/baccarat-rouge-540-eau-de-parfum-250121095441.png", "family": "Âmbar • Floral • Amadeirado", "notes": "Açafrão, âmbar, cedro e jasmim", "prices": {"2ml": 79.9, "5ml": 179.9, "10ml": 329.9}}, {"id": 4, "brand": "Lattafa", "name": "Khamrah", "category": "arabe", "niche": false, "badge": "Árabe", "image": "https://microperfumes.com/cdn/shop/files/Khamrah-Lattafa-Retail-Bottle.jpg", "family": "Gourmand • Especiado", "notes": "Canela, tâmaras, pralinê e baunilha", "prices": {"2ml": 14.9, "5ml": 29.9, "10ml": 49.9}}, {"id": 5, "brand": "Yves Saint Laurent", "name": "Libre EDP", "category": "feminino", "niche": false, "badge": "Elegante", "image": "https://www.beautybar.com.cy/cdn/shop/products/yves-saint-laurent-libre-90ml-eau-de-parfum.jpg?v=1720516794&width=1445", "family": "Floral • Aromático", "notes": "Lavanda, flor de laranjeira e baunilha", "prices": {"2ml": 32.9, "5ml": 64.9, "10ml": 119.9}}, {"id": 6, "brand": "Jean Paul Gaultier", "name": "Le Male Elixir", "category": "masculino", "niche": false, "badge": "Noturno", "image": "https://media.landmarkshops.in/cdn-cgi/image/h=1125,w=1125,q=85,fit=cover/lifestyle/1000015046050-1000015046049_03-2100.jpg", "family": "Âmbar • Aromático", "notes": "Lavanda, fava tonka e benjoim", "prices": {"2ml": 29.9, "5ml": 59.9, "10ml": 109.9}}, {"id": 7, "brand": "Nishane", "name": "Hacivat", "category": "unissex", "niche": true, "badge": "Extrait", "image": "https://cdn11.bigcommerce.com/s-ph0qpmxksl/images/stencil/1280x1280/products/4997/17323/Nishane_Hacivat__05061.1771566413.png?c=1", "family": "Frutado • Amadeirado • Musgoso", "notes": "Abacaxi, bergamota, cedro e musgo", "prices": {"2ml": 49.9, "5ml": 109.9, "10ml": 199.9}}, {"id": 8, "brand": "Afnan", "name": "9PM", "category": "arabe", "niche": false, "badge": "Custo-benefício", "image": "https://i5.walmartimages.com/seo/Afnan-9pm-by-Afnan-Eau-De-Parfum-Spray-Unisex-3-4-oz-for-Men_4d89b859-12df-48c8-a8dd-d147967c550e.3d093d3d8b96916d75393c719916afbb.jpeg", "family": "Âmbar • Baunilha", "notes": "Maçã, lavanda, canela e baunilha", "prices": {"2ml": 14.9, "5ml": 27.9, "10ml": 47.9}}, {"id": 9, "brand": "Creed", "name": "Aventus", "category": "masculino", "niche": true, "badge": "Nicho", "image": "https://www.spacenk.com/dw/image/v2/ABCE_PRD/on/demandware.static/-/Sites-spacenkmastercatalog/default/dwa79563ab/products/CREED/UK200053285_CREED.jpg?sh=582&sw=582", "family": "Frutado • Amadeirado", "notes": "Bergamota, abacaxi, bétula e musgo", "prices": {"2ml": 79.9, "5ml": 179.9, "10ml": 329.9}}, {"id": 10, "brand": "Xerjoff", "name": "Naxos", "category": "unissex", "niche": true, "badge": "Nicho", "image": "https://homeplushome.com/cdn/shop/files/3130_1200x1200.png?v=1691457474", "family": "Aromático • Gourmand", "notes": "Lavanda, mel, canela, tabaco e baunilha", "prices": {"2ml": 59.9, "5ml": 139.9, "10ml": 259.9}}, {"id": 11, "brand": "Parfums de Marly", "name": "Layton", "category": "unissex", "niche": true, "badge": "Nicho", "image": "https://www.perfumenz.co.nz/cdn/shop/files/parfums-de-marly-layton-200ml_700x700.png?v=1734491125", "family": "Aromático • Especiado", "notes": "Maçã, lavanda, cardamomo e baunilha", "prices": {"2ml": 59.9, "5ml": 139.9, "10ml": 259.9}}, {"id": 12, "brand": "Mancera", "name": "Cedrat Boise", "category": "unissex", "niche": true, "badge": "Versátil", "image": "https://statics-mp.boyner.com.tr/mnresize/505/704/Boynerimages/3760265190485_2009710322_0.jpg?v=1734433544", "family": "Cítrico • Amadeirado", "notes": "Cítricos, groselha, cedro, couro e baunilha", "prices": {"2ml": 29.9, "5ml": 69.9, "10ml": 119.9}}, {"id": 13, "brand": "Amouage", "name": "Reflection Man", "category": "masculino", "niche": true, "badge": "Alta perfumaria", "image": "https://parfumeriedaquitaine.cl/cdn/shop/files/Amouage-reflection-man.jpg?v=1697323688&width=950", "family": "Floral • Amadeirado", "notes": "Neroli, jasmim, sândalo e cedro", "prices": {"2ml": 69.9, "5ml": 159.9, "10ml": 299.9}}, {"id": 14, "brand": "Initio", "name": "Side Effect", "category": "unissex", "niche": true, "badge": "Noturno", "image": "https://static.wixstatic.com/media/9dcf6f_3941d39e927a42b0b49926c3d6f53c35~mv2.jpg", "family": "Âmbar • Especiado", "notes": "Rum, canela, tabaco e baunilha", "prices": {"2ml": 79.9, "5ml": 179.9, "10ml": 339.9}}];

const catalogById = new Map(CATALOG.map(p => [String(p.id), p]));
const round2 = n => Math.round((Number(n) + Number.EPSILON) * 100) / 100;

function quoteCart(items) {
  if (!Array.isArray(items) || items.length === 0) throw new Error("Carrinho vazio.");
  const normalized = [];
  let total = 0;
  for (const raw of items) {
    const p = catalogById.get(String(raw.id));
    const size = String(raw.size || "");
    const quantity = Math.max(1, Math.min(10, Number(raw.quantity || 1)));
    if (!p || !Object.prototype.hasOwnProperty.call(p.prices, size)) throw new Error("Item inválido.");
    const unitPrice = Number(p.prices[size]);
    total += unitPrice * quantity;
    normalized.push({
      id: p.id,
      title: `${p.brand} ${p.name} — ${size}`,
      quantity,
      unitPrice
    });
  }
  return { items: normalized, total: round2(total) };
}

app.get("/api/config", (req, res) => {
  res.json({
    publicKey: process.env.MP_PUBLIC_KEY || "",
    storeName: "Decant Lab",
    paymentConfigured: Boolean(process.env.MP_PUBLIC_KEY && process.env.MP_ACCESS_TOKEN)
  });
});

app.post("/api/quote", (req, res) => {
  try {
    res.json(quoteCart(req.body.items));
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.post("/api/process-payment", async (req, res) => {
  try {
    if (!process.env.MP_ACCESS_TOKEN) {
      return res.status(503).json({ error: "Mercado Pago ainda não configurado no servidor." });
    }

    const { items, formData, customer } = req.body || {};
    const quote = quoteCart(items);
    if (!formData || typeof formData !== "object") {
      return res.status(400).json({ error: "Dados de pagamento ausentes." });
    }

    const payer = { ...(formData.payer || {}) };
    if (customer?.email) payer.email = customer.email;
    if (customer?.firstName) payer.first_name = customer.firstName;
    if (customer?.lastName) payer.last_name = customer.lastName;

    // Never trust the amount sent by the browser.
    const payload = {
      transaction_amount: quote.total,
      token: formData.token || undefined,
      description: `Pedido Decant Lab - ${quote.items.map(i => i.title).join(", ").slice(0, 240)}`,
      installments: Number(formData.installments || 1),
      payment_method_id: formData.payment_method_id,
      issuer_id: formData.issuer_id || undefined,
      payer,
      external_reference: `DL-${Date.now()}-${crypto.randomBytes(3).toString("hex")}`,
      additional_info: {
        items: quote.items.map(i => ({
          id: String(i.id),
          title: i.title,
          quantity: i.quantity,
          unit_price: i.unitPrice
        }))
      }
    };

    // Remove undefined properties before sending.
    Object.keys(payload).forEach(k => payload[k] === undefined && delete payload[k]);

    const mpResp = await fetch("https://api.mercadopago.com/v1/payments", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.MP_ACCESS_TOKEN}`,
        "Content-Type": "application/json",
        "X-Idempotency-Key": crypto.randomUUID()
      },
      body: JSON.stringify(payload)
    });

    const data = await mpResp.json();
    if (!mpResp.ok) {
      console.error("Mercado Pago error:", data);
      return res.status(mpResp.status).json({
        error: data.message || "Não foi possível processar o pagamento.",
        cause: data.cause || []
      });
    }

    const tx = data.point_of_interaction?.transaction_data || {};
    res.json({
      id: data.id,
      status: data.status,
      statusDetail: data.status_detail,
      externalReference: data.external_reference,
      amount: quote.total,
      paymentMethod: data.payment_method_id,
      pix: {
        qrCode: tx.qr_code || null,
        qrCodeBase64: tx.qr_code_base64 || null,
        ticketUrl: tx.ticket_url || null
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro interno ao processar pagamento." });
  }
});

app.post("/api/webhooks/mercadopago", (req, res) => {
  // Endpoint ready for Mercado Pago notifications.
  // In production, validate the webhook signature before trusting the event.
  console.log("Mercado Pago webhook:", JSON.stringify(req.body));
  res.sendStatus(200);
});

app.get("*", (req, res) => res.sendFile(path.join(__dirname, "public", "index.html")));

const port = process.env.PORT || 10000;
app.listen(port, () => console.log(`Decant Lab running on port ${port}`));
