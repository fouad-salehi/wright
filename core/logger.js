const RESET = '\x1b[0m';
const GREEN = '\x1b[32m';
const RED = '\x1b[31m';
const YELLOW = '\x1b[33m';
const CYAN = '\x1b[36m';
const DIM = '\x1b[2m';
const BOLD = '\x1b[1m';

const success = (message) => {
    console.log(`  ${GREEN}✓${RESET} ${message}`);
};

const warning = (message) => {
    console.log(`  ${YELLOW}⚠${RESET} ${message}`);
};

const error = (message) => {
    console.log(`  ${RED}✕${RESET} ${message}`);
};

const info = (message) => {
    console.log(`  ${CYAN}›${RESET} ${message}`);
};

const blank = () => {
    console.log('');
};

const brand = () => {
    console.log('');
    console.log(`  ${CYAN}${BOLD}W R I G H T${RESET}`);
    console.log(`  ${DIM}Web Project Structure Generator${RESET}`);
    console.log(`  ${DIM}Powered by Fouad Salehi${RESET}`);
    console.log('');
};

module.exports = {
    RESET,
    GREEN,
    RED,
    YELLOW,
    CYAN,
    DIM,
    BOLD,
    success,
    warning,
    error,
    info,
    blank,
    brand,
};