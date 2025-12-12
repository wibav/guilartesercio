#!/usr/bin/env node

/**
 * Script de pre-build para optimizaciones previas al despliegue en Firebase
 * Este script se puede ejecutar antes de: npm run build
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 Verificando configuración para Firebase Hosting...\n');

// Verificar que .firebaserc existe
const firebaseRcPath = path.join(__dirname, '.firebaserc');
if (!fs.existsSync(firebaseRcPath)) {
    console.log('⚠️  Archivo .firebaserc no encontrado');
    console.log('   Ejecuta: firebase init\n');
}

// Verificar que firebase.json existe
const firebaseJsonPath = path.join(__dirname, 'firebase.json');
if (!fs.existsSync(firebaseJsonPath)) {
    console.log('⚠️  Archivo firebase.json no encontrado');
    console.log('   Ejecuta: firebase init\n');
}

// Verificar variables de entorno
const envPath = path.join(__dirname, '.env.local');
if (!fs.existsSync(envPath)) {
    console.log('⚠️  Archivo .env.local no encontrado');
    console.log('   Copia .env.local.example a .env.local y actualiza los valores\n');
}

console.log('✅ Configuración verificada\n');
console.log('Para desplegar ejecuta:');
console.log('  npm run build    # Compilar el proyecto');
console.log('  firebase serve   # Probar localmente (opcional)');
console.log('  npm run deploy   # Desplegar en Firebase\n');
