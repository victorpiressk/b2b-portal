# Script de Migracao CRA -> Vite para Windows
# Execute este script no PowerShell na raiz do seu projeto

Write-Host "Iniciando migracao CRA -> Vite..." -ForegroundColor Cyan
Write-Host ""

# Verificar se esta no diretorio correto
if (-not (Test-Path "package.json")) {
    Write-Host "ERRO: package.json nao encontrado. Execute este script na raiz do projeto." -ForegroundColor Red
    exit 1
}

Write-Host "Passo 1: Limpando instalacao antiga..." -ForegroundColor Yellow
if (Test-Path "node_modules") {
    Remove-Item -Recurse -Force node_modules
}
if (Test-Path "package-lock.json") {
    Remove-Item -Force package-lock.json
}
Write-Host "Limpeza concluida" -ForegroundColor Green
Write-Host ""

Write-Host "Passo 2: Verificando estrutura de arquivos..." -ForegroundColor Yellow

# Verificar se existe public/index.html
if (Test-Path "public/index.html") {
    Write-Host "Encontrado public/index.html (sera substituido pelo novo index.html na raiz)" -ForegroundColor Yellow
}

# Verificar se existe src/index.tsx
if (Test-Path "src/index.tsx") {
    Write-Host "src/index.tsx encontrado" -ForegroundColor Green
    
    # Perguntar se deve renomear para main.tsx
    $rename = Read-Host "Deseja renomear src/index.tsx para src/main.tsx? (recomendado) [S/N]"
    
    if ($rename -eq "S" -or $rename -eq "s") {
        if (Test-Path ".git") {
            # Usar git mv se o repositorio tem git
            git mv src/index.tsx src/main.tsx
            Write-Host "Renomeado para src/main.tsx (com git)" -ForegroundColor Green
        } else {
            # Mover arquivo normalmente
            Move-Item src/index.tsx src/main.tsx
            Write-Host "Renomeado para src/main.tsx" -ForegroundColor Green
        }
        
        # Atualizar index.html se existir
        if (Test-Path "index.html") {
            (Get-Content index.html) -replace '/src/index\.tsx', '/src/main.tsx' | Set-Content index.html
        }
    } else {
        Write-Host "Mantendo src/index.tsx. Certifique-se de atualizar o index.html manualmente." -ForegroundColor Yellow
        
        # Atualizar index.html para usar index.tsx
        if (Test-Path "index.html") {
            (Get-Content index.html) -replace '/src/main\.tsx', '/src/index.tsx' | Set-Content index.html
        }
    }
} elseif (Test-Path "src/main.tsx") {
    Write-Host "src/main.tsx ja existe" -ForegroundColor Green
} else {
    Write-Host "ERRO: Arquivo de entrada nao encontrado (src/index.tsx ou src/main.tsx)" -ForegroundColor Red
    exit 1
}
Write-Host ""

Write-Host "Passo 3: Instalando dependencias..." -ForegroundColor Yellow
npm install
if ($LASTEXITCODE -eq 0) {
    Write-Host "Dependencias instaladas com sucesso" -ForegroundColor Green
} else {
    Write-Host "Erro ao instalar dependencias" -ForegroundColor Red
    exit 1
}
Write-Host ""

Write-Host "Passo 4: Criando arquivo .env..." -ForegroundColor Yellow
if (-not (Test-Path ".env")) {
    Copy-Item .env.example .env
    Write-Host "Arquivo .env criado" -ForegroundColor Green
} else {
    Write-Host ".env ja existe, pulando..." -ForegroundColor Yellow
}
Write-Host ""

Write-Host "Passo 5: Removendo arquivos desnecessarios do CRA..." -ForegroundColor Yellow

# Lista de arquivos do CRA para remover
$filesToRemove = @(
    "src/reportWebVitals.ts",
    "src/setupTests.ts",
    "src/react-app-env.d.ts"
)

foreach ($file in $filesToRemove) {
    if (Test-Path $file) {
        $confirm = Read-Host "Remover $file? [S/N]"
        if ($confirm -eq "S" -or $confirm -eq "s") {
            Remove-Item $file
            Write-Host "Removido: $file" -ForegroundColor Green
        }
    }
}
Write-Host ""

Write-Host "Migracao concluida!" -ForegroundColor Green
Write-Host ""
Write-Host "Proximos passos:" -ForegroundColor Yellow
Write-Host "1. Revise as mudancas nos arquivos"
Write-Host "2. Procure por 'process.env.REACT_APP_' no codigo e substitua por 'import.meta.env.VITE_'"
Write-Host "3. Procure por '%PUBLIC_URL%' e remova essas referencias"
Write-Host "4. Execute: npm run dev"
Write-Host "5. Teste todas as funcionalidades"
Write-Host "6. Execute: npm run build"
Write-Host "7. Execute: npm run preview"
Write-Host ""
Write-Host "Boa sorte com a migracao!" -ForegroundColor Green
