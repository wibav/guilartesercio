#!/bin/bash

# 📋 Pre-Deploy Checklist Script
# Este script verifica que todo esté listo para desplegar en Firebase

echo "🔍 Verificando configuración pre-despliegue...\n"

# Color codes
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

check_mark="✅"
cross_mark="❌"
warning_mark="⚠️"

# Función para verificar archivos
check_file() {
    if [ -f "$1" ]; then
        echo -e "${GREEN}${check_mark}${NC} $1 existe"
        return 0
    else
        echo -e "${RED}${cross_mark}${NC} $1 NO ENCONTRADO"
        return 1
    fi
}

# Función para verificar contenido
check_content() {
    if grep -q "$2" "$1" 2>/dev/null; then
        echo -e "${GREEN}${check_mark}${NC} $1 contiene '$2'"
        return 0
    else
        echo -e "${YELLOW}${warning_mark}${NC} $1 no contiene '$2' (revisar)"
        return 1
    fi
}

echo "📦 Archivos Principales"
echo "======================"
check_file "package.json"
check_file "next.config.mjs"
check_file "tailwind.config.js"
check_file ".eslintrc.json"

echo "\n🔥 Firebase Configuration"
echo "========================="
check_file "firebase.json"
check_file ".firebaserc"

echo "\n📄 Documentación"
echo "================"
check_file "README.md"
check_file "DEPLOY_FIREBASE.md"
check_file "SETUP_COMPLETE.md"
check_file "PROJECT_STRUCTURE.md"
check_file "TROUBLESHOOTING.md"

echo "\n💾 Variables de Entorno"
echo "======================="
if [ -f ".env.local" ]; then
    echo -e "${GREEN}${check_mark}${NC} .env.local existe"
    check_content ".env.local" "NEXT_PUBLIC_PHONE"
    check_content ".env.local" "NEXT_PUBLIC_EMAIL"
else
    echo -e "${YELLOW}${warning_mark}${NC} .env.local NO ENCONTRADO (copiar de .env.local.example)"
fi

echo "\n📁 Estructura de Carpetas"
echo "========================="
check_file "src/app/layout.jsx"
check_file "src/app/page.jsx"
check_file "src/app/globals.css"
check_file "src/components/Header.jsx"
check_file "src/components/Hero.jsx"
check_file "src/components/Services.jsx"
check_file "src/components/Projects.jsx"
check_file "src/components/WhyUs.jsx"
check_file "src/components/FAQ.jsx"
check_file "src/components/CTA.jsx"
check_file "src/components/Contact.jsx"
check_file "src/components/Footer.jsx"
check_file "src/components/Footer.jsx"

echo "\n🔧 Configuración Next.js"
echo "========================"
check_content "next.config.mjs" "output: 'export'"
check_content "next.config.mjs" "distDir: 'out'"
check_content "next.config.mjs" "unoptimized: true"

echo "\n🔐 Firebase Configuration"
echo "========================="
check_content "firebase.json" "\"public\": \"out\""
check_content "firebase.json" "\"destination\": \"/index.html\""

echo "\n📊 Resumen Final"
echo "================"

# Contar archivos
jsx_files=$(find src/components -name "*.jsx" 2>/dev/null | wc -l)
echo -e "Componentes React: ${GREEN}$jsx_files${NC}"

if [ -f "package-lock.json" ] || [ -f "yarn.lock" ]; then
    echo -e "Dependencias instaladas: ${GREEN}✅${NC}"
else
    echo -e "Dependencias instaladas: ${YELLOW}⚠️ Ejecutar: npm install o yarn install${NC}"
fi

if [ -d ".next" ] || [ -d "out" ]; then
    echo -e "Build anterior detectado: ${YELLOW}⚠️ Recomendado limpiar antes de nuevo build${NC}"
fi

echo "\n🚀 Próximos Pasos"
echo "================="
echo "1. Actualizar .firebaserc con tu ID de proyecto"
echo "2. Verificar .env.local con tu información"
echo "3. Ejecutar: npm run build"
echo "4. Probar localmente: firebase serve"
echo "5. Desplegar: npm run deploy"

echo "\n✅ Pre-Deploy Checklist Completado\n"
