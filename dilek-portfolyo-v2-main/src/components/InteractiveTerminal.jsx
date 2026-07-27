import React, { useState, useRef, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function InteractiveTerminal({ lang }) {
  const tData = portfolioData[lang];

  const getWelcomeLines = (l) => {
    if (l === 'tr') {
      return [
        'Dilek\'in Portfolyo Terminaline Hoş Geldiniz (v1.0.0-LTS)',
        'Mevcut komutları görmek için "help" yazın.',
        ''
      ];
    } else {
      return [
        'Welcome to Dilek\'s Portfolio Terminal (v1.0.0-LTS)',
        'Type "help" to view the list of available commands.',
        ''
      ];
    }
  };

  const [history, setHistory] = useState([
    { type: 'output', text: getWelcomeLines(lang)[0] },
    { type: 'output', text: getWelcomeLines(lang)[1] },
    { type: 'output', text: getWelcomeLines(lang)[2] }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const terminalEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto scroll to bottom when output updates
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  // Handle language change welcome message reload
  useEffect(() => {
    setHistory([
      { type: 'output', text: getWelcomeLines(lang)[0] },
      { type: 'output', text: getWelcomeLines(lang)[1] },
      { type: 'output', text: getWelcomeLines(lang)[2] }
    ]);
  }, [lang]);

  // Auto focus input on click
  const focusInput = () => {
    inputRef.current?.focus();
  };



  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const command = inputVal.trim();
      if (command) {
        processCommand(command);
        setCommandHistory(prev => [command, ...prev]);
      } else {
        setHistory(prev => [...prev, { type: 'input', text: '' }]);
      }
      setInputVal('');
      setHistoryIndex(-1);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0 && historyIndex < commandHistory.length - 1) {
        const nextIndex = historyIndex + 1;
        setHistoryIndex(nextIndex);
        setInputVal(commandHistory[nextIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIndex = historyIndex - 1;
        setHistoryIndex(nextIndex);
        setInputVal(commandHistory[nextIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInputVal('');
      }
    }
  };

  const processCommand = (rawCommand) => {
    const parts = rawCommand.toLowerCase().split(' ');
    const mainCommand = parts[0];
    const argument = parts[1];

    let outputLines = [];

    // Log the typed command
    setHistory(prev => [...prev, { type: 'input', text: rawCommand }]);

    const isTr = lang === 'tr';

    switch (mainCommand) {
      case 'help':
        outputLines = isTr ? [
          'Dilek\'in Kabuğu v1.0.0, mevcut komutlar:',
          '  help      - Bu dökümantasyonu gösterir',
          '  about     - Dilek hakkında (Tanıtım & Motto)',
          '  skills    - Geliştirici yeteneklerini listeler',
          '  system    - Linux ve Sistem yönetimi becerilerini gösterir',
          '  projects  - Projeleri listeler (detaylar için: "projects <id>")',
          '  education - SoftITo akademi eğitim çizelgesini gösterir',
          '  neofetch  - Retro sistem paneli görüntüler',
          '  contact   - İletişim bilgilerini ve sosyal ağları listeler',
          '  clear     - Terminal ekranını temizler'
        ] : [
          'Dilek\'s Shell v1.0.0, available commands:',
          '  help      - Show this documentation',
          '  about     - About Dilek (Introduction & Motto)',
          '  skills    - List development skills & proficiency bars',
          '  system    - Display Linux, Server & VM Admin competencies',
          '  projects  - List projects (use "projects <id>" to view details)',
          '  education - Display timeline of SoftITo academy trainings',
          '  neofetch  - Display retro Linux developer dashboard',
          '  contact   - Display contact details & social networks',
          '  clear     - Clear terminal buffer'
        ];
        break;

      case 'about':
        outputLines = isTr ? [
          `İsim:      ${tData.profile.name}`,
          `Rol:       ${tData.profile.role}`,
          `Konum:     ${tData.profile.location}`,
          `Motto:     "${tData.profile.motto}"`,
          '',
          tData.profile.about,
          '',
          `Hedef:     ${tData.profile.goals}`
        ] : [
          `Name:      ${tData.profile.name}`,
          `Role:      ${tData.profile.role}`,
          `Location:  ${tData.profile.location}`,
          `Motto:     "${tData.profile.motto}"`,
          '',
          tData.profile.about,
          '',
          `Goal:      ${tData.profile.goals}`
        ];
        break;

      case 'skills':
        outputLines = [
          isTr ? '--- FRONTEND GELİŞTİRME YETENEKLERİ ---' : '--- FRONTEND DEVELOPMENT SKILLS ---',
          ...tData.skills.frontend.map(skill => {
            const barLength = Math.round(parseInt(skill.level) / 5); // out of 20
            const filled = '█'.repeat(barLength);
            const empty = '░'.repeat(20 - barLength);
            return `${skill.name.padEnd(20)} [${filled}${empty}] ${skill.level}`;
          }),
          '',
          isTr ? '--- ARAÇLAR & METODOLOJİLER ---' : '--- METHODOLOGIES & TOOLS ---',
          ...tData.skills.tools.map(tool => {
            const barLength = Math.round(parseInt(tool.level) / 5);
            const filled = '█'.repeat(barLength);
            const empty = '░'.repeat(20 - barLength);
            return `${tool.name.padEnd(20)} [${filled}${empty}] ${tool.level}`;
          }),
          '',
          isTr ? '--- KALİTE & OPTİMİZASYON ---' : '--- QUALITY & OPTIMIZATIONS ---',
          ...tData.skills.quality.map(q => {
            const barLength = Math.round(parseInt(q.level) / 5);
            const filled = '█'.repeat(barLength);
            const empty = '░'.repeat(20 - barLength);
            return `${q.name.padEnd(20)} [${filled}${empty}] ${q.level}`;
          })
        ];
        break;

      case 'system':
        outputLines = [
          isTr ? '--- SİSTEM & SUNUCU YÖNETİMİ ---' : '--- SYSTEM & SERVER ADMINISTRATION ---',
          isTr ? `İşletim Sistemleri: Linux (Ubuntu, Rocky, Mint, Pardus)` : `Operating Systems: Linux (Ubuntu, Rocky, Mint, Pardus)`,
          isTr ? `Sistem Araçları: Terminal / Bash script pipelines, Sanal makine yönetimi` : `System Tools: Terminal / Bash script pipelines, VM administration`,
          '',
          ...tData.skills.systems.map(sys => {
            const barLength = Math.round(parseInt(sys.level) / 5);
            const filled = '█'.repeat(barLength);
            const empty = '░'.repeat(20 - barLength);
            return `${sys.name.padEnd(30)} [${filled}${empty}] ${sys.level}`;
          }),
          '',
          isTr ? '--- PROFESYONEL ALIŞKANLIKLAR ---' : '--- PROFESSIONAL HABITS ---',
          ...tData.skills.professional.map(p => `• ${p}`)
        ];
        break;

      case 'projects':
        if (!argument) {
          outputLines = isTr ? [
            '--- PROJE PORTFOLYOSU ---',
            'Detaylı özellikleri görüntülemek için "projects <proje-id>" yazın.',
            '',
            ...tData.projects.map(p => `${p.id.padEnd(12)} - ${p.title} (${p.technologies.join(', ')})`),
          ] : [
            '--- PROJECT PORTFOLIO ---',
            'Type "projects <project-id>" to view deeper specifications.',
            '',
            ...tData.projects.map(p => `${p.id.padEnd(12)} - ${p.title} (${p.technologies.join(', ')})`),
          ];
        } else {
          const proj = tData.projects.find(p => p.id === argument);
          if (proj) {
            outputLines = isTr ? [
              `Proje Adı:    ${proj.title}`,
              `Rol:          ${proj.role}`,
              `Teknolojiler: ${proj.technologies.join(', ')}`,
              `Açıklama:     ${proj.description}`,
              'Öne Çıkan Özellikler:',
              ...proj.features.map(f => `  - ${f}`),
              `GitHub URL:   ${proj.github}`
            ] : [
              `Title:        ${proj.title}`,
              `Role:         ${proj.role}`,
              `Stack:        ${proj.technologies.join(', ')}`,
              `Description:  ${proj.description}`,
              'Features:',
              ...proj.features.map(f => `  - ${f}`),
              `GitHub URL:   ${proj.github}`
            ];
          } else {
            outputLines = isTr 
              ? [`"${argument}" kimliğine sahip proje bulunamadı. Liste için "projects" yazın.`]
              : [`Project with ID "${argument}" not found. Type "projects" for list.`];
          }
        }
        break;

      case 'education':
        outputLines = [
          isTr ? '--- SOFTITO YAZILIM AKADEMİSİ ZAMAN ÇİZELGESİ ---' : '--- SOFTITO SOFTWARE ACADEMY TIMELINE ---',
          '',
          ...tData.education.flatMap(edu => [
            `[${edu.hours}] - ${edu.title}`,
            isTr ? `Kurum: ${edu.organization}` : `Institution: ${edu.organization}`,
            isTr ? `Detay: ${edu.details}` : `Details:     ${edu.details}`,
            '-'.repeat(45)
          ])
        ];
        break;

      case 'neofetch':
        const asciiArt = [
          '      .---.       ',
          '     /     \\      ',
          '     \\\\.@.@//      ',
          '     .( _ ).      ',
          '     /`---`\\      ',
          '    /       \\     ',
          '   /  \\   /  \\    ',
          '  /_\\  \\_/  /_\\   ',
          '   \\\\_______//    ',
          '    \\_______/     '
        ];
        
        const sysInfo = isTr ? [
          `dilek@portfolio-vm`,
          `-----------------`,
          `OS: GNU/Linux (Rocky/Ubuntu)`,
          `Kernel: 5.15.0-generic`,
          `Aktif Süre: 2026 gün`,
          `Kabuk: bash 5.1.16`,
          `Editör: VS Code`,
          `Rol: Frontend Geliştirici`,
          `Akademi: SoftITo (320 Saat)`,
          `Vurgu Rengi: Lila / Pembe`,
          `Motto: Temiz kod, kolay arayüz`
        ] : [
          `dilek@portfolio-vm`,
          `-----------------`,
          `OS: GNU/Linux (Rocky/Ubuntu)`,
          `Kernel: 5.15.0-generic`,
          `Uptime: 2026 days`,
          `Shell: bash 5.1.16`,
          `Editor: VS Code`,
          `Role: Frontend Developer`,
          `Academy: SoftITo (320h)`,
          `Accent Color: Lilac / Rose`,
          `Motto: Clean code, friendly UI`
        ];

        // Merge ascii art and system info side-by-side
        const maxLines = Math.max(asciiArt.length, sysInfo.length);
        for (let i = 0; i < maxLines; i++) {
          const art = asciiArt[i] || ' '.repeat(18);
          const info = sysInfo[i] || '';
          outputLines.push(`${art.padEnd(20)} ${info}`);
        }
        break;

      case 'contact':
        outputLines = isTr ? [
          '--- İLETİŞİM KANALLARI ---',
          `GitHub:   ${tData.profile.github}`,
          `LinkedIn: ${tData.profile.linkedin}`,
          `E-Posta:  ${tData.profile.email}`,
          '',
          'İpucu: Sayfanın altındaki iletişim formunu doldurabilir veya bana doğrudan yazabilirsiniz.'
        ] : [
          '--- GET IN TOUCH ---',
          `GitHub:   ${tData.profile.github}`,
          `LinkedIn: ${tData.profile.linkedin}`,
          `E-Mail:   ${tData.profile.email}`,
          '',
          'Tip: You can fill the contact form below or reach me directly.'
        ];
        break;

      case 'clear':
        setHistory([]);
        return;

      default:
        outputLines = isTr ? [
          `bash: komut bulunamadı: ${mainCommand}`,
          'Geçerli komutları görmek için "help" yazın.'
        ] : [
          `bash: command not found: ${mainCommand}`,
          'Type "help" to see the list of valid commands.'
        ];
        break;
    }

    setHistory(prev => [...prev, ...outputLines.map(line => ({ type: 'output', text: line }))]);
  };

  return (
    <div 
      className="w-full max-w-4xl mx-auto rounded-lg overflow-hidden border border-purple-200/80 bg-terminal-bg shadow-xl shadow-purple-100/50 font-mono text-sm leading-relaxed text-left transition-all duration-300 hover:border-accent-cyan"
      onClick={focusInput}
    >
      {/* Terminal Title Bar */}
      <div className="bg-terminal-header px-4 py-3 flex items-center justify-between border-b border-purple-100/60 select-none">
        <div className="flex space-x-2">
          <span className="w-3 h-3 rounded-full bg-terminal-red inline-block"></span>
          <span className="w-3 h-3 rounded-full bg-terminal-yellow inline-block"></span>
          <span className="w-3 h-3 rounded-full bg-terminal-green inline-block"></span>
        </div>
        <div className="text-purple-950 text-xs font-bold tracking-wider">
          dilek@linux-portfolio-vm: ~
        </div>
        <div className="w-10"></div> {/* Spacer for symmetry */}
      </div>

      {/* Terminal Output Area */}
      <div className="p-5 min-h-[360px] max-h-[500px] overflow-y-auto bg-terminal-bg scrollbar-thin scrollbar-thumb-purple-250">
        {history.map((item, idx) => {
          if (item.type === 'input') {
            return (
              <div key={idx} className="flex items-center space-x-2 mb-1">
                <span className="text-terminal-cyan font-bold">guest@dilek-dev</span>
                <span className="text-purple-950 font-bold">:</span>
                <span className="text-terminal-yellow font-bold">~</span>
                <span className="text-purple-950 font-bold">$</span>
                <span className="text-slate-800 font-semibold font-mono">{item.text}</span>
              </div>
            );
          } else {
            return (
              <div key={idx} className="text-slate-700 min-h-[1.2rem] whitespace-pre-wrap font-mono">
                {item.text}
              </div>
            );
          }
        })}
        
        {/* Terminal Live Command Line Prompt */}
        <div className="flex items-center space-x-2 mt-1">
          <span className="text-terminal-cyan font-bold">guest@dilek-dev</span>
          <span className="text-purple-950 font-bold">:</span>
          <span className="text-terminal-yellow font-bold">~</span>
          <span className="text-purple-950 font-bold">$</span>
          <div className="flex-1 flex items-center relative">
            <input
              ref={inputRef}
              type="text"
              className="w-full bg-transparent text-slate-800 outline-none border-none p-0 focus:ring-0 font-mono focus:outline-none font-bold"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}

              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
            />
          </div>
        </div>
        <div ref={terminalEndRef} />
      </div>
    </div>
  );
}
