# 💻 Laboratório Virtual — Rufus, BIOS e UEFI

> Simulador educacional de **Rufus, BIOS Legacy e UEFI**, desenvolvido em HTML, CSS e JavaScript para auxiliar no ensino de Sistemas Operacionais, boot e instalação de sistemas.

[![HTML5](https://img.shields.io/badge/HTML5-HTML-orange?logo=html5)](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-CSS-blue?logo=css3)](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-JS-yellow?logo=javascript)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Online-success?logo=github)](https://sammyfreitas.github.io/Laboratorio_Virtual)

## 🌐 Acesse o simulador

O Laboratório Virtual pode ser utilizado diretamente pelo navegador, sem instalação:

### 👉 [ABRIR O LABORATÓRIO VIRTUAL](https://sammyfreitas.github.io/Laboratorio_Virtual)

---

## 📖 Sobre o projeto

O **Laboratório Virtual** é um simulador educacional criado para auxiliar em aulas de **Sistemas Operacionais e Tecnologia da Informação**.

O projeto surgiu da necessidade de demonstrar procedimentos que normalmente dependem de acesso administrativo ao computador ou ao próprio hardware, como:

* criação de mídias inicializáveis;
* configuração de BIOS;
* configuração de UEFI;
* alteração da ordem de boot;
* seleção entre GPT e MBR;
* configuração de Secure Boot;
* inicialização por dispositivos USB.

Em laboratórios educacionais, nem sempre professores e alunos possuem permissão para instalar programas, acessar a BIOS/UEFI dos computadores ou utilizar dispositivos físicos livremente.

Por isso, o projeto reproduz essas situações em um **ambiente totalmente simulado no navegador**.

> [!IMPORTANT]
> O Laboratório Virtual é apenas um **simulador educacional**. Nenhuma configuração real do computador, BIOS, UEFI, disco ou pendrive é modificada.

---

# 🧪 Laboratórios disponíveis

O projeto atualmente possui três ambientes de simulação:

| Laboratório        | O que pode ser estudado                                                |
| ------------------ | ---------------------------------------------------------------------- |
| 💿 **Rufus**       | ISO, pendrive bootável, GPT, MBR, FAT32, NTFS e criação de mídia       |
| ⌨️ **BIOS Legacy** | Menus clássicos, dispositivos, hardware e ordem de boot                |
| ⚙️ **UEFI**        | Boot moderno, Secure Boot, TPM, dispositivos e configurações avançadas |

---

# 💿 Simulador do Rufus

O módulo simula algumas das principais etapas utilizadas para preparar um **pendrive bootável**.

O usuário pode selecionar um dispositivo USB fictício e escolher uma imagem ISO através de uma janela inspirada no **Explorador de Arquivos do Windows**.

## 📀 Imagens disponíveis

O simulador apresenta diferentes arquivos ISO fictícios, incluindo:

* Linux Mint;
* Ubuntu;
* Fedora Workstation;
* Red Hat Enterprise Linux;
* Windows 7;
* Windows 10;
* Windows 11.

Os arquivos aparecem com informações como:

```text
Nome
Data de modificação
Tipo
Tamanho
```

Ao selecionar uma imagem, o simulador carrega automaticamente um perfil didático de configuração.

Entre as opções apresentadas estão:

### Esquema de partição

```text
GPT
MBR
```

### Sistema de destino

```text
UEFI
BIOS / Legacy
```

### Sistema de arquivos

```text
FAT32
NTFS
```

As configurações continuam editáveis para que professor e alunos possam testar diferentes combinações.

## ▶️ Simulação da gravação

Ao pressionar **INICIAR**, o sistema apresenta o aviso de que os dados do dispositivo seriam apagados.

Depois são simuladas etapas como:

```text
Formatando dispositivo...
        ↓
Criando sistema de arquivos...
        ↓
Copiando arquivos da ISO...
        ↓
Criando mídia inicializável...
        ↓
PRONTO
```

Nenhum pendrive real é acessado.

---

# ⌨️ Simulador de BIOS Legacy

O projeto também possui uma interface inspirada nas tradicionais BIOS em modo texto.

A navegação pode ser realizada pelo teclado:

| Tecla   | Função               |
| ------- | -------------------- |
| `↑` `↓` | Navegar pelas opções |
| `ENTER` | Entrar ou alterar    |
| `ESC`   | Voltar               |
| `F10`   | Salvar e sair        |

Também é possível utilizar o **mouse**, facilitando demonstrações durante aulas presenciais ou remotas.

## 📋 Menus disponíveis

### Standard CMOS Features

Apresenta informações fictícias relacionadas a:

* data e hora;
* discos;
* unidades ópticas;
* memória;
* dispositivos detectados.

### Advanced BIOS Features

Permite trabalhar principalmente com a **ordem de inicialização**.

Exemplos:

```text
First Boot Device      Hard Disk
Second Boot Device     CD-ROM
Third Boot Device      USB-HDD
```

O aluno pode alterar a prioridade e colocar o dispositivo USB como primeira opção.

### Advanced Chipset Features

Apresenta configurações relacionadas a:

* memória;
* chipset;
* vídeo integrado;
* parâmetros internos da placa-mãe.

### Integrated Peripherals

Permite visualizar e modificar configurações fictícias de:

```text
SATA Controller
SATA Mode
USB Controller
USB Keyboard Support
Onboard LAN
Onboard Audio
Serial Port
```

### Power Management Setup

Inclui configurações relacionadas a:

* ACPI;
* suspensão;
* botão de energia;
* Wake-on-LAN;
* comportamento após queda de energia.

### PnP/PCI Configurations

Utilizado para apresentar conceitos relacionados a:

* Plug and Play;
* PCI;
* IRQ;
* atribuição automática de recursos.

### PC Health Status

Apresenta dados fictícios de monitoramento:

```text
CPU Temperature
System Temperature
CPU Fan Speed
System Fan Speed
CPU Vcore
DDR Voltage
+12V
```

---

# ⚙️ Simulador UEFI

O módulo UEFI representa uma interface gráfica de firmware mais moderna.

O usuário pode navegar entre:

```text
Main
Advanced
Boot
Security
Save & Exit
```

Diversas configurações podem ser modificadas durante a simulação.

---

## 🖥️ Main

Apresenta informações como:

* versão do firmware;
* processador;
* quantidade de memória;
* data;
* hora;
* idioma;
* Fast Boot.

---

## 🔧 Advanced

Permite experimentar configurações relacionadas a:

```text
Intel Virtualization Technology
SATA Controller
SATA Mode
USB Controller
Legacy USB Support
XHCI Hand-off
Onboard LAN
Network Stack
Onboard Audio
Serial Port
Wake on LAN
```

Algumas opções podem alternar entre:

```text
Enabled
Disabled
```

Enquanto outras permitem diferentes modos:

```text
AHCI
RAID
IDE
```

---

## 🚀 Boot

Permite modificar a prioridade de inicialização.

Exemplo:

```text
Boot Option #1    Windows Boot Manager
Boot Option #2    UEFI: Kingston DataTraveler
Boot Option #3    UEFI: DVD Drive
```

O aluno pode colocar:

```text
UEFI: Kingston DataTraveler
```

como primeira opção e simular a inicialização pelo pendrive criado anteriormente no módulo Rufus.

---

## 🔐 Security

Inclui configurações fictícias relacionadas a:

* Secure Boot;
* TPM;
* Secure Boot Mode;
* senha de administrador;
* senha de usuário.

Isso permite apresentar conceitos importantes encontrados em computadores modernos.

---

## 💾 Save & Exit

Simula operações como:

```text
Save Changes and Reset
Discard Changes and Exit
Restore Defaults
Boot Override
```

---

# 🎓 Sugestão de atividade

Uma possibilidade é apresentar aos alunos o seguinte cenário:

> **Um computador possui Windows instalado, mas precisamos instalar Linux Mint utilizando um pendrive. Como preparar o computador?**

O aluno deverá:

1. acessar o **Simulador do Rufus**;
2. selecionar o pendrive fictício;
3. selecionar a ISO do **Linux Mint**;
4. observar as configurações de GPT/MBR;
5. identificar o sistema de destino;
6. iniciar a criação fictícia da mídia;
7. abrir o simulador de **BIOS ou UEFI**;
8. localizar as configurações de boot;
9. colocar o pendrive como primeiro dispositivo;
10. salvar as alterações;
11. explicar o que aconteceria após a reinicialização.

---

# 🕵️ Desafios para os alunos

O professor também pode criar configurações propositalmente incorretas e pedir aos alunos que descubram o problema.

### Exemplo 1 — Pendrive não inicia

```text
Boot Option #1 → Windows Boot Manager
Boot Option #2 → Kingston DataTraveler
```

**Pergunta:** por que o computador continua iniciando o Windows?

### Exemplo 2 — BIOS Legacy

```text
First Boot Device → Hard Disk
Second Boot Device → CD-ROM
Third Boot Device → USB-HDD
```

**Desafio:** altere a configuração para tentar inicializar pelo pendrive.

### Exemplo 3 — GPT × MBR

Selecione diferentes sistemas no Rufus e observe as configurações apresentadas.

**Pergunta:** qual é a relação entre:

```text
GPT → UEFI

MBR → BIOS / Legacy
```

---

# 🚀 Como utilizar

## Opção 1 — Online

A maneira mais simples é acessar:

### 🌐 https://sammyfreitas.github.io/Laboratorio_Virtual

Não é necessário instalar nada.

---

## Opção 2 — Executar localmente

Clone o repositório:

```bash
git clone https://github.com/sammyfreitas/Laboratorio_Virtual.git
```

Entre na pasta:

```bash
cd Laboratorio_Virtual
```

Depois abra:

```text
index.html
```

em um navegador.

---

# 📁 Estrutura do projeto

```text
Laboratorio_Virtual/
│
├── index.html
│
├── style.css
│
├── app.js
│
└── README.md
```

### `index.html`

Responsável pela estrutura dos simuladores.

### `style.css`

Responsável pela aparência das interfaces do Rufus, BIOS e UEFI.

### `app.js`

Responsável pelas interações, menus, alterações de configurações e processos simulados.

---

# 🛠️ Tecnologias

O projeto foi desenvolvido utilizando apenas:

* **HTML5**
* **CSS3**
* **JavaScript**

Não são utilizados:

```text
Backend
Banco de dados
Framework JavaScript
API externa
Acesso ao hardware
```

Isso permite que o projeto funcione diretamente no navegador.

---

# 🔒 Segurança

Todas as operações são simuladas.

O projeto:

* ❌ não acessa a BIOS real;
* ❌ não modifica a UEFI;
* ❌ não acessa discos físicos;
* ❌ não formata pendrives;
* ❌ não modifica partições;
* ❌ não instala sistemas operacionais;
* ❌ não executa comandos administrativos.

> [!NOTE]
> Por ser uma aplicação Web educacional, clicar em **formatar**, **salvar**, **reiniciar** ou modificar uma configuração afeta apenas o estado visual do simulador.

---

# 📚 Finalidade educacional

O Laboratório Virtual foi desenvolvido principalmente para utilização em aulas de:

* Sistemas Operacionais;
* Informática;
* Redes de Computadores;
* Manutenção de Computadores;
* Suporte Técnico;
* Infraestrutura de TI.

A ferramenta é especialmente útil em ambientes nos quais os computadores possuem **restrições administrativas** ou nos quais não é possível permitir que cada aluno modifique a BIOS/UEFI ou formate dispositivos reais.

O objetivo não é substituir atividades práticas com equipamentos físicos.

A proposta é fornecer um **ambiente intermediário de aprendizagem**, no qual o aluno possa conhecer as interfaces, experimentar configurações e compreender os conceitos antes de realizar procedimentos em equipamentos reais.

---

# ⚠️ Aviso sobre marcas e interfaces

Este é um projeto **independente e exclusivamente educacional**.

As interfaces são simulações inspiradas em softwares, firmwares e sistemas existentes e **não representam implementações oficiais**.

O projeto não possui vínculo, patrocínio ou associação oficial com Rufus, Microsoft, Linux Mint, Canonical/Ubuntu, Fedora, Red Hat ou fabricantes de BIOS/UEFI.

Os nomes eventualmente apresentados no simulador são utilizados para fins de identificação e demonstração educacional.

---

# 👨‍🏫 Autor

**Anthony Freitas**

Projeto desenvolvido como recurso didático para o ensino de **Sistemas Operacionais e Tecnologia da Informação**.

---

## 🌐 Experimente

### 👉 [Abrir Laboratório Virtual](https://sammyfreitas.github.io/Laboratorio_Virtual)

Se o projeto for útil para seus estudos ou suas aulas, considere deixar uma ⭐ no repositório.
