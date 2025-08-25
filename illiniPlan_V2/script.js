// Navigation functionality
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.classList.remove('active'));

    // Remove active class from nav items
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => item.classList.remove('active'));

    // Show selected section
    document.getElementById(sectionId).classList.add('active');

    // Add active class to corresponding nav item
    const activeNav = document.querySelector(`[data-section="${sectionId}"]`);
    if (activeNav) {
        activeNav.classList.add('active');
    }
}

// Tab functionality for plan builder
function showTab(tabId) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => content.classList.remove('active'));

    // Remove active class from tabs
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active'));

    // Show selected tab content
    document.getElementById(tabId + '-tab').classList.add('active');

    // Add active class to corresponding tab
    event.target.classList.add('active');
}

// Initialize navigation
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const section = item.getAttribute('data-section');
        if (section) {
            showSection(section);
        }
    });
});

// Sample data and functionality
let plans = [];
let currentPlan = {};

function updateDashboardStats() {
    document.getElementById('total-plans').textContent = plans.length;
    document.getElementById('courses-planned').textContent =
        plans.reduce((total, plan) => total + (plan.courses ? plan.courses.length : 0), 0);
    document.getElementById('plan-progress').textContent =
        plans.length > 0 ? '25%' : '0%';
    document.getElementById('years-to-graduate').textContent =
        plans.length > 0 ? '4' : '-';
}

function addSamplePlan() {
    const samplePlan = {
        id: Date.now(),
        name: document.getElementById('plan-name').value || 'My Degree Plan',
        major: document.getElementById('major-select').value || 'Computer Science',
        duration: document.getElementById('duration-select').value || '4',
        courses: [],
        createdAt: new Date().toLocaleDateString()
    };

    plans.push(samplePlan);
    updateDashboardStats();
    updatePlansList();
}

function updatePlansList() {
    const plansList = document.getElementById('plans-list');
    const emptyState = document.getElementById('plans-empty');

    if (plans.length === 0) {
        plansList.style.display = 'none';
        emptyState.style.display = 'block';
    } else {
        plansList.style.display = 'block';
        emptyState.style.display = 'none';

        plansList.innerHTML = plans.map(plan => `
                    <div style="border: 1px solid #e9ecef; border-radius: 8px; padding: 20px; margin-bottom: 16px;">
                        <h3 style="margin-bottom: 8px;">${plan.name}</h3>
                        <p style="color: #666; margin-bottom: 8px;">Major: ${plan.major} • Duration: ${plan.duration} years</p>
                        <p style="font-size: 12px; color: #999;">Created: ${plan.createdAt}</p>
                    </div>
                `).join('');
    }
}

// Save plan functionality
function savePlan() {
    const planName = document.getElementById('plan-name').value;
    const major = document.getElementById('major-select').value;
    const duration = document.getElementById('duration-select').value;

    if (!planName || !major) {
        alert('Please fill in the plan name and select a major.');
        return;
    }

    const newPlan = {
        id: Date.now(),
        name: planName,
        major: major,
        duration: duration,
        minor: document.getElementById('minor-select').value,
        concentration: document.getElementById('concentration-select').value,
        courses: [],
        createdAt: new Date().toLocaleDateString()
    };

    plans.push(newPlan);
    updateDashboardStats();
    updatePlansList();

    // Clear form
    document.getElementById('plan-name').value = '';
    document.getElementById('major-select').value = '';
    document.getElementById('minor-select').value = '';
    document.getElementById('concentration-select').value = '';

    // Show success message
    alert('Plan saved successfully!');

    // Navigate back to dashboard
    showSection('dashboard');
}

// Course search functionality
function searchCourses() {
    const searchTerm = document.getElementById('course-search-input').value.toLowerCase();
    const courseResults = document.querySelector('.course-results');

    if (!searchTerm.trim()) {
        courseResults.innerHTML = `
                    <div class="empty-icon">📚</div>
                    <div class="empty-title">No courses found</div>
                    <div class="empty-subtitle">Try adjusting your search criteria</div>
                `;
        return;
    }

    // Sample course data
    const sampleCourses = [
        { code: 'CS 125', name: 'Intro to Computer Science', credits: 4, description: 'Introduction to programming concepts' },
        { code: 'CS 225', name: 'Data Structures', credits: 4, description: 'Fundamental data structures and algorithms' },
        { code: 'MATH 220', name: 'Calculus I', credits: 5, description: 'Differential and integral calculus' },
        { code: 'MATH 231', name: 'Calculus II', credits: 3, description: 'Advanced calculus topics' },
        { code: 'PHYS 211', name: 'University Physics', credits: 4, description: 'Mechanics and thermodynamics' },
        { code: 'ECE 110', name: 'Introduction to Electronics', credits: 3, description: 'Basic electronic circuits' }
    ];

    const filteredCourses = sampleCourses.filter(course =>
        course.code.toLowerCase().includes(searchTerm) ||
        course.name.toLowerCase().includes(searchTerm)
    );

    if (filteredCourses.length === 0) {
        courseResults.innerHTML = `
                    <div class="empty-icon">🔍</div>
                    <div class="empty-title">No courses found</div>
                    <div class="empty-subtitle">Try a different search term</div>
                `;
    } else {
        courseResults.innerHTML = filteredCourses.map(course => `
                    <div style="border: 1px solid #e9ecef; border-radius: 8px; padding: 16px; margin-bottom: 12px; text-align: left; width: 100%; background: white;">
                        <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 8px;">
                            <div>
                                <h4 style="margin: 0; color: #e67e22;">${course.code}</h4>
                                <h3 style="margin: 4px 0; font-size: 16px;">${course.name}</h3>
                            </div>
                            <span style="background: #f1f3f4; padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 600;">
                                ${course.credits} credits
                            </span>
                        </div>
                        <p style="color: #666; margin: 0 0 12px 0; font-size: 14px;">${course.description}</p>
                        <button class="btn" style="padding: 8px 16px; font-size: 12px;" onclick="addCourse('${course.code}', '${course.name}')">
                            Add to Plan
                        </button>
                    </div>
                `).join('');
    }
}

function addCourse(code, name) {
    alert(`${code} - ${name} added to your plan!`);
}

// Enhanced interaction features
function showPlanDetails(planId) {
    const plan = plans.find(p => p.id === planId);
    if (plan) {
        alert(`Plan Details:\nName: ${plan.name}\nMajor: ${plan.major}\nDuration: ${plan.duration} years`);
    }
}

function deletePlan(planId) {
    if (confirm('Are you sure you want to delete this plan?')) {
        plans = plans.filter(p => p.id !== planId);
        updateDashboardStats();
        updatePlansList();
    }
}

// Add event listeners
document.addEventListener('DOMContentLoaded', function () {
    // Course search input
    const searchInput = document.getElementById('course-search-input');
    if (searchInput) {
        searchInput.addEventListener('input', searchCourses);
    }

    // Save plan button
    const saveButton = document.querySelector('.btn-success');
    if (saveButton) {
        saveButton.addEventListener('click', savePlan);
    }

    // Initialize dashboard
    updateDashboardStats();
    updatePlansList();
});

// Simulate some activity with animations
function animateStats() {
    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.transform = 'scale(1.02)';
            setTimeout(() => {
                card.style.transform = 'scale(1)';
            }, 200);
        }, index * 100);
    });
}

// Add some sample data for demonstration
setTimeout(() => {
    if (plans.length === 0) {
        // Add a sample plan after 2 seconds for demo purposes
        const samplePlan = {
            id: 1,
            name: 'Computer Science Degree',
            major: 'Computer Science',
            duration: '4',
            courses: ['CS 125', 'MATH 220', 'PHYS 211'],
            createdAt: new Date().toLocaleDateString()
        };
        // Uncomment the next lines to add sample data automatically
        // plans.push(samplePlan);
        // updateDashboardStats();
        // updatePlansList();
        // animateStats();
    }
}, 2000);

// Responsive navigation for mobile
function toggleMobileNav() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.transform = sidebar.style.transform === 'translateX(-100%)' ? 'translateX(0)' : 'translateX(-100%)';
}

// Add smooth transitions
document.querySelectorAll('.nav-item, .btn, .stat-card').forEach(element => {
    element.style.transition = 'all 0.3s ease';
});

// Keyboard shortcuts
document.addEventListener('keydown', function (e) {
    if (e.ctrlKey || e.metaKey) {
        switch (e.key) {
            case '1':
                e.preventDefault();
                showSection('dashboard');
                break;
            case '2':
                e.preventDefault();
                showSection('plan-builder');
                break;
            case '3':
                e.preventDefault();
                showSection('course-browser');
                break;
            case 's':
                e.preventDefault();
                if (document.getElementById('plan-builder').classList.contains('active')) {
                    savePlan();
                }
                break;
        }
    }
});

// Form validation
function validateForm() {
    const planName = document.getElementById('plan-name').value;
    const major = document.getElementById('major-select').value;

    const isValid = planName.trim() !== '' && major !== '';

    const saveButton = document.querySelector('.btn-success');
    if (saveButton) {
        saveButton.disabled = !isValid;
        saveButton.style.opacity = isValid ? '1' : '0.6';
    }

    return isValid;
}

// Add form validation listeners
['plan-name', 'major-select'].forEach(id => {
    const element = document.getElementById(id);
    if (element) {
        element.addEventListener('input', validateForm);
        element.addEventListener('change', validateForm);
    }
});

// Initialize form validation
setTimeout(validateForm, 100);