// Application State
let currentState = {
    grade: null,
    subject: null,
    chapter: null,
    section: 0,
    quizAnswers: {}
};

// Authentication Functions
function showAuthTab(tab) {
    document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.auth-form').forEach(f => f.classList.remove('active'));
    
    if (tab === 'login') {
        document.querySelectorAll('.auth-tab')[0].classList.add('active');
        document.getElementById('login-form').classList.add('active');
    } else {
        document.querySelectorAll('.auth-tab')[1].classList.add('active');
        document.getElementById('register-form').classList.add('active');
    }
}

function register() {
    console.log('🔵 Register function called');
    
    try {
        const name = document.getElementById('register-name').value.trim();
        const email = document.getElementById('register-email').value.trim().toLowerCase();
        const password = document.getElementById('register-password').value;
        const confirm = document.getElementById('register-confirm').value;
        const grade = document.getElementById('register-grade').value;
        const errorEl = document.getElementById('register-error');
        const successEl = document.getElementById('register-success');

        console.log('📝 Form values:', { name, email, password: '***', grade });

        // Clear previous messages
        errorEl.textContent = '';
        successEl.textContent = '';
        errorEl.style.display = 'none';
        successEl.style.display = 'none';

        // Validation
        if (!name || !email || !password || !grade) {
            const msg = "Please fill in all fields";
            console.log('❌ Validation failed:', msg);
            errorEl.textContent = msg;
            errorEl.style.display = 'block';
            return;
        }

        if (password.length < 4) {
            const msg = "Password must be at least 4 characters";
            console.log('❌ Validation failed:', msg);
            errorEl.textContent = msg;
            errorEl.style.display = 'block';
            return;
        }

        if (password !== confirm) {
            const msg = "Passwords do not match";
            console.log('❌ Validation failed:', msg);
            errorEl.textContent = msg;
            errorEl.style.display = 'block';
            return;
        }

        console.log('✅ Validation passed, calling userManager.register()...');

        // Attempt registration
        const result = userManager.register(email, password, name, grade);
        
        console.log('📊 Registration result:', result);
        
        if (result.success) {
            console.log('✅ Registration successful!');
            
            // Show success message
            successEl.textContent = result.message;
            successEl.style.display = 'block';
            errorEl.style.display = 'none';
            
            // Clear form
            document.getElementById('register-name').value = '';
            document.getElementById('register-email').value = '';
            document.getElementById('register-password').value = '';
            document.getElementById('register-confirm').value = '';
            document.getElementById('register-grade').value = '';
            
            // Show success notification with animation
            const notification = document.createElement('div');
            notification.className = 'success-notification';
            notification.innerHTML = `
                <h3>🎉 Welcome ${result.name}!</h3>
                <p>Your account has been created successfully.</p>
                <p>A confirmation email has been sent to ${email}</p>
                <p>Redirecting to login...</p>
            `;
            document.body.appendChild(notification);
            
            console.log('🎨 Success notification displayed');
            
            // Auto-transition to login after 3 seconds
            setTimeout(() => {
                console.log('⏩ Redirecting to login...');
                notification.remove();
                showAuthTab('login');
                // Pre-fill email in login form
                document.getElementById('login-email').value = email;
                document.getElementById('login-password').focus();
            }, 3000);
            
        } else {
            console.log('❌ Registration failed:', result.message);
            errorEl.textContent = result.message;
            errorEl.style.display = 'block';
            successEl.style.display = 'none';
            
            // If user already exists, suggest login
            if (result.existingUser) {
                setTimeout(() => {
                    if (confirm("This email is already registered. Would you like to go to the login page?")) {
                        showAuthTab('login');
                        document.getElementById('login-email').value = email;
                        document.getElementById('login-password').focus();
                    }
                }, 500);
            }
        }
    } catch (error) {
        console.error('💥 ERROR in register function:', error);
        const errorEl = document.getElementById('register-error');
        errorEl.textContent = 'An error occurred: ' + error.message;
        errorEl.style.display = 'block';
    }
}

function login() {
    console.log('🔵 Login function called');
    
    try {
        const email = document.getElementById('login-email').value.trim().toLowerCase();
        const password = document.getElementById('login-password').value;
        const errorEl = document.getElementById('login-error');
        const successEl = document.getElementById('login-success');

        console.log('📝 Login attempt for:', email);

        // Clear previous messages
        errorEl.textContent = '';
        successEl.textContent = '';
        errorEl.style.display = 'none';
        successEl.style.display = 'none';

        if (!email || !password) {
            const msg = "Please enter email and password";
            console.log('❌ Validation failed:', msg);
            errorEl.textContent = msg;
            errorEl.style.display = 'block';
            return;
        }

        console.log('✅ Validation passed, calling userManager.login()...');

        const result = userManager.login(email, password);
        
        console.log('📊 Login result:', result);
        
        if (result.success) {
            console.log('✅ Login successful!');
            
            // Show success message briefly
            successEl.textContent = `Welcome back, ${result.name}!`;
            successEl.style.display = 'block';
            errorEl.style.display = 'none';
            
            // Transition to main screen after brief delay
            setTimeout(() => {
                console.log('⏩ Transitioning to main screen...');
                showMainScreen();
            }, 800);
        } else {
            console.log('❌ Login failed:', result.message);
            errorEl.textContent = result.message;
            errorEl.style.display = 'block';
            successEl.style.display = 'none';
        }
    } catch (error) {
        console.error('💥 ERROR in login function:', error);
        const errorEl = document.getElementById('login-error');
        errorEl.textContent = 'An error occurred: ' + error.message;
        errorEl.style.display = 'block';
    }
}

function logout() {
    if (confirm("Are you sure you want to logout?")) {
        userManager.logout();
        document.getElementById('auth-screen').classList.add('active');
        document.getElementById('main-screen').classList.remove('active');
        
        // Clear forms
        document.getElementById('login-email').value = '';
        document.getElementById('login-password').value = '';
        document.getElementById('login-error').textContent = '';
        document.getElementById('login-success').textContent = '';
    }
}

function showMainScreen() {
    const user = userManager.getCurrentUser();
    const userName = user.name || user.email || userManager.currentUser;
    document.getElementById('user-name').textContent = `Welcome, ${userName}!`;
    
    document.getElementById('auth-screen').classList.remove('active');
    document.getElementById('main-screen').classList.add('active');
    
    showGradeSelection();
}

// Navigation Functions
function showGradeSelection() {
    hideAllScreens();
    document.getElementById('grade-selection').classList.add('active');
    updateBreadcrumb([]);
}

function selectGrade(grade) {
    currentState.grade = grade;
    currentState.subject = null;
    currentState.chapter = null;
    
    showSubjectSelection();
}

function showSubjectSelection() {
    hideAllScreens();
    document.getElementById('subject-selection').classList.add('active');
    
    const subjectsContainer = document.getElementById('subject-cards');
    subjectsContainer.innerHTML = '';
    
    const subjects = curriculum[currentState.grade].subjects;
    
    for (const [key, subject] of Object.entries(subjects)) {
        if (subject.chapters.length > 0) {
            const card = document.createElement('div');
            card.className = `card subject-${subject.color}`;
            card.onclick = () => selectSubject(key);
            card.innerHTML = `
                <div class="card-icon">${subject.icon}</div>
                <h3>${subject.name.split(' - ')[1] || subject.name}</h3>
                <p>${subject.chapters.length} chapters available</p>
            `;
            subjectsContainer.appendChild(card);
        }
    }
    
    updateBreadcrumb([`Grade ${currentState.grade}`]);
}

function selectSubject(subject) {
    currentState.subject = subject;
    currentState.chapter = null;
    
    showChapterSelection();
}

function showChapterSelection() {
    hideAllScreens();
    document.getElementById('chapter-selection').classList.add('active');
    
    const chapterList = document.getElementById('chapter-list');
    chapterList.innerHTML = '';
    
    const chapters = curriculum[currentState.grade].subjects[currentState.subject].chapters;
    
    chapters.forEach((chapter, index) => {
        const completion = userManager.getChapterCompletion(currentState.grade, currentState.subject, chapter.id);
        
        const chapterItem = document.createElement('div');
        chapterItem.className = 'chapter-item';
        chapterItem.onclick = () => selectChapter(chapter.id);
        chapterItem.innerHTML = `
            <div class="chapter-number">${index + 1}</div>
            <div class="chapter-info">
                <h3>${chapter.title}</h3>
                <p>${chapter.description}</p>
            </div>
            ${completion > 0 ? `<div class="chapter-progress">${completion}% complete</div>` : ''}
        `;
        chapterList.appendChild(chapterItem);
    });
    
    const subjectName = curriculum[currentState.grade].subjects[currentState.subject].name;
    updateBreadcrumb([`Grade ${currentState.grade}`, subjectName]);
}

function selectChapter(chapterId) {
    currentState.chapter = chapterId;
    currentState.section = 0;
    currentState.quizAnswers = {};
    
    showChapterContent();
}

function showChapterContent() {
    hideAllScreens();
    document.getElementById('chapter-content').classList.add('active');
    
    renderCurrentSection();
    updateProgress();
    
    const chapter = getChapterData(currentState.chapter);
    const subjectName = curriculum[currentState.grade].subjects[currentState.subject].name;
    updateBreadcrumb([
        `Grade ${currentState.grade}`,
        subjectName,
        chapter.title
    ]);
}

function getChapterData(chapterId) {
    // Map chapter IDs to their data objects
    const chapterMap = {
        'work-energy': workEnergyChapter,
        'moles': molesChapter,
        'forces': forcesChapter,
        'chemical-reactions': chemicalReactionsChapter,
        'cells': cellsChapter,
        'functions': functionsChapter
    };
    
    return chapterMap[chapterId];
}

function renderCurrentSection() {
    const chapter = getChapterData(currentState.chapter);
    const section = chapter.sections[currentState.section];
    
    const contentDiv = document.getElementById('lesson-content');
    
    if (section.type === 'teaching') {
        contentDiv.innerHTML = `
            <div class="lesson-section">
                ${section.content}
            </div>
            <div class="nav-buttons">
                <button class="btn btn-secondary" onclick="previousSection()" ${currentState.section === 0 ? 'disabled' : ''}>
                    ← Previous
                </button>
                <button class="btn btn-primary" onclick="nextSection()">
                    ${currentState.section === chapter.sections.length - 1 ? 'Finish' : 'Next →'}
                </button>
            </div>
        `;
    } else if (section.type === 'quiz') {
        renderQuiz(section);
    }
}

function renderQuiz(section) {
    const contentDiv = document.getElementById('lesson-content');
    
    let quizHTML = `
        <div class="lesson-section">
            <h2>${section.title}</h2>
            <p>Test your understanding with these practice questions. Select your answers and submit when ready.</p>
            <div class="quiz-container">
    `;
    
    section.questions.forEach((q, qIndex) => {
        quizHTML += `
            <div class="quiz-question" data-question="${qIndex}">
                <h4>Question ${qIndex + 1}: ${q.question}</h4>
                <div class="quiz-options">
        `;
        
        q.options.forEach((option, oIndex) => {
            const isSelected = currentState.quizAnswers[qIndex] === oIndex;
            quizHTML += `
                <div class="quiz-option ${isSelected ? 'selected' : ''}" 
                     onclick="selectQuizAnswer(${qIndex}, ${oIndex})">
                    ${String.fromCharCode(65 + oIndex)}. ${option}
                </div>
            `;
        });
        
        quizHTML += `
                </div>
                <div class="quiz-explanation" id="explanation-${qIndex}"></div>
            </div>
        `;
    });
    
    quizHTML += `
            </div>
            <div class="nav-buttons">
                <button class="btn btn-secondary" onclick="previousSection()">
                    ← Back
                </button>
                <button class="btn btn-primary" onclick="submitQuiz()">
                    Submit Quiz
                </button>
            </div>
        </div>
    `;
    
    contentDiv.innerHTML = quizHTML;
}

function selectQuizAnswer(questionIndex, optionIndex) {
    currentState.quizAnswers[questionIndex] = optionIndex;
    
    // Update UI
    const questionDiv = document.querySelector(`[data-question="${questionIndex}"]`);
    questionDiv.querySelectorAll('.quiz-option').forEach((opt, idx) => {
        if (idx === optionIndex) {
            opt.classList.add('selected');
        } else {
            opt.classList.remove('selected');
        }
    });
}

function submitQuiz() {
    const chapter = getChapterData(currentState.chapter);
    const section = chapter.sections[currentState.section];
    
    let correct = 0;
    section.questions.forEach((q, qIndex) => {
        const userAnswer = currentState.quizAnswers[qIndex];
        const isCorrect = userAnswer === q.correct;
        
        if (isCorrect) correct++;
        
        // Show feedback
        const questionDiv = document.querySelector(`[data-question="${qIndex}"]`);
        const options = questionDiv.querySelectorAll('.quiz-option');
        
        options.forEach((opt, oIndex) => {
            opt.onclick = null; // Disable further clicks
            
            if (oIndex === q.correct) {
                opt.classList.add('correct');
            } else if (oIndex === userAnswer && !isCorrect) {
                opt.classList.add('incorrect');
            }
        });
        
        // Show explanation
        const explanationDiv = document.getElementById(`explanation-${qIndex}`);
        explanationDiv.className = 'quiz-explanation show';
        explanationDiv.innerHTML = `
            <strong>${isCorrect ? '✓ Correct!' : '✗ Incorrect'}</strong><br>
            ${q.explanation}
        `;
    });
    
    // Show results
    const percentage = Math.round((correct / section.questions.length) * 100);
    const resultDiv = document.createElement('div');
    resultDiv.className = 'quiz-result';
    resultDiv.innerHTML = `
        <h3>Quiz Complete!</h3>
        <p>You scored ${correct} out of ${section.questions.length} (${percentage}%)</p>
        <p>${percentage >= 80 ? 'Excellent work! 🎉' : percentage >= 60 ? 'Good effort! Keep practicing.' : 'Review the material and try again.'}</p>
    `;
    
    const contentDiv = document.getElementById('lesson-content');
    contentDiv.querySelector('.quiz-container').after(resultDiv);
    
    // Update progress
    userManager.updateProgress(currentState.grade, currentState.subject, currentState.chapter, 'quiz', true);
    
    // Update submit button
    const navButtons = contentDiv.querySelector('.nav-buttons');
    navButtons.innerHTML = `
        <button class="btn btn-secondary" onclick="previousSection()">
            ← Back to Lesson
        </button>
        <button class="btn btn-primary" onclick="showChapterSelection()">
            Back to Chapters
        </button>
    `;
}

function previousSection() {
    if (currentState.section > 0) {
        currentState.section--;
        renderCurrentSection();
        updateProgress();
        window.scrollTo(0, 0);
    }
}

function nextSection() {
    const chapter = getChapterData(currentState.chapter);
    
    if (currentState.section < chapter.sections.length - 1) {
        // Mark current section as complete
        userManager.updateProgress(
            currentState.grade,
            currentState.subject,
            currentState.chapter,
            `section-${currentState.section}`,
            true
        );
        
        currentState.section++;
        renderCurrentSection();
        updateProgress();
        window.scrollTo(0, 0);
    } else {
        // Finished chapter
        showChapterSelection();
    }
}

function updateProgress() {
    const chapter = getChapterData(currentState.chapter);
    const progress = ((currentState.section + 1) / chapter.sections.length) * 100;
    
    document.getElementById('progress-fill').style.width = progress + '%';
}

function updateBreadcrumb(parts) {
    const breadcrumb = document.getElementById('breadcrumb');
    
    if (parts.length === 0) {
        breadcrumb.innerHTML = '<a href="#" onclick="showGradeSelection()">Home</a>';
    } else {
        let html = '<a href="#" onclick="showGradeSelection()">Home</a>';
        
        parts.forEach((part, index) => {
            html += ' > ';
            if (index === 0) {
                html += `<a href="#" onclick="showSubjectSelection()">${part}</a>`;
            } else if (index === 1) {
                html += `<a href="#" onclick="showChapterSelection()">${part}</a>`;
            } else {
                html += `<span>${part}</span>`;
            }
        });
        
        breadcrumb.innerHTML = html;
    }
}

function hideAllScreens() {
    document.querySelectorAll('.selection-screen, .content-screen').forEach(screen => {
        screen.classList.remove('active');
    });
}

// Initialize App
window.addEventListener('DOMContentLoaded', () => {
    const currentUser = userManager.getCurrentUser();
    
    if (currentUser) {
        showMainScreen();
    }
});
