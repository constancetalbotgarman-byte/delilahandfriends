import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

/* =========================
   🔧 FULL AUTOMATION STACK
   ========================= */

// Payments (Stripe Payment Links or Checkout Sessions)
const STRIPE_DIRECT_LINK = "https://buy.stripe.com/your-direct-link";
const STRIPE_BUNDLE_LINK = "https://buy.stripe.com/your-bundle-link";
const AMAZON_LINK = "https://amazon.com/your-book";

// Email/CRM (recommend: ConvertKit or Klaviyo)
const EMAIL_PROVIDER_ENDPOINT = "https://api.convertkit.com/v3/forms/YOUR_FORM_ID/subscribe";
const CONVERTKIT_API_KEY = "YOUR_API_KEY";

// Analytics (optional upgrade: GA4 / Meta Pixel)
const TRACK_EVENT = (name, data = {}) => {
  console.log("EVENT:", name, data);
  // replace with: window.gtag || window.fbq
};

const books = [
  { title: "The Buckingham Palace Adventure", price: "$14.99", badge: "Bestseller" },
  { title: "The 10 Downing Street Adventure", price: "$14.99", badge: "Fan Favorite" },
  { title: "The London Eye Adventure", price: "$14.99", badge: "New" },
  { title: "The Natural History Museum Adventure", price: "$14.99", badge: "Popular" },
];

export default function DelilahWebsite() {

  /* =========================
     📧 EMAIL AUTOMATION (REAL)
     ========================= */
  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    try {
      TRACK_EVENT("lead_capture", { email_source: "homepage" });

      await fetch(EMAIL_PROVIDER_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          api_key: CONVERTKIT_API_KEY,
          email,
          tags: ["delilah-lead", "parent", "children-books"],
          fields: {
            source: "Delilah Website",
          },
        }),
      });

      // auto redirect to thank you / upsell
      window.location.href = "/thank-you";

    } catch (err) {
      alert("Signup failed — please try again.");
    }
  };

  /* =========================
     📊 AUTOMATION HOOKS
     ========================= */
  useEffect(() => {
    TRACK_EVENT("page_view", { page: "home" });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-pink-50 text-gray-800">

      {/* HERO */}
      <section className="text-center py-20 px-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold mb-4"
        >
          Delilah & Friends
        </motion.h1>

        <p className="text-lg max-w-2xl mx-auto mb-6">
          A magical children’s adventure series that builds curiosity, confidence, and imagination.
        </p>

        <div className="flex justify-center gap-4">
          <a href="#shop">
            <Button onClick={() => TRACK_EVENT("click_shop")}>Shop Books</Button>
          </a>
          <a href="#email">
            <Button variant="outline">Get 10% Off</Button>
          </a>
        </div>
      </section>

      {/* STORE */}
      <section id="shop" className="py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">Shop the Series</h2>

        <div className="grid md:grid-cols-4 gap-6">
          {books.map((book, i) => (
            <Card key={i} className="rounded-2xl shadow-md relative">
              <CardContent className="p-4 text-center">

                <div className="absolute top-2 left-2 text-xs bg-yellow-200 px-2 py-1 rounded-full">
                  {book.badge}
                </div>

                <div className="h-48 bg-gray-200 rounded-xl mb-4" />

                <h3 className="text-lg font-semibold mb-2">{book.title}</h3>
                <p className="mb-2">{book.price}</p>

                {/* DIRECT STRIPE */}
                <a href={STRIPE_DIRECT_LINK} target="_blank" onClick={() => TRACK_EVENT("buy_direct") }>
                  <Button className="w-full mb-2">Buy Direct (10% Off)</Button>
                </a>

                {/* AMAZON */}
                <a href={AMAZON_LINK} target="_blank" onClick={() => TRACK_EVENT("buy_amazon") }>
                  <Button variant="outline" className="w-full">Buy on Amazon</Button>
                </a>

              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* BUNDLE (HIGH VALUE AUTOMATION PATH) */}
      <section className="py-16 px-6 text-center bg-white">
        <h2 className="text-3xl font-semibold mb-6">Bundle Automation Offer</h2>
        <p className="max-w-2xl mx-auto mb-6">
          Automatically applies discount logic via Stripe Checkout (Buy 3 Get 1 Free equivalent).
        </p>

        <a href={STRIPE_BUNDLE_LINK} target="_blank">
          <Button onClick={() => TRACK_EVENT("bundle_click")}>Unlock Bundle</Button>
        </a>
      </section>

      {/* EMAIL CAPTURE (AUTOMATED CRM ENTRY) */}
      <section id="email" className="py-16 px-6 text-center bg-pink-50">
        <h2 className="text-3xl font-semibold mb-4">Get 10% Off Instantly</h2>
        <p className="mb-6">Automatically added to Adventure Club + email sequence</p>

        <form onSubmit={handleEmailSubmit} className="flex justify-center gap-2 max-w-md mx-auto">
          <input
            name="email"
            type="email"
            required
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 rounded-xl border"
          />
          <Button type="submit">Unlock</Button>
        </form>
      </section>

      {/* 🚀 COMPLETE GROWTH & AUTOMATION SYSTEM */}
      <section className="py-12 px-6 bg-white text-sm text-gray-700">
        <h2 className="text-xl font-semibold mb-4">Full Business Automation System</h2>

        <div className="space-y-8">

          {/* EMAIL SYSTEM */}
          <div>
            <h3 className="font-bold mb-2">📧 1. Email System (ConvertKit / Klaviyo)</h3>
            <ul className="space-y-1">
              <li>• Tags: parent / buyer / school lead / bundle interest</li>
              <li>• Segments: first-time visitor, repeat buyer, school inquiry</li>
              <li>• Automation flows:</li>
              <li>&nbsp;&nbsp;– Welcome sequence (discount + first book)</li>
              <li>&nbsp;&nbsp;– Story nurture (book guidance + emotional hooks)</li>
              <li>&nbsp;&nbsp;– Bundle upsell (3 for 1 offer)</li>
              <li>&nbsp;&nbsp;– School & library conversion sequence</li>
              <li>• Trigger-based emails based on clicks + purchases</li>
            </ul>
          </div>

          {/* SCHOOL OUTREACH */}
          <div>
            <h3 className="font-bold mb-2">🏫 2. School Outreach Machine</h3>
            <ul className="space-y-1">
              <li>• Lead sources: school directories, PTA lists, local libraries</li>
              <li>• Funnel: cold email → landing page → bulk order form</li>
              <li>• Outreach email sequence:</li>
              <li>&nbsp;&nbsp;– Email 1: introduction + story value</li>
              <li>&nbsp;&nbsp;– Email 2: social proof + classroom benefits</li>
              <li>&nbsp;&nbsp;– Email 3: bulk discount + author visit offer</li>
              <li>• Conversion assets: PDF order form + teacher kit</li>
              <li>• Follow-up cadence: 3–5 touchpoints over 10–14 days</li>
            </ul>
          </div>

          {/* AMAZON SYSTEM */}
          <div>
            <h3 className="font-bold mb-2">📦 3. Amazon Growth System</h3>
            <ul className="space-y-1">
              <li>• Keyword targeting: children's books ages 4–8, London adventure books</li>
              <li>• Title optimization: keyword + emotional hook format</li>
              <li>• Subtitle strategy: age + benefit + theme clarity</li>
              <li>• Category placement: children’s picture books + early readers</li>
              <li>• Review strategy (ethical):</li>
              <li>&nbsp;&nbsp;– ARC readers (advance copies)</li>
              <li>&nbsp;&nbsp;– email follow-ups to verified buyers</li>
              <li>&nbsp;&nbsp;– insert in-book review request</li>
              <li>• Launch strategy: coordinated 7–10 day sales burst</li>
            </ul>
          </div>

        </div>
      </section>

      {/* 📦 AMAZON DOMINATION PLAYBOOK */}
      <section className="py-12 px-6 bg-white text-sm text-gray-700">
        <h2 className="text-xl font-semibold mb-4">📦 Amazon Domination Playbook</h2>

        <div className="space-y-6">

          <div>
            <h3 className="font-bold mb-2">🔍 1. Keyword Domination Strategy</h3>
            <ul className="space-y-1">
              <li>• Primary keywords: children's books ages 4–8, early reader books, London adventure books</li>
              <li>• Long-tail keywords: picture books about London landmarks, animal adventure kids books</li>
              <li>• Backend keywords: hidden search terms in KDP dashboard</li>
              <li>• Strategy: 1 book = 1 keyword cluster focus</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-2">📘 2. Listing Optimization (Conversion Engine)</h3>
            <ul className="space-y-1">
              <li>• Title formula: Character + Adventure + Landmark + Emotional Hook</li>
              <li>• Subtitle: age range + learning benefit + curiosity trigger</li>
              <li>• Description: story + benefits + parent reassurance + bundle CTA</li>
              <li>• A+ Content: character visuals + series map + reviews</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-2">📈 3. Ranking Algorithm Strategy</h3>
            <ul className="space-y-1">
              <li>• Amazon ranks based on: sales velocity + conversion rate + reviews</li>
              <li>• Focus: 7–10 day launch burst for each book</li>
              <li>• External traffic (TikTok + email) boosts ranking signals</li>
              <li>• Convert visitors fast → improves organic ranking</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-2">💰 4. Pricing + Profit Strategy</h3>
            <ul className="space-y-1">
              <li>• Test price range: $12.99–$16.99</li>
              <li>• Higher price = better royalty margin + premium positioning</li>
              <li>• Bundle offers handled off-Amazon (higher margin)</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-2">⭐ 5. Review Growth System (Ethical)</h3>
            <ul className="space-y-1">
              <li>• Insert review request inside book (end page)</li>
              <li>• Email verified buyers post-purchase</li>
              <li>• ARC readers (advance copies to parents/teachers)</li>
              <li>• Goal: early 20–50 reviews per title for ranking lift</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-2">🚀 6. Launch Plan (7–14 Days)</h3>
            <ul className="space-y-1">
              <li>Day 1–3: email list + influencers + soft launch</li>
              <li>Day 4–7: TikTok + Amazon ads + review pushes</li>
              <li>Day 8–14: sustain sales velocity + retargeting ads</li>
              <li>Goal: trigger Amazon ranking algorithm momentum</li>
            </ul>
          </div>

        </div>
      </section>

      {/* 🎯 TIKTOK VIRAL TRAFFIC SYSTEM */}
      <section className="py-12 px-6 bg-white text-sm text-gray-700">
        <h2 className="text-xl font-semibold mb-4">🎯 TikTok Viral Traffic System</h2>

        <ul className="space-y-2">
          <li>• Hook formula: "A dog solves mysteries in London…" (pattern interrupt)</li>
          <li>• Content types:</li>
          <li>&nbsp;&nbsp;– Read-aloud clips (15–30 sec)</li>
          <li>&nbsp;&nbsp;– “Which book should I read next?” polls</li>
          <li>&nbsp;&nbsp;– Behind-the-scenes character storytelling</li>
          <li>• Posting cadence: 2–3 videos/day per book launch</li>
          <li>• CTA: “Comment DELILAH to get free activity pack”</li>
          <li>• Conversion goal: drive to Amazon + email signup funnel</li>
        </ul>
      </section>

      {/* 🏫 SCHOOL OUTREACH DOMINATION PACK */}
      <section className="py-12 px-6 bg-white text-sm text-gray-700">
        <h2 className="text-xl font-semibold mb-4">🏫 School Outreach Domination Pack</h2>

        <ul className="space-y-2">
          <li>• Target list: elementary schools, PTAs, literacy coordinators</li>
          <li>• Cold email subject lines:</li>
          <li>&nbsp;&nbsp;– "A new London adventure series for ages 4–8"</li>
          <li>&nbsp;&nbsp;– "Boost reading confidence with Delilah & Friends"</li>
          <li>• Outreach sequence:</li>
          <li>&nbsp;&nbsp;– Email 1: introduction + story value</li>
          <li>&nbsp;&nbsp;– Email 2: classroom benefits + testimonials</li>
          <li>&nbsp;&nbsp;– Email 3: bulk pricing + author visit offer</li>
          <li>• Assets:</li>
          <li>&nbsp;&nbsp;– printable order form</li>
          <li>&nbsp;&nbsp;– teacher activity guide</li>
          <li>&nbsp;&nbsp;– school bundle pricing sheet</li>
        </ul>
      </section>

      {/* 📊 AMAZON KEYWORD SHEETS SYSTEM */}
      <section className="py-12 px-6 bg-white text-sm text-gray-700">
        <h2 className="text-xl font-semibold mb-4">📊 Amazon Keyword Sheet System</h2>

        <ul className="space-y-2">
          <li>• Book 1 cluster: London landmarks + early reader + animal adventure</li>
          <li>• Book 2 cluster: government buildings + mystery + kids picture book</li>
          <li>• Book 3 cluster: museums + educational + STEM curiosity</li>
          <li>• Backend keywords:</li>
          <li>&nbsp;&nbsp;– “read aloud bedtime story children”</li>
          <li>&nbsp;&nbsp;– “fun educational books ages 4–8”</li>
          <li>&nbsp;&nbsp;– “animal adventure picture books”</li>
          <li>• Rule: 1 book = 1 dominant keyword cluster</li>
          <li>• Optimization cycle: update keywords every 90 days based on sales data</li>
        </ul>
      </section>

      {/* FOOTER */}
      {/* 📅 30-DAY TIKTOK CONTENT CALENDAR */}
      <section className="py-12 px-6 bg-white text-sm text-gray-700">
        <h2 className="text-xl font-semibold mb-4">📅 30-Day TikTok Content Calendar</h2>

        <ul className="space-y-2">
          <li>Week 1: Character intro + Delilah personality clips (daily hook variations)</li>
          <li>Week 2: Read-aloud storytelling (1 book per day, 15–30 sec clips)</li>
          <li>Week 3: Interactive content (polls: “Which adventure next?”)</li>
          <li>Week 4: Emotional hooks (parents, learning benefits, bedtime stories)</li>
          <li>Daily CTA: “Comment DELILAH for free activity pack”</li>
          <li>Goal: drive email signups + Amazon clicks + brand recognition</li>
        </ul>
      </section>

      {/* 🏫 SCHOOL CONTACT SYSTEM */}
      <section className="py-12 px-6 bg-white text-sm text-gray-700">
        <h2 className="text-xl font-semibold mb-4">🏫 School Contact System (Execution Kit)</h2>

        <ul className="space-y-2">
          <li>• Database fields: school name, principal, email, PTA contact, location</li>
          <li>• Sources: school websites, district directories, PTA lists</li>
          <li>• Outreach stack:</li>
          <li>&nbsp;&nbsp;– Cold Email 1: introduction + series hook</li>
          <li>&nbsp;&nbsp;– Cold Email 2: benefits + literacy improvement</li>
          <li>&nbsp;&nbsp;– Cold Email 3: bulk pricing + author visit</li>
          <li>• Conversion asset: printable order form + teacher guide PDF</li>
          <li>• Follow-up cadence: 3 emails over 10 days + 1 final check-in</li>
        </ul>
      </section>

      {/* 🚀 AMAZON LAUNCH BLUEPRINT PER BOOK */}
      <section className="py-12 px-6 bg-white text-sm text-gray-700">
        <h2 className="text-xl font-semibold mb-4">🚀 Amazon Launch Blueprint (Per Book)</h2>

        <ul className="space-y-2">
          <li>Pre-Launch (7 days): build email list + teaser TikToks</li>
          <li>Day 1: coordinated email blast + Amazon push</li>
          <li>Day 2–3: TikTok daily posts + influencer seeding</li>
          <li>Day 4–7: review generation + Amazon ads optimization</li>
          <li>Day 8–14: sustain sales velocity + retargeting</li>
          <li>Goal: trigger Amazon ranking algorithm momentum spike</li>
        </ul>
      </section>

      {/* FOOTER */}
      $1

      {/* 📘 OPTIMIZED AMAZON LISTINGS PER BOOK */}
      <section className="py-12 px-6 bg-white text-sm text-gray-700">
        <h2 className="text-xl font-semibold mb-4">📘 Optimized Amazon Listings Per Book</h2>

        <div className="space-y-8">

          <div>
            <h3 className="font-bold mb-2">🏰 Book 1: Buckingham Palace Adventure</h3>
            <ul className="space-y-1">
              <li><strong>Title:</strong> Delilah & Friends: The Buckingham Palace Adventure</li>
              <li><strong>Subtitle:</strong> A Magical London Dog Adventure for Early Readers Ages 4–8</li>
              <li><strong>Description:</strong> A curious dachshund explores Buckingham Palace, solving gentle mysteries and discovering friendship, bravery, and London history.</li>
              <li><strong>Keywords:</strong> London books for kids, Buckingham Palace story, early reader adventure, dog picture book</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-2">🏛️ Book 2: 10 Downing Street Adventure</h3>
            <ul className="space-y-1">
              <li><strong>Title:</strong> Delilah & Friends: The 10 Downing Street Adventure</li>
              <li><strong>Subtitle:</strong> A Fun Political Landmark Story for Kids Ages 4–8</li>
              <li><strong>Description:</strong> Delilah explores the home of the UK Prime Minister, uncovering lighthearted mysteries and learning how leadership works.</li>
              <li><strong>Keywords:</strong> kids political books, London landmarks story, early reader UK, educational picture book</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-2">🎡 Book 3: London Eye Adventure</h3>
            <ul className="space-y-1">
              <li><strong>Title:</strong> Delilah & Friends: The London Eye Adventure</li>
              <li><strong>Subtitle:</strong> A High-Flying London Landmark Story for Curious Kids</li>
              <li><strong>Description:</strong> Delilah rides the London Eye and discovers how perspective changes everything in this uplifting adventure.</li>
              <li><strong>Keywords:</strong> London Eye book for kids, travel picture book, early reader adventure, educational kids story</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-2">🦖 Book 4: Natural History Museum Adventure</h3>
            <ul className="space-y-1">
              <li><strong>Title:</strong> Delilah & Friends: The Natural History Museum Adventure</li>
              <li><strong>Subtitle:</strong> A Dinosaur-Filled Learning Adventure for Ages 4–8</li>
              <li><strong>Description:</strong> Delilah explores dinosaurs, fossils, and science exhibits in a fun, educational museum journey.</li>
              <li><strong>Keywords:</strong> dinosaur books for kids, museum adventure story, STEM kids book, early learning picture book</li>
            </ul>
          </div>

        </div>
      </section>
    </div>
  );
}
