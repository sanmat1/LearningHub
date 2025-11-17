// User Manager - Authentication and Activity Tracking
console.log('📘 Loading UserManager...');

class UserManager {
    constructor() {
        this.currentUser = null;
        this.loadUsers();
        this.loadActivityLog();
    }

    loadUsers() {
        const usersData = localStorage.getItem('stemapp_users');
        this.users = usersData ? JSON.parse(usersData) : {};
    }

    saveUsers() {
        localStorage.setItem('stemapp_users', JSON.stringify(this.users));
    }

    loadActivityLog() {
        const logData = localStorage.getItem('stemapp_activity_log');
        this.activityLog = logData ? JSON.parse(logData) : [];
    }

    saveActivityLog() {
        localStorage.setItem('stemapp_activity_log', JSON.stringify(this.activityLog));
    }

    logActivity(email, action, details = {}) {
        const logEntry = {
            email: email,
            action: action,
            details: details,
            timestamp: new Date().toISOString(),
            readableTime: new Date().toLocaleString()
        };
        
        this.activityLog.push(logEntry);
        if (this.activityLog.length > 1000) {
            this.activityLog = this.activityLog.slice(-1000);
        }
        this.saveActivityLog();
        
        if (this.users[email]) {
            if (!this.users[email].activityLog) {
                this.users[email].activityLog = [];
            }
            this.users[email].activityLog.push(logEntry);
            this.users[email].lastActive = new Date().toISOString();
            this.saveUsers();
        }
    }

    validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    async sendEmail(to, subject, body) {
        console.log('📧 Email notification:', to);
        console.log('   Subject:', subject);
        this.logActivity(to, 'EMAIL_LOGGED', { subject });
        return { success: true, method: 'Console' };
    }

    register(email, password, name, grade) {
        console.log('📝 Registering:', email);
        
        if (!this.validateEmail(email)) {
            return { success: false, message: "Please enter a valid email address" };
        }

        if (this.users[email]) {
            return { 
                success: false, 
                message: "This email is already registered. Please use your existing credentials to login.",
                existingUser: true
            };
        }

        this.users[email] = {
            email, password, name, grade,
            progress: {},
            activityLog: [],
            createdAt: new Date().toISOString(),
            lastActive: new Date().toISOString(),
            registrationComplete: true
        };

        this.saveUsers();
        this.logActivity(email, 'USER_REGISTERED', { name, grade });

        const emailSubject = "Welcome to Ontario STEM Learning Platform!";
        const emailBody = `Hi ${name},\n\nWelcome! Your account is ready.\n\nEmail: ${email}\nGrade: ${grade}`;
        this.sendEmail(email, emailSubject, emailBody);

        return { success: true, message: "Registration successful!", name };
    }

    login(email, password) {
        console.log('🔐 Login attempt:', email);
        
        if (!this.validateEmail(email)) {
            return { success: false, message: "Please enter a valid email address" };
        }

        if (!this.users[email]) {
            return { success: false, message: "No account found with this email. Please register first." };
        }

        if (this.users[email].password !== password) {
            this.logActivity(email, 'LOGIN_FAILED', { reason: 'incorrect_password' });
            return { success: false, message: "Incorrect password. Please try again." };
        }

        this.currentUser = email;
        localStorage.setItem('stemapp_currentUser', email);
        this.users[email].lastActive = new Date().toISOString();
        this.saveUsers();
        this.logActivity(email, 'LOGIN_SUCCESS', { name: this.users[email].name });

        console.log('✅ Login successful:', this.users[email].name);
        return { success: true, message: "Login successful!", name: this.users[email].name };
    }

    logout() {
        if (this.currentUser) {
            this.logActivity(this.currentUser, 'LOGOUT');
        }
        this.currentUser = null;
        localStorage.removeItem('stemapp_currentUser');
    }

    getCurrentUser() {
        if (!this.currentUser) {
            this.currentUser = localStorage.getItem('stemapp_currentUser');
        }
        return this.currentUser ? this.users[this.currentUser] : null;
    }

    updateProgress(grade, subject, chapter, section, completed) {
        const user = this.getCurrentUser();
        if (!user) return;

        const progressKey = `${grade}_${subject}_${chapter}_${section}`;
        if (!user.progress) user.progress = {};
        user.progress[progressKey] = completed;
        user.lastActive = new Date().toISOString();
        this.saveUsers();
        this.logActivity(this.currentUser, 'PROGRESS_UPDATE', { grade, subject, chapter, section, completed });
    }

    getProgress(grade, subject, chapter) {
        const user = this.getCurrentUser();
        if (!user || !user.progress) return {};

        const chapterProgress = {};
        const prefix = `${grade}_${subject}_${chapter}_`;
        
        for (const key in user.progress) {
            if (key.startsWith(prefix)) {
                const section = key.replace(prefix, '');
                chapterProgress[section] = user.progress[key];
            }
        }
        return chapterProgress;
    }

    getChapterCompletion(grade, subject, chapter) {
        const progress = this.getProgress(grade, subject, chapter);
        const completed = Object.values(progress).filter(v => v).length;
        const total = Object.keys(progress).length;
        return total > 0 ? Math.round((completed / total) * 100) : 0;
    }

    getAllUsers() {
        return Object.keys(this.users).map(email => ({
            email, name: this.users[email].name, grade: this.users[email].grade,
            createdAt: this.users[email].createdAt, lastActive: this.users[email].lastActive,
            totalProgress: Object.keys(this.users[email].progress || {}).length
        }));
    }

    getAllActivity() { return this.activityLog; }
    getUserActivity(email) { return this.users[email] ? (this.users[email].activityLog || []) : []; }
    
    getStatistics() {
        const totalUsers = Object.keys(this.users).length;
        const totalActivity = this.activityLog.length;
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
        
        const activeUsers = Object.values(this.users).filter(user => {
            return user.lastActive && new Date(user.lastActive) > sevenDaysAgo;
        }).length;

        const gradeDistribution = {};
        Object.values(this.users).forEach(user => {
            gradeDistribution[user.grade] = (gradeDistribution[user.grade] || 0) + 1;
        });

        return { totalUsers, activeUsers, totalActivity, gradeDistribution };
    }
}

const userManager = new UserManager();

window.adminPanel = {
    viewAllUsers: () => { console.table(userManager.getAllUsers()); return userManager.getAllUsers(); },
    viewAllActivity: () => { console.table(userManager.getAllActivity()); return userManager.getAllActivity(); },
    viewUserActivity: (email) => { console.table(userManager.getUserActivity(email)); return userManager.getUserActivity(email); },
    viewStatistics: () => { const stats = userManager.getStatistics(); console.log('Statistics:', stats); return stats; },
    exportData: () => {
        const data = {
            users: userManager.getAllUsers(),
            activity: userManager.getAllActivity(),
            statistics: userManager.getStatistics()
        };
        console.log('Exported Data:', JSON.stringify(data, null, 2));
        return data;
    }
};

console.log('✅ UserManager ready');
