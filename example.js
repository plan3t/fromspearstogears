ServerEvents.recipes(event => {

  event.remove({ output: 'createcobblestone:mechanical_generator' })
  event.shaped(
    'createcobblestone:mechanical_generator',
    [
      'beb',
      'wil',
      'ccc'
    ],
    {
      b: 'create:brass_ingot',
      e: 'create:electron_tube',
      w: 'minecraft:water_bucket',
      i: 'minecraft:iron_block',
      l: 'minecraft:lava_bucket',
      c: 'create:brass_casing'
    }
  )

  const CARBIDE_BLOCK = 'superbwarfare:cemented_carbide_block'
  event.replaceInput({ mod: 'createoreexcavation' }, 'create:mechanical_drill', CARBIDE_BLOCK)

  // =========================================================
  // Create processing recipes
  // =========================================================

  // Crushing deepslate => galena + scheelite + nickel ore (chance)
  event.recipes.create.crushing(
    [
      Item.of('superbwarfare:galena').withChance(0.10),
      Item.of('superbwarfare:scheelite').withChance(0.10),
      Item.of('tfmg:deepslate_nickel_ore').withChance(0.10)
    ],
    'minecraft:deepslate'
  )

  event.recipes.create.splashing(
    [
      Item.of('create:crushed_raw_silver').withChance(0.10),
      Item.of('antiquelegacy:tin_nugget').withChance(0.10)
    ],
    'minecraft:clay_ball'
  )

  event.recipes.create.compacting(
    'minecraft:cobbled_deepslate',
    ['minecraft:cobblestone', 'minecraft:cobblestone', 'minecraft:cobblestone', 'minecraft:cobblestone']
  )
  // !!! NEW !!!
  // =========================================================
  // TFMG: Fireclay via Haunting
  // =========================================================
  // Clay Ball -> Fireclay Ball
  event.recipes.create.haunting('tfmg:fireclay_ball', 'minecraft:clay_ball')

  // =========================================================
  // TFMG: Wash Fireclay Ball -> Bauxite + Raw Lithium
  // =========================================================
  event.recipes.create.splashing(
    [
      Item.of('tfmg:bauxite').withChance(0.10),
      Item.of('tfmg:raw_lithium').withChance(0.10)
    ],
    'tfmg:fireclay_ball'
  )

  // =========================================================
  // Dragonrise Reforge Chinese Armor recipes 
  // =========================================================
  const CARBIDE_PIECE = 'superbwarfare:cemented_carbide'

  event.remove({ output: 'dragonrise_reforge:cnchest' })
  event.remove({ output: 'dragonrise_reforge:cnfast' })

  // Armor (cnchest): 8x carbide + red dye in top-middle
  event.shaped('dragonrise_reforge:cnchest', [
    'CDC',
    'CCC',
    'CCC'
  ], {
    C: CARBIDE_PIECE,
    D: 'minecraft:red_dye'
  })

  // Helmet (cnfast): 5x carbide + red dye in middle row center
  event.shaped('dragonrise_reforge:cnfast', [
    'CCC',
    'CDC',
    '   '
  ], {
    C: CARBIDE_PIECE,
    D: 'minecraft:red_dye'
  })

})
