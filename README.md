# fromspearstogears – KubeJS Recipe Tweaks

This repo contains a KubeJS script used on the **fromspearstogears** modded Minecraft server to tweak and add recipes for Create-based progression and a few mod integrations.

---

## ✅ What this does (overview)

- Changes the **Create Cobblestone Mechanical Generator** crafting recipe
- Replaces **Create Ore Excavation** Mechanical Drill requirements with **Cemented Carbide Block**
- Adds/adjusts Create processing recipes:
  - Deepslate crushing yields Galena, Scheelite, and Nickel ore (chance)
  - Clay ball washing yields Silver and Tin (chance)
  - Cobblestone compacting yields Cobbled Deepslate
- Adds a TFMG chain for “no new chunks” servers:
  - Haunt Clay Balls → Fireclay Balls
  - Wash Fireclay Balls → Bauxite + Raw Lithium (chance)
- Adds recipes for Dragonrise Reforge armor parts

---

## 📦 Installation

1. Download or clone this repo.
2. Copy the script into your server (or singleplayer instance):

   `kubejs/server_scripts/recipes.js`

3. Restart your server (recommended on Mohist/hybrid servers).

> Tip: Some setups can reload via `/reload`, but a full restart is the most reliable.

---

## 🔎 How to verify in-game

Use **JEI**:
- Search the output item
- Press **R** to view the recipe
- Confirm the inputs match what’s listed below

---

# 🧱 Create Cobblestone

## Create Cobblestone Mechanical Generator (`createcobblestone:mechanical_generator`)

**Crafting (3×3):**

|   |   |   |
|---|---|---|
| Brass Ingot | Electron Tube | Brass Ingot |
| Water Bucket | Iron Block | Lava Bucket |
| Brass Casing | Brass Casing | Brass Casing |

---

# ⛏️ Create Ore Excavation

## What changed

Anywhere **Create Ore Excavation** recipes used a **Create Mechanical Drill** (`create:mechanical_drill`), it is now replaced with:

✅ **Cemented Carbide Block** (`superbwarfare:cemented_carbide_block`)

### Affects at least
- Sample Drill
- Drilling Machine
- Extractor

### How to check
Open JEI → search each machine → press **R** and confirm the ingredient is the **carbide block** (not the drill).

---

# ⚙️ Create (Processing / Machines)

## Deepslate Crushing → Galena / Scheelite / Nickel Ore

**Machine:** Crushing Wheels  
**Input:** `minecraft:deepslate`  
**Outputs (chance):**
- `superbwarfare:galena` (10%)
- `superbwarfare:scheelite` (5%)
- `tfmg:deepslate_nickel_ore` (6%)

**How to run it:** Feed Deepslate through Crushing Wheels  
(belt → wheels → output to chest).

---

## Clay Ball Washing → Silver / Tin

**Process:** Splashing/Washing (Encased Fan blowing through water)  
**Input:** `minecraft:clay_ball`  
**Outputs (chance):**
- `create:crushed_raw_silver` (10%)
- `antiquelegacy:tin_nugget` (10%)

**Typical setup:** belt/depot → Encased Fan → water stream → collection chest.

---

## Compacting → Cobbled Deepslate

**Input:** 4× `minecraft:cobblestone`  
**Output:** `minecraft:cobbled_deepslate`

**How to run it:** Basin + Mechanical Press  
Put 4 cobblestone into the basin and press it.

---

# 🏭 Create: The Factory Must Grow (TFMG)

This server cannot generate new chunks (Overworld/Nether), so some worldgen resources are made obtainable via Create processing.

## Step 1: Clay Ball → Fireclay Ball (Haunting)

**Process:** Haunting (Encased Fan blowing through Soul Fire / Soul Campfire)  
**Input:** `minecraft:clay_ball`  
**Output:** `tfmg:fireclay_ball`

**Setup idea:** belt/depot with clay balls → Encased Fan air stream through Soul Fire → output.

---

## Step 2: Wash Fireclay Ball → Bauxite + Raw Lithium

**Process:** Splashing/Washing (fan through water)  
**Input:** `tfmg:fireclay_ball`  
**Outputs (chance):**
- `tfmg:bauxite` (8%)
- `tfmg:raw_lithium` (3%)

**Meaning:** This is a “loot-table style” wash. Run lots of Fireclay Balls through a washing line to slowly accumulate Bauxite + Raw Lithium.

**Simple automation flow:**
1. Make Fireclay Balls in bulk (haunting line)
2. Feed them into a washing line (fan + water)
3. Collect outputs using funnels into a chest  
   (use brass funnels + filters if you want to separate outputs)

---

# 🛡️ Dragonrise Reforge

## Armor / Chest (`dragonrise_reforge:cnchest`)

**8× Cemented Carbide + 1× Red Dye (top-middle):**

|   |   |   |
|---|---|---|
| C | D | C |
| C | C | C |
| C | C | C |

Legend:
- **C** = `superbwarfare:cemented_carbide`
- **D** = `minecraft:red_dye`

---

## Helmet (`dragonrise_reforge:cnfast`)

**5× Cemented Carbide + 1× Red Dye (middle row center):**

|   |   |   |
|---|---|---|
| C | C | C |
| C | D | C |
|   |   |   |

Legend:
- **C** = `superbwarfare:cemented_carbide`
- **D** = `minecraft:red_dye`

---

## 🧰 Troubleshooting

- Recipe not showing in JEI?
  - Restart the server
  - Check console/logs for KubeJS errors
  - Ensure the file path is correct: `kubejs/server_scripts/recipes.js`

---

## License

Use/share freely with friends. If you want an explicit license, add **MIT** or **Unlicense**.
