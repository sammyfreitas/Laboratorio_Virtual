function openLab(id){document.getElementById('home').classList.add('hidden');document.querySelectorAll('.lab').forEach(x=>x.classList.add('hidden'));document.getElementById(id).classList.remove('hidden');if(id==='bios')document.getElementById('bios').focus()}
function goHome(){document.querySelectorAll('.lab').forEach(x=>x.classList.add('hidden'));document.getElementById('home').classList.remove('hidden')}
const isoPresets = [
 {name:"linuxmint-22.2-cinnamon-64bit.iso", label:"Linux Mint 22.2 Cinnamon", size:"2,9 GB", partition:"GPT", target:"UEFI (não CSM)", fs:"FAT32 (Padrão)", volume:"LINUX MINT"},
 {name:"ubuntu-24.04.3-desktop-amd64.iso", label:"Ubuntu 24.04 LTS", size:"5,8 GB", partition:"GPT", target:"UEFI (não CSM)", fs:"FAT32 (Padrão)", volume:"UBUNTU 24_04"},
 {name:"Fedora-Workstation-Live-x86_64-42.iso", label:"Fedora Workstation 42", size:"2,4 GB", partition:"GPT", target:"UEFI (não CSM)", fs:"FAT32 (Padrão)", volume:"FEDORA-WS"},
 {name:"rhel-9.6-x86_64-dvd.iso", label:"Red Hat Enterprise Linux 9", size:"10,8 GB", partition:"GPT", target:"UEFI (não CSM)", fs:"FAT32 (Padrão)", volume:"RHEL-9-6"},
 {name:"Windows_7_SP1_x64.iso", label:"Windows 7 SP1 64-bit", size:"3,1 GB", partition:"MBR", target:"BIOS (ou UEFI-CSM)", fs:"NTFS", volume:"WIN7_SP1"},
 {name:"Win10_22H2_BrazilianPortuguese_x64.iso", label:"Windows 10 22H2", size:"5,7 GB", partition:"GPT", target:"UEFI (não CSM)", fs:"NTFS", volume:"WIN10_22H2"},
 {name:"Win11_25H2_BrazilianPortuguese_x64.iso", label:"Windows 11 25H2", size:"7,1 GB", partition:"GPT", target:"UEFI (não CSM)", fs:"NTFS", volume:"WIN11_25H2"}
];
let selectedIsoPreset=null;

function chooseIso(){
 selectedIsoPreset=null;
 const list=document.getElementById("isoFileList");
 list.innerHTML=isoPresets.map((x,i)=>`<button class="fake-file" data-i="${i}" ondblclick="selectIsoFile(${i});openSelectedIso()" onclick="selectIsoFile(${i})">
   <span class="filename-cell"><span class="disc-icon"><i></i></span><span><b>${x.name}</b><small>${x.label}</small></span></span>
   <span>${["02/09/2026 14:32","18/08/2026 09:15","11/07/2026 16:48","26/06/2026 11:20","14/01/2020 08:03","19/11/2025 13:41","04/09/2026 10:27"][i]}</span>
   <span>Arquivo de imagem de disco</span><span>${x.size}</span>
 </button>`).join("");
 document.getElementById("fakeFilename").value="";
 document.getElementById("isoPicker").classList.remove("hidden");
}
function selectIsoFile(i){
 selectedIsoPreset=isoPresets[i];
 document.querySelectorAll(".fake-file").forEach((e,n)=>e.classList.toggle("selected",n===i));
 document.getElementById("fakeFilename").value=selectedIsoPreset.name;
}
function closeIsoPicker(){document.getElementById("isoPicker").classList.add("hidden")}
function openSelectedIso(){
 if(!selectedIsoPreset){alert("Selecione uma imagem ISO fictícia.");return}
 closeIsoPicker();
 const x=selectedIsoPreset;
 document.getElementById("isoInfo").classList.remove("hidden");
 document.getElementById("isoInfo").innerHTML=`📀 ${x.name}<small>${x.label} • ${x.size} • arquivo fictício</small>`;
 document.getElementById("bootSelection").options[0].text=x.name;
 const p=document.getElementById("partition"),t=document.getElementById("target"),f=document.getElementById("fs");
 p.value=x.partition;t.value=x.target;f.value=x.fs;
 document.getElementById("volumeLabel").value=x.volume;
 document.getElementById("rufusTip").innerHTML=`<strong>${x.label}</strong> carregado. O simulador aplicou um perfil didático: <strong>${x.partition} + ${x.target}</strong> e <strong>${x.fs}</strong>. Você ainda pode alterar os campos manualmente para demonstrar outras combinações.`;
}

function syncTarget(){let p=document.getElementById('partition').value,t=document.getElementById('target');t.selectedIndex=p==='GPT'?0:1;document.getElementById('rufusTip').innerHTML=p==='GPT'?'<strong>GPT</strong> é a escolha comum para máquinas modernas usando <strong>UEFI</strong>.':'<strong>MBR</strong> aparece com frequência em cenários de <strong>BIOS Legacy</strong> ou compatibilidade CSM.'}
function startRufus(){if(document.getElementById('isoInfo').classList.contains('hidden')){alert('Primeiro selecione a imagem ISO fictícia.');return}document.getElementById('modal').classList.remove('hidden')}
function closeModal(){document.getElementById('modal').classList.add('hidden')}
function confirmRufus(){closeModal();let bar=document.getElementById('bar'),st=document.getElementById('statusText'),steps=[['Formatando dispositivo...',20],['Criando sistema de arquivos...',40],['Copiando arquivos da ISO...',70],['Criando mídia inicializável...',92],['PRONTO',100]];let i=0;bar.style.width='0';let timer=setInterval(()=>{st.textContent=steps[i][0];bar.style.width=steps[i][1]+'%';i++;if(i===steps.length){clearInterval(timer);document.getElementById('rufusTip').innerHTML='Processo concluído. <strong>Nada foi gravado:</strong> a barra representa apenas as etapas que você pode explicar aos alunos.'}},700)}
function resetRufus(){document.getElementById('bar').style.width='0';document.getElementById('statusText').textContent='PRONTO'}
const biosMenus = {
 standard:{
  title:"STANDARD CMOS FEATURES",
  help:"Aqui a BIOS exibe data, hora e dispositivos de armazenamento detectados. Os valores são fictícios.",
  rows:[
   ["Date (mm:dd:yy)","09/10/26",["09/10/26","09/11/26"]],
   ["Time (hh:mm:ss)","17:40:00",["17:40:00","18:00:00"]],
   ["IDE Channel 0 Master","ST500DM002 500GB",["ST500DM002 500GB","None"]],
   ["IDE Channel 0 Slave","None",["None","Auto"]],
   ["IDE Channel 1 Master","HL-DT-ST DVD-RAM",["HL-DT-ST DVD-RAM","None"]],
   ["Drive A","1.44M, 3.5 in.",["1.44M, 3.5 in.","None"]],
   ["Halt On","All, But Keyboard",["All, But Keyboard","All Errors","No Errors"]],
   ["Base Memory","640K",null],["Extended Memory","8190M",null]
  ]},
 advanced:{
  title:"ADVANCED BIOS FEATURES",
  help:"É neste menu que versões clássicas da BIOS costumam permitir alterar a prioridade de inicialização.",
  rows:[
   ["Hard Disk Boot Priority","Press Enter",["Press Enter"]],
   ["First Boot Device","Hard Disk",["Hard Disk","USB-HDD","CDROM","Network"]],
   ["Second Boot Device","CDROM",["CDROM","USB-HDD","Hard Disk","Disabled"]],
   ["Third Boot Device","USB-HDD",["USB-HDD","Hard Disk","CDROM","Disabled"]],
   ["Boot Other Device","Enabled",["Enabled","Disabled"]],
   ["Quick Power On Self Test","Enabled",["Enabled","Disabled"]],
   ["Boot Up NumLock Status","On",["On","Off"]],
   ["Security Option","Setup",["Setup","System"]]
  ]},
 chipset:{
  title:"ADVANCED CHIPSET FEATURES",
  help:"Configurações de chipset controlam aspectos de memória, vídeo integrado e comunicação interna. Em uma máquina real, alterações incorretas podem causar instabilidade.",
  rows:[
   ["DRAM Timing Selectable","Auto",["Auto","Manual"]],
   ["CAS Latency Time","Auto",["Auto","5","6","7"]],
   ["System BIOS Cacheable","Disabled",["Disabled","Enabled"]],
   ["Video BIOS Cacheable","Disabled",["Disabled","Enabled"]],
   ["On-Chip VGA","Enabled",["Enabled","Disabled"]],
   ["Frame Buffer Size","256MB",["128MB","256MB","512MB"]]
  ]},
 peripherals:{
  title:"INTEGRATED PERIPHERALS",
  help:"Aqui aparecem controladores integrados à placa-mãe, como SATA, USB, rede e áudio.",
  rows:[
   ["OnChip SATA Controller","Enabled",["Enabled","Disabled"]],
   ["SATA Mode","AHCI",["AHCI","IDE","RAID"]],
   ["USB Controller","Enabled",["Enabled","Disabled"]],
   ["USB Keyboard Support","Enabled",["Enabled","Disabled"]],
   ["Onboard LAN","Enabled",["Enabled","Disabled"]],
   ["Onboard Audio","Enabled",["Enabled","Disabled"]],
   ["Onboard Serial Port","3F8/IRQ4",["3F8/IRQ4","2F8/IRQ3","Disabled"]]
  ]},
 power:{
  title:"POWER MANAGEMENT SETUP",
  help:"Este menu reúne opções de economia de energia, suspensão e formas de ligar ou despertar o computador.",
  rows:[
   ["ACPI Function","Enabled",["Enabled","Disabled"]],
   ["ACPI Suspend Type","S3 (STR)",["S1 (POS)","S3 (STR)"]],
   ["Soft-Off by PWR-BTTN","Instant-Off",["Instant-Off","Delay 4 Sec"]],
   ["Wake-Up by PCI Card","Disabled",["Disabled","Enabled"]],
   ["Power On by Keyboard","Disabled",["Disabled","Any Key"]],
   ["Restore on AC Power Loss","Last State",["Power Off","Power On","Last State"]]
  ]},
 pnp:{
  title:"PNP/PCI CONFIGURATIONS",
  help:"PnP significa Plug and Play. Este menu histórico trata da atribuição de recursos de hardware e dispositivos PCI.",
  rows:[
   ["Reset Configuration Data","Disabled",["Disabled","Enabled"]],
   ["Resources Controlled By","Auto (ESCD)",["Auto (ESCD)","Manual"]],
   ["IRQ Resources","Press Enter",["Press Enter"]],
   ["PCI/VGA Palette Snoop","Disabled",["Disabled","Enabled"]],
   ["Assign IRQ For USB","Enabled",["Enabled","Disabled"]]
  ]},
 health:{
  title:"PC HEALTH STATUS",
  help:"Sensores da placa-mãe mostram temperaturas, tensões e rotações. Todos os números deste simulador são fictícios.",
  rows:[
   ["CPU Temperature","42°C",null],
   ["System Temperature","36°C",null],
   ["CPU Fan Speed","1860 RPM",null],
   ["System Fan Speed","1240 RPM",null],
   ["CPU Vcore","1.184 V",null],
   ["DDR Voltage","1.504 V",null],
   ["+12V","12.096 V",null],
   ["Smart Fan Control","Enabled",["Enabled","Disabled"]]
  ]}
};

let biosMode="main", biosIndex=0, currentBiosMenu=null;

function biosMainItems(){ return [...document.querySelectorAll("#biosMain .bios-item")]; }
function biosPanelItems(){ return [...document.querySelectorAll("#biosPanelRows .bios-line")]; }
function biosItems(){ return biosMode==="main" ? biosMainItems() : biosPanelItems(); }

function biosPaint(){
 biosItems().forEach((e,i)=>e.classList.toggle("selected",i===biosIndex));
}

function openBiosMenu(name){
 currentBiosMenu=name; biosMode="panel"; biosIndex=0;
 document.getElementById("biosMain").classList.add("hidden");
 document.getElementById("biosPanel").classList.remove("hidden");
 const menu=biosMenus[name];
 document.getElementById("biosPanelTitle").textContent=menu.title;
 document.getElementById("biosPanelHelp").textContent=menu.help;
 document.getElementById("biosPanelRows").innerHTML=menu.rows.map((r,i)=>
  `<div class="bios-line" data-row="${i}"><span>${r[0]}</span><b>[${r[1]}]</b></div>`
 ).join("");
 biosPaint();
}

function closeBiosMenu(){
 biosMode="main"; currentBiosMenu=null; biosIndex=0;
 document.getElementById("biosPanel").classList.add("hidden");
 document.getElementById("biosMain").classList.remove("hidden");
 biosPaint();
}

function changeBiosValue(){
 const row=biosMenus[currentBiosMenu].rows[biosIndex];
 if(!row[2]){ showBios("Item informativo — não editável."); return; }
 const choices=row[2], pos=choices.indexOf(row[1]);
 row[1]=choices[(pos+1)%choices.length];
 const line=biosPanelItems()[biosIndex];
 line.querySelector("b").textContent=`[${row[1]}]`;
 showBios(`${row[0]} → ${row[1]}`);
}

document.getElementById("bios").addEventListener("keydown",e=>{
 if(!["ArrowDown","ArrowUp","Enter","Escape","F10"].includes(e.key)) return;
 e.preventDefault();
 let items=biosItems();
 if(e.key==="ArrowDown"){biosIndex=(biosIndex+1)%items.length;biosPaint();return;}
 if(e.key==="ArrowUp"){biosIndex=(biosIndex-1+items.length)%items.length;biosPaint();return;}
 if(e.key==="Escape"){biosMode==="panel"?closeBiosMenu():showBios("EXIT WITHOUT SAVING — simulação.");return;}
 if(e.key==="F10"){showBios("SAVE & EXIT: configurações salvas. Reiniciando... (simulação)");return;}
 if(e.key==="Enter"){
   if(biosMode==="panel"){changeBiosValue();return;}
   const action=items[biosIndex].dataset.action;
   if(biosMenus[action]) openBiosMenu(action);
   else if(action==="save") showBios("SAVE & EXIT: configurações salvas — simulação.");
   else if(action==="exit") showBios("EXIT WITHOUT SAVING — simulação.");
   else if(action==="failsafe") showBios("Fail-Safe Defaults carregados — simulação.");
   else if(action==="optimized") showBios("Optimized Defaults carregados — simulação.");
 }
});

function showBios(msg){
 let t=document.getElementById("biosToast");
 t.textContent=msg;t.classList.remove("hidden");
 setTimeout(()=>t.classList.add("hidden"),1800);
}


const uefiMenus = {
 main:{
  title:"Main / System Information",
  help:"A aba Main reúne informações básicas do computador e algumas opções gerais. Os valores são fictícios.",
  rows:[
   ["UEFI BIOS Version","2.90 Educational",null],
   ["Build Date","09/10/2026",null],
   ["Processor","Intel Core i5 — Virtual",null],
   ["Total Memory","8192 MB",null],
   ["System Date","09/10/2026",["09/10/2026","09/11/2026","09/12/2026"]],
   ["System Time","17:40:00",["17:40:00","18:00:00","19:30:00"]],
   ["Language","Português",["Português","English"]],
   ["Fast Boot","Disabled",["Disabled","Enabled"]]
  ]},
 advanced:{
  title:"Advanced",
  help:"As opções Advanced controlam recursos de CPU, armazenamento, USB, rede e dispositivos integrados. Clique em um valor para alterná-lo.",
  rows:[
   ["CPU Configuration","Submenu",["Submenu"]],
   ["Intel Virtualization Technology","Enabled",["Enabled","Disabled"]],
   ["SATA Controller","Enabled",["Enabled","Disabled"]],
   ["SATA Mode Selection","AHCI",["AHCI","RAID","IDE"]],
   ["USB Controller","Enabled",["Enabled","Disabled"]],
   ["Legacy USB Support","Enabled",["Enabled","Disabled","Auto"]],
   ["XHCI Hand-off","Enabled",["Enabled","Disabled"]],
   ["Onboard LAN Controller","Enabled",["Enabled","Disabled"]],
   ["Network Stack","Disabled",["Disabled","Enabled"]],
   ["Onboard Audio","Enabled",["Enabled","Disabled"]],
   ["Serial Port","Disabled",["Disabled","Enabled"]],
   ["Wake on LAN","Disabled",["Disabled","Enabled"]]
  ]},
 boot:{
  title:"Boot",
  help:"Configure o modo de inicialização e a ordem dos dispositivos. Para a atividade, experimente colocar o Kingston como Boot Option #1.",
  rows:[
   ["Boot Mode","UEFI",["UEFI","Legacy / CSM"]],
   ["CSM Support","Disabled",["Disabled","Enabled"]],
   ["Fast Boot","Disabled",["Disabled","Enabled"]],
   ["Boot Option #1","Windows Boot Manager",["Windows Boot Manager","UEFI: Kingston DataTraveler","UEFI: DVD Drive","Network PXE"]],
   ["Boot Option #2","UEFI: Kingston DataTraveler",["UEFI: Kingston DataTraveler","Windows Boot Manager","UEFI: DVD Drive","Disabled"]],
   ["Boot Option #3","UEFI: DVD Drive",["UEFI: DVD Drive","UEFI: Kingston DataTraveler","Network PXE","Disabled"]],
   ["Boot from Network","Disabled",["Disabled","Enabled"]]
  ]},
 security:{
  title:"Security",
  help:"Secure Boot verifica componentes assinados durante a inicialização. Aqui você pode alternar os estados apenas para fins didáticos.",
  rows:[
   ["Administrator Password","Not Installed",["Not Installed","Installed"]],
   ["User Password","Not Installed",["Not Installed","Installed"]],
   ["Secure Boot","Enabled",["Enabled","Disabled"]],
   ["Secure Boot Mode","Standard",["Standard","Custom"]],
   ["TPM Device","Enabled",["Enabled","Disabled"]],
   ["TPM State","Active",["Active","Inactive"]]
  ]},
 exit:{
  title:"Save & Exit",
  help:"Em uma UEFI real, estas opções controlam se as alterações serão salvas ou descartadas antes da reinicialização.",
  rows:[
   ["Save Changes and Reset","Execute",["Execute"]],
   ["Discard Changes and Exit","Execute",["Execute"]],
   ["Restore Defaults","Execute",["Execute"]],
   ["Boot Override: UEFI Kingston","Execute",["Execute"]]
  ]}
};

let currentUefiTab="main", uefiIndex=0;

function renderUefi(){
 const m=uefiMenus[currentUefiTab];
 document.getElementById("uefiRows").innerHTML =
   `<h2>${m.title}</h2>` +
   m.rows.map((r,i)=>`<div class="uefi-row ${i===uefiIndex?'selected':''}" data-i="${i}">
      <span>${r[0]}</span><b>${r[1]}</b>${r[2] ? '<em>↕</em>' : '<em>INFO</em>'}
    </div>`).join("");
 document.getElementById("uefiHelp").textContent=m.help;
}

function setUefiTab(tab){
 currentUefiTab=tab; uefiIndex=0;
 document.querySelectorAll("#uefiTabs button").forEach(b=>b.classList.toggle("active",b.dataset.tab===tab));
 renderUefi();
}

function changeUefiValue(){
 const row=uefiMenus[currentUefiTab].rows[uefiIndex];
 if(!row[2]) { uefiMsg("Campo informativo — somente leitura."); return; }

 if(currentUefiTab==="exit"){
   if(uefiIndex===0) uefiMsg("Alterações salvas. Reiniciando... (simulação)");
   if(uefiIndex===1) uefiMsg("Alterações descartadas. Saindo... (simulação)");
   if(uefiIndex===2){ resetUefiDefaults(); uefiMsg("Valores padrão restaurados — simulação."); }
   if(uefiIndex===3) uefiMsg("Inicializando por UEFI: Kingston DataTraveler... (simulação)");
   return;
 }

 if(currentUefiTab==="advanced" && uefiIndex===0){
   uefiMsg("CPU Configuration: Virtualization, CPU cores e recursos do processador são demonstrados nesta aba.");
   return;
 }
 const choices=row[2], p=choices.indexOf(row[1]);
 row[1]=choices[(p+1)%choices.length];
 renderUefi();
 uefiMsg(`${row[0]} → ${row[1]}`);
}

function resetUefiDefaults(){
 const defaults={
  main:["2.90 Educational","09/10/2026","Intel Core i5 — Virtual","8192 MB","09/10/2026","17:40:00","Português","Disabled"],
  advanced:["Submenu","Enabled","Enabled","AHCI","Enabled","Enabled","Enabled","Enabled","Disabled","Enabled","Disabled","Disabled"],
  boot:["UEFI","Disabled","Disabled","Windows Boot Manager","UEFI: Kingston DataTraveler","UEFI: DVD Drive","Disabled"],
  security:["Not Installed","Not Installed","Enabled","Standard","Enabled","Active"]
 };
 Object.keys(defaults).forEach(k=>uefiMenus[k].rows.forEach((r,i)=>r[1]=defaults[k][i]));
 renderUefi();
}

function uefiMsg(s){
 let t=document.getElementById("uefiToast");t.textContent=s;t.classList.remove("hidden");
 setTimeout(()=>t.classList.add("hidden"),1800);
}

document.querySelectorAll("#uefiTabs button").forEach(b=>b.addEventListener("click",()=>setUefiTab(b.dataset.tab)));
document.getElementById("uefiRows").addEventListener("click",e=>{
 const row=e.target.closest(".uefi-row"); if(!row)return;
 uefiIndex=Number(row.dataset.i); renderUefi(); changeUefiValue();
});
document.getElementById("uefi").addEventListener("keydown",e=>{
 const keys=["ArrowDown","ArrowUp","ArrowLeft","ArrowRight","Enter","Escape","F9","F10"];
 if(!keys.includes(e.key))return;e.preventDefault();
 const tabs=["main","advanced","boot","security","exit"];
 if(e.key==="ArrowDown"){uefiIndex=(uefiIndex+1)%uefiMenus[currentUefiTab].rows.length;renderUefi();}
 else if(e.key==="ArrowUp"){uefiIndex=(uefiIndex-1+uefiMenus[currentUefiTab].rows.length)%uefiMenus[currentUefiTab].rows.length;renderUefi();}
 else if(e.key==="ArrowRight"){setUefiTab(tabs[(tabs.indexOf(currentUefiTab)+1)%tabs.length]);}
 else if(e.key==="ArrowLeft"){setUefiTab(tabs[(tabs.indexOf(currentUefiTab)-1+tabs.length)%tabs.length]);}
 else if(e.key==="Enter")changeUefiValue();
 else if(e.key==="F9"){resetUefiDefaults();uefiMsg("Optimized Defaults restaurados — simulação.");}
 else if(e.key==="F10")uefiMsg("Save Changes and Reset — simulação.");
 else if(e.key==="Escape")uefiMsg("Exit / voltar — simulação.");
});
renderUefi();

document.getElementById("biosMain").addEventListener("click",e=>{
 const item=e.target.closest(".bios-item"); if(!item)return;
 const items=biosMainItems(); biosIndex=items.indexOf(item); biosPaint();
 const action=item.dataset.action;
 if(biosMenus[action]) openBiosMenu(action);
 else if(action==="save") showBios("SAVE & EXIT: configurações salvas — simulação.");
 else if(action==="exit") showBios("EXIT WITHOUT SAVING — simulação.");
 else if(action==="failsafe") showBios("Fail-Safe Defaults carregados — simulação.");
 else if(action==="optimized") showBios("Optimized Defaults carregados — simulação.");
});
document.getElementById("biosPanelRows").addEventListener("click",e=>{
 const line=e.target.closest(".bios-line"); if(!line)return;
 biosIndex=Number(line.dataset.row); biosPaint(); changeBiosValue();
});

function applyTheme(t){
 document.documentElement.dataset.theme=t;
 localStorage.setItem("lab-theme",t);
 let b=document.getElementById("themeToggle");
 if(b){
   b.textContent=t==="dark"?"☀️":"🌙";
   b.title=t==="dark"?"Usar tema claro":"Usar tema escuro";
   b.setAttribute("aria-label",b.title);
 }
}
function toggleTheme(){applyTheme((document.documentElement.dataset.theme||"light")==="dark"?"light":"dark");}
applyTheme(localStorage.getItem("lab-theme")||"light");
