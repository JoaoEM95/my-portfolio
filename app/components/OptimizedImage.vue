<template>
  <!--
    🖼️ OPTIMIZED IMAGE COMPONENT

    Componente que carrega imagens de forma lazy (preguiçosa).
    A imagem só é carregada quando entra no viewport (área visível).

    Nota: Renomeado de LazyImage para OptimizedImage para evitar
    conflito com o prefixo "Lazy" reservado do Nuxt.
  -->
  <div class="lazy-image-wrapper" ref="imageWrapper">
    <!-- Placeholder enquanto a imagem carrega -->
    <div v-if="!isLoaded" class="image-placeholder">
      <div class="spinner"></div>
      <p>{{ loadingText }}</p>
    </div>

    <!-- Imagem real (só renderiza quando necessário) -->
    <transition name="fade">
      <img
        v-if="shouldLoad"
        :src="src"
        :alt="alt"
        @load="onImageLoad"
        @error="onImageError"
        class="lazy-image"
        :class="{ 'is-loaded': isLoaded }"
      />
    </transition>

    <!-- Mensagem de erro -->
    <div v-if="hasError" class="error-message">
      <span class="error-icon">⚠️</span>
      <p>Erro ao carregar imagem</p>
    </div>
  </div>
</template>

<script setup>
/**
 * 🖼️ OPTIMIZED IMAGE - Componente de Imagem com Lazy Loading
 *
 * Usa a Intersection Observer API para detectar quando
 * a imagem entra na viewport e só então carrega ela.
 *
 * ⚠️ Nota: Evite usar o prefixo "Lazy" no nome de componentes,
 * pois é reservado pelo Nuxt para importações dinâmicas.
 *
 * 📦 Props:
 * - src: URL da imagem
 * - alt: Texto alternativo
 * - loadingText: Texto mostrado durante o carregamento
 */

import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    default: 'Lazy loaded image'
  },
  loadingText: {
    type: String,
    default: 'Carregando imagem...'
  }
})

const imageWrapper = ref(null)
const shouldLoad = ref(false)
const isLoaded = ref(false)
const hasError = ref(false)
let observer = null

onMounted(() => {
  // Cria o Intersection Observer
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // A imagem entrou na viewport, carrega ela!
          shouldLoad.value = true
          // Para de observar depois que começou a carregar
          observer.unobserve(entry.target)
        }
      })
    },
    {
      // Começa a carregar 200px antes de entrar na viewport
      rootMargin: '200px'
    }
  )

  // Começa a observar o wrapper da imagem
  if (imageWrapper.value) {
    observer.observe(imageWrapper.value)
  }
})

onUnmounted(() => {
  // Limpa o observer quando o componente é destruído
  if (observer && imageWrapper.value) {
    observer.unobserve(imageWrapper.value)
  }
})

const onImageLoad = () => {
  isLoaded.value = true
  console.log('✅ Imagem carregada:', props.src)
}

const onImageError = () => {
  hasError.value = true
  console.error('❌ Erro ao carregar imagem:', props.src)
}
</script>

<style scoped>
.lazy-image-wrapper {
  position: relative;
  width: 100%;
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f1f5f9;
  border-radius: 12px;
  overflow: hidden;
}

.image-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  color: #64748b;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #e2e8f0;
  border-top-color: #00dc82;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.lazy-image {
  width: 100%;
  height: auto;
  display: block;
  opacity: 0;
  transition: opacity 0.5s ease;
}

.lazy-image.is-loaded {
  opacity: 1;
}

.error-message {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: #ef4444;
  padding: 2rem;
}

.error-icon {
  font-size: 2rem;
}

/* Fade transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
