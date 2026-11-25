const { spawn } = require('child_process');
const path = require('path');

// Clean any parent environment variable that forces node-mode
const env = { ...process.env };
delete env.ELECTRON_RUN_AS_NODE;

const electronPath = require('electron');

const child = spawn(electronPath, ['.'], {
  cwd: __dirname,
  env,
  stdio: 'inherit',
  windowsHide: false
});

child.on('close', (code) => {
  process.exit(code || 0);
});
