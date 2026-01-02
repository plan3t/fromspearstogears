## fromspearstogears

#Create Cobblestone
Mechanical Generator (createcobblestone:mechanical_generator)

Crafting (3×3):

[ Brass Ingot ] [ Electron Tube ] [ Brass Ingot ]
[ Water Bucket ] [ Iron Block   ] [ Lava Bucket  ]
[ Brass Casing ] [ Brass Casing ] [ Brass Casing ]

#Create Ore Excavation
What changed

Anywhere Create Ore Excavation recipes used a Create Mechanical Drill, it’s now replaced with:

Cemented Carbide Block (superbwarfare:cemented_carbide_block)

This affects at least:

Sample Drill

Drilling Machine

Extractor

How to check in-game: open JEI → search each machine → press R and confirm the ingredient is the carbide block (not the drill).

#Create (Processing / Machines)
Deepslate Crushing → Galena / Scheelite / Nickel Ore

Machine: Crushing Wheels
Input: minecraft:deepslate
Outputs (chance):

superbwarfare:galena (10%)

superbwarfare:scheelite (5%)

tfmg:deepslate_nickel_ore (6%)

How to run it: feed Deepslate through Crushing Wheels (belt → wheels → output to chest).

Clay Ball Washing → Silver / Tin

Process: Splashing/Washing via Encased Fan through water 

Input: minecraft:clay_ball
Outputs (chance):

create:crushed_raw_silver (10%)

antiquelegacy:tin_nugget (10%)

Typical setup: belt/depot with items → Encased Fan blowing through a water source toward the items. 

Compacting → Cobbled Deepslate

Input: 4× minecraft:cobblestone
Output: minecraft:cobbled_deepslate

How to run it: put a Basin down, place a Mechanical Press above it, and insert the 4 cobblestone into the basin. The press applies compacting when a basin is underneath. 

#Create: The Factory Must Grow (TFMG)
Step 1: Clay Ball → Fireclay Ball (Haunting)

Process: Haunting via Encased Fan through Soul Fire 

Input: minecraft:clay_ball
Output: tfmg:fireclay_ball (your custom recipe)

Setup idea: belt/depot with clay balls → Encased Fan blowing air stream through Soul Fire / Soul Campfire into the items. 

(Reference: TFMG lists Fireclay Ball as tfmg:fireclay_ball.) 
tfmg.miraheze.org

Step 2: Wash Fireclay Ball → Bauxite + Raw Lithium

Process: Splashing/Washing (fan through water) 

Input: tfmg:fireclay_ball
Outputs (chance):

tfmg:bauxite (8%)

tfmg:raw_lithium (3%) (as you confirmed)

What this means practically: this is a “loot-table style” wash — you’ll run lots of Fireclay Balls through a washing line and slowly accumulate Bauxite + Raw Lithium.

Automation tip (simple):

Make Fireclay Balls in bulk (haunting line).

Feed them into a washing line (fan + water).

Collect outputs with funnels into a chest (or use brass funnels + filters if you want to separate outputs cleanly).

#Dragonrise Reforge
Armor / Chest (dragonrise_reforge:cnchest)

8× Cemented Carbide + 1× Red Dye (top-middle):

[ C ] [ D ] [ C ]
[ C ] [ C ] [ C ]
[ C ] [ C ] [ C ]


Legend:

C = superbwarfare:cemented_carbide (your “piece”)

D = minecraft:red_dye

Helmet (dragonrise_reforge:cnfast)

5× Cemented Carbide + 1× Red Dye (middle row center):

[ C ] [ C ] [ C ]
[ C ] [ D ] [ C ]
[   ] [   ] [   ]
