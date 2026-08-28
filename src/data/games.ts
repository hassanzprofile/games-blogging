import { GameProduct } from '../types';

export const GAMES_DATA: GameProduct[] = [
  {
    id: 'cyber-warzone-2099',
    title: 'Cyber Warzone 2099',
    slug: 'cyber-warzone-2099',
    genre: 'Battle Royale',
    tagline: 'Futuristic 100-Player Cyberpunk Urban Survival',
    description: 'Drop into Neo-Tokyo 2099 with plasma weapons, jetpack maneuvering, and tactical cybernetic augmentations in high-octane 100-player battles.',
    longDescription: 'Cyber Warzone 2099 reinvents tactical Battle Royale gaming. Master 12 cyber-augmented classes, hack enemy turrets in real-time, unleash orbital EMP strikes, and dominate dynamic vertical skyscrapers. Powered by high-fidelity 60FPS mobile rendering and zero pay-to-win mechanics.',
    rating: 4.9,
    totalRatingsCount: 184200,
    downloadsCount: '50M+',
    downloadsExact: 54291000,
    releaseYear: '2025',
    developer: 'Aetheria Interactive',
    publisher: 'Nexus Cyberworks',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.activision.callofduty.warzone',
    posterImage: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
    heroBanner: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1920&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?auto=format&fit=crop&w=1200&q=80'
    ],
    tags: ['Cyberpunk', '100 Players', 'Jetpack Combat', '60 FPS', 'Cross-Play'],
    features: [
      'Seamless 120Hz high refresh rate support',
      '12 Cybernetic Hero Classes with unique ultimate abilities',
      'Dynamic weather system: Neon Rain, Magnetic Storms, EMP Fog',
      'Squad voice chat with noise cancellation',
      'Cross-platform cloud progression'
    ],
    systemRequirements: {
      os: 'Android 10.0+ / iOS 14.0+',
      ram: '6 GB minimum (8 GB recommended)',
      storage: '4.2 GB free space',
      graphics: 'Adreno 640 / Mali-G77 or Apple A13 Bionic'
    },
    reviews: [
      {
        id: 'rev-1',
        userName: 'Alex "Vapor" Mercer',
        userAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
        gamerTag: 'VAPOR_X9',
        rating: 5,
        date: 'August 2, 2026',
        title: 'Best mobile BR ever created!',
        comment: 'The graphics and jetpack mechanics are mind-blowing on mobile. Frame rates never dip even in intense skyscraper firefights. Highly recommended!',
        helpfulCount: 342,
        isVerifiedGamer: true,
        platformPlayed: 'Mobile'
      },
      {
        id: 'rev-2',
        userName: 'Elena Rostova',
        userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
        gamerTag: 'CyberVixen',
        rating: 5,
        date: 'July 28, 2026',
        title: 'Zero pay-to-win, 100% pure skill',
        comment: 'Finally a free-to-play game where skill determines victory. Cosmetics look top tier and gunplay feedback is crisp.',
        helpfulCount: 189,
        isVerifiedGamer: true,
        platformPlayed: 'Mobile'
      }
    ],
    heroInteractiveType: 'cyber_weapon',
    themeColor: '#ffffff',
    featuredScore: 99
  },
  {
    id: 'aether-chronicles-rebirth',
    title: 'Aether Chronicles: Rebirth',
    slug: 'aether-chronicles-rebirth',
    genre: 'RPG / MMORPG',
    tagline: 'Vast Open-World Fantasy RPG with Elemental Combat',
    description: 'Explore the continent of Aetheria, summon ancient celestial guardians, and master real-time elemental combos across vast floating islands.',
    longDescription: 'Embark on an epic journey across breathtaking anime-styled realms. Experience seamless co-op boss raids, intricate puzzle dungeons, and deep weapon customization without energy gates or paywalls.',
    rating: 4.8,
    totalRatingsCount: 295100,
    downloadsCount: '100M+',
    downloadsExact: 104820000,
    releaseYear: '2024',
    developer: 'Celestial Studios',
    publisher: 'Aetheria Interactive',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.miHoYo.GenshinImpact',
    posterImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
    heroBanner: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=1920&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80'
    ],
    tags: ['Open World', 'Anime RPG', '4-Player Co-op', 'Elemental Magic', 'Free Exploration'],
    features: [
      '7 Elemental Magic Classes with dynamic reactions',
      'Massive seamless open world with no loading screens',
      '4-Player cross-play multiplayer dungeons',
      'Full orchestra soundtrack recorded in London',
      'Regular 6-week content expansion updates'
    ],
    systemRequirements: {
      os: 'Android 9.0+ / iOS 13.0+',
      ram: '4 GB minimum (6 GB recommended)',
      storage: '8.5 GB free space',
      graphics: 'Adreno 610 / Mali-G52 or Apple A12 Bionic'
    },
    reviews: [
      {
        id: 'rev-4',
        userName: 'Sora Takahashi',
        userAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
        gamerTag: 'CelestiaSora',
        rating: 5,
        date: 'August 4, 2026',
        title: 'Masterpiece open world experience',
        comment: 'The lore, soundtrack, and world design rivals top console games. Combat combo system feels super satisfying.',
        helpfulCount: 512,
        isVerifiedGamer: true,
        platformPlayed: 'Mobile'
      }
    ],
    heroInteractiveType: '3d_hologram',
    themeColor: '#ffffff',
    featuredScore: 98
  },
  {
    id: 'apex-protocol-mobile',
    title: 'Apex Protocol: Mobile',
    slug: 'apex-protocol-mobile',
    genre: 'FPS / Shooter',
    tagline: 'Precision 5v5 Tactical Shooter & Hero Combat',
    description: 'Precision gunplay meets game-changing tactical abilities. Plant or defuse the Quantum Core in intense round-based 5v5 combat.',
    longDescription: 'Apex Protocol Mobile brings console-grade tactical shooter mechanics to your mobile devices. Featuring sub-10ms response input mapping, custom crosshair layouts, spectator esports mode, and global rank leaderboard leagues.',
    rating: 4.8,
    totalRatingsCount: 142000,
    downloadsCount: '25M+',
    downloadsExact: 28940000,
    releaseYear: '2025',
    developer: 'Vanguard Studios',
    publisher: 'Apex Global',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.tencent.ig',
    posterImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80',
    heroBanner: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1920&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1200&q=80'
    ],
    tags: ['5v5 Tactical', 'Esports Ready', 'High Tick Rate', 'Ranked Leagues', 'Custom HUD'],
    features: [
      '128-tick rate competitive server infrastructure',
      'Customizable 4-finger claw HUD control layout',
      'Anti-cheat kernel protection on mobile',
      'Detailed recoil spray pattern mastery system',
      'Built-in replay highlights viewer'
    ],
    systemRequirements: {
      os: 'Android 10+ / iOS 14+',
      ram: '4 GB minimum',
      storage: '3.1 GB free space',
      graphics: 'Snapdragon 730G / Exynos 9810 or better'
    },
    reviews: [
      {
        id: 'rev-6',
        userName: 'David "AimBot" Miller',
        userAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
        gamerTag: 'AimBot_David',
        rating: 5,
        date: 'August 1, 2026',
        title: 'Crisp hitboxes and zero lag!',
        comment: 'Servers feel extremely snappy. The tactical abilities add so much depth to standard bomb plant modes.',
        helpfulCount: 210,
        isVerifiedGamer: true,
        platformPlayed: 'Mobile'
      }
    ],
    heroInteractiveType: 'particle_core',
    themeColor: '#ffffff',
    featuredScore: 96
  },
  {
    id: 'mech-strike-infinity',
    title: 'Mech Strike: Infinity',
    slug: 'mech-strike-infinity',
    genre: 'Action',
    tagline: 'Heavy Armored 6v6 Robot Combat Arena',
    description: 'Customize 30-ton war machines with railguns, heat-seeking missiles, and forcefields in intense 6v6 team matches.',
    longDescription: 'Mech Strike Infinity pits giant mechanized suits against each other in destructible urban battlegrounds. Paint your mechs, assemble tactical weapon loadouts, and initiate vertical jet boosters to flank enemy positions.',
    rating: 4.7,
    totalRatingsCount: 88500,
    downloadsCount: '15M+',
    downloadsExact: 16210000,
    releaseYear: '2025',
    developer: 'Titan Forge Games',
    publisher: 'Ironclad Digital',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.pixonic.wwr',
    posterImage: 'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?auto=format&fit=crop&w=1200&q=80',
    heroBanner: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1920&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=1200&q=80'
    ],
    tags: ['Mechs', '6v6 PvP', 'Heavy Weapons', 'Destructible City', 'Custom Loadouts'],
    features: [
      'Over 40 customizable Mech Chassis types',
      'Real-time limb component destruction mechanics',
      'Guild Alliance wars with weekly territory control',
      'Immersive heavy bass sound design & explosive VFX'
    ],
    systemRequirements: {
      os: 'Android 9.0+ / iOS 13.0+',
      ram: '4 GB minimum',
      storage: '2.8 GB free space',
      graphics: 'Adreno 618 or equivalent'
    },
    reviews: [
      {
        id: 'rev-7',
        userName: 'GamerSam',
        userAvatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=150&q=80',
        gamerTag: 'IRON_TITAN',
        rating: 5,
        date: 'July 11, 2026',
        title: 'Pure mech mayhem!',
        comment: 'Blowing up building covers and unleashing 20 missiles simultaneously is so thrilling.',
        helpfulCount: 165,
        isVerifiedGamer: true,
        platformPlayed: 'Mobile'
      }
    ],
    heroInteractiveType: 'energy_radar',
    themeColor: '#ffffff',
    featuredScore: 94
  },
  {
    id: 'nexus-rivals-moba',
    title: 'Nexus Rivals: Wild Rift',
    slug: 'nexus-rivals-moba',
    genre: 'MOBA',
    tagline: 'Fast-Paced 5v5 Arena Battle with Dynamic Objectives',
    description: 'Master 80+ unique champions, execute twin-thumb skillshots, and crush the enemy Nexus in 15-minute action matches.',
    longDescription: 'Nexus Rivals brings classic competitive MOBA strategy to fast-paced mobile matches. Features refined dual-stick controls, auto-target toggles, elemental dragons, and zero pay-to-win stat boosts.',
    rating: 4.9,
    totalRatingsCount: 310000,
    downloadsCount: '80M+',
    downloadsExact: 82140000,
    releaseYear: '2024',
    developer: 'Riot Games / Cyber Nexus',
    publisher: 'Riot Games',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.riotgames.league.wildrift',
    posterImage: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1200&q=80',
    heroBanner: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1920&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?auto=format&fit=crop&w=1200&q=80'
    ],
    tags: ['5v5 MOBA', 'Skillshots', 'Esports League', 'Fast 15-Min Matches', 'Fair PvP'],
    features: [
      'Smooth 60FPS / 120FPS dual joystick targeting',
      'Elemental rift transformations during dragon slaying',
      'Dynamic ping wheel & automated tactical callouts',
      'Ranked tier system with protection shields'
    ],
    systemRequirements: {
      os: 'Android 8.0+ / iOS 12.0+',
      ram: '3 GB minimum',
      storage: '3.8 GB free space',
      graphics: 'Adreno 506 / Mali-T880 or better'
    },
    reviews: [
      {
        id: 'rev-8',
        userName: 'Jordan Lee',
        userAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
        gamerTag: 'JordiNexus',
        rating: 5,
        date: 'July 30, 2026',
        title: 'Smoothest MOBA experience on mobile',
        comment: 'Controls are intuitive and responsive. Perfect 15 minute match durations fit my schedule.',
        helpfulCount: 420,
        isVerifiedGamer: true,
        platformPlayed: 'Mobile'
      }
    ],
    heroInteractiveType: 'stat_wheel',
    themeColor: '#ffffff',
    featuredScore: 97
  },
  {
    id: 'shadow-blade-zero',
    title: 'Shadow Blade: Zero',
    slug: 'shadow-blade-zero',
    genre: 'Action',
    tagline: 'High-Speed Cyber Ninja Hack & Slash',
    description: 'Master katana combat, wall-running physics, and cybernetic ninja arts in ultra-fast boss battles.',
    longDescription: 'Shadow Blade Zero is an adrenaline-fueled action slash-and-dash fighter. Dodge laser grids, execute air combos, parry blade strikes in slow-motion time-warp, and upgrade your cybernetic blade with elemental plasmoids.',
    rating: 4.8,
    totalRatingsCount: 112400,
    downloadsCount: '30M+',
    downloadsExact: 31200000,
    releaseYear: '2025',
    developer: 'Shinobi Digital',
    publisher: 'Kurogane Games',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.ea.game.pvz2_row',
    posterImage: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1200&q=80',
    heroBanner: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1920&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80'
    ],
    tags: ['Ninja Combat', 'Hack & Slash', 'Slow-Mo Parry', 'Boss Fights', 'High Speed'],
    features: [
      'Fluid 120 FPS combat animations with precise hitboxes',
      '15 Epic Cyber Ninja Boss Encounters with unique patterns',
      'Customizable plasma katana particle trails',
      'Offline campaign mode support'
    ],
    systemRequirements: {
      os: 'Android 9.0+ / iOS 13.0+',
      ram: '4 GB minimum',
      storage: '2.5 GB free space',
      graphics: 'Snapdragon 720G or higher'
    },
    reviews: [
      {
        id: 'rev-9',
        userName: 'Kenji Sato',
        userAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
        gamerTag: 'SHINOBI_ZERO',
        rating: 5,
        date: 'August 3, 2026',
        title: 'Combat mechanics feel god-tier',
        comment: 'Parrying boss attacks right at the last millisecond triggers slow-mo and feels incredibly rewarding.',
        helpfulCount: 290,
        isVerifiedGamer: true,
        platformPlayed: 'Mobile'
      }
    ],
    heroInteractiveType: 'cyber_weapon',
    themeColor: '#ffffff',
    featuredScore: 95
  },
  {
    id: 'quantum-drift-2088',
    title: 'Quantum Drift 2088',
    slug: 'quantum-drift-2088',
    genre: 'Action',
    tagline: 'Anti-Gravity Cyber Racing at Mach-2 Speeds',
    description: 'Pilot anti-gravity hovercrafts through neon highways, deploy boost surges, and out-drift rivals on physics-defying tracks.',
    longDescription: 'Quantum Drift 2088 redefines mobile anti-gravity racing. Compete in 12-player live multiplayer races, tune jet thruster acoustics, build custom neon vinyl decals, and conquer loop-the-loops and vertical drops.',
    rating: 4.7,
    totalRatingsCount: 94800,
    downloadsCount: '20M+',
    downloadsExact: 22400000,
    releaseYear: '2025',
    developer: 'HyperDrive Velocity',
    publisher: 'Velocity Games',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.gameloft.android.ANMP.GloftA8HM',
    posterImage: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80',
    heroBanner: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1920&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?auto=format&fit=crop&w=1200&q=80'
    ],
    tags: ['Anti-Gravity', 'Neon Drift', '12-Player PvP', 'Synthwave OST', 'Hover Vehicles'],
    features: [
      '30 Futuristic Anti-Gravity Hovercraft Models',
      'Real-Time Haptic vibration response during nitro boost',
      'Synthwave electronic soundtrack by top producers',
      'Global leaderboard time trials with ghost replays'
    ],
    systemRequirements: {
      os: 'Android 10.0+ / iOS 14.0+',
      ram: '4 GB minimum',
      storage: '3.0 GB free space',
      graphics: 'Adreno 630 or Apple A13'
    },
    reviews: [
      {
        id: 'rev-10',
        userName: 'Mia "Speedster" Chen',
        userAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
        gamerTag: 'DRIFT_QUEEN',
        rating: 5,
        date: 'July 29, 2026',
        title: 'Adrenaline pumping racing!',
        comment: 'The sense of speed and audio soundtrack are top notch. Perfect tilt controls.',
        helpfulCount: 184,
        isVerifiedGamer: true,
        platformPlayed: 'Mobile'
      }
    ],
    heroInteractiveType: 'energy_radar',
    themeColor: '#ffffff',
    featuredScore: 93
  },
  {
    id: 'astral-tactics-frontline',
    title: 'Astral Tactics: Frontline',
    slug: 'astral-tactics-frontline',
    genre: 'RPG / MMORPG',
    tagline: 'Turn-Based Cyber Strategy & Squad Command',
    description: 'Assemble elite mecha squads, deploy orbital artillery, and outsmart commanders in turn-based grid combat.',
    longDescription: 'Astral Tactics Frontline is a tactical turn-based RPG set in deep space colonies. Position your units using terrain elevation, leverage element synergies, and customize squad skill trees for victory.',
    rating: 4.8,
    totalRatingsCount: 76500,
    downloadsCount: '12M+',
    downloadsExact: 12800000,
    releaseYear: '2024',
    developer: 'Orbital Mind Studios',
    publisher: 'Astral Interactive',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.lilithgame.hro.gp',
    posterImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    heroBanner: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1920&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80'
    ],
    tags: ['Turn-Based', 'Tactical Grid', 'Mecha Squads', 'Space Campaign', 'Deep Strategy'],
    features: [
      'Over 60 unique collectable tactical squad leaders',
      'Deep isometric grid battlefields with destructible cover',
      'Guild Boss battles and cross-server tournament ladders',
      'Rich voice-acted campaign storyline'
    ],
    systemRequirements: {
      os: 'Android 8.0+ / iOS 12.0+',
      ram: '3 GB minimum',
      storage: '2.1 GB free space',
      graphics: 'Adreno 506 or higher'
    },
    reviews: [
      {
        id: 'rev-11',
        userName: 'Viktor Krum',
        userAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
        gamerTag: 'TACTICAL_VK',
        rating: 5,
        date: 'July 22, 2026',
        title: 'Deep strategy game that respects your intelligence',
        comment: 'No brainless auto-play required. You really have to plan grid positioning and weapon ranges.',
        helpfulCount: 142,
        isVerifiedGamer: true,
        platformPlayed: 'Mobile'
      }
    ],
    heroInteractiveType: 'particle_core',
    themeColor: '#ffffff',
    featuredScore: 92
  },
  {
    id: 'star-voyage-odyssey',
    title: 'Star Voyage: Odyssey',
    slug: 'star-voyage-odyssey',
    genre: 'RPG / MMORPG',
    tagline: 'Massive Space Exploration & Galactic Starship Fleet Wars',
    description: 'Command starships, mine asteroids, establish interstellar trade routes, and fight armada fleet battles.',
    longDescription: 'Star Voyage Odyssey is a sprawling space sandbox MMORPG. Build dreadnought class starships, form player alliances across 5,000 star systems, and wage epic space warfare in real-time.',
    rating: 4.9,
    totalRatingsCount: 154000,
    downloadsCount: '18M+',
    downloadsExact: 18900000,
    releaseYear: '2025',
    developer: 'Nova Sector Labs',
    publisher: 'DeepSpace Gaming',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.netease.eve',
    posterImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    heroBanner: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1920&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=1200&q=80'
    ],
    tags: ['Space Sandbox', 'Fleet Battles', 'Starships', 'Trade Economy', 'Galactic Alliance'],
    features: [
      'Over 500 customizable starship hulls and weapon mounts',
      'Player-driven galactic economy and trade hubs',
      'Massive fleet battles supporting 100+ ships simultaneously',
      'Seamless warp drive transitions across star systems'
    ],
    systemRequirements: {
      os: 'Android 10.0+ / iOS 14.0+',
      ram: '6 GB minimum',
      storage: '4.5 GB free space',
      graphics: 'Snapdragon 855 / Exynos 9820 or better'
    },
    reviews: [
      {
        id: 'rev-12',
        userName: 'Admiral Zhao',
        userAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
        gamerTag: 'FLEET_ADMIRAL',
        rating: 5,
        date: 'August 1, 2026',
        title: 'Console quality space simulator on mobile',
        comment: 'Leading our alliance fleet of 40 dreadnoughts into warp space is breathtaking.',
        helpfulCount: 310,
        isVerifiedGamer: true,
        platformPlayed: 'Mobile'
      }
    ],
    heroInteractiveType: '3d_hologram',
    themeColor: '#ffffff',
    featuredScore: 96
  },
  {
    id: 'dungeon-hunter-immortal',
    title: 'Dungeon Hunter: Immortal',
    slug: 'dungeon-hunter-immortal',
    genre: 'RPG / MMORPG',
    tagline: 'Dark Isometric Action RPG & Endless Loot Crawl',
    description: 'Slay hordes of demonic beasts, collect legendary ancestral weapons, and purge corrupted dungeons.',
    longDescription: 'Dungeon Hunter Immortal delivers fast-paced dark fantasy action. Slash through procedural dungeons, unleash screen-clearing spell storms, trade loot in real-time, and challenge multi-stage world bosses.',
    rating: 4.7,
    totalRatingsCount: 168000,
    downloadsCount: '40M+',
    downloadsExact: 41500000,
    releaseYear: '2024',
    developer: 'Gameloft / Ironclaw',
    publisher: 'Gameloft',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.blizzard.diablo.immortal',
    posterImage: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80',
    heroBanner: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1920&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?auto=format&fit=crop&w=1200&q=80'
    ],
    tags: ['Action RPG', 'Loot Crawler', 'Dark Fantasy', 'Co-op Raids', 'Legendary Gear'],
    features: [
      '6 Iconic Hero Classes: Necromancer, Barbarian, Sorceress, Paladin, Rogue, Monk',
      'Thousands of unique armor and weapon drop combinations',
      '4-Player co-op dungeon crawl matchmaking',
      'Cross-save progression across mobile and PC'
    ],
    systemRequirements: {
      os: 'Android 9.0+ / iOS 13.0+',
      ram: '4 GB minimum',
      storage: '5.2 GB free space',
      graphics: 'Adreno 620 / Mali-G76'
    },
    reviews: [
      {
        id: 'rev-13',
        userName: 'GamerX',
        userAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
        gamerTag: 'LOOT_SLAYER',
        rating: 5,
        date: 'July 28, 2026',
        title: 'Addictive hack & slash loot grind!',
        comment: 'Dungeon runs are fast, loot sound effects are super satisfying, and graphics look incredible.',
        helpfulCount: 220,
        isVerifiedGamer: true,
        platformPlayed: 'Mobile'
      }
    ],
    heroInteractiveType: 'stat_wheel',
    themeColor: '#ffffff',
    featuredScore: 94
  },
  {
    id: 'frontline-commando-overkill',
    title: 'Frontline Commando: Overkill',
    slug: 'frontline-commando-overkill',
    genre: 'FPS / Shooter',
    tagline: 'Cover Shooter Battleground & Sniper Ops',
    description: 'Infiltrate enemy strongholds, execute long-range sniper takedowns, and command heavy artillery.',
    longDescription: 'Frontline Commando Overkill brings cinematic third-person cover shooter gameplay. Duck behind barriers, order drone air strikes, eliminate hostile insurgent bosses, and upgrade sniper rifles with thermal night vision scopes.',
    rating: 4.8,
    totalRatingsCount: 132000,
    downloadsCount: '35M+',
    downloadsExact: 36800000,
    releaseYear: '2025',
    developer: 'Glu Mobile / Vanguard',
    publisher: 'Overkill Digital',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.glu.mod2',
    posterImage: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
    heroBanner: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1920&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80'
    ],
    tags: ['Cover Shooter', 'Sniper Ops', 'Modern Warfare', 'Air Strikes', 'Solo Campaign'],
    features: [
      'Over 100 tactical military campaign missions',
      'Destructible concrete and wood cover mechanics',
      'Realistic gun audio recorded at live military firing ranges',
      'Thermal and infrared scope mechanics'
    ],
    systemRequirements: {
      os: 'Android 8.0+ / iOS 12.0+',
      ram: '3 GB minimum',
      storage: '2.4 GB free space',
      graphics: 'Adreno 506 or higher'
    },
    reviews: [
      {
        id: 'rev-14',
        userName: 'Sgt. Hartman',
        userAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
        gamerTag: 'SNIPER_VIPER',
        rating: 5,
        date: 'July 19, 2026',
        title: 'Best military cover shooter on Play Store',
        comment: 'Sniper bullet cam animations look epic. Controls are super tight.',
        helpfulCount: 198,
        isVerifiedGamer: true,
        platformPlayed: 'Mobile'
      }
    ],
    heroInteractiveType: 'cyber_weapon',
    themeColor: '#ffffff',
    featuredScore: 93
  },
  {
    id: 'cyber-arena-legends',
    title: 'Cyber Arena Legends',
    slug: 'cyber-arena-legends',
    genre: 'MOBA',
    tagline: '3v3 High-Speed Cyberpunk Brawl Arena',
    description: 'Fast 3-minute action brawls, neon ultimate attacks, and instant matchmaking in 3v3 arena battles.',
    longDescription: 'Cyber Arena Legends condensed MOBA action into rapid 3-minute combat rounds. Choose from 25 futuristic brawlers, collect power cores, score goals in Cyber Ball, and climb the global ladder.',
    rating: 4.8,
    totalRatingsCount: 108000,
    downloadsCount: '22M+',
    downloadsExact: 23100000,
    releaseYear: '2025',
    developer: 'Supercell / Cyber Brawl',
    publisher: 'Brawl Cyberworks',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.supercell.brawlstars',
    posterImage: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=1200&q=80',
    heroBanner: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1920&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?auto=format&fit=crop&w=1200&q=80'
    ],
    tags: ['3v3 Brawl', '3-Min Matches', 'Cyber Brawlers', 'Fast PvP', 'Party Game'],
    features: [
      'Multiple game modes: Cyber Heist, Gem Grab, Solo Showdown',
      'Regular weekend challenge events with unique cosmetics',
      'Club social chat and 3-player team quick join',
      'Instant load times under 3 seconds'
    ],
    systemRequirements: {
      os: 'Android 8.0+ / iOS 12.0+',
      ram: '2 GB minimum',
      storage: '1.2 GB free space',
      graphics: 'Adreno 505 or better'
    },
    reviews: [
      {
        id: 'rev-15',
        userName: 'Leo Sparks',
        userAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
        gamerTag: 'BRAWL_KING',
        rating: 5,
        date: 'August 2, 2026',
        title: 'Perfect quick fun during breaks',
        comment: '3 minute matches fit anywhere. Super fun with friends!',
        helpfulCount: 265,
        isVerifiedGamer: true,
        platformPlayed: 'Mobile'
      }
    ],
    heroInteractiveType: 'energy_radar',
    themeColor: '#ffffff',
    featuredScore: 95
  },
  {
    id: 'hyper-space-commander',
    title: 'Hyper Space Commander',
    slug: 'hyper-space-commander',
    genre: 'Battle Royale',
    tagline: '50-Player Zero-G Orbital Battle Royale',
    description: 'Fight inside zero-gravity space stations, deploy grav-hooks, and survive orbital decay in 50-player matches.',
    longDescription: 'Hyper Space Commander combines zero-gravity 3D movement with battle royale survival. Magnetize your boots to hull walls, launch grappling hooks across vacuum breaches, and eject before space station collapse.',
    rating: 4.8,
    totalRatingsCount: 89000,
    downloadsCount: '16M+',
    downloadsExact: 16700000,
    releaseYear: '2025',
    developer: 'Zero-G Interactive',
    publisher: 'Orbital Strike',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.proxima.vng.pubgmobile',
    posterImage: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1200&q=80',
    heroBanner: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=1200&q=80'
    ],
    tags: ['Zero-G', 'Space BR', 'Grappling Hook', '50 Players', 'Orbital Survival'],
    features: [
      '360-degree zero gravity firefights in full 3D space',
      'Magnetic boots and grappling hook traversal',
      'Dynamic station hull decompression hazards',
      'Full Dolby Atmos 3D positional audio'
    ],
    systemRequirements: {
      os: 'Android 10.0+ / iOS 14.0+',
      ram: '6 GB minimum',
      storage: '3.6 GB free space',
      graphics: 'Snapdragon 765G / Apple A12'
    },
    reviews: [
      {
        id: 'rev-16',
        userName: 'Cap. Vance',
        userAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
        gamerTag: 'ZERO_G_ACE',
        rating: 5,
        date: 'July 25, 2026',
        title: 'Zero gravity mechanics are insanely fun!',
        comment: 'Grappling across vacuum breaches while firing laser rifles feels like playing a movie.',
        helpfulCount: 175,
        isVerifiedGamer: true,
        platformPlayed: 'Mobile'
      }
    ],
    heroInteractiveType: '3d_hologram',
    themeColor: '#ffffff',
    featuredScore: 94
  },
  {
    id: 'cyber-city-overdrive',
    title: 'Cyber City Overdrive',
    slug: 'cyber-city-overdrive',
    genre: 'Action',
    tagline: 'Open-World Neon City Crime & Vehicle Mayhem',
    description: 'Drive hover cars, hack corporate infrastructure, and control the criminal underworld of Neo-Vegas.',
    longDescription: 'Cyber City Overdrive is an expansive open-world action crime simulator. Hijack futuristic sports cars, customize neon body kits, complete heist storylines, and evade high-tech police hovercrafts.',
    rating: 4.7,
    totalRatingsCount: 145000,
    downloadsCount: '38M+',
    downloadsExact: 38200000,
    releaseYear: '2025',
    developer: 'Rockstar / Cyber Overdrive',
    publisher: 'Overdrive Interactive',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.rockstargames.gtasa',
    posterImage: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80',
    heroBanner: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1920&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1200&q=80'
    ],
    tags: ['Open World', 'Cyber Crime', 'Neon Vehicles', 'Heists', '3D Sandbox'],
    features: [
      'Huge open world metropolis with 5 distinct city districts',
      'Over 80 customizable vehicles, bikes, and hovercrafts',
      'Deep radio station playlist with synthwave, metal, and electronic tracks',
      'Full gamepad controller support'
    ],
    systemRequirements: {
      os: 'Android 10.0+ / iOS 14.0+',
      ram: '6 GB minimum',
      storage: '6.0 GB free space',
      graphics: 'Adreno 640 / Mali-G77 or higher'
    },
    reviews: [
      {
        id: 'rev-17',
        userName: 'Tommy V',
        userAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
        gamerTag: 'NEON_RIDER',
        rating: 5,
        date: 'August 3, 2026',
        title: 'Huge open world on mobile',
        comment: 'Driving through rain-soaked neon streets with full radio music playing is incredible.',
        helpfulCount: 230,
        isVerifiedGamer: true,
        platformPlayed: 'Mobile'
      }
    ],
    heroInteractiveType: 'cyber_weapon',
    themeColor: '#ffffff',
    featuredScore: 96
  },
  {
    id: 'phantom-strike-tactics',
    title: 'Phantom Strike: Tactics',
    slug: 'phantom-strike-tactics',
    genre: 'FPS / Shooter',
    tagline: 'Stealth Ops & Tactical Counter-Terrorism',
    description: 'Execute stealth infiltration, hack security cameras, and neutralize VIP targets in tactical squad shooter missions.',
    longDescription: 'Phantom Strike Tactics focuses on stealth, silencers, and intelligence gathering. Use thermal drones, breach doors with C4 explosives, and coordinate timed team sniper shots across night operations.',
    rating: 4.8,
    totalRatingsCount: 92000,
    downloadsCount: '19M+',
    downloadsExact: 19400000,
    releaseYear: '2025',
    developer: 'Ubisoft / Phantom Labs',
    publisher: 'Phantom Digital',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.gameloft.android.ANMP.GloftM5HM',
    posterImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80',
    heroBanner: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1920&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1200&q=80'
    ],
    tags: ['Stealth FPS', 'Night Vision', 'Tactical Squad', 'Drone Recon', 'Silenced Weapons'],
    features: [
      'Realistic light and shadow stealth detection meter',
      'Recon drones with camera hacking mechanics',
      'Over 40 customizable silenced weaponry',
      'Dynamic day/night cycle weather missions'
    ],
    systemRequirements: {
      os: 'Android 9.0+ / iOS 13.0+',
      ram: '4 GB minimum',
      storage: '2.9 GB free space',
      graphics: 'Adreno 618 or Apple A12'
    },
    reviews: [
      {
        id: 'rev-18',
        userName: 'Ghost Operator',
        userAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
        gamerTag: 'GHOST_OPERATOR',
        rating: 5,
        date: 'July 27, 2026',
        title: 'Patience and stealth rewarded',
        comment: 'Silently taking down an entire compound without raising alarms is so satisfying.',
        helpfulCount: 154,
        isVerifiedGamer: true,
        platformPlayed: 'Mobile'
      }
    ],
    heroInteractiveType: 'particle_core',
    themeColor: '#ffffff',
    featuredScore: 94
  }
];
