// Auto-generated — DO NOT EDIT. /api/dice: d20 roll → discount code + free mini, with layered anti-abuse.
const crypto = require('crypto');

const BRAND = "DND Anime Miniatures";
const SITE_TAG = "anime";
const PUBLIC_EMAIL = "info@dndanimeminiatures.com";
const FROM = "DND Anime Miniatures <downloads@dndminiaturestl.com>";
const SITE_URL = "https://www.dndanimeminiatures.com";
const SITE_HOST = new URL(SITE_URL).host.replace(/^www\./, '');
const PRIZES = [{"slug":"kureha","title":"Doctorine Kureha","price":4,"links":[{"name":"Doctorine Kureha","url":"https://drive.google.com/uc?export=download&id=1uVPzhF1vmiMt44kFIyGxfeSl1Pf622ND"}]},{"slug":"lasso-baroque-works","title":"Lasso · Mr. 4's Pet","price":4,"links":[{"name":"Lasso · Mr. 4's Pet","url":"https://drive.google.com/uc?export=download&id=1peX74m1pVeaoSoMMnBJSXXhI5po9aCNQ"}]},{"slug":"miss-wednesday","title":"Miss Wednesday (Vivi Undercover)","price":4,"links":[{"name":"Miss Wednesday (Vivi Undercover)","url":"https://drive.google.com/uc?export=download&id=1XDXRAGFHCBFfvgJWsI3USrzrx1Fip8Ck"}]},{"slug":"mr-5","title":"Mr. 5 · Gem","price":4,"links":[{"name":"Mr. 5 · Gem","url":"https://drive.google.com/uc?export=download&id=1FajXd2FZyyvT3Xo2bM8otrYUwQiu8u7l"}]},{"slug":"big-mom","title":"Big Mom","price":4,"links":[{"name":"Big Mom","url":"https://drive.google.com/uc?export=download&id=1e3nJvvliCwM1ec7hzurs8xwP8rs6zytF"}]},{"slug":"kaido","title":"Kaido","price":4,"links":[{"name":"Kaido","url":"https://drive.google.com/uc?export=download&id=1sijuAjDmEwjqhg8Cqh32zCCLCFitqD6C"}]},{"slug":"nami-treasure-hunter","title":"Nami Treasure Hunter","price":4,"links":[{"name":"Nami Treasure Hunter","url":"https://drive.google.com/uc?export=download&id=1bOVyqangmAQcVlUHynUF0CrPHcQcvvPo"}]},{"slug":"shanks","title":"Shanks","price":4,"links":[{"name":"Shanks","url":"https://drive.google.com/uc?export=download&id=1EJhhhDwBwGJeDM7KbnqcnyRLhEin1Ocm"}]},{"slug":"roronoa-zoro","title":"Roronoa Zoro","price":4,"links":[{"name":"Roronoa Zoro","url":"https://drive.google.com/uc?export=download&id=1YfXugzVfLYmJtTFId3meA7KfZRtNnBbS"}]},{"slug":"brontosaurus","title":"Brontosaurus · Little Garden Dinosaur","price":8,"links":[{"name":"Brontosaurus · Little Garden Dinosaur","url":"https://drive.google.com/uc?export=download&id=1daJlqVRs_LHODyo3Sh_4GHj-9_ae_gnd"}]},{"slug":"dalton-persona","title":"Dalton · Human Form","price":8,"links":[{"name":"Dalton · Human Form","url":"https://drive.google.com/uc?export=download&id=18YO1KJLUwCTnYRew6lAyA-NNGHHfDuoS"}]},{"slug":"jesus-burgess","title":"Jesus Burgess (v2)","price":8,"links":[{"name":"Jesus Burgess (v2)","url":"https://drive.google.com/uc?export=download&id=1rEqK91KOOqnjmGZTa-INdD8ZiiCMZdxS"}]},{"slug":"miss-double-finger","title":"Miss Doublefinger · Paula","price":8,"links":[{"name":"Miss Doublefinger · Paula","url":"https://drive.google.com/uc?export=download&id=1oEKYHnN8Y0pUGrAbJJDW2W_faAONK_dK"}]},{"slug":"mr-4","title":"Mr. 4","price":8,"links":[{"name":"Mr. 4","url":"https://drive.google.com/uc?export=download&id=1TkSnwb-N6puh6JTpJfRjdThLj9TvC88_"}]},{"slug":"negikuma-maria","title":"Negi Kuma Maria","price":8,"links":[{"name":"Negi Kuma Maria","url":"https://drive.google.com/uc?export=download&id=15p1FIer4OsIbooNrT_-7zxiawTy4Pqec"}]},{"slug":"chopper-guard-point","title":"Tony Tony Chopper · Guard Point","price":8,"links":[{"name":"Tony Tony Chopper · Guard Point","url":"https://drive.google.com/uc?export=download&id=1yMWvOWwP7_a1qxLaB-M8Ikr58BDe5wtC"}]},{"slug":"brogy","title":"Brogy Sun Pirate","price":12,"links":[{"name":"Brogy Sun Pirate","url":"https://drive.google.com/uc?export=download&id=1_rrfVn1sP5rxrnV-mMMq38m2Jt4Zgxcb"}]},{"slug":"robson","title":"Robson","price":12,"links":[{"name":"Robson","url":"https://drive.google.com/uc?export=download&id=11KCn9kZbp3FcwlB0Gv2W7oql9TXWIxl6"}]},{"slug":"little-garden-bundle","title":"Little Garden Bundle","price":18,"links":[{"name":"Dorry Lion Bagsby","url":"https://drive.google.com/uc?export=download&id=1ZiDJr4cSHZlJ4l-rjJ-R16m1HySElmnA"},{"name":"Brogy Sun Pirate","url":"https://drive.google.com/uc?export=download&id=1_rrfVn1sP5rxrnV-mMMq38m2Jt4Zgxcb"},{"name":"Brontosaurio · Dinosaurio de Little Garden","url":"https://drive.google.com/uc?export=download&id=1daJlqVRs_LHODyo3Sh_4GHj-9_ae_gnd"}]},{"slug":"baroque-works-bundle","title":"Baroque Works Agents Bundle","price":35,"links":[{"name":"Sir Crocodile · Mr. 0","url":"https://drive.google.com/uc?export=download&id=1wkH0ZnEIEoFKhhKXTiYFeo2O7XX9Albm"},{"name":"Miss All Sunday (Nico Robin)","url":"https://drive.google.com/uc?export=download&id=1EVSdzv1DAFpcTjoLUA3PAH__Uz9EpKJG"},{"name":"Mr. 1 · Daz Bones","url":"https://drive.google.com/uc?export=download&id=1_QAXwcOjmoM2QYpW2UuXB4MI7CohLIB_"},{"name":"Miss Doublefinger · Paula","url":"https://drive.google.com/uc?export=download&id=1oEKYHnN8Y0pUGrAbJJDW2W_faAONK_dK"},{"name":"Mr. 3 · Galdino","url":"https://drive.google.com/uc?export=download&id=1fHXhIyCMimoZZFeXQfPOiYq9wIPa3MB5"},{"name":"Miss Merry Christmas","url":"https://drive.google.com/uc?export=download&id=1-dS0mCwJznR8vcBg-i7Nme5Se_uZL8af"},{"name":"Mr. 4","url":"https://drive.google.com/uc?export=download&id=1TkSnwb-N6puh6JTpJfRjdThLj9TvC88_"},{"name":"Lasso · Pet de Mr. 4","url":"https://drive.google.com/uc?export=download&id=1peX74m1pVeaoSoMMnBJSXXhI5po9aCNQ"},{"name":"Mr. 5 · Gem","url":"https://drive.google.com/uc?export=download&id=1FajXd2FZyyvT3Xo2bM8otrYUwQiu8u7l"},{"name":"Miss Valentine (v1)","url":"https://drive.google.com/uc?export=download&id=1_qh4VioXtZZ9nSlAXr6QHlN7nmWn2KdQ"},{"name":"Miss Valentine (v2)","url":"https://drive.google.com/uc?export=download&id=11FsSjld1WNl6KMdrFxSSA3kG2aXN_xDh"},{"name":"Mr. 8 · Igaram","url":"https://drive.google.com/uc?export=download&id=19mu6g_9AV1hhXjWNV4KkQYoRNp5yQ3kB"},{"name":"Miss Monday","url":"https://drive.google.com/uc?export=download&id=1LDpc2d5UukX_vnuUhFcuL0apNgAIYIZc"},{"name":"Mr. 9","url":"https://drive.google.com/uc?export=download&id=1lBtWEEf3MpNzY288QJXIfIl2G37FhL2u"},{"name":"Miss Wednesday (Vivi disfrazada)","url":"https://drive.google.com/uc?export=download&id=1XDXRAGFHCBFfvgJWsI3USrzrx1Fip8Ck"},{"name":"Mr. 13 · Unluckies (Vulture)","url":"https://drive.google.com/uc?export=download&id=13KP9dYeBITF5tyyw1WaNw0-vfKfu5SwF"},{"name":"Miss Friday · Unluckies (Otter)","url":"https://drive.google.com/uc?export=download&id=11nYZqbAULAPk42loU2m5u8Dao0-YHUEl"}]}];

// Disposable-email domains — farming a free STL needs a real inbox
const DISPOSABLE = ['mailinator.com','guerrillamail.com','sharklasers.com','yopmail.com','tempmail.com','temp-mail.org','10minutemail.com','trashmail.com','getnada.com','dispostable.com','maildrop.cc','mintemail.com','throwawaymail.com','fakeinbox.com','mohmal.com','emailondeck.com','mailnesia.com','mytemp.email','burnermail.io','spamgourmet.com','tempail.com','tmpmail.net','moakt.com','inboxkitten.com'];

function couponSecret() { return process.env.COUPON_SECRET || process.env.PAYPAL_SECRET || 'd20-static'; }
function makeCode(pct) {
  const alphabet = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';
  let nonce = '';
  for (let i = 0; i < 4; i++) nonce += alphabet[crypto.randomInt(alphabet.length)];
  const sig = crypto.createHmac('sha256', couponSecret()).update('d20:' + pct + ':' + nonce).digest('hex').slice(0, 8);
  return 'D20-' + pct + '-' + nonce + '-' + sig;
}
// Canonical form defeats dot/plus alias farming (a+1@gmail == a1@ == a.1@)
function normEmail(e) {
  const [user, domain] = e.split('@');
  let u = user.split('+')[0];
  if (domain === 'gmail.com' || domain === 'googlemail.com') u = u.replace(/\./g, '');
  return u + '@' + domain;
}
function claimSig() { return crypto.createHmac('sha256', couponSecret()).update('d20claim:' + SITE_TAG).digest('hex').slice(0, 16); }
// Per-instance IP throttle (best-effort — survives warm invocations)
const ipLog = globalThis.__d20ips = globalThis.__d20ips || new Map();

module.exports = async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') { res.status(405).json({ error: 'method_not_allowed' }); return; }
  try {
    // Layer 1: same-site origin (blocks naive curl loops; absent headers are tolerated)
    const origin = String(req.headers.origin || req.headers.referer || '');
    if (origin && !origin.includes(SITE_HOST)) { res.status(403).json({ ok: false, error: 'bad_origin' }); return; }

    // Layer 2: signed claim cookie — one roll per browser
    const cookies = String(req.headers.cookie || '');
    if (cookies.includes('d20c=' + claimSig())) { res.status(429).json({ ok: false, error: 'already_claimed' }); return; }

    // Layer 3: IP throttle — max 3 rolls/day per IP per warm instance
    const ip = String(req.headers['x-forwarded-for'] || '').split(',')[0].trim() || 'unknown';
    const now = Date.now();
    const entry = ipLog.get(ip);
    if (entry && now - entry.ts < 86400000 && entry.count >= 3) { res.status(429).json({ ok: false, error: 'too_many' }); return; }

    const body = (req.body && typeof req.body === 'object') ? req.body : JSON.parse(req.body || '{}');
    const rawEmail = String(body.email || '').trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(rawEmail) || rawEmail.length > 254) { res.status(400).json({ ok: false, error: 'bad_email' }); return; }
    const email = normEmail(rawEmail);
    // Layer 4: no disposable inboxes
    if (DISPOSABLE.includes(email.split('@')[1])) { res.status(400).json({ ok: false, error: 'bad_email' }); return; }

    // Layer 5: persistent one-roll-per-email via Omnisend contact properties (when the key exists)
    const omniKey = process.env.OMNISEND_API_KEY;
    if (omniKey) {
      try {
        const cr = await fetch('https://api.omnisend.com/v3/contacts?email=' + encodeURIComponent(email), {
          headers: { 'X-API-KEY': omniKey },
        });
        if (cr.ok) {
          const cj = await cr.json();
          const found = (cj.contacts || [])[0];
          if (found && found.customProperties && found.customProperties.d20Roll) {
            res.status(429).json({ ok: false, error: 'already_claimed' }); return;
          }
        }
      } catch (e) { /* best-effort */ }
    }

    const roll = 1 + crypto.randomInt(20);
    const code = makeCode(roll);
    const prize = PRIZES[roll - 1] || null;

    // Email the code + free mini via Resend — the prize only exists in a real inbox
    let emailSent = false;
    const key = process.env.RESEND_API_KEY;
    if (key) {
      try {
        const prizeHtml = prize ? '<h3 style="margin:22px 0 6px">&#127873; Your free mini: ' + prize.title + '</h3>'
          + '<p style="margin:0 0 8px;font-size:14px">Roll ' + roll + ' unlocks this one — the higher the roll, the bigger the mini. Download link' + (prize.links.length > 1 ? 's' : '') + ':</p>'
          + prize.links.map(function (l) { return '<p style="margin:4px 0"><a href="' + l.url + '" style="color:#1a7f4e;font-weight:bold">&#11015; ' + l.name + ' (.STL)</a></p>'; }).join('')
          + '<p style="color:#777;font-size:12px;margin-top:6px">Same license as the shop: print it, paint it, even sell your prints.</p>' : '';
        const r = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: { Authorization: 'Bearer ' + key, 'Content-Type': 'application/json' },
          body: JSON.stringify({
            from: FROM,
            to: [rawEmail],
            reply_to: PUBLIC_EMAIL,
            subject: 'You rolled a ' + roll + ' — ' + roll + '% off + a free mini' + (prize ? ' (' + prize.title + ')' : '') + '!',
            html: '<div style="font-family:Arial,sans-serif;max-width:520px;margin:0 auto;color:#222">'
              + '<h2 style="margin:0 0 6px">&#127922; You rolled a ' + roll + '!</h2>'
              + '<p style="margin:0 0 18px">That means <b>' + roll + '% off</b> your next order at ' + BRAND + ' — and a free miniature on the house.</p>'
              + '<div style="background:#f4f4f4;border:2px dashed #999;border-radius:10px;padding:16px;text-align:center;font-size:22px;font-weight:bold;letter-spacing:1px">' + code + '</div>'
              + '<p style="margin:14px 0 0;font-size:14px">Paste the code in the <b>Discount code</b> box of the cart at <a href="' + SITE_URL + '">' + SITE_URL.replace('https://','') + '</a>.</p>'
              + prizeHtml
              + '<p style="color:#777;font-size:12px;margin-top:22px">One roll per adventurer. Questions? Just reply to this email (' + PUBLIC_EMAIL + ').</p>'
              + '</div>',
          }),
        });
        emailSent = r.ok;
      } catch (e) { /* best-effort */ }
    }

    // Push the contact to Omnisend (normalized email = persistent one-roll-per-person marker) — best-effort
    try {
      if (omniKey) {
        await fetch('https://api.omnisend.com/api/contacts', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Authorization: omniKey, 'Omnisend-Version': '2026-03-15' },
          body: JSON.stringify({
            identifiers: [{
              id: email, type: 'email',
              channels: { email: { status: 'subscribed' } },
              consent: { source: 'd20 discount popup — ' + SITE_TAG },
            }],
            tags: ['source: d20-popup', 'site: ' + SITE_TAG],
            customProperties: { d20Roll: roll, d20Code: code, d20Prize: prize ? prize.slug : '' },
          }),
        });
      }
    } catch (e) { /* best-effort */ }

    // Mark the claim: signed cookie (1 year) + IP counter
    res.setHeader('Set-Cookie', 'd20c=' + claimSig() + '; Max-Age=31536000; Path=/; SameSite=Lax; HttpOnly');
    ipLog.set(ip, { ts: entry && now - entry.ts < 86400000 ? entry.ts : now, count: entry && now - entry.ts < 86400000 ? entry.count + 1 : 1 });
    if (ipLog.size > 5000) ipLog.clear();

    res.status(200).json({ ok: true, roll: roll, emailSent: emailSent, prize: prize ? { title: prize.title } : null });
  } catch (e) {
    res.status(500).json({ ok: false, error: 'dice_failed' });
  }
};
