# JaxMesh Flasher

Custom Meshtastic firmware builds and web flasher for the [Jacksonville Meshtastic Community](https://jaxmesh.com).

## What This Does

1. **Builds custom firmware** for every Meshtastic release with JaxMesh defaults baked in
2. **Supports all devices** the official Meshtastic web flasher supports
3. **One-click flash** -- plug in your device, visit the flasher, click flash, done

## Firmware Defaults

| Setting | Value |
|---------|-------|
| Modem Preset | MEDIUM_FAST |
| Region | US |
| Hop Limit | 5 |
| TX Power | 30 dBm |
| RX Boosted Gain | Enabled |
| Channel 0 | Default (standard Meshtastic) |
| Channel 1 | JAXMesh (encrypted, private PSK) |
| Event Mode | Enabled (locks config on factory reset) |
| Timezone | EST/EDT |

## How It Works

- GitHub Actions watches for new Meshtastic firmware releases
- Automatically clones the firmware, applies `userPrefs.jsonc` + patches
- Builds for ALL supported device targets via PlatformIO
- Publishes firmware zips as GitHub Releases
- Web flasher (fork of official Meshtastic flasher) points to our releases

## Two Firmware Variants

- **Standard** -- JaxMesh channel config + settings only
- **Extended** -- Standard + Announcement Module (from [meshtastic-announce](https://github.com/blackandwhitehat/meshtastic-announce))

## Repository Structure

```
.github/workflows/
  build.yml          -- CI: build firmware on new Meshtastic releases
userPrefs.jsonc      -- JaxMesh firmware defaults
patches/
  hop-limit.patch    -- Sets hop_limit to 5 (no USERPREFS override exists)
  tx-power.patch     -- Sets tx_power to 30 and tx_enabled to true
flasher/             -- Web flasher fork (future)
```

## Manual Build

```bash
git clone https://github.com/meshtastic/firmware.git
cd firmware
git submodule update --init
cp ../userPrefs.jsonc .
git apply ../patches/*.patch
# Build with PlatformIO for your target, e.g.:
pio run -e heltec-v3
```

## Community

- Website: [jaxmesh.com](https://jaxmesh.com)
- Discord: [discord.gg/86uf2wTMwq](https://discord.gg/86uf2wTMwq)
- Meetups: First Monday of every month, 7PM at Southern Grounds & Co
- Operated by [CommsForAll.com](https://commsforall.com)
