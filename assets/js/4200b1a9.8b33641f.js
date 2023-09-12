"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[866],{4612:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"release-notes/4.1.0","metadata":{"permalink":"/blog/release-notes/4.1.0","source":"@site/blog/release-notes/2023-03-21-release-notes-4.1.0.md","title":"Release notes: Onion V4.1","description":"Official release notes for Onion V4.1.0","date":"2023-03-21T00:00:00.000Z","formattedDate":"March 21, 2023","tags":[{"label":"release-notes","permalink":"/blog/tags/release-notes"},{"label":"stable","permalink":"/blog/tags/stable"}],"hasTruncateMarker":true,"authors":[{"name":"Aemiii91","title":"Onion Core Team","url":"https://github.com/Aemiii91","imageURL":"https://github.com/Aemiii91.png","key":"aemiii91"},{"name":"Schmurtz","title":"Onion Core Team","url":"https://github.com/schmurtzm","imageURL":"https://github.com/schmurtzm.png","key":"schmurtz"}],"frontMatter":{"slug":"release-notes/4.1.0","authors":["aemiii91","schmurtz"],"tags":["release-notes","stable"]},"nextItem":{"title":"Release notes: Onion V4","permalink":"/blog/release-notes/4.0.0"}},"content":"*Official release notes for Onion V4.1.0*\\n\\nThis release features a new menu, *GLO*, with game and list specific options (for example, you can now change core per game and load without save state); automatic icon switching and customization, a whole new ports collection, random game app, on-screen overlays, AdvanceMENU (an alternative frontend), and so much more!\\n\\n\x3c!-- truncate --\x3e\\n\\n## Features\\n\\n\\n### Game List Options (GLO)\\n<sup>\\n\\nby @Aemiii91\\n\\n</sup>\\n\\n*Press Y in a game list to get specific options for the selected game and the entire list*\\n\\n<table><thead>\\n<th colspan=\\"3\\"><b>Game List Options</b></th>\\n</thead><tr>\\n<td width=\\"33%\\" align=\\"center\\" valign=\\"top\\"><img src=\\"https://user-images.githubusercontent.com/44569252/226447277-a9452ecc-92ad-407f-a629-307491a652b4.png\\"/></td>\\n<td width=\\"33%\\" align=\\"center\\" valign=\\"top\\"><img src=\\"https://user-images.githubusercontent.com/44569252/226447388-8c9c95f1-536a-4946-8b0f-f4b8ead0e97e.png\\"/></td>\\n<td width=\\"33%\\" align=\\"center\\" valign=\\"top\\"><img src=\\"https://user-images.githubusercontent.com/44569252/226447466-71d4f5c1-7675-4355-9b60-20dbd1a03eae.png\\"/></td>\\n</tr><tr>\\n<td align=\\"center\\" valign=\\"top\\"><p><i>When in a game list, press <kbd>Y</kbd> to open GLO (this action can be reassigned in Tweaks)</i></p></td>\\n<td align=\\"center\\" valign=\\"top\\"><p><i>GLO - specific options for the selected game or the entire list</i></p></td>\\n<td align=\\"center\\" valign=\\"top\\"><p><i>Use the \\"Game core\\" option to change core per game</i></p></td>\\n</tr></table>\\n\\n- **Reset game** - *load game without save state*\\n- **Game core** - *set custom core per game*\\n- **Filter list** - *use a keyword to filter the list*\\n- **Refresh roms** - *refresh the list\u2019s game cache*\\n- *Custom scripts:*\\n  - **Random game** - *added by Random Game app - launches a random game from the list*\\n  - **Set time** - *added by Clock app - quick access to setting date and time*\\n\\n\\n### Icon switching\\n<sup>\\n\\nby @Aemiii91\\n\\n</sup>\\n\\n- ThemeSwitcher now supports themes with icon packs - *remember to visit our [themes repository](https://github.com/OnionUI/Themes/blob/main/README.md) for additional themes and icon packs!*\\n- Change icon pack and edit individual icons in Tweaks\\n\\n<table align=\\"center\\"><thead>\\n<th colspan=\\"2\\">Icon Switching</th>\\n</thead><tr>\\n<td width=\\"65%\\" align=\\"center\\" rowspan=\\"2\\"><img src=\\"https://user-images.githubusercontent.com/44569252/226450380-2d6ec505-c65d-4b67-bbc5-7104e39cd7ee.gif\\"/></td>\\n<td><img src=\\"https://user-images.githubusercontent.com/44569252/226451178-3d11e9f4-0c7f-4213-af24-ad1209b36350.png\\"/></td>\\n</tr><tr>\\n<td><img src=\\"https://user-images.githubusercontent.com/44569252/226451190-2529bb42-f5b3-4a9e-acfd-6cf65e2d4d33.png\\"/></td>\\n</tr><tr>\\n<td align=\\"center\\"><p><i>Showcase: Applying themes with icon packs</i></p></td>\\n<td align=\\"center\\"><p><i>Use Tweaks to change icon pack or edit individual icons</i></p></td>\\n</tr></table>\\n\\n\\n### Ports Collection\\n<sup>\\n\\nby @schmurtzm\\n\\n</sup>\\n\\nOnion\'s Ports Collection has been completely redone and now includes 61 game ports!  \\nAll the necessary files (except licensed game files) are now hosted on the:  \\n\\n<p align=\\"center\\"><a href=\\"https://github.com/OnionUI/Ports-Collection\\">Ports Collection repository</a></p>\\n\\n<table align=\\"center\\"><thead>\\n<th>Ports Collection</th>\\n</thead><tr>\\n<td align=\\"center\\"><a href=\\"https://user-images.githubusercontent.com/44569252/226474430-0123c521-e96f-4603-bdf3-725ad8d2f3bc.png\\"><img width=\\"65%\\" src=\\"https://user-images.githubusercontent.com/44569252/226474515-7750fb79-9bda-4339-ac08-457dc63da5c6.png\\"/></a></td>\\n</tr><tr>\\n<td align=\\"center\\" valign=\\"top\\"><p><i>Click the image to view it in full size</i></p></td>\\n</tr></table>\\n\\n- 24 free game ports are offered as complete packs\\n- 37 game ports are available through the collection of game engines, and you are only required to supply the licensed data files from the original game\\n- Pre-configured config files are included - which gives you the best settings and uniform key mapping for FPS games (*credit: axcelon*)\\n- Box art is also included\\n\\n\\n### New apps\\n\\n- **Random Game** - *launch a random game from any cached system - credit: @marchiore*\\n- **Video Player** (FFplay) - *watch your favorite 4:3 or 16:9 video content - credit: Steward-Fu , @bobotrax  , @schmurtzm* \\n- **PDF Reader** (Green) - *ideal for looking up clues in game manuals  - credit: Steward-Fu*\\n- **Ebook Reader** (Pixel Reader) - *well suited for reading walkthroughs on the go  - credit: [ealang](https://github.com/ealang/pixel-reader)*\\n\\n<p align=\\"center\\"><em>\\n<img title=\\"Random Game\\" src=\\"https://user-images.githubusercontent.com/44569252/226454336-c2425e57-e507-4b32-aa30-8e1b3884f4ef.png\\"/>\\n<img title=\\"Video Player\\" src=\\"https://user-images.githubusercontent.com/44569252/226454472-7e4e6769-a86c-469f-b735-e85473094b0e.png\\"/>\\n<img title=\\"PDF Reader\\" src=\\"https://user-images.githubusercontent.com/44569252/226454495-bd086c74-61fe-4709-9e97-bebb3febbe75.png\\"/>\\n<img title=\\"Ebook Reader\\" src=\\"https://user-images.githubusercontent.com/44569252/226454509-1815c543-8001-4b7d-b7d9-2d3be5795140.png\\"/>\\n</em></p>\\n\\n\\n### Other exciting features\\n\\n- **Automatic import of ScummVM games**:  games are now automatically imported in Onion thanks to a new script created - no more manual shortcuts to create! (@schmurtzm)\\n- A new core option has been added to ScummVM: \\"Target FPS for stutter reduction\\" allows to run some heavy games with less audio stuttering - unique to Onion! (@schmurtzm)\\n- Improved **color palette organization** for GB: an organization by palette style (Essentials, Subtle, Single_Color, Multicolor, Hardware, Nintendo_Official, Extras, Others) unique to Onion ! (Jeltron & @schmurtzm)\\n- mGBA **[one-key fast forward button](https://github.com/schmurtzm/mgba/commit/99387c04ae2879692ee9ff199dc68b6c162f0a8a)** - <kbd>R2</kbd> by default (@schmurtzm)\\n- Added support for **On-Screen Overlays** in RetroArch (Eggs)\\n- **Hotkey for video scaling:** <kbd>MENU</kbd>+<kbd>START</kbd> (Eggs) (*remember to save overrides to make it stick*) \\n- File explorer for PDF Reader and Video Player apps  (@schmurtzm & @Aemiii91)\\n- **Tutorials:** video tutorial for arcade saves, video tutorial for Video Player shortcuts, pdf tutorial for PDF Reader  (@schmurtzm)\\n- Package Manager UI update (@Aemiii91)\\n- **AdvanceMAME with AdvanceMENU** - browse your arcade games with video previews! (@schmurtzm)\\n- *Onion easter egg* (\u30b3\u30ca\u30df\u30b3\u30de\u30f3\u30c9) (@Sichroteph)\\n\\n\\n<table align=\\"center\\"><thead>\\n<th><i>Highlight:</i> Package Manager (UI update)</th>\\n<th><i>Highlight:</i> On-Screen Overlays</th>\\n<th><i>Highlight:</i> AdvanceMENU</th>\\n</thead><tr>\\n<td align=\\"center\\" width=\\"33%\\"><img src=\\"https://user-images.githubusercontent.com/44569252/226452451-cd05258a-8da7-4f1e-bec1-bc41844b1dd4.gif\\"/></td>\\n<td align=\\"center\\" width=\\"33%\\"><img src=\\"https://user-images.githubusercontent.com/44569252/226492100-f51306ee-9178-47b0-ae87-07f6de6eb7e5.png\\"/></td>\\n<td align=\\"center\\" width=\\"33%\\"><img src=\\"https://user-images.githubusercontent.com/44569252/226492306-03c1e2f4-902f-4ba2-8d85-13044882ad0d.png\\"/></td>\\n</tr></table>\\n\\n\\n## Core updates\\n<sup>\\n\\nby @schmurtzm\\n\\n</sup>\\n\\n- [**GBA**] Default core changed: `gpSP` -> `mGBA`\\n- [**Scumm**] Updated: `ScummVM 2.7`\\n- [**PS**] Updated: `PCSX-ReARMed`\\n- [**GB/GBC**] Updated: `Gambatte`\\n- [**Commodore 64**] Updated: `vice x64`\\n- [**ZX Spectrum**] Updated: `fuse`\\n- [**Arcade**] Updated: `MAME 2003-Plus`\\n- [**Virtual Boy**] Updated: `Beetle VB v1.31.0`\\n- [**Ports**] Updated: `ecwolf (Wolfenstein 3D)`\\n- [Expert/**PICO-8**] Updated: `fake-08 standalone`\\n- [**SNES**] Updated: `Beetle Supafaust` (*~10% increase in FPS*)\\n- [Expert/**SNES**] Updated: `Snes9x`\\n- [Expert/**SNES**] Updated: `Snes9x 2005` and `2005 Plus`\\n- [Expert/**SNES**] Updated: `Snes9x 2010`\\n\\n\\n### New core additions\\n<sup>\\n\\nby @schmurtzm\\n\\n</sup>\\n\\n- [**Amiga**] Added: `puae 2021 v2.6.1`\\n- [**PICO-8**] Added `fake-08 libretro core` (*supports save states*)\\n- [Expert/**OpenBOR**] Added Steward-Fu\'s `OpenBOR`\\n- [Expert/**DOS**] Added: `DOSBox Pure 0.9.7` (the old 0.21 is still default)\\n- [Expert/**PS**] Added: `PCSX-ReARMed standalone` emulator (*no GameSwitcher integration, but much improved performance - allows for using enhanced resolution*)\\n- [Expert/**Arcade**] Added: `M.B.A-mini` (*M.B.A = MAME\'s skeleton + FBA\'s romsets*)\\n- [Expert/**Arcade**] Added: `AdvanceMenu`, `AdvanceMame`, and `AdvanceMess`\\n- [Expert/**NEC PC-98**] Added: `Neko Project II Kai`\\n- [Expert/**Music**] Added: `Game Music Emu (GME)`\\n\\n\\n## Added languages\\n\\n- **Portugu\xeas do Brasil** (Brazilian Portuguese) - *credit: @anibaldeboni*\\n- **Nederlands** (Dutch) - *credit: @ronvandegraaf*\\n- **Svenska** (Swedish) - *credit: @Megamannen*\\n- **Turkce** (Turkish) - *credit: @tcgumus*\\n- **\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430** (Ukrainian) - *credit: @semioys*\\n- **\u0411\u0435\u043b\u0430\u0440\u0443\u0441\u043a\u0430\u044f** (Belarusian) - *credit: @introkun*\\n- **Ti\u1ebfng Vi\u1ec7t** (Vietnamese) - *credit: Vi\xean V\u0129 Khang*\\n- **\ud55c\uad6d\uc5b4** (Korean) - *updated by: @DDinghoya*\\n\\n\\n## Breaking changes\\n\\n- The new V4.1 *Ports Collection* is not compatible with files from earlier versions (V4.0.4 and below) - *download the new ports files from our [Ports Collection repository](https://github.com/OnionUI/Ports-Collection), and add the necessary game files in `Roms/PORTS/Games`.*\\n- PS roms of type `.bin` now requires accompanying `.cue` files (you can use [this tool](https://www.duckstation.org/cue-maker/) to generate them) - *this improves game compatibility, fixes some audio issues, and allows for indexing games consisting of multiple `.bin` files!*\\n\\n\\n---\\n\\n<p align=\\"center\\">\\n<a href=\\"https://github.com/OnionUI/Onion/releases/tag/v4.1.4\\" class=\\"button button--primary button--lg\\">Download Onion V4.1.4</a><br/>\\n<small><i>you\'ll find the download at the bottom of the page</i></small>\\n</p>"},{"id":"release-notes/4.0.0","metadata":{"permalink":"/blog/release-notes/4.0.0","source":"@site/blog/release-notes/2022-09-10-release-notes-4.0.0.md","title":"Release notes: Onion V4","description":"Official release notes for Onion V4.0.0","date":"2022-09-10T00:00:00.000Z","formattedDate":"September 10, 2022","tags":[{"label":"release-notes","permalink":"/blog/tags/release-notes"},{"label":"stable","permalink":"/blog/tags/stable"}],"hasTruncateMarker":true,"authors":[{"name":"Aemiii91","title":"Onion Core Team","url":"https://github.com/Aemiii91","imageURL":"https://github.com/Aemiii91.png","key":"aemiii91"}],"frontMatter":{"slug":"release-notes/4.0.0","authors":["aemiii91"],"tags":["release-notes","stable"]},"prevItem":{"title":"Release notes: Onion V4.1","permalink":"/blog/release-notes/4.1.0"},"nextItem":{"title":"Release notes: Onion V3.12.3","permalink":"/blog/release-notes/3.12.3"}},"content":"*Official release notes for Onion V4.0.0*\\n\\nThis release introduces a new app, *Tweaks*, containing everything you need to *make Onion your own!* Built-in global search. Improved theme support.\\n\\n\x3c!-- truncate --\x3e\\n\\n## Changelog\\n\\n- **Minimal UI:** Recents are now hidden by default and GameSwitcher can be launched by pressing <kbd>MENU</kbd>\\n- **Tweaks:** A new app for making Onion your own!\\n   - System settings: Startup behavior, auto-save and exit, vibration\\n   - **Custom shortcuts:** Single/long/double press <kbd>MENU</kbd>, and launch apps or tools via <kbd>X</kbd> or <kbd>Y</kbd> in MainUI\\n      - **Known limitation:** Some apps can\'t be launched this way (for now only Music Player / GMU is known not to support this)\\n   - Personalize the UI: Show/hide recents/expert tabs, theme overrides\\n   - Advanced: Quick access to advanced emulator settings, plus a submenu to reset different settings\\n   - **Tools:** Sort favorites, fix thumbnails, remove OSX system files\\n- MainUI context menu is now mapped to <kbd>SELECT</kbd> (<kbd>MENU</kbd> default action is instead GameSwitcher - this can be changed in Tweaks)\\n- **GameSwitcher:** Minimal mode (press <kbd>Y</kbd> to toggle - hold <kbd>Y</kbd> for fullscreen image)\\n- **Package Manager:** Besides the new name, the old \\"Onion Installer\\" has also gotten a massive overhaul:\\n   - \\"Changes count\\" now shown for each tab and the total emu/apps added/removed are shown in the top bar\\n   - Press <kbd>X</kbd> to toggle all items in selected tab\\n   - Press <kbd>Y</kbd> to reset all changes in selected tab\\n- **Search app** is now native to Onion ([more info](https://github.com/OnionUI/Onion#search))\\n- **RetroArch:** supports save state thumbnails, less on-screen notifications\\n- **File Explorer:** Updated color scheme, fullscreen image viewer (with navigation)\\n- Retired unused cores: `mame2003` (use `mame2003-plus` instead), `fbalpha` (use `fbalpha2012` instead)\\n- Updated/added cores: ` Fake-08 (pico8)` , `blueMSX` and `fMSX`, \\n- New experimental emulator: `PCSX-ReARMed standalone` and `mame2003-extreme`\\n- New theme features: custom boot/shutdown/save splash, charging animation (up to 24 frames), more options for battery percentage\\n\\n## Ports collection\\n\\n- The *Ports collection* binaries have moved to `Roms/PORTS`, and a reinstall via Package Manager is required.\\n\\n## ScummVM game list\\n\\n- We\'ve changed the way ScummVM games are indexed, which now allows showing the games as single list items with the possibility of having boxart ([more info](https://github.com/OnionUI/Onion/wiki/Emulators#scummvm-))\\n\\n## GB/GBA Fast Forward\\n\\n- Fast forward is no longer additionally mapped to <kbd>R</kbd> in the Game Boy emulators.\\n- This is to unify the shortcut for fast forward across all systems (<kbd>MENU</kbd> + <kbd>R</kbd>).\\n- *Note: [Click here](https://github.com/OnionUI/Onion/wiki/Frequently-Asked-Questions-(FAQ)#how-do-i-bind-fast-forward-to-a-single-button:~:text=How%20do%20I%20bind%20Fast%20Forward%20to%20a%20single%20button%3F) for information on how to bind fast forward to a single button.*\\n\\n# Installation\\n\\n- Check out the new [installation guide](https://github.com/OnionUI/Onion/wiki/Installation).\\n- **Important:** If you choose \\"Update\\" during installation, it is recommended to reinstall included apps using the Package Manager.\\n- **Note:** if you experience slower gameplay than usual, we recommend you create an in-game save and delete your save states.\\n\\n## Updating (from v4.0.0-RC)\\n\\n- If updating from the release candidate you can leave out `BIOS` and `Icons` when copying files to your SD card.\\n\\n## Battery icon hotfix\\n\\n- If you\'re having trouble with the battery icon not showing when in MainUI, unzip the contents of the [`battery-icon-hotfix.zip`](https://github.com/OnionUI/Onion/releases/download/v4.0.0/battery-icon-hotfix.zip) to your SD card.\\n  - *This fix has already been applied to the Onion install zip below.*"},{"id":"release-notes/3.12.3","metadata":{"permalink":"/blog/release-notes/3.12.3","source":"@site/blog/release-notes/2022-07-05-release-notes-3.12.3.md","title":"Release notes: Onion V3.12.3","description":"Official release notes for Onion V3.12.3","date":"2022-07-05T00:00:00.000Z","formattedDate":"July 5, 2022","tags":[{"label":"release-notes","permalink":"/blog/tags/release-notes"},{"label":"stable","permalink":"/blog/tags/stable"}],"hasTruncateMarker":true,"authors":[{"name":"Totofaki","title":"Onion Core Team","url":"https://github.com/Sichroteph","imageURL":"https://github.com/Sichroteph.png","key":"totofaki"}],"frontMatter":{"slug":"release-notes/3.12.3","authors":["totofaki"],"tags":["release-notes","stable"]},"prevItem":{"title":"Release notes: Onion V4","permalink":"/blog/release-notes/4.0.0"}},"content":"*Official release notes for Onion V3.12.3*\\n\\n\x3c!-- truncate --\x3e\\n\\n\\n### Eggs keymon integration\\n\\n    Low battery red frame warning in game.  \\n\\n<img src=\\"https://user-images.githubusercontent.com/16885275/177217769-32533d60-d052-45f2-b108-ecd187124733.png\\" width=\\"350\\"/>\\n\\n    Light sleep mode on power tap.     \\n    Deep sleep mode on long power press.   \\n    Save and show the game switcher on a menu button tap.   \\n    Save and exit game on menu button long press.   \\n\\n    The hibernation is properly implemented (The device will save and goes to sleep after X minutes without touching a button) \\n    The mainUI binary is repatched to be able to change this feature in the main menu settings, and set to 3mn on a fresh onion install.   \\n    Screenshot everywhere. (Menu+power)     \\n\\n<details>\\n<summary>More keymon informations here</summary>\\n\\n\\n**POWER button:**  \\nSuspend by press for one second or less.\\nPress and hold for 5 seconds to force close the current foreground application.\\nPress and hold for 10 seconds to force shutdown.\\n\\n- Unlike stock, suspend actually stops the foreground application.\\n- Both close/shutdown will auto-save if retroarch is running and AutoSaveState setting is enabled. (also for Hibernate below)\\n\\n- Shutdown when MainUI/onionLauncher is running.\\n- DeepSleep when retroarch is running and AutoSave setting is ON.\\n- Otherwise, nothing happens.\\n\\n**Hibernate function:**  \\nSuspend after the time set in Setting > Hibernate has elapsed without any buttons being pressed.\\nShutdown after 5 minutes of suspended state and no USB power connected.\\n\\nThe current onion disables Hibernate during installation and does not allow configuration.\\n- If you want to enable, you can change it by booting without SD, configure in Setting, and then boot with onion again.\\n- It can also be set on a minute-by-minute basis by editing /appconfigs/system.json using Commander. (\\"hibernate\\" line)\\n\\n**Low battery warning:**  \\nIf battery falls below about 17%, a warning will appear in the screen.\\n- Stock displays an icon in the upper right corner, but custom displays a red frame across the entire screen.\\n\\nIf battery falls below about 4%, AutoSave & Exit when retroarch is running and AutoSave setting is ON.\\n\\n**SELECT button:**  \\nAdjust the brightness by pressing L2/R2 while holding down.\\n\\n- Extended functions:\\n\\n**During suspend - MENU button:**  \\nTake a screenshot. a png file will be saved in /Screenshots in SD. (Same function as scrshot app)\\n\\n</details>\\n\\n\\n### Game switcher / Main UI tight integration    \\n<img src=\\"https://user-images.githubusercontent.com/16885275/177045714-bc6ab713-4fbf-49b8-b34c-f8ac1ce5e034.png\\" width=\\"350\\"/>\\n\\n    Change brightness with the up and down key.    \\n    MainUI and the game switcher are merged and they use the same launch script.     \\n    The game screens are now compressed. (from 1mo to 20-100ko)    \\n    Bootup script rewritten.     \\n\\n### New ports in the port collection (Credits : r0b0-tr0n, Schmurtz)   \\n<img src=\\"https://user-images.githubusercontent.com/16885275/177214139-b874b0e6-df84-4c9c-a12c-c827ae82747e.png\\" width=\\"500\\"/>   \\n\\n    New entries :  \\n    Quake   \\n    CannonBall   \\n    Flashback   \\n    Powder   \\n    Rick dangerous   \\n    MrBoom   \\n    Spear of Destiny   \\n    Super 3d Noahs Ark   \\n    Dinothawr   \\n    Wolfenstein 3d   \\n\\n[Ports Help (Credits : r0b0-tr0n)](https://github.com/OnionUI/Onion/files/9044872/Ports.Help.pdf)\\n\\n### Revamped Wiki (Credits : Olywa123) \\n[<img title=\\"GBMini by Kitsuvi\\" width=\\"350px\\" src=\\"https://user-images.githubusercontent.com/16885275/177215817-21a20392-3cd3-4b37-a667-ee42dbc93450.jpg?raw=true\\" />](https://github.com/Sichroteph/Onion/wiki/2.-Onion-Emulators-&-Ports) &nbsp; \\n\\n### Gamelists are accepted in every console by default (Olywa123)\\n\\n---\\n\\n    (v3.12.0) \\n    Initial release\\n\\n    (v3.12.1) \\n    Power button long press delay reduced from 1s to 0.5s for more snappiness. \\n    The main menu shutdown panel is not displayed anymore.\\n    The short pulse rumble (Main menu tap, power button tap..) is lowered by 20%\\n    The default DiMo Onion theme is updated to v1.2\\n\\n    (v3.12.2)\\n    Option to turn off button vibrations feedback. (Add a .noVibration file in the .tmp_update folder)\\n    Save states / auto save states times reduced : Faster exit time to the menu.\\n    Onion timers integration in the Keymon, boot script and play activity UI.\\n    (The RetroArch ones had a bug that added hundreds of hours erratically)\\n    The activity time is properly paused when the device is in sleep mode, even if it is not a RetroArch game.\\n    \\n    (v3.12.3) (Files updated : onionLauncher, keymon_onion, menuBar.png)     \\n\\n<img src=\\"https://user-images.githubusercontent.com/16885275/178365221-0af0b012-0e6a-45cf-b341-823a5dfa98cc.png\\" width=\\"350\\"/>  \\n\\n\\n    Game switcher changes :      \\n        Total time display.    \\n        Game launch / No game screen freeze fix.    \\n    Keymon :      \\n        Start button waking up the device fix."}]}')}}]);