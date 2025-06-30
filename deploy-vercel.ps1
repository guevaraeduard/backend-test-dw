# Script para desplegar en Vercel
# Ejecutar: .\deploy-vercel.ps1

Write-Host "🚀 Iniciando despliegue en Vercel..." -ForegroundColor Green

# Verificar si Vercel CLI está instalado
try {
    $vercelVersion = vercel --version
    Write-Host "✅ Vercel CLI encontrado: $vercelVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Vercel CLI no encontrado. Instalando..." -ForegroundColor Yellow
    npm install -g vercel
}

# Verificar si el proyecto está configurado
if (Test-Path ".vercel") {
    Write-Host "✅ Proyecto ya configurado con Vercel" -ForegroundColor Green
    Write-Host "🔄 Desplegando..." -ForegroundColor Yellow
    vercel --prod
} else {
    Write-Host "🔄 Configurando proyecto para Vercel..." -ForegroundColor Yellow
    vercel
}

Write-Host "✅ Despliegue completado!" -ForegroundColor Green
Write-Host "📝 Revisa la URL proporcionada por Vercel" -ForegroundColor Cyan 