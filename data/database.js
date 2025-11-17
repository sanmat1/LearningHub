// Curriculum Database
const curriculum = {
    10: {
        name: "Grade 10",
        subjects: {
            chemistry: {
                name: "Science - Chemistry (SNC2D)",
                icon: "🧪",
                color: "chemistry",
                chapters: []
            },
            biology: {
                name: "Science - Biology (SNC2D)",
                icon: "🔬",
                color: "biology",
                chapters: []
            },
            physics: {
                name: "Science - Physics (SNC2D)",
                icon: "⚡",
                color: "physics",
                chapters: []
            },
            math: {
                name: "Mathematics (MPM2D)",
                icon: "📐",
                color: "math",
                chapters: []
            }
        }
    },
    11: {
        name: "Grade 11",
        subjects: {
            chemistry: {
                name: "Chemistry (SCH3U)",
                icon: "🧪",
                color: "chemistry",
                chapters: [
                    {
                        id: "moles",
                        title: "Moles and Stoichiometry",
                        description: "Understanding moles, mass, particles, and chemical calculations",
                        dataFile: "moles"
                    },
                    {
                        id: "chemical-reactions",
                        title: "Chemical Reactions",
                        description: "Types of reactions, balancing equations, and reaction predictions",
                        dataFile: "chemical-reactions"
                    }
                ]
            },
            biology: {
                name: "Biology (SBI3U)",
                icon: "🔬",
                color: "biology",
                chapters: [
                    {
                        id: "cells",
                        title: "Cell Structure and Function",
                        description: "Cell organelles, membrane transport, and cellular processes",
                        dataFile: "cells"
                    }
                ]
            },
            physics: {
                name: "Physics (SPH3U)",
                icon: "⚡",
                color: "physics",
                chapters: [
                    {
                        id: "work-energy",
                        title: "Work and Energy",
                        description: "Understanding work, energy, power, and conservation principles",
                        dataFile: "work-energy"
                    },
                    {
                        id: "forces",
                        title: "Forces and Newton's Laws",
                        description: "Types of forces, free body diagrams, and Newton's laws of motion",
                        dataFile: "forces"
                    }
                ]
            },
            math: {
                name: "Functions (MCR3U)",
                icon: "📐",
                color: "math",
                chapters: [
                    {
                        id: "functions",
                        title: "Introduction to Functions",
                        description: "Function notation, domain, range, and transformations",
                        dataFile: "functions"
                    }
                ]
            }
        }
    },
    12: {
        name: "Grade 12",
        subjects: {
            chemistry: {
                name: "Chemistry (SCH4U)",
                icon: "🧪",
                color: "chemistry",
                chapters: []
            },
            biology: {
                name: "Biology (SBI4U)",
                icon: "🔬",
                color: "biology",
                chapters: []
            },
            physics: {
                name: "Physics (SPH4U)",
                icon: "⚡",
                color: "physics",
                chapters: []
            },
            math: {
                name: "Advanced Functions (MHF4U)",
                icon: "📐",
                color: "math",
                chapters: []
            }
        }
    }
};

// User Management with Email-based Authentication
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

    // Log user activity
    logActivity(email, action, details = {}) {
        const logEntry = {
            email: email,
            action: action,
            details: details,
            timestamp: new Date().toISOString(),
            readableTime: new Date().toLocaleString()
        };
        
        this.activityLog.push(logEntry);
        
        // Keep only last 1000 entries to prevent excessive storage
        if (this.activityLog.length > 1000) {
            this.activityLog = this.activityLog.slice(-1000);
        }
        
        this.saveActivityLog();
        
        // Also add to user's personal activity log
        if (this.users[email]) {
            if (!this.users[email].activityLog) {
                this.users[email].activityLog = [];
            }
            this.users[email].activityLog.push(logEntry);
            this.users[email].lastActive = new Date().toISOString();
            this.saveUsers();
        }
    }

    // Validate email format
    validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Simulate email sending (in real app, this would call a backend API)
    sendEmail(to, subject, body) {
        console.log('=== EMAIL SENT ===');
        console.log('To:', to);
        console.log('Subject:', subject);
        console.log('Body:', body);
        console.log('==================');
        
        // Log the email sending
        this.logActivity(to, 'EMAIL_SENT', { subject: subject });
        
        // In a real application, you would call an API here:
        // fetch('/api/send-email', { method: 'POST', body: JSON.stringify({to, subject, body}) })
        
        return { success: true, message: 'Email sent successfully' };
    }

    register(email, password, name, grade) {
        // Validate email format
        if (!this.validateEmail(email)) {
            return { success: false, message: "Please enter a valid email address" };
        }

        // Check if email already exists
        if (this.users[email]) {
            return { 
                success: false, 
                message: "This email is already registered. Please use your existing credentials to login.",
                existingUser: true
            };
        }

        // Create new user
        this.users[email] = {
            email: email,
            password: password, // In production, this should be hashed!
            name: name,
            grade: grade,
            progress: {},
            activityLog: [],
            createdAt: new Date().toISOString(),
            lastActive: new Date().toISOString(),
            registrationComplete: true
        };

        this.saveUsers();
        
        // Log registration activity
        this.logActivity(email, 'USER_REGISTERED', { name: name, grade: grade });

        // Send welcome email
        const emailSubject = "Welcome to Ontario STEM Learning Platform!";
        const emailBody = `
            Hi ${name},
            
            Welcome to Ontario STEM Learning Platform!
            
            Your account has been successfully created with the following details:
            Email: ${email}
            Grade: ${grade}
            
            You can now login and start learning!
            
            Best regards,
            Ontario STEM Learning Team
        `;
        
        this.sendEmail(email, emailSubject, emailBody);

        return { 
            success: true, 
            message: "Registration successful! A confirmation email has been sent to your email address.",
            name: name
        };
    }

    login(email, password) {
        // Validate email format
        if (!this.validateEmail(email)) {
            return { success: false, message: "Please enter a valid email address" };
        }

        // Check if user exists
        if (!this.users[email]) {
            return { success: false, message: "No account found with this email. Please register first." };
        }

        // Check password
        if (this.users[email].password !== password) {
            this.logActivity(email, 'LOGIN_FAILED', { reason: 'incorrect_password' });
            return { success: false, message: "Incorrect password. Please try again." };
        }

        // Successful login
        this.currentUser = email;
        localStorage.setItem('stemapp_currentUser', email);
        
        // Update last active time
        this.users[email].lastActive = new Date().toISOString();
        this.saveUsers();
        
        // Log login activity
        this.logActivity(email, 'LOGIN_SUCCESS', { name: this.users[email].name });

        return { 
            success: true, 
            message: "Login successful!",
            name: this.users[email].name
        };
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
        
        // Log progress activity
        this.logActivity(this.currentUser, 'PROGRESS_UPDATE', {
            grade: grade,
            subject: subject,
            chapter: chapter,
            section: section,
            completed: completed
        });
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

    // Admin functions to view all users and activity
    getAllUsers() {
        return Object.keys(this.users).map(email => ({
            email: email,
            name: this.users[email].name,
            grade: this.users[email].grade,
            createdAt: this.users[email].createdAt,
            lastActive: this.users[email].lastActive,
            totalProgress: Object.keys(this.users[email].progress || {}).length
        }));
    }

    getAllActivity() {
        return this.activityLog;
    }

    getUserActivity(email) {
        if (!this.users[email]) return [];
        return this.users[email].activityLog || [];
    }

    // Get statistics
    getStatistics() {
        const totalUsers = Object.keys(this.users).length;
        const totalActivity = this.activityLog.length;
        
        // Count active users (logged in within last 7 days)
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
        
        const activeUsers = Object.values(this.users).filter(user => {
            if (!user.lastActive) return false;
            return new Date(user.lastActive) > sevenDaysAgo;
        }).length;

        // Count by grade
        const gradeDistribution = {};
        Object.values(this.users).forEach(user => {
            gradeDistribution[user.grade] = (gradeDistribution[user.grade] || 0) + 1;
        });

        return {
            totalUsers: totalUsers,
            activeUsers: activeUsers,
            totalActivity: totalActivity,
            gradeDistribution: gradeDistribution
        };
    }
}

const userManager = new UserManager();

// Admin Panel Functions - Access from browser console
window.adminPanel = {
    // View all users
    viewAllUsers: () => {
        console.table(userManager.getAllUsers());
        return userManager.getAllUsers();
    },
    
    // View all activity
    viewAllActivity: () => {
        console.table(userManager.getAllActivity());
        return userManager.getAllActivity();
    },
    
    // View specific user activity
    viewUserActivity: (email) => {
        console.table(userManager.getUserActivity(email));
        return userManager.getUserActivity(email);
    },
    
    // View statistics
    viewStatistics: () => {
        const stats = userManager.getStatistics();
        console.log('=== PLATFORM STATISTICS ===');
        console.log('Total Users:', stats.totalUsers);
        console.log('Active Users (last 7 days):', stats.activeUsers);
        console.log('Total Activities:', stats.totalActivity);
        console.log('Grade Distribution:', stats.gradeDistribution);
        console.log('==========================');
        return stats;
    },
    
    // Export all data
    exportData: () => {
        const data = {
            users: userManager.getAllUsers(),
            activity: userManager.getAllActivity(),
            statistics: userManager.getStatistics()
        };
        console.log('Data exported. Copy the object below:');
        console.log(JSON.stringify(data, null, 2));
        return data;
    },
    
    // View raw user data
    viewRawUserData: (email) => {
        console.log(userManager.users[email]);
        return userManager.users[email];
    }
};
