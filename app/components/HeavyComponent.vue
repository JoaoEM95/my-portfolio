<template>
  <!--
    🎨 COMPONENTE PESADO (Heavy Component)

    Este é um componente "pesado" usado para demonstrar lazy loading.
    Na prática, componentes pesados podem incluir:
    - Gráficos complexos (Chart.js, D3.js)
    - Editores ricos (TinyMCE, Quill)
    - Mapas interativos (Leaflet, Mapbox)
    - Visualizações 3D (Three.js)
  -->
  <div class="heavy-component">
    <div class="component-badge">
      <span class="badge-icon">📦</span>
      <span class="badge-text">Componente Carregado!</span>
    </div>

    <div class="component-content">
      <h3>🎉 Componente Pesado Carregado com Sucesso!</h3>
      <p class="description">
        Este componente foi carregado dinamicamente usando lazy loading.
        Ele só foi baixado quando você clicou no botão, economizando largura de banda!
      </p>

      <!-- Simulação de Dados Complexos -->
      <div class="data-visualization">
        <h4>📊 Dados Simulados</h4>
        <div class="chart-bars">
          <div
            v-for="(value, index) in chartData"
            :key="index"
            class="bar"
            :style="{ height: `${value}%` }"
          >
            <span class="bar-label">{{ value }}%</span>
          </div>
        </div>
      </div>

      <!-- Estatísticas -->
      <div class="stats-grid">
        <div class="stat-item">
          <span class="stat-icon">⚡</span>
          <div class="stat-content">
            <span class="stat-value">{{ loadTime }}ms</span>
            <span class="stat-label">Tempo de Carregamento</span>
          </div>
        </div>
        <div class="stat-item">
          <span class="stat-icon">📦</span>
          <div class="stat-content">
            <span class="stat-value">{{ componentSize }}</span>
            <span class="stat-label">Tamanho Estimado</span>
          </div>
        </div>
        <div class="stat-item">
          <span class="stat-icon">✅</span>
          <div class="stat-content">
            <span class="stat-value">Lazy</span>
            <span class="stat-label">Tipo de Carregamento</span>
          </div>
        </div>
      </div>

      <!-- Informações Técnicas -->
      <div class="tech-info">
        <h4>💡 Informações Técnicas</h4>
        <ul>
          <li><strong>Carregamento:</strong> Dinâmico (on-demand)</li>
          <li><strong>Método:</strong> defineAsyncComponent()</li>
          <li><strong>Vantagem:</strong> Bundle splitting automático</li>
          <li><strong>Performance:</strong> Reduz o tamanho inicial da página</li>
        </ul>
      </div>

      <!-- Interactive Demo -->
      <div class="interactive-demo">
        <h4>🎮 Demonstração Interativa</h4>
        <div class="demo-controls">
          <button @click="incrementCounter" class="demo-button">
            Contador: {{ counter }}
          </button>
          <button @click="toggleAnimation" class="demo-button">
            {{ isAnimating ? '⏸️ Pausar' : '▶️ Animar' }}
          </button>
        </div>
        <div class="demo-display" :class="{ 'is-animating': isAnimating }">
          <div class="animated-circle"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
/**
 * 🎨 HEAVY COMPONENT
 *
 * Este componente simula um componente "pesado" que:
 * - Tem muito código
 * - Importa bibliotecas grandes
 * - Realiza computações complexas
 * - Não é necessário no carregamento inicial
 *
 * Com lazy loading, ele só é carregado quando realmente necessário!
 */

import { ref, onMounted } from 'vue'

// Estado do componente
const loadTime = ref(0)
const componentSize = ref('~25KB')
const counter = ref(0)
const isAnimating = ref(false)

// Dados simulados para o gráfico
const chartData = ref([65, 45, 80, 55, 90, 70, 85])

// Simula o tempo de carregamento
onMounted(() => {
  const startTime = performance.now()

  // Simula processamento pesado
  setTimeout(() => {
    const endTime = performance.now()
    loadTime.value = Math.round(endTime - startTime)
  }, 100)

  console.log('📦 Heavy Component montado!')
})

// Métodos interativos
const incrementCounter = () => {
  counter.value++
}

const toggleAnimation = () => {
  isAnimating.value = !isAnimating.value
}

/**
 * 💡 CASOS DE USO REAIS:
 *
 * Este componente poderia ser:
 * - Um editor de texto rico (TinyMCE, Quill)
 * - Um visualizador de gráficos (Chart.js, ECharts)
 * - Um componente de mapa (Leaflet, Mapbox)
 * - Um reprodutor de vídeo (Video.js)
 * - Um modal de checkout com múltiplas etapas
 */
</script>

<style scoped>
.heavy-component {
  width: 100%;
  background: white;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  overflow: hidden;
  animation: fadeIn 0.5s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.component-badge {
  background: linear-gradient(135deg, #00dc82 0%, #00a86b 100%);
  color: white;
  padding: 1.25rem 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: center;
  font-weight: 700;
  font-size: 1.1rem;
}

.badge-icon {
  font-size: 1.5rem;
  animation: bounce 1s ease-in-out infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

.component-content {
  padding: 2rem;
}

.component-content h3 {
  color: #1e293b;
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
}

.description {
  color: #64748b;
  line-height: 1.7;
  margin-bottom: 2rem;
}

/* Data Visualization */
.data-visualization {
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 2rem;
}

.data-visualization h4 {
  color: #1e293b;
  margin-bottom: 1.25rem;
  font-size: 1.1rem;
}

.chart-bars {
  display: flex;
  align-items: flex-end;
  gap: 1rem;
  height: 200px;
  padding: 1rem 0;
}

.bar {
  flex: 1;
  background: linear-gradient(180deg, #667eea 0%, #764ba2 100%);
  border-radius: 8px 8px 0 0;
  position: relative;
  min-height: 30px;
  transition: all 0.3s ease;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 0.5rem;
}

.bar:hover {
  opacity: 0.8;
  transform: translateY(-4px);
}

.bar-label {
  color: white;
  font-weight: 700;
  font-size: 0.9rem;
}

/* Stats Grid */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
}

.stat-item {
  background: linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%);
  border: 2px solid #e9d5ff;
  border-radius: 12px;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: all 0.3s ease;
}

.stat-item:hover {
  border-color: #667eea;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.2);
}

.stat-icon {
  font-size: 2rem;
}

.stat-content {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.stat-value {
  color: #1e293b;
  font-size: 1.5rem;
  font-weight: 700;
}

.stat-label {
  color: #64748b;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Tech Info */
.tech-info {
  background: #1e293b;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 2rem;
}

.tech-info h4 {
  color: white;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.tech-info ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.tech-info ul li {
  color: #cbd5e1;
  padding: 0.5rem 0;
  line-height: 1.6;
}

.tech-info ul li strong {
  color: #00dc82;
}

/* Interactive Demo */
.interactive-demo {
  background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
  border-radius: 12px;
  padding: 1.5rem;
}

.interactive-demo h4 {
  color: #1e293b;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.demo-controls {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
}

.demo-button {
  padding: 0.75rem 1.5rem;
  background: white;
  border: 2px solid #f59e0b;
  border-radius: 8px;
  color: #1e293b;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.demo-button:hover {
  background: #f59e0b;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(245, 158, 11, 0.3);
}

.demo-display {
  background: white;
  border-radius: 8px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.animated-circle {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  transition: all 0.3s ease;
}

.demo-display.is-animating .animated-circle {
  animation: spin 2s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg) scale(1); }
  50% { transform: rotate(180deg) scale(1.5); }
  to { transform: rotate(360deg) scale(1); }
}

/* Responsive */
@media (max-width: 768px) {
  .component-content {
    padding: 1.5rem;
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }

  .chart-bars {
    height: 150px;
  }
}
</style>
