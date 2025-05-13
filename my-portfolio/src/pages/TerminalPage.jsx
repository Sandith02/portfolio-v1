// src/pages/TerminalPage.jsx
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Code, 
  Server, 
  Database, 
  ArrowLeft, 
  User, 
  File, 
  Mail, 
  Github, 
  ExternalLink, 
  Folder,
  FolderOpen,
  Monitor
} from 'lucide-react';
import TerminalSplash from '../components/splash/TerminalSplash';

const TerminalPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [currentDirectory, setCurrentDirectory] = useState('~');
  const [showHelp, setShowHelp] = useState(false);
  const inputRef = useRef(null);
  const terminalRef = useRef(null);
  
  const navigate = useNavigate();

  // Handle splash screen completion
  const handleSplashComplete = () => {
    setIsLoading(false);
  };

  // Focus the input field when loading completes
  useEffect(() => {
    if (!isLoading && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isLoading]);

  // Scroll to bottom when history changes
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  // Focus input when clicking anywhere in the terminal
  const handleTerminalClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  // Add welcome message when terminal first opens
  useEffect(() => {
    if (!isLoading) {
      setHistory([
        {
          type: 'welcome',
          component: WelcomeMessage
        }
      ]);
    }
  }, [isLoading]);

  // File system simulation
  const fileSystem = {
    '~': {
      type: 'directory',
      children: ['about.txt', 'projects', 'contact.txt', 'skills.txt']
    },
    '~/about.txt': {
      type: 'file',
      content: `
I am a Computer Science student passionate about developing creative solutions to technical challenges. With strong attention to detail and a drive to continuously learn new technologies, I am seeking opportunities to contribute to impactful projects where I can apply and expand my programming skills.

My experience spans full-stack development, with particular strength in React, Spring Boot applications, and MERN stack applications. I'm dedicated to creating clean, efficient code and delivering exceptional user experiences that combine technical excellence with intuitive design.

When I'm not coding, you'll find me participating in competitions like IEEE-Xtreme, exploring new technologies, contributing to open-source projects, or engaging in club activities.
      `
    },
    '~/contact.txt': {
      type: 'file',
      content: `
Email: lhthenuwara@gmail.com
LinkedIn: linkedin.com/in/sithmaka
Location: Moratuwa, Western Province, Sri Lanka
Phone: +94 76 692 6418

Feel free to reach out if you'd like to collaborate or discuss potential opportunities!
      `
    },
    '~/skills.txt': {
      type: 'file',
      content: `
Frontend:
- React (Component architecture, hooks, context API, state management)
- React Native (Cross-platform mobile app development)
- JavaScript (ES6+, async/await, DOM manipulation)
- HTML/CSS (Semantic HTML, CSS Grid, Flexbox)
- Tailwind CSS (Utility-first CSS framework)

Backend:
- Java (OOP, multithreading, collections)
- Spring Boot (RESTful APIs, dependency injection, JPA)
- Node.js (Server-side JavaScript, event-driven architecture)
- Express.js (API development, middleware, routing)
- Python (Data manipulation, backend development)

Database:
- MongoDB (Schema design, aggregation, indexing)
- MySQL (Relational DB design, queries, optimization)

Tools & Others:
- Git (Version control, branching, collaboration)
- Docker (Containerization, Docker Compose)
- Figma (UI design, prototyping, collaboration)
- Jest (Unit testing, mocking)
      `
    },
    '~/projects': {
      type: 'directory',
      children: ['doctoraid.txt', 'ticket-booking.txt', 'real-estate.txt', 'ecommerce.txt']
    },
    '~/projects/doctoraid.txt': {
      type: 'file',
      content: `
Project: DoctorAid

Description:
A web application designed for doctors using React, JavaScript, and Vite, enabling patient management. Includes a patient-facing mobile application developed with React Native for appointment booking and digital prescription access.

Technologies:
- MERN Stack (MongoDB, Express.js, React, Node.js)
- Tailwind CSS
- React Native

Links:
- Live Demo: https://doctoraid.site
- GitHub: https://github.com/DoctorAid
      `
    },
    '~/projects/ticket-booking.txt': {
      type: 'file',
      content: `
Project: Ticket Booking System

Description:
Developed a concurrent ticket booking system using Spring Boot with RESTful APIs for core functionalities, ensuring thread safety and data consistency. Implemented OOP principles and synchronization mechanisms to prevent double bookings and race conditions.

Technologies:
- Spring Boot
- Java
- React
- REST API

Links:
- GitHub: https://github.com/Sandith02/OOP-CW
      `
    },
    '~/projects/real-estate.txt': {
      type: 'file',
      content: `
Project: Real-Estate Website

Description:
Developed a modern and responsive real estate website using React and Tailwind CSS. Used React components to build dynamic and interactive features, enabling users to easily search, filter, and view property listings.

Technologies:
- React
- CSS

Links:
- GitHub: https://github.com/Sandith02/Real-State-Web-Frontend
      `
    },
    '~/projects/ecommerce.txt': {
      type: 'file',
      content: `
Project: E-Commerce Site

Description:
An E-Commerce site using HTML and CSS alongside with JavaScript, contributed for store and checkout functions. Applied modern CSS techniques including Flexbox and Grid layouts to ensure mobile responsiveness.

Technologies:
- JavaScript
- HTML
- CSS

Links:
- GitHub: https://github.com/Sandith02/E-Commerce-Site
      `
    }
  };

  // Process commands
  const processCommand = (cmd) => {
    // Save to command history
    if (cmd.trim()) {
      setCommandHistory(prev => [...prev, cmd]);
      setHistoryIndex(-1);
    }

    // Split command into parts
    const parts = cmd.trim().split(' ');
    const mainCommand = parts[0].toLowerCase();
    const args = parts.slice(1);

    // Implement command logic
    switch (mainCommand) {
      case 'clear':
        setHistory([]);
        return;

      case 'help':
        setShowHelp(true);
        setHistory(prev => [
          ...prev,
          { type: 'command', text: `$ ${cmd}` },
          { type: 'response', component: HelpComponent }
        ]);
        return;

      case 'ls':
        handleLs(args);
        break;

      case 'cd':
        handleCd(args);
        break;

      case 'cat':
        handleCat(args);
        break;

      case 'whoami':
        setHistory(prev => [
          ...prev,
          { type: 'command', text: `$ ${cmd}` },
          { type: 'response', text: 'Sandith Sithmaka Thenuwara - Full Stack Developer & Computer Science Student' }
        ]);
        break;

      case 'pwd':
        setHistory(prev => [
          ...prev,
          { type: 'command', text: `$ ${cmd}` },
          { type: 'response', text: currentDirectory }
        ]);
        break;

      case 'date':
        setHistory(prev => [
          ...prev,
          { type: 'command', text: `$ ${cmd}` },
          { type: 'response', text: new Date().toString() }
        ]);
        break;

      case 'echo':
        setHistory(prev => [
          ...prev,
          { type: 'command', text: `$ ${cmd}` },
          { type: 'response', text: args.join(' ') }
        ]);
        break;

      case 'exit':
        navigate('/');
        break;

      case 'open':
        handleOpen(args);
        break;

      case 'home':
        navigate('/');
        break;

      case '':
        setHistory(prev => [
          ...prev,
          { type: 'command', text: '$' }
        ]);
        break;

      default:
        setHistory(prev => [
          ...prev,
          { type: 'command', text: `$ ${cmd}` },
          { type: 'response', text: `Command not found: ${mainCommand}. Type 'help' to see available commands.` }
        ]);
    }
  };

  // Handle ls command
  const handleLs = (args) => {
    let path = currentDirectory;
    if (args.length > 0 && !args[0].startsWith('-')) {
      // Handle relative or absolute paths
      path = resolveFilePath(args[0]);
    }

    if (!fileSystem[path] || fileSystem[path].type !== 'directory') {
      setHistory(prev => [
        ...prev,
        { type: 'command', text: `$ ls ${args.join(' ')}` },
        { type: 'response', text: `ls: ${args[0]}: No such directory` }
      ]);
      return;
    }

    const children = fileSystem[path].children;
    const formattedChildren = children.map(child => {
      const childPath = path === '~' ? `~/${child}` : `${path}/${child}`;
      const isDirectory = fileSystem[childPath] && fileSystem[childPath].type === 'directory';
      return {
        name: child,
        isDirectory
      };
    });

    setHistory(prev => [
      ...prev,
      { type: 'command', text: `$ ls ${args.join(' ')}` },
      { type: 'response', component: () => (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {formattedChildren.map((item, idx) => (
            <div key={idx} className="flex items-center">
              {item.isDirectory ? (
                <FolderOpen className="w-4 h-4 mr-2 text-yellow-500" />
              ) : (
                <File className="w-4 h-4 mr-2 text-blue-400" />
              )}
              <span className={item.isDirectory ? 'text-yellow-500' : 'text-blue-400'}>
                {item.name}
              </span>
            </div>
          ))}
        </div>
      )}
    ]);
  };

  // Handle cd command
  const handleCd = (args) => {
    if (args.length === 0 || args[0] === '~') {
      setCurrentDirectory('~');
      setHistory(prev => [
        ...prev,
        { type: 'command', text: `$ cd ${args.join(' ')}` }
      ]);
      return;
    }

    const target = args[0];
    const newPath = resolveFilePath(target);

    if (!fileSystem[newPath]) {
      setHistory(prev => [
        ...prev,
        { type: 'command', text: `$ cd ${args.join(' ')}` },
        { type: 'response', text: `cd: ${target}: No such directory` }
      ]);
      return;
    }

    if (fileSystem[newPath].type !== 'directory') {
      setHistory(prev => [
        ...prev,
        { type: 'command', text: `$ cd ${args.join(' ')}` },
        { type: 'response', text: `cd: ${target}: Not a directory` }
      ]);
      return;
    }

    setCurrentDirectory(newPath);
    setHistory(prev => [
      ...prev,
      { type: 'command', text: `$ cd ${args.join(' ')}` }
    ]);
  };

  // Handle cat command
  const handleCat = (args) => {
    if (args.length === 0) {
      setHistory(prev => [
        ...prev,
        { type: 'command', text: `$ cat` },
        { type: 'response', text: 'Usage: cat <filename>' }
      ]);
      return;
    }

    const target = args[0];
    const filePath = resolveFilePath(target);

    if (!fileSystem[filePath]) {
      setHistory(prev => [
        ...prev,
        { type: 'command', text: `$ cat ${args.join(' ')}` },
        { type: 'response', text: `cat: ${target}: No such file or directory` }
      ]);
      return;
    }

    if (fileSystem[filePath].type !== 'file') {
      setHistory(prev => [
        ...prev,
        { type: 'command', text: `$ cat ${args.join(' ')}` },
        { type: 'response', text: `cat: ${target}: Is a directory` }
      ]);
      return;
    }

    setHistory(prev => [
      ...prev,
      { type: 'command', text: `$ cat ${args.join(' ')}` },
      { type: 'response', text: fileSystem[filePath].content.trim() }
    ]);
  };

  // Handle open command (for links)
  const handleOpen = (args) => {
    if (args.length === 0) {
      setHistory(prev => [
        ...prev,
        { type: 'command', text: `$ open` },
        { type: 'response', text: 'Usage: open <path>' }
      ]);
      return;
    }

    // Special case for specific external links
    if (args[0].startsWith('http')) {
      window.open(args[0], '_blank');
      setHistory(prev => [
        ...prev,
        { type: 'command', text: `$ open ${args.join(' ')}` },
        { type: 'response', text: `Opening ${args[0]} in a new tab...` }
      ]);
      return;
    }

    const target = args[0];
    const path = resolveFilePath(target);

    if (!fileSystem[path]) {
      setHistory(prev => [
        ...prev,
        { type: 'command', text: `$ open ${args.join(' ')}` },
        { type: 'response', text: `open: ${target}: No such file or directory` }
      ]);
      return;
    }

    if (fileSystem[path].type === 'directory') {
      // For directories, same as cd
      setCurrentDirectory(path);
      setHistory(prev => [
        ...prev,
        { type: 'command', text: `$ open ${args.join(' ')}` },
        { type: 'response', text: `Changed directory to ${path}` }
      ]);
      return;
    }

    // For files, just cat them
    setHistory(prev => [
      ...prev,
      { type: 'command', text: `$ open ${args.join(' ')}` },
      { type: 'response', text: fileSystem[path].content.trim() }
    ]);
  };

  // Resolve file paths
  const resolveFilePath = (path) => {
    if (path.startsWith('~/')) return path;
    if (path.startsWith('./')) return currentDirectory === '~' ? `~/${path.slice(2)}` : `${currentDirectory}/${path.slice(2)}`;
    if (path.startsWith('/')) return path;
    if (path === '..') {
      if (currentDirectory === '~') return '~';
      const parts = currentDirectory.split('/');
      return parts.slice(0, -1).join('/') || '~';
    }
    return currentDirectory === '~' ? `~/${path}` : `${currentDirectory}/${path}`;
  };

  // Handle input change
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    processCommand(input);
    setInput('');
  };

  // Handle key navigation through command history
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      // Simple tab completion
      const parts = input.split(' ');
      const lastPart = parts[parts.length - 1];
      
      if (currentDirectory === '~' && lastPart) {
        const matches = fileSystem['~'].children.filter(child => 
          child.startsWith(lastPart)
        );
        
        if (matches.length === 1) {
          parts[parts.length - 1] = matches[0];
          setInput(parts.join(' '));
        }
      }
    }
  };

  // Welcome message component
  const WelcomeMessage = () => (
    <div className="mb-4 space-y-2">
      <p className="text-[#a0b4cc] font-bold text-lg">Welcome to Sandith's Terminal Interface</p>
      <p>This interactive CLI allows you to explore my portfolio using Unix-like commands.</p>
      <p>Type <span className="text-yellow-400">help</span> to see available commands, or use the navigation shortcuts below:</p>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-3">
        <button 
          onClick={() => processCommand('cat about.txt')}
          className="bg-gray-800/50 hover:bg-gray-700/50 px-2 py-1 rounded flex items-center text-sm"
        >
          <User className="w-3 h-3 mr-1 text-[#a0b4cc]" />
          <span>About Me</span>
        </button>
        <button 
          onClick={() => processCommand('cd projects')}
          className="bg-gray-800/50 hover:bg-gray-700/50 px-2 py-1 rounded flex items-center text-sm"
        >
          <Folder className="w-3 h-3 mr-1 text-[#a0b4cc]" />
          <span>Projects</span>
        </button>
        <button 
          onClick={() => processCommand('cat skills.txt')}
          className="bg-gray-800/50 hover:bg-gray-700/50 px-2 py-1 rounded flex items-center text-sm"
        >
          <Code className="w-3 h-3 mr-1 text-[#a0b4cc]" />
          <span>Skills</span>
        </button>
        <button 
          onClick={() => processCommand('cat contact.txt')}
          className="bg-gray-800/50 hover:bg-gray-700/50 px-2 py-1 rounded flex items-center text-sm"
        >
          <Mail className="w-3 h-3 mr-1 text-[#a0b4cc]" />
          <span>Contact</span>
        </button>
      </div>
    </div>
  );

  // Help component
  const HelpComponent = () => (
    <div className="space-y-2">
      <p className="text-[#a0b4cc] font-bold">Available Commands:</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div>
          <p className="text-green-400">Navigation & Files:</p>
          <ul className="space-y-1 pl-4">
            <li><span className="text-yellow-400">ls</span> - List directory contents</li>
            <li><span className="text-yellow-400">cd</span> - Change directory</li>
            <li><span className="text-yellow-400">pwd</span> - Print working directory</li>
            <li><span className="text-yellow-400">cat</span> - Show file contents</li>
            <li><span className="text-yellow-400">open</span> - Open file/directory/URL</li>
          </ul>
        </div>
        <div>
          <p className="text-green-400">System:</p>
          <ul className="space-y-1 pl-4">
            <li><span className="text-yellow-400">clear</span> - Clear terminal screen</li>
            <li><span className="text-yellow-400">whoami</span> - Display user info</li>
            <li><span className="text-yellow-400">date</span> - Show current date/time</li>
            <li><span className="text-yellow-400">echo</span> - Print text</li>
            <li><span className="text-yellow-400">help</span> - Show this help info</li>
            <li><span className="text-yellow-400">exit</span> - Return to portfolio</li>
            <li><span className="text-yellow-400">home</span> - Go to homepage</li>
          </ul>
        </div>
      </div>
      <p className="text-gray-400 mt-2 text-sm">Tip: Use Arrow Up/Down to navigate through command history</p>
    </div>
  );

  // Render splash screen while loading
  if (isLoading) {
    return <TerminalSplash onComplete={handleSplashComplete} />;
  }

  return (
    <div className="min-h-screen bg-[#080c11] text-gray-300 flex flex-col">
      {/* Terminal header with exit button */}
      <div className="bg-gray-800/80 p-2 flex items-center justify-between">
        <div className="flex items-center">
          <button
            onClick={() => navigate('/')}
            className="bg-gray-700 hover:bg-gray-600 p-2 rounded-md flex items-center text-sm"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to Portfolio
          </button>
          <div className="ml-4 text-sm font-mono">
            <span className="text-green-400">sandith</span>
            <span className="text-gray-400">@</span>
            <span className="text-blue-400">portfolio</span>
            <span className="text-gray-400">:</span>
            <span className="text-yellow-400">{currentDirectory}</span>
          </div>
        </div>
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
      </div>

      {/* Terminal content */}
      <div 
        ref={terminalRef}
        className="flex-1 p-4 font-mono text-sm overflow-y-auto bg-[#0c1219]"
        onClick={handleTerminalClick}
        style={{
          backgroundImage: `
            linear-gradient(rgba(100, 120, 140, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(100, 120, 140, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }}
      >
        {/* Command history */}
        {history.map((entry, index) => (
          <div key={index} className="mb-2">
            {entry.type === 'command' ? (
              <div className="text-white">{entry.text}</div>
            ) : entry.type === 'welcome' ? (
              <entry.component />
            ) : entry.component ? (
              <div className="pl-4 mb-3 mt-1">
                <entry.component />
              </div>
            ) : (
              <div className="pl-4 mb-3 mt-1 whitespace-pre-wrap">{entry.text}</div>
            )}
          </div>
        ))}

        {/* Input form */}
        <form onSubmit={handleSubmit} className="flex items-center mt-1">
          <span className="text-green-400 mr-2">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent border-none outline-none text-white font-mono"
            autoFocus
            spellCheck="false"
            autoCapitalize="off"
            autoComplete="off"
            autoCorrect="off"
          />
        </form>
      </div>

      {/* Terminal footer with helpful info */}
      <div className="bg-gray-800/50 p-2 text-xs text-gray-400 flex justify-between items-center">
        <div>
          <span className="text-yellow-400">Tab</span> for autocomplete | 
          <span className="text-yellow-400 ml-1">↑↓</span> for history
        </div>
        <div className="flex items-center space-x-3">
          <a 
            href="https://github.com/Sandith02" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-gray-200 flex items-center"
          >
            <Github className="w-3 h-3 mr-1" />
            <span>GitHub</span>
          </a>
          <a 
            href="https://linkedin.com/in/sithmaka" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-gray-200 flex items-center"
          >
            <ExternalLink className="w-3 h-3 mr-1" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TerminalPage;