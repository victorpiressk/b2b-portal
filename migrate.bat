@echo off
chcp 65001 >nul
setlocal enabledelayedexpansion

echo.
echo 🚀 Iniciando migração CRA → Vite...
echo.

REM Verificar se está no diretório correto
if not exist "package.json" (
    echo ❌ Erro: package.json não encontrado. Execute este script na raiz do projeto.
    pause
    exit /b 1
)

echo 📦 Passo 1: Limpando instalação antiga...
if exist "node_modules" (
    echo Removendo node_modules...
    rmdir /s /q node_modules
)
if exist "package-lock.json" (
    del /f package-lock.json
)
echo ✅ Limpeza concluída
echo.

echo 📁 Passo 2: Verificando estrutura de arquivos...

REM Verificar se existe public/index.html
if exist "public\index.html" (
    echo ⚠️  Encontrado public\index.html ^(será substituído pelo novo index.html na raiz^)
)

REM Verificar se existe src/index.tsx
if exist "src\index.tsx" (
    echo ✅ src\index.tsx encontrado
    echo.
    set /p rename="Deseja renomear src\index.tsx para src\main.tsx? (recomendado) [S/N]: "
    
    if /i "!rename!"=="S" (
        if exist ".git" (
            git mv src\index.tsx src\main.tsx
            echo ✅ Renomeado para src\main.tsx ^(com git^)
        ) else (
            move src\index.tsx src\main.tsx
            echo ✅ Renomeado para src\main.tsx
        )
    ) else (
        echo ⚠️  Mantendo src\index.tsx. Certifique-se de atualizar o index.html manualmente.
    )
) else if exist "src\main.tsx" (
    echo ✅ src\main.tsx já existe
) else (
    echo ❌ Erro: Arquivo de entrada não encontrado ^(src\index.tsx ou src\main.tsx^)
    pause
    exit /b 1
)
echo.

echo 🔧 Passo 3: Instalando dependências...
call npm install
if errorlevel 1 (
    echo ❌ Erro ao instalar dependências
    pause
    exit /b 1
)
echo ✅ Dependências instaladas com sucesso
echo.

echo 📝 Passo 4: Criando arquivo .env...
if not exist ".env" (
    copy .env.example .env >nul
    echo ✅ Arquivo .env criado
) else (
    echo ⚠️  .env já existe, pulando...
)
echo.

echo 🧹 Passo 5: Removendo arquivos desnecessários do CRA...
echo.

if exist "src\reportWebVitals.ts" (
    set /p confirm1="Remover src\reportWebVitals.ts? [S/N]: "
    if /i "!confirm1!"=="S" (
        del /f "src\reportWebVitals.ts"
        echo ✅ Removido: src\reportWebVitals.ts
    )
)

if exist "src\setupTests.ts" (
    set /p confirm2="Remover src\setupTests.ts? [S/N]: "
    if /i "!confirm2!"=="S" (
        del /f "src\setupTests.ts"
        echo ✅ Removido: src\setupTests.ts
    )
)

if exist "src\react-app-env.d.ts" (
    set /p confirm3="Remover src\react-app-env.d.ts? [S/N]: "
    if /i "!confirm3!"=="S" (
        del /f "src\react-app-env.d.ts"
        echo ✅ Removido: src\react-app-env.d.ts
    )
)
echo.

echo ✨ Migração concluída!
echo.
echo 📋 Próximos passos:
echo 1. Revise as mudanças nos arquivos
echo 2. Procure por 'process.env.REACT_APP_' no código e substitua por 'import.meta.env.VITE_'
echo 3. Procure por '%%PUBLIC_URL%%' e remova essas referências
echo 4. Execute: npm run dev
echo 5. Teste todas as funcionalidades
echo 6. Execute: npm run build
echo 7. Execute: npm run preview
echo.
echo 🎉 Boa sorte com a migração!
echo.
pause
