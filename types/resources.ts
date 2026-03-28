import type { FirmwareResource } from './api';

// Remove the OfflineHardwareList since it's now in /public/data/hardware-list.json

const currentPrereleaseId = '2.7.20.6658ec2';

export const showPrerelease = false;

export const currentPrerelease = <FirmwareResource>{
  id: `v${currentPrereleaseId}`,
  title: `Meshtastic Firmware ${currentPrereleaseId} Pre-release`,
  zip_url: `https://github.com/meshtastic/firmware/releases/download/v${currentPrereleaseId}/firmware-${currentPrereleaseId}.zip`,
};

// Event Mode Configuration
// Set enabled to true to lock the flasher to a specific firmware for events
export interface EventModeConfig {
  enabled: boolean;
  eventName: string;
  eventTag: string;
  firmware: FirmwareResource;
}

const eventReleaseNotes = `
## Welcome to JaxMesh!

This firmware has been customized for the Jacksonville Meshtastic Community with pre-configured settings.

### What's included:
- **MEDIUM_FAST** modem preset (optimized for Jacksonville metro area)
- **JAXMesh** private channel pre-configured (Channel 1)
- **Region:** US | **Hop Limit:** 5 | **TX Power:** 30 dBm
- **Default channel** (Channel 0) preserved for wider mesh compatibility

### ⚠️ Important: Backup Before Flashing

If your device has existing settings or encryption keys, **backup your keys/configurations** before proceeding. Flashing will reset your device to factory settings.

### Quick Start

1. Ensure a **data-capable USB cable** is connected
2. Select your device type
3. Choose "Full Erase and Install"
4. After flashing, download the Meshtastic app and pair via Bluetooth
5. You're on the JaxMesh network!

### Community
- Discord: discord.gg/86uf2wTMwq
- Meetups: First Monday, 7PM at Southern Grounds & Co
- Website: jaxmesh.com

**Happy meshing, Jacksonville! 🌴**
`;

export const eventMode: EventModeConfig = {
  enabled: true,
  eventName: 'JaxMesh',
  eventTag: 'JaxMesh',
  firmware: {
    id: 'jaxmesh-latest',
    title: 'JaxMesh Custom Firmware',
    zip_url: 'https://github.com/blackandwhitehat/jaxmesh-flasher/releases/latest/download/jaxmesh-firmware.zip',
    release_notes: eventReleaseNotes,
  },
};

export const vendorCobrandingTag = "";
export const supportedVendorDeviceTags = ["RAK", "B&Q", "LilyGo", "Seeed", "Heltec", "DIY", "Elecrow", "M5Stack", "NomadStar", "muzi"];
