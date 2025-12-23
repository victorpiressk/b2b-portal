#!/bin/bash

# Script de Migração CRA → Vite
# Execute este script na raiz do seu projeto

echo "🚀 Iniciando migração CRA → Vite..."
echo ""

# Cores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Função para verificar se comando existe
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Verificar se está no diretório correto
if [ ! -f "package.json" ]; then
    echo -e "${RED}❌ Erro: package.json não encontrado. Execute este script na raiz do projeto.${NC}"
    exit 1
fi

echo -e "${YELLOW}📦 Passo 1: Limpando instalação antiga...${NC}"
rm -rf node_modules package-lock.json
echo -e "${GREEN}✅ Limpeza concluída${NC}"
echo ""

echo -e "${YELLOW}📁 Passo 2: Verificando estrutura de arquivos...${NC}"

# Verificar se existe public/index.html
if [ -f "public/index.html" ]; then
    echo -e "${YELLOW}⚠️  Encontrado public/index.html (será substituído pelo novo index.html na raiz)${NC}"
fi

# Verificar se existe src/index.tsx
if [ -f "src/index.tsx" ]; then
    echo -e "${GREEN}✅ src/index.tsx encontrado${NC}"
    # Perguntar se deve renomear para main.tsx
    read -p "Deseja renomear src/index.tsx para src/main.tsx? (recomendado) [y/N] " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        git mv src/index.tsx src/main.tsx
        echo -e "${GREEN}✅ Renomeado para src/main.tsx${NC}"
        # Atualizar index.html
        sed -i 's/\/src\/index\.tsx/\/src\/main.tsx/g' index.html
    else
        echo -e "${YELLOW}⚠️  Mantendo src/index.tsx. Certifique-se de atualizar o index.html manualmente.${NC}"
        # Atualizar index.html para usar index.tsx
        sed -i 's/\/src\/main\.tsx/\/src\/index.tsx/g' index.html
    fi
elif [ -f "src/main.tsx" ]; then
    echo -e "${GREEN}✅ src/main.tsx já existe${NC}"
else
    echo -e "${RED}❌ Erro: Arquivo de entrada não encontrado (src/index.tsx ou src/main.tsx)${NC}"
    exit 1
fi
echo ""

echo -e "${YELLOW}🔧 Passo 3: Instalando dependências...${NC}"
npm install
if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Dependências instaladas com sucesso${NC}"
else
    echo -e "${RED}❌ Erro ao instalar dependências${NC}"
    exit 1
fi
echo ""

echo -e "${YELLOW}📝 Passo 4: Criando arquivo .env...${NC}"
if [ ! -f ".env" ]; then
    cp .env.example .env
    echo -e "${GREEN}✅ Arquivo .env criado${NC}"
else
    echo -e "${YELLOW}⚠️  .env já existe, pulando...${NC}"
fi
echo ""

echo -e "${YELLOW}🧹 Passo 5: Removendo arquivos desnecessários do CRA...${NC}"

# Lista de arquivos do CRA para remover
files_to_remove=(
    "src/reportWebVitals.ts"
    "src/setupTests.ts"
    "src/react-app-env.d.ts"
)

for file in "${files_to_remove[@]}"; do
    if [ -f "$file" ]; then
        read -p "Remover $file? [y/N] " -n 1 -r
        echo
        if [[ $REPLY =~ ^[Yy]$ ]]; then
            rm "$file"
            echo -e "${GREEN}✅ Removido: $file${NC}"
        fi
    fi
done
echo ""

echo -e "${GREEN}✨ Migração concluída!${NC}"
echo ""
echo -e "${YELLOW}📋 Próximos passos:${NC}"
echo "1. Revise as mudanças nos arquivos"
echo "2. Procure por 'process.env.REACT_APP_' no código e substitua por 'import.meta.env.VITE_'"
echo "3. Procure por '%PUBLIC_URL%' e remova essas referências"
echo "4. Execute: npm run dev"
echo "5. Teste todas as funcionalidades"
echo "6. Execute: npm run build"
echo "7. Execute: npm run preview"
echo ""
echo -e "${GREEN}🎉 Boa sorte com a migração!${NC}"
