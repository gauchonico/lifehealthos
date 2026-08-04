// Real BIP / CHIP dashboard showcases, keyed by solution slug.
// All screenshots use demonstration data only — no real patient or staff information.

export const SOLUTION_DASHBOARDS = {
  "hospitals": {
    title: "Real Hospital Intelligence — Live In Production",
    description: "Actual BIP-CHIP dashboards running for hospital systems today: operations, departments, revenue, and inventory on unified screens.",
    dashboards: [
      {
        name: "Hospital CHIP Dashboard",
        caption: "A full hospital command center: every department's activity, bed capacity, and disease surveillance on one screen, mapped in real time.",
        image: "https://media.base44.com/images/public/6a554b016ff6fa6eb6e63b81/ba13195fb_HospitalCHIPDashboard.png",
        highlights: [
          { title: "Department-level analytics", description: "Live visit counts across every department — lab, radiology, cardiology, dental, pharmacy, geriatrics, and more." },
          { title: "Bed & capacity management", description: "Total beds, in use, and available at a glance, so operations always know their headroom." },
          { title: "Geospatial patient mapping", description: "Facility and patient activity plotted on a live map for catchment-area visibility." },
          { title: "Disease surveillance", description: "Real-time breakdowns for COVID-19, malaria, stroke, typhoid, SARI, and other conditions." },
        ],
      },
      {
        name: "Hospital Inventory & Revenue Dashboard",
        caption: "Financial and supply-chain intelligence: revenue per hospital unit, admissions and discharges, low-stock alerts, and drugs approaching expiry.",
        image: "https://media.base44.com/images/public/6a554b016ff6fa6eb6e63b81/163e2d073_Screenshot2026-07-17111409.png",
      },
    ],
  },

  "ministry-of-health": {
    title: "Government-Scale Visibility — Live In Production",
    description: "Real district and county dashboards giving governments a single view of every facility, service, and regulated outlet in their jurisdiction.",
    dashboards: [
      {
        name: "District Health Facilities Dashboard",
        caption: "47 health facilities in one view: OPD attendances, deliveries, immunization coverage, maternal outcomes, and facility-level drill-downs on a live map.",
        image: "https://media.base44.com/images/public/6a554b016ff6fa6eb6e63b81/80f6caf08_Screenshot2026-07-17105349.png",
      },
      {
        name: "County Master Dashboard",
        caption: "Beyond health: one county command center spanning health services, trade, agriculture, education, and water — cross-departmental intelligence for county leadership.",
        image: "https://media.base44.com/images/public/6a554b016ff6fa6eb6e63b81/acdd768a2_TZGOVDB.png",
      },
      {
        name: "LIFE RX — Drugshops & Pharmacies Registry",
        caption: "999 pharmacies and drugshops mapped for a capital-city authority: ownership, inventory systems, supervisor qualifications, and vaccination capability.",
        image: "https://media.base44.com/images/public/6a554b016ff6fa6eb6e63b81/657d3a431_Screenshot2026-07-17111330.png",
      },
      {
        name: "County Maternal Health BIP",
        caption: "The full maternal journey at county scale: antenatal visits, HIV and syphilis testing, labour & delivery outcomes, and post-natal follow-up — with individual case drill-downs.",
        image: "https://media.base44.com/images/public/6a554b016ff6fa6eb6e63b81/8b473d46b_TranzoiaMaternalDB.png",
      },
    ],
  },

  "community-health": {
    title: "Community Health Intelligence — Live In Production",
    description: "Real dashboards tracking village health teams and community-level screening programs across entire districts.",
    dashboards: [
      {
        name: "Village Health Teams Dashboard",
        caption: "1,300+ VHTs tracked in real time: service delivery modes, funding sources, equipment and medication carried, and HIV/TB/malaria testing coverage.",
        image: "https://media.base44.com/images/public/6a554b016ff6fa6eb6e63b81/6124a4097_VillageHealthTeamBase.png",
      },
      {
        name: "Community Screening Sandbox",
        caption: "Population-level screening results — sickle cell, blood pressure, glucose, hepatitis, syphilis, and more — mapped by village and age bracket.",
        image: "https://media.base44.com/images/public/6a554b016ff6fa6eb6e63b81/81985e94b_Screenshot2026-07-17105853.png",
      },
      {
        name: "Community Mental Health Dashboard",
        caption: "A live mental health program view: disorders, triggers, stigma, therapy and medication status — anonymized participant-level data mapped by parish and village.",
        image: "https://media.base44.com/images/public/6a554b016ff6fa6eb6e63b81/e6eeac82c_MentalHealthDashboard.png",
      },
      {
        name: "VHT Deep Dive — Medical Equipment",
        caption: "1,274 VHT equipment records: what each team carries, functional status, replacement frequency, and satisfaction — down to the individual worker.",
        image: "https://media.base44.com/images/public/6a554b016ff6fa6eb6e63b81/95b2dfa5b_VHTdeepDiveEquipment.png",
      },
      {
        name: "VHT Deep Dive — Medication",
        caption: "Medication carried by every village health team: drug types, generic vs original, expiry status, and coverage gaps across the district.",
        image: "https://media.base44.com/images/public/6a554b016ff6fa6eb6e63b81/f2d836f1d_VHTDeepDiveMedication.png",
      },
      {
        name: "VHT Deep Dive — Qualifications",
        caption: "Workforce qualifications at a glance: education levels, training received, appointment history, and how each VHT was selected by their community.",
        image: "https://media.base44.com/images/public/6a554b016ff6fa6eb6e63b81/eb15772ed_VHTQualifications.png",
      },
    ],
  },

  "disease-care": {
    title: "Disease Program Dashboards — Live In Production",
    description: "Real dashboards powering disease-focused programs and health associations, from national networks to condition-specific treatment tracking.",
    dashboards: [
      {
        name: "National Health Association Network Dashboard",
        caption: "319 member organizations tracked against national program indicators — ART coverage, HIV positivity, service capabilities — with live target-vs-current scoring.",
        image: "https://media.base44.com/images/public/6a554b016ff6fa6eb6e63b81/98a6cf236_Screenshot2026-07-17105711.png",
      },
      {
        name: "Sickle Cell Program Dashboard",
        caption: "Anonymized participant-level sickle cell tracking: disease type, complications, transfusion scheduling, medication allergies, and quality-of-life measures.",
        image: "https://media.base44.com/images/public/6a554b016ff6fa6eb6e63b81/e0eaf6ab4_Screenshot2026-07-17105913.png",
      },
      {
        name: "Sickle Cell Treatment Capacity Dashboard",
        caption: "Facility readiness for sickle cell care across a district: hematologists, transfusion services, genetic counselling, and availability of key medications.",
        image: "https://media.base44.com/images/public/6a554b016ff6fa6eb6e63b81/2a76b0d4b_Screenshot2026-07-17105446.png",
      },
    ],
  },

  "clinical-research": {
    title: "Clinical Trial Oversight — Live In Production",
    description: "Real dashboards giving sponsors, grantors, and investigators live visibility into multi-site trials.",
    dashboards: [
      {
        name: "Master Grantor Dashboard",
        caption: "A funder's view across 5 clinical trials and their hospital sites: recruitment status, regulatory compliance, lab capability, cold-chain, and site readiness.",
        image: "https://media.base44.com/images/public/6a554b016ff6fa6eb6e63b81/4460ff7b1_Screenshot2026-07-17105957.png",
      },
      {
        name: "Trial Participants Dashboard",
        caption: "3.9k anonymized trial participants tracked live: inclusion criteria, adverse effects, therapies administered, and demographic breakdowns across the region.",
        image: "https://media.base44.com/images/public/6a554b016ff6fa6eb6e63b81/8ba72ed71_Screenshot2026-07-17110324.png",
      },
      {
        name: "Trial Site Profile — Sickle Cell Clinical Trial BIP",
        caption: "A single-site deep dive: study registration details, enrollment progress, and a full facility-readiness checklist from refrigeration to restricted access.",
        image: "https://media.base44.com/images/public/6a554b016ff6fa6eb6e63b81/2c10af478_SickleCellClinicalTrialDB.png",
      },
      {
        name: "Trial Medical Staff Dashboard",
        caption: "Site workforce readiness: GCP and IATA training status, certifications, sickle cell trial experience, and data-management compliance for all 32 staff.",
        image: "https://media.base44.com/images/public/6a554b016ff6fa6eb6e63b81/18b7c806f_Screenshot2026-07-17110424.png",
      },
    ],
  },

  "laboratories": {
    title: "Laboratory Network Intelligence — Live In Production",
    description: "A real district-wide laboratory dashboard mapping every lab, its information systems, and its equipment.",
    dashboards: [
      {
        name: "District Laboratories Dashboard",
        caption: "47 health facilities and their labs in one view: lab information systems in use, machine types, and satisfaction tracking — with facility-level contacts and mapping.",
        image: "https://media.base44.com/images/public/6a554b016ff6fa6eb6e63b81/20f2d5107_Screenshot2026-07-17105613.png",
      },
    ],
  },

  "insurance": {
    title: "Payer Network Intelligence — Live In Production",
    description: "A real payer dashboard mapping the full provider network and claims activity by facility type.",
    dashboards: [
      {
        name: "Health Insurance Network Dashboard",
        caption: "Every network pharmacy, facility, and clinician mapped, with claim values broken down by provider type — plus one-click telehealth and webinar launch.",
        image: "https://media.base44.com/images/public/6a554b016ff6fa6eb6e63b81/ebf4725d9_WakandaInsurance.png",
      },
    ],
  },
};