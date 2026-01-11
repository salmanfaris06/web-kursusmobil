# Product Requirements Document (PRD): NASYA Driving School Web

| Project Name | **NASYA Driving School Web** |
| :--- | :--- |
| **Status** | Ready for Development |
| **Target Launch** | ASAP (2 Weeks Sprint) |
| **Owner** | Product Manager |
| **Last Updated** | January 11, 2026 |

---

## 1. One Pager Summary
### Overview
A static, high-performance marketing website for **NASYA**, a Jambi-based driving school. The site serves as a digital brochure to answer repetitive inquiries and funnel prospective students directly to WhatsApp for booking.

### Problem Statement
* **Operational Bottleneck:** The admin/owner spends excessive time manually answering repetitive pre-sales questions via chat/phone (e.g., "How much?", "Is it manual or matic?", "Where is the office?").
* **Information Friction:** Potential students hesitate to register because they cannot find transparent information instantly online, leading to lost leads.

### Objectives
* **Primary:** Increase the number of new student registrations (qualified leads) for NASYA via WhatsApp.
* **Secondary:** Drastically reduce the time spent by admin on answering basic FAQs by providing all details (Packages, SIM Guarantee, Pick-up Service) upfront.

### Constraints
* **Type:** Static Website (Landing Page).
* **No Backend:** No user login/database required.
* **Budget/Speed:** Cost-effective and fast deployment.

### Target Persona
* **"The Aspiring Driver":** Youth (students) or adults in Jambi looking to get a license. They value convenience (pick-up service), certainty (SIM guarantee), and instructor experience.
* **"The Parent":** Parents looking for a safe, experienced (10+ years) driving course for their children.

---

## 2. Functional Requirements (Features In)
These are the mandatory features for the MVP (Minimum Viable Product).

### 2.1. Hero Section & Value Proposition
* **Headline:** Strong branding statement (e.g., "Kursus Mengemudi NASYA Jambi - Cepat, Aman, Terpercaya").
* **Key USPs:** Visibly highlight:
    * Pick-up & Drop-off Service (Antar-Jemput).
    * SIM Guarantee (Jaminan SIM).
    * 10+ Years Experienced Instructors.
* **Primary Call-to-Action (CTA):** "Daftar NASYA Sekarang" button linking directly to WhatsApp.

### 2.2. Packages & Pricing Information
* Display 4 clear card options for users to compare:
    * **Paket Manual - Basic:** 4x Meetings (Duration per meeting to be defined).
    * **Paket Manual - Pro:** 8x Meetings (Recommended for beginners).
    * **Paket Matic - Basic:** 4x Meetings (Duration per meeting to be defined).
    * **Paket Matic - Pro:** 8x Meetings (Recommended for beginners).
* **Transparency:** Clearly state the price for each package and inclusions (e.g., gas, instructor fee, car usage).

### 2.3. Testimonials (Social Proof)
* A dedicated section displaying quotes/reviews from past NASYA students to build trust.
* *Content Requirement:* Owner to provide 3-5 initial text reviews (and photos of successful students if available).

### 2.4. Location & Contact
* **Google Maps Embed:** Interactive map showing the NASYA practice location/office in Jambi.
* **Contact Info:** WhatsApp number prominently displayed.

### 2.5. Floating Action Button (FAB)
* A "WhatsApp" icon that stays fixed on the bottom right corner of the screen as the user scrolls, ensuring easy contact at any time regardless of scroll position.

---

## 3. Features Out (Scope Limits)
To ensure fast delivery and low cost, the following are explicitly **EXCLUDED** from this phase:
* **User Login/Registration:** No database needed.
* **Online Payment Gateway:** Payments will be handled manually via WhatsApp/Bank Transfer.
* **Real-time Schedule Booking:** Scheduling is done via chat negotiation.

---

## 4. Design & User Experience (UX)
### 4.1. Visual Identity
* **Dominant Color:** Blue (Represents Trust, Safety, and Professionalism).
* **Logo Strategy:** Use a clean, bold **Text Logo** reading **"NASYA"** (Sans-serif font recommended for a modern look).
* **Style:** Clean, spacious, and high readability.

### 4.2. Mobile-First Approach
* **Responsive Design:** The site must automatically adjust to fit mobile screens perfectly.
* **Load Speed:** Optimized for fast loading on mobile data connections (critical for Jambi market).

---

## 5. Technical Considerations
* **Tech Stack:** Static HTML/CSS (or a simple builder like WordPress/Carrd/Webflow).
* **Hosting:** Netlify / Vercel / GitHub Pages (Free tier is sufficient for static sites).
* **Domain:** A local domain (e.g., `nasya-driving.com` or `.id`) is recommended for SEO credibility.

---

## 6. Success Metrics (KPIs)
We will measure success based on conversion, not just traffic.
* **Main Metric:** **WhatsApp CTR (Click-Through Rate).**
    * *Formula:* (Total Clicks on WA Button / Total Website Visitors) * 100%.
    * *Goal:* >15% conversion rate.

---

## 7. Go-to-Market (GTM) Strategy
* **Social Media Integration:** Place the website link in the NASYA Instagram Bio and TikTok Profile.
* **Google Business Profile:** Update the existing Google Maps listing with the new website link to capture local search traffic.
* **WhatsApp Auto-reply:** Set the WA Auto-reply to direct people to the website for "Full Price List & Info".

---

## 8. Open Issues / Q&A
* **Content Preparation:** Owner needs to prepare the exact PRICE (Rp) for the 4 packages above before development starts.
* **Visual Assets:** Owner needs to provide high-quality photos of the cars/instructors to replace stock placeholders.
* **Timeline:** Development to start immediately upon approval of this document.
