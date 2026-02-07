// JSONbin.io Configuration
// Get your X-Master-Key from: https://jsonbin.io/app/account/api-access
const JSONBIN_CONFIG = {
    baseUrl: 'https://api.jsonbin.io/v3/b',
    masterKey: 'YOUR_MASTER_KEY_HERE',  // Get from jsonbin.io/account/api-access
    bins: {
        users: 'YOUR_USERS_BIN_ID',      // Will be auto-created on first use
        jobs: 'YOUR_JOBS_BIN_ID',
        applications: 'YOUR_APPLICATIONS_BIN_ID'
    }
};

// For demo purposes without API key, we use localStorage
// In production, swap these functions with actual API calls

const DB = {
    // Initialize demo data
    init: () => {
        if (!localStorage.getItem('users')) {
            localStorage.setItem('users', JSON.stringify([]));
        }
        if (!localStorage.getItem('jobs')) {
            localStorage.setItem('jobs', JSON.stringify([]));
        }
        if (!localStorage.getItem('applications')) {
            localStorage.setItem('applications', JSON.stringify([]));
        }
    },

    // Users
    getUsers: () => JSON.parse(localStorage.getItem('users') || '[]'),
    saveUser: (user) => {
        const users = DB.getUsers();
        const existing = users.findIndex(u => u.email === user.email);
        if (existing >= 0) {
            users[existing] = user;
        } else {
            users.push({ ...user, id: Date.now().toString(), createdAt: new Date().toISOString() });
        }
        localStorage.setItem('users', JSON.stringify(users));
        return user;
    },
    getUserByEmail: (email) => DB.getUsers().find(u => u.email === email),

    // Jobs
    getJobs: () => JSON.parse(localStorage.getItem('jobs') || '[]'),
    saveJob: (job) => {
        const jobs = DB.getJobs();
        jobs.push({
            ...job,
            id: Date.now().toString(),
            createdAt: new Date().toISOString(),
            status: 'open'
        });
        localStorage.setItem('jobs', JSON.stringify(jobs));
        return job;
    },

    // Applications
    getApplications: () => JSON.parse(localStorage.getItem('applications') || '[]'),
    saveApplication: (app) => {
        const apps = DB.getApplications();
        apps.push({
            ...app,
            id: Date.now().toString(),
            appliedAt: new Date().toISOString(),
            status: 'applied'
        });
        localStorage.setItem('applications', JSON.stringify(apps));
        return app;
    }
};

// Initialize
DB.init();

// Current user session
let currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');

function setCurrentUser(user) {
    currentUser = user;
    localStorage.setItem('currentUser', JSON.stringify(user));
}

function logout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    window.location.href = 'login.html';
}
