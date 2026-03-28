<template>
  <div class="logo-header mx-auto">
    <!-- RAK co-branding variant -->
    <div
      v-if="vendorCobrandingTag === 'RAK'"
      class="logo-header-content"
    >
      <div class="logo-container">
        <img
          v-if="themeStore.isDark"
          src="@/assets/img/logo.svg"
          class="logo-icon"
          alt="Meshtastic Logo"
        >
        <img
          v-else
          src="@/assets/img/logo-dark.svg"
          class="logo-icon"
          alt="Meshtastic Logo"
        >
        <span class="logo-separator">×</span>
        <img
          src="@/public/img/icon_rak-cropped.svg"
          class="logo-icon-partner"
          alt="RAK Logo"
        >
      </div>
      <h1 class="logo-title">
        {{ $t('header_title') }}
      </h1>
    </div>

    <!-- JaxMesh branding variant -->
    <div
      v-else-if="eventMode.enabled && eventMode.eventTag === 'JaxMesh'"
      class="logo-header-content"
    >
      <div class="logo-container">
        <a href="https://jaxmesh.com" target="_blank" class="logo-link">
          <div class="logo-glow">
            <img
              src="/img/jaxmesh-logo.png"
              class="logo-icon-jaxmesh"
              alt="JaxMesh Logo"
            >
          </div>
        </a>
      </div>
      <h1 class="logo-title">
        <span class="logo-title-jaxmesh">JaxMesh</span>
        <span class="logo-title-flasher">Community</span>
        <span class="logo-title-jaxmesh">Flasher</span>
      </h1>
      <a
        href="https://discord.gg/86uf2wTMwq"
        target="_blank"
        class="discord-cta"
      >
        <span class="discord-icon">💬</span>
        <span class="discord-text">
          <strong>Join our Discord</strong>
          <span class="discord-sub">Monthly #MeshMonday meetups · News · Support</span>
        </span>
        <span class="discord-arrow">→</span>
      </a>
    </div>

    <!-- Hamcation event branding variant -->
    <div
      v-else-if="eventMode.enabled && eventMode.eventTag === 'Hamcation'"
      class="logo-header-content"
    >
      <div class="logo-container">
        <div class="logo-glow">
          <img
            v-if="themeStore.isDark"
            src="@/assets/img/logo.svg"
            class="logo-icon"
            alt="Meshtastic Logo"
          >
          <img
            v-else
            src="@/assets/img/logo-dark.svg"
            class="logo-icon"
            alt="Meshtastic Logo"
          >
        </div>
        <span class="logo-separator">×</span>
        <img
          src="@/assets/img/hamcation.svg"
          class="logo-icon-event"
          alt="Hamcation Logo"
        >
      </div>
      <h1 class="logo-title">
        <span class="logo-title-gradient">{{ $t('header_title') }}</span>
      </h1>
      <p class="logo-tagline">{{ eventMode.eventName }}</p>
    </div>

    <!-- Standard variant -->
    <div
      v-else
      class="logo-header-content"
    >
      <div class="logo-container">
        <div class="logo-glow">
          <img
            v-if="themeStore.isDark"
            src="@/assets/img/logo.svg"
            class="logo-icon"
            alt="Meshtastic Logo"
          >
          <img
            v-else
            src="@/assets/img/logo-dark.svg"
            class="logo-icon"
            alt="Meshtastic Logo"
          >
        </div>
      </div>
      <h1 class="logo-title">
        <span class="logo-title-gradient">{{ $t('header_title') }}</span>
      </h1>
      <p class="logo-tagline">{{ $t('description') }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { vendorCobrandingTag } from '~/types/resources'
import { useThemeStore } from '~/stores/themeStore'
import { useEventMode } from '~/composables/useEventMode'

const themeStore = useThemeStore()
const { eventMode } = useEventMode()
</script>

<style scoped>
.logo-header {
  text-align: center;
  padding: 1rem 0;
}

.logo-header-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.logo-glow {
  position: relative;
}

.logo-glow::before {
  content: '';
  position: absolute;
  inset: -8px;
  background: radial-gradient(circle, var(--accent-glow), transparent 70%);
  border-radius: 50%;
  animation: logo-pulse 3s ease-in-out infinite;
  will-change: transform, opacity;
  transform: translateZ(0);
}

@keyframes logo-pulse {
  0%, 100% { opacity: 0.5; transform: scale(1) translateZ(0); }
  50% { opacity: 0.8; transform: scale(1.05) translateZ(0); }
}

.logo-icon {
  position: relative;
  height: 4rem;
  width: 4rem;
  object-fit: contain;
  filter: drop-shadow(0 0 20px var(--accent-glow));
  transition: transform 0.3s ease, filter 0.3s ease;
}

.logo-icon:hover {
  transform: scale(1.05);
  filter: drop-shadow(0 0 30px var(--accent-subtle));
}

@media (min-width: 640px) {
  .logo-icon {
    height: 5rem;
    width: 5rem;
  }
}

@media (min-width: 768px) {
  .logo-icon {
    height: 6rem;
    width: 6rem;
  }
}

.logo-icon-partner {
  height: 6rem;
  width: 6rem;
}

@media (min-width: 640px) {
  .logo-icon-partner {
    height: 8rem;
    width: 8rem;
  }
}

.logo-icon-event {
  height: 5rem;
  width: auto;
  object-fit: contain;
  border-radius: 0.5rem;
}

@media (min-width: 640px) {
  .logo-icon-event {
    height: 6rem;
  }
}

@media (min-width: 768px) {
  .logo-icon-event {
    height: 7rem;
  }
}
.logo-separator {
  font-size: 2rem;
  color: var(--text-muted);
  font-weight: 200;
}

.logo-title {
  font-family: 'Doto', sans-serif;
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin: 0;
  color: var(--text-default);
}

@media (min-width: 640px) {
  .logo-title {
    font-size: 3rem;
  }
}

@media (min-width: 768px) {
  .logo-title {
    font-size: 3.75rem;
  }
}

.logo-title-gradient {
  background: linear-gradient(135deg, var(--accent) 0%, var(--accent) 40%, var(--accent-dark) 70%, var(--accent-dark) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: none;
  filter: drop-shadow(0 2px 10px var(--accent-glow));
}

:root[data-theme="light"] .logo-title-gradient {
  background: none;
  -webkit-background-clip: unset;
  -webkit-text-fill-color: unset;
  background-clip: unset;
  color: #1a1a1a;
  filter: none;
}

.logo-tagline {
  font-size: 0.875rem;
  color: var(--text-muted);
  max-width: 80%;
  text-align: center;
  margin-top: 0.25rem;
}

@media (min-width: 640px) {
  .logo-tagline {
    font-size: 1rem;
  }
}

.logo-icon-jaxmesh {
  position: relative;
  height: 6rem;
  width: auto;
  object-fit: contain;
  filter: drop-shadow(0 0 20px rgba(34, 197, 94, 0.3));
  transition: transform 0.3s ease;
}

.logo-icon-jaxmesh:hover {
  transform: scale(1.05);
}

@media (min-width: 640px) {
  .logo-icon-jaxmesh {
    height: 8rem;
  }
}

@media (min-width: 768px) {
  .logo-icon-jaxmesh {
    height: 10rem;
  }
}

.logo-link {
  text-decoration: none;
  transition: transform 0.2s;
}

.logo-link:hover {
  transform: scale(1.05);
}

.logo-title-jaxmesh {
  background: linear-gradient(135deg, #22c55e 0%, #16a34a 40%, #15803d 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 2px 10px rgba(34, 197, 94, 0.3));
}

.logo-title-flasher {
  background: linear-gradient(135deg, #facc15 0%, #eab308 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 2px 10px rgba(234, 179, 8, 0.2));
  margin: 0 0.3em;
}

:root[data-theme="light"] .logo-title-jaxmesh {
  background: linear-gradient(135deg, #16a34a, #15803d);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: none;
}

:root[data-theme="light"] .logo-title-flasher {
  background: linear-gradient(135deg, #ca8a04, #a16207);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: none;
}

.discord-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1.5rem;
  margin-top: 0.5rem;
  background: linear-gradient(135deg, #5865F2 0%, #4752C4 100%);
  border-radius: 12px;
  color: white;
  text-decoration: none;
  transition: transform 0.2s, box-shadow 0.2s;
  box-shadow: 0 4px 15px rgba(88, 101, 242, 0.3);
}

.discord-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(88, 101, 242, 0.5);
}

.discord-icon {
  font-size: 1.5rem;
}

.discord-text {
  display: flex;
  flex-direction: column;
  text-align: left;
  line-height: 1.3;
}

.discord-text strong {
  font-size: 0.875rem;
  font-weight: 700;
}

.discord-sub {
  font-size: 0.7rem;
  opacity: 0.85;
}

.discord-arrow {
  font-size: 1.2rem;
  opacity: 0.7;
  transition: transform 0.2s;
}

.discord-cta:hover .discord-arrow {
  transform: translateX(3px);
}
</style>
